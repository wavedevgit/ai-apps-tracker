export const __rspack_esm_ids = [299627];
export const __webpack_modules__ = {
    v0xU: (function(e, t, n) {
        var a = n("QdUF");

        function r() {
            let e = (0, a.getBrowserChatGptAuthSnapshot)();
            return e?.userId && e.accessToken && !(0, a.isBrowserWorkspaceSwitchPending)() ? JSON.stringify([e.userId, e.accountId]) : null
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, {
                        frame: o,
                        target: i,
                        owner: s,
                        transport: l,
                        onStatus: c
                    } = e,
                    d = new AbortController,
                    u = "",
                    h = () => {
                        d.abort(), o.srcdoc = "", o.removeAttribute("src"), n = n ?? t?.dispose(), t = void 0, window.removeEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.removeEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), o.removeEventListener("load", m)
                    },
                    p = () => {
                        if (r() !== s) {
                            h(), c("error");
                            return
                        }
                        let e = (0, a.getBrowserChatGptAuthSnapshot)()?.accessToken;
                        null != t && e && e !== u && (u = e, t.refresh(e).catch(() => {
                            d.signal.aborted || (h(), c("error"))
                        }))
                    },
                    m = () => {
                        d.signal.aborted || null == t || o.hasAttribute("srcdoc") || c("ready")
                    };
                o.srcdoc = "", window.addEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.addEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), o.addEventListener("load", m);
                let f = (0, a.getBrowserChatGptAuthSnapshot)();
                if (null == f || r() !== s) return h(), c("error"), async () => {};
                c("loading"), u = f.accessToken;
                let g = (async () => {
                    try {
                        let e = await l.open({
                            target: i,
                            accessToken: u,
                            signal: d.signal
                        });
                        if (d.signal.aborted || r() !== s) {
                            n = e.dispose(), d.signal.aborted || (h(), c("error"));
                            return
                        }
                        if (t = e, "https:" !== e.url.protocol || e.url.username || e.url.password || e.url.origin === window.location.origin || e.url.origin !== i.publicUrl.origin) throw Error("Portal preview requires an isolated origin");
                        o.src = e.url.href, o.removeAttribute("srcdoc"), p()
                    } catch {
                        d.signal.aborted || (h(), c("error"))
                    }
                })();
                return () => (h(), g.then(() => n))
            },
            b: r
        })
    }),
    m625: (function(e, t, n) {
        let a = /^https:\/\/([a-f0-9]{32})--([1-9][0-9]{0,4})--preview\.([^/?#]+)(?=[/?#]|$)/iu;
        n.d(t, {}, {
            a: function(e, t) {
                if (/[\s\p{Cc}\\]/u.test(e)) return null;
                let n = a.exec(e);
                if (null == n || n[3].toLowerCase() !== (t ?? "chatgpt.site")) return null;
                let r = Number(n[2]);
                return r > 65535 ? null : {
                    publicUrl: new URL(e),
                    port: r
                }
            }
        })
    }),
    B1XR: (function(e, t, n) {
        n.d(t, {
            SitePreviewBridge: () => I
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            i = n("aFoA"),
            s = n("Bbed"),
            l = n("tSEg"),
            c = n("zd8w"),
            d = n("IDNd"),
            u = n("Ot7V"),
            h = n("QcW8"),
            p = n("ZU27"),
            m = n("EpL9"),
            f = n("M8lA"),
            g = n("bf6R"),
            v = n("svjy"),
            b = n("rd65"),
            x = n("v0xU"),
            w = n("m625");
        let y = (0, s.a)(async () => (await n.e(969762).then(n.bind(n, "KodB"))).PortalPreview),
            C = (0, m.k)("portal-preview", y, {
                ownsSingleTabHeader: () => !0,
                dropDestinations: ["right"],
                isAvailable: () => !0 === (0, f.getClientBootstrap)().portalPreviewEnabled,
                open: j,
                canUndoClose: () => !1,
                showInNewTabLauncher: !1
            });

        function j(e, t, n) {
            if (null == n || !C.isAvailable(e) || e.get(l.j) || !e.get(h.h)) return !1;
            let r = (0, f.getClientBootstrap)().stagingPortalPreviewDomain,
                o = (0, w.a)(t, r),
                i = (0, x.b)();
            return null != o && null != i && ((0, p.h)(e, C, {
                id: `portal-preview:${o.publicUrl.origin}`,
                icon: (0, a.jsx)(g.Vd, {}),
                props: {
                    url: o.publicUrl.href,
                    owner: i,
                    transport: n,
                    stagingPortalDomain: r
                },
                revealAndFocus: !0,
                title: e.get(v.a).formatMessage({
                    id: "sites.portals.tabTitle",
                    defaultMessage: "Local site preview"
                })
            }), (0, b.b)(e))
        }
        var E = n("lkCH");
        let _ = {
            async open(e) {
                let {
                    target: t,
                    accessToken: n,
                    signal: a
                } = e, r = new URL("/_portals/web-session", t.publicUrl.origin), o = crypto.randomUUID(), i = `portal-preview:${t.publicUrl.origin}`, s = !1, l = (0, E.a)(), c = (0, E.a)(), d = Promise.resolve(), u = () => (s = !0, c.resolve(void 0), f), h = () => {
                    u()
                }, p = async (e, t) => fetch(r, {
                    method: e,
                    credentials: "include",
                    mode: "cors",
                    redirect: "error",
                    cache: "no-store",
                    referrerPolicy: "no-referrer",
                    signal: AbortSignal.timeout(1e4),
                    headers: {
                        "X-Portals-Session-Id": o,
                        ...null == t ? {} : {
                            Authorization: t
                        }
                    }
                }), m = async e => {
                    if (s || a.aborted) throw Error("Preview closed");
                    try {
                        let t = await p("POST", `Bearer ${e}`);
                        if (204 !== t.status) throw Error("Preview session unavailable");
                        if (s || a.aborted) throw Error("Preview closed");
                        let n = await p("GET");
                        if (204 !== n.status || s || a.aborted) throw Error("Preview session unavailable")
                    } catch {
                        throw Error("Preview session unavailable")
                    }
                }, f = navigator.locks.request(i, {
                    ifAvailable: !0
                }, async e => {
                    if (null == e) throw Error("Preview already open");
                    a.addEventListener("abort", h, {
                        once: !0
                    });
                    try {
                        await m(n), l.resolve({
                            url: new URL(t.publicUrl.href),
                            refresh: e => {
                                let t = d.then(() => m(e));
                                return d = t.catch(() => {}), t
                            },
                            dispose: u
                        }), await c.promise
                    } finally {
                        s = !0, a.removeEventListener("abort", h), await d, await (async () => {
                            await p("DELETE")
                        })().catch(() => {})
                    }
                }).catch(() => l.reject(Error("Preview session unavailable")));
                return l.promise
            }
        };

        function k(e) {
            let t, n, a = (0, r.c)(5),
                {
                    transport: s
                } = e,
                h = (0, o.y)(l.a),
                p = (0, c.useContext)(d.b);
            return a[0] !== h || a[1] !== s || a[2] !== p ? (t = () => {
                let e = void 0 === s ? _ : s;
                if (null != e && p) return (0, u.h)(t => {
                    let {
                        href: n,
                        conversationId: a
                    } = t;
                    if (null != a) {
                        let e = (0, l.d)(h.value, {
                            includeChatGpt: !0
                        });
                        if (!("chatgpt-thread" === h.value.routeKind ? (0, i.d)(h.get, a) === (0, i.d)(h.get, e) : a === e)) return !1
                    }
                    return j(h, n, e)
                })
            }, n = [h, s, p], a[0] = h, a[1] = s, a[2] = p, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, c.useEffect)(t, n), null
        }
        var S = n("gbrq"),
            T = n("rxj0"),
            A = n("uk1V"),
            N = n("PIpC"),
            L = n("UejO");

        function P() {
            let e, t, a, s, d = (0, r.c)(6),
                u = (0, o.y)(l.a);
            return d[0] !== u ? (e = () => {
                let e = null;
                return u.watch(t => {
                    let a = t.get(N.c),
                        r = t.get(h.h),
                        o = t.get(L.b),
                        s = t.get(i.a, o?.hostId == null ? o?.conversationId ?? null : null),
                        l = t.get(S.h),
                        c = t.get(p.l.tabs$),
                        d = "chatgpt-thread" === t.value.routeKind && t.get(T.e, t.value.conversationId);
                    if (null == a || !r || d || e === a || (e = a, (0, L.a)(o, t.value, s, t.value.clientThreadId) || l || c.length > 0)) return;
                    let u = (0, N.a)(a);
                    if (!u?.isOpen) return;
                    let m = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return m ? null : t.query.fetch(n, u.projectId)
                    }).then(e => {
                        let n = (0, N.a)(a);
                        m || null == e || !n?.isOpen || n.projectId !== u.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(T.e, t.value.conversationId) || (0, A.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, M), () => {
                        m = !0
                    }
                })
            }, t = [u], d[0] = u, d[1] = e, d[2] = t) : (e = d[1], t = d[2]), (0, c.useEffect)(e, t), d[3] !== u ? (a = () => {
                let e = u.get(S.i),
                    t = null;
                return u.watch(n => {
                    let a = n.get(S.i),
                        r = n.get(p.l.activeTab$),
                        o = n.get(N.c);
                    (a !== e || null == t && null != o) && null != o && r?.tabId.startsWith("site-preview:") && (0, N.b)(o, r.tabId.slice(13), a), e = a, t = o
                })
            }, s = [u], d[3] = u, d[4] = a, d[5] = s) : (a = d[4], s = d[5]), (0, c.useEffect)(a, s), null
        }

        function M() {}
        let R = (0, s.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function I() {
            let e, t, n, s, c, d = (0, r.c)(13),
                u = (0, o.y)(l.a),
                h = (0, o.z)(L.b),
                p = (0, o.x)(i.a, h?.hostId == null ? h?.conversationId ?? null : null);
            if ("home" !== u.value.routeKind && "chatgpt-thread" !== u.value.routeKind && "local-thread" !== u.value.routeKind) return null;
            d[0] !== h || d[1] !== p || d[2] !== u ? (e = h?.url != null && (0, L.a)(h, u.value, p, u.value.clientThreadId), d[0] = h, d[1] = p, d[2] = u, d[3] = e) : e = d[3];
            let m = e;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(k, {}), d[4] = t) : t = d[4], d[5] !== u ? (n = "home" !== u.value.routeKind ? (0, a.jsx)(P, {}) : null, d[5] = u, d[6] = n) : n = d[6], d[7] !== m || d[8] !== h ? (s = m ? (0, a.jsx)(R, {
                pending: h
            }) : null, d[7] = m, d[8] = h, d[9] = s) : s = d[9], d[10] !== n || d[11] !== s ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, s]
            }), d[10] = n, d[11] = s, d[12] = c) : c = d[12], c
        }
    }),
    Azn0: (function(e, t, n) {
        var a = n("Q840"),
            r = n("QcW8"),
            o = n("ZU27"),
            i = n("tSEg");
        let s = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return null != t(r.ab) && null != t(o.l.activeTab$)
            }),
            l = (0, a.c)(i.a, e => {
                let {
                    get: t
                } = e;
                return t(s) && !t(r.B)
            });
        n.d(t, {}, {
            a: s,
            b: l
        })
    }),
    mYNH: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("l2oX"),
            i = n("Q840"),
            s = n("zd8w"),
            l = n("Wf1j"),
            c = n("Q2Qp"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("wD9O"),
            p = n("nKJ6"),
            m = n("kois"),
            f = n("vi3X"),
            g = n("O9Pc"),
            v = n("fDIZ"),
            b = n("jEN2"),
            x = n("AKr5"),
            w = n("wqvF"),
            y = n("giDA"),
            C = n("fQ9c"),
            j = n("ttIa"),
            E = n("xD3Z"),
            _ = n("Z2JT"),
            k = n("Sgih"),
            S = n("tSEg"),
            T = n("hZax"),
            A = n("SHid"),
            N = n("El6m"),
            L = n("dN0a"),
            P = n("WwnD"),
            M = n("giVD"),
            R = n("Vhua"),
            I = n("Azn0"),
            D = n("abd8"),
            z = n("GMTh");

        function O(e) {
            let t, n, o, l, c, d, u, h, p, m, g, b, x, w, C, j = (0, r.c)(49),
                {
                    children: E,
                    composerRef: _,
                    mainContentElement: k,
                    presentation: T,
                    paneContext: A,
                    layout: P,
                    reserveContent: M,
                    reserveFullComposerHeight: R
                } = e,
                I = (0, i.y)(S.a),
                D = (0, s.useContext)(N.b),
                z = (0, s.useContext)(v.a),
                O = (0, s.useContext)(f.a),
                B = (0, s.useContext)(y.a),
                {
                    activeBrowserTabId: U
                } = D,
                W = null != A,
                {
                    isCompact: V,
                    isDockedTop: H,
                    isHidden: F,
                    isMinimized: Q
                } = T,
                {
                    isMoving: q,
                    composerContentHeight: $,
                    dockedReservePx: K
                } = P,
                Z = !M || F || Q ? 0 : Math.max(118, V ? K : 0, R ? $ + 118 - 102 : 0),
                X = H && V && K > 0 ? Z : 0,
                [G, Y] = (0, s.useState)(!Q);
            (V || Q) && !Q !== G && Y(!Q);
            let J = M && !F && G ? L.b : 0;
            j[0] !== U || j[1] !== _ || j[2] !== W ? (t = () => {
                if (W || null == U) return;
                let e = _.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && _.current?.contains(e) && e.blur()
            }, n = [U, _, W], j[0] = U, j[1] = _, j[2] = W, j[3] = t, j[4] = n) : (t = j[3], n = j[4]), (0, s.useLayoutEffect)(t, n), j[5] !== _ || j[6] !== J || j[7] !== H || j[8] !== F || j[9] !== Q || j[10] !== W || j[11] !== k || j[12] !== Z || j[13] !== I || j[14] !== X ? (o = () => {
                if (W || null == k) return;
                I.set(L.n, {
                    owner: _,
                    style: {
                        [L.a]: H ? `${J}px 0 0` : `0 0 ${J}px`,
                        [L.c]: `${F||Q||H?0:102}px`,
                        [L.d]: `${H?0:Z}px`,
                        [L.g]: `${H?Z:0}px`
                    }
                }), (0, L.r)(I, H ? 0 : Z), I.set(L.o, X);
                let e = H ? "top" : "bottom";
                I.set(L.k, 0 === J ? null : e)
            }, l = [_, J, W, H, F, Q, k, Z, I, X], j[5] = _, j[6] = J, j[7] = H, j[8] = F, j[9] = Q, j[10] = W, j[11] = k, j[12] = Z, j[13] = I, j[14] = X, j[15] = o, j[16] = l) : (o = j[15], l = j[16]), (0, s.useLayoutEffect)(o, l), j[17] !== _ || j[18] !== W || j[19] !== k || j[20] !== I ? (c = () => {
                if (!W && null != k) return () => {
                    let e = I.get(L.n);
                    e?.owner === _ && (I.set(L.n, {
                        ...e,
                        owner: null
                    }), (0, L.r)(I, 0), I.set(L.o, 0), I.set(L.k, null))
                }
            }, d = [_, W, k, I], j[17] = _, j[18] = W, j[19] = k, j[20] = I, j[21] = c, j[22] = d) : (c = j[21], d = j[22]), (0, s.useLayoutEffect)(c, d);
            let ee = !V || Q || q || $ > 102;
            j[23] !== _ || j[24] !== ee || j[25] !== W || j[26] !== I ? (u = () => {
                let e = _.current;
                if (W || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    I.set(L.j, ee || t)
                };
                t();
                let n = ee ? null : new MutationObserver(t);
                return n?.observe(e, {
                    attributes: !0,
                    attributeFilter: ["aria-expanded"],
                    childList: !0,
                    subtree: !0
                }), () => {
                    n?.disconnect()
                }
            }, h = [_, ee, W, I], j[23] = _, j[24] = ee, j[25] = W, j[26] = I, j[27] = u, j[28] = h) : (u = j[27], h = j[28]), (0, s.useLayoutEffect)(u, h), j[29] !== W || j[30] !== I ? (m = () => () => {
                W || I.set(L.j, !1)
            }, p = [W, I], j[29] = W, j[30] = I, j[31] = p, j[32] = m) : (p = j[31], m = j[32]), (0, s.useLayoutEffect)(m, p);
            let et = null == A ? D : A.transition,
                en = null == A ? z : A.escapeHandler,
                ea = null == A ? O : A.bannerTarget,
                er = null == A ? B : A.overlayOwner,
                eo = W ? "contents" : void 0;
            return j[33] !== E || j[34] !== _ || j[35] !== eo ? (g = (0, a.jsx)("div", {
                ref: _,
                className: eo,
                "data-right-panel-composer-overlay-content": "true",
                children: E
            }), j[33] = E, j[34] = _, j[35] = eo, j[36] = g) : g = j[36], j[37] !== er || j[38] !== g ? (b = (0, a.jsx)(y.a, {
                value: er,
                children: g
            }), j[37] = er, j[38] = g, j[39] = b) : b = j[39], j[40] !== ea || j[41] !== b ? (x = (0, a.jsx)(f.a, {
                value: ea,
                children: b
            }), j[40] = ea, j[41] = b, j[42] = x) : x = j[42], j[43] !== en || j[44] !== x ? (w = (0, a.jsx)(v.a, {
                value: en,
                children: x
            }), j[43] = en, j[44] = x, j[45] = w) : w = j[45], j[46] !== et || j[47] !== w ? (C = (0, a.jsx)(N.b, {
                value: et,
                children: w
            }), j[46] = et, j[47] = w, j[48] = C) : C = j[48], C
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, B, U, W, V = (0, r.c)(58),
                    {
                        children: H,
                        composerOnly: F,
                        forceExpanded: Q,
                        placement: q,
                        showHeader: $,
                        showConversationTitleMenu: K,
                        showComposerDivider: Z,
                        isHidden: X,
                        persistPresentation: G,
                        reserveContent: Y,
                        reserveFullComposerHeight: J,
                        onPresentationChange: ee,
                        title: et,
                        minimizedIcon: en,
                        titleContent: ea,
                        statusState: er,
                        titleStatusState: eo,
                        hasElicitation: ei,
                        notifications: es,
                        workingPreview: el,
                        compactWorkingPreview: ec,
                        responsePreview: ed,
                        previewBubble: eu,
                        renderTranscript: eh,
                        hasTranscript: ep,
                        pendingFormId: em,
                        emptyState: ef
                    } = e,
                    eg = void 0 !== F && F,
                    ev = void 0 !== Q && Q,
                    eb = void 0 === $ || $,
                    ex = void 0 === Z ? !eg : Z,
                    ew = void 0 === G || G,
                    ey = void 0 === em ? k.a : em,
                    eC = (0, i.y)(S.a),
                    ej = "pane" === (void 0 === q ? "floating" : q),
                    eE = (0, T.f)("2163293173"),
                    e_ = eE ? ef : void 0,
                    ek = !eg || eE && (null != e_ || (ep ?? null != eh)),
                    eS = (0, i.z)(!!ek && I.a),
                    eT = (0, l.a)(),
                    {
                        isHidden: eA
                    } = (0, z.a)(ej ? "embedded" : "content"),
                    eN = void 0 !== X && X || eA,
                    eL = (0, i.z)(!(void 0 !== K && K) || ej || eN ? null : M.a),
                    eP = (0, s.useContext)(c.a),
                    eM = (0, s.useContext)(N.b),
                    eR = (0, s.useContext)(N.a),
                    eI = (0, s.useContext)(g.a),
                    eD = (0, s.useContext)(v.a),
                    ez = (0, s.useContext)(f.a),
                    eO = (0, s.useContext)(y.a),
                    eB = (0, h.c)(),
                    [eU, eW] = (0, s.useState)(null),
                    eV = !(0, i.z)(L.q),
                    eH = (0, s.useRef)(null),
                    eF = (0, i.z)(ey),
                    eQ = (0, i.z)(ew ? _.a : void 0);
                ek || eb || (eQ = "compact");
                let eq = (0, i.z)(null == eF && (ei ?? N.c)),
                    e$ = (0, i.z)(u.l.activeTab$),
                    eK = (0, i.z)(d.q),
                    eZ = (0, i.z)(!!eK && R.i);
                V[0] !== e$ || V[1] !== ej ? (t = ej ? null : (0, p.getThreadBrowserTabIdFromPanelTab)(e$), V[0] = e$, V[1] = ej, V[2] = t) : t = V[2];
                let eX = t,
                    eG = void 0 !== J && J || e$?.tabType.kind === "latex-document" || e$?.tabType.kind === "image-preview";
                V[3] !== eF ? (n = () => {
                    let e = null != eF ? (0, x.a)(eH.current) : eH.current?.querySelector("[contenteditable='true']");
                    null == e || (0, b.g)(e) || e.focus({
                        preventScroll: !0
                    })
                }, V[3] = eF, V[4] = n) : n = V[4];
                let eY = n;
                V[5] === Symbol.for("react.memo_cache_sentinel") ? (B = (0, a.jsx)("div", {
                    ref: e => {
                        null != e && eW(e)
                    },
                    className: "contents"
                }), V[5] = B) : B = V[5];
                let eJ = ej || eN;
                return V[6] !== eX || V[7] !== e$ || V[8] !== ek || V[9] !== eS || V[10] !== H || V[11] !== ec || V[12] !== eg || V[13] !== eE || V[14] !== e_ || V[15] !== eY || V[16] !== ev || V[17] !== eq || V[18] !== ep || V[19] !== eK || V[20] !== ez || V[21] !== eD || V[22] !== eO || V[23] !== eR || V[24] !== eM || V[25] !== eT || V[26] !== eN || V[27] !== eV || V[28] !== ej || V[29] !== eP || V[30] !== en || V[31] !== eZ || V[32] !== es || V[33] !== ee || V[34] !== eU || V[35] !== eF || V[36] !== ew || V[37] !== eu || V[38] !== eh || V[39] !== Y || V[40] !== ed || V[41] !== eC || V[42] !== eG || V[43] !== ex || V[44] !== eb || V[45] !== er || V[46] !== eQ || V[47] !== eI || V[48] !== et || V[49] !== ea || V[50] !== eL || V[51] !== eo || V[52] !== eB || V[53] !== el ? (U = e => (0, a.jsx)(o.a, {
                    transformPagePoint: e => ({
                        x: e.x / eB,
                        y: e.y / eB
                    }),
                    children: (0, a.jsx)(N.b, {
                        value: ej ? eM : {
                            activeBrowserTabId: eX,
                            isInsideOverlay: !0,
                            onAttachmentAdded: () => {
                                eC.get(u.l.activeTab$)?.tabId === e$?.tabId && (eC.get(L.l) || (0, L.i)(eC, {
                                    prefersReducedMotion: !0
                                }), (0, b.d)())
                            },
                            shouldAnimate: !1
                        },
                        children: (0, a.jsx)(N.a, {
                            value: ej ? eR : "expanded",
                            children: (0, a.jsx)(j.a, {
                                preserveLayoutOnEscape: !0,
                                onResize: e => (0, m.n)(eC, {
                                    dockPosition: e
                                }),
                                contentChat: {
                                    focusComposer: eY,
                                    onOpenRightPane: eK && eS ? () => {
                                        (0, P.a)(eC, "chat") && eE && eC.set(A.a, eC.get(d.lb))
                                    } : void 0,
                                    openRightPaneDisabled: eZ
                                },
                                dockThreadKey: D.c,
                                canDock: ek || eb,
                                titleContent: eL ?? ea,
                                minimizedIcon: en,
                                statusState: er,
                                titleStatusState: eo,
                                hasTranscript: ep,
                                emptyState: e_,
                                pendingFormId: eF,
                                notifications: es,
                                workingPreview: el,
                                compactWorkingPreview: ec,
                                responsePreview: ed,
                                previewBubble: eu,
                                containerSize: e,
                                renderMenu: eK ? void 0 : e => (0, a.jsx)(E.a, {
                                    ...e,
                                    showOptions: !eE || ek
                                }),
                                forceExpanded: ev || eq && (eE || !eg),
                                isHidden: ej || eN,
                                isMinimized: eV,
                                presentation: eQ,
                                showHeader: eb,
                                showComposerDivider: ex,
                                background: eg && !eb ? void 0 : "panel",
                                onPresentationChange: e => {
                                    ew && eC.set(_.a, e), ee?.(e)
                                },
                                onMinimizedChange: e => {
                                    (e ? L.u : L.i)(eC, {
                                        prefersReducedMotion: !0
                                    })
                                },
                                title: et ?? eT.formatMessage({
                                    id: "quickChat.mainConversation",
                                    defaultMessage: "Chat"
                                }),
                                renderTranscript: null == eh ? void 0 : (e, t) => eh({
                                    isVisible: t && !ej && !eN
                                }),
                                renderComposer: (e, t) => (0, a.jsx)(g.a, {
                                    value: ej || null == eX ? eI : eP,
                                    children: (0, a.jsx)(w.a, {
                                        target: ej ? eU : null,
                                        children: (0, a.jsx)(O, {
                                            composerRef: eH,
                                            mainContentElement: eP,
                                            presentation: e,
                                            paneContext: ej ? {
                                                transition: eM,
                                                escapeHandler: eD,
                                                bannerTarget: ez,
                                                overlayOwner: eO
                                            } : void 0,
                                            layout: t,
                                            reserveFullComposerHeight: eG,
                                            reserveContent: Y ?? (null == eX && e$?.tabType.kind !== "mcp-app" && e$?.tabType.kind !== "mcp-extension"),
                                            children: "function" == typeof H ? H(ej ? void 0 : e) : H
                                        })
                                    })
                                })
                            })
                        })
                    })
                }), V[6] = eX, V[7] = e$, V[8] = ek, V[9] = eS, V[10] = H, V[11] = ec, V[12] = eg, V[13] = eE, V[14] = e_, V[15] = eY, V[16] = ev, V[17] = eq, V[18] = ep, V[19] = eK, V[20] = ez, V[21] = eD, V[22] = eO, V[23] = eR, V[24] = eM, V[25] = eT, V[26] = eN, V[27] = eV, V[28] = ej, V[29] = eP, V[30] = en, V[31] = eZ, V[32] = es, V[33] = ee, V[34] = eU, V[35] = eF, V[36] = ew, V[37] = eu, V[38] = eh, V[39] = Y, V[40] = ed, V[41] = eC, V[42] = eG, V[43] = ex, V[44] = eb, V[45] = er, V[46] = eQ, V[47] = eI, V[48] = et, V[49] = ea, V[50] = eL, V[51] = eo, V[52] = eB, V[53] = el, V[54] = U) : U = V[54], V[55] !== eJ || V[56] !== U ? (W = (0, a.jsxs)(a.Fragment, {
                    children: [B, (0, a.jsx)(C.a, {
                        isHidden: eJ,
                        children: U
                    })]
                }), V[55] = eJ, V[56] = U, V[57] = W) : W = V[57], W
            }
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            o = n("Q840"),
            i = n("tSEg"),
            s = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, o.j)(i.a, (t, n) => {
                    let {
                        scope: a
                    } = n;
                    return {
                        onOpen: () => e.open?.(a, t),
                        onDismiss: () => e.dismiss(a, t)
                    }
                }, {
                    autoDispose: 6e4
                });
                return (0, o.d)(i.a, (n, a) => {
                    if (null == n) return s.a;
                    let r = [],
                        o = !1;
                    for (let i of e.conversationIds(a.scope, n)) {
                        let n = e.status(a.scope, i);
                        if (n.pending) {
                            o = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let s = e.preview(a.scope, i);
                        null != s && r.push({
                            id: n.completionId ?? i,
                            title: e.title(a.scope, i),
                            preview: s,
                            ...a.get(t, i)
                        })
                    }
                    return r.length > 0 ? {
                        type: "ready",
                        value: r
                    } : o ? s.b : s.a
                }, {
                    isEqual: r()
                })
            }
        })
    }),
    JjB1: (function(e, t, n) {
        var a = n("on57");
        let r = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro", "Segoe UI", sans-serif',
            o = (0, a.b)("text-default min-h-0 w-full p-0 leading-normal !font-sans", "[&_.ProseMirror]:w-full", "[&_.ProseMirror]:!text-default", "[&_.ProseMirror]:!font-sans", "[&_.ProseMirror]:px-0", "[&_.ProseMirror]:py-0", "[&_.ProseMirror]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p]:!font-sans", "[&_.ProseMirror_p]:!leading-[var(--annotation-comment-line-height,calc(var(--spacing)*6))]", "[&_.ProseMirror_p_*]:!font-sans", "[&_.ProseMirror_span]:!font-sans", "!min-h-0 text-base", "[&_.ProseMirror]:min-h-[var(--annotation-comment-min-height,calc(var(--spacing)*6))]!");
        n.d(t, {}, {
            a: "absolute inset-x-0 bottom-0 flex h-12 items-center ps-2 pe-3 origin-bottom-left transition-[opacity,transform] duration-basic ease-out motion-reduce:transition-none",
            b: o,
            c: "absolute left-4 min-w-0 overflow-hidden transition-[left,width,top,bottom] duration-[140ms] ease-enter-snappy motion-reduce:transition-none",
            d: {
                "--codex-chat-font-size": "var(--annotation-comment-font-size, 13px)",
                "--font-sans": r,
                "--font-ui-family": r,
                fontFamily: r
            }
        })
    }),
    YwjY: (function(e, t, n) {
        n.d(t, {
            a: () => s
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("on57"),
            i = n("JjB1");

        function s(e) {
            let t, n, s, l, c, d, u, h, p, m, f, g, v, b, x = (0, r.c)(30);
            x[0] !== e ? ({
                className: n,
                children: t,
                style: l,
                isRevealingPageComment: c,
                surfaceVariant: d,
                discussion: u,
                hasRecipientControl: h,
                ...s
            } = e, x[0] = e, x[1] = t, x[2] = n, x[3] = s, x[4] = l, x[5] = c, x[6] = d, x[7] = u, x[8] = h) : (t = x[1], n = x[2], s = x[3], l = x[4], c = x[5], d = x[6], u = x[7], h = x[8]);
            let w = void 0 === d ? "default" : d,
                y = void 0 !== u && u,
                C = void 0 !== h && h,
                j = "default" === w && "bg-surface-elevated-secondary shadow-md",
                E = y && !C && "in-data-[comment-layout=floating]:shadow-none!",
                _ = y && "default" === w && "in-data-[comment-layout=floating]:border in-data-[comment-layout=floating]:bg-surface-elevated!",
                k = y && "default" === w && (C ? "in-data-[comment-layout=floating]:border-strong in-data-[comment-layout=floating]:rounded-xl! in-data-[comment-layout=floating]:shadow-[0_2px_10px_rgb(0_0_0/5%)]!" : "in-data-[comment-layout=floating]:border-border"),
                S = void 0 !== c && c ? "transition-none" : "transition-[height,width,opacity]";
            return x[9] !== n || x[10] !== j || x[11] !== E || x[12] !== _ || x[13] !== k || x[14] !== S ? (p = (0, o.b)("surface-AyYLmv", "pointer-events-auto isolate rounded-[22px] ease-enter-snappy motion-reduce:transition-none", j, E, _, k, S, n), x[9] = n, x[10] = j, x[11] = E, x[12] = _, x[13] = k, x[14] = S, x[15] = p) : p = x[15], x[16] !== l ? (m = {
                ...i.d,
                ...l
            }, x[16] = l, x[17] = m) : m = x[17], x[18] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, o.b)("content-Sj8_aX", "overflow-hidden rounded-[inherit] bg-inherit"), x[18] = f) : f = x[18], x[19] !== t ? (g = (0, a.jsx)("div", {
                className: f,
                children: t
            }), x[19] = t, x[20] = g) : g = x[20], x[21] !== y || x[22] !== w ? (v = "default" === w ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: (0, o.b)("pointer-events-none absolute inset-0 rounded-[inherit] mix-blend-multiply outline-1 outline-border", y && "in-data-[comment-layout=floating]:hidden")
            }) : null, x[21] = y, x[22] = w, x[23] = v) : v = x[23], x[24] !== s || x[25] !== p || x[26] !== m || x[27] !== g || x[28] !== v ? (b = (0, a.jsxs)("div", {
                ...s,
                className: p,
                style: m,
                children: [g, v]
            }), x[24] = s, x[25] = p, x[26] = m, x[27] = g, x[28] = v, x[29] = b) : b = x[29], b
        }
    }),
    iqo5: (function(e, t, n) {
        n.d(t, {
            a: () => g
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("zd8w"),
            i = n("oyxz"),
            s = n("YwjY"),
            l = n("Sm6l"),
            c = n("UIU6"),
            d = n("Bbed"),
            u = n("RNul"),
            h = n("Zqzr"),
            p = n("T1PX");

        function m(e) {
            let t, n, i, s, l, c, d = (0, r.c)(13),
                {
                    children: u,
                    source: m
                } = e,
                f = (0, o.useRef)(null),
                g = !(0, p.a)() && m.width > 0 && m.height > 0;
            d[0] !== g || d[1] !== m ? (t = () => {
                let e = f.current,
                    t = e?.ownerDocument.defaultView;
                if (!e || !t || !g) return;
                let n = 0,
                    a = new ResizeObserver(() => {
                        a.disconnect(), n = t.requestAnimationFrame(() => {
                            let a = e.getBoundingClientRect();
                            if (!a.width || !a.height) {
                                e.dataset.phase = "open";
                                return
                            }
                            let r = e.offsetWidth / a.width,
                                o = e.offsetHeight / a.height,
                                i = (m.left - a.left) * r,
                                s = (m.top - a.top) * o,
                                l = (a.right - m.right) * r,
                                c = (a.bottom - m.bottom) * o;
                            e.style.setProperty("--entry-inset", `${s}px ${l}px ${c}px ${i}px`), e.style.setProperty("--entry-transform", `translate(${i}px, ${s}px) scale(${m.width/a.width}, ${m.height/a.height})`), e.dataset.phase = "source", n = t.requestAnimationFrame(() => {
                                e.dataset.phase = "open"
                            })
                        })
                    });
                return a.observe(e), () => {
                    a.disconnect(), t.cancelAnimationFrame(n), delete e.dataset.phase, e.style.removeProperty("--entry-inset"), e.style.removeProperty("--entry-transform")
                }
            }, n = [g, m], d[0] = g, d[1] = m, d[2] = t, d[3] = n) : (t = d[2], n = d[3]), (0, o.useLayoutEffect)(t, n);
            let v = g ? "entry-yS3y1e" : void 0;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                position: "relative",
                maxWidth: "100%",
                width: h.U
            }, d[4] = i) : i = d[4], d[5] !== g ? (s = g ? (0, a.jsx)("div", {
                "aria-hidden": !0,
                className: "surface-Iou1vs pointer-events-none absolute inset-0 rounded-[22px] bg-surface-elevated-secondary shadow-md outline-1 outline-border"
            }) : null, d[5] = g, d[6] = s) : s = d[6], d[7] !== u ? (l = (0, a.jsx)("div", {
                className: "content-ARLCcU",
                children: u
            }), d[7] = u, d[8] = l) : l = d[8], d[9] !== v || d[10] !== s || d[11] !== l ? (c = (0, a.jsxs)("div", {
                ref: f,
                "data-selection-annotation-entry": "",
                className: v,
                style: i,
                children: [s, l]
            }), d[9] = v, d[10] = s, d[11] = l, d[12] = c) : c = d[12], c
        }
        let f = (0, d.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(789716), n.e(531161), n.e(835435), n.e(640351)]).then(n.bind(n, "FQ1K"))).SelectedTextAnnotationEditor, {
            suspendToParent: !0,
            errorFallback: e => (0, a.jsx)(v, {
                failed: !0,
                onClose: e.onCancel
            })
        });

        function g(e) {
            let t, n, i, s, l, d, u, h, p = (0, r.c)(18);
            p[0] !== e ? ({
                entryRect: t,
                ...n
            } = e, p[0] = e, p[1] = t, p[2] = n) : (t = p[1], n = p[2]), p[3] !== n.onCancel ? (i = (0, a.jsx)(v, {
                failed: !0,
                onClose: n.onCancel
            }), p[3] = n.onCancel, p[4] = i) : i = p[4], p[5] !== n.onCancel ? (s = (0, a.jsx)(v, {
                onClose: n.onCancel
            }), p[5] = n.onCancel, p[6] = s) : s = p[6], p[7] !== n ? (l = (0, a.jsx)(f, {
                ...n
            }), p[7] = n, p[8] = l) : l = p[8], p[9] !== s || p[10] !== l ? (d = (0, a.jsx)(o.Suspense, {
                fallback: s,
                children: l
            }), p[9] = s, p[10] = l, p[11] = d) : d = p[11], p[12] !== i || p[13] !== d ? (u = (0, a.jsx)(c.a, {
                name: "ResponseTextAnnotationEditor",
                fallback: i,
                children: d
            }), p[12] = i, p[13] = d, p[14] = u) : u = p[14];
            let g = u;
            return p[15] !== g || p[16] !== t ? (h = null == t ? g : (0, a.jsx)(m, {
                source: t,
                children: g
            }), p[15] = g, p[16] = t, p[17] = h) : h = p[17], h
        }

        function v(e) {
            let t, n, o, c, d = (0, r.c)(9),
                {
                    failed: h,
                    onClose: p
                } = e,
                m = void 0 !== h && h,
                f = m ? "alert" : "status";
            return d[0] !== m ? (t = m ? (0, a.jsx)(i.a, {
                id: "responseTextAnnotationMarkers.editor.loadError",
                defaultMessage: "Couldn't load the editor. Reload to try again"
            }) : (0, a.jsxs)(a.Fragment, {
                children: [(0, a.jsx)(u.a, {}), (0, a.jsx)(i.a, {
                    id: "responseTextAnnotationMarkers.editor.loading",
                    defaultMessage: "Loading editor…"
                })]
            }), d[0] = m, d[1] = t) : t = d[1], d[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(i.a, {
                id: "responseTextAnnotationMarkers.editor.close",
                defaultMessage: "Close"
            }), d[2] = n) : n = d[2], d[3] !== p ? (o = (0, a.jsx)(l.a, {
                color: "secondary",
                onClick: p,
                children: n
            }), d[3] = p, d[4] = o) : o = d[4], d[5] !== f || d[6] !== t || d[7] !== o ? (c = (0, a.jsxs)(s.a, {
                className: "flex flex-col items-center justify-center gap-3 p-4 text-center text-sm text-secondary select-none",
                role: f,
                children: [t, o]
            }), d[5] = f, d[6] = t, d[7] = o, d[8] = c) : c = d[8], c
        }
        g.prefetch = () => f.prefetch()
    }),
    zjpG: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("on57"),
            i = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, l = (0, r.c)(5),
                    {
                        className: c
                    } = e;
                return l[0] !== c ? (t = (0, o.b)("last:hidden", c), l[0] = c, l[1] = t) : t = l[1], l[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(i.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "·"
                }), l[2] = n) : n = l[2], l[3] !== t ? (s = (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: t,
                    children: n
                }), l[3] = t, l[4] = s) : s = l[4], s
            }
        })
    }),
    IxWh: (function(e, t, n) {
        var a = n("Vzyk"),
            r = n.n(a);

        function o(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "ltr",
                n = Math.max(0, e.scrollWidth - e.clientWidth);
            if ("rtl" === t) return {
                maximum: 0,
                minimum: -n
            };
            let a = e.firstElementChild,
                r = Math.min(n, a instanceof HTMLElement ? Math.max(0, i(e, a, t)) : 0);
            return {
                maximum: n,
                minimum: r
            }
        }

        function i(e, t, n) {
            return "rtl" === n ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + s(e, n) : t.offsetLeft - e.offsetLeft - s(e, n)
        }

        function s(e, t) {
            let n = Number.parseFloat("rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft);
            return Number.isNaN(n) ? 0 : n
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ltr",
                    {
                        maximum: a,
                        minimum: l
                    } = o(e, n),
                    c = "rtl" === n ? -t : t,
                    d = r()(e.scrollLeft + c * (e.clientWidth - s(e, n)), l, a),
                    u = e.children;
                for (let o = 1 === t ? 0 : u.length - 1; o >= 0 && o < u.length; o += t) {
                    let t = u.item(o);
                    if (!(t instanceof HTMLElement)) continue;
                    let s = r()(i(e, t, n), l, a);
                    if (1 === c && s >= d - 1 || -1 === c && s <= d + 1) return s
                }
                return 1 === c ? a : l
            }
        })
    }),
    xD3Z: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("slpy"),
            i = n("Q840"),
            s = n("Qgfj"),
            l = n("Wf1j"),
            c = n("oyxz"),
            d = n("QcW8"),
            u = n("Sm6l"),
            h = n("rmk3"),
            p = n("bf6R"),
            m = n("f38C"),
            f = n("tSEg"),
            g = n("hZax"),
            v = n("dt6g"),
            b = n("WwnD");

        function x(e) {
            let t, n, i, d, f, v = (0, r.c)(22),
                {
                    contextMenuTrigger: b,
                    isCompact: x,
                    isDragging: y,
                    items: C,
                    open: j,
                    onMinimize: E,
                    onOpenChange: _,
                    showOptions: k
                } = e,
                S = void 0 === k || k,
                T = (0, g.f)("2163293173"),
                A = (0, l.a)();
            v[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, s.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), v[0] = t) : t = v[0], v[1] !== E ? (n = {
                id: "minimize",
                icon: p._e,
                message: t,
                onSelect: E,
                selectAfterClose: !0
            }, v[1] = E, v[2] = n) : n = v[2], v[3] !== C || v[4] !== n ? (i = [...C, n], v[3] = C, v[4] = n, v[5] = i) : i = v[5];
            let N = i;
            if (null != b) {
                let e, t;
                return S ? (v[6] !== b ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: b
                }), v[6] = b, v[7] = e) : e = v[7], v[8] !== N || v[9] !== e ? (t = (0, a.jsx)(h.a, {
                    disableNative: !0,
                    items: N,
                    children: e
                }), v[8] = N, v[9] = e, v[10] = t) : t = v[10], t) : b
            }
            return v[11] !== T || v[12] !== A || v[13] !== x || v[14] !== y || v[15] !== N || v[16] !== _ || v[17] !== j || v[18] !== S ? (d = S && (0, a.jsx)(h.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: j,
                onOpenChange: _,
                items: N,
                children: T ? (0, a.jsx)(m.a, {
                    size: "toolbar",
                    label: A.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options"
                    })
                }) : (0, a.jsx)(o.a, {
                    disabled: j || y,
                    content: (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options"
                    }),
                    children: (0, a.jsx)(u.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": A.formatMessage({
                            id: "quickChat.moreOptions",
                            defaultMessage: "Chat options"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: x ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: w,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || _?.(!j)
                        },
                        children: (0, a.jsx)(p._c, {})
                    })
                })
            }), v[11] = T, v[12] = A, v[13] = x, v[14] = y, v[15] = N, v[16] = _, v[17] = j, v[18] = S, v[19] = d) : d = v[19], v[20] !== d ? (f = (0, a.jsx)(a.Fragment, {
                children: d
            }), v[20] = d, v[21] = f) : f = v[21], f
        }

        function w(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o = (0, r.c)(6),
                    l = (0, i.y)(f.a),
                    c = (0, i.z)(d.q);
                o[0] !== c || o[1] !== l ? (t = c ? [{
                    id: "full-view",
                    icon: p.N,
                    message: (0, s.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, v.a)(l, "context_menu", () => (0, b.b)(l, "chat", {
                            mode: "full"
                        }))
                    }
                }] : [], o[0] = c, o[1] = l, o[2] = t) : t = o[2];
                let u = t;
                return o[3] !== u || o[4] !== e ? (n = (0, a.jsx)(x, {
                    ...e,
                    items: u
                }), o[3] = u, o[4] = e, o[5] = n) : n = o[5], n
            },
            b: x
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => y
        });
        var a = n("ABep"),
            r = n("QosV"),
            o = n("Q840"),
            i = n("oyxz"),
            s = n("TjgH"),
            l = n("Sm6l"),
            c = n("X6Vn"),
            d = n("gPv1"),
            u = n("OWtl"),
            h = n("nsrx"),
            p = n("on57"),
            m = n("JNtf"),
            f = n("mUDD"),
            g = n("ZhKl"),
            v = n("qVxm"),
            b = n("a6Zv"),
            x = n("eLmE");

        function w(e) {
            let t, n, s, c, d, w, y, C = (0, r.c)(19),
                {
                    hostId: j,
                    onClose: E,
                    rateLimitStatus: _
                } = e,
                k = (0, o.y)(u.a),
                S = (0, b.a)(),
                T = (0, o.x)(x.b, j),
                A = _.rate_limit_upsell;
            if (!T || null == A) return null;
            let N = !S && "-mb-6";
            C[0] !== N ? (t = (0, p.b)("block w-full scale-105 object-cover", N), C[0] = N, C[1] = t) : t = C[1];
            let L = S ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return C[2] !== t || C[3] !== L ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: L
                })
            }), C[2] = t, C[3] = L, C[4] = n) : n = C[4], C[5] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, a.jsx)(m.e, {
                className: "contents",
                children: (0, a.jsx)(i.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), C[5] = s) : s = C[5], C[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(f.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(f.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: s,
                    subtitle: (0, a.jsx)(m.d, {
                        className: "contents",
                        children: (0, a.jsx)(i.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models."
                        })
                    })
                })
            }), C[6] = c) : c = C[6], C[7] !== A.ctas || C[8] !== E || C[9] !== k ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(f.c, {
                    expandSingleButton: !1,
                    children: A.ctas.map((t, n) => {
                        if (!(0, g.b)(t.action)) return null;
                        let r = e.actions[t.action];
                        return (0, a.jsx)(l.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: r.disabled,
                            size: "large",
                            onClick: e => {
                                (0, h.a)(k, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), r.log(), E(), r.onClick(e)
                            },
                            children: r.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), C[7] = A.ctas, C[8] = E, C[9] = k, C[10] = d) : d = C[10], C[11] !== A || C[12] !== _ || C[13] !== d ? (w = (0, a.jsxs)(f.b, {
                children: [c, (0, a.jsx)(f.e, {
                    className: "items-center",
                    children: (0, a.jsx)(v.a, {
                        banner: A,
                        rateLimitStatus: _,
                        renderContent: d
                    })
                })]
            }), C[11] = A, C[12] = _, C[13] = d, C[14] = w) : w = C[14], C[15] !== E || C[16] !== n || C[17] !== w ? (y = (0, a.jsxs)(m.a, {
                open: !0,
                size: "default",
                onOpenChange: E,
                children: [n, w]
            }), C[15] = E, C[16] = n, C[17] = w, C[18] = y) : y = C[18], y
        }

        function y(e) {
            let t, n, p, m, f = (0, r.c)(7),
                {
                    hostId: g
                } = e,
                v = (0, o.y)(u.a);
            return (0, o.x)(x.b, g) ? (f[0] !== g || f[1] !== v ? (t = () => {
                (0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = v.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(v, w, {
                        hostId: g,
                        rateLimitStatus: e
                    }), (0, h.a)(v, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, h.a)(v, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, f[0] = g, f[1] = v, f[2] = t) : t = f[2], f[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), f[3] = n) : n = f[3], f[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsxs)(s.a, {
                variant: "reserve",
                children: [n, (0, a.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, a.jsx)(i.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve"
                    })
                })]
            }), f[4] = p) : p = f[4], f[5] !== t ? (m = (0, a.jsx)(l.a, {
                color: "ghostMuted",
                size: "inline",
                onClick: t,
                children: p
            }), f[5] = t, f[6] = m) : m = f[6], m) : null
        }
    }),
    vNLk: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("hwkA"),
            i = n("oyxz"),
            s = n("bf6R"),
            l = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, m, f, g = (0, r.c)(31),
                    {
                        restored: v,
                        restoring: b,
                        deleting: x,
                        onDelete: w,
                        onUnarchive: y,
                        onDone: C
                    } = e,
                    j = void 0 !== x && x;
                g[0] !== b ? (t = b ? (0, a.jsx)(i.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…"
                }) : null, g[0] = b, g[1] = t) : t = g[1], g[2] !== v || g[3] !== b ? (n = !b && v ? (0, a.jsx)(i.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored"
                }) : null, g[2] = v, g[3] = b, g[4] = n) : n = g[4], g[5] !== v || g[6] !== b ? (c = b || v ? null : (0, a.jsx)(i.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first"
                }), g[5] = v, g[6] = b, g[7] = c) : c = g[7], g[8] !== t || g[9] !== n || g[10] !== c ? (d = (0, a.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, c]
                }), g[8] = t, g[9] = n, g[10] = c, g[11] = d) : d = g[11], g[12] !== j || g[13] !== w || g[14] !== v || g[15] !== b ? (u = v || null == w ? null : (0, a.jsx)(o.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: b,
                    loading: j,
                    size: "lg",
                    onClick: w,
                    children: (0, a.jsx)(i.a, {
                        ...l.a.delete
                    })
                }), g[12] = j, g[13] = w, g[14] = v, g[15] = b, g[16] = u) : u = g[16];
                let E = v ? C : y;
                return g[17] !== v || g[18] !== b ? (h = v && !b ? (0, a.jsx)(i.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(s.f, {}), (0, a.jsx)(i.a, {
                        ...l.a.unarchive
                    })]
                }), g[17] = v, g[18] = b, g[19] = h) : h = g[19], g[20] !== j || g[21] !== b || g[22] !== E || g[23] !== h ? (p = (0, a.jsx)(o.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: j,
                    loading: b,
                    size: "lg",
                    onClick: E,
                    children: h
                }), g[20] = j, g[21] = b, g[22] = E, g[23] = h, g[24] = p) : p = g[24], g[25] !== u || g[26] !== p ? (m = (0, a.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [u, p]
                }), g[25] = u, g[26] = p, g[27] = m) : m = g[27], g[28] !== m || g[29] !== d ? (f = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [d, m]
                }), g[28] = m, g[29] = d, g[30] = f) : f = g[30], f
            }
        })
    }),
    sqqv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            o = n("slpy"),
            i = n("Wf1j"),
            s = n("oyxz"),
            l = n("Sm6l"),
            c = n("bf6R"),
            d = n("mphG"),
            u = n("ABl9"),
            h = n("Zt82");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, m, f, g, v, b, x, w, y, C, j = (0, r.c)(26);
                j[0] !== e ? ({
                    title: m,
                    project: n,
                    onActivate: t,
                    ...p
                } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = p, j[4] = m) : (t = j[1], n = j[2], p = j[3], m = j[4]);
                let E = (0, i.a)(),
                    _ = n?.name;
                return j[5] !== E || j[6] !== _ ? (f = (0, h.a)(E, _), j[5] = E, j[6] = _, j[7] = f) : f = j[7], j[8] !== t || j[9] !== p ? (g = e => {
                    p.onClick?.(e), t?.()
                }, v = e => {
                    p.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.()
                }, j[8] = t, j[9] = p, j[10] = g, j[11] = v) : (g = j[10], v = j[11]), j[12] !== n ? (b = null == n ? null : (0, a.jsx)(o.a, {
                    content: n.name,
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: n.icon
                    })
                }), j[12] = n, j[13] = b) : b = j[13], j[14] !== m ? (x = "string" == typeof m ? (0, u.d)(m) : m ?? (0, a.jsx)(s.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat"
                }), j[14] = m, j[15] = x) : x = j[15], j[16] !== x ? (w = (0, a.jsx)(d.a, {
                    className: "min-w-0 truncate",
                    children: x
                }), j[16] = x, j[17] = w) : w = j[17], j[18] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(c.Zb, {})
                }), j[18] = y) : y = j[18], j[19] !== p || j[20] !== f || j[21] !== g || j[22] !== v || j[23] !== b || j[24] !== w ? (C = (0, a.jsxs)(l.a, {
                    "aria-description": f,
                    ...p,
                    onClick: g,
                    onKeyDown: v,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [b, w, y]
                }), j[19] = p, j[20] = f, j[21] = g, j[22] = v, j[23] = b, j[24] = w, j[25] = C) : C = j[25], C
            }
        })
    }),
    fQbA: (function(e, t, n) {
        var a = n("ABep"),
            r = n("lIZs");
        n.d(t, {}, {
            a: function(e) {
                let t = e.findIndex(e => "move-to-project" === e.id),
                    n = e.findIndex(e => "separator" === e.type),
                    a = -1 === t ? n : t + 1;
                return e.toSpliced(-1 === a ? e.length : a, 0, {
                    id: "open-app"
                })
            },
            b: function(e, t) {
                return "open-app" === e.id ? (0, a.jsx)(r.a, {
                    onSelect: t
                }) : void 0
            }
        })
    }),
    enMl: (function(e, t, n) {
        var a = n("QosV"),
            r = n("Q840"),
            o = n("zd8w"),
            i = n("tSEg"),
            s = n("giVD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, c, d = (0, a.c)(9),
                    {
                        icon: u,
                        isVisible: h,
                        title: p
                    } = e,
                    m = void 0 === u ? null : u,
                    f = void 0 === h || h,
                    g = (0, r.y)(i.a);
                return d[0] !== m || d[1] !== f || d[2] !== g || d[3] !== p ? (t = () => {
                    g.set(s.c, m), g.set(s.e, p), g.set(s.g, f)
                }, n = [m, f, g, p], d[0] = m, d[1] = f, d[2] = g, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, o.useLayoutEffect)(t, n), d[6] !== g ? (l = () => () => {
                    g.set(s.c, null), g.set(s.e, null), g.set(s.g, !0)
                }, c = [g], d[6] = g, d[7] = l, d[8] = c) : (l = d[7], c = d[8]), (0, o.useLayoutEffect)(l, c), null
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            r = n("Kyn2"),
            o = n("nnol"),
            i = n("QcW8"),
            s = n("ZU27"),
            l = n("bf6R"),
            c = n("GaA7"),
            d = n("Vhua"),
            u = n("NkWL");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(i.ab);
                return e.get(i.Z) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(u.c) ? [] : function(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s.l,
                        h = e.get(d.i),
                        p = [];
                    return "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == c.a.detachedWindows || p.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !h && !(0, o.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: l.Pg,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, r.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: a
                                } = n;
                                return a(e, i, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(u.c) && p.push({
                        id: "close-tab",
                        icon: l.wj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, u.a)(e)
                    }), p
                }(e, "chat")
            }
        })
    }),
    hjXH: (function(e, t) {
        t.a = {
            kind: "sprite",
            name: "minus-sm-light-20",
            canvas: {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20"
            },
            href: "#codex-icon-minus-sm-light-20",
            style: {},
            alignment: {
                authored: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                primary: {
                    x: 0,
                    y: 0,
                    overflows: !1
                },
                composite: {
                    x: 0,
                    y: 0,
                    overflows: !1
                }
            }
        }
    }),
    h24K: (function(e, t, n) {
        var a = n("gPp5");
        class r {
            constructor() {
                this.componentControls = new Set
            }
            subscribe(e) {
                return this.componentControls.add(e), () => this.componentControls.delete(e)
            }
            start(e, t) {
                this.componentControls.forEach(n => {
                    n.start(e.nativeEvent || e, t)
                })
            }
            cancel() {
                this.componentControls.forEach(e => {
                    e.cancel()
                })
            }
            stop() {
                this.componentControls.forEach(e => {
                    e.stop()
                })
            }
        }
        let o = () => new r;
        n.d(t, {}, {
            a: function() {
                return (0, a.a)(o)
            }
        })
    })
};