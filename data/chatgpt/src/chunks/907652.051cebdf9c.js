export const __rspack_esm_ids = [907652];
export const __webpack_modules__ = {
    bfX9: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
                return !!e?.ownership_state_enabled && (e.ownership?.available_action === t || e.ownership?.available_action === "view_request" && e.ownership.current_request?.kind === t) && !e.profiles.some(e => e.allowed_actions.includes("manage")) && ("claim" === t || !0 === e.is_verified)
            }
        })
    }),
    zHQF: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("oyxz");
        n.d(t, {}, {
            a: function() {
                let e, t = (0, a.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(i.a, {
                    id: "chatgpt.ads.business_agent.organic.unavailable",
                    defaultMessage: "This client or account can’t open this business chat",
                    description: "Error shown before starting a Business Agent chat when the current app or signed-in account cannot use its native runtime."
                }), t[0] = e) : e = t[0], e
            }
        })
    }),
    xAIC: (function(e, t, n) {
        var r = n("ASxG");
        let a = r.object({
                index: r.string().regex(/^\d+$/).transform(Number)
            }).strip(),
            i = r.object({
                marker_text: r.string().trim().min(1).optional(),
                marker_type: r.string().trim().min(1).optional()
            }).strip();
        n.d(t, {}, {
            a: function(e) {
                let t = a.safeParse(e);
                return t.success ? t.data.index : null
            },
            b: function(e) {
                let t = i.safeParse(e);
                return t.success ? t.data.marker_text ?? null : null
            },
            c: function(e) {
                let t = i.safeParse(e);
                return t.success ? t.data.marker_type ?? null : null
            }
        })
    }),
    G6mJ: (function(e, t, n) {
        var r = n("rKAs"),
            a = n("xAIC");
        n.d(t, {}, {
            a: function(e, t) {
                if (null == t) return null;
                let n = (0, a.a)(e);
                if (null != n) {
                    let e = t[n];
                    return null == e ? null : {
                        index: n,
                        reference: e
                    }
                }
                let i = (0, a.b)(e);
                if (null == i) return null;
                let l = t.findIndex(e => (0, r.l)(e) === i);
                if (-1 === l) return null;
                let s = t[l];
                return null == s ? null : {
                    index: l,
                    reference: s
                }
            }
        })
    }),
    niC2: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            l = n("zd8w"),
            s = n("Wf1j"),
            o = n("ygO2"),
            u = n("vxGj"),
            d = n("HOLv"),
            c = n("r21w"),
            f = n("SUhA"),
            p = n("JwGC"),
            m = n("LQio"),
            h = n("YOmR"),
            g = n("oq7t");

        function b(e) {
            let t, n, o, u, d, p, m, h, g = (0, a.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: y,
                    image: v,
                    imageAssetResolver: x,
                    imageNumber: w,
                    imageRef: j,
                    onOpen: _,
                    single: k,
                    presentation: I
                } = e,
                C = (0, s.a)(),
                [M, P] = (0, l.useState)(null),
                [A, S] = (0, l.useState)(null),
                T = null != v.previewSrc && v.previewSrc !== A ? v.previewSrc : v.src;
            g[0] !== b || g[1] !== x || g[2] !== T ? (t = {
                src: T,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = T, g[3] = t) : t = g[3];
            let {
                previewSrc: N
            } = (0, f.a)(t), F = null != y && (null == N || M !== N), z = k && "w-full", E = !k && ("dialog" === I ? "w-2/3" : "max-w-19/20");
            return g[4] !== z || g[5] !== E ? (n = (0, i.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", z, E), g[4] = z, g[5] = E, g[6] = n) : n = g[6], g[7] !== y || g[8] !== v.height || g[9] !== v.width || g[10] !== I || g[11] !== k ? (o = k || "dialog" === I ? void 0 : {
                aspectRatio: null == y ? `${v.width??1}/${v.height??1}` : "5/4"
            }, g[7] = y, g[8] = v.height, g[9] = v.width, g[10] = I, g[11] = k, g[12] = o) : o = g[12], g[13] !== w || g[14] !== C ? (u = C.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: w
            }), g[13] = w, g[14] = C, g[15] = u) : u = g[15], g[16] !== _ ? (d = e => _(e.currentTarget), g[16] = _, g[17] = d) : d = g[17], g[18] !== y || g[19] !== v.previewSrc || g[20] !== j || g[21] !== M || g[22] !== N || g[23] !== F ? (p = null == N ? (0, r.jsx)(c.a, {
                className: "h-full w-full"
            }) : (0, r.jsx)("img", {
                ref: F ? void 0 : j,
                className: (0, i.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == y && M !== N && "opacity-0"),
                src: N,
                alt: "",
                draggable: !1,
                loading: null == y ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => P(N),
                onError: () => S(v.previewSrc ?? null)
            }), g[18] = y, g[19] = v.previewSrc, g[20] = j, g[21] = M, g[22] = N, g[23] = F, g[24] = p) : p = g[24], g[25] !== y || g[26] !== j || g[27] !== F ? (m = F ? (0, r.jsx)("img", {
                ref: j,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: y,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = y, g[26] = j, g[27] = F, g[28] = m) : m = g[28], g[29] !== m || g[30] !== n || g[31] !== o || g[32] !== u || g[33] !== d || g[34] !== p ? (h = (0, r.jsxs)("button", {
                className: n,
                style: o,
                "aria-label": u,
                type: "button",
                onClick: d,
                children: [p, m]
            }), g[29] = m, g[30] = n, g[31] = o, g[32] = u, g[33] = d, g[34] = p, g[35] = h) : h = g[35], h
        }

        function y(e) {
            let t, n, i, l, o = (0, a.c)(16),
                {
                    conversationId: u,
                    image: d,
                    imageAssetResolver: c,
                    imageNumber: m,
                    onClose: h,
                    onCloseAutoFocus: g,
                    onNextImage: b,
                    onPreviousImage: y
                } = e,
                v = (0, s.a)();
            o[0] !== u || o[1] !== d.src || o[2] !== c ? (t = {
                src: d.src,
                conversationId: u,
                imageAssetResolver: c,
                shouldLoadFileDataUrl: !1
            }, o[0] = u, o[1] = d.src, o[2] = c, o[3] = t) : t = o[3];
            let {
                previewSrc: x
            } = (0, f.a)(t);
            return null == x ? null : (o[4] !== m || o[5] !== v ? (n = v.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: m
            }), o[4] = m, o[5] = v, o[6] = n) : n = o[6], o[7] !== h ? (i = e => {
                e || h()
            }, o[7] = h, o[8] = i) : i = o[8], o[9] !== g || o[10] !== b || o[11] !== y || o[12] !== x || o[13] !== n || o[14] !== i ? (l = (0, r.jsx)(p.a, {
                alt: n,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: i,
                onNextImage: b,
                onPreviousImage: y
            }), o[9] = g, o[10] = b, o[11] = y, o[12] = x, o[13] = n, o[14] = i, o[15] = l) : l = o[15], l)
        }

        function v(e, t) {
            let n = e.children.item(t);
            if (!(n instanceof HTMLElement)) return 0;
            let r = "rtl" === getComputedStyle(e).direction,
                a = e.scrollWidth - e.clientWidth,
                i = n.offsetLeft - (e.clientWidth - n.offsetWidth) / 2;
            return 0 === t ? i = 0 : t === e.children.length - 1 && (i = r ? n.offsetLeft : n.offsetLeft + n.offsetWidth - e.clientWidth), r ? Math.max(-a, Math.min(0, i)) : Math.max(0, Math.min(a, i))
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, f, p, x, w, j, _, k, I, C, M, P, A, S, T, N, F, z = (0, a.c)(56),
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
                    K = void 0 === B ? "sidebar" : B,
                    W = (0, s.a)(),
                    H = (0, l.useContext)(m.a),
                    U = (0, l.useRef)(null),
                    Q = (0, l.useRef)(null),
                    V = (0, l.useRef)(null);
                z[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, z[0] = t) : t = z[0];
                let Z = (0, l.useRef)(t);
                z[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => ({
                    getThumbnail: e => Z.current.get(e) ?? null
                }), z[1] = n) : n = z[1], (0, l.useImperativeHandle)(E, n);
                let [$, J] = (0, l.useState)(0), [Y, X] = (0, l.useState)(null);
                z[2] !== Y ? (c = e => e.id === Y, z[2] = Y, z[3] = c) : c = z[3];
                let ee = L.findIndex(c),
                    et = L[ee],
                    en = Math.min($, L.length - 1);
                z[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                    let t = U.current;
                    if (null == t) return;
                    let n = v(t, e);
                    Q.current = 1 >= Math.abs(t.scrollLeft - n) ? null : n, t.scrollTo({
                        left: n
                    }), J(e)
                }, z[4] = f) : f = z[4];
                let er = f;
                z[5] !== L.length ? (p = e => {
                    let t = 0,
                        n = 1 / 0;
                    for (let r = 0; r < L.length; r += 1) {
                        let a = Math.abs(v(e, r) - e.scrollLeft);
                        a < n && (n = a, t = r)
                    }
                    J(t)
                }, z[5] = L.length, z[6] = p) : p = z[6];
                let ea = p,
                    ei = "sidebar" === K && "mb-5";
                z[7] !== ei ? (x = (0, i.b)("-mx-6", ei), z[7] = ei, z[8] = x) : x = z[8];
                let el = "dialog" === K ? "h-56 sm:h-64" : "aspect-5/4";
                z[9] !== el ? (w = (0, i.b)("group/photos relative overflow-hidden select-none", el), z[9] = el, z[10] = w) : w = z[10], z[11] !== W ? (j = W.formatMessage({
                    id: "chatgpt.imageGroup.photos",
                    defaultMessage: "Photos",
                    description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
                }), z[11] = W, z[12] = j) : j = z[12], z[13] !== W ? (_ = W.formatMessage({
                    id: "chatgpt.imageGroup.carouselRole",
                    defaultMessage: "carousel",
                    description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
                }), z[13] = W, z[14] = _) : _ = z[14], z[15] !== L.length || z[16] !== er || z[17] !== en ? (k = e => {
                    if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                        e.preventDefault(), e.stopPropagation();
                        let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                        er(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (en + 1) % L.length : Math.max(0, en - 1))
                    }
                }, z[15] = L.length, z[16] = er, z[17] = en, z[18] = k) : k = z[18], z[19] !== ea ? (I = e => {
                    let t = e.currentTarget,
                        n = Q.current;
                    if (null != n) {
                        1 >= Math.abs(t.scrollLeft - n) && (Q.current = null);
                        return
                    }
                    ea(t)
                }, C = e => {
                    Q.current = null, ea(e.currentTarget)
                }, z[19] = ea, z[20] = I, z[21] = C) : (I = z[20], C = z[21]), z[22] === Symbol.for("react.memo_cache_sentinel") ? (M = () => {
                    Q.current = null
                }, P = () => {
                    Q.current = null
                }, z[22] = M, z[23] = P) : (M = z[22], P = z[23]);
                let es = L.map((e, t) => (0, r.jsx)(b, {
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
                    presentation: K,
                    onOpen: n => {
                        null != O ? O(t) : (V.current = n, X(e.id))
                    }
                }, e.id));
                return z[24] !== I || z[25] !== C || z[26] !== M || z[27] !== P || z[28] !== es ? (A = (0, r.jsx)("div", {
                    ref: U,
                    className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                    onScroll: I,
                    onScrollEnd: C,
                    onPointerDown: M,
                    onWheel: P,
                    children: es
                }), z[24] = I, z[25] = C, z[26] = M, z[27] = P, z[28] = es, z[29] = A) : A = z[29], z[30] !== L.length || z[31] !== W || z[32] !== G || z[33] !== er || z[34] !== en ? (S = L.length > 1 ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-has-[:focus-visible]/photos:opacity-100",
                        children: [(0, r.jsx)(o.a, {
                            className: (0, i.b)("group-hover/photos:pointer-events-auto group-has-[:focus-visible]/photos:pointer-events-auto", 0 === en && "invisible"),
                            "aria-label": W.formatMessage({
                                id: "chatgpt.imageGroup.previousPhoto",
                                defaultMessage: "Previous photo",
                                description: "Accessible label for the previous photo button in a ChatGPT entity photo carousel"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = Math.max(0, en - 1);
                                e !== en && G?.("previous", e), er(e)
                            },
                            children: (0, r.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: h.a
                            })
                        }), (0, r.jsx)(o.a, {
                            className: "group-hover/photos:pointer-events-auto group-has-[:focus-visible]/photos:pointer-events-auto",
                            "aria-label": W.formatMessage({
                                id: "chatgpt.imageGroup.nextPhoto",
                                defaultMessage: "Next photo",
                                description: "Accessible label for the next photo button in a ChatGPT entity photo carousel"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = (en + 1) % L.length;
                                e !== en && G?.("next", e), er(e)
                            },
                            children: (0, r.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: g.a
                            })
                        })]
                    }), L.length <= 20 ? (0, r.jsx)("div", {
                        className: "absolute inset-x-0 bottom-3 flex justify-center",
                        children: (0, r.jsx)(u.a, {
                            count: L.length,
                            activeIndex: en,
                            getPageLabel: e => W.formatMessage({
                                id: "chatgpt.imageGroup.goToPhoto",
                                defaultMessage: "Go to photo {number}",
                                description: "Accessible label for a photo carousel position indicator; number is the one-based photo position"
                            }, {
                                number: e + 1
                            }),
                            onSelect: er
                        })
                    }) : null]
                }) : null, z[30] = L.length, z[31] = W, z[32] = G, z[33] = er, z[34] = en, z[35] = S) : S = z[35], z[36] !== H || z[37] !== w || z[38] !== j || z[39] !== _ || z[40] !== k || z[41] !== A || z[42] !== S ? (T = (0, r.jsxs)("div", {
                    ref: H,
                    className: w,
                    "data-entity-photos": !0,
                    "aria-label": j,
                    "aria-roledescription": _,
                    role: "region",
                    onKeyDown: k,
                    children: [A, S]
                }), z[36] = H, z[37] = w, z[38] = j, z[39] = _, z[40] = k, z[41] = A, z[42] = S, z[43] = T) : T = z[43], z[44] !== q || z[45] !== R || z[46] !== L || z[47] !== V || z[48] !== et || z[49] !== ee || z[50] !== X ? (N = null != et ? (0, r.jsx)(y, {
                    conversationId: q,
                    image: et,
                    imageAssetResolver: R,
                    imageNumber: ee + 1,
                    onClose: () => X(null),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), V.current?.focus()
                    },
                    onPreviousImage: ee > 0 ? () => X(L[ee - 1].id) : void 0,
                    onNextImage: ee < L.length - 1 ? () => X(L[ee + 1].id) : void 0
                }) : null, z[44] = q, z[45] = R, z[46] = L, z[47] = V, z[48] = et, z[49] = ee, z[50] = X, z[51] = N) : N = z[51], z[52] !== T || z[53] !== N || z[54] !== x ? (F = (0, r.jsxs)("div", {
                    className: x,
                    "data-testid": "chatgpt-image-group-carousel",
                    children: [T, N]
                }), z[52] = T, z[53] = N, z[54] = x, z[55] = F) : F = z[55], F
            }
        })
    }),
    NDDl: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("iTtm"),
            l = n("zd8w"),
            s = n("oyxz"),
            o = n("ygO2"),
            u = n("bf6R"),
            d = n("OWtl"),
            c = n("zHQF"),
            f = n("TUMj"),
            p = n("w7PD"),
            m = n("cGwJ");

        function h(e) {
            let t, n = (0, a.c)(2),
                {
                    nativeUnavailable: i
                } = e;
            return n[0] !== i ? (t = (0, r.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: i ? (0, r.jsx)(c.a, {}) : (0, r.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again.",
                    description: "Error after a business profile's chat button or suggested question could not open a new conversation. The user can click the action again."
                })
            }), n[0] = i, n[1] = t) : t = n[1], t
        }

        function g(e) {
            let t, n, l = (0, a.c)(5),
                {
                    conversationId: s,
                    data: o
                } = e,
                u = (0, i.x)(p.b, s);
            if (null == u) return null;
            l[0] !== o ? (t = p.a.safeParse(o).data?.items, l[0] = o, l[1] = t) : t = l[1];
            let d = t;
            return l[2] !== u || l[3] !== d ? (n = d ? (0, r.jsx)(b, {
                chat: u,
                items: d,
                onSelect: u.open
            }) : null, l[2] = u, l[3] = d, l[4] = n) : n = l[4], n
        }

        function b(e) {
            let t, n, i, l = (0, a.c)(13),
                {
                    chat: s,
                    items: d,
                    onSelect: c
                } = e;
            if (l[0] !== s || l[1] !== d || l[2] !== c) {
                let e;
                l[4] !== s || l[5] !== c ? (e = e => (0, r.jsxs)(o.a, {
                    allowShrink: !0,
                    color: "conversationPill",
                    size: "suggestedQuestion",
                    disabled: null != s.pendingId,
                    loading: s.pendingId === e.id,
                    onClick: () => c(e),
                    children: [s.pendingId !== e.id ? (0, r.jsx)(u.Hb, {
                        "aria-hidden": !0
                    }) : null, (0, r.jsx)("span", {
                        className: "min-w-0 text-start break-words whitespace-normal",
                        children: e.label
                    })]
                }, e.id), l[4] = s, l[5] = c, l[6] = e) : e = l[6], t = d.map(e), l[0] = s, l[1] = d, l[2] = c, l[3] = t
            } else t = l[3];
            return l[7] !== s || l[8] !== d ? (n = d.some(e => {
                let {
                    id: t
                } = e;
                return t === s.failedId
            }) ? (0, r.jsx)(h, {
                nativeUnavailable: s.nativeUnavailable
            }) : null, l[7] = s, l[8] = d, l[9] = n) : n = l[9], l[10] !== t || l[11] !== n ? (i = (0, r.jsxs)("div", {
                className: "flex flex-col items-start gap-2.5 pb-4",
                children: [t, n]
            }), l[10] = t, l[11] = n, l[12] = i) : i = l[12], i
        }

        function y(e, t) {
            return {
                id: `profile-starter-${t}`,
                label: e,
                prefill: e
            }
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, o = (0, a.c)(7),
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
                }, n = [m, u, c], o[0] = c, o[1] = u, o[2] = m, o[3] = t, o[4] = n) : (t = o[3], n = o[4]), (0, l.useLayoutEffect)(t, n), o[5] !== f ? (s = (0, r.jsx)(r.Fragment, {
                    children: f
                }), o[5] = f, o[6] = s) : s = o[6], s
            },
            b: function(e) {
                let t, n, l, u, d, c = (0, a.c)(15),
                    {
                        conversationId: f
                    } = e,
                    m = (0, i.x)(p.b, f);
                if (m?.startChat == null) return null;
                let g = m.startChat,
                    b = null != m.pendingId,
                    y = m.pendingId === g.id;
                return c[0] !== g || c[1] !== m ? (t = () => m.open(g, "start-chat"), c[0] = g, c[1] = m, c[2] = t) : t = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.startChat",
                    defaultMessage: "Start chat",
                    description: "Button in a business profile header that opens a new conversation with that business’s AI agent."
                }), c[3] = n) : n = c[3], c[4] !== b || c[5] !== y || c[6] !== t ? (l = (0, r.jsx)(o.a, {
                    color: "primary",
                    size: "businessProfileAction",
                    disabled: b,
                    loading: y,
                    onClick: t,
                    children: n
                }), c[4] = b, c[5] = y, c[6] = t, c[7] = l) : l = c[7], c[8] !== g.id || c[9] !== m.failedId || c[10] !== m.nativeUnavailable ? (u = m.failedId === g.id ? (0, r.jsx)(h, {
                    nativeUnavailable: m.nativeUnavailable
                }) : null, c[8] = g.id, c[9] = m.failedId, c[10] = m.nativeUnavailable, c[11] = u) : u = c[11], c[12] !== l || c[13] !== u ? (d = (0, r.jsxs)(r.Fragment, {
                    children: [l, u]
                }), c[12] = l, c[13] = u, c[14] = d) : d = c[14], d
            },
            c: function(e) {
                let t, n = (0, a.c)(5),
                    {
                        conversationId: l,
                        after: s
                    } = e,
                    o = void 0 === s ? "transcript" : s,
                    u = (0, i.x)(p.b, l),
                    d = u?.suggestedQuestions,
                    c = (0, i.x)(d?.length ? m.a : null, l);
                return n[0] !== o || n[1] !== u || n[2] !== c || n[3] !== d ? (t = u && d?.length && c === o ? (0, r.jsx)(b, {
                    chat: u,
                    items: d.map(y),
                    onSelect: e => u.open(e, "suggestion")
                }) : null, n[0] = o, n[1] = u, n[2] = c, n[3] = d, n[4] = t) : t = n[4], t
            },
            d: function(e) {
                let t, n = (0, a.c)(3),
                    {
                        data: i
                    } = e,
                    l = (0, f.d)();
                return n[0] !== i || n[1] !== l ? (t = l?.conversationType === "sidebar" ? (0, r.jsx)(g, {
                    conversationId: l.conversationId,
                    data: i
                }) : null, n[0] = i, n[1] = l, n[2] = t) : t = n[2], t
            }
        })
    }),
    w7PD: (function(e, t, n) {
        var r = n("iTtm"),
            a = n("ASxG"),
            i = n("OWtl");
        let l = a.object({
                items: a.array(a.object({
                    id: a.string().trim().min(1),
                    label: a.string().trim().min(1),
                    prefill: a.string().nullish()
                })).min(1)
            }),
            s = (0, r.v)(i.a, e => null, void 0, {
                autoDispose: !0
            });
        n.d(t, {}, {
            a: l,
            b: s
        })
    }),
    FQiC: (function(e, t, n) {
        var r = n("iTtm"),
            a = n("zd8w"),
            i = n("Cslg"),
            l = n("OWtl"),
            s = n("tZ3A"),
            o = n("orgn");
        let u = (0, r.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(s.c, e)?.businessProfile, a = n(o.a, e);
                return {
                    conversationId: e,
                    accountId: n(i.f),
                    userId: n(i.j),
                    profileId: a?.profileId ?? null,
                    identity: JSON.stringify([a?.profileId, a?.source, a?.source === "entity-knowledge" ? null : r ?? null])
                }
            }),
            d = (0, r.j)(l.a, (e, t) => {
                let {
                    signal: n
                } = t;
                return {
                    isOpen$: n(!1),
                    triggerRef: (0, a.createRef)()
                }
            }, {
                autoDispose: !0
            });
        n.d(t, {}, {
            a: d,
            b: u
        })
    }),
    orgn: (function(e, t, n) {
        var r = n("D7Ms"),
            a = n("iTtm"),
            i = n("bg18"),
            l = n("Cslg"),
            s = n("OWtl"),
            o = n("OMIV"),
            u = n("tZ3A"),
            d = n("Kwur");
        let c = (0, a.q)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(u.c, e), s = a?.entityKnowledgeId, c = n(l.f), f = n(l.j), p = null != s && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != c && null != f && n(o.d, "2778625748");
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
                        } = e, n = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
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
                        return t.throwIfAborted(), null == n.business_profile_id ? null : {
                            profileId: n.business_profile_id,
                            source: "entity-knowledge",
                            status: n
                        }
                    } : r.u
                }
            }),
            f = (0, a.q)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(u.c, e), s = a?.businessProfile, f = n(l.f), p = n(l.j), m = null != s && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != f && null != p && n(o.d, "2778625748");
                if (m && a?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: r,
                        isPending: a
                    } = n(c, e);
                    m = r && !a && null == t
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
                        } = e, n = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
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
                            status: n
                        }
                    } : r.u
                }
            }),
            p = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(u.c, e);
                if (r?.businessProfile == null && r?.entityKnowledgeId == null || r?.entityKnowledgePending || !["business", "brand", "company", "organization"].includes(r?.category ?? "") || !n(o.d, "2778625748")) return null;
                if (r?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: r,
                        isPending: a
                    } = n(c, e);
                    if (!r || a) return null;
                    if (null != t) return t
                }
                let {
                    data: a,
                    isEnabled: i
                } = n(f, e);
                return i ? a ?? null : null
            }),
            m = (0, a.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(p, e)?.status ?? null
            });
        n.d(t, {}, {
            a: p,
            b: m
        })
    }),
    cGwJ: (function(e, t, n) {
        var r = n("iTtm"),
            a = n("rKAs"),
            i = n("IgxH"),
            l = n("OWtl"),
            s = n("CTBG"),
            o = n("Nayr"),
            u = n("dQRk"),
            d = n("w7PD");

        function c(e, t) {
            return `${e}:${t}`
        }
        let f = (0, r.d)(l.a, (e, t) => {
            let n, {
                get: r
            } = t;
            if ("idle" !== r(u._, e)) return null;
            let l = r(s.c, e),
                f = r(u.M, e),
                p = !1;
            for (let e of l ?? []) {
                let t;
                if (!e.id || f[e.id]?.blocked) continue;
                let r = (0, o.d)(e);
                if (!r.markdown) continue;
                let l = "finished_successfully" === e.status;
                for (let e of r.contentReferences)
                    if (!(0, a.H)(e)) {
                        if ("client_defined_widget" === e.type && "business_profile_starter_pills" === e.category && d.a.safeParse(e.data).success) return null;
                        l && null == n && ("product_group" === e.type || "products" === e.type) && "number" == typeof e.start_idx && (null == t || e.start_idx < t) && (0, a.y)(e).length > 0 && (t = e.start_idx)
                    } null != t && (n = c(e.id, t)), !l || n || p || (p = (0, i.a)(r.markdown).length > 0)
            }
            return n ?? (p ? "transcript" : null)
        });
        n.d(t, {}, {
            a: f,
            b: c
        })
    }),
    SZ0w: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("v1r0"),
            l = n("iTtm"),
            s = n("zd8w"),
            o = n("Wf1j"),
            u = n("oyxz"),
            d = n("bfX9"),
            c = n("bqtn"),
            f = n("HOLv"),
            p = n("E6P3"),
            m = n("zSQm"),
            h = n("WAdu"),
            g = n("OWtl"),
            b = n("tZ3A"),
            y = n("KDax"),
            v = n("NDDl"),
            x = n("FQiC"),
            w = n("orgn"),
            j = n("T2J5"),
            _ = n("Csob"),
            k = n("uPKi"),
            I = n("KaxF"),
            C = n("rhQ8");

        function M() {
            let e, t, n = (0, a.c)(4),
                i = (0, o.a)();
            return n[0] !== i ? (e = i.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), n[0] = i, n[1] = e) : e = n[1], n[2] !== e ? (t = (0, r.jsx)(j.a, {
                className: "ms-1.5",
                label: e,
                showTooltip: !0,
                size: 24
            }), n[2] = e, n[3] = t) : t = n[3], t
        }

        function P(e) {
            let t, n, i, l, s = (0, a.c)(14),
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
            return s[2] !== o || s[3] !== b || s[4] !== c || s[5] !== g ? (n = b || null != g ? (0, r.jsxs)("div", {
                className: "-ms-1 mt-4 mb-5 flex flex-wrap items-center gap-2 empty:hidden",
                children: [b ? (0, r.jsx)(v.b, {
                    conversationId: o
                }) : null, null != g ? (0, r.jsx)(y.a, {
                    className: "flex min-h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-default bg-transparent px-5 text-entity-action whitespace-nowrap text-default select-none no-drag only:border-transparent only:bg-primary-solid only:text-primary-solid hover:bg-primary-ghost-hover only:hover:bg-primary-solid-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: g,
                    initiator: "markdown_link_click",
                    requiresConfirmation: c,
                    appearance: "button",
                    underline: "none",
                    openAsWebsite: !0,
                    children: (0, r.jsx)(u.a, {
                        id: "chatgpt.entity.businessProfile.viewWebsite",
                        defaultMessage: "View website",
                        description: "Button beneath a business name in the entity sidebar that opens the website supplied by its business profile. Use a short action label; no placeholders."
                    })
                }) : null]
            }) : null, s[2] = o, s[3] = b, s[4] = c, s[5] = g, s[6] = n) : n = s[6], s[7] !== o || s[8] !== f ? (i = (0, d.a)(f) ? (0, r.jsx)("div", {
                className: "border-t border-default",
                children: (0, r.jsx)(A, {
                    conversationId: o,
                    status: f
                })
            }) : null, s[7] = o, s[8] = f, s[9] = i) : i = s[9], s[10] !== h || s[11] !== n || s[12] !== i ? (l = (0, r.jsxs)(r.Fragment, {
                children: [n, h, i]
            }), s[10] = h, s[11] = n, s[12] = i, s[13] = l) : l = s[13], l
        }

        function A(e) {
            let t, n, i = (0, a.c)(6),
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
            return i[3] !== t || i[4] !== c ? (n = (0, r.jsx)(_.a, {
                onClick: t,
                request: c
            }), i[3] = t, i[4] = c, i[5] = n) : n = i[5], n
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, s = (0, a.c)(6),
                    {
                        conversationId: o
                    } = e,
                    f = (0, l.y)(g.a),
                    p = (0, l.x)(w.b, o);
                return (0, d.a)(p, "dispute") ? (s[0] !== o || s[1] !== f ? (t = () => {
                    if (!(0, d.a)(f.get(w.b, o), "dispute")) return;
                    let e = f.get(x.a, f.get(x.b, o));
                    e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
                }, s[0] = o, s[1] = f, s[2] = t) : t = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(u.a, {
                    id: "chatgpt.localBusiness.dispute.action",
                    defaultMessage: "Dispute profile ownership",
                    description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
                }), s[3] = n) : n = s[3], s[4] !== t ? (i = (0, r.jsx)(c.c.Item, {
                    leftIconAsset: C.a,
                    onSelect: t,
                    children: n
                }), s[4] = t, s[5] = i) : i = s[5], i) : null
            },
            b: function(e) {
                let t, n = (0, a.c)(4),
                    {
                        conversationId: i
                    } = e,
                    s = (0, l.x)(w.a, i),
                    o = (0, l.x)(b.c, i);
                if (s?.source !== "entity-knowledge" || o?.businessProfile != null) return null;
                let u = o?.shouldBlockExternalEgress;
                return n[0] !== i || n[1] !== s.status || n[2] !== u ? (t = (0, r.jsx)(P, {
                    conversationId: i,
                    requiresConfirmation: u,
                    status: s.status
                }), n[0] = i, n[1] = s.status, n[2] = u, n[3] = t) : t = n[3], t
            },
            c: function(e) {
                let t, n, d, c, g, y, v, x, j, C = (0, a.c)(29),
                    {
                        conversationId: A,
                        profile: N,
                        name: F
                    } = e,
                    z = (0, o.a)(),
                    E = (0, l.x)(w.b, A),
                    q = (0, l.x)(b.c, A),
                    D = (0, l.x)(w.a, A),
                    R = D?.source === "entity-knowledge" && D.profileId !== N.profile_id ? null : N;
                C[0] !== R?.categories ? (t = R?.categories.find(S), C[0] = R?.categories, C[1] = t) : t = C[1];
                let L = t,
                    O = T(R?.delivery_policy, i.b),
                    G = R?.returns_policy;
                C[2] !== G ? (n = T(G, i.d), C[2] = G, C[3] = n) : n = C[3];
                let B = n,
                    K = (0, s.useContext)(h.a);
                C[4] !== K || C[5] !== q?.shouldBlockExternalEgress || C[6] !== R ? (d = "restricted" !== K && !q?.shouldBlockExternalEgress && R?.logo_url ? (0, m.b)(R.logo_url) : void 0, C[4] = K, C[5] = q?.shouldBlockExternalEgress, C[6] = R, C[7] = d) : d = C[7];
                let W = d;
                C[8] !== W ? (c = W ? (0, r.jsx)(p.a, {
                    className: "mb-3 size-18 rounded-2xl border-4 border-surface bg-surface",
                    alt: "",
                    src: W,
                    fallback: (0, r.jsx)(r.Fragment, {})
                }, W) : null, C[8] = W, C[9] = c) : c = C[9];
                let H = R?.display_name ?? F ?? q?.query;
                C[10] !== E?.is_verified ? (g = E?.is_verified ? (0, r.jsx)(M, {}) : null, C[10] = E?.is_verified, C[11] = g) : g = C[11], C[12] !== H || C[13] !== g ? (y = (0, r.jsxs)("h2", {
                    className: "text-card-title break-words",
                    children: [H, g]
                }), C[12] = H, C[13] = g, C[14] = y) : y = C[14], C[15] !== L ? (v = L ? (0, r.jsx)("div", {
                    className: "text-lg leading-6 font-normal break-words text-default",
                    children: L
                }) : null, C[15] = L, C[16] = v) : v = C[16];
                let U = q?.shouldBlockExternalEgress,
                    Q = R?.website_url,
                    V = null == O && null == B ? null : (0, r.jsxs)("div", {
                        className: "divide-y divide-border border-t border-default",
                        children: [null != O ? (0, r.jsxs)(_.f, {
                            icon: (0, r.jsx)(f.a, {
                                asset: I.a
                            }),
                            children: ["none" === O.delivery ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.noDelivery",
                                defaultMessage: "Delivery unavailable",
                                description: "Merchant policy in the business sidebar when delivery is not offered"
                            }) : null, "paid" === O.delivery ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.paidDelivery",
                                defaultMessage: "Paid delivery",
                                description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                            }) : null, "free" === O.delivery && "all_orders" === O.scope ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.freeDelivery",
                                defaultMessage: "Free delivery on all orders",
                                description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                            }) : null, "free" === O.delivery && "minimum_order" === O.scope ? (0, r.jsx)(u.a, {
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
                        }) : null, null != B ? (0, r.jsxs)(_.f, {
                            icon: (0, r.jsx)(f.a, {
                                asset: k.a
                            }),
                            children: ["none" === B.returns ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.noReturns",
                                defaultMessage: "Returns not accepted",
                                description: "Merchant policy in the business sidebar when returns are not accepted"
                            }) : null, "none" !== B.returns && "window" in B ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.unlimitedReturns",
                                defaultMessage: "{kind, select, free {Free returns with no time limit} other {Returns with no time limit, fees apply}}",
                                description: "Return policy summary for customers in the business sidebar. Returns have no time limit. The kind value is free when no return fees apply, or fees otherwise.",
                                values: {
                                    kind: B.returns
                                }
                            }) : null, "none" !== B.returns && "window_days" in B ? (0, r.jsx)(u.a, {
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
                return C[17] !== P || C[18] !== A || C[19] !== E || C[20] !== U || C[21] !== Q || C[22] !== V ? (x = (0, r.jsx)(P, {
                    conversationId: A,
                    requiresConfirmation: U,
                    status: E,
                    websiteUrl: Q,
                    children: V
                }), C[17] = P, C[18] = A, C[19] = E, C[20] = U, C[21] = Q, C[22] = V, C[23] = x) : x = C[23], C[24] !== x || C[25] !== c || C[26] !== y || C[27] !== v ? (j = (0, r.jsxs)(r.Fragment, {
                    children: [c, y, v, x]
                }), C[24] = x, C[25] = c, C[26] = y, C[27] = v, C[28] = j) : j = C[28], j
            }
        })
    }),
    wFiG: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("EA6X"),
            l = n("iTtm"),
            s = n("bg18"),
            o = n("zd8w"),
            u = n("DcH0"),
            d = n("WAdu"),
            c = n("OWtl"),
            f = n("tZ3A"),
            p = n("niC2"),
            m = n("TUMj"),
            h = n("rxj0"),
            g = n("xof2"),
            b = n("SZ0w"),
            y = n("Csob"),
            v = n("FRPb"),
            x = n("LQio"),
            w = n("H0jo");

        function j(e) {
            let t, n, s, u, p = (0, a.c)(21),
                {
                    conversationId: x,
                    isTranscriptPending: w,
                    turnContext: j,
                    showClaimedBusinessTooltip: _
                } = e,
                k = void 0 !== w && w,
                I = void 0 !== _ && _,
                C = (0, l.y)(c.a),
                M = (0, o.useContext)(d.a),
                P = (0, l.x)(h.d, x),
                A = (0, l.x)(v.b, x),
                S = (0, l.x)(v.d, x),
                T = k ? A?.business : S,
                N = (0, l.x)(f.c, x),
                F = (0, l.x)(f.e, x),
                z = (0, l.x)(v.c, x),
                E = k ? F : z;
            if (null == T && null == E) {
                if (N?.extraParams?.resolve_basemap_place === !0 && null == N.businessPreview) {
                    let e;
                    return p[0] !== N.query ? (e = (0, r.jsx)("h2", {
                        className: "mb-1 text-[22px] leading-7 font-medium break-words",
                        children: N.query
                    }), p[0] = N.query, p[1] = e) : e = p[1], e
                }
                return null
            }
            let q = P ? "restricted" : M,
                D = j ?? null;
            return p[2] !== x || p[3] !== N?.query || p[4] !== E ? (t = null != E && (0, r.jsx)(b.c, {
                conversationId: x,
                profile: E,
                name: N?.query
            }), p[2] = x, p[3] = N?.query, p[4] = E, p[5] = t) : t = p[5], p[6] !== T || p[7] !== A?.category || p[8] !== A?.messageId || p[9] !== A?.sourceConversationId || p[10] !== E || p[11] !== C || p[12] !== I ? (n = null == E && null != T && (0, r.jsx)(y.ChatGptLocalBusinessMetadata, {
                business: T,
                isOptimistic: !0,
                showClaimedBusinessTooltip: I,
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
            }), p[6] = T, p[7] = A?.category, p[8] = A?.messageId, p[9] = A?.sourceConversationId, p[10] = E, p[11] = C, p[12] = I, p[13] = n) : n = p[13], p[14] !== D || p[15] !== t || p[16] !== n ? (s = (0, r.jsxs)(m.b, {
                value: D,
                children: [t, n]
            }), p[14] = D, p[15] = t, p[16] = n, p[17] = s) : s = p[17], p[18] !== q || p[19] !== s ? (u = (0, r.jsx)(d.a, {
                value: q,
                children: s
            }), p[18] = q, p[19] = s, p[20] = u) : u = p[20], u
        }
        n.d(t, {}, {
            a: j,
            b: function(e) {
                let t, n, i = (0, a.c)(18),
                    {
                        conversationId: c,
                        isTranscriptPending: f,
                        turnContext: m,
                        showClaimedBusinessTooltip: h
                    } = e,
                    g = void 0 !== f && f,
                    b = void 0 !== h && h,
                    y = (0, o.useContext)(d.a),
                    v = (0, l.x)(w.e, c),
                    _ = (0, l.x)(w.b, c),
                    k = (0, l.x)(w.d, c),
                    I = (0, o.useContext)(x.a);
                if (_ && !g) return null;
                let C = null;
                if (null != v && "restricted" !== y) {
                    let e, t, n, a = `chatgpt:${c}`;
                    i[0] !== a ? (e = (0, s.Oe)(a), i[0] = a, i[1] = e) : e = i[1], i[2] !== v ? (t = [v], i[2] = v, i[3] = t) : t = i[3], i[4] !== e || i[5] !== t ? (n = (0, r.jsx)(p.a, {
                        conversationId: e,
                        images: t
                    }), i[4] = e, i[5] = t, i[6] = n) : n = i[6], C = n
                } else if (k || g && _) {
                    let e, t;
                    i[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(u.a, {
                        className: "aspect-5/4",
                        "aria-hidden": "true",
                        variant: "prominent"
                    }), i[7] = e) : e = i[7], i[8] !== I ? (t = (0, r.jsx)("div", {
                        className: "-mx-6 mb-5",
                        children: (0, r.jsx)("div", {
                            ref: I,
                            "data-entity-photos": !0,
                            children: e
                        })
                    }), i[8] = I, i[9] = t) : t = i[9], C = t
                }
                return i[10] !== c || i[11] !== g || i[12] !== b || i[13] !== m ? (t = (0, r.jsx)(j, {
                    conversationId: c,
                    isTranscriptPending: g,
                    turnContext: m,
                    showClaimedBusinessTooltip: b
                }), i[10] = c, i[11] = g, i[12] = b, i[13] = m, i[14] = t) : t = i[14], i[15] !== C || i[16] !== t ? (n = (0, r.jsxs)(r.Fragment, {
                    children: [C, t]
                }), i[15] = C, i[16] = t, i[17] = n) : n = i[17], n
            }
        })
    }),
    LQio: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: r
        })
    }),
    H0jo: (function(e, t, n) {
        var r = n("iTtm"),
            a = n("rKAs"),
            i = n("SqqO"),
            l = n("OWtl"),
            s = n("fzVa"),
            o = n("Nayr"),
            u = n("tZ3A"),
            d = n("dQRk"),
            c = n("rxj0"),
            f = n("TJEh"),
            p = n("FRPb");
        let m = (0, r.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null != e && n(u.a, e) && null == n(p.b, e) && n(u.c, e)?.businessProfile == null && n(u.c, e)?.extraParams?.resolve_basemap_place !== !0 ? n(d.cb, e) : null
            }),
            h = (0, r.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(p.b, e), l = n(d.L, e);
                return null != l && Object.values(l).some(t => null != t.message && (0, o.c)(t.message).some((t, l) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (n(u.a, e) || (0, f.i)(r?.category ?? null))) && (!n(c.d, e) || (0, a.u)(t, l).some(e => !(0, i.d)(e.src)))))
            }),
            g = (0, r.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e) return null;
                let r = n(p.b, e);
                if (n(c.d, e)) return null;
                let a = n(u.b, e),
                    i = null == r ? null : (0, f.f)(r.business),
                    l = a ?? (null == i ? null : {
                        id: i,
                        src: i,
                        status: "completed",
                        type: "generated-image"
                    });
                if (null == l) return null;
                let o = n(s.b).data?.age_status;
                return "over_18" === o || "unsure" === o ? l : null
            }),
            b = (0, r.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t;
                return (n(u.a, e) || null != n(p.b, e)) && (0, d.zb)(n(d._, e)) && !n(h, e) && null == n(g, e)
            }),
            y = (0, r.d)(l.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(h, e) || null != n(g, e) || n(b, e)
            });
        n.d(t, {}, {
            a: y,
            b: h,
            c: m,
            d: b,
            e: g
        })
    }),
    vxGj: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("on57");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, a.c)(9),
                    {
                        count: l,
                        activeIndex: s,
                        getPageLabel: o,
                        onSelect: u
                    } = e;
                if (n[0] !== s || n[1] !== l || n[2] !== o || n[3] !== u) {
                    let e;
                    n[5] !== s || n[6] !== o || n[7] !== u ? (e = (e, t) => (0, r.jsx)("button", {
                        className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                        type: "button",
                        "aria-current": t === s ? "true" : void 0,
                        "aria-label": o(t),
                        onClick: () => u(t),
                        children: (0, r.jsx)("span", {
                            className: (0, i.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === s ? "w-3 opacity-100" : "w-1 opacity-40")
                        })
                    }, t), n[5] = s, n[6] = o, n[7] = u, n[8] = e) : e = n[8], t = (0, r.jsx)("div", {
                        className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                        children: Array.from({
                            length: l
                        }, e)
                    }), n[0] = s, n[1] = l, n[2] = o, n[3] = u, n[4] = t
                } else t = n[4];
                return t
            }
        })
    }),
    nUGc: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: r
        })
    }),
    msI5: (function(e, t, n) {
        var r = n("ABep"),
            a = n("rKAs"),
            i = n("zd8w"),
            l = n("G6mJ"),
            s = n("Lydu");
        let o = (0, i.createContext)(null);

        function u(e) {
            return e?.type === "codexDirective" && e.name === a.a && !0 === e.block
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t, n, a, i) {
                let o, d = e.findIndex(e => "space" !== e.type),
                    c = e[d],
                    f = c?.type === "heading" && (1 === c.depth || 2 === c.depth) && "string" == typeof c.text && c.text.trim() === a.trim() ? e.slice(d + 1) : e,
                    p = f.filter(e => "space" !== e.type),
                    m = e => u(e) ? (0, l.a)(e.attributes, n)?.reference : void 0,
                    h = p.at(-1);
                i && u(h) && !m(h) && p.pop();
                let g = p.findIndex(e => m(e)?.name === "ledger_spend_by_category_recent_transactions");
                g >= 0 ? o = p[g - 1] : i && m(p.at(-2))?.name === "ledger_spend_by_category_detail" && (o = p.at(-1));
                let b = function(e) {
                    if (e?.type === "heading" && 3 === e.depth) return e.tokens;
                    if (e?.type === "paragraph" && e.tokens?.length === 1) {
                        let t = e.tokens[0];
                        return t?.type === "strong" ? t.tokens : void 0
                    }
                }(o);
                if (!o || !b) return t(f);
                let y = f.indexOf(o);
                return [...t(f.slice(0, y)), (0, r.jsx)("h3", {
                    className: `${s.a.Paragraph} font-semibold`,
                    style: {
                        fontSize: "var(--text-lg)",
                        lineHeight: "1.625rem"
                    },
                    children: t(b)
                }, "spending-recent-transactions"), ...t(f.slice(y + 1))]
            }
        })
    }),
    Yq7Q: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            i = n("on57"),
            l = n("ygO2");

        function s(e) {
            e.currentTarget.blur()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, u, d, c, f, p, m, h, g, b, y, v, x = (0, a.c)(30);
                x[0] !== e ? ({
                    appearance: u,
                    controlSize: d,
                    children: t,
                    className: n,
                    iconOnly: c,
                    ...o
                } = e, x[0] = e, x[1] = t, x[2] = n, x[3] = o, x[4] = u, x[5] = d, x[6] = c) : (t = x[1], n = x[2], o = x[3], u = x[4], d = x[5], c = x[6]);
                let w = void 0 === d ? "default" : d,
                    j = void 0 !== c && c,
                    _ = "blurred" === (void 0 === u ? "compact" : u);
                if (x[7] !== n || x[8] !== w || x[9] !== j || x[10] !== _ || x[11] !== o) {
                    let e = (0, i.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                    _ && j ? e = (0, i.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === w ? "size-9" : "size-10") : _ && (e = (0, i.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === w ? "h-9" : "h-10")), f = l.a, p = o, m = "secondary", h = _ ? "full" : "default", g = _ ? "default" : "icon", b = (0, i.b)(e, n), x[7] = n, x[8] = w, x[9] = j, x[10] = _, x[11] = o, x[12] = f, x[13] = p, x[14] = m, x[15] = h, x[16] = g, x[17] = b
                } else f = x[12], p = x[13], m = x[14], h = x[15], g = x[16], b = x[17];
                return x[18] !== t || x[19] !== j || x[20] !== _ ? (y = _ && j ? (0, r.jsx)("span", {
                    className: "flex size-9 items-center justify-center rounded-full bg-media-background/45 backdrop-blur-md group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60",
                    children: t
                }) : t, x[18] = t, x[19] = j, x[20] = _, x[21] = y) : y = x[21], x[22] !== f || x[23] !== p || x[24] !== m || x[25] !== h || x[26] !== g || x[27] !== b || x[28] !== y ? (v = (0, r.jsx)(f, {
                    ...p,
                    color: m,
                    radius: h,
                    size: g,
                    className: b,
                    onPointerUp: s,
                    children: y
                }), x[22] = f, x[23] = p, x[24] = m, x[25] = h, x[26] = g, x[27] = b, x[28] = y, x[29] = v) : v = x[29], v
            }
        })
    }),
    SUhA: (function(e, t, n) {
        var r = n("QosV"),
            a = n("irkb"),
            i = n("iTtm"),
            l = n("zd8w"),
            s = n("tl5a"),
            o = n("CBsD"),
            u = n("kfGJ"),
            d = n("gTKF"),
            c = n("zHp1");
        n.d(t, {}, {
            a: function(e) {
                let t, n, f, p, m, h, g, b, y = (0, r.c)(38),
                    {
                        src: v,
                        conversationId: x,
                        hostId: w,
                        imageAssetResolver: j,
                        shouldLoadFileDataUrl: _
                    } = e,
                    k = (0, a.c)(),
                    I = (0, i.x)(s.E, x),
                    C = w ?? I ?? u.a,
                    M = (0, u.c)(C);
                y[0] !== x ? (t = null == x ? null : {
                    kind: "app-server",
                    conversationId: x
                }, y[0] = x, y[1] = t) : t = y[1];
                let P = (0, i.x)(d.threadExecutorTargetByThread$, t),
                    A = P?.hostId === C ? P.environmentId : void 0,
                    [S, T] = (0, l.useState)(null);
                y[2] !== v ? (n = v.trim(), y[2] = v, y[3] = n) : n = y[3];
                let N = n.length > 0,
                    F = N && (0, c.h)(v) ? v : "",
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
                        refetch: K,
                        deleted: W
                    } = (0, c.k)(F, j);
                y[4] !== N || y[5] !== M.id || y[6] !== M.kind || y[7] !== C || y[8] !== v ? (f = N ? (0, o.b)(v) : null, "local" === M.kind && M.id, p = null, y[4] = N, y[5] = M.id, y[6] = M.kind, y[7] = C, y[8] = v, y[9] = f, y[10] = p) : (f = y[9], p = y[10]);
                let H = p,
                    U = S?.src === v && S.environmentId === A ? S : null,
                    Q = U?.dataUrl ?? null,
                    V = N ? E ?? H ?? (null != f || F ? Q : v) : null;
                y[11] !== f || y[12] !== x || y[13] !== H || y[14] !== A || y[15] !== C || y[16] !== k || y[17] !== _ || y[18] !== v ? (m = () => {
                    if (null == f || null != H && !_) return;
                    let e = !1;
                    return T({
                        src: v,
                        dataUrl: null,
                        environmentId: A,
                        isLoading: !0
                    }), (0, o.e)(f, C, k, void 0, x, A).then(t => {
                        e || T({
                            src: v,
                            dataUrl: t,
                            environmentId: A,
                            isLoading: !1
                        })
                    }), () => {
                        e = !0
                    }
                }, h = [f, x, H, A, C, k, _, v], y[11] = f, y[12] = x, y[13] = H, y[14] = A, y[15] = C, y[16] = k, y[17] = _, y[18] = v, y[19] = m, y[20] = h) : (m = y[19], h = y[20]), (0, l.useEffect)(m, h), y[21] !== z || y[22] !== Q || y[23] !== v ? (g = z ?? Q ?? (v.startsWith("data:image/") ? v : null), y[21] = z, y[22] = Q, y[23] = v, y[24] = g) : g = y[24];
                let Z = z ?? Q ?? V,
                    $ = q || null != f && null == H && (null == U || U.isLoading),
                    J = !!F && D;
                return y[25] !== W || y[26] !== O || y[27] !== B || y[28] !== G || y[29] !== R || y[30] !== L || y[31] !== V || y[32] !== K || y[33] !== g || y[34] !== Z || y[35] !== $ || y[36] !== J ? (b = {
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
                    refetch: K,
                    deleted: W
                }, y[25] = W, y[26] = O, y[27] = B, y[28] = G, y[29] = R, y[30] = L, y[31] = V, y[32] = K, y[33] = g, y[34] = Z, y[35] = $, y[36] = J, y[37] = b) : b = y[37], b
            }
        })
    }),
    jo5I: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var r = n("ABep"),
            a = n("QosV"),
            i = n("slpy"),
            l = n("on57"),
            s = n("iTtm"),
            o = n("zd8w"),
            u = n("Wf1j"),
            d = n("oyxz"),
            c = n("ygO2"),
            f = n("bqtn"),
            p = n("HOLv"),
            m = n("bf6R"),
            h = n("Yq7Q"),
            g = n("Fmx8"),
            b = n("cZk2");
        let y = (0, n("Bbed").a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(596051)]).then(n.bind(n, "drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, r.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function v(e) {
            let t, n = (0, a.c)(3),
                [i, l] = (0, o.useState)(!!e.open);
            return e.open && !i && l(!0), n[0] !== i || n[1] !== e ? (t = i ? (0, r.jsx)(o.Suspense, {
                fallback: (0, r.jsx)(x, {
                    ...e
                }),
                children: (0, r.jsx)(y, {
                    ...e
                })
            }) : null, n[0] = i, n[1] = e, n[2] = t) : t = n[2], t
        }

        function x(e) {
            let t, n, i, l = (0, a.c)(10),
                {
                    open: s,
                    onOpenChange: o,
                    onCloseAutoFocus: u,
                    failed: c
                } = e,
                f = void 0 !== c && c,
                p = !!s;
            return l[0] !== o ? (t = e => o?.(e), l[0] = o, l[1] = t) : t = l[1], l[2] !== f ? (n = f ? (0, r.jsx)(d.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, r.jsx)(d.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), l[2] = f, l[3] = n) : n = l[3], l[4] !== f || l[5] !== u || l[6] !== p || l[7] !== t || l[8] !== n ? (i = (0, r.jsx)(b.a, {
                open: p,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: n
            }), l[4] = f, l[5] = u, l[6] = p, l[7] = t, l[8] = n, l[9] = i) : i = l[9], i
        }
        var w = n("IZUf"),
            j = n("AC0V"),
            _ = n("vjtZ"),
            k = n("s2ZH");
        let I = {
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
            let t, n, m, h, b, y, x, I, C, T, N, F, z, E, q, D, R, L, O, G, B, K, W, H, U, Q, V, Z, $, J = (0, a.c)(89),
                {
                    className: Y,
                    appearance: X,
                    visibility: ee,
                    isSaved: et,
                    isBusy: en,
                    isCheckingStatus: er,
                    selectedFolderId: ea,
                    onToggleFavorite: ei,
                    onSelectFolder: el
                } = e,
                es = void 0 === X ? "media-overlay" : X,
                eo = (0, s.y)(g.c),
                eu = (0, u.a)(),
                [ed, ec] = (0, o.useState)(!1),
                [ef, ep] = (0, o.useState)(!1),
                [em, eh] = (0, o.useState)(!1),
                [eg, eb] = (0, o.useState)(null),
                ey = (0, o.useRef)(null),
                ev = (0, o.useRef)(null),
                ex = en || er;
            J[0] !== eu ? (t = eu.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder",
                description: "Button that opens the Library folder creation dialog for a saved item"
            }), J[0] = eu, J[1] = t) : t = J[1];
            let ew = t;
            if (er) {
                let e;
                J[2] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.checking",
                    defaultMessage: "Checking Favorites status",
                    description: "Accessible status for a bookmark while checking whether the item is already saved"
                }), J[2] = eu, J[3] = e) : e = J[3], n = e
            } else if (et) {
                let e;
                J[4] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.remove",
                    defaultMessage: "Remove from Favorites",
                    description: "Accessible label and tooltip for removing an item from Favorites"
                }), J[4] = eu, J[5] = e) : e = J[5], n = e
            } else {
                let e;
                J[6] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.add",
                    defaultMessage: "Add to Favorites",
                    description: "Accessible label for saving an item to Favorites and opening optional folder selection"
                }), J[6] = eu, J[7] = e) : e = J[7], n = e
            }
            J[8] !== ex || J[9] !== et || J[10] !== ei ? (m = () => {
                ex ? ec(!1) : (eh(!0), ec(!et), ei())
            }, J[8] = ex, J[9] = et, J[10] = ei, J[11] = m) : m = J[11];
            let ej = m;
            J[12] !== es || J[13] !== Y || J[14] !== et || J[15] !== ed || J[16] !== ee ? (h = (0, l.b)("select-none", "always" === ee || "entity-header" === es || "map-card" === es || et || ed ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === es ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], Y), J[12] = es, J[13] = Y, J[14] = et, J[15] = ed, J[16] = ee, J[17] = h) : h = J[17];
            let e_ = ed ? "open" : "closed";
            J[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, J[18] = ef, J[19] = b) : b = J[19], J[20] === Symbol.for("react.memo_cache_sentinel") ? (y = e => {
                e || (ec(!1), eh(!0))
            }, J[20] = y) : y = J[20];
            let ek = !et || ed || em;
            J[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ey.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, J[21] = x) : x = J[21];
            let eI = ex || void 0,
                eC = ex && !ed || void 0,
                eM = !et || ed ? "menu" : void 0,
                eP = !et || ed ? ed : void 0;
            J[22] === Symbol.for("react.memo_cache_sentinel") ? (I = () => eh(!1), C = () => eh(!1), T = () => eh(!1), J[22] = I, J[23] = C, J[24] = T) : (I = J[22], C = J[23], T = J[24]), J[25] !== ej ? (N = e => {
                e.preventDefault(), e.stopPropagation(), ej()
            }, J[25] = ej, J[26] = N) : N = J[26], J[27] !== ex || J[28] !== et || J[29] !== ej ? (F = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? ej() : ex || et || ec(!0))
            }, J[27] = ex, J[28] = et, J[29] = ej, J[30] = F) : F = J[30];
            let eA = et ? j.a : _.a;
            return J[31] !== eA ? (z = (0, r.jsx)(p.a, {
                asset: eA
            }), J[31] = eA, J[32] = z) : z = J[32], J[33] !== es || J[34] !== et || J[35] !== n || J[36] !== eI || J[37] !== eC || J[38] !== eM || J[39] !== eP || J[40] !== N || J[41] !== F || J[42] !== z ? (E = (0, r.jsx)(A, {
                ref: x,
                "aria-label": n,
                "aria-busy": eI,
                "aria-disabled": eC,
                "aria-haspopup": eM,
                "aria-expanded": eP,
                "aria-pressed": et,
                appearance: es,
                onPointerEnter: I,
                onPointerLeave: C,
                onBlur: T,
                onPointerDown: P,
                onClick: N,
                onKeyDown: F,
                children: z
            }), J[33] = es, J[34] = et, J[35] = n, J[36] = eI, J[37] = eC, J[38] = eM, J[39] = eP, J[40] = N, J[41] = F, J[42] = z, J[43] = E) : E = J[43], J[44] !== n || J[45] !== E || J[46] !== ek ? (q = (0, r.jsx)(i.a, {
                content: n,
                disabled: ek,
                children: E
            }), J[44] = n, J[45] = E, J[46] = ek, J[47] = q) : q = J[47], J[48] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, r.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, r.jsx)(d.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), J[48] = D) : D = J[48], J[49] === Symbol.for("react.memo_cache_sentinel") ? (R = () => {
                ec(!1), ep(!0)
            }, L = (0, r.jsx)(p.a, {
                asset: k.a
            }), J[49] = R, J[50] = L) : (R = J[49], L = J[50]), J[51] !== ex || J[52] !== ew ? (O = (0, r.jsx)(c.a, {
                ref: ev,
                "aria-label": ew,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: R,
                children: L
            }), J[51] = ex, J[52] = ew, J[53] = O) : O = J[53], J[54] !== ex || J[55] !== O ? (G = (0, r.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: O
            }), J[54] = ex, J[55] = O, J[56] = G) : G = J[56], J[57] !== ew || J[58] !== G ? (B = (0, r.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [D, (0, r.jsx)(i.a, {
                    content: ew,
                    children: G
                })]
            }), J[57] = ew, J[58] = G, J[59] = B) : B = J[59], J[60] === Symbol.for("react.memo_cache_sentinel") ? (K = () => ev.current?.focus(), J[60] = K) : K = J[60], J[61] !== ex || J[62] !== el || J[63] !== ea ? (W = (0, r.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, r.jsx)(S, {
                    isBusy: ex,
                    selectedFolderId: ea,
                    onSelectFolder: el,
                    focusCreateFolder: K
                })
            }), J[61] = ex, J[62] = el, J[63] = ea, J[64] = W) : W = J[64], J[65] !== ed || J[66] !== eg || J[67] !== q || J[68] !== B || J[69] !== W || J[70] !== b ? (H = (0, r.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: ed,
                onCloseAutoFocus: b,
                onOpenChange: y,
                triggerButton: q,
                children: [B, W]
            }), J[65] = ed, J[66] = eg, J[67] = q, J[68] = B, J[69] = W, J[70] = b, J[71] = H) : H = J[71], J[72] !== et || J[73] !== H || J[74] !== h || J[75] !== e_ ? (U = (0, r.jsx)("div", {
                className: h,
                "data-saved": et,
                "data-state": e_,
                children: H
            }), J[72] = et, J[73] = H, J[74] = h, J[75] = e_, J[76] = U) : U = J[76], J[77] === Symbol.for("react.memo_cache_sentinel") ? (Q = e => {
                e.preventDefault(), ey.current?.focus()
            }, J[77] = Q) : Q = J[77], J[78] !== el || J[79] !== eo.query ? (V = async e => {
                await eo.query.cancel(w.a);
                let t = !1;
                eo.query.setData(w.a, n => (t = null == n, [...(n ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(M))), t && eo.query.invalidate(w.a), await el(e, !0)
            }, J[78] = el, J[79] = eo.query, J[80] = V) : V = J[80], J[81] !== ef || J[82] !== eo.value.accountId || J[83] !== eo.value.userId || J[84] !== V ? (Z = (0, r.jsx)(v, {
                open: ef,
                accountId: eo.value.accountId,
                userId: eo.value.userId,
                directoryId: null,
                onOpenChange: ep,
                onCloseAutoFocus: Q,
                onCreated: V
            }), J[81] = ef, J[82] = eo.value.accountId, J[83] = eo.value.userId, J[84] = V, J[85] = Z) : Z = J[85], J[86] !== U || J[87] !== Z ? ($ = (0, r.jsxs)(r.Fragment, {
                children: [U, Z]
            }), J[86] = U, J[87] = Z, J[88] = $) : $ = J[88], $
        }

        function M(e, t) {
            return e.name.localeCompare(t.name)
        }

        function P(e) {
            e.preventDefault()
        }

        function A(e) {
            let t, n, i, l = (0, a.c)(6);
            return l[0] !== e ? ({
                appearance: t,
                ...n
            } = e, l[0] = e, l[1] = t, l[2] = n) : (t = l[1], n = l[2]), l[3] !== t || l[4] !== n ? (i = "media-overlay" === t ? (0, r.jsx)(h.a, {
                ...n,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, r.jsx)(c.a, {
                ...n,
                ...I[t]
            }), l[3] = t, l[4] = n, l[5] = i) : i = l[5], i
        }

        function S(e) {
            let t, n, i = (0, a.c)(16),
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
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…",
                        description: "Status in the favorite folder menu while personal Library folders load"
                    })
                }), i[0] = e) : e = i[0], e
            }
            if (g && null == p) {
                let e, t, n, a;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), i[1] = e) : e = i[1], i[2] !== l || i[3] !== b ? (t = e => {
                    e.preventDefault(), l(), b()
                }, i[2] = l, i[3] = b, i[4] = t) : t = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(d.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), i[5] = n) : n = i[5], i[6] !== t ? (a = (0, r.jsxs)(r.Fragment, {
                    children: [e, (0, r.jsx)(f.c.Item, {
                        onSelect: t,
                        children: n
                    })]
                }), i[6] = t, i[7] = a) : a = i[7], a
            }
            if (p?.length === 0) {
                let e;
                return i[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet",
                        description: "Empty state in the favorite folder menu; Create folder is still available"
                    })
                }), i[8] = e) : e = i[8], e
            }
            return i[9] !== p || i[10] !== o || i[11] !== c || i[12] !== u ? (t = p?.map(e => (0, r.jsx)(f.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": u === e.id,
                isActive: u === e.id,
                disabled: o,
                onSelect: () => void c({
                    id: e.id,
                    name: e.name,
                    parent_directory_id: e.parent_directory_id
                }, !1),
                children: (0, r.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [(0, r.jsx)(T, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, r.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, r.jsx)(m.Ub, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), i[9] = p, i[10] = o, i[11] = c, i[12] = u, i[13] = t) : t = i[13], i[14] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), i[14] = t, i[15] = n) : n = i[15], n
        }

        function T(e) {
            let t, n, i, s = (0, a.c)(8),
                {
                    imageUrl: u
                } = e,
                [d, c] = (0, o.useState)(null),
                f = null != u && u !== d,
                p = !f && "border border-default bg-surface";
            return s[0] !== p ? (t = (0, l.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), s[0] = p, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (n = f ? (0, r.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => c(u)
            }) : (0, r.jsx)(m.wd, {}), s[2] = u, s[3] = f, s[4] = n) : n = s[4], s[5] !== t || s[6] !== n ? (i = (0, r.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: n
            }), s[5] = t, s[6] = n, s[7] = i) : i = s[7], i
        }
    }),
    IZUf: (function(e, t, n) {
        var r = n("iTtm"),
            a = n("Kwur"),
            i = n("Fmx8");
        let l = (0, r.r)(i.c, e => {
            let {
                scope: t
            } = e;
            return {
                queryKey: ["library-api", t.value.accountId, t.value.userId, "favorite-folders"],
                staleTime: 3e4,
                queryFn: async e => {
                    let {
                        signal: n
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
                        signal: n
                    })).items.filter(e => "directory" === e.kind && !0 !== e.is_root && null == e.direct_share_id && null == e.shared_by && "shared" !== e.access_kind && "mounted" !== e.access_kind && !e.id.startsWith("library:") && !e.id.startsWith("external-") && e.name.trim().length > 0).sort((e, t) => e.name.localeCompare(t.name))
                }
            }
        });
        n.d(t, {}, {
            a: l,
            b: async function(e, t, n) {
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
                        directory_id: n
                    }
                }), await e.queryClient.invalidateQueries({
                    queryKey: ["library-api", e.value.accountId, e.value.userId]
                })
            }
        })
    })
};