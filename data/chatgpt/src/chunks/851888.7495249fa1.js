export const __rspack_esm_ids = [851888];
export const __webpack_modules__ = {
    bfX9: (function(e, t, r) {
        r.d(t, {}, {
            a: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
                return !!e?.ownership_state_enabled && (e.ownership?.available_action === t || e.ownership?.available_action === "view_request" && e.ownership.current_request?.kind === t) && !e.profiles.some(e => e.allowed_actions.includes("manage")) && ("claim" === t || !0 === e.is_verified)
            }
        })
    }),
    zHQF: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("oyxz");
        r.d(t, {}, {
            a: function() {
                let e, t = (0, a.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(i.a, {
                    id: "chatgpt.ads.business_agent.organic.unavailable",
                    defaultMessage: "This client or account can’t open this business chat",
                    description: "Error shown before starting a Business Agent chat when the current app or signed-in account cannot use its native runtime."
                }), t[0] = e) : e = t[0], e
            }
        })
    }),
    niC2: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57"),
            l = r("zd8w"),
            s = r("Wf1j"),
            o = r("ygO2"),
            u = r("vxGj"),
            d = r("HOLv"),
            c = r("r21w"),
            f = r("SUhA"),
            p = r("JwGC"),
            m = r("LQio"),
            h = r("CXEU"),
            g = r("iUK4");

        function b(e) {
            let t, r, o, u, d, p, m, h, g = (0, a.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: v,
                    image: y,
                    imageAssetResolver: x,
                    imageNumber: w,
                    imageRef: j,
                    onOpen: _,
                    single: I,
                    presentation: k
                } = e,
                C = (0, s.a)(),
                [M, P] = (0, l.useState)(null),
                [A, S] = (0, l.useState)(null),
                T = null != y.previewSrc && y.previewSrc !== A ? y.previewSrc : y.src;
            g[0] !== b || g[1] !== x || g[2] !== T ? (t = {
                src: T,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = T, g[3] = t) : t = g[3];
            let {
                previewSrc: F
            } = (0, f.a)(t), N = null != v && (null == F || M !== F), z = I && "w-full", E = !I && ("dialog" === k ? "w-2/3" : "max-w-19/20");
            return g[4] !== z || g[5] !== E ? (r = (0, i.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", z, E), g[4] = z, g[5] = E, g[6] = r) : r = g[6], g[7] !== v || g[8] !== y.height || g[9] !== y.width || g[10] !== k || g[11] !== I ? (o = I || "dialog" === k ? void 0 : {
                aspectRatio: null == v ? `${y.width??1}/${y.height??1}` : "5/4"
            }, g[7] = v, g[8] = y.height, g[9] = y.width, g[10] = k, g[11] = I, g[12] = o) : o = g[12], g[13] !== w || g[14] !== C ? (u = C.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: w
            }), g[13] = w, g[14] = C, g[15] = u) : u = g[15], g[16] !== _ ? (d = e => _(e.currentTarget), g[16] = _, g[17] = d) : d = g[17], g[18] !== v || g[19] !== y.previewSrc || g[20] !== j || g[21] !== M || g[22] !== F || g[23] !== N ? (p = null == F ? (0, n.jsx)(c.a, {
                className: "h-full w-full"
            }) : (0, n.jsx)("img", {
                ref: N ? void 0 : j,
                className: (0, i.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == v && M !== F && "opacity-0"),
                src: F,
                alt: "",
                draggable: !1,
                loading: null == v ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => P(F),
                onError: () => S(y.previewSrc ?? null)
            }), g[18] = v, g[19] = y.previewSrc, g[20] = j, g[21] = M, g[22] = F, g[23] = N, g[24] = p) : p = g[24], g[25] !== v || g[26] !== j || g[27] !== N ? (m = N ? (0, n.jsx)("img", {
                ref: j,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: v,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = v, g[26] = j, g[27] = N, g[28] = m) : m = g[28], g[29] !== m || g[30] !== r || g[31] !== o || g[32] !== u || g[33] !== d || g[34] !== p ? (h = (0, n.jsxs)("button", {
                className: r,
                style: o,
                "aria-label": u,
                type: "button",
                onClick: d,
                children: [p, m]
            }), g[29] = m, g[30] = r, g[31] = o, g[32] = u, g[33] = d, g[34] = p, g[35] = h) : h = g[35], h
        }

        function v(e) {
            let t, r, i, l, o = (0, a.c)(16),
                {
                    conversationId: u,
                    image: d,
                    imageAssetResolver: c,
                    imageNumber: m,
                    onClose: h,
                    onCloseAutoFocus: g,
                    onNextImage: b,
                    onPreviousImage: v
                } = e,
                y = (0, s.a)();
            o[0] !== u || o[1] !== d.src || o[2] !== c ? (t = {
                src: d.src,
                conversationId: u,
                imageAssetResolver: c,
                shouldLoadFileDataUrl: !1
            }, o[0] = u, o[1] = d.src, o[2] = c, o[3] = t) : t = o[3];
            let {
                previewSrc: x
            } = (0, f.a)(t);
            return null == x ? null : (o[4] !== m || o[5] !== y ? (r = y.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: m
            }), o[4] = m, o[5] = y, o[6] = r) : r = o[6], o[7] !== h ? (i = e => {
                e || h()
            }, o[7] = h, o[8] = i) : i = o[8], o[9] !== g || o[10] !== b || o[11] !== v || o[12] !== x || o[13] !== r || o[14] !== i ? (l = (0, n.jsx)(p.a, {
                alt: r,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: i,
                onNextImage: b,
                onPreviousImage: v
            }), o[9] = g, o[10] = b, o[11] = v, o[12] = x, o[13] = r, o[14] = i, o[15] = l) : l = o[15], l)
        }

        function y(e, t) {
            let r = e.children.item(t);
            if (!(r instanceof HTMLElement)) return 0;
            let n = "rtl" === getComputedStyle(e).direction,
                a = e.scrollWidth - e.clientWidth,
                i = r.offsetLeft - (e.clientWidth - r.offsetWidth) / 2;
            return 0 === t ? i = 0 : t === e.children.length - 1 && (i = n ? r.offsetLeft : r.offsetLeft + r.offsetWidth - e.clientWidth), n ? Math.max(-a, Math.min(0, i)) : Math.max(0, Math.min(a, i))
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, f, p, x, w, j, _, I, k, C, M, P, A, S, T, F, N, z = (0, a.c)(56),
                    {
                        ref: E,
                        conversationId: q,
                        firstPhotoFallbackSrc: D,
                        imageAssetResolver: R,
                        images: L,
                        onOpenImage: O,
                        onArrowClick: G,
                        presentation: B
                    } = e,
                    W = void 0 === B ? "sidebar" : B,
                    Q = (0, s.a)(),
                    U = (0, l.useContext)(m.a),
                    K = (0, l.useRef)(null),
                    H = (0, l.useRef)(null),
                    V = (0, l.useRef)(null);
                z[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, z[0] = t) : t = z[0];
                let Z = (0, l.useRef)(t);
                z[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => ({
                    getThumbnail: e => Z.current.get(e) ?? null
                }), z[1] = r) : r = z[1], (0, l.useImperativeHandle)(E, r);
                let [$, J] = (0, l.useState)(0), [X, Y] = (0, l.useState)(null);
                z[2] !== X ? (c = e => e.id === X, z[2] = X, z[3] = c) : c = z[3];
                let ee = L.findIndex(c),
                    et = L[ee],
                    er = Math.min($, L.length - 1);
                z[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                    let t = K.current;
                    if (null == t) return;
                    let r = y(t, e);
                    H.current = 1 >= Math.abs(t.scrollLeft - r) ? null : r, t.scrollTo({
                        left: r
                    }), J(e)
                }, z[4] = f) : f = z[4];
                let en = f;
                z[5] !== L.length ? (p = e => {
                    let t = 0,
                        r = 1 / 0;
                    for (let n = 0; n < L.length; n += 1) {
                        let a = Math.abs(y(e, n) - e.scrollLeft);
                        a < r && (r = a, t = n)
                    }
                    J(t)
                }, z[5] = L.length, z[6] = p) : p = z[6];
                let ea = p,
                    ei = "sidebar" === W && "mb-5";
                z[7] !== ei ? (x = (0, i.b)("-mx-6", ei), z[7] = ei, z[8] = x) : x = z[8];
                let el = "dialog" === W ? "h-56 sm:h-64" : "aspect-5/4";
                z[9] !== el ? (w = (0, i.b)("group/photos relative overflow-hidden select-none", el), z[9] = el, z[10] = w) : w = z[10], z[11] !== Q ? (j = Q.formatMessage({
                    id: "chatgpt.imageGroup.photos",
                    defaultMessage: "Photos",
                    description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
                }), z[11] = Q, z[12] = j) : j = z[12], z[13] !== Q ? (_ = Q.formatMessage({
                    id: "chatgpt.imageGroup.carouselRole",
                    defaultMessage: "carousel",
                    description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
                }), z[13] = Q, z[14] = _) : _ = z[14], z[15] !== L.length || z[16] !== en || z[17] !== er ? (I = e => {
                    if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                        e.preventDefault(), e.stopPropagation();
                        let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                        en(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (er + 1) % L.length : Math.max(0, er - 1))
                    }
                }, z[15] = L.length, z[16] = en, z[17] = er, z[18] = I) : I = z[18], z[19] !== ea ? (k = e => {
                    let t = e.currentTarget,
                        r = H.current;
                    if (null != r) {
                        1 >= Math.abs(t.scrollLeft - r) && (H.current = null);
                        return
                    }
                    ea(t)
                }, C = e => {
                    H.current = null, ea(e.currentTarget)
                }, z[19] = ea, z[20] = k, z[21] = C) : (k = z[20], C = z[21]), z[22] === Symbol.for("react.memo_cache_sentinel") ? (M = () => {
                    H.current = null
                }, P = () => {
                    H.current = null
                }, z[22] = M, z[23] = P) : (M = z[22], P = z[23]);
                let es = L.map((e, t) => (0, n.jsx)(b, {
                    conversationId: q,
                    fallbackSrc: 0 === t ? D : void 0,
                    image: e,
                    imageAssetResolver: R,
                    imageNumber: t + 1,
                    imageRef: t => {
                        if (null != t) return Z.current.set(e.id, t), () => {
                            Z.current.get(e.id) === t && Z.current.delete(e.id)
                        }
                    },
                    single: 1 === L.length,
                    presentation: W,
                    onOpen: r => {
                        null != O ? O(t) : (V.current = r, Y(e.id))
                    }
                }, e.id));
                return z[24] !== k || z[25] !== C || z[26] !== M || z[27] !== P || z[28] !== es ? (A = (0, n.jsx)("div", {
                    ref: K,
                    className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                    onScroll: k,
                    onScrollEnd: C,
                    onPointerDown: M,
                    onWheel: P,
                    children: es
                }), z[24] = k, z[25] = C, z[26] = M, z[27] = P, z[28] = es, z[29] = A) : A = z[29], z[30] !== L.length || z[31] !== Q || z[32] !== G || z[33] !== en || z[34] !== er ? (S = L.length > 1 ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-has-[:focus-visible]/photos:opacity-100",
                        children: [(0, n.jsx)(o.a, {
                            className: (0, i.b)("group-hover/photos:pointer-events-auto group-has-[:focus-visible]/photos:pointer-events-auto", 0 === er && "invisible"),
                            "aria-label": Q.formatMessage({
                                id: "chatgpt.imageGroup.previousPhoto",
                                defaultMessage: "Previous photo",
                                description: "Accessible label for the previous photo button in a ChatGPT entity photo carousel"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = Math.max(0, er - 1);
                                e !== er && G?.("previous", e), en(e)
                            },
                            children: (0, n.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: h.a
                            })
                        }), (0, n.jsx)(o.a, {
                            className: "group-hover/photos:pointer-events-auto group-has-[:focus-visible]/photos:pointer-events-auto",
                            "aria-label": Q.formatMessage({
                                id: "chatgpt.imageGroup.nextPhoto",
                                defaultMessage: "Next photo",
                                description: "Accessible label for the next photo button in a ChatGPT entity photo carousel"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = (er + 1) % L.length;
                                e !== er && G?.("next", e), en(e)
                            },
                            children: (0, n.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: g.a
                            })
                        })]
                    }), L.length <= 20 ? (0, n.jsx)("div", {
                        className: "absolute inset-x-0 bottom-3 flex justify-center",
                        children: (0, n.jsx)(u.a, {
                            count: L.length,
                            activeIndex: er,
                            getPageLabel: e => Q.formatMessage({
                                id: "chatgpt.imageGroup.goToPhoto",
                                defaultMessage: "Go to photo {number}",
                                description: "Accessible label for a photo carousel position indicator; number is the one-based photo position"
                            }, {
                                number: e + 1
                            }),
                            onSelect: en
                        })
                    }) : null]
                }) : null, z[30] = L.length, z[31] = Q, z[32] = G, z[33] = en, z[34] = er, z[35] = S) : S = z[35], z[36] !== U || z[37] !== w || z[38] !== j || z[39] !== _ || z[40] !== I || z[41] !== A || z[42] !== S ? (T = (0, n.jsxs)("div", {
                    ref: U,
                    className: w,
                    "data-entity-photos": !0,
                    "aria-label": j,
                    "aria-roledescription": _,
                    role: "region",
                    onKeyDown: I,
                    children: [A, S]
                }), z[36] = U, z[37] = w, z[38] = j, z[39] = _, z[40] = I, z[41] = A, z[42] = S, z[43] = T) : T = z[43], z[44] !== q || z[45] !== R || z[46] !== L || z[47] !== V || z[48] !== et || z[49] !== ee || z[50] !== Y ? (F = null != et ? (0, n.jsx)(v, {
                    conversationId: q,
                    image: et,
                    imageAssetResolver: R,
                    imageNumber: ee + 1,
                    onClose: () => Y(null),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), V.current?.focus()
                    },
                    onPreviousImage: ee > 0 ? () => Y(L[ee - 1].id) : void 0,
                    onNextImage: ee < L.length - 1 ? () => Y(L[ee + 1].id) : void 0
                }) : null, z[44] = q, z[45] = R, z[46] = L, z[47] = V, z[48] = et, z[49] = ee, z[50] = Y, z[51] = F) : F = z[51], z[52] !== T || z[53] !== F || z[54] !== x ? (N = (0, n.jsxs)("div", {
                    className: x,
                    "data-testid": "chatgpt-image-group-carousel",
                    children: [T, F]
                }), z[52] = T, z[53] = F, z[54] = x, z[55] = N) : N = z[55], N
            }
        })
    }),
    NDDl: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("iTtm"),
            l = r("zd8w"),
            s = r("oyxz"),
            o = r("ygO2"),
            u = r("bf6R"),
            d = r("OWtl"),
            c = r("zHQF"),
            f = r("TUMj"),
            p = r("w7PD"),
            m = r("cGwJ");

        function h(e) {
            let t, r = (0, a.c)(2),
                {
                    nativeUnavailable: i
                } = e;
            return r[0] !== i ? (t = (0, n.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: i ? (0, n.jsx)(c.a, {}) : (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again.",
                    description: "Error after a business profile's chat button or suggested question could not open a new conversation. The user can click the action again."
                })
            }), r[0] = i, r[1] = t) : t = r[1], t
        }

        function g(e) {
            let t, r, l = (0, a.c)(5),
                {
                    conversationId: s,
                    data: o
                } = e,
                u = (0, i.x)(p.b, s);
            if (null == u) return null;
            l[0] !== o ? (t = p.a.safeParse(o).data?.items, l[0] = o, l[1] = t) : t = l[1];
            let d = t;
            return l[2] !== u || l[3] !== d ? (r = d ? (0, n.jsx)(b, {
                chat: u,
                items: d,
                onSelect: u.open
            }) : null, l[2] = u, l[3] = d, l[4] = r) : r = l[4], r
        }

        function b(e) {
            let t, r, i, l = (0, a.c)(13),
                {
                    chat: s,
                    items: d,
                    onSelect: c
                } = e;
            if (l[0] !== s || l[1] !== d || l[2] !== c) {
                let e;
                l[4] !== s || l[5] !== c ? (e = e => (0, n.jsxs)(o.a, {
                    allowShrink: !0,
                    color: "conversationPill",
                    size: "suggestedQuestion",
                    disabled: null != s.pendingId,
                    loading: s.pendingId === e.id,
                    onClick: () => c(e),
                    children: [s.pendingId !== e.id ? (0, n.jsx)(u.Gb, {
                        "aria-hidden": !0
                    }) : null, (0, n.jsx)("span", {
                        className: "min-w-0 text-start break-words whitespace-normal",
                        children: e.label
                    })]
                }, e.id), l[4] = s, l[5] = c, l[6] = e) : e = l[6], t = d.map(e), l[0] = s, l[1] = d, l[2] = c, l[3] = t
            } else t = l[3];
            return l[7] !== s || l[8] !== d ? (r = d.some(e => {
                let {
                    id: t
                } = e;
                return t === s.failedId
            }) ? (0, n.jsx)(h, {
                nativeUnavailable: s.nativeUnavailable
            }) : null, l[7] = s, l[8] = d, l[9] = r) : r = l[9], l[10] !== t || l[11] !== r ? (i = (0, n.jsxs)("div", {
                className: "flex flex-col items-start gap-2.5 pb-4",
                children: [t, r]
            }), l[10] = t, l[11] = r, l[12] = i) : i = l[12], i
        }

        function v(e, t) {
            return {
                id: `profile-starter-${t}`,
                label: e,
                prefill: e
            }
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, s, o = (0, a.c)(7),
                    {
                        conversationId: u,
                        actions: c,
                        children: f
                    } = e,
                    m = (0, i.y)(d.a);
                return o[0] !== c || o[1] !== u || o[2] !== m ? (t = () => {
                    let e = m.watch(e => {
                        let {
                            get: t
                        } = e;
                        t(p.b, u)
                    });
                    return m.set(p.b, u, c), () => {
                        m.get(p.b, u) === c && m.set(p.b, u, null), e()
                    }
                }, r = [m, u, c], o[0] = c, o[1] = u, o[2] = m, o[3] = t, o[4] = r) : (t = o[3], r = o[4]), (0, l.useLayoutEffect)(t, r), o[5] !== f ? (s = (0, n.jsx)(n.Fragment, {
                    children: f
                }), o[5] = f, o[6] = s) : s = o[6], s
            },
            b: function(e) {
                let t, r, l, u, d, c = (0, a.c)(15),
                    {
                        conversationId: f
                    } = e,
                    m = (0, i.x)(p.b, f);
                if (m?.startChat == null) return null;
                let g = m.startChat,
                    b = null != m.pendingId,
                    v = m.pendingId === g.id;
                return c[0] !== g || c[1] !== m ? (t = () => m.open(g, "start-chat"), c[0] = g, c[1] = m, c[2] = t) : t = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.startChat",
                    defaultMessage: "Start chat",
                    description: "Button in a business profile header that opens a new conversation with that business’s AI agent."
                }), c[3] = r) : r = c[3], c[4] !== b || c[5] !== v || c[6] !== t ? (l = (0, n.jsx)(o.a, {
                    color: "primary",
                    size: "businessProfileAction",
                    disabled: b,
                    loading: v,
                    onClick: t,
                    children: r
                }), c[4] = b, c[5] = v, c[6] = t, c[7] = l) : l = c[7], c[8] !== g.id || c[9] !== m.failedId || c[10] !== m.nativeUnavailable ? (u = m.failedId === g.id ? (0, n.jsx)(h, {
                    nativeUnavailable: m.nativeUnavailable
                }) : null, c[8] = g.id, c[9] = m.failedId, c[10] = m.nativeUnavailable, c[11] = u) : u = c[11], c[12] !== l || c[13] !== u ? (d = (0, n.jsxs)(n.Fragment, {
                    children: [l, u]
                }), c[12] = l, c[13] = u, c[14] = d) : d = c[14], d
            },
            c: function(e) {
                let t, r = (0, a.c)(5),
                    {
                        conversationId: l,
                        after: s
                    } = e,
                    o = void 0 === s ? "transcript" : s,
                    u = (0, i.x)(p.b, l),
                    d = u?.suggestedQuestions,
                    c = (0, i.x)(d?.length ? m.a : null, l);
                return r[0] !== o || r[1] !== u || r[2] !== c || r[3] !== d ? (t = u && d?.length && c === o ? (0, n.jsx)(b, {
                    chat: u,
                    items: d.map(v),
                    onSelect: e => u.open(e, "suggestion")
                }) : null, r[0] = o, r[1] = u, r[2] = c, r[3] = d, r[4] = t) : t = r[4], t
            },
            d: function(e) {
                let t, r = (0, a.c)(3),
                    {
                        data: i
                    } = e,
                    l = (0, f.d)();
                return r[0] !== i || r[1] !== l ? (t = l?.conversationType === "sidebar" ? (0, n.jsx)(g, {
                    conversationId: l.conversationId,
                    data: i
                }) : null, r[0] = i, r[1] = l, r[2] = t) : t = r[2], t
            }
        })
    }),
    w7PD: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("ASxG"),
            i = r("OWtl");
        let l = a.object({
                items: a.array(a.object({
                    id: a.string().trim().min(1),
                    label: a.string().trim().min(1),
                    prefill: a.string().nullish()
                })).min(1)
            }),
            s = (0, n.v)(i.a, e => null, void 0, {
                autoDispose: !0
            });
        r.d(t, {}, {
            a: l,
            b: s
        })
    }),
    FQiC: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("zd8w"),
            i = r("Cslg"),
            l = r("OWtl"),
            s = r("tZ3A"),
            o = r("orgn");
        let u = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(s.c, e)?.businessProfile, a = r(o.a, e);
                return {
                    conversationId: e,
                    accountId: r(i.f),
                    userId: r(i.j),
                    profileId: a?.profileId ?? null,
                    identity: JSON.stringify([a?.profileId, a?.source, a?.source === "entity-knowledge" ? null : n ?? null])
                }
            }),
            d = (0, n.j)(l.a, (e, t) => {
                let {
                    signal: r
                } = t;
                return {
                    isOpen$: r(!1),
                    triggerRef: (0, a.createRef)()
                }
            }, {
                autoDispose: !0
            });
        r.d(t, {}, {
            a: d,
            b: u
        })
    }),
    orgn: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("iTtm"),
            i = r("xnQm"),
            l = r("Cslg"),
            s = r("OWtl"),
            o = r("OMIV"),
            u = r("tZ3A"),
            d = r("Kwur");
        let c = (0, a.q)(s.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(u.c, e), s = a?.entityKnowledgeId, c = r(l.f), f = r(l.j), p = null != s && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != c && null != f && r(o.d, "2789236610");
                return {
                    queryKey: ["entity-business-profile", c, f, e, "entity-knowledge", s],
                    enabled: p,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: p ? async e => {
                        let {
                            signal: t
                        } = e, r = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [i._b]: c
                            },
                            requestBody: {
                                provider: "entity-knowledge",
                                provider_business_id: s
                            },
                            signal: t,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        });
                        return t.throwIfAborted(), null == r.business_profile_id ? null : {
                            profileId: r.business_profile_id,
                            source: "entity-knowledge",
                            status: r
                        }
                    } : n.u
                }
            }),
            f = (0, a.q)(s.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(u.c, e), s = a?.businessProfile, f = r(l.f), p = r(l.j), m = null != s && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != f && null != p && r(o.d, "2789236610");
                if (m && a?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: n,
                        isPending: a
                    } = r(c, e);
                    m = n && !a && null == t
                }
                return {
                    queryKey: ["entity-business-profile", f, p, e, "canonical-business-profile", s?.canonical_id, s?.profile_id],
                    enabled: m,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: m && null != s && null != f ? async e => {
                        let {
                            signal: t
                        } = e, r = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [i._b]: f
                            },
                            requestBody: {
                                provider: "canonical-business-profile",
                                provider_business_id: s.canonical_id
                            },
                            signal: t,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        });
                        return t.throwIfAborted(), {
                            profileId: s.profile_id,
                            source: "canonical",
                            status: r
                        }
                    } : n.u
                }
            }),
            p = (0, a.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(u.c, e);
                if (n?.businessProfile == null && n?.entityKnowledgeId == null || n?.entityKnowledgePending || !["business", "brand", "company", "organization"].includes(n?.category ?? "") || !r(o.d, "2789236610")) return null;
                if (n?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: n,
                        isPending: a
                    } = r(c, e);
                    if (!n || a) return null;
                    if (null != t) return t
                }
                let {
                    data: a,
                    isEnabled: i
                } = r(f, e);
                return i ? a ?? null : null
            }),
            m = (0, a.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(p, e)?.status ?? null
            });
        r.d(t, {}, {
            a: p,
            b: m
        })
    }),
    cGwJ: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("rKAs"),
            i = r("IgxH"),
            l = r("OWtl"),
            s = r("CTBG"),
            o = r("zvAa"),
            u = r("dQRk"),
            d = r("w7PD");

        function c(e, t) {
            return `${e}:${t}`
        }
        let f = (0, n.d)(l.a, (e, t) => {
            let r, {
                get: n
            } = t;
            if ("idle" !== n(u._, e)) return null;
            let l = n(s.a, e),
                f = n(u.M, e),
                p = !1;
            for (let e of l ?? []) {
                let t;
                if (!e.id || f[e.id]?.blocked) continue;
                let n = (0, o.d)(e);
                if (!n.markdown) continue;
                let l = "finished_successfully" === e.status;
                for (let e of n.contentReferences)
                    if (!(0, a.H)(e)) {
                        if ("client_defined_widget" === e.type && "business_profile_starter_pills" === e.category && d.a.safeParse(e.data).success) return null;
                        l && null == r && ("product_group" === e.type || "products" === e.type) && "number" == typeof e.start_idx && (null == t || e.start_idx < t) && (0, a.y)(e).length > 0 && (t = e.start_idx)
                    } null != t && (r = c(e.id, t)), !l || r || p || (p = (0, i.a)(n.markdown).length > 0)
            }
            return r ?? (p ? "transcript" : null)
        });
        r.d(t, {}, {
            a: f,
            b: c
        })
    }),
    SZ0w: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("v1r0"),
            l = r("iTtm"),
            s = r("zd8w"),
            o = r("Wf1j"),
            u = r("oyxz"),
            d = r("bfX9"),
            c = r("bqtn"),
            f = r("HOLv"),
            p = r("E6P3"),
            m = r("zSQm"),
            h = r("WAdu"),
            g = r("OWtl"),
            b = r("tZ3A"),
            v = r("KDax"),
            y = r("NDDl"),
            x = r("FQiC"),
            w = r("orgn"),
            j = r("T2J5"),
            _ = r("Csob"),
            I = r("zymm"),
            k = r("r7vP"),
            C = r("u9gC");

        function M() {
            let e, t, r = (0, a.c)(4),
                i = (0, o.a)();
            return r[0] !== i ? (e = i.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), r[0] = i, r[1] = e) : e = r[1], r[2] !== e ? (t = (0, n.jsx)(j.a, {
                className: "ms-1.5",
                label: e,
                showTooltip: !0,
                size: 24
            }), r[2] = e, r[3] = t) : t = r[3], t
        }

        function P(e) {
            let t, r, i, l, s = (0, a.c)(14),
                {
                    conversationId: o,
                    requiresConfirmation: c,
                    status: f,
                    websiteUrl: p,
                    children: h
                } = e;
            if (s[0] !== p) {
                let e = (0, m.a)(p?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? e : null, s[0] = p, s[1] = t
            } else t = s[1];
            let g = t,
                b = f?.chat_target != null && f.header?.start_chat != null;
            return s[2] !== o || s[3] !== b || s[4] !== c || s[5] !== g ? (r = b || null != g ? (0, n.jsxs)("div", {
                className: "-ms-1 mt-4 mb-5 flex flex-wrap items-center gap-2 empty:hidden",
                children: [b ? (0, n.jsx)(y.b, {
                    conversationId: o
                }) : null, null != g ? (0, n.jsx)(v.a, {
                    className: "flex min-h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-default bg-transparent px-5 text-entity-action whitespace-nowrap text-default select-none no-drag only:border-transparent only:bg-primary-solid only:text-primary-solid hover:bg-primary-ghost-hover only:hover:bg-primary-solid-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: g,
                    initiator: "markdown_link_click",
                    requiresConfirmation: c,
                    appearance: "button",
                    underline: "none",
                    openAsWebsite: !0,
                    children: (0, n.jsx)(u.a, {
                        id: "chatgpt.entity.businessProfile.viewWebsite",
                        defaultMessage: "View website",
                        description: "Button beneath a business name in the entity sidebar that opens the website supplied by its business profile. Use a short action label; no placeholders."
                    })
                }) : null]
            }) : null, s[2] = o, s[3] = b, s[4] = c, s[5] = g, s[6] = r) : r = s[6], s[7] !== o || s[8] !== f ? (i = (0, d.a)(f) ? (0, n.jsx)("div", {
                className: "border-t border-default",
                children: (0, n.jsx)(A, {
                    conversationId: o,
                    status: f
                })
            }) : null, s[7] = o, s[8] = f, s[9] = i) : i = s[9], s[10] !== h || s[11] !== r || s[12] !== i ? (l = (0, n.jsxs)(n.Fragment, {
                children: [r, h, i]
            }), s[10] = h, s[11] = r, s[12] = i, s[13] = l) : l = s[13], l
        }

        function A(e) {
            let t, r, i = (0, a.c)(6),
                {
                    conversationId: s,
                    status: o
                } = e,
                u = (0, l.y)(g.a);
            i[0] !== s || i[1] !== u ? (t = () => {
                if (!(0, d.a)(u.get(w.b, s))) return;
                let e = u.get(x.a, u.get(x.b, s));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, u.set(e.isOpen$, !0)
            }, i[0] = s, i[1] = u, i[2] = t) : t = i[2];
            let c = o?.ownership?.current_request;
            return i[3] !== t || i[4] !== c ? (r = (0, n.jsx)(_.a, {
                onClick: t,
                request: c
            }), i[3] = t, i[4] = c, i[5] = r) : r = i[5], r
        }

        function S(e) {
            return e.trim().length > 0
        }

        function T(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, i, s = (0, a.c)(6),
                    {
                        conversationId: o
                    } = e,
                    f = (0, l.y)(g.a),
                    p = (0, l.x)(w.b, o);
                return (0, d.a)(p, "dispute") ? (s[0] !== o || s[1] !== f ? (t = () => {
                    if (!(0, d.a)(f.get(w.b, o), "dispute")) return;
                    let e = f.get(x.a, f.get(x.b, o));
                    e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
                }, s[0] = o, s[1] = f, s[2] = t) : t = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(u.a, {
                    id: "chatgpt.localBusiness.dispute.action",
                    defaultMessage: "Dispute profile ownership",
                    description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
                }), s[3] = r) : r = s[3], s[4] !== t ? (i = (0, n.jsx)(c.c.Item, {
                    leftIconAsset: C.a,
                    onSelect: t,
                    children: r
                }), s[4] = t, s[5] = i) : i = s[5], i) : null
            },
            b: function(e) {
                let t, r = (0, a.c)(4),
                    {
                        conversationId: i
                    } = e,
                    s = (0, l.x)(w.a, i),
                    o = (0, l.x)(b.c, i);
                if (s?.source !== "entity-knowledge" || o?.businessProfile != null) return null;
                let u = o?.shouldBlockExternalEgress;
                return r[0] !== i || r[1] !== s.status || r[2] !== u ? (t = (0, n.jsx)(P, {
                    conversationId: i,
                    requiresConfirmation: u,
                    status: s.status
                }), r[0] = i, r[1] = s.status, r[2] = u, r[3] = t) : t = r[3], t
            },
            c: function(e) {
                let t, r, d, c, g, v, y, x, j, C = (0, a.c)(29),
                    {
                        conversationId: A,
                        profile: F,
                        name: N
                    } = e,
                    z = (0, o.a)(),
                    E = (0, l.x)(w.b, A),
                    q = (0, l.x)(b.c, A),
                    D = (0, l.x)(w.a, A),
                    R = D?.source === "entity-knowledge" && D.profileId !== F.profile_id ? null : F;
                C[0] !== R?.categories ? (t = R?.categories.find(S), C[0] = R?.categories, C[1] = t) : t = C[1];
                let L = t,
                    O = T(R?.delivery_policy, i.b),
                    G = R?.returns_policy;
                C[2] !== G ? (r = T(G, i.d), C[2] = G, C[3] = r) : r = C[3];
                let B = r,
                    W = (0, s.useContext)(h.a);
                C[4] !== W || C[5] !== q?.shouldBlockExternalEgress || C[6] !== R ? (d = "restricted" !== W && !q?.shouldBlockExternalEgress && R?.logo_url ? (0, m.b)(R.logo_url) : void 0, C[4] = W, C[5] = q?.shouldBlockExternalEgress, C[6] = R, C[7] = d) : d = C[7];
                let Q = d;
                C[8] !== Q ? (c = Q ? (0, n.jsx)(p.a, {
                    className: "mb-3 size-18 rounded-2xl border-4 border-surface bg-surface",
                    alt: "",
                    src: Q,
                    fallback: (0, n.jsx)(n.Fragment, {})
                }, Q) : null, C[8] = Q, C[9] = c) : c = C[9];
                let U = R?.display_name ?? N ?? q?.query;
                C[10] !== E?.is_verified ? (g = E?.is_verified ? (0, n.jsx)(M, {}) : null, C[10] = E?.is_verified, C[11] = g) : g = C[11], C[12] !== U || C[13] !== g ? (v = (0, n.jsxs)("h2", {
                    className: "text-card-title break-words",
                    children: [U, g]
                }), C[12] = U, C[13] = g, C[14] = v) : v = C[14], C[15] !== L ? (y = L ? (0, n.jsx)("div", {
                    className: "text-lg leading-6 font-normal break-words text-default",
                    children: L
                }) : null, C[15] = L, C[16] = y) : y = C[16];
                let K = q?.shouldBlockExternalEgress,
                    H = R?.website_url,
                    V = null == O && null == B ? null : (0, n.jsxs)("div", {
                        className: "divide-y divide-border border-t border-default",
                        children: [null != O ? (0, n.jsxs)(_.f, {
                            icon: (0, n.jsx)(f.a, {
                                asset: k.a
                            }),
                            children: ["none" === O.delivery ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.noDelivery",
                                defaultMessage: "Delivery unavailable",
                                description: "Merchant policy in the business sidebar when delivery is not offered"
                            }) : null, "paid" === O.delivery ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.paidDelivery",
                                defaultMessage: "Paid delivery",
                                description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                            }) : null, "free" === O.delivery && "all_orders" === O.scope ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.freeDelivery",
                                defaultMessage: "Free delivery on all orders",
                                description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                            }) : null, "free" === O.delivery && "minimum_order" === O.scope ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.deliveryMinimum",
                                defaultMessage: "Free delivery over {amount}",
                                description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                                values: {
                                    amount: z.formatNumber(Number(O.minimum_order_amount), {
                                        style: "currency",
                                        currency: O.currency,
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 20
                                    })
                                }
                            }) : null]
                        }) : null, null != B ? (0, n.jsxs)(_.f, {
                            icon: (0, n.jsx)(f.a, {
                                asset: I.a
                            }),
                            children: ["none" === B.returns ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.noReturns",
                                defaultMessage: "Returns not accepted",
                                description: "Merchant policy in the business sidebar when returns are not accepted"
                            }) : null, "none" !== B.returns && "window" in B ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.unlimitedReturns",
                                defaultMessage: "{kind, select, free {Free returns with no time limit} other {Returns with no time limit, fees apply}}",
                                description: "Return policy summary for customers in the business sidebar. Returns have no time limit. The kind value is free when no return fees apply, or fees otherwise.",
                                values: {
                                    kind: B.returns
                                }
                            }) : null, "none" !== B.returns && "window_days" in B ? (0, n.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.returnWindow",
                                defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}}} other {Returns within {days, plural, one {# day} other {# days}}, fees apply}}",
                                description: "Merchant policy in the business sidebar showing the return window from delivery and whether return fees apply",
                                values: {
                                    kind: B.returns,
                                    days: B.window_days
                                }
                            }) : null]
                        }) : null]
                    });
                return C[17] !== P || C[18] !== A || C[19] !== E || C[20] !== K || C[21] !== H || C[22] !== V ? (x = (0, n.jsx)(P, {
                    conversationId: A,
                    requiresConfirmation: K,
                    status: E,
                    websiteUrl: H,
                    children: V
                }), C[17] = P, C[18] = A, C[19] = E, C[20] = K, C[21] = H, C[22] = V, C[23] = x) : x = C[23], C[24] !== x || C[25] !== c || C[26] !== v || C[27] !== y ? (j = (0, n.jsxs)(n.Fragment, {
                    children: [c, v, y, x]
                }), C[24] = x, C[25] = c, C[26] = v, C[27] = y, C[28] = j) : j = C[28], j
            }
        })
    }),
    wFiG: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("EA6X"),
            l = r("iTtm"),
            s = r("xnQm"),
            o = r("zd8w"),
            u = r("DcH0"),
            d = r("WAdu"),
            c = r("OWtl"),
            f = r("tZ3A"),
            p = r("niC2"),
            m = r("TUMj"),
            h = r("rxj0"),
            g = r("xof2"),
            b = r("SZ0w"),
            v = r("Csob"),
            y = r("FRPb"),
            x = r("LQio"),
            w = r("H0jo");

        function j(e) {
            let t, r, s, u, p = (0, a.c)(21),
                {
                    conversationId: x,
                    isTranscriptPending: w,
                    turnContext: j,
                    showClaimedBusinessTooltip: _
                } = e,
                I = void 0 !== w && w,
                k = void 0 !== _ && _,
                C = (0, l.y)(c.a),
                M = (0, o.useContext)(d.a),
                P = (0, l.x)(h.d, x),
                A = (0, l.x)(y.b, x),
                S = (0, l.x)(y.d, x),
                T = I ? A?.business : S,
                F = (0, l.x)(f.c, x),
                N = (0, l.x)(f.e, x),
                z = (0, l.x)(y.c, x),
                E = I ? N : z;
            if (null == T && null == E) {
                if (F?.extraParams?.resolve_basemap_place === !0 && null == F.businessPreview) {
                    let e;
                    return p[0] !== F.query ? (e = (0, n.jsx)("h2", {
                        className: "mb-1 text-[22px] leading-7 font-medium break-words",
                        children: F.query
                    }), p[0] = F.query, p[1] = e) : e = p[1], e
                }
                return null
            }
            let q = P ? "restricted" : M,
                D = j ?? null;
            return p[2] !== x || p[3] !== F?.query || p[4] !== E ? (t = null != E && (0, n.jsx)(b.c, {
                conversationId: x,
                profile: E,
                name: F?.query
            }), p[2] = x, p[3] = F?.query, p[4] = E, p[5] = t) : t = p[5], p[6] !== T || p[7] !== A?.category || p[8] !== A?.messageId || p[9] !== A?.sourceConversationId || p[10] !== E || p[11] !== C || p[12] !== k ? (r = null == E && null != T && (0, n.jsx)(v.ChatGptLocalBusinessMetadata, {
                business: T,
                isOptimistic: !0,
                showClaimedBusinessTooltip: k,
                onAction: e => {
                    (0, g.b)(C, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: T.id.trim() || void 0,
                        entityCategory: A?.category ?? void 0,
                        messageId: A?.messageId,
                        assistantMessageId: A?.messageId,
                        conversationId: A?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), p[6] = T, p[7] = A?.category, p[8] = A?.messageId, p[9] = A?.sourceConversationId, p[10] = E, p[11] = C, p[12] = k, p[13] = r) : r = p[13], p[14] !== D || p[15] !== t || p[16] !== r ? (s = (0, n.jsxs)(m.b, {
                value: D,
                children: [t, r]
            }), p[14] = D, p[15] = t, p[16] = r, p[17] = s) : s = p[17], p[18] !== q || p[19] !== s ? (u = (0, n.jsx)(d.a, {
                value: q,
                children: s
            }), p[18] = q, p[19] = s, p[20] = u) : u = p[20], u
        }
        r.d(t, {}, {
            a: j,
            b: function(e) {
                let t, r, i = (0, a.c)(18),
                    {
                        conversationId: c,
                        isTranscriptPending: f,
                        turnContext: m,
                        showClaimedBusinessTooltip: h
                    } = e,
                    g = void 0 !== f && f,
                    b = void 0 !== h && h,
                    v = (0, o.useContext)(d.a),
                    y = (0, l.x)(w.e, c),
                    _ = (0, l.x)(w.b, c),
                    I = (0, l.x)(w.d, c),
                    k = (0, o.useContext)(x.a);
                if (_ && !g) return null;
                let C = null;
                if (null != y && "restricted" !== v) {
                    let e, t, r, a = `chatgpt:${c}`;
                    i[0] !== a ? (e = (0, s.Oe)(a), i[0] = a, i[1] = e) : e = i[1], i[2] !== y ? (t = [y], i[2] = y, i[3] = t) : t = i[3], i[4] !== e || i[5] !== t ? (r = (0, n.jsx)(p.a, {
                        conversationId: e,
                        images: t
                    }), i[4] = e, i[5] = t, i[6] = r) : r = i[6], C = r
                } else if (I || g && _) {
                    let e, t;
                    i[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                        className: "aspect-5/4",
                        "aria-hidden": "true",
                        variant: "prominent"
                    }), i[7] = e) : e = i[7], i[8] !== k ? (t = (0, n.jsx)("div", {
                        className: "-mx-6 mb-5",
                        children: (0, n.jsx)("div", {
                            ref: k,
                            "data-entity-photos": !0,
                            children: e
                        })
                    }), i[8] = k, i[9] = t) : t = i[9], C = t
                }
                return i[10] !== c || i[11] !== g || i[12] !== b || i[13] !== m ? (t = (0, n.jsx)(j, {
                    conversationId: c,
                    isTranscriptPending: g,
                    turnContext: m,
                    showClaimedBusinessTooltip: b
                }), i[10] = c, i[11] = g, i[12] = b, i[13] = m, i[14] = t) : t = i[14], i[15] !== C || i[16] !== t ? (r = (0, n.jsxs)(n.Fragment, {
                    children: [C, t]
                }), i[15] = C, i[16] = t, i[17] = r) : r = i[17], r
            }
        })
    }),
    LQio: (function(e, t, r) {
        let n = (0, r("zd8w").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    H0jo: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("rKAs"),
            i = r("SqqO"),
            l = r("OWtl"),
            s = r("fzVa"),
            o = r("zvAa"),
            u = r("tZ3A"),
            d = r("dQRk"),
            c = r("rxj0"),
            f = r("TJEh"),
            p = r("FRPb");
        let m = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != e && r(u.a, e) && null == r(p.b, e) && r(u.c, e)?.businessProfile == null && r(u.c, e)?.extraParams?.resolve_basemap_place !== !0 ? r(d.cb, e) : null
            }),
            h = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(p.b, e), l = r(d.L, e);
                return null != l && Object.values(l).some(t => null != t.message && (0, o.c)(t.message).some((t, l) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (r(u.a, e) || (0, f.i)(n?.category ?? null))) && (!r(c.d, e) || (0, a.u)(t, l).some(e => !(0, i.d)(e.src)))))
            }),
            g = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(p.b, e);
                if (r(c.d, e)) return null;
                let a = r(u.b, e),
                    i = null == n ? null : (0, f.f)(n.business),
                    l = a ?? (null == i ? null : {
                        id: i,
                        src: i,
                        status: "completed",
                        type: "generated-image"
                    });
                if (null == l) return null;
                let o = r(s.b).data?.age_status;
                return "over_18" === o || "unsure" === o ? l : null
            }),
            b = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                return (r(u.a, e) || null != r(p.b, e)) && (0, d.zb)(r(d._, e)) && !r(h, e) && null == r(g, e)
            }),
            v = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(h, e) || null != r(g, e) || r(b, e)
            });
        r.d(t, {}, {
            a: v,
            b: h,
            c: m,
            d: b,
            e: g
        })
    }),
    vxGj: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57");
        r.d(t, {}, {
            a: function(e) {
                let t, r = (0, a.c)(9),
                    {
                        count: l,
                        activeIndex: s,
                        getPageLabel: o,
                        onSelect: u
                    } = e;
                if (r[0] !== s || r[1] !== l || r[2] !== o || r[3] !== u) {
                    let e;
                    r[5] !== s || r[6] !== o || r[7] !== u ? (e = (e, t) => (0, n.jsx)("button", {
                        className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                        type: "button",
                        "aria-current": t === s ? "true" : void 0,
                        "aria-label": o(t),
                        onClick: () => u(t),
                        children: (0, n.jsx)("span", {
                            className: (0, i.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === s ? "w-3 opacity-100" : "w-1 opacity-40")
                        })
                    }, t), r[5] = s, r[6] = o, r[7] = u, r[8] = e) : e = r[8], t = (0, n.jsx)("div", {
                        className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                        children: Array.from({
                            length: l
                        }, e)
                    }), r[0] = s, r[1] = l, r[2] = o, r[3] = u, r[4] = t
                } else t = r[4];
                return t
            }
        })
    }),
    nUGc: (function(e, t, r) {
        let n = (0, r("zd8w").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    Yq7Q: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57"),
            l = r("ygO2");

        function s(e) {
            e.currentTarget.blur()
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, u, d, c, f, p, m, h, g, b, v, y, x = (0, a.c)(30);
                x[0] !== e ? ({
                    appearance: u,
                    controlSize: d,
                    children: t,
                    className: r,
                    iconOnly: c,
                    ...o
                } = e, x[0] = e, x[1] = t, x[2] = r, x[3] = o, x[4] = u, x[5] = d, x[6] = c) : (t = x[1], r = x[2], o = x[3], u = x[4], d = x[5], c = x[6]);
                let w = void 0 === d ? "default" : d,
                    j = void 0 !== c && c,
                    _ = "blurred" === (void 0 === u ? "compact" : u);
                if (x[7] !== r || x[8] !== w || x[9] !== j || x[10] !== _ || x[11] !== o) {
                    let e = (0, i.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                    _ && j ? e = (0, i.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === w ? "size-9" : "size-10") : _ && (e = (0, i.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === w ? "h-9" : "h-10")), f = l.a, p = o, m = "secondary", h = _ ? "full" : "default", g = _ ? "default" : "icon", b = (0, i.b)(e, r), x[7] = r, x[8] = w, x[9] = j, x[10] = _, x[11] = o, x[12] = f, x[13] = p, x[14] = m, x[15] = h, x[16] = g, x[17] = b
                } else f = x[12], p = x[13], m = x[14], h = x[15], g = x[16], b = x[17];
                return x[18] !== t || x[19] !== j || x[20] !== _ ? (v = _ && j ? (0, n.jsx)("span", {
                    className: "flex size-9 items-center justify-center rounded-full bg-media-background/45 backdrop-blur-md group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60",
                    children: t
                }) : t, x[18] = t, x[19] = j, x[20] = _, x[21] = v) : v = x[21], x[22] !== f || x[23] !== p || x[24] !== m || x[25] !== h || x[26] !== g || x[27] !== b || x[28] !== v ? (y = (0, n.jsx)(f, {
                    ...p,
                    color: m,
                    radius: h,
                    size: g,
                    className: b,
                    onPointerUp: s,
                    children: v
                }), x[22] = f, x[23] = p, x[24] = m, x[25] = h, x[26] = g, x[27] = b, x[28] = v, x[29] = y) : y = x[29], y
            }
        })
    }),
    SUhA: (function(e, t, r) {
        var n = r("QosV"),
            a = r("irkb"),
            i = r("iTtm"),
            l = r("zd8w"),
            s = r("tl5a"),
            o = r("CBsD"),
            u = r("kfGJ"),
            d = r("gTKF"),
            c = r("zHp1");
        r.d(t, {}, {
            a: function(e) {
                let t, r, f, p, m, h, g, b, v = (0, n.c)(38),
                    {
                        src: y,
                        conversationId: x,
                        hostId: w,
                        imageAssetResolver: j,
                        shouldLoadFileDataUrl: _
                    } = e,
                    I = (0, a.c)(),
                    k = (0, i.x)(s.E, x),
                    C = w ?? k ?? u.a,
                    M = (0, u.c)(C);
                v[0] !== x ? (t = null == x ? null : {
                    kind: "app-server",
                    conversationId: x
                }, v[0] = x, v[1] = t) : t = v[1];
                let P = (0, i.x)(d.threadExecutorTargetByThread$, t),
                    A = P?.hostId === C ? P.environmentId : void 0,
                    [S, T] = (0, l.useState)(null);
                v[2] !== y ? (r = y.trim(), v[2] = y, v[3] = r) : r = v[3];
                let F = r.length > 0,
                    N = F && (0, c.h)(y) ? y : "",
                    {
                        dataUrl: z,
                        src: E,
                        isLoading: q,
                        isError: D,
                        loadSource: R,
                        loadTiming: L,
                        imageCacheHit: O,
                        isShowingCachedImage: G,
                        imageCheck: B,
                        refetch: W,
                        deleted: Q
                    } = (0, c.k)(N, j);
                v[4] !== F || v[5] !== M.id || v[6] !== M.kind || v[7] !== C || v[8] !== y ? (f = F ? (0, o.b)(y) : null, "local" === M.kind && M.id, p = null, v[4] = F, v[5] = M.id, v[6] = M.kind, v[7] = C, v[8] = y, v[9] = f, v[10] = p) : (f = v[9], p = v[10]);
                let U = p,
                    K = S?.src === y && S.environmentId === A ? S : null,
                    H = K?.dataUrl ?? null,
                    V = F ? E ?? U ?? (null != f || N ? H : y) : null;
                v[11] !== f || v[12] !== x || v[13] !== U || v[14] !== A || v[15] !== C || v[16] !== I || v[17] !== _ || v[18] !== y ? (m = () => {
                    if (null == f || null != U && !_) return;
                    let e = !1;
                    return T({
                        src: y,
                        dataUrl: null,
                        environmentId: A,
                        isLoading: !0
                    }), (0, o.e)(f, C, I, void 0, x, A).then(t => {
                        e || T({
                            src: y,
                            dataUrl: t,
                            environmentId: A,
                            isLoading: !1
                        })
                    }), () => {
                        e = !0
                    }
                }, h = [f, x, U, A, C, I, _, y], v[11] = f, v[12] = x, v[13] = U, v[14] = A, v[15] = C, v[16] = I, v[17] = _, v[18] = y, v[19] = m, v[20] = h) : (m = v[19], h = v[20]), (0, l.useEffect)(m, h), v[21] !== z || v[22] !== H || v[23] !== y ? (g = z ?? H ?? (y.startsWith("data:image/") ? y : null), v[21] = z, v[22] = H, v[23] = y, v[24] = g) : g = v[24];
                let Z = z ?? H ?? V,
                    $ = q || null != f && null == U && (null == K || K.isLoading),
                    J = !!N && D;
                return v[25] !== Q || v[26] !== O || v[27] !== B || v[28] !== G || v[29] !== R || v[30] !== L || v[31] !== V || v[32] !== W || v[33] !== g || v[34] !== Z || v[35] !== $ || v[36] !== J ? (b = {
                    dataUrl: g,
                    previewSrc: V,
                    downloadSrc: Z,
                    isLoading: $,
                    isError: J,
                    loadSource: R,
                    loadTiming: L,
                    imageCacheHit: O,
                    isShowingCachedImage: G,
                    imageCheck: B,
                    refetch: W,
                    deleted: Q
                }, v[25] = Q, v[26] = O, v[27] = B, v[28] = G, v[29] = R, v[30] = L, v[31] = V, v[32] = W, v[33] = g, v[34] = Z, v[35] = $, v[36] = J, v[37] = b) : b = v[37], b
            }
        })
    }),
    jo5I: (function(e, t, r) {
        r.d(t, {
            a: () => C
        });
        var n = r("ABep"),
            a = r("QosV"),
            i = r("DNYL"),
            l = r("on57"),
            s = r("iTtm"),
            o = r("zd8w"),
            u = r("Wf1j"),
            d = r("oyxz"),
            c = r("ygO2"),
            f = r("bqtn"),
            p = r("HOLv"),
            m = r("bf6R"),
            h = r("Yq7Q"),
            g = r("Fmx8"),
            b = r("cZk2");
        let v = (0, r("Bbed").a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(596051)]).then(r.bind(r, "drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, n.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function y(e) {
            let t, r = (0, a.c)(3),
                [i, l] = (0, o.useState)(!!e.open);
            return e.open && !i && l(!0), r[0] !== i || r[1] !== e ? (t = i ? (0, n.jsx)(o.Suspense, {
                fallback: (0, n.jsx)(x, {
                    ...e
                }),
                children: (0, n.jsx)(v, {
                    ...e
                })
            }) : null, r[0] = i, r[1] = e, r[2] = t) : t = r[2], t
        }

        function x(e) {
            let t, r, i, l = (0, a.c)(10),
                {
                    open: s,
                    onOpenChange: o,
                    onCloseAutoFocus: u,
                    failed: c
                } = e,
                f = void 0 !== c && c,
                p = !!s;
            return l[0] !== o ? (t = e => o?.(e), l[0] = o, l[1] = t) : t = l[1], l[2] !== f ? (r = f ? (0, n.jsx)(d.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, n.jsx)(d.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), l[2] = f, l[3] = r) : r = l[3], l[4] !== f || l[5] !== u || l[6] !== p || l[7] !== t || l[8] !== r ? (i = (0, n.jsx)(b.a, {
                open: p,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: r
            }), l[4] = f, l[5] = u, l[6] = p, l[7] = t, l[8] = r, l[9] = i) : i = l[9], i
        }
        var w = r("IZUf"),
            j = r("Rl4D"),
            _ = r("cjMA"),
            I = r("QnbX");
        let k = {
            "entity-header": {
                color: "ghostActive",
                focusRing: "inset",
                radius: "default",
                size: "entityHeader"
            },
            "product-card": {
                color: "outlineSurface",
                radius: "full",
                size: "menuRow",
                uniform: !0
            },
            "map-card": {
                color: "mapSurface",
                radius: "full",
                size: "inputIcon"
            }
        };

        function C(e) {
            let t, r, m, h, b, v, x, k, C, T, F, N, z, E, q, D, R, L, O, G, B, W, Q, U, K, H, V, Z, $, J = (0, a.c)(89),
                {
                    className: X,
                    appearance: Y,
                    visibility: ee,
                    isSaved: et,
                    isBusy: er,
                    isCheckingStatus: en,
                    selectedFolderId: ea,
                    onToggleFavorite: ei,
                    onSelectFolder: el
                } = e,
                es = void 0 === Y ? "media-overlay" : Y,
                eo = (0, s.y)(g.c),
                eu = (0, u.a)(),
                [ed, ec] = (0, o.useState)(!1),
                [ef, ep] = (0, o.useState)(!1),
                [em, eh] = (0, o.useState)(!1),
                [eg, eb] = (0, o.useState)(null),
                ev = (0, o.useRef)(null),
                ey = (0, o.useRef)(null),
                ex = er || en;
            J[0] !== eu ? (t = eu.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder",
                description: "Button that opens the Library folder creation dialog for a saved item"
            }), J[0] = eu, J[1] = t) : t = J[1];
            let ew = t;
            if (en) {
                let e;
                J[2] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.checking",
                    defaultMessage: "Checking Favorites status",
                    description: "Accessible status for a bookmark while checking whether the item is already saved"
                }), J[2] = eu, J[3] = e) : e = J[3], r = e
            } else if (et) {
                let e;
                J[4] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.remove",
                    defaultMessage: "Remove from Favorites",
                    description: "Accessible label and tooltip for removing an item from Favorites"
                }), J[4] = eu, J[5] = e) : e = J[5], r = e
            } else {
                let e;
                J[6] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.add",
                    defaultMessage: "Add to Favorites",
                    description: "Accessible label for saving an item to Favorites and opening optional folder selection"
                }), J[6] = eu, J[7] = e) : e = J[7], r = e
            }
            J[8] !== ex || J[9] !== et || J[10] !== ei ? (m = () => {
                ex ? ec(!1) : (eh(!0), ec(!et), ei())
            }, J[8] = ex, J[9] = et, J[10] = ei, J[11] = m) : m = J[11];
            let ej = m;
            J[12] !== es || J[13] !== X || J[14] !== et || J[15] !== ed || J[16] !== ee ? (h = (0, l.b)("select-none", "always" === ee || "entity-header" === es || "map-card" === es || et || ed ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === es ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], X), J[12] = es, J[13] = X, J[14] = et, J[15] = ed, J[16] = ee, J[17] = h) : h = J[17];
            let e_ = ed ? "open" : "closed";
            J[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, J[18] = ef, J[19] = b) : b = J[19], J[20] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                e || (ec(!1), eh(!0))
            }, J[20] = v) : v = J[20];
            let eI = !et || ed || em;
            J[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ev.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, J[21] = x) : x = J[21];
            let ek = ex || void 0,
                eC = ex && !ed || void 0,
                eM = !et || ed ? "menu" : void 0,
                eP = !et || ed ? ed : void 0;
            J[22] === Symbol.for("react.memo_cache_sentinel") ? (k = () => eh(!1), C = () => eh(!1), T = () => eh(!1), J[22] = k, J[23] = C, J[24] = T) : (k = J[22], C = J[23], T = J[24]), J[25] !== ej ? (F = e => {
                e.preventDefault(), e.stopPropagation(), ej()
            }, J[25] = ej, J[26] = F) : F = J[26], J[27] !== ex || J[28] !== et || J[29] !== ej ? (N = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? ej() : ex || et || ec(!0))
            }, J[27] = ex, J[28] = et, J[29] = ej, J[30] = N) : N = J[30];
            let eA = et ? j.a : _.a;
            return J[31] !== eA ? (z = (0, n.jsx)(p.a, {
                asset: eA
            }), J[31] = eA, J[32] = z) : z = J[32], J[33] !== es || J[34] !== et || J[35] !== r || J[36] !== ek || J[37] !== eC || J[38] !== eM || J[39] !== eP || J[40] !== F || J[41] !== N || J[42] !== z ? (E = (0, n.jsx)(A, {
                ref: x,
                "aria-label": r,
                "aria-busy": ek,
                "aria-disabled": eC,
                "aria-haspopup": eM,
                "aria-expanded": eP,
                "aria-pressed": et,
                appearance: es,
                onPointerEnter: k,
                onPointerLeave: C,
                onBlur: T,
                onPointerDown: P,
                onClick: F,
                onKeyDown: N,
                children: z
            }), J[33] = es, J[34] = et, J[35] = r, J[36] = ek, J[37] = eC, J[38] = eM, J[39] = eP, J[40] = F, J[41] = N, J[42] = z, J[43] = E) : E = J[43], J[44] !== r || J[45] !== E || J[46] !== eI ? (q = (0, n.jsx)(i.a, {
                content: r,
                disabled: eI,
                children: E
            }), J[44] = r, J[45] = E, J[46] = eI, J[47] = q) : q = J[47], J[48] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, n.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, n.jsx)(d.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), J[48] = D) : D = J[48], J[49] === Symbol.for("react.memo_cache_sentinel") ? (R = () => {
                ec(!1), ep(!0)
            }, L = (0, n.jsx)(p.a, {
                asset: I.a
            }), J[49] = R, J[50] = L) : (R = J[49], L = J[50]), J[51] !== ex || J[52] !== ew ? (O = (0, n.jsx)(c.a, {
                ref: ey,
                "aria-label": ew,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: R,
                children: L
            }), J[51] = ex, J[52] = ew, J[53] = O) : O = J[53], J[54] !== ex || J[55] !== O ? (G = (0, n.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: O
            }), J[54] = ex, J[55] = O, J[56] = G) : G = J[56], J[57] !== ew || J[58] !== G ? (B = (0, n.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [D, (0, n.jsx)(i.a, {
                    content: ew,
                    children: G
                })]
            }), J[57] = ew, J[58] = G, J[59] = B) : B = J[59], J[60] === Symbol.for("react.memo_cache_sentinel") ? (W = () => ey.current?.focus(), J[60] = W) : W = J[60], J[61] !== ex || J[62] !== el || J[63] !== ea ? (Q = (0, n.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, n.jsx)(S, {
                    isBusy: ex,
                    selectedFolderId: ea,
                    onSelectFolder: el,
                    focusCreateFolder: W
                })
            }), J[61] = ex, J[62] = el, J[63] = ea, J[64] = Q) : Q = J[64], J[65] !== ed || J[66] !== eg || J[67] !== q || J[68] !== B || J[69] !== Q || J[70] !== b ? (U = (0, n.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: ed,
                onCloseAutoFocus: b,
                onOpenChange: v,
                triggerButton: q,
                children: [B, Q]
            }), J[65] = ed, J[66] = eg, J[67] = q, J[68] = B, J[69] = Q, J[70] = b, J[71] = U) : U = J[71], J[72] !== et || J[73] !== U || J[74] !== h || J[75] !== e_ ? (K = (0, n.jsx)("div", {
                className: h,
                "data-saved": et,
                "data-state": e_,
                children: U
            }), J[72] = et, J[73] = U, J[74] = h, J[75] = e_, J[76] = K) : K = J[76], J[77] === Symbol.for("react.memo_cache_sentinel") ? (H = e => {
                e.preventDefault(), ev.current?.focus()
            }, J[77] = H) : H = J[77], J[78] !== el || J[79] !== eo.query ? (V = async e => {
                await eo.query.cancel(w.a);
                let t = !1;
                eo.query.setData(w.a, r => (t = null == r, [...(r ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(M))), t && eo.query.invalidate(w.a), await el(e, !0)
            }, J[78] = el, J[79] = eo.query, J[80] = V) : V = J[80], J[81] !== ef || J[82] !== eo.value.accountId || J[83] !== eo.value.userId || J[84] !== V ? (Z = (0, n.jsx)(y, {
                open: ef,
                accountId: eo.value.accountId,
                userId: eo.value.userId,
                directoryId: null,
                onOpenChange: ep,
                onCloseAutoFocus: H,
                onCreated: V
            }), J[81] = ef, J[82] = eo.value.accountId, J[83] = eo.value.userId, J[84] = V, J[85] = Z) : Z = J[85], J[86] !== K || J[87] !== Z ? ($ = (0, n.jsxs)(n.Fragment, {
                children: [K, Z]
            }), J[86] = K, J[87] = Z, J[88] = $) : $ = J[88], $
        }

        function M(e, t) {
            return e.name.localeCompare(t.name)
        }

        function P(e) {
            e.preventDefault()
        }

        function A(e) {
            let t, r, i, l = (0, a.c)(6);
            return l[0] !== e ? ({
                appearance: t,
                ...r
            } = e, l[0] = e, l[1] = t, l[2] = r) : (t = l[1], r = l[2]), l[3] !== t || l[4] !== r ? (i = "media-overlay" === t ? (0, n.jsx)(h.a, {
                ...r,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, n.jsx)(c.a, {
                ...r,
                ...k[t]
            }), l[3] = t, l[4] = r, l[5] = i) : i = l[5], i
        }

        function S(e) {
            let t, r, i = (0, a.c)(16),
                {
                    focusCreateFolder: l,
                    isBusy: o,
                    selectedFolderId: u,
                    onSelectFolder: c
                } = e,
                {
                    data: p,
                    isPending: h,
                    isError: g,
                    refetch: b
                } = (0, s.z)(w.a);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…",
                        description: "Status in the favorite folder menu while personal Library folders load"
                    })
                }), i[0] = e) : e = i[0], e
            }
            if (g && null == p) {
                let e, t, r, a;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), i[1] = e) : e = i[1], i[2] !== l || i[3] !== b ? (t = e => {
                    e.preventDefault(), l(), b()
                }, i[2] = l, i[3] = b, i[4] = t) : t = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(d.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), i[5] = r) : r = i[5], i[6] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(f.c.Item, {
                        onSelect: t,
                        children: r
                    })]
                }), i[6] = t, i[7] = a) : a = i[7], a
            }
            if (p?.length === 0) {
                let e;
                return i[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet",
                        description: "Empty state in the favorite folder menu; Create folder is still available"
                    })
                }), i[8] = e) : e = i[8], e
            }
            return i[9] !== p || i[10] !== o || i[11] !== c || i[12] !== u ? (t = p?.map(e => (0, n.jsx)(f.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": u === e.id,
                isActive: u === e.id,
                disabled: o,
                onSelect: () => void c({
                    id: e.id,
                    name: e.name,
                    parent_directory_id: e.parent_directory_id
                }, !1),
                children: (0, n.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [(0, n.jsx)(T, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, n.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, n.jsx)(m.Tb, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), i[9] = p, i[10] = o, i[11] = c, i[12] = u, i[13] = t) : t = i[13], i[14] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), i[14] = t, i[15] = r) : r = i[15], r
        }

        function T(e) {
            let t, r, i, s = (0, a.c)(8),
                {
                    imageUrl: u
                } = e,
                [d, c] = (0, o.useState)(null),
                f = null != u && u !== d,
                p = !f && "border border-default bg-surface";
            return s[0] !== p ? (t = (0, l.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), s[0] = p, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (r = f ? (0, n.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => c(u)
            }) : (0, n.jsx)(m.vd, {}), s[2] = u, s[3] = f, s[4] = r) : r = s[4], s[5] !== t || s[6] !== r ? (i = (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: r
            }), s[5] = t, s[6] = r, s[7] = i) : i = s[7], i
        }
    }),
    IZUf: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("Kwur"),
            i = r("Fmx8");
        let l = (0, n.r)(i.c, e => {
            let {
                scope: t
            } = e;
            return {
                queryKey: ["library-api", t.value.accountId, t.value.userId, "favorite-folders"],
                staleTime: 3e4,
                queryFn: async e => {
                    let {
                        signal: r
                    } = e;
                    return (await a.Request.safeGet("/files/library/nodes", {
                        additionalHeaders: {
                            "ChatGPT-Account-ID": t.value.accountId
                        },
                        parameters: {
                            query: {
                                parent_directory_id: null,
                                cursor: null,
                                include_files: !1,
                                hydrate_folder_thumbnails: !0
                            }
                        },
                        signal: r
                    })).items.filter(e => "directory" === e.kind && !0 !== e.is_root && null == e.direct_share_id && null == e.shared_by && "shared" !== e.access_kind && "mounted" !== e.access_kind && !e.id.startsWith("library:") && !e.id.startsWith("external-") && e.name.trim().length > 0).sort((e, t) => e.name.localeCompare(t.name))
                }
            }
        });
        r.d(t, {}, {
            a: l,
            b: async function(e, t, r) {
                await a.Request.safePatch("/files/library/files/{library_file_id}/move", {
                    additionalHeaders: {
                        "ChatGPT-Account-ID": e.value.accountId
                    },
                    parameters: {
                        path: {
                            library_file_id: t
                        }
                    },
                    requestBody: {
                        directory_id: r
                    }
                }), await e.queryClient.invalidateQueries({
                    queryKey: ["library-api", e.value.accountId, e.value.userId]
                })
            }
        })
    })
};