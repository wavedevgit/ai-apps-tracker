export const __rspack_esm_ids = [301030];
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
        var n = r("lAQI");
        let a = n.F({
                index: n.L().regex(/^\d+$/).transform(Number)
            }).strip(),
            l = n.F({
                marker_text: n.L().trim().min(1).optional(),
                marker_type: n.L().trim().min(1).optional()
            }).strip();
        r.d(t, {}, {
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
    G6mJ: (function(e, t, r) {
        var n = r("rKAs"),
            a = r("xAIC");
        r.d(t, {}, {
            a: function(e, t) {
                if (null == t) return null;
                let r = (0, a.a)(e);
                if (null != r) {
                    let e = t[r];
                    return null == e ? null : {
                        index: r,
                        reference: e
                    }
                }
                let l = (0, a.b)(e);
                if (null == l) return null;
                let i = t.findIndex(e => (0, n.l)(e) === l);
                if (-1 === i) return null;
                let o = t[i];
                return null == o ? null : {
                    index: i,
                    reference: o
                }
            }
        })
    }),
    niC2: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("on57"),
            i = r("zd8w"),
            o = r("Wf1j"),
            s = r("Sm6l"),
            u = r("vxGj"),
            d = r("HOLv"),
            c = r("r21w"),
            f = r("SUhA"),
            p = r("JwGC"),
            m = r("SbOw"),
            g = r("LQio"),
            h = r("UUZh"),
            b = r("wufj");

        function v(e) {
            let t, r, s, u, d, p, m, g, h = (0, a.c)(36),
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
                C = (0, o.a)(),
                [P, S] = (0, i.useState)(null),
                [M, A] = (0, i.useState)(null),
                N = null != y.previewSrc && y.previewSrc !== M ? y.previewSrc : y.src;
            h[0] !== b || h[1] !== x || h[2] !== N ? (t = {
                src: N,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, h[0] = b, h[1] = x, h[2] = N, h[3] = t) : t = h[3];
            let {
                previewSrc: F
            } = (0, f.a)(t), E = null != v && (null == F || P !== F), T = k && "w-full", q = !k && ("dialog" === I ? "w-2/3" : "max-w-19/20");
            return h[4] !== T || h[5] !== q ? (r = (0, l.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", T, q), h[4] = T, h[5] = q, h[6] = r) : r = h[6], h[7] !== v || h[8] !== y.height || h[9] !== y.width || h[10] !== I || h[11] !== k ? (s = k || "dialog" === I ? void 0 : {
                aspectRatio: null == v ? `${y.width??1}/${y.height??1}` : "5/4"
            }, h[7] = v, h[8] = y.height, h[9] = y.width, h[10] = I, h[11] = k, h[12] = s) : s = h[12], h[13] !== w || h[14] !== C ? (u = C.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}"
            }, {
                number: w
            }), h[13] = w, h[14] = C, h[15] = u) : u = h[15], h[16] !== j ? (d = e => j(e.currentTarget), h[16] = j, h[17] = d) : d = h[17], h[18] !== v || h[19] !== y.previewSrc || h[20] !== _ || h[21] !== P || h[22] !== F || h[23] !== E ? (p = null == F ? (0, n.jsx)(c.a, {
                className: "h-full w-full"
            }) : (0, n.jsx)("img", {
                ref: E ? void 0 : _,
                className: (0, l.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == v && P !== F && "opacity-0"),
                src: F,
                alt: "",
                draggable: !1,
                loading: null == v ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => S(F),
                onError: () => A(y.previewSrc ?? null)
            }), h[18] = v, h[19] = y.previewSrc, h[20] = _, h[21] = P, h[22] = F, h[23] = E, h[24] = p) : p = h[24], h[25] !== v || h[26] !== _ || h[27] !== E ? (m = E ? (0, n.jsx)("img", {
                ref: _,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: v,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, h[25] = v, h[26] = _, h[27] = E, h[28] = m) : m = h[28], h[29] !== m || h[30] !== r || h[31] !== s || h[32] !== u || h[33] !== d || h[34] !== p ? (g = (0, n.jsxs)("button", {
                className: r,
                style: s,
                "aria-label": u,
                type: "button",
                onClick: d,
                children: [p, m]
            }), h[29] = m, h[30] = r, h[31] = s, h[32] = u, h[33] = d, h[34] = p, h[35] = g) : g = h[35], g
        }

        function y(e) {
            let t, r, l, i, s = (0, a.c)(16),
                {
                    conversationId: u,
                    image: d,
                    imageAssetResolver: c,
                    imageNumber: m,
                    onClose: g,
                    onCloseAutoFocus: h,
                    onNextImage: b,
                    onPreviousImage: v
                } = e,
                y = (0, o.a)();
            s[0] !== u || s[1] !== d.src || s[2] !== c ? (t = {
                src: d.src,
                conversationId: u,
                imageAssetResolver: c,
                shouldLoadFileDataUrl: !1
            }, s[0] = u, s[1] = d.src, s[2] = c, s[3] = t) : t = s[3];
            let {
                previewSrc: x
            } = (0, f.a)(t);
            return null == x ? null : (s[4] !== m || s[5] !== y ? (r = y.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}"
            }, {
                number: m
            }), s[4] = m, s[5] = y, s[6] = r) : r = s[6], s[7] !== g ? (l = e => {
                e || g()
            }, s[7] = g, s[8] = l) : l = s[8], s[9] !== h || s[10] !== b || s[11] !== v || s[12] !== x || s[13] !== r || s[14] !== l ? (i = (0, n.jsx)(p.a, {
                alt: r,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: h,
                onOpenChange: l,
                onNextImage: b,
                onPreviousImage: v
            }), s[9] = h, s[10] = b, s[11] = v, s[12] = x, s[13] = r, s[14] = l, s[15] = i) : i = s[15], i)
        }

        function x(e, t) {
            let r = e.children.item(t);
            if (!(r instanceof HTMLElement)) return 0;
            let n = "rtl" === getComputedStyle(e).direction,
                a = e.scrollWidth - e.clientWidth,
                l = r.offsetLeft - (e.clientWidth - r.offsetWidth) / 2;
            return 0 === t ? l = 0 : t === e.children.length - 1 && (l = n ? r.offsetLeft : r.offsetLeft + r.offsetWidth - e.clientWidth), n ? Math.max(-a, Math.min(0, l)) : Math.max(0, Math.min(a, l))
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, c, f, p, w, _, j, k, I, C, P, S, M, A, N, F, E, T, q, L = (0, a.c)(63),
                    {
                        ref: R,
                        conversationId: z,
                        businessProfileHeader: D,
                        firstPhotoFallbackSrc: B,
                        imageAssetResolver: O,
                        images: U,
                        onOpenImage: G,
                        onArrowClick: Q,
                        presentation: K
                    } = e,
                    W = void 0 === K ? "sidebar" : K,
                    H = (0, o.a)(),
                    J = (0, i.useContext)(g.a),
                    V = (0, i.useRef)(null),
                    Z = (0, i.useRef)(null),
                    $ = (0, i.useRef)(null);
                L[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, L[0] = t) : t = L[0];
                let X = (0, i.useRef)(t);
                L[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => ({
                    getThumbnail: e => X.current.get(e) ?? null
                }), L[1] = r) : r = L[1], (0, i.useImperativeHandle)(R, r);
                let [Y, ee] = (0, i.useState)(0), [et, er] = (0, i.useState)(null);
                L[2] !== et ? (c = e => e.id === et, L[2] = et, L[3] = c) : c = L[3];
                let en = U.findIndex(c),
                    ea = U[en],
                    el = Math.min(Y, U.length - 1);
                L[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                    let t = V.current;
                    if (null == t) return;
                    let r = x(t, e);
                    Z.current = 1 >= Math.abs(t.scrollLeft - r) ? null : r, t.scrollTo({
                        left: r
                    }), ee(e)
                }, L[4] = f) : f = L[4];
                let ei = f;
                L[5] !== U.length ? (p = e => {
                    let t = 0,
                        r = 1 / 0;
                    for (let n = 0; n < U.length; n += 1) {
                        let a = Math.abs(x(e, n) - e.scrollLeft);
                        a < r && (r = a, t = n)
                    }
                    ee(t)
                }, L[5] = U.length, L[6] = p) : p = L[6];
                let eo = p,
                    es = !D && "dialog" !== W && "mb-5";
                L[7] !== es ? (w = (0, l.b)("-mx-6", es), L[7] = es, L[8] = w) : w = L[8];
                let eu = "dialog" === W && "h-56 sm:h-64",
                    ed = "cover" === W && "aspect-3/1",
                    ec = "sidebar" === W && "aspect-5/4";
                L[9] !== eu || L[10] !== ed || L[11] !== ec ? (_ = (0, l.b)("group/photos relative overflow-hidden select-none", eu, ed, ec), L[9] = eu, L[10] = ed, L[11] = ec, L[12] = _) : _ = L[12], L[13] !== H ? (j = H.formatMessage({
                    id: "chatgpt.imageGroup.photos",
                    defaultMessage: "Photos"
                }), L[13] = H, L[14] = j) : j = L[14], L[15] !== U.length || L[16] !== H ? (k = U.length > 1 ? H.formatMessage({
                    id: "chatgpt.imageGroup.carouselRole",
                    defaultMessage: "carousel"
                }) : void 0, L[15] = U.length, L[16] = H, L[17] = k) : k = L[17], L[18] !== U.length || L[19] !== ei || L[20] !== el ? (I = e => {
                    if (!(U.length < 2) && !e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                        e.preventDefault(), e.stopPropagation();
                        let t = "rtl" === getComputedStyle(e.currentTarget).direction,
                            r = e.key === (t ? "ArrowLeft" : "ArrowRight") ? (el + 1) % U.length : Math.max(0, el - 1);
                        ei(r);
                        let n = V.current,
                            a = n?.children.item(r);
                        e.target instanceof HTMLButtonElement && e.target.parentElement === n && a instanceof HTMLButtonElement && a.focus({
                            preventScroll: !0
                        })
                    }
                }, L[18] = U.length, L[19] = ei, L[20] = el, L[21] = I) : I = L[21], L[22] !== eo ? (C = e => {
                    let t = e.currentTarget,
                        r = Z.current;
                    if (null != r) {
                        1 >= Math.abs(t.scrollLeft - r) && (Z.current = null);
                        return
                    }
                    eo(t)
                }, P = e => {
                    Z.current = null, eo(e.currentTarget)
                }, L[22] = eo, L[23] = C, L[24] = P) : (C = L[23], P = L[24]), L[25] === Symbol.for("react.memo_cache_sentinel") ? (S = () => {
                    Z.current = null
                }, M = () => {
                    Z.current = null
                }, L[25] = S, L[26] = M) : (S = L[25], M = L[26]);
                let ef = U.map((e, t) => (0, n.jsx)(v, {
                    conversationId: z,
                    fallbackSrc: 0 === t ? B : void 0,
                    image: e,
                    imageAssetResolver: O,
                    imageNumber: t + 1,
                    imageRef: t => {
                        if (null != t) return X.current.set(e.id, t), () => {
                            X.current.get(e.id) === t && X.current.delete(e.id)
                        }
                    },
                    single: 1 === U.length,
                    presentation: W,
                    onOpen: r => {
                        null != G ? G(t) : ($.current = r, er(e.id))
                    }
                }, e.id));
                L[27] !== C || L[28] !== P || L[29] !== S || L[30] !== M || L[31] !== ef ? (A = (0, n.jsx)("div", {
                    ref: V,
                    className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                    onScroll: C,
                    onScrollEnd: P,
                    onPointerDown: S,
                    onWheel: M,
                    children: ef
                }), L[27] = C, L[28] = P, L[29] = S, L[30] = M, L[31] = ef, L[32] = A) : A = L[32], L[33] !== U.length || L[34] !== H || L[35] !== Q || L[36] !== ei || L[37] !== el ? (N = U.length > 1 ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-hover/photos:[&>button]:pointer-events-auto [[data-entity-photos]:has(:focus-visible)>&]:opacity-100 [[data-entity-photos]:has(:focus-visible)>&>[data-photo-carousel-arrow]]:pointer-events-auto",
                        children: [(0, n.jsx)(s.a, {
                            className: 0 === el ? "invisible" : void 0,
                            "data-photo-carousel-arrow": !0,
                            "aria-label": H.formatMessage({
                                id: "chatgpt.imageGroup.previousPhoto",
                                defaultMessage: "Previous photo"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = Math.max(0, el - 1);
                                e !== el && Q?.("previous", e), ei(e)
                            },
                            children: (0, n.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: h.a
                            })
                        }), (0, n.jsx)(s.a, {
                            "data-photo-carousel-arrow": !0,
                            "aria-label": H.formatMessage({
                                id: "chatgpt.imageGroup.nextPhoto",
                                defaultMessage: "Next photo"
                            }),
                            color: "mediaSolid",
                            radius: "full",
                            size: "inputIcon",
                            onClick: () => {
                                let e = (el + 1) % U.length;
                                e !== el && Q?.("next", e), ei(e)
                            },
                            children: (0, n.jsx)(d.a, {
                                className: "rtl:rotate-180",
                                asset: b.a
                            })
                        })]
                    }), U.length <= 20 ? (0, n.jsx)("div", {
                        className: "absolute inset-x-0 bottom-3 flex justify-center",
                        children: (0, n.jsx)(u.a, {
                            count: U.length,
                            activeIndex: el,
                            getPageLabel: e => H.formatMessage({
                                id: "chatgpt.imageGroup.goToPhoto",
                                defaultMessage: "Go to photo {number}"
                            }, {
                                number: e + 1
                            }),
                            onSelect: ei
                        })
                    }) : null]
                }) : null, L[33] = U.length, L[34] = H, L[35] = Q, L[36] = ei, L[37] = el, L[38] = N) : N = L[38], L[39] !== J || L[40] !== _ || L[41] !== j || L[42] !== k || L[43] !== I || L[44] !== A || L[45] !== N ? (F = (0, n.jsxs)("div", {
                    ref: J,
                    className: _,
                    "data-entity-photos": !0,
                    "aria-label": j,
                    "aria-roledescription": k,
                    role: "region",
                    onKeyDown: I,
                    children: [A, N]
                }), L[39] = J, L[40] = _, L[41] = j, L[42] = k, L[43] = I, L[44] = A, L[45] = N, L[46] = F) : F = L[46], L[47] !== z || L[48] !== O || L[49] !== U || L[50] !== $ || L[51] !== ea || L[52] !== en || L[53] !== er ? (E = null != ea ? (0, n.jsx)(y, {
                    conversationId: z,
                    image: ea,
                    imageAssetResolver: O,
                    imageNumber: en + 1,
                    onClose: () => er(null),
                    onCloseAutoFocus: e => {
                        e.preventDefault(), $.current?.focus()
                    },
                    onPreviousImage: en > 0 ? () => er(U[en - 1].id) : void 0,
                    onNextImage: en < U.length - 1 ? () => er(U[en + 1].id) : void 0
                }) : null, L[47] = z, L[48] = O, L[49] = U, L[50] = $, L[51] = ea, L[52] = en, L[53] = er, L[54] = E) : E = L[54], L[55] !== F || L[56] !== E || L[57] !== w ? (T = (0, n.jsxs)("div", {
                    className: w,
                    "data-testid": "chatgpt-image-group-carousel",
                    children: [F, E]
                }), L[55] = F, L[56] = E, L[57] = w, L[58] = T) : T = L[58];
                let ep = T;
                return L[59] !== D || L[60] !== ep || L[61] !== U.length ? (q = D ? (0, n.jsx)(m.b, {
                    ...D,
                    children: U.length > 0 ? ep : null
                }) : ep, L[59] = D, L[60] = ep, L[61] = U.length, L[62] = q) : q = L[62], q
            }
        })
    }),
    NDDl: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("Q840"),
            i = r("zd8w"),
            o = r("oyxz"),
            s = r("bf6R"),
            u = r("OWtl"),
            d = r("zHQF"),
            c = r("TUMj"),
            f = r("w7PD"),
            p = r("cGwJ"),
            m = r("JV0C");

        function g(e) {
            let t, r = (0, a.c)(2),
                {
                    nativeUnavailable: l
                } = e;
            return r[0] !== l ? (t = (0, n.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: l ? (0, n.jsx)(d.b, {}) : (0, n.jsx)(o.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again."
                })
            }), r[0] = l, r[1] = t) : t = r[1], t
        }

        function h(e) {
            let t, r, i = (0, a.c)(5),
                {
                    conversationId: o,
                    data: s
                } = e,
                u = (0, l.x)(f.b, o);
            if (null == u) return null;
            i[0] !== s ? (t = f.a.safeParse(s).data?.items, i[0] = s, i[1] = t) : t = i[1];
            let d = t;
            return i[2] !== u || i[3] !== d ? (r = d ? (0, n.jsx)(b, {
                chat: u,
                items: d,
                onSelect: u.open
            }) : null, i[2] = u, i[3] = d, i[4] = r) : r = i[4], r
        }

        function b(e) {
            let t, r, l, i = (0, a.c)(13),
                {
                    chat: o,
                    items: u,
                    onSelect: d
                } = e;
            if (i[0] !== o || i[1] !== u || i[2] !== d) {
                let e;
                i[4] !== o || i[5] !== d ? (e = e => (0, n.jsxs)(m.a, {
                    allowShrink: !0,
                    color: "conversationPill",
                    size: "suggestedQuestion",
                    disabled: null != o.pendingId,
                    loading: o.pendingId === e.id,
                    onClick: () => d(e),
                    children: [(0, n.jsx)(s.Jb, {
                        "aria-hidden": !0
                    }), (0, n.jsx)("span", {
                        className: "min-w-0 text-start break-words whitespace-normal",
                        children: e.label
                    })]
                }, e.id), i[4] = o, i[5] = d, i[6] = e) : e = i[6], t = u.map(e), i[0] = o, i[1] = u, i[2] = d, i[3] = t
            } else t = i[3];
            return i[7] !== o || i[8] !== u ? (r = u.some(e => {
                let {
                    id: t
                } = e;
                return t === o.failedId
            }) ? (0, n.jsx)(g, {
                nativeUnavailable: o.nativeUnavailable
            }) : null, i[7] = o, i[8] = u, i[9] = r) : r = i[9], i[10] !== t || i[11] !== r ? (l = (0, n.jsxs)("div", {
                className: "flex flex-col items-start gap-2.5 pb-4",
                children: [t, r]
            }), i[10] = t, i[11] = r, i[12] = l) : l = i[12], l
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
                let t, r, o, s = (0, a.c)(7),
                    {
                        conversationId: d,
                        actions: c,
                        children: p
                    } = e,
                    m = (0, l.y)(u.a);
                return s[0] !== c || s[1] !== d || s[2] !== m ? (t = () => {
                    let e = m.watch(e => {
                        let {
                            get: t
                        } = e;
                        t(f.b, d)
                    });
                    return m.set(f.b, d, c), () => {
                        m.get(f.b, d) === c && m.set(f.b, d, null), e()
                    }
                }, r = [m, d, c], s[0] = c, s[1] = d, s[2] = m, s[3] = t, s[4] = r) : (t = s[3], r = s[4]), (0, i.useLayoutEffect)(t, r), s[5] !== p ? (o = (0, n.jsx)(n.Fragment, {
                    children: p
                }), s[5] = p, s[6] = o) : o = s[6], o
            },
            b: function(e) {
                let t, r, i, s, u, d = (0, a.c)(15),
                    {
                        conversationId: c
                    } = e,
                    p = (0, l.x)(f.b, c);
                if (p?.startChat == null) return null;
                let h = p.startChat,
                    b = null != p.pendingId,
                    v = p.pendingId === h.id;
                return d[0] !== h || d[1] !== p ? (t = () => p.open(h, "start-chat"), d[0] = h, d[1] = p, d[2] = t) : t = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(o.a, {
                    id: "chatgpt.entity.businessProfile.startChat",
                    defaultMessage: "Start chat"
                }), d[3] = r) : r = d[3], d[4] !== b || d[5] !== v || d[6] !== t ? (i = (0, n.jsx)(m.a, {
                    color: "primary",
                    size: "businessProfileAction",
                    disabled: b,
                    loading: v,
                    onClick: t,
                    children: r
                }), d[4] = b, d[5] = v, d[6] = t, d[7] = i) : i = d[7], d[8] !== h.id || d[9] !== p.failedId || d[10] !== p.nativeUnavailable ? (s = p.failedId === h.id ? (0, n.jsx)(g, {
                    nativeUnavailable: p.nativeUnavailable
                }) : null, d[8] = h.id, d[9] = p.failedId, d[10] = p.nativeUnavailable, d[11] = s) : s = d[11], d[12] !== i || d[13] !== s ? (u = (0, n.jsxs)(n.Fragment, {
                    children: [i, s]
                }), d[12] = i, d[13] = s, d[14] = u) : u = d[14], u
            },
            c: function(e) {
                let t, r = (0, a.c)(5),
                    {
                        conversationId: i,
                        after: o
                    } = e,
                    s = void 0 === o ? "transcript" : o,
                    u = (0, l.x)(f.b, i),
                    d = u?.suggestedQuestions,
                    c = (0, l.x)(d?.length ? p.a : null, i);
                return r[0] !== s || r[1] !== u || r[2] !== c || r[3] !== d ? (t = u && d?.length && c === s ? (0, n.jsx)(b, {
                    chat: u,
                    items: d.map(v),
                    onSelect: e => u.open(e, "suggestion")
                }) : null, r[0] = s, r[1] = u, r[2] = c, r[3] = d, r[4] = t) : t = r[4], t
            },
            d: function(e) {
                let t, r = (0, a.c)(3),
                    {
                        data: l
                    } = e,
                    i = (0, c.d)();
                return r[0] !== l || r[1] !== i ? (t = i?.conversationType === "sidebar" ? (0, n.jsx)(h, {
                    conversationId: i.conversationId,
                    data: l
                }) : null, r[0] = l, r[1] = i, r[2] = t) : t = r[2], t
            }
        })
    }),
    w7PD: (function(e, t, r) {
        var n = r("Q840"),
            a = r("lAQI"),
            l = r("OWtl");
        let i = a.F({
                items: a.g(a.F({
                    id: a.L().trim().min(1),
                    label: a.L().trim().min(1),
                    prefill: a.L().nullish()
                })).min(1)
            }),
            o = (0, n.v)(l.a, e => null, void 0, {
                autoDispose: !0
            });
        r.d(t, {}, {
            a: i,
            b: o
        })
    }),
    FQiC: (function(e, t, r) {
        var n = r("Q840"),
            a = r("zd8w"),
            l = r("Cslg"),
            i = r("OWtl"),
            o = r("tZ3A"),
            s = r("orgn");
        let u = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(o.c, e)?.businessProfile, a = r(s.a, e);
                return {
                    conversationId: e,
                    accountId: r(l.f),
                    userId: r(l.j),
                    profileId: a?.profileId ?? null,
                    identity: JSON.stringify([a?.profileId, a?.source, a?.source === "entity-knowledge" ? null : n ?? null])
                }
            }),
            d = (0, n.j)(i.a, (e, t) => {
                let {
                    signal: r
                } = t;
                return {
                    isOpen$: r(!1),
                    triggerRef: (0, a.createRef)(),
                    acquisitionJourneyId: (0, a.createRef)()
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
            a = r("QosV"),
            l = r("on57"),
            i = r("zd8w"),
            o = r("E6P3"),
            s = r("zSQm"),
            u = r("WAdu"),
            d = r("TUMj"),
            c = r("LQio");

        function f(e) {
            let t, r, c = (0, a.c)(7),
                {
                    src: f,
                    overlap: p
                } = e,
                m = void 0 !== p && p,
                g = (0, i.useContext)(u.a),
                h = (0, d.d)();
            c[0] !== g || c[1] !== f || c[2] !== h?.shouldBlockExternalEgress ? (t = f && "restricted" !== g && !h?.shouldBlockExternalEgress ? (0, s.b)(f) : void 0, c[0] = g, c[1] = f, c[2] = h?.shouldBlockExternalEgress, c[3] = t) : t = c[3];
            let b = t;
            return c[4] !== m || c[5] !== b ? (r = b ? (0, n.jsx)(o.a, {
                alt: "",
                src: b,
                fallback: (0, n.jsx)(n.Fragment, {}),
                className: (0, l.b)("size-18 rounded-2xl border-4 border-surface bg-surface", m ? "relative -mt-8 self-start" : "mb-3")
            }, b) : null, c[4] = m, c[5] = b, c[6] = r) : r = c[6], r
        }
        r.d(t, {}, {
            a: f,
            b: function(e) {
                let t, r, o, s = (0, a.c)(12),
                    {
                        children: u,
                        logoUrl: d,
                        logoPrimaryColor: p,
                        photosPending: m
                    } = e,
                    g = (0, i.useContext)(c.a);
                if (!u && !m && !p) {
                    let e;
                    return s[0] !== d ? (e = (0, n.jsx)(f, {
                        src: d
                    }), s[0] = d, s[1] = e) : e = s[1], e
                }
                return s[2] !== u || s[3] !== p || s[4] !== m || s[5] !== g ? (t = u ?? (0, n.jsx)("div", {
                    ref: g,
                    "aria-hidden": "true",
                    "data-entity-photos": !0,
                    className: (0, l.b)("-mx-6 bg-text/10", m ? "aspect-5/4" : "aspect-3/1"),
                    style: {
                        backgroundColor: p ?? void 0
                    }
                }), s[2] = u, s[3] = p, s[4] = m, s[5] = g, s[6] = t) : t = s[6], s[7] !== d ? (r = (0, n.jsx)(f, {
                    src: d,
                    overlap: !0
                }), s[7] = d, s[8] = r) : r = s[8], s[9] !== t || s[10] !== r ? (o = (0, n.jsxs)("div", {
                    className: "mb-5 flex flex-col has-[>img]:mb-3",
                    children: [t, r]
                }), s[9] = t, s[10] = r, s[11] = o) : o = s[11], o
            }
        })
    }),
    orgn: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("Q840"),
            l = r("UKCO"),
            i = r("Cslg"),
            o = r("OWtl"),
            s = r("OMIV"),
            u = r("tZ3A"),
            d = r("Kwur");
        let c = (0, a.q)(o.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(u.c, e), o = a?.entityKnowledgeId, c = r(i.f), f = r(i.j), p = null != o && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != c && null != f && r(s.e, "2778625748");
                return {
                    queryKey: ["entity-business-profile", c, f, e, "entity-knowledge", o],
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
                                [l.dc]: c
                            },
                            requestBody: {
                                provider: "entity-knowledge",
                                provider_business_id: o
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
            f = (0, a.q)(o.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(u.c, e), o = a?.businessProfile, f = r(i.f), p = r(i.j), m = null != o && !a?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && null != f && null != p && r(s.e, "2778625748");
                if (m && a?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: n,
                        isPending: a
                    } = r(c, e);
                    m = n && !a && null == t
                }
                return {
                    queryKey: ["entity-business-profile", f, p, e, "canonical-business-profile", o?.canonical_id, o?.profile_id],
                    enabled: m,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: m && null != o && null != f ? async e => {
                        let {
                            signal: t
                        } = e, r = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [l.dc]: f
                            },
                            requestBody: {
                                provider: "canonical-business-profile",
                                provider_business_id: o.canonical_id
                            },
                            signal: t,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        });
                        return t.throwIfAborted(), {
                            profileId: o.profile_id,
                            source: "canonical",
                            status: r
                        }
                    } : n.u
                }
            }),
            p = (0, a.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(u.c, e);
                if (n?.businessProfile == null && n?.entityKnowledgeId == null || n?.entityKnowledgePending || !["business", "brand", "company", "organization"].includes(n?.category ?? "") || !r(s.e, "2778625748")) return null;
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
                    isEnabled: l
                } = r(f, e);
                return l ? a ?? null : null
            }),
            m = (0, a.d)(o.a, (e, t) => {
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
        var n = r("Q840"),
            a = r("rKAs"),
            l = r("IgxH"),
            i = r("OWtl"),
            o = r("CTBG"),
            s = r("G6Ip"),
            u = r("dQRk"),
            d = r("w7PD");

        function c(e, t) {
            return `${e}:${t}`
        }
        let f = (0, n.d)(i.a, (e, t) => {
            let r, {
                get: n
            } = t;
            if ("idle" !== n(u.cb, e)) return null;
            let i = n(o.c, e),
                f = n(u.O, e),
                p = !1;
            for (let e of i ?? []) {
                let t;
                if (!e.id || f[e.id]?.blocked) continue;
                let n = (0, s.d)(e);
                if (!n.markdown) continue;
                let i = "finished_successfully" === e.status;
                for (let e of n.contentReferences)
                    if (!(0, a.I)(e)) {
                        if ("client_defined_widget" === e.type && "business_profile_starter_pills" === e.category && d.a.safeParse(e.data).success) return null;
                        i && null == r && ("product_group" === e.type || "products" === e.type) && "number" == typeof e.start_idx && (null == t || e.start_idx < t) && (0, a.y)(e).length > 0 && (t = e.start_idx)
                    } null != t && (r = c(e.id, t)), !i || r || p || (p = (0, l.a)(n.markdown).length > 0)
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
            l = r("v1r0"),
            i = r("Q840"),
            o = r("Wf1j"),
            s = r("oyxz"),
            u = r("bfX9"),
            d = r("bqtn"),
            c = r("HOLv"),
            f = r("zSQm"),
            p = r("OWtl"),
            m = r("tZ3A"),
            g = r("KDax"),
            h = r("NDDl"),
            b = r("FQiC"),
            v = r("SbOw"),
            y = r("orgn"),
            x = r("T2J5"),
            w = r("Iqbg"),
            _ = r("ChIc"),
            j = r("uR3g"),
            k = r("CxKE");

        function I() {
            let e, t, r = (0, a.c)(4),
                l = (0, o.a)();
            return r[0] !== l ? (e = l.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business"
            }), r[0] = l, r[1] = e) : e = r[1], r[2] !== e ? (t = (0, n.jsx)(x.a, {
                className: "ms-1.5",
                label: e,
                showTooltip: !0,
                size: 24
            }), r[2] = e, r[3] = t) : t = r[3], t
        }

        function C(e) {
            let t, r, l, i, o = (0, a.c)(14),
                {
                    conversationId: d,
                    requiresConfirmation: c,
                    status: p,
                    websiteUrl: m,
                    children: b
                } = e;
            if (o[0] !== m) {
                let e = (0, f.a)(m?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? e : null, o[0] = m, o[1] = t
            } else t = o[1];
            let v = t,
                y = p?.chat_target != null && p.header?.start_chat != null;
            return o[2] !== d || o[3] !== y || o[4] !== c || o[5] !== v ? (r = y || null != v ? (0, n.jsxs)("div", {
                className: "-ms-1 mt-4 mb-5 flex flex-wrap items-center gap-2 empty:hidden",
                children: [y ? (0, n.jsx)(h.b, {
                    conversationId: d
                }) : null, null != v ? (0, n.jsx)(g.a, {
                    className: "flex min-h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-default bg-transparent px-5 text-entity-action whitespace-nowrap text-default select-none no-drag only:border-transparent only:bg-primary-solid only:text-primary-solid hover:bg-secondary-ghost-hover only:hover:bg-primary-solid-hover focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: v,
                    initiator: "markdown_link_click",
                    requiresConfirmation: c,
                    appearance: "button",
                    underline: "none",
                    openAsWebsite: !0,
                    children: (0, n.jsx)(s.a, {
                        id: "chatgpt.entity.businessProfile.viewWebsite",
                        defaultMessage: "View website"
                    })
                }) : null]
            }) : null, o[2] = d, o[3] = y, o[4] = c, o[5] = v, o[6] = r) : r = o[6], o[7] !== d || o[8] !== p ? (l = (0, u.a)(p) ? (0, n.jsx)("div", {
                className: "border-t border-default",
                children: (0, n.jsx)(P, {
                    conversationId: d,
                    status: p
                })
            }) : null, o[7] = d, o[8] = p, o[9] = l) : l = o[9], o[10] !== b || o[11] !== r || o[12] !== l ? (i = (0, n.jsxs)(n.Fragment, {
                children: [r, b, l]
            }), o[10] = b, o[11] = r, o[12] = l, o[13] = i) : i = o[13], i
        }

        function P(e) {
            let t, r, l = (0, a.c)(8),
                {
                    conversationId: o,
                    status: s
                } = e,
                d = (0, i.y)(p.a),
                c = s?.is_claim_protected !== !0;
            l[0] !== o || l[1] !== d ? (t = e => {
                if (!(0, u.a)(d.get(y.b, o))) return;
                let t = d.get(b.a, d.get(b.b, o));
                t.acquisitionJourneyId.current = e ?? null, t.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, d.set(t.isOpen$, !0)
            }, l[0] = o, l[1] = d, l[2] = t) : t = l[2];
            let f = s?.ownership?.current_request;
            return l[3] !== o || l[4] !== c || l[5] !== t || l[6] !== f ? (r = (0, n.jsx)(w.a, {
                measure: c,
                conversationId: o,
                onClick: t,
                request: f
            }), l[3] = o, l[4] = c, l[5] = t, l[6] = f, l[7] = r) : r = l[7], r
        }

        function S(e) {
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
                let t, r, l, o = (0, a.c)(6),
                    {
                        conversationId: c
                    } = e,
                    f = (0, i.y)(p.a),
                    m = (0, i.x)(y.b, c);
                return (0, u.a)(m, "dispute") ? (o[0] !== c || o[1] !== f ? (t = () => {
                    if (!(0, u.a)(f.get(y.b, c), "dispute")) return;
                    let e = f.get(b.a, f.get(b.b, c));
                    e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
                }, o[0] = c, o[1] = f, o[2] = t) : t = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(s.a, {
                    id: "chatgpt.localBusiness.dispute.action",
                    defaultMessage: "Dispute profile ownership"
                }), o[3] = r) : r = o[3], o[4] !== t ? (l = (0, n.jsx)(d.c.Item, {
                    leftIconAsset: k.a,
                    onSelect: t,
                    children: r
                }), o[4] = t, o[5] = l) : l = o[5], l) : null
            },
            b: function(e) {
                let t, r = (0, a.c)(4),
                    {
                        conversationId: l
                    } = e,
                    o = (0, i.x)(y.a, l),
                    s = (0, i.x)(m.c, l);
                if (o?.source !== "entity-knowledge" || s?.businessProfile != null) return null;
                let u = s?.shouldBlockExternalEgress;
                return r[0] !== l || r[1] !== o.status || r[2] !== u ? (t = (0, n.jsx)(C, {
                    conversationId: l,
                    requiresConfirmation: u,
                    status: o.status
                }), r[0] = l, r[1] = o.status, r[2] = u, r[3] = t) : t = r[3], t
            },
            c: function(e) {
                let t, r, u, d, f, p, g, h, b, x, k, P, A = (0, a.c)(52),
                    {
                        conversationId: N,
                        profile: F,
                        inSidebar: E,
                        name: T
                    } = e,
                    q = void 0 !== E && E,
                    L = (0, o.a)(),
                    R = (0, i.x)(y.b, N),
                    z = (0, i.x)(m.c, N),
                    D = (0, i.x)(y.a, N),
                    B = D?.source === "entity-knowledge" && D.profileId !== F.profile_id ? null : F;
                A[0] !== B?.categories || A[1] !== B?.categories.find ? (t = B?.categories.find(S), A[0] = B?.categories, A[1] = B?.categories.find, A[2] = t) : t = A[2];
                let O = t;
                if (A[3] !== F || A[4] !== O || A[5] !== N || A[6] !== q || A[7] !== L || A[8] !== T || A[9] !== z?.businessProfile?.canonical_id || A[10] !== z?.query || A[11] !== z?.shouldBlockExternalEgress || A[12] !== B?.delivery_policy || A[13] !== B?.display_name || A[14] !== B?.logo_url || A[15] !== B?.returns_policy || A[16] !== B?.website_url || A[17] !== R) {
                    let e, t, a = M(B?.delivery_policy, l.b),
                        i = B?.returns_policy;
                    A[27] !== i ? (e = M(i, l.e), A[27] = i, A[28] = e) : e = A[28];
                    let o = e,
                        m = q && z?.businessProfile?.canonical_id === F.canonical_id;
                    A[29] !== m || A[30] !== z?.shouldBlockExternalEgress || A[31] !== B?.logo_url ? (b = m || z?.shouldBlockExternalEgress ? null : (0, n.jsx)(v.a, {
                        src: B?.logo_url
                    }), A[29] = m, A[30] = z?.shouldBlockExternalEgress, A[31] = B?.logo_url, A[32] = b) : b = A[32];
                    let y = B?.display_name ?? T ?? z?.query;
                    A[33] !== R?.is_verified ? (t = R?.is_verified ? (0, n.jsx)(I, {}) : null, A[33] = R?.is_verified, A[34] = t) : t = A[34], A[35] !== y || A[36] !== t ? (x = (0, n.jsxs)("h2", {
                        className: "text-card-title break-words",
                        children: [y, t]
                    }), A[35] = y, A[36] = t, A[37] = x) : x = A[37], A[38] !== O ? (u = O ? (0, n.jsx)("div", {
                        className: "text-lg leading-6 font-normal break-words text-default",
                        children: O
                    }) : null, A[38] = O, A[39] = u) : u = A[39], r = C, d = N, f = z?.shouldBlockExternalEgress, p = R, g = B?.website_url, h = null == a && null == o ? null : (0, n.jsxs)("div", {
                        className: "divide-y divide-border border-t border-default",
                        children: [null != a ? (0, n.jsxs)(w.f, {
                            icon: (0, n.jsx)(c.a, {
                                asset: j.a
                            }),
                            children: ["none" === a.delivery ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.noDelivery",
                                defaultMessage: "Delivery unavailable"
                            }) : null, "paid" === a.delivery ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.paidDelivery",
                                defaultMessage: "Paid delivery"
                            }) : null, "free" === a.delivery && "all_orders" === a.scope ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.freeDelivery",
                                defaultMessage: "Free delivery"
                            }) : null, "free" === a.delivery && "minimum_order" === a.scope ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.deliveryMinimum",
                                defaultMessage: "Free delivery over {amount}",
                                values: {
                                    amount: L.formatNumber(Number(a.minimum_order_amount), {
                                        style: "currency",
                                        currency: a.currency,
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 20
                                    })
                                }
                            }) : null]
                        }) : null, null != o ? (0, n.jsxs)(w.f, {
                            icon: (0, n.jsx)(c.a, {
                                asset: _.a
                            }),
                            children: ["none" === o.returns ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.noReturns",
                                defaultMessage: "Returns not accepted"
                            }) : null, "none" !== o.returns && "window" in o ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.unlimitedReturns",
                                defaultMessage: "{kind, select, free {Free returns with no time limit} other {Returns with no time limit, fees apply}}",
                                values: {
                                    kind: o.returns
                                }
                            }) : null, "none" !== o.returns && "window_days" in o ? (0, n.jsx)(s.a, {
                                id: "chatgpt.entity.businessProfile.returnWindow",
                                defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}}} other {Returns within {days, plural, one {# day} other {# days}}, fees apply}}",
                                values: {
                                    kind: o.returns,
                                    days: o.window_days
                                }
                            }) : null]
                        }) : null]
                    }), A[3] = F, A[4] = O, A[5] = N, A[6] = q, A[7] = L, A[8] = T, A[9] = z?.businessProfile?.canonical_id, A[10] = z?.query, A[11] = z?.shouldBlockExternalEgress, A[12] = B?.delivery_policy, A[13] = B?.display_name, A[14] = B?.logo_url, A[15] = B?.returns_policy, A[16] = B?.website_url, A[17] = R, A[18] = r, A[19] = u, A[20] = d, A[21] = f, A[22] = p, A[23] = g, A[24] = h, A[25] = b, A[26] = x
                } else r = A[18], u = A[19], d = A[20], f = A[21], p = A[22], g = A[23], h = A[24], b = A[25], x = A[26];
                return A[40] !== r || A[41] !== d || A[42] !== f || A[43] !== p || A[44] !== g || A[45] !== h ? (k = (0, n.jsx)(r, {
                    conversationId: d,
                    requiresConfirmation: f,
                    status: p,
                    websiteUrl: g,
                    children: h
                }), A[40] = r, A[41] = d, A[42] = f, A[43] = p, A[44] = g, A[45] = h, A[46] = k) : k = A[46], A[47] !== u || A[48] !== k || A[49] !== b || A[50] !== x ? (P = (0, n.jsxs)(n.Fragment, {
                    children: [b, x, u, k]
                }), A[47] = u, A[48] = k, A[49] = b, A[50] = x, A[51] = P) : P = A[51], P
            }
        })
    }),
    wFiG: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("EA6X"),
            i = r("Q840"),
            o = r("UKCO"),
            s = r("zd8w"),
            u = r("DcH0"),
            d = r("WAdu"),
            c = r("OWtl"),
            f = r("tZ3A"),
            p = r("niC2"),
            m = r("TUMj"),
            g = r("rxj0"),
            h = r("xof2"),
            b = r("SZ0w"),
            v = r("Iqbg"),
            y = r("FRPb"),
            x = r("LQio"),
            w = r("H0jo");

        function _(e) {
            let t, r, o, u, p = (0, a.c)(21),
                {
                    conversationId: x,
                    isTranscriptPending: w,
                    turnContext: _,
                    showClaimedBusinessTooltip: j
                } = e,
                k = void 0 !== w && w,
                I = void 0 !== j && j,
                C = (0, i.y)(c.a),
                P = (0, s.useContext)(d.a),
                S = (0, i.x)(g.e, x),
                M = (0, i.x)(y.b, x),
                A = (0, i.x)(y.d, x),
                N = k ? M?.business : A,
                F = (0, i.x)(f.c, x),
                E = (0, i.x)(f.e, x),
                T = (0, i.x)(y.c, x),
                q = k ? E : T;
            if (null == N && null == q) {
                if (F?.extraParams?.resolve_basemap_place === !0 && null == F.businessPreview) {
                    let e;
                    return p[0] !== F.query ? (e = (0, n.jsx)("h2", {
                        className: "mb-1 text-[22px] leading-7 font-medium break-words",
                        children: F.query
                    }), p[0] = F.query, p[1] = e) : e = p[1], e
                }
                return null
            }
            let L = S ? "restricted" : P,
                R = _ ?? null;
            return p[2] !== x || p[3] !== F?.query || p[4] !== q ? (t = null != q && (0, n.jsx)(b.c, {
                conversationId: x,
                profile: q,
                inSidebar: !0,
                name: F?.query
            }), p[2] = x, p[3] = F?.query, p[4] = q, p[5] = t) : t = p[5], p[6] !== N || p[7] !== M?.category || p[8] !== M?.messageId || p[9] !== M?.sourceConversationId || p[10] !== q || p[11] !== C || p[12] !== I ? (r = null == q && null != N && (0, n.jsx)(v.ChatGptLocalBusinessMetadata, {
                business: N,
                isOptimistic: !0,
                showClaimedBusinessTooltip: I,
                onAction: e => {
                    (0, h.b)(C, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: N.id.trim() || void 0,
                        entityCategory: M?.category ?? void 0,
                        messageId: M?.messageId,
                        assistantMessageId: M?.messageId,
                        conversationId: M?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), p[6] = N, p[7] = M?.category, p[8] = M?.messageId, p[9] = M?.sourceConversationId, p[10] = q, p[11] = C, p[12] = I, p[13] = r) : r = p[13], p[14] !== R || p[15] !== t || p[16] !== r ? (o = (0, n.jsxs)(m.b, {
                value: R,
                children: [t, r]
            }), p[14] = R, p[15] = t, p[16] = r, p[17] = o) : o = p[17], p[18] !== L || p[19] !== o ? (u = (0, n.jsx)(d.a, {
                value: L,
                children: o
            }), p[18] = L, p[19] = o, p[20] = u) : u = p[20], u
        }
        r.d(t, {}, {
            a: _,
            b: function(e) {
                let t, r, l, c = (0, a.c)(25),
                    {
                        conversationId: f,
                        isTranscriptPending: m,
                        turnContext: g,
                        showClaimedBusinessTooltip: h
                    } = e,
                    b = void 0 !== m && m,
                    v = void 0 !== h && h,
                    y = (0, s.useContext)(d.a),
                    j = (0, i.x)(w.a, f),
                    k = (0, i.x)(w.b, "restricted" === y ? null : f),
                    I = (0, i.x)(w.i, f),
                    C = (0, i.x)(w.d, f),
                    P = (0, i.x)(w.f, f),
                    S = (0, s.useContext)(x.a);
                if (C && !b) return null;
                c[0] !== y || c[1] !== I || c[2] !== k ? (t = (0, w.g)(k, null != I && "restricted" !== y ? [I] : []), c[0] = y, c[1] = I, c[2] = k, c[3] = t) : t = c[3];
                let M = t,
                    A = null;
                if (M.length > 0 || null != j) {
                    let e, t, r, a = `chatgpt:${f}`;
                    c[4] !== a ? (e = (0, o.Xe)(a), c[4] = a, c[5] = e) : e = c[5], c[6] !== b || c[7] !== j ? (t = j && b ? {
                        ...j,
                        photosPending: !0
                    } : j, c[6] = b, c[7] = j, c[8] = t) : t = c[8];
                    let l = k?.isCover ? "cover" : "sidebar";
                    c[9] !== M || c[10] !== e || c[11] !== t || c[12] !== l ? (r = (0, n.jsx)(p.a, {
                        conversationId: e,
                        images: M,
                        businessProfileHeader: t,
                        presentation: l
                    }), c[9] = M, c[10] = e, c[11] = t, c[12] = l, c[13] = r) : r = c[13], A = r
                } else if (P || b && C) {
                    let e, t;
                    c[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                        className: "aspect-5/4",
                        "aria-hidden": "true",
                        variant: "prominent"
                    }), c[14] = e) : e = c[14], c[15] !== S ? (t = (0, n.jsx)("div", {
                        className: "-mx-6 mb-5",
                        children: (0, n.jsx)("div", {
                            ref: S,
                            "data-entity-photos": !0,
                            children: e
                        })
                    }), c[15] = S, c[16] = t) : t = c[16], A = t
                }
                return c[17] !== f || c[18] !== b || c[19] !== v || c[20] !== g ? (r = (0, n.jsx)(_, {
                    conversationId: f,
                    isTranscriptPending: b,
                    turnContext: g,
                    showClaimedBusinessTooltip: v
                }), c[17] = f, c[18] = b, c[19] = v, c[20] = g, c[21] = r) : r = c[21], c[22] !== A || c[23] !== r ? (l = (0, n.jsxs)(n.Fragment, {
                    children: [A, r]
                }), c[22] = A, c[23] = r, c[24] = l) : l = c[24], l
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
        var n = r("Q840"),
            a = r("rKAs"),
            l = r("SqqO"),
            i = r("OWtl"),
            o = r("fzVa"),
            s = r("G6Ip"),
            u = r("tZ3A"),
            d = r("dQRk"),
            c = r("rxj0"),
            f = r("orgn"),
            p = r("TJEh"),
            m = r("FRPb");
        let g = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != e && r(u.a, e) && null == r(m.b, e) && r(u.c, e)?.businessProfile == null && r(u.c, e)?.extraParams?.resolve_basemap_place !== !0 ? r(d.gb, e) : null
            }),
            h = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(m.b, e), i = r(d.N, e);
                return null != i && Object.values(i).some(t => null != t.message && (0, s.c)(t.message).some((t, i) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (r(u.a, e) || (0, p.i)(n?.category ?? null))) && (!r(c.e, e) || (0, a.u)(t, i).some(e => !(0, l.d)(e.src)))))
            }),
            b = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(u.c, e);
                if (n?.businessProfile == null) return null;
                let a = n.businessProfile,
                    l = r(f.a, e);
                if (l?.source === "entity-knowledge" && l.profileId !== a.profile_id) return null;
                let i = n.shouldBlockExternalEgress || n.sourceTurnContext?.shouldBlockExternalEgress || r(c.e, e);
                return {
                    logoUrl: i ? null : a.logo_url ?? null,
                    logoPrimaryColor: a.logo_primary_color,
                    photosPending: (0, d.Db)(r(d.cb, e)) || !i && !!(a.cover_image_url || a.photo_urls?.length || r(x, e)) && r(o.b).isLoading,
                    coverUrl: i ? null : a.cover_image_url,
                    photoUrls: i ? null : a.photo_urls
                }
            }),
            v = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(b, e);
                if (!n || !n.coverUrl && !n.photoUrls?.length) return null;
                let a = r(o.b).data?.age_status;
                if ("over_18" !== a && "unsure" !== a) return null;
                let l = n.coverUrl && URL.parse(n.coverUrl)?.protocol === "https:" ? n.coverUrl : null,
                    i = new Set(l ? [l] : n.photoUrls?.filter(e => URL.parse(e)?.protocol === "https:"));
                return i.size > 0 ? {
                    isCover: null != l,
                    urls: i
                } : null
            });

        function y(e, t) {
            return [e.src, e.previewSrc, e.searchResult?.originalSrc, e.searchResult?.contentSrc].some(e => null != e && t.has(e))
        }
        let x = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(m.b, e);
                if (r(c.e, e)) return null;
                let a = r(u.b, e),
                    l = null == n ? null : (0, p.f)(n.business);
                return a ?? (null == l ? null : {
                    id: l,
                    src: l,
                    status: "completed",
                    type: "generated-image"
                })
            }),
            w = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(x, e);
                if (null == n) return null;
                let a = r(o.b).data?.age_status;
                return "over_18" === a || "unsure" === a ? n : null
            }),
            _ = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                return (r(u.a, e) || null != r(m.b, e)) && (0, d.Db)(r(d.cb, e)) && !r(h, e) && null == r(w, e)
            }),
            j = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(b, e);
                return r(h, e) || null != r(v, e) || n?.photosPending === !0 || !!n?.logoPrimaryColor || null != r(w, e) || r(_, e)
            });
        r.d(t, {}, {
            a: b,
            b: v,
            c: j,
            d: h,
            e: g,
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
            a = r("QosV"),
            l = r("on57");
        r.d(t, {}, {
            a: function(e) {
                let t, r = (0, a.c)(9),
                    {
                        count: i,
                        activeIndex: o,
                        getPageLabel: s,
                        onSelect: u
                    } = e;
                if (r[0] !== o || r[1] !== i || r[2] !== s || r[3] !== u) {
                    let e;
                    r[5] !== o || r[6] !== s || r[7] !== u ? (e = (e, t) => (0, n.jsx)("button", {
                        className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                        type: "button",
                        "aria-current": t === o ? "true" : void 0,
                        "aria-label": s(t),
                        onClick: () => u(t),
                        children: (0, n.jsx)("span", {
                            className: (0, l.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === o ? "w-3 opacity-100" : "w-1 opacity-40")
                        })
                    }, t), r[5] = o, r[6] = s, r[7] = u, r[8] = e) : e = r[8], t = (0, n.jsx)("div", {
                        className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                        children: Array.from({
                            length: i
                        }, e)
                    }), r[0] = o, r[1] = i, r[2] = s, r[3] = u, r[4] = t
                } else t = r[4];
                return t
            }
        })
    }),
    msI5: (function(e, t, r) {
        var n = r("ABep"),
            a = r("rKAs"),
            l = r("zd8w"),
            i = r("G6mJ"),
            o = r("FbH7");
        let s = (0, l.createContext)(null);

        function u(e) {
            return e?.type === "codexDirective" && e.name === a.a && !0 === e.block
        }
        r.d(t, {}, {
            a: s,
            b: function(e, t, r, a, l) {
                let s, d = e.findIndex(e => "space" !== e.type),
                    c = e[d],
                    f = c?.type === "heading" && (1 === c.depth || 2 === c.depth) && "string" == typeof c.text && c.text.trim() === a.trim() ? e.slice(d + 1) : e,
                    p = f.filter(e => "space" !== e.type),
                    m = e => u(e) ? (0, i.a)(e.attributes, r)?.reference : void 0,
                    g = p.at(-1);
                l && u(g) && !m(g) && p.pop();
                let h = p.findIndex(e => m(e)?.name === "ledger_spend_by_category_recent_transactions");
                h >= 0 ? s = p[h - 1] : l && m(p.at(-2))?.name === "ledger_spend_by_category_detail" && (s = p.at(-1));
                let b = function(e) {
                    if (e?.type === "heading" && 3 === e.depth) return e.tokens;
                    if (e?.type === "paragraph" && e.tokens?.length === 1) {
                        let t = e.tokens[0];
                        return t?.type === "strong" ? t.tokens : void 0
                    }
                }(s);
                if (!s || !b) return t(f);
                let v = f.indexOf(s);
                return [...t(f.slice(0, v)), (0, n.jsx)("h3", {
                    className: `${o.a.Paragraph} font-semibold`,
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
            a = r("QosV"),
            l = r("on57"),
            i = r("Sm6l"),
            o = r("psL3");

        function s(e) {
            e.currentTarget.blur()
        }
        r.d(t, {}, {
            a: function(e) {
                let t, r, o, u, d, c, f, p, m, g, h, b, v, y, x, w, _ = (0, a.c)(38);
                _[0] !== e ? ({
                    appearance: u,
                    controlSize: d,
                    children: t,
                    className: r,
                    iconOnly: c,
                    joined: f,
                    loading: p,
                    ...o
                } = e, _[0] = e, _[1] = t, _[2] = r, _[3] = o, _[4] = u, _[5] = d, _[6] = c, _[7] = f, _[8] = p) : (t = _[1], r = _[2], o = _[3], u = _[4], d = _[5], c = _[6], f = _[7], p = _[8]);
                let j = void 0 === u ? "compact" : u,
                    k = void 0 === d ? "default" : d,
                    I = void 0 !== c && c,
                    C = void 0 !== f && f,
                    P = void 0 !== p && p,
                    S = "compact" !== j,
                    M = "blurred" === j && "backdrop-blur-md";
                if (_[9] !== M || _[10] !== r || _[11] !== k || _[12] !== I || _[13] !== S || _[14] !== C || _[15] !== o) {
                    let e = (0, l.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                    S && I ? e = (0, l.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", C && "relative shrink-0 !border-0 [&>[data-loading-indicator]]:absolute [&>[data-loading-indicator]]:inset-0 [&>[data-loading-indicator]]:m-auto", "small" === k ? "size-9" : "size-10") : S && (e = (0, l.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", M, "small" === k ? "h-9" : "h-10")), m = i.a, h = o, b = "secondary", v = S ? "full" : "default", y = S ? "default" : "icon", g = (0, l.b)(e, r), _[9] = M, _[10] = r, _[11] = k, _[12] = I, _[13] = S, _[14] = C, _[15] = o, _[16] = m, _[17] = g, _[18] = h, _[19] = b, _[20] = v, _[21] = y
                } else m = _[16], g = _[17], h = _[18], b = _[19], v = _[20], y = _[21];
                return _[22] !== M || _[23] !== t || _[24] !== I || _[25] !== S || _[26] !== C || _[27] !== P ? (x = S && I ? (0, n.jsx)("span", {
                    className: (0, l.b)("flex size-9 items-center justify-center", C ? "rounded-none bg-transparent group-hover/gallery-action:bg-media-background/25 group-focus/gallery-action:bg-media-background/25" : "rounded-full bg-media-background/45 group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60", !C && M),
                    children: P ? null : t
                }) : t, _[22] = M, _[23] = t, _[24] = I, _[25] = S, _[26] = C, _[27] = P, _[28] = x) : x = _[28], _[29] !== m || _[30] !== P || _[31] !== g || _[32] !== x || _[33] !== h || _[34] !== b || _[35] !== v || _[36] !== y ? (w = (0, n.jsx)(m, {
                    ...h,
                    color: b,
                    radius: v,
                    size: y,
                    className: g,
                    loading: P,
                    onPointerUp: s,
                    children: x
                }), _[29] = m, _[30] = P, _[31] = g, _[32] = x, _[33] = h, _[34] = b, _[35] = v, _[36] = y, _[37] = w) : w = _[37], w
            },
            b: function(e) {
                let t, r, i, s, u = (0, a.c)(8);
                return u[0] !== e ? ({
                    className: t,
                    ...r
                } = e, u[0] = e, u[1] = t, u[2] = r) : (t = u[1], r = u[2]), u[3] !== t ? (i = (0, l.b)("overflow-hidden rounded-full bg-transparent group-focus-within/generated-image-preview:bg-media-background/45 group-focus-within/generated-image-preview:backdrop-blur-md group-focus-within/search-image:bg-media-background/45 group-focus-within/search-image:backdrop-blur-md group-hover/generated-image-preview:bg-media-background/45 group-hover/generated-image-preview:backdrop-blur-md group-hover/search-image:bg-media-background/45 group-hover/search-image:backdrop-blur-md has-[[data-saved=true]]:bg-media-background/45 has-[[data-saved=true]]:backdrop-blur-md has-[[data-state=open]]:bg-media-background/45 has-[[data-state=open]]:backdrop-blur-md pointer-coarse:bg-media-background/45 pointer-coarse:backdrop-blur-md [@media(hover:none)]:bg-media-background/45 [@media(hover:none)]:backdrop-blur-md", t), u[3] = t, u[4] = i) : i = u[4], u[5] !== r || u[6] !== i ? (s = (0, n.jsx)(o.a, {
                    ...r,
                    className: i
                }), u[5] = r, u[6] = i, u[7] = s) : s = u[7], s
            }
        })
    }),
    jo5I: (function(e, t, r) {
        r.d(t, {
            a: () => C
        });
        var n = r("ABep"),
            a = r("QosV"),
            l = r("slpy"),
            i = r("on57"),
            o = r("Q840"),
            s = r("zd8w"),
            u = r("Wf1j"),
            d = r("oyxz"),
            c = r("Sm6l"),
            f = r("bqtn"),
            p = r("HOLv"),
            m = r("bf6R"),
            g = r("Yq7Q"),
            h = r("jU86"),
            b = r("cZk2");
        let v = (0, r("Bbed").a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(596051)]).then(r.bind(r, "drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, n.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function y(e) {
            let t, r = (0, a.c)(3),
                [l, i] = (0, s.useState)(!!e.open);
            return e.open && !l && i(!0), r[0] !== l || r[1] !== e ? (t = l ? (0, n.jsx)(s.Suspense, {
                fallback: (0, n.jsx)(x, {
                    ...e
                }),
                children: (0, n.jsx)(v, {
                    ...e
                })
            }) : null, r[0] = l, r[1] = e, r[2] = t) : t = r[2], t
        }

        function x(e) {
            let t, r, l, i = (0, a.c)(10),
                {
                    open: o,
                    onOpenChange: s,
                    onCloseAutoFocus: u,
                    failed: c
                } = e,
                f = void 0 !== c && c,
                p = !!o;
            return i[0] !== s ? (t = e => s?.(e), i[0] = s, i[1] = t) : t = i[1], i[2] !== f ? (r = f ? (0, n.jsx)(d.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder"
            }) : (0, n.jsx)(d.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…"
            }), i[2] = f, i[3] = r) : r = i[3], i[4] !== f || i[5] !== u || i[6] !== p || i[7] !== t || i[8] !== r ? (l = (0, n.jsx)(b.a, {
                open: p,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: r
            }), i[4] = f, i[5] = u, i[6] = p, i[7] = t, i[8] = r, i[9] = l) : l = i[9], l
        }
        var w = r("IZUf"),
            _ = r("mKX5"),
            j = r("zJ9Y"),
            k = r("zIEL");
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
            let t, r, m, g, b, v, x, I, C, F, E, T, q, L, R, z, D, B, O, U, G, Q, K, W, H, J, V, Z, $, X, Y, ee = (0, a.c)(95),
                {
                    className: et,
                    appearance: er,
                    joined: en,
                    visibility: ea,
                    isSaved: el,
                    isBusy: ei,
                    isCheckingStatus: eo,
                    selectedFolderId: es,
                    onToggleFavorite: eu,
                    onSelectFolder: ed
                } = e,
                ec = void 0 === er ? "media-overlay" : er,
                ef = void 0 !== en && en,
                ep = (0, o.y)(h.c),
                em = (0, u.a)(),
                [eg, eh] = (0, s.useState)(!1),
                [eb, ev] = (0, s.useState)(!1);
            ee[0] !== eb ? (t = {
                enabled: eb
            }, ee[0] = eb, ee[1] = t) : t = ee[1];
            let {
                data: ey
            } = (0, o.z)(w.a, t), [ex, ew] = (0, s.useState)(!1), [e_, ej] = (0, s.useState)(null), ek = (0, s.useRef)(null), eI = (0, s.useRef)(null), eC = ei || eo;
            ee[2] !== em ? (r = em.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder"
            }), ee[2] = em, ee[3] = r) : r = ee[3];
            let eP = r;
            if (eo) {
                let e;
                ee[4] !== em ? (e = em.formatMessage({
                    id: "library.favoriteFolder.checking",
                    defaultMessage: "Checking Favorites status"
                }), ee[4] = em, ee[5] = e) : e = ee[5], m = e
            } else if (el) {
                let e;
                ee[6] !== em ? (e = em.formatMessage({
                    id: "library.favoriteFolder.remove",
                    defaultMessage: "Remove from Favorites"
                }), ee[6] = em, ee[7] = e) : e = ee[7], m = e
            } else {
                let e;
                ee[8] !== em ? (e = em.formatMessage({
                    id: "library.favoriteFolder.add",
                    defaultMessage: "Add to Favorites"
                }), ee[8] = em, ee[9] = e) : e = ee[9], m = e
            }
            ee[10] !== eC || ee[11] !== el || ee[12] !== eu ? (g = () => {
                eC ? eh(!1) : (ew(!0), eh(!el), eu())
            }, ee[10] = eC, ee[11] = el, ee[12] = eu, ee[13] = g) : g = ee[13];
            let eS = g;
            ee[14] !== ec || ee[15] !== et || ee[16] !== el || ee[17] !== eg || ee[18] !== ea ? (b = (0, i.b)("select-none", "always" === ea || "entity-header" === ec || "map-card" === ec || el || eg ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === ec ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100"], et), ee[14] = ec, ee[15] = et, ee[16] = el, ee[17] = eg, ee[18] = ea, ee[19] = b) : b = ee[19];
            let eM = eg ? "open" : "closed";
            ee[20] !== eb ? (v = e => {
                eb && e.preventDefault()
            }, ee[20] = eb, ee[21] = v) : v = ee[21], ee[22] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                e || (eh(!1), ew(!0))
            }, ee[22] = x) : x = ee[22];
            let eA = !el || eg || ex;
            ee[23] === Symbol.for("react.memo_cache_sentinel") ? (I = e => {
                ek.current = e, ej(e?.closest(".codex-dialog") ?? null)
            }, ee[23] = I) : I = ee[23];
            let eN = eC || void 0,
                eF = eC && !eg || void 0,
                eE = !el || eg ? "menu" : void 0,
                eT = !el || eg ? eg : void 0;
            ee[24] === Symbol.for("react.memo_cache_sentinel") ? (C = () => ew(!1), F = () => ew(!1), E = () => ew(!1), ee[24] = C, ee[25] = F, ee[26] = E) : (C = ee[24], F = ee[25], E = ee[26]), ee[27] !== eS ? (T = e => {
                e.preventDefault(), e.stopPropagation(), eS()
            }, ee[27] = eS, ee[28] = T) : T = ee[28], ee[29] !== eC || ee[30] !== el || ee[31] !== eS ? (q = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? eS() : eC || el || eh(!0))
            }, ee[29] = eC, ee[30] = el, ee[31] = eS, ee[32] = q) : q = ee[32];
            let eq = el ? _.a : j.a;
            return ee[33] !== eq ? (L = (0, n.jsx)(p.a, {
                asset: eq
            }), ee[33] = eq, ee[34] = L) : L = ee[34], ee[35] !== ec || ee[36] !== el || ee[37] !== ef || ee[38] !== m || ee[39] !== eN || ee[40] !== eF || ee[41] !== eE || ee[42] !== eT || ee[43] !== T || ee[44] !== q || ee[45] !== L ? (R = (0, n.jsx)(A, {
                ref: I,
                "aria-label": m,
                "aria-busy": eN,
                "aria-disabled": eF,
                "aria-haspopup": eE,
                "aria-expanded": eT,
                "aria-pressed": el,
                appearance: ec,
                joined: ef,
                onPointerEnter: C,
                onPointerLeave: F,
                onBlur: E,
                onPointerDown: M,
                onClick: T,
                onKeyDown: q,
                children: L
            }), ee[35] = ec, ee[36] = el, ee[37] = ef, ee[38] = m, ee[39] = eN, ee[40] = eF, ee[41] = eE, ee[42] = eT, ee[43] = T, ee[44] = q, ee[45] = L, ee[46] = R) : R = ee[46], ee[47] !== m || ee[48] !== eA || ee[49] !== R ? (z = (0, n.jsx)(l.a, {
                content: m,
                disabled: eA,
                children: R
            }), ee[47] = m, ee[48] = eA, ee[49] = R, ee[50] = z) : z = ee[50], ee[51] === Symbol.for("react.memo_cache_sentinel") ? (D = (0, n.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, n.jsx)(d.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder"
                })
            }), ee[51] = D) : D = ee[51], ee[52] === Symbol.for("react.memo_cache_sentinel") ? (B = () => {
                eh(!1), ev(!0)
            }, O = (0, n.jsx)(p.a, {
                asset: k.a
            }), ee[52] = B, ee[53] = O) : (B = ee[52], O = ee[53]), ee[54] !== eC || ee[55] !== eP ? (U = (0, n.jsx)(c.a, {
                ref: eI,
                "aria-label": eP,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: eC,
                onClick: B,
                children: O
            }), ee[54] = eC, ee[55] = eP, ee[56] = U) : U = ee[56], ee[57] !== eC || ee[58] !== U ? (G = (0, n.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: eC,
                children: U
            }), ee[57] = eC, ee[58] = U, ee[59] = G) : G = ee[59], ee[60] !== eP || ee[61] !== G ? (Q = (0, n.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [D, (0, n.jsx)(l.a, {
                    content: eP,
                    children: G
                })]
            }), ee[60] = eP, ee[61] = G, ee[62] = Q) : Q = ee[62], ee[63] === Symbol.for("react.memo_cache_sentinel") ? (K = () => eI.current?.focus(), ee[63] = K) : K = ee[63], ee[64] !== eC || ee[65] !== ed || ee[66] !== es ? (W = (0, n.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, n.jsx)(N, {
                    isBusy: eC,
                    selectedFolderId: es,
                    onSelectFolder: ed,
                    focusCreateFolder: K
                })
            }), ee[64] = eC, ee[65] = ed, ee[66] = es, ee[67] = W) : W = ee[67], ee[68] !== eg || ee[69] !== e_ || ee[70] !== z || ee[71] !== Q || ee[72] !== W || ee[73] !== v ? (H = (0, n.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: e_,
                open: eg,
                onCloseAutoFocus: v,
                onOpenChange: x,
                triggerButton: z,
                children: [Q, W]
            }), ee[68] = eg, ee[69] = e_, ee[70] = z, ee[71] = Q, ee[72] = W, ee[73] = v, ee[74] = H) : H = ee[74], ee[75] !== el || ee[76] !== H || ee[77] !== b || ee[78] !== eM ? (J = (0, n.jsx)("div", {
                className: b,
                "data-saved": el,
                "data-state": eM,
                children: H
            }), ee[75] = el, ee[76] = H, ee[77] = b, ee[78] = eM, ee[79] = J) : J = ee[79], ee[80] !== ey ? (V = ey?.map(S), ee[80] = ey, ee[81] = V) : V = ee[81], ee[82] === Symbol.for("react.memo_cache_sentinel") ? (Z = e => {
                e.preventDefault(), ek.current?.focus()
            }, ee[82] = Z) : Z = ee[82], ee[83] !== ed || ee[84] !== ep.query ? ($ = async e => {
                await ep.query.cancel(w.a);
                let t = !1;
                ep.query.setData(w.a, r => (t = null == r, [...(r ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(P))), t && ep.query.invalidate(w.a), await ed(e, !0)
            }, ee[83] = ed, ee[84] = ep.query, ee[85] = $) : $ = ee[85], ee[86] !== eb || ee[87] !== ep.value.accountId || ee[88] !== ep.value.userId || ee[89] !== V || ee[90] !== $ ? (X = (0, n.jsx)(y, {
                open: eb,
                accountId: ep.value.accountId,
                userId: ep.value.userId,
                directoryId: null,
                siblingNames: V,
                onOpenChange: ev,
                onCloseAutoFocus: Z,
                onCreated: $
            }), ee[86] = eb, ee[87] = ep.value.accountId, ee[88] = ep.value.userId, ee[89] = V, ee[90] = $, ee[91] = X) : X = ee[91], ee[92] !== J || ee[93] !== X ? (Y = (0, n.jsxs)(n.Fragment, {
                children: [J, X]
            }), ee[92] = J, ee[93] = X, ee[94] = Y) : Y = ee[94], Y
        }

        function P(e, t) {
            return e.name.localeCompare(t.name)
        }

        function S(e) {
            return e.name
        }

        function M(e) {
            e.preventDefault()
        }

        function A(e) {
            let t, r, l, i, o = (0, a.c)(8);
            return o[0] !== e ? ({
                appearance: t,
                joined: r,
                ...l
            } = e, o[0] = e, o[1] = t, o[2] = r, o[3] = l) : (t = o[1], r = o[2], l = o[3]), o[4] !== t || o[5] !== r || o[6] !== l ? (i = "media-overlay" === t ? (0, n.jsx)(g.a, {
                ...l,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0,
                joined: r
            }) : (0, n.jsx)(c.a, {
                ...l,
                ...I[t]
            }), o[4] = t, o[5] = r, o[6] = l, o[7] = i) : i = o[7], i
        }

        function N(e) {
            let t, r, l = (0, a.c)(16),
                {
                    focusCreateFolder: i,
                    isBusy: s,
                    selectedFolderId: u,
                    onSelectFolder: c
                } = e,
                {
                    data: p,
                    isPending: g,
                    isError: h,
                    refetch: b
                } = (0, o.z)(w.a);
            if (g) {
                let e;
                return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…"
                    })
                }), l[0] = e) : e = l[0], e
            }
            if (h && null == p) {
                let e, t, r, a;
                return l[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders"
                    })
                }), l[1] = e) : e = l[1], l[2] !== i || l[3] !== b ? (t = e => {
                    e.preventDefault(), i(), b()
                }, l[2] = i, l[3] = b, l[4] = t) : t = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(d.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again"
                }), l[5] = r) : r = l[5], l[6] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(f.c.Item, {
                        onSelect: t,
                        children: r
                    })]
                }), l[6] = t, l[7] = a) : a = l[7], a
            }
            if (p?.length === 0) {
                let e;
                return l[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(d.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet"
                    })
                }), l[8] = e) : e = l[8], e
            }
            return l[9] !== p || l[10] !== s || l[11] !== c || l[12] !== u ? (t = p?.map(e => (0, n.jsx)(f.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": u === e.id,
                isActive: u === e.id,
                disabled: s,
                onSelect: () => void c({
                    id: e.id,
                    name: e.name,
                    parent_directory_id: e.parent_directory_id
                }, !1),
                children: (0, n.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [(0, n.jsx)(F, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, n.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, n.jsx)(m.Wb, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), l[9] = p, l[10] = s, l[11] = c, l[12] = u, l[13] = t) : t = l[13], l[14] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), l[14] = t, l[15] = r) : r = l[15], r
        }

        function F(e) {
            let t, r, l, o = (0, a.c)(8),
                {
                    imageUrl: u
                } = e,
                [d, c] = (0, s.useState)(null),
                f = null != u && u !== d,
                p = !f && "border border-default bg-surface";
            return o[0] !== p ? (t = (0, i.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), o[0] = p, o[1] = t) : t = o[1], o[2] !== u || o[3] !== f ? (r = f ? (0, n.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => c(u)
            }) : (0, n.jsx)(m.Fd, {}), o[2] = u, o[3] = f, o[4] = r) : r = o[4], o[5] !== t || o[6] !== r ? (l = (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: r
            }), o[5] = t, o[6] = r, o[7] = l) : l = o[7], l
        }
    }),
    IZUf: (function(e, t, r) {
        var n = r("Q840"),
            a = r("Kwur"),
            l = r("jU86");
        let i = (0, n.r)(l.c, e => {
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
            a: i,
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