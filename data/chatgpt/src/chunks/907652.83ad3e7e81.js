export const __rspack_esm_ids = [907652];
export const __webpack_modules__ = {
    bfX9: (function(e, t, r) {
        r.d(t, {}, {
            a: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
                return !!e?.ownership_state_enabled && (e.ownership?.available_action === t || e.ownership?.available_action === "view_request" && e.ownership.current_request?.kind === t) && !e.profiles.some(e => e.allowed_actions.includes("manage")) && ("claim" === t || !0 === e.is_verified)
            }
        })
    }),
    xAIC: (function(e, t, r) {
        var n = r("ASxG");
        let l = n.object({
                index: n.string().regex(/^\d+$/).transform(Number)
            }).strip(),
            i = n.object({
                marker_text: n.string().trim().min(1).optional(),
                marker_type: n.string().trim().min(1).optional()
            }).strip();
        r.d(t, {}, {
            a: function(e) {
                let t = l.safeParse(e);
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
    G6mJ: (function(e, t, r) {
        var n = r("rKAs"),
            l = r("xAIC");
        r.d(t, {}, {
            a: function(e, t) {
                if (null == t) return null;
                let r = (0, l.a)(e);
                if (null != r) {
                    let e = t[r];
                    return null == e ? null : {
                        index: r,
                        reference: e
                    }
                }
                let i = (0, l.b)(e);
                if (null == i) return null;
                let a = t.findIndex(e => (0, n.l)(e) === i);
                if (-1 === a) return null;
                let s = t[a];
                return null == s ? null : {
                    index: a,
                    reference: s
                }
            }
        })
    }),
    niC2: (function(e, t, r) {
        var n = r("ABep"),
            l = r("QosV"),
            i = r("on57"),
            a = r("zd8w"),
            s = r("Wf1j"),
            o = r("Sm6l"),
            u = r("vxGj"),
            d = r("HOLv"),
            c = r("r21w"),
            f = r("SUhA"),
            p = r("JwGC"),
            h = r("SbOw"),
            m = r("LQio"),
            g = r("Ygex"),
            b = r("p7j6");

        function v(e) {
            let t, r, o, u, d, p, h, m, g = (0, l.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: v,
                    image: y,
                    imageAssetResolver: x,
                    imageNumber: w,
                    imageRef: _,
                    onOpen: j,
                    single: k,
                    presentation: I
                } = e,
                C = (0, s.a)(),
                [S, P] = (0, a.useState)(null),
                [M, A] = (0, a.useState)(null),
                N = null != y.previewSrc && y.previewSrc !== M ? y.previewSrc : y.src;
            g[0] !== b || g[1] !== x || g[2] !== N ? (t = {
                src: N,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = N, g[3] = t) : t = g[3];
            let {
                previewSrc: E
            } = (0, f.a)(t), T = null != v && (null == E || S !== E), F = k && "w-full", B = !k && ("dialog" === I ? "w-2/3" : "max-w-19/20");
            return g[4] !== F || g[5] !== B ? (r = (0, i.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", F, B), g[4] = F, g[5] = B, g[6] = r) : r = g[6], g[7] !== v || g[8] !== y.height || g[9] !== y.width || g[10] !== I || g[11] !== k ? (o = k || "dialog" === I ? void 0 : {
                aspectRatio: null == v ? `${y.width??1}/${y.height??1}` : "5/4"
            }, g[7] = v, g[8] = y.height, g[9] = y.width, g[10] = I, g[11] = k, g[12] = o) : o = g[12], g[13] !== w || g[14] !== C ? (u = C.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: w
            }), g[13] = w, g[14] = C, g[15] = u) : u = g[15], g[16] !== j ? (d = e => j(e.currentTarget), g[16] = j, g[17] = d) : d = g[17], g[18] !== v || g[19] !== y.previewSrc || g[20] !== _ || g[21] !== S || g[22] !== E || g[23] !== T ? (p = null == E ? (0, n.jsx)(c.a, {
                className: "h-full w-full"
            }) : (0, n.jsx)("img", {
                ref: T ? void 0 : _,
                className: (0, i.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == v && S !== E && "opacity-0"),
                src: E,
                alt: "",
                draggable: !1,
                loading: null == v ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => P(E),
                onError: () => A(y.previewSrc ?? null)
            }), g[18] = v, g[19] = y.previewSrc, g[20] = _, g[21] = S, g[22] = E, g[23] = T, g[24] = p) : p = g[24], g[25] !== v || g[26] !== _ || g[27] !== T ? (h = T ? (0, n.jsx)("img", {
                ref: _,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: v,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = v, g[26] = _, g[27] = T, g[28] = h) : h = g[28], g[29] !== h || g[30] !== r || g[31] !== o || g[32] !== u || g[33] !== d || g[34] !== p ? (m = (0, n.jsxs)("button", {
                className: r,
                style: o,
                "aria-label": u,
                type: "button",
                onClick: d,
                children: [p, h]
            }), g[29] = h, g[30] = r, g[31] = o, g[32] = u, g[33] = d, g[34] = p, g[35] = m) : m = g[35], m
        }

        function y(e) {
            let t, r, i, a, o = (0, l.c)(16),
                {
                    conversationId: u,
                    image: d,
                    imageAssetResolver: c,
                    imageNumber: h,
                    onClose: m,
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
            return null == x ? null : (o[4] !== h || o[5] !== y ? (r = y.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: h
            }), o[4] = h, o[5] = y, o[6] = r) : r = o[6], o[7] !== m ? (i = e => {
                e || m()
            }, o[7] = m, o[8] = i) : i = o[8], o[9] !== g || o[10] !== b || o[11] !== v || o[12] !== x || o[13] !== r || o[14] !== i ? (a = (0, n.jsx)(p.a, {
                alt: r,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: i,
                onNextImage: b,
                onPreviousImage: v
            }), o[9] = g, o[10] = b, o[11] = v, o[12] = x, o[13] = r, o[14] = i, o[15] = a) : a = o[15], a)
        }

        function x(e, t) {
            let r = e.children.item(t);
            if (!(r instanceof HTMLElement)) return 0;
            let n = "rtl" === getComputedStyle(e).direction,
                l = e.scrollWidth - e.clientWidth,
                i = r.offsetLeft - (e.clientWidth - r.offsetWidth) / 2;
            return 0 === t ? i = 0 : t === e.children.length - 1 && (i = n ? r.offsetLeft : r.offsetLeft + r.offsetWidth - e.clientWidth), n ? Math.max(-l, Math.min(0, i)) : Math.max(0, Math.min(l, i))
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, f, p, w, _, j, k, I, C, S, P, M, A, N, E, T, F, B, z = (0, l.c)(63),
                    {
                        ref: q,
                        conversationId: R,
                        businessProfileHeader: L,
                        firstPhotoFallbackSrc: D,
                        imageAssetResolver: U,
                        images: G,
                        onOpenImage: O,
                        onArrowClick: H,
                        presentation: W
                    } = e,
                    K = void 0 === W ? "sidebar" : W,
                    Q = (0, s.a)(),
                    $ = (0, a.useContext)(m.a),
                    V = (0, a.useRef)(null),
                    X = (0, a.useRef)(null),
                    J = (0, a.useRef)(null);
                z[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, z[0] = t) : t = z[0];
                let Z = (0, a.useRef)(t);
                z[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => ({
                    getThumbnail: e => Z.current.get(e) ?? null
                }), z[1] = r) : r = z[1], (0, a.useImperativeHandle)(q, r);
                let [Y, ee] = (0, a.useState)(0), [et, er] = (0, a.useState)(null);
                z[2] !== et ? (c = e => e.id === et, z[2] = et, z[3] = c) : c = z[3];
                let en = G.findIndex(c),
                    el = G[en],
                    ei = Math.min(Y, G.length - 1);
                z[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                    let t = V.current;
                    if (null == t) return;
                    let r = x(t, e);
                    X.current = 1 >= Math.abs(t.scrollLeft - r) ? null : r, t.scrollTo({
                        left: r
                    }), ee(e)
                }, z[4] = f) : f = z[4];
                let ea = f;
                z[5] !== G.length ? (p = e => {
                    let t = 0,
                        r = 1 / 0;
                    for (let n = 0; n < G.length; n += 1) {
                        let l = Math.abs(x(e, n) - e.scrollLeft);
                        l < r && (r = l, t = n)
                    }
                    ee(t)
                }, z[5] = G.length, z[6] = p) : p = z[6];
                let es = p,
                    eo = !L && "dialog" !== K && "mb-5";
                z[7] !== eo ? (w = (0, i.b)("-mx-6", eo), z[7] = eo, z[8] = w) : w = z[8];
                let eu = "dialog" === K && "h-56 sm:h-64",
                    ed = "cover" === K && "aspect-3/1",
                    ec = "sidebar" === K && "aspect-5/4";
                z[9] !== eu || z[10] !== ed || z[11] !== ec ? (_ = (0, i.b)("group/photos relative overflow-hidden select-none", eu, ed, ec), z[9] = eu, z[10] = ed, z[11] = ec, z[12] = _) : _ = z[12], z[13] !== Q ? (j = Q.formatMessage({
                    id: "chatgpt.imageGroup.photos",
                    defaultMessage: "Photos",
                    description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
                }), z[13] = Q, z[14] = j) : j = z[14], z[15] !== G.length || z[16] !== Q ? (k = G.length > 1 ? Q.formatMessage({
                    id: "chatgpt.imageGroup.carouselRole",
                    defaultMessage: "carousel",
                    description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
                }) : void 0, z[15] = G.length, z[16] = Q, z[17] = k) : k = z[17], z[18] !== G.length || z[19] !== ea || z[20] !== ei ? (I = e => {
                    if (!(G.length < 2) && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                        e.preventDefault(), e.stopPropagation();
                        let t = "rtl" === getComputedStyle(e.currentTarget).direction,
                            r = e.key === (t ? "ArrowLeft" : "ArrowRight") ? (ei + 1) % G.length : Math.max(0, ei - 1);
                        ea(r);
                        let n = V.current,
                            l = n?.children.item(r);
                        e.target instanceof HTMLButtonElement && e.target.parentElement === n && l instanceof HTMLButtonElement && l.focus({
                            preventScroll: !0
                        })
                    }
                }, z[18] = G.length, z[19] = ea, z[20] = ei, z[21] = I) : I = z[21], z[22] !== es ? (C = e => {
                    let t = e.currentTarget,
                        r = X.current;
                    if (null != r) {
                        1 >= Math.abs(t.scrollLeft - r) && (X.current = null);
                        return
                    }
                    es(t)
                }, S = e => {
                    X.current = null, es(e.currentTarget)
                }, z[22] = es, z[23] = C, z[24] = S) : (C = z[23], S = z[24]), z[25] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
                    X.current = null
                }, M = () => {
                    X.current = null
                }, z[25] = P, z[26] = M) : (P = z[25], M = z[26]);
                let ef = G.map((e, t) => (0, n.jsx)(v, {
                    conversationId: R,
                    fallbackSrc: 0 === t ? D : void 0,
                    image: e,
                    imageAssetResolver: U,
                    imageNumber: t + 1,
                    imageRef: t => {
                        if (null != t) return Z.current.set(e.id, t), () => {
                            Z.current.get(e.id) === t && Z.current.delete(e.id)
                        }
                    },
                    single: 1 === G.length,
                    presentation: K,
                    onOpen: r => {
                        null != O ? O(t) : (J.current = r, er(e.id))
                    }
                }, e.id));
                z[27] !== C || z[28] !== S || z[29] !== P || z[30] !== M || z[31] !== ef ? (A = (0, n.jsx)("div", {
                    ref: V,
                    className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                    onScroll: C,
                    onScrollEnd: S,
                    onPointerDown: P,
                    onWheel: M,
                    children: ef
                }), z[27] = C, z[28] = S, z[29] = P, z[30] = M, z[31] = ef, z[32] = A) : A = z[32], z[33] !== G.length || z[34] !== Q || z[35] !== H || z[36] !== ea || z[37] !== ei ? (N = G.length > 1 ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-has-[:focus-visible]/photos:opacity-100",
                        children: [(0, n.jsx)(o.a, {
                            className: (0, i.b)("group-hover/photos:pointer-events-auto group-has-[:focus-visible]/photos:pointer-events-auto", 0 === ei && "invisible"),
                            "aria-label": Q.formatMessage({
                                id: "chatgpt.imageGroup.previousPhoto",
                                defaultMessage: "Previous photo",
                                description: "Accessible label for the previous photo button in a ChatGPT entity photo carousel"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = Math.max(0, ei - 1);
                                e !== ei && H?.("previous", e), ea(e)
                            },
                            children: (0, n.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: g.a
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
                                let e = (ei + 1) % G.length;
                                e !== ei && H?.("next", e), ea(e)
                            },
                            children: (0, n.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: b.a
                            })
                        })]
                    }), G.length <= 20 ? (0, n.jsx)("div", {
                        className: "absolute inset-x-0 bottom-3 flex justify-center",
                        children: (0, n.jsx)(u.a, {
                            count: G.length,
                            activeIndex: ei,
                            getPageLabel: e => Q.formatMessage({
                                id: "chatgpt.imageGroup.goToPhoto",
                                defaultMessage: "Go to photo {number}",
                                description: "Accessible label for a photo carousel position indicator; number is the one-based photo position"
                            }, {
                                number: e + 1
                            }),
                            onSelect: ea
                        })
                    }) : null]
                }) : null, z[33] = G.length, z[34] = Q, z[35] = H, z[36] = ea, z[37] = ei, z[38] = N) : N = z[38], z[39] !== $ || z[40] !== _ || z[41] !== j || z[42] !== k || z[43] !== I || z[44] !== A || z[45] !== N ? (E = (0, n.jsxs)("div", {
                    ref: $,
                    className: _,
                    "data-entity-photos": !0,
                    "aria-label": j,
                    "aria-roledescription": k,
                    role: "region",
                    onKeyDown: I,
                    children: [A, N]
                }), z[39] = $, z[40] = _, z[41] = j, z[42] = k, z[43] = I, z[44] = A, z[45] = N, z[46] = E) : E = z[46], z[47] !== R || z[48] !== U || z[49] !== G || z[50] !== J || z[51] !== el || z[52] !== en || z[53] !== er ? (T = null != el ? (0, n.jsx)(y, {
                    conversationId: R,
                    image: el,
                    imageAssetResolver: U,
                    imageNumber: en + 1,
                    onClose: () => er(null),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), J.current?.focus()
                    },
                    onPreviousImage: en > 0 ? () => er(G[en - 1].id) : void 0,
                    onNextImage: en < G.length - 1 ? () => er(G[en + 1].id) : void 0
                }) : null, z[47] = R, z[48] = U, z[49] = G, z[50] = J, z[51] = el, z[52] = en, z[53] = er, z[54] = T) : T = z[54], z[55] !== E || z[56] !== T || z[57] !== w ? (F = (0, n.jsxs)("div", {
                    className: w,
                    "data-testid": "chatgpt-image-group-carousel",
                    children: [E, T]
                }), z[55] = E, z[56] = T, z[57] = w, z[58] = F) : F = z[58];
                let ep = F;
                return z[59] !== L || z[60] !== ep || z[61] !== G.length ? (B = L ? (0, n.jsx)(h.b, {
                    ...L,
                    children: G.length > 0 ? ep : null
                }) : ep, z[59] = L, z[60] = ep, z[61] = G.length, z[62] = B) : B = z[62], B
            }
        })
    }),
    NDDl: (function(e, t, r) {
        var n = r("ABep"),
            l = r("QosV"),
            i = r("BolX"),
            a = r("zd8w"),
            s = r("oyxz"),
            o = r("Sm6l"),
            u = r("bf6R"),
            d = r("OWtl"),
            c = r("zHQF"),
            f = r("TUMj"),
            p = r("w7PD"),
            h = r("cGwJ");

        function m(e) {
            let t, r = (0, l.c)(2),
                {
                    nativeUnavailable: i
                } = e;
            return r[0] !== i ? (t = (0, n.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: i ? (0, n.jsx)(c.b, {}) : (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again.",
                    description: "Error after a business profile's chat button or suggested question could not open a new conversation. The user can click the action again."
                })
            }), r[0] = i, r[1] = t) : t = r[1], t
        }

        function g(e) {
            let t, r, a = (0, l.c)(5),
                {
                    conversationId: s,
                    data: o
                } = e,
                u = (0, i.x)(p.b, s);
            if (null == u) return null;
            a[0] !== o ? (t = p.a.safeParse(o).data?.items, a[0] = o, a[1] = t) : t = a[1];
            let d = t;
            return a[2] !== u || a[3] !== d ? (r = d ? (0, n.jsx)(b, {
                chat: u,
                items: d,
                onSelect: u.open
            }) : null, a[2] = u, a[3] = d, a[4] = r) : r = a[4], r
        }

        function b(e) {
            let t, r, i, a = (0, l.c)(13),
                {
                    chat: s,
                    items: d,
                    onSelect: c
                } = e;
            if (a[0] !== s || a[1] !== d || a[2] !== c) {
                let e;
                a[4] !== s || a[5] !== c ? (e = e => (0, n.jsxs)(o.a, {
                    allowShrink: !0,
                    color: "conversationPill",
                    size: "suggestedQuestion",
                    disabled: null != s.pendingId,
                    loading: s.pendingId === e.id,
                    onClick: () => c(e),
                    children: [s.pendingId !== e.id ? (0, n.jsx)(u.Hb, {
                        "aria-hidden": !0
                    }) : null, (0, n.jsx)("span", {
                        className: "min-w-0 text-start break-words whitespace-normal",
                        children: e.label
                    })]
                }, e.id), a[4] = s, a[5] = c, a[6] = e) : e = a[6], t = d.map(e), a[0] = s, a[1] = d, a[2] = c, a[3] = t
            } else t = a[3];
            return a[7] !== s || a[8] !== d ? (r = d.some(e => {
                let {
                    id: t
                } = e;
                return t === s.failedId
            }) ? (0, n.jsx)(m, {
                nativeUnavailable: s.nativeUnavailable
            }) : null, a[7] = s, a[8] = d, a[9] = r) : r = a[9], a[10] !== t || a[11] !== r ? (i = (0, n.jsxs)("div", {
                className: "flex flex-col items-start gap-2.5 pb-4",
                children: [t, r]
            }), a[10] = t, a[11] = r, a[12] = i) : i = a[12], i
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
                let t, r, s, o = (0, l.c)(7),
                    {
                        conversationId: u,
                        actions: c,
                        children: f
                    } = e,
                    h = (0, i.y)(d.a);
                return o[0] !== c || o[1] !== u || o[2] !== h ? (t = () => {
                    let e = h.watch(e => {
                        let {
                            get: t
                        } = e;
                        t(p.b, u)
                    });
                    return h.set(p.b, u, c), () => {
                        h.get(p.b, u) === c && h.set(p.b, u, null), e()
                    }
                }, r = [h, u, c], o[0] = c, o[1] = u, o[2] = h, o[3] = t, o[4] = r) : (t = o[3], r = o[4]), (0, a.useLayoutEffect)(t, r), o[5] !== f ? (s = (0, n.jsx)(n.Fragment, {
                    children: f
                }), o[5] = f, o[6] = s) : s = o[6], s
            },
            b: function(e) {
                let t, r, a, u, d, c = (0, l.c)(15),
                    {
                        conversationId: f
                    } = e,
                    h = (0, i.x)(p.b, f);
                if (h?.startChat == null) return null;
                let g = h.startChat,
                    b = null != h.pendingId,
                    v = h.pendingId === g.id;
                return c[0] !== g || c[1] !== h ? (t = () => h.open(g, "start-chat"), c[0] = g, c[1] = h, c[2] = t) : t = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.startChat",
                    defaultMessage: "Start chat",
                    description: "Button in a business profile header that opens a new conversation with that business’s AI agent."
                }), c[3] = r) : r = c[3], c[4] !== b || c[5] !== v || c[6] !== t ? (a = (0, n.jsx)(o.a, {
                    color: "primary",
                    size: "businessProfileAction",
                    disabled: b,
                    loading: v,
                    onClick: t,
                    children: r
                }), c[4] = b, c[5] = v, c[6] = t, c[7] = a) : a = c[7], c[8] !== g.id || c[9] !== h.failedId || c[10] !== h.nativeUnavailable ? (u = h.failedId === g.id ? (0, n.jsx)(m, {
                    nativeUnavailable: h.nativeUnavailable
                }) : null, c[8] = g.id, c[9] = h.failedId, c[10] = h.nativeUnavailable, c[11] = u) : u = c[11], c[12] !== a || c[13] !== u ? (d = (0, n.jsxs)(n.Fragment, {
                    children: [a, u]
                }), c[12] = a, c[13] = u, c[14] = d) : d = c[14], d
            },
            c: function(e) {
                let t, r = (0, l.c)(5),
                    {
                        conversationId: a,
                        after: s
                    } = e,
                    o = void 0 === s ? "transcript" : s,
                    u = (0, i.x)(p.b, a),
                    d = u?.suggestedQuestions,
                    c = (0, i.x)(d?.length ? h.a : null, a);
                return r[0] !== o || r[1] !== u || r[2] !== c || r[3] !== d ? (t = u && d?.length && c === o ? (0, n.jsx)(b, {
                    chat: u,
                    items: d.map(v),
                    onSelect: e => u.open(e, "suggestion")
                }) : null, r[0] = o, r[1] = u, r[2] = c, r[3] = d, r[4] = t) : t = r[4], t
            },
            d: function(e) {
                let t, r = (0, l.c)(3),
                    {
                        data: i
                    } = e,
                    a = (0, f.d)();
                return r[0] !== i || r[1] !== a ? (t = a?.conversationType === "sidebar" ? (0, n.jsx)(g, {
                    conversationId: a.conversationId,
                    data: i
                }) : null, r[0] = i, r[1] = a, r[2] = t) : t = r[2], t
            }
        })
    }),
    w7PD: (function(e, t, r) {
        var n = r("BolX"),
            l = r("ASxG"),
            i = r("OWtl");
        let a = l.object({
                items: l.array(l.object({
                    id: l.string().trim().min(1),
                    label: l.string().trim().min(1),
                    prefill: l.string().nullish()
                })).min(1)
            }),
            s = (0, n.v)(i.a, e => null, void 0, {
                autoDispose: !0
            });
        r.d(t, {}, {
            a: a,
            b: s
        })
    }),
    FQiC: (function(e, t, r) {
        var n = r("BolX"),
            l = r("zd8w"),
            i = r("Cslg"),
            a = r("OWtl"),
            s = r("tZ3A"),
            o = r("orgn");
        let u = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(s.c, e)?.businessProfile, l = r(o.a, e);
                return {
                    conversationId: e,
                    accountId: r(i.f),
                    userId: r(i.j),
                    profileId: l?.profileId ?? null,
                    identity: JSON.stringify([l?.profileId, l?.source, l?.source === "entity-knowledge" ? null : n ?? null])
                }
            }),
            d = (0, n.j)(a.a, (e, t) => {
                let {
                    signal: r
                } = t;
                return {
                    isOpen$: r(!1),
                    triggerRef: (0, l.createRef)()
                }
            }, {
                autoDispose: !0
            });
        r.d(t, {}, {
            a: d,
            b: u
        })
    }),
    SbOw: (function(e, t, r) {
        var n = r("ABep"),
            l = r("QosV"),
            i = r("on57"),
            a = r("zd8w"),
            s = r("E6P3"),
            o = r("zSQm"),
            u = r("WAdu"),
            d = r("TUMj"),
            c = r("LQio");

        function f(e) {
            let t, r, c = (0, l.c)(7),
                {
                    src: f,
                    overlap: p
                } = e,
                h = void 0 !== p && p,
                m = (0, a.useContext)(u.a),
                g = (0, d.d)();
            c[0] !== m || c[1] !== f || c[2] !== g?.shouldBlockExternalEgress ? (t = f && "restricted" !== m && !g?.shouldBlockExternalEgress ? (0, o.b)(f) : void 0, c[0] = m, c[1] = f, c[2] = g?.shouldBlockExternalEgress, c[3] = t) : t = c[3];
            let b = t;
            return c[4] !== h || c[5] !== b ? (r = b ? (0, n.jsx)(s.a, {
                alt: "",
                src: b,
                fallback: (0, n.jsx)(n.Fragment, {}),
                className: (0, i.b)("size-18 rounded-2xl border-4 border-surface bg-surface", h ? "relative -mt-8 self-start" : "mb-3")
            }, b) : null, c[4] = h, c[5] = b, c[6] = r) : r = c[6], r
        }
        r.d(t, {}, {
            a: f,
            b: function(e) {
                let t, r, s, o = (0, l.c)(10),
                    {
                        children: u,
                        logoUrl: d,
                        logoPrimaryColor: p,
                        photosPending: h
                    } = e,
                    m = (0, a.useContext)(c.a);
                return o[0] !== u || o[1] !== p || o[2] !== h || o[3] !== m ? (t = u ?? (0, n.jsx)("div", {
                    ref: m,
                    "aria-hidden": "true",
                    "data-entity-photos": !0,
                    className: (0, i.b)("-mx-6 bg-text/10", h ? "aspect-5/4" : "aspect-3/1"),
                    style: {
                        backgroundColor: p ?? void 0
                    }
                }), o[0] = u, o[1] = p, o[2] = h, o[3] = m, o[4] = t) : t = o[4], o[5] !== d ? (r = (0, n.jsx)(f, {
                    src: d,
                    overlap: !0
                }), o[5] = d, o[6] = r) : r = o[6], o[7] !== t || o[8] !== r ? (s = (0, n.jsxs)("div", {
                    className: "mb-5 flex flex-col has-[>img]:mb-3",
                    children: [t, r]
                }), o[7] = t, o[8] = r, o[9] = s) : s = o[9], s
            }
        })
    }),
    orgn: (function(e, t, r) {
        var n = r("D7Ms"),
            l = r("BolX"),
            i = r("d0tz"),
            a = r("Cslg"),
            s = r("OWtl"),
            o = r("OMIV"),
            u = r("tZ3A"),
            d = r("Kwur");
        let c = (0, l.q)(s.a, (e, t) => {
                let {
                    get: r
                } = t, l = r(u.c, e), s = l?.entityKnowledgeId, c = r(a.f), f = r(a.j), p = null != s && !l?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(l?.category ?? "") && null != c && null != f && r(o.d, "2778625748");
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
                                [i.$b]: c
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
            f = (0, l.q)(s.a, (e, t) => {
                let {
                    get: r
                } = t, l = r(u.c, e), s = l?.businessProfile, f = r(a.f), p = r(a.j), h = null != s && !l?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(l?.category ?? "") && null != f && null != p && r(o.d, "2778625748");
                if (h && l?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: n,
                        isPending: l
                    } = r(c, e);
                    h = n && !l && null == t
                }
                return {
                    queryKey: ["entity-business-profile", f, p, e, "canonical-business-profile", s?.canonical_id, s?.profile_id],
                    enabled: h,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: h && null != s && null != f ? async e => {
                        let {
                            signal: t
                        } = e, r = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [i.$b]: f
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
            p = (0, l.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(u.c, e);
                if (n?.businessProfile == null && n?.entityKnowledgeId == null || n?.entityKnowledgePending || !["business", "brand", "company", "organization"].includes(n?.category ?? "") || !r(o.d, "2778625748")) return null;
                if (n?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: n,
                        isPending: l
                    } = r(c, e);
                    if (!n || l) return null;
                    if (null != t) return t
                }
                let {
                    data: l,
                    isEnabled: i
                } = r(f, e);
                return i ? l ?? null : null
            }),
            h = (0, l.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(p, e)?.status ?? null
            });
        r.d(t, {}, {
            a: p,
            b: h
        })
    }),
    cGwJ: (function(e, t, r) {
        var n = r("BolX"),
            l = r("rKAs"),
            i = r("IgxH"),
            a = r("OWtl"),
            s = r("CTBG"),
            o = r("iGzJ"),
            u = r("dQRk"),
            d = r("w7PD");

        function c(e, t) {
            return `${e}:${t}`
        }
        let f = (0, n.d)(a.a, (e, t) => {
            let r, {
                get: n
            } = t;
            if ("idle" !== n(u.$, e)) return null;
            let a = n(s.c, e),
                f = n(u.N, e),
                p = !1;
            for (let e of a ?? []) {
                let t;
                if (!e.id || f[e.id]?.blocked) continue;
                let n = (0, o.d)(e);
                if (!n.markdown) continue;
                let a = "finished_successfully" === e.status;
                for (let e of n.contentReferences)
                    if (!(0, l.H)(e)) {
                        if ("client_defined_widget" === e.type && "business_profile_starter_pills" === e.category && d.a.safeParse(e.data).success) return null;
                        a && null == r && ("product_group" === e.type || "products" === e.type) && "number" == typeof e.start_idx && (null == t || e.start_idx < t) && (0, l.y)(e).length > 0 && (t = e.start_idx)
                    } null != t && (r = c(e.id, t)), !a || r || p || (p = (0, i.a)(n.markdown).length > 0)
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
            l = r("QosV"),
            i = r("v1r0"),
            a = r("BolX"),
            s = r("Wf1j"),
            o = r("oyxz"),
            u = r("bfX9"),
            d = r("bqtn"),
            c = r("HOLv"),
            f = r("zSQm"),
            p = r("OWtl"),
            h = r("tZ3A"),
            m = r("KDax"),
            g = r("NDDl"),
            b = r("FQiC"),
            v = r("SbOw"),
            y = r("orgn"),
            x = r("T2J5"),
            w = r("Csob"),
            _ = r("Vp8q"),
            j = r("Ff4E"),
            k = r("iYVU");

        function I() {
            let e, t, r = (0, l.c)(4),
                i = (0, s.a)();
            return r[0] !== i ? (e = i.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), r[0] = i, r[1] = e) : e = r[1], r[2] !== e ? (t = (0, n.jsx)(x.a, {
                className: "ms-1.5",
                label: e,
                showTooltip: !0,
                size: 24
            }), r[2] = e, r[3] = t) : t = r[3], t
        }

        function C(e) {
            let t, r, i, a, s = (0, l.c)(14),
                {
                    conversationId: d,
                    requiresConfirmation: c,
                    status: p,
                    websiteUrl: h,
                    children: b
                } = e;
            if (s[0] !== h) {
                let e = (0, f.a)(h?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? e : null, s[0] = h, s[1] = t
            } else t = s[1];
            let v = t,
                y = p?.chat_target != null && p.header?.start_chat != null;
            return s[2] !== d || s[3] !== y || s[4] !== c || s[5] !== v ? (r = y || null != v ? (0, n.jsxs)("div", {
                className: "-ms-1 mt-4 mb-5 flex flex-wrap items-center gap-2 empty:hidden",
                children: [y ? (0, n.jsx)(g.b, {
                    conversationId: d
                }) : null, null != v ? (0, n.jsx)(m.a, {
                    className: "flex min-h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-default bg-transparent px-5 text-entity-action whitespace-nowrap text-default select-none no-drag only:border-transparent only:bg-primary-solid only:text-primary-solid hover:bg-secondary-ghost-hover only:hover:bg-primary-solid-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: v,
                    initiator: "markdown_link_click",
                    requiresConfirmation: c,
                    appearance: "button",
                    underline: "none",
                    openAsWebsite: !0,
                    children: (0, n.jsx)(o.a, {
                        id: "chatgpt.entity.businessProfile.viewWebsite",
                        defaultMessage: "View website",
                        description: "Button beneath a business name in the entity sidebar that opens the website supplied by its business profile. Use a short action label; no placeholders."
                    })
                }) : null]
            }) : null, s[2] = d, s[3] = y, s[4] = c, s[5] = v, s[6] = r) : r = s[6], s[7] !== d || s[8] !== p ? (i = (0, u.a)(p) ? (0, n.jsx)("div", {
                className: "border-t border-default",
                children: (0, n.jsx)(S, {
                    conversationId: d,
                    status: p
                })
            }) : null, s[7] = d, s[8] = p, s[9] = i) : i = s[9], s[10] !== b || s[11] !== r || s[12] !== i ? (a = (0, n.jsxs)(n.Fragment, {
                children: [r, b, i]
            }), s[10] = b, s[11] = r, s[12] = i, s[13] = a) : a = s[13], a
        }

        function S(e) {
            let t, r, i = (0, l.c)(6),
                {
                    conversationId: s,
                    status: o
                } = e,
                d = (0, a.y)(p.a);
            i[0] !== s || i[1] !== d ? (t = () => {
                if (!(0, u.a)(d.get(y.b, s))) return;
                let e = d.get(b.a, d.get(b.b, s));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, d.set(e.isOpen$, !0)
            }, i[0] = s, i[1] = d, i[2] = t) : t = i[2];
            let c = o?.ownership?.current_request;
            return i[3] !== t || i[4] !== c ? (r = (0, n.jsx)(w.a, {
                onClick: t,
                request: c
            }), i[3] = t, i[4] = c, i[5] = r) : r = i[5], r
        }

        function P(e) {
            return e.trim().length > 0
        }

        function M(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, i, s = (0, l.c)(6),
                    {
                        conversationId: c
                    } = e,
                    f = (0, a.y)(p.a),
                    h = (0, a.x)(y.b, c);
                return (0, u.a)(h, "dispute") ? (s[0] !== c || s[1] !== f ? (t = () => {
                    if (!(0, u.a)(f.get(y.b, c), "dispute")) return;
                    let e = f.get(b.a, f.get(b.b, c));
                    e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
                }, s[0] = c, s[1] = f, s[2] = t) : t = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(o.a, {
                    id: "chatgpt.localBusiness.dispute.action",
                    defaultMessage: "Dispute profile ownership",
                    description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
                }), s[3] = r) : r = s[3], s[4] !== t ? (i = (0, n.jsx)(d.c.Item, {
                    leftIconAsset: k.a,
                    onSelect: t,
                    children: r
                }), s[4] = t, s[5] = i) : i = s[5], i) : null
            },
            b: function(e) {
                let t, r = (0, l.c)(4),
                    {
                        conversationId: i
                    } = e,
                    s = (0, a.x)(y.a, i),
                    o = (0, a.x)(h.c, i);
                if (s?.source !== "entity-knowledge" || o?.businessProfile != null) return null;
                let u = o?.shouldBlockExternalEgress;
                return r[0] !== i || r[1] !== s.status || r[2] !== u ? (t = (0, n.jsx)(C, {
                    conversationId: i,
                    requiresConfirmation: u,
                    status: s.status
                }), r[0] = i, r[1] = s.status, r[2] = u, r[3] = t) : t = r[3], t
            },
            c: function(e) {
                let t, r, u, d, f, p, m, g, b, x, k, S, A = (0, l.c)(52),
                    {
                        conversationId: N,
                        profile: E,
                        inSidebar: T,
                        name: F
                    } = e,
                    B = void 0 !== T && T,
                    z = (0, s.a)(),
                    q = (0, a.x)(y.b, N),
                    R = (0, a.x)(h.c, N),
                    L = (0, a.x)(y.a, N),
                    D = L?.source === "entity-knowledge" && L.profileId !== E.profile_id ? null : E;
                A[0] !== D?.categories || A[1] !== D?.categories.find ? (t = D?.categories.find(P), A[0] = D?.categories, A[1] = D?.categories.find, A[2] = t) : t = A[2];
                let U = t;
                if (A[3] !== E || A[4] !== U || A[5] !== N || A[6] !== B || A[7] !== z || A[8] !== F || A[9] !== R?.businessProfile?.canonical_id || A[10] !== R?.query || A[11] !== R?.shouldBlockExternalEgress || A[12] !== D?.delivery_policy || A[13] !== D?.display_name || A[14] !== D?.logo_url || A[15] !== D?.returns_policy || A[16] !== D?.website_url || A[17] !== q) {
                    let e, t, l = M(D?.delivery_policy, i.b),
                        a = D?.returns_policy;
                    A[27] !== a ? (e = M(a, i.d), A[27] = a, A[28] = e) : e = A[28];
                    let s = e,
                        h = B && R?.businessProfile?.canonical_id === E.canonical_id;
                    A[29] !== h || A[30] !== R?.shouldBlockExternalEgress || A[31] !== D?.logo_url ? (b = h || R?.shouldBlockExternalEgress ? null : (0, n.jsx)(v.a, {
                        src: D?.logo_url
                    }), A[29] = h, A[30] = R?.shouldBlockExternalEgress, A[31] = D?.logo_url, A[32] = b) : b = A[32];
                    let y = D?.display_name ?? F ?? R?.query;
                    A[33] !== q?.is_verified ? (t = q?.is_verified ? (0, n.jsx)(I, {}) : null, A[33] = q?.is_verified, A[34] = t) : t = A[34], A[35] !== y || A[36] !== t ? (x = (0, n.jsxs)("h2", {
                        className: "text-card-title break-words",
                        children: [y, t]
                    }), A[35] = y, A[36] = t, A[37] = x) : x = A[37], A[38] !== U ? (u = U ? (0, n.jsx)("div", {
                        className: "text-lg leading-6 font-normal break-words text-default",
                        children: U
                    }) : null, A[38] = U, A[39] = u) : u = A[39], r = C, d = N, f = R?.shouldBlockExternalEgress, p = q, m = D?.website_url, g = null == l && null == s ? null : (0, n.jsxs)("div", {
                        className: "divide-y divide-border border-t border-default",
                        children: [null != l ? (0, n.jsxs)(w.f, {
                            icon: (0, n.jsx)(c.a, {
                                asset: j.a
                            }),
                            children: ["none" === l.delivery ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.noDelivery",
                                defaultMessage: "Delivery unavailable",
                                description: "Merchant policy in the business sidebar when delivery is not offered"
                            }) : null, "paid" === l.delivery ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.paidDelivery",
                                defaultMessage: "Paid delivery",
                                description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                            }) : null, "free" === l.delivery && "all_orders" === l.scope ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.freeDelivery",
                                defaultMessage: "Free delivery on all orders",
                                description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                            }) : null, "free" === l.delivery && "minimum_order" === l.scope ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.deliveryMinimum",
                                defaultMessage: "Free delivery over {amount}",
                                description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                                values: {
                                    amount: z.formatNumber(Number(l.minimum_order_amount), {
                                        style: "currency",
                                        currency: l.currency,
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 20
                                    })
                                }
                            }) : null]
                        }) : null, null != s ? (0, n.jsxs)(w.f, {
                            icon: (0, n.jsx)(c.a, {
                                asset: _.a
                            }),
                            children: ["none" === s.returns ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.noReturns",
                                defaultMessage: "Returns not accepted",
                                description: "Merchant policy in the business sidebar when returns are not accepted"
                            }) : null, "none" !== s.returns && "window" in s ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.unlimitedReturns",
                                defaultMessage: "{kind, select, free {Free returns with no time limit} other {Returns with no time limit, fees apply}}",
                                description: "Return policy summary for customers in the business sidebar. Returns have no time limit. The kind value is free when no return fees apply, or fees otherwise.",
                                values: {
                                    kind: s.returns
                                }
                            }) : null, "none" !== s.returns && "window_days" in s ? (0, n.jsx)(o.a, {
                                id: "chatgpt.entity.businessProfile.returnWindow",
                                defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}}} other {Returns within {days, plural, one {# day} other {# days}}, fees apply}}",
                                description: "Merchant policy in the business sidebar showing the return window from delivery and whether return fees apply",
                                values: {
                                    kind: s.returns,
                                    days: s.window_days
                                }
                            }) : null]
                        }) : null]
                    }), A[3] = E, A[4] = U, A[5] = N, A[6] = B, A[7] = z, A[8] = F, A[9] = R?.businessProfile?.canonical_id, A[10] = R?.query, A[11] = R?.shouldBlockExternalEgress, A[12] = D?.delivery_policy, A[13] = D?.display_name, A[14] = D?.logo_url, A[15] = D?.returns_policy, A[16] = D?.website_url, A[17] = q, A[18] = r, A[19] = u, A[20] = d, A[21] = f, A[22] = p, A[23] = m, A[24] = g, A[25] = b, A[26] = x
                } else r = A[18], u = A[19], d = A[20], f = A[21], p = A[22], m = A[23], g = A[24], b = A[25], x = A[26];
                return A[40] !== r || A[41] !== d || A[42] !== f || A[43] !== p || A[44] !== m || A[45] !== g ? (k = (0, n.jsx)(r, {
                    conversationId: d,
                    requiresConfirmation: f,
                    status: p,
                    websiteUrl: m,
                    children: g
                }), A[40] = r, A[41] = d, A[42] = f, A[43] = p, A[44] = m, A[45] = g, A[46] = k) : k = A[46], A[47] !== u || A[48] !== k || A[49] !== b || A[50] !== x ? (S = (0, n.jsxs)(n.Fragment, {
                    children: [b, x, u, k]
                }), A[47] = u, A[48] = k, A[49] = b, A[50] = x, A[51] = S) : S = A[51], S
            }
        })
    }),
    wFiG: (function(e, t, r) {
        var n = r("ABep"),
            l = r("QosV"),
            i = r("EA6X"),
            a = r("BolX"),
            s = r("d0tz"),
            o = r("zd8w"),
            u = r("DcH0"),
            d = r("WAdu"),
            c = r("OWtl"),
            f = r("tZ3A"),
            p = r("niC2"),
            h = r("TUMj"),
            m = r("rxj0"),
            g = r("xof2"),
            b = r("SZ0w"),
            v = r("Csob"),
            y = r("FRPb"),
            x = r("LQio"),
            w = r("H0jo");

        function _(e) {
            let t, r, s, u, p = (0, l.c)(21),
                {
                    conversationId: x,
                    isTranscriptPending: w,
                    turnContext: _,
                    showClaimedBusinessTooltip: j
                } = e,
                k = void 0 !== w && w,
                I = void 0 !== j && j,
                C = (0, a.y)(c.a),
                S = (0, o.useContext)(d.a),
                P = (0, a.x)(m.d, x),
                M = (0, a.x)(y.b, x),
                A = (0, a.x)(y.d, x),
                N = k ? M?.business : A,
                E = (0, a.x)(f.c, x),
                T = (0, a.x)(f.e, x),
                F = (0, a.x)(y.c, x),
                B = k ? T : F;
            if (null == N && null == B) {
                if (E?.extraParams?.resolve_basemap_place === !0 && null == E.businessPreview) {
                    let e;
                    return p[0] !== E.query ? (e = (0, n.jsx)("h2", {
                        className: "mb-1 text-[22px] leading-7 font-medium break-words",
                        children: E.query
                    }), p[0] = E.query, p[1] = e) : e = p[1], e
                }
                return null
            }
            let z = P ? "restricted" : S,
                q = _ ?? null;
            return p[2] !== x || p[3] !== E?.query || p[4] !== B ? (t = null != B && (0, n.jsx)(b.c, {
                conversationId: x,
                profile: B,
                inSidebar: !0,
                name: E?.query
            }), p[2] = x, p[3] = E?.query, p[4] = B, p[5] = t) : t = p[5], p[6] !== N || p[7] !== M?.category || p[8] !== M?.messageId || p[9] !== M?.sourceConversationId || p[10] !== B || p[11] !== C || p[12] !== I ? (r = null == B && null != N && (0, n.jsx)(v.ChatGptLocalBusinessMetadata, {
                business: N,
                isOptimistic: !0,
                showClaimedBusinessTooltip: I,
                onAction: e => {
                    (0, g.b)(C, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: N.id.trim() || void 0,
                        entityCategory: M?.category ?? void 0,
                        messageId: M?.messageId,
                        assistantMessageId: M?.messageId,
                        conversationId: M?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), p[6] = N, p[7] = M?.category, p[8] = M?.messageId, p[9] = M?.sourceConversationId, p[10] = B, p[11] = C, p[12] = I, p[13] = r) : r = p[13], p[14] !== q || p[15] !== t || p[16] !== r ? (s = (0, n.jsxs)(h.b, {
                value: q,
                children: [t, r]
            }), p[14] = q, p[15] = t, p[16] = r, p[17] = s) : s = p[17], p[18] !== z || p[19] !== s ? (u = (0, n.jsx)(d.a, {
                value: z,
                children: s
            }), p[18] = z, p[19] = s, p[20] = u) : u = p[20], u
        }
        r.d(t, {}, {
            a: _,
            b: function(e) {
                let t, r, i, c = (0, l.c)(25),
                    {
                        conversationId: f,
                        isTranscriptPending: h,
                        turnContext: m,
                        showClaimedBusinessTooltip: g
                    } = e,
                    b = void 0 !== h && h,
                    v = void 0 !== g && g,
                    y = (0, o.useContext)(d.a),
                    j = (0, a.x)(w.a, f),
                    k = (0, a.x)(w.b, "restricted" === y ? null : f),
                    I = (0, a.x)(w.i, f),
                    C = (0, a.x)(w.d, f),
                    S = (0, a.x)(w.f, f),
                    P = (0, o.useContext)(x.a);
                if (C && !b) return null;
                c[0] !== y || c[1] !== I || c[2] !== k ? (t = (0, w.g)(k, null != I && "restricted" !== y ? [I] : []), c[0] = y, c[1] = I, c[2] = k, c[3] = t) : t = c[3];
                let M = t,
                    A = null;
                if (M.length > 0 || null != j) {
                    let e, t, r, l = `chatgpt:${f}`;
                    c[4] !== l ? (e = (0, s.Re)(l), c[4] = l, c[5] = e) : e = c[5], c[6] !== b || c[7] !== j ? (t = j && b ? {
                        ...j,
                        photosPending: !0
                    } : j, c[6] = b, c[7] = j, c[8] = t) : t = c[8];
                    let i = k?.isCover ? "cover" : "sidebar";
                    c[9] !== M || c[10] !== e || c[11] !== t || c[12] !== i ? (r = (0, n.jsx)(p.a, {
                        conversationId: e,
                        images: M,
                        businessProfileHeader: t,
                        presentation: i
                    }), c[9] = M, c[10] = e, c[11] = t, c[12] = i, c[13] = r) : r = c[13], A = r
                } else if (S || b && C) {
                    let e, t;
                    c[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                        className: "aspect-5/4",
                        "aria-hidden": "true",
                        variant: "prominent"
                    }), c[14] = e) : e = c[14], c[15] !== P ? (t = (0, n.jsx)("div", {
                        className: "-mx-6 mb-5",
                        children: (0, n.jsx)("div", {
                            ref: P,
                            "data-entity-photos": !0,
                            children: e
                        })
                    }), c[15] = P, c[16] = t) : t = c[16], A = t
                }
                return c[17] !== f || c[18] !== b || c[19] !== v || c[20] !== m ? (r = (0, n.jsx)(_, {
                    conversationId: f,
                    isTranscriptPending: b,
                    turnContext: m,
                    showClaimedBusinessTooltip: v
                }), c[17] = f, c[18] = b, c[19] = v, c[20] = m, c[21] = r) : r = c[21], c[22] !== A || c[23] !== r ? (i = (0, n.jsxs)(n.Fragment, {
                    children: [A, r]
                }), c[22] = A, c[23] = r, c[24] = i) : i = c[24], i
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
        var n = r("BolX"),
            l = r("rKAs"),
            i = r("SqqO"),
            a = r("OWtl"),
            s = r("fzVa"),
            o = r("iGzJ"),
            u = r("tZ3A"),
            d = r("dQRk"),
            c = r("rxj0"),
            f = r("orgn"),
            p = r("TJEh"),
            h = r("FRPb");
        let m = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != e && r(u.a, e) && null == r(h.b, e) && r(u.c, e)?.businessProfile == null && r(u.c, e)?.extraParams?.resolve_basemap_place !== !0 ? r(d.db, e) : null
            }),
            g = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(h.b, e), a = r(d.M, e);
                return null != a && Object.values(a).some(t => null != t.message && (0, o.c)(t.message).some((t, a) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (r(u.a, e) || (0, p.i)(n?.category ?? null))) && (!r(c.d, e) || (0, l.u)(t, a).some(e => !(0, i.d)(e.src)))))
            }),
            b = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(u.c, e);
                if (n?.businessProfile == null) return null;
                let l = n.businessProfile,
                    i = r(f.a, e);
                if (i?.source === "entity-knowledge" && i.profileId !== l.profile_id) return null;
                let a = n.shouldBlockExternalEgress || n.sourceTurnContext?.shouldBlockExternalEgress || r(c.d, e);
                return {
                    logoUrl: a ? null : l.logo_url ?? null,
                    logoPrimaryColor: l.logo_primary_color,
                    photosPending: (0, d.Ab)(r(d.$, e)) || !a && !!(l.cover_image_url || l.photo_urls?.length || r(x, e)) && r(s.b).isLoading,
                    coverUrl: a ? null : l.cover_image_url,
                    photoUrls: a ? null : l.photo_urls
                }
            }),
            v = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(b, e);
                if (!n || !n.coverUrl && !n.photoUrls?.length) return null;
                let l = r(s.b).data?.age_status;
                if ("over_18" !== l && "unsure" !== l) return null;
                let i = n.coverUrl && URL.parse(n.coverUrl)?.protocol === "https:" ? n.coverUrl : null,
                    a = new Set(i ? [i] : n.photoUrls?.filter(e => URL.parse(e)?.protocol === "https:"));
                return a.size > 0 ? {
                    isCover: null != i,
                    urls: a
                } : null
            });

        function y(e, t) {
            return [e.src, e.previewSrc, e.searchResult?.originalSrc, e.searchResult?.contentSrc].some(e => null != e && t.has(e))
        }
        let x = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(h.b, e);
                if (r(c.d, e)) return null;
                let l = r(u.b, e),
                    i = null == n ? null : (0, p.f)(n.business);
                return l ?? (null == i ? null : {
                    id: i,
                    src: i,
                    status: "completed",
                    type: "generated-image"
                })
            }),
            w = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(x, e);
                if (null == n) return null;
                let l = r(s.b).data?.age_status;
                return "over_18" === l || "unsure" === l ? n : null
            }),
            _ = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return (r(u.a, e) || null != r(h.b, e)) && (0, d.Ab)(r(d.$, e)) && !r(g, e) && null == r(w, e)
            }),
            j = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(g, e) || null != r(b, e) || null != r(w, e) || r(_, e)
            });
        r.d(t, {}, {
            a: b,
            b: v,
            c: j,
            d: g,
            e: m,
            f: _,
            g: function(e, t) {
                if (null == e) return t;
                let r = Array.from(e.urls, e => ({
                    id: e,
                    src: e,
                    type: "generated-image",
                    status: "completed"
                }));
                return e.isCover ? r : [...r, ...t.filter(t => !y(t, e.urls))]
            },
            h: y,
            i: w
        })
    }),
    vxGj: (function(e, t, r) {
        var n = r("ABep"),
            l = r("QosV"),
            i = r("on57");
        r.d(t, {}, {
            a: function(e) {
                let t, r = (0, l.c)(9),
                    {
                        count: a,
                        activeIndex: s,
                        getPageLabel: o,
                        onSelect: u
                    } = e;
                if (r[0] !== s || r[1] !== a || r[2] !== o || r[3] !== u) {
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
                            length: a
                        }, e)
                    }), r[0] = s, r[1] = a, r[2] = o, r[3] = u, r[4] = t
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
    msI5: (function(e, t, r) {
        var n = r("ABep"),
            l = r("rKAs"),
            i = r("zd8w"),
            a = r("G6mJ"),
            s = r("NDV0");
        let o = (0, i.createContext)(null);

        function u(e) {
            return e?.type === "codexDirective" && e.name === l.a && !0 === e.block
        }
        r.d(t, {}, {
            a: o,
            b: function(e, t, r, l, i) {
                let o, d = e.findIndex(e => "space" !== e.type),
                    c = e[d],
                    f = c?.type === "heading" && (1 === c.depth || 2 === c.depth) && "string" == typeof c.text && c.text.trim() === l.trim() ? e.slice(d + 1) : e,
                    p = f.filter(e => "space" !== e.type),
                    h = e => u(e) ? (0, a.a)(e.attributes, r)?.reference : void 0,
                    m = p.at(-1);
                i && u(m) && !h(m) && p.pop();
                let g = p.findIndex(e => h(e)?.name === "ledger_spend_by_category_recent_transactions");
                g >= 0 ? o = p[g - 1] : i && h(p.at(-2))?.name === "ledger_spend_by_category_detail" && (o = p.at(-1));
                let b = function(e) {
                    if (e?.type === "heading" && 3 === e.depth) return e.tokens;
                    if (e?.type === "paragraph" && e.tokens?.length === 1) {
                        let t = e.tokens[0];
                        return t?.type === "strong" ? t.tokens : void 0
                    }
                }(o);
                if (!o || !b) return t(f);
                let v = f.indexOf(o);
                return [...t(f.slice(0, v)), (0, n.jsx)("h3", {
                    className: `${s.a.Paragraph} font-semibold`,
                    style: {
                        fontSize: "var(--text-lg)",
                        lineHeight: "1.625rem"
                    },
                    children: t(b)
                }, "spending-recent-transactions"), ...t(f.slice(v + 1))]
            }
        })
    }),
    Yq7Q: (function(e, t, r) {
        var n = r("ABep"),
            l = r("QosV"),
            i = r("on57"),
            a = r("Sm6l");

        function s(e) {
            e.currentTarget.blur()
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, u, d, c, f, p, h, m, g, b, v, y, x = (0, l.c)(32);
                x[0] !== e ? ({
                    appearance: u,
                    controlSize: d,
                    children: t,
                    className: r,
                    iconOnly: c,
                    ...o
                } = e, x[0] = e, x[1] = t, x[2] = r, x[3] = o, x[4] = u, x[5] = d, x[6] = c) : (t = x[1], r = x[2], o = x[3], u = x[4], d = x[5], c = x[6]);
                let w = void 0 === u ? "compact" : u,
                    _ = void 0 === d ? "default" : d,
                    j = void 0 !== c && c,
                    k = "compact" !== w,
                    I = "blurred" === w && "backdrop-blur-md";
                if (x[7] !== I || x[8] !== r || x[9] !== _ || x[10] !== j || x[11] !== k || x[12] !== o) {
                    let e = (0, i.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                    k && j ? e = (0, i.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === _ ? "size-9" : "size-10") : k && (e = (0, i.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", I, "small" === _ ? "h-9" : "h-10")), f = a.a, p = o, h = "secondary", m = k ? "full" : "default", g = k ? "default" : "icon", b = (0, i.b)(e, r), x[7] = I, x[8] = r, x[9] = _, x[10] = j, x[11] = k, x[12] = o, x[13] = f, x[14] = p, x[15] = h, x[16] = m, x[17] = g, x[18] = b
                } else f = x[13], p = x[14], h = x[15], m = x[16], g = x[17], b = x[18];
                return x[19] !== I || x[20] !== t || x[21] !== j || x[22] !== k ? (v = k && j ? (0, n.jsx)("span", {
                    className: (0, i.b)("flex size-9 items-center justify-center rounded-full bg-media-background/45 group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60", I),
                    children: t
                }) : t, x[19] = I, x[20] = t, x[21] = j, x[22] = k, x[23] = v) : v = x[23], x[24] !== f || x[25] !== p || x[26] !== h || x[27] !== m || x[28] !== g || x[29] !== b || x[30] !== v ? (y = (0, n.jsx)(f, {
                    ...p,
                    color: h,
                    radius: m,
                    size: g,
                    className: b,
                    onPointerUp: s,
                    children: v
                }), x[24] = f, x[25] = p, x[26] = h, x[27] = m, x[28] = g, x[29] = b, x[30] = v, x[31] = y) : y = x[31], y
            }
        })
    }),
    SUhA: (function(e, t, r) {
        var n = r("QosV"),
            l = r("irkb"),
            i = r("BolX"),
            a = r("zd8w"),
            s = r("tl5a"),
            o = r("CBsD"),
            u = r("kfGJ"),
            d = r("gTKF"),
            c = r("zHp1");
        r.d(t, {}, {
            a: function(e) {
                let t, r, f, p, h, m, g, b, v = (0, n.c)(38),
                    {
                        src: y,
                        conversationId: x,
                        hostId: w,
                        imageAssetResolver: _,
                        shouldLoadFileDataUrl: j
                    } = e,
                    k = (0, l.c)(),
                    I = (0, i.x)(s.E, x),
                    C = w ?? I ?? u.a,
                    S = (0, u.c)(C);
                v[0] !== x ? (t = null == x ? null : {
                    kind: "app-server",
                    conversationId: x
                }, v[0] = x, v[1] = t) : t = v[1];
                let P = (0, i.x)(d.threadExecutorTargetByThread$, t),
                    M = P?.hostId === C ? P.environmentId : void 0,
                    [A, N] = (0, a.useState)(null);
                v[2] !== y ? (r = y.trim(), v[2] = y, v[3] = r) : r = v[3];
                let E = r.length > 0,
                    T = E && (0, c.h)(y) ? y : "",
                    {
                        dataUrl: F,
                        src: B,
                        isLoading: z,
                        isError: q,
                        loadSource: R,
                        loadTiming: L,
                        imageCacheHit: D,
                        isShowingCachedImage: U,
                        imageCheck: G,
                        refetch: O,
                        deleted: H
                    } = (0, c.k)(T, _);
                v[4] !== E || v[5] !== S.id || v[6] !== S.kind || v[7] !== C || v[8] !== y ? (f = E ? (0, o.b)(y) : null, "local" === S.kind && S.id, p = null, v[4] = E, v[5] = S.id, v[6] = S.kind, v[7] = C, v[8] = y, v[9] = f, v[10] = p) : (f = v[9], p = v[10]);
                let W = p,
                    K = A?.src === y && A.environmentId === M ? A : null,
                    Q = K?.dataUrl ?? null,
                    $ = E ? B ?? W ?? (null != f || T ? Q : y) : null;
                v[11] !== f || v[12] !== x || v[13] !== W || v[14] !== M || v[15] !== C || v[16] !== k || v[17] !== j || v[18] !== y ? (h = () => {
                    if (null == f || null != W && !j) return;
                    let e = !1;
                    return N({
                        src: y,
                        dataUrl: null,
                        environmentId: M,
                        isLoading: !0
                    }), (0, o.e)(f, C, k, void 0, x, M).then(t => {
                        e || N({
                            src: y,
                            dataUrl: t,
                            environmentId: M,
                            isLoading: !1
                        })
                    }), () => {
                        e = !0
                    }
                }, m = [f, x, W, M, C, k, j, y], v[11] = f, v[12] = x, v[13] = W, v[14] = M, v[15] = C, v[16] = k, v[17] = j, v[18] = y, v[19] = h, v[20] = m) : (h = v[19], m = v[20]), (0, a.useEffect)(h, m), v[21] !== F || v[22] !== Q || v[23] !== y ? (g = F ?? Q ?? (y.startsWith("data:image/") ? y : null), v[21] = F, v[22] = Q, v[23] = y, v[24] = g) : g = v[24];
                let V = F ?? Q ?? $,
                    X = z || null != f && null == W && (null == K || K.isLoading),
                    J = !!T && q;
                return v[25] !== H || v[26] !== D || v[27] !== G || v[28] !== U || v[29] !== R || v[30] !== L || v[31] !== $ || v[32] !== O || v[33] !== g || v[34] !== V || v[35] !== X || v[36] !== J ? (b = {
                    dataUrl: g,
                    previewSrc: $,
                    downloadSrc: V,
                    isLoading: X,
                    isError: J,
                    loadSource: R,
                    loadTiming: L,
                    imageCacheHit: D,
                    isShowingCachedImage: U,
                    imageCheck: G,
                    refetch: O,
                    deleted: H
                }, v[25] = H, v[26] = D, v[27] = G, v[28] = U, v[29] = R, v[30] = L, v[31] = $, v[32] = O, v[33] = g, v[34] = V, v[35] = X, v[36] = J, v[37] = b) : b = v[37], b
            }
        })
    }),
    jo5I: (function(e, t, r) {
        r.d(t, {
            a: () => C
        });
        var n = r("ABep"),
            l = r("QosV"),
            i = r("slpy"),
            a = r("on57"),
            s = r("BolX"),
            o = r("zd8w"),
            u = r("Wf1j"),
            d = r("oyxz"),
            c = r("Sm6l"),
            f = r("bqtn"),
            p = r("HOLv"),
            h = r("bf6R"),
            m = r("Yq7Q"),
            g = r("jU86"),
            b = r("cZk2");
        let v = (0, r("Bbed").a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(153380), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(229522), r.e(390575), r.e(353032), r.e(637885), r.e(596051)]).then(r.bind(r, "drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, n.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function y(e) {
            let t, r = (0, l.c)(3),
                [i, a] = (0, o.useState)(!!e.open);
            return e.open && !i && a(!0), r[0] !== i || r[1] !== e ? (t = i ? (0, n.jsx)(o.Suspense, {
                fallback: (0, n.jsx)(x, {
                    ...e
                }),
                children: (0, n.jsx)(v, {
                    ...e
                })
            }) : null, r[0] = i, r[1] = e, r[2] = t) : t = r[2], t
        }

        function x(e) {
            let t, r, i, a = (0, l.c)(10),
                {
                    open: s,
                    onOpenChange: o,
                    onCloseAutoFocus: u,
                    failed: c
                } = e,
                f = void 0 !== c && c,
                p = !!s;
            return a[0] !== o ? (t = e => o?.(e), a[0] = o, a[1] = t) : t = a[1], a[2] !== f ? (r = f ? (0, n.jsx)(d.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, n.jsx)(d.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), a[2] = f, a[3] = r) : r = a[3], a[4] !== f || a[5] !== u || a[6] !== p || a[7] !== t || a[8] !== r ? (i = (0, n.jsx)(b.a, {
                open: p,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: r
            }), a[4] = f, a[5] = u, a[6] = p, a[7] = t, a[8] = r, a[9] = i) : i = a[9], i
        }
        var w = r("IZUf"),
            _ = r("lc3A"),
            j = r("k2zB"),
            k = r("gwSn");
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
            let t, r, h, m, b, v, x, I, C, N, E, T, F, B, z, q, R, L, D, U, G, O, H, W, K, Q, $, V, X, J = (0, l.c)(89),
                {
                    className: Z,
                    appearance: Y,
                    visibility: ee,
                    isSaved: et,
                    isBusy: er,
                    isCheckingStatus: en,
                    selectedFolderId: el,
                    onToggleFavorite: ei,
                    onSelectFolder: ea
                } = e,
                es = void 0 === Y ? "media-overlay" : Y,
                eo = (0, s.y)(g.c),
                eu = (0, u.a)(),
                [ed, ec] = (0, o.useState)(!1),
                [ef, ep] = (0, o.useState)(!1),
                [eh, em] = (0, o.useState)(!1),
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
            J[8] !== ex || J[9] !== et || J[10] !== ei ? (h = () => {
                ex ? ec(!1) : (em(!0), ec(!et), ei())
            }, J[8] = ex, J[9] = et, J[10] = ei, J[11] = h) : h = J[11];
            let e_ = h;
            J[12] !== es || J[13] !== Z || J[14] !== et || J[15] !== ed || J[16] !== ee ? (m = (0, a.b)("select-none", "always" === ee || "entity-header" === es || "map-card" === es || et || ed ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === es ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], Z), J[12] = es, J[13] = Z, J[14] = et, J[15] = ed, J[16] = ee, J[17] = m) : m = J[17];
            let ej = ed ? "open" : "closed";
            J[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, J[18] = ef, J[19] = b) : b = J[19], J[20] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                e || (ec(!1), em(!0))
            }, J[20] = v) : v = J[20];
            let ek = !et || ed || eh;
            J[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ev.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, J[21] = x) : x = J[21];
            let eI = ex || void 0,
                eC = ex && !ed || void 0,
                eS = !et || ed ? "menu" : void 0,
                eP = !et || ed ? ed : void 0;
            J[22] === Symbol.for("react.memo_cache_sentinel") ? (I = () => em(!1), C = () => em(!1), N = () => em(!1), J[22] = I, J[23] = C, J[24] = N) : (I = J[22], C = J[23], N = J[24]), J[25] !== e_ ? (E = e => {
                e.preventDefault(), e.stopPropagation(), e_()
            }, J[25] = e_, J[26] = E) : E = J[26], J[27] !== ex || J[28] !== et || J[29] !== e_ ? (T = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? e_() : ex || et || ec(!0))
            }, J[27] = ex, J[28] = et, J[29] = e_, J[30] = T) : T = J[30];
            let eM = et ? _.a : j.a;
            return J[31] !== eM ? (F = (0, n.jsx)(p.a, {
                asset: eM
            }), J[31] = eM, J[32] = F) : F = J[32], J[33] !== es || J[34] !== et || J[35] !== r || J[36] !== eI || J[37] !== eC || J[38] !== eS || J[39] !== eP || J[40] !== E || J[41] !== T || J[42] !== F ? (B = (0, n.jsx)(M, {
                ref: x,
                "aria-label": r,
                "aria-busy": eI,
                "aria-disabled": eC,
                "aria-haspopup": eS,
                "aria-expanded": eP,
                "aria-pressed": et,
                appearance: es,
                onPointerEnter: I,
                onPointerLeave: C,
                onBlur: N,
                onPointerDown: P,
                onClick: E,
                onKeyDown: T,
                children: F
            }), J[33] = es, J[34] = et, J[35] = r, J[36] = eI, J[37] = eC, J[38] = eS, J[39] = eP, J[40] = E, J[41] = T, J[42] = F, J[43] = B) : B = J[43], J[44] !== r || J[45] !== B || J[46] !== ek ? (z = (0, n.jsx)(i.a, {
                content: r,
                disabled: ek,
                children: B
            }), J[44] = r, J[45] = B, J[46] = ek, J[47] = z) : z = J[47], J[48] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, n.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, n.jsx)(d.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), J[48] = q) : q = J[48], J[49] === Symbol.for("react.memo_cache_sentinel") ? (R = () => {
                ec(!1), ep(!0)
            }, L = (0, n.jsx)(p.a, {
                asset: k.a
            }), J[49] = R, J[50] = L) : (R = J[49], L = J[50]), J[51] !== ex || J[52] !== ew ? (D = (0, n.jsx)(c.a, {
                ref: ey,
                "aria-label": ew,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: R,
                children: L
            }), J[51] = ex, J[52] = ew, J[53] = D) : D = J[53], J[54] !== ex || J[55] !== D ? (U = (0, n.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: D
            }), J[54] = ex, J[55] = D, J[56] = U) : U = J[56], J[57] !== ew || J[58] !== U ? (G = (0, n.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [q, (0, n.jsx)(i.a, {
                    content: ew,
                    children: U
                })]
            }), J[57] = ew, J[58] = U, J[59] = G) : G = J[59], J[60] === Symbol.for("react.memo_cache_sentinel") ? (O = () => ey.current?.focus(), J[60] = O) : O = J[60], J[61] !== ex || J[62] !== ea || J[63] !== el ? (H = (0, n.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, n.jsx)(A, {
                    isBusy: ex,
                    selectedFolderId: el,
                    onSelectFolder: ea,
                    focusCreateFolder: O
                })
            }), J[61] = ex, J[62] = ea, J[63] = el, J[64] = H) : H = J[64], J[65] !== ed || J[66] !== eg || J[67] !== z || J[68] !== G || J[69] !== H || J[70] !== b ? (W = (0, n.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: ed,
                onCloseAutoFocus: b,
                onOpenChange: v,
                triggerButton: z,
                children: [G, H]
            }), J[65] = ed, J[66] = eg, J[67] = z, J[68] = G, J[69] = H, J[70] = b, J[71] = W) : W = J[71], J[72] !== et || J[73] !== W || J[74] !== m || J[75] !== ej ? (K = (0, n.jsx)("div", {
                className: m,
                "data-saved": et,
                "data-state": ej,
                children: W
            }), J[72] = et, J[73] = W, J[74] = m, J[75] = ej, J[76] = K) : K = J[76], J[77] === Symbol.for("react.memo_cache_sentinel") ? (Q = e => {
                e.preventDefault(), ev.current?.focus()
            }, J[77] = Q) : Q = J[77], J[78] !== ea || J[79] !== eo.query ? ($ = async e => {
                await eo.query.cancel(w.a);
                let t = !1;
                eo.query.setData(w.a, r => (t = null == r, [...(r ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(S))), t && eo.query.invalidate(w.a), await ea(e, !0)
            }, J[78] = ea, J[79] = eo.query, J[80] = $) : $ = J[80], J[81] !== ef || J[82] !== eo.value.accountId || J[83] !== eo.value.userId || J[84] !== $ ? (V = (0, n.jsx)(y, {
                open: ef,
                accountId: eo.value.accountId,
                userId: eo.value.userId,
                directoryId: null,
                onOpenChange: ep,
                onCloseAutoFocus: Q,
                onCreated: $
            }), J[81] = ef, J[82] = eo.value.accountId, J[83] = eo.value.userId, J[84] = $, J[85] = V) : V = J[85], J[86] !== K || J[87] !== V ? (X = (0, n.jsxs)(n.Fragment, {
                children: [K, V]
            }), J[86] = K, J[87] = V, J[88] = X) : X = J[88], X
        }

        function S(e, t) {
            return e.name.localeCompare(t.name)
        }

        function P(e) {
            e.preventDefault()
        }

        function M(e) {
            let t, r, i, a = (0, l.c)(6);
            return a[0] !== e ? ({
                appearance: t,
                ...r
            } = e, a[0] = e, a[1] = t, a[2] = r) : (t = a[1], r = a[2]), a[3] !== t || a[4] !== r ? (i = "media-overlay" === t ? (0, n.jsx)(m.a, {
                ...r,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, n.jsx)(c.a, {
                ...r,
                ...I[t]
            }), a[3] = t, a[4] = r, a[5] = i) : i = a[5], i
        }

        function A(e) {
            let t, r, i = (0, l.c)(16),
                {
                    focusCreateFolder: a,
                    isBusy: o,
                    selectedFolderId: u,
                    onSelectFolder: c
                } = e,
                {
                    data: p,
                    isPending: m,
                    isError: g,
                    refetch: b
                } = (0, s.z)(w.a);
            if (m) {
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
                let e, t, r, l;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), i[1] = e) : e = i[1], i[2] !== a || i[3] !== b ? (t = e => {
                    e.preventDefault(), a(), b()
                }, i[2] = a, i[3] = b, i[4] = t) : t = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(d.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), i[5] = r) : r = i[5], i[6] !== t ? (l = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(f.c.Item, {
                        onSelect: t,
                        children: r
                    })]
                }), i[6] = t, i[7] = l) : l = i[7], l
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
                    children: [(0, n.jsx)(N, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, n.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, n.jsx)(h.Ub, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), i[9] = p, i[10] = o, i[11] = c, i[12] = u, i[13] = t) : t = i[13], i[14] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), i[14] = t, i[15] = r) : r = i[15], r
        }

        function N(e) {
            let t, r, i, s = (0, l.c)(8),
                {
                    imageUrl: u
                } = e,
                [d, c] = (0, o.useState)(null),
                f = null != u && u !== d,
                p = !f && "border border-default bg-surface";
            return s[0] !== p ? (t = (0, a.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), s[0] = p, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (r = f ? (0, n.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => c(u)
            }) : (0, n.jsx)(h.wd, {}), s[2] = u, s[3] = f, s[4] = r) : r = s[4], s[5] !== t || s[6] !== r ? (i = (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: r
            }), s[5] = t, s[6] = r, s[7] = i) : i = s[7], i
        }
    }),
    IZUf: (function(e, t, r) {
        var n = r("BolX"),
            l = r("Kwur"),
            i = r("jU86");
        let a = (0, n.r)(i.c, e => {
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
                    return (await l.Request.safeGet("/files/library/nodes", {
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
            a: a,
            b: async function(e, t, r) {
                await l.Request.safePatch("/files/library/files/{library_file_id}/move", {
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