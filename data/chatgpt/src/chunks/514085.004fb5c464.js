export const __rspack_esm_ids = [514085];
export const __webpack_modules__ = {
    OnvC: (function(e, t) {
        t.a = {
            surface: "surface-NnKg6c"
        }
    }),
    eShZ: (function(e, t, r) {
        var n = r("I07G"),
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
            if (null == e) return;
            let t = Number(e),
                r = Number.isFinite(t) ? Date.now() + 1e3 * Math.max(0, t) : Date.parse(e);
            return Number.isFinite(r) ? r : void 0
        }

        function c(e) {
            return "challenge" === e.get("cf-mitigated")
        }

        function d(e) {
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
                let r, u, p = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                try {
                    r = await e.text()
                } catch {
                    r = ""
                }
                let h = l(e.headers.get("retry-after")) ?? 0 / 0,
                    g = Number(e.headers.get("x-ratelimit-reset")),
                    f = Math.max(...[h, "0" === e.headers.get("x-ratelimit-remaining") && g > 0 ? 1e3 * g : 0 / 0].filter(Number.isFinite)),
                    m = {};
                try {
                    m = a.record(a.string(), a.unknown()).parse(JSON.parse(r))
                } catch (e) {
                    u = e instanceof Error ? e : void 0, p || (m = {
                        detail: {
                            code: "not_json_response",
                            text: r.substring(0, 1e3)
                        }
                    })
                }
                let w = (0, n.sj)(r),
                    b = Error(JSON.stringify(m)),
                    v = c(e.headers);
                if (v) r = w = "cloudflare_challenge", m = {
                    detail: {
                        code: w
                    }
                }, b = Error(w), u = void 0;
                else if (p && !e.headers.get("content-type")?.includes("application/json")) {
                    w = w ?? "unexpected_content_type";
                    let t = r.substring(0, 1e3);
                    m = {
                        detail: {
                            message: i.a,
                            code: "unexpected_content_type",
                            contentType: e.headers.get("content-type") ?? "",
                            text: t
                        }
                    }, b = Error(t)
                }
                let y = e.headers.get("x-request-id") ?? (p ? e.headers.get("cf-ray") : void 0) ?? void 0,
                    k = new s(r || e.statusText || `Request failed with status ${e.status}`, e.status, w, e.status, void 0, Number.isFinite(f) ? f : void 0, p && e.headers.get("content-type")?.includes("application/json") && null != u ? u : new i.c(t, e.status, m, y, b, e.headers.get("cf-ray") ?? void 0, e.headers.get("x-oai-request-id") ?? void 0), a.boolean().safeParse(m.retryable).data ?? a.object({
                        retryable: a.boolean().optional()
                    }).safeParse(m.detail).data?.retryable);
                k.isCloudflareChallenge = v, k.requestDiagnostics = (0, o.b)(e), k.failureOrigin = "http_response", k.diagnostics = (0, i.e)(k.diagnosticError ?? k, e), k.azureErrorCode = d(e.headers.get("x-ms-error-code"));
                let I = e.headers.get("x-oai-history-initial-retry-after"),
                    x = null == I ? 0 / 0 : Number(I);
                return Number.isFinite(x) && x >= 0 && (k.historyInitialRetryAtMs = Date.now() + 1e3 * x), k
            },
            b: d,
            c: l,
            d: c,
            e: function(e) {
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
        var n = r("I07G"),
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
                        }, h = (0, n.Le)(p);
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
                                    let e = new d.FetchError("File upload failed", n.status, void 0, n.status > 0 ? n.status : null, void 0, (0, d.c)(n.getResponseHeader("Retry-After")));
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
                if (r.onResponseHeaders?.(t.headers, t.status), !t.ok && !r.returnErrorResponse) throw await (0, d.a)(t, e);
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
                    m = e => {
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
                    w = (e, n) => {
                        clearTimeout(r), e > 0 && (r = setTimeout(() => {
                            h.aborted || m({
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
                                        m = (e, r) => {
                                            clearTimeout(t), e > 0 && (t = setTimeout(() => {
                                                let t = new d.FetchError("Network error", 500, r, null, "network", void 0, (0, i.d)(c.url, 400, i.b, Error(`SSE ${"stream_open_timeout"===r?"open":"idle"} timeout after ${e}ms`), r));
                                                t.failureOrigin = "timeout", h.abort(t)
                                            }, e))
                                        };
                                    try {
                                        if (null != r && m(r.initialOpenTimeoutMs ?? 6e4, "stream_open_timeout"), p = await (0, n.mf)((0, s.a)(c, g, void 0, r?.onBeforeRequestStart, r?.assertRequestCurrent, null == o ? void 0 : () => o.refreshRequest(g), r?.refreshHeadersBeforeAuthRetry, u), g), l.throwIfAborted(), null != r && m(r.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), f = p.ok && (null == r || p.headers.get("content-type")?.includes("text/event-stream") === !0), a(p), l.throwIfAborted(), !f) throw await (0, n.mf)((0, d.a)(p, c.url, null != r), g);
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
                                        let a = await (0, n.mf)(o.refreshRequest(l), l);
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
                                        headers: (0, n.vg)(e.headers),
                                        isEventStream: e.ok && e.headers.get("content-type")?.includes("text/event-stream") === !0
                                    })
                                }
                            }), f) return;
                        if (h.throwIfAborted(), null != o.chatgptSse && w(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), null == a.body) throw new d.FetchError("Streaming response had no body.", 500, void 0, null, "network");
                        if ("ndjson" === o.format)
                            for await (let e of (0, n.Yj)(a.body, h)) {
                                if (h.aborted) break;
                                o.onEvent?.({
                                    type: "fetch-stream-event",
                                    requestId: l,
                                    data: e
                                })
                            } else {
                                let e = new TextEncoder;
                                for await (let r of (0, n._j)(a.body, h, t => {
                                    f || h.aborted || (null != o.chatgptSse && w(o.chatgptSse.idleTimeoutMs ?? 6e4, "stream_idle_timeout"), "[DONE]" === t && (c = "done"), o.onStreamData?.({
                                        eventBytes: e.encode(t).length,
                                        eventCount: +("[DONE]" !== t)
                                    }), "[DONE]" === t && null != o.chatgptSse && m({
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
                            clearTimeout(r), await o.onPrematureTermination?.(), h.throwIfAborted(), m({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: "Network error",
                                errorKind: "network",
                                failureOrigin: "transport",
                                diagnostics: (0, i.e)((0, i.d)(t, 400, i.b, Error("No done event received")), a)
                            });
                            return
                        }
                        m({
                            type: "fetch-stream-complete",
                            requestId: l,
                            reason: c
                        })
                    } catch (e) {
                        if (h.aborted || e instanceof Error && "AbortError" === e.name) m({
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
                            let c = e instanceof d.FetchError ? e.errorKind : (0, n.ug)(e),
                                u = null == o.chatgptSse ? void 0 : (e instanceof d.FetchError ? e.diagnostics : void 0) ?? (0, i.e)(s, a);
                            m({
                                type: "fetch-stream-error",
                                requestId: l,
                                error: e instanceof Error ? e.message : "HTTP stream failed",
                                responseStatus: e instanceof d.FetchError ? e.responseStatus ?? void 0 : void 0,
                                errorCode: e instanceof d.FetchError ? e.errorCode : void 0,
                                failureOrigin: (e instanceof d.FetchError ? e.failureOrigin : void 0) ?? ("network" === c ? "transport" : void 0),
                                canRetry: e instanceof Error ? (0, n.rj)(e.message) : void 0,
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
                    throw t?.throwIfAborted(), new d.FetchError(r instanceof Error ? r.message : "Failed to read response body", r instanceof Error && "AbortError" === r.name ? 499 : 500, void 0, e.status, (0, n.ug)(r))
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
            m = r("T1PX"),
            w = r("V8uZ");

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
        let v = (0, u.f)({
            openWebsite: {
                id: "codex.websitePreview.openWebsite",
                defaultMessage: "Open website"
            }
        });
        r.d(t, {}, {
            a: function(e) {
                let t, r, u, y, k, I, x, E, S, _, j, C = (0, a.c)(39),
                    {
                        href: T,
                        data: A,
                        openLink: M,
                        actions: R,
                        loadRemoteIcon: P
                    } = e,
                    O = void 0 !== P && P,
                    q = (0, c.a)(),
                    F = (0, m.a)(),
                    [W, N] = (0, l.useState)(null);
                C[0] !== T ? (t = URL.canParse(T) && new URL(T).hostname || T, C[0] = T, C[1] = t) : t = C[1];
                let B = t,
                    D = A?.status === "ready" && A.image?.dataUrl !== W ? A.image : null,
                    G = null != D && D.width / D.height < 1.2,
                    L = null != D && G && A?.status === "ready" && null == A.title && null == A.description,
                    $ = A?.status === "ready" && (null != A.title || null != A.description || null != D);
                C[2] !== T || C[3] !== O ? (r = (0, o.g)(T)?.appId === "google-drive" ? (0, n.jsx)(f.a, {
                    "aria-hidden": !0,
                    className: "size-4 shrink-0",
                    fileName: void 0,
                    libraryProvider: "google_drive",
                    mimeType: void 0,
                    size: 16,
                    sourceUrl: T
                }) : (0, n.jsx)(g.a, {
                    className: "size-4 shrink-0 text-secondary",
                    href: T,
                    loadRemote: O
                }), C[2] = T, C[3] = O, C[4] = r) : r = C[4], C[5] !== R || C[6] !== B || C[7] !== T || C[8] !== q ? (u = null != R ? (0, n.jsx)(p.a, {
                    className: "min-w-0 flex-1 truncate text-xs",
                    "aria-label": q.formatMessage(v.openWebsite),
                    appearance: "secondary",
                    href: T,
                    initiator: "markdown_link_click",
                    underline: "hover",
                    children: T
                }) : (0, n.jsx)("span", {
                    className: "min-w-0 flex-1 truncate text-xs text-secondary",
                    children: B
                }), C[5] = R, C[6] = B, C[7] = T, C[8] = q, C[9] = u) : u = C[9], C[10] !== R || C[11] !== T || C[12] !== q || C[13] !== M ? (y = null != R ? (0, n.jsx)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: R
                }) : M ?? (0, n.jsxs)(p.a, {
                    className: "flex shrink-0 items-center gap-1 text-xs",
                    "aria-label": q.formatMessage(v.openWebsite),
                    href: T,
                    initiator: "markdown_link_click",
                    children: [(0, n.jsx)(d.a, {
                        id: "codex.websitePreview.open",
                        defaultMessage: "Open"
                    }), (0, n.jsx)(h.Gf, {})]
                }), C[10] = R, C[11] = T, C[12] = q, C[13] = M, C[14] = y) : y = C[14], C[15] !== r || C[16] !== u || C[17] !== y ? (k = (0, n.jsxs)("div", {
                    className: "flex h-toolbar shrink-0 items-center gap-2 px-3.5 select-none",
                    children: [r, u, y]
                }), C[15] = r, C[16] = u, C[17] = y, C[18] = k) : k = C[18], C[19] !== A ? (I = null == A && (0, n.jsx)("span", {
                    className: "sr-only",
                    role: "status",
                    children: (0, n.jsx)(d.a, {
                        id: "codex.websitePreview.loading",
                        defaultMessage: "Loading preview…"
                    })
                }), C[19] = A, C[20] = I) : I = C[20];
                let z = $ ? "auto" : 0;
                return C[21] !== z ? (x = {
                    height: z
                }, C[21] = z, C[22] = x) : x = C[22], C[23] !== F ? (E = F ? {
                    duration: 0
                } : w.a, C[23] = F, C[24] = E) : E = C[24], C[25] !== A || C[26] !== $ || C[27] !== D || C[28] !== L || C[29] !== G ? (S = $ && (0, n.jsxs)("div", {
                    className: "flex min-h-0 flex-col overflow-y-auto overscroll-contain border-t border-subtle",
                    children: [null != D && !G && (0, n.jsx)(b, {
                        src: D.dataUrl,
                        width: D.width,
                        height: D.height,
                        presentation: "hero",
                        onError: () => N(D.dataUrl)
                    }, D.dataUrl), (null != A.title || null != A.description || G) && (0, n.jsxs)("div", {
                        className: (0, i.b)("flex gap-2.5 px-3.5 py-4", null == A.description ? "items-center" : "items-start", L && "justify-center"),
                        children: [null != D && G && (0, n.jsx)(b, {
                            src: D.dataUrl,
                            width: D.width,
                            height: D.height,
                            presentation: L ? "standalone" : "thumbnail",
                            onError: () => N(D.dataUrl)
                        }, D.dataUrl), (null != A.title || null != A.description) && (0, n.jsxs)("div", {
                            className: "flex min-w-0 flex-col gap-1",
                            children: [null != A.title && (0, n.jsx)("h3", {
                                className: "m-0 line-clamp-2 text-sm leading-snug font-semibold text-pretty break-words",
                                children: A.title
                            }), null != A.description && (0, n.jsx)("p", {
                                className: "m-0 line-clamp-2 text-sm leading-snug text-pretty break-words text-secondary",
                                children: A.description
                            })]
                        })]
                    })]
                }), C[25] = A, C[26] = $, C[27] = D, C[28] = L, C[29] = G, C[30] = S) : S = C[30], C[31] !== E || C[32] !== S || C[33] !== x ? (_ = (0, n.jsx)(s.a.div, {
                    className: "flex min-h-0 flex-col overflow-hidden",
                    initial: !1,
                    animate: x,
                    transition: E,
                    children: S
                }), C[31] = E, C[32] = S, C[33] = x, C[34] = _) : _ = C[34], C[35] !== _ || C[36] !== k || C[37] !== I ? (j = (0, n.jsxs)("div", {
                    className: "flex max-h-[min(--spacing(80),var(--radix-tooltip-content-available-height,--spacing(80)))] min-h-0 w-90 max-w-full flex-col overflow-hidden rounded-xl text-start text-sm font-normal",
                    children: [k, I, _]
                }), C[35] = _, C[36] = k, C[37] = I, C[38] = j) : j = C[38], j
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
            o = r("slpy"),
            i = r("BolX"),
            s = r("zd8w"),
            l = r("OWtl"),
            c = r("dDbp"),
            d = r("xOEs"),
            u = r("OnvC");
        r.d(t, {}, {
            a: function(e) {
                let t, r, p, h, g, f, m, w = (0, a.c)(22),
                    {
                        href: b,
                        hostId: v,
                        pullRequest: y,
                        children: k,
                        content: I,
                        delayDuration: x
                    } = e,
                    E = void 0 === x ? 700 : x,
                    S = (0, i.y)(l.a),
                    _ = (0, s.useRef)(null),
                    [j, C] = (0, s.useState)(!1),
                    [T, A] = (0, s.useState)("bottom");
                return w[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => () => _.current?.(), w[0] = t) : t = w[0], w[1] !== v || w[2] !== b ? (r = [b, v], w[1] = v, w[2] = b, w[3] = r) : r = w[3], (0, s.useEffect)(t, r), w[4] !== v || w[5] !== b || w[6] !== y || w[7] !== S ? (p = e => {
                    "touch" !== e.pointerType && 0 === e.buttons && (_.current?.(), A((0, c.a)(e.currentTarget)), _.current = (0, d.a)(S, b, e.currentTarget, {
                        hostId: v,
                        pullRequest: y
                    }))
                }, w[4] = v, w[5] = b, w[6] = y, w[7] = S, w[8] = p) : p = w[8], w[9] === Symbol.for("react.memo_cache_sentinel") ? (h = () => _.current?.(), w[9] = h) : h = w[9], w[10] !== k || w[11] !== p ? (g = (0, n.jsx)(o.a.Trigger, {
                    onPointerEnter: p,
                    onPointerLeave: h,
                    children: k
                }), w[10] = k, w[11] = p, w[12] = g) : g = w[12], w[13] !== I || w[14] !== b || w[15] !== T ? (f = (0, n.jsx)(o.a.Content, {
                    "aria-label": b,
                    align: "start",
                    side: T,
                    sideOffset: 4,
                    maxWidth: 360,
                    className: u.a.surface,
                    children: I
                }), w[13] = I, w[14] = b, w[15] = T, w[16] = f) : f = w[16], w[17] !== E || w[18] !== j || w[19] !== g || w[20] !== f ? (m = (0, n.jsxs)(o.a.Root, {
                    open: j,
                    onOpenChange: C,
                    delayDuration: E,
                    interactive: !0,
                    children: [g, f]
                }), w[17] = E, w[18] = j, w[19] = g, w[20] = f, w[21] = m) : m = w[21], m
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
            i = r("I07G"),
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
            let t = (0, i.rg)(e);
            return s.a.getOpenTabs().find(e => {
                if ((0, i.rg)(e.url) !== t) return !1;
                let r = s.a.getSnapshot(e.conversationId, e.browserTabId);
                return r?.tabType === i.ab.WEB && !r.isLoading && !r.isSuspended && s.a.pages.getHost(e.conversationId, e.browserTabId)?.getCaptureViewportSize() != null
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
            a: () => P
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
            m = r("FrrB"),
            w = r("Bbed"),
            b = r("QIeM"),
            v = r("GGR1"),
            y = r("zOE4"),
            k = r("aSkF"),
            I = r("Y94G"),
            x = r("sU1J"),
            E = r("YhE1"),
            S = r("qixt"),
            _ = r("HgkB"),
            j = r("snrm"),
            C = r("BolX"),
            T = r("OWtl"),
            A = r("tW82");

        function M(e) {
            let t, r = (0, a.c)(2),
                {
                    children: o
                } = e;
            return r[0] !== o ? (t = (0, n.jsx)(A.a, {
                children: (0, n.jsx)(C.b, {
                    scope: T.a,
                    children: o
                })
            }), r[0] = o, r[1] = t) : t = r[1], t
        }
        let R = (0, w.a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(100643), r.e(355084), r.e(352477), r.e(125386), r.e(40758), r.e(669446), r.e(191298)]).then(r.bind(r, "HpTl"))).PageEditor, {
            fallback: (0, n.jsx)(y.LoadingPage, {}),
            errorFallback: (0, n.jsx)(m.a, {
                title: (0, n.jsx)(l.a, {
                    id: "codex.canvas.inlinePage.loadError",
                    defaultMessage: "Couldn’t load this page"
                }),
                actions: (0, n.jsx)(h.a, {
                    color: "secondary",
                    onClick: () => window.location.reload(),
                    children: (0, n.jsx)(l.a, {
                        id: "codex.canvas.inlinePage.reload",
                        defaultMessage: "Reload"
                    })
                })
            })
        });

        function P(e) {
            let t, r, l, h, m, w, y, C, T, A, R, P, q, F, W, N, B, D = (0, a.c)(25),
                {
                    children: G,
                    loadingFallback: L
                } = e,
                [$, z] = (0, s.useState)(null);
            (0, I.c)("core_providers.render"), D[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(x.a, {}), l = (0, n.jsx)(g.a, {}), h = (0, n.jsx)(c.a, {}), m = (0, n.jsx)(p.a, {}), w = (0, n.jsx)(_.a, {}), y = (0, n.jsx)(S.c, {}), C = (0, n.jsx)(d.a, {}), T = (0, n.jsx)(f.a, {}), A = (0, n.jsx)(b.a, {}), r = (0, n.jsx)(n.Fragment, {
                children: (0, n.jsx)(E.a, {})
            }), D[0] = t, D[1] = r, D[2] = l, D[3] = h, D[4] = m, D[5] = w, D[6] = y, D[7] = C, D[8] = T, D[9] = A) : (t = D[0], r = D[1], l = D[2], h = D[3], m = D[4], w = D[5], y = D[6], C = D[7], T = D[8], A = D[9]), D[10] !== L ? (R = void 0 === L ? (0, n.jsx)(v.a, {
                debugName: "App content"
            }) : L, D[10] = L, D[11] = R) : R = D[11];
            let K = $ ?? void 0;
            D[12] !== G ? (P = (0, n.jsx)(i.a.Provider, {
                children: (0, n.jsx)(k.a, {
                    value: O,
                    children: G
                })
            }), D[12] = G, D[13] = P) : P = D[13], D[14] !== K || D[15] !== P ? (q = (0, n.jsx)(o.a, {
                radixPortalContainer: K,
                children: P
            }), D[14] = K, D[15] = P, D[16] = q) : q = D[16], D[17] !== R || D[18] !== q ? (F = (0, n.jsx)(s.Suspense, {
                fallback: R,
                children: q
            }), D[17] = R, D[18] = q, D[19] = F) : F = D[19], D[20] === Symbol.for("react.memo_cache_sentinel") ? (W = (0, n.jsx)("div", {
                ref: z,
                className: "pointer-events-none fixed inset-0 z-60 zoom-adjusted-viewport h-[calc(100dvh/var(--codex-window-zoom))] contain-layout [&>*]:pointer-events-auto"
            }), D[20] = W) : W = D[20], D[21] !== F ? (N = (0, n.jsxs)(n.Fragment, {
                children: [t, l, h, m, w, y, C, T, A, r, F, W]
            }), D[21] = F, D[22] = N) : N = D[22];
            let U = N;
            return D[23] !== U ? (B = (0, n.jsx)(u.a, {
                children: (0, n.jsx)(j.a, {
                    children: (0, n.jsx)(M, {
                        children: U
                    })
                })
            }), D[23] = U, D[24] = B) : B = D[24], B
        }

        function O(e) {
            return (0, n.jsx)(R, {
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
            a = r("I07G"),
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
                } = e;
                return t(o.a, {
                    name: "work.cloud-orchestration.preferences"
                }).isCapable && "allowed" === t(s.v).status
            }),
            g = (0, n.c)(c.a, e => {
                let {
                    get: t
                } = e, r = t(i.f), n = t(i.k);
                return t(h) && "allowed" === t(i.l).status && null != r && null != n ? {
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
                        let i = await u.CodexRequest.safeGet("/wham/work/settings", {
                            expectedIdentity: o,
                            additionalHeaders: {
                                [a.bc]: o.accountId
                            },
                            signal: t
                        });
                        if (null == i.settings) {
                            let {
                                readInitialWorkPreferences: e
                            } = await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(289049)]).then(r.bind(r, "E6WR")), s = await e(n), l = n.get(g);
                            if (t.aborted || l?.accountId !== o.accountId || l.userId !== o.userId) throw new DOMException("Work account changed", "AbortError");
                            try {
                                i = await u.CodexRequest.safePatch("/wham/work/settings", {
                                    expectedIdentity: o,
                                    additionalHeaders: {
                                        [a.bc]: o.accountId
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
                                        [a.bc]: o.accountId
                                    },
                                    signal: t
                                })
                            }
                        }
                        return {
                            ...i,
                            settings: null == i.settings ? null : (0, a.zh)().schema.parse(i.settings)
                        }
                    },
                    staleTime: d.b.ONE_MINUTE,
                    refetchOnWindowFocus: "always",
                    retry: !1
                }
            }),
            m = (0, n.p)(c.a, e => {
                let {
                    get: t,
                    scope: r
                } = e, n = t(g);
                return {
                    mutationKey: ["update-work-preferences", n?.accountId, n?.userId],
                    mutationFn: e => r.queryClient.getMutationCache().build(r.queryClient, {
                        scope: {
                            id: JSON.stringify(["work-preferences", n?.accountId, n?.userId])
                        },
                        retry: !1,
                        mutationFn: async () => {
                            let t = r.query.snapshot(f),
                                o = r.get(g);
                            if (null == n || o?.accountId !== n.accountId || o.userId !== n.userId) throw new DOMException("Work preferences unavailable", "AbortError");
                            let i = await t.getOrFetch();
                            await t.cancel();
                            let s = r.get(g);
                            if (s?.accountId !== n.accountId || s.userId !== n.userId) throw new DOMException("Work preferences unavailable", "AbortError");
                            let c = await u.CodexRequest.safePatch("/wham/work/settings", {
                                expectedIdentity: n,
                                additionalHeaders: {
                                    [a.bc]: n.accountId
                                },
                                requestBody: {
                                    expected_revision: i.revision,
                                    settings: e
                                },
                                expectedErrorStatuses: [409]
                            });
                            t.setData({
                                ...c,
                                settings: null == c.settings ? null : (0, a.zh)().schema.parse(c.settings)
                            }), (0, l.a)(["work-preferences", n.accountId, n.userId])
                        }
                    }).execute(void 0)
                }
            });
        r.d(t, {}, {
            a: function(e) {
                let t = e.get(g);
                if (null == t) return;
                let r = e.get(f);
                if (void 0 === r.data || r.isStale) return e.query.fetch(f).then(() => {
                    let r = e.get(g);
                    if (r?.accountId !== t.accountId || r.userId !== t.userId) throw new DOMException("Work account changed", "AbortError")
                })
            },
            b: m,
            c: f,
            d: g
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
            o = r("I07G"),
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
                let n = (0, o.if)("function" == typeof crypto?.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`),
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
                    t = await (null == e.signal ? r : (0, o.mf)(r, e.signal))
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
                if (!t(s.e, l.a)) return t(s.h, l.a) ? null : u;
                let r = t(a.m);
                if (r.authLoading && null == r.authMethod || r.accountLoading && (null == r.accountId || null == r.accountStructure)) return null;
                if ("chatgpt" !== r.authMethod || "workspace" !== r.accountStructure || null == r.accountId || r.accountId !== r.authenticatedAccountId) return u;
                if (t(s.e, c)) return p;
                if (t(s.h, c)) return null;
                let n = t(s.e, d);
                if (!n && t(s.h, d)) return null;
                let i = t(o.m, r.accountId);
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
            m = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(h)?.canShare ?? null
            }),
            w = (0, n.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(h)?.canPublishToDirectory ?? null
            });
        r.d(t, {}, {
            a: g,
            b: f,
            c: w,
            d: m
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
                defaultMessage: "Loading agents"
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
                    defaultMessage: "Keep work moving 24/7 with agents"
                }), r = (0, n.jsx)(o.a, {
                    id: "workspaceAgents.index.pageTitle",
                    defaultMessage: "Agents"
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
                    defaultMessage: "Ask {agentName}"
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
        let m = (0, n.r)(s.a, e => {
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
            w = (0, n.d)(s.a, (e, t) => {
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
                    n = t(m).data;
                for (let e of t(p)) e.accountId === r && (n = v(n, e.agent, e.isPinned));
                return n
            });

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
                            }), e.queryClient.setQueryData(o, e => v(e, t, c.is_pinned)), i = e, s = n, l = o, i.set(g, {
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
            b: w,
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
            m = r("ifdJ"),
            w = r("Pagv"),
            b = r("tYw1");
        let v = (0, p.a)(() => Promise.all([r.e(753405), r.e(148552)]).then(r.bind(r, "xm0K")).then(e => e.WorkspaceAgentGraphic), {
            fallback: (0, n.jsx)(u.bh, {}),
            errorFallback: (0, n.jsx)(u.bh, {})
        });

        function y() {
            let e, t, r, l = (0, a.c)(11),
                c = (0, o.y)(s.a),
                p = (0, i.a)(),
                y = (0, o.z)(b.c),
                {
                    pathname: I
                } = (0, d.Y)(),
                x = (0, d._)();
            l[0] !== p ? (e = p.formatMessage({
                id: "workspaceAgents.sidebar.unpin",
                defaultMessage: "Unpin agent"
            }), l[0] = p, l[1] = e) : e = l[1];
            let E = e;
            return l[2] !== y || l[3] !== p || l[4] !== x || l[5] !== I || l[6] !== c || l[7] !== E ? (t = y?.map(e => {
                let t = (0, w.p)(e.id);
                return (0, n.jsx)(f.a, {
                    className: "group gap-1",
                    icon: null == e.icon ? (0, n.jsx)(u.ah, {}) : (0, n.jsx)(v, {
                        icon: e.icon,
                        size: 20
                    }),
                    interactiveTrailing: (0, n.jsx)("span", {
                        className: "pointer-events-none opacity-0 group-focus-within:pointer-events-auto group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:opacity-100",
                        children: (0, n.jsx)(m.a, {
                            ariaLabel: E,
                            isPinned: !0,
                            onPin: k,
                            onUnpin: () => {
                                (0, b.a)(c, e, !1).catch(() => {
                                    c.get(h.f).danger(p.formatMessage({
                                        id: "workspaceAgents.sidebar.unpinFailed",
                                        defaultMessage: "Failed to unpin agent"
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
            }), l[2] = y, l[3] = p, l[4] = x, l[5] = I, l[6] = c, l[7] = E, l[8] = t) : t = l[8], l[9] !== t ? (r = (0, n.jsx)(n.Fragment, {
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
                    titleActions: m
                } = e,
                w = (0, o.y)(s.a),
                b = (0, o.z)(I),
                v = (0, i.a)();
            u[0] !== v || u[1] !== g ? (t = g ?? v.formatMessage({
                id: "sidebarElectron.aeonThreads.v2",
                defaultMessage: "Agents"
            }), u[0] = v, u[1] = g, u[2] = t) : t = u[2];
            let k = t,
                x = b && !(void 0 !== h && h);
            return u[3] !== b || u[4] !== w ? (r = () => w.set(I, !b), u[3] = b, u[4] = w, u[5] = r) : r = u[5], u[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, n.jsx)(y, {}), u[6] = c) : c = u[6], u[7] !== p || u[8] !== k || u[9] !== f || u[10] !== x || u[11] !== r || u[12] !== m ? (d = (0, n.jsxs)(l.a, {
                collapsed: x,
                heading: "Agents",
                label: k,
                sectionKey: "agents",
                sectionReorderDnd: f,
                onCollapsedChange: r,
                titleActions: m,
                titleActionsOnHover: !0,
                children: [c, p]
            }), u[7] = p, u[8] = k, u[9] = f, u[10] = x, u[11] = r, u[12] = m, u[13] = d) : d = u[13], d
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
            d = (0, i.a)(() => Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(226913), r.e(11326)]).then(r.bind(r, "h3mc")).then(e => e.WorkspaceBanner));
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
                } = t(o.m, r);
                if (null == c || h(d)) return null;
                if (t(a.b)) {
                    if (!t(l.e, "3530939117") || !1 === c.workspace_banner_available || !c.beta_settings.workspace_fedramp_banner) return null;
                    let e = c.beta_settings_dict?.workspace_fedramp_banner_content;
                    return {
                        enabled: !0,
                        header: e?.classification?.trim() || t(i.a).formatMessage({
                            id: "workspaceBanner.fedrampClassification",
                            defaultMessage: "Current workspace is authorized for FedRAMP Moderate information"
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
            a: () => m
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
                                let n = e.get(h.g),
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

        function m(e) {
            let t, r, u, p = (0, a.c)(15),
                {
                    source: h,
                    children: m
                } = e,
                w = (0, o.y)(d.a),
                b = (0, o.z)(s.k),
                v = (0, o.z)(s.f),
                {
                    data: y
                } = (0, c.c)();
            p[0] !== v || p[1] !== y || p[2] !== b ? (t = !(0, l.a)() && null != b && null != v && f(y, v) ? {
                userId: b,
                accountId: v
            } : null, p[0] = v, p[1] = y, p[2] = b, p[3] = t) : t = p[3];
            let k = t,
                {
                    data: I,
                    isPending: x
                } = (0, o.x)(g, k);
            if (null != k && x) return null;
            if (null == k || null == I) {
                let e;
                return p[4] !== m ? (e = m(null), p[4] = m, p[5] = e) : e = p[5], e
            }
            p[6] !== I.variant ? (r = "join_workspace" === I.variant ? (0, n.jsx)(i.a, {
                id: "workspaceDiscovery.upgrade.button.findWorkspace",
                defaultMessage: "Join workspace"
            }) : (0, n.jsx)(i.a, {
                id: "workspaceDiscovery.upgrade.button.joinTeam",
                defaultMessage: "Join team"
            }), p[6] = I.variant, p[7] = r) : r = p[7];
            let E = r;
            return p[8] !== m || p[9] !== I || p[10] !== k || p[11] !== E || p[12] !== w || p[13] !== h ? (u = m({
                label: E,
                onClick: e => !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey && (I.open(w, k.userId, void 0, {
                    ...k,
                    source: h
                }), !0)
            }), p[8] = m, p[9] = I, p[10] = k, p[11] = E, p[12] = w, p[13] = h, p[14] = u) : u = p[14], u
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
            m = r("hZax");

        function w(e) {
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
            let t, r, s, l, d, g, m, w, b, v, k, I = (0, a.c)(31),
                {
                    policyText: x,
                    error: E,
                    action: S,
                    acknowledgeRef: _
                } = e,
                [j, C] = (0, o.useState)(!1),
                [T, A] = (0, o.useState)(!1),
                M = (0, o.useId)(),
                R = (0, o.useRef)(null),
                P = (0, o.useRef)(null),
                O = j ? "none" : "mask";
            I[0] !== _ || I[1] !== j ? (t = e => {
                j || (e || document.activeElement !== P.current || _.current?.focus(), A(e))
            }, I[0] = _, I[1] = j, I[2] = t) : t = I[2];
            let q = j ? "min-h-0 flex-1 overflow-y-auto" : "max-h-40 overflow-hidden";
            return I[3] !== T ? (r = () => {
                T && C(!0)
            }, I[3] = T, I[4] = r) : r = I[4], I[5] !== M || I[6] !== r ? (s = {
                id: M,
                ref: R,
                onFocusCapture: r
            }, I[5] = M, I[6] = r, I[7] = s) : s = I[7], I[8] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                a: y
            }, d = {
                kind: "inherit"
            }, I[8] = l, I[9] = d) : (l = I[8], d = I[9]), I[10] !== x ? (g = (0, n.jsx)(f.a, {
                components: l,
                textStyle: d,
                className: "[--markdown-font-size:var(--text-document)]! [--markdown-line-height:22px]!",
                children: x
            }), I[10] = x, I[11] = g) : g = I[11], I[12] !== O || I[13] !== t || I[14] !== q || I[15] !== s || I[16] !== g ? (m = (0, n.jsx)(u.e, {
                spacing: "large",
                className: "min-h-0 flex-1",
                children: (0, n.jsx)(h.a, {
                    className: "relative flex min-h-0 flex-1 flex-col",
                    fade: O,
                    onOverflowChange: t,
                    scrollClassName: q,
                    scrollProps: s,
                    children: g
                })
            }), I[12] = O, I[13] = t, I[14] = q, I[15] = s, I[16] = g, I[17] = m) : m = I[17], I[18] !== E ? (w = null != E ? (0, n.jsx)(u.e, {
                children: E
            }) : null, I[18] = E, I[19] = w) : w = I[19], I[20] !== M || I[21] !== j || I[22] !== T ? (b = T ? (0, n.jsxs)(c.a, {
                ref: P,
                className: "me-auto",
                size: "takeoverHeroAction",
                color: "ghostSecondary",
                type: "button",
                "aria-controls": M,
                "aria-expanded": j,
                onClick: () => {
                    null != R.current && (R.current.scrollTop = 0), C(!j)
                },
                children: [(0, n.jsx)(p.bc, {
                    className: j ? "size-4 rotate-180" : "size-4",
                    "aria-hidden": !0
                }), j ? (0, n.jsx)(i.a, {
                    id: "workspacePolicy.showLess",
                    defaultMessage: "Show less"
                }) : (0, n.jsx)(i.a, {
                    id: "workspacePolicy.showMore",
                    defaultMessage: "Show more"
                })]
            }) : null, I[20] = M, I[21] = j, I[22] = T, I[23] = b) : b = I[23], I[24] !== S || I[25] !== b ? (v = (0, n.jsx)(u.e, {
                spacing: "large",
                children: (0, n.jsxs)(u.c, {
                    expandSingleButton: !1,
                    children: [b, S]
                })
            }), I[24] = S, I[25] = b, I[26] = v) : v = I[26], I[27] !== w || I[28] !== v || I[29] !== m ? (k = (0, n.jsxs)(n.Fragment, {
                children: [m, w, v]
            }), I[27] = w, I[28] = v, I[29] = m, I[30] = k) : k = I[30], k
        }

        function y(e) {
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
                let t, r, s, l, p, h, g, k, I, x, E, S, _ = (0, a.c)(37),
                    {
                        workspaceName: j,
                        workspaceLogoUrl: C,
                        policyText: T,
                        pending: A,
                        error: M,
                        onAcknowledge: R
                    } = e,
                    P = void 0 !== A && A,
                    O = void 0 !== M && M,
                    q = (0, o.useRef)(null),
                    F = (0, m.f)("2469870962");
                _[0] !== O ? (t = O ? (0, n.jsx)("p", {
                    role: "alert",
                    children: (0, n.jsx)(i.a, {
                        id: "workspacePolicy.error",
                        defaultMessage: "Couldn’t complete the workspace policy acknowledgment. Please try again."
                    })
                }) : null, _[0] = O, _[1] = t) : t = _[1];
                let W = t,
                    N = F ? "takeoverHeroAction" : "default";
                _[2] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(i.a, {
                    id: "workspacePolicy.acknowledge",
                    defaultMessage: "Acknowledge"
                }), _[2] = r) : r = _[2], _[3] !== P || _[4] !== F || _[5] !== N ? (s = (0, n.jsx)(c.a, {
                    ref: q,
                    size: N,
                    autoFocus: F,
                    disabled: P,
                    loading: P,
                    type: "submit",
                    children: r
                }), _[3] = P, _[4] = F, _[5] = N, _[6] = s) : s = _[6];
                let B = s,
                    D = F ? "wide" : "xxxwideTall";
                _[7] === Symbol.for("react.memo_cache_sentinel") ? (l = {
                    onEscapeKeyDown: w
                }, _[7] = l) : l = _[7];
                let G = F ? "scrollable" : "full";
                _[8] !== R || _[9] !== P ? (p = e => {
                    e.preventDefault(), P || R()
                }, _[8] = R, _[9] = P, _[10] = p) : p = _[10];
                let L = F ? "gap-3" : void 0;
                _[11] !== F || _[12] !== C || _[13] !== j ? (h = F ? (0, n.jsx)(b, {
                    name: j,
                    url: C
                }) : null, _[11] = F, _[12] = C, _[13] = j, _[14] = h) : h = _[14];
                let $ = F ? "text-heading-sm leading-[26px] font-semibold sm:text-heading-md sm:leading-7" : void 0;
                return _[15] !== j ? (g = null != j ? (0, n.jsx)(i.a, {
                    id: "workspacePolicy.welcome",
                    defaultMessage: "Welcome to the {workspaceName} workspace",
                    values: {
                        workspaceName: j
                    }
                }) : (0, n.jsx)(i.a, {
                    id: "workspacePolicy.title",
                    defaultMessage: "Workspace policy"
                }), _[15] = j, _[16] = g) : g = _[16], _[17] !== $ || _[18] !== g ? (k = (0, n.jsx)(u.d, {
                    className: "select-none",
                    title: (0, n.jsx)(d.e, {
                        className: $,
                        children: g
                    })
                }), _[17] = $, _[18] = g, _[19] = k) : k = _[19], _[20] !== L || _[21] !== h || _[22] !== k ? (I = (0, n.jsxs)(u.e, {
                    className: L,
                    children: [h, k]
                }), _[20] = L, _[21] = h, _[22] = k, _[23] = I) : I = _[23], _[24] !== B || _[25] !== T || _[26] !== F || _[27] !== W ? (x = F ? (0, n.jsx)(v, {
                    policyText: T,
                    error: W,
                    action: B,
                    acknowledgeRef: q
                }, T) : (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)(u.e, {
                        className: "min-h-0 flex-1 overflow-y-auto",
                        children: [(0, n.jsx)(f.a, {
                            components: {
                                a: y
                            },
                            textStyle: {
                                kind: "small"
                            },
                            children: T
                        }), W]
                    }), (0, n.jsx)(u.e, {
                        children: (0, n.jsx)(u.c, {
                            expandSingleButton: !1,
                            children: B
                        })
                    })]
                }), _[24] = B, _[25] = T, _[26] = F, _[27] = W, _[28] = x) : x = _[28], _[29] !== p || _[30] !== I || _[31] !== x || _[32] !== G ? (E = (0, n.jsxs)(u.b, {
                    as: "form",
                    size: G,
                    onSubmit: p,
                    children: [I, x]
                }), _[29] = p, _[30] = I, _[31] = x, _[32] = G, _[33] = E) : E = _[33], _[34] !== E || _[35] !== D ? (S = (0, n.jsx)(d.a, {
                    open: !0,
                    shouldIgnoreClickOutside: !0,
                    showDialogClose: !1,
                    size: D,
                    contentProps: l,
                    children: E
                }), _[34] = E, _[35] = D, _[36] = S) : S = _[36], S
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
            return t(o.g)?.getFeatureGate("1516934498", {
                disableExposureLog: !0
            }) ?? null
        }, e => {
            let {
                get: t,
                set: r
            } = e, n = t(o.g);
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
                defaultMessage: "Couldn’t load workspace settings"
            }), r = (0, n.jsx)(s.a, {
                id: "workspacePolicy.loadError.description",
                defaultMessage: "Retry to continue chatting"
            }), l[0] = t, l[1] = r) : (t = l[0], r = l[1]), l[2] === Symbol.for("react.memo_cache_sentinel") ? (o = (0, n.jsx)(s.a, {
                id: "workspacePolicy.loadError.retry",
                defaultMessage: "Retry"
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
                    m = (0, i.y)(h.a);
                u[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    chat: g.g,
                    work: g.c,
                    codex: g.b
                }, u[0] = t) : t = u[0];
                let w = t[void 0 === p ? "chat" : p],
                    b = (0, i.z)(w);
                u[1] !== w || u[2] !== m ? (r = {
                    mutationFn: async () => {
                        let e = m.get(w);
                        "account-error" === e.status ? await m.queryClient.refetchQueries({
                            queryKey: m.query.getOptions(d.b, m.get(l.f)).queryKey,
                            exact: !0
                        }, {
                            throwOnError: !0
                        }) : "error" === e.status && await Promise.all([m.query.invalidate(c.m, e.accountId), null == e.identity ? void 0 : m.query.invalidate(g.h, e.identity)])
                    }
                }, u[1] = w, u[2] = m, u[3] = r) : r = u[3];
                let {
                    mutate: v,
                    isPending: y
                } = (0, o.a)(r);
                if ("error" !== b.status && "account-error" !== b.status && !(y && ("loading" === b.status || "checking-eligibility" === b.status))) return null;
                let k = y || "error" === b.status && b.isFetching;
                return u[4] !== v || u[5] !== k ? (s = (0, n.jsx)(f, {
                    pending: k,
                    onRetry: v
                }), u[4] = v, u[5] = k, u[6] = s) : s = u[6], s
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

        function m(e) {
            let t, r, c, u, p, h = (0, a.c)(16),
                {
                    surface: m,
                    availability: v,
                    announcementSourceId: y
                } = e,
                k = void 0 === m ? "chat" : m,
                I = void 0 === v ? "available" : v,
                {
                    key: x
                } = (0, i.Y)();
            h[0] !== I || h[1] !== k ? (t = "available" === I ? ({
                chat: f.g,
                work: f.c,
                codex: f.b
            })[k] : null, h[0] = I, h[1] = k, h[2] = t) : t = h[2];
            let E = (0, o.z)(t),
                S = (0, d.i)(g.a);
            h[3] !== E || h[4] !== S ? (r = E?.status !== "required" || S ? null : (0, n.jsx)(b, {
                ...E
            }, E.identity.accountId + E.identity.userId), h[3] = E, h[4] = S, h[5] = r) : r = h[5];
            let _ = r;
            h[6] !== y || h[7] !== x || h[8] !== k ? (c = y ?? ("chat" === k ? (0, l.c)(x) : null), h[6] = y, h[7] = x, h[8] = k, h[9] = c) : c = h[9];
            let j = c;
            if (null == j) return _;
            let C = "unavailable" === I || E?.status === "hidden" ? "ineligible" : "loading";
            return h[10] !== j || h[11] !== C ? (u = (0, n.jsx)(s.a, {
                source: "workspace-policy",
                candidate: {
                    id: j,
                    status: C,
                    render: w
                }
            }), h[10] = j, h[11] = C, h[12] = u) : u = h[12], h[13] !== _ || h[14] !== u ? (p = (0, n.jsxs)(n.Fragment, {
                children: [u, _]
            }), h[13] = _, h[14] = u, h[15] = p) : p = h[15], p
        }

        function w() {
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
            } = (0, c.f)(void 0, t), {
                isPending: m,
                isError: w
            } = (0, o.x)(f.a, l), b = g?.id === l.accountId ? g.name : void 0, v = g?.id === l.accountId ? g.profile_picture_url : void 0;
            return s[1] !== l || s[2] !== d || s[3] !== u ? (r = () => {
                let e = u.get(f.a, l);
                e.isPending || e.mutate(d)
            }, s[1] = l, s[2] = d, s[3] = u, s[4] = r) : r = s[4], s[5] !== w || s[6] !== m || s[7] !== d || s[8] !== b || s[9] !== v || s[10] !== r ? (i = (0, n.jsx)(h.a, {
                workspaceName: b,
                workspaceLogoUrl: v,
                policyText: d,
                pending: m,
                error: w,
                onAcknowledge: r
            }), s[5] = w, s[6] = m, s[7] = d, s[8] = b, s[9] = v, s[10] = r, s[11] = i) : i = s[11], i
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o = (0, a.c)(2),
                    {
                        isWorkConversation: i,
                        hasConversationContent: s,
                        hasLoadError: l
                    } = e;
                return t = i ? "unavailable" : s ? "available" : l ? "unavailable" : "pending", o[0] !== t ? (r = (0, n.jsx)(m, {
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
                return s[0] !== c || s[1] !== d || s[2] !== p ? (t = (0, l.e)(d, p, c), s[0] = c, s[1] = d, s[2] = p, s[3] = t) : t = s[3], s[4] !== c || s[5] !== h || s[6] !== t ? (r = (0, n.jsx)(m, {
                    surface: c,
                    availability: h,
                    announcementSourceId: t
                }), s[4] = c, s[5] = h, s[6] = t, s[7] = r) : r = s[7], r
            },
            c: m
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
                        identity: m,
                        policyText: w,
                        onClose: b
                    } = e,
                    v = (0, o.y)(c.a),
                    y = (0, o.z)(s.f),
                    k = (0, o.z)(s.k);
                f[0] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                    preview: !1
                }, f[0] = t) : t = f[0];
                let {
                    data: I
                } = (0, l.f)(void 0, t), {
                    isPending: x,
                    isError: E
                } = (0, o.x)(u.a, m), S = y === m.accountId && k === m.userId;
                if (f[1] !== S || f[2] !== b ? (r = () => {
                        S || b()
                    }, p = [S, b], f[1] = S, f[2] = b, f[3] = r, f[4] = p) : (r = f[3], p = f[4]), (0, i.useEffect)(r, p), !S) return null;
                let _ = I?.id === m.accountId ? I.name : void 0,
                    j = I?.id === m.accountId ? I.profile_picture_url : void 0;
                return f[5] !== m || f[6] !== b || f[7] !== w || f[8] !== v ? (h = () => {
                    let e = v.get(u.a, m);
                    e.isPending || e.mutate(w, {
                        onSuccess: () => {
                            v.get(s.f) === m.accountId && v.get(s.k) === m.userId && b()
                        }
                    })
                }, f[5] = m, f[6] = b, f[7] = w, f[8] = v, f[9] = h) : h = f[9], f[10] !== E || f[11] !== x || f[12] !== w || f[13] !== _ || f[14] !== j || f[15] !== h ? (g = (0, n.jsx)(d.a, {
                    workspaceName: _,
                    workspaceLogoUrl: j,
                    policyText: w,
                    pending: x,
                    error: E,
                    onAcknowledge: h
                }), f[10] = E, f[11] = x, f[12] = w, f[13] = _, f[14] = j, f[15] = h, f[16] = g) : g = f[16], g
            }
        })
    }),
    CsbC: (function(e, t, r) {
        r.d(t, {
            a: () => y,
            b: () => E,
            c: () => x,
            d: () => j,
            e: () => C,
            f: () => S,
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
                            ..._(r, e)
                        }), l.Request.safeGet("/accounts/{account_id}/workspace_policy/acknowledge", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            ..._(r, e)
                        })]);
                        return {
                            policy: t,
                            acknowledgment: n
                        }
                    }
                }
            }),
            m = (0, a.v)(u.a, e => null);

        function w(e) {
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
                } = t, a = w(e), o = () => {
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
            v = (0, a.d)(u.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (r(s.m, e).data?.beta_settings_str?.workspace_policy_cadence !== "every_login") return null;
                let n = (0, i.getBrowserChatGptAuthSnapshot)();
                return null == n ? null : (0, i.readChatGptTokenClaims)(n.accessToken)?.sessionId ?? ("token" === n.source ? null : (0, c.getClientBootstrap)().sessionCookieContext?.epoch ?? null)
            }),
            y = (0, a.o)(u.a, (e, t) => {
                let {
                    scope: r
                } = t;
                return {
                    mutationFn: async t => {
                        if (r.get(o.f) !== e.accountId || r.get("work" === e.surface ? o.j : o.k) !== e.userId) throw Error("Workspace policy identity changed");
                        (0, d.a)(r, n.Zd, {});
                        let a = r.get(v, e.accountId);
                        return await l.Request.safePost("/accounts/{account_id}/workspace_policy/acknowledge", {
                            parameters: {
                                path: {
                                    account_id: e.accountId
                                }
                            },
                            requestBody: {
                                policy_hash: g(t)
                            },
                            ..._(r, e)
                        }), a
                    },
                    onSuccess: (t, n) => {
                        let a = g(n);
                        if (null != t) try {
                            window.localStorage.setItem(w(e), `${t}:${a}`)
                        } catch {}
                        r.set(m, {
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
                let l = r(s.m, a);
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
                        isFetching: w
                    } = r(f, c);
                if (u || p && h) return {
                    status: "error",
                    accountId: a,
                    identity: c,
                    isFetching: w
                };
                if (null == d) return {
                    status: "checking-policy"
                };
                let y = d.policy.workspace_policy,
                    k = g(y),
                    I = r(v, a);
                return !y || r(m, {
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
                }(y, l.data.beta_settings_str?.workspace_policy_cadence, d.acknowledgment, Date.now()) ? {
                    status: "hidden"
                } : {
                    status: "required",
                    identity: c,
                    policyText: y
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
            E = (0, a.c)(u.a, e => {
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
            S = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e, {
                    status: r
                } = t(E);
                return "hidden" !== r && "checking-eligibility" !== r && "checking-policy" !== r
            });

        function _(e, t) {
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
        let j = (0, a.c)(u.a, e => {
                let {
                    get: t
                } = e, {
                    status: r
                } = t(I);
                return "hidden" !== r && "checking-eligibility" !== r && "checking-policy" !== r
            }),
            C = (0, a.c)(u.a, e => {
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
        var n = r("I07G"),
            a = r("E8Sp");
        r.d(t, {}, {
            a: function(e, t, r) {
                (0, a.d)(e, (0, n.ee)(t.clientThreadId), null == r ? void 0 : {
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
            a: () => $
        });
        var n = r("ABep"),
            a = r("QosV"),
            o = r("UUMA"),
            i = r("irkb"),
            s = r("HVBu"),
            l = r.n(s),
            c = r("BolX"),
            d = r("I07G"),
            u = r("zd8w"),
            p = r("Wf1j"),
            h = r("tl5a"),
            g = r("z0li"),
            f = r("NVPY"),
            m = r("odKs"),
            w = r("HmRF"),
            b = r("d9i7"),
            v = r("SGsN"),
            y = r("kfg4"),
            k = r("rDNP"),
            I = r("yGJW"),
            x = r("s37w"),
            E = r("OWtl"),
            S = r("ndjw"),
            _ = r("kl6F"),
            j = r("Tsvt"),
            C = r("WFY2"),
            T = r("HK0a"),
            A = r("t162"),
            M = r("Dgwo"),
            R = r("HScd"),
            P = r("xrGx"),
            O = r("QX7Q"),
            q = r("OCQL"),
            F = r("QYK3"),
            W = r("hgea"),
            N = r("PsRa"),
            B = r("QVfH");

        function D(e) {
            return (e.labelEdited ? e.label : e.initialThreadTitle ?? "").trim()
        }
        var G = r("Vhua"),
            L = r("o27H");

        function $() {
            let e, t, r, s = (0, a.c)(24),
                $ = (0, c.y)(E.a),
                z = (0, i.c)(),
                K = (0, L.i)(),
                U = (0, B.g)(),
                {
                    dismissPendingWorktree: H
                } = (0, L.h)(),
                {
                    beginPendingWorktreeConversationStart: X,
                    failPendingWorktreeConversationStart: Q,
                    retainPendingWorktreeConversationStart: V,
                    removePendingWorktreeConversationStart: Y,
                    succeedPendingWorktreeConversationStart: J
                } = (0, B.f)(),
                Z = (0, x.a)(),
                ee = (0, p.a)();
            s[0] !== H || s[1] !== Q || s[2] !== ee || s[3] !== K || s[4] !== z || s[5] !== Z || s[6] !== Y || s[7] !== V || s[8] !== $ || s[9] !== J ? (e = async e => {
                let {
                    pendingWorktreeId: t,
                    workspaceRoot: r
                } = e, a = K.find(e => e.id === t);
                if (null == a) return void Y(t);
                let i = null != (0, B.c)($, a.id),
                    s = e => {
                        let t = $.get(G.a, a.clientThreadId ?? null);
                        t?.isPinned && null != a.clientThreadId && (0, j.a)($, a.clientThreadId, !0, t.pinnedBeforeThreadId), J(a.id, e), H(a.id)
                    },
                    c = null,
                    u = null,
                    p = a.hostId,
                    x = !1,
                    E = "start-conversation" === a.launchMode ? a.composerDraft?.context.workHomePolicyAcceptance : void 0,
                    U = null == a.conversationStartResult && null != E ? () => (0, T.a)($, E) : void 0,
                    X = l()(async () => {
                        null != c && await (0, k.a)({
                            scope: $,
                            hostId: p,
                            materialized: c
                        })
                    });
                try {
                    U?.();
                    let e = $.get(S.g, $.get(h.q)),
                        {
                            clientThreadId: n,
                            hostConfig: l
                        } = function(e, t, r) {
                            if (null == e.clientThreadId) throw Error("Pending worktree thread has no client thread id");
                            let n = function(e, t, r) {
                                if (null == e || e.hostId === t.id) return t;
                                let n = r?.find(t => t.hostId === e.hostId);
                                return null == n ? null : (0, d.ck)(n)
                            }(e, t, r);
                            if (null == n) throw Error(`Pending worktree host ${e.hostId} is unavailable`);
                            return {
                                clientThreadId: e.clientThreadId,
                                hostConfig: n
                            }
                        }(a, e, Z);
                    p = "start-conversation" === a.launchMode && "durable" === a.startConversationParamsInput.mode ? d.Yb : l.id, c = "start-conversation" === a.launchMode && null != a.threadGoalDraft ? await (0, k.c)({
                        scope: $,
                        draft: a.threadGoalDraft,
                        hostId: p,
                        assertRequestCurrent: U
                    }) : null;
                    let E = c?.objective;
                    U?.();
                    let j = await async function(e) {
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
                            let e, t = [i, ...(0, d.Eg)(a.sourceWorkspaceRoots)],
                                r = (e = null != a.targetTurnId ? await (0, R.a)(n, a.hostId, {
                                    sourceConversationId: a.sourceConversationId,
                                    targetTurnId: a.targetTurnId,
                                    clientThreadId: a.clientThreadId,
                                    cwd: i,
                                    projectAssignment: a.projectAssignment ?? null,
                                    workspaceRoots: t,
                                    collaborationMode: a.sourceCollaborationMode,
                                    threadSource: a.threadSource
                                }) : await (0, R.a)(n, a.hostId, {
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
                            } : (null != c && await (0, M.b)(n, a.hostId).addWorktreeInitSyntheticTurn(r, c), {
                                status: "created",
                                conversationId: r,
                                firstTurn: {
                                    status: "not-requested"
                                }
                            })
                        }
                        let u = (0, q.b)(n, a.openingPromptForHistory),
                            p = D(a),
                            h = (0, N.a)(a, o),
                            f = (0, B.c)(n, a.id),
                            m = async e => {
                                "created" === e.status && "accepted" === e.firstTurn.status && (u(e.conversationId), (0, W.a)(n, a.composerDraft?.context.sharedThreadAttributions, {
                                    threadId: e.conversationId,
                                    turnId: e.firstTurn.turnId
                                }));
                                try {
                                    await f?.onResult(e)
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
                            l?.(), r = await (0, g.b)(n, a.threadStartHostId ?? a.hostId, {
                                ...(0, O.a)({
                                    ...h,
                                    workspaceRoots: [i, ...(0, d.Eg)(h.workspaceRoots)],
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
                                    await m(e), await s?.(e)
                                },
                                worktreeInit: c ?? void 0
                            })
                        } catch (e) {
                            throw await m({
                                status: "failed",
                                message: e instanceof Error ? e.message : String(e)
                            }), e
                        }
                        return await m(r), r
                    }({
                        scope: $,
                        entry: a,
                        threadGoalObjective: E,
                        workspaceRoot: r,
                        assertRequestCurrent: U,
                        onSettled: async e => {
                            x && "failed" === e.status && await X(), (0, L.d)($, a.id, "failed" === e.status ? null : e), x && ("failed" === e.status ? Q(a.id) : "created" === e.status && ((0, _.b)($, {
                                clientThreadId: n,
                                conversationId: e.conversationId
                            }), (0, y.c)($, {
                                pendingWorktreeId: t,
                                targetConversationId: e.conversationId,
                                targetWorkspaceRoot: r
                            })))
                        }
                    });
                    if ((0, L.d)($, a.id, j), "outcome-unknown" === j.status) {
                        x = !0, V(a.id), $.get(v.f).danger((0, g.a)($, j)?.message, {
                            errorAnalytics: {
                                toastId: "pendingWorktreeConversationStarter.startPendingWorktreeConversationEvent"
                            }
                        });
                        return
                    }
                    u = j.conversationId, (0, _.b)($, {
                        clientThreadId: n,
                        conversationId: u
                    }), (0, y.c)($, {
                        pendingWorktreeId: t,
                        targetConversationId: u,
                        targetWorkspaceRoot: r
                    });
                    let T = (0, g.a)($, j);
                    if (null != T && (i && "outcome-unknown" !== j.firstTurn.status || $.get(v.f).danger(T.message, {
                            errorAnalytics: {
                                toastId: "pendingWorktreeConversationStarter.startPendingWorktreeConversationEvent"
                            }
                        }), "outcome-unknown" === j.firstTurn.status)) {
                        x = !0, V(a.id);
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
                        if (s.length > 0 && (await (0, M.b)(t, a.id).setThreadTitle(n, s, "start-conversation" === r.launchMode ? {
                                expectedTitle: (0, A.c)(s, 60)
                            } : {
                                onlyIfUntitled: i
                            }), (0, P.a)(t, a.id, n)), null != r.worktreeGitRoot) try {
                            await (0, F.a)().setOwnerThread({
                                hostId: a.id,
                                worktree: (0, d.Ze)(r.worktreeGitRoot),
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
                        "start-conversation" === r.launchMode && null != o && await (0, M.b)(t, r.threadStartHostId ?? a.id).setThreadGoal(n, {
                            appendTranscriptItem: !1,
                            objective: o
                        })
                    }({
                        scope: $,
                        entry: a,
                        conversationId: u,
                        hostConfig: l,
                        threadGoalObjective: E
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
                                ...(0, m.h)(e)
                            }), i.invalidateQueries({
                                queryKey: f.c
                            })
                        } catch (e) {
                            (0, I.a)(t, o.CodexAutomationEvent, {
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
                            }), t.get(v.f).danger(a.formatMessage({
                                id: "worktreeInitV2.heartbeatAutomationError",
                                defaultMessage: "Started chat, but could not create the heartbeat"
                            }), {
                                ...e instanceof Error && e.message === d.k ? (0, w.a)(t, a, e.message) : {},
                                errorAnalytics: {
                                    toastId: "worktreeInitV2.heartbeatAutomationError"
                                }
                            })
                        }
                    }({
                        scope: $,
                        conversationId: u,
                        heartbeatAutomation: a.heartbeatAutomation,
                        intl: ee,
                        queryClient: z
                    })]), "start-conversation" === a.launchMode && null != a.threadGoalDraft && await (0, k.b)({
                        scope: $,
                        draft: a.threadGoalDraft,
                        fallbackHostId: l.id
                    }), s(u)
                } catch (e) {
                    if (null != u) {
                        C.a.error("Worktree conversation started with incomplete metadata", {
                            safe: {
                                conversationId: u
                            },
                            sensitive: {
                                error: e
                            }
                        }), s(u);
                        return
                    }
                    if (await X(), Q(t), null != E && e instanceof Error && "AbortError" === e.name || (C.a.error("Error starting worktree conversation", {
                            safe: {},
                            sensitive: {
                                error: e
                            }
                        }), i)) return;
                    $.get(v.f).danger(ee.formatMessage({
                        id: "composer.localTaskError.v2",
                        defaultMessage: "Error starting chat{br}{error}"
                    }, {
                        br: (0, n.jsx)("br", {}),
                        error: (0, d.Zi)(e)
                    }), {
                        errorAnalytics: {
                            toastId: "composer.localTaskError.v2"
                        }
                    })
                }
            }, s[0] = H, s[1] = Q, s[2] = ee, s[3] = K, s[4] = z, s[5] = Z, s[6] = Y, s[7] = V, s[8] = $, s[9] = J, s[10] = e) : e = s[10];
            let et = (0, u.useEffectEvent)(e);
            return s[11] !== X || s[12] !== H || s[13] !== U || s[14] !== K || s[15] !== et ? (t = () => {
                U.forEach(e => {
                    if ("succeeded" === e.state) return void H(e.pendingWorktreeId);
                    let t = K.find(t => t.id === e.pendingWorktreeId);
                    "incomplete" === e.state && t?.conversationStartResult?.status === "created" && "outcome-unknown" !== t.conversationStartResult.firstTurn.status ? (0, B.a)(t.id) : "waiting" !== e.state || t?.phase !== "worktree-ready" || null == t.worktreeWorkspaceRoot || X(t.id) && et({
                        pendingWorktreeId: t.id,
                        workspaceRoot: t.worktreeWorkspaceRoot
                    })
                })
            }, s[11] = X, s[12] = H, s[13] = U, s[14] = K, s[15] = et, s[16] = t) : t = s[16], s[17] !== X || s[18] !== H || s[19] !== U || s[20] !== K || s[21] !== Z || s[22] !== $ ? (r = [X, H, U, K, Z, $], s[17] = X, s[18] = H, s[19] = U, s[20] = K, s[21] = Z, s[22] = $, s[23] = r) : r = s[23], (0, u.useEffect)(t, r), null
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
                return r(d.get(e)), w(() => r(d.get(e)))
            });

        function f() {
            return p
        }

        function m(e) {
            d.set(e, {
                state: "waiting"
            }), v()
        }

        function w(e) {
            return c.add(e), () => {
                c.delete(e)
            }
        }

        function b() {
            return h
        }

        function v() {
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
            a: m,
            b: function(e, t) {
                for (let [r] of(e.set(u, e => [...e.filter(e => e !== t), t].slice(-128)), d.set(t, {
                        state: "cancelled"
                    }), [...d].filter(e => {
                        let [, t] = e;
                        return "cancelled" === t.state
                    }).slice(0, -128))) d.delete(r);
                v()
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
                    addPendingWorktreeConversationStart: m,
                    beginPendingWorktreeConversationStart: e => d.get(e)?.state === "waiting" && (d.set(e, {
                        state: "starting"
                    }), v(), !0),
                    failPendingWorktreeConversationStart: e => {
                        d.has(e) && (d.set(e, {
                            state: "failed"
                        }), v())
                    },
                    retainPendingWorktreeConversationStart: e => {
                        d.set(e, {
                            state: "incomplete"
                        }), v()
                    },
                    succeedPendingWorktreeConversationStart: (e, t) => {
                        d.has(e) && (d.set(e, {
                            state: "succeeded",
                            conversationId: t
                        }), v())
                    },
                    retryPendingWorktreeConversationStart: e => {
                        d.has(e) && d.get(e)?.state !== "incomplete" && (d.set(e, {
                            state: "waiting"
                        }), v())
                    },
                    removePendingWorktreeConversationStart: e => {
                        d.delete(e) && v()
                    }
                }
            },
            g: function() {
                return (0, a.useSyncExternalStore)(w, b, f)
            }
        })
    }),
    Vhua: (function(e, t, r) {
        var n = r("BolX"),
            a = r("I07G"),
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
                let n = t(s.u, (0, a.Zh)(r.value.clientThreadId) ? r.value.clientThreadId : null);
                return null != n ? "failed" !== n.status : null == r.value.persistentWorkspace && "provisioning" === t(w)
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
            m = (0, n.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(u, e);
                return null == n ? n : n.labelEdited ? n.label : n.initialThreadTitle ?? n.label
            }),
            w = (0, n.c)(i.a, e => {
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
            f: m,
            g: function(e) {
                e.set(c, e => e + 1);
                let t = !0;
                return {
                    [Symbol.dispose]() {
                        t && (t = !1, e.set(c, e => e - 1))
                    }
                }
            },
            h: w,
            i: d
        })
    }),
    f3xH: (function(e, t, r) {
        var n = r("I07G");

        function a(e) {
            switch (e.type) {
                case "local-project":
                    if (null == e.projectId || e.projectId === n.id) return;
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
                        defaultMessage: "Worktree creation was interrupted. Retry to continue"
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
            o = r("I07G"),
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
            m = r("WFY2"),
            w = r("yiHb"),
            b = r("QVfH"),
            v = r("Fhw2");
        let y = [],
            k = ["[info] Refreshing upstream before creating worktree", "[info] Upstream refreshed", "[info] Continuing without updating", "[warning] Git authentication failed; sign in again before retrying", "[warning] Could not refresh upstream; using cached Git state"],
            I = new Map,
            x = (0, a.u)(u.a, !1, {
                onMount: (e, t) => {
                    for (let r of (e(!0), t.get(v.a) ?? [])) "worktree-ready" === r.phase && (0, b.a)(r.id)
                }
            });

        function E(e) {
            let t = (0, i.a)();
            return `${e}:${t}`
        }

        function S(e) {
            let t = e.lastIndexOf(":");
            return t <= 0 || t === e.length - 1 ? g.a : e.slice(0, t)
        }

        function _(e) {
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

        function j(e) {
            m.a.warning("Failed to cancel an upstream worktree refresh", {
                safe: {},
                sensitive: {
                    error: e
                }
            })
        }
        async function C(e, t) {
            let r = (0, w.a)("git"),
                n = (0, i.a)(),
                a = new TextDecoder,
                s = {
                    abortController: new AbortController,
                    cleanupRequested: !1,
                    worktreeGitRoot: null
                };
            I.set(t.id, s), A(e, t.id, e => ({
                ...e,
                phase: "creating",
                worktreeOutputText: "[info] Starting worktree creation\n"
            }));
            let l = [r.subscribe("create-worktree-path", r => {
                r.streamId === n && r.hostId === t.hostId && (s.worktreeGitRoot = r.worktreeGitRoot, s.abortController.signal.aborted || A(e, t.id, e => ({
                    ...e,
                    worktreeGitRoot: r.worktreeGitRoot
                })))
            }), r.subscribe("create-worktree-setup-started", r => {
                s.abortController.signal.aborted || r.streamId === n && A(e, t.id, e => "creating" === e.phase ? {
                    ...e,
                    phase: "setting-up"
                } : e)
            }), r.subscribe("create-worktree-stream", r => {
                if (s.abortController.signal.aborted || r.streamId !== n) return;
                let o = a.decode(r.data, {
                    stream: !0
                });
                A(e, t.id, e => {
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
                            cwd: (0, o.Ye)(t.sourceWorkspaceRoot),
                            startingState: t.startingState,
                            upstreamRefreshMode: (0, h.b)(e.get, o.Fk.upstreamRefreshMode),
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
                A(e, t.id, e => ({
                    ...e,
                    phase: null == i.setupError ? "worktree-ready" : "failed",
                    errorMessage: i.setupError,
                    worktreeGitRoot: i.worktreeGitRoot,
                    worktreeWorkspaceRoot: i.worktreeWorkspaceRoot,
                    needsAttention: null != i.setupError
                }))
            } catch (r) {
                if (s.abortController.signal.aborted) return;
                A(e, t.id, e => ({
                    ...e,
                    phase: "failed",
                    errorMessage: r instanceof Error ? r.message : String(r),
                    worktreeGitRoot: s.worktreeGitRoot ?? e.worktreeGitRoot,
                    needsAttention: !0
                }))
            } finally {
                for (let e of l) e();
                I.get(t.id) === s && I.delete(t.id), s.cleanupRequested && null != s.worktreeGitRoot && await T(e, t, s.worktreeGitRoot)
            }
        }
        async function T(e, t, r) {
            try {
                let n = await (0, w.a)("git").request({
                    method: "delete-worktree",
                    params: {
                        hostConfig: e.get(p.g, t.hostId),
                        worktree: (0, o.Ze)(r),
                        force: !0,
                        reason: "new-branch-cleanup",
                        operationSource: "worktree_new_branch_cleanup"
                    }
                });
                n.success || m.a.info("Browser worktree cleanup did not complete", {
                    safe: {
                        reason: n.reason
                    },
                    sensitive: {}
                })
            } catch (e) {
                m.a.warning("Failed to clean up a browser worktree", {
                    safe: {},
                    sensitive: {
                        error: e
                    }
                })
            }
        }

        function A(e, t, r) {
            (0, v.b)(e, function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return e.map(e => e.id === t ? r(e) : e)
            })
        }

        function M(e, t, r) {
            O(e, t, [{
                type: "label",
                label: r
            }, {
                type: "labelEdited",
                labelEdited: !0
            }])
        }

        function R(e, t, r) {
            O(e, t, [{
                type: "pinnedBeforeThreadId",
                beforeThreadId: r
            }])
        }

        function P(e, t, r) {
            O(e, t, r ? [{
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
            if (0 !== r.length) {
                if (d.a?.managedWorktrees?.pending == null) return void(0, v.b)(e, function() {
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
                    hostId: S(t),
                    id: t,
                    updates: r
                }).catch(W)
            }
        }

        function q(e, t) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, o.Te)();
            return {
                clientThreadId: r,
                pendingWorktreeId: e({
                    ...t,
                    clientThreadId: r
                })
            }
        }

        function F(e, t, r) {
            if (d.a?.managedWorktrees?.pending == null) throw Error("Worktree app actions require the ChatGPT desktop app");
            (0, c.a)(e, r.hostId);
            let n = {
                id: t,
                ...r
            };
            return "start-conversation" === n.launchMode && (n.openingPromptForHistory = structuredClone(n.openingPromptForHistory)), (0, b.a)(t), d.a.managedWorktrees.pending.create(n).catch(async r => {
                W(r), await (0, b.c)(e, t)?.onResult({
                    status: "outcome-unknown",
                    requestId: t
                })
            }).catch(W), t
        }

        function W(e) {
            m.a.warning("Pending worktree action failed", {
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
                return q(e => F(t, E(e.hostId), e), r, r.clientThreadId)
            },
            b: q,
            c: _,
            d: function(e, t, r) {
                O(e, t, [{
                    type: "conversationStartResult",
                    result: r
                }])
            },
            e: M,
            f: P,
            g: R,
            h: function() {
                let e, t, r, o, i, h, g, f, m, y, k, A, q, N = (0, n.c)(41),
                    B = (0, a.y)(u.a);
                (0, a.z)(x), N[0] !== B ? (e = e => B.get(v.a)?.find(t => t.id === e), N[0] = B, N[1] = e) : e = N[1];
                let D = e;
                N[2] !== B ? (t = e => {
                    (0, v.b)(B, e)
                }, N[2] = B, N[3] = t) : t = N[3];
                let G = t,
                    {
                        removePendingWorktreeConversationStart: L,
                        retryPendingWorktreeConversationStart: $
                    } = (0, b.f)();
                N[4] !== B || N[5] !== G ? (r = e => {
                    let t = E(e.hostId);
                    if (d.a?.managedWorktrees?.pending != null) return F(B, t, e);
                    (0, c.a)(B, e.hostId);
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
                    return (0, b.a)(t), G(e => [...void 0 === e ? [] : e, r]), C(B, r), t
                }, N[4] = B, N[5] = G, N[6] = r) : r = N[6];
                let z = r;
                N[7] !== B ? (o = (e, t) => {
                    M(B, e, t)
                }, N[7] = B, N[8] = o) : o = N[8];
                let K = o;
                N[9] !== B ? (i = (e, t) => {
                    P(B, e, t)
                }, N[9] = B, N[10] = i) : i = N[10];
                let U = i;
                N[11] !== B ? (h = (e, t) => {
                    R(B, e, t)
                }, N[11] = B, N[12] = h) : h = N[12];
                let H = h;
                N[13] !== B ? (g = e => {
                    O(B, e, [{
                        type: "needsAttention",
                        needsAttention: !1
                    }])
                }, N[13] = B, N[14] = g) : g = N[14];
                let X = g;
                N[15] !== D || N[16] !== $ || N[17] !== B || N[18] !== G ? (f = e => {
                    if (D(e)?.conversationStartResult == null) {
                        if ($(e), d.a?.managedWorktrees?.pending == null) {
                            let t = D(e);
                            if (G(t => (void 0 === t ? [] : t).map(t => t.id === e ? {
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
                                null != r ? (r.cleanupRequested = !0, r.abortController.abort()) : "failed" === t.phase && null != t.worktreeGitRoot && T(B, t, t.worktreeGitRoot), C(B, t)
                            }
                            return
                        }
                        d.a.managedWorktrees.pending.retry({
                            hostId: S(e),
                            id: e
                        }).catch(W)
                    }
                }, N[15] = D, N[16] = $, N[17] = B, N[18] = G, N[19] = f) : f = N[19];
                let Q = f;
                N[20] !== G ? (m = e => {
                    ((0, b.a)(e), d.a?.managedWorktrees?.pending == null) ? G(t => (void 0 === t ? [] : t).map(t => t.id === e && "failed" === t.phase && null != t.worktreeGitRoot && null != t.worktreeWorkspaceRoot ? {
                        ...t,
                        phase: "worktree-ready",
                        needsAttention: !1
                    } : t)): d.a.managedWorktrees.pending.continueWithoutSetup({
                        hostId: S(e),
                        id: e
                    }).catch(W)
                }, N[20] = G, N[21] = m) : m = N[21];
                let V = m;
                N[22] !== B ? (y = e => {
                    (0, w.a)("git").request({
                        method: "cancel-worktree-upstream-refresh",
                        params: {
                            hostConfig: B.get(p.g, S(e)),
                            operationSource: "worktree_pending_create",
                            pendingWorktreeId: e
                        }
                    }).catch(j)
                }, N[22] = B, N[23] = y) : y = N[23];
                let Y = y;
                if (N[24] !== D || N[25] !== L || N[26] !== B || N[27] !== G) {
                    function J(e) {
                        let t = D(e);
                        t?.launchMode === "start-conversation" && null != t.threadGoalDraft && (0, s.b)({
                            scope: B,
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
                            if (null == t || null != t.conversationStartResult || !_(t.phase)) return;
                            if (d.a?.managedWorktrees?.pending != null) return void d.a.managedWorktrees.pending.cancel({
                                hostId: S(e),
                                id: e,
                                continueLocally: !0
                            }).catch(W);
                            let r = I.get(e);
                            return null != r ? (r.cleanupRequested = !0, r.abortController.abort()) : null != t.worktreeGitRoot && T(B, t, t.worktreeGitRoot), void G(t => (void 0 === t ? [] : t).map(t => t.id === e ? {
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
                        if (a?.launchMode === "start-conversation" && (0, l.e)(B, a.clientThreadId), null != a && null == a.conversationStartResult ? (0, b.b)(B, e) : L(e), void 0 !== n && n || J(e), d.a?.managedWorktrees?.pending == null) {
                            {
                                let t = I.get(e);
                                null != t ? (t.cleanupRequested = !0, t.abortController.abort()) : a?.worktreeGitRoot != null && T(B, a, a.worktreeGitRoot)
                            }
                            G(t => (void 0 === t ? [] : t).filter(t => t.id !== e));
                            return
                        }
                        d.a.managedWorktrees.pending.cancel({
                            hostId: S(e),
                            id: e
                        }).catch(W)
                    }, A = e => {
                        if (L(e), J(e), d.a?.managedWorktrees?.pending == null) {
                            {
                                let t = D(e),
                                    r = I.get(e);
                                null != r ? (r.cleanupRequested = t?.phase === "failed", r.abortController.abort()) : t?.phase === "failed" && null != t.worktreeGitRoot && T(B, t, t.worktreeGitRoot)
                            }
                            G(t => (void 0 === t ? [] : t).filter(t => t.id !== e));
                            return
                        }
                        d.a.managedWorktrees.pending.dismiss({
                            hostId: S(e),
                            id: e
                        }).catch(W)
                    }, N[24] = D, N[25] = L, N[26] = B, N[27] = G, N[28] = k, N[29] = A
                } else k = N[28], A = N[29];
                return N[30] !== k || N[31] !== X || N[32] !== V || N[33] !== Y || N[34] !== z || N[35] !== A || N[36] !== K || N[37] !== Q || N[38] !== U || N[39] !== H ? (q = {
                    createPendingWorktree: z,
                    renamePendingWorktree: K,
                    setPendingWorktreePinned: U,
                    setPendingWorktreePinnedBeforeThreadId: H,
                    clearPendingWorktreeAttention: X,
                    retryPendingWorktree: Q,
                    continuePendingWorktree: V,
                    continuePendingWorktreeWithoutUpdating: Y,
                    cancelPendingWorktree: k,
                    dismissPendingWorktree: A
                }, N[30] = k, N[31] = X, N[32] = V, N[33] = Y, N[34] = z, N[35] = A, N[36] = K, N[37] = Q, N[38] = U, N[39] = H, N[40] = q) : q = N[40], q
            },
            i: function() {
                return (0, a.z)(v.a) ?? y
            }
        })
    }),
    ZYQR: (function(e, t, r) {
        var n = r("BolX"),
            a = r("I07G");
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
            var n = r,
                i = e,
                c = !0;
            if (i === l.a) return n(s.k) ? (0, a.Bg)({
                [a.Bh.worktreeRoot.key]: (0, s.b)(n, a.Bh.worktreeRoot),
                [a.Fk.autoCleanupEnabled.key]: (0, s.b)(n, a.Fk.autoCleanupEnabled),
                [a.Fk.keepCount.key]: (0, s.b)(n, a.Fk.keepCount)
            }) : null;
            let d = c ? n(o.A, i).data : n(o.A, i, {
                enabled: !1
            }).data;
            return d?.configReadSucceeded === !0 ? (0, a.Bg)(d.config.desktop) : null
        });
        r.d(t, {}, {
            a: c
        })
    }),
    TurB: (function(e, t, r) {
        var n = r("nuXe"),
            a = r.n(n),
            o = r("BolX"),
            i = r("I07G"),
            s = r("XnTj"),
            l = r("M9WK"),
            c = r("tl5a"),
            d = r("J43j"),
            u = r("mNN5"),
            p = r("GaA7"),
            h = r("OWtl"),
            g = r("ndjw"),
            f = r("V0vl"),
            m = r("rvFo"),
            w = r("yiHb"),
            b = r("psi4"),
            v = r("dg06");
        let y = {
                kind: "available"
            },
            k = {
                kind: "unavailable",
                reason: "inspection-failed",
                worktreePath: null
            },
            I = "worktree_restore_required",
            x = "worktree_status_unavailable",
            E = (0, o.q)(h.a, (e, t) => {
                let {
                    conversationId: r,
                    cwd: n,
                    hostId: o
                } = e, {
                    get: c
                } = t, d = (0, v.b)(o);
                if (null == n) return {
                    queryFn: () => y,
                    queryKey: [...d, "available", null],
                    networkMode: "always",
                    staleTime: m.b.FIVE_SECONDS
                };
                let h = c(g.d, {
                    hostId: o
                });
                if (null == h.data) return {
                    enabled: h.isError,
                    queryFn: () => k,
                    queryKey: [...d, h.isError ? "codex-home-error" : "codex-home-loading", n],
                    staleTime: m.b.FIVE_SECONDS
                };
                if (!(0, i.$h)(n, h.data.codexHome, h.data.worktreesSegment)) return {
                    queryFn: () => y,
                    queryKey: [...d, "available", n],
                    networkMode: "always",
                    staleTime: m.b.FIVE_SECONDS
                };
                let I = (0, b.c)(n, (0, l.b)(h.data));
                if (null == I) return {
                    queryFn: () => y,
                    queryKey: [...d, "available-unmanaged-worktree", n],
                    networkMode: "always",
                    staleTime: m.b.FIVE_SECONDS
                };
                let x = c(g.g, o),
                    E = c(f.f, r),
                    S = E?.pending?.cwd === n ? E.pending.projectSources : E?.applied?.cwd === n ? E.applied.projectSources : null,
                    _ = c(g.j, {
                        hostId: o
                    });
                if (null == S && null == _.data && !_.isError) return {
                    enabled: !1,
                    queryFn: () => k,
                    queryKey: [...d, "workspace-roots-loading", I],
                    staleTime: m.b.FIVE_SECONDS
                };
                let j = a()([...S ?? [], ..._.data?.roots ?? []]).map(i.Ze),
                    C = (0, i.Ye)(I);
                return {
                    queryFn: async () => {
                        let e, t = async () => {
                            let {
                                existingPaths: e
                            } = await (0, u.b)({
                                hostId: o,
                                paths: [n]
                            });
                            return e.includes(n) ? y : {
                                kind: "unavailable",
                                reason: "inspection-failed",
                                worktreePath: C
                            }
                        };
                        if ("remote-control" !== x.kind) return t();
                        try {
                            let e = await p.a.workspaceFiles.getMetadata?.({
                                hostId: o,
                                path: n
                            });
                            if (null != e) return "directory" === e.kind ? y : {
                                kind: "unavailable",
                                reason: "inspection-failed",
                                worktreePath: C
                            }
                        } catch {}
                        try {
                            e = await (0, w.a)("git").request({
                                method: "managed-worktree-state",
                                params: {
                                    candidateRoots: j,
                                    cwd: n,
                                    hostConfig: x,
                                    operationSource: "worktree_restore_banner",
                                    worktreePath: C
                                }
                            })
                        } catch (e) {
                            if ((0, s.g)(e, "process/spawn")) return t();
                            throw e
                        }
                        switch (e.kind) {
                            case "available":
                                return y;
                            case "restorable":
                            case "unavailable":
                                return {
                                    ...e, worktreePath: C
                                };
                            case "gone":
                                return {
                                    kind: "gone", worktreePath: C
                                }
                        }
                    },
                    queryKey: [...d, "inspect", n, C, j],
                    networkMode: "always",
                    refetchOnReconnect: "always",
                    staleTime: m.b.FIVE_SECONDS
                }
            }),
            S = (0, o.d)(h.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(E, {
                    conversationId: e,
                    cwd: r(c.p, e),
                    hostId: r(c.vb, e)
                })
            }),
            _ = (0, o.d)(h.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(S, e);
                return n.isError ? "unavailable" : null != n.data ? n.data.kind : "loading"
            });
        async function j(e, t) {
            let {
                conversationId: r,
                cwd: n,
                hostId: a
            } = t, o = e.query.snapshot(g.d, {
                hostId: a
            }), s = o.getData();
            if ("local" === a || null == s || e.queryClient.getQueryState(o.queryKey)?.isInvalidated ? s = await o.fetch() : o.fetch().catch(() => void 0), !(0, i.$h)(n, s.codexHome, s.worktreesSegment)) return y;
            await e.query.getOrFetch(g.j, {
                hostId: a
            }).catch(() => void 0);
            let l = {
                conversationId: r,
                cwd: (0, i.Ye)(n),
                hostId: a
            };
            return await e.query.invalidate(E, l, {
                exact: !0
            }), e.query.fetch(E, l)
        }
        async function C(e, t) {
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
            },
            e: E,
            f: async function(e, t) {
                let {
                    conversationId: r,
                    cwd: n,
                    hostId: a
                } = t;
                return await C(e, a), j(e, {
                    conversationId: r,
                    cwd: n,
                    hostId: a
                })
            },
            g: async function(e, t) {
                await C(e, t), await e.queryClient.invalidateQueries({
                    queryKey: (0, v.b)(t)
                })
            },
            h: async function(e, t) {
                let r = await j(e, t);
                if ("unavailable" === r.kind) throw Error(x);
                if ("restorable" !== r.kind) return;
                let n = e.get(g.g, t.hostId);
                await (0, w.a)("git").request({
                    method: "restore-worktree",
                    params: {
                        conversationId: t.conversationId,
                        cwd: (0, i.Ye)(t.cwd),
                        hostConfig: n,
                        operationSource: "worktree_restore_banner",
                        repoRoot: r.snapshot.repoRoot,
                        worktreePath: r.worktreePath
                    }
                });
                let a = (0, d.a)(n);
                await Promise.all([e.query.invalidate(E, {
                    ...t,
                    cwd: (0, i.Ye)(t.cwd)
                }, {
                    exact: !0
                }), e.queryClient.invalidateQueries({
                    queryKey: (0, v.a)(a)
                }), e.queryClient.invalidateQueries({
                    queryKey: ["git", "metadata", a]
                })])
            },
            i: S,
            j: _
        })
    }),
    LcvC: (function(e, t, r) {
        var n = r("I07G"),
            a = r("M9WK"),
            o = r("bnxy");

        function i(e, t) {
            if (!n.Ek.safeParse(e).success) return null;
            let r = null == (0, n.Cg)(t) ? e : e.replace(/-[0-9a-f]{16}$/, "");
            return r[0].toUpperCase() + r.slice(1).replaceAll("-", " ")
        }

        function s(e, t) {
            let r = (0, o.r)(e).replace(/\/+$/, ""),
                i = r.toLowerCase();
            for (let s of [null == t ? null : (0, n.Ah)(t), (0, a.a)(e)]) {
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
            p = (0, o.c)(v, void 0),
            h = (0, o.c)(k, void 0),
            g = (0, o.c)(I, void 0),
            f = (0, o.c)(e => x(e, "bcc"), void 0),
            m = (0, o.c)(e => x(e, "cc"), void 0),
            w = (0, o.c)(e => x(e, "recipient"), void 0),
            b = (0, o.c)(E, void 0);

        function v(e) {
            return `${i}${e}`
        }

        function y(e, t, r) {
            _(e) || (0, a.v)(t, r, 500, {
                shouldPublish: () => !_(e)
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

        function E(e) {
            return `${c}${e}`
        }

        function S(e) {
            return `codex-writing-block-deleted-thread-v1:${e}`
        }

        function _(e) {
            let t = e.slice(0, e.indexOf("\n"));
            return (0, a.k)(S(t), !1)
        }
        r.d(t, {}, {
            a: p,
            b: f,
            c: m,
            d: h,
            e: g,
            f: w,
            g: b,
            h: function(e) {
                let t = `${e}
`,
                    r = `${i}${t}`,
                    n = `${s}${t}`,
                    o = `${l}${t}`,
                    p = `${c}${t}`;
                for (let i of ((0, a.u)(S(e), !0), (0, a.r)(r), (0, a.r)(n), (0, a.r)(o), (0, a.r)(p), u))(0, a.r)(`${d[i]}${t}`)
            },
            i: function(e) {
                for (let t of ((0, a.e)(k(e)), (0, a.e)(E(e)), u))(0, a.e)(x(e, t))
            },
            j: function(e) {
                if (_(e)) return;
                let t = (0, a.k)(k(e), void 0),
                    r = (0, a.k)(x(e, "bcc"), void 0),
                    n = (0, a.k)(x(e, "cc"), void 0),
                    o = (0, a.k)(x(e, "recipient"), void 0),
                    i = (0, a.k)(E(e), void 0);
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
                y(e, k(e), t)
            },
            m: function(e, t, r) {
                y(e, x(e, t), r)
            },
            n: function(e, t) {
                y(e, E(e), t)
            },
            o: function(e, t) {
                if (_(e)) return;
                let r = v(e);
                (0, a.k)(r, void 0) !== t && (0, a.u)(r, t)
            },
            p: function(e, t) {
                if (_(e)) return;
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
            a: () => R,
            b: () => T,
            c: () => M,
            d: () => P,
            e: () => O,
            f: () => C,
            g: () => j,
            h: () => A,
            i: () => S
        });
        var n = r("QosV"),
            a = r("zYxG"),
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
            m = r("HXpT"),
            w = r("AhlA"),
            b = r("ABep"),
            v = r("oyxz"),
            y = r("ziev"),
            k = r("sCvV");

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
            }), s[0] = t) : t = s[0], s[1] !== u ? (r = u ? (0, b.jsx)(v.a, {
                id: "tabThumbnail.writingBlock.pendingEdits",
                defaultMessage: "Changes to review"
            }) : null, s[1] = u, s[2] = r) : r = s[2], s[3] !== c ? (a = c || (0, b.jsx)(v.a, {
                id: "tabThumbnail.writingBlock.empty",
                defaultMessage: "Empty document"
            }), s[3] = c, s[4] = a) : a = s[4], s[5] !== a ? (o = [{
                kind: "text",
                lines: 8,
                content: a
            }], s[5] = a, s[6] = o) : o = s[6], s[7] !== r || s[8] !== o || s[9] !== l ? (i = (0, b.jsx)(y.a, {
                icon: t,
                title: l,
                subtitle: r,
                sections: o
            }), s[7] = r, s[8] = o, s[9] = l, s[10] = i) : i = s[10], i
        }
        let E = (0, l.k)("writing-block", function(e) {
                let t, r, a = (0, n.c)(5),
                    {
                        document: i,
                        renderSlots: s
                    } = e,
                    l = (0, o.x)(T, i.editorKey);
                return a[0] !== l?.slots ? (t = l?.slots ?? {
                    headerRows: [],
                    content: null
                }, a[0] = l?.slots, a[1] = t) : t = a[1], a[2] !== s || a[3] !== t ? (r = s(t), a[2] = s, a[3] = t, a[4] = r) : r = a[4], r
            }, {
                getId: (e, t) => {
                    let {
                        document: r
                    } = t;
                    return O(r.editorKey)
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
                        defaultMessage: "Document"
                    }) : "chat_message" === r.variant ? e.get(u.a).formatMessage({
                        id: "codex.writingBlock.messageTabTitle",
                        defaultMessage: "Message"
                    }) : e.get(u.a).formatMessage({
                        id: "codex.writingBlock.header.title.fallback",
                        defaultMessage: "Writing"
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
                            let t = e.get(T, r.editorKey),
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
            S = (0, o.c)(h.a, e => {
                let {
                    get: t
                } = e;
                return t(s.l.storedTabs$).filter(q).map(e => e.props.document)
            }, {
                isEqual: g.a
            }),
            _ = (0, o.c)(p.a, e => {
                let {
                    get: t
                } = e, r = t(s.l.activeTab$);
                return t(c.h) && q(r) ? r.props : null
            }),
            j = (0, o.d)(h.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != r(s.l.tabById$, O(e))
            }),
            C = (0, o.d)(p.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(_)?.document.editorKey === e
            }),
            T = (0, o.v)(p.a, e => null);

        function A(e, t, r) {
            s.l.openTab(e, E, {
                ...r,
                revealAndFocus: r?.revealAndFocus ?? !0,
                props: {
                    document: t
                },
                requiresWorkspaceReady: !1,
                onBeforeClose: e => e.get(T, t.editorKey)?.onBeforeClose() ?? !0,
                onClose: e => {
                    e.get(T, t.editorKey)?.onClose()
                }
            })
        }

        function M(e, t) {
            if (null != t.libraryFileId || !e.get(w.b)) return;
            let r = e.get(s.l.tabs$).find(r => q(r) && null == r.props.document.libraryFileId && r.props.document.conversationId === t.conversationId && r.props.document.writingBlockId === t.writingBlockId && r.props.document.messageId !== t.messageId && e.get(m.b, {
                conversationId: t.conversationId,
                messageId: r.props.document.messageId,
                writingBlockId: t.writingBlockId
            }) === t.messageId);
            null != r && A(e, t, {
                revealAndFocus: !1,
                replaceTabId: r.tabId
            })
        }

        function R(e, t) {
            s.l.closeTab(e, O(t))
        }

        function P(e, t) {
            let r = e.get(_)?.document;
            if (r?.conversationId !== t) return null;
            let n = e.get(f.a, {
                conversationId: t,
                messageId: r.messageId,
                instanceId: r.writingBlockId,
                refIndex: r.writingBlockIndex
            })?.libraryFileId.trim();
            return n ? `The user currently has the writing block backed by library_file_id ${JSON.stringify(n)} open in the writing block editor. Treat the user's current request as referring to this exact writing block. For any requested edits, target that exact Library file.` : null
        }

        function O(e) {
            return `writing-block:${encodeURIComponent(e)}`
        }

        function q(e) {
            return e?.tabType.kind === E.kind
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
            m = r("OWtl"),
            w = r("zTAs"),
            b = r("AhlA"),
            v = r("qT2D");
        let y = p.object({
                refIndex: p.number().int().nonnegative(),
                isStreaming: p.boolean(),
                status: p.literal("resolved").optional()
            }),
            k = (0, i.j)(m.a, e => new WeakMap),
            I = (0, i.d)(m.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (!r(b.b) && !r(b.c)) return;
                let a = r(h.N, e);
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
                                        of S(e, u)) {
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
                    current_node: r(h.C, e)
                }, r(k, e))
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
                let o = r(v.d, e.conversationId),
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
            E = (0, i.d)(m.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(I, e.conversationId)?.get(e.writingBlockId)?.latestMessageId, o = r(h.N, e.conversationId);
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
                    if (null != r || S(t).some(t => {
                            let {
                                block: r
                            } = t;
                            return r.id === e.writingBlockId
                        }) || null != (0, n.d)((0, c.e)(t))[e.writingBlockId]) return a;
                    break
                }
            });

        function S(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, l.q)(e.metadata),
                r = (0, g.a)((0, c.s)(e.metadata)?.model_dil_v2);
            return null == r || null != r.programFailure || r.appData?.__FILTERED_REASON__ === "SIZE_EXCEEDED" ? [] : Object.values(r.clientDefinedWidgets ?? {}).flatMap(e => {
                let t = y.safeParse(e);
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
            b: E
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
                return p(t(o.g), t(s, "session"))
            }, e => {
                let {
                    get: t,
                    set: r
                } = e, n = t(o.g);
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
                let t = e.get(o.g);
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
                let i = a()(o, l.n);
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
                    s = null, r?.(), r = void 0, o.set(null), null != n && a.set(i.y, e, e => e.filter(e => {
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
                    prepareSubmission: m,
                    isCurrent: w,
                    onCleared: b
                } = t;
                if (!e.get(d.b) || !w(e) || f.isDestroyed || f.state.selection.empty) return;
                let v = (0, n.a)(),
                    {
                        doc: y,
                        selection: k
                    } = f.state,
                    I = y.textBetween(k.from, k.to, "\n", "\n"),
                    x = I.endsWith("\n") ? k.to - 1 : k.to;
                try {
                    r = v.serialize(y), o = k.from <= 0 ? 0 : (0, a.c)(y, v, "⟦SELECTEDRANGESTART⟧", k.from, 1), c = x >= y.content.size ? r.length : (0, a.c)(y, v, "⟦SELECTEDRANGEEND⟧", x, -1)
                } catch {
                    return
                }
                if (o >= c) return;
                let E = {
                        attachmentId: crypto.randomUUID(),
                        messageId: h,
                        writingBlockId: g,
                        fullMarkdown: r,
                        selectedText: r.slice(o, c),
                        label: I || r.slice(o, c),
                        selectionStart: o,
                        selectionEnd: c
                    },
                    S = e.get(u, p);
                return (0, s.b)(e, p), S.set(E, {
                    isCurrent: e => e.get(d.b) && w(e) && !f.isDestroyed && v.serialize(f.state.doc) === r,
                    prepareSubmission: () => m(r),
                    onCleared: b
                }), e.set(i.y, p, [{
                    id: E.attachmentId,
                    text: E.label
                }]), S.setCleanup(E, e.watch(e => {
                    e.get(d.b) && null == e.get(s.a, p) && e.get(i.y, p).some(e => {
                        let {
                            id: t
                        } = e;
                        return t === E.attachmentId
                    }) || S.clear(E)
                })), (0, l.f)(), () => S.clear(E)
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