export const __rspack_esm_id = 514085;
export const __rspack_esm_ids = [514085];
export const __webpack_modules__ = {
    PZWn: (function(e, t, r) {
        var n = r("iTtm"),
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

        function d(e, t, r) {
            let n = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                a = e.get(o.d);
            null != a && e.set(s, {
                ...a,
                conversationId: t
            }, {
                mode: r,
                overridden: n
            })
        }
        r.d(t, {
            a: () => i.l,
            b: () => d
        }, {
            c: l,
            d: c
        })
    }),
    SGof: (function(e, t, r) {
        var n = r("LLIt"),
            a = r("TFzY");

        function o(e, t) {
            let r = e?.model ?? null,
                o = t?.models.find(e => e.model === r) ?? t?.models.find(e => `${e.model}-wm` === r),
                i = a.c.safeParse(e?.reasoningEffort);
            return {
                model: o?.model ?? r,
                reasoningEffort: i.success ? n.a[i.data] : e?.reasoningEffort ?? null
            }
        }

        function i(e, t, r) {
            let o = !(0, a.l)(e, t) && (0, a.l)(e, `${t}-wm`) ? `${t}-wm` : t,
                i = e.modelConfigBySlug?.[o]?.thinkingEfforts?.find(e => n.a[e.thinking_effort] === r)?.thinking_effort;
            return {
                model: o,
                reasoningEffort: i ?? r
            }
        }
        r.d(t, {
            a: () => o,
            b: () => i
        })
    }),
    fNL0: (function(e, t, r) {
        let n = (0, r("zd8w").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    tzYO: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("o0PZ"),
            o = r("hzGf"),
            i = r("Cslg"),
            s = r("OFP1"),
            l = r("vLsY"),
            c = r("OWtl"),
            d = r("rvFo"),
            u = r("HFSu"),
            p = r("eShZ");
        let g = (0, n.c)(c.a, e => {
                let {
                    get: t
                } = e, r = t(i.e), n = t(i.j);
                return t(o.a, {
                    name: "work.cloud-orchestration.preferences"
                }).isCapable && "allowed" === t(i.k).status && "allowed" === t(s.t).status && null != r && null != n ? {
                    accountId: r,
                    userId: n
                } : null
            }),
            f = (0, n.r)(c.a, e => {
                let {
                    get: t,
                    scope: n
                } = e, o = t(g);
                return {
                    queryKey: ["work-preferences", o?.accountId, o?.userId],
                    enabled: null != o,
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == o) throw new DOMException("Work account unavailable", "AbortError");
                        let i = await u.a.safeGet("/wham/work/settings", {
                            expectedIdentity: o,
                            additionalHeaders: {
                                [a.Zb]: o.accountId
                            },
                            signal: t
                        });
                        if (null == i.settings) {
                            let {
                                readInitialWorkPreferences: e
                            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(289049)]).then(r.bind(r, "E6WR")), s = await e(n), l = n.get(g);
                            if (t.aborted || l?.accountId !== o.accountId || l.userId !== o.userId) throw new DOMException("Work account changed", "AbortError");
                            try {
                                i = await u.a.safePatch("/wham/work/settings", {
                                    expectedIdentity: o,
                                    additionalHeaders: {
                                        [a.Zb]: o.accountId
                                    },
                                    requestBody: {
                                        expected_revision: 0,
                                        settings: s
                                    },
                                    expectedErrorStatuses: [409],
                                    signal: t
                                })
                            } catch (e) {
                                if (!(e instanceof p.a) || 409 !== e.status) throw e;
                                i = await u.a.safeGet("/wham/work/settings", {
                                    expectedIdentity: o,
                                    additionalHeaders: {
                                        [a.Zb]: o.accountId
                                    },
                                    signal: t
                                })
                            }
                        }
                        return {
                            ...i,
                            settings: null == i.settings ? null : (0, a.oh)().schema.parse(i.settings)
                        }
                    },
                    staleTime: d.b.ONE_MINUTE,
                    refetchOnWindowFocus: "always",
                    retry: !1
                }
            }),
            h = (0, n.p)(c.a, e => {
                let {
                    get: t,
                    scope: r
                } = e, n = t(g);
                return {
                    mutationKey: ["update-work-preferences", n?.accountId, n?.userId],
                    mutationFn: async e => {
                        let t = r.query.snapshot(f),
                            o = r.get(g);
                        if (null == n || o?.accountId !== n.accountId || o.userId !== n.userId) throw new DOMException("Work preferences unavailable", "AbortError");
                        let i = await t.getOrFetch();
                        await t.cancel();
                        let s = r.get(g);
                        if (s?.accountId !== n.accountId || s.userId !== n.userId) throw new DOMException("Work preferences unavailable", "AbortError");
                        let c = await u.a.safePatch("/wham/work/settings", {
                            expectedIdentity: n,
                            additionalHeaders: {
                                [a.Zb]: n.accountId
                            },
                            requestBody: {
                                expected_revision: i.revision,
                                settings: e
                            },
                            expectedErrorStatuses: [409]
                        });
                        t.setData({
                            ...c,
                            settings: null == c.settings ? null : (0, a.oh)().schema.parse(c.settings)
                        }), (0, l.a)(["work-preferences", n.accountId, n.userId])
                    },
                    scope: {
                        id: `work-preferences:${n?.accountId}:${n?.userId}`
                    },
                    retry: !1
                }
            });

        function m(e) {
            let t = e.get(g);
            if (null == t) return;
            let r = e.get(f);
            if (void 0 === r.data || r.isStale) return e.query.fetch(f).then(() => {
                let r = e.get(g);
                if (r?.accountId !== t.accountId || r.userId !== t.userId) throw new DOMException("Work account changed", "AbortError")
            })
        }
        r.d(t, {
            a: () => m
        }, {
            b: h,
            c: f,
            d: g
        })
    }),
    rhkM: (function(e, t, r) {
        let n = null;

        function a(e) {
            n = e
        }

        function o(e) {
            if (null == n) throw Error("Browser Git execution host resolver is unavailable");
            return n(e)
        }
        r.d(t, {
            a: () => o,
            b: () => a
        })
    }),
    yiHb: (function(e, t, r) {
        r.d(t, {
            a: () => p
        });
        var n = r("Fkn8"),
            a = r("WCw3"),
            o = r("o0PZ"),
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
                let n = (0, o.$e)("function" == typeof crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
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
                    t = await (null == e.signal ? r : (0, o.ef)(r, e.signal))
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
        function n(e, t) {
            if (null == t || "object" != typeof t || !("type" in t) || !("workerId" in t)) return !1;
            let r = t.type;
            return t.workerId === e && ("worker-response" === r || "worker-event" === r)
        }

        function a() {
            let e = Error("Aborted");
            return e.name = "AbortError", e
        }

        function o(e, t, r) {
            let n = e.get(t);
            return null == n && (n = new Set, e.set(t, n)), n.add(r), () => {
                n.delete(r), 0 === n.size && e.delete(t)
            }
        }

        function i(e) {
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
        }
        r.d(t, {
            a: () => a,
            b: () => i,
            c: () => n,
            d: () => o
        })
    }),
    LNWO: (function(e, t, r) {
        var n = r("iTtm"),
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
            g = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                if (!t(s.c, l.a)) return t(s.f, l.a) ? null : u;
                let r = t(a.l);
                if (r.authLoading && null == r.authMethod || r.accountLoading && (null == r.accountId || null == r.accountStructure)) return null;
                if ("chatgpt" !== r.authMethod || "workspace" !== r.accountStructure || null == r.accountId || r.accountId !== r.authenticatedAccountId) return u;
                if (t(s.c, c)) return p;
                if (t(s.f, c)) return null;
                let n = t(s.c, d);
                if (!n && t(s.f, d)) return null;
                let i = t(o.k, r.accountId);
                if (i.isLoading) return null;
                if (i.isError || null == i.data) return u;
                if (!n) return i.data.beta_settings.hermes ? p : u;
                let g = i.data.permissions?.includes("chatgpt.workspace.feature.hermes.access") === !0;
                return {
                    canAccess: g,
                    canShare: g && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.share.access") === !0,
                    canPublishToDirectory: g && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.share.access") === !0 && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.publish.access") === !0,
                    canBuild: g && i.data.permissions?.includes("chatgpt.workspace.feature.hermes.builder.access") === !0
                }
            }),
            f = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(g)?.canAccess ?? null
            }),
            h = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(g)?.canBuild ?? null
            }),
            m = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(g)?.canShare ?? null
            }),
            w = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(g)?.canPublishToDirectory ?? null
            });
        r.d(t, {}, {
            a: f,
            b: h,
            c: w,
            d: m
        })
    }),
    ovrt: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("oyxz"),
            i = r("HZfM"),
            s = r("aqd9"),
            l = r("PkPj"),
            c = r("zWqe"),
            d = r("ZGaK");

        function u() {
            let e, t, r, s, c = (0, a.c)(6),
                [d] = (0, i.fb)();
            c[0] !== d ? (e = "directory" === d.get("tab") || !!d.get("q")?.trim(), c[0] = d, c[1] = e) : e = c[1];
            let u = e;
            return c[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                id: "workspaceAgents.index.subtitle",
                defaultMessage: "Keep work moving 24/7 with agents",
                description: "Subtitle on the Agents index page"
            }), r = (0, n.jsx)(o.a, {
                id: "workspaceAgents.index.pageTitle",
                defaultMessage: "Agents",
                description: "Title of the Agents index page"
            }), c[2] = t, c[3] = r) : (t = c[2], r = c[3]), c[4] !== u ? (s = (0, n.jsx)("div", {
                className: "flex h-full min-h-0 flex-col bg-surface text-default",
                children: (0, n.jsx)(l.b, {
                    contentWidth: "directory",
                    headerPlacement: "inline",
                    headerVariant: "directory",
                    subtitle: t,
                    title: r,
                    children: (0, n.jsx)(p, {
                        directory: u
                    })
                })
            }), c[4] = u, c[5] = s) : s = c[5], s
        }

        function p(e) {
            let t, r, i, s = (0, a.c)(4),
                {
                    directory: l
                } = e;
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(o.a, {
                id: "workspaceAgents.index.loading",
                defaultMessage: "Loading agents",
                description: "Accessible status while the Workspace Agents list loads"
            }), s[0] = t) : t = s[0];
            let u = t;
            if (!(void 0 !== l && l)) {
                let e;
                return s[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(c.a, {
                    loadingLabel: u,
                    rowCount: 4
                }), s[1] = e) : e = s[1], e
            }
            return s[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)("span", {
                role: "status",
                className: "sr-only",
                children: u
            }), s[2] = r) : r = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsxs)(d.a, {
                children: [r, (0, n.jsx)(d.b, {
                    className: "@2xl/skills-grid:grid-cols-3",
                    children: Array.from({
                        length: 6
                    }, g)
                })]
            }), s[3] = i) : i = s[3], i
        }

        function g(e, t) {
            return (0, n.jsx)("div", {
                ref: s.a,
                "aria-hidden": !0,
                className: "flex min-h-50 flex-col gap-2 rounded-xl border-hairline border-default bg-surface p-5 dark:border-transparent",
                children: (0, n.jsxs)("div", {
                    className: "flex flex-1 flex-col gap-2 motion-safe:animate-pulse",
                    children: [(0, n.jsx)("div", {
                        className: "size-10 rounded-full bg-text/10"
                    }), (0, n.jsx)("div", {
                        className: "h-4 w-32 max-w-full rounded-full bg-text/10"
                    }), (0, n.jsx)("div", {
                        className: "h-4 rounded-full bg-text/10"
                    }), (0, n.jsx)("div", {
                        className: "h-4 w-4/5 rounded-full bg-text/10"
                    }), (0, n.jsx)("div", {
                        className: "mt-auto h-4 w-24 max-w-full rounded-full bg-text/10"
                    })]
                })
            }, t)
        }
        r.d(t, {
            a: () => p,
            b: () => u
        })
    }),
    Fg7k: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("Wf1j"),
            i = r("YKJj");

        function s(e) {
            let t, r, s = (0, a.c)(10),
                {
                    isWorkspaceAgentHome: l,
                    singleLine: c,
                    ...d
                } = e,
                u = (0, o.a)(),
                p = d.state.composerProps.workspaceAgent,
                g = i.a,
                f = l && null != p ? u.formatMessage({
                    id: "workspaceAgents.detail.composerPlaceholder",
                    defaultMessage: "Ask {agentName}",
                    description: "Placeholder in the composer on a Workspace Agent page"
                }, {
                    agentName: p.name
                }) : d.placeholder,
                h = l && void 0 !== c && c ? "auto-single-line" : d.composerLayoutMode;
            return s[0] !== p || s[1] !== l || s[2] !== d.state ? (t = l ? {
                ...d.state,
                composerProps: {
                    ...d.state.composerProps,
                    hideModelPicker: !0,
                    hiddenSystemHint: null == p ? d.state.composerProps.hiddenSystemHint : `custom_agent:${p.agent_id}`
                }
            } : d.state, s[0] = p, s[1] = l, s[2] = d.state, s[3] = t) : t = s[3], s[4] !== g || s[5] !== d || s[6] !== f || s[7] !== h || s[8] !== t ? (r = (0, n.jsx)(g, {
                ...d,
                placeholder: f,
                composerLayoutMode: h,
                state: t
            }), s[4] = g, s[5] = d, s[6] = f, s[7] = h, s[8] = t, s[9] = r) : r = s[9], r
        }
        r.d(t, {
            a: () => s
        })
    }),
    aXbW: (function(e, t, r) {
        var n = r("HZfM"),
            a = r("Pagv");

        function o(e, t) {
            if (null == (0, n.J)(a.f, e)) return t;
            let r = new URLSearchParams(t);
            return r.delete("memory_channel"), r.delete("memory_node"), r.size > 0 ? `?${r}` : ""
        }
        r.d(t, {
            a: () => o
        })
    }),
    Pagv: (function(e, t, r) {
        let n = "/agents/studio/edit/:agentId",
            a = `${n}/channels/slack/setup`,
            o = `${n}/analytics`;

        function i(e) {
            return `/agents/studio/edit/${encodeURIComponent(e)}`
        }

        function s(e) {
            return `${i(e)}/channels/slack/setup`
        }

        function l(e) {
            return `${i(e)}/analytics`
        }

        function c(e) {
            return `/agents/a/${encodeURIComponent(e)}`
        }

        function d(e) {
            return `https://chatgpt.com/agents/a/${encodeURIComponent(e)}`
        }
        r.d(t, {
            h: () => d,
            i: () => l,
            j: () => i,
            k: () => c,
            l: () => s
        }, {
            a: "2039979220",
            b: "/agents",
            c: o,
            d: "/agents/studio/new",
            e: "/agents/a/:agentId",
            f: n,
            g: a
        })
    }),
    tYw1: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("Cslg"),
            o = r("Kwur"),
            i = r("vLsY"),
            s = r("OWtl"),
            l = r("Nwp9"),
            c = r("rvFo"),
            d = r("HFSu"),
            u = r("LNWO");
        let p = (0, n.u)(s.a, []),
            g = new d.c({
                getAdditionalHeaders: o.c
            }),
            f = (0, l.b)("workspace-agent-pins-by-account-v1", {});

        function h(e) {
            return ["workspace-agent-pins", e]
        }
        let m = (0, n.r)(s.a, e => {
                let {
                    get: t,
                    scope: r
                } = e, n = t(a.e);
                return {
                    enabled: null != n && !0 === t(u.a),
                    initialData: null == n ? void 0 : t(f)?.[n],
                    queryFn: async e => {
                        let {
                            signal: t
                        } = e;
                        if (null == n) return [];
                        let {
                            items: a
                        } = await g.safeGet("/hermes/agents/pinned", {
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
                        return r.set(f, {
                            ...r.get(f),
                            [n]: o
                        }), o
                    },
                    queryKey: h(n),
                    refetchOnMount: "always",
                    retry: !1,
                    staleTime: c.b.ONE_MINUTE
                }
            }),
            w = (0, n.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(k);
                return null == n ? null : n.some(t => {
                    let {
                        id: r
                    } = t;
                    return r === e
                })
            }),
            k = (0, n.c)(s.a, e => {
                let {
                    get: t
                } = e;
                if (!0 !== t(u.a)) return;
                let r = t(a.e),
                    n = t(m).data;
                for (let e of t(p)) e.accountId === r && (n = v(n, e.agent, e.isPinned));
                return n
            });
        async function b(e, t, r) {
            if (!0 !== e.get(u.a)) throw Error("Cannot update an agent pin while Workspace Agents is off");
            let n = e.get(a.e);
            if (null == n) throw Error("Cannot update an agent pin without an account");
            let o = h(n),
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
                            }), e.get(a.e) !== n) throw Error("Cannot update an agent pin after changing accounts");
                        if (!0 !== e.get(u.a)) throw Error("Cannot update an agent pin while Workspace Agents is off");
                        let c = await g.safePost("/hermes/agent/{agent_id}/pin", {
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
                        }), e.queryClient.setQueryData(o, e => v(e, t, c.is_pinned)), i = e, s = n, l = o, i.set(f, {
                            ...i.get(f),
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
        }

        function v(e, t, r) {
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
        r.d(t, {
            a: () => b
        }, {
            b: w,
            c: k
        })
    }),
    tgI9: (function(e, t, r) {
        r.d(t, {
            a: () => x
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("iTtm"),
            i = r("Wf1j"),
            s = r("OWtl"),
            l = r("D8ee"),
            c = r("Nwp9"),
            d = r("HZfM"),
            u = r("bf6R"),
            p = r("Bbed"),
            g = r("SGsN"),
            f = r("gBBC"),
            h = r("b5fQ"),
            m = r("ifdJ"),
            w = r("Pagv"),
            k = r("tYw1");
        let b = (0, p.a)(() => Promise.all([r.e(753405), r.e(148552)]).then(r.bind(r, "xm0K")).then(e => e.WorkspaceAgentGraphic), {
            fallback: (0, n.jsx)(u.Rg, {}),
            errorFallback: (0, n.jsx)(u.Rg, {})
        });

        function v() {
            let e, t, r, l = (0, a.c)(11),
                c = (0, o.y)(s.a),
                p = (0, i.a)(),
                v = (0, o.z)(k.c),
                {
                    pathname: I
                } = (0, d.X)(),
                x = (0, d.Z)();
            l[0] !== p ? (e = p.formatMessage({
                id: "workspaceAgents.sidebar.unpin",
                defaultMessage: "Unpin agent",
                description: "Accessible label for the pin button that removes a Workspace Agent from the sidebar"
            }), l[0] = p, l[1] = e) : e = l[1];
            let S = e;
            return l[2] !== v || l[3] !== p || l[4] !== x || l[5] !== I || l[6] !== c || l[7] !== S ? (t = v?.map(e => {
                let t = (0, w.k)(e.id);
                return (0, n.jsx)(h.a, {
                    className: "group gap-1",
                    icon: null == e.icon ? (0, n.jsx)(u.Qg, {}) : (0, n.jsx)(b, {
                        icon: e.icon,
                        size: 20
                    }),
                    interactiveTrailing: (0, n.jsx)("span", {
                        className: "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100",
                        children: (0, n.jsx)(m.a, {
                            ariaLabel: S,
                            isPinned: !0,
                            onPin: y,
                            onUnpin: () => {
                                (0, k.a)(c, e, !1).catch(() => {
                                    c.get(g.f).danger(p.formatMessage({
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
                        (0, f.c)(c, null), x(t)
                    }
                }, e.id)
            }), l[2] = v, l[3] = p, l[4] = x, l[5] = I, l[6] = c, l[7] = S, l[8] = t) : t = l[8], l[9] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), l[9] = t, l[10] = r) : r = l[10], r
        }

        function y() {}
        let I = (0, c.b)("agents-sidebar-collapsed-v1", !1);

        function x(e) {
            let t, r, c, d, u = (0, a.c)(14),
                {
                    children: p,
                    forceExpanded: g,
                    label: f,
                    sectionReorderDnd: h,
                    titleActions: m
                } = e,
                w = (0, o.y)(s.a),
                k = (0, o.z)(I),
                b = (0, i.a)();
            u[0] !== b || u[1] !== f ? (t = f ?? b.formatMessage({
                id: "sidebarElectron.aeonThreads.v2",
                defaultMessage: "Agents",
                description: "Section label above pinned workspace agents and agent tasks in the sidebar"
            }), u[0] = b, u[1] = f, u[2] = t) : t = u[2];
            let y = t,
                x = k && !(void 0 !== g && g);
            return u[3] !== k || u[4] !== w ? (r = () => w.set(I, !k), u[3] = k, u[4] = w, u[5] = r) : r = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, n.jsx)(v, {}), u[6] = c) : c = u[6], u[7] !== p || u[8] !== y || u[9] !== h || u[10] !== x || u[11] !== r || u[12] !== m ? (d = (0, n.jsxs)(l.a, {
                collapsed: x,
                heading: "Agents",
                label: y,
                sectionKey: "agents",
                sectionReorderDnd: h,
                onCollapsedChange: r,
                titleActions: m,
                titleActionsOnHover: !0,
                children: [c, p]
            }), u[7] = p, u[8] = y, u[9] = h, u[10] = x, u[11] = r, u[12] = m, u[13] = d) : d = u[13], d
        }
    }),
    rTAL: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("iTtm"),
            i = r("Bbed"),
            s = r("OWtl"),
            l = r("DtSM");
        let c = (0, o.c)(s.a, e => {
                let {
                    get: t
                } = e;
                return null != t(l.a)
            }),
            d = (0, i.a)(() => Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(226913), r.e(436045)]).then(r.bind(r, "h3mc")).then(e => e.WorkspaceBanner));

        function u(e) {
            let t, r = (0, a.c)(2),
                i = (0, o.z)(c);
            return r[0] !== i ? (t = i ? (0, n.jsx)(d, {}) : null, r[0] = i, r[1] = t) : t = r[1], t
        }
        r.d(t, {
            a: () => u
        })
    }),
    DtSM: (function(e, t, r) {
        var n = r("iTtm"),
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
                            if (g(e)) return {
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
                } = e, r = t(a.e), n = t(a.i), s = t(a.d);
                if (!t(a.h) || null == r || null == n || "loaded" !== s.status || "workspace" !== s.structure) return null;
                let {
                    data: c,
                    error: d
                } = t(o.k, r);
                if (null == c || g(d)) return null;
                if (t(a.a)) {
                    if (!t(l.c, "3530939117") || !1 === c.workspace_banner_available || !c.beta_settings.workspace_fedramp_banner) return null;
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

        function g(e) {
            return e instanceof d.a && [401, 403, 404].includes(e.status)
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
            o = r("iTtm"),
            i = r("oyxz"),
            s = r("Cslg"),
            l = r("ipGa"),
            c = r("AcSY"),
            d = r("OWtl"),
            u = r("gv9R"),
            p = r("hZax"),
            g = r("OMIV");
        let f = (0, o.q)(d.a, (e, t) => {
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
                    return null == e ? Promise.resolve(null) : m(r, e, n)
                }
            }
        });

        function h(e, t) {
            let r = e?.accounts?.find(e => e.id === t);
            return r?.structure.toLowerCase() === "personal" && "free" === r.plan_type && e?.accounts?.every(e => "personal" === e.structure.toLowerCase() || !0 === e.is_deactivated) === !0
        }
        async function m(e, t, r) {
            let n = new AbortController,
                a = AbortSignal.any([n.signal, r]),
                o = e.watch(e => {
                    let {
                        get: r
                    } = e;
                    (r(s.j) !== t.userId || r(s.e) !== t.accountId) && n.abort()
                }),
                i = setTimeout(() => n.abort(), 2e3);
            try {
                return a.throwIfAborted(), await Promise.race([(async () => {
                    let r = await (0, u.b)();
                    if (a.throwIfAborted(), !await r(e, t, a)) return null;
                    a.throwIfAborted();
                    let n = e.get(g.e),
                        o = e.queryClient.getQueryData(["accounts", "check"]);
                    if (null == n || !h(o, t.accountId)) return null;
                    let i = (0, p.f)(n, "2485740912").get("cta_variant", "default");
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
        }

        function w(e) {
            let t, r, u, p = (0, a.c)(15),
                {
                    source: g,
                    children: m
                } = e,
                w = (0, o.y)(d.a),
                k = (0, o.z)(s.j),
                b = (0, o.z)(s.e),
                {
                    data: v
                } = (0, c.g)();
            p[0] !== b || p[1] !== v || p[2] !== k ? (t = !(0, l.a)() && null != k && null != b && h(v, b) ? {
                userId: k,
                accountId: b
            } : null, p[0] = b, p[1] = v, p[2] = k, p[3] = t) : t = p[3];
            let y = t,
                {
                    data: I,
                    isPending: x
                } = (0, o.x)(f, y);
            if (null != y && x) return null;
            if (null == y || null == I) {
                let e;
                return p[4] !== m ? (e = m(null), p[4] = m, p[5] = e) : e = p[5], e
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
            let S = r;
            return p[8] !== m || p[9] !== I || p[10] !== y || p[11] !== S || p[12] !== w || p[13] !== g ? (u = m({
                label: S,
                onClick: e => !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && (I.open(w, y.userId, void 0, {
                    ...y,
                    source: g
                }), !0)
            }), p[8] = m, p[9] = I, p[10] = y, p[11] = S, p[12] = w, p[13] = g, p[14] = u) : u = p[14], u
        }
    }),
    ONXT: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("zd8w"),
            i = r("oyxz"),
            s = r("JIuM"),
            l = r("L6H2"),
            c = r("ygO2"),
            d = r("JNtf"),
            u = r("mUDD"),
            p = r("bf6R"),
            g = r("v0Gf"),
            f = r("hueg"),
            h = r("pPxA"),
            m = r("hZax");

        function w(e) {
            let t, r, s, l, p, g, f, w, I, x, S, T, _ = (0, a.c)(37),
                {
                    workspaceName: C,
                    workspaceLogoUrl: E,
                    policyText: M,
                    pending: A,
                    error: j,
                    onAcknowledge: P
                } = e,
                W = void 0 !== A && A,
                R = void 0 !== j && j,
                O = (0, o.useRef)(null),
                q = (0, m.h)("2469870962");
            _[0] !== R ? (t = R ? (0, n.jsx)("p", {
                role: "alert",
                children: (0, n.jsx)(i.a, {
                    id: "workspacePolicy.error",
                    defaultMessage: "Couldn’t complete the workspace policy acknowledgment. Please try again.",
                    description: "Error inside the workspace policy acknowledgment dialog when saving the acknowledgment fails. The policy remains visible and the user can acknowledge it again."
                })
            }) : null, _[0] = R, _[1] = t) : t = _[1];
            let F = t,
                D = q ? "takeoverHeroAction" : "default";
            _[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(i.a, {
                id: "workspacePolicy.acknowledge",
                defaultMessage: "Acknowledge",
                description: "Acknowledge the displayed workspace policy and continue to Chat"
            }), _[2] = r) : r = _[2], _[3] !== W || _[4] !== q || _[5] !== D ? (s = (0, n.jsx)(c.a, {
                ref: O,
                size: D,
                autoFocus: q,
                disabled: W,
                loading: W,
                type: "submit",
                children: r
            }), _[3] = W, _[4] = q, _[5] = D, _[6] = s) : s = _[6];
            let N = s,
                B = q ? "wide" : "xxxwideTall";
            _[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                onEscapeKeyDown: k
            }, _[7] = l) : l = _[7];
            let G = q ? "scrollable" : "full";
            _[8] !== P || _[9] !== W ? (p = e => {
                e.preventDefault(), W || P()
            }, _[8] = P, _[9] = W, _[10] = p) : p = _[10];
            let z = q ? "gap-3" : void 0;
            _[11] !== q || _[12] !== E || _[13] !== C ? (g = q ? (0, n.jsx)(b, {
                name: C,
                url: E
            }) : null, _[11] = q, _[12] = E, _[13] = C, _[14] = g) : g = _[14];
            let $ = q ? "text-heading-sm leading-[26px] font-semibold sm:text-heading-md sm:leading-7" : void 0;
            return _[15] !== C ? (f = null != C ? (0, n.jsx)(i.a, {
                id: "workspacePolicy.welcome",
                defaultMessage: "Welcome to the {workspaceName} workspace",
                description: "Title of the required workspace policy acknowledgment dialog",
                values: {
                    workspaceName: C
                }
            }) : (0, n.jsx)(i.a, {
                id: "workspacePolicy.title",
                defaultMessage: "Workspace policy",
                description: "Title of the required workspace policy acknowledgment dialog when the workspace name is unavailable"
            }), _[15] = C, _[16] = f) : f = _[16], _[17] !== $ || _[18] !== f ? (w = (0, n.jsx)(u.d, {
                className: "select-none",
                title: (0, n.jsx)(d.e, {
                    className: $,
                    children: f
                })
            }), _[17] = $, _[18] = f, _[19] = w) : w = _[19], _[20] !== z || _[21] !== g || _[22] !== w ? (I = (0, n.jsxs)(u.e, {
                className: z,
                children: [g, w]
            }), _[20] = z, _[21] = g, _[22] = w, _[23] = I) : I = _[23], _[24] !== N || _[25] !== M || _[26] !== q || _[27] !== F ? (x = q ? (0, n.jsx)(v, {
                policyText: M,
                error: F,
                action: N,
                acknowledgeRef: O
            }, M) : (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)(u.e, {
                    className: "min-h-0 flex-1 overflow-y-auto",
                    children: [(0, n.jsx)(h.a, {
                        components: {
                            a: y
                        },
                        textStyle: {
                            kind: "small"
                        },
                        children: M
                    }), F]
                }), (0, n.jsx)(u.e, {
                    children: (0, n.jsx)(u.c, {
                        expandSingleButton: !1,
                        children: N
                    })
                })]
            }), _[24] = N, _[25] = M, _[26] = q, _[27] = F, _[28] = x) : x = _[28], _[29] !== p || _[30] !== I || _[31] !== x || _[32] !== G ? (S = (0, n.jsxs)(u.b, {
                as: "form",
                size: G,
                onSubmit: p,
                children: [I, x]
            }), _[29] = p, _[30] = I, _[31] = x, _[32] = G, _[33] = S) : S = _[33], _[34] !== S || _[35] !== B ? (T = (0, n.jsx)(d.b, {
                open: !0,
                shouldIgnoreClickOutside: !0,
                showDialogClose: !1,
                size: B,
                contentProps: l,
                children: S
            }), _[34] = S, _[35] = B, _[36] = T) : T = _[36], T
        }

        function k(e) {
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

        function v(e) {
            let t, r, s, l, d, f, m, w, k, b, v, I = (0, a.c)(31),
                {
                    policyText: x,
                    error: S,
                    action: T,
                    acknowledgeRef: _
                } = e,
                [C, E] = (0, o.useState)(!1),
                [M, A] = (0, o.useState)(!1),
                j = (0, o.useId)(),
                P = (0, o.useRef)(null),
                W = (0, o.useRef)(null),
                R = C ? "none" : "mask";
            I[0] !== _ || I[1] !== C ? (t = e => {
                C || (e || document.activeElement !== W.current || _.current?.focus(), A(e))
            }, I[0] = _, I[1] = C, I[2] = t) : t = I[2];
            let O = C ? "min-h-0 flex-1 overflow-y-auto" : "max-h-40 overflow-hidden";
            return I[3] !== M ? (r = () => {
                M && E(!0)
            }, I[3] = M, I[4] = r) : r = I[4], I[5] !== j || I[6] !== r ? (s = {
                id: j,
                ref: P,
                onFocusCapture: r
            }, I[5] = j, I[6] = r, I[7] = s) : s = I[7], I[8] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                a: y
            }, d = {
                kind: "inherit"
            }, I[8] = l, I[9] = d) : (l = I[8], d = I[9]), I[10] !== x ? (f = (0, n.jsx)(h.a, {
                components: l,
                textStyle: d,
                className: "[--markdown-font-size:var(--text-document)]! [--markdown-line-height:22px]!",
                children: x
            }), I[10] = x, I[11] = f) : f = I[11], I[12] !== R || I[13] !== t || I[14] !== O || I[15] !== s || I[16] !== f ? (m = (0, n.jsx)(u.e, {
                spacing: "large",
                className: "min-h-0 flex-1",
                children: (0, n.jsx)(g.a, {
                    className: "relative flex min-h-0 flex-1 flex-col",
                    fade: R,
                    onOverflowChange: t,
                    scrollClassName: O,
                    scrollProps: s,
                    children: f
                })
            }), I[12] = R, I[13] = t, I[14] = O, I[15] = s, I[16] = f, I[17] = m) : m = I[17], I[18] !== S ? (w = null != S ? (0, n.jsx)(u.e, {
                children: S
            }) : null, I[18] = S, I[19] = w) : w = I[19], I[20] !== j || I[21] !== C || I[22] !== M ? (k = M ? (0, n.jsxs)(c.a, {
                ref: W,
                className: "me-auto",
                size: "takeoverHeroAction",
                color: "ghostSecondary",
                type: "button",
                "aria-controls": j,
                "aria-expanded": C,
                onClick: () => {
                    null != P.current && (P.current.scrollTop = 0), E(!C)
                },
                children: [(0, n.jsx)(p.$b, {
                    className: C ? "size-4 rotate-180" : "size-4",
                    "aria-hidden": !0
                }), C ? (0, n.jsx)(i.a, {
                    id: "workspacePolicy.showLess",
                    defaultMessage: "Show less",
                    description: "Collapse the required workspace policy back to its short preview"
                }) : (0, n.jsx)(i.a, {
                    id: "workspacePolicy.showMore",
                    defaultMessage: "Show more",
                    description: "Expand the required workspace policy preview to read the complete message"
                })]
            }) : null, I[20] = j, I[21] = C, I[22] = M, I[23] = k) : k = I[23], I[24] !== T || I[25] !== k ? (b = (0, n.jsx)(u.e, {
                spacing: "large",
                children: (0, n.jsxs)(u.c, {
                    expandSingleButton: !1,
                    children: [k, T]
                })
            }), I[24] = T, I[25] = k, I[26] = b) : b = I[26], I[27] !== w || I[28] !== b || I[29] !== m ? (v = (0, n.jsxs)(n.Fragment, {
                children: [m, w, b]
            }), I[27] = w, I[28] = b, I[29] = m, I[30] = v) : v = I[30], v
        }

        function y(e) {
            let t, r = (0, a.c)(3),
                {
                    children: o,
                    href: i
                } = e;
            return r[0] !== o || r[1] !== i ? (t = (0, n.jsx)(f.a, {
                href: i,
                openTarget: "external-browser",
                children: o
            }), r[0] = o, r[1] = i, r[2] = t) : t = r[2], t
        }
        r.d(t, {
            a: () => w
        })
    }),
    Yco7: (function(e, t, r) {
        var n = r("iTtm");
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
            return t(o.e)?.getFeatureGate("1516934498", {
                disableExposureLog: !0
            }) ?? null
        }, e => {
            let {
                get: t,
                set: r
            } = e, n = t(o.e);
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
        r.d(t, {
            a: () => i
        }, {
            b: s
        })
    }),
    m6EW: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("xSOA"),
            i = r("iTtm"),
            s = r("oyxz"),
            l = r("Cslg"),
            c = r("OFP1"),
            d = r("YJm0"),
            u = r("zKCW"),
            p = r("ygO2"),
            g = r("OWtl"),
            f = r("CsbC");

        function h(e) {
            let t, r, s, u = (0, a.c)(7),
                {
                    surface: p
                } = e,
                h = (0, i.y)(g.a);
            u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                chat: f.g,
                work: f.c,
                codex: f.b
            }, u[0] = t) : t = u[0];
            let w = t[void 0 === p ? "chat" : p],
                k = (0, i.z)(w);
            u[1] !== w || u[2] !== h ? (r = {
                mutationFn: async () => {
                    let e = h.get(w);
                    "account-error" === e.status ? await h.queryClient.refetchQueries({
                        queryKey: h.query.getOptions(d.b, h.get(l.e)).queryKey,
                        exact: !0
                    }, {
                        throwOnError: !0
                    }) : "error" === e.status && await Promise.all([h.query.invalidate(c.k, e.accountId), null == e.identity ? void 0 : h.query.invalidate(f.h, e.identity)])
                }
            }, u[1] = w, u[2] = h, u[3] = r) : r = u[3];
            let {
                mutate: b,
                isPending: v
            } = (0, o.a)(r);
            if ("error" !== k.status && "account-error" !== k.status && !(v && ("loading" === k.status || "checking-eligibility" === k.status))) return null;
            let y = v || "error" === k.status && k.isFetching;
            return u[4] !== b || u[5] !== y ? (s = (0, n.jsx)(m, {
                pending: y,
                onRetry: b
            }), u[4] = b, u[5] = y, u[6] = s) : s = u[6], s
        }

        function m(e) {
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
        r.d(t, {
            a: () => h
        })
    }),
    qqut: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("iTtm"),
            i = r("HZfM"),
            s = r("fILU"),
            l = r("SAA4"),
            c = r("AcSY"),
            d = r("X6Vn"),
            u = r("OWtl"),
            p = r("ONXT"),
            g = r("StaQ"),
            f = r("CsbC");

        function h(e) {
            let t, r, o = (0, a.c)(2),
                {
                    isWorkConversation: i,
                    hasConversationContent: s,
                    hasLoadError: l
                } = e;
            return t = i ? "unavailable" : s ? "available" : l ? "unavailable" : "pending", o[0] !== t ? (r = (0, n.jsx)(m, {
                availability: t
            }), o[0] = t, o[1] = r) : r = o[1], r
        }

        function m(e) {
            let t, r, c, u, p, h = (0, a.c)(16),
                {
                    surface: m,
                    availability: b,
                    announcementSourceId: v
                } = e,
                y = void 0 === m ? "chat" : m,
                I = void 0 === b ? "available" : b,
                {
                    key: x
                } = (0, i.X)();
            h[0] !== I || h[1] !== y ? (t = "available" === I ? ({
                chat: f.g,
                work: f.c,
                codex: f.b
            })[y] : null, h[0] = I, h[1] = y, h[2] = t) : t = h[2];
            let S = (0, o.z)(t),
                T = (0, d.i)(g.a);
            h[3] !== S || h[4] !== T ? (r = S?.status !== "required" || T ? null : (0, n.jsx)(k, {
                ...S
            }, S.identity.accountId + S.identity.userId), h[3] = S, h[4] = T, h[5] = r) : r = h[5];
            let _ = r;
            h[6] !== v || h[7] !== x || h[8] !== y ? (c = v ?? ("chat" === y ? (0, l.c)(x) : null), h[6] = v, h[7] = x, h[8] = y, h[9] = c) : c = h[9];
            let C = c;
            if (null == C) return _;
            let E = "unavailable" === I || S?.status === "hidden" ? "ineligible" : "loading";
            return h[10] !== C || h[11] !== E ? (u = (0, n.jsx)(s.a, {
                source: "workspace-policy",
                candidate: {
                    id: C,
                    status: E,
                    render: w
                }
            }), h[10] = C, h[11] = E, h[12] = u) : u = h[12], h[13] !== _ || h[14] !== u ? (p = (0, n.jsxs)(n.Fragment, {
                children: [u, _]
            }), h[13] = _, h[14] = u, h[15] = p) : p = h[15], p
        }

        function w() {
            return null
        }

        function k(e) {
            let t, r, i, s = (0, a.c)(12),
                {
                    identity: l,
                    policyText: d
                } = e,
                g = (0, o.y)(u.a);
            s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                preview: !1
            }, s[0] = t) : t = s[0];
            let {
                data: h
            } = (0, c.m)(void 0, t), {
                isPending: m,
                isError: w
            } = (0, o.x)(f.a, l), k = h?.id === l.accountId ? h.name : void 0, b = h?.id === l.accountId ? h.profile_picture_url : void 0;
            return s[1] !== l || s[2] !== d || s[3] !== g ? (r = () => {
                let e = g.get(f.a, l);
                e.isPending || e.mutate(d)
            }, s[1] = l, s[2] = d, s[3] = g, s[4] = r) : r = s[4], s[5] !== w || s[6] !== m || s[7] !== d || s[8] !== k || s[9] !== b || s[10] !== r ? (i = (0, n.jsx)(p.a, {
                workspaceName: k,
                workspaceLogoUrl: b,
                policyText: d,
                pending: m,
                error: w,
                onAcknowledge: r
            }), s[5] = w, s[6] = m, s[7] = d, s[8] = k, s[9] = b, s[10] = r, s[11] = i) : i = s[11], i
        }

        function b(e) {
            let t, r, o = (0, a.c)(7),
                {
                    mode: s
                } = e,
                {
                    pathname: c,
                    search: d
                } = (0, i.X)();
            return o[0] !== s || o[1] !== c || o[2] !== d ? (t = (0, l.e)(c, d, s), o[0] = s, o[1] = c, o[2] = d, o[3] = t) : t = o[3], o[4] !== s || o[5] !== t ? (r = (0, n.jsx)(m, {
                surface: s,
                announcementSourceId: t
            }), o[4] = s, o[5] = t, o[6] = r) : r = o[6], r
        }
        r.d(t, {
            a: () => h,
            b: () => b,
            c: () => m
        })
    }),
    StaQ: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            o = r("iTtm"),
            i = r("zd8w"),
            s = r("Cslg"),
            l = r("AcSY"),
            c = r("OWtl"),
            d = r("ONXT"),
            u = r("CsbC");

        function p(e) {
            let t, r, p, g, f, h = (0, a.c)(17),
                {
                    identity: m,
                    policyText: w,
                    onClose: k
                } = e,
                b = (0, o.y)(c.a),
                v = (0, o.z)(s.e),
                y = (0, o.z)(s.j);
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                preview: !1
            }, h[0] = t) : t = h[0];
            let {
                data: I
            } = (0, l.m)(void 0, t), {
                isPending: x,
                isError: S
            } = (0, o.x)(u.a, m), T = v === m.accountId && y === m.userId;
            if (h[1] !== T || h[2] !== k ? (r = () => {
                    T || k()
                }, p = [T, k], h[1] = T, h[2] = k, h[3] = r, h[4] = p) : (r = h[3], p = h[4]), (0, i.useEffect)(r, p), !T) return null;
            let _ = I?.id === m.accountId ? I.name : void 0,
                C = I?.id === m.accountId ? I.profile_picture_url : void 0;
            return h[5] !== m || h[6] !== k || h[7] !== w || h[8] !== b ? (g = () => {
                let e = b.get(u.a, m);
                e.isPending || e.mutate(w, {
                    onSuccess: () => {
                        b.get(s.e) === m.accountId && b.get(s.j) === m.userId && k()
                    }
                })
            }, h[5] = m, h[6] = k, h[7] = w, h[8] = b, h[9] = g) : g = h[9], h[10] !== S || h[11] !== x || h[12] !== w || h[13] !== _ || h[14] !== C || h[15] !== g ? (f = (0, n.jsx)(d.a, {
                workspaceName: _,
                workspaceLogoUrl: C,
                policyText: w,
                pending: x,
                error: S,
                onAcknowledge: g
            }), h[10] = S, h[11] = x, h[12] = w, h[13] = _, h[14] = C, h[15] = g, h[16] = f) : f = h[16], f
        }
        r.d(t, {
            a: () => p
        })
    }),
    CsbC: (function(e, t, r) {
        r.d(t, {
            a: () => h,
            b: () => b,
            c: () => k,
            d: () => I,
            e: () => x,
            f: () => v,
            g: () => w,
            h: () => g,
            i: () => m
        });
        var n = r("mBJV"),
            a = r("iTtm"),
            o = r("Cslg"),
            i = r("OFP1"),
            s = r("Kwur"),
            l = r("yGJW"),
            c = r("OWtl"),
            d = r("rvFo"),
            u = r("Yco7");

        function p(e) {
            if (!e) return "";
            let t = 0;
            for (let r = 0; r < e.length; r++) t = (t << 5) - t + e.charCodeAt(r) | 0;
            return t.toString()
        }
        let g = (0, a.q)(c.a, (e, t) => {
                let {
                    scope: r
                } = t;
                return {
                    queryKey: "work" === e.surface ? ["workspace-policy", e.accountId, e.userId, "work"] : ["workspace-policy", e.accountId, e.userId],
                    staleTime: d.b.ONE_MINUTE,
                    refetchOnWindowFocus: !0,
                    queryFn: async () => {
                        let [t, n] = await Promise.all([s.Request.safeGet("/accounts/{account_id}/workspace_policy", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            ...y(r, e)
                        }), s.Request.safeGet("/accounts/{account_id}/workspace_policy/acknowledge", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            ...y(r, e)
                        })]);
                        return {
                            policy: t,
                            acknowledgment: n
                        }
                    }
                }
            }),
            f = (0, a.v)(c.a, e => null),
            h = (0, a.o)(c.a, (e, t) => {
                let {
                    scope: r
                } = t;
                return {
                    mutationFn: async t => {
                        if (r.get(o.e) !== e.accountId || r.get("work" === e.surface ? o.i : o.j) !== e.userId) throw Error("Workspace policy identity changed");
                        (0, l.a)(r, n.Ld, {}), await s.Request.safePost("/accounts/{account_id}/workspace_policy/acknowledge", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            requestBody: {
                                policy_hash: p(t)
                            },
                            ...y(r, e)
                        })
                    },
                    onSuccess: (t, n) => {
                        r.set(f, {
                            accountId: e.accountId,
                            userId: e.userId
                        }, p(n)), r.queryClient.invalidateQueries({
                            queryKey: ["workspace-policy", e.accountId, e.userId]
                        })
                    }
                }
            }),
            m = (0, a.d)(c.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(o.d), a = r(o.e), s = r("work" === e ? o.i : o.j);
                if (r(o.h) && (null == a || null == s) || "loading" === n.status && "personal" === n.structureAtLogin || "loaded" === n.status && "workspace" !== n.structure) return {
                    status: "hidden"
                };
                if ("loading" === n.status) return {
                    status: r(o.h) && null != a && null != s ? "checking-eligibility" : "loading"
                };
                if (null == a || null == s) return {
                    status: "loading"
                };
                if ("unavailable" === n.status) return {
                    status: "account-error"
                };
                let l = r(i.k, a);
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
                        userId: s,
                        surface: "work" === e ? "work" : void 0
                    },
                    {
                        data: d,
                        isError: u,
                        isPending: h,
                        isFetched: m,
                        isFetching: w
                    } = r(g, c);
                if (u || h && m) return {
                    status: "error",
                    accountId: a,
                    identity: c,
                    isFetching: w
                };
                if (null == d) return {
                    status: "checking-policy"
                };
                let k = d.policy.workspace_policy;
                return !k || r(f, {
                    accountId: a,
                    userId: s
                }) === p(k) || function(e, t, r, n) {
                    if ("every_login" === t) return !1;
                    let a = t ? Number(t) : void 0,
                        o = null != a && Number.isFinite(a) && a >= 0 ? a : 30;
                    return r.policy_hash === p(e) && null != r.last_acknowledged_at && n - 24 * o * 36e5 < Date.parse(r.last_acknowledged_at)
                }(k, l.data.beta_settings_str?.workspace_policy_cadence, d.acknowledgment, Date.now()) ? {
                    status: "hidden"
                } : {
                    status: "required",
                    identity: c,
                    policyText: k
                }
            }),
            w = (0, a.c)(c.a, e => {
                let {
                    get: t
                } = e;
                return t(m, "chat")
            }),
            k = (0, a.c)(c.a, e => {
                let {
                    get: t
                } = e, r = t(u.b);
                return null == r ? {
                    status: "loading"
                } : r ? t(m, "work") : {
                    status: "hidden"
                }
            }),
            b = (0, a.c)(c.a, e => {
                let {
                    get: t
                } = e, r = t(u.b);
                return !1 === r ? {
                    status: "hidden"
                } : t(o.h) && null != t(o.e) && null != t(o.i) ? "unavailable" === t(o.d).status ? {
                    status: "account-error"
                } : r ? t(m, "work") : {
                    status: "checking-eligibility"
                } : {
                    status: "loading"
                }
            }),
            v = (0, a.c)(c.a, e => {
                let {
                    get: t
                } = e, {
                    status: r
                } = t(b);
                return "hidden" !== r && "checking-eligibility" !== r && "checking-policy" !== r
            });

        function y(e, t) {
            return "work" !== t.surface ? {} : {
                expectedIdentity: {
                    accountId: t.accountId,
                    userId: t.userId
                },
                assertRequestCurrent: () => {
                    if (e.get(o.e) !== t.accountId || e.get(o.i) !== t.userId) throw new DOMException("Workspace policy identity changed", "AbortError")
                }
            }
        }
        let I = (0, a.c)(c.a, e => {
                let {
                    get: t
                } = e, {
                    status: r
                } = t(w);
                return "hidden" !== r && "checking-eligibility" !== r && "checking-policy" !== r
            }),
            x = (0, a.c)(c.a, e => {
                let {
                    get: t
                } = e;
                return "hidden" !== t(w).status
            })
    }),
    HK0a: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("Cslg"),
            o = r("OWtl"),
            i = r("Yco7"),
            s = r("CsbC");
        let l = (0, n.u)(o.a, () => crypto.randomUUID());

        function c(e) {
            return e.get(s.f) ? null : {
                origin: "codex-home",
                enrolled: (0, i.a)(e, {
                    disableExposureLog: !0
                }),
                identity: {
                    accountId: e.get(a.e),
                    userId: e.get(a.i)
                },
                authSessionId: e.get(l)
            }
        }

        function d(e) {
            let t = (0, i.a)(e);
            if (null == t) return null;
            let r = e.get(a.e),
                n = e.get(a.i);
            return t && (null == r || null == n || "hidden" !== e.get(s.i, "work").status) ? null : {
                enrolled: t,
                identity: {
                    accountId: r,
                    userId: n
                },
                authSessionId: e.get(l)
            }
        }

        function u(e, t) {
            if (!p(e, t)) throw new DOMException("Work-home workspace policy changed", "AbortError")
        }

        function p(e, t) {
            return null == t || !(e.get(l) !== t.authSessionId || e.get(a.e) !== t.identity.accountId || e.get(a.i) !== t.identity.userId || "codex-home" !== t.origin && t.enrolled && "hidden" !== e.get(s.i, "work").status)
        }
        r.d(t, {
            a: () => u,
            b: () => c,
            c: () => d,
            d: () => p
        })
    }),
    KPsy: (function(e, t, r) {
        var n = r("o0PZ"),
            a = r("E8Sp");

        function o(e, t, r) {
            (0, a.c)(e, (0, n._d)(t.clientThreadId), null == r ? void 0 : {
                state: r
            })
        }
        r.d(t, {
            a: () => o
        })
    }),
    kUXb: (function(e, t, r) {
        r.d(t, {
            a: () => K
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("UUMA"),
            i = r("irkb"),
            s = r("HVBu"),
            l = r.n(s),
            c = r("iTtm"),
            d = r("o0PZ"),
            u = r("zd8w"),
            p = r("Wf1j"),
            g = r("toag"),
            f = r("z0li"),
            h = r("NVPY"),
            m = r("odKs"),
            w = r("d9i7"),
            k = r("SGsN"),
            b = r("kfg4"),
            v = r("rDNP"),
            y = r("yGJW"),
            I = r("s37w"),
            x = r("OWtl"),
            S = r("ndjw"),
            T = r("kl6F"),
            _ = r("Tsvt"),
            C = r("WFY2"),
            E = r("HK0a"),
            M = r("hZmJ"),
            A = r("t162"),
            j = r("Dgwo"),
            P = r("HScd"),
            W = r("xrGx"),
            R = r("QX7Q"),
            O = r("OCQL"),
            q = r("QYK3"),
            F = r("hgea"),
            D = r("QVfH");
        async function N(e) {
            var t, r, n;
            let a, o, {
                scope: i,
                entry: s,
                threadGoalObjective: l,
                workspaceRoot: c,
                onSettled: u,
                assertRequestCurrent: p
            } = e;
            if (null != s.conversationStartResult) return s.conversationStartResult;
            if ("worktree-ready" !== s.phase) throw Error("Worktree preparation must finish before creating a task.");
            let g = "worktree-ready" !== (t = s).phase || "source-workspace" === t.executionTarget ? null : {
                id: `${t.id}:${t.attempt}`,
                worktreeOutputText: t.worktreeOutputText,
                setup: null == t.localEnvironmentConfigPath ? null : {
                    outcome: null == t.errorMessage ? "completed" : "skipped",
                    outputText: t.setupOutputText
                }
            };
            if ("fork-conversation" === s.launchMode) {
                let e, t = [c, ...(0, d.vg)(s.sourceWorkspaceRoots)],
                    r = (e = null != s.targetTurnId ? await (0, P.a)(i, s.hostId, {
                        sourceConversationId: s.sourceConversationId,
                        targetTurnId: s.targetTurnId,
                        clientThreadId: s.clientThreadId,
                        cwd: c,
                        projectAssignment: s.projectAssignment ?? null,
                        workspaceRoots: t,
                        collaborationMode: s.sourceCollaborationMode,
                        threadSource: s.threadSource
                    }) : await (0, P.a)(i, s.hostId, {
                        sourceConversationId: s.sourceConversationId,
                        clientThreadId: s.clientThreadId,
                        cwd: c,
                        projectAssignment: s.projectAssignment ?? null,
                        workspaceRoots: t,
                        collaborationMode: s.sourceCollaborationMode,
                        threadSource: s.threadSource
                    })).conversationId;
                return "failed" === e.synchronization.status ? {
                    status: "created",
                    conversationId: r,
                    firstTurn: {
                        status: "not-started",
                        message: e.synchronization.message
                    }
                } : (null != g && await (0, j.b)(i, s.hostId).addWorktreeInitSyntheticTurn(r, g), {
                    status: "created",
                    conversationId: r,
                    firstTurn: {
                        status: "not-requested"
                    }
                })
            }
            let h = (0, O.b)(i, s.openingPromptForHistory),
                m = G(s),
                w = null == l ? s.startConversationParamsInput : {
                    ...s.startConversationParamsInput,
                    fileAttachments: function(e) {
                        if ("durable" === e.startConversationParamsInput.mode) return e.startConversationParamsInput.fileAttachments;
                        let t = new Set(e.threadGoalDraft?.pastedTextAttachments.flatMap(e => {
                            let {
                                file: t
                            } = e;
                            return null == t ? [] : [t.path]
                        }));
                        return e.startConversationParamsInput.fileAttachments.filter(e => !t.has(e.path))
                    }(s),
                    input: (r = s.startConversationParamsInput.input, n = (0, M.a)(l), a = !1, r.map(e => a || "text" !== e.type ? e : (a = !0, {
                        ...e,
                        text: n
                    })))
                },
                k = (0, D.c)(i, s.id),
                b = async e => {
                    "created" === e.status && "accepted" === e.firstTurn.status && (h(e.conversationId), (0, F.a)(i, s.composerDraft?.context.sharedThreadAttributions, {
                        threadId: e.conversationId,
                        turnId: e.firstTurn.turnId
                    }));
                    try {
                        await k?.onResult(e)
                    } catch (e) {
                        C.a.warning("Failed to update the pending worktree submission", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        })
                    }
                };
            try {
                p?.(), o = await (0, f.b)(i, s.threadStartHostId ?? s.hostId, {
                    ...(0, R.a)({
                        ...w,
                        workspaceRoots: [c, ...(0, d.vg)(w.workspaceRoots)],
                        cwd: c
                    }),
                    initialTitle: m || s.label.trim() || void 0,
                    clientUserMessageId: s.composerDraft?.id,
                    restoreMessage: s.composerDraft,
                    skipAutoTitleGeneration: m.length > 0
                }, {
                    clientThreadId: s.clientThreadId,
                    assertRequestCurrent: p,
                    afterConversationCreated: k?.afterConversationCreated,
                    onSettled: async e => {
                        await b(e), await u?.(e)
                    },
                    worktreeInit: g ?? void 0
                })
            } catch (e) {
                throw await b({
                    status: "failed",
                    message: e instanceof Error ? e.message : String(e)
                }), e
            }
            return await b(o), o
        }
        async function B(e) {
            let {
                scope: t,
                entry: r,
                conversationId: n,
                hostConfig: a,
                threadGoalObjective: o
            } = e, i = null == r.initialThreadTitle && r.labelEdited, s = G(r);
            if (s.length > 0 && (await (0, j.b)(t, a.id).setThreadTitle(n, s, "start-conversation" === r.launchMode ? {
                    expectedTitle: (0, A.c)(s, 60)
                } : {
                    onlyIfUntitled: i
                }), (0, W.a)(t, a.id, n)), null != r.worktreeGitRoot) try {
                await (0, q.a)().setOwnerThread({
                    hostId: a.id,
                    worktree: (0, d.Qe)(r.worktreeGitRoot),
                    conversationId: n
                })
            } catch (e) {
                C.a.warning("Worktree created and conversation started, but failed to set worktree owner metadata: {}", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            }
            "start-conversation" === r.launchMode && null != o && await (0, j.b)(t, r.threadStartHostId ?? a.id).setThreadGoal(n, {
                appendTranscriptItem: !1,
                objective: o
            })
        }

        function G(e) {
            return (e.labelEdited ? e.label : e.initialThreadTitle ?? "").trim()
        }
        var z = r("Vhua"),
            $ = r("o27H");

        function K() {
            let e, t, r, o = (0, a.c)(24),
                s = (0, c.y)(x.a),
                h = (0, i.c)(),
                m = (0, $.i)(),
                w = (0, D.g)(),
                {
                    dismissPendingWorktree: y
                } = (0, $.h)(),
                {
                    beginPendingWorktreeConversationStart: M,
                    failPendingWorktreeConversationStart: A,
                    retainPendingWorktreeConversationStart: j,
                    removePendingWorktreeConversationStart: P,
                    succeedPendingWorktreeConversationStart: W
                } = (0, D.f)(),
                R = (0, I.a)(),
                O = (0, p.a)();
            o[0] !== y || o[1] !== A || o[2] !== O || o[3] !== m || o[4] !== h || o[5] !== R || o[6] !== P || o[7] !== j || o[8] !== s || o[9] !== W ? (e = async e => {
                let {
                    pendingWorktreeId: t,
                    workspaceRoot: r
                } = e, a = m.find(e => e.id === t);
                if (null == a) return void P(t);
                let o = null != (0, D.c)(s, a.id),
                    i = e => {
                        let t = s.get(z.a, a.clientThreadId ?? null);
                        t?.isPinned && null != a.clientThreadId && (0, _.a)(s, a.clientThreadId, !0, t.pinnedBeforeThreadId), W(a.id, e), y(a.id)
                    },
                    c = null,
                    u = null,
                    p = a.hostId,
                    w = !1,
                    I = "start-conversation" === a.launchMode ? a.composerDraft?.context.workHomePolicyAcceptance : void 0,
                    x = null == a.conversationStartResult && null != I ? () => (0, E.a)(s, I) : void 0,
                    M = l()(async () => {
                        null != c && await (0, v.a)({
                            scope: s,
                            hostId: p,
                            materialized: c
                        })
                    });
                try {
                    x?.();
                    let e = s.get(S.g, s.get(g.w)),
                        {
                            clientThreadId: n,
                            hostConfig: l
                        } = function(e, t, r) {
                            if (null == e.clientThreadId) throw Error("Pending worktree thread has no client thread id");
                            let n = function(e, t, r) {
                                if (null == e || e.hostId === t.id) return t;
                                let n = r?.find(t => t.hostId === e.hostId);
                                return null == n ? null : (0, d.Gj)(n)
                            }(e, t, r);
                            if (null == n) throw Error(`Pending worktree host ${e.hostId} is unavailable`);
                            return {
                                clientThreadId: e.clientThreadId,
                                hostConfig: n
                            }
                        }(a, e, R);
                    p = "start-conversation" === a.launchMode && "durable" === a.startConversationParamsInput.mode ? d.Ub : l.id, c = "start-conversation" === a.launchMode && null != a.threadGoalDraft ? await (0, v.c)({
                        scope: s,
                        draft: a.threadGoalDraft,
                        hostId: p,
                        assertRequestCurrent: x
                    }) : null;
                    let m = c?.objective;
                    x?.();
                    let y = await N({
                        scope: s,
                        entry: a,
                        threadGoalObjective: m,
                        workspaceRoot: r,
                        assertRequestCurrent: x,
                        onSettled: async e => {
                            w && "failed" === e.status && await M(), (0, $.d)(s, a.id, "failed" === e.status ? null : e), w && ("failed" === e.status ? A(a.id) : "created" === e.status && ((0, T.b)(s, {
                                clientThreadId: n,
                                conversationId: e.conversationId
                            }), (0, b.c)(s, {
                                pendingWorktreeId: t,
                                targetConversationId: e.conversationId,
                                targetWorkspaceRoot: r
                            })))
                        }
                    });
                    if ((0, $.d)(s, a.id, y), "outcome-unknown" === y.status) {
                        w = !0, j(a.id), s.get(k.f).danger((0, f.a)(s, y)?.message, {
                            errorAnalytics: {
                                toastId: "pendingWorktreeConversationStarter.startPendingWorktreeConversationEvent"
                            }
                        });
                        return
                    }
                    u = y.conversationId, (0, T.b)(s, {
                        clientThreadId: n,
                        conversationId: u
                    }), (0, b.c)(s, {
                        pendingWorktreeId: t,
                        targetConversationId: u,
                        targetWorkspaceRoot: r
                    });
                    let I = (0, f.a)(s, y);
                    if (null != I && (o && "outcome-unknown" !== y.firstTurn.status || s.get(k.f).danger(I.message, {
                            errorAnalytics: {
                                toastId: "pendingWorktreeConversationStarter.startPendingWorktreeConversationEvent"
                            }
                        }), "outcome-unknown" === y.firstTurn.status)) {
                        w = !0, j(a.id);
                        return
                    }
                    await Promise.all([B({
                        scope: s,
                        entry: a,
                        conversationId: u,
                        hostConfig: l,
                        threadGoalObjective: m
                    }), H({
                        scope: s,
                        conversationId: u,
                        heartbeatAutomation: a.heartbeatAutomation,
                        intl: O,
                        queryClient: h
                    })]), "start-conversation" === a.launchMode && null != a.threadGoalDraft && await (0, v.b)({
                        scope: s,
                        draft: a.threadGoalDraft,
                        fallbackHostId: l.id
                    }), i(u)
                } catch (e) {
                    if (null != u) {
                        C.a.error("Worktree conversation started with incomplete metadata", {
                            safe: {
                                conversationId: u
                            },
                            sensitive: {
                                error: e
                            }
                        }), i(u);
                        return
                    }
                    if (await M(), A(t), null != I && e instanceof Error && "AbortError" === e.name || (C.a.error("Error starting worktree conversation", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        }), o)) return;
                    s.get(k.f).danger(O.formatMessage({
                        id: "composer.localTaskError.v2",
                        defaultMessage: "Error starting chat{br}{error}",
                        description: "Toast text shown when we failed to start a task"
                    }, {
                        br: (0, n.jsx)("br", {}),
                        error: (0, d.Ii)(e)
                    }), {
                        errorAnalytics: {
                            toastId: "composer.localTaskError.v2"
                        }
                    })
                }
            }, o[0] = y, o[1] = A, o[2] = O, o[3] = m, o[4] = h, o[5] = R, o[6] = P, o[7] = j, o[8] = s, o[9] = W, o[10] = e) : e = o[10];
            let q = (0, u.useEffectEvent)(e);
            return o[11] !== M || o[12] !== y || o[13] !== w || o[14] !== m || o[15] !== q ? (t = () => {
                w.forEach(e => {
                    if ("succeeded" === e.state) return void y(e.pendingWorktreeId);
                    let t = m.find(t => t.id === e.pendingWorktreeId);
                    "incomplete" === e.state && t?.conversationStartResult?.status === "created" && "outcome-unknown" !== t.conversationStartResult.firstTurn.status ? (0, D.a)(t.id) : "waiting" !== e.state || t?.phase !== "worktree-ready" || null == t.worktreeWorkspaceRoot || M(t.id) && q({
                        pendingWorktreeId: t.id,
                        workspaceRoot: t.worktreeWorkspaceRoot
                    })
                })
            }, o[11] = M, o[12] = y, o[13] = w, o[14] = m, o[15] = q, o[16] = t) : t = o[16], o[17] !== M || o[18] !== y || o[19] !== w || o[20] !== m || o[21] !== R || o[22] !== s ? (r = [M, y, w, m, R, s], o[17] = M, o[18] = y, o[19] = w, o[20] = m, o[21] = R, o[22] = s, o[23] = r) : r = o[23], (0, u.useEffect)(t, r), null
        }
        async function H(e) {
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
                } = await w.a.create(s);
                (0, y.a)(t, o.CodexAutomationEvent, {
                    action: o.CodexAutomationAction.CODEX_AUTOMATION_ACTION_CREATED,
                    source: o.CodexAutomationSource.CODEX_AUTOMATION_SOURCE_PENDING_WORKTREE,
                    success: !0,
                    ...(0, m.h)(e)
                }), i.invalidateQueries({
                    queryKey: h.a
                })
            } catch (e) {
                (0, y.a)(t, o.CodexAutomationEvent, {
                    action: o.CodexAutomationAction.CODEX_AUTOMATION_ACTION_CREATED,
                    source: o.CodexAutomationSource.CODEX_AUTOMATION_SOURCE_PENDING_WORKTREE,
                    success: !1,
                    ...(0, m.h)(s),
                    failureReason: o.CodexAutomationFailureReason.CODEX_AUTOMATION_FAILURE_REASON_HOST_ERROR
                }), C.a.error("Error creating pending worktree heartbeat automation", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                }), t.get(k.f).danger(a.formatMessage({
                    id: "worktreeInitV2.heartbeatAutomationError",
                    defaultMessage: "Started chat, but could not create the heartbeat",
                    description: "Toast shown when a worktree conversation starts but creating its heartbeat automation fails"
                }), {
                    errorAnalytics: {
                        toastId: "worktreeInitV2.heartbeatAutomationError"
                    }
                })
            }
        }
    }),
    QVfH: (function(e, t, r) {
        var n = r("iTtm"),
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
            g = p,
            f = (0, n.i)(i.a, e => d.get(e), (e, t) => {
                let {
                    set: r
                } = t;
                return r(d.get(e)), I(() => r(d.get(e)))
            });

        function h(e, t, r) {
            let n = e.get(l),
                a = () => n.get(t) === o,
                o = {
                    afterConversationCreated: e => a() ? r.afterConversationCreated(e) : void 0,
                    onResult: e => a() ? r.onResult(e) : void 0
                };
            return n.set(t, o), () => {
                a() && n.delete(t)
            }
        }

        function m(e, t) {
            return e.get(l).get(t)
        }

        function w() {
            return (0, a.useSyncExternalStore)(I, x, k)
        }

        function k() {
            return p
        }

        function b() {
            return {
                addPendingWorktreeConversationStart: v,
                beginPendingWorktreeConversationStart: e => d.get(e)?.state === "waiting" && (d.set(e, {
                    state: "starting"
                }), S(), !0),
                failPendingWorktreeConversationStart: e => {
                    d.has(e) && (d.set(e, {
                        state: "failed"
                    }), S())
                },
                retainPendingWorktreeConversationStart: e => {
                    d.set(e, {
                        state: "incomplete"
                    }), S()
                },
                succeedPendingWorktreeConversationStart: (e, t) => {
                    d.has(e) && (d.set(e, {
                        state: "succeeded",
                        conversationId: t
                    }), S())
                },
                retryPendingWorktreeConversationStart: e => {
                    d.has(e) && d.get(e)?.state !== "incomplete" && (d.set(e, {
                        state: "waiting"
                    }), S())
                },
                removePendingWorktreeConversationStart: e => {
                    d.delete(e) && S()
                }
            }
        }

        function v(e) {
            d.set(e, {
                state: "waiting"
            }), S()
        }

        function y(e, t) {
            for (let [r] of(e.set(u, e => [...e.filter(e => e !== t), t].slice(-128)), d.set(t, {
                    state: "cancelled"
                }), [...d].filter(e => {
                    let [, t] = e;
                    return "cancelled" === t.state
                }).slice(0, -128))) d.delete(r);
            S()
        }

        function I(e) {
            return c.add(e), () => {
                c.delete(e)
            }
        }

        function x() {
            return g
        }

        function S() {
            g = Array.from(d, e => {
                let [t, r] = e;
                return {
                    pendingWorktreeId: t,
                    ...r
                }
            }), c.forEach(e => {
                e()
            })
        }
        r.d(t, {
            a: () => v,
            b: () => y,
            c: () => m,
            e: () => h,
            f: () => b,
            g: () => w
        }, {
            d: f
        })
    }),
    Vhua: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("OWtl"),
            o = r("tSEg"),
            i = r("kl6F"),
            s = r("Fhw2");
        let l = (0, n.d)(a.a, (e, t) => {
                var r, n;
                let {
                    get: a
                } = t;
                if (null == e) return null;
                let o = a(s.a);
                return void 0 === o ? void 0 : (r = o, n = e, r.find(e => e.clientThreadId === n) ?? null)
            }),
            c = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(l, e)?.hostId
            }),
            d = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(l, e)?.id
            }),
            u = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(l, e)?.isPinned
            }),
            p = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(l, e)?.sourceWorkspaceRoot
            }),
            g = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(l, e);
                return null == n ? n : n.labelEdited ? n.label : n.initialThreadTitle ?? n.label
            }),
            f = (0, n.c)(o.a, e => {
                let {
                    get: t,
                    scope: r
                } = e;
                if ("client-local-thread" !== r.value.routeKind) return "ready";
                let {
                    clientThreadId: n
                } = r.value;
                if (null != t(i.z, n)) return "ready";
                let a = t(l, n);
                return void 0 === a ? "provisioning" : null == a && null != r.value.persistentWorkspace ? "ready" : a?.phase === "failed" ? "failed" : "provisioning"
            });
        r.d(t, {}, {
            a: l,
            b: c,
            c: d,
            d: u,
            e: p,
            f: g,
            g: f
        })
    }),
    f3xH: (function(e, t, r) {
        var n = r("o0PZ");

        function a(e) {
            let {
                isExistingThread: t,
                executionHostId: r,
                activeLocalProjectId: n,
                existingAssignment: a,
                homeRemoteProject: i,
                selectedRemoteProject: s
            } = e;
            if (t) return o({
                type: "assignment",
                assignment: a,
                executionHostId: r
            });
            if (null != n || "local" === r) return o({
                type: "local-project",
                projectId: n
            });
            let l = i ?? s;
            if (l?.hostId === r) return o({
                type: "remote-project",
                projectId: l.id,
                hostId: l.hostId
            })
        }

        function o(e) {
            switch (e.type) {
                case "local-project":
                    if (null == e.projectId || e.projectId === n.bd) return;
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
        r.d(t, {
            a: () => a,
            b: () => o
        })
    }),
    Fhw2: (function(e, t, r) {
        r.d(t, {
            a: () => f,
            b: () => h
        });
        var n = r("SZCv"),
            a = r.n(n),
            o = r("iTtm"),
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
            g = (0, o.h)(c.a, () => void 0, e => {
                let t, {
                        set: r
                    } = e,
                    n = l.appServices?.managedWorktrees?.pending;
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
            f = (0, o.c)(c.a, e => {
                let {
                    get: t
                } = e;
                return t(l.appServices?.managedWorktrees?.pending == null ? p : g)
            });

        function h(e, t) {
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
            a = r("iTtm"),
            o = r("o0PZ"),
            i = r("Ci8z"),
            s = r("rDNP"),
            l = r("ejcW"),
            c = r("GaA7"),
            d = r("OWtl"),
            u = r("ndjw"),
            p = r("ADAj"),
            g = r("kfGJ"),
            f = r("OMIV"),
            h = r("WFY2"),
            m = r("yiHb"),
            w = r("QVfH"),
            k = r("Fhw2");
        let b = [],
            v = ["[info] Refreshing upstream before creating worktree", "[info] Upstream refreshed", "[info] Continuing without updating", "[warning] Git authentication failed; sign in again before retrying", "[warning] Could not refresh upstream; using cached Git state"],
            y = new Map,
            I = (0, a.u)(d.a, !1, {
                onMount: (e, t) => {
                    for (let r of (e(!0), t.get(k.a) ?? [])) "worktree-ready" === r.phase && (0, w.a)(r.id)
                }
            });

        function x(e) {
            let t = (0, i.a)();
            return `${e}:${t}`
        }

        function S(e) {
            let t = e.lastIndexOf(":");
            return t <= 0 || t === e.length - 1 ? g.a : e.slice(0, t)
        }

        function T(e) {
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

        function _() {
            return (0, a.z)(k.a) ?? b
        }

        function C() {
            let e, t, r, o, i, p, g, f, h, b, v, _, C, j = (0, n.c)(41),
                O = (0, a.y)(d.a);
            (0, a.z)(I), j[0] !== O ? (e = e => O.get(k.a)?.find(t => t.id === e), j[0] = O, j[1] = e) : e = j[1];
            let F = e;
            j[2] !== O ? (t = e => {
                (0, k.b)(O, e)
            }, j[2] = O, j[3] = t) : t = j[3];
            let D = t,
                {
                    removePendingWorktreeConversationStart: N,
                    retryPendingWorktreeConversationStart: z
                } = (0, w.f)();
            j[4] !== O || j[5] !== D ? (r = e => {
                let t = x(e.hostId);
                if (c.appServices?.managedWorktrees?.pending != null) return B(O, t, e);
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
                return (0, w.a)(t), D(e => [...void 0 === e ? [] : e, r]), M(O, r), t
            }, j[4] = O, j[5] = D, j[6] = r) : r = j[6];
            let $ = r;
            j[7] !== O ? (o = (e, t) => {
                P(O, e, t)
            }, j[7] = O, j[8] = o) : o = j[8];
            let K = o;
            j[9] !== O ? (i = (e, t) => {
                R(O, e, t)
            }, j[9] = O, j[10] = i) : i = j[10];
            let H = i;
            j[11] !== O ? (p = (e, t) => {
                W(O, e, t)
            }, j[11] = O, j[12] = p) : p = j[12];
            let L = p;
            j[13] !== O ? (g = e => {
                q(O, e, [{
                    type: "needsAttention",
                    needsAttention: !1
                }])
            }, j[13] = O, j[14] = g) : g = j[14];
            let Q = g;
            j[15] !== F || j[16] !== z || j[17] !== O || j[18] !== D ? (f = e => {
                if (F(e)?.conversationStartResult == null) {
                    if (z(e), c.appServices?.managedWorktrees?.pending == null) {
                        let t = F(e);
                        if (D(t => (void 0 === t ? [] : t).map(t => t.id === e ? {
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
                            let r = y.get(e);
                            null != r ? (r.cleanupRequested = !0, r.abortController.abort()) : "failed" === t.phase && null != t.worktreeGitRoot && A(O, t, t.worktreeGitRoot), M(O, t)
                        }
                        return
                    }
                    c.appServices.managedWorktrees.pending.retry({
                        hostId: S(e),
                        id: e
                    }).catch(G)
                }
            }, j[15] = F, j[16] = z, j[17] = O, j[18] = D, j[19] = f) : f = j[19];
            let U = f;
            j[20] !== D ? (h = e => {
                ((0, w.a)(e), c.appServices?.managedWorktrees?.pending == null) ? D(t => (void 0 === t ? [] : t).map(t => t.id === e && "failed" === t.phase && null != t.worktreeGitRoot && null != t.worktreeWorkspaceRoot ? {
                    ...t,
                    phase: "worktree-ready",
                    needsAttention: !1
                } : t)): c.appServices.managedWorktrees.pending.continueWithoutSetup({
                    hostId: S(e),
                    id: e
                }).catch(G)
            }, j[20] = D, j[21] = h) : h = j[21];
            let V = h;
            j[22] !== O ? (b = e => {
                (0, m.a)("git").request({
                    method: "cancel-worktree-upstream-refresh",
                    params: {
                        hostConfig: O.get(u.g, S(e)),
                        operationSource: "worktree_pending_create",
                        pendingWorktreeId: e
                    }
                }).catch(E)
            }, j[22] = O, j[23] = b) : b = j[23];
            let Z = b;
            if (j[24] !== F || j[25] !== N || j[26] !== O || j[27] !== D) {
                function Y(e) {
                    let t = F(e);
                    t?.launchMode === "start-conversation" && null != t.threadGoalDraft && (0, s.b)({
                        scope: O,
                        draft: t.threadGoalDraft,
                        fallbackHostId: t.hostId
                    })
                }
                v = (e, t) => {
                    let {
                        continueLocally: r,
                        restoreDraft: n
                    } = void 0 === t ? {} : t;
                    if (void 0 !== r && r) {
                        let t = F(e);
                        if (null == t || null != t.conversationStartResult || !T(t.phase)) return;
                        if (c.appServices?.managedWorktrees?.pending != null) return void c.appServices.managedWorktrees.pending.cancel({
                            hostId: S(e),
                            id: e,
                            continueLocally: !0
                        }).catch(G);
                        let r = y.get(e);
                        return null != r ? (r.cleanupRequested = !0, r.abortController.abort()) : null != t.worktreeGitRoot && A(O, t, t.worktreeGitRoot), void D(t => (void 0 === t ? [] : t).map(t => t.id === e ? {
                            ...t,
                            executionTarget: "source-workspace",
                            phase: "worktree-ready",
                            worktreeWorkspaceRoot: t.sourceWorkspaceRoot,
                            worktreeGitRoot: null,
                            errorMessage: null,
                            needsAttention: !1
                        } : t))
                    }
                    let a = F(e);
                    if (a?.launchMode === "start-conversation" && (0, l.d)(O, a.clientThreadId), null != a && null == a.conversationStartResult ? (0, w.b)(O, e) : N(e), void 0 !== n && n || Y(e), c.appServices?.managedWorktrees?.pending == null) {
                        {
                            let t = y.get(e);
                            null != t ? (t.cleanupRequested = !0, t.abortController.abort()) : a?.worktreeGitRoot != null && A(O, a, a.worktreeGitRoot)
                        }
                        D(t => (void 0 === t ? [] : t).filter(t => t.id !== e));
                        return
                    }
                    c.appServices.managedWorktrees.pending.cancel({
                        hostId: S(e),
                        id: e
                    }).catch(G)
                }, _ = e => {
                    if (N(e), Y(e), c.appServices?.managedWorktrees?.pending == null) {
                        {
                            let t = F(e),
                                r = y.get(e);
                            null != r ? (r.cleanupRequested = t?.phase === "failed", r.abortController.abort()) : t?.phase === "failed" && null != t.worktreeGitRoot && A(O, t, t.worktreeGitRoot)
                        }
                        D(t => (void 0 === t ? [] : t).filter(t => t.id !== e));
                        return
                    }
                    c.appServices.managedWorktrees.pending.dismiss({
                        hostId: S(e),
                        id: e
                    }).catch(G)
                }, j[24] = F, j[25] = N, j[26] = O, j[27] = D, j[28] = v, j[29] = _
            } else v = j[28], _ = j[29];
            return j[30] !== v || j[31] !== Q || j[32] !== V || j[33] !== Z || j[34] !== $ || j[35] !== _ || j[36] !== K || j[37] !== U || j[38] !== H || j[39] !== L ? (C = {
                createPendingWorktree: $,
                renamePendingWorktree: K,
                setPendingWorktreePinned: H,
                setPendingWorktreePinnedBeforeThreadId: L,
                clearPendingWorktreeAttention: Q,
                retryPendingWorktree: U,
                continuePendingWorktree: V,
                continuePendingWorktreeWithoutUpdating: Z,
                cancelPendingWorktree: v,
                dismissPendingWorktree: _
            }, j[30] = v, j[31] = Q, j[32] = V, j[33] = Z, j[34] = $, j[35] = _, j[36] = K, j[37] = U, j[38] = H, j[39] = L, j[40] = C) : C = j[40], C
        }

        function E(e) {
            h.a.warning("Failed to cancel an upstream worktree refresh", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        async function M(e, t) {
            let r = (0, m.a)("git"),
                n = (0, i.a)(),
                a = new TextDecoder,
                s = {
                    abortController: new AbortController,
                    cleanupRequested: !1,
                    worktreeGitRoot: null
                };
            y.set(t.id, s), j(e, t.id, e => ({
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
                        a = v.filter(e => r.includes(e));
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
                let a = e.get(u.g, t.hostId),
                    i = await r.request({
                        method: "create-worktree",
                        params: {
                            hostConfig: a,
                            operationSource: "worktree_pending_create",
                            cwd: (0, o.Pe)(t.sourceWorkspaceRoot),
                            startingState: t.startingState,
                            upstreamRefreshMode: (0, p.b)(e.get, o.gk.upstreamRefreshMode),
                            localEnvironmentConfigPath: t.localEnvironmentConfigPath,
                            streamId: n,
                            pendingWorktreeId: t.id,
                            allowSetupFailure: !0,
                            useWorkspaceDir: (0, f.a)(e, "4059753351")
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
                y.get(t.id) === s && y.delete(t.id), s.cleanupRequested && null != s.worktreeGitRoot && await A(e, t, s.worktreeGitRoot)
            }
        }
        async function A(e, t, r) {
            try {
                let n = await (0, m.a)("git").request({
                    method: "delete-worktree",
                    params: {
                        hostConfig: e.get(u.g, t.hostId),
                        worktree: (0, o.Qe)(r),
                        force: !0,
                        reason: "new-branch-cleanup",
                        operationSource: "worktree_new_branch_cleanup"
                    }
                });
                n.success || h.a.info("Browser worktree cleanup did not complete", {
                    safe: {
                        reason: n.reason
                    },
                    sensitive: {}
                })
            } catch (e) {
                h.a.warning("Failed to clean up a browser worktree", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            }
        }

        function j(e, t, r) {
            (0, k.b)(e, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map(e => e.id === t ? r(e) : e)
            })
        }

        function P(e, t, r) {
            q(e, t, [{
                type: "label",
                label: r
            }, {
                type: "labelEdited",
                labelEdited: !0
            }])
        }

        function W(e, t, r) {
            q(e, t, [{
                type: "pinnedBeforeThreadId",
                beforeThreadId: r
            }])
        }

        function R(e, t, r) {
            q(e, t, r ? [{
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

        function O(e, t, r) {
            q(e, t, [{
                type: "conversationStartResult",
                result: r
            }])
        }

        function q(e, t, r) {
            if (0 !== r.length) {
                if (c.appServices?.managedWorktrees?.pending == null) return void(0, k.b)(e, function() {
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
                c.appServices.managedWorktrees.pending.updateMetadata({
                    hostId: S(t),
                    id: t,
                    updates: r
                }).catch(G)
            }
        }

        function F(e) {
            return B(void 0, x(e.hostId), e)
        }

        function D(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, o.Ke)();
            return {
                clientThreadId: r,
                pendingWorktreeId: e({
                    ...t,
                    clientThreadId: r
                })
            }
        }

        function N(e) {
            return D(F, e)
        }

        function B(e, t, r) {
            if (c.appServices?.managedWorktrees?.pending == null) throw Error("Worktree app actions require the ChatGPT desktop app");
            let n = {
                id: t,
                ...r
            };
            return "start-conversation" === n.launchMode && (n.openingPromptForHistory = structuredClone(n.openingPromptForHistory)), (0, w.a)(t), c.appServices.managedWorktrees.pending.create(n).catch(async r => {
                G(r), null != e && await (0, w.c)(e, t)?.onResult({
                    status: "outcome-unknown",
                    requestId: t
                })
            }).catch(G), t
        }

        function G(e) {
            h.a.warning("Pending worktree action failed", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        r.d(t, {
            a: () => N,
            b: () => D,
            c: () => T,
            d: () => O,
            e: () => P,
            f: () => R,
            g: () => W,
            h: () => C,
            i: () => _
        })
    }),
    ZYQR: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("o0PZ");
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
            if (e === l.a) return r(s.i) ? (0, a.rg)({
                [a.qh.worktreeRoot.key]: (0, s.b)(r, a.qh.worktreeRoot),
                [a.gk.autoCleanupEnabled.key]: (0, s.b)(r, a.gk.autoCleanupEnabled),
                [a.gk.keepCount.key]: (0, s.b)(r, a.gk.keepCount)
            }) : null;
            let n = r(o.w, e).data;
            return n?.configReadSucceeded === !0 ? (0, a.rg)(n.config.desktop) : null
        });
        r.d(t, {}, {
            a: c
        })
    }),
    TurB: (function(e, t, r) {
        var n = r("nuXe"),
            a = r.n(n),
            o = r("iTtm"),
            i = r("o0PZ"),
            s = r("XnTj"),
            l = r("M9WK"),
            c = r("toag"),
            d = r("J43j"),
            u = r("mNN5"),
            p = r("GaA7"),
            g = r("OWtl"),
            f = r("ndjw"),
            h = r("V0vl"),
            m = r("rvFo"),
            w = r("yiHb"),
            k = r("psi4"),
            b = r("dg06");
        let v = {
                kind: "available"
            },
            y = {
                kind: "unavailable",
                reason: "inspection-failed",
                worktreePath: null
            },
            I = "worktree_restore_required",
            x = "worktree_status_unavailable",
            S = (0, o.q)(g.a, (e, t) => {
                let {
                    conversationId: r,
                    cwd: n,
                    hostId: o
                } = e, {
                    get: c
                } = t, d = (0, b.b)(o);
                if (null == n) return {
                    queryFn: async () => v,
                    queryKey: [...d, "available", null],
                    networkMode: "always",
                    staleTime: m.b.FIVE_SECONDS
                };
                let g = c(f.d, {
                    hostId: o
                });
                if (null == g.data) return {
                    enabled: g.isError,
                    queryFn: async () => y,
                    queryKey: [...d, g.isError ? "codex-home-error" : "codex-home-loading", n],
                    staleTime: m.b.FIVE_SECONDS
                };
                if (!(0, i.Oh)(n, g.data.codexHome, g.data.worktreesSegment)) return {
                    queryFn: async () => v,
                    queryKey: [...d, "available", n],
                    networkMode: "always",
                    staleTime: m.b.FIVE_SECONDS
                };
                let I = (0, k.c)(n, (0, l.b)(g.data));
                if (null == I) return {
                    queryFn: async () => v,
                    queryKey: [...d, "available-unmanaged-worktree", n],
                    networkMode: "always",
                    staleTime: m.b.FIVE_SECONDS
                };
                let x = c(f.g, o),
                    S = c(h.f, r),
                    T = S?.pending?.cwd === n ? S.pending.projectSources : S?.applied?.cwd === n ? S.applied.projectSources : null,
                    _ = c(f.j, {
                        hostId: o
                    });
                if (null == T && null == _.data && !_.isError) return {
                    enabled: !1,
                    queryFn: async () => y,
                    queryKey: [...d, "workspace-roots-loading", I],
                    staleTime: m.b.FIVE_SECONDS
                };
                let C = a()([...T ?? [], ..._.data?.roots ?? []]).map(i.Qe),
                    E = (0, i.Pe)(I);
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
                                worktreePath: E
                            }
                        };
                        if ("remote-control" !== x.kind) return t();
                        try {
                            let e = await p.appServices.workspaceFiles.getMetadata?.({
                                hostId: o,
                                path: n
                            });
                            if (null != e) return "directory" === e.kind ? v : {
                                kind: "unavailable",
                                reason: "inspection-failed",
                                worktreePath: E
                            }
                        } catch {}
                        try {
                            e = await (0, w.a)("git").request({
                                method: "managed-worktree-state",
                                params: {
                                    candidateRoots: C,
                                    cwd: n,
                                    hostConfig: x,
                                    operationSource: "worktree_restore_banner",
                                    worktreePath: E
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
                                    ...e, worktreePath: E
                                };
                            case "gone":
                                return {
                                    kind: "gone", worktreePath: E
                                }
                        }
                    },
                    queryKey: [...d, "inspect", n, E, C],
                    networkMode: "always",
                    refetchOnReconnect: "always",
                    staleTime: m.b.FIVE_SECONDS
                }
            }),
            T = (0, o.d)(g.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(S, {
                    conversationId: e,
                    cwd: r(c.v, e),
                    hostId: r(c.Bb, e)
                })
            }),
            _ = (0, o.d)(g.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(T, e);
                return n.isError ? "unavailable" : null != n.data ? n.data.kind : "loading"
            });
        async function C(e, t) {
            let {
                conversationId: r,
                cwd: n,
                hostId: a
            } = t;
            return await P(e, a), j(e, {
                conversationId: r,
                cwd: n,
                hostId: a
            })
        }
        async function E(e, t) {
            let r = await j(e, t);
            if ("unavailable" === r.kind) throw Error(x);
            if ("restorable" !== r.kind) return;
            let n = e.get(f.g, t.hostId);
            await (0, w.a)("git").request({
                method: "restore-worktree",
                params: {
                    conversationId: t.conversationId,
                    cwd: (0, i.Pe)(t.cwd),
                    hostConfig: n,
                    operationSource: "worktree_restore_banner",
                    repoRoot: r.snapshot.repoRoot,
                    worktreePath: r.worktreePath
                }
            });
            let a = (0, d.a)(n);
            await Promise.all([e.query.invalidate(S, {
                ...t,
                cwd: (0, i.Pe)(t.cwd)
            }, {
                exact: !0
            }), e.queryClient.invalidateQueries({
                queryKey: (0, b.a)(a)
            }), e.queryClient.invalidateQueries({
                queryKey: ["git", "metadata", a]
            })])
        }
        async function M(e, t) {
            await P(e, t), await e.queryClient.invalidateQueries({
                queryKey: (0, b.b)(t)
            })
        }
        async function A(e, t) {
            let r, {
                conversationId: n,
                cwd: a,
                hostId: o
            } = t;
            try {
                r = await j(e, {
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
        }
        async function j(e, t) {
            let {
                conversationId: r,
                cwd: n,
                hostId: a
            } = t, o = e.query.snapshot(f.d, {
                hostId: a
            }), s = o.getData();
            if ("local" === a || null == s || e.queryClient.getQueryState(o.queryKey)?.isInvalidated ? s = await o.fetch() : o.fetch().catch(() => void 0), !(0, i.Oh)(n, s.codexHome, s.worktreesSegment)) return v;
            await e.query.getOrFetch(f.j, {
                hostId: a
            }).catch(() => void 0);
            let l = {
                conversationId: r,
                cwd: (0, i.Pe)(n),
                hostId: a
            };
            return await e.query.invalidate(S, l, {
                exact: !0
            }), e.query.fetch(S, l)
        }
        async function P(e, t) {
            await Promise.all([e.query.invalidate(f.d, {
                hostId: t
            }, {
                exact: !0
            }), e.query.invalidate(f.j, {
                hostId: t
            }, {
                exact: !0
            })])
        }
        r.d(t, {
            d: () => A,
            f: () => C,
            g: () => M,
            h: () => E
        }, {
            a: "worktree_gone",
            b: I,
            c: x,
            e: S,
            i: T,
            j: _
        })
    }),
    psi4: (function(e, t, r) {
        var n = r("bnxy"),
            a = r("M9WK");

        function o(e) {
            if (!e) return null;
            let t = (0, n.q)(e).replace(/\/+$/, ""),
                r = t.indexOf("/.git/worktrees/");
            if (-1 !== r) return t.slice(0, r);
            let a = "/.git";
            return t.endsWith(a) ? t.slice(0, -a.length) : null
        }
        r.d(t, {
            a: () => a.c,
            b: () => a.d,
            c: () => a.e,
            d: () => o
        })
    }),
    dg06: (function(e, t, r) {
        function n(e, t) {
            let r = ["git", e, "codex-worktrees"];
            return null == t ? r : [...r, t]
        }

        function a(e) {
            return ["git", e, "managed-worktree-state"]
        }
        r.d(t, {
            a: () => n,
            b: () => a
        })
    }),
    In8Z: (function(e, t, r) {
        var n = r("iTtm"),
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
            shouldRetry: "library" === e ? e => !(e instanceof i.a && 409 === e.status) : void 0
        }));

        function l(e, t) {
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

        function c(e, t, r) {
            let n = (null == r ? ["message", "library"] : [r]).map(r => e.get(s, r).flushConversation(t)).filter(e => null != e);
            if (n.length > 0) return Promise.all(n).then(() => void 0)
        }
        r.d(t, {
            b: () => c,
            c: () => l
        }, {
            a: s
        })
    }),
    syw5: (function(e, t, r) {
        var n = r("RF9q"),
            a = r("kpIY");

        function o(e, t, r) {
            return null == t ? r : (0, n.a)(e, t, e => (0, a.k)(e, void 0), r, !0)
        }
        r.d(t, {
            a: () => o
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
            p = (0, o.c)(E, void 0),
            g = (0, o.c)(A, void 0),
            f = (0, o.c)(j, void 0),
            h = (0, o.c)(e => P(e, "bcc"), void 0),
            m = (0, o.c)(e => P(e, "cc"), void 0),
            w = (0, o.c)(e => P(e, "recipient"), void 0),
            k = (0, o.c)(W, void 0);

        function b(e, t, r) {
            return (0, n.b)(e, t, r)
        }

        function v(e) {
            if (O(e)) return;
            let t = (0, a.k)(A(e), void 0),
                r = (0, a.k)(P(e, "bcc"), void 0),
                n = (0, a.k)(P(e, "cc"), void 0),
                o = (0, a.k)(P(e, "recipient"), void 0),
                i = (0, a.k)(W(e), void 0);
            if (null != r || null != n || null != t || null != o || null != i) return {
                bcc: r,
                cc: n,
                content: t,
                recipient: o,
                subject: i
            }
        }

        function y(e, t) {
            if (O(e)) return;
            let r = E(e);
            (0, a.k)(r, void 0) !== t && (0, a.u)(r, t)
        }

        function I(e, t) {
            M(e, A(e), t)
        }

        function x(e, t) {
            M(e, W(e), t)
        }

        function S(e, t, r) {
            M(e, P(e, t), r)
        }

        function T(e, t) {
            if (O(e)) return;
            let r = j(e),
                n = (0, a.k)(r, void 0);
            (0, a.u)(r, {
                ...n,
                ...t
            })
        }

        function _(e) {
            for (let t of ((0, a.e)(A(e)), (0, a.e)(W(e)), u))(0, a.e)(P(e, t))
        }

        function C(e) {
            let t = `${e}
`,
                r = `${i}${t}`,
                n = `${s}${t}`,
                o = `${l}${t}`,
                p = `${c}${t}`;
            for (let i of ((0, a.u)(R(e), !0), (0, a.r)(r), (0, a.r)(n), (0, a.r)(o), (0, a.r)(p), u))(0, a.r)(`${d[i]}${t}`)
        }

        function E(e) {
            return `${i}${e}`
        }

        function M(e, t, r) {
            O(e) || (0, a.v)(t, r, 500, {
                shouldPublish: () => !O(e)
            })
        }

        function A(e) {
            return `${s}${e}`
        }

        function j(e) {
            return `${l}${e}`
        }

        function P(e, t) {
            return `${d[t]}${e}`
        }

        function W(e) {
            return `${c}${e}`
        }

        function R(e) {
            return `codex-writing-block-deleted-thread-v1:${e}`
        }

        function O(e) {
            let t = e.slice(0, e.indexOf("\n"));
            return (0, a.k)(R(t), !1)
        }
        r.d(t, {
            h: () => C,
            i: () => _,
            j: () => v,
            k: () => b,
            l: () => I,
            m: () => S,
            n: () => x,
            o: () => y,
            p: () => T
        }, {
            a: p,
            b: h,
            c: m,
            d: g,
            e: f,
            f: w,
            g: k
        })
    }),
    zTAs: (function(e, t, r) {
        var n = r("Uf0P"),
            a = r("kpb9"),
            o = r("wDWo"),
            i = r("ASxG");
        let s = i.array(i.looseObject({
            content: i.string()
        }));

        function l(e, t, r) {
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
        }

        function c(e, t) {
            let {
                contentReferences: r,
                isStreaming: n
            } = t;
            return (0, o.i)(e, {
                content_references: r
            }, {
                isStreaming: n
            })
        }

        function d(e, t) {
            let r = e;
            for (let n of ["options", "style_variants"]) {
                let a = s.safeParse(e?.[n]);
                a.success && (r = {
                    ...r,
                    [n]: a.data.map(e => ({
                        ...e,
                        content: c(e.content, t)
                    }))
                })
            }
            return r
        }

        function u(e, t) {
            return e?.edited !== !1 || e.locallyEdited ? e : {
                ...e,
                content: c(e.content, t),
                metadata: d(e.metadata, t)
            }
        }
        r.d(t, {
            a: () => l,
            b: () => c,
            c: () => d,
            d: () => u
        })
    }),
    PC5z: (function(e, t, r) {
        r.d(t, {
            a: () => P,
            b: () => M,
            c: () => j,
            d: () => W,
            e: () => R,
            f: () => E,
            g: () => C,
            h: () => A,
            i: () => T
        });
        var n = r("QosV"),
            a = r("T9dF"),
            o = r("iTtm"),
            i = r("zd8w"),
            s = r("ZU27"),
            l = r("EpL9"),
            c = r("gbrq"),
            d = r("HOLv"),
            u = r("svjy"),
            p = r("tSEg"),
            g = r("kl6F"),
            f = r("UxLy"),
            h = r("O9ff"),
            m = r("HXpT"),
            w = r("AhlA"),
            k = r("ABep"),
            b = r("oyxz"),
            v = r("ziev"),
            y = r("jNdh");

        function I(e) {
            let t, r, a = (0, n.c)(6),
                {
                    readPreview: s,
                    title: l
                } = e,
                c = (0, o.y)(p.a);
            a[0] !== s || a[1] !== c ? (t = () => s(c), a[0] = s, a[1] = c, a[2] = t) : t = a[2];
            let [d] = (0, i.useState)(t);
            return a[3] !== d || a[4] !== l ? (r = null == d ? null : (0, k.jsx)(x, {
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
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, k.jsx)(d.a, {
                asset: y.a
            }), s[0] = t) : t = s[0], s[1] !== u ? (r = u ? (0, k.jsx)(b.a, {
                id: "tabThumbnail.writingBlock.pendingEdits",
                defaultMessage: "Changes to review",
                description: "Caption in a document tab preview when AI edits await acceptance or rejection"
            }) : null, s[1] = u, s[2] = r) : r = s[2], s[3] !== c ? (a = c || (0, k.jsx)(b.a, {
                id: "tabThumbnail.writingBlock.empty",
                defaultMessage: "Empty document",
                description: "Document tab preview when the current draft contains no text"
            }), s[3] = c, s[4] = a) : a = s[4], s[5] !== a ? (o = [{
                kind: "text",
                lines: 8,
                content: a
            }], s[5] = a, s[6] = o) : o = s[6], s[7] !== r || s[8] !== o || s[9] !== l ? (i = (0, k.jsx)(v.a, {
                icon: t,
                title: l,
                subtitle: r,
                sections: o
            }), s[7] = r, s[8] = o, s[9] = l, s[10] = i) : i = s[10], i
        }
        let S = (0, l.j)("writing-block", function(e) {
                let t, r, a = (0, n.c)(5),
                    {
                        document: i,
                        renderSlots: s
                    } = e,
                    l = (0, o.x)(M, i.editorKey);
                return a[0] !== l?.slots ? (t = l?.slots ?? {
                    headerRows: [],
                    content: null
                }, a[0] = l?.slots, a[1] = t) : t = a[1], a[2] !== s || a[3] !== t ? (r = s(t), a[2] = s, a[3] = t, a[4] = r) : r = a[4], r
            }, {
                getId: (e, t) => {
                    let {
                        document: r
                    } = t;
                    return R(r.editorKey)
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
                            let t = e.get(M, r.editorKey),
                                n = t?.readPreviewText();
                            return null == t || null == n ? null : {
                                content: n,
                                hasPendingEdits: t.hasPendingEdits
                            }
                        }
                    })
                },
                open: A
            }),
            T = (0, o.c)(g.a, e => {
                let {
                    get: t
                } = e;
                return t(s.j.storedTabs$).filter(O).map(e => e.props.document)
            }, {
                isEqual: f.a
            }),
            _ = (0, o.c)(p.a, e => {
                let {
                    get: t
                } = e, r = t(s.j.activeTab$);
                return t(c.i) && O(r) ? r.props : null
            }),
            C = (0, o.d)(g.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != r(s.j.tabById$, R(e))
            }),
            E = (0, o.d)(p.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(_)?.document.editorKey === e
            }),
            M = (0, o.v)(p.a, e => null);

        function A(e, t, r) {
            s.j.openTab(e, S, {
                ...r,
                revealAndFocus: r?.revealAndFocus ?? !0,
                props: {
                    document: t
                },
                requiresWorkspaceReady: !1,
                onBeforeClose: e => e.get(M, t.editorKey)?.onBeforeClose() ?? !0,
                onClose: e => {
                    e.get(M, t.editorKey)?.onClose()
                }
            })
        }

        function j(e, t) {
            if (null != t.libraryFileId || !e.get(w.b)) return;
            let r = e.get(s.j.tabs$).find(r => O(r) && null == r.props.document.libraryFileId && r.props.document.conversationId === t.conversationId && r.props.document.writingBlockId === t.writingBlockId && r.props.document.messageId !== t.messageId && e.get(m.b, {
                conversationId: t.conversationId,
                messageId: r.props.document.messageId,
                writingBlockId: t.writingBlockId
            }) === t.messageId);
            null != r && A(e, t, {
                revealAndFocus: !1,
                replaceTabId: r.tabId
            })
        }

        function P(e, t) {
            s.j.closeTab(e, R(t))
        }

        function W(e, t) {
            let r = e.get(_)?.document;
            if (r?.conversationId !== t) return null;
            let n = e.get(h.a, {
                conversationId: t,
                messageId: r.messageId,
                instanceId: r.writingBlockId,
                refIndex: r.writingBlockIndex
            })?.libraryFileId.trim();
            return n ? `The user currently has the writing block backed by library_file_id ${JSON.stringify(n)} open in the writing block editor. Treat the user's current request as referring to this exact writing block. For any requested edits, target that exact Library file.` : null
        }

        function R(e) {
            return `writing-block:${encodeURIComponent(e)}`
        }

        function O(e) {
            return e?.tabType.kind === S.kind
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
            o = r("iTtm"),
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
        var n = r("kpb9"),
            a = r("SZCv"),
            o = r.n(a),
            i = r("iTtm"),
            s = r("i6Xw"),
            l = r("rKAs"),
            c = r("AuIy"),
            d = r("wDWo"),
            u = r("h2Mg"),
            p = r("ASxG"),
            g = r("MrGp"),
            f = r("gKmr"),
            h = r("iXTs"),
            m = r("OWtl"),
            w = r("zTAs"),
            k = r("AhlA"),
            b = r("qT2D");
        let v = p.object({
                refIndex: p.number().int().nonnegative(),
                isStreaming: p.boolean(),
                status: p.literal("resolved").optional()
            }),
            y = (0, i.j)(m.a, e => new WeakMap),
            I = (0, i.d)(m.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (!r(k.b) && !r(k.c)) return;
                let a = r(g.L, e);
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
                                            let t = (0, c.o)(e.metadata),
                                                r = (0, c.o)(t?.finish_details)?.type;
                                            return "assistant" === e.author.role && (null == e.channel || "final" === e.channel) && (null == e.recipient || "all" === e.recipient) && !(0, c.k)(e) && ("finished_successfully" === e.status || "in_progress" === e.status) && "interrupted" !== r && "content_filter" !== r && t?.is_error !== !0 && t?.error_metadata == null
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
                                        i = (0, n.e)((0, d.h)((0, c.d)(e), e.metadata), {
                                            isStreaming: "in_progress" === e.status
                                        });
                                    i.includes(":::writing") && (0, s.h)((0, h.a)(i, void 0), e => {
                                        var t;
                                        "codexDirective" === (t = e).type && "writing" === t.name && "string" == typeof e.attributes.id && o(e.attributes.id, (e.text ?? "").replace(/^\r?\n/, "").replace(/\r?\n$/, ""))
                                    });
                                    let u = (0, l.q)(e.metadata);
                                    for (let {
                                            block: t,
                                            reference: r,
                                            isStreaming: n
                                        }
                                        of T(e, u)) {
                                        let {
                                            content: e,
                                            metadata: a
                                        } = (0, w.a)(t, r, n), i = {
                                            contentReferences: u,
                                            isStreaming: n
                                        };
                                        o(t.id, (0, w.b)(e, i), !1, (0, w.c)(a, i), n)
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
                    current_node: r(g.B, e)
                }, r(y, e))
            }),
            x = (0, i.d)(m.a, (e, t) => {
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
                let o = r(b.d, e.conversationId),
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
            S = (0, i.d)(m.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(I, e.conversationId)?.get(e.writingBlockId)?.latestMessageId, o = r(g.L, e.conversationId);
                if (null == a || null == o) return;
                let i = !1;
                for (let t of (0, c.a)({
                        mapping: o,
                        current_node: r(g.B, e.conversationId)
                    }).reverse()) {
                    if (i = i || t.id === a, t.id !== e.messageId) continue;
                    if (!i) break;
                    let r = Object.values((0, n.f)(t.metadata)).find(t => t.id === e.writingBlockId);
                    if (r?.library_file_id != null) break;
                    if (null != r || T(t).some(t => {
                            let {
                                block: r
                            } = t;
                            return r.id === e.writingBlockId
                        }) || null != (0, n.d)((0, c.d)(t))[e.writingBlockId]) return a;
                    break
                }
            });

        function T(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, l.q)(e.metadata),
                r = (0, f.a)((0, c.o)(e.metadata)?.model_dil_v2);
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
            b: S
        })
    }),
    AhlA: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("OWtl"),
            o = r("OMIV");
        let i = (0, n.u)(a.a, () => void 0),
            s = (0, n.j)(a.a, e => new WeakMap),
            l = (0, n.h)(a.a, e => {
                let {
                    get: t
                } = e;
                return g(t(o.e), t(s, "session"))
            }, e => {
                let {
                    get: t,
                    set: r
                } = e, n = t(o.e);
                if (null == n) return;
                let a = t(s, "session"),
                    i = () => r(g(n, a));
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

        function p(e) {
            let t = e.get(o.e);
            if (null == t) return;
            let r = g(t, e.get(s, "session"));
            r.enrolled && e.get(i) !== r.identity && (t.getLayer("3737772469").get("assistant_revisions_enabled", !1), e.set(i, r.identity))
        }

        function g(e, t) {
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
        r.d(t, {
            d: () => p
        }, {
            a: u,
            b: c,
            c: d
        })
    }),
    qT2D: (function(e, t, r) {
        var n = r("JjRy"),
            a = r.n(n),
            o = r("iTtm"),
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

        function g(e, t, r, n) {
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
        }

        function f(e, t, r, n) {
            let a = e.get(s.a, t) ?? t,
                o = e.get(u, a);
            null == o || o.requestId !== r || null == n || o.initialMessageIds.has(n) || o.receivedMessageIds.has(n) || e.set(u, a, {
                ...o,
                receivedMessageIds: new Set([...o.receivedMessageIds, n]),
                baselineSizeByMessageId: new Map([...o.baselineSizeByMessageId, [n, o.completedMessageIndexById.size]])
            })
        }

        function h(e, t, r, n, o) {
            let i = a()(o, l.g);
            if (o[i]?.id === n)
                for (let n of o.slice(i + 1)) "finished_successfully" === n.status && f(e, t, r, n.id)
        }
        r.d(t, {
            a: () => g,
            b: () => h,
            c: () => f
        }, {
            d: p
        })
    }),
    YrRS: (function(e, t, r) {
        var n = r("TgTQ"),
            a = r("XdCm"),
            o = r("iTtm"),
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
                    s = null, r?.(), r = void 0, o.set(null), null != n && a.set(i.w, e, e => e.filter(e => {
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

        function p(e, t) {
            let r, o, c, {
                conversationId: p,
                messageId: g,
                writingBlockId: f,
                editorView: h,
                prepareSubmission: m,
                isCurrent: w,
                onCleared: k
            } = t;
            if (!e.get(d.b) || !w(e) || h.isDestroyed || h.state.selection.empty) return;
            let b = (0, n.a)(),
                {
                    doc: v,
                    selection: y
                } = h.state,
                I = v.textBetween(y.from, y.to, "\n", "\n"),
                x = I.endsWith("\n") ? y.to - 1 : y.to;
            try {
                r = b.serialize(v), o = y.from <= 0 ? 0 : (0, a.c)(v, b, "⟦SELECTEDRANGESTART⟧", y.from, 1), c = x >= v.content.size ? r.length : (0, a.c)(v, b, "⟦SELECTEDRANGEEND⟧", x, -1)
            } catch {
                return
            }
            if (o >= c) return;
            let S = {
                    attachmentId: crypto.randomUUID(),
                    messageId: g,
                    writingBlockId: f,
                    fullMarkdown: r,
                    selectedText: r.slice(o, c),
                    label: I || r.slice(o, c),
                    selectionStart: o,
                    selectionEnd: c
                },
                T = e.get(u, p);
            return (0, s.b)(e, p), T.set(S, {
                isCurrent: e => e.get(d.b) && w(e) && !h.isDestroyed && b.serialize(h.state.doc) === r,
                prepareSubmission: () => m(r),
                onCleared: k
            }), e.set(i.w, p, [{
                id: S.attachmentId,
                text: S.label
            }]), T.setCleanup(S, e.watch(e => {
                e.get(d.b) && null == e.get(s.a, p) && e.get(i.w, p).some(e => {
                    let {
                        id: t
                    } = e;
                    return t === S.attachmentId
                }) || T.clear(S)
            })), (0, l.f)(), () => T.clear(S)
        }

        function g(e) {
            return [`The user's instruction is referring to the following selected text from writing block with ID [${e.writingBlockId}]. Apply the user's edit to the selection, and include the complete revised draft in your response.`, e.selectedText.split("\n").map(e => `> ${e}`).join("\n")].join("\n\n")
        }
        r.d(t, {
            b: () => g,
            c: () => p
        }, {
            a: u
        })
    })
};