export const __rspack_esm_ids = [673108];
export const __webpack_modules__ = {
    gi6X: (function(e, t, r) {
        var a = r("xnQm"),
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
                            [a.cc]: e
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
            a: () => F,
            b: () => ee,
            browserAppServer: () => er,
            c: () => et,
            d: () => eh,
            e: () => ed,
            f: () => eT,
            g: () => en
        });
        var n = r("HIjy"),
            o = r("VH4X"),
            s = r("xnQm"),
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
            k = r("T9J2"),
            I = r("h4h6"),
            E = r("BrCP"),
            T = r("C2tN"),
            C = r("hXwB"),
            S = r("YCTv"),
            R = r("KHWn"),
            A = r("ZhRn"),
            j = r("tFDh"),
            O = r("NGML"),
            q = r("WFY2"),
            P = r("kpIY"),
            U = r("yiHb"),
            L = r("rhkM"),
            N = r("Rz6g"),
            $ = r("y3uJ"),
            G = r("eShZ");
        let B = "home-composer-mode-v1",
            D = "codex.browser.projectlessThreadState",
            F = "/codex/browser/projectless",
            M = c.object({
                code: c.string().optional(),
                error: c.object({
                    code: c.string().optional()
                }).optional()
            }),
            z = c.object({
                detail: M.optional(),
                error: M.optional()
            }),
            W = c.strictObject({
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
            H = new Set(["get-global-state", "set-global-state"]);
        [...Object.keys(o.e).filter(o.D).map(R.c)];
        let J = new Set(["archive-thread", "unarchive-thread", "persisted-atom-sync-request", "persisted-atom-update", "persisted-atom-reset", "open-in-browser", "open-in-main-window", "fetch", "cancel-fetch", "mcp-request", "thread-prewarm-start", "mcp-response", "mcp-notification", "codex-app-server-restart"]),
            K = new Map,
            Y = new Map,
            Q = new Map,
            V = new Map,
            Z = new Map,
            X = new Map,
            ee = new _.a({
                dispatchHostMessage: es,
                getApiBaseUrl: h.a
            }),
            et = new k.a({
                readEnvironmentFile: e => er.readEnvironmentFile(e),
                getClientOrThrow: e => ee.getClientOrThrow(e)
            });
        (0, L.b)(e => {
            let t = (0, s.ug)(e);
            return null == t ? ee.getClientOrThrow(e) : er.getGitExecutionHost(t)
        });
        let er = new v.a({
            createSocket: v.b,
            dispatchHostMessage: es,
            hostId: "local"
        });
        (0, C.c)((e, t) => er.sendDirectRequest(e, t, e => e));
        let ea = new s.I,
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
                                let r = Z.get(t);
                                null != r && (window.clearTimeout(r), Z.delete(t))
                            }
                            return;
                            case "persisted-atom-sync-request":
                                return void async function() {
                                    let e = {
                                        ...await (0, x.d)(x.a)
                                    };
                                    {
                                        let t = e[B] ?? (0, P.p)(P.a)[B],
                                            r = await (0, j.a)("codex_composer_mode", async () => {
                                                let e = (0, O.c)("codex_composer_mode", t) ?? N.b.safeParse((0, A.a)("oai-chat-surface-mode")).data;
                                                if (void 0 !== e) return e;
                                                try {
                                                    return N.b.safeParse(JSON.parse(window.localStorage.getItem("oai/apps/tpp/chat-surface-mode") ?? "null")).data
                                                } catch {
                                                    return
                                                }
                                            }, async () => {
                                                e[B] = void 0, await (0, x.g)(x.a, B, void 0)
                                            });
                                        void 0 === r || void 0 !== (0, A.a)("codex_composer_mode") || Object.hasOwn(e, B) || (e[B] = r, await (0, x.g)(x.a, B, r))
                                    }
                                    es({
                                        type: "persisted-atom-sync",
                                        state: e
                                    })
                                }();
                            case "persisted-atom-update": {
                                if (e.key === B) {
                                    e.deleted && (0, A.c)("codex_composer_mode", void 0), (0, j.a)("codex_composer_mode", async () => e.value, () => (0, x.g)(x.a, e.key, void 0));
                                    return
                                }
                                let t = X.has(e.key) || Object.values(e.recordUpdate?.entries ?? {}).some(e => e?.expectedValue !== void 0 || null != e && "value" in e && e.createOnly) ? Symbol() : void 0;
                                null != t && X.set(e.key, t), (0, x.g)(x.a, e.key, e.deleted ? void 0 : e.value, e.recordUpdate).then(async () => {
                                    if (e.key === n.a || null != t) {
                                        let r = await (0, x.e)(x.a, e.key);
                                        if (null != t) {
                                            if (X.get(e.key) !== t) return;
                                            X.delete(e.key)
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
                                X.clear(), (0, A.c)("codex_composer_mode", void 0), (0, x.c)(x.a);
                                return;
                            case "open-in-browser":
                                return void
                                function(e, t, r) {
                                    let a = (0, g.b)(e) ?? e;
                                    if ((0, s.fi)(a)) return window.location.assign(a);
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
                                                if (r = o, H.has(r)) {
                                                    let e, r = (e = window, "function" == typeof e.__codexChromeExtensionHostFetch ? e.__codexChromeExtensionHostFetch : null);
                                                    if (null != r) {
                                                        let e = function(e) {
                                                            if (null != e) return JSON.parse(e)
                                                        }(t);
                                                        if (a = o, n = e, "get-global-state" !== a && "set-global-state" !== a || null != n && "object" == typeof n && "key" in n && (n.key === s.fc.THREAD_PROJECT_ASSIGNMENTS || n.key === s.fc.PROJECTLESS_THREAD_IDS)) return r(o, {
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
                                                                if (e === S.a && a === s.fc.QUEUED_FOLLOW_UPS) throw Error("Use the queued follow-ups service to write the queue");
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
                                        eE(e.requestId, 501, `Browser host does not support fetch URL: ${e.url}`, null)
                                    } catch (t) {
                                        if (n.signal.aborted || null != (a = t) && "object" == typeof a && "AbortError" === a.name) return void eE(e.requestId, 499, t instanceof Error ? t.message : "Browser host fetch canceled", null);
                                        eE(e.requestId, 500, t instanceof Error ? t.message : "Browser host fetch failed", null, eT(t))
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
                                    null != r && Q.set(`${e.hostId}:${e.request.id}`, r)
                                } else "thread/unarchive" === e.request.method && V.set(`${e.hostId}:${e.request.id}`, `${e.hostId}:${e.request.params.threadId}`);
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
                                                if (e?.source === "token") return (0, f.clearBrowserAuth)(), await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481)]).then(r.bind(r, "rCBi")).then(e => {
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
                                                }] = await Promise.all([Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(226913)]).then(r.bind(r, "jEww")), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(226913)]).then(r.bind(r, "OrNX"))]), n = new AbortController;
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
            (0, T.a)()?.tabs, t = e, window.open(t, "_blank", "noopener,noreferrer")
        }

        function es(e) {
            if ("mcp-response" === e.type) {
                var t;
                let r, a, n = `${e.hostId}:${e.message.id}`,
                    o = Q.get(n);
                null != o && (Q.delete(n), null == e.message.error && (t = o, r = `${t.hostId}:${t.conversationId}`, null != (a = Z.get(r)) && window.clearTimeout(a), Z.set(r, window.setTimeout(() => {
                    Z.delete(r), Y.delete(r), (async function(e) {
                        let t = ee.getClient(e.hostId);
                        if (null == t) return;
                        let {
                            worktreeGitRoot: r
                        } = await (0, U.a)("git").request({
                            method: "resolve-worktree-for-thread",
                            params: {
                                cwd: (0, s.Se)(e.cwd),
                                conversationId: e.conversationId,
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_archive_cleanup"
                            }
                        });
                        if (null == r) return;
                        let a = await (0, s.mf)({
                            archivedThreadId: e.conversationId,
                            listThreads: t.listThreads.bind(t),
                            worktreeRoot: r
                        });
                        if (null != a) return void await (0, U.a)("git").request({
                            method: "set-worktree-owner-thread",
                            params: {
                                worktree: r,
                                conversationId: (0, s.Oe)(a.id),
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_set_owner_thread"
                            }
                        });
                        let n = ee.getRemoteConnections().find(t => t.hostId === e.hostId);
                        (0, s.Eh)(n?.appServerVersion, "threadAttachmentOwners") && await (0, s.vh)({
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
                        q.a.warning("Failed to clean up an archived remote worktree", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    })
                }, s.vd))));
                let i = V.get(n);
                if (null != i && (V.delete(n), null == e.message.error)) {
                    let e = Z.get(i);
                    null != e && (window.clearTimeout(e), Z.delete(i))
                }
            }
            window.dispatchEvent(new MessageEvent("message", {
                data: e,
                origin: window.location.origin,
                source: window
            }))
        }

        function ei(e) {
            let t = (0, I.a)(e) ?? (0, E.a)(e);
            if (null != t) return el((0, h.a)(), t);
            if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("data:")) return (0, y.b)(e);
            if (e.startsWith("/")) {
                let t = (0, h.a)();
                return "/__codex-api" === e || e.startsWith("/__codex-api/") || t.startsWith("/") && (e === t || e.startsWith(`${t}/`)) ? (0, y.b)(new URL(e, window.location.origin).toString()) : el(t, e)
            }
            return null
        }

        function el(e, t) {
            let r = (0, y.b)((0, s.Ii)(e, t));
            return e.startsWith("/") ? new URL(r, window.location.origin).toString() : r
        }

        function ec(e, t) {
            if (null == t || e_(e, "content-type")) return;
            let r = t.trim();
            if (r.startsWith("{") || r.startsWith("[")) try {
                JSON.parse(t), ek(e, "Content-Type", "application/json")
            } catch {}
        }
        async function ed(e) {
            var t, r;
            let a;
            if (null != e.hostId && "local" !== e.hostId) return et.createProjectlessThreadPaths(e);
            let n = await async function() {
                let e = await (0, x.e)(D, "nextThreadNumber"),
                    t = "number" == typeof e ? e : 1;
                return await (0, x.g)(D, "nextThreadNumber", t + 1), t
            }(), o = e.directoryName?.trim() || (t = e.prompt ?? null, r = n, a = t?.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "thread", `${String(r).padStart(4,"0")}-${a}`), s = `${F}/${o}`, i = !1 !== e.createSplitDirectories ? `${s}/output` : s;
            return {
                cwd: !1 !== e.createSplitDirectories ? `${s}/workspace` : s,
                outputDirectory: i,
                workspaceRoot: s
            }
        }

        function eu(e) {
            for (let t of Object.keys(e))["authorization", "chatgpt-account-id", "x-openai-actor-authorization", "x-openai-authorization", "x-openai-locked-chats-pin"].includes(t.toLowerCase()) && delete e[t]
        }
        async function eh(e, t, r, a, n) {
            var o;
            let i, l = "anonymous" === t.authentication,
                c = l ? function(e) {
                    let t = ei(e);
                    if (null == t) throw Error("Unsupported anonymous API URL");
                    let r = new URL(t, window.location.origin);
                    if (r.origin !== window.location.origin || !/^\/(?:backend-api|__codex-api|public-api)\//.test(r.pathname)) throw Error("Unsupported anonymous API URL");
                    return r.pathname.startsWith("/__codex-api/public-api/") || (r.pathname = r.pathname.replace(/^\/(?:backend-api|__codex-api)\//, "/backend-anon/")), r.href
                }(e) : ei(e);
            if (null == c) throw Error("Browser API URL is not supported.");
            let g = (0, f.isBrowserGuestChatSession)(),
                b = !l && g ? (0, h.getBrowserGuestChatRequestUrl)(c, t.method) : null,
                v = b ?? c,
                x = {
                    ...t.headers
                },
                _ = (0, s.Ge)(x),
                k = (0, s.Fe)(x);
            if (null != b && (null != _ || e_(x, "authorization") || e_(x, "chatgpt-account-id"))) throw new DOMException("Guest Chat identity changed", "AbortError");
            let I = t.body;
            if (ec(x, "string" == typeof I ? I : void 0), l) {
                if (null != t.expectedIdentity || null != _) throw Error("Anonymous requests cannot carry an authenticated identity");
                eu(x)
            }
            let E = l || null != b ? "notNeeded" : function(e) {
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
                            return ("http:" === a.protocol || "https:" === a.protocol) && (r = a, !!(null != (n = (0, y.a)()) && ey(r, new URL(n)) || ey(r, new URL((0, h.a)(), window.location.origin)) || ey(r, new URL("/__codex-api", window.location.origin)) || eg(a) || a.origin === window.location.origin && ("/api/identity/service/biometric-factors" === a.pathname || "/api/identity/service/biometric-factors/FACE" === a.pathname || "/api/identity/service/biometric-factors/VOICE" === a.pathname || /^\/api\/identity\/service\/biometric-factors\/(FACE|VOICE)\/[^/]+$/.test(a.pathname))) || !!(t && ey(a, new URL((0, s.Ii)((0, h.a)(), "/public-api/"), window.location.origin)) || "chatgpt.com" === a.hostname.toLowerCase() && ev(a.pathname, "/backend-api")) || !!eb(e) && t)
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
                    authRequested: k,
                    chromeExtensionBrowserApiAuth: null,
                    expectedAccountId: _,
                    headers: x,
                    method: t.method,
                    url: v,
                    body: I
                }),
                T = E instanceof Promise ? await E : E;
            if ("missing" === T) {
                let t = !g && (0, f.maybeRedirectToBrowserChatGptLogin)();
                throw new G.a(t ? "Redirecting to ChatGPT login." : `Cannot fetch ${e} without ChatGPT auth.`, 401, void 0, null)
            }
            for (let [e, r] of(t.signal?.throwIfAborted(), ep(x, t.expectedIdentity), a?.(), Object.entries(l ? {} : (0, w.a)(v)))) ek(x, e, r);
            let C = {
                url: v,
                headers: x,
                body: I
            };
            r?.(C), ex(C.headers), l && eu(C.headers);
            let S = null != b || "attached" === T ? "include" : void 0;
            l ? S = "omit" : eg(new URL(v)) && (S = "same-origin");
            let R = {
                method: t.method,
                headers: C.headers,
                body: C.body,
                credentials: S,
                ...l ? {
                    referrerPolicy: "no-referrer"
                } : {},
                keepalive: t.keepalive,
                cache: t.cache,
                redirect: l ? "error" : t.redirect,
                signal: t.signal
            };
            "POST" === t.method.toUpperCase() && v === ei("/payments/checkout") && new URL(v).origin === window.location.origin && (R.referrerPolicy = "same-origin");
            let A = (0, f.getBrowserChatGptAuthGeneration)(),
                j = await (0, $.a)(v, R, "initial");
            if (l) return j;
            let O = "never" === t.retry || "POST" === t.method.toUpperCase() && new URL(v).pathname.endsWith(s.M);
            if (403 === j.status) {
                let e = await (0, m.a)(j, Object.fromEntries(new Headers(R.headers)), A);
                if (null != e) return es({
                    type: "personal-workspace-access-blocked",
                    ...e
                }), j
            }
            let q = 403 === j.status && !(0, G.d)(j.headers) && "GET" === t.method.toUpperCase() && v === ei("/accounts/check/v4-2023-04-27") && !(0, u.a)(await (0, G.b)(j.clone(), v));
            if (null != b || 401 !== j.status && !q || O || ew(t.method, v, I) && ("attached" !== T || !["/model_first_landings/resolve_message", "/widget_server_action/public", "/share/post"].some(e => new URL(v).pathname === new URL(el((0, h.a)(), e), window.location.origin).pathname)) || "attached" !== T) return j;
            let P = "POST" === t.method.toUpperCase() && v === ei("/accounts/data_export"),
                U = await ef(j);
            if (q && "invalid_workspace_selected" === U || P && ("reauth_required" === (o = U) || "phone_verification_required" === o)) return j;
            let L = new Headers(R.headers).get("authorization")?.replace(/^Bearer /i, "");
            if (null == L) return (0, f.maybeRedirectToBrowserChatGptLogin)(), j;
            let N = {
                accessToken: L,
                method: t.method,
                path: new URL(v).pathname,
                signal: t.signal
            };
            if ("token_expired" !== U && !q) return ("expired_session_key" === U || "token_invalidated" === U || "token_revoked" === U) && await (0, f.handleBrowserChatGptSessionExpired)({
                ...N,
                errorCode: U
            }), j;
            let B = await (0, f.recoverBrowserChatGptAuth)({
                ...N,
                reason: q ? "account_bootstrap_forbidden" : "token_expired"
            });
            if (t.signal?.throwIfAborted(), null != B.auth || "session_expired" !== B.reason || q || (0, f.isBrowserWorkspaceSwitchPending)() || B.authGeneration !== (0, f.getBrowserChatGptAuthGeneration)() || (0, p.b)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_EXPIRED_SESSION"), null == B.auth && (0, f.getBrowserChatGptAuthGeneration)() !== A) return j;
            if (null == B.auth && "session_expired" === B.reason) return q || (0, f.markBrowserSessionExpired)(L, B.logoutReasonV2), j;
            if (null == B.auth && "identity_mismatch" === B.reason) return j;
            let D = B.auth ?? await (0, f.loadBrowserChatGptAuth)();
            if (null == D) return j;
            if (null != _ && await j.body?.cancel(), null != n) {
                t.signal?.throwIfAborted(), ep(x, t.expectedIdentity), a?.();
                let e = await n();
                if (null == (D = (0, f.getBrowserChatGptAuthSnapshot)())) return j;
                i = e.headers, (0, s.Fe)(i), (0, s.Ge)(i), R.body = e.body, ec(i, e.body)
            } else i = Object.fromEntries(new Headers(R.headers));
            for (let [e, t] of(em(i, D, _, v), ex(i), Object.entries((0, w.a)(v)))) ek(i, e, t);
            R.headers = i, t.signal?.throwIfAborted(), ep(i, t.expectedIdentity), a?.();
            let F = (0, f.getBrowserChatGptAuthGeneration)(),
                M = await (0, $.a)(v, R, "auth_retry");
            if (null == B.auth && M.ok) try {
                d.a.count("default", "identity.codex_web_auth_retry_success", {})
            } catch {}
            if (403 === M.status) {
                let e = await (0, m.a)(M, i, F);
                null != e && es({
                    type: "personal-workspace-access-blocked",
                    ...e
                })
            }
            if (401 === M.status) {
                let e = await ef(M);
                ("expired_session_key" === e || "token_invalidated" === e || "token_revoked" === e) && await (0, f.handleBrowserChatGptSessionExpired)({
                    ...N,
                    accessToken: D.accessToken,
                    errorCode: e
                })
            }
            return M
        }

        function ep(e, t) {
            if (null == t) return;
            let r = new Headers(e),
                a = r.get("authorization"),
                n = (0, f.readChatGptTokenClaims)(a?.match(/^Bearer (.+)$/i)?.[1] ?? "");
            if ((r.get("chatgpt-account-id") ?? n?.accountId) !== t.accountId || n?.userId !== t.userId) throw new G.a("The authenticated account changed before the request could be sent.", 409, "account_changed", null)
        }
        async function ef(e) {
            try {
                let t = z.safeParse(await e.clone().json());
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
                    return W.safeParse(JSON.parse(r)).success
                } catch {
                    return !1
                }
            })
        }

        function em(e, t, r, a) {
            if (null != r && r !== t.accountId) throw new G.a("The authenticated account changed before the request could be sent.", 409, "account_changed", null);
            ek(e, "Authorization", `Bearer ${t.accessToken}`), null != t.accountId && ek(e, "ChatGPT-Account-Id", t.accountId);
            let n = eI(e, "originator");
            eg(new URL(a)) ? null != n && delete e[n] : null == n && (e.originator = "Codex Browser")
        }

        function eg(e) {
            return "/realtime/cua" === e.pathname ? !e.username && !e.password && (0, h.c)(e.origin) : ("https://realtime.chatgpt.com" === e.origin || "https://realtime.chatgpt-staging.com" === e.origin) && "/v1/cua" === e.pathname
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
            return null != eI(e, t)
        }

        function ek(e, t, r) {
            var a;
            let n;
            (n = eI(a = e, t)) && delete a[n], e[t] = r
        }

        function eI(e, t) {
            let r = t.toLowerCase();
            return Object.keys(e).find(e => e.toLowerCase() === r)
        }

        function eE(e, t, r, a, n) {
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

        function eT(e) {
            if (null != e && "object" == typeof e && "errorCode" in e && "string" == typeof e.errorCode) return e.errorCode
        }
    }),
    eShZ: (function(e, t, r) {
        var a = r("xnQm"),
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
            a: i,
            b: async function(e, t) {
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
                let b = (0, a.aj)(r),
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
                let k = e.headers.get("x-oai-history-initial-retry-after"),
                    I = null == k ? 0 / 0 : Number(k);
                return Number.isFinite(I) && I >= 0 && (_.historyInitialRetryAtMs = Date.now() + 1e3 * I), _
            },
            c: c,
            d: l,
            e: function(e) {
                return e instanceof i && 403 === e.status && e.isCloudflareChallenge
            }
        })
    }),
    GDNt: (function(e, t, r) {
        r.d(t, {
            a: () => d.a,
            b: () => h,
            c: () => p
        });
        var a = r("xnQm"),
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
                            }) : t.reject(new d.a("body" in e ? JSON.stringify(e.body) : e.bodyJsonString, e.status))
                        } catch (e) {
                            t.reject(e instanceof Error ? e : Error("string" == typeof e ? e : JSON.stringify(e) ?? "Unknown error"))
                        }
                        break;
                    case "error":
                        t.reject(new d.a(e.error, e.status, e.errorCode, e.responseStatus))
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
                        }, p = (0, a.Fe)(h);
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
                                if (null == a) throw new d.a("File upload requires authentication", 401, void 0, null);
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
                                    let e = new d.a("File upload failed", a.status, void 0, a.status > 0 ? a.status : null);
                                    e.azureErrorCode = (0, d.c)(a.getResponseHeader("x-ms-error-code")), r(e)
                                }
                            }, a.onerror = () => {
                                let e = new d.a("File upload failed", 0, void 0, null, "network");
                                e.uploadTransportErrorKind = "network", r(e)
                            }, a.ontimeout = () => {
                                let e = new d.a("File upload timed out", 0, void 0, null, "network");
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
                    if (e instanceof d.a && 403 === e.responseStatus) {
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
                    if (t instanceof d.a && !(t.diagnosticError instanceof s.c)) {
                        let r = t.diagnosticError ?? t;
                        t.diagnosticError = (0, s.d)(e, 500, r.message, r)
                    }
                    throw t
                }
                if (r.onResponseHeaders?.(t.headers), !t.ok && !r.returnErrorResponse) throw await (0, d.b)(t, e);
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
                                };
                                for (let e = 0;; e++) {
                                    let t, u;
                                    l.throwIfAborted();
                                    let h = new AbortController,
                                        p = h.signal;
                                    l.addEventListener("abort", () => h.abort(l.reason), {
                                        once: !0,
                                        signal: p
                                    });
                                    let f = !1,
                                        w = (e, r) => {
                                            clearTimeout(t), e > 0 && (t = setTimeout(() => {
                                                let t = new d.a("Network error", 500, r, null, "network", void 0, (0, s.d)(c.url, 400, s.b, Error(`SSE ${"stream_open_timeout"===r?"open":"idle"} timeout after ${e}ms`), r));
                                                t.failureOrigin = "timeout", h.abort(t)
                                            }, e))
                                        };
                                    try {
                                        if (null != r && w(r.initialOpenTimeoutMs ?? 6e4, "stream_open_timeout"), u = await (0, a.hf)((0, i.a)(c, p, void 0, r?.onBeforeRequestStart, r?.assertRequestCurrent, null == o ? void 0 : () => o.refreshRequest(p)), p), l.throwIfAborted(), null != r && w(r.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), f = u.ok && (null == r || u.headers.get("content-type")?.includes("text/event-stream") === !0), n(u), l.throwIfAborted(), !f) throw await (0, a.hf)((0, d.b)(u, c.url, null != r), p);
                                        return u
                                    } catch (s) {
                                        clearTimeout(t), h.abort(), await u?.body?.cancel().catch(() => void 0), l.throwIfAborted();
                                        let r = f ? void 0 : o?.getDelayMs(s, e);
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
                                        let n = await (0, a.hf)(o.refreshRequest(l), l);
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
                                        headers: (0, a.og)(e.headers),
                                        isEventStream: e.ok && e.headers.get("content-type")?.includes("text/event-stream") === !0
                                    })
                                }
                            }), w) return;
                        if (p.throwIfAborted(), null != o.chatgptSse && g(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), null == n.body) throw new d.a("Streaming response had no body.", 500, void 0, null, "network");
                        if ("ndjson" === o.format)
                            for await (let e of (0, a.Gj)(n.body, p)) {
                                if (p.aborted) break;
                                o.onEvent?.({
                                    type: "fetch-stream-event",
                                    requestId: l,
                                    data: e
                                })
                            } else {
                                let e = new TextEncoder;
                                for await (let r of (0, a.Ij)(n.body, p, t => {
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
                                            let r = new d.a(JSON.stringify({
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
                            let r = e instanceof d.a ? e.diagnosticError ?? e : e,
                                i = r;
                            if (null != o.chatgptSse && !(r instanceof s.c) && ((0, s.g)(r) || e instanceof d.a && "network" === e.errorKind)) {
                                let e = r instanceof Error ? r : Error(String(r));
                                i = (0, s.d)(t, 400, s.b, e)
                            }
                            let c = e instanceof d.a ? e.errorKind : (0, a.ng)(e),
                                u = null == o.chatgptSse ? void 0 : (e instanceof d.a ? e.diagnostics : void 0) ?? (0, s.e)(i, n);
                            m({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: e instanceof Error ? e.message : "HTTP stream failed",
                                responseStatus: e instanceof d.a ? e.responseStatus ?? void 0 : void 0,
                                errorCode: e instanceof d.a ? e.errorCode : void 0,
                                failureOrigin: (e instanceof d.a ? e.failureOrigin : void 0) ?? ("network" === c ? "transport" : void 0),
                                canRetry: e instanceof Error ? (0, a.$i)(e.message) : void 0,
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
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = await this.fetch(e, t),
                    a = null;
                if (204 !== r.status) {
                    let e;
                    try {
                        e = await r.text()
                    } catch (e) {
                        throw t?.signal?.throwIfAborted(), new d.a(e instanceof Error ? e.message : "Failed to read response body", e instanceof Error && "AbortError" === e.name ? 499 : 500, void 0, r.status)
                    }
                    if (e) try {
                        a = JSON.parse(e)
                    } catch {
                        throw new d.a("Invalid JSON response", 500, "invalid_json_response", r.status)
                    }
                }
                return {
                    status: r.status,
                    headers: Object.fromEntries(r.headers),
                    body: a
                }
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
        async function p(e) {
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
            u = r("PAiv"),
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
                let t, r, d, b, y, v, x, _, k, I, E, T = (0, n.c)(39),
                    {
                        href: C,
                        data: S,
                        openLink: R,
                        actions: A,
                        loadRemoteIcon: j
                    } = e,
                    O = void 0 !== j && j,
                    q = (0, l.a)(),
                    P = (0, f.a)(),
                    [U, L] = (0, i.useState)(null);
                T[0] !== C ? (t = URL.canParse(C) && new URL(C).hostname || C, T[0] = C, T[1] = t) : t = T[1];
                let N = t,
                    $ = S?.status === "ready" && S.image?.dataUrl !== U ? S.image : null,
                    G = null != $ && $.width / $.height < 1.2,
                    B = null != $ && G && S?.status === "ready" && null == S.title && null == S.description,
                    D = S?.status === "ready" && (null != S.title || null != S.description || null != $);
                T[2] !== C || T[3] !== O ? (r = (0, a.jsx)(p.a, {
                    className: "size-4 shrink-0 text-secondary",
                    href: C,
                    loadRemote: O
                }), T[2] = C, T[3] = O, T[4] = r) : r = T[4], T[5] !== A || T[6] !== N || T[7] !== C || T[8] !== q ? (d = null != A ? (0, a.jsx)(u.a, {
                    className: "min-w-0 flex-1 truncate text-xs",
                    "aria-label": q.formatMessage(g.openWebsite),
                    appearance: "secondary",
                    href: C,
                    initiator: "markdown_link_click",
                    underline: "hover",
                    children: C
                }) : (0, a.jsx)("span", {
                    className: "min-w-0 flex-1 truncate text-xs text-secondary",
                    children: N
                }), T[5] = A, T[6] = N, T[7] = C, T[8] = q, T[9] = d) : d = T[9], T[10] !== A || T[11] !== C || T[12] !== q || T[13] !== R ? (b = null != A ? (0, a.jsx)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: A
                }) : R ?? (0, a.jsxs)(u.a, {
                    className: "flex shrink-0 items-center gap-1 text-xs",
                    "aria-label": q.formatMessage(g.openWebsite),
                    href: C,
                    initiator: "markdown_link_click",
                    children: [(0, a.jsx)(c.a, {
                        id: "codex.websitePreview.open",
                        defaultMessage: "Open",
                        description: "Link to open a website from its hover preview"
                    }), (0, a.jsx)(h.xf, {})]
                }), T[10] = A, T[11] = C, T[12] = q, T[13] = R, T[14] = b) : b = T[14], T[15] !== r || T[16] !== d || T[17] !== b ? (y = (0, a.jsxs)("div", {
                    className: "flex h-toolbar shrink-0 items-center gap-2 px-3.5 select-none",
                    children: [r, d, b]
                }), T[15] = r, T[16] = d, T[17] = b, T[18] = y) : y = T[18], T[19] !== S ? (v = null == S && (0, a.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    children: (0, a.jsx)(c.a, {
                        id: "codex.websitePreview.loading",
                        defaultMessage: "Loading preview…",
                        description: "Accessible status while website preview content loads"
                    })
                }), T[19] = S, T[20] = v) : v = T[20];
                let F = D ? "auto" : 0;
                return T[21] !== F ? (x = {
                    height: F
                }, T[21] = F, T[22] = x) : x = T[22], T[23] !== P ? (_ = P ? {
                    duration: 0
                } : w.a, T[23] = P, T[24] = _) : _ = T[24], T[25] !== S || T[26] !== D || T[27] !== $ || T[28] !== B || T[29] !== G ? (k = D && (0, a.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-y-auto overscroll-contain border-t border-subtle",
                    children: [null != $ && !G && (0, a.jsx)(m, {
                        src: $.dataUrl,
                        width: $.width,
                        height: $.height,
                        presentation: "hero",
                        onError: () => L($.dataUrl)
                    }, $.dataUrl), (null != S.title || null != S.description || G) && (0, a.jsxs)("div", {
                        className: (0, o.b)("flex gap-2.5 px-3.5 py-4", null == S.description ? "items-center" : "items-start", B && "justify-center"),
                        children: [null != $ && G && (0, a.jsx)(m, {
                            src: $.dataUrl,
                            width: $.width,
                            height: $.height,
                            presentation: B ? "standalone" : "thumbnail",
                            onError: () => L($.dataUrl)
                        }, $.dataUrl), (null != S.title || null != S.description) && (0, a.jsxs)("div", {
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
                }), T[25] = S, T[26] = D, T[27] = $, T[28] = B, T[29] = G, T[30] = k) : k = T[30], T[31] !== _ || T[32] !== k || T[33] !== x ? (I = (0, a.jsx)(s.a.div, {
                    className: "flex min-h-0 flex-col overflow-hidden",
                    initial: !1,
                    animate: x,
                    transition: _,
                    children: k
                }), T[31] = _, T[32] = k, T[33] = x, T[34] = I) : I = T[34], T[35] !== I || T[36] !== y || T[37] !== v ? (E = (0, a.jsxs)("div", {
                    className: "flex max-h-[min(--spacing(80),var(--radix-tooltip-content-available-height,--spacing(80)))] min-h-0 w-90 max-w-full flex-col overflow-hidden rounded-xl text-start text-sm font-normal",
                    children: [y, v, I]
                }), T[35] = I, T[36] = y, T[37] = v, T[38] = E) : E = T[38], E
            }
        })
    }),
    YNPO: (function(e, t, r) {
        r.d(t, {
            a: () => b
        });
        var a = r("ABep"),
            n = r("QosV"),
            o = r("iTtm"),
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
            let t, r = (0, n.c)(2);
            if (r[0] !== e) {
                let {
                    hostId: n,
                    ...o
                } = e;
                t = (0, u.b)(o.href) ? (0, a.jsx)(s.Suspense, {
                    fallback: (0, a.jsx)(d.a, {
                        ...o,
                        data: void 0
                    }),
                    children: (0, a.jsx)(p, {
                        ...o,
                        hostId: void 0 === n ? "local" : n
                    })
                }) : (0, a.jsx)(w, {
                    ...o
                }), r[0] = e, r[1] = t
            } else t = r[1];
            return t
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
                    tooltipId: k,
                    onOpenChange: I,
                    openLink: E,
                    actions: T,
                    loadRemoteIcon: C,
                    side: S
                } = e,
                R = void 0 === x ? 700 : x,
                A = (0, o.y)(l.a),
                j = (0, s.useRef)(null),
                [O, q] = (0, s.useState)("bottom"),
                P = S ?? O;
            w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => j.current?.(), w[0] = t) : t = w[0], w[1] !== y || w[2] !== b ? (r = [b, y], w[1] = y, w[2] = b, w[3] = r) : r = w[3], (0, s.useEffect)(t, r), w[4] !== R ? (c = () => R, w[4] = R, w[5] = c) : c = w[5];
            let U = null != _,
                L = null != _ || void 0;
            w[6] !== y || w[7] !== b || w[8] !== A || w[9] !== _ ? (d = e => {
                j.current?.(), null == _ && "touch" !== e.pointerType && 0 === e.buttons && (q((0, m.a)(e.currentTarget)), j.current = (0, g.a)(A, b, e.currentTarget, {
                    hostId: y
                }))
            }, w[6] = y, w[7] = b, w[8] = A, w[9] = _, w[10] = d) : d = w[10], w[11] === Symbol.for("react.memo_cache_sentinel") ? (u = () => j.current?.(), w[11] = u) : u = w[11], w[12] !== T || w[13] !== y || w[14] !== b || w[15] !== C || w[16] !== E ? (h = (0, a.jsx)(f, {
                href: b,
                hostId: y,
                openLink: E,
                actions: T,
                loadRemoteIcon: C
            }, b), w[12] = T, w[13] = y, w[14] = b, w[15] = C, w[16] = E, w[17] = h) : h = w[17];
            let N = v ?? null;
            return w[18] !== I || w[19] !== P || w[20] !== N || w[21] !== c || w[22] !== U || w[23] !== L || w[24] !== d || w[25] !== h || w[26] !== k || w[27] !== _ ? (p = (0, a.jsx)(i.a, {
                align: "start",
                cloneCustomTrigger: !0,
                closeOnTriggerClick: !0,
                getDelayDuration: c,
                disableHoverOpen: U,
                interactive: !0,
                keyboardNavigation: !0,
                open: L,
                onOpenChange: I,
                onPointerEnter: d,
                onPointerLeave: u,
                scaleAvailableSizeWithZoom: !0,
                selectable: !0,
                side: P,
                sideOffset: 4,
                tooltipContent: h,
                tooltipMaxWidth: "min(22.5rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
                tooltipId: k,
                triggerElement: _,
                variant: "rich",
                children: N
            }), w[18] = I, w[19] = P, w[20] = N, w[21] = c, w[22] = U, w[23] = L, w[24] = d, w[25] = h, w[26] = k, w[27] = _, w[28] = p) : p = w[28], p
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
        var a = r("iTtm"),
            n = r("GaA7"),
            o = r("OWtl"),
            s = r("xnQm"),
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
            let t = (0, s.kg)(e);
            return i.a.getOpenTabs().find(e => {
                if ((0, s.kg)(e.url) !== t) return !1;
                let r = i.a.getSnapshot(e.conversationId, e.browserTabId);
                return r?.tabType === s.Z.WEB && !r.isLoading && !r.isSuspended && i.a.pages.getHost(e.conversationId, e.browserTabId)?.getCaptureViewportSize() != null
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
            o = r("TN1m"),
            s = r("DNYL"),
            i = r("iTtm"),
            l = r("zd8w"),
            c = r("oyxz"),
            d = r("SZ0q"),
            u = r("rGfR"),
            h = r("gbrq"),
            p = r("qPb9"),
            f = r("s7gZ"),
            w = r("ygO2"),
            m = r("WJLZ"),
            g = r("kKbQ"),
            b = r("FrrB"),
            y = r("Bbed"),
            v = r("QIeM"),
            x = r("GGR1"),
            _ = r("zOE4"),
            k = r("aSkF"),
            I = r("Y94G"),
            E = r("OWtl"),
            T = r("tW82"),
            C = r("sU1J"),
            S = r("YhE1"),
            R = r("qixt"),
            A = r("HgkB"),
            j = r("snrm");
        let O = (0, y.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(100643), r.e(40758), r.e(99939), r.e(264571)]).then(r.bind(r, "HpTl"))).PageEditor, {
            fallback: (0, a.jsx)(_.LoadingPage, {}),
            errorFallback: (0, a.jsx)(b.a, {
                title: (0, a.jsx)(c.a, {
                    id: "codex.canvas.inlinePage.loadError",
                    defaultMessage: "Couldn’t load this page",
                    description: "Error when the embedded Page editor cannot load in Canvas"
                }),
                actions: (0, a.jsx)(w.a, {
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
            return (0, a.jsx)(O, {
                ...e
            })
        }

        function P(e) {
            let t, r, a = (0, n.c)(3),
                o = (0, i.z)(h.s);
            return a[0] !== o ? (t = () => (document.documentElement.style.setProperty("--codex-sidebar-preferred-width", `${o}px`), U), r = [o], a[0] = o, a[1] = t, a[2] = r) : (t = a[1], r = a[2]), (0, l.useLayoutEffect)(t, r), null
        }

        function U() {
            document.documentElement.style.removeProperty("--codex-sidebar-preferred-width")
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, h, w, b, y, _, O, U, L, N, $, G, B, D, F, M = (0, n.c)(24),
                    {
                        children: z,
                        loadingFallback: W
                    } = e,
                    [H, J] = (0, l.useState)(null);
                (0, I.c)("core_providers.render"), M[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(C.a, {}), h = (0, a.jsx)(m.a, {}), w = (0, a.jsx)(d.a, {}), b = (0, a.jsx)(f.a, {}), y = (0, a.jsx)(A.a, {}), _ = (0, a.jsx)(R.c, {}), O = (0, a.jsx)(u.a, {}), U = (0, a.jsx)(g.a, {}), L = (0, a.jsx)(v.a, {}), r = (0, a.jsx)(P, {}), c = (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(S.a, {})
                }), M[0] = t, M[1] = r, M[2] = c, M[3] = h, M[4] = w, M[5] = b, M[6] = y, M[7] = _, M[8] = O, M[9] = U, M[10] = L) : (t = M[0], r = M[1], c = M[2], h = M[3], w = M[4], b = M[5], y = M[6], _ = M[7], O = M[8], U = M[9], L = M[10]), M[11] !== W ? (N = void 0 === W ? (0, a.jsx)(x.a, {
                    debugName: "App content"
                }) : W, M[11] = W, M[12] = N) : N = M[12];
                let K = H ?? void 0;
                return M[13] !== z ? ($ = (0, a.jsx)(s.a.Provider, {
                    children: (0, a.jsx)(k.a, {
                        value: q,
                        children: z
                    })
                }), M[13] = z, M[14] = $) : $ = M[14], M[15] !== K || M[16] !== $ ? (G = (0, a.jsx)(o.a, {
                    radixPortalContainer: K,
                    children: $
                }), M[15] = K, M[16] = $, M[17] = G) : G = M[17], M[18] !== N || M[19] !== G ? (B = (0, a.jsx)(l.Suspense, {
                    fallback: N,
                    children: G
                }), M[18] = N, M[19] = G, M[20] = B) : B = M[20], M[21] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, a.jsx)("div", {
                    ref: J,
                    className: "pointer-events-none fixed inset-0 z-60 zoom-adjusted-viewport h-[calc(100dvh/var(--codex-window-zoom))] contain-layout [&>*]:pointer-events-auto"
                }), M[21] = D) : D = M[21], M[22] !== B ? (F = (0, a.jsx)(p.a, {
                    children: (0, a.jsx)(j.a, {
                        children: (0, a.jsx)(T.a, {
                            children: (0, a.jsxs)(i.b, {
                                scope: E.a,
                                children: [t, h, w, b, y, _, O, U, L, r, c, B, D]
                            })
                        })
                    })
                }), M[22] = B, M[23] = F) : F = M[23], F
            }
        })
    })
};