export const __rspack_esm_ids = [933528];
export const __webpack_modules__ = {
    EyEA: (function(e, t) {
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
            ChatSeatAccessScreen: () => z
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("zd8w"),
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
            v = n("lAQI"),
            y = n("fDv2"),
            b = n("rLEB"),
            x = n("Ietk"),
            w = n("twmu"),
            C = n("h6fL"),
            I = n("Kwur"),
            _ = n("udGC"),
            S = n("aTcy"),
            j = n("JNtf"),
            T = n("mUDD"),
            E = n("Ot7V"),
            P = n("SGsN"),
            M = n("DAA7"),
            A = n("yGJW"),
            k = n("GDNt");

        function R(e) {
            let t, n, l, c, d, u, p, v, y, k, R, F, z, L, B, D, G, H, q, W, K, V, U = (0, r.c)(70),
                {
                    account: Q,
                    accountId: $,
                    userId: Y,
                    onClose: J,
                    onSwitchToWork: X
                } = e,
                Z = (0, o.y)(g.a),
                ee = (0, f.a)(),
                {
                    email: et
                } = (0, C.a)(),
                [en, ea] = (0, s.useState)(),
                er = (0, s.useRef)(!0);
            U[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => (er.current = !0, () => {
                er.current = !1
            }), n = [], U[0] = t, U[1] = n) : (t = U[0], n = U[1]), (0, s.useEffect)(t, n);
            let eo = "account-owner" === Q.account.account_user_role,
                es = "account-admin" === Q.account.account_user_role,
                ei = !0 === Q.entitlement.has_active_subscription,
                el = (eo || es) && ei,
                ec = eo || el;
            U[2] !== el || U[3] !== eo ? (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_REQUEST_CHANGE", el ? l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_UPDATE_DIRECTLY" : eo && (l = "CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_PRIMARY_CTA_TYPE_GO_TO_WORKSPACE_AND_UPDATE"), U[2] = el, U[3] = eo, U[4] = l) : l = U[4], U[5] !== Q.account.account_user_role || U[6] !== l || U[7] !== ei || U[8] !== Z ? (c = (e, t) => {
                (0, A.a)(Z, m.yd, {
                    actionType: e,
                    ctaType: void 0 !== t && t ? l : void 0,
                    userRole: Q.account.account_user_role ?? void 0,
                    hasPaidSubscription: ei
                })
            }, U[5] = Q.account.account_user_role, U[6] = l, U[7] = ei, U[8] = Z, U[9] = c) : c = U[9];
            let ed = c;
            U[10] !== J ? (d = () => {
                J(), (0, E.f)({
                    href: new URL("/codex/cloud", S.h).toString(),
                    initiator: "open_in_browser_bridge"
                })
            }, U[10] = J, U[11] = d) : d = U[11];
            let eu = d;
            U[12] !== Q.account.subscription_seat_pools_enabled || U[13] !== $ || U[14] !== eu || U[15] !== el || U[16] !== et || U[17] !== ee || U[18] !== eo || U[19] !== ed || U[20] !== J || U[21] !== X || U[22] !== en || U[23] !== Z || U[24] !== Y ? (u = async () => {
                if ("requesting" !== en) {
                    if (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_PRIMARY_CTA_CLICKED", !0), eo && !el) {
                        let e = new URL("/admin/members", S.h);
                        e.searchParams.set("account_id", $), et && e.searchParams.set("search", et);
                        let t = e.toString(),
                            n = (0, M.c)(Z, t, $),
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
                            if (Q.account.subscription_seat_pools_enabled ? await I.Request.safePost("/accounts/{account_id}/users/{user_id}/seat/update", {
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
                                    isExpectedError: O
                                }) : await I.Request.safePatch("/accounts/{account_id}/users/{user_id}", {
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
                            (0, _.e)(Z), await (0, x.g)("accounts-check"), await Promise.all([Z.query.invalidate(w.b, $), Z.queryClient.invalidateQueries({
                                queryKey: ["accounts", "check"]
                            })]), er.current && J()
                        } else {
                            if ((0, b.c)(Z, $), await I.Request.safePost("/accounts/{account_id}/invites/request", {
                                    parameters: {
                                        path: {
                                            account_id: $
                                        }
                                    }
                                }), !er.current) return;
                            X ? (J(), X()) : eu(), Z.get(P.f).success(ee.formatMessage({
                                id: "UsageBasedWorkspaceAccessModal.accessRequestSubmittedToast",
                                defaultMessage: "Access request submitted"
                            }))
                        }
                    } catch (e) {
                        er.current && ea(N(e) ?? "error")
                    }
                }
            }, U[12] = Q.account.subscription_seat_pools_enabled, U[13] = $, U[14] = eu, U[15] = el, U[16] = et, U[17] = ee, U[18] = eo, U[19] = ed, U[20] = J, U[21] = X, U[22] = en, U[23] = Z, U[24] = Y, U[25] = u) : u = U[25];
            let eh = u;
            U[26] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.title",
                defaultMessage: "You don’t have access to Chat on this plan"
            }), U[26] = p) : p = U[26];
            let ep = p;
            U[27] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.message",
                defaultMessage: "You are assigned Work access only. Reach out to your admin to request access to ChatGPT."
            }), U[27] = v) : v = U[27];
            let eg = v;
            if (ec) {
                let e;
                U[28] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.ownerMessage",
                    defaultMessage: "Your current seat is Work-only. Update your seat type in Workspace settings to start using ChatGPT."
                }), U[28] = e) : e = U[28], eg = e
            } else if (es) {
                let e;
                U[29] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(i.a, {
                    id: "UsageBasedWorkspaceAccessModal.chatWork.adminMessage",
                    defaultMessage: "You are assigned Work access only. Ask your workspace owner to buy ChatGPT seats, then update your seat type in Workspace settings."
                }), U[29] = e) : e = U[29], eg = e
            }
            U[30] !== ed || U[31] !== J ? (y = e => {
                e || (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_CLOSED"), J())
            }, U[30] = ed, U[31] = J, U[32] = y) : y = U[32], U[33] !== eh ? (k = e => {
                e.preventDefault(), eh()
            }, U[33] = eh, U[34] = k) : k = U[34], U[35] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)(j.e, {
                className: "heading-lg font-semibold",
                children: ep
            }), U[35] = R) : R = U[35], U[36] !== eg ? (F = (0, a.jsxs)("div", {
                className: "flex w-full max-w-md flex-col gap-4",
                children: [R, (0, a.jsx)(j.d, {
                    className: "text-lg leading-6 text-secondary",
                    children: eg
                })]
            }), U[36] = eg, U[37] = F) : F = U[37];
            let em = "requesting" === en,
                ef = "requesting" === en;
            return U[38] !== ec ? (z = ec ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.updateSeatButton",
                defaultMessage: "Update seat"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.requestAccessButton",
                defaultMessage: "Request access"
            }), U[38] = ec, U[39] = z) : z = U[39], U[40] !== em || U[41] !== ef || U[42] !== z ? (L = (0, a.jsx)(h.a, {
                autoFocus: !0,
                className: "w-full",
                size: "auth",
                type: "submit",
                loading: em,
                disabled: ef,
                children: z
            }), U[40] = em, U[41] = ef, U[42] = z, U[43] = L) : L = U[43], U[44] !== eu || U[45] !== ed || U[46] !== J || U[47] !== X ? (B = () => {
                X ? (J(), X()) : (ed("CHATGPT_USAGE_BASED_WORKSPACE_ACCESS_MODAL_ACTION_TYPE_BACK_TO_CODEX_CLICKED"), eu())
            }, U[44] = eu, U[45] = ed, U[46] = J, U[47] = X, U[48] = B) : B = U[48], U[49] !== X ? (D = X ? (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.chatWork.switchToWorkButton",
                defaultMessage: "Switch to Work"
            }) : (0, a.jsx)(i.a, {
                id: "UsageBasedWorkspaceAccessModal.backToCodexButton",
                defaultMessage: "Back to Codex"
            }), U[49] = X, U[50] = D) : D = U[50], U[51] !== B || U[52] !== D ? (G = (0, a.jsx)(h.a, {
                className: "w-full",
                color: "outlineGhost",
                size: "auth",
                onClick: B,
                children: D
            }), U[51] = B, U[52] = D, U[53] = G) : G = U[53], U[54] !== L || U[55] !== G ? (H = (0, a.jsxs)("div", {
                className: "flex w-full max-w-xs flex-col gap-3",
                children: [L, G]
            }), U[54] = L, U[55] = G, U[56] = H) : H = U[56], U[57] !== ee || U[58] !== en ? (q = null != en && "requesting" !== en ? (0, a.jsx)("p", {
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
            }) : null, U[57] = ee, U[58] = en, U[59] = q) : q = U[59], U[60] !== F || U[61] !== H || U[62] !== q ? (W = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-8 p-10 text-center",
                children: [F, H, q]
            }), U[60] = F, U[61] = H, U[62] = q, U[63] = W) : W = U[63], U[64] !== W || U[65] !== k ? (K = (0, a.jsx)(T.b, {
                as: "form",
                className: "select-none",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: k,
                children: W
            }), U[64] = W, U[65] = k, U[66] = K) : K = U[66], U[67] !== K || U[68] !== y ? (V = (0, a.jsx)(j.a, {
                open: !0,
                size: "wide",
                variant: "chatgpt",
                onOpenChange: y,
                children: K
            }), U[67] = K, U[68] = y, U[69] = V) : V = U[69], V
        }

        function O(e) {
            return null != N(e)
        }

        function N(e) {
            if (e instanceof k.a && 409 === e.status) try {
                let t = v.F({
                    detail: v.F({
                        operation: v.z("switch"),
                        error_type: v.z("stale_state"),
                        retry: v.F({
                            reason: v.z("renewal_in_progress"),
                            retry_at: y.b()
                        })
                    })
                }).safeParse(JSON.parse(e.message));
                return t.success ? t.data.detail.retry : void 0
            } catch {
                return
            }
        }
        var F = n("pBDs");

        function z(e) {
            let t, n, s = (0, r.c)(9),
                {
                    modeToggle: i,
                    onSwitchToWork: c
                } = e,
                h = (0, o.y)(g.a),
                p = (0, o.z)(F.a),
                m = (0, o.z)(d.v),
                f = (0, l._)();
            if ("restricted" !== p.status) return null;
            let v = `${p.accountId}:${p.userId}`;
            return s[0] !== f || s[1] !== c || s[2] !== h || s[3] !== m.status ? (t = "allowed" === m.status ? c ?? (() => {
                (0, u.m)(h, "work"), f("/")
            }) : void 0, s[0] = f, s[1] = c, s[2] = h, s[3] = m.status, s[4] = t) : t = s[4], s[5] !== i || s[6] !== v || s[7] !== t ? (n = (0, a.jsx)(L, {
                modeToggle: i,
                onSwitchToWork: t
            }, v), s[5] = i, s[6] = v, s[7] = t, s[8] = n) : n = s[8], n
        }

        function L(e) {
            let t, n, l, c, d, u = (0, r.c)(13),
                {
                    modeToggle: g,
                    onSwitchToWork: m
                } = e,
                f = (0, o.z)(F.a),
                [v, y] = (0, s.useState)(!1);
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
            }), u[3] = l) : l = u[3], u[4] !== v || u[5] !== m || u[6] !== f.account || u[7] !== f.accountId || u[8] !== f.userId ? (c = v ? null : (0, a.jsx)(R, {
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
            let t, n, s = (0, r.c)(4),
                {
                    children: i,
                    enabled: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "chatgpt.seat-access"
            }, s[0] = t) : t = s[0];
            let d = (0, o.x)(c.a, t);
            return l ? d.isLoading ? null : (s[1] !== d.isCapable || s[2] !== i ? (n = d.isCapable ? (0, a.jsx)(z, {}) : i, s[1] = d.isCapable, s[2] = i, s[3] = n) : n = s[3], n) : i
        }
    }),
    Pyg2: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("mYNH"),
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
                    g = (0, o.y)(i.a),
                    m = (0, o.z)("home" === g.value.routeKind && l.a),
                    f = m ? "floating" : p,
                    v = !m && t.reserveContent,
                    y = !!m || t.showHeader;
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
                        ready: g,
                        failed: m
                    } = e,
                    f = void 0 !== m && m,
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
                }), l = [b], h[2] = b, h[3] = n, h[4] = l) : (n = h[3], l = h[4]), (0, o.useEffect)(n, l), h[5] !== f || h[6] !== g ? (c = () => {
                    !g && f && y.current?.fail("load_failed")
                }, d = [g, f], h[5] = f, h[6] = g, h[7] = c, h[8] = d) : (c = h[7], d = h[8]), (0, o.useEffect)(c, d), h[9] !== g ? (u = g ? (0, a.jsx)(i.a, {
                    requireVisibleAtPaint: !0,
                    onPaint: () => {
                        y.current?.mark("content_visible"), y.current?.end()
                    }
                }) : null, h[9] = g, h[10] = u) : u = h[10], u
            }
        })
    }),
    Azn0: (function(e, t, n) {
        var a = n("Q840"),
            r = n("QcW8"),
            o = n("ZU27"),
            s = n("tSEg");
        let i = (0, a.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return null != t(r.bb) && null != t(o.l.activeTab$)
            }),
            l = (0, a.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return t(i) && !t(r.C)
            });
        n.d(t, {}, {
            a: i,
            b: l
        })
    }),
    mYNH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("l2oX"),
            s = n("Q840"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("Q2Qp"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("wD9O"),
            p = n("nKJ6"),
            g = n("kois"),
            m = n("vi3X"),
            f = n("O9Pc"),
            v = n("fDIZ"),
            y = n("jEN2"),
            b = n("AKr5"),
            x = n("wqvF"),
            w = n("giDA"),
            C = n("fQ9c"),
            I = n("ttIa"),
            _ = n("xD3Z"),
            S = n("Z2JT"),
            j = n("Sgih"),
            T = n("zeCl"),
            E = n("tSEg"),
            P = n("hZax"),
            M = n("SHid"),
            A = n("El6m"),
            k = n("dN0a"),
            R = n("WwnD"),
            O = n("giVD"),
            N = n("Vhua"),
            F = n("Azn0"),
            z = n("abd8"),
            L = n("GMTh");
        let B = (0, s.c)(E.a, e => {
            let {
                get: t
            } = e, n = t(u.l.activeTab$);
            if (n?.tabType.kind !== T.a) return !1;
            let a = T.b.safeParse(n.props);
            if (!a.success) return !1;
            let r = t(g.i),
                o = r?.kind === "codex" ? r : r?.page;
            return o?.accountId === a.data.accountId && o?.pageId === a.data.pageId && (r?.kind === "codex" ? null == r.documentType : r?.turnAttribution?.origin_page_document_type === "page")
        });

        function D(e) {
            let t, n, o, l, c, d, u, h, p, g, f, y, b, x, C, I = (0, r.c)(49),
                {
                    children: _,
                    composerRef: S,
                    mainContentElement: j,
                    presentation: T,
                    paneContext: P,
                    layout: M,
                    reserveContent: R,
                    reserveFullComposerHeight: O
                } = e,
                N = (0, s.y)(E.a),
                F = (0, i.useContext)(A.b),
                z = (0, i.useContext)(v.a),
                L = (0, i.useContext)(m.a),
                B = (0, i.useContext)(w.a),
                {
                    activeBrowserTabId: D
                } = F,
                G = null != P,
                {
                    isCompact: H,
                    isDockedTop: q,
                    isHidden: W,
                    isMinimized: K
                } = T,
                {
                    isMoving: V,
                    composerContentHeight: U,
                    dockedReservePx: Q
                } = M,
                $ = !R || W || K ? 0 : Math.max(118, H ? Q : 0, O ? U + 118 - 102 : 0),
                Y = q && H && Q > 0 ? $ : 0,
                [J, X] = (0, i.useState)(!K);
            (H || K) && !K !== J && X(!K);
            let Z = R && !W && J ? k.b : 0;
            I[0] !== D || I[1] !== S || I[2] !== G ? (t = () => {
                if (G || null == D) return;
                let e = S.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && S.current?.contains(e) && e.blur()
            }, n = [D, S, G], I[0] = D, I[1] = S, I[2] = G, I[3] = t, I[4] = n) : (t = I[3], n = I[4]), (0, i.useLayoutEffect)(t, n), I[5] !== S || I[6] !== Z || I[7] !== q || I[8] !== W || I[9] !== K || I[10] !== G || I[11] !== j || I[12] !== $ || I[13] !== N || I[14] !== Y ? (o = () => {
                if (G || null == j) return;
                N.set(k.n, {
                    owner: S,
                    style: {
                        [k.a]: q ? `${Z}px 0 0` : `0 0 ${Z}px`,
                        [k.c]: `${W||K||q?0:102}px`,
                        [k.d]: `${q?0:$}px`,
                        [k.g]: `${q?$:0}px`
                    }
                }), (0, k.u)(N, q ? 0 : $), N.set(k.o, Y);
                let e = q ? "top" : "bottom";
                N.set(k.k, 0 === Z ? null : e)
            }, l = [S, Z, G, q, W, K, j, $, N, Y], I[5] = S, I[6] = Z, I[7] = q, I[8] = W, I[9] = K, I[10] = G, I[11] = j, I[12] = $, I[13] = N, I[14] = Y, I[15] = o, I[16] = l) : (o = I[15], l = I[16]), (0, i.useLayoutEffect)(o, l), I[17] !== S || I[18] !== G || I[19] !== j || I[20] !== N ? (c = () => {
                if (!G && null != j) return () => {
                    let e = N.get(k.n);
                    e?.owner === S && (N.set(k.n, {
                        ...e,
                        owner: null
                    }), (0, k.u)(N, 0), N.set(k.o, 0), N.set(k.k, null))
                }
            }, d = [S, G, j, N], I[17] = S, I[18] = G, I[19] = j, I[20] = N, I[21] = c, I[22] = d) : (c = I[21], d = I[22]), (0, i.useLayoutEffect)(c, d);
            let ee = !H || K || V || U > 102;
            I[23] !== S || I[24] !== ee || I[25] !== G || I[26] !== N ? (u = () => {
                let e = S.current;
                if (G || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    N.set(k.j, ee || t)
                };
                t();
                let n = ee ? null : new MutationObserver(t);
                return n?.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n?.disconnect()
                }
            }, h = [S, ee, G, N], I[23] = S, I[24] = ee, I[25] = G, I[26] = N, I[27] = u, I[28] = h) : (u = I[27], h = I[28]), (0, i.useLayoutEffect)(u, h), I[29] !== G || I[30] !== N ? (g = () => () => {
                G || N.set(k.j, !1)
            }, p = [G, N], I[29] = G, I[30] = N, I[31] = p, I[32] = g) : (p = I[31], g = I[32]), (0, i.useLayoutEffect)(g, p);
            let et = null == P ? F : P.transition,
                en = null == P ? z : P.escapeHandler,
                ea = null == P ? L : P.bannerTarget,
                er = null == P ? B : P.overlayOwner,
                eo = G ? "contents" : void 0;
            return I[33] !== _ || I[34] !== S || I[35] !== eo ? (f = (0, a.jsx)("div", {
                ref: S,
                className: eo,
                "data-right-panel-composer-overlay-content": "true",
                children: _
            }), I[33] = _, I[34] = S, I[35] = eo, I[36] = f) : f = I[36], I[37] !== er || I[38] !== f ? (y = (0, a.jsx)(w.a, {
                value: er,
                children: f
            }), I[37] = er, I[38] = f, I[39] = y) : y = I[39], I[40] !== ea || I[41] !== y ? (b = (0, a.jsx)(m.a, {
                value: ea,
                children: y
            }), I[40] = ea, I[41] = y, I[42] = b) : b = I[42], I[43] !== en || I[44] !== b ? (x = (0, a.jsx)(v.a, {
                value: en,
                children: b
            }), I[43] = en, I[44] = b, I[45] = x) : x = I[45], I[46] !== et || I[47] !== x ? (C = (0, a.jsx)(A.b, {
                value: et,
                children: x
            }), I[46] = et, I[47] = x, I[48] = C) : C = I[48], C
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, g, T, G, H, q = (0, r.c)(62),
                    {
                        children: W,
                        composerOnly: K,
                        forceExpanded: V,
                        placement: U,
                        showHeader: Q,
                        showConversationTitleMenu: $,
                        showComposerDivider: Y,
                        isHidden: J,
                        persistPresentation: X,
                        reserveContent: Z,
                        reserveFullComposerHeight: ee,
                        onPresentationChange: et,
                        title: en,
                        minimizedIcon: ea,
                        titleContent: er,
                        statusState: eo,
                        titleStatusState: es,
                        hasElicitation: ei,
                        notifications: el,
                        workingPreview: ec,
                        compactWorkingPreview: ed,
                        responsePreview: eu,
                        persistResponsePreview: eh,
                        renderTranscript: ep,
                        hasConversation: eg,
                        hasTranscript: em,
                        pendingFormId: ef,
                        emptyState: ev
                    } = e,
                    ey = void 0 !== K && K,
                    eb = void 0 !== V && V,
                    ex = void 0 === Q || Q,
                    ew = void 0 === Y ? !ey : Y,
                    eC = void 0 === X || X,
                    eI = void 0 === ef ? j.a : ef,
                    e_ = (0, s.y)(E.a),
                    eS = "pane" === (void 0 === U ? "floating" : U),
                    ej = (0, P.f)("2163293173"),
                    eT = ej ? ev : void 0,
                    eE = !ey || ej && (null != eT || (em ?? null != ep)),
                    eP = (0, s.z)(!!eE && F.a),
                    eM = (0, l.a)(),
                    {
                        isHidden: eA
                    } = (0, L.a)(eS ? "embedded" : "content"),
                    ek = void 0 !== J && J || eA,
                    eR = (0, s.z)(!(void 0 !== $ && $) || eS || ek ? null : O.a),
                    eO = (0, i.useContext)(c.a),
                    eN = (0, i.useContext)(A.b),
                    eF = (0, i.useContext)(A.a),
                    ez = (0, i.useContext)(f.a),
                    eL = (0, i.useContext)(v.a),
                    eB = (0, i.useContext)(m.a),
                    eD = (0, i.useContext)(w.a),
                    eG = (0, h.c)();
                q[0] !== eG ? (t = e => {
                    let {
                        x: t,
                        y: n
                    } = e;
                    return {
                        x: t / eG,
                        y: n / eG
                    }
                }, q[0] = eG, q[1] = t) : t = q[1];
                let eH = t,
                    [eq, eW] = (0, i.useState)(null),
                    eK = !(0, s.z)(k.s),
                    eV = (0, i.useRef)(null),
                    eU = (0, s.z)(eI),
                    eQ = (0, s.z)(eC ? S.b : void 0);
                eE || ex || (eQ = "compact");
                let e$ = (0, s.z)(null == eU && (ei ?? A.c)),
                    eY = (0, s.z)(u.l.activeTab$),
                    eJ = (0, s.z)(eS || ek ? null : B),
                    eX = (0, s.z)(d.r),
                    eZ = (0, s.z)(!!eX && N.i);
                q[2] !== eY || q[3] !== eS ? (n = eS ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(eY), q[2] = eY, q[3] = eS, q[4] = n) : n = q[4];
                let e0 = n,
                    e1 = void 0 !== ee && ee || eY?.tabType.kind === "latex-document" || eY?.tabType.kind === "image-preview";
                q[5] !== eU ? (g = () => {
                    let e = null != eU ? (0, b.a)(eV.current) : eV.current?.querySelector("[contenteditable='true']");
                    null == e || (0, y.g)(e) || e.focus({
                        preventScroll: !0
                    })
                }, q[5] = eU, q[6] = g) : g = q[6];
                let e2 = g;
                q[7] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, a.jsx)("div", {
                    ref: e => {
                        null != e && eW(e)
                    },
                    className: "contents"
                }), q[7] = T) : T = q[7];
                let e3 = eS || ek;
                return q[8] !== e0 || q[9] !== eY || q[10] !== eJ || q[11] !== eE || q[12] !== eP || q[13] !== W || q[14] !== ed || q[15] !== ey || q[16] !== ej || q[17] !== eT || q[18] !== e2 || q[19] !== eb || q[20] !== eg || q[21] !== e$ || q[22] !== em || q[23] !== eX || q[24] !== eB || q[25] !== eL || q[26] !== eD || q[27] !== eF || q[28] !== eN || q[29] !== eM || q[30] !== ek || q[31] !== eK || q[32] !== eS || q[33] !== eO || q[34] !== ea || q[35] !== eZ || q[36] !== el || q[37] !== et || q[38] !== eq || q[39] !== eU || q[40] !== eC || q[41] !== eh || q[42] !== ep || q[43] !== Z || q[44] !== eu || q[45] !== e_ || q[46] !== e1 || q[47] !== ew || q[48] !== ex || q[49] !== eo || q[50] !== eQ || q[51] !== ez || q[52] !== en || q[53] !== er || q[54] !== eR || q[55] !== es || q[56] !== eH || q[57] !== ec ? (G = e => (0, a.jsx)(o.a, {
                    transformPagePoint: eH,
                    children: (0, a.jsx)(A.b, {
                        value: eS ? eN : {
                            activeBrowserTabId: e0,
                            isInsideOverlay: !0,
                            onAttachmentAdded: () => {
                                e_.get(u.l.activeTab$)?.tabId === eY?.tabId && (e_.get(k.l) || (0, k.i)(e_, {
                                    prefersReducedMotion: !0
                                }), (0, y.d)())
                            },
                            shouldAnimate: !1
                        },
                        children: (0, a.jsx)(A.a, {
                            value: eS ? eF : "expanded",
                            children: (0, a.jsx)(I.a, {
                                preserveLayoutOnEscape: !0,
                                contentChat: {
                                    focusComposer: e2,
                                    onOpenRightPane: eX && eP ? () => {
                                        (0, R.a)(e_, "chat") && ej && e_.set(M.a, e_.get(d.mb))
                                    } : void 0,
                                    openRightPaneDisabled: eZ
                                },
                                dockThreadKey: z.c,
                                canDock: eE || ex,
                                titleContent: eR ?? er,
                                minimizedIcon: ea,
                                statusState: eo,
                                titleStatusState: es,
                                hasTranscript: em,
                                hasConversation: eg,
                                emptyState: eT,
                                pendingFormId: eU,
                                notifications: el,
                                workingPreview: ec,
                                compactWorkingPreview: ed,
                                responsePreview: eu,
                                persistResponsePreview: eh,
                                containerSize: e,
                                minimumWidth: eJ ? 240 : void 0,
                                renderMenu: eX ? void 0 : e => (0, a.jsx)(_.a, {
                                    ...e,
                                    showOptions: !ej || eE
                                }),
                                forceExpanded: eb || e$ && (ej || !ey),
                                isHidden: eS || ek,
                                isMinimized: eK,
                                presentation: eQ,
                                showHeader: ex,
                                showComposerDivider: ew,
                                background: ey && !ex ? void 0 : "panel",
                                onPresentationChange: e => {
                                    eC && e_.set(S.b, e), et?.(e)
                                },
                                onMinimizedChange: e => {
                                    (0, k.t)(e_, e)
                                },
                                title: en ?? eM.formatMessage({
                                    id: "quickChat.mainConversation",
                                    defaultMessage: "Chat"
                                }),
                                renderTranscript: null == ep ? void 0 : (e, t) => ep({
                                    isVisible: t && !eS && !ek
                                }),
                                renderComposer: (e, t) => (0, a.jsx)(f.a, {
                                    value: eS || null == e0 ? ez : eO,
                                    children: (0, a.jsx)(x.a, {
                                        target: eS ? eq : null,
                                        children: (0, a.jsx)(D, {
                                            composerRef: eV,
                                            mainContentElement: eO,
                                            presentation: e,
                                            paneContext: eS ? {
                                                transition: eN,
                                                escapeHandler: eL,
                                                bannerTarget: eB,
                                                overlayOwner: eD
                                            } : void 0,
                                            layout: t,
                                            reserveFullComposerHeight: e1,
                                            reserveContent: Z ?? (null == e0 && eY?.tabType.kind !== "mcp-app" && eY?.tabType.kind !== "mcp-extension"),
                                            children: "function" == typeof W ? W(eS ? void 0 : e) : W
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), q[8] = e0, q[9] = eY, q[10] = eJ, q[11] = eE, q[12] = eP, q[13] = W, q[14] = ed, q[15] = ey, q[16] = ej, q[17] = eT, q[18] = e2, q[19] = eb, q[20] = eg, q[21] = e$, q[22] = em, q[23] = eX, q[24] = eB, q[25] = eL, q[26] = eD, q[27] = eF, q[28] = eN, q[29] = eM, q[30] = ek, q[31] = eK, q[32] = eS, q[33] = eO, q[34] = ea, q[35] = eZ, q[36] = el, q[37] = et, q[38] = eq, q[39] = eU, q[40] = eC, q[41] = eh, q[42] = ep, q[43] = Z, q[44] = eu, q[45] = e_, q[46] = e1, q[47] = ew, q[48] = ex, q[49] = eo, q[50] = eQ, q[51] = ez, q[52] = en, q[53] = er, q[54] = eR, q[55] = es, q[56] = eH, q[57] = ec, q[58] = G) : G = q[58], q[59] !== e3 || q[60] !== G ? (H = (0, a.jsxs)(a.Fragment, {
                    children: [T, (0, a.jsx)(C.a, {
                        isHidden: e3,
                        children: G
                    })]
                }), q[59] = e3, q[60] = G, q[61] = H) : H = q[61], H
            }
        })
    }),
    lZ4W: (function(e, t, n) {
        var a = n("Q840"),
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
            o = n("Q840"),
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
    vefx: (function(e, t, n) {
        n.d(t, {
            BusinessAgentConversationHeader: () => V,
            BusinessAgentHomeHero: () => U
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("Cslg"),
            i = n("dJI3"),
            l = n("nlNF"),
            c = n("OWtl"),
            d = n("aFoA"),
            u = n("OOaz"),
            h = n("dQRk"),
            p = n("jeai"),
            g = n("jAnS"),
            m = n("nUDt"),
            f = n("lSqO"),
            v = n("grx7"),
            y = n("zd8w"),
            b = n("oyxz"),
            x = n("L6H2"),
            w = n("MM0V"),
            C = n("Sm6l"),
            I = n("JNtf"),
            _ = n("mUDD"),
            S = n("ZtSy"),
            j = n("HOLv"),
            T = n("mEbU"),
            E = n("RU3e"),
            P = n("UIU6"),
            M = n("Bbed"),
            A = n("T1PX");
        let k = (0, M.a)(async () => {
            let [{
                SvgLottie: e
            }, {
                strFromU8: t,
                unzipSync: r
            }, {
                z: o
            }, s] = await Promise.all([Promise.all([n.e(747352), n.e(766175)]).then(n.bind(n, "lARO")), Promise.resolve().then(n.bind(n, "yCWm")), Promise.all([n.e(985237), n.e(58670)]).then(n.bind(n, "PkUi")), fetch("https://cdn.openai.com/chatgpt/clients/bazaar/business-agent-disclosure/2026-09-23/business-disclosure-animation-1754caf3cef014e7.lottie", {
                credentials: "omit",
                referrerPolicy: "no-referrer",
                redirect: "error",
                signal: AbortSignal.timeout(5e3)
            }).then(e => e.ok ? e.arrayBuffer() : null).catch(() => null)]);
            if (null == s) return function(e) {
                return (0, a.jsx)(N, {})
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
                } = t, [r, o] = (0, y.useState)(!1), [s] = (0, y.useState)(() => {
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
            errorFallback: (0, a.jsx)(N, {})
        });

        function R(e) {
            let t, n = (0, r.c)(2),
                o = (0, A.a)();
            return n[0] !== o ? (t = (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "pointer-events-none relative aspect-2/1 w-full shrink-0 overflow-hidden",
                children: o ? (0, a.jsx)(N, {}) : (0, a.jsx)(O, {})
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function O(e) {
            let t, n, s, i = (0, r.c)(7),
                l = (0, y.useRef)(null),
                c = (0, T.a)(l),
                d = (0, o.z)(E.b),
                [u, h] = (0, y.useState)(!1);
            if (u) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(N, {}), i[0] = e) : e = i[0], e
            }
            return i[1] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(N, {}), i[1] = t) : t = i[1], i[2] !== c || i[3] !== d ? (n = c && !0 === d ? (0, a.jsx)(k, {
                onError: () => h(!0)
            }) : null, i[2] = c, i[3] = d, i[4] = n) : n = i[4], i[5] !== n ? (s = (0, a.jsx)(P.a, {
                name: "BusinessAgentDisclosureHero",
                fallback: t,
                children: (0, a.jsx)("div", {
                    ref: l,
                    className: "absolute inset-0",
                    children: n
                })
            }), i[5] = n, i[6] = s) : s = i[6], s
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
        var F = {
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
            z = {
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

        function L(e) {
            let t, n, o, s, i, l = (0, r.c)(11),
                {
                    state: c
                } = e,
                d = "ready" === c.status ? c.context : c,
                u = d.businessName ?? null,
                h = d.logoUrl ?? null;
            return l[0] !== u || l[1] !== h ? (t = (0, a.jsx)(x.a, {
                alt: "",
                name: u,
                size: "md",
                src: h
            }), l[0] = u, l[1] = h, l[2] = t) : t = l[2], l[3] !== d.businessName ? (n = (0, a.jsx)("span", {
                className: "truncate text-sm font-semibold",
                children: (0, a.jsx)(G, {
                    businessName: d.businessName
                })
            }), l[3] = d.businessName, l[4] = n) : n = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)("span", {
                className: "truncate text-xs font-normal text-secondary",
                children: (0, a.jsx)(b.a, {
                    id: "chatgpt.ads.business_agent.thread_header.subtitle",
                    defaultMessage: "Business chat"
                })
            }), l[5] = o) : o = l[5], l[6] !== n ? (s = (0, a.jsxs)("span", {
                className: "flex min-w-0 flex-col text-start",
                children: [n, o]
            }), l[6] = n, l[7] = s) : s = l[7], l[8] !== t || l[9] !== s ? (i = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-2 select-none",
                children: [t, s]
            }), l[8] = t, l[9] = s, l[10] = i) : i = l[10], i
        }

        function B(e) {
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
                n[7] !== d || n[8] !== u ? (e = (0, a.jsx)(x.a, {
                    alt: "",
                    name: d,
                    size: "lg",
                    src: u
                }), n[7] = d, n[8] = u, n[9] = e) : e = n[9], n[10] !== i.businessName ? (r = (0, a.jsx)("h1", {
                    className: "heading-xl font-normal text-default select-none",
                    children: (0, a.jsx)(G, {
                        businessName: i.businessName
                    })
                }), n[10] = i.businessName, n[11] = r) : r = n[11], n[12] !== o.status ? (l = "ready" !== o.status ? (0, a.jsx)(w.a, {
                    ariaLive: "polite",
                    role: "failed" === o.status ? "alert" : "status",
                    type: "failed" === o.status ? "error" : "normal",
                    content: "failed" === o.status ? (0, a.jsx)(b.a, {
                        id: "chatgptConversations.businessAgent.unavailable",
                        defaultMessage: "This Business Agent is unavailable. Please return to the ad and try again"
                    }) : (0, a.jsx)(b.a, {
                        id: "chatgptConversations.businessAgent.loading",
                        defaultMessage: "Opening Business Agent…"
                    })
                }) : null, n[12] = o.status, n[13] = l) : l = n[13], t = (0, a.jsxs)("div", {
                    className: "mx-auto flex w-[min(100%,var(--thread-content-max-width))] min-w-0 flex-col items-center gap-3 px-panel text-center",
                    children: [e, r, l, null != c && (c.length > 1 || 1 === c.length && "ready" === o.status && !0 === o.context.disablePrefill) ? (0, a.jsx)("div", {
                        className: "mt-3 flex flex-wrap justify-center gap-2 select-none",
                        children: c.map(e => (0, a.jsx)(C.a, {
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

        function D(e) {
            let t, n, o, s, i, l, c, d, u, h, p, g, m, f, v, x, w, T = (0, r.c)(29),
                {
                    context: E,
                    onPresented: P,
                    onContinue: M,
                    onDismiss: A
                } = e,
                [k, O] = (0, y.useState)(!0 === E.showDisclosureModal);
            T[0] !== E.privacyPolicyUrl ? (t = function(e) {
                if (null == e) return null;
                try {
                    let t = new URL(e);
                    return ("https:" === t.protocol || "http:" === t.protocol) && t.hostname ? t.href : null
                } catch {
                    return null
                }
            }(E.privacyPolicyUrl), T[0] = E.privacyPolicyUrl, T[1] = t) : t = T[1];
            let N = t;
            return T[2] !== A ? (n = e => {
                O(e), e || A?.()
            }, T[2] = A, T[3] = n) : n = T[3], T[4] !== P ? (o = {
                "data-theme": "light",
                onOpenAutoFocus: P
            }, T[4] = P, T[5] = o) : o = T[5], T[6] !== M ? (s = e => {
                e.preventDefault(), O(!1), M?.()
            }, T[6] = M, T[7] = s) : s = T[7], T[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(R, {}), T[8] = i) : i = T[8], T[9] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(I.e, {
                className: "heading-lg text-center leading-7 font-semibold",
                children: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.businessAgent.disclosureTitle",
                    defaultMessage: "About chatting with businesses"
                })
            }), T[9] = l) : l = T[9], T[10] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(j.a, {
                className: "shrink-0",
                asset: F
            }), T[10] = c) : c = T[10], T[11] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.businessAgent.disclosureQuestionsTitle",
                    defaultMessage: "Ask questions and compare options"
                })
            }), T[11] = d) : d = T[11], T[12] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsxs)("div", {
                className: "flex items-start gap-3",
                children: [c, (0, a.jsxs)("div", {
                    className: "flex min-w-0 flex-col gap-0.5",
                    children: [d, (0, a.jsx)("p", {
                        className: "text-base leading-snug tracking-tight text-secondary",
                        children: (0, a.jsx)(b.a, {
                            id: "chatgptConversations.businessAgent.disclosureQuestionsBody",
                            defaultMessage: "Learn what the business offers and ask detailed follow-ups as you decide."
                        })
                    })]
                })]
            }), T[12] = u) : u = T[12], T[13] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(j.a, {
                className: "shrink-0",
                asset: z
            }), T[13] = h) : h = T[13], T[14] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsx)("h3", {
                className: "text-base leading-relaxed font-semibold text-default",
                children: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.businessAgent.disclosureUsageTrendsTitle",
                    defaultMessage: "Your chats remain private"
                })
            }), T[14] = p) : p = T[14], T[15] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4",
                children: [l, (0, a.jsx)(I.d, {
                    asChild: !0,
                    children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-4",
                        children: [u, (0, a.jsxs)("div", {
                            className: "flex items-start gap-3",
                            children: [h, (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-col gap-0.5",
                                children: [p, (0, a.jsx)("p", {
                                    className: "text-base leading-snug tracking-tight text-secondary",
                                    children: (0, a.jsx)(b.a, {
                                        id: "chatgptConversations.businessAgent.disclosureUsageTrendsBody",
                                        defaultMessage: "Businesses can’t see your chats or your personal info — just overall usage trends to help improve their AI agent."
                                    })
                                })]
                            })]
                        })]
                    })
                })]
            }), T[15] = g) : g = T[15], T[16] !== N ? (m = null == N ? null : (0, a.jsx)(S.a, {
                href: N,
                initiator: "external_link",
                openTarget: "external-browser",
                children: (0, a.jsx)(b.a, {
                    id: "chatgptConversations.businessAgent.privacyPolicy",
                    defaultMessage: "Privacy policy"
                })
            }), T[16] = N, T[17] = m) : m = T[17], T[18] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)("div", {
                className: "flex justify-center",
                children: (0, a.jsx)(C.a, {
                    color: "primary",
                    size: "dialogAction",
                    type: "submit",
                    children: (0, a.jsx)(b.a, {
                        id: "chatgptConversations.businessAgent.disclosureStartChat",
                        defaultMessage: "Start chatting"
                    })
                })
            }), T[18] = f) : f = T[18], T[19] !== m ? (v = (0, a.jsxs)("div", {
                className: "flex flex-col gap-4 pb-10 select-none",
                children: [i, (0, a.jsxs)("div", {
                    className: "flex flex-col gap-6 px-8",
                    children: [g, m, f]
                })]
            }), T[19] = m, T[20] = v) : v = T[20], T[21] !== v || T[22] !== s ? (x = (0, a.jsx)(_.b, {
                as: "form",
                size: "viewport",
                variant: "chatgpt",
                onSubmit: s,
                children: v
            }), T[21] = v, T[22] = s, T[23] = x) : x = T[23], T[24] !== k || T[25] !== x || T[26] !== n || T[27] !== o ? (w = (0, a.jsx)(I.a, {
                open: k,
                onOpenChange: n,
                size: "beacon",
                variant: "promotional",
                contentProps: o,
                children: x
            }), T[24] = k, T[25] = x, T[26] = n, T[27] = o, T[28] = w) : w = T[28], w
        }

        function G(e) {
            let t, n = (0, r.c)(2),
                {
                    businessName: o
                } = e;
            return n[0] !== o ? (t = o?.trim() ? (0, a.jsx)(a.Fragment, {
                children: o
            }) : (0, a.jsx)(b.a, {
                id: "chatgpt.ads.business_agent.disclosure.fallback_name",
                defaultMessage: "Business Agent"
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var H = n("KWLf"),
            q = n("Z98x"),
            W = n("zHQF");
        let K = (0, o.d)(c.a, (e, t) => {
            let {
                get: n
            } = t, a = n(l.c), r = a?.state?.businessProfileShareConversation, o = r?.intent ?? a?.state?.businessProfileShare, c = r?.conversationId ?? a?.state?.initialChatGptConversationId;
            if (null == a || o?.destination?.kind !== "agent" || "string" != typeof o.shareSessionId || "string" != typeof c || 0 === c.length || (0, d.d)(n, c) !== (0, d.d)(n, e) || !n(H.b) && !1 !== o.showInfoPanel && n(H.a) !== o.shareSessionId || !n(f.b) || n(s.f) !== o.accountId || n(s.k) !== o.userId) return null;
            if (null != r) {
                if ((0, g.j)(a.pathname)?.params.conversationId !== r.conversationId) return null
            } else if ("/" !== a.pathname && !(0, i.a)(a, n(l.d))) return null;
            let u = n(h.u, e);
            if (null == u || u.accountId !== o.accountId || null != u.userId && u.userId !== o.userId) return null;
            let p = o.destination;
            return ("ready" === u.status ? u.context.gizmoId === p.gizmoId && u.context.businessAgentId === p.businessAgentId : u.gizmoId === p.gizmoId) ? o.shareSessionId : null
        });

        function V(e) {
            let t, n, s = (0, r.c)(5),
                {
                    conversationId: i,
                    fallback: l
                } = e,
                c = (0, o.x)(h.u, i),
                d = (0, o.x)(null == c ? null : K, i);
            if (null == c) return l;
            s[0] !== c ? (t = (0, a.jsx)(L, {
                state: c
            }), s[0] = c, s[1] = t) : t = s[1];
            let u = t;
            return s[2] !== u || s[3] !== d ? (n = null != d ? (0, a.jsx)(p.a, {
                size: "business-profile",
                children: (0, a.jsx)(q.a, {
                    headerControl: !0,
                    shareSessionId: d,
                    children: u
                })
            }) : u, s[2] = u, s[3] = d, s[4] = n) : n = s[4], n
        }

        function U(e) {
            let t, n, s, i = (0, r.c)(18),
                {
                    conversationId: d,
                    fallback: p,
                    onStarterPromptSelect: g
                } = e,
                m = (0, o.y)(c.a),
                f = (0, o.x)(h.u, d),
                y = (0, o.z)(f?.status === "failed" ? l.c : null),
                b = y?.state?.businessProfileChat;
            if (f?.status === "failed" && b && y?.state?.initialChatGptConversationId === d && y.state.initialChatGptBusinessAgentGizmoId === b.gizmoId && (0, u.e)(d)) {
                let e;
                if (f.accountId !== b.accountId || null != f.userId && f.userId !== b.userId) {
                    let e;
                    return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(W.b, {}), i[0] = e) : e = i[0], e
                }
                return i[1] !== d || i[2] !== b || i[3] !== m || i[4] !== f.businessName || i[5] !== f.logoUrl ? (e = (0, a.jsx)(W.a, {
                    retry: () => void(0, v.a)(m, d, b, {
                        businessName: f.businessName,
                        logoUrl: f.logoUrl
                    })
                }), i[1] = d, i[2] = b, i[3] = m, i[4] = f.businessName, i[5] = f.logoUrl, i[6] = e) : e = i[6], e
            }
            return null == f ? p : (i[7] !== p || i[8] !== g || i[9] !== f ? (t = "ready" !== f.status || f.context.showConversationStarters ? (0, a.jsx)(B, {
                state: f,
                onStarterPromptSelect: g
            }) : p, i[7] = p, i[8] = g, i[9] = f, i[10] = t) : t = i[10], i[11] !== d || i[12] !== f.context || i[13] !== f.status ? (n = "ready" === f.status ? (0, a.jsx)(Q, {
                context: f.context,
                conversationId: d
            }, f.context.interactionId) : null, i[11] = d, i[12] = f.context, i[13] = f.status, i[14] = n) : n = i[14], i[15] !== t || i[16] !== n ? (s = (0, a.jsxs)(a.Fragment, {
                children: [t, n]
            }), i[15] = t, i[16] = n, i[17] = s) : s = i[17], s)
        }

        function Q(e) {
            let t, n, s, i = (0, r.c)(11),
                {
                    context: l,
                    conversationId: d
                } = e,
                u = (0, o.y)(c.a),
                h = (0, o.z)(m.b),
                p = h?.conversationId === d && h.ready;
            return p || !0 === l.showDisclosureModal ? (i[0] !== p || i[1] !== l || i[2] !== h ? (t = p ? {
                ...l,
                showDisclosureModal: !h.presented
            } : l, i[0] = p, i[1] = l, i[2] = h, i[3] = t) : t = i[3], i[4] !== p || i[5] !== d || i[6] !== u ? (n = p ? () => (0, m.a)(u, d) : void 0, i[4] = p, i[5] = d, i[6] = u, i[7] = n) : n = i[7], i[8] !== t || i[9] !== n ? (s = (0, a.jsx)(D, {
                context: t,
                onPresented: n
            }), i[8] = t, i[9] = n, i[10] = s) : s = i[10], s) : null
        }
    }),
    KWLf: (function(e, t, n) {
        var a = n("Q840"),
            r = n("nlNF"),
            o = n("OWtl"),
            s = n("wVL6");
        let i = (0, a.u)(o.a, null),
            l = (0, a.u)(o.a, null),
            c = (0, a.u)(o.a, null),
            d = "(max-width: 767px)";

        function u() {
            if ("u" < typeof window) return !1;
            let e = (0, s.a)();
            return "android_web" === e || "android_app" === e || "ios_web" === e || "ios_app" === e || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1
        }
        let h = (0, a.h)(o.a, () => null, e => {
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
            o = n("on57"),
            s = n("Q840"),
            i = n("zd8w"),
            l = n("Wf1j"),
            c = n("HOLv"),
            d = n("OWtl"),
            u = n("KWLf"),
            h = n("zzDS");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, m, f, v, y = (0, r.c)(19),
                    {
                        children: b,
                        headerControl: x,
                        opensDialog: w,
                        shareSessionId: C
                    } = e,
                    I = (0, s.y)(d.a),
                    _ = (0, l.a)(),
                    S = (0, s.z)(u.c),
                    j = (0, s.z)(null == w ? u.b : null),
                    T = (0, i.useRef)(null);
                y[0] !== S || y[1] !== I || y[2] !== C ? (t = () => {
                    if (S !== C) return;
                    let e = requestAnimationFrame(() => {
                        let e = T.current;
                        e?.getClientRects().length && null == e.closest('[inert], [aria-hidden="true"]') && I.get(u.c) === C && (e.focus({
                            preventScroll: !0
                        }), e.ownerDocument.activeElement === e && I.set(u.c, null))
                    });
                    return () => cancelAnimationFrame(e)
                }, n = [S, I, C], y[0] = S, y[1] = I, y[2] = C, y[3] = t, y[4] = n) : (t = y[3], n = y[4]), (0, i.useEffect)(t, n);
                let E = w ?? j ? "dialog" : void 0;
                y[5] !== _ ? (p = _.formatMessage({
                    id: "businessProfiles.shareReceiver.viewBusinessInfo",
                    defaultMessage: "View business information"
                }), y[5] = _, y[6] = p) : p = y[6];
                let P = void 0 !== x && x && "conversation-header-control";
                return y[7] !== P ? (g = (0, o.b)("hover:bg-surface-hover inline-flex min-h-11 max-w-full min-w-0 items-center gap-1.5 rounded-lg px-1 text-start focus-visible:outline-2 focus-visible:-outline-offset-2", P), y[7] = P, y[8] = g) : g = y[8], y[9] !== I || y[10] !== C ? (m = () => (0, u.g)(I, C), y[9] = I, y[10] = C, y[11] = m) : m = y[11], y[12] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, a.jsx)(c.a, {
                    asset: h.a,
                    className: "size-4 shrink-0 text-secondary"
                }), y[12] = f) : f = y[12], y[13] !== b || y[14] !== E || y[15] !== p || y[16] !== g || y[17] !== m ? (v = (0, a.jsxs)("button", {
                    ref: T,
                    "aria-haspopup": E,
                    "aria-label": p,
                    className: g,
                    onClick: m,
                    type: "button",
                    children: [b, f]
                }), y[13] = b, y[14] = E, y[15] = p, y[16] = g, y[17] = m, y[18] = v) : v = y[18], v
            }
        })
    }),
    sbTf: (function(e, t, n) {
        var a = n("iRMi"),
            r = n("Q840"),
            o = n("AuIy"),
            s = n("U2UX"),
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
            I = n("tSEg"),
            _ = n("OMIV"),
            S = n("dk3M"),
            j = n("WFY2"),
            T = n("PFzG"),
            E = n("vldH"),
            P = n("ISgP"),
            M = n("t2JB"),
            A = n("DIH2"),
            k = n("aFoA"),
            R = n("H8lk"),
            O = n("dQRk"),
            N = n("rxj0"),
            F = n("f2PP"),
            z = n("S95W");
        let L = (0, r.u)(C.a, !0),
            B = (0, r.v)(C.a, e => null);
        n.d(t, {}, {
            a: L,
            b: function(e, t) {
                let n = e.get(k.a, t) ?? t,
                    r = e.get(T.b, t),
                    C = e.get(B, n),
                    D = null;
                null != r && C?.attemptId === r && (D = C);
                let G = {
                        attemptId: r,
                        observedTurn: D?.observedTurn ?? !1,
                        activeRequestId: D?.activeRequestId ?? null,
                        dismissed: D?.dismissed ?? !1,
                        initialCreationMessageIds: D?.initialCreationMessageIds ?? new Set,
                        openedCreatedPage: D?.openedCreatedPage ?? !1
                    },
                    H = e.get(l.h),
                    q = G.observedTurn,
                    W = null;

                function K(t) {
                    for (let n of t.toReversed())
                        if (!G.initialCreationMessageIds.has(n.messageId) && (0, y.openSpacePageSidePanelTab)(e, n.pageId, {
                                title: n.title,
                                openSource: "turn_auto_open"
                            }).opened) {
                            G.openedCreatedPage = !0;
                            break
                        }
                }
                let V = e.watch(e => {
                        let {
                            get: n
                        } = e;
                        if (n(I.j) || null != n(O.ab, t)) return;
                        let a = n(O.R, t);
                        if (!a?.length) return;
                        let r = n(f.e),
                            o = n(O.j, t),
                            s = n(O.y, t);
                        if (null != r && null != o && (null == s || "tpp" === s))
                            for (let e of a)(0, x.h)(r, e.pageId, o, s ?? null, "created")
                    }),
                    U = e.watch(n => {
                        let {
                            get: r
                        } = n, f = r(O.cb, t), x = r(l.h), C = r(O.eb, t);
                        if ((0, O.Db)(f)) {
                            q = !1;
                            let e = r(T.b, t),
                                n = r(O.fb, t),
                                a = !G.observedTurn || G.attemptId !== e;
                            if (G.attemptId = e, a) {
                                let e = W;
                                W = null, e?.abort(), G.observedTurn = !0, G.activeRequestId = n, G.dismissed = C, G.openedCreatedPage = !1
                            } else G.activeRequestId = n ?? G.activeRequestId, G.dismissed = G.dismissed || C || H && !x;
                            H = x;
                            let o = !C && !G.dismissed && !x && !G.openedCreatedPage && !r(I.j) && !r(O.D, t) && !r(N.e, t),
                                s = [];
                            if ((a || o) && (s = r(O.R, t) ?? []), a) {
                                G.initialCreationMessageIds = new Set(s.map(e => e.messageId));
                                return
                            }
                            o && K(s);
                            return
                        }
                        if (!G.observedTurn) return;
                        let k = r(O.w, t);
                        if ("idle" !== f || C || null != k && "completed" !== k.result || null != e.get(O.D, t) || e.get(I.j) || e.get(N.e, t)) {
                            G.observedTurn = !1;
                            return
                        }
                        if (q) {
                            if (G.dismissed || x || G.openedCreatedPage || r(T.b, t) !== G.attemptId) {
                                G.observedTurn = !1;
                                return
                            }
                            if (k?.result !== "completed") return;
                            K(r(O.R, t) ?? []), G.observedTurn = !G.openedCreatedPage;
                            return
                        }
                        if (G.observedTurn = !1, k?.result !== "completed" || k.requestId !== G.activeRequestId) return;
                        let B = e.get(O.N, t);
                        if (null == B) return;
                        let D = (0, o.b)({
                                mapping: B,
                                current_node: e.get(O.C, t)
                            }),
                            V = D.findLast(z.b);
                        if (V?.status !== "finished_successfully") return;
                        let U = [...(0, R.e)(D).outputs, ...D.flatMap(e => (0, R.c)(e).map(e => e.file))],
                            Q = e.get(P.b, t)?.at(-1);
                        if (Q?.turn.status !== "complete") return;
                        let $ = [...(0, d.b)(D), ...Q.turn.items.flatMap(e => "chatgpt-reasoning-group" === e.type ? e.items : [e]).filter(e => "mcp-tool-call" === e.type)];
                        if (!((0, c.a)(e, $, !G.dismissed) || !G.dismissed && !G.openedCreatedPage && (0, b.a)(e, $)) && !G.dismissed && !x && !G.openedCreatedPage) {
                            for (let t of (0, v.c)((0, o.e)(V)).toReversed())
                                if ((0, y.openSpacePageSidePanelTab)(e, t.id, {
                                        openSource: "turn_auto_open",
                                        blockId: t.blockId
                                    }).opened) return;
                            if (r(L) && (0, F.canOpenChatGptFilePreview)({
                                    browserPreview: !0
                                })) {
                                for (let n of Q.turn.items)
                                    if ("assistant-message" === n.type && n.completed)
                                        for (let [r, o] of n.contentReferences.entries()) {
                                            let c = (0, M.a)(o),
                                                d = null == c ? null : (0, u.a)(c),
                                                f = U.find(e => null != e.fileId && e.fileId === (o.file_id ?? o.id) || null != e.libraryFileId && e.libraryFileId === o.library_file_id);
                                            if ("file" !== o.type || !(0, s.a)(o) || null == c || null == d || !(0, u.f)(d) || null == f && null == (0, A.b)(o.sandbox_path) && !(0, A.b)(o.matched_text)?.includes("sandbox:") || f?.sizeBytes != null && f.sizeBytes > g.a) continue;
                                            let v = n.contentReferenceMessageIds?.[r] ?? n.messageId,
                                                y = (0, E.b)(o, {
                                                    fileName: c,
                                                    messageId: v
                                                });
                                            if (null == y) continue;
                                            if (e.get(_.g)?.getExperiment("1965446322").get("enable_artifact_preview_auto_open", !1) !== !0) return;
                                            let b = e.get(O.j, t) ?? t,
                                                x = `${v??"message"}:${String(r)}:${c}`,
                                                C = `chatgpt-file:${b}:${x}`,
                                                I = {
                                                    turnId: Q.id,
                                                    inputMessageId: D.find(e => "user" === e.author.role)?.id ?? null,
                                                    messageId: v ?? null
                                                },
                                                T = new AbortController,
                                                P = (0, F.openChatGptFile)(e, {
                                                    conversationId: b,
                                                    fileName: c,
                                                    gizmoId: e.get(O.T, t),
                                                    sharedConversationId: e.get(O.ab, t),
                                                    target: y,
                                                    tabKey: x,
                                                    browserPreview: !0,
                                                    isAccessBlocked: e => e.get(N.e, t),
                                                    downloadFallback: !1,
                                                    openSource: "auto_open",
                                                    originatingTurn: I,
                                                    signal: T.signal,
                                                    onOpened: () => {
                                                        let t = e.get(i.l.activeTab$);
                                                        T.signal.aborted || t?.tabId !== C || t.tabType.kind !== h.a || ((0, w.a)(e, a.CodexFileOpened, {
                                                            threadId: b,
                                                            turnId: I.turnId,
                                                            inputMessageId: I.inputMessageId ?? void 0,
                                                            messageId: I.messageId ?? void 0,
                                                            fileExtension: (0, p.c)(c) ?? void 0,
                                                            openSource: "auto_open",
                                                            openDestination: "codex_preview"
                                                        }), (0, w.a)(e, a.CodexWorkspaceFilePreviewAttempted, (0, m.a)({
                                                            modifiedClick: !1,
                                                            openedSidePanelTarget: "artifact",
                                                            openSource: "auto_open",
                                                            originatingTurn: I,
                                                            path: c,
                                                            threadId: b,
                                                            windowType: "browser"
                                                        })), (0, S.b)(e, C, "auto_open"))
                                                    },
                                                    onClose: () => T.abort()
                                                });
                                            W = T;
                                            let k = e.watch(e => {
                                                let {
                                                    get: n
                                                } = e;
                                                (n(l.h) && n(i.l.activeTab$)?.tabId !== C || n(N.e, t)) && T.abort()
                                            });
                                            P.catch(e => {
                                                T.signal.aborted || j.a.debug("Automatic ChatGPT artifact preview could not open", {
                                                    safe: {},
                                                    sensitive: {
                                                        error: e
                                                    }
                                                })
                                            }).finally(() => {
                                                k(), W === T && (W = null)
                                            });
                                            return
                                        }
                            }
                        }
                    });
                return () => {
                    V(), U(), W?.abort(), null != G.attemptId && e.set(B, n, {
                        ...G,
                        attemptId: G.attemptId
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
            o = n("Q840"),
            s = n("zd8w"),
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
                v = (0, o.y)(u.a),
                y = (0, l._)(),
                b = (0, s.useRef)(!1);
            i[0] !== g || i[1] !== p || i[2] !== y || i[3] !== m || i[4] !== v ? (t = () => {
                m?.(), v.get(c.f).info(p, {
                    id: "conversation-inaccessible",
                    duration: 5
                }), (0, d.g)("conversation_unavailable", () => y(g, {
                    replace: !0
                }))
            }, i[0] = g, i[1] = p, i[2] = y, i[3] = m, i[4] = v, i[5] = t) : t = i[5];
            let x = (0, s.useEffectEvent)(t);
            return i[6] !== h || i[7] !== x ? (n = () => {
                h && !b.current && (b.current = !0, x())
            }, i[6] = h, i[7] = x, i[8] = n) : n = i[8], i[9] !== h ? (a = [h], i[9] = h, i[10] = a) : a = i[10], (0, s.useEffect)(n, a), h ? null : f
        }
        var p = n("IxgT"),
            g = n("yGJW"),
            m = n("eShZ"),
            f = n("ZhoB");
        let v = new WeakSet;

        function y(e) {
            let t, n, s, l, c, d, v, y, x = (0, r.c)(25),
                {
                    conversationId: w,
                    error: C,
                    loadError: I,
                    canRetry: _,
                    isWorkConversation: S,
                    showChatFallback: j,
                    onInlineLoadError: T,
                    children: E
                } = e,
                P = (0, o.y)(u.a),
                M = (0, o.z)(void 0 !== j && j && !1 === S ? p.b : null);
            if (null != M) return M;
            x[0] !== w || x[1] !== S || x[2] !== P ? (t = (e, t) => {
                (0, f.e)(P.get(g.c).logProductEvent, {
                    conversationId: w,
                    error: e,
                    isWorkConversation: S,
                    canRetry: t
                })
            }, x[0] = w, x[1] = S, x[2] = P, x[3] = t) : t = x[3];
            let A = t;
            x[4] !== _ || x[5] !== I || x[6] !== A ? (n = () => A(I, _), x[4] = _, x[5] = I, x[6] = A, x[7] = n) : n = x[7], x[8] !== I || x[9] !== T || x[10] !== n ? (s = (0, a.jsx)(b, {
                error: I,
                onInlineLoadError: T,
                onShown: n
            }), x[8] = I, x[9] = T, x[10] = n, x[11] = s) : s = x[11], x[12] !== E || x[13] !== s ? (l = (0, a.jsxs)(a.Fragment, {
                children: [s, E]
            }), x[12] = E, x[13] = s, x[14] = l) : l = x[14];
            let k = l;
            return x[15] !== C ? (c = C instanceof m.FetchError && !(0, m.e)(C) && (403 === C.status || 404 === C.status), x[15] = C, x[16] = c) : c = x[16], x[17] !== C || x[18] !== A ? (d = () => A(C, !1), x[17] = C, x[18] = A, x[19] = d) : d = x[19], x[20] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, a.jsx)(i.a, {
                id: "chatgptConversations.conversationInaccessible",
                defaultMessage: "You don’t have access to this conversation. Make sure you’re logged in to the right account, or ask the conversation owner to send you a share link."
            }), x[20] = v) : v = x[20], x[21] !== k || x[22] !== c || x[23] !== d ? (y = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(h, {
                        isUnavailable: c,
                        homePath: "/",
                        onUnavailable: d,
                        message: v,
                        children: k
                    })
                })]
            }), x[21] = k, x[22] = c, x[23] = d, x[24] = y) : y = x[24], y
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
                    if (u(i), (0, m.e)(i)) {
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
            r = n("Q840"),
            o = n("bjAA"),
            s = n("TL6G"),
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
                    (0, c.c)(v, f).catch(() => (0, o.c)(v))
                }, m[0] = f, m[1] = v, m[2] = t) : t = m[2], (0, o.d)(f, t), m[3] !== f || m[4] !== v ? (n = () => void(0, l.renameActiveChatGptConversation)(v, f), d = [f, v], m[3] = f, m[4] = v, m[5] = n, m[6] = d) : (n = m[5], d = m[6]), (0, s.d)("rename-thread", n, d), m[7] !== f || m[8] !== v ? (u = () => (0, l.d)(v, f), h = [f, v], m[7] = f, m[8] = v, m[9] = u, m[10] = h) : (u = m[9], h = m[10]), (0, s.d)("toggle-thread-pin", u, h), m[11] !== f || m[12] !== v ? (p = () => (0, l.a)(v, f), g = [f, v], m[11] = f, m[12] = v, m[13] = p, m[14] = g) : (p = m[13], g = m[14]), (0, s.d)("archive-thread", p, g), null
            }
        })
    }),
    N8ad: (function(e, t, n) {
        n.d(t, {
            a: () => iA,
            ChatGptConversationPage: () => iM
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("v8gE"),
            s = n("FS1B"),
            i = n("T0Rc"),
            l = n("HVBu"),
            c = n.n(l),
            d = n("Q840"),
            u = n("UKCO"),
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
            I = n("z0li"),
            _ = n("BzQ3"),
            S = n("O0M0"),
            j = n("Cslg"),
            T = n("OFP1"),
            E = n("ItIk"),
            P = (n("AZW7"), n("uxPT")),
            M = n("GMTh"),
            A = n("zpMv"),
            k = n("PFzG"),
            R = n("YiPf"),
            O = n("DrWu"),
            N = n("x4uR"),
            F = n("hx97");

        function z(e) {
            return "assistant" === e.author.role && e.metadata?.open_thread_summary === !0
        }
        var L = n("MrzV"),
            B = n("YTsa"),
            D = n("TSib"),
            G = n("jEN2"),
            H = n("kphc"),
            q = n("YWcr"),
            W = n("mwa5"),
            K = n("UxN3"),
            V = n("SGsN"),
            U = n("XcNx"),
            Q = n("GKsW"),
            $ = n("yWTM"),
            Y = n("SkIz"),
            J = n("hsSf"),
            X = n("ibLK"),
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
            eg = n("tSEg"),
            em = n("kl6F"),
            ef = n("kfGJ"),
            ev = n("khOd"),
            ey = n("xSOA"),
            eb = n("oyxz"),
            ex = n("MYlA"),
            ew = n("OtLV"),
            eC = n("sfmI"),
            eI = n("QmkR"),
            e_ = n("Yrvy"),
            eS = n("HOLv"),
            ej = n("nlNF"),
            eT = n("OWtl"),
            eE = n("MRlq"),
            eP = n("vNLk"),
            eM = n("PCxL"),
            eA = n("aZgH"),
            ek = n("CiSx");

        function eR(e) {
            let t, n, o, s, i, l, c, u, h, p, g, y, b, x, w = (0, r.c)(56),
                {
                    conversationId: C,
                    kind: I
                } = e,
                _ = (0, d.y)(eT.a),
                S = (0, f.a)(),
                T = (0, v.X)(),
                E = (0, v._)(),
                P = (0, d.z)(eM.l),
                M = (0, d.z)(j.h),
                A = (0, d.z)(j.g);
            w[0] !== M || w[1] !== C || w[2] !== A || w[3] !== I || w[4] !== P ? (t = "chatgpt" === I && P?.kind === "chatgpt" && P.conversation.id === C && (0, eC.a)(P.conversation, M, A) ? P.conversation : null, w[0] = M, w[1] = C, w[2] = A, w[3] = I, w[4] = P, w[5] = t) : t = w[5];
            let k = t,
                [R, O] = (0, m.useState)(!1),
                {
                    mutate: N,
                    isPending: F
                } = (0, e_.a)(C);
            w[6] !== T.hash || w[7] !== T.pathname || w[8] !== T.search || w[9] !== E || w[10] !== _ ? (n = () => {
                (0, eM.e)(_), E({
                    pathname: T.pathname,
                    search: T.search,
                    hash: T.hash
                }, {
                    replace: !0,
                    state: null
                })
            }, w[6] = T.hash, w[7] = T.pathname, w[8] = T.search, w[9] = E, w[10] = _, w[11] = n) : n = w[11];
            let z = n,
                L = (0, d.z)(eM.k);
            w[12] !== C || w[13] !== L ? (o = L?.find(e => (0, eA.b)(e.task) === `hosted:${C}`), w[12] = C, w[13] = L, w[14] = o) : o = w[14];
            let B = o;
            w[15] !== C || w[16] !== _ ? (s = () => {
                let e = _.get(eM.l);
                return null != e && (0, eA.b)(e) === `hosted:${C}` ? (0, eM.d)(_, e) : void 0
            }, i = async () => {
                await (0, eI.W)({
                    scope: _,
                    conversationId: C
                })
            }, w[15] = C, w[16] = _, w[17] = s, w[18] = i) : (s = w[17], i = w[18]), w[19] !== C || w[20] !== z || w[21] !== I || w[22] !== _ ? (l = (e, t, n) => {
                n?.("restored");
                let r = _.get(V.f).info((0, a.jsx)(eb.a, {
                    ...eE.a.unarchiveSuccessPlain
                }), {
                    leading: (0, a.jsx)(eS.a, {
                        "aria-hidden": !1,
                        asset: ek.a
                    }),
                    primaryAction: {
                        label: (0, a.jsx)(eb.a, {
                            ...eE.a.viewNow
                        }),
                        onClick: () => {
                            r.close(), z()
                        }
                    },
                    id: `unarchive-thread-${I}:${C}`
                })
            }, w[19] = C, w[20] = z, w[21] = I, w[22] = _, w[23] = l) : l = w[23], w[24] !== S || w[25] !== _ ? (c = (e, t, n) => {
                n?.(null), _.get(V.f).danger(S.formatMessage(eE.a.unarchiveError), {
                    errorAnalytics: {
                        toastId: "previewFooter.onError.unarchiveError"
                    }
                })
            }, w[24] = S, w[25] = _, w[26] = c) : c = w[26], w[27] !== s || w[28] !== i || w[29] !== l || w[30] !== c ? (u = {
                onMutate: s,
                mutationFn: i,
                onSuccess: l,
                onError: c
            }, w[27] = s, w[28] = i, w[29] = l, w[30] = c, w[31] = u) : u = w[31];
            let {
                mutate: D,
                isPending: G,
                isSuccess: H
            } = (0, ey.a)(u);
            w[32] !== N || w[33] !== E || w[34] !== _ ? (h = e => {
                let t = _.get(eM.c),
                    n = _.get(ej.c),
                    a = _.get(j.f);
                N(e, {
                    onSuccess: () => {
                        if (O(!1), t !== _.get(eM.c) || n !== _.get(ej.c) || a !== _.get(j.f)) return;
                        _.set(eM.l, null);
                        let e = t?.pathname === eM.a ? t : null;
                        E(e ?? "/", {
                            replace: !0,
                            state: e?.state ?? null
                        })
                    }
                })
            }, w[32] = N, w[33] = E, w[34] = _, w[35] = h) : h = w[35];
            let q = h;
            w[36] !== k ? (p = null == k ? void 0 : () => O(!0), w[36] = k, w[37] = p) : p = w[37];
            let W = H || B?.status === "restored",
                K = G || B?.status === "restoring";
            return w[38] !== D ? (g = () => D(), w[38] = D, w[39] = g) : g = w[39], w[40] !== z || w[41] !== F || w[42] !== p || w[43] !== W || w[44] !== K || w[45] !== g ? (y = (0, a.jsx)(eP.a, {
                deleting: F,
                onDelete: p,
                restored: W,
                restoring: K,
                onUnarchive: g,
                onDone: z
            }), w[40] = z, w[41] = F, w[42] = p, w[43] = W, w[44] = K, w[45] = g, w[46] = y) : y = w[46], w[47] !== k || w[48] !== q || w[49] !== S || w[50] !== R || w[51] !== F ? (b = null != k && (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                title: k.title?.trim() || S.formatMessage(ew.a.newChat),
                open: R,
                isDeleting: F,
                onOpenChange: O,
                onConfirm: q
            }), w[47] = k, w[48] = q, w[49] = S, w[50] = R, w[51] = F, w[52] = b) : b = w[52], w[53] !== y || w[54] !== b ? (x = (0, a.jsxs)(a.Fragment, {
                children: [y, b]
            }), w[53] = y, w[54] = b, w[55] = x) : x = w[55], x
        }
        var eO = n("hZax"),
            eN = n("OMIV"),
            eF = n("JCJj"),
            ez = n("KkZX"),
            eL = n("BdYu"),
            eB = n("Nyub"),
            eD = n("rvFo"),
            eG = n("jZDY"),
            eH = n("Bc5r"),
            eq = n("bIvi"),
            eW = n("Elta"),
            eK = n("eW0T"),
            eV = n("hOYb"),
            eU = n("eShZ"),
            eQ = n("qqut"),
            e$ = n("CsbC"),
            eY = n("tCyZ"),
            eJ = n("vefx"),
            eX = n("GgLN"),
            eZ = n("KdfG"),
            e0 = n("AOHi"),
            e1 = n("sbTf"),
            e2 = n("BJ43"),
            e3 = n("vFqw"),
            e4 = n("d2rV"),
            e5 = n("aLqR"),
            e6 = n("VlIB"),
            e8 = n("Ow2S"),
            e7 = n("G6Ip");
        let e9 = (0, d.v)(eT.a, e => null);
        var te = n("qeru");

        function tt(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o,
                    children: s
                } = e;
            if ("loading" === (0, d.x)(e8.t, o)) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(te.b, {
                    page: !0,
                    status: "chatgpt"
                }), n[0] = e) : e = n[0], e
            }
            return n[1] !== s ? (t = (0, a.jsx)(a.Fragment, {
                children: s
            }), n[1] = s, n[2] = t) : t = n[2], t
        }
        var tn = n("SZi8"),
            ta = n("lBzi"),
            tr = n("Ga6O"),
            to = n("PTAr"),
            ts = n("slpy"),
            ti = n("BOYb"),
            tl = n("Sm6l"),
            tc = n("bf6R"),
            td = n("Bbed"),
            tu = n("O666"),
            th = n("tNq4"),
            tp = n("aFoA"),
            tg = n("dQRk"),
            tm = n("Skaw"),
            tf = n("PYCG");

        function tv(e) {
            let t, n, o, s, i, l, c, u, h, p, g, m, v = (0, r.c)(54),
                {
                    conversationId: y,
                    projectId: b,
                    sharedProjectConversation: x,
                    isReady: w,
                    isRestricted: C,
                    isStreaming: I
                } = e,
                _ = void 0 === b ? null : b,
                S = (0, d.y)(eT.a),
                T = (0, f.a)(),
                E = (0, d.z)(j.e),
                P = (0, d.z)(null == _ ? null : tm.a),
                M = (0, d.x)(tg.j, y),
                {
                    data: A
                } = (0, d.x)(ta.chatGptConversationQueryById$, null == _ ? null : M),
                k = (0, d.x)(tp.a, null == _ ? null : M),
                R = (0, d.x)(tg.B, k);
            v[0] !== k || v[1] !== A || v[2] !== R || v[3] !== _ || v[4] !== M ? (t = null == A && null != k && null != M ? {
                id: M,
                gizmo_id: _,
                is_temporary_chat: R
            } : void 0, v[0] = k, v[1] = A, v[2] = R, v[3] = _, v[4] = M, v[5] = t) : t = v[5];
            let O = t,
                {
                    data: F
                } = (0, d.x)(N.b, _),
                z = null == _ ? null : (0, tm.b)(P ?? null, x ?? A ?? O, F),
                L = (0, d.x)(th.b, y);
            v[6] !== T ? (n = T.formatMessage(ew.a.headerShare), v[6] = T, v[7] = n) : n = v[7];
            let B = n,
                D = (0, d.x)(null == x ? th.a : null, y),
                G = null != x || null != D,
                H = null;
            if (C || z?.type === "unavailable") {
                let e;
                v[8] !== T ? (e = T.formatMessage(ew.a.shareDisabledRestricted), v[8] = T, v[9] = e) : e = v[9], H = e
            } else if (I && !G) {
                let e;
                v[10] !== T ? (e = T.formatMessage(ew.a.shareDisabledStreaming), v[10] = T, v[11] = e) : e = v[11], H = e
            } else if (!w || !G) {
                let e;
                v[12] !== T ? (e = T.formatMessage(ew.a.shareDisabledNotReady), v[12] = T, v[13] = e) : e = v[13], H = e
            }
            let q = null != H || L;
            v[14] !== q ? (o = {
                layer: "3087497570",
                parameter: "use_larger_icon",
                disableExposureLog: q
            }, v[14] = q, v[15] = o) : o = v[15];
            let W = (0, d.x)(tu.b, o),
                K = "loaded" === E.status && "personal" === E.structure && (null == z || "snapshot" === z.type),
                V = null != H || L;
            v[16] !== V ? (s = {
                layer: "1823366130",
                parameter: "disable_hover",
                disableExposureLog: V
            }, v[16] = V, v[17] = s) : s = v[17];
            let U = (0, d.x)(K ? tu.b : null, s),
                Q = !(0, ti.d)() && !(0, ti.b)(),
                $ = null != H || L;
            v[18] !== $ ? (i = {
                layer: "2296435893",
                parameter: "show_share_text",
                disableExposureLog: $
            }, v[18] = $, v[19] = i) : i = v[19];
            let Y = (0, d.x)(Q ? tu.b : null, i);
            v[20] !== y || v[21] !== O || v[22] !== _ || v[23] !== S || v[24] !== x ? (l = () => {
                let e = null == x ? S.get(th.c, y) : {
                    serverConversationId: x.conversation_id,
                    title: x.title,
                    currentNodeId: x.current_node ?? void 0
                };
                null != e && (0, tf.shareChatGptProjectConversation)(S, e.serverConversationId, e.title ?? "", _, e.currentNodeId, "CHATGPT_SHARE_FLOW_SOURCE_SENDER_HEADER", x ?? O)
            }, v[20] = y, v[21] = O, v[22] = _, v[23] = S, v[24] = x, v[25] = l) : l = v[25];
            let J = l,
                X = B;
            if (!U && "loaded" === E.status && (null == z || "snapshot" === z.type)) {
                let e;
                v[26] !== E.structure || v[27] !== T ? (e = T.formatMessage("workspace" === E.structure ? ew.a.shareWorkspaceTooltip : ew.a.sharePublicTooltip), v[26] = E.structure, v[27] = T, v[28] = e) : e = v[28], X = e
            }
            let Z = H ?? X,
                ee = null != H || void 0,
                et = !Y,
                en = null == H ? J : void 0;
            return v[29] !== L || v[30] !== W ? (c = !L && (W ? (0, a.jsx)(tc.M, {}) : (0, a.jsx)(tc.L, {})), v[29] = L, v[30] = W, v[31] = c) : c = v[31], v[32] !== Y ? (u = Y && (0, a.jsx)("span", {
                className: "max-sm:hidden @max-2xl/main-titlebar:hidden",
                children: (0, a.jsx)(eb.a, {
                    ...ew.a.headerShare
                })
            }), v[32] = Y, v[33] = u) : u = v[33], v[34] !== L || v[35] !== B || v[36] !== ee || v[37] !== et || v[38] !== en || v[39] !== c || v[40] !== u ? (h = (0, a.jsxs)(tl.a, {
                "aria-disabled": ee,
                "aria-label": B,
                color: "ghostActive",
                loading: L,
                className: "conversation-header-control browser:[&_[data-loading-indicator]>svg]:size-6",
                size: "toolbar",
                uniform: et,
                onClick: en,
                children: [c, u]
            }), v[34] = L, v[35] = B, v[36] = ee, v[37] = et, v[38] = en, v[39] = c, v[40] = u, v[41] = h) : h = v[41], v[42] !== Z || v[43] !== h ? (p = (0, a.jsx)(ts.a, {
                content: Z,
                children: h
            }), v[42] = Z, v[43] = h, v[44] = p) : p = v[44], v[45] !== y || v[46] !== L || v[47] !== _ || v[48] !== H || v[49] !== x ? (g = !1, v[45] = y, v[46] = L, v[47] = _, v[48] = H, v[49] = x, v[50] = g) : g = v[50], v[51] !== p || v[52] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [p, g]
            }), v[51] = p, v[52] = g, v[53] = m) : m = v[53], m
        }(0, td.a)(async () => () => null);
        var ty = n("TRQ3"),
            tb = n("SZCv"),
            tx = n.n(tb),
            tw = n("XAP6"),
            tC = n("bzoy"),
            tI = n("LYS1"),
            t_ = n("aZoZ"),
            tS = n("Gv8v"),
            tj = n("EGpF"),
            tT = n("mTPq"),
            tE = n("Vcrm"),
            tP = n("QBVt");
        let tM = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(tg.cb, e);
            if (!(0, tg.Db)(a)) return !0;
            let r = n(tg.N, e),
                o = n(tg.C, e);
            if (null == r || null == o) return !1;
            let s = r[o]?.message;
            if (null == s || tI.a.has(s.author.role)) return !1;
            let i = n(tg.y, e),
                l = (0, tT.c)({
                    mapping: r,
                    current_node: o
                }, n(tg.S, e)),
                c = n(tg.fb, e);
            return "streaming" === a && "tpp" !== i && "flora" !== i && null != n(tg.j, e) && !(0, tC.e)(n(tg.p, e)) && null != c && !n(tw.e).has(c) && null != tA(n, e).request.current && (null == l || l.info.num_variants_in_stream <= 1)
        });

        function tA(e, t) {
            let n = e(tj.a, t),
                a = e(tg.j, t);
            return null == n.request.current && null != a ? e(tj.a, a) : n
        }
        var tk = n("xtkq"),
            tR = n("ZhoB"),
            tO = n("PG5R"),
            tN = n("zrki"),
            tF = n("iLYI"),
            tz = n("u4MG"),
            tL = n("wVX4"),
            tB = n("Gm6g"),
            tD = n("OOaz"),
            tG = n("H8lk"),
            tH = n("gbrq"),
            tq = n("n5iL"),
            tW = n("EFj1"),
            tK = n("iS3k"),
            tV = n("pDUk"),
            tU = n("GaCK"),
            tQ = n("Dofq"),
            t$ = n("VnEZ"),
            tY = n("b7aP");

        function tJ(e) {
            let t, n, o, s = (0, r.c)(6);
            s[0] !== e ? ({
                readData: n,
                ...t
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let i = (0, tK.b)(),
                [l, c] = (0, m.useState)(null);
            return i && l?.readData !== n && c({
                readData: n,
                data: n()
            }), s[3] !== l || s[4] !== t ? (o = null == l ? null : (0, a.jsx)(tY.a, {
                ...t,
                data: l.data
            }), s[3] = l, s[4] = t, s[5] = o) : o = s[5], o
        }

        function tX(e) {
            let t, n, o, s, i, l, c, u, h, p = (0, r.c)(22);
            p[0] !== e ? ({
                controlledState: t,
                display: n,
                ...o
            } = e, p[0] = e, p[1] = t, p[2] = n, p[3] = o) : (t = p[1], n = p[2], o = p[3]);
            let g = (0, d.y)(eg.a);
            p[4] !== g ? (s = {
                scope: g,
                layout: "summary"
            }, p[4] = g, p[5] = s) : s = p[5];
            let m = s;
            p[6] !== t?.isOpen || p[7] !== o ? (i = t?.isOpen === !1 ? null : (0, a.jsx)(tJ, {
                ...o
            }, o.conversationId), p[6] = t?.isOpen, p[7] = o, p[8] = i) : i = p[8];
            let f = i;
            return p[9] !== m || p[10] !== f ? (l = f && (0, a.jsx)(tK.a.PopoverContent, {
                analytics: m,
                children: f
            }), p[9] = m, p[10] = f, p[11] = l) : l = p[11], p[12] !== t || p[13] !== l ? (c = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(tZ, {
                    controlledState: t,
                    children: l
                })
            }), p[12] = t, p[13] = l, p[14] = c) : c = p[14], p[15] !== m || p[16] !== f || p[17] !== n ? (u = f && (0, a.jsx)(tK.a.Root, {
                analytics: m,
                shouldHideInlineImmediately: n.shouldHideInlineImmediately,
                shouldShow: n.shouldShow,
                children: f
            }), p[15] = m, p[16] = f, p[17] = n, p[18] = u) : u = p[18], p[19] !== c || p[20] !== u ? (h = (0, a.jsxs)(a.Fragment, {
                children: [c, u]
            }), p[19] = c, p[20] = u, p[21] = h) : h = p[21], h
        }

        function tZ(e) {
            let t, n, o, s = (0, r.c)(17),
                {
                    children: i,
                    controlledState: l
                } = e,
                c = (0, d.y)(eg.a),
                u = (0, m.useContext)(t$.a),
                h = (0, f.a)(),
                p = (0, d.z)(null == l ? tH.N : null);
            s[0] !== l?.isOpen || s[1] !== p ? (t = l?.isOpen ?? (0, tH.z)(p, !0), s[0] = l?.isOpen, s[1] = p, s[2] = t) : t = s[2];
            let g = t,
                v = (0, d.z)(tU.b),
                y = l?.isOpen ?? v.isPopoverOpen,
                b = (0, d.x)(tq.f, "togglePinnedSummary");
            (0, eL.b)(c), s[3] !== l || s[4] !== c ? (n = () => {
                null != l ? l.onOpenChange(!l.isOpen) : (0, tQ.b)(c)
            }, s[3] = l, s[4] = c, s[5] = n) : n = s[5];
            let x = n;
            return (0, tW.a)("togglePinnedSummary", x), s[6] !== i || s[7] !== u || s[8] !== l || s[9] !== h || s[10] !== g || s[11] !== y || s[12] !== v.displayMode || s[13] !== c || s[14] !== b || s[15] !== x ? (o = (0, a.jsx)(_.a.HeaderAction, {
                actionId: "chatgpt-thread-summary-panel-toggle",
                align: "end",
                sharedCapsule: !0,
                order: 250,
                unifiedSlotPosition: "threadSummary",
                children: "overlay" === v.displayMode ? (0, a.jsx)(tV.a, {
                    isOpen: y,
                    shouldPreventAutoFocus: l?.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        null != l ? l.onOpenChange(e) : c.set(tU.b, t => "overlay" !== t.displayMode || t.isPopoverOpen === e ? t : {
                            ...t,
                            isPopoverOpen: e
                        })
                    },
                    trigger: (0, a.jsx)(tK.a.HeaderButton, {
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
                    children: (0, a.jsx)(t$.a, {
                        value: u,
                        children: i
                    })
                }) : (0, a.jsx)(tK.a.HeaderButton, {
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
            }), s[6] = i, s[7] = u, s[8] = l, s[9] = h, s[10] = g, s[11] = y, s[12] = v.displayMode, s[13] = c, s[14] = b, s[15] = x, s[16] = o) : o = s[16], o
        }
        var t0 = n("pV06"),
            t1 = n("MM0V");

        function t2(e) {
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
            }), l[3] = o) : o = l[3], l[4] !== u || l[5] !== h || l[6] !== p ? (s = (0, a.jsx)(tl.a, {
                color: "primary",
                disabled: p,
                loading: u,
                onClick: h,
                children: o
            }), l[4] = u, l[5] = h, l[6] = p, l[7] = s) : s = l[7], l[8] !== n || l[9] !== s ? (i = (0, a.jsx)("div", {
                className: "mx-auto mb-3 w-full max-w-[var(--thread-content-max-width)]",
                children: (0, a.jsx)(t1.a, {
                    ariaLive: "polite",
                    title: t,
                    content: n,
                    customCtas: s
                })
            }), l[8] = n, l[9] = s, l[10] = i) : i = l[10], i
        }
        var t3 = n("oGhM"),
            t4 = n("fr5e"),
            t5 = n("rxj0"),
            t6 = n("LEgg");
        let t8 = (0, td.a)(() => n.e(766350).then(n.bind(n, "wWAQ")).then(e => e.ScheduledGoalNavigationBridge));

        function t7(e) {
            let t, n, o = (0, r.c)(6),
                {
                    conversationId: s,
                    scheduledAutomationId: i
                } = e,
                l = (0, eO.f)("3901104270");
            return o[0] !== s || o[1] !== l || o[2] !== i ? (t = l && null != i ? (0, a.jsx)(t8, {
                conversationId: s,
                automationId: i
            }) : null, o[0] = s, o[1] = l, o[2] = i, o[3] = t) : t = o[3], o[4] !== t ? (n = (0, a.jsx)(a.Fragment, {
                children: t
            }), o[4] = t, o[5] = n) : n = o[5], n
        }
        var t9 = n("Bs4i"),
            ne = n("Qgfj"),
            nt = n("rmk3"),
            nn = n("sqqv"),
            na = n("dDDU"),
            nr = n("soaw"),
            no = n("ZrYB"),
            ns = n("X6Vn"),
            ni = n("Kwur"),
            nl = n("eKlv"),
            nc = n("NApj"),
            nd = n("g2p6"),
            nu = n("oaTv"),
            nh = n("PME0"),
            np = n("lgcP"),
            ng = n("reLr"),
            nm = n("b6fw"),
            nf = n("Yjxz"),
            nv = n("svjy");

        function ny(e, t) {
            if (!(0, eN.b)(e, "2274846837") || (0, tD.e)(t)) return null;
            let n = e.get(ng.b),
                a = e.get(nm.h, t);
            return null != n && null != a && (0, nf.a)(a.view.definition.type) ? {
                identity: n,
                state: a
            } : null
        }
        var nb = n("AcSY"),
            nx = n("w7E5"),
            nw = n("xEXG"),
            nC = n("J6LI"),
            nI = n("lUUH"),
            n_ = n("ftAl");

        function nS(e) {
            let t, n, o, s = (0, r.c)(17),
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
                } = (0, nb.f)(),
                v = (0, nw.b)();
            return s[0] !== f || s[1] !== l || s[2] !== c || s[3] !== u || s[4] !== h || s[5] !== v || s[6] !== m ? (t = () => {
                let e = m.get(n_.a, l, {
                        enabled: !1
                    }),
                    t = (0, tz.a)(e?.gizmo_id) ? e?.gizmo_id ?? null : null,
                    n = null == t ? void 0 : m.query.getData(N.b, t);
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
                    } = e, c = (0, tz.a)(a?.gizmo_id) ? a?.gizmo_id ?? null : null, d = t.get(nx.a), u = t.get(eI.m), {
                        data: h
                    } = d, p = h?.pages.flatMap(e => e.items).length ?? 0, g = a?.conversation_origin === "tpp" || a?.conversation_origin === "flora", m = "allowed" === s || g && h?.pages.some(e => null != e.cursor) === !0, f = t.get(eI.h, n);
                    return null == o || null == a || t.get(eI.g, n) || (0, nC.c)(a, r).sourceUnavailable || null == (0, nC.b)(t, a, f, !1) || null != c && null == r || null == h || 0 === p && !m ? [] : [...null == r ? [] : [{
                        id: "current-project-name",
                        message: nP.projectName,
                        messageValues: {
                            projectName: r.gizmo.display.name
                        },
                        enabled: !1
                    }], ...(0, nI.b)({
                        scope: t,
                        conversation: a,
                        project: r,
                        showDestinationFetchState: !1,
                        showMoveToProject: null == c || p > 1 || m,
                        projectCrudStatus: s,
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
            }, s[0] = f, s[1] = l, s[2] = c, s[3] = u, s[4] = h, s[5] = v, s[6] = m, s[7] = t) : t = s[7], s[8] !== l || s[9] !== p || s[10] !== m ? (n = async () => {
                await Promise.all([(async () => {
                    let e = m.get(ta.chatGptConversationQueryById$, l, {
                        enabled: !1
                    });
                    null == e.data && e.isFetching && await m.query.getOrFetch(ta.chatGptConversationQueryById$, l).catch(nE), null == m.query.getData(ta.chatGptConversationQueryById$, l) && await m.query.getOrFetch(eI.j, [l]).catch(nT)
                })(), p?.()]);
                let e = m.get(n_.a, l, {
                    enabled: !1
                });
                (0, tz.a)(e?.gizmo_id) && e?.gizmo_id != null && await m.query.getOrFetch(N.b, e.gizmo_id).catch(nj)
            }, s[8] = l, s[9] = p, s[10] = m, s[11] = n) : n = s[11], s[12] !== i || s[13] !== g || s[14] !== t || s[15] !== n ? (o = (0, a.jsx)(nt.a, {
                preserveBrowserContextMenu: !0,
                awaitBeforeOpen: !1,
                getItems: t,
                onBeforeOpen: n,
                renderDropdown: g,
                trigger: "click",
                children: i
            }), s[12] = i, s[13] = g, s[14] = t, s[15] = n, s[16] = o) : o = s[16], o
        }

        function nj() {}

        function nT() {}

        function nE() {}
        let nP = (0, ne.f)({
            projectName: {
                id: "chatgptConversations.projectActions.projectName",
                defaultMessage: "{projectName}"
            }
        });

        function nM(e) {
            let t, o, s, i, l, c, u, h, p, g, y, b, x, I, _, S, T, E = (0, r.c)(68),
                {
                    onTitleClick: P,
                    showMenu: M,
                    triggerButton: A,
                    renderDropdown: k,
                    conversationOrigin: R,
                    conversationId: O,
                    title: N,
                    isHandoffPending: F,
                    isArchived: z,
                    isChatConversation: L,
                    onHandoff: B,
                    onOpenMessage: D,
                    projectId: G,
                    projectName: H,
                    serverConversationId: q
                } = e,
                W = (0, d.y)(eg.a),
                U = (0, d.y)(eT.a),
                Q = (0, nr.a)(),
                $ = (0, eO.i)();
            E[0] !== $ ? (t = !1, E[0] = $, E[1] = t) : t = E[1];
            let Y = t;
            E[2] !== $ ? (o = !1, E[2] = $, E[3] = o) : o = E[3];
            let J = o,
                X = Y || J;
            E[4] !== X ? (s = {
                enabled: X
            }, E[4] = X, E[5] = s) : s = E[5];
            let {
                data: Z
            } = (0, d.z)(nd.p, s), ee = X && Z?.fileLibraryEnabledForRegistrationCountry !== !1, et = (0, f.a)(), en = (0, v._)(), [ea, er] = (0, m.useState)(null), eo = (0, m.useRef)(null), es = (0, m.useRef)(null);
            E[6] === Symbol.for("react.memo_cache_sentinel") ? (i = [], E[6] = i) : i = E[6];
            let ei = (0, m.useRef)(i);
            E[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                name: "chatgpt"
            }, E[7] = l) : l = E[7];
            let {
                isCapable: el
            } = (0, d.x)(w.a, l), ec = (0, d.x)(eI.g, q);
            E[8] === Symbol.for("react.memo_cache_sentinel") ? (c = () => er("shortcut"), E[8] = c) : c = E[8];
            let ed = L && !ec;
            E[9] !== W || E[10] !== q ? (u = () => (0, eC.a)(W.query.getData(ta.chatGptConversationQueryById$, q), W.get(j.h), W.get(j.g)), E[9] = W, E[10] = q, E[11] = u) : u = E[11], E[12] !== ed || E[13] !== u ? (h = {
                enabled: ed,
                isActive: u
            }, E[12] = ed, E[13] = u, E[14] = h) : h = E[14], (0, tW.a)("deleteChat", c, h), E[15] !== U || E[16] !== ec || E[17] !== en || E[18] !== W || E[19] !== q ? (p = e => {
                !ec && (0, eC.a)(W.query.getData(ta.chatGptConversationQueryById$, q), W.get(j.h), W.get(j.g)) && (er(null), (0, np.a)(U, q, e), en("/", {
                    replace: !0,
                    state: {
                        leavingDeletedChatGptConversation: !0
                    }
                }))
            }, E[15] = U, E[16] = ec, E[17] = en, E[18] = W, E[19] = q, E[20] = p) : p = E[20];
            let eu = p;
            E[21] !== W || E[22] !== q ? (g = async () => {
                let e = [];
                ei.current = e, e.push(...await async function(e, t) {
                    let a = await ni.Request.safeGet("/live/conversations/{conversation_id}/session-sharing", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        }
                    }).catch(() => null);
                    return a?.can_share && 0 !== a.av_sessions.length ? [{
                        id: "share-live-session",
                        icon: tc.mj,
                        message: (0, ne.e)({
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
                }(W, q))
            }, E[21] = W, E[22] = q, E[23] = g) : g = E[23];
            let eh = g;
            E[24] !== O || E[25] !== R || E[26] !== ee || E[27] !== et || E[28] !== ec || E[29] !== z || E[30] !== F || E[31] !== Q || E[32] !== en || E[33] !== B || E[34] !== D || E[35] !== G || E[36] !== H || E[37] !== W || E[38] !== q || E[39] !== $ || E[40] !== N ? (y = e => {
                let t = W.get(j.f),
                    r = W.get(j.k),
                    o = W.query.getData(ta.chatGptConversationQueryById$, q),
                    s = W.get(j.h),
                    i = W.get(j.g),
                    l = (0, eC.a)(o, s, i),
                    c = (0, nl.b)(W, q),
                    d = !ec && (0, eC.a)(c, s, i),
                    u = W.get(C.b).pathname,
                    h = () => Q() && u === W.get(C.b).pathname && t === W.get(j.f) && r === W.get(j.k),
                    p = (0, nu.a)(W, O, R, () => (0, nh.a)(en)),
                    g = [];
                $.getLayer("3732549458").get("enable_conversation_audio_summary", !1) && g.push({
                    id: "chatgpt-audio-summary",
                    message: (0, ne.e)({
                        id: "GizmoInformation.audioSummary",
                        defaultMessage: "Audio summary"
                    }),
                    icon: (0, a.jsx)(K.b, {
                        icon: {
                            16: tc.zg,
                            20: tc.Ag
                        }
                    }),
                    nativeIcon: tc.zg,
                    selectAfterClose: !0,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(600460).then(n.bind(n, "EEPj"))).openAudioSummaryDialog
                        })().then(e => {
                            h() && e(W, q)
                        }).catch(() => {
                            h() && (eo.current?.focus({
                                preventScroll: !0
                            }), W.get(V.f).danger(et.formatMessage({
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
                    message: (0, ne.e)({
                        id: "GizmoInformation.viewFiles",
                        defaultMessage: "View files in chat"
                    }),
                    icon: (0, a.jsx)(K.b, {
                        icon: {
                            16: tc.rb,
                            20: tc.sb
                        }
                    }),
                    nativeIcon: tc.rb,
                    onSelect: () => {
                        (async function() {
                            return (await n.e(368308).then(n.bind(n, "LFUX"))).openConversationFiles
                        })().then(e => {
                            h() && e(W, {
                                conversationId: O,
                                serverConversationId: q,
                                onOpenMessage: D
                            })
                        }).catch(() => {
                            h() && W.get(V.f).danger(et.formatMessage({
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
                    let e = null == ny(W, q) ? null : {
                        id: "language-learning-feedback",
                        icon: tc.wd,
                        message: (0, ne.e)({
                            id: "restricted.languageLearningFeedback.action",
                            defaultMessage: "Language learning feedback"
                        }),
                        selectAfterClose: !0,
                        onSelect: () => {
                            let e = ny(W, q);
                            if (null == e || !h()) return;
                            let {
                                identity: t,
                                state: a
                            } = e, r = a.view.definition.sections.find(e => e.id === a.selectedSectionId), o = W.get(tg.C, q), s = W.get(tg.N, q), i = {
                                identity: t,
                                conversationId: q,
                                context: JSON.stringify({
                                    report_opened_at_utc: new Date().toISOString(),
                                    conversation_id: q,
                                    section_id: a.selectedSectionId,
                                    section_start_message_id: r?.start_message_id,
                                    target_section_id: a.entry?.sectionId,
                                    current_node_id: o,
                                    current_node_id_scope: "conversation_tail"
                                }, null, 2),
                                conversationJson: null == s ? null : JSON.stringify({
                                    conversation_id: q,
                                    current_node: o,
                                    mapping: s,
                                    sectioned_conversation: a.view
                                })
                            };
                            n.e(764441).then(n.bind(n, "OLZ4")).then(e => {
                                let {
                                    LanguageLearningFeedbackDialog: n
                                } = e, a = W.get(ng.b);
                                h() && (0, eN.b)(W, "2274846837") && a?.accountId === t.accountId && a.userId === t.userId && (0, ns.f)(W, n, {
                                    report: i
                                })
                            }).catch(() => {
                                h() && W.get(V.f).danger(W.get(nv.a).formatMessage({
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
                return g.push(...(0, na.a)(W)), (0, nc.a)(W, {
                    projectItems: void 0 === e ? [] : e,
                    sharingItems: ei.current,
                    viewItems: g,
                    feedbackItems: m,
                    preferenceItems: null == p ? [] : [p],
                    surface: "header",
                    isTitleMenu: !0,
                    conversationId: q,
                    stateConversationId: O,
                    conversationOrigin: R,
                    title: N,
                    isHandoffPending: F,
                    canHandoff: null != B,
                    onHandoff: B,
                    projectId: G,
                    projectName: H,
                    onRename: (0, eC.b)(o, s, i, ec) ? () => void(0, nl.renameActiveChatGptConversation)(W, O) : void 0,
                    isPinned: W.get(eI.h, q) ?? c?.is_starred === !0,
                    onTogglePin: d ? () => {
                        let e = (0, nl.b)(W, q);
                        !(null == e || W.get(eI.g, q)) && (0, eC.a)(e, W.get(j.h), W.get(j.g)) && (0, eI.V)({
                            scope: W,
                            conversation: "conversation_id" in e ? {
                                gizmo_id: e.gizmo_id,
                                id: e.conversation_id,
                                is_archived: e.is_archived,
                                is_starred: e.is_starred,
                                title: e.title
                            } : e
                        }).catch(nA)
                    } : void 0,
                    onArchive: !l || ec || z ? void 0 : () => (0, no.a)(W, q),
                    onUnarchive: l && !ec && z ? () => {
                        (0, eI.W)({
                            scope: W,
                            conversationId: q
                        }).then(() => {
                            W.get(V.f).success(et.formatMessage(eE.a.unarchiveSuccessPlain))
                        }).catch(() => {
                            W.get(V.f).danger(et.formatMessage(ew.a.unarchiveError), {
                                errorAnalytics: {
                                    toastId: "chatgptConversationPage.onUnarchive.unarchiveError"
                                }
                            })
                        })
                    } : void 0,
                    onDelete: !l || ec ? void 0 : () => er("menu")
                })
            }, E[24] = O, E[25] = R, E[26] = ee, E[27] = et, E[28] = ec, E[29] = z, E[30] = F, E[31] = Q, E[32] = en, E[33] = B, E[34] = D, E[35] = G, E[36] = H, E[37] = W, E[38] = q, E[39] = $, E[40] = N, E[41] = y) : y = E[41];
            let ep = y;
            E[42] !== P || E[43] !== N || E[44] !== A ? (b = null == A ? (0, a.jsx)(nn.a, {
                ref: eo,
                onActivate: P,
                title: N
            }) : (0, a.jsx)(t9.b, {
                ref: eo,
                children: A
            }), E[42] = P, E[43] = N, E[44] = A, E[45] = b) : b = E[45];
            let em = b;
            E[46] !== ep || E[47] !== em || E[48] !== en || E[49] !== el || E[50] !== eh || E[51] !== k || E[52] !== q || E[53] !== M ? (x = M && (el ? (0, a.jsx)(nS, {
                conversationId: q,
                getBaseItems: ep,
                menuTriggerRef: eo,
                navigate: en,
                onBeforeOpen: eh,
                renderDropdown: k,
                children: em
            }) : (0, a.jsx)(nt.a, {
                preserveBrowserContextMenu: !0,
                getItems: () => ep(),
                onBeforeOpen: eh,
                renderDropdown: k,
                trigger: "click",
                children: em
            })), E[46] = ep, E[47] = em, E[48] = en, E[49] = el, E[50] = eh, E[51] = k, E[52] = q, E[53] = M, E[54] = x) : x = E[54];
            let ef = "shortcut" === ea,
                ev = null != ea;
            return E[55] !== ea ? (I = () => {
                es.current = "menu" === ea ? eo.current : null, er(null)
            }, E[55] = ea, E[56] = I) : I = E[56], E[57] === Symbol.for("react.memo_cache_sentinel") ? (_ = e => {
                let t = es.current;
                if (es.current = null, null == t) return;
                e.preventDefault();
                let n = t.ownerDocument.activeElement;
                t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                    preventScroll: !0
                })
            }, E[57] = _) : _ = E[57], E[58] !== eu || E[59] !== ec || E[60] !== ef || E[61] !== ev || E[62] !== I || E[63] !== N ? (S = (0, a.jsx)(ex.a, {
                allowArtifactDeletion: !0,
                autoFocusConfirm: ef,
                open: ev,
                onOpenChange: I,
                onCloseAutoFocus: _,
                isDeleting: ec,
                onConfirm: eu,
                title: N
            }), E[58] = eu, E[59] = ec, E[60] = ef, E[61] = ev, E[62] = I, E[63] = N, E[64] = S) : S = E[64], E[65] !== x || E[66] !== S ? (T = (0, a.jsxs)(a.Fragment, {
                children: [x, S]
            }), E[65] = x, E[66] = S, E[67] = T) : T = E[67], T
        }

        function nA() {}

        function nk(e) {
            let t, n, o, s = (0, r.c)(11),
                {
                    title: i,
                    lockdownConversationId: l,
                    triggerButton: c,
                    renderDropdown: u
                } = e,
                h = (0, d.y)(eg.a),
                p = (0, v._)();
            return s[0] !== l || s[1] !== p || s[2] !== h ? (t = () => {
                let e = (0, nu.a)(h, l, null, () => (0, nh.a)(p));
                return null == e ? [] : [e]
            }, s[0] = l, s[1] = p, s[2] = h, s[3] = t) : t = s[3], s[4] !== i || s[5] !== c ? (n = c ?? (0, a.jsx)(nn.a, {
                title: i
            }), s[4] = i, s[5] = c, s[6] = n) : n = s[6], s[7] !== u || s[8] !== t || s[9] !== n ? (o = (0, a.jsx)(nt.a, {
                preserveBrowserContextMenu: !0,
                getItems: t,
                renderDropdown: u,
                trigger: "click",
                children: n
            }), s[7] = u, s[8] = t, s[9] = n, s[10] = o) : o = s[10], o
        }
        var nR = n("jeai"),
            nO = n("dLcZ"),
            nN = n("EyEA");

        function nF(e) {
            let t, n = (0, r.c)(2),
                {
                    children: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(_.a.HeaderAction, {
                actionId: "sectioned-conversation-navigation",
                align: "center",
                allowsThreadContentOverlap: !1,
                children: (0, a.jsx)("div", {
                    className: nN.a.Progress,
                    children: o
                })
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var nz = n("NVRI"),
            nL = n("WLgA");

        function nB(e) {
            let t, n, o = (0, r.c)(9),
                {
                    icon: s,
                    name: i,
                    projectId: l,
                    linkToProject: c
                } = e;
            o[0] !== s || o[1] !== c || o[2] !== i || o[3] !== l ? (t = c && null != i ? (0, a.jsx)(tl.b, {
                "aria-label": i,
                color: "ghostActive",
                size: "toolbar",
                to: (0, nL.c)(l),
                uniform: !0,
                children: s
            }) : null, o[0] = s, o[1] = c, o[2] = i, o[3] = l, o[4] = t) : t = o[4];
            let d = t,
                u = d ?? s,
                h = null != d;
            return o[5] !== i || o[6] !== u || o[7] !== h ? (n = (0, a.jsx)(nz.b, {
                project: {
                    icon: u,
                    iconInteractive: h,
                    name: i
                }
            }), o[5] = i, o[6] = u, o[7] = h, o[8] = n) : n = o[8], n
        }
        var nD = n("ftSl"),
            nG = n("u9Jt"),
            nH = n("Xoyl");

        function nq(e) {
            let t, n = (0, r.c)(7),
                {
                    hasTitleMenu: o,
                    onClick: s,
                    project: i,
                    title: l
                } = e;
            if (null == l) {
                let e;
                return n[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(nH.a, {}), n[0] = e) : e = n[0], e
            }
            if (o) {
                let e;
                return n[1] !== s || n[2] !== i || n[3] !== l ? (e = (0, a.jsx)(nR.a, {
                    children: (0, a.jsx)(nG.a, {
                        triggerButton: (0, a.jsx)(nn.a, {
                            onActivate: s,
                            project: i,
                            title: l
                        })
                    })
                }), n[1] = s, n[2] = i, n[3] = l, n[4] = e) : e = n[4], e
            }
            return n[5] !== l ? (t = (0, a.jsx)(nD.a, {
                className: "max-w-full",
                variant: "flush-start",
                title: l
            }), n[5] = l, n[6] = t) : t = n[6], t
        }
        var nW = n("MJRC"),
            nK = n("X0li");
        let nV = (0, td.a)(nK.d),
            nU = (0, td.a)(async () => (await n.e(328371).then(n.bind(n, "uPMT"))).SectionHistory),
            nQ = (0, td.a)(async () => (await n.e(270015).then(n.bind(n, "r5vN"))).SectionNavigation);
        var n$ = n("ZSgi"),
            nY = n("lX86"),
            nJ = n("sQ4r"),
            nX = n("on57"),
            nZ = n("IPUh"),
            n0 = n("v7qY"),
            n1 = n("wD9O"),
            n2 = n("jov5"),
            n3 = n("Ro2M"),
            n4 = n("bN4H"),
            n5 = n("TS05");

        function n6(e) {
            let t, n, o, s, i = (0, r.c)(12),
                {
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                {
                    key: h,
                    search: p,
                    state: g
                } = (0, v.X)();
            i[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                name: "automations.cloud.scheduled-tasks"
            }, i[0] = t) : t = i[0];
            let {
                isCapable: m
            } = (0, d.x)(w.a, t);
            if (i[1] !== m || i[2] !== g?.sidebarArea || i[3] !== p) {
                let e = new URLSearchParams(p);
                n = e.get("automationId"), o = g?.sidebarArea === "scheduled" || !m || !n || "finalAgentTurnStart" !== e.get("messageId"), i[1] = m, i[2] = g?.sidebarArea, i[3] = p, i[4] = n, i[5] = o
            } else n = i[4], o = i[5];
            return o ? null : (i[6] !== n || i[7] !== l || i[8] !== c || i[9] !== h || i[10] !== u ? (s = (0, a.jsx)(n8, {
                automationId: n,
                conversationId: l,
                entries: c,
                turnListApi: u
            }, h), i[6] = n, i[7] = l, i[8] = c, i[9] = h, i[10] = u, i[11] = s) : s = i[11], s)
        }

        function n8(e) {
            let t, n, a, o, s = (0, r.c)(25),
                {
                    automationId: i,
                    conversationId: l,
                    entries: c,
                    turnListApi: u
                } = e,
                h = (0, d.y)(eg.a),
                p = (0, v.X)(),
                g = (0, d.z)(j.f),
                f = (0, d.x)(tg.j, l),
                {
                    data: y
                } = (0, d.x)(n3.e, i),
                b = (0, d.z)(n2.a),
                x = (0, m.useRef)(null),
                w = (0, m.useRef)(null);
            s[0] !== c ? (t = c.findLast(ae), s[0] = c, s[1] = t) : t = s[1];
            let C = t;
            s[2] !== g || s[3] !== i || s[4] !== b || s[5] !== C || s[6] !== y || s[7] !== p || s[8] !== h || s[9] !== u ? (n = () => {
                null == y || null == g || (b || x.current === g || (x.current = g, (0, n4.openAutomationSidePanelTab)({
                    scope: h,
                    automationId: i,
                    title: y.automation.title
                })), null != u && null != C && w.current !== g && (w.current = g, u.scrollToKey(C.turnKey, n7, {
                    align: "top"
                }).then(() => {
                    h.set(n5.a, {
                        locationKey: p.key,
                        accountId: g
                    }, !0)
                })))
            }, s[2] = g, s[3] = i, s[4] = b, s[5] = C, s[6] = y, s[7] = p, s[8] = h, s[9] = u, s[10] = n) : n = s[10];
            let I = (0, m.useEffectEvent)(n);
            s[11] !== g || s[12] !== l || s[13] !== y?.automation.conversation_id || s[14] !== I || s[15] !== f ? (a = () => {
                null != g && y?.automation.conversation_id === (f ?? l) && I()
            }, s[11] = g, s[12] = l, s[13] = y?.automation.conversation_id, s[14] = I, s[15] = f, s[16] = a) : a = s[16];
            let _ = C?.turnKey,
                S = y?.automation.conversation_id;
            return s[17] !== g || s[18] !== b || s[19] !== l || s[20] !== f || s[21] !== _ || s[22] !== S || s[23] !== u ? (o = [g, l, _, S, f, b, u], s[17] = g, s[18] = b, s[19] = l, s[20] = f, s[21] = _, s[22] = S, s[23] = u, s[24] = o) : o = s[24], (0, m.useEffect)(a, o), null
        }

        function n7(e) {
            let t = e.querySelector("[data-chatgpt-agent-turn-start]");
            if (null == t) return null;
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: n9
            });
            n.currentNode = t;
            let a = n.nextNode();
            return a instanceof HTMLElement ? a : null
        }

        function n9(e) {
            return e instanceof HTMLElement && e.getClientRects().length > 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }

        function ae(e) {
            let {
                turn: t
            } = e;
            return t.items.some(at)
        }

        function at(e) {
            return "user-message" !== e.type
        }
        var an = n("TDcV"),
            aa = n("Xvoy"),
            ar = n("WAdu");
        let ao = {
            $type: "protobuf_analytics_events.v1.ChatgptConversationPrintLifecycle"
        };
        var as = n("jDEJ");
        let ai = (0, d.u)(eT.a, null);

        function al(e, t) {
            if (!e.get(ec.c).isChatgptBrowserReplacement || t.repeat || ((0, as.a)() ? !t.metaKey || t.ctrlKey : !t.ctrlKey || t.metaKey) || t.altKey || t.shiftKey || "p" !== t.key.toLowerCase() || null != e.get(ai)) return;
            let n = ad("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_SHORTCUT");
            e.set(ai, n), au(e, n, "CHATGPT_CONVERSATION_PRINT_STAGE_INTENT_OBSERVED")
        }
        async function ac(e, t, n, a) {
            let r = e.get(ai);
            if (!e.get(ec.c).isChatgptBrowserReplacement || null == r) return a();
            let o = n => {
                au(e, r, n, t)
            };
            o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_STARTED");
            try {
                let e = await a();
                return n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_SUCCEEDED"), e
            } catch (a) {
                throw n.aborted || o("CHATGPT_CONVERSATION_PRINT_STAGE_PREPARATION_FAILED"), "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY" !== t || e.get(ai)?.id !== r.id || e.get(ai)?.printing || e.set(ai, null), a
            }
        }

        function ad(e) {
            let t = performance.now();
            return {
                id: crypto.randomUUID(),
                entryPoint: e,
                startedAt: t,
                printing: !1
            }
        }

        function au(e, t, n, a) {
            (0, ec.a)(e, ao, {
                attemptId: t.id,
                stage: n,
                entryPoint: t.entryPoint,
                elapsedMs: Math.max(0, performance.now() - t.startedAt),
                preparation: a
            })
        }
        var ah = n("CpsU"),
            ap = n.n(ah),
            ag = n("rKAs"),
            am = n("SqqO"),
            af = n("zHp1"),
            av = n("taWv");

        function ay() {
            return Object.fromEntries(Array.from(document.images).flatMap(e => {
                if (!e.complete || 0 === e.naturalWidth) return [];
                let t = e.currentSrc || e.src;
                return [e.getAttribute("src"), e.src, t].flatMap(e => e ? [
                    [e, t]
                ] : [])
            }))
        }
        var ab = n("j0nn"),
            ax = n("AO3k"),
            aw = n("nM3S"),
            aC = n("g4oa"),
            aI = n("zn0A"),
            a_ = "printDocument-v_w5Ax";
        let aS = "https://chatgpt.com/download/?utm_source=chatgpt_web&utm_medium=print&utm_campaign=app_install";

        function aj(e) {
            let t, n, o, s, i, l, c, d, u, h, p, g, m, v = (0, r.c)(24),
                {
                    children: y,
                    title: b
                } = e,
                x = (0, f.a)(),
                {
                    getExperiment: w
                } = (0, eO.h)(),
                C = w("448755449").get("enabled", !1);
            v[0] !== y ? (t = (0, a.jsx)(aI.a, {
                value: !0,
                children: y
            }), v[0] = y, v[1] = t) : t = v[1];
            let I = t;
            if (!C) {
                let e, t;
                return v[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, nX.b)(a_, "hidden w-full space-y-1.5 bg-surface text-default print:block"), v[2] = e) : e = v[2], v[3] !== I ? (t = (0, a.jsx)("div", {
                    className: e,
                    "data-conversation-print": "",
                    "data-theme": "light",
                    children: I
                }), v[3] = I, v[4] = t) : t = v[4], t
            }
            return v[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, nX.b)(a_, "formattedPrintDocument-tP74Wl", "group/conversation-print hidden w-full bg-surface text-default print:block"), v[5] = n) : n = v[5], v[6] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(aw.a, {
                className: "h-6 w-auto shrink-0"
            }), v[6] = o) : o = v[6], v[7] !== b ? (s = (0, a.jsxs)("header", {
                className: "mb-6 flex items-center justify-between gap-6",
                children: [o, (0, a.jsx)("p", {
                    className: "min-w-0 text-end text-sm wrap-anywhere text-secondary",
                    children: b
                })]
            }), v[7] = b, v[8] = s) : s = v[8], v[9] !== I ? (i = (0, a.jsx)("div", {
                className: "transcript-XHYu34",
                children: I
            }), v[9] = I, v[10] = i) : i = v[10], v[11] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, nX.b)("footer-QEzLbn", "flex items-center gap-3 rounded-2xl border border-default bg-surface-secondary p-2 text-default"), v[11] = l) : l = v[11], v[12] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)("div", {
                className: "flex size-10 shrink-0 items-center justify-center rounded-xl border border-default bg-surface",
                children: (0, a.jsx)(aC.a, {
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
                    href: `${aS}&utm_content=pdf_link`,
                    children: (0, a.jsx)(ax.a, {
                        value: `${aS}&utm_content=qr`,
                        size: "inline",
                        ariaLabel: h,
                        fallback: p
                    })
                })]
            }), v[18] = h, v[19] = g) : g = v[19], v[20] !== g || v[21] !== s || v[22] !== i ? (m = (0, a.jsxs)("div", {
                className: n,
                "data-conversation-print": "",
                "data-print-formatting": "",
                "data-theme": "light",
                children: [s, i, g]
            }), v[20] = g, v[21] = s, v[22] = i, v[23] = m) : m = v[23], m
        }

        function aT(e) {
            return {
                ...e,
                renderTelemetryMessages: void 0
            }
        }
        var aE = n("jfiJ"),
            aP = n("FGJH"),
            aM = n("nmN6");
        let aA = new WeakMap;

        function ak(e) {
            let t, n, o = (0, r.c)(6),
                s = (0, d.z)(an.a);
            return o[0] !== s || o[1] !== e.entries[0]?.conversationId ? (t = JSON.stringify([s, e.entries[0]?.conversationId]), o[0] = s, o[1] = e.entries[0]?.conversationId, o[2] = t) : t = o[2], o[3] !== e || o[4] !== t ? (n = (0, a.jsx)(aR, {
                ...e
            }, t), o[3] = e, o[4] = t, o[5] = n) : n = o[5], n
        }

        function aR(e) {
            let t, n, o, s, i, l, c = (0, r.c)(16),
                u = (0, d.y)(eg.a),
                h = (0, d.z)(aa.a),
                [p, g] = (0, m.useState)(!1),
                f = (0, m.useRef)(null);
            c[0] !== u ? (t = (e, t) => {
                if (al(u, e), !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase()) return;
                if (e.repeat) return void f.current?.onKeyDown(e, t);
                let n = aA.get(e);
                if (e.defaultPrevented && null == n) return;
                (0, n0.flushSync)(() => g(!0));
                let a = n ?? f.current?.onKeyDown(e, t);
                null == a && e.defaultPrevented || Promise.resolve(a).then(() => aA.get(e)).finally(() => {
                    t.aborted || g(!1)
                })
            }, c[0] = u, c[1] = t) : t = c[1];
            let v = (0, m.useEffectEvent)(t);
            c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = () => {
                (0, n0.flushSync)(() => g(!0)), f.current?.onBeforePrint()
            }, c[2] = n) : n = c[2];
            let y = (0, m.useEffectEvent)(n);
            c[3] !== u ? (o = () => {
                u.set(aI.b, null), g(!1)
            }, c[3] = u, c[4] = o) : o = c[4];
            let b = (0, m.useEffectEvent)(o);
            return c[5] !== b || c[6] !== y || c[7] !== v || c[8] !== u ? (s = () => {
                let e, t, n = new AbortController,
                    a = (e = () => {
                        if (!u.get(ec.c).isChatgptBrowserReplacement) return;
                        let e = u.get(ai);
                        if (e?.printing) return;
                        let t = {
                            ...e ?? ad("CHATGPT_CONVERSATION_PRINT_ENTRY_POINT_UNOBSERVED"),
                            printing: !0
                        };
                        u.set(ai, t), au(u, t, "CHATGPT_CONVERSATION_PRINT_STAGE_BEFORE_PRINT")
                    }, t = () => {
                        let e = u.get(ai);
                        u.get(ec.c).isChatgptBrowserReplacement && e?.printing && (au(u, e, "CHATGPT_CONVERSATION_PRINT_STAGE_AFTER_PRINT"), u.set(ai, null))
                    }, window.addEventListener("beforeprint", e, !0), window.addEventListener("afterprint", t), () => {
                        window.removeEventListener("beforeprint", e, !0), window.removeEventListener("afterprint", t), u.set(ai, null)
                    }),
                    r = e => v(e, n.signal);
                return window.addEventListener("keydown", r, !0), window.addEventListener("beforeprint", y, !0), window.addEventListener("afterprint", b), () => {
                    n.abort(), window.removeEventListener("keydown", r, !0), window.removeEventListener("beforeprint", y, !0), window.removeEventListener("afterprint", b), u.set(aI.b, null), a()
                }
            }, c[5] = b, c[6] = y, c[7] = v, c[8] = u, c[9] = s) : s = c[9], c[10] !== u ? (i = [u], c[10] = u, c[11] = i) : i = c[11], (0, m.useEffect)(s, i), c[12] !== h || c[13] !== e || c[14] !== p ? (l = p || h ? (0, a.jsx)(aO, {
                ...e,
                ref: f,
                printing: h
            }) : null, c[12] = h, c[13] = e, c[14] = p, c[15] = l) : l = c[15], l
        }

        function aO(e) {
            let t, n, o, s, l = (0, r.c)(19),
                {
                    entries: c,
                    title: u,
                    TurnRowComponent: h,
                    printing: p,
                    ref: g
                } = e,
                f = (0, d.y)(eg.a),
                v = (0, m.useContext)(S.a),
                y = (0, m.useContext)(ar.a),
                {
                    getExperiment: b
                } = (0, eO.h)(),
                x = b("448755449", {
                    disableExposureLog: !0
                }).get("enabled", !1);
            l[0] !== c[0]?.conversationId ? (t = c[0]?.conversationId ?? (0, tD.d)(""), l[0] = c[0]?.conversationId, l[1] = t) : t = l[1], l[2] !== v || l[3] !== t ? (n = {
                auth: v,
                conversationId: t
            }, l[2] = v, l[3] = t, l[4] = n) : n = l[4];
            let w = (0, d.x)(null != c[0] && ab.h, n),
                C = (0, d.x)(null == c[0] ? null : t5.e, c[0]?.conversationId ?? "") ?? !0,
                I = (0, m.useRef)(null),
                _ = function(e, t, n) {
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
                                userResolver: (0, av.c)(void 0, void 0, void 0, e.get(tg.T, n.conversationId) ?? void 0),
                                scopedResolver: (0, av.c)(a ?? void 0)
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
                            void 0 === t.generatedResolver && (t.generatedResolver = e.get(av.a, n.conversationId));
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
                                        for (let a of (0, ag.u)(t, e)) {
                                            if (r && (0, am.d)(a.src)) continue;
                                            let e = a.searchResult?.isProxied && (a.previewSrc === a.searchResult.contentSrc || a.previewSrc === a.searchResult.originalSrc) ? a.src : a.previewSrc;
                                            s.push({
                                                conversationId: n.conversationId,
                                                src: a.src,
                                                previewSrc: null != e && r && (0, am.d)(e) ? a.src : e
                                            })
                                        }
                            }
                            if (null == o) continue;
                            i.push(...l.contentReferences.flatMap((e, t) => (0, ag.u)(e, t).map(e => {
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
                        return null != t && (0, af.h)(t) ? [{
                            src: t,
                            resolver: n
                        }] : []
                    });
                    return {
                        queryKey: ["chatgpt-print-assets", e.get(an.a), t[0]?.conversationId, a, r, s, c.map(e => {
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
                        staleTime: eD.b.FIVE_MINUTES,
                        refetchOnWindowFocus: !1,
                        retry: !1,
                        queryFn: t => {
                            let {
                                client: a,
                                signal: i,
                                queryKey: l
                            } = t;
                            return ac(e, "CHATGPT_CONVERSATION_PRINT_PREPARATION_IMAGES", i, async () => {
                                let t = {
                                    ...a.getQueryData(l)?.imageSources
                                };
                                for (let e of ap()(c, 6)) i.throwIfAborted(), await Promise.all(e.map(async e => {
                                    let {
                                        src: n,
                                        resolver: r
                                    } = e, o = await (0, af.a)(a, n, r);
                                    if (i.throwIfAborted(), null != o) {
                                        let e = new Image;
                                        e.referrerPolicy = "no-referrer", e.src = o, await e.decode(), t[n] = o
                                    }
                                }));
                                let d = new Map,
                                    u = s.flatMap(t => {
                                        let n = d.get(t.conversationId);
                                        return (null == n && (n = r || !e.get(ab.h, {
                                            auth: o,
                                            conversationId: t.conversationId
                                        }) && e.get(t5.e, t.conversationId), d.set(t.conversationId, n)), n && (0, am.d)(t.src)) ? [] : [{
                                            ...t,
                                            previewSrc: n && null != t.previewSrc && (0, am.d)(t.previewSrc) ? t.src : t.previewSrc
                                        }]
                                    }),
                                    h = n ? t : await async function(e, t, n) {
                                        if (0 === e.length) return t;
                                        let a = ay(),
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
                }(f, c, p, x, "restricted" === y || !w && C, v),
                {
                    data: j,
                    isSuccess: T,
                    isError: E,
                    refetch: P
                } = (0, i.a)(_);
            return l[5] !== _ || l[6] !== j || l[7] !== x || l[8] !== T || l[9] !== P || l[10] !== f ? (o = () => ({
                onKeyDown(e, t) {
                    if (!e.defaultPrevented && (!T || !j.complete) && (e.preventDefault(), !e.repeat && I.current !== t)) return I.current = t, P({
                        cancelRefetch: !1
                    }).then(() => {
                        t.aborted || window.print()
                    }).finally(() => {
                        I.current === t && (I.current = null)
                    })
                },
                onBeforePrint() {
                    if (x) {
                        let e = f.queryClient.getQueryData(_.queryKey),
                            t = {
                                ...ay(),
                                ...e?.imageSources
                            };
                        (0, n0.flushSync)(() => f.set(aI.b, t))
                    }
                }
            }), l[5] = _, l[6] = j, l[7] = x, l[8] = T, l[9] = P, l[10] = f, l[11] = o) : o = l[11], (0, m.useImperativeHandle)(g, o), l[12] !== h || l[13] !== c || l[14] !== E || l[15] !== T || l[16] !== p || l[17] !== u ? (s = p ? (0, n0.createPortal)((0, a.jsx)(aj, {
                title: u,
                children: (0, a.jsx)(t$.a, {
                    value: null,
                    children: (0, a.jsx)(aM.a, {
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
                                        items: t.items.map(e => "chatgpt-reasoning-group" !== e.type ? aT(e) : {
                                            ...e,
                                            items: e.items.map(aT),
                                            activeReasoning: null == e.activeReasoning ? void 0 : aT(e.activeReasoning)
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
            }), document.body) : null, l[12] = h, l[13] = c, l[14] = E, l[15] = T, l[16] = p, l[17] = u, l[18] = s) : s = l[18], s
        }

        function aN(e) {
            let t, n, a, o, s, l, c = (0, r.c)(22),
                {
                    conversationId: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)(),
                g = (0, m.useRef)(null),
                v = (0, d.z)(an.a),
                y = (0, d.x)(tg.j, u),
                b = (0, d.z)(aP.b);
            c[0] !== v || c[1] !== y ? (t = ["chatgpt-print-history", v, y], c[0] = v, c[1] = y, c[2] = t) : t = c[2], c[3] !== h || c[4] !== y ? (n = e => {
                let {
                    signal: t
                } = e;
                return ac(h, "CHATGPT_CONVERSATION_PRINT_PREPARATION_HISTORY", t, async () => (null != y && await (0, aE.a)(h, y, t), !0))
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
                if (al(h, e), e.defaultPrevented || null == y || 0 === b || h.get(aP.c, y)?.complete === !0 || !e.ctrlKey && !e.metaKey || e.altKey || e.shiftKey || "p" !== e.key.toLowerCase() || (e.preventDefault(), e.repeat)) return;
                if (g.current?.signal === t) return void aA.set(e, g.current.preparation);
                let n = x({
                    cancelRefetch: !1
                }).then(async e => {
                    if (!t.aborted && h.get(an.a) === v) {
                        if (e.isError) return void h.get(V.f).danger(p.formatMessage({
                            id: "chatgpt.printHistory.error",
                            defaultMessage: "Couldn't load the full conversation to print"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgpt.printHistory.error"
                            }
                        });
                        await Promise.all(h.queryClient.getQueryCache().findAll({
                            queryKey: ["chatgpt-print-assets", v, u],
                            predicate: aL
                        }).map(aF)), t.aborted || h.get(an.a) !== v || window.print()
                    }
                }).finally(() => {
                    g.current?.signal === t && (g.current = null)
                });
                g.current = {
                    signal: t,
                    preparation: n
                }, aA.set(e, n)
            }, c[9] = v, c[10] = u, c[11] = p, c[12] = b, c[13] = x, c[14] = h, c[15] = y, c[16] = o) : o = c[16];
            let w = (0, m.useEffectEvent)(o);
            return c[17] !== w ? (s = () => {
                let e = new AbortController,
                    t = t => w(t, e.signal);
                return window.addEventListener("keydown", t, !0), () => {
                    e.abort(), window.removeEventListener("keydown", t, !0)
                }
            }, c[17] = w, c[18] = s) : s = c[18], c[19] !== v || c[20] !== y ? (l = [v, y], c[19] = v, c[20] = y, c[21] = l) : l = c[21], (0, m.useEffect)(s, l), null
        }

        function aF(e) {
            return e.fetch(void 0, {
                cancelRefetch: !1
            }).catch(az)
        }

        function az() {}

        function aL(e) {
            return e.getObserversCount() > 0
        }
        var aB = n("gbRX");

        function aD(e) {
            let t, n, o = (0, r.c)(4),
                {
                    isFetching: s,
                    isSharedConversation: i,
                    onRetry: l
                } = e,
                c = (0, d.z)(!i && aB.a) || s;
            return o[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.preview.retry",
                defaultMessage: "Try again"
            }), o[0] = t) : t = o[0], o[1] !== l || o[2] !== c ? (n = (0, a.jsx)(tl.a, {
                color: "ghost",
                disabled: c,
                onClick: l,
                children: t
            }), o[1] = l, o[2] = c, o[3] = n) : n = o[3], n
        }

        function aG(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    isFetching: i,
                    isSharedConversation: l,
                    onRetry: c
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.loadError",
                defaultMessage: "Could not load this ChatGPT conversation"
            }), s[0] = t) : t = s[0], s[1] !== i || s[2] !== l || s[3] !== c ? (n = null != c ? (0, a.jsx)(aD, {
                isFetching: i,
                isSharedConversation: l,
                onRetry: c
            }) : null, s[1] = i, s[2] = l, s[3] = c, s[4] = n) : n = s[4], s[5] !== n ? (o = (0, a.jsxs)("div", {
                className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-default",
                children: [t, n]
            }), s[5] = n, s[6] = o) : o = s[6], o
        }
        var aH = n("FfNP"),
            aq = n("WVag");
        let aW = (0, td.a)(aH.loadEpicChartIndicator);

        function aK(e) {
            let t, n = (0, r.c)(3),
                {
                    conversationId: o
                } = e,
                s = (0, d.x)(aq.a, o),
                [i, l] = (0, m.useState)(!1);
            return i || null == s || l(!0), n[0] !== o || n[1] !== i ? (t = i ? (0, a.jsx)(aW, {
                conversationId: o
            }) : null, n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
        }
        var aV = n("DWXw"),
            aU = n("RGWz"),
            aQ = n("QxH2"),
            a$ = n("UuVq"),
            aY = n("TwSq"),
            aJ = n("l0fK"),
            aX = n("bjAA"),
            aZ = n("hkBU"),
            a0 = n("RzIS"),
            a1 = n("T1PX"),
            a2 = n("guID"),
            a3 = n("Mbqw"),
            a4 = n("yzQ9"),
            a5 = n("Gjet"),
            a6 = n("ywqz"),
            a8 = n("gJe8"),
            a7 = n("lAQI"),
            a9 = n("lsfk"),
            re = n("IObw"),
            rt = n("kQNh"),
            rn = n.n(rt),
            ra = n("NkEl"),
            rr = n("FW69"),
            ro = "highlight-x7OnzP",
            rs = "safari-wcvuzB",
            ri = "block-t7sxyD";
        let rl = "chatgpt-search-result",
            rc = "script, style, textarea, input, select, [hidden], [aria-hidden='true'], [data-thread-find-skip]";

        function* rd(e, t) {
            let n = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                    acceptNode: e => e.parentElement?.closest(rc) == null ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
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
            let o = RegExp(t.split(/\n+/u).map(rn()).join("\\n*"), "g");
            for (let n = o.exec(r); null != n && n.index < r.length; n = o.exec(r)) {
                let r = n.index;
                o.lastIndex = r + 1;
                let s = r + n[0].length,
                    i = a.find(e => e.end > r),
                    l = a.findLast(e => e.start < s);
                if (null == i || null == l) continue;
                let c = e.ownerDocument.createRange();
                c.setStart(i.node, r - i.start), c.setEnd(l.node, s - l.start), ru(c) && ((0, rr.a)(c) ?? c.toString()).trim() === t && (yield c)
            }
        }

        function ru(e) {
            return Array.from(e.getClientRects()).some(e => e.width > 0 && e.height > 0) && null != e.startContainer.parentElement && "hidden" !== getComputedStyle(e.startContainer.parentElement).visibility
        }
        let rh = a7.F({
            chatGptSearchNavigation: a7.F({
                key: a7.L(),
                messageId: a7.L()
            })
        });

        function rp(e) {
            let t, n, a, o, s, i, l, c, u, h, p, g, f = (0, r.c)(50),
                {
                    conversationId: y,
                    entries: b,
                    isConversationFetching: x,
                    turnListApi: w
                } = e,
                C = (0, d.y)(eT.a),
                I = (0, d.x)(tg.s, y),
                _ = (0, a9.b)(),
                S = (0, n1.c)();
            f[0] !== _ || f[1] !== S ? (t = e => {
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
                            left: (0, n1.b)(a.left + a.width / 2 - r.left - r.width / 2, n),
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
                        h = (0, n1.b)(s.height, n),
                        p = (0, n1.b)(s.top - i.top, n) - c + Math.min(h, u) / 2 - u / 2;
                    t.scrollToDistanceFromBottomPx(t.getLastScrollDistanceFromBottomPx() - p, "instant", "user")
                }(e, _, S)
            }, f[0] = _, f[1] = S, f[2] = t) : t = f[2];
            let j = (0, m.useEffectEvent)(t),
                T = (0, v.X)(),
                E = (0, v._)(),
                P = new URLSearchParams(T.search),
                M = P.get("messageId") ?? P.get("message"),
                A = rh.safeParse(T.state).data?.chatGptSearchNavigation,
                k = M ?? A?.messageId,
                R = P.get("selectedTextQuery") ?? "",
                O = (0, d.x)(tg.N, y),
                N = !R || null != k && null != O && (O[k]?.message != null || Object.values(O).some(e => e.message?.id === k)),
                F = R || P.get("historySearchQuery") || "",
                z = JSON.stringify([y, null != M ? T.key : A?.key ?? T.key, k]);
            f[3] !== z ? (n = {
                key: z,
                handled: !1,
                positioned: !1
            }, f[3] = z, f[4] = n) : n = f[4];
            let L = (0, m.useRef)(n),
                B = (0, m.useEffectEvent)(e => {
                    L.current.positioned = !0;
                    let t = F.trim().length > 0 ? function(e, t, n) {
                        let a, r, o, s, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "terms",
                            l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0,
                            c = "phrase" === i ? t.trim() : null,
                            d = [...new Set(t.trim().toLowerCase().normalize("NFC").split(/\s+/).map(e => e.replace(/^[^\p{Letter}\p{Number}]+|[^\p{Letter}\p{Number}]+$/gu, "")).filter(e => e.length > 0))],
                            u = new TextEncoder,
                            h = d.filter(e => !/^\p{Letter}+$/u.test(e) || u.encode(e.normalize("NFKD").replace(/\p{Mark}/gu, "")).byteLength >= 3),
                            p = h.length > 0 ? h : d;
                        if (c?.length === 0 || null == c && 0 === p.length) return () => {};
                        let g = new RegExp(null == c ? p.toSorted((e, t) => t.length - e.length).map(rn()).join("|") : rn()(c), null == c ? "giu" : "gu"),
                            m = !1,
                            f = performance.now(),
                            v = !1,
                            y = new WeakSet,
                            b = new Set,
                            x = new MutationObserver(C);

                        function w() {
                            for (let t of (m = !0, x.disconnect(), clearTimeout(r), null != o && cancelAnimationFrame(o), null != a && CSS.highlights.get(rl) === a && CSS.highlights.delete(rl), e.classList.remove(ro, rs), b)) t.classList.remove(ro, ri)
                        }

                        function C() {
                            m || null != r || null != o || (r = setTimeout(() => {
                                r = void 0, o = requestAnimationFrame(() => {
                                    o = void 0, I()
                                })
                            }, 50))
                        }

                        function I() {
                            let t;
                            if (m || !e.isConnected || null != o) return;
                            let d = performance.now() - f;
                            if (d < 4e3 && null != e.querySelector("[data-search-result-pending]")) return void C();
                            let u = (0, ra.a)(e);
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
                                o = requestAnimationFrame(() => {
                                    o = requestAnimationFrame(() => {
                                        o = void 0, I()
                                    })
                                });
                                return
                            }
                            let _ = [];
                            if (null != c) {
                                let t = e.querySelector('[data-markdown-text-style="assistant-message"]') ?? e,
                                    n = 0;
                                for (let e of rd(t, c))
                                    if (!(n++ < l)) {
                                        _.push(e);
                                        break
                                    }
                            } else {
                                let t = e.ownerDocument.createTreeWalker(e, NodeFilter.SHOW_TEXT, {
                                    acceptNode: e => e.parentElement?.closest(rc) != null || u.some(t => {
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
                                        a.setStart(n, t.index), a.setEnd(n, t.index + t[0].length), ru(a) && _.push(a)
                                    }
                            }
                            let S = h.flatMap(e => {
                                let {
                                    element: t,
                                    target: n
                                } = e;
                                if ("terms" !== i || "text" === n.highlight || "auto" === n.highlight && _.some(e => t.contains(e.startContainer))) return [];
                                let a = t.getBoundingClientRect();
                                return a.width > 0 && a.height > 0 ? [t] : []
                            });
                            if (0 === _.length && 0 === S.length) {
                                if (d < 800) return void C();
                                S.push(e)
                            }
                            let j = 0,
                                T = 0;
                            for (let e of [..._, ...S]) {
                                let n = e instanceof Range ? e.getClientRects()[0] : e.getBoundingClientRect(),
                                    a = n?.top ?? 0,
                                    r = n?.left ?? 0;
                                (null == t || 0 > (a - j || r - T)) && (t = e, j = a, T = r)
                            }
                            t = t ?? e, v && n?.(t);
                            let E = t instanceof Range ? t.getClientRects()[0] : t.getBoundingClientRect(),
                                P = [E?.top, E?.left, E?.width, E?.height, e.scrollHeight].join(":");
                            if (d < 4e3 && P !== s) {
                                s = P, C();
                                return
                            }
                            if (!v) {
                                v = !0, s = void 0, n?.(t), C();
                                return
                            }
                            for (let t of (x.disconnect(), clearTimeout(r), "u" > typeof Highlight && null != CSS.highlights ? (a = new Highlight(..._), CSS.highlights.set(rl, a)) : _.length > 0 && S.push(e), e.classList.add(ro), (0, ti.e)() && e.classList.add(rs), S)) t.classList.add(ro, ri), b.add(t);
                            r = setTimeout(w, 3600)
                        }
                        return x.observe(e, {
                            childList: !0,
                            characterData: !0,
                            attributes: !0,
                            subtree: !0
                        }), I(), w
                    }(e, F, j, R ? "phrase" : "terms", Number(P.get("selectedTextOccurrence"))) : void 0;
                    return null != M && (P.delete("messageId"), P.delete("message"), P.delete("historySearchQuery"), P.delete("selectedTextQuery"), P.delete("selectedTextOccurrence"), E({
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
                                messageId: M
                            }
                        }
                    })), t
                });
            f[5] !== y || f[6] !== x || f[7] !== k || f[8] !== z || f[9] !== C || f[10] !== N ? (a = () => {
                if (L.current.key !== z && (L.current = {
                        key: z,
                        handled: !1,
                        positioned: !1
                    }), null != k && !x && N) return C.watch(e => {
                    !L.current.handled && (0, tg.Sb)(e, y, k) && (L.current.handled = !0)
                })
            }, o = [y, x, k, z, C, N], f[5] = y, f[6] = x, f[7] = k, f[8] = z, f[9] = C, f[10] = N, f[11] = a, f[12] = o) : (a = f[11], o = f[12]), (0, m.useLayoutEffect)(a, o), f[13] !== b || f[14] !== k ? (s = null == k ? void 0 : b.find(e => {
                let {
                    turn: t
                } = e;
                return t.messageIds.includes(k)
            }), f[13] = b, f[14] = k, f[15] = s) : s = f[15];
            let D = s;
            f[16] !== T || f[17] !== E || f[18] !== M || f[19] !== A ? (i = () => {
                null == M && null != A && E(T, {
                    replace: !0,
                    preventScrollReset: !0,
                    state: {
                        ...T.state,
                        chatGptSearchNavigation: void 0
                    }
                })
            }, f[16] = T, f[17] = E, f[18] = M, f[19] = A, f[20] = i) : i = f[20];
            let G = (0, m.useEffectEvent)(i);
            if (f[21] !== G || f[22] !== I || f[23] !== x || f[24] !== D ? (l = () => {
                    !L.current.positioned || null != D || x || I || G()
                }, f[21] = G, f[22] = I, f[23] = x, f[24] = D, f[25] = l) : l = f[25], f[26] !== I || f[27] !== x || f[28] !== D ? (c = [I, x, D], f[26] = I, f[27] = x, f[28] = D, f[29] = c) : c = f[29], (0, m.useLayoutEffect)(l, c), f[30] !== k || f[31] !== D?.id || f[32] !== D?.turn || f[33] !== D?.turn.items || f[34] !== D?.turn.items.findIndex || f[35] !== D?.turnKey) {
                let e = D?.turn.items.findIndex(e => "messageId" in e && e.messageId === k || "assistant-message" === e.type && null != k && e.sourceMessageIds?.includes(k)) ?? -1,
                    t = D?.turn.items[e],
                    n = D?.id;
                h = D?.turnKey, u = null == t || null == n ? void 0 : (0, re.b)(t, e, n), f[30] = k, f[31] = D?.id, f[32] = D?.turn, f[33] = D?.turn.items, f[34] = D?.turn.items.findIndex, f[35] = D?.turnKey, f[36] = u, f[37] = h
            } else u = f[36], h = f[37];
            let H = u;
            return f[38] !== B || f[39] !== k || f[40] !== h || f[41] !== w || f[42] !== H ? (p = () => {
                let e;
                if (null == h || null == w) return;
                let t = new AbortController,
                    n = null;
                return w.scrollToKey(h, e => n = (null == k ? null : e.querySelector(`[data-chatgpt-search-message-ids~="${CSS.escape(k)}"]`)) ?? (null == H ? null : e.querySelector(`[data-chatgpt-search-unit-key="${CSS.escape(H)}"]`)) ?? e, {
                    align: "top",
                    signal: t.signal
                }).then(() => {
                    !t.signal.aborted && n?.isConnected && (e = B(n))
                }), () => {
                    t.abort(), e?.()
                }
            }, f[38] = B, f[39] = k, f[40] = h, f[41] = w, f[42] = H, f[43] = p) : p = f[43], f[44] !== k || f[45] !== z || f[46] !== h || f[47] !== w || f[48] !== H ? (g = [z, k, h, w, H], f[44] = k, f[45] = z, f[46] = h, f[47] = w, f[48] = H, f[49] = g) : g = f[49], (0, m.useLayoutEffect)(p, g), null
        }
        var rg = n("ESlL"),
            rm = n("Ppno"),
            rf = n("lA5q"),
            rv = n("wDWo"),
            ry = n("IgxH"),
            rb = n("iaTG"),
            rx = n("c3f5"),
            rw = n("XpUB"),
            rC = n("xAIC"),
            rI = n("RKko"),
            r_ = n("S1aY"),
            rS = n("Sd8U"),
            rj = n("XsXa");
        let rT = (0, d.t)("ChatGptTranscriptScope", {
                parent: rS.a,
                key: e => e.presentation
            }),
            rE = (0, d.j)(rT, e => (0, rj.a)());
        var rP = n("nMiI"),
            rM = n("jmBh"),
            rA = n("OqvL"),
            rk = n("Ymkf"),
            rR = n("RADZ"),
            rO = n("rZzh"),
            rN = n("Y5Sy"),
            rF = n("Fwmi"),
            rz = n("ufr5"),
            rL = n("fwnP"),
            rB = n("p0Ph"),
            rD = n("yloD");
        let rG = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t, a = n(k.d, e)?.stoppedResponse;
            if (null == a || "idle" !== n(rL.O, e) || n(rL.o, e) !== a.leafId) return null;
            let r = a.originalSend;
            return {
                promptMessageId: a.promptMessageId,
                canResume: !n(rN.a) && null != a.settings && (null != r && (!r.checkDelivery || null != n(rL.b, e) && rH(n, e, a.promptMessageId)) || rq(n, e, a))
            }
        }, {
            isEqual: (e, t) => e?.promptMessageId === t?.promptMessageId && e?.canResume === t?.canResume
        });

        function rH(e, t, n) {
            let a = (0, tp.d)(e, t);
            return e(rB.x, a)[n]?.isOptimistic === !0
        }

        function rq(e, t, n) {
            let a = e(rO.c, (0, tD.d)(t));
            return null != e(rL.b, t) && !a.hasCanvas && !a.hasPendingApproval && a.activeMessageIds?.has(n.promptMessageId) === !0
        }
        var rW = n("adck");

        function rK(e) {
            let t, n, o, s, i, l, c, u, h, p, g, m, f = (0, r.c)(74),
                {
                    activityDisclosures: v,
                    entry: y,
                    renderMcpApps: b,
                    threadTranscript: x,
                    trackShownImpressions: w
                } = e,
                C = void 0 === b || b,
                I = void 0 === w || w,
                _ = (0, d.y)(eT.a),
                S = (0, rM.a)(void 0 !== x && x);
            f[0] !== y.conversationId ? (t = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: y.conversationId
            }), f[0] = y.conversationId, f[1] = t) : t = f[1];
            let j = (0, d.x)(I ? ee.c : null, t),
                T = I && null == j,
                E = (0, d.x)(y.isMostRecentTurn ? rO.f : null, y.conversationId),
                P = (0, d.x)(!y.isMostRecentTurn || y.isWorkConversation || y.isReadOnly ? null : rG, y.conversationId);
            f[2] !== y.turn || f[3] !== P ? (n = null != P && y.turn.messageIds.includes(P.promptMessageId), f[2] = y.turn, f[3] = P, f[4] = n) : n = f[4];
            let M = n;
            f[5] !== y.timestampSeparatorAtMs ? (o = null == y.timestampSeparatorAtMs ? null : (0, a.jsx)(rP.b, {
                sentAtMs: y.timestampSeparatorAtMs
            }), f[5] = y.timestampSeparatorAtMs, f[6] = o) : o = f[6];
            let A = y.isReadOnly ? void 0 : y.turnKey,
                k = null != y.paragen;
            f[7] !== v || f[8] !== S || f[9] !== y.branchingMessageId || f[10] !== y.browserConversationId || f[11] !== y.conversationId || f[12] !== y.dilEditDisclosure || f[13] !== y.enableCloudBrowserActivity || f[14] !== y.errorMessage || f[15] !== y.feedbackEnabled || f[16] !== y.hasLaterSitesPreview || f[17] !== y.id || f[18] !== y.isMostRecentTurn || f[19] !== y.isReadOnly || f[20] !== y.isTemporaryChat || f[21] !== y.isWorkConversation || f[22] !== y.onEditUserMessage || f[23] !== y.onFork || f[24] !== y.onRegenerateResponse || f[25] !== y.pendingSubmissionAttachments || f[26] !== y.readAloudEnabled || f[27] !== y.referenceImageSuggestionActionInput || f[28] !== y.safetyReview || f[29] !== y.shareEnabled || f[30] !== y.showPendingLoadingMessage || f[31] !== y.showRequestUserInputStatus || f[32] !== y.turn || f[33] !== C || f[34] !== T || f[35] !== A || f[36] !== k ? (s = (0, a.jsx)(rk.a, {
                activityDisclosureTurnKey: A,
                activityDisclosures: v,
                dilEditDisclosure: y.dilEditDisclosure,
                browserConversationId: y.browserConversationId,
                conversationId: y.conversationId,
                enableCloudBrowserActivity: y.enableCloudBrowserActivity,
                branchingMessageId: y.branchingMessageId,
                hasLaterSitesPreview: y.hasLaterSitesPreview,
                hostId: ef.a,
                isMostRecentTurn: y.isMostRecentTurn,
                threadTranscript: S,
                pendingLoading: y.showPendingLoadingMessage,
                allowAwaitingResponse: y.showRequestUserInputStatus,
                responseError: y.errorMessage,
                isReadOnly: y.isReadOnly,
                isTemporaryChat: y.isTemporaryChat,
                isParagen: k,
                isWorkConversation: y.isWorkConversation,
                readAloudEnabled: y.readAloudEnabled,
                renderMcpApps: C,
                feedbackEnabled: y.feedbackEnabled,
                onEditUserMessage: y.onEditUserMessage,
                onFork: y.onFork,
                onRegenerateResponse: y.onRegenerateResponse,
                pendingSubmissionAttachments: y.pendingSubmissionAttachments,
                referenceImageSuggestionActionInput: y.referenceImageSuggestionActionInput,
                shareEnabled: y.shareEnabled,
                safetyReview: y.safetyReview,
                trackShownImpressions: T,
                turn: y.turn,
                turnId: y.id
            }), f[7] = v, f[8] = S, f[9] = y.branchingMessageId, f[10] = y.browserConversationId, f[11] = y.conversationId, f[12] = y.dilEditDisclosure, f[13] = y.enableCloudBrowserActivity, f[14] = y.errorMessage, f[15] = y.feedbackEnabled, f[16] = y.hasLaterSitesPreview, f[17] = y.id, f[18] = y.isMostRecentTurn, f[19] = y.isReadOnly, f[20] = y.isTemporaryChat, f[21] = y.isWorkConversation, f[22] = y.onEditUserMessage, f[23] = y.onFork, f[24] = y.onRegenerateResponse, f[25] = y.pendingSubmissionAttachments, f[26] = y.readAloudEnabled, f[27] = y.referenceImageSuggestionActionInput, f[28] = y.safetyReview, f[29] = y.shareEnabled, f[30] = y.showPendingLoadingMessage, f[31] = y.showRequestUserInputStatus, f[32] = y.turn, f[33] = C, f[34] = T, f[35] = A, f[36] = k, f[37] = s) : s = f[37], f[38] !== y.conversationId || f[39] !== y.feedbackEnabled || f[40] !== y.showLiveBioSafetyNotice ? (i = y.showLiveBioSafetyNotice && (0, a.jsx)(n$.a, {
                conversationId: y.conversationId,
                feedbackEnabled: y.feedbackEnabled,
                fallback: null
            }), f[38] = y.conversationId, f[39] = y.feedbackEnabled, f[40] = y.showLiveBioSafetyNotice, f[41] = i) : i = f[41], f[42] !== y.conversationId || f[43] !== y.isTemporaryChat || f[44] !== y.isWorkConversation || f[45] !== y.paragen || f[46] !== C || f[47] !== T ? (l = null == y.paragen ? null : (0, a.jsx)(rR.a, {
                renderMcpApps: C,
                comparison: y.paragen,
                conversationId: y.conversationId,
                hostId: ef.a,
                isTemporaryChat: y.isTemporaryChat,
                isWorkConversation: y.isWorkConversation,
                trackTaskViews: T
            }, y.paragen.promptMessageId), f[42] = y.conversationId, f[43] = y.isTemporaryChat, f[44] = y.isWorkConversation, f[45] = y.paragen, f[46] = C, f[47] = T, f[48] = l) : l = f[48], f[49] !== y.showSharedConversationPrivateDisclaimer ? (c = y.showSharedConversationPrivateDisclaimer ? (0, a.jsxs)("div", {
                className: "my-2 flex items-center justify-center gap-2 text-size-chat text-secondary select-none",
                children: [(0, a.jsx)(K.a, {
                    className: "shrink-0",
                    legacyIcon: rA.a,
                    asset16: rW.a,
                    legacyClassName: "icon-2xs",
                    "aria-hidden": !0
                }), (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.sharedConversation.privateMessagesDisclaimer",
                    defaultMessage: "Messages beyond this point are only visible to you"
                })]
            }) : null, f[49] = y.showSharedConversationPrivateDisclaimer, f[50] = c) : c = f[50], f[51] !== S || f[52] !== y || f[53] !== M || f[54] !== E || f[55] !== _ || f[56] !== T || f[57] !== P ? (u = y.isMostRecentTurn ? (0, a.jsx)(rg.a, {
                conversationId: y.conversationId,
                errorMessage: y.errorMessage,
                isWorkConversation: y.isWorkConversation,
                isStopped: M,
                isResumeDisabled: null == y.onRegenerateResponse,
                onResume: M && P.canResume ? () => {
                    y.onRegenerateResponse?.(P.promptMessageId, "resume")
                } : void 0,
                onRetry: null == y.onRegenerateResponse || null == E ? void 0 : async e => {
                    let t = _.get(rO.f, y.conversationId);
                    if (t?.message.id == null || t.isRetryDisabled) return;
                    let n = _.get(tg.X, y.conversationId)?.metadata?.errorCode;
                    (0, tR.d)(_.get(ec.c).logProductEvent, {
                        conversationId: _.get(tg.j, y.conversationId),
                        messageId: t.message.id,
                        useDefaultModel: t.useDefaultModel,
                        errorCode: n
                    }), await y.onRegenerateResponse?.(t.message.id, {
                        sourceEventTimeStamp: e,
                        source: "model_cap_exceeded" === n ? "rate_limit_retry" : "error_retry",
                        model: (0, rO.g)(t.message, _.get(e8.v, y.conversationId)),
                        useDefaultModel: t.useDefaultModel,
                        forceUseSearch: t.forceUseSearch
                    })
                },
                renderResponseStarting: !S,
                showPendingLoadingMessage: y.showPendingLoadingMessage,
                showRequestUserInputStatus: y.showRequestUserInputStatus,
                trackShownImpressions: T,
                useDefaultModel: E?.useDefaultModel,
                isRetryDisabled: E?.isRetryDisabled
            }) : null, f[51] = S, f[52] = y, f[53] = M, f[54] = E, f[55] = _, f[56] = T, f[57] = P, f[58] = u) : u = f[58], f[59] !== i || f[60] !== l || f[61] !== c || f[62] !== u || f[63] !== s ? (h = (0, a.jsxs)("div", {
                className: "flex flex-col gap-1.5",
                children: [s, i, l, c, u]
            }), f[59] = i, f[60] = l, f[61] = c, f[62] = u, f[63] = s, f[64] = h) : h = f[64], f[65] !== y.id || f[66] !== h || f[67] !== o ? (p = (0, a.jsxs)("div", {
                "data-content-search-turn-key": y.id,
                children: [o, h]
            }), f[65] = y.id, f[66] = h, f[67] = o, f[68] = p) : p = f[68];
            let R = p;
            return f[69] !== y.dilVisualSlotId ? (g = null != y.dilVisualSlotId && (0, a.jsx)("div", {
                "data-dil-anchor-spacer": "",
                "aria-hidden": "true"
            }), f[69] = y.dilVisualSlotId, f[70] = g) : g = f[70], f[71] !== R || f[72] !== g ? (m = (0, a.jsxs)(a.Fragment, {
                children: [g, R]
            }), f[71] = R, f[72] = g, f[73] = m) : m = f[73], m
        }

        function rV(e) {
            let t, n, o, s, i = (0, r.c)(11);
            i[0] !== e ? ({
                renderMcpApps: n,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]);
            let l = void 0 === n || n,
                c = (0, d.y)(rT),
                u = "main" === c.value.presentation;
            i[3] !== t || i[4] !== c ? (o = c.value.preserveActivityDisclosures && !t.entry.isReadOnly ? c.get(rE, null) : void 0, i[3] = t, i[4] = c, i[5] = o) : o = i[5];
            let h = l && c.value.rendersWidgets;
            return i[6] !== t || i[7] !== u || i[8] !== o || i[9] !== h ? (s = (0, a.jsx)(rK, {
                ...t,
                threadTranscript: u,
                activityDisclosures: o,
                renderMcpApps: h
            }), i[6] = t, i[7] = u, i[8] = o, i[9] = h, i[10] = s) : s = i[10], s
        }

        function rU(e) {
            let t, n, o, s, i, l, c, u = (0, r.c)(17),
                {
                    entries: h,
                    historyLoader: p,
                    isVisible: g,
                    rendersWidgets: f,
                    onVisibilityChange: v
                } = e;
            u[0] !== g || u[1] !== v ? (t = () => (v(g), () => v(!1)), n = [g, v], u[0] = g, u[1] = v, u[2] = t, u[3] = n) : (t = u[2], n = u[3]), (0, m.useLayoutEffect)(t, n), u[4] !== f ? (o = {
                presentation: "floating",
                rendersWidgets: f
            }, u[4] = f, u[5] = o) : o = u[5];
            let y = g ? p : null;
            return u[6] !== h ? (s = (0, a.jsx)(r_.a, {
                mode: "virtualized",
                rows: h,
                ...rI.g,
                getRowBoundary: tr.d,
                preserveMeasuredTurnViewport: !0,
                renderRow: rQ
            }), u[6] = h, u[7] = s) : s = u[7], u[8] !== y || u[9] !== s ? (i = (0, a.jsx)(t$.a, {
                value: null,
                children: (0, a.jsxs)(aM.a, {
                    value: null,
                    children: [y, s]
                })
            }), u[8] = y, u[9] = s, u[10] = i) : i = u[10], u[11] !== g || u[12] !== i ? (l = (0, a.jsx)(a5.a, {
                active: g,
                presentation: "panel",
                children: i
            }), u[11] = g, u[12] = i, u[13] = l) : l = u[13], u[14] !== o || u[15] !== l ? (c = (0, a.jsx)(d.b, {
                scope: rT,
                value: o,
                children: l
            }), u[14] = o, u[15] = l, u[16] = c) : c = u[16], c
        }

        function rQ(e) {
            let t, n = (0, r.c)(2),
                {
                    entry: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsx)(rV, {
                entry: {
                    ...o,
                    onEditUserMessage: void 0,
                    onFork: void 0,
                    readAloudEnabled: !1
                },
                trackShownImpressions: !1
            }), n[0] = o, n[1] = t) : t = n[1], t
        }
        var r$ = n("qZWE"),
            rY = n("IBS2"),
            rJ = n("V8uZ"),
            rX = n("PC5z"),
            rZ = n("lZ4W"),
            r0 = n("ihvi"),
            r1 = n("l8ju"),
            r2 = n("jCHb"),
            r3 = n("nMdB"),
            r4 = n("KFm7"),
            r5 = n("uYx2"),
            r6 = "pending-fxATqK";
        let r8 = "[data-d-component]:not([data-d-text-flow])";
        class r7 extends m.Component {
            static contextType = n1.a;
            held = null;
            presented = this.props;
            userMotion;
            revealMotion;
            revealed = !1;
            keepVisualFixed = !1;
            resumePlacement;
            stopLayoutCorrection;
            pendingVisual;
            textObserver;
            unsubscribe;
            clearPendingPulse() {
                this.pendingVisual?.classList.remove(r6), this.pendingVisual = void 0
            }
            releaseViewport = () => {
                this.revealMotion?.stop(), this.revealMotion = void 0, this.held = null, this.resumePlacement = void 0, this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0
            };
            releaseHold = () => {
                this.releaseViewport(), this.clearPendingPulse(), this.textObserver?.disconnect(), this.textObserver = void 0, this.userMotion?.cancel(), this.userMotion = void 0
            };
            componentDidMount() {
                this.unsubscribe = this.props.scrollController.addUserScrollListener(() => {
                    this.releaseViewport()
                })
            }
            componentWillUnmount() {
                this.releaseHold(), this.unsubscribe?.()
            }
            holdForResponse = e => (this.keepVisualFixed = !0 === this.props.keepVisualFixedOnFollowup, !this.held && this.props.active && (this.held = this.capture()), !!this.held && (this.pendingVisual = this.held.element, this.resumePlacement = e, this.props.scrollController.holdViewport(), !0));
            releaseForHistoryToggle = () => {
                this.releaseHold()
            };
            releaseForUserScrollIntent = e => {
                this.held && (null == e || e()) && this.releaseViewport()
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
                return null == t ? null : e.querySelector(`[data-turn-key="${CSS.escape(t)}"] [data-user-message-bubble]`)
            }
            revealRequest(e) {
                if (this.keepVisualFixed || this.props.active || !this.props.replyPending || this.revealed) return;
                let t = this.requestingBubble(e.scrollElement);
                if (!t) return;
                let n = t.getBoundingClientRect();
                if (0 === n.height) return;
                this.revealed = !0;
                let a = e.scrollElement.getBoundingClientRect(),
                    r = a.bottom - (0, r4.c)(e.scrollElement) * this.context,
                    o = Math.min(n.bottom - r, n.top - a.top);
                if (o < 1) return;
                let s = e.top - o;
                if (this.props.reducedMotion) {
                    e.top = s, this.restore(e);
                    return
                }
                this.stopLayoutCorrection?.(), this.stopLayoutCorrection = void 0, this.revealMotion = (0, r2.a)(e.top, s, {
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
                return e.active && e.exchangeKey !== this.props.exchangeKey && (this.revealed = !1, this.stopLayoutCorrection?.(), this.userMotion?.cancel(), this.held || this.pendingVisual || (this.keepVisualFixed = !0 === this.props.keepVisualFixedOnFollowup, this.held = this.capture()), this.pendingVisual = this.pendingVisual ?? this.held?.element, this.held || (this.resumePlacement = void 0)), this.held
            }
            observeStreamingDilText() {
                let {
                    streamingDilFinalId: e,
                    exchangeKey: t
                } = this.props, n = this.pendingVisual ? this.props.scrollController.getScrollElement() : null;
                if (this.textObserver || !n || !e || !t) return;
                let a = `[data-dil-source-message-id="${CSS.escape(e)}"]`,
                    r = null,
                    o = () => {
                        let e = n.querySelector(a);
                        e && e !== r && (r = e, this.textObserver?.disconnect(), this.textObserver?.observe(e, {
                            subtree: !0,
                            childList: !0,
                            characterData: !0
                        }));
                        let o = e?.querySelector("[data-d-component]");
                        if (!o?.textContent?.trim() || !o.getClientRects().length) return;
                        let s = this.resumePlacement;
                        this.releaseHold(), s?.(t)
                    };
                this.textObserver = new MutationObserver(o), this.textObserver.observe(n, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                }), o()
            }
            componentDidUpdate(e, t, n) {
                if ((e.streamingDilFinalId !== this.props.streamingDilFinalId || e.exchangeKey !== this.props.exchangeKey) && (this.textObserver?.disconnect(), this.textObserver = void 0), "function" == typeof n ? null != this.props.exchangeKey && n(this.props.exchangeKey) : (this.restore(n), n && this.revealRequest(n)), !this.props.active && this.props.replyPending && !this.props.hasStreamingFinalText && (!0 === this.props.patchIntent || void 0 === this.props.patchIntent && this.pendingVisual)) {
                    let e = this.pendingVisual ?? this.held?.element ?? this.capture()?.element;
                    e && (this.pendingVisual = e, e.classList.add(r6))
                }
                if (this.props.active || this.observeStreamingDilText(), this.props.active && e.visualOwnerId !== this.props.visualOwnerId && (this.revealMotion?.stop(), this.revealMotion = void 0, this.resumePlacement = void 0), this.shouldAnimateFold()) {
                    if (!this.userMotion) {
                        let e = this.props.scrollController.getScrollElement(),
                            t = e && this.requestingBubble(e);
                        t ? (this.userMotion = t.animate([{
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
                return null != this.pendingVisual && !this.props.reducedMotion && this.props.active && this.presented.visualId === this.props.visualId && this.presented.exchangeKey === this.props.exchangeKey && this.presented.visualOwnerId !== this.props.visualOwnerId
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
                let a = () => (0, n1.b)(e.body.getBoundingClientRect().top - e.top, this.context),
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
                    this.held && r > 0 && this.props.ensureScrollRoomForAnchor?.(r), n.holdViewport(), n.compensateScrollToDistanceFromBottomPx(Math.max(0, (0, r5.b)(e.scrollElement) - r)), t && (this.stopLayoutCorrection?.(), this.stopLayoutCorrection = (0, r3.a)(e.body, this.context))
                }
            }
            render() {
                return this.shouldAnimateFold() ? this.presented.children : this.props.children
            }
        }
        var r9 = n("aRto"),
            oe = n("WWSI"),
            ot = n("U3Gy"),
            on = n("mKTJ");
        let oa = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(r$.m)
            }, {
                isEqual: tx()
            }),
            or = (0, d.c)(em.a, e => {
                let {
                    get: t
                } = e;
                return t(rX.i)
            }, {
                isEqual: (e, t) => e.length === t.length && e.every((e, n) => e.messageId === t[n]?.messageId && e.turnId === t[n]?.turnId)
            });

        function oo(e) {
            let t, n, o, s, i, l, c, u, h, p, g, f, y, b = (0, r.c)(55),
                {
                    conversationId: x,
                    entries: w,
                    viewportRef: C,
                    isTurnActive: I,
                    isInlinePreview: _,
                    readingPosition: S,
                    onVisibleContentReady: j,
                    hasVisibleContent: T,
                    responseSpacerState: E
                } = e,
                P = (0, d.z)(S.restoreState$),
                {
                    sharedConversationId: M
                } = (0, v.cb)(),
                A = (0, d.z)(null != M && "u" > typeof Element && "function" != typeof Element.prototype.moveBefore ? oa : null),
                k = (0, d.z)(or),
                R = (0, a9.b)(),
                O = (0, m.useContext)(rY.a);
            b[0] !== O || b[1] !== _ || b[2] !== S || b[3] !== R ? (t = () => {
                if (null != O && !_) return O(() => S.captureBeforeHide(R))
            }, n = [O, _, S, R], b[0] = O, b[1] = _, b[2] = S, b[3] = R, b[4] = t, b[5] = n) : (t = b[4], n = b[5]), (0, m.useLayoutEffect)(t, n), b[6] !== S || b[7] !== R ? (o = () => S.restoreReadingPosition(R), b[6] = S, b[7] = R, b[8] = o) : o = b[8];
            let N = (0, eq.a)(o),
                F = w.findLastIndex(od),
                z = w[F]?.dilVisualSlotId,
                L = (0, a1.a)(null != z),
                [B, D] = (0, m.useState)(oc);
            b[9] === Symbol.for("react.memo_cache_sentinel") ? (s = new Map, b[9] = s) : s = b[9];
            let G = (0, m.useRef)(s);
            b[10] === Symbol.for("react.memo_cache_sentinel") ? (i = () => {
                let e = G.current;
                return () => e.forEach(ol)
            }, l = [], b[10] = i, b[11] = l) : (i = b[10], l = b[11]), (0, m.useEffect)(i, l), b[12] !== L || b[13] !== C || b[14] !== B ? (c = (e, t) => {
                C.current?.releaseForHistoryToggle();
                let n = B.get(e),
                    a = n?.count !== t || "closing" === n.phase,
                    r = G.current;
                window.clearTimeout(r.get(e)), r.delete(e);
                let o = n => D(a => {
                    let r = new Map(a);
                    return null != n ? r.set(e, {
                        count: t,
                        phase: n
                    }) : r.delete(e), r
                });
                L ? o(a ? "open" : null) : (o(a ? "opening" : "closing"), r.set(e, window.setTimeout(() => {
                    r.delete(e), o(a ? "open" : null)
                }, 150)))
            }, b[12] = L, b[13] = C, b[14] = B, b[15] = c) : c = b[15];
            let H = function(e, t, n) {
                    if (!e.some(e => null != e.dilEditRequests)) return e;
                    let a = new Set;
                    return e.flatMap(e => {
                        let r, o = e.dilEditRequests;
                        if (!o || e.dilVisualSlotId) return [e];
                        let s = !1,
                            i = e.turn.items.flatMap(e => {
                                if ("user-message" !== e.type || !e.messageId) return [e];
                                let i = o.get(e.messageId);
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
                                else if (null == c && a.has(i.slotId)) return s = !0, [];
                                return null != c ? (s = !0, [{
                                    ...e,
                                    dilEditPhase: c,
                                    dilEditPreview: i.preview
                                }]) : [e]
                            });
                        return s ? i.length ? [{
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
                }(w, B, (0, eq.a)(c)),
                q = w[F]?.turn.items[0],
                W = w.findLastIndex(ou),
                K = w[W],
                V = (0, d.x)(r1.a, x),
                U = K?.turn.items.find(oi),
                Q = F > W;
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
            let $ = k.flatMap(u),
                Y = (0, m.useContext)(r9.a),
                J = w.at(-1),
                X = I || J?.turn.status === "in_progress";
            if (Y?.aboveComposer != null && null != J && $.push(J.turnKey), null != M && A?.size)
                for (let e of w) e.turn.items.flatMap(os).some(e => "chatgpt-hosted-widget" === e.type && (0, on.i)(e) && A.has((0, on.e)(M, e.messageId))) && $.push(e.turnKey);
            let Z = null == z ? void 0 : H.find(e => e.dilEditDisclosure?.slotId === z);
            Z && $.push(Z.turnKey, w[F].turnKey);
            let ee = Q ? Z : void 0;
            null != K && (E?.voiceAutoScrollEnabled || !Q && X) && $.push(K.turnKey);
            let et = (0, d.x)(r0.b, x),
                en = null == et ? void 0 : w.findLast(e => {
                    let {
                        turn: t
                    } = e;
                    return t.messageIds.includes(et)
                }),
                ea = null == en ? void 0 : (0, r0.a)(en.turn.items);
            (0, d.x)(rZ.a, null == ea ? null : {
                conversationId: x,
                userMessageId: ea,
                steeredPromptId: en === J ? et : void 0
            }) && null != en && $.push(en.turnKey);
            let er = (0, d.x)(ot.b, x),
                eo = (0, oe.a)(H, er, x);
            null != V && U?.messageId, (0, d.z)(!1);
            let es = (0, d.z)(!1),
                ei = K?.turnKey,
                el = q?.type === "assistant-message" ? q.messageId : void 0,
                ec, ed = E?.ensureScrollRoomForAnchor,
                eu = J?.hasStreamingFinalText === !0,
                eh = J?.streamingDilFinalId,
                ep = !_ && !1 === T && eo.length > 0,
                eg = E?.getHeightPx,
                em = ee?.turnKey,
                ef = ee?.dilEditDisclosure?.count,
                ev = ee?.turnKey ?? K?.turnKey;
            b[18] !== E || b[19] !== C ? (h = (e, t) => {
                E?.onTurnLayoutReady(e, t), C.current?.restoreAfterMeasurement()
            }, b[18] = E, b[19] = C, b[20] = h) : h = b[20], b[21] !== E ? (p = e => {
                let {
                    heightDeltaPx: t
                } = e;
                E?.consumeGrowth(t ?? 0)
            }, b[21] = E, b[22] = p) : p = b[22];
            let ey = null == O || _ ? void 0 : S.onRestoreStateChange;
            return b[23] !== P || b[24] !== j || b[25] !== S.onApiChange || b[26] !== N || b[27] !== $ || b[28] !== eg || b[29] !== em || b[30] !== ef || b[31] !== ev || b[32] !== h || b[33] !== p || b[34] !== ey || b[35] !== eo ? (g = (0, a.jsx)(r_.a, {
                mode: "virtualized",
                rows: eo,
                ...rI.g,
                getRowBoundary: tr.d,
                compactUserPrompts: !0,
                getBottomScrollPaddingPx: eg,
                synchronousMeasurementTurnKey: em,
                latestTurnSynchronousMeasurementKey: ef,
                layoutReadyTurnKey: ev,
                onTurnLayoutReady: h,
                onLatestTurnHeightChange: p,
                initialRestoreState: P,
                onRestoreStateChange: ey,
                onApiChange: S.onApiChange,
                restoreScrollDistanceFromBottomPx: N,
                onVisibleContentReady: j,
                preserveMeasuredTurnViewport: !0,
                retainedTurnKeys: $,
                renderRow: rV
            }), b[23] = P, b[24] = j, b[25] = S.onApiChange, b[26] = N, b[27] = $, b[28] = eg, b[29] = em, b[30] = ef, b[31] = ev, b[32] = h, b[33] = p, b[34] = ey, b[35] = eo, b[36] = g) : g = b[36], b[37] !== ep || b[38] !== g ? (f = (0, a.jsx)(te.c, {
                status: "chatgpt",
                waiting: ep,
                children: g
            }), b[37] = ep, b[38] = g, b[39] = f) : f = b[39], b[40] !== Q || b[41] !== es || b[42] !== L || b[43] !== X || b[44] !== R || b[45] !== ei || b[46] !== el || b[47] !== ec || b[48] !== ed || b[49] !== eu || b[50] !== eh || b[51] !== f || b[52] !== C || b[53] !== z ? (y = (0, a.jsx)(r7, {
                ref: C,
                exchangeKey: ei,
                visualId: z,
                visualOwnerId: el,
                patchIntent: ec,
                active: Q,
                keepVisualFixedOnFollowup: es,
                ensureScrollRoomForAnchor: ed,
                hasStreamingFinalText: eu,
                streamingDilFinalId: eh,
                replyPending: X,
                reducedMotion: L,
                scrollController: R,
                children: f
            }), b[40] = Q, b[41] = es, b[42] = L, b[43] = X, b[44] = R, b[45] = ei, b[46] = el, b[47] = ec, b[48] = ed, b[49] = eu, b[50] = eh, b[51] = f, b[52] = C, b[53] = z, b[54] = y) : y = b[54], y
        }

        function os(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }

        function oi(e) {
            return "user-message" === e.type
        }

        function ol(e) {
            return window.clearTimeout(e)
        }

        function oc() {
            return new Map
        }

        function od(e) {
            return null != e.dilVisualSlotId
        }

        function ou(e) {
            return e.turn.items.some(e => "user-message" === e.type)
        }
        var oh = n("Ipgw"),
            op = n("SBcL");

        function og(e) {
            let t, n, o, s, i = (0, r.c)(18),
                {
                    conversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, f.a)(),
                h = (0, eG.a)(),
                p = (0, d.x)(tg.cb, l),
                g = (0, d.x)(tg.fb, l),
                v = (0, d.x)(tg.w, l),
                y = (0, d.x)(tg.eb, l),
                b = (0, m.useRef)(null),
                x = (0, m.useRef)(null);
            i[0] !== v || i[1] !== l || i[2] !== u || i[3] !== g || i[4] !== c || i[5] !== p || i[6] !== y ? (t = () => {
                let e = b.current;
                if (null == e) return;
                let t = x.current;
                if ((0, tg.Db)(p)) {
                    e.textContent = "", x.current = {
                        conversationId: l,
                        requestId: g ?? ("active-async-turn" === p || "active-tpp-turn" === p ? v?.requestId : null) ?? (t?.conversationId === l ? t.requestId : null)
                    };
                    return
                }
                y || (x.current = null, t?.conversationId === l && "idle" === p && v?.result === "completed" && v.requestId === t.requestId && null == c.get(tg.D, l) && (e.textContent = u.formatMessage({
                    id: "chatgptConversations.responseComplete",
                    defaultMessage: "Response complete"
                })))
            }, i[0] = v, i[1] = l, i[2] = u, i[3] = g, i[4] = c, i[5] = p, i[6] = y, i[7] = t) : t = i[7];
            let w = (0, m.useEffectEvent)(t);
            return (i[8] !== w ? (n = () => {
                w()
            }, i[8] = w, i[9] = n) : n = i[9], i[10] !== v || i[11] !== l || i[12] !== h || i[13] !== g || i[14] !== p || i[15] !== y ? (o = [l, p, g, v, y, h], i[10] = v, i[11] = l, i[12] = h, i[13] = g, i[14] = p, i[15] = y, i[16] = o) : o = i[16], (0, m.useEffect)(n, o), h) ? (i[17] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, n0.createPortal)((0, a.jsx)("span", {
                ref: b,
                className: "sr-only select-none",
                "aria-atomic": "true",
                "aria-live": "polite",
                role: "status"
            }), document.body), i[17] = s) : s = i[17], s) : null
        }
        var om = n("XtQP"),
            of = n("JlMc"),
            ov = n("TUMj"),
            oy = n("pgeU");
        let ob = (0, td.a)(async () => (await Promise.all([n.e(747352), n.e(94193)]).then(n.bind(n, "FKl5"))).ClientDelightPresentation);

        function ox(e) {
            let t, n, o, s = (0, r.c)(7),
                {
                    conversationId: i
                } = e,
                l = (0, d.y)(eT.a),
                c = (0, d.x)(oy.a, i);
            return s[0] !== i || s[1] !== l ? (t = () => {
                let e = () => {
                        let e = l.get(oy.a, i);
                        null != e && (0, oy.b)(l, i, e, "hidden_or_unmounted")
                    },
                    t = () => {
                        "visible" !== document.visibilityState && e()
                    };
                return document.addEventListener("visibilitychange", t), window.addEventListener("pagehide", e), () => {
                    document.removeEventListener("visibilitychange", t), window.removeEventListener("pagehide", e), e()
                }
            }, n = [i, l], s[0] = i, s[1] = l, s[2] = t, s[3] = n) : (t = s[2], n = s[3]), (0, m.useEffect)(t, n), s[4] !== i || s[5] !== c ? (o = null == c ? null : (0, a.jsx)(ob, {
                conversationId: i,
                effect: c
            }, c.id), s[4] = i, s[5] = c, s[6] = o) : o = s[6], o
        }
        var ow = n("ZU27"),
            oC = n("Pyg2"),
            oI = n("ZIh4"),
            o_ = n("nKJ6"),
            oS = n("AoaR"),
            oj = n("fDfx"),
            oT = n("Xslx"),
            oE = n("EEop"),
            oP = n("bxvp"),
            oM = n("VBQS"),
            oA = n("hsIu");
        let ok = (0, d.d)(eT.a, (e, t) => {
            let {
                get: n
            } = t;
            if (null == e || !n(oP.c) || null == n(j.f) || null == n(j.k)) return null;
            let {
                data: a,
                isError: r
            } = n(oA.b);
            if (r || a?.project_id !== e) return null;
            let {
                data: o,
                isError: s
            } = n(oE.l, (0, oM.a)());
            return s ? null : (0, oM.b)(o)
        });
        var oR = n("FmJi"),
            oO = n("sIex"),
            oN = n("Z2JT"),
            oF = n("Fjd0"),
            oz = n("VPBa"),
            oL = n("PWXi"),
            oB = n("HgLj"),
            oD = n("ssKV"),
            oG = n("f6KK"),
            oH = n("JPXZ"),
            oq = n("zWHk");

        function oW(e) {
            let t, n, a, o, s, i, l, c = (0, r.c)(34),
                {
                    composerController: d,
                    enabled: u
                } = e,
                h = (0, v.X)(),
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
            return c[10] !== b || c[11] !== d || c[12] !== u || c[13] !== f || c[14] !== t ? (o = () => {
                if (!u && t && y.current !== f) return (0, oq.b)(d.view, (e, t) => {
                    e && t?.getMeta("addToHistory") !== !1 && d.consumeLocationPromptPrefill(f) && b(!1)
                })
            }, c[10] = b, c[11] = d, c[12] = u, c[13] = f, c[14] = t, c[15] = o) : o = c[15], c[16] !== d || c[17] !== u || c[18] !== f || c[19] !== t ? (s = [d, u, f, t], c[16] = d, c[17] = u, c[18] = f, c[19] = t, c[20] = s) : s = c[20], (0, m.useLayoutEffect)(o, s), c[21] !== b || c[22] !== d || c[23] !== u || c[24] !== f || c[25] !== t || c[26] !== g ? (i = () => {
                if (!u || !t || y.current === f) return;
                y.current = f;
                let e = d.consumeLocationPromptPrefill(f);
                if (b(e), !e) return;
                let {
                    view: n
                } = d, a = t.replace(/\r\n/g, "\n"), r = "codex-app" === g ? (0, oH.f)({
                    schema: n.state.schema,
                    text: a,
                    restoreOnlySitesAndPluginMentions: !0
                }) : (0, oH.e)({
                    schema: n.state.schema,
                    text: a
                }), o = n.state.tr.replaceWith(0, n.state.doc.content.size, r.content);
                o.setSelection(oG.h.atEnd(o.doc)), n.dispatch(o)
            }, c[21] = b, c[22] = d, c[23] = u, c[24] = f, c[25] = t, c[26] = g, c[27] = i) : i = c[27], c[28] !== d || c[29] !== u || c[30] !== f || c[31] !== t || c[32] !== g ? (l = [d, u, f, t, g], c[28] = d, c[29] = u, c[30] = f, c[31] = t, c[32] = g, c[33] = l) : l = c[33], (0, m.useLayoutEffect)(i, l), null
        }
        var oK = n("a4V1"),
            oV = n("KidQ");
        let oU = {
            addInitialContentToHistory: !0,
            enableCodeBlocks: !1,
            enableSelectedTextLinks: !1,
            enableFileMentions: !0,
            enableSkillMentions: !1,
            enableSlashCommands: {
                triggers: ["/"]
            }
        };

        function oQ(e) {
            let t, n, o, s, i, l = (0, r.c)(15),
                {
                    children: c,
                    draftKey: u,
                    enableInlineSystemHints: h
                } = e,
                p = (0, d.y)(eT.a),
                g = (0, m.useContext)(oO.a),
                f = h ? "chatgpt" : void 0;
            return l[0] !== h || l[1] !== f ? (t = {
                enableInlineSystemHints: h,
                variant: f
            }, l[0] = h, l[1] = f, l[2] = t) : t = l[2], l[3] !== u || l[4] !== p ? (n = () => ({
                defaultText: p.get(e8.u, u),
                defaultTextKind: "prompt"
            }), l[3] = u, l[4] = p, l[5] = n) : n = l[5], l[6] !== g ? (o = () => {
                let e = g?.input.current ?? document.querySelector("#pending-conversation-input");
                return null == e || null == g ? null : {
                    element: e,
                    locationKey: g.locationKey
                }
            }, l[6] = g, l[7] = o) : o = l[7], l[8] !== c ? (s = e => null == e ? null : c(e), l[8] = c, l[9] = s) : s = l[9], l[10] !== t || l[11] !== n || l[12] !== o || l[13] !== s ? (i = (0, a.jsx)(oV.a, {
                controllerOptions: oU,
                initialSuggestionOptions: t,
                getInitialContent: n,
                getInitialInput: o,
                children: s
            }), l[10] = t, l[11] = n, l[12] = o, l[13] = s, l[14] = i) : i = l[14], i
        }
        var o$ = n("wnpN"),
            oY = n("xhk1"),
            oJ = n("vpdG"),
            oX = n("V8xe"),
            oZ = n("pwjC"),
            o0 = n("uIyc"),
            o1 = n("MnjQ"),
            o2 = n("ZZJ2"),
            o3 = n("TBBz"),
            o4 = n("RVN2"),
            o5 = n("sWz1"),
            o6 = n("ZGrY");

        function o8(e) {
            let t, n, o, s, i, l, c, u, h = (0, r.c)(45),
                {
                    config: p,
                    controller: g,
                    conversationId: f,
                    draftKey: v
                } = e,
                y = (0, d.y)(rS.a),
                b = (0, d.y)(eg.a),
                {
                    getExperiment: x,
                    getLayer: w,
                    isLoading: C
                } = (0, eO.h)(),
                {
                    prompt: I,
                    enabled: _,
                    prediction: S,
                    claimPrompt: j,
                    registerDismissPrefill: T
                } = p,
                E = (0, m.useRef)(!1),
                P = (0, m.useRef)(null),
                M = (0, m.useRef)(null);
            h[0] !== f || h[1] !== b.value ? (t = (0, eg.h)(b.value) ?? f, h[0] = f, h[1] = b.value, h[2] = t) : t = h[2];
            let A = t;
            h[3] !== p || h[4] !== I ? (n = () => {
                E.current = !0, null != I && p.onPredictionRetired(I.sourceMessageId)
            }, h[3] = p, h[4] = I, h[5] = n) : n = h[5];
            let k = (0, m.useEffectEvent)(n);
            h[6] !== A || h[7] !== g || h[8] !== f || h[9] !== v || h[10] !== T || h[11] !== k || h[12] !== y ? (o = () => {
                let {
                    view: e
                } = g;
                M.current = null;
                let t = () => {
                        E.current = !0, P.current = null
                    },
                    n = () => {
                        let t = P.current;
                        null == t || t.document !== e.state.doc || e.composing || (P.current = null, e.isDestroyed || g.restoreDraft(""), y.get(e8.u, v) === t.persistedText && (0, e8._)(y, v, ""))
                    },
                    a = T(n),
                    r = () => {
                        t(), k()
                    },
                    o = (0, oq.b)(e, (e, n, a) => {
                        if (!e) return;
                        t();
                        let r = a && o3.c.getState(a)?.prediction;
                        null != r && "kind" in r && "receiver-followup" === r.kind && Object.is(n?.getMeta(o3.c), null) && k()
                    }),
                    s = y.watch(e => {
                        o7(e, f, v, A) && r()
                    }),
                    i = ["beforeinput", "paste", "drop", "compositionstart"];
                for (let n of i) e.dom.addEventListener(n, t, !0);
                return g.eventEmitter.addListener("submit", r), () => {
                    for (let n of (o(), s(), i)) e.dom.removeEventListener(n, t, !0);
                    g.eventEmitter.removeListener("submit", r), a(), M.current = n, queueMicrotask(() => {
                        M.current === n && (M.current = null, n())
                    })
                }
            }, h[6] = A, h[7] = g, h[8] = f, h[9] = v, h[10] = T, h[11] = k, h[12] = y, h[13] = o) : o = h[13], h[14] !== A || h[15] !== g || h[16] !== f || h[17] !== v || h[18] !== T || h[19] !== y ? (s = [g, y, f, v, A, T], h[14] = A, h[15] = g, h[16] = f, h[17] = v, h[18] = T, h[19] = y, h[20] = s) : s = h[20], (0, m.useLayoutEffect)(o, s), h[21] !== j || h[22] !== A || h[23] !== g || h[24] !== f || h[25] !== v || h[26] !== _ || h[27] !== x || h[28] !== w || h[29] !== C || h[30] !== I || h[31] !== y ? (i = () => {
                if (null == I || !_ || C || !g.view.editable) return;
                let e = j(I);
                if (null == e) return;
                if (E.current || !(0, o1.j)(g.view.state.doc) || g.dictation.isActive || g.view.composing || "" !== y.get(e8.u, v) || o7(y, f, v, A)) return void e({
                    mode: "unchanged"
                });
                let t = x("2610870849", {
                    disableExposureLog: !0
                }).__evaluation;
                if (t?.is_experiment_active !== !1 && t?.is_user_in_experiment !== !1) return void e({
                    mode: "defer"
                });
                let n = w("2401106165"),
                    a = n.get("logged_in_composer", "control");
                if ("prefill" !== a && "prediction" !== a) return void e({
                    mode: "unchanged"
                });
                let r = n.get("show_remaining_followups", !1);
                "prefill" === a && (g.setPromptText(I.text, {
                    format: "plain"
                }), P.current = {
                    document: g.view.state.doc,
                    persistedText: g.getPersistedText()
                }), e({
                    mode: a,
                    showRemaining: r
                })
            }, h[21] = j, h[22] = A, h[23] = g, h[24] = f, h[25] = v, h[26] = _, h[27] = x, h[28] = w, h[29] = C, h[30] = I, h[31] = y, h[32] = i) : i = h[32];
            let R = (0, m.useEffectEvent)(i);
            return h[33] !== R ? (l = () => {
                R()
            }, h[33] = R, h[34] = l) : l = h[34], h[35] !== g || h[36] !== _ || h[37] !== x || h[38] !== w || h[39] !== C || h[40] !== I ? (c = [g, _, x, w, C, I], h[35] = g, h[36] = _, h[37] = x, h[38] = w, h[39] = C, h[40] = I, h[41] = c) : c = h[41], (0, m.useLayoutEffect)(l, c), h[42] !== g || h[43] !== S ? (u = null != S ? (0, a.jsx)(o2.b, {
                controller: g,
                prediction: S,
                canShowPrediction: !0,
                hostId: ef.a,
                pluginHostId: ef.a
            }) : null, h[42] = g, h[43] = S, h[44] = u) : u = h[44], u
        }

        function o7(e, t, n, a) {
            return e.get(e8.h, t).length > 0 || e.get(e8.y, t).length > 0 || e.get(oZ.a, a).length > 0 || null != e.get(o5.a, t) || e.get(o6.c, n).length > 0 || null != e.get(o4.a) || e.get(o0.i) || (0, D.ab)(e, {
                ignoreModelContext: !0
            })
        }

        function o9(e) {
            let t, n, o, s = (0, r.c)(11),
                i = (0, m.useContext)(oO.a);
            if (null == i || i.conversationId !== e.conversationId) {
                let t;
                return s[0] !== e ? (t = (0, a.jsx)(se, {
                    ...e
                }), s[0] = e, s[1] = t) : t = s[1], t
            }
            s[2] !== e.conversationId || s[3] !== e.isImageEditComposer ? (t = e.isImageEditComposer ? {
                conversationId: e.conversationId,
                surface: "image-edit"
            } : e.conversationId, s[2] = e.conversationId, s[3] = e.isImageEditComposer, s[4] = t) : t = s[4];
            let l = !e.isWorkConversation;
            return s[5] !== e ? (n = t => (0, a.jsx)(se, {
                ...e,
                initialController: t
            }), s[5] = e, s[6] = n) : n = s[6], s[7] !== t || s[8] !== l || s[9] !== n ? (o = (0, a.jsx)(oQ, {
                draftKey: t,
                enableInlineSystemHints: l,
                children: n
            }), s[7] = t, s[8] = l, s[9] = n, s[10] = o) : o = s[10], o
        }

        function se(e) {
            let t, n, o, s, i, l, c, u, h, p, g, y, b, x, w, C, I, _, S, j, T = (0, r.c)(91),
                {
                    composerRef: E,
                    initialController: P,
                    ...M
                } = e,
                A = (0, d.y)(eg.a),
                k = (0, m.useContext)(a9.a),
                R = (0, d.x)(oI.d, M.isTemporaryChat),
                {
                    conversationId: O,
                    isFullscreenComposer: N
                } = M,
                F = (0, f.a)(),
                {
                    state: z
                } = (0, v.X)(),
                L = (0, d.x)(e9, O),
                B = (0, d.x)(tg.T, O),
                D = !(!M.disabled && !M.isSharedConversation && !M.isWorkConversation && !M.isTemporaryChat && !M.isImageEditComposer && (0, tz.a)(B)) ? null : B,
                G = (0, d.x)(null == M.requiredSystemHints ? ok : null, D);
            T[0] !== G || T[1] !== M.requiredSystemHints ? (t = M.requiredSystemHints ?? (null == G ? void 0 : [G]), T[0] = G, T[1] = M.requiredSystemHints, T[2] = t) : t = T[2];
            let H = t;
            T[3] !== G || T[4] !== O || T[5] !== A ? (n = () => {
                if (null != G) {
                    let e, t;
                    return e = (0, oT.b)(A, O, [G]), t = (0, oj.i)(A, {
                        draftKey: O,
                        isTemporaryChat: !1
                    }), () => {
                        if (e(), A.get(oT.a, O).includes(G)) return;
                        let n = A.get(e8.x, O).filter(e => e !== G && e !== `plugin:${oS.d}`);
                        (0, e8.Z)(A, O, n, t)
                    }
                }
            }, o = [A, O, G], T[3] = G, T[4] = O, T[5] = A, T[6] = n, T[7] = o) : (n = T[6], o = T[7]), (0, m.useEffect)(n, o);
            let q = (0, d.x)(eX.c, O);
            T[8] !== q || T[9] !== M.isSharedConversation || T[10] !== M.isWorkConversation || T[11] !== B ? (s = !M.isSharedConversation && !M.isWorkConversation && !(0, tz.a)(B) && !q, T[8] = q, T[9] = M.isSharedConversation, T[10] = M.isWorkConversation, T[11] = B, T[12] = s) : s = T[12];
            let W = s,
                K = W && !M.disabled && !M.isSubmitDisabled && !M.isImageEditComposer,
                V = W ? L : void 0;
            T[13] !== O || T[14] !== M.isImageEditComposer ? (i = M.isImageEditComposer ? {
                conversationId: O,
                surface: "image-edit"
            } : O, T[13] = O, T[14] = M.isImageEditComposer, T[15] = i) : i = T[15];
            let U = i;
            T[16] !== O || T[17] !== U || T[18] !== P ? (l = {
                composerController: P,
                conversationId: O,
                draftKey: U
            }, T[16] = O, T[17] = U, T[18] = P, T[19] = l) : l = T[19];
            let Q = (0, oJ.a)(l),
                $ = (0, oY.a)(Q, O, !M.isInlinePreview && !M.disabled, M.workspace && "tpp", V?.id ?? B),
                Y = (0, m.useContext)(oO.a),
                J = (0, m.useRef)(!1);
            T[20] !== U || T[21] !== Y || T[22] !== P || T[23] !== M.isTemporaryChat || T[24] !== A ? (c = e => {
                null == e || null == P || J.current || (J.current = !0, (0, e8._)(A, U, P.getPersistedText(), {
                    isTemporaryChat: M.isTemporaryChat
                }), Y?.onAdopt())
            }, T[20] = U, T[21] = Y, T[22] = P, T[23] = M.isTemporaryChat, T[24] = A, T[25] = c) : c = T[25];
            let X = (0, eq.a)(c);
            T[26] !== X || T[27] !== E ? (u = (0, oB.a)(E, X), T[26] = X, T[27] = E, T[28] = u) : u = T[28];
            let Z = u,
                ee = (0, m.useContext)(ov.a),
                et = (0, d.w)(oK.b, O),
                en = (0, d.x)(tg.gb, O),
                ea = (0, d.x)(tg.cb, O),
                er = (0, d.x)(e8.j, O);
            T[29] !== ea ? (h = (0, tg.Db)(ea), T[29] = ea, T[30] = h) : h = T[30];
            let eo = h,
                es = (0, d.z)(ow.l.activeTab$);
            if (T[31] !== es || T[32] !== N || T[33] !== eo || T[34] !== ee) {
                let e = ee?.turn.items.flatMap(sr);
                p = N && es?.tabType.kind === oz.a && "generatedImages" in es.props && null != es.props.generatedImages && !eo && null != ee && "in_progress" !== ee.turn.status && !ee.showPendingLoadingMessage && !e?.some(sa) && (null != ee.errorMessage || e?.some(sn)) ? ee.turn.messageIds.at(-1) ?? ee.turnKey : null, T[31] = es, T[32] = N, T[33] = eo, T[34] = ee, T[35] = p
            } else p = T[35];
            let ei = p,
                el = (0, m.useRef)(null);
            T[36] !== ei || T[37] !== A ? (g = () => {
                null != ei && ei !== el.current && (el.current = ei, A.set(oN.b, "expanded"))
            }, y = [ei, A], T[36] = ei, T[37] = A, T[38] = g, T[39] = y) : (g = T[38], y = T[39]), (0, m.useEffect)(g, y);
            let ec = (0, d.w)(o$.a, N ? O : null);
            T[40] !== G || T[41] !== D || T[42] !== Q || T[43] !== O || T[44] !== K || T[45] !== U || T[46] !== F || T[47] !== N || T[48] !== Z || T[49] !== $ || T[50] !== R || T[51] !== M || T[52] !== H || T[53] !== A || T[54] !== k || T[55] !== V || T[56] !== z?.libraryFileCreation || T[57] !== B ? (b = e => (0, a.jsxs)(oF.a, {
                children: [N && M.trackReadState && !e?.isHidden ? (0, a.jsx)(of.a, {
                    conversationId: O,
                    isTranscriptVisible: e?.isCompact === !1 && !e.isMinimized
                }) : null, M.aboveComposerContent, (0, a.jsx)(oR.a, {
                    children: (0, a.jsx)(oD.a, {
                        ref: Z,
                        trackShownImpressions: M.trackShownImpressions && !M.isHidden && !e?.isHidden && !e?.isMinimized,
                        headerContent: M.headerContent,
                        legacyImageSuggestionsEnabled: !M.disabled && !M.isSharedConversation && !M.isImageEditComposer,
                        allowBackgroundSubmit: M.isInlinePreview,
                        ...$,
                        disableAutoFocus: M.disableAutoFocus,
                        conversationOrigin: null == M.workspace ? void 0 : "tpp",
                        mcpAppContext: M.workspace?.mcpAppContext,
                        onServerThreadIdChange: M.workspace?.onServerThreadIdChange,
                        followupPortalTarget: M.followupPortalTarget,
                        takeoverDisclaimerRef: M.takeoverDisclaimerRef,
                        showConversationFollowups: M.showConversationFollowups,
                        autoPrepare: !M.isSubmitDisabled && !M.isSharedConversation,
                        browserConversationId: (0, o_.getThreadBrowserConversationId)(A) ?? O,
                        composerController: Q,
                        conversationId: O,
                        requiredSystemHints: H,
                        hideSystemHints: null != M.requiredSystemHints,
                        getSubmissionGuard: null != G ? () => () => A.get(tg.T, O) === B && A.get(ok, D) === G : void 0,
                        draftKey: U,
                        onPromptChange: R,
                        selectedCustomGpt: V,
                        targetGizmoId: V?.id,
                        onCustomGptChange: K ? e => {
                            A.set(e9, O, e)
                        } : void 0,
                        onCustomAgentSelected: K ? () => {
                            A.set(e9, O, null)
                        } : void 0,
                        disableDraftPrepare: M.isSubmitDisabled || M.isSharedConversation,
                        disableSubmit: M.disabled || M.isSubmitDisabled,
                        voiceInputDisabled: M.disabled,
                        aboveComposerHeaderContent: M.voiceDisclaimer,
                        getExtraDeveloperInstructions: !M.isInlinePreview && z?.libraryFileCreation && !M.isTemporaryChat ? st : void 0,
                        isTemporaryChat: M.isTemporaryChat,
                        placeholder: M.disabled && !1 !== M.readOnlyPlaceholder ? M.readOnlyPlaceholder ?? F.formatMessage(oX.a.readOnlyConversationPlaceholder) : void 0,
                        readOnly: M.disabled,
                        hideModelPicker: M.hideModelPicker,
                        ...(0, e8.M)(M),
                        showVoiceStage: M.showVoiceStage,
                        onSubmitAccepted: (t, n) => {
                            e?.onSubmitStart(), (!(!M.isWorkConversation && n?.isSteer === !0) || k?.shouldFollowContentGrowth()) && M.responseSpacerState?.place(), M.onSubmitAccepted?.(t)
                        },
                        onSubmitError: M.responseSpacerState?.clear
                    })
                })]
            }), T[40] = G, T[41] = D, T[42] = Q, T[43] = O, T[44] = K, T[45] = U, T[46] = F, T[47] = N, T[48] = Z, T[49] = $, T[50] = R, T[51] = M, T[52] = H, T[53] = A, T[54] = k, T[55] = V, T[56] = z?.libraryFileCreation, T[57] = B, T[58] = b) : b = T[58];
            let ed = b;
            T[59] !== A ? (x = () => {
                (0, aY.K)(A, "conversation")
            }, w = () => {
                (0, aY.K)(A, "conversation")
            }, T[59] = A, T[60] = x, T[61] = w) : (x = T[60], w = T[61]);
            let eu = !M.isInlinePreview && !M.disabled && !M.isSubmitDisabled;
            T[62] !== Q || T[63] !== eu ? (C = (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(oW, {
                    composerController: Q,
                    enabled: eu
                })
            }), T[62] = Q, T[63] = eu, T[64] = C) : C = T[64], T[65] !== Q || T[66] !== O || T[67] !== U || T[68] !== M.receiverComposer ? (I = null != M.receiverComposer ? (0, a.jsx)(o8, {
                config: M.receiverComposer,
                controller: Q,
                draftKey: U,
                conversationId: O
            }, M.receiverComposer.shareId) : null, T[65] = Q, T[66] = O, T[67] = U, T[68] = M.receiverComposer, T[69] = I) : I = T[69];
            let eh = N ? "floating" : "pane",
                ep = M.disabled || M.awaitingGptContinuation,
                em = null == ee && !eo,
                ef = !M.isInlinePreview && null == M.workspace,
                ev = er || eo ? "loading" : "idle";
            return T[70] !== ev ? (_ = {
                type: ev,
                unread: !1
            }, T[70] = ev, T[71] = _) : _ = T[71], T[72] !== ec || T[73] !== M.isHidden || T[74] !== M.renderTranscript || T[75] !== ed || T[76] !== et || T[77] !== eh || T[78] !== ep || T[79] !== em || T[80] !== ef || T[81] !== _ || T[82] !== en ? (S = (0, a.jsx)(oC.a, {
                notifications: ec,
                isHidden: M.isHidden,
                placement: eh,
                responsePreview: et,
                forceExpanded: ep,
                composerOnly: em,
                title: en,
                showConversationTitleMenu: ef,
                statusState: _,
                renderTranscript: M.renderTranscript,
                children: ed
            }), T[72] = ec, T[73] = M.isHidden, T[74] = M.renderTranscript, T[75] = ed, T[76] = et, T[77] = eh, T[78] = ep, T[79] = em, T[80] = ef, T[81] = _, T[82] = en, T[83] = S) : S = T[83], T[84] !== O || T[85] !== x || T[86] !== w || T[87] !== C || T[88] !== I || T[89] !== S ? (j = (0, a.jsxs)("div", {
                className: "contents",
                "data-map-composer-conversation": O,
                onMouseDownCapture: x,
                onFocusCapture: w,
                children: [C, I, S]
            }), T[84] = O, T[85] = x, T[86] = w, T[87] = C, T[88] = I, T[89] = S, T[90] = j) : j = T[90], j
        }

        function st() {
            return [oL.a]
        }

        function sn(e) {
            return "assistant-message" === e.type && "" !== e.content.trim()
        }

        function sa(e) {
            return "generated-image" === e.type || "chatgpt-delayed-image-gen" === e.type
        }

        function sr(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : [e]
        }
        var so = n("ygKd"),
            ss = n("KSir"),
            si = n("QPeR"),
            sl = n("M3Kf");

        function sc(e) {
            let t, n, o, s, l, c, u = (0, r.c)(21),
                {
                    conversationId: h
                } = e,
                p = (0, d.y)(eT.a),
                g = (0, d.x)(tg.j, h),
                m = (0, d.z)(aP.b),
                {
                    search: f
                } = (0, v.X)();
            if (u[0] !== f) {
                let e = new URLSearchParams(f);
                t = e.get("messageId") ?? e.get("message"), n = e.has("selectedTextQuery"), u[0] = f, u[1] = t, u[2] = n
            } else t = u[1], n = u[2];
            let y = n;
            u[3] !== y || u[4] !== t || u[5] !== g ? (o = ["chatgpt-message-target", g, t, y], u[3] = y, u[4] = t, u[5] = g, u[6] = o) : o = u[6];
            let b = null != g && null != t && m > 0,
                x = y ? 0 : 1 / 0;
            u[7] !== h || u[8] !== y || u[9] !== t || u[10] !== p || u[11] !== g ? (s = async e => {
                let {
                    signal: n
                } = e;
                if (null != g) {
                    if (null != t && y) {
                        let e = p.get(tg.N, h),
                            n = e?.[t] ?? (null == e ? void 0 : Object.values(e).find(e => e.message?.id === t));
                        if (n?.message != null) return !0
                    }
                    await (0, aE.a)(p, g, n)
                }
                return !0
            }, u[7] = h, u[8] = y, u[9] = t, u[10] = p, u[11] = g, u[12] = s) : s = u[12], u[13] !== o || u[14] !== b || u[15] !== x || u[16] !== s ? (l = {
                queryKey: o,
                enabled: b,
                staleTime: x,
                retry: !1,
                queryFn: s
            }, u[13] = o, u[14] = b, u[15] = x, u[16] = s, u[17] = l) : l = u[17];
            let {
                isError: w,
                refetch: C
            } = (0, i.a)(l);
            return u[18] !== w || u[19] !== C ? (c = w ? (0, a.jsx)(tl.a, {
                color: "secondary",
                onClick: () => void C(),
                children: (0, a.jsx)(eb.a, {
                    id: "chatgpt.pagination.retryMessage",
                    defaultMessage: "Retry loading this message"
                })
            }) : null, u[18] = w, u[19] = C, u[20] = c) : c = u[20], c
        }
        var sd = n("TmaW"),
            su = n("zW7m"),
            sh = n("K45w");

        function sp(e) {
            let t = e.querySelector("[data-dil-message-id]") ?? e;
            return t.checkVisibility() && null == t.querySelector("[data-dil-render-failed]") && t.innerText.trim().length > 0
        }
        n("CSxw");
        var sg = n("NqfB"),
            sm = n("JEFL"),
            sf = n("moBM");
        let sv = '[data-markdown-text-style="assistant-message"]',
            sy = (0, d.d)(eT.a, (e, t) => {
                let {
                    conversationId: n,
                    messageId: a
                } = e, {
                    get: r
                } = t;
                return null == a ? null : r(tg.N, n)?.[a]?.message ?? null
            });

        function sb(e) {
            let t, n, o = (0, r.c)(5),
                s = `[data-chatgpt-conversation-selection-target="${e.conversationId}"]`;
            return o[0] !== e ? (t = t => (0, a.jsx)(sx, {
                ...e,
                selection: t
            }), o[0] = e, o[1] = t) : t = o[1], o[2] !== s || o[3] !== t ? (n = (0, a.jsx)(sg.a, {
                align: "start",
                targetSelector: s,
                children: t
            }), o[2] = s, o[3] = t, o[4] = n) : n = o[4], n
        }

        function sx(e) {
            let t, o, s, i, l, c, u, h = (0, r.c)(30),
                {
                    conversationId: p,
                    moreDetailsEnabled: g,
                    onAddSelectedText: m,
                    selection: v
                } = e,
                y = (0, d.y)(eg.a),
                b = (0, f.a)(),
                x = (0, eO.f)("4290238484"),
                w = (0, eO.f)("473637331"),
                C = (0, d.z)(sf.b),
                I = (0, d.x)(tg.y, p);
            h[0] !== I || h[1] !== C || h[2] !== y ? (t = C && "tpp" === I && "chatgpt-thread" === y.value.routeKind && null == y.value.workSideChat && !0, h[0] = I, h[1] = C, h[2] = y, h[3] = t) : t = h[3];
            let _ = t;
            h[4] !== p || h[5] !== v.selectionRange ? (o = function(e) {
                let {
                    conversationId: t,
                    range: n
                } = e, a = n.startContainer instanceof Element ? n.startContainer : n.startContainer.parentElement, r = n.endContainer instanceof Element ? n.endContainer : n.endContainer.parentElement, o = a?.closest(sv);
                if (n.collapsed || null == o || !o.isConnected || o !== r?.closest(sv)) return null;
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
            let S = o,
                j = S?.messageId ?? null;
            h[7] !== p || h[8] !== j ? (s = {
                conversationId: p,
                messageId: j
            }, h[7] = p, h[8] = j, h[9] = s) : s = h[9];
            let T = (0, d.x)(sy, s),
                E = (0, d.x)(tg.j, p),
                P = x && g && null != E && null != S && T?.author.role === "assistant";
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
            } : void 0, h[10] = _, h[11] = y, h[12] = i) : i = h[12], h[13] !== P || h[14] !== w || h[15] !== m || h[16] !== v.selectionRange || h[17] !== S ? (l = !P || w ? e => {
                m(e, S?.messageId, null == S ? void 0 : function(e, t, n) {
                    let a = 0;
                    for (let r of rd(e, n.trim())) {
                        if (0 >= t.compareBoundaryPoints(Range.START_TO_START, r)) break;
                        a++
                    }
                    return a
                }(S.markdownElement, v.selectionRange, e))
            } : void 0, h[13] = P, h[14] = w, h[15] = m, h[16] = v.selectionRange, h[17] = S, h[18] = l) : l = h[18], h[19] !== P || h[20] !== p || h[21] !== b || h[22] !== y || h[23] !== S ? (c = P ? e => {
                Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(212773), n.e(81461), n.e(259288), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(16212), n.e(910298), n.e(722053), n.e(736778), n.e(871704)]).then(n.bind(n, "tZxZ")).then(t => {
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
                        shouldBlockExternalEgress: y.get(t5.e, p),
                        sourceConversationId: p
                    })
                })
            } : void 0, h[19] = P, h[20] = p, h[21] = b, h[22] = y, h[23] = S, h[24] = c) : c = h[24], h[25] !== v.selectedText || h[26] !== i || h[27] !== l || h[28] !== c ? (u = (0, a.jsx)(sm.a, {
                conversationTerminology: "chat",
                selectedText: v.selectedText,
                onOpenSideChat: i,
                onAddSelectedText: l,
                onMoreDetails: c
            }), h[25] = v.selectedText, h[26] = i, h[27] = l, h[28] = c, h[29] = u) : u = h[29], u
        }
        var sw = n("SEBt"),
            sC = n("JUxu");
        let sI = (0, m.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function s_(e) {
            let t, n, o, s, i = (0, r.c)(11),
                {
                    sharedConversationId: l
                } = e,
                c = (0, d.y)(eT.a),
                u = (0, d.x)(ab.f, (0, m.useContext)(S.a));
            if (null != u) {
                let e, t;
                return i[0] !== u ? (e = (0, ab.b)(u), i[0] = u, i[1] = e) : e = i[1], i[2] !== e ? (t = (0, a.jsx)(sC.a, {
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
                (0, ns.f)(c, sI, {
                    reportEntityType: "share_link",
                    threadId: l,
                    onCloseAutoFocus: e => {
                        e.preventDefault();
                        let n = t.ownerDocument.activeElement;
                        t.isConnected && (n === t.ownerDocument.body || e.target instanceof HTMLElement && e.target.contains(n)) && t.focus({
                            preventScroll: !0
                        })
                    }
                }), (0, sw.d)(c, l)
            }, i[5] = c, i[6] = l, i[7] = n) : n = i[7], i[8] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.sharedConversation.reportButton",
                defaultMessage: "Report conversation"
            }), i[8] = o) : o = i[8], i[9] !== n ? (s = (0, a.jsxs)("div", {
                className: "flex flex-col items-center gap-1 text-center text-xs select-none",
                children: [t, (0, a.jsx)(tl.a, {
                    className: "font-semibold",
                    color: "ghostActive",
                    onClick: n,
                    children: o
                })]
            }), i[9] = n, i[10] = s) : s = i[10], s
        }
        var sS = n("AORd"),
            sj = n("cP1f");

        function sT(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sE)
        }

        function sE(e) {
            return "assistant-message" === e.type || "generated-image" === e.type && null != e.src
        }

        function sP(e) {
            let t, n, s, i, l, c, u, h, p, g, f, v, y, b, x, w, C, I, _, j, T, E, P, A, k, R, O, N, F, z, L, B, D, G, H, q, W, K, V, U, Q, $, Y, J = (0, r.c)(268),
                {
                    ref: Z,
                    printTitle: ee,
                    trackReadState: et,
                    trackShownImpressions: en,
                    composerRef: ea,
                    workspace: er,
                    shouldBlockMcpApps: eo,
                    contentX: es,
                    conversationId: ei,
                    sectionIndex: el,
                    composerConversationId: ec,
                    composerLeadingContent: ed,
                    aboveComposerContent: eu,
                    historyLoadingContent: eh,
                    requiredSystemHints: em,
                    isCoveredByFloatingPanel: ef,
                    isFormOnly: ev,
                    isInlinePreview: ey,
                    hideModelPicker: ex,
                    showFilePicker: ew,
                    disableAutoFocus: eC,
                    transcriptPresentation: eI,
                    scrollOrigin: e_,
                    isChatConversation: eS,
                    customGptId: ej,
                    entries: eE,
                    errorMessage: eP,
                    hasLoadError: eM,
                    onRetryLoad: eA,
                    hasRenderableTurns: ek,
                    isComposerDisabled: eR,
                    readOnlyPlaceholder: eO,
                    moreDetailsEnabled: eN,
                    isConversationEmpty: eF,
                    showEmptyState: eL,
                    isConversationFetching: eB,
                    isConversationLoading: eD,
                    isSharedConversation: eG,
                    isSubmitDisabled: eH,
                    retainLiveModelPicker: eK,
                    isTemporaryChat: eV,
                    isTurnActive: eU,
                    isWorkConversation: eQ,
                    onboardingPrelude: e$,
                    scrollStateConversationId: eY,
                    initialResponsePlacementKey: eJ,
                    sharedConversationId: eX,
                    sharedPostRegulatedConnectorKind: eZ,
                    showComposer: e0,
                    archivedPreviewFooter: e1,
                    showPendingLoadingMessage: e2,
                    gptPluginMigrationBanner: e3,
                    awaitingGptContinuation: e4,
                    workOnlyConversionBanner: e5,
                    onAddSelectedText: e6,
                    onSubmitAccepted: e8
                } = e,
                e7 = void 0 === eL || eL,
                e9 = (0, d.y)(eT.a),
                tt = (0, d.y)(eg.a),
                tn = (0, d.z)(null),
                ta = (0, m.useContext)(S.a),
                tr = (0, d.x)(ab.f, ta),
                to = (0, d.z)(ep.a),
                ts = (0, d.x)(eW.a, ei),
                ti = er?.fullscreenContent != null ? "content" : "workspace",
                tl = (0, M.a)(ey ? "embedded" : ti),
                tc = (0, d.z)(si.a),
                td = e0 && tc?.source.turnContext.conversationId !== ec,
                tu = "floating" === tl.placement,
                [th, tm] = (0, m.useState)(!1),
                tf = th && !tl.isHidden && !ev,
                tv = er?.fullscreenContent != null || tu && tf ? "floating" : "main",
                ty = (0, d.z)(so.h),
                tb = eS && null == eX && null == tr && null == e1,
                tx = en && !ef,
                tw = !eD && !eU && !eM && eF && !ek,
                tC = !ey && "chatgpt-thread" === tt.value.routeKind && tt.value.workSideChat?.conversationId !== ei,
                tI = (0, d.x)(tg.i, ei),
                t_ = e7 && tb && tw && null == tI && !ts && !tu,
                tS = null == ej ? "centered-home" : "home",
                tj = e7 && !ts && (!tb || !eF),
                tT = (0, m.useRef)(null),
                tE = (0, m.useRef)(null),
                [tP, tM] = (0, m.useState)(null),
                tA = (0, n1.c)(),
                tk = ey ? null : eY;
            J[0] !== tk || J[1] !== tP || J[2] !== tA ? (t = () => ({
                conversationKey: tk,
                responseSpacer: tP,
                windowZoom: tA
            }), J[0] = tk, J[1] = tP, J[2] = tA, J[3] = t) : t = J[3];
            let tR = (0, eq.a)(t);
            J[4] !== e9 || J[5] !== tk || J[6] !== tR ? (n = () => (function(e, t, n) {
                let a = (0, d.u)(eT.a, null == t ? 0 : e.get(op.a, t)),
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
                        null != a && e.set(op.a, a, (0, r5.a)(t, r?.getHeightPx() ?? 0))
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
                            if ((0, n1.b)(c.height, e) <= Math.max(0, -s.offset)) return;
                            d = o.scrollTop + (0, n1.b)(c.top - o.getBoundingClientRect().top, e) - s.offset
                        }
                        let u = o.scrollHeight - o.clientHeight;
                        d <= u && ((null == s || null != c || e.get(r)?.getEntryGeometry(s.key) == null) && l(), t.compensateScrollToDistanceFromBottomPx(u - Math.max(0, d)))
                    },
                    captureBeforeHide: function(e) {
                        let t = e.getScrollElement();
                        return null != t && t.clientHeight > 0 && (s = i ?? (e.shouldFollowContentGrowth() && 1 >= (0, r5.b)(t) ? "bottom" : function(e, t) {
                            let n = e.scrollTop,
                                a = e.getBoundingClientRect();
                            for (let r of e.querySelectorAll("[data-turn-key]")) {
                                let e = r.getBoundingClientRect(),
                                    o = r.dataset.turnKey;
                                if (null != o && e.height > 0 && e.bottom > a.top && e.top < a.bottom) return {
                                    top: n,
                                    turn: {
                                        key: o,
                                        offset: (0, n1.b)(e.top - a.top, t)
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
            })(e9, tk, tR), J[4] = e9, J[5] = tk, J[6] = tR, J[7] = n) : n = J[7];
            let [tO] = (0, m.useState)(n), tN = (0, d.z)(tO.api$), tF = (0, d.z)(tO.restoreState$), tz = (0, d.z)(tO.initialOffset$), {
                cancelPendingRestore: tL
            } = tO;
            J[8] !== tL ? (s = e => {
                tL(e), tT.current?.releaseForUserScrollIntent(e)
            }, J[8] = tL, J[9] = s) : s = J[9];
            let tB = (0, eq.a)(s),
                tD = null == tF ? eJ : null,
                [tG, tH] = (0, m.useState)(!1);
            J[10] !== eE ? (i = () => eE, J[10] = eE, J[11] = i) : i = J[11];
            let tq = (0, eq.a)(i),
                {
                    revealLatestResponse: tW,
                    scrollToSearchTurn: tK,
                    scrollToDelayedImageCard: tV
                } = ((U = (0, r.c)(18))[0] !== tN || U[1] !== eE ? (G = () => ({
                    async scrollToMessage(e) {
                        let t = eE.find(t => {
                            let {
                                turn: n
                            } = t;
                            return n.messageIds.includes(e)
                        });
                        null != t && null != tN && await tN.scrollToKey(t.turnKey, void 0, {
                            align: "top"
                        })
                    }
                }), H = [eE, tN], U[0] = tN, U[1] = eE, U[2] = G, U[3] = H) : (G = U[2], H = U[3]), (0, m.useImperativeHandle)(Z, G, H), U[4] !== tN || U[5] !== eE ? (q = (e, t) => (0, aQ.c)(tN, eE.find(t => {
                    let {
                        id: n
                    } = t;
                    return n === e
                })?.turnKey, t), U[4] = tN, U[5] = eE, U[6] = q) : q = U[6], Q = (0, eq.a)(q), U[7] !== tN || U[8] !== ei || U[9] !== eE ? (W = async e => {
                    let t = eE.find(t => {
                        let {
                            turn: n
                        } = t;
                        return n.messageIds.includes(e)
                    });
                    null != t && null != tN && await tN.scrollToKey(t.turnKey, t => t.querySelector(`[id="${CSS.escape(`delayed-image-gen-${ei}-${e}`)}"]`), {
                        align: "center"
                    })
                }, U[7] = tN, U[8] = ei, U[9] = eE, U[10] = W) : W = U[10], $ = (0, eq.a)(W), U[11] !== tN?.scrollToKey || U[12] !== eE ? (K = function(e) {
                    let t = eE.findLast(sT);
                    return (0, sj.a)(tN?.scrollToKey, t?.turnKey, e)
                }, U[11] = tN?.scrollToKey, U[12] = eE, U[13] = K) : K = U[13], Y = K, U[14] !== Y || U[15] !== $ || U[16] !== Q ? (V = {
                    revealLatestResponse: Y,
                    scrollToSearchTurn: Q,
                    scrollToDelayedImageCard: $
                }, U[14] = Y, U[15] = $, U[16] = Q, U[17] = V) : V = U[17], V);
            J[12] === Symbol.for("react.memo_cache_sentinel") ? (l = e => (0, aQ.a)(tE.current, e), J[12] = l) : l = J[12];
            let tU = (0, eq.a)(l),
                tQ = `chatgpt:${ei}`;
            if (J[13] !== tL || J[14] !== ei || J[15] !== tq || J[16] !== tU || J[17] !== eV || J[18] !== tt || J[19] !== tK || J[20] !== eX || J[21] !== tr || J[22] !== tQ) {
                let e;
                J[24] !== ei || J[25] !== eV || J[26] !== tt || J[27] !== eX || J[28] !== tr ? (e = async e => {
                    let t = tt.get(tg.j, ei);
                    !eV && null == eX && null == tr && null != t && tt.get(aP.b) > 0 && await (0, aE.a)(tt, t, e)
                }, J[24] = ei, J[25] = eV, J[26] = tt, J[27] = eX, J[28] = tr, J[29] = e) : e = J[29], c = function(e) {
                    let {
                        getTurns: t,
                        routeContextId: n,
                        scrollAdapter: a,
                        ensureHistory: r
                    } = e, o = (0, rb.a)({
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
                                            unitId: (0, re.a)("user", t),
                                            text: n
                                        }]
                                    }
                                    if ("assistant-message" === e.type) {
                                        let n = (0, rw.a)(e.content, ag.b),
                                            a = [],
                                            r = "";
                                        for (; e.content.includes(r);) r += "";
                                        let o = (0, ry.a)(function e(t, n, a, r) {
                                                let o = "",
                                                    s = 0;
                                                for (let i of t) {
                                                    let t = n.indexOf(i.raw, s); - 1 !== t && (o += n.slice(s, t), o += function(t, n, a) {
                                                        var r, o;
                                                        if ("math" === t.type && "text" in t && "string" == typeof t.text) return a(t.text);
                                                        if ("codexDirective" === (r = t).type && "name" in r && "string" == typeof r.name && "attributes" in r && null != r.attributes && "object" == typeof r.attributes) return function(e, t) {
                                                            if (e.name === ag.a) {
                                                                let n = (0, rC.a)(e.attributes),
                                                                    a = (0, rC.b)(e.attributes),
                                                                    r = null != n ? t[n] : null == a ? void 0 : t.find(e => (0, ag.l)(e) === a);
                                                                if (null == r) return "";
                                                                let o = (0, ag.i)(r);
                                                                return "hidden" === o || "block" === o ? "" : (0, ag.j)(r) ?? ""
                                                            }
                                                            return e.name === rv.a ? (0, rx.a)(e.attributes, "label") ?? "" : e.name === rv.b || e.name === rv.c ? "" : e.name === rf.a ? e.text ?? "" : null
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
                                            unitId: (0, re.a)("assistant", t),
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
                    getTurns: tq,
                    routeContextId: tQ,
                    scrollAdapter: {
                        scrollToTurn: tK,
                        getTurnContainer: tU,
                        onNavigate: tL
                    },
                    ensureHistory: e
                }), J[13] = tL, J[14] = ei, J[15] = tq, J[16] = tU, J[17] = eV, J[18] = tt, J[19] = tK, J[20] = eX, J[21] = tr, J[22] = tQ, J[23] = c
            } else c = J[23];
            let t$ = c;
            J[30] !== t$.contextId ? (u = {
                containerRef: tE,
                contextId: t$.contextId
            }, J[30] = t$.contextId, J[31] = u) : u = J[31], (0, aJ.a)(u);
            let tY = td && null == e1,
                tJ = to && tY && !tu,
                tX = (0, a1.a)();
            J[32] !== ei || J[33] !== ek || J[34] !== ef || J[35] !== el || J[36] !== tX ? (h = {
                conversationId: ei,
                sectionIndex: el,
                hasRenderableTurns: ek,
                isCoveredByFloatingPanel: ef,
                shouldReduceMotion: tX,
                containerRef: tE
            }, J[32] = ei, J[33] = ek, J[34] = ef, J[35] = el, J[36] = tX, J[37] = h) : h = J[37];
            let tZ = function(e) {
                    let t, n, a, o = (0, r.c)(12),
                        {
                            conversationId: s,
                            sectionIndex: i,
                            hasRenderableTurns: l,
                            isCoveredByFloatingPanel: c,
                            shouldReduceMotion: d,
                            containerRef: u
                        } = e,
                        h = (0, sh.a)(0);
                    o[0] !== s || o[1] !== i ? (t = {
                        conversationId: s,
                        sectionIndex: i
                    }, o[0] = s, o[1] = i, o[2] = t) : t = o[2];
                    let p = (0, m.useRef)(t);
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
                                Array.from(n.querySelectorAll('[data-markdown-text-style="assistant-message"]')).some(sp) && 0 !== n.clientWidth && (o.disconnect(), h.set(a * n.clientWidth), e = (0, r2.a)(h, 0, {
                                    duration: .3,
                                    ease: rJ.d
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
                    }, a = [s, i, l, d, c, h, u], o[3] = u, o[4] = s, o[5] = l, o[6] = c, o[7] = i, o[8] = h, o[9] = d, o[10] = n, o[11] = a) : (n = o[10], a = o[11]), (0, m.useLayoutEffect)(n, a), h
                }(h),
                t0 = tY && tu,
                [t1, t2] = (0, m.useState)(null),
                [t3, t4] = (0, m.useState)(null),
                [t5, t6] = (0, m.useState)(null),
                t8 = eG && tY && !eR && !tu && !to,
                t7 = (0, X.a)(eG ? "(min-width: 40rem) and (pointer: fine)" : null),
                t9 = tr?.id ?? eX,
                ne = t8 && ta?.authMethod === "chatgpt" && null != ta.userId && !ey && !eQ && !ty,
                nt = ne && t7 && !eH && !tl.isHidden && !ef,
                nn = (0, m.useRef)(null),
                [na, nr] = (0, m.useState)(null),
                no = (0, m.useRef)(null);
            J[38] === Symbol.for("react.memo_cache_sentinel") ? (p = e => (no.current = e, () => {
                no.current === e && (no.current = null)
            }), J[38] = p) : p = J[38];
            let ns = (0, eq.a)(p),
                ni = (0, d.x)(tg.U, ei);
            J[39] !== e9 || J[40] !== ei ? (g = (e, t) => {
                e9.set(tg.V, (0, tp.d)(e9.get, ei), {
                    sourceMessageId: e,
                    showRemaining: t
                })
            }, J[39] = e9, J[40] = ei, J[41] = g) : g = J[41];
            let nl = (0, eq.a)(g);
            J[42] !== t9 || J[43] !== nl ? (f = e => {
                if (null == t9) return null;
                let t = nn.current;
                return t?.shareId === t9 && t.sourceMessageId === e.sourceMessageId ? null : (nn.current = {
                    shareId: t9,
                    sourceMessageId: e.sourceMessageId
                }, n => {
                    "defer" === n.mode ? nn.current = t : "prediction" === n.mode && nr({
                        shareId: t9,
                        sourceMessageId: e.sourceMessageId,
                        prediction: {
                            kind: "receiver-followup",
                            text: e.text
                        }
                    }), ("prefill" === n.mode || "prediction" === n.mode) && nl(e.sourceMessageId, n.showRemaining)
                })
            }, J[42] = t9, J[43] = nl, J[44] = f) : f = J[44];
            let nc = (0, eq.a)(f);
            J[45] !== t9 ? (v = e => {
                nr(t => t?.shareId === t9 && t.sourceMessageId === e ? null : t)
            }, J[45] = t9, J[46] = v) : v = J[46];
            let nd = (0, eq.a)(v);
            if (J[47] !== ne || J[48] !== eE) {
                let e = ne ? eE.at(-1)?.turn : null,
                    t = null == e ? null : (0, a6.a)(e.items, e.logicalAnswerMessageId);
                y = t?.completed ? (0, su.a)(t.content, t.contentReferences, t.messageId) : null, J[47] = ne, J[48] = eE, J[49] = y
            } else y = J[49];
            let nu = y,
                nh = nt && na?.shareId === t9 && na?.sourceMessageId === nu?.sourceMessageId ? na : null;
            J[50] !== nd || J[51] !== nu ? (b = () => {
                no.current?.(), null != nu && nd(nu.sourceMessageId)
            }, J[50] = nd, J[51] = nu, J[52] = b) : b = J[52];
            let np = (0, eq.a)(b),
                [ng, nm] = (0, m.useState)(null);
            J[53] !== e4 || J[54] !== ei || J[55] !== ek || J[56] !== eV || J[57] !== eZ || J[58] !== e0 ? (x = e0 && !e4 ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aV.BrowserComposerDisclaimer, {
                    supportsMessageDisclosures: !0,
                    conversationId: ei,
                    hasUserMessage: ek,
                    isTemporaryChat: eV,
                    regulatedConnectorKindOverride: eZ
                })
            }) : void 0, J[53] = e4, J[54] = ei, J[55] = ek, J[56] = eV, J[57] = eZ, J[58] = e0, J[59] = x) : x = J[59];
            let nf = x;
            J[60] !== ei || J[61] !== eP || J[62] !== ek || J[63] !== eR || J[64] !== eH || J[65] !== eQ || J[66] !== e0 || J[67] !== e2 ? (w = ek ? null : (0, a.jsx)(rg.a, {
                conversationId: ei,
                errorMessage: eP,
                isWorkConversation: eQ,
                showPendingLoadingMessage: e2,
                showRequestUserInputStatus: e0 && !eR && !eH
            }), J[60] = ei, J[61] = eP, J[62] = ek, J[63] = eR, J[64] = eH, J[65] = eQ, J[66] = e0, J[67] = e2, J[68] = w) : w = J[68];
            let nv = w;
            J[69] !== ei || J[70] !== eQ || J[71] !== eX || J[72] !== tr ? (C = eQ && null == eX && null == tr ? (0, a.jsx)(a.Fragment, {
                children: (0, a.jsx)(aK, {
                    conversationId: ei
                }, ei)
            }) : null, J[69] = ei, J[70] = eQ, J[71] = eX, J[72] = tr, J[73] = C) : C = J[73];
            let ny = C;
            J[74] !== e1 || J[75] !== ny ? (I = null != e1 ? (0, a.jsxs)(a.Fragment, {
                children: [ny, e1]
            }) : null, J[74] = e1, J[75] = ny, J[76] = I) : I = J[76];
            let nb = I;
            J[77] !== ey ? (_ = ey ? (0, a.jsx)(te.d, {
                status: "chatgpt"
            }) : (0, a.jsx)(te.b, {
                status: "chatgpt"
            }), J[77] = ey, J[78] = _) : _ = J[78];
            let nx = _;
            J[79] !== eu || J[80] !== nh?.prediction || J[81] !== nb || J[82] !== e4 || J[83] !== nc || J[84] !== ec || J[85] !== ed || J[86] !== ea || J[87] !== ei || J[88] !== eC || J[89] !== nf || J[90] !== nv || J[91] !== ne || J[92] !== eE || J[93] !== ny || J[94] !== t1 || J[95] !== e3 || J[96] !== eM || J[97] !== ek || J[98] !== ex || J[99] !== to || J[100] !== eR || J[101] !== eD || J[102] !== ef || J[103] !== ev || J[104] !== tu || J[105] !== ty || J[106] !== ey || J[107] !== eG || J[108] !== eH || J[109] !== eV || J[110] !== eQ || J[111] !== tx || J[112] !== nd || J[113] !== e8 || J[114] !== eO || J[115] !== tO || J[116] !== nt || J[117] !== t8 || J[118] !== nu || J[119] !== t9 || J[120] !== ns || J[121] !== em || J[122] !== tP || J[123] !== eK || J[124] !== tW || J[125] !== tl.isHidden || J[126] !== eX || J[127] !== tr || J[128] !== td || J[129] !== ew || J[130] !== t0 || J[131] !== tJ || J[132] !== et || J[133] !== tv || J[134] !== e5 || J[135] !== er ? (j = nb ?? (td ? (0, a.jsxs)(ov.a.Provider, {
                value: eE.at(-1) ?? null,
                children: [ev || tu ? null : (0, a.jsx)(aZ.a, {
                    onNavigate: tW
                }, ei), tu ? null : ed, (0, a.jsx)(o9, {
                    requiredSystemHints: em,
                    composerRef: ea,
                    receiverComposer: ne && null != t9 ? {
                        shareId: t9,
                        prompt: nu,
                        enabled: nt,
                        prediction: nh?.prediction ?? null,
                        claimPrompt: nc,
                        onPredictionRetired: nd,
                        registerDismissPrefill: ns
                    } : void 0,
                    workspace: er,
                    isInlinePreview: ey,
                    hideModelPicker: ex,
                    showFilePicker: ew,
                    disableAutoFocus: eC,
                    conversationId: ec,
                    isImageEditComposer: ty,
                    disabled: eR,
                    readOnlyPlaceholder: eO,
                    awaitingGptContinuation: e4,
                    headerContent: ny,
                    aboveComposerContent: (0, a.jsxs)(a.Fragment, {
                        children: [t8 ? (0, a.jsx)("div", {
                            ref: t6,
                            className: "empty:hidden"
                        }) : null, eu, !eD && !eM && ek && !e4 && e5, to ? null : e3, t0 && nv]
                    }),
                    isFullscreenComposer: tu,
                    isHidden: tl.isHidden,
                    trackReadState: et && !ef,
                    trackShownImpressions: tx,
                    isSharedConversation: eG,
                    isSubmitDisabled: eH,
                    retainLiveModelPicker: eK && !ty,
                    followupPortalTarget: t1,
                    takeoverDisclaimerRef: nm,
                    showConversationFollowups: null == eX && null == tr && !eV && !eQ && !tu,
                    isTemporaryChat: eV,
                    isWorkConversation: eQ,
                    responseSpacerState: tP,
                    renderTranscript: e => {
                        let {
                            isVisible: t
                        } = e;
                        return (0, a.jsx)(rU, {
                            entries: eE,
                            historyLoader: eV || null != eX || null != tr ? null : (0, a.jsx)(sl.a, {
                                conversationId: ei
                            }),
                            isVisible: t,
                            rendersWidgets: "floating" === tv,
                            onVisibilityChange: tm
                        }, ei)
                    },
                    showVoiceStage: !tJ,
                    voiceDisclaimer: to && !tJ ? nf : void 0,
                    onSubmitAccepted: e => {
                        tO.acceptSubmit(), e8?.(e)
                    }
                }, `${ec}:${ty?"image-edit":"chat"}`)]
            }) : ny), J[79] = eu, J[80] = nh?.prediction, J[81] = nb, J[82] = e4, J[83] = nc, J[84] = ec, J[85] = ed, J[86] = ea, J[87] = ei, J[88] = eC, J[89] = nf, J[90] = nv, J[91] = ne, J[92] = eE, J[93] = ny, J[94] = t1, J[95] = e3, J[96] = eM, J[97] = ek, J[98] = ex, J[99] = to, J[100] = eR, J[101] = eD, J[102] = ef, J[103] = ev, J[104] = tu, J[105] = ty, J[106] = ey, J[107] = eG, J[108] = eH, J[109] = eV, J[110] = eQ, J[111] = tx, J[112] = nd, J[113] = e8, J[114] = eO, J[115] = tO, J[116] = nt, J[117] = t8, J[118] = nu, J[119] = t9, J[120] = ns, J[121] = em, J[122] = tP, J[123] = eK, J[124] = tW, J[125] = tl.isHidden, J[126] = eX, J[127] = tr, J[128] = td, J[129] = ew, J[130] = t0, J[131] = tJ, J[132] = et, J[133] = tv, J[134] = e5, J[135] = er, J[136] = j) : j = J[136];
            let nw = j;
            J[137] !== ei || J[138] !== ef || J[139] !== ey || J[140] !== tn || J[141] !== eX || J[142] !== tr ? (T = void 0, J[137] = ei, J[138] = ef, J[139] = ey, J[140] = tn, J[141] = eX, J[142] = tr, J[143] = T) : T = J[143];
            let nC = T;
            J[144] !== e9 || J[145] !== ei || J[146] !== et ? (E = e => {
                et && null != e9.get(aX.b, ei) && e9.get(tg.L, ei) && (0, a0.a)(e9, e) && (0, om.b)(e9, ei).catch(sk)
            }, J[144] = e9, J[145] = ei, J[146] = et, J[147] = E) : E = J[147];
            let nI = E,
                n_ = ef || void 0;
            J[148] === Symbol.for("react.memo_cache_sentinel") ? (P = null, J[148] = P) : P = J[148], J[149] !== ei || J[150] !== ef || J[151] !== tu || J[152] !== et ? (A = !et || tu || ef ? null : (0, a.jsx)(of.a, {
                conversationId: ei
            }), J[149] = ei, J[150] = ef, J[151] = tu, J[152] = et, J[153] = A) : A = J[153], J[154] !== e1 || J[155] !== ei || J[156] !== ey || J[157] !== eX || J[158] !== tr ? (k = ey || null != eX || null != tr || null != e1 ? null : (0, a.jsx)(og, {
                conversationId: ei
            }, ei), J[154] = e1, J[155] = ei, J[156] = ey, J[157] = eX, J[158] = tr, J[159] = k) : k = J[159], J[160] !== ei || J[161] !== eD || J[162] !== ey || J[163] !== eV || J[164] !== eX || J[165] !== tr ? (R = ey || eD || eV || null != eX || null != tr ? null : (0, a.jsx)(sc, {
                conversationId: ei
            }), J[160] = ei, J[161] = eD, J[162] = ey, J[163] = eV, J[164] = eX, J[165] = tr, J[166] = R) : R = J[166], J[167] !== ei || J[168] !== eE || J[169] !== tG || J[170] !== eB || J[171] !== eD || J[172] !== ey || J[173] !== tW || J[174] !== eX || J[175] !== tr || J[176] !== tN ? (O = ey || eD || null != eX || null != tr ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(n6, {
                    conversationId: ei,
                    entries: eE,
                    turnListApi: tN
                }), (0, a.jsx)(a4.a, {
                    ready: !eB && tG && null != tN && eE.length > 0,
                    onNavigate: tW
                })]
            }), J[167] = ei, J[168] = eE, J[169] = tG, J[170] = eB, J[171] = eD, J[172] = ey, J[173] = tW, J[174] = eX, J[175] = tr, J[176] = tN, J[177] = O) : O = J[177], J[178] !== e1 || J[179] !== t_ || J[180] !== ec || J[181] !== es || J[182] !== tI || J[183] !== ei || J[184] !== t$ || J[185] !== nf || J[186] !== nv || J[187] !== eE || J[188] !== nw || J[189] !== tB || J[190] !== eM || J[191] !== ek || J[192] !== tG || J[193] !== eh || J[194] !== tS || J[195] !== tz || J[196] !== tD || J[197] !== to || J[198] !== ts || J[199] !== eR || J[200] !== eB || J[201] !== eD || J[202] !== ef || J[203] !== ev || J[204] !== tu || J[205] !== ey || J[206] !== tw || J[207] !== tC || J[208] !== eG || J[209] !== eV || J[210] !== eU || J[211] !== eQ || J[212] !== eN || J[213] !== nC || J[214] !== tx || J[215] !== e6 || J[216] !== np || J[217] !== eA || J[218] !== e$ || J[219] !== nx || J[220] !== eS || J[221] !== ee || J[222] !== tO || J[223] !== ni || J[224] !== t5 || J[225] !== t3 || J[226] !== t8 || J[227] !== tP || J[228] !== tl.isChatPaneHidden || J[229] !== tt || J[230] !== e_ || J[231] !== tV || J[232] !== tZ || J[233] !== eX || J[234] !== tr || J[235] !== eo || J[236] !== tX || J[237] !== e0 || J[238] !== td || J[239] !== tj || J[240] !== tY || J[241] !== t0 || J[242] !== tJ || J[243] !== ng || J[244] !== eI || J[245] !== tN || J[246] !== er ? (N = er?.fullscreenContent != null ? (0, a.jsxs)(a.Fragment, {
                children: [!eo && er.fullscreenContent, nw]
            }) : (0, a.jsxs)(a5.a, {
                scrollAttributionKey: tx ? eE.at(-1)?.turnKey : void 0,
                viewportOverlay: ev || ey || eQ || null != eX || null != tr || null != e1 || ef || tu ? null : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(ox, {
                        conversationId: ei
                    }, ei)
                }),
                hideTranscript: ev,
                active: !eD && (!ek || null != tN),
                presentation: eI ?? (ey ? "compact" : "default"),
                contentX: es,
                preserveReadingPassage: !eQ && !ey,
                supportsComposerExpansion: tY && !tu && null == er,
                footerPlacement: t_ ? tS : "bottom",
                followContentGrowth: !eS,
                initialOffset: tz,
                preserveViewportOnContentGrowth: eS,
                scrollOrigin: e_,
                onScroll: tO.onScroll,
                onUserScrollIntent: tB,
                scrollToBottomButton: !td || tu || tJ ? void 0 : {
                    isWorking: eU
                },
                threadEndContent: to ? void 0 : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)("div", {
                        ref: t2,
                        className: ez.a
                    }), null == ng ? nf : (0, n0.createPortal)(nf, ng)]
                }),
                footerLeadingContent: tJ ? (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(a.Fragment, {
                        children: (0, a.jsx)("div", {
                            className: ez.a,
                            children: (0, a.jsx)(a2.a, {})
                        })
                    }), (0, a.jsx)("div", {
                        className: "overflow-hidden electron:[scrollbar-gutter:stable_both-edges]",
                        children: nf
                    })]
                }) : nC,
                footer: nw,
                children: [ey || eD || null != eX ? null : (0, a.jsx)(rp, {
                    conversationId: ei,
                    entries: eE,
                    isConversationFetching: eB,
                    turnListApi: tN
                }), (0, a.jsxs)(nZ.a.div, {
                    ref: tE,
                    style: {
                        x: tZ
                    },
                    "data-chatgpt-conversation-selection-target": ei,
                    "data-rail-chat-transcript": tC || void 0,
                    className: (0, nX.b)("flex min-h-full flex-1 flex-col gap-1.5 pb-5", ey && "pt-5"),
                    "data-thread-find-target": "conversation",
                    onFocusCapture: () => {
                        (0, aY.K)(tt, "conversation")
                    },
                    onMouseDownCapture: () => {
                        (0, aY.K)(tt, "conversation")
                    },
                    children: [(0, a.jsxs)(m.Suspense, {
                        fallback: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(o.b, {
                                name: "conversation content"
                            }), nx]
                        }),
                        children: [ey || eD ? null : (0, a.jsx)(a$.a, {
                            conversationSource: t$
                        }), ef || tl.isChatPaneHidden || eV || null != eX || null != tr ? null : eh ?? (0, a.jsx)(sl.a, {
                            conversationId: ei
                        }), (0, a.jsx)(sS.b, {
                            conversationId: ei
                        }), (null != eX || null != tr) && ek ? (0, a.jsx)(s_, {
                            sharedConversationId: eX
                        }) : null, null == e$ ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("div", {
                                className: ez.a,
                                children: e$
                            })
                        }), null == tI || eD ? null : (0, a.jsx)(a8.a, {
                            conversationId: ei,
                            branchSource: {
                                conversationId: tI.metadata.source_conversation_id,
                                title: tI.metadata.source_conversation_title,
                                gizmoId: tI.metadata.source_conversation_gizmo_id,
                                ownerId: tI.metadata.source_conversation_owner_id
                            }
                        }), eM ? (0, a.jsx)(aG, {
                            isFetching: eB,
                            isSharedConversation: eG,
                            onRetry: eA
                        }) : eD ? nx : ek ? (0, a.jsxs)(ss.a, {
                            value: tV,
                            children: [ey || ef ? null : (0, a.jsxs)(a.Fragment, {
                                children: [eV || null != eX || null != tr ? null : (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsx)(aN, {
                                        conversationId: ei
                                    })
                                }), (0, a.jsx)(ak, {
                                    entries: eE,
                                    title: ee,
                                    TurnRowComponent: rV
                                })]
                            }), (0, a.jsx)(sd.a, {
                                enabled: t8,
                                onRemainingFollowupSubmit: np,
                                aboveComposer: t5,
                                belowMessage: t3,
                                composerFollowups: ni ?? void 0,
                                children: (0, a.jsx)(oo, {
                                    viewportRef: tT,
                                    isTurnActive: eU,
                                    conversationId: ei,
                                    entries: eE,
                                    readingPosition: tO,
                                    isInlinePreview: ey,
                                    hasVisibleContent: tG,
                                    onVisibleContentReady: () => tH(!0),
                                    responseSpacerState: tP
                                })
                            }), t8 ? (0, a.jsx)("div", {
                                ref: t4,
                                className: "empty:hidden"
                            }) : null]
                        }) : tj && null == tI && (0, a.jsx)("div", {
                            className: "rounded-xl border border-default bg-surface-secondary/92 p-4 text-sm text-codex-description",
                            "data-rail-chat-empty": tC && tw || void 0,
                            children: (0, a.jsx)(eb.a, {
                                id: "chatgptConversations.emptyConversation",
                                defaultMessage: "No renderable ChatGPT messages were found in this conversation"
                            })
                        }), !t0 && nv, (0, a.jsx)(oh.a, {
                            conversationId: ec,
                            isWorkConversation: eQ
                        }), e0 && !eR ? (0, a.jsx)(sb, {
                            conversationId: ei,
                            moreDetailsEnabled: eN,
                            onAddSelectedText: e6
                        }) : null]
                    }), ey ? null : (0, a.jsx)(rm.a, {
                        preserveResponseViewport: e => tT.current?.holdForResponse(e) ?? !1,
                        conversationId: ei,
                        initialPlacementKey: tD,
                        isActiveVoiceConversation: to && ts,
                        isLoadingHistory: eD,
                        latestUserTurnKey: eE.findLast(sM)?.turnKey,
                        onResponseSpacerStateChange: tM
                    }), tJ ? (0, a.jsx)(nZ.a.div, {
                        className: "pointer-events-none shrink-0",
                        "aria-hidden": !0,
                        initial: {
                            height: 0
                        },
                        animate: {
                            height: 112
                        },
                        transition: tX ? a3.c : a3.b
                    }) : null]
                })]
            }), J[178] = e1, J[179] = t_, J[180] = ec, J[181] = es, J[182] = tI, J[183] = ei, J[184] = t$, J[185] = nf, J[186] = nv, J[187] = eE, J[188] = nw, J[189] = tB, J[190] = eM, J[191] = ek, J[192] = tG, J[193] = eh, J[194] = tS, J[195] = tz, J[196] = tD, J[197] = to, J[198] = ts, J[199] = eR, J[200] = eB, J[201] = eD, J[202] = ef, J[203] = ev, J[204] = tu, J[205] = ey, J[206] = tw, J[207] = tC, J[208] = eG, J[209] = eV, J[210] = eU, J[211] = eQ, J[212] = eN, J[213] = nC, J[214] = tx, J[215] = e6, J[216] = np, J[217] = eA, J[218] = e$, J[219] = nx, J[220] = eS, J[221] = ee, J[222] = tO, J[223] = ni, J[224] = t5, J[225] = t3, J[226] = t8, J[227] = tP, J[228] = tl.isChatPaneHidden, J[229] = tt, J[230] = e_, J[231] = tV, J[232] = tZ, J[233] = eX, J[234] = tr, J[235] = eo, J[236] = tX, J[237] = e0, J[238] = td, J[239] = tj, J[240] = tY, J[241] = t0, J[242] = tJ, J[243] = ng, J[244] = eI, J[245] = tN, J[246] = er, J[247] = N) : N = J[247], J[248] !== ef || J[249] !== nI || J[250] !== n_ || J[251] !== A || J[252] !== k || J[253] !== R || J[254] !== O || J[255] !== N ? (F = (0, a.jsxs)("div", {
                onKeyDownCapture: nI,
                onPointerDownCapture: nI,
                onWheelCapture: nI,
                className: "contents",
                "aria-hidden": n_,
                inert: ef,
                children: [P, A, k, R, O, N]
            }), J[248] = ef, J[249] = nI, J[250] = n_, J[251] = A, J[252] = k, J[253] = R, J[254] = O, J[255] = N, J[256] = F) : F = J[256];
            let nS = F,
                nj = !ey,
                nT = "main" === tv;
            J[257] !== nj || J[258] !== nT ? (z = {
                presentation: "main",
                preserveActivityDisclosures: nj,
                rendersWidgets: nT
            }, J[257] = nj, J[258] = nT, J[259] = z) : z = J[259];
            let nE = !tf && (ev || ef || tl.isChatPaneHidden || er?.fullscreenContent != null);
            return J[260] !== nE ? (L = (0, a.jsx)(o.b, {
                name: "conversation hidden",
                active: nE
            }), J[260] = nE, J[261] = L) : L = J[261], J[262] !== nS ? (B = (0, a.jsx)(aU.a, {
                children: nS
            }), J[262] = nS, J[263] = B) : B = J[263], J[264] !== z || J[265] !== L || J[266] !== B ? (D = (0, a.jsxs)(d.b, {
                scope: rT,
                value: z,
                children: [L, B]
            }), J[264] = z, J[265] = L, J[266] = B, J[267] = D) : D = J[267], D
        }

        function sM(e) {
            let {
                turn: t
            } = e;
            return t.items.some(sA)
        }

        function sA(e) {
            return "user-message" === e.type
        }

        function sk() {}
        var sR = n("gCr7");
        n("i1of");
        var sO = n("FQMS"),
            sN = n("alJ6"),
            sF = n("u9iS"),
            sz = n("fNPc"),
            sL = n("vVgo"),
            sB = n("T33u"),
            sD = n("EpL9");

        function sG(e) {
            let {
                conversationId: t,
                courseId: n
            } = e;
            return `chatgpt-learning-course:${JSON.stringify([t,n])}`
        }
        let sH = (0, d.d)(eg.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(tH.h) && n(tH.i) && n(ow.l.activeTab$)?.tabId === sG(e)
            }),
            sq = (0, td.a)(async () => {
                let {
                    CoursePanelTab: e
                } = await Promise.all([n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(353230), n.e(882456), n.e(212773), n.e(81461), n.e(259288), n.e(603135), n.e(122290), n.e(513822), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(910298), n.e(628545), n.e(828905)]).then(n.bind(n, "qnj5"));
                return e
            }, {
                propagateLoadError: !0
            }),
            sW = (0, sD.k)("chatgpt-learning-course", sq, {
                dropDestinations: ["right"],
                isAvailable: (e, t) => "chatgpt-thread" === e.value.routeKind && (null == t || e.value.conversationId === t.conversationId),
                paneWidth: () => ({
                    defaultWidth: 480,
                    storageKey: "app-shell:learning-course-width"
                }),
                showInNewTabLauncher: !1,
                open: sK
            });

        function sK(e, t) {
            let {
                conversationId: n,
                courseId: r
            } = t, {
                preserveFocus: o = !1
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, s = e.get(j.f), i = e.get(j.j), l = () => "chatgpt-thread" === e.value.routeKind && e.value.conversationId === n && e.get(ej.c)?.pathname === e.value.pathname && e.get(j.f) === s && e.get(j.j) === i;
            if (!l() || "" === r) return;
            let c = sG({
                conversationId: n,
                courseId: r
            });
            e.get(sH, {
                conversationId: n,
                courseId: r
            }) ? ow.l.closeTab(e, c) : (0, ow.h)(e, sW, {
                target: "right",
                revealAndFocus: !0,
                preserveFocus: o,
                shouldOpen: l,
                id: c,
                icon: (0, a.jsx)(tc.nb, {}),
                title: e.get(nv.a).formatMessage({
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
        var sV = n("MgyE"),
            sU = n("gyrn"),
            sQ = n("ckwE"),
            s$ = n("kHi2");

        function sY(e) {
            let t, n = (0, r.c)(3),
                {
                    children: o
                } = e,
                [s] = (0, m.useState)(sJ);
            return n[0] !== s || n[1] !== o ? (t = (0, a.jsx)(aM.a, {
                value: s,
                children: o
            }), n[0] = s, n[1] = o, n[2] = t) : t = n[2], t
        }

        function sJ() {
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

        function sX(e) {
            let t, n, o, s = (0, r.c)(8),
                {
                    children: i,
                    courseChatId: l
                } = e,
                c = (0, d.y)(eg.a);
            s[0] !== l || s[1] !== c ? (t = "chatgpt-thread" === c.value.routeKind && c.value.conversationId === l ? c.get(s$.b) : void 0, s[0] = l, s[1] = c, s[2] = t) : t = s[2];
            let u = t;
            return s[3] !== i ? (n = (0, a.jsx)(sY, {
                children: i
            }), s[3] = i, s[4] = n) : n = s[4], s[5] !== u || s[6] !== n ? (o = (0, a.jsx)(sQ.a, {
                binding: u,
                children: n
            }), s[5] = u, s[6] = n, s[7] = o) : o = s[7], o
        }
        var sZ = n("MDmT"),
            s0 = n("Fjze");

        function s1(e) {
            let t, n, a, o = (0, r.c)(7),
                {
                    sharedConversationId: s
                } = e,
                i = (0, d.y)(eT.a),
                l = null != s;
            o[0] !== i || o[1] !== s ? (t = () => {
                null != s && (ni.Request.safePost("/received-shares/open", {
                    requestBody: {
                        share_kind: "conversation",
                        share_id: s
                    }
                }).then(() => i.queryClient.invalidateQueries({
                    queryKey: ["opened-shared-links"]
                })).catch(s2), (0, ec.a)(i, s0.a, {
                    sharedConversationId: s
                }))
            }, o[0] = i, o[1] = s, o[2] = t) : t = o[2];
            let c = (0, m.useEffectEvent)(t);
            return o[3] !== c ? (n = () => {
                c()
            }, o[3] = c, o[4] = n) : n = o[4], o[5] !== l ? (a = [l], o[5] = l, o[6] = a) : a = o[6], (0, m.useEffect)(n, a), null
        }

        function s2() {}
        var s3 = n("GigQ"),
            s4 = n("JKdL"),
            s5 = n("d107"),
            s6 = n("FGv0"),
            s8 = n("r9i9"),
            s7 = n("tdfh"),
            s9 = n("uQqo"),
            ie = n("yi1v"),
            it = n("Mr9N");

        function ia(e) {
            let t, o, s, i, l, c = (0, r.c)(16),
                {
                    data: u
                } = e,
                h = (0, d.y)(eT.a),
                p = (0, f.a)();
            c[0] !== p ? (t = p.formatMessage(ew.a.headerShare), c[0] = p, c[1] = t) : t = c[1];
            let g = t,
                [v, y] = (0, m.useState)(!1);
            return c[2] !== u || c[3] !== v || c[4] !== h ? (o = () => {
                v || (y(!0), (async function(e, t) {
                    let a = t.sharedPost,
                        [r] = a?.attachments[0]?.kind === "media_generation" ? (0, s9.a)(a, (0, s9.b)(a)) : [],
                        o = () => (0, s8.j)(t.conversation, t.conversation.current_node ?? t.dialogProps.currentNodeId, 1 / 0, void 0, (0, nJ.b)(e.get, t.dialogProps.serverConversationId)),
                        s = crypto.randomUUID();
                    (0, sw.c)(e, {
                        attachmentType: t.attachmentType,
                        contentType: t.contentType,
                        shareId: t.shareId,
                        shareSessionId: s
                    });
                    let i = t.dialogProps.receiverShareLink;
                    if ((0, ie.a)() && null != i && ("conversation" === i.contentType || "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE" === t.attachmentType)) {
                        if ("unsupported" !== await (0, ie.b)(e, {
                                url: i.shareLinkUrl,
                                title: t.dialogProps.title ?? void 0
                            }, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                attachmentType: t.attachmentType,
                                contentType: t.contentType,
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER"
                            })) return;
                        if ("conversation" === i.contentType) return void(0, ns.f)(e, s7.a, {
                            ...t.dialogProps,
                            shareSessionId: s
                        })
                    }
                    if (i?.contentType === "conversation") {
                        let a = (0, sw.b)(e, {
                                actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                                shareId: t.shareId,
                                shareSessionId: s,
                                source: "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER",
                                usedExistingLink: !0,
                                omitSheetType: !0
                            }),
                            r = await (0, s6.a)(Promise.resolve(i.shareLinkUrl));
                        if (a({
                                result: r ? "link-copied" : "copy-failed",
                                shareId: t.shareId
                            }), r) {
                            let {
                                showConversationShareCopiedToast: t
                            } = await n.e(555532).then(n.bind(n, "euaP"));
                            t(e, null, !0 === i.isWorkspaceOnly)
                        } else(0, ns.f)(e, s7.a, {
                            ...t.dialogProps,
                            previewTurns: o(),
                            recoveryShareLink: i,
                            shareSessionId: s
                        });
                        return
                    }(0, ns.f)(e, s7.a, {
                        ...t.dialogProps,
                        image: r?.src == null ? void 0 : {
                            alt: t.dialogProps.title ?? "",
                            item: r,
                            previewSrc: r.src
                        },
                        previewTurns: null != r ? void 0 : o(),
                        privacyNotices: (0, s8.k)({
                            conversation: t.conversation,
                            projectId: null
                        }),
                        shareSessionId: s
                    })
                })(h, u).finally(() => y(!1)))
            }, c[2] = u, c[3] = v, c[4] = h, c[5] = o) : o = c[5], c[6] !== v ? (s = v ? null : (0, a.jsx)(eS.a, {
                asset: it.a
            }), c[6] = v, c[7] = s) : s = c[7], c[8] !== v || c[9] !== g || c[10] !== o || c[11] !== s ? (i = (0, a.jsx)(tl.a, {
                "aria-label": g,
                color: "ghostActive",
                loading: v,
                size: "toolbar",
                uniform: !0,
                onClick: o,
                children: s
            }), c[8] = v, c[9] = g, c[10] = o, c[11] = s, c[12] = i) : i = c[12], c[13] !== g || c[14] !== i ? (l = (0, a.jsx)(ts.a, {
                content: g,
                children: i
            }), c[13] = g, c[14] = i, c[15] = l) : l = c[15], l
        }
        var ir = n("MVHH"),
            io = n("rhKI"),
            is = n("PP3M"),
            ii = n("jAnS"),
            il = n("CFOe"),
            ic = n("WFY2"),
            id = n("JNtf"),
            iu = n("mUDD");

        function ih(e) {
            let t, n, o, s, i, l, c, d, u, h, p, g, m, f = (0, r.c)(31),
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
            f[4] !== v || f[5] !== w ? (o = e => {
                e.preventDefault(), v && w()
            }, f[4] = v, f[5] = w, f[6] = o) : o = f[6], f[7] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(id.e, {
                children: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.title",
                    defaultMessage: "Save chat?"
                })
            }), f[7] = s) : s = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(iu.e, {
                children: (0, a.jsx)(iu.d, {
                    className: "select-none",
                    title: s,
                    subtitle: (0, a.jsx)(id.d, {
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
            }), f[12] = c) : c = f[12], f[13] !== y || f[14] !== l ? (d = (0, a.jsx)(tl.a, {
                color: "secondary",
                disabled: y,
                onClick: l,
                children: c
            }), f[13] = y, f[14] = l, f[15] = d) : d = f[15];
            let I = !v;
            return f[16] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, a.jsx)(eb.a, {
                id: "chatgptConversations.temporaryChat.save.confirm",
                defaultMessage: "Save"
            }), f[16] = u) : u = f[16], f[17] !== y || f[18] !== I ? (h = (0, a.jsx)(tl.a, {
                color: "primary",
                disabled: I,
                loading: y,
                type: "submit",
                children: u
            }), f[17] = y, f[18] = I, f[19] = h) : h = f[19], f[20] !== h || f[21] !== d ? (p = (0, a.jsx)(iu.e, {
                children: (0, a.jsxs)(iu.c, {
                    children: [d, h]
                })
            }), f[20] = h, f[21] = d, f[22] = p) : p = f[22], f[23] !== p || f[24] !== o ? (g = (0, a.jsxs)(iu.b, {
                as: "form",
                onSubmit: o,
                children: [i, p]
            }), f[23] = p, f[24] = o, f[25] = g) : g = f[25], f[26] !== y || f[27] !== g || f[28] !== n || f[29] !== C ? (m = (0, a.jsx)(id.a, {
                open: !0,
                dialogCloseLabel: t,
                onOpenChange: n,
                shouldIgnoreClickOutside: y,
                showDialogClose: C,
                size: "narrow",
                children: g
            }), f[26] = y, f[27] = g, f[28] = n, f[29] = C, f[30] = m) : m = f[30], m
        }

        function ip(e) {
            (0, ta.e)(e).catch(() => {
                ic.a.warning("Failed to acknowledge temporary chat save coachmark")
            })
        }

        function ig(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return n[0] !== o ? (t = (0, a.jsxs)(a.Fragment, {
                children: [null, (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(im, {
                        conversationId: o
                    })
                })]
            }), n[0] = o, n[1] = t) : t = n[1], t
        }

        function im(e) {
            let t, n = (0, r.c)(2),
                {
                    conversationId: o
                } = e;
            return (0, d.z)(is.e) ? (n[0] !== o ? (t = (0, a.jsx)(iv, {
                conversationId: o
            }), n[0] = o, n[1] = t) : t = n[1], t) : null
        }

        function iv(e) {
            let t, n, o, s, i, l, c, u, h, p, g, y, b, x = (0, r.c)(49),
                {
                    conversationId: w
                } = e,
                C = (0, d.y)(eT.a),
                I = (0, f.a)(),
                _ = (0, v._)(),
                [S, j] = (0, m.useState)(!1),
                [T, E] = (0, m.useState)(!1),
                [P, M] = (0, m.useState)(!1),
                [A, k] = (0, m.useState)(!1),
                R = (0, m.useRef)(!1),
                O = (0, d.z)(nd.p).data,
                N = (0, d.x)(tg.j, w),
                F = (0, d.x)(tg._, w),
                z = (0, d.x)(tg.J, w),
                L = (0, d.x)(e8.j, w);
            x[0] !== w || x[1] !== C ? (t = {
                mutationFn: e => {
                    let {
                        sourceConversationId: t,
                        selectedLeafId: n
                    } = e;
                    if (C.get(tg.J, w) || C.get(e8.j, w) || t !== C.get(tg.j, w) || n !== C.get(tg._, w)) throw Error("Cannot save an unavailable temporary chat message");
                    return ni.Request.safePost("/conversation/{conversation_id}/save", {
                        parameters: {
                            path: {
                                conversation_id: t
                            }
                        },
                        requestBody: {
                            selected_leaf_id: n
                        },
                        isExpectedError: iC
                    }).then(iw)
                },
                retry: ix
            }, x[0] = w, x[1] = C, x[2] = t) : t = x[2];
            let {
                mutateAsync: B,
                isPending: D
            } = (0, ey.a)(t), G = null != N && null != F && !z && !L && !D && !T;
            x[3] !== I ? (n = I.formatMessage({
                id: "chatgptConversations.temporaryChat.save.button",
                defaultMessage: "Save chat"
            }), x[3] = I, x[4] = n) : n = x[4];
            let H = n;
            x[5] !== O?.eligibleAnnouncements ? (o = O?.eligibleAnnouncements?.includes(nd.h), x[5] = O?.eligibleAnnouncements, x[6] = o) : o = x[6];
            let q = !0 === o,
                W = !A && (P || q && G);
            x[7] !== w || x[8] !== P || x[9] !== C || x[10] !== W ? (s = () => {
                if (!W || P || R.current) return;
                let e = !1;
                return queueMicrotask(() => {
                    e || R.current || (R.current = !0, (0, ec.a)(C, ir.Bb, {
                        personalizationMode: (0, io.a)((0, is.k)(C, w))
                    }), M(!0), ip(C))
                }), () => {
                    e = !0
                }
            }, i = [w, P, C, W], x[7] = w, x[8] = P, x[9] = C, x[10] = W, x[11] = s, x[12] = i) : (s = x[11], i = x[12]), (0, m.useEffect)(s, i), x[13] !== C ? (l = () => {
                k(!0), R.current || (R.current = !0, ip(C))
            }, x[13] = C, x[14] = l) : l = x[14];
            let U = l;
            x[15] !== G || x[16] !== w || x[17] !== I || x[18] !== _ || x[19] !== B || x[20] !== C || x[21] !== F || x[22] !== N ? (c = async function() {
                let e;
                if (!G || null == N || null == F) return;
                let t = (0, io.a)((0, is.k)(C, w));
                (0, ec.a)(C, ir.Cb, {
                    personalizationMode: t
                });
                try {
                    e = (await B({
                        sourceConversationId: N,
                        selectedLeafId: F
                    })).conversation_id
                } catch (e) {
                    (0, ec.a)(C, ir.Db, {
                        personalizationMode: t,
                        failureCategory: (0, io.b)(e)
                    }), C.get(V.f).danger(I.formatMessage({
                        id: "chatgptConversations.temporaryChat.save.error",
                        defaultMessage: "Couldn't save this chat. Please try again."
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.temporaryChat.save.error"
                        }
                    });
                    return
                }
                E(!0), j(!1), (0, eI.H)(C), (0, eI.K)(C, N, "remove"), (0, eI.K)(C, e, "refresh"), _((0, ii.c)(e), {
                    replace: !0
                }), C.get(V.f).success(I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.success",
                    defaultMessage: "Chat saved. It will now appear in your chat history."
                })), ni.Request.safePost("/conversation/gen_title/{conversation_id}", {
                    parameters: {
                        path: {
                            conversation_id: e
                        }
                    },
                    requestBody: {
                        message_id: F
                    }
                }).then(ib).then(t => {
                    (0, tg.dc)({
                        scope: C,
                        conversationId: e,
                        title: t
                    }), C.query.setData(ta.chatGptConversationQueryById$, e, e => null == e ? e : {
                        ...e,
                        title: t
                    }), (0, eI.H)(C), (0, eI.K)(C, e, "refresh")
                }).catch(iy)
            }, x[15] = G, x[16] = w, x[17] = I, x[18] = _, x[19] = B, x[20] = C, x[21] = F, x[22] = N, x[23] = c) : c = x[23];
            let Q = c,
                $ = !G;
            x[24] !== w || x[25] !== C || x[26] !== W ? (u = () => {
                (0, ec.a)(C, ir.Fb, {
                    personalizationMode: (0, io.a)((0, is.k)(C, w)),
                    coachMarkVisible: W
                }), j(!0)
            }, x[24] = w, x[25] = C, x[26] = W, x[27] = u) : u = x[27], x[28] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, a.jsx)(K.b, {
                icon: {
                    16: tc.pb,
                    20: tc.qb
                }
            }), x[28] = h) : h = x[28], x[29] !== H || x[30] !== $ || x[31] !== u ? (p = (0, a.jsx)(tl.a, {
                "aria-label": H,
                color: "toolbar",
                disabled: $,
                size: "toolbar",
                uniform: !0,
                onClick: u,
                children: h
            }), x[29] = H, x[30] = $, x[31] = u, x[32] = p) : p = x[32];
            let Y = p;
            return x[33] !== U || x[34] !== I || x[35] !== H || x[36] !== Y || x[37] !== W ? (g = W ? (0, a.jsx)(il.a, {
                align: "end",
                description: (0, a.jsx)(eb.a, {
                    id: "chatgptConversations.temporaryChat.save.coachmark.description",
                    defaultMessage: "Want to keep this chat? You can now save it to your history."
                }),
                dismissLabel: I.formatMessage({
                    id: "chatgptConversations.temporaryChat.save.coachmark.dismiss",
                    defaultMessage: "Close tooltip"
                }),
                onDismiss: U,
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
            }), x[33] = U, x[34] = I, x[35] = H, x[36] = Y, x[37] = W, x[38] = g) : g = x[38], x[39] !== G || x[40] !== w || x[41] !== Q || x[42] !== S || x[43] !== D || x[44] !== C ? (y = S ? (0, a.jsx)(ih, {
                canSave: G,
                isPending: D,
                onCancel: () => {
                    (0, ec.a)(C, ir.Ab, {
                        personalizationMode: (0, io.a)((0, is.k)(C, w))
                    })
                },
                onClose: () => j(!1),
                onSave: () => void Q()
            }) : null, x[39] = G, x[40] = w, x[41] = Q, x[42] = S, x[43] = D, x[44] = C, x[45] = y) : y = x[45], x[46] !== g || x[47] !== y ? (b = (0, a.jsxs)(a.Fragment, {
                children: [g, y]
            }), x[46] = g, x[47] = y, x[48] = b) : b = x[48], b
        }

        function iy() {}

        function ib(e) {
            return a7.F({
                title: a7.L()
            }).parse(e).title
        }

        function ix(e, t) {
            return e < 1 && t instanceof eU.FetchError && 412 === t.status && "conversation_precondition_failed" === t.errorCode
        }

        function iw(e) {
            return a7.F({
                conversation_id: a7.L().min(1)
            }).parse(e)
        }

        function iC(e) {
            return 412 === e.status && "conversation_precondition_failed" === e.errorCode
        }
        var iI = n("J8FU"),
            i_ = n("Aluh"),
            iS = n("mG6J");

        function ij(e) {
            let t, n, o = (0, r.c)(14),
                {
                    conversationId: s,
                    shouldBlockExternalEgress: i,
                    widgets: l
                } = e,
                c = (0, d.z)(i_.b);
            if (i) return null;
            if (o[0] !== c || o[1] !== s || o[2] !== l) {
                let e, n, r;
                o[4] !== c || o[5] !== s ? (e = e => c.has((0, on.e)(s, e.messageId)), o[4] = c, o[5] = s, o[6] = e) : e = o[6];
                let i = l.filter(e),
                    d = `chatgpt:${s}`;
                o[7] !== d ? (n = (0, u.Te)(d), o[7] = d, o[8] = n) : n = o[8];
                let h = n;
                o[9] !== h || o[10] !== s ? (r = e => (0, a.jsx)(iS.b, {
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
        var iT = n("JVSG"),
            iE = {
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
            iP = n("YRWn");

        function iM() {
            let e, t, n, o, s, i, l, c, u, h, p, g, f, y, x, C, I = (0, r.c)(46),
                _ = (0, v._)(),
                S = (0, m.useContext)(Z.a);
            I[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                name: "chatgpt.conversations"
            }, I[0] = e) : e = I[0];
            let j = (0, d.x)(w.a, e),
                T = (0, d.z)(E.a),
                P = (0, v.bb)() ?? 0,
                {
                    conversationId: M
                } = (0, v.cb)(),
                {
                    search: A,
                    state: k
                } = (0, v.X)(),
                R = (0, d.x)(tp.a, M ?? null),
                O = (0, d.x)(null == M || t5.e, R ?? M ?? ""),
                N = k?.archivedConversationPreview === !0;
            I[1] !== A ? (t = (0, ii.i)(A), I[1] = A, I[2] = t) : t = I[2];
            let F = t;
            I[3] !== N || I[4] !== F || I[5] !== M ? (n = null == M || (0, tD.e)(M) || F || N ? null : M, I[3] = N, I[4] = F, I[5] = M, I[6] = n) : n = I[6];
            let {
                data: z
            } = (0, d.x)(ta.chatGptConversationQueryById$, n);
            if (null == M) {
                let e;
                return I[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(v.l, {
                    to: "/",
                    replace: !0
                }), I[7] = e) : e = I[7], e
            }
            I[8] !== R || I[9] !== M ? (o = R ?? (0, tD.d)(M), I[8] = R, I[9] = M, I[10] = o) : o = I[10];
            let L = o,
                B = j.isCapable && !T && !O && null != z;
            I[11] !== _ ? (s = e => (_((0, ii.c)(e)), !0), I[11] = _, I[12] = s) : s = I[12];
            let D = s;
            I[13] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, a.jsx)(b.a, {}), l = (0, a.jsx)(W.a.Surface, {}), I[13] = i, I[14] = l) : (i = I[13], l = I[14]), I[15] !== N ? (c = null, I[15] = N, I[16] = c) : c = I[16], I[17] !== L || I[18] !== N || I[19] !== F ? (u = F || N ? null : (0, a.jsx)(e5.a, {
                conversationId: L
            }), I[17] = L, I[18] = N, I[19] = F, I[20] = u) : u = I[20];
            let G = S ?? (B ? D : null),
                H = `${L}:${F}`;
            I[21] === Symbol.for("react.memo_cache_sentinel") ? (h = void 0, I[21] = h) : h = I[21], I[22] !== L || I[23] !== N || I[24] !== F || I[25] !== H || I[26] !== P ? (p = (0, a.jsx)(iA, {
                conversationId: L,
                viewActivation: P,
                isArchivedPreview: N,
                isReadOnlyPreview: !1,
                banner: h,
                isTemporaryChat: F,
                sharedConversationId: null
            }, H), I[22] = L, I[23] = N, I[24] = F, I[25] = H, I[26] = P, I[27] = p) : p = I[27], I[28] !== p || I[29] !== G ? (g = (0, a.jsx)(Z.a, {
                value: G,
                children: p
            }), I[28] = p, I[29] = G, I[30] = g) : g = I[30], I[31] !== g || I[32] !== c || I[33] !== u ? (f = (0, a.jsxs)(a.Fragment, {
                children: [i, l, c, u, g]
            }), I[31] = g, I[32] = c, I[33] = u, I[34] = f) : f = I[34];
            let q = f;
            I[35] !== q || I[36] !== L || I[37] !== N || I[38] !== F ? (y = F || N ? q : (0, a.jsx)(tt, {
                conversationId: L,
                children: q
            }), I[35] = q, I[36] = L, I[37] = N, I[38] = F, I[39] = y) : y = I[39];
            let K = y;
            return I[40] !== q || I[41] !== K ? (x = K, I[40] = q, I[41] = K, I[42] = x) : x = I[42], I[43] !== L || I[44] !== x ? (C = (0, a.jsx)(ty.a, {
                conversationId: L,
                children: x
            }), I[43] = L, I[44] = x, I[45] = C) : C = I[45], C
        }

        function iA(e) {
            let t, n, l, b, w, W, Z, ey, eb, ex, eC, e_, eS, ej, eT, eE, eP, eM, eA, ek, e5, te, tt, ts, ti, tl, tc, td, tu, tm, tf, ty, tb, tw, tC, tI, tj, tT, tH, tq, tW, tK, tV, tU, tQ, t$, tY, tJ, tZ, t1, t8, t9, ne, nt, nn, na, nr, no, ns, ni, nl, nc, nd, nu, nh, np, ng, nm, nf, nv, ny, nb, nx, nw, nC, nI, n_, nS, nj, nT, nE, nP, nA, nN, nz, nD, nG, nH, nK, nX, nZ, n0, n1, n2, n3, n4, n5, n6, n8, n7, n9, ae, at, an, aa, ar, ao = (0, r.c)(566),
                {
                    conversationId: as,
                    viewActivation: ai,
                    isArchivedPreview: al,
                    inlinePreviewLayout: ac,
                    isInlinePreview: ad,
                    hideModelPicker: au,
                    showFilePicker: ah,
                    disableAutoFocus: ap,
                    hideInitialUserMessage: ag,
                    transcriptPresentation: am,
                    scrollOrigin: af,
                    isReadOnlyPreview: av,
                    onSubmitAccepted: ay,
                    isTemporaryChat: ax,
                    sharedConversationId: aw,
                    sharedPostContinuation: aC,
                    requiredSystemHints: aI,
                    routePattern: a_,
                    composerLeadingContent: aS,
                    headerLeadingContent: aj,
                    hideHeaderTitle: aT,
                    banner: aE,
                    onRetryMissingConversation: aP,
                    sharedProjectConversation: aM,
                    workspace: aA
                } = e,
                ak = void 0 === ai ? 0 : ai,
                aR = void 0 !== al && al,
                aO = void 0 !== ad && ad,
                aN = void 0 === ah || ah,
                aF = void 0 !== aT && aT,
                az = (0, d.y)(eg.a),
                aL = (0, m.useContext)(S.a),
                aB = (0, d.x)(ab.f, aL),
                aD = (0, d.z)(null != aB && E.a);
            ao[0] !== aL || ao[1] !== as ? (t = {
                auth: aL,
                conversationId: as
            }, ao[0] = aL, ao[1] = as, ao[2] = t) : t = ao[2];
            let aG = (0, d.x)(null != aL && !aL.isLoading && null === aL.authMethod && ab.h, t),
                {
                    conversationId: aH
                } = (0, v.cb)();
            ao[3] !== as || ao[4] !== aO || ao[5] !== aH || ao[6] !== az || ao[7] !== aA ? (n = () => (0, tD.e)(aO || null != aA || null == az.get(tg.j, as) ? as : aH ?? ""), ao[3] = as, ao[4] = aO, ao[5] = aH, ao[6] = az, ao[7] = aA, ao[8] = n) : n = ao[8];
            let [aq, aW] = (0, m.useState)(n);
            ao[9] !== aq || ao[10] !== as || ao[11] !== az ? (l = () => aq && !az.get(sR.b, as) ? as : null, ao[9] = aq, ao[10] = as, ao[11] = az, ao[12] = l) : l = ao[12];
            let [aK] = (0, m.useState)(l), aV = null != aw || null != aB && !(void 0 !== aC && aC && aD);
            ao[13] !== as || ao[14] !== aR || ao[15] !== aO || ao[16] !== aV || ao[17] !== az ? (b = () => {
                if (!aV && !aR && !aO) return (0, e1.b)(az, as)
            }, w = [as, aR, aO, aV, az], ao[13] = as, ao[14] = aR, ao[15] = aO, ao[16] = aV, ao[17] = az, ao[18] = b, ao[19] = w) : (b = ao[18], w = ao[19]), (0, m.useEffect)(b, w);
            let aU = (0, d.x)(tE.a, as),
                aQ = aV ? null : aU;
            ao[20] !== aw ? (W = () => null == aw ? null : (0, tD.b)(), ao[20] = aw, ao[21] = W) : W = ao[21];
            let [a$] = (0, m.useState)(W), aY = a$ ?? as;
            ao[22] !== aY ? (Z = (0, em.o)({
                routeKind: "chatgpt-thread",
                conversationId: aY
            }), ao[22] = aY, ao[23] = Z) : Z = ao[23];
            let aJ = null != (0, d.x)(ee.c, Z);
            ao[24] !== aY || ao[25] !== aI || ao[26] !== az ? (ey = () => {
                if (null != aI && 0 !== aI.length) return (0, oT.b)(az, aY, aI)
            }, eb = [aY, aI, az], ao[24] = aY, ao[25] = aI, ao[26] = az, ao[27] = ey, ao[28] = eb) : (ey = ao[27], eb = ao[28]), (0, m.useEffect)(ey, eb);
            let aX = (0, m.useRef)(null),
                [aZ, a0] = (0, m.useState)(null),
                [a1, a2] = (0, m.useState)(null);
            ao[29] === Symbol.for("react.memo_cache_sentinel") ? (ex = () => () => a2(null), ao[29] = ex) : ex = ao[29], ao[30] !== ak ? (eC = [ak], ao[30] = ak, ao[31] = eC) : eC = ao[31], (0, m.useLayoutEffect)(ex, eC);
            let [a3, a4] = (0, m.useState)(null), a5 = a1?.activation === ak ? a1.messageId : null, a6 = a3 === ak, a8 = (0, m.useRef)(null);
            ao[32] === Symbol.for("react.memo_cache_sentinel") ? (e_ = () => {
                let e = new AbortController;
                return a8.current = e, () => e.abort()
            }, ao[32] = e_) : e_ = ao[32], ao[33] !== ak ? (eS = [ak], ao[33] = ak, ao[34] = eS) : eS = ao[34], (0, m.useLayoutEffect)(e_, eS);
            let a7 = (0, f.a)(),
                a9 = (0, v._)(),
                re = (0, eH.d)(),
                rt = (0, d.x)(tg.j, as);
            ao[35] !== az ? (ej = e => {
                (0, e2.c)(az, e)
            }, ao[35] = az, ao[36] = ej) : ej = ao[36];
            let rn = (0, m.useEffectEvent)(ej);
            ao[37] !== rt || ao[38] !== rn ? (eT = () => () => {
                null != rt && rn(rt)
            }, ao[37] = rt, ao[38] = rn, ao[39] = eT) : eT = ao[39], ao[40] !== rt ? (eE = [rt], ao[40] = rt, ao[41] = eE) : eE = ao[41], (0, m.useEffect)(eT, eE);
            let ra = (0, d.x)(nJ.a, as),
                rr = (0, d.x)(tg.N, as),
                ro = (0, d.x)(ta.chatGptConversationQueryById$, aV || ax && null != rr ? null : rt);
            (0, d.x)(aV ? null : to.a, rt);
            let rs = (0, d.x)(!aG && t5.e, as),
                ri = rt ?? as,
                rl = (0, d.x)(tg.C, as),
                rc = (0, d.x)(tg.y, as),
                rd = (0, d.x)(tg.T, as),
                ru = (0, d.x)(tg.D, as),
                rh = (0, d.x)(tg.O, as),
                rp = (0, d.x)(tg.cb, as),
                rg = (0, d.x)(tg.Z, as),
                rm = (0, d.x)(tg.$, as),
                rf = (0, d.x)(nW.a, as);
            ao[42] !== a7 || ao[43] !== rf ? (eP = rf ?? a7.formatMessage(ew.a.newChat), ao[42] = a7, ao[43] = rf, ao[44] = eP) : eP = ao[44];
            let rv = eP,
                ry = (0, d.x)(tg.E, as),
                rb = (0, d.x)(tg.gb, as),
                rx = (0, d.x)(ta.n, aw),
                rw = (0, m.useRef)(null),
                rC = rx.isSuccess && null != rx.data ? aw : null;
            ao[45] !== az ? (eM = e => {
                (0, ec.a)(az, s.i, {
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER",
                    action: "CHATGPT_SHARE_FLOW_ACTION_SHARED_CONTENT_VIEWED",
                    contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION",
                    availability: "CHATGPT_SHARE_FLOW_AVAILABILITY_COMPLETE",
                    shareId: e
                })
            }, ao[45] = az, ao[46] = eM) : eM = ao[46];
            let rI = (0, m.useEffectEvent)(eM);
            ao[47] !== rC || ao[48] !== rI ? (eA = () => {
                null != rC && rw.current !== rC && (rw.current = rC, rI(rC))
            }, ao[47] = rC, ao[48] = rI, ao[49] = eA) : eA = ao[49], ao[50] !== rC ? (ek = [rC], ao[50] = rC, ao[51] = ek) : ek = ao[51], (0, m.useEffect)(eA, ek);
            let r_ = (0, d.x)(e8.q, as),
                rS = (0, d.x)(e8.p, as),
                rj = (0, d.x)(e8.n, as),
                rT = (0, d.x)(e8.r, as),
                rE = (0, d.x)(e8.o, as),
                rP = (0, d.x)(e8.j, as),
                rM = (0, d.x)(tg.eb, as),
                rA = (0, d.x)(e8.B, as);
            ao[52] !== rp ? (e5 = (0, tg.Db)(rp), ao[52] = rp, ao[53] = e5) : e5 = ao[53];
            let rk = e5,
                rR = (0, d.x)(tM, as),
                rL = (0, d.z)(T.v),
                rB = (0, d.z)(T.s),
                rW = (0, d.z)(T.u),
                rK = (0, d.z)(T.n),
                rV = (0, d.z)(T.b),
                rU = (0, d.z)(T.o),
                rQ = (0, d.z)(eo.pagesEnabled$);
            ao[54] === Symbol.for("react.memo_cache_sentinel") ? (te = (0, B.a)(), ao[54] = te) : te = ao[54];
            let r$ = (0, eO.f)(te);
            ao[55] === Symbol.for("react.memo_cache_sentinel") ? (tt = (0, et.b)(), ao[55] = tt) : tt = ao[55];
            let rY = (0, eO.f)(tt),
                rJ = null != rr,
                rX = (0, d.z)(sU.f),
                rZ = aV ? rx : ro;
            aq && null != rZ.data && aW(!1);
            let r0 = aq && rJ && null == rZ.data,
                r1 = rZ.isLoading || !r0 && rZ.isError;
            ao[56] !== aZ || ao[57] !== aY || ao[58] !== r1 || ao[59] !== aV || ao[60] !== ax || ao[61] !== az ? (ts = (e, t, n, a) => {
                !(e || az.get(ep.a)) && ((0, e8.b)(az, aY, t, void 0, n, a), aZ?.focus(), aV || r1 || (0, tn.f)(az, aY, {
                    isTemporaryChat: ax
                }))
            }, ao[56] = aZ, ao[57] = aY, ao[58] = r1, ao[59] = aV, ao[60] = ax, ao[61] = az, ao[62] = ts) : ts = ao[62];
            let r2 = ts;
            ao[63] !== as || ao[64] !== aB ? (tl = null == (ti = null == aB ? null : (0, s3.a)(aB, as)) ? void 0 : (0, nY.a)(ti), ao[63] = as, ao[64] = aB, ao[65] = ti, ao[66] = tl) : (ti = ao[65], tl = ao[66]);
            let r3 = tl,
                r4 = ti ?? rZ.data,
                r5 = ry ? rb : r4?.title,
                r6 = (0, d.z)(j.h),
                r8 = (0, d.z)(j.g),
                r7 = "chatgpt-thread" === az.value.routeKind && az.value.workSideChat?.conversationId === as,
                r9 = r4?.conversation_origin ?? rc ?? (null != aA || r7 ? "tpp" : null),
                oe = "tpp" === r9,
                ot = oe && "denied" === rL.status && "go-plan" === rL.reason,
                on = (0, d.z)(eF.e),
                oa = (0, v.X)(),
                or = oa.state;
            (0, d.z)(ev.b);
            let oo = (0, d.x)(eN.e, "3901104270") && or?.openGoalPlan === !0,
                os = (0, eG.a)();
            ao[67] !== r9 ? (tc = (0, F.q)(r9), ao[67] = r9, ao[68] = tc) : tc = ao[68];
            let oi = tc,
                ol = (0, d.z)(t3.b),
                oc = (0, d.z)(!!oi && T.w),
                od = void 0 !== av && av || oc,
                ou = null == on || on.isFullWidth ? void 0 : on.width ?? 420,
                oh = !0 === (0, d.z)(oi ? null : e$.d),
                op = (0, d.z)(oi ? eh.b : eh.a),
                og = !oi && op,
                om = !rY || rU && !oi,
                of = !aV && rU && !oi,
                ov = of && rK,
                oy = aV && r4?.is_read_only === !0 || aM?.is_read_only === !0;
            ao[69] !== as || ao[70] !== aV || ao[71] !== az ? (td = () => null, ao[69] = as, ao[70] = aV, ao[71] = az, ao[72] = td) : td = ao[72];
            let [ob] = (0, m.useState)(td), ox = r4?.gizmo_id ?? rd ?? ob?.gizmoId ?? null;
            ao[73] !== ox || ao[74] !== aV ? (tu = aV || null == ox || (0, tz.a)(ox) ? null : ox, ao[73] = ox, ao[74] = aV, ao[75] = tu) : tu = ao[75];
            let ow = tu,
                oC = (0, d.x)(e9, aY);
            ao[76] !== r4 || ao[77] !== as || ao[78] !== rv || ao[79] !== oa.pathname || ao[80] !== aw || ao[81] !== aB ? (tm = (0, th.d)({
                conversation: r4,
                conversationId: as,
                conversationTitle: rv,
                pathname: oa.pathname,
                sharedConversationId: aw,
                sharedPost: aB
            }), ao[76] = r4, ao[77] = as, ao[78] = rv, ao[79] = oa.pathname, ao[80] = aw, ao[81] = aB, ao[82] = tm) : tm = ao[82];
            let oI = tm,
                o_ = !rW && null == r4 && null == ob,
                oS = null != rt && !rs && !o_ && (rW || rB),
                oj = null;
            aV || (oj = null != r4 ? (0, eI.B)(r4) : (0, tz.a)(rd) ? rd : ob?.projectId ?? null);
            let oE = (0, d.x)(eX.c, aV ? null : as),
                oP = aV || oi || null != oj || oE || null == oC ? ow : oC.id;
            ao[83] !== aY || ao[84] !== oP || ao[85] !== oa.pathname ? (tf = {
                gizmoId: oP,
                conversationId: aY,
                visitKey: oa.pathname
            }, ao[83] = aY, ao[84] = oP, ao[85] = oa.pathname, ao[86] = tf) : tf = ao[86];
            let oM = (0, d.x)(sF.d, tf),
                {
                    data: oA
                } = (0, i.a)({
                    enabled: null != oj,
                    queryFn: () => {
                        if (null == oj) throw Error("Expected a ChatGPT project id");
                        return (0, N.c)(oj)
                    },
                    queryKey: (0, eI.E)(oj ?? ""),
                    staleTime: eD.b.ONE_MINUTE
                }),
                ok = null != oj && (oA?.gizmo.share_recipient !== "private" || (oA?.gizmo.sharing?.subjects?.length ?? 0) > 0);
            ao[87] !== r4?.context_scopes || ao[88] !== oA?.gizmo.gizmo_snorlax_type ? (ty = r4?.context_scopes?.includes("HEALTH") === !0 || oA?.gizmo.gizmo_snorlax_type === "potion", ao[87] = r4?.context_scopes, ao[88] = oA?.gizmo.gizmo_snorlax_type, ao[89] = ty) : ty = ao[89];
            let oR = ty,
                oO = (0, sL.a)(r4?.context_scopes, {
                    projectType: oA?.gizmo.gizmo_snorlax_type,
                    projectId: oj,
                    lockedProjectId: rX?.projectId
                }),
                oN = rs || ok || oR || oO;
            ao[90] !== oA?.gizmo.display.name || ao[91] !== oA?.gizmo.display.name.trim ? (tb = oA?.gizmo.display.name.trim() || null, ao[90] = oA?.gizmo.display.name, ao[91] = oA?.gizmo.display.name.trim, ao[92] = tb) : tb = ao[92];
            let oF = tb,
                oz = oA?.gizmo.display.theme,
                oL = oA?.gizmo.display.emoji;
            ao[93] !== oA ? (tw = "shared" === (0, tL.b)(oA) ? (0, a.jsx)(K.b, {
                icon: {
                    assets: {
                        16: iE,
                        20: iP.a
                    }
                }
            }) : void 0, ao[93] = oA, ao[94] = tw) : tw = ao[94], ao[95] !== oz || ao[96] !== oL || ao[97] !== tw ? (tC = (0, a.jsx)(ed.a, {
                className: "icon-leading",
                size: "leading",
                color: oz,
                icon: oL,
                sharedIcon: tw
            }), ao[95] = oz, ao[96] = oL, ao[97] = tw, ao[98] = tC) : tC = ao[98];
            let oB = tC,
                oD = (0, d.x)(tg.i, as),
                oG = oD?.metadata ?? r4?.context_truncation_continuation,
                oH = aV || ax || null != aM || null == r6 || r4?.owner?.user_id == null || null == oj || r4.owner.user_id === (r8 ? r6.split("__")[0] : r6) ? null : (0, nL.d)(oj, r4.conversation_id, r4.owner.user_id),
                oq = !aV && !aR && !od,
                oW = (0, d.x)(oq ? sZ.c : null, as),
                oK = oW?.isReviewing === !0,
                oV = null == oW ? rr : oW.conversation.mapping,
                oU = null == oW ? rl : oW.conversation.current_node,
                oQ = null == rr ? r4 : null,
                o$ = oV ?? oQ?.mapping,
                oY = (0, eO.i)();
            ao[99] !== o$ || ao[100] !== oY ? (tI = function(e, t) {
                if (null != e && Object.values(e).some(e => e?.message != null && (0, sz.b)(e.message))) return () => (0, eO.d)(t, "2347981323").get("enabled", !1)
            }(o$, oY), ao[99] = o$, ao[100] = oY, ao[101] = tI) : tI = ao[101];
            let oJ = tI,
                oX = (0, d.z)(null != oJ ? eV.h : void 0),
                oZ = (0, d.x)(null != oJ && !aV && !aR && !oK && eW.a, as),
                o0 = (0, d.z)(oZ ? eK.a : void 0);
            ao[102] === Symbol.for("react.memo_cache_sentinel") ? (tj = (0, tr.a)(), ao[102] = tj) : tj = ao[102];
            let o1 = tj;
            ao[103] === Symbol.for("react.memo_cache_sentinel") ? (tT = new WeakMap, ao[103] = tT) : tT = ao[103];
            let o2 = tT;
            ao[104] !== op || ao[105] !== og || ao[106] !== oG || ao[107] !== r9 || ao[108] !== oU || ao[109] !== oV || ao[110] !== ol || ao[111] !== oJ || ao[112] !== oQ || ao[113] !== aR || ao[114] !== aV || ao[115] !== rk || ao[116] !== oi || ao[117] !== rh || ao[118] !== rj || ao[119] !== rE || ao[120] !== rS || ao[121] !== r_ || ao[122] !== rT || ao[123] !== oK || ao[124] !== az.get || ao[125] !== oW?.isEntering || ao[126] !== ra || ao[127] !== rp || ao[128] !== o0 || ao[129] !== oX ? (tH = () => o1({
                conversation: oQ,
                contextContinuation: oG,
                clinicalSearchEnabled: og,
                clinicalCitationsEnabled: op,
                enableCloudBrowserActivity: ol,
                conversationOrigin: r9,
                enableVoiceImageLoadingFix: oJ,
                voiceImageSessionId: oX,
                voiceImageGenerationSpawnIds: o0,
                enableImageGenerationLoadingState: !aV && !aR && !oK && "error" !== rp,
                getRenderTelemetry: e => (0, iI.c)(az.get, e),
                isWorkConversation: oi,
                isStreaming: !aV && !aR && !oK && rk,
                mode: "conversation",
                mcpResponseCache: o2,
                moderationDisclaimersByMessageId: rh,
                ...ra,
                pendingSubmission: null == r_ || aV || oK || oW?.isEntering ? null : {
                    attachments: rj,
                    commentAttachments: rE,
                    prompt: r_,
                    ...rS,
                    selectedTextAttachments: rT
                },
                threadCurrentNode: oU,
                threadMapping: oV
            }), ao[104] = op, ao[105] = og, ao[106] = oG, ao[107] = r9, ao[108] = oU, ao[109] = oV, ao[110] = ol, ao[111] = oJ, ao[112] = oQ, ao[113] = aR, ao[114] = aV, ao[115] = rk, ao[116] = oi, ao[117] = rh, ao[118] = rj, ao[119] = rE, ao[120] = rS, ao[121] = r_, ao[122] = rT, ao[123] = oK, ao[124] = az.get, ao[125] = oW?.isEntering, ao[126] = ra, ao[127] = rp, ao[128] = o0, ao[129] = oX, ao[130] = tH) : tH = ao[130], oW?.isEntering, ao[131] !== tH ? (tq = tH(), ao[131] = tH, ao[132] = tq) : tq = ao[132];
            let {
                isConversationEmpty: o3,
                renderedConversation: o4,
                renderedTurns: o5,
                showPendingLoadingMessage: o6
            } = tq;
            ao[133] !== aO || ao[134] !== oi || ao[135] !== o4 || ao[136] !== az ? (tW = () => {
                if (!aO && oi) return az.set(iT.b, o4), () => {
                    az.get(iT.b) === o4 && az.set(iT.b, null)
                }
            }, tK = [aO, oi, o4, az], ao[133] = aO, ao[134] = oi, ao[135] = o4, ao[136] = az, ao[137] = tW, ao[138] = tK) : (tW = ao[137], tK = ao[138]), (0, m.useEffect)(tW, tK);
            let o8 = (0, d.x)(eZ.g, as),
                o7 = o6 && null == o8,
                o9 = !oi && !aV && !aO && !aR,
                se = (0, d.x)(og || aO || aV ? null : A.a, as),
                st = (se?.length ?? 0) > 0,
                sn = (0, d.x)(o9 ? k.b : null, as),
                sa = JSON.stringify([as, ak]),
                [sr, so] = (0, m.useState)(null),
                ss = function(e, t) {
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
                    let d = null == n ? [] : (0, h.b)(n, F.o),
                        u = null == e || e.visitKey !== c,
                        p = d.find(F.o)?.id ?? (u || i ? null : e.userMessageId),
                        g = i ? null : d.findLast(z)?.id ?? null,
                        m = !u && (i && !e.isPendingUserTurn || !e.isPendingUserTurn && null != p && (null != e.userMessageId || !e.isTurnActive && null != a && a !== e.completionAttemptId) && e.userMessageId !== p),
                        f = new Set(u ? [] : e.observedSummaryRequestIds),
                        v = !u && !m && e.hasConsumedSummaryRequest,
                        y = !v && !u && null != e.conversation && (s || e.isTurnActive || null != a && e.completionAttemptId !== a) && null != g && !f.has(g);
                    if (null != n && (u || null == e.conversation || !s))
                        for (let e of Object.values(n.mapping)) e?.message?.id != null && z(e.message) && f.add(e.message.id);
                    else null != g && f.add(g);
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
                        hasConsumedSummaryRequest: v || null != g,
                        isOpen: o ? !u && e.suppressAutoOpen && e.isOpen : r && (l && (u || !e.hasGoal) || y) || !u && (!m || l) && (!e.hasGoal || l) && e.isOpen,
                        shouldPreventAutoFocus: u || m || l && !e.hasGoal || y && !e.isOpen || e.shouldPreventAutoFocus
                    }
                }(sr, {
                    completionAttemptId: sn,
                    allowAutoOpen: !(0, X.a)("(width < 768px)"),
                    suppressAutoOpen: oo,
                    conversation: o9 && (r0 || !r1) ? o4 : null,
                    isTurnActive: rk,
                    hasGoal: st,
                    isPendingUserTurn: rP && null != r_ && !rk,
                    visitKey: sa
                });
            ss !== sr && so(ss);
            let si = null == aA && !og && !aO && !aV && (oe || o9) && !aR,
                sl = si && o4?.mapping === rr && o4?.current_node === rl,
                sc = (0, d.x)(sl ? tg.q : null, as),
                sd = o4?.mapping,
                su = o4?.current_node;
            ao[139] !== sd || ao[140] !== su ? (tV = c()(() => {
                let e = null == sd ? [] : (0, h.a)({
                    mapping: sd,
                    current_node: su
                });
                return {
                    messages: e,
                    resources: (0, tG.e)(e)
                }
            }), ao[139] = sd, ao[140] = su, ao[141] = tV) : tV = ao[141];
            let sh = tV;
            ao[142] !== o9 || !1 !== ao[143] || ao[144] !== rP || ao[145] !== si || ao[146] !== rk || ao[147] !== oi || ao[148] !== rQ || ao[149] !== rj || ao[150] !== sh || ao[151] !== o5 || ao[152] !== sc ? (tU = si ? c()(() => (0, t0.a)({
                automationReferences: sc,
                includePages: rQ,
                includeSources: oi || !1,
                isTurnActive: rk || rP,
                ...sh(),
                pendingAttachments: rP ? rj : [],
                turns: o5
            })) : null, tQ = o9 ? tU?.() : null, ao[142] = o9, ao[143] = !1, ao[144] = rP, ao[145] = si, ao[146] = rk, ao[147] = oi, ao[148] = rQ, ao[149] = rj, ao[150] = sh, ao[151] = o5, ao[152] = sc, ao[153] = tU, ao[154] = tQ) : (tU = ao[153], tQ = ao[154]);
            let sp = tQ,
                sg = st || null != sp && (sp.outputs.length > 0 || sp.progressSteps.length > 0 || sp.automationIds.length > 0 || sp.subagents.length > 0 || !rs && sp.browserScreenshots.length > 0),
                sm = si && (!o9 || sg),
                sf = sm && null == on,
                sv = JSON.stringify([sa, null != on]),
                sy = o9 ? ss.isOpen : void 0,
                sb = sm && !on?.isFullWidth;
            ao[155] !== ou || ao[156] !== sv || ao[157] !== sy || ao[158] !== sb ? (t$ = {
                contentShiftResetKey: sv,
                controlledIsOpen: sy,
                isEnabled: sb,
                floatingPanelWidth: ou
            }, ao[155] = ou, ao[156] = sv, ao[157] = sy, ao[158] = sb, ao[159] = t$) : t$ = ao[159];
            let sx = (0, eL.a)(t$),
                sw = rt ?? as,
                sC = ru ?? rA,
                sI = rZ.isLoading && !rJ,
                s_ = !sI && (null != r4 || rJ),
                sS = s_ && (r0 || !r1),
                sj = rZ.isError && !r0;
            ao[160] !== rZ.error || ao[161] !== aO ? (tY = aO || (0, eU.e)(rZ.error) || !(rZ.error instanceof eU.FetchError && [401, 403, 404].includes(rZ.error.status)), ao[160] = rZ.error, ao[161] = aO, ao[162] = tY) : tY = ao[162];
            let sT = tY;
            ao[163] !== as || ao[164] !== aV || ao[165] !== rt ? (tJ = null, aV || (tJ = rt ?? ((0, tD.e)(as) ? null : as)), ao[163] = as, ao[164] = aV, ao[165] = rt, ao[166] = tJ) : tJ = ao[166], ao[167] !== a5 || ao[168] !== r4 || ao[169] !== r9 || ao[170] !== a7 || ao[171] !== ax || ao[172] !== oi || ao[173] !== ot || ao[174] !== a9 || ao[175] !== tJ || ao[176] !== a_ || ao[177] !== az || ao[178] !== ak ? (tZ = (e, t) => {
                let n = void 0 !== t && t;
                if (null == tJ || null != a5 || ot) return;
                let a = a8.current?.signal;
                null == a || a.aborted || (a2({
                    messageId: e,
                    activation: ak
                }), (0, tg.h)(az, {
                    conversationId: tJ,
                    messageId: e,
                    inWorkMode: n
                }).then(e => {
                    let {
                        clientThreadId: t
                    } = e;
                    a.aborted || (n && (0, eY.a)(az, "opened"), a9(null == a_ ? (0, ii.c)(t, {
                        isTemporaryChat: ax
                    }) : (0, v.C)(a_, {
                        conversationId: t
                    })))
                }).catch(() => {
                    a.aborted || (n && (0, eY.a)(az, "failed"), a2(null), az.get(V.f).danger(a7.formatMessage({
                        id: "chatgptConversations.branchFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "branch_conversation_failed",
                            operation: "branch_conversation",
                            errorCategory: "conversation",
                            conversationId: tJ ?? void 0,
                            retryable: !0,
                            userFacingError: {
                                surface: (0, tR.b)(null == r9 && null == r4 ? null : oi),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }))
                }))
            }, ao[167] = a5, ao[168] = r4, ao[169] = r9, ao[170] = a7, ao[171] = ax, ao[172] = oi, ao[173] = ot, ao[174] = a9, ao[175] = tJ, ao[176] = a_, ao[177] = az, ao[178] = ak, ao[179] = tZ) : tZ = ao[179];
            let sE = (0, eq.a)(tZ);
            ao[180] !== r4 || ao[181] !== as || ao[182] !== r9 || ao[183] !== a7 || ao[184] !== oh || ao[185] !== ax || ao[186] !== oi || ao[187] !== az || ao[188] !== rt ? (t1 = async (e, t, n, a) => {
                if (!oh) try {
                    await async function(e, t) {
                        let {
                            conversationId: n,
                            isTemporaryChat: a = !1,
                            messageId: r,
                            prompt: o,
                            renderFormat: s,
                            inlineSystemHints: i
                        } = t;
                        if (e.get(e8.j, n)) throw new tS.a("edit_message_busy", "The chat is busy.");
                        let l = e.get(tg.y, n);
                        if ("tpp" === l) throw new tS.a("edit_message_unsupported_conversation", "Work messages cannot be edited with the Chat flow.");
                        if (!e.get(tM, n)) throw new tS.a("edit_message_busy", "The chat is busy.");
                        let c = e.get(t_.b, {
                            conversationId: n,
                            messageId: r
                        });
                        if (null == c) throw new tS.a("edit_message_target_unavailable", "The user message could not be edited.");
                        let {
                            selectedModel: d
                        } = c, u = o.trim(), h = (0, t_.c)(c.message, e.get, i), g = (0, tP.c)({
                            message: c.message,
                            prompt: u,
                            renderFormat: s,
                            systemHints: h,
                            inlineSystemHints: i
                        }), m = (0, p.f)(g.message.metadata), f = g.message.content, v = "multimodal_text" === f.content_type && f.parts.some(e => "string" != typeof e);
                        if (0 === u.length && 0 === m.length && !v) throw new tS.a("edit_message_empty", "The edited message cannot be empty.");
                        if (e.get(eN.e, "3574573347")) {
                            let t = e.get(t_.a, n);
                            t?.messageId === r && t.prompt === o && tx()((0, t_.c)(c.message, e.get, t.inlineSystemHints), h) || (e.set(t_.a, n, {
                                messageId: r,
                                prompt: o,
                                isTemporaryChat: a,
                                inlineSystemHints: i
                            }), (0, tn.f)(e, n, {
                                isTemporaryChat: a
                            }))
                        }
                        let y = tA(e.get, n),
                            b = y.request.current,
                            x = () => tA(e.get, n).request.current === b && tx()(e.get(t_.b, {
                                conversationId: n,
                                messageId: r
                            }), c) && !(0, tg.Db)(e.get(tg.cb, n));
                        e.set(e8.j, n, !0);
                        try {
                            if ("flora" !== l && null != b && null == e.get(y.session$) && null == e.get(tE.a, n) && (await b.stop(), await b.closed), !x()) throw new tS.a("edit_message_target_unavailable", "The edited message or active response changed.");
                            await (0, tP.submitChatGPTCompletion)(e, {
                                isSubmissionCurrent: x,
                                isRequestCurrent: () => e.get(tg.C, n) === g.message.id,
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
                            e.set(e8.j, n, !1)
                        }
                    }(az, {
                        conversationId: as,
                        isTemporaryChat: ax,
                        messageId: e,
                        prompt: t,
                        inlineSystemHints: a,
                        renderFormat: n
                    })
                } catch (t) {
                    let e = (0, tR.c)(t);
                    throw az.get(V.f).danger(a7.formatMessage({
                        id: "chatgptConversations.editMessageFailed",
                        defaultMessage: "Failed to edit message"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.editMessageFailed",
                            operation: "edit_message",
                            apiErrorCode: e.errorCode,
                            retryable: !0,
                            errorCategory: "conversation",
                            conversationId: rt ?? void 0,
                            userFacingError: {
                                ...e,
                                surface: (0, tR.b)(null == r9 && null == r4 ? null : oi),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    }), t
                }
            }, ao[180] = r4, ao[181] = as, ao[182] = r9, ao[183] = a7, ao[184] = oh, ao[185] = ax, ao[186] = oi, ao[187] = az, ao[188] = rt, ao[189] = t1) : t1 = ao[189];
            let sM = (0, eq.a)(t1);
            ao[190] !== aZ || ao[191] !== aY || ao[192] !== r4 || ao[193] !== as || ao[194] !== r9 || ao[195] !== a7 || ao[196] !== oh || ao[197] !== ax || ao[198] !== oi || ao[199] !== ot || ao[200] !== a9 || ao[201] !== aP || ao[202] !== az || ao[203] !== rt ? (t8 = async (e, t) => {
                if (!oh && !ot) try {
                    if ("resume" === t) return void await async function(e, t, n, a) {
                        let r = (0, tp.d)(e.get, t),
                            o = new Set([r, e.get(tp.a, r) ?? t]),
                            s = e.get(k.d, r),
                            i = s?.stoppedResponse,
                            l = e.get(rG, r);
                        if (!(null == s || i?.settings == null || l?.promptMessageId !== n || !l.canResume || e.get(k.f, r) || [...o].some(t => e.get(k.a, t)))) {
                            for (let t of o) e.set(k.a, t, !0);
                            try {
                                let t = i.originalSend;
                                if (t?.checkDelivery && (!rH(e.get, r, n) || await (0, rD.c)(e, r, n, {
                                        expectedIdentity: i.settings.expectedIdentity,
                                        isTemporaryChat: i.settings.isTemporaryChat
                                    })) && (t = void 0), e.get(rG, r)?.promptMessageId !== n || e.get(k.d, r) !== s) return;
                                if (null == t && (null != i.originalSend && e.set(k.e, r, {
                                        ...s,
                                        stoppedResponse: {
                                            ...i,
                                            originalSend: void 0
                                        }
                                    }), !rq(e.get, r, i))) throw Error("Stopped response cannot be regenerated");
                                await (0, rz.a)(e, {
                                    ...i.settings,
                                    allowStoppedResponseResume: !0,
                                    followupCapabilities: a,
                                    ...null != t ? {
                                        message: t.message,
                                        unsentRequest: t.request,
                                        parentMessageId: t.request.parent_message_id ?? void 0,
                                        onServerThreadIdChange: t.onServerThreadIdChange
                                    } : {
                                        regenerateFromMessageId: n,
                                        regeneration: {
                                            source: "try_again",
                                            variantPurpose: "none"
                                        }
                                    },
                                    conversationId: r,
                                    isSubmissionCurrent: () => e.get(rG, r)?.promptMessageId === n,
                                    isRequestCurrent: () => !e.get(rN.a),
                                    submittedAtMs: (0, rF.b)()
                                })
                            } finally {
                                for (let t of o) e.set(k.a, t, !1)
                            }
                        }
                    }(az, as, e, (0, sO.d)(az, aZ?.getLinkHandler?.(), void 0)?.followupCapabilities);
                    let n = az.get(rO.f, as),
                        a = null == az.get(tg.j, as);
                    if (n?.startsNewWorkConversation || a || (0, e0.j)(az.get(tg.X, as)?.metadata?.errorCode)) {
                        if (n?.message.id !== e) return;
                        let r = (0, h.e)(n.prompt),
                            o = (0, O.j)(n.prompt.metadata, r, (0, p.e)(n.prompt.metadata), (0, g.x)(r)),
                            s = (0, L.a)(n.prompt, r, o),
                            i = az.get(e8.u, aY),
                            l = null != s.renderFormat ? s.message : r,
                            c = i.length > 0 ? i : l,
                            d = i.length > 0 ? void 0 : s.renderFormat ?? "plain";
                        if (null != aP) return void await aP(c, d);
                        if (a && "string" == typeof n.prompt.metadata?.model_first_landing_ref) {
                            let e = c;
                            if (null != d) {
                                let t = (0, eu.e)(c, {
                                    defaultTextKind: "plain" === d ? "literal" : "prompt",
                                    enableRichText: !0,
                                    enableFileMentions: !0
                                });
                                e = t.getPersistedText(), t.destroy()
                            }
                            let t = `chatgpt:${as}`;
                            (0, G.E)(t, (t, n) => n ? t : e) || (0, e8._)(az, as, e), (0, G.e)(t);
                            return
                        }
                        if (n.startsNewWorkConversation) {
                            let e = "user" === n.prompt.author.role ? (0, h.i)((0, h.s)(n.prompt.metadata?.serialization_metadata)?.work_handoff_recovery_prompt) : null,
                                t = null != e && e.length <= 1e3 ? e : (0, g.x)(r);
                            (0, H.n)(az, "work"), await a9("/", {
                                state: {
                                    focusComposerNonce: Date.now(),
                                    prefillPrompt: i.length > 0 ? i : t,
                                    prefillPromptFormat: i.length > 0 ? void 0 : "plain",
                                    prefillPromptOnlyIfEmpty: !0
                                }
                            });
                            return
                        }
                        if (oi && !ax && (0, D.db)(az, (0, $.b)({
                                entrypoint: "home"
                            }))) return void await a9("/");
                        let u = (0, h.l)(n.prompt.metadata?.system_hints).filter(e => "search" !== e || !1 !== n.forceUseSearch);
                        !0 !== n.forceUseSearch || u.includes("search") || u.push("search");
                        let m = (0, tF.g)(az, u);
                        (0, e8.$)(az, m, t.model);
                        let f = az.get(tg.T, as);
                        (0, H.n)(az, oi ? "work" : "chat"), await a9({
                            pathname: "/",
                            search: (0, ii.e)("", ax)
                        }, {
                            state: {
                                initialChatGptConversationId: m,
                                project: null,
                                chatGptProjectId: (0, tz.a)(f) ? f : null,
                                chatGptCustomGptId: (0, tz.a)(f) ? null : f,
                                focusComposerNonce: Date.now(),
                                prefillPrompt: c,
                                prefillPromptFormat: d,
                                prefillPromptOnlyIfEmpty: oi
                            }
                        });
                        return
                    }
                    await (0, rO.i)(az, {
                        conversationId: as,
                        isTemporaryChat: ax,
                        messageId: e,
                        retry: oi && "error_retry" === t.source && null == t.model.thinkingEffort ? {
                            ...t,
                            model: az.get(e8.v, as)
                        } : t
                    })
                } catch {
                    az.get(V.f).danger(a7.formatMessage({
                        id: "chatgptConversations.regenerate.failed",
                        defaultMessage: "Failed to regenerate response"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.regenerate.failed",
                            operation: "regenerate_response",
                            errorCategory: "conversation",
                            conversationId: rt ?? void 0,
                            userFacingError: {
                                surface: (0, tR.b)(null == r9 && null == r4 ? null : oi),
                                errorCategory: "CHATGPT_USER_FACING_ERROR_CATEGORY_CONVERSATION"
                            }
                        }
                    })
                }
            }, ao[190] = aZ, ao[191] = aY, ao[192] = r4, ao[193] = as, ao[194] = r9, ao[195] = a7, ao[196] = oh, ao[197] = ax, ao[198] = oi, ao[199] = ot, ao[200] = a9, ao[201] = aP, ao[202] = az, ao[203] = rt, ao[204] = t8) : t8 = ao[204];
            let sA = (0, eq.a)(t8);
            ao[205] !== r4 || ao[206] !== as || ao[207] !== rv || ao[208] !== a7 || ao[209] !== a6 || ao[210] !== ax || ao[211] !== a9 || ao[212] !== re || ao[213] !== oj || ao[214] !== az || ao[215] !== rt || ao[216] !== ob || ao[217] !== ak ? (t9 = () => {
                if (a6 || null == rt) return;
                let e = az.get(T.u);
                if (!e && !az.get(T.s) || !e && null == r4 && null == ob) return;
                let t = a8.current?.signal;
                null == t || t.aborted || (a4(ak), (e ? (0, e4.f)(az, {
                    chatGptThreadId: as,
                    conversationTitle: rv
                }).then(e => {
                    if (null == e) return null;
                    let n = (0, I.a)(az, e);
                    if ("created" === e.status) return null == n || t.aborted || az.get(V.f).danger(n.message, {
                        errorAnalytics: {
                            toastId: "chatgptConversationPage.handleHandoff"
                        }
                    }), e.conversationId;
                    throw (0, I.a)(az, e)
                }) : (0, x.a)({
                    scope: az,
                    projectId: oj ?? void 0,
                    prompt: `Continuing from ${(0,q.f)({conversationId:rt,title:rv?.trim()||"ChatGPT thread"})}`
                }).then(iz)).then(n => {
                    if (!t.aborted) {
                        if (null != n) return void(e ? re(n) : a9((0, ii.c)(n, {
                            isTemporaryChat: ax
                        })));
                        throw Error("Unable to create a Work conversation")
                    }
                }).catch(() => {
                    t.aborted || (a4(null), az.get(V.f).danger(a7.formatMessage({
                        id: "chatgptConversations.handoffFailed",
                        defaultMessage: "Failed to create chat"
                    }), {
                        errorAnalytics: {
                            toastId: "chatgptConversations.handoffFailed"
                        }
                    }))
                }))
            }, ao[205] = r4, ao[206] = as, ao[207] = rv, ao[208] = a7, ao[209] = a6, ao[210] = ax, ao[211] = a9, ao[212] = re, ao[213] = oj, ao[214] = az, ao[215] = rt, ao[216] = ob, ao[217] = ak, ao[218] = t9) : t9 = ao[218];
            let sk = t9;
            ao[219] !== as || ao[220] !== a9 || ao[221] !== az || ao[222] !== a$ || ao[223] !== aw || ao[224] !== aB ? (ne = () => {
                if (null != aB) {
                    if ((0, tD.e)(as)) {
                        let e = (0, ab.a)(az, aB, as);
                        null != e && (az.get(E.a) ? az.set(s5.a, e) : a9((0, ii.c)(e)))
                    }
                    return
                }
                let e = az.query.getData(ta.n, aw);
                null != e && null != aw && null != a$ && ((0, tg.qb)(az, {
                    conversation: e,
                    conversationId: a$,
                    sharedConversationId: aw
                }), az.get(E.a) ? az.set(s5.a, a$) : a9((0, ii.c)(a$)))
            }, ao[219] = as, ao[220] = a9, ao[221] = az, ao[222] = a$, ao[223] = aw, ao[224] = aB, ao[225] = ne) : ne = ao[225];
            let sD = (0, eq.a)(ne);
            ao[226] !== aA ? (nt = aA?.mcpAppContext == null ? null : {
                hostId: ef.a,
                server: "codex_apps",
                connectorId: aA.mcpAppContext.id
            }, ao[226] = aA, ao[227] = nt) : nt = ao[227];
            let sG = (0, d.x)(er.b, nt),
                sH = aA?.fullscreenContent != null ? "content" : "workspace",
                sq = (0, M.a)(aO ? "embedded" : sH),
                sW = !sG && (r0 || !rZ.isError) && !aR && !od && (null == aB || aL?.authMethod === "chatgpt" || aD) && (!aV || null != r4),
                sQ = rV || od || oy || ov || ot,
                s$ = sQ || oK || oW?.needsEntry === !0;
            if (oK) {
                let e;
                ao[228] !== a7 ? (e = a7.formatMessage(sZ.d.readOnlyPlaceholder), ao[228] = a7, ao[229] = e) : e = ao[229], nn = e
            } else !sQ && oW?.needsEntry && (nn = !1);
            let sY = sW && !sQ && !aV && !r1 && !oh && !rk && !rP && !rM && !oM,
                sJ = !sW || aV || s$ || r1 ? null : aZ;
            ao[230] !== op || ao[231] !== og || ao[232] !== ol || ao[233] !== oi || ao[234] !== aQ || ao[235] !== o4 || ao[236] !== o5 || ao[237] !== oK || ao[238] !== az.get || ao[239] !== ra ? (na = oK || null == aQ || null == o4 ? o5 : (0, e7.a)({
                ...o4,
                current_node: aQ.promptMessageId
            }, {
                clinicalSearchEnabled: og,
                clinicalCitationsEnabled: op,
                enableCloudBrowserActivity: ol,
                ...ra,
                isWorkConversation: oi,
                getRenderTelemetry: e => (0, iI.c)(az.get, e)
            }), ao[230] = op, ao[231] = og, ao[232] = ol, ao[233] = oi, ao[234] = aQ, ao[235] = o4, ao[236] = o5, ao[237] = oK, ao[238] = az.get, ao[239] = ra, ao[240] = na) : na = ao[240];
            let s0 = (0, tr.c)({
                    paragen: aQ,
                    hideInitialUserMessage: ag,
                    browserConversationId: void 0,
                    conversationId: as,
                    enableCloudBrowserActivity: ol,
                    errorMessage: sC,
                    branchingMessageId: a5,
                    isReadOnly: aR || od || aV || null != aM,
                    isTemporaryChat: ax,
                    isWorkConversation: oe,
                    onRegenerateResponse: oM || aV || null != aM || aR || od || ov || ot || rk || rP ? void 0 : sA,
                    onEditUserMessage: oM || null == tJ || oe || aR || od || ov || !rR || rP ? void 0 : sM,
                    onFork: null == tJ || ax || ov || ot || aR || od ? void 0 : sE,
                    pendingSubmissionAttachments: rj,
                    shareEnabled: null == ow && !ax && !aV && !aR && !od && !oN,
                    readAloudEnabled: !aV && !od,
                    feedbackEnabled: !aV && !od && null == aM,
                    renderedTurns: na,
                    safetyReview: rg,
                    sharedConversationLastMessageId: ti?.current_node ?? rm ?? (aV ? r4?.current_node : null),
                    showPendingLoadingMessage: o7,
                    showRequestUserInputStatus: sW && !s$ && !r1
                }),
                s2 = (0, d.x)(tB.a, as),
                s6 = s2?.domain === "bio" ? s2.turnSource : void 0,
                [s8, s7] = (0, m.useState)(n$.a.isLoaded);
            ao[241] !== s8 || ao[242] !== s6 ? (nr = () => {
                null == s6 || s8 || n$.a.prefetch().then(() => {
                    s7(n$.a.isLoaded())
                })
            }, no = [s6, s8], ao[241] = s8, ao[242] = s6, ao[243] = nr, ao[244] = no) : (nr = ao[243], no = ao[244]), (0, m.useEffect)(nr, no), ao[245] !== s6 ? (ns = s6 ?? {}, ao[245] = s6, ao[246] = ns) : ns = ao[246], ao[247] !== as || ao[248] !== ns ? (ni = {
                conversationId: as,
                source: ns
            }, ao[247] = as, ao[248] = ns, ao[249] = ni) : ni = ao[249];
            let s9 = (0, d.x)(null == s6 ? null : e3.a, ni),
                {
                    entries: ie,
                    inlineNotice: it
                } = (0, tr.e)(oK ? (0, sZ.a)(s0) : s0, s8 && null != s6 && s9?.promptId != null ? {
                    promptId: s9.promptId,
                    source: s6,
                    sourceModelSlug: s9.sourceModelSlug,
                    structuredCopy: s2?.structuredCopy ?? null
                } : void 0);
            ao[250] !== as || ao[251] !== ow ? (nl = null == ow ? null : (0, a.jsx)(tN.ChatGptGizmoHeader, {
                conversationId: as,
                gizmoId: ow
            }), ao[250] = as, ao[251] = ow, ao[252] = nl) : nl = ao[252];
            let ir = nl;
            ao[253] !== aR || ao[254] !== aV || ao[255] !== oe ? (nc = !oe || aV || aR ? null : (0, a.jsx)(Y.a, {
                hostId: ef.a
            }), ao[253] = aR, ao[254] = aV, ao[255] = oe, ao[256] = nc) : nc = ao[256];
            let io = nc,
                is = !aV && null == aM && !aR && !ax && !rs,
                il = (0, d.x)(!is || aO || od ? null : sB.a, as);
            ao[257] !== as || ao[258] !== az || ao[259] !== is ? (nd = is ? () => {
                let e = az.get(sB.b, as);
                e?.title && sK(az, {
                    conversationId: as,
                    courseId: e.course_id
                }, {
                    preserveFocus: !0
                })
            } : void 0, ao[257] = as, ao[258] = az, ao[259] = is, ao[260] = nd) : nd = ao[260];
            let ic = nd;
            ao[261] !== sY || ao[262] !== as || ao[263] !== oh || ao[264] !== oW ? (nu = null != oW ? (0, a.jsx)("div", {
                className: "max-w-full min-w-0",
                inert: oh,
                children: (0, a.jsx)(nR.a, {
                    children: (0, a.jsx)(nQ, {
                        conversationId: as,
                        placement: "progress",
                        canStartSection: sY
                    })
                })
            }) : null, ao[261] = sY, ao[262] = as, ao[263] = oh, ao[264] = oW, ao[265] = nu) : nu = ao[265];
            let id = nu,
                iu = !oE && !aR && !od,
                ih = !ax && !aV && null != rt,
                ip = !aF && iu && null != rf,
                im = (0, d.x)(!!ip && !ih && !aV && !oi && !!sW && !s$ && t5.d, as),
                iv = ip && ih || im;
            ao[266] !== aj || ao[267] !== oi || ao[268] !== oF ? (nh = (0, U.a)({
                browser: !0
            }) && !oi && null != oF && null == aj, ao[266] = aj, ao[267] = oi, ao[268] = oF, ao[269] = nh) : nh = ao[269];
            let iy = nh;
            ao[270] !== iv || ao[271] !== iy || ao[272] !== oB || ao[273] !== oj || ao[274] !== oF ? (np = iv && null != oj && !iy ? {
                icon: oB,
                name: oF
            } : void 0, ao[270] = iv, ao[271] = iy, ao[272] = oB, ao[273] = oj, ao[274] = oF, ao[275] = np) : np = ao[275];
            let ib = np;
            ao[276] !== as || ao[277] !== oE || ao[278] !== iv || ao[279] !== rf || ao[280] !== ic || ao[281] !== ib ? (ng = oE ? (0, a.jsx)(eJ.BusinessAgentConversationHeader, {
                conversationId: as,
                fallback: null
            }) : (0, a.jsx)(nq, {
                onClick: ic,
                hasTitleMenu: iv,
                project: ib,
                title: rf
            }), ao[276] = as, ao[277] = oE, ao[278] = iv, ao[279] = rf, ao[280] = ic, ao[281] = ib, ao[282] = ng) : ng = ao[282];
            let ix = ng,
                iw = null != oW,
                iC = oE ? null : ir;
            ao[283] !== iy || ao[284] !== oB || ao[285] !== oj || ao[286] !== oF || ao[287] !== ib ? (nm = null != oj && null == ib ? (0, a.jsx)(nB, {
                projectId: oj,
                name: oF,
                icon: oB,
                linkToProject: iy
            }) : null, ao[283] = iy, ao[284] = oB, ao[285] = oj, ao[286] = oF, ao[287] = ib, ao[288] = nm) : nm = ao[288], ao[289] !== aj || ao[290] !== iC || ao[291] !== nm ? (nf = (0, a.jsxs)(a.Fragment, {
                children: [aj, iC, nm]
            }), ao[289] = aj, ao[290] = iC, ao[291] = nm, ao[292] = nf) : nf = ao[292];
            let iS = oE || !aF ? ix : null;
            ao[293] !== ax || ao[294] !== io || ao[295] !== iw || ao[296] !== nf || ao[297] !== iS ? (nv = (0, a.jsx)(nO.a, {
                hasSectionProgress: iw,
                isTemporaryChat: ax,
                leading: nf,
                start: iS,
                startActions: io
            }), ao[293] = ax, ao[294] = io, ao[295] = iw, ao[296] = nf, ao[297] = iS, ao[298] = nv) : nv = ao[298];
            let iM = nv,
                iA = o5.flatMap(iF).flatMap(iN),
                iL = iA.flatMap(iO);
            if (!aV && (rZ.error instanceof eU.FetchError && 423 === rZ.error.status || oO && null == rX)) {
                let e;
                return ao[299] !== rZ || ao[300] !== as || ao[301] !== az ? (e = (0, a.jsx)(sV.a, {
                    onUnlocked: () => {
                        (0, sU.g)(az.get(sU.f)?.projectId, [as]), rZ.refetch()
                    }
                }), ao[299] = rZ, ao[300] = as, ao[301] = az, ao[302] = e) : e = ao[302], e
            }
            if (null != oH) {
                let e;
                return ao[303] !== oH ? (e = (0, a.jsx)(v.l, {
                    replace: !0,
                    to: oH
                }), ao[303] = oH, ao[304] = e) : e = ao[304], e
            }
            let iB = e => iu && ih ? (0, a.jsx)(nM, {
                onTitleClick: ic,
                showMenu: iv || null != e,
                triggerButton: e,
                conversationId: as,
                title: rv,
                isHandoffPending: a6,
                isArchived: r4?.is_archived === !0,
                isChatConversation: null != r4 && !oi,
                onHandoff: oS ? sk : void 0,
                onOpenMessage: async e => {
                    a8.current?.signal.aborted === !1 && az.get(C.b)?.pathname === az.value.pathname && await aX.current?.scrollToMessage(e)
                },
                projectId: oj,
                projectName: oF,
                serverConversationId: rt,
                conversationOrigin: r9
            }) : null;
            ao[305] !== r4?.current_node || ao[306] !== as || ao[307] !== oR || ao[308] !== oO || ao[309] !== aV || ao[310] !== ax || ao[311] !== rk || ao[312] !== oj || ao[313] !== o5.length || ao[314] !== rt || ao[315] !== aM || ao[316] !== rs || ao[317] !== iu || ao[318] !== rl ? (ny = !iu || ax || aV || oO ? null : (0, a.jsx)(tv, {
                conversationId: as,
                projectId: oj,
                sharedProjectConversation: aM,
                isReady: (null != rt || null != aM) && o5.length > 0 && (rl ?? r4?.current_node) != null,
                isRestricted: rs || oR,
                isStreaming: rk
            }), ao[305] = r4?.current_node, ao[306] = as, ao[307] = oR, ao[308] = oO, ao[309] = aV, ao[310] = ax, ao[311] = rk, ao[312] = oj, ao[313] = o5.length, ao[314] = rt, ao[315] = aM, ao[316] = rs, ao[317] = iu, ao[318] = rl, ao[319] = ny) : ny = ao[319];
            let iD = ny,
                iG = null != il ? as : null;
            ao[320] !== r4 || ao[321] !== rJ || ao[322] !== aR || ao[323] !== sI || ao[324] !== aO || ao[325] !== od || ao[326] !== aV || ao[327] !== oi ? (nb = oi || aV || aO || od || aR || sI || null == r4 && !rJ ? null : (0, a.jsx)(P.a, {}), ao[320] = r4, ao[321] = rJ, ao[322] = aR, ao[323] = sI, ao[324] = aO, ao[325] = od, ao[326] = aV, ao[327] = oi, ao[328] = nb) : nb = ao[328], ao[329] !== rZ.fetchStatus || ao[330] !== sj || ao[331] !== aO || ao[332] !== sS ? (nx = !1, ao[329] = rZ.fetchStatus, ao[330] = sj, ao[331] = aO, ao[332] = sS, ao[333] = nx) : nx = ao[333], ao[334] !== rZ.data || ao[335] !== rZ.fetchStatus || ao[336] !== r4 || ao[337] !== as || ao[338] !== sj || ao[339] !== rJ || ao[340] !== o3 || ao[341] !== sI || !1 !== ao[342] || ao[343] !== o5.length ? (nw = null, ao[334] = rZ.data, ao[335] = rZ.fetchStatus, ao[336] = r4, ao[337] = as, ao[338] = sj, ao[339] = rJ, ao[340] = o3, ao[341] = sI, ao[342] = !1, ao[343] = o5.length, ao[344] = nw) : nw = ao[344];
            let iH = !aV && !od && (0, et.c)() ? (0, a.jsx)(en.c, {
                callIds: iL,
                hostId: ef.a,
                conversationId: (0, u.Te)(`chatgpt:${as}`)
            }) : null;
            ao[345] !== rv || ao[346] !== aO || ao[347] !== aB || ao[348] !== aA?.documentTitle ? (nC = aO ? null : (0, a.jsx)(Q.a, {
                title: null == aB ? aA?.documentTitle ?? rv : null
            }), ao[345] = rv, ao[346] = aO, ao[347] = aB, ao[348] = aA?.documentTitle, ao[349] = nC) : nC = ao[349], ao[350] !== as || ao[351] !== aO || ao[352] !== oh || ao[353] !== aV || ao[354] !== ax || ao[355] !== oi || ao[356] !== ie ? (nI = aO || oi ? null : (0, a.jsx)(t4.a, {
                conversationId: as,
                canCopy: !oh,
                paragenEnabled: !aV,
                turns: ie,
                loadHistory: !ax && !aV
            }), ao[350] = as, ao[351] = aO, ao[352] = oh, ao[353] = aV, ao[354] = ax, ao[355] = oi, ao[356] = ie, ao[357] = nI) : nI = ao[357];
            let iq = null != r4 || rJ;
            ao[358] !== sj || ao[359] !== oi || ao[360] !== iq ? (n_ = (0, a.jsx)(eQ.a, {
                isWorkConversation: oi,
                hasConversationContent: iq,
                hasLoadError: sj
            }), ao[358] = sj, ao[359] = oi, ao[360] = iq, ao[361] = n_) : n_ = ao[361], ao[362] !== as || ao[363] !== sj || ao[364] !== s_ || ao[365] !== aO || ao[366] !== oa.pathname || ao[367] !== az || ao[368] !== aw ? (nS = aO || !s_ || sj ? null : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(s1, {
                    sharedConversationId: aw
                }), (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(el.a, {
                        onCommit: () => es.b.contentCommitted(az, as, aw, oa.pathname),
                        onPaint: () => es.b.pagePainted(az, as, aw)
                    }, aw ?? as)
                })]
            }), ao[362] = as, ao[363] = sj, ao[364] = s_, ao[365] = aO, ao[366] = oa.pathname, ao[367] = az, ao[368] = aw, ao[369] = nS) : nS = ao[369];
            let iW = aO || null != aA ? null : (0, a.jsxs)(t6.a, {
                    chatIcon: null == oj ? void 0 : oB,
                    header: iM,
                    title: rf,
                    fullScreenTitle: ix,
                    isArchivedPreview: aR,
                    children: [null == id ? null : (0, a.jsx)(nF, {
                        children: id
                    }), aL?.authMethod === "chatgpt" ? (0, a.jsx)(J.v, {
                        productExperience: oi ? "work" : "chat"
                    }) : null, aV ? (0, a.jsx)(s4.a, {
                        conversationHeader: !0,
                        children: null == oI ? null : (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)(ia, {
                                data: oI
                            })
                        })
                    }) : null, is ? (0, a.jsx)(t7, {
                        conversationId: as,
                        scheduledAutomationId: oo ? or?.sidebarAutomationId : void 0
                    }, as) : null, ax && !aV && !aR && null == ox && null == oP && null == oj && !oR && null != o4 && (0, h.a)(o4).some(iR) ? (0, a.jsx)(_.a.HeaderAction, {
                        actionId: "chatgpt-conversation-save",
                        align: "end",
                        allowsThreadContentOverlap: !1,
                        order: 100,
                        children: (0, a.jsx)(nR.a, {
                            children: (0, a.jsx)(ig, {
                                conversationId: as
                            })
                        })
                    }) : null, iu && (0, a.jsx)(nO.b, {
                        hasTitleMenu: iv,
                        menu: !aF && (iB() ?? (im && (0, a.jsx)(nk, {
                            title: rv,
                            lockdownConversationId: as
                        }))),
                        children: iD
                    })]
                }),
                iK = tO.a,
                iV = !aN || !sW || sq.isHidden || s$ || oM || oh || r1 || aR || od || oy || ov || ot || rM || rP,
                iU = oj,
                iQ = null != oP,
                i$ = ez.c;
            ao[370] !== aO || ao[371] !== os || ao[372] !== oi || ao[373] !== id || ao[374] !== aA ? (nj = aO || null != aA ? id : os && (0, eB.a)() && !oi && (0, a.jsx)("div", {
                className: "h-px",
                "aria-hidden": !0
            }), ao[370] = aO, ao[371] = os, ao[372] = oi, ao[373] = id, ao[374] = aA, ao[375] = nj) : nj = ao[375];
            let iY = null == oW ? "flex h-full min-h-0 flex-col" : "h-full",
                iJ = r5 ?? rv,
                iX = !oh,
                iZ = !aJ && !aO && !aV && !sG && !sq.isHidden,
                i0 = rs || om,
                i1 = on?.isFullWidth === !0,
                i2 = null == on ? sx.contentShift : void 0,
                i3 = oW?.selectedIndex;
            ao[376] !== sY || ao[377] !== as || ao[378] !== oW ? (nT = null != oW ? (0, a.jsx)(nQ, {
                conversationId: as,
                placement: "composer",
                canStartSection: sY
            }) : void 0, ao[376] = sY, ao[377] = as, ao[378] = oW, ao[379] = nT) : nT = ao[379], ao[380] !== as || ao[381] !== oW ? (nE = null != oW ? (0, a.jsx)(nU, {
                conversationId: as
            }) : void 0, ao[380] = as, ao[381] = oW, ao[382] = nE) : nE = ao[382];
            let i4 = !oi,
                i5 = oK ? null : sC;
            ao[383] !== rZ || ao[384] !== sT ? (nP = sT ? () => {
                rZ.refetch({
                    cancelRefetch: !1
                })
            } : void 0, ao[383] = rZ, ao[384] = sT, ao[385] = nP) : nP = ao[385];
            let i6 = o5.length > 0,
                i8 = nn,
                i7 = !oR && (null == oj || null != oA),
                i9 = null == oW && !r7,
                le = rZ.isFetching,
                lt = r0 && !aO && !aV && !oi && null == ox,
                ln = !oK && rk;
            ao[386] !== r4?.is_archived || ao[387] !== as || ao[388] !== aR || ao[389] !== aO || ao[390] !== aV || ao[391] !== ax || ao[392] !== rk || ao[393] !== oi ? (nA = aO || !oi || aV || aR || r4?.is_archived === !0 || ax ? null : (0, a.jsx)(m.Suspense, {
                fallback: null,
                children: (0, a.jsx)(nV, {
                    conversationId: as,
                    isTurnActive: rk
                })
            }), ao[386] = r4?.is_archived, ao[387] = as, ao[388] = aR, ao[389] = aO, ao[390] = aV, ao[391] = ax, ao[392] = rk, ao[393] = oi, ao[394] = nA) : nA = ao[394], ao[395] !== as || ao[396] !== aR || ao[397] !== rt ? (nN = aR ? (0, a.jsx)(eR, {
                conversationId: rt ?? as,
                kind: "chatgpt"
            }, rt ?? as) : void 0, ao[395] = as, ao[396] = aR, ao[397] = rt, ao[398] = nN) : nN = ao[398];
            let la = !oK && o7;
            ao[399] !== oP ? (nz = null != oP ? (0, a.jsx)(sN.GptPluginMigrationBanner, {
                gizmoId: oP
            }) : null, ao[399] = oP, ao[400] = nz) : nz = ao[400], ao[401] !== oS || ao[402] !== sk || ao[403] !== a6 || ao[404] !== ax || ao[405] !== of || ao[406] !== rK ? (nD = of && !ax ? (0, a.jsx)(t2, {
                canConvert: oS,
                isChatInstantAvailable: !rK,
                isConverting: a6,
                onConvert: sk
            }) : null, ao[401] = oS, ao[402] = sk, ao[403] = a6, ao[404] = ax, ao[405] = of, ao[406] = rK, ao[407] = nD) : nD = ao[407], ao[408] !== r2 || ao[409] !== od ? (nG = r2.bind(null, od), ao[408] = r2, ao[409] = od, ao[410] = nG) : nG = ao[410], ao[411] !== sD || ao[412] !== aV || ao[413] !== ay ? (nH = e => {
                ay?.(e), aV && sD()
            }, ao[411] = sD, ao[412] = aV, ao[413] = ay, ao[414] = nH) : nH = ao[414], ao[415] !== rZ.isFetching || ao[416] !== oM || ao[417] !== aY || ao[418] !== oP || ao[419] !== aS || ao[420] !== as || ao[421] !== aX || ao[422] !== ap || ao[423] !== sj || ao[424] !== au || ao[425] !== aK || ao[426] !== s$ || ao[427] !== o3 || ao[428] !== r1 || ao[429] !== sI || ao[430] !== aJ || ao[431] !== aO || ao[432] !== aV || ao[433] !== ax || ao[434] !== oe || ao[435] !== nn || ao[436] !== aI || ao[437] !== af || ao[438] !== ri || ao[439] !== aw || ao[440] !== r3 || ao[441] !== sW || ao[442] !== aN || ao[443] !== iJ || ao[444] !== iX || ao[445] !== iZ || ao[446] !== i0 || ao[447] !== i1 || ao[448] !== i2 || ao[449] !== i3 || ao[450] !== nT || ao[451] !== nE || ao[452] !== i4 || ao[453] !== i5 || ao[454] !== nP || ao[455] !== i6 || ao[456] !== i7 || ao[457] !== i9 || ao[458] !== lt || ao[459] !== ln || ao[460] !== nA || ao[461] !== nN || ao[462] !== la || ao[463] !== nz || ao[464] !== nD || ao[465] !== nG || ao[466] !== nH || ao[467] !== am || ao[468] !== ie || ao[469] !== aA ? (nK = (0, a.jsx)(sP, {
                ref: aX,
                printTitle: iJ,
                trackShownImpressions: iX,
                trackReadState: iZ,
                workspace: aA,
                shouldBlockMcpApps: i0,
                isCoveredByFloatingPanel: i1,
                isFormOnly: aJ,
                isInlinePreview: aO,
                hideModelPicker: au,
                showFilePicker: aN,
                disableAutoFocus: ap,
                transcriptPresentation: am,
                scrollOrigin: af,
                composerRef: a0,
                contentX: i2,
                conversationId: as,
                composerConversationId: aY,
                sectionIndex: i3,
                composerLeadingContent: aS,
                aboveComposerContent: nT,
                historyLoadingContent: nE,
                requiredSystemHints: aI,
                isChatConversation: i4,
                customGptId: oP,
                entries: ie,
                errorMessage: i5,
                hasLoadError: sj,
                onRetryLoad: nP,
                hasRenderableTurns: i6,
                isComposerDisabled: s$,
                readOnlyPlaceholder: i8,
                moreDetailsEnabled: i7,
                isConversationEmpty: o3,
                showEmptyState: i9,
                isConversationFetching: le,
                isConversationLoading: sI,
                isSharedConversation: aV,
                isSubmitDisabled: r1,
                retainLiveModelPicker: lt,
                isTemporaryChat: ax,
                isTurnActive: ln,
                isWorkConversation: oe,
                onboardingPrelude: nA,
                scrollStateConversationId: ri,
                initialResponsePlacementKey: aK,
                sharedConversationId: aw,
                sharedPostRegulatedConnectorKind: r3,
                showComposer: sW,
                archivedPreviewFooter: nN,
                showPendingLoadingMessage: la,
                gptPluginMigrationBanner: nz,
                awaitingGptContinuation: oM,
                workOnlyConversionBanner: nD,
                onAddSelectedText: nG,
                onSubmitAccepted: nH
            }), ao[415] = rZ.isFetching, ao[416] = oM, ao[417] = aY, ao[418] = oP, ao[419] = aS, ao[420] = as, ao[421] = aX, ao[422] = ap, ao[423] = sj, ao[424] = au, ao[425] = aK, ao[426] = s$, ao[427] = o3, ao[428] = r1, ao[429] = sI, ao[430] = aJ, ao[431] = aO, ao[432] = aV, ao[433] = ax, ao[434] = oe, ao[435] = nn, ao[436] = aI, ao[437] = af, ao[438] = ri, ao[439] = aw, ao[440] = r3, ao[441] = sW, ao[442] = aN, ao[443] = iJ, ao[444] = iX, ao[445] = iZ, ao[446] = i0, ao[447] = i1, ao[448] = i2, ao[449] = i3, ao[450] = nT, ao[451] = nE, ao[452] = i4, ao[453] = i5, ao[454] = nP, ao[455] = i6, ao[456] = i7, ao[457] = i9, ao[458] = lt, ao[459] = ln, ao[460] = nA, ao[461] = nN, ao[462] = la, ao[463] = nz, ao[464] = nD, ao[465] = nG, ao[466] = nH, ao[467] = am, ao[468] = ie, ao[469] = aA, ao[470] = nK) : nK = ao[470], ao[471] !== ss || ao[472] !== tU || ao[473] !== o9 || ao[474] !== so || ao[475] !== rs || ao[476] !== sf || ao[477] !== sJ || ao[478] !== sw || ao[479] !== sx ? (nX = sf && null != tU ? (0, a.jsx)(tX, {
                composerActions: sJ,
                conversationId: sw,
                controlledState: o9 ? {
                    isOpen: ss.isOpen,
                    shouldPreventAutoFocus: ss.shouldPreventAutoFocus,
                    onOpenChange: e => {
                        so({
                            ...ss,
                            isOpen: e,
                            shouldPreventAutoFocus: !e && ss.shouldPreventAutoFocus
                        })
                    }
                } : void 0,
                readData: tU,
                display: sx,
                shouldBlockExternalEgress: rs
            }) : null, ao[471] = ss, ao[472] = tU, ao[473] = o9, ao[474] = so, ao[475] = rs, ao[476] = sf, ao[477] = sJ, ao[478] = sw, ao[479] = sx, ao[480] = nX) : nX = ao[480], ao[481] === Symbol.for("react.memo_cache_sentinel") ? (nZ = (0, a.jsx)(tk.a, {}), ao[481] = nZ) : nZ = ao[481], ao[482] !== aO ? (n0 = null, ao[482] = aO, ao[483] = n0) : n0 = ao[483], ao[484] !== oh || ao[485] !== nK || ao[486] !== nX || ao[487] !== n0 || ao[488] !== iY ? (n1 = (0, a.jsxs)("div", {
                className: iY,
                inert: oh,
                children: [nK, nX, nZ, n0]
            }), ao[484] = oh, ao[485] = nK, ao[486] = nX, ao[487] = n0, ao[488] = iY, ao[489] = n1) : n1 = ao[489];
            let lr = !od && (0, et.c)() ? (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(ij, {
                    conversationId: as,
                    shouldBlockExternalEgress: rs || om,
                    widgets: iA.filter(ik)
                }), aV ? null : (0, a.jsx)(ea.a, {
                    blockedWidgetSource: r$ ? void 0 : "descriptor",
                    transcriptMcpAppIds: (0, i_.c)(as, iA, r$),
                    shouldBlockExternalEgress: rs || om
                })]
            }) : null;
            ao[490] !== i$ || ao[491] !== aE || ao[492] !== ou || ao[493] !== n1 || ao[494] !== lr || ao[495] !== nj ? (n2 = (0, a.jsxs)(i$, {
                floatingPanelWidth: ou,
                header: nj,
                banner: aE,
                children: [n1, lr]
            }), ao[490] = i$, ao[491] = aE, ao[492] = ou, ao[493] = n1, ao[494] = lr, ao[495] = nj, ao[496] = n2) : n2 = ao[496], ao[497] !== iK || ao[498] !== aY || ao[499] !== r9 || ao[500] !== ax || ao[501] !== oj || ao[502] !== n2 || ao[503] !== iV || ao[504] !== iQ ? (n3 = (0, a.jsx)(iK, {
                conversationId: aY,
                conversationOrigin: r9,
                disabled: iV,
                isTemporaryChat: ax,
                projectId: iU,
                requiresGizmoId: iQ,
                children: n2
            }), ao[497] = iK, ao[498] = aY, ao[499] = r9, ao[500] = ax, ao[501] = oj, ao[502] = n2, ao[503] = iV, ao[504] = iQ, ao[505] = n3) : n3 = ao[505], ao[506] !== sX || ao[507] !== n3 || ao[508] !== iG || ao[509] !== nb || ao[510] !== nx || ao[511] !== nw || ao[512] !== iH || ao[513] !== nC || ao[514] !== nI || ao[515] !== n_ || ao[516] !== nS || ao[517] !== iW ? (n4 = (0, a.jsxs)(sX, {
                courseChatId: iG,
                children: [nb, nx, nw, iH, nC, nI, n_, nS, iW, null, n3]
            }), ao[506] = sX, ao[507] = n3, ao[508] = iG, ao[509] = nb, ao[510] = nx, ao[511] = nw, ao[512] = iH, ao[513] = nC, ao[514] = nI, ao[515] = n_, ao[516] = nS, ao[517] = iW, ao[518] = n4) : n4 = ao[518];
            let lo = n4,
                ls = !aO && !oe,
                li = aV || !rZ.isFetchedAfterMount || rZ.isFetching || r0 ? null : rZ.error;
            ao[519] !== as || ao[520] !== aO || ao[521] !== az || ao[522] !== aw ? (n5 = e => {
                aO || es.b.loadFailed(az, as, aw, e)
            }, ao[519] = as, ao[520] = aO, ao[521] = az, ao[522] = aw, ao[523] = n5) : n5 = ao[523];
            let ll = sj ? rZ.error : null,
                lc = null == r9 && null == r4 ? null : oi,
                ld = !oi && !sI;
            ao[524] !== aZ || ao[525] !== aY || ao[526] !== it || ao[527] !== aw ? (n6 = {
                conversationId: aY,
                inlineBioSafetyNotice: it,
                composer: aZ,
                sharedConversationId: aw
            }, ao[524] = aZ, ao[525] = aY, ao[526] = it, ao[527] = aw, ao[528] = n6) : n6 = ao[528], ao[529] !== as || ao[530] !== aO || ao[531] !== rt || ao[532] !== aw ? (n8 = aO ? null : (0, es.a)(rt ?? as, aw), ao[529] = as, ao[530] = aO, ao[531] = rt, ao[532] = aw, ao[533] = n8) : n8 = ao[533];
            let lu = !sS;
            return ao[534] !== lu ? (n7 = (0, a.jsx)(o.b, {
                name: "conversation data",
                active: lu
            }), ao[534] = lu, ao[535] = n7) : n7 = ao[535], ao[536] !== oh ? (n9 = (0, a.jsx)(o.b, {
                name: "workspace policy",
                active: oh
            }), ao[536] = oh, ao[537] = n9) : n9 = ao[537], ao[538] !== ac || ao[539] !== lo || ao[540] !== as || ao[541] !== iD || !1 !== ao[542] || ao[543] !== oi || ao[544] !== iB ? (ae = ac ? (0, a.jsx)(ac, {
                buttons: iD,
                conversationId: as,
                isWorkConversation: oi || !1,
                renderMenu: iB,
                children: lo
            }) : lo, ao[538] = ac, ao[539] = lo, ao[540] = as, ao[541] = iD, ao[542] = !1, ao[543] = oi, ao[544] = iB, ao[545] = ae) : ae = ao[545], ao[546] !== n8 || ao[547] !== n7 || ao[548] !== n9 || ao[549] !== ae ? (at = (0, a.jsxs)(ei.h, {
                destinationKey: n8,
                children: [n7, n9, ae]
            }), ao[546] = n8, ao[547] = n7, ao[548] = n9, ao[549] = ae, ao[550] = at) : at = ao[550], ao[551] !== n6 || ao[552] !== at ? (an = (0, a.jsx)(e6.a, {
                value: n6,
                children: at
            }), ao[551] = n6, ao[552] = at, ao[553] = an) : an = ao[553], ao[554] !== ld || ao[555] !== an ? (aa = (0, a.jsx)(y.a, {
                enabled: ld,
                children: an
            }), ao[554] = ld, ao[555] = an, ao[556] = aa) : aa = ao[556], ao[557] !== sT || ao[558] !== rt || ao[559] !== ls || ao[560] !== li || ao[561] !== n5 || ao[562] !== ll || ao[563] !== lc || ao[564] !== aa ? (ar = (0, a.jsx)(R.a, {
                showChatFallback: ls,
                conversationId: rt,
                error: li,
                onInlineLoadError: n5,
                loadError: ll,
                canRetry: sT,
                isWorkConversation: lc,
                children: aa
            }), ao[557] = sT, ao[558] = rt, ao[559] = ls, ao[560] = li, ao[561] = n5, ao[562] = ll, ao[563] = lc, ao[564] = aa, ao[565] = ar) : ar = ao[565], ar
        }

        function ik(e) {
            return "chatgpt-hosted-widget" === e.type
        }

        function iR(e) {
            return "user" === e.author.role
        }

        function iO(e) {
            return "mcp-tool-call" === e.type ? [e.callId] : []
        }

        function iN(e) {
            return "chatgpt-reasoning-group" === e.type ? e.items : e
        }

        function iF(e) {
            let {
                turn: t
            } = e;
            return t.items
        }

        function iz(e) {
            return "threadId" in e ? e.threadId : e.clientThreadId
        }
    }),
    Ppno: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
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
                let t, n, g, m, f, v, y, b, x, w, C, I, _, S, j, T, E, P, M = (0, r.c)(73),
                    {
                        initialPlacementKey: A,
                        isActiveVoiceConversation: k,
                        isLoadingHistory: R,
                        latestUserTurnKey: O,
                        conversationId: N,
                        onResponseSpacerStateChange: F,
                        preserveResponseViewport: z
                    } = e,
                    L = void 0 !== k && k,
                    B = void 0 !== R && R,
                    D = (0, i.i)();
                M[0] !== L || M[1] !== D ? (t = L && (0, i.d)(D, "2825211774").get("voice_orb_transcript_clearance_enabled", !1), M[0] = L, M[1] = D, M[2] = t) : t = M[2];
                let G = t,
                    H = (0, s.useRef)(O),
                    q = (0, o.x)(null == N ? 0 : u.b, N ?? ""),
                    W = (0, s.useRef)(q),
                    K = (0, s.useRef)(B),
                    V = (0, s.useRef)(null),
                    U = (0, s.useRef)(null),
                    Q = (0, s.useRef)(null),
                    $ = (0, d.b)();
                M[3] !== $ ? (n = () => new c.a($), M[3] = $, M[4] = n) : n = M[4];
                let [Y] = (0, s.useState)(n), {
                    clear: J,
                    consumeGrowth: X,
                    getHeightPx: Z,
                    ensureScrollRoomForAnchor: ee,
                    place: et,
                    prepareThreadEndContent: en
                } = Y, {
                    addScrollListener: ea,
                    getScrollElement: er,
                    responseSpacerController: eo
                } = $;
                M[5] !== er || M[6] !== O || M[7] !== et || M[8] !== z || M[9] !== Y || M[10] !== $ || M[11] !== G ? (g = e => {
                    if (!z?.(e => {
                            let t = er();
                            null != t && et(p(t, e) ?? void 0)
                        })) {
                        if (null == e && null != O && !G) {
                            $.holdViewport(), V.current = {
                                previousKey: O,
                                signal: Y.getPendingPlacementSignal()
                            };
                            return
                        }
                        et(e)
                    }
                }, M[5] = er, M[6] = O, M[7] = et, M[8] = z, M[9] = Y, M[10] = $, M[11] = G, M[12] = g) : g = M[12];
                let es = (0, h.a)(g);
                M[13] !== J || M[14] !== $ ? (m = e => {
                    J(), $.scrollToBottom(e)
                }, M[13] = J, M[14] = $, M[15] = m) : m = M[15];
                let ei = (0, h.a)(m);
                M[16] !== ei || M[17] !== q ? (f = () => {
                    W.current !== q && (W.current = q, ei())
                }, v = [q, ei], M[16] = ei, M[17] = q, M[18] = f, M[19] = v) : (f = M[18], v = M[19]), (0, s.useLayoutEffect)(f, v), M[20] !== X || M[21] !== Z || M[22] !== en || M[23] !== Y.height || M[24] !== Y.holdViewport || M[25] !== eo || M[26] !== ei ? (y = () => eo.register({
                    consumeGrowth: X,
                    getHeightPx: Z,
                    holdViewport: Y.holdViewport,
                    prepareThreadEndContent: en,
                    scrollToBottom: ei
                }, Y.height).dispose, M[20] = X, M[21] = Z, M[22] = en, M[23] = Y.height, M[24] = Y.holdViewport, M[25] = eo, M[26] = ei, M[27] = y) : y = M[27], M[28] !== X || M[29] !== Z || M[30] !== en || M[31] !== Y || M[32] !== eo || M[33] !== ei ? (b = [X, Z, en, Y, eo, ei], M[28] = X, M[29] = Z, M[30] = en, M[31] = Y, M[32] = eo, M[33] = ei, M[34] = b) : b = M[34], (0, s.useInsertionEffect)(y, b), M[35] !== Y ? (x = (e, t) => {
                    let n = V.current;
                    null != n && n.previousKey !== e && (V.current = null, n.signal.aborted || Y.revealSubmittedTurn(t)), U.current = {
                        turnKey: e,
                        element: t
                    }, Q.current?.(e, t)
                }, M[35] = Y, M[36] = x) : x = M[36];
                let el = (0, h.a)(x);
                M[37] === Symbol.for("react.memo_cache_sentinel") ? (w = e => {
                    Q.current = e;
                    let t = U.current;
                    return null != t && e(t.turnKey, t.element), () => {
                        Q.current = null
                    }
                }, M[37] = w) : w = M[37];
                let ec = (0, h.a)(w);
                M[38] !== er || M[39] !== O || M[40] !== et || M[41] !== G ? (C = () => {
                    let e = er();
                    if (null != e && 0 !== e.clientHeight)
                        if (G && null != O) {
                            let t = p(e, O);
                            if (null == t) return;
                            et(t)
                        } else et()
                }, M[38] = er, M[39] = O, M[40] = et, M[41] = G, M[42] = C) : C = M[42];
                let ed = (0, s.useEffectEvent)(C);
                return M[43] !== J || M[44] !== X || M[45] !== ee || M[46] !== Z || M[47] !== F || M[48] !== el || M[49] !== es || M[50] !== G ? (I = () => (F({
                    voiceAutoScrollEnabled: G,
                    clear: J,
                    consumeGrowth: X,
                    getHeightPx: Z,
                    ensureScrollRoomForAnchor: ee,
                    onTurnLayoutReady: el,
                    place: es
                }), () => {
                    F(null)
                }), _ = [J, X, Z, ee, F, el, es, G], M[43] = J, M[44] = X, M[45] = ee, M[46] = Z, M[47] = F, M[48] = el, M[49] = es, M[50] = G, M[51] = I, M[52] = _) : (I = M[51], _ = M[52]), (0, s.useLayoutEffect)(I, _), M[53] !== er || M[54] !== B || M[55] !== O || M[56] !== es || M[57] !== Y || M[58] !== ec || M[59] !== G ? (S = () => {
                    let e = H.current,
                        t = K.current;
                    if (H.current = O, K.current = B, G && !B && !t && null != O && O !== e) {
                        var n, a, r, o, s;
                        let e, t, i, l, c;
                        return n = O, a = er, r = es, o = ec, s = Y.getPendingPlacementSignal(), t = null, i = null, l = !1, c = () => {
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
                }, j = [er, B, O, es, ec, Y, G], M[53] = er, M[54] = B, M[55] = O, M[56] = es, M[57] = Y, M[58] = ec, M[59] = G, M[60] = S, M[61] = j) : (S = M[60], j = M[61]), (0, s.useLayoutEffect)(S, j), M[62] !== ea || M[63] !== A || M[64] !== ed || M[65] !== Y ? (T = () => {
                    if (null == A) return;
                    let e = Y.getPendingPlacementSignal();
                    return ea(() => {
                        e.aborted || ed()
                    })
                }, M[62] = ea, M[63] = A, M[64] = ed, M[65] = Y, M[66] = T) : T = M[66], M[67] !== ea || M[68] !== A || M[69] !== Y ? (E = [ea, A, Y], M[67] = ea, M[68] = A, M[69] = Y, M[70] = E) : E = M[70], (0, s.useLayoutEffect)(T, E), M[71] !== Y ? (P = (0, a.jsx)(l.a, {
                    controller: Y
                }), M[71] = Y, M[72] = P) : P = M[72], P
            }
        })
    }),
    TRQ3: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("zd8w"),
            i = n("rEML"),
            l = n("OWtl"),
            c = n("Ow2S"),
            d = n("wwvo"),
            u = n("x4uR"),
            h = n("u4MG"),
            p = n("OOaz"),
            g = n("dQRk"),
            m = n("jAnS");
        let f = (0, o.d)(l.a, (e, t) => {
            let {
                get: n
            } = t, a = n(g.j, e);
            return null != a ? a : n(g.E, e) || n(c.j, e) || null != n(c.A, e) ? void 0 : null
        });

        function v(e) {
            let t, n, a = (0, r.c)(7),
                {
                    to: o,
                    mask: l,
                    sourceKey: c,
                    state: d
                } = e,
                u = (0, s.useContext)(i.c)?.router;
            return a[0] !== l || a[1] !== u || a[2] !== c || a[3] !== d || a[4] !== o ? (t = () => {
                u?.state.location.key === c && "idle" === u.state.navigation.state && u.navigate(o, {
                    replace: !0,
                    mask: l,
                    state: d
                })
            }, n = [u, o, l, c, d], a[0] = l, a[1] = u, a[2] = c, a[3] = d, a[4] = o, a[5] = t, a[6] = n) : (t = a[5], n = a[6]), (0, s.useEffect)(t, n), null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, c, y, b, x = (0, r.c)(53),
                    {
                        children: w,
                        conversationId: C,
                        routePattern: I,
                        homePath: _
                    } = e,
                    S = void 0 === _ ? "/" : _,
                    j = (0, o.y)(l.a),
                    {
                        hash: T,
                        key: E,
                        mask: P,
                        pathname: M,
                        search: A,
                        state: k
                    } = (0, i.X)(),
                    {
                        conversationId: R,
                        gizmoId: O
                    } = (0, i.cb)(),
                    N = (0, o.x)(f, C),
                    F = (0, o.x)(g.E, C),
                    z = (0, o.x)(g.T, C),
                    L = F ? z : O;
                x[0] !== L ? (t = null != L && (0, h.a)(L) ? L : null, x[0] = L, x[1] = t) : t = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (n = {
                    enabled: !1
                }, x[2] = n) : n = x[2];
                let {
                    data: B
                } = (0, o.x)(u.b, t, n);
                x[3] !== L ? (s = null == L || (0, h.a)(L) ? null : L, x[3] = L, x[4] = s) : s = x[4], x[5] === Symbol.for("react.memo_cache_sentinel") ? (c = {
                    enabled: !1
                }, x[5] = c) : c = x[5];
                let {
                    data: D
                } = (0, o.x)(d.b, s, c);
                if (null === N || (0, m.i)(A) && null != N && !F) {
                    let e;
                    return x[6] !== S || x[7] !== A ? (e = (0, a.jsx)(i.l, {
                        replace: !0,
                        to: {
                            pathname: S,
                            search: A
                        }
                    }), x[6] = S, x[7] = A, x[8] = e) : e = x[8], e
                }
                if (x[9] !== C || x[10] !== R || x[11] !== D || x[12] !== L || x[13] !== T || x[14] !== E || x[15] !== P || x[16] !== M || x[17] !== B || x[18] !== N || x[19] !== I || x[20] !== j || x[21] !== A || x[22] !== k) {
                    let e = null != I ? (0, i.C)(I, {
                            conversationId: N ?? C
                        }) : (0, m.c)(N ?? C, {
                            gizmoId: B?.gizmo.short_url ?? D?.gizmo.short_url ?? L
                        }),
                        t = new URLSearchParams(A),
                        n = null != N && t.has("mfr"),
                        r = j.get(g.y, C),
                        o = k;
                    if (n) {
                        let e, n;
                        if (t.delete("mfr"), x[24] !== k ? (e = k ?? {}, x[24] = k, x[25] = e) : e = x[25], x[26] !== e) {
                            let {
                                modelFirstLanding: t,
                                modelFirstFallback: a,
                                ...r
                            } = e;
                            n = r, x[26] = e, x[27] = n
                        } else n = x[27];
                        o = n
                    }
                    if (null != R && (0, p.e)(R) && null != N) {
                        let e;
                        x[28] !== o ? (e = {
                            ...o,
                            fromChatGptFirstSend: !0
                        }, x[28] = o, x[29] = e) : e = x[29], o = e
                    }
                    if (y = null, M !== e || n) {
                        let s, l = (0, i.y)({
                            hash: n ? "" : T,
                            pathname: e,
                            search: n ? t.toString() : A
                        });
                        if ("tpp" === r || "flora" === r || k?.workTurnVisit != null) {
                            let e, t, n = o,
                                a = k?.workTurnVisit;
                            x[30] !== E || x[31] !== j || x[32] !== a ? (e = (0, m.f)(j, E, a), x[30] = E, x[31] = j, x[32] = a, x[33] = e) : e = x[33], x[34] !== o || x[35] !== e ? (t = {
                                ...n,
                                workTurnVisit: e
                            }, x[34] = o, x[35] = e, x[36] = t) : t = x[36], o = t
                        }
                        let c = k?.businessProfileShareConversation;
                        if (null != c && (c.conversationId === C || c.conversationId === R)) {
                            let e, t, n = N ?? C;
                            x[37] !== c || x[38] !== n ? (e = {
                                ...c,
                                conversationId: n
                            }, x[37] = c, x[38] = n, x[39] = e) : e = x[39], x[40] !== o || x[41] !== e ? (t = {
                                ...o,
                                businessProfileShareConversation: e
                            }, x[40] = o, x[41] = e, x[42] = t) : t = x[42], o = t
                        }
                        x[43] !== E || x[44] !== P || x[45] !== o || x[46] !== N || x[47] !== c || x[48] !== l ? (s = P && null != c && (c.intent?.destination?.kind !== "agent" || null == N) ? (0, a.jsx)(v, {
                            to: l,
                            mask: P,
                            sourceKey: E,
                            state: o
                        }) : (0, a.jsx)(i.l, {
                            replace: !0,
                            state: o,
                            to: l
                        }), x[43] = E, x[44] = P, x[45] = o, x[46] = N, x[47] = c, x[48] = l, x[49] = s) : s = x[49], y = s
                    }
                    x[9] = C, x[10] = R, x[11] = D, x[12] = L, x[13] = T, x[14] = E, x[15] = P, x[16] = M, x[17] = B, x[18] = N, x[19] = I, x[20] = j, x[21] = A, x[22] = k, x[23] = y
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
            o = n("Q840"),
            s = n("zd8w"),
            i = n("Q2Qp"),
            l = n("tSEg"),
            c = n("JCJj"),
            d = n("iS3k");

        function u(e) {
            return null != e
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, h, p = (0, r.c)(7),
                    {
                        getContentKey: g,
                        openingPanel: m
                    } = e,
                    f = (0, o.y)(l.a),
                    v = (0, o.z)(c.e) ?? m,
                    y = (0, s.useContext)(i.a);
                return p[0] !== f ? (t = () => (f.set(c.f, !0), () => {
                    f.set(c.f, !1), (0, c.a)(f)
                }), n = [f], p[0] = f, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), (0, s.useLayoutEffect)(t, n), p[3] !== g || p[4] !== y || p[5] !== v ? (h = null == v ? null : (0, a.jsx)(a.Fragment, {
                    children: [...(0, c.b)(v), v.overlay].filter(u).map(e => (0, a.jsx)(d.a.Root, {
                        animateOnMount: e.animateOnMount ?? !0,
                        fillHeight: !0,
                        fullWidth: e.isFullWidth,
                        fullWidthTransition: e.fullWidthTransition,
                        isPIPObstacle: !1,
                        portalContainer: y,
                        reserveToolbarSpace: e.reserveToolbarSpace ?? !0,
                        shouldHideInlineImmediately: e !== v && e !== v.overlay,
                        shouldShow: !0,
                        width: e.width ?? 420,
                        children: (0, a.jsx)(d.a.Content, {
                            className: "h-full",
                            "aria-label": e.label,
                            role: "complementary",
                            scrollable: !1,
                            children: e.content
                        })
                    }, g?.(e.content) ?? e.renderKey))
                }), p[3] = g, p[4] = y, p[5] = v, p[6] = h) : h = p[6], h
            }
        })
    }),
    zrki: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("mBJV"),
            s = n("Q840"),
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
            x = n("d1Ra"),
            w = n("yGJW"),
            C = n("gBBC"),
            I = n("OWtl"),
            _ = n("hZax"),
            S = n("JYRT"),
            j = n("wwvo"),
            T = n("jeai"),
            E = n("wrCb"),
            P = n("H7Nt"),
            M = n("vzxm"),
            A = n("jAnS"),
            k = n("oTAb"),
            R = n("YO3u"),
            O = n("z7pB"),
            N = n("I5s4");
        let F = (0, v.a)(async () => (await Promise.all([n.e(680612), n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(480171), n.e(716164), n.e(74952)]).then(n.bind(n, "eZlv"))).GptHeaderAboutDialog);

        function z(e) {
            let t, n, v, T, z, L, B, D, G, H, q, W, K, V, U, Q, $, Y, J, X, Z = (0, r.c)(56),
                {
                    gizmo: ee
                } = e,
                et = (0, s.y)(I.a),
                en = (0, l.a)(),
                {
                    search: ea
                } = (0, d.X)(),
                er = (0, d._)(),
                [eo, es] = (0, i.useState)(!1),
                ei = (0, _.f)("2160578039"),
                el = (0, s.x)(S.a, "2513446768"),
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
            Z[5] === Symbol.for("react.memo_cache_sentinel") ? (v = (0, E.a)("/gpts/editor"), Z[5] = v) : v = Z[5];
            let eg = `${v}/${encodeURIComponent(ee.gizmo.id)}`;
            Z[6] !== ee.gizmo.id || Z[7] !== ee.gizmo.short_url ? (T = ee.gizmo.short_url?.trim() || ee.gizmo.id, Z[6] = ee.gizmo.id, Z[7] = ee.gizmo.short_url, Z[8] = T) : T = Z[8], Z[9] !== T ? (z = (0, M.c)(T), Z[9] = T, Z[10] = z) : z = Z[10], Z[11] !== ea ? (L = (0, A.e)("", (0, A.i)(ea)), Z[11] = ea, Z[12] = L) : L = Z[12];
            let em = `${z}${L}`;
            Z[13] !== en ? (B = en.formatMessage({
                id: "chatgptConversations.customGpt.actionsMenu",
                defaultMessage: "GPT actions"
            }), Z[13] = en, Z[14] = B) : B = Z[14];
            let ef = B;
            Z[15] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)(x.a, {
                className: "icon-sm"
            }), Z[15] = D) : D = Z[15], Z[16] !== ef ? (G = (0, a.jsx)(p.a, {
                "aria-label": ef,
                className: "conversation-header-control",
                color: "ghost",
                size: "icon",
                children: D
            }), Z[16] = ef, Z[17] = G) : G = Z[17], Z[18] !== ee.gizmo.gizmo_type || Z[19] !== ee.gizmo.id || Z[20] !== er || Z[21] !== em || Z[22] !== et ? (H = "gpt" === ee.gizmo.gizmo_type ? (0, a.jsxs)(g.c.Item, {
                href: em,
                onClick: e => {
                    e.defaultPrevented || ((0, w.a)(et, o.uc, {
                        stage: "CHATGPT_NEW_CHAT_ENTRY_STAGE_ENTRY",
                        entryPoint: "CHATGPT_NEW_CHAT_ENTRY_POINT_GPT_MENU",
                        location: "CHATGPT_NEW_CHAT_ENTRY_LOCATION_GIZMO_INFORMATION_DROPDOWN",
                        gizmoId: ee.gizmo.id
                    }), 0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || (e.preventDefault(), es(!1), (0, C.d)(et, null), (0, h.n)(et, "chat"), er(em, {
                        state: {
                            focusComposerNonce: Date.now()
                        }
                    })))
                },
                children: [(0, a.jsx)(g.c.ItemIcon, {
                    children: (0, a.jsx)(f.Yh, {})
                }), (0, a.jsx)(c.a, {
                    id: "chatgptConversations.customGpt.newChat",
                    defaultMessage: "New chat"
                })]
            }) : null, Z[18] = ee.gizmo.gizmo_type, Z[19] = ee.gizmo.id, Z[20] = er, Z[21] = em, Z[22] = et, Z[23] = H) : H = Z[23], Z[24] !== ee || Z[25] !== et ? (q = () => (0, y.f)(et, F, {
                accountId: et.get(u.f),
                resource: ee
            }), Z[24] = ee, Z[25] = et, Z[26] = q) : q = Z[26], Z[27] === Symbol.for("react.memo_cache_sentinel") ? (W = (0, a.jsx)(g.c.ItemIcon, {
                children: (0, a.jsx)(f.me, {})
            }), K = (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.about",
                defaultMessage: "About"
            }), Z[27] = W, Z[28] = K) : (W = Z[27], K = Z[28]), Z[29] !== q ? (V = (0, a.jsxs)(g.c.Item, {
                onSelect: q,
                children: [W, K]
            }), Z[29] = q, Z[30] = V) : V = Z[30];
            let ev = ep ? N.a : O.a;
            return Z[31] !== ee || Z[32] !== en || Z[33] !== ep || Z[34] !== et ? (U = () => {
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
            }, Z[31] = ee, Z[32] = en, Z[33] = ep, Z[34] = et, Z[35] = U) : U = Z[35], Z[36] !== ep ? (Q = ep ? (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.unpin",
                defaultMessage: "Unpin GPT"
            }) : (0, a.jsx)(c.a, {
                id: "chatgptConversations.customGpt.pin",
                defaultMessage: "Pin GPT"
            }), Z[36] = ep, Z[37] = Q) : Q = Z[37], Z[38] !== ev || Z[39] !== U || Z[40] !== Q ? ($ = (0, a.jsx)(g.c.Item, {
                leftIconAsset: ev,
                onSelect: U,
                children: Q
            }), Z[38] = ev, Z[39] = U, Z[40] = Q, Z[41] = $) : $ = Z[41], Z[42] !== eu || Z[43] !== eg || Z[44] !== ee.gizmo.current_user_permission?.can_view_config ? (Y = eu || ee.gizmo.current_user_permission?.can_view_config ? (0, a.jsx)(g.c.Item, {
                href: eg,
                leftIconAsset: eu ? R.a : k.a,
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
            }) : null, Z[42] = eu, Z[43] = eg, Z[44] = ee.gizmo.current_user_permission?.can_view_config, Z[45] = Y) : Y = Z[45], Z[46] !== ee ? (J = (0, a.jsx)(P.a, {
                resource: ee
            }), Z[46] = ee, Z[47] = J) : J = Z[47], Z[48] !== eo || Z[49] !== H || Z[50] !== V || Z[51] !== $ || Z[52] !== Y || Z[53] !== J || Z[54] !== G ? (X = (0, a.jsxs)(g.a, {
                align: "start",
                contentWidth: "menu",
                open: eo,
                onOpenChange: es,
                triggerButton: G,
                children: [H, V, $, Y, J]
            }), Z[48] = eo, Z[49] = H, Z[50] = V, Z[51] = $, Z[52] = Y, Z[53] = J, Z[54] = G, Z[55] = X) : X = Z[55], X
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
                }) : null, c[5] = p, c[6] = o) : o = c[6], c[7] !== h ? (i = (0, a.jsx)(T.a, {
                    children: (0, a.jsx)(z, {
                        gizmo: h
                    })
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
                        pendingAttachments: I = [],
                        resources: _ = (0, p.e)(C),
                        turns: S,
                        isTurnActive: j = S.at(-1)?.turn.status === "in_progress"
                    } = e,
                    T = [..._.inputs],
                    E = w ? (0, g.a)(C, S) : [],
                    P = new Map,
                    M = new Map,
                    A = (t = C, -1 !== (n = r()(t, e => e?.recipient === "turn_plan.update_turn_plan" && (0, v.b)(e)?.item?.type === "todo-list")) && t.slice(n + 1).some(e => "assistant" === e.author.role && "final" === e.channel && "all" === e.recipient && "finished_successfully" === e.status)),
                    k = [],
                    R = new Map(C.map(e => [(0, o.g)(e), e])),
                    O = r()(C, e => "user" === e.author.role),
                    N = [];
                for (let e of I) T.some(t => t.fileId === e.id || null != e.libraryFileId && t.libraryFileId === e.libraryFileId) || T.push({
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
                    if (w && "complete" === t.status)
                        for (let n of t.messageIds) {
                            let t = R.get(n);
                            t?.author.role === "assistant" && ("finished_successfully" === t.status || "finished_partial_completion" === t.status) && (0, h.j)(t.metadata) && k.push({
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
                                    let n = M.get(t.id);
                                    M.set(t.id, {
                                        key: `page:${t.id}`,
                                        kind: "page",
                                        pageId: t.id,
                                        title: e.title ?? n?.title ?? null
                                    })
                                }
                            }
                        }
                        if (x && "assistant-message" === n.type && n.completed)
                            for (let e of (0, c.c)(n.content)) M.has(e.id) || M.set(e.id, {
                                key: `page:${e.id}`,
                                kind: "page",
                                pageId: e.id,
                                title: null
                            });
                        if ("todo-list" === n.type) {
                            N = n.plan.map((t, n) => ({
                                key: `progress:${e}:${String(n)}`,
                                label: t.step,
                                status: A ? "completed" : t.status
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
                let F = (0, i.b)(S.flatMap(e => {
                    let {
                        turn: t
                    } = e;
                    return y(t.items).filter(e => "mcp-tool-call" === e.type)
                })).at(-1);
                return a = null == F ? [..._.outputs, ...M.values(), ...P.values()] : [{
                    ...F,
                    key: `site:${F.projectId}`,
                    kind: "site"
                }, ..._.outputs.filter(e => null == F.archivePath || ! function(e, t) {
                    if (null != e.sandboxPath) return e.sandboxPath === t;
                    let n = t.split(/[\\/]/u).at(-1)?.toLowerCase();
                    return null != n && e.name.toLowerCase() === n
                }(e, F.archivePath)), ...M.values(), ...P.values()], {
                    automationIds: (0, u.b)(C, b ?? void 0),
                    browserScreenshots: (0, m.e)(C),
                    inputs: T,
                    sourceTurns: k,
                    outputs: a,
                    progressSteps: N,
                    isPlanSummaryUpdating: j && C.slice(O + 1).some(e => "assistant" === e.author.role && u.a.test(e.recipient ?? "") || "tool" === e.author.role && u.a.test(e.author.name ?? "")),
                    planSummaryRefreshKey: `${S.at(-1)?.id??""}:${j}`,
                    showSources: w,
                    sources: w ? [...Array.from(new Map(C.filter(e => "user" === e.author.role).flatMap(e => (0, l.a)((0, o.e)(e))).map(e => [e.projectId, e])).values(), e => ({
                        kind: "site",
                        key: `site:${e.projectId}`,
                        projectId: e.projectId,
                        label: e.title
                    })), ...E.filter(e => "memory" === e.kind), ...new Map(S.flatMap(e => {
                        let {
                            turn: t
                        } = e;
                        return (t.skillSources ?? []).map(e => [e.key, e])
                    })).values(), ..._.pluginSources, ...E.filter(e => "web" === e.kind && "apps" === e.category), ...E.filter(e => "file-source" === e.kind), ...E.filter(e => "web" === e.kind && "apps" !== e.category)] : [],
                    subagents: (0, f.a)(C)?.subagents ?? []
                }
            }
        })
    }),
    JlMc: (function(e, t, n) {
        var a = n("QosV"),
            r = n("Q840"),
            o = n("zd8w"),
            s = n("RU3e");
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
                    v = (0, o.useId)();
                return h[0] !== p || h[1] !== v || h[2] !== f ? (t = () => (f.set(c.b, e => new Map(e).set(v, p)), f.get(c.a)?.dismissCurrent(), () => {
                    f.set(c.b, e => {
                        let t = new Map(e);
                        return t.delete(v), t
                    })
                }), n = [p, v, f], h[0] = p, h[1] = v, h[2] = f, h[3] = t, h[4] = n) : (t = h[3], n = h[4]), (0, o.useEffect)(t, n), h[5] !== p || h[6] !== m || h[7] !== f ? (d = () => {
                    if (!m) return;
                    let e = f.watch(e => {
                        let {
                            get: t
                        } = e, n = !0 === t(s.b);
                        (0, l.ec)(f, p, n)
                    });
                    return () => {
                        e(), (0, l.ec)(f, p, !1)
                    }
                }, u = [p, m, f], h[5] = p, h[6] = m, h[7] = f, h[8] = d, h[9] = u) : (d = h[8], u = h[9]), (0, o.useEffect)(d, u), null
            }
        })
    }),
    fr5e: (function(e, t, n) {
        n.d(t, {
            a: () => F
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("iRMi"),
            s = n("D99L"),
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
            I = n("FGJH"),
            _ = n("Vcrm"),
            S = n("OCK3"),
            j = n("dhxJ"),
            T = n("lsky"),
            E = n("rKAs"),
            P = n("lAQI"),
            M = n("rn0J"),
            A = n("XpUB"),
            k = n("G6mJ"),
            R = n("VB5Q"),
            O = n("VTN2");
        let N = P.J(P.L(), P.P([P.L(), P.z(!0)]));

        function F(e) {
            let t, n, P, F, L, B, D = (0, r.c)(28),
                {
                    conversationId: G,
                    turns: H,
                    loadHistory: q,
                    renderMode: W,
                    paragenEnabled: K,
                    enabled: V,
                    canCopy: U,
                    priority: Q
                } = e,
                $ = void 0 === W ? "conversation" : W,
                Y = void 0 !== K && K,
                J = void 0 === V || V,
                X = void 0 === U || U,
                Z = void 0 === Q ? "fallback" : Q,
                ee = (0, l.y)(f.a),
                et = (0, c.useRef)(null);
            D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => et.current?.abort(), D[0] = t) : t = D[0], D[1] !== X || D[2] !== G || D[3] !== J || D[4] !== q || D[5] !== Y || D[6] !== $ ? (n = [G, J, X, q, $, Y], D[1] = X, D[2] = G, D[3] = J, D[4] = q, D[5] = Y, D[6] = $, D[7] = n) : n = D[7], (0, c.useEffect)(t, n), D[8] !== X || D[9] !== G || D[10] !== Y || D[11] !== $ || D[12] !== ee || D[13] !== H ? (P = () => {
                let e = ee.get(w.j, G),
                    t = ee.query.getData(b.chatGptConversationQueryById$, e),
                    n = t?.conversation_origin ?? ee.get(w.y, G);
                if (!X || "tpp" === n || "flora" === n) return null;
                let a = ee.get(w.N, G),
                    r = Y && "conversation" === $ ? ee.get(_.a, G)?.promptMessageId : void 0,
                    o = function(e) {
                        for (let {
                                turn: t
                            }
                            of e.toReversed())
                            for (let e of t.items.toReversed()) {
                                if ("assistant-message" !== e.type) continue;
                                let t = null,
                                    n = 0;
                                if ((0, T.h)((0, A.a)(e.content, E.b), a => {
                                        if ("codexDirective" === a.type && a.name === E.a) {
                                            let n = N.safeParse(a.attributes);
                                            if (!n.success) return;
                                            let r = (0, k.a)(n.data, e.contentReferences),
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
                                        "code" !== a.type || (null == ("indented" === a.codeBlockStyle ? null : a.raw.split("\n").reduce(M.a, null)) && (t = {
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
                        threadCurrentNode: r ?? ee.get(w.C, G),
                        conversationOrigin: n,
                        isStreaming: (0, w.Db)(ee.get(w.cb, G)),
                        mode: $,
                        moderationDisclaimersByMessageId: ee.get(w.O, G),
                        pendingSubmission: null
                    }).renderedTurns);
                if (o?.messageId == null) return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: o?.content
                };
                let s = {
                        conversationId: G,
                        messageId: o.messageId,
                        codeBlockIndex: o.codeBlockIndex
                    },
                    i = (0, j.a)(a?.[o.messageId]?.message?.metadata);
                return {
                    serverId: e,
                    comparisonPromptMessageId: r,
                    content: ee.get(S.b, s) ?? i?.[String(o.codeBlockIndex)]?.content ?? o.content
                }
            }, D[8] = X, D[9] = G, D[10] = Y, D[11] = $, D[12] = ee, D[13] = H, D[14] = P) : P = D[14];
            let en = (0, y.a)(P);
            D[15] !== ee ? (F = (e, t) => {
                let n = e => {
                    (0, m.a)(ee, s.CodexChatgptInteractionCodeCopyRequested, {
                        characterCount: (0, i.a)(e.length),
                        productExperience: o.CodexExpandedSidePanelProductSurface.CODEX_EXPANDED_SIDE_PANEL_PRODUCT_SURFACE_CHAT
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
            }, D[15] = ee, D[16] = F) : F = D[16];
            let ea = F;
            return D[17] !== G || D[18] !== en || D[19] !== q || D[20] !== Y || D[21] !== $ || D[22] !== ee || D[23] !== ea ? (L = () => {
                if (et.current?.signal.aborted === !1) return;
                let e = en();
                if (null == e) return;
                if (null != e.content) return void ea(e.content);
                let {
                    serverId: t,
                    comparisonPromptMessageId: n
                } = e;
                if (!q || ee.get(w.B, G) || null == t || ee.get(I.c, t)?.complete !== !1) return;
                let a = new AbortController;
                et.current = a;
                let r = ee.get(u.a),
                    o = ee.get(w.C, G),
                    s = ee.get(h.e).copyLastCodeBlock,
                    i = ee.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(u.a) !== r || t(w.C, G) !== o || Y && "conversation" === $ && t(_.a, G)?.promptMessageId !== n || t(h.e).copyLastCodeBlock !== s) && a.abort()
                    });
                ea((async () => {
                    await (0, C.a)(ee, t, a.signal), a.signal.throwIfAborted();
                    let e = en()?.content;
                    if (null == e) throw Error("No complete code block in this conversation");
                    return e
                })(), a.signal).finally(() => {
                    i(), et.current === a && (et.current = null)
                })
            }, D[17] = G, D[18] = en, D[19] = q, D[20] = Y, D[21] = $, D[22] = ee, D[23] = ea, D[24] = L) : L = D[24], D[25] !== J || D[26] !== Z ? (B = {
                enabled: J,
                priority: Z
            }, D[25] = J, D[26] = Z, D[27] = B) : B = D[27], (0, p.a)("copyLastCodeBlock", L, B), null
        }

        function z() {}
    }),
    LEgg: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV");
        n("slpy");
        var o = n("Q840"),
            s = n("Wf1j"),
            i = n("BzQ3"),
            l = n("TdH6"),
            c = n("QcW8");
        n("ZU27"), n("TpEm");
        var d = n("gbrq"),
            u = n("B1XR"),
            h = n("ipGa"),
            p = n("UKCO"),
            g = n("zd8w"),
            m = n("tSEg"),
            f = n("YnF4"),
            v = n("dQRk");

        function y() {
            let e, t, n = (0, r.c)(3),
                a = (0, o.y)(m.a);
            return n[0] !== a ? (e = () => {
                if ("chatgpt-thread" !== a.value.routeKind) return;
                let e = a.value.conversationId;
                return a.watch(t => {
                    let {
                        get: n
                    } = t, r = n(v.j, e);
                    if (null != r) return (0, f.a)(a, (0, p.Te)(`chatgpt:${r}`))
                })
            }, t = [a], n[0] = a, n[1] = e, n[2] = t) : (e = n[1], t = n[2]), (0, g.useLayoutEffect)(e, t), null
        }
        n("n5iL"), n("bf6R");
        var b = n("wtnY"),
            x = n("enMl");
        n("Gt1K");
        var w = n("PCEr");

        function C(e) {
            let t, n, o, s, l, c, d = (0, r.c)(17),
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
            }), d[0] = t) : t = d[0], d[1] !== v ? (n = v ? null : (0, a.jsx)(u.SitePreviewBridge, {}), d[1] = v, d[2] = n) : n = d[2], d[3] !== g ? (o = (0, a.jsx)(i.a.Header, {
                desktopPlacement: "titlebar",
                divider: !1,
                children: g
            }), d[3] = g, d[4] = o) : o = d[4], d[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(i.a.RightPanelOutlet, {
                children: (0, a.jsx)(i.a.RightPanelTabs, {})
            }), d[5] = s) : s = d[5], d[6] !== p || d[7] !== f || d[8] !== g || d[9] !== v || d[10] !== m ? (l = v ? null : (0, a.jsx)(I, {
                chatIcon: p,
                fullScreenTitle: f,
                mainToolbar: g,
                title: m
            }), d[6] = p, d[7] = f, d[8] = g, d[9] = v, d[10] = m, d[11] = l) : l = d[11], d[12] !== y || d[13] !== n || d[14] !== o || d[15] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, o, y, s, l]
            }), d[12] = y, d[13] = n, d[14] = o, d[15] = l, d[16] = c) : c = d[16], c
        }

        function I(e) {
            let t, n, i, u, p, g, f, v = (0, r.c)(16),
                {
                    chatIcon: C,
                    mainToolbar: I,
                    title: _,
                    fullScreenTitle: S
                } = e,
                j = (0, o.y)(m.a);
            return (0, s.a)(), (0, o.z)(d.h), (0, o.z)(c.r), v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(l.a, {}), n = (0, a.jsx)(y, {}), v[0] = t, v[1] = n) : (t = v[0], n = v[1]), v[2] !== C || v[3] !== _ ? (i = (0, a.jsx)(x.a, {
                title: _,
                icon: C
            }), v[2] = C, v[3] = _, v[4] = i) : i = v[4], v[5] !== S ? (u = (0, a.jsx)("div", {
                className: "max-w-80 min-w-0 truncate empty:hidden focus-within:overflow-visible",
                children: S
            }), v[5] = S, v[6] = u) : u = v[6], v[7] !== I || v[8] !== u ? (p = (0, a.jsx)(w.a, {
                mainToolbar: I,
                fullScreenChatMenu: u
            }), v[7] = I, v[8] = u, v[9] = p) : p = v[9], v[10] !== j.value.routeKind ? (g = "other" === j.value.routeKind || (0, h.a)() ? null : (0, a.jsx)(b.b, {
                showLauncherButton: !1
            }), v[10] = j.value.routeKind, v[11] = g) : g = v[11], v[12] !== i || v[13] !== p || v[14] !== g ? (f = (0, a.jsxs)(a.Fragment, {
                children: [t, n, i, p, g, null, null]
            }), v[12] = i, v[13] = p, v[14] = g, v[15] = f) : f = v[15], f
        }
    }),
    jeai: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV");
        n("j9wQ"), n.d(t, {}, {
            a: function(e) {
                let t, n = (0, r.c)(3),
                    {
                        children: o,
                        size: s
                    } = e,
                    i = void 0 === s ? "toolbar" : s;
                return n[0] !== o || n[1] !== i ? (t = (0, a.jsx)(a.Fragment, {
                    children: o
                }), n[0] = o, n[1] = i, n[2] = t) : t = n[2], t
            }
        })
    }),
    dLcZ: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("BzQ3"),
            s = n("NVRI"),
            i = n("MMlk"),
            l = n("jeai"),
            c = n("EyEA");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, d, u, h, p, g, m = (0, r.c)(16);
                m[0] !== e ? ({
                    hasSectionProgress: o,
                    isTemporaryChat: d,
                    startActions: n,
                    ...t
                } = e, m[0] = e, m[1] = t, m[2] = n, m[3] = o, m[4] = d) : (t = m[1], n = m[2], o = m[3], d = m[4]);
                let f = void 0 !== d && d,
                    v = void 0 !== o && o ? c.a.Title : void 0;
                return m[5] !== n ? (u = null != n ? (0, a.jsx)(l.a, {
                    children: n
                }) : null, m[5] = n, m[6] = u) : u = m[6], m[7] !== f ? (h = f ? (0, a.jsx)(i.b, {
                    isIndicator: !0,
                    isTemporaryChat: !0
                }) : null, m[7] = f, m[8] = h) : h = m[8], m[9] !== u || m[10] !== h ? (p = (0, a.jsxs)(a.Fragment, {
                    children: [u, h]
                }), m[9] = u, m[10] = h, m[11] = p) : p = m[11], m[12] !== t || m[13] !== v || m[14] !== p ? (g = (0, a.jsx)(s.a, {
                    ...t,
                    className: v,
                    inset: "tab-strip-flush-start",
                    startActions: p
                }), m[12] = t, m[13] = v, m[14] = p, m[15] = g) : g = m[15], g
            },
            b: function(e) {
                let t, n, s, i, l = (0, r.c)(12),
                    {
                        children: c,
                        menu: d,
                        hasTitleMenu: u,
                        usage: h
                    } = e,
                    p = !u && d;
                return l[0] !== u || l[1] !== d ? (t = u ? (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-title-menu",
                    align: "start",
                    slotPosition: "threadTitle",
                    children: d
                }) : null, l[0] = u, l[1] = d, l[2] = t) : t = l[2], l[3] !== c ? (n = null == c ? null : (0, a.jsx)(o.a.HeaderAction, {
                    actionId: "chatgpt-conversation-actions",
                    align: "end",
                    sharedCapsule: !0,
                    order: 100,
                    unifiedSlotPosition: void 0,
                    children: (0, a.jsx)("div", {
                        className: "flex min-w-0 items-center gap-toolbar-action",
                        children: c
                    })
                }), l[3] = c, l[4] = n) : n = l[4], l[5] !== h ? (s = null, l[5] = h, l[6] = s) : s = l[6], l[7] !== p || l[8] !== t || l[9] !== n || l[10] !== s ? (i = (0, a.jsxs)(a.Fragment, {
                    children: [p, t, n, s]
                }), l[7] = p, l[8] = t, l[9] = n, l[10] = s, l[11] = i) : i = l[11], i
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
            o = n("lAQI"),
            s = n("fDv2"),
            i = n("OWtl"),
            l = n("dQRk");
        let c = o.F({
                epic_patient_label: o.L(),
                epic_patient_name: o.L().nullable().optional(),
                epic_patient_birth_date: s.a().nullable().optional(),
                epic_encounter_label: o.L().nullable().optional()
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
        var a = n("Q840"),
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
            o = n("Q840"),
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
                let t, n, d, g, m = (0, r.c)(9),
                    {
                        resource: f,
                        onSelect: v
                    } = e,
                    y = (0, o.y)(h.a),
                    b = (0, o.z)(i.f);
                return null == b || f.gizmo.tags?.includes("first_party") || "marketplace" !== f.gizmo.share_recipient && "link" !== f.gizmo.share_recipient ? null : (m[0] !== b || m[1] !== v || m[2] !== f || m[3] !== y ? (t = () => {
                    v?.(), (0, u.f)(y, p, {
                        accountId: b,
                        resource: f
                    })
                }, m[0] = b, m[1] = v, m[2] = f, m[3] = y, m[4] = t) : t = m[4], m[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(l.c.ItemIcon, {
                    children: (0, a.jsx)(c.wd, {})
                }), d = (0, a.jsx)(s.a, {
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
            o = n("on57"),
            s = n("Q840"),
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
                    gizmoId: o
                } = e,
                i = (0, s.x)(d.e, "2160578039");
            return n[0] !== i || n[1] !== o ? (t = i ? (0, a.jsx)(p, {
                gizmoId: o
            }, o) : null, n[0] = i, n[1] = o, n[2] = t) : t = n[2], t
        }

        function m(e) {
            let t, n, o = (0, r.c)(10),
                {
                    gizmoId: l
                } = e,
                d = (0, s.y)(c.a),
                p = (0, i.X)(),
                g = (0, i._)(),
                {
                    data: m
                } = (0, s.x)(h.f, l);
            o[0] !== l || o[1] !== p.pathname ? (t = {
                gizmoId: l,
                visitKey: p.pathname
            }, o[0] = l, o[1] = p.pathname, o[2] = t) : t = o[2];
            let f = (0, s.x)(h.c, t);
            return o[3] !== f || o[4] !== l || o[5] !== p.pathname || o[6] !== g || o[7] !== m || o[8] !== d ? (n = f && m?.gizmo.migrated_plugin_id ? (0, a.jsx)(u.a, {
                gptName: m.gizmo.display.name,
                accessState: "error",
                onUsePlugin: () => void g("/plugins"),
                onKeepUsingGpt: () => (0, h.a)(d, {
                    gizmoId: l,
                    visitKey: p.pathname
                })
            }) : null, o[3] = f, o[4] = l, o[5] = p.pathname, o[6] = g, o[7] = m, o[8] = d, o[9] = n) : n = o[9], n
        }
        n.d(t, {}, {
            GptPluginMigrationBanner: g,
            GptPluginMigrationHomeBanner: function(e) {
                let t, n, s, i = (0, r.c)(7),
                    {
                        entryPoint: l,
                        gizmoId: c
                    } = e,
                    d = "codex" === l && "electron:mx-[var(--home-composer-inline-inset)]";
                return i[0] !== d ? (t = (0, o.b)("empty:hidden", d), i[0] = d, i[1] = t) : t = i[1], i[2] !== c ? (n = (0, a.jsx)(g, {
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
            h = n("LBM8");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, m, f, v, y, b, x = (0, r.c)(34),
                    {
                        gptName: w,
                        accessState: C,
                        onUsePlugin: I,
                        onKeepUsingGpt: _,
                        onRetry: S
                    } = e,
                    j = (0, o.a)(),
                    T = (0, d.e)("2513446768");
                x[0] !== T || x[1] !== j ? (t = j.formatDate((0, u.a)(T.get("retirement_date", "")), {
                    month: "long",
                    day: "numeric",
                    timeZone: "UTC"
                }), x[0] = T, x[1] = j, x[2] = t) : t = x[2];
                let E = t;
                if ("error" === C && null != S) {
                    let e;
                    x[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceRetry",
                        defaultMessage: "Try again"
                    }), x[3] = e) : e = x[3], n = e
                } else if ("admin" === C) {
                    let e;
                    x[4] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.viewPlugin",
                        defaultMessage: "View Plugin"
                    }), x[4] = e) : e = x[4], n = e
                } else if ("allowed" === C || "pending" === C) {
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
                if ("error" === C && null == S) {
                    let e;
                    x[7] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessUnconfirmed",
                        defaultMessage: "We couldn’t check your access to the plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[7] = E, x[8] = e) : e = x[8], p = e
                } else if ("error" === C) {
                    let e;
                    x[9] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessError",
                        defaultMessage: "We couldn’t check your access to the plugin. Try again, or keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[9] = E, x[10] = e) : e = x[10], p = e
                } else if ("denied" === C) {
                    let e;
                    x[11] !== E ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceAccessDenied",
                        defaultMessage: "This plugin isn’t available to you. You can keep using this GPT until {deadline}.",
                        values: {
                            deadline: E
                        }
                    }), x[11] = E, x[12] = e) : e = x[12], p = e
                } else if (w.trim()) {
                    let e;
                    x[13] !== E || x[14] !== w ? (e = (0, a.jsx)(s.a, {
                        id: "chatgptConversations.gpts.migration.chatChoiceNamedBody",
                        defaultMessage: "{gptName} is now available as a plugin. You can keep using this GPT until {deadline}.",
                        values: {
                            gptName: w,
                            deadline: E
                        }
                    }), x[13] = E, x[14] = w, x[15] = e) : e = x[15], p = e
                } else {
                    let e;
                    x[16] !== E ? (e = (0, a.jsx)(s.a, {
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
                }), x[18] = g) : g = x[18], x[19] !== w ? (m = w.trim() ? (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceNamedTitle",
                    defaultMessage: "{gptName} is now a plugin",
                    values: {
                        gptName: w
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgptConversations.gpts.migration.chatChoiceTitle",
                    defaultMessage: "This GPT is now a plugin"
                }), x[19] = w, x[20] = m) : m = x[20];
                let P = "pending" === C,
                    M = "error" === C && null != S ? S : I;
                return x[21] !== n || x[22] !== P || x[23] !== M ? (f = (0, a.jsx)(l.a, {
                    color: "primary",
                    loading: P,
                    size: "dialog",
                    type: "button",
                    onClick: M,
                    children: n
                }), x[21] = n, x[22] = P, x[23] = M, x[24] = f) : f = x[24], x[25] !== _ ? (v = null == _ ? null : (0, a.jsx)(l.a, {
                    color: "outline",
                    size: "dialog",
                    type: "button",
                    onClick: _,
                    children: (0, a.jsx)(s.a, {
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
        var a = n("Q840"),
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
        var a = n("lAQI");
        let r = a.R({
            protocol: /^https$/
        }).or(a.o()).nullish().catch(null);
        n.d(t, {}, {
            a: r
        })
    }),
    T33u: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            o = n("Q840"),
            s = n("lAQI"),
            i = n("OWtl"),
            l = n("OMIV"),
            c = n("b6fw"),
            d = n("YdNM");
        let u = s.F({
                course_id: s.L().trim().min(1),
                title: s.L().trim().nullish().catch(null),
                icon_url_or_emoji: d.a
            }),
            h = s.F({
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
            g = (0, o.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(l.e, "4035922817") ? n(p, e) : null
            }),
            m = (0, o.d)(i.a, (e, t) => {
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
                    pending: (0, s.Db)(n(s.cb, t)),
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
                return n(s.gb, t) || null
            },
            dismiss: (e, t) => {
                (0, s.Zb)(e, t, !1), (0, o.b)(e, t).catch(() => {})
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    M3Kf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("zd8w"),
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
                    I = (0, o.y)(d.a),
                    _ = (0, o.z)(c.b),
                    S = (0, o.x)(g.j, C),
                    j = (0, o.x)(f.c, S ?? C),
                    T = (0, h.b)(),
                    E = (0, l.c)(),
                    P = (0, s.useRef)(null);
                w[0] !== T || w[1] !== I || w[2] !== S || w[3] !== E ? (t = () => {
                    null != S && (0, m.b)(I, S, e => {
                        var t;
                        let n, a, r, o = T.getScrollElement(),
                            s = o && (n = (t = o).getBoundingClientRect(), a = e => {
                                let t = e.getBoundingClientRect();
                                return t.height > 0 && t.bottom > n.top && t.top < n.bottom
                            }, (r = t.querySelector("[data-thread-reading-passage]")) && a(r) ? r : Array.from(t.querySelectorAll("[data-content-search-unit-key], [data-user-message-bubble]")).find(a)),
                            c = s?.getBoundingClientRect().top;
                        if ((0, i.flushSync)(e), o && s && null != c && o.contains(s)) {
                            let e = (0, l.b)(s.getBoundingClientRect().top - c, E);
                            0 !== e && T.compensateScrollToDistanceFromBottomPx((0, p.b)(o) - e)
                        }
                    })
                }, w[0] = T, w[1] = I, w[2] = S, w[3] = E, w[4] = t) : t = w[4];
                let M = t;
                w[5] !== C || w[6] !== M || w[7] !== I || w[8] !== S ? (n = () => {
                    let e = I.get(f.c, S ?? C);
                    I.get(c.b) || e?.hasError || M()
                }, w[5] = C, w[6] = M, w[7] = I, w[8] = S, w[9] = n) : n = w[9];
                let A = (0, s.useEffectEvent)(n);
                w[10] !== T || w[11] !== _ || w[12] !== A ? (y = () => {
                    if (_) return;
                    let e = P.current,
                        t = T.getScrollElement();
                    if (null == e || null == t) return;
                    let n = new IntersectionObserver(e => {
                        e.some(v) && A()
                    }, {
                        root: t,
                        rootMargin: "80px 0px 0px 0px"
                    });
                    return n.observe(e), () => n.disconnect()
                }, w[10] = T, w[11] = _, w[12] = A, w[13] = y) : y = w[13];
                let k = j?.cursor,
                    R = j?.hasError;
                if (w[14] !== T || w[15] !== _ || w[16] !== S || w[17] !== k || w[18] !== R ? (b = [T, _, S, k, R], w[14] = T, w[15] = _, w[16] = S, w[17] = k, w[18] = R, w[19] = b) : b = w[19], (0, s.useEffect)(y, b), null == j || j.complete || null == j.cursor) return null;
                let O = j.hasError ? M : null;
                return w[20] !== O ? (x = (0, a.jsx)(u.a, {
                    ref: P,
                    onRetry: O
                }), w[20] = O, w[21] = x) : x = w[21], x
            }
        })
    }),
    lUUH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("oyxz"),
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
            I = n("xEXG"),
            _ = n("KMqT"),
            S = n("J6LI"),
            j = n("FgUr"),
            T = n("WLgA");
        let E = (0, o.u)(v.a, 0);

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
                surface: v,
                navigate: I,
                onCreateProjectDialogCloseAutoFocus: P
            } = e, A = "title-menu" === v, k = (e, t) => A ? {
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
                isWorkConversation: R,
                sourceMemoryBlocked: O
            } = (0, S.c)(n, r), N = O ? y.a.projectOnlyMoveUnavailable : void 0, {
                data: F,
                isPending: z,
                isError: L
            } = o, {
                data: B,
                isPending: D,
                isError: G
            } = s, H = (0, j.a)(B, F, r?.gizmo.id), q = "allowed" === c, W = e => {
                let a = t.get(E) + 1,
                    r = t.get(g.e);
                t.set(E, a), (0, C.T)({
                    scope: t,
                    conversationId: n.id,
                    projectId: e.gizmo.id
                }).then(n => {
                    n && t.get(E) === a && t.get(g.e) === r && I((0, T.c)(e.gizmo.id))
                }).catch(() => {
                    t.get(h.f).danger(t.get(p.a).formatMessage(M.moveFailed), {
                        errorAnalytics: {
                            toastId: "move_conversation_to_snorlax_error"
                        }
                    })
                })
            }, K = [];
            for (let e of (q && (K.push({
                    id: "new-chatgpt-project",
                    ...k(d.Ig, d.Jg),
                    message: M.newProject,
                    selectAfterClose: !0,
                    onSelect: () => {
                        t.set(E, e => e + 1), (0, w.a)(t, W, {
                            allowLocalProjectCreation: !1,
                            forceGlobalMemory: R,
                            onCloseAutoFocus: P
                        })
                    }
                }), H.length > 0 && K.push({
                    id: "new-project-separator",
                    type: "separator"
                })), H)) {
                let {
                    targetMemoryBlocked: t
                } = (0, S.c)(n, void 0, e), r = t ? (0, _.a)((0, x.c)(e)) : void 0;
                K.push({
                    id: `move-to-project:${e.gizmo.id}`,
                    icon: (0, a.jsx)(f.a, {
                        className: A ? void 0 : "icon-xs",
                        size: A ? "leading" : 16,
                        color: e.gizmo.display.theme,
                        fallbackIcon: A ? (0, a.jsx)(u.b, {
                            icon: {
                                16: d.Ad,
                                20: d.Bd
                            }
                        }) : (0, a.jsx)(d.Ad, {}),
                        icon: e.gizmo.display.emoji
                    }),
                    nativeIcon: (0, m.b)(e.gizmo.display.emoji),
                    message: M.projectName,
                    messageValues: {
                        projectName: e.gizmo.display.name
                    },
                    enabled: null == r,
                    tooltipMessage: r,
                    onSelect: () => W(e)
                })
            }
            return l && (L || G) ? K.push({
                id: "retry-project-destinations",
                message: M.destinationsFailed,
                closeOnSelect: !1,
                onSelect: () => {
                    Promise.all([t.query.invalidate(b.a), t.query.invalidate(C.m)])
                }
            }) : l && (z || D) ? K.push({
                id: "loading-project-destinations",
                message: M.loading,
                tooltipMessage: M.reopen,
                enabled: !1
            }) : L || G || z || D || 0 !== H.length || q || K.push({
                id: "no-project-destinations",
                message: M.noDestinations,
                enabled: !1
            }), [...i && K.length > 0 ? [{
                id: "move-to-project",
                ...k(d.Dd, d.Ed),
                message: M.moveToProject,
                enabled: !O,
                tooltipMessage: N,
                submenu: K
            }] : [], ...null == r ? [] : [{
                id: "remove-from-project",
                ...k(d.Id, d.Jd),
                message: M.removeFromProject,
                enabled: !O,
                tooltipMessage: N,
                onSelect: () => {
                    t.set(E, e => e + 1), (0, C.T)({
                        scope: t,
                        conversationId: n.id,
                        projectId: null
                    }).catch(() => {
                        t.get(h.f).danger(t.get(p.a).formatMessage(M.removeFailed), {
                            errorAnalytics: {
                                toastId: "move_conversation_to_snorlax_error"
                            }
                        })
                    })
                }
            }]]
        }
        let M = (0, i.f)({
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
                    m = (0, o.y)(v.a),
                    f = (0, l._)(),
                    y = (0, o.z)(b.a),
                    x = (0, o.z)(C.m),
                    w = (0, I.b)();
                if (i[0] !== d || i[1] !== f || i[2] !== u || i[3] !== x || i[4] !== h || i[5] !== w || i[6] !== y || i[7] !== m || i[8] !== g) {
                    let e = P({
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
                    t = e.map(n), i[0] = d, i[1] = f, i[2] = u, i[3] = x, i[4] = h, i[5] = w, i[6] = y, i[7] = m, i[8] = g, i[9] = t
                } else t = i[9];
                return i[10] !== t ? (n = (0, a.jsx)(a.Fragment, {
                    children: t
                }), i[10] = t, i[11] = n) : n = i[11], n
            },
            b: P
        })
    }),
    MDmT: (function(e, t, n) {
        var a = n("Q840"),
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
                g = s[i + 1],
                m = p(l),
                f = p(g),
                v = l?.start_message_id != null && null == m || g?.start_message_id != null && null == f,
                y = o?.status === "sending" && (o.sectionId === l?.id || o.sectionId === g?.id),
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
            o = n("Q840"),
            s = n("zd8w"),
            i = n("oyxz"),
            l = n("BzQ3"),
            c = n("h6fL"),
            d = n("Sm6l"),
            u = n("X6Vn"),
            h = n("OWtl"),
            p = n("j0nn");
        let g = (0, s.lazy)(async () => ({
            default: (await Promise.resolve().then(n.bind(n, "taaw"))).CodexThreadReportDialog
        }));

        function m(e) {
            let t, n, s, l = (0, r.c)(9),
                {
                    imageOnly: u
                } = e,
                g = (0, o.y)(h.a),
                m = (0, o.x)(p.f, (0, c.a)());
            return null == m ? null : (l[0] !== u || l[1] !== g || l[2] !== m.id ? (t = () => f(g, m.id, u), l[0] = u, l[1] = g, l[2] = m.id, l[3] = t) : t = l[3], l[4] !== u ? (n = u ? (0, a.jsx)(i.a, {
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
                    }), (0, a.jsx)(m, {
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
            a: () => h
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            s = n("BzQ3"),
            i = n("Cslg"),
            l = n("OFP1"),
            c = n("h6fL"),
            d = n("MMlk"),
            u = n("jeai");

        function h(e) {
            let t, n, h, p, g = (0, r.c)(14),
                {
                    conversationHeader: m,
                    children: f
                } = e,
                v = void 0 !== m && m,
                y = (0, c.a)(),
                b = (0, o.z)(i.m),
                x = (0, o.z)(l.n);
            g[0] !== y.authMethod || g[1] !== b.status || g[2] !== x ? (t = function(e) {
                let {
                    authMethod: t,
                    chatGptAccessStatus: n,
                    isWorkOnlyChatDisabled: a
                } = e;
                return "chatgpt" === t && "allowed" === n && !a
            }({
                authMethod: y.authMethod,
                chatGptAccessStatus: b.status,
                isWorkOnlyChatDisabled: x
            }), g[0] = y.authMethod, g[1] = b.status, g[2] = x, g[3] = t) : t = g[3];
            let w = t;
            return w || null != f ? (g[4] !== v || g[5] !== w ? (n = w && v ? (0, a.jsx)(u.a, {
                children: (0, a.jsx)(d.a, {})
            }) : null, g[4] = v, g[5] = w, g[6] = n) : n = g[6], g[7] !== v || g[8] !== w ? (h = w && !v ? (0, a.jsx)(d.a, {}) : null, g[7] = v, g[8] = w, g[9] = h) : h = g[9], g[10] !== f || g[11] !== n || g[12] !== h ? (p = (0, a.jsx)(s.a.HeaderAction, {
                actionId: "chatgpt-shared-post-actions",
                align: "end",
                allowsThreadContentOverlap: !0,
                order: 100,
                children: (0, a.jsxs)("div", {
                    className: "flex items-center gap-2 browser:rounded-lg browser:bg-surface",
                    children: [f, n, h]
                })
            }), g[10] = f, g[11] = n, g[12] = h, g[13] = p) : p = g[13], p) : null
        }
    }),
    b7aP: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("oyxz"),
            s = n("Bbed"),
            i = n("iS3k");
        let l = (0, s.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(362890)]).then(n.bind(n, "hhV7"))).ChatGptThreadSummaryPanelBody, {
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
    Yrvy: (function(e, t, n) {
        var a = n("QosV"),
            r = n("xSOA"),
            o = n("Q840"),
            s = n("Wf1j"),
            i = n("SGsN"),
            l = n("OWtl"),
            c = n("MRlq"),
            d = n("QmkR");
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, h, p = (0, a.c)(12),
                    g = (0, o.y)(l.a),
                    m = (0, s.a)();
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
                w = void 0 !== u && u,
                C = void 0 !== h && h,
                I = "default" === x && "bg-surface-elevated-secondary shadow-md",
                _ = w && !C && "in-data-[comment-layout=floating]:shadow-none!",
                S = w && "default" === x && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                j = w && "default" === x && (C ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                T = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return b[9] !== n || b[10] !== I || b[11] !== _ || b[12] !== S || b[13] !== j || b[14] !== T ? (p = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", I, _, S, j, T, n), b[9] = n, b[10] = I, b[11] = _, b[12] = S, b[13] = j, b[14] = T, b[15] = p) : p = b[15], b[16] !== l ? (g = {
                ...s.d,
                ...l
            }, b[16] = l, b[17] = g) : g = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), b[18] = m) : m = b[18], b[19] !== t ? (f = (0, a.jsx)("div", {
                className: m,
                children: t
            }), b[19] = t, b[20] = f) : f = b[20], b[21] !== w || b[22] !== x ? (v = "default" === x ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, o.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", w && "in-data-[comment-layout=floating]:hidden")
            }) : null, b[21] = w, b[22] = x, b[23] = v) : v = b[23], b[24] !== i || b[25] !== p || b[26] !== g || b[27] !== f || b[28] !== v ? (y = (0, a.jsxs)("div", {
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
            o = n("zd8w"),
            s = n("oyxz"),
            i = n("YwjY"),
            l = n("Sm6l"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("UKCO"),
            p = n("T1PX");

        function g(e) {
            let t, n, s, i, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: g
                } = e,
                m = (0, o.useRef)(null),
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
                                o = e.offsetHeight / a.height,
                                s = (g.left - a.left) * r,
                                i = (g.top - a.top) * o,
                                l = (a.right - g.right) * r,
                                c = (a.bottom - g.bottom) * o;
                            e.style.setProperty("--entry-inset", `${i}px ${l}px ${c}px ${s}px`), e.style.setProperty("--entry-transform", `translate(${s}px, ${i}px) scale(${g.width/a.width}, ${g.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [f, g], d[0] = f, d[1] = g, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, o.useLayoutEffect)(t, n);
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
                ref: m,
                "data-selection-annotation-entry": "",
                className: v,
                style: s,
                children: [i, l]
            }), d[9] = v, d[10] = i, d[11] = l, d[12] = c) : c = d[12], c
        }
        let m = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(923720), n.e(531161), n.e(596636), n.e(352322)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
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
            }), p[5] = n.onCancel, p[6] = i) : i = p[6], p[7] !== n ? (l = (0, a.jsx)(m, {
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
            return p[15] !== f || p[16] !== t ? (h = null == t ? f : (0, a.jsx)(g, {
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
                g = void 0 !== h && h,
                m = g ? "alert" : "status";
            return d[0] !== g ? (t = g ? (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(s.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), d[0] = g, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(s.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), d[2] = n) : n = d[2], d[3] !== p ? (o = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = o) : o = d[4], d[5] !== m || d[6] !== t || d[7] !== o ? (c = (0, a.jsxs)(i.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: m,
                children: [t, o]
            }), d[5] = m, d[6] = t, d[7] = o, d[8] = c) : c = d[8], c
        }
        f.prefetch = () => m.prefetch()
    }),
    GKsW: (function(e, t, n) {
        var a = n("SRbQ"),
            r = n("ABep"),
            o = n("QosV"),
            s = n("Q840"),
            i = n("zd8w"),
            l = n("GaA7"),
            c = n("OWtl"),
            d = n("tSEg"),
            u = n("n5oN");
        let h = (0, s.u)(c.a, () => []);

        function p(e) {
            let t, n, a, r, d, u, p = (0, o.c)(13),
                {
                    title: v,
                    nativeTitle: y
                } = e,
                b = void 0 === y ? v : y,
                x = (0, s.y)(c.a),
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
                let t, n = (0, o.c)(2),
                    {
                        title: a
                    } = e,
                    i = (0, s.y)(d.a),
                    l = (0, s.x)(u.a, `${i.value.pathname}${i.value.search??""}`),
                    c = a ?? l;
                return n[0] !== c ? (t = (0, r.jsx)(p, {
                    title: c
                }), n[0] = c, n[1] = t) : t = n[1], t
            }
        })
    }),
    xD3Z: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("slpy"),
            s = n("Q840"),
            i = n("Qgfj"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("QcW8"),
            u = n("Sm6l"),
            h = n("rmk3"),
            p = n("bf6R"),
            g = n("f38C"),
            m = n("tSEg"),
            f = n("hZax"),
            v = n("dt6g"),
            y = n("WwnD");

        function b(e) {
            let t, n, s, d, m, v = (0, r.c)(22),
                {
                    contextMenuTrigger: y,
                    isCompact: b,
                    isDragging: w,
                    items: C,
                    open: I,
                    onMinimize: _,
                    onOpenChange: S,
                    showOptions: j
                } = e,
                T = void 0 === j || j,
                E = (0, f.f)("2163293173"),
                P = (0, l.a)();
            v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), v[0] = t) : t = v[0], v[1] !== _ ? (n = {
                id: "minimize",
                icon: p._e,
                message: t,
                onSelect: _,
                selectAfterClose: !0
            }, v[1] = _, v[2] = n) : n = v[2], v[3] !== C || v[4] !== n ? (s = [...C, n], v[3] = C, v[4] = n, v[5] = s) : s = v[5];
            let M = s;
            if (null != y) {
                let e, t;
                return T ? (v[6] !== y ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: y
                }), v[6] = y, v[7] = e) : e = v[7], v[8] !== M || v[9] !== e ? (t = (0, a.jsx)(h.a, {
                    disableNative: !0,
                    items: M,
                    children: e
                }), v[8] = M, v[9] = e, v[10] = t) : t = v[10], t) : y
            }
            return v[11] !== E || v[12] !== P || v[13] !== b || v[14] !== w || v[15] !== M || v[16] !== S || v[17] !== I || v[18] !== T ? (d = T && (0, a.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: I,
                onOpenChange: S,
                items: M,
                children: E ? (0, a.jsx)(g.a, {
                    size: "toolbar",
                    label: P.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options"
                    })
                }) : (0, a.jsx)(o.a, {
                    disabled: I || w,
                    content: (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options"
                    }),
                    children: (0, a.jsx)(u.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": P.formatMessage({
                            id: "quickChat.moreOptions",
                            defaultMessage: "Chat options"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: b ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: x,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || S?.(!I)
                        },
                        children: (0, a.jsx)(p._c, {})
                    })
                })
            }), v[11] = E, v[12] = P, v[13] = b, v[14] = w, v[15] = M, v[16] = S, v[17] = I, v[18] = T, v[19] = d) : d = v[19], v[20] !== d ? (m = (0, a.jsx)(a.Fragment, {
                children: d
            }), v[20] = d, v[21] = m) : m = v[21], m
        }

        function x(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, r.c)(6),
                    l = (0, s.y)(m.a),
                    c = (0, s.z)(d.r);
                o[0] !== c || o[1] !== l ? (t = c ? [{
                    id: "full-view",
                    icon: p.N,
                    message: (0, i.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, v.a)(l, "context_menu", () => (0, y.b)(l, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], o[0] = c, o[1] = l, o[2] = t) : t = o[2];
                let u = t;
                return o[3] !== u || o[4] !== e ? (n = (0, a.jsx)(b, {
                    ...e,
                    items: u
                }), o[3] = u, o[4] = e, o[5] = n) : n = o[5], n
            },
            b: b
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
                let g = null == t ? null : o?.querySelector(t),
                    m = g instanceof HTMLElement ? g.getBoundingClientRect().top : void 0,
                    f = s({
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
            o = n("on57"),
            s = n("zd8w"),
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
                        align: I,
                        bottomBoundarySelector: _,
                        children: S,
                        className: j,
                        onOpen: T,
                        portalTargetSelector: E,
                        targetContainer: P,
                        targetContainerRefs: M,
                        targetSelector: A
                    } = e,
                    k = void 0 === A ? h.b : A,
                    R = (0, i.c)(),
                    O = (0, s.useRef)(null),
                    N = (0, s.useRef)(!1),
                    F = (0, s.useRef)(null),
                    z = (0, s.useRef)(null),
                    [L, B] = (0, s.useState)(null);
                C[0] !== T ? (t = e => {
                    T?.(e)
                }, C[0] = T, C[1] = t) : t = C[1];
                let D = (0, s.useEffectEvent)(t);
                C[2] !== L || C[3] !== R ? (n = () => {
                    let e = F.current?.getBoundingClientRect();
                    if (null == L || null == e) return;
                    let t = L.portalTarget?.getBoundingClientRect(),
                        n = null == t ? 1 : R;
                    return {
                        point: {
                            x: e.left + e.width / 2,
                            y: e.bottom
                        },
                        width: e.width,
                        selectionRect: {
                            x: L.rect.left * n + (t?.left ?? 0),
                            y: L.rect.top * n + (t?.top ?? 0),
                            width: L.rect.width * n,
                            height: L.rect.height * n
                        },
                        windowZoom: R
                    }
                }, C[2] = L, C[3] = R, C[4] = n) : n = C[4];
                let G = (0, d.a)(n);
                if (C[5] !== _ || C[6] !== D || C[7] !== E || C[8] !== P || C[9] !== M || C[10] !== k || C[11] !== R ? (m = () => {
                        let e = null,
                            t = () => {
                                null != O.current && (window.cancelAnimationFrame(O.current), O.current = null)
                            },
                            n = () => {
                                t();
                                let e = window.getSelection();
                                null == z.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (O.current = window.requestAnimationFrame(() => {
                                    O.current = null;
                                    let e = null != P || null == M ? [P] : M.map(g).filter(p),
                                        t = null;
                                    for (let n of e)
                                        if (null != (t = (0, u.c)({
                                                bottomBoundarySelector: _,
                                                portalTarget: null == E ? void 0 : n?.querySelector(E) ?? void 0,
                                                targetContainer: n,
                                                targetSelector: k,
                                                windowZoom: R
                                            }))) break;
                                    (0, u.d)(z.current, t) || (null == z.current && null != t && D(t), z.current = t, B(t))
                                }))
                            },
                            a = () => {
                                let e = window.getSelection();
                                N.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                            },
                            r = t => {
                                let r = window.getSelection(),
                                    o = z.current?.portalTarget;
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
                                if (2 === e.button || 0 === e.button && e.ctrlKey && (0, c.a)()) return;
                                let n = e.target;
                                n instanceof Node && F.current?.contains(n) || (N.current = !0, t(), z.current = null, B(null))
                            },
                            s = () => {
                                N.current = !1, n()
                            },
                            i = () => {
                                if (N.current) {
                                    t(), z.current = null, B(null);
                                    return
                                }
                                n()
                            };
                        return n(), document.addEventListener("selectionchange", i), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", o), window.addEventListener("pointerup", s), window.addEventListener("pointercancel", s), window.addEventListener("resize", a), window.addEventListener("scroll", r, !0), () => {
                            null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", i), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", o), window.removeEventListener("pointerup", s), window.removeEventListener("pointercancel", s), window.removeEventListener("resize", a), window.removeEventListener("scroll", r, !0)
                        }
                    }, C[5] = _, C[6] = D, C[7] = E, C[8] = P, C[9] = M, C[10] = k, C[11] = R, C[12] = m) : m = C[12], C[13] !== _ || C[14] !== E || C[15] !== P || C[16] !== M || C[17] !== k || C[18] !== R ? (f = [_, E, P, M, k, R], C[13] = _, C[14] = E, C[15] = P, C[16] = M, C[17] = k, C[18] = R, C[19] = f) : f = C[19], (0, s.useEffect)(m, f), null == L) return null;
                let H = .5;
                "start" === (void 0 === I ? "center" : I) && (H = +("rtl" === L.direction));
                let q = L.rect.left + L.rect.width * H,
                    W = L.viewportHorizontalBounds.left + 8 - q,
                    K = L.viewportHorizontalBounds.right - 8 - q,
                    V = L.portalTarget ?? document.body,
                    U = null == L.portalTarget ? "fixed z-50" : "absolute z-[1]";
                C[20] !== j || C[21] !== U ? (v = (0, o.b)("pointer-events-none w-max", U, j), C[20] = j, C[21] = U, C[22] = v) : v = C[22];
                let Q = L.viewportHorizontalBounds.right - L.viewportHorizontalBounds.left - 16,
                    $ = L.rect.top - 8,
                    Y = `translateX(clamp(${W}px, ${-100*H}%, calc(${K}px - 100%))) translateY(-100%)`;
                return C[23] !== q || C[24] !== Q || C[25] !== $ || C[26] !== Y ? (y = {
                    left: q,
                    maxWidth: Q,
                    top: $,
                    transform: Y
                }, C[23] = q, C[24] = Q, C[25] = $, C[26] = Y, C[27] = y) : y = C[27], C[28] !== S || C[29] !== G || C[30] !== L || C[31] !== R ? (b = null == L.portalTarget && 1 !== R ? (0, a.jsx)("div", {
                    style: {
                        zoom: R
                    },
                    children: S(L, G)
                }) : S(L, G), C[28] = S, C[29] = G, C[30] = L, C[31] = R, C[32] = b) : b = C[32], C[33] !== y || C[34] !== b || C[35] !== v ? (x = (0, a.jsx)("div", {
                    ref: F,
                    className: v,
                    style: y,
                    children: b
                }), C[33] = y, C[34] = b, C[35] = v, C[36] = x) : x = C[36], C[37] !== x || C[38] !== V ? (w = (0, a.jsx)(l.a, {
                    container: V,
                    children: x
                }), C[37] = x, C[38] = V, C[39] = w) : w = C[39], w
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
            h = n("xtoi"),
            p = n("mN6P"),
            g = n("elIT");
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, f, v, y, b = (0, r.c)(56),
                    {
                        conversationTerminology: x,
                        onAddSelectedText: w,
                        onStartFileAnnotation: C,
                        onDismissFileAnnotation: I,
                        onCommentSelectedText: _,
                        onEditModeChange: S,
                        onEditSelectedText: j,
                        onMoreDetails: T,
                        onOpenSideChat: E,
                        resume: P,
                        selectedText: M
                    } = e,
                    A = void 0 === x ? "task" : x,
                    k = (0, s.a)(),
                    [R, O] = (0, o.useState)(P?.mode === "edit" ? P.instruction : ""),
                    [N, F] = (0, o.useState)(P?.mode ?? "actions"),
                    [z, L] = (0, o.useState)(null);
                if (null != z) {
                    let e, t, n;
                    return b[0] !== I ? (e = () => I?.(!1), t = () => I?.(!0), b[0] = I, b[1] = e, b[2] = t) : (e = b[1], t = b[2]), b[3] !== z.rect || b[4] !== z.submit || b[5] !== e || b[6] !== t ? (n = (0, a.jsx)(l.a, {
                        entryRect: z.rect,
                        onCancel: e,
                        onEscape: t,
                        onSubmit: z.submit
                    }), b[3] = z.rect, b[4] = z.submit, b[5] = e, b[6] = t, b[7] = n) : n = b[7], n
                }
                if ("pending" === N) return null;
                if ("edit" === N && null != j) {
                    let e, t, n, r, o, s, i, l, d, p;
                    return b[8] !== S ? (e = e => {
                        e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), S?.(!1), F("actions-focused"))
                    }, b[8] = S, b[9] = e) : e = b[9], b[10] !== R || b[11] !== S || b[12] !== j ? (t = e => {
                        e.preventDefault(), 0 !== R.trim().length && (F("pending"), j(R).then(e => {
                            "retry" === e && (S?.(!1), F("actions-focused"))
                        }))
                    }, b[10] = R, b[11] = S, b[12] = j, b[13] = t) : t = b[13], b[14] !== k ? (n = k.formatMessage({
                        id: "selectedTextOverlay.editInput",
                        defaultMessage: "Edit instruction"
                    }), b[14] = k, b[15] = n) : n = b[15], b[16] !== k ? (r = k.formatMessage({
                        id: "selectedTextOverlay.editPlaceholder",
                        defaultMessage: "Describe the edit…"
                    }), b[16] = k, b[17] = r) : r = b[17], b[18] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                        O(e.target.value)
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
                        defaultMessage: "Submit edit instruction"
                    }), b[23] = k, b[24] = i) : i = b[24], b[25] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(u.a, {
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
                    }), b[26] = i, b[27] = d) : d = b[27], b[28] !== d || b[29] !== e || b[30] !== t || b[31] !== s ? (p = (0, a.jsxs)("form", {
                        className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                        onKeyDown: e,
                        onSubmit: t,
                        children: [s, d]
                    }), b[28] = d, b[29] = e, b[30] = t, b[31] = s, b[32] = p) : p = b[32], p
                }
                return b[33] !== A || b[34] !== w || b[35] !== C || b[36] !== M ? (t = null != w || null != C ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        null != C ? L({
                            rect: (e.currentTarget.parentElement ?? e.currentTarget).getBoundingClientRect(),
                            submit: C()
                        }) : (window.getSelection()?.removeAllRanges(), w?.(M))
                    },
                    children: "chat" === A ? (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToChat",
                        defaultMessage: "Ask ChatGPT"
                    }) : (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.addToCodex",
                        defaultMessage: "Add to chat"
                    })
                }) : null, b[33] = A, b[34] = w, b[35] = C, b[36] = M, b[37] = t) : t = b[37], b[38] !== T || b[39] !== M ? (n = null != T ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), T(M)
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.moreDetails",
                        defaultMessage: "More details"
                    })
                }) : null, b[38] = T, b[39] = M, b[40] = n) : n = b[40], b[41] !== E || b[42] !== M ? (m = null != E ? (0, a.jsx)(d.b, {
                    onClick: e => {
                        window.getSelection()?.removeAllRanges(), E(M, (0, p.b)(e))
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.askInSideChat",
                        defaultMessage: "Ask in side chat"
                    })
                }) : null, b[41] = E, b[42] = M, b[43] = m) : m = b[43], b[44] !== _ ? (f = null != _ ? (0, a.jsx)(d.b, {
                    onClick: () => {
                        window.getSelection()?.removeAllRanges(), _()
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.comment",
                        defaultMessage: "Comment"
                    })
                }) : null, b[44] = _, b[45] = f) : f = b[45], b[46] !== N || b[47] !== S || b[48] !== j ? (v = null != j ? (0, a.jsx)(d.b, {
                    autoFocus: "actions-focused" === N,
                    onClick: () => {
                        S?.(!0), F("edit")
                    },
                    children: (0, a.jsx)(i.a, {
                        id: "selectedTextOverlay.edit",
                        defaultMessage: "Edit"
                    })
                }) : null, b[46] = N, b[47] = S, b[48] = j, b[49] = v) : v = b[49], b[50] !== t || b[51] !== n || b[52] !== m || b[53] !== f || b[54] !== v ? (y = (0, a.jsxs)(d.a, {
                    children: [t, n, m, f, v]
                }), b[50] = t, b[51] = n, b[52] = m, b[53] = f, b[54] = v, b[55] = y) : y = b[55], y
            }
        })
    }),
    hjXH: (function(e, t) {
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