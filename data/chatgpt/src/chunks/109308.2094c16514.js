//# allFunctionsCalledOnLoad
export const __rspack_esm_ids = [109308];
export const __webpack_modules__ = {
    Q840: (function(e, t, n) {
        let r;
        n.d(t, {
            a: () => G,
            b: () => er,
            c: () => T.a,
            d: () => a.a,
            e: () => O.n,
            f: () => O.o,
            g: () => O.p,
            h: () => i.a,
            i: () => a.b,
            j: () => u.b,
            k: () => s.e,
            l: () => O.s,
            m: () => x,
            n: () => K,
            o: () => W,
            p: () => L,
            q: () => F,
            r: () => B,
            s: () => D.e,
            t: () => l.a,
            u: () => i.b,
            v: () => a.c,
            w: () => ep,
            x: () => eg,
            y: () => ey,
            z: () => ec
        });
        var l = n("tyzk"),
            i = n("hffr"),
            u = n("Nmf8"),
            a = n("jwtq"),
            o = n("suf3"),
            s = n("J6iR"),
            c = n("rbzn"),
            d = n("ouEa"),
            f = n("iwK1"),
            h = n("wFEO");
        let p = new WeakSet;

        function g(e, t, n) {
            if (p.has(n)) return;
            p.add(n);
            let r = new o.a(e, {
                    ...t.options,
                    enabled: !1,
                    queryHash: t.queryHash,
                    queryKey: t.queryKey
                }).subscribe(() => {}),
                l = n,
                i = () => {
                    let e = (0, s.c)(t),
                        n = (0, s.d)(e);
                    null == e || e === l || "independent" !== n && (null != n || (0, s.f)(t)) ? (p.delete(l), r()) : (p.delete(l), p.has(e)) ? r() : (p.add(e), l = e, e.then(i, i))
                };
            n.then(i, i)
        }

        function y(e, t, n) {
            let r = t.getCurrentQuery();
            if (!t.hasListeners() || r === n) return;
            let l = (0, s.c)(r),
                i = (0, s.d)(l);
            null != l && "independent" === i && g(e, r, l)
        }
        var b = n("D7Ms");

        function v(e, t) {
            if (null == e) return !1;
            let n = Object.keys(t);
            if (n.length !== Object.keys(e).length) return !1;
            for (let r of n)
                if (Reflect.get(e, r) !== Reflect.get(t, r)) return !1;
            return !0
        }

        function m(e) {
            return e.suspense && null == e.staleTime ? {
                ...e,
                staleTime: 1e3
            } : e
        }

        function w(e, t) {
            return !!e?.suspense && t.isEnabled && t.isPending
        }

        function k(e, t, n) {
            if (!n.result.isError || n.result.isFetching) return !1;
            let r = e.errorValidation;
            if (r?.observer === t && r.query === n.query && Object.is(r.error, n.result.error)) return r.shouldThrow;
            let l = (0, b.t)(n.throwOnError, [n.result.error, n.query]);
            return e.errorValidation = {
                error: n.result.error,
                observer: t,
                query: n.query,
                shouldThrow: l
            }, l
        }

        function C(e, t, n, r) {
            let {
                cacheSubscriptions: l,
                getEnabledReaderOptions: i,
                getShouldSuppressStaleFetchOnEnable: u,
                isEnabledReaderMounting: a,
                shouldRetainFetchStartedAfterUnmount: o
            } = r, p = (0, d.a)(0), b = (0, d.a)(0), C = new WeakMap, S = new WeakMap, E = Symbol("evicted query result"), q = (0, d.a)(e => (0, h.a)(n(e), e)), M = (0, d.a)(() => new WeakMap), R = new WeakMap, O = e => {
                let t = e.notifyOnChangeProps;
                e._optimisticResults = "optimistic", e.notifyOnChangeProps = "all", R.set(e, t)
            }, D = (0, d.a)(() => new WeakMap), A = (0, d.a)(() => {
                let e, t, n;
                return e = new WeakMap, t = new WeakSet, n = new WeakSet, {
                    mount(r, l, i) {
                        let u = e.get(r) ?? 0,
                            a = t.has(r);
                        t.add(r);
                        let o = 0 !== u || n.has(r) || i || null == l || "reactive" === (0, s.d)(l) ? void 0 : l;
                        return 0 === u && (n.add(r), queueMicrotask(() => {
                            n.delete(r)
                        })), e.set(r, u + 1), {
                            activeFetchAtMount: o,
                            hadMountedBefore: a
                        }
                    },
                    unmount(t) {
                        let n = (e.get(t) ?? 1) - 1;
                        0 === n ? e.delete(t) : e.set(t, n)
                    }
                }
            }), Q = (0, d.a)(t => {
                let r = t(q),
                    l = m(n(t).defaultQueryOptions(e(t)));
                t(h.c) && (l.gcTime = 1 / 0);
                let i = t(M).get(r);
                if (O(l), null != i) {
                    let e = r.getQueryCache().build(r, l),
                        n = (0, s.c)(e);
                    y(r, i, e);
                    let o = "function" == typeof l.refetchOnMount ? l.refetchOnMount(e) : l.refetchOnMount,
                        c = a() && ("function" == typeof l.enabled ? l.enabled(e) : l.enabled) !== !1;
                    c && "error" === e.state.status && void 0 === e.state.data && !1 === l.retryOnMount ? i.setOptions({
                        ...l,
                        suspense: !0
                    }) : c && u(t) && !1 === o && void 0 !== e.state.data && i.setOptions({
                        ...l,
                        staleTime: "static"
                    }), i.setOptions(l);
                    let d = (0, s.c)(i.getCurrentQuery());
                    i.hasListeners() && null != d && d !== n && (0, s.g)(d, "reactive")
                }
                return l
            }), j = (0, d.a)(e => {
                let t = m(n(e).defaultQueryOptions(i(e)));
                return O(t), t
            }), K = (0, d.a)(e => {
                e(b);
                let n = e(q),
                    r = e(M).get(n);
                if (null != r) return r;
                let l = new t(n, e(Q));
                return e(M).set(n, l), l
            }), B = (0, d.a)(e => {
                let t = e(q),
                    n = e(K),
                    r = e(Q),
                    i = e(M),
                    u = e(D),
                    h = e(A);
                n.getOptimisticResult(r);
                let p = n,
                    y = (0, d.a)(n.getCurrentResult()),
                    v = (0, d.a)(e => {
                        let t = e(y);
                        if (t === E) throw Error("Evicted query result was read");
                        return t
                    }, (e, t, n) => {
                        if (n === E) {
                            p = void 0, t(y, E), t(b, e => e + 1);
                            return
                        }
                        t(y, n)
                    });
                return S.set(n, v), v.onMount = e => {
                    var n;
                    let d = p;
                    if (null == d || S.get(d) !== v) return;
                    let y = d.getCurrentQuery(),
                        b = (0, s.c)(y),
                        m = (0, s.h)(y),
                        {
                            activeFetchAtMount: w,
                            hadMountedBefore: k
                        } = h.mount(d, b, m.hadMountedReader);
                    (0, s.g)(w, "independent");
                    let q = o();
                    t.getQueryCache().get(y.queryHash) !== y && d.setOptions(r), d.getOptimisticResult(t.defaultQueryOptions(d.options)), e(d.getCurrentResult());
                    let M = c.a.batchCalls(e),
                        O = d.subscribe(e => {
                            let t = d.options;
                            f.a.cacheChangeProperties(e, R.has(t) ? R.get(t) : R.get(r)), M(e)
                        }),
                        D = (0, s.c)(d.getCurrentQuery());
                    null != D && D !== b && (0, s.g)(D, "reactive"), n = null != D, k && !n && queueMicrotask(() => {
                        if (!a()) return;
                        let e = d.getCurrentQuery(),
                            t = "function" == typeof d.options.enabled ? d.options.enabled(e) : d.options.enabled,
                            n = "function" == typeof d.options.refetchOnMount ? d.options.refetchOnMount(e) : d.options.refetchOnMount,
                            r = "function" == typeof d.options.staleTime ? d.options.staleTime(e) : d.options.staleTime,
                            l = void 0 !== e.state.data || "error" !== e.state.status || !1 !== d.options.retryOnMount,
                            i = "always" === n || !1 !== n && d.getCurrentResult().isStale;
                        if (d.hasListeners() && "idle" === e.state.fetchStatus && !1 !== t && "static" !== r && l && i) {
                            let t = (0, s.c)(e);
                            d.refetch();
                            let n = (0, s.c)(d.getCurrentQuery());
                            null != n && n !== t && (0, s.g)(n, "reactive")
                        }
                    });
                    let A = t.getQueryCache(),
                        Q = n => {
                            i.get(t) !== d || d.hasListeners() || d.getCurrentQuery() !== n || (i.delete(t), u.delete(d), e(E))
                        },
                        j = e => A.get(e.queryHash) === e,
                        K = e => {
                            j(e) || Q(e)
                        },
                        B = e => {
                            if (C.has(e) || !j(e)) return;
                            let t = l.subscribe(A, n => {
                                "removed" === n.type && n.query === e && (t?.(), C.delete(e), Q(e))
                            });
                            null != t && C.set(e, t)
                        };
                    return () => {
                        let e = d.getCurrentQuery(),
                            n = (0, s.c)(e);
                        e === y && null != n && n !== b && (0, s.g)(n, "reactive"), m.unmount(), h.unmount(d),
                            function(e) {
                                let {
                                    activeFetchAtReaderMount: t,
                                    activeFetchAtUnmount: n,
                                    client: r,
                                    evictIfQueryRemoved: l,
                                    observer: i,
                                    queryAtUnmount: u,
                                    retainFetchStartedAfterUnmount: a,
                                    unsubscribe: o,
                                    watchForQueryRemoval: c
                                } = e;
                                queueMicrotask(() => {
                                    let e = i.getCurrentQuery(),
                                        d = (0, s.c)(e),
                                        f = (0, s.d)(d),
                                        h = (0, s.f)(e),
                                        p = null != d && "reactive" !== f && !h && (e !== u || d !== n),
                                        y = a && null != d && d === n && d !== t;
                                    if (h) return void o();
                                    let b = () => {
                                        o(), l(e)
                                    };
                                    c(e), null != d && (p || y || "independent" === f) && g(r, e, d), b()
                                })
                            }({
                                activeFetchAtReaderMount: b,
                                activeFetchAtUnmount: n,
                                client: t,
                                evictIfQueryRemoved: K,
                                observer: d,
                                queryAtUnmount: e,
                                retainFetchStartedAfterUnmount: q,
                                unsubscribe: O,
                                watchForQueryRemoval: B
                            })
                    }
                }, v
            }), F = (0, d.a)(e => (e(p), e(e(B)))), x = (e, t, n, r, l) => {
                let i, u, a = R.get(n),
                    o = n,
                    c = t.getCurrentQuery();
                return f.a.createSnapshot(r, {
                    getBehavior: e => ({
                        suspense: l && w(n, e),
                        throwOnError: e.isError && !e.isFetching && n.throwOnError || void 0
                    }),
                    getCurrentResult: (r, a) => {
                        let d = e.defaultQueryOptions(t.options);
                        d._optimisticResults = "optimistic", d.notifyOnChangeProps = "all";
                        let f = e.getQueryCache().build(e, d),
                            h = t.getCurrentQuery(),
                            p = t.getCurrentResult();
                        if (!a.connect && r.isEnabled && !p.isEnabled) {
                            let u = e.getQueryCache().build(e, n),
                                o = t.getOptimisticResult(n);
                            if (t.getOptimisticResult(d), v(r, o) && (o = r), l && w(n, o)) throw i?.result !== o && (i = {
                                promise: t.fetchOptimistic(n),
                                result: o
                            }), i.promise;
                            if (i = void 0, k(a, t, {
                                    result: o,
                                    query: u,
                                    throwOnError: n.throwOnError
                                })) throw o.error;
                            return o
                        }
                        let g = (0, s.c)(f);
                        a.connect && h !== f && y(e, t, f);
                        let b = t.getOptimisticResult(d);
                        if (a.connect && h !== f) {
                            t.setOptions(d), b = t.getCurrentResult();
                            let e = (0, s.c)(t.getCurrentQuery());
                            t.hasListeners() && null != e && e !== g && (0, s.g)(e, "reactive")
                        }
                        if (v(r, b) && (b = r), a.token === u && d === o && f === c && b === r) return b;
                        if (l && w(d, b)) throw i?.result !== b && (i = {
                            promise: t.fetchOptimistic(d),
                            result: b
                        }), i.promise;
                        if (i = void 0, k(a, t, {
                                result: b,
                                query: f,
                                throwOnError: d.throwOnError
                            })) throw b.error;
                        return u = a.token, o = d, c = f, b
                    },
                    notifyOnChangeProps: a,
                    notifyOnError: !!n.throwOnError,
                    trackResult: e => null == a ? t.trackResult(e) : e
                })
            }, W = (0, d.a)(e => x(e(q), e(K), e(Q), e(F), !1));
            return Object.assign((0, d.a)(e => {
                if (e(h.c)) return e(W);
                let t = e(q),
                    n = e(K),
                    r = e(Q),
                    l = e(D),
                    i = r,
                    u = e(F);
                if (!u.isEnabled) {
                    let t = e(j),
                        l = n.getOptimisticResult(t);
                    n.getOptimisticResult(r), l.isEnabled && (i = t, u = l)
                }
                let a = l.get(n);
                return (v(a, u) ? u = a : l.set(n, u), null == a && w(i, u)) ? n.fetchOptimistic(i) : x(t, n, i, u, !0)
            }, (e, t) => {
                t(p, e => e + 1)
            }), {
                rawResultAtom: W
            })
        }

        function S(e, t, n) {
            return C(t => {
                let n = {
                    ...e(t)
                };
                return (0, s.b)(n, "reactive"), n
            }, o.a, t, n)
        }
        var E = n("CdjL");

        function q(e, t, n) {
            return C(e, E.a, t, n)
        }
        class M {
            subscriptions = new Set;
            disposed = !1;
            subscribe(e, t) {
                if (this.disposed) return;
                let n = e.subscribe(t),
                    r = () => {
                        this.subscriptions.delete(r), n()
                    };
                return this.subscriptions.add(r), r
            }
            dispose() {
                for (let e of (this.disposed = !0, this.subscriptions)) e()
            }
        }
        var R = n("AvFJ"),
            O = n("fbKo"),
            D = n("PKjX"),
            A = n("m4Vs"),
            Q = n("vMlG");

        function j(e, t, n, r, l) {
            let i = new WeakMap,
                u = (0, O.k)("cached", e, (e, u) => {
                    var a;
                    let o, s, c, h, p, g, y, b = e.queryClient;
                    if (null == b) throw Error(`${"query"===n?"querySignal":"infiniteQuerySignal"} requires a QueryClient on Scope`);
                    let v = i.get(e.familyBindings);
                    null == v && (v = new M, i.set(e.familyBindings, v));
                    let m = (a = null == l ? void 0 : () => l((0, O.h)(u, e).scope), o = (0, d.a)(!1), s = (0, d.a)(!1), c = 0, h = !1, p = 0, (g = (0, d.a)(e => e(o), (e, t, n) => {
                            t(o, n)
                        })).onMount = t => {
                            let n, r = c += 1;
                            h = !0;
                            let l = !1,
                                i = () => {
                                    l || (l = !0, n = a?.()), t(!0)
                                };
                            return 0 === e.imperativeReadDepth ? i() : t(!1), queueMicrotask(() => {
                                c === r && i(), queueMicrotask(() => {
                                    c === r && (h = !1)
                                })
                            }), () => {
                                c += 1, h = !1, t(!1), n?.()
                            }
                        }, (y = (0, d.a)(() => !1, (e, t, n) => {
                            t(s, n)
                        })).onMount = t => {
                            if (e.imperativeReadDepth > 0) return;
                            let n = p += 1;
                            return queueMicrotask(() => {
                                p === n && t(!0)
                            }), () => {
                                let e = p += 1;
                                queueMicrotask(() => {
                                    p === e && t(!1)
                                })
                            }
                        }, {
                            disabledReaderMountAtom: y,
                            enabledReaderMountAtom: g,
                            hasCommittedDisabledReadersAtom: s,
                            hasEnabledReadersAtom: o,
                            isEnabledReaderMounting: () => h
                        }),
                        w = (0, A.a)(),
                        k = (n, r) => {
                            let l = t((0, O.h)(u, e, n, {
                                    enabled: r
                                }, w)),
                                i = l.enabled;
                            return {
                                ...l,
                                enabled: t => !(e.imperativeReadDepth > 0 && ((0, D.d)(e.store) || !e.store.get(m.hasEnabledReadersAtom))) && r && ("function" == typeof i ? i(t) : i ?? !0),
                                refetchOnMount: l.refetchOnMount ?? !1
                            }
                        },
                        C = r(e => k(e, e(m.hasEnabledReadersAtom)), () => b, {
                            cacheSubscriptions: v,
                            getEnabledReaderOptions: t => k(t, 0 === e.imperativeReadDepth),
                            getShouldSuppressStaleFetchOnEnable: e => !e(m.hasCommittedDisabledReadersAtom),
                            isEnabledReaderMounting: m.isEnabledReaderMounting,
                            shouldRetainFetchStartedAfterUnmount: () => e.imperativeReadDepth > 0
                        }),
                        S = (0, d.a)(e => (e(m.enabledReaderMountAtom), e(C))),
                        E = (0, d.a)(e => {
                            e(m.disabledReaderMountAtom);
                            let t = e(C.rawResultAtom);
                            return t.isEnabled ? f.a.createSnapshotView(t, {
                                isEnabled: !1,
                                isStale: !1
                            }) : t
                        });
                    return f.a.markAtom(C), f.a.markAtom(S), f.a.markAtom(E), (0, O.y)(e, S), (0, O.y)(e, E), {
                        disabledReaderAtom: E,
                        enabledReaderAtom: S,
                        queryAtom: C
                    }
                }, (e, t) => {
                    let {
                        queryAtom: n
                    } = e;
                    return (0, R.d)(t, n, "query", {
                        debugLabel: s.debugLabel,
                        familyMember: i.get(t.familyBindings)
                    })
                }),
                a = e => {
                    let t = i.get(e.familyBindings);
                    null != t && (t.dispose(), (0, R.b)(e, t))
                },
                o = r => {
                    let l = Object.assign((0, O.k)("cached", e, (e, t) => {
                        let n = u.resolve(e, t);
                        return r ? n.enabledReaderAtom : n.disabledReaderAtom
                    }), {
                        [Q.a]: a,
                        createSubscriberAtom: (e, t) => f.a.createSubscriberAtom(l.resolve(e, t)),
                        getOptions: t,
                        queryKind: n,
                        [Q.e]: e => r && e.enabled ? s : c
                    });
                    return l
                },
                s = o(!0),
                c = o(!1);
            return s
        }

        function K(e, t) {
            return j(e, t, "infinite", q)
        }

        function B(e, t, n) {
            return j(e, t, "query", S, n)
        }

        function F(e, t, n) {
            let r = (0, u.b)(e, n => {
                let l = B(e, e => t(n, e));
                return l.debugLabel = r.debugLabel, l
            }, {
                ...n,
                autoDispose: n?.autoDispose ?? !0
            });
            return (0, u.a)(r)
        }

        function x(e, t, n) {
            let r = (0, u.b)(e, n => {
                let l = K(e, e => t(n, e));
                return l.debugLabel = r.debugLabel, l
            }, {
                ...n,
                autoDispose: n?.autoDispose ?? !0
            });
            return (0, u.a)(r)
        }

        function W(e, t, n) {
            let r = (0, u.b)(e, n => P(e, e => t(n, e), (e, t) => r[Q.d](e, t, n)), n);
            return (0, u.a)(r)
        }

        function L(e, t) {
            return P(e, t)
        }

        function P(e, t, n) {
            let r = (0, O.k)("cached", e, (e, l) => {
                if (null == e.queryClient) throw Error("mutationSignal requires a QueryClient on Scope");
                let i = (0, d.a)({
                        data: void 0,
                        error: null,
                        status: "idle",
                        variables: void 0
                    }),
                    u = 0;
                return (0, d.a)(a => {
                    let o = a(i),
                        s = async (n, r) => {
                            let a, o, s = t((0, O.h)(l, e)),
                                c = {
                                    client: e.queryClient,
                                    meta: s.meta,
                                    mutationKey: s.mutationKey
                                },
                                d = ++u;
                            e.store.set(i, {
                                data: void 0,
                                error: null,
                                status: "pending",
                                variables: n
                            });
                            try {
                                o = await s.onMutate?.(n, c), a = await s.mutationFn?.(n, c)
                            } catch (t) {
                                throw d === u && e.store.set(i, {
                                    data: void 0,
                                    error: t,
                                    status: "error",
                                    variables: n
                                }), await s.onError?.(t, n, o, c), await s.onSettled?.(void 0, t, n, o, c), r?.onError?.(t, n, o, c), r?.onSettled?.(void 0, t, n, o, c), t
                            }
                            return d === u && e.store.set(i, {
                                data: a,
                                error: null,
                                status: "success",
                                variables: n
                            }), await s.onSuccess?.(a, n, o, c), await s.onSettled?.(a, null, n, o, c), r?.onSuccess?.(a, n, o, c), r?.onSettled?.(a, null, n, o, c), a
                        }, c = (t, i) => {
                            let u = n?.(e, l);
                            if (null != u && u.value !== r) return e.store.get(u.value.resolve(e, l)).mutateAsync(t, i);
                            let a = u?.disposal;
                            if (null == a) return s(t, i);
                            let o = a.retain();
                            return s(t, i).finally(o)
                        };
                    return {
                        ...o,
                        isError: "error" === o.status,
                        isIdle: "idle" === o.status,
                        isPending: "pending" === o.status,
                        isSuccess: "success" === o.status,
                        mutate: (e, t) => {
                            c(e, t).catch(() => {})
                        },
                        mutateAsync: c
                    }
                })
            }, (e, t) => {
                (0, R.d)(t, e, "mutation", {
                    debugLabel: r.debugLabel
                })
            });
            return r
        }
        var T = n("UQAX"),
            V = n("zd8w"),
            z = n("ABep"),
            I = n("QosV");
        let _ = (0, V.createContext)(new Map),
            J = (0, V.createContext)(void 0),
            U = new WeakMap,
            X = new Map;

        function N(e) {
            let t = U.get(e);
            return null == t && ((t = (0, V.createContext)(X)).displayName = e.__scopeBrand, U.set(e, t)), t
        }

        function G(e) {
            let t, n = (0, I.c)(3),
                {
                    children: r,
                    queryClient: l
                } = e;
            return n[0] !== r || n[1] !== l ? (t = (0, z.jsx)(J.Provider, {
                value: l,
                children: r
            }), n[0] = r, n[1] = l, n[2] = t) : t = n[2], t
        }
        var H = n("SZCv"),
            Y = n.n(H),
            Z = n("KoFQ"),
            $ = n("oFsh");
        let ee = {},
            et = new WeakMap,
            en = 0;

        function er(e) {
            let {
                children: t,
                pendingRetainedScopes: n,
                scope: r,
                value: l
            } = e, i = (0, V.useContext)(_), u = (0, V.useContext)(J), a = null == r.parent ? void 0 : i.get(r.parent.id), o = l ?? ee, s = null == r.getKey ? JSON.stringify(o) : r.getKey(o), c = (0, V.useRef)(null), [, d] = (0, V.useReducer)(e => e + 1, 0), f = (0, V.useRef)(null);
            if (null != r.parent && null == a) throw Error("Missing parent scope");
            let h = null == a ? void 0 : function(e) {
                    let {
                        parentScope: t,
                        providedValue: n,
                        queryClient: r,
                        scope: l,
                        scopeKey: i,
                        mountedEntry: u,
                        pendingRetainedScopes: a
                    } = e, o = t.retainedScopeEntries.get(l)?.get(i);
                    if (null != o) return o;
                    if (null != u) return u;
                    let s = null == l.retain ? void 0 : a?.get(t),
                        c = s?.get(l)?.get(i);
                    if (null != c) return c;
                    let d = {
                        lastUsed: 0,
                        mountedCount: 0,
                        node: el({
                            parentScope: t,
                            providedValue: n,
                            queryClient: r,
                            scope: l,
                            scopeKey: i
                        })
                    };
                    if (null != l.retain && null != a) {
                        let e = s ?? new Map,
                            n = e.get(l) ?? new Map;
                        n.set(i, d), e.set(l, n), a.set(t, e)
                    }
                    return d
                }({
                    parentScope: a,
                    providedValue: o,
                    queryClient: u,
                    scope: r,
                    scopeKey: s,
                    pendingRetainedScopes: n,
                    mountedEntry: null == r.retain && c.current?.node.token === r && Object.is(c.current.node.key, s) && c.current.parent === a && c.current.parentChain === i ? c.current.retainedEntry : void 0
                }),
                p = null != h && !Y()(h.node.value, o),
                g = h?.node.parent,
                y = null != h && g !== a,
                b = y && (null == g || et.get(g) !== a),
                v = p || y,
                m = a?.queryClient ?? u,
                w = null != h && (p || h.node.queryClient !== m) ? {
                    ...h.node,
                    debugEntries: new Set,
                    cachedBindings: p ? new WeakMap : h.node.cachedBindings,
                    queryClient: m,
                    value: o
                } : h?.node;
            if (null != c.current && c.current.node.token === r && Object.is(c.current.node.key, s) && c.current.parent === a && c.current.parentChain === i && (null == h || c.current.retainedEntry === h) && (null == w || c.current.node === w)) c.current.retainedEntry = h;
            else {
                let e = w ?? el({
                        parentScope: a,
                        providedValue: o,
                        queryClient: u,
                        scope: r,
                        scopeKey: s
                    }),
                    t = (0, O.c)(i, r);
                t.set(r.id, e), c.current = {
                    chain: t,
                    node: e,
                    parent: a,
                    parentChain: i,
                    retainedEntry: h
                }
            }(null == h ? function(e) {
                let {
                    node: t,
                    parentScope: n,
                    providedValue: r,
                    queryClient: l
                } = e, i = !Y()(t.value, r);
                return t.queryClient = n?.queryClient ?? l, t.value = r, i
            }({
                node: c.current.node,
                parentScope: a,
                providedValue: o,
                queryClient: u
            }) : v) ? (null == h && (c.current.node.cachedBindings = new WeakMap), f.current = {
                atom: c.current.node.contextVersionAtom,
                store: c.current.node.store
            }) : f.current = null;
            let k = c.current.retainedEntry,
                C = c.current.node;
            (0, V.useLayoutEffect)(() => {
                if (C.autoDisposeScheduler.activate(), (0, R.f)(C, k?.node), null != k && null != a) {
                    let e = a.retainedScopeEntries.get(r);
                    null == e && (e = new Map, a.retainedScopeEntries.set(r, e)), e.set(s, k);
                    let t = k.node;
                    t.parent = a, t !== C && (t.cachedBindings = C.cachedBindings, t.queryClient = C.queryClient, t.value = C.value, Object.defineProperties(C, {
                        parent: {
                            get: () => t.parent,
                            configurable: !0
                        },
                        queryClient: {
                            get: () => t.queryClient,
                            configurable: !0
                        },
                        value: {
                            get: () => t.value,
                            configurable: !0
                        }
                    }), et.set(C, t)), b && (c.current = null, d());
                    return
                }
                return C.autoDisposeScheduler.cancel(C), () => {
                    (0, R.g)(C), C.autoDisposeScheduler.schedule(C, 0, () => {
                        (0, O.b)(C)
                    })
                }
            }, [C, C.cachedBindings, k, b, a, r, s]), (0, V.useLayoutEffect)(() => {
                let e = f.current;
                null != e && (e.store.set(e.atom, e => e + 1), f.current = null)
            }), (0, V.useLayoutEffect)(() => {
                if (null != k && null != a) return a.autoDisposeScheduler.cancel(k), k.mountedCount += 1, k.lastUsed = ++en, ei(a, r), () => {
                    k.mountedCount -= 1, k.lastUsed = ++en, ei(a, r);
                    let e = (0, Z.c)(r.retain?.autoDispose);
                    1 / 0 !== e && 0 === k.mountedCount && a.retainedScopeEntries.get(r)?.get(C.key) === k && a.autoDisposeScheduler.schedule(k, e, () => {
                        let e = a.retainedScopeEntries.get(r);
                        k.mountedCount > 0 || e?.get(C.key) !== k || (e.delete(C.key), 0 === e.size && a.retainedScopeEntries.delete(r), (0, O.b)(k.node))
                    })
                }
            }, [C.key, k, a, r]);
            let S = N(r),
                E = (0, z.jsx)(S, {
                    value: c.current.chain,
                    children: t
                });
            for (let e of i.values())
                if (!c.current.chain.has(e.token.id)) {
                    let t = N(e.token);
                    E = (0, z.jsx)(t, {
                        value: X,
                        children: E
                    })
                } return (0, z.jsx)(_.Provider, {
                value: c.current.chain,
                children: E
            })
        }

        function el(e) {
            let {
                parentScope: t,
                providedValue: n,
                queryClient: r,
                scope: l,
                scopeKey: i
            } = e;
            return {
                cachedBindings: new WeakMap,
                contextVersionAtom: (0, d.a)(0),
                debugEntries: new Set,
                familyBindings: new Map,
                familyKeysByOwner: new Map,
                disposalLifecycles: new Set,
                autoDisposeScheduler: t?.autoDisposeScheduler ?? new Z.a({
                    active: !1
                }),
                imperativeReadAtoms: new WeakSet,
                imperativeReadDepth: 0,
                key: i,
                parent: t,
                queryClient: t?.queryClient ?? r,
                retainedScopeEntries: new Map,
                signalBindings: new WeakMap,
                store: t?.store ?? (0, $.a)(),
                token: l,
                value: n
            }
        }

        function ei(e, t) {
            let n = null == t.retain ? 0 : t.retain.max ?? 1 / 0,
                r = e.retainedScopeEntries.get(t);
            if (null != r) {
                for (; r.size > n;) {
                    let t = function(e) {
                        let t = null;
                        for (let [n, r] of e) !(r.mountedCount > 0) && (null == t || r.lastUsed < t.entry.lastUsed) && (t = {
                            entry: r,
                            key: n
                        });
                        return t
                    }(r);
                    if (null == t) return;
                    r.delete(t.key), e.autoDisposeScheduler.cancel(t.entry), (0, R.g)(t.entry.node), e.autoDisposeScheduler.schedule(t.entry, 0, () => {
                        (0, O.b)(t.entry.node)
                    })
                }
                0 === r.size && e.retainedScopeEntries.delete(t)
            }
        }
        var eu = n("ns1t");
        let ea = () => {},
            eo = () => ea,
            es = [];

        function ec(e, t) {
            var n, r;
            let l = (0, O.a)(e, t);
            if (n = l, (0, O.v)(n) && "function" == typeof n.get && "function" == typeof n.subscribe) {
                let e = (0, V.use)(eu.b);
                return ed((0, V.useMemo)(() => {
                    let t = ef(e => l.subscribe(e), e);
                    return {
                        ...f.a.createSubscriberStore(l.atom, () => l.store.get(l.atom), t.subscribe),
                        prepare: t.prepare,
                        trackLifetime: t.trackLifetime
                    }
                }, [l, void 0, e]), () => (0, h.b)(l.store, l.atom))
            }
            if (!("object" == typeof(r = l) && null != r && "cache" in r && ("cached" === r.cache || "signal" === r.cache) && "scope" in r && "resolve" in r && "function" == typeof r.resolve)) {
                let e = (0, V.useMemo)(() => () => l, [l, void 0, void 0]),
                    t = (0, V.useSyncExternalStore)(eo, e, e);
                return (0, V.useInsertionEffect)(ea, [void 0]), (0, V.useLayoutEffect)(ea, [ea, void 0]), t
            }
            let i = (0, V.use)(N(l.scope)),
                u = (0, V.use)(eu.b),
                a = (0, O.B)(i, l.scope),
                o = l.resolve(a, i);
            return ed((0, V.useMemo)(() => {
                let e = ef(e => a.store.sub(o, e), u);
                return {
                    ...f.a.createSubscriberStore(o, () => a.store.get(o), e.subscribe),
                    prepare: e.prepare,
                    trackLifetime: e.trackLifetime
                }
            }, [a.store, o, u]), () => (0, h.b)(a.store, o))
        }

        function ed(e, t) {
            let n = e.createRender?.(),
                r = (0, V.useSyncExternalStore)(e.subscribe, n?.getSnapshot ?? (null == e.createRender ? e.getSnapshot : () => {
                    if (null != n) return n.getSnapshot();
                    let t = e.getSnapshot();
                    return null == (n = e.createRender?.(!0)) ? t : n.getSnapshot()
                }), t);
            n = n ?? e.createRender?.(!0);
            let l = n?.commit ?? ea,
                i = e.trackLifetime;
            return (0, V.useInsertionEffect)(i ?? ea, [i]), (0, V.useLayoutEffect)(() => (l(), e.prepare()), [l, e]), null == n ? r : n.track(r)
        }

        function ef(e, t) {
            let n, r, l, i = !1,
                u = !1,
                a = !1,
                o = !1,
                s = () => {
                    null == l ? o = !0 : l()
                };
            return {
                trackLifetime: t ? () => (i = !0, () => {
                    var e;
                    i = !1;
                    let t = r;
                    r = void 0, null != t && (e = t, es.push(e), 1 === es.length && queueMicrotask(() => {
                        for (let e of es.splice(0)) try {
                            e()
                        } catch (e) {
                            "function" == typeof globalThis.reportError ? globalThis.reportError(e) : console.error(e)
                        }
                    }))
                }) : void 0,
                prepare: () => {
                    if (!a || u || null != n || null != r) return;
                    let t = e(s);
                    return n = t, () => {
                        n === t && (n = void 0, t())
                    }
                },
                subscribe: t => {
                    let c = a;
                    a = !0, u = !0, l = t;
                    let d = r ?? n ?? e(s);
                    return r = void 0, n = void 0, (o || c) && (o = !1, t()), () => {
                        u = !1, l = void 0, i ? r = d : d()
                    }
                }
            }
        }

        function eh(e, t, n) {
            return null == r ? n() : r(e, t, n)
        }

        function ep(e, t) {
            var n, r;
            let l, i, u;
            return n = e, r = t, l = "object" == typeof n && null != n && Q.b in n ? (0, V.use)(N(n.scope)) : X, i = (0, V.useMemo)(() => {
                if ("object" == typeof n && null != n && Q.b in n) {
                    let e = (0, O.B)(l, n.scope),
                        t = n[Q.d](e, l, r);
                    return () => (null != t.disposal && e.store.get(t.disposal.atom) && (t = n[Q.d](e, l, r)), t)
                }
                let e = {
                    disposal: void 0,
                    value: n
                };
                return () => e
            }, [l, n, r]), u = (0, V.useCallback)(e => {
                let t = i().disposal?.retain() ?? (() => {});
                return e(), t
            }, [i]), (0, V.useLayoutEffect)(() => u(() => {}), [u]), (0, V.useSyncExternalStore)(u, i, i).value
        }

        function eg(e, t, n) {
            let r = "object" == typeof e && null != e && Q.b in e ? e : void 0,
                l = null != r ? (0, V.use)(N(r.scope)) : X,
                i = r?.[Q.d]((0, O.B)(l, r.scope), l, t),
                u = i?.cacheKey,
                a = i?.disposal == null ? i?.value : void 0,
                o = n?.enabled,
                s = (0, V.useMemo)(() => {
                    if ("object" != typeof e || null == e || !(Q.b in e)) return e;
                    if (null != a) return a;
                    let n = (0, O.B)(l, e.scope),
                        r = (0, O.d)(r => {
                            let i = e[Q.d](n, l, t, u);
                            return null != i.disposal && r(i.disposal.atom), (0, O.z)(n, l, i.value, r, null == o ? void 0 : {
                                enabled: o
                            })
                        });
                    return {
                        atom: r,
                        store: n.store,
                        get: () => n.store.get(r),
                        subscribe: t => {
                            let l = eh(e, "subscribe", () => n.store.sub(r, t));
                            return () => eh(e, "unsubscribe", l)
                        }
                    }
                }, [u, l, o, e, a]);
            return (0, V.useLayoutEffect)(() => {
                if (null == r) return;
                let e = (0, O.B)(l, r.scope);
                return r[Q.d](e, l, t, u).disposal?.retain()
            }, [u, l, r]), ec((0, O.a)(s, n))
        }

        function ey(e) {
            let t = (0, V.useContext)(N(e)),
                n = (0, O.B)(t, e),
                r = (0, O.i)(n),
                l = (0, V.useRef)(null);
            if (null == l.current || l.current.node !== n) {
                let u = {
                    chain: t,
                    getOwnValue: e => (0, O.A)(n, u.chain, e),
                    node: n,
                    get queryClient() {
                        if (null == n.queryClient) throw Error("Missing query client");
                        return n.queryClient
                    },
                    scope: e,
                    value: r
                };

                function i(e) {
                    return (0, O.F)(u, e)
                }
                u.get = function(e, t, n) {
                    if ((0, O.v)(e)) return (0, O.a)(e, 2 == arguments.length && (0, O.t)(e) ? t : void 0).get();
                    if ((0, O.t)(e) && 2 == arguments.length) {
                        let n = (0, O.B)(u.chain, e.scope);
                        return (0, O.q)(n, (0, O.a)(e, t).resolve(n, u.chain))
                    }
                    if (void 0 !== t || arguments.length >= 2) {
                        let r = (0, O.B)(u.chain, e.scope);
                        return (0, O.w)(e) ? e.read(r, u.chain, t, void 0, n) : e.resolve(r, u.chain, t)
                    }
                    let r = (0, O.B)(u.chain, e.scope),
                        l = e.resolve(r, u.chain);
                    return (0, O.q)(r, l)
                }, u.query = (0, O.j)(u), u.set = function(e, t, n) {
                    ! function(e, t, n, r) {
                        if ((0, O.x)(t)) {
                            let l = t.resolve(e.node, e.chain, n);
                            (0, O.D)(l.store, l.atom, r);
                            return
                        }
                        if ((0, O.u)(t)) return (0, O.D)(t.store, t.atom, n);
                        let l = (0, O.C)(e.node, e.chain, t.scope);
                        (0, O.D)(l.store, t.resolve(l, e.chain), n)
                    }(u, e, t, n)
                }, u.watch = i, u.when = function(e) {
                    return (0, O.E)(i, e)
                }, l.current = u
            } else l.current.chain = t, l.current.value = r;
            return l.current
        }
    }),
    e9bM: (function(e, t, n) {
        n.d(t, {
            a: () => r.a,
            b: () => o.a,
            c: () => o.b,
            d: () => a
        });
        var r = n("ns1t"),
            l = n("Nmf8"),
            i = n("vMlG"),
            u = n("PSDF");

        function a(e, t) {
            let n = (0, l.b)(e.scope, (e, n) => {
                let {
                    signal: r
                } = n;
                return r(() => t.read(e), {
                    isEqual: t.isEqual,
                    getServerSnapshot: t.getServerSnapshot
                })
            }, {
                owner: () => t.owner,
                autoDispose: t.autoDispose
            });

            function r() {
                return e.node.familyBindings.get(n)
            }
            return {
                at: t => n.resolve(e.node, e.chain, t),
                publish(e) {
                    r()?.get(e)?.value.set(t.read(e))
                },
                publishAll() {
                    for (let [e, n] of r() ?? []) n.value.set(t.read(e))
                },
                own: (t, l) => Object.assign(t, {
                    [i.a]() {
                        for (let t of (l(), r()?.keys() ?? []))(0, u.e)(e.node, n, t)
                    }
                })
            }
        }
        var o = n("PKjX");
        n("AvFJ")
    }),
    KoFQ: (function(e, t, n) {
        var r = n("ouEa");
        n.d(t, {}, {
            a: class {
                active;
                entries = new Map;
                deadlines = [];
                nextDeadline = 1 / 0;
                timeout;
                idleCallback;
                draining = !1;
                constructor({
                    active: e = !0
                } = {}) {
                    this.active = e
                }
                activate() {
                    this.active || (this.active = !0, this.updateTimeout())
                }
                schedule(e, t, n) {
                    if (1 / 0 === t || this.entries.has(e)) return;
                    let r = performance.now() + Math.max(0, t),
                        l = {
                            dispose: n,
                            deadline: r,
                            heapIndex: this.deadlines.length,
                            key: e
                        };
                    this.entries.set(e, l), this.deadlines.push(l), this.moveDeadlineUp(l.heapIndex), r < this.nextDeadline && this.updateTimeout()
                }
                cancel(e) {
                    let t = this.entries.get(e);
                    if (null == t) return;
                    let n = 0 === t.heapIndex;
                    this.removeDeadline(t), n && (0 === this.entries.size || null != this.idleCallback) && this.updateTimeout()
                }
                updateTimeout() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.active && !this.draining) {
                        if (null != this.timeout && (clearTimeout(this.timeout), this.timeout = void 0), this.nextDeadline = this.deadlines[0]?.deadline ?? 1 / 0, null != this.idleCallback) {
                            if (this.nextDeadline <= performance.now()) return;
                            globalThis.cancelIdleCallback(this.idleCallback), this.idleCallback = void 0
                        }
                        if (1 / 0 !== this.nextDeadline) {
                            if (e && this.nextDeadline <= performance.now() && null != globalThis.requestIdleCallback && null != globalThis.cancelIdleCallback) {
                                this.idleCallback = globalThis.requestIdleCallback(e => {
                                    this.idleCallback = void 0, this.drain(e)
                                }, {
                                    timeout: 1e3
                                });
                                return
                            }
                            this.timeout = setTimeout(() => {
                                this.timeout = void 0, this.drain()
                            }, Math.min(0x7fffffff, Math.max(0, this.nextDeadline - performance.now())))
                        }
                    }
                }
                drain(e) {
                    let t = performance.now();
                    this.draining = !0;
                    try {
                        let n = this.deadlines[0];
                        for (; null != n && n.deadline <= t && !(null != e && !e.didTimeout && 0 >= e.timeRemaining()) && (this.removeDeadline(n), n.dispose(), !(performance.now() - t >= 2));) {
                            ;
                            n = this.deadlines[0]
                        }
                    } finally {
                        this.draining = !1, this.updateTimeout(!0)
                    }
                }
                removeDeadline(e) {
                    this.entries.delete(e.key);
                    let t = this.deadlines.pop();
                    if (null == t || t === e) return;
                    let n = e.heapIndex;
                    this.deadlines[n] = t, t.heapIndex = n;
                    let r = Math.floor((n - 1) / 2);
                    n > 0 && t.deadline < this.deadlines[r].deadline ? this.moveDeadlineUp(n) : this.moveDeadlineDown(n)
                }
                moveDeadlineUp(e) {
                    let t = e;
                    for (; t > 0;) {
                        let e = Math.floor((t - 1) / 2);
                        if (this.deadlines[e].deadline <= this.deadlines[t].deadline) return;
                        this.swapDeadlines(t, e), t = e
                    }
                }
                moveDeadlineDown(e) {
                    let t = e;
                    for (;;) {
                        let e = 2 * t + 1;
                        if (e >= this.deadlines.length) return;
                        let n = e + 1,
                            r = n < this.deadlines.length && this.deadlines[n].deadline < this.deadlines[e].deadline ? n : e;
                        if (this.deadlines[t].deadline <= this.deadlines[r].deadline) return;
                        this.swapDeadlines(t, r), t = r
                    }
                }
                swapDeadlines(e, t) {
                    let n = this.deadlines[e],
                        r = this.deadlines[t];
                    this.deadlines[e] = r, this.deadlines[t] = n, n.heapIndex = t, r.heapIndex = e
                }
            },
            b: function(e, t, n, l) {
                let i, u = (0, r.a)(!1),
                    a = !1,
                    o = 0,
                    s = {
                        atom: u,
                        retain: d,
                        dispose() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                            !a && (a = !0, e.autoDisposeScheduler.cancel(u), e.disposalLifecycles.delete(s), l?.children?.delete(s), n(), s.children?.forEach(e => {
                                e.dispose(t)
                            }), t && e.store.set(u, !0))
                        }
                    },
                    c = () => {
                        0 === o && s.dispose(!0)
                    };

                function d() {
                    if (a) return;
                    0 == o++ && (0 === e.imperativeReadDepth && e.autoDisposeScheduler.cancel(u), i = l?.retain());
                    let n = !0;
                    return () => {
                        !n || (n = !1, 0 == --o && (i?.(), i = void 0, a || e.autoDisposeScheduler.schedule(u, t, c)))
                    }
                }
                return u.onMount = d, null != l && (l.children = l.children ?? new Set, l.children.add(s)), e.disposalLifecycles.add(s), e.autoDisposeScheduler.schedule(u, t, c), s
            },
            c: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if ("boolean" == typeof e) return e ? 0 : 1 / 0;
                if (!Number.isFinite(e) || e < 0) throw RangeError("autoDispose must be a boolean or a finite, nonnegative delay in milliseconds");
                return e
            }
        })
    }),
    AvFJ: (function(e, t, n) {
        let r = new WeakMap,
            l = new WeakMap,
            i = new WeakMap,
            u = new WeakMap,
            a = new WeakMap,
            o = new WeakMap,
            s = 0;

        function c(e, t) {
            let n = a.get(t),
                i = o.get(e.debugEntries);
            if (null != n && null != i && i.node !== e && i.cachedBindings !== n.deref() || e.debugEntries.has(t) || (e.debugEntries.add(t), !l.get(e.store)?.has(e.debugEntries))) return;
            let u = r.get(e.store);
            u?.entries != null && (u.entries.add(t), f(u))
        }

        function d(e, t) {
            let n = r.get(e.store),
                l = !1;
            for (let r of t) e.debugEntries.delete(r), l = (n?.entries?.delete(r) ?? !1) || l;
            l && n?.entries != null && f(n)
        }

        function f(e) {
            for (let t of (e.version += 1, e.listeners)) t()
        }
        let h = new WeakMap;
        n.d(t, {}, {
            a: function(e) {
                d(e, e.debugEntries)
            },
            b: function(e, t) {
                let n = u.get(t);
                if (null == n) return;
                u.delete(t), d(e, n);
                let r = e.parent?.retainedScopeEntries.get(e.token)?.get(e.key)?.node;
                null != r && r !== e && r.familyBindings === e.familyBindings && d(r, n)
            },
            c: function(e, t) {
                h.get(e)?.listeners.forEach(e => e(t))
            },
            d: function(e, t, n, r) {
                if (r?.debugLabel == null) return;
                let l = i.get(t);
                if (null == l && (s += 1, l = {
                        atom: t,
                        familyKey: r.familyKey,
                        id: s,
                        kind: n,
                        label: r.debugLabel,
                        scopeKey: e.key,
                        scopeName: e.token.__scopeBrand,
                        writeValue: r.writeValue
                    }, i.set(t, l), ("derived" === n || "external" === n || "query" === n || "mutation" === n) && a.set(l, new WeakRef(e.cachedBindings)), null != r.familyMember)) {
                    let e = u.get(r.familyMember);
                    null == e && (e = new Set, u.set(r.familyMember, e)), e.add(l)
                }
                c(e, l)
            },
            e: function(e, t) {
                let n = u.get(t);
                if (null != n)
                    for (let t of n) c(e, t)
            },
            f: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                    n = function(e) {
                        let t = l.get(e);
                        if (null != t) return t;
                        let n = new Set;
                        return l.set(e, n), n
                    }(e.store),
                    i = r.get(e.store),
                    u = i?.entries?.size,
                    s = o.get(t.debugEntries)?.cachedBindings;
                o.set(t.debugEntries, {
                    node: t,
                    cachedBindings: e.cachedBindings
                });
                let c = !1;
                if (s !== e.cachedBindings)
                    for (let n of t.debugEntries) {
                        let r = a.get(n);
                        null != r && r.deref() !== e.cachedBindings && (t.debugEntries.delete(n), c = (i?.entries?.delete(n) ?? !1) || c)
                    }
                if (!n.has(e.debugEntries)) {
                    for (let r of (n.add(t.debugEntries), e.debugEntries)) t.debugEntries.add(r), i?.entries?.add(r);
                    e.debugEntries = t.debugEntries
                }
                i?.entries != null && (c || i.entries.size !== u) && f(i)
            },
            g: function(e) {
                if (l.get(e.store)?.delete(e.debugEntries) !== !0) return;
                o.delete(e.debugEntries);
                let t = r.get(e.store);
                if (t?.entries == null) return;
                let n = !1;
                for (let r of e.debugEntries) n = t.entries.delete(r) || n;
                n && f(t)
            },
            h: function(e, t, n) {
                e.set(t, n)
            }
        })
    }),
    UQAX: (function(e, t, n) {
        var r = n("AvFJ"),
            l = n("iwK1"),
            i = n("fbKo"),
            u = n("m4Vs"),
            a = n("vMlG");
        n.d(t, {}, {
            a: function(e, t, n) {
                return function e(t, n, o, s) {
                    let c, d = (0, i.k)("cached", t, (e, t) => {
                            let r = (0, u.a)(),
                                l = (0, i.d)(l => n((0, i.h)(t, e, l, o, r)), s?.isEqual);
                            return (0, i.y)(e, l), l
                        }, (e, t) => {
                            (0, r.d)(t, e, "derived", {
                                debugLabel: d.debugLabel
                            })
                        }),
                        f = Object.assign(d, {
                            createSubscriberAtom: (e, t) => l.a.createSubscriberAtom(d.resolve(e, t)),
                            [a.e]: r => o?.enabled === !1 || r.enabled ? f : (null == c && ((c = e(t, n, r, s)).debugLabel = f.debugLabel), c)
                        });
                    return f
                }(e, t, void 0, n)
            }
        })
    }),
    Nmf8: (function(e, t, n) {
        var r = n("KoFQ"),
            l = n("AvFJ"),
            i = n("fbKo"),
            u = n("PSDF"),
            a = n("vMlG");
        n.d(t, {}, {
            a: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readable-family";
                return Object.assign(e, {
                    kind: t,
                    read(t, n, r, l, u, o) {
                        let s = e[a.d](t, n, r);
                        return null != s.disposal && null != l && l(s.disposal.atom), (0, i.z)(t, n, s.value, l, u, o)
                    }
                })
            },
            b: function(e, t, n) {
                let o = (0, r.c)(n?.autoDispose),
                    s = {
                        [a.b](t, r, l) {
                            let a = t.token === e ? t : (0, i.C)(t, r, e);
                            return (0, u.e)(a, s, (0, i.r)(l, n))
                        },
                        resolve: (e, t, n) => s[a.d](e, t, n).value,
                        [a.d](a, c, d, f) {
                            let h = arguments.length >= 4 ? f : (0, i.r)(d, n),
                                p = a.token === e ? a : (0, i.C)(a, c, e),
                                g = p.familyBindings.get(s);
                            null == g && (g = new Map, p.familyBindings.set(s, g));
                            let y = g.get(h);
                            if (null != y) return (0, l.e)(p, y.debugFamilyMember), y;
                            let b = (0, i.c)(c, e);
                            b.set(e.id, p);
                            let v = {},
                                m = g,
                                w = 1 / 0 === o ? void 0 : (0, r.b)(p, o, () => {
                                    m.get(h)?.disposal === w && (0, u.e)(p, s, h)
                                }),
                                k = t(d, {
                                    ...(0, i.f)(p, b, d, s.debugLabel, v, w),
                                    scope: (0, i.g)(e, b, p)
                                }),
                                C = {
                                    cacheKey: h,
                                    debugFamilyMember: v,
                                    owner: n?.owner?.(d),
                                    value: k
                                };
                            if (null != w && (C.disposal = w), g.set(h, C), null != C.owner) {
                                let e = p.familyKeysByOwner.get(C.owner);
                                null == e && (e = new Map, p.familyKeysByOwner.set(C.owner, e));
                                let t = e.get(s);
                                null == t && (t = new Set, e.set(s, t)), t.add(h)
                            }
                            return C
                        },
                        scope: e
                    };
                return s
            }
        })
    }),
    tyzk: (function(e, t, n) {
        var r = n("KoFQ");
        n.d(t, {}, {
            a: function(e, t) {
                return (0, r.c)(t?.retain?.autoDispose), {
                    __scopeBrand: e,
                    getKey: t?.key,
                    id: Symbol(),
                    parent: t?.parent,
                    retain: t?.retain
                }
            }
        })
    }),
    jwtq: (function(e, t, n) {
        var r = n("UQAX"),
            l = n("Nmf8");
        n.d(t, {}, {
            a: function(e, t, n) {
                let i = (0, l.b)(e, l => (0, r.a)(e, e => t(l, e), {
                    isEqual: n?.isEqual
                }), {
                    ...n,
                    autoDispose: n?.autoDispose ?? 6e4
                });
                return (0, l.a)(i)
            },
            b: function(e, t, n, r) {
                let i = (0, l.b)(e, (e, l) => {
                    let {
                        externalSignal: i
                    } = l;
                    return i("function" == typeof t ? n => {
                        let {
                            scope: r
                        } = n;
                        return t(e, {
                            get: r.get,
                            get queryClient() {
                                return r.queryClient
                            },
                            scope: r
                        })
                    } : t, t => n(e, t), {
                        isEqual: r?.isEqual
                    })
                }, r);
                return (0, l.a)(i)
            },
            c: function(e, t, n, r) {
                let i = (0, l.b)(e, (e, r) => {
                    let {
                        signal: l
                    } = r;
                    return l(n => {
                        let {
                            scope: r
                        } = n;
                        return "function" == typeof t ? t(e, {
                            get: r.get,
                            get queryClient() {
                                return r.queryClient
                            },
                            scope: r
                        }) : t
                    }, n)
                }, r);
                return (0, l.a)(i, "signal-family")
            }
        })
    }),
    hffr: (function(e, t, n) {
        var r = n("AvFJ"),
            l = n("fbKo"),
            i = n("XNFm");
        n.d(t, {}, {
            a: function(e, t, n, i) {
                let u = (0, l.k)("cached", e, (r, u) => (0, l.e)(e, r, u, e => "function" == typeof t ? t(e) : t, n, i?.isEqual), (e, t) => {
                    (0, r.d)(t, e, "external", {
                        debugLabel: u.debugLabel
                    })
                });
                return u
            },
            b: function(e, t, n) {
                let u = (0, l.k)("signal", e, (r, u) => {
                    let a = (0, l.m)(n => "function" == typeof t ? t((0, l.l)(e, u, r, n)) : t, n?.isEqual, n?.getServerSnapshot),
                        o = n?.onMount;
                    return null != o && ((0, l.y)(r, a), a.onMount = t => (0, i.d)(r.store, () => o(e => {
                        t(e)
                    }, (0, l.g)(e, u, r, {
                        observeWatch: i.b
                    }))) ?? void 0), a
                }, (e, t) => {
                    (0, r.d)(t, e, "signal", {
                        debugLabel: u.debugLabel,
                        writeValue: n => {
                            (0, r.h)(t.store, e, n)
                        }
                    })
                });
                return u
            }
        })
    }),
    J6iR: (function(e, t, n) {
        let r = new WeakMap,
            l = new WeakMap,
            i = new WeakSet,
            u = new WeakMap;

        function a(e) {
            return "idle" === e.state.fetchStatus ? void 0 : e.promise
        }

        function o(e) {
            return (u.get(e) ?? 0) > 0
        }
        n.d(t, {}, {
            a: function(e) {
                null != e && r.set(e, "independent")
            },
            b: function(e, t) {
                let n = e.behavior;
                e.behavior = {
                    onFetch(e, r) {
                        let u = t;
                        i.has(r) ? u = "independent" : o(r) && (u = "reactive"), n?.onFetch(e, r);
                        let s = e.fetchFn;
                        e.fetchFn = () => {
                            let e = a(r);
                            return null != e && l.set(e, u), s()
                        }
                    }
                }
            },
            c: a,
            d: function(e) {
                return null == e ? void 0 : r.get(e)
            },
            e: function(e, t) {
                let n = e.getQueryCache().find({
                    exact: !0,
                    queryKey: t
                });
                if (null == n) return;
                let r = a(n);
                return null == r ? void 0 : l.get(r)
            },
            f: o,
            g: function(e, t) {
                null == e || r.has(e) || r.set(e, t)
            },
            h: function(e) {
                let t = u.get(e) ?? 0;
                return u.set(e, t + 1), {
                    hadMountedReader: t > 0,
                    unmount() {
                        let t = (u.get(e) ?? 1) - 1;
                        t > 0 ? u.set(e, t) : u.delete(e)
                    }
                }
            },
            i: function(e, t) {
                let n = i.has(e);
                i.add(e);
                try {
                    return t()
                } finally {
                    n || i.delete(e)
                }
            }
        })
    }),
    iwK1: (function(e, t, n) {
        let r, l;
        n.d(t, {
            a: () => q
        });
        let i = {
                suspense: !1,
                throwOnError: void 0
            },
            u = new WeakMap,
            a = new WeakMap,
            o = new WeakSet,
            s = new WeakMap,
            c = new WeakSet;

        function d(e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null != r || null != l) return e();
            l = t;
            try {
                return e()
            } finally {
                r = void 0, l = void 0
            }
        }

        function f(e, t) {
            if (null != r) return e(r);
            if (null != l) return t.connect = t.connect && l, r = t, e(t);
            r = t;
            try {
                return e(t)
            } finally {
                r = void 0
            }
        }

        function h(e, t) {
            return o.has(e) || "object" == typeof t && null != t && s.get(e)?.has(t) === !0
        }

        function p(e, t) {
            return "object" == typeof t && null != t && h(e, t) ? f(n => {
                n.didReadQueryResult = !0;
                let r = u.get(t)?.getCurrentSnapshot(n);
                return o.has(e) || null == r || s.get(e)?.add(r), r ?? t
            }, r ?? {
                connect: !0,
                token: {}
            }) : t
        }

        function g(e) {
            if ("object" == typeof e && null != e) return u.get(e)
        }

        function y(e) {
            s.set(e, null)
        }

        function b(e, t) {
            "object" == typeof t && null != t && u.has(t) ? s.set(e, new WeakSet([t])) : s.set(e, null)
        }

        function v(e, t) {
            let n = u.get(e),
                r = new Proxy(n?.result ?? e, {
                    get(n, r, l) {
                        if ("then" !== r) return t(r), "promise" === r && t("data"), Reflect.get(e, r, l)
                    }
                });
            if (null != n) {
                let l = e,
                    i = r;
                u.set(r, {
                    ...n,
                    getCurrentSnapshot: e => {
                        let r = n.getCurrentSnapshot(e);
                        return r !== l && (l = r, i = v(r, t)), i
                    },
                    snapshot: r
                })
            }
            return r
        }

        function m(e, t) {
            let n = a.get(e);
            if (null != n) return n.value;
            let r = "function" == typeof t ? t() ?? "all" : t;
            return a.set(e, {
                value: r
            }), r
        }
        var w = n("ouEa"),
            k = n("WWxl");

        function C(e, t, n, r, l, i, u) {
            return !!e || (null == l ? null != n || !Object.is(t, r) : !!(null == n || S(n, l)) || n.result !== l.result && function(e, t, n, r) {
                if ("all" === r || t.notifyOnError && Reflect.get(e, "error") !== Reflect.get(t.result, "error")) return !0;
                let l = r ?? n;
                if (null == r && 0 === n.size) return !0;
                for (let n of l)
                    if (Reflect.get(e, n) !== Reflect.get(t.result, n)) return !0;
                return !1
            }(n.result, l, i, u ?? l.getChangeProperties()))
        }

        function S(e, t) {
            return e.behavior.suspense !== t.behavior.suspense || !Object.is(e.behavior.throwOnError, t.behavior.throwOnError)
        }
        class E {
            readAtom;
            currentResults;
            completedResults;
            get = e => {
                if (null == this.readAtom) throw Error("Query result tracker read outside atom evaluation");
                let t = this.readAtom(e),
                    n = h(e, t),
                    r = n ? p(e, t) : t;
                return "object" == typeof r && null != r && u.has(r) && (null == this.currentResults && (this.currentResults = new WeakMap), this.currentResults.set(r, n && !1 !== this.currentResults.get(r))), r
            };
            constructor() {
                c.add(this.get)
            }
            includes(e) {
                return "object" == typeof e && null != e && this.completedResults?.get(e) === !0
            }
            read(e, t) {
                let n = this.readAtom,
                    r = this.currentResults;
                this.readAtom = e, this.currentResults = void 0;
                try {
                    return t(this.get)
                } finally {
                    this.completedResults = this.currentResults, this.readAtom = n, null != n && (this.currentResults = r)
                }
            }
        }
        let q = {
            cacheChangeProperties(e, t) {
                m(e, t)
            },
            createAtomReadTracker: () => new E,
            createSnapshot: function e(t, n) {
                let r = n.trackResult(t),
                    l = new Proxy(t, {
                        get(e, t, n) {
                            if ("then" !== t) return Reflect.get(r, t, n)
                        }
                    }),
                    a = t,
                    o = l;
                return u.set(l, {
                    behavior: n.getBehavior?.(t) ?? i,
                    getChangeProperties: () => m(t, n.notifyOnChangeProps),
                    getCurrentSnapshot: t => {
                        let r = n.getCurrentResult(a, t);
                        return r !== a && (a = r, o = e(r, n)), o
                    },
                    notifyOnError: n.notifyOnError,
                    result: t,
                    snapshot: l
                }), l
            },
            createSnapshotView: function e(t, n) {
                let r = u.get(t);
                if (null == r) return {
                    ...t,
                    ...n
                };
                let l = (e, t, r) => Reflect.has(n, t) ? Reflect.get(n, t) : Reflect.get(e, t, r),
                    i = new Proxy(r.result, {
                        get: l
                    }),
                    a = new Proxy(t, {
                        get: (e, t, n) => l(e, t, n)
                    }),
                    o = t,
                    s = a;
                return u.set(a, {
                    ...r,
                    getCurrentSnapshot: t => {
                        let l = r.getCurrentSnapshot(t);
                        return l !== o && (s = e(o = l, n)), s
                    },
                    result: i,
                    snapshot: a
                }), a
            },
            createSubscriberAtom: function(e) {
                let t = new Set,
                    n = e => {
                        t.add(e)
                    },
                    r = (0, k.b)(e, t => {
                        let r = h(e, t) ? g(t) : void 0;
                        return null == r ? {
                            isCurrentQueryResult: !1,
                            value: t
                        } : {
                            isCurrentQueryResult: !0,
                            value: v(r.snapshot, n)
                        }
                    }, (e, n) => e.isCurrentQueryResult === n.isCurrentQueryResult && !C(!1, e.value, e.isCurrentQueryResult ? g(e.value) : void 0, n.value, n.isCurrentQueryResult ? g(n.value) : void 0, t)),
                    l = (0, w.a)(e => {
                        let t = e(r);
                        return b(l, t.isCurrentQueryResult ? t.value : void 0), t.value
                    });
                return y(l), l
            },
            createSubscriberStore: function(e, t, n) {
                let r;
                if (!o.has(e) && !s.has(e)) return {
                    getSnapshot: t,
                    subscribe: n
                };
                let l = () => {
                        r?.()
                    },
                    i = () => (function(e, t, n) {
                        let r, l, i, u, a, s, c = new Set,
                            d = {
                                connect: !1,
                                token: {}
                            },
                            y = {
                                connect: !0,
                                token: {}
                            },
                            b = !1,
                            m = !1,
                            w = !1,
                            k = 0;

                        function E(e) {
                            if (f(() => q(!1), e), m) throw u;
                            if (!b) throw Error("Missing subscriber snapshot");
                            return i
                        }

                        function q(n) {
                            try {
                                let u = p(e, t()),
                                    o = h(e, u) ? g(u) : void 0,
                                    d = null != o && (s?.result !== o.result || l?.result !== o.result),
                                    f = n && d ? o.getChangeProperties() : void 0,
                                    y = n && (w && C(!1, a, s, u, o, c, f) || b && C(m, r, l, u, o, c, f) || !w && !b);
                                return m = !1, null == o ? i = u : (!b || null == l || S(l, o) || l?.result !== o.result) && (i = o.snapshot), r = u, l = o, b = !0, y
                            } catch (t) {
                                let e = n && (w || !b || !m || !Object.is(u, t));
                                return m = !0, u = t, e
                            }
                        }
                        return {
                            checkForUpdates: function(e) {
                                e || (y.token = {}, y.didReadQueryResult = !1, y.errorValidation = void 0);
                                let t = f(() => q(!0), y);
                                return t && (k += 1), t
                            },
                            createRender: function() {
                                let t, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    u = d;
                                if (i && !0 === u.didReadQueryResult && (d = {
                                        connect: !1,
                                        token: {}
                                    }), !o.has(e) && (!b || null == l)) return;
                                let h = {
                                    connect: !1,
                                    token: {}
                                };
                                i && (h.errorValidation = u.errorValidation, y.errorValidation = u.errorValidation);
                                let p = new Set,
                                    g = r,
                                    m = l,
                                    C = -1,
                                    S = !1,
                                    M = e => {
                                        (S ? c : p).add(e)
                                    };
                                return {
                                    commit: () => {
                                        let e = !1;
                                        for (let t of p) e = e || !c.has(t), c.add(t);
                                        S = !0, s = m, a = g, w = !0, h.connect = !0, f(() => q(e), h) && (k += 1, n())
                                    },
                                    getSnapshot: () => (C !== k && (t = E(h), y.errorValidation = h.errorValidation, g = r, m = l, C = k), t),
                                    track: e => null == m ? e : v(m.snapshot, M)
                                }
                            },
                            getSnapshot: function() {
                                return E(d)
                            }
                        }
                    })(e, t, l),
                    u = o.has(e) ? i() : void 0;
                return {
                    createRender: function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return u?.createRender(e)
                    },
                    getSnapshot: () => {
                        if (null != u) return u.getSnapshot();
                        let n = d(t, !1);
                        return h(e, n) ? (u = i()).getSnapshot() : n
                    },
                    subscribe: l => {
                        let a = e => {
                            (u = u ?? i()).checkForUpdates(e) && l()
                        };
                        r = l;
                        let o = n(() => {
                            let n;
                            if (null != u) return void a(!1);
                            try {
                                n = t()
                            } catch {
                                l();
                                return
                            }
                            h(e, n) ? a(!1) : l()
                        });
                        return null != u && a(!0), () => {
                            r === l && (r = void 0), o()
                        }
                    }
                }
            },
            getCurrentAtomValue: p,
            getMetadata: g,
            isCurrentQueryResultReader: e => c.has(e),
            needsSubscriberAtom: (e, t) => h(e, t),
            markDerivedAtom: y,
            markAtom(e) {
                o.add(e)
            },
            recordDerivedQueryResult: b,
            withCurrentRead: d
        }
    }),
    ns1t: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV");
        let i = (0, n("zd8w").createContext)(!1);
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, l.c)(2),
                    {
                        children: u
                    } = e;
                return n[0] !== u ? (t = (0, r.jsx)(i, {
                    value: !0,
                    children: u
                }), n[0] = u, n[1] = t) : t = n[1], t
            },
            b: i
        })
    }),
    PSDF: (function(e, t, n) {
        var r = n("AvFJ"),
            l = n("vMlG");

        function i(e, t) {
            var n;
            "object" == typeof(n = t) && null != n && l.a in n && "function" == typeof n[l.a] && t[l.a](e)
        }

        function u(e, t, n) {
            let l = e.familyBindings.get(t),
                u = l?.get(n);
            if (null == l || null == u) return !1;
            l.delete(n), 0 === l.size && e.familyBindings.delete(t);
            let a = e.familyKeysByOwner.get(u.owner),
                o = a?.get(t);
            return o?.delete(n), o?.size === 0 && a?.delete(t), a?.size === 0 && e.familyKeysByOwner.delete(u.owner), u.disposal?.dispose(), i(e, u.value), (0, r.b)(e, u.debugFamilyMember), !0
        }
        n.d(t, {}, {
            a: function(e, t) {
                return null == t ? 0 : function e(t, n) {
                    let r = 0,
                        l = t.familyKeysByOwner.get(n);
                    if (null != l)
                        for (let [e, i] of l)
                            for (let l of i) Object.is(t.familyBindings.get(e)?.get(l)?.owner, n) && (u(t, e, l), r += 1);
                    for (let l of t.retainedScopeEntries.values())
                        for (let {
                                node: t
                            }
                            of l.values()) r += e(t, n);
                    return r
                }(e.node, t)
            },
            b: i,
            c: function(e, t, n) {
                return t[l.b](e.node, e.chain, n)
            },
            d: function(e, t) {
                let n = e.node;
                for (; null != n.parent;) n = n.parent;
                return function e(t, n) {
                    let r = 0;
                    for (let e of t.familyBindings.keys()) u(t, e, n) && (r += 1);
                    for (let l of t.retainedScopeEntries.values())
                        for (let {
                                node: t
                            }
                            of l.values()) r += e(t, n);
                    return r
                }(n, t)
            },
            e: u
        })
    }),
    fbKo: (function(e, t, n) {
        n.d(t, {
            a: () => w,
            b: () => function e(t) {
                for (let e of ((0, X.a)(t), (0, X.g)(t), t.disposalLifecycles)) e.dispose();
                for (let e of t.familyBindings.values())
                    for (let n of e.values())(0, N.b)(t, n.value);
                for (let n of t.retainedScopeEntries.values())
                    for (let r of n.values()) t.autoDisposeScheduler.cancel(r), e(r.node);
                t.retainedScopeEntries.clear()
            },
            c: () => q,
            d: () => f,
            e: () => _,
            f: () => et,
            g: () => P,
            h: () => I,
            i: () => W,
            j: () => K,
            k: () => H,
            l: () => z,
            m: () => d,
            n: () => N.a,
            o: () => N.c,
            p: () => N.d,
            q: () => h,
            r: () => Y,
            s: () => G,
            t: () => m,
            u: () => S,
            v: () => v,
            w: () => C,
            x: () => E,
            y: () => c,
            z: () => D,
            A: () => x,
            B: () => R,
            C: () => M,
            D: () => p,
            E: () => V,
            F: () => T
        });
        var r = n("ouEa"),
            l = n("WWxl"),
            i = n("iwK1"),
            u = n("PKjX"),
            a = n("wFEO"),
            o = n("oFsh");
        let s = new WeakMap;

        function c(e, t) {
            e.imperativeReadAtoms.add(t)
        }

        function d(e, t, n) {
            let i = (0, l.a)(e),
                u = (0, r.a)(n ?? e);
            return i.read = e => e(a.c) ? e(u) : e(i), null == t || (i.write = function(e, n, r) {
                let l = e(this),
                    i = "function" == typeof r ? r(l) : r;
                Object.is(l, i) || t(l, i) || n(this, i)
            }), i
        }

        function f(e, t) {
            let n = i.a.createAtomReadTracker();
            if (null == t) {
                let t = (0, r.a)(r => {
                    let l = n.read(r, e);
                    return i.a.recordDerivedQueryResult(t, n.includes(l) ? l : void 0), l
                });
                return i.a.markDerivedAtom(t), t
            }
            let u = (0, r.a)(t => {
                    let r = n.read(t, e);
                    return {
                        isCurrentQueryResult: n.includes(r),
                        value: r
                    }
                }),
                a = (0, l.b)(u, (e, n) => null != n && t(n.value, e.value) ? Object.is(n.value, e.value) ? n.isCurrentQueryResult === e.isCurrentQueryResult ? n : e : n.isCurrentQueryResult ? {
                    isCurrentQueryResult: !1,
                    value: n.value
                } : n : e),
                o = (0, r.a)(e => {
                    let t = e(a);
                    return i.a.recordDerivedQueryResult(o, t.isCurrentQueryResult ? t.value : void 0), t.value
                });
            return i.a.markDerivedAtom(o), o
        }

        function h(e, t, n) {
            return i.a.withCurrentRead(() => (function(e, t, n) {
                if (null != n) {
                    let e = n(t);
                    return i.a.isCurrentQueryResultReader(n) ? e : i.a.getCurrentAtomValue(t, e)
                }
                let r = s.get(e.store);
                if (!e.imperativeReadAtoms.has(t) || r?.has(t)) return i.a.getCurrentAtomValue(t, e.store.get(t));
                null == r && (r = new Set, s.set(e.store, r)), r.add(t);
                let l = [],
                    u = e;
                for (; null != u;) u.imperativeReadDepth += 1, l.push(u), u = u.parent;
                try {
                    let n = (0, o.b)(e.store, t, () => {});
                    try {
                        return i.a.getCurrentAtomValue(t, e.store.get(t))
                    } finally {
                        n()
                    }
                } finally {
                    for (let e of (r.delete(t), l)) e.imperativeReadDepth -= 1
                }
            })(e, t, n))
        }

        function p(e, t, n) {
            (0, u.f)(e, t, n)
        }
        var g = n("m4Vs"),
            y = n("XNFm"),
            b = n("vMlG");

        function v(e) {
            return "object" == typeof e && null != e && "atom" in e && "store" in e
        }

        function m(e) {
            return "object" == typeof e && null != e && b.e in e && "function" == typeof e[b.e]
        }

        function w(e, t) {
            return null != t && m(e) ? e[b.e](t) : e
        }

        function k(e, t) {
            return e?.enabled === !1 ? e : t ?? e
        }

        function C(e) {
            return "object" == typeof e && null != e && "kind" in e && ("readable-family" === e.kind || "signal-family" === e.kind)
        }

        function S(e) {
            return v(e) && "set" in e
        }

        function E(e) {
            return "object" == typeof e && null != e && "kind" in e && "signal-family" === e.kind
        }

        function q(e, t) {
            let n = new Map,
                r = t.parent;
            for (; null != r;) {
                let t = e.get(r.id);
                if (null == t) break;
                n.set(r.id, t), r = r.parent
            }
            return n
        }

        function M(e, t, n) {
            let r = e;
            for (; null != r;) {
                if (r.token === n) return r;
                r = r.parent
            }
            return R(t, n)
        }

        function R(e, t) {
            let n = e.get(t.id);
            if (null == n) throw Error("Missing scope instance");
            return n
        }

        function O(e, t, n, r, l) {
            return function(i, u, a) {
                if (v(i)) return D(t, e, i, n, k(r, 2 == arguments.length && m(i) ? u : void 0), l);
                if (m(i) && 2 == arguments.length) {
                    let a = M(t, e, i.scope),
                        o = w(i, k(r, u)),
                        s = l?.(o, a, e, n) ?? o.resolve(a, e);
                    return h(a, s, n)
                }
                if (void 0 !== u || arguments.length >= 2) {
                    let o = M(t, e, i.scope);
                    if (C(i)) return i.read(o, e, u, n, k(r, a), l);
                    let s = i[b.d](o, e, u);
                    return null != s.disposal && null != n && n(s.disposal.atom), s.value
                }
                let o = M(t, e, i.scope),
                    s = w(i, k(r, a)),
                    c = l?.(s, o, e, n) ?? s.resolve(o, e);
                return h(o, c, n)
            }
        }

        function D(e, t, n, r, l, u) {
            if (v(n)) {
                let a = w(n, l),
                    o = u?.(a, e, t, r) ?? a.atom;
                if (null != r && a.store === e.store) {
                    let t = a[b.c];
                    return null != t && r(t.atom), h(e, o, r)
                }
                return o === a.atom ? a.get() : i.a.getCurrentAtomValue(o, a.store.get(o))
            }
            let a = M(e, t, n.scope),
                o = w(n, l),
                s = u?.(o, a, t, r) ?? o.resolve(a, t);
            return h(a, s, r)
        }
        var A = n("NxBK"),
            Q = n("J6iR");

        function j(e, t, n, r) {
            let l, i;
            return "infinite" === t.queryKind ? function(e, t, n, r) {
                let l = M(e.node, e.chain, t.scope),
                    i = q(e.chain, t.scope);
                if (i.set(t.scope.id, l), null == l.queryClient) throw Error("Missing query client");
                let u = (0, a.a)(l.queryClient, n),
                    o = t.getOptions(I(i, l, n, {
                        enabled: !1
                    }, r)),
                    s = () => {
                        let e = u.defaultQueryOptions(o),
                            t = u.getQueryCache().build(u, e),
                            n = "function" == typeof e.staleTime ? e.staleTime(t) : e.staleTime,
                            r = t.isStaleByTime(n),
                            l = u.fetchInfiniteQuery(o);
                        return r && (0, Q.a)((0, Q.c)(t)), l
                    };
                return {
                    queryKey: o.queryKey,
                    async cancel(e, t) {
                        await u.cancelQueries({
                            ...e,
                            queryKey: o.queryKey
                        }, t)
                    },
                    getData: () => u.getQueryData(o.queryKey),
                    getOptions: () => o,
                    fetch: s,
                    getOrFetch: s,
                    async invalidate(e, t) {
                        await u.invalidateQueries({
                            ...e,
                            queryKey: o.queryKey
                        }, t)
                    },
                    setData: (e, t) => u.setQueryData(o.queryKey, e, t)
                }
            }(e, t, n, r) : (l = function(e, t, n, r) {
                let l = M(e.node, e.chain, t.scope),
                    i = q(e.chain, t.scope);
                if (i.set(t.scope.id, l), null == l.queryClient) throw Error("Missing query client");
                return {
                    queryClient: (0, a.a)(l.queryClient, n),
                    queryOptions: t.getOptions(I(i, l, n, {
                        enabled: !1
                    }, r))
                }
            }(e, t, n, r), i = async () => {
                let e = l.queryClient.defaultQueryOptions(l.queryOptions),
                    t = l.queryClient.getQueryCache().build(l.queryClient, e),
                    n = "function" == typeof e.staleTime ? e.staleTime(t) : e.staleTime,
                    r = t.isStaleByTime(n);
                (0, Q.b)(e, "independent");
                let i = (0, Q.i)(t, () => l.queryClient.fetchQuery(e));
                r && (0, Q.a)((0, Q.c)(t));
                let u = r ? t.promise : void 0;
                for (; null != u;) try {
                    await u;
                    break
                } catch (n) {
                    let e = t.promise;
                    if (!(n instanceof A.a) || !n.silent || null == e || e === u) break;
                    (0, Q.a)((0, Q.c)(t)), i = i.catch(t => {
                        if (t instanceof A.a && t.silent) return e;
                        throw t
                    }), u = e
                }
                return i
            }, {
                queryKey: l.queryOptions.queryKey,
                async cancel(e, t) {
                    await l.queryClient.cancelQueries({
                        ...e,
                        queryKey: l.queryOptions.queryKey
                    }, t)
                },
                getData: () => l.queryClient.getQueryData(l.queryOptions.queryKey),
                getOptions: () => l.queryOptions,
                fetch: i,
                getOrFetch: i,
                async invalidate(e, t) {
                    await l.queryClient.invalidateQueries({
                        ...e,
                        queryKey: l.queryOptions.queryKey
                    }, t)
                },
                setData: (e, t) => l.queryClient.setQueryData(l.queryOptions.queryKey, e, t)
            })
        }

        function K(e, t, n) {
            return {
                async cancel(r, l, i, u) {
                    let [a, o, s] = F(e, r, l, i, u);
                    await j(e, a, t, n).cancel(o, s)
                },
                getData: (r, l) => j(e, B(e, r, l), t, n).getData(),
                getOptions: (r, l) => j(e, B(e, r, l), t, n).getOptions(),
                fetch: async (r, l) => j(e, B(e, r, l), t, n).fetch(),
                getOrFetch: async (r, l) => j(e, B(e, r, l), t, n).getOrFetch(),
                async invalidate(r, l, i, u) {
                    let [a, o, s] = F(e, r, l, i, u);
                    await j(e, a, t, n).invalidate(o, s)
                },
                setData(r, l, i, u) {
                    let [a, o, s] = F(e, r, l, i, u);
                    return j(e, a, t, n).setData(o, s)
                },
                snapshot: (r, l) => j(e, B(e, r, l), t, n)
            }
        }

        function B(e, t, n) {
            return C(t) ? t.resolve(e.node, e.chain, n) : t
        }

        function F(e, t, n, r, l) {
            return C(t) ? [B(e, t, n), r, l] : [B(e, t), n, r]
        }

        function x(e, t, n, r) {
            let l = M(e, t, n);
            return r?.(l.contextVersionAtom), l.value
        }

        function W(e) {
            return L(e)
        }

        function L(e) {
            let t = null == e.parent ? void 0 : L(e.parent);
            return null == t ? e.value : {
                ...t,
                ...e.value
            }
        }

        function P(e, t, n) {
            let {
                readAtom: r,
                inheritedQueryReadOptions: l,
                resolveSubscriberAtom: i,
                observeWatch: u
            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o = null == r ? L(n) : void 0, s = {
                chain: t,
                get: O(t, n, r, l, i),
                getOwnValue: e => x(n, t, e, r),
                node: n,
                query: K({
                    chain: t,
                    node: n
                }, r, i),
                get queryClient() {
                    if (null == n.queryClient) throw Error("Missing query client");
                    return (0, a.a)(n.queryClient, r)
                },
                scope: e,
                get value() {
                    return null == o && (null != r && function e(t, n) {
                        null != t.parent && e(t.parent, n), n(t.contextVersionAtom)
                    }(n, r), o = L(n)), o
                }
            };

            function c(e) {
                return T(s, e, u)
            }
            return s.set = function(e, r, l) {
                S(e) ? p(e.store, e.atom, r) : function(e, r, l) {
                    if (E(e)) {
                        let i = e.resolve(n, t, r);
                        p(i.store, i.atom, l);
                        return
                    }
                    let i = M(n, t, e.scope);
                    p(i.store, e.resolve(i, t), r)
                }(e, r, l)
            }, s.watch = c, s.when = function(e) {
                return V(c, e)
            }, s
        }

        function T(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, y.a)(e.node.store),
                r = (0, g.a)();
            return n(l => t(P(e.scope, e.chain, e.node, {
                readAtom: l,
                resolveSubscriberAtom: r,
                observeWatch: n
            })), e.node.store)
        }

        function V(e, t) {
            return new Promise(n => {
                let r = null,
                    l = !1;
                r = e(e => {
                    if (t(e)) {
                        if (n(), null == r) {
                            l = !0;
                            return
                        }
                        r()
                    }
                }), l && r()
            })
        }

        function z(e, t, n, r, l, i) {
            return {
                get queryClient() {
                    if (null == n.queryClient) throw Error("Missing query client");
                    return (0, a.a)(n.queryClient, r)
                },
                scope: P(e, t, n, {
                    readAtom: r,
                    inheritedQueryReadOptions: l,
                    resolveSubscriberAtom: i
                })
            }
        }

        function I(e, t, n, r, l) {
            return Object.assign(z(t.token, e, t, n, r, l), {
                get: O(e, t, n, r, l)
            })
        }

        function _(e, t, n, r, l, i, a) {
            let o = d(e => r(I(n, t, e)), i);
            return c(t, o), o.onMount = i => {
                if (null != a && t.store.get(a.atom)) return;
                let s = null == a || t.imperativeReadDepth > 0 ? void 0 : a.retain(),
                    c = (0, g.a)(),
                    d = (0, y.b)(a => {
                        let s, d = P(e, n, t, {
                                readAtom: a,
                                resolveSubscriberAtom: c,
                                observeWatch: y.b
                            }),
                            f = !0,
                            h = {
                                scope: d,
                                get: d.get,
                                get queryClient() {
                                    return d.queryClient
                                },
                                set: e => {
                                    f && ((0, u.d)(t.store) ? (0, u.f)(t.store, o, e) : i(e))
                                }
                            };
                        i(r(h));
                        let p = l(h);
                        return null != p && "then" in p ? (U(p) && (s = p), Promise.resolve(p).then(e => {
                            f ? s = e : J(e)
                        }, e => {
                            f && globalThis.dispatchEvent(new ErrorEvent("error", {
                                cancelable: !0,
                                error: e
                            }))
                        })) : s = p, () => {
                            f && (f = !1, J(s))
                        }
                    }, t.store);
                return () => {
                    d(), s?.()
                }
            }, o
        }

        function J(e) {
            if (null != e) {
                if (U(e)) return void e[Symbol.dispose]();
                e()
            }
        }

        function U(e) {
            return null != e && Symbol.dispose in e
        }
        var X = n("AvFJ"),
            N = n("PSDF");

        function G(e, t, n) {
            if (null == t.parent) return null;
            let r = R(e.chain, t.parent),
                l = r.retainedScopeEntries.get(t)?.get(n)?.node;
            if (null == l) return null;
            let i = new Map(e.chain);
            return i.set(t.id, l), P(t, i, l)
        }

        function H(e, t, n, r) {
            let l = {
                cache: e,
                resolve(e, i) {
                    let u = M(e, i, t),
                        a = "signal" === l.cache ? u.signalBindings : u.cachedBindings,
                        o = a.get(l);
                    if (void 0 !== o) return r?.(o, u), o;
                    let s = q(i, t);
                    s.set(t.id, u);
                    let c = n(u, s);
                    return a.set(l, c), r?.(c, u), c
                },
                scope: t
            };
            return l
        }

        function Y(e, t) {
            if (t?.key != null) return t.key(e);
            if (!Array.isArray(e) && !Z(e)) return e;
            let n = null != t && Z(e) && null != t.excludeFieldsFromKey ? new Set(t.excludeFieldsFromKey) : void 0;
            return JSON.stringify(function e(t, n) {
                if (Array.isArray(t)) return t.map(t => e(t));
                if (!Z(t)) return t;
                let r = {};
                for (let l of Object.keys(t).sort()) n?.has(l) || (r[l] = e(t[l]));
                return r
            }(e, n))
        }

        function Z(e) {
            if (null == e || "object" != typeof e) return !1;
            let t = Object.getPrototypeOf(e);
            return t === Object.prototype || null == t
        }
        var $ = n("KoFQ");

        function ee(e, t, n, r) {
            return (l, i) => {
                let u = (0, $.c)(i?.autoDispose),
                    a = new Map;
                return o => {
                    let s = Y(o, i);
                    if (a.has(s)) return a.get(s);
                    let c = 1 / 0 === u ? void 0 : (0, $.b)(e, u, () => {
                            a.delete(s)
                        }, r),
                        d = l(o, {
                            ...et(e, t, o, void 0, n, c ?? r),
                            scope: P(e.token, t, e)
                        });
                    return a.set(s, d), d
                }
            }
        }

        function et(e, t, n, r, l, u) {
            return {
                derived: (a, o) => {
                    let s, d = h => {
                        let p = (0, g.a)(),
                            y = f(r => (null != u && r(u.atom), a(n => {
                                let l = w(n, h),
                                    i = l[b.c];
                                return null != i && r(i.atom), r(p(l, e, t, r))
                            }, Object.assign(z(e.token, t, e, r, h, p), {
                                key: n
                            }))), o?.isEqual);
                        c(e, y), (0, X.d)(e, y, "family-derived", {
                            debugLabel: r,
                            familyKey: n,
                            familyMember: l
                        });
                        let v = Object.assign(en(e, y, u, () => i.a.createSubscriberAtom(y)), {
                            [b.e]: e => h?.enabled === !1 || e.enabled ? v : s = s ?? d(e)
                        });
                        return v
                    };
                    return d()
                },
                externalSignal: (i, a, o) => {
                    let s = _(e.token, e, t, e => "function" == typeof i ? i(Object.assign(e, {
                        key: n
                    })) : i, e => a(Object.assign(e, {
                        key: n
                    })), o?.isEqual, u);
                    return (0, X.d)(e, s, "family-external", {
                        debugLabel: r,
                        familyKey: n,
                        familyMember: l
                    }), en(e, s, u)
                },
                family: ee(e, t, l, u),
                get: O(t, e),
                signal: (i, a) => {
                    var o, s, f;
                    let g = a?.getServerSnapshot,
                        v = d(r => "function" == typeof i ? i(Object.assign(z(e.token, t, e, r), {
                            key: n
                        })) : i, a?.isEqual, null == g ? void 0 : () => g(n)),
                        m = a?.onMount;
                    return null != m && c(e, v), (null != m || null != u) && (v.onMount = r => {
                        let l = null == u || e.imperativeReadDepth > 0 ? void 0 : e.store.sub(u.atom, () => {}),
                            i = (0, y.d)(e.store, () => m?.(r, Object.assign(P(e.token, t, e, {
                                observeWatch: y.b
                            }), {
                                key: n
                            })));
                        if (null != l || null != i) return () => {
                            i?.(), l?.()
                        }
                    }), (0, X.d)(e, v, "family-signal", {
                        debugLabel: r,
                        familyKey: n,
                        familyMember: l,
                        writeValue: t => {
                            (0, X.h)(e.store, v, t)
                        }
                    }), o = e, s = v, f = u, {
                        [b.c]: f,
                        atom: s,
                        get: () => h(o, s),
                        set(e) {
                            p(o.store, s, e)
                        },
                        subscribe: e => o.store.sub(s, e),
                        store: o.store
                    }
                },
                signalFamily: (n, r, i) => ee(e, t, l, u)((e, t) => {
                    let {
                        signal: l
                    } = t;
                    return l(t => {
                        let {
                            scope: r
                        } = t;
                        return "function" == typeof n ? n(e, {
                            scope: r,
                            get: r.get,
                            get queryClient() {
                                return r.queryClient
                            }
                        }) : n
                    }, r)
                }, i)
            }
        }

        function en(e, t, n, r) {
            return {
                [b.c]: n,
                atom: t,
                createSubscriberAtom: r,
                get: () => h(e, t),
                subscribe: n => e.store.sub(t, n),
                store: e.store
            }
        }
    }),
    XNFm: (function(e, t, n) {
        let r;
        n.d(t, {
            a: () => p,
            b: () => g,
            c: () => h,
            d: () => f
        });
        var l = n("ouEa"),
            i = n("HkKI");
        let u = new WeakMap;

        function a(e, t, n) {
            var r, a;
            let s, c, d = (0, i.b)(e),
                f = d[1],
                h = (0, i.c)(d[6]),
                p = d[11],
                g = d[12],
                y = d[13],
                b = d[14],
                v = d[17],
                m = new Set,
                w = (0, l.a)(e => {
                    f.has(w) && (m.forEach(e), k.n += 1)
                }),
                k = p(d, e, w);
            k.v = void 0;
            let C = "new",
                S = !1,
                E = !1;

            function q() {
                if (null == c || n?.(q)) return;
                let e = c;
                c = void 0;
                let t = null == n ? "idle" : C;
                C = "cleanup", o(e, () => {
                    C = t, "idle" === t && S && M()
                })
            }

            function M() {
                S && (S = !1, o(R, () => g(d, e)))
            }

            function R() {
                if (!f.has(w)) return;
                if (null != n) {
                    if ("new" !== C && ("idle" !== C || n(M))) {
                        S = !0;
                        return
                    }
                    C = "running"
                }
                S = !1, E = !1, m.clear();
                let r = !0;
                try {
                    try {
                        q()
                    } catch (e) {
                        throw null == n || E || (S = !0), e
                    }
                    if (S || E) return;
                    let l = t(t => {
                        if ("cleanup" === C) return e.get(t);
                        let n = b(d, e, t);
                        if (r && (S || E)) return (0, i.d)(n);
                        try {
                            return (0, i.d)(n)
                        } finally {
                            k.d.set(t, n.n), f.get(t)?.t.add(w), r ? m.add(t) : f.has(t) && (v(d, e, w), y(d, e), g(d, e))
                        }
                    });
                    "function" == typeof l && (c = l)
                } finally {
                    if (r = !1, null != n && (C = "idle"), S ? O.add(R) : E && null != c && !f.has(w) && O.add(q), !E) {
                        for (let t of m) k.d.set(t, p(d, e, t).n);
                        v(d, e, w), y(d, e)
                    }
                }
            }
            let O = (r = e, a = h, null != (s = u.get(r)) || (s = new Set, u.set(r, s), a.f.add(() => {
                let e;
                for (let t of s) {
                    s.delete(t);
                    try {
                        t()
                    } catch (t) {
                        (e = e ?? []).push(t)
                    }
                }
                if (null != e) throw AggregateError(e)
            })), s);
            return h.m.add(w, () => {
                O.delete(q), O.add(R)
            }), h.u.add(w, () => {
                E = null != n, S = !1, O.delete(R), null != c && O.add(q)
            }), h.c.add(w, () => {
                d[3].delete(w), O.add(R)
            }), w
        }

        function o(e, t) {
            try {
                e()
            } catch (e) {
                try {
                    t()
                } catch (t) {
                    throw AggregateError([e, t])
                }
                throw e
            }
            t()
        }
        var s = n("PKjX"),
            c = n("oFsh");

        function d(e, t) {
            let n = r;
            r = e;
            try {
                return t()
            } finally {
                r = n
            }
        }

        function f(e, t) {
            let n = d(e, t);
            return "function" == typeof n ? () => d(e, n) : void 0
        }

        function h(e) {
            return d(void 0, e)
        }

        function p(e) {
            return r === e ? g : y
        }

        function g(e, t) {
            return (0, c.b)(t, a(t, n => f(t, () => e(n))), () => {})
        }

        function y(e, t) {
            return (0, c.b)(t, a(t, t => h(() => {
                let n = e(t);
                return "function" == typeof n ? () => h(n) : void 0
            }), e => (0, s.c)(t, e)), () => {})
        }
    }),
    wFEO: (function(e, t, n) {
        var r = n("suje"),
            l = n("ouEa");
        let i = (0, l.a)(!1),
            u = new WeakMap,
            a = (0, l.a)(() => new WeakMap);
        n.d(t, {}, {
            a: function(e, t) {
                if (!t?.(i)) return e;
                let n = t(a),
                    l = n.get(e);
                if (null == l) {
                    let t = e.getDefaultOptions();
                    l = new r.a({
                        defaultOptions: {
                            ...t,
                            queries: {
                                ...t.queries,
                                gcTime: 1 / 0
                            }
                        }
                    }), n.set(e, l)
                }
                return l
            },
            b: function(e, t) {
                let n = u.get(e);
                return null == n && ((n = (0, l.b)()).set(i, !0), u.set(e, n)), n.get(t)
            },
            c: i
        })
    }),
    oFsh: (function(e, t, n) {
        n.d(t, {
            a: () => o,
            b: () => a
        });
        var r = n("ouEa"),
            l = n("PKjX"),
            i = n("XNFm");
        let u = new WeakMap;

        function a(e, t, n) {
            return (u.get(e) ?? e.sub)(t, n)
        }

        function o() {
            let e = (0, r.b)(),
                t = e.sub;
            u.set(e, t);
            let n = new Map;
            return e.sub = (r, u) => {
                let a, o = n.get(u);
                if (null == o) {
                    let t = !1,
                        r = {
                            count: 0,
                            notify: () => {
                                t = !0, (0, l.c)(e, a) || a()
                            }
                        },
                        a = () => {
                            0 !== r.count && t && (t = !1, (0, i.c)(u))
                        };
                    o = r, n.set(u, o)
                }
                o.count += 1;
                let s = () => {
                    o.count -= 1, 0 === o.count && n.delete(u)
                };
                try {
                    a = t(r, o.notify)
                } catch (e) {
                    throw s(), e
                }
                let c = !0;
                return () => {
                    c && (c = !1, s(), a())
                }
            }, e
        }
    }),
    PKjX: (function(e, t, n) {
        var r = n("ouEa"),
            l = n("AvFJ");
        let i = new WeakMap;

        function u(e, t) {
            let n, u = e.node.store;
            if (i.has(u)) throw Error("Cannot start a nested Maitai signal transaction");
            let o = new Set,
                s = new Map,
                c = [],
                d = new Set,
                f = (0, r.a)(null, (n, r) => {
                    let f = {
                        callbacks: o,
                        get: e => n(e),
                        isReplaying: !1,
                        record: (e, t) => {
                            let r = s.get(e);
                            if (null != r) return void r.refresh();
                            let l = n(e),
                                i = {
                                    hasChanged: () => !Object.is(t, l),
                                    redo: () => a(u, e, l),
                                    refresh: () => {
                                        l = n(e)
                                    },
                                    undo: () => a(u, e, t)
                                };
                            s.set(e, i), c.push(i)
                        },
                        recordMutation: e => {
                            f.isReplaying || c.push({
                                ...e,
                                hasChanged: () => !0,
                                refresh: () => {}
                            })
                        },
                        set: (e, t) => {
                            (0, l.c)(u, e), r(e, t)
                        }
                    };
                    i.set(u, f);
                    try {
                        return t(e)
                    } catch (e) {
                        d.add(e), f.isReplaying = !0;
                        try {
                            for (let e of [...c].reverse()) e.undo()
                        } catch (e) {
                            d.add(e)
                        }
                        throw e
                    } finally {
                        i.delete(u)
                    }
                });
            f.debugLabel = "Maitai transaction";
            try {
                let e = u.set(f);
                n = {
                    changes: c.filter(e => e.hasChanged()),
                    value: e
                }
            } catch (e) {
                d.add(e), n = null
            }
            for (let e of o) try {
                e()
            } catch (e) {
                d.add(e)
            }
            if (null == n || d.size > 0) {
                if (1 === d.size) throw d.values().next().value;
                throw AggregateError(d)
            }
            return n
        }

        function a(e, t, n) {
            let r = i.get(e);
            if (null == r) return void e.set(t, n);
            let l = r.get(t);
            r.set(t, n), r.isReplaying || r.record(t, l)
        }
        n.d(t, {}, {
            a: function e(t, n) {
                let r = i.get(t.node.store);
                null == r ? u(t, () => e(t, n)) : (r.recordMutation({
                    redo: () => e(t, n),
                    undo: () => e(t, {
                        redo: n.undo,
                        undo: n.redo
                    })
                }), n.redo())
            },
            b: function(e, t) {
                i.has(e.node.store) ? t(e) : u(e, t)
            },
            c: function(e, t) {
                let n = i.get(e);
                return null != n && (n.callbacks.add(t), !0)
            },
            d: function(e) {
                return i.has(e)
            },
            e: u,
            f: a
        })
    }),
    m4Vs: (function(e, t, n) {
        var r = n("iwK1"),
            l = n("wFEO");
        n.d(t, {}, {
            a: function() {
                let e = new WeakMap;
                return function(t, n, i, u) {
                    let a;
                    if (u?.(l.c)) return "atom" in t ? t.atom : t.resolve(n, i);
                    let o = e.get(t);
                    if (null != o) return o;
                    let s = "atom" in t ? t.atom : t.resolve(n, i);
                    if (null == t.createSubscriberAtom) return s;
                    let c = "atom" in t ? t.store : n.store;
                    try {
                        a = c.get(s)
                    } catch {
                        return s
                    }
                    if (!r.a.needsSubscriberAtom(s, a)) return s;
                    let d = "atom" in t ? t.createSubscriberAtom() : t.createSubscriberAtom(n, i);
                    return e.set(t, d), d
                }
            }
        })
    }),
    vMlG: (function(e, t, n) {
        n.d(t, {
            a: () => a,
            b: () => l,
            c: () => u,
            d: () => i,
            e: () => r
        });
        let r = Symbol("maitai.withQueryReadOptions"),
            l = Symbol("maitai.evictFamilyMemberInternal"),
            i = Symbol("maitai.resolveFamilyMemberInternal"),
            u = Symbol("maitai.familyDisposalInternal"),
            a = Symbol("maitai.disposeFamilyValueInternal")
    }),
    Hl6a: (function(e, t, n) {
        var r = n("tyzk"),
            l = n("UQAX"),
            i = n("hffr"),
            u = n("jwtq"),
            a = n("PKjX");
        n.d(t, {
            a: () => l.a,
            b: () => u.a,
            c: () => i.a,
            d: () => a.e,
            e: () => r.a,
            f: () => i.b,
            g: () => u.c
        })
    }),
    wJ7T: (function(e, t, n) {
        let r = ["; wv", "webview", "fbav", "fb_iab", "fban", "instagram", "line/", "kakaotalk", "snapchat", "tiktok"];
        n.d(t, {}, {
            a: function(e) {
                let t = e.trim(),
                    n = /iPhone|iPad|iPod/.test(t) && !/Safari/.test(t) || /Android/.test(t) && /Version\/\d+\.\d+/.test(t) || r.some(e => t.toLowerCase().includes(e));
                return /\bAndroid\b/i.test(e) && /\bChrome\/\d/i.test(e) && !/\b(?:EdgA|SamsungBrowser|OPR|Opera|Firefox|FxiOS|HuaweiBrowser|YaBrowser|DuckDuckGo)\//i.test(e) && !n
            }
        })
    })
};