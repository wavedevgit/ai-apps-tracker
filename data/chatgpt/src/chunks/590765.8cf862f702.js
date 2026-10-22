export const __rspack_esm_id = 590765;
export const __rspack_esm_ids = [590765];
export const __webpack_modules__ = {
    bfX: (function(e, t, r) {
        function n(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "claim";
            return !!e?.ownership_state_enabled && (e.ownership?.available_action === t || e.ownership?.available_action === "view_request" && e.ownership.current_request?.kind === t) && !e.profiles.some(e => e.allowed_actions.includes("manage")) && ("claim" === t || !0 === e.is_verified)
        }
        r.d(t, {
            a: () => n
        })
    }),
    niC: (function(e, t, r) {
        var n = r("A"),
            i = r("Qo"),
            a = r("on"),
            l = r("zd"),
            o = r("Wf"),
            s = r("ygO"),
            c = r("vxG"),
            u = r("HOL"),
            d = r("r21"),
            f = r("SUh"),
            m = r("Jw"),
            p = r("LQi"),
            h = r("RIF"),
            g = r("sic");

        function b(e) {
            let t, r, d, f, m, b, j, _, w, C, M, I, S, k, F, N, T, P, A, O = (0, i.c)(56),
                {
                    ref: z,
                    conversationId: L,
                    firstPhotoFallbackSrc: E,
                    imageAssetResolver: D,
                    images: R,
                    onOpenImage: q,
                    onArrowClick: G,
                    presentation: W
                } = e,
                H = void 0 === W ? "sidebar" : W,
                U = (0, o.a)(),
                B = (0, l.useContext)(p.a),
                Q = (0, l.useRef)(null),
                K = (0, l.useRef)(null),
                X = (0, l.useRef)(null);
            O[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, O[0] = t) : t = O[0];
            let $ = (0, l.useRef)(t);
            O[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => ({
                getThumbnail: e => $.current.get(e) ?? null
            }), O[1] = r) : r = O[1], (0, l.useImperativeHandle)(z, r);
            let [J, Z] = (0, l.useState)(0), [Y, V] = (0, l.useState)(null);
            O[2] !== Y ? (d = e => e.id === Y, O[2] = Y, O[3] = d) : d = O[3];
            let ee = R.findIndex(d),
                et = R[ee],
                er = Math.min(J, R.length - 1);
            O[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                let t = Q.current;
                if (null == t) return;
                let r = x(t, e);
                K.current = 1 >= Math.abs(t.scrollLeft - r) ? null : r, t.scrollTo({
                    left: r
                }), Z(e)
            }, O[4] = f) : f = O[4];
            let en = f;
            O[5] !== R.length ? (m = e => {
                let t = 0,
                    r = 1 / 0;
                for (let n = 0; n < R.length; n += 1) {
                    let i = Math.abs(x(e, n) - e.scrollLeft);
                    i < r && (r = i, t = n)
                }
                Z(t)
            }, O[5] = R.length, O[6] = m) : m = O[6];
            let ei = m,
                ea = "sidebar" === H && "mb-5";
            O[7] !== ea ? (b = (0, a.b)("-mx-6", ea), O[7] = ea, O[8] = b) : b = O[8];
            let el = "dialog" === H ? "h-56 sm:h-64" : "aspect-5/4";
            O[9] !== el ? (j = (0, a.b)("group relative overflow-hidden select-none", el), O[9] = el, O[10] = j) : j = O[10], O[11] !== U ? (_ = U.formatMessage({
                id: "chatgpt.imageGroup.photos",
                defaultMessage: "Photos",
                description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
            }), O[11] = U, O[12] = _) : _ = O[12], O[13] !== U ? (w = U.formatMessage({
                id: "chatgpt.imageGroup.carouselRole",
                defaultMessage: "carousel",
                description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
            }), O[13] = U, O[14] = w) : w = O[14], O[15] !== R.length || O[16] !== en || O[17] !== er ? (C = e => {
                if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                    e.preventDefault(), e.stopPropagation();
                    let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                    en(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (er + 1) % R.length : Math.max(0, er - 1))
                }
            }, O[15] = R.length, O[16] = en, O[17] = er, O[18] = C) : C = O[18], O[19] !== ei ? (M = e => {
                let t = e.currentTarget,
                    r = K.current;
                if (null != r) {
                    1 >= Math.abs(t.scrollLeft - r) && (K.current = null);
                    return
                }
                ei(t)
            }, I = e => {
                K.current = null, ei(e.currentTarget)
            }, O[19] = ei, O[20] = M, O[21] = I) : (M = O[20], I = O[21]), O[22] === Symbol.for("react.memo_cache_sentinel") ? (S = () => {
                K.current = null
            }, k = () => {
                K.current = null
            }, O[22] = S, O[23] = k) : (S = O[22], k = O[23]);
            let eo = R.map((e, t) => (0, n.jsx)(v, {
                conversationId: L,
                fallbackSrc: 0 === t ? E : void 0,
                image: e,
                imageAssetResolver: D,
                imageNumber: t + 1,
                imageRef: t => {
                    if (null != t) return $.current.set(e.id, t), () => {
                        $.current.get(e.id) === t && $.current.delete(e.id)
                    }
                },
                single: 1 === R.length,
                presentation: H,
                onOpen: r => {
                    null != q ? q(t) : (X.current = r, V(e.id))
                }
            }, e.id));
            return O[24] !== M || O[25] !== I || O[26] !== S || O[27] !== k || O[28] !== eo ? (F = (0, n.jsx)("div", {
                ref: Q,
                className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                onScroll: M,
                onScrollEnd: I,
                onPointerDown: S,
                onWheel: k,
                children: eo
            }), O[24] = M, O[25] = I, O[26] = S, O[27] = k, O[28] = eo, O[29] = F) : F = O[29], O[30] !== R.length || O[31] !== U || O[32] !== G || O[33] !== en || O[34] !== er ? (N = R.length > 1 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("div", {
                    className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
                    children: [(0, n.jsx)(s.a, {
                        className: (0, a.b)("pointer-events-auto", 0 === er && "invisible"),
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
                            e !== er && G?.("previous", e), en(e)
                        },
                        children: (0, n.jsx)(u.a, {
                            className: "rtl:rotate-180",
                            asset: h.a
                        })
                    }), (0, n.jsx)(s.a, {
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
                            let e = (er + 1) % R.length;
                            e !== er && G?.("next", e), en(e)
                        },
                        children: (0, n.jsx)(u.a, {
                            className: "rtl:rotate-180",
                            asset: g.a
                        })
                    })]
                }), R.length <= 20 ? (0, n.jsx)("div", {
                    className: "absolute inset-x-0 bottom-3 flex justify-center",
                    children: (0, n.jsx)(c.a, {
                        count: R.length,
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
            }) : null, O[30] = R.length, O[31] = U, O[32] = G, O[33] = en, O[34] = er, O[35] = N) : N = O[35], O[36] !== B || O[37] !== j || O[38] !== _ || O[39] !== w || O[40] !== C || O[41] !== F || O[42] !== N ? (T = (0, n.jsxs)("div", {
                ref: B,
                className: j,
                "data-entity-photos": !0,
                "aria-label": _,
                "aria-roledescription": w,
                role: "region",
                onKeyDown: C,
                children: [F, N]
            }), O[36] = B, O[37] = j, O[38] = _, O[39] = w, O[40] = C, O[41] = F, O[42] = N, O[43] = T) : T = O[43], O[44] !== L || O[45] !== D || O[46] !== R || O[47] !== X || O[48] !== et || O[49] !== ee || O[50] !== V ? (P = null != et ? (0, n.jsx)(y, {
                conversationId: L,
                image: et,
                imageAssetResolver: D,
                imageNumber: ee + 1,
                onClose: () => V(null),
                onCloseAutoFocus: e => {
                    e.preventDefault(), X.current?.focus()
                },
                onPreviousImage: ee > 0 ? () => V(R[ee - 1].id) : void 0,
                onNextImage: ee < R.length - 1 ? () => V(R[ee + 1].id) : void 0
            }) : null, O[44] = L, O[45] = D, O[46] = R, O[47] = X, O[48] = et, O[49] = ee, O[50] = V, O[51] = P) : P = O[51], O[52] !== T || O[53] !== P || O[54] !== b ? (A = (0, n.jsxs)("div", {
                className: b,
                "data-testid": "chatgpt-image-group-carousel",
                children: [T, P]
            }), O[52] = T, O[53] = P, O[54] = b, O[55] = A) : A = O[55], A
        }

        function v(e) {
            let t, r, s, c, u, m, p, h, g = (0, i.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: v,
                    image: y,
                    imageAssetResolver: x,
                    imageNumber: j,
                    imageRef: _,
                    onOpen: w,
                    single: C,
                    presentation: M
                } = e,
                I = (0, o.a)(),
                [S, k] = (0, l.useState)(null),
                [F, N] = (0, l.useState)(null),
                T = null != y.previewSrc && y.previewSrc !== F ? y.previewSrc : y.src;
            g[0] !== b || g[1] !== x || g[2] !== T ? (t = {
                src: T,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = T, g[3] = t) : t = g[3];
            let {
                previewSrc: P
            } = (0, f.a)(t), A = null != v && (null == P || S !== P), O = C && "w-full", z = !C && ("dialog" === M ? "w-2/3" : "max-w-19/20");
            return g[4] !== O || g[5] !== z ? (r = (0, a.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", O, z), g[4] = O, g[5] = z, g[6] = r) : r = g[6], g[7] !== v || g[8] !== y.height || g[9] !== y.width || g[10] !== M || g[11] !== C ? (s = C || "dialog" === M ? void 0 : {
                aspectRatio: null == v ? `${y.width??1}/${y.height??1}` : "5/4"
            }, g[7] = v, g[8] = y.height, g[9] = y.width, g[10] = M, g[11] = C, g[12] = s) : s = g[12], g[13] !== j || g[14] !== I ? (c = I.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: j
            }), g[13] = j, g[14] = I, g[15] = c) : c = g[15], g[16] !== w ? (u = e => w(e.currentTarget), g[16] = w, g[17] = u) : u = g[17], g[18] !== v || g[19] !== y.previewSrc || g[20] !== _ || g[21] !== S || g[22] !== P || g[23] !== A ? (m = null == P ? (0, n.jsx)(d.a, {
                className: "h-full w-full"
            }) : (0, n.jsx)("img", {
                ref: A ? void 0 : _,
                className: (0, a.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == v && S !== P && "opacity-0"),
                src: P,
                alt: "",
                draggable: !1,
                loading: null == v ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => k(P),
                onError: () => N(y.previewSrc ?? null)
            }), g[18] = v, g[19] = y.previewSrc, g[20] = _, g[21] = S, g[22] = P, g[23] = A, g[24] = m) : m = g[24], g[25] !== v || g[26] !== _ || g[27] !== A ? (p = A ? (0, n.jsx)("img", {
                ref: _,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: v,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = v, g[26] = _, g[27] = A, g[28] = p) : p = g[28], g[29] !== p || g[30] !== r || g[31] !== s || g[32] !== c || g[33] !== u || g[34] !== m ? (h = (0, n.jsxs)("button", {
                className: r,
                style: s,
                "aria-label": c,
                type: "button",
                onClick: u,
                children: [m, p]
            }), g[29] = p, g[30] = r, g[31] = s, g[32] = c, g[33] = u, g[34] = m, g[35] = h) : h = g[35], h
        }

        function y(e) {
            let t, r, a, l, s = (0, i.c)(16),
                {
                    conversationId: c,
                    image: u,
                    imageAssetResolver: d,
                    imageNumber: p,
                    onClose: h,
                    onCloseAutoFocus: g,
                    onNextImage: b,
                    onPreviousImage: v
                } = e,
                y = (0, o.a)();
            s[0] !== c || s[1] !== u.src || s[2] !== d ? (t = {
                src: u.src,
                conversationId: c,
                imageAssetResolver: d,
                shouldLoadFileDataUrl: !1
            }, s[0] = c, s[1] = u.src, s[2] = d, s[3] = t) : t = s[3];
            let {
                previewSrc: x
            } = (0, f.a)(t);
            return null == x ? null : (s[4] !== p || s[5] !== y ? (r = y.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: p
            }), s[4] = p, s[5] = y, s[6] = r) : r = s[6], s[7] !== h ? (a = e => {
                e || h()
            }, s[7] = h, s[8] = a) : a = s[8], s[9] !== g || s[10] !== b || s[11] !== v || s[12] !== x || s[13] !== r || s[14] !== a ? (l = (0, n.jsx)(m.a, {
                alt: r,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: a,
                onNextImage: b,
                onPreviousImage: v
            }), s[9] = g, s[10] = b, s[11] = v, s[12] = x, s[13] = r, s[14] = a, s[15] = l) : l = s[15], l)
        }

        function x(e, t) {
            let r = e.children.item(t);
            if (!(r instanceof HTMLElement)) return 0;
            let n = "rtl" === getComputedStyle(e).direction,
                i = e.scrollWidth - e.clientWidth,
                a = r.offsetLeft - (e.clientWidth - r.offsetWidth) / 2;
            return 0 === t ? a = 0 : t === e.children.length - 1 && (a = n ? r.offsetLeft : r.offsetLeft + r.offsetWidth - e.clientWidth), n ? Math.max(-i, Math.min(0, a)) : Math.max(0, Math.min(i, a))
        }
        r.d(t, {
            a: () => b
        })
    }),
    FQi: (function(e, t, r) {
        var n = r("Xnl"),
            i = r("zd"),
            a = r("Csl"),
            l = r("OW"),
            o = r("tZ3");
        let s = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(o.c, e)?.businessProfile;
                return {
                    conversationId: e,
                    accountId: r(a.e),
                    userId: r(a.i),
                    profileId: n?.profile_id ?? null,
                    identity: JSON.stringify(n ?? null)
                }
            }),
            c = (0, n.j)(l.a, (e, t) => {
                let {
                    signal: r
                } = t;
                return {
                    isOpen$: r(!1),
                    triggerRef: (0, i.createRef)()
                }
            }, {
                autoDispose: !0
            });
        r.d(t, {}, {
            a: c,
            b: s
        })
    }),
    org: (function(e, t, r) {
        var n = r("D7"),
            i = r("Xnl"),
            a = r("aM"),
            l = r("Csl"),
            o = r("OW"),
            s = r("OM"),
            c = r("tZ3"),
            u = r("Kwu");
        let d = (0, i.q)(o.a, (e, t) => {
                let {
                    get: r
                } = t, i = r(c.c, e), o = i?.businessProfile, d = r(l.e), f = r(l.i), m = null != o && ["business", "brand", "company", "organization"].includes(i?.category ?? "") && r(s.c, "2789236610") && null != d && null != f;
                return {
                    queryKey: ["entity-business-profile", d, f, e, o?.canonical_id],
                    enabled: m,
                    staleTime: 0,
                    gcTime: 0,
                    retry: !1,
                    refetchOnMount: "always",
                    queryFn: m ? e => {
                        let {
                            signal: t
                        } = e;
                        return u.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [a._b]: d
                            },
                            requestBody: {
                                provider: "canonical-business-profile",
                                provider_business_id: o.canonical_id
                            },
                            signal: t,
                            expectedErrorStatuses: [400, 403, 404, 409, 422]
                        })
                    } : n.u
                }
            }),
            f = (0, i.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == r(c.c, e)?.businessProfile || !r(s.c, "2789236610")) return null;
                let {
                    data: n,
                    isEnabled: i
                } = r(d, e);
                return i ? n ?? null : null
            });
        r.d(t, {}, {
            a: f
        })
    }),
    y73: (function(e, t, r) {
        r.d(t, {
            a: () => F,
            b: () => I,
            c: () => N,
            d: () => k
        });
        var n = r("A"),
            i = r("Qo"),
            a = r("Xnl"),
            l = r("zd"),
            o = r("Wf"),
            s = r("oy"),
            c = r("bfX"),
            u = r("bq"),
            d = r("HOL"),
            f = r("zS"),
            m = r("OW"),
            p = r("KDa"),
            h = r("FQi"),
            g = r("v1r"),
            b = r("Cso"),
            v = r("YD"),
            y = r("UNn");

        function x(e) {
            let t, r, a, l, c, u, f = (0, i.c)(15),
                {
                    status: m
                } = e,
                p = (0, o.a)();
            if (f[0] !== p || f[1] !== m?.delivery_policy || f[2] !== m?.returns_policy) {
                l = Symbol.for("react.early_return_sentinel");
                e: {
                    let e, i = j(m?.delivery_policy, g.b),
                        o = m?.returns_policy;
                    if (f[7] !== o ? (e = j(o, g.d), f[7] = o, f[8] = e) : e = f[8], t = e, null == i && null == t) {
                        l = null;
                        break e
                    }
                    r = "divide-y divide-border border-t border-default",
                    a = null != i ? (0, n.jsxs)(b.e, {
                        icon: (0, n.jsx)(d.a, {
                            asset: y.a
                        }),
                        children: ["none" === i.delivery ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.noDelivery",
                            defaultMessage: "Delivery unavailable",
                            description: "Merchant policy in the business sidebar when delivery is not offered"
                        }) : null, "paid" === i.delivery ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.paidDelivery",
                            defaultMessage: "Paid delivery",
                            description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                        }) : null, "free" === i.delivery && "all_orders" === i.scope ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.freeDelivery",
                            defaultMessage: "Free delivery on all orders",
                            description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                        }) : null, "free" === i.delivery && "minimum_order" === i.scope ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.deliveryMinimum",
                            defaultMessage: "Free delivery over {amount}",
                            description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                            values: {
                                amount: p.formatNumber(Number(i.minimum_order_amount), {
                                    style: "currency",
                                    currency: i.currency,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 20
                                })
                            }
                        }) : null]
                    }) : null
                }
                f[0] = p, f[1] = m?.delivery_policy, f[2] = m?.returns_policy, f[3] = t, f[4] = r, f[5] = a, f[6] = l
            } else t = f[3], r = f[4], a = f[5], l = f[6];
            return l !== Symbol.for("react.early_return_sentinel") ? l : (f[9] !== t ? (c = null != t ? (0, n.jsx)(b.e, {
                icon: (0, n.jsx)(d.a, {
                    asset: v.a
                }),
                children: "none" === t.returns ? (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.noReturns",
                    defaultMessage: "Returns not accepted",
                    description: "Merchant policy in the business sidebar when returns are not accepted"
                }) : (0, n.jsx)(s.a, {
                    id: "chatgpt.entity.businessProfile.returnWindow",
                    defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}} of delivery} other {Returns within {days, plural, one {# day} other {# days}} of delivery, fees apply}}",
                    description: "Merchant policy in the business sidebar showing the return window from delivery and whether return fees apply",
                    values: {
                        kind: t.returns,
                        days: t.window_days
                    }
                })
            }) : null, f[9] = t, f[10] = c) : c = f[10], f[11] !== r || f[12] !== a || f[13] !== c ? (u = (0, n.jsxs)("div", {
                className: r,
                children: [a, c]
            }), f[11] = r, f[12] = a, f[13] = c, f[14] = u) : u = f[14], u)
        }

        function j(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        var _ = r("org"),
            w = r("T2J"),
            C = r("dUQ"),
            M = r("Li1");

        function I(e) {
            let t, r = (0, i.c)(2),
                {
                    claimed: a
                } = e;
            return r[0] !== a ? (t = !0 === a ? (0, n.jsx)(S, {}) : null, r[0] = a, r[1] = t) : t = r[1], t
        }

        function S() {
            let e, t, r, a = (0, i.c)(5),
                l = (0, o.a)();
            return a[0] !== l ? (e = l.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), a[0] = l, a[1] = e) : e = a[1], a[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(d.a, {
                asset: C.a
            }), a[2] = t) : t = a[2], a[3] !== e ? (r = (0, n.jsx)(w.a, {
                className: "ms-2",
                label: e,
                showTooltip: !0,
                children: t
            }), a[3] = e, a[4] = r) : r = a[4], r
        }

        function k(e) {
            let t, r, a, o = (0, i.c)(12),
                {
                    children: s,
                    conversationId: c,
                    status: u,
                    websiteUrl: d
                } = e;
            if (null == u && !d) return s;
            if (o[0] !== s || o[1] !== u?.is_verified) {
                let e;
                o[3] !== u?.is_verified ? (e = e => (0, l.isValidElement)(e) ? (0, l.cloneElement)(e, {}, e.props.children, (0, n.jsx)(I, {
                    claimed: u?.is_verified ?? null
                })) : e, o[3] = u?.is_verified, o[4] = e) : e = o[4], t = l.Children.map(s, e), o[0] = s, o[1] = u?.is_verified, o[2] = t
            } else t = o[2];
            return o[5] !== c || o[6] !== u || o[7] !== d ? (r = (0, n.jsx)(F, {
                conversationId: c,
                status: u,
                websiteUrl: d
            }), o[5] = c, o[6] = u, o[7] = d, o[8] = r) : r = o[8], o[9] !== t || o[10] !== r ? (a = (0, n.jsxs)(n.Fragment, {
                children: [t, r]
            }), o[9] = t, o[10] = r, o[11] = a) : a = o[11], a
        }

        function F(e) {
            let t, r, a, l, o = (0, i.c)(12),
                {
                    conversationId: u,
                    requiresConfirmation: d,
                    status: m,
                    websiteUrl: h
                } = e;
            if (o[0] !== d || o[1] !== h) {
                let e = (0, f.a)(h?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? (0, n.jsx)("div", {
                    className: "my-3 flex",
                    children: (0, n.jsx)(p.a, {
                        className: "flex h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent bg-primary-solid px-4 text-sm leading-4 font-medium whitespace-nowrap text-primary-solid select-none no-drag hover:bg-text/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        href: e,
                        initiator: "markdown_link_click",
                        requiresConfirmation: d,
                        appearance: "button",
                        underline: "none",
                        openAsWebsite: !0,
                        children: (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.viewWebsite",
                            defaultMessage: "View website",
                            description: "Button beneath a business name in the entity sidebar that opens the website supplied by its business profile. Use a short action label; no placeholders."
                        })
                    })
                }) : null, o[0] = d, o[1] = h, o[2] = t
            } else t = o[2];
            return o[3] !== m ? (r = (0, n.jsx)(x, {
                status: m
            }), o[3] = m, o[4] = r) : r = o[4], o[5] !== u || o[6] !== m ? (a = (0, c.a)(m) ? (0, n.jsx)("div", {
                className: "border-t border-default",
                children: (0, n.jsx)(T, {
                    conversationId: u,
                    status: m
                })
            }) : null, o[5] = u, o[6] = m, o[7] = a) : a = o[7], o[8] !== t || o[9] !== r || o[10] !== a ? (l = (0, n.jsxs)(n.Fragment, {
                children: [t, r, a]
            }), o[8] = t, o[9] = r, o[10] = a, o[11] = l) : l = o[11], l
        }

        function N(e) {
            let t, r, l, o = (0, i.c)(6),
                {
                    conversationId: d
                } = e,
                f = (0, a.z)(m.a),
                p = (0, a.x)(_.a, d);
            return (0, c.a)(p, "dispute") ? (o[0] !== d || o[1] !== f ? (t = () => {
                if (!(0, c.a)(f.get(_.a, d), "dispute")) return;
                let e = f.get(h.a, f.get(h.b, d));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
            }, o[0] = d, o[1] = f, o[2] = t) : t = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(s.a, {
                id: "chatgpt.localBusiness.dispute.action",
                defaultMessage: "Dispute profile ownership",
                description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
            }), o[3] = r) : r = o[3], o[4] !== t ? (l = (0, n.jsx)(u.c.Item, {
                leftIconAsset: M.a,
                onSelect: t,
                children: r
            }), o[4] = t, o[5] = l) : l = o[5], l) : null
        }

        function T(e) {
            let t, r, l = (0, i.c)(6),
                {
                    conversationId: o,
                    status: s
                } = e,
                u = (0, a.z)(m.a);
            l[0] !== o || l[1] !== u ? (t = () => {
                if (!(0, c.a)(u.get(_.a, o))) return;
                let e = u.get(h.a, u.get(h.b, o));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, u.set(e.isOpen$, !0)
            }, l[0] = o, l[1] = u, l[2] = t) : t = l[2];
            let d = s?.ownership?.current_request;
            return l[3] !== t || l[4] !== d ? (r = (0, n.jsx)(b.a, {
                onClick: t,
                request: d
            }), l[3] = t, l[4] = d, l[5] = r) : r = l[5], r
        }
    }),
    FRP: (function(e, t, r) {
        var n = r("Xnl"),
            i = r("OW"),
            a = r("u6z"),
            l = r("tZ3"),
            o = r("Mr"),
            s = r("TJE");
        let c = (0, n.v)(i.a, e => null),
            u = (0, n.d)(i.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(c, e);
                if (null == n) return null;
                let i = r(o.J, e);
                return null != i && Object.values(i).some(e => null != e.message && (0, a.c)(e.message).some(e => {
                    let t = (0, s.c)(e);
                    if (null == t) return !1;
                    let r = ("string" == typeof e.name ? e.name : t.name).trim().toLowerCase();
                    return t.id === n.business.id || "" !== r && r === n.business.name.trim().toLowerCase()
                })) ? null : n.business
            });

        function d(e) {
            return (t, r) => (0, l.f)(t, r, {
                onCancel: e => {
                    t.set(c, e, null)
                },
                onError: e => {
                    t.set(c, e, null)
                },
                onStart: n => {
                    t.set(c, n, {
                        business: e,
                        category: r.category,
                        messageId: r.messageId,
                        sourceConversationId: r.sourceConversationId
                    })
                }
            })
        }
        r.d(t, {
            a: () => d
        }, {
            b: c,
            c: u
        })
    }),
    wF: (function(e, t, r) {
        var n = r("A"),
            i = r("Qo"),
            a = r("e0C"),
            l = r("Xnl"),
            o = r("aM"),
            s = r("zd"),
            c = r("DcH0"),
            u = r("WA"),
            d = r("OW"),
            f = r("niC"),
            m = r("TUM"),
            p = r("rxj"),
            h = r("xo"),
            g = r("Cso"),
            b = r("FRP"),
            v = r("LQi"),
            y = r("H0j");

        function x(e) {
            let t, r, a = (0, i.c)(18),
                {
                    conversationId: d,
                    isTranscriptPending: m,
                    turnContext: p,
                    showClaimedBusinessTooltip: h
                } = e,
                g = void 0 !== m && m,
                b = void 0 !== h && h,
                x = (0, s.useContext)(u.a),
                _ = (0, l.x)(y.e, d),
                w = (0, l.x)(y.b, d),
                C = (0, l.x)(y.d, d),
                M = (0, s.useContext)(v.a);
            if (w && !g) return null;
            let I = null;
            if (null != _ && "restricted" !== x) {
                let e, t, r, i = `chatgpt:${d}`;
                a[0] !== i ? (e = (0, o.Me)(i), a[0] = i, a[1] = e) : e = a[1], a[2] !== _ ? (t = [_], a[2] = _, a[3] = t) : t = a[3], a[4] !== e || a[5] !== t ? (r = (0, n.jsx)(f.a, {
                    conversationId: e,
                    images: t
                }), a[4] = e, a[5] = t, a[6] = r) : r = a[6], I = r
            } else if (C || g && w) {
                let e, t;
                a[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(c.a, {
                    className: "aspect-5/4",
                    "aria-hidden": "true",
                    variant: "prominent"
                }), a[7] = e) : e = a[7], a[8] !== M ? (t = (0, n.jsx)("div", {
                    className: "-mx-6 mb-5",
                    children: (0, n.jsx)("div", {
                        ref: M,
                        "data-entity-photos": !0,
                        children: e
                    })
                }), a[8] = M, a[9] = t) : t = a[9], I = t
            }
            return a[10] !== d || a[11] !== g || a[12] !== b || a[13] !== p ? (t = (0, n.jsx)(j, {
                conversationId: d,
                isTranscriptPending: g,
                turnContext: p,
                showClaimedBusinessTooltip: b
            }), a[10] = d, a[11] = g, a[12] = b, a[13] = p, a[14] = t) : t = a[14], a[15] !== I || a[16] !== t ? (r = (0, n.jsxs)(n.Fragment, {
                children: [I, t]
            }), a[15] = I, a[16] = t, a[17] = r) : r = a[17], r
        }

        function j(e) {
            let t, r, o, c, f = (0, i.c)(16),
                {
                    conversationId: v,
                    isTranscriptPending: y,
                    turnContext: x,
                    showClaimedBusinessTooltip: j
                } = e,
                _ = void 0 !== j && j,
                w = (0, l.z)(d.a),
                C = (0, s.useContext)(u.a),
                M = (0, l.x)(p.d, v),
                I = (0, l.x)(b.b, v),
                S = (0, l.x)(b.c, v),
                k = void 0 !== y && y ? I?.business : S;
            if (null == k) return null;
            let F = M ? "restricted" : C,
                N = x ?? null;
            return f[0] !== k.id || f[1] !== I?.category || f[2] !== I?.messageId || f[3] !== I?.sourceConversationId || f[4] !== w ? (t = e => {
                (0, h.b)(w, {
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    entityAffordance: e,
                    entityId: k.id.trim() || void 0,
                    entityCategory: I?.category ?? void 0,
                    messageId: I?.messageId,
                    assistantMessageId: I?.messageId,
                    conversationId: I?.sourceConversationId,
                    contentReferenceType: "entity_metadata",
                    surfaceLocation: a.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                    isGenui: !1
                })
            }, f[0] = k.id, f[1] = I?.category, f[2] = I?.messageId, f[3] = I?.sourceConversationId, f[4] = w, f[5] = t) : t = f[5], f[6] !== k || f[7] !== _ || f[8] !== t ? (r = (0, n.jsx)(g.ChatGptLocalBusinessMetadata, {
                business: k,
                isOptimistic: !0,
                showClaimedBusinessTooltip: _,
                onAction: t
            }), f[6] = k, f[7] = _, f[8] = t, f[9] = r) : r = f[9], f[10] !== N || f[11] !== r ? (o = (0, n.jsx)(m.b, {
                value: N,
                children: r
            }), f[10] = N, f[11] = r, f[12] = o) : o = f[12], f[13] !== F || f[14] !== o ? (c = (0, n.jsx)(u.a, {
                value: F,
                children: o
            }), f[13] = F, f[14] = o, f[15] = c) : c = f[15], c
        }
        r.d(t, {
            a: () => j,
            b: () => x
        })
    }),
    LQi: (function(e, t, r) {
        let n = (0, r("zd").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    H0j: (function(e, t, r) {
        var n = r("Xnl"),
            i = r("rK"),
            a = r("Sqq"),
            l = r("OW"),
            o = r("fz"),
            s = r("u6z"),
            c = r("tZ3"),
            u = r("Mr"),
            d = r("rxj"),
            f = r("TJE"),
            m = r("FRP");
        let p = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != e && r(c.a, e) && null == r(m.b, e) ? r(u.$, e) : null
            }),
            h = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(m.b, e), l = r(u.J, e);
                return null != l && Object.values(l).some(t => null != t.message && (0, s.c)(t.message).some((t, l) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (r(c.a, e) || (0, f.i)(n?.category ?? null))) && (!r(d.d, e) || (0, i.u)(t, l).some(e => !(0, a.d)(e.src)))))
            }),
            g = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(m.b, e);
                if (r(d.d, e)) return null;
                let i = r(c.b, e),
                    a = null == n ? null : (0, f.f)(n.business),
                    l = i ?? (null == a ? null : {
                        id: a,
                        src: a,
                        status: "completed",
                        type: "generated-image"
                    });
                if (null == l) return null;
                let s = r(o.b).data?.age_status;
                return "over_18" === s || "unsure" === s ? l : null
            }),
            b = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                return (r(c.a, e) || null != r(m.b, e)) && (0, u.wb)(r(u.X, e)) && !r(h, e) && null == r(g, e)
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
            c: p,
            d: b,
            e: g
        })
    }),
    vxG: (function(e, t, r) {
        var n = r("A"),
            i = r("Qo"),
            a = r("on");

        function l(e) {
            let t, r = (0, i.c)(9),
                {
                    count: l,
                    activeIndex: o,
                    getPageLabel: s,
                    onSelect: c
                } = e;
            if (r[0] !== o || r[1] !== l || r[2] !== s || r[3] !== c) {
                let e;
                r[5] !== o || r[6] !== s || r[7] !== c ? (e = (e, t) => (0, n.jsx)("button", {
                    className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                    type: "button",
                    "aria-current": t === o ? "true" : void 0,
                    "aria-label": s(t),
                    onClick: () => c(t),
                    children: (0, n.jsx)("span", {
                        className: (0, a.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === o ? "w-3 opacity-100" : "w-1 opacity-40")
                    })
                }, t), r[5] = o, r[6] = s, r[7] = c, r[8] = e) : e = r[8], t = (0, n.jsx)("div", {
                    className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                    children: Array.from({
                        length: l
                    }, e)
                }), r[0] = o, r[1] = l, r[2] = s, r[3] = c, r[4] = t
            } else t = r[4];
            return t
        }
        r.d(t, {
            a: () => l
        })
    }),
    nUG: (function(e, t, r) {
        let n = (0, r("zd").createContext)(null);
        r.d(t, {}, {
            a: n
        })
    }),
    Yq: (function(e, t, r) {
        var n = r("A"),
            i = r("Qo"),
            a = r("on"),
            l = r("ygO");

        function o(e) {
            let t, r, o, c, u, d, f, m, p, h, g, b, v, y, x = (0, i.c)(30);
            x[0] !== e ? ({
                appearance: c,
                controlSize: u,
                children: t,
                className: r,
                iconOnly: d,
                ...o
            } = e, x[0] = e, x[1] = t, x[2] = r, x[3] = o, x[4] = c, x[5] = u, x[6] = d) : (t = x[1], r = x[2], o = x[3], c = x[4], u = x[5], d = x[6]);
            let j = void 0 === u ? "default" : u,
                _ = void 0 !== d && d,
                w = "blurred" === (void 0 === c ? "compact" : c);
            if (x[7] !== r || x[8] !== j || x[9] !== _ || x[10] !== w || x[11] !== o) {
                let e = (0, a.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                w && _ ? e = (0, a.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === j ? "size-9" : "size-10") : w && (e = (0, a.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === j ? "h-9" : "h-10")), f = l.a, m = o, p = "secondary", h = w ? "full" : "default", g = w ? "default" : "icon", b = (0, a.b)(e, r), x[7] = r, x[8] = j, x[9] = _, x[10] = w, x[11] = o, x[12] = f, x[13] = m, x[14] = p, x[15] = h, x[16] = g, x[17] = b
            } else f = x[12], m = x[13], p = x[14], h = x[15], g = x[16], b = x[17];
            return x[18] !== t || x[19] !== _ || x[20] !== w ? (v = w && _ ? (0, n.jsx)("span", {
                className: "flex size-9 items-center justify-center rounded-full bg-media-background/45 backdrop-blur-md group-hover/gallery-action:bg-media-background/60 group-focus/gallery-action:bg-media-background/60",
                children: t
            }) : t, x[18] = t, x[19] = _, x[20] = w, x[21] = v) : v = x[21], x[22] !== f || x[23] !== m || x[24] !== p || x[25] !== h || x[26] !== g || x[27] !== b || x[28] !== v ? (y = (0, n.jsx)(f, {
                ...m,
                color: p,
                radius: h,
                size: g,
                className: b,
                onPointerUp: s,
                children: v
            }), x[22] = f, x[23] = m, x[24] = p, x[25] = h, x[26] = g, x[27] = b, x[28] = v, x[29] = y) : y = x[29], y
        }

        function s(e) {
            e.currentTarget.blur()
        }
        r.d(t, {
            a: () => o
        })
    }),
    SUh: (function(e, t, r) {
        var n = r("Qo"),
            i = r("ir"),
            a = r("Xnl"),
            l = r("zd"),
            o = r("Jd"),
            s = r("CB"),
            c = r("kf"),
            u = r("gT"),
            d = r("zH");

        function f(e) {
            let t, r, f, m, p, h, g, b, v = (0, n.c)(36),
                {
                    src: y,
                    conversationId: x,
                    hostId: j,
                    imageAssetResolver: _,
                    shouldLoadFileDataUrl: w
                } = e,
                C = (0, i.c)(),
                M = (0, a.x)(o.M, x),
                I = j ?? M ?? c.a,
                S = (0, c.c)(I);
            v[0] !== x ? (t = null == x ? null : {
                kind: "app-server",
                conversationId: x
            }, v[0] = x, v[1] = t) : t = v[1];
            let k = (0, a.x)(u.threadExecutorTargetByThread$, t),
                F = k?.hostId === I ? k.environmentId : void 0,
                [N, T] = (0, l.useState)(null);
            v[2] !== y ? (r = y.trim(), v[2] = y, v[3] = r) : r = v[3];
            let P = r.length > 0,
                A = P && (0, d.f)(y) ? y : "",
                {
                    dataUrl: O,
                    src: z,
                    isError: L,
                    loadSource: E,
                    loadTiming: D,
                    eligibleForDirectUrl: R,
                    refetch: q,
                    onImageError: G,
                    deleted: W
                } = (0, d.i)(A, _);
            v[4] !== P || v[5] !== S.id || v[6] !== S.kind || v[7] !== I || v[8] !== y ? (f = P ? (0, s.b)(y) : null, "local" === S.kind && S.id, m = null, v[4] = P, v[5] = S.id, v[6] = S.kind, v[7] = I, v[8] = y, v[9] = f, v[10] = m) : (f = v[9], m = v[10]);
            let H = m,
                U = N?.src === y && N.environmentId === F ? N.dataUrl : null,
                B = P ? z ?? H ?? (null != f || A ? U : y) : null;
            v[11] !== f || v[12] !== x || v[13] !== H || v[14] !== F || v[15] !== I || v[16] !== C || v[17] !== w || v[18] !== y ? (p = () => {
                if (null == f || null != H && !w) return;
                let e = !1;
                return T({
                    src: y,
                    dataUrl: null,
                    environmentId: F
                }), (0, s.e)(f, I, C, void 0, x, F).then(t => {
                    e || T({
                        src: y,
                        dataUrl: t,
                        environmentId: F
                    })
                }), () => {
                    e = !0
                }
            }, h = [f, x, H, F, I, C, w, y], v[11] = f, v[12] = x, v[13] = H, v[14] = F, v[15] = I, v[16] = C, v[17] = w, v[18] = y, v[19] = p, v[20] = h) : (p = v[19], h = v[20]), (0, l.useEffect)(p, h), v[21] !== O || v[22] !== U || v[23] !== y ? (g = O ?? U ?? (y.startsWith("data:image/") ? y : null), v[21] = O, v[22] = U, v[23] = y, v[24] = g) : g = v[24];
            let Q = O ?? U ?? B,
                K = !!A && L;
            return v[25] !== W || v[26] !== R || v[27] !== E || v[28] !== D || v[29] !== G || v[30] !== B || v[31] !== q || v[32] !== g || v[33] !== Q || v[34] !== K ? (b = {
                dataUrl: g,
                previewSrc: B,
                downloadSrc: Q,
                isError: K,
                loadSource: E,
                loadTiming: D,
                eligibleForDirectUrl: R,
                refetch: q,
                onImageError: G,
                deleted: W
            }, v[25] = W, v[26] = R, v[27] = E, v[28] = D, v[29] = G, v[30] = B, v[31] = q, v[32] = g, v[33] = Q, v[34] = K, v[35] = b) : b = v[35], b
        }
        r.d(t, {
            a: () => f
        })
    }),
    jo5: (function(e, t, r) {
        r.d(t, {
            a: () => I
        });
        var n = r("A"),
            i = r("Qo"),
            a = r("on"),
            l = r("Xnl"),
            o = r("zd"),
            s = r("Wf"),
            c = r("oy"),
            u = r("ygO"),
            d = r("bq"),
            f = r("HOL"),
            m = r("bf"),
            p = r("Cq"),
            h = r("Yq"),
            g = r("Fmx"),
            b = r("cZk");
        let v = (0, r("Bb").a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(596051)]).then(r.bind(r, "drq"))).CreateLibraryFolderDialog, {
            suspendToParent: !0,
            errorFallback: e => (0, n.jsx)(x, {
                ...e,
                failed: !0
            })
        });

        function y(e) {
            let t, r = (0, i.c)(3),
                [a, l] = (0, o.useState)(!!e.open);
            return e.open && !a && l(!0), r[0] !== a || r[1] !== e ? (t = a ? (0, n.jsx)(o.Suspense, {
                fallback: (0, n.jsx)(x, {
                    ...e
                }),
                children: (0, n.jsx)(v, {
                    ...e
                })
            }) : null, r[0] = a, r[1] = e, r[2] = t) : t = r[2], t
        }

        function x(e) {
            let t, r, a, l = (0, i.c)(10),
                {
                    open: o,
                    onOpenChange: s,
                    onCloseAutoFocus: u,
                    failed: d
                } = e,
                f = void 0 !== d && d,
                m = !!o;
            return l[0] !== s ? (t = e => s?.(e), l[0] = s, l[1] = t) : t = l[1], l[2] !== f ? (r = f ? (0, n.jsx)(c.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, n.jsx)(c.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), l[2] = f, l[3] = r) : r = l[3], l[4] !== f || l[5] !== u || l[6] !== m || l[7] !== t || l[8] !== r ? (a = (0, n.jsx)(b.a, {
                open: m,
                onOpenChange: t,
                onCloseAutoFocus: u,
                failed: f,
                title: r
            }), l[4] = f, l[5] = u, l[6] = m, l[7] = t, l[8] = r, l[9] = a) : a = l[9], a
        }
        var j = r("IZU"),
            _ = r("Qxu"),
            w = r("bO"),
            C = r("Ij");
        let M = {
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

        function I(e) {
            let t, r, m, h, b, v, x, M, I, T, P, A, O, z, L, E, D, R, q, G, W, H, U, B, Q, K, X, $, J, Z = (0, i.c)(89),
                {
                    className: Y,
                    appearance: V,
                    visibility: ee,
                    isSaved: et,
                    isBusy: er,
                    isCheckingStatus: en,
                    selectedFolderId: ei,
                    onToggleFavorite: ea,
                    onSelectFolder: el
                } = e,
                eo = void 0 === V ? "media-overlay" : V,
                es = (0, l.z)(g.c),
                ec = (0, s.a)(),
                [eu, ed] = (0, o.useState)(!1),
                [ef, em] = (0, o.useState)(!1),
                [ep, eh] = (0, o.useState)(!1),
                [eg, eb] = (0, o.useState)(null),
                ev = (0, o.useRef)(null),
                ey = (0, o.useRef)(null),
                ex = er || en;
            Z[0] !== ec ? (t = ec.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder",
                description: "Button that opens the Library folder creation dialog for a saved item"
            }), Z[0] = ec, Z[1] = t) : t = Z[1];
            let ej = t;
            if (en) {
                let e;
                Z[2] !== ec ? (e = ec.formatMessage({
                    id: "library.favoriteFolder.checking",
                    defaultMessage: "Checking Favorites status",
                    description: "Accessible status for a bookmark while checking whether the item is already saved"
                }), Z[2] = ec, Z[3] = e) : e = Z[3], r = e
            } else if (et) {
                let e;
                Z[4] !== ec ? (e = ec.formatMessage({
                    id: "library.favoriteFolder.remove",
                    defaultMessage: "Remove from Favorites",
                    description: "Accessible label and tooltip for removing an item from Favorites"
                }), Z[4] = ec, Z[5] = e) : e = Z[5], r = e
            } else {
                let e;
                Z[6] !== ec ? (e = ec.formatMessage({
                    id: "library.favoriteFolder.add",
                    defaultMessage: "Add to Favorites",
                    description: "Accessible label for saving an item to Favorites and opening optional folder selection"
                }), Z[6] = ec, Z[7] = e) : e = Z[7], r = e
            }
            Z[8] !== ex || Z[9] !== et || Z[10] !== ea ? (m = () => {
                ex ? ed(!1) : (eh(!0), ed(!et), ea())
            }, Z[8] = ex, Z[9] = et, Z[10] = ea, Z[11] = m) : m = Z[11];
            let e_ = m;
            Z[12] !== eo || Z[13] !== Y || Z[14] !== et || Z[15] !== eu || Z[16] !== ee ? (h = (0, a.b)("select-none", "always" === ee || "entity-header" === eo || "map-card" === eo || et || eu ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === eo ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], Y), Z[12] = eo, Z[13] = Y, Z[14] = et, Z[15] = eu, Z[16] = ee, Z[17] = h) : h = Z[17];
            let ew = eu ? "open" : "closed",
                eC = !!et && !eu && !ep && void 0;
            Z[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, Z[18] = ef, Z[19] = b) : b = Z[19], Z[20] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                e || (ed(!1), eh(!0))
            }, Z[20] = v) : v = Z[20], Z[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ev.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, Z[21] = x) : x = Z[21];
            let eM = ex || void 0,
                eI = ex && !eu || void 0,
                eS = !et || eu ? "menu" : void 0,
                ek = !et || eu ? eu : void 0;
            Z[22] === Symbol.for("react.memo_cache_sentinel") ? (M = () => eh(!1), I = () => eh(!1), T = () => eh(!1), Z[22] = M, Z[23] = I, Z[24] = T) : (M = Z[22], I = Z[23], T = Z[24]), Z[25] !== e_ ? (P = e => {
                e.preventDefault(), e.stopPropagation(), e_()
            }, Z[25] = e_, Z[26] = P) : P = Z[26], Z[27] !== ex || Z[28] !== et || Z[29] !== e_ ? (A = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? e_() : ex || et || ed(!0))
            }, Z[27] = ex, Z[28] = et, Z[29] = e_, Z[30] = A) : A = Z[30];
            let eF = et ? _.a : w.a;
            return Z[31] !== eF ? (O = (0, n.jsx)(f.a, {
                asset: eF
            }), Z[31] = eF, Z[32] = O) : O = Z[32], Z[33] !== eo || Z[34] !== et || Z[35] !== r || Z[36] !== eM || Z[37] !== eI || Z[38] !== eS || Z[39] !== ek || Z[40] !== P || Z[41] !== A || Z[42] !== O ? (z = (0, n.jsx)(F, {
                ref: x,
                "aria-label": r,
                "aria-busy": eM,
                "aria-disabled": eI,
                "aria-haspopup": eS,
                "aria-expanded": ek,
                "aria-pressed": et,
                appearance: eo,
                onPointerEnter: M,
                onPointerLeave: I,
                onBlur: T,
                onPointerDown: k,
                onClick: P,
                onKeyDown: A,
                children: O
            }), Z[33] = eo, Z[34] = et, Z[35] = r, Z[36] = eM, Z[37] = eI, Z[38] = eS, Z[39] = ek, Z[40] = P, Z[41] = A, Z[42] = O, Z[43] = z) : z = Z[43], Z[44] === Symbol.for("react.memo_cache_sentinel") ? (L = (0, n.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, n.jsx)(c.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), Z[44] = L) : L = Z[44], Z[45] === Symbol.for("react.memo_cache_sentinel") ? (E = () => {
                ed(!1), em(!0)
            }, D = (0, n.jsx)(f.a, {
                asset: C.a
            }), Z[45] = E, Z[46] = D) : (E = Z[45], D = Z[46]), Z[47] !== ex || Z[48] !== ej ? (R = (0, n.jsx)(u.a, {
                ref: ey,
                "aria-label": ej,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: E,
                children: D
            }), Z[47] = ex, Z[48] = ej, Z[49] = R) : R = Z[49], Z[50] !== ex || Z[51] !== R ? (q = (0, n.jsx)(d.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: R
            }), Z[50] = ex, Z[51] = R, Z[52] = q) : q = Z[52], Z[53] !== ej || Z[54] !== q ? (G = (0, n.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [L, (0, n.jsx)(p.a, {
                    cloneCustomTrigger: !0,
                    tooltipContent: ej,
                    children: q
                })]
            }), Z[53] = ej, Z[54] = q, Z[55] = G) : G = Z[55], Z[56] === Symbol.for("react.memo_cache_sentinel") ? (W = () => ey.current?.focus(), Z[56] = W) : W = Z[56], Z[57] !== ex || Z[58] !== el || Z[59] !== ei ? (H = (0, n.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, n.jsx)(N, {
                    isBusy: ex,
                    selectedFolderId: ei,
                    onSelectFolder: el,
                    focusCreateFolder: W
                })
            }), Z[57] = ex, Z[58] = el, Z[59] = ei, Z[60] = H) : H = Z[60], Z[61] !== eu || Z[62] !== eg || Z[63] !== z || Z[64] !== G || Z[65] !== H || Z[66] !== b ? (U = (0, n.jsxs)(d.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: eu,
                onCloseAutoFocus: b,
                onOpenChange: v,
                triggerButton: z,
                children: [G, H]
            }), Z[61] = eu, Z[62] = eg, Z[63] = z, Z[64] = G, Z[65] = H, Z[66] = b, Z[67] = U) : U = Z[67], Z[68] !== r || Z[69] !== U || Z[70] !== eC ? (B = (0, n.jsx)(p.a, {
                tooltipContent: r,
                open: eC,
                closeOnTriggerClick: !0,
                children: U
            }), Z[68] = r, Z[69] = U, Z[70] = eC, Z[71] = B) : B = Z[71], Z[72] !== et || Z[73] !== B || Z[74] !== h || Z[75] !== ew ? (Q = (0, n.jsx)("div", {
                className: h,
                "data-saved": et,
                "data-state": ew,
                children: B
            }), Z[72] = et, Z[73] = B, Z[74] = h, Z[75] = ew, Z[76] = Q) : Q = Z[76], Z[77] === Symbol.for("react.memo_cache_sentinel") ? (K = e => {
                e.preventDefault(), ev.current?.focus()
            }, Z[77] = K) : K = Z[77], Z[78] !== el || Z[79] !== es.query ? (X = async e => {
                await es.query.cancel(j.a);
                let t = !1;
                es.query.setData(j.a, r => (t = null == r, [...(r ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(S))), t && es.query.invalidate(j.a), await el(e, !0)
            }, Z[78] = el, Z[79] = es.query, Z[80] = X) : X = Z[80], Z[81] !== ef || Z[82] !== es.value.accountId || Z[83] !== es.value.userId || Z[84] !== X ? ($ = (0, n.jsx)(y, {
                open: ef,
                accountId: es.value.accountId,
                userId: es.value.userId,
                directoryId: null,
                onOpenChange: em,
                onCloseAutoFocus: K,
                onCreated: X
            }), Z[81] = ef, Z[82] = es.value.accountId, Z[83] = es.value.userId, Z[84] = X, Z[85] = $) : $ = Z[85], Z[86] !== Q || Z[87] !== $ ? (J = (0, n.jsxs)(n.Fragment, {
                children: [Q, $]
            }), Z[86] = Q, Z[87] = $, Z[88] = J) : J = Z[88], J
        }

        function S(e, t) {
            return e.name.localeCompare(t.name)
        }

        function k(e) {
            e.preventDefault()
        }

        function F(e) {
            let t, r, a, l = (0, i.c)(6);
            return l[0] !== e ? ({
                appearance: t,
                ...r
            } = e, l[0] = e, l[1] = t, l[2] = r) : (t = l[1], r = l[2]), l[3] !== t || l[4] !== r ? (a = "media-overlay" === t ? (0, n.jsx)(h.a, {
                ...r,
                appearance: "blurred",
                controlSize: "small",
                iconOnly: !0
            }) : (0, n.jsx)(u.a, {
                ...r,
                ...M[t]
            }), l[3] = t, l[4] = r, l[5] = a) : a = l[5], a
        }

        function N(e) {
            let t, r, a = (0, i.c)(16),
                {
                    focusCreateFolder: o,
                    isBusy: s,
                    selectedFolderId: u,
                    onSelectFolder: f
                } = e,
                {
                    data: p,
                    isPending: h,
                    isError: g,
                    refetch: b
                } = (0, l.A)(j.a);
            if (h) {
                let e;
                return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(c.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…",
                        description: "Status in the favorite folder menu while personal Library folders load"
                    })
                }), a[0] = e) : e = a[0], e
            }
            if (g && null == p) {
                let e, t, r, i;
                return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, n.jsx)(c.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), a[1] = e) : e = a[1], a[2] !== o || a[3] !== b ? (t = e => {
                    e.preventDefault(), o(), b()
                }, a[2] = o, a[3] = b, a[4] = t) : t = a[4], a[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(c.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), a[5] = r) : r = a[5], a[6] !== t ? (i = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(d.c.Item, {
                        onSelect: t,
                        children: r
                    })]
                }), a[6] = t, a[7] = i) : i = a[7], i
            }
            if (p?.length === 0) {
                let e;
                return a[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(c.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet",
                        description: "Empty state in the favorite folder menu; Create folder is still available"
                    })
                }), a[8] = e) : e = a[8], e
            }
            return a[9] !== p || a[10] !== s || a[11] !== f || a[12] !== u ? (t = p?.map(e => (0, n.jsx)(d.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": u === e.id,
                isActive: u === e.id,
                disabled: s,
                onSelect: () => void f({
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
            }, e.id)), a[9] = p, a[10] = s, a[11] = f, a[12] = u, a[13] = t) : t = a[13], a[14] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), a[14] = t, a[15] = r) : r = a[15], r
        }

        function T(e) {
            let t, r, l, s = (0, i.c)(8),
                {
                    imageUrl: c
                } = e,
                [u, d] = (0, o.useState)(null),
                f = null != c && c !== u,
                p = !f && "border border-default bg-surface";
            return s[0] !== p ? (t = (0, a.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), s[0] = p, s[1] = t) : t = s[1], s[2] !== c || s[3] !== f ? (r = f ? (0, n.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: c,
                onError: () => d(c)
            }) : (0, n.jsx)(m.ud, {}), s[2] = c, s[3] = f, s[4] = r) : r = s[4], s[5] !== t || s[6] !== r ? (l = (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: r
            }), s[5] = t, s[6] = r, s[7] = l) : l = s[7], l
        }
    }),
    IZU: (function(e, t, r) {
        var n = r("Xnl"),
            i = r("Kwu"),
            a = r("Fmx");
        let l = (0, n.r)(a.c, e => {
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
                    return (await i.Request.safeGet("/files/library/nodes", {
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
        async function o(e, t, r) {
            await i.Request.safePatch("/files/library/files/{library_file_id}/move", {
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
            b: () => o
        }, {
            a: l
        })
    }),
    v1r: (function(e, t, r) {
        var n = r("AS");
        let i = n.strictObject({
                version: n.literal(1),
                delivery: n.enum(["none", "paid"])
            }),
            a = n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.literal("all_orders")
            }),
            l = n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.literal("minimum_order"),
                minimum_order_amount: n.string(),
                currency: n.string().nullable()
            }),
            o = n.strictObject({
                version: n.literal(1),
                returns: n.literal("none")
            }),
            s = n.strictObject({
                version: n.literal(1),
                returns: n.enum(["fees", "free"]),
                window_days: n.number().nullable()
            }),
            c = n.union([i, a, l.extend({
                minimum_order_amount: n.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: n.string().regex(/^[A-Z]{3}$/)
            })]),
            u = n.union([o, s.extend({
                window_days: n.number().int().positive()
            })]),
            d = n.union([n.strictObject({
                version: n.literal(1),
                delivery: n.null()
            }), i, a, n.strictObject({
                version: n.literal(1),
                delivery: n.literal("free"),
                scope: n.null()
            }), l]),
            f = n.union([n.strictObject({
                version: n.literal(1),
                returns: n.null()
            }), o, s]);
        r.d(t, {}, {
            a: d,
            b: c,
            c: f,
            d: u
        })
    })
};