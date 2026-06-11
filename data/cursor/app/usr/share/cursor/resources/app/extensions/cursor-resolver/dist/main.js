(() => {
    "use strict";
    var e = {
            d: (t, r) => {
                for (var n in r) e.o(r, n) && !e.o(t, n) && Object.defineProperty(t, n, {
                    enumerable: !0,
                    get: r[n]
                })
            },
            o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
            r: e => {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};
    e.r(t), e.d(t, {
        activate: () => E,
        deactivate: () => k
    });
    const r = require("vscode");
    var n, o;

    function i(e) {
        const t = n[e];
        return "string" != typeof t ? e.toString() : t[0].toLowerCase() + t.substring(1).replace(/[A-Z]/g, e => "_" + e.toLowerCase())
    }(o = n || (n = {}))[o.Canceled = 1] = "Canceled", o[o.Unknown = 2] = "Unknown", o[o.InvalidArgument = 3] = "InvalidArgument", o[o.DeadlineExceeded = 4] = "DeadlineExceeded", o[o.NotFound = 5] = "NotFound", o[o.AlreadyExists = 6] = "AlreadyExists", o[o.PermissionDenied = 7] = "PermissionDenied", o[o.ResourceExhausted = 8] = "ResourceExhausted", o[o.FailedPrecondition = 9] = "FailedPrecondition", o[o.Aborted = 10] = "Aborted", o[o.OutOfRange = 11] = "OutOfRange", o[o.Unimplemented = 12] = "Unimplemented", o[o.Internal = 13] = "Internal", o[o.Unavailable = 14] = "Unavailable", o[o.DataLoss = 15] = "DataLoss", o[o.Unauthenticated = 16] = "Unauthenticated";
    class s extends Error {
        constructor(e, t = n.Unknown, r, o, s) {
            super(function(e, t) {
                return e.length ? `[${i(t)}] ${e}` : `[${i(t)}]`
            }(e, t)), this.name = "ConnectError", Object.setPrototypeOf(this, new.target.prototype), this.rawMessage = e, this.code = t, this.metadata = new Headers(null != r ? r : {}), this.details = null != o ? o : [], this.cause = s
        }
        static from(e, t = n.Unknown) {
            return e instanceof s ? e : e instanceof Error ? "AbortError" == e.name ? new s(e.message, n.Canceled) : new s(e.message, t, void 0, void 0, e) : new s(String(e), t, void 0, void 0, e)
        }
        static[Symbol.hasInstance](e) {
            return e instanceof Error && (Object.getPrototypeOf(e) === s.prototype || "ConnectError" === e.name && "code" in e && "number" == typeof e.code && "metadata" in e && "details" in e && Array.isArray(e.details) && "rawMessage" in e && "string" == typeof e.rawMessage && "cause" in e)
        }
        findDetails(e) {
            const t = "typeName" in e ? {
                    findMessage: t => t === e.typeName ? e : void 0
                } : e,
                r = [];
            for (const e of this.details) {
                if ("getType" in e) {
                    t.findMessage(e.getType().typeName) && r.push(e);
                    continue
                }
                const n = t.findMessage(e.type);
                if (n) try {
                    r.push(n.fromBinary(e.value))
                } catch (e) {}
            }
            return r
        }
    }
    const a = [0, 5e3, 5e3, 1e4, 1e4, 1e4, 3e4, 3e4, 6e4];

    function c(e) {
        return a[Math.min(e, a.length - 1)]
    }

    function u(e, t = 0) {
        const r = d(e);
        return void 0 !== r && t < r
    }

    function d(e) {
        const t = h(e);
        return t === n.InvalidArgument ? 3e4 : t === n.NotFound || t === n.DeadlineExceeded || t === n.Unavailable ? 18e4 : void 0
    }
    async function l(e) {
        await new Promise(t => setTimeout(t, e))
    }

    function h(e) {
        if (e instanceof s) return e.code;
        if ("object" == typeof e && null !== e && "code" in e) {
            const t = e.code;
            if ("number" == typeof t) return t
        }
        if (!(e instanceof Error)) return;
        const t = /^\[([a-z_]+)\](?:\s|$)/.exec(e.message);
        if (t) return p(t[1]);
        const r = "string" == typeof e.stack ? /(?:^|\n)\s*ConnectError:\s*\[([a-z_]+)\](?:\s|$)/.exec(e.stack) : null;
        return r ? p(r[1]) : void 0
    }

    function p(e) {
        switch (e) {
            case "invalid_argument":
                return n.InvalidArgument;
            case "deadline_exceeded":
                return n.DeadlineExceeded;
            case "unavailable":
                return n.Unavailable;
            case "not_found":
                return n.NotFound;
            default:
                return
        }
    }

    function f(e) {
        return e instanceof Error && "CursorSocketTransient" === e.code ? r.RemoteAuthorityResolverError.TemporarilyNotAvailable(e.message) : e
    }
    let v;

    function y(...e) {
        const t = e.map(String).join(" ");
        console.log(`[cursor-resolver]  ${t}`), v?.appendLine(`[INFO]  ${t}`)
    }

    function m(...e) {
        const t = e.map(String).join(" ");
        v?.appendLine(`[ERROR] ${t}`)
    }

    function g() {
        const e = r.cursor.productCommit ?? r.cursor.cursorServerCommit;
        if (!e || !/^[a-zA-Z0-9\-_.]+$/.test(e)) throw m("Invalid or missing product commit", e), new Error("Invalid or missing product commit");
        return e
    }
    class w {
        constructor(e, t) {
            this.connectionTokenProvider = e, this.alwaysShowPortsView = !0,
                function(e) {
                    v = e
                }(t), y("RemoteAuthorityResolver constructor")
        }
        createManagedResolvedAuthority(e, t, n) {
            return Object.assign(new r.ManagedResolvedAuthority(e, t, n), {
                skipCreateInspectTunnel: !0
            })
        }
        async showCandidatePort(e, t, r) {
            return ! function(e) {
                return !! function(e) {
                    return e >= 26e3 && e <= 26999
                }(e) || e >= 5870 && e <= 5890 || 2375 === e || 5901 === e || 50052 === e
            }(t) || (y(`Filtering out reserved/internal port ${t} from candidates`), !1)
        }
        async getCursorServerUrl(e, t = !0) {
            const r = e.indexOf("+"),
                n = e.substring(r + 1).trim();
            if (-1 === r || 0 === n.length) throw new Error("No bcId found in authority");
            if (n.startsWith("{")) try {
                return JSON.parse(n)
            } catch (e) {
                throw new Error("Invalid url found in authority")
            }
            const o = n,
                i = g();
            return await C("getCursorServerUrl", async () => {
                try {
                    return await this.connectionTokenProvider.getOrCreateCursorServerUrl(o, i, t)
                } catch (e) {
                    throw m("Error getting cursor server url", e), e
                }
            })
        }
        async getCursorServerUrlWithRetry(e, t = !0) {
            return async function({
                getCursorServerUrl: e,
                initialUseCache: t,
                sleep: r = l,
                onRetry: n
            }) {
                let o = t;
                const i = Date.now();
                for (let t = 0;; t++) try {
                    return await e(o)
                } catch (e) {
                    const s = Date.now() - i;
                    if (!u(e, s)) throw e;
                    const a = d(e),
                        l = void 0 !== a ? a - s : 0,
                        h = Math.min(c(t), Math.max(0, l));
                    n?.(e, t + 1, h), h > 0 && await r(h), o = !1
                }
            }({
                initialUseCache: t,
                getCursorServerUrl: t => this.getCursorServerUrl(e, t),
                onRetry: (e, t, r) => {
                    y("Error getting cursor server url,", r > 0 ? `retrying in ${r/1e3}s` : "retrying immediately", `attempt=${t}`, e)
                }
            })
        }
        async resolve(e, t, o) {
            return C("resolve", async () => {
                y("resolve", e, `resolveAttempt=${t.resolveAttempt}`), o?.report({
                    phase: "init"
                });
                const i = e.indexOf("+"),
                    s = e.substring(i + 1).trim();
                if (-1 === i || 0 === s.length) throw new Error("No bcId found in authority");
                if (s.startsWith("{")) {
                    let e;
                    try {
                        e = JSON.parse(s)
                    } catch (e) {
                        throw new Error("Invalid url found in authority")
                    }
                    y("resolved url (inline)", e.host, e.port);
                    const t = async () => {
                        try {
                            return await b(e)
                        } catch (e) {
                            throw f(e)
                        }
                    }, n = r.cursor.createSocketConsumerTunnelFactory({
                        makeConnection: t,
                        connectionToken: e.connectionToken
                    });
                    return this.createManagedResolvedAuthority(t, e.connectionToken, n)
                }
                const a = s;
                o?.report({
                    phase: "auth"
                });
                const c = g(),
                    {
                        connectionToken: u
                    } = await this.connectionTokenProvider.getOrCreateConnectionToken(a, c);
                let d;
                o?.report({
                    phase: "get-url"
                });
                try {
                    d = await this.getCursorServerUrlWithRetry(e, t.resolveAttempt < 3)
                } catch (e) {
                    throw function(e) {
                        return function(e) {
                            return h(e) === n.NotFound
                        }(e) ? r.RemoteAuthorityResolverError.NotAvailable("This cloud agent's environment is no longer available.") : e
                    }(e)
                }
                y("resolved url", d.host, d.port);
                const l = async () => {
                    o?.report({
                        phase: "socket"
                    });
                    try {
                        return await b(d)
                    } catch (e) {
                        throw f(e)
                    }
                }, p = r.cursor.createSocketConsumerTunnelFactory({
                    makeConnection: l,
                    connectionToken: u
                });
                return this.createManagedResolvedAuthority(l, u, p)
            })
        }
    }
    async function b(e) {
        const t = 443 === e.port,
            n = await r.cursor.createTcpConnection({
                host: e.host,
                port: e.port,
                tls: t ? {
                    rejectUnauthorized: !0,
                    servername: e.host
                } : void 0
            });
        y("tcp connection established", `${e.host}:${e.port}`, t ? "(tls)" : "(plain)");
        const o = new r.EventEmitter,
            i = new r.EventEmitter,
            s = new r.EventEmitter;
        return n.onDidReceiveData(e => o.fire(e)), n.onDidClose(e => {
            i.fire(e), s.fire()
        }), {
            onDidReceiveMessage: o.event,
            onDidClose: i.event,
            onDidEnd: s.event,
            send: e => {
                n.send(e)
            },
            end: () => {
                n.close()
            },
            connectionOptions: {
                headers: [`Host: ${e.host}:${e.port}`, ...e.headers.map(e => `${e.key}: ${e.value}`)],
                doNotIncludeWsLocalhostPrefix: !0
            }
        }
    }
    async function C(e, t) {
        const n = performance.now();
        try {
            return await t()
        } finally {
            ! function(e, t) {
                try {
                    r.cursor.metricsDistribution({
                        stat: `background-composer.${e}`,
                        value: t,
                        tags: {}
                    })
                } catch {}
            }(e, performance.now() - n)
        }
    }

    function E(e) {
        const t = r.window.createOutputChannel("Cursor Resolver");
        e.subscriptions.push(t);
        const n = "undefined" != typeof process && !!process.versions?.node;
        t.appendLine(`[cursor-resolver] Running in ${n?"Node.js":"web-worker"} extension host`);
        const o = new w(r.cursor.connectionTokenProvider, t);
        e.subscriptions.push(r.workspace.registerRemoteAuthorityResolver("background-composer", o))
    }

    function k() {}
    var R = exports;
    for (var A in t) R[A] = t[A];
    t.__esModule && Object.defineProperty(R, "__esModule", {
        value: !0
    })
})();
//# sourceMappingURL=http://go/sourcemap/sourcemaps/e48ee6102a199492b0c9964699bf011886708ba0/extensions/cursor-resolver/dist/main.js.map