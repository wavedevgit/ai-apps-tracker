export const __rspack_esm_ids = [301030];
export const __webpack_modules__ = {
    bfX9: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
                return !!a?.ownership_state_enabled && (a.ownership?.available_action === b || a.ownership?.available_action === "view_request" && a.ownership.current_request?.kind === b) && !a.profiles.some(a => a.allowed_actions.includes("manage")) && ("claim" === b || !0 === a.is_verified)
            }
        })
    }),
    xAIC: (function(a, b, c) {
        var d = c("lAQI");
        let e = d.F({
                index: d.L().regex(/^\d+$/).transform(Number)
            }).strip(),
            f = d.F({
                marker_text: d.L().trim().min(1).optional(),
                marker_type: d.L().trim().min(1).optional()
            }).strip();
        c.d(b, {}, {
            a: function(a) {
                let b = e.safeParse(a);
                return b.success ? b.data.index : null
            },
            b: function(a) {
                let b = f.safeParse(a);
                return b.success ? b.data.marker_text ?? null : null
            },
            c: function(a) {
                let b = f.safeParse(a);
                return b.success ? b.data.marker_type ?? null : null
            }
        })
    }),
    G6mJ: (function(a, b, c) {
        var d = c("rKAs"),
            e = c("xAIC");
        c.d(b, {}, {
            a: function(a, b) {
                if (null == b) return null;
                let c = (0, e.a)(a);
                if (null != c) {
                    let a = b[c];
                    return null == a ? null : {
                        index: c,
                        reference: a
                    }
                }
                let f = (0, e.b)(a);
                if (null == f) return null;
                let g = b.findIndex(a => (0, d.l)(a) === f);
                if (-1 === g) return null;
                let h = b[g];
                return null == h ? null : {
                    index: g,
                    reference: h
                }
            }
        })
    }),
    niC2: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("Sm6l"),
            j = c("vxGj"),
            k = c("HOLv"),
            l = c("r21w"),
            m = c("SUhA"),
            n = c("JwGC"),
            o = c("SbOw"),
            p = c("LQio"),
            q = c("ZUns"),
            r = c("apt2");

        function s(a) {
            let b, c, i, j, k, n, o, p, q = (0, e.c)(36),
                {
                    conversationId: r,
                    fallbackSrc: s,
                    image: t,
                    imageAssetResolver: u,
                    imageNumber: v,
                    imageRef: w,
                    onOpen: x,
                    single: y,
                    presentation: z
                } = a,
                A = (0, h.a)(),
                [B, C] = (0, g.useState)(null),
                [D, E] = (0, g.useState)(null),
                F = null != t.previewSrc && t.previewSrc !== D ? t.previewSrc : t.src;
            q[0] !== r || q[1] !== u || q[2] !== F ? (b = {
                src: F,
                conversationId: r,
                imageAssetResolver: u,
                shouldLoadFileDataUrl: !1
            }, q[0] = r, q[1] = u, q[2] = F, q[3] = b) : b = q[3];
            let {
                previewSrc: G
            } = (0, m.a)(b), H = null != s && (null == G || B !== G), I = y && "w-full", J = !y && ("dialog" === z ? "w-2/3" : "max-w-19/20");
            return q[4] !== I || q[5] !== J ? (c = (0, f.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", I, J), q[4] = I, q[5] = J, q[6] = c) : c = q[6], q[7] !== s || q[8] !== t.height || q[9] !== t.width || q[10] !== z || q[11] !== y ? (i = y || "dialog" === z ? void 0 : {
                aspectRatio: null == s ? `${t.width??1}/${t.height??1}` : "5/4"
            }, q[7] = s, q[8] = t.height, q[9] = t.width, q[10] = z, q[11] = y, q[12] = i) : i = q[12], q[13] !== v || q[14] !== A ? (j = A.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}"
            }, {
                number: v
            }), q[13] = v, q[14] = A, q[15] = j) : j = q[15], q[16] !== x ? (k = a => x(a.currentTarget), q[16] = x, q[17] = k) : k = q[17], q[18] !== s || q[19] !== t.previewSrc || q[20] !== w || q[21] !== B || q[22] !== G || q[23] !== H ? (n = null == G ? (0, d.jsx)(l.a, {
                className: "h-full w-full"
            }) : (0, d.jsx)("img", {
                ref: H ? void 0 : w,
                className: (0, f.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == s && B !== G && "opacity-0"),
                src: G,
                alt: "",
                draggable: !1,
                loading: null == s ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => C(G),
                onError: () => E(t.previewSrc ?? null)
            }), q[18] = s, q[19] = t.previewSrc, q[20] = w, q[21] = B, q[22] = G, q[23] = H, q[24] = n) : n = q[24], q[25] !== s || q[26] !== w || q[27] !== H ? (o = H ? (0, d.jsx)("img", {
                ref: w,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: s,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, q[25] = s, q[26] = w, q[27] = H, q[28] = o) : o = q[28], q[29] !== o || q[30] !== c || q[31] !== i || q[32] !== j || q[33] !== k || q[34] !== n ? (p = (0, d.jsxs)("button", {
                className: c,
                style: i,
                "aria-label": j,
                type: "button",
                onClick: k,
                children: [n, o]
            }), q[29] = o, q[30] = c, q[31] = i, q[32] = j, q[33] = k, q[34] = n, q[35] = p) : p = q[35], p
        }

        function t(a) {
            let b, c, f, g, i = (0, e.c)(16),
                {
                    conversationId: j,
                    image: k,
                    imageAssetResolver: l,
                    imageNumber: o,
                    onClose: p,
                    onCloseAutoFocus: q,
                    onNextImage: r,
                    onPreviousImage: s
                } = a,
                t = (0, h.a)();
            i[0] !== j || i[1] !== k.src || i[2] !== l ? (b = {
                src: k.src,
                conversationId: j,
                imageAssetResolver: l,
                shouldLoadFileDataUrl: !1
            }, i[0] = j, i[1] = k.src, i[2] = l, i[3] = b) : b = i[3];
            let {
                previewSrc: u
            } = (0, m.a)(b);
            return null == u ? null : (i[4] !== o || i[5] !== t ? (c = t.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}"
            }, {
                number: o
            }), i[4] = o, i[5] = t, i[6] = c) : c = i[6], i[7] !== p ? (f = a => {
                a || p()
            }, i[7] = p, i[8] = f) : f = i[8], i[9] !== q || i[10] !== r || i[11] !== s || i[12] !== u || i[13] !== c || i[14] !== f ? (g = (0, d.jsx)(n.a, {
                alt: c,
                src: u,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: q,
                onOpenChange: f,
                onNextImage: r,
                onPreviousImage: s
            }), i[9] = q, i[10] = r, i[11] = s, i[12] = u, i[13] = c, i[14] = f, i[15] = g) : g = i[15], g)
        }

        function u(a, b) {
            let c = a.children.item(b);
            if (!(c instanceof HTMLElement)) return 0;
            let d = "rtl" === getComputedStyle(a).direction,
                e = a.scrollWidth - a.clientWidth,
                f = c.offsetLeft - (a.clientWidth - c.offsetWidth) / 2;
            return 0 === b ? f = 0 : b === a.children.length - 1 && (f = d ? c.offsetLeft : c.offsetLeft + c.offsetWidth - a.clientWidth), d ? Math.max(-e, Math.min(0, f)) : Math.max(0, Math.min(e, f))
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, n, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K = (0, e.c)(63),
                    {
                        ref: L,
                        conversationId: M,
                        businessProfileHeader: N,
                        firstPhotoFallbackSrc: O,
                        imageAssetResolver: P,
                        images: Q,
                        onOpenImage: R,
                        onArrowClick: S,
                        presentation: T
                    } = a,
                    U = void 0 === T ? "sidebar" : T,
                    V = (0, h.a)(),
                    W = (0, g.useContext)(p.a),
                    X = (0, g.useRef)(null),
                    Y = (0, g.useRef)(null),
                    Z = (0, g.useRef)(null);
                K[0] === Symbol.for("react.memo_cache_sentinel") ? (b = new Map, K[0] = b) : b = K[0];
                let $ = (0, g.useRef)(b);
                K[1] === Symbol.for("react.memo_cache_sentinel") ? (c = () => ({
                    getThumbnail: a => $.current.get(a) ?? null
                }), K[1] = c) : c = K[1], (0, g.useImperativeHandle)(L, c);
                let [_, aa] = (0, g.useState)(0), [ab, ac] = (0, g.useState)(null);
                K[2] !== ab ? (l = a => a.id === ab, K[2] = ab, K[3] = l) : l = K[3];
                let ad = Q.findIndex(l),
                    ae = Q[ad],
                    af = Math.min(_, Q.length - 1);
                K[4] === Symbol.for("react.memo_cache_sentinel") ? (m = a => {
                    let b = X.current;
                    if (null == b) return;
                    let c = u(b, a);
                    Y.current = 1 >= Math.abs(b.scrollLeft - c) ? null : c, b.scrollTo({
                        left: c
                    }), aa(a)
                }, K[4] = m) : m = K[4];
                let ag = m;
                K[5] !== Q.length ? (n = a => {
                    let b = 0,
                        c = 1 / 0;
                    for (let d = 0; d < Q.length; d += 1) {
                        let e = Math.abs(u(a, d) - a.scrollLeft);
                        e < c && (c = e, b = d)
                    }
                    aa(b)
                }, K[5] = Q.length, K[6] = n) : n = K[6];
                let ah = n,
                    ai = !N && "dialog" !== U && "mb-5";
                K[7] !== ai ? (v = (0, f.b)("-mx-6", ai), K[7] = ai, K[8] = v) : v = K[8];
                let aj = "dialog" === U && "h-56 sm:h-64",
                    ak = "cover" === U && "aspect-3/1",
                    al = "sidebar" === U && "aspect-5/4";
                K[9] !== aj || K[10] !== ak || K[11] !== al ? (w = (0, f.b)("group/photos relative overflow-hidden select-none", aj, ak, al), K[9] = aj, K[10] = ak, K[11] = al, K[12] = w) : w = K[12], K[13] !== V ? (x = V.formatMessage({
                    id: "chatgpt.imageGroup.photos",
                    defaultMessage: "Photos"
                }), K[13] = V, K[14] = x) : x = K[14], K[15] !== Q.length || K[16] !== V ? (y = Q.length > 1 ? V.formatMessage({
                    id: "chatgpt.imageGroup.carouselRole",
                    defaultMessage: "carousel"
                }) : void 0, K[15] = Q.length, K[16] = V, K[17] = y) : y = K[17], K[18] !== Q.length || K[19] !== ag || K[20] !== af ? (z = a => {
                    if (!(Q.length < 2) && !a.altKey && !a.ctrlKey && !a.metaKey && !a.shiftKey && ("ArrowRight" === a.key || "ArrowLeft" === a.key)) {
                        a.preventDefault(), a.stopPropagation();
                        let b = "rtl" === getComputedStyle(a.currentTarget).direction,
                            c = a.key === (b ? "ArrowLeft" : "ArrowRight") ? (af + 1) % Q.length : Math.max(0, af - 1);
                        ag(c);
                        let d = X.current,
                            e = d?.children.item(c);
                        a.target instanceof HTMLButtonElement && a.target.parentElement === d && e instanceof HTMLButtonElement && e.focus({
                            preventScroll: !0
                        })
                    }
                }, K[18] = Q.length, K[19] = ag, K[20] = af, K[21] = z) : z = K[21], K[22] !== ah ? (A = a => {
                    let b = a.currentTarget,
                        c = Y.current;
                    if (null != c) {
                        1 >= Math.abs(b.scrollLeft - c) && (Y.current = null);
                        return
                    }
                    ah(b)
                }, B = a => {
                    Y.current = null, ah(a.currentTarget)
                }, K[22] = ah, K[23] = A, K[24] = B) : (A = K[23], B = K[24]), K[25] === Symbol.for("react.memo_cache_sentinel") ? (C = () => {
                    Y.current = null
                }, D = () => {
                    Y.current = null
                }, K[25] = C, K[26] = D) : (C = K[25], D = K[26]);
                let am = Q.map((a, b) => (0, d.jsx)(s, {
                    conversationId: M,
                    fallbackSrc: 0 === b ? O : void 0,
                    image: a,
                    imageAssetResolver: P,
                    imageNumber: b + 1,
                    imageRef: b => {
                        if (null != b) return $.current.set(a.id, b), () => {
                            $.current.get(a.id) === b && $.current.delete(a.id)
                        }
                    },
                    single: 1 === Q.length,
                    presentation: U,
                    onOpen: c => {
                        null != R ? R(b) : (Z.current = c, ac(a.id))
                    }
                }, a.id));
                K[27] !== A || K[28] !== B || K[29] !== C || K[30] !== D || K[31] !== am ? (E = (0, d.jsx)("div", {
                    ref: X,
                    className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                    onScroll: A,
                    onScrollEnd: B,
                    onPointerDown: C,
                    onWheel: D,
                    children: am
                }), K[27] = A, K[28] = B, K[29] = C, K[30] = D, K[31] = am, K[32] = E) : E = K[32], K[33] !== Q.length || K[34] !== V || K[35] !== S || K[36] !== ag || K[37] !== af ? (F = Q.length > 1 ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsxs)("div", {
                        className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-hover/photos:[&>button]:pointer-events-auto [[data-entity-photos]:has(:focus-visible)>&]:opacity-100 [[data-entity-photos]:has(:focus-visible)>&>[data-photo-carousel-arrow]]:pointer-events-auto",
                        children: [(0, d.jsx)(i.a, {
                            className: 0 === af ? "invisible" : void 0,
                            "data-photo-carousel-arrow": !0,
                            "aria-label": V.formatMessage({
                                id: "chatgpt.imageGroup.previousPhoto",
                                defaultMessage: "Previous photo"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let a = Math.max(0, af - 1);
                                a !== af && S?.("previous", a), ag(a)
                            },
                            children: (0, d.jsx)(k.a, {
                                className: "rtl:rotate-180",
                                asset: q.a
                            })
                        }), (0, d.jsx)(i.a, {
                            "data-photo-carousel-arrow": !0,
                            "aria-label": V.formatMessage({
                                id: "chatgpt.imageGroup.nextPhoto",
                                defaultMessage: "Next photo"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let a = (af + 1) % Q.length;
                                a !== af && S?.("next", a), ag(a)
                            },
                            children: (0, d.jsx)(k.a, {
                                className: "rtl:rotate-180",
                                asset: r.a
                            })
                        })]
                    }), Q.length <= 20 ? (0, d.jsx)("div", {
                        className: "absolute inset-x-0 bottom-3 flex justify-center",
                        children: (0, d.jsx)(j.a, {
                            count: Q.length,
                            activeIndex: af,
                            getPageLabel: a => V.formatMessage({
                                id: "chatgpt.imageGroup.goToPhoto",
                                defaultMessage: "Go to photo {number}"
                            }, {
                                number: a + 1
                            }),
                            onSelect: ag
                        })
                    }) : null]
                }) : null, K[33] = Q.length, K[34] = V, K[35] = S, K[36] = ag, K[37] = af, K[38] = F) : F = K[38], K[39] !== W || K[40] !== w || K[41] !== x || K[42] !== y || K[43] !== z || K[44] !== E || K[45] !== F ? (G = (0, d.jsxs)("div", {
                    ref: W,
                    className: w,
                    "data-entity-photos": !0,
                    "aria-label": x,
                    "aria-roledescription": y,
                    role: "region",
                    onKeyDown: z,
                    children: [E, F]
                }), K[39] = W, K[40] = w, K[41] = x, K[42] = y, K[43] = z, K[44] = E, K[45] = F, K[46] = G) : G = K[46], K[47] !== M || K[48] !== P || K[49] !== Q || K[50] !== Z || K[51] !== ae || K[52] !== ad || K[53] !== ac ? (H = null != ae ? (0, d.jsx)(t, {
                    conversationId: M,
                    image: ae,
                    imageAssetResolver: P,
                    imageNumber: ad + 1,
                    onClose: () => ac(null),
                    onCloseAutoFocus: a => {
                        a.preventDefault(), Z.current?.focus()
                    },
                    onPreviousImage: ad > 0 ? () => ac(Q[ad - 1].id) : void 0,
                    onNextImage: ad < Q.length - 1 ? () => ac(Q[ad + 1].id) : void 0
                }) : null, K[47] = M, K[48] = P, K[49] = Q, K[50] = Z, K[51] = ae, K[52] = ad, K[53] = ac, K[54] = H) : H = K[54], K[55] !== G || K[56] !== H || K[57] !== v ? (I = (0, d.jsxs)("div", {
                    className: v,
                    "data-testid": "chatgpt-image-group-carousel",
                    children: [G, H]
                }), K[55] = G, K[56] = H, K[57] = v, K[58] = I) : I = K[58];
                let an = I;
                return K[59] !== N || K[60] !== an || K[61] !== Q.length ? (J = N ? (0, d.jsx)(o.b, {
                    ...N,
                    children: Q.length > 0 ? an : null
                }) : an, K[59] = N, K[60] = an, K[61] = Q.length, K[62] = J) : J = K[62], J
            }
        })
    }),
    NDDl: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("Q840"),
            g = c("zd8w"),
            h = c("oyxz"),
            i = c("bf6R"),
            j = c("OWtl"),
            k = c("zHQF"),
            l = c("TUMj"),
            m = c("w7PD"),
            n = c("cGwJ"),
            o = c("JV0C");

        function p(a) {
            let b, c = (0, e.c)(2),
                {
                    nativeUnavailable: f
                } = a;
            return c[0] !== f ? (b = (0, d.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: f ? (0, d.jsx)(k.b, {}) : (0, d.jsx)(h.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn\u2019t open this chat. Try again."
                })
            }), c[0] = f, c[1] = b) : b = c[1], b
        }

        function q(a) {
            let b, c, g = (0, e.c)(5),
                {
                    conversationId: h,
                    data: i
                } = a,
                j = (0, f.x)(m.b, h);
            if (null == j) return null;
            g[0] !== i ? (b = m.a.safeParse(i).data?.items, g[0] = i, g[1] = b) : b = g[1];
            let k = b;
            return g[2] !== j || g[3] !== k ? (c = k ? (0, d.jsx)(r, {
                chat: j,
                items: k,
                onSelect: j.open
            }) : null, g[2] = j, g[3] = k, g[4] = c) : c = g[4], c
        }

        function r(a) {
            let b, c, f, g = (0, e.c)(13),
                {
                    chat: h,
                    items: j,
                    onSelect: k
                } = a;
            if (g[0] !== h || g[1] !== j || g[2] !== k) {
                let a;
                g[4] !== h || g[5] !== k ? (a = a => (0, d.jsxs)(o.a, {
                    allowShrink: !0,
                    color: "conversationPill",
                    size: "suggestedQuestion",
                    disabled: null != h.pendingId,
                    loading: h.pendingId === a.id,
                    onClick: () => k(a),
                    children: [(0, d.jsx)(i.Ob, {
                        "aria-hidden": !0
                    }), (0, d.jsx)("span", {
                        className: "min-w-0 text-start break-words whitespace-normal",
                        children: a.label
                    })]
                }, a.id), g[4] = h, g[5] = k, g[6] = a) : a = g[6], b = j.map(a), g[0] = h, g[1] = j, g[2] = k, g[3] = b
            } else b = g[3];
            return g[7] !== h || g[8] !== j ? (c = j.some(a => {
                let {
                    id: b
                } = a;
                return b === h.failedId
            }) ? (0, d.jsx)(p, {
                nativeUnavailable: h.nativeUnavailable
            }) : null, g[7] = h, g[8] = j, g[9] = c) : c = g[9], g[10] !== b || g[11] !== c ? (f = (0, d.jsxs)("div", {
                className: "flex flex-col items-start gap-2.5 pb-4",
                children: [b, c]
            }), g[10] = b, g[11] = c, g[12] = f) : f = g[12], f
        }

        function s(a, b) {
            return {
                id: `profile-starter-${b}`,
                label: a,
                prefill: a
            }
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i = (0, e.c)(7),
                    {
                        conversationId: k,
                        actions: l,
                        children: n
                    } = a,
                    o = (0, f.y)(j.a);
                return i[0] !== l || i[1] !== k || i[2] !== o ? (b = () => {
                    let a = o.watch(a => {
                        let {
                            get: b
                        } = a;
                        b(m.b, k)
                    });
                    return o.set(m.b, k, l), () => {
                        o.get(m.b, k) === l && o.set(m.b, k, null), a()
                    }
                }, c = [o, k, l], i[0] = l, i[1] = k, i[2] = o, i[3] = b, i[4] = c) : (b = i[3], c = i[4]), (0, g.useLayoutEffect)(b, c), i[5] !== n ? (h = (0, d.jsx)(d.Fragment, {
                    children: n
                }), i[5] = n, i[6] = h) : h = i[6], h
            },
            b: function(a) {
                let b, c, g, i, j, k = (0, e.c)(15),
                    {
                        conversationId: l
                    } = a,
                    n = (0, f.x)(m.b, l);
                if (n?.startChat == null) return null;
                let q = n.startChat,
                    r = null != n.pendingId,
                    s = n.pendingId === q.id;
                return k[0] !== q || k[1] !== n ? (b = () => n.open(q, "start-chat"), k[0] = q, k[1] = n, k[2] = b) : b = k[2], k[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(h.a, {
                    id: "chatgpt.entity.businessProfile.startChat",
                    defaultMessage: "Start chat"
                }), k[3] = c) : c = k[3], k[4] !== r || k[5] !== s || k[6] !== b ? (g = (0, d.jsx)(o.a, {
                    color: "primary",
                    size: "businessProfileAction",
                    disabled: r,
                    loading: s,
                    onClick: b,
                    children: c
                }), k[4] = r, k[5] = s, k[6] = b, k[7] = g) : g = k[7], k[8] !== q.id || k[9] !== n.failedId || k[10] !== n.nativeUnavailable ? (i = n.failedId === q.id ? (0, d.jsx)(p, {
                    nativeUnavailable: n.nativeUnavailable
                }) : null, k[8] = q.id, k[9] = n.failedId, k[10] = n.nativeUnavailable, k[11] = i) : i = k[11], k[12] !== g || k[13] !== i ? (j = (0, d.jsxs)(d.Fragment, {
                    children: [g, i]
                }), k[12] = g, k[13] = i, k[14] = j) : j = k[14], j
            },
            c: function(a) {
                let b, c = (0, e.c)(5),
                    {
                        conversationId: g,
                        after: h
                    } = a,
                    i = void 0 === h ? "transcript" : h,
                    j = (0, f.x)(m.b, g),
                    k = j?.suggestedQuestions,
                    l = (0, f.x)(k?.length ? n.a : null, g);
                return c[0] !== i || c[1] !== j || c[2] !== l || c[3] !== k ? (b = j && k?.length && l === i ? (0, d.jsx)(r, {
                    chat: j,
                    items: k.map(s),
                    onSelect: a => j.open(a, "suggestion")
                }) : null, c[0] = i, c[1] = j, c[2] = l, c[3] = k, c[4] = b) : b = c[4], b
            },
            d: function(a) {
                let b, c = (0, e.c)(3),
                    {
                        data: f
                    } = a,
                    g = (0, l.e)();
                return c[0] !== f || c[1] !== g ? (b = g?.conversationType === "sidebar" ? (0, d.jsx)(q, {
                    conversationId: g.conversationId,
                    data: f
                }) : null, c[0] = f, c[1] = g, c[2] = b) : b = c[2], b
            }
        })
    }),
    FQiC: (function(a, b, c) {
        var d = c("Q840"),
            e = c("zd8w"),
            f = c("Cslg"),
            g = c("OWtl"),
            h = c("tZ3A"),
            i = c("orgn");
        let j = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(h.c, a)?.businessProfile, e = c(i.a, a);
                return {
                    conversationId: a,
                    accountId: c(f.f),
                    userId: c(f.j),
                    profileId: e?.profileId ?? null,
                    identity: JSON.stringify([e?.profileId, e?.source, e?.source === "entity-knowledge" ? null : d ?? null])
                }
            }),
            k = (0, d.j)(g.a, (a, b) => {
                let {
                    signal: c
                } = b;
                return {
                    isOpen$: c(!1),
                    triggerRef: (0, e.createRef)(),
                    acquisitionJourneyId: (0, e.createRef)()
                }
            }, {
                autoDispose: !0
            });
        c.d(b, {}, {
            a: k,
            b: j
        })
    }),
    SbOw: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("E6P3"),
            i = c("zSQm"),
            j = c("WAdu"),
            k = c("TUMj"),
            l = c("LQio");

        function m(a) {
            let b, c, l = (0, e.c)(7),
                {
                    src: m,
                    overlap: n
                } = a,
                o = void 0 !== n && n,
                p = (0, g.useContext)(j.a),
                q = (0, k.e)();
            l[0] !== p || l[1] !== m || l[2] !== q?.shouldBlockExternalEgress ? (b = m && "restricted" !== p && !q?.shouldBlockExternalEgress ? (0, i.b)(m) : void 0, l[0] = p, l[1] = m, l[2] = q?.shouldBlockExternalEgress, l[3] = b) : b = l[3];
            let r = b;
            return l[4] !== o || l[5] !== r ? (c = r ? (0, d.jsx)(h.a, {
                alt: "",
                src: r,
                fallback: (0, d.jsx)(d.Fragment, {}),
                className: (0, f.b)("size-18 rounded-2xl border-4 border-surface bg-surface", o ? "relative -mt-8 self-start" : "mb-3")
            }, r) : null, l[4] = o, l[5] = r, l[6] = c) : c = l[6], c
        }
        c.d(b, {}, {
            a: m,
            b: function(a) {
                let b, c, h, i = (0, e.c)(12),
                    {
                        children: j,
                        logoUrl: k,
                        logoPrimaryColor: n,
                        photosPending: o
                    } = a,
                    p = (0, g.useContext)(l.a);
                if (!j && !o && !n) {
                    let a;
                    return i[0] !== k ? (a = (0, d.jsx)(m, {
                        src: k
                    }), i[0] = k, i[1] = a) : a = i[1], a
                }
                return i[2] !== j || i[3] !== n || i[4] !== o || i[5] !== p ? (b = j ?? (0, d.jsx)("div", {
                    ref: p,
                    "aria-hidden": "true",
                    "data-entity-photos": !0,
                    className: (0, f.b)("-mx-6 bg-text/10", o ? "aspect-5/4" : "aspect-3/1"),
                    style: {
                        backgroundColor: n ?? void 0
                    }
                }), i[2] = j, i[3] = n, i[4] = o, i[5] = p, i[6] = b) : b = i[6], i[7] !== k ? (c = (0, d.jsx)(m, {
                    src: k,
                    overlap: !0
                }), i[7] = k, i[8] = c) : c = i[8], i[9] !== b || i[10] !== c ? (h = (0, d.jsxs)("div", {
                    className: "mb-5 flex flex-col has-[>img]:mb-3",
                    children: [b, c]
                }), i[9] = b, i[10] = c, i[11] = h) : h = i[11], h
            }
        })
    }),
    orgn: (function(a, b, c) {
        var d = c("D7Ms"),
            e = c("Q840"),
            f = c("DBCl"),
            g = c("Cslg"),
            h = c("OWtl"),
            i = c("OMIV"),
            j = c("tZ3A"),
            k = c("Kwur");
        let l = (0, e.q)(h.a, (a, b) => {
                let {
                    get: c
                } = b, e = c(j.c, a), h = e?.entityKnowledgeId, l = c(g.f), m = c(g.j), n = null != h && !e?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(e?.category ?? "") && null != l && null != m && c(i.e, "2778625748");
                return {
                    queryKey: ["entity-business-profile", l, m, a, "entity-knowledge", h],
                    enabled: n,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: n ? async a => {
                        let {
                            signal: b
                        } = a, c = await k.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [f.ec]: l
                            },
                            requestBody: {
                                provider: "entity-knowledge",
                                provider_business_id: h
                            },
                            signal: b,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        });
                        return b.throwIfAborted(), null == c.business_profile_id ? null : {
                            profileId: c.business_profile_id,
                            source: "entity-knowledge",
                            status: c
                        }
                    } : d.u
                }
            }),
            m = (0, e.q)(h.a, (a, b) => {
                let {
                    get: c
                } = b, e = c(j.c, a), h = e?.businessProfile, m = c(g.f), n = c(g.j), o = null != h && !e?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(e?.category ?? "") && null != m && null != n && c(i.e, "2778625748");
                if (o && e?.entityKnowledgeId != null) {
                    let {
                        data: b,
                        isEnabled: d,
                        isPending: e
                    } = c(l, a);
                    o = d && !e && null == b
                }
                return {
                    queryKey: ["entity-business-profile", m, n, a, "canonical-business-profile", h?.canonical_id, h?.profile_id],
                    enabled: o,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: o && null != h && null != m ? async a => {
                        let {
                            signal: b
                        } = a, c = await k.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [f.ec]: m
                            },
                            requestBody: {
                                provider: "canonical-business-profile",
                                provider_business_id: h.canonical_id
                            },
                            signal: b,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        });
                        return b.throwIfAborted(), {
                            profileId: h.profile_id,
                            source: "canonical",
                            status: c
                        }
                    } : d.u
                }
            }),
            n = (0, e.d)(h.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(j.c, a);
                if (d?.businessProfile == null && d?.entityKnowledgeId == null || d?.entityKnowledgePending || !["business", "brand", "company", "organization"].includes(d?.category ?? "") || !c(i.e, "2778625748")) return null;
                if (d?.entityKnowledgeId != null) {
                    let {
                        data: b,
                        isEnabled: d,
                        isPending: e
                    } = c(l, a);
                    if (!d || e) return null;
                    if (null != b) return b
                }
                let {
                    data: e,
                    isEnabled: f
                } = c(m, a);
                return f ? e ?? null : null
            }),
            o = (0, e.d)(h.a, (a, b) => {
                let {
                    get: c
                } = b;
                return c(n, a)?.status ?? null
            });
        c.d(b, {}, {
            a: n,
            b: o
        })
    }),
    cGwJ: (function(a, b, c) {
        var d = c("Q840"),
            e = c("rKAs"),
            f = c("IgxH"),
            g = c("OWtl"),
            h = c("CTBG"),
            i = c("G6Ip"),
            j = c("dQRk"),
            k = c("w7PD");

        function l(a, b) {
            return `${a}:${b}`
        }
        let m = (0, d.d)(g.a, (a, b) => {
            let c, {
                get: d
            } = b;
            if ("idle" !== d(j.cb, a)) return null;
            let g = d(h.c, a),
                m = d(j.O, a),
                n = !1;
            for (let a of g ?? []) {
                let b;
                if (!a.id || m[a.id]?.blocked) continue;
                let d = (0, i.d)(a);
                if (!d.markdown) continue;
                let g = "finished_successfully" === a.status;
                for (let a of d.contentReferences)
                    if (!(0, e.I)(a)) {
                        if ("client_defined_widget" === a.type && "business_profile_starter_pills" === a.category && k.a.safeParse(a.data).success) return null;
                        g && null == c && ("product_group" === a.type || "products" === a.type) && "number" == typeof a.start_idx && (null == b || a.start_idx < b) && (0, e.y)(a).length > 0 && (b = a.start_idx)
                    } null != b && (c = l(a.id, b)), !g || c || n || (n = (0, f.a)(d.markdown).length > 0)
            }
            return c ?? (n ? "transcript" : null)
        });
        c.d(b, {}, {
            a: m,
            b: l
        })
    }),
    SZ0w: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("v1r0"),
            g = c("Q840"),
            h = c("Wf1j"),
            i = c("oyxz"),
            j = c("bfX9"),
            k = c("bqtn"),
            l = c("HOLv"),
            m = c("zSQm"),
            n = c("OWtl"),
            o = c("tZ3A"),
            p = c("KDax"),
            q = c("NDDl"),
            r = c("FQiC"),
            s = c("SbOw"),
            t = c("orgn"),
            u = c("T2J5"),
            v = c("Iqbg"),
            w = c("gZIO"),
            x = c("OsUm"),
            y = c("Eqtr");

        function z() {
            let a, b, c = (0, e.c)(4),
                f = (0, h.a)();
            return c[0] !== f ? (a = f.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business"
            }), c[0] = f, c[1] = a) : a = c[1], c[2] !== a ? (b = (0, d.jsx)(u.a, {
                className: "ms-1.5",
                label: a,
                showTooltip: !0,
                size: 24
            }), c[2] = a, c[3] = b) : b = c[3], b
        }

        function A(a) {
            let b, c, f, g, h = (0, e.c)(14),
                {
                    conversationId: k,
                    requiresConfirmation: l,
                    status: n,
                    websiteUrl: o,
                    children: r
                } = a;
            if (h[0] !== o) {
                let a = (0, m.a)(o?.trim() ?? "");
                b = a && /^https?:\/\//i.test(a) ? a : null, h[0] = o, h[1] = b
            } else b = h[1];
            let s = b,
                t = n?.chat_target != null && n.header?.start_chat != null;
            return h[2] !== k || h[3] !== t || h[4] !== l || h[5] !== s ? (c = t || null != s ? (0, d.jsxs)("div", {
                className: "-ms-1 mt-4 mb-5 flex flex-wrap items-center gap-2 empty:hidden",
                children: [t ? (0, d.jsx)(q.b, {
                    conversationId: k
                }) : null, null != s ? (0, d.jsx)(p.a, {
                    className: "flex min-h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-default bg-transparent px-5 text-entity-action whitespace-nowrap text-default select-none no-drag only:border-transparent only:bg-primary-solid only:text-primary-solid hover:bg-secondary-ghost-hover only:hover:bg-primary-solid-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: s,
                    initiator: "markdown_link_click",
                    requiresConfirmation: l,
                    appearance: "button",
                    underline: "none",
                    openAsWebsite: !0,
                    children: (0, d.jsx)(i.a, {
                        id: "chatgpt.entity.businessProfile.viewWebsite",
                        defaultMessage: "View website"
                    })
                }) : null]
            }) : null, h[2] = k, h[3] = t, h[4] = l, h[5] = s, h[6] = c) : c = h[6], h[7] !== k || h[8] !== n ? (f = (0, j.a)(n) ? (0, d.jsx)("div", {
                className: "border-t border-default",
                children: (0, d.jsx)(B, {
                    conversationId: k,
                    status: n
                })
            }) : null, h[7] = k, h[8] = n, h[9] = f) : f = h[9], h[10] !== r || h[11] !== c || h[12] !== f ? (g = (0, d.jsxs)(d.Fragment, {
                children: [c, r, f]
            }), h[10] = r, h[11] = c, h[12] = f, h[13] = g) : g = h[13], g
        }

        function B(a) {
            let b, c, f = (0, e.c)(8),
                {
                    conversationId: h,
                    status: i
                } = a,
                k = (0, g.y)(n.a),
                l = i?.is_claim_protected !== !0;
            f[0] !== h || f[1] !== k ? (b = a => {
                if (!(0, j.a)(k.get(t.b, h))) return;
                let b = k.get(r.a, k.get(r.b, h));
                b.acquisitionJourneyId.current = a ?? null, b.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, k.set(b.isOpen$, !0)
            }, f[0] = h, f[1] = k, f[2] = b) : b = f[2];
            let m = i?.ownership?.current_request;
            return f[3] !== h || f[4] !== l || f[5] !== b || f[6] !== m ? (c = (0, d.jsx)(v.a, {
                measure: l,
                conversationId: h,
                onClick: b,
                request: m
            }), f[3] = h, f[4] = l, f[5] = b, f[6] = m, f[7] = c) : c = f[7], c
        }

        function C(a) {
            return a.trim().length > 0
        }

        function D(a, b) {
            if (null == a) return null;
            try {
                return b.safeParse(JSON.parse(a)).data ?? null
            } catch {
                return null
            }
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, f, h = (0, e.c)(6),
                    {
                        conversationId: l
                    } = a,
                    m = (0, g.y)(n.a),
                    o = (0, g.x)(t.b, l);
                return (0, j.a)(o, "dispute") ? (h[0] !== l || h[1] !== m ? (b = () => {
                    if (!(0, j.a)(m.get(t.b, l), "dispute")) return;
                    let a = m.get(r.a, m.get(r.b, l));
                    a.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, m.set(a.isOpen$, !0)
                }, h[0] = l, h[1] = m, h[2] = b) : b = h[2], h[3] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(i.a, {
                    id: "chatgpt.localBusiness.dispute.action",
                    defaultMessage: "Dispute profile ownership"
                }), h[3] = c) : c = h[3], h[4] !== b ? (f = (0, d.jsx)(k.c.Item, {
                    leftIconAsset: y.a,
                    onSelect: b,
                    children: c
                }), h[4] = b, h[5] = f) : f = h[5], f) : null
            },
            b: function(a) {
                let b, c = (0, e.c)(4),
                    {
                        conversationId: f
                    } = a,
                    h = (0, g.x)(t.a, f),
                    i = (0, g.x)(o.c, f);
                if (h?.source !== "entity-knowledge" || i?.businessProfile != null) return null;
                let j = i?.shouldBlockExternalEgress;
                return c[0] !== f || c[1] !== h.status || c[2] !== j ? (b = (0, d.jsx)(A, {
                    conversationId: f,
                    requiresConfirmation: j,
                    status: h.status
                }), c[0] = f, c[1] = h.status, c[2] = j, c[3] = b) : b = c[3], b
            },
            c: function(a) {
                let b, c, j, k, m, n, p, q, r, u, y, B, E = (0, e.c)(52),
                    {
                        conversationId: F,
                        profile: G,
                        inSidebar: H,
                        name: I
                    } = a,
                    J = void 0 !== H && H,
                    K = (0, h.a)(),
                    L = (0, g.x)(t.b, F),
                    M = (0, g.x)(o.c, F),
                    N = (0, g.x)(t.a, F),
                    O = N?.source === "entity-knowledge" && N.profileId !== G.profile_id ? null : G;
                E[0] !== O?.categories || E[1] !== O?.categories.find ? (b = O?.categories.find(C), E[0] = O?.categories, E[1] = O?.categories.find, E[2] = b) : b = E[2];
                let P = b;
                if (E[3] !== G || E[4] !== P || E[5] !== F || E[6] !== J || E[7] !== K || E[8] !== I || E[9] !== M?.businessProfile?.canonical_id || E[10] !== M?.query || E[11] !== M?.shouldBlockExternalEgress || E[12] !== O?.delivery_policy || E[13] !== O?.display_name || E[14] !== O?.logo_url || E[15] !== O?.returns_policy || E[16] !== O?.website_url || E[17] !== L) {
                    let a, b, e = D(O?.delivery_policy, f.b),
                        g = O?.returns_policy;
                    E[27] !== g ? (a = D(g, f.e), E[27] = g, E[28] = a) : a = E[28];
                    let h = a,
                        o = J && M?.businessProfile?.canonical_id === G.canonical_id;
                    E[29] !== o || E[30] !== M?.shouldBlockExternalEgress || E[31] !== O?.logo_url ? (r = o || M?.shouldBlockExternalEgress ? null : (0, d.jsx)(s.a, {
                        src: O?.logo_url
                    }), E[29] = o, E[30] = M?.shouldBlockExternalEgress, E[31] = O?.logo_url, E[32] = r) : r = E[32];
                    let t = O?.display_name ?? I ?? M?.query;
                    E[33] !== L?.is_verified ? (b = L?.is_verified ? (0, d.jsx)(z, {}) : null, E[33] = L?.is_verified, E[34] = b) : b = E[34], E[35] !== t || E[36] !== b ? (u = (0, d.jsxs)("h2", {
                        className: "text-card-title break-words",
                        children: [t, b]
                    }), E[35] = t, E[36] = b, E[37] = u) : u = E[37], E[38] !== P ? (j = P ? (0, d.jsx)("div", {
                        className: "text-lg leading-6 font-normal break-words text-default",
                        children: P
                    }) : null, E[38] = P, E[39] = j) : j = E[39], c = A, k = F, m = M?.shouldBlockExternalEgress, n = L, p = O?.website_url, q = null == e && null == h ? null : (0, d.jsxs)("div", {
                        className: "divide-y divide-border border-t border-default",
                        children: [null != e ? (0, d.jsxs)(v.f, {
                            icon: (0, d.jsx)(l.a, {
                                asset: x.a
                            }),
                            children: ["none" === e.delivery ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.noDelivery",
                                defaultMessage: "Delivery unavailable"
                            }) : null, "paid" === e.delivery ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.paidDelivery",
                                defaultMessage: "Paid delivery"
                            }) : null, "free" === e.delivery && "all_orders" === e.scope ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.freeDelivery",
                                defaultMessage: "Free delivery"
                            }) : null, "free" === e.delivery && "minimum_order" === e.scope ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.deliveryMinimum",
                                defaultMessage: "Free delivery over {amount}",
                                values: {
                                    amount: K.formatNumber(Number(e.minimum_order_amount), {
                                        style: "currency",
                                        currency: e.currency,
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 20
                                    })
                                }
                            }) : null]
                        }) : null, null != h ? (0, d.jsxs)(v.f, {
                            icon: (0, d.jsx)(l.a, {
                                asset: w.a
                            }),
                            children: ["none" === h.returns ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.noReturns",
                                defaultMessage: "Returns not accepted"
                            }) : null, "none" !== h.returns && "window" in h ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.unlimitedReturns",
                                defaultMessage: "{kind, select, free {Free returns with no time limit} other {Returns with no time limit, fees apply}}",
                                values: {
                                    kind: h.returns
                                }
                            }) : null, "none" !== h.returns && "window_days" in h ? (0, d.jsx)(i.a, {
                                id: "chatgpt.entity.businessProfile.returnWindow",
                                defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}}} other {Returns within {days, plural, one {# day} other {# days}}, fees apply}}",
                                values: {
                                    kind: h.returns,
                                    days: h.window_days
                                }
                            }) : null]
                        }) : null]
                    }), E[3] = G, E[4] = P, E[5] = F, E[6] = J, E[7] = K, E[8] = I, E[9] = M?.businessProfile?.canonical_id, E[10] = M?.query, E[11] = M?.shouldBlockExternalEgress, E[12] = O?.delivery_policy, E[13] = O?.display_name, E[14] = O?.logo_url, E[15] = O?.returns_policy, E[16] = O?.website_url, E[17] = L, E[18] = c, E[19] = j, E[20] = k, E[21] = m, E[22] = n, E[23] = p, E[24] = q, E[25] = r, E[26] = u
                } else c = E[18], j = E[19], k = E[20], m = E[21], n = E[22], p = E[23], q = E[24], r = E[25], u = E[26];
                return E[40] !== c || E[41] !== k || E[42] !== m || E[43] !== n || E[44] !== p || E[45] !== q ? (y = (0, d.jsx)(c, {
                    conversationId: k,
                    requiresConfirmation: m,
                    status: n,
                    websiteUrl: p,
                    children: q
                }), E[40] = c, E[41] = k, E[42] = m, E[43] = n, E[44] = p, E[45] = q, E[46] = y) : y = E[46], E[47] !== j || E[48] !== y || E[49] !== r || E[50] !== u ? (B = (0, d.jsxs)(d.Fragment, {
                    children: [r, u, j, y]
                }), E[47] = j, E[48] = y, E[49] = r, E[50] = u, E[51] = B) : B = E[51], B
            }
        })
    }),
    wFiG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("EA6X"),
            g = c("Q840"),
            h = c("DBCl"),
            i = c("zd8w"),
            j = c("Bbed"),
            k = c("DcH0"),
            l = c("WAdu"),
            m = c("OWtl"),
            n = c("tZ3A"),
            o = c("niC2"),
            p = c("TUMj"),
            q = c("rxj0"),
            r = c("xof2"),
            s = c("SZ0w"),
            t = c("E7eE"),
            u = c("TJEh"),
            v = c("Iqbg"),
            w = c("FRPb"),
            x = c("LQio"),
            y = c("H0jo");
        let z = (0, j.a)(async () => (await c.e(941897).then(() => c("PChi"))).ChatGptEntityMetadataActions);

        function A(a) {
            let b, c, h, j, k, o = (0, e.c)(29),
                {
                    conversationId: x,
                    isTranscriptPending: y,
                    turnContext: A,
                    showClaimedBusinessTooltip: C
                } = a,
                D = void 0 !== y && y,
                E = void 0 !== C && C,
                F = (0, g.y)(m.a),
                G = (0, i.useContext)(l.a),
                H = (0, g.x)(q.e, x),
                I = (0, g.x)(w.b, x),
                J = (0, g.x)(w.d, x),
                K = D ? I?.business : J,
                L = (0, g.x)(n.c, x),
                M = (0, g.x)(n.e, x),
                N = (0, g.x)(w.c, x),
                O = D ? M : N,
                P = (0, g.x)(t.a, x),
                Q = I?.messageId;
            o[0] !== K || o[1] !== x || o[2] !== I || o[3] !== H || o[4] !== Q || o[5] !== P ? (b = K && P && Q && !P.shouldBlockExternalEgress && !H && (K.reservation_providers?.some(B) || (0, u.h)(K.service_providers).length > 0) ? (0, d.jsx)(z, {
                contentReferenceIndex: 0,
                reference: {
                    type: "entity_metadata",
                    entity_type: I.category ?? "local_business",
                    entity_data: K,
                    layout: "sidebar",
                    metadata: {
                        map_url: (0, u.e)(K)
                    }
                },
                turnContext: {
                    ...P,
                    trackShownImpressions: !1,
                    conversationType: "sidebar",
                    browserConversationId: P.browserConversationId ?? P.conversationId,
                    conversationId: x,
                    messageId: Q,
                    contentReferenceMessageIds: [Q]
                }
            }) : null, o[0] = K, o[1] = x, o[2] = I, o[3] = H, o[4] = Q, o[5] = P, o[6] = b) : b = o[6];
            let R = b;
            if (null == K && null == O) {
                if (L?.extraParams?.resolve_basemap_place === !0 && null == L.businessPreview) {
                    let a;
                    return o[7] !== L.query ? (a = (0, d.jsx)("h2", {
                        className: "mb-1 text-[22px] leading-7 font-medium break-words",
                        children: L.query
                    }), o[7] = L.query, o[8] = a) : a = o[8], a
                }
                return null
            }
            let S = H ? "restricted" : G,
                T = A ?? null;
            return o[9] !== x || o[10] !== L?.query || o[11] !== O ? (c = null != O && (0, d.jsx)(s.c, {
                conversationId: x,
                profile: O,
                inSidebar: !0,
                name: L?.query
            }), o[9] = x, o[10] = L?.query, o[11] = O, o[12] = c) : c = o[12], o[13] !== R || o[14] !== K || o[15] !== I?.category || o[16] !== I?.messageId || o[17] !== I?.sourceConversationId || o[18] !== O || o[19] !== F || o[20] !== E ? (h = null == O && null != K && (0, d.jsx)(v.ChatGptLocalBusinessMetadata, {
                business: K,
                actions: R,
                renderActions: null == R,
                isOptimistic: !0,
                showClaimedBusinessTooltip: E,
                onAction: a => {
                    (0, r.b)(F, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: a,
                        entityId: K.id.trim() || void 0,
                        entityCategory: I?.category ?? void 0,
                        messageId: I?.messageId,
                        assistantMessageId: I?.messageId,
                        conversationId: I?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: f.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), o[13] = R, o[14] = K, o[15] = I?.category, o[16] = I?.messageId, o[17] = I?.sourceConversationId, o[18] = O, o[19] = F, o[20] = E, o[21] = h) : h = o[21], o[22] !== T || o[23] !== c || o[24] !== h ? (j = (0, d.jsxs)(p.b, {
                value: T,
                children: [c, h]
            }), o[22] = T, o[23] = c, o[24] = h, o[25] = j) : j = o[25], o[26] !== S || o[27] !== j ? (k = (0, d.jsx)(l.a, {
                value: S,
                children: j
            }), o[26] = S, o[27] = j, o[28] = k) : k = o[28], k
        }

        function B(a) {
            return null != a.launcherPayload
        }
        c.d(b, {}, {
            a: A,
            b: function(a) {
                let b, c, f, j = (0, e.c)(25),
                    {
                        conversationId: m,
                        isTranscriptPending: n,
                        turnContext: p,
                        showClaimedBusinessTooltip: q
                    } = a,
                    r = void 0 !== n && n,
                    s = void 0 !== q && q,
                    t = (0, i.useContext)(l.a),
                    u = (0, g.x)(y.a, m),
                    v = (0, g.x)(y.b, "restricted" === t ? null : m),
                    w = (0, g.x)(y.i, m),
                    z = (0, g.x)(y.d, m),
                    B = (0, g.x)(y.f, m),
                    C = (0, i.useContext)(x.a);
                if (z && !r) return null;
                j[0] !== t || j[1] !== w || j[2] !== v ? (b = (0, y.g)(v, null != w && "restricted" !== t ? [w] : []), j[0] = t, j[1] = w, j[2] = v, j[3] = b) : b = j[3];
                let D = b,
                    E = null;
                if (D.length > 0 || null != u) {
                    let a, b, c, e = `chatgpt:${m}`;
                    j[4] !== e ? (a = (0, h.Ye)(e), j[4] = e, j[5] = a) : a = j[5], j[6] !== r || j[7] !== u ? (b = u && r ? {
                        ...u,
                        photosPending: !0
                    } : u, j[6] = r, j[7] = u, j[8] = b) : b = j[8];
                    let f = v?.isCover ? "cover" : "sidebar";
                    j[9] !== D || j[10] !== a || j[11] !== b || j[12] !== f ? (c = (0, d.jsx)(o.a, {
                        conversationId: a,
                        images: D,
                        businessProfileHeader: b,
                        presentation: f
                    }), j[9] = D, j[10] = a, j[11] = b, j[12] = f, j[13] = c) : c = j[13], E = c
                } else if (B || r && z) {
                    let a, b;
                    j[14] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(k.a, {
                        className: "aspect-5/4",
                        "aria-hidden": "true",
                        variant: "prominent"
                    }), j[14] = a) : a = j[14], j[15] !== C ? (b = (0, d.jsx)("div", {
                        className: "-mx-6 mb-5",
                        children: (0, d.jsx)("div", {
                            ref: C,
                            "data-entity-photos": !0,
                            children: a
                        })
                    }), j[15] = C, j[16] = b) : b = j[16], E = b
                }
                return j[17] !== m || j[18] !== r || j[19] !== s || j[20] !== p ? (c = (0, d.jsx)(A, {
                    conversationId: m,
                    isTranscriptPending: r,
                    turnContext: p,
                    showClaimedBusinessTooltip: s
                }), j[17] = m, j[18] = r, j[19] = s, j[20] = p, j[21] = c) : c = j[21], j[22] !== E || j[23] !== c ? (f = (0, d.jsxs)(d.Fragment, {
                    children: [E, c]
                }), j[22] = E, j[23] = c, j[24] = f) : f = j[24], f
            }
        })
    }),
    LQio: (function(a, b, c) {
        let d = (0, c("zd8w").createContext)(null);
        c.d(b, {}, {
            a: d
        })
    }),
    H0jo: (function(a, b, c) {
        var d = c("Q840"),
            e = c("rKAs"),
            f = c("SqqO"),
            g = c("OWtl"),
            h = c("fzVa"),
            i = c("G6Ip"),
            j = c("tZ3A"),
            k = c("dQRk"),
            l = c("rxj0"),
            m = c("orgn"),
            n = c("TJEh"),
            o = c("FRPb");
        let p = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                return null != a && c(j.a, a) && null == c(o.b, a) && c(j.c, a)?.businessProfile == null && c(j.c, a)?.extraParams?.resolve_basemap_place !== !0 ? c(k.gb, a) : null
            }),
            q = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(o.b, a), g = c(k.N, a);
                return null != g && Object.values(g).some(b => null != b.message && (0, i.c)(b.message).some((b, g) => "image_group" === b.type && ("full_width" === b.layout || 0 === b.start_idx && (c(j.a, a) || (0, n.i)(d?.category ?? null))) && (!c(l.e, a) || (0, e.u)(b, g).some(a => !(0, f.d)(a.src)))))
            }),
            r = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (null == a) return null;
                let d = c(j.c, a);
                if (d?.businessProfile == null) return null;
                let e = d.businessProfile,
                    f = c(m.a, a);
                if (f?.source === "entity-knowledge" && f.profileId !== e.profile_id) return null;
                let g = d.shouldBlockExternalEgress || d.sourceTurnContext?.shouldBlockExternalEgress || c(l.e, a);
                return {
                    logoUrl: g ? null : e.logo_url ?? null,
                    logoPrimaryColor: e.logo_primary_color,
                    photosPending: (0, k.Db)(c(k.cb, a)) || !g && !!(e.cover_image_url || e.photo_urls?.length || c(u, a)) && c(h.b).isLoading,
                    coverUrl: g ? null : e.cover_image_url,
                    photoUrls: g ? null : e.photo_urls
                }
            }),
            s = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(r, a);
                if (!d || !d.coverUrl && !d.photoUrls?.length) return null;
                let e = c(h.b).data?.age_status;
                if ("over_18" !== e && "unsure" !== e) return null;
                let f = d.coverUrl && URL.parse(d.coverUrl)?.protocol === "https:" ? d.coverUrl : null,
                    g = new Set(f ? [f] : d.photoUrls?.filter(a => URL.parse(a)?.protocol === "https:")),
                    i = null == a ? void 0 : c(j.c, a)?.mapPreviewPhotoUrl;
                return g.size > 0 ? {
                    isCover: null != f && null == i,
                    urls: g,
                    mapPreviewPhotoUrl: i
                } : null
            });

        function t(a, b) {
            return [a.src, a.previewSrc, a.searchResult?.originalSrc, a.searchResult?.contentSrc].some(a => null != a && b.has(a))
        }
        let u = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                if (null == a) return null;
                let d = c(o.b, a);
                if (c(l.e, a)) return null;
                let e = c(j.b, a),
                    f = null == d ? null : (0, n.f)(d.business);
                return e ?? (null == f ? null : {
                    id: f,
                    src: f,
                    status: "completed",
                    type: "generated-image"
                })
            }),
            v = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(u, a);
                if (null == d) return null;
                let e = c(h.b).data?.age_status;
                return "over_18" === e || "unsure" === e ? d : null
            }),
            w = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b;
                return (c(j.a, a) || null != c(o.b, a)) && (0, k.Db)(c(k.cb, a)) && !c(q, a) && null == c(v, a)
            }),
            x = (0, d.d)(g.a, (a, b) => {
                let {
                    get: c
                } = b, d = c(r, a);
                return c(q, a) || null != c(s, a) || d?.photosPending === !0 || !!d?.logoPrimaryColor || null != c(v, a) || c(w, a)
            });
        c.d(b, {}, {
            a: r,
            b: s,
            c: x,
            d: q,
            e: p,
            f: w,
            g: function(a, b) {
                if (null == a) return b;
                let c = Array.from(a.urls, a => ({
                        id: a,
                        src: a,
                        type: "generated-image",
                        status: "completed"
                    })),
                    d = a.mapPreviewPhotoUrl;
                return null != d && b[0]?.id === d ? [b[0], ...c.filter(a => a.src !== d), ...b.slice(1).filter(b => !t(b, a.urls))] : a.isCover ? c : [...c, ...b.filter(b => !t(b, a.urls))]
            },
            h: t,
            i: v
        })
    }),
    vxGj: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57");
        c.d(b, {}, {
            a: function(a) {
                let b, c = (0, e.c)(9),
                    {
                        count: g,
                        activeIndex: h,
                        getPageLabel: i,
                        onSelect: j
                    } = a;
                if (c[0] !== h || c[1] !== g || c[2] !== i || c[3] !== j) {
                    let a;
                    c[5] !== h || c[6] !== i || c[7] !== j ? (a = (a, b) => (0, d.jsx)("button", {
                        className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                        type: "button",
                        "aria-current": b === h ? "true" : void 0,
                        "aria-label": i(b),
                        onClick: () => j(b),
                        children: (0, d.jsx)("span", {
                            className: (0, f.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", b === h ? "w-3 opacity-100" : "w-1 opacity-40")
                        })
                    }, b), c[5] = h, c[6] = i, c[7] = j, c[8] = a) : a = c[8], b = (0, d.jsx)("div", {
                        className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                        children: Array.from({
                            length: g
                        }, a)
                    }), c[0] = h, c[1] = g, c[2] = i, c[3] = j, c[4] = b
                } else b = c[4];
                return b
            }
        })
    }),
    msI5: (function(a, b, c) {
        var d = c("ABep"),
            e = c("rKAs"),
            f = c("zd8w"),
            g = c("G6mJ"),
            h = c("LXSR");
        let i = (0, f.createContext)(null);

        function j(a) {
            return a?.type === "codexDirective" && a.name === e.a && !0 === a.block
        }
        c.d(b, {}, {
            a: i,
            b: function(a, b, c, e, f) {
                let i, k = a.findIndex(a => "space" !== a.type),
                    l = a[k],
                    m = l?.type === "heading" && (1 === l.depth || 2 === l.depth) && "string" == typeof l.text && l.text.trim() === e.trim() ? a.slice(k + 1) : a,
                    n = m.filter(a => "space" !== a.type),
                    o = a => j(a) ? (0, g.a)(a.attributes, c)?.reference : void 0,
                    p = n.at(-1);
                f && j(p) && !o(p) && n.pop();
                let q = n.findIndex(a => o(a)?.name === "ledger_spend_by_category_recent_transactions");
                q >= 0 ? i = n[q - 1] : f && o(n.at(-2))?.name === "ledger_spend_by_category_detail" && (i = n.at(-1));
                let r = function(a) {
                    if (a?.type === "heading" && 3 === a.depth) return a.tokens;
                    if (a?.type === "paragraph" && a.tokens?.length === 1) {
                        let b = a.tokens[0];
                        return b?.type === "strong" ? b.tokens : void 0
                    }
                }(i);
                if (!i || !r) return b(m);
                let s = m.indexOf(i);
                return [...b(m.slice(0, s)), (0, d.jsx)("h3", {
                    className: `${h.a.Paragraph} font-semibold`,
                    style: {
                        fontSize: "var(--text-lg)",
                        lineHeight: "1.625rem"
                    },
                    children: b(r)
                }, "spending-recent-transactions"), ...b(m.slice(s + 1))]
            }
        })
    }),
    Yq7Q: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Sm6l"),
            h = c("psL3");

        function i(a) {
            a.currentTarget.blur()
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, j, k, l, m, n, o, p, q, r, s, t, u, v, w = (0, e.c)(38);
                w[0] !== a ? ({
                    appearance: j,
                    controlSize: k,
                    children: b,
                    className: c,
                    iconOnly: l,
                    joined: m,
                    loading: n,
                    ...h
                } = a, w[0] = a, w[1] = b, w[2] = c, w[3] = h, w[4] = j, w[5] = k, w[6] = l, w[7] = m, w[8] = n) : (b = w[1], c = w[2], h = w[3], j = w[4], k = w[5], l = w[6], m = w[7], n = w[8]);
                let x = void 0 === j ? "compact" : j,
                    y = void 0 === k ? "default" : k,
                    z = void 0 !== l && l,
                    A = void 0 !== m && m,
                    B = void 0 !== n && n,
                    C = "compact" !== x,
                    D = "blurred" === x && "backdrop-blur-md";
                if (w[9] !== D || w[10] !== c || w[11] !== y || w[12] !== z || w[13] !== C || w[14] !== A || w[15] !== h) {
                    let a = (0, f.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                    C && z ? a = (0, f.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", A && "relative shrink-0 !border-0 [&>[data-loading-indicator]]:absolute [&>[data-loading-indicator]]:inset-0 [&>[data-loading-indicator]]:m-auto", "small" === y ? "size-9" : "size-10") : C && (a = (0, f.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", D, "small" === y ? "h-9" : "h-10")), o = g.a, q = h, r = "secondary", s = C ? "full" : "default", t = C ? "default" : "icon", p = (0, f.b)(a, c), w[9] = D, w[10] = c, w[11] = y, w[12] = z, w[13] = C, w[14] = A, w[15] = h, w[16] = o, w[17] = p, w[18] = q, w[19] = r, w[20] = s, w[21] = t
                } else o = w[16], p = w[17], q = w[18], r = w[19], s = w[20], t = w[21];
                return w[22] !== D || w[23] !== b || w[24] !== z || w[25] !== C || w[26] !== A || w[27] !== B ? (u = C && z ? (0, d.jsx)("span", {
                    className: (0, f.b)("flex size-9 items-center justify-center", A ? "rounded-none bg-transparent group-hover/gallery-action:bg-media-background/25 group-focus/gallery-action:bg-media-background/25" : "rounded-full bg-media-background/45 group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60", !A && D),
                    children: B ? null : b
                }) : b, w[22] = D, w[23] = b, w[24] = z, w[25] = C, w[26] = A, w[27] = B, w[28] = u) : u = w[28], w[29] !== o || w[30] !== B || w[31] !== p || w[32] !== u || w[33] !== q || w[34] !== r || w[35] !== s || w[36] !== t ? (v = (0, d.jsx)(o, {
                    ...q,
                    color: r,
                    radius: s,
                    size: t,
                    className: p,
                    loading: B,
                    onPointerUp: i,
                    children: u
                }), w[29] = o, w[30] = B, w[31] = p, w[32] = u, w[33] = q, w[34] = r, w[35] = s, w[36] = t, w[37] = v) : v = w[37], v
            },
            b: function(a) {
                let b, c, g, i, j = (0, e.c)(8);
                return j[0] !== a ? ({
                    className: b,
                    ...c
                } = a, j[0] = a, j[1] = b, j[2] = c) : (b = j[1], c = j[2]), j[3] !== b ? (g = (0, f.b)("overflow-hidden rounded-full bg-transparent group-focus-within/generated-image-preview:bg-media-background/45 group-focus-within/generated-image-preview:backdrop-blur-md group-focus-within/search-image:bg-media-background/45 group-focus-within/search-image:backdrop-blur-md group-hover/generated-image-preview:bg-media-background/45 group-hover/generated-image-preview:backdrop-blur-md group-hover/search-image:bg-media-background/45 group-hover/search-image:backdrop-blur-md has-[[data-saved=true]]:bg-media-background/45 has-[[data-saved=true]]:backdrop-blur-md has-[[data-state=open]]:bg-media-background/45 has-[[data-state=open]]:backdrop-blur-md pointer-coarse:bg-media-background/45 pointer-coarse:backdrop-blur-md [@media(hover:none)]:bg-media-background/45 [@media(hover:none)]:backdrop-blur-md", b), j[3] = b, j[4] = g) : g = j[4], j[5] !== c || j[6] !== g ? (i = (0, d.jsx)(h.a, {
                    ...c,
                    className: g
                }), j[5] = c, j[6] = g, j[7] = i) : i = j[7], i
            }
        })
    }),
    jo5I: (function(a, b, c) {
        c.d(b, {
            a: () => A
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("Q840"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("oyxz"),
            l = c("Sm6l"),
            m = c("bqtn"),
            n = c("HOLv"),
            o = c("bf6R"),
            p = c("Yq7Q"),
            q = c("jU86"),
            r = c("cZk2");
        let s = (0, c("Bbed").a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(596051)]).then(() => c("drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: a => (0, d.jsx)(u, {
                ...a,
                failed: !0
            })
        });

        function t(a) {
            let b, c = (0, e.c)(3),
                [f, g] = (0, i.useState)(!!a.open);
            return a.open && !f && g(!0), c[0] !== f || c[1] !== a ? (b = f ? (0, d.jsx)(i.Suspense, {
                fallback: (0, d.jsx)(u, {
                    ...a
                }),
                children: (0, d.jsx)(s, {
                    ...a
                })
            }) : null, c[0] = f, c[1] = a, c[2] = b) : b = c[2], b
        }

        function u(a) {
            let b, c, f, g = (0, e.c)(10),
                {
                    open: h,
                    onOpenChange: i,
                    onCloseAutoFocus: j,
                    failed: l
                } = a,
                m = void 0 !== l && l,
                n = !!h;
            return g[0] !== i ? (b = a => i?.(a), g[0] = i, g[1] = b) : b = g[1], g[2] !== m ? (c = m ? (0, d.jsx)(k.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn\u2019t open New folder"
            }) : (0, d.jsx)(k.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder\u2026"
            }), g[2] = m, g[3] = c) : c = g[3], g[4] !== m || g[5] !== j || g[6] !== n || g[7] !== b || g[8] !== c ? (f = (0, d.jsx)(r.a, {
                open: n,
                onOpenChange: b,
                onCloseAutoFocus: j,
                failed: m,
                title: c
            }), g[4] = m, g[5] = j, g[6] = n, g[7] = b, g[8] = c, g[9] = f) : f = g[9], f
        }
        var v = c("IZUf"),
            w = c("eJx1"),
            x = c("TuPY"),
            y = c("AQ1b");
        let z = {
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

        function A(a) {
            let b, c, o, p, r, s, u, z, A, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, $, _, aa = (0, e.c)(95),
                {
                    className: ab,
                    appearance: ac,
                    joined: ad,
                    visibility: ae,
                    isSaved: af,
                    isBusy: ag,
                    isCheckingStatus: ah,
                    selectedFolderId: ai,
                    onToggleFavorite: aj,
                    onSelectFolder: ak
                } = a,
                al = void 0 === ac ? "media-overlay" : ac,
                am = void 0 !== ad && ad,
                an = (0, h.y)(q.c),
                ao = (0, j.a)(),
                [ap, aq] = (0, i.useState)(!1),
                [ar, as] = (0, i.useState)(!1);
            aa[0] !== ar ? (b = {
                enabled: ar
            }, aa[0] = ar, aa[1] = b) : b = aa[1];
            let {
                data: at
            } = (0, h.z)(v.a, b), [au, av] = (0, i.useState)(!1), [aw, ax] = (0, i.useState)(null), ay = (0, i.useRef)(null), az = (0, i.useRef)(null), aA = ag || ah;
            aa[2] !== ao ? (c = ao.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder"
            }), aa[2] = ao, aa[3] = c) : c = aa[3];
            let aB = c;
            if (ah) {
                let a;
                aa[4] !== ao ? (a = ao.formatMessage({
                    id: "library.favoriteFolder.checking",
                    defaultMessage: "Checking Favorites status"
                }), aa[4] = ao, aa[5] = a) : a = aa[5], o = a
            } else if (af) {
                let a;
                aa[6] !== ao ? (a = ao.formatMessage({
                    id: "library.favoriteFolder.remove",
                    defaultMessage: "Remove from Favorites"
                }), aa[6] = ao, aa[7] = a) : a = aa[7], o = a
            } else {
                let a;
                aa[8] !== ao ? (a = ao.formatMessage({
                    id: "library.favoriteFolder.add",
                    defaultMessage: "Add to Favorites"
                }), aa[8] = ao, aa[9] = a) : a = aa[9], o = a
            }
            aa[10] !== aA || aa[11] !== af || aa[12] !== aj ? (p = () => {
                aA ? aq(!1) : (av(!0), aq(!af), aj())
            }, aa[10] = aA, aa[11] = af, aa[12] = aj, aa[13] = p) : p = aa[13];
            let aC = p;
            aa[14] !== al || aa[15] !== ab || aa[16] !== af || aa[17] !== ap || aa[18] !== ae ? (r = (0, g.b)("select-none", "always" === ae || "entity-header" === al || "map-card" === al || af || ap ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === al ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100"], ab), aa[14] = al, aa[15] = ab, aa[16] = af, aa[17] = ap, aa[18] = ae, aa[19] = r) : r = aa[19];
            let aD = ap ? "open" : "closed";
            aa[20] !== ar ? (s = a => {
                ar && a.preventDefault()
            }, aa[20] = ar, aa[21] = s) : s = aa[21], aa[22] === Symbol.for("react.memo_cache_sentinel") ? (u = a => {
                a || (aq(!1), av(!0))
            }, aa[22] = u) : u = aa[22];
            let aE = !af || ap || au;
            aa[23] === Symbol.for("react.memo_cache_sentinel") ? (z = a => {
                ay.current = a, ax(a?.closest(".codex-dialog") ?? null)
            }, aa[23] = z) : z = aa[23];
            let aF = aA || void 0,
                aG = aA && !ap || void 0,
                aH = !af || ap ? "menu" : void 0,
                aI = !af || ap ? ap : void 0;
            aa[24] === Symbol.for("react.memo_cache_sentinel") ? (A = () => av(!1), G = () => av(!1), H = () => av(!1), aa[24] = A, aa[25] = G, aa[26] = H) : (A = aa[24], G = aa[25], H = aa[26]), aa[27] !== aC ? (I = a => {
                a.preventDefault(), a.stopPropagation(), aC()
            }, aa[27] = aC, aa[28] = I) : I = aa[28], aa[29] !== aA || aa[30] !== af || aa[31] !== aC ? (J = a => {
                !a.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(a.key) && (a.preventDefault(), a.stopPropagation(), "ArrowDown" !== a.key ? aC() : aA || af || aq(!0))
            }, aa[29] = aA, aa[30] = af, aa[31] = aC, aa[32] = J) : J = aa[32];
            let aJ = af ? w.a : x.a;
            return aa[33] !== aJ ? (K = (0, d.jsx)(n.a, {
                asset: aJ
            }), aa[33] = aJ, aa[34] = K) : K = aa[34], aa[35] !== al || aa[36] !== af || aa[37] !== am || aa[38] !== o || aa[39] !== aF || aa[40] !== aG || aa[41] !== aH || aa[42] !== aI || aa[43] !== I || aa[44] !== J || aa[45] !== K ? (L = (0, d.jsx)(E, {
                ref: z,
                "aria-label": o,
                "aria-busy": aF,
                "aria-disabled": aG,
                "aria-haspopup": aH,
                "aria-expanded": aI,
                "aria-pressed": af,
                appearance: al,
                joined: am,
                onPointerEnter: A,
                onPointerLeave: G,
                onBlur: H,
                onPointerDown: D,
                onClick: I,
                onKeyDown: J,
                children: K
            }), aa[35] = al, aa[36] = af, aa[37] = am, aa[38] = o, aa[39] = aF, aa[40] = aG, aa[41] = aH, aa[42] = aI, aa[43] = I, aa[44] = J, aa[45] = K, aa[46] = L) : L = aa[46], aa[47] !== o || aa[48] !== aE || aa[49] !== L ? (M = (0, d.jsx)(f.a, {
                content: o,
                disabled: aE,
                children: L
            }), aa[47] = o, aa[48] = aE, aa[49] = L, aa[50] = M) : M = aa[50], aa[51] === Symbol.for("react.memo_cache_sentinel") ? (N = (0, d.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, d.jsx)(k.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder"
                })
            }), aa[51] = N) : N = aa[51], aa[52] === Symbol.for("react.memo_cache_sentinel") ? (O = () => {
                aq(!1), as(!0)
            }, P = (0, d.jsx)(n.a, {
                asset: y.a
            }), aa[52] = O, aa[53] = P) : (O = aa[52], P = aa[53]), aa[54] !== aA || aa[55] !== aB ? (Q = (0, d.jsx)(l.a, {
                ref: az,
                "aria-label": aB,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: aA,
                onClick: O,
                children: P
            }), aa[54] = aA, aa[55] = aB, aa[56] = Q) : Q = aa[56], aa[57] !== aA || aa[58] !== Q ? (R = (0, d.jsx)(m.c.ItemSlot, {
                asChild: !0,
                disabled: aA,
                children: Q
            }), aa[57] = aA, aa[58] = Q, aa[59] = R) : R = aa[59], aa[60] !== aB || aa[61] !== R ? (S = (0, d.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [N, (0, d.jsx)(f.a, {
                    content: aB,
                    children: R
                })]
            }), aa[60] = aB, aa[61] = R, aa[62] = S) : S = aa[62], aa[63] === Symbol.for("react.memo_cache_sentinel") ? (T = () => az.current?.focus(), aa[63] = T) : T = aa[63], aa[64] !== aA || aa[65] !== ak || aa[66] !== ai ? (U = (0, d.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, d.jsx)(F, {
                    isBusy: aA,
                    selectedFolderId: ai,
                    onSelectFolder: ak,
                    focusCreateFolder: T
                })
            }), aa[64] = aA, aa[65] = ak, aa[66] = ai, aa[67] = U) : U = aa[67], aa[68] !== ap || aa[69] !== aw || aa[70] !== M || aa[71] !== S || aa[72] !== U || aa[73] !== s ? (V = (0, d.jsxs)(m.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: aw,
                open: ap,
                onCloseAutoFocus: s,
                onOpenChange: u,
                triggerButton: M,
                children: [S, U]
            }), aa[68] = ap, aa[69] = aw, aa[70] = M, aa[71] = S, aa[72] = U, aa[73] = s, aa[74] = V) : V = aa[74], aa[75] !== af || aa[76] !== V || aa[77] !== r || aa[78] !== aD ? (W = (0, d.jsx)("div", {
                className: r,
                "data-saved": af,
                "data-state": aD,
                children: V
            }), aa[75] = af, aa[76] = V, aa[77] = r, aa[78] = aD, aa[79] = W) : W = aa[79], aa[80] !== at ? (X = at?.map(C), aa[80] = at, aa[81] = X) : X = aa[81], aa[82] === Symbol.for("react.memo_cache_sentinel") ? (Y = a => {
                a.preventDefault(), ay.current?.focus()
            }, aa[82] = Y) : Y = aa[82], aa[83] !== ak || aa[84] !== an.query ? (Z = async a => {
                await an.query.cancel(v.a);
                let b = !1;
                an.query.setData(v.a, c => (b = null == c, [...(c ?? []).filter(b => b.id !== a.id), {
                    ...a,
                    kind: "directory"
                }].sort(B))), b && an.query.invalidate(v.a), await ak(a, !0)
            }, aa[83] = ak, aa[84] = an.query, aa[85] = Z) : Z = aa[85], aa[86] !== ar || aa[87] !== an.value.accountId || aa[88] !== an.value.userId || aa[89] !== X || aa[90] !== Z ? ($ = (0, d.jsx)(t, {
                open: ar,
                accountId: an.value.accountId,
                userId: an.value.userId,
                directoryId: null,
                siblingNames: X,
                onOpenChange: as,
                onCloseAutoFocus: Y,
                onCreated: Z
            }), aa[86] = ar, aa[87] = an.value.accountId, aa[88] = an.value.userId, aa[89] = X, aa[90] = Z, aa[91] = $) : $ = aa[91], aa[92] !== W || aa[93] !== $ ? (_ = (0, d.jsxs)(d.Fragment, {
                children: [W, $]
            }), aa[92] = W, aa[93] = $, aa[94] = _) : _ = aa[94], _
        }

        function B(a, b) {
            return a.name.localeCompare(b.name)
        }

        function C(a) {
            return a.name
        }

        function D(a) {
            a.preventDefault()
        }

        function E(a) {
            let b, c, f, g, h = (0, e.c)(8);
            return h[0] !== a ? ({
                appearance: b,
                joined: c,
                ...f
            } = a, h[0] = a, h[1] = b, h[2] = c, h[3] = f) : (b = h[1], c = h[2], f = h[3]), h[4] !== b || h[5] !== c || h[6] !== f ? (g = "media-overlay" === b ? (0, d.jsx)(p.a, {
                ...f,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0,
                joined: c
            }) : (0, d.jsx)(l.a, {
                ...f,
                ...z[b]
            }), h[4] = b, h[5] = c, h[6] = f, h[7] = g) : g = h[7], g
        }

        function F(a) {
            let b, c, f = (0, e.c)(16),
                {
                    focusCreateFolder: g,
                    isBusy: i,
                    selectedFolderId: j,
                    onSelectFolder: l
                } = a,
                {
                    data: n,
                    isPending: p,
                    isError: q,
                    refetch: r
                } = (0, h.z)(v.a);
            if (p) {
                let a;
                return f[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(m.c.Message, {
                    role: "status",
                    children: (0, d.jsx)(k.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders\u2026"
                    })
                }), f[0] = a) : a = f[0], a
            }
            if (q && null == n) {
                let a, b, c, e;
                return f[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(m.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, d.jsx)(k.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders"
                    })
                }), f[1] = a) : a = f[1], f[2] !== g || f[3] !== r ? (b = a => {
                    a.preventDefault(), g(), r()
                }, f[2] = g, f[3] = r, f[4] = b) : b = f[4], f[5] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(k.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again"
                }), f[5] = c) : c = f[5], f[6] !== b ? (e = (0, d.jsxs)(d.Fragment, {
                    children: [a, (0, d.jsx)(m.c.Item, {
                        onSelect: b,
                        children: c
                    })]
                }), f[6] = b, f[7] = e) : e = f[7], e
            }
            if (n?.length === 0) {
                let a;
                return f[8] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(m.c.Message, {
                    role: "status",
                    children: (0, d.jsx)(k.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet"
                    })
                }), f[8] = a) : a = f[8], a
            }
            return f[9] !== n || f[10] !== i || f[11] !== l || f[12] !== j ? (b = n?.map(a => (0, d.jsx)(m.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": j === a.id,
                isActive: j === a.id,
                disabled: i,
                onSelect: () => void l({
                    id: a.id,
                    name: a.name,
                    parent_directory_id: a.parent_directory_id
                }, !1),
                children: (0, d.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [(0, d.jsx)(G, {
                        imageUrl: a.thumbnail_url ?? null
                    }), (0, d.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: a.name
                    }), (0, d.jsx)(o.ac, {
                        className: j === a.id ? void 0 : "invisible"
                    })]
                })
            }, a.id)), f[9] = n, f[10] = i, f[11] = l, f[12] = j, f[13] = b) : b = f[13], f[14] !== b ? (c = (0, d.jsx)(d.Fragment, {
                children: b
            }), f[14] = b, f[15] = c) : c = f[15], c
        }

        function G(a) {
            let b, c, f, h = (0, e.c)(8),
                {
                    imageUrl: j
                } = a,
                [k, l] = (0, i.useState)(null),
                m = null != j && j !== k,
                n = !m && "border border-default bg-surface";
            return h[0] !== n ? (b = (0, g.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", n), h[0] = n, h[1] = b) : b = h[1], h[2] !== j || h[3] !== m ? (c = m ? (0, d.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: j,
                onError: () => l(j)
            }) : (0, d.jsx)(o.Ld, {}), h[2] = j, h[3] = m, h[4] = c) : c = h[4], h[5] !== b || h[6] !== c ? (f = (0, d.jsx)("span", {
                "aria-hidden": "true",
                className: b,
                children: c
            }), h[5] = b, h[6] = c, h[7] = f) : f = h[7], f
        }
    }),
    IZUf: (function(a, b, c) {
        var d = c("Q840"),
            e = c("Kwur"),
            f = c("jU86");
        let g = (0, d.r)(f.c, a => {
            let {
                scope: b
            } = a;
            return {
                queryKey: ["library-api", b.value.accountId, b.value.userId, "favorite-folders"],
                staleTime: 3e4,
                queryFn: async a => {
                    let {
                        signal: c
                    } = a;
                    return (await e.Request.safeGet("/files/library/nodes", {
                        additionalHeaders: {
                            "ChatGPT-Account-ID": b.value.accountId
                        },
                        parameters: {
                            query: {
                                parent_directory_id: null,
                                cursor: null,
                                include_files: !1,
                                hydrate_folder_thumbnails: !0
                            }
                        },
                        signal: c
                    })).items.filter(a => "directory" === a.kind && !0 !== a.is_root && null == a.direct_share_id && null == a.shared_by && "shared" !== a.access_kind && "mounted" !== a.access_kind && !a.id.startsWith("library:") && !a.id.startsWith("external-") && a.name.trim().length > 0).sort((a, b) => a.name.localeCompare(b.name))
                }
            }
        });
        c.d(b, {}, {
            a: g,
            b: async function(a, b, c) {
                await e.Request.safePatch("/files/library/files/{library_file_id}/move", {
                    additionalHeaders: {
                        "ChatGPT-Account-ID": a.value.accountId
                    },
                    parameters: {
                        path: {
                            library_file_id: b
                        }
                    },
                    requestBody: {
                        directory_id: c
                    }
                }), await a.queryClient.invalidateQueries({
                    queryKey: ["library-api", a.value.accountId, a.value.userId]
                })
            }
        })
    })
};