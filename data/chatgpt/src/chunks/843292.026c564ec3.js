export const __rspack_esm_ids = [843292];
export const __webpack_modules__ = {
    ekVC: (function(a, b, c) {
        var d = c("SkuY");
        let e = d.c;
        c.d(b, {
            a: () => d.a
        }, {
            b: function(a) {
                return a?.kind === "ready" ? a.service : a?.kind === "requires-auth" ? {
                    createSession(b, c) {
                        let e = !1,
                            f = () => {
                                e || (e = !0, c({
                                    kind: d.a.Cancelled
                                }))
                            };
                        return {
                            start() {
                                e || (f(), a.requestAuthentication())
                            },
                            stop: f,
                            cancel: f,
                            dispose() {
                                e = !0
                            }
                        }
                    }
                } : void 0
            },
            c: e
        })
    }),
    giC1: (function(a, b, c) {
        var d = c("CVOS");

        function e(a) {
            let b = Error(a.message);
            return Object.defineProperty(b, "name", {
                configurable: !0,
                enumerable: !0,
                value: a.name,
                writable: !0
            }), a.stack && (b.stack = a.stack), b
        }
        c.d(b, {}, {
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
                    handlers: a,
                    port: b,
                    diagnostics: c,
                    diagnosticContext: e
                }) {
                    this.handlers = a, this.port = b, this.diagnostics = c, this.diagnosticContext = e, (0, d.a)(this.port, "message", this.handleMessage), this.port.start()
                }
                commands = new Proxy(Object.create(null), {
                    get: (a, b) => {
                        if ("string" == typeof b && "then" !== b) return a => this.sendCommand(b, a)
                    }
                });
                emit(a, b) {
                    this.send({
                        __oaiDilMessage: !0,
                        data: b,
                        event: String(a),
                        kind: "event"
                    })
                }
                on(a, b) {
                    let c = String(a),
                        d = this.eventListeners.get(c) ?? new Set;
                    return d.add(b), this.eventListeners.set(c, d), () => {
                        d.delete(b), 0 === d.size && this.eventListeners.delete(c)
                    }
                }
                dispose() {
                    let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "DIL frame messenger disposed";
                    if (this.disposed) return;
                    this.disposed = !0, (0, d.b)(this.port, "message", this.handleMessage), this.port.close();
                    let b = Error(a);
                    for (let [a, c] of this.pendingCommands) this.diagnostics?.record("command", "cancelled", {
                        ...this.diagnosticContext,
                        requestId: a,
                        reason: "disposed"
                    }), c.reject(b);
                    this.pendingCommands.clear(), this.eventListeners.clear()
                }
                sendCommand(a, b) {
                    if (this.disposed) return Promise.reject(Error("DIL frame messenger is disposed"));
                    let c = `command_${this.commandIndex}`;
                    return this.commandIndex += 1, this.diagnostics?.record("command", "begin", {
                        ...this.diagnosticContext,
                        requestId: c,
                        command: a,
                        pendingRequests: this.pendingCommands.size + 1
                    }), new Promise((d, e) => {
                        this.pendingCommands.set(c, {
                            reject: e,
                            resolve: d
                        });
                        try {
                            this.send({
                                __oaiDilMessage: !0,
                                command: a,
                                data: b,
                                id: c,
                                kind: "command"
                            })
                        } catch (b) {
                            this.diagnostics?.fault("command", b, {
                                ...this.diagnosticContext,
                                requestId: c,
                                command: a
                            }), this.pendingCommands.delete(c), e(b)
                        }
                    })
                }
                messageDetails(a) {
                    return {
                        ...this.diagnosticContext,
                        command: "event" === a.kind ? a.event : "command" === a.kind ? a.command : void 0,
                        requestId: "id" in a ? a.id : void 0,
                        reason: a.kind
                    }
                }
                send(a) {
                    if (this.disposed) throw Error("DIL frame messenger is disposed");
                    try {
                        this.port.postMessage(a)
                    } catch (b) {
                        throw this.diagnostics?.fault("message", b, this.messageDetails(a)), b
                    }
                    this.diagnostics?.record("message", "sent", this.messageDetails(a))
                }
                handleMessage = a => {
                    if (! function(a) {
                            if (null == a || "object" != typeof a || !0 !== a.__oaiDilMessage) return !1;
                            let b = a.kind;
                            return "ack" === b || "command" === b || "event" === b || "response" === b
                        }(a.data)) return;
                    let b = a.data;
                    switch (this.diagnostics?.record("message", "received", this.messageDetails(b)), b.kind) {
                        case "ack":
                            this.diagnostics?.record("command", "acknowledged", {
                                ...this.diagnosticContext,
                                requestId: b.id
                            });
                            break;
                        case "command":
                            this.handleCommand(b);
                            break;
                        case "event":
                            for (let a of this.eventListeners.get(b.event) ?? []) a(b.data);
                            break;
                        case "response": {
                            let a = this.pendingCommands.get(b.id);
                            if (!a) return;
                            this.pendingCommands.delete(b.id), this.diagnostics?.record("command", b.error ? "rejected" : "resolved", {
                                ...this.diagnosticContext,
                                requestId: b.id,
                                pendingRequests: this.pendingCommands.size
                            }), b.error ? a.reject(e(b.error)) : a.resolve(b.result)
                        }
                    }
                };
                async handleCommand(a) {
                    let b = "invokeGlobal" === a.command || "invokeMessengerCommand" === a.command ? "host_call" : "command",
                        c = this.diagnostics ? {
                            ...this.diagnosticContext,
                            requestId: a.id,
                            command: a.command
                        } : void 0,
                        d = Object.prototype.hasOwnProperty.call(this.handlers, a.command) ? this.handlers[a.command] : void 0;
                    if (!d) return void this.sendResponseError(a.id, Error(`Unknown DIL frame command "${a.command}"`));
                    let e = !1;
                    try {
                        this.diagnostics?.record(b, "begin", c);
                        let f = d(a.data);
                        e = !0, this.diagnostics?.record(b, "returned", c), a.acknowledge && !this.disposed && this.send({
                            __oaiDilMessage: !0,
                            id: a.id,
                            kind: "ack"
                        });
                        let g = await f;
                        if (this.diagnostics?.record(b, "resolved", c), this.disposed) return;
                        try {
                            this.send({
                                __oaiDilMessage: !0,
                                id: a.id,
                                kind: "response",
                                result: g
                            })
                        } catch (b) {
                            this.sendResponseError(a.id, b)
                        }
                    } catch (d) {
                        this.diagnostics?.record(b, e ? "rejected" : "threw", {
                            ...c,
                            error: d
                        }), this.disposed || this.sendResponseError(a.id, d)
                    }
                }
                sendResponseError(a, b) {
                    var c;
                    this.send({
                        __oaiDilMessage: !0,
                        error: (c = b) instanceof Error ? {
                            message: c.message,
                            name: c.name
                        } : {
                            message: String(c),
                            name: "Error"
                        },
                        id: a,
                        kind: "response"
                    })
                }
            },
            b: e
        })
    }),
    KmX9: (function(a, b, c) {
        c.d(b, {
            a: () => n
        });
        var d = c("ekVC"),
            e = c("dn8s");
        c("obns");
        var f = c("SkuY"),
            g = c("lYZl"),
            h = c("ut9a");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto);
        let i = (a, b) => ({
                kind: d.a.Error,
                error: {
                    code: a,
                    message: b
                }
            }),
            j = console,
            k = a => "string" == typeof a && a.length <= 64 && /^[a-f0-9]{32}:\d+$/.test(a);
        class l {
            service;
            deferred;
            sessions = new Map;
            deferredSessions = new Map;
            constructor(a, b) {
                this.service = a, this.deferred = b
            }
            subscribeAudioLevels = (a, b) => this.sessions.get(a)?.levels.subscribe(b) ?? (() => {});
            command(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (!a || !k(a.id)) return;
                let {
                    id: f
                } = a, j = this.sessions.get(f);
                if ("create" === a.action) {
                    if (j) return;
                    let c = (0, d.c)(a.options);
                    if (!c) return void b({
                        id: f,
                        sequence: 1,
                        event: i("invalid_options", "Invalid dictation options.")
                    });
                    if (!this.service || this.sessions.size >= 64) return void b({
                        id: f,
                        sequence: 1,
                        event: i("integration_error", "The dictation host service is not configured or has reached its session limit.")
                    });
                    let e = j = {
                        live: !0,
                        started: !1,
                        stopped: !1,
                        sequence: 0,
                        levels: new g.a,
                        audioLevelsEnabled: !0 === c.audioLevels && !0 === this.service.supportsAudioLevels,
                        warnedAudioLevel: !1
                    };
                    this.sessions.set(f, e);
                    try {
                        let a = this.service.createSession(c, a => this.publish(f, e, a, b));
                        e.session = a, e.live || this.disposeSession(a)
                    } catch {
                        this.publish(f, e, i("host_error", "Dictation could not complete. Please try again."), b)
                    }
                    return
                }
                if ("startDeferred" === a.action) {
                    if (j || this.deferredSessions.has(f)) return;
                    let k = (0, d.c)(a.options);
                    if (!k || !this.service || !this.deferred || "string" != typeof a.widgetInstanceId || this.deferredSessions.size >= 64 || this.sessions.size >= 64) return void b({
                        id: f,
                        sequence: 1,
                        event: i("host_error", "Dictation could not complete. Please try again.")
                    });
                    if (!c || navigator.userActivation?.isActive !== !0 || !(0, h.a)()) return void b({
                        id: f,
                        sequence: 1,
                        event: i("interaction_required", "Start dictation from a direct user interaction.")
                    });
                    let l = this.deferred.resolve(a.widgetInstanceId);
                    if (!l) return void b({
                        id: f,
                        sequence: 1,
                        event: i("host_error", "Dictation could not complete. Please try again.")
                    });
                    let m = {
                        owner: new e.a(this.service, l)
                    };
                    this.deferredSessions.set(f, m);
                    let n = {
                        live: !0,
                        started: !0,
                        stopped: !1,
                        sequence: 0,
                        levels: new g.a,
                        audioLevelsEnabled: !0 === k.audioLevels && !0 === this.service.supportsAudioLevels,
                        warnedAudioLevel: !1
                    };
                    this.sessions.set(f, n);
                    try {
                        let a = m.owner.createSession(k, a => this.publish(f, n, a, b));
                        if (n.session = a, this.deferredSessions.get(f) !== m) return void this.disposeSession(a);
                        m.turn = a.deferredTurn, n.live ? a.start() : this.disposeSession(a)
                    } catch {
                        try {
                            this.publish(f, n, i("host_error", "Dictation could not complete. Please try again."), b)
                        } finally {
                            this.disposeDeferredSession(f)
                        }
                    }
                    return
                }
                if (j?.live) try {
                    switch (a.action) {
                        case "start":
                            if (j.started || j.stopped) return;
                            if (!c || navigator.userActivation?.isActive !== !0 || !(0, h.a)()) return void this.publish(f, j, i("interaction_required", "Start dictation from a direct user interaction."), b);
                            j.started = !0, j.session?.start();
                            break;
                        case "stop":
                            if (!j.started || j.stopped) return;
                            j.stopped = !0, j.levels.publish(null), j.live && j.session?.stop();
                            break;
                        case "cancel":
                            this.remove(f, j);
                            try {
                                j.session?.cancel()
                            } finally {
                                this.disposeSession(j.session)
                            }
                            break;
                        case "dispose":
                            this.remove(f, j), this.disposeSession(j.session)
                    }
                } catch {
                    this.publish(f, j, i("host_error", "Dictation could not complete. Please try again."), b)
                }
            }
            async deferredCommand(a) {
                if (!k(a.id)) return !1;
                if ("dispose" === a.action) return this.disposeDeferredSession(a.id), !1;
                let b = this.deferredSessions.get(a.id)?.turn;
                if (!b) return !1;
                if ("cancel" === a.action) return b.cancel(), !1;
                if ("string" != typeof a.query) return !1;
                try {
                    return await b.complete(a.query, a.payload)
                } catch {
                    throw Error("Deferred turn submission was not acknowledged.")
                }
            }
            reset() {
                let a = [...this.sessions.values()];
                for (let b of (this.sessions.clear(), a)) b.live = !1;
                for (let b of a) b.levels.dispose(), this.disposeSession(b.session);
                for (let a of this.deferredSessions.values()) this.disposeOwner(a.owner);
                this.deferredSessions.clear()
            }
            publish(a, b, c, e) {
                if (!b.live) return;
                let g = function(a) {
                    try {
                        if (!a || "object" != typeof a) return;
                        switch (a.kind) {
                            case d.a.AudioLevel:
                                return null;
                            case d.a.Recording:
                            case d.a.Stopping:
                            case d.a.Cancelled:
                                return {
                                    kind: a.kind
                                };
                            case d.a.Transcript: {
                                if ("string" != typeof a.transcript) return;
                                let b = a.speakChallengeProgress;
                                if (void 0 === b) return {
                                    kind: a.kind,
                                    transcript: a.transcript
                                };
                                let {
                                    matchedWordIndices: c,
                                    completed: d
                                } = b;
                                if ("boolean" != typeof d || !Array.isArray(c) || c.length > 64 || !c.every(a => Number.isSafeInteger(a) && a >= 0 && a < 64)) return;
                                return {
                                    kind: a.kind,
                                    transcript: a.transcript,
                                    speakChallengeProgress: {
                                        matchedWordIndices: [...c],
                                        completed: d
                                    }
                                }
                            }
                            case d.a.Done:
                                if ("string" == typeof a.transcript) return {
                                    kind: a.kind,
                                    transcript: a.transcript
                                };
                                return;
                            case d.a.Error:
                                if ("string" == typeof a.error?.code && "string" == typeof a.error.message) return {
                                    kind: a.kind,
                                    error: {
                                        code: a.error.code,
                                        message: a.error.message
                                    }
                                }
                        }
                    } catch {}
                }(c);
                if (!b.live) return;
                if (null === g) {
                    if (!b.audioLevelsEnabled || !b.started || b.stopped) return;
                    let a = (0, f.d)(c);
                    if (!b.live || b.stopped) return;
                    if (void 0 === a) b.warnedAudioLevel || (b.warnedAudioLevel = !0, j.warn("Invalid DIL dictation audio level"));
                    else b.levels.publish(a);
                    return
                }
                let h = g ?? i("host_error", "Dictation could not complete. Please try again.");
                if (h.kind === d.a.Stopping && (b.stopped = !0, b.levels.publish(null), !b.live)) return;
                let k = h.kind === d.a.Done || h.kind === d.a.Error || h.kind === d.a.Cancelled;
                k && this.remove(a, b);
                try {
                    e({
                        id: a,
                        sequence: ++b.sequence,
                        event: h
                    })
                } finally {
                    k && this.disposeSession(b.session)
                }
            }
            remove(a, b) {
                b.live = !1, this.sessions.get(a) === b && this.sessions.delete(a), b.levels.dispose()
            }
            disposeSession(a) {
                try {
                    a?.dispose()
                } catch {}
            }
            disposeOwner(a) {
                try {
                    a.dispose()
                } catch {}
            }
            disposeDeferredSession(a) {
                let b = this.deferredSessions.get(a);
                if (!b) return;
                this.deferredSessions.delete(a);
                let c = this.sessions.get(a);
                c && this.remove(a, c), this.disposeOwner(b.owner)
            }
        }
        var m = c("Nn8K");

        function n(a, b) {
            let c = new m.a(a.speechSynthesis),
                e = (0, d.b)(a.dictation),
                f = a.dictation?.kind === "ready" ? a.deferredTurn : void 0,
                g = new l(e, f);
            return {
                subscribeDictationAudioLevels: g.subscribeAudioLevels,
                initialization: {
                    ...void 0 !== a.speechSynthesis ? {
                        speechSynthesis: !0
                    } : {},
                    ...void 0 !== e ? {
                        dictation: !0,
                        supportsDictationAudioLevels: !0 === e.supportsAudioLevels,
                        supportsSpeakChallenge: !0 === e.supportsSpeakChallenge
                    } : {},
                    ...f ? {
                        supportsDeferredTurns: !0
                    } : {}
                },
                handlers: a => ({
                    dictation: c => {
                        let d = b => a("dictationEvent", b);
                        if (c?.action === "start" || c?.action === "startDeferred") {
                            let a = !1;
                            b(c.interactionCapability, () => {
                                a = !0, g.command(c, d, !0)
                            }), a || g.command(c, d)
                        } else g.command(c, d)
                    },
                    deferredTurn: a => g.deferredCommand(a),
                    speech: d => {
                        let e = !1,
                            f = function() {
                                let b = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
                                e = !0;
                                try {
                                    c.command(b, b => a("speechState", b))
                                } catch {}
                            };
                        "play" === d.action || "stop" === d.action && void 0 !== d.logging ? (b(d.interactionCapability, () => f()), "stop" !== d.action || e || f({
                            ...d,
                            logging: void 0
                        })) : f()
                    }
                }),
                reset: () => {
                    g.reset(), c.reset()
                }
            }
        }
    }),
    Nn8K: (function(a, b, c) {
        var d = c("ut9a"),
            e = c("hWgA");
        globalThis.crypto?.getRandomValues.bind(globalThis.crypto), c.d(b, {}, {
            a: class {
                service;
                sessions = new Map;
                constructor(a) {
                    this.service = a
                }
                command(a, b) {
                    if (!a || "string" != typeof a.id || a.id.length > 64 || !/^[a-f0-9]{32}:\d+$/.test(a.id)) return;
                    let {
                        id: c
                    } = a, f = this.sessions.get(c);
                    if ("create" === a.action) {
                        if (f) return;
                        let d = (0, e.b)(a.source);
                        if (!d || !this.service || this.sessions.size >= 64) return void b({
                            id: c,
                            state: e.d
                        });
                        let g = !0;
                        try {
                            let a = this.service.createSession(d, a => {
                                g && b({
                                    id: c,
                                    state: (0, e.c)(a)
                                })
                            });
                            this.sessions.set(c, {
                                play: b => a.play(b),
                                stop: b => a.stop(b),
                                dispose: () => {
                                    g = !1, a.dispose()
                                }
                            })
                        } catch {
                            g = !1, b({
                                id: c,
                                state: e.d
                            })
                        }
                    } else "play" === a.action ? f && navigator.userActivation?.isActive === !0 && (0, d.a)() && f.play((0, e.a)(a.logging)) : "stop" === a.action ? f?.stop(void 0 !== a.logging && navigator.userActivation?.isActive === !0 && (0, d.a)() ? (0, e.a)(a.logging) : void 0) : "dispose" === a.action && (this.sessions.delete(c), f?.dispose())
                }
                reset() {
                    for (let a of this.sessions.values()) a.dispose();
                    this.sessions.clear()
                }
            }
        })
    }),
    TJbQ: (function(a, b, c) {
        let d = "u" < typeof performance ? Date.now.bind(Date) : performance.now.bind(performance),
            e = "u" < typeof performance ? 0 : performance.timeOrigin,
            f = Object.getOwnPropertyDescriptor,
            g = Object.getPrototypeOf,
            h = Error.isError,
            i = new Map([
                [Error.prototype, "Error"],
                [TypeError.prototype, "TypeError"],
                [RangeError.prototype, "RangeError"],
                [SyntaxError.prototype, "SyntaxError"],
                [ReferenceError.prototype, "ReferenceError"],
                [URIError.prototype, "URIError"],
                [EvalError.prototype, "EvalError"],
                [AggregateError.prototype, "AggregateError"]
            ]),
            j = 0,
            k = new Set(["iframe_create:returned", "iframe_load:received", "iframe_resource:received", "observer_bootstrap:returned", "module_entry:returned", "module_load:begin", "module_resource:returned", "module_load:reported_error", "runner_module_script_error", "runner_module_csp_enforced", "runner_module_exception", "frame_ready:sent", "frame_ready:received", "worker_create:begin", "worker_create:returned", "worker_control:sent", "worker_control:received", "worker_module:returned", "harden_worker:begin", "harden_worker:returned", "runner_create:sent", "runner_create:received", "runner_create:begin", "runner_create:returned", "worker_ready:sent", "worker_ready:received", "snapshot_post:sent", "snapshot_receive:received", "host_ingress_lifecycle", "host_ingress_snapshot", "snapshot_forward:sent", "apply_tree:returned", "request_timer:fired", "worker_timer:fired", "frame_timer:fired"]);

        function l(a) {
            if ("module_load" === a.operation && "runner_module_exception" === a.reason) return "runner_module_exception";
            if (a.fault || "threw" === a.phase) return "first_fault";
            if ("module_load" === a.operation && "reported_error" === a.phase) {
                if ("runner_module_script_error" === a.reason) return "runner_module_script_error";
                if ("csp_violation" === a.reason && "runner_module" === a.cspResource && "enforce" === a.cspDisposition) return "runner_module_csp_enforced"
            }
            if ("quarantine" === a.operation || "error" === a.operation) return a.operation;
            if ("worker_control" === a.operation && ("execution_started" === a.reason || "execution_finished" === a.reason)) return "worker_execution";
            if ("host" === a.realm && "message" === a.operation && "received" === a.phase && ("snapshot" === a.command || "lifecycle" === a.command)) return `host_ingress_${a.command}`;
            let b = `${a.operation}:${a.phase}`;
            return k.has(b) ? b : "health_probe" === a.operation && a.reason?.startsWith("target_") ? "worker_target" : "health_probe" === a.operation ? "fired" === a.phase ? "health_probe_expired" : "health_probe" : "recovery" === a.operation ? "recovery" : "event_loop" === a.operation ? "event_loop" : ["visibility", "pagehide", "pageshow", "freeze", "resume"].includes(a.operation) ? "lifecycle" : "frame_probe" === a.operation ? "frame_probe" : "module_load" === a.operation && "document_state" === a.reason ? "document_state" : "module_resource" === a.operation ? "module_resource" : "message" !== a.operation && "coverage" !== a.operation ? "last_progress" : void 0
        }

        function m(a) {
            return [a.realm, a.documentBootId, "worker" === a.realm ? a.workerGeneration : void 0, a.sourceId].join(":")
        }
        let n = new Set(["host_setup", "encode_globals", "read_persistence", "acquire_frame", "iframe_create", "iframe_load", "iframe_resource", "observer_bootstrap", "module_load", "module_resource", "module_entry", "frame_ready", "manager_create", "worker_create", "worker_control", "worker_module", "harden_worker", "runner_create", "worker_ready", "decode_globals", "decode_persistence", "unsafe_runner", "runtime_construct", "seed_runtime", "hydrate_state", "prepare_source", "update_source", "compile", "evaluate", "render", "render_operations", "snapshot_post", "commit_state", "persist_state", "flush", "flush_render", "flush_effects", "restore_source", "command", "host_call", "snapshot_receive", "snapshot_forward", "apply_tree", "notify", "react_snapshot", "react_materialize", "react_commit", "react_snapshot_effect", "react_node_error", "host_error", "fallback", "render_result", "frame_timer", "worker_timer", "request_timer", "health_probe", "idle_probe", "visibility", "pagehide", "pageshow", "freeze", "resume", "frame_probe", "event_loop", "recovery", "quarantine", "runner_dispose", "worker_stop", "frame_dispose", "message", "error", "coverage"]),
            o = new Set(["begin", "returned", "threw", "reported_error", "sent", "received", "acknowledged", "resolved", "rejected", "armed", "paused", "rearmed", "cancelled", "fired", "ignored", "decision"]),
            p = new Set(["initialize", "__dil_initialize", "createRunner", "disposeRunner", "initializeControl", "registerMessengerTransport", "unregisterMessengerTransport", "setCompiledDil", "setData", "setStateSnapshot", "trigger", "invokeGlobal", "invokeMessengerCommand", "snapshot", "lifecycle", "messengerEvent"]),
            q = ["workerGeneration", "sessionGeneration", "startupAttempt", "snapshotVersion", "renderPass", "spanId", "parentSpanId", "count", "pendingRequests", "pendingHostCalls", "peers", "budgetMs", "deadlineMs", "elapsedMs", "httpStatus", "resourceStartMs", "resourceEndMs", "navigationResponseEndMs", "navigationDomInteractiveMs"],
            r = ["triggerAcknowledged", "workerReadySent", "hidden", "persisted", "acknowledged", "replaySafe", "hasSuccessfulSnapshot", "treePresent", "hasError", "moduleEvaluationSupported"],
            s = ["documentBootId", "artifactId", "runnerId", "activeRunnerId", "resourceArtifactId", "triggerRunnerId", "triggerRequestId", "requestId", "relatedRequestId"],
            t = /^[a-zA-Z0-9_-]{1,96}$/;

        function u(a) {
            let b = {};
            for (let c of q) {
                let d = a[c];
                "number" == typeof d && Number.isFinite(d) && d >= 100 * ("httpStatus" === c) && ("httpStatus" !== c || d <= 599) && (b[c] = d)
            }
            for (let c of r) "boolean" == typeof a[c] && (b[c] = a[c]);
            for (let c of s) {
                let d = a[c];
                "string" == typeof d && t.test(d) && (b[c] = d)
            }
            for (let c of ["command", "triggerCommand"]) {
                let d = a[c];
                d && p.has(d) && (b[c] = d)
            }
            return ("loading" === a.documentReadyState || "interactive" === a.documentReadyState || "complete" === a.documentReadyState) && (b.documentReadyState = a.documentReadyState), a.cspDirective && ["script-src", "script-src-elem", "script-src-attr", "worker-src", "other"].includes(a.cspDirective) && (b.cspDirective = a.cspDirective), ("enforce" === a.cspDisposition || "report" === a.cspDisposition) && (b.cspDisposition = a.cspDisposition), a.cspResource && ["runner_module", "inline", "eval", "unknown"].includes(a.cspResource) && (b.cspResource = a.cspResource), "string" == typeof a.reason && /^[a-z_]{1,48}$/.test(a.reason) && (b.reason = a.reason), b
        }

        function v(a) {
            if (null === a || "object" != typeof a || !["host", "bootstrap", "iframe", "worker"].includes(a.realm) || "string" != typeof a.operation || !n.has(a.operation) || "string" != typeof a.phase || !o.has(a.phase) || !Number.isSafeInteger(a.sequence) || a.sequence < 0 || "number" != typeof a.localTimeMs || !Number.isFinite(a.localTimeMs) || "number" != typeof a.timeOriginMs || !Number.isFinite(a.timeOriginMs)) return;
            let b = {
                ...u(a),
                realm: a.realm,
                sequence: a.sequence,
                localTimeMs: a.localTimeMs,
                timeOriginMs: a.timeOriginMs,
                operation: a.operation,
                phase: a.phase
            };
            Number.isSafeInteger(a.sourceId) && a.sourceId >= 0 && (b.sourceId = a.sourceId);
            let c = a.fault;
            if (c && "string" == typeof c.name && /^(unknown|Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(c.name) && Array.isArray(c.locations) && c.locations.length <= 16) {
                let a = c.locations.filter(a => a && Number.isSafeInteger(a.line) && a.line >= 0 && a.line < 1e7 && Number.isSafeInteger(a.column) && a.column >= 0 && a.column < 1e7).map(a => {
                    let {
                        line: b,
                        column: c
                    } = a;
                    return Object.freeze({
                        line: b,
                        column: c
                    })
                });
                b.fault = Object.freeze({
                    name: c.name,
                    locations: Object.freeze(a),
                    stackUnavailable: 0 === a.length
                })
            }
            return b
        }

        function w(a) {
            return [a.realm, a.documentBootId, a.workerGeneration, a.sourceId, a.runnerId, a.sessionGeneration, a.startupAttempt].join(":")
        }

        function x(a, b, c) {
            let e = c ? b.hostReceivedAtMs : d();
            return {
                ...a,
                ..."number" == typeof e && Number.isFinite(e) && e >= 0 ? {
                    hostReceivedAtMs: e
                } : {}
            }
        }
        class y {
            context;
            now = d;
            realm;
            emit;
            sequence = 0;
            sourceId = ++j;
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
            constructor(a) {
                this.realm = a.realm, this.context = Object.freeze(u(a.context ?? {})), this.emit = a.emit
            }
            record(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                try {
                    let j = {
                        ...this.context,
                        ...u(c),
                        realm: this.realm,
                        sequence: ++this.sequence,
                        sourceId: this.sourceId,
                        localTimeMs: d(),
                        timeOriginMs: e,
                        operation: a,
                        phase: b
                    };
                    void 0 !== c.error && this.faultCount < 4 && (j.fault = function(a) {
                        let b = [],
                            c = "unknown";
                        try {
                            if (h?.(a)) {
                                c = i.get(g(a)) ?? c;
                                let d = f(a, "name")?.value;
                                "string" == typeof d && /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)$/.test(d) && (c = d);
                                let e = f(a, "stack")?.value;
                                if ("string" == typeof e)
                                    for (let a of (c = /^(Error|TypeError|RangeError|SyntaxError|ReferenceError|URIError|EvalError|AggregateError)(?=:|$)/.exec(e)?.[1] ?? c, e.slice(0, 4096).split("\n").slice(1, 17))) {
                                        let c = /:(\d{1,7}):(\d{1,7})\)?$/.exec(a.trim());
                                        c && b.push({
                                            line: Number(c[1]),
                                            column: Number(c[2])
                                        })
                                    }
                            }
                        } catch {}
                        return Object.freeze({
                            name: c,
                            locations: Object.freeze(b.map(a => Object.freeze(a))),
                            stackUnavailable: 0 === b.length
                        })
                    }(c.error), this.faultCount++), this.retain(j, "complete"), this.forward(j), 512 === this.sequence && this.record("coverage", "ignored", {
                        reason: "overflow"
                    })
                } catch {
                    this.dropped++
                }
            }
            trace(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    d = ++this.span,
                    e = this.parentSpanId,
                    f = {
                        ...c,
                        spanId: d,
                        parentSpanId: e
                    };
                this.record(a, "begin", f), this.parentSpanId = d;
                try {
                    let c = b();
                    return this.record(a, "returned", f), c
                } catch (b) {
                    throw this.fault(a, b, f), b
                } finally {
                    this.parentSpanId = e
                }
            }
            fault(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                this.record(a, "threw", {
                    ...c,
                    error: b
                })
            }
            ingest(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    let d = v(a);
                    if (!d) return void this.dropped++;
                    let e = w(d);
                    if (d.sequence <= (this.sequences.get(e) ?? -1)) return;
                    this.sequences.set(e, d.sequence), this.sequences.size > 32 && this.sequences.delete(this.sequences.keys().next().value);
                    let f = x(d, a, c),
                        g = m(d),
                        h = this.progressSources.get(g),
                        i = h ? h.complete && d.sequence === h.sequence + 1 && "coverage" !== d.operation : 1 === d.sequence && "coverage" !== d.operation;
                    if (d.sequence > (h?.sequence ?? -1) && (this.progressSources.set(g, {
                            sequence: d.sequence,
                            complete: i
                        }), this.progressSources.size > 64 && this.progressSources.delete(this.progressSources.keys().next().value), !i))
                        for (let a of this.progress.values()) m(a.slots.values().next().value) === g && (a.coverage = "interrupted");
                    this.retain(f, i ? "complete" : "interrupted"), b && this.forward(d)
                } catch {
                    this.dropped++
                }
            }
            mergeSnapshot(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    c = arguments.length > 2 ? arguments[2] : void 0,
                    d = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "merge";
                try {
                    if (null === a || "object" != typeof a || 1 !== a.schemaVersion || !Array.isArray(a.records) || !Array.isArray(a.openOperations)) return this.dropped++, !1;
                    if (c) {
                        let b = [...a.records.slice(0, 256), ...a.openOperations.slice(0, 32)];
                        if (Array.isArray(a.progress))
                            for (let d of a.progress.slice(0, 64)) {
                                if (!d || !Array.isArray(d.records)) return this.markProgressDropped(c.runnerId), !1;
                                for (let a of d.records.slice(0, 40)) b.push({
                                    ...d.context,
                                    ...a
                                })
                            }
                        if (!b.every(a => null !== a && "object" == typeof a && Object.entries(c).every(b => {
                                let [c, d] = b;
                                return void 0 === d || a[c] === d
                            }))) return this.markProgressDropped(c.runnerId), !1
                    }
                    if (Array.isArray(a.observedRealms))
                        for (let b of a.observedRealms.slice(0, 4))("host" === b || "bootstrap" === b || "iframe" === b || "worker" === b) && this.observedRealms.add(b);
                    for (let c of a.records.slice(0, 256)) this.ingest(c, !1, b);
                    for (let c of ("replace" === d && Array.isArray(a.progress) && this.resetDocumentProgress(), a.openOperations.slice(0, 32))) {
                        let a = v(c);
                        if (!a || "begin" !== a.phase || void 0 === a.spanId) {
                            this.dropped++;
                            continue
                        }
                        this.observeSpan(x(a, c, b))
                    }
                    let e = !0;
                    if (Array.isArray(a.progress)) {
                        let c = this.progressDropped;
                        for (let c of a.progress.slice(0, 64)) this.mergeProgress(c, b);
                        a.progress.length > 64 && this.markProgressDropped(), e = c === this.progressDropped
                    }
                    if (Number.isSafeInteger(a.progressDropped) && a.progressDropped > 0) {
                        this.progressDropped = Math.max(this.progressDropped, a.progressDropped);
                        let b = "string" == typeof a.runnerId && t.test(a.runnerId) && (this.progressLoss.has(a.runnerId) || this.progressLoss.size < 64) ? a.runnerId : "";
                        this.progressLoss.set(b, Math.max(this.progressLoss.get(b) ?? 0, a.progressDropped))
                    }
                    let f = v(a.records[0] ?? a.openOperations[0]),
                        g = f ? w(f) : "empty",
                        h = this.upstreamDropped.get(g) ?? 0,
                        i = "number" == typeof a.dropped && Number.isSafeInteger(a.dropped) && a.dropped >= 0 ? a.dropped : 0,
                        j = Math.max(0, a.records.length - 256) + Math.max(0, a.openOperations.length - 32),
                        k = Math.min(Number.MAX_SAFE_INTEGER, i + j);
                    return this.dropped = Math.min(Number.MAX_SAFE_INTEGER, this.dropped + Math.max(0, k - h)), this.upstreamDropped.set(g, Math.max(h, k)), this.upstreamDropped.size > 32 && this.upstreamDropped.delete(this.upstreamDropped.keys().next().value), this.upstreamTruncated ||= !0 === a.truncated || j > 0, e
                } catch {
                    return this.dropped++, !1
                }
            }
            resetDocumentProgress() {
                this.progress.clear(), this.progressSources.clear(), this.progressLoss.clear(), this.progressBytes = 0, this.progressDropped = 0, this.open.clear(), this.completedSpans.clear()
            }
            retainRunner(a) {
                if (!this.retainedRunners.has(a) && this.retainedRunners.size >= 64) return this.markProgressDropped(a), () => {};
                this.retainedRunners.set(a, (this.retainedRunners.get(a) ?? 0) + 1);
                let b = !1;
                return () => {
                    if (b) return;
                    b = !0;
                    let c = (this.retainedRunners.get(a) ?? 1) - 1;
                    c ? this.retainedRunners.set(a, c) : this.retainedRunners.delete(a)
                }
            }
            snapshot() {
                let a = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    b = [...this.progress.values()].filter(b => {
                        let c = b.slots.values().next().value;
                        return !a.runnerId || !c.runnerId || c.runnerId === a.runnerId
                    }).map(a => {
                        let b = [...a.slots.values()],
                            {
                                realm: c,
                                sourceId: d,
                                timeOriginMs: e,
                                documentBootId: f,
                                artifactId: g,
                                runnerId: h,
                                workerGeneration: i,
                                sessionGeneration: j,
                                startupAttempt: k
                            } = b[0];
                        return {
                            context: {
                                realm: c,
                                sourceId: d,
                                timeOriginMs: e,
                                documentBootId: f,
                                artifactId: g,
                                runnerId: h,
                                workerGeneration: i,
                                sessionGeneration: j,
                                startupAttempt: k
                            },
                            records: b.map(a => {
                                let {
                                    realm: b,
                                    sourceId: c,
                                    timeOriginMs: d,
                                    documentBootId: e,
                                    artifactId: f,
                                    runnerId: g,
                                    workerGeneration: h,
                                    sessionGeneration: i,
                                    startupAttempt: j,
                                    ...k
                                } = a;
                                return k
                            }),
                            lastSequence: a.lastSequence,
                            coverage: a.coverage
                        }
                    }),
                    c = a.runnerId ? [...z(b, a.runnerId, this.context.documentBootId)].sort((b, c) => Number(c.context.runnerId === a.runnerId) - Number(b.context.runnerId === a.runnerId)) : b,
                    d = [],
                    e = 2,
                    f = 0;
                for (let a of c) {
                    let b = JSON.stringify(JSON.stringify(a)).length + 1;
                    if (e + b > 8192) {
                        f++;
                        continue
                    }
                    e += b, d.push(Object.freeze({
                        ...a,
                        context: Object.freeze(a.context),
                        records: Object.freeze(a.records.map(a => Object.freeze(a)))
                    }))
                }
                return Object.freeze({
                    schemaVersion: 1,
                    observedRealms: Object.freeze([...this.observedRealms]),
                    documentBootId: this.context.documentBootId,
                    runnerId: a.runnerId,
                    progress: Object.freeze(d),
                    progressDropped: f + (a.runnerId ? (this.progressLoss.get(a.runnerId) ?? 0) + (this.progressLoss.get("") ?? 0) : this.progressDropped),
                    records: Object.freeze(!1 === a.records ? [] : this.entries.map(a => a.record)),
                    openOperations: Object.freeze(!1 === a.records ? [] : [...this.open.values()]),
                    dropped: this.dropped,
                    truncated: this.dropped > 0 || this.upstreamTruncated
                })
            }
            markProgressDropped(a) {
                this.progressDropped++;
                let b = a && (this.progressLoss.has(a) || this.progressLoss.size < 64) ? a : "";
                this.progressLoss.set(b, (this.progressLoss.get(b) ?? 0) + 1)
            }
            observeProgress(a, b, c) {
                let d = l(a);
                if (!d) return;
                let e = w(a),
                    f = this.progress.get(e),
                    g = f?.slots.get(d);
                if (f && (f.lastSequence = Math.max(f.lastSequence, a.sequence)), g && "event_loop" === d && (g.elapsedMs ?? 0) - (g.budgetMs ?? 0) >= (a.elapsedMs ?? 0) - (a.budgetMs ?? 0) || g && ("first_fault" === d || k.has(d) ? g.sequence <= a.sequence : g.sequence >= a.sequence)) return;
                let h = (c ??= JSON.stringify(a).length) - (g ? JSON.stringify(g).length : 0);
                for (; !f && this.progress.size >= 64 || this.progressBytes + h > 65536;) {
                    let b = [...this.progress].find(a => {
                        let [b, c] = a, d = c.slots.values().next().value.runnerId;
                        return b !== e && d && !this.retainedRunners.has(d)
                    });
                    if (!b) {
                        this.markProgressDropped(a.runnerId), f && (f.coverage = "interrupted");
                        return
                    }
                    this.progressBytes -= b[1].bytes, this.progress.delete(b[0]), this.markProgressDropped(b[1].slots.values().next().value.runnerId)
                }
                if (f || (f = {
                        slots: new Map,
                        lastSequence: 0,
                        coverage: b,
                        bytes: 0
                    }, this.progress.set(e, f)), f.bytes + h > 12288 || !g && f.slots.size >= 40) {
                    this.markProgressDropped(a.runnerId), f.coverage = "interrupted";
                    return
                }
                f.slots.set(d, Object.freeze(a)), f.lastSequence = Math.max(f.lastSequence, a.sequence), "complete" !== b && (f.coverage = b), f.bytes += h, this.progressBytes += h
            }
            mergeProgress(a, b) {
                if (!a || "object" != typeof a || !Array.isArray(a.records) || 0 === a.records.length || a.records.length > 40 || !Number.isSafeInteger(a.lastSequence) || a.lastSequence < 0 || !["complete", "interrupted", "unavailable"].includes(a.coverage ?? "")) return void this.markProgressDropped();
                let c = a.records.map(b => v({
                        ...a.context,
                        ...b
                    })),
                    d = c[0];
                if (!d || c.some(b => !b || w(b) !== w(d) || b.sequence > a.lastSequence || !l(b))) return void this.markProgressDropped();
                let e = this.progress.get(w(d));
                if (e && a.lastSequence < e.lastSequence) return;
                let f = this.progressDropped;
                for (let d = 0; d < c.length; d++) this.observeProgress(x(c[d], a.records[d], b), a.coverage);
                let g = this.progress.get(w(d));
                g && (g.lastSequence = Math.max(g.lastSequence, a.lastSequence), g.coverage = this.progressDropped === f ? a.coverage : "interrupted")
            }
            observeSpan(a) {
                if (void 0 !== a.spanId) {
                    let b = `${w(a)}:${a.spanId}`;
                    if ("begin" === a.phase) {
                        if ((this.completedSpans.get(b) ?? -1) >= a.sequence || (this.open.get(b)?.sequence ?? -1) >= a.sequence) return;
                        this.open.has(b) || this.open.size < 32 ? this.open.set(b, Object.freeze(a)) : this.dropped++
                    } else("returned" === a.phase || "threw" === a.phase) && (this.open.delete(b), this.completedSpans.set(b, a.sequence), this.completedSpans.size > 256 && this.completedSpans.delete(this.completedSpans.keys().next().value))
                }
            }
            retain(a, b) {
                let c = JSON.stringify(a).length;
                this.observeProgress(a, b, c), this.observedRealms.add(a.realm), this.observeSpan(a);
                let d = this.entries.length < 8 || void 0 !== a.fault && !this.entries.some(a => a.record.fault);
                for (; this.entries.length >= 256 || this.bytes + c > 32768;) {
                    let a = this.entries.findIndex(a => !a.pinned);
                    if (a < 0) return void this.dropped++;
                    this.bytes -= this.entries[a].bytes, this.entries.splice(a, 1), this.dropped++
                }
                this.entries.push({
                    record: Object.freeze(a),
                    bytes: c,
                    pinned: d
                }), this.bytes += c
            }
            forward(a) {
                if (this.emit) {
                    if (this.emitted++ >= 513) return void this.dropped++;
                    try {
                        this.emit(a)
                    } catch {
                        this.dropped++
                    }
                }
            }
        }

        function z(a, b, c) {
            let d = a.filter(a => {
                    let {
                        context: d
                    } = a;
                    return (!b || !d.runnerId || d.runnerId === b) && (!c || !d.documentBootId || d.documentBootId === c)
                }),
                e = d.map(a => a.context).filter(a => a.runnerId === b),
                f = Math.max(-1, ...e.map(a => a.workerGeneration ?? -1)),
                g = Math.max(-1, ...e.filter(a => a.workerGeneration === f).map(a => a.sessionGeneration ?? -1)),
                h = Math.max(-1, ...e.filter(a => a.workerGeneration === f && a.sessionGeneration === g).map(a => a.startupAttempt ?? -1));
            return d.filter(a => {
                let {
                    context: b
                } = a;
                return (void 0 === b.workerGeneration || b.workerGeneration === f) && (void 0 === b.sessionGeneration || b.sessionGeneration === g) && (void 0 === b.startupAttempt || b.startupAttempt === h)
            })
        }
        c.d(b, {}, {
            a: y,
            b: function(a, b, c, d) {
                let e = new y({
                    realm: "host",
                    context: {
                        documentBootId: a.documentBootId,
                        runnerId: a.runnerId
                    }
                });
                e.mergeSnapshot(a, !0, void 0, "replace"), e.record(b, c, d);
                let f = e.snapshot({
                    runnerId: a.runnerId
                });
                return Object.freeze({
                    ...a,
                    ...f
                })
            },
            c: function(a) {
                if (!a.progress) return {
                    records: [],
                    coverage: "unavailable"
                };
                let b = z(a.progress, a.runnerId, a.documentBootId);
                return {
                    records: b.flatMap(a => a.records.map(b => ({
                        ...a.context,
                        ...b
                    }))),
                    coverage: b.length ? a.progressDropped || b.some(a => "complete" !== a.coverage) ? "interrupted" : "complete" : "unavailable"
                }
            },
            d: v
        })
    }),
    CVOS: (function(a, b, c) {
        let d = EventTarget.prototype.addEventListener,
            e = EventTarget.prototype.removeEventListener;

        function f(a) {
            for (let b = globalThis; null !== b && b !== Object.prototype; b = Object.getPrototypeOf(b)) {
                let c = Object.getOwnPropertyDescriptor(b, a);
                if (c) return () => {
                    let b = c.get ? Reflect.apply(c.get, globalThis, []) : c.value;
                    if (null == b) throw Error(`Trusted browser API "${a}" is unavailable`);
                    return b
                }
            }
            return () => {
                throw Error(`Trusted browser API "${a}" is unavailable`)
            }
        }
        f("setTimeout"), f("clearTimeout"), f("setInterval"), f("clearInterval"), f("queueMicrotask"), f("requestAnimationFrame"), f("cancelAnimationFrame"), f("requestIdleCallback"), f("cancelIdleCallback"), f("Worker"), f("SharedWorker"), f("MessageChannel"), f("postMessage"), c.d(b, {}, {
            a: function(a, b, c) {
                Reflect.apply(d, a, [b, c])
            },
            b: function(a, b, c) {
                Reflect.apply(e, a, [b, c])
            }
        })
    }),
    ut9a: (function(a, b, c) {
        let d, e = Symbol("DilInteractionCapability"),
            f = new WeakMap,
            g = null;
        c.d(b, {}, {
            a: function() {
                if (null == g) return !1;
                let a = f.get(g);
                return !!a && !a.consumed && (a.consumed = !0, !0)
            },
            b: function(a) {
                if (a.isTrusted && "u" > typeof navigator && navigator.userActivation?.isActive === !0) {
                    let a;
                    return a = Object.freeze({
                        [e]: !0
                    }), f.set(a, {
                        consumed: !1
                    }), a
                }
            },
            c: function() {
                return g
            },
            d: function() {
                return g && f.has(g) ? d : void 0
            },
            e: function(a) {
                f.delete(a)
            },
            f: function(a) {
                return f.get(a)?.consumed === !0
            },
            g: function(a, b, c) {
                if (!f.has(a)) return b();
                let e = g,
                    h = d;
                g = a, d = c;
                try {
                    return b()
                } finally {
                    g = e, d = h
                }
            }
        })
    }),
    hWgA: (function(a, b, c) {
        let d = Object.freeze({
            status: "idle",
            available: !1,
            error: null
        });
        c.d(b, {}, {
            a: function(a) {
                try {
                    if (!a || "object" != typeof a || Array.isArray(a)) return;
                    let b = {};
                    for (let c of ["event_name", "statsig_event_name", "structured_event_name"]) {
                        let d = a[c];
                        if (void 0 !== d) {
                            if ("string" != typeof d || !d.trim() || d.length > 256) return;
                            b[c] = d
                        }
                    }
                    if (0 === Object.keys(b).length) return;
                    let c = a.event_data;
                    if (void 0 !== c) {
                        if (!c || "object" != typeof c || Array.isArray(c)) return;
                        let a = Object.keys(c);
                        if (a.length > 32) return;
                        for (let d of (b.event_data = Object.create(null), a)) {
                            let a = c[d];
                            if (d.length > 128 || !(null === a || "boolean" == typeof a || "string" == typeof a && a.length <= 2048 || "number" == typeof a && Number.isFinite(a))) return;
                            b.event_data[d] = a
                        }
                    }
                    if (JSON.stringify(b).length <= 16384) return b
                } catch {}
            },
            b: function(a) {
                if (!a || "object" != typeof a || "string" != typeof a.text || !a.text.trim() || a.text.length > 32768) return null;
                let b = {
                    text: a.text
                };
                for (let [c, d] of [
                        ["language", 128],
                        ["pronunciationHint", 4096],
                        ["version", 256],
                        ["source", 128]
                    ]) {
                    let e = a[c];
                    if (void 0 !== e) {
                        if ("string" != typeof e || e.length > d) return null;
                        ("version" !== c || "" !== e) && (b[c] = e)
                    }
                }
                return "number" == typeof a.playbackSpeed && Number.isFinite(a.playbackSpeed) && a.playbackSpeed >= .25 && a.playbackSpeed <= 4 && (b.playbackSpeed = a.playbackSpeed), b
            },
            c: function(a) {
                if (!a || "object" != typeof a) return d;
                let b = null;
                if (a.error && "object" == typeof a.error) {
                    let c = a.error,
                        d = c.failureStage;
                    ("play" === d || "request" === d || "response" === d || "streaming" === d) && (b = {
                        failureStage: d
                    }, "number" == typeof c.httpStatus && Number.isInteger(c.httpStatus) && c.httpStatus >= 100 && c.httpStatus <= 599 && (b.httpStatus = c.httpStatus))
                }
                return {
                    available: !0 === a.available,
                    status: b ? "idle" : "loading" === a.status || "playing" === a.status ? a.status : "idle",
                    error: b
                }
            },
            d: d
        })
    }),
    dPHu: (function(a, b, c) {
        var d, e;
        (e = d || (d = {})).Done = "done", e.Invalid = "invalid", e.Retry = "retry", c.d(b, {}, {
            a: "trigger_agentic_handoff",
            b: "genui.run_action"
        })
    }),
    obns: (function(a, b, c) {
        c("dPHu"), new WeakMap;
        let d = /^turn(?:0|[1-9]\d*)(product|business)(?:0|[1-9]\d*)(?![\s\S])/,
            e = "GenUI.openEntityDetail requires one reference or named entity.",
            f = "GenUI.runPluginTool requires one tool name and JSON arguments object.",
            g = "GenUI.runAction requires an action name and JSON arguments.",
            h = new Set(["local_business", "restaurant", "hotel", "hospital", "point_of_interest", "urgent_care"]);

        function i(a) {
            if (null === a || "object" != typeof a || Array.isArray(a)) return !1;
            let b = Object.getPrototypeOf(a);
            return b === Object.prototype || null === b
        }

        function j(a, b, c) {
            if (null === a || "string" == typeof a || "boolean" == typeof a || "number" == typeof a && Number.isFinite(a)) return a;
            if ("object" != typeof a || b.has(a) || !Array.isArray(a) && !i(a)) throw TypeError(c);
            b.add(a);
            try {
                let d = Reflect.ownKeys(a);
                if (Array.isArray(a)) {
                    if (Object.getPrototypeOf(a) !== Array.prototype || d.length !== a.length + 1) throw TypeError(c);
                    return Array.from({
                        length: a.length
                    }, (d, e) => {
                        let f = Object.getOwnPropertyDescriptor(a, e);
                        if (void 0 === f || !f.enumerable) throw TypeError(c);
                        return j(f.value, b, c)
                    })
                }
                let e = Object.create(null);
                for (let f of d) {
                    let d = Object.getOwnPropertyDescriptor(a, f);
                    if ("string" != typeof f || void 0 === d || !d.enumerable || void 0 === d.value) throw TypeError(c);
                    e[f] = j(d.value, b, c)
                }
                return e
            } finally {
                b.delete(a)
            }
        }

        function k(a, b) {
            if ("string" != typeof a || a.length > b || !a.trim()) throw TypeError(e);
            return a.trim()
        }

        function l(a, b) {
            ! function a(b, c, d) {
                var e;
                if (!(("object" != typeof(e = b) || null === e) && "function" != typeof e || d.has(b))) {
                    for (let e of (d.add(b), c && a(Object.getPrototypeOf(b), c, d), Reflect.ownKeys(b))) {
                        let f = Object.getOwnPropertyDescriptor(b, e);
                        void 0 !== f && ("value" in f ? a(f.value, c, d) : (a(f.get, c, d), a(f.set, c, d)))
                    }
                    if (Object.freeze(b), !Object.isFrozen(b)) throw Error("Failed to freeze an object in the object graph.")
                }
            }(a, b, new WeakSet)
        }
        c.d(b, {}, {
            a: l,
            b: function(a) {
                return Object.setPrototypeOf(a, null), l(a, !1), a
            },
            c: function(a, b) {
                return b.length <= 128 && d.exec(b)?.[1] === a
            },
            d: function(a) {
                if (null === a || "object" != typeof a || Array.isArray(a)) throw TypeError(e);
                let b = Reflect.ownKeys(a);
                if (!b.includes("category") || !b.includes("value") || b.some(a => "category" !== a && "value" !== a && "disambig" !== a && "location" !== a && "address" !== a)) throw TypeError(e);
                let c = k(a.category, 128).toLowerCase();
                if ("entity_sidebar_follow_up" === c) throw TypeError(e);
                let d = {
                    category: "business" === c ? "local_business" : c,
                    value: k(a.value, 1024),
                    ...b.includes("disambig") ? {
                        disambig: k(a.disambig, 1024)
                    } : {},
                    ...b.includes("location") ? {
                        location: k(a.location, 1024)
                    } : {},
                    ...b.includes("address") ? {
                        address: k(a.address, 1024)
                    } : {}
                };
                if (h.has(d.category) && !d.address && (!d.location || "user" === d.location.toLowerCase())) throw TypeError(e);
                return d
            },
            e: function(a) {
                if (!i(a)) throw TypeError(f);
                let b = Reflect.ownKeys(a),
                    c = Object.getOwnPropertyDescriptor(a, "tool")?.value,
                    d = Object.getOwnPropertyDescriptor(a, "arguments")?.value;
                if (2 !== b.length || !b.includes("tool") || !b.includes("arguments") || "string" != typeof c || !c.trim() || !i(d)) throw TypeError(f);
                return {
                    tool: c,
                    arguments: j(d, new Set, f)
                }
            },
            f: function(a) {
                if (!i(a) || 2 !== Reflect.ownKeys(a).length) throw TypeError(g);
                let b = Object.getOwnPropertyDescriptor(a, "actionName")?.value,
                    c = Object.getOwnPropertyDescriptor(a, "arguments");
                if ("string" != typeof b || !b.trim() || void 0 === c) throw TypeError(g);
                return {
                    actionName: b,
                    arguments: j(c.value, new Set, g)
                }
            },
            g: function(a) {
                if (!i(a) || 1 !== Reflect.ownKeys(a).length) return;
                let b = Object.getOwnPropertyDescriptor(a, "plan")?.value;
                return "go" === b || "plus" === b || "pro" === b ? b : void 0
            }
        })
    }),
    SkuY: (function(a, b, c) {
        var d, e, f, g, h;
        (d || (d = {})).SpeakingExercise = "speaking_exercise", (g = e || (e = {})).Idle = "idle", g.Starting = "starting", g.Recording = "recording", g.Stopping = "stopping", g.Done = "done", g.Error = "error", (h = f || (f = {})).Recording = "recording", h.AudioLevel = "audio_level", h.Transcript = "transcript", h.Stopping = "stopping", h.Done = "done", h.Error = "error", h.Cancelled = "cancelled", c.d(b, {
            a: () => f,
            b: () => e
        }, {
            c: function(a) {
                if (null === a || "object" != typeof a || Array.isArray(a)) return null;
                let b = a.language;
                if (void 0 !== b && ("string" != typeof b || !b.trim() || b.length > 128)) return null;
                let c = a.audioLevels,
                    e = {
                        ...void 0 === b ? {} : {
                            language: b
                        },
                        ..."boolean" == typeof c ? {
                            audioLevels: c
                        } : {}
                    },
                    f = a.context;
                if (void 0 === f) return e;
                if (null === f || "object" != typeof f || Array.isArray(f)) return null;
                let g = f.kind,
                    h = f.expectedPhrase;
                if (g !== d.SpeakingExercise || "string" != typeof h || !h.trim()) return null;
                let i = f.targetWords;
                if (void 0 === i) return {
                    ...e,
                    context: {
                        kind: g,
                        expectedPhrase: h
                    }
                };
                if (h.length > 1200 || Array.from(h).length > 600 || !Array.isArray(i) || 0 === i.length || i.length > 64) return null;
                let j = [];
                for (let a of i) {
                    if ("string" != typeof a || a.length > 240 || !a.trim() || Array.from(a).length > 120) return null;
                    j.push(a)
                }
                return {
                    ...e,
                    context: {
                        kind: g,
                        expectedPhrase: h,
                        targetWords: j
                    }
                }
            },
            d: function(a) {
                try {
                    let b = a.rms;
                    if (Number.isFinite(b) && b >= 0 && b <= 1) return b
                } catch {}
            }
        })
    }),
    lYZl: (function(a, b, c) {
        c.d(b, {}, {
            a: class {
                constructor() {
                    this.audioLevelConsole = console, this.rms = null, this.disposed = !1, this.revision = 0, this.observers = new Set
                }
                publish(a) {
                    this.disposed || (this.rms = a, this.notify())
                }
                dispose() {
                    this.disposed || (this.disposed = !0, this.rms = null, this.notify(), this.observers.clear())
                }
                subscribe(a) {
                    if (this.disposed) return () => {};
                    let b = b => a(b);
                    return this.observers.add(b), this.deliver(b), () => {
                        this.observers.delete(b)
                    }
                }
                notify() {
                    let a = ++this.revision;
                    for (let b of Array.from(this.observers)) {
                        if (a !== this.revision) break;
                        this.observers.has(b) && this.deliver(b)
                    }
                }
                deliver(a) {
                    try {
                        a(this.rms)
                    } catch {
                        this.audioLevelConsole.warn("DIL dictation audio-level subscriber failed")
                    }
                }
            }
        })
    }),
    dn8s: (function(a, b, c) {
        var d = c("obns"),
            e = c("SkuY");
        class f {
            constructor(a, b) {
                this.submission = a, this.onEvent = b, this.revoked = !1, this.starting = !1, this.done = !1, this.deferredTurn = (0, d.b)({
                    complete: (a, b) => this.complete(a, b),
                    cancel: () => this.cancel()
                })
            }
            create(a, b) {
                this.session = a.createSession(b, a => this.receive(a)), this.revoked && this.dispose()
            }
            start() {
                if (!this.revoked && !this.starting) {
                    this.starting = !0;
                    try {
                        if (!this.submission.isContextValid() || this.revoked) return void this.cancel();
                        this.session?.start()
                    } catch (a) {
                        throw this.revoked = !0, a
                    } finally {
                        this.starting = !1
                    }
                }
            }
            stop() {
                try {
                    this.session?.stop()
                } catch (a) {
                    throw this.revoked = !0, a
                }
            }
            cancel() {
                this.revoked = !0;
                try {
                    this.session?.cancel()
                } catch (a) {
                    throw this.dispose(), a
                }
            }
            retire() {
                this.revoked = !0, this.dispose()
            }
            dispose() {
                this.done || (this.revoked = !0);
                let a = this.session;
                this.session = void 0, a?.dispose()
            }
            receive(a) {
                switch (a.kind) {
                    case e.a.Done:
                        this.done = !0;
                        break;
                    case e.a.Error:
                    case e.a.Cancelled:
                        this.revoked = !0
                }
                this.onEvent(a)
            }
            isCurrent() {
                return !this.revoked && !this.starting && this.done
            }
            complete(a, b) {
                let c, d;
                return void 0 !== this.completion ? this.completion : this.isCurrent() ? (this.completion = new Promise((a, b) => {
                    c = a, d = b
                }), this.submission.issueNewTurn(a, b, () => this.isCurrent()).then(c, d), this.completion) : Promise.resolve(!1)
            }
        }
        c.d(b, {}, {
            a: class {
                constructor(a, b) {
                    this.recording = a, this.submission = b, this.disposed = !1
                }
                get supportsAudioLevels() {
                    return !0 === this.recording.supportsAudioLevels
                }
                createSession(a, b) {
                    if (this.disposed) throw Error("Deferred turn owner is disposed.");
                    let c = this.attempt,
                        d = new f(this.submission, b);
                    return (this.attempt = d, c?.retire(), this.attempt !== d || this.disposed) ? d.retire() : d.create(this.recording, a), d
                }
                dispose() {
                    this.disposed = !0;
                    let a = this.attempt;
                    this.attempt = void 0, a?.retire()
                }
            }
        })
    })
};