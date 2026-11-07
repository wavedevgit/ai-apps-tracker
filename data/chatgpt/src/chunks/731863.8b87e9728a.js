export const __rspack_esm_ids = [731863];
export const __webpack_modules__ = {
    sxiN: (function(e, t, r) {
        r.d(t, {
            a: () => _,
            b: () => b,
            c: () => g
        });
        var a = r("BolX"),
            n = r("twmu"),
            c = r("Cslg"),
            s = r("CWeU"),
            u = r("OWtl"),
            o = r("rvFo"),
            l = r("UR81"),
            i = r("LjYy");

        function d(e) {
            return (0, l.a)(e) && e !== i.a.K12
        }
        let f = (0, a.q)(u.a, e => {
                let {
                    identity: t,
                    generation: a
                } = e;
                return {
                    queryKey: ["classroom-member-access", t.accountId, t.userId, a],
                    gcTime: o.b.ONE_MINUTE,
                    staleTime: o.b.ONE_MINUTE,
                    refetchOnWindowFocus: !1,
                    retry: !1,
                    queryFn: async e => {
                        let {
                            signal: a
                        } = e, {
                            Request: n
                        } = await Promise.resolve().then(r.bind(r, "Kwur"));
                        try {
                            let e = await n.safeRequest("get", "/classroom/workspaces/{workspace_id}/member-access", {
                                parameters: {
                                    path: {
                                        workspace_id: t.accountId
                                    }
                                },
                                expectedIdentity: t,
                                additionalHeaders: {
                                    "ChatGPT-Account-ID": t.accountId,
                                    "X-OpenAI-Use-Sheep": "1"
                                },
                                expectedErrorStatuses: [401, 403, 404],
                                cache: "no-store",
                                signal: a
                            });
                            return a.throwIfAborted(), {
                                ...t,
                                access: e
                            }
                        } catch (n) {
                            let {
                                FetchError: e
                            } = await Promise.resolve().then(r.bind(r, "eShZ"));
                            if (a.throwIfAborted(), n instanceof e && [401, 403, 404].includes(n.status)) return {
                                ...t,
                                access: null
                            };
                            throw n
                        }
                    }
                }
            }),
            _ = (0, a.c)(u.a, e => {
                let t, {
                        get: r
                    } = e,
                    a = r(c.l);
                if ("loading" === a.status || !r(c.i)) return "loading";
                let u = r(c.f),
                    o = r(c.j);
                if ("allowed" !== a.status || null == u || null == o) return "unavailable";
                let l = r(c.e);
                if ("loading" === l.status) return "loading";
                if ("loaded" !== l.status || "workspace" !== l.structure) return "unavailable";
                let i = r(c.d);
                if (null != i && "unknown" !== i && !d(i)) return "unavailable";
                let _ = r(n.b, u);
                if (_.isError) return "error";
                if (null == _.data) return "loading";
                if (b = _.data, t = b.accounts?.[u], !("default" !== u && b.account_ordering?.includes(u) === !0 && t?.account?.structure === "workspace" && !t.account.is_deactivated && (null == t.account.account_id || t.account.account_id === u) && !1 !== t.can_access_with_session && d(t.account.plan_type))) return "unavailable";
                let g = {
                    accountId: u,
                    userId: o
                };
                var b, h = r(f, {
                    identity: g,
                    generation: r(s.d)
                });
                if (h.isError || h.isPaused) return "error";
                if (h.isPlaceholderData) return "unavailable";
                if (h.isPending || h.isFetching) return "loading";
                let p = h.data;
                return p?.accountId !== g.accountId || p.userId !== g.userId || p.access?.can_access !== !0 ? "unavailable" : !0 === p.access.can_open_instructor_workspace ? "instructor" : "member"
            });

        function g(e) {
            let t = e.get(c.f),
                r = e.get(c.j);
            if (null == t || null == r || "error" !== e.get(_)) return;
            let a = e.get(n.b, t);
            a.isError ? a.refetch({
                cancelRefetch: !1
            }) : e.get(f, {
                identity: {
                    accountId: t,
                    userId: r
                },
                generation: e.get(s.d)
            }).refetch({
                cancelRefetch: !1
            })
        }

        function b(e, t) {
            let r = {
                identity: t,
                generation: e.get(s.d)
            };
            e.query.cancel(f, r), e.query.setData(f, r, {
                ...t,
                access: null
            })
        }
    })
};