export const __rspack_esm_id = 736270;
export const __rspack_esm_ids = [736270];
export const __webpack_modules__ = {
    ekVC: (function(e, r, t) {
        var s = t("ZPGj");

        function o(e) {
            return e?.kind === "ready" ? e.service : e?.kind === "requires-auth" ? {
                createSession(r, t) {
                    let o = !1,
                        n = () => {
                            o || (o = !0, t({
                                kind: s.a.Cancelled
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
        t.d(r, {
            a: () => s.a,
            b: () => o,
            c: () => s.c
        })
    }),
    giC1: (function(e, r, t) {
        var s = t("CVOS");
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
                port: r,
                diagnostics: t,
                diagnosticContext: o
            }) {
                this.handlers = e, this.port = r, this.diagnostics = t, this.diagnosticContext = o, (0, s.a)(this.port, "message", this.handleMessage), this.port.start()
            }
            commands = new Proxy(Object.create(null), {
                get: (e, r) => {
                    if ("string" == typeof r && "then" !== r) return e => this.sendCommand(r, e)
                }
            });
            emit(e, r) {
                this.send({
                    __oaiDilMessage: !0,
                    data: r,
                    event: String(e),
                    kind: "event"
                })
            }
            on(e, r) {
                let t = String(e),
                    s = this.eventListeners.get(t) ?? new Set;
                return s.add(r), this.eventListeners.set(t, s), () => {
                    s.delete(r), 0 === s.size && this.eventListeners.delete(t)
                }
            }
            dispose() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DIL frame messenger disposed";
                if (this.disposed) return;
                this.disposed = !0, (0, s.b)(this.port, "message", this.handleMessage), this.port.close();
                let r = Error(e);
                for (let [e, t] of this.pendingCommands) this.diagnostics?.record("command", "cancelled", {
                    ...this.diagnosticContext,
                    requestId: e,
                    reason: "disposed"
                }), t.reject(r);
                this.pendingCommands.clear(), this.eventListeners.clear()
            }
            sendCommand(e, r) {
                if (this.disposed) return Promise.reject(Error("DIL frame messenger is disposed"));
                let t = `command_${this.commandIndex}`;
                return this.commandIndex += 1, this.diagnostics?.record("command", "begin", {
                    ...this.diagnosticContext,
                    requestId: t,
                    command: e,
                    pendingRequests: this.pendingCommands.size + 1
                }), new Promise((s, o) => {
                    this.pendingCommands.set(t, {
                        reject: o,
                        resolve: s
                    });
                    try {
                        this.send({
                            __oaiDilMessage: !0,
                            command: e,
                            data: r,
                            id: t,
                            kind: "command"
                        })
                    } catch (r) {
                        this.diagnostics?.fault("command", r, {
                            ...this.diagnosticContext,
                            requestId: t,
                            command: e
                        }), this.pendingCommands.delete(t), o(r)
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
                } catch (r) {
                    throw this.diagnostics?.fault("message", r, this.messageDetails(e)), r
                }
                this.diagnostics?.record("message", "sent", this.messageDetails(e))
            }
            handleMessage = e => {
                if (! function(e) {
                        if (null == e || "object" != typeof e || !0 !== e.__oaiDilMessage) return !1;
                        let r = e.kind;
                        return "ack" === r || "command" === r || "event" === r || "response" === r
                    }(e.data)) return;
                let r = e.data;
                switch (this.diagnostics?.record("message", "received", this.messageDetails(r)), r.kind) {
                    case "ack":
                        this.diagnostics?.record("command", "acknowledged", {
                            ...this.diagnosticContext,
                            requestId: r.id
                        });
                        break;
                    case "command":
                        this.handleCommand(r);
                        break;
                    case "event":
                        for (let e of this.eventListeners.get(r.event) ?? []) e(r.data);
                        break;
                    case "response": {
                        let e = this.pendingCommands.get(r.id);
                        if (!e) return;
                        this.pendingCommands.delete(r.id), this.diagnostics?.record("command", r.error ? "rejected" : "resolved", {
                            ...this.diagnosticContext,
                            requestId: r.id,
                            pendingRequests: this.pendingCommands.size
                        }), r.error ? e.reject(n(r.error)) : e.resolve(r.result)
                    }
                }
            };
            async handleCommand(e) {
                let r = "invokeGlobal" === e.command || "invokeMessengerCommand" === e.command ? "host_call" : "command",
                    t = this.diagnostics ? {
                        ...this.diagnosticContext,
                        requestId: e.id,
                        command: e.command
                    } : void 0,
                    s = Object.prototype.hasOwnProperty.call(this.handlers, e.command) ? this.handlers[e.command] : void 0;
                if (!s) return void this.sendResponseError(e.id, Error(`Unknown DIL frame command "${e.command}"`));
                let o = !1;
                try {
                    this.diagnostics?.record(r, "begin", t);
                    let n = s(e.data);
                    o = !0, this.diagnostics?.record(r, "returned", t), e.acknowledge && !this.disposed && this.send({
                        __oaiDilMessage: !0,
                        id: e.id,
                        kind: "ack"
                    });
                    let i = await n;
                    if (this.diagnostics?.record(r, "resolved", t), this.disposed) return;
                    try {
                        this.send({
                            __oaiDilMessage: !0,
                            id: e.id,
                            kind: "response",
                            result: i
                        })
                    } catch (r) {
                        this.sendResponseError(e.id, r)
                    }
                } catch (s) {
                    this.diagnostics?.record(r, o ? "rejected" : "threw", {
                        ...t,
                        error: s
                    }), this.disposed || this.sendResponseError(e.id, s)
                }
            }
            sendResponseError(e, r) {
                var t;
                this.send({
                    __oaiDilMessage: !0,
                    error: (t = r) instanceof Error ? {
                        message: t.message,
                        name: t.name
                    } : {
                        message: String(t),
                        name: "Error"
                    },
                    id: e,
                    kind: "response"
                })
            }
        }

        function n(e) {
            let r = Error(e.message);
            return Object.defineProperty(r, "name", {
                configurable: !0,
                enumerable: !0,
                value: e.name,
                writable: !0
            }), e.stack && (r.stack = e.stack), r
        }
        t.d(r, {
            a: () => o,
            b: () => n
        })
    }),
    KmX9: (function(e, r, t) {
        t.d(r, {
            a: () => l
        });
        var s = t("ekVC"),
            o = t("wbMq");
        t("aI9k");
        var n = t("ut9a");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto);
        let i = (e, r) => ({
                kind: s.a.Error,
                error: {
                    code: e,
                    message: r
                }
            }),
            a = e => "string" == typeof e && e.length <= 64 && /^[a-f0-9]{32}:\d+$/.test(e);
        class d {
            service;
            deferred;
            sessions = new Map;
            deferredSessions = new Map;
            constructor(e, r) {
                this.service = e, this.deferred = r
            }
            command(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !a(e.id)) return;
                let {
                    id: d
                } = e, c = this.sessions.get(d);
                if ("create" === e.action) {
                    if (c) return;
                    let t = (0, s.c)(e.options);
                    if (!t) return void r({
                        id: d,
                        sequence: 1,
                        event: i("invalid_options", "Invalid dictation options.")
                    });
                    if (!this.service || this.sessions.size >= 64) return void r({
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
                        let e = this.service.createSession(t, e => this.publish(d, o, e, r));
                        o.session = e, o.live || this.disposeSession(e)
                    } catch {
                        this.publish(d, o, i("host_error", "Dictation could not complete. Please try again."), r)
                    }
                    return
                }
                if ("startDeferred" === e.action) {
                    if (c || this.deferredSessions.has(d)) return;
                    let a = (0, s.c)(e.options);
                    if (!a || !this.service || !this.deferred || "string" != typeof e.widgetInstanceId || this.deferredSessions.size >= 64) return void r({
                        id: d,
                        sequence: 1,
                        event: i("host_error", "Dictation could not complete. Please try again.")
                    });
                    if (!t || navigator.userActivation?.isActive !== !0 || !(0, n.a)()) return void r({
                        id: d,
                        sequence: 1,
                        event: i("interaction_required", "Start dictation from a direct user interaction.")
                    });
                    let l = this.deferred.resolve(e.widgetInstanceId);
                    if (!l) return void r({
                        id: d,
                        sequence: 1,
                        event: i("host_error", "Dictation could not complete. Please try again.")
                    });
                    let p = {
                        owner: new o.a(this.service, l)
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
                        let e = p.owner.createSession(a, e => this.publish(d, u, e, r));
                        if (u.session = e, this.deferredSessions.get(d) !== p) return void this.disposeSession(e);
                        p.turn = e.deferredTurn, u.live ? e.start() : this.disposeSession(e)
                    } catch {
                        try {
                            this.publish(d, u, i("host_error", "Dictation could not complete. Please try again."), r)
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
                            if (!t || navigator.userActivation?.isActive !== !0 || !(0, n.a)()) return void this.publish(d, c, i("interaction_required", "Start dictation from a direct user interaction."), r);
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
                    this.publish(d, c, i("host_error", "Dictation could not complete. Please try again."), r)
                }
            }
            async deferredCommand(e) {
                if (!a(e.id)) return !1;
                if ("dispose" === e.action) return this.disposeDeferredSession(e.id), !1;
                let r = this.deferredSessions.get(e.id)?.turn;
                if (!r) return !1;
                if ("cancel" === e.action) return r.cancel(), !1;
                if ("string" != typeof e.query) return !1;
                try {
                    return await r.complete(e.query, e.payload)
                } catch {
                    throw Error("Deferred turn submission was not acknowledged.")
                }
            }
            reset() {
                let e = [...this.sessions.values()];
                for (let r of (this.sessions.clear(), e)) r.live = !1;
                for (let r of e) this.disposeSession(r.session);
                for (let e of this.deferredSessions.values()) this.disposeOwner(e.owner);
                this.deferredSessions.clear()
            }
            publish(e, r, t, o) {
                if (!r.live) return;
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
                    }(t) ?? i("host_error", "Dictation could not complete. Please try again."),
                    a = n.kind === s.a.Done || n.kind === s.a.Error || n.kind === s.a.Cancelled;
                a && this.remove(e, r);
                try {
                    o({
                        id: e,
                        sequence: ++r.sequence,
                        event: n
                    })
                } finally {
                    a && this.disposeSession(r.session)
                }
            }
            remove(e, r) {
                r.live = !1, this.sessions.get(e) === r && this.sessions.delete(e)
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
                let r = this.deferredSessions.get(e);
                if (!r) return;
                this.deferredSessions.delete(e);
                let t = this.sessions.get(e);
                t && this.remove(e, t), this.disposeOwner(r.owner)
            }
        }
        var c = t("Nn8K");

        function l(e, r) {
            let t = new c.a(e.speechSynthesis),
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
                    dictation: t => {
                        let s = r => e("dictationEvent", r);
                        if (t?.action === "start" || t?.action === "startDeferred") {
                            let e = !1;
                            r(t.interactionCapability, () => {
                                e = !0, i.command(t, s, !0)
                            }), e || i.command(t, s)
                        } else i.command(t, s)
                    },
                    deferredTurn: e => i.deferredCommand(e),
                    speech: s => {
                        let o = !1,
                            n = function() {
                                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                                o = !0;
                                try {
                                    t.command(r, r => e("speechState", r))
                                } catch {}
                            };
                        "play" === s.action || "stop" === s.action && void 0 !== s.logging ? (r(s.interactionCapability, () => n()), "stop" !== s.action || o || n({
                            ...s,
                            logging: void 0
                        })) : n()
                    }
                }),
                reset: () => {
                    i.reset(), t.reset()
                }
            }
        }
    }),
    NHPR: (function(e, r, t) {
        t.d(r, {
            a: () => 14,
            b: () => s.b,
            c: () => s.c
        }), t("giC1"), t("CVOS"), t("KmX9");
        var s = t("TJbQ");
        t("Nn8K")
    }),
    Nn8K: (function(e, r, t) {
        var s = t("ut9a"),
            o = t("hWgA");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto);
        class n {
            service;
            sessions = new Map;
            constructor(e) {
                this.service = e
            }
            command(e, r) {
                if (!e || "string" != typeof e.id || e.id.length > 64 || !/^[a-f0-9]{32}:\d+$/.test(e.id)) return;
                let {
                    id: t
                } = e, n = this.sessions.get(t);
                if ("create" === e.action) {
                    if (n) return;
                    let s = (0, o.b)(e.source);
                    if (!s || !this.service || this.sessions.size >= 64) return void r({
                        id: t,
                        state: o.d
                    });
                    let i = !0;
                    try {
                        let e = this.service.createSession(s, e => {
                            i && r({
                                id: t,
                                state: (0, o.c)(e)
                            })
                        });
                        this.sessions.set(t, {
                            play: r => e.play(r),
                            stop: r => e.stop(r),
                            dispose: () => {
                                i = !1, e.dispose()
                            }
                        })
                    } catch {
                        i = !1, r({
                            id: t,
                            state: o.d
                        })
                    }
                } else "play" === e.action ? n && navigator.userActivation?.isActive === !0 && (0, s.a)() && n.play((0, o.a)(e.logging)) : "stop" === e.action ? n?.stop(void 0 !== e.logging && navigator.userActivation?.isActive === !0 && (0, s.a)() ? (0, o.a)(e.logging) : void 0) : "dispose" === e.action && (this.sessions.delete(t), n?.dispose())
            }
            reset() {
                for (let e of this.sessions.values()) e.dispose();
                this.sessions.clear()
            }
        }
        t.d(r, {
            a: () => n
        })
    }),
    TJbQ: (function(e, r, t) {
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
            let r = `${e.operation}:${e.phase}`;
            return l.has(r) ? r : "health_probe" === e.operation && e.reason?.startsWith("target_") ? "worker_target" : "health_probe" === e.operation ? "fired" === e.phase ? "health_probe_expired" : "health_probe" : "recovery" === e.operation ? "recovery" : "event_loop" === e.operation ? "event_loop" : ["visibility", "pagehide", "pageshow", "freeze", "resume"].includes(e.operation) ? "lifecycle" : "frame_probe" === e.operation ? "frame_probe" : "module_load" === e.operation && "document_state" === e.reason ? "document_state" : "module_resource" === e.operation ? "module_resource" : "message" !== e.operation && "coverage" !== e.operation ? "last_progress" : void 0
        }

        function u(e) {
            return [e.realm, e.documentBootId, "worker" === e.realm ? e.workerGeneration : void 0, e.sourceId].join(":")
        }
        let h = new Set(["host_setup", "encode_globals", "read_persistence", "acquire_frame", "iframe_create", "iframe_load", "iframe_resource", "observer_bootstrap", "module_load", "module_resource", "module_entry", "frame_ready", "manager_create", "worker_create", "worker_control", "worker_module", "harden_worker", "runner_create", "worker_ready", "decode_globals", "decode_persistence", "unsafe_runner", "runtime_construct", "seed_runtime", "hydrate_state", "prepare_source", "update_source", "compile", "evaluate", "render", "render_operations", "snapshot_post", "commit_state", "persist_state", "flush", "flush_render", "flush_effects", "restore_source", "command", "host_call", "snapshot_receive", "snapshot_forward", "apply_tree", "notify", "react_snapshot", "react_materialize", "react_commit", "react_snapshot_effect", "react_node_error", "host_error", "fallback", "render_result", "frame_timer", "worker_timer", "request_timer", "health_probe", "idle_probe", "visibility", "pagehide", "pageshow", "freeze", "resume", "frame_probe", "event_loop", "recovery", "quarantine", "runner_dispose", "worker_stop", "frame_dispose", "message", "error", "coverage"]),
            g = new Set(["begin", "returned", "threw", "reported_error", "sent", "received", "acknowledged", "resolved", "rejected", "armed", "paused", "rearmed", "cancelled", "fired", "ignored", "decision"]),
            m = new Set(["initialize", "__dil_initialize", "createRunner", "disposeRunner", "initializeControl", "registerMessengerTransport", "unregisterMessengerTransport", "setCompiledDil", "setData", "setStateSnapshot", "trigger", "invokeGlobal", "invokeMessengerCommand", "snapshot", "lifecycle", "messengerEvent"]),
            f = ["workerGeneration", "sessionGeneration", "startupAttempt", "snapshotVersion", "renderPass", "spanId", "parentSpanId", "count", "pendingRequests", "pendingHostCalls", "peers", "budgetMs", "deadlineMs", "elapsedMs", "httpStatus", "resourceStartMs", "resourceEndMs", "navigationResponseEndMs", "navigationDomInteractiveMs"],
            v = ["triggerAcknowledged", "workerReadySent", "hidden", "persisted", "acknowledged", "replaySafe", "hasSuccessfulSnapshot", "treePresent", "hasError", "moduleEvaluationSupported"],
            y = ["documentBootId", "artifactId", "runnerId", "activeRunnerId", "resourceArtifactId", "triggerRunnerId", "triggerRequestId", "requestId", "relatedRequestId"],
            b = /^[a-zA-Z0-9_-]{1,96}$/;

        function _(e) {
            let r = {};
            for (let t of f) {
                let s = e[t];
                "number" == typeof s && Number.isFinite(s) && s >= 100 * ("httpStatus" === t) && ("httpStatus" !== t || s <= 599) && (r[t] = s)
            }
            for (let t of v) "boolean" == typeof e[t] && (r[t] = e[t]);
            for (let t of y) {
                let s = e[t];
                "string" == typeof s && b.test(s) && (r[t] = s)
            }
            for (let t of ["command", "triggerCommand"]) {
                let s = e[t];
                s && m.has(s) && (r[t] = s)
            }
            return ("loading" === e.documentReadyState || "interactive" === e.documentReadyState || "complete" === e.documentReadyState) && (r.documentReadyState = e.documentReadyState), e.cspDirective && ["script-src", "script-src-elem", "script-src-attr", "worker-src", "other"].includes(e.cspDirective) && (r.cspDirective = e.cspDirective), ("enforce" === e.cspDisposition || "report" === e.cspDisposition) && (r.cspDisposition = e.cspDisposition), e.cspResource && ["runner_module", "inline", "eval", "unknown"].includes(e.cspResource) && (r.cspResource = e.cspResource), "string" == typeof e.reason && /^[a-z_]{1,48}$/.test(e.reason) && (r.reason = e.reason), r
        }

        function w(e) {
            if (null === e || "object" != typeof e || !["host", "bootstrap", "iframe", "worker"].includes(e.realm) || "string" != typeof e.operation || !h.has(e.operation) || "string" != typeof e.phase || !g.has(e.phase) || !Number.isSafeInteger(e.sequence) || e.sequence < 0 || "number" != typeof e.localTimeMs || !Number.isFinite(e.localTimeMs) || "number" != typeof e.timeOriginMs || !Number.isFinite(e.timeOriginMs)) return;
            let r = {
                ..._(e),
                realm: e.realm,
                sequence: e.sequence,
                localTimeMs: e.localTimeMs,
                timeOriginMs: e.timeOriginMs,
                operation: e.operation,
                phase: e.phase
            };
            Number.isSafeInteger(e.sourceId) && e.sourceId >= 0 && (r.sourceId = e.sourceId);
            let t = e.fault;
            if (t && "string" == typeof t.name && /^(unknown|Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(t.name) && Array.isArray(t.locations) && t.locations.length <= 16) {
                let e = t.locations.filter(e => e && Number.isSafeInteger(e.line) && e.line >= 0 && e.line < 1e7 && Number.isSafeInteger(e.column) && e.column >= 0 && e.column < 1e7).map(e => {
                    let {
                        line: r,
                        column: t
                    } = e;
                    return Object.freeze({
                        line: r,
                        column: t
                    })
                });
                r.fault = Object.freeze({
                    name: t.name,
                    locations: Object.freeze(e),
                    stackUnavailable: 0 === e.length
                })
            }
            return r
        }

        function S(e) {
            return [e.realm, e.documentBootId, e.workerGeneration, e.sourceId, e.runnerId, e.sessionGeneration, e.startupAttempt].join(":")
        }

        function k(e, r, t) {
            let o = t ? r.hostReceivedAtMs : s();
            return {
                ...e,
                ..."number" == typeof o && Number.isFinite(o) && o >= 0 ? {
                    hostReceivedAtMs: o
                } : {}
            }
        }
        class I {
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
            record(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    let c = {
                        ...this.context,
                        ..._(t),
                        realm: this.realm,
                        sequence: ++this.sequence,
                        sourceId: this.sourceId,
                        localTimeMs: s(),
                        timeOriginMs: o,
                        operation: e,
                        phase: r
                    };
                    void 0 !== t.error && this.faultCount < 4 && (c.fault = function(e) {
                        let r = [],
                            t = "unknown";
                        try {
                            if (a?.(e)) {
                                t = d.get(i(e)) ?? t;
                                let s = n(e, "name")?.value;
                                "string" == typeof s && /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(s) && (t = s);
                                let o = n(e, "stack")?.value;
                                if ("string" == typeof o)
                                    for (let e of (t = /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)(?=:|$)/.exec(o)?.[1] ?? t, o.slice(0, 4096).split("\n").slice(1, 17))) {
                                        let t = /:(\d{1,7}):(\d{1,7})\)?$/.exec(e.trim());
                                        t && r.push({
                                            line: Number(t[1]),
                                            column: Number(t[2])
                                        })
                                    }
                            }
                        } catch {}
                        return Object.freeze({
                            name: t,
                            locations: Object.freeze(r.map(e => Object.freeze(e))),
                            stackUnavailable: 0 === r.length
                        })
                    }(t.error), this.faultCount++), this.retain(c, "complete"), this.forward(c), 512 === this.sequence && this.record("coverage", "ignored", {
                        reason: "overflow"
                    })
                } catch {
                    this.dropped++
                }
            }
            trace(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    s = ++this.span,
                    o = this.parentSpanId,
                    n = {
                        ...t,
                        spanId: s,
                        parentSpanId: o
                    };
                this.record(e, "begin", n), this.parentSpanId = s;
                try {
                    let t = r();
                    return this.record(e, "returned", n), t
                } catch (r) {
                    throw this.fault(e, r, n), r
                } finally {
                    this.parentSpanId = o
                }
            }
            fault(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.record(e, "threw", {
                    ...t,
                    error: r
                })
            }
            ingest(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    let s = w(e);
                    if (!s) return void this.dropped++;
                    let o = S(s);
                    if (s.sequence <= (this.sequences.get(o) ?? -1)) return;
                    this.sequences.set(o, s.sequence), this.sequences.size > 32 && this.sequences.delete(this.sequences.keys().next().value);
                    let n = k(s, e, t),
                        i = u(s),
                        a = this.progressSources.get(i),
                        d = a ? a.complete && s.sequence === a.sequence + 1 && "coverage" !== s.operation : 1 === s.sequence && "coverage" !== s.operation;
                    if (s.sequence > (a?.sequence ?? -1) && (this.progressSources.set(i, {
                            sequence: s.sequence,
                            complete: d
                        }), this.progressSources.size > 64 && this.progressSources.delete(this.progressSources.keys().next().value), !d))
                        for (let e of this.progress.values()) u(e.slots.values().next().value) === i && (e.coverage = "interrupted");
                    this.retain(n, d ? "complete" : "interrupted"), r && this.forward(s)
                } catch {
                    this.dropped++
                }
            }
            mergeSnapshot(e) {
                let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    t = arguments.length > 2 ? arguments[2] : void 0,
                    s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "merge";
                try {
                    if (null === e || "object" != typeof e || 1 !== e.schemaVersion || !Array.isArray(e.records) || !Array.isArray(e.openOperations)) return this.dropped++, !1;
                    if (t) {
                        let r = [...e.records.slice(0, 256), ...e.openOperations.slice(0, 32)];
                        if (Array.isArray(e.progress))
                            for (let s of e.progress.slice(0, 64)) {
                                if (!s || !Array.isArray(s.records)) return this.markProgressDropped(t.runnerId), !1;
                                for (let e of s.records.slice(0, 40)) r.push({
                                    ...s.context,
                                    ...e
                                })
                            }
                        if (!r.every(e => null !== e && "object" == typeof e && Object.entries(t).every(r => {
                                let [t, s] = r;
                                return void 0 === s || e[t] === s
                            }))) return this.markProgressDropped(t.runnerId), !1
                    }
                    if (Array.isArray(e.observedRealms))
                        for (let r of e.observedRealms.slice(0, 4))("host" === r || "bootstrap" === r || "iframe" === r || "worker" === r) && this.observedRealms.add(r);
                    for (let t of e.records.slice(0, 256)) this.ingest(t, !1, r);
                    for (let t of ("replace" === s && Array.isArray(e.progress) && this.resetDocumentProgress(), e.openOperations.slice(0, 32))) {
                        let e = w(t);
                        if (!e || "begin" !== e.phase || void 0 === e.spanId) {
                            this.dropped++;
                            continue
                        }
                        this.observeSpan(k(e, t, r))
                    }
                    let o = !0;
                    if (Array.isArray(e.progress)) {
                        let t = this.progressDropped;
                        for (let t of e.progress.slice(0, 64)) this.mergeProgress(t, r);
                        e.progress.length > 64 && this.markProgressDropped(), o = t === this.progressDropped
                    }
                    if (Number.isSafeInteger(e.progressDropped) && e.progressDropped > 0) {
                        this.progressDropped = Math.max(this.progressDropped, e.progressDropped);
                        let r = "string" == typeof e.runnerId && b.test(e.runnerId) && (this.progressLoss.has(e.runnerId) || this.progressLoss.size < 64) ? e.runnerId : "";
                        this.progressLoss.set(r, Math.max(this.progressLoss.get(r) ?? 0, e.progressDropped))
                    }
                    let n = w(e.records[0] ?? e.openOperations[0]),
                        i = n ? S(n) : "empty",
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
                let r = !1;
                return () => {
                    if (r) return;
                    r = !0;
                    let t = (this.retainedRunners.get(e) ?? 1) - 1;
                    t ? this.retainedRunners.set(e, t) : this.retainedRunners.delete(e)
                }
            }
            snapshot() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = [...this.progress.values()].filter(r => {
                        let t = r.slots.values().next().value;
                        return !e.runnerId || !t.runnerId || t.runnerId === e.runnerId
                    }).map(e => {
                        let r = [...e.slots.values()],
                            {
                                realm: t,
                                sourceId: s,
                                timeOriginMs: o,
                                documentBootId: n,
                                artifactId: i,
                                runnerId: a,
                                workerGeneration: d,
                                sessionGeneration: c,
                                startupAttempt: l
                            } = r[0];
                        return {
                            context: {
                                realm: t,
                                sourceId: s,
                                timeOriginMs: o,
                                documentBootId: n,
                                artifactId: i,
                                runnerId: a,
                                workerGeneration: d,
                                sessionGeneration: c,
                                startupAttempt: l
                            },
                            records: r.map(e => {
                                let {
                                    realm: r,
                                    sourceId: t,
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
                    t = e.runnerId ? [...D(r, e.runnerId, this.context.documentBootId)].sort((r, t) => Number(t.context.runnerId === e.runnerId) - Number(r.context.runnerId === e.runnerId)) : r,
                    s = [],
                    o = 2,
                    n = 0;
                for (let e of t) {
                    let r = JSON.stringify(JSON.stringify(e)).length + 1;
                    if (o + r > 8192) {
                        n++;
                        continue
                    }
                    o += r, s.push(Object.freeze({
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
                let r = e && (this.progressLoss.has(e) || this.progressLoss.size < 64) ? e : "";
                this.progressLoss.set(r, (this.progressLoss.get(r) ?? 0) + 1)
            }
            observeProgress(e, r, t) {
                let s = p(e);
                if (!s) return;
                let o = S(e),
                    n = this.progress.get(o),
                    i = n?.slots.get(s);
                if (n && (n.lastSequence = Math.max(n.lastSequence, e.sequence)), i && "event_loop" === s && (i.elapsedMs ?? 0) - (i.budgetMs ?? 0) >= (e.elapsedMs ?? 0) - (e.budgetMs ?? 0) || i && ("first_fault" === s || l.has(s) ? i.sequence <= e.sequence : i.sequence >= e.sequence)) return;
                let a = (t ??= JSON.stringify(e).length) - (i ? JSON.stringify(i).length : 0);
                for (; !n && this.progress.size >= 64 || this.progressBytes + a > 65536;) {
                    let r = [...this.progress].find(e => {
                        let [r, t] = e, s = t.slots.values().next().value.runnerId;
                        return r !== o && s && !this.retainedRunners.has(s)
                    });
                    if (!r) {
                        this.markProgressDropped(e.runnerId), n && (n.coverage = "interrupted");
                        return
                    }
                    this.progressBytes -= r[1].bytes, this.progress.delete(r[0]), this.markProgressDropped(r[1].slots.values().next().value.runnerId)
                }
                if (n || (n = {
                        slots: new Map,
                        lastSequence: 0,
                        coverage: r,
                        bytes: 0
                    }, this.progress.set(o, n)), n.bytes + a > 12288 || !i && n.slots.size >= 40) {
                    this.markProgressDropped(e.runnerId), n.coverage = "interrupted";
                    return
                }
                n.slots.set(s, Object.freeze(e)), n.lastSequence = Math.max(n.lastSequence, e.sequence), "complete" !== r && (n.coverage = r), n.bytes += a, this.progressBytes += a
            }
            mergeProgress(e, r) {
                if (!e || "object" != typeof e || !Array.isArray(e.records) || 0 === e.records.length || e.records.length > 40 || !Number.isSafeInteger(e.lastSequence) || e.lastSequence < 0 || !["complete", "interrupted", "unavailable"].includes(e.coverage ?? "")) return void this.markProgressDropped();
                let t = e.records.map(r => w({
                        ...e.context,
                        ...r
                    })),
                    s = t[0];
                if (!s || t.some(r => !r || S(r) !== S(s) || r.sequence > e.lastSequence || !p(r))) return void this.markProgressDropped();
                let o = this.progress.get(S(s));
                if (o && e.lastSequence < o.lastSequence) return;
                let n = this.progressDropped;
                for (let s = 0; s < t.length; s++) this.observeProgress(k(t[s], e.records[s], r), e.coverage);
                let i = this.progress.get(S(s));
                i && (i.lastSequence = Math.max(i.lastSequence, e.lastSequence), i.coverage = this.progressDropped === n ? e.coverage : "interrupted")
            }
            observeSpan(e) {
                if (void 0 !== e.spanId) {
                    let r = `${S(e)}:${e.spanId}`;
                    if ("begin" === e.phase) {
                        if ((this.completedSpans.get(r) ?? -1) >= e.sequence || (this.open.get(r)?.sequence ?? -1) >= e.sequence) return;
                        this.open.has(r) || this.open.size < 32 ? this.open.set(r, Object.freeze(e)) : this.dropped++
                    } else("returned" === e.phase || "threw" === e.phase) && (this.open.delete(r), this.completedSpans.set(r, e.sequence), this.completedSpans.size > 256 && this.completedSpans.delete(this.completedSpans.keys().next().value))
                }
            }
            retain(e, r) {
                let t = JSON.stringify(e).length;
                this.observeProgress(e, r, t), this.observedRealms.add(e.realm), this.observeSpan(e);
                let s = this.entries.length < 8 || void 0 !== e.fault && !this.entries.some(e => e.record.fault);
                for (; this.entries.length >= 256 || this.bytes + t > 32768;) {
                    let e = this.entries.findIndex(e => !e.pinned);
                    if (e < 0) return void this.dropped++;
                    this.bytes -= this.entries[e].bytes, this.entries.splice(e, 1), this.dropped++
                }
                this.entries.push({
                    record: Object.freeze(e),
                    bytes: t,
                    pinned: s
                }), this.bytes += t
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

        function E(e, r, t, s) {
            let o = new I({
                realm: "host",
                context: {
                    documentBootId: e.documentBootId,
                    runnerId: e.runnerId
                }
            });
            o.mergeSnapshot(e, !0, void 0, "replace"), o.record(r, t, s);
            let n = o.snapshot({
                runnerId: e.runnerId
            });
            return Object.freeze({
                ...e,
                ...n
            })
        }

        function D(e, r, t) {
            let s = e.filter(e => {
                    let {
                        context: s
                    } = e;
                    return (!r || !s.runnerId || s.runnerId === r) && (!t || !s.documentBootId || s.documentBootId === t)
                }),
                o = s.map(e => e.context).filter(e => e.runnerId === r),
                n = Math.max(-1, ...o.map(e => e.workerGeneration ?? -1)),
                i = Math.max(-1, ...o.filter(e => e.workerGeneration === n).map(e => e.sessionGeneration ?? -1)),
                a = Math.max(-1, ...o.filter(e => e.workerGeneration === n && e.sessionGeneration === i).map(e => e.startupAttempt ?? -1));
            return s.filter(e => {
                let {
                    context: r
                } = e;
                return (void 0 === r.workerGeneration || r.workerGeneration === n) && (void 0 === r.sessionGeneration || r.sessionGeneration === i) && (void 0 === r.startupAttempt || r.startupAttempt === a)
            })
        }

        function q(e) {
            if (!e.progress) return {
                records: [],
                coverage: "unavailable"
            };
            let r = D(e.progress, e.runnerId, e.documentBootId);
            return {
                records: r.flatMap(e => e.records.map(r => ({
                    ...e.context,
                    ...r
                }))),
                coverage: r.length ? e.progressDropped || r.some(e => "complete" !== e.coverage) ? "interrupted" : "complete" : "unavailable"
            }
        }
        t.d(r, {
            a: () => I,
            b: () => E,
            c: () => q,
            d: () => w
        })
    }),
    CVOS: (function(e, r, t) {
        let s = EventTarget.prototype.addEventListener,
            o = EventTarget.prototype.removeEventListener;

        function n(e, r, t) {
            Reflect.apply(s, e, [r, t])
        }

        function i(e, r, t) {
            Reflect.apply(o, e, [r, t])
        }

        function a(e) {
            for (let r = globalThis; null !== r && r !== Object.prototype; r = Object.getPrototypeOf(r)) {
                let t = Object.getOwnPropertyDescriptor(r, e);
                if (t) return () => {
                    let r = t.get ? Reflect.apply(t.get, globalThis, []) : t.value;
                    if (null == r) throw Error(`Trusted browser API "${e}" is unavailable`);
                    return r
                }
            }
            return () => {
                throw Error(`Trusted browser API "${e}" is unavailable`)
            }
        }
        a("setTimeout"), a("clearTimeout"), a("setInterval"), a("clearInterval"), a("queueMicrotask"), a("requestAnimationFrame"), a("cancelAnimationFrame"), a("requestIdleCallback"), a("cancelIdleCallback"), a("Worker"), a("SharedWorker"), a("MessageChannel"), a("postMessage"), t.d(r, {
            a: () => n,
            b: () => i
        })
    }),
    ut9a: (function(e, r, t) {
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

        function h(e, r, t) {
            if (!n.has(e)) return r();
            let o = i,
                a = s;
            i = e, s = t;
            try {
                return r()
            } finally {
                i = o, s = a
            }
        }
        t.d(r, {
            a: () => c,
            b: () => d,
            c: () => a,
            d: () => u,
            e: () => p,
            f: () => l,
            g: () => h
        })
    }),
    hWgA: (function(e, r, t) {
        let s = Object.freeze({
            status: "idle",
            available: !1,
            error: null
        });

        function o(e) {
            try {
                if (!e || "object" != typeof e || Array.isArray(e)) return;
                let r = {};
                for (let t of ["event_name", "statsig_event_name", "structured_event_name"]) {
                    let s = e[t];
                    if (void 0 !== s) {
                        if ("string" != typeof s || !s.trim() || s.length > 256) return;
                        r[t] = s
                    }
                }
                if (0 === Object.keys(r).length) return;
                let t = e.event_data;
                if (void 0 !== t) {
                    if (!t || "object" != typeof t || Array.isArray(t)) return;
                    let e = Object.keys(t);
                    if (e.length > 32) return;
                    for (let s of (r.event_data = Object.create(null), e)) {
                        let e = t[s];
                        if (s.length > 128 || !(null === e || "boolean" == typeof e || "string" == typeof e && e.length <= 2048 || "number" == typeof e && Number.isFinite(e))) return;
                        r.event_data[s] = e
                    }
                }
                if (JSON.stringify(r).length <= 16384) return r
            } catch {}
        }

        function n(e) {
            if (!e || "object" != typeof e || "string" != typeof e.text || !e.text.trim() || e.text.length > 32768) return null;
            let r = {
                text: e.text
            };
            for (let [t, s] of [
                    ["language", 128],
                    ["pronunciationHint", 4096],
                    ["version", 256],
                    ["source", 128]
                ]) {
                let o = e[t];
                if (void 0 !== o) {
                    if ("string" != typeof o || o.length > s) return null;
                    ("version" !== t || "" !== o) && (r[t] = o)
                }
            }
            return "number" == typeof e.playbackSpeed && Number.isFinite(e.playbackSpeed) && e.playbackSpeed >= .25 && e.playbackSpeed <= 4 && (r.playbackSpeed = e.playbackSpeed), r
        }

        function i(e) {
            if (!e || "object" != typeof e) return s;
            let r = null;
            if (e.error && "object" == typeof e.error) {
                let t = e.error,
                    s = t.failureStage;
                ("play" === s || "request" === s || "response" === s || "streaming" === s) && (r = {
                    failureStage: s
                }, "number" == typeof t.httpStatus && Number.isInteger(t.httpStatus) && t.httpStatus >= 100 && t.httpStatus <= 599 && (r.httpStatus = t.httpStatus))
            }
            return {
                available: !0 === e.available,
                status: r ? "idle" : "loading" === e.status || "playing" === e.status ? e.status : "idle",
                error: r
            }
        }
        t.d(r, {
            a: () => o,
            b: () => n,
            c: () => i
        }, {
            d: s
        })
    }),
    aI9k: (function(e, r, t) {
        new WeakMap;
        let s = /^turn(?:0|[1-9]\d*)(product|business)(?:0|[1-9]\d*)(?![\s\S])/,
            o = "GenUI.openEntityDetail requires one reference or named entity.",
            n = "GenUI.runPluginTool requires one tool name and JSON arguments object.",
            i = new Set(["local_business", "restaurant", "hotel", "hospital", "point_of_interest", "urgent_care"]);

        function a(e) {
            return Object.setPrototypeOf(e, null), h(e, !1), e
        }

        function d(e) {
            if (!c(e)) throw TypeError(n);
            let r = Reflect.ownKeys(e),
                t = Object.getOwnPropertyDescriptor(e, "tool")?.value,
                s = Object.getOwnPropertyDescriptor(e, "arguments")?.value;
            if (2 !== r.length || !r.includes("tool") || !r.includes("arguments") || "string" != typeof t || !t.trim() || !c(s)) throw TypeError(n);
            return {
                tool: t,
                arguments: function e(r, t) {
                    if (null === r || "string" == typeof r || "boolean" == typeof r || "number" == typeof r && Number.isFinite(r)) return r;
                    if ("object" != typeof r || t.has(r) || !Array.isArray(r) && !c(r)) throw TypeError(n);
                    t.add(r);
                    try {
                        let s = Reflect.ownKeys(r);
                        if (Array.isArray(r)) {
                            if (Object.getPrototypeOf(r) !== Array.prototype || s.length !== r.length + 1) throw TypeError(n);
                            return Array.from({
                                length: r.length
                            }, (s, o) => {
                                let i = Object.getOwnPropertyDescriptor(r, o);
                                if (void 0 === i || !i.enumerable) throw TypeError(n);
                                return e(i.value, t)
                            })
                        }
                        let o = Object.create(null);
                        for (let i of s) {
                            let s = Object.getOwnPropertyDescriptor(r, i);
                            if ("string" != typeof i || void 0 === s || !s.enumerable || void 0 === s.value) throw TypeError(n);
                            o[i] = e(s.value, t)
                        }
                        return o
                    } finally {
                        t.delete(r)
                    }
                }(s, new Set)
            }
        }

        function c(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) return !1;
            let r = Object.getPrototypeOf(e);
            return r === Object.prototype || null === r
        }

        function l(e, r) {
            return r.length <= 128 && s.exec(r)?.[1] === e
        }

        function p(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) throw TypeError(o);
            let r = Reflect.ownKeys(e);
            if (!r.includes("category") || !r.includes("value") || r.some(e => "category" !== e && "value" !== e && "disambig" !== e && "location" !== e && "address" !== e)) throw TypeError(o);
            let t = u(e.category, 128).toLowerCase();
            if ("entity_sidebar_follow_up" === t) throw TypeError(o);
            let s = {
                category: "business" === t ? "local_business" : t,
                value: u(e.value, 1024),
                ...r.includes("disambig") ? {
                    disambig: u(e.disambig, 1024)
                } : {},
                ...r.includes("location") ? {
                    location: u(e.location, 1024)
                } : {},
                ...r.includes("address") ? {
                    address: u(e.address, 1024)
                } : {}
            };
            if (i.has(s.category) && !s.address && (!s.location || "user" === s.location.toLowerCase())) throw TypeError(o);
            return s
        }

        function u(e, r) {
            if ("string" != typeof e || e.length > r || !e.trim()) throw TypeError(o);
            return e.trim()
        }

        function h(e, r) {
            ! function e(r, t, s) {
                var o;
                if (!(("object" != typeof(o = r) || null === o) && "function" != typeof o || s.has(r))) {
                    for (let o of (s.add(r), t && e(Object.getPrototypeOf(r), t, s), Reflect.ownKeys(r))) {
                        let n = Object.getOwnPropertyDescriptor(r, o);
                        void 0 !== n && ("value" in n ? e(n.value, t, s) : (e(n.get, t, s), e(n.set, t, s)))
                    }
                    if (Object.freeze(r), !Object.isFrozen(r)) throw Error("Failed to freeze an object in the object graph.")
                }
            }(e, r, new WeakSet)
        }
        t.d(r, {
            a: () => h,
            b: () => a,
            c: () => l,
            d: () => p,
            e: () => d
        })
    }),
    ZPGj: (function(e, r, t) {
        var s, o, n, i, a;

        function d(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) return null;
            let r = e.language;
            if (void 0 !== r && ("string" != typeof r || !r.trim() || r.length > 128)) return null;
            let t = void 0 === r ? {} : {
                    language: r
                },
                o = e.context;
            if (void 0 === o) return t;
            if (null === o || "object" != typeof o || Array.isArray(o)) return null;
            let n = o.kind,
                i = o.expectedPhrase;
            return n === s.SpeakingExercise && "string" == typeof i && i.trim() ? {
                ...t,
                context: {
                    kind: n,
                    expectedPhrase: i
                }
            } : null
        }(s || (s = {})).SpeakingExercise = "speaking_exercise", (i = o || (o = {})).Idle = "idle", i.Starting = "starting", i.Recording = "recording", i.Stopping = "stopping", i.Done = "done", i.Error = "error", (a = n || (n = {})).Recording = "recording", a.Transcript = "transcript", a.Stopping = "stopping", a.Done = "done", a.Error = "error", a.Cancelled = "cancelled", t.d(r, {
            a: () => n,
            b: () => o,
            c: () => d
        })
    }),
    wbMq: (function(e, r, t) {
        var s = t("aI9k"),
            o = t("ZPGj");
        class n {
            constructor(e, r) {
                this.recording = e, this.submission = r, this.disposed = !1
            }
            createSession(e, r) {
                if (this.disposed) throw Error("Deferred turn owner is disposed.");
                let t = this.attempt,
                    s = new i(this.submission, r);
                return (this.attempt = s, t?.retire(), this.attempt !== s || this.disposed) ? s.retire() : s.create(this.recording, e), s
            }
            dispose() {
                this.disposed = !0;
                let e = this.attempt;
                this.attempt = void 0, e?.retire()
            }
        }
        class i {
            constructor(e, r) {
                this.submission = e, this.onEvent = r, this.revoked = !1, this.starting = !1, this.done = !1, this.deferredTurn = (0, s.b)({
                    complete: (e, r) => this.complete(e, r),
                    cancel: () => this.cancel()
                })
            }
            create(e, r) {
                this.session = e.createSession(r, e => this.receive(e)), this.revoked && this.dispose()
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
                    case o.a.Done:
                        this.done = !0;
                        break;
                    case o.a.Error:
                    case o.a.Cancelled:
                        this.revoked = !0
                }
                this.onEvent(e)
            }
            isCurrent() {
                return !this.revoked && !this.starting && this.done
            }
            complete(e, r) {
                let t, s;
                return void 0 !== this.completion ? this.completion : this.isCurrent() ? (this.completion = new Promise((e, r) => {
                    t = e, s = r
                }), this.submission.issueNewTurn(e, r, () => this.isCurrent()).then(t, s), this.completion) : Promise.resolve(!1)
            }
        }
        t.d(r, {
            a: () => n
        })
    })
};