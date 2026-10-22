export const __rspack_esm_id = 109308;
export const __rspack_esm_ids = [109308];
export const __webpack_modules__ = {
    Xnl: (function(e, t, n) {
        n.d(t, {
            a: () => G,
            b: () => er,
            c: () => T.a,
            d: () => s.a,
            e: () => i.n,
            f: () => i.o,
            g: () => i.p,
            h: () => a,
            i: () => s.b,
            j: () => o.b,
            k: () => f.e,
            l: () => i.s,
            m: () => x,
            n: () => Q,
            o: () => K,
            p: () => W,
            q: () => j,
            r: () => B,
            s: () => E.c,
            t: () => r.a,
            u: () => u,
            v: () => s.c,
            w: () => ec,
            x: () => ef,
            y: () => _,
            z: () => ep,
            A: () => eo
        });
        var r = n("t"),
            l = n("Av"),
            i = n("fb");

        function u(e, t, n) {
            let r = (0, i.k)("signal", e, (r, l) => {
                let u = (0, i.m)(n => "function" == typeof t ? t((0, i.l)(e, l, r, n)) : t, n?.isEqual, n?.getServerSnapshot),
                    a = n?.onMount;
                return null != a && ((0, i.y)(r, u), u.onMount = t => a(e => {
                    t(e)
                }, (0, i.g)(e, l, r)) ?? void 0), u
            }, (e, t) => {
                (0, l.e)(t, e, "signal", {
                    debugLabel: r.debugLabel,
                    writeValue: n => {
                        (0, l.i)(t.store, e, n)
                    }
                })
            });
            return r
        }

        function a(e, t, n, r) {
            let u = (0, i.k)("cached", e, (l, u) => (0, i.e)(e, l, u, e => "function" == typeof t ? t(e) : t, n, r?.isEqual), (e, t) => {
                (0, l.e)(t, e, "external", {
                    debugLabel: u.debugLabel
                })
            });
            return u
        }
        var o = n("Nm"),
            s = n("jw"),
            d = n("ou"),
            c = n("suf"),
            f = n("J6"),
            p = n("rb"),
            g = n("iw"),
            h = n("w");
        let y = new WeakSet;

        function b(e, t, n) {
            if (y.has(n)) return;
            y.add(n);
            let r = new c.a(e, {
                    ...t.options,
                    enabled: !1,
                    queryHash: t.queryHash,
                    queryKey: t.queryKey
                }).subscribe(() => {}),
                l = n,
                i = () => {
                    let e = (0, f.c)(t),
                        n = (0, f.d)(e);
                    null == e || e === l || "independent" !== n && (null != n || (0, f.f)(t)) ? (y.delete(l), r()) : (y.delete(l), y.has(e)) ? r() : (y.add(e), l = e, e.then(i, i))
                };
            n.then(i, i)
        }

        function m(e, t, n) {
            let r = t.getCurrentQuery();
            if (!t.hasListeners() || r === n) return;
            let l = (0, f.c)(r),
                i = (0, f.d)(l);
            null != l && "independent" === i && b(e, r, l)
        }
        var v = n("D7");

        function w(e, t) {
            if (null == e) return !1;
            let n = Object.keys(t);
            if (n.length !== Object.keys(e).length) return !1;
            for (let r of n)
                if (Reflect.get(e, r) !== Reflect.get(t, r)) return !1;
            return !0
        }

        function S(e) {
            return e.suspense && null == e.staleTime ? {
                ...e,
                staleTime: 1e3
            } : e
        }

        function C(e, t) {
            return !!e?.suspense && t.isEnabled && t.isPending
        }

        function k(e, t, n) {
            if (!n.result.isError || n.result.isFetching) return !1;
            let r = e.errorValidation;
            if (r?.observer === t && r.query === n.query && Object.is(r.error, n.result.error)) return r.shouldThrow;
            let l = (0, v.t)(n.throwOnError, [n.result.error, n.query]);
            return e.errorValidation = {
                error: n.result.error,
                observer: t,
                query: n.query,
                shouldThrow: l
            }, l
        }

        function q(e, t, n, r) {
            let {
                cacheSubscriptions: l,
                getEnabledReaderOptions: i,
                getShouldSuppressStaleFetchOnEnable: u,
                isEnabledReaderMounting: a,
                shouldRetainFetchStartedAfterUnmount: o
            } = r, s = (0, d.a)(0), c = (0, d.a)(0), y = new WeakMap, v = new WeakMap, q = Symbol("evicted query result"), R = (0, d.a)(e => (0, h.a)(n(e), e)), M = (0, d.a)(() => new WeakMap), E = new WeakMap, O = e => {
                let t = e.notifyOnChangeProps;
                e._optimisticResults = "optimistic", e.notifyOnChangeProps = "all", E.set(e, t)
            }, D = (0, d.a)(() => new WeakMap), A = (0, d.a)(() => {
                let e, t, n;
                return e = new WeakMap, t = new WeakSet, n = new WeakSet, {
                    mount(r, l, i) {
                        let u = e.get(r) ?? 0,
                            a = t.has(r);
                        t.add(r);
                        let o = 0 !== u || n.has(r) || i || null == l || "reactive" === (0, f.d)(l) ? void 0 : l;
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
                let r = t(R),
                    l = S(n(t).defaultQueryOptions(e(t)));
                t(h.c) && (l.gcTime = 1 / 0);
                let i = t(M).get(r);
                if (O(l), null != i) {
                    let e = r.getQueryCache().build(r, l),
                        n = (0, f.c)(e);
                    m(r, i, e);
                    let o = "function" == typeof l.refetchOnMount ? l.refetchOnMount(e) : l.refetchOnMount,
                        s = a() && ("function" == typeof l.enabled ? l.enabled(e) : l.enabled) !== !1;
                    s && "error" === e.state.status && void 0 === e.state.data && !1 === l.retryOnMount ? i.setOptions({
                        ...l,
                        suspense: !0
                    }) : s && u(t) && !1 === o && void 0 !== e.state.data && i.setOptions({
                        ...l,
                        staleTime: "static"
                    }), i.setOptions(l);
                    let d = (0, f.c)(i.getCurrentQuery());
                    i.hasListeners() && null != d && d !== n && (0, f.g)(d, "reactive")
                }
                return l
            }), B = (0, d.a)(e => {
                let t = S(n(e).defaultQueryOptions(i(e)));
                return O(t), t
            }), j = (0, d.a)(e => {
                e(c);
                let n = e(R),
                    r = e(M).get(n);
                if (null != r) return r;
                let l = new t(n, e(Q));
                return e(M).set(n, l), l
            }), x = (0, d.a)(e => {
                let t = e(R),
                    n = e(j),
                    r = e(Q),
                    i = e(M),
                    u = e(D),
                    s = e(A);
                n.getOptimisticResult(r);
                let h = n,
                    m = (0, d.a)(n.getCurrentResult()),
                    w = (0, d.a)(e => {
                        let t = e(m);
                        if (t === q) throw Error("Evicted query result was read");
                        return t
                    }, (e, t, n) => {
                        if (n === q) {
                            h = void 0, t(m, q), t(c, e => e + 1);
                            return
                        }
                        t(m, n)
                    });
                return v.set(n, w), w.onMount = e => {
                    var n;
                    let d = h;
                    if (null == d || v.get(d) !== w) return;
                    let c = d.getCurrentQuery(),
                        m = (0, f.c)(c),
                        S = (0, f.h)(c),
                        {
                            activeFetchAtMount: C,
                            hadMountedBefore: k
                        } = s.mount(d, m, S.hadMountedReader);
                    (0, f.g)(C, "independent");
                    let R = o();
                    t.getQueryCache().get(c.queryHash) !== c && d.setOptions(r), d.getOptimisticResult(t.defaultQueryOptions(d.options)), e(d.getCurrentResult());
                    let M = p.a.batchCalls(e),
                        O = d.subscribe(e => {
                            let t = d.options;
                            g.a.cacheChangeProperties(e, E.has(t) ? E.get(t) : E.get(r)), M(e)
                        }),
                        D = (0, f.c)(d.getCurrentQuery());
                    null != D && D !== m && (0, f.g)(D, "reactive"), n = null != D, k && !n && queueMicrotask(() => {
                        if (!a()) return;
                        let e = d.getCurrentQuery(),
                            t = "function" == typeof d.options.enabled ? d.options.enabled(e) : d.options.enabled,
                            n = "function" == typeof d.options.refetchOnMount ? d.options.refetchOnMount(e) : d.options.refetchOnMount,
                            r = "function" == typeof d.options.staleTime ? d.options.staleTime(e) : d.options.staleTime,
                            l = void 0 !== e.state.data || "error" !== e.state.status || !1 !== d.options.retryOnMount,
                            i = "always" === n || !1 !== n && d.getCurrentResult().isStale;
                        if (d.hasListeners() && "idle" === e.state.fetchStatus && !1 !== t && "static" !== r && l && i) {
                            let t = (0, f.c)(e);
                            d.refetch();
                            let n = (0, f.c)(d.getCurrentQuery());
                            null != n && n !== t && (0, f.g)(n, "reactive")
                        }
                    });
                    let A = t.getQueryCache(),
                        Q = n => {
                            i.get(t) !== d || d.hasListeners() || d.getCurrentQuery() !== n || (i.delete(t), u.delete(d), e(q))
                        },
                        B = e => A.get(e.queryHash) === e,
                        j = e => {
                            B(e) || Q(e)
                        },
                        x = e => {
                            if (y.has(e) || !B(e)) return;
                            let t = l.subscribe(A, n => {
                                "removed" === n.type && n.query === e && (t?.(), y.delete(e), Q(e))
                            });
                            null != t && y.set(e, t)
                        };
                    return () => {
                        let e = d.getCurrentQuery(),
                            n = (0, f.c)(e);
                        e === c && null != n && n !== m && (0, f.g)(n, "reactive"), S.unmount(), s.unmount(d),
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
                                    watchForQueryRemoval: s
                                } = e;
                                queueMicrotask(() => {
                                    let e = i.getCurrentQuery(),
                                        d = (0, f.c)(e),
                                        c = (0, f.d)(d),
                                        p = (0, f.f)(e),
                                        g = null != d && "reactive" !== c && !p && (e !== u || d !== n),
                                        h = a && null != d && d === n && d !== t;
                                    if (p) return void o();
                                    let y = () => {
                                        o(), l(e)
                                    };
                                    s(e), null != d && (g || h || "independent" === c) && b(r, e, d), y()
                                })
                            }({
                                activeFetchAtReaderMount: m,
                                activeFetchAtUnmount: n,
                                client: t,
                                evictIfQueryRemoved: j,
                                observer: d,
                                queryAtUnmount: e,
                                retainFetchStartedAfterUnmount: R,
                                unsubscribe: O,
                                watchForQueryRemoval: x
                            })
                    }
                }, w
            }), K = (0, d.a)(e => (e(s), e(e(x)))), W = (e, t, n, r, l) => {
                let i, u, a = E.get(n),
                    o = n,
                    s = t.getCurrentQuery();
                return g.a.createSnapshot(r, {
                    getBehavior: e => ({
                        suspense: l && C(n, e),
                        throwOnError: e.isError && !e.isFetching && n.throwOnError || void 0
                    }),
                    getCurrentResult: (r, a) => {
                        let d = e.defaultQueryOptions(t.options);
                        d._optimisticResults = "optimistic", d.notifyOnChangeProps = "all";
                        let c = e.getQueryCache().build(e, d),
                            p = t.getCurrentQuery(),
                            g = t.getCurrentResult();
                        if (!a.connect && r.isEnabled && !g.isEnabled) {
                            let u = e.getQueryCache().build(e, n),
                                o = t.getOptimisticResult(n);
                            if (t.getOptimisticResult(d), w(r, o) && (o = r), l && C(n, o)) throw i?.result !== o && (i = {
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
                        let h = (0, f.c)(c);
                        a.connect && p !== c && m(e, t, c);
                        let y = t.getOptimisticResult(d);
                        if (a.connect && p !== c) {
                            t.setOptions(d), y = t.getCurrentResult();
                            let e = (0, f.c)(t.getCurrentQuery());
                            t.hasListeners() && null != e && e !== h && (0, f.g)(e, "reactive")
                        }
                        if (w(r, y) && (y = r), a.token === u && d === o && c === s && y === r) return y;
                        if (l && C(d, y)) throw i?.result !== y && (i = {
                            promise: t.fetchOptimistic(d),
                            result: y
                        }), i.promise;
                        if (i = void 0, k(a, t, {
                                result: y,
                                query: c,
                                throwOnError: d.throwOnError
                            })) throw y.error;
                        return u = a.token, o = d, s = c, y
                    },
                    notifyOnChangeProps: a,
                    notifyOnError: !!n.throwOnError,
                    trackResult: e => null == a ? t.trackResult(e) : e
                })
            }, L = (0, d.a)(e => W(e(R), e(j), e(Q), e(K), !1));
            return Object.assign((0, d.a)(e => {
                if (e(h.c)) return e(L);
                let t = e(R),
                    n = e(j),
                    r = e(Q),
                    l = e(D),
                    i = r,
                    u = e(K);
                if (!u.isEnabled) {
                    let t = e(B),
                        l = n.getOptimisticResult(t);
                    n.getOptimisticResult(r), l.isEnabled && (i = t, u = l)
                }
                let a = l.get(n);
                return (w(a, u) ? u = a : l.set(n, u), null == a && C(i, u)) ? n.fetchOptimistic(i) : W(t, n, i, u, !0)
            }, (e, t) => {
                t(s, e => e + 1)
            }), {
                rawResultAtom: L
            })
        }
        var R = n("Cd");
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
        var E = n("PK"),
            O = n("m4"),
            D = n("vM");

        function A(e, t) {
            let n = (0, d.a)(!1),
                r = (0, d.a)(!1),
                l = 0,
                i = !1,
                u = 0,
                a = (0, d.a)(e => e(n), (e, t, r) => {
                    t(n, r)
                });
            a.onMount = n => {
                let r, u = l += 1;
                i = !0;
                let a = !1,
                    o = () => {
                        a || (a = !0, r = t?.()), n(!0)
                    };
                return 0 === e.imperativeReadDepth ? o() : n(!1), queueMicrotask(() => {
                    l === u && o(), queueMicrotask(() => {
                        l === u && (i = !1)
                    })
                }), () => {
                    l += 1, i = !1, n(!1), r?.()
                }
            };
            let o = (0, d.a)(() => !1, (e, t, n) => {
                t(r, n)
            });
            return o.onMount = t => {
                if (e.imperativeReadDepth > 0) return;
                let n = u += 1;
                return queueMicrotask(() => {
                    u === n && t(!0)
                }), () => {
                    let e = u += 1;
                    queueMicrotask(() => {
                        u === e && t(!1)
                    })
                }
            }, {
                disabledReaderMountAtom: o,
                enabledReaderMountAtom: a,
                hasCommittedDisabledReadersAtom: r,
                hasEnabledReadersAtom: n,
                isEnabledReaderMounting: () => i
            }
        }

        function Q(e, t) {
            let n = new WeakMap,
                r = (0, i.k)("cached", e, (e, r) => {
                    var l, u, a;
                    let o = e.queryClient;
                    if (null == o) throw Error("infiniteQuerySignal requires a QueryClient on Scope");
                    let s = n.get(e.familyBindings);
                    null == s && (s = new M, n.set(e.familyBindings, s));
                    let c = A(e),
                        f = (0, O.a)(),
                        p = (n, l) => {
                            let u = t((0, i.h)(r, e, n, {
                                    enabled: l
                                }, f)),
                                a = u.enabled;
                            return {
                                ...u,
                                enabled: t => !(e.imperativeReadDepth > 0 && ((0, E.b)(e.store) || !e.store.get(c.hasEnabledReadersAtom))) && l && ("function" == typeof a ? a(t) : a ?? !0),
                                refetchOnMount: u.refetchOnMount ?? !1
                            }
                        },
                        h = (l = e => p(e, e(c.hasEnabledReadersAtom)), u = () => o, a = {
                            cacheSubscriptions: s,
                            getEnabledReaderOptions: t => p(t, 0 === e.imperativeReadDepth),
                            getShouldSuppressStaleFetchOnEnable: e => !e(c.hasCommittedDisabledReadersAtom),
                            isEnabledReaderMounting: c.isEnabledReaderMounting,
                            shouldRetainFetchStartedAfterUnmount: () => e.imperativeReadDepth > 0
                        }, q(l, R.a, u, a)),
                        y = (0, d.a)(e => (e(c.enabledReaderMountAtom), e(h))),
                        b = (0, d.a)(e => {
                            e(c.disabledReaderMountAtom);
                            let t = e(h.rawResultAtom);
                            return t.isEnabled ? g.a.createSnapshotView(t, {
                                isEnabled: !1,
                                isStale: !1
                            }) : t
                        });
                    return g.a.markAtom(h), g.a.markAtom(y), g.a.markAtom(b), (0, i.y)(e, y), (0, i.y)(e, b), {
                        disabledReaderAtom: b,
                        enabledReaderAtom: y,
                        queryAtom: h
                    }
                }, (e, t) => {
                    let {
                        queryAtom: r
                    } = e;
                    (0, l.e)(t, r, "query", {
                        debugLabel: u.debugLabel,
                        familyMember: n.get(t.familyBindings)
                    })
                }),
                u = Object.assign((0, i.k)("cached", e, (e, t) => r.resolve(e, t).enabledReaderAtom), {
                    [D.a](e) {
                        let t = n.get(e.familyBindings);
                        null != t && (t.dispose(), (0, l.b)(e, t))
                    },
                    createSubscriberAtom: (e, t) => g.a.createSubscriberAtom(u.resolve(e, t)),
                    getOptions: t,
                    queryKind: "infinite",
                    [D.e]: e => e.enabled ? u : a
                }),
                a = Object.assign((0, i.k)("cached", e, (e, t) => r.resolve(e, t).disabledReaderAtom), {
                    [D.a]: u[D.a],
                    createSubscriberAtom: (e, t) => g.a.createSubscriberAtom(a.resolve(e, t)),
                    getOptions: t,
                    queryKind: "infinite",
                    [D.e]: () => a
                });
            return u
        }

        function B(e, t, n) {
            let r = new WeakMap,
                u = (0, i.k)("cached", e, (e, l) => {
                    var u, a, o;
                    let s = e.queryClient;
                    if (null == s) throw Error("querySignal requires a QueryClient on Scope");
                    let p = r.get(e.familyBindings);
                    null == p && (p = new M, r.set(e.familyBindings, p));
                    let h = A(e, null == n ? void 0 : () => n((0, i.h)(l, e).scope)),
                        y = (0, O.a)(),
                        b = (n, r) => {
                            let u = t((0, i.h)(l, e, n, {
                                    enabled: r
                                }, y)),
                                a = u.enabled;
                            return {
                                ...u,
                                enabled: t => !(e.imperativeReadDepth > 0 && ((0, E.b)(e.store) || !e.store.get(h.hasEnabledReadersAtom))) && r && ("function" == typeof a ? a(t) : a ?? !0),
                                refetchOnMount: u.refetchOnMount ?? !1
                            }
                        },
                        m = (u = e => b(e, e(h.hasEnabledReadersAtom)), a = () => s, o = {
                            cacheSubscriptions: p,
                            getEnabledReaderOptions: t => b(t, 0 === e.imperativeReadDepth),
                            getShouldSuppressStaleFetchOnEnable: e => !e(h.hasCommittedDisabledReadersAtom),
                            isEnabledReaderMounting: h.isEnabledReaderMounting,
                            shouldRetainFetchStartedAfterUnmount: () => e.imperativeReadDepth > 0
                        }, q(e => {
                            let t = {
                                ...u(e)
                            };
                            return (0, f.b)(t, "reactive"), t
                        }, c.a, a, o)),
                        v = (0, d.a)(e => (e(h.enabledReaderMountAtom), e(m))),
                        w = (0, d.a)(e => {
                            e(h.disabledReaderMountAtom);
                            let t = e(m.rawResultAtom);
                            return t.isEnabled ? g.a.createSnapshotView(t, {
                                isEnabled: !1,
                                isStale: !1
                            }) : t
                        });
                    return g.a.markAtom(m), g.a.markAtom(v), g.a.markAtom(w), (0, i.y)(e, v), (0, i.y)(e, w), {
                        disabledReaderAtom: w,
                        enabledReaderAtom: v,
                        queryAtom: m
                    }
                }, (e, t) => {
                    let {
                        queryAtom: n
                    } = e;
                    (0, l.e)(t, n, "query", {
                        debugLabel: a.debugLabel,
                        familyMember: r.get(t.familyBindings)
                    })
                }),
                a = Object.assign((0, i.k)("cached", e, (e, t) => u.resolve(e, t).enabledReaderAtom), {
                    [D.a](e) {
                        let t = r.get(e.familyBindings);
                        null != t && (t.dispose(), (0, l.b)(e, t))
                    },
                    createSubscriberAtom: (e, t) => g.a.createSubscriberAtom(a.resolve(e, t)),
                    getOptions: t,
                    queryKind: "query",
                    [D.e]: e => e.enabled ? a : o
                }),
                o = Object.assign((0, i.k)("cached", e, (e, t) => u.resolve(e, t).disabledReaderAtom), {
                    [D.a]: a[D.a],
                    createSubscriberAtom: (e, t) => g.a.createSubscriberAtom(o.resolve(e, t)),
                    getOptions: t,
                    queryKind: "query",
                    [D.e]: () => o
                });
            return a
        }

        function j(e, t, n) {
            let r = (0, o.b)(e, n => {
                let l = B(e, e => t(n, e));
                return l.debugLabel = r.debugLabel, l
            }, {
                ...n,
                autoDispose: n?.autoDispose ?? !0
            });
            return (0, o.a)(r)
        }

        function x(e, t, n) {
            let r = (0, o.b)(e, n => {
                let l = Q(e, e => t(n, e));
                return l.debugLabel = r.debugLabel, l
            }, {
                ...n,
                autoDispose: n?.autoDispose ?? !0
            });
            return (0, o.a)(r)
        }

        function K(e, t, n) {
            let r = (0, o.b)(e, n => L(e, e => t(n, e), (e, t) => r[D.d](e, t, n)), n);
            return (0, o.a)(r)
        }

        function W(e, t) {
            return L(e, t)
        }

        function L(e, t, n) {
            let r = (0, i.k)("cached", e, (e, l) => {
                if (null == e.queryClient) throw Error("mutationSignal requires a QueryClient on Scope");
                let u = (0, d.a)({
                        data: void 0,
                        error: null,
                        status: "idle",
                        variables: void 0
                    }),
                    a = 0;
                return (0, d.a)(o => {
                    let s = o(u),
                        d = async (n, r) => {
                            let o, s, d = t((0, i.h)(l, e)),
                                c = {
                                    client: e.queryClient,
                                    meta: d.meta,
                                    mutationKey: d.mutationKey
                                },
                                f = ++a;
                            e.store.set(u, {
                                data: void 0,
                                error: null,
                                status: "pending",
                                variables: n
                            });
                            try {
                                s = await d.onMutate?.(n, c), o = await d.mutationFn?.(n, c)
                            } catch (t) {
                                throw f === a && e.store.set(u, {
                                    data: void 0,
                                    error: t,
                                    status: "error",
                                    variables: n
                                }), await d.onError?.(t, n, s, c), await d.onSettled?.(void 0, t, n, s, c), r?.onError?.(t, n, s, c), r?.onSettled?.(void 0, t, n, s, c), t
                            }
                            return f === a && e.store.set(u, {
                                data: o,
                                error: null,
                                status: "success",
                                variables: n
                            }), await d.onSuccess?.(o, n, s, c), await d.onSettled?.(o, null, n, s, c), r?.onSuccess?.(o, n, s, c), r?.onSettled?.(o, null, n, s, c), o
                        }, c = (t, i) => {
                            let u = n?.(e, l);
                            if (null != u && u.value !== r) return e.store.get(u.value.resolve(e, l)).mutateAsync(t, i);
                            let a = u?.disposal;
                            if (null == a) return d(t, i);
                            let o = a.retain();
                            return d(t, i).finally(o)
                        };
                    return {
                        ...s,
                        isError: "error" === s.status,
                        isIdle: "idle" === s.status,
                        isPending: "pending" === s.status,
                        isSuccess: "success" === s.status,
                        mutate: (e, t) => {
                            c(e, t).catch(() => {})
                        },
                        mutateAsync: c
                    }
                })
            }, (e, t) => {
                (0, l.e)(t, e, "mutation", {
                    debugLabel: r.debugLabel
                })
            });
            return r
        }
        var T = n("UQ"),
            P = n("xN");

        function F(e, t) {
            let n = (0, O.a)();
            return (0, P.a)(r => t((0, i.g)(e.scope, e.chain, e.node, r, void 0, n)), e.node.store)
        }
        var V = n("zd");

        function _(e) {
            let t = (0, l.c)(e),
                n = (0, l.d)(e, t);
            return (0, V.useSyncExternalStore)(e => (t.listeners.add(e), () => {
                t.listeners.delete(e), 0 === t.listeners.size && queueMicrotask(() => {
                    0 === t.listeners.size && (t.entries = null)
                })
            }), () => t.version, () => t.version), [...n].sort(z)
        }

        function z(e, t) {
            return e.id - t.id
        }
        var I = n("A"),
            U = n("Qo");
        let N = (0, V.createContext)(new Map),
            H = (0, V.createContext)(void 0),
            J = new WeakMap,
            X = new Map;

        function Z(e) {
            let t = J.get(e);
            return null == t && ((t = (0, V.createContext)(X)).displayName = e.__scopeBrand, J.set(e, t)), t
        }

        function G(e) {
            let t, n = (0, U.c)(3),
                {
                    children: r,
                    queryClient: l
                } = e;
            return n[0] !== r || n[1] !== l ? (t = (0, I.jsx)(H.Provider, {
                value: l,
                children: r
            }), n[0] = r, n[1] = l, n[2] = t) : t = n[2], t
        }
        var Y = n("SZ"),
            $ = n.n(Y),
            ee = n("K");
        let et = {},
            en = 0;

        function er(e) {
            let {
                children: t,
                scope: n,
                value: r
            } = e, u = (0, V.useContext)(N), a = (0, V.useContext)(H), o = null == n.parent ? void 0 : u.get(n.parent.id), s = r ?? et, d = null == n.getKey ? JSON.stringify(s) : n.getKey(s), c = (0, V.useRef)(null), [, f] = (0, V.useReducer)(e => e + 1, 0), p = (0, V.useRef)(null);
            if (null != n.parent && null == o) throw Error("Missing parent scope");
            let g = null == o ? void 0 : function(e) {
                    let {
                        parentScope: t,
                        providedValue: n,
                        queryClient: r,
                        scope: l,
                        scopeKey: i
                    } = e, u = t.retainedScopeEntries.get(l)?.get(i);
                    return null != u ? u : {
                        lastUsed: 0,
                        mountedCount: 0,
                        node: el({
                            parentScope: t,
                            providedValue: n,
                            queryClient: r,
                            scope: l,
                            scopeKey: i
                        })
                    }
                }({
                    parentScope: o,
                    providedValue: s,
                    queryClient: a,
                    scope: n,
                    scopeKey: d
                }),
                h = null != g && !$()(g.node.value, s),
                y = null != g && g.node.parent !== o,
                b = h || y,
                m = o?.queryClient ?? a,
                v = null != g && (h || g.node.queryClient !== m) ? {
                    ...g.node,
                    debugEntries: new Set,
                    cachedBindings: h ? new WeakMap : g.node.cachedBindings,
                    queryClient: m,
                    value: s
                } : g?.node;
            if (null != c.current && c.current.node.token === n && Object.is(c.current.node.key, d) && c.current.parent === o && c.current.parentChain === u && (null == g || c.current.retainedEntry === g) && (null == v || c.current.node === v)) c.current.retainedEntry = g;
            else {
                let e = v ?? el({
                        parentScope: o,
                        providedValue: s,
                        queryClient: a,
                        scope: n,
                        scopeKey: d
                    }),
                    t = (0, i.c)(u, n);
                t.set(n.id, e), c.current = {
                    chain: t,
                    node: e,
                    parent: o,
                    parentChain: u,
                    retainedEntry: g
                }
            }(null == g ? function(e) {
                let {
                    node: t,
                    parentScope: n,
                    providedValue: r,
                    queryClient: l
                } = e, i = !$()(t.value, r);
                return t.queryClient = n?.queryClient ?? l, t.value = r, i
            }({
                node: c.current.node,
                parentScope: o,
                providedValue: s,
                queryClient: a
            }) : b) ? (null == g && (c.current.node.cachedBindings = new WeakMap), p.current = {
                atom: c.current.node.contextVersionAtom,
                store: c.current.node.store
            }) : p.current = null;
            let w = c.current.retainedEntry,
                S = c.current.node;
            (0, V.useLayoutEffect)(() => {
                if ((0, l.g)(S, w?.node), null != w && null != o) {
                    let e = o.retainedScopeEntries.get(n);
                    null == e && (e = new Map, o.retainedScopeEntries.set(n, e)), e.set(d, w);
                    let t = w.node;
                    t.parent = o, t !== S && (t.cachedBindings = S.cachedBindings, t.queryClient = S.queryClient, t.value = S.value, Object.defineProperties(S, {
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
                    })), y && (c.current = null, f());
                    return
                }
                return S.autoDisposeScheduler.cancel(S), () => {
                    (0, l.h)(S), S.autoDisposeScheduler.schedule(S, 0, () => {
                        (0, i.b)(S)
                    })
                }
            }, [S, S.cachedBindings, w, y, o, n, d]), (0, V.useLayoutEffect)(() => {
                let e = p.current;
                null != e && (e.store.set(e.atom, e => e + 1), p.current = null)
            }), (0, V.useLayoutEffect)(() => {
                if (null != w && null != o) return o.autoDisposeScheduler.cancel(w), w.mountedCount += 1, w.lastUsed = ++en, ei(o, n), () => {
                    w.mountedCount -= 1, w.lastUsed = ++en, ei(o, n);
                    let e = (0, ee.c)(n.retain?.autoDispose);
                    1 / 0 !== e && 0 === w.mountedCount && o.retainedScopeEntries.get(n)?.get(S.key) === w && o.autoDisposeScheduler.schedule(w, e, () => {
                        let e = o.retainedScopeEntries.get(n);
                        w.mountedCount > 0 || e?.get(S.key) !== w || (e.delete(S.key), 0 === e.size && o.retainedScopeEntries.delete(n), (0, i.b)(w.node))
                    })
                }
            }, [S.key, w, o, n]);
            let C = Z(n),
                k = (0, I.jsx)(C, {
                    value: c.current.chain,
                    children: t
                });
            for (let e of u.values())
                if (!c.current.chain.has(e.token.id)) {
                    let t = Z(e.token);
                    k = (0, I.jsx)(t, {
                        value: X,
                        children: k
                    })
                } return (0, I.jsx)(N.Provider, {
                value: c.current.chain,
                children: k
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
                autoDisposeScheduler: t?.autoDisposeScheduler ?? new ee.a,
                imperativeReadAtoms: new WeakSet,
                imperativeReadDepth: 0,
                key: i,
                parent: t,
                queryClient: t?.queryClient ?? r,
                retainedScopeEntries: new Map,
                signalBindings: new WeakMap,
                store: t?.store ?? (0, d.b)(),
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
                    r.delete(t.key), e.autoDisposeScheduler.cancel(t.entry), (0, l.h)(t.entry.node), e.autoDisposeScheduler.schedule(t.entry, 0, () => {
                        (0, i.b)(t.entry.node)
                    })
                }
                0 === r.size && e.retainedScopeEntries.delete(t)
            }
        }
        let eu = () => {},
            ea = () => eu;

        function eo(e, t) {
            var n, r;
            let l = (0, i.a)(e, t);
            if (n = l, (0, i.v)(n) && "function" == typeof n.get && "function" == typeof n.subscribe) return es((0, V.useMemo)(() => {
                let e = ed(e => l.subscribe(e));
                return {
                    ...g.a.createSubscriberStore(l.atom, () => l.store.get(l.atom), e.subscribe),
                    prepare: e.prepare
                }
            }, [l, void 0]), () => (0, h.b)(l.store, l.atom));
            if (!("object" == typeof(r = l) && null != r && "cache" in r && ("cached" === r.cache || "signal" === r.cache) && "scope" in r && "resolve" in r && "function" == typeof r.resolve)) {
                let e = (0, V.useMemo)(() => () => l, [l, void 0]),
                    t = (0, V.useSyncExternalStore)(ea, e, e);
                return (0, V.useLayoutEffect)(eu, [eu, void 0]), t
            }
            let u = (0, V.use)(Z(l.scope)),
                a = (0, i.B)(u, l.scope),
                o = l.resolve(a, u);
            return es((0, V.useMemo)(() => {
                let e = ed(e => a.store.sub(o, e));
                return {
                    ...g.a.createSubscriberStore(o, () => a.store.get(o), e.subscribe),
                    prepare: e.prepare
                }
            }, [a.store, o]), () => (0, h.b)(a.store, o))
        }

        function es(e, t) {
            let n = e.createRender?.(),
                r = (0, V.useSyncExternalStore)(e.subscribe, n?.getSnapshot ?? (null == e.createRender ? e.getSnapshot : () => {
                    if (null != n) return n.getSnapshot();
                    let t = e.getSnapshot();
                    return null == (n = e.createRender?.(!0)) ? t : n.getSnapshot()
                }), t);
            n = n ?? e.createRender?.(!0);
            let l = n?.commit ?? eu;
            return (0, V.useLayoutEffect)(() => (l(), e.prepare()), [l, e]), null == n ? r : n.track(r)
        }

        function ed(e) {
            let t, n, r = !1,
                l = !1,
                i = !1,
                u = () => {
                    null == n ? i = !0 : n()
                };
            return {
                prepare: () => {
                    if (!l || r || null != t) return;
                    let n = e(u);
                    return t = n, () => {
                        t === n && (t = void 0, n())
                    }
                },
                subscribe: a => {
                    let o = l;
                    l = !0, r = !0, n = a;
                    let s = t ?? e(u);
                    return t = void 0, (i || o) && (i = !1, a()), () => {
                        r = !1, n = void 0, s()
                    }
                }
            }
        }

        function ec(e, t) {
            var n, r;
            let l, u, a;
            return n = e, r = t, l = "object" == typeof n && null != n && D.b in n ? (0, V.use)(Z(n.scope)) : X, u = (0, V.useMemo)(() => {
                if ("object" == typeof n && null != n && D.b in n) {
                    let e = (0, i.B)(l, n.scope),
                        t = n[D.d](e, l, r);
                    return () => (null != t.disposal && e.store.get(t.disposal.atom) && (t = n[D.d](e, l, r)), t)
                }
                let e = {
                    disposal: void 0,
                    value: n
                };
                return () => e
            }, [l, n, r]), a = (0, V.useCallback)(e => {
                let t = u().disposal?.retain() ?? (() => {});
                return e(), t
            }, [u]), (0, V.useLayoutEffect)(() => a(() => {}), [a]), (0, V.useSyncExternalStore)(a, u, u).value
        }

        function ef(e, t, n) {
            let r = "object" == typeof e && null != e && D.b in e ? e : void 0,
                l = null != r ? (0, V.use)(Z(r.scope)) : X,
                u = r?.[D.d]((0, i.B)(l, r.scope), l, t),
                a = u?.cacheKey,
                o = u?.disposal == null ? u?.value : void 0,
                s = n?.enabled,
                d = (0, V.useMemo)(() => {
                    if ("object" != typeof e || null == e || !(D.b in e)) return e;
                    if (null != o) return o;
                    let n = (0, i.B)(l, e.scope),
                        r = (0, i.d)(r => {
                            let u = e[D.d](n, l, t, a);
                            return null != u.disposal && r(u.disposal.atom), (0, i.z)(n, l, u.value, r, null == s ? void 0 : {
                                enabled: s
                            })
                        });
                    return {
                        atom: r,
                        store: n.store,
                        get: () => n.store.get(r),
                        subscribe: e => n.store.sub(r, e)
                    }
                }, [a, l, s, e, o]);
            return (0, V.useLayoutEffect)(() => {
                if (null == r) return;
                let e = (0, i.B)(l, r.scope);
                return r[D.d](e, l, t, a).disposal?.retain()
            }, [a, l, r]), eo((0, i.a)(d, n))
        }

        function ep(e) {
            let t = (0, V.useContext)(Z(e)),
                n = (0, i.B)(t, e),
                r = (0, i.i)(n),
                l = (0, V.useRef)(null);
            if (null == l.current || l.current.node !== n) {
                let u = {
                    chain: t,
                    getOwnValue: e => (0, i.A)(n, u.chain, e),
                    node: n,
                    get queryClient() {
                        if (null == n.queryClient) throw Error("Missing query client");
                        return n.queryClient
                    },
                    scope: e,
                    value: r
                };
                u.get = function(e, t, n) {
                    if ((0, i.v)(e)) return (0, i.a)(e, 2 == arguments.length && (0, i.t)(e) ? t : void 0).get();
                    if ((0, i.t)(e) && 2 == arguments.length) {
                        let n = (0, i.B)(u.chain, e.scope);
                        return (0, i.q)(n, (0, i.a)(e, t).resolve(n, u.chain))
                    }
                    if (void 0 !== t || arguments.length >= 2) {
                        let r = (0, i.B)(u.chain, e.scope);
                        return (0, i.w)(e) ? e.read(r, u.chain, t, void 0, n) : e.resolve(r, u.chain, t)
                    }
                    let r = (0, i.B)(u.chain, e.scope),
                        l = e.resolve(r, u.chain);
                    return (0, i.q)(r, l)
                }, u.query = (0, i.j)(u), u.set = function(e, t, n) {
                    ! function(e, t, n, r) {
                        if ((0, i.x)(t)) {
                            let l = t.resolve(e.node, e.chain, n);
                            (0, i.D)(l.store, l.atom, r);
                            return
                        }
                        if ((0, i.u)(t)) return (0, i.D)(t.store, t.atom, n);
                        let l = (0, i.C)(e.node, e.chain, t.scope);
                        (0, i.D)(l.store, t.resolve(l, e.chain), n)
                    }(u, e, t, n)
                }, u.watch = function(e) {
                    return F(u, e)
                }, u.when = function(e) {
                    return (0, i.E)(e => F(u, e), e)
                }, l.current = u
            } else l.current.chain = t, l.current.value = r;
            return l.current
        }
    }),
    e9b: (function(e, t, n) {
        n.d(t, {
            a: () => a.a,
            b: () => u
        });
        var r = n("Nm"),
            l = n("vM"),
            i = n("PS");

        function u(e, t) {
            let n = (0, r.b)(e.scope, (e, n) => {
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

            function u() {
                return e.node.familyBindings.get(n)
            }
            return {
                at: t => n.resolve(e.node, e.chain, t),
                publish(e) {
                    u()?.get(e)?.value.set(t.read(e))
                },
                publishAll() {
                    for (let [e, n] of u() ?? []) n.value.set(t.read(e))
                },
                own: (t, r) => Object.assign(t, {
                    [l.a]() {
                        for (let t of (r(), u()?.keys() ?? []))(0, i.e)(e.node, n, t)
                    }
                })
            }
        }
        var a = n("PK")
    }),
    K: (function(e, t, n) {
        var r = n("ou");
        class l {
            entries = new Map;
            deadlines = [];
            nextDeadline = 1 / 0;
            timeout;
            idleCallback;
            draining = !1;
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
                if (!this.draining) {
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
        }

        function i(e, t, n, l) {
            let i, u = (0, r.a)(!1),
                a = !1,
                o = 0,
                s = {
                    atom: u,
                    retain: c,
                    dispose() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        !a && (a = !0, e.autoDisposeScheduler.cancel(u), e.disposalLifecycles.delete(s), l?.children?.delete(s), n(), s.children?.forEach(e => {
                            e.dispose(t)
                        }), t && e.store.set(u, !0))
                    }
                },
                d = () => {
                    0 === o && s.dispose(!0)
                };

            function c() {
                if (a) return;
                0 == o++ && (0 === e.imperativeReadDepth && e.autoDisposeScheduler.cancel(u), i = l?.retain());
                let n = !0;
                return () => {
                    !n || (n = !1, 0 == --o && (i?.(), i = void 0, a || e.autoDisposeScheduler.schedule(u, t, d)))
                }
            }
            return u.onMount = c, null != l && (l.children = l.children ?? new Set, l.children.add(s)), e.disposalLifecycles.add(s), e.autoDisposeScheduler.schedule(u, t, d), s
        }

        function u() {
            let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if ("boolean" == typeof e) return e ? 0 : 1 / 0;
            if (!Number.isFinite(e) || e < 0) throw RangeError("autoDispose must be a boolean or a finite, nonnegative delay in milliseconds");
            return e
        }
        n.d(t, {
            a: () => l,
            b: () => i,
            c: () => u
        })
    }),
    Av: (function(e, t, n) {
        let r = new WeakMap,
            l = new WeakMap,
            i = new WeakMap,
            u = new WeakMap,
            a = new WeakMap,
            o = new WeakMap,
            s = 0;

        function d(e, t, n, r) {
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
            f(e, l)
        }

        function c(e, t) {
            let n = u.get(t);
            if (null != n)
                for (let t of n) f(e, t)
        }

        function f(e, t) {
            let n = a.get(t),
                i = o.get(e.debugEntries);
            if (null != n && null != i && i.node !== e && i.cachedBindings !== n.deref() || e.debugEntries.has(t) || (e.debugEntries.add(t), !l.get(e.store)?.has(e.debugEntries))) return;
            let u = r.get(e.store);
            u?.entries != null && (u.entries.add(t), C(u))
        }

        function p(e) {
            h(e, e.debugEntries)
        }

        function g(e, t) {
            let n = u.get(t);
            if (null == n) return;
            u.delete(t), h(e, n);
            let r = e.parent?.retainedScopeEntries.get(e.token)?.get(e.key)?.node;
            null != r && r !== e && r.familyBindings === e.familyBindings && h(r, n)
        }

        function h(e, t) {
            let n = r.get(e.store),
                l = !1;
            for (let r of t) e.debugEntries.delete(r), l = (n?.entries?.delete(r) ?? !1) || l;
            l && n?.entries != null && C(n)
        }

        function y(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e,
                n = w(e.store),
                l = r.get(e.store),
                i = l?.entries?.size,
                u = o.get(t.debugEntries)?.cachedBindings;
            o.set(t.debugEntries, {
                node: t,
                cachedBindings: e.cachedBindings
            });
            let s = !1;
            if (u !== e.cachedBindings)
                for (let n of t.debugEntries) {
                    let r = a.get(n);
                    null != r && r.deref() !== e.cachedBindings && (t.debugEntries.delete(n), s = (l?.entries?.delete(n) ?? !1) || s)
                }
            if (!n.has(e.debugEntries)) {
                for (let r of (n.add(t.debugEntries), e.debugEntries)) t.debugEntries.add(r), l?.entries?.add(r);
                e.debugEntries = t.debugEntries
            }
            l?.entries != null && (s || l.entries.size !== i) && C(l)
        }

        function b(e) {
            if (l.get(e.store)?.delete(e.debugEntries) !== !0) return;
            o.delete(e.debugEntries);
            let t = r.get(e.store);
            if (t?.entries == null) return;
            let n = !1;
            for (let r of e.debugEntries) n = t.entries.delete(r) || n;
            n && C(t)
        }

        function m(e, t, n) {
            e.set(t, n)
        }

        function v(e) {
            let t = r.get(e);
            if (null != t) return t;
            let n = {
                entries: null,
                listeners: new Set,
                version: 0
            };
            return r.set(e, n), n
        }

        function w(e) {
            let t = l.get(e);
            if (null != t) return t;
            let n = new Set;
            return l.set(e, n), n
        }

        function S(e, t) {
            if (null != t.entries) return t.entries;
            let n = new Set;
            for (let t of w(e))
                for (let e of t) n.add(e);
            return t.entries = n, n
        }

        function C(e) {
            for (let t of (e.version += 1, e.listeners)) t()
        }
        n.d(t, {
            a: () => p,
            b: () => g,
            c: () => v,
            d: () => S,
            e: () => d,
            f: () => c,
            g: () => y,
            h: () => b,
            i: () => m
        })
    }),
    UQ: (function(e, t, n) {
        var r = n("Av"),
            l = n("iw"),
            i = n("fb"),
            u = n("m4"),
            a = n("vM");

        function o(e, t, n) {
            return function e(t, n, o, s) {
                let d, c = (0, i.k)("cached", t, (e, t) => {
                        let r = (0, u.a)(),
                            l = (0, i.d)(l => n((0, i.h)(t, e, l, o, r)), s?.isEqual);
                        return (0, i.y)(e, l), l
                    }, (e, t) => {
                        (0, r.e)(t, e, "derived", {
                            debugLabel: c.debugLabel
                        })
                    }),
                    f = Object.assign(c, {
                        createSubscriberAtom: (e, t) => l.a.createSubscriberAtom(c.resolve(e, t)),
                        [a.e]: r => o?.enabled === !1 || r.enabled ? f : (null == d && ((d = e(t, n, r, s)).debugLabel = f.debugLabel), d)
                    });
                return f
            }(e, t, void 0, n)
        }
        n.d(t, {
            a: () => o
        })
    }),
    Nm: (function(e, t, n) {
        var r = n("K"),
            l = n("Av"),
            i = n("fb"),
            u = n("PS"),
            a = n("vM");

        function o(e, t, n) {
            let o = (0, r.c)(n?.autoDispose),
                s = {
                    [a.b](t, r, l) {
                        let a = t.token === e ? t : (0, i.C)(t, r, e);
                        return (0, u.e)(a, s, (0, i.r)(l, n))
                    },
                    resolve: (e, t, n) => s[a.d](e, t, n).value,
                    [a.d](a, d, c, f) {
                        let p = arguments.length >= 4 ? f : (0, i.r)(c, n),
                            g = a.token === e ? a : (0, i.C)(a, d, e),
                            h = g.familyBindings.get(s);
                        null == h && (h = new Map, g.familyBindings.set(s, h));
                        let y = h.get(p);
                        if (null != y) return (0, l.f)(g, y.debugFamilyMember), y;
                        let b = (0, i.c)(d, e);
                        b.set(e.id, g);
                        let m = {},
                            v = h,
                            w = 1 / 0 === o ? void 0 : (0, r.b)(g, o, () => {
                                v.get(p)?.disposal === w && (0, u.e)(g, s, p)
                            }),
                            S = t(c, {
                                ...(0, i.f)(g, b, c, s.debugLabel, m, w),
                                scope: (0, i.g)(e, b, g)
                            }),
                            C = {
                                cacheKey: p,
                                debugFamilyMember: m,
                                owner: n?.owner?.(c),
                                value: S
                            };
                        if (null != w && (C.disposal = w), h.set(p, C), null != C.owner) {
                            let e = g.familyKeysByOwner.get(C.owner);
                            null == e && (e = new Map, g.familyKeysByOwner.set(C.owner, e));
                            let t = e.get(s);
                            null == t && (t = new Set, e.set(s, t)), t.add(p)
                        }
                        return C
                    },
                    scope: e
                };
            return s
        }

        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "readable-family";
            return Object.assign(e, {
                kind: t,
                read(t, n, r, l, u, o) {
                    let s = e[a.d](t, n, r);
                    return null != s.disposal && null != l && l(s.disposal.atom), (0, i.z)(t, n, s.value, l, u, o)
                }
            })
        }
        n.d(t, {
            a: () => s,
            b: () => o
        })
    }),
    t: (function(e, t, n) {
        var r = n("K");

        function l(e, t) {
            return (0, r.c)(t?.retain?.autoDispose), {
                __scopeBrand: e,
                getKey: t?.key,
                id: Symbol(),
                parent: t?.parent,
                retain: t?.retain
            }
        }
        n.d(t, {
            a: () => l
        })
    }),
    jw: (function(e, t, n) {
        var r = n("UQ"),
            l = n("Nm");

        function i(e, t, n, r) {
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

        function u(e, t, n, r) {
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
        }

        function a(e, t, n) {
            let i = (0, l.b)(e, l => (0, r.a)(e, e => t(l, e), {
                isEqual: n?.isEqual
            }), {
                ...n,
                autoDispose: n?.autoDispose ?? 6e4
            });
            return (0, l.a)(i)
        }
        n.d(t, {
            a: () => a,
            b: () => u,
            c: () => i
        })
    }),
    J6: (function(e, t, n) {
        let r = new WeakMap,
            l = new WeakMap,
            i = new WeakSet,
            u = new WeakMap;

        function a(e, t) {
            let n = e.behavior;
            e.behavior = {
                onFetch(e, r) {
                    let u = t;
                    i.has(r) ? u = "independent" : h(r) && (u = "reactive"), n?.onFetch(e, r);
                    let a = e.fetchFn;
                    e.fetchFn = () => {
                        let e = s(r);
                        return null != e && l.set(e, u), a()
                    }
                }
            }
        }

        function o(e, t) {
            let n = i.has(e);
            i.add(e);
            try {
                return t()
            } finally {
                n || i.delete(e)
            }
        }

        function s(e) {
            return "idle" === e.state.fetchStatus ? void 0 : e.promise
        }

        function d(e, t) {
            null == e || r.has(e) || r.set(e, t)
        }

        function c(e) {
            null != e && r.set(e, "independent")
        }

        function f(e) {
            return null == e ? void 0 : r.get(e)
        }

        function p(e, t) {
            let n = e.getQueryCache().find({
                exact: !0,
                queryKey: t
            });
            if (null == n) return;
            let r = s(n);
            return null == r ? void 0 : l.get(r)
        }

        function g(e) {
            let t = u.get(e) ?? 0;
            return u.set(e, t + 1), {
                hadMountedReader: t > 0,
                unmount() {
                    let t = (u.get(e) ?? 1) - 1;
                    t > 0 ? u.set(e, t) : u.delete(e)
                }
            }
        }

        function h(e) {
            return (u.get(e) ?? 0) > 0
        }
        n.d(t, {
            a: () => c,
            b: () => a,
            c: () => s,
            d: () => f,
            e: () => p,
            f: () => h,
            g: () => d,
            h: () => g,
            i: () => o
        })
    }),
    iw: (function(e, t, n) {
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
            d = new WeakSet;

        function c(e) {
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

        function p(e, t) {
            return o.has(e) || "object" == typeof t && null != t && s.get(e)?.has(t) === !0
        }

        function g(e, t) {
            return "object" == typeof t && null != t && p(e, t) ? f(n => {
                n.didReadQueryResult = !0;
                let r = u.get(t)?.getCurrentSnapshot(n);
                return o.has(e) || null == r || s.get(e)?.add(r), r ?? t
            }, r ?? {
                connect: !0,
                token: {}
            }) : t
        }

        function h(e) {
            if ("object" == typeof e && null != e) return u.get(e)
        }

        function y(e) {
            s.set(e, null)
        }

        function b(e, t) {
            "object" == typeof t && null != t && u.has(t) ? s.set(e, new WeakSet([t])) : s.set(e, null)
        }

        function m(e, t) {
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
                        return r !== l && (l = r, i = m(r, t)), i
                    },
                    snapshot: r
                })
            }
            return r
        }

        function v(e, t) {
            let n = a.get(e);
            if (null != n) return n.value;
            let r = "function" == typeof t ? t() ?? "all" : t;
            return a.set(e, {
                value: r
            }), r
        }
        var w = n("ou"),
            S = n("WW");

        function C(e, t, n, r, l, i, u) {
            return !!e || (null == l ? null != n || !Object.is(t, r) : !!(null == n || k(n, l)) || n.result !== l.result && function(e, t, n, r) {
                if ("all" === r || t.notifyOnError && Reflect.get(e, "error") !== Reflect.get(t.result, "error")) return !0;
                let l = r ?? n;
                if (null == r && 0 === n.size) return !0;
                for (let n of l)
                    if (Reflect.get(e, n) !== Reflect.get(t.result, n)) return !0;
                return !1
            }(n.result, l, i, u ?? l.getChangeProperties()))
        }

        function k(e, t) {
            return e.behavior.suspense !== t.behavior.suspense || !Object.is(e.behavior.throwOnError, t.behavior.throwOnError)
        }
        let q = {
            cacheChangeProperties(e, t) {
                v(e, t)
            },
            createAtomReadTracker() {
                let e = {},
                    t = t => {
                        if (null == e.readAtom) throw Error("Query result tracker read outside atom evaluation");
                        let n = e.readAtom(t),
                            r = p(t, n),
                            l = r ? g(t, n) : n;
                        return "object" == typeof l && null != l && u.has(l) && (null == e.currentResults && (e.currentResults = new WeakMap), e.currentResults.set(l, r && !1 !== e.currentResults.get(l))), l
                    };
                return d.add(t), {
                    includes: t => "object" == typeof t && null != t && e.completedResults?.get(t) === !0,
                    read: (n, r) => {
                        let l = e.readAtom,
                            i = e.currentResults;
                        e.readAtom = n, e.currentResults = void 0;
                        try {
                            return r(t)
                        } finally {
                            e.completedResults = e.currentResults, e.readAtom = l, null != l && (e.currentResults = i)
                        }
                    }
                }
            },
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
                    getChangeProperties: () => v(t, n.notifyOnChangeProps),
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
                    r = (0, S.b)(e, t => {
                        let r = p(e, t) ? h(t) : void 0;
                        return null == r ? {
                            isCurrentQueryResult: !1,
                            value: t
                        } : {
                            isCurrentQueryResult: !0,
                            value: m(r.snapshot, n)
                        }
                    }, (e, n) => e.isCurrentQueryResult === n.isCurrentQueryResult && !C(!1, e.value, e.isCurrentQueryResult ? h(e.value) : void 0, n.value, n.isCurrentQueryResult ? h(n.value) : void 0, t)),
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
                        let r, l, i, u, a, s, d = new Set,
                            c = {
                                connect: !1,
                                token: {}
                            },
                            y = {
                                connect: !0,
                                token: {}
                            },
                            b = !1,
                            v = !1,
                            w = !1,
                            S = 0;

                        function q(e) {
                            if (f(() => R(!1), e), v) throw u;
                            if (!b) throw Error("Missing subscriber snapshot");
                            return i
                        }

                        function R(n) {
                            try {
                                let u = g(e, t()),
                                    o = p(e, u) ? h(u) : void 0,
                                    c = null != o && (s?.result !== o.result || l?.result !== o.result),
                                    f = n && c ? o.getChangeProperties() : void 0,
                                    y = n && (w && C(!1, a, s, u, o, d, f) || b && C(v, r, l, u, o, d, f) || !w && !b);
                                return v = !1, null == o ? i = u : (!b || null == l || k(l, o) || l?.result !== o.result) && (i = o.snapshot), r = u, l = o, b = !0, y
                            } catch (t) {
                                let e = n && (w || !b || !v || !Object.is(u, t));
                                return v = !0, u = t, e
                            }
                        }
                        return {
                            checkForUpdates: function(e) {
                                e || (y.token = {}, y.didReadQueryResult = !1, y.errorValidation = void 0);
                                let t = f(() => R(!0), y);
                                return t && (S += 1), t
                            },
                            createRender: function() {
                                let t, i = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                    u = c;
                                if (i && !0 === u.didReadQueryResult && (c = {
                                        connect: !1,
                                        token: {}
                                    }), !o.has(e) && (!b || null == l)) return;
                                let p = {
                                    connect: !1,
                                    token: {}
                                };
                                i && (p.errorValidation = u.errorValidation, y.errorValidation = u.errorValidation);
                                let g = new Set,
                                    h = r,
                                    v = l,
                                    C = -1,
                                    k = !1,
                                    M = e => {
                                        (k ? d : g).add(e)
                                    };
                                return {
                                    commit: () => {
                                        let e = !1;
                                        for (let t of g) e = e || !d.has(t), d.add(t);
                                        k = !0, s = v, a = h, w = !0, p.connect = !0, f(() => R(e), p) && (S += 1, n())
                                    },
                                    getSnapshot: () => (C !== S && (t = q(p), y.errorValidation = p.errorValidation, h = r, v = l, C = S), t),
                                    track: e => null == v ? e : m(v.snapshot, M)
                                }
                            },
                            getSnapshot: function() {
                                return q(c)
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
                        let n = c(t, !1);
                        return p(e, n) ? (u = i()).getSnapshot() : n
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
                            p(e, n) ? a(!1) : l()
                        });
                        return null != u && a(!0), () => {
                            r === l && (r = void 0), o()
                        }
                    }
                }
            },
            getCurrentAtomValue: g,
            getMetadata: h,
            isCurrentQueryResultReader: e => d.has(e),
            needsSubscriberAtom: (e, t) => p(e, t),
            markDerivedAtom: y,
            markAtom(e) {
                o.add(e)
            },
            recordDerivedQueryResult: b,
            withCurrentRead: c
        }
    }),
    PS: (function(e, t, n) {
        var r = n("Av"),
            l = n("vM");

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

        function a(e, t, n) {
            return t[l.b](e.node, e.chain, n)
        }

        function o(e, t) {
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
        }

        function s(e, t) {
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
        }
        n.d(t, {
            a: () => s,
            b: () => i,
            c: () => a,
            d: () => o,
            e: () => u
        })
    }),
    fb: (function(e, t, n) {
        n.d(t, {
            a: () => b,
            b: () => function e(t) {
                for (let e of ((0, U.a)(t), (0, U.h)(t), t.disposalLifecycles)) e.dispose();
                for (let e of t.familyBindings.values())
                    for (let n of e.values())(0, N.b)(t, n.value);
                for (let n of t.retainedScopeEntries.values())
                    for (let r of n.values()) t.autoDisposeScheduler.cancel(r), e(r.node);
                t.retainedScopeEntries.clear()
            },
            c: () => C,
            d: () => c,
            e: () => _,
            f: () => $,
            g: () => T,
            h: () => V,
            i: () => W,
            j: () => B,
            k: () => J,
            l: () => F,
            m: () => d,
            n: () => N.a,
            o: () => N.c,
            p: () => N.d,
            q: () => f,
            r: () => X,
            s: () => H,
            t: () => y,
            u: () => w,
            v: () => h,
            w: () => v,
            x: () => S,
            y: () => s,
            z: () => M,
            A: () => K,
            B: () => q,
            C: () => k,
            D: () => p,
            E: () => P
        });
        var r = n("ou"),
            l = n("WW"),
            i = n("iw"),
            u = n("PK"),
            a = n("w");
        let o = new WeakMap;

        function s(e, t) {
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

        function c(e, t) {
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

        function f(e, t, n) {
            return i.a.withCurrentRead(() => (function(e, t, n) {
                if (null != n) {
                    let e = n(t);
                    return i.a.isCurrentQueryResultReader(n) ? e : i.a.getCurrentAtomValue(t, e)
                }
                let r = o.get(e.store);
                if (!e.imperativeReadAtoms.has(t) || r?.has(t)) return i.a.getCurrentAtomValue(t, e.store.get(t));
                null == r && (r = new Set, o.set(e.store, r)), r.add(t);
                let l = [],
                    u = e;
                for (; null != u;) u.imperativeReadDepth += 1, l.push(u), u = u.parent;
                try {
                    let n = e.store.sub(t, () => {});
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
            (0, u.d)(e, t, n)
        }
        var g = n("vM");

        function h(e) {
            return "object" == typeof e && null != e && "atom" in e && "store" in e
        }

        function y(e) {
            return "object" == typeof e && null != e && g.e in e && "function" == typeof e[g.e]
        }

        function b(e, t) {
            return null != t && y(e) ? e[g.e](t) : e
        }

        function m(e, t) {
            return e?.enabled === !1 ? e : t ?? e
        }

        function v(e) {
            return "object" == typeof e && null != e && "kind" in e && ("readable-family" === e.kind || "signal-family" === e.kind)
        }

        function w(e) {
            return h(e) && "set" in e
        }

        function S(e) {
            return "object" == typeof e && null != e && "kind" in e && "signal-family" === e.kind
        }

        function C(e, t) {
            let n = new Map,
                r = t.parent;
            for (; null != r;) {
                let t = e.get(r.id);
                if (null == t) break;
                n.set(r.id, t), r = r.parent
            }
            return n
        }

        function k(e, t, n) {
            let r = e;
            for (; null != r;) {
                if (r.token === n) return r;
                r = r.parent
            }
            return q(t, n)
        }

        function q(e, t) {
            let n = e.get(t.id);
            if (null == n) throw Error("Missing scope instance");
            return n
        }

        function R(e, t, n, r, l) {
            return function(i, u, a) {
                if (h(i)) return M(t, e, i, n, m(r, 2 == arguments.length && y(i) ? u : void 0), l);
                if (y(i) && 2 == arguments.length) {
                    let a = k(t, e, i.scope),
                        o = b(i, m(r, u)),
                        s = l?.(o, a, e, n) ?? o.resolve(a, e);
                    return f(a, s, n)
                }
                if (void 0 !== u || arguments.length >= 2) {
                    let o = k(t, e, i.scope);
                    if (v(i)) return i.read(o, e, u, n, m(r, a), l);
                    let s = i[g.d](o, e, u);
                    return null != s.disposal && null != n && n(s.disposal.atom), s.value
                }
                let o = k(t, e, i.scope),
                    s = b(i, m(r, a)),
                    d = l?.(s, o, e, n) ?? s.resolve(o, e);
                return f(o, d, n)
            }
        }

        function M(e, t, n, r, l, u) {
            if (h(n)) {
                let a = b(n, l),
                    o = u?.(a, e, t, r) ?? a.atom;
                if (null != r && a.store === e.store) {
                    let t = a[g.c];
                    return null != t && r(t.atom), f(e, o, r)
                }
                return o === a.atom ? a.get() : i.a.getCurrentAtomValue(o, a.store.get(o))
            }
            let a = k(e, t, n.scope),
                o = b(n, l),
                s = u?.(o, a, t, r) ?? o.resolve(a, t);
            return f(a, s, r)
        }
        var E = n("xN"),
            O = n("m4"),
            D = n("Nx"),
            A = n("J6");

        function Q(e, t, n, r) {
            let l, i;
            return "infinite" === t.queryKind ? function(e, t, n, r) {
                let l = k(e.node, e.chain, t.scope),
                    i = C(e.chain, t.scope);
                if (i.set(t.scope.id, l), null == l.queryClient) throw Error("Missing query client");
                let u = (0, a.a)(l.queryClient, n),
                    o = t.getOptions(V(i, l, n, {
                        enabled: !1
                    }, r)),
                    s = () => {
                        let e = u.defaultQueryOptions(o),
                            t = u.getQueryCache().build(u, e),
                            n = "function" == typeof e.staleTime ? e.staleTime(t) : e.staleTime,
                            r = t.isStaleByTime(n),
                            l = u.fetchInfiniteQuery(o);
                        return r && (0, A.a)((0, A.c)(t)), l
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
                let l = k(e.node, e.chain, t.scope),
                    i = C(e.chain, t.scope);
                if (i.set(t.scope.id, l), null == l.queryClient) throw Error("Missing query client");
                return {
                    queryClient: (0, a.a)(l.queryClient, n),
                    queryOptions: t.getOptions(V(i, l, n, {
                        enabled: !1
                    }, r))
                }
            }(e, t, n, r), i = async () => {
                let e = l.queryClient.defaultQueryOptions(l.queryOptions),
                    t = l.queryClient.getQueryCache().build(l.queryClient, e),
                    n = "function" == typeof e.staleTime ? e.staleTime(t) : e.staleTime,
                    r = t.isStaleByTime(n);
                (0, A.b)(e, "independent");
                let i = (0, A.i)(t, () => l.queryClient.fetchQuery(e));
                r && (0, A.a)((0, A.c)(t));
                let u = r ? t.promise : void 0;
                for (; null != u;) try {
                    await u;
                    break
                } catch (n) {
                    let e = t.promise;
                    if (!(n instanceof D.a) || !n.silent || null == e || e === u) break;
                    (0, A.a)((0, A.c)(t)), i = i.catch(t => {
                        if (t instanceof D.a && t.silent) return e;
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

        function B(e, t, n) {
            return {
                async cancel(r, l, i, u) {
                    let [a, o, s] = x(e, r, l, i, u);
                    await Q(e, a, t, n).cancel(o, s)
                },
                getData: (r, l) => Q(e, j(e, r, l), t, n).getData(),
                getOptions: (r, l) => Q(e, j(e, r, l), t, n).getOptions(),
                fetch: async (r, l) => Q(e, j(e, r, l), t, n).fetch(),
                getOrFetch: async (r, l) => Q(e, j(e, r, l), t, n).getOrFetch(),
                async invalidate(r, l, i, u) {
                    let [a, o, s] = x(e, r, l, i, u);
                    await Q(e, a, t, n).invalidate(o, s)
                },
                setData(r, l, i, u) {
                    let [a, o, s] = x(e, r, l, i, u);
                    return Q(e, a, t, n).setData(o, s)
                },
                snapshot: (r, l) => Q(e, j(e, r, l), t, n)
            }
        }

        function j(e, t, n) {
            return v(t) ? t.resolve(e.node, e.chain, n) : t
        }

        function x(e, t, n, r, l) {
            return v(t) ? [j(e, t, n), r, l] : [j(e, t), n, r]
        }

        function K(e, t, n, r) {
            let l = k(e, t, n);
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

        function T(e, t, n, r, l, i) {
            let u = null == r ? L(n) : void 0,
                o = {
                    chain: t,
                    get: R(t, n, r, l, i),
                    getOwnValue: e => K(n, t, e, r),
                    node: n,
                    query: B({
                        chain: t,
                        node: n
                    }, r, i),
                    get queryClient() {
                        if (null == n.queryClient) throw Error("Missing query client");
                        return (0, a.a)(n.queryClient, r)
                    },
                    scope: e,
                    get value() {
                        return null == u && (null != r && function e(t, n) {
                            null != t.parent && e(t.parent, n), n(t.contextVersionAtom)
                        }(n, r), u = L(n)), u
                    }
                };

            function s(r) {
                let l = (0, O.a)();
                return (0, E.a)(i => r(T(e, t, n, i, void 0, l)), n.store)
            }
            return o.set = function(e, r, l) {
                w(e) ? p(e.store, e.atom, r) : function(e, r, l) {
                    if (S(e)) {
                        let i = e.resolve(n, t, r);
                        p(i.store, i.atom, l);
                        return
                    }
                    let i = k(n, t, e.scope);
                    p(i.store, e.resolve(i, t), r)
                }(e, r, l)
            }, o.watch = s, o.when = function(e) {
                return P(s, e)
            }, o
        }

        function P(e, t) {
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

        function F(e, t, n, r, l, i) {
            return {
                get queryClient() {
                    if (null == n.queryClient) throw Error("Missing query client");
                    return (0, a.a)(n.queryClient, r)
                },
                scope: T(e, t, n, r, l, i)
            }
        }

        function V(e, t, n, r, l) {
            return Object.assign(F(t.token, e, t, n, r, l), {
                get: R(e, t, n, r, l)
            })
        }

        function _(e, t, n, r, l, i, u) {
            let a = d(e => r(V(n, t, e)), i);
            return s(t, a), a.onMount = i => {
                if (null != u && t.store.get(u.atom)) return;
                let a = null == u || t.imperativeReadDepth > 0 ? void 0 : u.retain(),
                    o = T(e, n, t).watch(e => {
                        let t, n = !0,
                            u = {
                                scope: e,
                                get: e.get,
                                get queryClient() {
                                    return e.queryClient
                                },
                                set: e => {
                                    n && i(e)
                                }
                            };
                        i(r(u));
                        let a = l(u);
                        return null != a && "then" in a ? (I(a) && (t = a), Promise.resolve(a).then(e => {
                            n ? t = e : z(e)
                        }, e => {
                            n && globalThis.dispatchEvent(new ErrorEvent("error", {
                                cancelable: !0,
                                error: e
                            }))
                        })) : t = a, () => {
                            n && (n = !1, z(t))
                        }
                    });
                return () => {
                    o(), a?.()
                }
            }, a
        }

        function z(e) {
            if (null != e) {
                if (I(e)) return void e[Symbol.dispose]();
                e()
            }
        }

        function I(e) {
            return null != e && Symbol.dispose in e
        }
        var U = n("Av"),
            N = n("PS");

        function H(e, t, n) {
            if (null == t.parent) return null;
            let r = q(e.chain, t.parent),
                l = r.retainedScopeEntries.get(t)?.get(n)?.node;
            if (null == l) return null;
            let i = new Map(e.chain);
            return i.set(t.id, l), T(t, i, l)
        }

        function J(e, t, n, r) {
            let l = {
                cache: e,
                resolve(e, i) {
                    let u = k(e, i, t),
                        a = "signal" === l.cache ? u.signalBindings : u.cachedBindings,
                        o = a.get(l);
                    if (void 0 !== o) return r?.(o, u), o;
                    let s = C(i, t);
                    s.set(t.id, u);
                    let d = n(u, s);
                    return a.set(l, d), r?.(d, u), d
                },
                scope: t
            };
            return l
        }

        function X(e, t) {
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
        var G = n("K");

        function Y(e, t, n, r) {
            return (l, i) => {
                let u = (0, G.c)(i?.autoDispose),
                    a = new Map;
                return o => {
                    let s = X(o, i);
                    if (a.has(s)) return a.get(s);
                    let d = 1 / 0 === u ? void 0 : (0, G.b)(e, u, () => {
                            a.delete(s)
                        }, r),
                        c = l(o, {
                            ...$(e, t, o, void 0, n, d ?? r),
                            scope: T(e.token, t, e)
                        });
                    return a.set(s, c), c
                }
            }
        }

        function $(e, t, n, r, l, u) {
            return {
                derived: (a, o) => {
                    let d, f = p => {
                        let h = (0, O.a)(),
                            y = c(r => (null != u && r(u.atom), a(n => {
                                let l = b(n, p),
                                    i = l[g.c];
                                return null != i && r(i.atom), r(h(l, e, t, r))
                            }, Object.assign(F(e.token, t, e, r, p, h), {
                                key: n
                            }))), o?.isEqual);
                        s(e, y), (0, U.e)(e, y, "family-derived", {
                            debugLabel: r,
                            familyKey: n,
                            familyMember: l
                        });
                        let m = Object.assign(ee(e, y, u, () => i.a.createSubscriberAtom(y)), {
                            [g.e]: e => p?.enabled === !1 || e.enabled ? m : d = d ?? f(e)
                        });
                        return m
                    };
                    return f()
                },
                externalSignal: (i, a, o) => {
                    let s = _(e.token, e, t, e => "function" == typeof i ? i(Object.assign(e, {
                        key: n
                    })) : i, e => a(Object.assign(e, {
                        key: n
                    })), o?.isEqual, u);
                    return (0, U.e)(e, s, "family-external", {
                        debugLabel: r,
                        familyKey: n,
                        familyMember: l
                    }), ee(e, s, u)
                },
                family: Y(e, t, l, u),
                get: R(t, e),
                signal: (i, a) => {
                    var o, c, h;
                    let y = a?.getServerSnapshot,
                        b = d(r => "function" == typeof i ? i(Object.assign(F(e.token, t, e, r), {
                            key: n
                        })) : i, a?.isEqual, null == y ? void 0 : () => y(n)),
                        m = a?.onMount;
                    return null != m && s(e, b), (null != m || null != u) && (b.onMount = r => {
                        let l = null == u || e.imperativeReadDepth > 0 ? void 0 : e.store.sub(u.atom, () => {}),
                            i = m?.(r, Object.assign(T(e.token, t, e), {
                                key: n
                            }));
                        if (null != l || null != i) return () => {
                            i?.(), l?.()
                        }
                    }), (0, U.e)(e, b, "family-signal", {
                        debugLabel: r,
                        familyKey: n,
                        familyMember: l,
                        writeValue: t => {
                            (0, U.i)(e.store, b, t)
                        }
                    }), o = e, c = b, h = u, {
                        [g.c]: h,
                        atom: c,
                        get: () => f(o, c),
                        set(e) {
                            p(o.store, c, e)
                        },
                        subscribe: e => o.store.sub(c, e),
                        store: o.store
                    }
                },
                signalFamily: (n, r, i) => Y(e, t, l, u)((e, t) => {
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

        function ee(e, t, n, r) {
            return {
                [g.c]: n,
                atom: t,
                createSubscriberAtom: r,
                get: () => f(e, t),
                subscribe: n => e.store.sub(t, n),
                store: e.store
            }
        }
    }),
    w: (function(e, t, n) {
        var r = n("su"),
            l = n("ou");
        let i = (0, l.a)(!1),
            u = new WeakMap,
            a = (0, l.a)(() => new WeakMap);

        function o(e, t) {
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
        }

        function s(e, t) {
            let n = u.get(e);
            return null == n && ((n = (0, l.b)()).set(i, !0), u.set(e, n)), n.get(t)
        }
        n.d(t, {
            a: () => o,
            b: () => s
        }, {
            c: i
        })
    }),
    PK: (function(e, t, n) {
        var r = n("ou");
        let l = new WeakMap;

        function i(e) {
            return l.has(e)
        }

        function u(e, t) {
            let n = e.node.store;
            if (l.has(n)) throw Error("Cannot start a nested Maitai signal transaction");
            let i = new Map,
                u = [],
                o = (0, r.a)(null, (r, o) => {
                    let s = {
                        get: e => r(e),
                        isReplaying: !1,
                        record: (e, t) => {
                            let l = i.get(e);
                            if (null != l) return void l.refresh();
                            let o = r(e),
                                s = {
                                    hasChanged: () => !Object.is(t, o),
                                    redo: () => a(n, e, o),
                                    refresh: () => {
                                        o = r(e)
                                    },
                                    undo: () => a(n, e, t)
                                };
                            i.set(e, s), u.push(s)
                        },
                        recordMutation: e => {
                            s.isReplaying || u.push({
                                ...e,
                                hasChanged: () => !0,
                                refresh: () => {}
                            })
                        },
                        set: (e, t) => {
                            o(e, t)
                        }
                    };
                    l.set(n, s);
                    try {
                        return t(e)
                    } catch (e) {
                        for (let e of (s.isReplaying = !0, [...u].reverse())) e.undo();
                        throw e
                    } finally {
                        l.delete(n)
                    }
                }),
                s = n.set(o);
            return {
                changes: u.filter(e => e.hasChanged()),
                value: s
            }
        }

        function a(e, t, n) {
            let r = l.get(e);
            if (null == r) return void e.set(t, n);
            let i = r.get(t);
            r.set(t, n), r.isReplaying || r.record(t, i)
        }
        n.d(t, {
            a: () => function e(t, n) {
                let r = l.get(t.node.store);
                null == r ? u(t, () => e(t, n)) : (r.recordMutation({
                    redo: () => e(t, n),
                    undo: () => e(t, {
                        redo: n.undo,
                        undo: n.redo
                    })
                }), n.redo())
            },
            b: () => i,
            c: () => u,
            d: () => a
        })
    }),
    m4: (function(e, t, n) {
        var r = n("iw"),
            l = n("w");

        function i() {
            let e = new WeakMap;
            return function(t, n, i, u) {
                let a;
                if (u?.(l.c)) return "atom" in t ? t.atom : t.resolve(n, i);
                let o = e.get(t);
                if (null != o) return o;
                let s = "atom" in t ? t.atom : t.resolve(n, i);
                if (null == t.createSubscriberAtom) return s;
                let d = "atom" in t ? t.store : n.store;
                try {
                    a = d.get(s)
                } catch {
                    return s
                }
                if (!r.a.needsSubscriberAtom(s, a)) return s;
                let c = "atom" in t ? t.createSubscriberAtom() : t.createSubscriberAtom(n, i);
                return e.set(t, c), c
            }
        }
        n.d(t, {
            a: () => i
        })
    }),
    vM: (function(e, t, n) {
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
    Hl: (function(e, t, n) {
        var r = n("t"),
            l = n("jw"),
            i = n("PK");
        n.d(t, {
            a: () => i.c,
            b: () => r.a,
            c: () => l.c
        })
    })
};