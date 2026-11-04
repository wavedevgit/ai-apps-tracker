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
            l = n("oyxz");
        n.d(t, {}, {
            a: function() {
                let e, t = (0, a.c)(1);
                return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(l.a, {
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
            l = r.object({
                marker_text: r.string().trim().min(1).optional(),
                marker_type: r.string().trim().min(1).optional()
            }).strip();
        n.d(t, {}, {
            a: function(e) {
                let t = a.safeParse(e);
                return t.success ? t.data.index : null
            },
            b: function(e) {
                let t = l.safeParse(e);
                return t.success ? t.data.marker_text ?? null : null
            },
            c: function(e) {
                let t = l.safeParse(e);
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
                let l = (0, a.b)(e);
                if (null == l) return null;
                let i = t.findIndex(e => (0, r.l)(e) === l);
                if (-1 === i) return null;
                let s = t[i];
                return null == s ? null : {
                    index: i,
                    reference: s
                }
            }
        })
    }),
    niC2: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("on57"),
            i = n("zd8w"),
            s = n("Wf1j"),
            o = n("ygO2"),
            u = n("vxGj"),
            d = n("HOLv"),
            c = n("r21w"),
            f = n("SUhA"),
            p = n("JwGC"),
            m = n("LQio"),
            h = n("yNGp"),
            g = n("DnVX");

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
                [M, P] = (0, i.useState)(null),
                [A, S] = (0, i.useState)(null),
                N = null != v.previewSrc && v.previewSrc !== A ? v.previewSrc : v.src;
            g[0] !== b || g[1] !== x || g[2] !== N ? (t = {
                src: N,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = N, g[3] = t) : t = g[3];
            let {
                previewSrc: F
            } = (0, f.a)(t), T = null != y && (null == F || M !== F), z = k && "w-full", E = !k && ("dialog" === I ? "w-2/3" : "max-w-19/20");
            return g[4] !== z || g[5] !== E ? (n = (0, l.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", z, E), g[4] = z, g[5] = E, g[6] = n) : n = g[6], g[7] !== y || g[8] !== v.height || g[9] !== v.width || g[10] !== I || g[11] !== k ? (o = k || "dialog" === I ? void 0 : {
                aspectRatio: null == y ? `${v.width??1}/${v.height??1}` : "5/4"
            }, g[7] = y, g[8] = v.height, g[9] = v.width, g[10] = I, g[11] = k, g[12] = o) : o = g[12], g[13] !== w || g[14] !== C ? (u = C.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: w
            }), g[13] = w, g[14] = C, g[15] = u) : u = g[15], g[16] !== _ ? (d = e => _(e.currentTarget), g[16] = _, g[17] = d) : d = g[17], g[18] !== y || g[19] !== v.previewSrc || g[20] !== j || g[21] !== M || g[22] !== F || g[23] !== T ? (p = null == F ? (0, r.jsx)(c.a, {
                className: "h-full w-full"
            }) : (0, r.jsx)("img", {
                ref: T ? void 0 : j,
                className: (0, l.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == y && M !== F && "opacity-0"),
                src: F,
                alt: "",
                draggable: !1,
                loading: null == y ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => P(F),
                onError: () => S(v.previewSrc ?? null)
            }), g[18] = y, g[19] = v.previewSrc, g[20] = j, g[21] = M, g[22] = F, g[23] = T, g[24] = p) : p = g[24], g[25] !== y || g[26] !== j || g[27] !== T ? (m = T ? (0, r.jsx)("img", {
                ref: j,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: y,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = y, g[26] = j, g[27] = T, g[28] = m) : m = g[28], g[29] !== m || g[30] !== n || g[31] !== o || g[32] !== u || g[33] !== d || g[34] !== p ? (h = (0, r.jsxs)("button", {
                className: n,
                style: o,
                "aria-label": u,
                type: "button",
                onClick: d,
                children: [p, m]
            }), g[29] = m, g[30] = n, g[31] = o, g[32] = u, g[33] = d, g[34] = p, g[35] = h) : h = g[35], h
        }

        function y(e) {
            let t, n, l, i, o = (0, a.c)(16),
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
            }), o[4] = m, o[5] = v, o[6] = n) : n = o[6], o[7] !== h ? (l = e => {
                e || h()
            }, o[7] = h, o[8] = l) : l = o[8], o[9] !== g || o[10] !== b || o[11] !== y || o[12] !== x || o[13] !== n || o[14] !== l ? (i = (0, r.jsx)(p.a, {
                alt: n,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: l,
                onNextImage: b,
                onPreviousImage: y
            }), o[9] = g, o[10] = b, o[11] = y, o[12] = x, o[13] = n, o[14] = l, o[15] = i) : i = o[15], i)
        }

        function v(e, t) {
            let n = e.children.item(t);
            if (!(n instanceof HTMLElement)) return 0;
            let r = "rtl" === getComputedStyle(e).direction,
                a = e.scrollWidth - e.clientWidth,
                l = n.offsetLeft - (e.clientWidth - n.offsetWidth) / 2;
            return 0 === t ? l = 0 : t === e.children.length - 1 && (l = r ? n.offsetLeft : n.offsetLeft + n.offsetWidth - e.clientWidth), r ? Math.max(-a, Math.min(0, l)) : Math.max(0, Math.min(a, l))
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, c, f, p, x, w, j, _, k, I, C, M, P, A, S, N, F, T, z = (0, a.c)(56),
                    {
                        ref: E,
                        conversationId: D,
                        firstPhotoFallbackSrc: q,
                        imageAssetResolver: B,
                        images: R,
                        onOpenImage: L,
                        onArrowClick: O,
                        presentation: G
                    } = e,
                    U = void 0 === G ? "sidebar" : G,
                    W = (0, s.a)(),
                    H = (0, i.useContext)(m.a),
                    K = (0, i.useRef)(null),
                    Q = (0, i.useRef)(null),
                    V = (0, i.useRef)(null);
                z[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, z[0] = t) : t = z[0];
                let X = (0, i.useRef)(t);
                z[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => ({
                    getThumbnail: e => X.current.get(e) ?? null
                }), z[1] = n) : n = z[1], (0, i.useImperativeHandle)(E, n);
                let [$, J] = (0, i.useState)(0), [Z, Y] = (0, i.useState)(null);
                z[2] !== Z ? (c = e => e.id === Z, z[2] = Z, z[3] = c) : c = z[3];
                let ee = R.findIndex(c),
                    et = R[ee],
                    en = Math.min($, R.length - 1);
                z[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                    let t = K.current;
                    if (null == t) return;
                    let n = v(t, e);
                    Q.current = 1 >= Math.abs(t.scrollLeft - n) ? null : n, t.scrollTo({
                        left: n
                    }), J(e)
                }, z[4] = f) : f = z[4];
                let er = f;
                z[5] !== R.length ? (p = e => {
                    let t = 0,
                        n = 1 / 0;
                    for (let r = 0; r < R.length; r += 1) {
                        let a = Math.abs(v(e, r) - e.scrollLeft);
                        a < n && (n = a, t = r)
                    }
                    J(t)
                }, z[5] = R.length, z[6] = p) : p = z[6];
                let ea = p,
                    el = "sidebar" === U && "mb-5";
                z[7] !== el ? (x = (0, l.b)("-mx-6", el), z[7] = el, z[8] = x) : x = z[8];
                let ei = "dialog" === U ? "h-56 sm:h-64" : "aspect-5/4";
                z[9] !== ei ? (w = (0, l.b)("group/photos relative overflow-hidden select-none", ei), z[9] = ei, z[10] = w) : w = z[10], z[11] !== W ? (j = W.formatMessage({
                    id: "chatgpt.imageGroup.photos",
                    defaultMessage: "Photos",
                    description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
                }), z[11] = W, z[12] = j) : j = z[12], z[13] !== W ? (_ = W.formatMessage({
                    id: "chatgpt.imageGroup.carouselRole",
                    defaultMessage: "carousel",
                    description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
                }), z[13] = W, z[14] = _) : _ = z[14], z[15] !== R.length || z[16] !== er || z[17] !== en ? (k = e => {
                    if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                        e.preventDefault(), e.stopPropagation();
                        let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                        er(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (en + 1) % R.length : Math.max(0, en - 1))
                    }
                }, z[15] = R.length, z[16] = er, z[17] = en, z[18] = k) : k = z[18], z[19] !== ea ? (I = e => {
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
                let es = R.map((e, t) => (0, r.jsx)(b, {
                    conversationId: D,
                    fallbackSrc: 0 === t ? q : void 0,
                    image: e,
                    imageAssetResolver: B,
                    imageNumber: t + 1,
                    imageRef: t => {
                        if (null != t) return X.current.set(e.id, t), () => {
                            X.current.get(e.id) === t && X.current.delete(e.id)
                        }
                    },
                    single: 1 === R.length,
                    presentation: U,
                    onOpen: n => {
                        null != L ? L(t) : (V.current = n, Y(e.id))
                    }
                }, e.id));
                return z[24] !== I || z[25] !== C || z[26] !== M || z[27] !== P || z[28] !== es ? (A = (0, r.jsx)("div", {
                    ref: K,
                    className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                    onScroll: I,
                    onScrollEnd: C,
                    onPointerDown: M,
                    onWheel: P,
                    children: es
                }), z[24] = I, z[25] = C, z[26] = M, z[27] = P, z[28] = es, z[29] = A) : A = z[29], z[30] !== R.length || z[31] !== W || z[32] !== O || z[33] !== er || z[34] !== en ? (S = R.length > 1 ? (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-has-[:focus-visible]/photos:opacity-100",
                        children: [(0, r.jsx)(o.a, {
                            className: (0, l.b)("group-hover/photos:pointer-events-auto group-has-[:focus-visible]/photos:pointer-events-auto", 0 === en && "invisible"),
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
                                e !== en && O?.("previous", e), er(e)
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
                                let e = (en + 1) % R.length;
                                e !== en && O?.("next", e), er(e)
                            },
                            children: (0, r.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: g.a
                            })
                        })]
                    }), R.length <= 20 ? (0, r.jsx)("div", {
                        className: "absolute inset-x-0 bottom-3 flex justify-center",
                        children: (0, r.jsx)(u.a, {
                            count: R.length,
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
                }) : null, z[30] = R.length, z[31] = W, z[32] = O, z[33] = er, z[34] = en, z[35] = S) : S = z[35], z[36] !== H || z[37] !== w || z[38] !== j || z[39] !== _ || z[40] !== k || z[41] !== A || z[42] !== S ? (N = (0, r.jsxs)("div", {
                    ref: H,
                    className: w,
                    "data-entity-photos": !0,
                    "aria-label": j,
                    "aria-roledescription": _,
                    role: "region",
                    onKeyDown: k,
                    children: [A, S]
                }), z[36] = H, z[37] = w, z[38] = j, z[39] = _, z[40] = k, z[41] = A, z[42] = S, z[43] = N) : N = z[43], z[44] !== D || z[45] !== B || z[46] !== R || z[47] !== V || z[48] !== et || z[49] !== ee || z[50] !== Y ? (F = null != et ? (0, r.jsx)(y, {
                    conversationId: D,
                    image: et,
                    imageAssetResolver: B,
                    imageNumber: ee + 1,
                    onClose: () => Y(null),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), V.current?.focus()
                    },
                    onPreviousImage: ee > 0 ? () => Y(R[ee - 1].id) : void 0,
                    onNextImage: ee < R.length - 1 ? () => Y(R[ee + 1].id) : void 0
                }) : null, z[44] = D, z[45] = B, z[46] = R, z[47] = V, z[48] = et, z[49] = ee, z[50] = Y, z[51] = F) : F = z[51], z[52] !== N || z[53] !== F || z[54] !== x ? (T = (0, r.jsxs)("div", {
                    className: x,
                    "data-testid": "chatgpt-image-group-carousel",
                    children: [N, F]
                }), z[52] = N, z[53] = F, z[54] = x, z[55] = T) : T = z[55], T
            }
        })
    }),
    NDDl: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("BolX"),
            i = n("zd8w"),
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
                    nativeUnavailable: l
                } = e;
            return n[0] !== l ? (t = (0, r.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: l ? (0, r.jsx)(c.a, {}) : (0, r.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again.",
                    description: "Error after a business profile's chat button or suggested question could not open a new conversation. The user can click the action again."
                })
            }), n[0] = l, n[1] = t) : t = n[1], t
        }

        function g(e) {
            let t, n, i = (0, a.c)(5),
                {
                    conversationId: s,
                    data: o
                } = e,
                u = (0, l.x)(p.b, s);
            if (null == u) return null;
            i[0] !== o ? (t = p.a.safeParse(o).data?.items, i[0] = o, i[1] = t) : t = i[1];
            let d = t;
            return i[2] !== u || i[3] !== d ? (n = d ? (0, r.jsx)(b, {
                chat: u,
                items: d,
                onSelect: u.open
            }) : null, i[2] = u, i[3] = d, i[4] = n) : n = i[4], n
        }

        function b(e) {
            let t, n, l, i = (0, a.c)(13),
                {
                    chat: s,
                    items: d,
                    onSelect: c
                } = e;
            if (i[0] !== s || i[1] !== d || i[2] !== c) {
                let e;
                i[4] !== s || i[5] !== c ? (e = e => (0, r.jsxs)(o.a, {
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
                }, e.id), i[4] = s, i[5] = c, i[6] = e) : e = i[6], t = d.map(e), i[0] = s, i[1] = d, i[2] = c, i[3] = t
            } else t = i[3];
            return i[7] !== s || i[8] !== d ? (n = d.some(e => {
                let {
                    id: t
                } = e;
                return t === s.failedId
            }) ? (0, r.jsx)(h, {
                nativeUnavailable: s.nativeUnavailable
            }) : null, i[7] = s, i[8] = d, i[9] = n) : n = i[9], i[10] !== t || i[11] !== n ? (l = (0, r.jsxs)("div", {
                className: "flex flex-col items-start gap-2.5 pb-4",
                children: [t, n]
            }), i[10] = t, i[11] = n, i[12] = l) : l = i[12], l
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
                    m = (0, l.y)(d.a);
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
                }, n = [m, u, c], o[0] = c, o[1] = u, o[2] = m, o[3] = t, o[4] = n) : (t = o[3], n = o[4]), (0, i.useLayoutEffect)(t, n), o[5] !== f ? (s = (0, r.jsx)(r.Fragment, {
                    children: f
                }), o[5] = f, o[6] = s) : s = o[6], s
            },
            b: function(e) {
                let t, n, i, u, d, c = (0, a.c)(15),
                    {
                        conversationId: f
                    } = e,
                    m = (0, l.x)(p.b, f);
                if (m?.startChat == null) return null;
                let g = m.startChat,
                    b = null != m.pendingId,
                    y = m.pendingId === g.id;
                return c[0] !== g || c[1] !== m ? (t = () => m.open(g, "start-chat"), c[0] = g, c[1] = m, c[2] = t) : t = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.startChat",
                    defaultMessage: "Start chat",
                    description: "Button in a business profile header that opens a new conversation with that business’s AI agent."
                }), c[3] = n) : n = c[3], c[4] !== b || c[5] !== y || c[6] !== t ? (i = (0, r.jsx)(o.a, {
                    color: "primary",
                    size: "businessProfileAction",
                    disabled: b,
                    loading: y,
                    onClick: t,
                    children: n
                }), c[4] = b, c[5] = y, c[6] = t, c[7] = i) : i = c[7], c[8] !== g.id || c[9] !== m.failedId || c[10] !== m.nativeUnavailable ? (u = m.failedId === g.id ? (0, r.jsx)(h, {
                    nativeUnavailable: m.nativeUnavailable
                }) : null, c[8] = g.id, c[9] = m.failedId, c[10] = m.nativeUnavailable, c[11] = u) : u = c[11], c[12] !== i || c[13] !== u ? (d = (0, r.jsxs)(r.Fragment, {
                    children: [i, u]
                }), c[12] = i, c[13] = u, c[14] = d) : d = c[14], d
            },
            c: function(e) {
                let t, n = (0, a.c)(5),
                    {
                        conversationId: i,
                        after: s
                    } = e,
                    o = void 0 === s ? "transcript" : s,
                    u = (0, l.x)(p.b, i),
                    d = u?.suggestedQuestions,
                    c = (0, l.x)(d?.length ? m.a : null, i);
                return n[0] !== o || n[1] !== u || n[2] !== c || n[3] !== d ? (t = u && d?.length && c === o ? (0, r.jsx)(b, {
                    chat: u,
                    items: d.map(y),
                    onSelect: e => u.open(e, "suggestion")
                }) : null, n[0] = o, n[1] = u, n[2] = c, n[3] = d, n[4] = t) : t = n[4], t
            },
            d: function(e) {
                let t, n = (0, a.c)(3),
                    {
                        data: l
                    } = e,
                    i = (0, f.d)();
                return n[0] !== l || n[1] !== i ? (t = i?.conversationType === "sidebar" ? (0, r.jsx)(g, {
                    conversationId: i.conversationId,
                    data: l
                }) : null, n[0] = l, n[1] = i, n[2] = t) : t = n[2], t
            }
        })
    }),
    w7PD: (function(e, t, n) {
        var r = n("BolX"),
            a = n("ASxG"),
            l = n("OWtl");
        let i = a.object({
                items: a.array(a.object({
                    id: a.string().trim().min(1),
                    label: a.string().trim().min(1),
                    prefill: a.string().nullish()
                })).min(1)
            }),
            s = (0, r.v)(l.a, e => null, void 0, {
                autoDispose: !0
            });
        n.d(t, {}, {
            a: i,
            b: s
        })
    }),
    FQiC: (function(e, t, n) {
        var r = n("BolX"),
            a = n("zd8w"),
            l = n("Cslg"),
            i = n("OWtl"),
            s = n("tZ3A"),
            o = n("orgn");
        let u = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(s.c, e)?.businessProfile, a = n(o.a, e);
                return {
                    conversationId: e,
                    accountId: n(l.f),
                    userId: n(l.j),
                    profileId: a?.profileId ?? null,
                    identity: JSON.stringify([a?.profileId, a?.source, a?.source === "entity-knowledge" ? null : r ?? null])
                }
            }),
            d = (0, r.j)(i.a, (e, t) => {
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
            a = n("BolX"),
            l = n("wUad"),
            i = n("Cslg"),
            s = n("OWtl"),
            o = n("OMIV"),
            u = n("tZ3A"),
            d = n("Kwur");
        let c = (0, a.q)(s.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(u.c, e), s = a?.entityKnowledgeId, c = n(i.f), f = n(i.j), p = null != s && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != c && null != f && n(o.d, "2778625748");
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
                                [l.$b]: c
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
                } = t, a = n(u.c, e), s = a?.businessProfile, f = n(i.f), p = n(i.j), m = null != s && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != f && null != p && n(o.d, "2778625748");
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
                                [l.$b]: f
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
                    isEnabled: l
                } = n(f, e);
                return l ? a ?? null : null
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
        var r = n("BolX"),
            a = n("rKAs"),
            l = n("IgxH"),
            i = n("OWtl"),
            s = n("CTBG"),
            o = n("Nayr"),
            u = n("dQRk"),
            d = n("w7PD");

        function c(e, t) {
            return `${e}:${t}`
        }
        let f = (0, r.d)(i.a, (e, t) => {
            let n, {
                get: r
            } = t;
            if ("idle" !== r(u._, e)) return null;
            let i = r(s.c, e),
                f = r(u.M, e),
                p = !1;
            for (let e of i ?? []) {
                let t;
                if (!e.id || f[e.id]?.blocked) continue;
                let r = (0, o.d)(e);
                if (!r.markdown) continue;
                let i = "finished_successfully" === e.status;
                for (let e of r.contentReferences)
                    if (!(0, a.H)(e)) {
                        if ("client_defined_widget" === e.type && "business_profile_starter_pills" === e.category && d.a.safeParse(e.data).success) return null;
                        i && null == n && ("product_group" === e.type || "products" === e.type) && "number" == typeof e.start_idx && (null == t || e.start_idx < t) && (0, a.y)(e).length > 0 && (t = e.start_idx)
                    } null != t && (n = c(e.id, t)), !i || n || p || (p = (0, l.a)(r.markdown).length > 0)
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
            l = n("v1r0"),
            i = n("BolX"),
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
            k = n("DxQO"),
            I = n("RAs9"),
            C = n("aov5");

        function M() {
            let e, t, n = (0, a.c)(4),
                l = (0, o.a)();
            return n[0] !== l ? (e = l.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), n[0] = l, n[1] = e) : e = n[1], n[2] !== e ? (t = (0, r.jsx)(j.a, {
                className: "ms-1.5",
                label: e,
                showTooltip: !0,
                size: 24
            }), n[2] = e, n[3] = t) : t = n[3], t
        }

        function P(e) {
            let t, n, l, i, s = (0, a.c)(14),
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
            }) : null, s[2] = o, s[3] = b, s[4] = c, s[5] = g, s[6] = n) : n = s[6], s[7] !== o || s[8] !== f ? (l = (0, d.a)(f) ? (0, r.jsx)("div", {
                className: "border-t border-default",
                children: (0, r.jsx)(A, {
                    conversationId: o,
                    status: f
                })
            }) : null, s[7] = o, s[8] = f, s[9] = l) : l = s[9], s[10] !== h || s[11] !== n || s[12] !== l ? (i = (0, r.jsxs)(r.Fragment, {
                children: [n, h, l]
            }), s[10] = h, s[11] = n, s[12] = l, s[13] = i) : i = s[13], i
        }

        function A(e) {
            let t, n, l = (0, a.c)(6),
                {
                    conversationId: s,
                    status: o
                } = e,
                u = (0, i.y)(g.a);
            l[0] !== s || l[1] !== u ? (t = () => {
                if (!(0, d.a)(u.get(w.b, s))) return;
                let e = u.get(x.a, u.get(x.b, s));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, u.set(e.isOpen$, !0)
            }, l[0] = s, l[1] = u, l[2] = t) : t = l[2];
            let c = o?.ownership?.current_request;
            return l[3] !== t || l[4] !== c ? (n = (0, r.jsx)(_.a, {
                onClick: t,
                request: c
            }), l[3] = t, l[4] = c, l[5] = n) : n = l[5], n
        }

        function S(e) {
            return e.trim().length > 0
        }

        function N(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, l, s = (0, a.c)(6),
                    {
                        conversationId: o
                    } = e,
                    f = (0, i.y)(g.a),
                    p = (0, i.x)(w.b, o);
                return (0, d.a)(p, "dispute") ? (s[0] !== o || s[1] !== f ? (t = () => {
                    if (!(0, d.a)(f.get(w.b, o), "dispute")) return;
                    let e = f.get(x.a, f.get(x.b, o));
                    e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
                }, s[0] = o, s[1] = f, s[2] = t) : t = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(u.a, {
                    id: "chatgpt.localBusiness.dispute.action",
                    defaultMessage: "Dispute profile ownership",
                    description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
                }), s[3] = n) : n = s[3], s[4] !== t ? (l = (0, r.jsx)(c.c.Item, {
                    leftIconAsset: C.a,
                    onSelect: t,
                    children: n
                }), s[4] = t, s[5] = l) : l = s[5], l) : null
            },
            b: function(e) {
                let t, n = (0, a.c)(4),
                    {
                        conversationId: l
                    } = e,
                    s = (0, i.x)(w.a, l),
                    o = (0, i.x)(b.c, l);
                if (s?.source !== "entity-knowledge" || o?.businessProfile != null) return null;
                let u = o?.shouldBlockExternalEgress;
                return n[0] !== l || n[1] !== s.status || n[2] !== u ? (t = (0, r.jsx)(P, {
                    conversationId: l,
                    requiresConfirmation: u,
                    status: s.status
                }), n[0] = l, n[1] = s.status, n[2] = u, n[3] = t) : t = n[3], t
            },
            c: function(e) {
                let t, n, d, c, g, y, v, x, j, C = (0, a.c)(29),
                    {
                        conversationId: A,
                        profile: F,
                        name: T
                    } = e,
                    z = (0, o.a)(),
                    E = (0, i.x)(w.b, A),
                    D = (0, i.x)(b.c, A),
                    q = (0, i.x)(w.a, A),
                    B = q?.source === "entity-knowledge" && q.profileId !== F.profile_id ? null : F;
                C[0] !== B?.categories ? (t = B?.categories.find(S), C[0] = B?.categories, C[1] = t) : t = C[1];
                let R = t,
                    L = N(B?.delivery_policy, l.b),
                    O = B?.returns_policy;
                C[2] !== O ? (n = N(O, l.d), C[2] = O, C[3] = n) : n = C[3];
                let G = n,
                    U = (0, s.useContext)(h.a);
                C[4] !== U || C[5] !== D?.shouldBlockExternalEgress || C[6] !== B ? (d = "restricted" !== U && !D?.shouldBlockExternalEgress && B?.logo_url ? (0, m.b)(B.logo_url) : void 0, C[4] = U, C[5] = D?.shouldBlockExternalEgress, C[6] = B, C[7] = d) : d = C[7];
                let W = d;
                C[8] !== W ? (c = W ? (0, r.jsx)(p.a, {
                    className: "mb-3 size-18 rounded-2xl border-4 border-surface bg-surface",
                    alt: "",
                    src: W,
                    fallback: (0, r.jsx)(r.Fragment, {})
                }, W) : null, C[8] = W, C[9] = c) : c = C[9];
                let H = B?.display_name ?? T ?? D?.query;
                C[10] !== E?.is_verified ? (g = E?.is_verified ? (0, r.jsx)(M, {}) : null, C[10] = E?.is_verified, C[11] = g) : g = C[11], C[12] !== H || C[13] !== g ? (y = (0, r.jsxs)("h2", {
                    className: "text-card-title break-words",
                    children: [H, g]
                }), C[12] = H, C[13] = g, C[14] = y) : y = C[14], C[15] !== R ? (v = R ? (0, r.jsx)("div", {
                    className: "text-lg leading-6 font-normal break-words text-default",
                    children: R
                }) : null, C[15] = R, C[16] = v) : v = C[16];
                let K = D?.shouldBlockExternalEgress,
                    Q = B?.website_url,
                    V = null == L && null == G ? null : (0, r.jsxs)("div", {
                        className: "divide-y divide-border border-t border-default",
                        children: [null != L ? (0, r.jsxs)(_.f, {
                            icon: (0, r.jsx)(f.a, {
                                asset: I.a
                            }),
                            children: ["none" === L.delivery ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.noDelivery",
                                defaultMessage: "Delivery unavailable",
                                description: "Merchant policy in the business sidebar when delivery is not offered"
                            }) : null, "paid" === L.delivery ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.paidDelivery",
                                defaultMessage: "Paid delivery",
                                description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                            }) : null, "free" === L.delivery && "all_orders" === L.scope ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.freeDelivery",
                                defaultMessage: "Free delivery on all orders",
                                description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                            }) : null, "free" === L.delivery && "minimum_order" === L.scope ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.deliveryMinimum",
                                defaultMessage: "Free delivery over {amount}",
                                description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                                values: {
                                    amount: z.formatNumber(Number(L.minimum_order_amount), {
                                        style: "currency",
                                        currency: L.currency,
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 20
                                    })
                                }
                            }) : null]
                        }) : null, null != G ? (0, r.jsxs)(_.f, {
                            icon: (0, r.jsx)(f.a, {
                                asset: k.a
                            }),
                            children: ["none" === G.returns ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.noReturns",
                                defaultMessage: "Returns not accepted",
                                description: "Merchant policy in the business sidebar when returns are not accepted"
                            }) : null, "none" !== G.returns && "window" in G ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.unlimitedReturns",
                                defaultMessage: "{kind, select, free {Free returns with no time limit} other {Returns with no time limit, fees apply}}",
                                description: "Return policy summary for customers in the business sidebar. Returns have no time limit. The kind value is free when no return fees apply, or fees otherwise.",
                                values: {
                                    kind: G.returns
                                }
                            }) : null, "none" !== G.returns && "window_days" in G ? (0, r.jsx)(u.a, {
                                id: "chatgpt.entity.businessProfile.returnWindow",
                                defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}}} other {Returns within {days, plural, one {# day} other {# days}}, fees apply}}",
                                description: "Merchant policy in the business sidebar showing the return window from delivery and whether return fees apply",
                                values: {
                                    kind: G.returns,
                                    days: G.window_days
                                }
                            }) : null]
                        }) : null]
                    });
                return C[17] !== P || C[18] !== A || C[19] !== E || C[20] !== K || C[21] !== Q || C[22] !== V ? (x = (0, r.jsx)(P, {
                    conversationId: A,
                    requiresConfirmation: K,
                    status: E,
                    websiteUrl: Q,
                    children: V
                }), C[17] = P, C[18] = A, C[19] = E, C[20] = K, C[21] = Q, C[22] = V, C[23] = x) : x = C[23], C[24] !== x || C[25] !== c || C[26] !== y || C[27] !== v ? (j = (0, r.jsxs)(r.Fragment, {
                    children: [c, y, v, x]
                }), C[24] = x, C[25] = c, C[26] = y, C[27] = v, C[28] = j) : j = C[28], j
            }
        })
    }),
    wFiG: (function(e, t, n) {
        var r = n("ABep"),
            a = n("QosV"),
            l = n("EA6X"),
            i = n("BolX"),
            s = n("wUad"),
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
                C = (0, i.y)(c.a),
                M = (0, o.useContext)(d.a),
                P = (0, i.x)(h.d, x),
                A = (0, i.x)(v.b, x),
                S = (0, i.x)(v.d, x),
                N = k ? A?.business : S,
                F = (0, i.x)(f.c, x),
                T = (0, i.x)(f.e, x),
                z = (0, i.x)(v.c, x),
                E = k ? T : z;
            if (null == N && null == E) {
                if (F?.extraParams?.resolve_basemap_place === !0 && null == F.businessPreview) {
                    let e;
                    return p[0] !== F.query ? (e = (0, r.jsx)("h2", {
                        className: "mb-1 text-[22px] leading-7 font-medium break-words",
                        children: F.query
                    }), p[0] = F.query, p[1] = e) : e = p[1], e
                }
                return null
            }
            let D = P ? "restricted" : M,
                q = j ?? null;
            return p[2] !== x || p[3] !== F?.query || p[4] !== E ? (t = null != E && (0, r.jsx)(b.c, {
                conversationId: x,
                profile: E,
                name: F?.query
            }), p[2] = x, p[3] = F?.query, p[4] = E, p[5] = t) : t = p[5], p[6] !== N || p[7] !== A?.category || p[8] !== A?.messageId || p[9] !== A?.sourceConversationId || p[10] !== E || p[11] !== C || p[12] !== I ? (n = null == E && null != N && (0, r.jsx)(y.ChatGptLocalBusinessMetadata, {
                business: N,
                isOptimistic: !0,
                showClaimedBusinessTooltip: I,
                onAction: e => {
                    (0, g.b)(C, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: N.id.trim() || void 0,
                        entityCategory: A?.category ?? void 0,
                        messageId: A?.messageId,
                        assistantMessageId: A?.messageId,
                        conversationId: A?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), p[6] = N, p[7] = A?.category, p[8] = A?.messageId, p[9] = A?.sourceConversationId, p[10] = E, p[11] = C, p[12] = I, p[13] = n) : n = p[13], p[14] !== q || p[15] !== t || p[16] !== n ? (s = (0, r.jsxs)(m.b, {
                value: q,
                children: [t, n]
            }), p[14] = q, p[15] = t, p[16] = n, p[17] = s) : s = p[17], p[18] !== D || p[19] !== s ? (u = (0, r.jsx)(d.a, {
                value: D,
                children: s
            }), p[18] = D, p[19] = s, p[20] = u) : u = p[20], u
        }
        n.d(t, {}, {
            a: j,
            b: function(e) {
                let t, n, l = (0, a.c)(18),
                    {
                        conversationId: c,
                        isTranscriptPending: f,
                        turnContext: m,
                        showClaimedBusinessTooltip: h
                    } = e,
                    g = void 0 !== f && f,
                    b = void 0 !== h && h,
                    y = (0, o.useContext)(d.a),
                    v = (0, i.x)(w.e, c),
                    _ = (0, i.x)(w.b, c),
                    k = (0, i.x)(w.d, c),
                    I = (0, o.useContext)(x.a);
                if (_ && !g) return null;
                let C = null;
                if (null != v && "restricted" !== y) {
                    let e, t, n, a = `chatgpt:${c}`;
                    l[0] !== a ? (e = (0, s.Qe)(a), l[0] = a, l[1] = e) : e = l[1], l[2] !== v ? (t = [v], l[2] = v, l[3] = t) : t = l[3], l[4] !== e || l[5] !== t ? (n = (0, r.jsx)(p.a, {
                        conversationId: e,
                        images: t
                    }), l[4] = e, l[5] = t, l[6] = n) : n = l[6], C = n
                } else if (k || g && _) {
                    let e, t;
                    l[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(u.a, {
                        className: "aspect-5/4",
                        "aria-hidden": "true",
                        variant: "prominent"
                    }), l[7] = e) : e = l[7], l[8] !== I ? (t = (0, r.jsx)("div", {
                        className: "-mx-6 mb-5",
                        children: (0, r.jsx)("div", {
                            ref: I,
                            "data-entity-photos": !0,
                            children: e
                        })
                    }), l[8] = I, l[9] = t) : t = l[9], C = t
                }
                return l[10] !== c || l[11] !== g || l[12] !== b || l[13] !== m ? (t = (0, r.jsx)(j, {
                    conversationId: c,
                    isTranscriptPending: g,
                    turnContext: m,
                    showClaimedBusinessTooltip: b
                }), l[10] = c, l[11] = g, l[12] = b, l[13] = m, l[14] = t) : t = l[14], l[15] !== C || l[16] !== t ? (n = (0, r.jsxs)(r.Fragment, {
                    children: [C, t]
                }), l[15] = C, l[16] = t, l[17] = n) : n = l[17], n
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
        var r = n("BolX"),
            a = n("rKAs"),
            l = n("SqqO"),
            i = n("OWtl"),
            s = n("fzVa"),
            o = n("Nayr"),
            u = n("tZ3A"),
            d = n("dQRk"),
            c = n("rxj0"),
            f = n("TJEh"),
            p = n("FRPb");
        let m = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null != e && n(u.a, e) && null == n(p.b, e) && n(u.c, e)?.businessProfile == null && n(u.c, e)?.extraParams?.resolve_basemap_place !== !0 ? n(d.cb, e) : null
            }),
            h = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(p.b, e), i = n(d.L, e);
                return null != i && Object.values(i).some(t => null != t.message && (0, o.c)(t.message).some((t, i) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (n(u.a, e) || (0, f.i)(r?.category ?? null))) && (!n(c.d, e) || (0, a.u)(t, i).some(e => !(0, l.d)(e.src)))))
            }),
            g = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e) return null;
                let r = n(p.b, e);
                if (n(c.d, e)) return null;
                let a = n(u.b, e),
                    l = null == r ? null : (0, f.f)(r.business),
                    i = a ?? (null == l ? null : {
                        id: l,
                        src: l,
                        status: "completed",
                        type: "generated-image"
                    });
                if (null == i) return null;
                let o = n(s.b).data?.age_status;
                return "over_18" === o || "unsure" === o ? i : null
            }),
            b = (0, r.d)(i.a, (e, t) => {
                let {
                    get: n
                } = t;
                return (n(u.a, e) || null != n(p.b, e)) && (0, d.zb)(n(d._, e)) && !n(h, e) && null == n(g, e)
            }),
            y = (0, r.d)(i.a, (e, t) => {
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
            l = n("on57");
        n.d(t, {}, {
            a: function(e) {
                let t, n = (0, a.c)(9),
                    {
                        count: i,
                        activeIndex: s,
                        getPageLabel: o,
                        onSelect: u
                    } = e;
                if (n[0] !== s || n[1] !== i || n[2] !== o || n[3] !== u) {
                    let e;
                    n[5] !== s || n[6] !== o || n[7] !== u ? (e = (e, t) => (0, r.jsx)("button", {
                        className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                        type: "button",
                        "aria-current": t === s ? "true" : void 0,
                        "aria-label": o(t),
                        onClick: () => u(t),
                        children: (0, r.jsx)("span", {
                            className: (0, l.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === s ? "w-3 opacity-100" : "w-1 opacity-40")
                        })
                    }, t), n[5] = s, n[6] = o, n[7] = u, n[8] = e) : e = n[8], t = (0, r.jsx)("div", {
                        className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                        children: Array.from({
                            length: i
                        }, e)
                    }), n[0] = s, n[1] = i, n[2] = o, n[3] = u, n[4] = t
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
            l = n("zd8w"),
            i = n("G6mJ"),
            s = n("NDV0");
        let o = (0, l.createContext)(null);

        function u(e) {
            return e?.type === "codexDirective" && e.name === a.a && !0 === e.block
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t, n, a, l) {
                let o, d = e.findIndex(e => "space" !== e.type),
                    c = e[d],
                    f = c?.type === "heading" && (1 === c.depth || 2 === c.depth) && "string" == typeof c.text && c.text.trim() === a.trim() ? e.slice(d + 1) : e,
                    p = f.filter(e => "space" !== e.type),
                    m = e => u(e) ? (0, i.a)(e.attributes, n)?.reference : void 0,
                    h = p.at(-1);
                l && u(h) && !m(h) && p.pop();
                let g = p.findIndex(e => m(e)?.name === "ledger_spend_by_category_recent_transactions");
                g >= 0 ? o = p[g - 1] : l && m(p.at(-2))?.name === "ledger_spend_by_category_detail" && (o = p.at(-1));
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
            l = n("on57"),
            i = n("ygO2");

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
                    let e = (0, l.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                    _ && j ? e = (0, l.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === w ? "size-9" : "size-10") : _ && (e = (0, l.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === w ? "h-9" : "h-10")), f = i.a, p = o, m = "secondary", h = _ ? "full" : "default", g = _ ? "default" : "icon", b = (0, l.b)(e, n), x[7] = n, x[8] = w, x[9] = j, x[10] = _, x[11] = o, x[12] = f, x[13] = p, x[14] = m, x[15] = h, x[16] = g, x[17] = b
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
            l = n("BolX"),
            i = n("zd8w"),
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
                    I = (0, l.x)(s.E, x),
                    C = w ?? I ?? u.a,
                    M = (0, u.c)(C);
                y[0] !== x ? (t = null == x ? null : {
                    kind: "app-server",
                    conversationId: x
                }, y[0] = x, y[1] = t) : t = y[1];
                let P = (0, l.x)(d.threadExecutorTargetByThread$, t),
                    A = P?.hostId === C ? P.environmentId : void 0,
                    [S, N] = (0, i.useState)(null);
                y[2] !== v ? (n = v.trim(), y[2] = v, y[3] = n) : n = y[3];
                let F = n.length > 0,
                    T = F && (0, c.h)(v) ? v : "",
                    {
                        dataUrl: z,
                        src: E,
                        isLoading: D,
                        isError: q,
                        loadSource: B,
                        loadTiming: R,
                        imageCacheHit: L,
                        isShowingCachedImage: O,
                        imageCheck: G,
                        refetch: U,
                        deleted: W
                    } = (0, c.k)(T, j);
                y[4] !== F || y[5] !== M.id || y[6] !== M.kind || y[7] !== C || y[8] !== v ? (f = F ? (0, o.b)(v) : null, "local" === M.kind && M.id, p = null, y[4] = F, y[5] = M.id, y[6] = M.kind, y[7] = C, y[8] = v, y[9] = f, y[10] = p) : (f = y[9], p = y[10]);
                let H = p,
                    K = S?.src === v && S.environmentId === A ? S : null,
                    Q = K?.dataUrl ?? null,
                    V = F ? E ?? H ?? (null != f || T ? Q : v) : null;
                y[11] !== f || y[12] !== x || y[13] !== H || y[14] !== A || y[15] !== C || y[16] !== k || y[17] !== _ || y[18] !== v ? (m = () => {
                    if (null == f || null != H && !_) return;
                    let e = !1;
                    return N({
                        src: v,
                        dataUrl: null,
                        environmentId: A,
                        isLoading: !0
                    }), (0, o.e)(f, C, k, void 0, x, A).then(t => {
                        e || N({
                            src: v,
                            dataUrl: t,
                            environmentId: A,
                            isLoading: !1
                        })
                    }), () => {
                        e = !0
                    }
                }, h = [f, x, H, A, C, k, _, v], y[11] = f, y[12] = x, y[13] = H, y[14] = A, y[15] = C, y[16] = k, y[17] = _, y[18] = v, y[19] = m, y[20] = h) : (m = y[19], h = y[20]), (0, i.useEffect)(m, h), y[21] !== z || y[22] !== Q || y[23] !== v ? (g = z ?? Q ?? (v.startsWith("data:image/") ? v : null), y[21] = z, y[22] = Q, y[23] = v, y[24] = g) : g = y[24];
                let X = z ?? Q ?? V,
                    $ = D || null != f && null == H && (null == K || K.isLoading),
                    J = !!T && q;
                return y[25] !== W || y[26] !== L || y[27] !== G || y[28] !== O || y[29] !== B || y[30] !== R || y[31] !== V || y[32] !== U || y[33] !== g || y[34] !== X || y[35] !== $ || y[36] !== J ? (b = {
                    dataUrl: g,
                    previewSrc: V,
                    downloadSrc: X,
                    isLoading: $,
                    isError: J,
                    loadSource: B,
                    loadTiming: R,
                    imageCacheHit: L,
                    isShowingCachedImage: O,
                    imageCheck: G,
                    refetch: U,
                    deleted: W
                }, y[25] = W, y[26] = L, y[27] = G, y[28] = O, y[29] = B, y[30] = R, y[31] = V, y[32] = U, y[33] = g, y[34] = X, y[35] = $, y[36] = J, y[37] = b) : b = y[37], b
            }
        })
    }),
    jo5I: (function(e, t, n) {
        n.d(t, {
            a: () => C
        });
        var r = n("ABep"),
            a = n("QosV"),
            l = n("slpy"),
            i = n("on57"),
            s = n("BolX"),
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
                [l, i] = (0, o.useState)(!!e.open);
            return e.open && !l && i(!0), n[0] !== l || n[1] !== e ? (t = l ? (0, r.jsx)(o.Suspense, {
                fallback: (0, r.jsx)(x, {
                    ...e
                }),
                children: (0, r.jsx)(y, {
                    ...e
                })
            }) : null, n[0] = l, n[1] = e, n[2] = t) : t = n[2], t
        }

        function x(e) {
            let t, n, l, i = (0, a.c)(10),
                {
                    open: s,
                    onOpenChange: o,
                    onCloseAutoFocus: u,
                    failed: c
                } = e,
                f = void 0 !== c && c,
                p = !!s;
            return i[0] !== o ? (t = e => o?.(e), i[0] = o, i[1] = t) : t = i[1], i[2] !== f ? (n = f ? (0, r.jsx)(d.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, r.jsx)(d.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), i[2] = f, i[3] = n) : n = i[3], i[4] !== f || i[5] !== u || i[6] !== p || i[7] !== t || i[8] !== n ? (l = (0, r.jsx)(b.a, {
                open: p,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: n
            }), i[4] = f, i[5] = u, i[6] = p, i[7] = t, i[8] = n, i[9] = l) : l = i[9], l
        }
        var w = n("IZUf"),
            j = n("DF9M"),
            _ = n("YyTq"),
            k = n("lf9C");
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
            let t, n, m, h, b, y, x, I, C, N, F, T, z, E, D, q, B, R, L, O, G, U, W, H, K, Q, V, X, $, J = (0, a.c)(89),
                {
                    className: Z,
                    appearance: Y,
                    visibility: ee,
                    isSaved: et,
                    isBusy: en,
                    isCheckingStatus: er,
                    selectedFolderId: ea,
                    onToggleFavorite: el,
                    onSelectFolder: ei
                } = e,
                es = void 0 === Y ? "media-overlay" : Y,
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
            J[8] !== ex || J[9] !== et || J[10] !== el ? (m = () => {
                ex ? ec(!1) : (eh(!0), ec(!et), el())
            }, J[8] = ex, J[9] = et, J[10] = el, J[11] = m) : m = J[11];
            let ej = m;
            J[12] !== es || J[13] !== Z || J[14] !== et || J[15] !== ed || J[16] !== ee ? (h = (0, i.b)("select-none", "always" === ee || "entity-header" === es || "map-card" === es || et || ed ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === es ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], Z), J[12] = es, J[13] = Z, J[14] = et, J[15] = ed, J[16] = ee, J[17] = h) : h = J[17];
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
            J[22] === Symbol.for("react.memo_cache_sentinel") ? (I = () => eh(!1), C = () => eh(!1), N = () => eh(!1), J[22] = I, J[23] = C, J[24] = N) : (I = J[22], C = J[23], N = J[24]), J[25] !== ej ? (F = e => {
                e.preventDefault(), e.stopPropagation(), ej()
            }, J[25] = ej, J[26] = F) : F = J[26], J[27] !== ex || J[28] !== et || J[29] !== ej ? (T = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? ej() : ex || et || ec(!0))
            }, J[27] = ex, J[28] = et, J[29] = ej, J[30] = T) : T = J[30];
            let eA = et ? j.a : _.a;
            return J[31] !== eA ? (z = (0, r.jsx)(p.a, {
                asset: eA
            }), J[31] = eA, J[32] = z) : z = J[32], J[33] !== es || J[34] !== et || J[35] !== n || J[36] !== eI || J[37] !== eC || J[38] !== eM || J[39] !== eP || J[40] !== F || J[41] !== T || J[42] !== z ? (E = (0, r.jsx)(A, {
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
                onBlur: N,
                onPointerDown: P,
                onClick: F,
                onKeyDown: T,
                children: z
            }), J[33] = es, J[34] = et, J[35] = n, J[36] = eI, J[37] = eC, J[38] = eM, J[39] = eP, J[40] = F, J[41] = T, J[42] = z, J[43] = E) : E = J[43], J[44] !== n || J[45] !== E || J[46] !== ek ? (D = (0, r.jsx)(l.a, {
                content: n,
                disabled: ek,
                children: E
            }), J[44] = n, J[45] = E, J[46] = ek, J[47] = D) : D = J[47], J[48] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, r.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, r.jsx)(d.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), J[48] = q) : q = J[48], J[49] === Symbol.for("react.memo_cache_sentinel") ? (B = () => {
                ec(!1), ep(!0)
            }, R = (0, r.jsx)(p.a, {
                asset: k.a
            }), J[49] = B, J[50] = R) : (B = J[49], R = J[50]), J[51] !== ex || J[52] !== ew ? (L = (0, r.jsx)(c.a, {
                ref: ev,
                "aria-label": ew,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: B,
                children: R
            }), J[51] = ex, J[52] = ew, J[53] = L) : L = J[53], J[54] !== ex || J[55] !== L ? (O = (0, r.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: L
            }), J[54] = ex, J[55] = L, J[56] = O) : O = J[56], J[57] !== ew || J[58] !== O ? (G = (0, r.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [q, (0, r.jsx)(l.a, {
                    content: ew,
                    children: O
                })]
            }), J[57] = ew, J[58] = O, J[59] = G) : G = J[59], J[60] === Symbol.for("react.memo_cache_sentinel") ? (U = () => ev.current?.focus(), J[60] = U) : U = J[60], J[61] !== ex || J[62] !== ei || J[63] !== ea ? (W = (0, r.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, r.jsx)(S, {
                    isBusy: ex,
                    selectedFolderId: ea,
                    onSelectFolder: ei,
                    focusCreateFolder: U
                })
            }), J[61] = ex, J[62] = ei, J[63] = ea, J[64] = W) : W = J[64], J[65] !== ed || J[66] !== eg || J[67] !== D || J[68] !== G || J[69] !== W || J[70] !== b ? (H = (0, r.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: ed,
                onCloseAutoFocus: b,
                onOpenChange: y,
                triggerButton: D,
                children: [G, W]
            }), J[65] = ed, J[66] = eg, J[67] = D, J[68] = G, J[69] = W, J[70] = b, J[71] = H) : H = J[71], J[72] !== et || J[73] !== H || J[74] !== h || J[75] !== e_ ? (K = (0, r.jsx)("div", {
                className: h,
                "data-saved": et,
                "data-state": e_,
                children: H
            }), J[72] = et, J[73] = H, J[74] = h, J[75] = e_, J[76] = K) : K = J[76], J[77] === Symbol.for("react.memo_cache_sentinel") ? (Q = e => {
                e.preventDefault(), ey.current?.focus()
            }, J[77] = Q) : Q = J[77], J[78] !== ei || J[79] !== eo.query ? (V = async e => {
                await eo.query.cancel(w.a);
                let t = !1;
                eo.query.setData(w.a, n => (t = null == n, [...(n ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(M))), t && eo.query.invalidate(w.a), await ei(e, !0)
            }, J[78] = ei, J[79] = eo.query, J[80] = V) : V = J[80], J[81] !== ef || J[82] !== eo.value.accountId || J[83] !== eo.value.userId || J[84] !== V ? (X = (0, r.jsx)(v, {
                open: ef,
                accountId: eo.value.accountId,
                userId: eo.value.userId,
                directoryId: null,
                onOpenChange: ep,
                onCloseAutoFocus: Q,
                onCreated: V
            }), J[81] = ef, J[82] = eo.value.accountId, J[83] = eo.value.userId, J[84] = V, J[85] = X) : X = J[85], J[86] !== K || J[87] !== X ? ($ = (0, r.jsxs)(r.Fragment, {
                children: [K, X]
            }), J[86] = K, J[87] = X, J[88] = $) : $ = J[88], $
        }

        function M(e, t) {
            return e.name.localeCompare(t.name)
        }

        function P(e) {
            e.preventDefault()
        }

        function A(e) {
            let t, n, l, i = (0, a.c)(6);
            return i[0] !== e ? ({
                appearance: t,
                ...n
            } = e, i[0] = e, i[1] = t, i[2] = n) : (t = i[1], n = i[2]), i[3] !== t || i[4] !== n ? (l = "media-overlay" === t ? (0, r.jsx)(h.a, {
                ...n,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, r.jsx)(c.a, {
                ...n,
                ...I[t]
            }), i[3] = t, i[4] = n, i[5] = l) : l = i[5], l
        }

        function S(e) {
            let t, n, l = (0, a.c)(16),
                {
                    focusCreateFolder: i,
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
                return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…",
                        description: "Status in the favorite folder menu while personal Library folders load"
                    })
                }), l[0] = e) : e = l[0], e
            }
            if (g && null == p) {
                let e, t, n, a;
                return l[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), l[1] = e) : e = l[1], l[2] !== i || l[3] !== b ? (t = e => {
                    e.preventDefault(), i(), b()
                }, l[2] = i, l[3] = b, l[4] = t) : t = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(d.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), l[5] = n) : n = l[5], l[6] !== t ? (a = (0, r.jsxs)(r.Fragment, {
                    children: [e, (0, r.jsx)(f.c.Item, {
                        onSelect: t,
                        children: n
                    })]
                }), l[6] = t, l[7] = a) : a = l[7], a
            }
            if (p?.length === 0) {
                let e;
                return l[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet",
                        description: "Empty state in the favorite folder menu; Create folder is still available"
                    })
                }), l[8] = e) : e = l[8], e
            }
            return l[9] !== p || l[10] !== o || l[11] !== c || l[12] !== u ? (t = p?.map(e => (0, r.jsx)(f.c.Item, {
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
                    children: [(0, r.jsx)(N, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, r.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, r.jsx)(m.Ub, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), l[9] = p, l[10] = o, l[11] = c, l[12] = u, l[13] = t) : t = l[13], l[14] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), l[14] = t, l[15] = n) : n = l[15], n
        }

        function N(e) {
            let t, n, l, s = (0, a.c)(8),
                {
                    imageUrl: u
                } = e,
                [d, c] = (0, o.useState)(null),
                f = null != u && u !== d,
                p = !f && "border border-default bg-surface";
            return s[0] !== p ? (t = (0, i.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), s[0] = p, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (n = f ? (0, r.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => c(u)
            }) : (0, r.jsx)(m.wd, {}), s[2] = u, s[3] = f, s[4] = n) : n = s[4], s[5] !== t || s[6] !== n ? (l = (0, r.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: n
            }), s[5] = t, s[6] = n, s[7] = l) : l = s[7], l
        }
    }),
    IZUf: (function(e, t, n) {
        var r = n("BolX"),
            a = n("Kwur"),
            l = n("Fmx8");
        let i = (0, r.r)(l.c, e => {
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
            a: i,
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