/*! LICENSE: 955979.3c3e4491c9.js.LICENSE.txt */
export const __rspack_esm_id = 955979;
export const __rspack_esm_ids = [955979];
export const __webpack_modules__ = {
    QW: (function(t) {
        t.exports = 0x7fffffff
    }),
    b2: (function(t, e, r) {
        var n = r("pU"),
            i = r("QW");
        t.exports = function(t) {
            if ((t = n(t)) > i) throw TypeError(t + " exceeds maximum possible timeout");
            return t
        }
    }),
    Z9: (function(t, e, r) {
        var n = r("Ms");
        t.exports = function(t) {
            if ("function" != typeof t || !hasOwnProperty.call(t, "length")) return !1;
            try {
                if ("number" != typeof t.length || "function" != typeof t.call || "function" != typeof t.apply) return !1
            } catch (t) {
                return !1
            }
            return !n(t)
        }
    }),
    M1: (function(t, e, r) {
        var n = r("NAx"),
            i = {
                object: !0,
                function: !0,
                undefined: !0
            };
        t.exports = function(t) {
            return !!n(t) && hasOwnProperty.call(i, typeof t)
        }
    }),
    qAT: (function(t, e, r) {
        var n = r("Z9"),
            i = /^\s*class[\s{/}]/,
            s = Function.prototype.toString;
        t.exports = function(t) {
            return !(!n(t) || i.test(s.call(t)))
        }
    }),
    Ms: (function(t, e, r) {
        var n = r("M1");
        t.exports = function(t) {
            if (!n(t)) return !1;
            try {
                if (!t.constructor) return !1;
                return t.constructor.prototype === t
            } catch (t) {
                return !1
            }
        }
    }),
    NAx: (function(t) {
        var e = void 0;
        t.exports = function(t) {
            return t !== e && null !== t
        }
    }),
    Tm: (function(t, e, r) {
        r.d(e, {
            a: () => a
        });
        var n = r("zd");

        function i(t, e) {
            return "function" == typeof t ? t(e) : t && (t.current = e), t
        }
        var s = "u" > typeof window ? n.useLayoutEffect : n.useEffect,
            o = new WeakMap;

        function a(t, e) {
            var r, a, l, c = (r = e || null, a = function(e) {
                return t.forEach(function(t) {
                    return i(t, e)
                })
            }, (l = (0, n.useState)(function() {
                return {
                    value: r,
                    callback: a,
                    facade: {
                        get current() {
                            return l.value
                        },
                        set current(t) {
                            var e = l.value;
                            e !== t && (l.value = t, l.callback(t, e))
                        }
                    }
                }
            })[0]).callback = a, l.facade);
            return s(function() {
                var e = o.get(c);
                if (e) {
                    var r = new Set(e),
                        n = new Set(t),
                        s = c.current;
                    r.forEach(function(t) {
                        n.has(t) || i(t, null)
                    }), n.forEach(function(t) {
                        r.has(t) || i(t, s)
                    })
                }
                o.set(c, t)
            }, [t]), c
        }
    }),
    MIR: (function(t, e, r) {
        var n = r("SR"),
            i = r("zd"),
            s = function(t) {
                var e = t.sideCar,
                    r = (0, n.h)(t, ["sideCar"]);
                if (!e) throw Error("Sidecar: please provide `sideCar` property to import the right car");
                var s = e.read();
                if (!s) throw Error("Sidecar medium not found");
                return i.createElement(s, (0, n.b)({}, r))
            };

        function o(t, e) {
            return t.useMedium(e), s
        }
        s.isSideCarExport = !0, r.d(e, {
            a: () => o
        })
    }),
    Qds: (function(t, e, r) {
        var n = r("SR");

        function i(t) {
            return t
        }

        function s(t) {
            void 0 === t && (t = {});
            var e, r, s, o = (void 0 === e && (e = i), r = [], s = !1, {
                read: function() {
                    if (s) throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                    return r.length ? r[r.length - 1] : null
                },
                useMedium: function(t) {
                    var n = e(t, s);
                    return r.push(n),
                        function() {
                            r = r.filter(function(t) {
                                return t !== n
                            })
                        }
                },
                assignSyncMedium: function(t) {
                    for (s = !0; r.length;) {
                        var e = r;
                        r = [], e.forEach(t)
                    }
                    r = {
                        push: function(e) {
                            return t(e)
                        },
                        filter: function() {
                            return r
                        }
                    }
                },
                assignMedium: function(t) {
                    s = !0;
                    var e = [];
                    if (r.length) {
                        var n = r;
                        r = [], n.forEach(t), e = r
                    }
                    var i = function() {
                            var r = e;
                            e = [], r.forEach(t)
                        },
                        o = function() {
                            return Promise.resolve().then(i)
                        };
                    o(), r = {
                        push: function(t) {
                            e.push(t), o()
                        },
                        filter: function(t) {
                            return e = e.filter(t), r
                        }
                    }
                }
            });
            return o.options = (0, n.b)({
                async: !0,
                ssr: !1
            }, t), o
        }
        r.d(e, {
            a: () => s
        })
    }),
    jr: (function(t, e, r) {
        var n = r("zd"),
            i = "function" == typeof Object.is ? Object.is : function(t, e) {
                return t === e && (0 !== t || 1 / t == 1 / e) || t != t && e != e
            },
            s = n.useSyncExternalStore,
            o = n.useRef,
            a = n.useEffect,
            l = n.useMemo,
            c = n.useDebugValue;
        e.useSyncExternalStoreWithSelector = function(t, e, r, n, u) {
            var h = o(null);
            if (null === h.current) {
                var d = {
                    hasValue: !1,
                    value: null
                };
                h.current = d
            } else d = h.current;
            var f = s(t, (h = l(function() {
                function t(t) {
                    if (!a) {
                        if (a = !0, s = t, t = n(t), void 0 !== u && d.hasValue) {
                            var e = d.value;
                            if (u(e, t)) return o = e
                        }
                        return o = t
                    }
                    if (e = o, i(s, t)) return e;
                    var r = n(t);
                    return void 0 !== u && u(e, r) ? (s = t, e) : (s = t, o = r)
                }
                var s, o, a = !1,
                    l = void 0 === r ? null : r;
                return [function() {
                    return t(e())
                }, null === l ? void 0 : function() {
                    return t(l())
                }]
            }, [e, r, n, u]))[0], h[1]);
            return a(function() {
                d.hasValue = !0, d.value = f
            }, [f]), c(f), f
        }
    }),
    jgu: (function(t, e, r) {
        t.exports = r("jr")
    }),
    eB: (function(t, e, r) {
        function n(t) {
            return t && "u" > typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t
        }

        function i(t) {
            var e = function(t, e) {
                if ("object" !== n(t) || null === t) return t;
                var r = t[Symbol.toPrimitive];
                if (void 0 !== r) {
                    var i = r.call(t, e || "default");
                    if ("object" !== n(i)) return i;
                    throw TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }(t, "string");
            return "symbol" === n(e) ? e : String(e)
        }
        r.d(e, {
            _: () => i
        })
    }),
    wo: (function(t, e, r) {
        let n;
        var i = r("D7"),
            s = (n = () => i.h, {
                isServer: () => n(),
                setIsServer(t) {
                    n = t
                }
            });
        r.d(e, {
            a: () => s
        })
    }),
    wY: (function(t, e, r) {
        var n = r("H4"),
            i = new class extends n.a {
                #t;
                #e;
                #r;
                constructor() {
                    super(), this.#r = t => {
                        if ("u" > typeof window && window.addEventListener) {
                            let e = () => t();
                            return window.addEventListener("visibilitychange", e, !1), () => {
                                window.removeEventListener("visibilitychange", e)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.#e || this.setEventListener(this.#r)
                }
                onUnsubscribe() {
                    this.hasListeners() || (this.#e?.(), this.#e = void 0)
                }
                setEventListener(t) {
                    this.#r = t, this.#e?.(), this.#e = t(t => {
                        "boolean" == typeof t ? this.setFocused(t) : this.onFocus()
                    })
                }
                setFocused(t) {
                    this.#t !== t && (this.#t = t, this.onFocus())
                }
                onFocus() {
                    let t = this.isFocused();
                    this.listeners.forEach(e => {
                        e(t)
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.#t ? this.#t : globalThis.document?.visibilityState !== "hidden"
                }
            };
        r.d(e, {
            a: () => i
        })
    }),
    sl: (function(t, e, r) {
        var n = r("D7");

        function i(t) {
            return {
                onFetch: (e, r) => {
                    let i = e.options,
                        a = e.fetchOptions?.meta?.fetchMore?.direction,
                        l = e.state.data?.pages || [],
                        c = e.state.data?.pageParams || [],
                        u = {
                            pages: [],
                            pageParams: []
                        },
                        h = 0,
                        d = async () => {
                            let r = !1,
                                d = (0, n.d)(e.options, e.fetchOptions),
                                f = async (t, i, s) => {
                                    let o;
                                    if (r) return Promise.reject(e.signal.reason);
                                    if (null == i && t.pages.length) return Promise.resolve(t);
                                    let a = (o = {
                                            client: e.client,
                                            queryKey: e.queryKey,
                                            pageParam: i,
                                            direction: s ? "backward" : "forward",
                                            meta: e.options.meta
                                        }, (0, n.a)(o, () => e.signal, () => r = !0), o),
                                        l = await d(a),
                                        {
                                            maxPages: c
                                        } = e.options,
                                        u = s ? n.c : n.b;
                                    return {
                                        pages: u(t.pages, l, c),
                                        pageParams: u(t.pageParams, i, c)
                                    }
                                };
                            if (a && l.length) {
                                let t = "backward" === a,
                                    e = {
                                        pages: l,
                                        pageParams: c
                                    },
                                    r = (t ? o : s)(i, e);
                                u = await f(e, r, t)
                            } else {
                                let e = t ?? l.length;
                                do {
                                    let t = 0 === h ? c[0] ?? i.initialPageParam : s(i, u);
                                    if (h > 0 && null == t) break;
                                    u = await f(u, t), h++
                                } while (h < e)
                            }
                            return u
                        };
                    e.options.persister ? e.fetchFn = () => e.options.persister?.(d, {
                        client: e.client,
                        queryKey: e.queryKey,
                        meta: e.options.meta,
                        signal: e.signal
                    }, r) : e.fetchFn = d
                }
            }
        }

        function s(t, {
            pages: e,
            pageParams: r
        }) {
            let n = e.length - 1;
            return e.length > 0 ? t.getNextPageParam(e[n], e, r[n], r) : void 0
        }

        function o(t, {
            pages: e,
            pageParams: r
        }) {
            return e.length > 0 ? t.getPreviousPageParam?.(e[0], e, r[0], r) : void 0
        }

        function a(t, e) {
            return !!e && null != s(t, e)
        }

        function l(t, e) {
            return !!e && !!t.getPreviousPageParam && null != o(t, e)
        }
        r.d(e, {
            a: () => a,
            b: () => l,
            c: () => i
        })
    }),
    Cd: (function(t, e, r) {
        var n = r("suf"),
            i = r("sl"),
            s = class extends n.a {
                constructor(t, e) {
                    super(t, e)
                }
                bindMethods() {
                    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this)
                }
                setOptions(t) {
                    t._type = "infinite", super.setOptions(t)
                }
                getOptimisticResult(t) {
                    return t._type = "infinite", super.getOptimisticResult(t)
                }
                fetchNextPage(t) {
                    return this.fetch({
                        ...t,
                        meta: {
                            fetchMore: {
                                direction: "forward"
                            }
                        }
                    })
                }
                fetchPreviousPage(t) {
                    return this.fetch({
                        ...t,
                        meta: {
                            fetchMore: {
                                direction: "backward"
                            }
                        }
                    })
                }
                createResult(t, e) {
                    let {
                        state: r
                    } = t, n = super.createResult(t, e), {
                        isFetching: s,
                        isRefetching: o,
                        isError: a,
                        isRefetchError: l
                    } = n, c = r.fetchMeta?.fetchMore?.direction, u = a && "forward" === c, h = s && "forward" === c, d = a && "backward" === c, f = s && "backward" === c;
                    return {
                        ...n,
                        fetchNextPage: this.fetchNextPage,
                        fetchPreviousPage: this.fetchPreviousPage,
                        hasNextPage: (0, i.a)(e, r.data),
                        hasPreviousPage: (0, i.b)(e, r.data),
                        isFetchNextPageError: u,
                        isFetchingNextPage: h,
                        isFetchPreviousPageError: d,
                        isFetchingPreviousPage: f,
                        isRefetchError: l && !u && !d,
                        isRefetching: o && !h && !f
                    }
                }
            };
        r.d(e, {
            a: () => s
        })
    }),
    UK: (function(t, e, r) {
        var n = r("rb"),
            i = r("OL"),
            s = r("Nx"),
            o = class extends i.a {
                #n;
                #i;
                #s;
                #o;
                constructor(t) {
                    super(), this.#n = t.client, this.mutationId = t.mutationId, this.#s = t.mutationCache, this.#i = [], this.state = t.state || a(), this.setOptions(t.options), this.scheduleGc()
                }
                setOptions(t) {
                    this.options = t, this.updateGcTime(this.options.gcTime)
                }
                get meta() {
                    return this.options.meta
                }
                addObserver(t) {
                    this.#i.includes(t) || (this.#i.push(t), this.clearGcTimeout(), this.#s.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.#i = this.#i.filter(e => e !== t), this.scheduleGc(), this.#s.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: t
                    })
                }
                optionalRemove() {
                    this.#i.length || ("pending" === this.state.status ? this.scheduleGc() : this.#s.remove(this))
                }
                continue () {
                    return this.#o?.continue() ?? this.execute(this.state.variables)
                }
                async execute(t) {
                    let e = () => {
                            this.#a({
                                type: "continue"
                            })
                        },
                        r = {
                            client: this.#n,
                            meta: this.options.meta,
                            mutationKey: this.options.mutationKey
                        };
                    this.#o = (0, s.c)({
                        fn: () => this.options.mutationFn ? this.options.mutationFn(t, r) : Promise.reject(Error("No mutationFn found")),
                        onFail: (t, e) => {
                            this.#a({
                                type: "failed",
                                failureCount: t,
                                error: e
                            })
                        },
                        onPause: () => {
                            this.#a({
                                type: "pause"
                            })
                        },
                        onContinue: e,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => this.#s.canRun(this)
                    });
                    let n = "pending" === this.state.status,
                        i = !this.#o.canStart();
                    try {
                        if (n) e();
                        else {
                            this.#a({
                                type: "pending",
                                variables: t,
                                isPaused: i
                            }), this.#s.config.onMutate && await this.#s.config.onMutate(t, this, r);
                            let e = await this.options.onMutate?.(t, r);
                            e !== this.state.context && this.#a({
                                type: "pending",
                                context: e,
                                variables: t,
                                isPaused: i
                            })
                        }
                        let s = await this.#o.start();
                        return await this.#s.config.onSuccess?.(s, t, this.state.context, this, r), await this.options.onSuccess?.(s, t, this.state.context, r), await this.#s.config.onSettled?.(s, null, this.state.variables, this.state.context, this, r), await this.options.onSettled?.(s, null, t, this.state.context, r), this.#a({
                            type: "success",
                            data: s
                        }), s
                    } catch (e) {
                        try {
                            await this.#s.config.onError?.(e, t, this.state.context, this, r)
                        } catch (t) {
                            Promise.reject(t)
                        }
                        try {
                            await this.options.onError?.(e, t, this.state.context, r)
                        } catch (t) {
                            Promise.reject(t)
                        }
                        try {
                            await this.#s.config.onSettled?.(void 0, e, this.state.variables, this.state.context, this, r)
                        } catch (t) {
                            Promise.reject(t)
                        }
                        try {
                            await this.options.onSettled?.(void 0, e, t, this.state.context, r)
                        } catch (t) {
                            Promise.reject(t)
                        }
                        throw this.#a({
                            type: "error",
                            error: e
                        }), e
                    } finally {
                        this.#s.runNext(this)
                    }
                }
                #a(t) {
                    this.state = (e => {
                        switch (t.type) {
                            case "failed":
                                return {
                                    ...e, failureCount: t.failureCount, failureReason: t.error
                                };
                            case "pause":
                                return {
                                    ...e, isPaused: !0
                                };
                            case "continue":
                                return {
                                    ...e, isPaused: !1
                                };
                            case "pending":
                                return {
                                    ...e, context: t.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: t.isPaused, status: "pending", variables: t.variables, submittedAt: Date.now()
                                };
                            case "success":
                                return {
                                    ...e, data: t.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1
                                };
                            case "error":
                                return {
                                    ...e, data: void 0, error: t.error, failureCount: e.failureCount + 1, failureReason: t.error, isPaused: !1, status: "error"
                                }
                        }
                    })(this.state), n.a.batch(() => {
                        this.#i.forEach(e => {
                            e.onMutationUpdate(t)
                        }), this.#s.notify({
                            mutation: this,
                            type: "updated",
                            action: t
                        })
                    })
                }
            };

        function a() {
            return {
                context: void 0,
                data: void 0,
                error: null,
                failureCount: 0,
                failureReason: null,
                isPaused: !1,
                status: "idle",
                variables: void 0,
                submittedAt: 0
            }
        }
        r.d(e, {
            a: () => o,
            b: () => a
        })
    }),
    rb: (function(t, e, r) {
        let n, i, s, o, a, l;
        var c = r("pE").a,
            u = (n = [], i = 0, s = t => {
                t()
            }, o = t => {
                t()
            }, a = c, {
                batch: t => {
                    let e;
                    i++;
                    try {
                        e = t()
                    } finally {
                        let t;
                        --i || (t = n, n = [], t.length && a(() => {
                            o(() => {
                                t.forEach(t => {
                                    s(t)
                                })
                            })
                        }))
                    }
                    return e
                },
                batchCalls: t => (...e) => {
                    l(() => {
                        t(...e)
                    })
                },
                schedule: l = t => {
                    i ? n.push(t) : a(() => {
                        s(t)
                    })
                },
                setNotifyFunction: t => {
                    s = t
                },
                setBatchNotifyFunction: t => {
                    o = t
                },
                setScheduler: t => {
                    a = t
                }
            });
        r.d(e, {
            a: () => u
        })
    }),
    HY: (function(t, e, r) {
        var n = r("H4"),
            i = new class extends n.a {
                #l = !0;
                #e;
                #r;
                constructor() {
                    super(), this.#r = t => {
                        if ("u" > typeof window && window.addEventListener) {
                            let e = () => t(!0),
                                r = () => t(!1);
                            return window.addEventListener("online", e, !1), window.addEventListener("offline", r, !1), () => {
                                window.removeEventListener("online", e), window.removeEventListener("offline", r)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.#e || this.setEventListener(this.#r)
                }
                onUnsubscribe() {
                    this.hasListeners() || (this.#e?.(), this.#e = void 0)
                }
                setEventListener(t) {
                    this.#r = t, this.#e?.(), this.#e = t(this.setOnline.bind(this))
                }
                setOnline(t) {
                    this.#l !== t && (this.#l = t, this.listeners.forEach(e => {
                        e(t)
                    }))
                }
                isOnline() {
                    return this.#l
                }
            };
        r.d(e, {
            a: () => i
        })
    }),
    Mt: (function(t, e, r) {
        var n = r("D7"),
            i = r("rb"),
            s = r("Nx"),
            o = r("OL"),
            a = r("sl"),
            l = class extends o.a {
                #c;
                #u;
                #h;
                #d;
                #n;
                #o;
                #f;
                #p;
                constructor(t) {
                    super(), this.#p = !1, this.#f = t.defaultOptions, this.setOptions(t.options), this.observers = [], this.#n = t.client, this.#d = this.#n.getQueryCache(), this.queryKey = t.queryKey, this.queryHash = t.queryHash, this.#u = h(this.options), this.state = t.state ?? this.#u, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                get queryType() {
                    return this.#c
                }
                get promise() {
                    return this.#o?.promise
                }
                setOptions(t) {
                    if (this.options = {
                            ...this.#f,
                            ...t
                        }, t?._type && (this.#c = t._type), this.updateGcTime(this.options.gcTime), this.state && void 0 === this.state.data) {
                        let t = h(this.options);
                        void 0 !== t.data && (this.setState(u(t.data, t.dataUpdatedAt)), this.#u = t)
                    }
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.#d.remove(this)
                }
                setData(t, e) {
                    let r = (0, n.o)(this.state.data, t, this.options);
                    return this.#a({
                        data: r,
                        type: "success",
                        dataUpdatedAt: e?.updatedAt,
                        manual: e?.manual
                    }), r
                }
                setState(t) {
                    this.#a({
                        type: "setState",
                        state: t
                    })
                }
                cancel(t) {
                    let e = this.#o?.promise;
                    return this.#o?.cancel(t), e ? e.then(n.m).catch(n.m) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                get resetState() {
                    return this.#u
                }
                reset() {
                    this.destroy(), this.setState(this.resetState)
                }
                isActive() {
                    return this.observers.some(t => !1 !== (0, n.q)(t.options.enabled, this))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === n.u || !this.isFetched()
                }
                isFetched() {
                    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
                }
                isStatic() {
                    return this.getObserversCount() > 0 && this.observers.some(t => "static" === (0, n.r)(t.options.staleTime, this))
                }
                isStale() {
                    return this.getObserversCount() > 0 ? this.observers.some(t => t.getCurrentResult().isStale) : void 0 === this.state.data || this.state.isInvalidated
                }
                isStaleByTime(t = 0) {
                    return void 0 === this.state.data || "static" !== t && (!!this.state.isInvalidated || !(0, n.w)(this.state.dataUpdatedAt, t))
                }
                onFocus() {
                    let t = this.observers.find(t => t.shouldFetchOnWindowFocus());
                    t?.refetch({
                        cancelRefetch: !1
                    }), this.#o?.continue()
                }
                onOnline() {
                    let t = this.observers.find(t => t.shouldFetchOnReconnect());
                    t?.refetch({
                        cancelRefetch: !1
                    }), this.#o?.continue()
                }
                addObserver(t) {
                    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), this.#d.notify({
                        type: "observerAdded",
                        query: this,
                        observer: t
                    }))
                }
                removeObserver(t) {
                    this.observers.includes(t) && (this.observers = this.observers.filter(e => e !== t), this.observers.length || (this.#o && (this.#p || this.#g() ? this.#o.cancel({
                        revert: !0
                    }) : this.#o.cancelRetry()), this.scheduleGc()), this.#d.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: t
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                #g() {
                    return "paused" === this.state.fetchStatus && "pending" === this.state.status
                }
                invalidate() {
                    this.state.isInvalidated || this.#a({
                        type: "invalidate"
                    })
                }
                async fetch(t, e) {
                    let r;
                    if ("idle" !== this.state.fetchStatus && this.#o?.status() !== "rejected") {
                        if (void 0 !== this.state.data && e?.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.#o) return this.#o.continueRetry(), this.#o.promise
                    }
                    if (t && this.setOptions(t), !this.options.queryFn) {
                        let t = this.observers.find(t => t.options.queryFn);
                        t && this.setOptions(t.options)
                    }
                    let i = new AbortController,
                        o = t => {
                            Object.defineProperty(t, "signal", {
                                enumerable: !0,
                                get: () => (this.#p = !0, i.signal)
                            })
                        },
                        l = () => {
                            let t, r = (0, n.d)(this.options, e),
                                i = (o(t = {
                                    client: this.#n,
                                    queryKey: this.queryKey,
                                    meta: this.meta
                                }), t);
                            return (this.#p = !1, this.options.persister) ? this.options.persister(r, i, this) : r(i)
                        },
                        c = (o(r = {
                            fetchOptions: e,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: this.#n,
                            state: this.state,
                            fetchFn: l
                        }), r),
                        u = "infinite" === this.#c ? (0, a.c)(this.options.pages) : this.options.behavior;
                    u?.onFetch(c, this), this.#h = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== c.fetchOptions?.meta) && this.#a({
                        type: "fetch",
                        meta: c.fetchOptions?.meta
                    }), this.#o = (0, s.c)({
                        initialPromise: e?.initialPromise,
                        fn: c.fetchFn,
                        onCancel: t => {
                            t instanceof s.a && t.revert && this.setState({
                                ...this.#h,
                                fetchStatus: "idle"
                            }), i.abort()
                        },
                        onFail: (t, e) => {
                            this.#a({
                                type: "failed",
                                failureCount: t,
                                error: e
                            })
                        },
                        onPause: () => {
                            this.#a({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.#a({
                                type: "continue"
                            })
                        },
                        retry: c.options.retry,
                        retryDelay: c.options.retryDelay,
                        networkMode: c.options.networkMode,
                        canRun: () => !0
                    });
                    try {
                        let t = await this.#o.start();
                        if (void 0 === t) throw Error(`${this.queryHash} data is undefined`);
                        return this.setData(t), this.#d.config.onSuccess?.(t, this), this.#d.config.onSettled?.(t, this.state.error, this), t
                    } catch (t) {
                        if (t instanceof s.a) {
                            if (t.silent) return this.#o.promise;
                            else if (t.revert) {
                                if (void 0 === this.state.data) throw t;
                                return this.state.data
                            }
                        }
                        throw this.#a({
                            type: "error",
                            error: t
                        }), this.#d.config.onError?.(t, this), this.#d.config.onSettled?.(this.state.data, t, this), t
                    } finally {
                        this.scheduleGc()
                    }
                }
                #a(t) {
                    let e = e => {
                        switch (t.type) {
                            case "failed":
                                return {
                                    ...e, fetchFailureCount: t.failureCount, fetchFailureReason: t.error
                                };
                            case "pause":
                                return {
                                    ...e, fetchStatus: "paused"
                                };
                            case "continue":
                                return {
                                    ...e, fetchStatus: "fetching"
                                };
                            case "fetch":
                                return {
                                    ...e, ...c(e.data, this.options), fetchMeta: t.meta ?? null
                                };
                            case "success":
                                let r = {
                                    ...e,
                                    ...u(t.data, t.dataUpdatedAt),
                                    dataUpdateCount: e.dataUpdateCount + 1,
                                    ...!t.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                                return this.#h = t.manual ? r : void 0, r;
                            case "error":
                                let n = t.error;
                                return {
                                    ...e, error: n, errorUpdateCount: e.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: e.fetchFailureCount + 1, fetchFailureReason: n, fetchStatus: "idle", status: "error", isInvalidated: !0
                                };
                            case "invalidate":
                                return {
                                    ...e, isInvalidated: !0
                                };
                            case "setState":
                                return {
                                    ...e, ...t.state
                                }
                        }
                    };
                    this.state = e(this.state), i.a.batch(() => {
                        this.observers.forEach(t => {
                            t.onQueryUpdate()
                        }), this.#d.notify({
                            query: this,
                            type: "updated",
                            action: t
                        })
                    })
                }
            };

        function c(t, e) {
            return {
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchStatus: (0, s.b)(e.networkMode) ? "fetching" : "paused",
                ...void 0 === t && {
                    error: null,
                    status: "pending"
                }
            }
        }

        function u(t, e) {
            return {
                data: t,
                dataUpdatedAt: e ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success"
            }
        }

        function h(t) {
            let e = "function" == typeof t.initialData ? t.initialData() : t.initialData,
                r = void 0 !== e,
                n = r ? "function" == typeof t.initialDataUpdatedAt ? t.initialDataUpdatedAt() : t.initialDataUpdatedAt : 0;
            return {
                data: e,
                dataUpdateCount: 0,
                dataUpdatedAt: r ? n ?? Date.now() : 0,
                error: null,
                errorUpdateCount: 0,
                errorUpdatedAt: 0,
                fetchFailureCount: 0,
                fetchFailureReason: null,
                fetchMeta: null,
                isInvalidated: !1,
                status: r ? "success" : "pending",
                fetchStatus: "idle"
            }
        }
        r.d(e, {
            a: () => l,
            b: () => c
        })
    }),
    Ot: (function(t, e, r) {
        var n = r("D7"),
            i = r("Mt"),
            s = r("rb"),
            o = r("H4"),
            a = class extends o.a {
                constructor(t = {}) {
                    super(), this.config = t, this.#m = new Map
                }
                #m;
                build(t, e, r) {
                    let s = e.queryKey,
                        o = e.queryHash ?? (0, n.g)(s, e),
                        a = this.get(o);
                    return a || (a = new i.a({
                        client: t,
                        queryKey: s,
                        queryHash: o,
                        options: t.defaultQueryOptions(e),
                        state: r,
                        defaultOptions: t.getQueryDefaults(s)
                    }), this.add(a)), a
                }
                add(t) {
                    this.#m.has(t.queryHash) || (this.#m.set(t.queryHash, t), this.notify({
                        type: "added",
                        query: t
                    }))
                }
                remove(t) {
                    let e = this.#m.get(t.queryHash);
                    e && (t.destroy(), e === t && this.#m.delete(t.queryHash), this.notify({
                        type: "removed",
                        query: t
                    }))
                }
                clear() {
                    s.a.batch(() => {
                        this.getAll().forEach(t => {
                            this.remove(t)
                        })
                    })
                }
                get(t) {
                    return this.#m.get(t)
                }
                getAll() {
                    return [...this.#m.values()]
                }
                find(t) {
                    let e = {
                        exact: !0,
                        ...t
                    };
                    return this.getAll().find(t => (0, n.l)(e, t))
                }
                findAll(t = {}) {
                    let e = this.getAll();
                    return Object.keys(t).length > 0 ? e.filter(e => (0, n.l)(t, e)) : e
                }
                notify(t) {
                    s.a.batch(() => {
                        this.listeners.forEach(e => {
                            e(t)
                        })
                    })
                }
                onFocus() {
                    s.a.batch(() => {
                        this.getAll().forEach(t => {
                            t.onFocus()
                        })
                    })
                }
                onOnline() {
                    s.a.batch(() => {
                        this.getAll().forEach(t => {
                            t.onOnline()
                        })
                    })
                }
            };
        r.d(e, {
            a: () => a
        })
    }),
    su: (function(t, e, r) {
        r.d(e, {
            a: () => d
        });
        var n = r("D7"),
            i = r("Ot"),
            s = r("rb"),
            o = r("UK"),
            a = r("H4"),
            l = class extends a.a {
                constructor(t = {}) {
                    super(), this.config = t, this.#y = new Set, this.#b = new Map, this.#v = 0
                }
                #y;
                #b;
                #v;
                build(t, e, r) {
                    let n = new o.a({
                        client: t,
                        mutationCache: this,
                        mutationId: ++this.#v,
                        options: t.defaultMutationOptions(e),
                        state: r
                    });
                    return this.add(n), n
                }
                add(t) {
                    this.#y.add(t);
                    let e = c(t);
                    if ("string" == typeof e) {
                        let r = this.#b.get(e);
                        r ? r.push(t) : this.#b.set(e, [t])
                    }
                    this.notify({
                        type: "added",
                        mutation: t
                    })
                }
                remove(t) {
                    if (this.#y.delete(t)) {
                        let e = c(t);
                        if ("string" == typeof e) {
                            let r = this.#b.get(e);
                            if (r)
                                if (r.length > 1) {
                                    let e = r.indexOf(t); - 1 !== e && r.splice(e, 1)
                                } else r[0] === t && this.#b.delete(e)
                        }
                    }
                    this.notify({
                        type: "removed",
                        mutation: t
                    })
                }
                canRun(t) {
                    let e = c(t);
                    if ("string" != typeof e) return !0;
                    {
                        let r = this.#b.get(e),
                            n = r?.find(t => "pending" === t.state.status);
                        return !n || n === t
                    }
                }
                runNext(t) {
                    let e = c(t);
                    if ("string" != typeof e) return Promise.resolve();
                    {
                        let r = this.#b.get(e)?.find(e => e !== t && e.state.isPaused);
                        return r?.continue() ?? Promise.resolve()
                    }
                }
                clear() {
                    s.a.batch(() => {
                        this.#y.forEach(t => {
                            this.notify({
                                type: "removed",
                                mutation: t
                            })
                        }), this.#y.clear(), this.#b.clear()
                    })
                }
                getAll() {
                    return Array.from(this.#y)
                }
                find(t) {
                    let e = {
                        exact: !0,
                        ...t
                    };
                    return this.getAll().find(t => (0, n.k)(e, t))
                }
                findAll(t = {}) {
                    return this.getAll().filter(e => (0, n.k)(t, e))
                }
                notify(t) {
                    s.a.batch(() => {
                        this.listeners.forEach(e => {
                            e(t)
                        })
                    })
                }
                resumePausedMutations() {
                    let t = this.getAll().filter(t => t.state.isPaused);
                    return s.a.batch(() => Promise.all(t.map(t => t.continue().catch(n.m))))
                }
            };

        function c(t) {
            return t.options.scope?.id
        }
        var u = r("wY"),
            h = r("HY"),
            d = class {
                #w;
                #s;
                #f;
                #k;
                #S;
                #E;
                #x;
                #C;
                constructor(t = {}) {
                    this.#w = t.queryCache || new i.a, this.#s = t.mutationCache || new l, this.#f = t.defaultOptions || {}, this.#k = new Map, this.#S = new Map, this.#E = 0
                }
                mount() {
                    this.#E++, 1 === this.#E && (this.#x = u.a.subscribe(async t => {
                        t && (await this.resumePausedMutations(), this.#w.onFocus())
                    }), this.#C = h.a.subscribe(async t => {
                        t && (await this.resumePausedMutations(), this.#w.onOnline())
                    }))
                }
                unmount() {
                    this.#E--, 0 === this.#E && (this.#x?.(), this.#x = void 0, this.#C?.(), this.#C = void 0)
                }
                isFetching(t) {
                    return this.#w.findAll({
                        ...t,
                        fetchStatus: "fetching"
                    }).length
                }
                isMutating(t) {
                    return this.#s.findAll({
                        ...t,
                        status: "pending"
                    }).length
                }
                getQueryData(t) {
                    let e = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return this.#w.get(e.queryHash)?.state.data
                }
                ensureQueryData(t) {
                    let e = this.defaultQueryOptions(t),
                        r = this.#w.build(this, e),
                        i = r.state.data;
                    return void 0 === i ? this.fetchQuery(t) : (t.revalidateIfStale && r.isStaleByTime((0, n.r)(e.staleTime, r)) && this.prefetchQuery(e), Promise.resolve(i))
                }
                getQueriesData(t) {
                    return this.#w.findAll(t).map(({
                        queryKey: t,
                        state: e
                    }) => [t, e.data])
                }
                setQueryData(t, e, r) {
                    let i = this.defaultQueryOptions({
                            queryKey: t
                        }),
                        s = this.#w.get(i.queryHash),
                        o = s?.state.data,
                        a = (0, n.e)(e, o);
                    if (void 0 !== a) return this.#w.build(this, i).setData(a, {
                        ...r,
                        manual: !0
                    })
                }
                setQueriesData(t, e, r) {
                    return s.a.batch(() => this.#w.findAll(t).map(({
                        queryKey: t
                    }) => [t, this.setQueryData(t, e, r)]))
                }
                getQueryState(t) {
                    let e = this.defaultQueryOptions({
                        queryKey: t
                    });
                    return this.#w.get(e.queryHash)?.state
                }
                removeQueries(t) {
                    let e = this.#w;
                    s.a.batch(() => {
                        e.findAll(t).forEach(t => {
                            e.remove(t)
                        })
                    })
                }
                resetQueries(t, e) {
                    let r = this.#w;
                    return s.a.batch(() => (r.findAll(t).forEach(t => {
                        t.reset()
                    }), this.refetchQueries({
                        type: "active",
                        ...t
                    }, e)))
                }
                cancelQueries(t, e = {}) {
                    let r = {
                        revert: !0,
                        ...e
                    };
                    return Promise.all(s.a.batch(() => this.#w.findAll(t).map(t => t.cancel(r)))).then(n.m).catch(n.m)
                }
                invalidateQueries(t, e = {}) {
                    return s.a.batch(() => (this.#w.findAll(t).forEach(t => {
                        t.invalidate()
                    }), t?.refetchType === "none") ? Promise.resolve() : this.refetchQueries({
                        ...t,
                        type: t?.refetchType ?? t?.type ?? "active"
                    }, e))
                }
                refetchQueries(t, e = {}) {
                    let r = {
                        ...e,
                        cancelRefetch: e.cancelRefetch ?? !0
                    };
                    return Promise.all(s.a.batch(() => this.#w.findAll(t).filter(t => !t.isDisabled() && !t.isStatic()).map(t => {
                        let e = t.fetch(void 0, r);
                        return r.throwOnError || (e = e.catch(n.m)), "paused" === t.state.fetchStatus ? Promise.resolve() : e
                    }))).then(n.m)
                }
                fetchQuery(t) {
                    let e = this.defaultQueryOptions(t);
                    void 0 === e.retry && (e.retry = !1);
                    let r = this.#w.build(this, e);
                    return r.isStaleByTime((0, n.r)(e.staleTime, r)) ? r.fetch(e) : Promise.resolve(r.state.data)
                }
                prefetchQuery(t) {
                    return this.fetchQuery(t).then(n.m).catch(n.m)
                }
                fetchInfiniteQuery(t) {
                    return t._type = "infinite", this.fetchQuery(t)
                }
                prefetchInfiniteQuery(t) {
                    return this.fetchInfiniteQuery(t).then(n.m).catch(n.m)
                }
                ensureInfiniteQueryData(t) {
                    return t._type = "infinite", this.ensureQueryData(t)
                }
                resumePausedMutations() {
                    return h.a.isOnline() ? this.#s.resumePausedMutations() : Promise.resolve()
                }
                getQueryCache() {
                    return this.#w
                }
                getMutationCache() {
                    return this.#s
                }
                getDefaultOptions() {
                    return this.#f
                }
                setDefaultOptions(t) {
                    this.#f = t
                }
                setQueryDefaults(t, e) {
                    this.#k.set((0, n.f)(t), {
                        queryKey: t,
                        defaultOptions: e
                    })
                }
                getQueryDefaults(t) {
                    let e = [...this.#k.values()],
                        r = {};
                    return e.forEach(e => {
                        (0, n.n)(t, e.queryKey) && Object.assign(r, e.defaultOptions)
                    }), r
                }
                setMutationDefaults(t, e) {
                    this.#S.set((0, n.f)(t), {
                        mutationKey: t,
                        defaultOptions: e
                    })
                }
                getMutationDefaults(t) {
                    let e = [...this.#S.values()],
                        r = {};
                    return e.forEach(e => {
                        (0, n.n)(t, e.mutationKey) && Object.assign(r, e.defaultOptions)
                    }), r
                }
                defaultQueryOptions(t) {
                    if (t._defaulted) return t;
                    let e = {
                        ...this.#f.queries,
                        ...this.getQueryDefaults(t.queryKey),
                        ...t,
                        _defaulted: !0
                    };
                    return e.queryHash || (e.queryHash = (0, n.g)(e.queryKey, e)), void 0 === e.refetchOnReconnect && (e.refetchOnReconnect = "always" !== e.networkMode), void 0 === e.throwOnError && (e.throwOnError = !!e.suspense), !e.networkMode && e.persister && (e.networkMode = "offlineFirst"), e.queryFn === n.u && (e.enabled = !1), e
                }
                defaultMutationOptions(t) {
                    return t?._defaulted ? t : {
                        ...this.#f.mutations,
                        ...t?.mutationKey && this.getMutationDefaults(t.mutationKey),
                        ...t,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.#w.clear(), this.#s.clear()
                }
            }
    }),
    suf: (function(t, e, r) {
        var n = r("wY"),
            i = r("wo"),
            s = r("rb"),
            o = r("Mt"),
            a = r("H4"),
            l = r("uy"),
            c = r("D7"),
            u = r("pE"),
            h = class extends a.a {
                constructor(t, e) {
                    super(), this.options = e, this.#n = t, this.#_ = null, this.#O = (0, l.a)(), this.bindMethods(), this.setOptions(e)
                }
                #n;
                #R = void 0;
                #D = void 0;
                #A = void 0;
                #M;
                #T;
                #O;
                #_;
                #I;
                #P;
                #j;
                #q;
                #U;
                #L;
                #N = new Set;
                bindMethods() {
                    this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.#R.addObserver(this), d(this.#R, this.options) ? this.#F() : this.updateResult(), this.#Q())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return f(this.#R, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return f(this.#R, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.#z(), this.#B(), this.#R.removeObserver(this)
                }
                setOptions(t) {
                    let e = this.options,
                        r = this.#R;
                    if (this.options = this.#n.defaultQueryOptions(t), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled && "function" != typeof this.options.enabled && "boolean" != typeof(0, c.q)(this.options.enabled, this.#R)) throw Error("Expected enabled to be a boolean or a callback that returns a boolean");
                    this.#H(), this.#R.setOptions(this.options), e._defaulted && !(0, c.s)(this.options, e) && this.#n.getQueryCache().notify({
                        type: "observerOptionsUpdated",
                        query: this.#R,
                        observer: this
                    });
                    let n = this.hasListeners();
                    n && p(this.#R, r, this.options, e) && this.#F(), this.updateResult(), n && (this.#R !== r || (0, c.q)(this.options.enabled, this.#R) !== (0, c.q)(e.enabled, this.#R) || (0, c.r)(this.options.staleTime, this.#R) !== (0, c.r)(e.staleTime, this.#R)) && this.#V();
                    let i = this.#K();
                    n && (this.#R !== r || (0, c.q)(this.options.enabled, this.#R) !== (0, c.q)(e.enabled, this.#R) || i !== this.#L) && this.#Y(i)
                }
                getOptimisticResult(t) {
                    var e, r;
                    let n = this.#n.getQueryCache().build(this.#n, t),
                        i = this.createResult(n, t);
                    return e = this, r = i, (0, c.s)(e.getCurrentResult(), r) || (this.#A = i, this.#T = this.options, this.#M = this.#R.state), i
                }
                getCurrentResult() {
                    return this.#A
                }
                trackResult(t, e) {
                    return new Proxy(t, {
                        get: (t, r) => (this.trackProp(r), e?.(r), "promise" === r && (this.trackProp("data"), this.options.experimental_prefetchInRender || "pending" !== this.#O.status || this.#O.reject(Error("experimental_prefetchInRender feature flag is not enabled"))), Reflect.get(t, r))
                    })
                }
                trackProp(t) {
                    this.#N.add(t)
                }
                getCurrentQuery() {
                    return this.#R
                }
                refetch({
                    ...t
                } = {}) {
                    return this.fetch({
                        ...t
                    })
                }
                fetchOptimistic(t) {
                    let e = this.#n.defaultQueryOptions(t),
                        r = this.#n.getQueryCache().build(this.#n, e);
                    return r.fetch().then(() => this.createResult(r, e))
                }
                fetch(t) {
                    return this.#F({
                        ...t,
                        cancelRefetch: t.cancelRefetch ?? !0
                    }).then(() => (this.updateResult(), this.#A))
                }
                #F(t) {
                    this.#H();
                    let e = this.#R.fetch(this.options, t);
                    return t?.throwOnError || (e = e.catch(c.m)), e
                }
                #V() {
                    this.#z();
                    let t = (0, c.r)(this.options.staleTime, this.#R);
                    if (i.a.isServer() || this.#A.isStale || !(0, c.i)(t)) return;
                    let e = (0, c.w)(this.#A.dataUpdatedAt, t);
                    this.#q = u.b.setTimeout(() => {
                        this.#A.isStale || this.updateResult()
                    }, e + 1)
                }
                #K() {
                    return ("function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.#R) : this.options.refetchInterval) ?? !1
                }
                #Y(t) {
                    this.#B(), this.#L = t, !i.a.isServer() && !1 !== (0, c.q)(this.options.enabled, this.#R) && (0, c.i)(this.#L) && 0 !== this.#L && (this.#U = u.b.setInterval(() => {
                        (this.options.refetchIntervalInBackground || n.a.isFocused()) && this.#F()
                    }, this.#L))
                }
                #Q() {
                    this.#V(), this.#Y(this.#K())
                }
                #z() {
                    void 0 !== this.#q && (u.b.clearTimeout(this.#q), this.#q = void 0)
                }
                #B() {
                    void 0 !== this.#U && (u.b.clearInterval(this.#U), this.#U = void 0)
                }
                createResult(t, e) {
                    let r, n = this.#R,
                        i = this.options,
                        s = this.#A,
                        a = this.#M,
                        u = this.#T,
                        h = t !== n ? t.state : this.#D,
                        {
                            state: f
                        } = t,
                        m = {
                            ...f
                        },
                        y = !1;
                    if (e._optimisticResults) {
                        let r = this.hasListeners(),
                            s = !r && d(t, e),
                            a = r && p(t, n, e, i);
                        (s || a) && (m = {
                            ...m,
                            ...(0, o.b)(f.data, t.options)
                        }), "isRestoring" === e._optimisticResults && (m.fetchStatus = "idle")
                    }
                    let {
                        error: b,
                        errorUpdatedAt: v,
                        status: w
                    } = m;
                    r = m.data;
                    let k = !1;
                    if (void 0 !== e.placeholderData && void 0 === r && "pending" === w) {
                        let t;
                        s?.isPlaceholderData && e.placeholderData === u?.placeholderData ? (t = s.data, k = !0) : t = "function" == typeof e.placeholderData ? e.placeholderData(this.#j?.state.data, this.#j) : e.placeholderData, void 0 !== t && (w = "success", r = (0, c.o)(s?.data, t, e), y = !0)
                    }
                    if (e.select && void 0 !== r && !k)
                        if (s && r === a?.data && e.select === this.#I) r = this.#P;
                        else try {
                            this.#I = e.select, r = e.select(r), r = (0, c.o)(s?.data, r, e), this.#P = r, this.#_ = null
                        } catch (t) {
                            this.#_ = t
                        }
                    this.#_ && (b = this.#_, r = this.#P, v = Date.now(), w = "error");
                    let S = "fetching" === m.fetchStatus,
                        E = "pending" === w,
                        x = "error" === w,
                        C = E && S,
                        _ = void 0 !== r,
                        O = {
                            status: w,
                            fetchStatus: m.fetchStatus,
                            isPending: E,
                            isSuccess: "success" === w,
                            isError: x,
                            isInitialLoading: C,
                            isLoading: C,
                            data: r,
                            dataUpdatedAt: m.dataUpdatedAt,
                            error: b,
                            errorUpdatedAt: v,
                            failureCount: m.fetchFailureCount,
                            failureReason: m.fetchFailureReason,
                            errorUpdateCount: m.errorUpdateCount,
                            isFetched: t.isFetched(),
                            isFetchedAfterMount: m.dataUpdateCount > h.dataUpdateCount || m.errorUpdateCount > h.errorUpdateCount,
                            isFetching: S,
                            isRefetching: S && !E,
                            isLoadingError: x && !_,
                            isPaused: "paused" === m.fetchStatus,
                            isPlaceholderData: y,
                            isRefetchError: x && _,
                            isStale: g(t, e),
                            refetch: this.refetch,
                            promise: this.#O,
                            isEnabled: !1 !== (0, c.q)(e.enabled, t)
                        };
                    if (this.options.experimental_prefetchInRender) {
                        let e = void 0 !== O.data,
                            r = "error" === O.status && !e,
                            i = t => {
                                r ? t.reject(O.error) : e && t.resolve(O.data)
                            },
                            s = () => {
                                i(this.#O = O.promise = (0, l.a)())
                            },
                            o = this.#O;
                        switch (o.status) {
                            case "pending":
                                t.queryHash === n.queryHash && i(o);
                                break;
                            case "fulfilled":
                                (r || O.data !== o.value) && s();
                                break;
                            case "rejected":
                                r && O.error === o.reason || s()
                        }
                    }
                    return O
                }
                updateResult() {
                    let t = this.#A,
                        e = this.createResult(this.#R, this.options);
                    if (this.#M = this.#R.state, this.#T = this.options, void 0 !== this.#M.data && (this.#j = this.#R), (0, c.s)(e, t)) return;
                    this.#A = e;
                    let r = () => {
                        if (!t) return !0;
                        let {
                            notifyOnChangeProps: e
                        } = this.options, r = "function" == typeof e ? e() : e;
                        if ("all" === r || !r && !this.#N.size) return !0;
                        let n = new Set(r ?? this.#N);
                        return this.options.throwOnError && n.add("error"), Object.keys(this.#A).some(e => this.#A[e] !== t[e] && n.has(e))
                    };
                    this.#$({
                        listeners: r()
                    })
                }
                #H() {
                    let t = this.#n.getQueryCache().build(this.#n, this.options);
                    if (t === this.#R) return;
                    let e = this.#R;
                    this.#R = t, this.#D = t.state, this.hasListeners() && (e?.removeObserver(this), t.addObserver(this))
                }
                onQueryUpdate() {
                    this.updateResult(), this.hasListeners() && this.#Q()
                }
                #$(t) {
                    s.a.batch(() => {
                        t.listeners && this.listeners.forEach(t => {
                            t(this.#A)
                        }), this.#n.getQueryCache().notify({
                            query: this.#R,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            };

        function d(t, e) {
            return !1 !== (0, c.q)(e.enabled, t) && void 0 === t.state.data && ("error" !== t.state.status || !1 !== (0, c.q)(e.retryOnMount, t)) || void 0 !== t.state.data && f(t, e, e.refetchOnMount)
        }

        function f(t, e, r) {
            if (!1 !== (0, c.q)(e.enabled, t) && "static" !== (0, c.r)(e.staleTime, t)) {
                let n = "function" == typeof r ? r(t) : r;
                return "always" === n || !1 !== n && g(t, e)
            }
            return !1
        }

        function p(t, e, r, n) {
            return (t !== e || !1 === (0, c.q)(n.enabled, t)) && (!r.suspense || "error" !== t.state.status) && g(t, r)
        }

        function g(t, e) {
            return !1 !== (0, c.q)(e.enabled, t) && t.isStaleByTime((0, c.r)(e.staleTime, t))
        }
        r.d(e, {
            a: () => h
        })
    }),
    OL: (function(t, e, r) {
        var n = r("pE"),
            i = r("wo"),
            s = r("D7"),
            o = class {
                #W;
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), (0, s.i)(this.gcTime) && (this.#W = n.b.setTimeout(() => {
                        this.optionalRemove()
                    }, this.gcTime))
                }
                updateGcTime(t) {
                    this.gcTime = Math.max(this.gcTime || 0, t ?? (i.a.isServer() ? 1 / 0 : 3e5))
                }
                clearGcTimeout() {
                    void 0 !== this.#W && (n.b.clearTimeout(this.#W), this.#W = void 0)
                }
            };
        r.d(e, {
            a: () => o
        })
    }),
    Nx: (function(t, e, r) {
        var n = r("wY"),
            i = r("HY"),
            s = r("uy"),
            o = r("wo"),
            a = r("D7");

        function l(t) {
            return Math.min(1e3 * 2 ** t, 3e4)
        }

        function c(t) {
            return (t ?? "online") !== "online" || i.a.isOnline()
        }
        var u = class extends Error {
            constructor(t) {
                super("CancelledError"), this.revert = t?.revert, this.silent = t?.silent
            }
        };

        function h(t) {
            let e, r = !1,
                h = 0,
                d = (0, s.a)(),
                f = () => n.a.isFocused() && ("always" === t.networkMode || i.a.isOnline()) && t.canRun(),
                p = () => c(t.networkMode) && t.canRun(),
                g = t => {
                    "pending" === d.status && (e?.(), d.resolve(t))
                },
                m = t => {
                    "pending" === d.status && (e?.(), d.reject(t))
                },
                y = () => new Promise(r => {
                    e = t => {
                        ("pending" !== d.status || f()) && r(t)
                    }, t.onPause?.()
                }).then(() => {
                    e = void 0, "pending" === d.status && t.onContinue?.()
                }),
                b = () => {
                    let e;
                    if ("pending" !== d.status) return;
                    let n = 0 === h ? t.initialPromise : void 0;
                    try {
                        e = n ?? t.fn()
                    } catch (t) {
                        e = Promise.reject(t)
                    }
                    Promise.resolve(e).then(g).catch(e => {
                        if ("pending" !== d.status) return;
                        let n = t.retry ?? 3 * !o.a.isServer(),
                            i = t.retryDelay ?? l,
                            s = "function" == typeof i ? i(h, e) : i,
                            c = !0 === n || "number" == typeof n && h < n || "function" == typeof n && n(h, e);
                        r || !c ? m(e) : (h++, t.onFail?.(h, e), (0, a.v)(s).then(() => f() ? void 0 : y()).then(() => {
                            r ? m(e) : b()
                        }))
                    })
                };
            return {
                promise: d,
                status: () => d.status,
                cancel: e => {
                    if ("pending" === d.status) {
                        let r = new u(e);
                        m(r), t.onCancel?.(r)
                    }
                },
                continue: () => (e?.(), d),
                cancelRetry: () => {
                    r = !0
                },
                continueRetry: () => {
                    r = !1
                },
                canStart: p,
                start: () => (p() ? b() : y().then(b), d)
            }
        }
        r.d(e, {
            a: () => u,
            b: () => c,
            c: () => h
        })
    }),
    Cyu: (function(t, e, r) {
        var n = r("D7");

        function i({
            streamFn: t,
            refetchMode: e = "reset",
            reducer: r = (t, e) => (0, n.b)(t, e),
            initialValue: s = []
        }) {
            return async i => {
                let o = i.client.getQueryCache().find({
                        queryKey: i.queryKey,
                        exact: !0
                    }),
                    a = !!o && o.isFetched();
                a && "reset" === e && o.setState({
                    ...o.resetState,
                    fetchStatus: "fetching"
                });
                let l = s,
                    c = !1,
                    u = (0, n.a)({
                        client: i.client,
                        meta: i.meta,
                        queryKey: i.queryKey,
                        pageParam: i.pageParam,
                        direction: i.direction
                    }, () => i.signal, () => c = !0),
                    h = await t(u),
                    d = a && "replace" === e;
                for await (let t of h) {
                    if (c) break;
                    d ? l = r(l, t) : i.client.setQueryData(i.queryKey, e => r(void 0 === e ? s : e, t))
                }
                return d && !c && i.client.setQueryData(i.queryKey, l), i.client.getQueryData(i.queryKey) ?? s
            }
        }
        r.d(e, {
            a: () => i
        })
    }),
    H4: (function(t, e, r) {
        var n = class {
            constructor() {
                this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
            }
            subscribe(t) {
                return this.listeners.add(t), this.onSubscribe(), () => {
                    this.listeners.delete(t), this.onUnsubscribe()
                }
            }
            hasListeners() {
                return this.listeners.size > 0
            }
            onSubscribe() {}
            onUnsubscribe() {}
        };
        r.d(e, {
            a: () => n
        })
    }),
    uy: (function(t, e, r) {
        function n() {
            let t, e, r = new Promise((r, n) => {
                t = r, e = n
            });

            function n(t) {
                Object.assign(r, t), delete r.resolve, delete r.reject
            }
            return r.status = "pending", r.catch(() => {}), r.resolve = e => {
                n({
                    status: "fulfilled",
                    value: e
                }), t(e)
            }, r.reject = t => {
                n({
                    status: "rejected",
                    reason: t
                }), e(t)
            }, r
        }
        r.d(e, {
            a: () => n
        })
    }),
    pE: (function(t, e, r) {
        var n = {
                setTimeout: (t, e) => setTimeout(t, e),
                clearTimeout: t => clearTimeout(t),
                setInterval: (t, e) => setInterval(t, e),
                clearInterval: t => clearInterval(t)
            },
            i = new class {
                #J = n;
                #G = !1;
                setTimeoutProvider(t) {
                    this.#J = t
                }
                setTimeout(t, e) {
                    return this.#J.setTimeout(t, e)
                }
                clearTimeout(t) {
                    this.#J.clearTimeout(t)
                }
                setInterval(t, e) {
                    return this.#J.setInterval(t, e)
                }
                clearInterval(t) {
                    this.#J.clearInterval(t)
                }
            };

        function s(t) {
            setTimeout(t, 0)
        }
        r.d(e, {
            a: () => s,
            b: () => i
        })
    }),
    D7: (function(t, e, r) {
        var n = r("pE"),
            i = "u" < typeof window || "Deno" in globalThis;

        function s() {}

        function o(t, e) {
            return "function" == typeof t ? t(e) : t
        }

        function a(t) {
            return "number" == typeof t && t >= 0 && 1 / 0 !== t
        }

        function l(t, e) {
            return Math.max(t + (e || 0) - Date.now(), 0)
        }

        function c(t, e) {
            return "function" == typeof t ? t(e) : t
        }

        function u(t, e) {
            return "function" == typeof t ? t(e) : t
        }

        function h(t, e) {
            let {
                type: r = "all",
                exact: n,
                fetchStatus: i,
                predicate: s,
                queryKey: o,
                stale: a
            } = t;
            if (o) {
                if (n) {
                    if (e.queryHash !== f(o, e.options)) return !1
                } else if (!g(e.queryKey, o)) return !1
            }
            if ("all" !== r) {
                let t = e.isActive();
                if ("active" === r && !t || "inactive" === r && t) return !1
            }
            return ("boolean" != typeof a || e.isStale() === a) && (!i || i === e.state.fetchStatus) && (!s || !!s(e))
        }

        function d(t, e) {
            let {
                exact: r,
                status: n,
                predicate: i,
                mutationKey: s
            } = t;
            if (s) {
                if (!e.options.mutationKey) return !1;
                if (r) {
                    if (p(e.options.mutationKey) !== p(s)) return !1
                } else if (!g(e.options.mutationKey, s)) return !1
            }
            return (!n || e.state.status === n) && (!i || !!i(e))
        }

        function f(t, e) {
            return (e?.queryKeyHashFn || p)(t)
        }

        function p(t) {
            return JSON.stringify(t, (t, e) => w(e) ? Object.keys(e).sort().reduce((t, r) => (t[r] = e[r], t), {}) : e)
        }

        function g(t, e) {
            return t === e || typeof t == typeof e && !!t && !!e && "object" == typeof t && "object" == typeof e && Object.keys(e).every(r => g(t[r], e[r]))
        }
        var m = Object.prototype.hasOwnProperty;

        function y(t, e, r = 0) {
            if (t === e) return t;
            if (r > 500) return e;
            let n = v(t) && v(e);
            if (!n && !(w(t) && w(e))) return e;
            let i = (n ? t : Object.keys(t)).length,
                s = n ? e : Object.keys(e),
                o = s.length,
                a = n ? Array(o) : {},
                l = 0;
            for (let c = 0; c < o; c++) {
                let o = n ? c : s[c],
                    u = t[o],
                    h = e[o];
                if (u === h) {
                    a[o] = u, (n ? c < i : m.call(t, o)) && l++;
                    continue
                }
                if (null === u || null === h || "object" != typeof u || "object" != typeof h) {
                    a[o] = h;
                    continue
                }
                let d = y(u, h, r + 1);
                a[o] = d, d === u && l++
            }
            return i === o && l === i ? t : a
        }

        function b(t, e) {
            if (!e || Object.keys(t).length !== Object.keys(e).length) return !1;
            for (let r in t)
                if (t[r] !== e[r]) return !1;
            return !0
        }

        function v(t) {
            return Array.isArray(t) && t.length === Object.keys(t).length
        }

        function w(t) {
            if (!k(t)) return !1;
            let e = t.constructor;
            if (void 0 === e) return !0;
            let r = e.prototype;
            return !!k(r) && !!r.hasOwnProperty("isPrototypeOf") && Object.getPrototypeOf(t) === Object.prototype
        }

        function k(t) {
            return "[object Object]" === Object.prototype.toString.call(t)
        }

        function S(t) {
            return new Promise(e => {
                n.b.setTimeout(e, t)
            })
        }

        function E(t, e, r) {
            return "function" == typeof r.structuralSharing ? r.structuralSharing(t, e) : !1 !== r.structuralSharing ? y(t, e) : e
        }

        function x(t) {
            return t
        }

        function C(t, e, r = 0) {
            let n = [...t, e];
            return r && n.length > r ? n.slice(1) : n
        }

        function _(t, e, r = 0) {
            let n = [e, ...t];
            return r && n.length > r ? n.slice(0, -1) : n
        }
        var O = Symbol();

        function R(t, e) {
            return !t.queryFn && e?.initialPromise ? () => e.initialPromise : t.queryFn && t.queryFn !== O ? t.queryFn : () => Promise.reject(Error(`Missing queryFn: '${t.queryHash}'`))
        }

        function D(t, e) {
            return "function" == typeof t ? t(...e) : !!t
        }

        function A(t, e, r) {
            let n, i = !1;
            return Object.defineProperty(t, "signal", {
                enumerable: !0,
                get: () => (n ??= e(), i || (i = !0, n.aborted ? r() : n.addEventListener("abort", r, {
                    once: !0
                })), n)
            }), t
        }
        r.d(e, {
            a: () => A,
            b: () => C,
            c: () => _,
            d: () => R,
            e: () => o,
            f: () => p,
            g: () => f,
            h: () => i,
            i: () => a,
            j: () => x,
            k: () => d,
            l: () => h,
            m: () => s,
            n: () => g,
            o: () => E,
            p: () => y,
            q: () => u,
            r: () => c,
            s: () => b,
            t: () => D,
            u: () => O,
            v: () => S,
            w: () => l
        })
    }),
    l8d: (function(t, e, r) {
        var n = function() {
            return null
        };
        r.d(e, {
            a: () => n
        })
    }),
    Xnf: (function(t, e, r) {
        var n = r("zd"),
            i = n.createContext(!1),
            s = () => n.useContext(i);
        i.Provider, r.d(e, {
            a: () => s
        })
    }),
    ir: (function(t, e, r) {
        var n = r("zd"),
            i = r("A"),
            s = n.createContext(void 0),
            o = t => {
                let e = n.useContext(s);
                if (t) return t;
                if (!e) throw Error("No QueryClient set, use QueryClientProvider to set one");
                return e
            },
            a = ({
                client: t,
                children: e
            }) => (n.useEffect(() => (t.mount(), () => {
                t.unmount()
            }), [t]), (0, i.jsx)(s.Provider, {
                value: t,
                children: e
            }));
        r.d(e, {
            a: () => s,
            b: () => a,
            c: () => o
        })
    }),
    jf: (function(t, e, r) {
        let n;
        var i = r("zd");
        r("A");
        var s = i.createContext((n = !1, {
                clearReset: () => {
                    n = !1
                },
                reset: () => {
                    n = !0
                },
                isReset: () => n
            })),
            o = () => i.useContext(s);
        r.d(e, {
            a: () => o
        })
    }),
    trG: (function(t, e, r) {
        var n = r("zd"),
            i = r("D7"),
            s = (t, e, r) => {
                let n = r?.state.error && "function" == typeof t.throwOnError ? (0, i.t)(t.throwOnError, [r.state.error, r]) : t.throwOnError;
                (t.suspense || t.experimental_prefetchInRender || n) && !e.isReset() && (t.retryOnMount = !1)
            },
            o = t => {
                n.useEffect(() => {
                    t.clearReset()
                }, [t])
            },
            a = ({
                result: t,
                errorResetBoundary: e,
                throwOnError: r,
                query: n,
                suspense: s
            }) => t.isError && !e.isReset() && !t.isFetching && n && (s && void 0 === t.data || (0, i.t)(r, [t.error, n]));
        r.d(e, {
            a: () => s,
            b: () => a,
            c: () => o
        })
    }),
    WCb: (function(t, e, r) {
        function n(t) {
            return t
        }
        r.d(e, {
            a: () => n
        })
    }),
    S2r: (function(t, e, r) {
        function n(t) {
            return t
        }
        r.d(e, {
            a: () => n
        })
    }),
    VK: (function(t, e, r) {
        var n = t => {
                if (t.suspense) {
                    let e = t => "static" === t ? t : Math.max(t ?? 1e3, 1e3),
                        r = t.staleTime;
                    t.staleTime = "function" == typeof r ? (...t) => e(r(...t)) : e(r), "number" == typeof t.gcTime && (t.gcTime = Math.max(t.gcTime, 1e3))
                }
            },
            i = (t, e) => t.isLoading && t.isFetching && !e,
            s = (t, e) => t?.suspense && e.isPending,
            o = (t, e, r) => e.fetchOptimistic(t).catch(() => {
                r.clearReset()
            });
        r.d(e, {
            a: () => n,
            b: () => o,
            c: () => s,
            d: () => i
        })
    }),
    fwQ: (function(t, e, r) {
        var n = r("zd"),
            i = r("rb"),
            s = r("D7"),
            o = r("wo"),
            a = r("ir"),
            l = r("jf"),
            c = r("trG"),
            u = r("Xnf"),
            h = r("VK");

        function d(t, e, r) {
            let d = (0, u.a)(),
                f = (0, l.a)(),
                p = (0, a.c)(r),
                g = p.defaultQueryOptions(t);
            p.getDefaultOptions().queries?._experimental_beforeQuery?.(g);
            let m = p.getQueryCache().get(g.queryHash),
                y = !1 !== t.subscribed;
            g._optimisticResults = d ? "isRestoring" : y ? "optimistic" : void 0, (0, h.a)(g), (0, c.a)(g, f, m), (0, c.c)(f);
            let b = !p.getQueryCache().get(g.queryHash),
                [v] = n.useState(() => new e(p, g)),
                w = v.getOptimisticResult(g),
                k = !d && y;
            if (n.useSyncExternalStore(n.useCallback(t => {
                    let e = k ? v.subscribe(i.a.batchCalls(t)) : s.m;
                    return v.updateResult(), e
                }, [v, k]), () => v.getCurrentResult(), () => v.getCurrentResult()), n.useEffect(() => {
                    v.setOptions(g)
                }, [g, v]), (0, h.c)(g, w)) throw (0, h.b)(g, v, f);
            if ((0, c.b)({
                    result: w,
                    errorResetBoundary: f,
                    throwOnError: g.throwOnError,
                    query: m,
                    suspense: g.suspense
                })) throw w.error;
            if (p.getDefaultOptions().queries?._experimental_afterQuery?.(g, w), g.experimental_prefetchInRender && !o.a.isServer() && (0, h.d)(w, d)) {
                let t = b ? (0, h.b)(g, v, f) : m?.promise;
                t?.catch(s.m).finally(() => {
                    v.updateResult()
                })
            }
            return g.notifyOnChangeProps ? w : v.trackResult(w)
        }
        r.d(e, {
            a: () => d
        })
    }),
    uri: (function(t, e, r) {
        var n = r("Cd"),
            i = r("fwQ");

        function s(t, e) {
            return (0, i.a)(t, n.a, e)
        }
        r.d(e, {
            a: () => s
        })
    }),
    xSO: (function(t, e, r) {
        r.d(e, {
            a: () => u
        });
        var n = r("zd"),
            i = r("UK"),
            s = r("rb"),
            o = r("H4"),
            a = r("D7"),
            l = class extends o.a {
                #n;
                #A = void 0;
                #X;
                #Z;
                constructor(t, e) {
                    super(), this.#n = t, this.setOptions(e), this.bindMethods(), this.#tt()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(t) {
                    let e = this.options;
                    this.options = this.#n.defaultMutationOptions(t), (0, a.s)(this.options, e) || this.#n.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.#X,
                        observer: this
                    }), e?.mutationKey && this.options.mutationKey && (0, a.f)(e.mutationKey) !== (0, a.f)(this.options.mutationKey) ? this.reset() : this.#X?.state.status === "pending" && this.#X.setOptions(this.options)
                }
                onUnsubscribe() {
                    this.hasListeners() || this.#X?.removeObserver(this)
                }
                onMutationUpdate(t) {
                    this.#tt(), this.#$(t)
                }
                getCurrentResult() {
                    return this.#A
                }
                reset() {
                    this.#X?.removeObserver(this), this.#X = void 0, this.#tt(), this.#$()
                }
                mutate(t, e) {
                    return this.#Z = e, this.#X?.removeObserver(this), this.#X = this.#n.getMutationCache().build(this.#n, this.options), this.#X.addObserver(this), this.#X.execute(t)
                }
                #tt() {
                    let t = this.#X?.state ?? (0, i.b)();
                    this.#A = {
                        ...t,
                        isPending: "pending" === t.status,
                        isSuccess: "success" === t.status,
                        isError: "error" === t.status,
                        isIdle: "idle" === t.status,
                        mutate: this.mutate,
                        reset: this.reset
                    }
                }
                #$(t) {
                    s.a.batch(() => {
                        if (this.#Z && this.hasListeners()) {
                            let e = this.#A.variables,
                                r = this.#A.context,
                                n = {
                                    client: this.#n,
                                    meta: this.options.meta,
                                    mutationKey: this.options.mutationKey
                                };
                            if (t?.type === "success") {
                                try {
                                    this.#Z.onSuccess?.(t.data, e, r, n)
                                } catch (t) {
                                    Promise.reject(t)
                                }
                                try {
                                    this.#Z.onSettled?.(t.data, null, e, r, n)
                                } catch (t) {
                                    Promise.reject(t)
                                }
                            } else if (t?.type === "error") {
                                try {
                                    this.#Z.onError?.(t.error, e, r, n)
                                } catch (t) {
                                    Promise.reject(t)
                                }
                                try {
                                    this.#Z.onSettled?.(void 0, t.error, e, r, n)
                                } catch (t) {
                                    Promise.reject(t)
                                }
                            }
                        }
                        this.listeners.forEach(t => {
                            t(this.#A)
                        })
                    })
                }
            },
            c = r("ir");

        function u(t, e) {
            let r = (0, c.c)(e),
                [i] = n.useState(() => new l(r, t));
            n.useEffect(() => {
                i.setOptions(t)
            }, [i, t]);
            let o = n.useSyncExternalStore(n.useCallback(t => i.subscribe(s.a.batchCalls(t)), [i]), () => i.getCurrentResult(), () => i.getCurrentResult()),
                u = n.useCallback((t, e) => {
                    i.mutate(t, e).catch(a.m)
                }, [i]);
            if (o.error && (0, a.t)(i.options.throwOnError, [o.error])) throw o.error;
            return {
                ...o,
                mutate: u,
                mutateAsync: o.mutate
            }
        }
    }),
    cE8: (function(t, e, r) {
        var n = r("zd"),
            i = r("D7"),
            s = r("rb"),
            o = r("ir");

        function a(t, e) {
            let r = (0, o.c)(e);
            return c({
                filters: {
                    ...t,
                    status: "pending"
                }
            }, r).length
        }

        function l(t, e) {
            return t.findAll(e.filters).map(t => e.select ? e.select(t) : t.state)
        }

        function c(t = {}, e) {
            let r = (0, o.c)(e).getMutationCache(),
                a = n.useRef(t),
                u = n.useRef(null);
            return null === u.current && (u.current = l(r, t)), n.useEffect(() => {
                a.current = t
            }), n.useSyncExternalStore(n.useCallback(t => r.subscribe(() => {
                let e = (0, i.p)(u.current, l(r, a.current));
                u.current !== e && (u.current = e, s.a.schedule(t))
            }), [r]), () => u.current, () => u.current)
        }
        r.d(e, {
            a: () => a,
            b: () => c
        })
    }),
    fxC: (function(t, e, r) {
        r.d(e, {
            a: () => g
        });
        var n = r("zd"),
            i = r("rb"),
            s = r("suf"),
            o = r("H4"),
            a = r("D7");

        function l(t, e) {
            let r = new Set(e);
            return t.filter(t => !r.has(t))
        }
        var c = class extends o.a {
                #n;
                #te;
                #m;
                #tr;
                #i;
                #tn;
                #ti;
                #ts;
                #to;
                #ta = [];
                constructor(t, e, r) {
                    super(), this.#n = t, this.#tr = r, this.#m = [], this.#i = [], this.#te = [], this.setQueries(e)
                }
                onSubscribe() {
                    1 === this.listeners.size && this.#i.forEach(t => {
                        t.subscribe(e => {
                            this.#tl(t, e)
                        })
                    })
                }
                onUnsubscribe() {
                    this.listeners.size || this.destroy()
                }
                destroy() {
                    this.listeners = new Set, this.#i.forEach(t => {
                        t.destroy()
                    })
                }
                setQueries(t, e) {
                    this.#m = t, this.#tr = e, i.a.batch(() => {
                        let t = this.#i,
                            e = this.#tc(this.#m);
                        e.forEach(t => t.observer.setOptions(t.defaultedQueryOptions));
                        let r = e.map(t => t.observer),
                            n = r.map(t => t.getCurrentResult()),
                            i = t.length !== r.length,
                            s = r.some((e, r) => e !== t[r]),
                            o = i || s,
                            c = !!o || n.some((t, e) => {
                                let r = this.#te[e];
                                return !r || !(0, a.s)(t, r)
                            });
                        (o || c) && (o && (this.#ta = e, this.#i = r), this.#te = n, this.hasListeners() && (o && (l(t, r).forEach(t => {
                            t.destroy()
                        }), l(r, t).forEach(t => {
                            t.subscribe(e => {
                                this.#tl(t, e)
                            })
                        })), this.#$()))
                    })
                }
                getCurrentResult() {
                    return this.#te
                }
                getQueries() {
                    return this.#i.map(t => t.getCurrentQuery())
                }
                getObservers() {
                    return this.#i
                }
                getOptimisticResult(t, e) {
                    let r = this.#tc(t),
                        n = r.map(t => t.observer.getOptimisticResult(t.defaultedQueryOptions)),
                        i = r.map(t => t.defaultedQueryOptions.queryHash);
                    return [n, t => this.#tu(t ?? n, e, i), () => this.#th(n, r)]
                }
                #th(t, e) {
                    return e.map((r, n) => {
                        let i = t[n];
                        return r.defaultedQueryOptions.notifyOnChangeProps ? i : r.observer.trackResult(i, t => {
                            e.forEach(e => {
                                e.observer.trackProp(t)
                            })
                        })
                    })
                }
                #tu(t, e, r) {
                    if (e) {
                        let n = this.#to,
                            i = void 0 !== r && void 0 !== n && (n.length !== r.length || r.some((t, e) => t !== n[e]));
                        return (!this.#tn || this.#te !== this.#ts || i || e !== this.#ti) && (this.#ti = e, this.#ts = this.#te, void 0 !== r && (this.#to = r), this.#tn = (0, a.p)(this.#tn, e(t))), this.#tn
                    }
                    return t
                }
                #td() {
                    return this.#tr?.combine !== void 0 && this.#i.some((t, e) => t.options.suspense && this.#te[e]?.data === void 0)
                }
                #tc(t) {
                    let e = new Map;
                    this.#i.forEach(t => {
                        let r = t.options.queryHash;
                        if (!r) return;
                        let n = e.get(r);
                        n ? n.push(t) : e.set(r, [t])
                    });
                    let r = [];
                    return t.forEach(t => {
                        let n = this.#n.defaultQueryOptions(t),
                            i = e.get(n.queryHash)?.shift() ?? new s.a(this.#n, n);
                        r.push({
                            defaultedQueryOptions: n,
                            observer: i
                        })
                    }), r
                }
                #tl(t, e) {
                    let r = this.#i.indexOf(t);
                    if (-1 !== r) {
                        var n;
                        let t;
                        this.#te = (n = this.#te, (t = n.slice(0))[r] = e, t), this.#$()
                    }
                }
                #$() {
                    if (this.hasListeners()) {
                        let t = this.#th(this.#te, this.#ta),
                            e = this.#td(),
                            r = this.#tn,
                            n = e ? r : this.#tu(t, this.#tr?.combine);
                        (e || r !== n) && i.a.batch(() => {
                            this.listeners.forEach(t => {
                                t(this.#te)
                            })
                        })
                    }
                }
            },
            u = r("ir"),
            h = r("Xnf"),
            d = r("jf"),
            f = r("trG"),
            p = r("VK");

        function g({
            queries: t,
            ...e
        }, r) {
            let o = (0, u.c)(r),
                l = (0, h.a)(),
                m = (0, d.a)(),
                y = n.useMemo(() => t.map(t => {
                    let e = o.defaultQueryOptions(t);
                    return e._optimisticResults = l ? "isRestoring" : "optimistic", e
                }), [t, o, l]);
            y.forEach(t => {
                (0, p.a)(t);
                let e = o.getQueryCache().get(t.queryHash);
                (0, f.a)(t, m, e)
            }), (0, f.c)(m);
            let [b] = n.useState(() => new c(o, y, e)), [v, w, k] = b.getOptimisticResult(y, e.combine), S = !l && !1 !== e.subscribed;
            n.useSyncExternalStore(n.useCallback(t => S ? b.subscribe(i.a.batchCalls(t)) : a.m, [b, S]), () => b.getCurrentResult(), () => b.getCurrentResult()), n.useEffect(() => {
                b.setQueries(y, e)
            }, [y, e, b]);
            let E = v.some((t, e) => (0, p.c)(y[e], t)) ? v.flatMap((t, e) => {
                let r = y[e];
                if (r && (0, p.c)(r, t)) {
                    let t = new s.a(o, r);
                    return (0, p.b)(r, t, m)
                }
                return []
            }) : [];
            if (E.length > 0) throw Promise.all(E);
            let x = v.find((t, e) => {
                let r = y[e];
                return r && (0, f.b)({
                    result: t,
                    errorResetBoundary: m,
                    throwOnError: r.throwOnError,
                    query: o.getQueryCache().get(r.queryHash),
                    suspense: r.suspense
                })
            });
            if (x?.error) throw x.error;
            return w(k())
        }
    }),
    T0: (function(t, e, r) {
        var n = r("suf"),
            i = r("fwQ");

        function s(t, e) {
            return (0, i.a)(t, n.a, e)
        }
        r.d(e, {
            a: () => s
        })
    }),
    r9: (function(t, e, r) {
        r.d(e, {
            a: () => i,
            b: () => o
        });
        let n = () => {
                let t, e, r = new Promise((r, n) => {
                    t = r, e = n
                });
                return {
                    resolve: t,
                    reject: e,
                    value: r
                }
            },
            i = (t, e) => {
                let r = t.name ?? `batcher:${Math.random().toString(16).slice(2)})`,
                    i = t.scheduler ?? s(10),
                    o = globalThis.__BATSHIT_DEVTOOLS__?.for(r),
                    a = e ?? {
                        seq: 0,
                        batch: new Set,
                        currentRequest: n(),
                        timer: void 0,
                        start: null,
                        latest: null
                    };
                return o?.create({
                    seq: a.seq
                }), {
                    fetch: e => {
                        a.start || (a.start = Date.now()), a.latest = Date.now(), a.batch.add(e), clearTimeout(a.timer);
                        let r = i(a.start, a.latest, a.batch.size);
                        o?.queue({
                            seq: a.seq,
                            query: e,
                            batch: [...a.batch],
                            scheduled: r,
                            latest: a.latest,
                            start: a.start
                        });
                        let s = () => {
                            let e = a.seq,
                                r = t.fetcher([...a.batch]),
                                i = a.currentRequest;
                            return o?.fetch({
                                seq: e,
                                batch: [...a.batch]
                            }), a.batch = new Set, a.currentRequest = n(), a.timer = void 0, a.start = null, a.latest = null, r.then(t => {
                                o?.data({
                                    seq: e,
                                    data: t
                                }), i.resolve(t)
                            }).catch(t => {
                                o?.error({
                                    seq: e,
                                    error: t
                                }), i.reject(t)
                            }), a.seq++, r
                        };
                        if ("immediate" === r) {
                            let r = a.currentRequest;
                            return s(), r.value.then(r => t.resolver(r, e))
                        }
                        return "never" === r ? a.currentRequest.value.then(r => t.resolver(r, e)) : (a.timer = setTimeout(s, r), a.currentRequest.value.then(r => t.resolver(r, e)))
                    }
                }
            },
            s = t => (e, r) => t - (r - e),
            o = ({
                windowMs: t,
                maxBatchSize: e
            }) => (r, n, i) => i >= e ? "immediate" : t - (n - r)
    }),
    P6: (function(t, e, r) {
        var n = r("zd"),
            i = r("v7");
        let s = Array(12).fill(0),
            o = ({
                visible: t,
                className: e
            }) => n.createElement("div", {
                className: ["sonner-loading-wrapper", e].filter(Boolean).join(" "),
                "data-visible": t
            }, n.createElement("div", {
                className: "sonner-spinner"
            }, s.map((t, e) => n.createElement("div", {
                className: "sonner-loading-bar",
                key: `spinner-bar-${e}`
            })))),
            a = n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, n.createElement("path", {
                fillRule: "evenodd",
                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                clipRule: "evenodd"
            })),
            l = n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, n.createElement("path", {
                fillRule: "evenodd",
                d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                clipRule: "evenodd"
            })),
            c = n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, n.createElement("path", {
                fillRule: "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                clipRule: "evenodd"
            })),
            u = n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 20 20",
                fill: "currentColor",
                height: "20",
                width: "20"
            }, n.createElement("path", {
                fillRule: "evenodd",
                d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                clipRule: "evenodd"
            })),
            h = n.createElement("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "12",
                height: "12",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }, n.createElement("line", {
                x1: "18",
                y1: "6",
                x2: "6",
                y2: "18"
            }), n.createElement("line", {
                x1: "6",
                y1: "6",
                x2: "18",
                y2: "18"
            })),
            d = 1,
            f = new class {
                constructor() {
                    this.subscribe = t => (this.subscribers.push(t), () => {
                        let e = this.subscribers.indexOf(t);
                        this.subscribers.splice(e, 1)
                    }), this.publish = t => {
                        this.subscribers.forEach(e => e(t))
                    }, this.addToast = t => {
                        this.publish(t), this.toasts = [...this.toasts, t]
                    }, this.create = t => {
                        var e;
                        let {
                            message: r,
                            ...n
                        } = t, i = "number" == typeof(null == t ? void 0 : t.id) || (null == (e = t.id) ? void 0 : e.length) > 0 ? t.id : d++, s = this.toasts.find(t => t.id === i), o = void 0 === t.dismissible || t.dismissible;
                        return this.dismissedToasts.has(i) && this.dismissedToasts.delete(i), s ? this.toasts = this.toasts.map(e => e.id === i ? (this.publish({
                            ...e,
                            ...t,
                            id: i,
                            title: r
                        }), {
                            ...e,
                            ...t,
                            id: i,
                            dismissible: o,
                            title: r
                        }) : e) : this.addToast({
                            title: r,
                            ...n,
                            dismissible: o,
                            id: i
                        }), i
                    }, this.dismiss = t => (t ? (this.dismissedToasts.add(t), requestAnimationFrame(() => this.subscribers.forEach(e => e({
                        id: t,
                        dismiss: !0
                    })))) : this.toasts.forEach(t => {
                        this.subscribers.forEach(e => e({
                            id: t.id,
                            dismiss: !0
                        }))
                    }), t), this.message = (t, e) => this.create({
                        ...e,
                        message: t
                    }), this.error = (t, e) => this.create({
                        ...e,
                        message: t,
                        type: "error"
                    }), this.success = (t, e) => this.create({
                        ...e,
                        type: "success",
                        message: t
                    }), this.info = (t, e) => this.create({
                        ...e,
                        type: "info",
                        message: t
                    }), this.warning = (t, e) => this.create({
                        ...e,
                        type: "warning",
                        message: t
                    }), this.loading = (t, e) => this.create({
                        ...e,
                        type: "loading",
                        message: t
                    }), this.promise = (t, e) => {
                        let r, i;
                        if (!e) return;
                        void 0 !== e.loading && (i = this.create({
                            ...e,
                            promise: t,
                            type: "loading",
                            message: e.loading,
                            description: "function" != typeof e.description ? e.description : void 0
                        }));
                        let s = Promise.resolve(t instanceof Function ? t() : t),
                            o = void 0 !== i,
                            a = s.then(async t => {
                                if (r = ["resolve", t], n.isValidElement(t)) o = !1, this.create({
                                    id: i,
                                    type: "default",
                                    message: t
                                });
                                else if (p(t) && !t.ok) {
                                    o = !1;
                                    let r = "function" == typeof e.error ? await e.error(`HTTP error! status: ${t.status}`) : e.error,
                                        s = "function" == typeof e.description ? await e.description(`HTTP error! status: ${t.status}`) : e.description,
                                        a = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: i,
                                        type: "error",
                                        description: s,
                                        ...a
                                    })
                                } else if (t instanceof Error) {
                                    o = !1;
                                    let r = "function" == typeof e.error ? await e.error(t) : e.error,
                                        s = "function" == typeof e.description ? await e.description(t) : e.description,
                                        a = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: i,
                                        type: "error",
                                        description: s,
                                        ...a
                                    })
                                } else if (void 0 !== e.success) {
                                    o = !1;
                                    let r = "function" == typeof e.success ? await e.success(t) : e.success,
                                        s = "function" == typeof e.description ? await e.description(t) : e.description,
                                        a = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: i,
                                        type: "success",
                                        description: s,
                                        ...a
                                    })
                                }
                            }).catch(async t => {
                                if (r = ["reject", t], void 0 !== e.error) {
                                    o = !1;
                                    let r = "function" == typeof e.error ? await e.error(t) : e.error,
                                        s = "function" == typeof e.description ? await e.description(t) : e.description,
                                        a = "object" != typeof r || n.isValidElement(r) ? {
                                            message: r
                                        } : r;
                                    this.create({
                                        id: i,
                                        type: "error",
                                        description: s,
                                        ...a
                                    })
                                }
                            }).finally(() => {
                                o && (this.dismiss(i), i = void 0), null == e.finally || e.finally.call(e)
                            }),
                            l = () => new Promise((t, e) => a.then(() => "reject" === r[0] ? e(r[1]) : t(r[1])).catch(e));
                        return "string" != typeof i && "number" != typeof i ? {
                            unwrap: l
                        } : Object.assign(i, {
                            unwrap: l
                        })
                    }, this.custom = (t, e) => {
                        let r = (null == e ? void 0 : e.id) || d++;
                        return this.create({
                            jsx: t(r),
                            id: r,
                            ...e
                        }), r
                    }, this.getActiveToasts = () => this.toasts.filter(t => !this.dismissedToasts.has(t.id)), this.subscribers = [], this.toasts = [], this.dismissedToasts = new Set
                }
            },
            p = t => t && "object" == typeof t && "ok" in t && "boolean" == typeof t.ok && "status" in t && "number" == typeof t.status,
            g = Object.assign((t, e) => {
                let r = (null == e ? void 0 : e.id) || d++;
                return f.addToast({
                    title: t,
                    ...e,
                    id: r
                }), r
            }, {
                success: f.success,
                info: f.info,
                warning: f.warning,
                error: f.error,
                custom: f.custom,
                message: f.message,
                promise: f.promise,
                dismiss: f.dismiss,
                loading: f.loading
            }, {
                getHistory: () => f.toasts,
                getToasts: () => f.getActiveToasts()
            });

        function m(t) {
            return void 0 !== t.label
        }

        function y(...t) {
            return t.filter(Boolean).join(" ")
        }! function(t) {
            if (!t || "u" < typeof document) return;
            let e = document.head || document.getElementsByTagName("head")[0],
                r = document.createElement("style");
            r.type = "text/css", e.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t))
        }("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");
        let b = t => {
            var e, r, i, s, d, f, p, g, b, v, w, k, S;
            let {
                invert: E,
                toast: x,
                unstyled: C,
                interacting: _,
                setHeights: O,
                visibleToasts: R,
                heights: D,
                index: A,
                toasts: M,
                expanded: T,
                removeToast: I,
                defaultRichColors: P,
                closeButton: j,
                style: q,
                cancelButtonStyle: U,
                actionButtonStyle: L,
                className: N = "",
                descriptionClassName: F = "",
                duration: Q,
                position: z,
                gap: B,
                expandByDefault: H,
                classNames: V,
                icons: K,
                closeButtonAriaLabel: Y = "Close toast"
            } = t, [$, W] = n.useState(null), [J, G] = n.useState(null), [X, Z] = n.useState(!1), [tt, te] = n.useState(!1), [tr, tn] = n.useState(!1), [ti, ts] = n.useState(!1), [to, ta] = n.useState(!1), [tl, tc] = n.useState(0), [tu, th] = n.useState(0), td = n.useRef(x.duration || Q || 4e3), tf = n.useRef(null), tp = n.useRef(null), tg = 0 === A, tm = A + 1 <= R, ty = x.type, tb = !1 !== x.dismissible, tv = x.className || "", tw = x.descriptionClassName || "", tk = n.useMemo(() => D.findIndex(t => t.toastId === x.id) || 0, [D, x.id]), tS = n.useMemo(() => {
                var t;
                return null != (t = x.closeButton) ? t : j
            }, [x.closeButton, j]), tE = n.useMemo(() => x.duration || Q || 4e3, [x.duration, Q]), tx = n.useRef(0), tC = n.useRef(0), t_ = n.useRef(0), tO = n.useRef(null), [tR, tD] = z.split("-"), tA = n.useMemo(() => D.reduce((t, e, r) => r >= tk ? t : t + e.height, 0), [D, tk]), tM = (() => {
                let [t, e] = n.useState(document.hidden);
                return n.useEffect(() => {
                    let t = () => {
                        e(document.hidden)
                    };
                    return document.addEventListener("visibilitychange", t), () => window.removeEventListener("visibilitychange", t)
                }, []), t
            })(), tT = x.invert || E, tI = "loading" === ty;
            tC.current = n.useMemo(() => tk * B + tA, [tk, tA]), n.useEffect(() => {
                td.current = tE
            }, [tE]), n.useEffect(() => {
                Z(!0)
            }, []), n.useEffect(() => {
                let t = tp.current;
                if (t) {
                    let e = t.getBoundingClientRect().height;
                    return th(e), O(t => [{
                        toastId: x.id,
                        height: e,
                        position: x.position
                    }, ...t]), () => O(t => t.filter(t => t.toastId !== x.id))
                }
            }, [O, x.id]), n.useLayoutEffect(() => {
                if (!X) return;
                let t = tp.current,
                    e = t.style.height;
                t.style.height = "auto";
                let r = t.getBoundingClientRect().height;
                t.style.height = e, th(r), O(t => t.find(t => t.toastId === x.id) ? t.map(t => t.toastId === x.id ? {
                    ...t,
                    height: r
                } : t) : [{
                    toastId: x.id,
                    height: r,
                    position: x.position
                }, ...t])
            }, [X, x.title, x.description, O, x.id, x.jsx, x.action, x.cancel]);
            let tP = n.useCallback(() => {
                te(!0), tc(tC.current), O(t => t.filter(t => t.toastId !== x.id)), setTimeout(() => {
                    I(x)
                }, 200)
            }, [x, I, O, tC]);
            n.useEffect(() => {
                let t;
                if ((!x.promise || "loading" !== ty) && 1 / 0 !== x.duration && "loading" !== x.type) {
                    if (T || _ || tM) {
                        if (t_.current < tx.current) {
                            let t = new Date().getTime() - tx.current;
                            td.current = td.current - t
                        }
                        t_.current = new Date().getTime()
                    } else 1 / 0 !== td.current && (tx.current = new Date().getTime(), t = setTimeout(() => {
                        null == x.onAutoClose || x.onAutoClose.call(x, x), tP()
                    }, td.current));
                    return () => clearTimeout(t)
                }
            }, [T, _, x, ty, tM, tP]), n.useEffect(() => {
                x.delete && (tP(), null == x.onDismiss || x.onDismiss.call(x, x))
            }, [tP, x.delete]);
            let tj = x.icon || (null == K ? void 0 : K[ty]) || (t => {
                switch (t) {
                    case "success":
                        return a;
                    case "info":
                        return c;
                    case "warning":
                        return l;
                    case "error":
                        return u;
                    default:
                        return null
                }
            })(ty);
            return n.createElement("li", {
                tabIndex: 0,
                ref: tp,
                className: y(N, tv, null == V ? void 0 : V.toast, null == x || null == (e = x.classNames) ? void 0 : e.toast, null == V ? void 0 : V.default, null == V ? void 0 : V[ty], null == x || null == (r = x.classNames) ? void 0 : r[ty]),
                "data-sonner-toast": "",
                "data-rich-colors": null != (v = x.richColors) ? v : P,
                "data-styled": !(x.jsx || x.unstyled || C),
                "data-mounted": X,
                "data-promise": !!x.promise,
                "data-swiped": to,
                "data-removed": tt,
                "data-visible": tm,
                "data-y-position": tR,
                "data-x-position": tD,
                "data-index": A,
                "data-front": tg,
                "data-swiping": tr,
                "data-dismissible": tb,
                "data-type": ty,
                "data-invert": tT,
                "data-swipe-out": ti,
                "data-swipe-direction": J,
                "data-expanded": !!(T || H && X),
                "data-testid": x.testId,
                style: {
                    "--index": A,
                    "--toasts-before": A,
                    "--z-index": M.length - A,
                    "--offset": `${tt?tl:tC.current}px`,
                    "--initial-height": H ? "auto" : `${tu}px`,
                    ...q,
                    ...x.style
                },
                onDragEnd: () => {
                    tn(!1), W(null), tO.current = null
                },
                onPointerDown: t => {
                    2 === t.button || tI || !tb || (tf.current = new Date, tc(tC.current), t.target.setPointerCapture(t.pointerId), "BUTTON" !== t.target.tagName && (tn(!0), tO.current = {
                        x: t.clientX,
                        y: t.clientY
                    }))
                },
                onPointerUp: () => {
                    var t, e, r, n, i;
                    if (ti || !tb) return;
                    tO.current = null;
                    let s = Number((null == (t = tp.current) ? void 0 : t.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
                        o = Number((null == (e = tp.current) ? void 0 : e.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
                        a = new Date().getTime() - (null == (r = tf.current) ? void 0 : r.getTime()),
                        l = "x" === $ ? s : o,
                        c = Math.abs(l) / a;
                    if (Math.abs(l) >= 45 || c > .11) {
                        tc(tC.current), null == x.onDismiss || x.onDismiss.call(x, x), "x" === $ ? G(s > 0 ? "right" : "left") : G(o > 0 ? "down" : "up"), tP(), ts(!0);
                        return
                    }
                    null == (n = tp.current) || n.style.setProperty("--swipe-amount-x", "0px"), null == (i = tp.current) || i.style.setProperty("--swipe-amount-y", "0px"), ta(!1), tn(!1), W(null)
                },
                onPointerMove: e => {
                    var r, n, i, s;
                    if (!tO.current || !tb || (null == (r = window.getSelection()) ? void 0 : r.toString().length) > 0) return;
                    let o = e.clientY - tO.current.y,
                        a = e.clientX - tO.current.x,
                        l = null != (s = t.swipeDirections) ? s : function(t) {
                            let [e, r] = t.split("-"), n = [];
                            return e && n.push(e), r && n.push(r), n
                        }(z);
                    !$ && (Math.abs(a) > 1 || Math.abs(o) > 1) && W(Math.abs(a) > Math.abs(o) ? "x" : "y");
                    let c = {
                            x: 0,
                            y: 0
                        },
                        u = t => 1 / (1.5 + Math.abs(t) / 20);
                    if ("y" === $) {
                        if (l.includes("top") || l.includes("bottom"))
                            if (l.includes("top") && o < 0 || l.includes("bottom") && o > 0) c.y = o;
                            else {
                                let t = o * u(o);
                                c.y = Math.abs(t) < Math.abs(o) ? t : o
                            }
                    } else if ("x" === $ && (l.includes("left") || l.includes("right")))
                        if (l.includes("left") && a < 0 || l.includes("right") && a > 0) c.x = a;
                        else {
                            let t = a * u(a);
                            c.x = Math.abs(t) < Math.abs(a) ? t : a
                        }(Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && ta(!0), null == (n = tp.current) || n.style.setProperty("--swipe-amount-x", `${c.x}px`), null == (i = tp.current) || i.style.setProperty("--swipe-amount-y", `${c.y}px`)
                }
            }, tS && !x.jsx && "loading" !== ty ? n.createElement("button", {
                "aria-label": Y,
                "data-disabled": tI,
                "data-close-button": !0,
                onClick: tI || !tb ? () => {} : () => {
                    tP(), null == x.onDismiss || x.onDismiss.call(x, x)
                },
                className: y(null == V ? void 0 : V.closeButton, null == x || null == (i = x.classNames) ? void 0 : i.closeButton)
            }, null != (w = null == K ? void 0 : K.close) ? w : h) : null, (ty || x.icon || x.promise) && null !== x.icon && ((null == K ? void 0 : K[ty]) !== null || x.icon) ? n.createElement("div", {
                "data-icon": "",
                className: y(null == V ? void 0 : V.icon, null == x || null == (s = x.classNames) ? void 0 : s.icon)
            }, x.promise || "loading" === x.type && !x.icon ? x.icon || ((null == K ? void 0 : K.loading) ? n.createElement("div", {
                className: y(null == V ? void 0 : V.loader, null == x || null == (S = x.classNames) ? void 0 : S.loader, "sonner-loader"),
                "data-visible": "loading" === ty
            }, K.loading) : n.createElement(o, {
                className: y(null == V ? void 0 : V.loader, null == x || null == (k = x.classNames) ? void 0 : k.loader),
                visible: "loading" === ty
            })) : null, "loading" !== x.type ? tj : null) : null, n.createElement("div", {
                "data-content": "",
                className: y(null == V ? void 0 : V.content, null == x || null == (d = x.classNames) ? void 0 : d.content)
            }, n.createElement("div", {
                "data-title": "",
                className: y(null == V ? void 0 : V.title, null == x || null == (f = x.classNames) ? void 0 : f.title)
            }, x.jsx ? x.jsx : "function" == typeof x.title ? x.title() : x.title), x.description ? n.createElement("div", {
                "data-description": "",
                className: y(F, tw, null == V ? void 0 : V.description, null == x || null == (p = x.classNames) ? void 0 : p.description)
            }, "function" == typeof x.description ? x.description() : x.description) : null), n.isValidElement(x.cancel) ? x.cancel : x.cancel && m(x.cancel) ? n.createElement("button", {
                "data-button": !0,
                "data-cancel": !0,
                style: x.cancelButtonStyle || U,
                onClick: t => {
                    !m(x.cancel) || tb && (null == x.cancel.onClick || x.cancel.onClick.call(x.cancel, t), tP())
                },
                className: y(null == V ? void 0 : V.cancelButton, null == x || null == (g = x.classNames) ? void 0 : g.cancelButton)
            }, x.cancel.label) : null, n.isValidElement(x.action) ? x.action : x.action && m(x.action) ? n.createElement("button", {
                "data-button": !0,
                "data-action": !0,
                style: x.actionButtonStyle || L,
                onClick: t => {
                    !m(x.action) || (null == x.action.onClick || x.action.onClick.call(x.action, t), t.defaultPrevented || tP())
                },
                className: y(null == V ? void 0 : V.actionButton, null == x || null == (b = x.classNames) ? void 0 : b.actionButton)
            }, x.action.label) : null)
        };

        function v() {
            if ("u" < typeof window || "u" < typeof document) return "ltr";
            let t = document.documentElement.getAttribute("dir");
            return "auto" !== t && t ? t : window.getComputedStyle(document.documentElement).direction
        }
        let w = n.forwardRef(function(t, e) {
            let {
                id: r,
                invert: s,
                position: o = "bottom-right",
                hotkey: a = ["altKey", "KeyT"],
                expand: l,
                closeButton: c,
                className: u,
                offset: h,
                mobileOffset: d,
                theme: p = "light",
                richColors: g,
                duration: m,
                style: y,
                visibleToasts: w = 3,
                toastOptions: k,
                dir: S = v(),
                gap: E = 14,
                icons: x,
                containerAriaLabel: C = "Notifications"
            } = t, [_, O] = n.useState([]), R = n.useMemo(() => r ? _.filter(t => t.toasterId === r) : _.filter(t => !t.toasterId), [_, r]), D = n.useMemo(() => Array.from(new Set([o].concat(R.filter(t => t.position).map(t => t.position)))), [R, o]), [A, M] = n.useState([]), [T, I] = n.useState(!1), [P, j] = n.useState(!1), [q, U] = n.useState("system" !== p ? p : "u" > typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), L = n.useRef(null), N = a.join("+").replace(/Key/g, "").replace(/Digit/g, ""), F = n.useRef(null), Q = n.useRef(!1), z = n.useCallback(t => {
                O(e => {
                    var r;
                    return (null == (r = e.find(e => e.id === t.id)) ? void 0 : r.delete) || f.dismiss(t.id), e.filter(({
                        id: e
                    }) => e !== t.id)
                })
            }, []);
            return n.useEffect(() => f.subscribe(t => {
                t.dismiss ? requestAnimationFrame(() => {
                    O(e => e.map(e => e.id === t.id ? {
                        ...e,
                        delete: !0
                    } : e))
                }) : setTimeout(() => {
                    i.flushSync(() => {
                        O(e => {
                            let r = e.findIndex(e => e.id === t.id);
                            return -1 !== r ? [...e.slice(0, r), {
                                ...e[r],
                                ...t
                            }, ...e.slice(r + 1)] : [t, ...e]
                        })
                    })
                })
            }), [_]), n.useEffect(() => {
                if ("system" !== p) return void U(p);
                if ("system" === p && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? U("dark") : U("light")), "u" < typeof window) return;
                let t = window.matchMedia("(prefers-color-scheme: dark)");
                try {
                    t.addEventListener("change", ({
                        matches: t
                    }) => {
                        t ? U("dark") : U("light")
                    })
                } catch (e) {
                    t.addListener(({
                        matches: t
                    }) => {
                        try {
                            t ? U("dark") : U("light")
                        } catch (t) {
                            console.error(t)
                        }
                    })
                }
            }, [p]), n.useEffect(() => {
                _.length <= 1 && I(!1)
            }, [_]), n.useEffect(() => {
                let t = t => {
                    var e, r;
                    a.every(e => t[e] || t.code === e) && (I(!0), null == (r = L.current) || r.focus()), "Escape" === t.code && (document.activeElement === L.current || (null == (e = L.current) ? void 0 : e.contains(document.activeElement))) && I(!1)
                };
                return document.addEventListener("keydown", t), () => document.removeEventListener("keydown", t)
            }, [a]), n.useEffect(() => {
                if (L.current) return () => {
                    F.current && (F.current.focus({
                        preventScroll: !0
                    }), F.current = null, Q.current = !1)
                }
            }, [L.current]), n.createElement("section", {
                ref: e,
                "aria-label": `${C} ${N}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0
            }, D.map((e, r) => {
                var i;
                let o, [a, f] = e.split("-");
                return R.length ? n.createElement("ol", {
                    key: e,
                    dir: "auto" === S ? v() : S,
                    tabIndex: -1,
                    ref: L,
                    className: u,
                    "data-sonner-toaster": !0,
                    "data-sonner-theme": q,
                    "data-y-position": a,
                    "data-x-position": f,
                    style: {
                        "--front-toast-height": `${(null==(i=A[0])?void 0:i.height)||0}px`,
                        "--width": "356px",
                        "--gap": `${E}px`,
                        ...y,
                        ...(o = {}, [h, d].forEach((t, e) => {
                            let r = 1 === e,
                                n = r ? "--mobile-offset" : "--offset",
                                i = r ? "16px" : "24px";

                            function s(t) {
                                ["top", "right", "bottom", "left"].forEach(e => {
                                    o[`${n}-${e}`] = "number" == typeof t ? `${t}px` : t
                                })
                            }
                            "number" == typeof t || "string" == typeof t ? s(t) : "object" == typeof t ? ["top", "right", "bottom", "left"].forEach(e => {
                                void 0 === t[e] ? o[`${n}-${e}`] = i : o[`${n}-${e}`] = "number" == typeof t[e] ? `${t[e]}px` : t[e]
                            }) : s(i)
                        }), o)
                    },
                    onBlur: t => {
                        Q.current && !t.currentTarget.contains(t.relatedTarget) && (Q.current = !1, F.current && (F.current.focus({
                            preventScroll: !0
                        }), F.current = null))
                    },
                    onFocus: t => {
                        !(t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible) && (Q.current || (Q.current = !0, F.current = t.relatedTarget))
                    },
                    onMouseEnter: () => I(!0),
                    onMouseMove: () => I(!0),
                    onMouseLeave: () => {
                        P || I(!1)
                    },
                    onDragEnd: () => I(!1),
                    onPointerDown: t => {
                        t.target instanceof HTMLElement && "false" === t.target.dataset.dismissible || j(!0)
                    },
                    onPointerUp: () => j(!1)
                }, R.filter(t => !t.position && 0 === r || t.position === e).map((r, i) => {
                    var o, a;
                    return n.createElement(b, {
                        key: r.id,
                        icons: x,
                        index: i,
                        toast: r,
                        defaultRichColors: g,
                        duration: null != (o = null == k ? void 0 : k.duration) ? o : m,
                        className: null == k ? void 0 : k.className,
                        descriptionClassName: null == k ? void 0 : k.descriptionClassName,
                        invert: s,
                        visibleToasts: w,
                        closeButton: null != (a = null == k ? void 0 : k.closeButton) ? a : c,
                        interacting: P,
                        position: e,
                        style: null == k ? void 0 : k.style,
                        unstyled: null == k ? void 0 : k.unstyled,
                        classNames: null == k ? void 0 : k.classNames,
                        cancelButtonStyle: null == k ? void 0 : k.cancelButtonStyle,
                        actionButtonStyle: null == k ? void 0 : k.actionButtonStyle,
                        closeButtonAriaLabel: null == k ? void 0 : k.closeButtonAriaLabel,
                        removeToast: z,
                        toasts: R.filter(t => t.position == r.position),
                        heights: A.filter(t => t.position == r.position),
                        setHeights: M,
                        expandByDefault: l,
                        gap: E,
                        expanded: T,
                        swipeDirections: t.swipeDirections
                    })
                })) : null
            }))
        });
        r.d(e, {}, {
            a: w,
            b: g
        })
    }),
    fDO: (function(t, e, r) {
        let n;
        r.d(e, {
            a: () => w,
            b: () => k
        });
        let i = /["&'<>`]/g,
            s = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
            o = /[\x01-\t\v\f\x0E-\x1F\x7F\x81\x8D\x8F\x90\x9D\xA0-\uFFFF]/g,
            a = /[|\\{}()[\]^$+*?.]/g,
            l = new WeakMap;

        function c(t, e) {
            var r;
            let n;
            if (t = t.replace(e.subset ? (r = e.subset, (n = l.get(r)) || (n = function(t) {
                    let e = [],
                        r = -1;
                    for (; ++r < t.length;) e.push(t[r].replace(a, "\\$&"));
                    return RegExp("(?:" + e.join("|") + ")", "g")
                }(r), l.set(r, n)), n) : i, c), e.subset || e.escapeOnly) return t;
            return t.replace(s, function(t, r, n) {
                return e.format((t.charCodeAt(0) - 55296) * 1024 + t.charCodeAt(1) - 56320 + 65536, n.charCodeAt(r + 2), e)
            }).replace(o, c);

            function c(t, r, n) {
                return e.format(t.charCodeAt(0), n.charCodeAt(r + 1), e)
            }
        }
        let u = /[\dA-Fa-f]/,
            h = /\d/;
        var d = r("hAs"),
            f = r("VHh");
        let p = ["cent", "copy", "divide", "gt", "lt", "not", "para", "times"],
            g = {}.hasOwnProperty,
            m = {};
        for (n in f.a) g.call(f.a, n) && (m[f.a[n]] = n);
        let y = /[^\dA-Za-z]/;

        function b(t, e, r) {
            var n, i;
            let s, o, a = (n = r.omitOptionalSemicolons, s = "&#x" + t.toString(16).toUpperCase(), n && e && !u.test(String.fromCharCode(e)) ? s : s + ";");
            if ((r.useNamedReferences || r.useShortestReferences) && (o = function(t, e, r, n) {
                    let i = String.fromCharCode(t);
                    if (g.call(m, i)) {
                        let t = m[i],
                            s = "&" + t;
                        return r && d.a.includes(t) && !p.includes(t) && (!n || e && 61 !== e && y.test(String.fromCharCode(e))) ? s : s + ";"
                    }
                    return ""
                }(t, e, r.omitOptionalSemicolons, r.attribute)), (r.useShortestReferences || !o) && r.useShortestReferences) {
                let n, s = (i = r.omitOptionalSemicolons, n = "&#" + String(t), i && e && !h.test(String.fromCharCode(e)) ? n : n + ";");
                s.length < a.length && (a = s)
            }
            return o && (!r.useShortestReferences || o.length < a.length) ? o : a
        }

        function v(t) {
            return "&#x" + t.toString(16).toUpperCase() + ";"
        }

        function w(t, e) {
            return c(t, Object.assign({
                format: b
            }, e))
        }

        function k(t, e) {
            return c(t, Object.assign({
                format: v
            }, e))
        }
    }),
    SR: (function(t, e, r) {
        var n = function(t, e) {
            return (n = Object.setPrototypeOf || ({
                __proto__: []
            }) instanceof Array && function(t, e) {
                t.__proto__ = e
            } || function(t, e) {
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            })(t, e)
        };

        function i(t, e) {
            if ("function" != typeof e && null !== e) throw TypeError("Class extends value " + String(e) + " is not a constructor or null");

            function r() {
                this.constructor = t
            }
            n(t, e), t.prototype = null === e ? Object.create(e) : (r.prototype = e.prototype, new r)
        }
        var s = function() {
            return (s = Object.assign || function(t) {
                for (var e, r = 1, n = arguments.length; r < n; r++)
                    for (var i in e = arguments[r]) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
                return t
            }).apply(this, arguments)
        };

        function o(t, e) {
            var r = {};
            for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && 0 > e.indexOf(n) && (r[n] = t[n]);
            if (null != t && "function" == typeof Object.getOwnPropertySymbols)
                for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++) 0 > e.indexOf(n[i]) && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
            return r
        }

        function a(t, e, r, n) {
            var i, s = arguments.length,
                o = s < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, r) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(t, e, r, n);
            else
                for (var a = t.length - 1; a >= 0; a--)(i = t[a]) && (o = (s < 3 ? i(o) : s > 3 ? i(e, r, o) : i(e, r)) || o);
            return s > 3 && o && Object.defineProperty(e, r, o), o
        }

        function l(t, e, r, n) {
            return new(r || (r = Promise))(function(i, s) {
                function o(t) {
                    try {
                        l(n.next(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function a(t) {
                    try {
                        l(n.throw(t))
                    } catch (t) {
                        s(t)
                    }
                }

                function l(t) {
                    var e;
                    t.done ? i(t.value) : ((e = t.value) instanceof r ? e : new r(function(t) {
                        t(e)
                    })).then(o, a)
                }
                l((n = n.apply(t, e || [])).next())
            })
        }

        function c(t, e) {
            var r, n, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                },
                o = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
            return o.next = a(0), o.throw = a(1), o.return = a(2), "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                return this
            }), o;

            function a(a) {
                return function(l) {
                    var c = [a, l];
                    if (r) throw TypeError("Generator is already executing.");
                    for (; o && (o = 0, c[0] && (s = 0)), s;) try {
                        if (r = 1, n && (i = 2 & c[0] ? n.return : c[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, c[1])).done) return i;
                        switch (n = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                            case 0:
                            case 1:
                                i = c;
                                break;
                            case 4:
                                return s.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = c[1], c = [0];
                                continue;
                            case 7:
                                c = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                    s.label = c[1];
                                    break
                                }
                                if (6 === c[0] && s.label < i[1]) {
                                    s.label = i[1], i = c;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(c);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        c = e.call(t, s)
                    } catch (t) {
                        c = [6, t], n = 0
                    } finally {
                        r = i = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }
            }
        }

        function u(t, e, r) {
            if (r || 2 == arguments.length)
                for (var n, i = 0, s = e.length; i < s; i++) !n && i in e || (n || (n = Array.prototype.slice.call(e, 0, i)), n[i] = e[i]);
            return t.concat(n || Array.prototype.slice.call(e))
        }

        function h(t, e, r) {
            if (null != e) {
                var n, i;
                if ("object" != typeof e && "function" != typeof e) throw TypeError("Object expected.");
                if (r) {
                    if (!Symbol.asyncDispose) throw TypeError("Symbol.asyncDispose is not defined.");
                    n = e[Symbol.asyncDispose]
                }
                if (void 0 === n) {
                    if (!Symbol.dispose) throw TypeError("Symbol.dispose is not defined.");
                    n = e[Symbol.dispose], r && (i = n)
                }
                if ("function" != typeof n) throw TypeError("Object not disposable.");
                i && (n = function() {
                    try {
                        i.call(this)
                    } catch (t) {
                        return Promise.reject(t)
                    }
                }), t.stack.push({
                    value: e,
                    dispose: n,
                    async: r
                })
            } else r && t.stack.push({
                async: !0
            });
            return e
        }
        var d = "function" == typeof SuppressedError ? SuppressedError : function(t, e, r) {
            var n = Error(r);
            return n.name = "SuppressedError", n.error = t, n.suppressed = e, n
        };

        function f(t) {
            function e(e) {
                t.error = t.hasError ? new d(e, t.error, "An error was suppressed during disposal.") : e, t.hasError = !0
            }
            var r, n = 0;
            return function i() {
                for (; r = t.stack.pop();) try {
                    if (!r.async && 1 === n) return n = 0, t.stack.push(r), Promise.resolve().then(i);
                    if (r.dispose) {
                        var s = r.dispose.call(r.value);
                        if (r.async) return n |= 2, Promise.resolve(s).then(i, function(t) {
                            return e(t), i()
                        })
                    } else n |= 1
                } catch (t) {
                    e(t)
                }
                if (1 === n) return t.hasError ? Promise.reject(t.error) : Promise.resolve();
                if (t.hasError) throw t.error
            }()
        }
        r.d(e, {
            a: () => h,
            b: () => s,
            c: () => l,
            d: () => a,
            e: () => f,
            f: () => i,
            g: () => c,
            h: () => o,
            i: () => u
        })
    }),
    iPs: (function(t, e, r) {
        let n = /#/g,
            i = /&/g,
            s = /\//g,
            o = /=/g,
            a = /\+/g,
            l = /%5e/gi,
            c = /%60/gi,
            u = /%7c/gi,
            h = /%20/gi;

        function d(t) {
            return encodeURI("" + ("string" == typeof t ? t : JSON.stringify(t))).replace(u, "|").replace(a, "%2B").replace(h, "+").replace(n, "%23").replace(i, "%26").replace(c, "`").replace(l, "^").replace(s, "%2F")
        }

        function f(t) {
            return d(t).replace(o, "%3D")
        }

        function p(t = "") {
            try {
                return decodeURIComponent("" + t)
            } catch {
                return "" + t
            }
        }
        let g = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/,
            m = /^[\s\w\0+.-]{2,}:([/\\]{2})?/,
            y = /^([/\\]\s*){2,}[^/\\]/;

        function b(t, e = {}) {
            return ("boolean" == typeof e && (e = {
                acceptRelative: e
            }), e.strict) ? g.test(t) : m.test(t) || !!e.acceptRelative && y.test(t)
        }

        function v(t, e) {
            var r;
            let n, i, s, o, l, c = k(t),
                u = {
                    ... function(t = "") {
                        let e = Object.create(null);
                        for (let r of ("?" === t[0] && (t = t.slice(1)), t.split("&"))) {
                            let t = r.match(/([^=]+)=?(.*)/) || [];
                            if (t.length < 2) continue;
                            let n = p(t[1].replace(a, " "));
                            if ("__proto__" === n || "constructor" === n) continue;
                            let i = p((t[2] || "").replace(a, " "));
                            void 0 === e[n] ? e[n] = i : Array.isArray(e[n]) ? e[n].push(i) : e[n] = [e[n], i]
                        }
                        return e
                    }(c.search),
                    ...e
                };
            return c.search = Object.keys(u).filter(t => void 0 !== u[t]).map(t => {
                var e;
                return (("number" == typeof(e = u[t]) || "boolean" == typeof e) && (e = String(e)), e) ? Array.isArray(e) ? e.map(e => `${f(t)}=${d(e)}`).join("&") : `${f(t)}=${d(e)}` : f(t)
            }).filter(Boolean).join("&"), n = (r = c).pathname || "", i = r.search ? (r.search.startsWith("?") ? "" : "?") + r.search : "", s = r.hash || "", o = r.auth ? r.auth + "@" : "", l = r.host || "", (r.protocol || r[w] ? (r.protocol || "") + "//" : "") + o + l + n + i + s
        }
        let w = Symbol.for("ufo:protocolRelative");

        function k(t = "", e) {
            let r = t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);
            if (r) {
                let [, t, e = ""] = r;
                return {
                    protocol: t.toLowerCase(),
                    pathname: e,
                    href: t + e,
                    auth: "",
                    host: "",
                    search: "",
                    hash: ""
                }
            }
            if (!b(t, {
                    acceptRelative: !0
                })) return e ? k(e + t) : S(t);
            let [, n = "", i, s = ""] = t.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [], [, o = "", a = ""] = s.match(/([^#/?]*)(.*)?/) || [];
            "file:" === n && (a = a.replace(/\/(?=[A-Za-z]:)/, ""));
            let {
                pathname: l,
                search: c,
                hash: u
            } = S(a);
            return {
                protocol: n.toLowerCase(),
                auth: i ? i.slice(0, Math.max(0, i.length - 1)) : "",
                host: o,
                pathname: l,
                search: c,
                hash: u,
                [w]: !n
            }
        }

        function S(t = "") {
            let [e = "", r = "", n = ""] = (t.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
            return {
                pathname: e,
                search: r,
                hash: n
            }
        }

        function E(t = "") {
            let [e, r] = (t.match(/([^/:]*):?(\d+)?/) || []).splice(1);
            return {
                hostname: p(e),
                port: r
            }
        }
        r.d(e, {
            a: () => b,
            b: () => E,
            c: () => k,
            d: () => v
        })
    }),
    dz: (function(t, e, r) {
        let n, i;
        r.d(e, {
            a: () => h
        });
        let s = new Uint8Array(12448),
            o = new Uint8Array(1440),
            a = new Uint8Array(2816);
        {
            let t = (t, e, r, n, i) => {
                    let s = n - e + 1,
                        o = t.length;
                    s > 0 && r - e < o && t.fill(i, r > e ? r - e : 0, s > o ? o : s)
                },
                e = new Uint32Array(320),
                r = new Uint32Array(320),
                l = 0;
            ! function(t, e, r) {
                let n = t.length,
                    i = 0,
                    s = 0,
                    o = -1,
                    a = () => {
                        let e = 0,
                            r = 0,
                            n;
                        do e += (15 & (n = parseInt(t[i++], 36))) << r, r += 4; while (16 & n) return e
                    };
                for (; i < n;) {
                    let t = o + 1 + a();
                    r(t, o = t + a(), e ? parseInt(e[s++], 36) : 0)
                }
            }("090001000h1v5g2903000hl2v6jh16ng1s210111110o35aa10u2k1g10l6600152113h2010u1q1r5aq3890o13181214r22k3158q2n1000v100h1k20000001207030001160721k171001h1j11610332010010321210090411021c1c02100o301201412230u1130b100h1j116111420120411001100k11l10051001h1j11611142011000321210072411021d0g10r3000000132120090o200200g1j11f2012031213711271t1001o301001000001121371b1f0c101h1l2011001031212000080a1t1001m40400102101600i11t301006c7i601008b6p41r10101041h3d0004115a1j290p3q223000511010100g1501010302003172030c0010016000e0i6v50n40n5tl12ir33s12t11u11cj30100060700010a90t220000l71i20m7203010241000502rd101004k300000006101027050920g3t22bk1300616g209030207u18c1000t10003010501b2o20000102000004g37070101o921c000640602001mcv3rg20000001o16d0c0m1fg6g2h30m10q55f1vm11c0ma0p1a42nc0ne1a090q3314902021204020112030318250105bb1201110i1021i15101131502141b15120511011k1155132040202510201010603060a1f02040104210b1g3290e0e0kn11vs12j11j3040pp12t80g6v1qi2500c0r51ktl7319g21g51gh103040n11010040j51i3f01q1h1d0m27p1a0000cs13200523j200010301010100v140018a4q2501010101c08000i1f12601011g3012215110u1a0001015000pcq181000100011000iji5fvc0u91g5bhg20ie0l94lo6002115303121s12240la1tj23h44tj11t45m4ah33q700000l3ep2021a200t220301012040a0i320j2040007f00100r20c100g3208000011531000s520201036020t900207l1101n311000000321210090a12634b910201l22001051020120011020000e1i520701020000n10h5001050000010000010001re0010323010001r11i520701000001q6000000107l600000230004gg12080001lc62027111n1000411230000000000t820321030030r10090n205001380800501020n2050c0001mc00002000000nc006150000i5l1100600010001q753011160000i441111000000rl11019100000c1h201043102n10ltk1f006eoss2b0202gs94r36si2033ku101m373h50b1rqs4113sli1t22m1uh2435070726u13k92rr7m34h380e0m141egl561g1261114k60ga6nn10t33sv13uf1jf0207150qt16t66pr60n23k6bf1f0e1l29g71c1e029j1n30p11ea0k1028139m16rb2v621122i52213040tf1u3b51n17127c0232041d120819052c28220104060306l5g3l4572g130152cqdl2c3o37a5o27u11c32d9m2cu2191obo57eh9gg1tv3", "262122424333333393233393339333333333393393bf3b3b3b3b3f3f3bffff33b3bb33ff3f33b3b3333333bffff3b33bb33f33bffff33b3bb33ff3f33b3bbb333b3ff33b333f33b3b3b3b3333b3bf33b3bb39333b33b33b3b3b333b333333b3b33333f3b33b3ffb3f3fff3f3b33f35dc33333f3b3b3b33323333b3bb3b33b3fb3b3333b33333bff3b3f33bfb3b3ff3b3b3b3b3b333b333b3323e224423444444444444444444444444444444444444444444444444444444444444444444444444444444433334433333333b3b3bb33333b353bff3b3b3b3f3ff3b3b333bfff3f33333fb3bb3fb3b3bb33232333f333fff333333333b3b3333bb3b39393f3b3fbf33bb3b393b3b3b3333b33b33b3bbb33b33ffff3b3333bb3933b3b3b333b3b3b3b3b33b3b3b33b3b3b33b3b33b33b3b3b3fffff3bb39b9b3b33b3bf3f3b33f3b3f93b33b3b3bb33b33b3b3b3333393b3b3b33b39bffb3b332333b333dd3b3333233332333333333333333333333333333444444444444a4444444444444344444444444444444444444444444444444444444444", (n, i, c) => {
                t(s, 0, n, i, c), t(o, 42592, n, i, c), t(a, 126976, n, i, c), i >= 65040 && !(n >= 126976 && i <= 129791) && (e[l] = n, r[l++] = i << 5 | c)
            }), n = e.slice(0, l), i = r.slice(0, l)
        }

        function l(t) {
            return t < 12448 ? s[t] : t < 42592 ? 4 * (12951 === t || 12953 === t) : t < 44032 ? o[t - 42592] : t < 55204 ? (t - 44032) % 28 ? 8 : 7 : t >= 126976 && t < 129792 ? a[t - 126976] : t >>> 4 == 4064 ? 3 : function(t) {
                if (t < 57344) return t <= 55238 ? 13 * (t >= 55216) : 12 * (t >= 55243 && t <= 55291);
                if (t < 65024) return 3 * (64286 === t);
                if (t >= 917504) return t > 921599 ? 0 : t >= 917536 && t < 917632 || t >= 917760 && t < 918e3 ? 3 : 2;
                var e = n,
                    r = i;
                let s = 0,
                    o = e.length - 1;
                for (; s <= o;) {
                    let n = s + o >>> 1,
                        i = r[n];
                    if (t < e[n]) o = n - 1;
                    else {
                        if (!(t > i >>> 5)) return 31 & i;
                        s = n + 1
                    }
                }
                return 0
            }(t)
        }
        let c = Uint8Array.from("0001000000010010000000100000000000000000000000000001000000010018000100000001001000010101100101100000000000000000000100000001111000010000000110101001110111111111000100000021001000010000000100100001000000011010000100000001111000014000000100180001000000010010");

        function u(t, e, r) {
            var n, i, s;
            return 3 === e ? 32 & t ? (n = t, 8204 === (i = r) ? 21 & n : 8 & n || 2381 === (s = i) || 2509 === s || 2765 === s || 2893 === s || 3149 === s || 3405 === s || 4153 === s || 6098 === s || 6752 === s || 6980 === s || 7083 === s || 43456 === s || 43766 === s || 68159 === s || 69939 === s || 70608 === s || 71998 === s || 72263 === s || 72345 === s || 73538 === s ? 21 & n | 40 : 21 & n | 32) : 21 & t : 4 === e ? 17 : 10 === e ? 2 & t ^ 3 : 14 === e ? (16 & t) >> 2 | 41 & t : 15 === e ? 33 : 1
        }

        function* h(t) {
            let e = t.length;
            if (0 === e) return;
            let r = t.codePointAt(0),
                n = r > 65535 ? 2 : 1,
                i = l(r),
                s = u(1, i, r),
                o = 0,
                a = r,
                h = i;
            for (; n < e;) {
                let e = l(r = t.codePointAt(n)),
                    d = !(s & c[i << 4 | e]);
                s = u(s, e, r), d && (yield {
                    segment: t.slice(o, n),
                    index: o,
                    input: t,
                    _hd: a,
                    _catBegin: 15 === h ? 0 : h,
                    _catEnd: 15 === i ? 0 : i
                }, o = n, a = r, h = e), n += r > 65535 ? 2 : 1, i = e
            }
            yield {
                segment: t.slice(o),
                index: o,
                input: t,
                _hd: a,
                _catBegin: 15 === h ? 0 : h,
                _catEnd: 15 === i ? 0 : i
            }
        }
    }),
    dOE: (function(t, e, r) {
        r.d(e, {
            a: () => u
        });
        var n = r("U0"),
            i = r("LXA"),
            s = r("EAw"),
            o = r("oB"),
            a = r("rCY");
        let l = function(t) {
                let e = this.constructor.prototype,
                    r = e[t],
                    n = function() {
                        return r.apply(n, arguments)
                    };
                return Object.setPrototypeOf(n, e), n
            },
            c = {}.hasOwnProperty,
            u = new class t extends l {
                constructor() {
                    let t, e;
                    super("copy"), this.Compiler = void 0, this.Parser = void 0, this.attachers = [], this.compiler = void 0, this.freezeIndex = -1, this.frozen = void 0, this.namespace = {}, this.parser = void 0, this.transformers = (t = [], e = {
                        run: function(...e) {
                            let r = -1,
                                n = e.pop();
                            if ("function" != typeof n) throw TypeError("Expected function as last argument, not " + n);
                            ! function i(s, ...o) {
                                let a = t[++r],
                                    l = -1;
                                if (s) return void n(s);
                                for (; ++l < e.length;)(null === o[l] || void 0 === o[l]) && (o[l] = e[l]);
                                e = o, a ? (function(t, e) {
                                    let r;
                                    return function(...e) {
                                        let s, o = t.length > e.length;
                                        o && e.push(n);
                                        try {
                                            s = t.apply(this, e)
                                        } catch (t) {
                                            if (o && r) throw t;
                                            return n(t)
                                        }
                                        o || (s && s.then && "function" == typeof s.then ? s.then(i, n) : s instanceof Error ? n(s) : i(s))
                                    };

                                    function n(t, ...i) {
                                        r || (r = !0, e(t, ...i))
                                    }

                                    function i(t) {
                                        n(null, t)
                                    }
                                })(a, i)(...o) : n(null, ...o)
                            }(null, ...e)
                        },
                        use: function(r) {
                            if ("function" != typeof r) throw TypeError("Expected `middelware` to be a function, not " + r);
                            return t.push(r), e
                        }
                    })
                }
                copy() {
                    let e = new t,
                        r = -1;
                    for (; ++r < this.attachers.length;) {
                        let t = this.attachers[r];
                        e.use(...t)
                    }
                    return e.data(i(!0, {}, this.namespace)), e
                }
                data(t, e) {
                    return "string" == typeof t ? 2 == arguments.length ? (f("data", this.frozen), this.namespace[t] = e, this) : c.call(this.namespace, t) && this.namespace[t] || void 0 : t ? (f("data", this.frozen), this.namespace = t, this) : this.namespace
                }
                freeze() {
                    if (this.frozen) return this;
                    for (; ++this.freezeIndex < this.attachers.length;) {
                        let [t, ...e] = this.attachers[this.freezeIndex];
                        if (!1 === e[0]) continue;
                        !0 === e[0] && (e[0] = void 0);
                        let r = t.call(this, ...e);
                        "function" == typeof r && this.transformers.use(r)
                    }
                    return this.frozen = !0, this.freezeIndex = 1 / 0, this
                }
                parse(t) {
                    this.freeze();
                    let e = m(t),
                        r = this.parser || this.Parser;
                    return h("parse", r), r(String(e), e)
                }
                process(t, e) {
                    let r = this;
                    return this.freeze(), h("process", this.parser || this.Parser), d("process", this.compiler || this.Compiler), e ? n(void 0, e) : new Promise(n);

                    function n(n, i) {
                        let o = m(t),
                            a = r.parse(o);

                        function l(t, r) {
                            t || !r ? i(t) : n ? n(r) : ((0, s.a)(e, "`done` is defined if `resolve` is not"), e(void 0, r))
                        }
                        r.run(a, o, function(t, e, n) {
                            var i, s;
                            if (t || !e || !n) return l(t);
                            let o = r.stringify(e, n);
                            "string" == typeof(i = o) || (s = i) && "object" == typeof s && "byteLength" in s && "byteOffset" in s ? n.value = o : n.result = o, l(t, n)
                        })
                    }
                }
                processSync(t) {
                    let e, r = !1;
                    return this.freeze(), h("processSync", this.parser || this.Parser), d("processSync", this.compiler || this.Compiler), this.process(t, function(t, i) {
                        r = !0, (0, n.a)(t), e = i
                    }), g("processSync", "process", r), (0, s.a)(e, "we either bailed on an error or have a tree"), e
                }
                run(t, e, r) {
                    p(t), this.freeze();
                    let n = this.transformers;
                    return r || "function" != typeof e || (r = e, e = void 0), r ? i(void 0, r) : new Promise(i);

                    function i(i, o) {
                        (0, s.a)("function" != typeof e, "`file` can’t be a `done` anymore, we checked");
                        let a = m(e);
                        n.run(t, a, function(e, n, a) {
                            let l = n || t;
                            e ? o(e) : i ? i(l) : ((0, s.a)(r, "`done` is defined if `resolve` is not"), r(void 0, l, a))
                        })
                    }
                }
                runSync(t, e) {
                    let r, i = !1;
                    return this.run(t, e, function(t, e) {
                        (0, n.a)(t), r = e, i = !0
                    }), g("runSync", "run", i), (0, s.a)(r, "we either bailed on an error or have a tree"), r
                }
                stringify(t, e) {
                    this.freeze();
                    let r = m(e),
                        n = this.compiler || this.Compiler;
                    return d("stringify", n), p(t), n(t, r)
                }
                use(t, ...e) {
                    let r = this.attachers,
                        n = this.namespace;
                    if (f("use", this.frozen), null == t);
                    else if ("function" == typeof t) l(t, e);
                    else if ("object" == typeof t) Array.isArray(t) ? a(t) : s(t);
                    else throw TypeError("Expected usable value, not `" + t + "`");
                    return this;

                    function s(t) {
                        if (!("plugins" in t) && !("settings" in t)) throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");
                        a(t.plugins), t.settings && (n.settings = i(!0, n.settings, t.settings))
                    }

                    function a(t) {
                        let e = -1;
                        if (null == t);
                        else if (Array.isArray(t))
                            for (; ++e < t.length;) ! function(t) {
                                if ("function" == typeof t) l(t, []);
                                else if ("object" == typeof t)
                                    if (Array.isArray(t)) {
                                        let [e, ...r] = t;
                                        l(e, r)
                                    } else s(t);
                                else throw TypeError("Expected usable value, not `" + t + "`")
                            }(t[e]);
                        else throw TypeError("Expected a list of plugins, not `" + t + "`")
                    }

                    function l(t, e) {
                        let n = -1,
                            s = -1;
                        for (; ++n < r.length;)
                            if (r[n][0] === t) {
                                s = n;
                                break
                            } if (-1 === s) r.push([t, ...e]);
                        else if (e.length > 0) {
                            let [n, ...a] = e, l = r[s][1];
                            (0, o.a)(l) && (0, o.a)(n) && (n = i(!0, l, n)), r[s] = [t, n, ...a]
                        }
                    }
                }
            }().freeze();

        function h(t, e) {
            if ("function" != typeof e) throw TypeError("Cannot `" + t + "` without `parser`")
        }

        function d(t, e) {
            if ("function" != typeof e) throw TypeError("Cannot `" + t + "` without `compiler`")
        }

        function f(t, e) {
            if (e) throw Error("Cannot call `" + t + "` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")
        }

        function p(t) {
            if (!(0, o.a)(t) || "string" != typeof t.type) throw TypeError("Expected node, got `" + t + "`")
        }

        function g(t, e, r) {
            if (!r) throw Error("`" + t + "` finished async. Use `" + e + "` instead")
        }

        function m(t) {
            var e;
            return (e = t) && "object" == typeof e && "message" in e && "messages" in e ? t : new a.a(t)
        }
    }),
    UFz: (function(t, e, r) {
        let n = function(t) {
            var e, r;
            if (null == t) return s;
            if ("function" == typeof t) return i(t);
            if ("object" == typeof t) {
                return Array.isArray(t) ? function(t) {
                    let e = [],
                        r = -1;
                    for (; ++r < t.length;) e[r] = n(t[r]);
                    return i(function(...t) {
                        let r = -1;
                        for (; ++r < e.length;)
                            if (e[r].apply(this, t)) return !0;
                        return !1
                    })
                }(t) : (e = t, i(function(t) {
                    let r;
                    for (r in e)
                        if (t[r] !== e[r]) return !1;
                    return !0
                }))
            }
            if ("string" == typeof t) {
                return r = t, i(function(t) {
                    return t && t.type === r
                })
            }
            throw Error("Expected function, string, or object as test")
        };

        function i(t) {
            return function(e, r, n) {
                return !!(function(t) {
                    return null !== t && "object" == typeof t && "type" in t
                }(e) && t.call(this, e, "number" == typeof r ? r : void 0, n || void 0))
            }
        }

        function s() {
            return !0
        }
        r.d(e, {}, {
            a: n
        })
    }),
    huI: (function(t, e, r) {
        function n(t) {
            return t && "object" == typeof t ? "position" in t || "type" in t ? s(t.position) : "start" in t || "end" in t ? s(t) : "line" in t || "column" in t ? i(t) : "" : ""
        }

        function i(t) {
            return o(t && t.line) + ":" + o(t && t.column)
        }

        function s(t) {
            return i(t && t.start) + "-" + i(t && t.end)
        }

        function o(t) {
            return t && "number" == typeof t ? t : 1
        }
        r.d(e, {
            a: () => n
        })
    }),
    rBm: (function(t, e, r) {
        r.d(e, {
            a: () => s
        });
        var n = r("UFz");
        let i = [];

        function s(t, e, r, s) {
            let o;
            "function" == typeof e && "function" != typeof r ? (s = r, r = e) : o = e;
            let a = (0, n.a)(o),
                l = s ? -1 : 1;
            (function t(n, o, c) {
                let u = n && "object" == typeof n ? n : {};
                if ("string" == typeof u.type) {
                    let t = "string" == typeof u.tagName ? u.tagName : "string" == typeof u.name ? u.name : void 0;
                    Object.defineProperty(h, "name", {
                        value: "node (" + n.type + (t ? "<" + t + ">" : "") + ")"
                    })
                }
                return h;

                function h() {
                    var u;
                    let h, d, f, p = i;
                    if ((!e || a(n, o, c[c.length - 1] || void 0)) && !1 === (p = Array.isArray(u = r(n, c)) ? u : "number" == typeof u ? [!0, u] : null == u ? i : [u])[0]) return p;
                    if ("children" in n && n.children && n.children && "skip" !== p[0])
                        for (d = (s ? n.children.length : -1) + l, f = c.concat(n); d > -1 && d < n.children.length;) {
                            if (!1 === (h = t(n.children[d], d, f)())[0]) return h;
                            d = "number" == typeof h[1] ? h[1] : d + l
                        }
                    return p
                }
            })(t, void 0, [])()
        }
    }),
    JV: (function(t, e, r) {
        var n = r("rBm");

        function i(t, e, r, i) {
            let s, o, a;
            "function" == typeof e && "function" != typeof r ? (o = void 0, a = e, s = r) : (o = e, a = r, s = i), (0, n.a)(t, o, function(t, e) {
                let r = e[e.length - 1],
                    n = r ? r.children.indexOf(t) : void 0;
                return a(t, n, r)
            }, s)
        }
        r.d(e, {
            a: () => i
        })
    }),
    Cm: (function(t, e, r) {
        var n = r("zd"),
            i = r("drW"),
            s = "u" > typeof window ? n.useLayoutEffect : n.useEffect,
            o = "u" < typeof window;

        function a(t, {
            defaultValue: e = !1,
            initializeWithValue: r = !0
        } = {}) {
            let i = t => o ? e : window.matchMedia(t).matches,
                [l, c] = (0, n.useState)(() => r ? i(t) : e);

            function u() {
                c(i(t))
            }
            return s(() => {
                let e = window.matchMedia(t);
                return u(), e.addListener ? e.addListener(u) : e.addEventListener("change", u), () => {
                    e.removeListener ? e.removeListener(u) : e.removeEventListener("change", u)
                }
            }, [t]), l
        }

        function l(t, e = 500, r) {
            var s;
            let o, a = (0, n.useRef)();
            s = () => {
                a.current && a.current.cancel()
            }, (o = (0, n.useRef)(s)).current = s, (0, n.useEffect)(() => () => {
                o.current()
            }, []);
            let c = (0, n.useMemo)(() => {
                let n = i(t, e, r),
                    s = (...t) => n(...t);
                return s.cancel = () => {
                    n.cancel()
                }, s.isPending = () => !!a.current, s.flush = () => n.flush(), s
            }, [t, e, r]);
            return (0, n.useEffect)(() => {
                a.current = i(t, e, r)
            }, [t, e, r]), c
        }

        function c(t, e, r = "mousedown", i = {}) {
            var o, a;
            let l;
            o = r => {
                let n = r.target;
                n && n.isConnected && (Array.isArray(t) ? t.filter(t => !!t.current).every(t => t.current && !t.current.contains(n)) : t.current && !t.current.contains(n)) && e(r)
            }, a = void 0, l = (0, n.useRef)(o), s(() => {
                l.current = o
            }, [o]), (0, n.useEffect)(() => {
                let t = (null == a ? void 0 : a.current) ?? window;
                if (!(t && t.addEventListener)) return;
                let e = t => {
                    l.current(t)
                };
                return t.addEventListener(r, e, i), () => {
                    t.removeEventListener(r, e, i)
                }
            }, [r, a, i])
        }
        var u = {
            width: void 0,
            height: void 0
        };

        function h(t) {
            let e, {
                    ref: r,
                    box: i = "content-box"
                } = t,
                [{
                    width: s,
                    height: o
                }, a] = (0, n.useState)(u),
                l = (e = (0, n.useRef)(!1), (0, n.useEffect)(() => (e.current = !0, () => {
                    e.current = !1
                }), []), (0, n.useCallback)(() => e.current, [])),
                c = (0, n.useRef)({
                    ...u
                }),
                h = (0, n.useRef)(void 0);
            return h.current = t.onResize, (0, n.useEffect)(() => {
                if (!r.current || "u" < typeof window || !("ResizeObserver" in window)) return;
                let t = new ResizeObserver(([t]) => {
                    let e = "border-box" === i ? "borderBoxSize" : "device-pixel-content-box" === i ? "devicePixelContentBoxSize" : "contentBoxSize",
                        r = d(t, e, "inlineSize"),
                        n = d(t, e, "blockSize");
                    if (c.current.width !== r || c.current.height !== n) {
                        let t = {
                            width: r,
                            height: n
                        };
                        c.current.width = r, c.current.height = n, h.current ? h.current(t) : l() && a(t)
                    }
                });
                return t.observe(r.current, {
                    box: i
                }), () => {
                    t.disconnect()
                }
            }, [i, r, l]), {
                width: s,
                height: o
            }
        }

        function d(t, e, r) {
            return t[e] ? Array.isArray(t[e]) ? t[e][0][r] : t[e][r] : "contentBoxSize" === e ? t.contentRect["inlineSize" === r ? "width" : "height"] : void 0
        }

        function f(t, e) {
            let r = (0, n.useRef)(t);
            s(() => {
                r.current = t
            }, [t]), (0, n.useEffect)(() => {
                if (!e && 0 !== e) return;
                let t = setTimeout(() => {
                    r.current()
                }, e);
                return () => {
                    clearTimeout(t)
                }
            }, [e])
        }
        r.d(e, {
            a: () => l,
            b: () => s,
            c: () => a,
            d: () => c,
            e: () => h,
            f: () => f
        })
    }),
    eUe: (function(t, e, r) {
        var n = r("huI");
        class i extends Error {
            constructor(t, e, r) {
                super(), "string" == typeof e && (r = e, e = void 0);
                let i = "",
                    s = {},
                    o = !1;
                if (e && (s = "line" in e && "column" in e || "start" in e && "end" in e ? {
                        place: e
                    } : "type" in e ? {
                        ancestors: [e],
                        place: e.position
                    } : {
                        ...e
                    }), "string" == typeof t ? i = t : !s.cause && t && (o = !0, i = t.message, s.cause = t), !s.ruleId && !s.source && "string" == typeof r) {
                    let t = r.indexOf(":"); - 1 === t ? s.ruleId = r : (s.source = r.slice(0, t), s.ruleId = r.slice(t + 1))
                }
                if (!s.place && s.ancestors && s.ancestors) {
                    let t = s.ancestors[s.ancestors.length - 1];
                    t && (s.place = t.position)
                }
                let a = s.place && "start" in s.place ? s.place.start : s.place;
                this.ancestors = s.ancestors || void 0, this.cause = s.cause || void 0, this.column = a ? a.column : void 0, this.fatal = void 0, this.file, this.message = i, this.line = a ? a.line : void 0, this.name = (0, n.a)(s.place) || "1:1", this.place = s.place || void 0, this.reason = this.message, this.ruleId = s.ruleId || void 0, this.source = s.source || void 0, this.stack = o && s.cause && "string" == typeof s.cause.stack ? s.cause.stack : "", this.actual, this.expected, this.note, this.url
            }
        }
        i.prototype.file = "", i.prototype.name = "", i.prototype.reason = "", i.prototype.message = "", i.prototype.stack = "", i.prototype.column = void 0, i.prototype.line = void 0, i.prototype.ancestors = void 0, i.prototype.cause = void 0, i.prototype.fatal = void 0, i.prototype.place = void 0, i.prototype.ruleId = void 0, i.prototype.source = void 0, r.d(e, {
            a: () => i
        })
    }),
    rCY: (function(t, e, r) {
        r.d(e, {
            a: () => h
        });
        var n = r("eUe");
        let i = function(t, e) {
                let r;
                if (void 0 !== e && "string" != typeof e) throw TypeError('"ext" argument must be a string');
                l(t);
                let n = 0,
                    i = -1,
                    s = t.length;
                if (void 0 === e || 0 === e.length || e.length > t.length) {
                    for (; s--;)
                        if (47 === t.codePointAt(s)) {
                            if (r) {
                                n = s + 1;
                                break
                            }
                        } else i < 0 && (r = !0, i = s + 1);
                    return i < 0 ? "" : t.slice(n, i)
                }
                if (e === t) return "";
                let o = -1,
                    a = e.length - 1;
                for (; s--;)
                    if (47 === t.codePointAt(s)) {
                        if (r) {
                            n = s + 1;
                            break
                        }
                    } else o < 0 && (r = !0, o = s + 1), a > -1 && (t.codePointAt(s) === e.codePointAt(a--) ? a < 0 && (i = s) : (a = -1, i = o));
                return n === i ? i = o : i < 0 && (i = t.length), t.slice(n, i)
            },
            s = function(t) {
                let e;
                if (l(t), 0 === t.length) return ".";
                let r = -1,
                    n = t.length;
                for (; --n;)
                    if (47 === t.codePointAt(n)) {
                        if (e) {
                            r = n;
                            break
                        }
                    } else e || (e = !0);
                return r < 0 ? 47 === t.codePointAt(0) ? "/" : "." : 1 === r && 47 === t.codePointAt(0) ? "//" : t.slice(0, r)
            },
            o = function(t) {
                let e;
                l(t);
                let r = t.length,
                    n = -1,
                    i = 0,
                    s = -1,
                    o = 0;
                for (; r--;) {
                    let a = t.codePointAt(r);
                    if (47 === a) {
                        if (e) {
                            i = r + 1;
                            break
                        }
                        continue
                    }
                    n < 0 && (e = !0, n = r + 1), 46 === a ? s < 0 ? s = r : 1 !== o && (o = 1) : s > -1 && (o = -1)
                }
                return s < 0 || n < 0 || 0 === o || 1 === o && s === n - 1 && s === i + 1 ? "" : t.slice(s, n)
            },
            a = function(...t) {
                var e;
                let r, n, i, s = -1;
                for (; ++s < t.length;) l(t[s]), t[s] && (i = void 0 === i ? t[s] : i + "/" + t[s]);
                return void 0 === i ? "." : (l(e = i), r = 47 === e.codePointAt(0), 0 !== (n = function(t, e) {
                    let r, n, i = "",
                        s = 0,
                        o = -1,
                        a = 0,
                        l = -1;
                    for (; ++l <= t.length;) {
                        if (l < t.length) r = t.codePointAt(l);
                        else if (47 === r) break;
                        else r = 47;
                        if (47 === r) {
                            if (o === l - 1 || 1 === a);
                            else if (o !== l - 1 && 2 === a) {
                                if (i.length < 2 || 2 !== s || 46 !== i.codePointAt(i.length - 1) || 46 !== i.codePointAt(i.length - 2)) {
                                    if (i.length > 2) {
                                        if ((n = i.lastIndexOf("/")) !== i.length - 1) {
                                            n < 0 ? (i = "", s = 0) : s = (i = i.slice(0, n)).length - 1 - i.lastIndexOf("/"), o = l, a = 0;
                                            continue
                                        }
                                    } else if (i.length > 0) {
                                        i = "", s = 0, o = l, a = 0;
                                        continue
                                    }
                                }
                                e && (i = i.length > 0 ? i + "/.." : "..", s = 2)
                            } else i.length > 0 ? i += "/" + t.slice(o + 1, l) : i = t.slice(o + 1, l), s = l - o - 1;
                            o = l, a = 0
                        } else 46 === r && a > -1 ? a++ : a = -1
                    }
                    return i
                }(e, !r)).length || r || (n = "."), n.length > 0 && 47 === e.codePointAt(e.length - 1) && (n += "/"), r ? "/" + n : n)
            };

        function l(t) {
            if ("string" != typeof t) throw TypeError("Path must be a string. Received " + JSON.stringify(t))
        }

        function c(t) {
            return !!(null !== t && "object" == typeof t && "href" in t && t.href && "protocol" in t && t.protocol && void 0 === t.auth)
        }
        let u = ["history", "path", "basename", "stem", "extname", "dirname"];
        class h {
            constructor(t) {
                var e;
                let r, n;
                r = t ? c(t) ? {
                    path: t
                } : "string" == typeof t || (e = t) && "object" == typeof e && "byteLength" in e && "byteOffset" in e ? {
                    value: t
                } : t : {}, this.cwd = "cwd" in r ? "" : "/", this.data = {}, this.history = [], this.messages = [], this.value, this.map, this.result, this.stored;
                let i = -1;
                for (; ++i < u.length;) {
                    let t = u[i];
                    t in r && void 0 !== r[t] && null !== r[t] && (this[t] = "history" === t ? [...r[t]] : r[t])
                }
                for (n in r) u.includes(n) || (this[n] = r[n])
            }
            get basename() {
                return "string" == typeof this.path ? i(this.path) : void 0
            }
            set basename(t) {
                f(t, "basename"), d(t, "basename"), this.path = a(this.dirname || "", t)
            }
            get dirname() {
                return "string" == typeof this.path ? s(this.path) : void 0
            }
            set dirname(t) {
                p(this.basename, "dirname"), this.path = a(t || "", this.basename)
            }
            get extname() {
                return "string" == typeof this.path ? o(this.path) : void 0
            }
            set extname(t) {
                if (d(t, "extname"), p(this.dirname, "extname"), t) {
                    if (46 !== t.codePointAt(0)) throw Error("`extname` must start with `.`");
                    if (t.includes(".", 1)) throw Error("`extname` cannot contain multiple dots")
                }
                this.path = a(this.dirname, this.stem + (t || ""))
            }
            get path() {
                return this.history[this.history.length - 1]
            }
            set path(t) {
                c(t) && (t = function(t) {
                    if ("string" == typeof t) t = new URL(t);
                    else if (!c(t)) {
                        let e = TypeError('The "path" argument must be of type string or an instance of URL. Received `' + t + "`");
                        throw e.code = "ERR_INVALID_ARG_TYPE", e
                    }
                    if ("file:" !== t.protocol) {
                        let t = TypeError("The URL must be of scheme file");
                        throw t.code = "ERR_INVALID_URL_SCHEME", t
                    }
                    return function(t) {
                        if ("" !== t.hostname) {
                            let t = TypeError('File URL host must be "localhost" or empty on darwin');
                            throw t.code = "ERR_INVALID_FILE_URL_HOST", t
                        }
                        let e = t.pathname,
                            r = -1;
                        for (; ++r < e.length;)
                            if (37 === e.codePointAt(r) && 50 === e.codePointAt(r + 1)) {
                                let t = e.codePointAt(r + 2);
                                if (70 === t || 102 === t) {
                                    let t = TypeError("File URL path must not include encoded / characters");
                                    throw t.code = "ERR_INVALID_FILE_URL_PATH", t
                                }
                            } return decodeURIComponent(e)
                    }(t)
                }(t)), f(t, "path"), this.path !== t && this.history.push(t)
            }
            get stem() {
                return "string" == typeof this.path ? i(this.path, this.extname) : void 0
            }
            set stem(t) {
                f(t, "stem"), d(t, "stem"), this.path = a(this.dirname || "", t + (this.extname || ""))
            }
            fail(t, e, r) {
                let n = this.message(t, e, r);
                throw n.fatal = !0, n
            }
            info(t, e, r) {
                let n = this.message(t, e, r);
                return n.fatal = void 0, n
            }
            message(t, e, r) {
                let i = new n.a(t, e, r);
                return this.path && (i.name = this.path + ":" + i.name, i.file = this.path), i.fatal = !1, this.messages.push(i), i
            }
            toString(t) {
                return void 0 === this.value ? "" : "string" == typeof this.value ? this.value : new TextDecoder(t || void 0).decode(this.value)
            }
        }

        function d(t, e) {
            if (t && t.includes("/")) throw Error("`" + e + "` cannot be a path: did not expect `/`")
        }

        function f(t, e) {
            if (!t) throw Error("`" + e + "` cannot be empty")
        }

        function p(t, e) {
            if (!t) throw Error("Setting `" + e + "` requires `path` to be set too")
        }
    }),
    BR: (function(t, e, r) {
        for (var n = {
                8: "Backspace",
                9: "Tab",
                10: "Enter",
                12: "NumLock",
                13: "Enter",
                16: "Shift",
                17: "Control",
                18: "Alt",
                20: "CapsLock",
                27: "Escape",
                32: " ",
                33: "PageUp",
                34: "PageDown",
                35: "End",
                36: "Home",
                37: "ArrowLeft",
                38: "ArrowUp",
                39: "ArrowRight",
                40: "ArrowDown",
                44: "PrintScreen",
                45: "Insert",
                46: "Delete",
                59: ";",
                61: "=",
                91: "Meta",
                92: "Meta",
                106: "*",
                107: "+",
                108: ",",
                109: "-",
                110: ".",
                111: "/",
                144: "NumLock",
                145: "ScrollLock",
                160: "Shift",
                161: "Shift",
                162: "Control",
                163: "Control",
                164: "Alt",
                165: "Alt",
                173: "-",
                186: ";",
                187: "=",
                188: ",",
                189: "-",
                190: ".",
                191: "/",
                192: "`",
                219: "[",
                220: "\\",
                221: "]",
                222: "'"
            }, i = {
                48: ")",
                49: "!",
                50: "@",
                51: "#",
                52: "$",
                53: "%",
                54: "^",
                55: "&",
                56: "*",
                57: "(",
                59: ":",
                61: "+",
                173: "_",
                186: ":",
                187: "+",
                188: "<",
                189: "_",
                190: ">",
                191: "?",
                192: "~",
                219: "{",
                220: "|",
                221: "}",
                222: '"'
            }, s = "u" > typeof navigator && /Mac/.test(navigator.platform), o = "u" > typeof navigator && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent), a = 0; a < 10; a++) n[48 + a] = n[96 + a] = String(a);
        for (var a = 1; a <= 24; a++) n[a + 111] = "F" + a;
        for (var a = 65; a <= 90; a++) n[a] = String.fromCharCode(a + 32), i[a] = String.fromCharCode(a);
        for (var l in n) i.hasOwnProperty(l) || (i[l] = n[l]);

        function c(t) {
            var e = !(s && t.metaKey && t.shiftKey && !t.ctrlKey && !t.altKey || o && t.shiftKey && t.key && 1 == t.key.length || "Unidentified" == t.key) && t.key || (t.shiftKey ? i : n)[t.keyCode] || t.key || "Unidentified";
            return "Esc" == e && (e = "Escape"), "Del" == e && (e = "Delete"), "Left" == e && (e = "ArrowLeft"), "Up" == e && (e = "ArrowUp"), "Right" == e && (e = "ArrowRight"), "Down" == e && (e = "ArrowDown"), e
        }
        r.d(e, {
            a: () => n,
            b: () => c,
            c: () => i
        })
    }),
    oNJ: (function(t, e, r) {
        r.r(e);
        var n = r("P0l"),
            i = r("em"),
            s = r("qy7"),
            o = r("Mj"),
            a = r("Xyv"),
            l = r("Zq"),
            c = r("V5"),
            u = r("Zz"),
            h = r("Ou"),
            d = r("Lb"),
            f = r("pI1"),
            p = r("g4"),
            g = r("o0E"),
            m = r("ts"),
            y = r("vSA"),
            b = r("yt"),
            v = r("Ct"),
            w = r("yN"),
            k = r("vZ");
        class S extends n.b {
            constructor(t, e) {
                super(), this.doc = t, this.awareness = e
            }
        }
        class E {
            constructor(t, e) {
                this.clock = t, this.len = e
            }
        }
        class x {
            constructor() {
                this.clients = new Map
            }
        }
        let C = (t, e, r) => e.clients.forEach((e, n) => {
                let i = t.doc.store.clients.get(n);
                if (null != i) {
                    let n = i[i.length - 1],
                        s = n.id.clock + n.length;
                    for (let n = 0, o = e[n]; n < e.length && o.clock < s; o = e[++n]) tA(t, i, o.clock, o.len, r)
                }
            }),
            _ = (t, e) => {
                let r = t.clients.get(e.client);
                return void 0 !== r && null !== ((t, e) => {
                    let r = 0,
                        n = t.length - 1;
                    for (; r <= n;) {
                        let i = s.b((r + n) / 2),
                            o = t[i],
                            a = o.clock;
                        if (a <= e) {
                            if (e < a + o.len) return i;
                            r = i + 1
                        } else n = i - 1
                    }
                    return null
                })(r, e.clock)
            },
            O = t => {
                t.clients.forEach(t => {
                    let e, r;
                    for (t.sort((t, e) => t.clock - e.clock), e = 1, r = 1; e < t.length; e++) {
                        let n = t[r - 1],
                            i = t[e];
                        n.clock + n.len >= i.clock ? t[r - 1] = new E(n.clock, s.d(n.len, i.clock + i.len - n.clock)) : (r < e && (t[r] = i), r++)
                    }
                    t.length = r
                })
            },
            R = t => {
                let e = new x;
                for (let r = 0; r < t.length; r++) t[r].clients.forEach((n, s) => {
                    if (!e.clients.has(s)) {
                        let o = n.slice();
                        for (let e = r + 1; e < t.length; e++) i.a(o, t[e].clients.get(s) || []);
                        e.clients.set(s, o)
                    }
                });
                return O(e), e
            },
            D = (t, e, r, n) => {
                o.e(t.clients, e, () => []).push(new E(r, n))
            },
            A = () => new x,
            M = t => {
                let e = A();
                return t.clients.forEach((t, r) => {
                    let n = [];
                    for (let e = 0; e < t.length; e++) {
                        let r = t[e];
                        if (r.deleted) {
                            let i = r.id.clock,
                                s = r.length;
                            if (e + 1 < t.length)
                                for (let r = t[e + 1]; e + 1 < t.length && r.deleted; r = t[++e + 1]) s += r.length;
                            n.push(new E(i, s))
                        }
                    }
                    n.length > 0 && e.clients.set(r, n)
                }), e
            },
            T = (t, e) => {
                a.n(t.restEncoder, e.clients.size), i.c(e.clients.entries()).sort((t, e) => e[0] - t[0]).forEach(([e, r]) => {
                    t.resetDsCurVal(), a.n(t.restEncoder, e);
                    let n = r.length;
                    a.n(t.restEncoder, n);
                    for (let e = 0; e < n; e++) {
                        let n = r[e];
                        t.writeDsClock(n.clock), t.writeDsLen(n.len)
                    }
                })
            },
            I = t => {
                let e = new x,
                    r = l.k(t.restDecoder);
                for (let n = 0; n < r; n++) {
                    t.resetDsCurVal();
                    let r = l.k(t.restDecoder),
                        n = l.k(t.restDecoder);
                    if (n > 0) {
                        let i = o.e(e.clients, r, () => []);
                        for (let e = 0; e < n; e++) i.push(new E(t.readDsClock(), t.readDsLen()))
                    }
                }
                return e
            },
            P = (t, e, r) => {
                let n = new x,
                    i = l.k(t.restDecoder);
                for (let s = 0; s < i; s++) {
                    t.resetDsCurVal();
                    let i = l.k(t.restDecoder),
                        s = l.k(t.restDecoder),
                        o = r.clients.get(i) || [],
                        a = tE(r, i);
                    for (let r = 0; r < s; r++) {
                        let r = t.readDsClock(),
                            s = r + t.readDsLen();
                        if (r < a) {
                            a < s && D(n, i, a, s - a);
                            let t = tC(o, r),
                                l = o[t];
                            for (!l.deleted && l.id.clock < r && (o.splice(t + 1, 0, ro(e, l, r - l.id.clock)), t++); t < o.length;)
                                if ((l = o[t++]).id.clock < s) l.deleted || (s < l.id.clock + l.length && o.splice(t, 0, ro(e, l, s - l.id.clock)), l.delete(e));
                                else break
                        } else D(n, i, r, s - r)
                    }
                }
                if (n.clients.size > 0) {
                    let t = new V;
                    return a.n(t.restEncoder, 0), T(t, n), t.toUint8Array()
                }
                return null
            },
            j = (t, e) => {
                if (t.clients.size !== e.clients.size) return !1;
                for (let [r, n] of t.clients.entries()) {
                    let t = e.clients.get(r);
                    if (void 0 === t || n.length !== t.length) return !1;
                    for (let e = 0; e < n.length; e++) {
                        let r = n[e],
                            i = t[e];
                        if (r.clock !== i.clock || r.len !== i.len) return !1
                    }
                }
                return !0
            },
            q = c.a;
        class U extends n.b {
            constructor({
                guid: t = c.b(),
                collectionid: e = null,
                gc: r = !0,
                gcFilter: n = () => !0,
                meta: i = null,
                autoLoad: s = !1,
                shouldLoad: o = !0
            } = {}) {
                super(), this.gc = r, this.gcFilter = n, this.clientID = q(), this.guid = t, this.collectionid = e, this.share = new Map, this.store = new tk, this._transaction = null, this._transactionCleanups = [], this.subdocs = new Set, this._item = null, this.shouldLoad = o, this.autoLoad = s, this.meta = i, this.isLoaded = !1, this.isSynced = !1, this.isDestroyed = !1, this.whenLoaded = u.a(t => {
                    this.on("load", () => {
                        this.isLoaded = !0, t(this)
                    })
                });
                let a = () => u.a(t => {
                    let e = r => {
                        (void 0 === r || !0 === r) && (this.off("sync", e), t())
                    };
                    this.on("sync", e)
                });
                this.on("sync", t => {
                    !1 === t && this.isSynced && (this.whenSynced = a()), this.isSynced = void 0 === t || !0 === t, this.isSynced && !this.isLoaded && this.emit("load", [this])
                }), this.whenSynced = a()
            }
            load() {
                let t = this._item;
                null === t || this.shouldLoad || tL(t.parent.doc, t => {
                    t.subdocsLoaded.add(this)
                }, null, !0), this.shouldLoad = !0
            }
            getSubdocs() {
                return this.subdocs
            }
            getSubdocGuids() {
                return new Set(i.c(this.subdocs).map(t => t.guid))
            }
            transact(t, e = null) {
                return tL(this, t, e)
            }
            get(t, e = es) {
                let r = o.e(this.share, t, () => {
                        let t = new e;
                        return t._integrate(this, null), t
                    }),
                    n = r.constructor;
                if (e !== es && n !== e)
                    if (n === es) {
                        let n = new e;
                        n._map = r._map, r._map.forEach(t => {
                            for (; null !== t; t = t.left) t.parent = n
                        }), n._start = r._start;
                        for (let t = n._start; null !== t; t = t.right) t.parent = n;
                        return n._length = r._length, this.share.set(t, n), n._integrate(this, null), n
                    } else throw Error(`Type with the name ${t} has already been defined with a different constructor`);
                return r
            }
            getArray(t = "") {
                return this.get(t, eS)
            }
            getText(t = "") {
                return this.get(t, eF)
            }
            getMap(t = "") {
                return this.get(t, ex)
            }
            getXmlElement(t = "") {
                return this.get(t, eB)
            }
            getXmlFragment(t = "") {
                return this.get(t, ez)
            }
            toJSON() {
                let t = {};
                return this.share.forEach((e, r) => {
                    t[r] = e.toJSON()
                }), t
            }
            destroy() {
                this.isDestroyed = !0, i.c(this.subdocs).forEach(t => t.destroy());
                let t = this._item;
                if (null !== t) {
                    this._item = null;
                    let e = t.content;
                    e.doc = new U({
                        guid: this.guid,
                        ...e.opts,
                        shouldLoad: !1
                    }), e.doc._item = t, tL(t.parent.doc, r => {
                        let n = e.doc;
                        t.deleted || r.subdocsAdded.add(n), r.subdocsRemoved.add(this)
                    }, null, !0)
                }
                this.emit("destroyed", [!0]), this.emit("destroy", [this]), super.destroy()
            }
        }
        class L {
            constructor(t) {
                this.restDecoder = t
            }
            resetDsCurVal() {}
            readDsClock() {
                return l.k(this.restDecoder)
            }
            readDsLen() {
                return l.k(this.restDecoder)
            }
        }
        class N extends L {
            readLeftID() {
                return ts(l.k(this.restDecoder), l.k(this.restDecoder))
            }
            readRightID() {
                return ts(l.k(this.restDecoder), l.k(this.restDecoder))
            }
            readClient() {
                return l.k(this.restDecoder)
            }
            readInfo() {
                return l.h(this.restDecoder)
            }
            readString() {
                return l.j(this.restDecoder)
            }
            readParentInfo() {
                return 1 === l.k(this.restDecoder)
            }
            readTypeRef() {
                return l.k(this.restDecoder)
            }
            readLen() {
                return l.k(this.restDecoder)
            }
            readAny() {
                return l.g(this.restDecoder)
            }
            readBuf() {
                return h.a(l.l(this.restDecoder))
            }
            readJSON() {
                return JSON.parse(l.j(this.restDecoder))
            }
            readKey() {
                return l.j(this.restDecoder)
            }
        }
        class F {
            constructor(t) {
                this.dsCurrVal = 0, this.restDecoder = t
            }
            resetDsCurVal() {
                this.dsCurrVal = 0
            }
            readDsClock() {
                return this.dsCurrVal += l.k(this.restDecoder), this.dsCurrVal
            }
            readDsLen() {
                let t = l.k(this.restDecoder) + 1;
                return this.dsCurrVal += t, t
            }
        }
        class Q extends F {
            constructor(t) {
                super(t), this.keys = [], l.k(t), this.keyClockDecoder = new l.a(l.l(t)), this.clientDecoder = new l.d(l.l(t)), this.leftClockDecoder = new l.a(l.l(t)), this.rightClockDecoder = new l.a(l.l(t)), this.infoDecoder = new l.b(l.l(t), l.h), this.stringDecoder = new l.c(l.l(t)), this.parentInfoDecoder = new l.b(l.l(t), l.h), this.typeRefDecoder = new l.d(l.l(t)), this.lenDecoder = new l.d(l.l(t))
            }
            readLeftID() {
                return new tn(this.clientDecoder.read(), this.leftClockDecoder.read())
            }
            readRightID() {
                return new tn(this.clientDecoder.read(), this.rightClockDecoder.read())
            }
            readClient() {
                return this.clientDecoder.read()
            }
            readInfo() {
                return this.infoDecoder.read()
            }
            readString() {
                return this.stringDecoder.read()
            }
            readParentInfo() {
                return 1 === this.parentInfoDecoder.read()
            }
            readTypeRef() {
                return this.typeRefDecoder.read()
            }
            readLen() {
                return this.lenDecoder.read()
            }
            readAny() {
                return l.g(this.restDecoder)
            }
            readBuf() {
                return l.l(this.restDecoder)
            }
            readJSON() {
                return l.g(this.restDecoder)
            }
            readKey() {
                let t = this.keyClockDecoder.read();
                if (t < this.keys.length) return this.keys[t];
                {
                    let t = this.stringDecoder.read();
                    return this.keys.push(t), t
                }
            }
        }
        class z {
            constructor() {
                this.restEncoder = a.e()
            }
            toUint8Array() {
                return a.g(this.restEncoder)
            }
            resetDsCurVal() {}
            writeDsClock(t) {
                a.n(this.restEncoder, t)
            }
            writeDsLen(t) {
                a.n(this.restEncoder, t)
            }
        }
        class B extends z {
            writeLeftID(t) {
                a.n(this.restEncoder, t.client), a.n(this.restEncoder, t.clock)
            }
            writeRightID(t) {
                a.n(this.restEncoder, t.client), a.n(this.restEncoder, t.clock)
            }
            writeClient(t) {
                a.n(this.restEncoder, t)
            }
            writeInfo(t) {
                a.j(this.restEncoder, t)
            }
            writeString(t) {
                a.m(this.restEncoder, t)
            }
            writeParentInfo(t) {
                a.n(this.restEncoder, +!!t)
            }
            writeTypeRef(t) {
                a.n(this.restEncoder, t)
            }
            writeLen(t) {
                a.n(this.restEncoder, t)
            }
            writeAny(t) {
                a.h(this.restEncoder, t)
            }
            writeBuf(t) {
                a.o(this.restEncoder, t)
            }
            writeJSON(t) {
                a.m(this.restEncoder, JSON.stringify(t))
            }
            writeKey(t) {
                a.m(this.restEncoder, t)
            }
        }
        class H {
            constructor() {
                this.restEncoder = a.e(), this.dsCurrVal = 0
            }
            toUint8Array() {
                return a.g(this.restEncoder)
            }
            resetDsCurVal() {
                this.dsCurrVal = 0
            }
            writeDsClock(t) {
                let e = t - this.dsCurrVal;
                this.dsCurrVal = t, a.n(this.restEncoder, e)
            }
            writeDsLen(t) {
                0 === t && d.c(), a.n(this.restEncoder, t - 1), this.dsCurrVal += t
            }
        }
        class V extends H {
            constructor() {
                super(), this.keyMap = new Map, this.keyClock = 0, this.keyClockEncoder = new a.a, this.clientEncoder = new a.d, this.leftClockEncoder = new a.a, this.rightClockEncoder = new a.a, this.infoEncoder = new a.b(a.j), this.stringEncoder = new a.c, this.parentInfoEncoder = new a.b(a.j), this.typeRefEncoder = new a.d, this.lenEncoder = new a.d
            }
            toUint8Array() {
                let t = a.e();
                return a.n(t, 0), a.o(t, this.keyClockEncoder.toUint8Array()), a.o(t, this.clientEncoder.toUint8Array()), a.o(t, this.leftClockEncoder.toUint8Array()), a.o(t, this.rightClockEncoder.toUint8Array()), a.o(t, a.g(this.infoEncoder)), a.o(t, this.stringEncoder.toUint8Array()), a.o(t, a.g(this.parentInfoEncoder)), a.o(t, this.typeRefEncoder.toUint8Array()), a.o(t, this.lenEncoder.toUint8Array()), a.k(t, a.g(this.restEncoder)), a.g(t)
            }
            writeLeftID(t) {
                this.clientEncoder.write(t.client), this.leftClockEncoder.write(t.clock)
            }
            writeRightID(t) {
                this.clientEncoder.write(t.client), this.rightClockEncoder.write(t.clock)
            }
            writeClient(t) {
                this.clientEncoder.write(t)
            }
            writeInfo(t) {
                this.infoEncoder.write(t)
            }
            writeString(t) {
                this.stringEncoder.write(t)
            }
            writeParentInfo(t) {
                this.parentInfoEncoder.write(+!!t)
            }
            writeTypeRef(t) {
                this.typeRefEncoder.write(t)
            }
            writeLen(t) {
                this.lenEncoder.write(t)
            }
            writeAny(t) {
                a.h(this.restEncoder, t)
            }
            writeBuf(t) {
                a.o(this.restEncoder, t)
            }
            writeJSON(t) {
                a.h(this.restEncoder, t)
            }
            writeKey(t) {
                let e = this.keyMap.get(t);
                void 0 === e ? (this.keyClockEncoder.write(this.keyClock++), this.stringEncoder.write(t)) : this.keyClockEncoder.write(e)
            }
        }
        let K = (t, e, r) => {
                let n = new Map;
                r.forEach((t, r) => {
                    tE(e, r) > t && n.set(r, t)
                }), tS(e).forEach((t, e) => {
                    r.has(e) || n.set(e, 0)
                }), a.n(t.restEncoder, n.size), i.c(n.entries()).sort((t, e) => e[0] - t[0]).forEach(([r, n]) => {
                    ((t, e, r, n) => {
                        n = s.d(n, e[0].id.clock);
                        let i = tC(e, n);
                        a.n(t.restEncoder, e.length - i), t.writeClient(r), a.n(t.restEncoder, n);
                        let o = e[i];
                        o.write(t, n - o.id.clock);
                        for (let r = i + 1; r < e.length; r++) e[r].write(t, 0)
                    })(t, e.clients.get(r), r, n)
                })
            },
            Y = (t, e, r, n = new Q(t)) => tL(e, t => {
                t.local = !1;
                let e = !1,
                    r = t.doc,
                    s = r.store,
                    c = ((t, e, r) => {
                        let n = [],
                            s = i.c(r.keys()).sort((t, e) => t - e);
                        if (0 === s.length) return null;
                        let l = () => {
                                if (0 === s.length) return null;
                                let t = r.get(s[s.length - 1]);
                                for (; t.refs.length === t.i;) {
                                    if (s.pop(), !(s.length > 0)) return null;
                                    t = r.get(s[s.length - 1])
                                }
                                return t
                            },
                            c = l();
                        if (null === c) return null;
                        let u = new tk,
                            h = new Map,
                            d = (t, e) => {
                                let r = h.get(t);
                                (null == r || r > e) && h.set(t, e)
                            },
                            f = c.refs[c.i++],
                            p = new Map,
                            g = () => {
                                for (let t of n) {
                                    let e = t.id.client,
                                        n = r.get(e);
                                    n ? (n.i--, u.clients.set(e, n.refs.slice(n.i)), r.delete(e), n.i = 0, n.refs = []) : u.clients.set(e, [t]), s = s.filter(t => t !== e)
                                }
                                n.length = 0
                            };
                        for (;;) {
                            if (f.constructor !== rd) {
                                let i = o.e(p, f.id.client, () => tE(e, f.id.client)) - f.id.clock;
                                if (i < 0) n.push(f), d(f.id.client, f.id.clock - 1), g();
                                else {
                                    let s = f.getMissing(t, e);
                                    if (null !== s) {
                                        n.push(f);
                                        let t = r.get(s) || {
                                            refs: [],
                                            i: 0
                                        };
                                        if (t.refs.length === t.i) d(s, tE(e, s)), g();
                                        else {
                                            f = t.refs[t.i++];
                                            continue
                                        }
                                    } else(0 === i || i < f.length) && (f.integrate(t, i), p.set(f.id.client, f.id.clock + f.length))
                                }
                            }
                            if (n.length > 0) f = n.pop();
                            else if (null !== c && c.i < c.refs.length) f = c.refs[c.i++];
                            else {
                                if (null === (c = l())) break;
                                f = c.refs[c.i++]
                            }
                        }
                        if (u.clients.size > 0) {
                            let t = new V;
                            return K(t, u, new Map), a.n(t.restEncoder, 0), {
                                missing: h,
                                update: t.toUint8Array()
                            }
                        }
                        return null
                    })(t, s, ((t, e) => {
                        let r = o.c(),
                            n = l.k(t.restDecoder);
                        for (let i = 0; i < n; i++) {
                            let n = l.k(t.restDecoder),
                                i = Array(n),
                                s = t.readClient(),
                                o = l.k(t.restDecoder);
                            r.set(s, {
                                i: 0,
                                refs: i
                            });
                            for (let r = 0; r < n; r++) {
                                let n = t.readInfo();
                                switch (31 & n) {
                                    case 0: {
                                        let e = t.readLen();
                                        i[r] = new e$(ts(s, o), e), o += e;
                                        break
                                    }
                                    case 10: {
                                        let e = l.k(t.restDecoder);
                                        i[r] = new rd(ts(s, o), e), o += e;
                                        break
                                    }
                                    default: {
                                        let a = (192 & n) == 0,
                                            l = new rc(ts(s, o), null, (128 & n) == 128 ? t.readLeftID() : null, null, (64 & n) == 64 ? t.readRightID() : null, a ? t.readParentInfo() ? e.get(t.readString()) : t.readLeftID() : null, a && (32 & n) == 32 ? t.readString() : null, ru(t, n));
                                        i[r] = l, o += l.length
                                    }
                                }
                            }
                        }
                        return r
                    })(n, r)),
                    u = s.pendingStructs;
                if (u) {
                    for (let [t, r] of u.missing)
                        if (r < tE(s, t)) {
                            e = !0;
                            break
                        } if (c) {
                        for (let [t, e] of c.missing) {
                            let r = u.missing.get(t);
                            (null == r || r > e) && u.missing.set(t, e)
                        }
                        u.update = tG([u.update, c.update])
                    }
                } else s.pendingStructs = c;
                let h = P(n, t, s);
                if (s.pendingDs) {
                    let e = new Q(l.e(s.pendingDs));
                    l.k(e.restDecoder);
                    let r = P(e, t, s);
                    h && r ? s.pendingDs = tG([h, r]) : s.pendingDs = h || r
                } else s.pendingDs = h;
                if (e) {
                    let e = s.pendingStructs.update;
                    s.pendingStructs = null, $(t.doc, e)
                }
            }, r, !1),
            $ = (t, e, r, n = Q) => {
                let i = l.e(e);
                Y(i, t, r, new n(i))
            },
            W = (t, e = new Uint8Array([0]), r = new V) => {
                ((t, e, r = new Map) => {
                    K(t, e.store, r), T(t, M(e.store))
                })(r, t, G(e));
                let n = [r.toUint8Array()];
                if (t.store.pendingDs && n.push(t.store.pendingDs), t.store.pendingStructs && n.push(tX(t.store.pendingStructs.update, e)), n.length > 1) {
                    if (r.constructor === B) return tY(n.map((t, e) => 0 === e ? t : t4(t)));
                    else if (r.constructor === V) return tG(n)
                }
                return n[0]
            },
            J = t => {
                let e = new Map,
                    r = l.k(t.restDecoder);
                for (let n = 0; n < r; n++) {
                    let r = l.k(t.restDecoder),
                        n = l.k(t.restDecoder);
                    e.set(r, n)
                }
                return e
            },
            G = t => J(new L(l.e(t))),
            X = (t, e) => (a.n(t.restEncoder, e.size), i.c(e.entries()).sort((t, e) => e[0] - t[0]).forEach(([e, r]) => {
                a.n(t.restEncoder, e), a.n(t.restEncoder, r)
            }), t);
        class Z {
            constructor() {
                this.l = []
            }
        }
        let tt = () => new Z,
            te = (t, e) => {
                let r = t.l,
                    n = r.length;
                t.l = r.filter(t => e !== t), n === t.l.length && console.error("[yjs] Tried to remove event handler that doesn't exist.")
            },
            tr = (t, e, r) => f.a(t.l, [e, r]);
        class tn {
            constructor(t, e) {
                this.client = t, this.clock = e
            }
        }
        let ti = (t, e) => t === e || null !== t && null !== e && t.client === e.client && t.clock === e.clock,
            ts = (t, e) => new tn(t, e),
            to = (t, e) => {
                a.n(t, e.client), a.n(t, e.clock)
            },
            ta = t => ts(l.k(t), l.k(t)),
            tl = t => {
                for (let [e, r] of t.doc.share.entries())
                    if (r === t) return e;
                throw d.c()
            },
            tc = (t, e) => {
                for (; null !== e;) {
                    if (e.parent === t) return !0;
                    e = e.parent._item
                }
                return !1
            };
        class tu {
            constructor(t, e = t.getMap("users")) {
                let r = new Map;
                this.yusers = e, this.doc = t, this.clients = new Map, this.dss = r;
                let n = (t, e) => {
                    let r = t.get("ds"),
                        n = t.get("ids"),
                        i = t => this.clients.set(t, e);
                    r.observe(t => {
                        t.changes.added.forEach(t => {
                            t.content.getContent().forEach(t => {
                                t instanceof Uint8Array && this.dss.set(e, R([this.dss.get(e) || A(), I(new L(l.e(t)))]))
                            })
                        })
                    }), this.dss.set(e, R(r.map(t => I(new L(l.e(t)))))), n.observe(t => t.changes.added.forEach(t => t.content.getContent().forEach(i))), n.forEach(i)
                };
                e.observe(t => {
                    t.keysChanged.forEach(t => n(e.get(t), t))
                }), e.forEach(n)
            }
            setUserMapping(t, e, r, {
                filter: n = () => !0
            } = {}) {
                let i = this.yusers,
                    s = i.get(r);
                s || ((s = new ex).set("ids", new eS), s.set("ds", new eS), i.set(r, s)), s.get("ids").push([e]), i.observe(t => {
                    setTimeout(() => {
                        let t = i.get(r);
                        if (t !== s) {
                            s = t, this.clients.forEach((t, e) => {
                                r === t && s.get("ids").push([e])
                            });
                            let e = new z,
                                n = this.dss.get(r);
                            n && (T(e, n), s.get("ds").push([e.toUint8Array()]))
                        }
                    }, 0)
                }), t.on("afterTransaction", t => {
                    setTimeout(() => {
                        let e = s.get("ds"),
                            r = t.deleteSet;
                        if (t.local && r.clients.size > 0 && n(t, r)) {
                            let t = new z;
                            T(t, r), e.push([t.toUint8Array()])
                        }
                    })
                })
            }
            getUserByClientId(t) {
                return this.clients.get(t) || null
            }
            getUserByDeletedId(t) {
                for (let [e, r] of this.dss.entries())
                    if (_(r, t)) return e;
                return null
            }
        }
        class th {
            constructor(t, e, r, n = 0) {
                this.type = t, this.tname = e, this.item = r, this.assoc = n
            }
        }
        class td {
            constructor(t, e, r = 0) {
                this.type = t, this.index = e, this.assoc = r
            }
        }
        let tf = (t, e, r) => {
            let n = null,
                i = null;
            return null === t._item ? i = tl(t) : n = ts(t._item.id.client, t._item.id.clock), new th(n, i, e, r)
        };
        class tp {
            constructor(t, e) {
                this.ds = t, this.sv = e
            }
        }
        let tg = (t, e = new H) => (T(e, t.ds), X(e, t.sv), e.toUint8Array()),
            tm = (t, e = new F(l.e(t))) => new tp(I(e), J(e)),
            ty = (t, e) => new tp(t, e),
            tb = ty(A(), new Map),
            tv = (t, e) => void 0 === e ? !t.deleted : e.sv.has(t.id.client) && (e.sv.get(t.id.client) || 0) > t.id.clock && !_(e.ds, t.id),
            tw = (t, e) => {
                let r = o.e(t.meta, tw, p.a),
                    n = t.doc.store;
                r.has(e) || (e.sv.forEach((e, r) => {
                    e < tE(n, r) && tR(t, ts(r, e))
                }), C(t, e.ds, t => {}), r.add(e))
            };
        class tk {
            constructor() {
                this.clients = new Map, this.pendingStructs = null, this.pendingDs = null
            }
        }
        let tS = t => {
                let e = new Map;
                return t.clients.forEach((t, r) => {
                    let n = t[t.length - 1];
                    e.set(r, n.id.clock + n.length)
                }), e
            },
            tE = (t, e) => {
                let r = t.clients.get(e);
                if (void 0 === r) return 0;
                let n = r[r.length - 1];
                return n.id.clock + n.length
            },
            tx = (t, e) => {
                let r = t.clients.get(e.id.client);
                if (void 0 === r) r = [], t.clients.set(e.id.client, r);
                else {
                    let t = r[r.length - 1];
                    if (t.id.clock + t.length !== e.id.clock) throw d.c()
                }
                r.push(e)
            },
            tC = (t, e) => {
                let r = 0,
                    n = t.length - 1,
                    i = t[n],
                    o = i.id.clock;
                if (o === e) return n;
                let a = s.b(e / (o + i.length - 1) * n);
                for (; r <= n;) {
                    if ((o = (i = t[a]).id.clock) <= e) {
                        if (e < o + i.length) return a;
                        r = a + 1
                    } else n = a - 1;
                    a = s.b((r + n) / 2)
                }
                throw d.c()
            },
            t_ = (t, e) => {
                let r = t.clients.get(e.client);
                return r[tC(r, e.clock)]
            },
            tO = (t, e, r) => {
                let n = tC(e, r),
                    i = e[n];
                return i.id.clock < r && i instanceof rc ? (e.splice(n + 1, 0, ro(t, i, r - i.id.clock)), n + 1) : n
            },
            tR = (t, e) => {
                let r = t.doc.store.clients.get(e.client);
                return r[tO(t, r, e.clock)]
            },
            tD = (t, e, r) => {
                let n = e.clients.get(r.client),
                    i = tC(n, r.clock),
                    s = n[i];
                return r.clock !== s.id.clock + s.length - 1 && s.constructor !== e$ && n.splice(i + 1, 0, ro(t, s, r.clock - s.id.clock + 1)), s
            },
            tA = (t, e, r, n, i) => {
                let s;
                if (0 === n) return;
                let o = r + n,
                    a = tO(t, e, r);
                do o < (s = e[a++]).id.clock + s.length && tO(t, e, o), i(s); while (a < e.length && e[a].id.clock < o)
            };
        class tM {
            constructor(t, e, r) {
                this.doc = t, this.deleteSet = new x, this.beforeState = tS(t.store), this.afterState = new Map, this.changed = new Map, this.changedParentTypes = new Map, this._mergeStructs = [], this.origin = e, this.meta = new Map, this.local = r, this.subdocsAdded = new Set, this.subdocsRemoved = new Set, this.subdocsLoaded = new Set, this._needFormattingCleanup = !1
            }
        }
        let tT = (t, e) => (0 !== e.deleteSet.clients.size || !!o.a(e.afterState, (t, r) => e.beforeState.get(r) !== t)) && (O(e.deleteSet), K(t, e.doc.store, e.beforeState), T(t, e.deleteSet), !0),
            tI = (t, e, r) => {
                let n = e._item;
                (null === n || n.id.clock < (t.beforeState.get(n.id.client) || 0) && !n.deleted) && o.e(t.changed, e, p.a).add(r)
            },
            tP = (t, e) => {
                let r = t[e],
                    n = t[e - 1],
                    i = e;
                for (; i > 0; r = n, n = t[--i - 1]) {
                    if (n.deleted === r.deleted && n.constructor === r.constructor && n.mergeWith(r)) {
                        r instanceof rc && null !== r.parentSub && r.parent._map.get(r.parentSub) === r && r.parent._map.set(r.parentSub, n);
                        continue
                    }
                    break
                }
                let s = e - i;
                return s && t.splice(e + 1 - s, s), s
            },
            tj = (t, e, r) => {
                for (let [n, i] of t.clients.entries()) {
                    let t = e.clients.get(n);
                    for (let n = i.length - 1; n >= 0; n--) {
                        let s = i[n],
                            o = s.clock + s.len;
                        for (let n = tC(t, s.clock), i = t[n]; n < t.length && i.id.clock < o; i = t[++n]) {
                            let i = t[n];
                            if (s.clock + s.len <= i.id.clock) break;
                            i instanceof rc && i.deleted && !i.keep && r(i) && i.gc(e, !1)
                        }
                    }
                }
            },
            tq = (t, e) => {
                t.clients.forEach((t, r) => {
                    let n = e.clients.get(r);
                    for (let e = t.length - 1; e >= 0; e--) {
                        let r = t[e],
                            i = s.e(n.length - 1, 1 + tC(n, r.clock + r.len - 1));
                        for (let t = i, e = n[t]; t > 0 && e.id.clock >= r.clock; e = n[t]) t -= 1 + tP(n, t)
                    }
                })
            },
            tU = (t, e) => {
                if (e < t.length) {
                    let r = t[e],
                        n = r.doc,
                        i = n.store,
                        o = r.deleteSet,
                        a = r._mergeStructs;
                    try {
                        O(o), r.afterState = tS(r.doc.store), n.emit("beforeObserverCalls", [r, n]);
                        let t = [];
                        r.changed.forEach((e, n) => t.push(() => {
                            null !== n._item && n._item.deleted || n._callObserver(r, e)
                        })), t.push(() => {
                            r.changedParentTypes.forEach((e, n) => {
                                n._dEH.l.length > 0 && (null === n._item || !n._item.deleted) && ((e = e.filter(t => null === t.target._item || !t.target._item.deleted)).forEach(t => {
                                    t.currentTarget = n, t._path = null
                                }), e.sort((t, e) => t.path.length - e.path.length), t.push(() => {
                                    tr(n._dEH, e, r)
                                }))
                            }), t.push(() => n.emit("afterTransaction", [r, n])), t.push(() => {
                                r._needFormattingCleanup && eU(r)
                            })
                        }), (0, f.a)(t, [])
                    } finally {
                        n.gc && tj(o, i, n.gcFilter), tq(o, i), r.afterState.forEach((t, e) => {
                            let n = r.beforeState.get(e) || 0;
                            if (n !== t) {
                                let t = i.clients.get(e),
                                    r = s.d(tC(t, n), 1);
                                for (let e = t.length - 1; e >= r;) e -= 1 + tP(t, e)
                            }
                        });
                        for (let t = a.length - 1; t >= 0; t--) {
                            let {
                                client: e,
                                clock: r
                            } = a[t].id, n = i.clients.get(e), s = tC(n, r);
                            !(s + 1 < n.length && tP(n, s + 1) > 1) && s > 0 && tP(n, s)
                        }
                        if (r.local || r.afterState.get(n.clientID) === r.beforeState.get(n.clientID) || (g.a(m.e, m.b, "[yjs] ", m.h, m.g, "Changed the client-id because another client seems to be using it."), n.clientID = q()), n.emit("afterTransactionCleanup", [r, n]), n._observers.has("update")) {
                            let t = new B;
                            tT(t, r) && n.emit("update", [t.toUint8Array(), r.origin, n, r])
                        }
                        if (n._observers.has("updateV2")) {
                            let t = new V;
                            tT(t, r) && n.emit("updateV2", [t.toUint8Array(), r.origin, n, r])
                        }
                        let {
                            subdocsAdded: l,
                            subdocsLoaded: c,
                            subdocsRemoved: u
                        } = r;
                        (l.size > 0 || u.size > 0 || c.size > 0) && (l.forEach(t => {
                            t.clientID = n.clientID, null == t.collectionid && (t.collectionid = n.collectionid), n.subdocs.add(t)
                        }), u.forEach(t => n.subdocs.delete(t)), n.emit("subdocs", [{
                            loaded: c,
                            added: l,
                            removed: u
                        }, n, r]), u.forEach(t => t.destroy())), t.length <= e + 1 ? (n._transactionCleanups = [], n.emit("afterAllTransactions", [n, t])) : tU(t, e + 1)
                    }
                }
            },
            tL = (t, e, r = null, n = !0) => {
                let i = t._transactionCleanups,
                    s = !1,
                    o = null;
                null === t._transaction && (s = !0, t._transaction = new tM(t, r, n), i.push(t._transaction), 1 === i.length && t.emit("beforeAllTransactions", [t]), t.emit("beforeTransaction", [t._transaction, t]));
                try {
                    o = e(t._transaction)
                } finally {
                    if (s) {
                        let e = t._transaction === i[0];
                        t._transaction = null, e && tU(i, 0)
                    }
                }
                return o
            };
        class tN {
            constructor(t, e) {
                this.insertions = e, this.deletions = t, this.meta = new Map
            }
        }
        let tF = (t, e, r) => {
                C(t, r.deletions, r => {
                    r instanceof rc && e.scope.some(e => e === t.doc || tc(e, r)) && rs(r, !1)
                })
            },
            tQ = (t, e, r) => {
                let n = null,
                    i = t.doc,
                    s = t.scope;
                tL(i, r => {
                    for (; e.length > 0 && null === t.currStackItem;) {
                        let n = i.store,
                            o = e.pop(),
                            a = new Set,
                            l = [],
                            c = !1;
                        C(r, o.insertions, t => {
                            if (t instanceof rc) {
                                if (null !== t.redone) {
                                    let {
                                        item: e,
                                        diff: i
                                    } = ri(n, t.id);
                                    i > 0 && (e = tR(r, ts(e.id.client, e.id.clock + i))), t = e
                                }!t.deleted && s.some(e => e === r.doc || tc(e, t)) && l.push(t)
                            }
                        }), C(r, o.deletions, t => {
                            t instanceof rc && s.some(e => e === r.doc || tc(e, t)) && !_(o.insertions, t.id) && a.add(t)
                        }), a.forEach(e => {
                            c = null !== rl(r, e, a, o.insertions, t.ignoreRemoteMapChanges, t) || c
                        });
                        for (let e = l.length - 1; e >= 0; e--) {
                            let n = l[e];
                            t.deleteFilter(n) && (n.delete(r), c = !0)
                        }
                        t.currStackItem = c ? o : null
                    }
                    r.changed.forEach((t, e) => {
                        t.has(null) && e._searchMarker && (e._searchMarker.length = 0)
                    }), n = r
                }, t);
                let o = t.currStackItem;
                if (null != o) {
                    let e = n.changedParentTypes;
                    t.emit("stack-item-popped", [{
                        stackItem: o,
                        type: r,
                        changedParentTypes: e,
                        origin: t
                    }, t]), t.currStackItem = null
                }
                return o
            };
        class tz extends n.b {
            constructor(t, {
                captureTimeout: e = 500,
                captureTransaction: r = t => !0,
                deleteFilter: n = () => !0,
                trackedOrigins: s = new Set([null]),
                ignoreRemoteMapChanges: o = !1,
                doc: a = i.d(t) ? t[0].doc : t instanceof U ? t : t.doc
            } = {}) {
                super(), this.scope = [], this.doc = a, this.addToScope(t), this.deleteFilter = n, s.add(this), this.trackedOrigins = s, this.captureTransaction = r, this.undoStack = [], this.redoStack = [], this.undoing = !1, this.redoing = !1, this.currStackItem = null, this.lastChange = 0, this.ignoreRemoteMapChanges = o, this.captureTimeout = e, this.afterTransactionHandler = t => {
                    if (!this.captureTransaction(t) || !this.scope.some(e => t.changedParentTypes.has(e) || e === this.doc) || !this.trackedOrigins.has(t.origin) && (!t.origin || !this.trackedOrigins.has(t.origin.constructor))) return;
                    let e = this.undoing,
                        r = this.redoing,
                        n = e ? this.redoStack : this.undoStack;
                    e ? this.stopCapturing() : r || this.clear(!1, !0);
                    let i = new x;
                    t.afterState.forEach((e, r) => {
                        let n = t.beforeState.get(r) || 0,
                            s = e - n;
                        s > 0 && D(i, r, n, s)
                    });
                    let s = y.a(),
                        o = !1;
                    if (this.lastChange > 0 && s - this.lastChange < this.captureTimeout && n.length > 0 && !e && !r) {
                        let e = n[n.length - 1];
                        e.deletions = R([e.deletions, t.deleteSet]), e.insertions = R([e.insertions, i])
                    } else n.push(new tN(t.deleteSet, i)), o = !0;
                    e || r || (this.lastChange = s), C(t, t.deleteSet, e => {
                        e instanceof rc && this.scope.some(r => r === t.doc || tc(r, e)) && rs(e, !0)
                    });
                    let a = [{
                        stackItem: n[n.length - 1],
                        origin: t.origin,
                        type: e ? "redo" : "undo",
                        changedParentTypes: t.changedParentTypes
                    }, this];
                    o ? this.emit("stack-item-added", a) : this.emit("stack-item-updated", a)
                }, this.doc.on("afterTransaction", this.afterTransactionHandler), this.doc.on("destroy", () => {
                    this.destroy()
                })
            }
            addToScope(t) {
                let e = new Set(this.scope);
                (t = i.d(t) ? t : [t]).forEach(t => {
                    e.has(t) || (e.add(t), (t instanceof es ? t.doc !== this.doc : t !== this.doc) && g.b("[yjs#509] Not same Y.Doc"), this.scope.push(t))
                })
            }
            addTrackedOrigin(t) {
                this.trackedOrigins.add(t)
            }
            removeTrackedOrigin(t) {
                this.trackedOrigins.delete(t)
            }
            clear(t = !0, e = !0) {
                (t && this.canUndo() || e && this.canRedo()) && this.doc.transact(r => {
                    t && (this.undoStack.forEach(t => tF(r, this, t)), this.undoStack = []), e && (this.redoStack.forEach(t => tF(r, this, t)), this.redoStack = []), this.emit("stack-cleared", [{
                        undoStackCleared: t,
                        redoStackCleared: e
                    }])
                })
            }
            stopCapturing() {
                this.lastChange = 0
            }
            undo() {
                let t;
                this.undoing = !0;
                try {
                    t = tQ(this, this.undoStack, "undo")
                } finally {
                    this.undoing = !1
                }
                return t
            }
            redo() {
                let t;
                this.redoing = !0;
                try {
                    t = tQ(this, this.redoStack, "redo")
                } finally {
                    this.redoing = !1
                }
                return t
            }
            canUndo() {
                return this.undoStack.length > 0
            }
            canRedo() {
                return this.redoStack.length > 0
            }
            destroy() {
                this.trackedOrigins.delete(this), this.doc.off("afterTransaction", this.afterTransactionHandler), super.destroy()
            }
        }
        class tB {
            constructor(t, e) {
                this.gen = function*(t) {
                    let e = l.k(t.restDecoder);
                    for (let r = 0; r < e; r++) {
                        let e = l.k(t.restDecoder),
                            r = t.readClient(),
                            n = l.k(t.restDecoder);
                        for (let i = 0; i < e; i++) {
                            let e = t.readInfo();
                            if (10 === e) {
                                let e = l.k(t.restDecoder);
                                yield new rd(ts(r, n), e), n += e
                            } else if ((31 & e) != 0) {
                                let i = (192 & e) == 0,
                                    s = new rc(ts(r, n), null, (128 & e) == 128 ? t.readLeftID() : null, null, (64 & e) == 64 ? t.readRightID() : null, i ? t.readParentInfo() ? t.readString() : t.readLeftID() : null, i && (32 & e) == 32 ? t.readString() : null, ru(t, e));
                                yield s, n += s.length
                            } else {
                                let e = t.readLen();
                                yield new e$(ts(r, n), e), n += e
                            }
                        }
                    }
                }(t), this.curr = null, this.done = !1, this.filterSkips = e, this.next()
            }
            next() {
                do this.curr = this.gen.next().value || null; while (this.filterSkips && null !== this.curr && this.curr.constructor === rd) return this.curr
            }
        }
        let tH = (t, e = Q) => {
                let r = [],
                    n = new e(l.e(t)),
                    i = new tB(n, !1);
                for (let t = i.curr; null !== t; t = i.next()) r.push(t);
                g.a("Structs: ", r);
                let s = I(n);
                g.a("DeleteSet: ", s)
            },
            tV = (t, e = Q) => {
                let r = [],
                    n = new e(l.e(t)),
                    i = new tB(n, !1);
                for (let t = i.curr; null !== t; t = i.next()) r.push(t);
                return {
                    structs: r,
                    ds: I(n)
                }
            };
        class tK {
            constructor(t) {
                this.currClient = 0, this.startClock = 0, this.written = 0, this.encoder = t, this.clientStructs = []
            }
        }
        let tY = t => tG(t, N, B),
            t$ = (t, e = H, r = Q) => {
                let n = new e,
                    i = new tB(new r(l.e(t)), !1),
                    s = i.curr;
                if (null === s) return a.n(n.restEncoder, 0), n.toUint8Array();
                {
                    let t = 0,
                        e = s.id.client,
                        r = 0 !== s.id.clock,
                        o = r ? 0 : s.id.clock + s.length;
                    for (; null !== s; s = i.next()) e !== s.id.client && (0 !== o && (t++, a.n(n.restEncoder, e), a.n(n.restEncoder, o)), e = s.id.client, o = 0, r = 0 !== s.id.clock), s.constructor === rd && (r = !0), r || (o = s.id.clock + s.length);
                    0 !== o && (t++, a.n(n.restEncoder, e), a.n(n.restEncoder, o));
                    let l = a.e();
                    return a.n(l, t), a.i(l, n.restEncoder), n.restEncoder = l, n.toUint8Array()
                }
            },
            tW = (t, e = Q) => {
                let r = new Map,
                    n = new Map,
                    i = new tB(new e(l.e(t)), !1),
                    s = i.curr;
                if (null !== s) {
                    let t = s.id.client,
                        e = s.id.clock;
                    for (r.set(t, e); null !== s; s = i.next()) t !== s.id.client && (n.set(t, e), r.set(s.id.client, s.id.clock), t = s.id.client), e = s.id.clock + s.length;
                    n.set(t, e)
                }
                return {
                    from: r,
                    to: n
                }
            },
            tJ = (t, e) => {
                if (t.constructor === e$) {
                    let {
                        client: r,
                        clock: n
                    } = t.id;
                    return new e$(ts(r, n + e), t.length - e)
                }
                if (t.constructor === rd) {
                    let {
                        client: r,
                        clock: n
                    } = t.id;
                    return new rd(ts(r, n + e), t.length - e)
                } {
                    let {
                        client: r,
                        clock: n
                    } = t.id;
                    return new rc(ts(r, n + e), null, ts(r, n + e - 1), null, t.rightOrigin, t.parent, t.parentSub, t.content.splice(e))
                }
            },
            tG = (t, e = Q, r = V) => {
                if (1 === t.length) return t[0];
                let n = t.map(t => new e(l.e(t))),
                    i = n.map(t => new tB(t, !0)),
                    s = null,
                    o = new r,
                    a = new tK(o);
                for (;
                    (i = i.filter(t => null !== t.curr)).sort((t, e) => {
                        if (t.curr.id.client !== e.curr.id.client) return e.curr.id.client - t.curr.id.client;
                        {
                            let r = t.curr.id.clock - e.curr.id.clock;
                            return 0 === r ? t.curr.constructor === e.curr.constructor ? 0 : t.curr.constructor === rd ? 1 : -1 : r
                        }
                    }), 0 !== i.length;) {
                    let t = i[0],
                        e = t.curr.id.client;
                    if (null !== s) {
                        let r = t.curr,
                            n = !1;
                        for (; null !== r && r.id.clock + r.length <= s.struct.id.clock + s.struct.length && r.id.client >= s.struct.id.client;) r = t.next(), n = !0;
                        if (null === r || r.id.client !== e || n && r.id.clock > s.struct.id.clock + s.struct.length) continue;
                        if (e !== s.struct.id.client) t0(a, s.struct, s.offset), s = {
                            struct: r,
                            offset: 0
                        }, t.next();
                        else if (s.struct.id.clock + s.struct.length < r.id.clock)
                            if (s.struct.constructor === rd) s.struct.length = r.id.clock + r.length - s.struct.id.clock;
                            else {
                                t0(a, s.struct, s.offset);
                                let t = r.id.clock - s.struct.id.clock - s.struct.length;
                                s = {
                                    struct: new rd(ts(e, s.struct.id.clock + s.struct.length), t),
                                    offset: 0
                                }
                            }
                        else {
                            let e = s.struct.id.clock + s.struct.length - r.id.clock;
                            e > 0 && (s.struct.constructor === rd ? s.struct.length -= e : r = tJ(r, e)), s.struct.mergeWith(r) || (t0(a, s.struct, s.offset), s = {
                                struct: r,
                                offset: 0
                            }, t.next())
                        }
                    } else s = {
                        struct: t.curr,
                        offset: 0
                    }, t.next();
                    for (let r = t.curr; null !== r && r.id.client === e && r.id.clock === s.struct.id.clock + s.struct.length && r.constructor !== rd; r = t.next()) t0(a, s.struct, s.offset), s = {
                        struct: r,
                        offset: 0
                    }
                }
                return null !== s && (t0(a, s.struct, s.offset), s = null), t1(a), T(o, R(n.map(t => I(t)))), o.toUint8Array()
            },
            tX = (t, e, r = Q, n = V) => {
                let i = G(e),
                    o = new n,
                    a = new tK(o),
                    c = new r(l.e(t)),
                    u = new tB(c, !1);
                for (; u.curr;) {
                    let t = u.curr,
                        e = t.id.client,
                        r = i.get(e) || 0;
                    if (u.curr.constructor === rd) {
                        u.next();
                        continue
                    }
                    if (t.id.clock + t.length > r)
                        for (t0(a, t, s.d(r - t.id.clock, 0)), u.next(); u.curr && u.curr.id.client === e;) t0(a, u.curr, 0), u.next();
                    else
                        for (; u.curr && u.curr.id.client === e && u.curr.id.clock + u.curr.length <= r;) u.next()
                }
                return t1(a), T(o, I(c)), o.toUint8Array()
            },
            tZ = t => {
                t.written > 0 && (t.clientStructs.push({
                    written: t.written,
                    restEncoder: a.g(t.encoder.restEncoder)
                }), t.encoder.restEncoder = a.e(), t.written = 0)
            },
            t0 = (t, e, r) => {
                t.written > 0 && t.currClient !== e.id.client && tZ(t), 0 === t.written && (t.currClient = e.id.client, t.encoder.writeClient(e.id.client), a.n(t.encoder.restEncoder, e.id.clock + r)), e.write(t.encoder, r), t.written++
            },
            t1 = t => {
                tZ(t);
                let e = t.encoder.restEncoder;
                a.n(e, t.clientStructs.length);
                for (let r = 0; r < t.clientStructs.length; r++) {
                    let n = t.clientStructs[r];
                    a.n(e, n.written), a.k(e, n.restEncoder)
                }
            },
            t3 = (t, e, r, n) => {
                let i = new r(l.e(t)),
                    s = new tB(i, !1),
                    o = new n,
                    a = new tK(o);
                for (let t = s.curr; null !== t; t = s.next()) t0(a, e(t), 0);
                return t1(a), T(o, I(i)), o.toUint8Array()
            },
            t2 = ({
                formatting: t = !0,
                subdocs: e = !0,
                yxml: r = !0
            } = {}) => {
                let n = 0,
                    i = o.c(),
                    s = o.c(),
                    a = o.c(),
                    l = o.c();
                return l.set(null, null), c => {
                    switch (c.constructor) {
                        case e$:
                        case rd:
                            return c;
                        case rc: {
                            let u = c.content;
                            switch (u.constructor) {
                                case eJ:
                                    break;
                                case rn:
                                    if (r) {
                                        let t = u.type;
                                        t instanceof eB && (t.nodeName = o.e(s, t.nodeName, () => "node-" + n)), t instanceof eV && (t.hookName = o.e(s, t.hookName, () => "hook-" + n))
                                    }
                                    break;
                                case e2:
                                    u.arr = u.arr.map(() => n);
                                    break;
                                case eW:
                                    u.content = new Uint8Array([n]);
                                    break;
                                case eX:
                                    e && (u.opts = {}, u.doc.guid = n + "");
                                    break;
                                case eZ:
                                    u.embed = {};
                                    break;
                                case e0:
                                    t && (u.key = o.e(a, u.key, () => n + ""), u.value = o.e(l, u.value, () => ({
                                        i: n
                                    })));
                                    break;
                                case e1:
                                    u.arr = u.arr.map(() => n);
                                    break;
                                case e4:
                                    u.str = b.d(n % 10 + "", u.str.length);
                                    break;
                                default:
                                    d.c()
                            }
                            return c.parentSub && (c.parentSub = o.e(i, c.parentSub, () => n + "")), n++, c
                        }
                        default:
                            d.c()
                    }
                }
            },
            t4 = t => t3(t, f.c, Q, B),
            t5 = "You must not compute changes after the event-handler fired.";
        class t6 {
            constructor(t, e) {
                this.target = t, this.currentTarget = t, this.transaction = e, this._changes = null, this._keys = null, this._delta = null, this._path = null
            }
            get path() {
                return this._path || (this._path = t8(this.currentTarget, this.target))
            }
            deletes(t) {
                return _(this.transaction.deleteSet, t.id)
            }
            get keys() {
                if (null === this._keys) {
                    if (0 === this.transaction.doc._transactionCleanups.length) throw d.a(t5);
                    let t = new Map,
                        e = this.target;
                    this.transaction.changed.get(e).forEach(r => {
                        if (null !== r) {
                            let n, s, o = e._map.get(r);
                            if (this.adds(o)) {
                                let t = o.left;
                                for (; null !== t && this.adds(t);) t = t.left;
                                if (this.deletes(o))
                                    if (!(null !== t && this.deletes(t))) return;
                                    else n = "delete", s = i.e(t.content.getContent());
                                else null !== t && this.deletes(t) ? (n = "update", s = i.e(t.content.getContent())) : (n = "add", s = void 0)
                            } else {
                                if (!this.deletes(o)) return;
                                n = "delete", s = i.e(o.content.getContent())
                            }
                            t.set(r, {
                                action: n,
                                oldValue: s
                            })
                        }
                    }), this._keys = t
                }
                return this._keys
            }
            get delta() {
                return this.changes.delta
            }
            adds(t) {
                return t.id.clock >= (this.transaction.beforeState.get(t.id.client) || 0)
            }
            get changes() {
                let t = this._changes;
                if (null === t) {
                    if (0 === this.transaction.doc._transactionCleanups.length) throw d.a(t5);
                    let e = this.target,
                        r = p.a(),
                        n = p.a(),
                        i = [];
                    if (t = {
                            added: r,
                            deleted: n,
                            delta: i,
                            keys: this.keys
                        }, this.transaction.changed.get(e).has(null)) {
                        let t = null,
                            s = () => {
                                t && i.push(t)
                            };
                        for (let i = e._start; null !== i; i = i.right) i.deleted ? this.deletes(i) && !this.adds(i) && ((null === t || void 0 === t.delete) && (s(), t = {
                            delete: 0
                        }), t.delete += i.length, n.add(i)) : this.adds(i) ? ((null === t || void 0 === t.insert) && (s(), t = {
                            insert: []
                        }), t.insert = t.insert.concat(i.content.getContent()), r.add(i)) : ((null === t || void 0 === t.retain) && (s(), t = {
                            retain: 0
                        }), t.retain += i.length);
                        null !== t && void 0 === t.retain && s()
                    }
                    this._changes = t
                }
                return t
            }
        }
        let t8 = (t, e) => {
                let r = [];
                for (; null !== e._item && e !== t;) {
                    if (null !== e._item.parentSub) r.unshift(e._item.parentSub);
                    else {
                        let t = 0,
                            n = e._item.parent._start;
                        for (; n !== e._item && null !== n;) !n.deleted && n.countable && (t += n.length), n = n.right;
                        r.unshift(t)
                    }
                    e = e._item.parent
                }
                return r
            },
            t9 = () => {
                g.b("Invalid access: Add Yjs type to a document before reading data.")
            },
            t7 = 0;
        class et {
            constructor(t, e) {
                t.marker = !0, this.p = t, this.index = e, this.timestamp = t7++
            }
        }
        let ee = (t, e, r) => {
                t.p.marker = !1, t.p = e, e.marker = !0, t.index = r, t.timestamp = t7++
            },
            er = (t, e) => {
                if (null === t._start || 0 === e || null === t._searchMarker) return null;
                let r = 0 === t._searchMarker.length ? null : t._searchMarker.reduce((t, r) => s.a(e - t.index) < s.a(e - r.index) ? t : r),
                    n = t._start,
                    i = 0;
                for (null !== r && (n = r.p, i = r.index, r.timestamp = t7++); null !== n.right && i < e;) {
                    if (!n.deleted && n.countable) {
                        if (e < i + n.length) break;
                        i += n.length
                    }
                    n = n.right
                }
                for (; null !== n.left && i > e;) !(n = n.left).deleted && n.countable && (i -= n.length);
                for (; null !== n.left && n.left.id.client === n.id.client && n.left.id.clock + n.left.length === n.id.clock;) !(n = n.left).deleted && n.countable && (i -= n.length);
                if (null !== r && s.a(r.index - i) < n.parent.length / 80) return ee(r, n, i), r;
                var o = t._searchMarker,
                    a = n,
                    l = i;
                if (o.length >= 80) {
                    let t = o.reduce((t, e) => t.timestamp < e.timestamp ? t : e);
                    return ee(t, a, l), t
                } {
                    let t = new et(a, l);
                    return o.push(t), t
                }
            },
            en = (t, e, r) => {
                for (let n = t.length - 1; n >= 0; n--) {
                    let i = t[n];
                    if (r > 0) {
                        let e = i.p;
                        for (e.marker = !1; e && (e.deleted || !e.countable);)(e = e.left) && !e.deleted && e.countable && (i.index -= e.length);
                        if (null === e || !0 === e.marker) {
                            t.splice(n, 1);
                            continue
                        }
                        i.p = e, e.marker = !0
                    }(e < i.index || r > 0 && e === i.index) && (i.index = s.d(e, i.index + r))
                }
            },
            ei = (t, e, r) => {
                let n = t,
                    i = e.changedParentTypes;
                for (; o.e(i, t, () => []).push(r), null !== t._item;) t = t._item.parent;
                tr(n._eH, r, e)
            };
        class es {
            constructor() {
                this._item = null, this._map = new Map, this._start = null, this.doc = null, this._length = 0, this._eH = tt(), this._dEH = tt(), this._searchMarker = null
            }
            get parent() {
                return this._item ? this._item.parent : null
            }
            _integrate(t, e) {
                this.doc = t, this._item = e
            }
            _copy() {
                throw d.b()
            }
            clone() {
                throw d.b()
            }
            _write(t) {}
            get _first() {
                let t = this._start;
                for (; null !== t && t.deleted;) t = t.right;
                return t
            }
            _callObserver(t, e) {
                !t.local && this._searchMarker && (this._searchMarker.length = 0)
            }
            observe(t) {
                let e;
                e = this._eH, e.l.push(t)
            }
            observeDeep(t) {
                let e;
                e = this._dEH, e.l.push(t)
            }
            unobserve(t) {
                te(this._eH, t)
            }
            unobserveDeep(t) {
                te(this._dEH, t)
            }
            toJSON() {}
        }
        let eo = (t, e, r) => {
                t.doc ?? t9(), e < 0 && (e = t._length + e), r < 0 && (r = t._length + r);
                let n = r - e,
                    i = [],
                    s = t._start;
                for (; null !== s && n > 0;) {
                    if (s.countable && !s.deleted) {
                        let t = s.content.getContent();
                        if (t.length <= e) e -= t.length;
                        else {
                            for (let r = e; r < t.length && n > 0; r++) i.push(t[r]), n--;
                            e = 0
                        }
                    }
                    s = s.right
                }
                return i
            },
            ea = t => {
                t.doc ?? t9();
                let e = [],
                    r = t._start;
                for (; null !== r;) {
                    if (r.countable && !r.deleted) {
                        let t = r.content.getContent();
                        for (let r = 0; r < t.length; r++) e.push(t[r])
                    }
                    r = r.right
                }
                return e
            },
            el = (t, e) => {
                let r = 0,
                    n = t._start;
                for (t.doc ?? t9(); null !== n;) {
                    if (n.countable && !n.deleted) {
                        let i = n.content.getContent();
                        for (let n = 0; n < i.length; n++) e(i[n], r++, t)
                    }
                    n = n.right
                }
            },
            ec = (t, e) => {
                let r = [];
                return el(t, (n, i) => {
                    r.push(e(n, i, t))
                }), r
            },
            eu = (t, e) => {
                t.doc ?? t9();
                let r = er(t, e),
                    n = t._start;
                for (null !== r && (n = r.p, e -= r.index); null !== n; n = n.right)
                    if (!n.deleted && n.countable) {
                        if (e < n.length) return n.content.getContent()[e];
                        e -= n.length
                    }
            },
            eh = (t, e, r, n) => {
                let i = r,
                    s = t.doc,
                    o = s.clientID,
                    a = s.store,
                    l = null === r ? e._start : r.right,
                    c = [],
                    u = () => {
                        c.length > 0 && ((i = new rc(ts(o, tE(a, o)), i, i && i.lastId, l, l && l.id, e, null, new e2(c))).integrate(t, 0), c = [])
                    };
                n.forEach(r => {
                    if (null === r) c.push(r);
                    else switch (r.constructor) {
                        case Number:
                        case Object:
                        case Boolean:
                        case Array:
                        case String:
                            c.push(r);
                            break;
                        default:
                            switch (u(), r.constructor) {
                                case Uint8Array:
                                case ArrayBuffer:
                                    (i = new rc(ts(o, tE(a, o)), i, i && i.lastId, l, l && l.id, e, null, new eW(new Uint8Array(r)))).integrate(t, 0);
                                    break;
                                case U:
                                    (i = new rc(ts(o, tE(a, o)), i, i && i.lastId, l, l && l.id, e, null, new eX(r))).integrate(t, 0);
                                    break;
                                default:
                                    if (r instanceof es)(i = new rc(ts(o, tE(a, o)), i, i && i.lastId, l, l && l.id, e, null, new rn(r))).integrate(t, 0);
                                    else throw Error("Unexpected content type in insert operation")
                            }
                    }
                }), u()
            },
            ed = (t, e, r, n) => {
                if (r > e._length) throw d.a("Length exceeded!");
                if (0 === r) return e._searchMarker && en(e._searchMarker, r, n.length), eh(t, e, null, n);
                let i = r,
                    s = er(e, r),
                    o = e._start;
                for (null !== s && (o = s.p, 0 == (r -= s.index) && (r += (o = o.prev) && o.countable && !o.deleted ? o.length : 0)); null !== o; o = o.right)
                    if (!o.deleted && o.countable) {
                        if (r <= o.length) {
                            r < o.length && tR(t, ts(o.id.client, o.id.clock + r));
                            break
                        }
                        r -= o.length
                    } return e._searchMarker && en(e._searchMarker, i, n.length), eh(t, e, o, n)
            },
            ef = (t, e, r, n) => {
                if (0 === n) return;
                let i = r,
                    s = n,
                    o = er(e, r),
                    a = e._start;
                for (null !== o && (a = o.p, r -= o.index); null !== a && r > 0; a = a.right) !a.deleted && a.countable && (r < a.length && tR(t, ts(a.id.client, a.id.clock + r)), r -= a.length);
                for (; n > 0 && null !== a;) a.deleted || (n < a.length && tR(t, ts(a.id.client, a.id.clock + n)), a.delete(t), n -= a.length), a = a.right;
                if (n > 0) throw d.a("Length exceeded!");
                e._searchMarker && en(e._searchMarker, i, -s + n)
            },
            ep = (t, e, r) => {
                let n = e._map.get(r);
                void 0 !== n && n.delete(t)
            },
            eg = (t, e, r, n) => {
                let i, s = e._map.get(r) || null,
                    o = t.doc,
                    a = o.clientID;
                if (null == n) i = new e2([n]);
                else switch (n.constructor) {
                    case Number:
                    case Object:
                    case Boolean:
                    case Array:
                    case String:
                    case Date:
                    case BigInt:
                        i = new e2([n]);
                        break;
                    case Uint8Array:
                        i = new eW(n);
                        break;
                    case U:
                        i = new eX(n);
                        break;
                    default:
                        if (n instanceof es) i = new rn(n);
                        else throw Error("Unexpected content type")
                }
                new rc(ts(a, tE(o.store, a)), s, s && s.lastId, null, null, e, r, i).integrate(t, 0)
            },
            em = (t, e) => {
                t.doc ?? t9();
                let r = t._map.get(e);
                return void 0 === r || r.deleted ? void 0 : r.content.getContent()[r.length - 1]
            },
            ey = t => {
                let e = {};
                return t.doc ?? t9(), t._map.forEach((t, r) => {
                    t.deleted || (e[r] = t.content.getContent()[t.length - 1])
                }), e
            },
            eb = (t, e) => {
                t.doc ?? t9();
                let r = t._map.get(e);
                return void 0 !== r && !r.deleted
            },
            ev = (t, e) => {
                let r = {};
                return t._map.forEach((t, n) => {
                    let i = t;
                    for (; null !== i && (!e.sv.has(i.id.client) || i.id.clock >= (e.sv.get(i.id.client) || 0));) i = i.left;
                    null !== i && tv(i, e) && (r[n] = i.content.getContent()[i.length - 1])
                }), r
            },
            ew = t => (t.doc ?? t9(), v.a(t._map.entries(), t => !t[1].deleted));
        class ek extends t6 {}
        class eS extends es {
            constructor() {
                super(), this._prelimContent = [], this._searchMarker = []
            }
            static from(t) {
                let e = new eS;
                return e.push(t), e
            }
            _integrate(t, e) {
                super._integrate(t, e), this.insert(0, this._prelimContent), this._prelimContent = null
            }
            _copy() {
                return new eS
            }
            clone() {
                let t = new eS;
                return t.insert(0, this.toArray().map(t => t instanceof es ? t.clone() : t)), t
            }
            get length() {
                return this.doc ?? t9(), this._length
            }
            _callObserver(t, e) {
                super._callObserver(t, e), ei(this, t, new ek(this, t))
            }
            insert(t, e) {
                null !== this.doc ? tL(this.doc, r => {
                    ed(r, this, t, e)
                }) : this._prelimContent.splice(t, 0, ...e)
            }
            push(t) {
                null !== this.doc ? tL(this.doc, e => {
                    ((t, e, r) => {
                        let n = (e._searchMarker || []).reduce((t, e) => e.index > t.index ? e : t, {
                            index: 0,
                            p: e._start
                        }).p;
                        if (n)
                            for (; n.right;) n = n.right;
                        return eh(t, e, n, r)
                    })(e, this, t)
                }) : this._prelimContent.push(...t)
            }
            unshift(t) {
                this.insert(0, t)
            }
            delete(t, e = 1) {
                null !== this.doc ? tL(this.doc, r => {
                    ef(r, this, t, e)
                }) : this._prelimContent.splice(t, e)
            }
            get(t) {
                return eu(this, t)
            }
            toArray() {
                return ea(this)
            }
            slice(t = 0, e = this.length) {
                return eo(this, t, e)
            }
            toJSON() {
                return this.map(t => t instanceof es ? t.toJSON() : t)
            }
            map(t) {
                return ec(this, t)
            }
            forEach(t) {
                el(this, t)
            } [Symbol.iterator]() {
                let t, e, r;
                return t = this._start, e = null, r = 0, {
                    [Symbol.iterator]() {
                        return this
                    },
                    next: () => {
                        if (null === e) {
                            for (; null !== t && t.deleted;) t = t.right;
                            if (null === t) return {
                                done: !0,
                                value: void 0
                            };
                            e = t.content.getContent(), r = 0, t = t.right
                        }
                        let n = e[r++];
                        return e.length <= r && (e = null), {
                            done: !1,
                            value: n
                        }
                    }
                }
            }
            _write(t) {
                t.writeTypeRef(e6)
            }
        }
        class eE extends t6 {
            constructor(t, e, r) {
                super(t, e), this.keysChanged = r
            }
        }
        class ex extends es {
            constructor(t) {
                super(), this._prelimContent = null, void 0 === t ? this._prelimContent = new Map : this._prelimContent = new Map(t)
            }
            _integrate(t, e) {
                super._integrate(t, e), this._prelimContent.forEach((t, e) => {
                    this.set(e, t)
                }), this._prelimContent = null
            }
            _copy() {
                return new ex
            }
            clone() {
                let t = new ex;
                return this.forEach((e, r) => {
                    t.set(r, e instanceof es ? e.clone() : e)
                }), t
            }
            _callObserver(t, e) {
                ei(this, t, new eE(this, t, e))
            }
            toJSON() {
                this.doc ?? t9();
                let t = {};
                return this._map.forEach((e, r) => {
                    if (!e.deleted) {
                        let n = e.content.getContent()[e.length - 1];
                        t[r] = n instanceof es ? n.toJSON() : n
                    }
                }), t
            }
            get size() {
                return [...ew(this)].length
            }
            keys() {
                return v.b(ew(this), t => t[0])
            }
            values() {
                return v.b(ew(this), t => t[1].content.getContent()[t[1].length - 1])
            }
            entries() {
                return v.b(ew(this), t => [t[0], t[1].content.getContent()[t[1].length - 1]])
            }
            forEach(t) {
                this.doc ?? t9(), this._map.forEach((e, r) => {
                    e.deleted || t(e.content.getContent()[e.length - 1], r, this)
                })
            } [Symbol.iterator]() {
                return this.entries()
            }
            delete(t) {
                null !== this.doc ? tL(this.doc, e => {
                    ep(e, this, t)
                }) : this._prelimContent.delete(t)
            }
            set(t, e) {
                return null !== this.doc ? tL(this.doc, r => {
                    eg(r, this, t, e)
                }) : this._prelimContent.set(t, e), e
            }
            get(t) {
                return em(this, t)
            }
            has(t) {
                return eb(this, t)
            }
            clear() {
                null !== this.doc ? tL(this.doc, t => {
                    this.forEach(function(e, r, n) {
                        ep(t, n, r)
                    })
                }) : this._prelimContent.clear()
            }
            _write(t) {
                t.writeTypeRef(e8)
            }
        }
        let eC = (t, e) => t === e || "object" == typeof t && "object" == typeof e && t && e && w.c(t, e);
        class e_ {
            constructor(t, e, r, n) {
                this.left = t, this.right = e, this.index = r, this.currentAttributes = n
            }
            forward() {
                null === this.right && d.c(), this.right.content.constructor === e0 ? this.right.deleted || eA(this.currentAttributes, this.right.content) : this.right.deleted || (this.index += this.right.length), this.left = this.right, this.right = this.right.right
            }
        }
        let eO = (t, e, r) => {
                for (; null !== e.right && r > 0;) e.right.content.constructor === e0 ? e.right.deleted || eA(e.currentAttributes, e.right.content) : e.right.deleted || (r < e.right.length && tR(t, ts(e.right.id.client, e.right.id.clock + r)), e.index += e.right.length, r -= e.right.length), e.left = e.right, e.right = e.right.right;
                return e
            },
            eR = (t, e, r, n) => {
                let i = new Map,
                    s = n ? er(e, r) : null;
                return s ? eO(t, new e_(s.p.left, s.p, s.index, i), r - s.index) : eO(t, new e_(null, e._start, 0, i), r)
            },
            eD = (t, e, r, n) => {
                for (; null !== r.right && (!0 === r.right.deleted || r.right.content.constructor === e0 && eC(n.get(r.right.content.key), r.right.content.value));) r.right.deleted || n.delete(r.right.content.key), r.forward();
                let i = t.doc,
                    s = i.clientID;
                n.forEach((n, o) => {
                    let a = r.left,
                        l = r.right,
                        c = new rc(ts(s, tE(i.store, s)), a, a && a.lastId, l, l && l.id, e, null, new e0(o, n));
                    c.integrate(t, 0), r.right = c, r.forward()
                })
            },
            eA = (t, e) => {
                let {
                    key: r,
                    value: n
                } = e;
                null === n ? t.delete(r) : t.set(r, n)
            },
            eM = (t, e) => {
                for (; null !== t.right && (t.right.deleted || t.right.content.constructor === e0 && eC(e[t.right.content.key] ?? null, t.right.content.value));) {
                    ;
                    t.forward()
                }
            },
            eT = (t, e, r, n) => {
                let i = t.doc,
                    s = i.clientID,
                    o = new Map;
                for (let a in n) {
                    let l = n[a],
                        c = r.currentAttributes.get(a) ?? null;
                    if (!eC(c, l)) {
                        o.set(a, c);
                        let {
                            left: n,
                            right: u
                        } = r;
                        r.right = new rc(ts(s, tE(i.store, s)), n, n && n.lastId, u, u && u.id, e, null, new e0(a, l)), r.right.integrate(t, 0), r.forward()
                    }
                }
                return o
            },
            eI = (t, e, r, n, i) => {
                r.currentAttributes.forEach((t, e) => {
                    void 0 === i[e] && (i[e] = null)
                });
                let s = t.doc,
                    o = s.clientID;
                eM(r, i);
                let a = eT(t, e, r, i),
                    l = n.constructor === String ? new e4(n) : n instanceof es ? new rn(n) : new eZ(n),
                    {
                        left: c,
                        right: u,
                        index: h
                    } = r;
                e._searchMarker && en(e._searchMarker, r.index, l.getLength()), (u = new rc(ts(o, tE(s.store, o)), c, c && c.lastId, u, u && u.id, e, null, l)).integrate(t, 0), r.right = u, r.index = h, r.forward(), eD(t, e, r, a)
            },
            eP = (t, e, r, n, i) => {
                let s = t.doc,
                    o = s.clientID;
                eM(r, i);
                let a = eT(t, e, r, i);
                for (; null !== r.right && (n > 0 || a.size > 0 && (r.right.deleted || r.right.content.constructor === e0));) {
                    if (!r.right.deleted)
                        if (r.right.content.constructor === e0) {
                            let {
                                key: e,
                                value: s
                            } = r.right.content, o = i[e];
                            if (void 0 !== o) {
                                if (eC(o, s)) a.delete(e);
                                else {
                                    if (0 === n) break;
                                    a.set(e, s)
                                }
                                r.right.delete(t)
                            } else r.currentAttributes.set(e, s)
                        } else n < r.right.length && tR(t, ts(r.right.id.client, r.right.id.clock + n)), n -= r.right.length;
                    r.forward()
                }
                if (n > 0) {
                    let i = "";
                    for (; n > 0; n--) i += "\n";
                    r.right = new rc(ts(o, tE(s.store, o)), r.left, r.left && r.left.lastId, r.right, r.right && r.right.id, e, null, new e4(i)), r.right.integrate(t, 0), r.forward()
                }
                eD(t, e, r, a)
            },
            ej = (t, e, r, n, i) => {
                let s = e,
                    a = o.c();
                for (; s && (!s.countable || s.deleted);) {
                    if (!s.deleted && s.content.constructor === e0) {
                        let t = s.content;
                        a.set(t.key, t)
                    }
                    s = s.right
                }
                let l = 0,
                    c = !1;
                for (; e !== s;) {
                    if (r === e && (c = !0), !e.deleted) {
                        let r = e.content;
                        if (r.constructor === e0) {
                            let {
                                key: s,
                                value: o
                            } = r, u = n.get(s) ?? null;
                            (a.get(s) !== r || u === o) && (e.delete(t), l++, c || (i.get(s) ?? null) !== o || u === o || (null === u ? i.delete(s) : i.set(s, u))), c || e.deleted || eA(i, r)
                        }
                    }
                    e = e.right
                }
                return l
            },
            eq = t => {
                let e = 0;
                return tL(t.doc, r => {
                    let n = t._start,
                        i = t._start,
                        s = o.c(),
                        a = o.b(s);
                    for (; i;) !1 === i.deleted && (i.content.constructor === e0 ? eA(a, i.content) : (e += ej(r, n, i, s, a), s = o.b(a), n = i)), i = i.right
                }), e
            },
            eU = t => {
                let e = new Set,
                    r = t.doc;
                for (let [n, i] of t.afterState.entries()) {
                    let s = t.beforeState.get(n) || 0;
                    i !== s && tA(t, r.store.clients.get(n), s, i, t => {
                        t.deleted || t.content.constructor !== e0 || t.constructor === e$ || e.add(t.parent)
                    })
                }
                tL(r, r => {
                    for (let n of (C(t, t.deleteSet, t => {
                            if (t instanceof e$ || !t.parent._hasFormatting || e.has(t.parent)) return;
                            let n = t.parent;
                            if (t.content.constructor === e0) e.add(n);
                            else {
                                for (var i = t; i && i.right && (i.right.deleted || !i.right.countable);) i = i.right;
                                let e = new Set;
                                for (; i && (i.deleted || !i.countable);) {
                                    if (!i.deleted && i.content.constructor === e0) {
                                        let t = i.content.key;
                                        e.has(t) ? i.delete(r) : e.add(t)
                                    }
                                    i = i.left
                                }
                            }
                        }), e)) eq(n)
                })
            },
            eL = (t, e, r) => {
                let n = r,
                    i = o.b(e.currentAttributes),
                    s = e.right;
                for (; r > 0 && null !== e.right;) {
                    if (!1 === e.right.deleted) switch (e.right.content.constructor) {
                        case rn:
                        case eZ:
                        case e4:
                            r < e.right.length && tR(t, ts(e.right.id.client, e.right.id.clock + r)), r -= e.right.length, e.right.delete(t)
                    }
                    e.forward()
                }
                s && ej(t, s, e.right, i, e.currentAttributes);
                let a = (e.left || e.right).parent;
                return a._searchMarker && en(a._searchMarker, e.index, -n + r), e
            };
        class eN extends t6 {
            constructor(t, e, r) {
                super(t, e), this.childListChanged = !1, this.keysChanged = new Set, r.forEach(t => {
                    null === t ? this.childListChanged = !0 : this.keysChanged.add(t)
                })
            }
            get changes() {
                if (null === this._changes) {
                    let t = {
                        keys: this.keys,
                        delta: this.delta,
                        added: new Set,
                        deleted: new Set
                    };
                    this._changes = t
                }
                return this._changes
            }
            get delta() {
                if (null === this._delta) {
                    let t = this.target.doc,
                        e = [];
                    tL(t, t => {
                        let r = new Map,
                            n = new Map,
                            i = this.target._start,
                            s = null,
                            o = {},
                            a = "",
                            l = 0,
                            c = 0,
                            u = () => {
                                if (null !== s) {
                                    let t = null;
                                    switch (s) {
                                        case "delete":
                                            c > 0 && (t = {
                                                delete: c
                                            }), c = 0;
                                            break;
                                        case "insert":
                                            ("object" == typeof a || a.length > 0) && (t = {
                                                insert: a
                                            }, r.size > 0 && (t.attributes = {}, r.forEach((e, r) => {
                                                null !== e && (t.attributes[r] = e)
                                            }))), a = "";
                                            break;
                                        case "retain":
                                            l > 0 && (t = {
                                                retain: l
                                            }, w.g(o) || (t.attributes = w.a({}, o))), l = 0
                                    }
                                    t && e.push(t), s = null
                                }
                            };
                        for (; null !== i;) {
                            switch (i.content.constructor) {
                                case rn:
                                case eZ:
                                    this.adds(i) ? this.deletes(i) || (u(), s = "insert", a = i.content.getContent()[0], u()) : this.deletes(i) ? ("delete" !== s && (u(), s = "delete"), c += 1) : i.deleted || ("retain" !== s && (u(), s = "retain"), l += 1);
                                    break;
                                case e4:
                                    this.adds(i) ? this.deletes(i) || ("insert" !== s && (u(), s = "insert"), a += i.content.str) : this.deletes(i) ? ("delete" !== s && (u(), s = "delete"), c += i.length) : i.deleted || ("retain" !== s && (u(), s = "retain"), l += i.length);
                                    break;
                                case e0: {
                                    let {
                                        key: e,
                                        value: a
                                    } = i.content;
                                    if (this.adds(i)) this.deletes(i) || (eC(r.get(e) ?? null, a) ? null !== a && i.delete(t) : ("retain" === s && u(), eC(a, n.get(e) ?? null) ? delete o[e] : o[e] = a));
                                    else if (this.deletes(i)) {
                                        n.set(e, a);
                                        let t = r.get(e) ?? null;
                                        eC(t, a) || ("retain" === s && u(), o[e] = t)
                                    } else if (!i.deleted) {
                                        n.set(e, a);
                                        let r = o[e];
                                        void 0 !== r && (eC(r, a) ? null !== r && i.delete(t) : ("retain" === s && u(), null === a ? delete o[e] : o[e] = a))
                                    }
                                    i.deleted || ("insert" === s && u(), eA(r, i.content))
                                }
                            }
                            i = i.right
                        }
                        for (u(); e.length > 0;) {
                            let t = e[e.length - 1];
                            if (void 0 !== t.retain && void 0 === t.attributes) e.pop();
                            else break
                        }
                    }), this._delta = e
                }
                return this._delta
            }
        }
        class eF extends es {
            constructor(t) {
                super(), this._pending = void 0 !== t ? [() => this.insert(0, t)] : [], this._searchMarker = [], this._hasFormatting = !1
            }
            get length() {
                return this.doc ?? t9(), this._length
            }
            _integrate(t, e) {
                super._integrate(t, e);
                try {
                    this._pending.forEach(t => t())
                } catch (t) {
                    console.error(t)
                }
                this._pending = null
            }
            _copy() {
                return new eF
            }
            clone() {
                let t = new eF;
                return t.applyDelta(this.toDelta()), t
            }
            _callObserver(t, e) {
                super._callObserver(t, e);
                let r = new eN(this, t, e);
                ei(this, t, r), !t.local && this._hasFormatting && (t._needFormattingCleanup = !0)
            }
            toString() {
                this.doc ?? t9();
                let t = "",
                    e = this._start;
                for (; null !== e;) !e.deleted && e.countable && e.content.constructor === e4 && (t += e.content.str), e = e.right;
                return t
            }
            toJSON() {
                return this.toString()
            }
            applyDelta(t, {
                sanitize: e = !0
            } = {}) {
                null !== this.doc ? tL(this.doc, r => {
                    let n = new e_(null, this._start, 0, new Map);
                    for (let i = 0; i < t.length; i++) {
                        let s = t[i];
                        if (void 0 !== s.insert) {
                            let o = e || "string" != typeof s.insert || i !== t.length - 1 || null !== n.right || "\n" !== s.insert.slice(-1) ? s.insert : s.insert.slice(0, -1);
                            ("string" != typeof o || o.length > 0) && eI(r, this, n, o, s.attributes || {})
                        } else void 0 !== s.retain ? eP(r, this, n, s.retain, s.attributes || {}) : void 0 !== s.delete && eL(r, n, s.delete)
                    }
                }) : this._pending.push(() => this.applyDelta(t))
            }
            toDelta(t, e, r) {
                this.doc ?? t9();
                let n = [],
                    i = new Map,
                    s = this.doc,
                    o = "",
                    a = this._start;

                function l() {
                    if (o.length > 0) {
                        let t = {},
                            e = !1;
                        i.forEach((r, n) => {
                            e = !0, t[n] = r
                        });
                        let r = {
                            insert: o
                        };
                        e && (r.attributes = t), n.push(r), o = ""
                    }
                }
                let c = () => {
                    for (; null !== a;) {
                        if (tv(a, t) || void 0 !== e && tv(a, e)) switch (a.content.constructor) {
                            case e4: {
                                let n = i.get("ychange");
                                void 0 === t || tv(a, t) ? void 0 === e || tv(a, e) ? void 0 !== n && (l(), i.delete("ychange")) : (void 0 === n || n.user !== a.id.client || "added" !== n.type) && (l(), i.set("ychange", r ? r("added", a.id) : {
                                    type: "added"
                                })) : (void 0 === n || n.user !== a.id.client || "removed" !== n.type) && (l(), i.set("ychange", r ? r("removed", a.id) : {
                                    type: "removed"
                                })), o += a.content.str;
                                break
                            }
                            case rn:
                            case eZ: {
                                l();
                                let t = {
                                    insert: a.content.getContent()[0]
                                };
                                if (i.size > 0) {
                                    let e = {};
                                    t.attributes = e, i.forEach((t, r) => {
                                        e[r] = t
                                    })
                                }
                                n.push(t);
                                break
                            }
                            case e0:
                                tv(a, t) && (l(), eA(i, a.content))
                        }
                        a = a.right
                    }
                    l()
                };
                return t || e ? tL(s, r => {
                    t && tw(r, t), e && tw(r, e), c()
                }, "cleanup") : c(), n
            }
            insert(t, e, r) {
                if (e.length <= 0) return;
                let n = this.doc;
                null !== n ? tL(n, n => {
                    let i = eR(n, this, t, !r);
                    r || (r = {}, i.currentAttributes.forEach((t, e) => {
                        r[e] = t
                    })), eI(n, this, i, e, r)
                }) : this._pending.push(() => this.insert(t, e, r))
            }
            insertEmbed(t, e, r) {
                let n = this.doc;
                null !== n ? tL(n, n => {
                    let i = eR(n, this, t, !r);
                    eI(n, this, i, e, r || {})
                }) : this._pending.push(() => this.insertEmbed(t, e, r || {}))
            }
            delete(t, e) {
                if (0 === e) return;
                let r = this.doc;
                null !== r ? tL(r, r => {
                    eL(r, eR(r, this, t, !0), e)
                }) : this._pending.push(() => this.delete(t, e))
            }
            format(t, e, r) {
                if (0 === e) return;
                let n = this.doc;
                null !== n ? tL(n, n => {
                    let i = eR(n, this, t, !1);
                    null !== i.right && eP(n, this, i, e, r)
                }) : this._pending.push(() => this.format(t, e, r))
            }
            removeAttribute(t) {
                null !== this.doc ? tL(this.doc, e => {
                    ep(e, this, t)
                }) : this._pending.push(() => this.removeAttribute(t))
            }
            setAttribute(t, e) {
                null !== this.doc ? tL(this.doc, r => {
                    eg(r, this, t, e)
                }) : this._pending.push(() => this.setAttribute(t, e))
            }
            getAttribute(t) {
                return em(this, t)
            }
            getAttributes() {
                return ey(this)
            }
            _write(t) {
                t.writeTypeRef(e9)
            }
        }
        class eQ {
            constructor(t, e = () => !0) {
                this._filter = e, this._root = t, this._currentNode = t._start, this._firstCall = !0, t.doc ?? t9()
            } [Symbol.iterator]() {
                return this
            }
            next() {
                let t = this._currentNode,
                    e = t && t.content && t.content.type;
                if (null !== t && (!this._firstCall || t.deleted || !this._filter(e)))
                    do
                        if (e = t.content.type, t.deleted || e.constructor !== eB && e.constructor !== ez || null === e._start)
                            for (; null !== t;) {
                                let e = t.next;
                                if (null !== e) {
                                    t = e;
                                    break
                                }
                                t = t.parent === this._root ? null : t.parent._item
                            } else t = e._start; while (null !== t && (t.deleted || !this._filter(t.content.type))) return (this._firstCall = !1, null === t) ? {
                        value: void 0,
                        done: !0
                    } : (this._currentNode = t, {
                        value: t.content.type,
                        done: !1
                    })
            }
        }
        class ez extends es {
            constructor() {
                super(), this._prelimContent = []
            }
            get firstChild() {
                let t = this._first;
                return t ? t.content.getContent()[0] : null
            }
            _integrate(t, e) {
                super._integrate(t, e), this.insert(0, this._prelimContent), this._prelimContent = null
            }
            _copy() {
                return new ez
            }
            clone() {
                let t = new ez;
                return t.insert(0, this.toArray().map(t => t instanceof es ? t.clone() : t)), t
            }
            get length() {
                return this.doc ?? t9(), null === this._prelimContent ? this._length : this._prelimContent.length
            }
            createTreeWalker(t) {
                return new eQ(this, t)
            }
            querySelector(t) {
                t = t.toUpperCase();
                let e = new eQ(this, e => e.nodeName && e.nodeName.toUpperCase() === t).next();
                return e.done ? null : e.value
            }
            querySelectorAll(t) {
                return t = t.toUpperCase(), i.c(new eQ(this, e => e.nodeName && e.nodeName.toUpperCase() === t))
            }
            _callObserver(t, e) {
                ei(this, t, new eH(this, e, t))
            }
            toString() {
                return ec(this, t => t.toString()).join("")
            }
            toJSON() {
                return this.toString()
            }
            toDOM(t = document, e = {}, r) {
                let n = t.createDocumentFragment();
                return void 0 !== r && r._createAssociation(n, this), el(this, i => {
                    n.insertBefore(i.toDOM(t, e, r), null)
                }), n
            }
            insert(t, e) {
                null !== this.doc ? tL(this.doc, r => {
                    ed(r, this, t, e)
                }) : this._prelimContent.splice(t, 0, ...e)
            }
            insertAfter(t, e) {
                if (null !== this.doc) tL(this.doc, r => {
                    eh(r, this, t && t instanceof es ? t._item : t, e)
                });
                else {
                    let r = this._prelimContent,
                        n = null === t ? 0 : r.findIndex(e => e === t) + 1;
                    if (0 === n && null !== t) throw d.a("Reference item not found");
                    r.splice(n, 0, ...e)
                }
            }
            delete(t, e = 1) {
                null !== this.doc ? tL(this.doc, r => {
                    ef(r, this, t, e)
                }) : this._prelimContent.splice(t, e)
            }
            toArray() {
                return ea(this)
            }
            push(t) {
                this.insert(this.length, t)
            }
            unshift(t) {
                this.insert(0, t)
            }
            get(t) {
                return eu(this, t)
            }
            slice(t = 0, e = this.length) {
                return eo(this, t, e)
            }
            forEach(t) {
                el(this, t)
            }
            _write(t) {
                t.writeTypeRef(rt)
            }
        }
        class eB extends ez {
            constructor(t = "UNDEFINED") {
                super(), this.nodeName = t, this._prelimAttrs = new Map
            }
            get nextSibling() {
                let t = this._item ? this._item.next : null;
                return t ? t.content.type : null
            }
            get prevSibling() {
                let t = this._item ? this._item.prev : null;
                return t ? t.content.type : null
            }
            _integrate(t, e) {
                super._integrate(t, e), this._prelimAttrs.forEach((t, e) => {
                    this.setAttribute(e, t)
                }), this._prelimAttrs = null
            }
            _copy() {
                return new eB(this.nodeName)
            }
            clone() {
                let t = new eB(this.nodeName),
                    e = this.getAttributes();
                return w.e(e, (e, r) => {
                    t.setAttribute(r, e)
                }), t.insert(0, this.toArray().map(t => t instanceof es ? t.clone() : t)), t
            }
            toString() {
                let t = this.getAttributes(),
                    e = [],
                    r = [];
                for (let e in t) r.push(e);
                r.sort();
                let n = r.length;
                for (let i = 0; i < n; i++) {
                    let n = r[i];
                    e.push(n + '="' + t[n] + '"')
                }
                let i = this.nodeName.toLocaleLowerCase(),
                    s = e.length > 0 ? " " + e.join(" ") : "";
                return `<${i}${s}>${super.toString()}</${i}>`
            }
            removeAttribute(t) {
                null !== this.doc ? tL(this.doc, e => {
                    ep(e, this, t)
                }) : this._prelimAttrs.delete(t)
            }
            setAttribute(t, e) {
                null !== this.doc ? tL(this.doc, r => {
                    eg(r, this, t, e)
                }) : this._prelimAttrs.set(t, e)
            }
            getAttribute(t) {
                return em(this, t)
            }
            hasAttribute(t) {
                return eb(this, t)
            }
            getAttributes(t) {
                return t ? ev(this, t) : ey(this)
            }
            toDOM(t = document, e = {}, r) {
                let n = t.createElement(this.nodeName),
                    i = this.getAttributes();
                for (let t in i) {
                    let e = i[t];
                    "string" == typeof e && n.setAttribute(t, e)
                }
                return el(this, i => {
                    n.appendChild(i.toDOM(t, e, r))
                }), void 0 !== r && r._createAssociation(n, this), n
            }
            _write(t) {
                t.writeTypeRef(e7), t.writeKey(this.nodeName)
            }
        }
        class eH extends t6 {
            constructor(t, e, r) {
                super(t, r), this.childListChanged = !1, this.attributesChanged = new Set, e.forEach(t => {
                    null === t ? this.childListChanged = !0 : this.attributesChanged.add(t)
                })
            }
        }
        class eV extends ex {
            constructor(t) {
                super(), this.hookName = t
            }
            _copy() {
                return new eV(this.hookName)
            }
            clone() {
                let t = new eV(this.hookName);
                return this.forEach((e, r) => {
                    t.set(r, e)
                }), t
            }
            toDOM(t = document, e = {}, r) {
                let n, i = e[this.hookName];
                return (n = void 0 !== i ? i.createDom(this) : document.createElement(this.hookName)).setAttribute("data-yjs-hook", this.hookName), void 0 !== r && r._createAssociation(n, this), n
            }
            _write(t) {
                t.writeTypeRef(re), t.writeKey(this.hookName)
            }
        }
        class eK extends eF {
            get nextSibling() {
                let t = this._item ? this._item.next : null;
                return t ? t.content.type : null
            }
            get prevSibling() {
                let t = this._item ? this._item.prev : null;
                return t ? t.content.type : null
            }
            _copy() {
                return new eK
            }
            clone() {
                let t = new eK;
                return t.applyDelta(this.toDelta()), t
            }
            toDOM(t = document, e, r) {
                let n = t.createTextNode(this.toString());
                return void 0 !== r && r._createAssociation(n, this), n
            }
            toString() {
                return this.toDelta().map(t => {
                    let e = [];
                    for (let r in t.attributes) {
                        let n = [];
                        for (let e in t.attributes[r]) n.push({
                            key: e,
                            value: t.attributes[r][e]
                        });
                        n.sort((t, e) => t.key < e.key ? -1 : 1), e.push({
                            nodeName: r,
                            attrs: n
                        })
                    }
                    e.sort((t, e) => t.nodeName < e.nodeName ? -1 : 1);
                    let r = "";
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t];
                        r += `<${n.nodeName}`;
                        for (let t = 0; t < n.attrs.length; t++) {
                            let e = n.attrs[t];
                            r += ` ${e.key}="${e.value}"`
                        }
                        r += ">"
                    }
                    r += t.insert;
                    for (let t = e.length - 1; t >= 0; t--) r += `</${e[t].nodeName}>`;
                    return r
                }).join("")
            }
            toJSON() {
                return this.toString()
            }
            _write(t) {
                t.writeTypeRef(rr)
            }
        }
        class eY {
            constructor(t, e) {
                this.id = t, this.length = e
            }
            get deleted() {
                throw d.b()
            }
            mergeWith(t) {
                return !1
            }
            write(t, e, r) {
                throw d.b()
            }
            integrate(t, e) {
                throw d.b()
            }
        }
        class e$ extends eY {
            get deleted() {
                return !0
            }
            delete() {}
            mergeWith(t) {
                return this.constructor === t.constructor && (this.length += t.length, !0)
            }
            integrate(t, e) {
                e > 0 && (this.id.clock += e, this.length -= e), tx(t.doc.store, this)
            }
            write(t, e) {
                t.writeInfo(0), t.writeLen(this.length - e)
            }
            getMissing(t, e) {
                return null
            }
        }
        class eW {
            constructor(t) {
                this.content = t
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.content]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new eW(this.content)
            }
            splice(t) {
                throw d.b()
            }
            mergeWith(t) {
                return !1
            }
            integrate(t, e) {}
            delete(t) {}
            gc(t) {}
            write(t, e) {
                t.writeBuf(this.content)
            }
            getRef() {
                return 3
            }
        }
        class eJ {
            constructor(t) {
                this.len = t
            }
            getLength() {
                return this.len
            }
            getContent() {
                return []
            }
            isCountable() {
                return !1
            }
            copy() {
                return new eJ(this.len)
            }
            splice(t) {
                let e = new eJ(this.len - t);
                return this.len = t, e
            }
            mergeWith(t) {
                return this.len += t.len, !0
            }
            integrate(t, e) {
                D(t.deleteSet, e.id.client, e.id.clock, this.len), e.markDeleted()
            }
            delete(t) {}
            gc(t) {}
            write(t, e) {
                t.writeLen(this.len - e)
            }
            getRef() {
                return 1
            }
        }
        let eG = (t, e) => new U({
            guid: t,
            ...e,
            shouldLoad: e.shouldLoad || e.autoLoad || !1
        });
        class eX {
            constructor(t) {
                t._item && console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."), this.doc = t;
                let e = {};
                this.opts = e, t.gc || (e.gc = !1), t.autoLoad && (e.autoLoad = !0), null !== t.meta && (e.meta = t.meta)
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.doc]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new eX(eG(this.doc.guid, this.opts))
            }
            splice(t) {
                throw d.b()
            }
            mergeWith(t) {
                return !1
            }
            integrate(t, e) {
                this.doc._item = e, t.subdocsAdded.add(this.doc), this.doc.shouldLoad && t.subdocsLoaded.add(this.doc)
            }
            delete(t) {
                t.subdocsAdded.has(this.doc) ? t.subdocsAdded.delete(this.doc) : t.subdocsRemoved.add(this.doc)
            }
            gc(t) {}
            write(t, e) {
                t.writeString(this.doc.guid), t.writeAny(this.opts)
            }
            getRef() {
                return 9
            }
        }
        class eZ {
            constructor(t) {
                this.embed = t
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.embed]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new eZ(this.embed)
            }
            splice(t) {
                throw d.b()
            }
            mergeWith(t) {
                return !1
            }
            integrate(t, e) {}
            delete(t) {}
            gc(t) {}
            write(t, e) {
                t.writeJSON(this.embed)
            }
            getRef() {
                return 5
            }
        }
        class e0 {
            constructor(t, e) {
                this.key = t, this.value = e
            }
            getLength() {
                return 1
            }
            getContent() {
                return []
            }
            isCountable() {
                return !1
            }
            copy() {
                return new e0(this.key, this.value)
            }
            splice(t) {
                throw d.b()
            }
            mergeWith(t) {
                return !1
            }
            integrate(t, e) {
                let r = e.parent;
                r._searchMarker = null, r._hasFormatting = !0
            }
            delete(t) {}
            gc(t) {}
            write(t, e) {
                t.writeKey(this.key), t.writeJSON(this.value)
            }
            getRef() {
                return 6
            }
        }
        class e1 {
            constructor(t) {
                this.arr = t
            }
            getLength() {
                return this.arr.length
            }
            getContent() {
                return this.arr
            }
            isCountable() {
                return !0
            }
            copy() {
                return new e1(this.arr)
            }
            splice(t) {
                let e = new e1(this.arr.slice(t));
                return this.arr = this.arr.slice(0, t), e
            }
            mergeWith(t) {
                return this.arr = this.arr.concat(t.arr), !0
            }
            integrate(t, e) {}
            delete(t) {}
            gc(t) {}
            write(t, e) {
                let r = this.arr.length;
                t.writeLen(r - e);
                for (let n = e; n < r; n++) {
                    let e = this.arr[n];
                    t.writeString(void 0 === e ? "undefined" : JSON.stringify(e))
                }
            }
            getRef() {
                return 2
            }
        }
        let e3 = "development" === k.a("node_env");
        class e2 {
            constructor(t) {
                this.arr = t, e3 && w.b(t)
            }
            getLength() {
                return this.arr.length
            }
            getContent() {
                return this.arr
            }
            isCountable() {
                return !0
            }
            copy() {
                return new e2(this.arr)
            }
            splice(t) {
                let e = new e2(this.arr.slice(t));
                return this.arr = this.arr.slice(0, t), e
            }
            mergeWith(t) {
                return this.arr = this.arr.concat(t.arr), !0
            }
            integrate(t, e) {}
            delete(t) {}
            gc(t) {}
            write(t, e) {
                let r = this.arr.length;
                t.writeLen(r - e);
                for (let n = e; n < r; n++) {
                    let e = this.arr[n];
                    t.writeAny(e)
                }
            }
            getRef() {
                return 8
            }
        }
        class e4 {
            constructor(t) {
                this.str = t
            }
            getLength() {
                return this.str.length
            }
            getContent() {
                return this.str.split("")
            }
            isCountable() {
                return !0
            }
            copy() {
                return new e4(this.str)
            }
            splice(t) {
                let e = new e4(this.str.slice(t));
                this.str = this.str.slice(0, t);
                let r = this.str.charCodeAt(t - 1);
                return r >= 55296 && r <= 56319 && (this.str = this.str.slice(0, t - 1) + "�", e.str = "�" + e.str.slice(1)), e
            }
            mergeWith(t) {
                return this.str += t.str, !0
            }
            integrate(t, e) {}
            delete(t) {}
            gc(t) {}
            write(t, e) {
                t.writeString(0 === e ? this.str : this.str.slice(e))
            }
            getRef() {
                return 4
            }
        }
        let e5 = [t => new eS, t => new ex, t => new eF, t => new eB(t.readKey()), t => new ez, t => new eV(t.readKey()), t => new eK],
            e6 = 0,
            e8 = 1,
            e9 = 2,
            e7 = 3,
            rt = 4,
            re = 5,
            rr = 6;
        class rn {
            constructor(t) {
                this.type = t
            }
            getLength() {
                return 1
            }
            getContent() {
                return [this.type]
            }
            isCountable() {
                return !0
            }
            copy() {
                return new rn(this.type._copy())
            }
            splice(t) {
                throw d.b()
            }
            mergeWith(t) {
                return !1
            }
            integrate(t, e) {
                this.type._integrate(t.doc, e)
            }
            delete(t) {
                let e = this.type._start;
                for (; null !== e;) e.deleted ? e.id.clock < (t.beforeState.get(e.id.client) || 0) && t._mergeStructs.push(e) : e.delete(t), e = e.right;
                this.type._map.forEach(e => {
                    e.deleted ? e.id.clock < (t.beforeState.get(e.id.client) || 0) && t._mergeStructs.push(e) : e.delete(t)
                }), t.changed.delete(this.type)
            }
            gc(t) {
                let e = this.type._start;
                for (; null !== e;) e.gc(t, !0), e = e.right;
                this.type._start = null, this.type._map.forEach(e => {
                    for (; null !== e;) e.gc(t, !0), e = e.left
                }), this.type._map = new Map
            }
            write(t, e) {
                this.type._write(t)
            }
            getRef() {
                return 7
            }
        }
        let ri = (t, e) => {
                let r, n = e,
                    i = 0;
                do i > 0 && (n = ts(n.client, n.clock + i)), r = t_(t, n), i = n.clock - r.id.clock, n = r.redone; while (null !== n && r instanceof rc) return {
                    item: r,
                    diff: i
                }
            },
            rs = (t, e) => {
                for (; null !== t && t.keep !== e;) t.keep = e, t = t.parent._item
            },
            ro = (t, e, r) => {
                let {
                    client: n,
                    clock: i
                } = e.id, s = new rc(ts(n, i + r), e, ts(n, i + r - 1), e.right, e.rightOrigin, e.parent, e.parentSub, e.content.splice(r));
                return e.deleted && s.markDeleted(), e.keep && (s.keep = !0), null !== e.redone && (s.redone = ts(e.redone.client, e.redone.clock + r)), e.right = s, null !== s.right && (s.right.left = s), t._mergeStructs.push(s), null !== s.parentSub && null === s.right && s.parent._map.set(s.parentSub, s), e.length = r, s
            },
            ra = (t, e) => i.f(t, t => _(t.deletions, e)),
            rl = (t, e, r, n, i, s) => {
                let o, a = t.doc,
                    l = a.store,
                    c = a.clientID,
                    u = e.redone;
                if (null !== u) return tR(t, u);
                let h = e.parent._item,
                    d = null;
                if (null !== h && !0 === h.deleted) {
                    if (null === h.redone && (!r.has(h) || null === rl(t, h, r, n, i, s))) return null;
                    for (; null !== h.redone;) h = tR(t, h.redone)
                }
                let f = null === h ? e.parent : h.content.type;
                if (null === e.parentSub) {
                    for (d = e.left, o = e; null !== d;) {
                        let e = d;
                        for (; null !== e && e.parent._item !== h;) e = null === e.redone ? null : tR(t, e.redone);
                        if (null !== e && e.parent._item === h) {
                            d = e;
                            break
                        }
                        d = d.left
                    }
                    for (; null !== o;) {
                        let e = o;
                        for (; null !== e && e.parent._item !== h;) e = null === e.redone ? null : tR(t, e.redone);
                        if (null !== e && e.parent._item === h) {
                            o = e;
                            break
                        }
                        o = o.right
                    }
                } else {
                    if (o = null, e.right && !i) {
                        for (d = e; null !== d && null !== d.right && (d.right.redone || _(n, d.right.id) || ra(s.undoStack, d.right.id) || ra(s.redoStack, d.right.id));)
                            for (d = d.right; d.redone;) d = tR(t, d.redone);
                        if (d && null !== d.right) return null
                    } else d = f._map.get(e.parentSub) || null;
                    null !== d && d.parent._item !== h && (d = f._map.get(e.parentSub) || null)
                }
                let p = tE(l, c),
                    g = ts(c, p),
                    m = new rc(g, d, d && d.lastId, o, o && o.id, f, e.parentSub, e.content.copy());
                return e.redone = g, rs(m, !0), m.integrate(t, 0), m
            };
        class rc extends eY {
            constructor(t, e, r, n, i, s, o, a) {
                super(t, a.getLength()), this.origin = r, this.left = e, this.right = n, this.rightOrigin = i, this.parent = s, this.parentSub = o, this.redone = null, this.content = a, this.info = 2 * !!this.content.isCountable()
            }
            set marker(t) {
                (8 & this.info) > 0 !== t && (this.info ^= 8)
            }
            get marker() {
                return (8 & this.info) > 0
            }
            get keep() {
                return (1 & this.info) > 0
            }
            set keep(t) {
                this.keep !== t && (this.info ^= 1)
            }
            get countable() {
                return (2 & this.info) > 0
            }
            get deleted() {
                return (4 & this.info) > 0
            }
            set deleted(t) {
                this.deleted !== t && (this.info ^= 4)
            }
            markDeleted() {
                this.info |= 4
            }
            getMissing(t, e) {
                if (this.origin && this.origin.client !== this.id.client && this.origin.clock >= tE(e, this.origin.client)) return this.origin.client;
                if (this.rightOrigin && this.rightOrigin.client !== this.id.client && this.rightOrigin.clock >= tE(e, this.rightOrigin.client)) return this.rightOrigin.client;
                if (this.parent && this.parent.constructor === tn && this.id.client !== this.parent.client && this.parent.clock >= tE(e, this.parent.client)) return this.parent.client;
                if (this.origin && (this.left = tD(t, e, this.origin), this.origin = this.left.lastId), this.rightOrigin && (this.right = tR(t, this.rightOrigin), this.rightOrigin = this.right.id), this.left && this.left.constructor === e$ || this.right && this.right.constructor === e$) this.parent = null;
                else if (this.parent) {
                    if (this.parent.constructor === tn) {
                        let t = t_(e, this.parent);
                        t.constructor === e$ ? this.parent = null : this.parent = t.content.type
                    }
                } else this.left && this.left.constructor === rc ? (this.parent = this.left.parent, this.parentSub = this.left.parentSub) : this.right && this.right.constructor === rc && (this.parent = this.right.parent, this.parentSub = this.right.parentSub);
                return null
            }
            integrate(t, e) {
                if (e > 0 && (this.id.clock += e, this.left = tD(t, t.doc.store, ts(this.id.client, this.id.clock - 1)), this.origin = this.left.lastId, this.content = this.content.splice(e), this.length -= e), this.parent) {
                    if (!this.left && (!this.right || null !== this.right.left) || this.left && this.left.right !== this.right) {
                        let e, r = this.left;
                        if (null !== r) e = r.right;
                        else if (null !== this.parentSub)
                            for (e = this.parent._map.get(this.parentSub) || null; null !== e && null !== e.left;) e = e.left;
                        else e = this.parent._start;
                        let n = new Set,
                            i = new Set;
                        for (; null !== e && e !== this.right;) {
                            if (i.add(e), n.add(e), ti(this.origin, e.origin)) {
                                if (e.id.client < this.id.client) r = e, n.clear();
                                else if (ti(this.rightOrigin, e.rightOrigin)) break
                            } else if (null !== e.origin && i.has(t_(t.doc.store, e.origin))) n.has(t_(t.doc.store, e.origin)) || (r = e, n.clear());
                            else break;
                            e = e.right
                        }
                        this.left = r
                    }
                    if (null !== this.left) {
                        let t = this.left.right;
                        this.right = t, this.left.right = this
                    } else {
                        let t;
                        if (null !== this.parentSub)
                            for (t = this.parent._map.get(this.parentSub) || null; null !== t && null !== t.left;) t = t.left;
                        else t = this.parent._start, this.parent._start = this;
                        this.right = t
                    }
                    null !== this.right ? this.right.left = this : null !== this.parentSub && (this.parent._map.set(this.parentSub, this), null !== this.left && this.left.delete(t)), null === this.parentSub && this.countable && !this.deleted && (this.parent._length += this.length), tx(t.doc.store, this), this.content.integrate(t, this), tI(t, this.parent, this.parentSub), (null !== this.parent._item && this.parent._item.deleted || null !== this.parentSub && null !== this.right) && this.delete(t)
                } else new e$(this.id, this.length).integrate(t, 0)
            }
            get next() {
                let t = this.right;
                for (; null !== t && t.deleted;) t = t.right;
                return t
            }
            get prev() {
                let t = this.left;
                for (; null !== t && t.deleted;) t = t.left;
                return t
            }
            get lastId() {
                return 1 === this.length ? this.id : ts(this.id.client, this.id.clock + this.length - 1)
            }
            mergeWith(t) {
                if (this.constructor === t.constructor && ti(t.origin, this.lastId) && this.right === t && ti(this.rightOrigin, t.rightOrigin) && this.id.client === t.id.client && this.id.clock + this.length === t.id.clock && this.deleted === t.deleted && null === this.redone && null === t.redone && this.content.constructor === t.content.constructor && this.content.mergeWith(t.content)) {
                    let e = this.parent._searchMarker;
                    return e && e.forEach(e => {
                        e.p === t && (e.p = this, !this.deleted && this.countable && (e.index -= this.length))
                    }), t.keep && (this.keep = !0), this.right = t.right, null !== this.right && (this.right.left = this), this.length += t.length, !0
                }
                return !1
            }
            delete(t) {
                if (!this.deleted) {
                    let e = this.parent;
                    this.countable && null === this.parentSub && (e._length -= this.length), this.markDeleted(), D(t.deleteSet, this.id.client, this.id.clock, this.length), tI(t, e, this.parentSub), this.content.delete(t)
                }
            }
            gc(t, e) {
                if (!this.deleted) throw d.c();
                if (this.content.gc(t), e) {
                    var r;
                    let e;
                    r = new e$(this.id, this.length), (e = t.clients.get(this.id.client))[tC(e, this.id.clock)] = r
                } else this.content = new eJ(this.length)
            }
            write(t, e) {
                let r = e > 0 ? ts(this.id.client, this.id.clock + e - 1) : this.origin,
                    n = this.rightOrigin,
                    i = this.parentSub,
                    s = 31 & this.content.getRef() | 128 * (null !== r) | 64 * (null !== n) | 32 * (null !== i);
                if (t.writeInfo(s), null !== r && t.writeLeftID(r), null !== n && t.writeRightID(n), null === r && null === n) {
                    let e = this.parent;
                    if (void 0 !== e._item) {
                        let r = e._item;
                        if (null === r) {
                            let r = tl(e);
                            t.writeParentInfo(!0), t.writeString(r)
                        } else t.writeParentInfo(!1), t.writeLeftID(r.id)
                    } else e.constructor === String ? (t.writeParentInfo(!0), t.writeString(e)) : e.constructor === tn ? (t.writeParentInfo(!1), t.writeLeftID(e)) : d.c();
                    null !== i && t.writeString(i)
                }
                this.content.write(t, e)
            }
        }
        let ru = (t, e) => rh[31 & e](t),
            rh = [() => {
                d.c()
            }, t => new eJ(t.readLen()), t => {
                let e = t.readLen(),
                    r = [];
                for (let n = 0; n < e; n++) {
                    let e = t.readString();
                    "undefined" === e ? r.push(void 0) : r.push(JSON.parse(e))
                }
                return new e1(r)
            }, t => new eW(t.readBuf()), t => new e4(t.readString()), t => new eZ(t.readJSON()), t => new e0(t.readKey(), t.readJSON()), t => new rn(e5[t.readTypeRef()](t)), t => {
                let e = t.readLen(),
                    r = [];
                for (let n = 0; n < e; n++) r.push(t.readAny());
                return new e2(r)
            }, t => new eX(eG(t.readString(), t.readAny())), () => {
                d.c()
            }];
        class rd extends eY {
            get deleted() {
                return !0
            }
            delete() {}
            mergeWith(t) {
                return this.constructor === t.constructor && (this.length += t.length, !0)
            }
            integrate(t, e) {
                d.c()
            }
            write(t, e) {
                t.writeInfo(10), a.n(t.restEncoder, this.length - e)
            }
            getMissing(t, e) {
                return null
            }
        }
        let rf = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof global ? global : {},
            rp = "__ $YJS$ __";
        !0 === rf[rp] && console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438"), rf[rp] = !0, r.d(e, {
            AbsolutePosition: () => td,
            AbstractConnector: () => S,
            AbstractStruct: () => eY,
            AbstractType: () => es,
            Array: () => eS,
            ContentAny: () => e2,
            ContentBinary: () => eW,
            ContentDeleted: () => eJ,
            ContentDoc: () => eX,
            ContentEmbed: () => eZ,
            ContentFormat: () => e0,
            ContentJSON: () => e1,
            ContentString: () => e4,
            ContentType: () => rn,
            Doc: () => U,
            GC: () => e$,
            ID: () => tn,
            Item: () => rc,
            Map: () => ex,
            PermanentUserData: () => tu,
            RelativePosition: () => th,
            Skip: () => rd,
            Snapshot: () => tp,
            Text: () => eF,
            Transaction: () => tM,
            UndoManager: () => tz,
            UpdateDecoderV1: () => N,
            UpdateDecoderV2: () => Q,
            UpdateEncoderV1: () => B,
            UpdateEncoderV2: () => V,
            XmlElement: () => eB,
            XmlFragment: () => ez,
            XmlHook: () => eV,
            XmlText: () => eK,
            YArrayEvent: () => ek,
            YEvent: () => t6,
            YMapEvent: () => eE,
            YTextEvent: () => eN,
            YXmlEvent: () => eH
        }, {
            applyUpdate: (t, e, r) => $(t, e, r, N),
            applyUpdateV2: $,
            cleanupYTextFormatting: eq,
            compareIDs: ti,
            compareRelativePositions: (t, e) => t === e || null !== t && null !== e && t.tname === e.tname && ti(t.item, e.item) && ti(t.type, e.type) && t.assoc === e.assoc,
            convertUpdateFormatV1ToV2: t => t3(t, f.c, N, V),
            convertUpdateFormatV2ToV1: t4,
            createAbsolutePositionFromRelativePosition: (t, e, r = !0) => {
                let n = e.store,
                    i = t.item,
                    s = t.type,
                    o = t.tname,
                    a = t.assoc,
                    l = null,
                    c = 0;
                if (null !== i) {
                    let t, e;
                    if (tE(n, i.client) <= i.clock) return null;
                    let s = r ? ri(n, i) : (t = t_(n, i), e = i.clock - t.id.clock, {
                            item: t,
                            diff: e
                        }),
                        o = s.item;
                    if (!(o instanceof rc)) return null;
                    if (null === (l = o.parent)._item || !l._item.deleted) {
                        c = o.deleted || !o.countable ? 0 : s.diff + (a >= 0 ? 0 : 1);
                        let t = o.left;
                        for (; null !== t;) !t.deleted && t.countable && (c += t.length), t = t.left
                    }
                } else {
                    if (null !== o) l = e.get(o);
                    else if (null !== s) {
                        if (tE(n, s.client) <= s.clock) return null;
                        let {
                            item: t
                        } = r ? ri(n, s) : {
                            item: t_(n, s)
                        };
                        if (!(t instanceof rc) || !(t.content instanceof rn)) return null;
                        l = t.content.type
                    } else throw d.c();
                    c = a >= 0 ? l._length : 0
                }
                return ((t, e, r = 0) => new td(t, e, r))(l, c, t.assoc)
            },
            createDeleteSet: A,
            createDeleteSetFromStructStore: M,
            createDocFromSnapshot: (t, e, r = new U) => {
                if (t.gc) throw Error("Garbage-collection must be disabled in `originDoc`!");
                let {
                    sv: n,
                    ds: i
                } = e, s = new V;
                return t.transact(e => {
                    let r = 0;
                    for (let [i, o] of(n.forEach(t => {
                            t > 0 && r++
                        }), a.n(s.restEncoder, r), n)) {
                        if (0 === o) continue;
                        o < tE(t.store, i) && tR(e, ts(i, o));
                        let r = t.store.clients.get(i) || [],
                            n = tC(r, o - 1);
                        a.n(s.restEncoder, n + 1), s.writeClient(i), a.n(s.restEncoder, 0);
                        for (let t = 0; t <= n; t++) r[t].write(s, 0)
                    }
                    T(s, i)
                }), $(r, s.toUint8Array(), "snapshot"), r
            },
            createID: ts,
            createRelativePositionFromJSON: t => new th(null == t.type ? null : ts(t.type.client, t.type.clock), t.tname ?? null, null == t.item ? null : ts(t.item.client, t.item.clock), null == t.assoc ? 0 : t.assoc),
            createRelativePositionFromTypeIndex: (t, e, r = 0) => {
                let n = t._start;
                if (r < 0) {
                    if (0 === e) return tf(t, null, r);
                    e--
                }
                for (; null !== n;) {
                    if (!n.deleted && n.countable) {
                        if (n.length > e) return tf(t, ts(n.id.client, n.id.clock + e), r);
                        e -= n.length
                    }
                    if (null === n.right && r < 0) return tf(t, n.lastId, r);
                    n = n.right
                }
                return tf(t, null, r)
            },
            createSnapshot: ty,
            decodeRelativePosition: t => (t => {
                let e = null,
                    r = null,
                    n = null;
                switch (l.k(t)) {
                    case 0:
                        n = ta(t);
                        break;
                    case 1:
                        r = l.j(t);
                        break;
                    case 2:
                        e = ta(t)
                }
                return new th(e, r, n, l.f(t) ? l.i(t) : 0)
            })(l.e(t)),
            decodeSnapshot: t => tm(t, new L(l.e(t))),
            decodeSnapshotV2: tm,
            decodeStateVector: G,
            decodeUpdate: t => tV(t, N),
            decodeUpdateV2: tV,
            diffUpdate: (t, e) => tX(t, e, N, B),
            diffUpdateV2: tX,
            emptySnapshot: tb,
            encodeRelativePosition: t => {
                let e = a.e();
                return ((t, e) => {
                    let {
                        type: r,
                        tname: n,
                        item: i,
                        assoc: s
                    } = e;
                    if (null !== i) a.n(t, 0), to(t, i);
                    else if (null !== n) a.j(t, 1), a.m(t, n);
                    else if (null !== r) a.j(t, 2), to(t, r);
                    else throw d.c();
                    return a.l(t, s)
                })(e, t), a.g(e)
            },
            encodeSnapshot: t => tg(t, new z),
            encodeSnapshotV2: tg,
            encodeStateAsUpdate: (t, e) => W(t, e, new B),
            encodeStateAsUpdateV2: W,
            encodeStateVector: t => ((t, e = new H) => (t instanceof Map ? X(e, t) : X(e, tS(t.store)), e.toUint8Array()))(t, new z),
            encodeStateVectorFromUpdate: t => t$(t, z, N),
            encodeStateVectorFromUpdateV2: t$,
            equalDeleteSets: j,
            equalSnapshots: (t, e) => {
                let r = t.ds.clients,
                    n = e.ds.clients,
                    i = t.sv,
                    s = e.sv;
                if (i.size !== s.size || r.size !== n.size) return !1;
                for (let [t, e] of i.entries())
                    if (s.get(t) !== e) return !1;
                for (let [t, e] of r.entries()) {
                    let r = n.get(t) || [];
                    if (e.length !== r.length) return !1;
                    for (let t = 0; t < e.length; t++) {
                        let n = e[t],
                            i = r[t];
                        if (n.clock !== i.clock || n.len !== i.len) return !1
                    }
                }
                return !0
            },
            findIndexSS: tC,
            findRootTypeKey: tl,
            getItem: t_,
            getItemCleanEnd: tD,
            getItemCleanStart: tR,
            getState: tE,
            getTypeChildren: t => {
                t.doc ?? t9();
                let e = t._start,
                    r = [];
                for (; e;) r.push(e), e = e.right;
                return r
            },
            isDeleted: _,
            isParentOf: tc,
            iterateDeletedStructs: C,
            logType: t => {
                let e = [],
                    r = t._start;
                for (; r;) e.push(r), r = r.right;
                console.log("Children: ", e), console.log("Children content: ", e.filter(t => !t.deleted).map(t => t.content))
            },
            logUpdate: t => tH(t, N),
            logUpdateV2: tH,
            mergeDeleteSets: R,
            mergeUpdates: tY,
            mergeUpdatesV2: tG,
            obfuscateUpdate: (t, e) => t3(t, t2(e), N, B),
            obfuscateUpdateV2: (t, e) => t3(t, t2(e), Q, V),
            parseUpdateMeta: t => tW(t, N),
            parseUpdateMetaV2: tW,
            readUpdate: (t, e, r) => Y(t, e, r, new N(t)),
            readUpdateV2: Y,
            relativePositionToJSON: t => {
                let e = {};
                return t.type && (e.type = t.type), t.tname && (e.tname = t.tname), t.item && (e.item = t.item), null != t.assoc && (e.assoc = t.assoc), e
            },
            snapshot: t => ty(M(t.store), tS(t.store)),
            snapshotContainsUpdate: (t, e) => ((t, e, r = Q) => {
                let n = new r(l.e(e)),
                    i = new tB(n, !1);
                for (let e = i.curr; null !== e; e = i.next())
                    if ((t.sv.get(e.id.client) || 0) < e.id.clock + e.length) return !1;
                let s = R([t.ds, I(n)]);
                return j(t.ds, s)
            })(t, e, N),
            transact: tL,
            tryGc: (t, e, r) => {
                tj(t, e, r), tq(t, e)
            },
            typeListToArraySnapshot: (t, e) => {
                let r = [],
                    n = t._start;
                for (; null !== n;) {
                    if (n.countable && tv(n, e)) {
                        let t = n.content.getContent();
                        for (let e = 0; e < t.length; e++) r.push(t[e])
                    }
                    n = n.right
                }
                return r
            },
            typeMapGetAllSnapshot: ev,
            typeMapGetSnapshot: (t, e, r) => {
                let n = t._map.get(e) || null;
                for (; null !== n && (!r.sv.has(n.id.client) || n.id.clock >= (r.sv.get(n.id.client) || 0));) n = n.left;
                return null !== n && tv(n, r) ? n.content.getContent()[n.length - 1] : void 0
            }
        })
    }),
    ryc: (function(t, e, r) {
        let n = {}.hasOwnProperty;

        function i(t, e) {
            let r = e || {};

            function i(e, ...r) {
                let s = i.invalid,
                    o = i.handlers;
                if (e && n.call(e, t)) {
                    let r = String(e[t]);
                    s = n.call(o, r) ? o[r] : i.unknown
                }
                if (s) return s.call(this, e, ...r)
            }
            return i.handlers = r.handlers || {}, i.invalid = r.invalid, i.unknown = r.unknown, i
        }
        r.d(e, {
            a: () => i
        })
    })
};