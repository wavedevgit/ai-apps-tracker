export const __rspack_esm_ids = [786692];
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
                        frame: i,
                        target: o,
                        owner: l,
                        transport: s,
                        onStatus: c
                    } = e,
                    d = new AbortController,
                    u = "",
                    h = () => {
                        d.abort(), i.srcdoc = "", i.removeAttribute("src"), n = n ?? t?.dispose(), t = void 0, window.removeEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.removeEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), i.removeEventListener("load", g)
                    },
                    p = () => {
                        if (r() !== l) {
                            h(), c("error");
                            return
                        }
                        let e = (0, a.getBrowserChatGptAuthSnapshot)()?.accessToken;
                        null != t && e && e !== u && (u = e, t.refresh(e).catch(() => {
                            d.signal.aborted || (h(), c("error"))
                        }))
                    },
                    g = () => {
                        d.signal.aborted || null == t || i.hasAttribute("srcdoc") || c("ready")
                    };
                i.srcdoc = "", window.addEventListener(a.BROWSER_AUTH_CHANGED_EVENT, p), window.addEventListener(a.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, p), i.addEventListener("load", g);
                let v = (0, a.getBrowserChatGptAuthSnapshot)();
                if (null == v || r() !== l) return h(), c("error"), async () => {};
                c("loading"), u = v.accessToken;
                let m = (async () => {
                    try {
                        let e = await s.open({
                            target: o,
                            accessToken: u,
                            signal: d.signal
                        });
                        if (d.signal.aborted || r() !== l) {
                            n = e.dispose(), d.signal.aborted || (h(), c("error"));
                            return
                        }
                        if (t = e, "https:" !== e.url.protocol || e.url.username || e.url.password || e.url.origin === window.location.origin || e.url.origin !== o.publicUrl.origin) throw Error("Portal preview requires an isolated origin");
                        i.src = e.url.href, i.removeAttribute("srcdoc"), p()
                    } catch {
                        d.signal.aborted || (h(), c("error"))
                    }
                })();
                return () => (h(), m.then(() => n))
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
            SitePreviewBridge: () => R
        });
        var a = n("ABep"),
            r = n("QosV"),
            i = n("BolX"),
            o = n("aFoA"),
            l = n("Bbed"),
            s = n("tSEg"),
            c = n("zd8w"),
            d = n("IDNd"),
            u = n("Ot7V"),
            h = n("QcW8"),
            p = n("ZU27"),
            g = n("EpL9"),
            v = n("M8lA"),
            m = n("bf6R"),
            b = n("svjy"),
            f = n("rd65"),
            x = n("v0xU"),
            w = n("m625");
        let C = (0, l.a)(async () => (await n.e(969762).then(n.bind(n, "KodB"))).PortalPreview),
            y = (0, g.k)("portal-preview", C, {
                ownsSingleTabHeader: () => !0,
                dropDestinations: ["right"],
                isAvailable: () => !0 === (0, v.getClientBootstrap)().portalPreviewEnabled,
                open: j,
                canUndoClose: () => !1,
                showInNewTabLauncher: !1
            });

        function j(e, t, n) {
            if (null == n || !y.isAvailable(e) || e.get(s.j) || !e.get(h.h)) return !1;
            let r = (0, v.getClientBootstrap)().stagingPortalPreviewDomain,
                i = (0, w.a)(t, r),
                o = (0, x.b)();
            return null != i && null != o && ((0, p.h)(e, y, {
                id: `portal-preview:${i.publicUrl.origin}`,
                icon: (0, a.jsx)(m.Ud, {}),
                props: {
                    url: i.publicUrl.href,
                    owner: o,
                    transport: n,
                    stagingPortalDomain: r
                },
                revealAndFocus: !0,
                title: e.get(b.a).formatMessage({
                    id: "sites.portals.tabTitle",
                    defaultMessage: "Local site preview"
                })
            }), (0, f.b)(e))
        }
        var E = n("lkCH");
        let k = {
            async open(e) {
                let {
                    target: t,
                    accessToken: n,
                    signal: a
                } = e, r = new URL("/_portals/web-session", t.publicUrl.origin), i = crypto.randomUUID(), o = `portal-preview:${t.publicUrl.origin}`, l = !1, s = (0, E.a)(), c = (0, E.a)(), d = Promise.resolve(), u = () => (l = !0, c.resolve(void 0), v), h = () => {
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
                        "X-Portals-Session-Id": i,
                        ...null == t ? {} : {
                            Authorization: t
                        }
                    }
                }), g = async e => {
                    if (l || a.aborted) throw Error("Preview closed");
                    try {
                        let t = await p("POST", `Bearer ${e}`);
                        if (204 !== t.status) throw Error("Preview session unavailable");
                        if (l || a.aborted) throw Error("Preview closed");
                        let n = await p("GET");
                        if (204 !== n.status || l || a.aborted) throw Error("Preview session unavailable")
                    } catch {
                        throw Error("Preview session unavailable")
                    }
                }, v = navigator.locks.request(o, {
                    ifAvailable: !0
                }, async e => {
                    if (null == e) throw Error("Preview already open");
                    a.addEventListener("abort", h, {
                        once: !0
                    });
                    try {
                        await g(n), s.resolve({
                            url: new URL(t.publicUrl.href),
                            refresh: e => {
                                let t = d.then(() => g(e));
                                return d = t.catch(() => {}), t
                            },
                            dispose: u
                        }), await c.promise
                    } finally {
                        l = !0, a.removeEventListener("abort", h), await d, await (async () => {
                            await p("DELETE")
                        })().catch(() => {})
                    }
                }).catch(() => s.reject(Error("Preview session unavailable")));
                return s.promise
            }
        };

        function _(e) {
            let t, n, a = (0, r.c)(5),
                {
                    transport: o
                } = e,
                l = (0, i.y)(s.a),
                h = (0, c.useContext)(d.b);
            return a[0] !== l || a[1] !== o || a[2] !== h ? (t = () => {
                let e = void 0 === o ? k : o;
                if (null != e && h) return (0, u.h)(t => {
                    let {
                        href: n,
                        conversationId: a
                    } = t;
                    return (null == a || a === (0, s.d)(l.value, {
                        includeChatGpt: !0
                    })) && j(l, n, e)
                })
            }, n = [l, o, h], a[0] = l, a[1] = o, a[2] = h, a[3] = t, a[4] = n) : (t = a[3], n = a[4]), (0, c.useEffect)(t, n), null
        }
        var S = n("gbrq"),
            T = n("rxj0"),
            M = n("uk1V"),
            N = n("PIpC"),
            L = n("UejO");

        function A() {
            let e, t, a, l, d = (0, r.c)(6),
                u = (0, i.y)(s.a);
            return d[0] !== u ? (e = () => {
                let e = null;
                return u.watch(t => {
                    let a = t.get(N.c),
                        r = t.get(h.h),
                        i = t.get(L.b),
                        l = t.get(o.a, i?.hostId == null ? i?.conversationId ?? null : null),
                        s = t.get(S.h),
                        c = t.get(p.l.tabs$),
                        d = "chatgpt-thread" === t.value.routeKind && t.get(T.e, t.value.conversationId);
                    if (null == a || !r || d || e === a || (e = a, (0, L.a)(i, t.value, l, t.value.clientThreadId) || s || c.length > 0)) return;
                    let u = (0, N.a)(a);
                    if (!u?.isOpen) return;
                    let g = !1;
                    return Promise.resolve().then(n.bind(n, "SQbA")).then(e => {
                        let {
                            appgenProjectQuery$: n
                        } = e;
                        return g ? null : t.query.fetch(n, u.projectId)
                    }).then(e => {
                        let n = (0, N.a)(a);
                        g || null == e || !n?.isOpen || n.projectId !== u.projectId || "active" !== e.status || null == e.current_live_url || "chatgpt-thread" === t.value.routeKind && t.get(T.e, t.value.conversationId) || (0, M.a)(t, {
                            type: "appgen-app",
                            projectId: e.id,
                            title: e.title,
                            url: e.current_live_url
                        })
                    }, I), () => {
                        g = !0
                    }
                })
            }, t = [u], d[0] = u, d[1] = e, d[2] = t) : (e = d[1], t = d[2]), (0, c.useEffect)(e, t), d[3] !== u ? (a = () => {
                let e = u.get(S.i),
                    t = null;
                return u.watch(n => {
                    let a = n.get(S.i),
                        r = n.get(p.l.activeTab$),
                        i = n.get(N.c);
                    (a !== e || null == t && null != i) && null != i && r?.tabId.startsWith("site-preview:") && (0, N.b)(i, r.tabId.slice(13), a), e = a, t = i
                })
            }, l = [u], d[3] = u, d[4] = a, d[5] = l) : (a = d[4], l = d[5]), (0, c.useEffect)(a, l), null
        }

        function I() {}
        let D = (0, l.a)(async () => (await n.e(402037).then(n.bind(n, "U1Pf"))).OpenPendingSitePreview);

        function R() {
            let e, t, n, l, c, d = (0, r.c)(13),
                u = (0, i.y)(s.a),
                h = (0, i.z)(L.b),
                p = (0, i.x)(o.a, h?.hostId == null ? h?.conversationId ?? null : null);
            if ("home" !== u.value.routeKind && "chatgpt-thread" !== u.value.routeKind && "local-thread" !== u.value.routeKind) return null;
            d[0] !== h || d[1] !== p || d[2] !== u ? (e = h?.url != null && (0, L.a)(h, u.value, p, u.value.clientThreadId), d[0] = h, d[1] = p, d[2] = u, d[3] = e) : e = d[3];
            let g = e;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_, {}), d[4] = t) : t = d[4], d[5] !== u ? (n = "home" !== u.value.routeKind ? (0, a.jsx)(A, {}) : null, d[5] = u, d[6] = n) : n = d[6], d[7] !== g || d[8] !== h ? (l = g ? (0, a.jsx)(D, {
                pending: h
            }) : null, d[7] = g, d[8] = h, d[9] = l) : l = d[9], d[10] !== n || d[11] !== l ? (c = (0, a.jsxs)(a.Fragment, {
                children: [t, n, l]
            }), d[10] = n, d[11] = l, d[12] = c) : c = d[12], c
        }
    }),
    fs8u: (function(e, t, n) {
        var a = n("BolX"),
            r = n("QcW8"),
            i = n("ZU27"),
            o = n("gbrq"),
            l = n("tSEg"),
            s = n("OMIV"),
            c = n("SHid"),
            d = n("dt6g"),
            u = n("WwnD");
        let h = (0, a.c)(l.a, e => {
            let {
                get: t
            } = e;
            return null != t(r.gb) && null != t(i.l.activeTab$) && !t(r.G)
        });
        n.d(t, {}, {
            a: function(e, t, n) {
                let a = (0, d.a)(e, null == n || "pin" === n ? "tab_drag" : n, () => (0, u.b)(e, "chat", t));
                return a && e.get(s.e, "2163293173") && e.set(c.a, e.get(r.rb)), a && "pin" === n && (0, o.I)(e, !0), a
            },
            b: function(e, t, n) {
                if (null == n || !(n instanceof MouseEvent) || "pointercancel" === n.type || null == t || null == e.get(r.gb) || null == e.get(i.l.activeTab$) || n.clientY < 0 || n.clientY > window.innerHeight) return null;
                let a = t.getBoundingClientRect();
                return n.clientX <= a.left + 24 ? "left" : n.clientX >= a.right - 24 ? "right" : null
            },
            c: h
        })
    }),
    rjva: (function(e, t, n) {
        n.d(t, {
            a: () => J
        });
        var a = n("ABep"),
            r = n("QosV"),
            i = n("l2oX"),
            o = n("BolX"),
            l = n("zd8w"),
            s = n("v7qY"),
            c = n("Wf1j"),
            d = n("Q2Qp"),
            u = n("QcW8"),
            h = n("ZU27"),
            p = n("wD9O"),
            g = n("nKJ6"),
            v = n("kois"),
            m = n("vi3X"),
            b = n("O9Pc"),
            f = n("fDIZ"),
            x = n("jEN2"),
            w = n("AKr5"),
            C = n("wqvF"),
            y = n("giDA"),
            j = n("fQ9c"),
            E = n("nb0y"),
            k = n("xD3Z"),
            _ = n("Z2JT"),
            S = n("yC2B"),
            T = n("Sgih"),
            M = n("tSEg"),
            N = n("hZax"),
            L = n("El6m"),
            A = n("dN0a"),
            I = n("giVD");
        n("G7Oa");
        var D = n("q1q2"),
            R = n("VwGH"),
            O = n("on57"),
            P = n("W5pg"),
            z = n("IPUh"),
            B = n("qjLK"),
            U = n("I7bK");
        n("eFp2");
        var W = n("oH56");
        n("EpL9");
        var q = n("DUYS"),
            V = n("gbrq");
        n("dt6g");
        var H = n("bIvi"),
            $ = n("Vhua");
        n("WwnD");
        var F = n("pZMh");

        function Q(e) {
            let t, n, i, c, d, u, p, g, v, m, b, f = (0, r.c)(33),
                {
                    destination: x,
                    direction: w,
                    surface: C
                } = e,
                {
                    bottomPanelTargetHeight: y,
                    contentPaneWidthRatio: j,
                    mainContentWidth: E
                } = (0, U.g)(),
                k = (0, l.useContext)(W.a),
                _ = (0, o.z)(F.g),
                S = (0, o.z)(F.l),
                T = C ?? "content",
                M = _ ? "content" === T && k?.dragState?.draggedTab.tabId === S : "chat" === T,
                N = (0, l.useContext)(B.a),
                L = (0, o.z)(V.d),
                A = (0, o.z)(h.a.tabIds$),
                I = k?.dragState?.sourceController === h.a && 1 === A.length;
            f[0] !== j || f[1] !== E ? (t = [E, j], f[0] = j, f[1] = E, f[2] = t) : t = f[2], f[3] !== M ? (n = e => {
                let [t, n] = e, a = Math.min(t, (0, q.f)(n, t, "unified"));
                return M ? t - a : a
            }, f[3] = M, f[4] = n) : n = f[4];
            let $ = (0, P.a)(t, n);
            f[5] === Symbol.for("react.memo_cache_sentinel") ? (i = {
                placement: "bottom-start",
                strategy: "fixed",
                middleware: [(0, D.f)(K), (0, D.h)({
                    apply(e) {
                        let {
                            elements: t,
                            rects: n
                        } = e;
                        Object.assign(t.floating.style, {
                            height: `${n.reference.height}px`,
                            width: `${n.reference.width}px`
                        })
                    }
                })],
                whileElementsMounted: R.b
            }, f[5] = i) : i = f[5];
            let {
                floatingStyles: Q,
                refs: Z
            } = (0, D.i)(i);
            f[6] !== Z ? (c = e => {
                Z.setReference(e)
            }, f[6] = Z, f[7] = c) : c = f[7];
            let G = (0, H.a)(c);
            f[8] !== Z ? (d = e => {
                Z.setFloating(e)
            }, f[8] = Z, f[9] = d) : d = f[9];
            let Y = (0, H.a)(d),
                J = "bottom" === x && "inset-x-0 bottom-0",
                ee = "left" === x && "inset-y-0 left-0",
                et = "right" === x && "inset-y-0 right-0";
            f[10] !== J || f[11] !== ee || f[12] !== et ? (u = (0, O.b)("pointer-events-none absolute", J, ee, et), f[10] = J, f[11] = ee, f[12] = et, f[13] = u) : u = f[13];
            let en = "bottom" === x ? void 0 : L && !I ? N ?? void 0 : void 0,
                ea = "bottom" === x ? y : void 0,
                er = "bottom" === x ? void 0 : $;
            return f[14] !== en || f[15] !== ea || f[16] !== er ? (p = {
                bottom: en,
                height: ea,
                width: er
            }, f[14] = en, f[15] = ea, f[16] = er, f[17] = p) : p = f[17], f[18] !== G || f[19] !== p || f[20] !== u ? (g = (0, a.jsx)(z.a.div, {
                ref: G,
                "aria-hidden": !0,
                className: u,
                dir: "ltr",
                style: p
            }), f[18] = G, f[19] = p, f[20] = u, f[21] = g) : g = f[21], f[22] !== x ? (v = (0, a.jsx)(X, {
                destination: x
            }), f[22] = x, f[23] = v) : v = f[23], f[24] !== x || f[25] !== w || f[26] !== Q || f[27] !== Y || f[28] !== v ? (m = (0, s.createPortal)((0, a.jsx)("div", {
                ref: Y,
                "aria-hidden": !0,
                className: "pointer-events-none z-50",
                "data-unified-workspace-drop-indicator": x,
                dir: w,
                style: Q,
                children: v
            }), document.body), f[24] = x, f[25] = w, f[26] = Q, f[27] = Y, f[28] = v, f[29] = m) : m = f[29], f[30] !== g || f[31] !== m ? (b = (0, a.jsxs)(a.Fragment, {
                children: [g, m]
            }), f[30] = g, f[31] = m, f[32] = b) : b = f[32], b
        }

        function K(e) {
            let {
                rects: t
            } = e;
            return -t.reference.height
        }

        function X(e) {
            let t, n, i, o = (0, r.c)(11),
                {
                    destination: l
                } = e,
                s = (0, p.c)(),
                c = "bottom" === l && "border-t",
                d = "left" === l && "border-r",
                u = "right" === l && "border-l";
            o[0] !== c || o[1] !== d || o[2] !== u ? (t = (0, O.b)("absolute top-0 left-0 border-default bg-codex-drop-overlay/60 select-none", c, d, u), o[0] = c, o[1] = d, o[2] = u, o[3] = t) : t = o[3];
            let h = `calc(100% / ${s})`,
                g = `scale(${s})`,
                v = `calc(100% / ${s})`;
            return o[4] !== h || o[5] !== g || o[6] !== v ? (n = {
                height: h,
                transform: g,
                transformOrigin: "top left",
                width: v
            }, o[4] = h, o[5] = g, o[6] = v, o[7] = n) : n = o[7], o[8] !== t || o[9] !== n ? (i = (0, a.jsx)("div", {
                className: t,
                style: n
            }), o[8] = t, o[9] = n, o[10] = i) : i = o[10], i
        }
        var Z = n("fs8u"),
            G = n("abd8"),
            Y = n("GMTh");

        function J(e) {
            let t, n, D, R, O, P, z, B = (0, r.c)(70),
                {
                    children: U,
                    composerOnly: W,
                    forceExpanded: q,
                    placement: V,
                    showHeader: H,
                    showConversationTitleMenu: F,
                    showComposerDivider: K,
                    isHidden: X,
                    persistPresentation: J,
                    reserveContent: et,
                    reserveFullComposerHeight: en,
                    onPresentationChange: ea,
                    title: er,
                    minimizedIcon: ei,
                    titleContent: eo,
                    statusState: el,
                    titleStatusState: es,
                    hasElicitation: ec,
                    notifications: ed,
                    workingPreview: eu,
                    compactWorkingPreview: eh,
                    responsePreview: ep,
                    previewBubble: eg,
                    renderTranscript: ev,
                    hasTranscript: em,
                    pendingFormId: eb,
                    emptyState: ef
                } = e,
                ex = void 0 !== W && W,
                ew = void 0 !== q && q,
                eC = void 0 === H || H,
                ey = void 0 === K ? !ex : K,
                ej = void 0 === J || J,
                eE = void 0 === eb ? T.a : eb,
                ek = (0, o.y)(M.a),
                e_ = "pane" === (void 0 === V ? "floating" : V),
                eS = (0, N.f)("2163293173"),
                eT = eS ? ef : void 0,
                eM = !ex || eS && (null != eT || (em ?? null != ev)),
                eN = (0, c.a)(),
                {
                    isHidden: eL
                } = (0, Y.a)(e_ ? "embedded" : "content"),
                eA = void 0 !== X && X || eL,
                eI = (0, o.z)(!(void 0 !== F && F) || e_ || eA ? null : I.a),
                eD = (0, l.useContext)(d.a),
                eR = (0, l.useContext)(L.b),
                eO = (0, l.useContext)(L.a),
                eP = (0, l.useContext)(b.a),
                ez = (0, l.useContext)(f.a),
                eB = (0, l.useContext)(m.a),
                eU = (0, l.useContext)(y.a),
                eW = (0, p.c)(),
                [eq, eV] = (0, l.useState)(null),
                eH = !(0, o.z)(A.p),
                e$ = (0, l.useRef)(null),
                eF = (0, o.z)(eE),
                eQ = (0, o.z)(ej ? _.a : void 0);
            eM || eC || (eQ = "compact");
            let eK = (0, o.z)(null == eF && (ec ?? L.c)),
                eX = (0, o.z)(h.l.activeTab$),
                eZ = (0, o.z)(u.t),
                eG = (0, o.z)(!!eZ && $.i);
            B[0] !== eX || B[1] !== e_ ? (t = e_ ? null : (0, g.getThreadBrowserTabIdFromPanelTab)(eX), B[0] = eX, B[1] = e_, B[2] = t) : t = B[2];
            let eY = t,
                eJ = void 0 !== en && en || eX?.tabType.kind === "latex-document" || eX?.tabType.kind === "image-preview",
                [e0, e1] = (0, l.useState)(null);
            B[3] !== eD || B[4] !== ek ? (n = e => (0, Z.b)(ek, eD, e), B[3] = eD, B[4] = ek, B[5] = n) : n = B[5];
            let e2 = n;
            B[6] !== eF ? (D = () => {
                let e = null != eF ? (0, w.a)(e$.current) : e$.current?.querySelector("[contenteditable='true']");
                null == e || (0, x.g)(e) || e.focus({
                    preventScroll: !0
                })
            }, B[6] = eF, B[7] = D) : D = B[7];
            let e3 = D;
            B[8] === Symbol.for("react.memo_cache_sentinel") ? (R = (0, a.jsx)("div", {
                ref: e => {
                    null != e && eV(e)
                },
                className: "contents"
            }), B[8] = R) : R = B[8];
            let e4 = e_ || eA;
            return B[9] !== eX || B[10] !== eS || B[11] !== eN || B[12] !== e_ || B[13] !== eD || B[14] !== e0 ? (O = eS || e_ || null == eD || null == e0 || null == eX ? null : (0, s.createPortal)((0, a.jsx)(Q, {
                destination: e0,
                direction: (0, S.a)(eN.locale),
                surface: "chat"
            }), eD), B[9] = eX, B[10] = eS, B[11] = eN, B[12] = e_, B[13] = eD, B[14] = e0, B[15] = O) : O = B[15], B[16] !== eY || B[17] !== eX || B[18] !== eM || B[19] !== U || B[20] !== eh || B[21] !== ex || B[22] !== eS || B[23] !== eT || B[24] !== e3 || B[25] !== ew || B[26] !== e2 || B[27] !== eK || B[28] !== em || B[29] !== eZ || B[30] !== eB || B[31] !== ez || B[32] !== eU || B[33] !== eO || B[34] !== eR || B[35] !== eN || B[36] !== eA || B[37] !== eH || B[38] !== e_ || B[39] !== eD || B[40] !== ei || B[41] !== eG || B[42] !== ed || B[43] !== ea || B[44] !== eq || B[45] !== eF || B[46] !== ej || B[47] !== eg || B[48] !== ev || B[49] !== et || B[50] !== ep || B[51] !== ek || B[52] !== eJ || B[53] !== ey || B[54] !== eC || B[55] !== e0 || B[56] !== el || B[57] !== eQ || B[58] !== eP || B[59] !== er || B[60] !== eo || B[61] !== eI || B[62] !== es || B[63] !== eW || B[64] !== eu ? (P = e => (0, a.jsx)(i.a, {
                transformPagePoint: e => ({
                    x: e.x / eW,
                    y: e.y / eW
                }),
                children: (0, a.jsx)(L.b, {
                    value: e_ ? eR : {
                        activeBrowserTabId: eY,
                        isInsideOverlay: !0,
                        onAttachmentAdded: () => {
                            ek.get(h.l.activeTab$)?.tabId === eX?.tabId && (ek.get(A.k) || (0, A.i)(ek, {
                                prefersReducedMotion: !0
                            }), (0, x.d)())
                        },
                        shouldAnimate: !1
                    },
                    children: (0, a.jsx)(L.a, {
                        value: e_ ? eO : "expanded",
                        children: (0, a.jsx)(E.a, {
                            preserveLayoutOnEscape: !0,
                            onResize: e => (0, v.n)(ek, {
                                dockPosition: e
                            }),
                            contentChat: {
                                focusComposer: e3,
                                onOpenRightPane: eZ && eM && null != eX ? () => (0, Z.a)(ek, "right", "layout_button") : void 0,
                                openRightPaneDisabled: eG
                            },
                            previewSide: eS ? e0 : null,
                            dockThreadKey: G.c,
                            canDock: eM || eC,
                            titleContent: eI ?? eo,
                            minimizedIcon: ei,
                            statusState: el,
                            titleStatusState: es,
                            hasTranscript: em,
                            emptyState: eT,
                            pendingFormId: eF,
                            notifications: ed,
                            workingPreview: eu,
                            compactWorkingPreview: eh,
                            responsePreview: ep,
                            previewBubble: eg,
                            containerSize: e,
                            renderMenu: eZ ? void 0 : e => (0, a.jsx)(k.a, {
                                ...e,
                                showOptions: !eS || eM
                            }),
                            forceExpanded: ew || eK && (eS || !ex),
                            isHidden: e_ || eA,
                            isMinimized: eH,
                            onDragOver: eM ? e => {
                                let t = e2(e);
                                return e1(t), null != t
                            } : void 0,
                            onDragEnd: eM ? (e, t) => {
                                e1(null);
                                let n = e2(e);
                                return null != n && (0, Z.a)(ek, n, t)
                            } : void 0,
                            presentation: eQ,
                            showHeader: eC,
                            showComposerDivider: ey,
                            background: ex && !eC ? void 0 : "panel",
                            onPresentationChange: e => {
                                ej && ek.set(_.a, e), ea?.(e)
                            },
                            onMinimizedChange: e => {
                                (e ? A.t : A.i)(ek, {
                                    prefersReducedMotion: !0
                                })
                            },
                            title: er ?? eN.formatMessage({
                                id: "quickChat.mainConversation",
                                defaultMessage: "Chat"
                            }),
                            renderTranscript: null == ev ? void 0 : (e, t) => ev({
                                isVisible: t && !e_ && !eA
                            }),
                            renderComposer: (e, t) => (0, a.jsx)(b.a, {
                                value: e_ || null == eY ? eP : eD,
                                children: (0, a.jsx)(C.a, {
                                    target: e_ ? eq : null,
                                    children: (0, a.jsx)(ee, {
                                        composerRef: e$,
                                        mainContentElement: eD,
                                        presentation: e,
                                        paneContext: e_ ? {
                                            transition: eR,
                                            escapeHandler: ez,
                                            bannerTarget: eB,
                                            overlayOwner: eU
                                        } : void 0,
                                        layout: t,
                                        reserveFullComposerHeight: eJ,
                                        reserveContent: et ?? (null == eY && eX?.tabType.kind !== "mcp-app" && eX?.tabType.kind !== "mcp-extension"),
                                        children: "function" == typeof U ? U(e_ ? void 0 : e) : U
                                    })
                                })
                            })
                        })
                    })
                })
            }), B[16] = eY, B[17] = eX, B[18] = eM, B[19] = U, B[20] = eh, B[21] = ex, B[22] = eS, B[23] = eT, B[24] = e3, B[25] = ew, B[26] = e2, B[27] = eK, B[28] = em, B[29] = eZ, B[30] = eB, B[31] = ez, B[32] = eU, B[33] = eO, B[34] = eR, B[35] = eN, B[36] = eA, B[37] = eH, B[38] = e_, B[39] = eD, B[40] = ei, B[41] = eG, B[42] = ed, B[43] = ea, B[44] = eq, B[45] = eF, B[46] = ej, B[47] = eg, B[48] = ev, B[49] = et, B[50] = ep, B[51] = ek, B[52] = eJ, B[53] = ey, B[54] = eC, B[55] = e0, B[56] = el, B[57] = eQ, B[58] = eP, B[59] = er, B[60] = eo, B[61] = eI, B[62] = es, B[63] = eW, B[64] = eu, B[65] = P) : P = B[65], B[66] !== e4 || B[67] !== O || B[68] !== P ? (z = (0, a.jsxs)(a.Fragment, {
                children: [R, (0, a.jsx)(j.a, {
                    isHidden: e4,
                    overlay: O,
                    children: P
                })]
            }), B[66] = e4, B[67] = O, B[68] = P, B[69] = z) : z = B[69], z
        }

        function ee(e) {
            let t, n, i, s, c, d, u, h, p, g, v, b, x, w, C, j = (0, r.c)(49),
                {
                    children: E,
                    composerRef: k,
                    mainContentElement: _,
                    presentation: S,
                    paneContext: T,
                    layout: N,
                    reserveContent: I,
                    reserveFullComposerHeight: D
                } = e,
                R = (0, o.y)(M.a),
                O = (0, l.useContext)(L.b),
                P = (0, l.useContext)(f.a),
                z = (0, l.useContext)(m.a),
                B = (0, l.useContext)(y.a),
                {
                    activeBrowserTabId: U
                } = O,
                W = null != T,
                {
                    isCompact: q,
                    isDockedTop: V,
                    isHidden: H,
                    isMinimized: $
                } = S,
                {
                    isMoving: F,
                    composerContentHeight: Q,
                    dockedReservePx: K
                } = N,
                X = !I || H || $ ? 0 : Math.max(118, q ? K : 0, D ? Q + 118 - 102 : 0),
                Z = V && q && K > 0 ? X : 0,
                [G, Y] = (0, l.useState)(!$);
            (q || $) && !$ !== G && Y(!$);
            let J = I && !H && G ? A.b : 0;
            j[0] !== U || j[1] !== k || j[2] !== W ? (t = () => {
                if (W || null == U) return;
                let e = k.current?.ownerDocument.activeElement;
                e instanceof HTMLElement && k.current?.contains(e) && e.blur()
            }, n = [U, k, W], j[0] = U, j[1] = k, j[2] = W, j[3] = t, j[4] = n) : (t = j[3], n = j[4]), (0, l.useLayoutEffect)(t, n), j[5] !== k || j[6] !== J || j[7] !== V || j[8] !== H || j[9] !== $ || j[10] !== W || j[11] !== _ || j[12] !== X || j[13] !== R || j[14] !== Z ? (i = () => {
                W || null == _ || (R.set(A.m, {
                    owner: k,
                    style: {
                        [A.a]: V ? `${J}px 0 0` : `0 0 ${J}px`,
                        [A.c]: `${H||$||V?0:102}px`,
                        [A.d]: `${V?0:X}px`,
                        [A.g]: `${V?X:0}px`
                    }
                }), (0, A.q)(R, V ? 0 : X), R.set(A.n, Z))
            }, s = [k, J, W, V, H, $, _, X, R, Z], j[5] = k, j[6] = J, j[7] = V, j[8] = H, j[9] = $, j[10] = W, j[11] = _, j[12] = X, j[13] = R, j[14] = Z, j[15] = i, j[16] = s) : (i = j[15], s = j[16]), (0, l.useLayoutEffect)(i, s), j[17] !== k || j[18] !== W || j[19] !== _ || j[20] !== R ? (c = () => {
                if (!W && null != _) return () => {
                    let e = R.get(A.m);
                    e?.owner === k && (R.set(A.m, {
                        ...e,
                        owner: null
                    }), (0, A.q)(R, 0), R.set(A.n, 0))
                }
            }, d = [k, W, _, R], j[17] = k, j[18] = W, j[19] = _, j[20] = R, j[21] = c, j[22] = d) : (c = j[21], d = j[22]), (0, l.useLayoutEffect)(c, d);
            let ee = !q || $ || F || Q > 102;
            j[23] !== k || j[24] !== ee || j[25] !== W || j[26] !== R ? (u = () => {
                let e = k.current;
                if (W || null == e) return;
                let t = () => {
                    let t = !ee && null != e.querySelector('[aria-haspopup="dialog"][aria-expanded="true"]');
                    R.set(A.j, ee || t)
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
            }, h = [k, ee, W, R], j[23] = k, j[24] = ee, j[25] = W, j[26] = R, j[27] = u, j[28] = h) : (u = j[27], h = j[28]), (0, l.useLayoutEffect)(u, h), j[29] !== W || j[30] !== R ? (g = () => () => {
                W || R.set(A.j, !1)
            }, p = [W, R], j[29] = W, j[30] = R, j[31] = p, j[32] = g) : (p = j[31], g = j[32]), (0, l.useLayoutEffect)(g, p);
            let et = null == T ? O : T.transition,
                en = null == T ? P : T.escapeHandler,
                ea = null == T ? z : T.bannerTarget,
                er = null == T ? B : T.overlayOwner,
                ei = W ? "contents" : void 0;
            return j[33] !== E || j[34] !== k || j[35] !== ei ? (v = (0, a.jsx)("div", {
                ref: k,
                className: ei,
                "data-right-panel-composer-overlay-content": "true",
                children: E
            }), j[33] = E, j[34] = k, j[35] = ei, j[36] = v) : v = j[36], j[37] !== er || j[38] !== v ? (b = (0, a.jsx)(y.a, {
                value: er,
                children: v
            }), j[37] = er, j[38] = v, j[39] = b) : b = j[39], j[40] !== ea || j[41] !== b ? (x = (0, a.jsx)(m.a, {
                value: ea,
                children: b
            }), j[40] = ea, j[41] = b, j[42] = x) : x = j[42], j[43] !== en || j[44] !== x ? (w = (0, a.jsx)(f.a, {
                value: en,
                children: x
            }), j[43] = en, j[44] = x, j[45] = w) : w = j[45], j[46] !== et || j[47] !== w ? (C = (0, a.jsx)(L.b, {
                value: et,
                children: w
            }), j[46] = et, j[47] = w, j[48] = C) : C = j[48], C
        }
    }),
    ilLT: (function(e, t, n) {
        var a = n("Qgfj"),
            r = n("bf6R"),
            i = n("fs8u");
        n.d(t, {}, {
            a: function(e, t) {
                return [{
                    id: "left",
                    icon: r.w,
                    enabled: t,
                    message: (0, a.e)({
                        id: "quickChat.dock.left",
                        defaultMessage: "Move to left pane"
                    }),
                    onSelect: () => {
                        (0, i.a)(e, "left", "context_menu")
                    }
                }, {
                    id: "right",
                    icon: r.y,
                    enabled: t,
                    message: (0, a.e)({
                        id: "quickChat.dock.right",
                        defaultMessage: "Move to right pane"
                    }),
                    onSelect: () => {
                        (0, i.a)(e, "right", "context_menu")
                    }
                }]
            }
        })
    }),
    FC5L: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            i = n("BolX"),
            o = n("tSEg"),
            l = n("wrxv");
        n.d(t, {}, {
            a: function(e) {
                let t = (0, i.j)(o.a, (t, n) => {
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
                return (0, i.d)(o.a, (n, a) => {
                    if (null == n) return l.a;
                    let r = [],
                        i = !1;
                    for (let o of e.conversationIds(a.scope, n)) {
                        let n = e.status(a.scope, o);
                        if (n.pending) {
                            i = !0;
                            continue
                        }
                        if (!n.unread || !n.completed) continue;
                        let l = e.preview(a.scope, o);
                        null != l && r.push({
                            id: n.completionId ?? o,
                            title: e.title(a.scope, o),
                            preview: l,
                            ...a.get(t, o)
                        })
                    }
                    return r.length > 0 ? {
                        type: "ready",
                        value: r
                    } : i ? l.b : l.a
                }, {
                    isEqual: r()
                })
            }
        })
    }),
    zjpG: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("on57"),
            o = n("oyxz");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, s = (0, r.c)(5),
                    {
                        className: c
                    } = e;
                return s[0] !== c ? (t = (0, i.b)("last:hidden", c), s[0] = c, s[1] = t) : t = s[1], s[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(o.a, {
                    id: "codex.ui.bulletSeparator",
                    defaultMessage: "·"
                }), s[2] = n) : n = s[2], s[3] !== t ? (l = (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: t,
                    children: n
                }), s[3] = t, s[4] = l) : l = s[4], l
            }
        })
    }),
    y0pT: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("ty1V"),
            o = n("on57");
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, s, c, d, u, h = (0, r.c)(13);
                return h[0] !== e ? ({
                    className: n,
                    children: t,
                    ...l
                } = e, h[0] = e, h[1] = t, h[2] = n, h[3] = l) : (t = h[1], n = h[2], l = h[3]), h[4] !== n ? (s = (0, o.b)("relative min-h-0 overflow-hidden", n), h[4] = n, h[5] = s) : s = h[5], h[6] !== t || h[7] !== l ? (c = (0, a.jsx)(i.d, {
                    className: "size-full overscroll-contain",
                    tabIndex: 0,
                    ...l,
                    children: t
                }), h[6] = t, h[7] = l, h[8] = c) : c = h[8], h[9] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, a.jsx)(i.b, {
                    className: "flex w-2 touch-none p-0.5 select-none",
                    orientation: "vertical",
                    children: (0, a.jsx)(i.c, {
                        className: "relative flex-1 rounded-full bg-token-scrollbar-slider-background hover:bg-token-scrollbar-slider-hover-background active:bg-token-scrollbar-slider-active-background"
                    })
                }), h[9] = d) : d = h[9], h[10] !== s || h[11] !== c ? (u = (0, a.jsxs)(i.a, {
                    className: s,
                    type: "hover",
                    children: [c, d]
                }), h[10] = s, h[11] = c, h[12] = u) : u = h[12], u
            }
        })
    }),
    xD3Z: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("slpy"),
            o = n("BolX"),
            l = n("Qgfj"),
            s = n("Wf1j"),
            c = n("oyxz"),
            d = n("QcW8"),
            u = n("ZU27"),
            h = n("ilLT"),
            p = n("Sm6l"),
            g = n("rmk3"),
            v = n("bf6R"),
            m = n("f38C"),
            b = n("tSEg"),
            f = n("hZax"),
            x = n("dt6g"),
            w = n("WwnD");
        let C = (0, o.c)(b.a, e => {
            let {
                get: t
            } = e;
            return null == t(d.gb) ? "hidden" : null != t(u.l.activeTab$) ? "split" : "tab"
        });

        function y(e) {
            let t, n, o, d, u, h = (0, r.c)(22),
                {
                    contextMenuTrigger: b,
                    isCompact: x,
                    isDragging: w,
                    items: C,
                    open: y,
                    onMinimize: E,
                    onOpenChange: k,
                    showOptions: _
                } = e,
                S = void 0 === _ || _,
                T = (0, f.f)("2163293173"),
                M = (0, s.a)();
            h[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, l.e)({
                id: "quickChat.dock.minimizeComposer",
                defaultMessage: "Minimize composer"
            }), h[0] = t) : t = h[0], h[1] !== E ? (n = {
                id: "minimize",
                icon: v.Ze,
                message: t,
                onSelect: E,
                selectAfterClose: !0
            }, h[1] = E, h[2] = n) : n = h[2], h[3] !== C || h[4] !== n ? (o = [...C, n], h[3] = C, h[4] = n, h[5] = o) : o = h[5];
            let N = o;
            if (null != b) {
                let e, t;
                return S ? (h[6] !== b ? (e = (0, a.jsx)("div", {
                    className: "contents",
                    children: b
                }), h[6] = b, h[7] = e) : e = h[7], h[8] !== N || h[9] !== e ? (t = (0, a.jsx)(g.a, {
                    disableNative: !0,
                    items: N,
                    children: e
                }), h[8] = N, h[9] = e, h[10] = t) : t = h[10], t) : b
            }
            return h[11] !== T || h[12] !== M || h[13] !== x || h[14] !== w || h[15] !== N || h[16] !== k || h[17] !== y || h[18] !== S ? (d = S && (0, a.jsx)(g.a, {
                disableNative: !0,
                trigger: "click",
                align: "end",
                open: y,
                onOpenChange: k,
                items: N,
                children: T ? (0, a.jsx)(m.a, {
                    size: "toolbar",
                    label: M.formatMessage({
                        id: "quickChat.moreOptions",
                        defaultMessage: "Chat options"
                    })
                }) : (0, a.jsx)(i.a, {
                    disabled: y || w,
                    content: (0, a.jsx)(c.a, {
                        id: "quickChat.dock.dragHint",
                        defaultMessage: "Drag to move · Click for options"
                    }),
                    children: (0, a.jsx)(p.a, {
                        className: "cursor-grab touch-none active:cursor-grabbing",
                        "aria-label": M.formatMessage({
                            id: "quickChat.dock.menu",
                            defaultMessage: "Dock Chat"
                        }),
                        color: "ghostSecondary",
                        "data-quick-chat-drag-handle": !0,
                        size: x ? "composer" : "toolbar",
                        uniform: !0,
                        onPointerDown: j,
                        onClick: e => {
                            0 !== e.button || e.ctrlKey || !(e.detail > 0) || e.defaultPrevented || k?.(!y)
                        },
                        children: (0, a.jsx)(v.$c, {})
                    })
                })
            }), h[11] = T, h[12] = M, h[13] = x, h[14] = w, h[15] = N, h[16] = k, h[17] = y, h[18] = S, h[19] = d) : d = h[19], h[20] !== d ? (u = (0, a.jsx)(a.Fragment, {
                children: d
            }), h[20] = d, h[21] = u) : u = h[21], u
        }

        function j(e) {
            0 !== e.button || e.ctrlKey || e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i = (0, r.c)(6),
                    s = (0, o.y)(b.a),
                    c = (0, o.z)(C);
                i[0] !== c || i[1] !== s ? (t = "hidden" === c ? [] : [{
                    id: "full-view",
                    icon: v.N,
                    message: (0, l.e)({
                        id: "quickChat.dock.openTab",
                        defaultMessage: "Open in full view"
                    }),
                    onSelect: () => {
                        (0, x.a)(s, "context_menu", () => (0, w.c)(s, "chat", {
                            mode: "full"
                        }))
                    }
                }, ...(0, h.a)(s, "split" === c)], i[0] = c, i[1] = s, i[2] = t) : t = i[2];
                let d = t;
                return i[3] !== d || i[4] !== e ? (n = (0, a.jsx)(y, {
                    ...e,
                    items: d
                }), i[3] = d, i[4] = e, i[5] = n) : n = i[5], n
            },
            b: y
        })
    }),
    SkIz: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var a = n("ABep"),
            r = n("QosV"),
            i = n("BolX"),
            o = n("oyxz"),
            l = n("TjgH"),
            s = n("Sm6l"),
            c = n("X6Vn"),
            d = n("gPv1"),
            u = n("OWtl"),
            h = n("nsrx"),
            p = n("on57"),
            g = n("JNtf"),
            v = n("mUDD"),
            m = n("ZhKl"),
            b = n("qVxm"),
            f = n("a6Zv"),
            x = n("eLmE");

        function w(e) {
            let t, n, l, c, d, w, C, y = (0, r.c)(19),
                {
                    hostId: j,
                    onClose: E,
                    rateLimitStatus: k
                } = e,
                _ = (0, i.y)(u.a),
                S = (0, f.a)(),
                T = (0, i.x)(x.b, j),
                M = k.rate_limit_upsell;
            if (!T || null == M) return null;
            let N = !S && "-mb-6";
            y[0] !== N ? (t = (0, p.b)("block w-full scale-105 object-cover", N), y[0] = N, y[1] = t) : t = y[1];
            let L = S ? "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-dark.png" : "https://persistent.oaistatic.com/chatgpt/tpp/luna-reserve-modal-hero-light.png";
            return y[2] !== t || y[3] !== L ? (n = (0, a.jsx)("div", {
                className: "overflow-hidden",
                children: (0, a.jsx)("img", {
                    alt: "",
                    "aria-hidden": "true",
                    className: t,
                    src: L
                })
            }), y[2] = t, y[3] = L, y[4] = n) : n = y[4], y[5] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, a.jsx)(g.e, {
                className: "contents",
                children: (0, a.jsx)(o.a, {
                    id: "codex.lunaReserve.dialog.title",
                    defaultMessage: "Regain access to our most powerful models"
                })
            }), y[5] = l) : l = y[5], y[6] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, a.jsx)(v.e, {
                className: "items-center pb-2",
                children: (0, a.jsx)(v.d, {
                    className: "items-center",
                    titleClassName: "text-center",
                    subtitleTone: "secondary",
                    subtitleClassName: "text-center",
                    title: l,
                    subtitle: (0, a.jsx)(g.d, {
                        className: "contents",
                        children: (0, a.jsx)(o.a, {
                            id: "codex.lunaReserve.dialog.description",
                            defaultMessage: "You are now chatting with Luna. Continue to access our most capable models."
                        })
                    })
                })
            }), y[6] = c) : c = y[6], y[7] !== M.ctas || y[8] !== E || y[9] !== _ ? (d = e => (0, a.jsx)("div", {
                className: "self-center",
                children: (0, a.jsx)(v.c, {
                    expandSingleButton: !1,
                    children: M.ctas.map((t, n) => {
                        if (!(0, m.b)(t.action)) return null;
                        let r = e.actions[t.action];
                        return (0, a.jsx)(s.a, {
                            color: 0 === n ? "primary" : "secondary",
                            disabled: r.disabled,
                            size: "large",
                            onClick: e => {
                                (0, h.a)(_, {
                                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_CTA_CLICKED",
                                    ctaAction: t.action,
                                    source: "details_modal"
                                }), r.log(), E(), r.onClick(e)
                            },
                            children: r.label ?? t.label
                        }, `${t.action}:${n}`)
                    }).reverse()
                })
            }), y[7] = M.ctas, y[8] = E, y[9] = _, y[10] = d) : d = y[10], y[11] !== M || y[12] !== k || y[13] !== d ? (w = (0, a.jsxs)(v.b, {
                children: [c, (0, a.jsx)(v.e, {
                    className: "items-center",
                    children: (0, a.jsx)(b.a, {
                        banner: M,
                        rateLimitStatus: k,
                        renderContent: d
                    })
                })]
            }), y[11] = M, y[12] = k, y[13] = d, y[14] = w) : w = y[14], y[15] !== E || y[16] !== n || y[17] !== w ? (C = (0, a.jsxs)(g.a, {
                open: !0,
                size: "default",
                onOpenChange: E,
                children: [n, w]
            }), y[15] = E, y[16] = n, y[17] = w, y[18] = C) : C = y[18], C
        }

        function C(e) {
            let t, n, p, g, v = (0, r.c)(7),
                {
                    hostId: m
                } = e,
                b = (0, i.y)(u.a);
            return (0, i.x)(x.b, m) ? (v[0] !== m || v[1] !== b ? (t = () => {
                (0, h.a)(b, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_HEADER_BUTTON_CLICKED",
                    source: "thread_header"
                });
                let e = b.query.getData(d.b);
                if (null != e) {
                    (0, c.f)(b, w, {
                        hostId: m,
                        rateLimitStatus: e
                    }), (0, h.a)(b, {
                        action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_MODAL_OPENED",
                        source: "details_modal"
                    });
                    return
                }(0, h.a)(b, {
                    action: "CODEX_LUNA_RESERVE_LIFECYCLE_ACTION_ERROR",
                    errorCode: "missing_usage_status",
                    source: "thread_header"
                })
            }, v[0] = m, v[1] = b, v[2] = t) : t = v[2], v[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)("span", {
                "aria-hidden": "true",
                className: "text-chart-yellow",
                children: "🌙"
            }), v[3] = n) : n = v[3], v[4] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, a.jsxs)(l.a, {
                variant: "reserve",
                children: [n, (0, a.jsx)("span", {
                    className: "brightness-75 dark:brightness-100",
                    children: (0, a.jsx)(o.a, {
                        id: "codex.lunaReserve.header.label",
                        defaultMessage: "Luna reserve"
                    })
                })]
            }), v[4] = p) : p = v[4], v[5] !== t ? (g = (0, a.jsx)(s.a, {
                color: "ghostMuted",
                size: "inline",
                onClick: t,
                children: p
            }), v[5] = t, v[6] = g) : g = v[6], g) : null
        }
    }),
    vNLk: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("hwkA"),
            o = n("oyxz"),
            l = n("bf6R"),
            s = n("MRlq");
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, d, u, h, p, g, v, m = (0, r.c)(31),
                    {
                        restored: b,
                        restoring: f,
                        deleting: x,
                        onDelete: w,
                        onUnarchive: C,
                        onDone: y
                    } = e,
                    j = void 0 !== x && x;
                m[0] !== f ? (t = f ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.restoringDescription",
                    defaultMessage: "Restoring this chat and its workspace…"
                }) : null, m[0] = f, m[1] = t) : t = m[1], m[2] !== b || m[3] !== f ? (n = !f && b ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.restoredDescription",
                    defaultMessage: "This chat has been restored"
                }) : null, m[2] = b, m[3] = f, m[4] = n) : n = m[4], m[5] !== b || m[6] !== f ? (c = f || b ? null : (0, a.jsx)(o.a, {
                    id: "localConversation.archived.previewDescription",
                    defaultMessage: "This chat is archived. To continue, unarchive it first"
                }), m[5] = b, m[6] = f, m[7] = c) : c = m[7], m[8] !== t || m[9] !== n || m[10] !== c ? (d = (0, a.jsxs)("span", {
                    className: "text-sm text-secondary select-none",
                    children: [t, n, c]
                }), m[8] = t, m[9] = n, m[10] = c, m[11] = d) : d = m[11], m[12] !== j || m[13] !== w || m[14] !== b || m[15] !== f ? (u = b || null == w ? null : (0, a.jsx)(i.a, {
                    color: "danger",
                    variant: "solid",
                    disabled: f,
                    loading: j,
                    size: "lg",
                    onClick: w,
                    children: (0, a.jsx)(o.a, {
                        ...s.a.delete
                    })
                }), m[12] = j, m[13] = w, m[14] = b, m[15] = f, m[16] = u) : u = m[16];
                let E = b ? y : C;
                return m[17] !== b || m[18] !== f ? (h = b && !f ? (0, a.jsx)(o.a, {
                    id: "localConversation.archived.previewDone",
                    defaultMessage: "Done"
                }) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.f, {}), (0, a.jsx)(o.a, {
                        ...s.a.unarchive
                    })]
                }), m[17] = b, m[18] = f, m[19] = h) : h = m[19], m[20] !== j || m[21] !== f || m[22] !== E || m[23] !== h ? (p = (0, a.jsx)(i.a, {
                    color: "primary",
                    variant: "solid",
                    disabled: j,
                    loading: f,
                    size: "lg",
                    onClick: E,
                    children: h
                }), m[20] = j, m[21] = f, m[22] = E, m[23] = h, m[24] = p) : p = m[24], m[25] !== u || m[26] !== p ? (g = (0, a.jsxs)("div", {
                    className: "pointer-events-auto flex items-center gap-2",
                    children: [u, p]
                }), m[25] = u, m[26] = p, m[27] = g) : g = m[27], m[28] !== g || m[29] !== d ? (v = (0, a.jsxs)("div", {
                    className: "flex flex-col items-center gap-4 py-4",
                    children: [d, g]
                }), m[28] = g, m[29] = d, m[30] = v) : v = m[30], v
            }
        })
    }),
    sqqv: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            i = n("slpy"),
            o = n("Wf1j"),
            l = n("oyxz"),
            s = n("Sm6l"),
            c = n("bf6R"),
            d = n("mphG"),
            u = n("ABl9"),
            h = n("Zt82");
        n.d(t, {}, {
            a: function(e) {
                let t, n, p, g, v, m, b, f, x, w, C, y, j = (0, r.c)(26);
                j[0] !== e ? ({
                    title: g,
                    project: n,
                    onActivate: t,
                    ...p
                } = e, j[0] = e, j[1] = t, j[2] = n, j[3] = p, j[4] = g) : (t = j[1], n = j[2], p = j[3], g = j[4]);
                let E = (0, o.a)(),
                    k = n?.name;
                return j[5] !== E || j[6] !== k ? (v = (0, h.a)(E, k), j[5] = E, j[6] = k, j[7] = v) : v = j[7], j[8] !== t || j[9] !== p ? (m = e => {
                    p.onClick?.(e), t?.()
                }, b = e => {
                    p.onKeyDown?.(e), e.defaultPrevented && !e.repeat && ("Enter" === e.key || " " === e.key) && t?.()
                }, j[8] = t, j[9] = p, j[10] = m, j[11] = b) : (m = j[10], b = j[11]), j[12] !== n ? (f = null == n ? null : (0, a.jsx)(i.a, {
                    content: n.name,
                    children: (0, a.jsx)("span", {
                        "aria-hidden": "true",
                        className: "flex shrink-0 items-center",
                        children: n.icon
                    })
                }), j[12] = n, j[13] = f) : f = j[13], j[14] !== g ? (x = "string" == typeof g ? (0, u.d)(g) : g ?? (0, a.jsx)(l.a, {
                    id: "threadWorkspace.chatTitlebar.fallbackTitle",
                    defaultMessage: "Chat"
                }), j[14] = g, j[15] = x) : x = j[15], j[16] !== x ? (w = (0, a.jsx)(d.a, {
                    className: "min-w-0 truncate",
                    children: x
                }), j[16] = x, j[17] = w) : w = j[17], j[18] === Symbol.for("react.memo_cache_sentinel") ? (C = (0, a.jsx)("span", {
                    className: "grid size-3.5 shrink-0 place-items-center",
                    children: (0, a.jsx)(c._b, {})
                }), j[18] = C) : C = j[18], j[19] !== p || j[20] !== v || j[21] !== m || j[22] !== b || j[23] !== f || j[24] !== w ? (y = (0, a.jsxs)(s.a, {
                    "aria-description": v,
                    ...p,
                    onClick: m,
                    onKeyDown: b,
                    className: "max-w-full min-w-0 select-none",
                    color: "ghostActive",
                    size: "conversationTitle",
                    children: [f, w, C]
                }), j[19] = p, j[20] = v, j[21] = m, j[22] = b, j[23] = f, j[24] = w, j[25] = y) : y = j[25], y
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
            r = n("BolX"),
            i = n("zd8w"),
            o = n("tSEg"),
            l = n("giVD");
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, c, d = (0, a.c)(9),
                    {
                        icon: u,
                        isVisible: h,
                        title: p
                    } = e,
                    g = void 0 === u ? null : u,
                    v = void 0 === h || h,
                    m = (0, r.y)(o.a);
                return d[0] !== g || d[1] !== v || d[2] !== m || d[3] !== p ? (t = () => {
                    m.set(l.c, g), m.set(l.e, p), m.set(l.g, v)
                }, n = [g, v, m, p], d[0] = g, d[1] = v, d[2] = m, d[3] = p, d[4] = t, d[5] = n) : (t = d[4], n = d[5]), (0, i.useLayoutEffect)(t, n), d[6] !== m ? (s = () => () => {
                    m.set(l.c, null), m.set(l.e, null), m.set(l.g, !0)
                }, c = [m], d[6] = m, d[7] = s, d[8] = c) : (s = d[7], c = d[8]), (0, i.useLayoutEffect)(s, c), null
            }
        })
    }),
    dDDU: (function(e, t, n) {
        var a = n("Qgfj"),
            r = n("Kyn2"),
            i = n("nnol"),
            o = n("QcW8"),
            l = n("ZU27"),
            s = n("gbrq"),
            c = n("bf6R"),
            d = n("GaA7"),
            u = n("dt6g"),
            h = n("Vhua"),
            p = n("WwnD"),
            g = n("NkWL"),
            v = n("pZMh");
        n.d(t, {}, {
            a: function(e) {
                let t = e.get(o.gb);
                return e.get(o.db) || t?.isVisible !== !0 || "split" !== t.mode && !e.get(g.c) ? [] : function(e, t) {
                    let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.l,
                        m = e.get(l.l.activeTab$),
                        b = e.get(v.i),
                        f = null;
                    o === l.a ? f = "bottom" : "split" === b.mode && (e.get(v.g) ? (f = b.contentSide, "chat" !== t && t.tabId === e.get(v.l) && (f = "left" === b.contentSide ? "right" : "left")) : "chat" === t ? f = "left" === b.contentSide ? "right" : "left" : t.tabId === m?.tabId && (f = b.contentSide));
                    let x = e.get(h.i),
                        w = !x && ("chat" !== t || null != m),
                        C = [{
                            enabled: w && "left" !== f && (0, p.a)(e, t, "left"),
                            id: "unified-workspace-move-left",
                            icon: c.w,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToLeftPane",
                                defaultMessage: "Move to left pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "left", o))
                        }, {
                            enabled: w && "right" !== f && (0, p.a)(e, t, "right"),
                            id: "unified-workspace-move-right",
                            icon: c.y,
                            message: (0, a.e)({
                                id: "threadWorkspace.contextMenu.moveToRightPane",
                                defaultMessage: "Move to right pane"
                            }),
                            onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "right", o))
                        }].filter(e => !1 !== e.enabled);
                    return !x && o !== l.a && e.get(s.b) && (0, p.a)(e, t, "bottom") && C.push({
                        id: "unified-workspace-move-bottom",
                        icon: c.p,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToBottomPane",
                            defaultMessage: "Move to bottom pane"
                        }),
                        onSelect: () => (0, u.a)(e, "context_menu", () => (0, p.b)(e, t, "bottom", o))
                    }), "chat" === t || t.isWorkspaceHome || null == t.tabType.windowTransfer || null == d.a.detachedWindows || C.push({
                        id: "unified-workspace-move-new-window",
                        enabled: !x && !(0, i.c)(e, t.tabId) && t.tabType.windowTransfer.canTransfer(e, t.props),
                        icon: c.Mg,
                        message: (0, a.e)({
                            id: "threadWorkspace.contextMenu.moveToNewWindow",
                            defaultMessage: "Move to new window"
                        }),
                        onSelect: () => {
                            (0, r.a)(e, Promise.resolve().then(n.bind(n, "K3jS")).then(n => {
                                let {
                                    moveTabToNewWindow: a
                                } = n;
                                return a(e, o, t, null)
                            }))
                        }
                    }), "chat" === t && e.get(g.c) && C.push({
                        id: "close-tab",
                        icon: c.uj,
                        message: (0, a.e)({
                            id: "codex.tabs.contextMenu.close",
                            defaultMessage: "Close"
                        }),
                        onSelect: () => (0, g.a)(e)
                    }), C
                }(e, "chat")
            }
        })
    })
};