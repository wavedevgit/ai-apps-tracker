export const __rspack_esm_ids = [956483];
export const __webpack_modules__ = {
    w5lF: (function(e, t, r) {
        var s = r("D015"),
            o = r("qmgl"),
            n = r("ASxG"),
            a = r("y3uJ");
        let i = n.record(n.string(), n.unknown()),
            u = "If this issue persists please contact us through our help center at [help.openai.com](https://help.openai.com/).",
            d = `A network error occurred. Please check your connection and try again. ${u}`,
            c = `Something went wrong while generating the response. ${u}`,
            l = n.string().max(64).regex(/^(?:[0-9]+|[a-z][a-z0-9_-]*)$/).optional().catch(void 0),
            f = n.string().max(128).regex(/^[A-Za-z0-9_-]+$/).optional().catch(void 0),
            g = n.string().max(128).regex(/^[A-Za-z0-9_$.]+$/).optional().catch(void 0);
        class p extends Error {
            url;
            status;
            requestId;
            rawError;
            cfRequestId;
            xOaiRequestId;
            name = "RequestError";
            detail;
            jsonError;
            json;
            code;
            constructor(e, t, r, s, o, n, a) {
                let u = i.safeParse(r.detail).data,
                    d = i.safeParse(r.error).data,
                    c = i.safeParse(u?.error).data,
                    l = i.safeParse(d?.error).data;
                super([r.error, d?.message, r.detail, u?.message, u?.description, c?.message].find(e => "string" == typeof e && !!e) ?? "Something went wrong. If this issue persists please contact us through our help center at help.openai.com."), this.url = e, this.status = t, this.requestId = s, this.rawError = o, this.cfRequestId = n, this.xOaiRequestId = a, this.detail = r.detail, this.jsonError = r.error, this.json = r;
                let f = u?.code ?? d?.code ?? l?.code ?? c?.code;
                this.code = "string" == typeof f ? f : void 0
            }
        }

        function h(e) {
            return e.length <= 2e3 ? e : `${e.slice(0,2e3)}…`
        }

        function m(e) {
            return {
                name: e.name,
                message: h(e.message),
                stack: e.stack ? h(e.stack) : void 0
            }
        }

        function _(e) {
            if ("u" > typeof navigator && !navigator.onLine) return !0;
            if (e instanceof Error) {
                let t = e.message.toLowerCase();
                if (t.includes("failed to fetch") || t.includes("networkerror when attempting to fetch resource") || t.includes("network") || t.includes("load failed") || t.includes("failed to resolve") || t.includes("no done event received") || t.includes("dns") || /\b(enotfound|eai_again|eaddrinfo|econnrefused|econnreset|etimedout)\b/.test(t)) return !0;
                if (["something went wrong while generating the response", "aborted", "no available models", "starting a new chat", "too many concurrent requests", "message you submitted was too long", "hit your limit", "maximum length", "rate limit exceeded", "limit of messages", "unusual activity", "input too large", "conversation key not found", "authentication token is expired", "conversation is stale"].some(e => t.includes(e))) return !1;
                if (e instanceof TypeError) return !0
            }
            return !1
        }
        r.d(t, {}, {
            a: c,
            b: d,
            c: p,
            d: function(e, t, r, s, o, n, a) {
                return new p(e, t, {
                    error: r,
                    ...o || void 0 !== n ? {
                        detail: {
                            ...o ? {
                                code: o
                            } : {},
                            message: r,
                            ...void 0 !== n ? {
                                can_retry: n
                            } : {},
                            ..."input_too_large" === o && ("last_user_message" === a || "context_window" === a) ? {
                                type: a
                            } : {}
                        }
                    } : {}
                }, void 0, s)
            },
            e: function(e, t) {
                var r, s;
                let n = e instanceof Error ? e : Error("string" == typeof e ? e : "Something went wrong"),
                    i = n instanceof p ? n.rawError : n.cause,
                    u = n instanceof p ? n : void 0,
                    d = (0, a.c)(t) ?? (0, a.c)(n) ?? (0, a.c)(i);
                return {
                    request_type: n instanceof p && (r = n.url) ? r.includes("/conversation/resume") ? "resume" : r.includes("/f/conversation") ? "send" : "unknown" : "unknown",
                    is_network_error: _(n),
                    error: m(n),
                    raw_error: (s = i) instanceof Error ? m(s) : null != s ? {
                        name: typeof s,
                        message: h(String(s))
                    } : void 0,
                    request_id: u?.requestId ?? f.parse(t?.headers.get("x-request-id") ?? void 0),
                    server_request_id: f.parse(u?.xOaiRequestId ?? t?.headers.get("x-oai-request-id") ?? void 0),
                    cf_ray_id: f.parse(u?.cfRequestId ?? t?.headers.get("cf-ray") ?? void 0),
                    cloudflare_jsd_state_at_request_start: d?.cloudflareJsdStateAtRequestStart,
                    request_attempt: d?.requestAttempt,
                    ...n instanceof p ? {
                        request_url: (0, o.a)(n.url),
                        request_status: n.status,
                        request_code: n.code,
                        request_detail: null != n.detail ? h(JSON.stringify(n.detail)) : void 0,
                        request_json_error: null != n.jsonError ? h(JSON.stringify(n.jsonError)) : void 0
                    } : {}
                }
            },
            f: function(e) {
                return e instanceof p ? {
                    requestId: f.parse(e.requestId),
                    serverRequestId: f.parse(e.xOaiRequestId),
                    backingError: {
                        className: g.parse(e.name),
                        errorCode: l.parse(e.code),
                        statusCode: (0, s.a)(e.status),
                        requestId: f.parse(e.requestId),
                        cfRayId: f.parse(e.cfRequestId)
                    }
                } : {}
            },
            g: _,
            h: g,
            i: l,
            j: f
        })
    })
};