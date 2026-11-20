export const __rspack_esm_ids = [396705];
export const __webpack_modules__ = {
    TL6G: (function(e, t, a) {
        a.d(t, {
            a: () => l,
            b: () => h,
            c: () => u,
            d: () => d
        });
        var n = a("QosV"),
            r = a("zd8w"),
            s = a("w5lg"),
            i = a("SrbS"),
            o = a("wl0r");
        let c = new Set(["mcp-request-delivery", "mcp-response", "personal-workspace-access-blocked"]);
        class l {
            static instance = null;
            static getInstance() {
                return null == this.instance && (this.instance = new l), this.instance
            }
            handlers = new Map;
            bufferedMessages = new Map;
            handledBufferedMessages = new WeakSet;
            hostMessageInterceptors = new Set;
            isListeningToWindow = !1;
            initialized = !1;
            windowMessageListener = e => {
                this.handleMessage(e)
            };
            constructor() {
                this.dispatchMessage = this.dispatchMessage.bind(this)
            }
            initialize() {
                this.initialized || (this.startWindowMessageListener(), (0, i.b)((e, t) => {
                    this.dispatchMessage(e, t)
                }), this.initialized = !0)
            }
            dispatchMessage(e, t) {
                if (null == o.g) throw Error("VS Code API is unavailable");
                o.g.postMessage({
                    ...t,
                    type: e
                })
            }
            deliverMessage(e, t) {
                let a = this.handlers.get(e);
                if (!a) return;
                let n = (e, t) => {
                    this.dispatchMessage(e, t)
                };
                for (let e of a) e(t, n)
            }
            dispatchHostMessage(e) {
                this.deliverOrBufferMessage(e)
            }
            hasHandledBufferedMessage(e) {
                return this.handledBufferedMessages.has(e)
            }
            startTestWindowMessageListener() {
                throw Error("Test message listeners are only available in tests")
            }
            deliverOrBufferMessage(e) {
                for (let {
                        intercept: t
                    }
                    of this.hostMessageInterceptors) try {
                    if (t(e)) return
                } catch (e) {
                    reportError(e)
                }
                if (c.has(e.type) && this.handledBufferedMessages.add(e), c.has(e.type) && !this.handlers.has(e.type)) {
                    let t = "personal-workspace-access-blocked" === e.type ? [] : this.bufferedMessages.get(e.type) ?? [];
                    t.push(e), this.bufferedMessages.set(e.type, t);
                    return
                }
                this.deliverMessage(e.type, e)
            }
            handleMessage(e) {
                let t = (0, s.a)(e);
                null != t && this.deliverOrBufferMessage(t)
            }
            startWindowMessageListener() {
                this.isListeningToWindow || (window.addEventListener("message", this.windowMessageListener), this.isListeningToWindow = !0)
            }
            stopWindowMessageListener() {
                this.isListeningToWindow && (window.removeEventListener("message", this.windowMessageListener), this.isListeningToWindow = !1)
            }
            reset() {
                this.handlers.clear(), this.hostMessageInterceptors.clear(), this.bufferedMessages.clear(), this.handledBufferedMessages = new WeakSet
            }
            interceptHostMessages(e) {
                let t = {
                    intercept: e
                };
                return this.hostMessageInterceptors.add(t), () => {
                    this.hostMessageInterceptors.delete(t)
                }
            }
            subscribe(e, t) {
                let a = this.handlers.get(e) ?? new Set;
                a.add(t), this.handlers.set(e, a);
                let n = this.bufferedMessages.get(e);
                if (null != n)
                    for (let t of (this.bufferedMessages.delete(e), n)) this.deliverMessage(e, t);
                return () => {
                    let a = this.handlers.get(e);
                    a && (a.delete(t), 0 === a.size && this.handlers.delete(e))
                }
            }
        }

        function d(e, t, a) {
            let s, i, o, c, d = (0, n.c)(9);
            d[0] !== a ? (s = void 0 === a ? [] : a, d[0] = a, d[1] = s) : s = d[1];
            let u = s;
            d[2] === Symbol.for("react.memo_cache_sentinel") ? (i = l.getInstance(), d[2] = i) : i = d[2];
            let h = i,
                p = (0, r.useEffectEvent)(t);
            d[3] !== p || d[4] !== e ? (o = () => {
                let t = h.subscribe(e, p);
                return () => t()
            }, d[3] = p, d[4] = e, d[5] = o) : o = d[5], d[6] !== u || d[7] !== e ? (c = [h, e, ...u], d[6] = u, d[7] = e, d[8] = c) : c = d[8], (0, r.useEffect)(o, c)
        }
        let u = l.getInstance();

        function h() {
            u.initialize()
        }
        h()
    }),
    lxu0: (function(e, t, a) {
        var n = a("QosV"),
            r = a("irkb"),
            s = a("Q840"),
            i = a("UKCO"),
            o = a("zd8w"),
            c = a("UOeP"),
            l = a("rljs"),
            d = a("shRG"),
            u = a("Dgwo"),
            h = a("tl5a"),
            p = a("rk7m"),
            m = a("rtPM"),
            g = a("MLeN"),
            f = a("RU3e"),
            b = a("CSxw"),
            y = a("TleN"),
            w = a("TL6G"),
            v = a("xzRU"),
            P = a("UrCy"),
            k = a("GaA7"),
            I = a("OWtl"),
            _ = a("ndjw"),
            C = a("hZax"),
            S = a("WFY2"),
            E = a("TurB");
        a.d(t, {}, {
            a: function() {
                let e, t, a, A, L, R, M, x, q, O, T, F, D, K, B = (0, n.c)(40),
                    N = (0, s.y)(I.a),
                    W = (0, C.f)("4226282475"),
                    U = (0, r.c)();
                B[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, b.b)(), B[0] = e) : e = B[0];
                let Q = e,
                    j = (0, y.a)(),
                    H = (0, s.z)(p.b);
                B[1] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, B[1] = t) : t = B[1];
                let z = (0, o.useRef)(t);
                B[2] === Symbol.for("react.memo_cache_sentinel") ? (a = new Map, B[2] = a) : a = B[2];
                let G = (0, o.useRef)(a);
                B[3] === Symbol.for("react.memo_cache_sentinel") ? (A = new Set, B[3] = A) : A = B[3];
                let V = (0, o.useRef)(A);
                B[4] !== N ? (L = () => (0, c.a)(N), R = [N], B[4] = N, B[5] = L, B[6] = R) : (L = B[5], R = B[6]), (0, o.useEffect)(L, R), B[7] !== N || B[8] !== W ? (M = async function(e, t) {
                    if (!N.get(h.m, t)) return !1;
                    let a = await (0, g.a)(N, t, {
                            allowProjectSourceRoots: !0
                        }),
                        n = N.get(h.X, t) ?? null;
                    return "ready" === (await (0, u.b)(N, e).resumeConversation({
                        conversationId: t,
                        model: null,
                        reasoningEffort: null,
                        workspaceRoots: a,
                        useAppServerPermissionDefault: W,
                        collaborationMode: n
                    }, {
                        readResumeInputs: (0, d.a)(N, e)
                    })).status
                }, B[7] = N, B[8] = W, B[9] = M) : M = B[9];
                let X = M;
                B[10] !== j || B[11] !== H || B[12] !== U || B[13] !== X || B[14] !== N ? (x = async function(e) {
                    let t = z.current.get(e);
                    if (t) {
                        t.requestedAgain = !0, await t.promise;
                        return
                    }
                    let a = Promise.resolve().then(async () => {
                            do {
                                n.requestedAgain = !1;
                                try {
                                    Promise.all([(0, v.a)(U, e), (0, E.g)(N, e)]).catch(t => {
                                        S.a.warning("websocket_reconnect_recovery_metadata_refresh_failed", {
                                            safe: {
                                                hostId: e,
                                                currentConversationId: j ?? null
                                            },
                                            sensitive: {
                                                error: t
                                            }
                                        })
                                    }), S.a.info("websocket_reconnect_recovery_start", {
                                        safe: {
                                            hostId: e,
                                            currentConversationId: j ?? null
                                        },
                                        sensitive: {}
                                    });
                                    let t = null != j && N.get(h.yb, j) === e;
                                    (0, m.c)(N, e, {
                                        restoreStreams: !0,
                                        foregroundConversationId: t ? j : null
                                    });
                                    let a = !1;
                                    try {
                                        "live" === H || (0, i.gi)(e) ? await (0, u.b)(N, e).refreshRecentConversations() : "catalog" === H && await k.a.localThreadCatalog?.invalidateSource(e)
                                    } catch (t) {
                                        a = !0, S.a.warning("websocket_reconnect_recovery_thread_list_refresh_failed", {
                                            safe: {
                                                hostId: e,
                                                currentConversationId: j ?? null
                                            },
                                            sensitive: {
                                                error: t
                                            }
                                        })
                                    }
                                    let n = !!t && null != j && await X(e, j);
                                    S.a.info("websocket_reconnect_recovery_done", {
                                        safe: {
                                            hostId: e,
                                            currentConversationId: j ?? null,
                                            currentConversationExistsOnTargetHost: t,
                                            resumedCurrentConversation: n,
                                            refreshRecentConversationsFailed: a
                                        },
                                        sensitive: {}
                                    })
                                } catch (t) {
                                    S.a.error("websocket_reconnect_recovery_failed", {
                                        safe: {
                                            hostId: e,
                                            conversationId: j ?? null
                                        },
                                        sensitive: {
                                            error: t
                                        }
                                    })
                                }
                            } while (n.requestedAgain)
                        }).finally(() => {
                            z.current.delete(e)
                        }),
                        n = {
                            promise: a,
                            requestedAgain: !1
                        };
                    z.current.set(e, n), await a
                }, B[10] = j, B[11] = H, B[12] = U, B[13] = X, B[14] = N, B[15] = x) : x = B[15];
                let Y = x;
                B[16] !== N ? (q = async function(e) {
                    let t = G.current;
                    t.has(e) ? t.set(e, !0) : await (async () => {
                        do {
                            t.set(e, !1);
                            try {
                                await (0, E.g)(N, e)
                            } catch (t) {
                                S.a.warning("stdio_ssh_reconnect_worktree_refresh_failed", {
                                    safe: {},
                                    sensitive: {
                                        error: t,
                                        hostId: e
                                    }
                                })
                            }
                        } while (t.get(e))
                    })().finally(() => {
                        t.delete(e)
                    })
                }, B[16] = N, B[17] = q) : q = B[17];
                let $ = q;
                B[18] !== j || B[19] !== U || B[20] !== X || B[21] !== N ? (O = async function(e, t) {
                    let a = z.current.get(e);
                    null != a && await a.promise, V.current.has(e) || (V.current.add(e), await (async () => {
                        try {
                            if (await Promise.all([U.invalidateQueries({
                                    queryKey: ["mcp-extension-host-thread", e]
                                }), U.invalidateQueries({
                                    queryKey: ["user-saved-config"]
                                }), U.invalidateQueries({
                                    queryKey: (0, P.a)(e)
                                }), U.invalidateQueries({
                                    queryKey: (0, P.b)(e)
                                })]), (0, m.a)(N, e), !t) return;
                            let a = null != j && N.get(h.yb, j) === e;
                            (0, m.c)(N, e, {
                                restoreStreams: !0,
                                foregroundConversationId: a ? j : null
                            });
                            let n = !!a && null != j && await X(e, j);
                            S.a.info("app_server_restart_recovery_done", {
                                safe: {
                                    hostId: e,
                                    currentConversationId: j ?? null,
                                    currentConversationExistsOnTargetHost: a,
                                    resumedCurrentConversation: n
                                },
                                sensitive: {}
                            })
                        } catch (t) {
                            S.a.error("app_server_restart_recovery_failed", {
                                safe: {
                                    hostId: e,
                                    conversationId: j ?? null
                                },
                                sensitive: {
                                    error: t
                                }
                            })
                        }
                    })().finally(() => {
                        V.current.delete(e)
                    }))
                }, B[18] = j, B[19] = U, B[20] = X, B[21] = N, B[22] = O) : O = B[22];
                let J = O;
                return B[23] !== U || B[24] !== $ || B[25] !== Y || B[26] !== N ? (T = e => {
                    let t = N.get(l.f, e.hostId);
                    if (t || void 0 === e.appServerVersion || (0, h.Hb)(N, {
                            appServerVersion: e.appServerVersion,
                            hostId: e.hostId,
                            installedCodexVersion: e.installedCodexVersion,
                            supportsCloudDaybreak: e.supportsCloudDaybreak
                        }), S.a.info("remote_connections.connection_state_changed", {
                            safe: {
                                appServerVersion: e.appServerVersion,
                                progress: e.progress,
                                state: e.state
                            },
                            sensitive: {
                                error: e.error,
                                hostId: e.hostId
                            }
                        }), !N.get(h.vb).includes(e.hostId)) return void S.a.info("remote_connections.connection_state_ignored_for_missing_manager", {
                        safe: {
                            state: e.state
                        },
                        sensitive: {
                            hostId: e.hostId
                        }
                    });
                    if (t || ((0, h.Fb)(N, e.hostId, e.progress), (0, h.Gb)(N, {
                            error: e.error,
                            hostId: e.hostId,
                            source: "host_connection_state_changed",
                            sshAuthenticationRetryAt: e.sshAuthenticationRetryAt ?? null,
                            state: e.state
                        })), !e.isSnapshot && "connected" === e.state) {
                        if (Q && !0 !== N.get(f.b)) {
                            "websocket" === e.transport && (0, m.c)(N, e.hostId, {
                                restoreStreams: !0,
                                foregroundConversationId: null
                            });
                            return
                        }
                        if ("stdio" === e.transport && (0, i.Ki)(N.get(_.g, e.hostId))) {
                            (0, v.a)(U, e.hostId).catch(t => {
                                S.a.warning("stdio_ssh_reconnect_permission_refresh_failed", {
                                    safe: {},
                                    sensitive: {
                                        error: t,
                                        hostId: e.hostId
                                    }
                                })
                            }), $(e.hostId);
                            return
                        }
                        "websocket" === e.transport && Y(e.hostId)
                    }
                }, B[23] = U, B[24] = $, B[25] = Y, B[26] = N, B[27] = T) : T = B[27], B[28] !== j || B[29] !== H || B[30] !== U || B[31] !== N ? (F = [N, Q, j, H, U], B[28] = j, B[29] = H, B[30] = U, B[31] = N, B[32] = F) : F = B[32], (0, w.d)("codex-app-server-connection-changed", T, F), B[33] !== J || B[34] !== N ? (D = e => {
                    e.isSnapshot || Q && !0 !== N.get(f.b) || J(e.hostId, "websocket" !== e.transport)
                }, B[33] = J, B[34] = N, B[35] = D) : D = B[35], B[36] !== j || B[37] !== U || B[38] !== N ? (K = [Q, j, U, N], B[36] = j, B[37] = U, B[38] = N, B[39] = K) : K = B[39], (0, w.d)("codex-app-server-initialized", D, K), null
            }
        })
    }),
    wIno: (function(e, t, a) {
        var n = a("SRbQ"),
            r = a("ABep"),
            s = a("yTnN"),
            i = a("zPtR"),
            o = a("iRMi"),
            c = a("OSkm"),
            l = a("irkb"),
            d = a("AlRz"),
            u = a("Q840"),
            h = a("UKCO"),
            p = a("OeLR"),
            m = a("Ehlj"),
            g = a("OP23"),
            f = a("fA1m"),
            b = a("zd8w"),
            y = a("rEML"),
            w = a("Is2c"),
            v = a("ZEYh"),
            P = a("Dgwo"),
            k = a("uku1"),
            I = a("l00C"),
            _ = a("wkUO"),
            C = a("EpL9"),
            S = a("eyg4"),
            E = a("p24q");
        a("pLiJ");
        var A = a("NVPY"),
            L = a("QLtS"),
            R = a("JVSG"),
            M = a("unIO"),
            x = a("j9xU"),
            q = a("KH2l"),
            O = a("W0nC"),
            T = a("ReGc"),
            F = a("szIs"),
            D = a("qj4H"),
            K = a("vLsY"),
            B = a("jMec"),
            N = a("Telb"),
            W = a("kMxU"),
            U = a("joNQ"),
            Q = a("dQAD"),
            j = a("gQXi"),
            H = a("g5Nq"),
            z = a("nin5"),
            G = a("Wefw"),
            V = a("P5vn"),
            X = a("fGFs"),
            Y = a("StMt"),
            $ = a("Ei9z"),
            J = a("ysE7"),
            Z = a("UduS"),
            ee = a("tl5a"),
            et = a("GF9W"),
            ea = a("rk7m"),
            en = a("BgXp"),
            er = a("jlrG"),
            es = a("GYKx"),
            ei = a("rtPM"),
            eo = a("IBLs"),
            ec = a("QDwu"),
            el = a("wCOm"),
            ed = a("vl5l"),
            eu = a("RU3e"),
            eh = a("RQkm"),
            ep = a("i8Zd"),
            em = a("oo2L"),
            eg = a("yGJ5"),
            ef = a("v5Eh"),
            eb = a("Rvvc"),
            ey = a("HUHI"),
            ew = a("sT8g"),
            ev = a("OiCI"),
            eP = a("h6fL"),
            ek = a("KJlv"),
            eI = a("mkNg"),
            e_ = a("GiCe"),
            eC = a("rWsS");
        a("S99C");
        var eS = a("q3HK"),
            eE = a("CSxw"),
            eA = a("jEN2"),
            eL = a("X6Vn"),
            eR = a("SGsN"),
            eM = a("obo5"),
            ex = a("U6F1"),
            eq = a("w5lg"),
            eO = a("PFP1"),
            eT = a("XYHU"),
            eF = a("svjy"),
            eD = a("Rpy5"),
            eK = a("ziRc"),
            eB = a("TL6G");
        a("noCE");
        var eN = a("e1xH"),
            eW = a("loz7"),
            eU = a("PmQd"),
            eQ = a("bNMl"),
            ej = a("XZon"),
            eH = a("a4MG"),
            ez = a("Gg2s"),
            eG = a("doff"),
            eV = a("dPoV"),
            eX = a("Q4dB"),
            eY = a("Q3tq");
        a("WYBZ");
        var e$ = a("pnaf"),
            eJ = a("pwwq"),
            eZ = a("epmH"),
            e6 = a("GaA7"),
            e7 = a("iDH4"),
            e8 = a("W2Qq"),
            e9 = a("OWtl"),
            e5 = a("ndjw"),
            e3 = a("ADAj"),
            e0 = a("kfGJ"),
            e1 = a("ZJGn"),
            e4 = a("Hcte"),
            e2 = a("r4QU"),
            te = a("bPa2"),
            tt = a("OMIV"),
            ta = a("iccR"),
            tn = a("sa2M"),
            tr = a("lJ2N"),
            ts = a("fvOC"),
            ti = a("WFY2"),
            to = a("gi6X"),
            tc = a("wl0r"),
            tl = a("dg06");

        function td(e, t) {
            "windows-update-observed" === t.type ? (0, V.a)(e.get(eQ.d), t.observation) : (0, Q.a)(e, t, e => e6.a.installerAttribution?.acknowledge(e) ?? Promise.resolve())
        }
        a.d(t, {}, {
            a: function(e) {
                let {
                    children: t
                } = e, Q = (0, u.y)(e9.a), V = (0, u.z)(eQ.d), tu = (0, b.useRef)([]), th = (0, y.Z)(), tp = (0, y.ab)(), tm = (0, eP.a)(), tg = (0, l.c)(), tf = (0, eE.b)(), tb = (0, eg.h)(), ty = (0, b.useRef)(new Map), tw = (0, b.useRef)(0), tv = (0, b.useRef)([]), tP = (0, b.useRef)(new WeakSet), {
                    claimAppConnectOAuthCallback: tk,
                    clearPendingAppConnect: tI,
                    getPendingAppConnectForCallbackUrl: t_
                } = (0, eg.g)(), tC = (0, b.useEffectEvent)(async e => {
                    let {
                        fullRedirectUrl: t,
                        returnTo: n,
                        source: r
                    } = e;
                    if ((0, eC.a)(t)) return;
                    let i = URL.parse(t);
                    if ((i?.protocol === "codex:" || i?.protocol === "codex-dev:") && i?.hostname === "connector" && ("/oauth_callback/onepassword" === i.pathname || "/oauth_callback/onepassword-staging" === i.pathname)) {
                        let {
                            completeNativeOnePasswordEnrollment: e
                        } = await a.e(779886).then(a.bind(a, "RWpI"));
                        await e(Q, i);
                        return
                    }
                    if (null != i && null != (0, S.a)(i)) {
                        let {
                            completeHealthDesktopOAuth: e
                        } = await (0, s.b)();
                        await e(Q, t);
                        return
                    }
                    let o = performance.timeOrigin + performance.now(),
                        c = t_(t),
                        l = "direct" === r && c?.returnTo === "/welcome",
                        d = c?.resumeTarget.kind,
                        u = c?.returnTo === `${th.pathname}${th.search}${th.hash}` && (null != (0, y.L)(h.yc, th.pathname) || null != (0, y.L)(h.td, th.pathname)) && ("connector-auth-elicitation" === d || "tool-suggestion-elicitation" === d || "plugin-install" === d && !c.isGithubConnector && c.appId !== eb.c);
                    if (null == c || !l && !u && ("mcp-connect-sheet" !== c.resumeTarget.kind || null != c.resumeTarget.homeSuggestion)) return void tp("/connector/oauth_callback", {
                        state: {
                            callbackReceivedAtMs: o,
                            fullRedirectUrl: t,
                            hasCallbackClaim: "broadcast" === r || void 0,
                            returnTo: n
                        }
                    });
                    if (!l && (0, ef.b)(Q.get(eW.o), c)) return void tI({
                        oauthState: c.oauthState
                    });
                    let p = "broadcast" === r || tk(t);
                    if (!l && !p) {
                        c.claimed || tp("/connector/oauth_callback", {
                            state: {
                                callbackReceivedAtMs: o,
                                fullRedirectUrl: t,
                                returnTo: n
                            }
                        });
                        return
                    }
                    let m = await tb({
                        callbackReceivedAtMs: o,
                        fullRedirectUrl: t,
                        hasCallbackClaim: p
                    });
                    if ("mcp-connect-sheet" !== c.resumeTarget.kind) {
                        if (!l && ((0, ef.c)(Q, c, m), (0, ef.b)(Q.get(eW.o), c))) return;
                        if ("success" !== m.kind || "plugin-install" !== d && l) "plugin-install" === d && (l && "request-failed" === m.kind && m.reinstallRequired ? Q.set(eW.o, e => (0, eW.e)(e, "failed")) : !l && (0, ef.d)(Q.get(eW.o)) ? Q.set(eW.o, e => (0, eW.e)(e)) : (0, eW.j)(Q, {
                            appId: c.appId,
                            status: "pending"
                        }));
                        else
                            for (let e of [m.appId, ...m.connectedCompanionAppIds ?? []])(0, eW.j)(Q, {
                                appId: e,
                                status: "connected"
                            });
                        if ("success" !== m.kind) {
                            let e = Q.get(eF.a),
                                t = "superseded" === m.kind ? (0, em.g)(e) : (0, ef.a)(e, m);
                            Q.get(eR.f).danger(t, {
                                errorAnalytics: {
                                    toastId: "messageHandler.handleAppConnectOAuthCallbackEvent"
                                }
                            })
                        }
                    }
                }), tS = (0, u.z)(B.a);
                return (0, b.useEffect)(() => (0, e7.a)(Q, P.b), [Q]), (0, b.useEffect)(() => {
                    let e = window.matchMedia("(display-mode: fullscreen)");
                    Q.set(eh.a, e.matches);
                    let t = e => {
                        Q.set(eh.a, e.matches)
                    };
                    return e.addEventListener("change", t), () => e.removeEventListener("change", t)
                }, [Q]), (0, b.useEffect)(() => {
                    if (V === eQ.b) return;
                    let e = tu.current;
                    for (let t of (tu.current = [], e)) td(Q, t)
                }, [V, Q]), (0, b.useEffect)(() => {
                    let e = [(0, eD.b)("automation-capability-event", e => {
                        "desktop" === e.sourceClientId && (0, er.a)(Q, e.params)
                    }), (0, eD.b)("automation-run-triggered-event", e => {
                        "desktop" === e.sourceClientId && (0, es.a)(Q, e.params)
                    }), (0, eD.b)("app-connect-oauth-callback-received", e => {
                        !(0, eC.a)(e.params.fullRedirectUrl) && tk(e.params.fullRedirectUrl) && tC({
                            fullRedirectUrl: e.params.fullRedirectUrl,
                            source: "broadcast"
                        })
                    }), (0, K.b)(tg), (0, eD.b)("thread-archived", e => {
                        tf || (tg.invalidateQueries({
                            queryKey: ["archived-threads", e.params.hostId]
                        }), tg.invalidateQueries({
                            queryKey: ["tasks"]
                        }))
                    }), (0, eD.b)("thread-unarchived", e => {
                        tf || (tg.invalidateQueries({
                            queryKey: ["archived-threads", e.params.hostId]
                        }), tg.invalidateQueries({
                            queryKey: ["tasks"]
                        }))
                    })];
                    return () => {
                        for (let t of e) t()
                    }
                }, [tk, tb, t_, tf, tp, tg, Q]), (0, b.useEffect)(() => {
                    let e = !1,
                        t = !1,
                        r = Q.watch(a => {
                            let {
                                get: r
                            } = a, s = r(eQ.d);
                            if (s === eQ.b) return;
                            if (!e && e6.a?.owlBrowserCrashCounter != null) {
                                let t = {
                                    stack: [],
                                    error: void 0,
                                    hasError: !1
                                };
                                try {
                                    e = !0, (0, n.a)(t, e6.a.owlBrowserCrashCounter.subscribe(e => s.trackCounter(o.CodexDesktopCrashCounter.CODEX_DESKTOP_CRASH_COUNTER_OWL_BROWSER_PROCESS_CRASHED, e)), !1)
                                } catch (e) {
                                    t.error = e, t.hasError = !0
                                } finally {
                                    (0, n.e)(t)
                                }
                            }
                            if (!t && e6.a?.inAppBrowserIncompleteNavigation != null) {
                                let e = {
                                    stack: [],
                                    error: void 0,
                                    hasError: !1
                                };
                                try {
                                    t = !0, (0, n.a)(e, e6.a.inAppBrowserIncompleteNavigation.subscribe(e => (0, H.a)(Q, e)), !1)
                                } catch (t) {
                                    e.error = t, e.hasError = !0
                                } finally {
                                    (0, n.e)(e)
                                }
                            }
                            if (0 === ty.current.size && 0 === tv.current.length && 0 === tw.current) return;
                            let i = ty.current;
                            for (let [e, t] of(ty.current = new Map, i)) s.trackCounter(e, t);
                            let c = tv.current;
                            for (let e of (tv.current = [], c))(0, eQ.a)(Q, o.CodexInAppBrowserPageLoaded, e);
                            let l = tw.current;
                            tw.current = 0;
                            for (let e = 0; e < l; e++)(0, eQ.a)(Q, o.CodexLinkClicked, {
                                destination: "in-app-browser",
                                preferenceSource: "os",
                                modifiedClick: !1
                            })
                        }),
                        s = function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                a = Q.get(eQ.d);
                            if (a === eQ.b) {
                                let a = ty.current.get(e) ?? 0;
                                ty.current.set(e, Math.min(a + t, 50));
                                return
                            }
                            a.trackCounter(e, t)
                        },
                        l = (e, t) => {
                            let a = Q.get(e2.a);
                            null != a && (0, ts.a)(tg, (0, e4.a)(a, e, t), {
                                cancelRefetch: !1
                            }), (0, ts.a)(tg, {
                                queryKey: F.a
                            }, {
                                cancelRefetch: !1
                            })
                        },
                        u = e => {
                            (async e => {
                                if ("realtime-voice-launch-state-changed" !== e.type) switch (e.type) {
                                    case "open-agent-onboarding":
                                        await async function(e) {
                                            let {
                                                openOrbitOnboarding: t
                                            } = await a.e(19503).then(a.bind(a, "tGzX"));
                                            t(e)
                                        }(Q);
                                        break;
                                    case "start-dot-meeting-recording":
                                    case "worker-response":
                                    case "worker-event":
                                    case "fetch-response":
                                    case "open-presence-playground":
                                    case "chatgpt-auth-token-unavailable":
                                    case "codex-micro-device-lifecycle":
                                    case "codex-micro-device-state-changed":
                                    case "codex-micro-window-ownership-changed":
                                    case "codex-micro-hid-event":
                                    case "codex-micro-joystick-event":
                                    case "primary-runtime-install-progress":
                                    case "workspace-root-option-picked":
                                    case "workspace-root-option-add-canceled":
                                    case "browser-sidebar-direct-comment":
                                    case "artifact-direct-comment":
                                    case "pdf-direct-comment":
                                    case "electron-onboarding-skip-workspace-result":
                                    case "open-file-changed":
                                    case "mcp-resource-updated":
                                    case "mcp-event-notification":
                                    case "personal-workspace-access-blocked":
                                        break;
                                    case "desktop-app-entry-received":
                                    case "windows-update-observed":
                                        if (V === eQ.b) {
                                            tu.current.push(e);
                                            break
                                        }
                                        td(Q, e);
                                        break;
                                    case "show-chatgpt-rosalind-announcement":
                                        Q.set(X.a, {
                                            source: "activation_deeplink"
                                        });
                                        break;
                                    case "close-terminal-session":
                                        tn.a.closeForConversation((0, ta.a)(Q, (0, h.Xe)(e.conversationId)));
                                        break;
                                    case "computer-use-analytics-event":
                                        (0, U.a)(Q, e);
                                        break;
                                    case "ephemeral-generation-token-usage":
                                        (0, j.a)(Q, e);
                                        break;
                                    case "ambient-suggestion-generation":
                                        (0, W.b)(Q, e);
                                        break;
                                    case "bundled-plugins-changed":
                                        (0, eU.a)(Q, e.hostId, e.reason);
                                        break;
                                    case "bundled-plugin-install-state-observed":
                                        (0, eQ.a)(Q, o.CodexBundledPluginInstallStateObserved, e.observation);
                                        break;
                                    case "browser-sidebar-tab-lifecycle":
                                        (0, e_.a)(Q, e);
                                        break;
                                    case "toggle-browser-panel":
                                        if (!0 === e.open && null != e.url && ("external_link" === e.initiator || "os_open" === e.initiator)) {
                                            if (Q.get(eQ.d) === eQ.b) {
                                                tw.current = Math.min(tw.current + 1, 50);
                                                break
                                            }(0, eQ.a)(Q, o.CodexLinkClicked, {
                                                destination: "in-app-browser",
                                                preferenceSource: "os",
                                                modifiedClick: !1
                                            })
                                        }
                                        break;
                                    case "browser-sidebar-page-loaded": {
                                        s(o.CodexInAppBrowserCounter.CODEX_IN_APP_BROWSER_COUNTER_PAGE_LOADED);
                                        let t = (0, z.a)(e, tm, tg);
                                        if (Q.get(eQ.d) === eQ.b) {
                                            tv.current.length < 50 && tv.current.push(t);
                                            break
                                        }(0, eQ.a)(Q, o.CodexInAppBrowserPageLoaded, t);
                                        break
                                    }
                                    case "browser-sidebar-tab-render-process-gone":
                                        s(o.CodexDesktopCrashCounter.CODEX_DESKTOP_CRASH_COUNTER_IN_APP_BROWSER_TAB_RENDER_PROCESS_GONE);
                                        break;
                                    case "codex-ui-render-process-gone":
                                        s(o.CodexDesktopCrashCounter.CODEX_DESKTOP_CRASH_COUNTER_UI_RENDER_PROCESS_GONE);
                                        break;
                                    case "browser-sidebar-context-menu-action":
                                        (0, eQ.a)(Q, o.CodexInAppBrowserContextMenuAction, {
                                            action: "quick-annotate" === e.action ? o.CodexInAppBrowserContextMenuActionType.CODEX_IN_APP_BROWSER_CONTEXT_MENU_ACTION_TYPE_QUICK_ANNOTATE_CLICKED : o.CodexInAppBrowserContextMenuActionType.CODEX_IN_APP_BROWSER_CONTEXT_MENU_ACTION_TYPE_ANNOTATE_CLICKED
                                        });
                                        break;
                                    case "visual-content-action-clicked":
                                        (0, G.a)(Q, {
                                            action: "save-image" === e.action ? o.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE : o.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_COPY_IMAGE,
                                            surface: o.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU
                                        });
                                        break;
                                    case "chat-font-settings":
                                        (0, tr.a)(document.documentElement, {
                                            "--codex-chat-font-size-override": "number" == typeof e.chatFontSize ? `${e.chatFontSize}px` : void 0,
                                            "--codex-chat-code-font-size-override": "number" == typeof e.chatCodeFontSize ? `${e.chatCodeFontSize}px` : void 0
                                        }), (0, ep.c)(Q);
                                        break;
                                    case "workspace-root-options-updated":
                                        tg.invalidateQueries({
                                            queryKey: (0, D.b)()
                                        }), tg.invalidateQueries({
                                            queryKey: (0, to.c)("git-origins")
                                        });
                                        break;
                                    case "global-state-updated":
                                        for (let t of (e.keys.includes(h.mc.QUEUED_FOLLOW_UPS) && Q.query.invalidate(_.b), e.keys.includes(h.mc.LOCAL_PROJECTS) && (tg.invalidateQueries({
                                                queryKey: (0, D.b)()
                                            }), tg.invalidateQueries({
                                                queryKey: (0, to.c)("git-origins")
                                            })), e.keys))(t === h.mc.BROWSER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED || t === h.mc.COMPUTER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED) && tg.invalidateQueries({
                                            queryKey: ["bundled-plugin-auto-install", t]
                                        }), tg.invalidateQueries({
                                            queryKey: (0, to.c)("get-global-state", {
                                                key: t
                                            })
                                        });
                                        break;
                                    case "thread-project-memberships-updated":
                                        await (0, eO.a)(Q, e.memberships);
                                        break;
                                    case "workspace-root-option-added": {
                                        let t = e.selectedProjectId ?? e.projectId;
                                        null != t && (0, e5.t)(Q, t);
                                        break
                                    }
                                    case "tasks-reload-requested":
                                        tf || tg.invalidateQueries({
                                            queryKey: ["tasks"]
                                        });
                                        break;
                                    case "worktrees-reload-requested":
                                        tg.invalidateQueries({
                                            queryKey: (0, tl.a)(e.hostId)
                                        }), tg.invalidateQueries({
                                            queryKey: (0, tl.b)(e.hostId)
                                        });
                                        break;
                                    case "invalidate-thread-search":
                                        (0, ed.a)(tg, e.hostId), tg.invalidateQueries({
                                            queryKey: ["archived-threads", e.hostId]
                                        });
                                        break;
                                    case "refetch-review-file-source":
                                        (0, eZ.f)({
                                            openFiles: [{
                                                hostId: e.hostId,
                                                path: e.path
                                            }],
                                            queryClient: tg
                                        });
                                        break;
                                    case "review-file-source-changed":
                                        (0, eZ.d)(Q, {
                                            hostId: e.hostId,
                                            path: e.path
                                        });
                                        break;
                                    case "dynamic-tool-call-requested":
                                        await (0, J.a)({
                                            scope: Q,
                                            hostId: e.hostId,
                                            queryClient: tg,
                                            serverRequest: e.serverRequest,
                                            transport: "dynamic"
                                        });
                                        break;
                                    case "dynamic-tools-for-thread-start-requested": {
                                        let t = [],
                                            a = !1;
                                        try {
                                            let n = Q.get(e$.d),
                                                r = e.realtimeVoiceDynamicTools ?? n?.dynamicTools,
                                                s = n?.existingThreadVoiceEnabled === !0,
                                                i = tg.getQueryData([...eH.f, e.hostId])?.response.config,
                                                o = e.featureOverrides ?? (e.useDefaultFeatureOverrides ? tS ?? null : null),
                                                c = (r?.appshotsEnabled ?? !1) && (0, e3.b)(Q.get, (0, f.a)().screenContextEnabled),
                                                l = c && Q.get(ew.c, e.hostId),
                                                d = null == i ? i : (0, el.a)(i),
                                                u = (0, eX.b)(e.hostId, tm.authMethod);
                                            (0, el.d)(d) && u.push(d?.model_provider ?? ""), "string" == typeof d?.model_catalog_json && u.push(d.model_catalog_json);
                                            let m = e.hostId !== e0.a || tm.isLoading ? void 0 : tg.getQueryData(u);
                                            a = (0, ek.a)(Q, e.hostId, !0);
                                            let b = (0, tt.b)(Q, "1636133258"),
                                                y = b && (0, h.gi)(e.hostId) && await (0, O.c)(Q, e.selectedEnvironmentId),
                                                k = (0, h.gi)(e.hostId) && null != e6.a.cloudPreviews && await e6.a.cloudPreviews.available().catch(() => !1),
                                                I = Q.get(ee.d, e.hostId),
                                                _ = (0, v.a)({
                                                    userSimulationTool: null,
                                                    cloudPreviewsAvailable: k,
                                                    cloudEnvironmentsEnabled: Q.get(x.c),
                                                    managedWorktreesAvailable: null != e6.a.managedWorktrees,
                                                    linkedWorktreeAttachEnabled: Q.get(tt.e, "505458"),
                                                    gitWorktreeAttachEnabled: ((0, h.gi)(e.hostId) || !e.hasCloudEnvironment && (null == e.selectedEnvironmentId || "local" === e.selectedEnvironmentId)) && (0, w.a)(Q.get(tt.g), e.hostId),
                                                    cloudWorktreesEnabled: b,
                                                    hasWorktreeComputer: y,
                                                    latexAvailable: null != e6.a.latex,
                                                    appServerVersion: I,
                                                    availableHandoffHosts: (0, ec.c)(Q),
                                                    authMethod: e.hostId === e0.a ? tm.authMethod : null,
                                                    agentUsageResetEnabled: (0, e3.b)(Q.get, h.of.agentUsageResetEnabled),
                                                    crossHostHandoffEnabled: (0, tt.b)(Q, "2256010998"),
                                                    activityPhasesEnabled: (0, tt.b)(Q, "codex-cot-labels"),
                                                    runningSummaryEnabled: (0, tt.b)(Q, "3312776353") && ("all" === e.threadStartKind || Q.get(L.a)),
                                                    existingThreadVoiceEnabled: s,
                                                    enabledReasoningEfforts: Q.get(eY.b),
                                                    featureOverrides: o,
                                                    hasConfiguredModelCatalog: (0, p.e)(d),
                                                    confettiAvailable: Q.get(Y.a, {
                                                        name: "toys.confetti"
                                                    }).isCapable,
                                                    hostedAutomationsEnabled: a,
                                                    hostId: e.hostId,
                                                    hasCloudEnvironment: e.hasCloudEnvironment,
                                                    requestedHistoryMode: e.requestedHistoryMode,
                                                    includeUltraReasoningEffort: (0, tt.b)(Q, "1186680773"),
                                                    isAuthLoading: e.hostId !== e0.a || tm.isLoading,
                                                    isTabAvailable: e => {
                                                        let t = (0, C.d)(e);
                                                        return null != t && (null == t.isAvailableInApp || null != Q.get(P.a) && !0 === t.isAvailableInApp(Q))
                                                    },
                                                    isCustomModelProvider: (0, el.d)(d),
                                                    workspaceDependenciesEnabled: (0, g.c)(tg.getQueryData([...ez.a, e.hostId])),
                                                    models: m?.nextCursor == null ? m?.data : void 0,
                                                    modelAvailabilityConfig: Q.get(eV.a),
                                                    pagesEnabled: Q.get(eN.pagesEnabled$),
                                                    screenAnnotationsAllowed: !1,
                                                    screenSizeForAnnotations: null,
                                                    platform: Q.get(eT.d),
                                                    projectToolsEnabled: (0, tt.b)(Q, "3672665"),
                                                    pullRequestCheckDiagnosticsEnabled: Q.get(q.d),
                                                    queryClient: tg,
                                                    sidebarCustomSectionsEnabled: Q.get(e2.c),
                                                    appshotsAvailable: l,
                                                    appshotsEnabled: c,
                                                    voiceCallEndEnabled: r?.endRealtimeVoiceCallEnabled ?? !1,
                                                    voiceCallTransferEnabled: r?.transferVoiceCallEnabled ?? !1,
                                                    navigateToCodexPageEnabled: r?.navigateToCodexPageEnabled ?? !0,
                                                    mode: e.mode,
                                                    threadStartKind: e.threadStartKind,
                                                    threadSharingEnabled: (0, tt.b)(Q, "4157559322")
                                                });
                                            t = Array.isArray(_) ? _ : await _
                                        } catch (e) {
                                            ti.a.error("Failed to build dynamic tools for thread start", {
                                                safe: {},
                                                sensitive: {
                                                    error: e
                                                }
                                            })
                                        }
                                        if ("electron" === e.responseTarget) {
                                            tc.g.postMessage({
                                                type: "dynamic-tools-for-thread-start-response",
                                                requestId: e.requestId,
                                                dynamicTools: t,
                                                hostedAutomationsAvailable: a
                                            });
                                            break
                                        }
                                        if (!("respond" in e) || "function" != typeof e.respond) {
                                            ti.a.error("Missing renderer dynamic-tools response callback", {
                                                safe: {},
                                                sensitive: {}
                                            });
                                            break
                                        }
                                        try {
                                            e.respond(t)
                                        } catch (e) {
                                            ti.a.error("Failed to send dynamic tools for thread start", {
                                                safe: {},
                                                sensitive: {
                                                    error: e
                                                }
                                            })
                                        }
                                        break
                                    }
                                    case "thread-title-updated":
                                        if ((0, ei.f)(Q, e.hostId, e.conversationId, e.title), null != e.description) {
                                            let t = {
                                                stack: [],
                                                error: void 0,
                                                hasError: !1
                                            };
                                            try {
                                                let a = (0, n.a)(t, await (0, P.b)(Q, e.hostId).getCachedConversationMetadata(e.conversationId), !1);
                                                null != a && (0, eo.b)(Q, e.conversationId, e.description)
                                            } catch (e) {
                                                t.error = e, t.hasError = !0
                                            } finally {
                                                (0, n.e)(t)
                                            }
                                        }
                                        break;
                                    case h.nc.CHANGED:
                                        tf || (tg.invalidateQueries({
                                            queryKey: (0, A.g)()
                                        }), tg.invalidateQueries({
                                            queryKey: A.d
                                        }));
                                        break;
                                    case "mcp-response":
                                        if (null != e.trace && null != e.receivedAtMs && (0, eJ.c)({
                                                attributes: {
                                                    "app_server.method": e.requestMethod ?? "unknown",
                                                    "app_server.response_error": null != e.message.error,
                                                    ...null == e.message.error ? {} : {
                                                        "error.category": "app_server",
                                                        ...(0, h.Kf)(e.message.error.code, e.message.error)
                                                    }
                                                },
                                                failed: null != e.message.error,
                                                name: "renderer.response_receipt",
                                                startTimeMs: e.receivedAtMs,
                                                trace: e.trace
                                            }), !Q.get(ee.vb).includes(e.hostId)) {
                                            if (e.hostId === e0.a) throw Error(`No AppServerRequestClient registered for hostId: ${e.hostId}`);
                                            break
                                        }(0, $.a)(Q, e);
                                        break;
                                    case "mcp-request-delivery":
                                        Q.get(ee.vb).includes(e.hostId) && Q.get(ee.c, e.hostId).onDelivery(e.update);
                                        break;
                                    case "codex-app-server-fatal-error":
                                        (0, ee.Gb)(Q, {
                                            error: (0, h.Hf)(e.errorMessage),
                                            hostId: e.hostId,
                                            source: "fatal_error_message",
                                            state: "error"
                                        }), null == Q.get(ex.a) && (0, eL.a)(Q), Q.set(ex.a, e);
                                        break;
                                    case "mcp-request":
                                        (0, ei.e)(Q, e.hostId, e.request);
                                        break;
                                    case "request-user-input-auto-resolution-changed":
                                        if ("timed-out" === e.change.kind) {
                                            (0, N.c)(Q, {
                                                hostId: e.hostId,
                                                requestId: e.change.requestId
                                            }, e.change.timeoutMs);
                                            break
                                        }(0, en.a)(Q, e.hostId, e.change), "removed" === e.change.kind && (0, N.a)(Q, {
                                            hostId: e.hostId,
                                            requestId: e.change.requestId
                                        });
                                        break;
                                    case "request-user-input-auto-resolution-snapshot":
                                        for (let {
                                                conversationId: t,
                                                requestId: a,
                                                resolutionState: n
                                            }
                                            of e.pendingRequests)(0, en.a)(Q, e.hostId, {
                                            kind: "updated",
                                            conversationId: t,
                                            requestId: a,
                                            resolutionState: n
                                        });
                                        break;
                                    case "navigate-to-route":
                                    case "business-checkout-complete":
                                    case "personal-checkout-complete":
                                    case "credit-purchase-checkout-complete":
                                    case "rate-limit-reset-checkout-complete":
                                    case "open-pet-install-modal":
                                    case "navigate-back":
                                    case "navigate-forward":
                                    case "command-menu":
                                    case "chat-search-command-menu":
                                    case "find-in-files":
                                    case "file-search-command-menu":
                                    case "find-next-in-thread":
                                    case "find-previous-in-thread":
                                    case "debug-run-eval-control-request":
                                    case "toggle-debug-modal":
                                    case "debug-window-origin-conversation-changed":
                                    case "debug-window-client-analytics-history-changed":
                                    case "find-in-thread":
                                    case "implement-todo":
                                    case "heartbeat-automation-thread-state-request":
                                    case "copy-conversation-path":
                                    case "toggle-thread-pin":
                                    case "rename-thread":
                                    case "archive-thread":
                                    case "copy-working-directory":
                                    case "copy-deeplink":
                                    case "close-active-app-shell-tab":
                                    case "toggle-sidebar":
                                    case "toggle-terminal":
                                    case "toggle-file-tree-panel":
                                    case "prompt-link-destination":
                                    case "external-browser-open-started":
                                    case "external-browser-open-finished":
                                    case "open-browser-tab":
                                    case "close-browser-tab":
                                    case "browser-sidebar-open-panel-without-animation":
                                    case "browser-sidebar-clear-pending-panel-open":
                                    case "browser-sidebar-destroy-webview":
                                    case "browser-sidebar-webview-attached":
                                    case "browser-sidebar-browser-use-state":
                                    case "browser-sidebar-browser-use-page-released":
                                    case "browser-sidebar-browser-use-viewport":
                                    case "browser-sidebar-browser-use-capture-surface":
                                    case "browser-sidebar-find-state":
                                    case "browser-sidebar-browser-use-cursor-state":
                                    case "browser-sidebar-tab-capture-state":
                                    case "toggle-diff-panel":
                                    case "browser-sidebar-command":
                                    case "browser-sidebar-state":
                                    case "browser-sidebar-web-contents-pointer-down":
                                    case "browser-sidebar-usage":
                                    case "browser-sidebar-screenshot-copied":
                                    case "browser-sidebar-screenshot-copy-failed":
                                    case "browser-sidebar-url-copied":
                                    case "browser-sidebar-tab-state":
                                    case "browser-sidebar-comment-overlay-session":
                                    case "browser-sidebar-comment-overlay-insert-text":
                                    case "browser-sidebar-image-attachment":
                                    case "browser-sidebar-image-drag-state":
                                    case "browser-sidebar-runtime-sync":
                                    case "browser-sidebar-runtime-annotation-permission-result":
                                    case "browser-sidebar-runtime-prepare-comment-screenshot":
                                    case "browser-sidebar-runtime-clear-comment-screenshot":
                                    case "browser-sidebar-runtime-close-editor":
                                    case "browser-sidebar-runtime-create-comment-at-point":
                                    case "browser-sidebar-runtime-open-design-editor-at-point":
                                    case "browser-sidebar-runtime-annotation-selection-hover-state":
                                    case "browser-sidebar-runtime-annotation-selection-modifier-state":
                                    case "browser-sidebar-runtime-select-comment":
                                    case "browser-sidebar-runtime-remove-annotation-selection":
                                    case "browser-sidebar-runtime-restore-editor":
                                    case "computer-use-capture-updated":
                                    case "remote-hosted-pip-browser-frame-state-changed":
                                    case "remote-hosted-pip-content-layout-state-changed":
                                    case "remote-hosted-pip-task-state-changed":
                                    case "trace-recording-state-changed":
                                    case "trace-recording-uploaded":
                                    case "step-font-size":
                                    case "step-window-zoom":
                                    case "reset-window-zoom":
                                    case "image-preview-zoom-command":
                                    case "avatar-overlay-action":
                                    case "avatar-overlay-computer-use-cursor-changed":
                                    case "avatar-overlay-explicit-pet-opened":
                                    case "avatar-overlay-keyboard-interaction-ready":
                                    case "avatar-overlay-layout-changed":
                                    case "notch-overlay-layout-changed":
                                    case "notch-overlay-expand":
                                    case "notch-overlay-collapse":
                                    case "notch-overlay-toggle":
                                    case "notch-overlay-keyboard-interaction-ready":
                                    case "avatar-overlay-open-state-changed":
                                    case "avatar-overlay-on-demand-opened":
                                    case "global-dictation-idle":
                                    case "global-dictation-start-confirmed":
                                    case "global-dictation-start":
                                    case "global-dictation-stop":
                                    case "global-dictation-paste-failed":
                                    case "global-dictation-in-app-start":
                                    case "global-dictation-in-app-stop":
                                    case "codex-micro-push-to-talk-start":
                                    case "codex-micro-push-to-talk-stop":
                                    case "codex-micro-insert-composer-text":
                                    case "codex-micro-insert-skill-mention":
                                    case "screenshot-selection-shortcut":
                                    case "capture-screenshot-selection":
                                    case "appshot-shortcut":
                                    case "debug-run-eval-control-response":
                                    case "toggle-query-devtools":
                                    case "toggle-performance-tools":
                                    case "toggle-react-scan":
                                    case "set-primary-runtime-install-release":
                                    case "electron-window-position-changed":
                                    case "electron-window-opaque-surface-changed":
                                    case "persisted-atom-sync":
                                    case "persisted-atom-updated":
                                    case "open-create-remote-project-modal":
                                    case "remote-workspace-root-requested":
                                    case "toggle-ram-usage-indicator":
                                        break;
                                    case "focus-composer":
                                        (0, eA.d)();
                                        break;
                                    case "connector-oauth-callback":
                                        await tC({
                                            ...e,
                                            source: "direct"
                                        });
                                        break;
                                    case "run-command":
                                        if ((0, d.s)(e.id)) {
                                            (0, d.k)(e.id);
                                            let t = null == e.originPanel && null == e.originBrowserTab && null == e.keyboardOrigin ? void 0 : {
                                                originPanel: e.originPanel,
                                                originBrowserTab: e.originBrowserTab,
                                                keyboardOrigin: e.keyboardOrigin
                                            };
                                            null == e.keyboardEvent ? (0, eS.d)(e.id, "host_run_command", t) : (0, eS.e)(e.id, new KeyboardEvent("keydown", e.keyboardEvent), t)
                                        }
                                        break;
                                    case "automation-runs-updated":
                                        tf || (tg.invalidateQueries({
                                            queryKey: ["recent-conversations"]
                                        }), tg.invalidateQueries({
                                            queryKey: (0, to.c)("get-global-state", {
                                                key: h.mc.THREAD_WORKSPACE_ROOT_HINTS
                                            })
                                        }), tg.invalidateQueries({
                                            queryKey: (0, A.g)()
                                        }), tg.invalidateQueries({
                                            queryKey: A.d
                                        }));
                                        break;
                                    case "add-context-file":
                                    case "new-chat":
                                    case "new-chat-with-appshot":
                                    case "new-projectless-task":
                                        tg.invalidateQueries({
                                            queryKey: (0, A.g)()
                                        });
                                        break;
                                    case "clear-active-terminal":
                                        tn.a.clearActive();
                                        break;
                                    case "pinned-threads-updated":
                                        if (tg.invalidateQueries({
                                                queryKey: ["settings-worktree-conversations"]
                                            }), "customSectionHostId" in e) {
                                            let t = [void 0 === e.customSectionIds ? "app-server-custom-sections" : "app-server-custom-section-threads", ...null == e.customSectionHostId ? [] : [e.customSectionHostId]];
                                            for (let a of e.customSectionIds ?? [null]) tg.invalidateQueries({
                                                queryKey: null == a ? t : [...t, a],
                                                refetchType: "all"
                                            })
                                        }
                                        tg.invalidateQueries({
                                            queryKey: F.a,
                                            refetchType: "all"
                                        });
                                        break;
                                    case "window-app-server-active-changed":
                                        e.active && !Q.get(k.b) && eB.c.dispatchMessage("request-app-server-state", {
                                            includePendingInputs: !0
                                        }), !e.active && Q.get(k.b) && tg.invalidateQueries({
                                            queryKey: te.a,
                                            refetchType: "none"
                                        }), Q.set(k.b, e.active);
                                        break;
                                    case "window-fullscreen-changed":
                                        Q.set(eh.a, e.isFullScreen);
                                        break;
                                    case "electron-window-focus-changed":
                                        e.isFocused && Q.get(e1.a) && Q.get(e2.c) && l();
                                        break;
                                    case "keyboard-modifier-state-changed":
                                        (0, eK.j)(Q, {
                                            altKey: e.altKey,
                                            ctrlKey: e.ctrlKey,
                                            metaKey: e.metaKey,
                                            shiftKey: e.shiftKey,
                                            type: "keyup"
                                        });
                                        break;
                                    case "custom-prompts-updated":
                                        Q.set(ej.a, e.prompts);
                                        break;
                                    case "electron-periodic-resource-sample":
                                        if (!Q.get(eQ.c)) break;
                                        (0, eQ.a)(Q, c.CodexPerformancePeriodicResourceSample, {
                                            clientPlatform: e.clientPlatform,
                                            buildNumber: Q.get(T.a).data?.buildNumber ?? void 0,
                                            buildCommitSha: (0, M.a)(),
                                            mainProcessCpuPercent: e.mainProcessCpuPercent,
                                            rendererProcessCpuPercent: e.rendererProcessCpuPercent,
                                            electronProcessWorkingSetKib: (0, i.c)(e.electronProcessWorkingSetKib),
                                            samplerAgeMs: (0, i.c)(e.samplerAgeMs),
                                            inflightTurnCount: (0, i.b)(e.inflightTurnCount),
                                            pendingRequestCount: (0, i.b)(e.pendingRequestCount),
                                            deltaEventsLast30s: (0, i.b)(e.deltaEventsLast30s)
                                        });
                                        break;
                                    case "electron-app-state-snapshot-request": {
                                        let t = Q.get(I.b, e.hostId),
                                            n = Q.get(P.a),
                                            r = null;
                                        if (null != t && null != n) {
                                            let [s, {
                                                collectFeedbackWorkloadSummary: i
                                            }, o] = await Promise.all([n.collectAppStateSnapshot(e.hostId, e.reason).catch(a => {
                                                if (Q.get(P.a) !== n || Q.get(I.b, e.hostId) !== t) return null;
                                                throw a
                                            }), a.e(920828).then(a.bind(a, "xftA")), Promise.resolve().then(a.bind(a, "SGXj"))]);
                                            if (Q.get(P.a) === n && Q.get(I.b, e.hostId) === t && null != (r = s)) {
                                                let t = i(Q);
                                                o.addRendererBreadcrumb({
                                                    category: "app_state",
                                                    level: "info",
                                                    message: "renderer_workload_snapshot",
                                                    data: {
                                                        request_id: e.requestId,
                                                        saved_unread_marker_count: t.unread?.savedMarkers ?? null,
                                                        published_catalog_entry_count: t.catalog.published
                                                    }
                                                })
                                            }
                                        }
                                        let s = (0, R.a)(Q);
                                        if (null == r && null == s) break;
                                        eB.c.dispatchMessage("electron-app-state-snapshot-response", {
                                            requestId: e.requestId,
                                            fields: r,
                                            workRoute: s
                                        });
                                        break
                                    }
                                    case "codex-app-server-initialized":
                                        e.hostId === e0.a && tg.invalidateQueries({
                                            queryKey: ["gateway-oauth"]
                                        }), Q.get(ex.a)?.hostId === e.hostId && Q.set(ex.a, null), (0, ee.Hb)(Q, {
                                            appServerVersion: e.appServerVersion,
                                            supportsCloudDaybreak: e.supportsCloudDaybreak,
                                            hostId: e.hostId,
                                            installedCodexVersion: e.installedCodexVersion
                                        }), Q.get(k.a) && "live" === Q.get(ea.b) && (!tf || !0 === Q.get(eu.b)) && null != e.appServerVersion && (0, m.b)(e.appServerVersion) && (0, P.b)(Q, e.hostId).refreshRecentConversations({
                                            mode: e.hostId === e0.a || (0, h.gi)(e.hostId) ? void 0 : "expanded"
                                        }).catch(() => {}), (0, ts.a)(tg, {
                                            queryKey: [...eH.e, e.hostId]
                                        }, {
                                            cancelRefetch: !1
                                        }), (0, eG.b)(Q, e.hostId), e.hostId === e0.a && (0, eG.b)(Q, void 0), tg.invalidateQueries({
                                            predicate: t => t.meta?.hostId === e.hostId && ["gh-pr-body", "gh-pr-metadata", "gh-pr-reviews", "gh-pr-discussion"].some(e => t.queryKey[1] === e)
                                        }), tg.invalidateQueries({
                                            queryKey: (0, to.c)("gh-pr-for-branch"),
                                            predicate: t => t.meta?.hostId === e.hostId
                                        }), tg.invalidateQueries({
                                            queryKey: (0, to.c)("gh-pr-search"),
                                            predicate: t => t.meta?.hostId === e.hostId
                                        });
                                        break;
                                    case "codex-app-server-connection-changed":
                                        "connected" !== e.state || (0, h.gi)(e.hostId) || (tg.invalidateQueries({
                                            queryKey: F.a,
                                            refetchType: "all"
                                        }), tg.invalidateQueries({
                                            queryKey: ["app-server-custom-sections", e.hostId],
                                            refetchType: "all"
                                        })), e.hostId === e0.a && "connected" !== e.state && eI.a.clearBrowserUseState()
                                }
                            })(e).catch(e => {
                                ti.a.error("Invalid message received", {
                                    safe: {},
                                    sensitive: {
                                        error: e
                                    }
                                })
                            })
                        },
                        b = e => {
                            let t = (0, eq.a)(e);
                            if (null != t && !(("mcp-request-delivery" === t.type || "mcp-response" === t.type) && eB.c.hasHandledBufferedMessage(t))) {
                                if ("mcp-notification" === t.type) return void(e => {
                                    if (null != e.trace && null != e.receivedAtMs && (0, eJ.c)({
                                            attributes: {
                                                "app_server.method": e.method
                                            },
                                            name: "renderer.notification_receipt",
                                            startTimeMs: e.receivedAtMs,
                                            trace: e.trace
                                        }), (0, et.a)(Q, {
                                            hostId: e.hostId,
                                            method: e.method,
                                            params: e.params
                                        }), "account/gatewayOAuth/changed" === e.method && (0, E.a)(Q, e.hostId, e.params), e.hostId === e0.a && "account/updated" === e.method && tg.invalidateQueries({
                                            queryKey: ["gateway-oauth"]
                                        }), "codex/event/skills_update_available" === e.method) return tg.invalidateQueries({
                                        queryKey: te.a
                                    });
                                    if ("externalAgentConfig/import/completed" === e.method && (0, eM.b)(tg), "thread/section/changed" === e.method) return l(e.hostId, e.params);
                                    if ("app/list/updated" === e.method) {
                                        let {
                                            data: t
                                        } = e.params, a = (0, ev.c)(Q);
                                        if (null == a) return;
                                        let n = (0, ey.d)(e.hostId, a),
                                            r = tg.getQueryState(n);
                                        (r?.data != null || r?.fetchStatus === "fetching") && tg.setQueryData(n, (0, ey.i)({
                                            apps: t
                                        })), tg.invalidateQueries({
                                            exact: !0,
                                            queryKey: (0, ey.g)(e.hostId, a)
                                        }), (0, ts.a)(tg, {
                                            queryKey: [...eH.e, e.hostId]
                                        }, {
                                            cancelRefetch: !1
                                        });
                                        return
                                    }
                                    if (!(0, h.Vh)(e.method)) return;
                                    let t = null == e.trace ? null : (0, eJ.f)({
                                        attributes: {
                                            "app_server.method": e.method
                                        },
                                        name: "renderer.notification_apply",
                                        trace: e.trace
                                    });
                                    if ("configWarning" === e.method || "deprecationNotice" === e.method) {
                                        (0, Z.b)(Q, e.hostId, {
                                            method: e.method,
                                            params: e.params
                                        }), t?.finish();
                                        return
                                    }
                                    try {
                                        (0, ei.d)(Q, e), t?.finish()
                                    } catch (e) {
                                        t?.finish(e)
                                    }
                                })(t);
                                u(t)
                            }
                        },
                        y = eB.c.subscribe("mcp-request-delivery", u),
                        S = eB.c.subscribe("mcp-response", u),
                        K;
                    window.addEventListener("message", b);
                    let B = (0, e8.b)(() => Q.get(ee.c, e0.a));
                    (0, ei.h)(Q, e0.a);
                    let er = (0, ei.j)(Q, tP.current);
                    return () => {
                        if (B?.(), er(), e) {
                            let e = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                (0, n.a)(e, e6.a.owlBrowserCrashCounter?.unsubscribe(), !1)
                            } catch (t) {
                                e.error = t, e.hasError = !0
                            } finally {
                                (0, n.e)(e)
                            }
                        }
                        if (t) {
                            let e = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                (0, n.a)(e, e6.a.inAppBrowserIncompleteNavigation?.unsubscribe(), !1)
                            } catch (t) {
                                e.error = t, e.hasError = !0
                            } finally {
                                (0, n.e)(e)
                            }
                        }
                        r(), y(), S(), K?.(), window.removeEventListener("message", b)
                    }
                }, [tp, tm, tg, tf, tk, tS, V, Q]), (0, r.jsx)(r.Fragment, {
                    children: t
                })
            }
        })
    }),
    IYFr: (function(e, t, a) {
        var n = a("UKCO"),
            r = a("lAQI"),
            s = a("fDv2"),
            i = a("BCjz"),
            o = a("Kwur");
        let c = r.F({
                id: r.L().min(1),
                created_at: s.b({
                    offset: !0
                }),
                updated_at: s.b({
                    offset: !0
                })
            }),
            l = r.w(c, r.m("role", [r.F({
                role: r.z("user"),
                account_user_id: r.L(),
                content: r.F({
                    text: r.L().nullable(),
                    attachments: r.g(r.F({
                        type: r.L()
                    })).optional()
                })
            }), r.F({
                role: r.z("assistant"),
                raw_messages: r.g(r.F({
                    author: r.F({
                        role: r.L()
                    }),
                    content: r.F({
                        content_type: r.L()
                    })
                })),
                attachments: r.g(r.F({
                    type: r.L()
                })).optional()
            }), r.F({
                role: r.z("system"),
                content: r.F({
                    type: r.L()
                }),
                preview: r.L()
            })])),
            d = new WeakMap,
            u = r.F({
                room_id: r.L(),
                account_user_id: r.L(),
                last_read_at: s.b({
                    offset: !0
                }),
                read_cursor_updated_at: s.b({
                    offset: !0
                }).nullish()
            }),
            h = r.F({
                id: r.L().optional(),
                role: r.L(),
                account_user_id: r.L().optional(),
                request_id: r.L().nullish(),
                reply_to: r.F({
                    message_id: r.L()
                }).nullish(),
                task_id: r.L().nullish(),
                message_metadata: r.F({
                    option_picker: r.F({
                        selection: r.E().int().nonnegative()
                    }).nullish()
                }).nullish().catch(void 0)
            }).transform(e => {
                let {
                    message_metadata: t,
                    ...a
                } = e;
                return {
                    ...a,
                    ...t?.option_picker?.selection != null ? {
                        isOptionPickerReply: !0
                    } : {}
                }
            }),
            p = r.F({
                payload: r.F({
                    message: h
                })
            }),
            m = r.m("type", [r.F({
                type: r.z("calpico-room-read-receipt"),
                payload: u
            }), r.F({
                type: r.z("calpico-is-responding-heartbeat"),
                payload: r.F({
                    room_id: r.L(),
                    typing: r.j().default(!0),
                    progress: r.F({
                        request_id: r.L().min(1),
                        revision: r.E().int().nonnegative(),
                        after_reply_message_id: r.L().min(1).nullish(),
                        inline: r.F({
                            text: r.L().min(1).nullish(),
                            emoji: r.L().nullish(),
                            image: r.m("type", [r.F({
                                type: r.z("emoji"),
                                emoji: r.L().min(1)
                            }), r.F({
                                type: r.z("url"),
                                url: r.L().min(1),
                                dark_image_url: r.L().trim().min(1).nullish().catch(void 0)
                            })]).nullish().catch(void 0),
                            deeplink: r.L().nullish()
                        }).transform(e => e.text || e.image || e.emoji ? e : null).nullable()
                    }).optional(),
                    source: r.F({
                        role: r.z("user"),
                        account_user_id: r.L()
                    })
                })
            }), r.F({
                type: r.z("calpico-message-add"),
                payload: r.F({
                    room_id: r.L(),
                    hide_indicator: r.j().nullish().catch(void 0),
                    message: r.A({
                        role: r.L(),
                        id: r.L().optional().catch(void 0),
                        created_at: s.b({
                            offset: !0
                        }).optional().catch(void 0),
                        is_task_update: r.j().optional().catch(void 0),
                        external_message_channel: r.R().optional(),
                        account_user_id: r.L().optional()
                    }).optional()
                })
            }), r.F({
                type: r.z("calpico-message-update"),
                payload: r.F({
                    room_id: r.L(),
                    message_id: r.L()
                })
            }), r.F({
                type: r.z("calpico-message-task-associated"),
                payload: r.F({
                    room_id: r.L(),
                    message_id: r.L(),
                    task_id: r.L()
                })
            }), r.F({
                type: r.z("calpico-room-read"),
                payload: r.F({
                    room_id: r.L(),
                    last_read_at: s.b({
                        offset: !0
                    }).optional().catch(void 0)
                })
            }), r.F({
                type: r.p(["calpico-room-metadata-update", "calpico-room-leave"]),
                payload: r.F({
                    room_id: r.L()
                })
            }), r.F({
                type: r.z("calpico-room-update"),
                payload: r.F({
                    room: r.F({
                        id: r.L(),
                        aeon_id: r.L().nullish()
                    })
                })
            })]);
        a.d(t, {}, {
            a: function(e) {
                let {
                    accountId: t,
                    userId: a,
                    onUpdate: r,
                    onSubscribedChange: s,
                    onReadReceipt: c,
                    onRoomRead: u,
                    onMessageReceived: h,
                    includeMessageBody: g,
                    includeExternal: f,
                    topicId: b,
                    beforeSubscribe: y
                } = e, w = (0, i.c)(b ?? ("all" === f ? "calpico-chatgpt-messaging-all" : "calpico-chatgpt-messaging"), () => o.Request.safeGet("/celsius/ws/user", {
                    additionalHeaders: {
                        [n.dc]: t
                    }
                }).then(e => e.websocket_url), JSON.stringify([t, a])), v = d.get(w) ?? {
                    consumers: 0
                };
                d.set(w, v), v.consumers++;
                let P = !0,
                    k = () => {
                        P && r({
                            type: "resync"
                        })
                    },
                    I = w.onMessage(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!P) return;
                        let a = m.safeParse(e);
                        if (!a.success) return;
                        let n = a.data;
                        switch (n.type) {
                            case "calpico-room-read-receipt":
                                c?.(n.payload);
                                break;
                            case "calpico-is-responding-heartbeat":
                                if (t && n.payload.progress) break;
                                r({
                                    type: "typing",
                                    roomId: n.payload.room_id,
                                    accountUserId: n.payload.source.account_user_id,
                                    typing: n.payload.typing,
                                    ...n.payload.progress ? {
                                        progress: n.payload.progress
                                    } : {},
                                    receivedAt: Date.now()
                                });
                                break;
                            case "calpico-message-update":
                            case "calpico-message-task-associated":
                                r({
                                    type: "message",
                                    roomId: n.payload.room_id,
                                    messageId: n.payload.message_id,
                                    ..."calpico-message-task-associated" === n.type ? {
                                        taskId: n.payload.task_id
                                    } : {}
                                });
                                break;
                            case "calpico-room-update":
                                r({
                                    type: "room",
                                    roomId: n.payload.room.id,
                                    aeonId: n.payload.room.aeon_id
                                });
                                break;
                            case "calpico-message-add": {
                                if (null != h) {
                                    let a = p.safeParse(e);
                                    a.success && h(n.payload.room_id, a.data.payload.message, t)
                                }
                                let {
                                    message: a,
                                    room_id: s
                                } = n.payload, i = {
                                    type: "message-added",
                                    roomId: s,
                                    ...!t && !0 === n.payload.hide_indicator ? {
                                        hideIndicator: !0
                                    } : {},
                                    ...a?.id && a.created_at && !a.is_task_update && !a.external_message_channel ? {
                                        messageId: a.id,
                                        createdAtMs: Date.parse(a.created_at)
                                    } : {},
                                    accountUserId: a?.role === "user" ? a.account_user_id : void 0
                                };
                                g && l.safeParse(a).success ? r(i, a) : r(i);
                                break
                            }
                            case "calpico-room-read":
                                null != u ? u(n.payload.room_id, n.payload.last_read_at) : r({
                                    type: "room",
                                    roomId: n.payload.room_id
                                });
                                break;
                            case "calpico-room-metadata-update":
                            case "calpico-room-leave":
                                r({
                                    type: "calpico-room-leave" === n.type ? "leave" : "room",
                                    roomId: n.payload.room_id
                                })
                        }
                    }),
                    _ = w.onSubscribed(() => {
                        P && (s?.(!0), k())
                    }),
                    C = w.onDisconnect(() => {
                        P && (s?.(!1), r({
                            type: "typing-reset"
                        }))
                    }),
                    S = w.onPotentialMissedMessages(k);
                return 1 === v.consumers && w.subscribe(null == y ? void 0 : {
                    beforeSubscribe: y
                }), () => {
                    P && (P = !1, I(), _(), C(), S(), v.consumers--, 0 === v.consumers && (d.delete(w), w.unsubscribe()))
                }
            }
        })
    }),
    pCJ7: (function(e, t, a) {
        a.d(t, {}, {
            a: function() {
                let e = document.documentElement.dataset.codexCliVersion;
                if (null == e) throw Error("Missing Codex CLI version in browser document");
                return e
            }
        })
    }),
    OmHE: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(729088).then(a.bind(a, "SH4l"))).BrowserProfileBridge
            },
            b: async function() {
                return (await Promise.all([a.e(431839), a.e(758420)]).then(a.bind(a, "tGn9"))).ChatGptAdsConsentBoundary
            },
            c: async function() {
                return (await a.e(756129).then(a.bind(a, "nlOL"))).hydrateChatGptAds
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(732740)]).then(a.bind(a, "UVfT"))).ChatGptAdsPlacement
            }
        })
    }),
    VLEu: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(20182).then(a.bind(a, "g15d"))).MobileAgeVerificationPage
            },
            b: async function() {
                return (await a.e(744039).then(a.bind(a, "zS2J"))).VerifyAgePage
            }
        })
    }),
    RlRL: (function(e, t, a) {
        let n = (0, (a("Qgfj")).f)({
            submissionFailed: {
                id: "browserSkills.submissionFailed",
                defaultMessage: "Selected skills couldn't be checked. Please try again."
            }
        });
        a.d(t, {}, {
            a: n
        })
    }),
    SIRb: (function(e, t, a) {
        let n;
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(871787)]).then(a.bind(a, "FLsU"))).ReusableWorkflowTipSource
            },
            b: async function() {
                return (await a.e(195959).then(a.bind(a, "j5ZC"))).startSkillCreatorChat
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(750387), a.e(671539)]).then(a.bind(a, "KyAJ"))).SkillDetails
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(652500), a.e(473403), a.e(681767), a.e(589297), a.e(367795)]).then(a.bind(a, "EOSE"))).BrowserSkillEditor
            },
            e: async function() {
                let e = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(585275)]).then(a.bind(a, "V0oe"));
                return n = e.submitWithBrowserSkills, e.BrowserSkillsComposer
            },
            f: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(480171), a.e(725599), a.e(704837), a.e(225720), a.e(750387), a.e(948519), a.e(665038)]).then(a.bind(a, "OeSF"))).BrowserSkillsDirectory
            },
            g: function(e) {
                return n ?? (e ? Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(675898)]).then(a.bind(a, "lsOY")).then(e => n = e.submitWithBrowserSkills) : void 0)
            },
            h: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(919572)]).then(a.bind(a, "Xsss"))).HostedSkillMention
            },
            loadSkillData: async function() {
                return a.e(190944).then(a.bind(a, "jxLz"))
            }
        })
    }),
    iC84: (function(e, t, a) {
        a.d(t, {}, {
            a: "https://openai.com/form/business-hub-feedback/",
            b: "2610731987",
            c: "1466237283",
            d: "2756547663",
            e: "3962601666",
            f: "2778625748",
            g: "751400112",
            h: "/business-hub",
            i: "3295749912",
            j: "/business-agent-builder-preview/:profileId/:agentId",
            k: "872987069",
            l: "shopify_claim_entry"
        })
    }),
    LKEn: (function(e, t, a) {
        a.d(t, {}, {
            a: async function(e, t, n, r) {
                let [{
                    createBusinessProfileAgentApi: s
                }, {
                    getBusinessProfileAgentPreviewDestination: i
                }] = await Promise.all([Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(481280)]).then(a.bind(a, "HwNs")), a.e(257768).then(a.bind(a, "bEwS"))]);
                r.throwIfAborted();
                let o = s(e)?.getRuntime(e.profileId);
                if (!o) throw Error("Preview unavailable");
                return i(o, t, n, r, window.location.origin)
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(786897)]).then(a.bind(a, "GIaZ"))).logBusinessProfileShareFirstMessage
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(499790), a.e(318846), a.e(474605), a.e(951830), a.e(749239), a.e(242055), a.e(283856)]).then(a.bind(a, "qm1k"))).BusinessProfileShareHome
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(499790), a.e(242055), a.e(944273)]).then(a.bind(a, "gB0p"))).BusinessProfileShareReceiverPage
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(4021), a.e(447995)]).then(a.bind(a, "CbZ6"))).BusinessProfilesRoute
            },
            f: async function() {
                let [e] = await Promise.all([Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(4021), a.e(447995)]).then(a.bind(a, "CbZ6")), Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(963703), a.e(564979), a.e(506937), a.e(839342), a.e(499790), a.e(221469), a.e(953533), a.e(474605), a.e(758787), a.e(4021), a.e(411347), a.e(224222), a.e(692862)]).then(a.bind(a, "NxB8"))]);
                await e.LazyBusinessProfilesPage.prefetch()
            }
        })
    }),
    i4z1: (function(e, t, a) {
        var n = a("iC84");

        function r(e) {
            return new URLSearchParams(e).getAll("view").includes("admin") ? "admin_view" : "owner"
        }

        function s(e) {
            return "products" !== e.get("tab") && "1" !== e.get("create") && "1" !== e.get("creation_session") && !e.has("creation") && !e.has("claim") && !e.has("select") && !e.has("section") && !e.has("flow_id")
        }
        let i = ["about", "contact", "photos", "location", "hours", "delivery", "returns"];

        function o(e) {
            let t = new URLSearchParams(e.search);
            return t.delete("activity"), t.delete("insight"), t.toString()
        }
        a.d(t, {}, {
            a: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "insights",
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "owner",
                    r = `${n.h}/${encodeURIComponent(e)}/${t}`;
                return "admin_view" === a ? `${r}?view=admin` : r
            },
            b: i,
            c: r,
            d: function(e) {
                return "/business-hub" === e || "/business-hub/" === e ? "/business-hub" : e.match(/^(\/business-hub\/[^/]+)\/(?:dashboard|insights|products|members|agent|edit\/[^/]+|verification\/[^/]+)\/?$/)?.[1] ?? null
            },
            e: function(e, t) {
                let a = /^(.*\/business-hub\/[^/]+\/edit)\/([^/]+)\/?$/,
                    n = a.exec(e),
                    r = a.exec(t);
                if (null != n && null != r && n[1] === r[1] && n[2] !== r[2] && i.some(e => e === n[2])) return i.find(e => e === r[2])
            },
            f: function(e, t) {
                return (e === n.h || e === `${n.h}/`) && "invitations" === t.get("tab") && "owner" === r(t) && s(t)
            },
            g: s,
            h: function(e, t) {
                let a = /^(.*\/business-hub\/[^/]+)\/(insights|agent|products)\/?$/,
                    n = a.exec(e.pathname),
                    r = a.exec(t.pathname);
                return null != n && null != r && n[1] === r[1] && n[2] !== r[2] && o(e) === o(t)
            }
        })
    }),
    AoaR: (function(e, t, a) {
        let n = "https://chatgpt.com/college-plan",
            r = [n, `${n}?utm_source=chatgpt.com`];
        a.d(t, {}, {
            a: "/college-plan/c/:conversationId",
            b: "builtin:college-plan",
            c: r,
            d: "plugin_connector_1p_2c637db481848191a0d0f5cdddd214e1",
            e: "/college-plan",
            f: "/college-plan/schools/:schoolId",
            g: "college-plan-entry",
            h: "/college-plan/timeline",
            i: n
        })
    }),
    QyGk: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(222773), a.e(207991), a.e(906567), a.e(843292), a.e(322024), a.e(99342), a.e(862490), a.e(839342), a.e(164460), a.e(499790), a.e(221469), a.e(529755), a.e(301030), a.e(953533), a.e(690059), a.e(560345), a.e(740793), a.e(587936), a.e(452048), a.e(684598), a.e(299268), a.e(763618), a.e(847740), a.e(109131), a.e(400887), a.e(428069), a.e(899308), a.e(835890), a.e(895612), a.e(775217), a.e(555504), a.e(433520), a.e(608076), a.e(562115), a.e(547796), a.e(696455), a.e(537163), a.e(308581), a.e(734327), a.e(26757), a.e(378544), a.e(906329)]).then(a.bind(a, "Lyy5"))).CollegePlanChat
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(753405), a.e(353230), a.e(909395), a.e(324073), a.e(475333)]).then(a.bind(a, "DYyE"))).CollegePlanHome
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(753405), a.e(353230), a.e(909395), a.e(324073), a.e(4658)]).then(a.bind(a, "Ppb7"))).SharedCollegePlanPage
            }
        })
    }),
    kh1F: (function(e, t, a) {
        a.r(t);
        var n = a("Oj1v");
        async function r() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(104936), a.e(383512), a.e(180401), a.e(371369), a.e(920941)]).then(a.bind(a, "MXBe"))).CreditCheckoutDialog
        }
        async function s() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(104936), a.e(383512), a.e(180401), a.e(371369), a.e(554640)]).then(a.bind(a, "FvOH"))).openCreditCheckoutDialog(...t)
        }
        async function i() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(661337)]).then(a.bind(a, "sXnT"))).readCreditPurchaseReceipt()
        }
        async function o(e) {
            (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(661337)]).then(a.bind(a, "sXnT"))).clearCreditPurchaseTask(e)
        }
        async function c() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(104936), a.e(383512), a.e(180401), a.e(371369), a.e(878130)]).then(a.bind(a, "bwgW"))).openInlineCreditCheckout
        }
        a.d(t, {
            clearCreditPurchaseTask: () => o,
            isActiveInlineCreditCheckout: () => n.a,
            loadCreditCheckoutDialog: () => r,
            openCreditCheckoutDialog: () => s,
            ownsCreditCheckoutLaunch: () => n.b,
            preloadInlineCreditCheckout: () => c,
            readCreditPurchaseReceipt: () => i,
            readRetainedCreditCheckoutLaunch: () => n.c,
            readRetainedInlineCreditCheckoutAnalytics: () => n.d
        })
    }),
    XyTt: (function(e, t, a) {
        async function n() {
            return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(104936), a.e(383512), a.e(180401), a.e(99943)]).then(a.bind(a, "wFUE"))).CreditPurchasePage
        }
        a.d(t, {}, {
            A: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(680385), a.e(392e3), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(104936), a.e(383512), a.e(180401), a.e(624024), a.e(364116)]).then(a.bind(a, "mAkj"))).PurchasePage
            },
            B: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(898774)]).then(a.bind(a, "ZaEi"))).openRenewalHeaderAction
            },
            C: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(881052)]).then(a.bind(a, "QKNm"))).ResetPurchasePage
            },
            D: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(9712), a.e(36498), a.e(989648)]).then(a.bind(a, "Ba0x"))).SubscriptionManagementPage
            },
            E: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(938102)]).then(a.bind(a, "XLOU"))).SubscriptionPaymentAnnouncement
            },
            F: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(726333)]).then(a.bind(a, "ytA8"))).SubscriptionPaymentRecoveryEntrypoint
            },
            G: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(839397)]).then(a.bind(a, "InU4"))).SubscriptionPaymentRecoveryReminder
            },
            H: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(87809)]).then(a.bind(a, "jCCd"))).SubscriptionPlatformDialog
            },
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(726333)]).then(a.bind(a, "ytA8"))).AccountRecoveryDialog
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(9712), a.e(36498), a.e(259038)]).then(a.bind(a, "kv3R"))).AddPaymentMethodDialog
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(721547)]).then(a.bind(a, "aK3F"))).AutoTopOffPaymentMethodField
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(832633)]).then(a.bind(a, "FKCB"))).openBeaconSubscriptionRenewal
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(546968), a.e(805922)]).then(a.bind(a, "evRn"))).BillingInformationDialog
            },
            f: function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(531002)]).then(a.bind(a, "JeFr"))
            },
            g: async function(e, t, n) {
                let {
                    stripeClientQueryOptions: r
                } = await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(295114)]).then(a.bind(a, "iLQO")), {
                    stripe: s
                } = await e.fetchQuery(r(t, n));
                return s
            },
            h: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(749940), a.e(392e3), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(364680), a.e(273275), a.e(744290)]).then(a.bind(a, "mc1Y"))).BusinessSuccessPage
            },
            i: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(32280)]).then(a.bind(a, "rEO6"))).BusinessSeatPaymentMethodPicker
            },
            j: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(104936), a.e(383512), a.e(774539)]).then(a.bind(a, "i5hf"))).CheckoutPage
            },
            k: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(749940), a.e(392e3), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(104936), a.e(336632), a.e(364680), a.e(273275), a.e(983208)]).then(a.bind(a, "CBAP"))).CheckoutSuccessPage
            },
            l: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(845436)]).then(a.bind(a, "sK2C"))).CheckoutVerifyPage
            },
            loadBillingBeaconAction: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(832633)]).then(a.bind(a, "FKCB"))).openBillingBeaconAction
            },
            loadWorkspaceCheckoutSupport: async function() {
                let [e, t] = await Promise.all([Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(356719)]).then(a.bind(a, "dT9t")), Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(34097)]).then(a.bind(a, "wkqj"))]);
                return {
                    fetchBillingPricingConfig: e.fetchBillingPricingConfig,
                    logSubscriptionCheckoutNavigation: t.logSubscriptionCheckoutNavigation
                }
            },
            m: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(877700), a.e(853532), a.e(9712), a.e(36498), a.e(94976), a.e(546968), a.e(654779)]).then(a.bind(a, "wQa6"))).ConsumerBillingSettings
            },
            n: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(104936), a.e(383512), a.e(826243)]).then(a.bind(a, "tZuK"))).CreateWorkspacePage
            },
            o: n,
            p: async function() {
                let [e, t] = await Promise.all([Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(9712), a.e(36498), a.e(447236), a.e(337230)]).then(a.bind(a, "Rh1G")), Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(451779)]).then(a.bind(a, "c6ZW"))]);
                return {
                    DelinquentUpgradeDialog: e.DelinquentUpgradeDialog,
                    prepareDelinquentUpgrade: t.prepareDelinquentUpgrade
                }
            },
            q: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(608615)]).then(a.bind(a, "vPrB"))).GiftCardRedemptionPage
            },
            r: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(9712), a.e(36498), a.e(663090), a.e(332236), a.e(240021), a.e(506719)]).then(a.bind(a, "IpWz"))).GoRetentionOffer
            },
            s: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(388074), a.e(92122)]).then(a.bind(a, "PVar"))).OfferPage
            },
            t: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(680385), a.e(9712), a.e(36498), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(104936), a.e(383512), a.e(968922)]).then(a.bind(a, "wAmY"))).PaypalPurchasePage
            },
            u: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(938102)]).then(a.bind(a, "XLOU"))).PersonalPaymentRecoverySource
            },
            v: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(482985), a.e(476857)]).then(a.bind(a, "xaC3"))).PlanDowngradeDialog
            },
            w: async function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(877700), a.e(392e3), a.e(9712), a.e(717124), a.e(660103), a.e(534136), a.e(152673), a.e(624024), a.e(776916)]).then(a.bind(a, "q6Eh")),
                    r = Promise.all([t, n()]).then(e => {
                        let [t] = e;
                        return t
                    });
                return (await (e ? Promise.race([t, r]) : r)).PricingCheckoutPreparation
            },
            x: async function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(543362)]).then(a.bind(a, "AZCS"))
            },
            y: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(9712), a.e(36498), a.e(663090), a.e(240021), a.e(283454)]).then(a.bind(a, "jn0n"))).PricingSubscriptionUpdateDialog
            },
            z: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(967847), a.e(330351), a.e(212322), a.e(684828)]).then(a.bind(a, "bqaa"))).PublicPlanSignup
            }
        })
    }),
    Oj1v: (function(e, t, a) {
        let n;

        function r(e, t) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                r = n?.(e),
                s = r?.request.creditCheckoutAnalytics,
                i = r?.request.anchorId == null ? "modal" : "inline";
            return null == r || r.visible || r.busy || r.suspended || r.request.accountId !== t.accountId || r.request.userId !== t.userId || s?.checkoutLaunchId == null || !r.recovering && (!r.reusable || null == r.hiddenUntil || a >= r.hiddenUntil || null != r.sessionExpiresAt && a >= r.sessionExpiresAt || r.request.conversationId !== t.conversationId || (r.request.search ?? "") !== (t.search ?? "") || "inline" === i && r.request.anchorId !== t.anchorId) ? null : {
                analytics: s,
                presentation: i
            }
        }
        a.d(t, {}, {
            a: function(e, t) {
                let a = n?.(e);
                return null != a && (a.busy || a.suspended || a.visible) && a.request.accountId === t.accountId && a.request.userId === t.userId
            },
            b: function(e, t) {
                return n?.(e)?.request.creditCheckoutAnalytics?.checkoutLaunchId === t
            },
            c: r,
            d: function(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    n = r(e, t, a);
                return n?.presentation === "inline" ? n.analytics : null
            },
            e: function(e) {
                n = e
            }
        })
    }),
    yVzM: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(379526)]).then(a.bind(a, "s1Xg"))).BusinessOwnerOnboardingPage
            }
        })
    }),
    LwKP: (function(e, t, a) {
        let n = "oai-epic-launch-changed",
            r = `
(() => {
  const key = "oai-epic-native-launch";
  let launch = null;
  try { launch = JSON.parse(sessionStorage.getItem(key) || "null"); } catch {}
  function save() {
    try {
      if (launch) sessionStorage.setItem(key, JSON.stringify(launch));
      else sessionStorage.removeItem(key);
    } catch { launch = null; }
  }
  function capture() {
    const fragment = window.location.hash;
    if (!fragment) return;
    window.history.replaceState(window.history.state, "", "/epic/launch");
    const params = new URLSearchParams(fragment.slice(1));
    const snapshot = params.get("snapshot");
    const workspace = params.get("workspace_id");
    launch = Array.from(params).length === (workspace ? 2 : 1) && (!workspace || /^[A-Za-z0-9_-]{1,128}$/.test(workspace)) && snapshot &&
      /^[A-Za-z0-9_-]{80,16384}={0,2}$/.test(snapshot)
      ? { snapshot, workspace, id: crypto.randomUUID(), messageId: null, draftId: null } : null;
    save();
  }
  if (window.location.pathname === "/epic/launch") capture();
  function pending() {
    return launch && !launch.draftId && new URLSearchParams(window.location.search).get("epic_launch") === launch.id
      ? launch.snapshot : null;
  }
  window.__oaiEpicNativeLaunch = {
    get: () => launch?.snapshot ?? null,
    workspace: () => launch?.workspace ?? null,
    destination: () => launch ? "/?surface=work&epic_launch=" + launch.id : "/epic/launch",
    pending,
    ownsMessage: (messageId) => launch?.messageId === messageId,
    metadata: (messageId, draftId) => {
      if (!launch) return;
      if (draftId != null) {
        if (launch.draftId ? launch.draftId !== draftId : !pending()) return;
        launch.draftId = draftId;
      } else if (launch.messageId !== messageId) return;
      const changed = launch.messageId !== messageId;
      launch.messageId = messageId;
      save();
      if (changed) window.dispatchEvent(new Event("${n}"));
      return launch ? { epic_launch_snapshot: launch.snapshot } : undefined;
    },
    claimAttachmentNotification: (expected) => {
      if (!launch || launch.snapshot !== expected || launch.attachmentNotified) return false;
      launch.attachmentNotified = true;
      save();
      return true;
    },
    clear: (expected) => {
      if (launch?.snapshot === expected || launch?.messageId === expected) {
        launch = null;
        save();
        window.dispatchEvent(new Event("${n}"));
      }
    }
  };
  window.addEventListener("hashchange", () => {
    if (window.location.pathname !== "/epic/launch" || !window.location.hash) return;
    capture();
    window.dispatchEvent(new Event("${n}"));
  });
})();
`;
        a.d(t, {}, {
            a: r,
            b: n,
            c: "/epic/launch"
        })
    }),
    FfNP: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(168653)]).then(a.bind(a, "eJa9"))).EpicLaunchPage
            },
            loadEpicChartIndicator: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(257702)]).then(a.bind(a, "pBZF"))).EpicChartIndicator
            }
        })
    }),
    Clvq: (function(e, t, a) {
        a.d(t, {}, {
            a: "/business-agent-native-preview/:gizmoId",
            b: "/gpts/editor/:gizmoId",
            c: "/gpts/create",
            d: function(e, t) {
                let a = new URLSearchParams(t);
                return null != e && /^g-_?[a-f0-9]{32}$/.test(e) && "1" === a.get("business_agent_preview") && a.has("business_agent_preview_capability_session")
            },
            e: function(e, t) {
                let a = new URLSearchParams(t);
                return null != e && /^g-_?[a-f0-9]{32}$/.test(e) && "1" === a.get("business_agent_preview") && !a.has("business_agent_preview_capability_session")
            }
        })
    }),
    nsfy: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(222773), a.e(207991), a.e(906567), a.e(843292), a.e(322024), a.e(99342), a.e(23002), a.e(839342), a.e(164460), a.e(221469), a.e(301030), a.e(953533), a.e(690059), a.e(560345), a.e(740793), a.e(587936), a.e(452048), a.e(684598), a.e(299268), a.e(763618), a.e(847740), a.e(109131), a.e(400887), a.e(428069), a.e(899308), a.e(835890), a.e(895612), a.e(775217), a.e(555504), a.e(433520), a.e(608076), a.e(562115), a.e(547796), a.e(696455), a.e(308581), a.e(734327), a.e(475416), a.e(125796)]).then(a.bind(a, "swKf"))).BusinessAgentNativePreviewPage
            },
            b: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(222773), a.e(207991), a.e(906567), a.e(843292), a.e(322024), a.e(99342), a.e(23002), a.e(839342), a.e(164460), a.e(221469), a.e(301030), a.e(953533), a.e(690059), a.e(560345), a.e(740793), a.e(587936), a.e(452048), a.e(684598), a.e(299268), a.e(763618), a.e(847740), a.e(109131), a.e(400887), a.e(428069), a.e(899308), a.e(835890), a.e(895612), a.e(775217), a.e(555504), a.e(433520), a.e(608076), a.e(562115), a.e(547796), a.e(696455), a.e(308581), a.e(734327), a.e(475416), a.e(226912)]).then(a.bind(a, "iZZq"))).BusinessAgentPreviewPage
            },
            c: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(222773), a.e(207991), a.e(906567), a.e(843292), a.e(322024), a.e(99342), a.e(23002), a.e(703253), a.e(839342), a.e(164460), a.e(221469), a.e(301030), a.e(953533), a.e(690059), a.e(560345), a.e(740793), a.e(587936), a.e(452048), a.e(684598), a.e(299268), a.e(763618), a.e(847740), a.e(109131), a.e(400887), a.e(428069), a.e(899308), a.e(835890), a.e(895612), a.e(775217), a.e(555504), a.e(433520), a.e(608076), a.e(562115), a.e(547796), a.e(696455), a.e(308581), a.e(734327), a.e(475416), a.e(243290)]).then(a.bind(a, "YYu1A"))).GptBuilderPage
            }
        })
    }),
    dw6y: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(119390).then(a.bind(a, "DiKR"))).VerifyGuardianPage
            }
        })
    }),
    zFPc: (function(e, t, a) {
        a.d(t, {}, {
            a: "connector_openai_olympic",
            b: {
                citationTool: "view_medical_resource",
                paneWidth: {
                    defaultWidth: 464,
                    storageKey: "health:record-detail-width"
                }
            },
            c: "/health",
            d: "connector:connector_openai_olympic",
            e: "2487863402"
        })
    }),
    yTnN: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(839342), a.e(221469), a.e(474605), a.e(218382)]).then(a.bind(a, "xNGo"))).HealthChartContentReference
            },
            b: async function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(479725)]).then(a.bind(a, "iZAV"))
            },
            c: async function() {
                return (await a.e(719072).then(a.bind(a, "h0um"))).HealthOAuthCallbackPage
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(839342), a.e(221469), a.e(318846), a.e(474605), a.e(543658), a.e(701100)]).then(a.bind(a, "pq7F"))).HealthPage
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(839342), a.e(221469), a.e(474605), a.e(810231)]).then(a.bind(a, "W0Ui"))).HealthPostConnectDialog
            },
            f: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(839342), a.e(221469), a.e(474605), a.e(543658), a.e(530377)]).then(a.bind(a, "LfYe"))).HealthSidebarController
            }
        })
    }),
    SV75: (function(e, t, a) {
        a.d(t, {}, {
            a: "/images",
            b: "/:lang?/images/prompt/:slug"
        })
    }),
    IAe2: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(177162), a.e(16304), a.e(570369), a.e(794488)]).then(a.bind(a, "QKvr"))).ComposerImageTemplates
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(394095)]).then(a.bind(a, "LBvl"))).ImagePromptDialog
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(177162), a.e(318846), a.e(16304), a.e(570369), a.e(932582), a.e(496412)]).then(a.bind(a, "FLOS"))).ImagePromptPageRoute
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(177162), a.e(16304), a.e(570369), a.e(466692)]).then(a.bind(a, "dnuH"))).ImageSuggestions
            },
            e: async function() {
                return a.e(575645).then(a.bind(a, "pwVX"))
            },
            f: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(177162), a.e(318846), a.e(16304), a.e(570369), a.e(932582), a.e(788109)]).then(a.bind(a, "PUfA"))).ImagesPage
            },
            g: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(16304), a.e(108419)]).then(a.bind(a, "Vkzv"))).OnboardingImageCarousel
            }
        })
    }),
    k2Xj: (function(e, t, a) {
        a.d(t, {}, {
            a: "2477634511",
            b: "plugin_connector_1p_81b578b4840c819198a7957b59e017e5",
            c: "/learning"
        })
    }),
    uoxG: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(703573)]).then(a.bind(a, "blrh"))).handleLearningPluginInstalled
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(882456), a.e(212773), a.e(81461), a.e(259288), a.e(70183), a.e(85380), a.e(122290), a.e(899132), a.e(909395), a.e(543588), a.e(17983), a.e(167649), a.e(910298), a.e(318846), a.e(474605), a.e(628545), a.e(730479)]).then(a.bind(a, "fDA0"))).LearningPage
            }
        })
    }),
    Iq4Y: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(206372)]).then(a.bind(a, "JBMR"))
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(810953)]).then(a.bind(a, "iyCe"))).LockedChatsGate
            }
        })
    }),
    TfGh: (function(e, t, a) {
        let n = "/maps",
            r = "/maps/restaurants",
            s = new Set([n, `${n}/`, r, `${r}/`]);
        a.d(t, {}, {
            a: "/local/home",
            b: "/local/restaurants",
            c: s,
            d: r,
            e: "restaurant_save"
        })
    }),
    ic58: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(222773), a.e(321957), a.e(585419), a.e(207991), a.e(906567), a.e(877700), a.e(843292), a.e(353230), a.e(322024), a.e(882456), a.e(212773), a.e(81461), a.e(99342), a.e(259288), a.e(862490), a.e(456707), a.e(839342), a.e(164460), a.e(499790), a.e(221469), a.e(909395), a.e(529755), a.e(301030), a.e(953533), a.e(690059), a.e(560345), a.e(740793), a.e(587936), a.e(543588), a.e(17983), a.e(452048), a.e(684598), a.e(299268), a.e(763618), a.e(847740), a.e(109131), a.e(400887), a.e(428069), a.e(899308), a.e(835890), a.e(895612), a.e(775217), a.e(555504), a.e(433520), a.e(167649), a.e(608076), a.e(562115), a.e(547796), a.e(16212), a.e(910298), a.e(696455), a.e(722053), a.e(537163), a.e(308581), a.e(734327), a.e(845033), a.e(26757), a.e(378544), a.e(516246)]).then(a.bind(a, "sm3b"))).MapsPage
            }
        })
    }),
    cU1W: (function(e, t, a) {
        a.d(t, {}, {
            a: "oai/apps/hasSeenMoonshineNuxV2"
        })
    }),
    aSTN: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(952734).then(a.bind(a, "nHMd"))).MemoryExpansionAnnouncementHost
            }
        })
    }),
    uWyY: (function(e, t, a) {
        a.d(t, {}, {
            a: "oai/apps/hasSeenM3mNux"
        })
    }),
    qPzJ: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(52079).then(a.bind(a, "Eghn"))).MemoryMigrationAnnouncementHost
            }
        })
    }),
    XHnB: (function(e, t, a) {
        a.d(t, {}, {
            a: "4201948282",
            b: "/merchants/settings"
        })
    }),
    DZTm: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(256186)]).then(a.bind(a, "jqO9"))).MerchantAgreementForm
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(734039), a.e(380966)]).then(a.bind(a, "HFjV"))).MerchantSettingsPage
            }
        })
    }),
    W5aN: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(480171), a.e(716164), a.e(719647)]).then(a.bind(a, "O9rm"))).MyGptsPage
            }
        })
    }),
    HjIY: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(769717)]).then(a.bind(a, "sToh"))).observeParentalControlNotifications
            },
            b: function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(557472)]).then(a.bind(a, "JALO"))
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(877700), a.e(963703), a.e(172601), a.e(357381), a.e(411547), a.e(603763), a.e(835551), a.e(410786)]).then(a.bind(a, "VNgN"))).ChatGptParentalControlsSettings
            }
        })
    }),
    Nu9C: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(538169).then(a.bind(a, "OXUS"))).PepperOnboardingAnnouncementHost
            },
            b: async function() {
                return (await a.e(26187).then(a.bind(a, "mimB"))).PepperOnboardingBeaconModal
            }
        })
    }),
    IM1j: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(864749)]).then(a.bind(a, "holg"))).MigrationProgressSidebar
            },
            b: async function() {
                return (await a.e(226558).then(a.bind(a, "TSGs"))).PersonalMigrationAnnouncementHost
            },
            c: async function() {
                return (await a.e(660195).then(a.bind(a, "iEyW"))).getMigrationEligibility
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(877700), a.e(172130), a.e(910571)]).then(a.bind(a, "A86l"))).MigrationOnboarding
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(452922)]).then(a.bind(a, "PRar"))).migrationProgress$
            },
            f: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(877700), a.e(172130), a.e(618679)]).then(a.bind(a, "Lnge"))).PersonalMigrationSettings
            },
            loadRequiredAccountTransferDialog: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(524606)]).then(a.bind(a, "yhNh"))).RequiredAccountTransferDialog
            }
        })
    }),
    xX9T: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(336632), a.e(700142)]).then(a.bind(a, "YCgC"))).SubscriptionOnboarding
            }
        })
    }),
    EBYk: (function(e, t, a) {
        a.d(t, {}, {
            a: "/plugins-redirect"
        })
    }),
    S5Rc: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(318846), a.e(474605), a.e(951830), a.e(249533), a.e(32958)]).then(a.bind(a, "yTwB"))).PluginRedirectCallbackView
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(93340)]).then(a.bind(a, "pR23"))).PluginRedirectRoute
            },
            c: async function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(681103)]).then(a.bind(a, "iv1W"))).resumePluginRedirectInstall(...t)
            }
        })
    }),
    Ssdc: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(773885).then(a.bind(a, "BcVn"))).PrivacyCenterPage
            }
        })
    }),
    vGRm: (function(e, t, a) {
        a.d(t, {}, {
            a: function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(530201)]).then(a.bind(a, "GJ17"))
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(5493)]).then(a.bind(a, "wWtU"))).CmeHomeEntryPoint
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(877700), a.e(567730)]).then(a.bind(a, "w0km"))).CmePage
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(233043)]).then(a.bind(a, "OmnY"))).CmeProfileSettings
            }
        })
    }),
    rDra: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(487378), a.e(847810)]).then(a.bind(a, "iemL"))).RosalindCustomerApplicationRoute
            },
            b: async function() {
                return (await a.e(476466).then(a.bind(a, "Ws9B"))).RosalindCustomerStatusRoute
            }
        })
    }),
    IKJx: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(882456), a.e(212773), a.e(81461), a.e(259288), a.e(85380), a.e(839342), a.e(499790), a.e(221469), a.e(909395), a.e(301030), a.e(953533), a.e(543588), a.e(17983), a.e(167649), a.e(16212), a.e(910298), a.e(722053), a.e(845033), a.e(988347), a.e(394865), a.e(283171), a.e(126048)]).then(a.bind(a, "jl6t"))).openProductDetails
            },
            b: async function() {
                return (await a.e(663402).then(a.bind(a, "KQOi"))).prefetchProductDetails
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(882456), a.e(212773), a.e(81461), a.e(259288), a.e(85380), a.e(839342), a.e(499790), a.e(221469), a.e(909395), a.e(301030), a.e(953533), a.e(543588), a.e(17983), a.e(167649), a.e(16212), a.e(910298), a.e(722053), a.e(845033), a.e(988347), a.e(394865), a.e(283171), a.e(126048)]).then(a.bind(a, "jl6t"))).openProductEntityDetails
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(882456), a.e(212773), a.e(81461), a.e(259288), a.e(85380), a.e(839342), a.e(499790), a.e(221469), a.e(909395), a.e(301030), a.e(953533), a.e(543588), a.e(17983), a.e(167649), a.e(16212), a.e(910298), a.e(318846), a.e(722053), a.e(845033), a.e(988347), a.e(394865), a.e(283171), a.e(694303)]).then(a.bind(a, "VlLB"))).SharedProductPage
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(930119)]).then(a.bind(a, "KoTt"))).openShoppingBrowsePanel
            },
            f: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(753405), a.e(321957), a.e(585419), a.e(877700), a.e(843292), a.e(353230), a.e(882456), a.e(212773), a.e(81461), a.e(259288), a.e(974224), a.e(839342), a.e(499790), a.e(221469), a.e(909395), a.e(301030), a.e(953533), a.e(543588), a.e(17983), a.e(167649), a.e(16212), a.e(910298), a.e(722053), a.e(845033), a.e(988347), a.e(706891), a.e(433586)]).then(a.bind(a, "r0Wc"))).ShoppingForYouPage
            },
            g: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(318846), a.e(443793)]).then(a.bind(a, "IYzr"))).ShoppingHomePage
            },
            h: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(394865)]).then(a.bind(a, "oHmD"))).VirtualTryOnProductAction
            },
            loadWidgetCheckout: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(568571)]).then(a.bind(a, "Gceg"))).openWidgetCheckout
            }
        })
    }),
    eHJT: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(2123), a.e(59948), a.e(688289)]).then(a.bind(a, "WWyW"))).ImageMarkupEditor
            },
            b: async function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(2123), a.e(318539)]).then(a.bind(a, "Vvjl"))
            },
            c: async function() {
                let [{
                    SketchComposerHost: e
                }, {
                    createSketchComposerState: t
                }] = await Promise.all([Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(2123), a.e(59948), a.e(471740)]).then(a.bind(a, "RiwP")), Promise.all([a.e(2123), a.e(262934)]).then(a.bind(a, "Ales"))]);
                return {
                    SketchComposerHost: e,
                    createSketchComposerState: t
                }
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(687092), a.e(868489), a.e(682954)]).then(a.bind(a, "hUpJ"))).SketchHomeSuggestions
            }
        })
    }),
    VjfU: (function(e, t, a) {
        a.d(t, {}, {
            a: {
                announcementId: "oai/apps/hasSeenSciWorkspaceDataDisclosure",
                candidateIdPrefix: "sci-workspace-data-disclosure",
                planType: "sci"
            }
        })
    }),
    XTxF: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(90804).then(a.bind(a, "YQis"))).SophiaWorkspaceDisclosureHost
            }
        })
    }),
    bb2S: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(277790).then(a.bind(a, "UFx5"))).StudentCodexCreditsPage
            }
        })
    }),
    vr3L: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(336632), a.e(943543)]).then(a.bind(a, "qOdi"))).StudentPromotionPage
            }
        })
    }),
    nM73: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(997017)]).then(a.bind(a, "C4aD"))).U18GraduationModal
            }
        })
    }),
    Y2O5: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await a.e(96739).then(a.bind(a, "Vfcg"))).VeteransPromotionPage
            }
        })
    }),
    rCek: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                throw Error("Voice debugging requires an internal build")
            }
        })
    }),
    rklP: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(854102), a.e(638310)]).then(a.bind(a, "Zi7y"))).ConfiguredBidiModelSetting
            },
            b: async function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(89655), a.e(422391), a.e(37051)]).then(a.bind(a, "dxtz"))
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(453025)]).then(a.bind(a, "V3RA"))).waitForOpenDataChannel
            },
            d: async function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(89655), a.e(586788)]).then(a.bind(a, "oWM3"))
            },
            e: async function() {
                return (await a.e(9669).then(a.bind(a, "afoo"))).voiceRequestAuth
            },
            f: async function() {
                return (await Promise.all([a.e(680612), a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(843292), a.e(322024), a.e(839342), a.e(221469), a.e(301030), a.e(953533), a.e(587936), a.e(452048), a.e(684598), a.e(763618), a.e(7480), a.e(89655), a.e(422391), a.e(177813)]).then(a.bind(a, "r9tY"))).initializeVoiceSession()
            }
        })
    }),
    X0li: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(245889), a.e(418717), a.e(661332), a.e(606823)]).then(a.bind(a, "NyhQ"))).EnterpriseNonOnboardingSuggestions
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(245889), a.e(418717), a.e(661332), a.e(606823)]).then(a.bind(a, "NyhQ"))).prefetchEnterpriseNonOnboardingSuggestions
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(726206), a.e(588889), a.e(67320), a.e(934641)]).then(a.bind(a, "Qpnx"))).EnterpriseExperienceView
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(7074)]).then(a.bind(a, "Mpgv"))).EnterpriseOnboardingPrelude
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(37521), a.e(718698), a.e(418717), a.e(280369), a.e(36224)]).then(a.bind(a, "mmrk"))).WorkDefaultAnnouncementModal
            },
            f: async function() {
                return () => null
            },
            g: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(114816)]).then(a.bind(a, "Jk3P"))).WorkOnboardingModeToggle
            },
            h: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(280369), a.e(419178)]).then(a.bind(a, "lq5D"))).WorkOnboardingNuxGate
            },
            i: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(588889), a.e(683535)]).then(a.bind(a, "r7Kh"))).WorkOnboardingPluginWidget
            },
            j: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(245889), a.e(418717), a.e(661332)]).then(a.bind(a, "bKKS"))).WorkOnboardingSuggestions
            },
            k: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(37521), a.e(718698), a.e(418717), a.e(280369), a.e(36224)]).then(a.bind(a, "mmrk"))).WorkReonboardingGate
            },
            l: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(245889), a.e(477842)]).then(a.bind(a, "W8HU"))).WorkTaskTiles
            },
            m: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(718698), a.e(588889), a.e(930140)]).then(a.bind(a, "Jzw8"))).WorkspaceOnboardingPlugins
            }
        })
    }),
    gv9R: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(677006)]).then(a.bind(a, "AkTD"))).PersonalWorkspaceAccessBlockedDialog
            },
            b: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(576122)]).then(a.bind(a, "P9Pp"))).hasUpgradeWorkspaceDiscovery
            },
            c: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(831513)]).then(a.bind(a, "ljdr"))).WorkspaceDiscoveryAnnouncementHost
            },
            d: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(695172)]).then(a.bind(a, "Nw94"))).WorkspaceDiscovery
            },
            e: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(777906)]).then(a.bind(a, "gdY4"))).WorkspaceDiscoveryMenuItem
            },
            loadWorkspaceDiscoveryOpener: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(470409)]).then(a.bind(a, "Sgv4"))).openWorkspaceDiscovery
            }
        })
    }),
    bJs9: (function(e, t, a) {
        var n = a("lAQI");
        let r = n.F({
            isMatchingLoggedInUser: n.z(!0),
            referral: n.F({
                redemption_action: n.L()
            }).nullable().optional()
        });
        a.d(t, {}, {
            a: "workspace-invite-loading",
            b: function(e) {
                let t = r.safeParse(e);
                return t.success && (void 0 === t.data.referral || t.data.referral?.redemption_action.trim().toLowerCase() === "workspace_join")
            }
        })
    }),
    NUWk: (function(e, t, a) {
        a.d(t, {}, {
            a: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(226913), a.e(739941)]).then(a.bind(a, "LaQr"))).RecommendedOwnerSetup
            },
            b: function() {
                return Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(389166)]).then(a.bind(a, "cS0a"))
            },
            c: async function() {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(14459)]).then(a.bind(a, "VQa3"))).measureInvitationSeatSnapshot(...t)
            },
            loadOwnerOnboardingFlow: async function() {
                return (await Promise.all([a.e(418851), a.e(109308), a.e(399565), a.e(257798), a.e(447351), a.e(617936), a.e(807489), a.e(337882), a.e(955979), a.e(646436), a.e(7078), a.e(200429), a.e(698524), a.e(956483), a.e(87162), a.e(396705), a.e(155568), a.e(731863), a.e(767086), a.e(76629), a.e(235562)]).then(a.bind(a, "idEW"))).OwnerOnboardingFlow
            }
        })
    }),
    r0y7: (function(e, t, a) {
        var n = a("AQaI"),
            r = a.n(n),
            s = a("Q840"),
            i = a("UKCO"),
            o = a("e0Zo"),
            c = a("Dgwo"),
            l = a("AqHb"),
            d = a("Cslg"),
            u = a("IPsH"),
            h = a("OWtl"),
            p = a("KoM4");
        let m = (0, s.u)(h.a, null);
        a.d(t, {}, {
            a: m,
            b: async function(e, t, a) {
                let n = function(e) {
                    let t = e.get(m);
                    if (null == t) return null;
                    let a = e.get(d.f),
                        n = e.get(d.k),
                        r = e.queryClient.getQueryData((0, u.a)({
                            accountId: a,
                            enabled: !0,
                            userId: n
                        }).queryKey)?.profile_details,
                        s = e.queryClient.getQueryData((0, p.b)({
                            accountId: a,
                            userId: n
                        })),
                        i = null == r ? s?.displayName : r.display_name?.trim() || null,
                        o = null == r ? s?.imageUrl ?? null : r.profile_picture_url?.trim() || null;
                    return {
                        ...t,
                        name: i ?? t.email,
                        profilePictureUrl: o
                    }
                }(e);
                if (null == n) return null;
                if ("durable" === (0, l.a)(t)) return a ? n : null;
                try {
                    let a, s, {
                        layers: o
                    } = await (0, c.b)(e, t).sendRequest("config/read", {
                        cwd: null,
                        includeLayers: !0
                    }, {
                        priority: "critical",
                        timeoutMs: 3e4
                    });
                    return (a = i.Td?.senderPrefix, s = o?.findLast(e => "user" === e.name.type && null == e.name.profile), null != a && s?.disabledReason == null && (a.schema.safeParse(r()(s?.config, a.key)).data ?? a.default)) ? n : null
                } catch {
                    return null
                }
            },
            c: function(e, t) {
                let a = e.message.multiUserMessageSender;
                return null == a ? e : {
                    ...e,
                    message: {
                        ...e.message,
                        text: "durable" === (0, l.a)(t) ? (0, o.a)(e.message.text, a) : (0, o.d)(e.message.text, a),
                        context: {
                            ...e.message.context,
                            messageSender: a
                        }
                    }
                }
            }
        })
    }),
    utkD: (function(e, t, a) {
        var n = a("D7Ms"),
            r = a("Q840"),
            s = a("GaA7"),
            i = a("q77y"),
            o = a("OWtl"),
            c = a("rvFo");
        let l = (0, r.q)(o.a, u);

        function d(e) {
            let t = s.a?.nativeApplications?.list;
            return {
                queryKey: ["native-applications", "list", e],
                queryFn: null == t ? n.u : a => {
                    let {
                        signal: n
                    } = a;
                    return (0, i.a)(t(e), n)
                },
                staleTime: c.b.FIVE_MINUTES,
                refetchOnWindowFocus: !1
            }
        }

        function u(e) {
            let t = s.a?.nativeApplications?.getIcon;
            return {
                queryKey: ["native-applications", "icon", e],
                queryFn: "" !== e.appPath && null != t ? a => {
                    let {
                        signal: n
                    } = a;
                    return (0, i.a)(t(e), n)
                } : n.u,
                staleTime: c.b.INFINITE,
                refetchOnWindowFocus: !1
            }
        }(0, r.q)(o.a, d), a.d(t, {}, {
            a: l,
            b: u,
            c: function(e) {
                let t = s.a?.nativeApplications?.getByBundleId;
                return {
                    queryKey: ["native-applications", "by-bundle-id", e],
                    queryFn: null != e && null != t ? a => {
                        let {
                            signal: n
                        } = a;
                        return (0, i.a)(t(e), n)
                    } : n.u,
                    staleTime: c.b.FIVE_MINUTES,
                    refetchOnWindowFocus: !1
                }
            },
            d: d
        })
    }),
    F2d0: (function(e, t, a) {
        var n = a("ABep"),
            r = a("QosV"),
            s = a("zFPc"),
            i = a("iRMi"),
            o = a("QBk8"),
            c = a("irkb"),
            l = a("Q840"),
            d = a("UKCO"),
            u = a("AMYo"),
            h = a("zd8w"),
            p = a("v7qY"),
            m = a("Wf1j"),
            g = a("rEML"),
            f = a("q7pe"),
            b = a("tl5a"),
            y = a("HsGx"),
            w = a("Ietk"),
            v = a("twmu"),
            P = a("Cslg"),
            k = a("buia"),
            I = a("CPwi"),
            _ = a("ZY6E");
        a("vF5L");
        var C = a("kphc"),
            S = a("Bbed"),
            E = a("X6Vn"),
            A = a("SGsN"),
            L = a("wkoW"),
            R = a("P2xa"),
            M = a("vV6o"),
            x = a("gDxK"),
            q = a("yB89"),
            O = a("gPv1"),
            T = a("pQXd"),
            F = a("nlNF");
        a("RY92");
        var D = a("qMca");
        a("hZSj");
        var K = a("c5Fx"),
            B = a("zm5q"),
            N = a("DipL"),
            W = a("yGJW"),
            U = a("Q4dB"),
            Q = a("GaA7"),
            j = a("OWtl"),
            H = a("kl6F"),
            z = a("KHWn"),
            G = a("gqQv"),
            V = a("TlLQ"),
            X = a("wLYU"),
            Y = a("fnPc"),
            $ = a("SOLA"),
            J = a("kfGJ"),
            Z = a("NP6F"),
            ee = a("d6Ff"),
            et = a("YHhr"),
            ea = a("Bc5r"),
            en = a("CSxw"),
            er = a("TL6G");
        let es = (0, S.a)(async () => (await a.e(17871).then(a.bind(a, "TFU0"))).BusinessCheckoutSwitchWorkspaceDialog, {
            propagateLoadError: !0
        });
        async function ei(e) {
            await Promise.all([(0, w.g)("accounts-check"), (0, w.g)("account-info")]), await Promise.allSettled([e.invalidateQueries({
                queryKey: ["accounts", "check"],
                refetchType: "all"
            }), e.invalidateQueries({
                queryKey: v.a,
                refetchType: "all"
            }), e.invalidateQueries({
                queryKey: ["vscode", "account-info"],
                refetchType: "all"
            }), e.invalidateQueries({
                queryKey: [...U.a, J.a],
                refetchType: "all"
            }), e.invalidateQueries({
                queryKey: ["rate-limit-status"],
                refetchType: "all"
            }), e.invalidateQueries({
                queryKey: ["usage-settings", "auto-top-up"],
                refetchType: "all"
            })])
        }

        function eo() {
            return null
        }

        function ec() {}

        function el() {
            let e, t, a, n = (0, r.c)(16),
                s = (0, l.y)(j.a),
                i = (0, m.a)(),
                o = (0, g.Z)(),
                d = (0, g.ab)(),
                u = (0, c.c)();
            return n[0] !== d || n[1] !== u || n[2] !== s ? (e = e => {
                (0, p.flushSync)(() => {
                    d("/", {
                        replace: !0
                    })
                }), (0, E.f)(s, es, {
                    workspaceId: e.workspaceId
                }), ei(u)
            }, n[0] = d, n[1] = u, n[2] = s, n[3] = e) : e = n[3], (0, er.d)("business-checkout-complete", e), n[4] !== i || n[5] !== o.state || n[6] !== d || n[7] !== u || n[8] !== s ? (t = e => {
                let t = (0, q.a)(o.state);
                if ("redeemed" === e.outcome && t?.accountId != null) {
                    let e = s.query.getData(O.c);
                    e?.account_id === t.accountId && (0, x.a)(s, e, "codex_weekly");
                    let a = t.conversationId,
                        n = null == a ? null : s.get(b.db, a);
                    null != a && null != n && (0, q.c)(s, {
                        accountId: t.accountId,
                        conversationId: a,
                        turnId: n
                    })
                }
                switch ((0, p.flushSync)(() => {
                        d(t?.returnTo ?? "/", {
                            replace: !0
                        })
                    }), e.outcome) {
                    case "redeemed":
                        s.get(A.f).success(i.formatMessage({
                            id: "checkout.rateLimitReset.success",
                            defaultMessage: "Usage limits reset"
                        })), ei(u);
                        break;
                    case "pending":
                        s.get(A.f).success(i.formatMessage({
                            id: "checkout.rateLimitReset.pending",
                            defaultMessage: "Purchase successful"
                        })), ei(u);
                        break;
                    case "payment_failed":
                        s.get(A.f).danger(i.formatMessage({
                            id: "checkout.rateLimitReset.paymentFailure",
                            defaultMessage: "Payment failed. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "checkout.rateLimitReset.paymentFailure"
                            }
                        });
                        break;
                    case "other_error":
                        s.get(A.f).danger(i.formatMessage({
                            id: "checkout.rateLimitReset.failure",
                            defaultMessage: "We couldn’t complete your purchase. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "checkout.rateLimitReset.failure"
                            }
                        })
                }
            }, n[4] = i, n[5] = o.state, n[6] = d, n[7] = u, n[8] = s, n[9] = t) : t = n[9], (0, er.d)("rate-limit-reset-checkout-complete", t), n[10] !== i || n[11] !== o || n[12] !== d || n[13] !== u || n[14] !== s ? (a = () => {
                (0, p.flushSync)(() => {
                    d(ed(o), {
                        replace: !0
                    })
                }), s.get(A.f).success(i.formatMessage({
                    id: "checkout.creditPurchase.success",
                    defaultMessage: "Credits added"
                })), ei(u)
            }, n[10] = i, n[11] = o, n[12] = d, n[13] = u, n[14] = s, n[15] = a) : a = n[15], (0, er.d)("credit-purchase-checkout-complete", a), null
        }

        function ed(e) {
            let t = e.state;
            return e.pathname === M.c && t?.workCreditCheckout === !0 ? t.returnPath ?? "/" : "/"
        }
        a.d(t, {}, {
            a: function() {
                let e, t, w, v, S, E, x, q, O, U, es, eu, eh, ep, em, eg, ef, eb = (0, r.c)(51),
                    ey = (0, l.y)(j.a),
                    ew = (0, m.a)(),
                    ev = (0, g.Z)(),
                    eP = (0, g.ab)(),
                    ek = (0, h.useContext)(y.a),
                    eI = (0, ea.d)(),
                    e_ = (0, l.z)($.c).size > 0,
                    eC = (0, c.c)();
                eb[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, en.b)(), eb[0] = e) : e = eb[0];
                let eS = e;
                eb[1] !== ey ? (t = e => {
                    (0, W.a)(ey, i.CodexThreadOpened, {
                        kind: e
                    })
                }, eb[1] = ey, eb[2] = t) : t = eb[2];
                let eE = (0, h.useEffectEvent)(t),
                    eA = (0, h.useRef)(null),
                    eL = (0, h.useRef)(0),
                    eR = (0, g._)("/local/:conversationId"),
                    eM = eR?.params.conversationId ?? null;
                eb[3] !== eM ? (w = null != eM && (0, d.bi)(eM) ? eM : null, eb[3] = eM, eb[4] = w) : w = eb[4];
                let ex = w,
                    eq = (0, l.x)(H.B, ex);
                eb[5] !== eq || eb[6] !== ex || eb[7] !== eM ? (v = eq, null == ex && null != eM && (v = (0, d.Xe)(eM)), eb[5] = eq, eb[6] = ex, eb[7] = eM, eb[8] = v) : v = eb[8], eb[9] !== ev.search ? (S = new URLSearchParams(ev.search).get("hostId"), eb[9] = ev.search, eb[10] = S) : S = eb[10];
                let eO = S;
                eb[11] !== v || eb[12] !== eO ? (E = () => {
                    null != v && null != eO && Q.a.sshConnections?.recoverAuthentication(eO).catch(ec)
                }, eb[11] = v, eb[12] = eO, eb[13] = E) : E = eb[13], eb[14] !== v || eb[15] !== eO ? (x = [v, eO], eb[14] = v, eb[15] = eO, eb[16] = x) : x = eb[16], (0, h.useEffect)(E, x), eb[17] !== v || eb[18] !== ex || eb[19] !== eE ? (q = () => {
                    let e = null,
                        t = null;
                    if (null != v ? (e = "local", t = `local:${v}`) : null != ex && (e = "pending_worktree", t = `pending_worktree:${ex}`), null == t || null == e) {
                        eA.current = null;
                        return
                    }
                    eA.current !== t && (eA.current = t, eE(e))
                }, eb[17] = v, eb[18] = ex, eb[19] = eE, eb[20] = q) : q = eb[20], eb[21] !== v || eb[22] !== ex ? (O = [v, ex], eb[21] = v, eb[22] = ex, eb[23] = O) : O = eb[23], (0, h.useEffect)(q, O), eb[24] !== v || eb[25] !== ev || eb[26] !== eP || eb[27] !== eI || eb[28] !== ek || eb[29] !== ey ? (U = async function(e) {
                    let t = eL.current = eL.current + 1,
                        n = e.path;
                    if (eS && !(0, en.c)(n)) return;
                    let r = new URL(n, window.location.href);
                    if (n === `${s.c}?flow=onboarding` && null != (0, g.L)(s.c, ev.pathname)) {
                        let e = new URLSearchParams(ev.search).get("tab");
                        null != e && (r.searchParams.set("tab", e), n = `${r.pathname}${r.search}`)
                    }
                    let i = (0, g.L)(z.a, r.pathname);
                    if ("/welcome" === ev.pathname && null != (0, z.d)(i?.params.browserFamily) || "/cloud-environments/new" === n && ev.pathname === n && "" === ev.search && "" === ev.hash || (0, K.c)(e)) return;
                    if ("deep-link" === e.pageOpenReferrer && (0, W.a)(ey, o.CodexSpacesPageOpenRequested, {
                            referrer: o.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_DEEP_LINK
                        }), null != e.threadIdToLocate) {
                        let t = h(),
                            a = await (0, f.a)({
                                scope: ey,
                                threadId: e.threadIdToLocate,
                                preferredHostId: r.searchParams.get("hostId") ?? J.a
                            }).catch(eo);
                        if (!t()) return;
                        null != a && (a.hostId === J.a ? r.searchParams.delete("hostId") : r.searchParams.set("hostId", a.hostId), n = `${r.pathname}${r.search}${r.hash}`)
                    }
                    let c = null == e.notificationThread ? null : {
                        hostId: e.notificationThread.hostId,
                        threadId: (0, d.Xe)(e.notificationThread.conversationId)
                    };
                    if (null != c) {
                        let {
                            hostId: e,
                            threadId: t
                        } = c;
                        (r.pathname !== (0, d.he)(t) || v !== t || ((0, b.w)(ey.get, t) ?? J.a) !== e) && (0, N.b)(ey, t, e)
                    }
                    if ("/" === r.pathname) {
                        let t = d.Ee.safeParse(e.state);
                        t.success && null != t.data.codexAppMode && (0, C.m)(ey, t.data.codexAppMode)
                    }
                    if ((d.dj.safeParse(e.state).data?.entrypoint === "settings" || "/settings/teams" === r.pathname || r.pathname.startsWith("/settings/teams/")) && (0, Y.b)(ey, J.a), "/settings/local-environments" === r.pathname || r.pathname === V.a) {
                        let t = (0, V.d)(r.searchParams, e.state);
                        "personal-vault" === r.searchParams.get("view") ? (0, Y.b)(ey, J.a) : null != t && (0, Y.b)(ey, t.hostId)
                    }
                    if (!0 === e.persistForReload) {
                        let e = new URL(window.location.href);
                        e.searchParams.set("initialRoute", n), window.history.replaceState(window.history.state, "", e.toString())
                    }
                    let l = () => {
                        if (null != c && r.pathname === (0, d.he)(c.threadId) && (0, _.a)({
                                scope: ey,
                                navigate: eP,
                                location: ev,
                                thread: c,
                                navigationState: e.state
                            })) return;
                        if (r.pathname === u.a && "/login" !== ev.pathname && "/welcome" !== ev.pathname && "/select-workspace" !== ev.pathname) {
                            let t = (0, u.d)(r.searchParams),
                                n = ey.get(P.f),
                                s = ey.get(P.k);
                            if (null != t && null != n && null != s) return void async function(e, t, n, r, s) {
                                try {
                                    let {
                                        browserHandoffOrbit$: i,
                                        getBrowserHandoffLocation: o
                                    } = await Promise.resolve().then(a.bind(a, "LVz3"));
                                    if (!s()) return;
                                    let c = await e.query.getOrFetch(i, n);
                                    if (!s()) return;
                                    let l = null == c ? null : o(c, n, crypto.randomUUID());
                                    t(l?.pathname ?? r.path, {
                                        replace: r.replace,
                                        state: l?.state
                                    })
                                } catch {
                                    s() && t(r.path, {
                                        replace: r.replace
                                    })
                                }
                            }(ey, eP, t, e, h())
                        }
                        let t = e.threadSelection;
                        if (null != t) return void(0, et.b)(ey, "local" === t.kind ? (0, ee.a)((0, d.Xe)(t.conversationId)) : (0, ee.b)(t.taskId), eI, eP, "local" === t.kind ? t.hostId : void 0);
                        let s = "/cloud-environments/new" === n ? (0, R.a)(ey, ev) : void 0,
                            i = {
                                replace: null == s && e.replace,
                                state: "/cloud-environments/new" === n ? s : e.state
                            };
                        if (null != c && ek?.active.destinationId === Z.a.space.destinationId && null != (0, g.L)("/local/:conversationId", r.pathname) && !ey.get(D.c, c)) {
                            let e = Z.a.home.destinationId,
                                t = ek.roots.find(t => t.destinationId === e) ?? ek.createRoot(e);
                            ek.visit({
                                target: t,
                                append: !0
                            }, () => eP(n, i));
                            return
                        }
                        eP(n, i)
                    };

                    function h() {
                        let e = ey.get(F.c)?.key,
                            a = ey.get(P.f),
                            n = ey.get(P.k);
                        return () => eL.current === t && ey.get(F.c)?.key === e && ey.get(P.f) === a && ey.get(P.k) === n
                    }(0, B.a)("navigation.hostFlushSync", () => (0, p.flushSync)(l))
                }, eb[24] = v, eb[25] = ev, eb[26] = eP, eb[27] = eI, eb[28] = ek, eb[29] = ey, eb[30] = U) : U = eb[30];
                let eT = U;
                return eb[31] !== eT ? (es = e => {
                    eT(e)
                }, eb[31] = eT, eb[32] = es) : es = eb[32], (0, er.d)("navigate-to-route", es), eb[33] !== e_ || eb[34] !== ew || eb[35] !== ev || eb[36] !== eP || eb[37] !== ey ? (eu = () => {
                    if (!eS && !(0, X.a)(ey, -1)) {
                        if (ev.pathname === M.c || ev.pathname === T.a) return void(0, p.flushSync)(() => {
                            eP(ed(ev), {
                                replace: !0
                            })
                        });
                        (0, p.flushSync)(() => {
                            eP(-1)
                        })
                    }
                }, eb[33] = e_, eb[34] = ew, eb[35] = ev, eb[36] = eP, eb[37] = ey, eb[38] = eu) : eu = eb[38], (0, er.d)("navigate-back", eu), eb[39] !== eP || eb[40] !== ey ? (eh = () => {
                    eS || (0, X.a)(ey, 1) || (0, p.flushSync)(() => {
                        eP(1)
                    })
                }, eb[39] = eP, eb[40] = ey, eb[41] = eh) : eh = eb[41], (0, er.d)("navigate-forward", eh), eb[42] !== ew || eb[43] !== eC || eb[44] !== ey ? (ep = e => {
                    let t = (0, G.d)(e.planType);
                    null != t && (ey.get(A.f).success(ew.formatMessage({
                        id: "checkout.personal.upgradeSuccess",
                        defaultMessage: "Upgraded to {plan}"
                    }, {
                        plan: t
                    })), ei(eC))
                }, eb[42] = ew, eb[43] = eC, eb[44] = ey, eb[45] = ep) : ep = eb[45], (0, er.d)("personal-checkout-complete", ep), eb[46] === Symbol.for("react.memo_cache_sentinel") ? (em = !eS && (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)(L.a, {}), (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(k.a, {})
                    }), (0, n.jsx)(I.a, {})]
                }), eb[46] = em) : em = eb[46], eb[47] !== ev.pathname ? (eg = ev.pathname === M.c && (0, n.jsx)(el, {}), eb[47] = ev.pathname, eb[48] = eg) : eg = eb[48], eb[49] !== eg ? (ef = (0, n.jsxs)(n.Fragment, {
                    children: [em, eg]
                }), eb[49] = eg, eb[50] = ef) : ef = eb[50], ef
            }
        })
    }),
    TbYL: (function(e, t, a) {
        a.d(t, {
            a: () => w
        });
        var n = a("QosV"),
            r = a("iRMi"),
            s = a("Q840"),
            i = a("UKCO"),
            o = a("zd8w"),
            c = a("rEML"),
            l = a("YH6k"),
            d = a("E8Sp"),
            u = a("HsGx"),
            h = a("xm2W"),
            p = a("u0X2"),
            m = a("Wv1R"),
            g = a("yGJW"),
            f = a("OWtl"),
            b = a("vQRL"),
            y = a("nlNF");

        function w() {
            let e, t, a, w = (0, n.c)(9),
                v = (0, s.y)(f.a),
                P = (0, c.Z)(),
                k = (0, c.cb)();
            w[0] !== P ? (e = {
                entries: [P],
                index: 0,
                popDelta: 0
            }, w[0] = P, w[1] = e) : e = w[1];
            let I = (0, o.useRef)(e),
                _ = (0, u.c)(),
                C = _?.history,
                S = _?.active.id;
            return w[2] !== P || w[3] !== k || w[4] !== v || w[5] !== C || w[6] !== S ? (t = () => {
                let e = I.current,
                    t = C ?? (e.entries[e.index]?.key === P.key ? e : function(e, t, a) {
                        let {
                            entries: n,
                            index: r
                        } = e;
                        if (a === c.a.Pop) {
                            let e = n.findIndex(e => e.key === t.key);
                            if (-1 !== e) return {
                                entries: n,
                                index: e,
                                popDelta: e - r
                            }
                        }
                        let s = a === c.a.Pop || a === c.a.Replace && n[r]?.hasUnknownPredecessor ? {
                            ...t,
                            hasUnknownPredecessor: !0
                        } : t;
                        if (a === c.a.Replace) {
                            let e = n.slice();
                            return e[r] = s, {
                                entries: e,
                                index: r,
                                popDelta: 0
                            }
                        }
                        let i = n.slice(0, r + 1);
                        return i.push(s), {
                            entries: i,
                            index: i.length - 1,
                            popDelta: 0
                        }
                    }(e, P, k));
                I.current = t, (0, h.c)(P.pathname + P.search);
                let a = v.get(y.c);
                if ((0, b.e)(P, null == a), (0, s.s)(v, () => {
                        null != a && a.key !== P.key && (k !== c.a.Replace || P.state?.initialNavigationFromKey !== a.key && (0, c.A)(a) !== (0, c.A)(P)) && v.set(y.i, !1), v.set(d.a, "main" === S ? void 0 : S), v.set(y.c, P);
                        let e = v.get(l.b);
                        null != e && (e.originKey !== P.key || e.originRootId !== S) && (0, l.a)(v, e), v.set(y.d, k), v.set(y.k, t), a?.key !== P.key && v.set(y.e, v.get(y.e) + 1), v.set(y.m, t.entries[t.index - 1]?.key ?? null), v.set(y.l, t.entries[t.index + 1] ?? null), v.set(y.a, t.index > 0), v.set(y.b, t.index < t.entries.length - 1)
                    }), a?.key !== P.key) {
                    let e = (0, c.L)(i.id, P.pathname) ?? (0, c.L)("/plugins/:pluginId/app/:toolName", P.pathname);
                    if (e?.params.pluginId != null) {
                        let e = i.dj.safeParse(P.state).data;
                        (0, g.a)(v, r.CodexMcpExtensionAction, {
                            connectorId: e?.sourceMcpApp?.appId,
                            feature: "deep_link",
                            action: "requested"
                        })
                    } else if (a?.pathname !== P.pathname && (0, c.L)(i.Vc, P.pathname)) {
                        let e = v.get(m.e)?.entries?.find(e => e.path === P.pathname);
                        (0, g.a)(v, r.CodexMcpExtensionAction, {
                            ...null == e ? {} : (0, p.b)(v, e),
                            feature: "global_entrypoint",
                            action: "requested"
                        })
                    }
                }
            }, a = [P, k, v, C, S], w[2] = P, w[3] = k, w[4] = v, w[5] = C, w[6] = S, w[7] = t, w[8] = a) : (t = w[7], a = w[8]), (0, o.useLayoutEffect)(t, a), null
        }
    }),
    nlNF: (function(e, t, a) {
        var n = a("Q840"),
            r = a("rEML"),
            s = a("E8Sp"),
            i = a("vV6o"),
            o = a("pQXd"),
            c = a("OWtl");
        let l = (0, n.u)(c.a, () => null),
            d = (0, n.u)(c.a, !0),
            u = (0, n.u)(c.a, !1),
            h = (0, n.u)(c.a, !1),
            p = (0, n.u)(c.a, () => null),
            m = (0, n.u)(c.a, null),
            g = (0, n.u)(c.a, () => r.a.Pop),
            f = (0, n.u)(c.a, 0),
            b = (0, n.u)(c.a, () => null);
        (0, n.c)(c.a, e => {
            let {
                get: t
            } = e, a = t(m);
            if (null != a) return {
                key: a.key,
                backKey: a.pathname === i.c || a.pathname === o.a ? null : t(p),
                forwardKey: t(b)?.key ?? null
            }
        });
        let y = (0, n.u)(c.a, null, {
            isEqual: (e, t) => e === t || null != e && null != t && e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
        });
        a.d(t, {}, {
            a: u,
            b: h,
            c: m,
            d: g,
            e: f,
            f: function(e) {
                let {
                    x: t,
                    y: a,
                    width: n,
                    height: r
                } = e.getBoundingClientRect();
                return n > 0 && r > 0 ? {
                    x: t,
                    y: a,
                    width: n,
                    height: r
                } : null
            },
            g: y,
            h: function(e) {
                let t = e.get(m);
                return e.get(s.a) === e.value.shellRootId && t?.pathname === e.value.pathname && t.search === (e.value.search ?? "")
            },
            i: d,
            j: function(e, t, a) {
                e.get(p) === a.key ? t(-1) : t(a, {
                    state: a.state,
                    replace: !0
                })
            },
            k: l,
            l: b,
            m: p
        })
    }),
    k30c: (function(e, t, a) {
        var n = a("QosV"),
            r = a("Q840"),
            s = a("v7qY"),
            i = a("Wf1j"),
            o = a("OFP1"),
            c = a("M0Ez"),
            l = a("EFj1"),
            d = a("jEN2"),
            u = a("kphc"),
            h = a("Q8aV"),
            p = a("TL6G"),
            m = a("OWtl"),
            g = a("WFY2");
        a.d(t, {}, {
            a: function() {
                let e, t, a, f, b, y, w, v, P, k, I = (0, n.c)(19),
                    _ = (0, r.y)(m.a),
                    C = (0, i.a)(),
                    S = (0, h.c)();
                return I[0] !== S ? (e = () => S({
                    selectChat: !0
                }), I[0] = S, I[1] = e) : e = I[1], I[2] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    priority: "fallback"
                }, I[2] = t) : t = I[2], (0, l.a)("newTask", e, t), I[3] !== S ? (a = e => {
                    if (null == e.chatGptPrefill) return void S();
                    let t = e.chatGptPrefill.systemHints.filter(c.m);
                    S(0 === t.length ? void 0 : {
                        ...0 === e.chatGptPrefill.text.length ? {} : {
                            prefillPrompt: e.chatGptPrefill.text
                        },
                        prefillChatGptSystemHints: t
                    })
                }, f = [S], I[3] = S, I[4] = a, I[5] = f) : (a = I[4], f = I[5]), (0, p.d)("new-chat", a, f), I[6] !== _ || I[7] !== S ? (b = e => {
                    let t = _.get(o.u);
                    if (t || _.get(o.j)) {
                        if ("new" === e.destination || !(0, d.k)("capture-screenshot-selection")) {
                            let e = !1;
                            if ((0, s.flushSync)(() => {
                                    S({
                                        codexAppMode: t ? "work" : "codex",
                                        onNavigate: () => {
                                            t && (0, u.n)(_, "work"), e = !0
                                        }
                                    })
                                }), !e) return
                        }
                        p.c.dispatchHostMessage({
                            type: "capture-screenshot-selection",
                            destination: e.destination
                        })
                    }
                }, y = [_, S], I[6] = _, I[7] = S, I[8] = b, I[9] = y) : (b = I[8], y = I[9]), (0, p.d)("screenshot-selection-shortcut", b, y), I[10] !== _ || I[11] !== S ? (w = () => {
                    let e = _.get(o.v).status;
                    "allowed" !== e ? g.a.info("Appshot new chat shortcut skipped", {
                        safe: {
                            workModeAccessStatus: e
                        }
                    }) : ((0, s.flushSync)(() => {
                        (0, u.n)(_, "work"), S()
                    }), g.a.info("Appshot new chat shortcut forwarding"), p.c.dispatchHostMessage({
                        type: "appshot-shortcut"
                    }))
                }, v = [_, S], I[10] = _, I[11] = S, I[12] = w, I[13] = v) : (w = I[12], v = I[13]), (0, p.d)("new-chat-with-appshot", w, v), I[14] !== C || I[15] !== _ || I[16] !== S ? (P = e => {
                    var t;
                    let a, n, r = null != e.files && e.files.length > 0,
                        s = "install-skill" === e.prefillPromptKind;
                    r && !s && "chat" === _.get(u.e) ? S({
                        activeProject: null,
                        prefillAddedFiles: e.files
                    }) : (_.get(o.j) || r && !s && "allowed" === _.get(o.v).status) && S({
                        ...(a = {}, n = !1, null != (t = e).files && t.files.length > 0 && (a.prefillAddedFiles = t.files, n = !0), null != t.previewFiles && t.previewFiles.length > 0 && (a.prefillArtifactPreviewFiles = t.previewFiles, n = !0), n ? a : void 0),
                        ...s ? {
                            prefillPrompt: C.formatMessage({
                                id: "composer.skillFileInstallPrompt",
                                defaultMessage: "Install this skill"
                            })
                        } : {},
                        activeProject: null
                    })
                }, k = [C, _, S], I[14] = C, I[15] = _, I[16] = S, I[17] = P, I[18] = k) : (P = I[17], k = I[18]), (0, p.d)("new-projectless-task", P, k), null
            }
        })
    })
};