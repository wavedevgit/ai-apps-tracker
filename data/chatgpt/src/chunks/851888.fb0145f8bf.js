export const __rspack_esm_id = 851888;
export const __rspack_esm_ids = [851888];
export const __webpack_modules__ = {
    bfX9: (function(e, t, r) {
        function n(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
            return !!e?.ownership_state_enabled && (e.ownership?.available_action === t || e.ownership?.available_action === "view_request" && e.ownership.current_request?.kind === t) && !e.profiles.some(e => e.allowed_actions.includes("manage")) && ("claim" === t || !0 === e.is_verified)
        }
        r.d(t, {
            a: () => n
        })
    }),
    niC2: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("on57"),
            i = r("zd8w"),
            s = r("Wf1j"),
            o = r("ygO2"),
            u = r("vxGj"),
            c = r("HOLv"),
            d = r("r21w"),
            f = r("SUhA"),
            m = r("JwGC"),
            p = r("LQio"),
            h = r("RIFd"),
            g = r("sicn");

        function b(e) {
            let t, r, d, f, m, b, j, w, _, C, I, M, k, S, T, A, P, N, F, O = (0, a.c)(56),
                {
                    ref: L,
                    conversationId: E,
                    firstPhotoFallbackSrc: z,
                    imageAssetResolver: q,
                    images: D,
                    onOpenImage: G,
                    onArrowClick: R,
                    presentation: B
                } = e,
                W = void 0 === B ? "sidebar" : B,
                U = (0, s.a)(),
                H = (0, i.useContext)(p.a),
                Q = (0, i.useRef)(null),
                K = (0, i.useRef)(null),
                Z = (0, i.useRef)(null);
            O[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, O[0] = t) : t = O[0];
            let V = (0, i.useRef)(t);
            O[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => ({
                getThumbnail: e => V.current.get(e) ?? null
            }), O[1] = r) : r = O[1], (0, i.useImperativeHandle)(L, r);
            let [$, J] = (0, i.useState)(0), [Y, X] = (0, i.useState)(null);
            O[2] !== Y ? (d = e => e.id === Y, O[2] = Y, O[3] = d) : d = O[3];
            let ee = D.findIndex(d),
                et = D[ee],
                er = Math.min($, D.length - 1);
            O[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                let t = Q.current;
                if (null == t) return;
                let r = x(t, e);
                K.current = 1 >= Math.abs(t.scrollLeft - r) ? null : r, t.scrollTo({
                    left: r
                }), J(e)
            }, O[4] = f) : f = O[4];
            let en = f;
            O[5] !== D.length ? (m = e => {
                let t = 0,
                    r = 1 / 0;
                for (let n = 0; n < D.length; n += 1) {
                    let a = Math.abs(x(e, n) - e.scrollLeft);
                    a < r && (r = a, t = n)
                }
                J(t)
            }, O[5] = D.length, O[6] = m) : m = O[6];
            let ea = m,
                el = "sidebar" === W && "mb-5";
            O[7] !== el ? (b = (0, l.b)("-mx-6", el), O[7] = el, O[8] = b) : b = O[8];
            let ei = "dialog" === W ? "h-56 sm:h-64" : "aspect-5/4";
            O[9] !== ei ? (j = (0, l.b)("group relative overflow-hidden select-none", ei), O[9] = ei, O[10] = j) : j = O[10], O[11] !== U ? (w = U.formatMessage({
                id: "chatgpt.imageGroup.photos",
                defaultMessage: "Photos",
                description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
            }), O[11] = U, O[12] = w) : w = O[12], O[13] !== U ? (_ = U.formatMessage({
                id: "chatgpt.imageGroup.carouselRole",
                defaultMessage: "carousel",
                description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
            }), O[13] = U, O[14] = _) : _ = O[14], O[15] !== D.length || O[16] !== en || O[17] !== er ? (C = e => {
                if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                    e.preventDefault(), e.stopPropagation();
                    let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                    en(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (er + 1) % D.length : Math.max(0, er - 1))
                }
            }, O[15] = D.length, O[16] = en, O[17] = er, O[18] = C) : C = O[18], O[19] !== ea ? (I = e => {
                let t = e.currentTarget,
                    r = K.current;
                if (null != r) {
                    1 >= Math.abs(t.scrollLeft - r) && (K.current = null);
                    return
                }
                ea(t)
            }, M = e => {
                K.current = null, ea(e.currentTarget)
            }, O[19] = ea, O[20] = I, O[21] = M) : (I = O[20], M = O[21]), O[22] === Symbol.for("react.memo_cache_sentinel") ? (k = () => {
                K.current = null
            }, S = () => {
                K.current = null
            }, O[22] = k, O[23] = S) : (k = O[22], S = O[23]);
            let es = D.map((e, t) => (0, n.jsx)(v, {
                conversationId: E,
                fallbackSrc: 0 === t ? z : void 0,
                image: e,
                imageAssetResolver: q,
                imageNumber: t + 1,
                imageRef: t => {
                    if (null != t) return V.current.set(e.id, t), () => {
                        V.current.get(e.id) === t && V.current.delete(e.id)
                    }
                },
                single: 1 === D.length,
                presentation: W,
                onOpen: r => {
                    null != G ? G(t) : (Z.current = r, X(e.id))
                }
            }, e.id));
            return O[24] !== I || O[25] !== M || O[26] !== k || O[27] !== S || O[28] !== es ? (T = (0, n.jsx)("div", {
                ref: Q,
                className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                onScroll: I,
                onScrollEnd: M,
                onPointerDown: k,
                onWheel: S,
                children: es
            }), O[24] = I, O[25] = M, O[26] = k, O[27] = S, O[28] = es, O[29] = T) : T = O[29], O[30] !== D.length || O[31] !== U || O[32] !== R || O[33] !== en || O[34] !== er ? (A = D.length > 1 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("div", {
                    className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
                    children: [(0, n.jsx)(o.a, {
                        className: (0, l.b)("pointer-events-auto", 0 === er && "invisible"),
                        "aria-label": U.formatMessage({
                            id: "chatgpt.imageGroup.previousPhoto",
                            defaultMessage: "Previous photo",
                            description: "Accessible label for the previous photo button in a ChatGPT entity photo carousel"
                        }),
                        color: "mediaSolid",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => {
                            let e = Math.max(0, er - 1);
                            e !== er && R?.("previous", e), en(e)
                        },
                        children: (0, n.jsx)(c.a, {
                            className: "rtl:rotate-180",
                            asset: h.a
                        })
                    }), (0, n.jsx)(o.a, {
                        className: "pointer-events-auto",
                        "aria-label": U.formatMessage({
                            id: "chatgpt.imageGroup.nextPhoto",
                            defaultMessage: "Next photo",
                            description: "Accessible label for the next photo button in a ChatGPT entity photo carousel"
                        }),
                        color: "mediaSolid",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => {
                            let e = (er + 1) % D.length;
                            e !== er && R?.("next", e), en(e)
                        },
                        children: (0, n.jsx)(c.a, {
                            className: "rtl:rotate-180",
                            asset: g.a
                        })
                    })]
                }), D.length <= 20 ? (0, n.jsx)("div", {
                    className: "absolute inset-x-0 bottom-3 flex justify-center",
                    children: (0, n.jsx)(u.a, {
                        count: D.length,
                        activeIndex: er,
                        getPageLabel: e => U.formatMessage({
                            id: "chatgpt.imageGroup.goToPhoto",
                            defaultMessage: "Go to photo {number}",
                            description: "Accessible label for a photo carousel position indicator; number is the one-based photo position"
                        }, {
                            number: e + 1
                        }),
                        onSelect: en
                    })
                }) : null]
            }) : null, O[30] = D.length, O[31] = U, O[32] = R, O[33] = en, O[34] = er, O[35] = A) : A = O[35], O[36] !== H || O[37] !== j || O[38] !== w || O[39] !== _ || O[40] !== C || O[41] !== T || O[42] !== A ? (P = (0, n.jsxs)("div", {
                ref: H,
                className: j,
                "data-entity-photos": !0,
                "aria-label": w,
                "aria-roledescription": _,
                role: "region",
                onKeyDown: C,
                children: [T, A]
            }), O[36] = H, O[37] = j, O[38] = w, O[39] = _, O[40] = C, O[41] = T, O[42] = A, O[43] = P) : P = O[43], O[44] !== E || O[45] !== q || O[46] !== D || O[47] !== Z || O[48] !== et || O[49] !== ee || O[50] !== X ? (N = null != et ? (0, n.jsx)(y, {
                conversationId: E,
                image: et,
                imageAssetResolver: q,
                imageNumber: ee + 1,
                onClose: () => X(null),
                onCloseAutoFocus: e => {
                    e.preventDefault(), Z.current?.focus()
                },
                onPreviousImage: ee > 0 ? () => X(D[ee - 1].id) : void 0,
                onNextImage: ee < D.length - 1 ? () => X(D[ee + 1].id) : void 0
            }) : null, O[44] = E, O[45] = q, O[46] = D, O[47] = Z, O[48] = et, O[49] = ee, O[50] = X, O[51] = N) : N = O[51], O[52] !== P || O[53] !== N || O[54] !== b ? (F = (0, n.jsxs)("div", {
                className: b,
                "data-testid": "chatgpt-image-group-carousel",
                children: [P, N]
            }), O[52] = P, O[53] = N, O[54] = b, O[55] = F) : F = O[55], F
        }

        function v(e) {
            let t, r, o, u, c, m, p, h, g = (0, a.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: v,
                    image: y,
                    imageAssetResolver: x,
                    imageNumber: j,
                    imageRef: w,
                    onOpen: _,
                    single: C,
                    presentation: I
                } = e,
                M = (0, s.a)(),
                [k, S] = (0, i.useState)(null),
                [T, A] = (0, i.useState)(null),
                P = null != y.previewSrc && y.previewSrc !== T ? y.previewSrc : y.src;
            g[0] !== b || g[1] !== x || g[2] !== P ? (t = {
                src: P,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = P, g[3] = t) : t = g[3];
            let {
                previewSrc: N
            } = (0, f.a)(t), F = null != v && (null == N || k !== N), O = C && "w-full", L = !C && ("dialog" === I ? "w-2/3" : "max-w-19/20");
            return g[4] !== O || g[5] !== L ? (r = (0, l.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", O, L), g[4] = O, g[5] = L, g[6] = r) : r = g[6], g[7] !== v || g[8] !== y.height || g[9] !== y.width || g[10] !== I || g[11] !== C ? (o = C || "dialog" === I ? void 0 : {
                aspectRatio: null == v ? `${y.width??1}/${y.height??1}` : "5/4"
            }, g[7] = v, g[8] = y.height, g[9] = y.width, g[10] = I, g[11] = C, g[12] = o) : o = g[12], g[13] !== j || g[14] !== M ? (u = M.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: j
            }), g[13] = j, g[14] = M, g[15] = u) : u = g[15], g[16] !== _ ? (c = e => _(e.currentTarget), g[16] = _, g[17] = c) : c = g[17], g[18] !== v || g[19] !== y.previewSrc || g[20] !== w || g[21] !== k || g[22] !== N || g[23] !== F ? (m = null == N ? (0, n.jsx)(d.a, {
                className: "h-full w-full"
            }) : (0, n.jsx)("img", {
                ref: F ? void 0 : w,
                className: (0, l.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == v && k !== N && "opacity-0"),
                src: N,
                alt: "",
                draggable: !1,
                loading: null == v ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => S(N),
                onError: () => A(y.previewSrc ?? null)
            }), g[18] = v, g[19] = y.previewSrc, g[20] = w, g[21] = k, g[22] = N, g[23] = F, g[24] = m) : m = g[24], g[25] !== v || g[26] !== w || g[27] !== F ? (p = F ? (0, n.jsx)("img", {
                ref: w,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: v,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = v, g[26] = w, g[27] = F, g[28] = p) : p = g[28], g[29] !== p || g[30] !== r || g[31] !== o || g[32] !== u || g[33] !== c || g[34] !== m ? (h = (0, n.jsxs)("button", {
                className: r,
                style: o,
                "aria-label": u,
                type: "button",
                onClick: c,
                children: [m, p]
            }), g[29] = p, g[30] = r, g[31] = o, g[32] = u, g[33] = c, g[34] = m, g[35] = h) : h = g[35], h
        }

        function y(e) {
            let t, r, l, i, o = (0, a.c)(16),
                {
                    conversationId: u,
                    image: c,
                    imageAssetResolver: d,
                    imageNumber: p,
                    onClose: h,
                    onCloseAutoFocus: g,
                    onNextImage: b,
                    onPreviousImage: v
                } = e,
                y = (0, s.a)();
            o[0] !== u || o[1] !== c.src || o[2] !== d ? (t = {
                src: c.src,
                conversationId: u,
                imageAssetResolver: d,
                shouldLoadFileDataUrl: !1
            }, o[0] = u, o[1] = c.src, o[2] = d, o[3] = t) : t = o[3];
            let {
                previewSrc: x
            } = (0, f.a)(t);
            return null == x ? null : (o[4] !== p || o[5] !== y ? (r = y.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: p
            }), o[4] = p, o[5] = y, o[6] = r) : r = o[6], o[7] !== h ? (l = e => {
                e || h()
            }, o[7] = h, o[8] = l) : l = o[8], o[9] !== g || o[10] !== b || o[11] !== v || o[12] !== x || o[13] !== r || o[14] !== l ? (i = (0, n.jsx)(m.a, {
                alt: r,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: l,
                onNextImage: b,
                onPreviousImage: v
            }), o[9] = g, o[10] = b, o[11] = v, o[12] = x, o[13] = r, o[14] = l, o[15] = i) : i = o[15], i)
        }

        function x(e, t) {
            let r = e.children.item(t);
            if (!(r instanceof HTMLElement)) return 0;
            let n = "rtl" === getComputedStyle(e).direction,
                a = e.scrollWidth - e.clientWidth,
                l = r.offsetLeft - (e.clientWidth - r.offsetWidth) / 2;
            return 0 === t ? l = 0 : t === e.children.length - 1 && (l = n ? r.offsetLeft : r.offsetLeft + r.offsetWidth - e.clientWidth), n ? Math.max(-a, Math.min(0, l)) : Math.max(0, Math.min(a, l))
        }
        r.d(t, {
            a: () => b
        })
    }),
    OprO: (function(e, t, r) {
        r.d(t, {
            a: () => m,
            b: () => g,
            c: () => v
        });
        var n = r("ABep"),
            a = r("QosV"),
            l = r("iTtm"),
            i = r("zd8w"),
            s = r("oyxz"),
            o = r("ASxG"),
            u = r("ygO2"),
            c = r("OWtl"),
            d = r("TUMj");
        let f = (0, l.v)(c.a, e => null, void 0, {
            autoDispose: !0
        });

        function m(e) {
            let t, r, s, o = (0, a.c)(7),
                {
                    conversationId: u,
                    actions: d,
                    children: m
                } = e,
                p = (0, l.y)(c.a);
            return o[0] !== d || o[1] !== u || o[2] !== p ? (t = () => {
                let e = p.watch(e => {
                    let {
                        get: t
                    } = e;
                    t(f, u)
                });
                return p.set(f, u, d), () => {
                    p.get(f, u) === d && p.set(f, u, null), e()
                }
            }, r = [p, u, d], o[0] = d, o[1] = u, o[2] = p, o[3] = t, o[4] = r) : (t = o[3], r = o[4]), (0, i.useLayoutEffect)(t, r), o[5] !== m ? (s = (0, n.jsx)(n.Fragment, {
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

        function h() {
            let e, t = (0, a.c)(1);
            return t[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)("span", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.chatUnavailable",
                    defaultMessage: "Couldn’t open this chat. Try again.",
                    description: "Error after a business profile's chat button or suggested question could not open a new conversation. The user can click the action again."
                })
            }), t[0] = e) : e = t[0], e
        }

        function g(e) {
            let t, r, i, o, c, d = (0, a.c)(14),
                {
                    conversationId: m
                } = e,
                p = (0, l.x)(f, m);
            if (p?.startChat == null) return null;
            let g = p.startChat,
                b = null != p.pendingId,
                v = p.pendingId === g.id;
            return d[0] !== g || d[1] !== p ? (t = () => p.open(g), d[0] = g, d[1] = p, d[2] = t) : t = d[2], d[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(s.a, {
                id: "chatgpt.entity.businessProfile.startChat",
                defaultMessage: "Start chat",
                description: "Button in a business profile header that opens a new conversation with that business’s AI agent."
            }), d[3] = r) : r = d[3], d[4] !== b || d[5] !== v || d[6] !== t ? (i = (0, n.jsx)(u.a, {
                color: "primary",
                radius: "full",
                disabled: b,
                loading: v,
                onClick: t,
                children: r
            }), d[4] = b, d[5] = v, d[6] = t, d[7] = i) : i = d[7], d[8] !== g.id || d[9] !== p.failedId ? (o = p.failedId === g.id ? (0, n.jsx)(h, {}) : null, d[8] = g.id, d[9] = p.failedId, d[10] = o) : o = d[10], d[11] !== i || d[12] !== o ? (c = (0, n.jsxs)(n.Fragment, {
                children: [i, o]
            }), d[11] = i, d[12] = o, d[13] = c) : c = d[13], c
        }

        function b(e) {
            let t, r, i, s, o, c = (0, a.c)(12),
                {
                    conversationId: d,
                    data: m
                } = e,
                g = (0, l.x)(f, d);
            if (null == g) return null;
            if (c[0] !== g || c[1] !== m) {
                s = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, a = p.safeParse(m);
                    if (!a.success || 0 === a.data.items.length) {
                        s = null;
                        break e
                    }
                    t = "my-3 flex flex-wrap items-center gap-2",
                    c[6] !== g ? (e = e => (0, n.jsx)(u.a, {
                        color: "outline",
                        radius: "full",
                        disabled: null != g.pendingId,
                        loading: g.pendingId === e.id,
                        onClick: () => g.open(e),
                        children: e.label
                    }, e.id), c[6] = g, c[7] = e) : e = c[7],
                    r = a.data.items.map(e),
                    i = a.data.items.some(e => {
                        let {
                            id: t
                        } = e;
                        return t === g.failedId
                    }) ? (0, n.jsx)(h, {}) : null
                }
                c[0] = g, c[1] = m, c[2] = t, c[3] = r, c[4] = i, c[5] = s
            } else t = c[2], r = c[3], i = c[4], s = c[5];
            return s !== Symbol.for("react.early_return_sentinel") ? s : (c[8] !== t || c[9] !== r || c[10] !== i ? (o = (0, n.jsxs)("div", {
                className: t,
                children: [r, i]
            }), c[8] = t, c[9] = r, c[10] = i, c[11] = o) : o = c[11], o)
        }

        function v(e) {
            let t, r = (0, a.c)(3),
                {
                    data: l
                } = e,
                i = (0, d.d)();
            return r[0] !== l || r[1] !== i ? (t = i?.conversationType === "sidebar" ? (0, n.jsx)(b, {
                conversationId: i.conversationId,
                data: l
            }) : null, r[0] = l, r[1] = i, r[2] = t) : t = r[2], t
        }
    }),
    FQiC: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("zd8w"),
            l = r("Cslg"),
            i = r("OWtl"),
            s = r("tZ3A");
        let o = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(s.c, e)?.businessProfile;
                return {
                    conversationId: e,
                    accountId: r(l.e),
                    userId: r(l.i),
                    profileId: n?.profile_id ?? null,
                    identity: JSON.stringify(n ?? null)
                }
            }),
            u = (0, n.j)(i.a, (e, t) => {
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
            a: u,
            b: o
        })
    }),
    orgn: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("iTtm"),
            l = r("o0PZ"),
            i = r("Cslg"),
            s = r("OWtl"),
            o = r("OMIV"),
            u = r("tZ3A"),
            c = r("Kwur");
        let d = (0, a.q)(s.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(u.c, e), s = a?.businessProfile, d = r(i.e), f = r(i.i), m = null != s && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && r(o.c, "2789236610") && null != d && null != f;
                return {
                    queryKey: ["entity-business-profile", d, f, e, s?.canonical_id],
                    enabled: m,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: m ? e => {
                        let {
                            signal: t
                        } = e;
                        return c.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [l.Zb]: d
                            },
                            requestBody: {
                                provider: "canonical-business-profile",
                                provider_business_id: s.canonical_id
                            },
                            signal: t,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        })
                    } : n.u
                }
            }),
            f = (0, a.d)(s.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == r(u.c, e)?.businessProfile || !r(o.c, "2789236610")) return null;
                let {
                    data: n,
                    isEnabled: a
                } = r(d, e);
                return a ? n ?? null : null
            });
        r.d(t, {}, {
            a: f
        })
    }),
    SZ0w: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("v1r0"),
            i = r("iTtm"),
            s = r("zd8w"),
            o = r("Wf1j"),
            u = r("oyxz"),
            c = r("bfX9"),
            d = r("bqtn"),
            f = r("HOLv"),
            m = r("E6P3"),
            p = r("zSQm"),
            h = r("WAdu"),
            g = r("OWtl"),
            b = r("tZ3A"),
            v = r("KDax"),
            y = r("OprO"),
            x = r("FQiC"),
            j = r("orgn"),
            w = r("T2J5"),
            _ = r("Csob"),
            C = r("YDBm"),
            I = r("UNnq"),
            M = r("Li1h");

        function k(e) {
            let t, r = (0, a.c)(2),
                {
                    claimed: l
                } = e;
            return r[0] !== l ? (t = !0 === l ? (0, n.jsx)(S, {}) : null, r[0] = l, r[1] = t) : t = r[1], t
        }

        function S() {
            let e, t, r = (0, a.c)(4),
                l = (0, o.a)();
            return r[0] !== l ? (e = l.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), r[0] = l, r[1] = e) : e = r[1], r[2] !== e ? (t = (0, n.jsx)(w.a, {
                className: "ms-2",
                label: e,
                showTooltip: !0
            }), r[2] = e, r[3] = t) : t = r[3], t
        }

        function T(e) {
            let t, r, l, i, s = (0, a.c)(14),
                {
                    conversationId: o,
                    requiresConfirmation: d,
                    status: f,
                    websiteUrl: m,
                    children: h
                } = e;
            if (s[0] !== m) {
                let e = (0, p.a)(m?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? e : null, s[0] = m, s[1] = t
            } else t = s[1];
            let g = t,
                b = f?.chat_target != null && f.header?.start_chat != null;
            return s[2] !== o || s[3] !== b || s[4] !== d || s[5] !== g ? (r = b || null != g ? (0, n.jsxs)("div", {
                className: "my-3 flex flex-wrap items-center gap-2 empty:hidden",
                children: [b ? (0, n.jsx)(y.b, {
                    conversationId: o
                }) : null, null != g ? (0, n.jsx)(v.a, {
                    className: "flex h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent bg-primary-solid px-4 text-sm leading-4 font-medium whitespace-nowrap text-primary-solid select-none no-drag hover:bg-text/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    href: g,
                    initiator: "markdown_link_click",
                    requiresConfirmation: d,
                    appearance: "button",
                    underline: "none",
                    openAsWebsite: !0,
                    children: (0, n.jsx)(u.a, {
                        id: "chatgpt.entity.businessProfile.viewWebsite",
                        defaultMessage: "View website",
                        description: "Button beneath a business name in the entity sidebar that opens the website supplied by its business profile. Use a short action label; no placeholders."
                    })
                }) : null]
            }) : null, s[2] = o, s[3] = b, s[4] = d, s[5] = g, s[6] = r) : r = s[6], s[7] !== o || s[8] !== f ? (l = (0, c.a)(f) ? (0, n.jsx)("div", {
                className: "border-t border-default",
                children: (0, n.jsx)(P, {
                    conversationId: o,
                    status: f
                })
            }) : null, s[7] = o, s[8] = f, s[9] = l) : l = s[9], s[10] !== h || s[11] !== r || s[12] !== l ? (i = (0, n.jsxs)(n.Fragment, {
                children: [r, h, l]
            }), s[10] = h, s[11] = r, s[12] = l, s[13] = i) : i = s[13], i
        }

        function A(e) {
            let t, r, l, s = (0, a.c)(6),
                {
                    conversationId: o
                } = e,
                f = (0, i.y)(g.a),
                m = (0, i.x)(j.a, o);
            return (0, c.a)(m, "dispute") ? (s[0] !== o || s[1] !== f ? (t = () => {
                if (!(0, c.a)(f.get(j.a, o), "dispute")) return;
                let e = f.get(x.a, f.get(x.b, o));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
            }, s[0] = o, s[1] = f, s[2] = t) : t = s[2], s[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(u.a, {
                id: "chatgpt.localBusiness.dispute.action",
                defaultMessage: "Dispute profile ownership",
                description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
            }), s[3] = r) : r = s[3], s[4] !== t ? (l = (0, n.jsx)(d.c.Item, {
                leftIconAsset: M.a,
                onSelect: t,
                children: r
            }), s[4] = t, s[5] = l) : l = s[5], l) : null
        }

        function P(e) {
            let t, r, l = (0, a.c)(6),
                {
                    conversationId: s,
                    status: o
                } = e,
                u = (0, i.y)(g.a);
            l[0] !== s || l[1] !== u ? (t = () => {
                if (!(0, c.a)(u.get(j.a, s))) return;
                let e = u.get(x.a, u.get(x.b, s));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, u.set(e.isOpen$, !0)
            }, l[0] = s, l[1] = u, l[2] = t) : t = l[2];
            let d = o?.ownership?.current_request;
            return l[3] !== t || l[4] !== d ? (r = (0, n.jsx)(_.a, {
                onClick: t,
                request: d
            }), l[3] = t, l[4] = d, l[5] = r) : r = l[5], r
        }

        function N(e) {
            let t, r, c, d, g, v, y, x, w, M = (0, a.c)(29),
                {
                    conversationId: S,
                    profile: A,
                    name: P
                } = e,
                N = (0, o.a)();
            M[0] !== A.categories ? (t = A.categories.find(F), M[0] = A.categories, M[1] = t) : t = M[1];
            let L = t,
                E = O(A.delivery_policy, l.b);
            M[2] !== A.returns_policy ? (r = O(A.returns_policy, l.d), M[2] = A.returns_policy, M[3] = r) : r = M[3];
            let z = r,
                q = (0, i.x)(j.a, S),
                D = (0, i.x)(b.c, S),
                G = (0, s.useContext)(h.a);
            M[4] !== G || M[5] !== D?.shouldBlockExternalEgress || M[6] !== A.logo_url ? (c = "restricted" !== G && !D?.shouldBlockExternalEgress && A.logo_url ? (0, p.b)(A.logo_url) : void 0, M[4] = G, M[5] = D?.shouldBlockExternalEgress, M[6] = A.logo_url, M[7] = c) : c = M[7];
            let R = c;
            M[8] !== R ? (d = R ? (0, n.jsx)(m.a, {
                className: "mb-4 size-16",
                alt: "",
                src: R,
                fallback: (0, n.jsx)(n.Fragment, {})
            }, R) : null, M[8] = R, M[9] = d) : d = M[9];
            let B = A.display_name ?? P,
                W = q?.is_verified ?? null;
            M[10] !== W ? (g = (0, n.jsx)(k, {
                claimed: W
            }), M[10] = W, M[11] = g) : g = M[11], M[12] !== B || M[13] !== g ? (v = (0, n.jsxs)("h2", {
                className: "mb-1 text-card-title leading-7 font-medium break-words",
                children: [B, g]
            }), M[12] = B, M[13] = g, M[14] = v) : v = M[14], M[15] !== L ? (y = L ? (0, n.jsx)("div", {
                className: "text-base leading-5 font-normal break-words text-default",
                children: L
            }) : null, M[15] = L, M[16] = y) : y = M[16];
            let U = D?.shouldBlockExternalEgress,
                H = null == E && null == z ? null : (0, n.jsxs)("div", {
                    className: "divide-y divide-border border-t border-default",
                    children: [null != E ? (0, n.jsxs)(_.e, {
                        icon: (0, n.jsx)(f.a, {
                            asset: I.a
                        }),
                        children: ["none" === E.delivery ? (0, n.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.noDelivery",
                            defaultMessage: "Delivery unavailable",
                            description: "Merchant policy in the business sidebar when delivery is not offered"
                        }) : null, "paid" === E.delivery ? (0, n.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.paidDelivery",
                            defaultMessage: "Paid delivery",
                            description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                        }) : null, "free" === E.delivery && "all_orders" === E.scope ? (0, n.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.freeDelivery",
                            defaultMessage: "Free delivery on all orders",
                            description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                        }) : null, "free" === E.delivery && "minimum_order" === E.scope ? (0, n.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.deliveryMinimum",
                            defaultMessage: "Free delivery over {amount}",
                            description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                            values: {
                                amount: N.formatNumber(Number(E.minimum_order_amount), {
                                    style: "currency",
                                    currency: E.currency,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 20
                                })
                            }
                        }) : null]
                    }) : null, null != z ? (0, n.jsx)(_.e, {
                        icon: (0, n.jsx)(f.a, {
                            asset: C.a
                        }),
                        children: "none" === z.returns ? (0, n.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.noReturns",
                            defaultMessage: "Returns not accepted",
                            description: "Merchant policy in the business sidebar when returns are not accepted"
                        }) : (0, n.jsx)(u.a, {
                            id: "chatgpt.entity.businessProfile.returnWindow",
                            defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}} of delivery} other {Returns within {days, plural, one {# day} other {# days}} of delivery, fees apply}}",
                            description: "Merchant policy in the business sidebar showing the return window from delivery and whether return fees apply",
                            values: {
                                kind: z.returns,
                                days: z.window_days
                            }
                        })
                    }) : null]
                });
            return M[17] !== T || M[18] !== S || M[19] !== A.website_url || M[20] !== q || M[21] !== U || M[22] !== H ? (x = (0, n.jsx)(T, {
                conversationId: S,
                requiresConfirmation: U,
                status: q,
                websiteUrl: A.website_url,
                children: H
            }), M[17] = T, M[18] = S, M[19] = A.website_url, M[20] = q, M[21] = U, M[22] = H, M[23] = x) : x = M[23], M[24] !== x || M[25] !== d || M[26] !== v || M[27] !== y ? (w = (0, n.jsxs)(n.Fragment, {
                children: [d, v, y, x]
            }), M[24] = x, M[25] = d, M[26] = v, M[27] = y, M[28] = w) : w = M[28], w
        }

        function F(e) {
            return e.trim().length > 0
        }

        function O(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        r.d(t, {
            a: () => A,
            b: () => N
        })
    }),
    FRPb: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("rKAs"),
            l = r("OWtl"),
            i = r("u6zN"),
            s = r("tZ3A"),
            o = r("MrGp"),
            u = r("WOVT"),
            c = r("TJEh");
        let d = (0, n.v)(l.a, e => null),
            f = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(d, e);
                if (null == n) return null;
                let a = r(o.L, e);
                return null != a && Object.values(a).some(e => null != e.message && (0, i.c)(e.message).some(e => {
                    let t = (0, c.c)(e);
                    if (null == t) return !1;
                    let r = ("string" == typeof e.name ? e.name : t.name).trim().toLowerCase();
                    return t.id === n.business.id || "" !== r && r === n.business.name.trim().toLowerCase()
                })) ? null : n.business
            }),
            m = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(s.e, e);
                if (null == n) return null;
                let a = r(o.L, e);
                return null != a && Object.values(a).some(e => null != e.message && (0, i.c)(e.message).some(e => null == e.layout && (0, u.c)(e)?.canonical_id === n.canonical_id)) ? null : n
            });

        function p(e, t, r, n) {
            let l = e.get(d, t),
                f = e.get(s.c, t);
            if (null == l && null == f) return;
            let m = e.get(s.c, r);
            if (null != m && m !== n) return;
            let p = Object.values(e.get(o.L, t) ?? {}).flatMap(e => null == e.message ? [] : (0, i.c)(e.message)),
                h = p.filter(e => "entity_metadata" === e.type && null == e.layout),
                g = f?.businessPreview ?? l?.business;
            if (null != g) {
                let t = h.map(c.c).findLast(e => null != e && (e.id === g.id || e.name.trim().toLowerCase() === g.name.trim().toLowerCase())) ?? l?.business;
                null != t && e.set(d, r, {
                    category: f?.category ?? n.category,
                    messageId: n.messageId,
                    sourceConversationId: n.sourceConversationId,
                    business: t
                })
            }
            if (null != f) {
                let t = h.map(u.c).findLast(e => null != e && e.canonical_id === f.businessProfile?.canonical_id) ?? f.businessProfile;
                e.set(s.c, r, {
                    ...f,
                    businessProfile: t
                }), e.set(s.e, r, t ?? null)
            }
            let b = p.find(e => "image_group" === e.type && ("full_width" === e.layout || 0 === e.start_idx));
            e.set(s.b, r, (null == b ? null : (0, a.u)(b, 0)[0]) ?? e.get(s.b, t))
        }

        function h(e) {
            return (t, r) => (0, s.g)(t, r, {
                onCancel: e => {
                    t.set(d, e, null)
                },
                onError: e => {
                    t.set(d, e, null)
                },
                onStart: n => {
                    t.set(d, n, {
                        business: e,
                        category: r.category,
                        messageId: r.messageId,
                        sourceConversationId: r.sourceConversationId
                    })
                }
            })
        }
        r.d(t, {
            a: () => h,
            e: () => p
        }, {
            b: d,
            c: m,
            d: f
        })
    }),
    wFiG: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("EA6X"),
            i = r("iTtm"),
            s = r("o0PZ"),
            o = r("zd8w"),
            u = r("DcH0"),
            c = r("WAdu"),
            d = r("OWtl"),
            f = r("tZ3A"),
            m = r("niC2"),
            p = r("TUMj"),
            h = r("rxj0"),
            g = r("xof2"),
            b = r("SZ0w"),
            v = r("Csob"),
            y = r("FRPb"),
            x = r("LQio"),
            j = r("H0jo");

        function w(e) {
            let t, r, l = (0, a.c)(18),
                {
                    conversationId: d,
                    isTranscriptPending: f,
                    turnContext: p,
                    showClaimedBusinessTooltip: h
                } = e,
                g = void 0 !== f && f,
                b = void 0 !== h && h,
                v = (0, o.useContext)(c.a),
                y = (0, i.x)(j.e, d),
                w = (0, i.x)(j.b, d),
                C = (0, i.x)(j.d, d),
                I = (0, o.useContext)(x.a);
            if (w && !g) return null;
            let M = null;
            if (null != y && "restricted" !== v) {
                let e, t, r, a = `chatgpt:${d}`;
                l[0] !== a ? (e = (0, s.Le)(a), l[0] = a, l[1] = e) : e = l[1], l[2] !== y ? (t = [y], l[2] = y, l[3] = t) : t = l[3], l[4] !== e || l[5] !== t ? (r = (0, n.jsx)(m.a, {
                    conversationId: e,
                    images: t
                }), l[4] = e, l[5] = t, l[6] = r) : r = l[6], M = r
            } else if (C || g && w) {
                let e, t;
                l[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                    className: "aspect-5/4",
                    "aria-hidden": "true",
                    variant: "prominent"
                }), l[7] = e) : e = l[7], l[8] !== I ? (t = (0, n.jsx)("div", {
                    className: "-mx-6 mb-5",
                    children: (0, n.jsx)("div", {
                        ref: I,
                        "data-entity-photos": !0,
                        children: e
                    })
                }), l[8] = I, l[9] = t) : t = l[9], M = t
            }
            return l[10] !== d || l[11] !== g || l[12] !== b || l[13] !== p ? (t = (0, n.jsx)(_, {
                conversationId: d,
                isTranscriptPending: g,
                turnContext: p,
                showClaimedBusinessTooltip: b
            }), l[10] = d, l[11] = g, l[12] = b, l[13] = p, l[14] = t) : t = l[14], l[15] !== M || l[16] !== t ? (r = (0, n.jsxs)(n.Fragment, {
                children: [M, t]
            }), l[15] = M, l[16] = t, l[17] = r) : r = l[17], r
        }

        function _(e) {
            let t, r, s, u, m = (0, a.c)(19),
                {
                    conversationId: x,
                    isTranscriptPending: j,
                    turnContext: w,
                    showClaimedBusinessTooltip: _
                } = e,
                C = void 0 !== j && j,
                I = void 0 !== _ && _,
                M = (0, i.y)(d.a),
                k = (0, o.useContext)(c.a),
                S = (0, i.x)(h.d, x),
                T = (0, i.x)(y.b, x),
                A = (0, i.x)(y.d, x),
                P = C ? T?.business : A,
                N = (0, i.x)(f.c, x),
                F = (0, i.x)(f.e, x),
                O = (0, i.x)(y.c, x),
                L = C ? F : O;
            if (null == P && null == L) return null;
            let E = S ? "restricted" : k,
                z = w ?? null;
            return m[0] !== x || m[1] !== N?.query || m[2] !== L ? (t = null != L && (0, n.jsx)(b.b, {
                conversationId: x,
                profile: L,
                name: N?.query
            }), m[0] = x, m[1] = N?.query, m[2] = L, m[3] = t) : t = m[3], m[4] !== P || m[5] !== T?.category || m[6] !== T?.messageId || m[7] !== T?.sourceConversationId || m[8] !== L || m[9] !== M || m[10] !== I ? (r = null == L && null != P && (0, n.jsx)(v.ChatGptLocalBusinessMetadata, {
                business: P,
                isOptimistic: !0,
                showClaimedBusinessTooltip: I,
                onAction: e => {
                    (0, g.b)(M, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: P.id.trim() || void 0,
                        entityCategory: T?.category ?? void 0,
                        messageId: T?.messageId,
                        assistantMessageId: T?.messageId,
                        conversationId: T?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), m[4] = P, m[5] = T?.category, m[6] = T?.messageId, m[7] = T?.sourceConversationId, m[8] = L, m[9] = M, m[10] = I, m[11] = r) : r = m[11], m[12] !== z || m[13] !== t || m[14] !== r ? (s = (0, n.jsxs)(p.b, {
                value: z,
                children: [t, r]
            }), m[12] = z, m[13] = t, m[14] = r, m[15] = s) : s = m[15], m[16] !== E || m[17] !== s ? (u = (0, n.jsx)(c.a, {
                value: E,
                children: s
            }), m[16] = E, m[17] = s, m[18] = u) : u = m[18], u
        }
        r.d(t, {
            a: () => _,
            b: () => w
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
            l = r("SqqO"),
            i = r("OWtl"),
            s = r("fzVa"),
            o = r("u6zN"),
            u = r("tZ3A"),
            c = r("MrGp"),
            d = r("rxj0"),
            f = r("TJEh"),
            m = r("FRPb");
        let p = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != e && r(u.a, e) && null == r(m.b, e) && r(u.c, e)?.businessProfile == null ? r(c.bb, e) : null
            }),
            h = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(m.b, e), i = r(c.L, e);
                return null != i && Object.values(i).some(t => null != t.message && (0, o.c)(t.message).some((t, i) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (r(u.a, e) || (0, f.i)(n?.category ?? null))) && (!r(d.d, e) || (0, a.u)(t, i).some(e => !(0, l.d)(e.src)))))
            }),
            g = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(m.b, e);
                if (r(d.d, e)) return null;
                let a = r(u.b, e),
                    l = null == n ? null : (0, f.f)(n.business),
                    i = a ?? (null == l ? null : {
                        id: l,
                        src: l,
                        status: "completed",
                        type: "generated-image"
                    });
                if (null == i) return null;
                let o = r(s.b).data?.age_status;
                return "over_18" === o || "unsure" === o ? i : null
            }),
            b = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                return (r(u.a, e) || null != r(m.b, e)) && (0, c.yb)(r(c.Z, e)) && !r(h, e) && null == r(g, e)
            }),
            v = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t;
                return r(h, e) || null != r(g, e) || r(b, e)
            });
        r.d(t, {}, {
            a: v,
            b: h,
            c: p,
            d: b,
            e: g
        })
    }),
    vxGj: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            l = r("on57");

        function i(e) {
            let t, r = (0, a.c)(9),
                {
                    count: i,
                    activeIndex: s,
                    getPageLabel: o,
                    onSelect: u
                } = e;
            if (r[0] !== s || r[1] !== i || r[2] !== o || r[3] !== u) {
                let e;
                r[5] !== s || r[6] !== o || r[7] !== u ? (e = (e, t) => (0, n.jsx)("button", {
                    className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                    type: "button",
                    "aria-current": t === s ? "true" : void 0,
                    "aria-label": o(t),
                    onClick: () => u(t),
                    children: (0, n.jsx)("span", {
                        className: (0, l.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === s ? "w-3 opacity-100" : "w-1 opacity-40")
                    })
                }, t), r[5] = s, r[6] = o, r[7] = u, r[8] = e) : e = r[8], t = (0, n.jsx)("div", {
                    className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                    children: Array.from({
                        length: i
                    }, e)
                }), r[0] = s, r[1] = i, r[2] = o, r[3] = u, r[4] = t
            } else t = r[4];
            return t
        }
        r.d(t, {
            a: () => i
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
            l = r("on57"),
            i = r("ygO2");

        function s(e) {
            let t, r, s, u, c, d, f, m, p, h, g, b, v, y, x = (0, a.c)(30);
            x[0] !== e ? ({
                appearance: u,
                controlSize: c,
                children: t,
                className: r,
                iconOnly: d,
                ...s
            } = e, x[0] = e, x[1] = t, x[2] = r, x[3] = s, x[4] = u, x[5] = c, x[6] = d) : (t = x[1], r = x[2], s = x[3], u = x[4], c = x[5], d = x[6]);
            let j = void 0 === c ? "default" : c,
                w = void 0 !== d && d,
                _ = "blurred" === (void 0 === u ? "compact" : u);
            if (x[7] !== r || x[8] !== j || x[9] !== w || x[10] !== _ || x[11] !== s) {
                let e = (0, l.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                _ && w ? e = (0, l.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === j ? "size-9" : "size-10") : _ && (e = (0, l.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === j ? "h-9" : "h-10")), f = i.a, m = s, p = "secondary", h = _ ? "full" : "default", g = _ ? "default" : "icon", b = (0, l.b)(e, r), x[7] = r, x[8] = j, x[9] = w, x[10] = _, x[11] = s, x[12] = f, x[13] = m, x[14] = p, x[15] = h, x[16] = g, x[17] = b
            } else f = x[12], m = x[13], p = x[14], h = x[15], g = x[16], b = x[17];
            return x[18] !== t || x[19] !== w || x[20] !== _ ? (v = _ && w ? (0, n.jsx)("span", {
                className: "flex size-9 items-center justify-center rounded-full bg-media-background/45 backdrop-blur-md group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60",
                children: t
            }) : t, x[18] = t, x[19] = w, x[20] = _, x[21] = v) : v = x[21], x[22] !== f || x[23] !== m || x[24] !== p || x[25] !== h || x[26] !== g || x[27] !== b || x[28] !== v ? (y = (0, n.jsx)(f, {
                ...m,
                color: p,
                radius: h,
                size: g,
                className: b,
                onPointerUp: o,
                children: v
            }), x[22] = f, x[23] = m, x[24] = p, x[25] = h, x[26] = g, x[27] = b, x[28] = v, x[29] = y) : y = x[29], y
        }

        function o(e) {
            e.currentTarget.blur()
        }
        r.d(t, {
            a: () => s
        })
    }),
    SUhA: (function(e, t, r) {
        var n = r("QosV"),
            a = r("irkb"),
            l = r("iTtm"),
            i = r("zd8w"),
            s = r("toag"),
            o = r("CBsD"),
            u = r("kfGJ"),
            c = r("gTKF"),
            d = r("zHp1");

        function f(e) {
            let t, r, f, m, p, h, g, b, v = (0, n.c)(37),
                {
                    src: y,
                    conversationId: x,
                    hostId: j,
                    imageAssetResolver: w,
                    shouldLoadFileDataUrl: _
                } = e,
                C = (0, a.c)(),
                I = (0, l.x)(s.K, x),
                M = j ?? I ?? u.a,
                k = (0, u.c)(M);
            v[0] !== x ? (t = null == x ? null : {
                kind: "app-server",
                conversationId: x
            }, v[0] = x, v[1] = t) : t = v[1];
            let S = (0, l.x)(c.threadExecutorTargetByThread$, t),
                T = S?.hostId === M ? S.environmentId : void 0,
                [A, P] = (0, i.useState)(null);
            v[2] !== y ? (r = y.trim(), v[2] = y, v[3] = r) : r = v[3];
            let N = r.length > 0,
                F = N && (0, d.g)(y) ? y : "",
                {
                    dataUrl: O,
                    src: L,
                    isError: E,
                    loadSource: z,
                    loadTiming: q,
                    imageCacheHit: D,
                    isShowingCachedImage: G,
                    imageCheck: R,
                    refetch: B,
                    deleted: W
                } = (0, d.j)(F, w);
            v[4] !== N || v[5] !== k.id || v[6] !== k.kind || v[7] !== M || v[8] !== y ? (f = N ? (0, o.b)(y) : null, "local" === k.kind && k.id, m = null, v[4] = N, v[5] = k.id, v[6] = k.kind, v[7] = M, v[8] = y, v[9] = f, v[10] = m) : (f = v[9], m = v[10]);
            let U = m,
                H = A?.src === y && A.environmentId === T ? A.dataUrl : null,
                Q = N ? L ?? U ?? (null != f || F ? H : y) : null;
            v[11] !== f || v[12] !== x || v[13] !== U || v[14] !== T || v[15] !== M || v[16] !== C || v[17] !== _ || v[18] !== y ? (p = () => {
                if (null == f || null != U && !_) return;
                let e = !1;
                return P({
                    src: y,
                    dataUrl: null,
                    environmentId: T
                }), (0, o.e)(f, M, C, void 0, x, T).then(t => {
                    e || P({
                        src: y,
                        dataUrl: t,
                        environmentId: T
                    })
                }), () => {
                    e = !0
                }
            }, h = [f, x, U, T, M, C, _, y], v[11] = f, v[12] = x, v[13] = U, v[14] = T, v[15] = M, v[16] = C, v[17] = _, v[18] = y, v[19] = p, v[20] = h) : (p = v[19], h = v[20]), (0, i.useEffect)(p, h), v[21] !== O || v[22] !== H || v[23] !== y ? (g = O ?? H ?? (y.startsWith("data:image/") ? y : null), v[21] = O, v[22] = H, v[23] = y, v[24] = g) : g = v[24];
            let K = O ?? H ?? Q,
                Z = !!F && E;
            return v[25] !== W || v[26] !== D || v[27] !== R || v[28] !== G || v[29] !== z || v[30] !== q || v[31] !== Q || v[32] !== B || v[33] !== g || v[34] !== K || v[35] !== Z ? (b = {
                dataUrl: g,
                previewSrc: Q,
                downloadSrc: K,
                isError: Z,
                loadSource: z,
                loadTiming: q,
                imageCacheHit: D,
                isShowingCachedImage: G,
                imageCheck: R,
                refetch: B,
                deleted: W
            }, v[25] = W, v[26] = D, v[27] = R, v[28] = G, v[29] = z, v[30] = q, v[31] = Q, v[32] = B, v[33] = g, v[34] = K, v[35] = Z, v[36] = b) : b = v[36], b
        }
        r.d(t, {
            a: () => f
        })
    }),
    jo5I: (function(e, t, r) {
        r.d(t, {
            a: () => M
        });
        var n = r("ABep"),
            a = r("QosV"),
            l = r("h6NE"),
            i = r("on57"),
            s = r("iTtm"),
            o = r("zd8w"),
            u = r("Wf1j"),
            c = r("oyxz"),
            d = r("ygO2"),
            f = r("bqtn"),
            m = r("HOLv"),
            p = r("bf6R"),
            h = r("Yq7Q"),
            g = r("Fmx8"),
            b = r("cZk2");
        let v = (0, r("Bbed").a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(596051)]).then(r.bind(r, "drqx"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, n.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function y(e) {
            let t, r = (0, a.c)(3),
                [l, i] = (0, o.useState)(!!e.open);
            return e.open && !l && i(!0), r[0] !== l || r[1] !== e ? (t = l ? (0, n.jsx)(o.Suspense, {
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
                    open: s,
                    onOpenChange: o,
                    onCloseAutoFocus: u,
                    failed: d
                } = e,
                f = void 0 !== d && d,
                m = !!s;
            return i[0] !== o ? (t = e => o?.(e), i[0] = o, i[1] = t) : t = i[1], i[2] !== f ? (r = f ? (0, n.jsx)(c.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, n.jsx)(c.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), i[2] = f, i[3] = r) : r = i[3], i[4] !== f || i[5] !== u || i[6] !== m || i[7] !== t || i[8] !== r ? (l = (0, n.jsx)(b.a, {
                open: m,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: r
            }), i[4] = f, i[5] = u, i[6] = m, i[7] = t, i[8] = r, i[9] = l) : l = i[9], l
        }
        var j = r("IZUf"),
            w = r("Qxu5"),
            _ = r("bOiT"),
            C = r("IjJG");
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

        function M(e) {
            let t, r, p, h, b, v, x, I, M, P, N, F, O, L, E, z, q, D, G, R, B, W, U, H, Q, K, Z, V, $, J = (0, a.c)(89),
                {
                    className: Y,
                    appearance: X,
                    visibility: ee,
                    isSaved: et,
                    isBusy: er,
                    isCheckingStatus: en,
                    selectedFolderId: ea,
                    onToggleFavorite: el,
                    onSelectFolder: ei
                } = e,
                es = void 0 === X ? "media-overlay" : X,
                eo = (0, s.y)(g.c),
                eu = (0, u.a)(),
                [ec, ed] = (0, o.useState)(!1),
                [ef, em] = (0, o.useState)(!1),
                [ep, eh] = (0, o.useState)(!1),
                [eg, eb] = (0, o.useState)(null),
                ev = (0, o.useRef)(null),
                ey = (0, o.useRef)(null),
                ex = er || en;
            J[0] !== eu ? (t = eu.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder",
                description: "Button that opens the Library folder creation dialog for a saved item"
            }), J[0] = eu, J[1] = t) : t = J[1];
            let ej = t;
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
            J[8] !== ex || J[9] !== et || J[10] !== el ? (p = () => {
                ex ? ed(!1) : (eh(!0), ed(!et), el())
            }, J[8] = ex, J[9] = et, J[10] = el, J[11] = p) : p = J[11];
            let ew = p;
            J[12] !== es || J[13] !== Y || J[14] !== et || J[15] !== ec || J[16] !== ee ? (h = (0, i.b)("select-none", "always" === ee || "entity-header" === es || "map-card" === es || et || ec ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === es ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], Y), J[12] = es, J[13] = Y, J[14] = et, J[15] = ec, J[16] = ee, J[17] = h) : h = J[17];
            let e_ = ec ? "open" : "closed";
            J[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, J[18] = ef, J[19] = b) : b = J[19], J[20] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                e || (ed(!1), eh(!0))
            }, J[20] = v) : v = J[20];
            let eC = !et || ec || ep;
            J[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ev.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, J[21] = x) : x = J[21];
            let eI = ex || void 0,
                eM = ex && !ec || void 0,
                ek = !et || ec ? "menu" : void 0,
                eS = !et || ec ? ec : void 0;
            J[22] === Symbol.for("react.memo_cache_sentinel") ? (I = () => eh(!1), M = () => eh(!1), P = () => eh(!1), J[22] = I, J[23] = M, J[24] = P) : (I = J[22], M = J[23], P = J[24]), J[25] !== ew ? (N = e => {
                e.preventDefault(), e.stopPropagation(), ew()
            }, J[25] = ew, J[26] = N) : N = J[26], J[27] !== ex || J[28] !== et || J[29] !== ew ? (F = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? ew() : ex || et || ed(!0))
            }, J[27] = ex, J[28] = et, J[29] = ew, J[30] = F) : F = J[30];
            let eT = et ? w.a : _.a;
            return J[31] !== eT ? (O = (0, n.jsx)(m.a, {
                asset: eT
            }), J[31] = eT, J[32] = O) : O = J[32], J[33] !== es || J[34] !== et || J[35] !== r || J[36] !== eI || J[37] !== eM || J[38] !== ek || J[39] !== eS || J[40] !== N || J[41] !== F || J[42] !== O ? (L = (0, n.jsx)(T, {
                ref: x,
                "aria-label": r,
                "aria-busy": eI,
                "aria-disabled": eM,
                "aria-haspopup": ek,
                "aria-expanded": eS,
                "aria-pressed": et,
                appearance: es,
                onPointerEnter: I,
                onPointerLeave: M,
                onBlur: P,
                onPointerDown: S,
                onClick: N,
                onKeyDown: F,
                children: O
            }), J[33] = es, J[34] = et, J[35] = r, J[36] = eI, J[37] = eM, J[38] = ek, J[39] = eS, J[40] = N, J[41] = F, J[42] = O, J[43] = L) : L = J[43], J[44] !== r || J[45] !== L || J[46] !== eC ? (E = (0, n.jsx)(l.a, {
                content: r,
                disabled: eC,
                children: L
            }), J[44] = r, J[45] = L, J[46] = eC, J[47] = E) : E = J[47], J[48] === Symbol.for("react.memo_cache_sentinel") ? (z = (0, n.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, n.jsx)(c.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), J[48] = z) : z = J[48], J[49] === Symbol.for("react.memo_cache_sentinel") ? (q = () => {
                ed(!1), em(!0)
            }, D = (0, n.jsx)(m.a, {
                asset: C.a
            }), J[49] = q, J[50] = D) : (q = J[49], D = J[50]), J[51] !== ex || J[52] !== ej ? (G = (0, n.jsx)(d.a, {
                ref: ey,
                "aria-label": ej,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: q,
                children: D
            }), J[51] = ex, J[52] = ej, J[53] = G) : G = J[53], J[54] !== ex || J[55] !== G ? (R = (0, n.jsx)(f.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: G
            }), J[54] = ex, J[55] = G, J[56] = R) : R = J[56], J[57] !== ej || J[58] !== R ? (B = (0, n.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [z, (0, n.jsx)(l.a, {
                    content: ej,
                    children: R
                })]
            }), J[57] = ej, J[58] = R, J[59] = B) : B = J[59], J[60] === Symbol.for("react.memo_cache_sentinel") ? (W = () => ey.current?.focus(), J[60] = W) : W = J[60], J[61] !== ex || J[62] !== ei || J[63] !== ea ? (U = (0, n.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, n.jsx)(A, {
                    isBusy: ex,
                    selectedFolderId: ea,
                    onSelectFolder: ei,
                    focusCreateFolder: W
                })
            }), J[61] = ex, J[62] = ei, J[63] = ea, J[64] = U) : U = J[64], J[65] !== ec || J[66] !== eg || J[67] !== E || J[68] !== B || J[69] !== U || J[70] !== b ? (H = (0, n.jsxs)(f.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: ec,
                onCloseAutoFocus: b,
                onOpenChange: v,
                triggerButton: E,
                children: [B, U]
            }), J[65] = ec, J[66] = eg, J[67] = E, J[68] = B, J[69] = U, J[70] = b, J[71] = H) : H = J[71], J[72] !== et || J[73] !== H || J[74] !== h || J[75] !== e_ ? (Q = (0, n.jsx)("div", {
                className: h,
                "data-saved": et,
                "data-state": e_,
                children: H
            }), J[72] = et, J[73] = H, J[74] = h, J[75] = e_, J[76] = Q) : Q = J[76], J[77] === Symbol.for("react.memo_cache_sentinel") ? (K = e => {
                e.preventDefault(), ev.current?.focus()
            }, J[77] = K) : K = J[77], J[78] !== ei || J[79] !== eo.query ? (Z = async e => {
                await eo.query.cancel(j.a);
                let t = !1;
                eo.query.setData(j.a, r => (t = null == r, [...(r ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(k))), t && eo.query.invalidate(j.a), await ei(e, !0)
            }, J[78] = ei, J[79] = eo.query, J[80] = Z) : Z = J[80], J[81] !== ef || J[82] !== eo.value.accountId || J[83] !== eo.value.userId || J[84] !== Z ? (V = (0, n.jsx)(y, {
                open: ef,
                accountId: eo.value.accountId,
                userId: eo.value.userId,
                directoryId: null,
                onOpenChange: em,
                onCloseAutoFocus: K,
                onCreated: Z
            }), J[81] = ef, J[82] = eo.value.accountId, J[83] = eo.value.userId, J[84] = Z, J[85] = V) : V = J[85], J[86] !== Q || J[87] !== V ? ($ = (0, n.jsxs)(n.Fragment, {
                children: [Q, V]
            }), J[86] = Q, J[87] = V, J[88] = $) : $ = J[88], $
        }

        function k(e, t) {
            return e.name.localeCompare(t.name)
        }

        function S(e) {
            e.preventDefault()
        }

        function T(e) {
            let t, r, l, i = (0, a.c)(6);
            return i[0] !== e ? ({
                appearance: t,
                ...r
            } = e, i[0] = e, i[1] = t, i[2] = r) : (t = i[1], r = i[2]), i[3] !== t || i[4] !== r ? (l = "media-overlay" === t ? (0, n.jsx)(h.a, {
                ...r,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, n.jsx)(d.a, {
                ...r,
                ...I[t]
            }), i[3] = t, i[4] = r, i[5] = l) : l = i[5], l
        }

        function A(e) {
            let t, r, l = (0, a.c)(16),
                {
                    focusCreateFolder: i,
                    isBusy: o,
                    selectedFolderId: u,
                    onSelectFolder: d
                } = e,
                {
                    data: m,
                    isPending: h,
                    isError: g,
                    refetch: b
                } = (0, s.z)(j.a);
            if (h) {
                let e;
                return l[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(c.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…",
                        description: "Status in the favorite folder menu while personal Library folders load"
                    })
                }), l[0] = e) : e = l[0], e
            }
            if (g && null == m) {
                let e, t, r, a;
                return l[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, n.jsx)(c.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), l[1] = e) : e = l[1], l[2] !== i || l[3] !== b ? (t = e => {
                    e.preventDefault(), i(), b()
                }, l[2] = i, l[3] = b, l[4] = t) : t = l[4], l[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(c.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), l[5] = r) : r = l[5], l[6] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(f.c.Item, {
                        onSelect: t,
                        children: r
                    })]
                }), l[6] = t, l[7] = a) : a = l[7], a
            }
            if (m?.length === 0) {
                let e;
                return l[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(f.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(c.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet",
                        description: "Empty state in the favorite folder menu; Create folder is still available"
                    })
                }), l[8] = e) : e = l[8], e
            }
            return l[9] !== m || l[10] !== o || l[11] !== d || l[12] !== u ? (t = m?.map(e => (0, n.jsx)(f.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": u === e.id,
                isActive: u === e.id,
                disabled: o,
                onSelect: () => void d({
                    id: e.id,
                    name: e.name,
                    parent_directory_id: e.parent_directory_id
                }, !1),
                children: (0, n.jsxs)("span", {
                    className: "flex min-w-0 items-center gap-2",
                    children: [(0, n.jsx)(P, {
                        imageUrl: e.thumbnail_url ?? null
                    }), (0, n.jsx)("span", {
                        className: "line-clamp-2 min-w-0 flex-1 whitespace-normal",
                        children: e.name
                    }), (0, n.jsx)(p.Tb, {
                        className: u === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), l[9] = m, l[10] = o, l[11] = d, l[12] = u, l[13] = t) : t = l[13], l[14] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), l[14] = t, l[15] = r) : r = l[15], r
        }

        function P(e) {
            let t, r, l, s = (0, a.c)(8),
                {
                    imageUrl: u
                } = e,
                [c, d] = (0, o.useState)(null),
                f = null != u && u !== c,
                m = !f && "border border-default bg-surface";
            return s[0] !== m ? (t = (0, i.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", m), s[0] = m, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (r = f ? (0, n.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => d(u)
            }) : (0, n.jsx)(p.ud, {}), s[2] = u, s[3] = f, s[4] = r) : r = s[4], s[5] !== t || s[6] !== r ? (l = (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: r
            }), s[5] = t, s[6] = r, s[7] = l) : l = s[7], l
        }
    }),
    IZUf: (function(e, t, r) {
        var n = r("iTtm"),
            a = r("Kwur"),
            l = r("Fmx8");
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
        async function s(e, t, r) {
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
        r.d(t, {
            b: () => s
        }, {
            a: i
        })
    }),
    v1r0: (function(e, t, r) {
        var n = r("ASxG");
        let a = n.strictObject({
                version: n.literal(1),
                delivery: n.enum(["none", "paid"])
            }),
            l = n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.literal("all_orders")
            }),
            i = n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.literal("minimum_order"),
                minimum_order_amount: n.string(),
                currency: n.string().nullable()
            }),
            s = n.strictObject({
                version: n.literal(1),
                returns: n.literal("none")
            }),
            o = n.strictObject({
                version: n.literal(1),
                returns: n.enum(["fees", "free"]),
                window_days: n.number().nullable()
            }),
            u = n.union([a, l, i.extend({
                minimum_order_amount: n.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: n.string().regex(/^[A-Z]{3}$/)
            })]),
            c = n.union([s, o.extend({
                window_days: n.number().int().positive()
            })]),
            d = n.union([n.strictObject({
                version: n.literal(1),
                delivery: n.null()
            }), a, l, n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.null()
            }), i]),
            f = n.union([n.strictObject({
                version: n.literal(1),
                returns: n.null()
            }), s, o]);
        r.d(t, {}, {
            a: d,
            b: u,
            c: f,
            d: c
        })
    })
};