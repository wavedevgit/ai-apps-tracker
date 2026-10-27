export const __rspack_esm_id = 807489;
export const __rspack_esm_ids = [807489];
export const __webpack_modules__ = {
    rfDj: (function(e, t, r) {
        function s(e, t) {
            return {
                register(t) {
                    let r = e.registerBroadcastHandler("thread-stream-following-changed", e => {
                            let {
                                params: r,
                                sourceClientId: s
                            } = e;
                            return t.onFollowingChanged(r.conversationId, r.hostId, s, r.following)
                        }),
                        s = e.registerBroadcastHandler("thread-stream-following-status-requested", e => {
                            let {
                                params: r,
                                sourceClientId: s
                            } = e;
                            return t.onFollowingStatusRequested(r.conversationId, r.hostId, s)
                        }),
                        a = e.registerBroadcastHandler("thread-stream-state-changed", e => {
                            let {
                                params: r,
                                sourceClientId: s
                            } = e;
                            return t.onStreamStateChanged(r.conversationId, r.hostId, r.change, s)
                        }),
                        n = e.registerBroadcastHandler("client-status-changed", e => {
                            let {
                                params: r
                            } = e;
                            return t.onClientStatusChanged(r)
                        }),
                        i = e.registerBroadcastHandler("ipc-connection-reset", () => t.onConnectionReset());
                    return () => {
                        r(), s(), a(), n(), i()
                    }
                },
                requestFollowingStatus: (t, r) => e.threadStreamFollowingStatusRequested?.({
                    conversationId: t,
                    hostId: r
                }),
                sendPatches: (t, r, s, a, n, i, l) => e.threadStreamStateChanged?.({
                    conversationId: t,
                    hostId: r,
                    targetClientIds: s,
                    change: {
                        type: "patches",
                        baseRevision: a,
                        revision: n,
                        patches: i,
                        acceptedTextChanges: l
                    }
                }),
                sendSnapshot: (r, s, a, n, i) => e.threadStreamStateChanged?.({
                    conversationId: r,
                    hostId: s,
                    targetClientIds: a,
                    change: {
                        type: "snapshot",
                        revision: n,
                        conversationState: t(i)
                    }
                }),
                sendFollowingChanged: (t, r, s, a) => e.threadStreamFollowingChanged?.({
                    conversationId: t,
                    hostId: r,
                    following: s,
                    targetClientIds: a
                }),
                setThreadOwnership: (t, r, s) => e.setThreadOwnership?.({
                    hostId: r,
                    conversationId: t,
                    ownsThread: s
                })
            }
        }
        r.d(t, {
            a: () => s
        })
    }),
    csjW: (function(e, t, r) {
        var s = r("iwl5"),
            a = r("Ehlj"),
            n = r("L26l"),
            i = r("OGL3"),
            l = r("aNWx"),
            o = r("Xuve"),
            u = r("n2eO"),
            d = r("JGl5"),
            h = r("AHD4"),
            c = r("yGqb"),
            p = r("pKpp"),
            m = r("D2T0"),
            f = r("k4uA"),
            g = r("UOvO"),
            b = r("YZPM"),
            y = r("CljL"),
            w = r("IhEn"),
            v = r("tkgr"),
            _ = r("GQGg"),
            S = r("MCYz"),
            T = r("d1Gb"),
            k = r("VPIc"),
            x = r("DvOz"),
            E = r("Ecql"),
            I = r("RP0y"),
            P = r("OP23"),
            M = r("PFi3"),
            j = r("N2rm"),
            C = r("S8um");
        r("pvRJ"), r("kTK0");
        var A = r("ScoF"),
            R = r("Y3sT"),
            U = r("prLN"),
            O = r("ugrQ");
        let F = new Set([g.b.name, M.b, M.d, u.b, S.b, u.d, p.b, u.f, O.a.name, P.a.name, b.a.name, b.c.name, ...U.c, s.b, C.c, C.d, C.f, l.b, y.b]);

        function N(e) {
            let {
                desktop: t,
                localDesktopHost: r,
                pluginManagementDynamicTools: N,
                appServerVersion: B,
                managedWorktreesAvailable: q = !1,
                cloudWorktreesEnabled: D = !1,
                latexAvailable: L = !1,
                availableHandoffHosts: W,
                appshotsAvailable: H = !1,
                appshotsEnabled: Q = !1,
                authMethod: V,
                agentUsageResetEnabled: G = !1,
                crossHostHandoffEnabled: $ = !1,
                cloudEnvironmentsEnabled: J = !1,
                existingThreadVoiceEnabled: z = !1,
                voiceCallEndEnabled: K = !1,
                voiceCallTransferEnabled: Y = !1,
                enabledReasoningEfforts: Z,
                featureOverrides: X,
                hasConfiguredModelCatalog: ee = !1,
                confettiAvailable: et = !1,
                hostedAutomationsEnabled: er = !1,
                hostId: es,
                requestedHistoryMode: ea,
                includeUltraReasoningEffort: en,
                isAuthLoading: ei,
                isTabAvailable: el,
                isCustomModelProvider: eo = !1,
                workspaceDependenciesEnabled: eu = !1,
                models: ed,
                modelAvailabilityConfig: eh,
                pagesEnabled: ec = !1,
                runningSummaryEnabled: ep = !1,
                screenAnnotationsAllowed: em = !1,
                screenSizeForAnnotations: ef = null,
                platform: eg,
                projectToolsEnabled: eb = !1,
                pullRequestAssociationEnabled: ey = !1,
                pullRequestCheckDiagnosticsEnabled: ew = !1,
                sidebarCustomSectionsEnabled: ev = !1,
                navigateToCodexPageEnabled: e_ = !0,
                mode: eS = "default",
                threadStartKind: eT = "default",
                threadSharingEnabled: ek = !1
            } = e, ex = "all" === eT, eE = X?.[d.b] === !0, eI = X?.[C.b] === !0, eP = t && ex || et, eM = (0, k.a)({
                authMethod: V,
                hasConfiguredModelCatalog: ee,
                enabledReasoningEfforts: Z,
                includeUltraReasoningEffort: en,
                isAuthLoading: ei,
                isCustomModelProvider: eo,
                models: ed,
                modelAvailabilityConfig: eh
            }), ej = t && ey, eC = q && ((0, j.j)(es) ? D : (0, a.a)(B, "threadAttachments")), eA = [...eC && t && (ex || "default" === eS && "default" === eT) ? [...(0, j.j)(es) ? [{
                ...c.c,
                description: "Create a protected checkout at a Git ref already present on this chat’s remote executor. Use list_artifacts to find an existing checkout first. A pending result must be polled. If attachment or cwd confirmation fails, retry attach_worktree with the returned path. Use the returned workspace explicitly in this turn. Recovery requires the same executor and its stored files to remain available."
            }, {
                ...c.b,
                description: "Recover this chat’s protected checkout on its remote executor using the path returned by create_worktree. Retries verify Git before attaching and updating the chat’s working directory. Use the returned workspace explicitly in this turn."
            }] : [c.c, c.b, c.a, c.e], c.d] : [], ...ep ? [g.b] : [], ...t && r && (ex || ew && "default" === eS && "default" === eT) ? [f.a] : [], ...ej ? [u.a, u.e] : [], ...ej || eC ? [u.c] : [], ...t && r && !er && 1 ? [(0, i.c)()] : [], ..."environment_setup" === eT || ex ? [M.c, M.a] : [], ...t ? [(0, s.d)(el)] : [], ...t && L ? [m.a] : [], ...t && r && L ? [m.c] : [], ...eP ? [h.a] : [], ...t && r && e_ ? [s.a] : [], ...t && eb ? [p.a, S.a] : [], O.a, ...t && r ? [o.a] : [], ...t && !ei && "chatgpt" === V ? [E.a, ...ex || G ? [I.a] : []] : [], ...t && r && ec ? [R.a, A.a, A.c] : [], ...ek ? [x.a] : [], ...r && (eu || t && ex) ? [P.a] : [], ...ex || "realtime_voice" === eT || z && "default" === eT ? (0, U.h)({
                desktop: t,
                enabled: ex || X?.[U.d] === !0,
                appshotsAvailable: ex && "macOS" === eg || H,
                appshotsEnabled: ex || Q,
                endRealtimeVoiceCallEnabled: ex || K,
                transferVoiceCallEnabled: ex || Y,
                platform: eg
            }) : [], ...t ? (0, T.a)(t, {
                availableHandoffHosts: W,
                availableModels: eM,
                crossHostHandoffEnabled: $,
                cloudEnvironmentsEnabled: J,
                sidebarCustomSectionsEnabled: ev,
                forkThreadEnabled: ("paginated" !== ea || (0, n.d)(B)) && "durable" !== eS && "aeon" !== eT
            }) : [], ...t ? [w.a] : [], ...t && r ? [v.b] : [], ...t && ev ? (0, _.q)() : [], ...r && eE ? [b.a, ...ex || "default" === eS && "default" === eT ? [b.c] : []] : [], ..."conversational_onboarding" === eT || ex ? [l.a] : [], ...t && r && ("sidebar_onboarding_checklist" === eT || ex) ? [y.a] : [], ...ex || eI && "conversational_onboarding" !== eT && "environment_setup" !== eT ? [...C.a, C.e] : []];
            return (0, d.c)({
                tools: eA,
                eagerToolNames: F,
                deferredToolNames: z ? U.c : [],
                supportsDynamicToolNamespaces: !0,
                additionalNamespaces: N
            })
        }
        r.d(t, {
            a: () => N
        })
    }),
    ugrQ: (function(e, t, r) {
        var s = r("ASxG");
        let a = "read_thread_terminal",
            n = s.strictObject({});
        async function i(e, t, r) {
            if (!n.safeParse(e).success) return l(`${a} takes no arguments.`);
            try {
                let e = await t();
                if (null == e) return l("No app terminal session is attached to this thread yet.");
                let r = ["App terminal snapshot for this thread:", `cwd: ${e.cwd}`, `shell: ${e.shell}`, e.truncated ? "note: output is truncated to the latest terminal buffer kept by the app." : null, "```text", e.buffer.length > 0 ? e.buffer : "[terminal has no output yet]", "```"].filter(e => null != e);
                return {
                    contentItems: [{
                        type: "inputText",
                        text: r.join("\n")
                    }],
                    success: !0
                }
            } catch (e) {
                return r.error("Failed to resolve thread terminal snapshot", {
                    safe: {
                        tool: a
                    },
                    sensitive: {
                        error: e
                    }
                }), l("Failed to read the app terminal for this thread.")
            }
        }

        function l(e) {
            return {
                contentItems: [{
                    type: "inputText",
                    text: e
                }],
                success: !1
            }
        }
        r.d(t, {
            c: () => i
        }, {
            a: {
                name: a,
                description: "Read the current app terminal output for this desktop thread. Use it when you need shell output or the current prompt before deciding the next step. This tool takes no arguments.",
                inputSchema: {
                    type: "object",
                    properties: {},
                    additionalProperties: !1
                }
            },
            b: a
        })
    }),
    YhWa: (function(e, t, r) {
        var s = r("CpsU"),
            a = r.n(s),
            n = r("XnTj");
        async function i(e) {
            let {
                forceRefetch: t,
                sendRequest: r,
                shouldUseNewAppLifecycle: s,
                runLegacyRead: i
            } = e, l = async (e, s) => {
                let a = await r("app/list", {
                    cursor: e,
                    limit: 1e3,
                    forceRefetch: t
                }, {
                    trace: s
                });
                return null == a.nextCursor ? a.data : [...a.data, ...await l(a.nextCursor, s)]
            }, o = () => i(e => l(null, e)), u = async () => {
                try {
                    return await o()
                } catch {
                    return o()
                }
            };
            if (!s) return u();
            try {
                let e = (await r("app/installed", t ? {
                    forceRefresh: !0
                } : {})).apps;
                if (0 === e.length) return [];
                let s = await Promise.all(a()(e.map(e => e.id), 100).map(e => r("app/read", {
                        appIds: e
                    }))),
                    n = new Map(s.flatMap(e => e.apps).map(e => [e.id, e]));
                return e.map(e => {
                    let t = n.get(e.id);
                    return {
                        appMetadata: null,
                        branding: null,
                        description: t?.description ?? null,
                        distributionChannel: t?.distributionChannel ?? null,
                        iconAssets: null,
                        iconDarkAssets: null,
                        id: e.id,
                        installUrl: t?.installUrl ?? null,
                        isAccessible: e.callable,
                        isEnabled: e.enabled,
                        labels: null,
                        logoUrl: t?.iconUrl ?? t?.iconUrlDark ?? null,
                        logoUrlDark: t?.iconUrlDark ?? t?.iconUrl ?? null,
                        name: t?.name ?? e.runtimeName ?? e.id,
                        pluginDisplayNames: t?.pluginDisplayNames ?? []
                    }
                })
            } catch (e) {
                if (!(0, n.g)(e, "app/installed") && !(0, n.g)(e, "app/read")) throw e;
                return u()
            }
        }
        r.d(t, {
            a: () => i
        })
    }),
    yN4G: (function(e, t, r) {
        let s;
        var a = r("eB3o"),
            n = r("SRbQ"),
            i = r("Fkn8"),
            l = r("OIuf");
        class o extends i.c {
            revision = 0;
            comments = new Map;
            listeners = new Map;
            edit(e, t) {
                let r = (0, l.a)(this.comments.get(e) ?? [], t);
                0 === r.length ? this.comments.delete(e) : this.comments.set(e, r);
                let s = {
                    comments: r,
                    revision: ++this.revision,
                    editId: t.id
                };
                for (let t of this.listeners.get(e) ?? []) {
                    let e = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        (0, n.a)(e, t(s), !1)
                    } catch (t) {
                        e.error = t, e.hasError = !0
                    } finally {
                        (0, n.e)(e)
                    }
                }
                return s
            }
            transfer(e, t) {
                let r = this.comments.get(e);
                return e === t || null == r ? [] : [{
                    conversationId: t,
                    snapshot: this.edit(t, {
                        id: crypto.randomUUID(),
                        removed: this.comments.get(t) ?? [],
                        added: r.map((e, t) => ({
                            comment: e,
                            index: t
                        }))
                    })
                }, {
                    conversationId: e,
                    snapshot: this.edit(e, {
                        id: crypto.randomUUID(),
                        removed: r,
                        added: []
                    })
                }]
            }
            removeReviewThread(e, t) {
                let r = [];
                for (let [s, a] of this.comments) {
                    let n = a.filter(r => r.reviewThreadId === e && (null == t || r.localPullRequestReviewKey === t));
                    n.length > 0 && r.push({
                        conversationId: s,
                        snapshot: this.edit(s, {
                            id: crypto.randomUUID(),
                            removed: n,
                            added: []
                        })
                    })
                }
                return r
            }
            subscribe(e, t) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = t.dup(),
                        a = this.listeners.get(e);
                    null == a && (a = new Set, this.listeners.set(e, a)), a.add(s);
                    let i = new u(() => {
                        let t = this.listeners.get(e);
                        t?.delete(s) && (s[Symbol.dispose](), 0 === t.size && this.listeners.delete(e))
                    });
                    return s.onRpcBroken(() => i.unsubscribe()), (0, n.a)(r, s({
                        comments: this.comments.get(e) ?? [],
                        revision: this.revision,
                        editId: null
                    }), !1), i
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, n.e)(r)
                }
            }
            dispose = () => {
                for (let e of this.listeners.values())
                    for (let t of e) t[Symbol.dispose]();
                this.listeners.clear(), this.comments.clear()
            }
        }
        s = (0, a._)(Symbol.dispose);
        class u extends i.c {
            cleanup;
            constructor(e) {
                super(), this.cleanup = e
            }
            unsubscribe() {
                let e = this.cleanup;
                this.cleanup = null, e?.()
            } [s]() {
                this.unsubscribe()
            }
        }
        r.d(t, {
            a: () => o
        })
    }),
    oeVU: (function(e, t, r) {
        let s;
        var a = r("eB3o"),
            n = r("SRbQ"),
            i = r("Fkn8");
        class l extends i.c {
            pending;
            nextId = 0;
            listeners = new Set;
            publish(e) {
                this.pending = {
                    id: ++this.nextId,
                    prefill: e
                }, this.notify()
            }
            acknowledge(e) {
                this.pending?.id === e && (this.pending = void 0, this.notify())
            }
            subscribe(e) {
                let t = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let r = e.dup();
                    this.listeners.add(r);
                    let s = new o(() => {
                        this.listeners.delete(r) && r[Symbol.dispose]()
                    });
                    return r.onRpcBroken(() => s.unsubscribe()), (0, n.a)(t, r(this.pending), !1), s
                } catch (e) {
                    t.error = e, t.hasError = !0
                } finally {
                    (0, n.e)(t)
                }
            }
            takeChatPrefill = () => {
                let e = this.pending;
                if (e?.prefill.chatGptSystemHints != null) return this.acknowledge(e.id), e.prefill
            };
            dispose = () => {
                for (let e of this.listeners) e[Symbol.dispose]();
                this.listeners.clear(), this.pending = void 0
            };
            notify() {
                for (let e of this.listeners) {
                    let t = {
                        stack: [],
                        error: void 0,
                        hasError: !1
                    };
                    try {
                        (0, n.a)(t, e(this.pending), !1)
                    } catch (e) {
                        t.error = e, t.hasError = !0
                    } finally {
                        (0, n.e)(t)
                    }
                }
            }
        }
        s = (0, a._)(Symbol.dispose);
        class o extends i.c {
            cleanup;
            constructor(e) {
                super(), this.cleanup = e
            }
            unsubscribe() {
                let e = this.cleanup;
                this.cleanup = null, e?.()
            } [s]() {
                this.unsubscribe()
            }
        }
        r.d(t, {
            a: () => l
        })
    }),
    so1V: (function(e, t, r) {
        r.d(t, {
            a: () => a
        });
        let s = (0, r("qmvH").c)("ephemeral-generation");

        function a(e) {
            let {
                feature: t,
                firstTokenUsage: r,
                model: a,
                reasoningEffort: n,
                serviceTier: i,
                status: l,
                tokenUsage: o
            } = e;
            if (null == o) return;
            let u = e => o.total[e] - (null == r ? 0 : r.total[e] - r.last[e]),
                d = {
                    feature: t,
                    model: a,
                    reasoningEffort: n,
                    serviceTier: i,
                    status: l,
                    inputTokens: u("inputTokens"),
                    cachedInputTokens: u("cachedInputTokens"),
                    outputTokens: u("outputTokens"),
                    reasoningOutputTokens: u("reasoningOutputTokens"),
                    totalTokens: u("totalTokens")
                };
            s().info("ephemeral_generation_token_usage", {
                safe: {
                    event: "ephemeral_generation_token_usage",
                    ...d
                }
            })
        }
    }),
    mYel: (function(e, t, r) {
        var s = r("Fkn8");
        class a extends s.c {
            defaultHost;
            constructor(e) {
                super(), this.defaultHost = e
            }
            async getDefaultHost() {
                return this.defaultHost
            }
        }
        r.d(t, {
            a: () => a
        })
    }),
    Hywh: (function(e, t, r) {
        var s = r("SZCv"),
            a = r.n(s),
            n = r("M7HN");
        async function i(e, t, r) {
            let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new AbortController().signal;
            if (s.throwIfAborted(), null == e.listModels || null == e.getUserSavedConfiguration) return t;
            let i = [],
                l = null;
            try {
                let [o, u] = await (0, n.gf)(Promise.all([e.getUserSavedConfiguration(), e.getUserSavedConfiguration(r ?? void 0)]), s);
                if ((o.model_provider ?? "openai") !== (u.model_provider ?? "openai") || !a()(o.model_providers, u.model_providers)) return t;
                do {
                    let t = await (0, n.gf)(e.listModels({
                        cursor: l,
                        includeHidden: !0
                    }), s);
                    i.push(...t.data), l = t.nextCursor
                } while (null != l)
            } catch {
                return s.throwIfAborted(), t
            }
            if (i.some(e => e.model === t)) return t;
            let o = i.filter(e => !e.hidden && null === e.modelSpecialty && e.supportedReasoningEfforts.some(e => {
                let {
                    reasoningEffort: t
                } = e;
                return "low" === t
            }));
            return (o.find(e => e.isDefault) ?? o[0])?.model ?? t
        }
        r.d(t, {
            a: () => i
        })
    }),
    OVto: (function(e, t, r) {
        var s = r("Fkn8"),
            a = r("M7HN"),
            n = r("ASxG");
        let i = n.discriminatedUnion("type", [n.object({
                type: n.literal("local"),
                projectId: n.string().transform(a._e)
            }), n.object({
                type: n.literal("remote"),
                projectId: n.string().transform(a._e)
            })]),
            l = n.array(n.object({
                id: n.string(),
                hostId: n.string(),
                remotePath: n.string(),
                label: n.string()
            }));
        class o extends s.c {
            readValue;
            constructor(e) {
                super(), this.readValue = e
            }
            async readLocalProjects() {
                let e = await this.readValue(a.ec.LOCAL_PROJECTS);
                return null == e ? void 0 : (0, a.cj)(e)
            }
            async readRemoteProjects() {
                let e = await this.readValue(a.ec.REMOTE_PROJECTS);
                return null == e ? void 0 : l.safeParse(e).data
            }
            async readSelection() {
                let e = await this.readValue(a.ec.SELECTED_PROJECT);
                return null == e ? e : i.safeParse(e).data
            }
        }
        r.d(t, {
            a: () => o
        })
    }),
    qwFi: (function(e, t, r) {
        var s = r("Fkn8"),
            a = r("M7HN"),
            n = r("ASxG");
        let i = n.array(n.string());
        class l extends s.c {
            readValue;
            writePinnedProjects;
            constructor(e, t) {
                super(), this.readValue = e, this.writePinnedProjects = t
            }
            async readAppearances() {
                let e = await this.readValue(a.ec.PROJECT_APPEARANCES);
                return null == e ? void 0 : (0, a.jj)(e)
            }
            async readOrder() {
                let e = await this.readValue(a.ec.PROJECT_ORDER);
                return i.safeParse(e).data
            }
            async readPinnedProjects() {
                let e = await this.readValue(a.ec.PINNED_PROJECT_IDS);
                return i.safeParse(e).data
            }
            async setPinnedProjects(e) {
                await this.writePinnedProjects(i.optional().parse(e))
            }
        }
        r.d(t, {
            a: () => l
        })
    }),
    o7JU: (function(e, t, r) {
        let s;
        var a = r("eB3o"),
            n = r("Fkn8");
        class i extends n.c {
            handlers;
            constructor(e) {
                super(), this.handlers = e
            }
            readWorkspaceRoot() {
                return this.handlers.readWorkspaceRoot()
            }
            createPaths(e) {
                return new l(t => this.handlers.createPaths(e, t))
            }
        }
        s = (0, a._)(Symbol.dispose);
        class l extends n.c {
            controller = new AbortController;
            result;
            settled = !1;
            constructor(e) {
                super(), this.result = e(this.controller.signal).finally(() => {
                    this.settled = !0
                }), this.result.catch(() => {})
            }
            wait() {
                return this.result
            } [s]() {
                this.settled || this.controller.abort()
            }
        }
        r.d(t, {
            a: () => i
        })
    }),
    bK1h: (function(e, t, r) {
        class s {
            now;
            startingTurns = new Set;
            activeLocks;
            sentMessages;
            constructor(e = Date.now, t) {
                this.now = e, this.activeLocks = new Map(t?.activeLocks), this.sentMessages = new Map(t?.sentMessages)
            }
            exportState() {
                let e = this.now();
                for (let [t, r] of this.activeLocks) r.expiresAtMs <= e && this.activeLocks.delete(t);
                return this.deleteExpiredSentMessages(e), {
                    activeLocks: Array.from(this.activeLocks),
                    sentMessages: Array.from(this.sentMessages)
                }
            }
            tryAcquireStartTurn(e) {
                return !this.startingTurns.has(e) && (this.startingTurns.add(e), !0)
            }
            releaseStartTurn(e) {
                this.startingTurns.delete(e)
            }
            tryAcquire(e) {
                let {
                    conversationId: t,
                    messageId: r,
                    lockId: s
                } = e, a = this.now();
                if (this.deleteExpiredSentMessages(a), this.sentMessages.has(this.getSentMessageKey(t, r))) return !1;
                let n = this.activeLocks.get(t);
                return (null == n || !(n.expiresAtMs > a)) && (this.activeLocks.set(t, {
                    lockId: s,
                    expiresAtMs: a + 12e4
                }), !0)
            }
            release(e) {
                let {
                    conversationId: t,
                    messageId: r,
                    lockId: s,
                    sent: a
                } = e, n = this.activeLocks.get(t);
                n?.lockId === s && this.activeLocks.delete(t), a && this.sentMessages.set(this.getSentMessageKey(t, r), this.now() + 6e5)
            }
            getSentMessageKey(e, t) {
                return `${e}
${t}`
            }
            deleteExpiredSentMessages(e) {
                for (let [t, r] of this.sentMessages) r <= e && this.sentMessages.delete(t)
            }
        }
        r.d(t, {
            a: () => s
        })
    }),
    gRA5: (function(e, t, r) {
        let s;
        var a = r("eB3o"),
            n = r("SRbQ"),
            i = r("Fkn8"),
            l = r("SZCv"),
            o = r.n(l);
        class u extends i.c {
            snapshot;
            listeners = new Set;
            nativeListeners = new Set;
            constructor(e) {
                super(), this.snapshot = e
            }
            read = () => this.snapshot;
            update = e => {
                let t = {
                    ...this.snapshot,
                    ...e
                };
                if (!o()(this.snapshot, t)) {
                    for (let e of (this.snapshot = t, this.nativeListeners)) e();
                    for (let e of this.listeners) {
                        let r = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            (0, n.a)(r, e(t), !1)
                        } catch (e) {
                            r.error = e, r.hasError = !0
                        } finally {
                            (0, n.e)(r)
                        }
                    }
                }
            };
            onDidChange = e => (this.nativeListeners.add(e), () => {
                this.nativeListeners.delete(e)
            });
            async subscribe(e) {
                let t = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let r = e.dup();
                    this.listeners.add(r);
                    let s = new d(() => {
                        this.listeners.delete(r) && r[Symbol.dispose]()
                    });
                    return r.onRpcBroken(() => s.unsubscribe()), (0, n.a)(t, r(this.snapshot), !1), s
                } catch (e) {
                    t.error = e, t.hasError = !0
                } finally {
                    (0, n.e)(t)
                }
            }
            dispose = () => {
                for (let e of this.listeners) e[Symbol.dispose]();
                this.listeners.clear(), this.nativeListeners.clear()
            }
        }
        s = (0, a._)(Symbol.dispose);
        class d extends i.c {
            cleanup;
            constructor(e) {
                super(), this.cleanup = e
            }
            unsubscribe() {
                let e = this.cleanup;
                this.cleanup = null, e?.()
            } [s]() {
                this.unsubscribe()
            }
        }
        r.d(t, {
            a: () => u
        })
    }),
    RDVG: (function(e, t, r) {
        let s = new Map;
        async function a(e, t) {
            let {
                configPath: r,
                expectedRevision: a,
                raw: n
            } = t, i = `${e.id}:${r}`, l = (s.get(i) ?? Promise.resolve()).then(async () => {
                let t = await e.platformPath();
                await e.createDirectory(t.dirname(r), {
                    recursive: !0
                });
                let s = null;
                try {
                    s = await new Response(await e.readFile(r)).text()
                } catch (e) {
                    if (!("object" == typeof e && null != e && "code" in e && "ENOENT" === e.code || e instanceof Error && /ENOENT|no such file|does not exist/i.test(e.message))) throw e
                }
                if (null != s) {
                    if (s === n) return {
                        type: "success"
                    };
                    if (null == a) return {
                        type: "conflict"
                    };
                    let e = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
                    if (`sha256:${Array.from(new Uint8Array(e),e=>e.toString(16).padStart(2,"0")).join("")}` !== a) return {
                        type: "conflict"
                    }
                } else if (null != a) return {
                    type: "conflict"
                };
                return await e.writeFile(r, n), {
                    type: "success"
                }
            }), o = l.then(() => void 0, () => void 0);
            s.set(i, o);
            try {
                return await l
            } finally {
                s.get(i) === o && s.delete(i)
            }
        }
        r.d(t, {
            a: () => a
        })
    }),
    CpyR: (function(e, t, r) {
        let s;
        var a = r("eB3o"),
            n = r("SRbQ"),
            i = r("Fkn8"),
            l = r("uOFa");
        class o extends i.c {
            comments = new Map;
            listeners = new Map;
            append(e, t) {
                let r = this.comments.get(e) ?? [],
                    s = new Set(r.map(l.a)),
                    a = [...r];
                for (let e of t) {
                    let t = (0, l.a)(e);
                    s.has(t) || (s.add(t), a.push(e))
                }
                if (a.length !== r.length)
                    for (let t of (this.comments.set(e, a), this.listeners.get(e) ?? [])) {
                        let e = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            (0, n.a)(e, t(a), !1)
                        } catch (t) {
                            e.error = t, e.hasError = !0
                        } finally {
                            (0, n.e)(e)
                        }
                    }
            }
            subscribe(e, t) {
                let r = {
                    stack: [],
                    error: void 0,
                    hasError: !1
                };
                try {
                    let s = t.dup(),
                        a = this.listeners.get(e);
                    null == a && (a = new Set, this.listeners.set(e, a)), a.add(s);
                    let i = new u(() => {
                        let t = this.listeners.get(e);
                        t?.delete(s) && (s[Symbol.dispose](), 0 === t.size && this.listeners.delete(e))
                    });
                    return s.onRpcBroken(() => i.unsubscribe()), (0, n.a)(r, s(this.comments.get(e) ?? []), !1), i
                } catch (e) {
                    r.error = e, r.hasError = !0
                } finally {
                    (0, n.e)(r)
                }
            }
            dispose = () => {
                for (let e of this.listeners.values())
                    for (let t of e) t[Symbol.dispose]();
                this.listeners.clear(), this.comments.clear()
            }
        }
        s = (0, a._)(Symbol.dispose);
        class u extends i.c {
            cleanup;
            constructor(e) {
                super(), this.cleanup = e
            }
            unsubscribe() {
                let e = this.cleanup;
                this.cleanup = null, e?.()
            } [s]() {
                this.unsubscribe()
            }
        }
        r.d(t, {
            a: () => o
        })
    }),
    Is2c: (function(e, t, r) {
        var s = r("GJA8"),
            a = r.n(s),
            n = r("NoRM");

        function i(e, t) {
            return n.b.parse({
                restrictedGates: t,
                gates: a()(n.a.gates, t => e.getFeatureGate(t, {
                    disableExposureLog: !0
                }).value),
                configs: a()(n.a.configs, t => e.getDynamicConfig(t, {
                    disableExposureLog: !0
                }).value)
            })
        }
        r.d(t, {
            a: () => i
        })
    }),
    OxZ1: (function(e, t, r) {
        r.d(t, {
            a: () => d
        });
        var s = r("M7HN");

        function a(e, t) {
            return fetch(e, t)
        }
        class n {
            onFlush;
            flushIntervalMs;
            maxBatchSize;
            maxBatchBytes;
            buffer = [];
            bufferBytes = 0;
            flushTimeout = null;
            constructor(e) {
                this.onFlush = e.onFlush, this.flushIntervalMs = e.flushIntervalMs ?? 5e3, this.maxBatchSize = e.maxBatchSize ?? 50, this.maxBatchBytes = e.maxBatchBytes ?? 64e3
            }
            enqueue(e) {
                (this.buffer.push(e), this.bufferBytes += e.length, this.buffer.length >= this.maxBatchSize || this.bufferBytes >= this.maxBatchBytes) ? this.flush(): this.scheduleFlush()
            }
            flushNow() {
                this.flush()
            }
            clear() {
                this.buffer.length = 0, this.bufferBytes = 0, this.clearFlushTimeout()
            }
            scheduleFlush() {
                null == this.flushTimeout && (this.flushTimeout = setTimeout(() => {
                    this.flush()
                }, this.flushIntervalMs))
            }
            flush() {
                if (0 === this.buffer.length) return void this.clearFlushTimeout();
                let e = this.buffer.splice(0, this.buffer.length);
                this.bufferBytes = 0, this.clearFlushTimeout(), this.onFlush(e)
            }
            clearFlushTimeout() {
                null != this.flushTimeout && (clearTimeout(this.flushTimeout), this.flushTimeout = null)
            }
        }
        let i = "https://chat.openai.com/ces/v1/telemetry/intake",
            l = "dummy-token",
            o = new TextEncoder,
            u = !1;
        class d {
            options;
            batcher;
            fetchImpl;
            queue = [];
            queuedBytes = 0;
            disposed = !1;
            enabled;
            inFlightSend = null;
            retryAttempts = 0;
            retryTimeout = null;
            abortController = null;
            constructor(e) {
                this.options = e;
                let {
                    analyticsEnabled: t = !0
                } = e;
                this.enabled = "boolean" == typeof t ? t : null, this.fetchImpl = e.fetchImpl ?? a, this.batcher = new n({
                    onFlush: e => this.enqueueBatch(e)
                }), "boolean" != typeof t && Promise.resolve(t).then(e => this.setEnabled(e), e => {
                    this.disableWithFailure({
                        type: "disabled",
                        reason: "analytics_config_failed",
                        error: e
                    })
                })
            }
            setEnabled(e) {
                this.disposed || (this.enabled = e, this.batcher.flushNow(), this.enabled ? this.drainQueue() : (this.clearQueue(), this.abortController?.abort()))
            }
            enqueue(e) {
                if (!this.isSendingAllowed()) {
                    this.batcher.clear(), this.clearQueue();
                    return
                }
                this.batcher.enqueue(JSON.stringify(e))
            }
            flushNow() {
                this.batcher.flushNow(), this.drainQueue()
            }
            async flush() {
                let e, t = Date.now() + 2e3;
                try {
                    await Promise.race([(async () => {
                        for (; Date.now() < t;) {
                            if (null != this.retryTimeout && (clearTimeout(this.retryTimeout), this.retryTimeout = null), this.flushNow(), null == this.inFlightSend) return;
                            await this.inFlightSend
                        }
                    })(), new Promise(t => {
                        e = setTimeout(t, 2e3)
                    })])
                } finally {
                    clearTimeout(e)
                }
            }
            dispose() {
                this.disposed = !0, this.enabled = !1, this.batcher.clear(), this.clearQueue(), this.abortController?.abort()
            }
            isSendingAllowed() {
                return !this.disposed && !1 !== this.enabled && (this.options.isEnabled?.() ?? !0)
            }
            enqueueBatch(e) {
                if (!this.isSendingAllowed() || 0 === e.length) return;
                let t = e.join("\n"),
                    r = o.encode(t).byteLength;
                this.queuedBytes + r > 4194304 || (this.queue.push({
                    bytes: r,
                    payload: t,
                    requestId: crypto.randomUUID()
                }), this.queuedBytes += r, this.drainQueue())
            }
            async drainQueue() {
                if (!this.isSendingAllowed()) {
                    this.batcher.clear(), this.clearQueue();
                    return
                }
                if (null == this.enabled || null != this.inFlightSend || null != this.retryTimeout) return;
                let e = this.queue[0];
                null != e && (this.inFlightSend = (async () => {
                    try {
                        await this.send(e.payload, e.requestId), this.queue[0] === e && this.removeHeadBatch(), this.retryAttempts = 0
                    } catch {
                        if (!this.isSendingAllowed()) return void this.clearQueue();
                        this.queue[0] === e && this.scheduleRetry()
                    } finally {
                        this.inFlightSend = null, this.drainQueue()
                    }
                })())
            }
            scheduleRetry() {
                if (null != this.retryTimeout) return;
                if (this.retryAttempts >= 5) {
                    this.removeHeadBatch(), this.retryAttempts = 0, this.drainQueue();
                    return
                }
                this.retryAttempts += 1;
                let e = Math.min(3e4, 2e3 * Math.pow(2, this.retryAttempts - 1));
                this.retryTimeout = setTimeout(() => {
                    this.retryTimeout = null, this.drainQueue()
                }, e)
            }
            disableWithFailure(e) {
                this.disposed || (this.setEnabled(!1), u || (u = !0, this.options.reportFailure(e)))
            }
            removeHeadBatch() {
                let e = this.queue.shift();
                null != e && (this.queuedBytes -= e.bytes)
            }
            clearQueue() {
                this.queue.length = 0, this.queuedBytes = 0, this.retryAttempts = 0, null != this.retryTimeout && (clearTimeout(this.retryTimeout), this.retryTimeout = null)
            }
            async send(e, t) {
                let r, a = new AbortController;
                this.abortController = a;
                try {
                    if (null != this.options.waitUntilReady) {
                        let {
                            signal: e
                        } = a, t = (0, s.Oe)(), r = () => t.reject(e.reason);
                        e.addEventListener("abort", r, {
                            once: !0
                        });
                        try {
                            await Promise.race([this.options.waitUntilReady(), t.promise])
                        } finally {
                            e.removeEventListener("abort", r)
                        }
                        if (e.throwIfAborted(), !this.isSendingAllowed()) return
                    }
                    r = setTimeout(() => a.abort(), 3e4);
                    let n = await this.fetchImpl(function(e) {
                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l,
                            s = new URLSearchParams({
                                ddsource: "browser",
                                "dd-api-key": r,
                                "dd-evp-origin": "browser",
                                "dd-request-id": e
                            });
                        return `${t}?ddforward=${encodeURIComponent(`/api/v2/logs?${s.toString()}`)}`
                    }(t, this.options.endpoint ?? i, this.options.clientToken ?? l), {
                        method: "POST",
                        headers: {
                            "content-type": "text/plain",
                            "x-request-id": t
                        },
                        body: e,
                        signal: a.signal
                    });
                    if (n.ok) {
                        null != n.body && await n.body.cancel().catch(() => {});
                        return
                    }
                    let o = await n.text();
                    if (n.status >= 400 && n.status < 500) {
                        (401 === n.status || 403 === n.status) && this.disableWithFailure({
                            type: "disabled",
                            reason: "invalid_client_token",
                            status: n.status,
                            body: o
                        });
                        return
                    }
                    throw Error(`[ces-telemetry] non-2xx response (${n.status})`)
                } finally {
                    clearTimeout(r), this.abortController = null
                }
            }
        }
    }),
    VGVn: (function(e, t, r) {
        r.d(t, {
            a: () => n
        });
        var s = r("M7HN");
        async function a(e) {
            let {
                responseSchema: t,
                prompt: r,
                imageUrls: a,
                threadId: n,
                turnTrigger: i,
                responsesapiClientMetadata: l,
                serviceTier: o,
                schema: u,
                timeoutMs: d,
                client: h,
                onTokenUsage: c,
                onText: p,
                onTurnCompleted: m,
                signal: f,
                experimentalPredictionMode: g = !1,
                effort: b
            } = e, y = null, w = null, v = null, _ = !1, S = !1, T = () => {}, k = () => {
                S || null == y || null == h.interruptTurn || (S = !0, h.interruptTurn({
                    threadId: n,
                    turnId: y
                }).catch(() => void 0))
            }, x = new Promise((e, r) => {
                let s = () => {
                        _ = !0, T(), k(), r(new DOMException("The operation was aborted", "AbortError"))
                    },
                    a = setTimeout(() => {
                        _ = !0, T(), k(), r(Error("Timed out waiting for structured result."))
                    }, d),
                    i = h.registerInternalNotificationHandler(s => {
                        switch (s.method) {
                            case "error": {
                                let e = s.params;
                                if (e.threadId !== n || null != y && e.turnId !== y) return;
                                y = y ?? e.turnId, v = e.error;
                                return
                            }
                            case "turn/started": {
                                let e = s.params;
                                if (e.threadId !== n) return;
                                y = e.turn.id;
                                return
                            }
                            case "thread/tokenUsage/updated": {
                                let e = s.params;
                                if (e.threadId !== n || null != y && e.turnId !== y) return;
                                c?.(e.tokenUsage);
                                return
                            }
                            case "item/agentMessage/delta": {
                                let e = s.params;
                                if (e.threadId !== n) return;
                                if (null == e.turnId) {
                                    if (null != y) return
                                } else if (null != y && e.turnId !== y) return;
                                w = `${w??""}${e.delta}`, p?.(w);
                                return
                            }
                            case "item/completed": {
                                let e = s.params;
                                if (e.threadId !== n) return;
                                if (null == e.turnId) {
                                    if (null != y) return
                                } else if (null != y && e.turnId !== y) return;
                                "agentMessage" === e.item.type && (w = e.item.text, p?.(w));
                                return
                            }
                            case "turn/completed": {
                                let l = s.params;
                                if (l.threadId !== n || null != y && l.turn.id !== y) return;
                                if (y = l.turn.id, "completed" !== l.turn.status) {
                                    var a, i;
                                    let e;
                                    T(), r(Error((a = l.turn.status, i = l.turn.error ?? v, e = [i?.message, i?.additionalDetails].filter(e => null != e && e.length > 0).join(" "), "failed" === a ? e.length > 0 ? `Structured turn failed: ${e}` : "Structured turn failed." : "interrupted" === a ? e.length > 0 ? `Structured turn was interrupted: ${e}` : "Structured turn was interrupted." : e.length > 0 ? `Structured turn ended with status ${a}: ${e}` : `Structured turn ended with status ${a}.`)));
                                    return
                                }
                                T(), m?.({
                                    turnId: l.turn.id
                                }), e(function(e, t) {
                                    let r, s = e?.trim();
                                    if (!s) return null;
                                    try {
                                        r = JSON.parse(s)
                                    } catch {
                                        return null
                                    }
                                    let a = t.safeParse(r);
                                    return a.success ? a.data : null
                                }(w, t));
                                return
                            }
                            default:
                                return
                        }
                    });
                T = () => {
                    clearTimeout(a), f?.removeEventListener("abort", s), i(), T = () => {}
                }, f?.addEventListener("abort", s, {
                    once: !0
                }), f?.aborted && s()
            }).then(e => ({
                type: "result",
                value: e
            }));
            try {
                if (f?.aborted) return (await x).value;
                let e = h.startTurn({
                        threadId: n,
                        turnTrigger: i,
                        responsesapiClientMetadata: l,
                        clientUserMessageId: globalThis.crypto.randomUUID(),
                        input: [{
                            type: "text",
                            text: r,
                            text_elements: []
                        }, ...(a ?? []).map(e => ({
                            type: "image",
                            url: e
                        }))],
                        ...g ? {
                            effort: b
                        } : {
                            cwd: null,
                            approvalPolicy: null,
                            permissions: ":read-only",
                            runtimeWorkspaceRoots: [],
                            model: null,
                            effort: null,
                            serviceTier: o ?? null,
                            summary: s.yd,
                            personality: null,
                            collaborationMode: null
                        },
                        outputSchema: u
                    }).then(e => (y = e.turn.id, _ && k(), {
                        type: "started"
                    })),
                    t = await Promise.race([e, x]);
                if ("result" === t.type) return t.value;
                return (await x).value
            } catch (e) {
                throw T(), e
            }
        }
        async function n(e) {
            let {
                prompt: t,
                imageUrls: r,
                cwd: s,
                model: n,
                modelProvider: i = null,
                effort: l,
                serviceTier: o,
                serviceName: u,
                baseInstructions: d,
                schema: h,
                config: c,
                sourceThreadId: p,
                fallbackToFreshThread: m = !0,
                threadSource: f = null,
                turnTrigger: g,
                responsesapiClientMetadata: b,
                timeoutMs: y = 3e4,
                client: w,
                responseSchema: v,
                onTemporaryThreadCreated: _,
                onTokenUsage: S,
                onText: T,
                onTurnCompleted: k,
                signal: x,
                allowProviderModelFallback: E = !0,
                experimentalPredictionMode: I = !1,
                experimentalDisablePredictionMcp: P = !1
            } = e, M = t.trim();
            if (0 === M.length) return null;
            if (x?.aborted) throw new DOMException("The operation was aborted", "AbortError");
            let j = {
                    ...c,
                    "mcp_servers.codex_app": {
                        enabled: !1,
                        command: ""
                    },
                    model_reasoning_effort: l
                },
                C = null;
            if (null != p && w.forkThread) try {
                C = I ? (await w.forkThread({
                    threadId: p,
                    experimentalPredictionMode: !0,
                    ...P ? {
                        experimentalDisablePredictionMcp: !0
                    } : {},
                    config: c?.thread_unload_delay_secs == null ? void 0 : {
                        thread_unload_delay_secs: c.thread_unload_delay_secs
                    },
                    ephemeral: !0,
                    excludeTurns: !0,
                    threadSource: f
                })).thread.id : (await w.forkThread({
                    threadId: p,
                    path: null,
                    model: n,
                    modelProvider: i,
                    serviceTier: o ?? null,
                    cwd: s,
                    approvalPolicy: "never",
                    permissions: ":read-only",
                    runtimeWorkspaceRoots: [],
                    config: j,
                    baseInstructions: d,
                    ephemeral: !0,
                    excludeTurns: !0,
                    threadSource: f
                })).thread.id
            } catch {
                if (x?.aborted) throw new DOMException("The operation was aborted", "AbortError");
                if (!m) return null
            }
            let A = {
                    model: n,
                    modelProvider: i,
                    ...E ? {
                        allowProviderModelFallback: !0
                    } : {},
                    cwd: s,
                    approvalPolicy: "never",
                    permissions: ":read-only",
                    runtimeWorkspaceRoots: [],
                    config: j,
                    baseInstructions: d,
                    personality: null,
                    ephemeral: !0,
                    threadSource: f,
                    experimentalRawEvents: !1,
                    dynamicTools: null,
                    serviceTier: o ?? null,
                    ...void 0 !== u ? {
                        serviceName: u
                    } : {}
                },
                R = C ?? (await w.startThread(A)).thread.id;
            _?.({
                threadId: R
            });
            try {
                if (x?.aborted) throw new DOMException("The operation was aborted", "AbortError");
                return await a({
                    turnTrigger: g ?? f,
                    responsesapiClientMetadata: b,
                    responseSchema: v,
                    prompt: M,
                    imageUrls: r,
                    threadId: R,
                    serviceTier: o,
                    schema: h,
                    timeoutMs: y,
                    client: w,
                    onTokenUsage: S,
                    onText: T,
                    onTurnCompleted: k,
                    signal: x,
                    experimentalPredictionMode: I,
                    effort: l
                })
            } finally {
                w.unsubscribeThread(R).catch(() => void 0)
            }
        }
    }),
    ZKPz: (function(e, t, r) {
        let s;
        r.d(t, {
            a: () => w
        });
        var a = r("eB3o"),
            n = r("SRbQ"),
            i = r("Fkn8"),
            l = r("wWR3"),
            o = r.n(l),
            u = r("M7HN"),
            d = r("ASxG"),
            h = r("so1V"),
            c = r("Hywh"),
            p = r("VGVn");
        async function m(e) {
            let {
                prompt: t,
                imageUrls: r,
                cwd: s,
                model: a,
                serviceTier: n,
                client: i,
                timeoutMs: l,
                promptCharLimit: o,
                buildGenerationPrompt: u,
                baseInstructions: d,
                outputSchema: m,
                responseSchema: f,
                extractParsedResult: g,
                tokenUsageTelemetryFeature: b,
                threadSource: y = b,
                onText: w,
                turnTrigger: v,
                signal: _,
                allowProviderModelFallback: S,
                config: T
            } = e, k = t.trim();
            if (0 === k.length) return null;
            let x = k.slice(0, o),
                E = null != a && ("commit_message" === b || "pull_request_message" === b || "commit_pull_request_message" === b) ? await (0, c.a)(i, a, s, _) : a,
                I = null;
            try {
                let e = await (0, p.a)({
                    prompt: u(x),
                    imageUrls: r,
                    cwd: s,
                    model: E,
                    effort: "low",
                    serviceTier: n,
                    baseInstructions: d,
                    schema: m,
                    config: {
                        ...T,
                        "features.enable_fanout": !1,
                        "features.multi_agent": !1,
                        "features.multi_agent_v2": !1,
                        web_search: "disabled"
                    },
                    threadSource: y,
                    turnTrigger: v,
                    timeoutMs: l,
                    client: i,
                    responseSchema: f,
                    signal: _,
                    allowProviderModelFallback: S,
                    onText: w,
                    onTokenUsage: e => {
                        I = e
                    }
                });
                return null != b && null != E && (0, h.a)({
                    feature: b,
                    model: E,
                    reasoningEffort: "low",
                    serviceTier: n ?? null,
                    status: null == e ? "empty" : "success",
                    tokenUsage: I
                }), null == e ? null : g(e)
            } catch (e) {
                throw null != b && null != E && (0, h.a)({
                    feature: b,
                    model: E,
                    reasoningEffort: "low",
                    serviceTier: n ?? null,
                    status: e instanceof Error && "AbortError" === e.name ? "canceled" : "error",
                    tokenUsage: I
                }), e
            }
        }
        let f = {
            include_permissions_instructions: !1,
            include_apps_instructions: !1,
            include_environment_context: !1,
            project_doc_max_bytes: 0,
            apps: {
                _default: {
                    enabled: !1,
                    destructive_enabled: !1,
                    open_world_enabled: !1
                }
            },
            skills: {
                bundled: {
                    enabled: !1
                },
                config: []
            },
            memories: {
                use_memories: !1,
                generate_memories: !1
            },
            "features.apps": !1,
            "features.plugins": !1,
            "features.tool_suggest": !1,
            "features.shell_tool": !1,
            "features.unified_exec": !1,
            "features.shell_snapshot": !1,
            "features.apply_patch_freeform": !1,
            "features.js_repl": !1,
            "features.js_repl_tools_only": !1,
            "features.code_mode": !1,
            "features.code_mode_only": !1,
            "features.multi_agent": !1,
            "features.multi_agent_v2": !1,
            "features.enable_fanout": !1,
            "features.memories": !1,
            "features.request_permissions_tool": !1,
            "features.image_generation": !1,
            "features.image_detail_original": !1,
            "features.skill_mcp_dependency_install": !1,
            "features.skill_env_var_dependency_prompt": !1,
            "features.default_mode_request_user_input": !1,
            web_search: "disabled"
        };
        var g = r("DL4g");
        let b = d.object({
                text: d.string()
            }),
            y = (0, g.a)(b);
        class w extends i.c {
            getAppServerClient;
            constructor(e) {
                super(), this.getAppServerClient = e
            }
            generate(e, t) {
                let {
                    hostId: r,
                    cwd: s,
                    instructions: a,
                    input: i,
                    imageUrls: l,
                    preserveOutputWhitespace: h = !1,
                    structuredOutputSchema: c,
                    threadSource: p,
                    turnTrigger: g,
                    model: w
                } = e, _ = null == c ? b : d.object({
                    text: d.json().transform(e => JSON.stringify(e))
                }), S = null == c ? y : {
                    type: "object",
                    properties: {
                        text: c
                    },
                    required: ["text"],
                    additionalProperties: !1
                }, T = t?.dup();
                return new v(async e => {
                    let t, d = o()(r => {
                        let s = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            if (e.aborted || null == T) return;
                            let a = _.safeParse((0, u.tj)(r));
                            if (!a.success || a.data.text === t) return;
                            t = a.data.text, (0, n.a)(s, T(a.data.text), !1)
                        } catch (e) {
                            s.error = e, s.hasError = !0
                        } finally {
                            (0, n.e)(s)
                        }
                    }, 50);
                    try {
                        return await m({
                            client: this.getAppServerClient(r),
                            cwd: s,
                            model: w ?? null,
                            allowProviderModelFallback: !1,
                            prompt: i,
                            imageUrls: l,
                            promptCharLimit: i.length,
                            timeoutMs: 3e4,
                            baseInstructions: [a, "Write the result into the structured response field text.\nMake 0 tool calls."].join("\n"),
                            buildGenerationPrompt: e => e,
                            outputSchema: S,
                            responseSchema: _,
                            extractParsedResult: e => h ? e.text : e.text.trim() || null,
                            threadSource: p,
                            config: f,
                            turnTrigger: g,
                            signal: e,
                            onText: null == T ? void 0 : d
                        })
                    } finally {
                        d.cancel(), T?.[Symbol.dispose]()
                    }
                })
            }
        }
        s = (0, a._)(Symbol.dispose);
        class v extends i.c {
            abortController = new AbortController;
            result;
            constructor(e) {
                super(), this.result = e(this.abortController.signal), this.result.catch(() => {})
            }
            wait() {
                return this.result
            } [s]() {
                this.abortController.abort()
            }
        }
    }),
    e7C3: (function(e, t, r) {
        var s = r("Fkn8"),
            a = r("ASxG");
        let n = a.record(a.string(), a.object({
            labelColor: a.enum(["green", "blue", "purple", "orange"]).optional()
        }).loose()).nullish();
        class i extends s.c {
            storage;
            #e = Promise.resolve();
            constructor(e) {
                super(), this.storage = e
            }
            async readAll() {
                return await this.#e, this.#t()
            }
            update(e) {
                let t = this.#e.then(() => this.#r(e));
                return this.#e = t.catch(() => void 0), t
            }
            async #t() {
                return n.parse(await this.storage.read()) ?? void 0
            }
            async #r(e) {
                let {
                    threadId: t,
                    labelColor: r
                } = e;
                if (0 === t.length) throw Error("Thread id must not be empty.");
                let s = await this.#t(),
                    a = s?.[t];
                if ((a?.labelColor ?? null) === r) return;
                let n = {
                    ...s
                };
                if (null == r) {
                    let e = {
                        ...a
                    };
                    delete e.labelColor, 0 === Object.keys(e).length ? delete n[t] : n[t] = e
                } else n[t] = {
                    ...a,
                    labelColor: r
                };
                await this.storage.write(s, 0 === Object.keys(n).length ? void 0 : n)
            }
        }
        r.d(t, {
            a: () => i
        })
    }),
    LAE7: (function(e, t, r) {
        var s = r("Fkn8"),
            a = r("CpsU"),
            n = r.n(a),
            i = r("M7HN"),
            l = r("ASxG");
        let o = l.string().min(1).transform(i.Ne),
            u = l.object({
                threadId: o,
                assignment: i.ak.nullable(),
                hostId: l.string().min(1).optional()
            }),
            d = l.object({
                threadId: o,
                projectless: l.boolean()
            }),
            h = u.extend({
                projectless: l.boolean()
            });
        class c extends s.c {
            storage;
            publish;
            writeMembership;
            pendingWrite = Promise.resolve();
            pendingCatalogWrite = Promise.resolve();
            pendingThreadWrites = new Map;
            constructor(e, t, r) {
                super(), this.storage = e, this.publish = t, this.writeMembership = r
            }
            async readMemberships() {
                return await this.pendingWrite, this.storage.read()
            }
            async setAssignment(e, t) {
                let r = u.parse(e);
                await this.#s([r], t)
            }
            async setProjectless(e) {
                let t = d.parse(e);
                await this.#s([t])
            }
            async setMembership(e) {
                await this.restoreMemberships([e])
            }
            async restoreMemberships(e) {
                let t = l.array(h).parse(e);
                await this.#s(t)
            }
            async assignIfUnassigned(e) {
                let t = l.array(h).parse(e);
                await this.#s(t, void 0, !0)
            }
            async moveLocalProjectThreadsToProjectless(e) {
                let t = l.string().min(1).parse(e);
                return this.#a(e => Object.entries(e.assignments).flatMap(e => {
                    let [r, s] = e;
                    return "local" === s.projectKind && s.projectId === t ? [{
                        threadId: (0, i.Ne)(r),
                        assignment: null,
                        projectless: !0
                    }] : []
                }))
            }
            async reset() {
                await this.#a(e => [...new Set([...Object.keys(e.assignments), ...e.projectlessThreadIds])].map(e => ({
                    threadId: (0, i.Ne)(e),
                    assignment: null,
                    projectless: !1
                })))
            }
            async flush() {
                await Promise.allSettled([...this.pendingThreadWrites.values(), this.pendingCatalogWrite]), await this.pendingWrite
            }
            #s(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return null == this.writeMembership ? this.#n(t => {
                    let s = r ? new Set([...Object.keys(t.assignments), ...t.projectlessThreadIds]) : null;
                    return e.flatMap(e => s?.has(e.threadId) ? [] : (s?.add(e.threadId), [{
                        ...(0, i.gh)(t, e.threadId),
                        ...e
                    }]))
                }) : this.#i(e, t, r, this.pendingCatalogWrite, !0)
            }
            #a(e) {
                if (null == this.writeMembership) return this.#n(e);
                let t = [...this.pendingThreadWrites.values()],
                    r = this.pendingCatalogWrite,
                    s = (async () => {
                        await Promise.allSettled(t), await r, await this.pendingWrite;
                        let s = e(await this.storage.read());
                        return this.#i(s, void 0, !1, Promise.resolve(), !1)
                    })();
                return this.pendingCatalogWrite = s.then(() => {}, () => {}), s
            }
            async #i(e, t, r, s, a) {
                let l = s,
                    o = n()(e, 8).map(e => {
                        let s = l,
                            n = Promise.allSettled(e.map(e => {
                                let n = async () => {
                                    await s, await this.pendingWrite;
                                    let a = await this.storage.read(),
                                        n = (0, i.gh)(a, e.threadId);
                                    if (r && (null != n.assignment || n.projectless)) return [];
                                    let l = {
                                            ...n,
                                            ...e
                                        },
                                        o = [];
                                    return await this.writeMembership?.(l, async () => {
                                        o = await this.#n(() => [l])
                                    }, t), o
                                };
                                if (!a) return n();
                                let l = (this.pendingThreadWrites.get(e.threadId) ?? Promise.resolve()).then(n),
                                    o = l.then(() => {}, () => {}).finally(() => {
                                        this.pendingThreadWrites.get(e.threadId) === o && this.pendingThreadWrites.delete(e.threadId)
                                    });
                                return this.pendingThreadWrites.set(e.threadId, o), l
                            })).then(e => {
                                let t = [];
                                for (let r of e) {
                                    if ("rejected" === r.status) throw r.reason;
                                    t.push(...r.value)
                                }
                                return t
                            });
                        return l = n, n
                    }),
                    u = await Promise.allSettled(o),
                    d = [];
                for (let e of u) {
                    if ("rejected" === e.status) throw e.reason;
                    d.push(...e.value)
                }
                return d
            }
            #n(e) {
                let t = this.pendingWrite.then(async () => {
                    let t = this.storage.read(),
                        r = t instanceof Promise ? await t : t,
                        s = e(r),
                        {
                            records: a,
                            memberships: n
                        } = (0, i.hh)(r, s),
                        l = Object.keys(n).map(i.Ne);
                    if (0 === l.length) return [];
                    let o = l.map(e => ({
                        threadId: e,
                        ...(0, i.gh)(r, e)
                    }));
                    try {
                        await this.storage.write(r, a)
                    } catch (s) {
                        let e = await this.storage.read(),
                            t = (0, i.hh)(r, l.map(t => ({
                                threadId: t,
                                ...(0, i.gh)(e, t)
                            }))).memberships;
                        throw Object.keys(t).length > 0 && this.publish(t), s
                    }
                    return this.publish(n), o
                });
                return this.pendingWrite = t.then(() => {}, () => {}), t
            }
        }
        r.d(t, {
            a: () => c
        })
    }),
    D5eb: (function(e, t, r) {
        r.d(t, {
            a: () => f
        });
        var s = r("M7HN"),
            a = r("ASxG"),
            n = r("so1V");
        let i = r("OrhA").a.ephemeralGenerationModel;
        var l = r("Hywh"),
            o = r("VGVn"),
            u = r("DL4g");
        let d = a.string().min(1),
            h = a.object({
                description: d
            });
        (0, u.a)(h);
        let c = a.object({
            summary: a.string().min(1)
        });
        (0, u.a)(c);
        let p = c.extend({
            compactSummary: a.string().min(1).max(s.xd)
        });
        (0, u.a)(p);
        let m = a.record(a.string(), a.object({}));
        async function f(e) {
            var t;
            let {
                prompt: r,
                maxTitleChars: n = s.wd,
                cwd: o,
                serviceTier: h,
                appServerClient: c,
                model: p = i,
                timeoutMs: m = 3e4,
                sourceThreadId: f,
                fallbackToFreshThread: b,
                experimentalPredictionMode: y,
                readOnlyAppToolAllowlist: w = [],
                serviceName: v,
                signal: _
            } = e, S = r.trim();
            if (0 === S.length) return null;
            let T = null == f ? await (0, l.a)(c, p, o, _) : p,
                k = a.object({
                    title: a.string().min(1).max(60),
                    description: d
                }),
                x = await g({
                    appServerClient: c,
                    model: T,
                    readOnlyAppToolAllowlist: w,
                    cwd: o,
                    fallbackToFreshThread: !y && b,
                    feature: "thread_title",
                    experimentalPredictionMode: y,
                    outputSchema: y ? null : (0, u.a)(k),
                    prompt: S,
                    responseSchema: k,
                    serviceTier: h,
                    serviceName: v,
                    signal: _,
                    sourceThreadId: f,
                    timeoutMs: m
                }),
                E = (0, s.Qi)(x?.title ?? "", n);
            return null == E ? null : {
                title: E,
                description: (t = x?.description, t?.replace(/\s+/g, " ").trim().slice(0, s.vd).trimEnd() || null)
            }
        }
        async function g(e) {
            let {
                appServerClient: t,
                model: r,
                readOnlyAppToolAllowlist: s = [],
                cwd: a,
                fallbackToFreshThread: i,
                experimentalPredictionMode: l,
                feature: u,
                outputSchema: d,
                prompt: h,
                responseSchema: c,
                serviceTier: p,
                serviceName: m,
                signal: f,
                sourceThreadId: g,
                timeoutMs: y
            } = e, w = null, v = null, _ = l ? null : "low";
            try {
                var S;
                let e = await (0, o.a)({
                    prompt: h,
                    cwd: a,
                    model: r,
                    effort: _,
                    serviceTier: p,
                    serviceName: m,
                    threadSource: u,
                    schema: d,
                    config: {
                        mcp_servers: await b(t, a, s.length > 0, f),
                        "features.enable_fanout": !1,
                        "features.hooks": !1,
                        "features.multi_agent": !1,
                        "features.multi_agent_v2": !1,
                        "features.plugins": !1,
                        "features.shell_snapshot": !1,
                        "features.tool_suggest": !1,
                        ...{
                            "features.apps": (S = s).length > 0,
                            apps: {
                                ...Object.fromEntries(S.map(e => {
                                    let {
                                        appId: t,
                                        toolNames: r
                                    } = e;
                                    return [t, {
                                        enabled: !0,
                                        destructive_enabled: !1,
                                        open_world_enabled: !1,
                                        default_tools_enabled: !1,
                                        tools: Object.fromEntries(r.map(e => [e, {
                                            enabled: !0
                                        }]))
                                    }]
                                })),
                                _default: {
                                    enabled: !1,
                                    destructive_enabled: !1,
                                    open_world_enabled: !1
                                }
                            }
                        },
                        web_search: "disabled"
                    },
                    timeoutMs: y,
                    client: t,
                    responseSchema: c,
                    sourceThreadId: g,
                    fallbackToFreshThread: i,
                    experimentalPredictionMode: l,
                    signal: f,
                    onTokenUsage: e => {
                        w = w ?? e, v = e
                    }
                });
                return (0, n.a)({
                    feature: u,
                    firstTokenUsage: w,
                    model: r,
                    reasoningEffort: _,
                    serviceTier: p ?? null,
                    status: null == e ? "empty" : "success",
                    tokenUsage: v
                }), e
            } catch (e) {
                throw (0, n.a)({
                    feature: u,
                    firstTokenUsage: w,
                    model: r,
                    reasoningEffort: _,
                    serviceTier: p ?? null,
                    status: e instanceof Error && "AbortError" === e.name ? "canceled" : "error",
                    tokenUsage: v
                }), e
            }
        }
        async function b(e, t, r, a) {
            if (a?.throwIfAborted(), null != e.getUserSavedConfiguration) try {
                let n = e.getUserSavedConfiguration(t ?? void 0),
                    i = null == a ? await n : await (0, s.gf)(n, a),
                    l = m.safeParse(i.mcp_servers);
                if (!l.success) return;
                return Object.fromEntries(Object.keys(l.data).filter(e => !r || "codex_apps" !== e).map(e => [e, {
                    enabled: !1
                }]))
            } catch {
                a?.throwIfAborted();
                return
            }
        }
    }),
    DL4g: (function(e, t, r) {
        var s = r("eESV");

        function a(e) {
            return JSON.parse(JSON.stringify(s.J(e)))
        }
        r.d(t, {
            a: () => a
        })
    })
};