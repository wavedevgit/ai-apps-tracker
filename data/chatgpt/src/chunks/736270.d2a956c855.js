export const __rspack_esm_ids = [736270];
export const __webpack_modules__ = {
    ekVC: (function(e, r, t) {
        var s = t("Ueee");
        t.d(r, {
            a: () => s.a,
            c: () => s.c
        }, {
            b: function(e) {
                return e?.kind === "ready" ? e.service : e?.kind === "requires-auth" ? {
                    createSession(r, t) {
                        let o = !1,
                            i = () => {
                                o || (o = !0, t({
                                    kind: s.a.Cancelled
                                }))
                            };
                        return {
                            start() {
                                o || (i(), e.requestAuthentication())
                            },
                            stop: i,
                            cancel: i,
                            dispose() {
                                o = !0
                            }
                        }
                    }
                } : void 0
            }
        })
    }),
    giC1: (function(e, r, t) {
        var s = t("CVOS");

        function o(e) {
            let r = Error(e.message);
            return Object.defineProperty(r, "name", {
                configurable: !0,
                enumerable: !0,
                value: e.name,
                writable: !0
            }), e.stack && (r.stack = e.stack), r
        }
        t.d(r, {}, {
            a: class {
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
                            }), r.error ? e.reject(o(r.error)) : e.resolve(r.result)
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
                        let i = s(e.data);
                        o = !0, this.diagnostics?.record(r, "returned", t), e.acknowledge && !this.disposed && this.send({
                            __oaiDilMessage: !0,
                            id: e.id,
                            kind: "ack"
                        });
                        let n = await i;
                        if (this.diagnostics?.record(r, "resolved", t), this.disposed) return;
                        try {
                            this.send({
                                __oaiDilMessage: !0,
                                id: e.id,
                                kind: "response",
                                result: n
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
            },
            b: o
        })
    }),
    KmX9: (function(e, r, t) {
        t.d(r, {
            a: () => h
        });
        var s = t("ekVC"),
            o = t("Li5d");
        t("uF1z");
        var i = t("Ueee"),
            n = t("MZiS"),
            a = t("ut9a");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto);
        let d = (e, r) => ({
                kind: s.a.Error,
                error: {
                    code: e,
                    message: r
                }
            }),
            c = console,
            l = e => "string" == typeof e && e.length <= 64 && /^[a-f0-9]{32}:\d+$/.test(e);
        class p {
            service;
            deferred;
            sessions = new Map;
            deferredSessions = new Map;
            constructor(e, r) {
                this.service = e, this.deferred = r
            }
            subscribeAudioLevels = (e, r) => this.sessions.get(e)?.levels.subscribe(r) ?? (() => {});
            command(e, r) {
                let t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!e || !l(e.id)) return;
                let {
                    id: i
                } = e, c = this.sessions.get(i);
                if ("create" === e.action) {
                    if (c) return;
                    let t = (0, s.c)(e.options);
                    if (!t) return void r({
                        id: i,
                        sequence: 1,
                        event: d("invalid_options", "Invalid dictation options.")
                    });
                    if (!this.service || this.sessions.size >= 64) return void r({
                        id: i,
                        sequence: 1,
                        event: d("integration_error", "The dictation host service is not configured or has reached its session limit.")
                    });
                    let o = c = {
                        live: !0,
                        started: !1,
                        stopped: !1,
                        sequence: 0,
                        levels: new n.a,
                        audioLevelsEnabled: !0 === t.audioLevels && !0 === this.service.supportsAudioLevels,
                        warnedAudioLevel: !1
                    };
                    this.sessions.set(i, o);
                    try {
                        let e = this.service.createSession(t, e => this.publish(i, o, e, r));
                        o.session = e, o.live || this.disposeSession(e)
                    } catch {
                        this.publish(i, o, d("host_error", "Dictation could not complete. Please try again."), r)
                    }
                    return
                }
                if ("startDeferred" === e.action) {
                    if (c || this.deferredSessions.has(i)) return;
                    let l = (0, s.c)(e.options);
                    if (!l || !this.service || !this.deferred || "string" != typeof e.widgetInstanceId || this.deferredSessions.size >= 64 || this.sessions.size >= 64) return void r({
                        id: i,
                        sequence: 1,
                        event: d("host_error", "Dictation could not complete. Please try again.")
                    });
                    if (!t || navigator.userActivation?.isActive !== !0 || !(0, a.a)()) return void r({
                        id: i,
                        sequence: 1,
                        event: d("interaction_required", "Start dictation from a direct user interaction.")
                    });
                    let p = this.deferred.resolve(e.widgetInstanceId);
                    if (!p) return void r({
                        id: i,
                        sequence: 1,
                        event: d("host_error", "Dictation could not complete. Please try again.")
                    });
                    let u = {
                        owner: new o.a(this.service, p)
                    };
                    this.deferredSessions.set(i, u);
                    let h = {
                        live: !0,
                        started: !0,
                        stopped: !1,
                        sequence: 0,
                        levels: new n.a,
                        audioLevelsEnabled: !0 === l.audioLevels && !0 === this.service.supportsAudioLevels,
                        warnedAudioLevel: !1
                    };
                    this.sessions.set(i, h);
                    try {
                        let e = u.owner.createSession(l, e => this.publish(i, h, e, r));
                        if (h.session = e, this.deferredSessions.get(i) !== u) return void this.disposeSession(e);
                        u.turn = e.deferredTurn, h.live ? e.start() : this.disposeSession(e)
                    } catch {
                        try {
                            this.publish(i, h, d("host_error", "Dictation could not complete. Please try again."), r)
                        } finally {
                            this.disposeDeferredSession(i)
                        }
                    }
                    return
                }
                if (c?.live) try {
                    switch (e.action) {
                        case "start":
                            if (c.started || c.stopped) return;
                            if (!t || navigator.userActivation?.isActive !== !0 || !(0, a.a)()) return void this.publish(i, c, d("interaction_required", "Start dictation from a direct user interaction."), r);
                            c.started = !0, c.session?.start();
                            break;
                        case "stop":
                            if (!c.started || c.stopped) return;
                            c.stopped = !0, c.levels.publish(null), c.live && c.session?.stop();
                            break;
                        case "cancel":
                            this.remove(i, c);
                            try {
                                c.session?.cancel()
                            } finally {
                                this.disposeSession(c.session)
                            }
                            break;
                        case "dispose":
                            this.remove(i, c), this.disposeSession(c.session)
                    }
                } catch {
                    this.publish(i, c, d("host_error", "Dictation could not complete. Please try again."), r)
                }
            }
            async deferredCommand(e) {
                if (!l(e.id)) return !1;
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
                for (let r of e) r.levels.dispose(), this.disposeSession(r.session);
                for (let e of this.deferredSessions.values()) this.disposeOwner(e.owner);
                this.deferredSessions.clear()
            }
            publish(e, r, t, o) {
                if (!r.live) return;
                let n = function(e) {
                    try {
                        if (!e || "object" != typeof e) return;
                        switch (e.kind) {
                            case s.a.AudioLevel:
                                return null;
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
                    } catch {}
                }(t);
                if (!r.live) return;
                if (null === n) {
                    if (!r.audioLevelsEnabled || !r.started || r.stopped) return;
                    let e = (0, i.d)(t);
                    if (!r.live || r.stopped) return;
                    if (void 0 === e) r.warnedAudioLevel || (r.warnedAudioLevel = !0, c.warn("Invalid DIL dictation audio level"));
                    else r.levels.publish(e);
                    return
                }
                let a = n ?? d("host_error", "Dictation could not complete. Please try again.");
                if (a.kind === s.a.Stopping && (r.stopped = !0, r.levels.publish(null), !r.live)) return;
                let l = a.kind === s.a.Done || a.kind === s.a.Error || a.kind === s.a.Cancelled;
                l && this.remove(e, r);
                try {
                    o({
                        id: e,
                        sequence: ++r.sequence,
                        event: a
                    })
                } finally {
                    l && this.disposeSession(r.session)
                }
            }
            remove(e, r) {
                r.live = !1, this.sessions.get(e) === r && this.sessions.delete(e), r.levels.dispose()
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
        var u = t("Nn8K");

        function h(e, r) {
            let t = new u.a(e.speechSynthesis),
                o = (0, s.b)(e.dictation),
                i = e.dictation?.kind === "ready" ? e.deferredTurn : void 0,
                n = new p(o, i);
            return {
                subscribeDictationAudioLevels: n.subscribeAudioLevels,
                initialization: {
                    ...void 0 !== e.speechSynthesis ? {
                        speechSynthesis: !0
                    } : {},
                    ...void 0 !== o ? {
                        dictation: !0,
                        supportsDictationAudioLevels: !0 === o.supportsAudioLevels
                    } : {},
                    ...i ? {
                        supportsDeferredTurns: !0
                    } : {}
                },
                handlers: e => ({
                    dictation: t => {
                        let s = r => e("dictationEvent", r);
                        if (t?.action === "start" || t?.action === "startDeferred") {
                            let e = !1;
                            r(t.interactionCapability, () => {
                                e = !0, n.command(t, s, !0)
                            }), e || n.command(t, s)
                        } else n.command(t, s)
                    },
                    deferredTurn: e => n.deferredCommand(e),
                    speech: s => {
                        let o = !1,
                            i = function() {
                                let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
                                o = !0;
                                try {
                                    t.command(r, r => e("speechState", r))
                                } catch {}
                            };
                        "play" === s.action || "stop" === s.action && void 0 !== s.logging ? (r(s.interactionCapability, () => i()), "stop" !== s.action || o || i({
                            ...s,
                            logging: void 0
                        })) : i()
                    }
                }),
                reset: () => {
                    n.reset(), t.reset()
                }
            }
        }
    }),
    NHPR: (function(e, r, t) {
        t.d(r, {
            a: () => 15,
            b: () => s.b,
            c: () => s.c
        }), t("giC1"), t("CVOS"), t("KmX9");
        var s = t("TJbQ");
        t("Nn8K")
    }),
    Nn8K: (function(e, r, t) {
        var s = t("ut9a"),
            o = t("hWgA");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto), t.d(r, {}, {
            a: class {
                service;
                sessions = new Map;
                constructor(e) {
                    this.service = e
                }
                command(e, r) {
                    if (!e || "string" != typeof e.id || e.id.length > 64 || !/^[a-f0-9]{32}:\d+$/.test(e.id)) return;
                    let {
                        id: t
                    } = e, i = this.sessions.get(t);
                    if ("create" === e.action) {
                        if (i) return;
                        let s = (0, o.b)(e.source);
                        if (!s || !this.service || this.sessions.size >= 64) return void r({
                            id: t,
                            state: o.d
                        });
                        let n = !0;
                        try {
                            let e = this.service.createSession(s, e => {
                                n && r({
                                    id: t,
                                    state: (0, o.c)(e)
                                })
                            });
                            this.sessions.set(t, {
                                play: r => e.play(r),
                                stop: r => e.stop(r),
                                dispose: () => {
                                    n = !1, e.dispose()
                                }
                            })
                        } catch {
                            n = !1, r({
                                id: t,
                                state: o.d
                            })
                        }
                    } else "play" === e.action ? i && navigator.userActivation?.isActive === !0 && (0, s.a)() && i.play((0, o.a)(e.logging)) : "stop" === e.action ? i?.stop(void 0 !== e.logging && navigator.userActivation?.isActive === !0 && (0, s.a)() ? (0, o.a)(e.logging) : void 0) : "dispose" === e.action && (this.sessions.delete(t), i?.dispose())
                }
                reset() {
                    for (let e of this.sessions.values()) e.dispose();
                    this.sessions.clear()
                }
            }
        })
    }),
    TJbQ: (function(e, r, t) {
        let s = "u" < typeof performance ? Date.now.bind(Date) : performance.now.bind(performance),
            o = "u" < typeof performance ? 0 : performance.timeOrigin,
            i = Object.getOwnPropertyDescriptor,
            n = Object.getPrototypeOf,
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
            f = new Set(["begin", "returned", "threw", "reported_error", "sent", "received", "acknowledged", "resolved", "rejected", "armed", "paused", "rearmed", "cancelled", "fired", "ignored", "decision"]),
            g = new Set(["initialize", "__dil_initialize", "createRunner", "disposeRunner", "initializeControl", "registerMessengerTransport", "unregisterMessengerTransport", "setCompiledDil", "setData", "setStateSnapshot", "trigger", "invokeGlobal", "invokeMessengerCommand", "snapshot", "lifecycle", "messengerEvent"]),
            m = ["workerGeneration", "sessionGeneration", "startupAttempt", "snapshotVersion", "renderPass", "spanId", "parentSpanId", "count", "pendingRequests", "pendingHostCalls", "peers", "budgetMs", "deadlineMs", "elapsedMs", "httpStatus", "resourceStartMs", "resourceEndMs", "navigationResponseEndMs", "navigationDomInteractiveMs"],
            v = ["triggerAcknowledged", "workerReadySent", "hidden", "persisted", "acknowledged", "replaySafe", "hasSuccessfulSnapshot", "treePresent", "hasError", "moduleEvaluationSupported"],
            y = ["documentBootId", "artifactId", "runnerId", "activeRunnerId", "resourceArtifactId", "triggerRunnerId", "triggerRequestId", "requestId", "relatedRequestId"],
            b = /^[a-zA-Z0-9_-]{1,96}$/;

        function _(e) {
            let r = {};
            for (let t of m) {
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
                s && g.has(s) && (r[t] = s)
            }
            return ("loading" === e.documentReadyState || "interactive" === e.documentReadyState || "complete" === e.documentReadyState) && (r.documentReadyState = e.documentReadyState), e.cspDirective && ["script-src", "script-src-elem", "script-src-attr", "worker-src", "other"].includes(e.cspDirective) && (r.cspDirective = e.cspDirective), ("enforce" === e.cspDisposition || "report" === e.cspDisposition) && (r.cspDisposition = e.cspDisposition), e.cspResource && ["runner_module", "inline", "eval", "unknown"].includes(e.cspResource) && (r.cspResource = e.cspResource), "string" == typeof e.reason && /^[a-z_]{1,48}$/.test(e.reason) && (r.reason = e.reason), r
        }

        function w(e) {
            if (null === e || "object" != typeof e || !["host", "bootstrap", "iframe", "worker"].includes(e.realm) || "string" != typeof e.operation || !h.has(e.operation) || "string" != typeof e.phase || !f.has(e.phase) || !Number.isSafeInteger(e.sequence) || e.sequence < 0 || "number" != typeof e.localTimeMs || !Number.isFinite(e.localTimeMs) || "number" != typeof e.timeOriginMs || !Number.isFinite(e.timeOriginMs)) return;
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
                                t = d.get(n(e)) ?? t;
                                let s = i(e, "name")?.value;
                                "string" == typeof s && /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(s) && (t = s);
                                let o = i(e, "stack")?.value;
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
                    i = {
                        ...t,
                        spanId: s,
                        parentSpanId: o
                    };
                this.record(e, "begin", i), this.parentSpanId = s;
                try {
                    let t = r();
                    return this.record(e, "returned", i), t
                } catch (r) {
                    throw this.fault(e, r, i), r
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
                    let i = k(s, e, t),
                        n = u(s),
                        a = this.progressSources.get(n),
                        d = a ? a.complete && s.sequence === a.sequence + 1 && "coverage" !== s.operation : 1 === s.sequence && "coverage" !== s.operation;
                    if (s.sequence > (a?.sequence ?? -1) && (this.progressSources.set(n, {
                            sequence: s.sequence,
                            complete: d
                        }), this.progressSources.size > 64 && this.progressSources.delete(this.progressSources.keys().next().value), !d))
                        for (let e of this.progress.values()) u(e.slots.values().next().value) === n && (e.coverage = "interrupted");
                    this.retain(i, d ? "complete" : "interrupted"), r && this.forward(s)
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
                    let i = w(e.records[0] ?? e.openOperations[0]),
                        n = i ? S(i) : "empty",
                        a = this.upstreamDropped.get(n) ?? 0,
                        d = "number" == typeof e.dropped && Number.isSafeInteger(e.dropped) && e.dropped >= 0 ? e.dropped : 0,
                        c = Math.max(0, e.records.length - 256) + Math.max(0, e.openOperations.length - 32),
                        l = Math.min(Number.MAX_SAFE_INTEGER, d + c);
                    return this.dropped = Math.min(Number.MAX_SAFE_INTEGER, this.dropped + Math.max(0, l - a)), this.upstreamDropped.set(n, Math.max(a, l)), this.upstreamDropped.size > 32 && this.upstreamDropped.delete(this.upstreamDropped.keys().next().value), this.upstreamTruncated ||= !0 === e.truncated || c > 0, o
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
                                documentBootId: i,
                                artifactId: n,
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
                                documentBootId: i,
                                artifactId: n,
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
                                    artifactId: i,
                                    runnerId: n,
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
                    t = e.runnerId ? [...E(r, e.runnerId, this.context.documentBootId)].sort((r, t) => Number(t.context.runnerId === e.runnerId) - Number(r.context.runnerId === e.runnerId)) : r,
                    s = [],
                    o = 2,
                    i = 0;
                for (let e of t) {
                    let r = JSON.stringify(JSON.stringify(e)).length + 1;
                    if (o + r > 8192) {
                        i++;
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
                    progressDropped: i + (e.runnerId ? (this.progressLoss.get(e.runnerId) ?? 0) + (this.progressLoss.get("") ?? 0) : this.progressDropped),
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
                    i = this.progress.get(o),
                    n = i?.slots.get(s);
                if (i && (i.lastSequence = Math.max(i.lastSequence, e.sequence)), n && "event_loop" === s && (n.elapsedMs ?? 0) - (n.budgetMs ?? 0) >= (e.elapsedMs ?? 0) - (e.budgetMs ?? 0) || n && ("first_fault" === s || l.has(s) ? n.sequence <= e.sequence : n.sequence >= e.sequence)) return;
                let a = (t ??= JSON.stringify(e).length) - (n ? JSON.stringify(n).length : 0);
                for (; !i && this.progress.size >= 64 || this.progressBytes + a > 65536;) {
                    let r = [...this.progress].find(e => {
                        let [r, t] = e, s = t.slots.values().next().value.runnerId;
                        return r !== o && s && !this.retainedRunners.has(s)
                    });
                    if (!r) {
                        this.markProgressDropped(e.runnerId), i && (i.coverage = "interrupted");
                        return
                    }
                    this.progressBytes -= r[1].bytes, this.progress.delete(r[0]), this.markProgressDropped(r[1].slots.values().next().value.runnerId)
                }
                if (i || (i = {
                        slots: new Map,
                        lastSequence: 0,
                        coverage: r,
                        bytes: 0
                    }, this.progress.set(o, i)), i.bytes + a > 12288 || !n && i.slots.size >= 40) {
                    this.markProgressDropped(e.runnerId), i.coverage = "interrupted";
                    return
                }
                i.slots.set(s, Object.freeze(e)), i.lastSequence = Math.max(i.lastSequence, e.sequence), "complete" !== r && (i.coverage = r), i.bytes += a, this.progressBytes += a
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
                let i = this.progressDropped;
                for (let s = 0; s < t.length; s++) this.observeProgress(k(t[s], e.records[s], r), e.coverage);
                let n = this.progress.get(S(s));
                n && (n.lastSequence = Math.max(n.lastSequence, e.lastSequence), n.coverage = this.progressDropped === i ? e.coverage : "interrupted")
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

        function E(e, r, t) {
            let s = e.filter(e => {
                    let {
                        context: s
                    } = e;
                    return (!r || !s.runnerId || s.runnerId === r) && (!t || !s.documentBootId || s.documentBootId === t)
                }),
                o = s.map(e => e.context).filter(e => e.runnerId === r),
                i = Math.max(-1, ...o.map(e => e.workerGeneration ?? -1)),
                n = Math.max(-1, ...o.filter(e => e.workerGeneration === i).map(e => e.sessionGeneration ?? -1)),
                a = Math.max(-1, ...o.filter(e => e.workerGeneration === i && e.sessionGeneration === n).map(e => e.startupAttempt ?? -1));
            return s.filter(e => {
                let {
                    context: r
                } = e;
                return (void 0 === r.workerGeneration || r.workerGeneration === i) && (void 0 === r.sessionGeneration || r.sessionGeneration === n) && (void 0 === r.startupAttempt || r.startupAttempt === a)
            })
        }
        t.d(r, {}, {
            a: I,
            b: function(e, r, t, s) {
                let o = new I({
                    realm: "host",
                    context: {
                        documentBootId: e.documentBootId,
                        runnerId: e.runnerId
                    }
                });
                o.mergeSnapshot(e, !0, void 0, "replace"), o.record(r, t, s);
                let i = o.snapshot({
                    runnerId: e.runnerId
                });
                return Object.freeze({
                    ...e,
                    ...i
                })
            },
            c: function(e) {
                if (!e.progress) return {
                    records: [],
                    coverage: "unavailable"
                };
                let r = E(e.progress, e.runnerId, e.documentBootId);
                return {
                    records: r.flatMap(e => e.records.map(r => ({
                        ...e.context,
                        ...r
                    }))),
                    coverage: r.length ? e.progressDropped || r.some(e => "complete" !== e.coverage) ? "interrupted" : "complete" : "unavailable"
                }
            },
            d: w
        })
    }),
    CVOS: (function(e, r, t) {
        let s = EventTarget.prototype.addEventListener,
            o = EventTarget.prototype.removeEventListener;

        function i(e) {
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
        i("setTimeout"), i("clearTimeout"), i("setInterval"), i("clearInterval"), i("queueMicrotask"), i("requestAnimationFrame"), i("cancelAnimationFrame"), i("requestIdleCallback"), i("cancelIdleCallback"), i("Worker"), i("SharedWorker"), i("MessageChannel"), i("postMessage"), t.d(r, {}, {
            a: function(e, r, t) {
                Reflect.apply(s, e, [r, t])
            },
            b: function(e, r, t) {
                Reflect.apply(o, e, [r, t])
            }
        })
    }),
    ut9a: (function(e, r, t) {
        let s, o = Symbol("DilInteractionCapability"),
            i = new WeakMap,
            n = null;
        t.d(r, {}, {
            a: function() {
                if (null == n) return !1;
                let e = i.get(n);
                return !!e && !e.consumed && (e.consumed = !0, !0)
            },
            b: function(e) {
                if (e.isTrusted && "u" > typeof navigator && navigator.userActivation?.isActive === !0) {
                    let e;
                    return e = Object.freeze({
                        [o]: !0
                    }), i.set(e, {
                        consumed: !1
                    }), e
                }
            },
            c: function() {
                return n
            },
            d: function() {
                return n && i.has(n) ? s : void 0
            },
            e: function(e) {
                i.delete(e)
            },
            f: function(e) {
                return i.get(e)?.consumed === !0
            },
            g: function(e, r, t) {
                if (!i.has(e)) return r();
                let o = n,
                    a = s;
                n = e, s = t;
                try {
                    return r()
                } finally {
                    n = o, s = a
                }
            }
        })
    }),
    hWgA: (function(e, r, t) {
        let s = Object.freeze({
            status: "idle",
            available: !1,
            error: null
        });
        t.d(r, {}, {
            a: function(e) {
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
            },
            b: function(e) {
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
            },
            c: function(e) {
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
            },
            d: s
        })
    }),
    uF1z: (function(e, r, t) {
        new WeakMap;
        let s = /^turn(?:0|[1-9]\d*)(product|business)(?:0|[1-9]\d*)(?![\s\S])/,
            o = "GenUI.openEntityDetail requires one reference or named entity.",
            i = "GenUI.runPluginTool requires one tool name and JSON arguments object.",
            n = new Set(["local_business", "restaurant", "hotel", "hospital", "point_of_interest", "urgent_care"]);

        function a(e) {
            if (null === e || "object" != typeof e || Array.isArray(e)) return !1;
            let r = Object.getPrototypeOf(e);
            return r === Object.prototype || null === r
        }

        function d(e, r) {
            if ("string" != typeof e || e.length > r || !e.trim()) throw TypeError(o);
            return e.trim()
        }

        function c(e, r) {
            ! function e(r, t, s) {
                var o;
                if (!(("object" != typeof(o = r) || null === o) && "function" != typeof o || s.has(r))) {
                    for (let o of (s.add(r), t && e(Object.getPrototypeOf(r), t, s), Reflect.ownKeys(r))) {
                        let i = Object.getOwnPropertyDescriptor(r, o);
                        void 0 !== i && ("value" in i ? e(i.value, t, s) : (e(i.get, t, s), e(i.set, t, s)))
                    }
                    if (Object.freeze(r), !Object.isFrozen(r)) throw Error("Failed to freeze an object in the object graph.")
                }
            }(e, r, new WeakSet)
        }
        t.d(r, {}, {
            a: c,
            b: function(e) {
                return Object.setPrototypeOf(e, null), c(e, !1), e
            },
            c: function(e, r) {
                return r.length <= 128 && s.exec(r)?.[1] === e
            },
            d: function(e) {
                if (null === e || "object" != typeof e || Array.isArray(e)) throw TypeError(o);
                let r = Reflect.ownKeys(e);
                if (!r.includes("category") || !r.includes("value") || r.some(e => "category" !== e && "value" !== e && "disambig" !== e && "location" !== e && "address" !== e)) throw TypeError(o);
                let t = d(e.category, 128).toLowerCase();
                if ("entity_sidebar_follow_up" === t) throw TypeError(o);
                let s = {
                    category: "business" === t ? "local_business" : t,
                    value: d(e.value, 1024),
                    ...r.includes("disambig") ? {
                        disambig: d(e.disambig, 1024)
                    } : {},
                    ...r.includes("location") ? {
                        location: d(e.location, 1024)
                    } : {},
                    ...r.includes("address") ? {
                        address: d(e.address, 1024)
                    } : {}
                };
                if (n.has(s.category) && !s.address && (!s.location || "user" === s.location.toLowerCase())) throw TypeError(o);
                return s
            },
            e: function(e) {
                if (!a(e)) throw TypeError(i);
                let r = Reflect.ownKeys(e),
                    t = Object.getOwnPropertyDescriptor(e, "tool")?.value,
                    s = Object.getOwnPropertyDescriptor(e, "arguments")?.value;
                if (2 !== r.length || !r.includes("tool") || !r.includes("arguments") || "string" != typeof t || !t.trim() || !a(s)) throw TypeError(i);
                return {
                    tool: t,
                    arguments: function e(r, t) {
                        if (null === r || "string" == typeof r || "boolean" == typeof r || "number" == typeof r && Number.isFinite(r)) return r;
                        if ("object" != typeof r || t.has(r) || !Array.isArray(r) && !a(r)) throw TypeError(i);
                        t.add(r);
                        try {
                            let s = Reflect.ownKeys(r);
                            if (Array.isArray(r)) {
                                if (Object.getPrototypeOf(r) !== Array.prototype || s.length !== r.length + 1) throw TypeError(i);
                                return Array.from({
                                    length: r.length
                                }, (s, o) => {
                                    let n = Object.getOwnPropertyDescriptor(r, o);
                                    if (void 0 === n || !n.enumerable) throw TypeError(i);
                                    return e(n.value, t)
                                })
                            }
                            let o = Object.create(null);
                            for (let n of s) {
                                let s = Object.getOwnPropertyDescriptor(r, n);
                                if ("string" != typeof n || void 0 === s || !s.enumerable || void 0 === s.value) throw TypeError(i);
                                o[n] = e(s.value, t)
                            }
                            return o
                        } finally {
                            t.delete(r)
                        }
                    }(s, new Set)
                }
            }
        })
    }),
    Ueee: (function(e, r, t) {
        var s, o, i, n, a;
        (s || (s = {})).SpeakingExercise = "speaking_exercise", (n = o || (o = {})).Idle = "idle", n.Starting = "starting", n.Recording = "recording", n.Stopping = "stopping", n.Done = "done", n.Error = "error", (a = i || (i = {})).Recording = "recording", a.AudioLevel = "audio_level", a.Transcript = "transcript", a.Stopping = "stopping", a.Done = "done", a.Error = "error", a.Cancelled = "cancelled", t.d(r, {
            a: () => i,
            b: () => o
        }, {
            c: function(e) {
                if (null === e || "object" != typeof e || Array.isArray(e)) return null;
                let r = e.language;
                if (void 0 !== r && ("string" != typeof r || !r.trim() || r.length > 128)) return null;
                let t = e.audioLevels,
                    o = {
                        ...void 0 === r ? {} : {
                            language: r
                        },
                        ..."boolean" == typeof t ? {
                            audioLevels: t
                        } : {}
                    },
                    i = e.context;
                if (void 0 === i) return o;
                if (null === i || "object" != typeof i || Array.isArray(i)) return null;
                let n = i.kind,
                    a = i.expectedPhrase;
                return n === s.SpeakingExercise && "string" == typeof a && a.trim() ? {
                    ...o,
                    context: {
                        kind: n,
                        expectedPhrase: a
                    }
                } : null
            },
            d: function(e) {
                try {
                    let r = e.rms;
                    if (Number.isFinite(r) && r >= 0 && r <= 1) return r
                } catch {}
            }
        })
    }),
    MZiS: (function(e, r, t) {
        t.d(r, {}, {
            a: class {
                constructor() {
                    this.audioLevelConsole = console, this.rms = null, this.disposed = !1, this.revision = 0, this.observers = new Set
                }
                publish(e) {
                    this.disposed || (this.rms = e, this.notify())
                }
                dispose() {
                    this.disposed || (this.disposed = !0, this.rms = null, this.notify(), this.observers.clear())
                }
                subscribe(e) {
                    if (this.disposed) return () => {};
                    let r = r => e(r);
                    return this.observers.add(r), this.deliver(r), () => {
                        this.observers.delete(r)
                    }
                }
                notify() {
                    let e = ++this.revision;
                    for (let r of Array.from(this.observers)) {
                        if (e !== this.revision) break;
                        this.observers.has(r) && this.deliver(r)
                    }
                }
                deliver(e) {
                    try {
                        e(this.rms)
                    } catch {
                        this.audioLevelConsole.warn("DIL dictation audio-level subscriber failed")
                    }
                }
            }
        })
    }),
    Li5d: (function(e, r, t) {
        var s = t("uF1z"),
            o = t("Ueee");
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
        t.d(r, {}, {
            a: class {
                constructor(e, r) {
                    this.recording = e, this.submission = r, this.disposed = !1
                }
                get supportsAudioLevels() {
                    return !0 === this.recording.supportsAudioLevels
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
        })
    })
};