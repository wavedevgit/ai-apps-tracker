export const __rspack_esm_id = 587936;
export const __rspack_esm_ids = [587936];
export const __webpack_modules__ = {
    q73v: (function(e, t) {
        t.a = {
            widget: "widget-excfHd",
            frame: "frame-jj9wM2",
            viewport: "viewport-NxODVD",
            marker: "marker-mNXBu7",
            business: "business-XlicwG",
            pinContent: "pinContent-_vtxB4",
            label: "label-tyCeio",
            markerContainer: "markerContainer-lVmL5L",
            attribution: "attribution-fipj_L"
        }
    }),
    autk: (function(e, t) {
        t.a = {
            results: "results-qLgUrv",
            card: "card-Zug7_a",
            fullscreen: "fullscreen-TskD9F",
            item: "item-gCB5MY"
        }
    }),
    K1wx: (function(e, t, n) {
        var a = n("Bbed"),
            r = n("j8Yf");
        let l = (0, a.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(447351), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(636463), n.e(669998), n.e(477144), n.e(851888), n.e(909395), n.e(899923), n.e(24689), n.e(729227), n.e(674763), n.e(305863)]).then(n.bind(n, "kHcj"))).ChatGptEntityContentReference, {
            errorFallback: r.b
        });
        n.d(t, {}, {
            a: l
        })
    }),
    j8Yf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("rKAs"),
            s = n("JQAz"),
            i = n("rVvC"),
            o = n("zSQm"),
            u = n("KDax");

        function c(e) {
            let t = (0, r.c)(7),
                {
                    isTerminalInline: n,
                    reference: s
                } = e;
            switch ((0, l.i)(s)) {
                case "inline": {
                    let e;
                    return t[0] !== n || t[1] !== s ? (e = (0, a.jsx)(d, {
                        isTerminalInline: n,
                        reference: s
                    }), t[0] = n, t[1] = s, t[2] = e) : e = t[2], e
                }
                case "block": {
                    let e;
                    return t[3] !== s ? (e = (0, a.jsx)(m, {
                        reference: s
                    }), t[3] = s, t[4] = e) : e = t[4], e
                }
                case "alt": {
                    let e;
                    return t[5] !== s ? (e = (0, a.jsx)(f, {
                        reference: s
                    }), t[5] = s, t[6] = e) : e = t[6], e
                }
                case "hidden":
                    return null
            }
        }

        function d(e) {
            let t, n, o, u, c = (0, r.c)(18),
                {
                    isTerminalInline: d,
                    reference: m
                } = e,
                p = m.alt;
            if ("alt_text" === m.type && "latex" === m.render_as && "string" == typeof p && p.trim().length > 0) {
                let e, t;
                c[0] !== p ? (e = p.trim(), c[0] = p, c[1] = e) : e = c[1];
                let n = e;
                return c[2] !== n ? (t = (0, a.jsx)(i.b, {
                    token: {
                        display: !1,
                        raw: n,
                        text: n,
                        type: "math"
                    }
                }, "chatgpt-latex-alt-text"), c[2] = n, c[3] = t) : t = c[3], t
            }
            c[4] !== m ? (t = (0, l.p)(m), c[4] = m, c[5] = t) : t = c[5];
            let g = t;
            c[6] !== m ? (n = (0, l.o)(m), c[6] = m, c[7] = n) : n = c[7];
            let h = n;
            if (null == h) {
                let e;
                return c[8] !== m ? (e = (0, a.jsx)(f, {
                    reference: m
                }), c[8] = m, c[9] = e) : e = c[9], e
            }
            if (null == g) {
                let e;
                return c[10] !== h ? (e = (0, a.jsx)("span", {
                    className: "text-secondary",
                    children: h
                }), c[10] = h, c[11] = e) : e = c[11], e
            }
            return c[12] !== h || c[13] !== g ? (o = {
                label: h,
                title: h,
                url: g
            }, c[12] = h, c[13] = g, c[14] = o) : o = c[14], c[15] !== d || c[16] !== o ? (u = (0, a.jsx)(s.a, {
                attributes: o,
                isTerminalInline: d
            }), c[15] = d, c[16] = o, c[17] = u) : u = c[17], u
        }

        function m(e) {
            let t, n, s, i, u, c, d, m, f, h, x, b, y, v = (0, r.c)(37),
                {
                    reference: _
                } = e;
            v[0] !== _ ? (t = (0, l.o)(_), v[0] = _, v[1] = t) : t = v[1];
            let I = t;
            v[2] !== _ ? (n = (0, l.n)(_), v[2] = _, v[3] = n) : n = v[3];
            let w = n;
            v[4] !== _ ? (s = (0, l.j)(_), v[4] = _, v[5] = s) : s = v[5];
            let j = s;
            if (v[6] !== j || v[7] !== _ || v[8] !== w || v[9] !== I) {
                u = Symbol.for("react.early_return_sentinel");
                e: {
                    var C;
                    let e, t = (Array.isArray((C = _).items) ? C.items : []).map(e => {
                        if (null == e || "object" != typeof e) return null;
                        let t = "title" in e ? e.title : null,
                            n = "name" in e ? e.name : null;
                        return "string" == typeof t && t.trim().length > 0 ? t : "string" == typeof n && n.trim().length > 0 ? n : null
                    }).filter(e => null != e).slice(0, 4);
                    if (null == I && null == w && null == j && 0 === t.length) {
                        u = null;
                        break e
                    }
                    if (v[18] !== _) {
                        let t = (0, l.p)(_);
                        e = null == t ? null : (0, o.a)(t), v[18] = _, v[19] = e
                    } else e = v[19];i = e,
                    c = "my-3 max-w-[36rem] rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default",
                    d = "chatgpt-content-reference-card",
                    v[20] !== I ? (m = null == I ? null : (0, a.jsx)("div", {
                        className: "font-medium text-default",
                        children: I
                    }), v[20] = I, v[21] = m) : m = v[21],
                    v[22] !== w ? (f = null == w ? null : (0, a.jsx)("div", {
                        className: "mt-1 line-clamp-2 text-secondary",
                        children: w
                    }), v[22] = w, v[23] = f) : f = v[23],
                    v[24] !== j || v[25] !== I ? (h = null == j || j === I ? null : (0, a.jsx)("div", {
                        className: "mt-1 line-clamp-2 text-secondary",
                        children: j
                    }), v[24] = j, v[25] = I, v[26] = h) : h = v[26],
                    x = 0 === t.length ? null : (0, a.jsx)("div", {
                        className: "mt-2 flex flex-col gap-1",
                        children: t.map(p)
                    })
                }
                v[6] = j, v[7] = _, v[8] = w, v[9] = I, v[10] = i, v[11] = u, v[12] = c, v[13] = d, v[14] = m, v[15] = f, v[16] = h, v[17] = x
            } else i = v[10], u = v[11], c = v[12], d = v[13], m = v[14], f = v[15], h = v[16], x = v[17];
            if (u !== Symbol.for("react.early_return_sentinel")) return u;
            v[27] !== c || v[28] !== d || v[29] !== m || v[30] !== f || v[31] !== h || v[32] !== x ? (b = (0, a.jsxs)("div", {
                className: c,
                "data-testid": d,
                children: [m, f, h, x]
            }), v[27] = c, v[28] = d, v[29] = m, v[30] = f, v[31] = h, v[32] = x, v[33] = b) : b = v[33];
            let N = b;
            return null == i ? N : (v[34] !== N || v[35] !== i ? (y = (0, a.jsx)(g, {
                href: i,
                children: N
            }), v[34] = N, v[35] = i, v[36] = y) : y = v[36], y)
        }

        function p(e, t) {
            return (0, a.jsx)("div", {
                className: "truncate",
                children: e
            }, `${e}-${String(t)}`)
        }

        function f(e) {
            let t, n, s = (0, r.c)(4),
                {
                    reference: i
                } = e;
            s[0] !== i ? (t = (0, l.j)(i), s[0] = i, s[1] = t) : t = s[1];
            let o = t;
            return s[2] !== o ? (n = null == o ? null : (0, a.jsx)(a.Fragment, {
                children: o
            }), s[2] = o, s[3] = n) : n = s[3], n
        }

        function g(e) {
            let t, n = (0, r.c)(3),
                {
                    children: l,
                    href: s
                } = e;
            return n[0] !== l || n[1] !== s ? (t = (0, a.jsx)(u.a, {
                className: "block max-w-fit cursor-interaction rounded-lg no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring",
                href: s,
                initiator: "markdown_link_click",
                children: l
            }), n[0] = l, n[1] = s, n[2] = t) : t = n[2], t
        }
        n.d(t, {
            a: () => f,
            b: () => c,
            c: () => m,
            d: () => d
        })
    }),
    jFKl: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("on57"),
            s = n("zd8w"),
            i = n("Wf1j"),
            o = n("oyxz"),
            u = n("ygO2"),
            c = n("HOLv"),
            d = n("bf6R"),
            m = n("KDax"),
            p = n("q73v"),
            f = n("sEyd");

        function g(e) {
            let t, n, m, g, x, b, y, v = (0, r.c)(21),
                {
                    isFullscreen: _,
                    openTarget: I
                } = e,
                [w, j] = (0, s.useState)(!1),
                C = (0, i.a)(),
                N = _ ? "absolute start-3 bottom-3" : "me-3 mb-3 self-end";
            v[0] !== N ? (t = (0, l.b)(p.a.attribution, "pointer-events-auto z-20 flex items-center overflow-hidden rounded-full bg-surface text-[10px] font-light whitespace-nowrap text-default", N), v[0] = N, v[1] = t) : t = v[1], v[2] !== C ? (n = C.formatMessage({
                id: "chatgpt.contentReferences.map.attribution.toggle",
                defaultMessage: "Map attribution",
                description: "Accessible label of the map information button that shows or hides attribution links"
            }), v[2] = C, v[3] = n) : n = v[3];
            let M = _ ? "ghostActive" : "mapSurface";
            return v[4] !== w ? (m = () => j(!w), v[4] = w, v[5] = m) : m = v[5], v[6] !== w ? (g = w ? (0, a.jsx)(d.aj, {}) : (0, a.jsx)(c.a, {
                asset: f.a
            }), v[6] = w, v[7] = g) : g = v[7], v[8] !== w || v[9] !== n || v[10] !== M || v[11] !== m || v[12] !== g ? (x = (0, a.jsx)(u.a, {
                "aria-label": n,
                "aria-expanded": w,
                color: M,
                onClick: m,
                radius: "full",
                size: "iconCircleSm",
                children: g
            }), v[8] = w, v[9] = n, v[10] = M, v[11] = m, v[12] = g, v[13] = x) : x = v[13], v[14] !== w || v[15] !== I ? (b = w ? (0, a.jsxs)("div", {
                className: "pe-2",
                children: [(0, a.jsx)("span", {
                    "aria-hidden": !0,
                    children: "© "
                }), (0, a.jsx)(h, {
                    href: "https://www.mapbox.com/about/maps",
                    openTarget: I,
                    children: "Mapbox"
                }), (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    children: " "
                }), (0, a.jsx)(h, {
                    href: "https://www.mapbox.com/legal/end-user-terms",
                    openTarget: I,
                    children: (0, a.jsx)(o.a, {
                        id: "chatgpt.contentReferences.map.attribution.terms",
                        defaultMessage: "Terms",
                        description: "Link to Mapbox's terms of service in map attribution"
                    })
                }), (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    children: " © "
                }), (0, a.jsx)(h, {
                    href: "http://www.openstreetmap.org/about",
                    openTarget: I,
                    children: "OpenStreetMap"
                })]
            }) : null, v[14] = w, v[15] = I, v[16] = b) : b = v[16], v[17] !== t || v[18] !== x || v[19] !== b ? (y = (0, a.jsxs)("div", {
                className: t,
                children: [x, b]
            }), v[17] = t, v[18] = x, v[19] = b, v[20] = y) : y = v[20], y
        }

        function h(e) {
            let t, n = (0, r.c)(4),
                {
                    children: l,
                    href: s,
                    openTarget: i
                } = e;
            return n[0] !== l || n[1] !== s || n[2] !== i ? (t = (0, a.jsx)(m.a, {
                className: "cursor-interaction underline decoration-current underline-offset-2 hover:text-default",
                href: s,
                initiator: "markdown_link_click",
                openTarget: i,
                children: l
            }), n[0] = l, n[1] = s, n[2] = i, n[3] = t) : t = n[3], t
        }
        n.d(t, {
            a: () => g,
            b: () => h
        })
    }),
    b2ei: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("EP90"),
            s = n("LeoU"),
            i = n("TKij"),
            o = n("FER9"),
            u = n("iodE"),
            c = n("rKAs"),
            d = n("Qgfj"),
            m = n("HOLv"),
            p = n("K1wx"),
            f = n("TUMj"),
            g = n("TJEh"),
            h = n("q73v");
        let x = RegExp(`^(?:${(0,o.a)().source})$`, "u");

        function b(e) {
            let t, n, o, b, y, v, _, I = (0, r.c)(55),
                {
                    contentReferenceIndex: w,
                    isProvisional: j,
                    isSelected: C,
                    mapContextLabel: N,
                    onOpenEntity: M,
                    place: S,
                    presentation: R,
                    previewPortalContainer: T,
                    stopNumber: E,
                    notesClassName: k
                } = e,
                A = void 0 !== C && C,
                P = (0, f.d)(),
                L = (0, u.a)();
            I[0] !== S.id || I[1] !== S.name || I[2] !== P?.contentReferences ? (t = P?.contentReferences.findIndex(e => {
                if ("entity" !== e.type) return !1;
                let t = (0, g.d)(e, "string" == typeof e.category ? e.category : (0, c.t)(e)?.category ?? null);
                return "string" == typeof S.id ? t?.id === S.id : e.name === S.name
            }) ?? -1, I[0] = S.id, I[1] = S.name, I[2] = P?.contentReferences, I[3] = t) : t = I[3];
            let O = t;
            I[4] !== w || I[5] !== O || I[6] !== S || I[7] !== P?.contentReferences ? (n = P?.contentReferences[O] ?? {
                category: S.category ?? "local_business",
                entity_data: S,
                extra_params: S.extra_params,
                name: S.name,
                start_idx: P?.contentReferences[w]?.start_idx,
                status: "done",
                type: "entity"
            }, I[4] = w, I[5] = O, I[6] = S, I[7] = P?.contentReferences, I[8] = n) : n = I[8];
            let D = n;
            I[9] !== S ? (o = g.a.safeParse(S), I[9] = S, I[10] = o) : o = I[10];
            let G = o,
                F = i.a;
            if (null == S.rating && (F = "local_business" === D.category ? l.a : s.a), I[11] !== F || I[12] !== S.mapIcon || I[13] !== S.rating || I[14] !== E) {
                let e = function(e) {
                    let t = e?.trim();
                    if (t && (x.test(t) || !(Array.from(t).length > 8 || /^\p{L}$/u.test(t)))) return t
                }("string" == typeof S.mapIcon ? S.mapIcon : null);
                if (e) {
                    let t, n = x.test(e) ? "text-sm" : void 0;
                    I[16] !== e || I[17] !== n ? (t = (0, a.jsx)("span", {
                        className: n,
                        children: e
                    }), I[16] = e, I[17] = n, I[18] = t) : t = I[18], b = t
                } else if (null != E) {
                    let e;
                    I[19] !== E ? (e = (0, a.jsx)(d.c, {
                        value: E
                    }), I[19] = E, I[20] = e) : e = I[20], b = e
                } else {
                    let e, t, n;
                    I[21] !== F ? (e = (0, a.jsx)(m.a, {
                        asset: F
                    }), I[21] = F, I[22] = e) : e = I[22], I[23] !== S.rating ? (t = null != S.rating ? (0, a.jsx)(d.c, {
                        value: S.rating,
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 1
                    }) : null, I[23] = S.rating, I[24] = t) : t = I[24], I[25] !== e || I[26] !== t ? (n = (0, a.jsxs)(a.Fragment, {
                        children: [e, t]
                    }), I[25] = e, I[26] = t, I[27] = n) : n = I[27], b = n
                }
                I[11] = F, I[12] = S.mapIcon, I[13] = S.rating, I[14] = E, I[15] = b
            } else b = I[15];
            let B = "marker" === R ? S.longitude : void 0,
                z = "marker" === R ? S.latitude : void 0;
            return I[28] !== G || I[29] !== w || I[30] !== O || I[31] !== L || I[32] !== N || I[33] !== k || I[34] !== M || I[35] !== b || I[36] !== S.mapCarouselCard || I[37] !== S.mapLabel || I[38] !== S.name || I[39] !== S.notes || I[40] !== R || I[41] !== T || I[42] !== D || I[43] !== P ? (y = null != P && ("marker" !== R || L) ? (0, a.jsx)(p.a, {
                businessPreview: G.success ? G.data : void 0,
                contentReferenceIndex: O < 0 ? w : O,
                displayName: "marker" === R ? (0, a.jsx)("span", {
                    className: h.a.pinContent,
                    children: b
                }) : void 0,
                mapCarouselCard: S.mapCarouselCard,
                mapContextLabel: N,
                mapLabel: "string" == typeof S.mapLabel ? S.mapLabel : void 0,
                mapNotes: "string" == typeof S.notes ? S.notes : void 0,
                mapNotesClassName: k,
                onOpenEntity: M,
                previewPortalContainer: T,
                reference: D,
                turnContext: P,
                variant: "marker" === R ? "map-marker" : "map-card"
            }) : (0, a.jsx)("div", {
                className: h.a.marker,
                "aria-label": S.name,
                role: "img",
                children: "marker" === R ? (0, a.jsx)("span", {
                    className: h.a.pinContent,
                    children: b
                }) : S.name
            }), I[28] = G, I[29] = w, I[30] = O, I[31] = L, I[32] = N, I[33] = k, I[34] = M, I[35] = b, I[36] = S.mapCarouselCard, I[37] = S.mapLabel, I[38] = S.name, I[39] = S.notes, I[40] = R, I[41] = T, I[42] = D, I[43] = P, I[44] = y) : y = I[44], I[45] !== S.name || I[46] !== R ? (v = "marker" === R ? (0, a.jsx)("span", {
                className: h.a.label,
                "data-map-label-blocker": "",
                "aria-hidden": !0,
                children: S.name
            }) : null, I[45] = S.name, I[46] = R, I[47] = v) : v = I[47], I[48] !== j || I[49] !== A || I[50] !== B || I[51] !== z || I[52] !== y || I[53] !== v ? (_ = (0, a.jsxs)("div", {
                className: h.a.business,
                "data-provisional": j,
                "data-selected": A,
                "data-map-marker-longitude": B,
                "data-map-marker-latitude": z,
                children: [y, v]
            }), I[48] = j, I[49] = A, I[50] = B, I[51] = z, I[52] = y, I[53] = v, I[54] = _) : _ = I[54], _
        }
        n.d(t, {
            a: () => b
        })
    }),
    xhWJ: (function(e, t, n) {
        var a = n("e0CE"),
            r = n("qmuW"),
            l = n("rKAs"),
            s = n("AuIy"),
            i = n("Wc42"),
            o = n("MrGp"),
            u = n("xof2"),
            c = n("RgGw"),
            d = n("DUJs");

        function m(e) {
            return (0, i.a)(e.entity_lookup_id) ?? (0, i.a)(e.extra_params?.entity_lookup_id) ?? (0, i.a)(e.id) ?? void 0
        }

        function p(e, t, n, m, p) {
            let {
                turnContext: f
            } = t, g = (0, i.a)(n.id) ?? void 0, h = t.reference;
            if (null != g) {
                let e = e => [...(0, l.v)(e, (0, d.a)(e, f)), ...(0, c.a)(e)].some(e => e.id === g);
                h = (null != h && e(h) ? h : void 0) ?? f.contentReferences.find(e) ?? f.contentReferences.find(e => "entity" === e.type && (0, s.o)(e.entity_data)?.id === g) ?? t.reference
            }
            let x = null == h ? -1 : f.contentReferences.indexOf(h),
                b = f.contentReferenceMessageIds?.[x] ?? (h === t.reference ? t.mapMessageId : void 0) ?? f.messageId,
                y = null == b ? void 0 : e.get(o.K, f.conversationId)?.[b]?.message?.metadata;
            (0, u.b)(e, {
                actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                entityAffordance: "marker" === m ? a.d.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER : a.d.CHATGPT_ENTITY_AFFORDANCE_MAP_LIST,
                entityId: g,
                entityCategory: (0, i.a)(n.category) ?? "local_business",
                conversationId: f.browserConversationId ?? f.conversationId,
                messageId: b,
                assistantMessageId: f.messageId ?? b,
                contentReferenceStartIndex: "number" == typeof h?.start_idx ? (0, r.a)(h.start_idx) : void 0,
                contentReferenceType: h?.type === "client_defined_widget" ? "map" : (0, i.a)(h?.type) ?? void 0,
                surfaceLocation: p,
                isGenui: h?.type === "client_defined_widget" && "map" === h.category || (0, s.o)((0, s.o)(y?.model_dil)?.dil)?.type != null || y?.model_dil_v2 != null || y?.genui_refresh != null
            })
        }
        n.d(t, {
            a: () => m,
            b: () => p
        })
    }),
    RgGw: (function(e, t, n) {
        var a = n("rKAs"),
            r = n("sqog");

        function l(e) {
            return "string" == typeof e.id ? e.id : e.name
        }

        function s(e) {
            return "string" == typeof e.mapEntityId ? e.mapEntityId : l(e)
        }

        function i(e, t) {
            if (null == t) return null;
            let n = e.find(e => s(e) === s(t)) ?? e.find(e => l(e) === l(t));
            return null == n ? null : s(n)
        }

        function o(e) {
            if ("client_defined_widget" === e.type) return [];
            let t = new Set((0, a.v)(e).map(l));
            return (0, a.v)({
                ...e,
                entities: e.raw_search_entities
            }).filter(e => {
                let n = l(e);
                return !t.has(n) && (t.add(n), !0)
            })
        }

        function u(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.a)(e);
            if (null == t) {
                let t = r.f.safeParse(e.route),
                    n = t.success ? t.data : null;
                return null == n ? [] : [{
                    key: "route",
                    pointIds: (0, a.v)(e).map(s),
                    route: n
                }]
            }
            let n = t.groups?.map((e, n) => {
                let a = new Set,
                    l = e.locations.flatMap(e => e.point_id ? [e.point_id] : []),
                    s = m(e.route, l),
                    i = e.locations.map((e, n) => {
                        let l = e.point_id?.trim();
                        if (l) return l;
                        let i = t.points.findIndex((t, n) => t.name === e.name && !a.has(n)),
                            o = -1 === i ? t.points.findIndex(t => t.name === e.name) : i;
                        return -1 !== o && a.add(o), (-1 === o ? void 0 : (0, r.d)(t.points[o], o)) || s[n] || e.name.trim()
                    }),
                    o = new Map;
                return e.locations.forEach((e, t) => {
                    let n = e.notes?.trim();
                    n && o.set(t, n)
                }), {
                    key: e.id?.trim() || `group-${n}`,
                    dayNumber: e.day_number,
                    title: e.title,
                    pointIds: i,
                    notesByVisitIndex: o,
                    route: e.route,
                    alternativeRoutes: e.alternative_routes
                }
            });
            return null != n && n.length > 0 && (n.some(e => null != e.route) || null == t.route) ? n : null == t.route ? [] : [{
                key: "route",
                pointIds: t.points.map(r.d),
                route: t.route,
                alternativeRoutes: t.alternative_routes
            }]
        }

        function c(e, t) {
            var n, a;
            let r, i, o, u, c = new Set,
                d = e.filter(e => {
                    let n = null == t ? l(e) : s(e);
                    return !c.has(n) && (c.add(n), !0)
                });
            if (null == t) return d;
            let p = (o = (r = m((a = n = t).route, a.pointIds), i = new Set(a.pointIds.keys()), r.flatMap(e => {
                let t = f(e),
                    n = a.pointIds.findIndex((e, n) => i.has(n) && f(e).some(e => t.includes(e)));
                return -1 === n ? [] : (i.delete(n), [n])
            })), u = new Set(n.pointIds.keys()), o.forEach(e => u.delete(e)), [...o, ...u].map(e => ({
                pointId: n.pointIds[e],
                visitIndex: e
            })));
            if (0 === p.length) return d;
            let g = new Map(d.map(e => [s(e), e]));
            return p.flatMap(e => {
                let {
                    pointId: n,
                    visitIndex: a
                } = e, r = f(n).map(e => g.get(e)).find(e => null != e);
                if (null == r) return [];
                let l = t.notesByVisitIndex?.get(a);
                return [null == l ? r : {
                    ...r,
                    notes: l
                }]
            })
        }

        function d(e) {
            let t = new Map,
                n = 1;
            for (let a of e)
                if (null != a.route)
                    for (let e of m(a.route, a.pointIds)) {
                        let r = f(e),
                            l = r.map(e => t.get(e)).find(e => null != e) ?? {
                                number: n,
                                routed: !1
                            };
                        for (let e of (n++, l.routed = l.routed || null != a.route, r)) t.set(e, l)
                    }
            return new Map([...t].flatMap(e => {
                let [t, n] = e;
                return n.routed ? [
                    [t, n.number]
                ] : []
            }))
        }

        function m(e, t) {
            if (null == e || 0 === e.legs.length) return t;
            let n = [];
            return e.legs.forEach((e, a) => {
                let r = e.from_point_id ?? t[a],
                    l = e.to_point_id ?? t[a + 1],
                    s = n.at(-1);
                null != r && (null == s || g(s) !== g(r)) && n.push(r), null != l && n.push(l)
            }), n
        }

        function p(e, t, n) {
            let a = s(e[t]),
                r = e.slice(0, t).filter(e => s(e) === a).length;
            return n.findIndex(e => f(e).includes(a) && 0 == r--)
        }

        function f(e) {
            let t = g(e),
                n = /^point-(\d+)$/.exec(t);
            return null == n ? [e] : [t, `genui-map-point-${n[1]}`]
        }

        function g(e) {
            return e.replace(/^genui-map-point-(\d+)$/, "point-$1")
        }
        n.d(t, {
            a: () => o,
            b: () => l,
            c: () => i,
            d: () => s,
            e: () => c,
            f: () => u,
            g: () => m,
            h: () => p,
            i: () => d
        })
    }),
    F0zR: (function(e, t, n) {
        function a(e, t) {
            if (null == t) return null;
            let n = Math.max(1, Math.round(t / 60));
            if (n <= 60) return e.formatNumber(n, {
                style: "unit",
                unit: "minute",
                unitDisplay: "short"
            });
            let a = [];
            for (let [t, r] of [
                    ["week", 10080],
                    ["day", 1440],
                    ["hour", 60],
                    ["minute", 1]
                ]) {
                let l = Math.floor(n / r);
                if (0 !== l && (a.push(e.formatNumber(l, {
                        style: "unit",
                        unit: t,
                        unitDisplay: "minute" === t ? "short" : "long"
                    })), n %= r, 2 === a.length)) break
            }
            return e.formatList(a, {
                type: "unit",
                style: "short"
            })
        }
        n.d(t, {
            a: () => a
        })
    }),
    ry7c: (function(e, t, n) {
        n.d(t, {
            a: () => s
        });
        var a = n("v7qY"),
            r = "transition-DDTh2X";
        let l = null;

        function s(e) {
            let {
                triggerId: t,
                conversationId: n,
                reducedMotion: s,
                update: i,
                onSuperseded: o
            } = e;
            if (l?.transition.skipTransition(), l?.cleanup(), l = null, s || "function" != typeof document.startViewTransition) return void i();
            let u = document.getElementById(t)?.closest("[data-immersive-map-inline]") ?? null,
                c = [],
                d = () => {
                    let e = document.querySelector("[data-immersive-map-fullscreen]"),
                        t = e ?? u,
                        a = e?.querySelector('[data-map-transition="composer"]') ?? Array.from(document.querySelectorAll("[data-map-composer-conversation]")).find(e => e.dataset.mapComposerConversation === n);
                    for (let [e, n] of Object.entries({
                            "immersive-map-canvas": t?.querySelector('[data-map-transition="map"]'),
                            "immersive-map-results": t?.querySelector('[data-map-transition="results"], [role="list"]'),
                            "immersive-map-composer": a?.querySelector("[data-composer-body]"),
                            "immersive-map-composer-input": a?.querySelector('[contenteditable="true"]'),
                            "immersive-map-composer-controls": a?.querySelector("[data-composer-footer-responsive]")
                        }))
                        if (null != n) {
                            let t = n.style.viewTransitionName;
                            n.style.viewTransitionName = e, c.push(() => {
                                n.style.viewTransitionName = t
                            })
                        }
                },
                m = () => {
                    c.splice(0).forEach(e => e())
                },
                p = () => {
                    m(), document.documentElement.classList.remove(r)
                },
                f = !1,
                g = !1,
                h = () => {
                    f || g || (f = !0, (0, a.flushSync)(i))
                };
            document.documentElement.classList.add(r), d();
            try {
                let e = document.startViewTransition(() => {
                        g || (m(), h(), d())
                    }),
                    t = {
                        transition: e,
                        cleanup: () => {
                            g = !0, f || o?.(), p()
                        }
                    };
                l = t, e.ready.catch(() => {});
                let n = () => {
                    l === t && (p(), l = null)
                };
                e.finished.then(n, n)
            } catch (e) {
                if (p(), f) throw e;
                h()
            }
        }
    }),
    Xj7S: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("Wf1j"),
            s = n("oyxz"),
            i = n("ygO2"),
            o = n("bqtn"),
            u = n("HOLv"),
            c = n("bf6R"),
            d = n("jtDB");

        function m(e) {
            let t, n, u, d, m, x, b, y, v, _, I, w, j, C, N, M, S, R, T, E, k, A, P, L, O, D = (0, r.c)(67),
                {
                    groups: G,
                    groupsTitle: F,
                    selectedGroupKey: B,
                    onSelectGroup: z
                } = e,
                K = (0, l.a)();
            D[0] !== G ? (t = G.every(h) && new Set(G.map(g)).size > 1, D[0] = G, D[1] = t) : t = D[1];
            let q = t,
                W = G.every(f);
            if (G.length < 2 || !q && !W) return null;
            if (D[2] !== G || D[3] !== F || D[4] !== q || D[5] !== K || D[6] !== B) {
                let e, t, r;
                D[23] !== B ? (e = e => e.key === B, D[23] = B, D[24] = e) : e = D[24], b = G.findIndex(e), D[25] !== F || D[26] !== q ? (t = F?.trim() || (q ? (0, a.jsx)(s.a, {
                    id: "chatgpt.maps.route_group.all_days",
                    defaultMessage: "All days",
                    description: "Map group selector option that shows the routes and places for every trip day"
                }) : (0, a.jsx)(s.a, {
                    id: "chatgpt.maps.route_group.all_groups",
                    defaultMessage: "All groups",
                    description: "Map group selector option that shows places from every named group"
                })), D[25] = F, D[26] = q, D[27] = t) : t = D[27], d = t, m = p, D[28] !== q || D[29] !== K ? (r = q ? K.formatMessage({
                    id: "chatgpt.maps.route_group.filter_label",
                    defaultMessage: "Trip day",
                    description: "Accessible label for the map dropdown that filters places and routes by trip day"
                }) : K.formatMessage({
                    id: "chatgpt.maps.route_group.generic_filter_label",
                    defaultMessage: "Map group",
                    description: "Accessible label for the map dropdown that filters places and routes by named group"
                }), D[28] = q, D[29] = K, D[30] = r) : r = D[30], x = r, u = o.a, y = "start", v = "chatgpt", n = i.a, w = "max-w-full", j = x, C = !0, N = "mapSurface", M = "full", S = "dialogAction", _ = "truncate", I = b < 0 ? d : m(G[b], b), D[2] = G, D[3] = F, D[4] = q, D[5] = K, D[6] = B, D[7] = n, D[8] = u, D[9] = d, D[10] = m, D[11] = x, D[12] = b, D[13] = y, D[14] = v, D[15] = _, D[16] = I, D[17] = w, D[18] = j, D[19] = C, D[20] = N, D[21] = M, D[22] = S
            } else n = D[7], u = D[8], d = D[9], m = D[10], x = D[11], b = D[12], y = D[13], v = D[14], _ = D[15], I = D[16], w = D[17], j = D[18], C = D[19], N = D[20], M = D[21], S = D[22];
            D[31] !== _ || D[32] !== I ? (R = (0, a.jsx)("span", {
                className: _,
                children: I
            }), D[31] = _, D[32] = I, D[33] = R) : R = D[33], D[34] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, a.jsx)(c.$b, {}), D[34] = T) : T = D[34], D[35] !== n || D[36] !== R || D[37] !== w || D[38] !== j || D[39] !== C || D[40] !== N || D[41] !== M || D[42] !== S ? (E = (0, a.jsxs)(n, {
                className: w,
                "aria-label": j,
                allowShrink: C,
                color: N,
                radius: M,
                size: S,
                children: [R, T]
            }), D[35] = n, D[36] = R, D[37] = w, D[38] = j, D[39] = C, D[40] = N, D[41] = M, D[42] = S, D[43] = E) : E = D[43];
            let H = b < 0 ? "all" : String(b);
            if (D[44] !== z ? (k = () => z(null), D[44] = z, D[45] = k) : k = D[45], D[46] !== d || D[47] !== k ? (A = (0, a.jsx)(o.c.RadioItem, {
                    value: "all",
                    variant: "chatgpt",
                    onSelect: k,
                    children: d
                }), D[46] = d, D[47] = k, D[48] = A) : A = D[48], D[49] !== m || D[50] !== G || D[51] !== z) {
                let e;
                D[53] !== m || D[54] !== z ? (e = (e, t) => (0, a.jsx)(o.c.RadioItem, {
                    value: String(t),
                    variant: "chatgpt",
                    onSelect: () => z(e.key),
                    children: m(e, t)
                }, e.key), D[53] = m, D[54] = z, D[55] = e) : e = D[55], P = G.map(e), D[49] = m, D[50] = G, D[51] = z, D[52] = P
            } else P = D[52];
            return D[56] !== x || D[57] !== H || D[58] !== A || D[59] !== P ? (L = (0, a.jsxs)(o.c.RadioGroup, {
                "aria-label": x,
                value: H,
                children: [A, P]
            }), D[56] = x, D[57] = H, D[58] = A, D[59] = P, D[60] = L) : L = D[60], D[61] !== u || D[62] !== y || D[63] !== v || D[64] !== E || D[65] !== L ? (O = (0, a.jsx)(u, {
                align: y,
                surface: v,
                triggerButton: E,
                children: L
            }), D[61] = u, D[62] = y, D[63] = v, D[64] = E, D[65] = L, D[66] = O) : O = D[66], O
        }

        function p(e, t) {
            return e.title?.trim() || (0, a.jsx)(s.a, {
                id: "chatgpt.maps.route_group.day",
                defaultMessage: "Day {dayNumber}",
                description: "Map selector label for one trip day; dayNumber is the supplied day number or its one-based position",
                values: {
                    dayNumber: e.dayNumber ?? t + 1
                }
            })
        }

        function f(e) {
            return !!e.title?.trim()
        }

        function g(e) {
            return e.dayNumber
        }

        function h(e) {
            return null != e.dayNumber
        }

        function x(e) {
            let t, n, l = (0, r.c)(3),
                {
                    route: i
                } = e,
                o = i?.duration_seconds;
            return i?.legs.length !== 1 || null == o ? null : (l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(c.oc, {}), l[0] = t) : t = l[0], l[1] !== o ? (n = (0, a.jsxs)("div", {
                className: "flex items-center gap-1.5 rounded-full border border-default bg-surface px-3 py-1.5 text-sm font-medium select-none",
                children: [t, o < 3600 ? (0, a.jsx)(s.a, {
                    id: "chatgpt.maps.route.duration_minutes",
                    defaultMessage: "{minutes, plural, one {# min} other {# mins}}",
                    description: "Compact route travel time under one hour shown on the map; minutes is the rounded duration, with a minimum of one",
                    values: {
                        minutes: Math.max(1, Math.round(o / 60))
                    }
                }) : (0, a.jsx)(s.a, {
                    id: "chatgpt.maps.route.duration_hours",
                    defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
                    description: "Compact route travel time shown on the map; hours is the duration rounded to one decimal place",
                    values: {
                        hours: Math.round(o / 360) / 10
                    }
                })]
            }), l[1] = o, l[2] = n) : n = l[2], n)
        }

        function b(e) {
            let t, n, s, o = (0, r.c)(6),
                {
                    onClick: c
                } = e,
                m = (0, l.a)();
            return o[0] !== m ? (t = m.formatMessage({
                id: "chatgpt.map.resetView",
                defaultMessage: "Reset view",
                description: "Button that restores the map to the current results"
            }), o[0] = m, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(u.a, {
                asset: d.a
            }), o[2] = n) : n = o[2], o[3] !== c || o[4] !== t ? (s = (0, a.jsx)(i.a, {
                "aria-label": t,
                color: "mapSurface",
                radius: "full",
                size: "inputIcon",
                onClick: c,
                children: n
            }), o[3] = c, o[4] = t, o[5] = s) : s = o[5], s
        }
        n.d(t, {
            a: () => m,
            b: () => b,
            c: () => x
        })
    }),
    YTiF: (function(e, t, n) {
        var a = n("xCr9"),
            r = n.n(a),
            l = n("rKAs"),
            s = n("AuIy"),
            i = n("yMDx"),
            o = n("hx97"),
            u = n("VYHi");

        function c(e, t) {
            let n = [],
                a = [];

            function c() {
                let e = r()(a, e => "assistant" === e.author.role && !(0, s.k)(e)) ?? a.at(-1);
                if (e?.id == null) return;
                let u = e.id,
                    c = a.flatMap(e => (0, l.q)(e.metadata).map(t => ({
                        messageId: e.id ?? u,
                        message: e,
                        reference: t
                    }))),
                    d = r()(c, e => {
                        let {
                            reference: t
                        } = e;
                        return "map" === t.type || "businesses_map" === t.type || "client_defined_widget" === t.type && "map" === t.category
                    }),
                    m = "assistant" === e.author.role && "all" === e.recipient && "text" === e.content.content_type && "finished_successfully" === e.status;
                n.push({
                    isComplete: m,
                    mapMessageId: d?.messageId,
                    responseMessageId: a[0]?.id ?? u,
                    reference: d?.reference ?? null,
                    turnContext: {
                        ...t,
                        isStreaming: !m,
                        dilViewState: (0, i.c)(d?.message.metadata) ?? (0, i.c)(e.metadata),
                        contentReferences: c.map(e => {
                            let {
                                reference: t
                            } = e;
                            return t
                        }),
                        contentReferenceMessageIds: c.map(e => {
                            let {
                                messageId: t
                            } = e;
                            return t
                        }),
                        contentReferenceMessageStatuses: c.map(e => {
                            let {
                                message: t
                            } = e;
                            return t.status
                        }),
                        messageId: u,
                        turnId: (0, o.d)(e) ?? void 0
                    }
                })
            }
            for (let t of e)(0, o.g)(t) ? (c(), a = []) : ("assistant" === t.author.role || "tool" === t.author.role) && a.push(t);
            return c(), {
                history: n.filter(e => null != e.reference || (0, u.a)(e, {
                    fastPathEnabled: !1
                }).preferred.length > 0),
                latest: n.at(-1)
            }
        }

        function d(e, t, n) {
            let {
                fastPathEnabled: a
            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                fastPathEnabled: !1
            };
            if (null == t) return e;
            let r = (0, u.a)(t, {
                fastPathEnabled: a
            });
            return r.preferred.length > 0 || a && r.additional.length > 0 || !n && !0 === t.isComplete ? t : e
        }

        function m(e) {
            let {
                followResponse: t
            } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                followResponse: !1
            };
            return t ? `response:${e.responseMessageId??e.turnContext.messageId}` : [e.mapMessageId ?? e.turnContext.contentReferenceMessageIds?.[null == e.reference ? -1 : e.turnContext.contentReferences.indexOf(e.reference)] ?? e.turnContext.messageId, e.reference?.type, e.reference?.start_idx].join(":")
        }

        function p(e, t, n, a) {
            let r = e.mapMessageId ?? e.turnContext.messageId;
            if (null != r && n?.reference != null && n.turnContext.contentReferenceMessageIds?.includes(r) && a.some(e => e.id === r && "tool" === e.author.role) && a.some(e => e.id === n.mapMessageId && "assistant" === e.author.role) && d(e, n, n.turnContext.isStreaming) === n) return n;
            if (null == e.reference) return t.find(t => t.turnContext.messageId === e.turnContext.messageId) ?? e;
            for (let n of t) {
                let t = n.turnContext.contentReferences.findIndex((t, a) => n.turnContext.contentReferenceMessageIds?.[a] === (e.mapMessageId ?? e.turnContext.messageId) && t.type === e.reference?.type && t.start_idx === e.reference?.start_idx);
                if (t >= 0) return {
                    ...n,
                    mapMessageId: n.turnContext.contentReferenceMessageIds?.[t],
                    reference: n.turnContext.contentReferences[t] ?? null
                }
            }
            return e
        }
        n.d(t, {
            a: () => c,
            b: () => m,
            c: () => d,
            d: () => p
        })
    }),
    VYHi: (function(e, t, n) {
        var a = n("i5ac"),
            r = n.n(a),
            l = n("rKAs"),
            s = n("TJEh"),
            i = n("RgGw"),
            o = n("DUJs");

        function u(e, t) {
            let {
                fastPathEnabled: n
            } = t, {
                reference: a,
                turnContext: u
            } = e, d = null == a ? [] : (0, l.v)(a, (0, o.a)(a, u)), m = null == a ? [] : (0, i.a)(a), p = new Map;
            if (null != a)
                for (let e of (0, i.f)(a, (0, o.a)(a, u)))
                    for (let t of (0, i.e)(d, e)) {
                        let e = (0, i.d)(t),
                            n = t.notes;
                        "string" == typeof n && n.trim() && !p.has(e) && p.set(e, n)
                    }
            let f = n ? u.contentReferences.map(i.a).find(e => e.length > 0) ?? [] : [],
                g = u.contentReferences.flatMap((e, t) => {
                    let n = u.contentReferenceMessageIds?.[t];
                    if ("entity" !== e.type || null != n && n !== u.messageId || "string" != typeof e.category || !(0, s.i)(e.category)) return [];
                    let a = s.b.safeParse(e.entity_data);
                    return a.success ? (0, l.v)({
                        type: "map",
                        entities: [{
                            entity: a.data,
                            category: e.category,
                            extra_params: e.extra_params,
                            notes: e.notes
                        }]
                    }) : []
                }),
                h = new Map([...f, ...m, ...r()(d, i.b)].map(e => [(0, i.b)(e), e])),
                x = new Set(d.map(i.b)),
                b = new Map(g.map(e => [(0, i.b)(e), e])),
                y = r()([...g.filter(e => !x.has((0, i.b)(e))), ...d], i.d).map(e => {
                    let t = (0, i.b)(e),
                        n = b.get(t) ?? e,
                        a = "string" == typeof e.mapEntityId ? e : h.get(t);
                    return null == a || a === n ? e : {
                        ...a,
                        ...n,
                        latitude: n.latitude ?? a.latitude,
                        longitude: n.longitude ?? a.longitude,
                        mapEntityId: a.mapEntityId ?? n.mapEntityId,
                        mapIcon: a.mapIcon ?? n.mapIcon,
                        mapLabel: a.mapLabel ?? n.mapLabel,
                        mapCarouselCard: a.mapCarouselCard ?? n.mapCarouselCard,
                        notes: c(a) ? a.notes : n.notes,
                        extra_params: null == n.extra_params ? a.extra_params : {
                            ...a.extra_params,
                            ...n.extra_params
                        }
                    }
                }),
                v = new Set(y.map(i.b)),
                _ = r()([...m, ...f], i.b).filter(e => !v.has((0, i.b)(e)));
            return {
                preferred: y.map(e => {
                    let t = p.get((0, i.d)(e));
                    return c(e) || null == t ? e : {
                        ...e,
                        notes: t
                    }
                }).sort((e, t) => Number(c(t)) - Number(c(e))),
                additional: _.sort((e, t) => Number(c(t)) - Number(c(e)))
            }
        }

        function c(e) {
            return "string" == typeof e.notes && e.notes.trim().length > 0
        }
        n.d(t, {
            a: () => u
        })
    }),
    DUJs: (function(e, t, n) {
        var a = n("sqog");

        function r(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.contentReferences.indexOf(e) ?? -1,
                r = t?.contentReferenceMessageIds?.[n] ?? t?.messageId,
                l = t?.contentReferenceMessageStatuses?.[n],
                s = t?.contentReferenceMessageIds == null ? n : t.contentReferenceMessageIds.slice(0, n).filter(e => e === r).length;
            return (0, a.a)(e, null == r || n < 0 || null == t ? void 0 : {
                messageId: r,
                referenceIndex: s,
                widgets: t.dilViewState?.widgets,
                preferResolvedData: null == l ? !t.isStreaming : "finished_successfully" === l
            })
        }
        n.d(t, {
            a: () => r
        })
    }),
    YAi8: (function(e, t, n) {
        n.d(t, {
            a: () => ei
        });
        var a = n("ABep"),
            r = n("QosV"),
            l = n("e0CE"),
            s = n("ZdLA"),
            i = n("BOYb"),
            o = n("on57"),
            u = n("i5ac"),
            c = n.n(u),
            d = n("iTtm"),
            m = n("rKAs"),
            p = n("sqog"),
            f = n("Wc42"),
            g = n("zd8w"),
            h = n("Wf1j"),
            x = n("oyxz"),
            b = n("ygO2"),
            y = n("JNtf"),
            v = n("HOLv"),
            _ = n("bf6R"),
            I = n("Bbed"),
            w = n("CqQF"),
            j = n("ibLK"),
            C = n("zSQm"),
            N = n("yGJW"),
            M = n("tSEg"),
            S = n("eGPX"),
            R = n("hZax"),
            T = n("KDax"),
            E = n("j8Yf"),
            k = n("MrGp"),
            A = n("TUMj"),
            P = n("Nhwt"),
            L = n("TJEh"),
            O = n("jFKl"),
            D = n("tG1k"),
            G = n("AuIy"),
            F = n("OWtl");
        let B = (0, d.u)(F.a, () => new Set);
        var z = n("xhWJ"),
            K = n("c1Hu"),
            q = n("qmuW"),
            W = n("Cslg"),
            H = n("WFY2"),
            V = n("Kwur"),
            $ = n("xof2");
        let Y = (0, d.j)(F.a, e => new Set),
            U = (0, d.j)(F.a, e => {
                let t = new Set,
                    n = 0,
                    a = () => {
                        for (; n < 4 && t.size > 0;) {
                            let e = t.values().next().value;
                            if (null == e) return;
                            t.delete(e), n += 1, e().catch(e => {
                                H.a.warning("Failed to record map entity impression", {
                                    safe: {},
                                    sensitive: {
                                        error: e
                                    }
                                })
                            }).finally(() => {
                                n -= 1, a()
                            })
                        }
                    };
                return e => {
                    t.add(e), a()
                }
            });
        var Q = n("RgGw"),
            J = n("ry7c"),
            X = n("Xj7S"),
            Z = n("YTiF"),
            ee = n("j7sU"),
            et = n("QPeR"),
            en = n("DUJs"),
            ea = n("FCsE"),
            er = n("q73v"),
            el = n("NtvA");
        let es = (0, I.a)(async () => (await Promise.all([n.e(962984), n.e(28537)]).then(n.bind(n, "OeVP"))).ChatGptMapboxCanvas, {
            propagateLoadError: !0
        });

        function ei(e) {
            var t;
            let n = (0, r.c)(19),
                {
                    contentReferenceIndex: l,
                    enableFullscreen: s,
                    fullscreenMode: i,
                    showEmptyMap: o,
                    ignoreCoordinateOutliers: u,
                    fallbackCenter: c,
                    isStreaming: d,
                    reference: m,
                    events: p
                } = e,
                f = void 0 === s || s,
                g = void 0 === i ? "conversation" : i,
                h = void 0 !== o && o,
                x = void 0 !== u && u;
            switch ("string" == typeof(t = m).type && t.type.length > 0 ? t.type : null) {
                case "map":
                case "businesses_map": {
                    let e;
                    return n[0] !== l || n[1] !== f || n[2] !== p || n[3] !== c || n[4] !== g || n[5] !== x || n[6] !== m || n[7] !== h ? (e = (0, a.jsx)(eo, {
                        contentReferenceIndex: l,
                        enableFullscreen: f,
                        fullscreenMode: g,
                        showEmptyMap: h,
                        ignoreCoordinateOutliers: x,
                        fallbackCenter: c,
                        reference: m,
                        events: p
                    }), n[0] = l, n[1] = f, n[2] = p, n[3] = c, n[4] = g, n[5] = x, n[6] = m, n[7] = h, n[8] = e) : e = n[8], e
                }
                case "client_defined_widget": {
                    let e;
                    return n[9] !== l || n[10] !== f || n[11] !== p || n[12] !== c || n[13] !== g || n[14] !== x || n[15] !== d || n[16] !== m || n[17] !== h ? (e = "map" === m.category ? (0, a.jsx)(eo, {
                        contentReferenceIndex: l,
                        enableFullscreen: f,
                        fullscreenMode: g,
                        showEmptyMap: h,
                        ignoreCoordinateOutliers: x,
                        fallbackCenter: c,
                        isStreaming: d,
                        reference: m,
                        events: p
                    }) : null, n[9] = l, n[10] = f, n[11] = p, n[12] = c, n[13] = g, n[14] = x, n[15] = d, n[16] = m, n[17] = h, n[18] = e) : e = n[18], e
                }
                default:
                    return null
            }
        }

        function eo(e) {
            var t, n;
            let u, I, F, H, ei, eo, em, ep, ef, eg, eb, ey, ev, e_, eI, ew, ej, eC, eN, eM, eS, eR, eT, eE, ek, eA, eP, eL, eO, eD, eG, eF, eB, ez, eK, eq, eW, eH, eV, e$, eY, eU, eQ, eJ, eX, eZ, e0, e1 = (0, r.c)(176),
                {
                    contentReferenceIndex: e2,
                    enableFullscreen: e3,
                    fullscreenMode: e4,
                    showEmptyMap: e5,
                    ignoreCoordinateOutliers: e6,
                    fallbackCenter: e7,
                    isStreaming: e8,
                    reference: e9,
                    events: te
                } = e,
                tt = (0, d.y)(M.a),
                tn = (0, g.useRef)(null),
                ta = (0, h.a)(),
                tr = (0, j.a)("(pointer: coarse)") && (0, i.d)();
            e1[0] !== ta ? (u = ta.formatMessage({
                id: "chatgpt.contentReferences.map.expand",
                defaultMessage: "Expand map",
                description: "Button that opens the places map fullscreen"
            }), e1[0] = ta, e1[1] = u) : u = e1[1];
            let tl = u,
                ts = (0, A.d)(),
                ti = (0, R.h)("3194776735"),
                to = (0, d.z)(et.a),
                tu = (0, g.useId)(),
                tc = (0, g.useId)(),
                [td, tm] = (0, g.useState)(!1),
                [tp, tf] = (0, g.useState)(!1);
            e1[2] !== e9 || e1[3] !== ts ? (I = null == ts ? "" : (0, Z.b)({
                reference: e9,
                turnContext: ts
            }), e1[2] = e9, e1[3] = ts, e1[4] = I) : I = e1[4];
            let tg = I;
            e1[5] !== to || e1[6] !== tg ? (F = null != to && (0, Z.b)(to.source) === tg, e1[5] = to, e1[6] = tg, e1[7] = F) : F = e1[7];
            let th = F,
                tx = (0, d.x)(et.b, tg),
                [tb, ty] = (0, g.useState)(null),
                [tv, t_] = (0, g.useState)(!1),
                [tI, tw] = (0, g.useState)(0),
                [tj, tC] = (0, g.useState)(null),
                [tN, tM] = (0, g.useState)(null),
                [tS, tR] = (0, g.useState)(null),
                [tT, tE] = (0, g.useState)(null),
                tk = (0, g.useRef)(tx),
                tA = (0, g.useRef)(null);
            e1[8] === Symbol.for("react.memo_cache_sentinel") ? (H = () => () => tA.current?.abort(), ei = [], e1[8] = H, e1[9] = ei) : (H = e1[8], ei = e1[9]), (0, g.useEffect)(H, ei), e1[10] !== tx ? (eo = () => {
                tk.current = tx
            }, em = [tx], e1[10] = tx, e1[11] = eo, e1[12] = em) : (eo = e1[11], em = e1[12]), (0, g.useLayoutEffect)(eo, em);
            let tP = async () => {
                if (ti && "dialog" === e4) return void tf(!0);
                if (!ti || null == ts || th) return;
                tA.current?.abort();
                let e = new AbortController;
                tA.current = e;
                let t = !0;
                try {
                    await (0, ee.b)()
                } catch {
                    t = !1
                }
                if (e.signal.aborted) return;
                tE(null);
                let n = ts.contentReferenceMessageIds?.[e2] ?? ts.messageId,
                    a = null != tF || 1 === tG.length;
                (0, J.a)({
                    triggerId: tu,
                    conversationId: ts.conversationId,
                    reducedMotion: !t || tt.get(S.c),
                    onSuperseded: () => e.abort(),
                    update: () => {
                        if (e.signal.aborted) return;
                        tA.current = null, tt.set(et.a, {
                            source: {
                                reference: e9,
                                turnContext: ts,
                                mapMessageId: n
                            },
                            view: tk.current,
                            triggerId: tu,
                            ...null == tS ? {} : {
                                selectedPlace: tS
                            },
                            ...null == tF ? {} : {
                                selectedGroupKey: tF.key
                            },
                            ...a && null != tN ? {
                                selectedCardKey: tN
                            } : {}
                        });
                        let t = tt.get(k.j, ts.conversationId) ?? void 0;
                        (0, N.a)(tt, s.p, {
                            conversationId: t,
                            messageId: n,
                            entryPoint: "CHATGPT_PLACES_ENTRY_POINT_MAP_WIDGET"
                        })
                    }
                })
            };
            e1[13] !== e2 || e1[14] !== e9 || e1[15] !== ts ? (ep = (0, en.a)(e9, ts, e2), e1[13] = e2, e1[14] = e9, e1[15] = ts, e1[16] = ep) : ep = e1[16];
            let tL = ep;
            e1[17] !== e2 || e1[18] !== tr || e1[19] !== td || e1[20] !== e9 || e1[21] !== tt || e1[22] !== tb || e1[23] !== ts || e1[24] !== tL ? (ef = () => {
                if (! function(e, t, n, a) {
                        let r = (0, A.c)(t, n),
                            l = t?.contentReferenceMessageStatuses?.[n],
                            i = (0, G.o)(t?.contentReferences[n]?.data)?.widget_type;
                        if (null == t || null == r || "map_widget_v2" !== i || null == a || 0 === a.points.length || (null == l ? t.isStreaming : "finished_successfully" !== l) || t.shouldBlockExternalEgress || !1 === t.trackShownImpressions || !1 === t.isPresented) return;
                        let o = `${r.messageId}:${r.index}`,
                            u = e.get(B);
                        if (u.has(o)) return;
                        e.set(B, new Set([...u, o]));
                        let c = a.groups?.length ? a.groups.map(e => e.route) : [a.route],
                            d = a.carousel?.known_fields,
                            m = null != d && ["rating", "hours", "category", "price"].some(e => !d.some(t => t === e)),
                            f = a.points.some((e, t) => {
                                let n = a.carousel?.cards?.[(0, p.d)(e, t)];
                                return null != n && Object.values(n).some(e => null != e)
                            });
                        (0, N.a)(e, s.a, {
                            messageId: r.messageId,
                            contentReferenceIndex: (0, D.b)(r.index),
                            hasRoute: c.some(e => null != e),
                            hasCustomIcons: a.points.some(e => !!e.icon?.trim()),
                            hasCarouselEdits: m || f,
                            carouselHidden: a.carousel?.visibility === "hidden"
                        })
                    }(tt, ts, e2, tL), tL?.widget_type === "event_sidebar_map_widget" && (tr || tL.points[0]?.address && !td)) return;
                let e = (0, Q.f)(e9, tL).find(e => e.key === tb),
                    t = new Set((0, Q.e)((0, m.v)(e9, tL), e).map(ec));
                ! function(e, t, n, a) {
                    let r = (0, A.c)(t, n),
                        s = t?.contentReferences[n];
                    if (null == t || null == r || !r.messageId || r.messageId.startsWith("WEB:") || s?.type !== "client_defined_widget" || "map" !== s.category || null == a || t.shouldBlockExternalEgress || !1 === t.trackShownImpressions || !1 === t.isPresented) return;
                    let i = e.get(k.j, t.conversationId) ?? void 0,
                        o = t.messageId ?? r.messageId,
                        u = "number" == typeof s?.start_idx ? (0, q.a)(s.start_idx) : void 0,
                        c = e.get(Y, JSON.stringify([t.conversationId, r.messageId, r.index])),
                        d = [];
                    for (let e of a.points) {
                        let t = (0, f.a)(e.entity?.entity_key) ?? (0, f.a)(e.extra_params?.entity_key);
                        if (null == e.entity || null == t && null == (0, f.a)(e.entity.provider) && null == (0, f.a)(e.extra_params?.business_id)) continue;
                        let n = (0, f.a)(e.entity.entity_lookup_id) ?? (0, f.a)(e.extra_params?.entity_lookup_id) ?? t ?? (0, f.a)(e.extra_params?.business_id);
                        null != n && (c.has(n) || (c.add(n), d.push({
                            entityId: n,
                            entityKey: t ?? void 0
                        })))
                    }
                    if (0 === d.length) return;
                    let m = (0, $.a)(e, t.conversationId, o),
                        p = e.get(W.e),
                        g = e.get(W.j),
                        h = e.get(U, void 0);
                    for (let {
                            entityId: n,
                            entityKey: a
                        }
                        of d) {
                        let c = {
                            conversationId: t.conversationId,
                            messageId: r.messageId,
                            assistantMessageId: o,
                            contentReferenceStartIndex: u,
                            contentReferenceType: "entity",
                            entityId: n,
                            entityCategory: "local_business",
                            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN",
                            surfaceLocation: l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                            entityAffordance: l.d.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER,
                            parentContext: {
                                widgetType: "map",
                                widgetName: (0, f.a)((0, G.o)(s.data)?.widget_type) ?? void 0
                            },
                            isGenui: !0
                        };
                        (0, $.b)(e, c), e.get(N.c).isChatgptBrowserReplacement && (0, N.a)(e, K.d, {
                            eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_ENTITY_ANCHOR_SHOWN",
                            conversationId: i,
                            messageId: r.messageId,
                            contentReferenceType: "entity",
                            category: "local_business",
                            businessId: n,
                            widgetName: c.parentContext.widgetName
                        }), h(async () => {
                            p === e.get(W.e) && g === e.get(W.j) && await V.Request.safePost("/unified_user_signals", {
                                requestBody: {
                                    signal_type: "entity_shown",
                                    product_surface: "CHAT",
                                    signal_metadata: {},
                                    user_metadata: {},
                                    signal_detail: {
                                        common_metadata: {
                                            conversation_id: i,
                                            message_id: r.messageId
                                        },
                                        entity_shown: {
                                            entity_id: n,
                                            entity_key: a,
                                            entity_category: c.entityCategory,
                                            entity_affordance: c.entityAffordance,
                                            surface_location: c.surfaceLocation,
                                            content_reference_type: c.contentReferenceType,
                                            content_reference_index: r.index,
                                            content_reference_start_index: u,
                                            assistant_message_id: o,
                                            turn_ordinal: m
                                        }
                                    }
                                }
                            })
                        })
                    }
                }(tt, ts, e2, null == tL ? null : {
                    ...tL,
                    points: tL.points.filter((e, n) => t.has((0, p.d)(e, n)))
                })
            }, eg = [tt, ts, e2, tL, e9, tb, tr, td], e1[17] = e2, e1[18] = tr, e1[19] = td, e1[20] = e9, e1[21] = tt, e1[22] = tb, e1[23] = ts, e1[24] = tL, e1[25] = ef, e1[26] = eg) : (ef = e1[25], eg = e1[26]), (0, g.useEffect)(ef, eg);
            let tO = tp || tL?.fill;
            if (tr && tL?.widget_type === "event_sidebar_map_widget") return null;
            let tD = tL?.widget_type === "event_sidebar_map_widget" ? tL.points[0] : void 0,
                tG = (0, Q.f)(e9, tL);
            e1[27] !== tb ? (eb = e => e.key === tb, e1[27] = tb, e1[28] = eb) : eb = e1[28];
            let tF = tG.find(eb),
                tB = null == tF ? tG : [tF],
                tz = (0, m.v)(e9, tL),
                tK = (0, Q.e)(tz, tF);
            e1[29] !== e2 || e1[30] !== e9 || e1[31] !== ts ? (ey = null == ts || ts.isStreaming || ts.preciseLocationInfo?.requested !== !0 || "below_map" !== ts.preciseLocationInfo.footer_location || "map" !== e9.type || (ts.contentReferenceMessageIds?.[e2] ?? ts.messageId) !== ts.preciseLocationMessageId || ts.contentReferences.findIndex((e, t) => "map" === e.type && (ts.contentReferenceMessageIds?.[t] ?? ts.messageId) === ts.preciseLocationMessageId) !== e2 ? null : (0, a.jsx)(P.a, {
                conversationId: ts.conversationId,
                isTemporaryChat: ts.isTemporaryChat ?? !1,
                isReadOnly: !0 === ts.isReadOnly || !0 === ts.shouldBlockExternalEgress || !0 !== ts.isLatestActorMessage,
                messageId: ts.preciseLocationMessageId,
                preciseLocationInfo: ts.preciseLocationInfo,
                trackImpression: !1 !== ts.trackShownImpressions && !1 !== ts.isPresented
            }, ts.preciseLocationMessageId), e1[29] = e2, e1[30] = e9, e1[31] = ts, e1[32] = ey) : ey = e1[32];
            let tq = ey;
            if (!e5 && 0 === tK.length && null == tL) {
                let e, t;
                return e1[33] !== e9 ? (e = (0, a.jsx)(E.c, {
                    reference: e9
                }), e1[33] = e9, e1[34] = e) : e = e1[34], e1[35] !== tq || e1[36] !== e ? (t = (0, a.jsxs)(a.Fragment, {
                    children: [e, tq]
                }), e1[35] = tq, e1[36] = e, e1[37] = t) : t = e1[37], t
            }
            let tW = !(void 0 !== e8 && e8) && tL?.carousel?.visibility !== "hidden";
            e1[38] !== e9 || e1[39] !== tW || e1[40] !== tL?.min_height ? (ev = (0, p.c)(e9) ?? Math.max((t = e9, n = tW, eh(t) ? 300 + 144 * !!n : 400), tL?.min_height ?? 0), e1[38] = e9, e1[39] = tW, e1[40] = tL?.min_height, e1[41] = ev) : ev = e1[41];
            let tH = ev,
                tV = c()(tK.filter(ex), Q.d);
            if (!e5 && 0 === tV.length && null == tL || ts?.shouldBlockExternalEgress === !0) return (0, a.jsxs)("div", {
                className: "my-3",
                children: [(0, a.jsx)(ed, {
                    places: tK
                }), tq]
            });
            e1[42] !== e2 || e1[43] !== e9 || e1[44] !== tt || e1[45] !== ts ? (e_ = (e, t, n) => {
                null != ts && ((0, z.b)(tt, {
                    reference: e9,
                    turnContext: ts,
                    mapMessageId: ts.contentReferenceMessageIds?.[e2] ?? ts.messageId
                }, e, t, l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE), "marker" === t && (0, N.a)(tt, s.d, {
                    conversationId: tt.get(k.j, ts.conversationId) ?? void 0,
                    messageId: ts.contentReferenceMessageIds?.[e2] ?? ts.messageId,
                    entityId: (0, z.a)(e),
                    source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_MARKER"
                })), tC((0, Q.d)(e)), tM(n ?? null), tR(e)
            }, e1[42] = e2, e1[43] = e9, e1[44] = tt, e1[45] = ts, e1[46] = e_) : e_ = e1[46];
            let t$ = e_,
                tY = null == e7 ? 1 : 10,
                tU = tj ?? (tD?.address && 1 === tV.length ? (0, Q.d)(tV[0]) : null),
                tQ = ts?.conversationId,
                tJ = null == tF ? (0, Q.c)(tV, tz.find(e => (0, Q.d)(e) === tT)) : tT;
            e1[47] !== e7 || e1[48] !== e5 ? (eI = e5 ? e7 ?? {
                lat: 0,
                lng: 0
            } : void 0, e1[47] = e7, e1[48] = e5, e1[49] = eI) : eI = e1[49];
            let tX = e5 && 0 === tV.length ? tY : void 0,
                tZ = ts?.contentReferenceMessageIds?.[e2] ?? ts?.messageId,
                t0 = te?.onReady,
                t1 = () => {
                    te?.onMapClick?.(), e3 && tP()
                };
            e1[50] !== te || e1[51] !== t$ ? (ew = e => {
                te?.onPinClick?.(), t$(e, "marker")
            }, e1[50] = te, e1[51] = t$, e1[52] = ew) : ew = e1[52];
            let t2 = null == tF ? (0, Q.c)(tV, tz.find(e => (0, Q.d)(e) === tU)) : tU;
            e1[53] !== tW ? (ej = tW ? void 0 : {
                bottom: 20
            }, e1[53] = tW, e1[54] = ej) : ej = e1[54], e1[55] !== es || e1[56] !== e2 || e1[57] !== tB || e1[58] !== e6 || e1[59] !== tp || e1[60] !== tV || e1[61] !== tI || e1[62] !== tQ || e1[63] !== tJ || e1[64] !== eI || e1[65] !== tX || e1[66] !== tZ || e1[67] !== t0 || e1[68] !== t1 || e1[69] !== ew || e1[70] !== t2 || e1[71] !== ej ? (eC = (0, a.jsx)(es, {
                contentReferenceIndex: e2,
                conversationId: tQ,
                hoveredBusinessKey: tJ,
                isFullscreen: tp,
                ignoreCoordinateOutliers: e6,
                fallbackCenter: eI,
                initialZoom: tX,
                messageId: tZ,
                onReady: t0,
                onUserMovementChange: t_,
                onExpand: t1,
                onOpenEntity: ew,
                places: tV,
                resetViewKey: tI,
                routeGroups: tB,
                selectedBusinessKey: t2,
                viewRef: tk,
                viewportPadding: ej
            }), e1[55] = es, e1[56] = e2, e1[57] = tB, e1[58] = e6, e1[59] = tp, e1[60] = tV, e1[61] = tI, e1[62] = tQ, e1[63] = tJ, e1[64] = eI, e1[65] = tX, e1[66] = tZ, e1[67] = t0, e1[68] = t1, e1[69] = ew, e1[70] = t2, e1[71] = ej, e1[72] = eC) : eC = e1[72];
            let t3 = eC,
                t4 = tO && "flex h-full min-h-0 flex-col";
            e1[73] !== t4 ? (eN = (0, o.b)(er.a.widget, "not-prose w-full", t4), e1[73] = t4, e1[74] = eN) : eN = e1[74], e1[75] !== tO || e1[76] !== e9 ? (eM = (0, o.b)(eh(e9) && "pb-2", tO && "min-h-0 flex-1"), e1[75] = tO, e1[76] = e9, e1[77] = eM) : eM = e1[77];
            let t5 = tO && "h-full";
            e1[78] !== t5 ? (eS = (0, o.b)("relative isolate overflow-hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-relaxed motion-safe:ease-out", er.a.frame, t5), e1[78] = t5, e1[79] = eS) : eS = e1[79], e1[80] !== tO || e1[81] !== tH ? (eR = tO ? void 0 : {
                maxHeight: tH
            }, e1[80] = tO, e1[81] = tH, e1[82] = eR) : eR = e1[82];
            let t6 = tO && "h-full";
            e1[83] !== t6 ? (eT = (0, o.b)(er.a.frame, "bg-surface-secondary", t6), e1[83] = t6, e1[84] = eT) : eT = e1[84], e1[85] !== tO || e1[86] !== tH ? (eE = tO ? void 0 : {
                height: tH
            }, e1[85] = tO, e1[86] = tH, e1[87] = eE) : eE = e1[87], e1[88] === Symbol.for("react.memo_cache_sentinel") ? (ek = (0, o.b)(er.a.frame, er.a.viewport, "relative isolate h-full overflow-hidden"), e1[88] = ek) : ek = e1[88];
            let t7 = th ? null : t3;
            e1[89] !== tB || e1[90] !== th || e1[91] !== tG || e1[92] !== tF || e1[93] !== tv || e1[94] !== tL?.groups_title ? (eA = !th && (0, a.jsxs)("div", {
                className: "absolute start-3 top-3 z-20 flex items-center gap-2",
                children: [(0, a.jsx)(X.a, {
                    groups: tG,
                    groupsTitle: tL?.groups_title,
                    selectedGroupKey: tF?.key ?? null,
                    onSelectGroup: e => {
                        ty(e), t_(!1), tC(null), tM(null), tR(null), tE(null)
                    }
                }), 1 === tB.length && (0, a.jsx)(X.c, {
                    route: tB[0].route
                }), tv && (0, a.jsx)(X.b, {
                    onClick: () => {
                        tC(null), tE(null), t_(!1), tw(eu)
                    }
                })]
            }), e1[89] = tB, e1[90] = th, e1[91] = tG, e1[92] = tF, e1[93] = tv, e1[94] = tL?.groups_title, e1[95] = eA) : eA = e1[95], e1[96] === Symbol.for("react.memo_cache_sentinel") ? (eP = (0, a.jsx)("div", {
                className: (0, o.b)(er.a.frame, "pointer-events-none absolute inset-0 z-2 ring-1 ring-border/50 ring-inset")
            }), e1[96] = eP) : eP = e1[96], e1[97] !== e2 || e1[98] !== tB || e1[99] !== te || e1[100] !== t$ || e1[101] !== tp || e1[102] !== th || e1[103] !== tK || e1[104] !== tj || e1[105] !== tN || e1[106] !== tW ? (eL = !th && (0, a.jsxs)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col",
                children: [(0, a.jsx)(O.a, {
                    isFullscreen: !1,
                    openTarget: tp ? "external-browser" : void 0
                }), tW && (0, a.jsx)(ea.a, {
                    contentReferenceIndex: e2,
                    isFullscreen: !1,
                    onHoverBusiness: tE,
                    onPlacesShown: te?.onCardsShown,
                    onOpenEntity: (e, t) => {
                        te?.onCardClick?.(), t$(e, "list", t)
                    },
                    places: tK,
                    selectedBusinessKey: tj,
                    selectedCardKey: tN,
                    route: 1 === tB.length ? tB[0].route : null
                })]
            }), e1[97] = e2, e1[98] = tB, e1[99] = te, e1[100] = t$, e1[101] = tp, e1[102] = th, e1[103] = tK, e1[104] = tj, e1[105] = tN, e1[106] = tW, e1[107] = eL) : eL = e1[107], e1[108] !== e3 || e1[109] !== tl || e1[110] !== tP || e1[111] !== tp || e1[112] !== ti || e1[113] !== tu ? (eO = ti && e3 && !tp && (0, a.jsx)("div", {
                className: "absolute end-3 top-3 z-20",
                children: (0, a.jsx)(w.a, {
                    tooltipContent: tl,
                    children: (0, a.jsx)(b.a, {
                        id: tu,
                        "aria-label": tl,
                        color: "mapSurface",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => void tP(),
                        children: (0, a.jsx)(_.N, {})
                    })
                })
            }), e1[108] = e3, e1[109] = tl, e1[110] = tP, e1[111] = tp, e1[112] = ti, e1[113] = tu, e1[114] = eO) : eO = e1[114], e1[115] !== t7 || e1[116] !== eA || e1[117] !== eL || e1[118] !== eO ? (eD = (0, a.jsxs)("div", {
                className: ek,
                children: [t7, eA, eP, eL, eO]
            }), e1[115] = t7, e1[116] = eA, e1[117] = eL, e1[118] = eO, e1[119] = eD) : eD = e1[119], e1[120] !== eT || e1[121] !== eE || e1[122] !== eD ? (eG = (0, a.jsx)("div", {
                className: eT,
                style: eE,
                children: eD
            }), e1[120] = eT, e1[121] = eE, e1[122] = eD, e1[123] = eG) : eG = e1[123], e1[124] !== eS || e1[125] !== eR || e1[126] !== eG ? (eF = (0, a.jsx)("div", {
                className: eS,
                style: eR,
                children: eG
            }), e1[124] = eS, e1[125] = eR, e1[126] = eG, e1[127] = eF) : eF = e1[127], e1[128] !== eM || e1[129] !== eF ? (eB = (0, a.jsx)("div", {
                className: eM,
                children: eF
            }), e1[128] = eM, e1[129] = eF, e1[130] = eB) : eB = e1[130], e1[131] !== tq || e1[132] !== eN || e1[133] !== eB || e1[134] !== tu ? (ez = (0, a.jsxs)("div", {
                className: eN,
                ref: tn,
                "data-testid": "businesses-map-widget",
                "data-immersive-map-inline": tu,
                children: [eB, tq]
            }), e1[131] = tq, e1[132] = eN, e1[133] = eB, e1[134] = tu, e1[135] = ez) : ez = e1[135];
            let t8 = ez;
            if (tp) {
                let e, t, n;
                return e1[136] !== tu ? (e = {
                    "aria-describedby": void 0,
                    onCloseAutoFocus: e => {
                        let t = document.getElementById(tu);
                        null != t && (e.preventDefault(), t.focus({
                            preventScroll: !0
                        }))
                    }
                }, e1[136] = tu, e1[137] = e) : e = e1[137], e1[138] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(y.e, {
                    className: "sr-only",
                    children: (0, a.jsx)(x.a, {
                        id: "chatgpt.contentReferences.map.title",
                        defaultMessage: "Map",
                        description: "Title of the fullscreen places map"
                    })
                }), e1[138] = t) : t = e1[138], e1[139] !== t8 || e1[140] !== e ? (n = (0, a.jsxs)(y.b, {
                    contentClassName: "h-full w-full",
                    contentProps: e,
                    onOpenChange: tf,
                    open: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    children: [t, t8]
                }), e1[139] = t8, e1[140] = e, e1[141] = n) : n = e1[141], n
            }
            if (!tD?.address) return t8;
            e1[142] !== tD.address || e1[143] !== tD.name ? (eK = [tD.name, tD.address].filter(Boolean), e1[142] = tD.address, e1[143] = tD.name, e1[144] = eK) : eK = e1[144];
            let t9 = eK.join(", ");
            e1[145] !== tD ? (eq = (0, C.a)((0, L.e)(tD) ?? "") || null, e1[145] = tD, e1[146] = eq) : eq = e1[146];
            let ne = eq;
            e1[147] === Symbol.for("react.memo_cache_sentinel") ? (eW = (0, a.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, a.jsx)(v.a, {
                    asset: el.a
                })
            }), e1[147] = eW) : eW = e1[147], e1[148] !== ne || e1[149] !== t9 ? (eH = null == ne ? t9 : (0, a.jsx)(T.a, {
                className: "cursor-interaction hover:underline",
                href: ne,
                initiator: "markdown_link_click",
                children: t9
            }), e1[148] = ne, e1[149] = t9, e1[150] = eH) : eH = e1[150], e1[151] !== eH ? (eV = (0, a.jsx)("span", {
                className: "min-w-0 flex-1 text-sm font-medium break-words whitespace-normal select-text",
                children: eH
            }), e1[151] = eH, e1[152] = eV) : eV = e1[152], e1[153] !== ta ? (e$ = ta.formatMessage({
                id: "chatgpt.eventSidebar.toggleVenueMap",
                defaultMessage: "Toggle venue map",
                description: "Button beside an event venue address that shows or hides the venue map."
            }), e1[153] = ta, e1[154] = e$) : e$ = e1[154], e1[155] !== td ? (eY = () => {
                td && tA.current?.abort(), tm(!td)
            }, e1[155] = td, e1[156] = eY) : eY = e1[156];
            let nt = td && "rotate-180";
            e1[157] !== nt ? (eU = (0, o.b)("transition-transform", nt), e1[157] = nt, e1[158] = eU) : eU = e1[158], e1[159] !== eU ? (eQ = (0, a.jsx)(_._b, {
                className: eU
            }), e1[159] = eU, e1[160] = eQ) : eQ = e1[160], e1[161] !== td || e1[162] !== e$ || e1[163] !== eY || e1[164] !== eQ || e1[165] !== tc ? (eJ = (0, a.jsx)(b.a, {
                "aria-controls": tc,
                "aria-expanded": td,
                "aria-label": e$,
                color: "ghostSecondary",
                size: "icon",
                className: "shrink-0",
                onClick: eY,
                children: eQ
            }), e1[161] = td, e1[162] = e$, e1[163] = eY, e1[164] = eQ, e1[165] = tc, e1[166] = eJ) : eJ = e1[166], e1[167] !== eV || e1[168] !== eJ ? (eX = (0, a.jsxs)("div", {
                className: "flex min-h-11 items-center gap-4 py-2",
                children: [eW, eV, eJ]
            }), e1[167] = eV, e1[168] = eJ, e1[169] = eX) : eX = e1[169];
            let nn = td && t8;
            return e1[170] !== nn || e1[171] !== tc ? (eZ = (0, a.jsx)("div", {
                id: tc,
                children: nn
            }), e1[170] = nn, e1[171] = tc, e1[172] = eZ) : eZ = e1[172], e1[173] !== eX || e1[174] !== eZ ? (e0 = (0, a.jsxs)("div", {
                className: "-mt-3 w-full min-w-0 border-t border-default pb-2",
                children: [eX, eZ]
            }), e1[173] = eX, e1[174] = eZ, e1[175] = e0) : e0 = e1[175], e0
        }

        function eu(e) {
            return e + 1
        }

        function ec(e) {
            return e.mapEntityId
        }

        function ed(e) {
            let t, n, l, s = (0, r.c)(5),
                {
                    places: i
                } = e;
            return s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "font-medium text-default",
                children: (0, a.jsx)(x.a, {
                    id: "chatgpt.contentReferences.localResults.title",
                    defaultMessage: "Local results",
                    description: "Title for a local business map content reference card"
                })
            }), s[0] = t) : t = s[0], s[1] !== i ? (n = i.slice(0, 5).map(em), s[1] = i, s[2] = n) : n = s[2], s[3] !== n ? (l = (0, a.jsxs)("div", {
                className: "rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default",
                "data-testid": "chatgpt-content-reference-card",
                children: [t, (0, a.jsx)("div", {
                    className: "mt-3 flex flex-col gap-2",
                    children: n
                })]
            }), s[3] = n, s[4] = l) : l = s[4], l
        }

        function em(e, t) {
            return (0, a.jsx)(ep, {
                place: e
            }, `${e.name}-${String(t)}`)
        }

        function ep(e) {
            var t, n, l, s;
            let i, o, u, c, d, m, p, g, x, b, y, v, _, I = (0, r.c)(28),
                {
                    place: w
                } = e;
            I[0] !== w ? (t = w, u = null == (i = (0, f.a)(t.provider_url) ?? (0, f.a)(t.website_url)) ? null : (0, C.a)(i) ?? null, I[0] = w, I[1] = u) : u = I[1];
            let j = u,
                N = (0, h.a)();
            I[2] !== N || I[3] !== w ? (n = w, l = N, c = null == n.rating ? null : null == n.review_count ? l.formatNumber(n.rating, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1
            }) : `${l.formatNumber(n.rating,{maximumFractionDigits:1,minimumFractionDigits:1})} (${l.formatNumber(n.review_count)})`, I[2] = N, I[3] = w, I[4] = c) : c = I[4];
            let M = c;
            I[5] !== w.address ? (d = (0, f.a)(w.address), I[5] = w.address, I[6] = d) : d = I[6], I[7] !== w.price_str ? (m = (0, f.a)(w.price_str), I[7] = w.price_str, I[8] = m) : m = I[8], I[9] !== M || I[10] !== d || I[11] !== m ? (p = [d, M, m].filter(eg), I[9] = M, I[10] = d, I[11] = m, I[12] = p) : p = I[12];
            let S = p;
            I[13] !== w ? (s = w, g = null == (o = s.categories?.map(f.a).filter(e => null != e)) || 0 === o.length ? null : o.join(", "), I[13] = w, I[14] = g) : g = I[14];
            let R = g;
            return I[15] !== j || I[16] !== w.name ? (x = null == j ? w.name : (0, a.jsx)(O.b, {
                href: j,
                children: w.name
            }), I[15] = j, I[16] = w.name, I[17] = x) : x = I[17], I[18] !== x ? (b = (0, a.jsx)("div", {
                className: "font-medium text-default",
                children: x
            }), I[18] = x, I[19] = b) : b = I[19], I[20] !== S ? (y = 0 === S.length ? null : (0, a.jsx)("div", {
                className: "mt-1 flex flex-wrap gap-x-1 text-secondary",
                children: S.map(ef)
            }), I[20] = S, I[21] = y) : y = I[21], I[22] !== R ? (v = null == R ? null : (0, a.jsx)("div", {
                className: "mt-1 text-secondary",
                children: R
            }), I[22] = R, I[23] = v) : v = I[23], I[24] !== v || I[25] !== b || I[26] !== y ? (_ = (0, a.jsxs)("div", {
                className: "rounded-md border border-subtle p-2",
                children: [b, y, v]
            }), I[24] = v, I[25] = b, I[26] = y, I[27] = _) : _ = I[27], _
        }

        function ef(e, t) {
            return (0, a.jsxs)("span", {
                children: [0 === t ? null : (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    children: "· "
                }), e]
            }, e)
        }

        function eg(e) {
            return null != e
        }

        function eh(e) {
            return "number" == typeof e.start_idx && e.start_idx < 4
        }

        function ex(e) {
            return null != e.latitude && null != e.longitude
        }
    }),
    FCsE: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("ZdLA"),
            s = n("qmuW"),
            i = n("on57"),
            o = n("suct"),
            u = n("iodE"),
            c = n("IPUh"),
            d = n("iTtm"),
            m = n("zd8w"),
            p = n("Wf1j"),
            f = n("oyxz"),
            g = n("X3K1"),
            h = n("T1PX"),
            x = n("yGJW"),
            b = n("OWtl");
        n("V8uZ");
        var y = n("HgLj"),
            v = n("MrGp"),
            _ = n("TUMj"),
            I = n("b2ei"),
            w = n("xhWJ"),
            j = n("RgGw"),
            C = n("F0zR"),
            N = n("phAi"),
            M = n("autk");

        function S(e) {
            let t, n, u, c, g, y, S, E = (0, r.c)(21),
                {
                    contentReferenceIndex: k,
                    isFullscreen: A,
                    isLoading: P,
                    onOpenEntity: L,
                    onHoverBusiness: O,
                    places: D,
                    onPlacesShown: G,
                    route: F,
                    selectedBusinessKey: B,
                    selectedCardKey: z
                } = e,
                K = void 0 !== P && P,
                q = (0, d.y)(b.a),
                W = (0, p.a)(),
                H = (0, _.d)(),
                V = (0, h.a)(),
                $ = (0, m.useRef)(null),
                Y = (0, j.g)(F, D.map(j.d));
            E[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                $.current?.scrollIntoView({
                    block: "nearest",
                    inline: "nearest"
                })
            }, E[0] = t) : t = E[0], E[1] !== B || E[2] !== z ? (n = [B, z], E[1] = B, E[2] = z, E[3] = n) : n = E[3], (0, m.useEffect)(t, n);
            let U = N.a;
            E[4] !== W ? (u = W.formatMessage({
                id: "chatgpt.contentReferences.map.results",
                defaultMessage: "Map places",
                description: "Accessible name of the scrollable business cards displayed on the places map"
            }), E[4] = W, E[5] = u) : u = E[5];
            let Q = o.a,
                J = D.map((e, t) => {
                    let n = (0, j.d)(e),
                        r = (0, j.h)(D, t, Y),
                        o = F?.legs[r - 1],
                        u = null == F ? n : `${n}:${r}`,
                        c = null != z ? z === u : B === n && D.findIndex(e => (0, j.d)(e) === n) === t,
                        d = function(e) {
                            let {
                                duration: t,
                                index: n,
                                route: r,
                                total: l
                            } = e;
                            return null == r ? null : null != t ? (0, a.jsx)(f.a, {
                                id: "chatgpt.places.route_stops.card.incoming_leg_duration",
                                defaultMessage: "{routeMode, select, walking {Walk} cycling {Bike} transit {Transit} other {Drive}} ~{duration}",
                                description: "Travel mode and approximate time from the preceding stop to this destination card in the map carousel; duration is localized",
                                values: {
                                    routeMode: r.route_mode,
                                    duration: t
                                }
                            }) : 0 === n ? (0, a.jsx)(f.a, {
                                id: "chatgpt.places.route_stops.card.role.start",
                                defaultMessage: "Start here",
                                description: "Role label on the first place in the ordered route"
                            }) : n === l - 1 ? (0, a.jsx)(f.a, {
                                id: "chatgpt.places.route_stops.card.role.destination",
                                defaultMessage: "Destination",
                                description: "Role label on the final place in the ordered route"
                            }) : (0, a.jsx)(f.a, {
                                id: "chatgpt.places.route_stops.card.role.intermediate",
                                defaultMessage: "Stop {stopNumber}",
                                description: "Role label on an intermediate route stop; stopNumber is its one-based route position",
                                values: {
                                    stopNumber: n + 1
                                }
                            })
                        }({
                            duration: (0, C.a)(W, o?.duration_seconds),
                            index: t,
                            route: F,
                            total: D.length
                        });
                    return (0, a.jsx)(T, {
                        ref: c ? $ : void 0,
                        className: (0, i.b)(M.a.card, M.a.item, A ? "w-4/5 max-w-80 md:w-full md:max-w-none" : "w-80 max-w-full"),
                        onMouseEnter: () => O?.(n),
                        onMouseLeave: () => O?.(null),
                        onFocus: () => O?.(n, !1),
                        onBlur: () => O?.(null, !1),
                        role: "listitem",
                        place: e,
                        onShown: null == G ? void 0 : e => G([e]),
                        initial: !V && !!A && {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        exit: {
                            opacity: 0
                        },
                        transition: {
                            duration: .15 * !V
                        },
                        children: (0, a.jsx)(I.a, {
                            contentReferenceIndex: k,
                            isSelected: c,
                            mapContextLabel: d,
                            onOpenEntity: () => {
                                if (!A && null != H) {
                                    let n = q.get(v.j, H.conversationId) ?? void 0;
                                    (0, x.a)(q, l.b, {
                                        conversationId: n,
                                        entityId: "string" == typeof e.id ? e.id : void 0,
                                        entityName: e.name,
                                        entityIndex: (0, s.a)(t)
                                    }), (0, x.a)(q, l.d, {
                                        conversationId: n,
                                        messageId: H.contentReferenceMessageIds?.[k] ?? H.messageId,
                                        entityId: (0, w.a)(e),
                                        source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_BUSINESS_LIST"
                                    })
                                }
                                L(e, u)
                            },
                            place: e,
                            presentation: "card"
                        })
                    }, u)
                });
            return E[6] !== Q || E[7] !== J ? (c = (0, a.jsx)(Q, {
                initial: !1,
                children: J
            }), E[6] = Q, E[7] = J, E[8] = c) : c = E[8], E[9] !== K ? (g = K && (0, a.jsx)("div", {
                className: "sr-only",
                role: "status",
                children: (0, a.jsx)(f.a, {
                    id: "chatgpt.map.loadingPlaces",
                    defaultMessage: "Searching for places…",
                    description: "Screen reader status while a search for businesses in the fullscreen map is still generating results"
                })
            }), E[9] = K, E[10] = g) : g = E[10], E[11] !== K || E[12] !== D.length ? (y = K && Array.from({
                length: 0 === D.length ? 4 : 2
            }, R), E[11] = K, E[12] = D.length, E[13] = y) : y = E[13], E[14] !== U || E[15] !== A || E[16] !== y || E[17] !== u || E[18] !== c || E[19] !== g ? (S = (0, a.jsxs)(U, {
                as: "div",
                isFullscreen: A,
                label: u,
                children: [c, g, y]
            }), E[14] = U, E[15] = A, E[16] = y, E[17] = u, E[18] = c, E[19] = g, E[20] = S) : S = E[20], S
        }

        function R(e, t) {
            return (0, a.jsxs)("div", {
                className: (0, i.b)(M.a.card, "flex w-4/5 max-w-80 items-center gap-3 p-4 md:w-full md:max-w-none"),
                "aria-hidden": !0,
                children: [(0, a.jsx)(g.a, {
                    size: "thumbnail",
                    variant: "chatgpt"
                }), (0, a.jsx)(g.b, {
                    lines: 3,
                    variant: "chatgpt"
                })]
            }, `loading-${t}`)
        }

        function T(e) {
            let t, n, l, s, i, o, d, p, f, g = (0, r.c)(23);
            g[0] !== e ? ({
                onShown: t,
                place: n,
                ref: s,
                ...l
            } = e, g[0] = e, g[1] = t, g[2] = n, g[3] = l, g[4] = s) : (t = g[1], n = g[2], l = g[3], s = g[4]);
            let h = (0, u.a)(),
                x = (0, m.useRef)(null);
            g[5] !== t || g[6] !== n ? (i = e => {
                e.some(E) && t?.(n)
            }, g[5] = t, g[6] = n, g[7] = i) : i = g[7];
            let b = (0, m.useEffectEvent)(i),
                v = null != t;
            g[8] !== h || g[9] !== b || g[10] !== v ? (o = () => {
                if (!h || !v || null == x.current) return;
                let e = new IntersectionObserver(e => b(e), {
                    threshold: 0
                });
                return e.observe(x.current), () => e.disconnect()
            }, g[8] = h, g[9] = b, g[10] = v, g[11] = o) : o = g[11], g[12] !== h || g[13] !== n || g[14] !== v ? (d = [h, n, v], g[12] = h, g[13] = n, g[14] = v, g[15] = d) : d = g[15], (0, m.useEffect)(o, d), g[16] !== s ? (p = (0, y.a)(x, s), g[16] = s, g[17] = p) : p = g[17];
            let _ = !h,
                I = !h || void 0;
            return g[18] !== l || g[19] !== p || g[20] !== _ || g[21] !== I ? (f = (0, a.jsx)(c.a.div, {
                ...l,
                ref: p,
                inert: _,
                "aria-hidden": I
            }), g[18] = l, g[19] = p, g[20] = _, g[21] = I, g[22] = f) : f = g[22], f
        }

        function E(e) {
            return e.isIntersecting
        }
        n.d(t, {
            a: () => S
        })
    }),
    phAi: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("on57"),
            s = n("zd8w"),
            i = n("autk");

        function o(e) {
            let t, n, o, c, d, m, p, f = (0, r.c)(13),
                {
                    as: g,
                    ref: h,
                    children: x,
                    isFullscreen: b,
                    label: y
                } = e,
                v = (0, s.useRef)(null),
                _ = b && i.a.fullscreen;
            return f[0] !== _ ? (t = (0, l.b)(i.a.results, _, "m-0 min-h-0 list-none"), f[0] = _, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (n = e => {
                v.current?.didDrag && (e.preventDefault(), e.stopPropagation(), v.current = null)
            }, f[2] = n) : n = f[2], f[3] === Symbol.for("react.memo_cache_sentinel") ? (o = e => {
                "mouse" === e.pointerType && 0 === e.button && e.currentTarget.scrollWidth > e.currentTarget.clientWidth && (v.current = {
                    pointerId: e.pointerId,
                    startX: e.clientX,
                    scrollLeft: e.currentTarget.scrollLeft,
                    didDrag: !1
                })
            }, c = e => {
                if (1 !== e.buttons) {
                    v.current = null;
                    return
                }
                let t = v.current;
                if (null == t || t.pointerId !== e.pointerId) return;
                let n = e.clientX - t.startX;
                !t.didDrag && 4 > Math.abs(n) || (t.didDrag || (t.didDrag = !0, e.currentTarget.setPointerCapture(e.pointerId)), e.preventDefault(), e.currentTarget.scrollLeft = t.scrollLeft - n)
            }, d = e => {
                let t = v.current;
                null != t && t.pointerId === e.pointerId && (t.didDrag && e.currentTarget.releasePointerCapture(e.pointerId), t.pointerId = null)
            }, m = () => {
                v.current = null
            }, f[3] = o, f[4] = c, f[5] = d, f[6] = m) : (o = f[3], c = f[4], d = f[5], m = f[6]), f[7] !== g || f[8] !== x || f[9] !== y || f[10] !== h || f[11] !== t ? (p = (0, a.jsx)(g, {
                ref: h,
                className: t,
                "aria-label": y,
                role: "list",
                onClickCapture: n,
                onDragStart: u,
                onPointerDown: o,
                onPointerMove: c,
                onPointerUp: d,
                onPointerCancel: m,
                children: x
            }), f[7] = g, f[8] = x, f[9] = y, f[10] = h, f[11] = t, f[12] = p) : p = f[12], p
        }

        function u(e) {
            return e.preventDefault()
        }
        n.d(t, {
            a: () => o
        })
    }),
    Nhwt: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("MxEh"),
            s = n("iTtm"),
            i = n("zd8w"),
            o = n("oyxz"),
            u = n("bf6R"),
            c = n("yGJW"),
            d = n("OWtl"),
            m = n("udGC"),
            p = n("QaQr"),
            f = n("OX9U"),
            g = n("ITxD"),
            h = n("SZLI");
        let x = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_MESSAGE_FOOTER";

        function b(e) {
            let t, n, b, y, v, _, I, w = (0, r.c)(23),
                {
                    conversationId: j,
                    isTemporaryChat: C,
                    isReadOnly: N,
                    messageId: M,
                    preciseLocationInfo: S,
                    trackImpression: R
                } = e,
                T = (0, s.y)(d.a),
                E = (0, s.z)(g.a),
                k = (0, s.z)(f.a),
                [A, P] = (0, i.useState)(!1),
                L = S.location_used?.trim() ? S.location_used : null,
                O = !N && !0 === S.requested && !0 !== S.location_is_precise && E.enabled && "granted" !== k;
            w[0] !== T ? (t = () => {
                (0, c.a)(T, l.d, {
                    entryPoint: x
                })
            }, w[0] = T, w[1] = t) : t = w[1];
            let D = (0, i.useEffectEvent)(t);
            return (w[2] !== D || w[3] !== O || w[4] !== R ? (n = () => {
                O && R && D()
            }, w[2] = D, w[3] = O, w[4] = R, w[5] = n) : n = w[5], w[6] !== O || w[7] !== R ? (b = [O, R], w[6] = O, w[7] = R, w[8] = b) : b = w[8], (0, i.useEffect)(n, b), null != L || O) ? (w[9] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(u.dg, {}), w[9] = y) : y = w[9], w[10] !== L ? (v = null != L ? (0, a.jsx)("span", {
                className: "min-w-0 truncate",
                children: L
            }) : null, w[10] = L, w[11] = v) : v = w[11], w[12] !== j || w[13] !== C || w[14] !== L || w[15] !== M || w[16] !== A || w[17] !== T || w[18] !== O ? (_ = O ? (0, a.jsxs)(a.Fragment, {
                children: [null != L ? (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: "before:content-['·']"
                }) : null, (0, a.jsx)("button", {
                    className: "shrink-0 cursor-interaction underline underline-offset-2 select-none disabled:cursor-default disabled:opacity-50",
                    disabled: A,
                    type: "button",
                    onClick: () => {
                        P(!0);
                        let e = T.get(m.f, j)?.banner_info;
                        e?.name === "precise-location-banner" && (0, m.g)(T, j, e), (0, h.a)(T, x, "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW").then(async e => {
                            e && null != M && await (0, p.a)(T, {
                                conversationId: j,
                                isTemporaryChat: C,
                                messageId: M,
                                entryPoint: x
                            })
                        }).finally(() => P(!1))
                    },
                    children: (0, a.jsx)(o.a, {
                        id: "chatgptConversations.preciseLocation.footer.button.enable",
                        defaultMessage: "Use precise location",
                        description: "Link beneath a ChatGPT response requesting permission to share precise location and regenerate the latest response using it"
                    })
                })]
            }) : null, w[12] = j, w[13] = C, w[14] = L, w[15] = M, w[16] = A, w[17] = T, w[18] = O, w[19] = _) : _ = w[19], w[20] !== v || w[21] !== _ ? (I = (0, a.jsxs)("div", {
                className: "my-2 flex min-w-0 items-center gap-1.5 text-sm text-secondary",
                "data-testid": "conversation-turn-location-footer",
                children: [y, v, _]
            }), w[20] = v, w[21] = _, w[22] = I) : I = w[22], I) : null
        }
        n.d(t, {
            a: () => b
        })
    }),
    JQAz: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("BOYb"),
            s = n("on57"),
            i = n("zd8w"),
            o = n("Wf1j"),
            u = n("oyxz"),
            c = n("NkEl"),
            d = n("PAiv"),
            m = n("KxMp"),
            p = n("CqQF"),
            f = n("GUCx"),
            g = n("zSQm"),
            h = n("WAdu"),
            x = n("vYmP");

        function b(e) {
            let t, n, s, u, d, f, b, _, I, w, j, C, N, M, S, R, T, E, k, A, P, L, O, D, G, F = (0, r.c)(60),
                {
                    attributes: B,
                    isTerminalInline: z,
                    onClick: K,
                    sources: q
                } = e,
                W = (0, o.a)(),
                H = (0, i.useContext)(h.a),
                [V, $] = (0, i.useState)(0),
                [Y, U] = (0, i.useState)(!1);
            if (F[0] !== B.label || F[1] !== B.supporting_count || F[2] !== B.title || F[3] !== B.url || F[4] !== V || F[5] !== H || F[6] !== W || F[7] !== z || F[8] !== Y || F[9] !== K || F[10] !== q) {
                R = Symbol.for("react.early_return_sentinel");
                e: {
                    var Q;
                    let e = "string" == typeof B.label && B.label.trim().length > 0 ? B.label.trim() : null,
                        r = "string" == typeof B.url && B.url.trim().length > 0 ? B.url.trim() : null,
                        i = "string" == typeof B.title && B.title.trim().length > 0 ? B.title.trim() : null,
                        o = function(e) {
                            if ("string" != typeof e) return 0;
                            let t = Number(e);
                            return Number.isInteger(t) && t > 0 ? t : 0
                        }(B.supporting_count);
                    if (null == e || null == r) {
                        R = null;
                        break e
                    }
                    let h = (0, g.a)(r);
                    if (null == h) {
                        R = null;
                        break e
                    }
                    let D = function(e, t) {
                            let n = [];
                            for (let t of e) {
                                let e = (0, g.a)(t.url);
                                null != e && n.push({
                                    ...t,
                                    href: e
                                })
                            }
                            return n.length > 0 ? n : [t]
                        }(null == q || 0 === q.length ? [{
                            kind: "primary",
                            label: e,
                            title: i,
                            url: r
                        }] : q, {
                            kind: "primary",
                            label: e,
                            title: i,
                            url: r,
                            href: h
                        }),
                        G = D[V] ?? D[0];
                    if (null == G) {
                        R = null;
                        break e
                    }
                    let J = Y ? G : D[0];
                    if (null == J) {
                        R = null;
                        break e
                    }
                    let X = o > 0 ? W.formatMessage({
                            id: "chatgpt.citation.aria.additionalSources",
                            defaultMessage: "{supportingCount, plural, one {# additional source} other {# additional sources}}",
                            description: "Accessible label segment that reports how many additional web sources support a citation"
                        }, {
                            supportingCount: o
                        }) : null,
                        Z = function(e) {
                            let {
                                label: t,
                                supportingSourcesLabel: n,
                                title: a,
                                url: r
                            } = e, l = [null != a && a !== t ? `${t}: ${a}` : t, r];
                            return null != n && l.push(n), l.join(", ")
                        }({
                            label: J.label,
                            supportingSourcesLabel: X,
                            title: J.title,
                            url: J.url
                        });n = p.a,
                    d = !0,
                    f = !0,
                    F[34] === Symbol.for("react.memo_cache_sentinel") ? (b = e => {
                        U(e), e || $(0)
                    }, F[34] = b) : b = F[34],
                    _ = 6,
                    I = "w-full",
                    w = (0, a.jsx)(v, {
                        currentSourceIndex: V,
                        onClick: K,
                        setCurrentSourceIndex: $,
                        sources: D
                    }),
                    j = "min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
                    C = "start",
                    N = "bottom",
                    S = "rich",
                    t = x.a,
                    s = e => {
                        if (null != e) return (0, c.b)(e, {
                            highlight: (0, l.e)() ? "block" : "auto",
                            text: [...D.flatMap(y), (0, l.e)() ? e.textContent : void 0].join(" ")
                        })
                    },
                    M = Z,
                    T = J.href,
                    E = (0, a.jsx)(m.a, {
                        href: J.href,
                        className: "size-3 overflow-hidden rounded-full text-current [&>img]:rounded-full",
                        globeSize: 12,
                        loadRemote: "restricted" !== H
                    }),
                    k = Y,
                    A = z,
                    P = J.label,
                    L = K,
                    O = "restricted" === H,
                    u = o > 0 ? (Q = o, `+${Q}`) : void 0
                }
                F[0] = B.label, F[1] = B.supporting_count, F[2] = B.title, F[3] = B.url, F[4] = V, F[5] = H, F[6] = W, F[7] = z, F[8] = Y, F[9] = K, F[10] = q, F[11] = t, F[12] = n, F[13] = s, F[14] = u, F[15] = d, F[16] = f, F[17] = b, F[18] = _, F[19] = I, F[20] = w, F[21] = j, F[22] = C, F[23] = N, F[24] = M, F[25] = S, F[26] = R, F[27] = T, F[28] = E, F[29] = k, F[30] = A, F[31] = P, F[32] = L, F[33] = O
            } else t = F[11], n = F[12], s = F[13], u = F[14], d = F[15], f = F[16], b = F[17], _ = F[18], I = F[19], w = F[20], j = F[21], C = F[22], N = F[23], M = F[24], S = F[25], R = F[26], T = F[27], E = F[28], k = F[29], A = F[30], P = F[31], L = F[32], O = F[33];
            return R !== Symbol.for("react.early_return_sentinel") ? R : (F[35] !== t || F[36] !== s || F[37] !== u || F[38] !== M || F[39] !== T || F[40] !== E || F[41] !== k || F[42] !== A || F[43] !== P || F[44] !== L || F[45] !== O ? (D = (0, a.jsx)(t, {
                ref: s,
                ariaLabel: M,
                href: T,
                icon: E,
                isActive: k,
                isTerminalInline: A,
                label: P,
                onClick: L,
                requiresConfirmation: O,
                supportingCountLabel: u,
                testId: "chatgpt-citation"
            }), F[35] = t, F[36] = s, F[37] = u, F[38] = M, F[39] = T, F[40] = E, F[41] = k, F[42] = A, F[43] = P, F[44] = L, F[45] = O, F[46] = D) : D = F[46], F[47] !== n || F[48] !== d || F[49] !== f || F[50] !== b || F[51] !== _ || F[52] !== I || F[53] !== w || F[54] !== j || F[55] !== C || F[56] !== N || F[57] !== S || F[58] !== D ? (G = (0, a.jsx)(n, {
                interactive: d,
                keyboardNavigation: f,
                onOpenChange: b,
                sideOffset: _,
                tooltipBodyClassName: I,
                tooltipContent: w,
                tooltipMaxWidth: j,
                align: C,
                side: N,
                variant: S,
                children: D
            }), F[47] = n, F[48] = d, F[49] = f, F[50] = b, F[51] = _, F[52] = I, F[53] = w, F[54] = j, F[55] = C, F[56] = N, F[57] = S, F[58] = D, F[59] = G) : G = F[59], G)
        }

        function y(e) {
            return [e.label, e.title, e.url, e.snippet]
        }

        function v(e) {
            var t;
            let n, l, c, p, g, x, b, y, v, _, I, w, j = (0, r.c)(41),
                {
                    currentSourceIndex: C,
                    onClick: N,
                    setCurrentSourceIndex: M,
                    sources: S
                } = e,
                R = (0, o.a)(),
                T = (0, i.useContext)(h.a),
                E = S[C] ?? S[0];
            if (null == E) return null;
            let k = S.length > 1;
            j[0] !== R || j[1] !== E.pubDate ? (n = null == E.pubDate ? null : R.formatDate(1e3 * E.pubDate, {
                year: "numeric",
                month: "long",
                day: "numeric"
            }), j[0] = R, j[1] = E.pubDate, j[2] = n) : n = j[2];
            let A = n;
            j[3] !== k || j[4] !== M || j[5] !== S.length ? (l = e => {
                k && ("ArrowLeft" === e.key && (e.preventDefault(), M(e => {
                    var t;
                    return (e + -1 + (t = S.length)) % t
                })), "ArrowRight" === e.key && (e.preventDefault(), M(e => {
                    var t;
                    return (e + 1 + (t = S.length)) % t
                })))
            }, j[3] = k, j[4] = M, j[5] = S.length, j[6] = l) : l = j[6], j[7] !== C || j[8] !== k || j[9] !== R || j[10] !== M || j[11] !== S.length ? (c = k ? (0, a.jsxs)("div", {
                className: "flex h-9 items-center justify-between gap-1.5",
                children: [(0, a.jsxs)("div", {
                    className: "mx-1.5 flex gap-1 text-secondary",
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: "h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": R.formatMessage({
                            id: "chatgpt.citation.hover.previousSource",
                            defaultMessage: "Previous source",
                            description: "Accessible label for a button that moves to the previous web citation source in a citation hover carousel"
                        }),
                        onClick: () => {
                            M(e => {
                                var t;
                                return (e + -1 + (t = S.length)) % t
                            })
                        },
                        children: (0, a.jsx)(f.a, {
                            className: "icon-sm m-auto"
                        })
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: "h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": R.formatMessage({
                            id: "chatgpt.citation.hover.nextSource",
                            defaultMessage: "Next source",
                            description: "Accessible label for a button that moves to the next web citation source in a citation hover carousel"
                        }),
                        onClick: () => {
                            M(e => {
                                var t;
                                return (e + 1 + (t = S.length)) % t
                            })
                        },
                        children: (0, a.jsx)(f.a, {
                            className: "icon-sm m-auto rotate-180"
                        })
                    })]
                }), (0, a.jsx)("span", {
                    className: "mx-3.5 text-tertiary",
                    children: (0, a.jsx)(u.a, {
                        id: "chatgpt.citation.hover.sourcePosition",
                        defaultMessage: "{currentSourceNumber}/{sourceCount}",
                        description: "Position label for the active source in a web citation hover carousel",
                        values: {
                            currentSourceNumber: C + 1,
                            sourceCount: S.length
                        }
                    })
                })]
            }) : null, j[7] = C, j[8] = k, j[9] = R, j[10] = M, j[11] = S.length, j[12] = c) : c = j[12], j[13] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, s.b)("flex cursor-interaction flex-col gap-2 p-3 no-underline outline-none", "text-default focus-visible:ring-2 focus-visible:ring-ring"), j[13] = p) : p = j[13];
            let P = E.href,
                L = "restricted" === T;
            j[14] !== E ? (g = [null != (t = E).title && t.title !== t.label ? `${t.label}: ${t.title}` : t.label, t.url].join(", "), j[14] = E, j[15] = g) : g = j[15];
            let O = "restricted" !== T;
            return j[16] !== E.href || j[17] !== O ? (x = (0, a.jsx)(m.a, {
                href: E.href,
                className: "h-4 w-4 shrink-0 text-current",
                loadRemote: O
            }), j[16] = E.href, j[17] = O, j[18] = x) : x = j[18], j[19] !== E.label ? (b = (0, a.jsx)("span", {
                className: "truncate text-default",
                children: E.label
            }), j[19] = E.label, j[20] = b) : b = j[20], j[21] !== b || j[22] !== x ? (y = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1.5",
                children: [x, b]
            }), j[21] = b, j[22] = x, j[23] = y) : y = j[23], j[24] !== E.title ? (v = (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 font-medium break-words text-default",
                children: E.title
            }), j[24] = E.title, j[25] = v) : v = j[25], j[26] !== A || j[27] !== E.snippet ? (_ = null != A || E.snippet ? (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 break-words text-secondary",
                children: null != A && E.snippet ? (0, a.jsx)(u.a, {
                    id: "chatgpt.citation.hover.publicationSummary",
                    defaultMessage: "{date} — {snippet}",
                    description: "Publication metadata below the article title in a web citation popup. Date is the formatted publication date; snippet is the source-provided summary. Both values are present, and the combined text is limited to two visible lines.",
                    values: {
                        date: A,
                        snippet: E.snippet
                    }
                }) : A ?? E.snippet
            }) : null, j[26] = A, j[27] = E.snippet, j[28] = _) : _ = j[28], j[29] !== N || j[30] !== E.href || j[31] !== y || j[32] !== v || j[33] !== _ || j[34] !== L || j[35] !== g ? (I = (0, a.jsxs)(d.a, {
                className: p,
                href: P,
                initiator: "markdown_link_click",
                onClick: N,
                requiresConfirmation: L,
                "aria-label": g,
                children: [y, v, _]
            }), j[29] = N, j[30] = E.href, j[31] = y, j[32] = v, j[33] = _, j[34] = L, j[35] = g, j[36] = I) : I = j[36], j[37] !== I || j[38] !== l || j[39] !== c ? (w = (0, a.jsxs)("div", {
                className: "flex w-[20rem] max-w-[calc(100vw-16px)] flex-col overflow-hidden text-start text-xs font-normal",
                role: "presentation",
                onKeyDown: l,
                tabIndex: -1,
                children: [c, I]
            }), j[37] = I, j[38] = l, j[39] = c, j[40] = w) : w = j[40], w
        }
        n.d(t, {
            a: () => b
        })
    })
};