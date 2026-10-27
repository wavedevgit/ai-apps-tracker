export const __rspack_esm_id = 851888;
export const __rspack_esm_ids = [851888];
export const __webpack_modules__ = {
    bfX9: (function(e, t, n) {
        function r(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
            return !!e?.ownership_state_enabled && (e.ownership?.available_action === t || e.ownership?.available_action === "view_request" && e.ownership.current_request?.kind === t) && !e.profiles.some(e => e.allowed_actions.includes("manage")) && ("claim" === t || !0 === e.is_verified)
        }
        n.d(t, {
            a: () => r
        })
    }),
    niC2: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            i = n("on57"),
            a = n("zd8w"),
            s = n("Wf1j"),
            o = n("ygO2"),
            u = n("vxGj"),
            d = n("HOLv"),
            c = n("r21w"),
            f = n("SUhA"),
            m = n("JwGC"),
            p = n("LQio"),
            g = n("CXEU"),
            h = n("iUK4");

        function b(e) {
            let t, n, c, f, m, b, w, j, _, I, C, k, M, P, S, T, A, F, N, O = (0, l.c)(56),
                {
                    ref: E,
                    conversationId: L,
                    firstPhotoFallbackSrc: q,
                    imageAssetResolver: z,
                    images: R,
                    onOpenImage: D,
                    onArrowClick: G,
                    presentation: B
                } = e,
                K = void 0 === B ? "sidebar" : B,
                W = (0, s.a)(),
                H = (0, a.useContext)(p.a),
                U = (0, a.useRef)(null),
                Q = (0, a.useRef)(null),
                Z = (0, a.useRef)(null);
            O[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, O[0] = t) : t = O[0];
            let V = (0, a.useRef)(t);
            O[1] === Symbol.for("react.memo_cache_sentinel") ? (n = () => ({
                getThumbnail: e => V.current.get(e) ?? null
            }), O[1] = n) : n = O[1], (0, a.useImperativeHandle)(E, n);
            let [$, J] = (0, a.useState)(0), [X, Y] = (0, a.useState)(null);
            O[2] !== X ? (c = e => e.id === X, O[2] = X, O[3] = c) : c = O[3];
            let ee = R.findIndex(c),
                et = R[ee],
                en = Math.min($, R.length - 1);
            O[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                let t = U.current;
                if (null == t) return;
                let n = x(t, e);
                Q.current = 1 >= Math.abs(t.scrollLeft - n) ? null : n, t.scrollTo({
                    left: n
                }), J(e)
            }, O[4] = f) : f = O[4];
            let er = f;
            O[5] !== R.length ? (m = e => {
                let t = 0,
                    n = 1 / 0;
                for (let r = 0; r < R.length; r += 1) {
                    let l = Math.abs(x(e, r) - e.scrollLeft);
                    l < n && (n = l, t = r)
                }
                J(t)
            }, O[5] = R.length, O[6] = m) : m = O[6];
            let el = m,
                ei = "sidebar" === K && "mb-5";
            O[7] !== ei ? (b = (0, i.b)("-mx-6", ei), O[7] = ei, O[8] = b) : b = O[8];
            let ea = "dialog" === K ? "h-56 sm:h-64" : "aspect-5/4";
            O[9] !== ea ? (w = (0, i.b)("group/photos relative overflow-hidden select-none", ea), O[9] = ea, O[10] = w) : w = O[10], O[11] !== W ? (j = W.formatMessage({
                id: "chatgpt.imageGroup.photos",
                defaultMessage: "Photos",
                description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
            }), O[11] = W, O[12] = j) : j = O[12], O[13] !== W ? (_ = W.formatMessage({
                id: "chatgpt.imageGroup.carouselRole",
                defaultMessage: "carousel",
                description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
            }), O[13] = W, O[14] = _) : _ = O[14], O[15] !== R.length || O[16] !== er || O[17] !== en ? (I = e => {
                if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                    e.preventDefault(), e.stopPropagation();
                    let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                    er(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (en + 1) % R.length : Math.max(0, en - 1))
                }
            }, O[15] = R.length, O[16] = er, O[17] = en, O[18] = I) : I = O[18], O[19] !== el ? (C = e => {
                let t = e.currentTarget,
                    n = Q.current;
                if (null != n) {
                    1 >= Math.abs(t.scrollLeft - n) && (Q.current = null);
                    return
                }
                el(t)
            }, k = e => {
                Q.current = null, el(e.currentTarget)
            }, O[19] = el, O[20] = C, O[21] = k) : (C = O[20], k = O[21]), O[22] === Symbol.for("react.memo_cache_sentinel") ? (M = () => {
                Q.current = null
            }, P = () => {
                Q.current = null
            }, O[22] = M, O[23] = P) : (M = O[22], P = O[23]);
            let es = R.map((e, t) => (0, r.jsx)(y, {
                conversationId: L,
                fallbackSrc: 0 === t ? q : void 0,
                image: e,
                imageAssetResolver: z,
                imageNumber: t + 1,
                imageRef: t => {
                    if (null != t) return V.current.set(e.id, t), () => {
                        V.current.get(e.id) === t && V.current.delete(e.id)
                    }
                },
                single: 1 === R.length,
                presentation: K,
                onOpen: n => {
                    null != D ? D(t) : (Z.current = n, Y(e.id))
                }
            }, e.id));
            return O[24] !== C || O[25] !== k || O[26] !== M || O[27] !== P || O[28] !== es ? (S = (0, r.jsx)("div", {
                ref: U,
                className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                onScroll: C,
                onScrollEnd: k,
                onPointerDown: M,
                onWheel: P,
                children: es
            }), O[24] = C, O[25] = k, O[26] = M, O[27] = P, O[28] = es, O[29] = S) : S = O[29], O[30] !== R.length || O[31] !== W || O[32] !== G || O[33] !== er || O[34] !== en ? (T = R.length > 1 ? (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsxs)("div", {
                    className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-hover/photos:opacity-100 group-hover/photos:*:pointer-events-auto group-has-[:focus-visible]/photos:opacity-100 group-has-[:focus-visible]/photos:*:pointer-events-auto",
                    children: [(0, r.jsx)(o.a, {
                        className: 0 === en ? "invisible" : void 0,
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
                            asset: g.a
                        })
                    }), (0, r.jsx)(o.a, {
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
                            e !== en && G?.("next", e), er(e)
                        },
                        children: (0, r.jsx)(d.a, {
                            className: "rtl:rotate-180",
                            asset: h.a
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
            }) : null, O[30] = R.length, O[31] = W, O[32] = G, O[33] = er, O[34] = en, O[35] = T) : T = O[35], O[36] !== H || O[37] !== w || O[38] !== j || O[39] !== _ || O[40] !== I || O[41] !== S || O[42] !== T ? (A = (0, r.jsxs)("div", {
                ref: H,
                className: w,
                "data-entity-photos": !0,
                "aria-label": j,
                "aria-roledescription": _,
                role: "region",
                onKeyDown: I,
                children: [S, T]
            }), O[36] = H, O[37] = w, O[38] = j, O[39] = _, O[40] = I, O[41] = S, O[42] = T, O[43] = A) : A = O[43], O[44] !== L || O[45] !== z || O[46] !== R || O[47] !== Z || O[48] !== et || O[49] !== ee || O[50] !== Y ? (F = null != et ? (0, r.jsx)(v, {
                conversationId: L,
                image: et,
                imageAssetResolver: z,
                imageNumber: ee + 1,
                onClose: () => Y(null),
                onCloseAutoFocus: e => {
                    e.preventDefault(), Z.current?.focus()
                },
                onPreviousImage: ee > 0 ? () => Y(R[ee - 1].id) : void 0,
                onNextImage: ee < R.length - 1 ? () => Y(R[ee + 1].id) : void 0
            }) : null, O[44] = L, O[45] = z, O[46] = R, O[47] = Z, O[48] = et, O[49] = ee, O[50] = Y, O[51] = F) : F = O[51], O[52] !== A || O[53] !== F || O[54] !== b ? (N = (0, r.jsxs)("div", {
                className: b,
                "data-testid": "chatgpt-image-group-carousel",
                children: [A, F]
            }), O[52] = A, O[53] = F, O[54] = b, O[55] = N) : N = O[55], N
        }

        function y(e) {
            let t, n, o, u, d, m, p, g, h = (0, l.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: y,
                    image: v,
                    imageAssetResolver: x,
                    imageNumber: w,
                    imageRef: j,
                    onOpen: _,
                    single: I,
                    presentation: C
                } = e,
                k = (0, s.a)(),
                [M, P] = (0, a.useState)(null),
                [S, T] = (0, a.useState)(null),
                A = null != v.previewSrc && v.previewSrc !== S ? v.previewSrc : v.src;
            h[0] !== b || h[1] !== x || h[2] !== A ? (t = {
                src: A,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, h[0] = b, h[1] = x, h[2] = A, h[3] = t) : t = h[3];
            let {
                previewSrc: F
            } = (0, f.a)(t), N = null != y && (null == F || M !== F), O = I && "w-full", E = !I && ("dialog" === C ? "w-2/3" : "max-w-19/20");
            return h[4] !== O || h[5] !== E ? (n = (0, i.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", O, E), h[4] = O, h[5] = E, h[6] = n) : n = h[6], h[7] !== y || h[8] !== v.height || h[9] !== v.width || h[10] !== C || h[11] !== I ? (o = I || "dialog" === C ? void 0 : {
                aspectRatio: null == y ? `${v.width??1}/${v.height??1}` : "5/4"
            }, h[7] = y, h[8] = v.height, h[9] = v.width, h[10] = C, h[11] = I, h[12] = o) : o = h[12], h[13] !== w || h[14] !== k ? (u = k.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: w
            }), h[13] = w, h[14] = k, h[15] = u) : u = h[15], h[16] !== _ ? (d = e => _(e.currentTarget), h[16] = _, h[17] = d) : d = h[17], h[18] !== y || h[19] !== v.previewSrc || h[20] !== j || h[21] !== M || h[22] !== F || h[23] !== N ? (m = null == F ? (0, r.jsx)(c.a, {
                className: "h-full w-full"
            }) : (0, r.jsx)("img", {
                ref: N ? void 0 : j,
                className: (0, i.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == y && M !== F && "opacity-0"),
                src: F,
                alt: "",
                draggable: !1,
                loading: null == y ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => P(F),
                onError: () => T(v.previewSrc ?? null)
            }), h[18] = y, h[19] = v.previewSrc, h[20] = j, h[21] = M, h[22] = F, h[23] = N, h[24] = m) : m = h[24], h[25] !== y || h[26] !== j || h[27] !== N ? (p = N ? (0, r.jsx)("img", {
                ref: j,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: y,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, h[25] = y, h[26] = j, h[27] = N, h[28] = p) : p = h[28], h[29] !== p || h[30] !== n || h[31] !== o || h[32] !== u || h[33] !== d || h[34] !== m ? (g = (0, r.jsxs)("button", {
                className: n,
                style: o,
                "aria-label": u,
                type: "button",
                onClick: d,
                children: [m, p]
            }), h[29] = p, h[30] = n, h[31] = o, h[32] = u, h[33] = d, h[34] = m, h[35] = g) : g = h[35], g
        }

        function v(e) {
            let t, n, i, a, o = (0, l.c)(16),
                {
                    conversationId: u,
                    image: d,
                    imageAssetResolver: c,
                    imageNumber: p,
                    onClose: g,
                    onCloseAutoFocus: h,
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
            return null == x ? null : (o[4] !== p || o[5] !== v ? (n = v.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: p
            }), o[4] = p, o[5] = v, o[6] = n) : n = o[6], o[7] !== g ? (i = e => {
                e || g()
            }, o[7] = g, o[8] = i) : i = o[8], o[9] !== h || o[10] !== b || o[11] !== y || o[12] !== x || o[13] !== n || o[14] !== i ? (a = (0, r.jsx)(m.a, {
                alt: n,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: h,
                onOpenChange: i,
                onNextImage: b,
                onPreviousImage: y
            }), o[9] = h, o[10] = b, o[11] = y, o[12] = x, o[13] = n, o[14] = i, o[15] = a) : a = o[15], a)
        }

        function x(e, t) {
            let n = e.children.item(t);
            if (!(n instanceof HTMLElement)) return 0;
            let r = "rtl" === getComputedStyle(e).direction,
                l = e.scrollWidth - e.clientWidth,
                i = n.offsetLeft - (e.clientWidth - n.offsetWidth) / 2;
            return 0 === t ? i = 0 : t === e.children.length - 1 && (i = r ? n.offsetLeft : n.offsetLeft + n.offsetWidth - e.clientWidth), r ? Math.max(-l, Math.min(0, i)) : Math.max(0, Math.min(l, i))
        }
        n.d(t, {
            a: () => b
        })
    }),
    OprO: (function(e, t, n) {
        n.d(t, {
            a: () => m,
            b: () => h,
            c: () => y
        });
        var r = n("ABep"),
            l = n("QosV"),
            i = n("iTtm"),
            a = n("zd8w"),
            s = n("oyxz"),
            o = n("ASxG"),
            u = n("ygO2"),
            d = n("OWtl"),
            c = n("TUMj");
        let f = (0, i.v)(d.a, e => null, void 0, {
            autoDispose: !0
        });

        function m(e) {
            let t, n, s, o = (0, l.c)(7),
                {
                    conversationId: u,
                    actions: c,
                    children: m
                } = e,
                p = (0, i.y)(d.a);
            return o[0] !== c || o[1] !== u || o[2] !== p ? (t = () => {
                let e = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f, u)
                });
                return p.set(f, u, c), () => {
                    p.get(f, u) === c && p.set(f, u, null), e()
                }
            }, n = [p, u, c], o[0] = c, o[1] = u, o[2] = p, o[3] = t, o[4] = n) : (t = o[3], n = o[4]), (0, a.useLayoutEffect)(t, n), o[5] !== m ? (s = (0, r.jsx)(r.Fragment, {
                children: m
            }), o[5] = m, o[6] = s) : s = o[6], s
        }
        let p = o.object({
            items: o.array(o.object({
                id: o.string().trim().min(1),
                label: o.string().trim().min(1),
                prefill: o.string().nullish()
            }))
        });

        function g() {
            let e, t = (0, l.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, r.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again.",
                    description: "Error after a business profile's chat button or suggested question could not open a new conversation. The user can click the action again."
                })
            }), t[0] = e) : e = t[0], e
        }

        function h(e) {
            let t, n, a, o, d, c = (0, l.c)(14),
                {
                    conversationId: m
                } = e,
                p = (0, i.x)(f, m);
            if (p?.startChat == null) return null;
            let h = p.startChat,
                b = null != p.pendingId,
                y = p.pendingId === h.id;
            return c[0] !== h || c[1] !== p ? (t = () => p.open(h), c[0] = h, c[1] = p, c[2] = t) : t = c[2], c[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(s.a, {
                id: "chatgpt.entity.businessProfile.startChat",
                defaultMessage: "Start chat",
                description: "Button in a business profile header that opens a new conversation with that business’s AI agent."
            }), c[3] = n) : n = c[3], c[4] !== b || c[5] !== y || c[6] !== t ? (a = (0, r.jsx)(u.a, {
                color: "primary",
                radius: "full",
                disabled: b,
                loading: y,
                onClick: t,
                children: n
            }), c[4] = b, c[5] = y, c[6] = t, c[7] = a) : a = c[7], c[8] !== h.id || c[9] !== p.failedId ? (o = p.failedId === h.id ? (0, r.jsx)(g, {}) : null, c[8] = h.id, c[9] = p.failedId, c[10] = o) : o = c[10], c[11] !== a || c[12] !== o ? (d = (0, r.jsxs)(r.Fragment, {
                children: [a, o]
            }), c[11] = a, c[12] = o, c[13] = d) : d = c[13], d
        }

        function b(e) {
            let t, n, a, s, o, d = (0, l.c)(12),
                {
                    conversationId: c,
                    data: m
                } = e,
                h = (0, i.x)(f, c);
            if (null == h) return null;
            if (d[0] !== h || d[1] !== m) {
                s = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, l = p.safeParse(m);
                    if (!l.success || 0 === l.data.items.length) {
                        s = null;
                        break e
                    }
                    t = "my-3 flex flex-wrap items-center gap-2",
                    d[6] !== h ? (e = e => (0, r.jsx)(u.a, {
                        color: "outline",
                        radius: "full",
                        disabled: null != h.pendingId,
                        loading: h.pendingId === e.id,
                        onClick: () => h.open(e),
                        children: e.label
                    }, e.id), d[6] = h, d[7] = e) : e = d[7],
                    n = l.data.items.map(e),
                    a = l.data.items.some(e => {
                        let {
                            id: t
                        } = e;
                        return t === h.failedId
                    }) ? (0, r.jsx)(g, {}) : null
                }
                d[0] = h, d[1] = m, d[2] = t, d[3] = n, d[4] = a, d[5] = s
            } else t = d[2], n = d[3], a = d[4], s = d[5];
            return s !== Symbol.for("react.early_return_sentinel") ? s : (d[8] !== t || d[9] !== n || d[10] !== a ? (o = (0, r.jsxs)("div", {
                className: t,
                children: [n, a]
            }), d[8] = t, d[9] = n, d[10] = a, d[11] = o) : o = d[11], o)
        }

        function y(e) {
            let t, n = (0, l.c)(3),
                {
                    data: i
                } = e,
                a = (0, c.d)();
            return n[0] !== i || n[1] !== a ? (t = a?.conversationType === "sidebar" ? (0, r.jsx)(b, {
                conversationId: a.conversationId,
                data: i
            }) : null, n[0] = i, n[1] = a, n[2] = t) : t = n[2], t
        }
    }),
    FQiC: (function(e, t, n) {
        var r = n("iTtm"),
            l = n("zd8w"),
            i = n("Cslg"),
            a = n("OWtl"),
            s = n("tZ3A"),
            o = n("orgn");
        let u = (0, r.d)(a.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(s.c, e)?.businessProfile, l = n(o.a, e);
                return {
                    conversationId: e,
                    accountId: n(i.f),
                    userId: n(i.j),
                    profileId: l?.profileId ?? null,
                    identity: JSON.stringify([l?.profileId, l?.source, l?.source === "entity-knowledge" ? null : r ?? null])
                }
            }),
            d = (0, r.j)(a.a, (e, t) => {
                let {
                    signal: n
                } = t;
                return {
                    isOpen$: n(!1),
                    triggerRef: (0, l.createRef)()
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
            l = n("iTtm"),
            i = n("M7HN"),
            a = n("Cslg"),
            s = n("OWtl"),
            o = n("OMIV"),
            u = n("tZ3A"),
            d = n("Kwur");
        let c = (0, l.q)(s.a, (e, t) => {
                let {
                    get: n
                } = t, l = n(u.c, e), s = l?.entityKnowledgeId, c = n(a.f), f = n(a.j), m = null != s && !l?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(l?.category ?? "") && null != c && null != f && n(o.c, "2789236610");
                return {
                    queryKey: ["entity-business-profile", c, f, e, "entity-knowledge", s],
                    enabled: m,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: m ? async e => {
                        let {
                            signal: t
                        } = e, n = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [i.Zb]: c
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
            f = (0, l.q)(s.a, (e, t) => {
                let {
                    get: n
                } = t, l = n(u.c, e), s = l?.businessProfile, f = n(a.f), m = n(a.j), p = null != s && !l?.entityKnowledgePending && ["business", "brand", "company", "organization"].includes(l?.category ?? "") && null != f && null != m && n(o.c, "2789236610");
                if (p && l?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: r,
                        isPending: l
                    } = n(c, e);
                    p = r && !l && null == t
                }
                return {
                    queryKey: ["entity-business-profile", f, m, e, "canonical-business-profile", s?.canonical_id, s?.profile_id],
                    enabled: p,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: p && null != s && null != f ? async e => {
                        let {
                            signal: t
                        } = e, n = await d.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [i.Zb]: f
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
            m = (0, l.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(u.c, e);
                if (r?.businessProfile == null && r?.entityKnowledgeId == null || r?.entityKnowledgePending || !["business", "brand", "company", "organization"].includes(r?.category ?? "") || !n(o.c, "2789236610")) return null;
                if (r?.entityKnowledgeId != null) {
                    let {
                        data: t,
                        isEnabled: r,
                        isPending: l
                    } = n(c, e);
                    if (!r || l) return null;
                    if (null != t) return t
                }
                let {
                    data: l,
                    isEnabled: i
                } = n(f, e);
                return i ? l ?? null : null
            }),
            p = (0, l.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(m, e)?.status ?? null
            });
        n.d(t, {}, {
            a: m,
            b: p
        })
    }),
    SZ0w: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            i = n("v1r0"),
            a = n("iTtm"),
            s = n("zd8w"),
            o = n("Wf1j"),
            u = n("oyxz"),
            d = n("bfX9"),
            c = n("bqtn"),
            f = n("HOLv"),
            m = n("E6P3"),
            p = n("zSQm"),
            g = n("WAdu"),
            h = n("OWtl"),
            b = n("tZ3A"),
            y = n("KDax"),
            v = n("OprO"),
            x = n("FQiC"),
            w = n("orgn"),
            j = n("T2J5"),
            _ = n("Csob"),
            I = n("zymm"),
            C = n("r7vP"),
            k = n("u9gC");

        function M(e) {
            let t, n = (0, l.c)(2),
                {
                    claimed: i
                } = e;
            return n[0] !== i ? (t = !0 === i ? (0, r.jsx)(P, {}) : null, n[0] = i, n[1] = t) : t = n[1], t
        }

        function P() {
            let e, t, n = (0, l.c)(4),
                i = (0, o.a)();
            return n[0] !== i ? (e = i.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), n[0] = i, n[1] = e) : e = n[1], n[2] !== e ? (t = (0, r.jsx)(j.a, {
                className: "ms-2",
                label: e,
                showTooltip: !0
            }), n[2] = e, n[3] = t) : t = n[3], t
        }

        function S(e) {
            let t, n, i, a, s = (0, l.c)(14),
                {
                    conversationId: o,
                    requiresConfirmation: c,
                    status: f,
                    websiteUrl: m,
                    children: g
                } = e;
            if (s[0] !== m) {
                let e = (0, p.a)(m?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? e : null, s[0] = m, s[1] = t
            } else t = s[1];
            let h = t,
                b = f?.chat_target != null && f.header?.start_chat != null;
            return s[2] !== o || s[3] !== b || s[4] !== c || s[5] !== h ? (n = b || null != h ? (0, r.jsxs)("div", {
                className: "my-3 flex flex-wrap items-center gap-2 empty:hidden",
                children: [b ? (0, r.jsx)(v.b, {
                    conversationId: o
                }) : null, null != h ? (0, r.jsx)(y.a, {
                    className: "flex h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent bg-primary-solid px-4 text-sm leading-4 font-medium whitespace-nowrap text-primary-solid select-none no-drag hover:bg-text/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: h,
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
            }) : null, s[2] = o, s[3] = b, s[4] = c, s[5] = h, s[6] = n) : n = s[6], s[7] !== o || s[8] !== f ? (i = (0, d.a)(f) ? (0, r.jsx)("div", {
                className: "border-t border-default",
                children: (0, r.jsx)(A, {
                    conversationId: o,
                    status: f
                })
            }) : null, s[7] = o, s[8] = f, s[9] = i) : i = s[9], s[10] !== g || s[11] !== n || s[12] !== i ? (a = (0, r.jsxs)(r.Fragment, {
                children: [n, g, i]
            }), s[10] = g, s[11] = n, s[12] = i, s[13] = a) : a = s[13], a
        }

        function T(e) {
            let t, n, i, s = (0, l.c)(6),
                {
                    conversationId: o
                } = e,
                f = (0, a.y)(h.a),
                m = (0, a.x)(w.b, o);
            return (0, d.a)(m, "dispute") ? (s[0] !== o || s[1] !== f ? (t = () => {
                if (!(0, d.a)(f.get(w.b, o), "dispute")) return;
                let e = f.get(x.a, f.get(x.b, o));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
            }, s[0] = o, s[1] = f, s[2] = t) : t = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(u.a, {
                id: "chatgpt.localBusiness.dispute.action",
                defaultMessage: "Dispute profile ownership",
                description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
            }), s[3] = n) : n = s[3], s[4] !== t ? (i = (0, r.jsx)(c.c.Item, {
                leftIconAsset: k.a,
                onSelect: t,
                children: n
            }), s[4] = t, s[5] = i) : i = s[5], i) : null
        }

        function A(e) {
            let t, n, i = (0, l.c)(6),
                {
                    conversationId: s,
                    status: o
                } = e,
                u = (0, a.y)(h.a);
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

        function F(e) {
            let t, n = (0, l.c)(4),
                {
                    conversationId: i
                } = e,
                s = (0, a.x)(w.a, i),
                o = (0, a.x)(b.c, i);
            if (s?.source !== "entity-knowledge" || o?.businessProfile != null) return null;
            let u = o?.shouldBlockExternalEgress;
            return n[0] !== i || n[1] !== s.status || n[2] !== u ? (t = (0, r.jsx)(S, {
                conversationId: i,
                requiresConfirmation: u,
                status: s.status
            }), n[0] = i, n[1] = s.status, n[2] = u, n[3] = t) : t = n[3], t
        }

        function N(e) {
            let t, n, d, c, h, y, v, x, j, k = (0, l.c)(29),
                {
                    conversationId: P,
                    profile: T,
                    name: A
                } = e,
                F = (0, o.a)(),
                N = (0, a.x)(w.b, P),
                L = (0, a.x)(b.c, P),
                q = (0, a.x)(w.a, P),
                z = q?.source === "entity-knowledge" && q.profileId !== T.profile_id ? null : T;
            k[0] !== z?.categories ? (t = z?.categories.find(O), k[0] = z?.categories, k[1] = t) : t = k[1];
            let R = t,
                D = E(z?.delivery_policy, i.b),
                G = z?.returns_policy;
            k[2] !== G ? (n = E(G, i.d), k[2] = G, k[3] = n) : n = k[3];
            let B = n,
                K = (0, s.useContext)(g.a);
            k[4] !== K || k[5] !== L?.shouldBlockExternalEgress || k[6] !== z ? (d = "restricted" !== K && !L?.shouldBlockExternalEgress && z?.logo_url ? (0, p.b)(z.logo_url) : void 0, k[4] = K, k[5] = L?.shouldBlockExternalEgress, k[6] = z, k[7] = d) : d = k[7];
            let W = d;
            k[8] !== W ? (c = W ? (0, r.jsx)(m.a, {
                className: "mb-4 size-16",
                alt: "",
                src: W,
                fallback: (0, r.jsx)(r.Fragment, {})
            }, W) : null, k[8] = W, k[9] = c) : c = k[9];
            let H = z?.display_name ?? A ?? L?.query,
                U = N?.is_verified ?? null;
            k[10] !== U ? (h = (0, r.jsx)(M, {
                claimed: U
            }), k[10] = U, k[11] = h) : h = k[11], k[12] !== H || k[13] !== h ? (y = (0, r.jsxs)("h2", {
                className: "mb-1 text-card-title leading-7 font-medium break-words",
                children: [H, h]
            }), k[12] = H, k[13] = h, k[14] = y) : y = k[14], k[15] !== R ? (v = R ? (0, r.jsx)("div", {
                className: "text-base leading-5 font-normal break-words text-default",
                children: R
            }) : null, k[15] = R, k[16] = v) : v = k[16];
            let Q = L?.shouldBlockExternalEgress,
                Z = z?.website_url,
                V = null == D && null == B ? null : (0, r.jsxs)("div", {
                    className: "divide-y divide-border border-t border-default",
                    children: [null != D ? (0, r.jsxs)(_.e, {
                        icon: (0, r.jsx)(f.a, {
                            asset: C.a
                        }),
                        children: ["none" === D.delivery ? (0, r.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.noDelivery",
                            defaultMessage: "Delivery unavailable",
                            description: "Merchant policy in the business sidebar when delivery is not offered"
                        }) : null, "paid" === D.delivery ? (0, r.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.paidDelivery",
                            defaultMessage: "Paid delivery",
                            description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                        }) : null, "free" === D.delivery && "all_orders" === D.scope ? (0, r.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.freeDelivery",
                            defaultMessage: "Free delivery on all orders",
                            description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                        }) : null, "free" === D.delivery && "minimum_order" === D.scope ? (0, r.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.deliveryMinimum",
                            defaultMessage: "Free delivery over {amount}",
                            description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                            values: {
                                amount: F.formatNumber(Number(D.minimum_order_amount), {
                                    style: "currency",
                                    currency: D.currency,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 20
                                })
                            }
                        }) : null]
                    }) : null, null != B ? (0, r.jsxs)(_.e, {
                        icon: (0, r.jsx)(f.a, {
                            asset: I.a
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
            return k[17] !== S || k[18] !== P || k[19] !== N || k[20] !== Q || k[21] !== Z || k[22] !== V ? (x = (0, r.jsx)(S, {
                conversationId: P,
                requiresConfirmation: Q,
                status: N,
                websiteUrl: Z,
                children: V
            }), k[17] = S, k[18] = P, k[19] = N, k[20] = Q, k[21] = Z, k[22] = V, k[23] = x) : x = k[23], k[24] !== v || k[25] !== x || k[26] !== c || k[27] !== y ? (j = (0, r.jsxs)(r.Fragment, {
                children: [c, y, v, x]
            }), k[24] = v, k[25] = x, k[26] = c, k[27] = y, k[28] = j) : j = k[28], j
        }

        function O(e) {
            return e.trim().length > 0
        }

        function E(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        n.d(t, {
            a: () => T,
            b: () => F,
            c: () => N
        })
    }),
    FRPb: (function(e, t, n) {
        var r = n("alRw"),
            l = n.n(r),
            i = n("iTtm"),
            a = n("rKAs"),
            s = n("OWtl"),
            o = n("dBPX"),
            u = n("tZ3A"),
            d = n("MrGp"),
            c = n("WOVT"),
            f = n("TJEh");
        let m = (0, i.v)(s.a, e => null),
            p = (0, i.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(m, e);
                if (null == r) return null;
                let l = n(d.L, e);
                return null != l && Object.values(l).some(e => null != e.message && (0, o.c)(e.message).some(e => {
                    let t = (0, f.c)(e);
                    if (null == t) return !1;
                    let n = ("string" == typeof e.name ? e.name : t.name).trim().toLowerCase();
                    return t.id === r.business.id || "" !== n && n === r.business.name.trim().toLowerCase()
                })) ? null : r.business
            }),
            g = (0, i.d)(s.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(u.e, e);
                if (null == r) return null;
                let l = n(d.L, e);
                return null != l && Object.values(l).some(e => null != e.message && (0, o.c)(e.message).some(e => null == e.layout && (0, c.c)(e)?.canonical_id === r.canonical_id)) ? null : r
            });

        function h(e, t, n, r) {
            let i = e.get(m, t),
                s = e.get(u.c, t);
            if (null == i && null == s) return;
            let p = e.get(u.c, n);
            if (null != p && p !== r && !l()({
                    ...p,
                    entityKnowledgeId: null,
                    entityKnowledgePending: !1
                }, {
                    ...r,
                    entityKnowledgeId: null,
                    entityKnowledgePending: !1
                }, (e, t, n) => void 0 === n ? void 0 : Object.is(e, t))) return;
            let g = Object.values(e.get(d.L, t) ?? {}).flatMap(e => null == e.message ? [] : (0, o.c)(e.message)),
                h = g.filter(e => "entity_metadata" === e.type && null == e.layout),
                b = s?.businessPreview ?? i?.business;
            if (null != b) {
                let t = h.map(f.c).findLast(e => null != e && (e.id === b.id || e.name.trim().toLowerCase() === b.name.trim().toLowerCase())) ?? i?.business;
                null != t && e.set(m, n, {
                    category: s?.category ?? r.category,
                    messageId: r.messageId,
                    sourceConversationId: r.sourceConversationId,
                    business: t
                })
            }
            if (null != s) {
                let t = h.map(c.c).findLast(e => null != e && e.canonical_id === s.businessProfile?.canonical_id) ?? s.businessProfile;
                e.set(u.c, n, {
                    ...s,
                    entityKnowledgeId: p?.entityKnowledgeId,
                    entityKnowledgePending: p?.entityKnowledgePending,
                    businessProfile: t
                }), e.set(u.e, n, t ?? null)
            }
            let y = g.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
            e.set(u.b, n, (null == y ? null : (0, a.u)(y, 0)[0]) ?? e.get(u.b, t))
        }

        function b(e) {
            return (t, n) => (0, u.g)(t, n, {
                onCancel: e => {
                    t.set(m, e, null)
                },
                onError: e => {
                    t.set(m, e, null)
                },
                onStart: r => {
                    t.set(m, r, {
                        business: e,
                        category: n.category,
                        messageId: n.messageId,
                        sourceConversationId: n.sourceConversationId
                    })
                }
            })
        }
        n.d(t, {
            a: () => b,
            e: () => h
        }, {
            b: m,
            c: g,
            d: p
        })
    }),
    wFiG: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            i = n("EA6X"),
            a = n("iTtm"),
            s = n("M7HN"),
            o = n("zd8w"),
            u = n("DcH0"),
            d = n("WAdu"),
            c = n("OWtl"),
            f = n("tZ3A"),
            m = n("niC2"),
            p = n("TUMj"),
            g = n("rxj0"),
            h = n("xof2"),
            b = n("SZ0w"),
            y = n("Csob"),
            v = n("FRPb"),
            x = n("LQio"),
            w = n("H0jo");

        function j(e) {
            let t, n, i = (0, l.c)(18),
                {
                    conversationId: c,
                    isTranscriptPending: f,
                    turnContext: p,
                    showClaimedBusinessTooltip: g
                } = e,
                h = void 0 !== f && f,
                b = void 0 !== g && g,
                y = (0, o.useContext)(d.a),
                v = (0, a.x)(w.e, c),
                j = (0, a.x)(w.b, c),
                I = (0, a.x)(w.d, c),
                C = (0, o.useContext)(x.a);
            if (j && !h) return null;
            let k = null;
            if (null != v && "restricted" !== y) {
                let e, t, n, l = `chatgpt:${c}`;
                i[0] !== l ? (e = (0, s.Ne)(l), i[0] = l, i[1] = e) : e = i[1], i[2] !== v ? (t = [v], i[2] = v, i[3] = t) : t = i[3], i[4] !== e || i[5] !== t ? (n = (0, r.jsx)(m.a, {
                    conversationId: e,
                    images: t
                }), i[4] = e, i[5] = t, i[6] = n) : n = i[6], k = n
            } else if (I || h && j) {
                let e, t;
                i[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(u.a, {
                    className: "aspect-5/4",
                    "aria-hidden": "true",
                    variant: "prominent"
                }), i[7] = e) : e = i[7], i[8] !== C ? (t = (0, r.jsx)("div", {
                    className: "-mx-6 mb-5",
                    children: (0, r.jsx)("div", {
                        ref: C,
                        "data-entity-photos": !0,
                        children: e
                    })
                }), i[8] = C, i[9] = t) : t = i[9], k = t
            }
            return i[10] !== c || i[11] !== h || i[12] !== b || i[13] !== p ? (t = (0, r.jsx)(_, {
                conversationId: c,
                isTranscriptPending: h,
                turnContext: p,
                showClaimedBusinessTooltip: b
            }), i[10] = c, i[11] = h, i[12] = b, i[13] = p, i[14] = t) : t = i[14], i[15] !== k || i[16] !== t ? (n = (0, r.jsxs)(r.Fragment, {
                children: [k, t]
            }), i[15] = k, i[16] = t, i[17] = n) : n = i[17], n
        }

        function _(e) {
            let t, n, s, u, m = (0, l.c)(19),
                {
                    conversationId: x,
                    isTranscriptPending: w,
                    turnContext: j,
                    showClaimedBusinessTooltip: _
                } = e,
                I = void 0 !== w && w,
                C = void 0 !== _ && _,
                k = (0, a.y)(c.a),
                M = (0, o.useContext)(d.a),
                P = (0, a.x)(g.d, x),
                S = (0, a.x)(v.b, x),
                T = (0, a.x)(v.d, x),
                A = I ? S?.business : T,
                F = (0, a.x)(f.c, x),
                N = (0, a.x)(f.e, x),
                O = (0, a.x)(v.c, x),
                E = I ? N : O;
            if (null == A && null == E) return null;
            let L = P ? "restricted" : M,
                q = j ?? null;
            return m[0] !== x || m[1] !== F?.query || m[2] !== E ? (t = null != E && (0, r.jsx)(b.c, {
                conversationId: x,
                profile: E,
                name: F?.query
            }), m[0] = x, m[1] = F?.query, m[2] = E, m[3] = t) : t = m[3], m[4] !== A || m[5] !== S?.category || m[6] !== S?.messageId || m[7] !== S?.sourceConversationId || m[8] !== E || m[9] !== k || m[10] !== C ? (n = null == E && null != A && (0, r.jsx)(y.ChatGptLocalBusinessMetadata, {
                business: A,
                isOptimistic: !0,
                showClaimedBusinessTooltip: C,
                onAction: e => {
                    (0, h.b)(k, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: A.id.trim() || void 0,
                        entityCategory: S?.category ?? void 0,
                        messageId: S?.messageId,
                        assistantMessageId: S?.messageId,
                        conversationId: S?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), m[4] = A, m[5] = S?.category, m[6] = S?.messageId, m[7] = S?.sourceConversationId, m[8] = E, m[9] = k, m[10] = C, m[11] = n) : n = m[11], m[12] !== q || m[13] !== t || m[14] !== n ? (s = (0, r.jsxs)(p.b, {
                value: q,
                children: [t, n]
            }), m[12] = q, m[13] = t, m[14] = n, m[15] = s) : s = m[15], m[16] !== L || m[17] !== s ? (u = (0, r.jsx)(d.a, {
                value: L,
                children: s
            }), m[16] = L, m[17] = s, m[18] = u) : u = m[18], u
        }
        n.d(t, {
            a: () => _,
            b: () => j
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
            l = n("rKAs"),
            i = n("SqqO"),
            a = n("OWtl"),
            s = n("fzVa"),
            o = n("dBPX"),
            u = n("tZ3A"),
            d = n("MrGp"),
            c = n("rxj0"),
            f = n("TJEh"),
            m = n("FRPb");
        let p = (0, r.d)(a.a, (e, t) => {
                let {
                    get: n
                } = t;
                return null != e && n(u.a, e) && null == n(m.b, e) && n(u.c, e)?.businessProfile == null ? n(d.cb, e) : null
            }),
            g = (0, r.d)(a.a, (e, t) => {
                let {
                    get: n
                } = t, r = n(m.b, e), a = n(d.L, e);
                return null != a && Object.values(a).some(t => null != t.message && (0, o.c)(t.message).some((t, a) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (n(u.a, e) || (0, f.i)(r?.category ?? null))) && (!n(c.d, e) || (0, l.u)(t, a).some(e => !(0, i.d)(e.src)))))
            }),
            h = (0, r.d)(a.a, (e, t) => {
                let {
                    get: n
                } = t;
                if (null == e) return null;
                let r = n(m.b, e);
                if (n(c.d, e)) return null;
                let l = n(u.b, e),
                    i = null == r ? null : (0, f.f)(r.business),
                    a = l ?? (null == i ? null : {
                        id: i,
                        src: i,
                        status: "completed",
                        type: "generated-image"
                    });
                if (null == a) return null;
                let o = n(s.b).data?.age_status;
                return "over_18" === o || "unsure" === o ? a : null
            }),
            b = (0, r.d)(a.a, (e, t) => {
                let {
                    get: n
                } = t;
                return (n(u.a, e) || null != n(m.b, e)) && (0, d.zb)(n(d._, e)) && !n(g, e) && null == n(h, e)
            }),
            y = (0, r.d)(a.a, (e, t) => {
                let {
                    get: n
                } = t;
                return n(g, e) || null != n(h, e) || n(b, e)
            });
        n.d(t, {}, {
            a: y,
            b: g,
            c: p,
            d: b,
            e: h
        })
    }),
    vxGj: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            i = n("on57");

        function a(e) {
            let t, n = (0, l.c)(9),
                {
                    count: a,
                    activeIndex: s,
                    getPageLabel: o,
                    onSelect: u
                } = e;
            if (n[0] !== s || n[1] !== a || n[2] !== o || n[3] !== u) {
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
                        length: a
                    }, e)
                }), n[0] = s, n[1] = a, n[2] = o, n[3] = u, n[4] = t
            } else t = n[4];
            return t
        }
        n.d(t, {
            a: () => a
        })
    }),
    nUGc: (function(e, t, n) {
        let r = (0, n("zd8w").createContext)(null);
        n.d(t, {}, {
            a: r
        })
    }),
    Yq7Q: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            i = n("on57"),
            a = n("ygO2");

        function s(e) {
            let t, n, s, u, d, c, f, m, p, g, h, b, y, v, x = (0, l.c)(30);
            x[0] !== e ? ({
                appearance: u,
                controlSize: d,
                children: t,
                className: n,
                iconOnly: c,
                ...s
            } = e, x[0] = e, x[1] = t, x[2] = n, x[3] = s, x[4] = u, x[5] = d, x[6] = c) : (t = x[1], n = x[2], s = x[3], u = x[4], d = x[5], c = x[6]);
            let w = void 0 === d ? "default" : d,
                j = void 0 !== c && c,
                _ = "blurred" === (void 0 === u ? "compact" : u);
            if (x[7] !== n || x[8] !== w || x[9] !== j || x[10] !== _ || x[11] !== s) {
                let e = (0, i.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                _ && j ? e = (0, i.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === w ? "size-9" : "size-10") : _ && (e = (0, i.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === w ? "h-9" : "h-10")), f = a.a, m = s, p = "secondary", g = _ ? "full" : "default", h = _ ? "default" : "icon", b = (0, i.b)(e, n), x[7] = n, x[8] = w, x[9] = j, x[10] = _, x[11] = s, x[12] = f, x[13] = m, x[14] = p, x[15] = g, x[16] = h, x[17] = b
            } else f = x[12], m = x[13], p = x[14], g = x[15], h = x[16], b = x[17];
            return x[18] !== t || x[19] !== j || x[20] !== _ ? (y = _ && j ? (0, r.jsx)("span", {
                className: "flex size-9 items-center justify-center rounded-full bg-media-background/45 backdrop-blur-md group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60",
                children: t
            }) : t, x[18] = t, x[19] = j, x[20] = _, x[21] = y) : y = x[21], x[22] !== f || x[23] !== m || x[24] !== p || x[25] !== g || x[26] !== h || x[27] !== b || x[28] !== y ? (v = (0, r.jsx)(f, {
                ...m,
                color: p,
                radius: g,
                size: h,
                className: b,
                onPointerUp: o,
                children: y
            }), x[22] = f, x[23] = m, x[24] = p, x[25] = g, x[26] = h, x[27] = b, x[28] = y, x[29] = v) : v = x[29], v
        }

        function o(e) {
            e.currentTarget.blur()
        }
        n.d(t, {
            a: () => s
        })
    }),
    SUhA: (function(e, t, n) {
        var r = n("QosV"),
            l = n("irkb"),
            i = n("iTtm"),
            a = n("zd8w"),
            s = n("tl5a"),
            o = n("CBsD"),
            u = n("kfGJ"),
            d = n("gTKF"),
            c = n("zHp1");

        function f(e) {
            let t, n, f, m, p, g, h, b, y = (0, r.c)(37),
                {
                    src: v,
                    conversationId: x,
                    hostId: w,
                    imageAssetResolver: j,
                    shouldLoadFileDataUrl: _
                } = e,
                I = (0, l.c)(),
                C = (0, i.x)(s.E, x),
                k = w ?? C ?? u.a,
                M = (0, u.c)(k);
            y[0] !== x ? (t = null == x ? null : {
                kind: "app-server",
                conversationId: x
            }, y[0] = x, y[1] = t) : t = y[1];
            let P = (0, i.x)(d.threadExecutorTargetByThread$, t),
                S = P?.hostId === k ? P.environmentId : void 0,
                [T, A] = (0, a.useState)(null);
            y[2] !== v ? (n = v.trim(), y[2] = v, y[3] = n) : n = y[3];
            let F = n.length > 0,
                N = F && (0, c.h)(v) ? v : "",
                {
                    dataUrl: O,
                    src: E,
                    isError: L,
                    loadSource: q,
                    loadTiming: z,
                    imageCacheHit: R,
                    isShowingCachedImage: D,
                    imageCheck: G,
                    refetch: B,
                    deleted: K
                } = (0, c.k)(N, j);
            y[4] !== F || y[5] !== M.id || y[6] !== M.kind || y[7] !== k || y[8] !== v ? (f = F ? (0, o.b)(v) : null, "local" === M.kind && M.id, m = null, y[4] = F, y[5] = M.id, y[6] = M.kind, y[7] = k, y[8] = v, y[9] = f, y[10] = m) : (f = y[9], m = y[10]);
            let W = m,
                H = T?.src === v && T.environmentId === S ? T.dataUrl : null,
                U = F ? E ?? W ?? (null != f || N ? H : v) : null;
            y[11] !== f || y[12] !== x || y[13] !== W || y[14] !== S || y[15] !== k || y[16] !== I || y[17] !== _ || y[18] !== v ? (p = () => {
                if (null == f || null != W && !_) return;
                let e = !1;
                return A({
                    src: v,
                    dataUrl: null,
                    environmentId: S
                }), (0, o.e)(f, k, I, void 0, x, S).then(t => {
                    e || A({
                        src: v,
                        dataUrl: t,
                        environmentId: S
                    })
                }), () => {
                    e = !0
                }
            }, g = [f, x, W, S, k, I, _, v], y[11] = f, y[12] = x, y[13] = W, y[14] = S, y[15] = k, y[16] = I, y[17] = _, y[18] = v, y[19] = p, y[20] = g) : (p = y[19], g = y[20]), (0, a.useEffect)(p, g), y[21] !== O || y[22] !== H || y[23] !== v ? (h = O ?? H ?? (v.startsWith("data:image/") ? v : null), y[21] = O, y[22] = H, y[23] = v, y[24] = h) : h = y[24];
            let Q = O ?? H ?? U,
                Z = !!N && L;
            return y[25] !== K || y[26] !== R || y[27] !== G || y[28] !== D || y[29] !== q || y[30] !== z || y[31] !== U || y[32] !== B || y[33] !== h || y[34] !== Q || y[35] !== Z ? (b = {
                dataUrl: h,
                previewSrc: U,
                downloadSrc: Q,
                isError: Z,
                loadSource: q,
                loadTiming: z,
                imageCacheHit: R,
                isShowingCachedImage: D,
                imageCheck: G,
                refetch: B,
                deleted: K
            }, y[25] = K, y[26] = R, y[27] = G, y[28] = D, y[29] = q, y[30] = z, y[31] = U, y[32] = B, y[33] = h, y[34] = Q, y[35] = Z, y[36] = b) : b = y[36], b
        }
        n.d(t, {
            a: () => f
        })
    }),
    jo5I: (function(e, t, n) {
        n.d(t, {
            a: () => k
        });
        var r = n("ABep"),
            l = n("QosV"),
            i = n("lUoP"),
            a = n("on57"),
            s = n("iTtm"),
            o = n("zd8w"),
            u = n("Wf1j"),
            d = n("oyxz"),
            c = n("ygO2"),
            f = n("bqtn"),
            m = n("HOLv"),
            p = n("bf6R"),
            g = n("Yq7Q"),
            h = n("Fmx8"),
            b = n("cZk2");
        let y = (0, n("Bbed").a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(596051)]).then(n.bind(n, "drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, r.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function v(e) {
            let t, n = (0, l.c)(3),
                [i, a] = (0, o.useState)(!!e.open);
            return e.open && !i && a(!0), n[0] !== i || n[1] !== e ? (t = i ? (0, r.jsx)(o.Suspense, {
                fallback: (0, r.jsx)(x, {
                    ...e
                }),
                children: (0, r.jsx)(y, {
                    ...e
                })
            }) : null, n[0] = i, n[1] = e, n[2] = t) : t = n[2], t
        }

        function x(e) {
            let t, n, i, a = (0, l.c)(10),
                {
                    open: s,
                    onOpenChange: o,
                    onCloseAutoFocus: u,
                    failed: c
                } = e,
                f = void 0 !== c && c,
                m = !!s;
            return a[0] !== o ? (t = e => o?.(e), a[0] = o, a[1] = t) : t = a[1], a[2] !== f ? (n = f ? (0, r.jsx)(d.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, r.jsx)(d.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), a[2] = f, a[3] = n) : n = a[3], a[4] !== f || a[5] !== u || a[6] !== m || a[7] !== t || a[8] !== n ? (i = (0, r.jsx)(b.a, {
                open: m,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: n
            }), a[4] = f, a[5] = u, a[6] = m, a[7] = t, a[8] = n, a[9] = i) : i = a[9], i
        }
        var w = n("IZUf"),
            j = n("Rl4D"),
            _ = n("cjMA"),
            I = n("QnbX");
        let C = {
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

        function k(e) {
            let t, n, p, g, b, y, x, C, k, A, F, N, O, E, L, q, z, R, D, G, B, K, W, H, U, Q, Z, V, $, J = (0, l.c)(89),
                {
                    className: X,
                    appearance: Y,
                    visibility: ee,
                    isSaved: et,
                    isBusy: en,
                    isCheckingStatus: er,
                    selectedFolderId: el,
                    onToggleFavorite: ei,
                    onSelectFolder: ea
                } = e,
                es = void 0 === Y ? "media-overlay" : Y,
                eo = (0, s.y)(h.c),
                eu = (0, u.a)(),
                [ed, ec] = (0, o.useState)(!1),
                [ef, em] = (0, o.useState)(!1),
                [ep, eg] = (0, o.useState)(!1),
                [eh, eb] = (0, o.useState)(null),
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
            J[8] !== ex || J[9] !== et || J[10] !== ei ? (p = () => {
                ex ? ec(!1) : (eg(!0), ec(!et), ei())
            }, J[8] = ex, J[9] = et, J[10] = ei, J[11] = p) : p = J[11];
            let ej = p;
            J[12] !== es || J[13] !== X || J[14] !== et || J[15] !== ed || J[16] !== ee ? (g = (0, a.b)("select-none", "always" === ee || "entity-header" === es || "map-card" === es || et || ed ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === es ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], X), J[12] = es, J[13] = X, J[14] = et, J[15] = ed, J[16] = ee, J[17] = g) : g = J[17];
            let e_ = ed ? "open" : "closed";
            J[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, J[18] = ef, J[19] = b) : b = J[19], J[20] === Symbol.for("react.memo_cache_sentinel") ? (y = e => {
                e || (ec(!1), eg(!0))
            }, J[20] = y) : y = J[20];
            let eI = !et || ed || ep;
            J[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ey.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, J[21] = x) : x = J[21];
            let eC = ex || void 0,
                ek = ex && !ed || void 0,
                eM = !et || ed ? "menu" : void 0,
                eP = !et || ed ? ed : void 0;
            J[22] === Symbol.for("react.memo_cache_sentinel") ? (C = () => eg(!1), k = () => eg(!1), A = () => eg(!1), J[22] = C, J[23] = k, J[24] = A) : (C = J[22], k = J[23], A = J[24]), J[25] !== ej ? (F = e => {
                e.preventDefault(), e.stopPropagation(), ej()
            }, J[25] = ej, J[26] = F) : F = J[26], J[27] !== ex || J[28] !== et || J[29] !== ej ? (N = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? ej() : ex || et || ec(!0))
            }, J[27] = ex, J[28] = et, J[29] = ej, J[30] = N) : N = J[30];
            let eS = et ? j.a : _.a;
            return J[31] !== eS ? (O = (0, r.jsx)(m.a, {
                asset: eS
            }), J[31] = eS, J[32] = O) : O = J[32], J[33] !== es || J[34] !== et || J[35] !== n || J[36] !== eC || J[37] !== ek || J[38] !== eM || J[39] !== eP || J[40] !== F || J[41] !== N || J[42] !== O ? (E = (0, r.jsx)(S, {
                ref: x,
                "aria-label": n,
                "aria-busy": eC,
                "aria-disabled": ek,
                "aria-haspopup": eM,
                "aria-expanded": eP,
                "aria-pressed": et,
                appearance: es,
                onPointerEnter: C,
                onPointerLeave: k,
                onBlur: A,
                onPointerDown: P,
                onClick: F,
                onKeyDown: N,
                children: O
            }), J[33] = es, J[34] = et, J[35] = n, J[36] = eC, J[37] = ek, J[38] = eM, J[39] = eP, J[40] = F, J[41] = N, J[42] = O, J[43] = E) : E = J[43], J[44] !== n || J[45] !== E || J[46] !== eI ? (L = (0, r.jsx)(i.a, {
                content: n,
                disabled: eI,
                children: E
            }), J[44] = n, J[45] = E, J[46] = eI, J[47] = L) : L = J[47], J[48] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, r.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, r.jsx)(d.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), J[48] = q) : q = J[48], J[49] === Symbol.for("react.memo_cache_sentinel") ? (z = () => {
                ec(!1), em(!0)
            }, R = (0, r.jsx)(m.a, {
                asset: I.a
            }), J[49] = z, J[50] = R) : (z = J[49], R = J[50]), J[51] !== ex || J[52] !== ew ? (D = (0, r.jsx)(c.a, {
                ref: ev,
                "aria-label": ew,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: z,
                children: R
            }), J[51] = ex, J[52] = ew, J[53] = D) : D = J[53], J[54] !== ex || J[55] !== D ? (G = (0, r.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: D
            }), J[54] = ex, J[55] = D, J[56] = G) : G = J[56], J[57] !== ew || J[58] !== G ? (B = (0, r.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [q, (0, r.jsx)(i.a, {
                    content: ew,
                    children: G
                })]
            }), J[57] = ew, J[58] = G, J[59] = B) : B = J[59], J[60] === Symbol.for("react.memo_cache_sentinel") ? (K = () => ev.current?.focus(), J[60] = K) : K = J[60], J[61] !== ex || J[62] !== ea || J[63] !== el ? (W = (0, r.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, r.jsx)(T, {
                    isBusy: ex,
                    selectedFolderId: el,
                    onSelectFolder: ea,
                    focusCreateFolder: K
                })
            }), J[61] = ex, J[62] = ea, J[63] = el, J[64] = W) : W = J[64], J[65] !== ed || J[66] !== eh || J[67] !== L || J[68] !== B || J[69] !== W || J[70] !== b ? (H = (0, r.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eh,
                open: ed,
                onCloseAutoFocus: b,
                onOpenChange: y,
                triggerButton: L,
                children: [B, W]
            }), J[65] = ed, J[66] = eh, J[67] = L, J[68] = B, J[69] = W, J[70] = b, J[71] = H) : H = J[71], J[72] !== et || J[73] !== H || J[74] !== g || J[75] !== e_ ? (U = (0, r.jsx)("div", {
                className: g,
                "data-saved": et,
                "data-state": e_,
                children: H
            }), J[72] = et, J[73] = H, J[74] = g, J[75] = e_, J[76] = U) : U = J[76], J[77] === Symbol.for("react.memo_cache_sentinel") ? (Q = e => {
                e.preventDefault(), ey.current?.focus()
            }, J[77] = Q) : Q = J[77], J[78] !== ea || J[79] !== eo.query ? (Z = async e => {
                await eo.query.cancel(w.a);
                let t = !1;
                eo.query.setData(w.a, n => (t = null == n, [...(n ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(M))), t && eo.query.invalidate(w.a), await ea(e, !0)
            }, J[78] = ea, J[79] = eo.query, J[80] = Z) : Z = J[80], J[81] !== ef || J[82] !== eo.value.accountId || J[83] !== eo.value.userId || J[84] !== Z ? (V = (0, r.jsx)(v, {
                open: ef,
                accountId: eo.value.accountId,
                userId: eo.value.userId,
                directoryId: null,
                onOpenChange: em,
                onCloseAutoFocus: Q,
                onCreated: Z
            }), J[81] = ef, J[82] = eo.value.accountId, J[83] = eo.value.userId, J[84] = Z, J[85] = V) : V = J[85], J[86] !== U || J[87] !== V ? ($ = (0, r.jsxs)(r.Fragment, {
                children: [U, V]
            }), J[86] = U, J[87] = V, J[88] = $) : $ = J[88], $
        }

        function M(e, t) {
            return e.name.localeCompare(t.name)
        }

        function P(e) {
            e.preventDefault()
        }

        function S(e) {
            let t, n, i, a = (0, l.c)(6);
            return a[0] !== e ? ({
                appearance: t,
                ...n
            } = e, a[0] = e, a[1] = t, a[2] = n) : (t = a[1], n = a[2]), a[3] !== t || a[4] !== n ? (i = "media-overlay" === t ? (0, r.jsx)(g.a, {
                ...n,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, r.jsx)(c.a, {
                ...n,
                ...C[t]
            }), a[3] = t, a[4] = n, a[5] = i) : i = a[5], i
        }

        function T(e) {
            let t, n, i = (0, l.c)(16),
                {
                    focusCreateFolder: a,
                    isBusy: o,
                    selectedFolderId: u,
                    onSelectFolder: c
                } = e,
                {
                    data: m,
                    isPending: g,
                    isError: h,
                    refetch: b
                } = (0, s.z)(w.a);
            if (g) {
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
            if (h && null == m) {
                let e, t, n, l;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, r.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, r.jsx)(d.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), i[1] = e) : e = i[1], i[2] !== a || i[3] !== b ? (t = e => {
                    e.preventDefault(), a(), b()
                }, i[2] = a, i[3] = b, i[4] = t) : t = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(d.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), i[5] = n) : n = i[5], i[6] !== t ? (l = (0, r.jsxs)(r.Fragment, {
                    children: [e, (0, r.jsx)(f.c.Item, {
                        onSelect: t,
                        children: n
                    })]
                }), i[6] = t, i[7] = l) : l = i[7], l
            }
            if (m?.length === 0) {
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
            return i[9] !== m || i[10] !== o || i[11] !== c || i[12] !== u ? (t = m?.map(e => (0, r.jsx)(f.c.Item, {
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
                    children: [(0, r.jsx)(A, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, r.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, r.jsx)(p.Tb, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), i[9] = m, i[10] = o, i[11] = c, i[12] = u, i[13] = t) : t = i[13], i[14] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), i[14] = t, i[15] = n) : n = i[15], n
        }

        function A(e) {
            let t, n, i, s = (0, l.c)(8),
                {
                    imageUrl: u
                } = e,
                [d, c] = (0, o.useState)(null),
                f = null != u && u !== d,
                m = !f && "border border-default bg-surface";
            return s[0] !== m ? (t = (0, a.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", m), s[0] = m, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (n = f ? (0, r.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => c(u)
            }) : (0, r.jsx)(p.ud, {}), s[2] = u, s[3] = f, s[4] = n) : n = s[4], s[5] !== t || s[6] !== n ? (i = (0, r.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: n
            }), s[5] = t, s[6] = n, s[7] = i) : i = s[7], i
        }
    }),
    IZUf: (function(e, t, n) {
        var r = n("iTtm"),
            l = n("Kwur"),
            i = n("Fmx8");
        let a = (0, r.r)(i.c, e => {
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
                        signal: n
                    })).items.filter(e => "directory" === e.kind && !0 !== e.is_root && null == e.direct_share_id && null == e.shared_by && "shared" !== e.access_kind && "mounted" !== e.access_kind && !e.id.startsWith("library:") && !e.id.startsWith("external-") && e.name.trim().length > 0).sort((e, t) => e.name.localeCompare(t.name))
                }
            }
        });
        async function s(e, t, n) {
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
                    directory_id: n
                }
            }), await e.queryClient.invalidateQueries({
                queryKey: ["library-api", e.value.accountId, e.value.userId]
            })
        }
        n.d(t, {
            b: () => s
        }, {
            a: a
        })
    }),
    v1r0: (function(e, t, n) {
        var r = n("ASxG");
        let l = r.strictObject({
                version: r.literal(1),
                delivery: r.enum(["none", "paid"])
            }),
            i = r.strictObject({
                version: r.literal(1),
                delivery: r.literal("free"),
                scope: r.literal("all_orders")
            }),
            a = r.strictObject({
                version: r.literal(1),
                delivery: r.literal("free"),
                scope: r.literal("minimum_order"),
                minimum_order_amount: r.string(),
                currency: r.string().nullable()
            }),
            s = r.strictObject({
                version: r.literal(1),
                returns: r.literal("none")
            }),
            o = r.strictObject({
                version: r.literal(1),
                returns: r.enum(["fees", "free"]),
                window_days: r.number().nullable()
            }),
            u = r.strictObject({
                version: r.literal(1),
                returns: r.enum(["fees", "free"]),
                window: r.literal("unlimited")
            }),
            d = r.union([l, i, a.extend({
                minimum_order_amount: r.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: r.string().regex(/^[A-Z]{3}$/)
            })]),
            c = r.union([s, o.extend({
                window_days: r.number().int().positive()
            }), u]),
            f = r.union([r.strictObject({
                version: r.literal(1),
                delivery: r.null()
            }), l, i, r.strictObject({
                version: r.literal(1),
                delivery: r.literal("free"),
                scope: r.null()
            }), a]),
            m = r.union([r.strictObject({
                version: r.literal(1),
                returns: r.null()
            }), s, o, u]);
        n.d(t, {}, {
            a: f,
            b: d,
            c: m,
            d: c
        })
    })
};