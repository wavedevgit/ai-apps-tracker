export const __rspack_esm_ids = [637885];
export const __webpack_modules__ = {
    gi6X: (function(e, t, r) {
        var n = r("hV9T"),
            a = r("GDNt"),
            o = r("gx4u");
        r.d(t, {
            a: () => "vscode",
            c: () => o.a
        }, {
            b: async function() {
                for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                let [o, i] = t, {
                    params: s,
                    select: l,
                    signal: c,
                    source: d,
                    responsePriority: u
                } = i ?? {};
                return async function(e, t, r, o, i, s) {
                    let l = (await a.b.getInstance().post(`vscode://codex/${e}`, JSON.stringify(t), function(e) {
                        if (null != e) return {
                            [n.fc]: e
                        }
                    }(i), o, s)).body;
                    return r ? r(l) : l
                }(o, s, l, c, d, u)
            }
        })
    }),
    wl0r: (function(e, t, r) {
        let n;
        r.d(t, {
            a: () => $,
            b: () => er,
            browserAppServer: () => ea,
            c: () => en,
            d: () => eg,
            e: () => ep,
            f: () => eT,
            g: () => ei
        });
        var a = r("HIjy"),
            o = r("VH4X"),
            i = r("hV9T"),
            s = r("ngHT"),
            l = r("AOU6"),
            c = r("ASxG"),
            d = r("uDXB"),
            u = r("skh7"),
            p = r("MwLV"),
            h = r("p9rD"),
            g = r("QdUF"),
            f = r("vNSg"),
            w = r("cY5Z"),
            m = r("I1ra"),
            b = r("z3Js"),
            y = r("qRLu"),
            v = r("EAKz"),
            k = r("YAwS"),
            I = r("qkcL"),
            x = r("T9J2"),
            _ = r("h4h6"),
            E = r("BrCP"),
            C = r("C2tN"),
            S = r("hXwB"),
            T = r("kMfY"),
            A = r("YCTv"),
            j = r("KHWn"),
            R = r("rrzw"),
            M = r("ZhRn"),
            O = r("tFDh"),
            P = r("NGML"),
            q = r("WFY2"),
            W = r("kpIY"),
            B = r("yiHb"),
            F = r("rhkM"),
            N = r("Rz6g"),
            D = r("y3uJ"),
            L = r("eShZ");
        let G = "home-composer-mode-v1",
            U = "codex.browser.projectlessThreadState",
            $ = "/codex/browser/projectless",
            z = c.object({
                code: c.string().optional(),
                error: c.object({
                    code: c.string().optional()
                }).optional()
            }),
            H = c.object({
                detail: z.optional(),
                error: z.optional()
            }),
            K = c.strictObject({
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
            V = new Set(["get-global-state", "set-global-state"]);
        [...Object.keys(o.e).filter(o.D).map(j.c)];
        let X = new Set(["archive-thread", "unarchive-thread", "persisted-atom-sync-request", "persisted-atom-update", "persisted-atom-reset", "open-in-browser", "open-in-main-window", "fetch", "cancel-fetch", "mcp-request", "thread-prewarm-start", "mcp-response", "mcp-notification", "codex-app-server-restart"]),
            Q = new Map,
            J = new Map,
            Y = new Map,
            Z = new Map,
            ee = new Map,
            et = new Map,
            er = new I.a({
                dispatchHostMessage: el,
                getApiBaseUrl: p.a
            }),
            en = new x.a({
                readEnvironmentFile: e => ea.readEnvironmentFile(e),
                getClientOrThrow: e => er.getClientOrThrow(e)
            });
        (0, F.b)(e => {
            let t = (0, i.Dg)(e);
            return null == t ? er.getClientOrThrow(e) : ea.getGitExecutionHost(t)
        });
        let ea = new v.a({
            createSocket: v.b,
            dispatchHostMessage: el,
            hostId: "local"
        });
        (0, S.c)((e, t) => ea.sendDirectRequest(e, t, e => e));
        let eo = new i.K,
            ei = {
                postMessage: e => {
                    var t, n, o;
                    if (null != (t = e) && "object" == typeof t && "string" == typeof t.type) {
                        if (n = e, X.has(n.type)) switch (e.type) {
                            case "archive-thread":
                                "local" !== e.hostId && e.cleanupWorktree && J.set(`${e.hostId}:${e.conversationId}`, e);
                                return;
                            case "unarchive-thread": {
                                let t = `${e.hostId}:${e.conversationId}`;
                                J.delete(t);
                                let r = ee.get(t);
                                null != r && (window.clearTimeout(r), ee.delete(t))
                            }
                            return;
                            case "persisted-atom-sync-request":
                                (0, T.b)(() => {
                                    !async function() {
                                        let e = T.a,
                                            t = Symbol();
                                        et.set(e, t);
                                        try {
                                            await (0, k.flushBrowserHostStorageWrites)();
                                            let r = await (0, k.accessBrowserHostRecordDurably)(k.a, t => ({
                                                result: null != t && "object" == typeof t && e in t ? t[e] : void 0
                                            }));
                                            et.get(e) === t && el({
                                                type: "persisted-atom-updated",
                                                key: e,
                                                value: r ?? null,
                                                deleted: void 0 === r
                                            })
                                        } catch {} finally {
                                            et.get(e) === t && et.delete(e)
                                        }
                                    }()
                                }), async function() {
                                    let e = {
                                        ...await (0, k.d)(k.a)
                                    };
                                    {
                                        let t = e[G] ?? (0, W.p)(W.a)[G],
                                            r = await (0, O.a)("codex_composer_mode", async () => {
                                                let e = (0, P.c)("codex_composer_mode", t) ?? N.b.safeParse((0, M.a)("oai-chat-surface-mode")).data;
                                                if (void 0 !== e) return e;
                                                try {
                                                    return N.b.safeParse(JSON.parse(window.localStorage.getItem("oai/apps/tpp/chat-surface-mode") ?? "null")).data
                                                } catch {
                                                    return
                                                }
                                            }, async () => {
                                                e[G] = void 0, await (0, k.g)(k.a, G, void 0)
                                            });
                                        void 0 === r || void 0 !== (0, M.a)("codex_composer_mode") || Object.hasOwn(e, G) || (e[G] = r, await (0, k.g)(k.a, G, r))
                                    }
                                    el({
                                        type: "persisted-atom-sync",
                                        state: e
                                    })
                                }();
                                return;
                            case "persisted-atom-update": {
                                if (e.key === G) {
                                    e.deleted && (0, M.c)("codex_composer_mode", void 0), (0, O.a)("codex_composer_mode", async () => e.value, () => (0, k.g)(k.a, e.key, void 0));
                                    return
                                }
                                let t = et.has(e.key) || Object.values(e.recordUpdate?.entries ?? {}).some(e => e?.expectedValue !== void 0 || null != e && "value" in e && e.createOnly) ? Symbol() : void 0;
                                null != t && et.set(e.key, t), (0, k.g)(k.a, e.key, e.deleted ? void 0 : e.value, e.recordUpdate).then(async () => {
                                    if (e.key === a.a || null != t) {
                                        let r = await (0, k.e)(k.a, e.key);
                                        if (null != t) {
                                            if (et.get(e.key) !== t) return;
                                            et.delete(e.key)
                                        }
                                        el({
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
                                et.clear(), (0, M.c)("codex_composer_mode", void 0), (0, k.c)(k.a);
                                return;
                            case "open-in-browser":
                                return void

                                function(e, t, r) {
                                    let n = (0, m.b)(e) ?? e;
                                    if ((0, i.ui)(n)) return window.location.assign(n);
                                    let a = function(e) {
                                        try {
                                            let {
                                                protocol: t
                                            } = new URL(e);
                                            return "http:" === t || "https:" === t
                                        } catch {
                                            return !1
                                        }
                                    }(n);
                                    if (a) {
                                        if (!a) return es(n);
                                        {
                                            let e = (0, b.a)(n) ?? n;
                                            "current-tab" === t ? window.location.assign(e) : es(e)
                                        }
                                    }
                                }(e.url, "current-tab" === e.disposition ? "current-tab" : "new-tab", e.targetChromeTabId);
                            case "open-in-main-window":
                                return;
                            case "fetch":
                                return void async function(e) {
                                    var t, r, n;
                                    let a = new AbortController;
                                    Q.set(e.requestId, a);
                                    try {
                                        if (e.url.startsWith("vscode://codex/")) {
                                            return void(t = e.requestId, r = await async function(e, t) {
                                                var r, n, a;
                                                let o = e.slice(15);
                                                if (r = o, V.has(r)) {
                                                    let e, r = (e = window, "function" == typeof e.__codexChromeExtensionHostFetch ? e.__codexChromeExtensionHostFetch : null);
                                                    if (null != r) {
                                                        let e = function(e) {
                                                            if (null != e) return JSON.parse(e)
                                                        }(t);
                                                        if (n = o, a = e, "get-global-state" !== n && "set-global-state" !== n || null != a && "object" == typeof a && "key" in a && (a.key === i.jc.THREAD_PROJECT_ASSIGNMENTS || a.key === i.jc.PROJECTLESS_THREAD_IDS)) return r(o, {
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
                                                                return (0, k.e)(e, r)
                                                            }(A.a, t)
                                                        };
                                                    case "set-global-state":
                                                        return await async function(e, t) {
                                                            if (null == t) return;
                                                            let r = JSON.parse(t),
                                                                n = r.key;
                                                            if ("string" == typeof n) {
                                                                if (e === A.a && n === i.jc.QUEUED_FOLLOW_UPS) throw Error("Use the queued follow-ups service to write the queue");
                                                                await (0, k.g)(e, n, r.value)
                                                            }
                                                        }(A.a, t), {
                                                            success: !0
                                                        };
                                                    default:
                                                        throw Error(`Browser host fetch is not implemented: ${o}`)
                                                }
                                            }(e.url, e.body), el({
                                                type: "fetch-response",
                                                responseType: "success",
                                                requestId: t,
                                                status: 200,
                                                headers: {},
                                                bodyJsonString: JSON.stringify(r)
                                            }))
                                        }
                                        eS(e.requestId, 501, `Browser host does not support fetch URL: ${e.url}`, null)
                                    } catch (t) {
                                        if (a.signal.aborted || null != (n = t) && "object" == typeof n && "AbortError" === n.name) return void eS(e.requestId, 499, t instanceof Error ? t.message : "Browser host fetch canceled", null);
                                        eS(e.requestId, 500, t instanceof Error ? t.message : "Browser host fetch failed", null, eT(t))
                                    } finally {
                                        Q.delete(e.requestId)
                                    }
                                }(e);
                            case "cancel-fetch":
                                let t;
                                return void(o = e, null != (t = Q.get(o.requestId)) && (t.abort(), Q.delete(o.requestId)));
                            case "mcp-request":
                            case "thread-prewarm-start":
                                if ("thread/archive" === e.request.method) {
                                    let t = `${e.hostId}:${e.request.params.threadId}`,
                                        r = J.get(t);
                                    null != r && Y.set(`${e.hostId}:${e.request.id}`, r)
                                } else "thread/unarchive" === e.request.method && Z.set(`${e.hostId}:${e.request.id}`, `${e.hostId}:${e.request.params.threadId}`);
                                !async function(e) {
                                    try {
                                        if ("local" === e.hostId && ea.supports(e.request)) return void await ea.sendRequest(e.request, {
                                            prewarmThread: "thread-prewarm-start" === e.type,
                                            savedEnvironmentConfig: "mcp-request" === e.type ? e.savedEnvironmentConfig : void 0,
                                            retainResponse: e.retainResponse,
                                            environmentDraftReplacement: "mcp-request" === e.type ? e.environmentDraftReplacement : void 0,
                                            threadAccess: "mcp-request" === e.type ? e.threadAccess : void 0,
                                            persistentSideConversation: "mcp-request" === e.type ? e.persistentSideConversation : void 0,
                                            executorAccess: "mcp-request" === e.type ? e.executorAccess : void 0
                                        });
                                        if ((0, s.a)(e.request)) throw Error("User-message admission requires a cloud app-server host");
                                        let t = er.getClient(e.hostId);
                                        if (null != t) return void await t.sendRequest(e.request, e.retainResponse);
                                        if ("local" === e.hostId && eo.supports(e.request)) {
                                            let t = eo.send(e.request);
                                            if ("response" === t.type) {
                                                await Promise.resolve(), el({
                                                    type: "mcp-response",
                                                    hostId: e.hostId,
                                                    message: t.response
                                                });
                                                return
                                            }
                                        }
                                        let n = await async function(e, t) {
                                            if ("account/read" === e) {
                                                var n, a;
                                                let e = (n = await (0, g.loadBrowserChatGptAuth)(), null != n ? {
                                                    type: "chatgpt",
                                                    email: n.email ?? "",
                                                    planType: (a = n.planType, "law" === a ? "unknown" : "promax" === a ? "pro" : "self_serve_business_prolite" === a ? "team" : "enterprise_cbp_automation" === a ? "enterprise_cbp_usage_based" : "edu_plus" === a || "edu_pro" === a ? "edu" : "free_workspace" === a || "sci" === a || "finserv" === a || "deprecated_enterprise" === a || "education" === a || "k12" === a || "hc" === a || "hc_consumption" === a || "quorum" === a || "deprecated_edu" === a ? "unknown" : a),
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
                                                        (0, g.saveBrowserChatGptAuth)({
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
                                                return "chatgpt" === t.type && (0, g.maybeRedirectToBrowserChatGptLogin)() ? {
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
                                                let e = await (0, g.loadBrowserChatGptAuth)();
                                                if (e?.source === "token") return (0, g.clearBrowserAuth)(), await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885)]).then(r.bind(r, "rCBi")).then(e => {
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
                                                    handleLogout: n
                                                }] = await Promise.all([Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913)]).then(r.bind(r, "jEww")), Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913)]).then(r.bind(r, "OrNX"))]), a = new AbortController;
                                                (0, h.b)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT", a.signal);
                                                let o = await t(() => n(() => {})).catch(e => {
                                                    throw a.abort(), e
                                                });
                                                return o.ok ? (window.location.replace(o.url), {
                                                    result: {}
                                                }) : (a.abort(), {
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
                                        el({
                                            type: "mcp-response",
                                            hostId: e.hostId,
                                            message: {
                                                id: e.request.id,
                                                ...n
                                            }
                                        })
                                    } catch (t) {
                                        el({
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
                                if ("local" === e.hostId && ea.hasPendingServerRequest(e.response.id)) return void ea.sendResponse(e.response);
                                er.getClient(e.hostId)?.sendResponse(e.response);
                                return;
                            case "mcp-notification":
                                if ("local" === e.hostId) return void ea.sendNotification(e.request);
                                er.getClient(e.hostId)?.sendNotification(e.request);
                                return;
                            case "codex-app-server-restart":
                                return void er.getClient(e.hostId)?.connect().catch(() => {})
                        }
                    }
                },
                getState: () => n,
                setState: e => {
                    n = e
                }
            };

        function es(e) {
            var t;
            (0, C.a)()?.tabs, t = e, window.open(t, "_blank", "noopener,noreferrer")
        }

        function el(e) {
            if ("mcp-response" === e.type) {
                var t;
                let r, n, a = `${e.hostId}:${e.message.id}`,
                    o = Y.get(a);
                null != o && (Y.delete(a), null == e.message.error && (t = o, r = `${t.hostId}:${t.conversationId}`, null != (n = ee.get(r)) && window.clearTimeout(n), ee.set(r, window.setTimeout(() => {
                    ee.delete(r), J.delete(r), (async function(e) {
                        let t = er.getClient(e.hostId);
                        if (null == t) return;
                        let {
                            worktreeGitRoot: r
                        } = await (0, B.a)("git").request({
                            method: "resolve-worktree-for-thread",
                            params: {
                                cwd: (0, i.Ze)(e.cwd),
                                conversationId: e.conversationId,
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_archive_cleanup"
                            }
                        });
                        if (null == r) return;
                        let n = await (0, i.sf)({
                            archivedThreadId: e.conversationId,
                            listThreads: t.listThreads.bind(t),
                            worktreeRoot: r
                        });
                        if (null != n) return void await (0, B.a)("git").request({
                            method: "set-worktree-owner-thread",
                            params: {
                                worktree: r,
                                conversationId: (0, i.Ve)(n.id),
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_set_owner_thread"
                            }
                        });
                        let a = er.getRemoteConnections().find(t => t.hostId === e.hostId);
                        (0, i.Qh)(a?.appServerVersion, "threadAttachmentOwners") && await (0, i.Gh)({
                            worktreeRoot: r,
                            listOwners: e => t.listThreadAttachmentOwners(e)
                        }, e.conversationId) === !0 || (await (0, B.a)("git").request({
                            method: "delete-worktree",
                            params: {
                                worktree: r,
                                force: !0,
                                reason: "archive-cleanup",
                                hostConfig: t.hostConfig,
                                operationSource: "worktree_archive_cleanup"
                            }
                        })).success && el({
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
                }, i.Cd))));
                let s = Z.get(a);
                if (null != s && (Z.delete(a), null == e.message.error)) {
                    let e = ee.get(s);
                    null != e && (window.clearTimeout(e), ee.delete(s))
                }
            }
            window.dispatchEvent(new MessageEvent("message", {
                data: e,
                origin: window.location.origin,
                source: window
            }))
        }

        function ec(e) {
            let t = (0, _.a)(e) ?? (0, E.a)(e);
            if (null != t) return ed((0, p.a)(), t);
            if (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("data:")) return (0, y.b)(e);
            if (e.startsWith("/")) {
                let t = (0, p.a)();
                return "/__codex-api" === e || e.startsWith("/__codex-api/") || t.startsWith("/") && (e === t || e.startsWith(`${t}/`)) ? (0, y.b)(new URL(e, window.location.origin).toString()) : ed(t, e)
            }
            return null
        }

        function ed(e, t) {
            let r = (0, y.b)((0, i.Xi)(e, t));
            return e.startsWith("/") ? new URL(r, window.location.origin).toString() : r
        }

        function eu(e, t) {
            if (null == t || e_(e, "content-type")) return;
            let r = t.trim();
            if (r.startsWith("{") || r.startsWith("[")) try {
                JSON.parse(t), eE(e, "Content-Type", "application/json")
            } catch {}
        }
        async function ep(e) {
            var t, r;
            let n;
            if (null != e.hostId && "local" !== e.hostId) return en.createProjectlessThreadPaths(e);
            let a = await async function() {
                let e = await (0, k.e)(U, "nextThreadNumber"),
                    t = "number" == typeof e ? e : 1;
                return await (0, k.g)(U, "nextThreadNumber", t + 1), t
            }(), o = e.directoryName?.trim() || (t = e.prompt ?? null, r = a, n = t?.trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 48) || "thread", `${String(r).padStart(4,"0")}-${n}`), i = `${$}/${o}`, s = !1 !== e.createSplitDirectories ? `${i}/output` : i;
            return {
                cwd: !1 !== e.createSplitDirectories ? `${i}/workspace` : i,
                outputDirectory: s,
                workspaceRoot: i
            }
        }

        function eh(e) {
            for (let t of Object.keys(e))["authorization", "chatgpt-account-id", "x-openai-actor-authorization", "x-openai-authorization", "x-openai-locked-chats-pin"].includes(t.toLowerCase()) && delete e[t]
        }
        async function eg(e, t, r, n, a, o, s) {
            var l;
            let c, m = "anonymous" === t.authentication,
                b = m ? function(e) {
                    let t = ec(e);
                    if (null == t) throw Error("Unsupported anonymous API URL");
                    let r = new URL(t, window.location.origin);
                    if (r.origin !== window.location.origin || !/^\/(?:backend-api|__codex-api|public-api)\//.test(r.pathname)) throw Error("Unsupported anonymous API URL");
                    return r.pathname.startsWith("/__codex-api/public-api/") || (r.pathname = r.pathname.replace(/^\/(?:backend-api|__codex-api)\//, "/backend-anon/")), r.href
                }(e) : ec(e);
            if (null == b) throw Error("Browser API URL is not supported.");
            let v = (0, g.isBrowserGuestChatSession)(),
                k = !m && v ? (0, p.getBrowserGuestChatRequestUrl)(b, t.method) : null,
                I = k ?? b,
                x = {
                    ...t.headers
                },
                _ = (0, i.Ne)(x),
                E = (0, i.Me)(x);
            if (null != k && (null != _ || e_(x, "authorization") || e_(x, "chatgpt-account-id"))) throw new DOMException("Guest Chat identity changed", "AbortError");
            let C = t.body;
            if (eu(x, "string" == typeof C ? C : void 0), m) {
                if (null != t.expectedIdentity || null != _) throw Error("Anonymous requests cannot carry an authenticated identity");
                eh(x)
            }
            let S = m || null != k ? "notNeeded" : function(e) {
                    let {
                        authRequested: t,
                        chromeExtensionBrowserApiAuth: r,
                        expectedAccountId: n,
                        headers: a,
                        method: o,
                        url: s,
                        body: l
                    } = e;
                    if (e_(a, "authorization") || ! function(e, t) {
                            var r;
                            let n, a;
                            try {
                                n = new URL(e)
                            } catch {
                                return !1
                            }
                            return ("http:" === n.protocol || "https:" === n.protocol) && (r = n, !!(null != (a = (0, y.a)()) && ek(r, new URL(a)) || ek(r, new URL((0, p.a)(), window.location.origin)) || ek(r, new URL("/__codex-api", window.location.origin)) || ey(n) || n.origin === window.location.origin && ("/api/identity/service/biometric-factors" === n.pathname || "/api/identity/service/biometric-factors/FACE" === n.pathname || "/api/identity/service/biometric-factors/VOICE" === n.pathname || /^\/api\/identity\/service\/biometric-factors\/(FACE|VOICE)\/[^/]+$/.test(n.pathname))) || !!(t && ek(n, new URL((0, i.Xi)((0, p.a)(), "/public-api/"), window.location.origin)) || "chatgpt.com" === n.hostname.toLowerCase() && eI(n.pathname, "/backend-api")) || !!ev(e) && t)
                        }(s, t)) return "notNeeded";
                    let c = (0, g.getOrLoadBrowserChatGptAuth)();
                    return c instanceof Promise ? c.then(d) : d(c);

                    function d(e) {
                        return null == e ? ! function(e, t, r) {
                            let n;
                            if (ev(t) || em(e, t, r)) return !0;
                            if ("GET" !== e.toUpperCase()) return !1;
                            try {
                                n = new URL(t)
                            } catch {
                                return !1
                            }
                            let a = new URL(ed((0, p.a)(), "/share/post/resolve/"), window.location.origin),
                                o = new URL(ed((0, p.a)(), "/share/post/"), window.location.origin),
                                i = new URL(ed((0, p.a)(), "/public/textdoc/shared/"), window.location.origin);
                            return ek(n, a) || ek(n, i) && /^[^/]+$/.test(n.pathname.slice(i.pathname.length)) || ek(n, o) && /^[^/]+\/(?:automation|web-image\/[^/]+)$/.test(n.pathname.slice(o.pathname.length)) || ["/images/init", "/images/styles"].some(e => {
                                let t = new URL(ed((0, p.a)(), e), window.location.origin);
                                return n.origin === t.origin && n.pathname === t.pathname
                            })
                        }(o, s, l) ? "missing" : "notNeeded" : (eb(a, e, n, s), "attached")
                    }
                }({
                    authRequested: E,
                    chromeExtensionBrowserApiAuth: null,
                    expectedAccountId: _,
                    headers: x,
                    method: t.method,
                    url: I,
                    body: C
                }),
                T = S instanceof Promise ? await S : S;
            if ("missing" === T) {
                let t = !v && (0, g.maybeRedirectToBrowserChatGptLogin)();
                throw new L.FetchError(t ? "Redirecting to ChatGPT login." : `Cannot fetch ${e} without ChatGPT auth.`, 401, void 0, null)
            }
            if (t.signal?.throwIfAborted(), ef(x, t.expectedIdentity), n?.(), null != s) {
                let e = (0, g.getBrowserChatGptAuthGeneration)();
                if (await s(), t.signal?.throwIfAborted(), e !== (0, g.getBrowserChatGptAuthGeneration)()) throw new DOMException("The request identity changed", "AbortError");
                n?.()
            }
            for (let [e, t] of Object.entries(m ? {} : (0, f.a)(I))) eE(x, e, t);
            let A = {
                url: I,
                headers: x,
                body: C
            };
            r?.(A), ex(A.headers), m && eh(A.headers);
            let j = null != k || "attached" === T ? "include" : void 0;
            m ? j = "omit" : ey(new URL(I)) && (j = "same-origin");
            let M = {
                method: t.method,
                headers: A.headers,
                body: A.body,
                credentials: j,
                ...m ? {
                    referrerPolicy: "no-referrer"
                } : {},
                keepalive: t.keepalive,
                cache: t.cache,
                redirect: m ? "error" : t.redirect,
                signal: t.signal
            };
            "POST" === t.method.toUpperCase() && I === ec("/payments/checkout") && new URL(I).origin === window.location.origin && (M.referrerPolicy = "same-origin");
            let O = (0, g.getBrowserChatGptAuthGeneration)(),
                P = E && "attached" === T && "POST" === t.method ? (0, R.b)(I) : I,
                q = await (0, D.a)(P, M, "initial");
            if (m) return q;
            let W = "never" === t.retry || "POST" === t.method.toUpperCase() && new URL(I).pathname.endsWith(i.O);
            if (403 === q.status) {
                let e = await (0, w.a)(q, Object.fromEntries(new Headers(M.headers)), O);
                if (null != e) return el({
                    type: "personal-workspace-access-blocked",
                    ...e
                }), q
            }
            let B = 403 === q.status && !(0, L.c)(q.headers) && "GET" === t.method.toUpperCase() && I === ec("/accounts/check/v4-2023-04-27") && !(0, u.a)(await (0, L.a)(q.clone(), I));
            if (null != k || 401 !== q.status && !B || W || em(t.method, I, C) && ("attached" !== T || !["/model_first_landings/resolve_message", "/widget_server_action/public", "/share/post"].some(e => new URL(I).pathname === new URL(ed((0, p.a)(), e), window.location.origin).pathname)) || "attached" !== T) return q;
            let F = "POST" === t.method.toUpperCase() && I === ec("/accounts/data_export"),
                N = await ew(q);
            if (B && "invalid_workspace_selected" === N || F && ("reauth_required" === (l = N) || "phone_verification_required" === l)) return q;
            let G = new Headers(M.headers).get("authorization")?.replace(/^Bearer /i, "");
            if (null == G) return (0, g.maybeRedirectToBrowserChatGptLogin)(), q;
            let U = {
                accessToken: G,
                method: t.method,
                path: new URL(I).pathname,
                signal: t.signal
            };
            if ("token_expired" !== N && !B) return ("expired_session_key" === N || "token_invalidated" === N || "token_revoked" === N) && await (0, g.handleBrowserChatGptSessionExpired)({
                ...U,
                errorCode: N
            }), q;
            let $ = await (0, g.recoverBrowserChatGptAuth)({
                ...U,
                reason: B ? "account_bootstrap_forbidden" : "token_expired"
            });
            if (t.signal?.throwIfAborted(), null != $.auth || "session_expired" !== $.reason || B || (0, g.isBrowserWorkspaceSwitchPending)() || $.authGeneration !== (0, g.getBrowserChatGptAuthGeneration)() || (0, h.b)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_EXPIRED_SESSION"), null == $.auth && (0, g.getBrowserChatGptAuthGeneration)() !== O) return q;
            if (null == $.auth && "session_expired" === $.reason) return B || (0, g.markBrowserSessionExpired)(G, $.logoutReasonV2, $.observation), q;
            if (null == $.auth && "identity_mismatch" === $.reason) return q;
            let z = $.auth ?? await (0, g.loadBrowserChatGptAuth)();
            if (null == z) return q;
            if (null != _ && await q.body?.cancel(), null != a) {
                t.signal?.throwIfAborted(), ef(x, t.expectedIdentity), n?.();
                let e = await a();
                if (null == (z = (0, g.getBrowserChatGptAuthSnapshot)())) return q;
                c = e.headers, (0, i.Me)(c), (0, i.Ne)(c), M.body = e.body, eu(c, e.body)
            } else c = Object.fromEntries(new Headers(M.headers));
            for (let [e, t] of(eb(c, z, _, I), Object.entries((0, f.a)(I)))) eE(c, e, t);
            t.signal?.throwIfAborted(), ef(c, t.expectedIdentity), n?.(), ex(c = o?.(c) ?? c), M.headers = c;
            let H = (0, g.getBrowserChatGptAuthGeneration)(),
                K = await (0, D.a)(P, M, "auth_retry");
            if (null == $.auth && K.ok) try {
                d.a.count("default", "identity.codex_web_auth_retry_success", {})
            } catch {}
            if (403 === K.status) {
                let e = await (0, w.a)(K, c, H);
                null != e && el({
                    type: "personal-workspace-access-blocked",
                    ...e
                })
            }
            if (401 === K.status) {
                let e = await ew(K);
                ("expired_session_key" === e || "token_invalidated" === e || "token_revoked" === e) && await (0, g.handleBrowserChatGptSessionExpired)({
                    ...U,
                    accessToken: z.accessToken,
                    errorCode: e
                })
            }
            return K
        }

        function ef(e, t) {
            if (null == t) return;
            let r = new Headers(e),
                n = r.get("authorization"),
                a = (0, g.readChatGptTokenClaims)(n?.match(/^Bearer (.+)$/i)?.[1] ?? "");
            if ((r.get("chatgpt-account-id") ?? a?.accountId) !== t.accountId || a?.userId !== t.userId) throw new L.FetchError("The authenticated account changed before the request could be sent.", 409, "account_changed", null)
        }
        async function ew(e) {
            try {
                let t = H.safeParse(await e.clone().json());
                if (t.success) return t.data.detail?.code ?? t.data.error?.code ?? t.data.error?.error?.code ?? t.data.detail?.error?.code
            } catch {}
        }

        function em(e, t, r) {
            let n = [];
            "GET" === e.toUpperCase() ? n = ["/trusted_contact/nominee"] : "POST" === e.toUpperCase() && (n = ["/trusted_contact/accept", "/trusted_contact/removal", "/ai/account_linking/pre_check", "/model_first_landings/resolve_message", "/widget_server_action/public", "/share/post"]);
            let a = new URL(t),
                o = new URL(ed((0, p.a)(), "/estuary/public_content/enc/"), window.location.origin);
            return !!("GET" === e.toUpperCase() && ek(a, o) && /^[^/]+$/.test(a.pathname.slice(o.pathname.length))) || n.some(e => {
                let t = new URL(ed((0, p.a)(), e), window.location.origin);
                if (a.origin !== t.origin || a.pathname !== t.pathname) return !1;
                if ("/share/post" !== e) return !0;
                if ("string" != typeof r) return !1;
                try {
                    return K.safeParse(JSON.parse(r)).success
                } catch {
                    return !1
                }
            })
        }

        function eb(e, t, r, n) {
            if (null != r && r !== t.accountId) throw new L.FetchError("The authenticated account changed before the request could be sent.", 409, "account_changed", null);
            eE(e, "Authorization", `Bearer ${t.accessToken}`), null != t.accountId && eE(e, "ChatGPT-Account-Id", t.accountId);
            let a = eC(e, "originator");
            ey(new URL(n)) ? null != a && delete e[a] : null == a && (e.originator = "Codex Browser")
        }

        function ey(e) {
            return "/realtime/cua" === e.pathname ? !e.username && !e.password && (0, p.d)(e.origin) : ("https://realtime.chatgpt.com" === e.origin || "https://realtime.chatgpt-staging.com" === e.origin) && "/v1/cua" === e.pathname
        }

        function ev(e) {
            try {
                let t = new URL(e);
                return t.origin === window.location.origin && "/ces/v1/rgstr" === (t.pathname.replace(/\/+$/, "") || "/")
            } catch {
                return !1
            }
        }

        function ek(e, t) {
            return e.origin === t.origin && eI(e.pathname, t.pathname)
        }

        function eI(e, t) {
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
            return null != eC(e, t)
        }

        function eE(e, t, r) {
            var n;
            let a;
            (a = eC(n = e, t)) && delete n[a], e[t] = r
        }

        function eC(e, t) {
            let r = t.toLowerCase();
            return Object.keys(e).find(e => e.toLowerCase() === r)
        }

        function eS(e, t, r, n, a) {
            el({
                type: "fetch-response",
                responseType: "error",
                requestId: e,
                status: t,
                responseStatus: n,
                error: r,
                errorCode: a
            })
        }

        function eT(e) {
            if (null != e && "object" == typeof e && "errorCode" in e && "string" == typeof e.errorCode) return e.errorCode
        }
    }),
    eShZ: (function(e, t, r) {
        var n = r("hV9T"),
            a = r("ASxG"),
            o = r("y3uJ"),
            i = r("w5lF");
        class s extends Error {
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
            constructor(e, t, r, n, a, o, i, s) {
                super(e), this.status = t, this.errorCode = r, this.errorKind = a, this.retryAtMs = o, this.diagnosticError = i, this.retryable = s, this.#e = n, this.responseStatus = void 0 === n ? t : n
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
            FetchError: s,
            a: async function(e, t) {
                let r, d, u = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    r = await e.text()
                } catch {
                    r = ""
                }
                let p = e.headers.get("retry-after"),
                    h = null == p ? 0 / 0 : Number(p),
                    g = Number.isFinite(h) ? Date.now() + 1e3 * Math.max(0, h) : Date.parse(p ?? ""),
                    f = Number(e.headers.get("x-ratelimit-reset")),
                    w = Math.max(...[g, "0" === e.headers.get("x-ratelimit-remaining") && f > 0 ? 1e3 * f : 0 / 0].filter(Number.isFinite)),
                    m = {};
                try {
                    m = a.record(a.string(), a.unknown()).parse(JSON.parse(r))
                } catch (e) {
                    d = e instanceof Error ? e : void 0, u || (m = {
                        detail: {
                            code: "not_json_response",
                            text: r.substring(0, 1e3)
                        }
                    })
                }
                let b = (0, n.tj)(r),
                    y = Error(JSON.stringify(m)),
                    v = l(e.headers);
                if (v) r = b = "cloudflare_challenge", m = {
                    detail: {
                        code: b
                    }
                }, y = Error(b), d = void 0;
                else if (u && !e.headers.get("content-type")?.includes("application/json")) {
                    b = b ?? "unexpected_content_type";
                    let t = r.substring(0, 1e3);
                    m = {
                        detail: {
                            message: i.a,
                            code: "unexpected_content_type",
                            contentType: e.headers.get("content-type") ?? "",
                            text: t
                        }
                    }, y = Error(t)
                }
                let k = e.headers.get("x-request-id") ?? (u ? e.headers.get("cf-ray") : void 0) ?? void 0,
                    I = new s(r || e.statusText || `Request failed with status ${e.status}`, e.status, b, e.status, void 0, Number.isFinite(w) ? w : void 0, u && e.headers.get("content-type")?.includes("application/json") && null != d ? d : new i.c(t, e.status, m, k, y, e.headers.get("cf-ray") ?? void 0, e.headers.get("x-oai-request-id") ?? void 0), a.boolean().safeParse(m.retryable).data ?? a.object({
                        retryable: a.boolean().optional()
                    }).safeParse(m.detail).data?.retryable);
                I.isCloudflareChallenge = v, I.requestDiagnostics = (0, o.b)(e), I.failureOrigin = "http_response", I.diagnostics = (0, i.e)(I.diagnosticError ?? I, e), I.azureErrorCode = c(e.headers.get("x-ms-error-code"));
                let x = e.headers.get("x-oai-history-initial-retry-after"),
                    _ = null == x ? 0 / 0 : Number(x);
                return Number.isFinite(_) && _ >= 0 && (I.historyInitialRetryAtMs = Date.now() + 1e3 * _), I
            },
            b: c,
            c: l,
            d: function(e) {
                return e instanceof s && 403 === e.status && e.isCloudflareChallenge
            }
        })
    }),
    GDNt: (function(e, t, r) {
        r.d(t, {
            a: () => d.FetchError,
            b: () => p,
            c: () => g,
            d: () => h
        });
        var n = r("hV9T"),
            a = r("ASxG"),
            o = r("vNSg"),
            i = r("w5lF"),
            s = r("KthI"),
            l = r("TL6G"),
            c = r("WFY2"),
            d = r("eShZ");
        let u = a.object({
            error: a.unknown(),
            error_code: a.string().optional().catch(void 0),
            can_retry: a.boolean().optional().catch(void 0),
            error_reason: a.string().optional().catch(void 0)
        });
        class p {
            getRestartBlockers() {
                return [...this.pendingRequests.size > 0 ? ["web-fetch.pending-request"] : [], ...this.streamControllers.size > 0 ? ["web-fetch.active-stream"] : []]
            }
            static instance = null;
            static getInstance() {
                return null == this.instance && (this.instance = new p), this.instance
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
            async get(e, t, r, n, a, o) {
                return this.sendRequest("GET", e, {
                    headers: t,
                    signal: r,
                    assertRequestCurrent: n,
                    expectedIdentity: a,
                    onResponseHeaders: o
                })
            }
            async post(e, t, r, n, a, o, i, s) {
                return this.sendRequest("POST", e, {
                    body: t,
                    headers: r,
                    signal: n,
                    responsePriority: a,
                    assertRequestCurrent: o,
                    expectedIdentity: i,
                    onResponseHeaders: s
                })
            }
            async put(e, t, r, n, a) {
                return this.sendRequest("PUT", e, {
                    body: t,
                    headers: r,
                    signal: n,
                    onUploadProgress: a
                })
            }
            async upload(e, t, a) {
                let {
                    body: i,
                    headers: s = {},
                    onUploadProgress: l,
                    signal: c
                } = a;
                c?.throwIfAborted();
                try {
                    return void await async function(e) {
                        let {
                            body: t,
                            headers: a,
                            method: i,
                            onUploadProgress: s,
                            signal: l,
                            url: c
                        } = e, u = c, p = {
                            ...a
                        }, h = (0, n.Me)(p);
                        if (h) {
                            let e = new URL(c, window.location.origin);
                            if (e.origin !== window.location.origin && ("https:" !== e.protocol || "chatgpt.com" !== e.hostname.toLowerCase())) throw Error("Unsupported authenticated upload origin");
                            let {
                                isBrowserGuestChatSession: t,
                                loadBrowserChatGptAuth: n
                            } = await Promise.resolve().then(r.bind(r, "QdUF")), a = await n();
                            if (l?.throwIfAborted(), null == a) {
                                let {
                                    getBrowserGuestChatRequestUrl: e
                                } = await Promise.resolve().then(r.bind(r, "MwLV")), n = t() ? e(c, i) : null;
                                if (null == n) throw new d.FetchError("File upload requires authentication", 401, void 0, null);
                                u = n
                            } else p.Authorization = `Bearer ${a.accessToken}`, null != a.accountId && (p["ChatGPT-Account-Id"] = a.accountId)
                        }
                        for (let e of (Object.assign(p, (0, o.a)(c)), Object.keys(p))) /^(?:user-agent|sec-ch-ua(?:-|$))/i.test(e) && delete p[e];
                        return new Promise((e, r) => {
                            if (l?.aborted) return void r(new DOMException("Aborted", "AbortError"));
                            let n = new XMLHttpRequest;
                            for (let [e, t] of(n.open(i, u), n.withCredentials = h, Object.entries(p))) n.setRequestHeader(e, t);
                            n.upload.onprogress = e => {
                                let {
                                    lengthComputable: t,
                                    loaded: r,
                                    total: n
                                } = e;
                                t && s?.({
                                    loaded: r,
                                    total: n
                                })
                            };
                            let a = () => n.abort();
                            l?.addEventListener("abort", a, {
                                once: !0
                            }), n.onload = () => {
                                if (n.status >= 200 && n.status < 300) e();
                                else {
                                    let e = new d.FetchError("File upload failed", n.status, void 0, n.status > 0 ? n.status : null);
                                    e.azureErrorCode = (0, d.b)(n.getResponseHeader("x-ms-error-code")), r(e)
                                }
                            }, n.onerror = () => {
                                let e = new d.FetchError("File upload failed", 0, void 0, null, "network");
                                e.uploadTransportErrorKind = "network", r(e)
                            }, n.ontimeout = () => {
                                let e = new d.FetchError("File upload timed out", 0, void 0, null, "network");
                                e.uploadTransportErrorKind = "timeout", r(e)
                            }, n.onabort = () => {
                                r(new DOMException("Aborted", "AbortError"))
                            }, n.onloadend = () => {
                                l?.removeEventListener("abort", a)
                            }, n.send(t)
                        })
                    }({
                        body: i,
                        headers: s,
                        method: e,
                        onUploadProgress: l,
                        signal: c,
                        url: t
                    })
                } catch (e) {
                    if (e instanceof d.FetchError && 403 === e.responseStatus) {
                        let r = URL.parse(t, window.location.origin)?.searchParams.get("se"),
                            n = null == r ? 0 / 0 : Date.parse(r);
                        e.uploadUrlExpired = Number.isFinite(n) && Date.now() >= n
                    }
                    throw e
                }
            }
            async fetch(e) {
                let t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                r.authentication;
                try {
                    t = await (0, s.a)({
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
                    if (t instanceof d.FetchError && !(t.diagnosticError instanceof i.c)) {
                        let r = t.diagnosticError ?? t;
                        t.diagnosticError = (0, i.d)(e, 500, r.message, r)
                    }
                    throw t
                }
                if (r.onResponseHeaders?.(t.headers), !t.ok && !r.returnErrorResponse) throw await (0, d.a)(t, e);
                return t
            }
            stream(e, t) {
                let r, a, o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    l = crypto.randomUUID(),
                    p = new AbortController,
                    {
                        signal: h
                    } = p,
                    g = () => p.abort();
                o.signal?.aborted ? g() : o.signal?.addEventListener("abort", g, {
                    once: !0
                }), this.streamControllers.set(l, p);
                let f = !1,
                    w = e => {
                        if (!f) {
                            f = !0, clearTimeout(r), this.streamControllers.delete(l), o.signal?.removeEventListener("abort", g);
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
                                p.abort()
                            }
                        }
                    },
                    m = (e, n) => {
                        clearTimeout(r), e > 0 && (r = setTimeout(() => {
                            h.aborted || w({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: "Network error",
                                errorKind: "network",
                                failureOrigin: "timeout",
                                errorCode: n,
                                diagnostics: (0, i.e)((0, i.d)(t, 400, i.b, Error(`SSE idle timeout after ${e}ms`), n), a)
                            })
                        }, e))
                    };
                return (async () => {
                    let c = "eof";
                    try {
                        if (a = await async function(e, t) {
                                let {
                                    chatgptSse: r,
                                    onResponse: a,
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
                                    let t, p;
                                    l.throwIfAborted();
                                    let h = new AbortController,
                                        g = h.signal;
                                    l.addEventListener("abort", () => h.abort(l.reason), {
                                        once: !0,
                                        signal: g
                                    });
                                    let f = !1,
                                        w = (e, r) => {
                                            clearTimeout(t), e > 0 && (t = setTimeout(() => {
                                                let t = new d.FetchError("Network error", 500, r, null, "network", void 0, (0, i.d)(c.url, 400, i.b, Error(`SSE ${"stream_open_timeout"===r?"open":"idle"} timeout after ${e}ms`), r));
                                                t.failureOrigin = "timeout", h.abort(t)
                                            }, e))
                                        };
                                    try {
                                        if (null != r && w(r.initialOpenTimeoutMs ?? 6e4, "stream_open_timeout"), p = await (0, n.nf)((0, s.a)(c, g, void 0, r?.onBeforeRequestStart, r?.assertRequestCurrent, null == o ? void 0 : () => o.refreshRequest(g), r?.refreshHeadersBeforeAuthRetry, u), g), l.throwIfAborted(), null != r && w(r.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), f = p.ok && (null == r || p.headers.get("content-type")?.includes("text/event-stream") === !0), a(p), l.throwIfAborted(), !f) throw await (0, n.nf)((0, d.a)(p, c.url, null != r), g);
                                        return p
                                    } catch (i) {
                                        clearTimeout(t), h.abort(), await p?.body?.cancel().catch(() => void 0), l.throwIfAborted();
                                        let r = f || null != u ? void 0 : o?.getDelayMs(i, e);
                                        if (null == o || null == r) throw i;
                                        await new Promise((e, n) => {
                                            let a = () => {
                                                clearTimeout(t), n(new DOMException("Aborted", "AbortError"))
                                            };
                                            l.addEventListener("abort", a, {
                                                once: !0
                                            }), t = setTimeout(() => {
                                                l.removeEventListener("abort", a), e()
                                            }, r)
                                        }), l.throwIfAborted();
                                        let a = await (0, n.nf)(o.refreshRequest(l), l);
                                        c = {
                                            ...c,
                                            ...a
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
                                signal: h,
                                onResponse: e => {
                                    o.onResponse?.({
                                        type: "fetch-stream-response",
                                        requestId: l,
                                        status: e.status,
                                        headers: (0, n.wg)(e.headers),
                                        isEventStream: e.ok && e.headers.get("content-type")?.includes("text/event-stream") === !0
                                    })
                                }
                            }), f) return;
                        if (h.throwIfAborted(), null != o.chatgptSse && m(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), null == a.body) throw new d.FetchError("Streaming response had no body.", 500, void 0, null, "network");
                        if ("ndjson" === o.format)
                            for await (let e of (0, n.Zj)(a.body, h)) {
                                if (h.aborted) break;
                                o.onEvent?.({
                                    type: "fetch-stream-event",
                                    requestId: l,
                                    data: e
                                })
                            } else {
                                let e = new TextEncoder;
                                for await (let r of (0, n.$j)(a.body, h, t => {
                                    f || h.aborted || (null != o.chatgptSse && m(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), "[DONE]" === t && (c = "done"), o.onStreamData?.({
                                        eventBytes: e.encode(t).length,
                                        eventCount: +("[DONE]" !== t)
                                    }), "[DONE]" === t && null != o.chatgptSse && w({
                                        type: "fetch-stream-complete",
                                        requestId: l,
                                        reason: "done"
                                    }))
                                }, o.chatgptSse?.parseEventData)) {
                                    if (h.aborted) break;
                                    if (null != o.chatgptSse) {
                                        if ("ping" === r.event) continue;
                                        let e = u.safeParse(r.data);
                                        if (e.success && e.data.error) {
                                            let r = new d.FetchError(JSON.stringify({
                                                error: e.data.error,
                                                error_code: e.data.error_code,
                                                can_retry: e.data.can_retry
                                            }), a.status, e.data.error_code, a.status, void 0, void 0, (0, i.d)(t, 500, e.data.error, Error(String(e.data.error)), e.data.error_code, e.data.can_retry, e.data.error_reason));
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
                        if (h.throwIfAborted(), null != o.chatgptSse) {
                            clearTimeout(r), await o.onPrematureTermination?.(), h.throwIfAborted(), w({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: "Network error",
                                errorKind: "network",
                                failureOrigin: "transport",
                                diagnostics: (0, i.e)((0, i.d)(t, 400, i.b, Error("No done event received")), a)
                            });
                            return
                        }
                        w({
                            type: "fetch-stream-complete",
                            requestId: l,
                            reason: c
                        })
                    } catch (e) {
                        if (h.aborted || e instanceof Error && "AbortError" === e.name) w({
                            type: "fetch-stream-complete",
                            requestId: l,
                            reason: "aborted"
                        });
                        else {
                            let r = e instanceof d.FetchError ? e.diagnosticError ?? e : e,
                                s = r;
                            if (null != o.chatgptSse && !(r instanceof i.c) && ((0, i.g)(r) || e instanceof d.FetchError && "network" === e.errorKind)) {
                                let e = r instanceof Error ? r : Error(String(r));
                                s = (0, i.d)(t, 400, i.b, e)
                            }
                            let c = e instanceof d.FetchError ? e.errorKind : (0, n.vg)(e),
                                u = null == o.chatgptSse ? void 0 : (e instanceof d.FetchError ? e.diagnostics : void 0) ?? (0, i.e)(s, a);
                            w({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: e instanceof Error ? e.message : "HTTP stream failed",
                                responseStatus: e instanceof d.FetchError ? e.responseStatus ?? void 0 : void 0,
                                errorCode: e instanceof d.FetchError ? e.errorCode : void 0,
                                failureOrigin: (e instanceof d.FetchError ? e.failureOrigin : void 0) ?? ("network" === c ? "transport" : void 0),
                                canRetry: e instanceof Error ? (0, n.sj)(e.message) : void 0,
                                errorKind: c,
                                diagnostics: u
                            })
                        }
                    } finally {
                        await a?.body?.cancel().catch(() => void 0), o.onTransportClose?.()
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
                return h(await this.fetch(e, t), t?.signal)
            }
            async sendRequest(e, t, r) {
                if (!t.startsWith("vscode://codex/")) return this.fetchJson(t, {
                    ...r,
                    method: e
                });
                let n = crypto.randomUUID(),
                    a = {
                        requestId: n,
                        method: e,
                        url: t,
                        headers: r?.headers,
                        body: r?.body,
                        responsePriority: r?.responsePriority
                    };
                return new Promise((e, t) => {
                    let o = () => {
                        this.pendingRequests.delete(n), r?.signal?.removeEventListener("abort", o), l.a.getInstance().dispatchMessage("cancel-fetch", {
                            requestId: n
                        });
                        let e = r?.signal?.reason;
                        t(e instanceof Error ? e : new DOMException("The operation was aborted", "AbortError"))
                    };
                    if (this.pendingRequests.set(n, {
                            cleanup: () => r?.signal?.removeEventListener("abort", o),
                            resolve: e,
                            reject: t
                        }), r?.signal?.addEventListener("abort", o, {
                            once: !0
                        }), r?.signal?.aborted) return void o();
                    try {
                        r?.assertRequestCurrent?.(), l.a.getInstance().dispatchMessage("fetch", a)
                    } catch (e) {
                        throw this.pendingRequests.delete(n), r?.signal?.removeEventListener("abort", o), e
                    }
                })
            }
        }
        async function h(e, t) {
            let r = null;
            if (204 !== e.status) {
                let a;
                try {
                    a = await e.text()
                } catch (r) {
                    throw t?.throwIfAborted(), new d.FetchError(r instanceof Error ? r.message : "Failed to read response body", r instanceof Error && "AbortError" === r.name ? 499 : 500, void 0, e.status, (0, n.vg)(r))
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
        async function g(e) {
            let t = `----codex-upload-${crypto.randomUUID()}`,
                r = new TextEncoder,
                n = (await Promise.all(Array.from(e.entries(), async e => {
                    let [n, a] = e, o = n.replace(/[\r\n"]/g, "");
                    if ("string" == typeof a) return [r.encode(`--${t}\r
Content-Disposition: form-data; name="${o}"\r
\r
${a}\r
`)];
                    let i = a.name.replace(/[\r\n"]/g, "") || "upload";
                    return [r.encode(`--${t}\r
Content-Disposition: form-data; name="${o}"; filename="${i}"\r
Content-Type: ${a.type||"application/octet-stream"}\r
\r
`), await async function(e) {
                        return "function" == typeof e.arrayBuffer ? new Uint8Array(await e.arrayBuffer()) : new Promise((t, r) => {
                            let n = new FileReader;
                            n.onload = () => {
                                n.result instanceof ArrayBuffer ? t(new Uint8Array(n.result)) : r(Error("File upload failed to read file bytes"))
                            }, n.onerror = () => {
                                r(n.error ?? Error("File upload failed to read file bytes"))
                            }, n.readAsArrayBuffer(e)
                        })
                    }(a), r.encode("\r\n")]
                }))).flat();
            n.push(r.encode(`--${t}--\r
`));
            let a = new Uint8Array(n.reduce((e, t) => e + t.byteLength, 0)),
                o = 0;
            for (let e of n) a.set(e, o), o += e.byteLength;
            return {
                bytes: a,
                contentType: `multipart/form-data; boundary=${t}`
            }
        }
    }),
    pkrV: (function(e, t, r) {
        var n = r("GaA7"),
            a = r("xdYK");
        r.d(t, {}, {
            a: function(e) {
                if ((0, a.b)(e)) return !0;
                if (n.a?.websitePreviews == null || !URL.canParse(e)) return !1;
                let t = new URL(e);
                return "https:" === t.protocol && !t.username && !t.password && !t.port
            }
        })
    }),
    j0A9: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("nB3p"),
            i = r("on57"),
            s = r("IPUh"),
            l = r("zd8w"),
            c = r("Wf1j"),
            d = r("oyxz"),
            u = r("Qgfj"),
            p = r("ZtSy"),
            h = r("bf6R"),
            g = r("ikiV"),
            f = r("i1PI"),
            w = r("T1PX"),
            m = r("V8uZ");

        function b(e) {
            let t, r, o = (0, a.c)(10),
                {
                    src: s,
                    width: l,
                    height: c,
                    presentation: d,
                    onError: u
                } = e,
                p = "hero" === d && "h-auto max-h-48 w-full border-b border-subtle object-cover",
                h = "thumbnail" === d && "size-20 rounded-md object-cover",
                g = "standalone" === d && "size-40 rounded-md object-contain";
            return o[0] !== p || o[1] !== h || o[2] !== g ? (t = (0, i.b)("block shrink-0", p, h, g), o[0] = p, o[1] = h, o[2] = g, o[3] = t) : t = o[3], o[4] !== c || o[5] !== u || o[6] !== s || o[7] !== t || o[8] !== l ? (r = (0, n.jsx)("img", {
                className: t,
                alt: "",
                draggable: !1,
                width: l,
                height: c,
                src: s,
                onError: u
            }), o[4] = c, o[5] = u, o[6] = s, o[7] = t, o[8] = l, o[9] = r) : r = o[9], r
        }
        let y = (0, u.f)({
            openWebsite: {
                id: "codex.websitePreview.openWebsite",
                defaultMessage: "Open website",
                description: "Accessible label for opening the previewed website"
            }
        });
        r.d(t, {}, {
            a: function(e) {
                let t, r, u, v, k, I, x, _, E, C, S, T = (0, a.c)(39),
                    {
                        href: A,
                        data: j,
                        openLink: R,
                        actions: M,
                        loadRemoteIcon: O
                    } = e,
                    P = void 0 !== O && O,
                    q = (0, c.a)(),
                    W = (0, w.a)(),
                    [B, F] = (0, l.useState)(null);
                T[0] !== A ? (t = URL.canParse(A) && new URL(A).hostname || A, T[0] = A, T[1] = t) : t = T[1];
                let N = t,
                    D = j?.status === "ready" && j.image?.dataUrl !== B ? j.image : null,
                    L = null != D && D.width / D.height < 1.2,
                    G = null != D && L && j?.status === "ready" && null == j.title && null == j.description,
                    U = j?.status === "ready" && (null != j.title || null != j.description || null != D);
                T[2] !== A || T[3] !== P ? (r = (0, o.g)(A)?.appId === "google-drive" ? (0, n.jsx)(f.a, {
                    "aria-hidden": !0,
                    className: "size-4 shrink-0",
                    fileName: void 0,
                    libraryProvider: "google_drive",
                    mimeType: void 0,
                    size: 16,
                    sourceUrl: A
                }) : (0, n.jsx)(g.a, {
                    className: "size-4 shrink-0 text-secondary",
                    href: A,
                    loadRemote: P
                }), T[2] = A, T[3] = P, T[4] = r) : r = T[4], T[5] !== M || T[6] !== N || T[7] !== A || T[8] !== q ? (u = null != M ? (0, n.jsx)(p.a, {
                    className: "min-w-0 flex-1 truncate text-xs",
                    "aria-label": q.formatMessage(y.openWebsite),
                    appearance: "secondary",
                    href: A,
                    initiator: "markdown_link_click",
                    underline: "hover",
                    children: A
                }) : (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 truncate text-xs text-secondary",
                    children: N
                }), T[5] = M, T[6] = N, T[7] = A, T[8] = q, T[9] = u) : u = T[9], T[10] !== M || T[11] !== A || T[12] !== q || T[13] !== R ? (v = null != M ? (0, n.jsx)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: M
                }) : R ?? (0, n.jsxs)(p.a, {
                    className: "flex shrink-0 items-center gap-1 text-xs",
                    "aria-label": q.formatMessage(y.openWebsite),
                    href: A,
                    initiator: "markdown_link_click",
                    children: [(0, n.jsx)(d.a, {
                        id: "codex.websitePreview.open",
                        defaultMessage: "Open",
                        description: "Link to open a website from its hover preview"
                    }), (0, n.jsx)(h.Cf, {})]
                }), T[10] = M, T[11] = A, T[12] = q, T[13] = R, T[14] = v) : v = T[14], T[15] !== r || T[16] !== u || T[17] !== v ? (k = (0, n.jsxs)("div", {
                    className: "flex h-toolbar shrink-0 items-center gap-2 px-3.5 select-none",
                    children: [r, u, v]
                }), T[15] = r, T[16] = u, T[17] = v, T[18] = k) : k = T[18], T[19] !== j ? (I = null == j && (0, n.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    children: (0, n.jsx)(d.a, {
                        id: "codex.websitePreview.loading",
                        defaultMessage: "Loading preview…",
                        description: "Accessible status while website preview content loads"
                    })
                }), T[19] = j, T[20] = I) : I = T[20];
                let $ = U ? "auto" : 0;
                return T[21] !== $ ? (x = {
                    height: $
                }, T[21] = $, T[22] = x) : x = T[22], T[23] !== W ? (_ = W ? {
                    duration: 0
                } : m.a, T[23] = W, T[24] = _) : _ = T[24], T[25] !== j || T[26] !== U || T[27] !== D || T[28] !== G || T[29] !== L ? (E = U && (0, n.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-y-auto overscroll-contain border-t border-subtle",
                    children: [null != D && !L && (0, n.jsx)(b, {
                        src: D.dataUrl,
                        width: D.width,
                        height: D.height,
                        presentation: "hero",
                        onError: () => F(D.dataUrl)
                    }, D.dataUrl), (null != j.title || null != j.description || L) && (0, n.jsxs)("div", {
                        className: (0, i.b)("flex gap-2.5 px-3.5 py-4", null == j.description ? "items-center" : "items-start", G && "justify-center"),
                        children: [null != D && L && (0, n.jsx)(b, {
                            src: D.dataUrl,
                            width: D.width,
                            height: D.height,
                            presentation: G ? "standalone" : "thumbnail",
                            onError: () => F(D.dataUrl)
                        }, D.dataUrl), (null != j.title || null != j.description) && (0, n.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-1",
                            children: [null != j.title && (0, n.jsx)("h3", {
                                className: "m-0 line-clamp-2 text-sm leading-snug font-semibold text-pretty break-words",
                                children: j.title
                            }), null != j.description && (0, n.jsx)("p", {
                                className: "m-0 line-clamp-2 text-sm leading-snug text-pretty break-words text-secondary",
                                children: j.description
                            })]
                        })]
                    })]
                }), T[25] = j, T[26] = U, T[27] = D, T[28] = G, T[29] = L, T[30] = E) : E = T[30], T[31] !== _ || T[32] !== E || T[33] !== x ? (C = (0, n.jsx)(s.a.div, {
                    className: "flex min-h-0 flex-col overflow-hidden",
                    initial: !1,
                    animate: x,
                    transition: _,
                    children: E
                }), T[31] = _, T[32] = E, T[33] = x, T[34] = C) : C = T[34], T[35] !== C || T[36] !== k || T[37] !== I ? (S = (0, n.jsxs)("div", {
                    className: "flex max-h-[min(--spacing(80),var(--radix-tooltip-content-available-height,--spacing(80)))] min-h-0 w-90 max-w-full flex-col overflow-hidden rounded-xl text-start text-sm font-normal",
                    children: [k, I, C]
                }), T[35] = C, T[36] = k, T[37] = I, T[38] = S) : S = T[38], S
            }
        })
    }),
    gwXy: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("zd8w"),
            s = r("Bbed"),
            l = r("j0A9"),
            c = r("xdYK"),
            d = r("n6oM");
        let u = (0, s.a)(async () => (await r.e(996274).then(r.bind(r, "SteF"))).SlackPreviewContent, {
            suspendToParent: !0,
            errorFallback: e => (0, n.jsx)(l.a, {
                ...e,
                data: {
                    status: "unavailable"
                }
            })
        });

        function p(e) {
            let t, r = (0, a.c)(3),
                i = (0, o.x)(d.b, e.href);
            return r[0] !== i || r[1] !== e ? (t = (0, n.jsx)(l.a, {
                ...e,
                data: i
            }), r[0] = i, r[1] = e, r[2] = t) : t = r[2], t
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, s = (0, a.c)(6);
                s[0] !== e ? ({
                    hostId: r,
                    ...t
                } = e, s[0] = e, s[1] = t, s[2] = r) : (t = s[1], r = s[2]);
                let d = void 0 === r ? "local" : r;
                return s[3] !== d || s[4] !== t ? (o = (0, c.b)(t.href) ? (0, n.jsx)(i.Suspense, {
                    fallback: (0, n.jsx)(l.a, {
                        ...t,
                        data: void 0
                    }),
                    children: (0, n.jsx)(u, {
                        ...t,
                        hostId: d
                    })
                }) : (0, n.jsx)(p, {
                    ...t
                }), s[3] = d, s[4] = t, s[5] = o) : o = s[5], o
            }
        })
    }),
    xFPr: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("zd8w"),
            s = r("CqQF"),
            l = r("OWtl"),
            c = r("gwXy"),
            d = r("dDbp"),
            u = r("xOEs");
        r.d(t, {}, {
            a: function(e) {
                let t, r, p, h, g, f, w, m = (0, a.c)(29),
                    {
                        href: b,
                        hostId: y,
                        children: v,
                        delayDuration: k,
                        triggerElement: I,
                        tooltipId: x,
                        onOpenChange: _,
                        openLink: E,
                        actions: C,
                        loadRemoteIcon: S,
                        side: T
                    } = e,
                    A = void 0 === k ? 700 : k,
                    j = (0, o.y)(l.a),
                    R = (0, i.useRef)(null),
                    [M, O] = (0, i.useState)("bottom"),
                    P = T ?? M;
                m[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => R.current?.(), m[0] = t) : t = m[0], m[1] !== y || m[2] !== b ? (r = [b, y], m[1] = y, m[2] = b, m[3] = r) : r = m[3], (0, i.useEffect)(t, r), m[4] !== A ? (p = () => A, m[4] = A, m[5] = p) : p = m[5];
                let q = null != I,
                    W = null != I || void 0;
                m[6] !== y || m[7] !== b || m[8] !== j || m[9] !== I ? (h = e => {
                    R.current?.(), null == I && "touch" !== e.pointerType && 0 === e.buttons && (O((0, d.a)(e.currentTarget)), R.current = (0, u.a)(j, b, e.currentTarget, {
                        hostId: y
                    }))
                }, m[6] = y, m[7] = b, m[8] = j, m[9] = I, m[10] = h) : h = m[10], m[11] === Symbol.for("react.memo_cache_sentinel") ? (g = () => R.current?.(), m[11] = g) : g = m[11], m[12] !== C || m[13] !== y || m[14] !== b || m[15] !== S || m[16] !== E ? (f = (0, n.jsx)(c.a, {
                    href: b,
                    hostId: y,
                    openLink: E,
                    actions: C,
                    loadRemoteIcon: S
                }, b), m[12] = C, m[13] = y, m[14] = b, m[15] = S, m[16] = E, m[17] = f) : f = m[17];
                let B = v ?? null;
                return m[18] !== _ || m[19] !== P || m[20] !== B || m[21] !== p || m[22] !== q || m[23] !== W || m[24] !== h || m[25] !== f || m[26] !== x || m[27] !== I ? (w = (0, n.jsx)(s.a, {
                    align: "start",
                    cloneCustomTrigger: !0,
                    closeOnTriggerClick: !0,
                    getDelayDuration: p,
                    disableHoverOpen: q,
                    interactive: !0,
                    keyboardNavigation: !0,
                    open: W,
                    onOpenChange: _,
                    onPointerEnter: h,
                    onPointerLeave: g,
                    scaleAvailableSizeWithZoom: !0,
                    selectable: !0,
                    side: P,
                    sideOffset: 4,
                    tooltipContent: f,
                    tooltipMaxWidth: "min(22.5rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
                    tooltipId: x,
                    triggerElement: I,
                    variant: "rich",
                    children: B
                }), m[18] = _, m[19] = P, m[20] = B, m[21] = p, m[22] = q, m[23] = W, m[24] = h, m[25] = f, m[26] = x, m[27] = I, m[28] = w) : w = m[28], w
            }
        })
    }),
    dDbp: (function(e, t, r) {
        r.d(t, {}, {
            a: function(e) {
                let {
                    top: t,
                    bottom: r
                } = e.getBoundingClientRect(), n = e.ownerDocument.documentElement.clientHeight - r;
                return n < 384 && t > n ? "top" : "bottom"
            }
        })
    }),
    xdYK: (function(e, t, r) {
        function n(e) {
            if (!URL.canParse(e)) return null;
            let t = new URL(e);
            return !("https:" === t.protocol && !t.username && !t.password && !t.port && /^[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.enterprise)?\.slack\.com$/u.test(t.hostname)) || ["www.slack.com", "api.slack.com", "status.slack.com"].includes(t.hostname) ? null : t
        }
        r.d(t, {}, {
            a: function(e) {
                let t = n(e);
                if (null == t || "app.slack.com" === t.hostname) return null;
                let r = /^\/team\/([UW][A-Z0-9]+)\/?$/u.exec(t.pathname);
                if (null != r) return {
                    kind: "profile",
                    hostname: t.hostname,
                    userId: r[1]
                };
                let a = /^\/archives\/([CDG][A-Z0-9]+)\/p(\d{10})(\d{6})\/?$/u.exec(t.pathname);
                if (null == a) return null;
                let o = `${a[2]}.${a[3]}`,
                    i = t.searchParams.get("thread_ts") ?? o;
                return /^\d{10}\.\d{6}$/u.test(i) ? {
                    kind: "message",
                    hostname: t.hostname,
                    channelId: a[1],
                    messageTs: o,
                    threadTs: i
                } : null
            },
            b: function(e) {
                return null != n(e)
            }
        })
    }),
    n6oM: (function(e, t, r) {
        r.d(t, {
            a: () => f,
            b: () => g
        });
        var n = r("BolX"),
            a = r("GaA7"),
            o = r("OWtl"),
            i = r("hV9T"),
            s = r("mkNg"),
            l = r("YwDZ");
        let c = (0, n.i)(o.a, u, (e, t) => {
                let {
                    set: r
                } = t, n = () => r(u(e));
                return n(), a.a?.browserHost == null ? void 0 : s.a.subscribe(n)
            }, {
                autoDispose: !0,
                isEqual: (e, t) => e?.conversationId === t?.conversationId && e?.browserTabId === t?.browserTabId && e?.pageTitle === t?.pageTitle
            }),
            d = {
                preview$: (0, n.d)(o.a, (e, t) => {
                    let {
                        get: r
                    } = t, n = r(c, e);
                    if (null == n) return null;
                    let {
                        data: a,
                        isPending: o
                    } = r(l.a, {
                        conversationId: n.conversationId,
                        browserTabId: n.browserTabId
                    });
                    return null != a ? {
                        status: "ready",
                        title: n.pageTitle || null,
                        description: null,
                        image: a
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
            if (a.a?.browserHost == null) return null;
            let t = (0, i.sg)(e);
            return s.a.getOpenTabs().find(e => {
                if ((0, i.sg)(e.url) !== t) return !1;
                let r = s.a.getSnapshot(e.conversationId, e.browserTabId);
                return r?.tabType === i.$.WEB && !r.isLoading && !r.isSuspended && s.a.pages.getHost(e.conversationId, e.browserTabId)?.getCaptureViewportSize() != null
            }) ?? null
        }
        var p = r("xdYK");
        let h = (0, n.q)(o.a, e => {
                let t = new URL(e);
                return t.hash = "", {
                    queryKey: ["website-preview", t.href],
                    staleTime: e => e.state.data?.status === "ready" && null != e.state.data.image ? 3e5 : 3e4,
                    gcTime: 3e5,
                    retry: !1,
                    refetchOnWindowFocus: !1,
                    queryFn: async () => {
                        try {
                            return await a.a?.websitePreviews?.get({
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
            g = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null != d) {
                    let t = r(d.preview$, e);
                    if (null !== t) return t
                }
                return r(h, e).data
            }, {
                autoDispose: !0
            });
        async function f(e, t) {
            (0, p.b)(t) || await d?.prefetch(e, t) || await e.query.getOrFetch(h, t)
        }
    }),
    xOEs: (function(e, t, r) {
        var n = r("xdYK"),
            a = r("n6oM");
        r.d(t, {}, {
            a: function(e, t, o) {
                let {
                    hostId: i = "local",
                    pullRequest: s
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, l = new AbortController, c = () => {
                    clearTimeout(d), l.abort()
                }, d = setTimeout(() => {
                    c(), o.isConnected && (async function(e, t, o, i) {
                        if (null != i) {
                            let {
                                prefetchGitHubPullRequestPreview: t
                            } = await r.e(330528).then(r.bind(r, "CXhr"));
                            await t(e, o, i)
                        } else if ((0, n.b)(t)) {
                            let {
                                prefetchSlackPreview: n
                            } = await r.e(147245).then(r.bind(r, "dmHJ"));
                            await n(e, t, o)
                        } else await (0, a.a)(e, t)
                    })(e, t, i, s).catch(() => {})
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
    EmPb: (function(e, t, r) {
        r.d(t, {
            a: () => O
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("HlCq"),
            i = r("slpy"),
            s = r("zd8w"),
            l = r("oyxz"),
            c = r("SZ0q"),
            d = r("rGfR"),
            u = r("qPb9"),
            p = r("s7gZ"),
            h = r("Sm6l"),
            g = r("WJLZ"),
            f = r("kKbQ"),
            w = r("FrrB"),
            m = r("Bbed"),
            b = r("QIeM"),
            y = r("GGR1"),
            v = r("zOE4"),
            k = r("aSkF"),
            I = r("Y94G"),
            x = r("sU1J"),
            _ = r("YhE1"),
            E = r("qixt"),
            C = r("HgkB"),
            S = r("snrm"),
            T = r("BolX"),
            A = r("OWtl"),
            j = r("tW82");

        function R(e) {
            let t, r = (0, a.c)(2),
                {
                    children: o
                } = e;
            return r[0] !== o ? (t = (0, n.jsx)(j.a, {
                children: (0, n.jsx)(T.b, {
                    scope: A.a,
                    children: o
                })
            }), r[0] = o, r[1] = t) : t = r[1], t
        }
        let M = (0, m.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(100643), r.e(355084), r.e(135441), r.e(125386), r.e(40758), r.e(403528), r.e(828947)]).then(r.bind(r, "HpTl"))).PageEditor, {
            fallback: (0, n.jsx)(v.LoadingPage, {}),
            errorFallback: (0, n.jsx)(w.a, {
                title: (0, n.jsx)(l.a, {
                    id: "codex.canvas.inlinePage.loadError",
                    defaultMessage: "Couldn’t load this page",
                    description: "Error when the embedded Page editor cannot load in Canvas"
                }),
                actions: (0, n.jsx)(h.a, {
                    color: "secondary",
                    onClick: () => window.location.reload(),
                    children: (0, n.jsx)(l.a, {
                        id: "codex.canvas.inlinePage.reload",
                        defaultMessage: "Reload",
                        description: "Reload the window to recover the embedded Page editor"
                    })
                })
            })
        });

        function O(e) {
            let t, r, l, h, w, m, v, T, A, j, M, O, q, W, B, F, N, D = (0, a.c)(25),
                {
                    children: L,
                    loadingFallback: G
                } = e,
                [U, $] = (0, s.useState)(null);
            (0, I.c)("core_providers.render"), D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(x.a, {}), l = (0, n.jsx)(g.a, {}), h = (0, n.jsx)(c.a, {}), w = (0, n.jsx)(p.a, {}), m = (0, n.jsx)(C.a, {}), v = (0, n.jsx)(E.c, {}), T = (0, n.jsx)(d.a, {}), A = (0, n.jsx)(f.a, {}), j = (0, n.jsx)(b.a, {}), r = (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)(_.a, {})
            }), D[0] = t, D[1] = r, D[2] = l, D[3] = h, D[4] = w, D[5] = m, D[6] = v, D[7] = T, D[8] = A, D[9] = j) : (t = D[0], r = D[1], l = D[2], h = D[3], w = D[4], m = D[5], v = D[6], T = D[7], A = D[8], j = D[9]), D[10] !== G ? (M = void 0 === G ? (0, n.jsx)(y.a, {
                debugName: "App content"
            }) : G, D[10] = G, D[11] = M) : M = D[11];
            let z = U ?? void 0;
            D[12] !== L ? (O = (0, n.jsx)(i.a.Provider, {
                children: (0, n.jsx)(k.a, {
                    value: P,
                    children: L
                })
            }), D[12] = L, D[13] = O) : O = D[13], D[14] !== z || D[15] !== O ? (q = (0, n.jsx)(o.a, {
                radixPortalContainer: z,
                children: O
            }), D[14] = z, D[15] = O, D[16] = q) : q = D[16], D[17] !== M || D[18] !== q ? (W = (0, n.jsx)(s.Suspense, {
                fallback: M,
                children: q
            }), D[17] = M, D[18] = q, D[19] = W) : W = D[19], D[20] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, n.jsx)("div", {
                ref: $,
                className: "pointer-events-none fixed inset-0 z-60 zoom-adjusted-viewport h-[calc(100dvh/var(--codex-window-zoom))] contain-layout [&>*]:pointer-events-auto"
            }), D[20] = B) : B = D[20], D[21] !== W ? (F = (0, n.jsxs)(n.Fragment, {
                children: [t, l, h, w, m, v, T, A, j, r, W, B]
            }), D[21] = W, D[22] = F) : F = D[22];
            let H = F;
            return D[23] !== H ? (N = (0, n.jsx)(u.a, {
                children: (0, n.jsx)(S.a, {
                    children: (0, n.jsx)(R, {
                        children: H
                    })
                })
            }), D[23] = H, D[24] = N) : N = D[24], N
        }

        function P(e) {
            return (0, n.jsx)(M, {
                ...e
            })
        }
    }),
    PZWn: (function(e, t, r) {
        var n = r("BolX"),
            a = r("OWtl"),
            o = r("tzYO"),
            i = r("vXOR");
        let s = (0, n.v)(a.a, e => ({
                mode: "custom",
                overridden: !1
            })),
            l = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(o.d);
                return null == n ? {
                    mode: "custom",
                    overridden: !1
                } : r(s, {
                    ...n,
                    conversationId: e
                })
            }),
            c = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(l, e).mode
            });
        r.d(t, {
            a: () => i.l
        }, {
            b: function(e, t, r) {
                let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                    a = e.get(o.d);
                null != a && e.set(s, {
                    ...a,
                    conversationId: t
                }, {
                    mode: r,
                    overridden: n
                })
            },
            c: l,
            d: c
        })
    }),
    SGof: (function(e, t, r) {
        var n = r("LLIt"),
            a = r("TFzY");
        r.d(t, {}, {
            a: function(e, t) {
                let r = e?.model ?? null,
                    o = t?.models.find(e => e.model === r) ?? t?.models.find(e => `${e.model}-wm` === r),
                    i = a.c.safeParse(e?.reasoningEffort);
                return {
                    model: o?.model ?? r,
                    reasoningEffort: i.success ? n.a[i.data] : e?.reasoningEffort ?? null
                }
            },
            b: function(e, t, r) {
                let o = !(0, a.n)(e, t) && (0, a.n)(e, `${t}-wm`) ? `${t}-wm` : t,
                    i = e.modelConfigBySlug?.[o]?.thinkingEfforts?.find(e => n.a[e.thinking_effort] === r)?.thinking_effort;
                return {
                    model: o,
                    reasoningEffort: i ?? r
                }
            }
        })
    }),
    fNL0: (function(e, t, r) {
        let n = (0, r("zd8w").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    xfIo: (function(e, t, r) {
        var n = r("BolX"),
            a = r("OWtl"),
            o = r("l2g8"),
            i = r("tzYO");
        let s = (0, n.c)(a.a, e => {
            let {
                get: t
            } = e, r = t(i.c), n = r.data?.settings?.serviceTier;
            return {
                serviceTier: (0, o.l)(null == n || "standard" === n ? null : n),
                isLoading: r.data?.settings == null || r.isFetching
            }
        });
        r.d(t, {}, {
            a: s
        })
    }),
    tzYO: (function(e, t, r) {
        var n = r("BolX"),
            a = r("hV9T"),
            o = r("StMt"),
            i = r("Cslg"),
            s = r("OFP1"),
            l = r("vLsY"),
            c = r("OWtl"),
            d = r("rvFo"),
            u = r("HFSu"),
            p = r("eShZ");
        let h = (0, n.c)(c.a, e => {
                let {
                    get: t
                } = e, r = t(i.f), n = t(i.k);
                return t(o.a, {
                    name: "work.cloud-orchestration.preferences"
                }).isCapable && "allowed" === t(i.l).status && "allowed" === t(s.u).status && null != r && null != n ? {
                    accountId: r,
                    userId: n
                } : null
            }),
            g = (0, n.r)(c.a, e => {
                let {
                    get: t,
                    scope: n
                } = e, o = t(h);
                return {
                    queryKey: ["work-preferences", o?.accountId, o?.userId],
                    enabled: null != o,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == o) throw new DOMException("Work account unavailable", "AbortError");
                        let i = await u.CodexRequest.safeGet("/wham/work/settings", {
                            expectedIdentity: o,
                            additionalHeaders: {
                                [a.ac]: o.accountId
                            },
                            signal: t
                        });
                        if (null == i.settings) {
                            let {
                                readInitialWorkPreferences: e
                            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(289049)]).then(r.bind(r, "E6WR")), s = await e(n), l = n.get(h);
                            if (t.aborted || l?.accountId !== o.accountId || l.userId !== o.userId) throw new DOMException("Work account changed", "AbortError");
                            try {
                                i = await u.CodexRequest.safePatch("/wham/work/settings", {
                                    expectedIdentity: o,
                                    additionalHeaders: {
                                        [a.ac]: o.accountId
                                    },
                                    requestBody: {
                                        expected_revision: 0,
                                        settings: s
                                    },
                                    expectedErrorStatuses: [409],
                                    signal: t
                                })
                            } catch (e) {
                                if (!(e instanceof p.FetchError) || 409 !== e.status) throw e;
                                i = await u.CodexRequest.safeGet("/wham/work/settings", {
                                    expectedIdentity: o,
                                    additionalHeaders: {
                                        [a.ac]: o.accountId
                                    },
                                    signal: t
                                })
                            }
                        }
                        return {
                            ...i,
                            settings: null == i.settings ? null : (0, a.Bh)().schema.parse(i.settings)
                        }
                    },
                    staleTime: d.b.ONE_MINUTE,
                    refetchOnWindowFocus: "always",
                    retry: !1
                }
            }),
            f = (0, n.p)(c.a, e => {
                let {
                    get: t,
                    scope: r
                } = e, n = t(h);
                return {
                    mutationKey: ["update-work-preferences", n?.accountId, n?.userId],
                    mutationFn: e => r.queryClient.getMutationCache().build(r.queryClient, {
                        scope: {
                            id: JSON.stringify(["work-preferences", n?.accountId, n?.userId])
                        },
                        retry: !1,
                        mutationFn: async () => {
                            let t = r.query.snapshot(g),
                                o = r.get(h);
                            if (null == n || o?.accountId !== n.accountId || o.userId !== n.userId) throw new DOMException("Work preferences unavailable", "AbortError");
                            let i = await t.getOrFetch();
                            await t.cancel();
                            let s = r.get(h);
                            if (s?.accountId !== n.accountId || s.userId !== n.userId) throw new DOMException("Work preferences unavailable", "AbortError");
                            let c = await u.CodexRequest.safePatch("/wham/work/settings", {
                                expectedIdentity: n,
                                additionalHeaders: {
                                    [a.ac]: n.accountId
                                },
                                requestBody: {
                                    expected_revision: i.revision,
                                    settings: e
                                },
                                expectedErrorStatuses: [409]
                            });
                            t.setData({
                                ...c,
                                settings: null == c.settings ? null : (0, a.Bh)().schema.parse(c.settings)
                            }), (0, l.a)(["work-preferences", n.accountId, n.userId])
                        }
                    }).execute(void 0)
                }
            });
        r.d(t, {}, {
            a: function(e) {
                let t = e.get(h);
                if (null == t) return;
                let r = e.get(g);
                if (void 0 === r.data || r.isStale) return e.query.fetch(g).then(() => {
                    let r = e.get(h);
                    if (r?.accountId !== t.accountId || r.userId !== t.userId) throw new DOMException("Work account changed", "AbortError")
                })
            },
            b: f,
            c: g,
            d: h
        })
    }),
    rhkM: (function(e, t, r) {
        let n = null;
        r.d(t, {}, {
            a: function(e) {
                if (null == n) throw Error("Browser Git execution host resolver is unavailable");
                return n(e)
            },
            b: function(e) {
                n = e
            }
        })
    }),
    yiHb: (function(e, t, r) {
        r.d(t, {
            a: () => p
        });
        var n = r("ZG9f"),
            a = r("WCw3"),
            o = r("hV9T"),
            i = r("rhkM"),
            s = r("WFY2"),
            l = r("CxiD");
        class c {
            workerId;
            pending = new Map;
            constructor(e) {
                this.workerId = e
            }
            request(e, t) {
                let r = e.signal;
                if (r?.aborted) return Promise.reject((0, l.a)());
                let n = (0, o.jf)("function" == typeof crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
                    a = {
                        enqueuedAtMs: Date.now(),
                        id: n,
                        method: e.method,
                        params: e.params,
                        trace: e.trace
                    },
                    i = () => {
                        let e = this.take(n);
                        if (null != e) {
                            e.reject((0, l.a)());
                            try {
                                Promise.resolve(t({
                                    type: "worker-request-cancel",
                                    workerId: this.workerId,
                                    id: n
                                })).catch(() => {})
                            } catch {}
                        }
                    },
                    s = new Promise((t, a) => {
                        this.pending.set(n, {
                            method: e.method,
                            resolve: e => {
                                t(e)
                            },
                            reject: a,
                            disposeSignalListener: () => {
                                r?.removeEventListener("abort", i)
                            },
                            rejectHandled: e => {
                                s.catch(() => {}), a(e)
                            }
                        })
                    });
                r?.addEventListener("abort", i);
                let c = e => {
                    this.take(n)?.reject(e instanceof Error ? e : Error(String(e)))
                };
                try {
                    Promise.resolve(t({
                        type: "worker-request",
                        workerId: this.workerId,
                        request: a
                    })).catch(c)
                } catch (e) {
                    c(e)
                }
                return s
            }
            rejectAll(e) {
                for (let t of this.pending.keys()) this.take(t)?.reject(e)
            }
            handleResponse(e) {
                if ("worker-response" !== e.type) return;
                let t = this.take(e.response.id);
                if (!t) return;
                if (t.method !== e.response.method) return void t.reject(Error("Mismatched worker response method"));
                if ("ok" === e.response.result.type) return void t.resolve(e.response.result.value);
                let r = Error(e.response.result.error.message);
                try {
                    s.a.warning("worker_rpc_response_error", {
                        safe: {
                            workerId: e.workerId,
                            method: e.response.method
                        },
                        sensitive: {
                            error: r
                        }
                    })
                } catch {}
                t.rejectHandled(r)
            }
            take(e) {
                let t = this.pending.get(e);
                return this.pending.delete(e), t?.disposeSignalListener(), t
            }
        }
        class d {
            workerId;
            pending;
            listeners = new Map;
            allEventListeners = new Set;
            workerPromise = null;
            executionHostRpc = null;
            workerError = null;
            constructor(e) {
                this.workerId = e, this.pending = new c(e)
            }
            async request(e) {
                let t;
                if (e.signal?.aborted) throw (0, l.a)();
                try {
                    let r = this.getWorker();
                    t = await (null == e.signal ? r : (0, o.nf)(r, e.signal))
                } catch (t) {
                    if (e.signal?.aborted) throw (0, l.a)();
                    throw t instanceof Error ? t : Error(String(t))
                }
                if (null != this.workerError) throw this.workerError;
                return this.pending.request(e, e => {
                    t.postMessage(e)
                })
            }
            subscribe(e, t) {
                return (0, l.d)(this.listeners, e, t)
            }
            getWorker() {
                if (null != this.workerPromise) return this.workerPromise;
                if ("git" !== this.workerId) throw Error(`Browser worker RPC is unavailable for ${this.workerId}`);
                return this.workerPromise = this.initializeWorker().catch(e => {
                    throw this.workerPromise = null, e
                }), this.workerPromise
            }
            async initializeWorker() {
                let e, {
                        createBrowserGitWorker: t
                    } = await r.e(734595).then(r.bind(r, "jOkQ")),
                    o = t();
                try {
                    return e = new MessageChannel, this.executionHostRpc = (0, n.e)(e.port1, new a.a(i.a)), o.postMessage(e.port2, [e.port2]), o.addEventListener("message", e => {
                        this.handleMessage(e.data)
                    }), o.addEventListener("error", e => {
                        null == this.workerError && (this.workerError = Error(e.message || "Browser Git worker failed")), this.pending.rejectAll(this.workerError), this.executionHostRpc?.[Symbol.dispose]()
                    }), o
                } catch (t) {
                    throw this.executionHostRpc?.[Symbol.dispose](), this.executionHostRpc = null, e?.port1.close(), e?.port2.close(), o.terminate(), t
                }
            }
            handleMessage(e) {
                (0, l.c)(this.workerId, e) && (0, l.b)({
                    message: e,
                    pending: this.pending,
                    listeners: this.listeners,
                    allEventListeners: this.allEventListeners
                })
            }
        }
        let u = new Map;

        function p(e) {
            let t = u.get(e);
            if (t) return t;
            switch (e) {
                case "computer-use": {
                    let t = new d("computer-use");
                    return u.set(e, t), t
                }
                case "git": {
                    let t = new d("git");
                    return u.set(e, t), t
                }
            }
        }
    }),
    CxiD: (function(e, t, r) {
        r.d(t, {}, {
            a: function() {
                let e = Error("Aborted");
                return e.name = "AbortError", e
            },
            b: function(e) {
                let {
                    message: t,
                    pending: r,
                    listeners: n,
                    allEventListeners: a
                } = e;
                if ("worker-event" === t.type) {
                    let e = t.event;
                    a.forEach(t => {
                        t(e)
                    });
                    let r = n.get(e.type);
                    if (!r) return;
                    r.forEach(t => {
                        t(e)
                    });
                    return
                }
                r.handleResponse(t)
            },
            c: function(e, t) {
                if (null == t || "object" != typeof t || !("type" in t) || !("workerId" in t)) return !1;
                let r = t.type;
                return t.workerId === e && ("worker-response" === r || "worker-event" === r)
            },
            d: function(e, t, r) {
                let n = e.get(t);
                return null == n && (n = new Set, e.set(t, n)), n.add(r), () => {
                    n.delete(r), 0 === n.size && e.delete(t)
                }
            }
        })
    }),
    LNWO: (function(e, t, r) {
        var n = r("BolX"),
            a = r("Cslg"),
            o = r("OFP1"),
            i = r("OWtl"),
            s = r("OMIV"),
            l = r("Pagv");
        let c = "499051678",
            d = "1355972088",
            u = {
                canAccess: !1,
                canBuild: !1,
                canShare: !1,
                canPublishToDirectory: !1
            },
            p = {
                canAccess: !0,
                canBuild: !0,
                canShare: !0,
                canPublishToDirectory: !0
            },
            h = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                if (!t(s.d, l.a)) return t(s.g, l.a) ? null : u;
                let r = t(a.m);
                if (r.authLoading && null == r.authMethod || r.accountLoading && (null == r.accountId || null == r.accountStructure)) return null;
                if ("chatgpt" !== r.authMethod || "workspace" !== r.accountStructure || null == r.accountId || r.accountId !== r.authenticatedAccountId) return u;
                if (t(s.d, c)) return p;
                if (t(s.g, c)) return null;
                let n = t(s.d, d);
                if (!n && t(s.g, d)) return null;
                let i = t(o.l, r.accountId);
                if (i.isLoading) return null;
                if (i.isError || null == i.data) return u;
                if (!n) return i.data.beta_settings.hermes ? p : u;
                let h = i.data.permissions?.includes("chatgpt.workspace.feature.hermes.access") === !0;
                return {
                    canAccess: h,
                    canShare: h && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.share.access") === !0,
                    canPublishToDirectory: h && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.share.access") === !0 && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.publish.access") === !0,
                    canBuild: h && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.builder.access") === !0
                }
            }),
            g = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(h)?.canAccess ?? null
            }),
            f = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(h)?.canBuild ?? null
            }),
            w = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(h)?.canShare ?? null
            }),
            m = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(h)?.canPublishToDirectory ?? null
            });
        r.d(t, {}, {
            a: g,
            b: f,
            c: m,
            d: w
        })
    }),
    ovrt: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("oyxz"),
            i = r("jqIZ"),
            s = r("PkPj"),
            l = r("X3K1"),
            c = r("ZGaK");

        function d(e) {
            let t, r, i, s = (0, a.c)(4),
                {
                    directory: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                id: "workspaceAgents.index.loading",
                defaultMessage: "Loading agents",
                description: "Accessible status while the Workspace Agents list loads"
            }), s[0] = t) : t = s[0];
            let d = t;
            if (!(void 0 !== l && l)) {
                let e;
                return s[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsxs)("div", {
                    role: "status",
                    children: [(0, n.jsx)("span", {
                        className: "sr-only",
                        children: d
                    }), Array.from({
                        length: 4
                    }, p)]
                }), s[1] = e) : e = s[1], e
            }
            return s[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: d
            }), s[2] = r) : r = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsxs)(c.a, {
                children: [r, (0, n.jsx)(c.b, {
                    className: "@2xl/skills-grid:grid-cols-3",
                    children: Array.from({
                        length: 6
                    }, u)
                })]
            }), s[3] = i) : i = s[3], i
        }

        function u(e, t) {
            return (0, n.jsx)("div", {
                "aria-hidden": !0,
                className: "flex min-h-50 flex-col gap-2 rounded-xl border-hairline border-default bg-surface p-5 dark:border-transparent",
                children: (0, n.jsxs)("div", {
                    className: "flex flex-1 flex-col gap-2",
                    children: [(0, n.jsx)(h, {
                        className: "size-10"
                    }), (0, n.jsx)(h, {
                        className: "h-4 w-32 max-w-full"
                    }), (0, n.jsx)(h, {
                        className: "h-4"
                    }), (0, n.jsx)(h, {
                        className: "h-4 w-4/5"
                    }), (0, n.jsx)(h, {
                        className: "mt-auto h-4 w-24 max-w-full"
                    })]
                })
            }, t)
        }

        function p(e, t) {
            return (0, n.jsxs)("div", {
                className: "flex min-h-16 items-center gap-4 border-b-hairline border-default p-3 last:border-b-0",
                children: [(0, n.jsx)(h, {
                    className: "size-10 shrink-0"
                }), (0, n.jsxs)("div", {
                    className: "flex min-w-0 flex-1 flex-col gap-1.5",
                    children: [(0, n.jsx)(h, {
                        className: "h-3 w-28 max-w-full"
                    }), (0, n.jsx)(h, {
                        className: "h-3 w-20 max-w-full"
                    })]
                })]
            }, t)
        }

        function h(e) {
            let t, r = (0, a.c)(2),
                {
                    className: o
                } = e;
            return r[0] !== o ? (t = (0, n.jsx)(l.a, {
                className: o,
                size: "custom",
                variant: "chatgpt"
            }), r[0] = o, r[1] = t) : t = r[1], t
        }
        r.d(t, {}, {
            a: d,
            b: function() {
                let e, t, r, l, c = (0, a.c)(6),
                    [u] = (0, i.gb)();
                c[0] !== u ? (e = "directory" === u.get("tab") || !!u.get("q")?.trim(), c[0] = u, c[1] = e) : e = c[1];
                let p = e;
                return c[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                    id: "workspaceAgents.index.subtitle",
                    defaultMessage: "Keep work moving 24/7 with agents",
                    description: "Subtitle on the Agents index page"
                }), r = (0, n.jsx)(o.a, {
                    id: "workspaceAgents.index.pageTitle",
                    defaultMessage: "Agents",
                    description: "Title of the Agents index page"
                }), c[2] = t, c[3] = r) : (t = c[2], r = c[3]), c[4] !== p ? (l = (0, n.jsx)("div", {
                    className: "flex h-full min-h-0 flex-col bg-surface text-default",
                    children: (0, n.jsx)(s.b, {
                        contentWidth: "directory",
                        headerPlacement: "inline",
                        headerVariant: "directory",
                        subtitle: t,
                        title: r,
                        children: (0, n.jsx)(d, {
                            directory: p
                        })
                    })
                }), c[4] = p, c[5] = l) : l = c[5], l
            }
        })
    }),
    Fg7k: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("Wf1j"),
            i = r("YKJj");
        r.d(t, {}, {
            a: function(e) {
                let t, r, s, l, c, d, u = (0, a.c)(18);
                u[0] !== e ? ({
                    isWorkspaceAgentHome: t,
                    singleLine: s,
                    ...r
                } = e, u[0] = e, u[1] = t, u[2] = r, u[3] = s) : (t = u[1], r = u[2], s = u[3]);
                let p = void 0 !== s && s,
                    h = (0, o.a)(),
                    g = r.state.composerProps.workspaceAgent;
                u[4] !== g || u[5] !== h || u[6] !== t || u[7] !== r.placeholder ? (l = t && null != g ? h.formatMessage({
                    id: "workspaceAgents.detail.composerPlaceholder",
                    defaultMessage: "Ask {agentName}",
                    description: "Placeholder in the composer on a Workspace Agent page"
                }, {
                    agentName: g.name
                }) : r.placeholder, u[4] = g, u[5] = h, u[6] = t, u[7] = r.placeholder, u[8] = l) : l = u[8];
                let f = t && p ? "auto-single-line" : r.composerLayoutMode;
                return u[9] !== g || u[10] !== t || u[11] !== r.state ? (c = t ? {
                    ...r.state,
                    composerProps: {
                        ...r.state.composerProps,
                        hideModelPicker: !0,
                        hiddenSystemHint: null == g ? r.state.composerProps.hiddenSystemHint : `custom_agent:${g.agent_id}`
                    }
                } : r.state, u[9] = g, u[10] = t, u[11] = r.state, u[12] = c) : c = u[12], u[13] !== r || u[14] !== l || u[15] !== f || u[16] !== c ? (d = (0, n.jsx)(i.a, {
                    ...r,
                    placeholder: l,
                    composerLayoutMode: f,
                    state: c
                }), u[13] = r, u[14] = l, u[15] = f, u[16] = c, u[17] = d) : d = u[17], d
            }
        })
    }),
    aXbW: (function(e, t, r) {
        var n = r("jqIZ"),
            a = r("Pagv");
        r.d(t, {}, {
            a: function(e, t) {
                if (null == (0, n.J)({
                        path: a.g,
                        end: !1
                    }, e)) return t;
                let r = new URLSearchParams(t);
                return r.delete("memory_channel"), r.delete("memory_node"), r.size > 0 ? `?${r}` : ""
            }
        })
    }),
    Pagv: (function(e, t, r) {
        let n = "/agents/studio/edit/:agentId",
            a = `${n}/connectors/:connectorId`,
            o = `${n}/channels/slack/setup`,
            i = `${n}/analytics`,
            s = `${n}/preview`;

        function l(e) {
            return `/agents/studio/edit/${encodeURIComponent(e)}`
        }
        r.d(t, {}, {
            a: "2039979220",
            b: "/agents",
            c: i,
            d: a,
            e: "/agents/studio/new",
            f: "/agents/a/:agentId",
            g: n,
            h: s,
            i: "workspace-agent-published-app-repair",
            j: o,
            k: function(e) {
                return `https://chatgpt.com/agents/a/${encodeURIComponent(e)}`
            },
            l: function(e) {
                return `${l(e)}/analytics`
            },
            m: function(e, t) {
                return `${l(e)}/connectors/${encodeURIComponent(t)}`
            },
            n: l,
            o: function(e) {
                return `${l(e)}/preview`
            },
            p: function(e) {
                return `/agents/a/${encodeURIComponent(e)}`
            },
            q: function(e) {
                return `${l(e)}/channels/slack/setup`
            }
        })
    }),
    tYw1: (function(e, t, r) {
        var n = r("BolX"),
            a = r("Cslg"),
            o = r("Kwur"),
            i = r("vLsY"),
            s = r("OWtl"),
            l = r("Nwp9"),
            c = r("rvFo"),
            d = r("HFSu"),
            u = r("LNWO");
        let p = (0, n.u)(s.a, []),
            h = new d.b({
                getAdditionalHeaders: o.c
            }),
            g = (0, l.b)("workspace-agent-pins-by-account-v1", {});

        function f(e) {
            return ["workspace-agent-pins", e]
        }
        let w = (0, n.r)(s.a, e => {
                let {
                    get: t,
                    scope: r
                } = e, n = t(a.f);
                return {
                    enabled: null != n && !0 === t(u.a),
                    initialData: null == n ? void 0 : t(g)?.[n],
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == n) return [];
                        let {
                            items: a
                        } = await h.safeGet("/hermes/agents/pinned", {
                            parameters: {
                                query: {
                                    limit: 25
                                }
                            },
                            signal: t
                        }), o = a.map(e => {
                            let {
                                icon: t,
                                id: r,
                                name: n
                            } = e;
                            return {
                                icon: t,
                                id: r,
                                name: n
                            }
                        });
                        return r.set(g, {
                            ...r.get(g),
                            [n]: o
                        }), o
                    },
                    queryKey: f(n),
                    refetchOnMount: "always",
                    retry: !1,
                    staleTime: c.b.ONE_MINUTE
                }
            }),
            m = (0, n.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(b);
                return null == n ? null : n.some(t => {
                    let {
                        id: r
                    } = t;
                    return r === e
                })
            }),
            b = (0, n.c)(s.a, e => {
                let {
                    get: t
                } = e;
                if (!0 !== t(u.a)) return;
                let r = t(a.f),
                    n = t(w).data;
                for (let e of t(p)) e.accountId === r && (n = y(n, e.agent, e.isPinned));
                return n
            });

        function y(e, t, r) {
            return r ? e?.some(e => {
                let {
                    id: r
                } = e;
                return r === t.id
            }) ? e.map(e => e.id === t.id ? t : e) : [t, ...e ?? []] : e?.filter(e => {
                let {
                    id: r
                } = e;
                return r !== t.id
            }) ?? []
        }
        r.d(t, {}, {
            a: async function(e, t, r) {
                if (!0 !== e.get(u.a)) throw Error("Cannot update an agent pin while Workspace Agents is off");
                let n = e.get(a.f);
                if (null == n) throw Error("Cannot update an agent pin without an account");
                let o = f(n),
                    s = {
                        accountId: n,
                        agent: t,
                        isPinned: r
                    };
                e.set(p, [...e.get(p), s]);
                try {
                    await e.queryClient.getMutationCache().build(e.queryClient, {
                        scope: {
                            id: `workspace-agent-pins:${n}`
                        },
                        retry: !1,
                        mutationFn: async () => {
                            var i, s, l;
                            if (await e.queryClient.cancelQueries({
                                    queryKey: o
                                }), e.get(a.f) !== n) throw Error("Cannot update an agent pin after changing accounts");
                            if (!0 !== e.get(u.a)) throw Error("Cannot update an agent pin while Workspace Agents is off");
                            let c = await h.safePost("/hermes/agent/{agent_id}/pin", {
                                parameters: {
                                    path: {
                                        agent_id: t.id
                                    }
                                },
                                requestBody: {
                                    action: r ? "add" : "remove"
                                }
                            });
                            await e.queryClient.cancelQueries({
                                queryKey: o
                            }), e.queryClient.setQueryData(o, e => y(e, t, c.is_pinned)), i = e, s = n, l = o, i.set(g, {
                                ...i.get(g),
                                [s]: i.queryClient.getQueryData(l) ?? []
                            })
                        }
                    }).execute(void 0)
                } finally {
                    let t = e.get(p).filter(e => e !== s);
                    e.set(p, t), t.some(e => e.accountId === n) || ((0, i.a)(o), e.queryClient.invalidateQueries({
                        queryKey: o
                    }))
                }
            },
            b: m,
            c: b
        })
    }),
    tgI9: (function(e, t, r) {
        r.d(t, {
            a: () => x
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("Wf1j"),
            s = r("OWtl"),
            l = r("D8ee"),
            c = r("Nwp9"),
            d = r("jqIZ"),
            u = r("bf6R"),
            p = r("Bbed"),
            h = r("SGsN"),
            g = r("gBBC"),
            f = r("b5fQ"),
            w = r("ifdJ"),
            m = r("Pagv"),
            b = r("tYw1");
        let y = (0, p.a)(() => Promise.all([r.e(753405), r.e(148552)]).then(r.bind(r, "xm0K")).then(e => e.WorkspaceAgentGraphic), {
            fallback: (0, n.jsx)(u.Zg, {}),
            errorFallback: (0, n.jsx)(u.Zg, {})
        });

        function v() {
            let e, t, r, l = (0, a.c)(11),
                c = (0, o.y)(s.a),
                p = (0, i.a)(),
                v = (0, o.z)(b.c),
                {
                    pathname: I
                } = (0, d.Y)(),
                x = (0, d._)();
            l[0] !== p ? (e = p.formatMessage({
                id: "workspaceAgents.sidebar.unpin",
                defaultMessage: "Unpin agent",
                description: "Accessible label for the pin button that removes a Workspace Agent from the sidebar"
            }), l[0] = p, l[1] = e) : e = l[1];
            let _ = e;
            return l[2] !== v || l[3] !== p || l[4] !== x || l[5] !== I || l[6] !== c || l[7] !== _ ? (t = v?.map(e => {
                let t = (0, m.p)(e.id);
                return (0, n.jsx)(f.a, {
                    className: "group gap-1",
                    icon: null == e.icon ? (0, n.jsx)(u.Yg, {}) : (0, n.jsx)(y, {
                        icon: e.icon,
                        size: 20
                    }),
                    interactiveTrailing: (0, n.jsx)("span", {
                        className: "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100",
                        children: (0, n.jsx)(w.a, {
                            ariaLabel: _,
                            isPinned: !0,
                            onPin: k,
                            onUnpin: () => {
                                (0, b.a)(c, e, !1).catch(() => {
                                    c.get(h.f).danger(p.formatMessage({
                                        id: "workspaceAgents.sidebar.unpinFailed",
                                        defaultMessage: "Failed to unpin agent",
                                        description: "Error toast shown when removing a Workspace Agent from the sidebar fails"
                                    }), {
                                        errorAnalytics: {
                                            toastId: "workspaceAgents.sidebar.unpinFailed"
                                        }
                                    })
                                })
                            }
                        })
                    }),
                    isActive: I === t,
                    label: e.name.trim() || e.id,
                    onClick: () => {
                        (0, g.c)(c, null), x(t)
                    }
                }, e.id)
            }), l[2] = v, l[3] = p, l[4] = x, l[5] = I, l[6] = c, l[7] = _, l[8] = t) : t = l[8], l[9] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), l[9] = t, l[10] = r) : r = l[10], r
        }

        function k() {}
        let I = (0, c.b)("agents-sidebar-collapsed-v1", !1);

        function x(e) {
            let t, r, c, d, u = (0, a.c)(14),
                {
                    children: p,
                    forceExpanded: h,
                    label: g,
                    sectionReorderDnd: f,
                    titleActions: w
                } = e,
                m = (0, o.y)(s.a),
                b = (0, o.z)(I),
                y = (0, i.a)();
            u[0] !== y || u[1] !== g ? (t = g ?? y.formatMessage({
                id: "sidebarElectron.aeonThreads.v2",
                defaultMessage: "Agents",
                description: "Section label above pinned workspace agents and agent tasks in the sidebar"
            }), u[0] = y, u[1] = g, u[2] = t) : t = u[2];
            let k = t,
                x = b && !(void 0 !== h && h);
            return u[3] !== b || u[4] !== m ? (r = () => m.set(I, !b), u[3] = b, u[4] = m, u[5] = r) : r = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, n.jsx)(v, {}), u[6] = c) : c = u[6], u[7] !== p || u[8] !== k || u[9] !== f || u[10] !== x || u[11] !== r || u[12] !== w ? (d = (0, n.jsxs)(l.a, {
                collapsed: x,
                heading: "Agents",
                label: k,
                sectionKey: "agents",
                sectionReorderDnd: f,
                onCollapsedChange: r,
                titleActions: w,
                titleActionsOnHover: !0,
                children: [c, p]
            }), u[7] = p, u[8] = k, u[9] = f, u[10] = x, u[11] = r, u[12] = w, u[13] = d) : d = u[13], d
        }
    }),
    rTAL: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("Bbed"),
            s = r("OWtl"),
            l = r("DtSM");
        let c = (0, o.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return null != t(l.a)
            }),
            d = (0, i.a)(() => Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(226913), r.e(712370)]).then(r.bind(r, "h3mc")).then(e => e.WorkspaceBanner));
        r.d(t, {}, {
            a: function(e) {
                let t, r = (0, a.c)(2),
                    i = (0, o.z)(c);
                return r[0] !== i ? (t = i ? (0, n.jsx)(d, {}) : null, r[0] = i, r[1] = t) : t = r[1], t
            }
        })
    }),
    DtSM: (function(e, t, r) {
        var n = r("BolX"),
            a = r("Cslg"),
            o = r("OFP1"),
            i = r("svjy"),
            s = r("OWtl"),
            l = r("OMIV"),
            c = r("rvFo"),
            d = r("eShZ");
        let u = (0, n.q)(s.a, e => {
                let {
                    accountId: t,
                    userId: n
                } = e;
                return {
                    queryKey: ["workspace-banner", t, n],
                    staleTime: c.b.ONE_MINUTE,
                    refetchOnWindowFocus: "always",
                    retry: !1,
                    queryFn: async e => {
                        let {
                            signal: a
                        } = e;
                        try {
                            let {
                                Request: e
                            } = await Promise.resolve().then(r.bind(r, "Kwur"));
                            return await e.safeGet("/accounts/{account_id}/workspace_banner", {
                                parameters: {
                                    path: {
                                        account_id: t
                                    }
                                },
                                additionalHeaders: {
                                    "ChatGPT-Account-ID": t
                                },
                                expectedIdentity: {
                                    accountId: t,
                                    userId: n
                                },
                                expectedErrorStatuses: [401, 403, 404],
                                signal: a
                            })
                        } catch (e) {
                            if (h(e)) return {
                                banner: null
                            };
                            throw e
                        }
                    }
                }
            }),
            p = (0, n.c)(s.a, e => {
                let {
                    get: t
                } = e, r = t(a.f), n = t(a.j), s = t(a.e);
                if (!t(a.i) || null == r || null == n || "loaded" !== s.status || "workspace" !== s.structure) return null;
                let {
                    data: c,
                    error: d
                } = t(o.l, r);
                if (null == c || h(d)) return null;
                if (t(a.b)) {
                    if (!t(l.d, "3530939117") || !1 === c.workspace_banner_available || !c.beta_settings.workspace_fedramp_banner) return null;
                    let e = c.beta_settings_dict?.workspace_fedramp_banner_content;
                    return {
                        enabled: !0,
                        header: e?.classification?.trim() || t(i.a).formatMessage({
                            id: "workspaceBanner.fedrampClassification",
                            defaultMessage: "Current workspace is authorized for FedRAMP Moderate information",
                            description: "Default classification notice for a workspace authorized to handle FedRAMP Moderate information, when its administrator has not supplied a custom classification. FedRAMP is the United States federal cloud security authorization program; keep the program name and authorization level intact."
                        }),
                        markdown: e?.markdown?.trim() || "",
                        isFedrampWorkspace: !0
                    }
                }
                if (!0 !== c.workspace_banner_available) return null;
                let {
                    data: p
                } = t(u, {
                    accountId: r,
                    userId: n
                });
                return p?.banner?.enabled ? p.banner : null
            });

        function h(e) {
            return e instanceof d.FetchError && [401, 403, 404].includes(e.status)
        }
        r.d(t, {}, {
            a: p
        })
    }),
    g3CX: (function(e, t, r) {
        r.d(t, {
            a: () => w
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("oyxz"),
            s = r("Cslg"),
            l = r("ipGa"),
            c = r("AcSY"),
            d = r("OWtl"),
            u = r("gv9R"),
            p = r("hZax"),
            h = r("OMIV");
        let g = (0, o.q)(d.a, (e, t) => {
            let {
                scope: r
            } = t;
            return {
                queryKey: ["upgrade-workspace-discovery", e],
                enabled: null != e,
                staleTime: 1 / 0,
                gcTime: 0,
                queryFn: t => {
                    let {
                        signal: n
                    } = t;
                    return null == e ? Promise.resolve(null) : async function(e, t, r) {
                        let n = new AbortController,
                            a = AbortSignal.any([n.signal, r]),
                            o = e.watch(e => {
                                let {
                                    get: r
                                } = e;
                                (r(s.k) !== t.userId || r(s.f) !== t.accountId) && n.abort()
                            }),
                            i = setTimeout(() => n.abort(), 2e3);
                        try {
                            return a.throwIfAborted(), await Promise.race([(async () => {
                                let r = await (0, u.b)();
                                if (a.throwIfAborted(), !await r(e, t, a)) return null;
                                a.throwIfAborted();
                                let n = e.get(h.f),
                                    o = e.queryClient.getQueryData(["accounts", "check"]);
                                if (null == n || !f(o, t.accountId)) return null;
                                let i = (0, p.d)(n, "2485740912").get("cta_variant", "default");
                                if ("join_workspace" !== i && "join_team" !== i) return null;
                                let s = await (0, u.loadWorkspaceDiscoveryOpener)();
                                return a.throwIfAborted(), {
                                    variant: i,
                                    open: s
                                }
                            })(), new Promise(e => a.addEventListener("abort", () => e(null), {
                                once: !0
                            }))])
                        } catch {
                            return null
                        } finally {
                            clearTimeout(i), n.abort(), o()
                        }
                    }(r, e, n)
                }
            }
        });

        function f(e, t) {
            let r = e?.accounts?.find(e => e.id === t);
            return r?.structure.toLowerCase() === "personal" && "free" === r.plan_type && e?.accounts?.every(e => "personal" === e.structure.toLowerCase() || !0 === e.is_deactivated) === !0
        }

        function w(e) {
            let t, r, u, p = (0, a.c)(15),
                {
                    source: h,
                    children: w
                } = e,
                m = (0, o.y)(d.a),
                b = (0, o.z)(s.k),
                y = (0, o.z)(s.f),
                {
                    data: v
                } = (0, c.b)();
            p[0] !== y || p[1] !== v || p[2] !== b ? (t = !(0, l.a)() && null != b && null != y && f(v, y) ? {
                userId: b,
                accountId: y
            } : null, p[0] = y, p[1] = v, p[2] = b, p[3] = t) : t = p[3];
            let k = t,
                {
                    data: I,
                    isPending: x
                } = (0, o.x)(g, k);
            if (null != k && x) return null;
            if (null == k || null == I) {
                let e;
                return p[4] !== w ? (e = w(null), p[4] = w, p[5] = e) : e = p[5], e
            }
            p[6] !== I.variant ? (r = "join_workspace" === I.variant ? (0, n.jsx)(i.a, {
                id: "workspaceDiscovery.upgrade.button.findWorkspace",
                defaultMessage: "Join workspace",
                description: "Short button label in the merged-web sidebar and chat header for users with a matching organization workspace. Opens workspace discovery, where they can join or request access. Keep as short as possible."
            }) : (0, n.jsx)(i.a, {
                id: "workspaceDiscovery.upgrade.button.joinTeam",
                defaultMessage: "Join team",
                description: "Short button label in the merged-web sidebar and chat header for users with a matching organization workspace. Team means the user's organization. Opens workspace discovery, where joining may require approval. Keep as short as possible."
            }), p[6] = I.variant, p[7] = r) : r = p[7];
            let _ = r;
            return p[8] !== w || p[9] !== I || p[10] !== k || p[11] !== _ || p[12] !== m || p[13] !== h ? (u = w({
                label: _,
                onClick: e => !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && (I.open(m, k.userId, void 0, {
                    ...k,
                    source: h
                }), !0)
            }), p[8] = w, p[9] = I, p[10] = k, p[11] = _, p[12] = m, p[13] = h, p[14] = u) : u = p[14], u
        }
    }),
    ONXT: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("zd8w"),
            i = r("oyxz"),
            s = r("JIuM"),
            l = r("L6H2"),
            c = r("Sm6l"),
            d = r("JNtf"),
            u = r("mUDD"),
            p = r("bf6R"),
            h = r("v0Gf"),
            g = r("hueg"),
            f = r("pPxA"),
            w = r("hZax");

        function m(e) {
            return e.preventDefault()
        }

        function b(e) {
            let t, r = (0, a.c)(3),
                {
                    name: o,
                    url: i
                } = e,
                c = (0, s.b)(i),
                d = o ?? null;
            return r[0] !== c || r[1] !== d ? (t = (0, n.jsx)(l.a, {
                alt: "",
                name: d,
                src: c,
                size: "lg"
            }), r[0] = c, r[1] = d, r[2] = t) : t = r[2], t
        }

        function y(e) {
            let t, r, s, l, d, g, w, m, b, y, k, I = (0, a.c)(31),
                {
                    policyText: x,
                    error: _,
                    action: E,
                    acknowledgeRef: C
                } = e,
                [S, T] = (0, o.useState)(!1),
                [A, j] = (0, o.useState)(!1),
                R = (0, o.useId)(),
                M = (0, o.useRef)(null),
                O = (0, o.useRef)(null),
                P = S ? "none" : "mask";
            I[0] !== C || I[1] !== S ? (t = e => {
                S || (e || document.activeElement !== O.current || C.current?.focus(), j(e))
            }, I[0] = C, I[1] = S, I[2] = t) : t = I[2];
            let q = S ? "min-h-0 flex-1 overflow-y-auto" : "max-h-40 overflow-hidden";
            return I[3] !== A ? (r = () => {
                A && T(!0)
            }, I[3] = A, I[4] = r) : r = I[4], I[5] !== R || I[6] !== r ? (s = {
                id: R,
                ref: M,
                onFocusCapture: r
            }, I[5] = R, I[6] = r, I[7] = s) : s = I[7], I[8] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                a: v
            }, d = {
                kind: "inherit"
            }, I[8] = l, I[9] = d) : (l = I[8], d = I[9]), I[10] !== x ? (g = (0, n.jsx)(f.a, {
                components: l,
                textStyle: d,
                className: "[--markdown-font-size:var(--text-document)]! [--markdown-line-height:22px]!",
                children: x
            }), I[10] = x, I[11] = g) : g = I[11], I[12] !== P || I[13] !== t || I[14] !== q || I[15] !== s || I[16] !== g ? (w = (0, n.jsx)(u.e, {
                spacing: "large",
                className: "min-h-0 flex-1",
                children: (0, n.jsx)(h.a, {
                    className: "relative flex min-h-0 flex-1 flex-col",
                    fade: P,
                    onOverflowChange: t,
                    scrollClassName: q,
                    scrollProps: s,
                    children: g
                })
            }), I[12] = P, I[13] = t, I[14] = q, I[15] = s, I[16] = g, I[17] = w) : w = I[17], I[18] !== _ ? (m = null != _ ? (0, n.jsx)(u.e, {
                children: _
            }) : null, I[18] = _, I[19] = m) : m = I[19], I[20] !== R || I[21] !== S || I[22] !== A ? (b = A ? (0, n.jsxs)(c.a, {
                ref: O,
                className: "me-auto",
                size: "takeoverHeroAction",
                color: "ghostSecondary",
                type: "button",
                "aria-controls": R,
                "aria-expanded": S,
                onClick: () => {
                    null != M.current && (M.current.scrollTop = 0), T(!S)
                },
                children: [(0, n.jsx)(p.ac, {
                    className: S ? "size-4 rotate-180" : "size-4",
                    "aria-hidden": !0
                }), S ? (0, n.jsx)(i.a, {
                    id: "workspacePolicy.showLess",
                    defaultMessage: "Show less",
                    description: "Collapse the required workspace policy back to its short preview"
                }) : (0, n.jsx)(i.a, {
                    id: "workspacePolicy.showMore",
                    defaultMessage: "Show more",
                    description: "Expand the required workspace policy preview to read the complete message"
                })]
            }) : null, I[20] = R, I[21] = S, I[22] = A, I[23] = b) : b = I[23], I[24] !== E || I[25] !== b ? (y = (0, n.jsx)(u.e, {
                spacing: "large",
                children: (0, n.jsxs)(u.c, {
                    expandSingleButton: !1,
                    children: [b, E]
                })
            }), I[24] = E, I[25] = b, I[26] = y) : y = I[26], I[27] !== m || I[28] !== y || I[29] !== w ? (k = (0, n.jsxs)(n.Fragment, {
                children: [w, m, y]
            }), I[27] = m, I[28] = y, I[29] = w, I[30] = k) : k = I[30], k
        }

        function v(e) {
            let t, r = (0, a.c)(3),
                {
                    children: o,
                    href: i
                } = e;
            return r[0] !== o || r[1] !== i ? (t = (0, n.jsx)(g.a, {
                href: i,
                openTarget: "external-browser",
                children: o
            }), r[0] = o, r[1] = i, r[2] = t) : t = r[2], t
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, s, l, p, h, g, k, I, x, _, E, C = (0, a.c)(37),
                    {
                        workspaceName: S,
                        workspaceLogoUrl: T,
                        policyText: A,
                        pending: j,
                        error: R,
                        onAcknowledge: M
                    } = e,
                    O = void 0 !== j && j,
                    P = void 0 !== R && R,
                    q = (0, o.useRef)(null),
                    W = (0, w.f)("2469870962");
                C[0] !== P ? (t = P ? (0, n.jsx)("p", {
                    role: "alert",
                    children: (0, n.jsx)(i.a, {
                        id: "workspacePolicy.error",
                        defaultMessage: "Couldn’t complete the workspace policy acknowledgment. Please try again.",
                        description: "Error inside the workspace policy acknowledgment dialog when saving the acknowledgment fails. The policy remains visible and the user can acknowledge it again."
                    })
                }) : null, C[0] = P, C[1] = t) : t = C[1];
                let B = t,
                    F = W ? "takeoverHeroAction" : "default";
                C[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(i.a, {
                    id: "workspacePolicy.acknowledge",
                    defaultMessage: "Acknowledge",
                    description: "Acknowledge the displayed workspace policy and continue to Chat"
                }), C[2] = r) : r = C[2], C[3] !== O || C[4] !== W || C[5] !== F ? (s = (0, n.jsx)(c.a, {
                    ref: q,
                    size: F,
                    autoFocus: W,
                    disabled: O,
                    loading: O,
                    type: "submit",
                    children: r
                }), C[3] = O, C[4] = W, C[5] = F, C[6] = s) : s = C[6];
                let N = s,
                    D = W ? "wide" : "xxxwideTall";
                C[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                    onEscapeKeyDown: m
                }, C[7] = l) : l = C[7];
                let L = W ? "scrollable" : "full";
                C[8] !== M || C[9] !== O ? (p = e => {
                    e.preventDefault(), O || M()
                }, C[8] = M, C[9] = O, C[10] = p) : p = C[10];
                let G = W ? "gap-3" : void 0;
                C[11] !== W || C[12] !== T || C[13] !== S ? (h = W ? (0, n.jsx)(b, {
                    name: S,
                    url: T
                }) : null, C[11] = W, C[12] = T, C[13] = S, C[14] = h) : h = C[14];
                let U = W ? "text-heading-sm leading-[26px] font-semibold sm:text-heading-md sm:leading-7" : void 0;
                return C[15] !== S ? (g = null != S ? (0, n.jsx)(i.a, {
                    id: "workspacePolicy.welcome",
                    defaultMessage: "Welcome to the {workspaceName} workspace",
                    description: "Title of the required workspace policy acknowledgment dialog",
                    values: {
                        workspaceName: S
                    }
                }) : (0, n.jsx)(i.a, {
                    id: "workspacePolicy.title",
                    defaultMessage: "Workspace policy",
                    description: "Title of the required workspace policy acknowledgment dialog when the workspace name is unavailable"
                }), C[15] = S, C[16] = g) : g = C[16], C[17] !== U || C[18] !== g ? (k = (0, n.jsx)(u.d, {
                    className: "select-none",
                    title: (0, n.jsx)(d.e, {
                        className: U,
                        children: g
                    })
                }), C[17] = U, C[18] = g, C[19] = k) : k = C[19], C[20] !== G || C[21] !== h || C[22] !== k ? (I = (0, n.jsxs)(u.e, {
                    className: G,
                    children: [h, k]
                }), C[20] = G, C[21] = h, C[22] = k, C[23] = I) : I = C[23], C[24] !== N || C[25] !== A || C[26] !== W || C[27] !== B ? (x = W ? (0, n.jsx)(y, {
                    policyText: A,
                    error: B,
                    action: N,
                    acknowledgeRef: q
                }, A) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(u.e, {
                        className: "min-h-0 flex-1 overflow-y-auto",
                        children: [(0, n.jsx)(f.a, {
                            components: {
                                a: v
                            },
                            textStyle: {
                                kind: "small"
                            },
                            children: A
                        }), B]
                    }), (0, n.jsx)(u.e, {
                        children: (0, n.jsx)(u.c, {
                            expandSingleButton: !1,
                            children: N
                        })
                    })]
                }), C[24] = N, C[25] = A, C[26] = W, C[27] = B, C[28] = x) : x = C[28], C[29] !== p || C[30] !== I || C[31] !== x || C[32] !== L ? (_ = (0, n.jsxs)(u.b, {
                    as: "form",
                    size: L,
                    onSubmit: p,
                    children: [I, x]
                }), C[29] = p, C[30] = I, C[31] = x, C[32] = L, C[33] = _) : _ = C[33], C[34] !== _ || C[35] !== D ? (E = (0, n.jsx)(d.a, {
                    open: !0,
                    shouldIgnoreClickOutside: !0,
                    showDialogClose: !1,
                    size: D,
                    contentProps: l,
                    children: _
                }), C[34] = _, C[35] = D, C[36] = E) : E = C[36], E
            }
        })
    }),
    Yco7: (function(e, t, r) {
        var n = r("BolX");
        r("Cslg");
        var a = r("OWtl");
        r("Qg7S");
        var o = r("OMIV");

        function i(e) {
            let {
                disableExposureLog: t = !1
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return !1
        }(0, n.h)(a.a, e => {
            let {
                get: t
            } = e;
            return t(o.f)?.getFeatureGate("1516934498", {
                disableExposureLog: !0
            }) ?? null
        }, e => {
            let {
                get: t,
                set: r
            } = e, n = t(o.f);
            if (null == n) return;
            let a = () => {
                r(n.getFeatureGate("1516934498", {
                    disableExposureLog: !0
                }))
            };
            return n.on("values_updated", a), () => n.off("values_updated", a)
        });
        let s = (0, n.c)(a.a, e => {
            let {
                scope: t
            } = e;
            return i(t)
        });
        r.d(t, {}, {
            a: i,
            b: s
        })
    }),
    m6EW: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("xSOA"),
            i = r("BolX"),
            s = r("oyxz"),
            l = r("Cslg"),
            c = r("OFP1"),
            d = r("YJm0"),
            u = r("MM0V"),
            p = r("Sm6l"),
            h = r("OWtl"),
            g = r("CsbC");

        function f(e) {
            let t, r, o, i, l = (0, a.c)(6),
                {
                    pending: c,
                    onRetry: d
                } = e;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(s.a, {
                id: "workspacePolicy.loadError.title",
                defaultMessage: "Couldn’t load workspace settings",
                description: "Title of a warning above the Chat composer when workspace settings or policy checks fail. Sending is blocked until the user retries successfully."
            }), r = (0, n.jsx)(s.a, {
                id: "workspacePolicy.loadError.description",
                defaultMessage: "Retry to continue chatting",
                description: "Explanation beneath the workspace settings load-error warning above the Chat composer. The draft is preserved and the adjacent Retry button reloads the settings."
            }), l[0] = t, l[1] = r) : (t = l[0], r = l[1]), l[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(s.a, {
                id: "workspacePolicy.loadError.retry",
                defaultMessage: "Retry",
                description: "Button in the warning above the Chat composer that retries loading workspace settings and policy checks. Disabled while retrying."
            }), l[2] = o) : o = l[2], l[3] !== d || l[4] !== c ? (i = (0, n.jsx)(u.a, {
                ariaLive: "polite",
                role: "status",
                stackOnNarrow: !0,
                type: "warning",
                title: t,
                content: r,
                customCtas: (0, n.jsx)(p.a, {
                    color: "outline",
                    disabled: c,
                    loading: c,
                    onClick: d,
                    type: "button",
                    children: o
                })
            }), l[3] = d, l[4] = c, l[5] = i) : i = l[5], i
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, s, u = (0, a.c)(7),
                    {
                        surface: p
                    } = e,
                    w = (0, i.y)(h.a);
                u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    chat: g.g,
                    work: g.c,
                    codex: g.b
                }, u[0] = t) : t = u[0];
                let m = t[void 0 === p ? "chat" : p],
                    b = (0, i.z)(m);
                u[1] !== m || u[2] !== w ? (r = {
                    mutationFn: async () => {
                        let e = w.get(m);
                        "account-error" === e.status ? await w.queryClient.refetchQueries({
                            queryKey: w.query.getOptions(d.b, w.get(l.f)).queryKey,
                            exact: !0
                        }, {
                            throwOnError: !0
                        }) : "error" === e.status && await Promise.all([w.query.invalidate(c.l, e.accountId), null == e.identity ? void 0 : w.query.invalidate(g.h, e.identity)])
                    }
                }, u[1] = m, u[2] = w, u[3] = r) : r = u[3];
                let {
                    mutate: y,
                    isPending: v
                } = (0, o.a)(r);
                if ("error" !== b.status && "account-error" !== b.status && !(v && ("loading" === b.status || "checking-eligibility" === b.status))) return null;
                let k = v || "error" === b.status && b.isFetching;
                return u[4] !== y || u[5] !== k ? (s = (0, n.jsx)(f, {
                    pending: k,
                    onRetry: y
                }), u[4] = y, u[5] = k, u[6] = s) : s = u[6], s
            }
        })
    }),
    qqut: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("jqIZ"),
            s = r("fILU"),
            l = r("SAA4"),
            c = r("AcSY"),
            d = r("X6Vn"),
            u = r("fQoC"),
            p = r("OWtl"),
            h = r("ONXT"),
            g = r("StaQ"),
            f = r("CsbC");

        function w(e) {
            let t, r, c, u, p, h = (0, a.c)(16),
                {
                    surface: w,
                    availability: y,
                    announcementSourceId: v
                } = e,
                k = void 0 === w ? "chat" : w,
                I = void 0 === y ? "available" : y,
                {
                    key: x
                } = (0, i.Y)();
            h[0] !== I || h[1] !== k ? (t = "available" === I ? ({
                chat: f.g,
                work: f.c,
                codex: f.b
            })[k] : null, h[0] = I, h[1] = k, h[2] = t) : t = h[2];
            let _ = (0, o.z)(t),
                E = (0, d.i)(g.a);
            h[3] !== _ || h[4] !== E ? (r = _?.status !== "required" || E ? null : (0, n.jsx)(b, {
                ..._
            }, _.identity.accountId + _.identity.userId), h[3] = _, h[4] = E, h[5] = r) : r = h[5];
            let C = r;
            h[6] !== v || h[7] !== x || h[8] !== k ? (c = v ?? ("chat" === k ? (0, l.c)(x) : null), h[6] = v, h[7] = x, h[8] = k, h[9] = c) : c = h[9];
            let S = c;
            if (null == S) return C;
            let T = "unavailable" === I || _?.status === "hidden" ? "ineligible" : "loading";
            return h[10] !== S || h[11] !== T ? (u = (0, n.jsx)(s.a, {
                source: "workspace-policy",
                candidate: {
                    id: S,
                    status: T,
                    render: m
                }
            }), h[10] = S, h[11] = T, h[12] = u) : u = h[12], h[13] !== C || h[14] !== u ? (p = (0, n.jsxs)(n.Fragment, {
                children: [u, C]
            }), h[13] = C, h[14] = u, h[15] = p) : p = h[15], p
        }

        function m() {
            return null
        }

        function b(e) {
            let t, r, i, s = (0, a.c)(12),
                {
                    identity: l,
                    policyText: d
                } = e,
                u = (0, o.y)(p.a);
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                preview: !1
            }, s[0] = t) : t = s[0];
            let {
                data: g
            } = (0, c.e)(void 0, t), {
                isPending: w,
                isError: m
            } = (0, o.x)(f.a, l), b = g?.id === l.accountId ? g.name : void 0, y = g?.id === l.accountId ? g.profile_picture_url : void 0;
            return s[1] !== l || s[2] !== d || s[3] !== u ? (r = () => {
                let e = u.get(f.a, l);
                e.isPending || e.mutate(d)
            }, s[1] = l, s[2] = d, s[3] = u, s[4] = r) : r = s[4], s[5] !== m || s[6] !== w || s[7] !== d || s[8] !== b || s[9] !== y || s[10] !== r ? (i = (0, n.jsx)(h.a, {
                workspaceName: b,
                workspaceLogoUrl: y,
                policyText: d,
                pending: w,
                error: m,
                onAcknowledge: r
            }), s[5] = m, s[6] = w, s[7] = d, s[8] = b, s[9] = y, s[10] = r, s[11] = i) : i = s[11], i
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o = (0, a.c)(2),
                    {
                        isWorkConversation: i,
                        hasConversationContent: s,
                        hasLoadError: l
                    } = e;
                return t = i ? "unavailable" : s ? "available" : l ? "unavailable" : "pending", o[0] !== t ? (r = (0, n.jsx)(w, {
                    availability: t
                }), o[0] = t, o[1] = r) : r = o[1], r
            },
            b: function(e) {
                let t, r, s = (0, a.c)(8),
                    {
                        mode: c
                    } = e,
                    {
                        pathname: d,
                        search: p
                    } = (0, i.Y)(),
                    h = (0, o.z)(u.f) ? "unavailable" : "available";
                return s[0] !== c || s[1] !== d || s[2] !== p ? (t = (0, l.e)(d, p, c), s[0] = c, s[1] = d, s[2] = p, s[3] = t) : t = s[3], s[4] !== c || s[5] !== h || s[6] !== t ? (r = (0, n.jsx)(w, {
                    surface: c,
                    availability: h,
                    announcementSourceId: t
                }), s[4] = c, s[5] = h, s[6] = t, s[7] = r) : r = s[7], r
            },
            c: w
        })
    }),
    StaQ: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("BolX"),
            i = r("zd8w"),
            s = r("Cslg"),
            l = r("AcSY"),
            c = r("OWtl"),
            d = r("ONXT"),
            u = r("CsbC");
        r.d(t, {}, {
            a: function(e) {
                let t, r, p, h, g, f = (0, a.c)(17),
                    {
                        identity: w,
                        policyText: m,
                        onClose: b
                    } = e,
                    y = (0, o.y)(c.a),
                    v = (0, o.z)(s.f),
                    k = (0, o.z)(s.k);
                f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    preview: !1
                }, f[0] = t) : t = f[0];
                let {
                    data: I
                } = (0, l.e)(void 0, t), {
                    isPending: x,
                    isError: _
                } = (0, o.x)(u.a, w), E = v === w.accountId && k === w.userId;
                if (f[1] !== E || f[2] !== b ? (r = () => {
                        E || b()
                    }, p = [E, b], f[1] = E, f[2] = b, f[3] = r, f[4] = p) : (r = f[3], p = f[4]), (0, i.useEffect)(r, p), !E) return null;
                let C = I?.id === w.accountId ? I.name : void 0,
                    S = I?.id === w.accountId ? I.profile_picture_url : void 0;
                return f[5] !== w || f[6] !== b || f[7] !== m || f[8] !== y ? (h = () => {
                    let e = y.get(u.a, w);
                    e.isPending || e.mutate(m, {
                        onSuccess: () => {
                            y.get(s.f) === w.accountId && y.get(s.k) === w.userId && b()
                        }
                    })
                }, f[5] = w, f[6] = b, f[7] = m, f[8] = y, f[9] = h) : h = f[9], f[10] !== _ || f[11] !== x || f[12] !== m || f[13] !== C || f[14] !== S || f[15] !== h ? (g = (0, n.jsx)(d.a, {
                    workspaceName: C,
                    workspaceLogoUrl: S,
                    policyText: m,
                    pending: x,
                    error: _,
                    onAcknowledge: h
                }), f[10] = _, f[11] = x, f[12] = m, f[13] = C, f[14] = S, f[15] = h, f[16] = g) : g = f[16], g
            }
        })
    }),
    CsbC: (function(e, t, r) {
        r.d(t, {
            a: () => v,
            b: () => _,
            c: () => x,
            d: () => S,
            e: () => T,
            f: () => E,
            g: () => I,
            h: () => f,
            i: () => k
        });
        var n = r("mBJV"),
            a = r("BolX"),
            o = r("Cslg"),
            i = r("QdUF"),
            s = r("OFP1"),
            l = r("Kwur"),
            c = r("M8lA"),
            d = r("yGJW"),
            u = r("OWtl"),
            p = r("rvFo"),
            h = r("Yco7");

        function g(e) {
            if (!e) return "";
            let t = 0;
            for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r) | 0;
            return t.toString()
        }
        let f = (0, a.q)(u.a, (e, t) => {
                let {
                    scope: r
                } = t;
                return {
                    queryKey: "work" === e.surface ? ["workspace-policy", e.accountId, e.userId, "work"] : ["workspace-policy", e.accountId, e.userId],
                    staleTime: p.b.ONE_MINUTE,
                    refetchOnWindowFocus: !0,
                    queryFn: async () => {
                        let [t, n] = await Promise.all([l.Request.safeGet("/accounts/{account_id}/workspace_policy", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            ...C(r, e)
                        }), l.Request.safeGet("/accounts/{account_id}/workspace_policy/acknowledge", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            ...C(r, e)
                        })]);
                        return {
                            policy: t,
                            acknowledgment: n
                        }
                    }
                }
            }),
            w = (0, a.v)(u.a, e => null);

        function m(e) {
            let {
                accountId: t,
                userId: r
            } = e;
            return `oai/apps/workspace-policy-login/${JSON.stringify([t,r])}`
        }
        let b = (0, a.i)(u.a, e => null, (e, t) => {
                let {
                    queryClient: r,
                    set: n
                } = t, a = m(e), o = () => {
                    try {
                        n(window.localStorage.getItem(a))
                    } catch {
                        n(null)
                    }
                }, i = t => {
                    (t.key === a || null == t.key) && (o(), r.invalidateQueries({
                        queryKey: ["workspace-policy", e.accountId, e.userId]
                    }))
                };
                return window.addEventListener("storage", i), o(), () => window.removeEventListener("storage", i)
            }),
            y = (0, a.d)(u.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (r(s.l, e).data?.beta_settings_str?.workspace_policy_cadence !== "every_login") return null;
                let n = (0, i.getBrowserChatGptAuthSnapshot)();
                return null == n ? null : (0, i.readChatGptTokenClaims)(n.accessToken)?.sessionId ?? ("token" === n.source ? null : (0, c.getClientBootstrap)().sessionCookieContext?.epoch ?? null)
            }),
            v = (0, a.o)(u.a, (e, t) => {
                let {
                    scope: r
                } = t;
                return {
                    mutationFn: async t => {
                        if (r.get(o.f) !== e.accountId || r.get("work" === e.surface ? o.j : o.k) !== e.userId) throw Error("Workspace policy identity changed");
                        (0, d.a)(r, n.Vd, {});
                        let a = r.get(y, e.accountId);
                        return await l.Request.safePost("/accounts/{account_id}/workspace_policy/acknowledge", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            requestBody: {
                                policy_hash: g(t)
                            },
                            ...C(r, e)
                        }), a
                    },
                    onSuccess: (t, n) => {
                        let a = g(n);
                        if (null != t) try {
                            window.localStorage.setItem(m(e), `${t}:${a}`)
                        } catch {}
                        r.set(w, {
                            accountId: e.accountId,
                            userId: e.userId
                        }, a), r.queryClient.invalidateQueries({
                            queryKey: ["workspace-policy", e.accountId, e.userId]
                        })
                    }
                }
            }),
            k = (0, a.d)(u.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(o.e), a = r(o.f), i = r("work" === e ? o.j : o.k);
                if (r(o.i) && (null == a || null == i) || ("loading" === n.status || "chat" === e && "unavailable" === n.status) && "personal" === n.structureAtLogin || "loaded" === n.status && "workspace" !== n.structure) return {
                    status: "hidden"
                };
                if ("loading" === n.status || "chat" === e && "unavailable" === n.status && "workspace" === n.structureAtLogin) return {
                    status: r(o.i) && null != a && null != i ? "checking-eligibility" : "loading"
                };
                if (null == a || null == i) return {
                    status: "loading"
                };
                if ("unavailable" === n.status) return {
                    status: "account-error"
                };
                let l = r(s.l, a);
                if (l.isError || l.isPending && l.isFetched) return {
                    status: "error",
                    accountId: a,
                    isFetching: l.isFetching
                };
                if (null == l.data) return {
                    status: "checking-eligibility"
                };
                if (!l.data.beta_settings["work" === e ? "workspace_policy_work_home" : "workspace_policy"]) return {
                    status: "hidden"
                };
                let c = {
                        accountId: a,
                        userId: i,
                        surface: "work" === e ? "work" : void 0
                    },
                    {
                        data: d,
                        isError: u,
                        isPending: p,
                        isFetched: h,
                        isFetching: m
                    } = r(f, c);
                if (u || p && h) return {
                    status: "error",
                    accountId: a,
                    identity: c,
                    isFetching: m
                };
                if (null == d) return {
                    status: "checking-policy"
                };
                let v = d.policy.workspace_policy,
                    k = g(v),
                    I = r(y, a);
                return !v || r(w, {
                    accountId: a,
                    userId: i
                }) === k || null != I && r(b, {
                    accountId: a,
                    userId: i
                }) === `${I}:${k}` && d.acknowledgment.policy_hash === k || function(e, t, r, n) {
                    if ("every_login" === t) return !1;
                    let a = t ? Number(t) : void 0,
                        o = null != a && Number.isFinite(a) && a >= 0 ? a : 30;
                    return r.policy_hash === g(e) && null != r.last_acknowledged_at && n - 24 * o * 36e5 < Date.parse(r.last_acknowledged_at)
                }(v, l.data.beta_settings_str?.workspace_policy_cadence, d.acknowledgment, Date.now()) ? {
                    status: "hidden"
                } : {
                    status: "required",
                    identity: c,
                    policyText: v
                }
            }),
            I = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e;
                return t(k, "chat")
            }),
            x = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e, r = t(h.b);
                return null == r ? {
                    status: "loading"
                } : r ? t(k, "work") : {
                    status: "hidden"
                }
            }),
            _ = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e, r = t(h.b);
                return !1 === r ? {
                    status: "hidden"
                } : t(o.i) && null != t(o.f) && null != t(o.j) ? "unavailable" === t(o.e).status ? {
                    status: "account-error"
                } : r ? t(k, "work") : {
                    status: "checking-eligibility"
                } : {
                    status: "loading"
                }
            }),
            E = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e, {
                    status: r
                } = t(_);
                return "hidden" !== r && "checking-eligibility" !== r && "checking-policy" !== r
            });

        function C(e, t) {
            return "work" !== t.surface ? {} : {
                expectedIdentity: {
                    accountId: t.accountId,
                    userId: t.userId
                },
                assertRequestCurrent: () => {
                    if (e.get(o.f) !== t.accountId || e.get(o.j) !== t.userId) throw new DOMException("Workspace policy identity changed", "AbortError")
                }
            }
        }
        let S = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e, {
                    status: r
                } = t(I);
                return "hidden" !== r && "checking-eligibility" !== r && "checking-policy" !== r
            }),
            T = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e;
                return "hidden" !== t(I).status
            })
    }),
    HK0a: (function(e, t, r) {
        var n = r("BolX"),
            a = r("Cslg"),
            o = r("OWtl"),
            i = r("Yco7"),
            s = r("CsbC");
        let l = (0, n.u)(o.a, () => crypto.randomUUID());

        function c(e, t) {
            return null == t || !(e.get(l) !== t.authSessionId || e.get(a.f) !== t.identity.accountId || e.get(a.j) !== t.identity.userId || "codex-home" !== t.origin && t.enrolled && "hidden" !== e.get(s.i, "work").status)
        }
        r.d(t, {}, {
            a: function(e, t) {
                if (!c(e, t)) throw new DOMException("Work-home workspace policy changed", "AbortError")
            },
            b: function(e) {
                return e.get(s.f) ? null : {
                    origin: "codex-home",
                    enrolled: (0, i.a)(e, {
                        disableExposureLog: !0
                    }),
                    identity: {
                        accountId: e.get(a.f),
                        userId: e.get(a.j)
                    },
                    authSessionId: e.get(l)
                }
            },
            c: function(e) {
                let t = (0, i.a)(e);
                if (null == t) return null;
                let r = e.get(a.f),
                    n = e.get(a.j);
                return t && (null == r || null == n || "hidden" !== e.get(s.i, "work").status) ? null : {
                    enrolled: t,
                    identity: {
                        accountId: r,
                        userId: n
                    },
                    authSessionId: e.get(l)
                }
            },
            d: c
        })
    }),
    KPsy: (function(e, t, r) {
        var n = r("hV9T"),
            a = r("E8Sp");
        r.d(t, {}, {
            a: function(e, t, r) {
                (0, a.d)(e, (0, n.ge)(t.clientThreadId), null == r ? void 0 : {
                    state: r
                })
            }
        })
    }),
    PsRa: (function(e, t, r) {
        var n = r("hZmJ");
        r.d(t, {}, {
            a: function(e, t) {
                let {
                    startConversationParamsInput: r,
                    threadGoalDraft: a
                } = e;
                if (null == a && null == t) return r;
                let {
                    input: o,
                    fileAttachments: i
                } = r;
                if ("durable" !== r.mode && null != a) {
                    let e = new Set(a.pastedTextAttachments.flatMap(e => {
                        let {
                            file: t
                        } = e;
                        return null == t ? [] : [t.path]
                    }));
                    i = i.filter(t => {
                        let {
                            path: r
                        } = t;
                        return !e.has(r)
                    })
                }
                if (null != t) {
                    let e = o.findIndex(e => "text" === e.type),
                        r = o[e];
                    r?.type === "text" && ((o = [...o])[e] = {
                        ...r,
                        text: (0, n.a)(t)
                    })
                }
                return {
                    ...r,
                    input: o,
                    fileAttachments: i
                }
            }
        })
    }),
    kUXb: (function(e, t, r) {
        r.d(t, {
            a: () => U
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("UUMA"),
            i = r("irkb"),
            s = r("HVBu"),
            l = r.n(s),
            c = r("BolX"),
            d = r("hV9T"),
            u = r("zd8w"),
            p = r("Wf1j"),
            h = r("tl5a"),
            g = r("z0li"),
            f = r("NVPY"),
            w = r("odKs"),
            m = r("HmRF"),
            b = r("d9i7"),
            y = r("SGsN"),
            v = r("kfg4"),
            k = r("rDNP"),
            I = r("yGJW"),
            x = r("s37w"),
            _ = r("OWtl"),
            E = r("ndjw"),
            C = r("kl6F"),
            S = r("Tsvt"),
            T = r("WFY2"),
            A = r("HK0a"),
            j = r("t162"),
            R = r("Dgwo"),
            M = r("HScd"),
            O = r("xrGx"),
            P = r("QX7Q"),
            q = r("OCQL"),
            W = r("QYK3"),
            B = r("hgea"),
            F = r("PsRa"),
            N = r("QVfH");

        function D(e) {
            return (e.labelEdited ? e.label : e.initialThreadTitle ?? "").trim()
        }
        var L = r("Vhua"),
            G = r("o27H");

        function U() {
            let e, t, r, s = (0, a.c)(24),
                U = (0, c.y)(_.a),
                $ = (0, i.c)(),
                z = (0, G.i)(),
                H = (0, N.g)(),
                {
                    dismissPendingWorktree: K
                } = (0, G.h)(),
                {
                    beginPendingWorktreeConversationStart: V,
                    failPendingWorktreeConversationStart: X,
                    retainPendingWorktreeConversationStart: Q,
                    removePendingWorktreeConversationStart: J,
                    succeedPendingWorktreeConversationStart: Y
                } = (0, N.f)(),
                Z = (0, x.a)(),
                ee = (0, p.a)();
            s[0] !== K || s[1] !== X || s[2] !== ee || s[3] !== z || s[4] !== $ || s[5] !== Z || s[6] !== J || s[7] !== Q || s[8] !== U || s[9] !== Y ? (e = async e => {
                let {
                    pendingWorktreeId: t,
                    workspaceRoot: r
                } = e, a = z.find(e => e.id === t);
                if (null == a) return void J(t);
                let i = null != (0, N.c)(U, a.id),
                    s = e => {
                        let t = U.get(L.a, a.clientThreadId ?? null);
                        t?.isPinned && null != a.clientThreadId && (0, S.a)(U, a.clientThreadId, !0, t.pinnedBeforeThreadId), Y(a.id, e), K(a.id)
                    },
                    c = null,
                    u = null,
                    p = a.hostId,
                    x = !1,
                    _ = "start-conversation" === a.launchMode ? a.composerDraft?.context.workHomePolicyAcceptance : void 0,
                    H = null == a.conversationStartResult && null != _ ? () => (0, A.a)(U, _) : void 0,
                    V = l()(async () => {
                        null != c && await (0, k.a)({
                            scope: U,
                            hostId: p,
                            materialized: c
                        })
                    });
                try {
                    H?.();
                    let e = U.get(E.g, U.get(h.q)),
                        {
                            clientThreadId: n,
                            hostConfig: l
                        } = function(e, t, r) {
                            if (null == e.clientThreadId) throw Error("Pending worktree thread has no client thread id");
                            let n = function(e, t, r) {
                                if (null == e || e.hostId === t.id) return t;
                                let n = r?.find(t => t.hostId === e.hostId);
                                return null == n ? null : (0, d.dk)(n)
                            }(e, t, r);
                            if (null == n) throw Error(`Pending worktree host ${e.hostId} is unavailable`);
                            return {
                                clientThreadId: e.clientThreadId,
                                hostConfig: n
                            }
                        }(a, e, Z);
                    p = "start-conversation" === a.launchMode && "durable" === a.startConversationParamsInput.mode ? d.Xb : l.id, c = "start-conversation" === a.launchMode && null != a.threadGoalDraft ? await (0, k.c)({
                        scope: U,
                        draft: a.threadGoalDraft,
                        hostId: p,
                        assertRequestCurrent: H
                    }) : null;
                    let _ = c?.objective;
                    H?.();
                    let S = await async function(e) {
                        var t;
                        let r, {
                            scope: n,
                            entry: a,
                            threadGoalObjective: o,
                            workspaceRoot: i,
                            onSettled: s,
                            assertRequestCurrent: l
                        } = e;
                        if (null != a.conversationStartResult) return a.conversationStartResult;
                        if ("worktree-ready" !== a.phase) throw Error("Worktree preparation must finish before creating a task.");
                        let c = (t = a, "worktree-ready" !== t.phase || "source-workspace" === t.executionTarget ? null : {
                            id: `${t.id}:${t.attempt}`,
                            worktreeOutputText: t.worktreeOutputText,
                            setup: null == t.localEnvironmentConfigPath ? null : {
                                outcome: null == t.errorMessage ? "completed" : "skipped",
                                outputText: t.setupOutputText
                            }
                        });
                        if ("fork-conversation" === a.launchMode) {
                            let e, t = [i, ...(0, d.Gg)(a.sourceWorkspaceRoots)],
                                r = (e = null != a.targetTurnId ? await (0, M.a)(n, a.hostId, {
                                    sourceConversationId: a.sourceConversationId,
                                    targetTurnId: a.targetTurnId,
                                    clientThreadId: a.clientThreadId,
                                    cwd: i,
                                    projectAssignment: a.projectAssignment ?? null,
                                    workspaceRoots: t,
                                    collaborationMode: a.sourceCollaborationMode,
                                    threadSource: a.threadSource
                                }) : await (0, M.a)(n, a.hostId, {
                                    sourceConversationId: a.sourceConversationId,
                                    clientThreadId: a.clientThreadId,
                                    cwd: i,
                                    projectAssignment: a.projectAssignment ?? null,
                                    workspaceRoots: t,
                                    collaborationMode: a.sourceCollaborationMode,
                                    threadSource: a.threadSource
                                })).conversationId;
                            return "failed" === e.synchronization.status ? {
                                status: "created",
                                conversationId: r,
                                firstTurn: {
                                    status: "not-started",
                                    message: e.synchronization.message
                                }
                            } : (null != c && await (0, R.b)(n, a.hostId).addWorktreeInitSyntheticTurn(r, c), {
                                status: "created",
                                conversationId: r,
                                firstTurn: {
                                    status: "not-requested"
                                }
                            })
                        }
                        let u = (0, q.b)(n, a.openingPromptForHistory),
                            p = D(a),
                            h = (0, F.a)(a, o),
                            f = (0, N.c)(n, a.id),
                            w = async e => {
                                "created" === e.status && "accepted" === e.firstTurn.status && (u(e.conversationId), (0, B.a)(n, a.composerDraft?.context.sharedThreadAttributions, {
                                    threadId: e.conversationId,
                                    turnId: e.firstTurn.turnId
                                }));
                                try {
                                    await f?.onResult(e)
                                } catch (e) {
                                    T.a.warning("Failed to update the pending worktree submission", {
                                        safe: {},
                                        sensitive: {
                                            error: e
                                        }
                                    })
                                }
                            };
                        try {
                            l?.(), r = await (0, g.b)(n, a.threadStartHostId ?? a.hostId, {
                                ...(0, P.a)({
                                    ...h,
                                    workspaceRoots: [i, ...(0, d.Gg)(h.workspaceRoots)],
                                    cwd: i
                                }),
                                initialTitle: p || a.label.trim() || void 0,
                                clientUserMessageId: a.composerDraft?.id,
                                restoreMessage: a.composerDraft,
                                skipAutoTitleGeneration: p.length > 0
                            }, {
                                clientThreadId: a.clientThreadId,
                                assertRequestCurrent: l,
                                afterConversationCreated: f?.afterConversationCreated,
                                onSettled: async e => {
                                    await w(e), await s?.(e)
                                },
                                worktreeInit: c ?? void 0
                            })
                        } catch (e) {
                            throw await w({
                                status: "failed",
                                message: e instanceof Error ? e.message : String(e)
                            }), e
                        }
                        return await w(r), r
                    }({
                        scope: U,
                        entry: a,
                        threadGoalObjective: _,
                        workspaceRoot: r,
                        assertRequestCurrent: H,
                        onSettled: async e => {
                            x && "failed" === e.status && await V(), (0, G.d)(U, a.id, "failed" === e.status ? null : e), x && ("failed" === e.status ? X(a.id) : "created" === e.status && ((0, C.b)(U, {
                                clientThreadId: n,
                                conversationId: e.conversationId
                            }), (0, v.c)(U, {
                                pendingWorktreeId: t,
                                targetConversationId: e.conversationId,
                                targetWorkspaceRoot: r
                            })))
                        }
                    });
                    if ((0, G.d)(U, a.id, S), "outcome-unknown" === S.status) {
                        x = !0, Q(a.id), U.get(y.f).danger((0, g.a)(U, S)?.message, {
                            errorAnalytics: {
                                toastId: "pendingWorktreeConversationStarter.startPendingWorktreeConversationEvent"
                            }
                        });
                        return
                    }
                    u = S.conversationId, (0, C.b)(U, {
                        clientThreadId: n,
                        conversationId: u
                    }), (0, v.c)(U, {
                        pendingWorktreeId: t,
                        targetConversationId: u,
                        targetWorkspaceRoot: r
                    });
                    let A = (0, g.a)(U, S);
                    if (null != A && (i && "outcome-unknown" !== S.firstTurn.status || U.get(y.f).danger(A.message, {
                            errorAnalytics: {
                                toastId: "pendingWorktreeConversationStarter.startPendingWorktreeConversationEvent"
                            }
                        }), "outcome-unknown" === S.firstTurn.status)) {
                        x = !0, Q(a.id);
                        return
                    }
                    await Promise.all([async function(e) {
                        let {
                            scope: t,
                            entry: r,
                            conversationId: n,
                            hostConfig: a,
                            threadGoalObjective: o
                        } = e, i = null == r.initialThreadTitle && r.labelEdited, s = D(r);
                        if (s.length > 0 && (await (0, R.b)(t, a.id).setThreadTitle(n, s, "start-conversation" === r.launchMode ? {
                                expectedTitle: (0, j.c)(s, 60)
                            } : {
                                onlyIfUntitled: i
                            }), (0, O.a)(t, a.id, n)), null != r.worktreeGitRoot) try {
                            await (0, W.a)().setOwnerThread({
                                hostId: a.id,
                                worktree: (0, d._e)(r.worktreeGitRoot),
                                conversationId: n
                            })
                        } catch (e) {
                            T.a.warning("Worktree created and conversation started, but failed to set worktree owner metadata: {}", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            })
                        }
                        "start-conversation" === r.launchMode && null != o && await (0, R.b)(t, r.threadStartHostId ?? a.id).setThreadGoal(n, {
                            appendTranscriptItem: !1,
                            objective: o
                        })
                    }({
                        scope: U,
                        entry: a,
                        conversationId: u,
                        hostConfig: l,
                        threadGoalObjective: _
                    }), async function(e) {
                        let {
                            scope: t,
                            conversationId: r,
                            heartbeatAutomation: n,
                            intl: a,
                            queryClient: i
                        } = e;
                        if (null == n) return;
                        let s = {
                            kind: "heartbeat",
                            name: n.name,
                            prompt: n.prompt,
                            rrule: n.rrule,
                            targetThreadId: r,
                            model: null,
                            reasoningEffort: null
                        };
                        try {
                            let {
                                item: e
                            } = await b.a.create(s);
                            (0, I.a)(t, o.CodexAutomationEvent, {
                                action: o.CodexAutomationAction.CODEX_AUTOMATION_ACTION_CREATED,
                                source: o.CodexAutomationSource.CODEX_AUTOMATION_SOURCE_PENDING_WORKTREE,
                                success: !0,
                                ...(0, w.h)(e)
                            }), i.invalidateQueries({
                                queryKey: f.a
                            })
                        } catch (e) {
                            (0, I.a)(t, o.CodexAutomationEvent, {
                                action: o.CodexAutomationAction.CODEX_AUTOMATION_ACTION_CREATED,
                                source: o.CodexAutomationSource.CODEX_AUTOMATION_SOURCE_PENDING_WORKTREE,
                                success: !1,
                                ...(0, w.h)(s),
                                failureReason: o.CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR
                            }), T.a.error("Error creating pending worktree heartbeat automation", {
                                safe: {},
                                sensitive: {
                                    error: e
                                }
                            }), t.get(y.f).danger(a.formatMessage({
                                id: "worktreeInitV2.heartbeatAutomationError",
                                defaultMessage: "Started chat, but could not create the heartbeat",
                                description: "Toast shown when a worktree conversation starts but creating its heartbeat automation fails"
                            }), {
                                ...e instanceof Error && e.message === d.k ? (0, m.a)(t, a, e.message) : {},
                                errorAnalytics: {
                                    toastId: "worktreeInitV2.heartbeatAutomationError"
                                }
                            })
                        }
                    }({
                        scope: U,
                        conversationId: u,
                        heartbeatAutomation: a.heartbeatAutomation,
                        intl: ee,
                        queryClient: $
                    })]), "start-conversation" === a.launchMode && null != a.threadGoalDraft && await (0, k.b)({
                        scope: U,
                        draft: a.threadGoalDraft,
                        fallbackHostId: l.id
                    }), s(u)
                } catch (e) {
                    if (null != u) {
                        T.a.error("Worktree conversation started with incomplete metadata", {
                            safe: {
                                conversationId: u
                            },
                            sensitive: {
                                error: e
                            }
                        }), s(u);
                        return
                    }
                    if (await V(), X(t), null != _ && e instanceof Error && "AbortError" === e.name || (T.a.error("Error starting worktree conversation", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        }), i)) return;
                    U.get(y.f).danger(ee.formatMessage({
                        id: "composer.localTaskError.v2",
                        defaultMessage: "Error starting chat{br}{error}",
                        description: "Toast text shown when we failed to start a task"
                    }, {
                        br: (0, n.jsx)("br", {}),
                        error: (0, d._i)(e)
                    }), {
                        errorAnalytics: {
                            toastId: "composer.localTaskError.v2"
                        }
                    })
                }
            }, s[0] = K, s[1] = X, s[2] = ee, s[3] = z, s[4] = $, s[5] = Z, s[6] = J, s[7] = Q, s[8] = U, s[9] = Y, s[10] = e) : e = s[10];
            let et = (0, u.useEffectEvent)(e);
            return s[11] !== V || s[12] !== K || s[13] !== H || s[14] !== z || s[15] !== et ? (t = () => {
                H.forEach(e => {
                    if ("succeeded" === e.state) return void K(e.pendingWorktreeId);
                    let t = z.find(t => t.id === e.pendingWorktreeId);
                    "incomplete" === e.state && t?.conversationStartResult?.status === "created" && "outcome-unknown" !== t.conversationStartResult.firstTurn.status ? (0, N.a)(t.id) : "waiting" !== e.state || t?.phase !== "worktree-ready" || null == t.worktreeWorkspaceRoot || V(t.id) && et({
                        pendingWorktreeId: t.id,
                        workspaceRoot: t.worktreeWorkspaceRoot
                    })
                })
            }, s[11] = V, s[12] = K, s[13] = H, s[14] = z, s[15] = et, s[16] = t) : t = s[16], s[17] !== V || s[18] !== K || s[19] !== H || s[20] !== z || s[21] !== Z || s[22] !== U ? (r = [V, K, H, z, Z, U], s[17] = V, s[18] = K, s[19] = H, s[20] = z, s[21] = Z, s[22] = U, s[23] = r) : r = s[23], (0, u.useEffect)(t, r), null
        }
    }),
    QVfH: (function(e, t, r) {
        var n = r("BolX"),
            a = r("zd8w"),
            o = r("ASxG"),
            i = r("OWtl"),
            s = r("Nwp9");
        let l = (0, n.u)(i.a, () => new Map),
            c = new Set,
            d = new Map,
            u = (0, s.b)("cancelled-pending-worktree-starts-v1", [], {
                coerceStoredValue: e => o.array(o.string()).parse(e).slice(-128)
            }),
            p = [],
            h = p,
            g = (0, n.i)(i.a, e => d.get(e), (e, t) => {
                let {
                    set: r
                } = t;
                return r(d.get(e)), m(() => r(d.get(e)))
            });

        function f() {
            return p
        }

        function w(e) {
            d.set(e, {
                state: "waiting"
            }), y()
        }

        function m(e) {
            return c.add(e), () => {
                c.delete(e)
            }
        }

        function b() {
            return h
        }

        function y() {
            h = Array.from(d, e => {
                let [t, r] = e;
                return {
                    pendingWorktreeId: t,
                    ...r
                }
            }), c.forEach(e => {
                e()
            })
        }
        r.d(t, {}, {
            a: w,
            b: function(e, t) {
                for (let [r] of(e.set(u, e => [...e.filter(e => e !== t), t].slice(-128)), d.set(t, {
                        state: "cancelled"
                    }), [...d].filter(e => {
                        let [, t] = e;
                        return "cancelled" === t.state
                    }).slice(0, -128))) d.delete(r);
                y()
            },
            c: function(e, t) {
                return e.get(l).get(t)
            },
            d: g,
            e: function(e, t, r) {
                let n = e.get(l),
                    a = () => n.get(t) === o,
                    o = {
                        afterConversationCreated: e => a() ? r.afterConversationCreated(e) : void 0,
                        onResult: e => a() ? r.onResult(e) : void 0
                    };
                return n.set(t, o), () => {
                    a() && n.delete(t)
                }
            },
            f: function() {
                return {
                    addPendingWorktreeConversationStart: w,
                    beginPendingWorktreeConversationStart: e => d.get(e)?.state === "waiting" && (d.set(e, {
                        state: "starting"
                    }), y(), !0),
                    failPendingWorktreeConversationStart: e => {
                        d.has(e) && (d.set(e, {
                            state: "failed"
                        }), y())
                    },
                    retainPendingWorktreeConversationStart: e => {
                        d.set(e, {
                            state: "incomplete"
                        }), y()
                    },
                    succeedPendingWorktreeConversationStart: (e, t) => {
                        d.has(e) && (d.set(e, {
                            state: "succeeded",
                            conversationId: t
                        }), y())
                    },
                    retryPendingWorktreeConversationStart: e => {
                        d.has(e) && d.get(e)?.state !== "incomplete" && (d.set(e, {
                            state: "waiting"
                        }), y())
                    },
                    removePendingWorktreeConversationStart: e => {
                        d.delete(e) && y()
                    }
                }
            },
            g: function() {
                return (0, a.useSyncExternalStore)(m, b, f)
            }
        })
    }),
    Vhua: (function(e, t, r) {
        var n = r("BolX"),
            a = r("hV9T"),
            o = r("OWtl"),
            i = r("tSEg"),
            s = r("kl6F"),
            l = r("Fhw2");
        let c = (0, n.u)(s.a, 0),
            d = (0, n.c)(i.a, e => {
                let {
                    get: t,
                    scope: r
                } = e;
                if (t(c) > 0) return !0;
                let n = t(s.u, (0, a.$h)(r.value.clientThreadId) ? r.value.clientThreadId : null);
                return null != n ? "failed" !== n.status : null == r.value.persistentWorkspace && "provisioning" === t(m)
            }),
            u = (0, n.d)(o.a, (e, t) => {
                var r, n;
                let {
                    get: a
                } = t;
                if (null == e) return null;
                let o = a(l.a);
                return void 0 === o ? void 0 : (r = o, n = e, r.find(e => e.clientThreadId === n) ?? null)
            }),
            p = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(u, e)?.hostId
            }),
            h = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(u, e)?.id
            }),
            g = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(u, e)?.isPinned
            }),
            f = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(u, e)?.sourceWorkspaceRoot
            }),
            w = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(u, e);
                return null == n ? n : n.labelEdited ? n.label : n.initialThreadTitle ?? n.label
            }),
            m = (0, n.c)(i.a, e => {
                let {
                    get: t,
                    scope: r
                } = e;
                if ("client-local-thread" !== r.value.routeKind) return "ready";
                let {
                    clientThreadId: n
                } = r.value;
                if (null != t(s.A, n)) return "ready";
                let a = t(u, n);
                return void 0 === a ? "provisioning" : null == a && null != r.value.persistentWorkspace ? "ready" : a?.phase === "failed" ? "failed" : "provisioning"
            });
        r.d(t, {}, {
            a: u,
            b: p,
            c: h,
            d: g,
            e: f,
            f: w,
            g: function(e) {
                e.set(c, e => e + 1);
                let t = !0;
                return {
                    [Symbol.dispose]() {
                        t && (t = !1, e.set(c, e => e - 1))
                    }
                }
            },
            h: m,
            i: d
        })
    }),
    f3xH: (function(e, t, r) {
        var n = r("hV9T");

        function a(e) {
            switch (e.type) {
                case "local-project":
                    if (null == e.projectId || e.projectId === n.kd) return;
                    return {
                        projectKind: "local", projectId: e.projectId
                    };
                case "remote-project":
                    return {
                        projectKind: "remote", projectId: e.projectId, hostId: e.hostId
                    };
                case "assignment":
                    if (null == e.assignment || "local" !== e.assignment.projectKind && ("local" === e.executionHostId || null != e.assignment.hostId && e.assignment.hostId !== e.executionHostId)) return;
                    return e.assignment
            }
        }
        r.d(t, {}, {
            a: function(e) {
                let {
                    isExistingThread: t,
                    executionHostId: r,
                    activeLocalProjectId: n,
                    existingAssignment: o,
                    homeRemoteProject: i,
                    selectedRemoteProject: s
                } = e;
                if (t) return a({
                    type: "assignment",
                    assignment: o,
                    executionHostId: r
                });
                if (null != n || "local" === r) return a({
                    type: "local-project",
                    projectId: n
                });
                let l = i ?? s;
                if (l?.hostId === r) return a({
                    type: "remote-project",
                    projectId: l.id,
                    hostId: l.hostId
                })
            },
            b: a
        })
    }),
    Fhw2: (function(e, t, r) {
        r.d(t, {
            a: () => g,
            b: () => f
        });
        var n = r("SZCv"),
            a = r.n(n),
            o = r("BolX"),
            i = r("JpbF"),
            s = r("svjy"),
            l = r("GaA7"),
            c = r("OWtl"),
            d = r("WFY2");
        let u = (0, r("Nwp9").b)("browser-pending-worktrees", void 0),
            p = (0, o.u)(c.a, e => {
                let {
                    scope: t
                } = e;
                if (null != u) return t.get(u)?.filter(e => "start-conversation" === e.launchMode || "fork-conversation" === e.launchMode).map(e => "queued" !== e.phase && "creating" !== e.phase && "setting-up" !== e.phase ? e : {
                    ...e,
                    phase: "failed",
                    errorMessage: e.errorMessage ?? t.get(s.a).formatMessage({
                        id: "pendingWorktree.interrupted",
                        defaultMessage: "Worktree creation was interrupted. Retry to continue",
                        description: "Error shown when a worktree creation was interrupted by closing or reloading the app"
                    }),
                    needsAttention: !0
                })
            }, {
                getServerSnapshot: () => void 0,
                isEqual: a()
            }),
            h = (0, o.h)(c.a, () => void 0, e => {
                let t, {
                        set: r
                    } = e,
                    n = l.a?.managedWorktrees?.pending;
                if (null == n) return;
                let a = !0;
                return n.subscribe(e => {
                    a && r(e)
                }).then(e => {
                    a ? t = e : e[Symbol.dispose]()
                }, e => {
                    a && d.a.warning("Failed to subscribe to pending worktrees", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    })
                }), () => {
                    a = !1, t?.[Symbol.dispose]()
                }
            }, {
                isEqual: a()
            }),
            g = (0, o.c)(c.a, e => {
                let {
                    get: t
                } = e;
                return t(l.a?.managedWorktrees?.pending == null ? p : h)
            });

        function f(e, t) {
            ! function e(t, r) {
                (0, i.a)(t, () => {
                    let n = t.get(p);
                    return Object.is(n, r) ? null : {
                        redo: () => e(t, r),
                        undo: () => e(t, n)
                    }
                }), t.set(p, r), null != u && t.set(u, r?.slice(-50))
            }(e, t(e.get(p)))
        }
    }),
    o27H: (function(e, t, r) {
        var n = r("QosV"),
            a = r("BolX"),
            o = r("hV9T"),
            i = r("DD2M"),
            s = r("rDNP"),
            l = r("ejcW"),
            c = r("kdqP"),
            d = r("GaA7"),
            u = r("OWtl"),
            p = r("ndjw"),
            h = r("ADAj"),
            g = r("kfGJ"),
            f = r("OMIV"),
            w = r("WFY2"),
            m = r("yiHb"),
            b = r("QVfH"),
            y = r("Fhw2");
        let v = [],
            k = ["[info] Refreshing upstream before creating worktree", "[info] Upstream refreshed", "[info] Continuing without updating", "[warning] Git authentication failed; sign in again before retrying", "[warning] Could not refresh upstream; using cached Git state"],
            I = new Map,
            x = (0, a.u)(u.a, !1, {
                onMount: (e, t) => {
                    for (let r of (e(!0), t.get(y.a) ?? [])) "worktree-ready" === r.phase && (0, b.a)(r.id)
                }
            });

        function _(e) {
            let t = (0, i.a)();
            return `${e}:${t}`
        }

        function E(e) {
            let t = e.lastIndexOf(":");
            return t <= 0 || t === e.length - 1 ? g.a : e.slice(0, t)
        }

        function C(e) {
            switch (e) {
                case "queued":
                case "creating":
                case "setting-up":
                    return !0;
                case "worktree-ready":
                case "failed":
                    return !1
            }
        }

        function S(e) {
            w.a.warning("Failed to cancel an upstream worktree refresh", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        async function T(e, t) {
            let r = (0, m.a)("git"),
                n = (0, i.a)(),
                a = new TextDecoder,
                s = {
                    abortController: new AbortController,
                    cleanupRequested: !1,
                    worktreeGitRoot: null
                };
            I.set(t.id, s), j(e, t.id, e => ({
                ...e,
                phase: "creating",
                worktreeOutputText: "[info] Starting worktree creation\n"
            }));
            let l = [r.subscribe("create-worktree-path", r => {
                r.streamId === n && r.hostId === t.hostId && (s.worktreeGitRoot = r.worktreeGitRoot, s.abortController.signal.aborted || j(e, t.id, e => ({
                    ...e,
                    worktreeGitRoot: r.worktreeGitRoot
                })))
            }), r.subscribe("create-worktree-setup-started", r => {
                s.abortController.signal.aborted || r.streamId === n && j(e, t.id, e => "creating" === e.phase ? {
                    ...e,
                    phase: "setting-up"
                } : e)
            }), r.subscribe("create-worktree-stream", r => {
                if (s.abortController.signal.aborted || r.streamId !== n) return;
                let o = a.decode(r.data, {
                    stream: !0
                });
                j(e, t.id, e => {
                    let t = "setting-up" === e.phase ? "setupOutputText" : "worktreeOutputText",
                        r = `${e[t]}${o}`,
                        n = r.slice(-32e3),
                        a = k.filter(e => r.includes(e));
                    if (a.some(e => !n.includes(e))) {
                        let e = `${a.join("\n")}
`;
                        n = `${e}${n.slice(e.length)}`
                    }
                    return {
                        ...e,
                        [t]: n
                    }
                })
            })];
            try {
                let a = e.get(p.g, t.hostId),
                    i = await r.request({
                        method: "create-worktree",
                        params: {
                            hostConfig: a,
                            operationSource: "worktree_pending_create",
                            cwd: (0, o.Ze)(t.sourceWorkspaceRoot),
                            startingState: t.startingState,
                            upstreamRefreshMode: (0, h.b)(e.get, o.Gk.upstreamRefreshMode),
                            localEnvironmentConfigPath: t.localEnvironmentConfigPath,
                            streamId: n,
                            pendingWorktreeId: t.id,
                            allowSetupFailure: !0,
                            useWorkspaceDir: (0, f.b)(e, "4059753351")
                        },
                        signal: s.abortController.signal
                    });
                if (s.abortController.signal.aborted) {
                    s.worktreeGitRoot = i.worktreeGitRoot;
                    return
                }
                j(e, t.id, e => ({
                    ...e,
                    phase: null == i.setupError ? "worktree-ready" : "failed",
                    errorMessage: i.setupError,
                    worktreeGitRoot: i.worktreeGitRoot,
                    worktreeWorkspaceRoot: i.worktreeWorkspaceRoot,
                    needsAttention: null != i.setupError
                }))
            } catch (r) {
                if (s.abortController.signal.aborted) return;
                j(e, t.id, e => ({
                    ...e,
                    phase: "failed",
                    errorMessage: r instanceof Error ? r.message : String(r),
                    worktreeGitRoot: s.worktreeGitRoot ?? e.worktreeGitRoot,
                    needsAttention: !0
                }))
            } finally {
                for (let e of l) e();
                I.get(t.id) === s && I.delete(t.id), s.cleanupRequested && null != s.worktreeGitRoot && await A(e, t, s.worktreeGitRoot)
            }
        }
        async function A(e, t, r) {
            try {
                let n = await (0, m.a)("git").request({
                    method: "delete-worktree",
                    params: {
                        hostConfig: e.get(p.g, t.hostId),
                        worktree: (0, o._e)(r),
                        force: !0,
                        reason: "new-branch-cleanup",
                        operationSource: "worktree_new_branch_cleanup"
                    }
                });
                n.success || w.a.info("Browser worktree cleanup did not complete", {
                    safe: {
                        reason: n.reason
                    },
                    sensitive: {}
                })
            } catch (e) {
                w.a.warning("Failed to clean up a browser worktree", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            }
        }

        function j(e, t, r) {
            (0, y.b)(e, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map(e => e.id === t ? r(e) : e)
            })
        }

        function R(e, t, r) {
            P(e, t, [{
                type: "label",
                label: r
            }, {
                type: "labelEdited",
                labelEdited: !0
            }])
        }

        function M(e, t, r) {
            P(e, t, [{
                type: "pinnedBeforeThreadId",
                beforeThreadId: r
            }])
        }

        function O(e, t, r) {
            P(e, t, r ? [{
                type: "isPinned",
                isPinned: r
            }] : [{
                type: "isPinned",
                isPinned: r
            }, {
                type: "pinnedBeforeThreadId",
                beforeThreadId: null
            }])
        }

        function P(e, t, r) {
            if (0 !== r.length) {
                if (d.a?.managedWorktrees?.pending == null) return void(0, y.b)(e, function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return e.map(e => e.id === t ? function(e, t) {
                        if (0 === t.length) return e;
                        let r = {
                            ...e
                        };
                        for (let e of t) switch (e.type) {
                            case "conversationStartResult":
                                r.conversationStartResult = e.result;
                                break;
                            case "isPinned":
                                r.isPinned = e.isPinned;
                                break;
                            case "pinnedBeforeThreadId":
                                r.pinnedBeforeThreadId = e.beforeThreadId;
                                break;
                            case "label":
                                r.label = e.label;
                                break;
                            case "labelEdited":
                                r.labelEdited = e.labelEdited;
                                break;
                            case "needsAttention":
                                r.needsAttention = e.needsAttention
                        }
                        return r
                    }(e, r) : e)
                });
                d.a.managedWorktrees.pending.updateMetadata({
                    hostId: E(t),
                    id: t,
                    updates: r
                }).catch(B)
            }
        }

        function q(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, o.Ue)();
            return {
                clientThreadId: r,
                pendingWorktreeId: e({
                    ...t,
                    clientThreadId: r
                })
            }
        }

        function W(e, t, r) {
            if (d.a?.managedWorktrees?.pending == null) throw Error("Worktree app actions require the ChatGPT desktop app");
            (0, c.a)(e, r.hostId);
            let n = {
                id: t,
                ...r
            };
            return "start-conversation" === n.launchMode && (n.openingPromptForHistory = structuredClone(n.openingPromptForHistory)), (0, b.a)(t), d.a.managedWorktrees.pending.create(n).catch(async r => {
                B(r), await (0, b.c)(e, t)?.onResult({
                    status: "outcome-unknown",
                    requestId: t
                })
            }).catch(B), t
        }

        function B(e) {
            w.a.warning("Pending worktree action failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        r.d(t, {}, {
            a: function(e) {
                let {
                    scope: t,
                    ...r
                } = e;
                return q(e => W(t, _(e.hostId), e), r, r.clientThreadId)
            },
            b: q,
            c: C,
            d: function(e, t, r) {
                P(e, t, [{
                    type: "conversationStartResult",
                    result: r
                }])
            },
            e: R,
            f: O,
            g: M,
            h: function() {
                let e, t, r, o, i, h, g, f, w, v, k, j, q, F = (0, n.c)(41),
                    N = (0, a.y)(u.a);
                (0, a.z)(x), F[0] !== N ? (e = e => N.get(y.a)?.find(t => t.id === e), F[0] = N, F[1] = e) : e = F[1];
                let D = e;
                F[2] !== N ? (t = e => {
                    (0, y.b)(N, e)
                }, F[2] = N, F[3] = t) : t = F[3];
                let L = t,
                    {
                        removePendingWorktreeConversationStart: G,
                        retryPendingWorktreeConversationStart: U
                    } = (0, b.f)();
                F[4] !== N || F[5] !== L ? (r = e => {
                    let t = _(e.hostId);
                    if (d.a?.managedWorktrees?.pending != null) return W(N, t, e);
                    (0, c.a)(N, e.hostId);
                    let r = function(e) {
                        let t = {
                            id: e.id,
                            hostId: e.hostId,
                            createdAt: Date.now(),
                            attempt: 1,
                            phase: "queued",
                            labelEdited: !1,
                            worktreeOutputText: "",
                            setupOutputText: "",
                            errorMessage: null,
                            worktreeWorkspaceRoot: null,
                            worktreeGitRoot: null,
                            needsAttention: !1,
                            isPinned: !1,
                            pinnedBeforeThreadId: null,
                            label: e.label,
                            initialThreadTitle: e.initialThreadTitle,
                            browserTransferSourceBrowserTabId: e.browserTransferSourceBrowserTabId,
                            browserTransferSourceBrowserTabIds: e.browserTransferSourceBrowserTabIds,
                            browserTransferSourceConversationId: e.browserTransferSourceConversationId,
                            sourceWorkspaceRoot: e.sourceWorkspaceRoot,
                            sourceWorkspaceRoots: e.sourceWorkspaceRoots,
                            startingState: e.startingState,
                            localEnvironmentConfigPath: e.localEnvironmentConfigPath,
                            prompt: e.prompt,
                            heartbeatAutomation: e.heartbeatAutomation
                        };
                        switch (e.launchMode) {
                            case "fork-conversation":
                                return {
                                    ...t, clientThreadId: e.clientThreadId, launchMode: "fork-conversation", startConversationParamsInput: null, projectAssignment: e.projectAssignment, sourceConversationId: e.sourceConversationId, sourceCollaborationMode: e.sourceCollaborationMode, targetTurnId: e.targetTurnId, threadSource: e.threadSource
                                };
                            case "start-conversation":
                                return {
                                    ...t, clientThreadId: e.clientThreadId, launchMode: "start-conversation", startConversationParamsInput: e.startConversationParamsInput, composerDraft: e.composerDraft, openingPromptForHistory: e.openingPromptForHistory, threadStartHostId: e.threadStartHostId, threadGoalDraft: e.threadGoalDraft, sourceConversationId: null, sourceCollaborationMode: null
                                }
                        }
                    }({
                        id: t,
                        ...e
                    });
                    return (0, b.a)(t), L(e => [...void 0 === e ? [] : e, r]), T(N, r), t
                }, F[4] = N, F[5] = L, F[6] = r) : r = F[6];
                let $ = r;
                F[7] !== N ? (o = (e, t) => {
                    R(N, e, t)
                }, F[7] = N, F[8] = o) : o = F[8];
                let z = o;
                F[9] !== N ? (i = (e, t) => {
                    O(N, e, t)
                }, F[9] = N, F[10] = i) : i = F[10];
                let H = i;
                F[11] !== N ? (h = (e, t) => {
                    M(N, e, t)
                }, F[11] = N, F[12] = h) : h = F[12];
                let K = h;
                F[13] !== N ? (g = e => {
                    P(N, e, [{
                        type: "needsAttention",
                        needsAttention: !1
                    }])
                }, F[13] = N, F[14] = g) : g = F[14];
                let V = g;
                F[15] !== D || F[16] !== U || F[17] !== N || F[18] !== L ? (f = e => {
                    if (D(e)?.conversationStartResult == null) {
                        if (U(e), d.a?.managedWorktrees?.pending == null) {
                            let t = D(e);
                            if (L(t => (void 0 === t ? [] : t).map(t => t.id === e ? {
                                    ...t,
                                    attempt: t.attempt + 1,
                                    phase: "queued",
                                    worktreeOutputText: "",
                                    setupOutputText: "",
                                    errorMessage: null,
                                    worktreeWorkspaceRoot: null,
                                    worktreeGitRoot: null,
                                    needsAttention: !1
                                } : t)), null != t) {
                                let r = I.get(e);
                                null != r ? (r.cleanupRequested = !0, r.abortController.abort()) : "failed" === t.phase && null != t.worktreeGitRoot && A(N, t, t.worktreeGitRoot), T(N, t)
                            }
                            return
                        }
                        d.a.managedWorktrees.pending.retry({
                            hostId: E(e),
                            id: e
                        }).catch(B)
                    }
                }, F[15] = D, F[16] = U, F[17] = N, F[18] = L, F[19] = f) : f = F[19];
                let X = f;
                F[20] !== L ? (w = e => {
                    ((0, b.a)(e), d.a?.managedWorktrees?.pending == null) ? L(t => (void 0 === t ? [] : t).map(t => t.id === e && "failed" === t.phase && null != t.worktreeGitRoot && null != t.worktreeWorkspaceRoot ? {
                        ...t,
                        phase: "worktree-ready",
                        needsAttention: !1
                    } : t)): d.a.managedWorktrees.pending.continueWithoutSetup({
                        hostId: E(e),
                        id: e
                    }).catch(B)
                }, F[20] = L, F[21] = w) : w = F[21];
                let Q = w;
                F[22] !== N ? (v = e => {
                    (0, m.a)("git").request({
                        method: "cancel-worktree-upstream-refresh",
                        params: {
                            hostConfig: N.get(p.g, E(e)),
                            operationSource: "worktree_pending_create",
                            pendingWorktreeId: e
                        }
                    }).catch(S)
                }, F[22] = N, F[23] = v) : v = F[23];
                let J = v;
                if (F[24] !== D || F[25] !== G || F[26] !== N || F[27] !== L) {
                    function Y(e) {
                        let t = D(e);
                        t?.launchMode === "start-conversation" && null != t.threadGoalDraft && (0, s.b)({
                            scope: N,
                            draft: t.threadGoalDraft,
                            fallbackHostId: t.hostId
                        })
                    }
                    k = (e, t) => {
                        let {
                            continueLocally: r,
                            restoreDraft: n
                        } = void 0 === t ? {} : t;
                        if (void 0 !== r && r) {
                            let t = D(e);
                            if (null == t || null != t.conversationStartResult || !C(t.phase)) return;
                            if (d.a?.managedWorktrees?.pending != null) return void d.a.managedWorktrees.pending.cancel({
                                hostId: E(e),
                                id: e,
                                continueLocally: !0
                            }).catch(B);
                            let r = I.get(e);
                            return null != r ? (r.cleanupRequested = !0, r.abortController.abort()) : null != t.worktreeGitRoot && A(N, t, t.worktreeGitRoot), void L(t => (void 0 === t ? [] : t).map(t => t.id === e ? {
                                ...t,
                                executionTarget: "source-workspace",
                                phase: "worktree-ready",
                                worktreeWorkspaceRoot: t.sourceWorkspaceRoot,
                                worktreeGitRoot: null,
                                errorMessage: null,
                                needsAttention: !1
                            } : t))
                        }
                        let a = D(e);
                        if (a?.launchMode === "start-conversation" && (0, l.e)(N, a.clientThreadId), null != a && null == a.conversationStartResult ? (0, b.b)(N, e) : G(e), void 0 !== n && n || Y(e), d.a?.managedWorktrees?.pending == null) {
                            {
                                let t = I.get(e);
                                null != t ? (t.cleanupRequested = !0, t.abortController.abort()) : a?.worktreeGitRoot != null && A(N, a, a.worktreeGitRoot)
                            }
                            L(t => (void 0 === t ? [] : t).filter(t => t.id !== e));
                            return
                        }
                        d.a.managedWorktrees.pending.cancel({
                            hostId: E(e),
                            id: e
                        }).catch(B)
                    }, j = e => {
                        if (G(e), Y(e), d.a?.managedWorktrees?.pending == null) {
                            {
                                let t = D(e),
                                    r = I.get(e);
                                null != r ? (r.cleanupRequested = t?.phase === "failed", r.abortController.abort()) : t?.phase === "failed" && null != t.worktreeGitRoot && A(N, t, t.worktreeGitRoot)
                            }
                            L(t => (void 0 === t ? [] : t).filter(t => t.id !== e));
                            return
                        }
                        d.a.managedWorktrees.pending.dismiss({
                            hostId: E(e),
                            id: e
                        }).catch(B)
                    }, F[24] = D, F[25] = G, F[26] = N, F[27] = L, F[28] = k, F[29] = j
                } else k = F[28], j = F[29];
                return F[30] !== k || F[31] !== V || F[32] !== Q || F[33] !== J || F[34] !== $ || F[35] !== j || F[36] !== z || F[37] !== X || F[38] !== H || F[39] !== K ? (q = {
                    createPendingWorktree: $,
                    renamePendingWorktree: z,
                    setPendingWorktreePinned: H,
                    setPendingWorktreePinnedBeforeThreadId: K,
                    clearPendingWorktreeAttention: V,
                    retryPendingWorktree: X,
                    continuePendingWorktree: Q,
                    continuePendingWorktreeWithoutUpdating: J,
                    cancelPendingWorktree: k,
                    dismissPendingWorktree: j
                }, F[30] = k, F[31] = V, F[32] = Q, F[33] = J, F[34] = $, F[35] = j, F[36] = z, F[37] = X, F[38] = H, F[39] = K, F[40] = q) : q = F[40], q
            },
            i: function() {
                return (0, a.z)(y.a) ?? v
            }
        })
    }),
    ZYQR: (function(e, t, r) {
        var n = r("BolX"),
            a = r("hV9T");
        r("Dgwo");
        var o = r("a4MG");
        r("sLlu");
        var i = r("OWtl");
        r("ndjw");
        var s = r("ADAj"),
            l = r("kfGJ");
        let c = (0, n.d)(i.a, (e, t) => {
            let {
                get: r
            } = t;
            if (e === l.a) return r(s.j) ? (0, a.Cg)({
                [a.Dh.worktreeRoot.key]: (0, s.b)(r, a.Dh.worktreeRoot),
                [a.Gk.autoCleanupEnabled.key]: (0, s.b)(r, a.Gk.autoCleanupEnabled),
                [a.Gk.keepCount.key]: (0, s.b)(r, a.Gk.keepCount)
            }) : null;
            let n = r(o.z, e).data;
            return n?.configReadSucceeded === !0 ? (0, a.Cg)(n.config.desktop) : null
        });
        r.d(t, {}, {
            a: c
        })
    }),
    TurB: (function(e, t, r) {
        var n = r("nuXe"),
            a = r.n(n),
            o = r("BolX"),
            i = r("hV9T"),
            s = r("XnTj"),
            l = r("M9WK"),
            c = r("tl5a"),
            d = r("J43j"),
            u = r("mNN5"),
            p = r("GaA7"),
            h = r("OWtl"),
            g = r("ndjw"),
            f = r("V0vl"),
            w = r("rvFo"),
            m = r("yiHb"),
            b = r("psi4"),
            y = r("dg06");
        let v = {
                kind: "available"
            },
            k = {
                kind: "unavailable",
                reason: "inspection-failed",
                worktreePath: null
            },
            I = "worktree_restore_required",
            x = "worktree_status_unavailable",
            _ = (0, o.q)(h.a, (e, t) => {
                let {
                    conversationId: r,
                    cwd: n,
                    hostId: o
                } = e, {
                    get: c
                } = t, d = (0, y.b)(o);
                if (null == n) return {
                    queryFn: () => v,
                    queryKey: [...d, "available", null],
                    networkMode: "always",
                    staleTime: w.b.FIVE_SECONDS
                };
                let h = c(g.d, {
                    hostId: o
                });
                if (null == h.data) return {
                    enabled: h.isError,
                    queryFn: () => k,
                    queryKey: [...d, h.isError ? "codex-home-error" : "codex-home-loading", n],
                    staleTime: w.b.FIVE_SECONDS
                };
                if (!(0, i.bi)(n, h.data.codexHome, h.data.worktreesSegment)) return {
                    queryFn: () => v,
                    queryKey: [...d, "available", n],
                    networkMode: "always",
                    staleTime: w.b.FIVE_SECONDS
                };
                let I = (0, b.c)(n, (0, l.b)(h.data));
                if (null == I) return {
                    queryFn: () => v,
                    queryKey: [...d, "available-unmanaged-worktree", n],
                    networkMode: "always",
                    staleTime: w.b.FIVE_SECONDS
                };
                let x = c(g.g, o),
                    _ = c(f.f, r),
                    E = _?.pending?.cwd === n ? _.pending.projectSources : _?.applied?.cwd === n ? _.applied.projectSources : null,
                    C = c(g.j, {
                        hostId: o
                    });
                if (null == E && null == C.data && !C.isError) return {
                    enabled: !1,
                    queryFn: () => k,
                    queryKey: [...d, "workspace-roots-loading", I],
                    staleTime: w.b.FIVE_SECONDS
                };
                let S = a()([...E ?? [], ...C.data?.roots ?? []]).map(i._e),
                    T = (0, i.Ze)(I);
                return {
                    queryFn: async () => {
                        let e, t = async () => {
                            let {
                                existingPaths: e
                            } = await (0, u.b)({
                                hostId: o,
                                paths: [n]
                            });
                            return e.includes(n) ? v : {
                                kind: "unavailable",
                                reason: "inspection-failed",
                                worktreePath: T
                            }
                        };
                        if ("remote-control" !== x.kind) return t();
                        try {
                            let e = await p.a.workspaceFiles.getMetadata?.({
                                hostId: o,
                                path: n
                            });
                            if (null != e) return "directory" === e.kind ? v : {
                                kind: "unavailable",
                                reason: "inspection-failed",
                                worktreePath: T
                            }
                        } catch {}
                        try {
                            e = await (0, m.a)("git").request({
                                method: "managed-worktree-state",
                                params: {
                                    candidateRoots: S,
                                    cwd: n,
                                    hostConfig: x,
                                    operationSource: "worktree_restore_banner",
                                    worktreePath: T
                                }
                            })
                        } catch (e) {
                            if ((0, s.g)(e, "process/spawn")) return t();
                            throw e
                        }
                        switch (e.kind) {
                            case "available":
                                return v;
                            case "restorable":
                            case "unavailable":
                                return {
                                    ...e, worktreePath: T
                                };
                            case "gone":
                                return {
                                    kind: "gone", worktreePath: T
                                }
                        }
                    },
                    queryKey: [...d, "inspect", n, T, S],
                    networkMode: "always",
                    refetchOnReconnect: "always",
                    staleTime: w.b.FIVE_SECONDS
                }
            }),
            E = (0, o.d)(h.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(_, {
                    conversationId: e,
                    cwd: r(c.p, e),
                    hostId: r(c.vb, e)
                })
            }),
            C = (0, o.d)(h.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(E, e);
                return n.isError ? "unavailable" : null != n.data ? n.data.kind : "loading"
            });
        async function S(e, t) {
            let {
                conversationId: r,
                cwd: n,
                hostId: a
            } = t, o = e.query.snapshot(g.d, {
                hostId: a
            }), s = o.getData();
            if ("local" === a || null == s || e.queryClient.getQueryState(o.queryKey)?.isInvalidated ? s = await o.fetch() : o.fetch().catch(() => void 0), !(0, i.bi)(n, s.codexHome, s.worktreesSegment)) return v;
            await e.query.getOrFetch(g.j, {
                hostId: a
            }).catch(() => void 0);
            let l = {
                conversationId: r,
                cwd: (0, i.Ze)(n),
                hostId: a
            };
            return await e.query.invalidate(_, l, {
                exact: !0
            }), e.query.fetch(_, l)
        }
        async function T(e, t) {
            await Promise.all([e.query.invalidate(g.d, {
                hostId: t
            }, {
                exact: !0
            }), e.query.invalidate(g.j, {
                hostId: t
            }, {
                exact: !0
            })])
        }
        r.d(t, {}, {
            a: "worktree_gone",
            b: I,
            c: x,
            d: async function(e, t) {
                let r, {
                    conversationId: n,
                    cwd: a,
                    hostId: o
                } = t;
                try {
                    r = await S(e, {
                        conversationId: n,
                        cwd: a,
                        hostId: o
                    })
                } catch {
                    throw Error(x)
                }
                switch (r.kind) {
                    case "available":
                    case "gone":
                        return;
                    case "restorable":
                        throw Error(I);
                    case "unavailable":
                        throw Error(x)
                }
            },
            e: _,
            f: async function(e, t) {
                let {
                    conversationId: r,
                    cwd: n,
                    hostId: a
                } = t;
                return await T(e, a), S(e, {
                    conversationId: r,
                    cwd: n,
                    hostId: a
                })
            },
            g: async function(e, t) {
                await T(e, t), await e.queryClient.invalidateQueries({
                    queryKey: (0, y.b)(t)
                })
            },
            h: async function(e, t) {
                let r = await S(e, t);
                if ("unavailable" === r.kind) throw Error(x);
                if ("restorable" !== r.kind) return;
                let n = e.get(g.g, t.hostId);
                await (0, m.a)("git").request({
                    method: "restore-worktree",
                    params: {
                        conversationId: t.conversationId,
                        cwd: (0, i.Ze)(t.cwd),
                        hostConfig: n,
                        operationSource: "worktree_restore_banner",
                        repoRoot: r.snapshot.repoRoot,
                        worktreePath: r.worktreePath
                    }
                });
                let a = (0, d.a)(n);
                await Promise.all([e.query.invalidate(_, {
                    ...t,
                    cwd: (0, i.Ze)(t.cwd)
                }, {
                    exact: !0
                }), e.queryClient.invalidateQueries({
                    queryKey: (0, y.a)(a)
                }), e.queryClient.invalidateQueries({
                    queryKey: ["git", "metadata", a]
                })])
            },
            i: E,
            j: C
        })
    }),
    LcvC: (function(e, t, r) {
        var n = r("hV9T"),
            a = r("M9WK"),
            o = r("bnxy");

        function i(e, t) {
            if (!n.Fk.safeParse(e).success) return null;
            let r = null == (0, n.Dg)(t) ? e : e.replace(/-[0-9a-f]{16}$/, "");
            return r[0].toUpperCase() + r.slice(1).replaceAll("-", " ")
        }

        function s(e, t) {
            let r = (0, o.r)(e).replace(/\/+$/, ""),
                i = r.toLowerCase();
            for (let s of [null == t ? null : (0, n.Ch)(t), (0, a.a)(e)]) {
                if (null == s) continue;
                let e = (0, o.r)(s).replace(/\/+$/, ""),
                    t = e.toLowerCase();
                if (i === t || i.startsWith(`${t}/`)) return r.slice(e.length).split("/").filter(e => e.length > 0)
            }
            return null
        }
        r.d(t, {}, {
            a: i,
            b: function(e) {
                let {
                    codexHome: t,
                    hostId: r,
                    worktreePath: n
                } = e, a = s(n, t)?.[0];
                return null == a ? (0, o.k)(n) : i(a, r) ?? a
            },
            c: s
        })
    }),
    psi4: (function(e, t, r) {
        var n = r("bnxy"),
            a = r("M9WK");
        r.d(t, {
            a: () => a.c,
            b: () => a.d,
            c: () => a.e
        }, {
            d: function(e) {
                if (!e) return null;
                let t = (0, n.r)(e).replace(/\/+$/, ""),
                    r = t.indexOf("/.git/worktrees/");
                if (-1 !== r) return t.slice(0, r);
                let a = "/.git";
                return t.endsWith(a) ? t.slice(0, -a.length) : null
            }
        })
    }),
    dg06: (function(e, t, r) {
        r.d(t, {}, {
            a: function(e, t) {
                let r = ["git", e, "codex-worktrees"];
                return null == t ? r : [...r, t]
            },
            b: function(e) {
                return ["git", e, "managed-worktree-state"]
            }
        })
    }),
    In8Z: (function(e, t, r) {
        var n = r("BolX"),
            a = r("Kwur"),
            o = r("OWtl"),
            i = r("eShZ");
        let s = (0, n.j)(o.a, e => (function(e) {
            let {
                delayMs: t,
                persist: r,
                retryDelayMs: n = 3e3,
                shouldRetry: a
            } = e, o = new Map, i = async e => {
                let t = o.get(e);
                if (null == t) return;
                if (null != t.timer && (clearTimeout(t.timer), t.timer = null), null != t.inFlight) return await t.inFlight, i(e);
                if (null == t.pending) return void o.delete(e);
                let n = t.pending;
                t.pending = null, t.inFlight = r(n);
                try {
                    await t.inFlight
                } catch (e) {
                    throw null == t.pending && (t.pending = n), e
                } finally {
                    t.inFlight = null
                }
                return i(e)
            };

            function s(e, t) {
                let r = o.get(e);
                null == r || r.retryAttempts >= 1 || null != r.timer || a?.(t) === !1 || (r.retryAttempts += 1, l(e, n))
            }

            function l(e, t) {
                let r = o.get(e);
                null != r && (r.timer = setTimeout(() => {
                    r.timer = null, i(e).catch(t => {
                        s(e, t)
                    })
                }, t))
            }
            return {
                flushConversation: e => {
                    let t = Array.from(o.entries()).filter(t => {
                        let [, r] = t;
                        return r.conversationId === e
                    });
                    if (0 !== t.length) return Promise.all(t.map(async e => {
                        let [t] = e;
                        try {
                            await i(t)
                        } catch (e) {
                            throw s(t, e), e
                        }
                    })).then(() => void 0)
                },
                schedule: (e, r, n, a) => {
                    let i = `${e}
${r}
${n}`,
                        s = o.get(i) ?? {
                            conversationId: e,
                            inFlight: null,
                            pending: null,
                            retryAttempts: 0,
                            timer: null
                        };
                    s.pending = a, s.retryAttempts = 0, null != s.timer && clearTimeout(s.timer), o.set(i, s), l(i, t)
                }
            }
        })({
            delayMs: "message" === e ? 2e3 : 2500,
            persist: e => e(),
            shouldRetry: "library" === e ? e => !(e instanceof i.FetchError && 409 === e.status) : void 0
        }));
        r.d(t, {}, {
            a: s,
            b: function(e, t, r) {
                let n = (null == r ? ["message", "library"] : [r]).map(r => e.get(s, r).flushConversation(t)).filter(e => null != e);
                if (n.length > 0) return Promise.all(n).then(() => void 0)
            },
            c: function(e, t) {
                let {
                    blockId: r,
                    conversationId: n,
                    messageId: o,
                    serverConversationId: i,
                    writingBlock: l
                } = t, c = {
                    conversation_id: i,
                    id: r,
                    index: String(l.index),
                    message_id: o,
                    updated_at: new Date().toISOString(),
                    writing_block: {
                        content: l.content,
                        id: l.id ?? r,
                        index: String(l.index),
                        metadata: l.metadata,
                        title: l.title,
                        variant: l.variant
                    }
                };
                e.get(s, "message").schedule(n, o, r, async () => {
                    await a.Request.safePost("/conversation/message/writing-blocks", {
                        requestBody: c
                    })
                })
            }
        })
    }),
    syw5: (function(e, t, r) {
        var n = r("RF9q"),
            a = r("kpIY");
        r.d(t, {}, {
            a: function(e, t, r) {
                return null == t ? r : (0, n.a)(e, t, e => (0, a.k)(e, void 0), r, !0)
            }
        })
    }),
    moQb: (function(e, t, r) {
        let n = (0, r("zd8w").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    gWlg: (function(e, t, r) {
        var n = r("RF9q"),
            a = r("kpIY"),
            o = r("Nwp9");
        let i = "codex-writing-block-active-tone-section-v1:",
            s = "codex-writing-block-content-v1:",
            l = "codex-writing-block-metadata-v1:",
            c = "codex-writing-block-subject-v1:",
            d = {
                bcc: "codex-writing-block-bcc-v1:",
                cc: "codex-writing-block-cc-v1:",
                recipient: "codex-writing-block-recipient-v1:"
            },
            u = ["recipient", "cc", "bcc"],
            p = (0, o.c)(y, void 0),
            h = (0, o.c)(k, void 0),
            g = (0, o.c)(I, void 0),
            f = (0, o.c)(e => x(e, "bcc"), void 0),
            w = (0, o.c)(e => x(e, "cc"), void 0),
            m = (0, o.c)(e => x(e, "recipient"), void 0),
            b = (0, o.c)(_, void 0);

        function y(e) {
            return `${i}${e}`
        }

        function v(e, t, r) {
            C(e) || (0, a.v)(t, r, 500, {
                shouldPublish: () => !C(e)
            })
        }

        function k(e) {
            return `${s}${e}`
        }

        function I(e) {
            return `${l}${e}`
        }

        function x(e, t) {
            return `${d[t]}${e}`
        }

        function _(e) {
            return `${c}${e}`
        }

        function E(e) {
            return `codex-writing-block-deleted-thread-v1:${e}`
        }

        function C(e) {
            let t = e.slice(0, e.indexOf("\n"));
            return (0, a.k)(E(t), !1)
        }
        r.d(t, {}, {
            a: p,
            b: f,
            c: w,
            d: h,
            e: g,
            f: m,
            g: b,
            h: function(e) {
                let t = `${e}
`,
                    r = `${i}${t}`,
                    n = `${s}${t}`,
                    o = `${l}${t}`,
                    p = `${c}${t}`;
                for (let i of ((0, a.u)(E(e), !0), (0, a.r)(r), (0, a.r)(n), (0, a.r)(o), (0, a.r)(p), u))(0, a.r)(`${d[i]}${t}`)
            },
            i: function(e) {
                for (let t of ((0, a.e)(k(e)), (0, a.e)(_(e)), u))(0, a.e)(x(e, t))
            },
            j: function(e) {
                if (C(e)) return;
                let t = (0, a.k)(k(e), void 0),
                    r = (0, a.k)(x(e, "bcc"), void 0),
                    n = (0, a.k)(x(e, "cc"), void 0),
                    o = (0, a.k)(x(e, "recipient"), void 0),
                    i = (0, a.k)(_(e), void 0);
                if (null != r || null != n || null != t || null != o || null != i) return {
                    bcc: r,
                    cc: n,
                    content: t,
                    recipient: o,
                    subject: i
                }
            },
            k: function(e, t, r) {
                return (0, n.b)(e, t, r)
            },
            l: function(e, t) {
                v(e, k(e), t)
            },
            m: function(e, t, r) {
                v(e, x(e, t), r)
            },
            n: function(e, t) {
                v(e, _(e), t)
            },
            o: function(e, t) {
                if (C(e)) return;
                let r = y(e);
                (0, a.k)(r, void 0) !== t && (0, a.u)(r, t)
            },
            p: function(e, t) {
                if (C(e)) return;
                let r = I(e),
                    n = (0, a.k)(r, void 0);
                (0, a.u)(r, {
                    ...n,
                    ...t
                })
            }
        })
    }),
    zTAs: (function(e, t, r) {
        var n = r("BhZP"),
            a = r("CL6A"),
            o = r("wDWo"),
            i = r("ASxG");
        let s = i.array(i.looseObject({
            content: i.string()
        }));

        function l(e, t) {
            let {
                contentReferences: r,
                isStreaming: n
            } = t;
            return (0, o.j)(e, {
                content_references: r
            }, {
                isStreaming: n
            })
        }

        function c(e, t) {
            let r = e;
            for (let n of ["options", "style_variants"]) {
                let a = s.safeParse(e?.[n]);
                a.success && (r = {
                    ...r,
                    [n]: a.data.map(e => ({
                        ...e,
                        content: l(e.content, t)
                    }))
                })
            }
            return r
        }
        r.d(t, {}, {
            a: function(e, t, r) {
                let o = {
                    ...e.metadata
                };
                return null != e.options && (o.options = e.options), {
                    content: (0, n.g)(o)[0]?.content ?? function(e, t) {
                        if (t && "string" == typeof e?.matched_text) return (0, a.c)((0, a.e)(e.matched_text, {
                            isStreaming: !0
                        })) ?? void 0
                    }(t, r) ?? e.content ?? "",
                    metadata: o
                }
            },
            b: l,
            c: c,
            d: function(e, t) {
                return e?.edited !== !1 || e.locallyEdited ? e : {
                    ...e,
                    content: l(e.content, t),
                    metadata: c(e.metadata, t)
                }
            }
        })
    }),
    PC5z: (function(e, t, r) {
        r.d(t, {
            a: () => M,
            b: () => A,
            c: () => R,
            d: () => O,
            e: () => P,
            f: () => T,
            g: () => S,
            h: () => j,
            i: () => E
        });
        var n = r("QosV"),
            a = r("IGm3"),
            o = r("BolX"),
            i = r("zd8w"),
            s = r("ZU27"),
            l = r("EpL9"),
            c = r("gbrq"),
            d = r("HOLv"),
            u = r("svjy"),
            p = r("tSEg"),
            h = r("kl6F"),
            g = r("UxLy"),
            f = r("O9ff"),
            w = r("HXpT"),
            m = r("AhlA"),
            b = r("ABep"),
            y = r("oyxz"),
            v = r("ziev"),
            k = r("X7b8");

        function I(e) {
            let t, r, a = (0, n.c)(6),
                {
                    readPreview: s,
                    title: l
                } = e,
                c = (0, o.y)(p.a);
            a[0] !== s || a[1] !== c ? (t = () => s(c), a[0] = s, a[1] = c, a[2] = t) : t = a[2];
            let [d] = (0, i.useState)(t);
            return a[3] !== d || a[4] !== l ? (r = null == d ? null : (0, b.jsx)(x, {
                title: l,
                ...d
            }), a[3] = d, a[4] = l, a[5] = r) : r = a[5], r
        }

        function x(e) {
            let t, r, a, o, i, s = (0, n.c)(11),
                {
                    title: l,
                    content: c,
                    hasPendingEdits: u
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, b.jsx)(d.a, {
                asset: k.a
            }), s[0] = t) : t = s[0], s[1] !== u ? (r = u ? (0, b.jsx)(y.a, {
                id: "tabThumbnail.writingBlock.pendingEdits",
                defaultMessage: "Changes to review",
                description: "Caption in a document tab preview when AI edits await acceptance or rejection"
            }) : null, s[1] = u, s[2] = r) : r = s[2], s[3] !== c ? (a = c || (0, b.jsx)(y.a, {
                id: "tabThumbnail.writingBlock.empty",
                defaultMessage: "Empty document",
                description: "Document tab preview when the current draft contains no text"
            }), s[3] = c, s[4] = a) : a = s[4], s[5] !== a ? (o = [{
                kind: "text",
                lines: 8,
                content: a
            }], s[5] = a, s[6] = o) : o = s[6], s[7] !== r || s[8] !== o || s[9] !== l ? (i = (0, b.jsx)(v.a, {
                icon: t,
                title: l,
                subtitle: r,
                sections: o
            }), s[7] = r, s[8] = o, s[9] = l, s[10] = i) : i = s[10], i
        }
        let _ = (0, l.j)("writing-block", function(e) {
                let t, r, a = (0, n.c)(5),
                    {
                        document: i,
                        renderSlots: s
                    } = e,
                    l = (0, o.x)(A, i.editorKey);
                return a[0] !== l?.slots ? (t = l?.slots ?? {
                    headerRows: [],
                    content: null
                }, a[0] = l?.slots, a[1] = t) : t = a[1], a[2] !== s || a[3] !== t ? (r = s(t), a[2] = s, a[3] = t, a[4] = r) : r = a[4], r
            }, {
                getId: (e, t) => {
                    let {
                        document: r
                    } = t;
                    return P(r.editorKey)
                },
                getIcon: () => (0, i.createElement)(d.a, {
                    asset: a.a
                }),
                getTitle: (e, t) => {
                    let {
                        document: r
                    } = t, n = r.title?.replace(/\.md$/i, "");
                    return n || ("document" === r.variant ? e.get(u.a).formatMessage({
                        id: "codex.writingBlock.documentTabTitle",
                        defaultMessage: "Document",
                        description: "Title of a document writing block tab when the document has no title."
                    }) : "chat_message" === r.variant ? e.get(u.a).formatMessage({
                        id: "codex.writingBlock.messageTabTitle",
                        defaultMessage: "Message",
                        description: "Title of an expanded chat-message writing block tab when the block has no custom title."
                    }) : e.get(u.a).formatMessage({
                        id: "codex.writingBlock.header.title.fallback",
                        defaultMessage: "Writing",
                        description: "Short fallback title in the header of a writing block shared by local Codex threads and Quick Chat when the block does not provide a custom title."
                    }))
                },
                isAvailable: e => "chatgpt-thread" === e.value.routeKind,
                dropDestinations: ["right"],
                showInNewTabLauncher: !1,
                showComposerInFullWidth: () => !0,
                ownsSingleTabHeader: () => !0,
                renderThumbnail: (e, t) => {
                    let {
                        document: r
                    } = e;
                    return (0, i.createElement)(I, {
                        key: r.editorKey,
                        title: t.title,
                        readPreview: e => {
                            let t = e.get(A, r.editorKey),
                                n = t?.readPreviewText();
                            return null == t || null == n ? null : {
                                content: n,
                                hasPendingEdits: t.hasPendingEdits
                            }
                        }
                    })
                },
                open: j
            }),
            E = (0, o.c)(h.a, e => {
                let {
                    get: t
                } = e;
                return t(s.l.storedTabs$).filter(q).map(e => e.props.document)
            }, {
                isEqual: g.a
            }),
            C = (0, o.c)(p.a, e => {
                let {
                    get: t
                } = e, r = t(s.l.activeTab$);
                return t(c.i) && q(r) ? r.props : null
            }),
            S = (0, o.d)(h.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != r(s.l.tabById$, P(e))
            }),
            T = (0, o.d)(p.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(C)?.document.editorKey === e
            }),
            A = (0, o.v)(p.a, e => null);

        function j(e, t, r) {
            s.l.openTab(e, _, {
                ...r,
                revealAndFocus: r?.revealAndFocus ?? !0,
                props: {
                    document: t
                },
                requiresWorkspaceReady: !1,
                onBeforeClose: e => e.get(A, t.editorKey)?.onBeforeClose() ?? !0,
                onClose: e => {
                    e.get(A, t.editorKey)?.onClose()
                }
            })
        }

        function R(e, t) {
            if (null != t.libraryFileId || !e.get(m.b)) return;
            let r = e.get(s.l.tabs$).find(r => q(r) && null == r.props.document.libraryFileId && r.props.document.conversationId === t.conversationId && r.props.document.writingBlockId === t.writingBlockId && r.props.document.messageId !== t.messageId && e.get(w.b, {
                conversationId: t.conversationId,
                messageId: r.props.document.messageId,
                writingBlockId: t.writingBlockId
            }) === t.messageId);
            null != r && j(e, t, {
                revealAndFocus: !1,
                replaceTabId: r.tabId
            })
        }

        function M(e, t) {
            s.l.closeTab(e, P(t))
        }

        function O(e, t) {
            let r = e.get(C)?.document;
            if (r?.conversationId !== t) return null;
            let n = e.get(f.a, {
                conversationId: t,
                messageId: r.messageId,
                instanceId: r.writingBlockId,
                refIndex: r.writingBlockIndex
            })?.libraryFileId.trim();
            return n ? `The user currently has the writing block backed by library_file_id ${JSON.stringify(n)} open in the writing block editor. Treat the user's current request as referring to this exact writing block. For any requested edits, target that exact Library file.` : null
        }

        function P(e) {
            return `writing-block:${encodeURIComponent(e)}`
        }

        function q(e) {
            return e?.tabType.kind === _.kind
        }
    }),
    HAEQ: (function(e, t, r) {
        var n = r("ABep"),
            a = r("RNul"),
            o = r("OU2K"),
            i = r("b8ru");
        let s = {
            fallback: (0, n.jsx)(a.a, {
                className: "icon-sm"
            }),
            errorFallback: (0, n.jsx)(o.a, {
                onRetry: () => void(0, i.a)()
            })
        };
        r.d(t, {}, {
            a: s
        })
    }),
    gfGb: (function(e, t, r) {
        var n = r("Bbed"),
            a = r("HAEQ");
        let o = (0, n.a)(async () => (await r.e(188900).then(r.bind(r, "IE4w"))).MarkdownWritingBlock, a.a);
        r.d(t, {}, {
            a: o
        })
    }),
    O9ff: (function(e, t, r) {
        var n = r("SZCv"),
            a = r.n(n),
            o = r("BolX"),
            i = r("lN0l"),
            s = r("BJBD"),
            l = r("OWtl");
        let c = (0, o.d)(l.a, (e, t) => {
            let {
                conversationId: r,
                messageId: n,
                instanceId: a,
                refIndex: o
            } = e, {
                get: l
            } = t, c = l(i.b, r);
            return null == c || null == n || null == a ? void 0 : (0, s.a)(c, n, a, o)
        }, {
            isEqual: a()
        });
        r.d(t, {}, {
            a: c
        })
    }),
    HXpT: (function(e, t, r) {
        var n = r("CL6A"),
            a = r("SZCv"),
            o = r.n(a),
            i = r("BolX"),
            s = r("lsky"),
            l = r("rKAs"),
            c = r("AuIy"),
            d = r("wDWo"),
            u = r("h2Mg"),
            p = r("ASxG"),
            h = r("dQRk"),
            g = r("gKmr"),
            f = r("XpUB"),
            w = r("OWtl"),
            m = r("zTAs"),
            b = r("AhlA"),
            y = r("qT2D");
        let v = p.object({
                refIndex: p.number().int().nonnegative(),
                isStreaming: p.boolean(),
                status: p.literal("resolved").optional()
            }),
            k = (0, i.j)(w.a, e => new WeakMap),
            I = (0, i.d)(w.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (!r(b.b) && !r(b.c)) return;
                let a = r(h.M, e);
                return null == a ? void 0 : function(e, t) {
                    let r = new Map,
                        a = new Map;
                    for (let o of (0, c.a)(e))
                        if (null != o.id)
                            for (let [e, i] of
                                function(e, t) {
                                    let r = t.get(e);
                                    if (null != r) return r;
                                    let a = new Map;
                                    if (t.set(e, a), ! function(e) {
                                            let t = (0, c.s)(e.metadata),
                                                r = (0, c.s)(t?.finish_details)?.type;
                                            return "assistant" === e.author.role && (null == e.channel || "final" === e.channel) && (null == e.recipient || "all" === e.recipient) && !(0, c.n)(e) && ("finished_successfully" === e.status || "in_progress" === e.status) && "interrupted" !== r && "content_filter" !== r && t?.is_error !== !0 && t?.error_metadata == null
                                        }(e)) return a;
                                    let o = function(t, r) {
                                            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                                o = arguments.length > 3 ? arguments[3] : void 0,
                                                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "in_progress" === e.status;
                                            if (null != t && "" !== t.trim()) {
                                                if ("" === r.trim() && "in_progress" !== e.status && !n) return void a.delete(t);
                                                a.set(t, {
                                                    kind: "snapshot",
                                                    snapshot: {
                                                        content: r,
                                                        metadata: o,
                                                        isStreaming: i,
                                                        isComplete: !i
                                                    }
                                                })
                                            }
                                        },
                                        i = (0, n.e)((0, d.h)((0, c.e)(e), e.metadata), {
                                            isStreaming: "in_progress" === e.status
                                        });
                                    i.includes(":::writing") && (0, s.h)((0, f.a)(i, void 0), e => {
                                        var t;
                                        "codexDirective" === (t = e).type && "writing" === t.name && "string" == typeof e.attributes.id && o(e.attributes.id, (e.text ?? "").replace(/^\r?\n/, "").replace(/\r?\n$/, ""))
                                    });
                                    let u = (0, l.q)(e.metadata);
                                    for (let {
                                            block: t,
                                            reference: r,
                                            isStreaming: n
                                        }
                                        of E(e, u)) {
                                        let {
                                            content: e,
                                            metadata: a
                                        } = (0, m.a)(t, r, n), i = {
                                            contentReferences: u,
                                            isStreaming: n
                                        };
                                        o(t.id, (0, m.b)(e, i), !1, (0, m.c)(a, i), n)
                                    }
                                    for (let t of Object.values((0, n.f)(e.metadata)))
                                        if (null != t.id && "" !== t.id.trim())
                                            if (null != t.library_file_id) a.set(t.id, {
                                                kind: "promoted"
                                            });
                                            else {
                                                let r = !1 !== t.edited || !0 === t.locallyEdited,
                                                    n = a.get(t.id);
                                                o(t.id, r ? t.content : (0, d.h)(t.content, e.metadata), r, t.metadata, n?.kind === "snapshot" ? n.snapshot.isStreaming : void 0)
                                            } return a
                                }(o, t)) {
                                let t = r.get(e);
                                if (null == t && (t = {
                                        latestMessageId: o.id,
                                        versions: new Map
                                    }, r.set(e, t)), t.latestMessageId = o.id, "promoted" === i.kind) continue;
                                let n = i.snapshot,
                                    s = a.get(e);
                                t.versions.set(o.id, {
                                    ...n,
                                    previousMessageId: s?.messageId,
                                    previousMarkdown: s?.content,
                                    previousMetadata: s?.metadata
                                }), n.isComplete && a.set(e, {
                                    ...n,
                                    messageId: o.id
                                })
                            }
                    return r
                }({
                    mapping: a,
                    current_node: r(h.C, e)
                }, r(k, e))
            }),
            x = (0, i.d)(w.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(I, e.conversationId), a = null == n ? void 0 : function(e, t) {
                    let r = e.get(t.writingBlockId),
                        n = r?.versions.get(t.messageId);
                    if (null != r && null != n) return {
                        previousMetadata: n.previousMetadata,
                        previousMessageId: n.previousMessageId,
                        previousMarkdown: n.previousMarkdown,
                        receivedMarkdown: n.content,
                        latestMessageId: r.latestMessageId,
                        isSuperseded: r.latestMessageId !== t.messageId,
                        isStreaming: n.isStreaming,
                        isComplete: n.isComplete
                    }
                }(n, e);
                if (null == a) return;
                let o = r(y.d, e.conversationId),
                    i = null == a.previousMessageId ? void 0 : o?.completedMessageIndexById.get(a.previousMessageId),
                    s = o?.baselineSizeByMessageId.get(e.messageId);
                return {
                    ...a,
                    hasSessionRevision: null != i && null != s && i < s,
                    isLiveRevision: null != a.previousMessageId && o?.receivedMessageIds.has(e.messageId) === !0 && o.initiallyCompletedMessageIds.has(a.previousMessageId)
                }
            }, {
                isEqual: o()
            }),
            _ = (0, i.d)(w.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(I, e.conversationId)?.get(e.writingBlockId)?.latestMessageId, o = r(h.M, e.conversationId);
                if (null == a || null == o) return;
                let i = !1;
                for (let t of (0, c.a)({
                        mapping: o,
                        current_node: r(h.C, e.conversationId)
                    }).reverse()) {
                    if (i = i || t.id === a, t.id !== e.messageId) continue;
                    if (!i) break;
                    let r = Object.values((0, n.f)(t.metadata)).find(t => t.id === e.writingBlockId);
                    if (r?.library_file_id != null) break;
                    if (null != r || E(t).some(t => {
                            let {
                                block: r
                            } = t;
                            return r.id === e.writingBlockId
                        }) || null != (0, n.d)((0, c.e)(t))[e.writingBlockId]) return a;
                    break
                }
            });

        function E(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, l.q)(e.metadata),
                r = (0, g.a)((0, c.s)(e.metadata)?.model_dil_v2);
            return null == r || null != r.programFailure || r.appData?.__FILTERED_REASON__ === "SIZE_EXCEEDED" ? [] : Object.values(r.clientDefinedWidgets ?? {}).flatMap(e => {
                let t = v.safeParse(e);
                return t.success ? [t.data] : []
            }).flatMap(r => {
                let {
                    refIndex: n,
                    isStreaming: a
                } = r, o = t[n];
                if (o?.type !== "client_defined_widget" || "writing_block" !== o.category) return [];
                let i = u.a.safeParse(o.data);
                if (!i.success || !i.data.id?.trim()) return [];
                let s = "in_progress" === e.status && a;
                return [{
                    block: i.data,
                    reference: o,
                    isStreaming: s
                }]
            })
        }
        r.d(t, {}, {
            a: x,
            b: _
        })
    }),
    AhlA: (function(e, t, r) {
        var n = r("BolX"),
            a = r("OWtl"),
            o = r("OMIV");
        let i = (0, n.u)(a.a, () => void 0),
            s = (0, n.j)(a.a, e => new WeakMap),
            l = (0, n.h)(a.a, e => {
                let {
                    get: t
                } = e;
                return p(t(o.f), t(s, "session"))
            }, e => {
                let {
                    get: t,
                    set: r
                } = e, n = t(o.f);
                if (null == n) return;
                let a = t(s, "session"),
                    i = () => r(p(n, a));
                return n.on("values_updated", i), () => n.off("values_updated", i)
            }),
            c = (0, n.c)(a.a, e => {
                let {
                    get: t
                } = e, r = t(l);
                return r.enrolled ? t(i) === r.identity && r.enabled : r.enabled
            }),
            d = (0, n.c)(a.a, e => {
                let {
                    get: t
                } = e, r = t(l);
                return r.enrolled && t(i) !== r.identity
            }),
            u = (0, n.c)(a.a, e => {
                let {
                    get: t
                } = e;
                return t(l).timeoutMode
            });

        function p(e, t) {
            let r;
            if (null != e) {
                let {
                    user: n
                } = e.getContext(), a = JSON.stringify([n.userID, Object.entries(n.customIDs ?? {}).sort((e, t) => {
                    let [r] = e, [n] = t;
                    return r.localeCompare(n)
                })]), o = t.get(e);
                o?.userKey !== a && (o = {
                    userKey: a,
                    identity: Symbol()
                }, t.set(e, o)), r = o.identity
            }
            let n = e?.getLayer("3737772469", {
                    disableExposureLog: !0
                }),
                a = n?.__evaluation,
                o = a?.allocated_experiment_name === "818755245" && !0 === a.is_user_in_experiment && !1 !== a.is_experiment_active && a.explicit_parameters.includes("assistant_revisions_enabled") && a.explicit_parameters.includes("revision_text_timeout"),
                i = n?.get("revision_text_timeout", "until-first-edit"),
                s = n?.get("assistant_revisions_enabled", !1) ?? !1;
            if (!o && null != e) {
                let t = e.getLayer("3737772469").get("assistant_revisions_enabled", !1),
                    r = e.checkGate("4185326558");
                s = t || r
            }
            return {
                identity: r,
                enrolled: o,
                enabled: s,
                timeoutMode: "5s" === i || "10s" === i || "length-dependent" === i ? i : "until-first-edit"
            }
        }
        r.d(t, {}, {
            a: u,
            b: c,
            c: d,
            d: function(e) {
                let t = e.get(o.f);
                if (null == t) return;
                let r = p(t, e.get(s, "session"));
                r.enrolled && e.get(i) !== r.identity && (t.getLayer("3737772469").get("assistant_revisions_enabled", !1), e.set(i, r.identity))
            }
        })
    }),
    qT2D: (function(e, t, r) {
        var n = r("JjRy"),
            a = r.n(n),
            o = r("BolX"),
            i = r("AuIy"),
            s = r("aFoA"),
            l = r("hx97"),
            c = r("OWtl"),
            d = r("AhlA");
        let u = (0, o.v)(c.a, e => null),
            p = (0, o.d)(c.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(u, r(s.a, e) ?? e)
            });

        function h(e, t, r, n) {
            let a = e.get(s.a, t) ?? t,
                o = e.get(u, a);
            null == o || o.requestId !== r || null == n || o.initialMessageIds.has(n) || o.receivedMessageIds.has(n) || e.set(u, a, {
                ...o,
                receivedMessageIds: new Set([...o.receivedMessageIds, n]),
                baselineSizeByMessageId: new Map([...o.baselineSizeByMessageId, [n, o.completedMessageIndexById.size]])
            })
        }
        r.d(t, {}, {
            a: function(e, t, r, n) {
                let a = e.get(s.a, t) ?? t;
                if (!e.get(d.b) && !e.get(d.c)) return void e.set(u, a, null);
                let o = (0, i.a)(n),
                    l = e.get(u, a),
                    c = new Set(o.flatMap(e => "finished_successfully" === e.status ? e.id ?? [] : [])),
                    p = new Map(l?.completedMessageIndexById);
                for (let e of c) p.has(e) || p.set(e, p.size);
                e.set(u, a, {
                    requestId: r,
                    initialMessageIds: new Set(o.flatMap(e => e.id ?? [])),
                    initiallyCompletedMessageIds: c,
                    receivedMessageIds: new Set,
                    completedMessageIndexById: p,
                    baselineSizeByMessageId: l?.baselineSizeByMessageId ?? new Map
                })
            },
            b: function(e, t, r, n, o) {
                let i = a()(o, l.l);
                if (o[i]?.id === n)
                    for (let n of o.slice(i + 1)) "finished_successfully" === n.status && h(e, t, r, n.id)
            },
            c: h,
            d: p
        })
    }),
    YrRS: (function(e, t, r) {
        var n = r("Kh9O"),
            a = r("A5cT"),
            o = r("BolX"),
            i = r("Ow2S"),
            s = r("YYmx"),
            l = r("jEN2"),
            c = r("OWtl"),
            d = r("AhlA");
        let u = (0, o.j)(c.a, (e, t) => {
            let r, {
                    signal: n,
                    scope: a
                } = t,
                o = n(null),
                s = null,
                l = t => {
                    let n = a.get(o);
                    if (null != t && n !== t) return;
                    let l = s?.onCleared;
                    s = null, r?.(), r = void 0, o.set(null), null != n && a.set(i.x, e, e => e.filter(e => {
                        let {
                            id: t
                        } = e;
                        return t !== n.attachmentId
                    })), l?.()
                },
                c = function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a;
                    return t.get(o) === e && s?.isCurrent(t) === !0
                };
            return {
                target$: o,
                clear: l,
                isCurrent: c,
                set(e, t) {
                    l(), s = t, o.set(e)
                },
                setCleanup(e, t) {
                    a.get(o) === e ? r = t : t()
                },
                async prepare(e) {
                    if (a.get(o) !== e) return "cancelled";
                    if (!c(e) || "" === e.writingBlockId.trim() || !Number.isSafeInteger(e.selectionStart) || !Number.isSafeInteger(e.selectionEnd) || e.selectionStart < 0 || e.selectionEnd <= e.selectionStart || e.selectionEnd > e.fullMarkdown.length || e.fullMarkdown.slice(e.selectionStart, e.selectionEnd) !== e.selectedText) return "changed";
                    try {
                        let t = await s?.prepareSubmission();
                        if (a.get(o) !== e) return "cancelled";
                        return t && c(e) ? "ready" : "changed"
                    } catch {
                        return a.get(o) !== e ? "cancelled" : "changed"
                    }
                }
            }
        });
        r.d(t, {}, {
            a: u,
            b: function(e) {
                return [`The user's instruction is referring to the following selected text from writing block with ID [${e.writingBlockId}]. Apply the user's edit to the selection, and include the complete revised draft in your response.`, e.selectedText.split("\n").map(e => `> ${e}`).join("\n")].join("\n\n")
            },
            c: function(e, t) {
                let r, o, c, {
                    conversationId: p,
                    messageId: h,
                    writingBlockId: g,
                    editorView: f,
                    prepareSubmission: w,
                    isCurrent: m,
                    onCleared: b
                } = t;
                if (!e.get(d.b) || !m(e) || f.isDestroyed || f.state.selection.empty) return;
                let y = (0, n.a)(),
                    {
                        doc: v,
                        selection: k
                    } = f.state,
                    I = v.textBetween(k.from, k.to, "\n", "\n"),
                    x = I.endsWith("\n") ? k.to - 1 : k.to;
                try {
                    r = y.serialize(v), o = k.from <= 0 ? 0 : (0, a.c)(v, y, "⟦SELECTEDRANGESTART⟧", k.from, 1), c = x >= v.content.size ? r.length : (0, a.c)(v, y, "⟦SELECTEDRANGEEND⟧", x, -1)
                } catch {
                    return
                }
                if (o >= c) return;
                let _ = {
                        attachmentId: crypto.randomUUID(),
                        messageId: h,
                        writingBlockId: g,
                        fullMarkdown: r,
                        selectedText: r.slice(o, c),
                        label: I || r.slice(o, c),
                        selectionStart: o,
                        selectionEnd: c
                    },
                    E = e.get(u, p);
                return (0, s.b)(e, p), E.set(_, {
                    isCurrent: e => e.get(d.b) && m(e) && !f.isDestroyed && y.serialize(f.state.doc) === r,
                    prepareSubmission: () => w(r),
                    onCleared: b
                }), e.set(i.x, p, [{
                    id: _.attachmentId,
                    text: _.label
                }]), E.setCleanup(_, e.watch(e => {
                    e.get(d.b) && null == e.get(s.a, p) && e.get(i.x, p).some(e => {
                        let {
                            id: t
                        } = e;
                        return t === _.attachmentId
                    }) || E.clear(_)
                })), (0, l.f)(), () => E.clear(_)
            }
        })
    }),
    vQRL: (function(e, t, r) {
        var n = r("ASxG");
        let a = "writing-style-footer-checkout",
            o = "oai/apps/contextualUpsellId",
            i = n.object({
                id: n.string(),
                userId: n.string(),
                accountId: n.string(),
                threadId: n.string(),
                messageId: n.string(),
                createdAt: n.number(),
                originKey: n.string(),
                stage: n.enum(["opening", "pricing", "checkout", "success", "returning"]),
                context: n.string().nullable()
            });

        function s(e) {
            let t;
            return c()?.stage === "returning" && null != (t = c()) && ["userId", "accountId", "threadId", "messageId"].every(r => void 0 === e[r] || t[r] === e[r])
        }

        function l(e) {
            try {
                let t = c();
                if (null == e || t?.id !== e) return;
                sessionStorage.removeItem(a), p(t.context)
            } catch {}
        }

        function c() {
            try {
                let e = i.safeParse(JSON.parse(sessionStorage.getItem(a) ?? "null")),
                    t = e.success ? Date.now() - e.data.createdAt : 0 / 0;
                return e.success && t >= 0 && t < 18e5 ? e.data : null
            } catch {
                return null
            }
        }
        let d = n.object({
            source: n.string().optional(),
            checkoutReturnLocation: n.object({
                pathname: n.string(),
                hash: n.string(),
                state: n.object({
                    source: n.string().optional()
                }).nullable().optional()
            }).optional(),
            checkoutRequest: n.object({
                plan_name: n.string().optional()
            }).optional()
        }).nullable();

        function u(e) {
            try {
                return null != e && localStorage.getItem(o) === e
            } catch {
                return !1
            }
        }

        function p(e) {
            if (u(e)) try {
                localStorage.removeItem(o)
            } catch {}
        }

        function h(e) {
            try {
                return sessionStorage.setItem(a, JSON.stringify(e)), !0
            } catch {
                return !1
            }
        }
        r.d(t, {}, {
            a: function(e, t, r) {
                l(c()?.id ?? null);
                try {
                    let n = localStorage.getItem(o);
                    r({
                        upsellContextId: "work",
                        sourceThreadId: e.threadId
                    });
                    let a = localStorage.getItem(o);
                    if (null == a || a === n) return null;
                    let i = {
                        ...e,
                        id: crypto.randomUUID(),
                        createdAt: Date.now(),
                        originKey: t.key,
                        stage: "opening",
                        context: a
                    };
                    if (h(i)) return i.id;
                    return p(a), null
                } catch {
                    return null
                }
            },
            b: function(e) {
                return !!s(e) && (l(c()?.id ?? null), null == c())
            },
            c: l,
            d: s,
            e: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = c();
                if (null == r) return;
                let n = `/c/${encodeURIComponent(r.threadId)}`,
                    a = d.safeParse(e.state),
                    o = e.pathname === n && "#pricing" === e.hash && a.success && a.data?.source === "writing_style_footer",
                    i = a.success ? a.data?.checkoutReturnLocation : null,
                    s = i?.pathname === n && "#pricing" === i.hash && i.state?.source === "writing_style_footer",
                    p = new URLSearchParams(e.search),
                    g = /^\/checkout\/openai_(llc|ie)\/(cs_|oaics_)[A-Za-z0-9_]+$/.test(e.pathname),
                    f = r.stage;
                if (e.pathname === n && "" === e.hash && "true" === p.get("refresh_account") && ("success" === f || "returning" === f)) f = "returning";
                else if ("/payments/success" === e.pathname && "plus" === p.get("plan_type") && ["pricing", "checkout", "success"].includes(f)) f = "success";
                else if (g && (s && a.success && a.data?.checkoutRequest?.plan_name === "chatgptplusplan" || "checkout" === f && u(r.context))) f = "checkout";
                else if ("/checkout/verify" === e.pathname && "checkout" === f && null != p.get("stripe_session_id") && u(r.context)) f = "checkout";
                else if (!t && "/purchase/plus" === e.pathname && s && ["pricing", "checkout"].includes(f)) f = "checkout";
                else if (o && ("pricing" === f || "checkout" === f || !t && "opening" === f)) f = "pricing";
                else if (!t && "opening" === f && e.key === r.originKey && e.pathname === n && "" === e.hash) return;
                else return void l(r.id);
                f !== r.stage && h({
                    ...r,
                    stage: f
                })
            }
        })
    })
};