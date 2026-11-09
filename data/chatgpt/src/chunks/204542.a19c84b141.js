export const __rspack_esm_ids = [204542];
export const __webpack_modules__ = {
    oArc: (function(e, t, n) {
        var i = n("SZCv"),
            r = n.n(i),
            a = n("BolX"),
            s = n("ASxG"),
            o = n("aFoA"),
            l = n("yWTM"),
            c = n("nlNF"),
            d = n("OWtl"),
            u = n("tSEg"),
            h = n("kl6F");
        let f = s.object({
                focusComposerNonce: s.number().optional()
            }).nullish(),
            m = (0, a.u)(d.a, () => new Map),
            p = (0, a.c)(d.a, e => {
                let {
                    get: t
                } = e;
                return [...new Set([...t(m).values()].map(e => {
                    let {
                        origin: t
                    } = e;
                    return t.routeKey
                }))]
            }, {
                isEqual: r()
            }),
            g = (0, a.d)(d.a, (e, t) => {
                let {
                    get: n
                } = t;
                return [...n(m).values()].some(t => {
                    let {
                        origin: n
                    } = t;
                    return n.routeKey === e.routeKey && n.placement === e.placement
                })
            }),
            b = (0, a.d)(d.a, (e, t) => {
                let {
                    get: n
                } = t;
                return [...n(m)].find(t => {
                    let [, {
                        origin: i,
                        status: r
                    }] = t;
                    return null != e.conversationId && "recording" === r && i.hostId === e.hostId && (i.conversationId === e.conversationId || null == e.hostId && (0, o.c)(n, i.conversationId) === (0, o.c)(n, e.conversationId))
                })?.[0] ?? null
            }),
            v = (0, a.v)(d.a, e => null, void 0, {
                autoDispose: 6e4
            }),
            w = (0, a.d)(d.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(m).get(e) ?? null
            }),
            y = (0, a.c)(d.a, e => {
                let {
                    get: t
                } = e, n = t(c.c);
                return [...t(m)].flatMap(e => {
                    let [i, r] = e, a = r.origin.homeDraft;
                    return null == a || n?.pathname === a.location.pathname && n.search === a.location.search && n.state?.focusComposerNonce === a.location.state?.focusComposerNonce && (n.state?.homeDraftClientThreadId ?? t(h.f, n.state?.sitePreviewDraft != null ? (0, l.d)(n.state.sitePreviewDraft) : (0, l.b)({
                        entrypoint: "home"
                    }))) === a.clientThreadId ? [] : [i]
                })
            }, {
                isEqual: r()
            });

        function x(e, t) {
            let n = (0, u.g)(e);
            if ("home" !== e.routeKind || null == e.homeDraftClientThreadId) return n;
            let i = f.safeParse(t?.state);
            return JSON.stringify([n, e.homeDraftClientThreadId, i.success ? i.data?.focusComposerNonce : void 0])
        }
        n.d(t, {}, {
            a: v,
            b: y,
            c: w,
            d: b,
            e: p,
            f: g,
            g: function(e, t) {
                return [...e.get(m).values()].find(e => {
                    let {
                        origin: n
                    } = e;
                    return n.homeDraft?.clientThreadId === t
                })?.origin.homeDraft
            },
            h: function(e, t, n, i, r) {
                return {
                    routeKey: x(e, t),
                    placement: r,
                    homeDraft: "home" === e.routeKind && null != e.homeDraftClientThreadId ? {
                        clientThreadId: e.homeDraftClientThreadId,
                        location: t
                    } : void 0,
                    conversationId: n,
                    hostId: i
                }
            },
            i: x,
            j: function(e, t) {
                null != t && (e.set(v, t, null), e.set(m, e => {
                    let n = new Map(e);
                    return n.delete(t), n
                }))
            },
            k: function(e, t, n) {
                e.set(m, e => new Map(e).set(t, {
                    origin: n,
                    status: "starting"
                }))
            },
            l: function(e, t, n) {
                null != t && e.set(m, e => {
                    let i = e.get(t);
                    return null == i || i.status === n ? e : new Map(e).set(t, {
                        ...i,
                        status: n
                    })
                })
            }
        })
    }),
    jNG0: (function(e, t, n) {
        var i = n("kZKN");
        n.d(t, {}, {
            a: async function(e, t, n) {
                t.throwIfAborted();
                let r = e.getAudioTracks()[0];
                if (null == r || "ended" === r.readyState || !1 === r.enabled) throw new DOMException("Microphone input is unavailable", "NotReadableError");
                let a = new AbortController,
                    s = () => a.abort(new DOMException("Microphone input ended", "NotReadableError")),
                    o = () => a.abort(t.reason);
                t.addEventListener("abort", o, {
                    once: !0
                }), r.addEventListener("ended", s, {
                    once: !0
                });
                let l = window.setTimeout(s, 1e4);
                try {
                    let e, t, s, o;
                    if ("function" == typeof MediaStreamTrackProcessor) try {
                        e = new MediaStreamTrackProcessor({
                            track: r,
                            maxBufferSize: 1
                        }).readable
                    } catch (e) {
                        if (!(e instanceof TypeError)) throw e
                    }
                    if (null == e) return r.muted && await (0, i.a)(new Promise(e => r.addEventListener("unmute", () => e(), {
                        once: !0,
                        signal: a.signal
                    })), a.signal), "track";
                    let l = n?.(r.label).catch(() => !1),
                        c = !1,
                        d = 0,
                        u = !1,
                        h = new Float32Array(0),
                        f = "track",
                        m = Symbol("microphone frame received");
                    if (await e.pipeTo(new WritableStream({
                            async write(e) {
                                let n = !1;
                                try {
                                    if (null != l && (c = await (0, i.a)(l, a.signal), l = void 0), (n = e.numberOfFrames > 0 && r.enabled && !r.muted) && c) {
                                        h.length !== e.numberOfFrames && (h = new Float32Array(e.numberOfFrames)), e.copyTo(h, {
                                            planeIndex: 0,
                                            format: "f32-planar"
                                        });
                                        let i = performance.now(),
                                            r = 1e3 * e.numberOfFrames / e.sampleRate;
                                        null != s && null != o && e.timestamp > s && e.timestamp - s <= 2 * r * 1e3 + 1 && i - o <= 3 * r || (u = !1, t = i, d = 0), s = e.timestamp, o = i, t = t ?? i, d += r;
                                        let a = h.some(e => 0 !== e);
                                        n = a && u || d >= 750 && i - t >= 750, u = a, f = a ? "bluetooth_signal_ready" : "bluetooth_silence_ready"
                                    } else n || (s = void 0, t = void 0, d = 0)
                                } finally {
                                    e.close()
                                }
                                n && a.abort(m)
                            }
                        }), {
                            signal: a.signal
                        }).catch(e => {
                            if (e !== m) throw e
                        }), !a.signal.aborted) throw new DOMException("Microphone input ended", "NotReadableError");
                    return f
                } finally {
                    window.clearTimeout(l), t.removeEventListener("abort", o), r.removeEventListener("ended", s), a.abort()
                }
            }
        })
    }),
    zn7o: (function(e, t, n) {
        class i extends DOMException {
            constructor() {
                super("Microphone is already in use", "NotReadableError")
            }
        }
        n.d(t, {}, {
            a: i
        })
    }),
    RVN2: (function(e, t, n) {
        var i = n("SRbQ"),
            r = n("BolX"),
            a = n("GaA7"),
            s = n("OWtl"),
            o = n("zn7o");
        let l = new WeakMap,
            c = (0, r.u)(s.a, () => null);

        function d(e, t, n) {
            n?.catch(() => {});
            let i = h(e),
                r = i.hostLeases.get(t);
            i.hostLeases.delete(t), null != r && Promise.resolve(n).then(r, r), i.owner?.id === t && (null != n && (i.release = Promise.allSettled([i.release, n]).then(() => {})), i.owner = null), e.get(c) === t && e.set(c, null)
        }

        function u(e, t) {
            let n = h(e);
            return null == n.voiceIntent || n.voiceIntent.id === t && n.voiceIntent.version >= n.accepted
        }

        function h(e) {
            let t = e.chain.get(s.a.id) ?? e.node,
                n = l.get(t);
            return null == n && (n = {
                owner: null,
                release: Promise.resolve(),
                requested: 0,
                accepted: 0,
                voiceIntent: null,
                hostLeases: new Map
            }, l.set(t, n)), n
        }
        n.d(t, {}, {
            a: c,
            b: function(e, t, n) {
                let i = h(e),
                    r = i.owner;
                r?.kind === "voice" && r.id === t && (r.id = n);
                let a = i.hostLeases.get(t);
                null != a && (i.hostLeases.delete(t), i.hostLeases.set(n, a));
                let s = i.voiceIntent;
                s?.id === t && (s.id = n)
            },
            c: function(e) {
                return h(e).requested
            },
            d: u,
            e: function(e, t) {
                let n = h(e);
                n.voiceIntent = {
                    id: t,
                    version: ++n.requested
                }
            },
            f: d,
            g: async function(e, t) {
                let n = h(e);
                if ("voice" === t.kind && !u(e, t.id)) return !1;
                let r = e.get(c);
                if ("dictation" === t.kind && n.owner?.kind === "voice" || null != r && n.owner?.id !== r) throw new o.a;
                let s = n.owner;
                n.accepted = "voice" === t.kind && null != n.voiceIntent ? n.voiceIntent.version : ++n.requested, n.owner = t, e.set(c, "dictation" === t.kind ? t.id : null);
                let l = [n.release, s?.kind === "dictation" ? s.relinquish() : Promise.resolve()];
                n.release = Promise.allSettled(l).then(() => {});
                try {
                    await Promise.all(l)
                } catch (i) {
                    throw n.owner === t && d(e, t.id), i
                }
                if (n.owner !== t) return !1;
                let f = a.a?.realtimeVoice;
                if (null != f) {
                    let r = await f.acquireMicrophone(t.kind, async () => {
                        "dictation" === t.kind && await t.relinquish()
                    });
                    if (n.owner !== t || null == r) {
                        let a = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            let s = (0, i.a)(a, r, !1);
                            if ((0, i.a)(a, s?.release(), !1), n.owner === t) throw d(e, t.id), new o.a;
                            return !1
                        } catch (e) {
                            a.error = e, a.hasError = !0
                        } finally {
                            (0, i.e)(a)
                        }
                    }
                    n.hostLeases.set(t.id, () => {
                        let e = {
                            stack: [],
                            error: void 0,
                            hasError: !1
                        };
                        try {
                            let t = (0, i.a)(e, r, !1);
                            (0, i.a)(e, t.release(), !1)
                        } catch (t) {
                            e.error = t, e.hasError = !0
                        } finally {
                            (0, i.e)(e)
                        }
                    })
                }
                return n.owner === t
            },
            h: function() {
                return !0
            }
        })
    }),
    LVkx: (function(e, t, n) {
        var i = n("wWGv"),
            r = n("GaA7"),
            a = n("ADAj");
        n.d(t, {}, {
            a: async function(e) {
                let t = r.a?.dictationPlayback;
                if (null == t || "recording" !== e.state || !await (0, a.d)(i.sf.dictationPlaybackDuckingEnabled).catch(() => !1) || "recording" !== e.state) return;
                let n = t.duck();
                n.then(t => {
                    let i = () => {
                        t[Symbol.dispose](), n[Symbol.dispose]()
                    };
                    "recording" !== e.state ? i() : e.addEventListener("stop", i, {
                        once: !0
                    })
                }, () => n[Symbol.dispose]())
            }
        })
    }),
    qXzS: (function(e, t, n) {
        n.d(t, {
            a: () => u,
            b: () => d.a
        });
        var i = n("wWGv"),
            r = n("PFjh"),
            a = n("Io7L"),
            s = n("GaA7"),
            o = n("z7S6"),
            l = n("lENN");
        n("LnnK");
        var c = n("SRbQ"),
            d = n("RVN2");
        "u" > typeof window && window.setTimeout(() => {}, 0);
        class u {
            scope;
            options;
            captureLifetime = new AbortController;
            get captureSignal() {
                return this.captureLifetime.signal
            }
            cancellation = (0, i.Se)();
            captureReleased = (0, i.Se)();
            cancelled = !1;
            claimed = !1;
            active = !1;
            captureReady = !1;
            captureStopped = !1;
            captureReadyAtMs;
            microphone = null;
            startPromise = null;
            microphoneFinish = null;
            microphoneRelease = null;
            stopPromise = null;
            capturedAudio;
            limitTimer;
            terminalError = null;
            finishPromise = null;
            streaming = null;
            streamingStart = null;
            constructor(e, t) {
                this.scope = e, this.options = t, this.cancellation.promise.catch(() => {}), this.captureReleased.promise.catch(() => {})
            }
            async takeOver() {
                return (0, d.h)() ? !this.cancelled && (this.claimed = !0, (0, d.g)(this.scope, {
                    id: this.options.owner,
                    kind: "dictation",
                    relinquish: () => (this.cancelled || (this.options.onTakeover?.(), this.captureReady && null != this.options.onTakeover || this.cancel()), this.captureReleased.promise)
                })) : this.claim()
            }
            get owner() {
                return this.options.owner
            }
            claim() {
                return !this.cancelled && (this.claimed ? this.scope.get(d.a) === this.options.owner : null == this.scope.get(d.a) && (this.claimed = !0, this.scope.set(d.a, this.options.owner), !0))
            }
            duringStartup(e) {
                return Promise.race([e, this.cancellation.promise])
            }
            start(e, t) {
                return this.startPromise = this.startPromise ?? this.acquire(t).then(t => (this.assertCanCapture(), this.captureReady = !0, this.captureReadyAtMs = performance.now(), this.setActive(!0), this.streamingStart = this.streaming?.start(t, this.options.startConfirmed, e).catch(e => {
                    throw this.terminalError ?? e
                }) ?? null, this.streamingStart?.catch(() => {}), null == this.streaming && (this.options.chatgpt || this.requiresMicrophoneDrain) && (this.limitTimer = window.setTimeout(() => {
                    null != this.options.onLimit ? this.options.onLimit() : this.finish({
                        preserveOwnership: !0
                    }).catch(e => this.fail(e)).finally(() => this.dispose())
                }, 595e3)), t)), this.startPromise
            }
            assertCanCapture() {
                if (this.cancelled || this.captureStopped) throw new DOMException("Recording cancelled", "AbortError")
            }
            async acquire(e) {
                if (!this.claim()) throw new o.a("The dictation microphone is busy.", "microphone_busy");
                try {
                    let i;
                    if (this.assertCanCapture(), e?.mark("device_requested"), s.a?.microphoneCapture != null) {
                        var t, n;
                        let e, i, r, a, o, l, d, u, h;
                        this.microphone = (t = s.a.microphoneCapture, n = e => this.fail(e), a = (r = new MediaStreamTrackGenerator({
                            kind: "audio"
                        })).writable.getWriter(), o = [], l = 16e3, d = !1, u = 0, h = () => {
                            d || (d = !0, e?.[Symbol.dispose](), e = void 0, r.stop(), a.abort().catch(() => {}))
                        }, {
                            stream: (async () => {
                                try {
                                    let s = {
                                        stack: [],
                                        error: void 0,
                                        hasError: !1
                                    };
                                    try {
                                        if (e = await t.open(), d) throw e[Symbol.dispose](), e = void 0, new DOMException("Microphone start cancelled", "AbortError");
                                        let h = (0, c.a)(s, await e.ready(), !1);
                                        if ("error" === h.status) throw new DOMException("Unable to open the local microphone", "NotReadableError");
                                        if (l = h.sampleRate, d) throw new DOMException("Microphone start cancelled", "AbortError");
                                        let f = e;
                                        return i = (async () => {
                                            for (; !d;) {
                                                let e = {
                                                    stack: [],
                                                    error: void 0,
                                                    hasError: !1
                                                };
                                                try {
                                                    let t = (0, c.a)(e, await f.read(), !1);
                                                    if (d || "stopped" === t.status) return;
                                                    if ("error" === t.status) throw new DOMException("Local microphone capture stopped", "NotReadableError");
                                                    let n = new Uint8Array(t.pcm);
                                                    o.push(n);
                                                    let i = n.length / 2,
                                                        r = new AudioData({
                                                            format: "s16",
                                                            sampleRate: l,
                                                            numberOfFrames: i,
                                                            numberOfChannels: 1,
                                                            timestamp: Math.round(1e6 * u / l),
                                                            data: n
                                                        });
                                                    u += i;
                                                    try {
                                                        await a.write(r)
                                                    } finally {
                                                        r.close()
                                                    }
                                                } catch (t) {
                                                    e.error = t, e.hasError = !0
                                                } finally {
                                                    (0, c.e)(e)
                                                }
                                            }
                                        })().catch(e => {
                                            d || n(e)
                                        }), new MediaStream([r])
                                    } catch (e) {
                                        s.error = e, s.hasError = !0
                                    } finally {
                                        (0, c.e)(s)
                                    }
                                } catch (e) {
                                    throw h(), e
                                }
                            })(),
                            dispose: h,
                            finish: async () => {
                                await e?.stop(), await i
                            },
                            getAudio: () => {
                                if (0 === o.length) return;
                                let e = o.reduce((e, t) => e + t.byteLength, 0),
                                    t = new ArrayBuffer(44),
                                    n = new DataView(t),
                                    i = (e, t) => {
                                        for (let i = 0; i < t.length; i++) n.setUint8(e + i, t.charCodeAt(i))
                                    };
                                return i(0, "RIFF"), n.setUint32(4, e + 36, !0), i(8, "WAVEfmt "), n.setUint32(16, 16, !0), n.setUint16(20, 1, !0), n.setUint16(22, 1, !0), n.setUint32(24, l, !0), n.setUint32(28, 2 * l, !0), n.setUint16(32, 2, !0), n.setUint16(34, 16, !0), i(36, "data"), n.setUint32(40, e, !0), new Blob([t, ...o], {
                                    type: "audio/wav"
                                })
                            }
                        })
                    } else if (1) {
                        let e = !1,
                            t = null,
                            n = () => {
                                e = !0, t?.getTracks().forEach(e => e.stop()), t = null
                            },
                            r = this.options.chatgpt || !0;
                        this.microphone = {
                            dispose: n,
                            stream: (null == i ? (0, l.c)(this.options.chatgpt ? {
                                channelCount: 1,
                                sampleRate: 4e3
                            } : {
                                channelCount: 1
                            }, this.options.dictationAudio, r, () => this.assertCanCapture()) : (0, l.a)({
                                channelCount: 1
                            }, i, this.options.dictationAudio)).then(i => (t = i, e && n(), i))
                        }
                    }
                    return await this.duringStartup(this.microphone.stream)
                } catch (e) {
                    throw this.cancel(), e
                }
            }
            prepareStreaming(e, t, n) {
                let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (null != this.streaming) return this.streaming;
                if (!this.claim()) throw new o.a("The dictation microphone is busy.", "microphone_busy");
                return this.streaming = new o.b(e, t, null == n ? void 0 : (e, t) => {
                    this.cancelled || n(e, t)
                }, {
                    ...i,
                    getRecordingDurationMs: () => null == this.captureReadyAtMs ? void 0 : globalThis.performance.now() - this.captureReadyAtMs,
                    frameRTTMetrics: (0, r.c)(this.scope)
                }), this.streaming.prepare(this.options.startConfirmed), this.streaming
            }
            get requiresMicrophoneDrain() {
                return this.microphone?.finish != null
            }
            getAudio() {
                return this.capturedAudio ?? this.microphone?.getAudio?.()
            }
            finishMicrophone() {
                return this.microphoneFinish = this.microphoneFinish ?? this.microphone?.finish?.() ?? Promise.resolve(), this.duringStartup(this.microphoneFinish)
            }
            stop() {
                if (null != this.stopPromise) return this.stopPromise;
                if (this.recordCaptureStop(), window.clearTimeout(this.limitTimer), !this.captureReady) return this.cancel(), this.stopPromise = Promise.resolve(), this.stopPromise;
                let e = () => {
                    let e = this.streaming?.stopAndFlush() ?? Promise.resolve();
                    return this.releaseMicrophone(!0), e
                };
                return this.stopPromise = this.requiresMicrophoneDrain ? this.finishMicrophone().then(e) : e(), this.stopPromise
            }
            stopForFinalization() {
                if (null != this.stopPromise || this.captureReady) return this.stop();
                this.recordCaptureStop(), window.clearTimeout(this.limitTimer), this.captureStopped = !0;
                let e = this.streaming?.stopAndFlush() ?? Promise.resolve();
                return this.releaseMicrophone(!0), this.stopPromise = e, this.stopPromise
            }
            finish() {
                let {
                    preserveOwnership: e = !1,
                    finalizePendingCapture: t = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, n = this.streaming, i = this.requiresMicrophoneDrain;
                return this.finishPromise = this.finishPromise ?? (async () => {
                    try {
                        let e = t ? this.stopForFinalization() : this.stop();
                        if (i && await e, null != this.terminalError) throw this.terminalError;
                        if (null == n) {
                            if (this.cancelled) throw new DOMException("Recording cancelled", "AbortError");
                            throw Error("Streaming dictation was not started.")
                        }
                        let r = n.finish(),
                            [, , a] = await this.duringStartup(Promise.all([e, this.streamingStart, r]));
                        return a
                    } finally {
                        e || this.dispose()
                    }
                })(), this.finishPromise
            }
            fail(e) {
                this.cancelled || (this.terminalError = e, this.cancel(), this.options.onError(e))
            }
            setActive(e) {
                this.active !== e && (this.active = e, (0, d.h)() || (0, a.i)(this.scope, e))
            }
            releaseMicrophone() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                this.captureLifetime.abort(), window.clearTimeout(this.limitTimer), this.capturedAudio = this.capturedAudio ?? this.microphone?.getAudio?.();
                let t = this.microphone;
                if (t?.dispose(), this.microphone = null, this.setActive(!1), (0, d.h)() && null == this.microphoneRelease) {
                    let e = [Promise.resolve(t?.stream).catch(() => {}), Promise.resolve(this.options.releaseAudio?.()), Promise.resolve(this.cancelled ? void 0 : this.streaming?.stopAndFlush()).catch(() => {}).then(() => this.streaming?.audioCaptureReleased())];
                    this.microphoneRelease = Promise.allSettled(e).then(() => ((0, d.f)(this.scope, this.options.owner), Promise.all(e))).then(() => {
                        this.captureReleased.resolve(void 0)
                    }, e => this.captureReleased.reject(e))
                }(0, d.h)() || e || !this.claimed || (this.claimed = !1, this.scope.get(d.a) === this.options.owner && this.scope.set(d.a, null))
            }
            cancel() {
                this.cancelled || (this.cancelled = !0, this.recordCaptureStop(), this.cancellation.reject(this.terminalError ?? new DOMException("Recording cancelled", "AbortError")), this.streaming?.close(), this.releaseMicrophone())
            }
            dispose() {
                this.cancel()
            }
            recordCaptureStop() {
                null != this.captureReadyAtMs && (this.streaming?.setRecordingDuration(performance.now() - this.captureReadyAtMs), this.captureReadyAtMs = void 0)
            }
        }
    }),
    tVIY: (function(e, t, n) {
        var i = n("ABep"),
            r = n("QosV"),
            a = n("Wf1j"),
            s = n("oyxz"),
            o = n("cI4i"),
            l = n("MM0V"),
            c = n("Sm6l"),
            d = n("uuN8"),
            u = n("bf6R"),
            h = n("RNul"),
            f = n("aepO");

        function m(e) {
            let t, n, a, s = (0, r.c)(6);
            s[0] !== e ? ({
                color: t,
                ...n
            } = e, s[0] = e, s[1] = t, s[2] = n) : (t = s[1], n = s[2]);
            let o = "ghostActive" === t ? "secondary" : "ghost";
            return s[3] !== n || s[4] !== o ? (a = (0, i.jsx)(c.a, {
                ...n,
                color: o,
                size: "compact"
            }), s[3] = n, s[4] = o, s[5] = a) : a = s[5], a
        }

        function p(e) {
            let t, n = (0, r.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(c.a, {
                ...e,
                color: "ghost",
                size: "icon"
            }), n[0] = e, n[1] = t) : t = n[1], t
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, g, b, v, w, y, x, j, k = (0, r.c)(52),
                    {
                        recovery: M,
                        presentation: A,
                        inert: S,
                        onViewRecording: I,
                        onInsertText: _,
                        onCopyText: P,
                        onRetry: E,
                        onDismiss: R
                    } = e,
                    C = void 0 === A ? "banner" : A,
                    W = void 0 === P ? f.c : P,
                    N = (0, a.a)(),
                    D = "composer-rail" === C ? o.a.Action : m,
                    L = "composer-rail" === C ? o.a.IconAction : p;
                k[0] !== C || k[1] !== M.phase ? (t = "recovering" === M.phase ? (0, i.jsx)(h.a, {
                    className: "size-4",
                    animateWhileUnfocused: "banner" === C
                }) : void 0, k[0] = C, k[1] = M.phase, k[2] = t) : t = k[2];
                let T = t;
                k[3] !== M.phase ? (n = (0, i.jsx)("span", {
                    className: "select-none",
                    children: (0, i.jsx)(s.a, {
                        id: "dictation.recovery.statusLabel",
                        defaultMessage: "{phase, select, recovering {Recovering text…} recovered {Text recovered} other {Dictation stopped}}",
                        description: "Current state of dictation recovery. Recovering means transcription is in progress; recovered means text is available to use.",
                        values: {
                            phase: M.phase
                        }
                    })
                }), k[3] = M.phase, k[4] = n) : n = k[4];
                let O = n,
                    {
                        text: F
                    } = M;
                if ("recovered" === M.phase && null != F)
                    if (null != _) {
                        let e, t;
                        k[5] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(s.a, {
                            id: "dictation.recovery.insert",
                            defaultMessage: "Add to message",
                            description: "Appends recovered dictation to the current composer draft"
                        }), k[5] = e) : e = k[5], k[6] !== D || k[7] !== _ ? (t = (0, i.jsx)(D, {
                            color: "ghostActive",
                            onClick: _,
                            children: e
                        }), k[6] = D, k[7] = _, k[8] = t) : t = k[8], c = t
                    } else {
                        let e, t, n, r;
                        k[9] !== N ? (e = N.formatMessage({
                            id: "dictation.recovery.copy",
                            defaultMessage: "Copy text",
                            description: "Copies recovered dictation text without replacing the user's current draft or clipboard automatically"
                        }), k[9] = N, k[10] = e) : e = k[10];
                        let a = e,
                            s = M.recordingId ?? F;
                        k[11] !== W || k[12] !== F ? (t = () => W(F), k[11] = W, k[12] = F, k[13] = t) : t = k[13], k[14] !== D ? (n = e => (0, i.jsx)(D, {
                            ...e,
                            color: "ghostActive"
                        }), k[14] = D, k[15] = n) : n = k[15], k[16] !== a || k[17] !== s || k[18] !== t || k[19] !== n ? (r = (0, i.jsx)(d.a, {
                            ariaLabel: a,
                            buttonText: a,
                            className: "not-disabled:not-aria-disabled:active:opacity-80",
                            showIcon: !1,
                            onCopy: t,
                            renderButton: n
                        }, s), k[16] = a, k[17] = s, k[18] = t, k[19] = n, k[20] = r) : r = k[20], c = r
                    } let q = c;
                k[21] !== D || k[22] !== I || k[23] !== M.saveState ? (g = "saved" === M.saveState && null != I ? (0, i.jsx)(D, {
                    color: "ghost",
                    onClick: I,
                    children: (0, i.jsx)(s.a, {
                        id: "dictation.recovery.view",
                        defaultMessage: "View recording",
                        description: "Opens the specific saved dictation recording for recovery and download"
                    })
                }) : null, k[21] = D, k[22] = I, k[23] = M.saveState, k[24] = g) : g = k[24], k[25] !== D || k[26] !== E || k[27] !== M.phase ? (b = "failed" === M.phase && null != E ? (0, i.jsx)(D, {
                    color: "ghostActive",
                    onClick: E,
                    children: (0, i.jsx)(s.a, {
                        id: "dictation.recovery.retry",
                        defaultMessage: "Retry",
                        description: "Retries transcription of retained dictation audio"
                    })
                }) : null, k[25] = D, k[26] = E, k[27] = M.phase, k[28] = b) : b = k[28], k[29] !== N ? (v = N.formatMessage({
                    id: "dictation.recovery.dismiss",
                    defaultMessage: "Dismiss",
                    description: "Dismisses the recovery notice without deleting saved audio"
                }), k[29] = N, k[30] = v) : v = k[30], k[31] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, i.jsx)(u.qj, {}), k[31] = w) : w = k[31], k[32] !== L || k[33] !== R || k[34] !== v ? (y = (0, i.jsx)(L, {
                    "aria-label": v,
                    onClick: R,
                    children: w
                }), k[32] = L, k[33] = R, k[34] = v, k[35] = y) : y = k[35], k[36] !== c || k[37] !== y || k[38] !== g || k[39] !== b ? (x = (0, i.jsxs)(i.Fragment, {
                    children: [q, g, b, y]
                }), k[36] = c, k[37] = y, k[38] = g, k[39] = b, k[40] = x) : x = k[40];
                let $ = x;
                if ("composer-rail" === C) {
                    let e, t;
                    return k[41] !== $ || k[42] !== O || k[43] !== T ? (e = (0, i.jsx)(o.a.Row, {
                        wrapActions: !0,
                        icon: T,
                        title: O,
                        actions: $
                    }), k[41] = $, k[42] = O, k[43] = T, k[44] = e) : e = k[44], k[45] !== S || k[46] !== e ? (t = (0, i.jsx)(o.a.Item, {
                        role: "status",
                        "aria-live": "polite",
                        inert: S,
                        children: e
                    }), k[45] = S, k[46] = e, k[47] = t) : t = k[47], t
                }
                return k[48] !== $ || k[49] !== O || k[50] !== T ? (j = (0, i.jsx)(l.a, {
                    type: "normal",
                    density: "compact",
                    layout: "warningCallout",
                    stackOnNarrow: !0,
                    showCtaSeparator: !1,
                    wrapCtas: !0,
                    role: "status",
                    ariaLive: "polite",
                    icon: T,
                    content: O,
                    customCtas: $
                }), k[48] = $, k[49] = O, k[50] = T, k[51] = j) : j = k[51], j
            }
        })
    }),
    jU58: (function(e, t, n) {
        var i = n("SRbQ"),
            r = n("ZG9f"),
            a = n("BolX"),
            s = n("GaA7"),
            o = n("OWtl");
        let l = (0, a.h)(o.a, () => void 0, e => {
            let {
                set: t
            } = e, n = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let e, a = s.a.globalDictationHotkeys;
                if (null == a) return void t([]);
                let o = !1,
                    l = (0, i.a)(n, new r.b(async e => {
                        o || t(e)
                    }), !1);
                return a.subscribeRegistered(l).then(t => {
                    o ? t[Symbol.dispose]() : e = t
                }, () => {
                    o || t(void 0)
                }), () => {
                    o = !0, e?.[Symbol.dispose]()
                }
            } catch (e) {
                n.error = e, n.hasError = !0
            } finally {
                (0, i.e)(n)
            }
        });
        n.d(t, {}, {
            a: l
        })
    }),
    JAPD: (function(e, t, n) {
        var i = n("wWGv"),
            r = n("Kwur"),
            a = n("Mq0M"),
            s = n("eShZ");

        function o(e, t, n, i) {
            let r = "unknown";
            null != n && (r = n <= 1 ? String(n) : n <= 5 ? "2-5" : n <= 20 ? "6-20" : "21-200");
            let o = {
                surface: e,
                word_count_bucket: r
            };
            i instanceof s.FetchError ? (o.error_type = "request_error", o.error_name = "RequestError", o.http_status = i.status) : void 0 !== i && (o.error_type = i instanceof Error ? "error" : typeof i, o.error_name = i instanceof Error ? i.name : void 0), (0, a.a)(`dictation.custom_dictionary.word.add.${t}`, o)
        }
        n.d(t, {}, {
            a: async function(e) {
                let {
                    queryClient: t,
                    accountId: n,
                    userId: a,
                    text: s,
                    signal: l,
                    surface: c,
                    onSuccess: d,
                    onError: u
                } = e, h = ["dictation-custom-dictionary", n, a], f = t.getQueryData(h)?.words.length;
                o(c, "attempt", f);
                try {
                    await r.Request.safePost("/dictation/custom_dictionary/words", {
                        requestBody: {
                            text: s
                        },
                        additionalHeaders: {
                            "ChatGPT-Account-ID": n,
                            [i._b]: n
                        },
                        signal: l,
                        expectedErrorStatuses: [400, 404, 409, 422]
                    }), o(c, "success", null == f ? void 0 : f + 1), l.throwIfAborted(), t.invalidateQueries({
                        queryKey: h
                    }), d?.()
                } catch (e) {
                    if (l.aborted || o(c, "error", f, e), null != u) u(e);
                    else throw e
                }
            }
        })
    }),
    Jue3: (function(e, t, n) {
        var i = n("BolX");
        n("StMt"), n("wLMK");
        var r = n("OWtl");
        let a = (0, i.c)(r.a, e => {
            let {
                get: t
            } = e;
            return null
        });
        n.d(t, {}, {
            a: a
        })
    }),
    vLvn: (function(e, t, n) {
        var i = n("ABep"),
            r = n("QosV"),
            a = n("BolX"),
            s = n("Wf1j"),
            o = n("oyxz"),
            l = n("E8Sp"),
            c = n("OWtl"),
            d = n("BiIz"),
            u = n("b5fQ"),
            h = n("oArc"),
            f = n("AmNL"),
            m = n("Kvnu"),
            p = n("Shaz");

        function g(e) {
            return (0, i.jsx)(b, {
                attemptId: e
            }, e)
        }

        function b(e) {
            let t, n, d, g, b, v, w = (0, r.c)(16),
                {
                    attemptId: y
                } = e,
                x = (0, a.y)(c.a),
                j = (0, a.x)(h.c, y),
                k = (0, s.a)(),
                M = j?.origin.homeDraft;
            return null == j || null == M ? null : (w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                assets: {
                    16: m.a,
                    20: p.a
                }
            }, n = (0, i.jsx)(o.a, {
                id: "dictation.sidebar.newChatDraft",
                defaultMessage: "New chat",
                description: "Temporary sidebar row that reopens the unsent chat where dictation started"
            }), w[0] = t, w[1] = n) : (t = w[0], n = w[1]), w[2] !== k || w[3] !== j.status ? (d = "recording" === j.status ? k.formatMessage({
                id: "dictation.sidebar.openRecordingDraft",
                defaultMessage: "Open recording in new chat",
                description: "Accessible action that returns to an unsent chat while it is still recording dictation"
            }) : k.formatMessage({
                id: "dictation.sidebar.openDraft",
                defaultMessage: "Open dictation draft",
                description: "Accessible action that returns to the exact unsent draft where dictation started"
            }), w[2] = k, w[3] = j.status, w[4] = d) : d = w[4], w[5] !== y || w[6] !== j.status ? (g = "recording" === j.status ? (0, i.jsx)(f.a, {
                attemptId: y
            }) : void 0, w[5] = y, w[6] = j.status, w[7] = g) : g = w[7], w[8] !== M.clientThreadId || w[9] !== M.location || w[10] !== x ? (b = () => {
                x.get(l.b).navigate(M.location, {
                    state: {
                        ...M.location.state,
                        homeDraftClientThreadId: M.clientThreadId
                    }
                })
            }, w[8] = M.clientThreadId, w[9] = M.location, w[10] = x, w[11] = b) : b = w[11], w[12] !== d || w[13] !== g || w[14] !== b ? (v = (0, i.jsx)(u.a, {
                iconAssetSource: t,
                label: n,
                "aria-label": d,
                trailing: g,
                onClick: b
            }), w[12] = d, w[13] = g, w[14] = b, w[15] = v) : v = w[15], v)
        }
        n.d(t, {}, {
            a: function() {
                let e, t, n = (0, r.c)(4),
                    s = (0, a.z)(h.b);
                return 0 === s.length ? null : (n[0] !== s ? (e = s.map(g), n[0] = s, n[1] = e) : e = n[1], n[2] !== e ? (t = (0, i.jsx)(d.e, {
                    children: e
                }), n[2] = e, n[3] = t) : t = n[3], t)
            }
        })
    }),
    AmNL: (function(e, t, n) {
        var i = n("ABep"),
            r = n("QosV"),
            a = n("slpy"),
            s = n("x423"),
            o = n("BolX"),
            l = n("zd8w"),
            c = n("Wf1j"),
            d = n("TjgH"),
            u = n("T1PX"),
            h = n("OWtl"),
            f = n("oArc"),
            m = n("ft5P");

        function p(e) {
            let t, n, a, c = (0, r.c)(6),
                {
                    attemptId: d
                } = e,
                m = (0, o.y)(h.a),
                p = (0, l.useRef)(null),
                g = (0, u.a)();
            return c[0] !== d || c[1] !== g || c[2] !== m ? (t = () => {
                let e = p.current;
                if (null == e) return;
                let t = e.getContext("2d");
                if (null == t) return;
                let n = new s.a,
                    i = null,
                    r = 0,
                    a = !1,
                    o = null,
                    l = a => {
                        n.advance((a - r) / 1e3, a / 1e3, g), r = a;
                        let o = e.getBoundingClientRect().width;
                        if (o > 0) {
                            let i = window.devicePixelRatio * (o / 28),
                                r = Math.round(28 * i),
                                a = Math.round(12 * i);
                            (e.width !== r || e.height !== a) && (e.width = r, e.height = a), t.setTransform(i, 0, 0, i, 0, 0), t.clearRect(0, 0, 28, 12), t.fillStyle = getComputedStyle(e).color, n.levels.forEach((e, n) => {
                                let i = (0, s.b)(n, e, 28, 12);
                                t.beginPath(), t.roundRect(i.x, i.y, i.width, i.height, i.radius), t.fill()
                            })
                        }
                        i = requestAnimationFrame(l)
                    },
                    c = () => {
                        null != i && (cancelAnimationFrame(i), i = null), o?.(), o = null
                    },
                    u = () => {
                        !a || document.hidden ? c() : null == i && (o = m.watch(e => {
                            let t = e.get(f.a, d);
                            null != t && n.receive(t.level, t.timeSeconds)
                        }), r = performance.now(), i = requestAnimationFrame(l))
                    },
                    h = new IntersectionObserver(e => {
                        let [t] = e;
                        a = t?.isIntersecting ?? !1, u()
                    });
                return h.observe(e), document.addEventListener("visibilitychange", u), () => {
                    c(), h.disconnect(), document.removeEventListener("visibilitychange", u)
                }
            }, n = [d, g, m], c[0] = d, c[1] = g, c[2] = m, c[3] = t, c[4] = n) : (t = c[3], n = c[4]), (0, l.useEffect)(t, n), c[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)("canvas", {
                ref: p,
                className: "h-3 w-7",
                "aria-hidden": "true"
            }), c[5] = a) : a = c[5], a
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, o, l = (0, r.c)(10),
                    {
                        attemptId: u
                    } = e,
                    h = (0, c.a)();
                l[0] !== h ? (t = h.formatMessage(m.a.recording), l[0] = h, l[1] = t) : t = l[1];
                let f = t;
                return l[2] !== u ? (n = (0, i.jsx)(d.a, {
                    variant: "recording",
                    children: (0, i.jsx)(p, {
                        attemptId: u
                    })
                }), l[2] = u, l[3] = n) : n = l[3], l[4] !== f || l[5] !== n ? (s = (0, i.jsx)("span", {
                    className: "inline-flex items-center select-none",
                    role: "img",
                    "aria-label": f,
                    children: n
                }), l[4] = f, l[5] = n, l[6] = s) : s = l[6], l[7] !== f || l[8] !== s ? (o = (0, i.jsx)(a.a, {
                    content: f,
                    children: s
                }), l[7] = f, l[8] = s, l[9] = o) : o = l[9], o
            }
        })
    }),
    ft5P: (function(e, t, n) {
        let i = (0, n("Qgfj").f)({
            recording: {
                id: "dictation.sidebar.recording",
                defaultMessage: "Recording in this chat",
                description: "Accessible description and tooltip for the green dictation indicator on the chat that is recording. Opening this chat returns to its recording controls."
            }
        });
        n.d(t, {}, {
            a: i
        })
    }),
    x8co: (function(e, t, n) {
        n.d(t, {
            a: () => d,
            b: () => c
        });
        var i = n("ABep"),
            r = n("QosV"),
            a = n("on57"),
            s = n("Wf1j"),
            o = n("oyxz");
        let l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

        function c(e) {
            let t, n, l, c, u, h, f, m, p, g, b = (0, r.c)(32),
                {
                    animated: v,
                    linesAdded: w,
                    linesRemoved: y,
                    variant: x,
                    className: j
                } = e,
                k = void 0 !== v && v,
                M = void 0 === x ? "color" : x,
                A = (0, s.a)();
            b[0] !== j ? (t = (0, a.b)("inline-flex items-center gap-1 leading-none disambiguated-digits tabular-nums tracking-tight", j), b[0] = j, b[1] = t) : t = b[1];
            let S = "monochrome" === M && "text-tertiary",
                I = "color" === M && "text-codex-git-added",
                _ = "agent-activity" === M && "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-codex-git-added";
            b[2] !== S || b[3] !== I || b[4] !== _ ? (n = (0, a.b)("flex shrink-0 items-center", S, I, _), b[2] = S, b[3] = I, b[4] = _, b[5] = n) : n = b[5], b[6] !== k || b[7] !== A || b[8] !== w ? (l = k ? (0, i.jsx)(d, {
                value: w
            }, "linesAdded") : A.formatNumber(w), b[6] = k, b[7] = A, b[8] = w, b[9] = l) : l = b[9], b[10] !== l ? (c = (0, i.jsx)(o.a, {
                id: "wham.message.modal.repoAndDiffStats.linesAdded",
                defaultMessage: "+{linesAdded}",
                description: "Number of lines added",
                values: {
                    linesAdded: l
                }
            }), b[10] = l, b[11] = c) : c = b[11], b[12] !== n || b[13] !== c ? (u = (0, i.jsx)("span", {
                className: n,
                children: c
            }), b[12] = n, b[13] = c, b[14] = u) : u = b[14];
            let P = "monochrome" === M && "text-tertiary",
                E = "color" === M && "text-codex-git-deleted",
                R = "agent-activity" === M && "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-codex-git-deleted";
            return b[15] !== P || b[16] !== E || b[17] !== R ? (h = (0, a.b)("flex shrink-0 items-center", P, E, R), b[15] = P, b[16] = E, b[17] = R, b[18] = h) : h = b[18], b[19] !== k || b[20] !== A || b[21] !== y ? (f = k ? (0, i.jsx)(d, {
                value: y
            }, "linesRemoved") : A.formatNumber(y), b[19] = k, b[20] = A, b[21] = y, b[22] = f) : f = b[22], b[23] !== f ? (m = (0, i.jsx)(o.a, {
                id: "wham.message.modal.repoAndDiffStats.linesRemoved",
                defaultMessage: "-{linesRemoved}",
                description: "Number of lines removed",
                values: {
                    linesRemoved: f
                }
            }), b[23] = f, b[24] = m) : m = b[24], b[25] !== h || b[26] !== m ? (p = (0, i.jsx)("span", {
                className: h,
                children: m
            }), b[25] = h, b[26] = m, b[27] = p) : p = b[27], b[28] !== u || b[29] !== p || b[30] !== t ? (g = (0, i.jsxs)("span", {
                "data-thread-find-skip": !0,
                className: t,
                children: [u, p]
            }), b[28] = u, b[29] = p, b[30] = t, b[31] = g) : g = b[31], g
        }

        function d(e) {
            let t, n = (0, r.c)(4),
                {
                    value: a,
                    variant: o
                } = e,
                l = void 0 === o ? "diff-stat" : o,
                c = (0, s.a)();
            if (n[0] !== c || n[1] !== a || n[2] !== l) {
                let e = c.formatNumber(a),
                    r = Array.from(e),
                    s = r.filter(f).length;
                t = (0, i.jsx)("span", {
                    "aria-label": e,
                    className: "inline-flex h-lh items-baseline leading-[inherit]",
                    children: r.map((e, t) => f(e) ? (s -= 1, (0, i.jsx)(u, {
                        digit: e,
                        variant: l
                    }, `digit-${s}`)) : (0, i.jsx)("span", {
                        "aria-hidden": "true",
                        className: "inline-block h-lh self-start leading-[inherit]",
                        children: e
                    }, `separator-${t}`))
                }), n[0] = c, n[1] = a, n[2] = l, n[3] = t
            } else t = n[3];
            return t
        }

        function u(e) {
            let t, n, a, s, o, c = (0, r.c)(10),
                {
                    digit: d,
                    variant: u
                } = e,
                f = `translateY(-${d}lh)`;
            c[0] !== f ? (t = {
                transform: f
            }, c[0] = f, c[1] = t) : t = c[1], c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = l.map(h), c[2] = n) : n = c[2], c[3] !== t ? (a = (0, i.jsx)("span", {
                className: "DigitStack-p_507q",
                style: t,
                children: n
            }), c[3] = t, c[4] = a) : a = c[4];
            let m = a;
            return c[5] !== m ? (s = (0, i.jsx)("span", {
                className: "absolute inset-0 overflow-hidden",
                children: m
            }), c[5] = m, c[6] = s) : s = c[6], c[7] !== s || c[8] !== u ? (o = (0, i.jsx)("span", {
                "aria-hidden": "true",
                className: "DigitColumn-fJ4U3r",
                "data-variant": u,
                children: s
            }), c[7] = s, c[8] = u, c[9] = o) : o = c[9], o
        }

        function h(e) {
            return (0, i.jsx)("span", {
                children: e
            }, e)
        }

        function f(e) {
            return e >= "0" && e <= "9"
        }
    }),
    g3QY: (function(e, t, n) {
        var i = n("wWGv"),
            r = n("uOFa"),
            a = n("bnxy");

        function s(e, t) {
            return t ? o(e.replace(/\\/g, "/"), t.replace(/\\/g, "/")) : e
        }

        function o(e, t) {
            let n = t.endsWith("/") ? t.slice(0, -1) : t,
                [r, a] = (0, i.Mi)(t) || (0, i.Oi)(t) ? [n.toLowerCase(), e.toLowerCase()] : [n, e];
            if (a.startsWith(r + "/")) return e.slice(n.length + 1);
            let s = (r.split("/").at(-1) ?? r) + "/",
                o = a.indexOf(s);
            return -1 !== o && (0 === o || "/" === a[o - 1]) ? e.slice(o + s.length) : e
        }

        function l(e) {
            let t = (0, r.d)(e).trim();
            if (0 === t.length) return [];
            let n = Array.from(t.matchAll(/^@([A-Za-z0-9-]+):\s*$/gm));
            return 0 === n.length || n[0]?.index !== 0 ? [{
                authorLogin: null,
                text: t
            }] : n.map((e, i) => {
                let r = (e.index ?? 0) + e[0].length,
                    a = n[i + 1]?.index ?? t.length;
                return {
                    authorLogin: e[1] ?? null,
                    text: t.slice(r, a).trim()
                }
            })
        }

        function c(e, t) {
            return e ? (0, a.r)(s(e, t)) : null
        }
        n.d(t, {
            b: () => r.a
        }, {
            a: "/dev/null",
            c: function(e, t) {
                return null != t && null != e.localWorkspaceRoot && (0, a.a)(e.localWorkspaceRoot, t) ? (0, r.a)({
                    ...e,
                    localWorkspaceRoot: t
                }) : (0, r.a)(e)
            },
            d: function(e) {
                return l(e)[0] ?? {
                    authorLogin: null,
                    text: ""
                }
            },
            e: l,
            f: s,
            g: o,
            h: function(e, t, n) {
                let i = (0, a.r)(e),
                    r = (0, a.r)(t);
                if (i === r) return !0;
                let s = c(t, n);
                if (s && i === s) return !0;
                let o = c(e, n);
                return !!o && o === r || null == n && (r.endsWith(`/${i}`) || i.endsWith(`/${r}`))
            }
        })
    }),
    Fmrr: (function(e, t, n) {
        let i = new WeakMap;

        function r(e) {
            let t = i.get(e);
            if (null != t) return t;
            let n = 0,
                r = 0;
            for (let t of e.hunks)
                for (let i of t.hunkContent) {
                    if ("context" === i.type) continue;
                    let t = i.deletionLineIndex,
                        a = t + i.deletions;
                    for (let i = t; i < a; i += 1) {
                        let t = e.deletionLines[i]?.length ?? 0;
                        n += t, r = Math.max(r, t)
                    }
                    let s = i.additionLineIndex,
                        o = s + i.additions;
                    for (let t = s; t < o; t += 1) {
                        let i = e.additionLines[t]?.length ?? 0;
                        n += i, r = Math.max(r, i)
                    }
                }
            let a = {
                changedBytes: n,
                maxChangedLineBytes: r
            };
            return i.set(e, a), a
        }
        n.d(t, {}, {
            a: 3145728,
            b: 1048576,
            c: 0xc00000,
            d: function(e) {
                return e.additions + e.deletions > 15e3 || e.changedBytes > 3145728 || e.maxChangedLineBytes > 1048576
            },
            e: function(e) {
                if (e.hunks.reduce((e, t) => e + t.additionLines + t.deletionLines, 0) > 15e3) return !0;
                let {
                    changedBytes: t,
                    maxChangedLineBytes: n
                } = r(e);
                return t > 3145728 || n > 1048576
            },
            f: r,
            g: function(e) {
                let {
                    fileCount: t,
                    totalChangedLines: n,
                    totalChangedBytes: i
                } = e;
                return t > 128 || n > 9e3 || i > 0xc00000
            }
        })
    }),
    NxNN: (function(e, t, n) {
        var i = n("BolX"),
            r = n("tSEg"),
            a = n("Nwp9");
        let s = {},
            o = (0, a.b)("editorDiffViewMode", "auto"),
            l = (0, a.b)("wrapCodeDiff.2", !1),
            c = (0, a.b)("fileSourceGitBlame", !1),
            d = (0, a.b)("hideDiffWhitespace", !1),
            u = (0, a.b)("hideDiffImports", !1),
            h = (0, a.b)("wordDiffsEnabled.2", !0),
            f = (0, a.b)("diffRichPreview", !1),
            m = (0, a.b)("diffViewThreadSettings", {}),
            p = (0, i.c)(r.a, e => {
                let {
                    get: t,
                    scope: n
                } = e, i = t(m) ?? s;
                return i[g(n.value)]?.richPreviewEnabled ?? !0
            });

        function g(e) {
            return (0, r.h)(e) ?? e.pathname
        }
        n.d(t, {}, {
            a: o,
            b: c,
            c: function(e, t, n) {
                return "auto" !== e ? e : n && t.additions > 0 && t.deletions > 0 ? "split" : "unified"
            },
            d: u,
            e: d,
            f: f,
            g: p,
            h: function(e, t) {
                let n = e.get(m) ?? s,
                    i = g(e.value);
                e.set(m, {
                    ...n,
                    [i]: {
                        ...n[i],
                        richPreviewEnabled: t
                    }
                })
            },
            i: h,
            j: l
        })
    }),
    m7Xr: (function(e, t, n) {
        var i = n("jmZd");
        let r = "diff --git ";
        n.d(t, {}, {
            a: r,
            b: function(e) {
                if (!e.startsWith(r)) return null;
                let t = e.slice(r.length);
                if (t.startsWith('"')) {
                    let e = (0, i.b)(t, 0);
                    if (null == e || " " !== t[e.nextIndex]) return null;
                    let n = (0, i.b)(t, e.nextIndex + 1);
                    return n?.path.startsWith("b/") ? n.path.slice(2) : null
                }
                let n = t.lastIndexOf(" b/");
                return n < 0 ? null : t.slice(n + 3)
            }
        })
    }),
    QqPl: (function(e, t, n) {
        var i = n("BolX"),
            r = n("kl6F"),
            a = n("kpIY"),
            s = n("g3QY");
        let o = (0, i.u)(r.a, e => {
            let {
                scope: t
            } = e;
            return l(t.value.clientThreadId)
        }, {
            onMount: (e, t) => {
                let n = t.value.clientThreadId;
                return (0, a.z)(c(n), () => e(l(n)))
            }
        });

        function l(e) {
            let t = c(e);
            return Object.fromEntries((0, a.l)(t).map(e => [e.slice(t.length), !0]))
        }

        function c(e) {
            return `dismissed-model-diff-comments-v3:${e}:`
        }
        n.d(t, {}, {
            a: function(e) {
                (0, a.r)(c(e))
            },
            b: function(e, t) {
                let n = c(e.value.clientThreadId),
                    i = `${n}${(0,s.b)(t)}`;
                if ((0, a.k)(i, !1)) return;
                let r = (0, a.l)(n);
                r.slice(0, Math.max(0, r.length - 1e3 + 1)).forEach(e => (0, a.u)(e, void 0)), (0, a.u)(i, !0)
            },
            c: o,
            d: function(e, t) {
                return !0 === e[(0, s.b)(t)]
            }
        })
    }),
    JiBc: (function(e, t, n) {
        var i = n("IWgX"),
            r = n("ox67"),
            a = n.n(r),
            s = n("VpTR"),
            o = n("wWGv"),
            l = n("WdPB"),
            c = n("WFY2"),
            d = n("g3QY"),
            u = n("Fmrr"),
            h = n("NgMj");
        n("wIFP");
        let f = new s.a({
            max: 50,
            maxSize: 8388608,
            sizeCalculation: (e, t) => Math.max(1, 8 * t.length * e.size)
        });

        function m(e) {
            return (e >>> 0).toString(16).padStart(8, "0")
        }

        function p(e, t) {
            let n = g(e),
                i = e.slice(0, e.length - n.length),
                r = (0, o.Vj)(i, t.length + 1);
            return null == r ? null : `${t} ${r.pathForUnquotedDiffHeader}${n}`
        }

        function g(e) {
            return e.endsWith("\r\n") ? "\r\n" : e.endsWith("\n") ? "\n" : ""
        }
        n.d(t, {}, {
            a: function(e) {
                let t, {
                        maxFiles: n
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = 8 * e.length <= f.maxSize,
                    s = `${n??"all"}`,
                    b = r ? f.get(e) : void 0,
                    v = b?.get(s);
                if (v) return v;
                let w = e.includes("GIT binary patch") || e.includes("Binary files ") ? (e => {
                        let t = new Set,
                            n = -1,
                            i = !1;
                        for (let r of e.split(/\r?\n/)) {
                            if (r.startsWith("diff --git ")) {
                                n += 1, i = !0;
                                continue
                            }
                            r.startsWith("@@") && (i = !1), i && (r.startsWith("GIT binary patch") || /^Binary files .+ and .+ differ$/.test(r)) && t.add(n)
                        }
                        return t
                    })(e) : new Set,
                    y = e.includes("160000") ? (e => {
                        let t = new Set,
                            n = -1;
                        for (let i of e.split(/\r?\n/)) {
                            if (i.startsWith("diff --git ")) {
                                n += 1;
                                continue
                            }
                            n >= 0 && (/^(?:new file mode|deleted file mode|old mode|new mode) 160000$/.test(i) || /^index [0-9a-f]+\.\.[0-9a-f]+ 160000$/.test(i)) && t.add(n)
                        }
                        return t
                    })(e) : new Set,
                    x = function(e) {
                        let t = new Map;
                        if (!/^(?:diff --git|---|\+\+\+) "/m.test(e)) return {
                            diff: e,
                            pathsByFileIndex: t
                        };
                        let n = -1;
                        return {
                            diff: (0, l.a)(e).map(e => {
                                if (e.startsWith("diff --git ") && (n += 1), e.startsWith('diff --git "')) {
                                    let i = function(e) {
                                        let t = g(e),
                                            n = e.slice(0, e.length - t.length).slice(11),
                                            i = (0, o.Vj)(n, 0);
                                        if (null == i || " " !== n[i.nextIndex]) return null;
                                        let r = (0, o.Vj)(n, i.nextIndex + 1);
                                        return null != r && r.nextIndex === n.length && i.path.startsWith("a/") && r.path.startsWith("b/") ? {
                                            line: `diff --git ${i.pathForUnquotedDiffHeader} ${r.pathForUnquotedDiffHeader}${t}`,
                                            paths: {
                                                oldPath: i.path.slice(2),
                                                newPath: r.path.slice(2)
                                            }
                                        } : null
                                    }(e);
                                    return null == i ? e : (t.set(n, i.paths), i.line)
                                }
                                if (e.startsWith("rename from ")) {
                                    let e = t.get(n);
                                    null != e && (e.isRename = !0)
                                }
                                return e.startsWith('--- "') ? p(e, "---") ?? e : e.startsWith('+++ "') ? p(e, "+++") ?? e : e
                            }).join(""),
                            pathsByFileIndex: t
                        }
                    }(e);
                try {
                    t = (0, i.a)(x.diff, function(e) {
                        let t = 0xdeadbeef,
                            n = 0x41c6ce57;
                        for (let i = 0; i < e.length; i += 1) {
                            let r = e.charCodeAt(i);
                            t = Math.imul(t ^ r, 0x9e3779b1), n = Math.imul(n ^ r, 0x5f356495)
                        }
                        let i = Math.imul(t ^ t >>> 16, 0x85ebca6b) ^ Math.imul(n ^ n >>> 13, 0xc2b2ae35),
                            r = Math.imul(n ^ n >>> 16, 0x85ebca6b) ^ Math.imul(i ^ i >>> 13, 0xc2b2ae35);
                        return `codex-diff-${e.length}-${m(i)}-${m(r)}`
                    }(e))
                } catch (e) {
                    c.a.error("Failed to parse diff", {
                        safe: {},
                        sensitive: {
                            error: e
                        }
                    }), t = []
                }
                let j = [],
                    k = 0;
                for (let e of t)
                    for (let t of e.files) {
                        if (void 0 !== n && j.length >= n) return j;
                        try {
                            var M;
                            let e = (0, h.b)(function(e, t) {
                                    if (null == t) return e;
                                    let n = "change" === e.type && !0 === t.isRename ? "rename-changed" : e.type;
                                    return "rename-pure" === n || "rename-changed" === n ? {
                                        ...e,
                                        type: n,
                                        name: t.newPath,
                                        prevName: t.oldPath
                                    } : {
                                        ...e,
                                        name: t.newPath
                                    }
                                }(t, x.pathsByFileIndex.get(k))),
                                {
                                    oldPath: n,
                                    newPath: i
                                } = (M = e, {
                                    oldPath: "new" === M.type ? d.a : M.prevName ?? M.name,
                                    newPath: "deleted" === M.type ? d.a : M.name
                                }),
                                r = function(e) {
                                    let t = null;
                                    return () => (null == t && (t = (0, u.f)(e)), t)
                                }(e),
                                s = e.hunks,
                                o = a()(s, e => e.additionLines),
                                l = a()(s, e => e.deletionLines),
                                c = s.find(e => e.additionCount > 0)?.additionStart,
                                f = s.find(e => e.deletionLines > 0)?.deletionStart;
                            j.push({
                                metadata: e,
                                oldPath: n,
                                newPath: i,
                                additions: o,
                                deletions: l,
                                get changedBytes() {
                                    return r().changedBytes
                                },
                                get maxChangedLineBytes() {
                                    return r().maxChangedLineBytes
                                },
                                firstAdditionLine: c,
                                firstDeletionLine: f,
                                isBinary: w.has(k),
                                isGitlink: y.has(k)
                            })
                        } catch (e) {
                            c.a.error("Failed to parse diff", {
                                safe: {},
                                sensitive: {
                                    name: t.name,
                                    error: e
                                }
                            })
                        }
                        k += 1
                    }
                if (r) {
                    let t = new Map(b);
                    t.set(s, j), f.set(e, t)
                }
                return j
            }
        })
    }),
    NgMj: (function(e, t, n) {
        var i = n("m8wg"),
            r = n("xgGW");
        n("wIFP");
        let a = new Map([
                [".babelrc", "jsonc"],
                [".babelrc.json", "jsonc"],
                [".devcontainer.json", "jsonc"],
                [".ember-cli", "jsonc"],
                [".envrc", "bash"],
                [".eslintrc", "jsonc"],
                [".eslintrc.json", "jsonc"],
                [".flaskenv", "dotenv"],
                [".hintrc", "jsonc"],
                [".hushlogin", "bash"],
                [".jsfmtrc", "jsonc"],
                [".jshintrc", "jsonc"],
                [".profile", "bash"],
                [".swcrc", "jsonc"],
                [".watchmanconfig", "json"],
                [".xprofile", "bash"],
                [".xsession", "bash"],
                [".xsessionrc", "bash"],
                [".zlogin", "bash"],
                [".zlogout", "bash"],
                [".zprofile", "bash"],
                [".zsh-theme", "bash"],
                [".zshenv", "bash"],
                [".zshrc", "bash"],
                ["apkbuild", "bash"],
                ["appfile", "ruby"],
                ["appraisals", "ruby"],
                ["argv.json", "jsonc"],
                ["babel.config.json", "jsonc"],
                ["bashrc_apple_terminal", "bash"],
                ["berksfile", "ruby"],
                ["berksfile.lock", "ruby"],
                ["brewfile", "ruby"],
                ["bun.lock", "jsonc"],
                ["capfile", "ruby"],
                ["cheffile", "ruby"],
                ["cmakelists.txt", "cmake"],
                ["codeowners", "codeowners"],
                ["composer.lock", "json"],
                ["containerfile", "dockerfile"],
                ["dangerfile", "ruby"],
                ["deliverfile", "ruby"],
                ["devcontainer.json", "jsonc"],
                ["extensions.json", "jsonc"],
                ["fastfile", "ruby"],
                ["gemfile", "ruby"],
                ["git-rebase-todo", "git-rebase"],
                ["gnumakefile", "makefile"],
                ["guardfile", "ruby"],
                ["gymfile", "ruby"],
                ["jakefile", "javascript"],
                ["jenkinsfile", "groovy"],
                ["jsconfig.json", "jsonc"],
                ["keybindings.json", "jsonc"],
                ["language-configuration.json", "jsonc"],
                ["launch.json", "jsonc"],
                ["mcp.json", "jsonc"],
                ["makefile", "makefile"],
                ["merge_msg", "git-commit"],
                ["ocamlmakefile", "makefile"],
                ["pkgbuild", "bash"],
                ["podfile", "ruby"],
                ["profiles.json", "jsonc"],
                ["puppetfile", "ruby"],
                ["rakefile", "ruby"],
                ["rantfile", "ruby"],
                ["sconscript", "python"],
                ["sconstruct", "python"],
                ["settings.json", "jsonc"],
                ["snapfile", "ruby"],
                ["tasks.json", "jsonc"],
                ["thorfile", "ruby"],
                ["tsconfig.json", "jsonc"],
                ["typedoc.json", "jsonc"],
                ["user-dirs.dirs", "dotenv"],
                ["vagrantfile", "ruby"],
                ["zlogin", "bash"],
                ["zlogout", "bash"],
                ["zprofile", "bash"],
                ["zshenv", "bash"],
                ["zshrc", "bash"]
            ]),
            s = new Map([
                [".agent.md", "markdown"],
                [".aspx", "html"],
                [".bash_aliases", "bash"],
                [".bash_login", "bash"],
                [".bash_logout", "bash"],
                [".bash_profile", "bash"],
                [".bashrc", "bash"],
                [".bat", "bat"],
                [".bowerrc", "json"],
                [".cake", "csharp"],
                [".ccm", "cpp"],
                [".chatmode.md", "markdown"],
                [".cmd", "bat"],
                [".code-profile", "json"],
                [".code-snippets", "jsonc"],
                [".code-workspace", "jsonc"],
                [".containerfile", "dockerfile"],
                [".coq", "coq"],
                [".cpy", "python"],
                [".cppm", "cpp"],
                [".css.map", "json"],
                [".csx", "csharp"],
                [".cts", "typescript"],
                [".ctx", "tex"],
                [".cxxm", "cpp"],
                [".dsql", "sql"],
                [".ejs", "html"],
                [".es6", "javascript"],
                [".eyaml", "yaml"],
                [".eyml", "yaml"],
                [".geojson", "json"],
                [".gyp", "python"],
                [".gypi", "python"],
                [".h++", "cpp"],
                [".h.in", "cpp"],
                [".har", "json"],
                [".hpp.in", "cpp"],
                [".htm", "html"],
                [".hurl", "hurl"],
                [".ino", "cpp"],
                [".instructions.md", "markdown"],
                [".inl", "cpp"],
                [".ipy", "python"],
                [".ipp", "cpp"],
                [".ixx", "cpp"],
                [".js.map", "json"],
                [".jshtm", "html"],
                [".jsonld", "json"],
                [".kdl", "kdl"],
                [".litcoffee", "markdown"],
                [".mak", "makefile"],
                [".markdown", "markdown"],
                [".markdn", "markdown"],
                [".mdoc", "html"],
                [".mdown", "markdown"],
                [".mdtext", "markdown"],
                [".mdtxt", "markdown"],
                [".mdwn", "markdown"],
                [".mkd", "markdown"],
                [".mkdn", "markdown"],
                [".mts", "typescript"],
                [".ndjson", "jsonl"],
                [".pac", "javascript"],
                [".php4", "php"],
                [".php5", "php"],
                [".pkl", "pkl"],
                [".prompt.md", "markdown"],
                [".psrc", "powershell"],
                [".pssc", "powershell"],
                [".pyt", "python"],
                [".rbx", "ruby"],
                [".rhtml", "html"],
                [".rjs", "ruby"],
                [".ron", "markdown"],
                [".ronn", "markdown"],
                [".rpy", "python"],
                [".ru", "ruby"],
                [".scad", "openscad"],
                [".shtml", "html"],
                [".ts.map", "json"],
                [".tsrx", "tsrx"],
                [".tpp", "cpp"],
                [".txx", "cpp"],
                [".vba", "vb"],
                [".volt", "html"],
                [".webmanifest", "json"],
                [".workbook", "markdown"],
                [".xht", "html"],
                [".xhtml", "html"]
            ]);

        function o(e) {
            let t = e.split(/[\\/]/).pop() ?? "";
            if (t.endsWith(".C")) return "cpp";
            let n = t.toLowerCase(),
                r = a.get(n);
            if (null != r) return r;
            for (let [e, t] of s)
                if (n.endsWith(e)) return t;
            let o = (0, i.a)(t);
            if ("text" !== o) return o;
            let l = (0, i.a)(n);
            return "text" === l ? void 0 : l
        }
        n.d(t, {}, {
            a: o,
            b: function(e) {
                if (null != e.lang) return e;
                let t = o(e.name);
                return null == t || t === (0, i.a)(e.name) ? e : (0, r.a)(e, t)
            }
        })
    }),
    bWX0: (function(e, t, n) {
        function i(e) {
            return "pdf" === a(e)
        }

        function r(e) {
            let t = a(e);
            return null != t && o.has(t)
        }

        function a(e) {
            let t = e.toLowerCase(),
                n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\")),
                i = n >= 0 ? t.slice(n + 1) : t,
                r = i.lastIndexOf(".");
            return r > 0 && r < i.length - 1 ? i.slice(r + 1) : null
        }
        let s = new Set(["avif", "bmp", "gif", "ico", "jpeg", "jpg", "png", "tif", "tiff", "webp"]),
            o = new Set(["markdown", "md", "mdown", "mdx", "mkd"]);
        n.d(t, {}, {
            a: function(e) {
                let {
                    filePath: t,
                    imagePreviewMode: n,
                    isDeletion: a,
                    richPreviewEnabled: s
                } = e;
                return s && !a && r(t) ? "markdown" : "always" === n || "toggle" === n && s ? "image" : i(t) ? "pdf" : "diff"
            },
            b: function(e) {
                let t = a(e);
                return null == t ? "none" : "svg" === t ? "toggle" : s.has(t) ? "always" : "none"
            },
            c: a,
            d: r,
            e: i
        })
    }),
    wIFP: (function(e, t, n) {
        (0, n("jYfd").a)("tsrx", async () => {
            let {
                resolveLanguage: e
            } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(665826)]).then(n.bind(n, "sxUl")), [{
                default: t
            }, {
                default: i
            }, {
                default: r
            }, {
                default: a
            }, {
                assembleTsrxGrammar: s
            }, ...o] = await Promise.all([n.e(757749).then(n.t.bind(n, "Z3GV", 19)), n.e(310861).then(n.t.bind(n, "XEjH", 19)), n.e(934638).then(n.t.bind(n, "NRqC", 19)), n.e(816231).then(n.t.bind(n, "J8UD", 19)), n.e(243851).then(n.bind(n, "PJbR")), e("jsx"), e("tsx"), e("typescript"), e("css")]);
            return {
                default: [...o.flatMap(e => e.data), s(t, i, r, a)]
            }
        }, ["tsrx"])
    }),
    bZSE: (function(e, t, n) {
        var i = n("XpUB"),
            r = n("WFY2");
        let a = /^::[a-zA-Z0-9-]+.*$/gm;

        function s(e) {
            return e >= 65 && e <= 90 || e >= 97 && e <= 122
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = t?.lineStartNames == null ? e : function(e, t) {
                    if (0 === t.length || ! function(e, t) {
                            for (let n of t)
                                if (e.includes(`:${n}`)) return !0;
                            return !1
                        }(e, t)) return null;
                    let n = new Set(t),
                        i = [],
                        r = 0;
                    for (; r <= e.length;) {
                        let t = e.indexOf("\n", r),
                            a = -1 === t ? e.length : t,
                            o = function(e, t, n) {
                                let i = t;
                                for (; i < n;) {
                                    let t = e[i];
                                    if (" " !== t && "	" !== t) break;
                                    i += 1
                                }
                                return i
                            }(e, r, a),
                            l = function(e, t, n) {
                                var i;
                                if (":" !== e[t]) return null;
                                let r = t;
                                for (;
                                    ":" === e[r] && r - t < 3;) r += 1;
                                if (!s(e.charCodeAt(r))) return null;
                                let a = r + 1;
                                for (; a < n && (s(i = e.charCodeAt(a)) || i >= 48 && i <= 57 || 45 === i || 95 === i);) a += 1;
                                return {
                                    markerLength: r - t,
                                    name: e.slice(r, a)
                                }
                            }(e, o, a);
                        if (null != l && n.has(l.name) && (i.push(e.slice(o, a)), 3 === l.markerLength && i.push(":::")), -1 === t) break;
                        r = t + 1
                    }
                    return 0 === i.length ? null : `${i.join("\n")}
`
                }(e, t.lineStartNames);
                if (null == n) return [];
                let a = [];
                return function e(t, n, i, r) {
                    for (let o of t) {
                        var a, s;
                        "codexDirective" === (a = o).type && "name" in a && "string" == typeof a.name && "attributes" in a && null != a.attributes && "object" == typeof a.attributes && o.name.length > 0 && n.push({
                            name: o.name,
                            attributes: function(e) {
                                let t = {};
                                for (let [n, i] of Object.entries(e)) t[n] = !0 === i ? "true" : i;
                                return t
                            }(o.attributes)
                        }), r && "tokens" in o && Array.isArray(o.tokens) && e(o.tokens, n, i, r), r && i && "list" === (s = o).type && "items" in s && Array.isArray(s.items) && e(o.items, n, i, r)
                    }
                }((0, i.a)(n, void 0), a, t?.includeListItems === !0, t?.topLevelOnly !== !0), r.a.debug("[parseDirectives] directives found", {
                    safe: {
                        directiveCount: a.length,
                        directiveNames: a.map(e => e.name).join(",")
                    },
                    sensitive: {}
                }), a
            },
            b: function(e) {
                return e.replace(a, "").replace(/\n{3,}/g, "\n\n").trim()
            }
        })
    }),
    aXWg: (function(e, t, n) {
        var i = n("BolX"),
            r = n("OWtl");
        let a = (0, i.h)(r.a, () => !1, e => {
            let {
                set: t
            } = e, n = globalThis.document;
            if (null == n) return;
            let i = () => t("visible" === n.visibilityState);
            return i(), n.addEventListener("visibilitychange", i), () => n.removeEventListener("visibilitychange", i)
        });
        n.d(t, {}, {
            a: a
        })
    }),
    vKRc: (function(e, t, n) {
        var i = n("ASxG");
        let r = new Set(["connector_openai_imessage", "connector_openai_messages"]),
            a = i.enum(["slam", "loud", "gentle", "invisible", "confetti", "fireworks", "balloons", "heart", "lasers", "celebration", "sparkles", "spotlight", "echo"]),
            s = i.object({
                message_id: i.string().min(1),
                part_index: i.number().int().min(0).max(0x7fffffff).nullish()
            }),
            o = i.object({
                text: i.string().min(1)
            }),
            l = s.extend({
                text: i.string().min(1),
                effect: a.nullish()
            }),
            c = o.extend({
                effect: a
            }),
            d = i.object({
                status: i.literal("accepted"),
                message_id: i.string().min(1).nullable(),
                channel: i.enum(["imessage", "rcs"]).optional().catch(void 0)
            }),
            u = i.object({
                messageId: i.string().min(1),
                partIndex: i.number().int().min(0).max(0x7fffffff).nullable()
            }),
            h = i.union([i.object({
                actionName: i.literal("send_message"),
                text: i.string()
            }), i.object({
                actionName: i.literal("send_voice_memo"),
                text: i.string()
            }), i.object({
                actionName: i.literal("send_message_with_effect"),
                text: i.string(),
                effect: a
            }), i.object({
                actionName: i.literal("reply_to_message"),
                text: i.string(),
                effect: a.nullable(),
                target: u
            })]);

        function f(e, t) {
            return "codex_apps" === e && t?.connectorId != null && r.has(t.connectorId)
        }

        function m(e) {
            switch (e.actionName) {
                case "send_message":
                case "send_voice_memo":
                    return e.text;
                case "send_message_with_effect":
                    return `${e.text}
${e.effect}`;
                case "reply_to_message":
                    return [e.text, e.target.messageId, e.target.partIndex, e.effect].filter(e => null != e).join("\n")
            }
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                return {
                    type: "assistant-message",
                    externalDelivery: {
                        provider: n ?? "phone",
                        state: "accepted"
                    },
                    searchItemId: t,
                    content: m(e),
                    sentAtMs: null,
                    completed: !0,
                    phase: null,
                    structuredOutput: void 0,
                    aeonImessageAction: e,
                    aeonSentMessage: !0
                }
            },
            b: a,
            c: function(e) {
                if (!("aeonImessageAction" in e)) return null;
                let t = h.safeParse(e.aeonImessageAction);
                return t.success ? t.data : null
            },
            d: m,
            e: f,
            f: function(e, t, n, i) {
                if (!f(e, t) || t?.actionName == null) return null;
                let r = d.safeParse(i);
                if (!r.success) return null;
                switch (t.actionName) {
                    case "send_message": {
                        let e = o.safeParse(n);
                        return e.success ? {
                            action: {
                                actionName: "send_message",
                                text: e.data.text
                            },
                            channel: r.data.channel
                        } : null
                    }
                    case "send_message_with_effect": {
                        let e = c.safeParse(n);
                        return e.success ? {
                            action: {
                                actionName: "send_message_with_effect",
                                text: e.data.text,
                                effect: e.data.effect
                            },
                            channel: r.data.channel
                        } : null
                    }
                    case "reply_to_message": {
                        let e = l.safeParse(n);
                        return e.success ? {
                            action: {
                                actionName: "reply_to_message",
                                text: e.data.text,
                                effect: e.data.effect ?? null,
                                target: function(e) {
                                    let {
                                        message_id: t,
                                        part_index: n
                                    } = e;
                                    return {
                                        messageId: t,
                                        partIndex: n ?? null
                                    }
                                }(e.data)
                            },
                            channel: r.data.channel
                        } : null
                    }
                    default:
                        return null
                }
            }
        })
    }),
    s1vM: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                return e?.startsWith("chatgpt-messaging:") ? "tibro" : e?.startsWith("aeon-imessage:linq-rcs:") ? "rcs" : e?.startsWith("aeon-imessage:linq-imessage:") ? "imessage" : e?.startsWith("aeon-imessage:linq:") || e?.startsWith("aeon-imessage:linq-") ? "phone" : e?.startsWith("aeon-imessage:") ? "imessage" : null
            }
        })
    }),
    yWTM: (function(e, t, n) {
        let i = "new-conversation",
            r = "panel-new-conversation",
            a = "sites-index:",
            s = "pull-request-review:",
            o = "site-preview:",
            l = "business-agent:";
        n.d(t, {}, {
            a: function(e) {
                return `${l}${e}`
            },
            b: function(e) {
                let {
                    entrypoint: t
                } = e;
                return "home" === t ? i : r
            },
            c: function(e) {
                return `${s}${e}`
            },
            d: function(e) {
                let {
                    accountId: t,
                    userId: n,
                    projectId: i
                } = e;
                return `${o}${JSON.stringify([t,n,i])}`
            },
            e: function(e, t) {
                return `${a}${JSON.stringify([e,t])}`
            },
            f: function(e) {
                return e.slice(s.length)
            },
            g: function(e) {
                return e === i || e === r || e.startsWith(a) || e.startsWith(o) || e.startsWith(l) || e.startsWith(s)
            },
            h: function(e) {
                return e?.startsWith(o) === !0
            }
        })
    })
};