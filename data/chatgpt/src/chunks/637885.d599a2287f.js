export const __rspack_esm_ids = [637885];
export const __webpack_modules__ = {
    gi6X: (function(e, t, r) {
        var a = r("DNHP"),
            n = r("GDNt"),
            o = r("gx4u");
        r.d(t, {
            a: () => "vscode",
            c: () => o.a
        }, {
            b: async function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let [o, s] = t, {
                    params: i,
                    select: l,
                    signal: c,
                    source: d,
                    responsePriority: u
                } = s ?? {};
                return async function(e, t, r, o, s, i) {
                    let l = (await n.b.getInstance().post(`vscode://codex/${e}`, JSON.stringify(t), function(e) {
                        if (null != e) return {
                            [a.dc]: e
                        }
                    }(s), o, i)).body;
                    return r ? r(l) : l
                }(o, i, l, c, d, u)
            }
        })
    }),
    wl0r: (function(e, t, r) {
        let a;
        r.d(t, {
            a: () => D,
            b: () => ee,
            browserAppServer: () => er,
            c: () => et,
            d: () => eh,
            e: () => ed,
            f: () => eC,
            g: () => en
        });
        var n = r("HIjy"),
            o = r("VH4X"),
            s = r("DNHP"),
            i = r("ngHT"),
            l = r("AOU6"),
            c = r("ASxG"),
            d = r("uDXB"),
            u = r("skh7"),
            h = r("MwLV"),
            p = r("p9rD"),
            f = r("QdUF"),
            w = r("vNSg"),
            m = r("cY5Z"),
            g = r("I1ra"),
            b = r("z3Js"),
            y = r("qRLu"),
            v = r("EAKz"),
            x = r("YAwS"),
            _ = r("qkcL"),
            E = r("T9J2"),
            k = r("h4h6"),
            I = r("BrCP"),
            C = r("C2tN"),
            T = r("hXwB"),
            S = r("YCTv"),
            R = r("KHWn"),
            A = r("ZhRn"),
            j = r("tFDh"),
            q = r("NGML"),
            O = r("WFY2"),
            P = r("kpIY"),
            U = r("yiHb"),
            L = r("rhkM"),
            N = r("Rz6g"),
            F = r("y3uJ"),
            B = r("eShZ");
        let G = "home-composer-mode-v1",
            $ = "codex.browser.projectlessThreadState",
            D = "/codex/browser/projectless",
            M = c.object({
                code: c.string().optional(),
                error: c.object({
                    code: c.string().optional()
                }).optional()
            }),
            H = c.object({
                detail: M.optional(),
                error: M.optional()
            }),
            z = c.strictObject({
                attachments_to_create: c.tuple([c.strictObject({
                    kind: c.literal("shared_widget"),
                    source_post_id: c.string().min(1),
                    share_options: c.strictObject({
                        kind: c.literal("personality_quiz"),
                        mode: c.enum(["quiz", "result"]),
                        result_id: c.uuid().nullable().optional()
                    })
                })])
            }),
            W = new Set(["get-global-state", "set-global-state"]);
        [...Object.keys(o.e).filter(o.D).map(R.c)];
        let J = new Set(["archive-thread", "unarchive-thread", "persisted-atom-sync-request", "persisted-atom-update", "persisted-atom-reset", "open-in-browser", "open-in-main-window", "fetch", "cancel-fetch", "mcp-request", "thread-prewarm-start", "mcp-response", "mcp-notification", "codex-app-server-restart"]),
            K = new Map,
            Y = new Map,
            V = new Map,
            Z = new Map,
            X = new Map,
            Q = new Map,
            ee = new _.a({
                dispatchHostMessage: es,
                getApiBaseUrl: h.a
            }),
            et = new E.a({
                readEnvironmentFile: e => er.readEnvironmentFile(e),
                getClientOrThrow: e => ee.getClientOrThrow(e)
            });
        (0, L.b)(e => {
            let t = (0, s.Ag)(e);
            return null == t ? ee.getClientOrThrow(e) : er.getGitExecutionHost(t)
        });
        let er = new v.a({
            createSocket: v.b,
            dispatchHostMessage: es,
            hostId: "local"
        });
        (0, T.c)((e, t) => er.sendDirectRequest(e, t, e => e));
        let ea = new s.J,
            en = {
                postMessage: e => {
                    var t, a, o;
                    if (null != (t = e) && "object" == typeof t && "string" == typeof t.type) {
                        if (a = e, J.has(a.type)) switch (e.type) {
                            case "archive-thread":
                                "local" !== e.hostId && e.cleanupWorktree && Y.set(`${e.hostId}:${e.conversationId}`, e);
                                return;
                            case "unarchive-thread": {
                                let t = `${e.hostId}:${e.conversationId}`;
                                Y.delete(t);
                                let r = X.get(t);
                                null != r && (window.clearTimeout(r), X.delete(t))
                            }
                            return;
                            case "persisted-atom-sync-request":
                                return void async function() {
                                    let e = {
                                        ...await (0, x.d)(x.a)
                                    };
                                    {
                                        let t = e[G] ?? (0, P.p)(P.a)[G],
                                            r = await (0, j.a)("codex_composer_mode", async () => {
                                                let e = (0, q.c)("codex_composer_mode", t) ?? N.b.safeParse((0, A.a)("oai-chat-surface-mode")).data;
                                                if (void 0 !== e) return e;
                                                try {
                                                    return N.b.safeParse(JSON.parse(window.localStorage.getItem("oai/apps/tpp/chat-surface-mode") ?? "null")).data
                                                } catch {
                                                    return
                                                }
                                            }, async () => {
                                                e[G] = void 0, await (0, x.g)(x.a, G, void 0)
                                            });
                                        void 0 === r || void 0 !== (0, A.a)("codex_composer_mode") || Object.hasOwn(e, G) || (e[G] = r, await (0, x.g)(x.a, G, r))
                                    }
                                    es({
                                        type: "persisted-atom-sync",
                                        state: e
                                    })
                                }();
                            case "persisted-atom-update": {
                                if (e.key === G) {
                                    e.deleted && (0, A.c)("codex_composer_mode", void 0), (0, j.a)("codex_composer_mode", async () => e.value, () => (0, x.g)(x.a, e.key, void 0));
                                    return
                                }
                                let t = Q.has(e.key) || Object.values(e.recordUpdate?.entries ?? {}).some(e => e?.expectedValue !== void 0 || null != e && "value" in e && e.createOnly) ? Symbol() : void 0;
                                null != t && Q.set(e.key, t), (0, x.g)(x.a, e.key, e.deleted ? void 0 : e.value, e.recordUpdate).then(async () => {
                                    if (e.key === n.a || null != t) {
                                        let r = await (0, x.e)(x.a, e.key);
                                        if (null != t) {
                                            if (Q.get(e.key) !== t) return;
                                            Q.delete(e.key)
                                        }
                                        es({
                                            type: "persisted-atom-updated",
                                            key: e.key,
                                            value: r ?? null,
                                            deleted: void 0 === r
                                        })
                                    }
                                });
                                return
                            }
                            case "persisted-atom-reset":
                                Q.clear(), (0, A.c)("codex_composer_mode", void 0), (0, x.c)(x.a);
                                return;
                            case "open-in-browser":
                                return void
                                function(e, t, r) {
                                    let a = (0, g.b)(e) ?? e;
                                    if ((0, s.qi)(a)) return window.location.assign(a);
                                    let n = function(e) {
                                        try {
                                            let {
                                                protocol: t
                                            } = new URL(e);
                                            return "http:" === t || "https:" === t
                                        } catch {
                                            return !1
                                        }
                                    }(a);
                                    if (n) {
                                        if (!n) return eo(a);
                                        {
                                            let e = (0, b.a)(a) ?? a;
                                            "current-tab" === t ? window.location.assign(e) : eo(e)
                                        }
                                    }
                                }(e.url, "current-tab" === e.disposition ? "current-tab" : "new-tab", e.targetChromeTabId);
                            case "open-in-main-window":
                                return;
                            case "fetch":
                                return void async function(e) {
                                    var t, r, a;
                                    let n = new AbortController;
                                    K.set(e.requestId, n);
                                    try {
                                        if (e.url.startsWith("vscode://codex/")) {
                                            return void(t = e.requestId, r = await async function(e, t) {
                                                var r, a, n;
                                                let o = e.slice(15);
                                                if (r = o, W.has(r)) {
                                                    let e, r = (e = window, "function" == typeof e.__codexChromeExtensionHostFetch ? e.__codexChromeExtensionHostFetch : null);
                                                    if (null != r) {
                                                        let e = function(e) {
                                                            if (null != e) return JSON.parse(e)
                                                        }(t);
                                                        if (a = o, n = e, "get-global-state" !== a && "set-global-state" !== a || null != n && "object" == typeof n && "key" in n && (n.key === s.gc.THREAD_PROJECT_ASSIGNMENTS || n.key === s.gc.PROJECTLESS_THREAD_IDS)) return r(o, {
                                                            params: e
                                                        })
                                                    }
                                                }
                                                switch (o) {
                                                    case "get-global-state":
                                                        return {
                                                            value: await async function(e, t) {
                                                                let r = function(e) {
                                                                    if (null == e) return null;
                                                                    let t = JSON.parse(e).key;
                                                                    return "string" == typeof t ? t : null
                                                                }(t);
                                                                return (0, x.e)(e, r)
                                                            }(S.a, t)
                                                        };
                                                    case "set-global-state":
                                                        return await async function(e, t) {
                                                            if (null == t) return;
                                                            let r = JSON.parse(t),
                                                                a = r.key;
                                                            if ("string" == typeof a) {
                                                                if (e === S.a && a === s.gc.QUEUED_FOLLOW_UPS) throw Error("Use the queued follow-ups service to write the queue");
                                                                await (0, x.g)(e, a, r.value)
                                                            }
                                                        }(S.a, t), {
                                                            success: !0
                                                        };
                                                    default:
                                                        throw Error(`Browser host fetch is not implemented: ${o}`)
                                                }
                                            }(e.url, e.body), es({
                                                type: "fetch-response",
                                                responseType: "success",
                                                requestId: t,
                                                status: 200,
                                                headers: {},
                                                bodyJsonString: JSON.stringify(r)
                                            }))
                                        }
                                        eI(e.requestId, 501, `Browser host does not support fetch URL: ${e.url}`, null)
                                    } catch (t) {
                                        if (n.signal.aborted || null != (a = t) && "object" == typeof a && "AbortError" === a.name) return void eI(e.requestId, 499, t instanceof Error ? t.message : "Browser host fetch canceled", null);
                                        eI(e.requestId, 500, t instanceof Error ? t.message : "Browser host fetch failed", null, eC(t))
                                    } finally {
                                        K.delete(e.requestId)
                                    }
                                }(e);
                            case "cancel-fetch":
                                let t;
                                return void(o = e, null != (t = K.get(o.requestId)) && (t.abort(), K.delete(o.requestId)));
                            case "mcp-request":
                            case "thread-prewarm-start":
                                if ("thread/archive" === e.request.method) {
                                    let t = `${e.hostId}:${e.request.params.threadId}`,
                                        r = Y.get(t);
                                    null != r && V.set(`${e.hostId}:${e.request.id}`, r)
                                } else "thread/unarchive" === e.request.method && Z.set(`${e.hostId}:${e.request.id}`, `${e.hostId}:${e.request.params.threadId}`);
                                !async function(e) {
                                    try {
                                        if ("local" === e.hostId && er.supports(e.request)) return void await er.sendRequest(e.request, {
                                            prewarmThread: "thread-prewarm-start" === e.type,
                                            savedEnvironmentConfig: "mcp-request" === e.type ? e.savedEnvironmentConfig : void 0,
                                            retainResponse: e.retainResponse,
                                            environmentDraftReplacement: "mcp-request" === e.type ? e.environmentDraftReplacement : void 0,
                                            threadAccess: "mcp-request" === e.type ? e.threadAccess : void 0,
                                            persistentSideConversation: "mcp-request" === e.type ? e.persistentSideConversation : void 0,
                                            executorAccess: "mcp-request" === e.type ? e.executorAccess : void 0
                                        });
                                        if ((0, i.a)(e.request)) throw Error("User-message admission requires a cloud app-server host");
                                        let t = ee.getClient(e.hostId);
                                        if (null != t) return void await t.sendRequest(e.request, e.retainResponse);
                                        if ("local" === e.hostId && ea.supports(e.request)) {
                                            let t = ea.send(e.request);
                                            if ("response" === t.type) {
                                                await Promise.resolve(), es({
                                                    type: "mcp-response",
                                                    hostId: e.hostId,
                                                    message: t.response
                                                });
                                                return
                                            }
                                        }
                                        let a = await async function(e, t) {
                                            if ("account/read" === e) {
                                                var a, n;
                                                let e = (a = await (0, f.loadBrowserChatGptAuth)(), null != a ? {
                                                    type: "chatgpt",
                                                    email: a.email ?? "",
                                                    planType: (n = a.planType, "law" === n ? "unknown" : "promax" === n ? "pro" : "self_serve_business_prolite" === n ? "team" : "enterprise_cbp_automation" === n ? "enterprise_cbp_usage_based" : "edu_plus" === n || "edu_pro" === n ? "edu" : "free_workspace" === n || "sci" === n || "finserv" === n || "deprecated_enterprise" === n || "education" === n || "k12" === n || "hc" === n || "hc_consumption" === n || "quorum" === n || "deprecated_edu" === n ? "unknown" : n),
                                                    workspaceName: null
                                                } : null);
                                                return {
                                                    result: {
                                                        account: e,
                                                        requiresOpenaiAuth: null == e
                                                    }
                                                }
                                            }
                                            if ("account/login/start" === e) {
                                                if ("apiKey" === t.type) return {
                                                    error: {
                                                        code: -32e3,
                                                        message: "Browser API key sign-in is not supported. Use a ChatGPT bearer token for this dev host."
                                                    }
                                                };
                                                if ("chatgptAuthTokens" === t.type) {
                                                    try {
                                                        (0, f.saveBrowserChatGptAuth)({
                                                            accessToken: t.accessToken,
                                                            chatgptAccountId: t.chatgptAccountId,
                                                            chatgptPlanType: t.chatgptPlanType
                                                        })
                                                    } catch (e) {
                                                        return {
                                                            error: {
                                                                code: -32e3,
                                                                message: e instanceof Error ? e.message : "Browser ChatGPT token sign-in failed"
                                                            }
                                                        }
                                                    }
                                                    return {
                                                        result: {
                                                            type: "chatgptAuthTokens"
                                                        }
                                                    }
                                                }
                                                return "chatgpt" === t.type && (0, f.maybeRedirectToBrowserChatGptLogin)() ? {
                                                    result: {
                                                        type: "chatgpt"
                                                    }
                                                } : {
                                                    error: {
                                                        code: -32e3,
                                                        message: "Browser ChatGPT sign-in is not wired yet. Use a ChatGPT bearer token for this dev host."
                                                    }
                                                }
                                            }
                                            if ("account/login/cancel" === e) return {
                                                result: {
                                                    status: "notFound"
                                                }
                                            };
                                            if ("account/logout" === e) {
                                                let e = await (0, f.loadBrowserChatGptAuth)();
                                                if (e?.source === "token") return (0, f.clearBrowserAuth)(), await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470)]).then(r.bind(r, "rCBi")).then(e => {
                                                    let {
                                                        clearBrowserDictationHistory: t
                                                    } = e;
                                                    return t()
                                                }).catch(() => {}), {
                                                    result: {}
                                                };
                                                let [{
                                                    signOutOfBrowserSession: t
                                                }, {
                                                    handleLogout: a
                                                }] = await Promise.all([Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(226913)]).then(r.bind(r, "jEww")), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(226913)]).then(r.bind(r, "OrNX"))]), n = new AbortController;
                                                (0, p.b)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT", n.signal);
                                                let o = await t(() => a(() => {})).catch(e => {
                                                    throw n.abort(), e
                                                });
                                                return o.ok ? (window.location.replace(o.url), {
                                                    result: {}
                                                }) : (n.abort(), {
                                                    error: {
                                                        code: -32e3,
                                                        message: "ChatGPT logout failed. Please try again."
                                                    }
                                                })
                                            }
                                            return "thread/list" === e || "thread/search" === e ? {
                                                result: {
                                                    data: [],
                                                    nextCursor: null,
                                                    backwardsCursor: null
                                                }
                                            } : {
                                                error: {
                                                    code: -32e3,
                                                    message: `Browser host app-server method is not implemented: ${e}`
                                                }
                                            }
                                        }(e.request.method, "params" in e.request ? e.request.params : void 0);
                                        es({
                                            type: "mcp-response",
                                            hostId: e.hostId,
                                            message: {
                                                id: e.request.id,
                                                ...a
                                            }
                                        })
                                    } catch (t) {
                                        es({
                                            type: "mcp-request-delivery",
                                            hostId: e.hostId,
                                            update: {
                                                type: "failed",
                                                delivery: t instanceof l.a ? t.delivery : {
                                                    requestId: e.request.id,
                                                    method: e.request.method,
                                                    stage: "not-sent"
                                                },
                                                message: t instanceof Error ? t.message : "Browser remote control request failed"
                                            }
                                        })
                                    }
                                }(e);
                                return;
                            case "mcp-response":
                                if ("local" === e.hostId && er.hasPendingServerRequest(e.response.id)) return void er.sendResponse(e.response);
                                ee.getClient(e.hostId)?.sendResponse(e.response);
                                return;
                            case "mcp-notification":
                                if ("local" === e.hostId) return void er.sendNotification(e.request);
                                ee.getClient(e.hostId)?.sendNotification(e.request);
                                return;
                            case "codex-app-server-restart":
                                return void ee.getClient(e.hostId)?.connect().catch(() => {})
                        }
                    }
                },
                getState: () => a,
                setState: e => {
                    a = e
                }
            };

        function eo(e) {
            var t;
            (0, C.a)()?.tabs, t = e, window.open(t, "_blank", "noopener,noreferrer")
        }

        function es(e) {
            if ("mcp-response" === e.type) {
                var t;
                let r, a, n = `${e.hostId}:${e.message.id}`,
                    o = V.get(n);
                null != o && (V.delete(n), null == e.message.error && (t = o, r = `${t.hostId}:${t.conversationId}`, null != (a = X.get(r)) && window.clearTimeout(a), X.set(r, window.setTimeout(() => {
                    X.delete(r), Y.delete(r), (async function(e) {
                        let t = ee.getClient(e.hostId);
                        if (null == t) return;
                        let {
                            worktreeGitRoot: r
                        } = await (0, U.a)("git").request({
                            method: "resolve-worktree-for-thread",
                            params: {
                                cwd: (0, s.We)(e.cwd),
                                conversationId: e.conversationId,
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_archive_cleanup"
                            }
                        });
                        if (null == r) return;
                        let a = await (0, s.pf)({
                            archivedThreadId: e.conversationId,
                            listThreads: t.listThreads.bind(t),
                            worktreeRoot: r
                        });
                        if (null != a) return void await (0, U.a)("git").request({
                            method: "set-worktree-owner-thread",
                            params: {
                                worktree: r,
                                conversationId: (0, s.Se)(a.id),
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_set_owner_thread"
                            }
                        });
                        let n = ee.getRemoteConnections().find(t => t.hostId === e.hostId);
                        (0, s.Nh)(n?.appServerVersion, "threadAttachmentOwners") && await (0, s.Dh)({
                            worktreeRoot: r,
                            listOwners: e => t.listThreadAttachmentOwners(e)
                        }, e.conversationId) === !0 || (await (0, U.a)("git").request({
                            method: "delete-worktree",
                            params: {
                                worktree: r,
                                force: !0,
                                reason: "archive-cleanup",
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_archive_cleanup"
                            }
                        })).success && es({
                            type: "worktrees-reload-requested",
                            hostId: e.hostId
                        })
                    })(t).catch(e => {
                        O.a.warning("Failed to clean up an archived remote worktree", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }, s.yd))));
                let i = Z.get(n);
                if (null != i && (Z.delete(n), null == e.message.error)) {
                    let e = X.get(i);
                    null != e && (window.clearTimeout(e), X.delete(i))
                }
            }
            window.dispatchEvent(new MessageEvent("message", {
                data: e,
                origin: window.location.origin,
                source: window
            }))
        }

        function ei(e) {
            let t = (0, k.a)(e) ?? (0, I.a)(e);
            if (null != t) return el((0, h.a)(), t);
            if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("data:")) return (0, y.b)(e);
            if (e.startsWith("/")) {
                let t = (0, h.a)();
                return "/__codex-api" === e || e.startsWith("/__codex-api/") || t.startsWith("/") && (e === t || e.startsWith(`${t}/`)) ? (0, y.b)(new URL(e, window.location.origin).toString()) : el(t, e)
            }
            return null
        }

        function el(e, t) {
            let r = (0, y.b)((0, s.Ti)(e, t));
            return e.startsWith("/") ? new URL(r, window.location.origin).toString() : r
        }

        function ec(e, t) {
            if (null == t || e_(e, "content-type")) return;
            let r = t.trim();
            if (r.startsWith("{") || r.startsWith("[")) try {
                JSON.parse(t), eE(e, "Content-Type", "application/json")
            } catch {}
        }
        async function ed(e) {
            var t, r;
            let a;
            if (null != e.hostId && "local" !== e.hostId) return et.createProjectlessThreadPaths(e);
            let n = await async function() {
                let e = await (0, x.e)($, "nextThreadNumber"),
                    t = "number" == typeof e ? e : 1;
                return await (0, x.g)($, "nextThreadNumber", t + 1), t
            }(), o = e.directoryName?.trim() || (t = e.prompt ?? null, r = n, a = t?.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "thread", `${String(r).padStart(4,"0")}-${a}`), s = `${D}/${o}`, i = !1 !== e.createSplitDirectories ? `${s}/output` : s;
            return {
                cwd: !1 !== e.createSplitDirectories ? `${s}/workspace` : s,
                outputDirectory: i,
                workspaceRoot: s
            }
        }

        function eu(e) {
            for (let t of Object.keys(e))["authorization", "chatgpt-account-id", "x-openai-actor-authorization", "x-openai-authorization", "x-openai-locked-chats-pin"].includes(t.toLowerCase()) && delete e[t]
        }
        async function eh(e, t, r, a, n, o, i) {
            var l;
            let c, g = "anonymous" === t.authentication,
                b = g ? function(e) {
                    let t = ei(e);
                    if (null == t) throw Error("Unsupported anonymous API URL");
                    let r = new URL(t, window.location.origin);
                    if (r.origin !== window.location.origin || !/^\/(?:backend-api|__codex-api|public-api)\//.test(r.pathname)) throw Error("Unsupported anonymous API URL");
                    return r.pathname.startsWith("/__codex-api/public-api/") || (r.pathname = r.pathname.replace(/^\/(?:backend-api|__codex-api)\//, "/backend-anon/")), r.href
                }(e) : ei(e);
            if (null == b) throw Error("Browser API URL is not supported.");
            let v = (0, f.isBrowserGuestChatSession)(),
                x = !g && v ? (0, h.getBrowserGuestChatRequestUrl)(b, t.method) : null,
                _ = x ?? b,
                E = {
                    ...t.headers
                },
                k = (0, s.Ke)(E),
                I = (0, s.Je)(E);
            if (null != x && (null != k || e_(E, "authorization") || e_(E, "chatgpt-account-id"))) throw new DOMException("Guest Chat identity changed", "AbortError");
            let C = t.body;
            if (ec(E, "string" == typeof C ? C : void 0), g) {
                if (null != t.expectedIdentity || null != k) throw Error("Anonymous requests cannot carry an authenticated identity");
                eu(E)
            }
            let T = g || null != x ? "notNeeded" : function(e) {
                    let {
                        authRequested: t,
                        chromeExtensionBrowserApiAuth: r,
                        expectedAccountId: a,
                        headers: n,
                        method: o,
                        url: i,
                        body: l
                    } = e;
                    if (e_(n, "authorization") || ! function(e, t) {
                            var r;
                            let a, n;
                            try {
                                a = new URL(e)
                            } catch {
                                return !1
                            }
                            return ("http:" === a.protocol || "https:" === a.protocol) && (r = a, !!(null != (n = (0, y.a)()) && ey(r, new URL(n)) || ey(r, new URL((0, h.a)(), window.location.origin)) || ey(r, new URL("/__codex-api", window.location.origin)) || eg(a) || a.origin === window.location.origin && ("/api/identity/service/biometric-factors" === a.pathname || "/api/identity/service/biometric-factors/FACE" === a.pathname || "/api/identity/service/biometric-factors/VOICE" === a.pathname || /^\/api\/identity\/service\/biometric-factors\/(FACE|VOICE)\/[^/]+$/.test(a.pathname))) || !!(t && ey(a, new URL((0, s.Ti)((0, h.a)(), "/public-api/"), window.location.origin)) || "chatgpt.com" === a.hostname.toLowerCase() && ev(a.pathname, "/backend-api")) || !!eb(e) && t)
                        }(i, t)) return "notNeeded";
                    let c = (0, f.getOrLoadBrowserChatGptAuth)();
                    return c instanceof Promise ? c.then(d) : d(c);

                    function d(e) {
                        return null == e ? ! function(e, t, r) {
                            let a;
                            if (eb(t) || ew(e, t, r)) return !0;
                            if ("GET" !== e.toUpperCase()) return !1;
                            try {
                                a = new URL(t)
                            } catch {
                                return !1
                            }
                            let n = new URL(el((0, h.a)(), "/share/post/resolve/"), window.location.origin),
                                o = new URL(el((0, h.a)(), "/share/post/"), window.location.origin),
                                s = new URL(el((0, h.a)(), "/public/textdoc/shared/"), window.location.origin);
                            return ey(a, n) || ey(a, s) && /^[^/]+$/.test(a.pathname.slice(s.pathname.length)) || ey(a, o) && /^[^/]+\/(?:automation|web-image\/[^/]+)$/.test(a.pathname.slice(o.pathname.length)) || ["/images/init", "/images/styles"].some(e => {
                                let t = new URL(el((0, h.a)(), e), window.location.origin);
                                return a.origin === t.origin && a.pathname === t.pathname
                            })
                        }(o, i, l) ? "missing" : "notNeeded" : (em(n, e, a, i), "attached")
                    }
                }({
                    authRequested: I,
                    chromeExtensionBrowserApiAuth: null,
                    expectedAccountId: k,
                    headers: E,
                    method: t.method,
                    url: _,
                    body: C
                }),
                S = T instanceof Promise ? await T : T;
            if ("missing" === S) {
                let t = !v && (0, f.maybeRedirectToBrowserChatGptLogin)();
                throw new B.FetchError(t ? "Redirecting to ChatGPT login." : `Cannot fetch ${e} without ChatGPT auth.`, 401, void 0, null)
            }
            if (t.signal?.throwIfAborted(), ep(E, t.expectedIdentity), a?.(), null != i) {
                let e = (0, f.getBrowserChatGptAuthGeneration)();
                if (await i(), t.signal?.throwIfAborted(), e !== (0, f.getBrowserChatGptAuthGeneration)()) throw new DOMException("The request identity changed", "AbortError");
                a?.()
            }
            for (let [e, t] of Object.entries(g ? {} : (0, w.a)(_))) eE(E, e, t);
            let R = {
                url: _,
                headers: E,
                body: C
            };
            r?.(R), ex(R.headers), g && eu(R.headers);
            let A = null != x || "attached" === S ? "include" : void 0;
            g ? A = "omit" : eg(new URL(_)) && (A = "same-origin");
            let j = {
                method: t.method,
                headers: R.headers,
                body: R.body,
                credentials: A,
                ...g ? {
                    referrerPolicy: "no-referrer"
                } : {},
                keepalive: t.keepalive,
                cache: t.cache,
                redirect: g ? "error" : t.redirect,
                signal: t.signal
            };
            "POST" === t.method.toUpperCase() && _ === ei("/payments/checkout") && new URL(_).origin === window.location.origin && (j.referrerPolicy = "same-origin");
            let q = (0, f.getBrowserChatGptAuthGeneration)(),
                O = await (0, F.a)(_, j, "initial");
            if (g) return O;
            let P = "never" === t.retry || "POST" === t.method.toUpperCase() && new URL(_).pathname.endsWith(s.N);
            if (403 === O.status) {
                let e = await (0, m.a)(O, Object.fromEntries(new Headers(j.headers)), q);
                if (null != e) return es({
                    type: "personal-workspace-access-blocked",
                    ...e
                }), O
            }
            let U = 403 === O.status && !(0, B.c)(O.headers) && "GET" === t.method.toUpperCase() && _ === ei("/accounts/check/v4-2023-04-27") && !(0, u.a)(await (0, B.a)(O.clone(), _));
            if (null != x || 401 !== O.status && !U || P || ew(t.method, _, C) && ("attached" !== S || !["/model_first_landings/resolve_message", "/widget_server_action/public", "/share/post"].some(e => new URL(_).pathname === new URL(el((0, h.a)(), e), window.location.origin).pathname)) || "attached" !== S) return O;
            let L = "POST" === t.method.toUpperCase() && _ === ei("/accounts/data_export"),
                N = await ef(O);
            if (U && "invalid_workspace_selected" === N || L && ("reauth_required" === (l = N) || "phone_verification_required" === l)) return O;
            let G = new Headers(j.headers).get("authorization")?.replace(/^Bearer /i, "");
            if (null == G) return (0, f.maybeRedirectToBrowserChatGptLogin)(), O;
            let $ = {
                accessToken: G,
                method: t.method,
                path: new URL(_).pathname,
                signal: t.signal
            };
            if ("token_expired" !== N && !U) return ("expired_session_key" === N || "token_invalidated" === N || "token_revoked" === N) && await (0, f.handleBrowserChatGptSessionExpired)({
                ...$,
                errorCode: N
            }), O;
            let D = await (0, f.recoverBrowserChatGptAuth)({
                ...$,
                reason: U ? "account_bootstrap_forbidden" : "token_expired"
            });
            if (t.signal?.throwIfAborted(), null != D.auth || "session_expired" !== D.reason || U || (0, f.isBrowserWorkspaceSwitchPending)() || D.authGeneration !== (0, f.getBrowserChatGptAuthGeneration)() || (0, p.b)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_EXPIRED_SESSION"), null == D.auth && (0, f.getBrowserChatGptAuthGeneration)() !== q) return O;
            if (null == D.auth && "session_expired" === D.reason) return U || (0, f.markBrowserSessionExpired)(G, D.logoutReasonV2, D.observation), O;
            if (null == D.auth && "identity_mismatch" === D.reason) return O;
            let M = D.auth ?? await (0, f.loadBrowserChatGptAuth)();
            if (null == M) return O;
            if (null != k && await O.body?.cancel(), null != n) {
                t.signal?.throwIfAborted(), ep(E, t.expectedIdentity), a?.();
                let e = await n();
                if (null == (M = (0, f.getBrowserChatGptAuthSnapshot)())) return O;
                c = e.headers, (0, s.Je)(c), (0, s.Ke)(c), j.body = e.body, ec(c, e.body)
            } else c = Object.fromEntries(new Headers(j.headers));
            for (let [e, t] of(em(c, M, k, _), Object.entries((0, w.a)(_)))) eE(c, e, t);
            t.signal?.throwIfAborted(), ep(c, t.expectedIdentity), a?.(), ex(c = o?.(c) ?? c), j.headers = c;
            let H = (0, f.getBrowserChatGptAuthGeneration)(),
                z = await (0, F.a)(_, j, "auth_retry");
            if (null == D.auth && z.ok) try {
                d.a.count("default", "identity.codex_web_auth_retry_success", {})
            } catch {}
            if (403 === z.status) {
                let e = await (0, m.a)(z, c, H);
                null != e && es({
                    type: "personal-workspace-access-blocked",
                    ...e
                })
            }
            if (401 === z.status) {
                let e = await ef(z);
                ("expired_session_key" === e || "token_invalidated" === e || "token_revoked" === e) && await (0, f.handleBrowserChatGptSessionExpired)({
                    ...$,
                    accessToken: M.accessToken,
                    errorCode: e
                })
            }
            return z
        }

        function ep(e, t) {
            if (null == t) return;
            let r = new Headers(e),
                a = r.get("authorization"),
                n = (0, f.readChatGptTokenClaims)(a?.match(/^Bearer (.+)$/i)?.[1] ?? "");
            if ((r.get("chatgpt-account-id") ?? n?.accountId) !== t.accountId || n?.userId !== t.userId) throw new B.FetchError("The authenticated account changed before the request could be sent.", 409, "account_changed", null)
        }
        async function ef(e) {
            try {
                let t = H.safeParse(await e.clone().json());
                if (t.success) return t.data.detail?.code ?? t.data.error?.code ?? t.data.error?.error?.code ?? t.data.detail?.error?.code
            } catch {}
        }

        function ew(e, t, r) {
            let a = [];
            "GET" === e.toUpperCase() ? a = ["/trusted_contact/nominee"] : "POST" === e.toUpperCase() && (a = ["/trusted_contact/accept", "/trusted_contact/removal", "/ai/account_linking/pre_check", "/model_first_landings/resolve_message", "/widget_server_action/public", "/share/post"]);
            let n = new URL(t),
                o = new URL(el((0, h.a)(), "/estuary/public_content/enc/"), window.location.origin);
            return !!("GET" === e.toUpperCase() && ey(n, o) && /^[^/]+$/.test(n.pathname.slice(o.pathname.length))) || a.some(e => {
                let t = new URL(el((0, h.a)(), e), window.location.origin);
                if (n.origin !== t.origin || n.pathname !== t.pathname) return !1;
                if ("/share/post" !== e) return !0;
                if ("string" != typeof r) return !1;
                try {
                    return z.safeParse(JSON.parse(r)).success
                } catch {
                    return !1
                }
            })
        }

        function em(e, t, r, a) {
            if (null != r && r !== t.accountId) throw new B.FetchError("The authenticated account changed before the request could be sent.", 409, "account_changed", null);
            eE(e, "Authorization", `Bearer ${t.accessToken}`), null != t.accountId && eE(e, "ChatGPT-Account-Id", t.accountId);
            let n = ek(e, "originator");
            eg(new URL(a)) ? null != n && delete e[n] : null == n && (e.originator = "Codex Browser")
        }

        function eg(e) {
            return "/realtime/cua" === e.pathname ? !e.username && !e.password && (0, h.d)(e.origin) : ("https://realtime.chatgpt.com" === e.origin || "https://realtime.chatgpt-staging.com" === e.origin) && "/v1/cua" === e.pathname
        }

        function eb(e) {
            try {
                let t = new URL(e);
                return t.origin === window.location.origin && "/ces/v1/rgstr" === (t.pathname.replace(/\/+$/, "") || "/")
            } catch {
                return !1
            }
        }

        function ey(e, t) {
            return e.origin === t.origin && ev(e.pathname, t.pathname)
        }

        function ev(e, t) {
            let r = t.replace(/\/+$/, "") || "/";
            return "/" === r || e === r || e.startsWith(`${r}/`)
        }

        function ex(e) {
            for (let t of Object.keys(e)) {
                let r = t.toLowerCase();
                ("x-openai-attach-integrity-state" === r || "x-oai-is" === r || "x-oai-is-pending-updates" === r || "x-oai-is-client-observation" === r) && delete e[t]
            }
        }

        function e_(e, t) {
            return null != ek(e, t)
        }

        function eE(e, t, r) {
            var a;
            let n;
            (n = ek(a = e, t)) && delete a[n], e[t] = r
        }

        function ek(e, t) {
            let r = t.toLowerCase();
            return Object.keys(e).find(e => e.toLowerCase() === r)
        }

        function eI(e, t, r, a, n) {
            es({
                type: "fetch-response",
                responseType: "error",
                requestId: e,
                status: t,
                responseStatus: a,
                error: r,
                errorCode: n
            })
        }

        function eC(e) {
            if (null != e && "object" == typeof e && "errorCode" in e && "string" == typeof e.errorCode) return e.errorCode
        }
    }),
    eShZ: (function(e, t, r) {
        var a = r("DNHP"),
            n = r("ASxG"),
            o = r("y3uJ"),
            s = r("w5lF");
        class i extends Error {
            status;
            errorCode;
            errorKind;
            retryAtMs;
            diagnosticError;
            retryable;
            #e;
            responseStatus;
            requestDiagnostics;
            failureOrigin;
            diagnostics;
            historyInitialRetryAtMs;
            uploadTransportErrorKind;
            uploadUrlExpired;
            azureErrorCode;
            isCloudflareChallenge = !1;
            constructor(e, t, r, a, n, o, s, i) {
                super(e), this.status = t, this.errorCode = r, this.errorKind = n, this.retryAtMs = o, this.diagnosticError = s, this.retryable = i, this.#e = a, this.responseStatus = void 0 === a ? t : a
            }
            get explicitResponseStatus() {
                return this.#e
            }
        }

        function l(e) {
            return "challenge" === e.get("cf-mitigated")
        }

        function c(e) {
            if (null != e) switch (e) {
                case "AuthenticationFailed":
                case "AuthorizationFailure":
                case "AuthorizationPermissionMismatch":
                case "InvalidAuthenticationInfo":
                case "InvalidBlockList":
                case "ServerBusy":
                case "OperationTimedOut":
                    return e;
                default:
                    return
            }
        }
        r.d(t, {}, {
            FetchError: i,
            a: async function(e, t) {
                let r, d, u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    r = await e.text()
                } catch {
                    r = ""
                }
                let h = e.headers.get("retry-after"),
                    p = null == h ? 0 / 0 : Number(h),
                    f = Number.isFinite(p) ? Date.now() + 1e3 * Math.max(0, p) : Date.parse(h ?? ""),
                    w = Number(e.headers.get("x-ratelimit-reset")),
                    m = Math.max(...[f, "0" === e.headers.get("x-ratelimit-remaining") && w > 0 ? 1e3 * w : 0 / 0].filter(Number.isFinite)),
                    g = {};
                try {
                    g = n.record(n.string(), n.unknown()).parse(JSON.parse(r))
                } catch (e) {
                    d = e instanceof Error ? e : void 0, u || (g = {
                        detail: {
                            code: "not_json_response",
                            text: r.substring(0, 1e3)
                        }
                    })
                }
                let b = (0, a.pj)(r),
                    y = Error(JSON.stringify(g)),
                    v = l(e.headers);
                if (v) r = b = "cloudflare_challenge", g = {
                    detail: {
                        code: b
                    }
                }, y = Error(b), d = void 0;
                else if (u && !e.headers.get("content-type")?.includes("application/json")) {
                    b = b ?? "unexpected_content_type";
                    let t = r.substring(0, 1e3);
                    g = {
                        detail: {
                            message: s.a,
                            code: "unexpected_content_type",
                            contentType: e.headers.get("content-type") ?? "",
                            text: t
                        }
                    }, y = Error(t)
                }
                let x = e.headers.get("x-request-id") ?? (u ? e.headers.get("cf-ray") : void 0) ?? void 0,
                    _ = new i(r || e.statusText || `Request failed with status ${e.status}`, e.status, b, e.status, void 0, Number.isFinite(m) ? m : void 0, u && e.headers.get("content-type")?.includes("application/json") && null != d ? d : new s.c(t, e.status, g, x, y, e.headers.get("cf-ray") ?? void 0, e.headers.get("x-oai-request-id") ?? void 0), n.boolean().safeParse(g.retryable).data ?? n.object({
                        retryable: n.boolean().optional()
                    }).safeParse(g.detail).data?.retryable);
                _.isCloudflareChallenge = v, _.requestDiagnostics = (0, o.c)(e), _.failureOrigin = "http_response", _.diagnostics = (0, s.e)(_.diagnosticError ?? _, e), _.azureErrorCode = c(e.headers.get("x-ms-error-code"));
                let E = e.headers.get("x-oai-history-initial-retry-after"),
                    k = null == E ? 0 / 0 : Number(E);
                return Number.isFinite(k) && k >= 0 && (_.historyInitialRetryAtMs = Date.now() + 1e3 * k), _
            },
            b: c,
            c: l,
            d: function(e) {
                return e instanceof i && 403 === e.status && e.isCloudflareChallenge
            }
        })
    }),
    GDNt: (function(e, t, r) {
        r.d(t, {
            a: () => d.FetchError,
            b: () => h,
            c: () => f,
            d: () => p
        });
        var a = r("DNHP"),
            n = r("ASxG"),
            o = r("vNSg"),
            s = r("w5lF"),
            i = r("KthI"),
            l = r("TL6G"),
            c = r("WFY2"),
            d = r("eShZ");
        let u = n.object({
            error: n.unknown(),
            error_code: n.string().optional().catch(void 0),
            can_retry: n.boolean().optional().catch(void 0),
            error_reason: n.string().optional().catch(void 0)
        });
        class h {
            getRestartBlockers() {
                return [...this.pendingRequests.size > 0 ? ["web-fetch.pending-request"] : [], ...this.streamControllers.size > 0 ? ["web-fetch.active-stream"] : []]
            }
            static instance = null;
            static getInstance() {
                return null == this.instance && (this.instance = new h), this.instance
            }
            pendingRequests = new Map;
            streamControllers = new Map;
            constructor() {
                this.onFetchResponse = this.onFetchResponse.bind(this), l.a.getInstance().subscribe("fetch-response", e => {
                    this.onFetchResponse(e)
                })
            }
            onFetchResponse(e) {
                let t = this.pendingRequests.get(e.requestId);
                if (t) switch (this.pendingRequests.delete(e.requestId), t.cleanup?.(), e.responseType) {
                    case "success":
                        try {
                            e.status >= 200 && e.status < 300 ? t.resolve({
                                status: e.status,
                                headers: e.headers,
                                body: "body" in e ? e.body : JSON.parse(e.bodyJsonString)
                            }) : t.reject(new d.FetchError("body" in e ? JSON.stringify(e.body) : e.bodyJsonString, e.status))
                        } catch (e) {
                            t.reject(e instanceof Error ? e : Error("string" == typeof e ? e : JSON.stringify(e) ?? "Unknown error"))
                        }
                        break;
                    case "error":
                        t.reject(new d.FetchError(e.error, e.status, e.errorCode, e.responseStatus))
                }
            }
            async get(e, t, r, a, n, o) {
                return this.sendRequest("GET", e, {
                    headers: t,
                    signal: r,
                    assertRequestCurrent: a,
                    expectedIdentity: n,
                    onResponseHeaders: o
                })
            }
            async post(e, t, r, a, n, o, s, i) {
                return this.sendRequest("POST", e, {
                    body: t,
                    headers: r,
                    signal: a,
                    responsePriority: n,
                    assertRequestCurrent: o,
                    expectedIdentity: s,
                    onResponseHeaders: i
                })
            }
            async put(e, t, r, a, n) {
                return this.sendRequest("PUT", e, {
                    body: t,
                    headers: r,
                    signal: a,
                    onUploadProgress: n
                })
            }
            async upload(e, t, n) {
                let {
                    body: s,
                    headers: i = {},
                    onUploadProgress: l,
                    signal: c
                } = n;
                c?.throwIfAborted();
                try {
                    return void await async function(e) {
                        let {
                            body: t,
                            headers: n,
                            method: s,
                            onUploadProgress: i,
                            signal: l,
                            url: c
                        } = e, u = c, h = {
                            ...n
                        }, p = (0, a.Je)(h);
                        if (p) {
                            let e = new URL(c, window.location.origin);
                            if (e.origin !== window.location.origin && ("https:" !== e.protocol || "chatgpt.com" !== e.hostname.toLowerCase())) throw Error("Unsupported authenticated upload origin");
                            let {
                                isBrowserGuestChatSession: t,
                                loadBrowserChatGptAuth: a
                            } = await Promise.resolve().then(r.bind(r, "QdUF")), n = await a();
                            if (l?.throwIfAborted(), null == n) {
                                let {
                                    getBrowserGuestChatRequestUrl: e
                                } = await Promise.resolve().then(r.bind(r, "MwLV")), a = t() ? e(c, s) : null;
                                if (null == a) throw new d.FetchError("File upload requires authentication", 401, void 0, null);
                                u = a
                            } else h.Authorization = `Bearer ${n.accessToken}`, null != n.accountId && (h["ChatGPT-Account-Id"] = n.accountId)
                        }
                        for (let e of (Object.assign(h, (0, o.a)(c)), Object.keys(h))) /^(?:user-agent|sec-ch-ua(?:-|$))/i.test(e) && delete h[e];
                        return new Promise((e, r) => {
                            if (l?.aborted) return void r(new DOMException("Aborted", "AbortError"));
                            let a = new XMLHttpRequest;
                            for (let [e, t] of(a.open(s, u), a.withCredentials = p, Object.entries(h))) a.setRequestHeader(e, t);
                            a.upload.onprogress = e => {
                                let {
                                    lengthComputable: t,
                                    loaded: r,
                                    total: a
                                } = e;
                                t && i?.({
                                    loaded: r,
                                    total: a
                                })
                            };
                            let n = () => a.abort();
                            l?.addEventListener("abort", n, {
                                once: !0
                            }), a.onload = () => {
                                if (a.status >= 200 && a.status < 300) e();
                                else {
                                    let e = new d.FetchError("File upload failed", a.status, void 0, a.status > 0 ? a.status : null);
                                    e.azureErrorCode = (0, d.b)(a.getResponseHeader("x-ms-error-code")), r(e)
                                }
                            }, a.onerror = () => {
                                let e = new d.FetchError("File upload failed", 0, void 0, null, "network");
                                e.uploadTransportErrorKind = "network", r(e)
                            }, a.ontimeout = () => {
                                let e = new d.FetchError("File upload timed out", 0, void 0, null, "network");
                                e.uploadTransportErrorKind = "timeout", r(e)
                            }, a.onabort = () => {
                                r(new DOMException("Aborted", "AbortError"))
                            }, a.onloadend = () => {
                                l?.removeEventListener("abort", n)
                            }, a.send(t)
                        })
                    }({
                        body: s,
                        headers: i,
                        method: e,
                        onUploadProgress: l,
                        signal: c,
                        url: t
                    })
                } catch (e) {
                    if (e instanceof d.FetchError && 403 === e.responseStatus) {
                        let r = URL.parse(t, window.location.origin)?.searchParams.get("se"),
                            a = null == r ? 0 / 0 : Date.parse(r);
                        e.uploadUrlExpired = Number.isFinite(a) && Date.now() >= a
                    }
                    throw e
                }
            }
            async fetch(e) {
                let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r.authentication;
                try {
                    t = await (0, i.a)({
                        url: e,
                        method: r.method ?? "GET",
                        body: r.body,
                        headers: r.headers,
                        keepalive: r.keepalive,
                        cache: r.cache,
                        redirect: r.redirect,
                        expectedIdentity: r.expectedIdentity,
                        authentication: r.authentication,
                        retry: r.retry,
                        returnErrorResponse: !0
                    }, r.signal, r.onUploadProgress, void 0, r.assertRequestCurrent)
                } catch (t) {
                    if (t instanceof d.FetchError && !(t.diagnosticError instanceof s.c)) {
                        let r = t.diagnosticError ?? t;
                        t.diagnosticError = (0, s.d)(e, 500, r.message, r)
                    }
                    throw t
                }
                if (r.onResponseHeaders?.(t.headers), !t.ok && !r.returnErrorResponse) throw await (0, d.a)(t, e);
                return t
            }
            stream(e, t) {
                let r, n, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = crypto.randomUUID(),
                    h = new AbortController,
                    {
                        signal: p
                    } = h,
                    f = () => h.abort();
                o.signal?.aborted ? f() : o.signal?.addEventListener("abort", f, {
                    once: !0
                }), this.streamControllers.set(l, h);
                let w = !1,
                    m = e => {
                        if (!w) {
                            w = !0, clearTimeout(r), this.streamControllers.delete(l), o.signal?.removeEventListener("abort", f);
                            try {
                                "fetch-stream-error" === e.type ? o.onError?.(e) : o.onComplete?.(e)
                            } catch (e) {
                                c.a.error("HTTP stream callback failed", {
                                    safe: {},
                                    sensitive: {
                                        error: e
                                    }
                                })
                            } finally {
                                h.abort()
                            }
                        }
                    },
                    g = (e, a) => {
                        clearTimeout(r), e > 0 && (r = setTimeout(() => {
                            p.aborted || m({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: "Network error",
                                errorKind: "network",
                                failureOrigin: "timeout",
                                errorCode: a,
                                diagnostics: (0, s.e)((0, s.d)(t, 400, s.b, Error(`SSE idle timeout after ${e}ms`), a), n)
                            })
                        }, e))
                    };
                return (async () => {
                    let c = "eof";
                    try {
                        if (n = await async function(e, t) {
                                let {
                                    chatgptSse: r,
                                    onResponse: n,
                                    retry: o,
                                    signal: l
                                } = t, c = r?.expectedIdentity == null ? e : {
                                    ...e,
                                    expectedIdentity: r.expectedIdentity
                                }, u = r?.beforeFirstDispatch;
                                null != u && "never" !== c.retry && (c = {
                                    ...c,
                                    retry: !1
                                });
                                for (let e = 0;; e++) {
                                    let t, h;
                                    l.throwIfAborted();
                                    let p = new AbortController,
                                        f = p.signal;
                                    l.addEventListener("abort", () => p.abort(l.reason), {
                                        once: !0,
                                        signal: f
                                    });
                                    let w = !1,
                                        m = (e, r) => {
                                            clearTimeout(t), e > 0 && (t = setTimeout(() => {
                                                let t = new d.FetchError("Network error", 500, r, null, "network", void 0, (0, s.d)(c.url, 400, s.b, Error(`SSE ${"stream_open_timeout"===r?"open":"idle"} timeout after ${e}ms`), r));
                                                t.failureOrigin = "timeout", p.abort(t)
                                            }, e))
                                        };
                                    try {
                                        if (null != r && m(r.initialOpenTimeoutMs ?? 6e4, "stream_open_timeout"), h = await (0, a.kf)((0, i.a)(c, f, void 0, r?.onBeforeRequestStart, r?.assertRequestCurrent, null == o ? void 0 : () => o.refreshRequest(f), r?.refreshHeadersBeforeAuthRetry, u), f), l.throwIfAborted(), null != r && m(r.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), w = h.ok && (null == r || h.headers.get("content-type")?.includes("text/event-stream") === !0), n(h), l.throwIfAborted(), !w) throw await (0, a.kf)((0, d.a)(h, c.url, null != r), f);
                                        return h
                                    } catch (s) {
                                        clearTimeout(t), p.abort(), await h?.body?.cancel().catch(() => void 0), l.throwIfAborted();
                                        let r = w || null != u ? void 0 : o?.getDelayMs(s, e);
                                        if (null == o || null == r) throw s;
                                        await new Promise((e, a) => {
                                            let n = () => {
                                                clearTimeout(t), a(new DOMException("Aborted", "AbortError"))
                                            };
                                            l.addEventListener("abort", n, {
                                                once: !0
                                            }), t = setTimeout(() => {
                                                l.removeEventListener("abort", n), e()
                                            }, r)
                                        }), l.throwIfAborted();
                                        let n = await (0, a.kf)(o.refreshRequest(l), l);
                                        c = {
                                            ...c,
                                            ...n
                                        }
                                    } finally {
                                        clearTimeout(t)
                                    }
                                }
                            }({
                                url: t,
                                method: e,
                                body: o.body,
                                headers: o.headers,
                                expectedIdentity: o.expectedIdentity,
                                authentication: o.authentication
                            }, {
                                chatgptSse: o.chatgptSse,
                                retry: o.retry,
                                signal: p,
                                onResponse: e => {
                                    o.onResponse?.({
                                        type: "fetch-stream-response",
                                        requestId: l,
                                        status: e.status,
                                        headers: (0, a.tg)(e.headers),
                                        isEventStream: e.ok && e.headers.get("content-type")?.includes("text/event-stream") === !0
                                    })
                                }
                            }), w) return;
                        if (p.throwIfAborted(), null != o.chatgptSse && g(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), null == n.body) throw new d.FetchError("Streaming response had no body.", 500, void 0, null, "network");
                        if ("ndjson" === o.format)
                            for await (let e of (0, a.Vj)(n.body, p)) {
                                if (p.aborted) break;
                                o.onEvent?.({
                                    type: "fetch-stream-event",
                                    requestId: l,
                                    data: e
                                })
                            } else {
                                let e = new TextEncoder;
                                for await (let r of (0, a.Xj)(n.body, p, t => {
                                    w || p.aborted || (null != o.chatgptSse && g(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), "[DONE]" === t && (c = "done"), o.onStreamData?.({
                                        eventBytes: e.encode(t).length,
                                        eventCount: +("[DONE]" !== t)
                                    }), "[DONE]" === t && null != o.chatgptSse && m({
                                        type: "fetch-stream-complete",
                                        requestId: l,
                                        reason: "done"
                                    }))
                                }, o.chatgptSse?.parseEventData)) {
                                    if (p.aborted) break;
                                    if (null != o.chatgptSse) {
                                        if ("ping" === r.event) continue;
                                        let e = u.safeParse(r.data);
                                        if (e.success && e.data.error) {
                                            let r = new d.FetchError(JSON.stringify({
                                                error: e.data.error,
                                                error_code: e.data.error_code,
                                                can_retry: e.data.can_retry
                                            }), n.status, e.data.error_code, n.status, void 0, void 0, (0, s.d)(t, 500, e.data.error, Error(String(e.data.error)), e.data.error_code, e.data.can_retry, e.data.error_reason));
                                            throw r.failureOrigin = "server_stream", r
                                        }
                                    }
                                    o.onEvent?.({
                                        type: "fetch-stream-event",
                                        requestId: l,
                                        ...r
                                    })
                                }
                            }
                        if (p.throwIfAborted(), null != o.chatgptSse) {
                            clearTimeout(r), await o.onPrematureTermination?.(), p.throwIfAborted(), m({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: "Network error",
                                errorKind: "network",
                                failureOrigin: "transport",
                                diagnostics: (0, s.e)((0, s.d)(t, 400, s.b, Error("No done event received")), n)
                            });
                            return
                        }
                        m({
                            type: "fetch-stream-complete",
                            requestId: l,
                            reason: c
                        })
                    } catch (e) {
                        if (p.aborted || e instanceof Error && "AbortError" === e.name) m({
                            type: "fetch-stream-complete",
                            requestId: l,
                            reason: "aborted"
                        });
                        else {
                            let r = e instanceof d.FetchError ? e.diagnosticError ?? e : e,
                                i = r;
                            if (null != o.chatgptSse && !(r instanceof s.c) && ((0, s.g)(r) || e instanceof d.FetchError && "network" === e.errorKind)) {
                                let e = r instanceof Error ? r : Error(String(r));
                                i = (0, s.d)(t, 400, s.b, e)
                            }
                            let c = e instanceof d.FetchError ? e.errorKind : (0, a.sg)(e),
                                u = null == o.chatgptSse ? void 0 : (e instanceof d.FetchError ? e.diagnostics : void 0) ?? (0, s.e)(i, n);
                            m({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: e instanceof Error ? e.message : "HTTP stream failed",
                                responseStatus: e instanceof d.FetchError ? e.responseStatus ?? void 0 : void 0,
                                errorCode: e instanceof d.FetchError ? e.errorCode : void 0,
                                failureOrigin: (e instanceof d.FetchError ? e.failureOrigin : void 0) ?? ("network" === c ? "transport" : void 0),
                                canRetry: e instanceof Error ? (0, a.oj)(e.message) : void 0,
                                errorKind: c,
                                diagnostics: u
                            })
                        }
                    } finally {
                        await n?.body?.cancel().catch(() => void 0), o.onTransportClose?.()
                    }
                })().catch(e => {
                    c.a.error("HTTP stream callback failed", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }), l
            }
            cancelStream(e) {
                this.streamControllers.get(e)?.abort()
            }
            async fetchJson(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                return p(await this.fetch(e, t), t?.signal)
            }
            async sendRequest(e, t, r) {
                if (!t.startsWith("vscode://codex/")) return this.fetchJson(t, {
                    ...r,
                    method: e
                });
                let a = crypto.randomUUID(),
                    n = {
                        requestId: a,
                        method: e,
                        url: t,
                        headers: r?.headers,
                        body: r?.body,
                        responsePriority: r?.responsePriority
                    };
                return new Promise((e, t) => {
                    let o = () => {
                        this.pendingRequests.delete(a), r?.signal?.removeEventListener("abort", o), l.a.getInstance().dispatchMessage("cancel-fetch", {
                            requestId: a
                        });
                        let e = r?.signal?.reason;
                        t(e instanceof Error ? e : new DOMException("The operation was aborted", "AbortError"))
                    };
                    if (this.pendingRequests.set(a, {
                            cleanup: () => r?.signal?.removeEventListener("abort", o),
                            resolve: e,
                            reject: t
                        }), r?.signal?.addEventListener("abort", o, {
                            once: !0
                        }), r?.signal?.aborted) return void o();
                    try {
                        r?.assertRequestCurrent?.(), l.a.getInstance().dispatchMessage("fetch", n)
                    } catch (e) {
                        throw this.pendingRequests.delete(a), r?.signal?.removeEventListener("abort", o), e
                    }
                })
            }
        }
        async function p(e, t) {
            let r = null;
            if (204 !== e.status) {
                let a;
                try {
                    a = await e.text()
                } catch (r) {
                    throw t?.throwIfAborted(), new d.FetchError(r instanceof Error ? r.message : "Failed to read response body", r instanceof Error && "AbortError" === r.name ? 499 : 500, void 0, e.status)
                }
                if (a) try {
                    r = JSON.parse(a)
                } catch {
                    throw new d.FetchError("Invalid JSON response", 500, "invalid_json_response", e.status)
                }
            }
            return {
                status: e.status,
                headers: Object.fromEntries(e.headers),
                body: r
            }
        }
        async function f(e) {
            let t = `----codex-upload-${crypto.randomUUID()}`,
                r = new TextEncoder,
                a = (await Promise.all(Array.from(e.entries(), async e => {
                    let [a, n] = e, o = a.replace(/[\r\n"]/g, "");
                    if ("string" == typeof n) return [r.encode(`--${t}\r
Content-Disposition: form-data; name="${o}"\r
\r
${n}\r
`)];
                    let s = n.name.replace(/[\r\n"]/g, "") || "upload";
                    return [r.encode(`--${t}\r
Content-Disposition: form-data; name="${o}"; filename="${s}"\r
Content-Type: ${n.type||"application/octet-stream"}\r
\r
`), await async function(e) {
                        return "function" == typeof e.arrayBuffer ? new Uint8Array(await e.arrayBuffer()) : new Promise((t, r) => {
                            let a = new FileReader;
                            a.onload = () => {
                                a.result instanceof ArrayBuffer ? t(new Uint8Array(a.result)) : r(Error("File upload failed to read file bytes"))
                            }, a.onerror = () => {
                                r(a.error ?? Error("File upload failed to read file bytes"))
                            }, a.readAsArrayBuffer(e)
                        })
                    }(n), r.encode("\r\n")]
                }))).flat();
            a.push(r.encode(`--${t}--\r
`));
            let n = new Uint8Array(a.reduce((e, t) => e + t.byteLength, 0)),
                o = 0;
            for (let e of a) n.set(e, o), o += e.byteLength;
            return {
                bytes: n,
                contentType: `multipart/form-data; boundary=${t}`
            }
        }
    }),
    pkrV: (function(e, t, r) {
        var a = r("GaA7"),
            n = r("xdYK");
        r.d(t, {}, {
            a: function(e) {
                if ((0, n.b)(e)) return !0;
                if (a.appServices?.websitePreviews == null || !URL.canParse(e)) return !1;
                let t = new URL(e);
                return "https:" === t.protocol && !t.username && !t.password && !t.port
            }
        })
    }),
    j0A9: (function(e, t, r) {
        var a = r("ABep"),
            n = r("QosV"),
            o = r("on57"),
            s = r("IPUh"),
            i = r("zd8w"),
            l = r("Wf1j"),
            c = r("oyxz"),
            d = r("Qgfj"),
            u = r("ZtSy"),
            h = r("bf6R"),
            p = r("ikiV"),
            f = r("T1PX"),
            w = r("V8uZ");

        function m(e) {
            let t, r, s = (0, n.c)(10),
                {
                    src: i,
                    width: l,
                    height: c,
                    presentation: d,
                    onError: u
                } = e,
                h = "hero" === d && "h-auto max-h-48 w-full border-b border-subtle object-cover",
                p = "thumbnail" === d && "size-20 rounded-md object-cover",
                f = "standalone" === d && "size-40 rounded-md object-contain";
            return s[0] !== h || s[1] !== p || s[2] !== f ? (t = (0, o.b)("block shrink-0", h, p, f), s[0] = h, s[1] = p, s[2] = f, s[3] = t) : t = s[3], s[4] !== c || s[5] !== u || s[6] !== i || s[7] !== t || s[8] !== l ? (r = (0, a.jsx)("img", {
                className: t,
                alt: "",
                draggable: !1,
                width: l,
                height: c,
                src: i,
                onError: u
            }), s[4] = c, s[5] = u, s[6] = i, s[7] = t, s[8] = l, s[9] = r) : r = s[9], r
        }
        let g = (0, d.f)({
            openWebsite: {
                id: "codex.websitePreview.openWebsite",
                defaultMessage: "Open website",
                description: "Accessible label for opening the previewed website"
            }
        });
        r.d(t, {}, {
            a: function(e) {
                let t, r, d, b, y, v, x, _, E, k, I, C = (0, n.c)(39),
                    {
                        href: T,
                        data: S,
                        openLink: R,
                        actions: A,
                        loadRemoteIcon: j
                    } = e,
                    q = void 0 !== j && j,
                    O = (0, l.a)(),
                    P = (0, f.a)(),
                    [U, L] = (0, i.useState)(null);
                C[0] !== T ? (t = URL.canParse(T) && new URL(T).hostname || T, C[0] = T, C[1] = t) : t = C[1];
                let N = t,
                    F = S?.status === "ready" && S.image?.dataUrl !== U ? S.image : null,
                    B = null != F && F.width / F.height < 1.2,
                    G = null != F && B && S?.status === "ready" && null == S.title && null == S.description,
                    $ = S?.status === "ready" && (null != S.title || null != S.description || null != F);
                C[2] !== T || C[3] !== q ? (r = (0, a.jsx)(p.a, {
                    className: "size-4 shrink-0 text-secondary",
                    href: T,
                    loadRemote: q
                }), C[2] = T, C[3] = q, C[4] = r) : r = C[4], C[5] !== A || C[6] !== N || C[7] !== T || C[8] !== O ? (d = null != A ? (0, a.jsx)(u.a, {
                    className: "min-w-0 flex-1 truncate text-xs",
                    "aria-label": O.formatMessage(g.openWebsite),
                    appearance: "secondary",
                    href: T,
                    initiator: "markdown_link_click",
                    underline: "hover",
                    children: T
                }) : (0, a.jsx)("span", {
                    className: "min-w-0 flex-1 truncate text-xs text-secondary",
                    children: N
                }), C[5] = A, C[6] = N, C[7] = T, C[8] = O, C[9] = d) : d = C[9], C[10] !== A || C[11] !== T || C[12] !== O || C[13] !== R ? (b = null != A ? (0, a.jsx)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: A
                }) : R ?? (0, a.jsxs)(u.a, {
                    className: "flex shrink-0 items-center gap-1 text-xs",
                    "aria-label": O.formatMessage(g.openWebsite),
                    href: T,
                    initiator: "markdown_link_click",
                    children: [(0, a.jsx)(c.a, {
                        id: "codex.websitePreview.open",
                        defaultMessage: "Open",
                        description: "Link to open a website from its hover preview"
                    }), (0, a.jsx)(h.Cf, {})]
                }), C[10] = A, C[11] = T, C[12] = O, C[13] = R, C[14] = b) : b = C[14], C[15] !== r || C[16] !== d || C[17] !== b ? (y = (0, a.jsxs)("div", {
                    className: "flex h-toolbar shrink-0 items-center gap-2 px-3.5 select-none",
                    children: [r, d, b]
                }), C[15] = r, C[16] = d, C[17] = b, C[18] = y) : y = C[18], C[19] !== S ? (v = null == S && (0, a.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    children: (0, a.jsx)(c.a, {
                        id: "codex.websitePreview.loading",
                        defaultMessage: "Loading preview…",
                        description: "Accessible status while website preview content loads"
                    })
                }), C[19] = S, C[20] = v) : v = C[20];
                let D = $ ? "auto" : 0;
                return C[21] !== D ? (x = {
                    height: D
                }, C[21] = D, C[22] = x) : x = C[22], C[23] !== P ? (_ = P ? {
                    duration: 0
                } : w.a, C[23] = P, C[24] = _) : _ = C[24], C[25] !== S || C[26] !== $ || C[27] !== F || C[28] !== G || C[29] !== B ? (E = $ && (0, a.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-y-auto overscroll-contain border-t border-subtle",
                    children: [null != F && !B && (0, a.jsx)(m, {
                        src: F.dataUrl,
                        width: F.width,
                        height: F.height,
                        presentation: "hero",
                        onError: () => L(F.dataUrl)
                    }, F.dataUrl), (null != S.title || null != S.description || B) && (0, a.jsxs)("div", {
                        className: (0, o.b)("flex gap-2.5 px-3.5 py-4", null == S.description ? "items-center" : "items-start", G && "justify-center"),
                        children: [null != F && B && (0, a.jsx)(m, {
                            src: F.dataUrl,
                            width: F.width,
                            height: F.height,
                            presentation: G ? "standalone" : "thumbnail",
                            onError: () => L(F.dataUrl)
                        }, F.dataUrl), (null != S.title || null != S.description) && (0, a.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-1",
                            children: [null != S.title && (0, a.jsx)("h3", {
                                className: "m-0 line-clamp-2 text-sm leading-snug font-semibold text-pretty break-words",
                                children: S.title
                            }), null != S.description && (0, a.jsx)("p", {
                                className: "m-0 line-clamp-2 text-sm leading-snug text-pretty break-words text-secondary",
                                children: S.description
                            })]
                        })]
                    })]
                }), C[25] = S, C[26] = $, C[27] = F, C[28] = G, C[29] = B, C[30] = E) : E = C[30], C[31] !== _ || C[32] !== E || C[33] !== x ? (k = (0, a.jsx)(s.a.div, {
                    className: "flex min-h-0 flex-col overflow-hidden",
                    initial: !1,
                    animate: x,
                    transition: _,
                    children: E
                }), C[31] = _, C[32] = E, C[33] = x, C[34] = k) : k = C[34], C[35] !== k || C[36] !== y || C[37] !== v ? (I = (0, a.jsxs)("div", {
                    className: "flex max-h-[min(--spacing(80),var(--radix-tooltip-content-available-height,--spacing(80)))] min-h-0 w-90 max-w-full flex-col overflow-hidden rounded-xl text-start text-sm font-normal",
                    children: [y, v, k]
                }), C[35] = k, C[36] = y, C[37] = v, C[38] = I) : I = C[38], I
            }
        })
    }),
    YNPO: (function(e, t, r) {
        r.d(t, {
            a: () => b
        });
        var a = r("ABep"),
            n = r("QosV"),
            o = r("BolX"),
            s = r("zd8w"),
            i = r("CqQF"),
            l = r("OWtl"),
            c = r("Bbed"),
            d = r("j0A9"),
            u = r("xdYK"),
            h = r("n6oM");
        let p = (0, c.a)(async () => (await r.e(996274).then(r.bind(r, "SteF"))).SlackPreviewContent, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(d.a, {
                ...e,
                data: {
                    status: "unavailable"
                }
            })
        });

        function f(e) {
            let t, r, o, i = (0, n.c)(6);
            i[0] !== e ? ({
                hostId: r,
                ...t
            } = e, i[0] = e, i[1] = t, i[2] = r) : (t = i[1], r = i[2]);
            let l = void 0 === r ? "local" : r;
            return i[3] !== l || i[4] !== t ? (o = (0, u.b)(t.href) ? (0, a.jsx)(s.Suspense, {
                fallback: (0, a.jsx)(d.a, {
                    ...t,
                    data: void 0
                }),
                children: (0, a.jsx)(p, {
                    ...t,
                    hostId: l
                })
            }) : (0, a.jsx)(w, {
                ...t
            }), i[3] = l, i[4] = t, i[5] = o) : o = i[5], o
        }

        function w(e) {
            let t, r = (0, n.c)(3),
                s = (0, o.x)(h.b, e.href);
            return r[0] !== s || r[1] !== e ? (t = (0, a.jsx)(d.a, {
                ...e,
                data: s
            }), r[0] = s, r[1] = e, r[2] = t) : t = r[2], t
        }
        var m = r("dDbp"),
            g = r("xOEs");

        function b(e) {
            let t, r, c, d, u, h, p, w = (0, n.c)(29),
                {
                    href: b,
                    hostId: y,
                    children: v,
                    delayDuration: x,
                    triggerElement: _,
                    tooltipId: E,
                    onOpenChange: k,
                    openLink: I,
                    actions: C,
                    loadRemoteIcon: T,
                    side: S
                } = e,
                R = void 0 === x ? 700 : x,
                A = (0, o.y)(l.a),
                j = (0, s.useRef)(null),
                [q, O] = (0, s.useState)("bottom"),
                P = S ?? q;
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => j.current?.(), w[0] = t) : t = w[0], w[1] !== y || w[2] !== b ? (r = [b, y], w[1] = y, w[2] = b, w[3] = r) : r = w[3], (0, s.useEffect)(t, r), w[4] !== R ? (c = () => R, w[4] = R, w[5] = c) : c = w[5];
            let U = null != _,
                L = null != _ || void 0;
            w[6] !== y || w[7] !== b || w[8] !== A || w[9] !== _ ? (d = e => {
                j.current?.(), null == _ && "touch" !== e.pointerType && 0 === e.buttons && (O((0, m.a)(e.currentTarget)), j.current = (0, g.a)(A, b, e.currentTarget, {
                    hostId: y
                }))
            }, w[6] = y, w[7] = b, w[8] = A, w[9] = _, w[10] = d) : d = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (u = () => j.current?.(), w[11] = u) : u = w[11], w[12] !== C || w[13] !== y || w[14] !== b || w[15] !== T || w[16] !== I ? (h = (0, a.jsx)(f, {
                href: b,
                hostId: y,
                openLink: I,
                actions: C,
                loadRemoteIcon: T
            }, b), w[12] = C, w[13] = y, w[14] = b, w[15] = T, w[16] = I, w[17] = h) : h = w[17];
            let N = v ?? null;
            return w[18] !== k || w[19] !== P || w[20] !== N || w[21] !== c || w[22] !== U || w[23] !== L || w[24] !== d || w[25] !== h || w[26] !== E || w[27] !== _ ? (p = (0, a.jsx)(i.a, {
                align: "start",
                cloneCustomTrigger: !0,
                closeOnTriggerClick: !0,
                getDelayDuration: c,
                disableHoverOpen: U,
                interactive: !0,
                keyboardNavigation: !0,
                open: L,
                onOpenChange: k,
                onPointerEnter: d,
                onPointerLeave: u,
                scaleAvailableSizeWithZoom: !0,
                selectable: !0,
                side: P,
                sideOffset: 4,
                tooltipContent: h,
                tooltipMaxWidth: "min(22.5rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
                tooltipId: E,
                triggerElement: _,
                variant: "rich",
                children: N
            }), w[18] = k, w[19] = P, w[20] = N, w[21] = c, w[22] = U, w[23] = L, w[24] = d, w[25] = h, w[26] = E, w[27] = _, w[28] = p) : p = w[28], p
        }
    }),
    dDbp: (function(e, t, r) {
        r.d(t, {}, {
            a: function(e) {
                let {
                    top: t,
                    bottom: r
                } = e.getBoundingClientRect(), a = e.ownerDocument.documentElement.clientHeight - r;
                return a < 384 && t > a ? "top" : "bottom"
            }
        })
    }),
    xdYK: (function(e, t, r) {
        function a(e) {
            if (!URL.canParse(e)) return null;
            let t = new URL(e);
            return !("https:" === t.protocol && !t.username && !t.password && !t.port && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.enterprise)?\.slack\.com$/u.test(t.hostname)) || ["www.slack.com", "api.slack.com", "status.slack.com"].includes(t.hostname) ? null : t
        }
        r.d(t, {}, {
            a: function(e) {
                let t = a(e);
                if (null == t || "app.slack.com" === t.hostname) return null;
                let r = /^\/team\/([UW][A-Z0-9]+)\/?$/u.exec(t.pathname);
                if (null != r) return {
                    kind: "profile",
                    hostname: t.hostname,
                    userId: r[1]
                };
                let n = /^\/archives\/([CDG][A-Z0-9]+)\/p(\d{10})(\d{6})\/?$/u.exec(t.pathname);
                if (null == n) return null;
                let o = `${n[2]}.${n[3]}`,
                    s = t.searchParams.get("thread_ts") ?? o;
                return /^\d{10}\.\d{6}$/u.test(s) ? {
                    kind: "message",
                    hostname: t.hostname,
                    channelId: n[1],
                    messageTs: o,
                    threadTs: s
                } : null
            },
            b: function(e) {
                return null != a(e)
            }
        })
    }),
    n6oM: (function(e, t, r) {
        r.d(t, {
            a: () => w,
            b: () => f
        });
        var a = r("BolX"),
            n = r("GaA7"),
            o = r("OWtl"),
            s = r("DNHP"),
            i = r("mkNg"),
            l = r("YwDZ");
        let c = (0, a.i)(o.a, u, (e, t) => {
                let {
                    set: r
                } = t, a = () => r(u(e));
                return a(), n.appServices?.browserHost == null ? void 0 : i.a.subscribe(a)
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e?.conversationId === t?.conversationId && e?.browserTabId === t?.browserTabId && e?.pageTitle === t?.pageTitle
            }),
            d = {
                preview$: (0, a.d)(o.a, (e, t) => {
                    let {
                        get: r
                    } = t, a = r(c, e);
                    if (null == a) return null;
                    let {
                        data: n,
                        isPending: o
                    } = r(l.a, {
                        conversationId: a.conversationId,
                        browserTabId: a.browserTabId
                    });
                    return null != n ? {
                        status: "ready",
                        title: a.pageTitle || null,
                        description: null,
                        image: n
                    } : o ? void 0 : null
                }, {
                    autoDispose: !0
                }),
                prefetch: async function(e, t) {
                    let r = e.get(c, t);
                    return null != r && await e.query.getOrFetch(l.a, {
                        conversationId: r.conversationId,
                        browserTabId: r.browserTabId
                    }) != null
                }
            };

        function u(e) {
            if (n.appServices?.browserHost == null) return null;
            let t = (0, s.pg)(e);
            return i.a.getOpenTabs().find(e => {
                if ((0, s.pg)(e.url) !== t) return !1;
                let r = i.a.getSnapshot(e.conversationId, e.browserTabId);
                return r?.tabType === s._.WEB && !r.isLoading && !r.isSuspended && i.a.pages.getHost(e.conversationId, e.browserTabId)?.getCaptureViewportSize() != null
            }) ?? null
        }
        var h = r("xdYK");
        let p = (0, a.q)(o.a, e => {
                let t = new URL(e);
                return t.hash = "", {
                    queryKey: ["website-preview", t.href],
                    staleTime: e => e.state.data?.status === "ready" && null != e.state.data.image ? 3e5 : 3e4,
                    gcTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                    queryFn: async () => {
                        try {
                            return await n.appServices?.websitePreviews?.get({
                                url: t.href
                            }) ?? {
                                status: "unavailable"
                            }
                        } catch {
                            return {
                                status: "unavailable"
                            }
                        }
                    }
                }
            }),
            f = (0, a.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null != d) {
                    let t = r(d.preview$, e);
                    if (null !== t) return t
                }
                return r(p, e).data
            }, {
                autoDispose: !0
            });
        async function w(e, t) {
            (0, h.b)(t) || await d?.prefetch(e, t) || await e.query.getOrFetch(p, t)
        }
    }),
    xOEs: (function(e, t, r) {
        var a = r("xdYK"),
            n = r("n6oM");
        r.d(t, {}, {
            a: function(e, t, o) {
                let {
                    hostId: s = "local",
                    pullRequest: i
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = new AbortController, c = () => {
                    clearTimeout(d), l.abort()
                }, d = setTimeout(() => {
                    c(), o.isConnected && (async function(e, t, o, s) {
                        if (null != s) {
                            let {
                                prefetchGitHubPullRequestPreview: t
                            } = await r.e(330528).then(r.bind(r, "CXhr"));
                            await t(e, o, s)
                        } else if ((0, a.b)(t)) {
                            let {
                                prefetchSlackPreview: a
                            } = await r.e(147245).then(r.bind(r, "dmHJ"));
                            await a(e, t, o)
                        } else await (0, n.a)(e, t)
                    })(e, t, s, i).catch(() => {})
                }, 200);
                for (let e of ["pointerleave", "pointerdown", "click", "dragstart"]) o.addEventListener(e, c, {
                    signal: l.signal
                });
                return o.ownerDocument.addEventListener("keydown", e => {
                    "Escape" === e.key && c()
                }, {
                    capture: !0,
                    signal: l.signal
                }), c
            }
        })
    }),
    QqEQ: (function(e, t, r) {
        var a = r("ABep"),
            n = r("QosV"),
            o = r("HlCq"),
            s = r("slpy"),
            i = r("BolX"),
            l = r("zd8w"),
            c = r("oyxz"),
            d = r("SZ0q"),
            u = r("rGfR"),
            h = r("qPb9"),
            p = r("s7gZ"),
            f = r("Sm6l"),
            w = r("WJLZ"),
            m = r("kKbQ"),
            g = r("FrrB"),
            b = r("Bbed"),
            y = r("QIeM"),
            v = r("GGR1"),
            x = r("zOE4"),
            _ = r("aSkF"),
            E = r("Y94G"),
            k = r("OWtl"),
            I = r("tW82"),
            C = r("sU1J"),
            T = r("YhE1"),
            S = r("qixt"),
            R = r("HgkB"),
            A = r("snrm");
        let j = (0, b.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(284470), r.e(100643), r.e(355084), r.e(508414), r.e(40758), r.e(551453), r.e(297947)]).then(r.bind(r, "HpTl"))).PageEditor, {
            fallback: (0, a.jsx)(x.LoadingPage, {}),
            errorFallback: (0, a.jsx)(g.a, {
                title: (0, a.jsx)(c.a, {
                    id: "codex.canvas.inlinePage.loadError",
                    defaultMessage: "Couldn’t load this page",
                    description: "Error when the embedded Page editor cannot load in Canvas"
                }),
                actions: (0, a.jsx)(f.a, {
                    color: "secondary",
                    onClick: () => window.location.reload(),
                    children: (0, a.jsx)(c.a, {
                        id: "codex.canvas.inlinePage.reload",
                        defaultMessage: "Reload",
                        description: "Reload the window to recover the embedded Page editor"
                    })
                })
            })
        });

        function q(e) {
            return (0, a.jsx)(j, {
                ...e
            })
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, f, g, b, x, j, O, P, U, L, N, F, B, G, $ = (0, n.c)(23),
                    {
                        children: D,
                        loadingFallback: M
                    } = e,
                    [H, z] = (0, l.useState)(null);
                (0, E.c)("core_providers.render"), $[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {}), c = (0, a.jsx)(w.a, {}), f = (0, a.jsx)(d.a, {}), g = (0, a.jsx)(p.a, {}), b = (0, a.jsx)(R.a, {}), x = (0, a.jsx)(S.c, {}), j = (0, a.jsx)(u.a, {}), O = (0, a.jsx)(m.a, {}), P = (0, a.jsx)(y.a, {}), r = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(T.a, {})
                }), $[0] = t, $[1] = r, $[2] = c, $[3] = f, $[4] = g, $[5] = b, $[6] = x, $[7] = j, $[8] = O, $[9] = P) : (t = $[0], r = $[1], c = $[2], f = $[3], g = $[4], b = $[5], x = $[6], j = $[7], O = $[8], P = $[9]), $[10] !== M ? (U = void 0 === M ? (0, a.jsx)(v.a, {
                    debugName: "App content"
                }) : M, $[10] = M, $[11] = U) : U = $[11];
                let W = H ?? void 0;
                return $[12] !== D ? (L = (0, a.jsx)(s.a.Provider, {
                    children: (0, a.jsx)(_.a, {
                        value: q,
                        children: D
                    })
                }), $[12] = D, $[13] = L) : L = $[13], $[14] !== W || $[15] !== L ? (N = (0, a.jsx)(o.a, {
                    radixPortalContainer: W,
                    children: L
                }), $[14] = W, $[15] = L, $[16] = N) : N = $[16], $[17] !== U || $[18] !== N ? (F = (0, a.jsx)(l.Suspense, {
                    fallback: U,
                    children: N
                }), $[17] = U, $[18] = N, $[19] = F) : F = $[19], $[20] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, a.jsx)("div", {
                    ref: z,
                    className: "pointer-events-none fixed inset-0 z-60 zoom-adjusted-viewport h-[calc(100dvh/var(--codex-window-zoom))] contain-layout [&>*]:pointer-events-auto"
                }), $[20] = B) : B = $[20], $[21] !== F ? (G = (0, a.jsx)(h.a, {
                    children: (0, a.jsx)(A.a, {
                        children: (0, a.jsx)(I.a, {
                            children: (0, a.jsxs)(i.b, {
                                scope: k.a,
                                children: [t, c, f, g, b, x, j, O, P, r, F, B]
                            })
                        })
                    })
                }), $[21] = F, $[22] = G) : G = $[22], G
            }
        })
    })
};