export const __rspack_esm_id = 731863;
export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    oArc: (function(e, t, n) {
        var i = n("SZCv"),
            r = n.n(i),
            a = n("iTtm"),
            s = n("ASxG"),
            o = n("aFoA"),
            l = n("yWTM"),
            c = n("nlNF"),
            d = n("OWtl"),
            h = n("tSEg"),
            u = n("kl6F");
        let p = s.object({
                focusComposerNonce: s.number().optional()
            }).nullish(),
            f = (0, a.u)(d.a, () => new Map),
            m = (0, a.c)(d.a, e => {
                let {
                    get: t
                } = e;
                return [...new Set([...t(f).values()].map(e => {
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
                return [...n(f)].find(t => {
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
                return n(f).get(e) ?? null
            }),
            b = (0, a.c)(d.a, e => {
                let {
                    get: t
                } = e, n = t(c.c);
                return [...t(f)].flatMap(e => {
                    let [i, r] = e, a = r.origin.homeDraft;
                    return null == a || n?.pathname === a.location.pathname && n.search === a.location.search && n.state?.focusComposerNonce === a.location.state?.focusComposerNonce && (n.state?.homeDraftClientThreadId ?? t(u.f, n.state?.sitePreviewDraft != null ? (0, l.c)(n.state.sitePreviewDraft) : (0, l.a)({
                        entrypoint: "home"
                    }))) === a.clientThreadId ? [] : [i]
                })
            }, {
                isEqual: r()
            });

        function y(e, t, n, i) {
            return {
                routeKey: x(e, t),
                homeDraft: "home" === e.routeKind && null != e.homeDraftClientThreadId ? {
                    clientThreadId: e.homeDraftClientThreadId,
                    location: t
                } : void 0,
                conversationId: n,
                hostId: i
            }
        }

        function x(e, t) {
            let n = (0, h.e)(e);
            if ("home" !== e.routeKind || null == e.homeDraftClientThreadId) return n;
            let i = p.safeParse(t?.state);
            return JSON.stringify([n, e.homeDraftClientThreadId, i.success ? i.data?.focusComposerNonce : void 0])
        }

        function j(e, t, n) {
            e.set(f, e => new Map(e).set(t, {
                origin: n,
                status: "starting"
            }))
        }

        function k(e, t) {
            return [...e.get(f).values()].find(e => {
                let {
                    origin: n
                } = e;
                return n.homeDraft?.clientThreadId === t
            })?.origin.homeDraft
        }

        function M(e, t, n) {
            null != t && e.set(f, e => {
                let i = e.get(t);
                return null == i || i.status === n ? e : new Map(e).set(t, {
                    ...i,
                    status: n
                })
            })
        }

        function A(e, t) {
            null != t && (e.set(v, t, null), e.set(f, e => {
                let n = new Map(e);
                return n.delete(t), n
            }))
        }
        n.d(t, {
            f: () => k,
            g: () => y,
            h: () => x,
            i: () => A,
            j: () => j,
            k: () => M
        }, {
            a: v,
            b: b,
            c: w,
            d: g,
            e: m
        })
    }),
    RVN2: (function(e, t, n) {
        var i = n("SRbQ"),
            r = n("iTtm"),
            a = n("GaA7"),
            s = n("OWtl");
        let o = new WeakMap,
            l = (0, r.u)(s.a, () => null);

        function c() {
            return !0
        }
        async function d(e, t) {
            let n = g(e);
            if ("voice" === t.kind && !f(e, t.id)) return !1;
            let r = e.get(l);
            if ("dictation" === t.kind && n.owner?.kind === "voice" || null != r && n.owner?.id !== r) throw new DOMException("Microphone is already in use", "NotReadableError");
            let s = n.owner;
            n.accepted = "voice" === t.kind && null != n.voiceIntent ? n.voiceIntent.version : ++n.requested, n.owner = t, e.set(l, "dictation" === t.kind ? t.id : null);
            let o = [n.release, s?.kind === "dictation" ? s.relinquish() : Promise.resolve()];
            n.release = Promise.allSettled(o).then(() => {});
            try {
                await Promise.all(o)
            } catch (i) {
                throw n.owner === t && h(e, t.id), i
            }
            if (n.owner !== t) return !1;
            let c = a.appServices?.realtimeVoice;
            if (null != c) {
                let r = await c.acquireMicrophone(t.kind, async () => {
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
                        if ((0, i.a)(a, s?.release(), !1), n.owner === t) throw h(e, t.id), new DOMException("Microphone is already in use", "NotReadableError");
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
        }

        function h(e, t, n) {
            n?.catch(() => {});
            let i = g(e),
                r = i.hostLeases.get(t);
            i.hostLeases.delete(t), null != r && Promise.resolve(n).then(r, r), i.owner?.id === t && (null != n && (i.release = Promise.allSettled([i.release, n]).then(() => {})), i.owner = null), e.get(l) === t && e.set(l, null)
        }

        function u(e, t, n) {
            let i = g(e),
                r = i.owner;
            r?.kind === "voice" && r.id === t && (r.id = n);
            let a = i.hostLeases.get(t);
            null != a && (i.hostLeases.delete(t), i.hostLeases.set(n, a));
            let s = i.voiceIntent;
            s?.id === t && (s.id = n)
        }

        function p(e, t) {
            let n = g(e);
            n.voiceIntent = {
                id: t,
                version: ++n.requested
            }
        }

        function f(e, t) {
            let n = g(e);
            return null == n.voiceIntent || n.voiceIntent.id === t && n.voiceIntent.version >= n.accepted
        }

        function m(e) {
            return g(e).requested
        }

        function g(e) {
            let t = e.chain.get(s.a.id) ?? e.node,
                n = o.get(t);
            return null == n && (n = {
                owner: null,
                release: Promise.resolve(),
                requested: 0,
                accepted: 0,
                voiceIntent: null,
                hostLeases: new Map
            }, o.set(t, n)), n
        }
        n.d(t, {
            b: () => u,
            c: () => m,
            d: () => f,
            e: () => p,
            f: () => h,
            g: () => d,
            h: () => c
        }, {
            a: l
        })
    }),
    qXzS: (function(e, t, n) {
        n.d(t, {
            a: () => h,
            b: () => d.a
        });
        var i = n("o0PZ"),
            r = n("PFjh"),
            a = n("Io7L"),
            s = n("GaA7"),
            o = n("z7S6"),
            l = n("lENN");
        n("LnnK");
        var c = n("SRbQ"),
            d = n("RVN2");
        "u" > typeof window && window.setTimeout(() => {}, 0);
        class h {
            scope;
            options;
            cancellation = (0, i.Me)();
            captureReleased = (0, i.Me)();
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
                return this.startPromise = this.startPromise ?? this.acquire(t).then(t => {
                    if (this.cancelled || this.captureStopped) throw new DOMException("Recording cancelled", "AbortError");
                    return this.captureReady = !0, this.captureReadyAtMs = performance.now(), this.setActive(!0), this.streamingStart = this.streaming?.start(t, this.options.startConfirmed, e).catch(e => {
                        throw this.terminalError ?? e
                    }) ?? null, this.streamingStart?.catch(() => {}), null == this.streaming && (this.options.chatgpt || this.requiresMicrophoneDrain) && (this.limitTimer = window.setTimeout(() => {
                        null != this.options.onLimit ? this.options.onLimit() : this.finish({
                            preserveOwnership: !0
                        }).catch(e => this.fail(e)).finally(() => this.dispose())
                    }, 595e3)), t
                }), this.startPromise
            }
            async acquire(e) {
                if (!this.claim()) throw new o.a("The dictation microphone is busy.", "microphone_busy");
                try {
                    let i;
                    if (this.cancelled) throw new DOMException("Recording cancelled", "AbortError");
                    if (e?.mark("device_requested"), s.appServices?.microphoneCapture != null) {
                        var t, n;
                        let e, i, r, a, o, l, d, h, u;
                        this.microphone = (t = s.appServices.microphoneCapture, n = e => this.fail(e), a = (r = new MediaStreamTrackGenerator({
                            kind: "audio"
                        })).writable.getWriter(), o = [], l = 16e3, d = !1, h = 0, u = () => {
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
                                        let u = (0, c.a)(s, await e.ready(), !1);
                                        if ("error" === u.status) throw new DOMException("Unable to open the local microphone", "NotReadableError");
                                        if (l = u.sampleRate, d) throw new DOMException("Microphone start cancelled", "AbortError");
                                        let p = e;
                                        return i = (async () => {
                                            for (; !d;) {
                                                let e = {
                                                    stack: [],
                                                    error: void 0,
                                                    hasError: !1
                                                };
                                                try {
                                                    let t = (0, c.a)(e, await p.read(), !1);
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
                                                            timestamp: Math.round(1e6 * h / l),
                                                            data: n
                                                        });
                                                    h += i;
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
                                    throw u(), e
                                }
                            })(),
                            dispose: u,
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
                            };
                        this.microphone = {
                            dispose: n,
                            stream: (null == i ? (0, l.c)(this.options.chatgpt ? {
                                channelCount: 1,
                                sampleRate: 4e3
                            } : {
                                channelCount: 1
                            }, this.options.dictationAudio, this.options.chatgpt) : (0, l.a)({
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
                window.clearTimeout(this.limitTimer), this.capturedAudio = this.capturedAudio ?? this.microphone?.getAudio?.();
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
            l = n("zKCW"),
            c = n("ygO2"),
            d = n("bf6R"),
            h = n("RNul"),
            u = n("aepO");

        function p(e) {
            let t, n, c, p, g, v, w, b, y, x, j = (0, r.c)(41),
                {
                    recovery: k,
                    presentation: M,
                    inert: A,
                    onViewRecording: S,
                    onInsertText: P,
                    onCopyText: R,
                    onRetry: I,
                    onDismiss: C
                } = e,
                D = void 0 === M ? "banner" : M,
                E = (0, a.a)(),
                T = "composer-rail" === D ? o.a.Action : f,
                N = "composer-rail" === D ? o.a.IconAction : m;
            j[0] !== k.phase ? (t = "recovering" === k.phase ? (0, i.jsx)(h.a, {
                className: "size-4"
            }) : void 0, j[0] = k.phase, j[1] = t) : t = j[1];
            let W = t;
            j[2] !== k.phase ? (n = (0, i.jsx)("span", {
                className: "select-none",
                children: (0, i.jsx)(s.a, {
                    id: "dictation.recovery.statusLabel",
                    defaultMessage: "{phase, select, recovering {Recovering text…} recovered {Text recovered} other {Dictation stopped}}",
                    description: "Current state of dictation recovery. Recovering means transcription is in progress; recovered means text is available to use.",
                    values: {
                        phase: k.phase
                    }
                })
            }), j[2] = k.phase, j[3] = n) : n = j[3];
            let L = n;
            j[4] !== T || j[5] !== R || j[6] !== P || j[7] !== k.phase || j[8] !== k.text ? (c = "recovered" === k.phase && null != k.text ? (0, i.jsx)(T, {
                color: "ghostActive",
                onClick: P ?? R ?? (() => void(0, u.a)(k.text ?? "")),
                children: null != P ? (0, i.jsx)(s.a, {
                    id: "dictation.recovery.insert",
                    defaultMessage: "Add to message",
                    description: "Appends recovered dictation to the current composer draft"
                }) : (0, i.jsx)(s.a, {
                    id: "dictation.recovery.copy",
                    defaultMessage: "Copy text",
                    description: "Copies recovered dictation text without replacing the user's current draft or clipboard automatically"
                })
            }) : null, j[4] = T, j[5] = R, j[6] = P, j[7] = k.phase, j[8] = k.text, j[9] = c) : c = j[9], j[10] !== T || j[11] !== S || j[12] !== k.saveState ? (p = "saved" === k.saveState && null != S ? (0, i.jsx)(T, {
                color: "ghost",
                onClick: S,
                children: (0, i.jsx)(s.a, {
                    id: "dictation.recovery.view",
                    defaultMessage: "View recording",
                    description: "Opens the specific saved dictation recording for recovery and download"
                })
            }) : null, j[10] = T, j[11] = S, j[12] = k.saveState, j[13] = p) : p = j[13], j[14] !== T || j[15] !== I || j[16] !== k.phase ? (g = "failed" === k.phase && null != I ? (0, i.jsx)(T, {
                color: "ghostActive",
                onClick: I,
                children: (0, i.jsx)(s.a, {
                    id: "dictation.recovery.retry",
                    defaultMessage: "Retry",
                    description: "Retries transcription of retained dictation audio"
                })
            }) : null, j[14] = T, j[15] = I, j[16] = k.phase, j[17] = g) : g = j[17], j[18] !== E ? (v = E.formatMessage({
                id: "dictation.recovery.dismiss",
                defaultMessage: "Dismiss",
                description: "Dismisses the recovery notice without deleting saved audio"
            }), j[18] = E, j[19] = v) : v = j[19], j[20] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, i.jsx)(d.aj, {}), j[20] = w) : w = j[20], j[21] !== N || j[22] !== C || j[23] !== v ? (b = (0, i.jsx)(N, {
                "aria-label": v,
                onClick: C,
                children: w
            }), j[21] = N, j[22] = C, j[23] = v, j[24] = b) : b = j[24], j[25] !== c || j[26] !== p || j[27] !== g || j[28] !== b ? (y = (0, i.jsxs)(i.Fragment, {
                children: [c, p, g, b]
            }), j[25] = c, j[26] = p, j[27] = g, j[28] = b, j[29] = y) : y = j[29];
            let _ = y;
            if ("composer-rail" === D) {
                let e, t;
                return j[30] !== _ || j[31] !== L || j[32] !== W ? (e = (0, i.jsx)(o.a.Row, {
                    wrapActions: !0,
                    icon: W,
                    title: L,
                    actions: _
                }), j[30] = _, j[31] = L, j[32] = W, j[33] = e) : e = j[33], j[34] !== A || j[35] !== e ? (t = (0, i.jsx)(o.a.Item, {
                    role: "status",
                    "aria-live": "polite",
                    inert: A,
                    children: e
                }), j[34] = A, j[35] = e, j[36] = t) : t = j[36], t
            }
            return j[37] !== _ || j[38] !== L || j[39] !== W ? (x = (0, i.jsx)(l.a, {
                type: "normal",
                density: "compact",
                layout: "warningCallout",
                stackOnNarrow: !0,
                showCtaSeparator: !1,
                wrapCtas: !0,
                role: "status",
                ariaLive: "polite",
                icon: W,
                content: L,
                customCtas: _
            }), j[37] = _, j[38] = L, j[39] = W, j[40] = x) : x = j[40], x
        }

        function f(e) {
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

        function m(e) {
            let t, n = (0, r.c)(2);
            return n[0] !== e ? (t = (0, i.jsx)(c.a, {
                ...e,
                color: "ghost",
                size: "icon"
            }), n[0] = e, n[1] = t) : t = n[1], t
        }
        n.d(t, {
            a: () => p
        })
    }),
    JAPD: (function(e, t, n) {
        var i = n("o0PZ"),
            r = n("Kwur"),
            a = n("Mq0M"),
            s = n("eShZ");
        async function o(e) {
            let {
                queryClient: t,
                accountId: n,
                userId: a,
                text: s,
                signal: o,
                surface: c,
                onSuccess: d,
                onError: h
            } = e, u = ["dictation-custom-dictionary", n, a], p = t.getQueryData(u)?.words.length;
            l(c, "attempt", p);
            try {
                await r.Request.safePost("/dictation/custom_dictionary/words", {
                    requestBody: {
                        text: s
                    },
                    additionalHeaders: {
                        "ChatGPT-Account-ID": n,
                        [i.Zb]: n
                    },
                    signal: o,
                    expectedErrorStatuses: [400, 404, 409, 422]
                }), l(c, "success", null == p ? void 0 : p + 1), o.throwIfAborted(), t.invalidateQueries({
                    queryKey: u
                }), d?.()
            } catch (e) {
                if (o.aborted || l(c, "error", p, e), null != h) h(e);
                else throw e
            }
        }

        function l(e, t, n, i) {
            let r = "unknown";
            null != n && (r = n <= 1 ? String(n) : n <= 5 ? "2-5" : n <= 20 ? "6-20" : "21-200");
            let o = {
                surface: e,
                word_count_bucket: r
            };
            i instanceof s.a ? (o.error_type = "request_error", o.error_name = "RequestError", o.http_status = i.status) : void 0 !== i && (o.error_type = i instanceof Error ? "error" : typeof i, o.error_name = i instanceof Error ? i.name : void 0), (0, a.a)(`dictation.custom_dictionary.word.add.${t}`, o)
        }
        n.d(t, {
            a: () => o
        })
    }),
    Jue3: (function(e, t, n) {
        var i = n("iTtm");
        n("hzGf"), n("wLMK");
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
            a = n("iTtm"),
            s = n("Wf1j"),
            o = n("oyxz"),
            l = n("E8Sp"),
            c = n("OWtl"),
            d = n("BiIz"),
            h = n("b5fQ"),
            u = n("oArc"),
            p = n("AmNL"),
            f = n("GjWp"),
            m = n("DhwN");

        function g() {
            let e, t, n = (0, r.c)(4),
                s = (0, a.z)(u.b);
            return 0 === s.length ? null : (n[0] !== s ? (e = s.map(v), n[0] = s, n[1] = e) : e = n[1], n[2] !== e ? (t = (0, i.jsx)(d.e, {
                children: e
            }), n[2] = e, n[3] = t) : t = n[3], t)
        }

        function v(e) {
            return (0, i.jsx)(w, {
                attemptId: e
            }, e)
        }

        function w(e) {
            let t, n, d, g, v, w, b = (0, r.c)(16),
                {
                    attemptId: y
                } = e,
                x = (0, a.y)(c.a),
                j = (0, a.x)(u.c, y),
                k = (0, s.a)(),
                M = j?.origin.homeDraft;
            return null == j || null == M ? null : (b[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                assets: {
                    16: f.a,
                    20: m.a
                }
            }, n = (0, i.jsx)(o.a, {
                id: "dictation.sidebar.newChatDraft",
                defaultMessage: "New chat",
                description: "Temporary sidebar row that reopens the unsent chat where dictation started"
            }), b[0] = t, b[1] = n) : (t = b[0], n = b[1]), b[2] !== k || b[3] !== j.status ? (d = "recording" === j.status ? k.formatMessage({
                id: "dictation.sidebar.openRecordingDraft",
                defaultMessage: "Open recording in new chat",
                description: "Accessible action that returns to an unsent chat while it is still recording dictation"
            }) : k.formatMessage({
                id: "dictation.sidebar.openDraft",
                defaultMessage: "Open dictation draft",
                description: "Accessible action that returns to the exact unsent draft where dictation started"
            }), b[2] = k, b[3] = j.status, b[4] = d) : d = b[4], b[5] !== y || b[6] !== j.status ? (g = "recording" === j.status ? (0, i.jsx)(p.a, {
                attemptId: y
            }) : void 0, b[5] = y, b[6] = j.status, b[7] = g) : g = b[7], b[8] !== M.clientThreadId || b[9] !== M.location || b[10] !== x ? (v = () => {
                x.get(l.a).navigate(M.location, {
                    state: {
                        ...M.location.state,
                        homeDraftClientThreadId: M.clientThreadId
                    }
                })
            }, b[8] = M.clientThreadId, b[9] = M.location, b[10] = x, b[11] = v) : v = b[11], b[12] !== d || b[13] !== g || b[14] !== v ? (w = (0, i.jsx)(h.a, {
                iconAssetSource: t,
                label: n,
                "aria-label": d,
                trailing: g,
                onClick: v
            }), b[12] = d, b[13] = g, b[14] = v, b[15] = w) : w = b[15], w)
        }
        n.d(t, {
            a: () => g
        })
    }),
    AmNL: (function(e, t, n) {
        var i = n("ABep"),
            r = n("QosV"),
            a = n("CU68"),
            s = n("iTtm"),
            o = n("zd8w"),
            l = n("Wf1j"),
            c = n("l8q4"),
            d = n("TjgH"),
            h = n("T1PX"),
            u = n("OWtl"),
            p = n("oArc"),
            f = n("ft5P");

        function m(e) {
            let t, n, s, o, c = (0, r.c)(10),
                {
                    attemptId: h
                } = e,
                u = (0, l.a)();
            c[0] !== u ? (t = u.formatMessage(f.a.recording), c[0] = u, c[1] = t) : t = c[1];
            let p = t;
            return c[2] !== h ? (n = (0, i.jsx)(d.a, {
                variant: "recording",
                children: (0, i.jsx)(g, {
                    attemptId: h
                })
            }), c[2] = h, c[3] = n) : n = c[3], c[4] !== p || c[5] !== n ? (s = (0, i.jsx)("span", {
                className: "inline-flex items-center select-none",
                role: "img",
                "aria-label": p,
                children: n
            }), c[4] = p, c[5] = n, c[6] = s) : s = c[6], c[7] !== p || c[8] !== s ? (o = (0, i.jsx)(a.a, {
                content: p,
                children: s
            }), c[7] = p, c[8] = s, c[9] = o) : o = c[9], o
        }

        function g(e) {
            let t, n, a, l = (0, r.c)(6),
                {
                    attemptId: d
                } = e,
                f = (0, s.y)(u.a),
                m = (0, o.useRef)(null),
                g = (0, h.a)();
            return l[0] !== d || l[1] !== g || l[2] !== f ? (t = () => {
                let e = m.current;
                if (null == e) return;
                let t = e.getContext("2d");
                if (null == t) return;
                let n = new c.a,
                    i = null,
                    r = 0,
                    a = !1,
                    s = null,
                    o = a => {
                        n.advance((a - r) / 1e3, a / 1e3, g), r = a;
                        let s = e.getBoundingClientRect().width;
                        if (s > 0) {
                            let i = window.devicePixelRatio * (s / 28),
                                r = Math.round(28 * i),
                                a = Math.round(12 * i);
                            (e.width !== r || e.height !== a) && (e.width = r, e.height = a), t.setTransform(i, 0, 0, i, 0, 0), t.clearRect(0, 0, 28, 12), t.fillStyle = getComputedStyle(e).color, n.levels.forEach((e, n) => {
                                let i = (0, c.b)(n, e, 28, 12);
                                t.beginPath(), t.roundRect(i.x, i.y, i.width, i.height, i.radius), t.fill()
                            })
                        }
                        i = requestAnimationFrame(o)
                    },
                    l = () => {
                        null != i && (cancelAnimationFrame(i), i = null), s?.(), s = null
                    },
                    h = () => {
                        !a || document.hidden ? l() : null == i && (s = f.watch(e => {
                            let t = e.get(p.a, d);
                            null != t && n.receive(t.level, t.timeSeconds)
                        }), r = performance.now(), i = requestAnimationFrame(o))
                    },
                    u = new IntersectionObserver(e => {
                        let [t] = e;
                        a = t?.isIntersecting ?? !1, h()
                    });
                return u.observe(e), document.addEventListener("visibilitychange", h), () => {
                    l(), u.disconnect(), document.removeEventListener("visibilitychange", h)
                }
            }, n = [d, g, f], l[0] = d, l[1] = g, l[2] = f, l[3] = t, l[4] = n) : (t = l[3], n = l[4]), (0, o.useEffect)(t, n), l[5] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)("canvas", {
                ref: m,
                className: "h-3 w-7",
                "aria-hidden": "true"
            }), l[5] = a) : a = l[5], a
        }
        n.d(t, {
            a: () => m
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
            let t, n, l, c, h, u, p, f, m, g, v = (0, r.c)(32),
                {
                    animated: w,
                    linesAdded: b,
                    linesRemoved: y,
                    variant: x,
                    className: j
                } = e,
                k = void 0 !== w && w,
                M = void 0 === x ? "color" : x,
                A = (0, s.a)();
            v[0] !== j ? (t = (0, a.b)("inline-flex items-center gap-1 leading-none disambiguated-digits tabular-nums tracking-tight", j), v[0] = j, v[1] = t) : t = v[1];
            let S = "monochrome" === M && "text-tertiary",
                P = "color" === M && "text-codex-git-added",
                R = "agent-activity" === M && "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-codex-git-added";
            v[2] !== S || v[3] !== P || v[4] !== R ? (n = (0, a.b)("flex shrink-0 items-center", S, P, R), v[2] = S, v[3] = P, v[4] = R, v[5] = n) : n = v[5], v[6] !== k || v[7] !== A || v[8] !== b ? (l = k ? (0, i.jsx)(d, {
                value: b
            }, "linesAdded") : A.formatNumber(b), v[6] = k, v[7] = A, v[8] = b, v[9] = l) : l = v[9], v[10] !== l ? (c = (0, i.jsx)(o.a, {
                id: "wham.message.modal.repoAndDiffStats.linesAdded",
                defaultMessage: "+{linesAdded}",
                description: "Number of lines added",
                values: {
                    linesAdded: l
                }
            }), v[10] = l, v[11] = c) : c = v[11], v[12] !== n || v[13] !== c ? (h = (0, i.jsx)("span", {
                className: n,
                children: c
            }), v[12] = n, v[13] = c, v[14] = h) : h = v[14];
            let I = "monochrome" === M && "text-tertiary",
                C = "color" === M && "text-codex-git-deleted",
                D = "agent-activity" === M && "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:text-codex-git-deleted";
            return v[15] !== I || v[16] !== C || v[17] !== D ? (u = (0, a.b)("flex shrink-0 items-center", I, C, D), v[15] = I, v[16] = C, v[17] = D, v[18] = u) : u = v[18], v[19] !== k || v[20] !== A || v[21] !== y ? (p = k ? (0, i.jsx)(d, {
                value: y
            }, "linesRemoved") : A.formatNumber(y), v[19] = k, v[20] = A, v[21] = y, v[22] = p) : p = v[22], v[23] !== p ? (f = (0, i.jsx)(o.a, {
                id: "wham.message.modal.repoAndDiffStats.linesRemoved",
                defaultMessage: "-{linesRemoved}",
                description: "Number of lines removed",
                values: {
                    linesRemoved: p
                }
            }), v[23] = p, v[24] = f) : f = v[24], v[25] !== u || v[26] !== f ? (m = (0, i.jsx)("span", {
                className: u,
                children: f
            }), v[25] = u, v[26] = f, v[27] = m) : m = v[27], v[28] !== h || v[29] !== m || v[30] !== t ? (g = (0, i.jsxs)("span", {
                "data-thread-find-skip": !0,
                className: t,
                children: [h, m]
            }), v[28] = h, v[29] = m, v[30] = t, v[31] = g) : g = v[31], g
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
                    s = r.filter(p).length;
                t = (0, i.jsx)("span", {
                    "aria-label": e,
                    className: "inline-flex h-lh items-baseline leading-[inherit]",
                    children: r.map((e, t) => p(e) ? (s -= 1, (0, i.jsx)(h, {
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

        function h(e) {
            let t, n, a, s, o, c = (0, r.c)(10),
                {
                    digit: d,
                    variant: h
                } = e,
                p = `translateY(-${d}lh)`;
            c[0] !== p ? (t = {
                transform: p
            }, c[0] = p, c[1] = t) : t = c[1], c[2] === Symbol.for("react.memo_cache_sentinel") ? (n = l.map(u), c[2] = n) : n = c[2], c[3] !== t ? (a = (0, i.jsx)("span", {
                className: "DigitStack-p_507q",
                style: t,
                children: n
            }), c[3] = t, c[4] = a) : a = c[4];
            let f = a;
            return c[5] !== f ? (s = (0, i.jsx)("span", {
                className: "absolute inset-0 overflow-hidden",
                children: f
            }), c[5] = f, c[6] = s) : s = c[6], c[7] !== s || c[8] !== h ? (o = (0, i.jsx)("span", {
                "aria-hidden": "true",
                className: "DigitColumn-fJ4U3r",
                "data-variant": h,
                children: s
            }), c[7] = s, c[8] = h, c[9] = o) : o = c[9], o
        }

        function u(e) {
            return (0, i.jsx)("span", {
                children: e
            }, e)
        }

        function p(e) {
            return e >= "0" && e <= "9"
        }
    }),
    g3QY: (function(e, t, n) {
        var i = n("o0PZ"),
            r = n("uOFa"),
            a = n("bnxy");

        function s(e, t) {
            return null != t && null != e.localWorkspaceRoot && (0, a.a)(e.localWorkspaceRoot, t) ? (0, r.a)({
                ...e,
                localWorkspaceRoot: t
            }) : (0, r.a)(e)
        }

        function o(e, t) {
            if (!t) return e;
            let n = t.replace(/\\/g, "/"),
                r = e.replace(/\\/g, "/"),
                a = n.endsWith("/") ? n.slice(0, -1) : n,
                [s, o] = (0, i.zi)(n) || (0, i.Bi)(n) ? [a.toLowerCase(), r.toLowerCase()] : [a, r];
            if (o.startsWith(s + "/")) return r.slice(a.length + 1);
            let l = (s.split("/").at(-1) ?? s) + "/",
                c = o.indexOf(l);
            return -1 !== c && (0 === c || "/" === o[c - 1]) ? r.slice(c + l.length) : r
        }

        function l(e) {
            return c(e)[0] ?? {
                authorLogin: null,
                text: ""
            }
        }

        function c(e) {
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

        function d(e, t) {
            return e ? (0, a.q)(o(e, t)) : null
        }

        function h(e, t, n) {
            let i = (0, a.q)(e),
                r = (0, a.q)(t);
            if (i === r) return !0;
            let s = d(t, n);
            if (s && i === s) return !0;
            let o = d(e, n);
            return !!o && o === r || null == n && (r.endsWith(`/${i}`) || i.endsWith(`/${r}`))
        }
        n.d(t, {
            b: () => r.a,
            c: () => s,
            d: () => l,
            e: () => c,
            f: () => o,
            g: () => h
        }, {
            a: "/dev/null"
        })
    }),
    Fmrr: (function(e, t, n) {
        let i = new WeakMap;

        function r(e) {
            let {
                fileCount: t,
                totalChangedLines: n,
                totalChangedBytes: i
            } = e;
            return t > 128 || n > 9e3 || i > 0xc00000
        }

        function a(e) {
            return e.additions + e.deletions > 15e3 || e.changedBytes > 3145728 || e.maxChangedLineBytes > 1048576
        }

        function s(e) {
            if (e.hunks.reduce((e, t) => e + t.additionLines + t.deletionLines, 0) > 15e3) return !0;
            let {
                changedBytes: t,
                maxChangedLineBytes: n
            } = o(e);
            return t > 3145728 || n > 1048576
        }

        function o(e) {
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
        n.d(t, {
            d: () => a,
            e: () => s,
            f: () => o,
            g: () => r
        }, {
            a: 3145728,
            b: 1048576,
            c: 0xc00000
        })
    }),
    NxNN: (function(e, t, n) {
        var i = n("iTtm"),
            r = n("tSEg"),
            a = n("Nwp9");
        let s = {},
            o = (0, a.b)("editorDiffViewMode", "auto"),
            l = (0, a.b)("wrapCodeDiff.2", !1),
            c = (0, a.b)("fileSourceGitBlame", !1),
            d = (0, a.b)("hideDiffWhitespace", !1),
            h = (0, a.b)("hideDiffImports", !1),
            u = (0, a.b)("wordDiffsEnabled.2", !0),
            p = (0, a.b)("diffRichPreview", !1),
            f = (0, a.b)("diffViewThreadSettings", {}),
            m = (0, i.c)(r.a, e => {
                let {
                    get: t,
                    scope: n
                } = e, i = t(f) ?? s;
                return i[w(n.value)]?.richPreviewEnabled ?? !0
            });

        function g(e, t, n) {
            return "auto" !== e ? e : n && t.additions > 0 && t.deletions > 0 ? "split" : "unified"
        }

        function v(e, t) {
            let n = e.get(f) ?? s,
                i = w(e.value);
            e.set(f, {
                ...n,
                [i]: {
                    ...n[i],
                    richPreviewEnabled: t
                }
            })
        }

        function w(e) {
            return (0, r.f)(e) ?? e.pathname
        }
        n.d(t, {
            c: () => g,
            h: () => v
        }, {
            a: o,
            b: c,
            d: h,
            e: d,
            f: p,
            g: m,
            i: u,
            j: l
        })
    }),
    m7Xr: (function(e, t, n) {
        var i = n("jmZd");
        let r = "diff --git ";

        function a(e) {
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
        n.d(t, {
            b: () => a
        }, {
            a: r
        })
    }),
    QqPl: (function(e, t, n) {
        var i = n("iTtm"),
            r = n("kl6F"),
            a = n("kpIY"),
            s = n("g3QY");
        let o = (0, i.u)(r.a, e => {
            let {
                scope: t
            } = e;
            return h(t.value.clientThreadId)
        }, {
            onMount: (e, t) => {
                let n = t.value.clientThreadId;
                return (0, a.z)(u(n), () => e(h(n)))
            }
        });

        function l(e, t) {
            let n = u(e.value.clientThreadId),
                i = `${n}${(0,s.b)(t)}`;
            if ((0, a.k)(i, !1)) return;
            let r = (0, a.l)(n);
            r.slice(0, Math.max(0, r.length - 1e3 + 1)).forEach(e => (0, a.u)(e, void 0)), (0, a.u)(i, !0)
        }

        function c(e) {
            (0, a.r)(u(e))
        }

        function d(e, t) {
            return !0 === e[(0, s.b)(t)]
        }

        function h(e) {
            let t = u(e);
            return Object.fromEntries((0, a.l)(t).map(e => [e.slice(t.length), !0]))
        }

        function u(e) {
            return `dismissed-model-diff-comments-v3:${e}:`
        }
        n.d(t, {
            a: () => c,
            b: () => l,
            d: () => d
        }, {
            c: o
        })
    }),
    JiBc: (function(e, t, n) {
        var i = n("Caid"),
            r = n("ox67"),
            a = n.n(r),
            s = n("VpTR"),
            o = n("o0PZ"),
            l = n("WdPB"),
            c = n("WFY2"),
            d = n("g3QY"),
            h = n("Fmrr"),
            u = n("NgMj");
        n("wIFP");
        let p = new s.a({
            max: 50,
            maxSize: 8388608,
            sizeCalculation: (e, t) => Math.max(1, 8 * t.length * e.size)
        });

        function f(e) {
            let t, {
                    maxFiles: n
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = 8 * e.length <= p.maxSize,
                s = `${n??"all"}`,
                f = r ? p.get(e) : void 0,
                y = f?.get(s);
            if (y) return y;
            let x = e.includes("GIT binary patch") || e.includes("Binary files ") ? g(e) : new Set,
                j = e.includes("160000") ? v(e) : new Set,
                k = function(e) {
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
                                    let t = b(e),
                                        n = e.slice(0, e.length - t.length).slice(11),
                                        i = (0, o.Dj)(n, 0);
                                    if (null == i || " " !== n[i.nextIndex]) return null;
                                    let r = (0, o.Dj)(n, i.nextIndex + 1);
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
                            return e.startsWith('--- "') ? w(e, "---") ?? e : e.startsWith('+++ "') ? w(e, "+++") ?? e : e
                        }).join(""),
                        pathsByFileIndex: t
                    }
                }(e);
            try {
                t = (0, i.a)(k.diff, function(e) {
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
            let M = [],
                A = 0;
            for (let e of t)
                for (let t of e.files) {
                    if (void 0 !== n && M.length >= n) return M;
                    try {
                        var S;
                        let e = (0, u.b)(function(e, t) {
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
                            }(t, k.pathsByFileIndex.get(A))),
                            {
                                oldPath: n,
                                newPath: i
                            } = (S = e, {
                                oldPath: "new" === S.type ? d.a : S.prevName ?? S.name,
                                newPath: "deleted" === S.type ? d.a : S.name
                            }),
                            r = function(e) {
                                let t = null;
                                return () => (null == t && (t = (0, h.f)(e)), t)
                            }(e),
                            s = e.hunks,
                            o = a()(s, e => e.additionLines),
                            l = a()(s, e => e.deletionLines),
                            c = s.find(e => e.additionCount > 0)?.additionStart,
                            p = s.find(e => e.deletionLines > 0)?.deletionStart;
                        M.push({
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
                            firstDeletionLine: p,
                            isBinary: x.has(A),
                            isGitlink: j.has(A)
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
                    A += 1
                }
            if (r) {
                let t = new Map(f);
                t.set(s, M), p.set(e, t)
            }
            return M
        }

        function m(e) {
            return (e >>> 0).toString(16).padStart(8, "0")
        }
        let g = e => {
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
            },
            v = e => {
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
            };

        function w(e, t) {
            let n = b(e),
                i = e.slice(0, e.length - n.length),
                r = (0, o.Dj)(i, t.length + 1);
            return null == r ? null : `${t} ${r.pathForUnquotedDiffHeader}${n}`
        }

        function b(e) {
            return e.endsWith("\r\n") ? "\r\n" : e.endsWith("\n") ? "\n" : ""
        }
        n.d(t, {
            a: () => f
        })
    }),
    NgMj: (function(e, t, n) {
        var i = n("aJ6K"),
            r = n("AJrN");
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

        function l(e) {
            if (null != e.lang) return e;
            let t = o(e.name);
            return null == t || t === (0, i.a)(e.name) ? e : (0, r.a)(e, t)
        }
        n.d(t, {
            a: () => o,
            b: () => l
        })
    }),
    bWX0: (function(e, t, n) {
        function i(e) {
            let {
                filePath: t,
                imagePreviewMode: n,
                isDeletion: i,
                richPreviewEnabled: r
            } = e;
            return r && !i && s(t) ? "markdown" : "always" === n || "toggle" === n && r ? "image" : a(t) ? "pdf" : "diff"
        }

        function r(e) {
            let t = o(e);
            return null == t ? "none" : "svg" === t ? "toggle" : l.has(t) ? "always" : "none"
        }

        function a(e) {
            return "pdf" === o(e)
        }

        function s(e) {
            let t = o(e);
            return null != t && c.has(t)
        }

        function o(e) {
            let t = e.toLowerCase(),
                n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\")),
                i = n >= 0 ? t.slice(n + 1) : t,
                r = i.lastIndexOf(".");
            return r > 0 && r < i.length - 1 ? i.slice(r + 1) : null
        }
        let l = new Set(["avif", "bmp", "gif", "ico", "jpeg", "jpg", "png", "tif", "tiff", "webp"]),
            c = new Set(["markdown", "md", "mdown", "mdx", "mkd"]);
        n.d(t, {
            a: () => i,
            b: () => r,
            c: () => o,
            d: () => s,
            e: () => a
        })
    }),
    wIFP: (function(e, t, n) {
        (0, n("Xxij").a)("tsrx", async () => {
            let {
                resolveLanguage: e
            } = await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(861027)]).then(n.bind(n, "Xw7C")), [{
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
        var i = n("iXTs"),
            r = n("WFY2");
        let a = /^::[a-zA-Z0-9-]+.*$/gm;

        function s(e, t) {
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
                        s = function(e, t, n) {
                            let i = t;
                            for (; i < n;) {
                                let t = e[i];
                                if (" " !== t && "	" !== t) break;
                                i += 1
                            }
                            return i
                        }(e, r, a),
                        o = function(e, t, n) {
                            var i;
                            if (":" !== e[t]) return null;
                            let r = t;
                            for (;
                                ":" === e[r] && r - t < 3;) r += 1;
                            if (!l(e.charCodeAt(r))) return null;
                            let a = r + 1;
                            for (; a < n && (l(i = e.charCodeAt(a)) || i >= 48 && i <= 57 || 45 === i || 95 === i);) a += 1;
                            return {
                                markerLength: r - t,
                                name: e.slice(r, a)
                            }
                        }(e, s, a);
                    if (null != o && n.has(o.name) && (i.push(e.slice(s, a)), 3 === o.markerLength && i.push(":::")), -1 === t) break;
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
        }

        function o(e) {
            return e.replace(a, "").replace(/\n{3,}/g, "\n\n").trim()
        }

        function l(e) {
            return e >= 65 && e <= 90 || e >= 97 && e <= 122
        }
        n.d(t, {
            a: () => s,
            b: () => o
        })
    }),
    yWTM: (function(e, t, n) {
        let i = "new-conversation",
            r = "panel-new-conversation",
            a = "pull-request-review:",
            s = "site-preview:";

        function o(e) {
            let {
                accountId: t,
                userId: n,
                projectId: i
            } = e;
            return `${s}${JSON.stringify([t,n,i])}`
        }

        function l(e) {
            return e?.startsWith(s) === !0
        }

        function c(e) {
            let {
                entrypoint: t
            } = e;
            return "home" === t ? i : r
        }

        function d(e) {
            return `${a}${e}`
        }

        function h(e) {
            return e.slice(a.length)
        }

        function u(e) {
            return e === i || e === r || e.startsWith(s) || e.startsWith(a)
        }
        n.d(t, {
            a: () => c,
            b: () => d,
            c: () => o,
            d: () => h,
            e: () => u,
            f: () => l
        })
    })
};