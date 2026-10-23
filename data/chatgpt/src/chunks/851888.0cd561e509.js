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
            i = r("on57"),
            l = r("zd8w"),
            o = r("Wf1j"),
            s = r("ygO2"),
            u = r("vxGj"),
            c = r("HOLv"),
            d = r("r21w"),
            f = r("SUhA"),
            m = r("JwGC"),
            p = r("LQio"),
            h = r("RIFd"),
            g = r("sicn");

        function b(e) {
            let t, r, d, f, m, b, j, w, _, C, M, I, S, k, A, N, F, P, T, O = (0, a.c)(56),
                {
                    ref: L,
                    conversationId: q,
                    firstPhotoFallbackSrc: E,
                    imageAssetResolver: z,
                    images: D,
                    onOpenImage: R,
                    onArrowClick: G,
                    presentation: H
                } = e,
                B = void 0 === H ? "sidebar" : H,
                W = (0, o.a)(),
                K = (0, l.useContext)(p.a),
                Q = (0, l.useRef)(null),
                U = (0, l.useRef)(null),
                Z = (0, l.useRef)(null);
            O[0] === Symbol.for("react.memo_cache_sentinel") ? (t = new Map, O[0] = t) : t = O[0];
            let V = (0, l.useRef)(t);
            O[1] === Symbol.for("react.memo_cache_sentinel") ? (r = () => ({
                getThumbnail: e => V.current.get(e) ?? null
            }), O[1] = r) : r = O[1], (0, l.useImperativeHandle)(L, r);
            let [X, $] = (0, l.useState)(0), [J, Y] = (0, l.useState)(null);
            O[2] !== J ? (d = e => e.id === J, O[2] = J, O[3] = d) : d = O[3];
            let ee = D.findIndex(d),
                et = D[ee],
                er = Math.min(X, D.length - 1);
            O[4] === Symbol.for("react.memo_cache_sentinel") ? (f = e => {
                let t = Q.current;
                if (null == t) return;
                let r = x(t, e);
                U.current = 1 >= Math.abs(t.scrollLeft - r) ? null : r, t.scrollTo({
                    left: r
                }), $(e)
            }, O[4] = f) : f = O[4];
            let en = f;
            O[5] !== D.length ? (m = e => {
                let t = 0,
                    r = 1 / 0;
                for (let n = 0; n < D.length; n += 1) {
                    let a = Math.abs(x(e, n) - e.scrollLeft);
                    a < r && (r = a, t = n)
                }
                $(t)
            }, O[5] = D.length, O[6] = m) : m = O[6];
            let ea = m,
                ei = "sidebar" === B && "mb-5";
            O[7] !== ei ? (b = (0, i.b)("-mx-6", ei), O[7] = ei, O[8] = b) : b = O[8];
            let el = "dialog" === B ? "h-56 sm:h-64" : "aspect-5/4";
            O[9] !== el ? (j = (0, i.b)("group relative overflow-hidden select-none", el), O[9] = el, O[10] = j) : j = O[10], O[11] !== W ? (w = W.formatMessage({
                id: "chatgpt.imageGroup.photos",
                defaultMessage: "Photos",
                description: "Accessible name for the photo carousel in a ChatGPT entity details panel"
            }), O[11] = W, O[12] = w) : w = O[12], O[13] !== W ? (_ = W.formatMessage({
                id: "chatgpt.imageGroup.carouselRole",
                defaultMessage: "carousel",
                description: "Accessible role description for the horizontally navigable photo carousel in a ChatGPT entity details panel"
            }), O[13] = W, O[14] = _) : _ = O[14], O[15] !== D.length || O[16] !== en || O[17] !== er ? (C = e => {
                if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && ("ArrowRight" === e.key || "ArrowLeft" === e.key)) {
                    e.preventDefault(), e.stopPropagation();
                    let t = "rtl" === getComputedStyle(e.currentTarget).direction;
                    en(e.key === (t ? "ArrowLeft" : "ArrowRight") ? (er + 1) % D.length : Math.max(0, er - 1))
                }
            }, O[15] = D.length, O[16] = en, O[17] = er, O[18] = C) : C = O[18], O[19] !== ea ? (M = e => {
                let t = e.currentTarget,
                    r = U.current;
                if (null != r) {
                    1 >= Math.abs(t.scrollLeft - r) && (U.current = null);
                    return
                }
                ea(t)
            }, I = e => {
                U.current = null, ea(e.currentTarget)
            }, O[19] = ea, O[20] = M, O[21] = I) : (M = O[20], I = O[21]), O[22] === Symbol.for("react.memo_cache_sentinel") ? (S = () => {
                U.current = null
            }, k = () => {
                U.current = null
            }, O[22] = S, O[23] = k) : (S = O[22], k = O[23]);
            let eo = D.map((e, t) => (0, n.jsx)(v, {
                conversationId: q,
                fallbackSrc: 0 === t ? E : void 0,
                image: e,
                imageAssetResolver: z,
                imageNumber: t + 1,
                imageRef: t => {
                    if (null != t) return V.current.set(e.id, t), () => {
                        V.current.get(e.id) === t && V.current.delete(e.id)
                    }
                },
                single: 1 === D.length,
                presentation: B,
                onOpen: r => {
                    null != R ? R(t) : (Z.current = r, Y(e.id))
                }
            }, e.id));
            return O[24] !== M || O[25] !== I || O[26] !== S || O[27] !== k || O[28] !== eo ? (A = (0, n.jsx)("div", {
                ref: Q,
                className: "relative hide-scrollbar flex h-full snap-x snap-mandatory gap-0.5 overflow-x-auto scroll-smooth motion-reduce:scroll-auto",
                onScroll: M,
                onScrollEnd: I,
                onPointerDown: S,
                onWheel: k,
                children: eo
            }), O[24] = M, O[25] = I, O[26] = S, O[27] = k, O[28] = eo, O[29] = A) : A = O[29], O[30] !== D.length || O[31] !== W || O[32] !== G || O[33] !== en || O[34] !== er ? (N = D.length > 1 ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsxs)("div", {
                    className: "pointer-events-none absolute inset-x-3 top-1/2 flex -translate-y-1/2 justify-between opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
                    children: [(0, n.jsx)(s.a, {
                        className: (0, i.b)("pointer-events-auto", 0 === er && "invisible"),
                        "aria-label": W.formatMessage({
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
                        children: (0, n.jsx)(c.a, {
                            className: "rtl:rotate-180",
                            asset: h.a
                        })
                    }), (0, n.jsx)(s.a, {
                        className: "pointer-events-auto",
                        "aria-label": W.formatMessage({
                            id: "chatgpt.imageGroup.nextPhoto",
                            defaultMessage: "Next photo",
                            description: "Accessible label for the next photo button in a ChatGPT entity photo carousel"
                        }),
                        color: "mediaSolid",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => {
                            let e = (er + 1) % D.length;
                            e !== er && G?.("next", e), en(e)
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
                        getPageLabel: e => W.formatMessage({
                            id: "chatgpt.imageGroup.goToPhoto",
                            defaultMessage: "Go to photo {number}",
                            description: "Accessible label for a photo carousel position indicator; number is the one-based photo position"
                        }, {
                            number: e + 1
                        }),
                        onSelect: en
                    })
                }) : null]
            }) : null, O[30] = D.length, O[31] = W, O[32] = G, O[33] = en, O[34] = er, O[35] = N) : N = O[35], O[36] !== K || O[37] !== j || O[38] !== w || O[39] !== _ || O[40] !== C || O[41] !== A || O[42] !== N ? (F = (0, n.jsxs)("div", {
                ref: K,
                className: j,
                "data-entity-photos": !0,
                "aria-label": w,
                "aria-roledescription": _,
                role: "region",
                onKeyDown: C,
                children: [A, N]
            }), O[36] = K, O[37] = j, O[38] = w, O[39] = _, O[40] = C, O[41] = A, O[42] = N, O[43] = F) : F = O[43], O[44] !== q || O[45] !== z || O[46] !== D || O[47] !== Z || O[48] !== et || O[49] !== ee || O[50] !== Y ? (P = null != et ? (0, n.jsx)(y, {
                conversationId: q,
                image: et,
                imageAssetResolver: z,
                imageNumber: ee + 1,
                onClose: () => Y(null),
                onCloseAutoFocus: e => {
                    e.preventDefault(), Z.current?.focus()
                },
                onPreviousImage: ee > 0 ? () => Y(D[ee - 1].id) : void 0,
                onNextImage: ee < D.length - 1 ? () => Y(D[ee + 1].id) : void 0
            }) : null, O[44] = q, O[45] = z, O[46] = D, O[47] = Z, O[48] = et, O[49] = ee, O[50] = Y, O[51] = P) : P = O[51], O[52] !== F || O[53] !== P || O[54] !== b ? (T = (0, n.jsxs)("div", {
                className: b,
                "data-testid": "chatgpt-image-group-carousel",
                children: [F, P]
            }), O[52] = F, O[53] = P, O[54] = b, O[55] = T) : T = O[55], T
        }

        function v(e) {
            let t, r, s, u, c, m, p, h, g = (0, a.c)(36),
                {
                    conversationId: b,
                    fallbackSrc: v,
                    image: y,
                    imageAssetResolver: x,
                    imageNumber: j,
                    imageRef: w,
                    onOpen: _,
                    single: C,
                    presentation: M
                } = e,
                I = (0, o.a)(),
                [S, k] = (0, l.useState)(null),
                [A, N] = (0, l.useState)(null),
                F = null != y.previewSrc && y.previewSrc !== A ? y.previewSrc : y.src;
            g[0] !== b || g[1] !== x || g[2] !== F ? (t = {
                src: F,
                conversationId: b,
                imageAssetResolver: x,
                shouldLoadFileDataUrl: !1
            }, g[0] = b, g[1] = x, g[2] = F, g[3] = t) : t = g[3];
            let {
                previewSrc: P
            } = (0, f.a)(t), T = null != v && (null == P || S !== P), O = C && "w-full", L = !C && ("dialog" === M ? "w-2/3" : "max-w-19/20");
            return g[4] !== O || g[5] !== L ? (r = (0, i.b)("relative h-full shrink-0 snap-center cursor-interaction overflow-hidden bg-surface-secondary first:snap-start last:snap-end focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-ring", O, L), g[4] = O, g[5] = L, g[6] = r) : r = g[6], g[7] !== v || g[8] !== y.height || g[9] !== y.width || g[10] !== M || g[11] !== C ? (s = C || "dialog" === M ? void 0 : {
                aspectRatio: null == v ? `${y.width??1}/${y.height??1}` : "5/4"
            }, g[7] = v, g[8] = y.height, g[9] = y.width, g[10] = M, g[11] = C, g[12] = s) : s = g[12], g[13] !== j || g[14] !== I ? (u = I.formatMessage({
                id: "chatgpt.imageGroup.openPhoto",
                defaultMessage: "Open photo {number}",
                description: "Accessible label for opening a full-size image from a ChatGPT entity photo carousel; number is the one-based photo position"
            }, {
                number: j
            }), g[13] = j, g[14] = I, g[15] = u) : u = g[15], g[16] !== _ ? (c = e => _(e.currentTarget), g[16] = _, g[17] = c) : c = g[17], g[18] !== v || g[19] !== y.previewSrc || g[20] !== w || g[21] !== S || g[22] !== P || g[23] !== T ? (m = null == P ? (0, n.jsx)(d.a, {
                className: "h-full w-full"
            }) : (0, n.jsx)("img", {
                ref: T ? void 0 : w,
                className: (0, i.b)("h-full w-full object-cover transition-opacity duration-basic ease-enter motion-reduce:transition-none", null == v && S !== P && "opacity-0"),
                src: P,
                alt: "",
                draggable: !1,
                loading: null == v ? "lazy" : "eager",
                referrerPolicy: "no-referrer",
                onLoad: () => k(P),
                onError: () => N(y.previewSrc ?? null)
            }), g[18] = v, g[19] = y.previewSrc, g[20] = w, g[21] = S, g[22] = P, g[23] = T, g[24] = m) : m = g[24], g[25] !== v || g[26] !== w || g[27] !== T ? (p = T ? (0, n.jsx)("img", {
                ref: w,
                className: "pointer-events-none absolute inset-0 h-full w-full object-cover",
                src: v,
                alt: "",
                "aria-hidden": !0,
                draggable: !1,
                fetchPriority: "high",
                loading: "eager",
                referrerPolicy: "no-referrer"
            }) : null, g[25] = v, g[26] = w, g[27] = T, g[28] = p) : p = g[28], g[29] !== p || g[30] !== r || g[31] !== s || g[32] !== u || g[33] !== c || g[34] !== m ? (h = (0, n.jsxs)("button", {
                className: r,
                style: s,
                "aria-label": u,
                type: "button",
                onClick: c,
                children: [m, p]
            }), g[29] = p, g[30] = r, g[31] = s, g[32] = u, g[33] = c, g[34] = m, g[35] = h) : h = g[35], h
        }

        function y(e) {
            let t, r, i, l, s = (0, a.c)(16),
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
                y = (0, o.a)();
            s[0] !== u || s[1] !== c.src || s[2] !== d ? (t = {
                src: c.src,
                conversationId: u,
                imageAssetResolver: d,
                shouldLoadFileDataUrl: !1
            }, s[0] = u, s[1] = c.src, s[2] = d, s[3] = t) : t = s[3];
            let {
                previewSrc: x
            } = (0, f.a)(t);
            return null == x ? null : (s[4] !== p || s[5] !== y ? (r = y.formatMessage({
                id: "chatgpt.imageGroup.photoAlt",
                defaultMessage: "Photo {number}",
                description: "Alt text for a full-size photo in the ChatGPT entity image viewer; number is the one-based photo position"
            }, {
                number: p
            }), s[4] = p, s[5] = y, s[6] = r) : r = s[6], s[7] !== h ? (i = e => {
                e || h()
            }, s[7] = h, s[8] = i) : i = s[8], s[9] !== g || s[10] !== b || s[11] !== v || s[12] !== x || s[13] !== r || s[14] !== i ? (l = (0, n.jsx)(m.a, {
                alt: r,
                src: x,
                showDownload: !1,
                imageReferrerPolicy: "no-referrer",
                open: !0,
                onCloseAutoFocus: g,
                onOpenChange: i,
                onNextImage: b,
                onPreviousImage: v
            }), s[9] = g, s[10] = b, s[11] = v, s[12] = x, s[13] = r, s[14] = i, s[15] = l) : l = s[15], l)
        }

        function x(e, t) {
            let r = e.children.item(t);
            if (!(r instanceof HTMLElement)) return 0;
            let n = "rtl" === getComputedStyle(e).direction,
                a = e.scrollWidth - e.clientWidth,
                i = r.offsetLeft - (e.clientWidth - r.offsetWidth) / 2;
            return 0 === t ? i = 0 : t === e.children.length - 1 && (i = n ? r.offsetLeft : r.offsetLeft + r.offsetWidth - e.clientWidth), n ? Math.max(-a, Math.min(0, i)) : Math.max(0, Math.min(a, i))
        }
        r.d(t, {
            a: () => b
        })
    }),
    FQiC: (function(e, t, r) {
        var n = r("XnlH"),
            a = r("zd8w"),
            i = r("Cslg"),
            l = r("OWtl"),
            o = r("tZ3A");
        let s = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(o.c, e)?.businessProfile;
                return {
                    conversationId: e,
                    accountId: r(i.e),
                    userId: r(i.i),
                    profileId: n?.profile_id ?? null,
                    identity: JSON.stringify(n ?? null)
                }
            }),
            u = (0, n.j)(l.a, (e, t) => {
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
            b: s
        })
    }),
    orgn: (function(e, t, r) {
        var n = r("D7Ms"),
            a = r("XnlH"),
            i = r("o0PZ"),
            l = r("Cslg"),
            o = r("OWtl"),
            s = r("OMIV"),
            u = r("tZ3A"),
            c = r("Kwur");
        let d = (0, a.q)(o.a, (e, t) => {
                let {
                    get: r
                } = t, a = r(u.c, e), o = a?.businessProfile, d = r(l.e), f = r(l.i), m = null != o && ["business", "brand", "company", "organization"].includes(a?.category ?? "") && r(s.c, "2789236610") && null != d && null != f;
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
                        return c.Request.safePost("/chat/frontend/v1/business-profiles/resolve", {
                            additionalHeaders: {
                                "x-openai-use-sheep": "1",
                                [i.Zb]: d
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
            f = (0, a.d)(o.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == r(u.c, e)?.businessProfile || !r(s.c, "2789236610")) return null;
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
            i = r("v1r0"),
            l = r("XnlH"),
            o = r("Wf1j"),
            s = r("oyxz"),
            u = r("bfX9"),
            c = r("bqtn"),
            d = r("HOLv"),
            f = r("zSQm"),
            m = r("OWtl"),
            p = r("tZ3A"),
            h = r("KDax"),
            g = r("FQiC"),
            b = r("orgn"),
            v = r("T2J5"),
            y = r("Csob"),
            x = r("dUQk"),
            j = r("YDBm"),
            w = r("UNnq"),
            _ = r("Li1h");

        function C(e) {
            let t, r = (0, a.c)(2),
                {
                    claimed: i
                } = e;
            return r[0] !== i ? (t = !0 === i ? (0, n.jsx)(M, {}) : null, r[0] = i, r[1] = t) : t = r[1], t
        }

        function M() {
            let e, t, r, i = (0, a.c)(5),
                l = (0, o.a)();
            return i[0] !== l ? (e = l.formatMessage({
                id: "chatgpt.localBusiness.claim.verified.label",
                defaultMessage: "Verified business",
                description: "Accessible label for the blue badge beside a business name after ownership approval"
            }), i[0] = l, i[1] = e) : e = i[1], i[2] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, n.jsx)(d.a, {
                asset: x.a
            }), i[2] = t) : t = i[2], i[3] !== e ? (r = (0, n.jsx)(v.a, {
                className: "ms-2",
                label: e,
                showTooltip: !0,
                children: t
            }), i[3] = e, i[4] = r) : r = i[4], r
        }

        function I(e) {
            let t, r, i, l = (0, a.c)(10),
                {
                    conversationId: o,
                    requiresConfirmation: c,
                    status: d,
                    websiteUrl: m,
                    children: p
                } = e;
            if (l[0] !== c || l[1] !== m) {
                let e = (0, f.a)(m?.trim() ?? "");
                t = e && /^https?:\/\//i.test(e) ? (0, n.jsx)("div", {
                    className: "my-3 flex",
                    children: (0, n.jsx)(h.a, {
                        className: "flex h-9 shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent bg-primary-solid px-4 text-sm leading-4 font-medium whitespace-nowrap text-primary-solid select-none no-drag hover:bg-text/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        href: e,
                        initiator: "markdown_link_click",
                        requiresConfirmation: c,
                        appearance: "button",
                        underline: "none",
                        openAsWebsite: !0,
                        children: (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.viewWebsite",
                            defaultMessage: "View website",
                            description: "Button beneath a business name in the entity sidebar that opens the website supplied by its business profile. Use a short action label; no placeholders."
                        })
                    })
                }) : null, l[0] = c, l[1] = m, l[2] = t
            } else t = l[2];
            return l[3] !== o || l[4] !== d ? (r = (0, u.a)(d) ? (0, n.jsx)("div", {
                className: "border-t border-default",
                children: (0, n.jsx)(k, {
                    conversationId: o,
                    status: d
                })
            }) : null, l[3] = o, l[4] = d, l[5] = r) : r = l[5], l[6] !== p || l[7] !== t || l[8] !== r ? (i = (0, n.jsxs)(n.Fragment, {
                children: [t, p, r]
            }), l[6] = p, l[7] = t, l[8] = r, l[9] = i) : i = l[9], i
        }

        function S(e) {
            let t, r, i, o = (0, a.c)(6),
                {
                    conversationId: d
                } = e,
                f = (0, l.y)(m.a),
                p = (0, l.x)(b.a, d);
            return (0, u.a)(p, "dispute") ? (o[0] !== d || o[1] !== f ? (t = () => {
                if (!(0, u.a)(f.get(b.a, d), "dispute")) return;
                let e = f.get(g.a, f.get(g.b, d));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, f.set(e.isOpen$, !0)
            }, o[0] = d, o[1] = f, o[2] = t) : t = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(s.a, {
                id: "chatgpt.localBusiness.dispute.action",
                defaultMessage: "Dispute profile ownership",
                description: "First menu action for a claimed business profile, available only to people who do not own the profile. Opens the ownership dispute flow."
            }), o[3] = r) : r = o[3], o[4] !== t ? (i = (0, n.jsx)(c.c.Item, {
                leftIconAsset: _.a,
                onSelect: t,
                children: r
            }), o[4] = t, o[5] = i) : i = o[5], i) : null
        }

        function k(e) {
            let t, r, i = (0, a.c)(6),
                {
                    conversationId: o,
                    status: s
                } = e,
                c = (0, l.y)(m.a);
            i[0] !== o || i[1] !== c ? (t = () => {
                if (!(0, u.a)(c.get(b.a, o))) return;
                let e = c.get(g.a, c.get(g.b, o));
                e.triggerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null, c.set(e.isOpen$, !0)
            }, i[0] = o, i[1] = c, i[2] = t) : t = i[2];
            let d = s?.ownership?.current_request;
            return i[3] !== t || i[4] !== d ? (r = (0, n.jsx)(y.a, {
                onClick: t,
                request: d
            }), i[3] = t, i[4] = d, i[5] = r) : r = i[5], r
        }

        function A(e) {
            let t, r, u, c, f, m, h, g = (0, a.c)(22),
                {
                    conversationId: v,
                    profile: x,
                    name: _
                } = e,
                M = (0, o.a)();
            g[0] !== x.categories ? (t = x.categories.find(N), g[0] = x.categories, g[1] = t) : t = g[1];
            let S = t,
                k = F(x.delivery_policy, i.b);
            g[2] !== x.returns_policy ? (r = F(x.returns_policy, i.d), g[2] = x.returns_policy, g[3] = r) : r = g[3];
            let A = r,
                P = (0, l.x)(b.a, v),
                T = (0, l.x)(p.c, v),
                O = x.display_name ?? _,
                L = P?.is_verified ?? null;
            g[4] !== L ? (u = (0, n.jsx)(C, {
                claimed: L
            }), g[4] = L, g[5] = u) : u = g[5], g[6] !== O || g[7] !== u ? (c = (0, n.jsxs)("h2", {
                className: "mb-1 text-card-title leading-7 font-medium break-words",
                children: [O, u]
            }), g[6] = O, g[7] = u, g[8] = c) : c = g[8], g[9] !== S ? (f = S ? (0, n.jsx)("div", {
                className: "text-base leading-5 font-normal break-words text-default",
                children: S
            }) : null, g[9] = S, g[10] = f) : f = g[10];
            let q = T?.shouldBlockExternalEgress,
                E = null == k && null == A ? null : (0, n.jsxs)("div", {
                    className: "divide-y divide-border border-t border-default",
                    children: [null != k ? (0, n.jsxs)(y.e, {
                        icon: (0, n.jsx)(d.a, {
                            asset: w.a
                        }),
                        children: ["none" === k.delivery ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.noDelivery",
                            defaultMessage: "Delivery unavailable",
                            description: "Merchant policy in the business sidebar when delivery is not offered"
                        }) : null, "paid" === k.delivery ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.paidDelivery",
                            defaultMessage: "Paid delivery",
                            description: "Merchant policy in the business sidebar when delivery costs are charged at checkout"
                        }) : null, "free" === k.delivery && "all_orders" === k.scope ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.freeDelivery",
                            defaultMessage: "Free delivery on all orders",
                            description: "Merchant policy in the business sidebar when all orders qualify for free delivery"
                        }) : null, "free" === k.delivery && "minimum_order" === k.scope ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.deliveryMinimum",
                            defaultMessage: "Free delivery over {amount}",
                            description: "Merchant policy in the business sidebar for free delivery above a minimum order amount; amount includes its currency",
                            values: {
                                amount: M.formatNumber(Number(k.minimum_order_amount), {
                                    style: "currency",
                                    currency: k.currency,
                                    minimumFractionDigits: 0,
                                    maximumFractionDigits: 20
                                })
                            }
                        }) : null]
                    }) : null, null != A ? (0, n.jsx)(y.e, {
                        icon: (0, n.jsx)(d.a, {
                            asset: j.a
                        }),
                        children: "none" === A.returns ? (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.noReturns",
                            defaultMessage: "Returns not accepted",
                            description: "Merchant policy in the business sidebar when returns are not accepted"
                        }) : (0, n.jsx)(s.a, {
                            id: "chatgpt.entity.businessProfile.returnWindow",
                            defaultMessage: "{kind, select, free {Free returns within {days, plural, one {# day} other {# days}} of delivery} other {Returns within {days, plural, one {# day} other {# days}} of delivery, fees apply}}",
                            description: "Merchant policy in the business sidebar showing the return window from delivery and whether return fees apply",
                            values: {
                                kind: A.returns,
                                days: A.window_days
                            }
                        })
                    }) : null]
                });
            return g[11] !== I || g[12] !== v || g[13] !== x.website_url || g[14] !== P || g[15] !== q || g[16] !== E ? (m = (0, n.jsx)(I, {
                conversationId: v,
                requiresConfirmation: q,
                status: P,
                websiteUrl: x.website_url,
                children: E
            }), g[11] = I, g[12] = v, g[13] = x.website_url, g[14] = P, g[15] = q, g[16] = E, g[17] = m) : m = g[17], g[18] !== m || g[19] !== c || g[20] !== f ? (h = (0, n.jsxs)(n.Fragment, {
                children: [c, f, m]
            }), g[18] = m, g[19] = c, g[20] = f, g[21] = h) : h = g[21], h
        }

        function N(e) {
            return e.trim().length > 0
        }

        function F(e, t) {
            if (null == e) return null;
            try {
                return t.safeParse(JSON.parse(e)).data ?? null
            } catch {
                return null
            }
        }
        r.d(t, {
            a: () => S,
            b: () => A
        })
    }),
    FRPb: (function(e, t, r) {
        var n = r("XnlH"),
            a = r("OWtl"),
            i = r("u6zN"),
            l = r("tZ3A"),
            o = r("MrGp"),
            s = r("WOVT"),
            u = r("TJEh");
        let c = (0, n.v)(a.a, e => null),
            d = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(c, e);
                if (null == n) return null;
                let a = r(o.K, e);
                return null != a && Object.values(a).some(e => null != e.message && (0, i.c)(e.message).some(e => {
                    let t = (0, u.c)(e);
                    if (null == t) return !1;
                    let r = ("string" == typeof e.name ? e.name : t.name).trim().toLowerCase();
                    return t.id === n.business.id || "" !== r && r === n.business.name.trim().toLowerCase()
                })) ? null : n.business
            }),
            f = (0, n.d)(a.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(l.e, e);
                if (null == n) return null;
                let a = r(o.K, e);
                return null != a && Object.values(a).some(e => null != e.message && (0, i.c)(e.message).some(e => null == e.layout && (0, s.c)(e)?.canonical_id === n.canonical_id)) ? null : n
            });

        function m(e) {
            return (t, r) => (0, l.g)(t, r, {
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
            a: () => m
        }, {
            b: c,
            c: f,
            d: d
        })
    }),
    wFiG: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("e0CE"),
            l = r("XnlH"),
            o = r("o0PZ"),
            s = r("zd8w"),
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
            let t, r, i = (0, a.c)(18),
                {
                    conversationId: d,
                    isTranscriptPending: f,
                    turnContext: p,
                    showClaimedBusinessTooltip: h
                } = e,
                g = void 0 !== f && f,
                b = void 0 !== h && h,
                v = (0, s.useContext)(c.a),
                y = (0, l.x)(j.e, d),
                w = (0, l.x)(j.b, d),
                C = (0, l.x)(j.d, d),
                M = (0, s.useContext)(x.a);
            if (w && !g) return null;
            let I = null;
            if (null != y && "restricted" !== v) {
                let e, t, r, a = `chatgpt:${d}`;
                i[0] !== a ? (e = (0, o.Le)(a), i[0] = a, i[1] = e) : e = i[1], i[2] !== y ? (t = [y], i[2] = y, i[3] = t) : t = i[3], i[4] !== e || i[5] !== t ? (r = (0, n.jsx)(m.a, {
                    conversationId: e,
                    images: t
                }), i[4] = e, i[5] = t, i[6] = r) : r = i[6], I = r
            } else if (C || g && w) {
                let e, t;
                i[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(u.a, {
                    className: "aspect-5/4",
                    "aria-hidden": "true",
                    variant: "prominent"
                }), i[7] = e) : e = i[7], i[8] !== M ? (t = (0, n.jsx)("div", {
                    className: "-mx-6 mb-5",
                    children: (0, n.jsx)("div", {
                        ref: M,
                        "data-entity-photos": !0,
                        children: e
                    })
                }), i[8] = M, i[9] = t) : t = i[9], I = t
            }
            return i[10] !== d || i[11] !== g || i[12] !== b || i[13] !== p ? (t = (0, n.jsx)(_, {
                conversationId: d,
                isTranscriptPending: g,
                turnContext: p,
                showClaimedBusinessTooltip: b
            }), i[10] = d, i[11] = g, i[12] = b, i[13] = p, i[14] = t) : t = i[14], i[15] !== I || i[16] !== t ? (r = (0, n.jsxs)(n.Fragment, {
                children: [I, t]
            }), i[15] = I, i[16] = t, i[17] = r) : r = i[17], r
        }

        function _(e) {
            let t, r, o, u, m = (0, a.c)(19),
                {
                    conversationId: x,
                    isTranscriptPending: j,
                    turnContext: w,
                    showClaimedBusinessTooltip: _
                } = e,
                C = void 0 !== j && j,
                M = void 0 !== _ && _,
                I = (0, l.y)(d.a),
                S = (0, s.useContext)(c.a),
                k = (0, l.x)(h.d, x),
                A = (0, l.x)(y.b, x),
                N = (0, l.x)(y.d, x),
                F = C ? A?.business : N,
                P = (0, l.x)(f.c, x),
                T = (0, l.x)(f.e, x),
                O = (0, l.x)(y.c, x),
                L = C ? T : O;
            if (null == F && null == L) return null;
            let q = k ? "restricted" : S,
                E = w ?? null;
            return m[0] !== x || m[1] !== P?.query || m[2] !== L ? (t = null != L && (0, n.jsx)(b.b, {
                conversationId: x,
                profile: L,
                name: P?.query
            }), m[0] = x, m[1] = P?.query, m[2] = L, m[3] = t) : t = m[3], m[4] !== F || m[5] !== A?.category || m[6] !== A?.messageId || m[7] !== A?.sourceConversationId || m[8] !== L || m[9] !== I || m[10] !== M ? (r = null == L && null != F && (0, n.jsx)(v.ChatGptLocalBusinessMetadata, {
                business: F,
                isOptimistic: !0,
                showClaimedBusinessTooltip: M,
                onAction: e => {
                    (0, g.b)(I, {
                        actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                        entityAffordance: e,
                        entityId: F.id.trim() || void 0,
                        entityCategory: A?.category ?? void 0,
                        messageId: A?.messageId,
                        assistantMessageId: A?.messageId,
                        conversationId: A?.sourceConversationId,
                        contentReferenceType: "entity_metadata",
                        surfaceLocation: i.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_SIDEBAR,
                        isGenui: !1
                    })
                }
            }), m[4] = F, m[5] = A?.category, m[6] = A?.messageId, m[7] = A?.sourceConversationId, m[8] = L, m[9] = I, m[10] = M, m[11] = r) : r = m[11], m[12] !== E || m[13] !== t || m[14] !== r ? (o = (0, n.jsxs)(p.b, {
                value: E,
                children: [t, r]
            }), m[12] = E, m[13] = t, m[14] = r, m[15] = o) : o = m[15], m[16] !== q || m[17] !== o ? (u = (0, n.jsx)(c.a, {
                value: q,
                children: o
            }), m[16] = q, m[17] = o, m[18] = u) : u = m[18], u
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
        var n = r("XnlH"),
            a = r("rKAs"),
            i = r("SqqO"),
            l = r("OWtl"),
            o = r("fzVa"),
            s = r("u6zN"),
            u = r("tZ3A"),
            c = r("MrGp"),
            d = r("rxj0"),
            f = r("TJEh"),
            m = r("FRPb");
        let p = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                return null != e && r(u.a, e) && null == r(m.b, e) && r(u.c, e)?.businessProfile == null ? r(c.ab, e) : null
            }),
            h = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t, n = r(m.b, e), l = r(c.K, e);
                return null != l && Object.values(l).some(t => null != t.message && (0, s.c)(t.message).some((t, l) => "image_group" === t.type && ("full_width" === t.layout || 0 === t.start_idx && (r(u.a, e) || (0, f.i)(n?.category ?? null))) && (!r(d.d, e) || (0, a.u)(t, l).some(e => !(0, i.d)(e.src)))))
            }),
            g = (0, n.d)(l.a, (e, t) => {
                let {
                    get: r
                } = t;
                if (null == e) return null;
                let n = r(m.b, e);
                if (r(d.d, e)) return null;
                let a = r(u.b, e),
                    i = null == n ? null : (0, f.f)(n.business),
                    l = a ?? (null == i ? null : {
                        id: i,
                        src: i,
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
                return (r(u.a, e) || null != r(m.b, e)) && (0, c.xb)(r(c.Y, e)) && !r(h, e) && null == r(g, e)
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
    vxGj: (function(e, t, r) {
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57");

        function l(e) {
            let t, r = (0, a.c)(9),
                {
                    count: l,
                    activeIndex: o,
                    getPageLabel: s,
                    onSelect: u
                } = e;
            if (r[0] !== o || r[1] !== l || r[2] !== s || r[3] !== u) {
                let e;
                r[5] !== o || r[6] !== s || r[7] !== u ? (e = (e, t) => (0, n.jsx)("button", {
                    className: "flex shrink-0 cursor-interaction items-center justify-center rounded-full p-0.75 focus-visible:ring-2 focus-visible:ring-ring",
                    type: "button",
                    "aria-current": t === o ? "true" : void 0,
                    "aria-label": s(t),
                    onClick: () => u(t),
                    children: (0, n.jsx)("span", {
                        className: (0, i.b)("pointer-events-none h-1 rounded-full bg-media-foreground transition-[width,opacity] duration-basic ease-out motion-reduce:transition-none", t === o ? "w-3 opacity-100" : "w-1 opacity-40")
                    })
                }, t), r[5] = o, r[6] = s, r[7] = u, r[8] = e) : e = r[8], t = (0, n.jsx)("div", {
                    className: "flex w-fit items-center justify-center rounded-full bg-media-scrim/40 bg-clip-padding p-0.75 backdrop-blur select-none",
                    children: Array.from({
                        length: l
                    }, e)
                }), r[0] = o, r[1] = l, r[2] = s, r[3] = u, r[4] = t
            } else t = r[4];
            return t
        }
        r.d(t, {
            a: () => l
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

        function o(e) {
            let t, r, o, u, c, d, f, m, p, h, g, b, v, y, x = (0, a.c)(30);
            x[0] !== e ? ({
                appearance: u,
                controlSize: c,
                children: t,
                className: r,
                iconOnly: d,
                ...o
            } = e, x[0] = e, x[1] = t, x[2] = r, x[3] = o, x[4] = u, x[5] = c, x[6] = d) : (t = x[1], r = x[2], o = x[3], u = x[4], c = x[5], d = x[6]);
            let j = void 0 === c ? "default" : c,
                w = void 0 !== d && d,
                _ = "blurred" === (void 0 === u ? "compact" : u);
            if (x[7] !== r || x[8] !== j || x[9] !== w || x[10] !== _ || x[11] !== o) {
                let e = (0, i.b)("h-6 !bg-media-background/45 !px-2 !py-0 !text-media-foreground enabled:hover:!bg-media-background/60", "rounded-full bg-media-background/45 font-medium text-media-foreground shadow-sm backdrop-blur-[12px]");
                _ && w ? e = (0, i.b)("group/gallery-action !bg-transparent !p-0 !text-media-foreground enabled:hover:!bg-transparent", "small" === j ? "size-9" : "size-10") : _ && (e = (0, i.b)("!bg-media-background/45 !px-3 !py-0 font-medium !text-media-foreground backdrop-blur-md enabled:hover:!bg-media-background/60 focus:!bg-media-background/60", "small" === j ? "h-9" : "h-10")), f = l.a, m = o, p = "secondary", h = _ ? "full" : "default", g = _ ? "default" : "icon", b = (0, i.b)(e, r), x[7] = r, x[8] = j, x[9] = w, x[10] = _, x[11] = o, x[12] = f, x[13] = m, x[14] = p, x[15] = h, x[16] = g, x[17] = b
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
    SUhA: (function(e, t, r) {
        var n = r("QosV"),
            a = r("irkb"),
            i = r("XnlH"),
            l = r("zd8w"),
            o = r("toag"),
            s = r("CBsD"),
            u = r("kfGJ"),
            c = r("gTKF"),
            d = r("zHp1");

        function f(e) {
            let t, r, f, m, p, h, g, b, v = (0, n.c)(39),
                {
                    src: y,
                    conversationId: x,
                    hostId: j,
                    imageAssetResolver: w,
                    shouldLoadFileDataUrl: _
                } = e,
                C = (0, a.c)(),
                M = (0, i.x)(o.K, x),
                I = j ?? M ?? u.a,
                S = (0, u.c)(I);
            v[0] !== x ? (t = null == x ? null : {
                kind: "app-server",
                conversationId: x
            }, v[0] = x, v[1] = t) : t = v[1];
            let k = (0, i.x)(c.threadExecutorTargetByThread$, t),
                A = k?.hostId === I ? k.environmentId : void 0,
                [N, F] = (0, l.useState)(null);
            v[2] !== y ? (r = y.trim(), v[2] = y, v[3] = r) : r = v[3];
            let P = r.length > 0,
                T = P && (0, d.f)(y) ? y : "",
                {
                    dataUrl: O,
                    src: L,
                    isError: q,
                    loadSource: E,
                    loadTiming: z,
                    eligibleForDirectUrl: D,
                    imageCacheHit: R,
                    isShowingCachedImage: G,
                    imageCheck: H,
                    refetch: B,
                    onImageError: W,
                    deleted: K
                } = (0, d.i)(T, w);
            v[4] !== P || v[5] !== S.id || v[6] !== S.kind || v[7] !== I || v[8] !== y ? (f = P ? (0, s.b)(y) : null, "local" === S.kind && S.id, m = null, v[4] = P, v[5] = S.id, v[6] = S.kind, v[7] = I, v[8] = y, v[9] = f, v[10] = m) : (f = v[9], m = v[10]);
            let Q = m,
                U = N?.src === y && N.environmentId === A ? N.dataUrl : null,
                Z = P ? L ?? Q ?? (null != f || T ? U : y) : null;
            v[11] !== f || v[12] !== x || v[13] !== Q || v[14] !== A || v[15] !== I || v[16] !== C || v[17] !== _ || v[18] !== y ? (p = () => {
                if (null == f || null != Q && !_) return;
                let e = !1;
                return F({
                    src: y,
                    dataUrl: null,
                    environmentId: A
                }), (0, s.e)(f, I, C, void 0, x, A).then(t => {
                    e || F({
                        src: y,
                        dataUrl: t,
                        environmentId: A
                    })
                }), () => {
                    e = !0
                }
            }, h = [f, x, Q, A, I, C, _, y], v[11] = f, v[12] = x, v[13] = Q, v[14] = A, v[15] = I, v[16] = C, v[17] = _, v[18] = y, v[19] = p, v[20] = h) : (p = v[19], h = v[20]), (0, l.useEffect)(p, h), v[21] !== O || v[22] !== U || v[23] !== y ? (g = O ?? U ?? (y.startsWith("data:image/") ? y : null), v[21] = O, v[22] = U, v[23] = y, v[24] = g) : g = v[24];
            let V = O ?? U ?? Z,
                X = !!T && q;
            return v[25] !== K || v[26] !== D || v[27] !== R || v[28] !== H || v[29] !== G || v[30] !== E || v[31] !== z || v[32] !== W || v[33] !== Z || v[34] !== B || v[35] !== g || v[36] !== V || v[37] !== X ? (b = {
                dataUrl: g,
                previewSrc: Z,
                downloadSrc: V,
                isError: X,
                loadSource: E,
                loadTiming: z,
                eligibleForDirectUrl: D,
                imageCacheHit: R,
                isShowingCachedImage: G,
                imageCheck: H,
                refetch: B,
                onImageError: W,
                deleted: K
            }, v[25] = K, v[26] = D, v[27] = R, v[28] = H, v[29] = G, v[30] = E, v[31] = z, v[32] = W, v[33] = Z, v[34] = B, v[35] = g, v[36] = V, v[37] = X, v[38] = b) : b = v[38], b
        }
        r.d(t, {
            a: () => f
        })
    }),
    jo5I: (function(e, t, r) {
        r.d(t, {
            a: () => I
        });
        var n = r("ABep"),
            a = r("QosV"),
            i = r("on57"),
            l = r("XnlH"),
            o = r("zd8w"),
            s = r("Wf1j"),
            u = r("oyxz"),
            c = r("ygO2"),
            d = r("bqtn"),
            f = r("HOLv"),
            m = r("bf6R"),
            p = r("CqQF"),
            h = r("Yq7Q"),
            g = r("Fmx8"),
            b = r("cZk2");
        let v = (0, r("Bbed").a)(async () => (await Promise.all([r.e(418851), r.e(109308), r.e(399565), r.e(257798), r.e(447351), r.e(617936), r.e(807489), r.e(337882), r.e(955979), r.e(646436), r.e(7078), r.e(200429), r.e(698524), r.e(956483), r.e(87162), r.e(396705), r.e(155568), r.e(731863), r.e(767086), r.e(76629), r.e(514085), r.e(204542), r.e(982651), r.e(673108), r.e(487481), r.e(596051)]).then(r.bind(r, "drqx"))).CreateLibraryFolderDialog, {
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
                    open: o,
                    onOpenChange: s,
                    onCloseAutoFocus: c,
                    failed: d
                } = e,
                f = void 0 !== d && d,
                m = !!o;
            return l[0] !== s ? (t = e => s?.(e), l[0] = s, l[1] = t) : t = l[1], l[2] !== f ? (r = f ? (0, n.jsx)(u.a, {
                id: "library.favoriteFolder.createLoadError",
                defaultMessage: "Couldn’t open New folder",
                description: "Title when downloading the Favorites folder creation dialog failed after retrying"
            }) : (0, n.jsx)(u.a, {
                id: "library.favoriteFolder.createLoading",
                defaultMessage: "Loading New folder…",
                description: "Title while downloading the dismissible Favorites folder creation dialog"
            }), l[2] = f, l[3] = r) : r = l[3], l[4] !== f || l[5] !== c || l[6] !== m || l[7] !== t || l[8] !== r ? (i = (0, n.jsx)(b.a, {
                open: m,
                onOpenChange: t,
                onCloseAutoFocus: c,
                failed: f,
                title: r
            }), l[4] = f, l[5] = c, l[6] = m, l[7] = t, l[8] = r, l[9] = i) : i = l[9], i
        }
        var j = r("IZUf"),
            w = r("Qxu5"),
            _ = r("bOiT"),
            C = r("IjJG");
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
            let t, r, m, h, b, v, x, M, I, F, P, T, O, L, q, E, z, D, R, G, H, B, W, K, Q, U, Z, V, X, $ = (0, a.c)(89),
                {
                    className: J,
                    appearance: Y,
                    visibility: ee,
                    isSaved: et,
                    isBusy: er,
                    isCheckingStatus: en,
                    selectedFolderId: ea,
                    onToggleFavorite: ei,
                    onSelectFolder: el
                } = e,
                eo = void 0 === Y ? "media-overlay" : Y,
                es = (0, l.y)(g.c),
                eu = (0, s.a)(),
                [ec, ed] = (0, o.useState)(!1),
                [ef, em] = (0, o.useState)(!1),
                [ep, eh] = (0, o.useState)(!1),
                [eg, eb] = (0, o.useState)(null),
                ev = (0, o.useRef)(null),
                ey = (0, o.useRef)(null),
                ex = er || en;
            $[0] !== eu ? (t = eu.formatMessage({
                id: "library.favoriteFolder.create",
                defaultMessage: "Create folder",
                description: "Button that opens the Library folder creation dialog for a saved item"
            }), $[0] = eu, $[1] = t) : t = $[1];
            let ej = t;
            if (en) {
                let e;
                $[2] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.checking",
                    defaultMessage: "Checking Favorites status",
                    description: "Accessible status for a bookmark while checking whether the item is already saved"
                }), $[2] = eu, $[3] = e) : e = $[3], r = e
            } else if (et) {
                let e;
                $[4] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.remove",
                    defaultMessage: "Remove from Favorites",
                    description: "Accessible label and tooltip for removing an item from Favorites"
                }), $[4] = eu, $[5] = e) : e = $[5], r = e
            } else {
                let e;
                $[6] !== eu ? (e = eu.formatMessage({
                    id: "library.favoriteFolder.add",
                    defaultMessage: "Add to Favorites",
                    description: "Accessible label for saving an item to Favorites and opening optional folder selection"
                }), $[6] = eu, $[7] = e) : e = $[7], r = e
            }
            $[8] !== ex || $[9] !== et || $[10] !== ei ? (m = () => {
                ex ? ed(!1) : (eh(!0), ed(!et), ei())
            }, $[8] = ex, $[9] = et, $[10] = ei, $[11] = m) : m = $[11];
            let ew = m;
            $[12] !== eo || $[13] !== J || $[14] !== et || $[15] !== ec || $[16] !== ee ? (h = (0, i.b)("select-none", "always" === ee || "entity-header" === eo || "map-card" === eo || et || ec ? "pointer-events-auto" : ["pointer-events-none opacity-0 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100", "product-card" === eo ? "group-hover/product-card:pointer-events-auto group-hover/product-card:opacity-100 group-has-focus-visible/product-card:pointer-events-auto group-has-focus-visible/product-card:opacity-100" : "group-hover/generated-image-preview:pointer-events-auto group-hover/generated-image-preview:opacity-100 group-has-focus-visible/generated-image-preview:pointer-events-auto group-has-focus-visible/generated-image-preview:opacity-100 group-hover/search-image:pointer-events-auto group-hover/search-image:opacity-100 group-has-focus-visible/search-image:pointer-events-auto group-has-focus-visible/search-image:opacity-100"], J), $[12] = eo, $[13] = J, $[14] = et, $[15] = ec, $[16] = ee, $[17] = h) : h = $[17];
            let e_ = ec ? "open" : "closed",
                eC = !!et && !ec && !ep && void 0;
            $[18] !== ef ? (b = e => {
                ef && e.preventDefault()
            }, $[18] = ef, $[19] = b) : b = $[19], $[20] === Symbol.for("react.memo_cache_sentinel") ? (v = e => {
                e || (ed(!1), eh(!0))
            }, $[20] = v) : v = $[20], $[21] === Symbol.for("react.memo_cache_sentinel") ? (x = e => {
                ev.current = e, eb(e?.closest(".codex-dialog") ?? null)
            }, $[21] = x) : x = $[21];
            let eM = ex || void 0,
                eI = ex && !ec || void 0,
                eS = !et || ec ? "menu" : void 0,
                ek = !et || ec ? ec : void 0;
            $[22] === Symbol.for("react.memo_cache_sentinel") ? (M = () => eh(!1), I = () => eh(!1), F = () => eh(!1), $[22] = M, $[23] = I, $[24] = F) : (M = $[22], I = $[23], F = $[24]), $[25] !== ew ? (P = e => {
                e.preventDefault(), e.stopPropagation(), ew()
            }, $[25] = ew, $[26] = P) : P = $[26], $[27] !== ex || $[28] !== et || $[29] !== ew ? (T = e => {
                !e.nativeEvent.isComposing && ["Enter", " ", "ArrowDown"].includes(e.key) && (e.preventDefault(), e.stopPropagation(), "ArrowDown" !== e.key ? ew() : ex || et || ed(!0))
            }, $[27] = ex, $[28] = et, $[29] = ew, $[30] = T) : T = $[30];
            let eA = et ? w.a : _.a;
            return $[31] !== eA ? (O = (0, n.jsx)(f.a, {
                asset: eA
            }), $[31] = eA, $[32] = O) : O = $[32], $[33] !== eo || $[34] !== et || $[35] !== r || $[36] !== eM || $[37] !== eI || $[38] !== eS || $[39] !== ek || $[40] !== P || $[41] !== T || $[42] !== O ? (L = (0, n.jsx)(A, {
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
                onBlur: F,
                onPointerDown: k,
                onClick: P,
                onKeyDown: T,
                children: O
            }), $[33] = eo, $[34] = et, $[35] = r, $[36] = eM, $[37] = eI, $[38] = eS, $[39] = ek, $[40] = P, $[41] = T, $[42] = O, $[43] = L) : L = $[43], $[44] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, n.jsx)("span", {
                className: "text-sm font-semibold",
                children: (0, n.jsx)(u.a, {
                    id: "library.favoriteFolder.moveToFolder",
                    defaultMessage: "Move to folder",
                    description: "Heading in the optional Library folder menu after saving an item to Favorites"
                })
            }), $[44] = q) : q = $[44], $[45] === Symbol.for("react.memo_cache_sentinel") ? (E = () => {
                ed(!1), em(!0)
            }, z = (0, n.jsx)(f.a, {
                asset: C.a
            }), $[45] = E, $[46] = z) : (E = $[45], z = $[46]), $[47] !== ex || $[48] !== ej ? (D = (0, n.jsx)(c.a, {
                ref: ey,
                "aria-label": ej,
                color: "ghostActive",
                size: "menuRow",
                uniform: !0,
                disabled: ex,
                onClick: E,
                children: z
            }), $[47] = ex, $[48] = ej, $[49] = D) : D = $[49], $[50] !== ex || $[51] !== D ? (R = (0, n.jsx)(d.c.ItemSlot, {
                asChild: !0,
                disabled: ex,
                children: D
            }), $[50] = ex, $[51] = D, $[52] = R) : R = $[52], $[53] !== ej || $[54] !== R ? (G = (0, n.jsxs)("div", {
                className: "flex h-9 shrink-0 items-center justify-between gap-2 px-3",
                children: [q, (0, n.jsx)(p.a, {
                    cloneCustomTrigger: !0,
                    tooltipContent: ej,
                    children: R
                })]
            }), $[53] = ej, $[54] = R, $[55] = G) : G = $[55], $[56] === Symbol.for("react.memo_cache_sentinel") ? (H = () => ey.current?.focus(), $[56] = H) : H = $[56], $[57] !== ex || $[58] !== el || $[59] !== ea ? (B = (0, n.jsx)("div", {
                className: "min-h-0 overflow-y-auto overscroll-contain pb-2",
                children: (0, n.jsx)(N, {
                    isBusy: ex,
                    selectedFolderId: ea,
                    onSelectFolder: el,
                    focusCreateFolder: H
                })
            }), $[57] = ex, $[58] = el, $[59] = ea, $[60] = B) : B = $[60], $[61] !== ec || $[62] !== eg || $[63] !== L || $[64] !== G || $[65] !== B || $[66] !== b ? (W = (0, n.jsxs)(d.a, {
                align: "end",
                contentClassName: "pointer-events-auto",
                contentWidth: "menuWide",
                contentMaxHeight: "tall",
                size: "select",
                portalContainer: eg,
                open: ec,
                onCloseAutoFocus: b,
                onOpenChange: v,
                triggerButton: L,
                children: [G, B]
            }), $[61] = ec, $[62] = eg, $[63] = L, $[64] = G, $[65] = B, $[66] = b, $[67] = W) : W = $[67], $[68] !== r || $[69] !== W || $[70] !== eC ? (K = (0, n.jsx)(p.a, {
                tooltipContent: r,
                open: eC,
                closeOnTriggerClick: !0,
                children: W
            }), $[68] = r, $[69] = W, $[70] = eC, $[71] = K) : K = $[71], $[72] !== et || $[73] !== K || $[74] !== h || $[75] !== e_ ? (Q = (0, n.jsx)("div", {
                className: h,
                "data-saved": et,
                "data-state": e_,
                children: K
            }), $[72] = et, $[73] = K, $[74] = h, $[75] = e_, $[76] = Q) : Q = $[76], $[77] === Symbol.for("react.memo_cache_sentinel") ? (U = e => {
                e.preventDefault(), ev.current?.focus()
            }, $[77] = U) : U = $[77], $[78] !== el || $[79] !== es.query ? (Z = async e => {
                await es.query.cancel(j.a);
                let t = !1;
                es.query.setData(j.a, r => (t = null == r, [...(r ?? []).filter(t => t.id !== e.id), {
                    ...e,
                    kind: "directory"
                }].sort(S))), t && es.query.invalidate(j.a), await el(e, !0)
            }, $[78] = el, $[79] = es.query, $[80] = Z) : Z = $[80], $[81] !== ef || $[82] !== es.value.accountId || $[83] !== es.value.userId || $[84] !== Z ? (V = (0, n.jsx)(y, {
                open: ef,
                accountId: es.value.accountId,
                userId: es.value.userId,
                directoryId: null,
                onOpenChange: em,
                onCloseAutoFocus: U,
                onCreated: Z
            }), $[81] = ef, $[82] = es.value.accountId, $[83] = es.value.userId, $[84] = Z, $[85] = V) : V = $[85], $[86] !== Q || $[87] !== V ? (X = (0, n.jsxs)(n.Fragment, {
                children: [Q, V]
            }), $[86] = Q, $[87] = V, $[88] = X) : X = $[88], X
        }

        function S(e, t) {
            return e.name.localeCompare(t.name)
        }

        function k(e) {
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
                ...M[t]
            }), l[3] = t, l[4] = r, l[5] = i) : i = l[5], i
        }

        function N(e) {
            let t, r, i = (0, a.c)(16),
                {
                    focusCreateFolder: o,
                    isBusy: s,
                    selectedFolderId: c,
                    onSelectFolder: f
                } = e,
                {
                    data: p,
                    isPending: h,
                    isError: g,
                    refetch: b
                } = (0, l.z)(j.a);
            if (h) {
                let e;
                return i[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(u.a, {
                        id: "library.favoriteFolder.loading",
                        defaultMessage: "Loading folders…",
                        description: "Status in the favorite folder menu while personal Library folders load"
                    })
                }), i[0] = e) : e = i[0], e
            }
            if (g && null == p) {
                let e, t, r, a;
                return i[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.c.Message, {
                    role: "alert",
                    tone: "error",
                    children: (0, n.jsx)(u.a, {
                        id: "library.favoriteFolder.failed",
                        defaultMessage: "Could not load folders",
                        description: "Error in the favorite folder menu; the user can retry loading folders"
                    })
                }), i[1] = e) : e = i[1], i[2] !== o || i[3] !== b ? (t = e => {
                    e.preventDefault(), o(), b()
                }, i[2] = o, i[3] = b, i[4] = t) : t = i[4], i[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, n.jsx)(u.a, {
                    id: "library.favoriteFolder.retry",
                    defaultMessage: "Try again",
                    description: "Action that retries loading Library folders while keeping the favorite folder menu open"
                }), i[5] = r) : r = i[5], i[6] !== t ? (a = (0, n.jsxs)(n.Fragment, {
                    children: [e, (0, n.jsx)(d.c.Item, {
                        onSelect: t,
                        children: r
                    })]
                }), i[6] = t, i[7] = a) : a = i[7], a
            }
            if (p?.length === 0) {
                let e;
                return i[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(d.c.Message, {
                    role: "status",
                    children: (0, n.jsx)(u.a, {
                        id: "library.favoriteFolder.empty",
                        defaultMessage: "No folders created yet",
                        description: "Empty state in the favorite folder menu; Create folder is still available"
                    })
                }), i[8] = e) : e = i[8], e
            }
            return i[9] !== p || i[10] !== s || i[11] !== f || i[12] !== c ? (t = p?.map(e => (0, n.jsx)(d.c.Item, {
                role: "menuitemcheckbox",
                "aria-checked": c === e.id,
                isActive: c === e.id,
                disabled: s,
                onSelect: () => void f({
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
                    }), (0, n.jsx)(m.Tb, {
                        className: c === e.id ? void 0 : "invisible"
                    })]
                })
            }, e.id)), i[9] = p, i[10] = s, i[11] = f, i[12] = c, i[13] = t) : t = i[13], i[14] !== t ? (r = (0, n.jsx)(n.Fragment, {
                children: t
            }), i[14] = t, i[15] = r) : r = i[15], r
        }

        function F(e) {
            let t, r, l, s = (0, a.c)(8),
                {
                    imageUrl: u
                } = e,
                [c, d] = (0, o.useState)(null),
                f = null != u && u !== c,
                p = !f && "border border-default bg-surface";
            return s[0] !== p ? (t = (0, i.b)("flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-lg", p), s[0] = p, s[1] = t) : t = s[1], s[2] !== u || s[3] !== f ? (r = f ? (0, n.jsx)("img", {
                alt: "",
                className: "size-full object-cover",
                loading: "lazy",
                src: u,
                onError: () => d(u)
            }) : (0, n.jsx)(m.ud, {}), s[2] = u, s[3] = f, s[4] = r) : r = s[4], s[5] !== t || s[6] !== r ? (l = (0, n.jsx)("span", {
                "aria-hidden": "true",
                className: t,
                children: r
            }), s[5] = t, s[6] = r, s[7] = l) : l = s[7], l
        }
    }),
    IZUf: (function(e, t, r) {
        var n = r("XnlH"),
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
        async function o(e, t, r) {
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
            b: () => o
        }, {
            a: l
        })
    }),
    v1r0: (function(e, t, r) {
        var n = r("ASxG");
        let a = n.strictObject({
                version: n.literal(1),
                delivery: n.enum(["none", "paid"])
            }),
            i = n.strictObject({
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
            u = n.union([a, i, l.extend({
                minimum_order_amount: n.string().regex(/^(?:\d+(?:\.\d*)?|\.\d+)$/).refine(e => Number.isFinite(Number(e)) && Number(e) > 0),
                currency: n.string().regex(/^[A-Z]{3}$/)
            })]),
            c = n.union([o, s.extend({
                window_days: n.number().int().positive()
            })]),
            d = n.union([n.strictObject({
                version: n.literal(1),
                delivery: n.null()
            }), a, i, n.strictObject({
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
            b: u,
            c: f,
            d: c
        })
    })
};