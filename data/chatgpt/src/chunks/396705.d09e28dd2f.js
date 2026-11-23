export const __rspack_esm_ids = [396705];
export const __webpack_modules__ = {
    TL6G: (function(a, b, c) {
        c.d(b, {
            a: () => j,
            b: () => m,
            c: () => l,
            d: () => k
        });
        var d = c("QosV"),
            e = c("zd8w"),
            f = c("w5lg"),
            g = c("SrbS"),
            h = c("wl0r");
        let i = new Set(["mcp-request-delivery", "mcp-response", "personal-workspace-access-blocked"]);
        class j {
            static instance = null;
            static getInstance() {
                return null == this.instance && (this.instance = new j), this.instance
            }
            handlers = new Map;
            bufferedMessages = new Map;
            handledBufferedMessages = new WeakSet;
            hostMessageInterceptors = new Set;
            isListeningToWindow = !1;
            initialized = !1;
            windowMessageListener = a => {
                this.handleMessage(a)
            };
            constructor() {
                this.dispatchMessage = this.dispatchMessage.bind(this)
            }
            initialize() {
                this.initialized || (this.startWindowMessageListener(), (0, g.b)((a, b) => {
                    this.dispatchMessage(a, b)
                }), this.initialized = !0)
            }
            dispatchMessage(a, b) {
                if (null == h.g) throw Error("VS Code API is unavailable");
                h.g.postMessage({
                    ...b,
                    type: a
                })
            }
            deliverMessage(a, b) {
                let c = this.handlers.get(a);
                if (!c) return;
                let d = (a, b) => {
                    this.dispatchMessage(a, b)
                };
                for (let a of c) a(b, d)
            }
            dispatchHostMessage(a) {
                this.deliverOrBufferMessage(a)
            }
            hasHandledBufferedMessage(a) {
                return this.handledBufferedMessages.has(a)
            }
            startTestWindowMessageListener() {
                throw Error("Test message listeners are only available in tests")
            }
            deliverOrBufferMessage(a) {
                for (let {
                        intercept: b
                    }
                    of this.hostMessageInterceptors) try {
                    if (b(a)) return
                } catch (a) {
                    reportError(a)
                }
                if (i.has(a.type) && this.handledBufferedMessages.add(a), i.has(a.type) && !this.handlers.has(a.type)) {
                    let b = "personal-workspace-access-blocked" === a.type ? [] : this.bufferedMessages.get(a.type) ?? [];
                    b.push(a), this.bufferedMessages.set(a.type, b);
                    return
                }
                this.deliverMessage(a.type, a)
            }
            handleMessage(a) {
                let b = (0, f.a)(a);
                null != b && this.deliverOrBufferMessage(b)
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
            interceptHostMessages(a) {
                let b = {
                    intercept: a
                };
                return this.hostMessageInterceptors.add(b), () => {
                    this.hostMessageInterceptors.delete(b)
                }
            }
            subscribe(a, b) {
                let c = this.handlers.get(a) ?? new Set;
                c.add(b), this.handlers.set(a, c);
                let d = this.bufferedMessages.get(a);
                if (null != d)
                    for (let b of (this.bufferedMessages.delete(a), d)) this.deliverMessage(a, b);
                return () => {
                    let c = this.handlers.get(a);
                    c && (c.delete(b), 0 === c.size && this.handlers.delete(a))
                }
            }
        }

        function k(a, b, c) {
            let f, g, h, i, k = (0, d.c)(9);
            k[0] !== c ? (f = void 0 === c ? [] : c, k[0] = c, k[1] = f) : f = k[1];
            let l = f;
            k[2] === Symbol.for("react.memo_cache_sentinel") ? (g = j.getInstance(), k[2] = g) : g = k[2];
            let m = g,
                n = (0, e.useEffectEvent)(b);
            k[3] !== n || k[4] !== a ? (h = () => {
                let b = m.subscribe(a, n);
                return () => b()
            }, k[3] = n, k[4] = a, k[5] = h) : h = k[5], k[6] !== l || k[7] !== a ? (i = [m, a, ...l], k[6] = l, k[7] = a, k[8] = i) : i = k[8], (0, e.useEffect)(h, i)
        }
        let l = j.getInstance();

        function m() {
            l.initialize()
        }
        m()
    }),
    lxu0: (function(a, b, c) {
        var d = c("QosV"),
            e = c("irkb"),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("zd8w"),
            i = c("UOeP"),
            j = c("rljs"),
            k = c("shRG"),
            l = c("Dgwo"),
            m = c("tl5a"),
            n = c("rk7m"),
            o = c("rtPM"),
            p = c("MLeN"),
            q = c("RU3e"),
            r = c("CSxw"),
            s = c("TleN"),
            t = c("TL6G"),
            u = c("xzRU"),
            v = c("UrCy"),
            w = c("GaA7"),
            x = c("OWtl"),
            y = c("ndjw"),
            z = c("hZax"),
            A = c("WFY2"),
            B = c("TurB");
        c.d(b, {}, {
            a: function() {
                let a, b, c, C, D, E, F, G, H, I, J, K, L, M, N = (0, d.c)(40),
                    O = (0, f.y)(x.a),
                    P = (0, z.f)("4226282475"),
                    Q = (0, e.c)();
                N[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, r.b)(), N[0] = a) : a = N[0];
                let R = a,
                    S = (0, s.a)(),
                    T = (0, f.z)(n.b);
                N[1] === Symbol.for("react.memo_cache_sentinel") ? (b = new Map, N[1] = b) : b = N[1];
                let U = (0, h.useRef)(b);
                N[2] === Symbol.for("react.memo_cache_sentinel") ? (c = new Map, N[2] = c) : c = N[2];
                let V = (0, h.useRef)(c);
                N[3] === Symbol.for("react.memo_cache_sentinel") ? (C = new Set, N[3] = C) : C = N[3];
                let W = (0, h.useRef)(C);
                N[4] !== O ? (D = () => (0, i.a)(O), E = [O], N[4] = O, N[5] = D, N[6] = E) : (D = N[5], E = N[6]), (0, h.useEffect)(D, E), N[7] !== O || N[8] !== P ? (F = async function(a, b) {
                    if (!O.get(m.m, b)) return !1;
                    let c = await (0, p.a)(O, b, {
                            allowProjectSourceRoots: !0
                        }),
                        d = O.get(m.X, b) ?? null;
                    return "ready" === (await (0, l.b)(O, a).resumeConversation({
                        conversationId: b,
                        model: null,
                        reasoningEffort: null,
                        workspaceRoots: c,
                        useAppServerPermissionDefault: P,
                        collaborationMode: d
                    }, {
                        readResumeInputs: (0, k.a)(O, a)
                    })).status
                }, N[7] = O, N[8] = P, N[9] = F) : F = N[9];
                let X = F;
                N[10] !== S || N[11] !== T || N[12] !== Q || N[13] !== X || N[14] !== O ? (G = async function(a) {
                    let b = U.current.get(a);
                    if (b) {
                        b.requestedAgain = !0, await b.promise;
                        return
                    }
                    let c = Promise.resolve().then(async () => {
                            do {
                                d.requestedAgain = !1;
                                try {
                                    Promise.all([(0, u.a)(Q, a), (0, B.g)(O, a)]).catch(b => {
                                        A.a.warning("websocket_reconnect_recovery_metadata_refresh_failed", {
                                            safe: {
                                                hostId: a,
                                                currentConversationId: S ?? null
                                            },
                                            sensitive: {
                                                error: b
                                            }
                                        })
                                    }), A.a.info("websocket_reconnect_recovery_start", {
                                        safe: {
                                            hostId: a,
                                            currentConversationId: S ?? null
                                        },
                                        sensitive: {}
                                    });
                                    let b = null != S && O.get(m.yb, S) === a;
                                    (0, o.c)(O, a, {
                                        restoreStreams: !0,
                                        foregroundConversationId: b ? S : null
                                    });
                                    let c = !1;
                                    try {
                                        "live" === T || (0, g.fi)(a) ? await (0, l.b)(O, a).refreshRecentConversations() : "catalog" === T && await w.a.localThreadCatalog?.invalidateSource(a)
                                    } catch (b) {
                                        c = !0, A.a.warning("websocket_reconnect_recovery_thread_list_refresh_failed", {
                                            safe: {
                                                hostId: a,
                                                currentConversationId: S ?? null
                                            },
                                            sensitive: {
                                                error: b
                                            }
                                        })
                                    }
                                    let d = !!b && null != S && await X(a, S);
                                    A.a.info("websocket_reconnect_recovery_done", {
                                        safe: {
                                            hostId: a,
                                            currentConversationId: S ?? null,
                                            currentConversationExistsOnTargetHost: b,
                                            resumedCurrentConversation: d,
                                            refreshRecentConversationsFailed: c
                                        },
                                        sensitive: {}
                                    })
                                } catch (b) {
                                    A.a.error("websocket_reconnect_recovery_failed", {
                                        safe: {
                                            hostId: a,
                                            conversationId: S ?? null
                                        },
                                        sensitive: {
                                            error: b
                                        }
                                    })
                                }
                            } while (d.requestedAgain)
                        }).finally(() => {
                            U.current.delete(a)
                        }),
                        d = {
                            promise: c,
                            requestedAgain: !1
                        };
                    U.current.set(a, d), await c
                }, N[10] = S, N[11] = T, N[12] = Q, N[13] = X, N[14] = O, N[15] = G) : G = N[15];
                let Y = G;
                N[16] !== O ? (H = async function(a) {
                    let b = V.current;
                    b.has(a) ? b.set(a, !0) : await (async () => {
                        do {
                            b.set(a, !1);
                            try {
                                await (0, B.g)(O, a)
                            } catch (b) {
                                A.a.warning("stdio_ssh_reconnect_worktree_refresh_failed", {
                                    safe: {},
                                    sensitive: {
                                        error: b,
                                        hostId: a
                                    }
                                })
                            }
                        } while (b.get(a))
                    })().finally(() => {
                        b.delete(a)
                    })
                }, N[16] = O, N[17] = H) : H = N[17];
                let Z = H;
                N[18] !== S || N[19] !== Q || N[20] !== X || N[21] !== O ? (I = async function(a, b) {
                    let c = U.current.get(a);
                    null != c && await c.promise, W.current.has(a) || (W.current.add(a), await (async () => {
                        try {
                            if (await Promise.all([Q.invalidateQueries({
                                    queryKey: ["mcp-extension-host-thread", a]
                                }), Q.invalidateQueries({
                                    queryKey: ["user-saved-config"]
                                }), Q.invalidateQueries({
                                    queryKey: (0, v.a)(a)
                                }), Q.invalidateQueries({
                                    queryKey: (0, v.b)(a)
                                })]), (0, o.a)(O, a), !b) return;
                            let c = null != S && O.get(m.yb, S) === a;
                            (0, o.c)(O, a, {
                                restoreStreams: !0,
                                foregroundConversationId: c ? S : null
                            });
                            let d = !!c && null != S && await X(a, S);
                            A.a.info("app_server_restart_recovery_done", {
                                safe: {
                                    hostId: a,
                                    currentConversationId: S ?? null,
                                    currentConversationExistsOnTargetHost: c,
                                    resumedCurrentConversation: d
                                },
                                sensitive: {}
                            })
                        } catch (b) {
                            A.a.error("app_server_restart_recovery_failed", {
                                safe: {
                                    hostId: a,
                                    conversationId: S ?? null
                                },
                                sensitive: {
                                    error: b
                                }
                            })
                        }
                    })().finally(() => {
                        W.current.delete(a)
                    }))
                }, N[18] = S, N[19] = Q, N[20] = X, N[21] = O, N[22] = I) : I = N[22];
                let $ = I;
                return N[23] !== Q || N[24] !== Z || N[25] !== Y || N[26] !== O ? (J = a => {
                    let b = O.get(j.f, a.hostId);
                    if (b || void 0 === a.appServerVersion || (0, m.Hb)(O, {
                            appServerVersion: a.appServerVersion,
                            hostId: a.hostId,
                            installedCodexVersion: a.installedCodexVersion,
                            supportsCloudDaybreak: a.supportsCloudDaybreak
                        }), A.a.info("remote_connections.connection_state_changed", {
                            safe: {
                                appServerVersion: a.appServerVersion,
                                progress: a.progress,
                                state: a.state
                            },
                            sensitive: {
                                error: a.error,
                                hostId: a.hostId
                            }
                        }), !O.get(m.vb).includes(a.hostId)) return void A.a.info("remote_connections.connection_state_ignored_for_missing_manager", {
                        safe: {
                            state: a.state
                        },
                        sensitive: {
                            hostId: a.hostId
                        }
                    });
                    if (b || ((0, m.Fb)(O, a.hostId, a.progress), (0, m.Gb)(O, {
                            error: a.error,
                            hostId: a.hostId,
                            source: "host_connection_state_changed",
                            sshAuthenticationRetryAt: a.sshAuthenticationRetryAt ?? null,
                            state: a.state
                        })), !a.isSnapshot && "connected" === a.state) {
                        if (R && !0 !== O.get(q.b)) {
                            "websocket" === a.transport && (0, o.c)(O, a.hostId, {
                                restoreStreams: !0,
                                foregroundConversationId: null
                            });
                            return
                        }
                        if ("stdio" === a.transport && (0, g.Ki)(O.get(y.g, a.hostId))) {
                            (0, u.a)(Q, a.hostId).catch(b => {
                                A.a.warning("stdio_ssh_reconnect_permission_refresh_failed", {
                                    safe: {},
                                    sensitive: {
                                        error: b,
                                        hostId: a.hostId
                                    }
                                })
                            }), Z(a.hostId);
                            return
                        }
                        "websocket" === a.transport && Y(a.hostId)
                    }
                }, N[23] = Q, N[24] = Z, N[25] = Y, N[26] = O, N[27] = J) : J = N[27], N[28] !== S || N[29] !== T || N[30] !== Q || N[31] !== O ? (K = [O, R, S, T, Q], N[28] = S, N[29] = T, N[30] = Q, N[31] = O, N[32] = K) : K = N[32], (0, t.d)("codex-app-server-connection-changed", J, K), N[33] !== $ || N[34] !== O ? (L = a => {
                    a.isSnapshot || R && !0 !== O.get(q.b) || $(a.hostId, "websocket" !== a.transport)
                }, N[33] = $, N[34] = O, N[35] = L) : L = N[35], N[36] !== S || N[37] !== Q || N[38] !== O ? (M = [R, S, Q, O], N[36] = S, N[37] = Q, N[38] = O, N[39] = M) : M = N[39], (0, t.d)("codex-app-server-initialized", L, M), null
            }
        })
    }),
    wIno: (function(a, b, c) {
        var d = c("SRbQ"),
            e = c("ABep"),
            f = c("yTnN"),
            g = c("zPtR"),
            h = c("iRMi"),
            i = c("OSkm"),
            j = c("irkb"),
            k = c("AlRz"),
            l = c("Q840"),
            m = c("KvQL"),
            n = c("OeLR"),
            o = c("Ehlj"),
            p = c("OP23"),
            q = c("fA1m"),
            r = c("zd8w"),
            s = c("rEML"),
            t = c("Is2c"),
            u = c("ZEYh"),
            v = c("PFjh"),
            w = c("Dgwo"),
            x = c("uku1"),
            y = c("l00C"),
            z = c("wkUO"),
            A = c("EpL9"),
            B = c("eyg4"),
            C = c("p24q");
        c("pLiJ");
        var D = c("NVPY"),
            E = c("QLtS"),
            F = c("JVSG"),
            G = c("unIO"),
            H = c("j9xU"),
            I = c("KH2l"),
            J = c("W0nC"),
            K = c("ReGc"),
            L = c("szIs"),
            M = c("qj4H"),
            N = c("vLsY"),
            O = c("jMec"),
            P = c("Telb"),
            Q = c("kMxU"),
            R = c("EkjL"),
            S = c("joNQ"),
            T = c("dQAD"),
            U = c("gQXi"),
            V = c("g5Nq"),
            W = c("nin5"),
            X = c("Wefw"),
            Y = c("fGFs"),
            Z = c("StMt"),
            $ = c("Ei9z"),
            _ = c("ysE7"),
            aa = c("UduS"),
            ab = c("tl5a"),
            ac = c("GF9W"),
            ad = c("rk7m"),
            ae = c("BgXp"),
            af = c("jlrG"),
            ag = c("GYKx"),
            ah = c("rtPM"),
            ai = c("IBLs"),
            aj = c("QDwu"),
            ak = c("wCOm"),
            al = c("vl5l"),
            am = c("RU3e"),
            an = c("RQkm"),
            ao = c("i8Zd"),
            ap = c("oo2L"),
            aq = c("yGJ5"),
            ar = c("v5Eh"),
            as = c("Rvvc"),
            at = c("HUHI"),
            au = c("sT8g"),
            av = c("OiCI"),
            aw = c("h6fL"),
            ax = c("KJlv"),
            ay = c("mkNg"),
            az = c("GiCe"),
            aA = c("rWsS");
        c("S99C");
        var aB = c("q3HK"),
            aC = c("CSxw"),
            aD = c("jEN2"),
            aE = c("X6Vn"),
            aF = c("SGsN"),
            aG = c("obo5"),
            aH = c("U6F1"),
            aI = c("w5lg"),
            aJ = c("PFP1"),
            aK = c("XYHU"),
            aL = c("svjy"),
            aM = c("Rpy5"),
            aN = c("ziRc"),
            aO = c("TL6G");
        c("noCE");
        var aP = c("e1xH"),
            aQ = c("loz7"),
            aR = c("PmQd"),
            aS = c("bNMl"),
            aT = c("XZon"),
            aU = c("a4MG"),
            aV = c("Gg2s"),
            aW = c("doff"),
            aX = c("dPoV"),
            aY = c("Q4dB"),
            aZ = c("Q3tq");
        c("WYBZ");
        var a$ = c("pnaf"),
            a_ = c("pwwq"),
            a0 = c("epmH"),
            a1 = c("GaA7"),
            a2 = c("iDH4"),
            a3 = c("W2Qq"),
            a4 = c("OWtl"),
            a5 = c("ndjw"),
            a6 = c("ADAj"),
            a7 = c("kfGJ"),
            a8 = c("Hcte"),
            a9 = c("r4QU"),
            ba = c("bPa2"),
            bb = c("OMIV"),
            bc = c("iccR"),
            bd = c("sa2M"),
            be = c("lJ2N"),
            bf = c("fvOC"),
            bg = c("WFY2"),
            bh = c("gx4u"),
            bi = c("wl0r"),
            bj = c("dg06");

        function bk(a, b) {
            "hosted-git-chunked-output" === b.type ? a.get(v.a).count("default", "codex.hosted_git.chunked_output", {
                outcome: b.outcome
            }) : "app-update-observed" === b.type ? (0, R.a)(a.get(aS.d), b.observation) : (0, T.a)(a, b, a => a1.a.installerAttribution?.acknowledge(a) ?? Promise.resolve())
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    children: b
                } = a, v = (0, l.y)(a4.a), R = (0, l.z)(aS.d), T = (0, r.useRef)([]), bl = (0, s.Z)(), bm = (0, s.ab)(), bn = (0, aw.a)(), bo = (0, j.c)(), bp = (0, aC.b)(), bq = (0, aq.h)(), br = (0, r.useRef)(new Map), bs = (0, r.useRef)(0), bt = (0, r.useRef)([]), bu = (0, r.useRef)(new WeakSet), {
                    claimAppConnectOAuthCallback: bv,
                    clearPendingAppConnect: bw,
                    getPendingAppConnectForCallbackUrl: bx
                } = (0, aq.g)(), by = (0, r.useEffectEvent)(async a => {
                    let {
                        fullRedirectUrl: b,
                        returnTo: d,
                        source: e
                    } = a;
                    if ((0, aA.a)(b)) return;
                    let g = URL.parse(b);
                    if ((g?.protocol === "codex:" || g?.protocol === "codex-dev:") && g?.hostname === "connector" && ("/oauth_callback/onepassword" === g.pathname || "/oauth_callback/onepassword-staging" === g.pathname)) {
                        let {
                            completeNativeOnePasswordEnrollment: a
                        } = await c.e(779886).then(c.bind(c, "RWpI"));
                        await a(v, g);
                        return
                    }
                    if (null != g && null != (0, B.a)(g)) {
                        let {
                            completeHealthDesktopOAuth: a
                        } = await (0, f.b)();
                        await a(v, b);
                        return
                    }
                    let h = performance.timeOrigin + performance.now(),
                        i = bx(b),
                        j = "direct" === e && i?.returnTo === "/welcome",
                        k = i?.resumeTarget.kind,
                        l = i?.returnTo === `${bl.pathname}${bl.search}${bl.hash}` && (null != (0, s.L)(m.yc, bl.pathname) || null != (0, s.L)(m.td, bl.pathname)) && ("connector-auth-elicitation" === k || "tool-suggestion-elicitation" === k || "plugin-install" === k && !i.isGithubConnector && i.appId !== as.c);
                    if (null == i || !j && !l && ("mcp-connect-sheet" !== i.resumeTarget.kind || null != i.resumeTarget.homeSuggestion)) return void bm("/connector/oauth_callback", {
                        state: {
                            callbackReceivedAtMs: h,
                            fullRedirectUrl: b,
                            hasCallbackClaim: "broadcast" === e || void 0,
                            returnTo: d
                        }
                    });
                    if (!j && (0, ar.b)(v.get(aQ.o), i)) return void bw({
                        oauthState: i.oauthState
                    });
                    let n = "broadcast" === e || bv(b);
                    if (!j && !n) {
                        i.claimed || bm("/connector/oauth_callback", {
                            state: {
                                callbackReceivedAtMs: h,
                                fullRedirectUrl: b,
                                returnTo: d
                            }
                        });
                        return
                    }
                    let o = await bq({
                        callbackReceivedAtMs: h,
                        fullRedirectUrl: b,
                        hasCallbackClaim: n
                    });
                    if ("mcp-connect-sheet" !== i.resumeTarget.kind) {
                        if (!j && ((0, ar.c)(v, i, o), (0, ar.b)(v.get(aQ.o), i))) return;
                        if ("success" !== o.kind || "plugin-install" !== k && j) "plugin-install" === k && (j && "request-failed" === o.kind && o.reinstallRequired ? v.set(aQ.o, a => (0, aQ.e)(a, "failed")) : !j && (0, ar.d)(v.get(aQ.o)) ? v.set(aQ.o, a => (0, aQ.e)(a)) : (0, aQ.j)(v, {
                            appId: i.appId,
                            status: "pending"
                        }));
                        else
                            for (let a of [o.appId, ...o.connectedCompanionAppIds ?? []])(0, aQ.j)(v, {
                                appId: a,
                                status: "connected"
                            });
                        if ("success" !== o.kind) {
                            let a = v.get(aL.a),
                                b = "superseded" === o.kind ? (0, ap.g)(a) : (0, ar.a)(a, o);
                            v.get(aF.f).danger(b, {
                                errorAnalytics: {
                                    toastId: "messageHandler.handleAppConnectOAuthCallbackEvent"
                                }
                            })
                        }
                    }
                }), bz = (0, l.z)(O.a);
                return (0, r.useEffect)(() => (0, a2.a)(v, w.b), [v]), (0, r.useEffect)(() => {
                    let a = window.matchMedia("(display-mode: fullscreen)");
                    v.set(an.a, a.matches);
                    let b = a => {
                        v.set(an.a, a.matches)
                    };
                    return a.addEventListener("change", b), () => a.removeEventListener("change", b)
                }, [v]), (0, r.useEffect)(() => {
                    if (R === aS.b) return;
                    let a = T.current;
                    for (let b of (T.current = [], a)) bk(v, b)
                }, [R, v]), (0, r.useEffect)(() => {
                    let a = [(0, aM.b)("automation-capability-event", a => {
                        "desktop" === a.sourceClientId && (0, af.a)(v, a.params)
                    }), (0, aM.b)("automation-run-triggered-event", a => {
                        "desktop" === a.sourceClientId && (0, ag.a)(v, a.params)
                    }), (0, aM.b)("app-connect-oauth-callback-received", a => {
                        !(0, aA.a)(a.params.fullRedirectUrl) && bv(a.params.fullRedirectUrl) && by({
                            fullRedirectUrl: a.params.fullRedirectUrl,
                            source: "broadcast"
                        })
                    }), (0, N.b)(bo), (0, aM.b)("thread-archived", a => {
                        bp || (bo.invalidateQueries({
                            queryKey: ["archived-threads", a.params.hostId]
                        }), bo.invalidateQueries({
                            queryKey: ["tasks"]
                        }))
                    }), (0, aM.b)("thread-unarchived", a => {
                        bp || (bo.invalidateQueries({
                            queryKey: ["archived-threads", a.params.hostId]
                        }), bo.invalidateQueries({
                            queryKey: ["tasks"]
                        }))
                    })];
                    return () => {
                        for (let b of a) b()
                    }
                }, [bv, bq, bx, bp, bm, bo, v]), (0, r.useEffect)(() => {
                    let a = !1,
                        b = !1,
                        e = v.watch(c => {
                            let {
                                get: e
                            } = c, f = e(aS.d);
                            if (f === aS.b) return;
                            if (!a && a1.a?.owlBrowserCrashCounter != null) {
                                let b = {
                                    stack: [],
                                    error: void 0,
                                    hasError: !1
                                };
                                try {
                                    a = !0, (0, d.a)(b, a1.a.owlBrowserCrashCounter.subscribe(a => f.trackCounter(h.CodexDesktopCrashCounter.CODEX_DESKTOP_CRASH_COUNTER_OWL_BROWSER_PROCESS_CRASHED, a)), !1)
                                } catch (a) {
                                    b.error = a, b.hasError = !0
                                } finally {
                                    (0, d.e)(b)
                                }
                            }
                            if (!b && a1.a?.inAppBrowserIncompleteNavigation != null) {
                                let a = {
                                    stack: [],
                                    error: void 0,
                                    hasError: !1
                                };
                                try {
                                    b = !0, (0, d.a)(a, a1.a.inAppBrowserIncompleteNavigation.subscribe(a => (0, V.a)(v, a)), !1)
                                } catch (b) {
                                    a.error = b, a.hasError = !0
                                } finally {
                                    (0, d.e)(a)
                                }
                            }
                            if (0 === br.current.size && 0 === bt.current.length && 0 === bs.current) return;
                            let g = br.current;
                            for (let [a, b] of(br.current = new Map, g)) f.trackCounter(a, b);
                            let i = bt.current;
                            for (let a of (bt.current = [], i))(0, aS.a)(v, h.CodexInAppBrowserPageLoaded, a);
                            let j = bs.current;
                            bs.current = 0;
                            for (let a = 0; a < j; a++)(0, aS.a)(v, h.CodexLinkClicked, {
                                destination: "in-app-browser",
                                preferenceSource: "os",
                                modifiedClick: !1
                            })
                        }),
                        f = function(a) {
                            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                                c = v.get(aS.d);
                            if (c === aS.b) {
                                let c = br.current.get(a) ?? 0;
                                br.current.set(a, Math.min(c + b, 50));
                                return
                            }
                            c.trackCounter(a, b)
                        },
                        j = (a, b) => {
                            let c = v.get(a9.b);
                            null != c && (0, bf.a)(bo, (0, a8.a)(c, a, b), {
                                cancelRefetch: !1
                            }), (0, bf.a)(bo, {
                                queryKey: L.a
                            }, {
                                cancelRefetch: !1
                            })
                        },
                        l = a => {
                            (async a => {
                                if ("realtime-voice-launch-state-changed" !== a.type) switch (a.type) {
                                    case "open-agent-onboarding":
                                        await async function(a) {
                                            let {
                                                openOrbitOnboarding: b
                                            } = await c.e(19503).then(c.bind(c, "tGzX"));
                                            b(a)
                                        }(v);
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
                                    case "app-update-observed":
                                    case "hosted-git-chunked-output":
                                        if (R === aS.b) {
                                            T.current.push(a);
                                            break
                                        }
                                        bk(v, a);
                                        break;
                                    case "show-chatgpt-rosalind-announcement":
                                        v.set(Y.a, {
                                            source: "activation_deeplink"
                                        });
                                        break;
                                    case "close-terminal-session":
                                        bd.a.closeForConversation((0, bc.a)(v, (0, m.Xe)(a.conversationId)));
                                        break;
                                    case "computer-use-analytics-event":
                                        (0, S.a)(v, a);
                                        break;
                                    case "ephemeral-generation-token-usage":
                                        (0, U.a)(v, a);
                                        break;
                                    case "ambient-suggestion-generation":
                                        (0, Q.b)(v, a);
                                        break;
                                    case "bundled-plugins-changed":
                                        (0, aR.a)(v, a.hostId, a.reason);
                                        break;
                                    case "bundled-plugin-install-state-observed":
                                        (0, aS.a)(v, h.CodexBundledPluginInstallStateObserved, a.observation);
                                        break;
                                    case "browser-sidebar-tab-lifecycle":
                                        (0, az.a)(v, a);
                                        break;
                                    case "toggle-browser-panel":
                                        if (!0 === a.open && null != a.url && ("external_link" === a.initiator || "os_open" === a.initiator)) {
                                            if (v.get(aS.d) === aS.b) {
                                                bs.current = Math.min(bs.current + 1, 50);
                                                break
                                            }(0, aS.a)(v, h.CodexLinkClicked, {
                                                destination: "in-app-browser",
                                                preferenceSource: "os",
                                                modifiedClick: !1
                                            })
                                        }
                                        break;
                                    case "browser-sidebar-page-loaded": {
                                        f(h.CodexInAppBrowserCounter.CODEX_IN_APP_BROWSER_COUNTER_PAGE_LOADED);
                                        let b = (0, W.a)(a, bn, bo);
                                        if (v.get(aS.d) === aS.b) {
                                            bt.current.length < 50 && bt.current.push(b);
                                            break
                                        }(0, aS.a)(v, h.CodexInAppBrowserPageLoaded, b);
                                        break
                                    }
                                    case "browser-sidebar-tab-render-process-gone":
                                        f(h.CodexDesktopCrashCounter.CODEX_DESKTOP_CRASH_COUNTER_IN_APP_BROWSER_TAB_RENDER_PROCESS_GONE);
                                        break;
                                    case "codex-ui-render-process-gone":
                                        f(h.CodexDesktopCrashCounter.CODEX_DESKTOP_CRASH_COUNTER_UI_RENDER_PROCESS_GONE);
                                        break;
                                    case "browser-sidebar-context-menu-action":
                                        (0, aS.a)(v, h.CodexInAppBrowserContextMenuAction, {
                                            action: "quick-annotate" === a.action ? h.CodexInAppBrowserContextMenuActionType.CODEX_IN_APP_BROWSER_CONTEXT_MENU_ACTION_TYPE_QUICK_ANNOTATE_CLICKED : h.CodexInAppBrowserContextMenuActionType.CODEX_IN_APP_BROWSER_CONTEXT_MENU_ACTION_TYPE_ANNOTATE_CLICKED
                                        });
                                        break;
                                    case "visual-content-action-clicked":
                                        (0, X.a)(v, {
                                            action: "save-image" === a.action ? h.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_SAVE_FILE : h.CodexVisualContentAction.CODEX_VISUAL_CONTENT_ACTION_COPY_IMAGE,
                                            surface: h.CodexVisualContentSurface.CODEX_VISUAL_CONTENT_SURFACE_NATIVE_IMAGE_CONTEXT_MENU
                                        });
                                        break;
                                    case "chat-font-settings":
                                        (0, be.a)(document.documentElement, {
                                            "--codex-chat-font-size-override": "number" == typeof a.chatFontSize ? `${a.chatFontSize}px` : void 0,
                                            "--codex-chat-code-font-size-override": "number" == typeof a.chatCodeFontSize ? `${a.chatCodeFontSize}px` : void 0
                                        }), (0, ao.c)(v);
                                        break;
                                    case "workspace-root-options-updated":
                                        bo.invalidateQueries({
                                            queryKey: (0, M.b)()
                                        }), bo.invalidateQueries({
                                            queryKey: (0, bh.a)("git-origins")
                                        });
                                        break;
                                    case "global-state-updated":
                                        for (let b of (a.keys.includes(m.mc.QUEUED_FOLLOW_UPS) && v.query.invalidate(z.b), a.keys.includes(m.mc.LOCAL_PROJECTS) && (bo.invalidateQueries({
                                                queryKey: (0, M.b)()
                                            }), bo.invalidateQueries({
                                                queryKey: (0, bh.a)("git-origins")
                                            })), a.keys))(b === m.mc.BROWSER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED || b === m.mc.COMPUTER_USE_BUNDLED_PLUGIN_AUTO_INSTALL_DISABLED) && bo.invalidateQueries({
                                            queryKey: ["bundled-plugin-auto-install", b]
                                        }), bo.invalidateQueries({
                                            queryKey: (0, bh.a)("get-global-state", {
                                                key: b
                                            })
                                        });
                                        break;
                                    case "thread-project-memberships-updated":
                                        await (0, aJ.a)(v, a.memberships);
                                        break;
                                    case "workspace-root-option-added": {
                                        let b = a.selectedProjectId ?? a.projectId;
                                        null != b && (0, a5.t)(v, b);
                                        break
                                    }
                                    case "tasks-reload-requested":
                                        bp || bo.invalidateQueries({
                                            queryKey: ["tasks"]
                                        });
                                        break;
                                    case "worktrees-reload-requested":
                                        bo.invalidateQueries({
                                            queryKey: (0, bj.a)(a.hostId)
                                        }), bo.invalidateQueries({
                                            queryKey: (0, bj.b)(a.hostId)
                                        });
                                        break;
                                    case "invalidate-thread-search":
                                        (0, al.a)(bo, a.hostId), bo.invalidateQueries({
                                            queryKey: ["archived-threads", a.hostId]
                                        });
                                        break;
                                    case "refetch-review-file-source":
                                        (0, a0.f)({
                                            openFiles: [{
                                                hostId: a.hostId,
                                                path: a.path
                                            }],
                                            queryClient: bo
                                        });
                                        break;
                                    case "review-file-source-changed":
                                        (0, a0.d)(v, {
                                            hostId: a.hostId,
                                            path: a.path
                                        });
                                        break;
                                    case "dynamic-tool-call-requested":
                                        await (0, _.a)({
                                            scope: v,
                                            hostId: a.hostId,
                                            queryClient: bo,
                                            serverRequest: a.serverRequest,
                                            transport: "dynamic"
                                        });
                                        break;
                                    case "dynamic-tools-for-thread-start-requested": {
                                        let b = [],
                                            c = !1;
                                        try {
                                            let d = v.get(a$.d),
                                                e = a.realtimeVoiceDynamicTools ?? d?.dynamicTools,
                                                f = d?.existingThreadVoiceEnabled === !0,
                                                g = bo.getQueryData([...aU.f, a.hostId])?.response.config,
                                                h = a.featureOverrides ?? (a.useDefaultFeatureOverrides ? bz ?? null : null),
                                                i = (e?.appshotsEnabled ?? !1) && (0, a6.b)(v.get, (0, q.a)().screenContextEnabled),
                                                j = i && v.get(au.c, a.hostId),
                                                k = null == g ? g : (0, ak.a)(g),
                                                l = (0, aY.b)(a.hostId, bn.authMethod);
                                            (0, ak.d)(k) && l.push(k?.model_provider ?? ""), "string" == typeof k?.model_catalog_json && l.push(k.model_catalog_json);
                                            let o = a.hostId !== a7.a || bn.isLoading ? void 0 : bo.getQueryData(l);
                                            c = (0, ax.a)(v, a.hostId, !0);
                                            let r = (0, bb.b)(v, "1636133258"),
                                                s = r && (0, m.fi)(a.hostId) && await (0, J.c)(v, a.selectedEnvironmentId),
                                                x = (0, m.fi)(a.hostId) && null != a1.a.cloudPreviews && await a1.a.cloudPreviews.available().catch(() => !1),
                                                y = v.get(ab.d, a.hostId),
                                                z = (0, u.a)({
                                                    userSimulationTool: null,
                                                    cloudPreviewsAvailable: x,
                                                    cloudEnvironmentsEnabled: v.get(H.c),
                                                    managedWorktreesAvailable: null != a1.a.managedWorktrees,
                                                    linkedWorktreeAttachEnabled: v.get(bb.e, "505458"),
                                                    gitWorktreeAttachEnabled: ((0, m.fi)(a.hostId) || !a.hasCloudEnvironment && (null == a.selectedEnvironmentId || "local" === a.selectedEnvironmentId)) && (0, t.a)(v.get(bb.g), a.hostId),
                                                    cloudWorktreesEnabled: r,
                                                    hasWorktreeComputer: s,
                                                    latexAvailable: null != a1.a.latex,
                                                    appServerVersion: y,
                                                    availableHandoffHosts: (0, aj.c)(v),
                                                    authMethod: a.hostId === a7.a ? bn.authMethod : null,
                                                    agentUsageResetEnabled: (0, a6.b)(v.get, m.of.agentUsageResetEnabled),
                                                    crossHostHandoffEnabled: (0, bb.b)(v, "2256010998"),
                                                    activityPhasesEnabled: (0, bb.b)(v, "codex-cot-labels"),
                                                    runningSummaryEnabled: (0, bb.b)(v, "3312776353") && ("all" === a.threadStartKind || v.get(E.a)),
                                                    existingThreadVoiceEnabled: f,
                                                    enabledReasoningEfforts: v.get(aZ.b),
                                                    featureOverrides: h,
                                                    hasConfiguredModelCatalog: (0, n.e)(k),
                                                    confettiAvailable: v.get(Z.a, {
                                                        name: "toys.confetti"
                                                    }).isCapable,
                                                    hostedAutomationsEnabled: c,
                                                    hostId: a.hostId,
                                                    hasCloudEnvironment: a.hasCloudEnvironment,
                                                    requestedHistoryMode: a.requestedHistoryMode,
                                                    includeUltraReasoningEffort: (0, bb.b)(v, "1186680773"),
                                                    isAuthLoading: a.hostId !== a7.a || bn.isLoading,
                                                    isTabAvailable: a => {
                                                        let b = (0, A.d)(a);
                                                        return null != b && (null == b.isAvailableInApp || null != v.get(w.a) && !0 === b.isAvailableInApp(v))
                                                    },
                                                    isCustomModelProvider: (0, ak.d)(k),
                                                    workspaceDependenciesEnabled: (0, p.c)(bo.getQueryData([...aV.a, a.hostId])),
                                                    models: o?.nextCursor == null ? o?.data : void 0,
                                                    modelAvailabilityConfig: v.get(aX.a),
                                                    pagesEnabled: v.get(aP.pagesEnabled$),
                                                    screenAnnotationsAllowed: !1,
                                                    screenSizeForAnnotations: null,
                                                    platform: v.get(aK.d),
                                                    projectToolsEnabled: (0, bb.b)(v, "3672665"),
                                                    pullRequestCheckDiagnosticsEnabled: v.get(I.e),
                                                    queryClient: bo,
                                                    sidebarSectionToolsEnabled: null != v.get(a9.a),
                                                    appshotsAvailable: j,
                                                    appshotsEnabled: i,
                                                    voiceCallEndEnabled: e?.endRealtimeVoiceCallEnabled ?? !1,
                                                    voiceCallTransferEnabled: e?.transferVoiceCallEnabled ?? !1,
                                                    navigateToCodexPageEnabled: e?.navigateToCodexPageEnabled ?? !0,
                                                    mode: a.mode,
                                                    threadStartKind: a.threadStartKind,
                                                    threadSharingEnabled: (0, bb.b)(v, "4157559322")
                                                });
                                            b = Array.isArray(z) ? z : await z
                                        } catch (a) {
                                            bg.a.error("Failed to build dynamic tools for thread start", {
                                                safe: {},
                                                sensitive: {
                                                    error: a
                                                }
                                            })
                                        }
                                        if ("electron" === a.responseTarget) {
                                            bi.g.postMessage({
                                                type: "dynamic-tools-for-thread-start-response",
                                                requestId: a.requestId,
                                                dynamicTools: b,
                                                hostedAutomationsAvailable: c
                                            });
                                            break
                                        }
                                        if (!("respond" in a) || "function" != typeof a.respond) {
                                            bg.a.error("Missing renderer dynamic-tools response callback", {
                                                safe: {},
                                                sensitive: {}
                                            });
                                            break
                                        }
                                        try {
                                            a.respond(b)
                                        } catch (a) {
                                            bg.a.error("Failed to send dynamic tools for thread start", {
                                                safe: {},
                                                sensitive: {
                                                    error: a
                                                }
                                            })
                                        }
                                        break
                                    }
                                    case "thread-title-updated":
                                        if ((0, ah.f)(v, a.hostId, a.conversationId, a.title), null != a.description) {
                                            let b = {
                                                stack: [],
                                                error: void 0,
                                                hasError: !1
                                            };
                                            try {
                                                let c = (0, d.a)(b, await (0, w.b)(v, a.hostId).getCachedConversationMetadata(a.conversationId), !1);
                                                null != c && (0, ai.b)(v, a.conversationId, a.description)
                                            } catch (a) {
                                                b.error = a, b.hasError = !0
                                            } finally {
                                                (0, d.e)(b)
                                            }
                                        }
                                        break;
                                    case m.nc.CHANGED:
                                        bp || (bo.invalidateQueries({
                                            queryKey: (0, D.g)()
                                        }), bo.invalidateQueries({
                                            queryKey: D.d
                                        }));
                                        break;
                                    case "mcp-response":
                                        if (null != a.trace && null != a.receivedAtMs && (0, a_.c)({
                                                attributes: {
                                                    "app_server.method": a.requestMethod ?? "unknown",
                                                    "app_server.response_error": null != a.message.error,
                                                    ...null == a.message.error ? {} : {
                                                        "error.category": "app_server",
                                                        ...(0, m.Jf)(a.message.error.code, a.message.error)
                                                    }
                                                },
                                                failed: null != a.message.error,
                                                name: "renderer.response_receipt",
                                                startTimeMs: a.receivedAtMs,
                                                trace: a.trace
                                            }), !v.get(ab.vb).includes(a.hostId)) {
                                            if (a.hostId === a7.a) throw Error(`No AppServerRequestClient registered for hostId: ${a.hostId}`);
                                            break
                                        }(0, $.a)(v, a);
                                        break;
                                    case "mcp-request-delivery":
                                        v.get(ab.vb).includes(a.hostId) && v.get(ab.c, a.hostId).onDelivery(a.update);
                                        break;
                                    case "codex-app-server-fatal-error":
                                        (0, ab.Gb)(v, {
                                            error: (0, m.Gf)(a.errorMessage),
                                            hostId: a.hostId,
                                            source: "fatal_error_message",
                                            state: "error"
                                        }), null == v.get(aH.a) && (0, aE.a)(v), v.set(aH.a, a);
                                        break;
                                    case "mcp-request":
                                        (0, ah.e)(v, a.hostId, a.request);
                                        break;
                                    case "request-user-input-auto-resolution-changed":
                                        if ("timed-out" === a.change.kind) {
                                            (0, P.c)(v, {
                                                hostId: a.hostId,
                                                requestId: a.change.requestId
                                            }, a.change.timeoutMs);
                                            break
                                        }(0, ae.a)(v, a.hostId, a.change), "removed" === a.change.kind && (0, P.a)(v, {
                                            hostId: a.hostId,
                                            requestId: a.change.requestId
                                        });
                                        break;
                                    case "request-user-input-auto-resolution-snapshot":
                                        for (let {
                                                conversationId: b,
                                                requestId: c,
                                                resolutionState: d
                                            }
                                            of a.pendingRequests)(0, ae.a)(v, a.hostId, {
                                            kind: "updated",
                                            conversationId: b,
                                            requestId: c,
                                            resolutionState: d
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
                                        (0, aD.d)();
                                        break;
                                    case "connector-oauth-callback":
                                        await by({
                                            ...a,
                                            source: "direct"
                                        });
                                        break;
                                    case "run-command":
                                        if ((0, k.u)(a.id)) {
                                            (0, k.l)(a.id);
                                            let b = null == a.originPanel && null == a.originBrowserTab && null == a.keyboardOrigin ? void 0 : {
                                                originPanel: a.originPanel,
                                                originBrowserTab: a.originBrowserTab,
                                                keyboardOrigin: a.keyboardOrigin
                                            };
                                            null == a.keyboardEvent ? (0, aB.d)(a.id, "host_run_command", b) : (0, aB.e)(a.id, new KeyboardEvent("keydown", a.keyboardEvent), b)
                                        }
                                        break;
                                    case "automation-runs-updated":
                                        bp || (bo.invalidateQueries({
                                            queryKey: ["recent-conversations"]
                                        }), bo.invalidateQueries({
                                            queryKey: (0, bh.a)("get-global-state", {
                                                key: m.mc.THREAD_WORKSPACE_ROOT_HINTS
                                            })
                                        }), bo.invalidateQueries({
                                            queryKey: (0, D.g)()
                                        }), bo.invalidateQueries({
                                            queryKey: D.d
                                        }));
                                        break;
                                    case "add-context-file":
                                    case "new-chat":
                                    case "new-chat-with-appshot":
                                    case "new-projectless-task":
                                        bo.invalidateQueries({
                                            queryKey: (0, D.g)()
                                        });
                                        break;
                                    case "clear-active-terminal":
                                        bd.a.clearActive();
                                        break;
                                    case "pinned-threads-updated":
                                        if (bo.invalidateQueries({
                                                queryKey: ["settings-worktree-conversations"]
                                            }), "customSectionHostId" in a) {
                                            let b = [void 0 === a.customSectionIds ? "app-server-custom-sections" : "app-server-custom-section-threads", ...null == a.customSectionHostId ? [] : [a.customSectionHostId]];
                                            for (let c of a.customSectionIds ?? [null]) bo.invalidateQueries({
                                                queryKey: null == c ? b : [...b, c],
                                                refetchType: "all"
                                            })
                                        }
                                        bo.invalidateQueries({
                                            queryKey: L.a,
                                            refetchType: "all"
                                        });
                                        break;
                                    case "window-app-server-active-changed":
                                        a.active && !v.get(x.b) && aO.c.dispatchMessage("request-app-server-state", {
                                            includePendingInputs: !0
                                        }), !a.active && v.get(x.b) && bo.invalidateQueries({
                                            queryKey: ba.a,
                                            refetchType: "none"
                                        }), v.set(x.b, a.active);
                                        break;
                                    case "window-fullscreen-changed":
                                        v.set(an.a, a.isFullScreen);
                                        break;
                                    case "electron-window-focus-changed":
                                        a.isFocused && null != v.get(a9.a) && j();
                                        break;
                                    case "keyboard-modifier-state-changed":
                                        (0, aN.j)(v, {
                                            altKey: a.altKey,
                                            ctrlKey: a.ctrlKey,
                                            metaKey: a.metaKey,
                                            shiftKey: a.shiftKey,
                                            type: "keyup"
                                        });
                                        break;
                                    case "custom-prompts-updated":
                                        v.set(aT.a, a.prompts);
                                        break;
                                    case "electron-periodic-resource-sample":
                                        if (!v.get(aS.c)) break;
                                        (0, aS.a)(v, i.CodexPerformancePeriodicResourceSample, {
                                            clientPlatform: a.clientPlatform,
                                            buildNumber: v.get(K.a).data?.buildNumber ?? void 0,
                                            buildCommitSha: (0, G.a)(),
                                            mainProcessCpuPercent: a.mainProcessCpuPercent,
                                            rendererProcessCpuPercent: a.rendererProcessCpuPercent,
                                            electronProcessWorkingSetKib: (0, g.c)(a.electronProcessWorkingSetKib),
                                            samplerAgeMs: (0, g.c)(a.samplerAgeMs),
                                            inflightTurnCount: (0, g.b)(a.inflightTurnCount),
                                            pendingRequestCount: (0, g.b)(a.pendingRequestCount),
                                            deltaEventsLast30s: (0, g.b)(a.deltaEventsLast30s)
                                        });
                                        break;
                                    case "electron-app-state-snapshot-request": {
                                        let b = v.get(y.b, a.hostId),
                                            d = v.get(w.a),
                                            e = null;
                                        if (null != b && null != d) {
                                            let [f, {
                                                collectFeedbackWorkloadSummary: g
                                            }, h] = await Promise.all([d.collectAppStateSnapshot(a.hostId, a.reason).catch(c => {
                                                if (v.get(w.a) !== d || v.get(y.b, a.hostId) !== b) return null;
                                                throw c
                                            }), c.e(920828).then(c.bind(c, "xftA")), Promise.resolve().then(c.bind(c, "SGXj"))]);
                                            if (v.get(w.a) === d && v.get(y.b, a.hostId) === b && null != (e = f)) {
                                                let b = g(v);
                                                h.addRendererBreadcrumb({
                                                    category: "app_state",
                                                    level: "info",
                                                    message: "renderer_workload_snapshot",
                                                    data: {
                                                        request_id: a.requestId,
                                                        saved_unread_marker_count: b.unread?.savedMarkers ?? null,
                                                        published_catalog_entry_count: b.catalog.published
                                                    }
                                                })
                                            }
                                        }
                                        let f = (0, F.a)(v);
                                        if (null == e && null == f) break;
                                        aO.c.dispatchMessage("electron-app-state-snapshot-response", {
                                            requestId: a.requestId,
                                            fields: e,
                                            workRoute: f
                                        });
                                        break
                                    }
                                    case "codex-app-server-initialized":
                                        a.hostId === a7.a && bo.invalidateQueries({
                                            queryKey: ["gateway-oauth"]
                                        }), v.get(aH.a)?.hostId === a.hostId && v.set(aH.a, null), (0, ab.Hb)(v, {
                                            appServerVersion: a.appServerVersion,
                                            supportsCloudDaybreak: a.supportsCloudDaybreak,
                                            hostId: a.hostId,
                                            installedCodexVersion: a.installedCodexVersion
                                        }), v.get(x.a) && "live" === v.get(ad.b) && (!bp || !0 === v.get(am.b)) && null != a.appServerVersion && (0, o.b)(a.appServerVersion) && (0, w.b)(v, a.hostId).refreshRecentConversations({
                                            mode: a.hostId === a7.a || (0, m.fi)(a.hostId) ? void 0 : "expanded"
                                        }).catch(() => {}), (0, bf.a)(bo, {
                                            queryKey: [...aU.e, a.hostId]
                                        }, {
                                            cancelRefetch: !1
                                        }), (0, aW.b)(v, a.hostId), a.hostId === a7.a && (0, aW.b)(v, void 0), bo.invalidateQueries({
                                            predicate: b => b.meta?.hostId === a.hostId && ["gh-pr-body", "gh-pr-metadata", "gh-pr-reviews", "gh-pr-discussion"].some(a => b.queryKey[1] === a)
                                        }), bo.invalidateQueries({
                                            queryKey: (0, bh.a)("gh-pr-for-branch"),
                                            predicate: b => b.meta?.hostId === a.hostId
                                        }), bo.invalidateQueries({
                                            queryKey: (0, bh.a)("gh-pr-search"),
                                            predicate: b => b.meta?.hostId === a.hostId
                                        });
                                        break;
                                    case "codex-app-server-connection-changed":
                                        "connected" !== a.state || (0, m.fi)(a.hostId) || (bo.invalidateQueries({
                                            queryKey: L.a,
                                            refetchType: "all"
                                        }), bo.invalidateQueries({
                                            queryKey: ["app-server-custom-sections", a.hostId],
                                            refetchType: "all"
                                        })), a.hostId === a7.a && "connected" !== a.state && ay.a.clearBrowserUseState()
                                }
                            })(a).catch(a => {
                                bg.a.error("Invalid message received", {
                                    safe: {},
                                    sensitive: {
                                        error: a
                                    }
                                })
                            })
                        },
                        r = a => {
                            let b = (0, aI.a)(a);
                            if (null != b && !(("mcp-request-delivery" === b.type || "mcp-response" === b.type) && aO.c.hasHandledBufferedMessage(b))) {
                                if ("mcp-notification" === b.type) return void(a => {
                                    if (null != a.trace && null != a.receivedAtMs && (0, a_.c)({
                                            attributes: {
                                                "app_server.method": a.method
                                            },
                                            name: "renderer.notification_receipt",
                                            startTimeMs: a.receivedAtMs,
                                            trace: a.trace
                                        }), (0, ac.a)(v, {
                                            hostId: a.hostId,
                                            method: a.method,
                                            params: a.params
                                        }), "account/gatewayOAuth/changed" === a.method && (0, C.a)(v, a.hostId, a.params), a.hostId === a7.a && "account/updated" === a.method && bo.invalidateQueries({
                                            queryKey: ["gateway-oauth"]
                                        }), "codex/event/skills_update_available" === a.method) return bo.invalidateQueries({
                                        queryKey: ba.a
                                    });
                                    if ("externalAgentConfig/import/completed" === a.method && (0, aG.b)(bo), "thread/section/changed" === a.method) return j(a.hostId, a.params);
                                    if ("app/list/updated" === a.method) {
                                        let {
                                            data: b
                                        } = a.params, c = (0, av.c)(v);
                                        if (null == c) return;
                                        let d = (0, at.d)(a.hostId, c),
                                            e = bo.getQueryState(d);
                                        (e?.data != null || e?.fetchStatus === "fetching") && bo.setQueryData(d, (0, at.i)({
                                            apps: b
                                        })), bo.invalidateQueries({
                                            exact: !0,
                                            queryKey: (0, at.g)(a.hostId, c)
                                        }), (0, bf.a)(bo, {
                                            queryKey: [...aU.e, a.hostId]
                                        }, {
                                            cancelRefetch: !1
                                        });
                                        return
                                    }
                                    if (!(0, m.Th)(a.method)) return;
                                    let b = null == a.trace ? null : (0, a_.f)({
                                        attributes: {
                                            "app_server.method": a.method
                                        },
                                        name: "renderer.notification_apply",
                                        trace: a.trace
                                    });
                                    if ("configWarning" === a.method || "deprecationNotice" === a.method) {
                                        (0, aa.b)(v, a.hostId, {
                                            method: a.method,
                                            params: a.params
                                        }), b?.finish();
                                        return
                                    }
                                    try {
                                        (0, ah.d)(v, a), b?.finish()
                                    } catch (a) {
                                        b?.finish(a)
                                    }
                                })(b);
                                l(b)
                            }
                        },
                        s = aO.c.subscribe("mcp-request-delivery", l),
                        B = aO.c.subscribe("mcp-response", l),
                        N;
                    window.addEventListener("message", r);
                    let O = (0, a3.b)(() => v.get(ab.c, a7.a));
                    (0, ah.h)(v, a7.a);
                    let af = (0, ah.j)(v, bu.current);
                    return () => {
                        if (O?.(), af(), a) {
                            let a = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                (0, d.a)(a, a1.a.owlBrowserCrashCounter?.unsubscribe(), !1)
                            } catch (b) {
                                a.error = b, a.hasError = !0
                            } finally {
                                (0, d.e)(a)
                            }
                        }
                        if (b) {
                            let a = {
                                stack: [],
                                error: void 0,
                                hasError: !1
                            };
                            try {
                                (0, d.a)(a, a1.a.inAppBrowserIncompleteNavigation?.unsubscribe(), !1)
                            } catch (b) {
                                a.error = b, a.hasError = !0
                            } finally {
                                (0, d.e)(a)
                            }
                        }
                        e(), s(), B(), N?.(), window.removeEventListener("message", r)
                    }
                }, [bm, bn, bo, bp, bv, bz, R, v]), (0, e.jsx)(e.Fragment, {
                    children: b
                })
            }
        })
    }),
    IYFr: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("lAQI"),
            f = c("fDv2"),
            g = c("BCjz"),
            h = c("Kwur");
        let i = e.F({
                id: e.L().min(1),
                created_at: f.b({
                    offset: !0
                }),
                updated_at: f.b({
                    offset: !0
                })
            }),
            j = e.w(i, e.m("role", [e.F({
                role: e.z("user"),
                account_user_id: e.L(),
                content: e.F({
                    text: e.L().nullable(),
                    attachments: e.g(e.F({
                        type: e.L()
                    })).optional()
                })
            }), e.F({
                role: e.z("assistant"),
                raw_messages: e.g(e.F({
                    author: e.F({
                        role: e.L()
                    }),
                    content: e.F({
                        content_type: e.L()
                    })
                })),
                attachments: e.g(e.F({
                    type: e.L()
                })).optional()
            }), e.F({
                role: e.z("system"),
                content: e.F({
                    type: e.L()
                }),
                preview: e.L()
            })])),
            k = new WeakMap,
            l = e.F({
                room_id: e.L(),
                account_user_id: e.L(),
                last_read_at: f.b({
                    offset: !0
                }),
                read_cursor_updated_at: f.b({
                    offset: !0
                }).nullish()
            }),
            m = e.F({
                id: e.L().optional(),
                role: e.L(),
                account_user_id: e.L().optional(),
                request_id: e.L().nullish(),
                reply_to: e.F({
                    message_id: e.L()
                }).nullish(),
                task_id: e.L().nullish(),
                message_metadata: e.F({
                    option_picker: e.F({
                        selection: e.E().int().nonnegative()
                    }).nullish()
                }).nullish().catch(void 0)
            }).transform(a => {
                let {
                    message_metadata: b,
                    ...c
                } = a;
                return {
                    ...c,
                    ...b?.option_picker?.selection != null ? {
                        isOptionPickerReply: !0
                    } : {}
                }
            }),
            n = e.F({
                payload: e.F({
                    message: m
                })
            }),
            o = e.m("type", [e.F({
                type: e.z("calpico-room-read-receipt"),
                payload: l
            }), e.F({
                type: e.z("calpico-is-responding-heartbeat"),
                payload: e.F({
                    room_id: e.L(),
                    typing: e.j().default(!0),
                    progress: e.F({
                        request_id: e.L().min(1),
                        revision: e.E().int().nonnegative(),
                        after_reply_message_id: e.L().min(1).nullish(),
                        inline: e.F({
                            text: e.L().min(1).nullish(),
                            emoji: e.L().nullish(),
                            image: e.m("type", [e.F({
                                type: e.z("emoji"),
                                emoji: e.L().min(1)
                            }), e.F({
                                type: e.z("url"),
                                url: e.L().min(1),
                                dark_image_url: e.L().trim().min(1).nullish().catch(void 0)
                            })]).nullish().catch(void 0),
                            deeplink: e.L().nullish()
                        }).transform(a => a.text || a.image || a.emoji ? a : null).nullable()
                    }).optional(),
                    source: e.F({
                        role: e.z("user"),
                        account_user_id: e.L()
                    })
                })
            }), e.F({
                type: e.z("calpico-message-add"),
                payload: e.F({
                    room_id: e.L(),
                    hide_indicator: e.j().nullish().catch(void 0),
                    message: e.A({
                        role: e.L(),
                        id: e.L().optional().catch(void 0),
                        created_at: f.b({
                            offset: !0
                        }).optional().catch(void 0),
                        is_task_update: e.j().optional().catch(void 0),
                        external_message_channel: e.R().optional(),
                        account_user_id: e.L().optional()
                    }).optional()
                })
            }), e.F({
                type: e.z("calpico-message-update"),
                payload: e.F({
                    room_id: e.L(),
                    message_id: e.L()
                })
            }), e.F({
                type: e.z("calpico-message-task-associated"),
                payload: e.F({
                    room_id: e.L(),
                    message_id: e.L(),
                    task_id: e.L()
                })
            }), e.F({
                type: e.z("calpico-room-read"),
                payload: e.F({
                    room_id: e.L(),
                    last_read_at: f.b({
                        offset: !0
                    }).optional().catch(void 0)
                })
            }), e.F({
                type: e.p(["calpico-room-metadata-update", "calpico-room-leave"]),
                payload: e.F({
                    room_id: e.L()
                })
            }), e.F({
                type: e.z("calpico-room-update"),
                payload: e.F({
                    room: e.F({
                        id: e.L(),
                        aeon_id: e.L().nullish()
                    })
                })
            })]);
        c.d(b, {}, {
            a: function(a) {
                let {
                    accountId: b,
                    userId: c,
                    onUpdate: e,
                    onSubscribedChange: f,
                    onReadReceipt: i,
                    onRoomRead: l,
                    onMessageReceived: m,
                    includeMessageBody: p,
                    includeExternal: q,
                    topicId: r,
                    beforeSubscribe: s
                } = a, t = (0, g.c)(r ?? ("all" === q ? "calpico-chatgpt-messaging-all" : "calpico-chatgpt-messaging"), () => h.Request.safeGet("/celsius/ws/user", {
                    additionalHeaders: {
                        [d.ec]: b
                    }
                }).then(a => a.websocket_url), JSON.stringify([b, c])), u = k.get(t) ?? {
                    consumers: 0
                };
                k.set(t, u), u.consumers++;
                let v = !0,
                    w = () => {
                        v && e({
                            type: "resync"
                        })
                    },
                    x = t.onMessage(function(a) {
                        let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (!v) return;
                        let c = o.safeParse(a);
                        if (!c.success) return;
                        let d = c.data;
                        switch (d.type) {
                            case "calpico-room-read-receipt":
                                i?.(d.payload);
                                break;
                            case "calpico-is-responding-heartbeat":
                                if (b && d.payload.progress) break;
                                e({
                                    type: "typing",
                                    roomId: d.payload.room_id,
                                    accountUserId: d.payload.source.account_user_id,
                                    typing: d.payload.typing,
                                    ...d.payload.progress ? {
                                        progress: d.payload.progress
                                    } : {},
                                    receivedAt: Date.now()
                                });
                                break;
                            case "calpico-message-update":
                            case "calpico-message-task-associated":
                                e({
                                    type: "message",
                                    roomId: d.payload.room_id,
                                    messageId: d.payload.message_id,
                                    ..."calpico-message-task-associated" === d.type ? {
                                        taskId: d.payload.task_id
                                    } : {}
                                });
                                break;
                            case "calpico-room-update":
                                e({
                                    type: "room",
                                    roomId: d.payload.room.id,
                                    aeonId: d.payload.room.aeon_id
                                });
                                break;
                            case "calpico-message-add": {
                                if (null != m) {
                                    let c = n.safeParse(a);
                                    c.success && m(d.payload.room_id, c.data.payload.message, b)
                                }
                                let {
                                    message: c,
                                    room_id: f
                                } = d.payload, g = {
                                    type: "message-added",
                                    roomId: f,
                                    ...!b && !0 === d.payload.hide_indicator ? {
                                        hideIndicator: !0
                                    } : {},
                                    ...c?.id && c.created_at && !c.is_task_update && !c.external_message_channel ? {
                                        messageId: c.id,
                                        createdAtMs: Date.parse(c.created_at)
                                    } : {},
                                    accountUserId: c?.role === "user" ? c.account_user_id : void 0
                                };
                                p && j.safeParse(c).success ? e(g, c) : e(g);
                                break
                            }
                            case "calpico-room-read":
                                null != l ? l(d.payload.room_id, d.payload.last_read_at) : e({
                                    type: "room",
                                    roomId: d.payload.room_id
                                });
                                break;
                            case "calpico-room-metadata-update":
                            case "calpico-room-leave":
                                e({
                                    type: "calpico-room-leave" === d.type ? "leave" : "room",
                                    roomId: d.payload.room_id
                                })
                        }
                    }),
                    y = t.onSubscribed(() => {
                        v && (f?.(!0), w())
                    }),
                    z = t.onDisconnect(() => {
                        v && (f?.(!1), e({
                            type: "typing-reset"
                        }))
                    }),
                    A = t.onPotentialMissedMessages(w);
                return 1 === u.consumers && t.subscribe(null == s ? void 0 : {
                    beforeSubscribe: s
                }), () => {
                    v && (v = !1, x(), y(), z(), A(), u.consumers--, 0 === u.consumers && (k.delete(t), t.unsubscribe()))
                }
            }
        })
    }),
    pCJ7: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                let a = document.documentElement.dataset.codexCliVersion;
                if (null == a) throw Error("Missing Codex CLI version in browser document");
                return a
            }
        })
    }),
    OmHE: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(729088).then(c.bind(c, "SH4l"))).BrowserProfileBridge
            },
            b: async function() {
                return (await Promise.all([c.e(431839), c.e(758420)]).then(c.bind(c, "tGn9"))).ChatGptAdsConsentBoundary
            },
            c: async function() {
                return (await c.e(756129).then(c.bind(c, "nlOL"))).hydrateChatGptAds
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(732740)]).then(c.bind(c, "UVfT"))).ChatGptAdsPlacement
            }
        })
    }),
    VLEu: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(20182).then(c.bind(c, "g15d"))).MobileAgeVerificationPage
            },
            b: async function() {
                return (await c.e(744039).then(c.bind(c, "zS2J"))).VerifyAgePage
            }
        })
    }),
    RlRL: (function(a, b, c) {
        let d = (0, (c("Qgfj")).f)({
            submissionFailed: {
                id: "browserSkills.submissionFailed",
                defaultMessage: "Selected skills couldn't be checked. Please try again."
            }
        });
        c.d(b, {}, {
            a: d
        })
    }),
    SIRb: (function(a, b, c) {
        let d;
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(871787)]).then(c.bind(c, "FLsU"))).ReusableWorkflowTipSource
            },
            b: async function() {
                return (await c.e(195959).then(c.bind(c, "j5ZC"))).startSkillCreatorChat
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(452559), c.e(671539)]).then(c.bind(c, "KyAJ"))).SkillDetails
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(652500), c.e(473403), c.e(681767), c.e(589297), c.e(34766)]).then(c.bind(c, "EOSE"))).BrowserSkillEditor
            },
            e: async function() {
                let a = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(585275)]).then(c.bind(c, "V0oe"));
                return d = a.submitWithBrowserSkills, a.BrowserSkillsComposer
            },
            f: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(480171), c.e(725599), c.e(704837), c.e(225720), c.e(452559), c.e(948519), c.e(239955)]).then(c.bind(c, "OeSF"))).BrowserSkillsDirectory
            },
            g: function(a) {
                return d ?? (a ? Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(675898)]).then(c.bind(c, "lsOY")).then(a => d = a.submitWithBrowserSkills) : void 0)
            },
            h: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(919572)]).then(c.bind(c, "Xsss"))).HostedSkillMention
            },
            loadSkillData: async function() {
                return c.e(190944).then(c.bind(c, "jxLz"))
            }
        })
    }),
    iC84: (function(a, b, c) {
        c.d(b, {}, {
            a: "https://openai.com/form/business-hub-feedback/",
            b: "2610731987",
            c: "1466237283",
            d: "2756547663",
            e: "3962601666",
            f: "2778625748",
            g: "751400112",
            h: "2876329631",
            i: "/business-hub",
            j: "3295749912",
            k: "/business-agent-builder-preview/:profileId/:agentId",
            l: "872987069",
            m: "shopify_claim_entry"
        })
    }),
    LKEn: (function(a, b, c) {
        c.d(b, {}, {
            a: async function(a, b, d, e) {
                let [{
                    createBusinessProfileAgentApi: f
                }, {
                    getBusinessProfileAgentPreviewDestination: g
                }] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(481280)]).then(c.bind(c, "HwNs")), c.e(257768).then(c.bind(c, "bEwS"))]);
                e.throwIfAborted();
                let h = f(a)?.getRuntime(a.profileId);
                if (!h) throw Error("Preview unavailable");
                return g(h, b, d, e, window.location.origin)
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(786897)]).then(c.bind(c, "GIaZ"))).logBusinessProfileShareFirstMessage
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(499790), c.e(73336), c.e(340158), c.e(749239), c.e(422926), c.e(637282)]).then(c.bind(c, "qm1k"))).BusinessProfileShareHome
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(499790), c.e(441359), c.e(256116)]).then(c.bind(c, "gB0p"))).BusinessProfileShareReceiverPage
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(4021), c.e(447995)]).then(c.bind(c, "CbZ6"))).BusinessProfilesRoute
            },
            f: async function() {
                let [a] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(4021), c.e(447995)]).then(c.bind(c, "CbZ6")), Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(877700), c.e(963703), c.e(564979), c.e(855376), c.e(839342), c.e(221469), c.e(499790), c.e(953533), c.e(340158), c.e(758787), c.e(4021), c.e(411347), c.e(411749), c.e(692862)]).then(c.bind(c, "NxB8"))]);
                await a.LazyBusinessProfilesPage.prefetch()
            }
        })
    }),
    i4z1: (function(a, b, c) {
        var d = c("iC84");

        function e(a) {
            return new URLSearchParams(a).getAll("view").includes("admin") ? "admin_view" : "owner"
        }

        function f(a) {
            return "products" !== a.get("tab") && "1" !== a.get("create") && "1" !== a.get("creation_session") && !a.has("creation") && !a.has("claim") && !a.has("select") && !a.has("section") && !a.has("flow_id")
        }
        let g = ["about", "contact", "photos", "location", "hours", "delivery", "returns"];

        function h(a) {
            let b = new URLSearchParams(a.search);
            return b.delete("activity"), b.delete("insight"), b.toString()
        }
        c.d(b, {}, {
            a: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "insights",
                    c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "owner",
                    e = `${d.i}/${encodeURIComponent(a)}/${b}`;
                return "admin_view" === c ? `${e}?view=admin` : e
            },
            b: g,
            c: e,
            d: function(a) {
                return "/business-hub" === a || "/business-hub/" === a ? "/business-hub" : a.match(/^(\/business-hub\/[^/]+)\/(?:dashboard|insights|products|members|agent|chats|edit\/[^/]+|verification\/[^/]+)\/?$/)?.[1] ?? null
            },
            e: function(a, b) {
                let c = /^(.*\/business-hub\/[^/]+\/edit)\/([^/]+)\/?$/,
                    d = c.exec(a),
                    e = c.exec(b);
                if (null != d && null != e && d[1] === e[1] && d[2] !== e[2] && g.some(a => a === d[2])) return g.find(a => a === e[2])
            },
            f: function(a, b) {
                return (a === d.i || a === `${d.i}/`) && "invitations" === b.get("tab") && "owner" === e(b) && f(b)
            },
            g: f,
            h: function(a, b) {
                let c = /^(.*\/business-hub\/[^/]+)\/(insights|agent|products|chats)\/?$/,
                    d = c.exec(a.pathname),
                    e = c.exec(b.pathname);
                return null != d && null != e && d[1] === e[1] && d[2] !== e[2] && h(a) === h(b)
            }
        })
    }),
    AoaR: (function(a, b, c) {
        let d = "https://chatgpt.com/college-plan",
            e = [d, `${d}?utm_source=chatgpt.com`];
        c.d(b, {}, {
            a: "/college-plan/c/:conversationId",
            b: "builtin:college-plan",
            c: e,
            d: "plugin_connector_1p_2c637db481848191a0d0f5cdddd214e1",
            e: "/college-plan",
            f: "/college-plan/schools/:schoolId",
            g: "college-plan-entry",
            h: "/college-plan/timeline",
            i: d
        })
    }),
    QyGk: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(222773), c.e(207991), c.e(906567), c.e(843292), c.e(745756), c.e(298771), c.e(405332), c.e(164460), c.e(839342), c.e(221469), c.e(499790), c.e(990214), c.e(529755), c.e(301030), c.e(953533), c.e(517409), c.e(383559), c.e(587936), c.e(862130), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(847740), c.e(176742), c.e(428069), c.e(219246), c.e(835890), c.e(895612), c.e(183204), c.e(337695), c.e(433520), c.e(538505), c.e(991223), c.e(547796), c.e(252408), c.e(851836), c.e(308581), c.e(494082), c.e(697815), c.e(193390), c.e(843205), c.e(782801), c.e(601470)]).then(c.bind(c, "Lyy5"))).CollegePlanChat
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(753405), c.e(353230), c.e(909395), c.e(994191), c.e(898661)]).then(c.bind(c, "d7O0"))).CollegePlanHome
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(753405), c.e(353230), c.e(909395), c.e(994191), c.e(4658)]).then(c.bind(c, "Ppb7"))).SharedCollegePlanPage
            }
        })
    }),
    kh1F: (function(a, b, c) {
        c.r(b);
        var d = c("Oj1v");
        async function e() {
            return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(976419), c.e(104936), c.e(770411), c.e(180401), c.e(545010), c.e(571542)]).then(c.bind(c, "MXBe"))).CreditCheckoutDialog
        }
        async function f() {
            for (var a = arguments.length, b = Array(a), d = 0; d < a; d++) b[d] = arguments[d];
            return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(976419), c.e(104936), c.e(770411), c.e(180401), c.e(545010), c.e(638301)]).then(c.bind(c, "FvOH"))).openCreditCheckoutDialog(...b)
        }
        async function g() {
            return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(661337)]).then(c.bind(c, "sXnT"))).readCreditPurchaseReceipt()
        }
        async function h(a) {
            (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(661337)]).then(c.bind(c, "sXnT"))).clearCreditPurchaseTask(a)
        }
        async function i() {
            return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(976419), c.e(104936), c.e(770411), c.e(180401), c.e(545010), c.e(850135)]).then(c.bind(c, "bwgW"))).openInlineCreditCheckout
        }
        c.d(b, {
            clearCreditPurchaseTask: () => h,
            isActiveInlineCreditCheckout: () => d.a,
            loadCreditCheckoutDialog: () => e,
            openCreditCheckoutDialog: () => f,
            ownsCreditCheckoutLaunch: () => d.b,
            preloadInlineCreditCheckout: () => i,
            readCreditPurchaseReceipt: () => g,
            readRetainedCreditCheckoutLaunch: () => d.c,
            readRetainedInlineCreditCheckoutAnalytics: () => d.d
        })
    }),
    XyTt: (function(a, b, c) {
        async function d() {
            return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(976419), c.e(104936), c.e(770411), c.e(180401), c.e(298831)]).then(c.bind(c, "wFUE"))).CreditPurchasePage
        }
        c.d(b, {}, {
            A: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(132574), c.e(392e3), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(976419), c.e(104936), c.e(770411), c.e(180401), c.e(624024), c.e(691812)]).then(c.bind(c, "mAkj"))).PurchasePage
            },
            B: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(208337)]).then(c.bind(c, "ZaEi"))).openRenewalHeaderAction
            },
            C: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(628922)]).then(c.bind(c, "QKNm"))).ResetPurchasePage
            },
            D: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(9712), c.e(36498), c.e(772893)]).then(c.bind(c, "Ba0x"))).SubscriptionManagementPage
            },
            E: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(938102)]).then(c.bind(c, "XLOU"))).SubscriptionPaymentAnnouncement
            },
            F: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(592146)]).then(c.bind(c, "ytA8"))).SubscriptionPaymentRecoveryEntrypoint
            },
            G: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(422250)]).then(c.bind(c, "InU4"))).SubscriptionPaymentRecoveryReminder
            },
            H: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(778018)]).then(c.bind(c, "jCCd"))).SubscriptionPlatformDialog
            },
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(592146)]).then(c.bind(c, "ytA8"))).AccountRecoveryDialog
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(9712), c.e(36498), c.e(894061)]).then(c.bind(c, "kv3R"))).AddPaymentMethodDialog
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(222796)]).then(c.bind(c, "aK3F"))).AutoTopOffPaymentMethodField
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(405098)]).then(c.bind(c, "FKCB"))).openBeaconSubscriptionRenewal
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(912201)]).then(c.bind(c, "evRn"))).BillingInformationDialog
            },
            f: function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(531002)]).then(c.bind(c, "JeFr"))
            },
            g: async function(a, b, d) {
                let {
                    stripeClientQueryOptions: e
                } = await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(295114)]).then(c.bind(c, "iLQO")), {
                    stripe: f
                } = await a.fetchQuery(e(b, d));
                return f
            },
            h: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(749940), c.e(392e3), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(312997), c.e(167117), c.e(744290)]).then(c.bind(c, "mc1Y"))).BusinessSuccessPage
            },
            i: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(32280)]).then(c.bind(c, "rEO6"))).BusinessSeatPaymentMethodPicker
            },
            j: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(976419), c.e(104936), c.e(770411), c.e(469219)]).then(c.bind(c, "xOCU"))).CheckoutPage
            },
            k: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(749940), c.e(392e3), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(104936), c.e(336632), c.e(312997), c.e(167117), c.e(419327)]).then(c.bind(c, "CBAP"))).CheckoutSuccessPage
            },
            l: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(305574)]).then(c.bind(c, "sK2C"))).CheckoutVerifyPage
            },
            loadBillingBeaconAction: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(405098)]).then(c.bind(c, "FKCB"))).openBillingBeaconAction
            },
            loadWorkspaceCheckoutSupport: async function() {
                let [a, b] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(356719)]).then(c.bind(c, "dT9t")), Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(34097)]).then(c.bind(c, "wkqj"))]);
                return {
                    fetchBillingPricingConfig: a.fetchBillingPricingConfig,
                    logSubscriptionCheckoutNavigation: b.logSubscriptionCheckoutNavigation
                }
            },
            m: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(877700), c.e(650231), c.e(9712), c.e(36498), c.e(976419), c.e(542862), c.e(522312)]).then(c.bind(c, "gxru"))).ConsumerBillingSettings
            },
            n: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(976419), c.e(104936), c.e(770411), c.e(278171)]).then(c.bind(c, "tZuK"))).CreateWorkspacePage
            },
            o: d,
            p: async function() {
                let [a, b] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(9712), c.e(36498), c.e(447236), c.e(861152)]).then(c.bind(c, "Rh1G")), Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(451779)]).then(c.bind(c, "c6ZW"))]);
                return {
                    DelinquentUpgradeDialog: a.DelinquentUpgradeDialog,
                    prepareDelinquentUpgrade: b.prepareDelinquentUpgrade
                }
            },
            q: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(375225)]).then(c.bind(c, "vPrB"))).GiftCardRedemptionPage
            },
            r: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(9712), c.e(36498), c.e(663090), c.e(332236), c.e(894564), c.e(244912)]).then(c.bind(c, "IpWz"))).GoRetentionOffer
            },
            s: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(863505), c.e(738232)]).then(c.bind(c, "cCGL"))).OfferPage
            },
            t: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(132574), c.e(9712), c.e(36498), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(976419), c.e(104936), c.e(770411), c.e(273450)]).then(c.bind(c, "wAmY"))).PaypalPurchasePage
            },
            u: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(938102)]).then(c.bind(c, "XLOU"))).PersonalPaymentRecoverySource
            },
            v: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(482985), c.e(768350)]).then(c.bind(c, "xaC3"))).PlanDowngradeDialog
            },
            w: async function() {
                let a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    b = Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(877700), c.e(392e3), c.e(9712), c.e(245188), c.e(660103), c.e(922049), c.e(534136), c.e(427023), c.e(624024), c.e(89798)]).then(c.bind(c, "q6Eh")),
                    e = Promise.all([b, d()]).then(a => {
                        let [b] = a;
                        return b
                    });
                return (await (a ? Promise.race([b, e]) : e)).PricingCheckoutPreparation
            },
            x: async function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(543362)]).then(c.bind(c, "AZCS"))
            },
            y: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(9712), c.e(36498), c.e(663090), c.e(894564), c.e(349855)]).then(c.bind(c, "jn0n"))).PricingSubscriptionUpdateDialog
            },
            z: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(967847), c.e(245188), c.e(330351), c.e(529604)]).then(c.bind(c, "bqaa"))).PublicPlanSignup
            }
        })
    }),
    Oj1v: (function(a, b, c) {
        let d;

        function e(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                e = d?.(a),
                f = e?.request.creditCheckoutAnalytics,
                g = e?.request.anchorId == null ? "modal" : "inline";
            return null == e || e.visible || e.busy || e.suspended || e.request.accountId !== b.accountId || e.request.userId !== b.userId || f?.checkoutLaunchId == null || !e.recovering && (!e.reusable || null == e.hiddenUntil || c >= e.hiddenUntil || null != e.sessionExpiresAt && c >= e.sessionExpiresAt || e.request.conversationId !== b.conversationId || (e.request.search ?? "") !== (b.search ?? "") || "inline" === g && e.request.anchorId !== b.anchorId) ? null : {
                analytics: f,
                presentation: g
            }
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = d?.(a);
                return null != c && (c.busy || c.suspended || c.visible) && c.request.accountId === b.accountId && c.request.userId === b.userId
            },
            b: function(a, b) {
                return d?.(a)?.request.creditCheckoutAnalytics?.checkoutLaunchId === b
            },
            c: e,
            d: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Date.now(),
                    d = e(a, b, c);
                return d?.presentation === "inline" ? d.analytics : null
            },
            e: function(a) {
                d = a
            }
        })
    }),
    yVzM: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(379526)]).then(c.bind(c, "s1Xg"))).BusinessOwnerOnboardingPage
            }
        })
    }),
    LwKP: (function(a, b, c) {
        let d = "oai-epic-launch-changed",
            e = `
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
      if (changed) window.dispatchEvent(new Event("${d}"));
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
        window.dispatchEvent(new Event("${d}"));
      }
    }
  };
  window.addEventListener("hashchange", () => {
    if (window.location.pathname !== "/epic/launch" || !window.location.hash) return;
    capture();
    window.dispatchEvent(new Event("${d}"));
  });
})();
`;
        c.d(b, {}, {
            a: e,
            b: d,
            c: "/epic/launch"
        })
    }),
    FfNP: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(168653)]).then(c.bind(c, "eJa9"))).EpicLaunchPage
            },
            loadEpicChartIndicator: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(257702)]).then(c.bind(c, "pBZF"))).EpicChartIndicator
            }
        })
    }),
    Clvq: (function(a, b, c) {
        c.d(b, {}, {
            a: "/business-agent-native-preview/:gizmoId",
            b: "/gpts/editor/:gizmoId",
            c: "/gpts/create",
            d: function(a, b) {
                let c = new URLSearchParams(b);
                return null != a && /^g-_?[a-f0-9]{32}$/.test(a) && "1" === c.get("business_agent_preview") && c.has("business_agent_preview_capability_session")
            },
            e: function(a, b) {
                let c = new URLSearchParams(b);
                return null != a && /^g-_?[a-f0-9]{32}$/.test(a) && "1" === c.get("business_agent_preview") && !c.has("business_agent_preview_capability_session")
            }
        })
    }),
    nsfy: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(222773), c.e(207991), c.e(906567), c.e(843292), c.e(745756), c.e(298771), c.e(877940), c.e(164460), c.e(839342), c.e(221469), c.e(990214), c.e(301030), c.e(953533), c.e(517409), c.e(383559), c.e(587936), c.e(862130), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(847740), c.e(176742), c.e(428069), c.e(219246), c.e(835890), c.e(895612), c.e(183204), c.e(337695), c.e(433520), c.e(538505), c.e(991223), c.e(547796), c.e(252408), c.e(851836), c.e(308581), c.e(494082), c.e(193390), c.e(407731), c.e(743105)]).then(c.bind(c, "swKf"))).BusinessAgentNativePreviewPage
            },
            b: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(222773), c.e(207991), c.e(906567), c.e(843292), c.e(745756), c.e(298771), c.e(877940), c.e(164460), c.e(839342), c.e(221469), c.e(990214), c.e(301030), c.e(953533), c.e(517409), c.e(383559), c.e(587936), c.e(862130), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(847740), c.e(176742), c.e(428069), c.e(219246), c.e(835890), c.e(895612), c.e(183204), c.e(337695), c.e(433520), c.e(538505), c.e(547796), c.e(252408), c.e(851836), c.e(308581), c.e(494082), c.e(193390), c.e(407731), c.e(950569)]).then(c.bind(c, "iZZq"))).BusinessAgentPreviewPage
            },
            c: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(222773), c.e(207991), c.e(906567), c.e(843292), c.e(745756), c.e(298771), c.e(877940), c.e(703253), c.e(164460), c.e(839342), c.e(221469), c.e(990214), c.e(301030), c.e(953533), c.e(517409), c.e(383559), c.e(587936), c.e(862130), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(847740), c.e(176742), c.e(428069), c.e(219246), c.e(835890), c.e(895612), c.e(183204), c.e(337695), c.e(433520), c.e(538505), c.e(547796), c.e(252408), c.e(851836), c.e(308581), c.e(494082), c.e(193390), c.e(407731), c.e(139021)]).then(c.bind(c, "YYu1"))).GptBuilderPage
            }
        })
    }),
    dw6y: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(119390).then(c.bind(c, "DiKR"))).VerifyGuardianPage
            }
        })
    }),
    zFPc: (function(a, b, c) {
        c.d(b, {}, {
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
    yTnN: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(839342), c.e(221469), c.e(340158), c.e(384393)]).then(c.bind(c, "xNGo"))).HealthChartContentReference
            },
            b: async function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(479725)]).then(c.bind(c, "iZAV"))
            },
            c: async function() {
                return (await c.e(719072).then(c.bind(c, "h0um"))).HealthOAuthCallbackPage
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(839342), c.e(221469), c.e(73336), c.e(340158), c.e(499787), c.e(833018)]).then(c.bind(c, "pq7F"))).HealthPage
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(839342), c.e(221469), c.e(340158), c.e(616434)]).then(c.bind(c, "W0Ui"))).HealthPostConnectDialog
            },
            f: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(839342), c.e(221469), c.e(340158), c.e(499787), c.e(396543)]).then(c.bind(c, "m25a"))).HealthSidebarController
            }
        })
    }),
    SV75: (function(a, b, c) {
        c.d(b, {}, {
            a: "/images",
            b: "/:lang?/images/prompt/:slug"
        })
    }),
    IAe2: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(177162), c.e(570369), c.e(638442)]).then(c.bind(c, "l5ga"))).ComposerImageTemplates
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(184472)]).then(c.bind(c, "LBvl"))).ImagePromptDialog
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(177162), c.e(73336), c.e(570369), c.e(549371), c.e(462542)]).then(c.bind(c, "FLOS"))).ImagePromptPageRoute
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(177162), c.e(570369), c.e(237787)]).then(c.bind(c, "dnuH"))).ImageSuggestions
            },
            e: async function() {
                return c.e(575645).then(c.bind(c, "pwVX"))
            },
            f: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(177162), c.e(73336), c.e(570369), c.e(549371), c.e(973907)]).then(c.bind(c, "JACH"))).ImagesPage
            },
            g: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(412966)]).then(c.bind(c, "Vkzv"))).OnboardingImageCarousel
            }
        })
    }),
    k2Xj: (function(a, b, c) {
        c.d(b, {}, {
            a: "2477634511",
            b: "plugin_connector_1p_81b578b4840c819198a7957b59e017e5",
            c: "/learning"
        })
    }),
    uoxG: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(703573)]).then(c.bind(c, "blrh"))).handleLearningPluginInstalled
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(259288), c.e(212773), c.e(443606), c.e(408642), c.e(332210), c.e(909395), c.e(543588), c.e(167649), c.e(17983), c.e(910298), c.e(340158), c.e(979420), c.e(739473)]).then(c.bind(c, "AyMt"))).LearningPage
            }
        })
    }),
    Iq4Y: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(206372)]).then(c.bind(c, "JBMR"))
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(810953)]).then(c.bind(c, "iyCe"))).LockedChatsGate
            }
        })
    }),
    TfGh: (function(a, b, c) {
        let d = "/maps",
            e = "/maps/restaurants",
            f = new Set([d, `${d}/`, e, `${e}/`]);
        c.d(b, {}, {
            a: "/local/home",
            b: "/local/restaurants",
            c: f,
            d: e,
            e: "restaurant_save"
        })
    }),
    ic58: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(222773), c.e(207991), c.e(321957), c.e(585419), c.e(906567), c.e(877700), c.e(843292), c.e(353230), c.e(745756), c.e(81461), c.e(298771), c.e(557325), c.e(259288), c.e(212773), c.e(405332), c.e(160592), c.e(164460), c.e(839342), c.e(221469), c.e(499790), c.e(990214), c.e(529755), c.e(301030), c.e(953533), c.e(517409), c.e(383559), c.e(587936), c.e(909395), c.e(862130), c.e(865302), c.e(445705), c.e(452048), c.e(684598), c.e(299268), c.e(847740), c.e(176742), c.e(428069), c.e(219246), c.e(835890), c.e(895612), c.e(183204), c.e(337695), c.e(433520), c.e(543588), c.e(538505), c.e(167649), c.e(17983), c.e(991223), c.e(910298), c.e(547796), c.e(252408), c.e(851836), c.e(16212), c.e(722053), c.e(308581), c.e(494082), c.e(697815), c.e(193390), c.e(843205), c.e(782801), c.e(390269)]).then(c.bind(c, "RfIz"))).MapsPage
            }
        })
    }),
    cU1W: (function(a, b, c) {
        c.d(b, {}, {
            a: "oai/apps/hasSeenMoonshineNuxV2"
        })
    }),
    aSTN: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(952734).then(c.bind(c, "nHMd"))).MemoryExpansionAnnouncementHost
            }
        })
    }),
    uWyY: (function(a, b, c) {
        c.d(b, {}, {
            a: "oai/apps/hasSeenM3mNux"
        })
    }),
    qPzJ: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(52079).then(c.bind(c, "Eghn"))).MemoryMigrationAnnouncementHost
            }
        })
    }),
    XHnB: (function(a, b, c) {
        c.d(b, {}, {
            a: "4201948282",
            b: "/merchants/settings"
        })
    }),
    DZTm: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(256186)]).then(c.bind(c, "jqO9"))).MerchantAgreementForm
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(734039), c.e(380966)]).then(c.bind(c, "HFjV"))).MerchantSettingsPage
            }
        })
    }),
    W5aN: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(480171), c.e(716164), c.e(719647)]).then(c.bind(c, "O9rm"))).MyGptsPage
            }
        })
    }),
    HjIY: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(769717)]).then(c.bind(c, "sToh"))).observeParentalControlNotifications
            },
            b: function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(557472)]).then(c.bind(c, "JALO"))
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(877700), c.e(963703), c.e(172601), c.e(357381), c.e(411547), c.e(603763), c.e(835551), c.e(124695)]).then(c.bind(c, "VNgN"))).ChatGptParentalControlsSettings
            }
        })
    }),
    Nu9C: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(538169).then(c.bind(c, "OXUS"))).PepperOnboardingAnnouncementHost
            },
            b: async function() {
                return (await c.e(26187).then(c.bind(c, "mimB"))).PepperOnboardingBeaconModal
            }
        })
    }),
    IM1j: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(502981), c.e(244970)]).then(c.bind(c, "KoRQ"))).MigrationProgressSidebar
            },
            b: async function() {
                return (await c.e(226558).then(c.bind(c, "TSGs"))).PersonalMigrationAnnouncementHost
            },
            c: async function() {
                return (await c.e(660195).then(c.bind(c, "iEyW"))).getMigrationEligibility
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(877700), c.e(502981), c.e(566340), c.e(125122)]).then(c.bind(c, "BkIm"))).MigrationOnboarding
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(502981), c.e(139822)]).then(c.bind(c, "PRar"))).migrationProgress$
            },
            f: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(877700), c.e(502981), c.e(566340), c.e(393774)]).then(c.bind(c, "Lnge"))).PersonalMigrationSettings
            },
            loadRequiredAccountTransferDialog: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(859110)]).then(c.bind(c, "yhNh"))).RequiredAccountTransferDialog
            }
        })
    }),
    xX9T: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(336632), c.e(232141)]).then(c.bind(c, "YCgC"))).SubscriptionOnboarding
            }
        })
    }),
    EBYk: (function(a, b, c) {
        c.d(b, {}, {
            a: "/plugins-redirect"
        })
    }),
    S5Rc: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(73336), c.e(340158), c.e(766017), c.e(422926), c.e(32958)]).then(c.bind(c, "yTwB"))).PluginRedirectCallbackView
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(93340)]).then(c.bind(c, "pR23"))).PluginRedirectRoute
            },
            c: async function() {
                for (var a = arguments.length, b = Array(a), d = 0; d < a; d++) b[d] = arguments[d];
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(681103)]).then(c.bind(c, "iv1W"))).resumePluginRedirectInstall(...b)
            }
        })
    }),
    Ssdc: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(329446).then(c.bind(c, "boaj"))).PrivacyCenterPage
            }
        })
    }),
    vGRm: (function(a, b, c) {
        c.d(b, {}, {
            a: function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(530201)]).then(c.bind(c, "GJ17"))
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(5493)]).then(c.bind(c, "wWtU"))).CmeHomeEntryPoint
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(877700), c.e(567730)]).then(c.bind(c, "w0km"))).CmePage
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(233043)]).then(c.bind(c, "OmnY"))).CmeProfileSettings
            }
        })
    }),
    rDra: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(486793), c.e(302903)]).then(c.bind(c, "auah"))).RosalindCustomerApplicationRoute
            },
            b: async function() {
                return (await c.e(476466).then(c.bind(c, "Ws9B"))).RosalindCustomerStatusRoute
            }
        })
    }),
    IKJx: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(259288), c.e(212773), c.e(718574), c.e(839342), c.e(221469), c.e(499790), c.e(301030), c.e(953533), c.e(909395), c.e(543588), c.e(167649), c.e(17983), c.e(991223), c.e(910298), c.e(16212), c.e(722053), c.e(175867), c.e(268962), c.e(353089), c.e(654455)]).then(c.bind(c, "ZoUm"))).openProductDetails
            },
            b: async function() {
                return (await c.e(663402).then(c.bind(c, "KQOi"))).prefetchProductDetails
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(259288), c.e(212773), c.e(718574), c.e(839342), c.e(221469), c.e(499790), c.e(301030), c.e(953533), c.e(909395), c.e(543588), c.e(167649), c.e(17983), c.e(991223), c.e(910298), c.e(16212), c.e(722053), c.e(175867), c.e(268962), c.e(353089), c.e(654455)]).then(c.bind(c, "ZoUm"))).openProductEntityDetails
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(259288), c.e(212773), c.e(718574), c.e(839342), c.e(221469), c.e(499790), c.e(301030), c.e(953533), c.e(909395), c.e(543588), c.e(167649), c.e(17983), c.e(991223), c.e(910298), c.e(16212), c.e(722053), c.e(73336), c.e(175867), c.e(268962), c.e(353089), c.e(297518)]).then(c.bind(c, "VlLB"))).SharedProductPage
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(930119)]).then(c.bind(c, "KoTt"))).openShoppingBrowsePanel
            },
            f: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(259288), c.e(212773), c.e(852518), c.e(839342), c.e(221469), c.e(499790), c.e(301030), c.e(953533), c.e(909395), c.e(543588), c.e(167649), c.e(17983), c.e(991223), c.e(910298), c.e(16212), c.e(722053), c.e(175867), c.e(55801)]).then(c.bind(c, "r0Wc"))).ShoppingForYouPage
            },
            g: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(73336), c.e(480219)]).then(c.bind(c, "IYzr"))).ShoppingHomePage
            },
            h: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(268962)]).then(c.bind(c, "ZNDB"))).VirtualTryOnProductAction
            },
            loadWidgetCheckout: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(658599)]).then(c.bind(c, "Gceg"))).openWidgetCheckout
            }
        })
    }),
    eHJT: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(686045), c.e(59948), c.e(519174)]).then(c.bind(c, "WWyW"))).ImageMarkupEditor
            },
            b: async function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(686045), c.e(356600)]).then(c.bind(c, "Vvjl"))
            },
            c: async function() {
                let [{
                    SketchComposerHost: a
                }, {
                    createSketchComposerState: b
                }] = await Promise.all([Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(686045), c.e(59948), c.e(718603)]).then(c.bind(c, "RiwP")), Promise.all([c.e(686045), c.e(640165)]).then(c.bind(c, "Ales"))]);
                return {
                    SketchComposerHost: a,
                    createSketchComposerState: b
                }
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(687092), c.e(868489), c.e(45280)]).then(c.bind(c, "vLdp"))).SketchHomeSuggestions
            }
        })
    }),
    VjfU: (function(a, b, c) {
        c.d(b, {}, {
            a: {
                announcementId: "oai/apps/hasSeenSciWorkspaceDataDisclosure",
                candidateIdPrefix: "sci-workspace-data-disclosure",
                planType: "sci"
            }
        })
    }),
    XTxF: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(90804).then(c.bind(c, "YQis"))).SophiaWorkspaceDisclosureHost
            }
        })
    }),
    bb2S: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(277790).then(c.bind(c, "UFx5"))).StudentCodexCreditsPage
            }
        })
    }),
    vr3L: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(336632), c.e(943543)]).then(c.bind(c, "qOdi"))).StudentPromotionPage
            }
        })
    }),
    nM73: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(47573)]).then(c.bind(c, "yUcg"))).U18GraduationModal
            }
        })
    }),
    Y2O5: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await c.e(96739).then(c.bind(c, "Vfcg"))).VeteransPromotionPage
            }
        })
    }),
    rCek: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                throw Error("Voice debugging requires an internal build")
            }
        })
    }),
    jxTE: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                let {
                    SileroVoiceActivityDetector: a,
                    preloadSileroVoiceActivityDetector: b
                } = await c.e(888539).then(c.bind(c, "nBVM"));
                return await b(), a
            },
            b: async function() {
                return (await c.e(713771).then(c.bind(c, "E7Qk"))).initializeVoiceDsp()
            },
            c: async function(a) {
                let {
                    preloadSileroVoiceActivityDetector: b
                } = await c.e(888539).then(c.bind(c, "nBVM"));
                return b(a)
            }
        })
    }),
    rklP: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(854102), c.e(638310)]).then(c.bind(c, "Zi7y"))).ConfiguredBidiModelSetting
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(407355)]).then(c.bind(c, "ITSF"))).createInstantAudioInput
            },
            c: async function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(89655), c.e(422391), c.e(37051)]).then(c.bind(c, "dxtz"))
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(453025)]).then(c.bind(c, "V3RA"))).waitForOpenDataChannel
            },
            e: async function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(89655), c.e(586788)]).then(c.bind(c, "oWM3"))
            },
            f: async function() {
                return (await c.e(9669).then(c.bind(c, "afoo"))).voiceRequestAuth
            },
            g: async function() {
                return (await Promise.all([c.e(680612), c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(843292), c.e(745756), c.e(839342), c.e(221469), c.e(301030), c.e(953533), c.e(383559), c.e(587936), c.e(445705), c.e(452048), c.e(684598), c.e(219246), c.e(585814), c.e(89655), c.e(422391), c.e(245789)]).then(c.bind(c, "r9tY"))).initializeVoiceSession()
            }
        })
    }),
    X0li: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(725362), c.e(669977), c.e(120496), c.e(606823)]).then(c.bind(c, "NyhQ"))).EnterpriseNonOnboardingSuggestions
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(725362), c.e(669977), c.e(120496), c.e(606823)]).then(c.bind(c, "NyhQ"))).prefetchEnterpriseNonOnboardingSuggestions
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(542862), c.e(152449), c.e(6904)]).then(c.bind(c, "Qpnx"))).EnterpriseExperienceView
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(7074)]).then(c.bind(c, "Mpgv"))).EnterpriseOnboardingPrelude
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(246769), c.e(803652), c.e(725362), c.e(818201), c.e(762354)]).then(c.bind(c, "mmrk"))).WorkDefaultAnnouncementModal
            },
            f: async function() {
                return () => null
            },
            g: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(725362), c.e(946641)]).then(c.bind(c, "Jk3P"))).WorkOnboardingModeToggle
            },
            h: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(725362), c.e(818201), c.e(804394)]).then(c.bind(c, "lq5D"))).WorkOnboardingNuxGate
            },
            i: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(152449), c.e(497790)]).then(c.bind(c, "r7Kh"))).WorkOnboardingPluginWidget
            },
            j: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(725362), c.e(669977), c.e(120496)]).then(c.bind(c, "GfQs"))).WorkOnboardingSuggestions
            },
            k: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(246769), c.e(803652), c.e(725362), c.e(818201), c.e(762354)]).then(c.bind(c, "mmrk"))).WorkReonboardingGate
            },
            l: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(669977), c.e(477842)]).then(c.bind(c, "UgM7"))).WorkTaskTiles
            },
            m: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(803652), c.e(152449), c.e(808749)]).then(c.bind(c, "Jzw8"))).WorkspaceOnboardingPlugins
            }
        })
    }),
    gv9R: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(677006)]).then(c.bind(c, "AkTD"))).PersonalWorkspaceAccessBlockedDialog
            },
            b: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(576122)]).then(c.bind(c, "P9Pp"))).hasUpgradeWorkspaceDiscovery
            },
            c: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(831513)]).then(c.bind(c, "ljdr"))).WorkspaceDiscoveryAnnouncementHost
            },
            d: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(695172)]).then(c.bind(c, "Nw94"))).WorkspaceDiscovery
            },
            e: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(777906)]).then(c.bind(c, "gdY4"))).WorkspaceDiscoveryMenuItem
            },
            loadWorkspaceDiscoveryOpener: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(470409)]).then(c.bind(c, "Sgv4"))).openWorkspaceDiscovery
            }
        })
    }),
    bJs9: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.F({
            isMatchingLoggedInUser: d.z(!0),
            referral: d.F({
                redemption_action: d.L()
            }).nullable().optional()
        });
        c.d(b, {}, {
            a: "workspace-invite-loading",
            b: function(a) {
                let b = e.safeParse(a);
                return b.success && (void 0 === b.data.referral || b.data.referral?.redemption_action.trim().toLowerCase() === "workspace_join")
            }
        })
    }),
    sYUv: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(330351), c.e(693588)]).then(c.bind(c, "EVeX"))).WorkspaceSeatRequestPage
            }
        })
    }),
    NUWk: (function(a, b, c) {
        c.d(b, {}, {
            a: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(388746)]).then(c.bind(c, "LaQr"))).RecommendedOwnerSetup
            },
            b: function() {
                return Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(389166)]).then(c.bind(c, "cS0a"))
            },
            c: async function() {
                for (var a = arguments.length, b = Array(a), d = 0; d < a; d++) b[d] = arguments[d];
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(14459)]).then(c.bind(c, "VQa3"))).measureInvitationSeatSnapshot(...b)
            },
            loadOwnerOnboardingFlow: async function() {
                return (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(235562)]).then(c.bind(c, "idEW"))).OwnerOnboardingFlow
            }
        })
    }),
    r0y7: (function(a, b, c) {
        var d = c("AQaI"),
            e = c.n(d),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("e0Zo"),
            i = c("Dgwo"),
            j = c("AqHb"),
            k = c("Cslg"),
            l = c("IPsH"),
            m = c("OWtl"),
            n = c("KoM4");
        let o = (0, f.u)(m.a, null);
        c.d(b, {}, {
            a: o,
            b: async function(a, b, c) {
                let d = function(a) {
                    let b = a.get(o);
                    if (null == b) return null;
                    let c = a.get(k.f),
                        d = a.get(k.k),
                        e = a.queryClient.getQueryData((0, l.a)({
                            accountId: c,
                            enabled: !0,
                            userId: d
                        }).queryKey)?.profile_details,
                        f = a.queryClient.getQueryData((0, n.b)({
                            accountId: c,
                            userId: d
                        })),
                        g = null == e ? f?.displayName : e.display_name?.trim() || null,
                        h = null == e ? f?.imageUrl ?? null : e.profile_picture_url?.trim() || null;
                    return {
                        ...b,
                        name: g ?? b.email,
                        profilePictureUrl: h
                    }
                }(a);
                if (null == d) return null;
                if ("durable" === (0, j.a)(b)) return c ? d : null;
                try {
                    let c, f, {
                        layers: h
                    } = await (0, i.b)(a, b).sendRequest("config/read", {
                        cwd: null,
                        includeLayers: !0
                    }, {
                        priority: "critical",
                        timeoutMs: 3e4
                    });
                    return (c = g.Td?.senderPrefix, f = h?.findLast(a => "user" === a.name.type && null == a.name.profile), null != c && f?.disabledReason == null && (c.schema.safeParse(e()(f?.config, c.key)).data ?? c.default)) ? d : null
                } catch {
                    return null
                }
            },
            c: function(a, b) {
                let c = a.message.multiUserMessageSender;
                return null == c ? a : {
                    ...a,
                    message: {
                        ...a.message,
                        text: "durable" === (0, j.a)(b) ? (0, h.a)(a.message.text, c) : (0, h.e)(a.message.text, c),
                        context: {
                            ...a.message.context,
                            messageSender: c
                        }
                    }
                }
            }
        })
    }),
    utkD: (function(a, b, c) {
        var d = c("D7Ms"),
            e = c("Q840"),
            f = c("GaA7"),
            g = c("q77y"),
            h = c("OWtl"),
            i = c("rvFo");
        let j = (0, e.q)(h.a, l);

        function k(a) {
            let b = f.a?.nativeApplications?.list;
            return {
                queryKey: ["native-applications", "list", a],
                queryFn: null == b ? d.u : c => {
                    let {
                        signal: d
                    } = c;
                    return (0, g.a)(b(a), d)
                },
                staleTime: i.b.FIVE_MINUTES,
                refetchOnWindowFocus: !1
            }
        }

        function l(a) {
            let b = f.a?.nativeApplications?.getIcon;
            return {
                queryKey: ["native-applications", "icon", a],
                queryFn: "" !== a.appPath && null != b ? c => {
                    let {
                        signal: d
                    } = c;
                    return (0, g.a)(b(a), d)
                } : d.u,
                staleTime: i.b.INFINITE,
                refetchOnWindowFocus: !1
            }
        }(0, e.q)(h.a, k), c.d(b, {}, {
            a: j,
            b: l,
            c: function(a) {
                let b = f.a?.nativeApplications?.getByBundleId;
                return {
                    queryKey: ["native-applications", "by-bundle-id", a],
                    queryFn: null != a && null != b ? c => {
                        let {
                            signal: d
                        } = c;
                        return (0, g.a)(b(a), d)
                    } : d.u,
                    staleTime: i.b.FIVE_MINUTES,
                    refetchOnWindowFocus: !1
                }
            },
            d: k
        })
    }),
    F2d0: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zFPc"),
            g = c("iRMi"),
            h = c("QBk8"),
            i = c("irkb"),
            j = c("Q840"),
            k = c("KvQL"),
            l = c("AMYo"),
            m = c("zd8w"),
            n = c("v7qY"),
            o = c("Wf1j"),
            p = c("rEML"),
            q = c("q7pe"),
            r = c("tl5a"),
            s = c("HsGx"),
            t = c("Ietk"),
            u = c("twmu"),
            v = c("Cslg"),
            w = c("buia"),
            x = c("CPwi"),
            y = c("ZY6E");
        c("vF5L");
        var z = c("kphc"),
            A = c("Bbed"),
            B = c("X6Vn"),
            C = c("SGsN"),
            D = c("wkoW"),
            E = c("P2xa"),
            F = c("vV6o"),
            G = c("gDxK"),
            H = c("yB89"),
            I = c("gPv1"),
            J = c("pQXd"),
            K = c("nlNF");
        c("RY92");
        var L = c("qMca");
        c("hZSj");
        var M = c("c5Fx"),
            N = c("zm5q"),
            O = c("DipL"),
            P = c("yGJW"),
            Q = c("Q4dB"),
            R = c("GaA7"),
            S = c("OWtl"),
            T = c("kl6F"),
            U = c("KHWn"),
            V = c("gqQv"),
            W = c("TlLQ"),
            X = c("wLYU"),
            Y = c("fnPc"),
            Z = c("SOLA"),
            $ = c("kfGJ"),
            _ = c("NP6F"),
            aa = c("d6Ff"),
            ab = c("YHhr"),
            ac = c("Bc5r"),
            ad = c("CSxw"),
            ae = c("TL6G");
        let af = (0, A.a)(async () => (await c.e(17871).then(c.bind(c, "TFU0"))).BusinessCheckoutSwitchWorkspaceDialog, {
            propagateLoadError: !0
        });
        async function ag(a) {
            await Promise.all([(0, t.g)("accounts-check"), (0, t.g)("account-info")]), await Promise.allSettled([a.invalidateQueries({
                queryKey: ["accounts", "check"],
                refetchType: "all"
            }), a.invalidateQueries({
                queryKey: u.a,
                refetchType: "all"
            }), a.invalidateQueries({
                queryKey: ["vscode", "account-info"],
                refetchType: "all"
            }), a.invalidateQueries({
                queryKey: [...Q.a, $.a],
                refetchType: "all"
            }), a.invalidateQueries({
                queryKey: ["rate-limit-status"],
                refetchType: "all"
            }), a.invalidateQueries({
                queryKey: ["usage-settings", "auto-top-up"],
                refetchType: "all"
            })])
        }

        function ah() {
            return null
        }

        function ai() {}

        function aj() {
            let a, b, c, d = (0, e.c)(16),
                f = (0, j.y)(S.a),
                g = (0, o.a)(),
                h = (0, p.Z)(),
                k = (0, p.ab)(),
                l = (0, i.c)();
            return d[0] !== k || d[1] !== l || d[2] !== f ? (a = a => {
                (0, n.flushSync)(() => {
                    k("/", {
                        replace: !0
                    })
                }), (0, B.f)(f, af, {
                    workspaceId: a.workspaceId
                }), ag(l)
            }, d[0] = k, d[1] = l, d[2] = f, d[3] = a) : a = d[3], (0, ae.d)("business-checkout-complete", a), d[4] !== g || d[5] !== h.state || d[6] !== k || d[7] !== l || d[8] !== f ? (b = a => {
                let b = (0, H.a)(h.state);
                if ("redeemed" === a.outcome && b?.accountId != null) {
                    let a = f.query.getData(I.c);
                    a?.account_id === b.accountId && (0, G.a)(f, a, "codex_weekly");
                    let c = b.conversationId,
                        d = null == c ? null : f.get(r.db, c);
                    null != c && null != d && (0, H.c)(f, {
                        accountId: b.accountId,
                        conversationId: c,
                        turnId: d
                    })
                }
                switch ((0, n.flushSync)(() => {
                        k(b?.returnTo ?? "/", {
                            replace: !0
                        })
                    }), a.outcome) {
                    case "redeemed":
                        f.get(C.f).success(g.formatMessage({
                            id: "checkout.rateLimitReset.success",
                            defaultMessage: "Usage limits reset"
                        })), ag(l);
                        break;
                    case "pending":
                        f.get(C.f).success(g.formatMessage({
                            id: "checkout.rateLimitReset.pending",
                            defaultMessage: "Purchase successful"
                        })), ag(l);
                        break;
                    case "payment_failed":
                        f.get(C.f).danger(g.formatMessage({
                            id: "checkout.rateLimitReset.paymentFailure",
                            defaultMessage: "Payment failed. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "checkout.rateLimitReset.paymentFailure"
                            }
                        });
                        break;
                    case "other_error":
                        f.get(C.f).danger(g.formatMessage({
                            id: "checkout.rateLimitReset.failure",
                            defaultMessage: "We couldn\u2019t complete your purchase. Please try again."
                        }), {
                            errorAnalytics: {
                                toastId: "checkout.rateLimitReset.failure"
                            }
                        })
                }
            }, d[4] = g, d[5] = h.state, d[6] = k, d[7] = l, d[8] = f, d[9] = b) : b = d[9], (0, ae.d)("rate-limit-reset-checkout-complete", b), d[10] !== g || d[11] !== h || d[12] !== k || d[13] !== l || d[14] !== f ? (c = () => {
                (0, n.flushSync)(() => {
                    k(ak(h), {
                        replace: !0
                    })
                }), f.get(C.f).success(g.formatMessage({
                    id: "checkout.creditPurchase.success",
                    defaultMessage: "Credits added"
                })), ag(l)
            }, d[10] = g, d[11] = h, d[12] = k, d[13] = l, d[14] = f, d[15] = c) : c = d[15], (0, ae.d)("credit-purchase-checkout-complete", c), null
        }

        function ak(a) {
            let b = a.state;
            return a.pathname === F.c && b?.workCreditCheckout === !0 ? b.returnPath ?? "/" : "/"
        }
        c.d(b, {}, {
            a: function() {
                let a, b, t, u, A, B, G, H, I, Q, af, al, am, an, ao, ap, aq, ar = (0, e.c)(51),
                    as = (0, j.y)(S.a),
                    at = (0, o.a)(),
                    au = (0, p.Z)(),
                    av = (0, p.ab)(),
                    aw = (0, m.useContext)(s.a),
                    ax = (0, ac.d)(),
                    ay = (0, j.z)(Z.c).size > 0,
                    az = (0, i.c)();
                ar[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, ad.b)(), ar[0] = a) : a = ar[0];
                let aA = a;
                ar[1] !== as ? (b = a => {
                    (0, P.a)(as, g.CodexThreadOpened, {
                        kind: a
                    })
                }, ar[1] = as, ar[2] = b) : b = ar[2];
                let aB = (0, m.useEffectEvent)(b),
                    aC = (0, m.useRef)(null),
                    aD = (0, m.useRef)(0),
                    aE = (0, p._)("/local/:conversationId"),
                    aF = aE?.params.conversationId ?? null;
                ar[3] !== aF ? (t = null != aF && (0, k.$h)(aF) ? aF : null, ar[3] = aF, ar[4] = t) : t = ar[4];
                let aG = t,
                    aH = (0, j.x)(T.B, aG);
                ar[5] !== aH || ar[6] !== aG || ar[7] !== aF ? (u = aH, null == aG && null != aF && (u = (0, k.Xe)(aF)), ar[5] = aH, ar[6] = aG, ar[7] = aF, ar[8] = u) : u = ar[8], ar[9] !== au.search ? (A = new URLSearchParams(au.search).get("hostId"), ar[9] = au.search, ar[10] = A) : A = ar[10];
                let aI = A;
                ar[11] !== u || ar[12] !== aI ? (B = () => {
                    null != u && null != aI && R.a.sshConnections?.recoverAuthentication(aI).catch(ai)
                }, ar[11] = u, ar[12] = aI, ar[13] = B) : B = ar[13], ar[14] !== u || ar[15] !== aI ? (G = [u, aI], ar[14] = u, ar[15] = aI, ar[16] = G) : G = ar[16], (0, m.useEffect)(B, G), ar[17] !== u || ar[18] !== aG || ar[19] !== aB ? (H = () => {
                    let a = null,
                        b = null;
                    if (null != u ? (a = "local", b = `local:${u}`) : null != aG && (a = "pending_worktree", b = `pending_worktree:${aG}`), null == b || null == a) {
                        aC.current = null;
                        return
                    }
                    aC.current !== b && (aC.current = b, aB(a))
                }, ar[17] = u, ar[18] = aG, ar[19] = aB, ar[20] = H) : H = ar[20], ar[21] !== u || ar[22] !== aG ? (I = [u, aG], ar[21] = u, ar[22] = aG, ar[23] = I) : I = ar[23], (0, m.useEffect)(H, I), ar[24] !== u || ar[25] !== au || ar[26] !== av || ar[27] !== ax || ar[28] !== aw || ar[29] !== as ? (Q = async function(a) {
                    let b = aD.current = aD.current + 1,
                        d = a.path;
                    if (aA && !(0, ad.c)(d)) return;
                    let e = new URL(d, window.location.href);
                    if (d === `${f.c}?flow=onboarding` && null != (0, p.L)(f.c, au.pathname)) {
                        let a = new URLSearchParams(au.search).get("tab");
                        null != a && (e.searchParams.set("tab", a), d = `${e.pathname}${e.search}`)
                    }
                    let g = (0, p.L)(U.a, e.pathname);
                    if ("/welcome" === au.pathname && null != (0, U.d)(g?.params.browserFamily) || "/cloud-environments/new" === d && au.pathname === d && "" === au.search && "" === au.hash || (0, M.c)(a)) return;
                    if ("deep-link" === a.pageOpenReferrer && (0, P.a)(as, h.CodexSpacesPageOpenRequested, {
                            referrer: h.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_DEEP_LINK
                        }), null != a.threadIdToLocate) {
                        let b = m(),
                            c = await (0, q.a)({
                                scope: as,
                                threadId: a.threadIdToLocate,
                                preferredHostId: e.searchParams.get("hostId") ?? $.a
                            }).catch(ah);
                        if (!b()) return;
                        null != c && (c.hostId === $.a ? e.searchParams.delete("hostId") : e.searchParams.set("hostId", c.hostId), d = `${e.pathname}${e.search}${e.hash}`)
                    }
                    let i = null == a.notificationThread ? null : {
                        hostId: a.notificationThread.hostId,
                        threadId: (0, k.Xe)(a.notificationThread.conversationId)
                    };
                    if (null != i) {
                        let {
                            hostId: a,
                            threadId: b
                        } = i;
                        (e.pathname !== (0, k.he)(b) || u !== b || ((0, r.w)(as.get, b) ?? $.a) !== a) && (0, O.b)(as, b, a)
                    }
                    if ("/" === e.pathname) {
                        let b = k.Ee.safeParse(a.state);
                        b.success && null != b.data.codexAppMode && (0, z.m)(as, b.data.codexAppMode)
                    }
                    if ((k.fj.safeParse(a.state).data?.entrypoint === "settings" || "/settings/teams" === e.pathname || e.pathname.startsWith("/settings/teams/")) && (0, Y.b)(as, $.a), "/settings/local-environments" === e.pathname || e.pathname === W.a) {
                        let b = (0, W.d)(e.searchParams, a.state);
                        "personal-vault" === e.searchParams.get("view") ? (0, Y.b)(as, $.a) : null != b && (0, Y.b)(as, b.hostId)
                    }
                    if (!0 === a.persistForReload) {
                        let a = new URL(window.location.href);
                        a.searchParams.set("initialRoute", d), window.history.replaceState(window.history.state, "", a.toString())
                    }
                    let j = () => {
                        if (null != i && e.pathname === (0, k.he)(i.threadId) && (0, y.a)({
                                scope: as,
                                navigate: av,
                                location: au,
                                thread: i,
                                navigationState: a.state
                            })) return;
                        if (e.pathname === l.a && "/login" !== au.pathname && "/welcome" !== au.pathname && "/select-workspace" !== au.pathname) {
                            let b = (0, l.d)(e.searchParams),
                                d = as.get(v.f),
                                f = as.get(v.k);
                            if (null != b && null != d && null != f) return void async function(a, b, d, e, f) {
                                try {
                                    let {
                                        browserHandoffOrbit$: g,
                                        getBrowserHandoffLocation: h
                                    } = await Promise.resolve().then(c.bind(c, "LVz3"));
                                    if (!f()) return;
                                    let i = await a.query.getOrFetch(g, d);
                                    if (!f()) return;
                                    let j = null == i ? null : h(i, d, crypto.randomUUID());
                                    b(j?.pathname ?? e.path, {
                                        replace: e.replace,
                                        state: j?.state
                                    })
                                } catch {
                                    f() && b(e.path, {
                                        replace: e.replace
                                    })
                                }
                            }(as, av, b, a, m())
                        }
                        let b = a.threadSelection;
                        if (null != b) return void(0, ab.b)(as, "local" === b.kind ? (0, aa.a)((0, k.Xe)(b.conversationId)) : (0, aa.b)(b.taskId), ax, av, "local" === b.kind ? b.hostId : void 0);
                        let f = "/cloud-environments/new" === d ? (0, E.a)(as, au) : void 0,
                            g = {
                                replace: null == f && a.replace,
                                state: "/cloud-environments/new" === d ? f : a.state
                            };
                        if (null != i && aw?.active.destinationId === _.a.space.destinationId && null != (0, p.L)("/local/:conversationId", e.pathname) && !as.get(L.c, i)) {
                            let a = _.a.home.destinationId,
                                b = aw.roots.find(b => b.destinationId === a) ?? aw.createRoot(a);
                            aw.visit({
                                target: b,
                                append: !0
                            }, () => av(d, g));
                            return
                        }
                        av(d, g)
                    };

                    function m() {
                        let a = as.get(K.c)?.key,
                            c = as.get(v.f),
                            d = as.get(v.k);
                        return () => aD.current === b && as.get(K.c)?.key === a && as.get(v.f) === c && as.get(v.k) === d
                    }(0, N.a)("navigation.hostFlushSync", () => (0, n.flushSync)(j))
                }, ar[24] = u, ar[25] = au, ar[26] = av, ar[27] = ax, ar[28] = aw, ar[29] = as, ar[30] = Q) : Q = ar[30];
                let aJ = Q;
                return ar[31] !== aJ ? (af = a => {
                    aJ(a)
                }, ar[31] = aJ, ar[32] = af) : af = ar[32], (0, ae.d)("navigate-to-route", af), ar[33] !== ay || ar[34] !== at || ar[35] !== au || ar[36] !== av || ar[37] !== as ? (al = () => {
                    if (!aA && !(0, X.a)(as, -1)) {
                        if (au.pathname === F.c || au.pathname === J.a) return void(0, n.flushSync)(() => {
                            av(ak(au), {
                                replace: !0
                            })
                        });
                        (0, n.flushSync)(() => {
                            av(-1)
                        })
                    }
                }, ar[33] = ay, ar[34] = at, ar[35] = au, ar[36] = av, ar[37] = as, ar[38] = al) : al = ar[38], (0, ae.d)("navigate-back", al), ar[39] !== av || ar[40] !== as ? (am = () => {
                    aA || (0, X.a)(as, 1) || (0, n.flushSync)(() => {
                        av(1)
                    })
                }, ar[39] = av, ar[40] = as, ar[41] = am) : am = ar[41], (0, ae.d)("navigate-forward", am), ar[42] !== at || ar[43] !== az || ar[44] !== as ? (an = a => {
                    let b = (0, V.d)(a.planType);
                    null != b && (as.get(C.f).success(at.formatMessage({
                        id: "checkout.personal.upgradeSuccess",
                        defaultMessage: "Upgraded to {plan}"
                    }, {
                        plan: b
                    })), ag(az))
                }, ar[42] = at, ar[43] = az, ar[44] = as, ar[45] = an) : an = ar[45], (0, ae.d)("personal-checkout-complete", an), ar[46] === Symbol.for("react.memo_cache_sentinel") ? (ao = !aA && (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(D.a, {}), (0, d.jsx)(d.Fragment, {
                        children: (0, d.jsx)(w.a, {})
                    }), (0, d.jsx)(x.a, {})]
                }), ar[46] = ao) : ao = ar[46], ar[47] !== au.pathname ? (ap = au.pathname === F.c && (0, d.jsx)(aj, {}), ar[47] = au.pathname, ar[48] = ap) : ap = ar[48], ar[49] !== ap ? (aq = (0, d.jsxs)(d.Fragment, {
                    children: [ao, ap]
                }), ar[49] = ap, ar[50] = aq) : aq = ar[50], aq
            }
        })
    }),
    TbYL: (function(a, b, c) {
        c.d(b, {
            a: () => t
        });
        var d = c("QosV"),
            e = c("iRMi"),
            f = c("Q840"),
            g = c("KvQL"),
            h = c("zd8w"),
            i = c("rEML"),
            j = c("YH6k"),
            k = c("E8Sp"),
            l = c("HsGx"),
            m = c("xm2W"),
            n = c("u0X2"),
            o = c("Wv1R"),
            p = c("yGJW"),
            q = c("OWtl"),
            r = c("vQRL"),
            s = c("nlNF");

        function t() {
            let a, b, c, t = (0, d.c)(9),
                u = (0, f.y)(q.a),
                v = (0, i.Z)(),
                w = (0, i.cb)();
            t[0] !== v ? (a = {
                entries: [v],
                index: 0,
                popDelta: 0
            }, t[0] = v, t[1] = a) : a = t[1];
            let x = (0, h.useRef)(a),
                y = (0, l.c)(),
                z = y?.history,
                A = y?.active.id;
            return t[2] !== v || t[3] !== w || t[4] !== u || t[5] !== z || t[6] !== A ? (b = () => {
                let a = x.current,
                    b = z ?? (a.entries[a.index]?.key === v.key ? a : function(a, b, c) {
                        let {
                            entries: d,
                            index: e
                        } = a;
                        if (c === i.a.Pop) {
                            let a = d.findIndex(a => a.key === b.key);
                            if (-1 !== a) return {
                                entries: d,
                                index: a,
                                popDelta: a - e
                            }
                        }
                        let f = c === i.a.Pop || c === i.a.Replace && d[e]?.hasUnknownPredecessor ? {
                            ...b,
                            hasUnknownPredecessor: !0
                        } : b;
                        if (c === i.a.Replace) {
                            let a = d.slice();
                            return a[e] = f, {
                                entries: a,
                                index: e,
                                popDelta: 0
                            }
                        }
                        let g = d.slice(0, e + 1);
                        return g.push(f), {
                            entries: g,
                            index: g.length - 1,
                            popDelta: 0
                        }
                    }(a, v, w));
                x.current = b, (0, m.c)(v.pathname + v.search);
                let c = u.get(s.c);
                if ((0, r.e)(v, null == c), (0, f.s)(u, () => {
                        null != c && c.key !== v.key && (w !== i.a.Replace || v.state?.initialNavigationFromKey !== c.key && (0, i.A)(c) !== (0, i.A)(v)) && u.set(s.i, !1), u.set(k.a, "main" === A ? void 0 : A), u.set(s.c, v);
                        let a = u.get(j.b);
                        null != a && (a.originKey !== v.key || a.originRootId !== A) && (0, j.a)(u, a), u.set(s.d, w), u.set(s.k, b), c?.key !== v.key && u.set(s.e, u.get(s.e) + 1), u.set(s.m, b.entries[b.index - 1]?.key ?? null), u.set(s.l, b.entries[b.index + 1] ?? null), u.set(s.a, b.index > 0), u.set(s.b, b.index < b.entries.length - 1)
                    }), c?.key !== v.key) {
                    let a = (0, i.L)(g.id, v.pathname) ?? (0, i.L)("/plugins/:pluginId/app/:toolName", v.pathname);
                    if (a?.params.pluginId != null) {
                        let a = g.fj.safeParse(v.state).data;
                        (0, p.a)(u, e.CodexMcpExtensionAction, {
                            connectorId: a?.sourceMcpApp?.appId,
                            feature: "deep_link",
                            action: "requested"
                        })
                    } else if (c?.pathname !== v.pathname && (0, i.L)(g.Vc, v.pathname)) {
                        let a = u.get(o.e)?.entries?.find(a => a.path === v.pathname);
                        (0, p.a)(u, e.CodexMcpExtensionAction, {
                            ...null == a ? {} : (0, n.b)(u, a),
                            feature: "global_entrypoint",
                            action: "requested"
                        })
                    }
                }
            }, c = [v, w, u, z, A], t[2] = v, t[3] = w, t[4] = u, t[5] = z, t[6] = A, t[7] = b, t[8] = c) : (b = t[7], c = t[8]), (0, h.useLayoutEffect)(b, c), null
        }
    }),
    nlNF: (function(a, b, c) {
        var d = c("Q840"),
            e = c("rEML"),
            f = c("E8Sp"),
            g = c("vV6o"),
            h = c("pQXd"),
            i = c("OWtl");
        let j = (0, d.u)(i.a, () => null),
            k = (0, d.u)(i.a, !0),
            l = (0, d.u)(i.a, !1),
            m = (0, d.u)(i.a, !1),
            n = (0, d.u)(i.a, () => null),
            o = (0, d.u)(i.a, null),
            p = (0, d.u)(i.a, () => e.a.Pop),
            q = (0, d.u)(i.a, 0),
            r = (0, d.u)(i.a, () => null);
        (0, d.c)(i.a, a => {
            let {
                get: b
            } = a, c = b(o);
            if (null != c) return {
                key: c.key,
                backKey: c.pathname === g.c || c.pathname === h.a ? null : b(n),
                forwardKey: b(r)?.key ?? null
            }
        });
        let s = (0, d.u)(i.a, null, {
            isEqual: (a, b) => a === b || null != a && null != b && a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height
        });
        c.d(b, {}, {
            a: l,
            b: m,
            c: o,
            d: p,
            e: q,
            f: function(a) {
                let {
                    x: b,
                    y: c,
                    width: d,
                    height: e
                } = a.getBoundingClientRect();
                return d > 0 && e > 0 ? {
                    x: b,
                    y: c,
                    width: d,
                    height: e
                } : null
            },
            g: s,
            h: function(a) {
                let b = a.get(o);
                return a.get(f.a) === a.value.shellRootId && b?.pathname === a.value.pathname && b.search === (a.value.search ?? "")
            },
            i: k,
            j: function(a, b, c) {
                a.get(n) === c.key ? b(-1) : b(c, {
                    state: c.state,
                    replace: !0
                })
            },
            k: j,
            l: r,
            m: n
        })
    }),
    k30c: (function(a, b, c) {
        var d = c("QosV"),
            e = c("Q840"),
            f = c("v7qY"),
            g = c("Wf1j"),
            h = c("OFP1"),
            i = c("M0Ez"),
            j = c("EFj1"),
            k = c("jEN2"),
            l = c("kphc"),
            m = c("Q8aV"),
            n = c("TL6G"),
            o = c("OWtl"),
            p = c("WFY2");
        c.d(b, {}, {
            a: function() {
                let a, b, c, q, r, s, t, u, v, w, x = (0, d.c)(19),
                    y = (0, e.y)(o.a),
                    z = (0, g.a)(),
                    A = (0, m.c)();
                return x[0] !== A ? (a = () => A({
                    selectChat: !0
                }), x[0] = A, x[1] = a) : a = x[1], x[2] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                    priority: "fallback"
                }, x[2] = b) : b = x[2], (0, j.a)("newTask", a, b), x[3] !== A ? (c = a => {
                    if (null == a.chatGptPrefill) return void A();
                    let b = a.chatGptPrefill.systemHints.filter(i.m);
                    A(0 === b.length ? void 0 : {
                        ...0 === a.chatGptPrefill.text.length ? {} : {
                            prefillPrompt: a.chatGptPrefill.text
                        },
                        prefillChatGptSystemHints: b
                    })
                }, q = [A], x[3] = A, x[4] = c, x[5] = q) : (c = x[4], q = x[5]), (0, n.d)("new-chat", c, q), x[6] !== y || x[7] !== A ? (r = a => {
                    let b = y.get(h.v);
                    if (b || y.get(h.j)) {
                        if ("new" === a.destination || !(0, k.k)("capture-screenshot-selection")) {
                            let a = !1;
                            if ((0, f.flushSync)(() => {
                                    A({
                                        codexAppMode: b ? "work" : "codex",
                                        onNavigate: () => {
                                            b && (0, l.n)(y, "work"), a = !0
                                        }
                                    })
                                }), !a) return
                        }
                        n.c.dispatchHostMessage({
                            type: "capture-screenshot-selection",
                            destination: a.destination
                        })
                    }
                }, s = [y, A], x[6] = y, x[7] = A, x[8] = r, x[9] = s) : (r = x[8], s = x[9]), (0, n.d)("screenshot-selection-shortcut", r, s), x[10] !== y || x[11] !== A ? (t = () => {
                    let a = y.get(h.w).status;
                    "allowed" !== a ? p.a.info("Appshot new chat shortcut skipped", {
                        safe: {
                            workModeAccessStatus: a
                        }
                    }) : ((0, f.flushSync)(() => {
                        (0, l.n)(y, "work"), A()
                    }), p.a.info("Appshot new chat shortcut forwarding"), n.c.dispatchHostMessage({
                        type: "appshot-shortcut"
                    }))
                }, u = [y, A], x[10] = y, x[11] = A, x[12] = t, x[13] = u) : (t = x[12], u = x[13]), (0, n.d)("new-chat-with-appshot", t, u), x[14] !== z || x[15] !== y || x[16] !== A ? (v = a => {
                    var b;
                    let c, d, e = null != a.files && a.files.length > 0,
                        f = "install-skill" === a.prefillPromptKind;
                    e && !f && "chat" === y.get(l.e) ? A({
                        activeProject: null,
                        prefillAddedFiles: a.files
                    }) : (y.get(h.j) || e && !f && "allowed" === y.get(h.w).status) && A({
                        ...(c = {}, d = !1, null != (b = a).files && b.files.length > 0 && (c.prefillAddedFiles = b.files, d = !0), null != b.previewFiles && b.previewFiles.length > 0 && (c.prefillArtifactPreviewFiles = b.previewFiles, d = !0), d ? c : void 0),
                        ...f ? {
                            prefillPrompt: z.formatMessage({
                                id: "composer.skillFileInstallPrompt",
                                defaultMessage: "Install this skill"
                            })
                        } : {},
                        activeProject: null
                    })
                }, w = [z, y, A], x[14] = z, x[15] = y, x[16] = A, x[17] = v, x[18] = w) : (v = x[17], w = x[18]), (0, n.d)("new-projectless-task", v, w), null
            }
        })
    })
};