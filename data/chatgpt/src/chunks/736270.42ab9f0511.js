export const __rspack_esm_id = 736270;
export const __rspack_esm_ids = [736270];
export const __webpack_modules__ = {
    ekV: (function(e, t, r) {
        var s = r("cKf");

        function o(e) {
            return e?.kind === "ready" ? e.service : e?.kind === "requires-auth" ? {
                createSession(t, r) {
                    let o = !1,
                        n = () => {
                            o || (o = !0, r({
                                kind: s.DILDictationEventKind.Cancelled
                            }))
                        };
                    return {
                        start() {
                            o || (n(), e.requestAuthentication())
                        },
                        stop: n,
                        cancel: n,
                        dispose() {
                            o = !0
                        }
                    }
                }
            } : void 0
        }
        r.d(t, {
            a: () => s.DILDictationEventKind,
            b: () => o,
            c: () => s.normalizeDILDictationOptions
        })
    }),
    giC: (function(e, t, r) {
        var s = r("CVO");
        class o {
            disposed = !1;
            commandIndex = 0;
            eventListeners = new Map;
            handlers;
            pendingCommands = new Map;
            port;
            diagnostics;
            diagnosticContext;
            constructor({
                handlers: e,
                port: t,
                diagnostics: r,
                diagnosticContext: o
            }) {
                this.handlers = e, this.port = t, this.diagnostics = r, this.diagnosticContext = o, (0, s.a)(this.port, "message", this.handleMessage), this.port.start()
            }
            commands = new Proxy(Object.create(null), {
                get: (e, t) => {
                    if ("string" == typeof t && "then" !== t) return e => this.sendCommand(t, e)
                }
            });
            emit(e, t) {
                this.send({
                    __oaiDilMessage: !0,
                    data: t,
                    event: String(e),
                    kind: "event"
                })
            }
            on(e, t) {
                let r = String(e),
                    s = this.eventListeners.get(r) ?? new Set;
                return s.add(t), this.eventListeners.set(r, s), () => {
                    s.delete(t), 0 === s.size && this.eventListeners.delete(r)
                }
            }
            dispose() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DIL frame messenger disposed";
                if (this.disposed) return;
                this.disposed = !0, (0, s.b)(this.port, "message", this.handleMessage), this.port.close();
                let t = Error(e);
                for (let [e, r] of this.pendingCommands) this.diagnostics?.record("command", "cancelled", {
                    ...this.diagnosticContext,
                    requestId: e,
                    reason: "disposed"
                }), r.reject(t);
                this.pendingCommands.clear(), this.eventListeners.clear()
            }
            sendCommand(e, t) {
                if (this.disposed) return Promise.reject(Error("DIL frame messenger is disposed"));
                let r = `command_${this.commandIndex}`;
                return this.commandIndex += 1, this.diagnostics?.record("command", "begin", {
                    ...this.diagnosticContext,
                    requestId: r,
                    command: e,
                    pendingRequests: this.pendingCommands.size + 1
                }), new Promise((s, o) => {
                    this.pendingCommands.set(r, {
                        reject: o,
                        resolve: s
                    });
                    try {
                        this.send({
                            __oaiDilMessage: !0,
                            command: e,
                            data: t,
                            id: r,
                            kind: "command"
                        })
                    } catch (t) {
                        this.diagnostics?.fault("command", t, {
                            ...this.diagnosticContext,
                            requestId: r,
                            command: e
                        }), this.pendingCommands.delete(r), o(t)
                    }
                })
            }
            messageDetails(e) {
                return {
                    ...this.diagnosticContext,
                    command: "event" === e.kind ? e.event : "command" === e.kind ? e.command : void 0,
                    requestId: "id" in e ? e.id : void 0,
                    reason: e.kind
                }
            }
            send(e) {
                if (this.disposed) throw Error("DIL frame messenger is disposed");
                try {
                    this.port.postMessage(e)
                } catch (t) {
                    throw this.diagnostics?.fault("message", t, this.messageDetails(e)), t
                }
                this.diagnostics?.record("message", "sent", this.messageDetails(e))
            }
            handleMessage = e => {
                if (! function(e) {
                        if (null == e || "object" != typeof e || !0 !== e.__oaiDilMessage) return !1;
                        let t = e.kind;
                        return "ack" === t || "command" === t || "event" === t || "response" === t
                    }(e.data)) return;
                let t = e.data;
                switch (this.diagnostics?.record("message", "received", this.messageDetails(t)), t.kind) {
                    case "ack":
                        this.diagnostics?.record("command", "acknowledged", {
                            ...this.diagnosticContext,
                            requestId: t.id
                        });
                        break;
                    case "command":
                        this.handleCommand(t);
                        break;
                    case "event":
                        for (let e of this.eventListeners.get(t.event) ?? []) e(t.data);
                        break;
                    case "response": {
                        let e = this.pendingCommands.get(t.id);
                        if (!e) return;
                        this.pendingCommands.delete(t.id), this.diagnostics?.record("command", t.error ? "rejected" : "resolved", {
                            ...this.diagnosticContext,
                            requestId: t.id,
                            pendingRequests: this.pendingCommands.size
                        }), t.error ? e.reject(n(t.error)) : e.resolve(t.result)
                    }
                }
            };
            async handleCommand(e) {
                let t = "invokeGlobal" === e.command || "invokeMessengerCommand" === e.command ? "host_call" : "command",
                    r = this.diagnostics ? {
                        ...this.diagnosticContext,
                        requestId: e.id,
                        command: e.command
                    } : void 0,
                    s = Object.prototype.hasOwnProperty.call(this.handlers, e.command) ? this.handlers[e.command] : void 0;
                if (!s) return void this.sendResponseError(e.id, Error(`Unknown DIL frame command "${e.command}"`));
                let o = !1;
                try {
                    this.diagnostics?.record(t, "begin", r);
                    let n = s(e.data);
                    o = !0, this.diagnostics?.record(t, "returned", r), e.acknowledge && !this.disposed && this.send({
                        __oaiDilMessage: !0,
                        id: e.id,
                        kind: "ack"
                    });
                    let i = await n;
                    if (this.diagnostics?.record(t, "resolved", r), this.disposed) return;
                    try {
                        this.send({
                            __oaiDilMessage: !0,
                            id: e.id,
                            kind: "response",
                            result: i
                        })
                    } catch (t) {
                        this.sendResponseError(e.id, t)
                    }
                } catch (s) {
                    this.diagnostics?.record(t, o ? "rejected" : "threw", {
                        ...r,
                        error: s
                    }), this.disposed || this.sendResponseError(e.id, s)
                }
            }
            sendResponseError(e, t) {
                var r;
                this.send({
                    __oaiDilMessage: !0,
                    error: (r = t) instanceof Error ? {
                        message: r.message,
                        name: r.name
                    } : {
                        message: String(r),
                        name: "Error"
                    },
                    id: e,
                    kind: "response"
                })
            }
        }

        function n(e) {
            let t = Error(e.message);
            return Object.defineProperty(t, "name", {
                configurable: !0,
                enumerable: !0,
                value: e.name,
                writable: !0
            }), e.stack && (t.stack = e.stack), t
        }
        r.d(t, {
            a: () => o,
            b: () => n
        })
    }),
    KmX: (function(e, t, r) {
        r.d(t, {
            a: () => l
        });
        var s = r("ekV"),
            o = r("Btk");
        r("xnf");
        var n = r("ut9");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto);
        let i = (e, t) => ({
                kind: s.a.Error,
                error: {
                    code: e,
                    message: t
                }
            }),
            a = e => "string" == typeof e && e.length <= 64 && /^[a-f0-9]{32}:\d+$/.test(e);
        class d {
            service;
            deferred;
            sessions = new Map;
            deferredSessions = new Map;
            constructor(e, t) {
                this.service = e, this.deferred = t
            }
            command(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !a(e.id)) return;
                let {
                    id: d
                } = e, c = this.sessions.get(d);
                if ("create" === e.action) {
                    if (c) return;
                    let r = (0, s.c)(e.options);
                    if (!r) return void t({
                        id: d,
                        sequence: 1,
                        event: i("invalid_options", "Invalid dictation options.")
                    });
                    if (!this.service || this.sessions.size >= 64) return void t({
                        id: d,
                        sequence: 1,
                        event: i("integration_error", "The dictation host service is not configured or has reached its session limit.")
                    });
                    let o = c = {
                        live: !0,
                        started: !1,
                        stopped: !1,
                        sequence: 0
                    };
                    this.sessions.set(d, o);
                    try {
                        let e = this.service.createSession(r, e => this.publish(d, o, e, t));
                        o.session = e, o.live || this.disposeSession(e)
                    } catch {
                        this.publish(d, o, i("host_error", "Dictation could not complete. Please try again."), t)
                    }
                    return
                }
                if ("startDeferred" === e.action) {
                    if (c || this.deferredSessions.has(d)) return;
                    let a = (0, s.c)(e.options);
                    if (!a || !this.service || !this.deferred || "string" != typeof e.widgetInstanceId || this.deferredSessions.size >= 64) return void t({
                        id: d,
                        sequence: 1,
                        event: i("host_error", "Dictation could not complete. Please try again.")
                    });
                    if (!r || navigator.userActivation?.isActive !== !0 || !(0, n.a)()) return void t({
                        id: d,
                        sequence: 1,
                        event: i("interaction_required", "Start dictation from a direct user interaction.")
                    });
                    let l = this.deferred.resolve(e.widgetInstanceId);
                    if (!l) return void t({
                        id: d,
                        sequence: 1,
                        event: i("host_error", "Dictation could not complete. Please try again.")
                    });
                    let p = {
                        owner: new o.DILDictationDeferredTurnOwner(this.service, l)
                    };
                    this.deferredSessions.set(d, p);
                    let u = {
                        live: !0,
                        started: !0,
                        stopped: !1,
                        sequence: 0
                    };
                    this.sessions.set(d, u);
                    try {
                        let e = p.owner.createSession(a, e => this.publish(d, u, e, t));
                        if (u.session = e, this.deferredSessions.get(d) !== p) return void this.disposeSession(e);
                        p.turn = e.deferredTurn, u.live ? e.start() : this.disposeSession(e)
                    } catch {
                        try {
                            this.publish(d, u, i("host_error", "Dictation could not complete. Please try again."), t)
                        } finally {
                            this.disposeDeferredSession(d)
                        }
                    }
                    return
                }
                if (c?.live) try {
                    switch (e.action) {
                        case "start":
                            if (c.started) return;
                            if (!r || navigator.userActivation?.isActive !== !0 || !(0, n.a)()) return void this.publish(d, c, i("interaction_required", "Start dictation from a direct user interaction."), t);
                            c.started = !0, c.session?.start();
                            break;
                        case "stop":
                            if (!c.started || c.stopped) return;
                            c.stopped = !0, c.session?.stop();
                            break;
                        case "cancel":
                            this.remove(d, c);
                            try {
                                c.session?.cancel()
                            } finally {
                                this.disposeSession(c.session)
                            }
                            break;
                        case "dispose":
                            this.remove(d, c), this.disposeSession(c.session)
                    }
                } catch {
                    this.publish(d, c, i("host_error", "Dictation could not complete. Please try again."), t)
                }
            }
            async deferredCommand(e) {
                if (!a(e.id)) return !1;
                if ("dispose" === e.action) return this.disposeDeferredSession(e.id), !1;
                let t = this.deferredSessions.get(e.id)?.turn;
                if (!t) return !1;
                if ("cancel" === e.action) return t.cancel(), !1;
                if ("string" != typeof e.query) return !1;
                try {
                    return await t.complete(e.query, e.payload)
                } catch {
                    throw Error("Deferred turn submission was not acknowledged.")
                }
            }
            reset() {
                let e = [...this.sessions.values()];
                for (let t of (this.sessions.clear(), e)) t.live = !1;
                for (let t of e) this.disposeSession(t.session);
                for (let e of this.deferredSessions.values()) this.disposeOwner(e.owner);
                this.deferredSessions.clear()
            }
            publish(e, t, r, o) {
                if (!t.live) return;
                let n = function(e) {
                        if (e && "object" == typeof e) switch (e.kind) {
                            case s.a.Recording:
                            case s.a.Stopping:
                            case s.a.Cancelled:
                                return {
                                    kind: e.kind
                                };
                            case s.a.Transcript:
                            case s.a.Done:
                                if ("string" == typeof e.transcript) return {
                                    kind: e.kind,
                                    transcript: e.transcript
                                };
                                return;
                            case s.a.Error:
                                if ("string" == typeof e.error?.code && "string" == typeof e.error.message) return {
                                    kind: e.kind,
                                    error: {
                                        code: e.error.code,
                                        message: e.error.message
                                    }
                                }
                        }
                    }(r) ?? i("host_error", "Dictation could not complete. Please try again."),
                    a = n.kind === s.a.Done || n.kind === s.a.Error || n.kind === s.a.Cancelled;
                a && this.remove(e, t);
                try {
                    o({
                        id: e,
                        sequence: ++t.sequence,
                        event: n
                    })
                } finally {
                    a && this.disposeSession(t.session)
                }
            }
            remove(e, t) {
                t.live = !1, this.sessions.get(e) === t && this.sessions.delete(e)
            }
            disposeSession(e) {
                try {
                    e?.dispose()
                } catch {}
            }
            disposeOwner(e) {
                try {
                    e.dispose()
                } catch {}
            }
            disposeDeferredSession(e) {
                let t = this.deferredSessions.get(e);
                if (!t) return;
                this.deferredSessions.delete(e);
                let r = this.sessions.get(e);
                r && this.remove(e, r), this.disposeOwner(t.owner)
            }
        }
        var c = r("Nn8");

        function l(e, t) {
            let r = new c.a(e.speechSynthesis),
                o = (0, s.b)(e.dictation),
                n = e.dictation?.kind === "ready" ? e.deferredTurn : void 0,
                i = new d(o, n);
            return {
                initialization: {
                    ...void 0 !== e.speechSynthesis ? {
                        speechSynthesis: !0
                    } : {},
                    ...void 0 !== o ? {
                        dictation: !0
                    } : {},
                    ...n ? {
                        supportsDeferredTurns: !0
                    } : {}
                },
                handlers: e => ({
                    dictation: r => {
                        let s = t => e("dictationEvent", t);
                        if (r?.action === "start" || r?.action === "startDeferred") {
                            let e = !1;
                            t(r.interactionCapability, () => {
                                e = !0, i.command(r, s, !0)
                            }), e || i.command(r, s)
                        } else i.command(r, s)
                    },
                    deferredTurn: e => i.deferredCommand(e),
                    speech: s => {
                        let o = !1,
                            n = function() {
                                let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                                o = !0;
                                try {
                                    r.command(t, t => e("speechState", t))
                                } catch {}
                            };
                        "play" === s.action || "stop" === s.action && void 0 !== s.logging ? (t(s.interactionCapability, () => n()), "stop" !== s.action || o || n({
                            ...s,
                            logging: void 0
                        })) : n()
                    }
                }),
                reset: () => {
                    i.reset(), r.reset()
                }
            }
        }
    }),
    NHP: (function(e, t, r) {
        r.d(t, {
            a: () => 14,
            b: () => s.b,
            c: () => s.c
        }), r("giC"), r("CVO"), r("KmX");
        var s = r("TJb");
        r("Nn8")
    }),
    Nn8: (function(e, t, r) {
        var s = r("ut9"),
            o = r("hWg");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto);
        class n {
            service;
            sessions = new Map;
            constructor(e) {
                this.service = e
            }
            command(e, t) {
                if (!e || "string" != typeof e.id || e.id.length > 64 || !/^[a-f0-9]{32}:\d+$/.test(e.id)) return;
                let {
                    id: r
                } = e, n = this.sessions.get(r);
                if ("create" === e.action) {
                    if (n) return;
                    let s = (0, o.b)(e.source);
                    if (!s || !this.service || this.sessions.size >= 64) return void t({
                        id: r,
                        state: o.d
                    });
                    let i = !0;
                    try {
                        let e = this.service.createSession(s, e => {
                            i && t({
                                id: r,
                                state: (0, o.c)(e)
                            })
                        });
                        this.sessions.set(r, {
                            play: t => e.play(t),
                            stop: t => e.stop(t),
                            dispose: () => {
                                i = !1, e.dispose()
                            }
                        })
                    } catch {
                        i = !1, t({
                            id: r,
                            state: o.d
                        })
                    }
                } else "play" === e.action ? n && navigator.userActivation?.isActive === !0 && (0, s.a)() && n.play((0, o.a)(e.logging)) : "stop" === e.action ? n?.stop(void 0 !== e.logging && navigator.userActivation?.isActive === !0 && (0, s.a)() ? (0, o.a)(e.logging) : void 0) : "dispose" === e.action && (this.sessions.delete(r), n?.dispose())
            }
            reset() {
                for (let e of this.sessions.values()) e.dispose();
                this.sessions.clear()
            }
        }
        r.d(t, {
            a: () => n
        })
    }),
    TJb: (function(e, t, r) {
        let s = "u" < typeof performance ? Date.now.bind(Date) : performance.now.bind(performance),
            o = "u" < typeof performance ? 0 : performance.timeOrigin,
            n = Object.getOwnPropertyDescriptor,
            i = Object.getPrototypeOf,
            a = Error.isError,
            d = new Map([
                [Error.prototype, "Error"],
                [TypeError.prototype, "TypeError"],
                [RangeError.prototype, "RangeError"],
                [SyntaxError.prototype, "SyntaxError"],
                [ReferenceError.prototype, "ReferenceError"],
                [URIError.prototype, "URIError"],
                [EvalError.prototype, "EvalError"],
                [AggregateError.prototype, "AggregateError"]
            ]),
            c = 0,
            l = new Set(["iframe_create:returned", "iframe_load:received", "iframe_resource:received", "observer_bootstrap:returned", "module_entry:returned", "module_load:begin", "module_resource:returned", "module_load:reported_error", "runner_module_script_error", "runner_module_csp_enforced", "runner_module_exception", "frame_ready:sent", "frame_ready:received", "worker_create:begin", "worker_create:returned", "worker_control:sent", "worker_control:received", "worker_module:returned", "harden_worker:begin", "harden_worker:returned", "runner_create:sent", "runner_create:received", "runner_create:begin", "runner_create:returned", "worker_ready:sent", "worker_ready:received", "snapshot_post:sent", "snapshot_receive:received", "host_ingress_lifecycle", "host_ingress_snapshot", "snapshot_forward:sent", "apply_tree:returned", "request_timer:fired", "worker_timer:fired", "frame_timer:fired"]);

        function p(e) {
            if ("module_load" === e.operation && "runner_module_exception" === e.reason) return "runner_module_exception";
            if (e.fault || "threw" === e.phase) return "first_fault";
            if ("module_load" === e.operation && "reported_error" === e.phase) {
                if ("runner_module_script_error" === e.reason) return "runner_module_script_error";
                if ("csp_violation" === e.reason && "runner_module" === e.cspResource && "enforce" === e.cspDisposition) return "runner_module_csp_enforced"
            }
            if ("quarantine" === e.operation || "error" === e.operation) return e.operation;
            if ("worker_control" === e.operation && ("execution_started" === e.reason || "execution_finished" === e.reason)) return "worker_execution";
            if ("host" === e.realm && "message" === e.operation && "received" === e.phase && ("snapshot" === e.command || "lifecycle" === e.command)) return `host_ingress_${e.command}`;
            let t = `${e.operation}:${e.phase}`;
            return l.has(t) ? t : "health_probe" === e.operation && e.reason?.startsWith("target_") ? "worker_target" : "health_probe" === e.operation ? "fired" === e.phase ? "health_probe_expired" : "health_probe" : "recovery" === e.operation ? "recovery" : "event_loop" === e.operation ? "event_loop" : ["visibility", "pagehide", "pageshow", "freeze", "resume"].includes(e.operation) ? "lifecycle" : "frame_probe" === e.operation ? "frame_probe" : "module_load" === e.operation && "document_state" === e.reason ? "document_state" : "module_resource" === e.operation ? "module_resource" : "message" !== e.operation && "coverage" !== e.operation ? "last_progress" : void 0
        }

        function u(e) {
            return [e.realm, e.documentBootId, "worker" === e.realm ? e.workerGeneration : void 0, e.sourceId].join(":")
        }
        let h = new Set(["host_setup", "encode_globals", "read_persistence", "acquire_frame", "iframe_create", "iframe_load", "iframe_resource", "observer_bootstrap", "module_load", "module_resource", "module_entry", "frame_ready", "manager_create", "worker_create", "worker_control", "worker_module", "harden_worker", "runner_create", "worker_ready", "decode_globals", "decode_persistence", "unsafe_runner", "runtime_construct", "seed_runtime", "hydrate_state", "prepare_source", "update_source", "compile", "evaluate", "render", "render_operations", "snapshot_post", "commit_state", "persist_state", "flush", "flush_render", "flush_effects", "restore_source", "command", "host_call", "snapshot_receive", "snapshot_forward", "apply_tree", "notify", "react_snapshot", "react_materialize", "react_commit", "react_snapshot_effect", "react_node_error", "host_error", "fallback", "render_result", "frame_timer", "worker_timer", "request_timer", "health_probe", "idle_probe", "visibility", "pagehide", "pageshow", "freeze", "resume", "frame_probe", "event_loop", "recovery", "quarantine", "runner_dispose", "worker_stop", "frame_dispose", "message", "error", "coverage"]),
            f = new Set(["begin", "returned", "threw", "reported_error", "sent", "received", "acknowledged", "resolved", "rejected", "armed", "paused", "rearmed", "cancelled", "fired", "ignored", "decision"]),
            g = new Set(["initialize", "__dil_initialize", "createRunner", "disposeRunner", "initializeControl", "registerMessengerTransport", "unregisterMessengerTransport", "setCompiledDil", "setData", "setStateSnapshot", "trigger", "invokeGlobal", "invokeMessengerCommand", "snapshot", "lifecycle", "messengerEvent"]),
            m = ["workerGeneration", "sessionGeneration", "startupAttempt", "snapshotVersion", "renderPass", "spanId", "parentSpanId", "count", "pendingRequests", "pendingHostCalls", "peers", "budgetMs", "deadlineMs", "elapsedMs", "httpStatus", "resourceStartMs", "resourceEndMs", "navigationResponseEndMs", "navigationDomInteractiveMs"],
            y = ["triggerAcknowledged", "workerReadySent", "hidden", "persisted", "acknowledged", "replaySafe", "hasSuccessfulSnapshot", "treePresent", "hasError", "moduleEvaluationSupported"],
            v = ["documentBootId", "artifactId", "runnerId", "activeRunnerId", "resourceArtifactId", "triggerRunnerId", "triggerRequestId", "requestId", "relatedRequestId"],
            b = /^[a-zA-Z0-9_-]{1,96}$/;

        function _(e) {
            let t = {};
            for (let r of m) {
                let s = e[r];
                "number" == typeof s && Number.isFinite(s) && s >= 100 * ("httpStatus" === r) && ("httpStatus" !== r || s <= 599) && (t[r] = s)
            }
            for (let r of y) "boolean" == typeof e[r] && (t[r] = e[r]);
            for (let r of v) {
                let s = e[r];
                "string" == typeof s && b.test(s) && (t[r] = s)
            }
            for (let r of ["command", "triggerCommand"]) {
                let s = e[r];
                s && g.has(s) && (t[r] = s)
            }
            return ("loading" === e.documentReadyState || "interactive" === e.documentReadyState || "complete" === e.documentReadyState) && (t.documentReadyState = e.documentReadyState), e.cspDirective && ["script-src", "script-src-elem", "script-src-attr", "worker-src", "other"].includes(e.cspDirective) && (t.cspDirective = e.cspDirective), ("enforce" === e.cspDisposition || "report" === e.cspDisposition) && (t.cspDisposition = e.cspDisposition), e.cspResource && ["runner_module", "inline", "eval", "unknown"].includes(e.cspResource) && (t.cspResource = e.cspResource), "string" == typeof e.reason && /^[a-z_]{1,48}$/.test(e.reason) && (t.reason = e.reason), t
        }

        function I(e) {
            if (null === e || "object" != typeof e || !["host", "bootstrap", "iframe", "worker"].includes(e.realm) || "string" != typeof e.operation || !h.has(e.operation) || "string" != typeof e.phase || !f.has(e.phase) || !Number.isSafeInteger(e.sequence) || e.sequence < 0 || "number" != typeof e.localTimeMs || !Number.isFinite(e.localTimeMs) || "number" != typeof e.timeOriginMs || !Number.isFinite(e.timeOriginMs)) return;
            let t = {
                ..._(e),
                realm: e.realm,
                sequence: e.sequence,
                localTimeMs: e.localTimeMs,
                timeOriginMs: e.timeOriginMs,
                operation: e.operation,
                phase: e.phase
            };
            Number.isSafeInteger(e.sourceId) && e.sourceId >= 0 && (t.sourceId = e.sourceId);
            let r = e.fault;
            if (r && "string" == typeof r.name && /^(unknown|Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(r.name) && Array.isArray(r.locations) && r.locations.length <= 16) {
                let e = r.locations.filter(e => e && Number.isSafeInteger(e.line) && e.line >= 0 && e.line < 1e7 && Number.isSafeInteger(e.column) && e.column >= 0 && e.column < 1e7).map(e => {
                    let {
                        line: t,
                        column: r
                    } = e;
                    return Object.freeze({
                        line: t,
                        column: r
                    })
                });
                t.fault = Object.freeze({
                    name: r.name,
                    locations: Object.freeze(e),
                    stackUnavailable: 0 === e.length
                })
            }
            return t
        }

        function w(e) {
            return [e.realm, e.documentBootId, e.workerGeneration, e.sourceId, e.runnerId, e.sessionGeneration, e.startupAttempt].join(":")
        }

        function D(e, t, r) {
            let o = r ? t.hostReceivedAtMs : s();
            return {
                ...e,
                ..."number" == typeof o && Number.isFinite(o) && o >= 0 ? {
                    hostReceivedAtMs: o
                } : {}
            }
        }
        class S {
            context;
            now = s;
            realm;
            emit;
            sequence = 0;
            sourceId = ++c;
            span = 0;
            parentSpanId;
            dropped = 0;
            bytes = 0;
            faultCount = 0;
            emitted = 0;
            open = new Map;
            completedSpans = new Map;
            observedRealms = new Set;
            upstreamDropped = new Map;
            upstreamTruncated = !1;
            entries = [];
            sequences = new Map;
            progress = new Map;
            progressSources = new Map;
            retainedRunners = new Map;
            progressBytes = 0;
            progressDropped = 0;
            progressLoss = new Map;
            constructor(e) {
                this.realm = e.realm, this.context = Object.freeze(_(e.context ?? {})), this.emit = e.emit
            }
            record(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    let c = {
                        ...this.context,
                        ..._(r),
                        realm: this.realm,
                        sequence: ++this.sequence,
                        sourceId: this.sourceId,
                        localTimeMs: s(),
                        timeOriginMs: o,
                        operation: e,
                        phase: t
                    };
                    void 0 !== r.error && this.faultCount < 4 && (c.fault = function(e) {
                        let t = [],
                            r = "unknown";
                        try {
                            if (a?.(e)) {
                                r = d.get(i(e)) ?? r;
                                let s = n(e, "name")?.value;
                                "string" == typeof s && /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(s) && (r = s);
                                let o = n(e, "stack")?.value;
                                if ("string" == typeof o)
                                    for (let e of (r = /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)(?=:|$)/.exec(o)?.[1] ?? r, o.slice(0, 4096).split("\n").slice(1, 17))) {
                                        let r = /:(\d{1,7}):(\d{1,7})\)?$/.exec(e.trim());
                                        r && t.push({
                                            line: Number(r[1]),
                                            column: Number(r[2])
                                        })
                                    }
                            }
                        } catch {}
                        return Object.freeze({
                            name: r,
                            locations: Object.freeze(t.map(e => Object.freeze(e))),
                            stackUnavailable: 0 === t.length
                        })
                    }(r.error), this.faultCount++), this.retain(c, "complete"), this.forward(c), 512 === this.sequence && this.record("coverage", "ignored", {
                        reason: "overflow"
                    })
                } catch {
                    this.dropped++
                }
            }
            trace(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = ++this.span,
                    o = this.parentSpanId,
                    n = {
                        ...r,
                        spanId: s,
                        parentSpanId: o
                    };
                this.record(e, "begin", n), this.parentSpanId = s;
                try {
                    let r = t();
                    return this.record(e, "returned", n), r
                } catch (t) {
                    throw this.fault(e, t, n), t
                } finally {
                    this.parentSpanId = o
                }
            }
            fault(e, t) {
                let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.record(e, "threw", {
                    ...r,
                    error: t
                })
            }
            ingest(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    let s = I(e);
                    if (!s) return void this.dropped++;
                    let o = w(s);
                    if (s.sequence <= (this.sequences.get(o) ?? -1)) return;
                    this.sequences.set(o, s.sequence), this.sequences.size > 32 && this.sequences.delete(this.sequences.keys().next().value);
                    let n = D(s, e, r),
                        i = u(s),
                        a = this.progressSources.get(i),
                        d = a ? a.complete && s.sequence === a.sequence + 1 && "coverage" !== s.operation : 1 === s.sequence && "coverage" !== s.operation;
                    if (s.sequence > (a?.sequence ?? -1) && (this.progressSources.set(i, {
                            sequence: s.sequence,
                            complete: d
                        }), this.progressSources.size > 64 && this.progressSources.delete(this.progressSources.keys().next().value), !d))
                        for (let e of this.progress.values()) u(e.slots.values().next().value) === i && (e.coverage = "interrupted");
                    this.retain(n, d ? "complete" : "interrupted"), t && this.forward(s)
                } catch {
                    this.dropped++
                }
            }
            mergeSnapshot(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "merge";
                try {
                    if (null === e || "object" != typeof e || 1 !== e.schemaVersion || !Array.isArray(e.records) || !Array.isArray(e.openOperations)) return this.dropped++, !1;
                    if (r) {
                        let t = [...e.records.slice(0, 256), ...e.openOperations.slice(0, 32)];
                        if (Array.isArray(e.progress))
                            for (let s of e.progress.slice(0, 64)) {
                                if (!s || !Array.isArray(s.records)) return this.markProgressDropped(r.runnerId), !1;
                                for (let e of s.records.slice(0, 40)) t.push({
                                    ...s.context,
                                    ...e
                                })
                            }
                        if (!t.every(e => null !== e && "object" == typeof e && Object.entries(r).every(t => {
                                let [r, s] = t;
                                return void 0 === s || e[r] === s
                            }))) return this.markProgressDropped(r.runnerId), !1
                    }
                    if (Array.isArray(e.observedRealms))
                        for (let t of e.observedRealms.slice(0, 4))("host" === t || "bootstrap" === t || "iframe" === t || "worker" === t) && this.observedRealms.add(t);
                    for (let r of e.records.slice(0, 256)) this.ingest(r, !1, t);
                    for (let r of ("replace" === s && Array.isArray(e.progress) && this.resetDocumentProgress(), e.openOperations.slice(0, 32))) {
                        let e = I(r);
                        if (!e || "begin" !== e.phase || void 0 === e.spanId) {
                            this.dropped++;
                            continue
                        }
                        this.observeSpan(D(e, r, t))
                    }
                    let o = !0;
                    if (Array.isArray(e.progress)) {
                        let r = this.progressDropped;
                        for (let r of e.progress.slice(0, 64)) this.mergeProgress(r, t);
                        e.progress.length > 64 && this.markProgressDropped(), o = r === this.progressDropped
                    }
                    if (Number.isSafeInteger(e.progressDropped) && e.progressDropped > 0) {
                        this.progressDropped = Math.max(this.progressDropped, e.progressDropped);
                        let t = "string" == typeof e.runnerId && b.test(e.runnerId) && (this.progressLoss.has(e.runnerId) || this.progressLoss.size < 64) ? e.runnerId : "";
                        this.progressLoss.set(t, Math.max(this.progressLoss.get(t) ?? 0, e.progressDropped))
                    }
                    let n = I(e.records[0] ?? e.openOperations[0]),
                        i = n ? w(n) : "empty",
                        a = this.upstreamDropped.get(i) ?? 0,
                        d = "number" == typeof e.dropped && Number.isSafeInteger(e.dropped) && e.dropped >= 0 ? e.dropped : 0,
                        c = Math.max(0, e.records.length - 256) + Math.max(0, e.openOperations.length - 32),
                        l = Math.min(Number.MAX_SAFE_INTEGER, d + c);
                    return this.dropped = Math.min(Number.MAX_SAFE_INTEGER, this.dropped + Math.max(0, l - a)), this.upstreamDropped.set(i, Math.max(a, l)), this.upstreamDropped.size > 32 && this.upstreamDropped.delete(this.upstreamDropped.keys().next().value), this.upstreamTruncated ||= !0 === e.truncated || c > 0, o
                } catch {
                    return this.dropped++, !1
                }
            }
            resetDocumentProgress() {
                this.progress.clear(), this.progressSources.clear(), this.progressLoss.clear(), this.progressBytes = 0, this.progressDropped = 0, this.open.clear(), this.completedSpans.clear()
            }
            retainRunner(e) {
                if (!this.retainedRunners.has(e) && this.retainedRunners.size >= 64) return this.markProgressDropped(e), () => {};
                this.retainedRunners.set(e, (this.retainedRunners.get(e) ?? 0) + 1);
                let t = !1;
                return () => {
                    if (t) return;
                    t = !0;
                    let r = (this.retainedRunners.get(e) ?? 1) - 1;
                    r ? this.retainedRunners.set(e, r) : this.retainedRunners.delete(e)
                }
            }
            snapshot() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = [...this.progress.values()].filter(t => {
                        let r = t.slots.values().next().value;
                        return !e.runnerId || !r.runnerId || r.runnerId === e.runnerId
                    }).map(e => {
                        let t = [...e.slots.values()],
                            {
                                realm: r,
                                sourceId: s,
                                timeOriginMs: o,
                                documentBootId: n,
                                artifactId: i,
                                runnerId: a,
                                workerGeneration: d,
                                sessionGeneration: c,
                                startupAttempt: l
                            } = t[0];
                        return {
                            context: {
                                realm: r,
                                sourceId: s,
                                timeOriginMs: o,
                                documentBootId: n,
                                artifactId: i,
                                runnerId: a,
                                workerGeneration: d,
                                sessionGeneration: c,
                                startupAttempt: l
                            },
                            records: t.map(e => {
                                let {
                                    realm: t,
                                    sourceId: r,
                                    timeOriginMs: s,
                                    documentBootId: o,
                                    artifactId: n,
                                    runnerId: i,
                                    workerGeneration: a,
                                    sessionGeneration: d,
                                    startupAttempt: c,
                                    ...l
                                } = e;
                                return l
                            }),
                            lastSequence: e.lastSequence,
                            coverage: e.coverage
                        }
                    }),
                    r = e.runnerId ? [...E(t, e.runnerId, this.context.documentBootId)].sort((t, r) => Number(r.context.runnerId === e.runnerId) - Number(t.context.runnerId === e.runnerId)) : t,
                    s = [],
                    o = 2,
                    n = 0;
                for (let e of r) {
                    let t = JSON.stringify(JSON.stringify(e)).length + 1;
                    if (o + t > 8192) {
                        n++;
                        continue
                    }
                    o += t, s.push(Object.freeze({
                        ...e,
                        context: Object.freeze(e.context),
                        records: Object.freeze(e.records.map(e => Object.freeze(e)))
                    }))
                }
                return Object.freeze({
                    schemaVersion: 1,
                    observedRealms: Object.freeze([...this.observedRealms]),
                    documentBootId: this.context.documentBootId,
                    runnerId: e.runnerId,
                    progress: Object.freeze(s),
                    progressDropped: n + (e.runnerId ? (this.progressLoss.get(e.runnerId) ?? 0) + (this.progressLoss.get("") ?? 0) : this.progressDropped),
                    records: Object.freeze(!1 === e.records ? [] : this.entries.map(e => e.record)),
                    openOperations: Object.freeze(!1 === e.records ? [] : [...this.open.values()]),
                    dropped: this.dropped,
                    truncated: this.dropped > 0 || this.upstreamTruncated
                })
            }
            markProgressDropped(e) {
                this.progressDropped++;
                let t = e && (this.progressLoss.has(e) || this.progressLoss.size < 64) ? e : "";
                this.progressLoss.set(t, (this.progressLoss.get(t) ?? 0) + 1)
            }
            observeProgress(e, t, r) {
                let s = p(e);
                if (!s) return;
                let o = w(e),
                    n = this.progress.get(o),
                    i = n?.slots.get(s);
                if (n && (n.lastSequence = Math.max(n.lastSequence, e.sequence)), i && "event_loop" === s && (i.elapsedMs ?? 0) - (i.budgetMs ?? 0) >= (e.elapsedMs ?? 0) - (e.budgetMs ?? 0) || i && ("first_fault" === s || l.has(s) ? i.sequence <= e.sequence : i.sequence >= e.sequence)) return;
                let a = (r ??= JSON.stringify(e).length) - (i ? JSON.stringify(i).length : 0);
                for (; !n && this.progress.size >= 64 || this.progressBytes + a > 65536;) {
                    let t = [...this.progress].find(e => {
                        let [t, r] = e, s = r.slots.values().next().value.runnerId;
                        return t !== o && s && !this.retainedRunners.has(s)
                    });
                    if (!t) {
                        this.markProgressDropped(e.runnerId), n && (n.coverage = "interrupted");
                        return
                    }
                    this.progressBytes -= t[1].bytes, this.progress.delete(t[0]), this.markProgressDropped(t[1].slots.values().next().value.runnerId)
                }
                if (n || (n = {
                        slots: new Map,
                        lastSequence: 0,
                        coverage: t,
                        bytes: 0
                    }, this.progress.set(o, n)), n.bytes + a > 12288 || !i && n.slots.size >= 40) {
                    this.markProgressDropped(e.runnerId), n.coverage = "interrupted";
                    return
                }
                n.slots.set(s, Object.freeze(e)), n.lastSequence = Math.max(n.lastSequence, e.sequence), "complete" !== t && (n.coverage = t), n.bytes += a, this.progressBytes += a
            }
            mergeProgress(e, t) {
                if (!e || "object" != typeof e || !Array.isArray(e.records) || 0 === e.records.length || e.records.length > 40 || !Number.isSafeInteger(e.lastSequence) || e.lastSequence < 0 || !["complete", "interrupted", "unavailable"].includes(e.coverage ?? "")) return void this.markProgressDropped();
                let r = e.records.map(t => I({
                        ...e.context,
                        ...t
                    })),
                    s = r[0];
                if (!s || r.some(t => !t || w(t) !== w(s) || t.sequence > e.lastSequence || !p(t))) return void this.markProgressDropped();
                let o = this.progress.get(w(s));
                if (o && e.lastSequence < o.lastSequence) return;
                let n = this.progressDropped;
                for (let s = 0; s < r.length; s++) this.observeProgress(D(r[s], e.records[s], t), e.coverage);
                let i = this.progress.get(w(s));
                i && (i.lastSequence = Math.max(i.lastSequence, e.lastSequence), i.coverage = this.progressDropped === n ? e.coverage : "interrupted")
            }
            observeSpan(e) {
                if (void 0 !== e.spanId) {
                    let t = `${w(e)}:${e.spanId}`;
                    if ("begin" === e.phase) {
                        if ((this.completedSpans.get(t) ?? -1) >= e.sequence || (this.open.get(t)?.sequence ?? -1) >= e.sequence) return;
                        this.open.has(t) || this.open.size < 32 ? this.open.set(t, Object.freeze(e)) : this.dropped++
                    } else("returned" === e.phase || "threw" === e.phase) && (this.open.delete(t), this.completedSpans.set(t, e.sequence), this.completedSpans.size > 256 && this.completedSpans.delete(this.completedSpans.keys().next().value))
                }
            }
            retain(e, t) {
                let r = JSON.stringify(e).length;
                this.observeProgress(e, t, r), this.observedRealms.add(e.realm), this.observeSpan(e);
                let s = this.entries.length < 8 || void 0 !== e.fault && !this.entries.some(e => e.record.fault);
                for (; this.entries.length >= 256 || this.bytes + r > 32768;) {
                    let e = this.entries.findIndex(e => !e.pinned);
                    if (e < 0) return void this.dropped++;
                    this.bytes -= this.entries[e].bytes, this.entries.splice(e, 1), this.dropped++
                }
                this.entries.push({
                    record: Object.freeze(e),
                    bytes: r,
                    pinned: s
                }), this.bytes += r
            }
            forward(e) {
                if (this.emit) {
                    if (this.emitted++ >= 513) return void this.dropped++;
                    try {
                        this.emit(e)
                    } catch {
                        this.dropped++
                    }
                }
            }
        }

        function k(e, t, r, s) {
            let o = new S({
                realm: "host",
                context: {
                    documentBootId: e.documentBootId,
                    runnerId: e.runnerId
                }
            });
            o.mergeSnapshot(e, !0, void 0, "replace"), o.record(t, r, s);
            let n = o.snapshot({
                runnerId: e.runnerId
            });
            return Object.freeze({
                ...e,
                ...n
            })
        }

        function E(e, t, r) {
            let s = e.filter(e => {
                    let {
                        context: s
                    } = e;
                    return (!t || !s.runnerId || s.runnerId === t) && (!r || !s.documentBootId || s.documentBootId === r)
                }),
                o = s.map(e => e.context).filter(e => e.runnerId === t),
                n = Math.max(-1, ...o.map(e => e.workerGeneration ?? -1)),
                i = Math.max(-1, ...o.filter(e => e.workerGeneration === n).map(e => e.sessionGeneration ?? -1)),
                a = Math.max(-1, ...o.filter(e => e.workerGeneration === n && e.sessionGeneration === i).map(e => e.startupAttempt ?? -1));
            return s.filter(e => {
                let {
                    context: t
                } = e;
                return (void 0 === t.workerGeneration || t.workerGeneration === n) && (void 0 === t.sessionGeneration || t.sessionGeneration === i) && (void 0 === t.startupAttempt || t.startupAttempt === a)
            })
        }

        function O(e) {
            if (!e.progress) return {
                records: [],
                coverage: "unavailable"
            };
            let t = E(e.progress, e.runnerId, e.documentBootId);
            return {
                records: t.flatMap(e => e.records.map(t => ({
                    ...e.context,
                    ...t
                }))),
                coverage: t.length ? e.progressDropped || t.some(e => "complete" !== e.coverage) ? "interrupted" : "complete" : "unavailable"
            }
        }
        r.d(t, {
            a: () => S,
            b: () => k,
            c: () => O,
            d: () => I
        })
    }),
    CVO: (function(e, t, r) {
        let s = EventTarget.prototype.addEventListener,
            o = EventTarget.prototype.removeEventListener;

        function n(e, t, r) {
            Reflect.apply(s, e, [t, r])
        }

        function i(e, t, r) {
            Reflect.apply(o, e, [t, r])
        }

        function a(e) {
            for (let t = globalThis; null !== t && t !== Object.prototype; t = Object.getPrototypeOf(t)) {
                let r = Object.getOwnPropertyDescriptor(t, e);
                if (r) return () => {
                    let t = r.get ? Reflect.apply(r.get, globalThis, []) : r.value;
                    if (null == t) throw Error(`Trusted browser API "${e}" is unavailable`);
                    return t
                }
            }
            return () => {
                throw Error(`Trusted browser API "${e}" is unavailable`)
            }
        }
        a("setTimeout"), a("clearTimeout"), a("setInterval"), a("clearInterval"), a("queueMicrotask"), a("requestAnimationFrame"), a("cancelAnimationFrame"), a("requestIdleCallback"), a("cancelIdleCallback"), a("Worker"), a("SharedWorker"), a("MessageChannel"), a("postMessage"), r.d(t, {
            a: () => n,
            b: () => i
        })
    }),
    ut9: (function(e, t, r) {
        let s, o = Symbol("DilInteractionCapability"),
            n = new WeakMap,
            i = null;

        function a() {
            return i
        }

        function d(e) {
            if (e.isTrusted && "u" > typeof navigator && navigator.userActivation?.isActive === !0) {
                let e;
                return e = Object.freeze({
                    [o]: !0
                }), n.set(e, {
                    consumed: !1
                }), e
            }
        }

        function c() {
            if (null == i) return !1;
            let e = n.get(i);
            return !!e && !e.consumed && (e.consumed = !0, !0)
        }

        function l(e) {
            return n.get(e)?.consumed === !0
        }

        function p(e) {
            n.delete(e)
        }

        function u() {
            return i && n.has(i) ? s : void 0
        }

        function h(e, t, r) {
            if (!n.has(e)) return t();
            let o = i,
                a = s;
            i = e, s = r;
            try {
                return t()
            } finally {
                i = o, s = a
            }
        }
        r.d(t, {
            a: () => c,
            b: () => d,
            c: () => a,
            d: () => u,
            e: () => p,
            f: () => l,
            g: () => h
        })
    }),
    hWg: (function(e, t, r) {
        let s = Object.freeze({
            status: "idle",
            available: !1,
            error: null
        });

        function o(e) {
            try {
                if (!e || "object" != typeof e || Array.isArray(e)) return;
                let t = {};
                for (let r of ["event_name", "statsig_event_name", "structured_event_name"]) {
                    let s = e[r];
                    if (void 0 !== s) {
                        if ("string" != typeof s || !s.trim() || s.length > 256) return;
                        t[r] = s
                    }
                }
                if (0 === Object.keys(t).length) return;
                let r = e.event_data;
                if (void 0 !== r) {
                    if (!r || "object" != typeof r || Array.isArray(r)) return;
                    let e = Object.keys(r);
                    if (e.length > 32) return;
                    for (let s of (t.event_data = Object.create(null), e)) {
                        let e = r[s];
                        if (s.length > 128 || !(null === e || "boolean" == typeof e || "string" == typeof e && e.length <= 2048 || "number" == typeof e && Number.isFinite(e))) return;
                        t.event_data[s] = e
                    }
                }
                if (JSON.stringify(t).length <= 16384) return t
            } catch {}
        }

        function n(e) {
            if (!e || "object" != typeof e || "string" != typeof e.text || !e.text.trim() || e.text.length > 32768) return null;
            let t = {
                text: e.text
            };
            for (let [r, s] of [
                    ["language", 128],
                    ["pronunciationHint", 4096],
                    ["version", 256],
                    ["source", 128]
                ]) {
                let o = e[r];
                if (void 0 !== o) {
                    if ("string" != typeof o || o.length > s) return null;
                    ("version" !== r || "" !== o) && (t[r] = o)
                }
            }
            return "number" == typeof e.playbackSpeed && Number.isFinite(e.playbackSpeed) && e.playbackSpeed >= .25 && e.playbackSpeed <= 4 && (t.playbackSpeed = e.playbackSpeed), t
        }

        function i(e) {
            if (!e || "object" != typeof e) return s;
            let t = null;
            if (e.error && "object" == typeof e.error) {
                let r = e.error,
                    s = r.failureStage;
                ("play" === s || "request" === s || "response" === s || "streaming" === s) && (t = {
                    failureStage: s
                }, "number" == typeof r.httpStatus && Number.isInteger(r.httpStatus) && r.httpStatus >= 100 && r.httpStatus <= 599 && (t.httpStatus = r.httpStatus))
            }
            return {
                available: !0 === e.available,
                status: t ? "idle" : "loading" === e.status || "playing" === e.status ? e.status : "idle",
                error: t
            }
        }
        r.d(t, {
            a: () => o,
            b: () => n,
            c: () => i
        }, {
            d: s
        })
    }),
    Whf: (function(e, t, r) {
        "use strict";
        (e = r.nmd(e)).path = "dil_renderer/src/DILAPI", Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DIL_PLUGIN_TOOL_UNCONFIRMED = void 0, t.DIL_PLUGIN_TOOL_UNCONFIRMED = "We couldn't confirm the result. Check the plugin before trying again."
    }),
    xnf: (function(e, t, r) {
        "use strict";
        (e = r.nmd(e)).path = "dil_renderer/src/DILApiFacade", Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.freezeObjectGraph = t.readDILModelNamedEntity = t.isDILModelEntityReference = t.readDILModelPluginToolPayload = t.createDILModelGenUIFacade = t.createDILGenUIFacade = t.hardenApiFacade = t.bindDILClientAction = void 0;
        let s = r("Whf"),
            o = new WeakMap;
        t.bindDILClientAction = function(e, t) {
            let r = {
                ...e
            };
            return o.set(r, t), r
        };
        let n = /^turn(?:0|[1-9]\d*)(product|business)(?:0|[1-9]\d*)(?![\s\S])/,
            i = "GenUI.openEntityDetail requires one reference or named entity.",
            a = "GenUI.runPluginTool requires one tool name and JSON arguments object.",
            d = new Set(["local_business", "restaurant", "hotel", "hospital", "point_of_interest", "urgent_care"]);

        function c(e) {
            return Object.setPrototypeOf(e, null), v(e, !1), e
        }
        async function l(e) {
            try {
                let t = await e();
                if (null !== t && "object" == typeof t) {
                    if ("error" === t.status && "string" == typeof t.statusMessage && t.statusMessage) return {
                        status: "error",
                        message: t.statusMessage
                    };
                    if ("success" === t.status && "string" == typeof t.dataJSON) return {
                        status: "success",
                        data: JSON.parse(t.dataJSON)
                    }
                }
            } catch {}
            return {
                status: "error",
                message: s.DIL_PLUGIN_TOOL_UNCONFIRMED
            }
        }

        function p(e) {
            if (!u(e)) throw TypeError(a);
            let t = Reflect.ownKeys(e),
                r = Object.getOwnPropertyDescriptor(e, "tool")?.value,
                s = Object.getOwnPropertyDescriptor(e, "arguments")?.value;
            if (2 !== t.length || !t.includes("tool") || !t.includes("arguments") || "string" != typeof r || !r.trim() || !u(s)) throw TypeError(a);
            return {
                tool: r,
                arguments: function e(t, r) {
                    if (null === t || "string" == typeof t || "boolean" == typeof t || "number" == typeof t && Number.isFinite(t)) return t;
                    if ("object" != typeof t || r.has(t) || !Array.isArray(t) && !u(t)) throw TypeError(a);
                    r.add(t);
                    try {
                        let s = Reflect.ownKeys(t);
                        if (Array.isArray(t)) {
                            if (Object.getPrototypeOf(t) !== Array.prototype || s.length !== t.length + 1) throw TypeError(a);
                            return Array.from({
                                length: t.length
                            }, (s, o) => {
                                let n = Object.getOwnPropertyDescriptor(t, o);
                                if (void 0 === n || !n.enumerable) throw TypeError(a);
                                return e(n.value, r)
                            })
                        }
                        let o = Object.create(null);
                        for (let n of s) {
                            let s = Object.getOwnPropertyDescriptor(t, n);
                            if ("string" != typeof n || void 0 === s || !s.enumerable || void 0 === s.value) throw TypeError(a);
                            o[n] = e(s.value, r)
                        }
                        return o
                    } finally {
                        r.delete(t)
                    }
                }(s, new Set)
            }
        }

        function u(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) return !1;
            let t = Object.getPrototypeOf(e);
            return t === Object.prototype || null === t
        }

        function h(e, t) {
            return t.length <= 128 && n.exec(t)?.[1] === e
        }

        function f(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) throw TypeError(i);
            let t = Reflect.ownKeys(e);
            if (!t.includes("category") || !t.includes("value") || t.some(e => "category" !== e && "value" !== e && "disambig" !== e && "location" !== e && "address" !== e)) throw TypeError(i);
            let r = g(e.category, 128).toLowerCase();
            if ("entity_sidebar_follow_up" === r) throw TypeError(i);
            let s = {
                category: "business" === r ? "local_business" : r,
                value: g(e.value, 1024),
                ...t.includes("disambig") ? {
                    disambig: g(e.disambig, 1024)
                } : {},
                ...t.includes("location") ? {
                    location: g(e.location, 1024)
                } : {},
                ...t.includes("address") ? {
                    address: g(e.address, 1024)
                } : {}
            };
            if (d.has(s.category) && !s.address && (!s.location || "user" === s.location.toLowerCase())) throw TypeError(i);
            return s
        }

        function g(e, t) {
            if ("string" != typeof e || e.length > t || !e.trim()) throw TypeError(i);
            return e.trim()
        }

        function m(e, t, r) {
            if (null === e || "object" != typeof e || Array.isArray(e)) throw Error("GenUI.dispatchAction requires an action object.");
            let s = {
                    handler: y(e.handler, "handler") ?? "client"
                },
                o = y(e.type, "type");
            void 0 !== o && (s.type = o);
            let n = y(e.loadingBehavior, "loadingBehavior");
            void 0 !== n && (s.loadingBehavior = n);
            let i = e.payload;
            if (void 0 !== i) {
                if (null === i || "object" != typeof i || Array.isArray(i)) throw Error("GenUI.dispatchAction requires payload to be an object.");
                s.payload = {
                    ...i
                }, (void 0 === r || "issue_new_turn" !== o) && delete s.payload.followup_metadata
            }
            let a = e.fallbackAction;
            if (void 0 !== a) {
                if (t >= 3) throw Error("GenUI.dispatchAction exceeds the maximum fallback depth.");
                s.fallbackAction = m(a, t + 1, r)
            }
            return void 0 === r ? s : {
                ...s,
                ...r
            }
        }

        function y(e, t) {
            if (void 0 !== e) {
                if ("string" != typeof e) throw Error(`GenUI.dispatchAction requires ${t} to be a string.`);
                return e
            }
        }

        function v(e, t) {
            ! function e(t, r, s) {
                var o;
                if (!(("object" != typeof(o = t) || null === o) && "function" != typeof o || s.has(t))) {
                    for (let o of (s.add(t), r && e(Object.getPrototypeOf(t), r, s), Reflect.ownKeys(t))) {
                        let n = Object.getOwnPropertyDescriptor(t, o);
                        void 0 !== n && ("value" in n ? e(n.value, r, s) : (e(n.get, r, s), e(n.set, r, s)))
                    }
                    if (Object.freeze(t), !Object.isFrozen(t)) throw Error("Failed to freeze an object in the object graph.")
                }
            }(e, t, new WeakSet)
        }
        t.hardenApiFacade = c, t.createDILGenUIFacade = function(e) {
            return c({
                dispatchAction(t, r) {
                    let s = m(t, 0, o.get(t));
                    return e(s, "client" === s.handler && "log_event" === s.type ? r : void 0)
                },
                dispatchWidgetAction(t) {
                    let r = t.nativeWidgetResolutionId,
                        s = t.componentName;
                    if ("string" != typeof r || !r || "string" != typeof s || !s) throw Error("Registered component action is missing its bound target.");
                    return e({
                        ...m(t, 0, void 0),
                        handler: "client" === t.handler ? "client" : "server",
                        nativeWidgetResolutionId: r,
                        componentName: s
                    })
                },
                logEvent(t) {
                    e({
                        handler: "client",
                        payload: t,
                        type: "log_event"
                    })
                },
                issueNewTurn(t, r) {
                    e({
                        handler: "client",
                        payload: {
                            ...r,
                            query: t
                        },
                        type: "issue_new_turn"
                    })
                },
                openEntityDetail(t, r, s) {
                    let o = {
                        category: t,
                        query: r
                    };
                    void 0 !== s && (o.extraParams = s), e({
                        handler: "client",
                        payload: o,
                        type: "open_entity_detail"
                    })
                },
                openImageLightbox(t, r) {
                    e({
                        handler: "client",
                        payload: {
                            images: t,
                            selected_index: r
                        },
                        type: "open_image_lightbox"
                    })
                },
                openUrl(t) {
                    e({
                        handler: "client",
                        payload: {
                            url: t
                        },
                        type: "open_url"
                    })
                }
            })
        }, t.createDILModelGenUIFacade = function(e) {
            return c({
                copy(t) {
                    if (1 != arguments.length || "string" != typeof t) throw TypeError("GenUI.copy requires one text string.");
                    e.dispatchAction({
                        handler: "client",
                        payload: {
                            value: t
                        },
                        type: "copy"
                    })
                },
                issueNewTurn(t) {
                    if (1 != arguments.length || "string" != typeof t) throw TypeError("GenUI.issueNewTurn requires one query string.");
                    e.issueNewTurn(t)
                },
                openEntityDetail(t) {
                    if (1 != arguments.length) throw TypeError(i);
                    if (null !== t && "object" == typeof t && "refId" in t) {
                        let r = function(e) {
                            if (null === e || "object" != typeof e || Array.isArray(e)) throw TypeError(i);
                            let t = Reflect.ownKeys(e),
                                r = e.category,
                                s = e.refId;
                            if (2 !== t.length || t.some(e => "category" !== e && "refId" !== e) || "product" !== r && "business" !== r || "string" != typeof s || !h(r, s)) throw TypeError(i);
                            return {
                                category: r,
                                refId: s
                            }
                        }(t);
                        e.openEntityDetail(r.category, r.refId)
                    } else {
                        let r = f(t);
                        e.dispatchAction({
                            handler: "client",
                            type: "open_entity_detail",
                            payload: {
                                ...r
                            }
                        })
                    }
                },
                openUrl(t) {
                    if (1 != arguments.length || "string" != typeof t) throw TypeError("GenUI.openUrl requires one URL string.");
                    e.openUrl(t)
                },
                runPluginTool(t) {
                    if (1 != arguments.length) throw TypeError(a);
                    let r = {
                        handler: "server",
                        type: "genui.run_plugin_tool",
                        payload: {
                            ...p(t)
                        }
                    };
                    return l(() => e.dispatchAction(r))
                }
            })
        }, t.readDILModelPluginToolPayload = p, t.isDILModelEntityReference = h, t.readDILModelNamedEntity = f, t.freezeObjectGraph = v
    }),
    cKf: (function(e, t, r) {
        "use strict";
        var s, o, n, i, a;
        (e = r.nmd(e)).path = "dil_renderer/src/DILDictation", Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.normalizeDILDictationOptions = t.DILDictationEventKind = t.DILDictationStatus = t.DILDictationContextKind = void 0, (s || (t.DILDictationContextKind = s = {})).SpeakingExercise = "speaking_exercise", (i = o || (t.DILDictationStatus = o = {})).Idle = "idle", i.Starting = "starting", i.Recording = "recording", i.Stopping = "stopping", i.Done = "done", i.Error = "error", (a = n || (t.DILDictationEventKind = n = {})).Recording = "recording", a.Transcript = "transcript", a.Stopping = "stopping", a.Done = "done", a.Error = "error", a.Cancelled = "cancelled", t.normalizeDILDictationOptions = function(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) return null;
            let t = e.language;
            if (void 0 !== t && ("string" != typeof t || !t.trim() || t.length > 128)) return null;
            let r = void 0 === t ? {} : {
                    language: t
                },
                o = e.context;
            if (void 0 === o) return r;
            if (null === o || "object" != typeof o || Array.isArray(o)) return null;
            let n = o.kind,
                i = o.expectedPhrase;
            return n === s.SpeakingExercise && "string" == typeof i && i.trim() ? {
                ...r,
                context: {
                    kind: n,
                    expectedPhrase: i
                }
            } : null
        }
    }),
    Btk: (function(e, t, r) {
        "use strict";
        (e = r.nmd(e)).path = "dil_renderer/src/DILDictationDeferredTurnOwner", Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.DILDictationDeferredTurnOwner = void 0;
        let s = r("xnf"),
            o = r("cKf");
        t.DILDictationDeferredTurnOwner = class {
            constructor(e, t) {
                this.recording = e, this.submission = t, this.disposed = !1
            }
            createSession(e, t) {
                if (this.disposed) throw Error("Deferred turn owner is disposed.");
                let r = this.attempt,
                    s = new n(this.submission, t);
                return (this.attempt = s, r?.retire(), this.attempt !== s || this.disposed) ? s.retire() : s.create(this.recording, e), s
            }
            dispose() {
                this.disposed = !0;
                let e = this.attempt;
                this.attempt = void 0, e?.retire()
            }
        };
        class n {
            constructor(e, t) {
                this.submission = e, this.onEvent = t, this.revoked = !1, this.starting = !1, this.done = !1, this.deferredTurn = (0, s.hardenApiFacade)({
                    complete: (e, t) => this.complete(e, t),
                    cancel: () => this.cancel()
                })
            }
            create(e, t) {
                this.session = e.createSession(t, e => this.receive(e)), this.revoked && this.dispose()
            }
            start() {
                if (!this.revoked && !this.starting) {
                    this.starting = !0;
                    try {
                        if (!this.submission.isContextValid() || this.revoked) return void this.cancel();
                        this.session?.start()
                    } catch (e) {
                        throw this.revoked = !0, e
                    } finally {
                        this.starting = !1
                    }
                }
            }
            stop() {
                try {
                    this.session?.stop()
                } catch (e) {
                    throw this.revoked = !0, e
                }
            }
            cancel() {
                this.revoked = !0;
                try {
                    this.session?.cancel()
                } catch (e) {
                    throw this.dispose(), e
                }
            }
            retire() {
                this.revoked = !0, this.dispose()
            }
            dispose() {
                this.done || (this.revoked = !0);
                let e = this.session;
                this.session = void 0, e?.dispose()
            }
            receive(e) {
                switch (e.kind) {
                    case o.DILDictationEventKind.Done:
                        this.done = !0;
                        break;
                    case o.DILDictationEventKind.Error:
                    case o.DILDictationEventKind.Cancelled:
                        this.revoked = !0
                }
                this.onEvent(e)
            }
            isCurrent() {
                return !this.revoked && !this.starting && this.done
            }
            complete(e, t) {
                let r, s;
                return void 0 !== this.completion ? this.completion : this.isCurrent() ? (this.completion = new Promise((e, t) => {
                    r = e, s = t
                }), this.submission.issueNewTurn(e, t, () => this.isCurrent()).then(r, s), this.completion) : Promise.resolve(!1)
            }
        }
    })
};