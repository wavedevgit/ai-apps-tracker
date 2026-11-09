export const __rspack_esm_ids = [587936];
export const __webpack_modules__ = {
    O35A: (function(e, t) {
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
    PrhM: (function(e, t) {
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
        let s = (0, a.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(226913), n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(843292), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(896220), n.e(499790), n.e(301030), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(523433), n.e(403815), n.e(471657), n.e(92728)]).then(n.bind(n, "kHcj"))).ChatGptEntityContentReference, {
            errorFallback: r.b
        });
        n.d(t, {}, {
            a: s
        })
    }),
    j8Yf: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("rKAs"),
            l = n("JQAz"),
            i = n("NddG"),
            o = n("zSQm"),
            u = n("KDax");

        function c(e) {
            let t, n, o, u, c = (0, r.c)(18),
                {
                    isTerminalInline: d,
                    reference: m
                } = e,
                f = m.alt;
            if ("alt_text" === m.type && "latex" === m.render_as && "string" == typeof f && f.trim().length > 0) {
                let e, t;
                c[0] !== f ? (e = f.trim(), c[0] = f, c[1] = e) : e = c[1];
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
            c[4] !== m ? (t = (0, s.p)(m), c[4] = m, c[5] = t) : t = c[5];
            let g = t;
            c[6] !== m ? (n = (0, s.o)(m), c[6] = m, c[7] = n) : n = c[7];
            let h = n;
            if (null == h) {
                let e;
                return c[8] !== m ? (e = (0, a.jsx)(p, {
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
            }, c[12] = h, c[13] = g, c[14] = o) : o = c[14], c[15] !== d || c[16] !== o ? (u = (0, a.jsx)(l.a, {
                attributes: o,
                isTerminalInline: d
            }), c[15] = d, c[16] = o, c[17] = u) : u = c[17], u
        }

        function d(e) {
            let t, n, l, i, u, c, d, p, g, h, x, b, y, v = (0, r.c)(37),
                {
                    reference: _
                } = e;
            v[0] !== _ ? (t = (0, s.o)(_), v[0] = _, v[1] = t) : t = v[1];
            let I = t;
            v[2] !== _ ? (n = (0, s.n)(_), v[2] = _, v[3] = n) : n = v[3];
            let w = n;
            v[4] !== _ ? (l = (0, s.j)(_), v[4] = _, v[5] = l) : l = v[5];
            let j = l;
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
                        let t = (0, s.p)(_);
                        e = null == t ? null : (0, o.a)(t), v[18] = _, v[19] = e
                    } else e = v[19];i = e,
                    c = "my-3 max-w-[36rem] rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default",
                    d = "chatgpt-content-reference-card",
                    v[20] !== I ? (p = null == I ? null : (0, a.jsx)("div", {
                        className: "font-medium text-default",
                        children: I
                    }), v[20] = I, v[21] = p) : p = v[21],
                    v[22] !== w ? (g = null == w ? null : (0, a.jsx)("div", {
                        className: "mt-1 line-clamp-2 text-secondary",
                        children: w
                    }), v[22] = w, v[23] = g) : g = v[23],
                    v[24] !== j || v[25] !== I ? (h = null == j || j === I ? null : (0, a.jsx)("div", {
                        className: "mt-1 line-clamp-2 text-secondary",
                        children: j
                    }), v[24] = j, v[25] = I, v[26] = h) : h = v[26],
                    x = 0 === t.length ? null : (0, a.jsx)("div", {
                        className: "mt-2 flex flex-col gap-1",
                        children: t.map(m)
                    })
                }
                v[6] = j, v[7] = _, v[8] = w, v[9] = I, v[10] = i, v[11] = u, v[12] = c, v[13] = d, v[14] = p, v[15] = g, v[16] = h, v[17] = x
            } else i = v[10], u = v[11], c = v[12], d = v[13], p = v[14], g = v[15], h = v[16], x = v[17];
            if (u !== Symbol.for("react.early_return_sentinel")) return u;
            v[27] !== c || v[28] !== d || v[29] !== p || v[30] !== g || v[31] !== h || v[32] !== x ? (b = (0, a.jsxs)("div", {
                className: c,
                "data-testid": d,
                children: [p, g, h, x]
            }), v[27] = c, v[28] = d, v[29] = p, v[30] = g, v[31] = h, v[32] = x, v[33] = b) : b = v[33];
            let N = b;
            return null == i ? N : (v[34] !== N || v[35] !== i ? (y = (0, a.jsx)(f, {
                href: i,
                children: N
            }), v[34] = N, v[35] = i, v[36] = y) : y = v[36], y)
        }

        function m(e, t) {
            return (0, a.jsx)("div", {
                className: "truncate",
                children: e
            }, `${e}-${String(t)}`)
        }

        function p(e) {
            let t, n, l = (0, r.c)(4),
                {
                    reference: i
                } = e;
            l[0] !== i ? (t = (0, s.j)(i), l[0] = i, l[1] = t) : t = l[1];
            let o = t;
            return l[2] !== o ? (n = null == o ? null : (0, a.jsx)(a.Fragment, {
                children: o
            }), l[2] = o, l[3] = n) : n = l[3], n
        }

        function f(e) {
            let t, n = (0, r.c)(3),
                {
                    children: s,
                    href: l
                } = e;
            return n[0] !== s || n[1] !== l ? (t = (0, a.jsx)(u.a, {
                className: "block max-w-fit cursor-interaction rounded-lg no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring",
                href: l,
                initiator: "markdown_link_click",
                children: s
            }), n[0] = s, n[1] = l, n[2] = t) : t = n[2], t
        }
        n.d(t, {}, {
            a: p,
            b: function(e) {
                let t = (0, r.c)(7),
                    {
                        isTerminalInline: n,
                        reference: l
                    } = e;
                switch ((0, s.i)(l)) {
                    case "inline": {
                        let e;
                        return t[0] !== n || t[1] !== l ? (e = (0, a.jsx)(c, {
                            isTerminalInline: n,
                            reference: l
                        }), t[0] = n, t[1] = l, t[2] = e) : e = t[2], e
                    }
                    case "block": {
                        let e;
                        return t[3] !== l ? (e = (0, a.jsx)(d, {
                            reference: l
                        }), t[3] = l, t[4] = e) : e = t[4], e
                    }
                    case "alt": {
                        let e;
                        return t[5] !== l ? (e = (0, a.jsx)(p, {
                            reference: l
                        }), t[5] = l, t[6] = e) : e = t[6], e
                    }
                    case "hidden":
                        return null
                }
            },
            c: d,
            d: c
        })
    }),
    jFKl: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            l = n("zd8w"),
            i = n("Wf1j"),
            o = n("oyxz"),
            u = n("Sm6l"),
            c = n("HOLv"),
            d = n("bf6R"),
            m = n("KDax"),
            p = n("O35A"),
            f = n("T5cQ");

        function g(e) {
            let t, n = (0, r.c)(4),
                {
                    children: s,
                    href: l,
                    openTarget: i
                } = e;
            return n[0] !== s || n[1] !== l || n[2] !== i ? (t = (0, a.jsx)(m.a, {
                className: "cursor-interaction underline decoration-current underline-offset-2 hover:text-default",
                href: l,
                initiator: "markdown_link_click",
                openTarget: i,
                children: s
            }), n[0] = s, n[1] = l, n[2] = i, n[3] = t) : t = n[3], t
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, h, x, b, y, v = (0, r.c)(21),
                    {
                        isFullscreen: _,
                        openTarget: I
                    } = e,
                    [w, j] = (0, l.useState)(!1),
                    C = (0, i.a)(),
                    N = _ ? "absolute start-3 bottom-3" : "me-3 mb-3 self-end";
                v[0] !== N ? (t = (0, s.b)(p.a.attribution, "pointer-events-auto z-20 flex items-center overflow-hidden rounded-full bg-surface text-[10px] font-light whitespace-nowrap text-default", N), v[0] = N, v[1] = t) : t = v[1], v[2] !== C ? (n = C.formatMessage({
                    id: "chatgpt.contentReferences.map.attribution.toggle",
                    defaultMessage: "Map attribution",
                    description: "Accessible label of the map information button that shows or hides attribution links"
                }), v[2] = C, v[3] = n) : n = v[3];
                let S = _ ? "ghostActive" : "mapSurface";
                return v[4] !== w ? (m = () => j(!w), v[4] = w, v[5] = m) : m = v[5], v[6] !== w ? (h = w ? (0, a.jsx)(d.qj, {}) : (0, a.jsx)(c.a, {
                    asset: f.a
                }), v[6] = w, v[7] = h) : h = v[7], v[8] !== w || v[9] !== n || v[10] !== S || v[11] !== m || v[12] !== h ? (x = (0, a.jsx)(u.a, {
                    "aria-label": n,
                    "aria-expanded": w,
                    color: S,
                    onClick: m,
                    radius: "full",
                    size: "iconCircleSm",
                    children: h
                }), v[8] = w, v[9] = n, v[10] = S, v[11] = m, v[12] = h, v[13] = x) : x = v[13], v[14] !== w || v[15] !== I ? (b = w ? (0, a.jsxs)("div", {
                    className: "pe-2",
                    children: [(0, a.jsx)("span", {
                        "aria-hidden": !0,
                        children: "© "
                    }), (0, a.jsx)(g, {
                        href: "https://www.mapbox.com/about/maps",
                        openTarget: I,
                        children: "Mapbox"
                    }), (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        children: " "
                    }), (0, a.jsx)(g, {
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
                    }), (0, a.jsx)(g, {
                        href: "http://www.openstreetmap.org/about",
                        openTarget: I,
                        children: "OpenStreetMap"
                    })]
                }) : null, v[14] = w, v[15] = I, v[16] = b) : b = v[16], v[17] !== t || v[18] !== x || v[19] !== b ? (y = (0, a.jsxs)("div", {
                    className: t,
                    children: [x, b]
                }), v[17] = t, v[18] = x, v[19] = b, v[20] = y) : y = v[20], y
            },
            b: g
        })
    }),
    b2ei: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("DmTj"),
            l = n("hnKH"),
            i = n("tszw"),
            o = n("FER9"),
            u = n("iodE"),
            c = n("rKAs"),
            d = n("Qgfj"),
            m = n("HOLv"),
            p = n("K1wx"),
            f = n("TUMj"),
            g = n("TJEh"),
            h = n("O35A");
        let x = RegExp(`^(?:${(0,o.a)().source})$`, "u");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, b, y, v, _, I = (0, r.c)(56),
                    {
                        contentReferenceIndex: w,
                        isProvisional: j,
                        isSelected: C,
                        mapContextLabel: N,
                        onOpenEntity: S,
                        place: M,
                        presentation: R,
                        previewPortalContainer: T,
                        stopNumber: k,
                        notesClassName: E
                    } = e,
                    A = void 0 !== C && C,
                    P = (0, f.d)(),
                    O = (0, u.a)();
                I[0] !== M.id || I[1] !== M.name || I[2] !== P?.contentReferences || I[3] !== P?.contentReferences.findIndex ? (t = P?.contentReferences.findIndex(e => {
                    if ("entity" !== e.type) return !1;
                    let t = (0, g.d)(e, "string" == typeof e.category ? e.category : (0, c.t)(e)?.category ?? null);
                    return "string" == typeof M.id ? t?.id === M.id : e.name === M.name
                }) ?? -1, I[0] = M.id, I[1] = M.name, I[2] = P?.contentReferences, I[3] = P?.contentReferences.findIndex, I[4] = t) : t = I[4];
                let L = t;
                I[5] !== w || I[6] !== L || I[7] !== M || I[8] !== P ? (n = P?.contentReferences[L] ?? {
                    category: M.category ?? "local_business",
                    entity_data: M,
                    extra_params: M.extra_params,
                    name: M.name,
                    start_idx: P?.contentReferences[w]?.start_idx,
                    status: "done",
                    type: "entity"
                }, I[5] = w, I[6] = L, I[7] = M, I[8] = P, I[9] = n) : n = I[9];
                let D = n;
                I[10] !== M ? (o = g.a.safeParse(M), I[10] = M, I[11] = o) : o = I[11];
                let B = o,
                    G = i.a;
                if (null == M.rating && (G = "local_business" === D.category ? s.a : l.a), I[12] !== G || I[13] !== M.mapIcon || I[14] !== M.rating || I[15] !== k) {
                    let e = function(e) {
                        let t = e?.trim();
                        if (t && (x.test(t) || !(Array.from(t).length > 8 || /^\p{L}$/u.test(t)))) return t
                    }("string" == typeof M.mapIcon ? M.mapIcon : null);
                    if (e) {
                        let t, n = x.test(e) ? "text-sm" : void 0;
                        I[17] !== e || I[18] !== n ? (t = (0, a.jsx)("span", {
                            className: n,
                            children: e
                        }), I[17] = e, I[18] = n, I[19] = t) : t = I[19], b = t
                    } else if (null != k) {
                        let e;
                        I[20] !== k ? (e = (0, a.jsx)(d.c, {
                            value: k
                        }), I[20] = k, I[21] = e) : e = I[21], b = e
                    } else {
                        let e, t, n;
                        I[22] !== G ? (e = (0, a.jsx)(m.a, {
                            asset: G
                        }), I[22] = G, I[23] = e) : e = I[23], I[24] !== M.rating ? (t = null != M.rating ? (0, a.jsx)(d.c, {
                            value: M.rating,
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        }) : null, I[24] = M.rating, I[25] = t) : t = I[25], I[26] !== e || I[27] !== t ? (n = (0, a.jsxs)(a.Fragment, {
                            children: [e, t]
                        }), I[26] = e, I[27] = t, I[28] = n) : n = I[28], b = n
                    }
                    I[12] = G, I[13] = M.mapIcon, I[14] = M.rating, I[15] = k, I[16] = b
                } else b = I[16];
                let F = "marker" === R ? M.longitude : void 0,
                    z = "marker" === R ? M.latitude : void 0;
                return I[29] !== B || I[30] !== w || I[31] !== L || I[32] !== O || I[33] !== N || I[34] !== E || I[35] !== S || I[36] !== b || I[37] !== M.mapCarouselCard || I[38] !== M.mapLabel || I[39] !== M.name || I[40] !== M.notes || I[41] !== R || I[42] !== T || I[43] !== D || I[44] !== P ? (y = null != P && ("marker" !== R || O) ? (0, a.jsx)(p.a, {
                    businessPreview: B.success ? B.data : void 0,
                    contentReferenceIndex: L < 0 ? w : L,
                    displayName: "marker" === R ? (0, a.jsx)("span", {
                        className: h.a.pinContent,
                        children: b
                    }) : void 0,
                    mapCarouselCard: M.mapCarouselCard,
                    mapContextLabel: N,
                    mapLabel: "string" == typeof M.mapLabel ? M.mapLabel : void 0,
                    mapNotes: "string" == typeof M.notes ? M.notes : void 0,
                    mapNotesClassName: E,
                    onOpenEntity: S,
                    previewPortalContainer: T,
                    reference: D,
                    turnContext: P,
                    variant: "marker" === R ? "map-marker" : "map-card"
                }) : (0, a.jsx)("div", {
                    className: h.a.marker,
                    "aria-label": M.name,
                    role: "img",
                    children: "marker" === R ? (0, a.jsx)("span", {
                        className: h.a.pinContent,
                        children: b
                    }) : M.name
                }), I[29] = B, I[30] = w, I[31] = L, I[32] = O, I[33] = N, I[34] = E, I[35] = S, I[36] = b, I[37] = M.mapCarouselCard, I[38] = M.mapLabel, I[39] = M.name, I[40] = M.notes, I[41] = R, I[42] = T, I[43] = D, I[44] = P, I[45] = y) : y = I[45], I[46] !== M.name || I[47] !== R ? (v = "marker" === R ? (0, a.jsx)("span", {
                    className: h.a.label,
                    "data-map-label-blocker": "",
                    "aria-hidden": !0,
                    children: M.name
                }) : null, I[46] = M.name, I[47] = R, I[48] = v) : v = I[48], I[49] !== j || I[50] !== A || I[51] !== F || I[52] !== z || I[53] !== y || I[54] !== v ? (_ = (0, a.jsxs)("div", {
                    className: h.a.business,
                    "data-provisional": j,
                    "data-selected": A,
                    "data-map-marker-longitude": F,
                    "data-map-marker-latitude": z,
                    children: [y, v]
                }), I[49] = j, I[50] = A, I[51] = F, I[52] = z, I[53] = y, I[54] = v, I[55] = _) : _ = I[55], _
            }
        })
    }),
    xhWJ: (function(e, t, n) {
        var a = n("EA6X"),
            r = n("D015"),
            s = n("rKAs"),
            l = n("AuIy"),
            i = n("Wc42"),
            o = n("dQRk"),
            u = n("xof2"),
            c = n("RgGw"),
            d = n("DUJs");
        n.d(t, {}, {
            a: function(e) {
                return (0, i.a)(e.entity_lookup_id) ?? (0, i.a)(e.extra_params?.entity_lookup_id) ?? (0, i.a)(e.id) ?? void 0
            },
            b: function(e, t, n, m, p) {
                let {
                    turnContext: f
                } = t, g = (0, i.a)(n.id) ?? void 0, h = t.reference;
                if (null != g) {
                    let e = e => [...(0, s.v)(e, (0, d.a)(e, f)), ...(0, c.a)(e)].some(e => e.id === g);
                    h = (null != h && e(h) ? h : void 0) ?? f.contentReferences.find(e) ?? f.contentReferences.find(e => "entity" === e.type && (0, l.s)(e.entity_data)?.id === g) ?? t.reference
                }
                let x = null == h ? -1 : f.contentReferences.indexOf(h),
                    b = f.contentReferenceMessageIds?.[x] ?? (h === t.reference ? t.mapMessageId : void 0) ?? f.messageId,
                    y = null == b ? void 0 : e.get(o.M, f.conversationId)?.[b]?.message?.metadata;
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
                    isGenui: h?.type === "client_defined_widget" && "map" === h.category || (0, l.s)((0, l.s)(y?.model_dil)?.dil)?.type != null || y?.model_dil_v2 != null || y?.genui_refresh != null
                })
            }
        })
    }),
    RgGw: (function(e, t, n) {
        var a = n("rKAs"),
            r = n("sqog");

        function s(e) {
            return "string" == typeof e.id ? e.id : e.name
        }

        function l(e) {
            return "string" == typeof e.mapEntityId ? e.mapEntityId : s(e)
        }

        function i(e, t) {
            if (null == e || 0 === e.legs.length) return t;
            let n = [];
            return e.legs.forEach((e, a) => {
                let r = e.from_point_id ?? t[a],
                    s = e.to_point_id ?? t[a + 1],
                    l = n.at(-1);
                null != r && (null == l || u(l) !== u(r)) && n.push(r), null != s && n.push(s)
            }), n
        }

        function o(e) {
            let t = u(e),
                n = /^point-(\d+)$/.exec(t);
            return null == n ? [e] : [t, `genui-map-point-${n[1]}`]
        }

        function u(e) {
            return e.replace(/^genui-map-point-(\d+)$/, "point-$1")
        }
        n.d(t, {}, {
            a: function(e) {
                if ("client_defined_widget" === e.type) return [];
                let t = e.raw_search_entities;
                if (!Array.isArray(t) || 0 === t.length) return [];
                let n = new Set((0, a.v)(e).map(s));
                return (0, a.v)({
                    ...e,
                    entities: t
                }).filter(e => {
                    let t = s(e);
                    return !n.has(t) && (n.add(t), !0)
                })
            },
            b: s,
            c: function(e, t) {
                if (null == t) return null;
                let n = e.find(e => l(e) === l(t)) ?? e.find(e => s(e) === s(t));
                return null == n ? null : l(n)
            },
            d: l,
            e: function(e, t) {
                var n, a;
                let r, u, c, d, m = new Set,
                    p = e.filter(e => {
                        let n = null == t ? s(e) : l(e);
                        return !m.has(n) && (m.add(n), !0)
                    });
                if (null == t) return p;
                let f = (c = (r = i((a = n = t).route, a.pointIds), u = new Set(a.pointIds.keys()), r.flatMap(e => {
                    let t = o(e),
                        n = a.pointIds.findIndex((e, n) => u.has(n) && o(e).some(e => t.includes(e)));
                    return -1 === n ? [] : (u.delete(n), [n])
                })), d = new Set(n.pointIds.keys()), c.forEach(e => d.delete(e)), [...c, ...d].map(e => ({
                    pointId: n.pointIds[e],
                    visitIndex: e
                })));
                if (0 === f.length) return p;
                let g = new Map(p.map(e => [l(e), e]));
                return f.flatMap(e => {
                    let {
                        pointId: n,
                        visitIndex: a
                    } = e, r = o(n).map(e => g.get(e)).find(e => null != e);
                    if (null == r) return [];
                    let s = t.notesByVisitIndex?.get(a);
                    return [null == s ? r : {
                        ...r,
                        notes: s
                    }]
                })
            },
            f: function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, r.a)(e);
                if (null == t) {
                    let t = r.f.safeParse(e.route),
                        n = t.success ? t.data : null;
                    return null == n ? [] : [{
                        key: "route",
                        pointIds: (0, a.v)(e).map(l),
                        route: n
                    }]
                }
                let n = t.groups?.map((e, n) => {
                    let a = new Set,
                        s = e.locations.flatMap(e => e.point_id ? [e.point_id] : []),
                        l = i(e.route, s),
                        o = e.locations.map((e, n) => {
                            let s = e.point_id?.trim();
                            if (s) return s;
                            let i = t.points.findIndex((t, n) => t.name === e.name && !a.has(n)),
                                o = -1 === i ? t.points.findIndex(t => t.name === e.name) : i;
                            return -1 !== o && a.add(o), (-1 === o ? void 0 : (0, r.d)(t.points[o], o)) || l[n] || e.name.trim()
                        }),
                        u = new Map;
                    return e.locations.forEach((e, t) => {
                        let n = e.notes?.trim();
                        n && u.set(t, n)
                    }), {
                        key: e.id?.trim() || `group-${n}`,
                        dayNumber: e.day_number,
                        title: e.title,
                        pointIds: o,
                        notesByVisitIndex: u,
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
            },
            g: i,
            h: function(e, t, n) {
                let a = l(e[t]),
                    r = e.slice(0, t).filter(e => l(e) === a).length;
                return n.findIndex(e => o(e).includes(a) && 0 == r--)
            },
            i: function(e) {
                let t = new Map,
                    n = 1;
                for (let a of e)
                    if (null != a.route)
                        for (let e of i(a.route, a.pointIds)) {
                            let r = o(e),
                                s = r.map(e => t.get(e)).find(e => null != e) ?? {
                                    number: n,
                                    routed: !1
                                };
                            for (let e of (n++, s.routed = s.routed || null != a.route, r)) t.set(e, s)
                        }
                return new Map([...t].flatMap(e => {
                    let [t, n] = e;
                    return n.routed ? [
                        [t, n.number]
                    ] : []
                }))
            }
        })
    }),
    F0zR: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
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
                    let s = Math.floor(n / r);
                    if (0 !== s && (a.push(e.formatNumber(s, {
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
        })
    }),
    ry7c: (function(e, t, n) {
        n.d(t, {
            a: () => l
        });
        var a = n("v7qY"),
            r = "transition-DDTh2X";
        let s = null;

        function l(e) {
            let {
                triggerId: t,
                conversationId: n,
                reducedMotion: l,
                update: i,
                onSuperseded: o
            } = e;
            if (s?.transition.skipTransition(), s?.cleanup(), s = null, l || "function" != typeof document.startViewTransition) return void i();
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
                s = t, e.ready.catch(() => {});
                let n = () => {
                    s === t && (p(), s = null)
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
            s = n("Wf1j"),
            l = n("oyxz"),
            i = n("Sm6l"),
            o = n("bqtn"),
            u = n("HOLv"),
            c = n("bf6R"),
            d = n("BAmR");

        function m(e, t) {
            return e.title?.trim() || (0, a.jsx)(l.a, {
                id: "chatgpt.maps.route_group.day",
                defaultMessage: "Day {dayNumber}",
                description: "Map selector label for one trip day; dayNumber is the supplied day number or its one-based position",
                values: {
                    dayNumber: e.dayNumber ?? t + 1
                }
            })
        }

        function p(e) {
            return !!e.title?.trim()
        }

        function f(e) {
            return e.dayNumber
        }

        function g(e) {
            return null != e.dayNumber
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, d, h, x, b, y, v, _, I, w, j, C, N, S, M, R, T, k, E, A, P, O, L, D = (0, r.c)(67),
                    {
                        groups: B,
                        groupsTitle: G,
                        selectedGroupKey: F,
                        onSelectGroup: z
                    } = e,
                    K = (0, s.a)();
                D[0] !== B ? (t = B.every(g) && new Set(B.map(f)).size > 1, D[0] = B, D[1] = t) : t = D[1];
                let H = t,
                    W = B.every(p);
                if (B.length < 2 || !H && !W) return null;
                if (D[2] !== B || D[3] !== G || D[4] !== H || D[5] !== K || D[6] !== F) {
                    let e, t, r;
                    D[23] !== F ? (e = e => e.key === F, D[23] = F, D[24] = e) : e = D[24], b = B.findIndex(e), D[25] !== G || D[26] !== H ? (t = G?.trim() || (H ? (0, a.jsx)(l.a, {
                        id: "chatgpt.maps.route_group.all_days",
                        defaultMessage: "All days",
                        description: "Map group selector option that shows the routes and places for every trip day"
                    }) : (0, a.jsx)(l.a, {
                        id: "chatgpt.maps.route_group.all_groups",
                        defaultMessage: "All groups",
                        description: "Map group selector option that shows places from every named group"
                    })), D[25] = G, D[26] = H, D[27] = t) : t = D[27], d = t, h = m, D[28] !== H || D[29] !== K ? (r = H ? K.formatMessage({
                        id: "chatgpt.maps.route_group.filter_label",
                        defaultMessage: "Trip day",
                        description: "Accessible label for the map dropdown that filters places and routes by trip day"
                    }) : K.formatMessage({
                        id: "chatgpt.maps.route_group.generic_filter_label",
                        defaultMessage: "Map group",
                        description: "Accessible label for the map dropdown that filters places and routes by named group"
                    }), D[28] = H, D[29] = K, D[30] = r) : r = D[30], x = r, u = o.a, y = "start", v = "chatgpt", n = i.a, w = "max-w-full", j = x, C = !0, N = "mapSurface", S = "full", M = "dialogAction", _ = "truncate", I = b < 0 ? d : h(B[b], b), D[2] = B, D[3] = G, D[4] = H, D[5] = K, D[6] = F, D[7] = n, D[8] = u, D[9] = d, D[10] = h, D[11] = x, D[12] = b, D[13] = y, D[14] = v, D[15] = _, D[16] = I, D[17] = w, D[18] = j, D[19] = C, D[20] = N, D[21] = S, D[22] = M
                } else n = D[7], u = D[8], d = D[9], h = D[10], x = D[11], b = D[12], y = D[13], v = D[14], _ = D[15], I = D[16], w = D[17], j = D[18], C = D[19], N = D[20], S = D[21], M = D[22];
                D[31] !== _ || D[32] !== I ? (R = (0, a.jsx)("span", {
                    className: _,
                    children: I
                }), D[31] = _, D[32] = I, D[33] = R) : R = D[33], D[34] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, a.jsx)(c.ac, {}), D[34] = T) : T = D[34], D[35] !== n || D[36] !== R || D[37] !== w || D[38] !== j || D[39] !== C || D[40] !== N || D[41] !== S || D[42] !== M ? (k = (0, a.jsxs)(n, {
                    className: w,
                    "aria-label": j,
                    allowShrink: C,
                    color: N,
                    radius: S,
                    size: M,
                    children: [R, T]
                }), D[35] = n, D[36] = R, D[37] = w, D[38] = j, D[39] = C, D[40] = N, D[41] = S, D[42] = M, D[43] = k) : k = D[43];
                let $ = b < 0 ? "all" : String(b);
                if (D[44] !== z ? (E = () => z(null), D[44] = z, D[45] = E) : E = D[45], D[46] !== d || D[47] !== E ? (A = (0, a.jsx)(o.c.RadioItem, {
                        value: "all",
                        variant: "chatgpt",
                        onSelect: E,
                        children: d
                    }), D[46] = d, D[47] = E, D[48] = A) : A = D[48], D[49] !== h || D[50] !== B || D[51] !== z) {
                    let e;
                    D[53] !== h || D[54] !== z ? (e = (e, t) => (0, a.jsx)(o.c.RadioItem, {
                        value: String(t),
                        variant: "chatgpt",
                        onSelect: () => z(e.key),
                        children: h(e, t)
                    }, e.key), D[53] = h, D[54] = z, D[55] = e) : e = D[55], P = B.map(e), D[49] = h, D[50] = B, D[51] = z, D[52] = P
                } else P = D[52];
                return D[56] !== x || D[57] !== $ || D[58] !== A || D[59] !== P ? (O = (0, a.jsxs)(o.c.RadioGroup, {
                    "aria-label": x,
                    value: $,
                    children: [A, P]
                }), D[56] = x, D[57] = $, D[58] = A, D[59] = P, D[60] = O) : O = D[60], D[61] !== u || D[62] !== y || D[63] !== v || D[64] !== k || D[65] !== O ? (L = (0, a.jsx)(u, {
                    align: y,
                    surface: v,
                    triggerButton: k,
                    children: O
                }), D[61] = u, D[62] = y, D[63] = v, D[64] = k, D[65] = O, D[66] = L) : L = D[66], L
            },
            b: function(e) {
                let t, n, l, o = (0, r.c)(6),
                    {
                        onClick: c
                    } = e,
                    m = (0, s.a)();
                return o[0] !== m ? (t = m.formatMessage({
                    id: "chatgpt.map.resetView",
                    defaultMessage: "Reset view",
                    description: "Button that restores the map to the current results"
                }), o[0] = m, o[1] = t) : t = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, a.jsx)(u.a, {
                    asset: d.a
                }), o[2] = n) : n = o[2], o[3] !== c || o[4] !== t ? (l = (0, a.jsx)(i.a, {
                    "aria-label": t,
                    color: "mapSurface",
                    radius: "full",
                    size: "inputIcon",
                    onClick: c,
                    children: n
                }), o[3] = c, o[4] = t, o[5] = l) : l = o[5], l
            },
            c: function(e) {
                let t, n, s = (0, r.c)(3),
                    {
                        route: i
                    } = e,
                    o = i?.duration_seconds;
                return i?.legs.length !== 1 || null == o ? null : (s[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(c.qc, {}), s[0] = t) : t = s[0], s[1] !== o ? (n = (0, a.jsxs)("div", {
                    className: "flex items-center gap-1.5 rounded-full border border-default bg-surface px-3 py-1.5 text-sm font-medium select-none",
                    children: [t, o < 3600 ? (0, a.jsx)(l.a, {
                        id: "chatgpt.maps.route.duration_minutes",
                        defaultMessage: "{minutes, plural, one {# min} other {# mins}}",
                        description: "Compact route travel time under one hour shown on the map; minutes is the rounded duration, with a minimum of one",
                        values: {
                            minutes: Math.max(1, Math.round(o / 60))
                        }
                    }) : (0, a.jsx)(l.a, {
                        id: "chatgpt.maps.route.duration_hours",
                        defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
                        description: "Compact route travel time shown on the map; hours is the duration rounded to one decimal place",
                        values: {
                            hours: Math.round(o / 360) / 10
                        }
                    })]
                }), s[1] = o, s[2] = n) : n = s[2], n)
            }
        })
    }),
    YTiF: (function(e, t, n) {
        var a = n("xCr9"),
            r = n.n(a),
            s = n("rKAs"),
            l = n("AuIy"),
            i = n("yMDx"),
            o = n("hx97"),
            u = n("VYHi");

        function c(e, t, n) {
            let {
                fastPathEnabled: a
            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                fastPathEnabled: !1
            };
            if (null == t) return e;
            let r = (0, u.a)(t, {
                fastPathEnabled: a
            });
            return r.preferred.length > 0 || a && r.additional.length > 0 || !n && !0 === t.isComplete && null != t.reference ? t : e
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n = [],
                    a = [];

                function c() {
                    let e = r()(a, e => "assistant" === e.author.role && !(0, l.n)(e)) ?? a.at(-1);
                    if (e?.id == null) return;
                    let u = e.id,
                        c = a.flatMap(e => (0, s.q)(e.metadata).map(t => ({
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
                            turnId: (0, o.e)(e) ?? void 0
                        }
                    })
                }
                for (let t of e)(0, o.l)(t) ? (c(), a = []) : ("assistant" === t.author.role || "tool" === t.author.role) && a.push(t);
                return c(), {
                    history: n.filter(e => null != e.reference || (0, u.a)(e, {
                        fastPathEnabled: !1
                    }).preferred.length > 0),
                    latest: n.at(-1)
                }
            },
            b: function(e) {
                let {
                    followResponse: t
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    followResponse: !1
                };
                return t ? `response:${e.responseMessageId??e.turnContext.messageId}` : [e.mapMessageId ?? e.turnContext.contentReferenceMessageIds?.[null == e.reference ? -1 : e.turnContext.contentReferences.indexOf(e.reference)] ?? e.turnContext.messageId, e.reference?.type, e.reference?.start_idx ?? e.reference?.previewPlaceKey].join(":")
            },
            c: c,
            d: function(e, t, n, a) {
                if (e.reference?.previewPlaceKey != null) return e;
                let r = e.mapMessageId ?? e.turnContext.messageId;
                if (null != r && n?.reference != null && n.turnContext.contentReferenceMessageIds?.includes(r) && a.some(e => e.id === r && "tool" === e.author.role) && a.some(e => e.id === n.mapMessageId && "assistant" === e.author.role) && c(e, n, n.turnContext.isStreaming) === n) return n;
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
        })
    }),
    VYHi: (function(e, t, n) {
        var a = n("i5ac"),
            r = n.n(a),
            s = n("rKAs"),
            l = n("TJEh"),
            i = n("RgGw"),
            o = n("DUJs");

        function u(e) {
            return "string" == typeof e.notes && e.notes.trim().length > 0
        }
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    fastPathEnabled: n
                } = t, {
                    reference: a,
                    turnContext: c
                } = e, d = null == a ? [] : (0, s.v)(a, (0, o.a)(a, c)), m = null == a ? [] : (0, i.a)(a), p = new Map;
                if (null != a)
                    for (let e of (0, i.f)(a, (0, o.a)(a, c)))
                        for (let t of (0, i.e)(d, e)) {
                            let e = (0, i.d)(t),
                                n = t.notes;
                            "string" == typeof n && n.trim() && !p.has(e) && p.set(e, n)
                        }
                let f = [];
                if (n)
                    for (let e of c.contentReferences) {
                        let t = e === a ? m : (0, i.a)(e);
                        if (t.length > 0) {
                            f = t;
                            break
                        }
                    }
                let g = c.contentReferences.flatMap((e, t) => {
                        let n = c.contentReferenceMessageIds?.[t];
                        if ("entity" !== e.type || null != n && n !== c.messageId || "string" != typeof e.category || !(0, l.i)(e.category)) return [];
                        let a = l.b.safeParse(e.entity_data);
                        return a.success ? (0, s.v)({
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
                            notes: u(a) ? a.notes : n.notes,
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
                        return u(e) || null == t ? e : {
                            ...e,
                            notes: t
                        }
                    }).sort((e, t) => Number(u(t)) - Number(u(e))),
                    additional: _.sort((e, t) => Number(u(t)) - Number(u(e)))
                }
            }
        })
    }),
    DUJs: (function(e, t, n) {
        var a = n("sqog");
        n.d(t, {}, {
            a: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t?.contentReferences.indexOf(e) ?? -1,
                    r = t?.contentReferenceMessageIds?.[n] ?? t?.messageId,
                    s = t?.contentReferenceMessageStatuses?.[n],
                    l = t?.contentReferenceMessageIds == null ? n : t.contentReferenceMessageIds.slice(0, n).filter(e => e === r).length;
                return (0, a.a)(e, null == r || n < 0 || null == t ? void 0 : {
                    messageId: r,
                    referenceIndex: l,
                    widgets: t.dilViewState?.widgets,
                    preferResolvedData: null == s ? !t.isStreaming : "finished_successfully" === s
                })
            }
        })
    }),
    YAi8: (function(e, t, n) {
        n.d(t, {
            a: () => eo
        });
        var a = n("ABep"),
            r = n("QosV"),
            s = n("EA6X"),
            l = n("t4av"),
            i = n("slpy"),
            o = n("BOYb"),
            u = n("on57"),
            c = n("i5ac"),
            d = n.n(c),
            m = n("BolX"),
            p = n("rKAs"),
            f = n("sqog"),
            g = n("Wc42"),
            h = n("zd8w"),
            x = n("Wf1j"),
            b = n("oyxz"),
            y = n("PxnS"),
            v = n("Sm6l"),
            _ = n("JNtf"),
            I = n("HOLv"),
            w = n("bf6R"),
            j = n("Bbed"),
            C = n("ibLK"),
            N = n("zSQm"),
            S = n("yGJW"),
            M = n("tSEg"),
            R = n("eGPX"),
            T = n("hZax"),
            k = n("KDax"),
            E = n("j8Yf"),
            A = n("dQRk"),
            P = n("TUMj"),
            O = n("Nhwt"),
            L = n("TJEh"),
            D = n("jFKl"),
            B = n("ozm1"),
            G = n("AuIy"),
            F = n("OWtl");
        let z = (0, m.u)(F.a, () => new Set);
        var K = n("xhWJ"),
            H = n("tBe6"),
            W = n("D015"),
            $ = n("Cslg"),
            Y = n("WFY2"),
            q = n("Kwur"),
            V = n("xof2");
        let Q = (0, m.j)(F.a, e => new Set),
            U = (0, m.j)(F.a, e => {
                let t = new Set,
                    n = 0,
                    a = () => {
                        for (; n < 4 && t.size > 0;) {
                            let e = t.values().next().value;
                            if (null == e) return;
                            t.delete(e), n += 1, e().catch(e => {
                                Y.a.warning("Failed to record map entity impression", {
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
        var J = n("RgGw"),
            X = n("ry7c"),
            Z = n("Xj7S"),
            ee = n("YTiF"),
            et = n("j7sU"),
            en = n("QPeR"),
            ea = n("DUJs"),
            er = n("FCsE"),
            es = n("O35A"),
            el = n("wmA0");
        let ei = (0, j.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(229522), n.e(390575), n.e(353032), n.e(637885), n.e(753405), n.e(321957), n.e(585419), n.e(877700), n.e(843292), n.e(353230), n.e(81461), n.e(882456), n.e(145049), n.e(744644), n.e(962984), n.e(627451), n.e(499790), n.e(301030), n.e(909395), n.e(212487), n.e(17983), n.e(167649), n.e(509282), n.e(523433), n.e(403815), n.e(471657), n.e(305562)]).then(n.bind(n, "s2JQ"))).ChatGptMapboxCanvas, {
            propagateLoadError: !0
        });

        function eo(e) {
            var t;
            let n = (0, r.c)(19),
                {
                    contentReferenceIndex: s,
                    enableFullscreen: l,
                    fullscreenMode: i,
                    showEmptyMap: o,
                    ignoreCoordinateOutliers: u,
                    fallbackCenter: c,
                    isStreaming: d,
                    reference: m,
                    events: p
                } = e,
                f = void 0 === l || l,
                g = void 0 === i ? "conversation" : i,
                h = void 0 !== o && o,
                x = void 0 !== u && u;
            switch ("string" == typeof(t = m).type && t.type.length > 0 ? t.type : null) {
                case "map":
                case "businesses_map": {
                    let e;
                    return n[0] !== s || n[1] !== f || n[2] !== p || n[3] !== c || n[4] !== g || n[5] !== x || n[6] !== m || n[7] !== h ? (e = (0, a.jsx)(eu, {
                        contentReferenceIndex: s,
                        enableFullscreen: f,
                        fullscreenMode: g,
                        showEmptyMap: h,
                        ignoreCoordinateOutliers: x,
                        fallbackCenter: c,
                        reference: m,
                        events: p
                    }), n[0] = s, n[1] = f, n[2] = p, n[3] = c, n[4] = g, n[5] = x, n[6] = m, n[7] = h, n[8] = e) : e = n[8], e
                }
                case "client_defined_widget": {
                    let e;
                    return n[9] !== s || n[10] !== f || n[11] !== p || n[12] !== c || n[13] !== g || n[14] !== x || n[15] !== d || n[16] !== m || n[17] !== h ? (e = "map" === m.category ? (0, a.jsx)(eu, {
                        contentReferenceIndex: s,
                        enableFullscreen: f,
                        fullscreenMode: g,
                        showEmptyMap: h,
                        ignoreCoordinateOutliers: x,
                        fallbackCenter: c,
                        isStreaming: d,
                        reference: m,
                        events: p
                    }) : null, n[9] = s, n[10] = f, n[11] = p, n[12] = c, n[13] = g, n[14] = x, n[15] = d, n[16] = m, n[17] = h, n[18] = e) : e = n[18], e
                }
                default:
                    return null
            }
        }

        function eu(e) {
            var t, n;
            let c, j, F, Y, eo, eu, ep, ef, eg, eh, ey, ev, e_, eI, ew, ej, eC, eN, eS, eM, eR, eT, ek, eE, eA, eP, eO, eL, eD, eB, eG, eF, ez, eK, eH, eW, e$, eY, eq, eV, eQ, eU, eJ, eX, eZ, e0, e1, e2, e3, e5 = (0, r.c)(184),
                {
                    contentReferenceIndex: e4,
                    enableFullscreen: e6,
                    fullscreenMode: e7,
                    showEmptyMap: e8,
                    ignoreCoordinateOutliers: e9,
                    fallbackCenter: te,
                    isStreaming: tt,
                    reference: tn,
                    events: ta
                } = e,
                tr = (0, m.y)(M.a),
                ts = (0, h.useRef)(null),
                tl = (0, x.a)(),
                ti = (0, C.a)("(pointer: coarse)") && (0, o.d)();
            e5[0] !== tl ? (c = tl.formatMessage({
                id: "chatgpt.contentReferences.map.expand",
                defaultMessage: "Expand map",
                description: "Button that opens the places map fullscreen"
            }), e5[0] = tl, e5[1] = c) : c = e5[1];
            let to = c,
                tu = (0, P.d)(),
                [tc, td] = (0, h.useState)(!1),
                tm = tu?.messageId,
                tp = tu?.contentReferenceMessageIds?.[e4];
            e5[2] !== tm || e5[3] !== tp ? (j = {
                widgetType: "businesses_map",
                turnMessageId: tm,
                sourceMessageId: tp
            }, e5[2] = tm, e5[3] = tp, e5[4] = j) : j = e5[4];
            let tf = (0, m.x)(y.c, j),
                tg = tc ? tf : void 0,
                th = (0, T.h)("3194776735"),
                tx = (0, m.z)(en.a),
                tb = (0, h.useId)(),
                ty = (0, h.useId)(),
                [tv, t_] = (0, h.useState)(!1),
                [tI, tw] = (0, h.useState)(!1);
            e5[5] !== tn || e5[6] !== tu ? (F = null == tu ? "" : (0, ee.b)({
                reference: tn,
                turnContext: tu
            }), e5[5] = tn, e5[6] = tu, e5[7] = F) : F = e5[7];
            let tj = F;
            e5[8] !== tx || e5[9] !== tj ? (Y = null != tx && (0, ee.b)(tx.source) === tj, e5[8] = tx, e5[9] = tj, e5[10] = Y) : Y = e5[10];
            let tC = Y,
                tN = (0, m.x)(en.b, tj),
                [tS, tM] = (0, h.useState)(null),
                [tR, tT] = (0, h.useState)(!1),
                [tk, tE] = (0, h.useState)(0),
                [tA, tP] = (0, h.useState)(null),
                [tO, tL] = (0, h.useState)(null),
                [tD, tB] = (0, h.useState)(null),
                [tG, tF] = (0, h.useState)(null),
                tz = (0, h.useRef)(tN),
                tK = (0, h.useRef)(null);
            e5[11] === Symbol.for("react.memo_cache_sentinel") ? (eo = () => () => tK.current?.abort(), eu = [], e5[11] = eo, e5[12] = eu) : (eo = e5[11], eu = e5[12]), (0, h.useEffect)(eo, eu), e5[13] !== tN ? (ep = () => {
                tz.current = tN
            }, ef = [tN], e5[13] = tN, e5[14] = ep, e5[15] = ef) : (ep = e5[14], ef = e5[15]), (0, h.useLayoutEffect)(ep, ef);
            let tH = async () => {
                if (th && "dialog" === e7) return void tw(!0);
                if (!th || null == tu || tC) return;
                tK.current?.abort();
                let e = new AbortController;
                tK.current = e;
                let t = !0;
                try {
                    await (0, et.b)()
                } catch {
                    t = !1
                }
                if (e.signal.aborted) return;
                tF(null);
                let n = tu.contentReferenceMessageIds?.[e4] ?? tu.messageId,
                    a = null != tV || 1 === tq.length;
                (0, X.a)({
                    triggerId: tb,
                    conversationId: tu.conversationId,
                    reducedMotion: !t || tr.get(R.c),
                    onSuperseded: () => e.abort(),
                    update: () => {
                        if (e.signal.aborted) return;
                        tK.current = null, tr.set(en.a, {
                            source: {
                                reference: tn,
                                turnContext: tu,
                                mapMessageId: n
                            },
                            view: tz.current,
                            triggerId: tb,
                            ...null == tD ? {} : {
                                selectedPlace: tD
                            },
                            ...null == tV ? {} : {
                                selectedGroupKey: tV.key
                            },
                            ...a && null != tO ? {
                                selectedCardKey: tO
                            } : {}
                        });
                        let t = tr.get(A.j, tu.conversationId) ?? void 0;
                        (0, S.a)(tr, l.p, {
                            conversationId: t,
                            messageId: n,
                            entryPoint: "CHATGPT_PLACES_ENTRY_POINT_MAP_WIDGET"
                        })
                    }
                })
            };
            e5[16] !== e4 || e5[17] !== tn || e5[18] !== tu ? (eg = (0, ea.a)(tn, tu, e4), e5[16] = e4, e5[17] = tn, e5[18] = tu, e5[19] = eg) : eg = e5[19];
            let tW = eg;
            e5[20] !== e4 || e5[21] !== ti || e5[22] !== tv || e5[23] !== tn || e5[24] !== tr || e5[25] !== tS || e5[26] !== tu || e5[27] !== tW ? (eh = () => {
                if (! function(e, t, n, a) {
                        let r = (0, P.c)(t, n),
                            s = t?.contentReferenceMessageStatuses?.[n],
                            i = (0, G.s)(t?.contentReferences[n]?.data)?.widget_type;
                        if (null == t || null == r || "map_widget_v2" !== i || null == a || 0 === a.points.length || (null == s ? t.isStreaming : "finished_successfully" !== s) || t.shouldBlockExternalEgress || !1 === t.trackShownImpressions || !1 === t.isPresented) return;
                        let o = `${r.messageId}:${r.index}`,
                            u = e.get(z);
                        if (u.has(o)) return;
                        e.set(z, new Set([...u, o]));
                        let c = a.groups?.length ? a.groups.map(e => e.route) : [a.route],
                            d = a.carousel?.known_fields,
                            m = null != d && ["rating", "hours", "category", "price"].some(e => !d.some(t => t === e)),
                            p = a.points.some((e, t) => {
                                let n = a.carousel?.cards?.[(0, f.d)(e, t)];
                                return null != n && Object.values(n).some(e => null != e)
                            });
                        (0, S.a)(e, l.a, {
                            messageId: r.messageId,
                            contentReferenceIndex: (0, B.b)(r.index),
                            hasRoute: c.some(e => null != e),
                            hasCustomIcons: a.points.some(e => !!e.icon?.trim()),
                            hasCarouselEdits: m || p,
                            carouselHidden: a.carousel?.visibility === "hidden"
                        })
                    }(tr, tu, e4, tW), tW?.widget_type === "event_sidebar_map_widget" && (ti || tW.points[0]?.address && !tv)) return;
                let e = (0, J.f)(tn, tW).find(e => e.key === tS),
                    t = new Set((0, J.e)((0, p.v)(tn, tW), e).map(ed));
                ! function(e, t, n, a) {
                    let r = (0, P.c)(t, n),
                        l = t?.contentReferences[n];
                    if (null == t || null == r || !r.messageId || r.messageId.startsWith("WEB:") || l?.type !== "client_defined_widget" || "map" !== l.category || null == a || t.shouldBlockExternalEgress || !1 === t.trackShownImpressions || !1 === t.isPresented) return;
                    let i = e.get(A.j, t.conversationId) ?? void 0,
                        o = t.messageId ?? r.messageId,
                        u = "number" == typeof l?.start_idx ? (0, W.a)(l.start_idx) : void 0,
                        c = e.get(Q, JSON.stringify([t.conversationId, r.messageId, r.index])),
                        d = [];
                    for (let e of a.points) {
                        let t = (0, g.a)(e.entity?.entity_key) ?? (0, g.a)(e.extra_params?.entity_key);
                        if (null == e.entity || null == t && null == (0, g.a)(e.entity.provider) && null == (0, g.a)(e.extra_params?.business_id)) continue;
                        let n = (0, g.a)(e.entity.entity_lookup_id) ?? (0, g.a)(e.extra_params?.entity_lookup_id) ?? t ?? (0, g.a)(e.extra_params?.business_id);
                        null != n && (c.has(n) || (c.add(n), d.push({
                            entityId: n,
                            entityKey: t ?? void 0
                        })))
                    }
                    if (0 === d.length) return;
                    let m = (0, V.a)(e, t.conversationId, o),
                        p = e.get($.f),
                        f = e.get($.k),
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
                            surfaceLocation: s.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                            entityAffordance: s.d.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER,
                            parentContext: {
                                widgetType: "map",
                                widgetName: (0, g.a)((0, G.s)(l.data)?.widget_type) ?? void 0
                            },
                            isGenui: !0
                        };
                        (0, V.b)(e, c), e.get(S.c).isChatgptBrowserReplacement && (0, S.a)(e, H.d, {
                            eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_ENTITY_ANCHOR_SHOWN",
                            conversationId: i,
                            messageId: r.messageId,
                            contentReferenceType: "entity",
                            category: "local_business",
                            businessId: n,
                            widgetName: c.parentContext.widgetName
                        }), h(async () => {
                            p === e.get($.f) && f === e.get($.k) && await q.Request.safePost("/unified_user_signals", {
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
                }(tr, tu, e4, null == tW ? null : {
                    ...tW,
                    points: tW.points.filter((e, n) => t.has((0, f.d)(e, n)))
                })
            }, ey = [tr, tu, e4, tW, tn, tS, ti, tv], e5[20] = e4, e5[21] = ti, e5[22] = tv, e5[23] = tn, e5[24] = tr, e5[25] = tS, e5[26] = tu, e5[27] = tW, e5[28] = eh, e5[29] = ey) : (eh = e5[28], ey = e5[29]), (0, h.useEffect)(eh, ey);
            let t$ = tI || tW?.fill;
            if (ti && tW?.widget_type === "event_sidebar_map_widget") return null;
            let tY = tW?.widget_type === "event_sidebar_map_widget" ? tW.points[0] : void 0,
                tq = (0, J.f)(tn, tW);
            e5[30] !== tS ? (ev = e => e.key === tS, e5[30] = tS, e5[31] = ev) : ev = e5[31];
            let tV = tq.find(ev),
                tQ = null == tV ? tq : [tV],
                tU = (0, p.v)(tn, tW),
                tJ = (0, J.e)(tU, tV);
            e5[32] !== e4 || e5[33] !== tn || e5[34] !== tu ? (e_ = null == tu || tu.isStreaming || tu.preciseLocationInfo?.requested !== !0 || "below_map" !== tu.preciseLocationInfo.footer_location || "map" !== tn.type || (tu.contentReferenceMessageIds?.[e4] ?? tu.messageId) !== tu.preciseLocationMessageId || tu.contentReferences.findIndex((e, t) => "map" === e.type && (tu.contentReferenceMessageIds?.[t] ?? tu.messageId) === tu.preciseLocationMessageId) !== e4 ? null : (0, a.jsx)(O.a, {
                conversationId: tu.conversationId,
                isTemporaryChat: tu.isTemporaryChat ?? !1,
                isReadOnly: !0 === tu.isReadOnly || !0 === tu.shouldBlockExternalEgress || !0 !== tu.isLatestActorMessage,
                messageId: tu.preciseLocationMessageId,
                preciseLocationInfo: tu.preciseLocationInfo,
                trackImpression: !1 !== tu.trackShownImpressions && !1 !== tu.isPresented
            }, tu.preciseLocationMessageId), e5[32] = e4, e5[33] = tn, e5[34] = tu, e5[35] = e_) : e_ = e5[35];
            let tX = e_;
            if (!e8 && 0 === tJ.length && null == tW) {
                let e, t;
                return e5[36] !== tn ? (e = (0, a.jsx)(E.c, {
                    reference: tn
                }), e5[36] = tn, e5[37] = e) : e = e5[37], e5[38] !== tX || e5[39] !== e ? (t = (0, a.jsxs)(a.Fragment, {
                    children: [e, tX]
                }), e5[38] = tX, e5[39] = e, e5[40] = t) : t = e5[40], t
            }
            let tZ = !(void 0 !== tt && tt) && tW?.carousel?.visibility !== "hidden";
            e5[41] !== tn || e5[42] !== tZ || e5[43] !== tW?.min_height ? (eI = (0, f.c)(tn) ?? Math.max((t = tn, n = tZ, ex(t) ? 300 + 144 * !!n : 400), tW?.min_height ?? 0), e5[41] = tn, e5[42] = tZ, e5[43] = tW?.min_height, e5[44] = eI) : eI = e5[44];
            let t0 = eI,
                t1 = d()(tJ.filter(eb), J.d);
            if (!e8 && 0 === t1.length && null == tW || tu?.shouldBlockExternalEgress === !0) return (0, a.jsxs)("div", {
                className: "my-3",
                children: [(0, a.jsx)(em, {
                    places: tJ
                }), tX]
            });
            e5[45] !== e4 || e5[46] !== tn || e5[47] !== tr || e5[48] !== tu ? (ew = (e, t, n) => {
                null != tu && ((0, K.b)(tr, {
                    reference: tn,
                    turnContext: tu,
                    mapMessageId: tu.contentReferenceMessageIds?.[e4] ?? tu.messageId
                }, e, t, s.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE), "marker" === t && (0, S.a)(tr, l.d, {
                    conversationId: tr.get(A.j, tu.conversationId) ?? void 0,
                    messageId: tu.contentReferenceMessageIds?.[e4] ?? tu.messageId,
                    entityId: (0, K.a)(e),
                    source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_MARKER"
                })), tP((0, J.d)(e)), tL(n ?? null), tB(e)
            }, e5[45] = e4, e5[46] = tn, e5[47] = tr, e5[48] = tu, e5[49] = ew) : ew = e5[49];
            let t2 = ew,
                t3 = tA ?? (tY?.address && 1 === t1.length ? (0, J.d)(t1[0]) : null),
                t5 = tu?.conversationId,
                t4 = null == tV ? (0, J.c)(t1, tU.find(e => (0, J.d)(e) === tG)) : tG,
                t6 = e8 ? te : void 0,
                t7 = e8 && 0 === t1.length ? null == te ? 1 : 10 : void 0,
                t8 = tu?.contentReferenceMessageIds?.[e4] ?? tu?.messageId;
            e5[50] !== ta ? (ej = e => {
                td(e), e && ta?.onReady?.()
            }, e5[50] = ta, e5[51] = ej) : ej = e5[51];
            let t9 = () => {
                ta?.onMapClick?.(), e6 && tH()
            };
            e5[52] !== ta || e5[53] !== t2 ? (eC = e => {
                ta?.onPinClick?.(), t2(e, "marker")
            }, e5[52] = ta, e5[53] = t2, e5[54] = eC) : eC = e5[54];
            let ne = null == tV ? (0, J.c)(t1, tU.find(e => (0, J.d)(e) === t3)) : t3;
            e5[55] !== tZ ? (eN = tZ ? void 0 : {
                bottom: 20
            }, e5[55] = tZ, e5[56] = eN) : eN = e5[56], e5[57] !== ei || e5[58] !== e4 || e5[59] !== tQ || e5[60] !== e9 || e5[61] !== tI || e5[62] !== t1 || e5[63] !== tk || e5[64] !== t5 || e5[65] !== t4 || e5[66] !== t6 || e5[67] !== t7 || e5[68] !== t8 || e5[69] !== ej || e5[70] !== t9 || e5[71] !== eC || e5[72] !== ne || e5[73] !== eN ? (eS = (0, a.jsx)(ei, {
                contentReferenceIndex: e4,
                conversationId: t5,
                hoveredBusinessKey: t4,
                isFullscreen: tI,
                ignoreCoordinateOutliers: e9,
                fallbackCenter: t6,
                initialZoom: t7,
                messageId: t8,
                onReadyChange: ej,
                onUserMovementChange: tT,
                onExpand: t9,
                onOpenEntity: eC,
                places: t1,
                resetViewKey: tk,
                routeGroups: tQ,
                selectedBusinessKey: ne,
                viewRef: tz,
                viewportPadding: eN
            }), e5[57] = ei, e5[58] = e4, e5[59] = tQ, e5[60] = e9, e5[61] = tI, e5[62] = t1, e5[63] = tk, e5[64] = t5, e5[65] = t4, e5[66] = t6, e5[67] = t7, e5[68] = t8, e5[69] = ej, e5[70] = t9, e5[71] = eC, e5[72] = ne, e5[73] = eN, e5[74] = eS) : eS = e5[74];
            let nt = eS,
                nn = t$ && "flex h-full min-h-0 flex-col";
            e5[75] !== nn ? (eM = (0, u.b)(es.a.widget, "not-prose w-full", nn), e5[75] = nn, e5[76] = eM) : eM = e5[76], e5[77] !== tr || e5[78] !== tg ? (eR = e => (0, y.a)(tr, tg, e, ts), e5[77] = tr, e5[78] = tg, e5[79] = eR) : eR = e5[79], e5[80] !== t$ || e5[81] !== tn ? (eT = (0, u.b)(ex(tn) && "pb-2", t$ && "min-h-0 flex-1"), e5[80] = t$, e5[81] = tn, e5[82] = eT) : eT = e5[82];
            let na = t$ && "h-full";
            e5[83] !== na ? (ek = (0, u.b)("relative isolate overflow-hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-relaxed motion-safe:ease-out", es.a.frame, na), e5[83] = na, e5[84] = ek) : ek = e5[84], e5[85] !== t$ || e5[86] !== t0 ? (eE = t$ ? void 0 : {
                maxHeight: t0
            }, e5[85] = t$, e5[86] = t0, e5[87] = eE) : eE = e5[87];
            let nr = t$ && "h-full";
            e5[88] !== nr ? (eA = (0, u.b)(es.a.frame, "bg-surface-secondary", nr), e5[88] = nr, e5[89] = eA) : eA = e5[89], e5[90] !== t$ || e5[91] !== t0 ? (eP = t$ ? void 0 : {
                height: t0
            }, e5[90] = t$, e5[91] = t0, e5[92] = eP) : eP = e5[92], e5[93] === Symbol.for("react.memo_cache_sentinel") ? (eO = (0, u.b)(es.a.frame, es.a.viewport, "relative isolate h-full overflow-hidden"), e5[93] = eO) : eO = e5[93];
            let ns = tC ? null : nt;
            e5[94] !== tQ || e5[95] !== tC || e5[96] !== tq || e5[97] !== tr || e5[98] !== tV || e5[99] !== tf || e5[100] !== tR || e5[101] !== tW?.groups_title ? (eL = !tC && (0, a.jsxs)("div", {
                className: "absolute start-3 top-3 z-20 flex items-center gap-2",
                children: [(0, a.jsx)(Z.a, {
                    groups: tq,
                    groupsTitle: tW?.groups_title,
                    selectedGroupKey: tV?.key ?? null,
                    onSelectGroup: e => {
                        tM(e), tT(!1), tP(null), tL(null), tB(null), tF(null)
                    }
                }), 1 === tQ.length && (0, a.jsx)(Z.c, {
                    route: tQ[0].route
                }), tR && (0, a.jsx)(Z.b, {
                    onClick: () => {
                        tP(null), tF(null), tT(!1), (0, y.b)(tr, tf, "reset_view"), tE(ec)
                    }
                })]
            }), e5[94] = tQ, e5[95] = tC, e5[96] = tq, e5[97] = tr, e5[98] = tV, e5[99] = tf, e5[100] = tR, e5[101] = tW?.groups_title, e5[102] = eL) : eL = e5[102], e5[103] === Symbol.for("react.memo_cache_sentinel") ? (eD = (0, a.jsx)("div", {
                className: (0, u.b)(es.a.frame, "pointer-events-none absolute inset-0 z-2 ring-1 ring-border/50 ring-inset")
            }), e5[103] = eD) : eD = e5[103], e5[104] !== e4 || e5[105] !== tQ || e5[106] !== ta || e5[107] !== t2 || e5[108] !== tI || e5[109] !== tC || e5[110] !== tJ || e5[111] !== tA || e5[112] !== tO || e5[113] !== tZ ? (eB = !tC && (0, a.jsxs)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col",
                children: [(0, a.jsx)(D.a, {
                    isFullscreen: !1,
                    openTarget: tI ? "external-browser" : void 0
                }), tZ && (0, a.jsx)(er.a, {
                    contentReferenceIndex: e4,
                    isFullscreen: !1,
                    onHoverBusiness: tF,
                    onPlacesShown: ta?.onCardsShown,
                    onOpenEntity: (e, t) => {
                        ta?.onCardClick?.(), t2(e, "list", t)
                    },
                    places: tJ,
                    selectedBusinessKey: tA,
                    selectedCardKey: tO,
                    route: 1 === tQ.length ? tQ[0].route : null
                })]
            }), e5[104] = e4, e5[105] = tQ, e5[106] = ta, e5[107] = t2, e5[108] = tI, e5[109] = tC, e5[110] = tJ, e5[111] = tA, e5[112] = tO, e5[113] = tZ, e5[114] = eB) : eB = e5[114], e5[115] !== e6 || e5[116] !== to || e5[117] !== tH || e5[118] !== tI || e5[119] !== th || e5[120] !== tb ? (eG = th && e6 && !tI && (0, a.jsx)("div", {
                className: "absolute end-3 top-3 z-20",
                children: (0, a.jsx)(i.a, {
                    content: to,
                    children: (0, a.jsx)(v.a, {
                        id: tb,
                        "aria-label": to,
                        color: "mapSurface",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => void tH(),
                        children: (0, a.jsx)(w.N, {})
                    })
                })
            }), e5[115] = e6, e5[116] = to, e5[117] = tH, e5[118] = tI, e5[119] = th, e5[120] = tb, e5[121] = eG) : eG = e5[121], e5[122] !== ns || e5[123] !== eL || e5[124] !== eB || e5[125] !== eG ? (eF = (0, a.jsxs)("div", {
                className: eO,
                children: [ns, eL, eD, eB, eG]
            }), e5[122] = ns, e5[123] = eL, e5[124] = eB, e5[125] = eG, e5[126] = eF) : eF = e5[126], e5[127] !== eA || e5[128] !== eP || e5[129] !== eF ? (ez = (0, a.jsx)("div", {
                className: eA,
                style: eP,
                children: eF
            }), e5[127] = eA, e5[128] = eP, e5[129] = eF, e5[130] = ez) : ez = e5[130], e5[131] !== ek || e5[132] !== eE || e5[133] !== ez ? (eK = (0, a.jsx)("div", {
                className: ek,
                style: eE,
                children: ez
            }), e5[131] = ek, e5[132] = eE, e5[133] = ez, e5[134] = eK) : eK = e5[134], e5[135] !== eT || e5[136] !== eK ? (eH = (0, a.jsx)("div", {
                className: eT,
                children: eK
            }), e5[135] = eT, e5[136] = eK, e5[137] = eH) : eH = e5[137], e5[138] !== tX || e5[139] !== eM || e5[140] !== eR || e5[141] !== eH || e5[142] !== tb ? (eW = (0, a.jsxs)("div", {
                className: eM,
                ref: eR,
                "data-testid": "businesses-map-widget",
                "data-immersive-map-inline": tb,
                children: [eH, tX]
            }), e5[138] = tX, e5[139] = eM, e5[140] = eR, e5[141] = eH, e5[142] = tb, e5[143] = eW) : eW = e5[143];
            let nl = eW;
            if (tI) {
                let e, t, n;
                return e5[144] !== tb ? (e = {
                    "aria-describedby": void 0,
                    onCloseAutoFocus: e => {
                        let t = document.getElementById(tb);
                        null != t && (e.preventDefault(), t.focus({
                            preventScroll: !0
                        }))
                    }
                }, e5[144] = tb, e5[145] = e) : e = e5[145], e5[146] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(_.e, {
                    className: "sr-only",
                    children: (0, a.jsx)(b.a, {
                        id: "chatgpt.contentReferences.map.title",
                        defaultMessage: "Map",
                        description: "Title of the fullscreen places map"
                    })
                }), e5[146] = t) : t = e5[146], e5[147] !== nl || e5[148] !== e ? (n = (0, a.jsxs)(_.a, {
                    contentClassName: "h-full w-full",
                    contentProps: e,
                    onOpenChange: tw,
                    open: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    children: [t, nl]
                }), e5[147] = nl, e5[148] = e, e5[149] = n) : n = e5[149], n
            }
            if (!tY?.address) return nl;
            e5[150] !== tY.address || e5[151] !== tY.name ? (e$ = [tY.name, tY.address].filter(Boolean), e5[150] = tY.address, e5[151] = tY.name, e5[152] = e$) : e$ = e5[152];
            let ni = e$.join(", ");
            e5[153] !== tY ? (eY = (0, N.a)((0, L.e)(tY) ?? "") || null, e5[153] = tY, e5[154] = eY) : eY = e5[154];
            let no = eY;
            e5[155] === Symbol.for("react.memo_cache_sentinel") ? (eq = (0, a.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, a.jsx)(I.a, {
                    asset: el.a
                })
            }), e5[155] = eq) : eq = e5[155], e5[156] !== no || e5[157] !== ni ? (eV = null == no ? ni : (0, a.jsx)(k.a, {
                className: "cursor-interaction hover:underline",
                href: no,
                initiator: "markdown_link_click",
                children: ni
            }), e5[156] = no, e5[157] = ni, e5[158] = eV) : eV = e5[158], e5[159] !== eV ? (eQ = (0, a.jsx)("span", {
                className: "min-w-0 flex-1 text-sm font-medium break-words whitespace-normal select-text",
                children: eV
            }), e5[159] = eV, e5[160] = eQ) : eQ = e5[160], e5[161] !== tl ? (eU = tl.formatMessage({
                id: "chatgpt.eventSidebar.toggleVenueMap",
                defaultMessage: "Toggle venue map",
                description: "Button beside an event venue address that shows or hides the venue map."
            }), e5[161] = tl, e5[162] = eU) : eU = e5[162], e5[163] !== tv ? (eJ = () => {
                tv && tK.current?.abort(), t_(!tv)
            }, e5[163] = tv, e5[164] = eJ) : eJ = e5[164];
            let nu = tv && "rotate-180";
            e5[165] !== nu ? (eX = (0, u.b)("transition-transform", nu), e5[165] = nu, e5[166] = eX) : eX = e5[166], e5[167] !== eX ? (eZ = (0, a.jsx)(w.$b, {
                className: eX
            }), e5[167] = eX, e5[168] = eZ) : eZ = e5[168], e5[169] !== tv || e5[170] !== eU || e5[171] !== eJ || e5[172] !== eZ || e5[173] !== ty ? (e0 = (0, a.jsx)(v.a, {
                "aria-controls": ty,
                "aria-expanded": tv,
                "aria-label": eU,
                color: "ghostSecondary",
                size: "icon",
                className: "shrink-0",
                onClick: eJ,
                children: eZ
            }), e5[169] = tv, e5[170] = eU, e5[171] = eJ, e5[172] = eZ, e5[173] = ty, e5[174] = e0) : e0 = e5[174], e5[175] !== eQ || e5[176] !== e0 ? (e1 = (0, a.jsxs)("div", {
                className: "flex min-h-11 items-center gap-4 py-2",
                children: [eq, eQ, e0]
            }), e5[175] = eQ, e5[176] = e0, e5[177] = e1) : e1 = e5[177];
            let nc = tv && nl;
            return e5[178] !== nc || e5[179] !== ty ? (e2 = (0, a.jsx)("div", {
                id: ty,
                children: nc
            }), e5[178] = nc, e5[179] = ty, e5[180] = e2) : e2 = e5[180], e5[181] !== e1 || e5[182] !== e2 ? (e3 = (0, a.jsxs)("div", {
                className: "-mt-3 w-full min-w-0 border-t border-default pb-2",
                children: [e1, e2]
            }), e5[181] = e1, e5[182] = e2, e5[183] = e3) : e3 = e5[183], e3
        }

        function ec(e) {
            return e + 1
        }

        function ed(e) {
            return e.mapEntityId
        }

        function em(e) {
            let t, n, s, l = (0, r.c)(5),
                {
                    places: i
                } = e;
            return l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)("div", {
                className: "font-medium text-default",
                children: (0, a.jsx)(b.a, {
                    id: "chatgpt.contentReferences.localResults.title",
                    defaultMessage: "Local results",
                    description: "Title for a local business map content reference card"
                })
            }), l[0] = t) : t = l[0], l[1] !== i ? (n = i.slice(0, 5).map(ep), l[1] = i, l[2] = n) : n = l[2], l[3] !== n ? (s = (0, a.jsxs)("div", {
                className: "rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default",
                "data-testid": "chatgpt-content-reference-card",
                children: [t, (0, a.jsx)("div", {
                    className: "mt-3 flex flex-col gap-2",
                    children: n
                })]
            }), l[3] = n, l[4] = s) : s = l[4], s
        }

        function ep(e, t) {
            return (0, a.jsx)(ef, {
                place: e
            }, `${e.name}-${String(t)}`)
        }

        function ef(e) {
            var t, n, s, l;
            let i, o, u, c, d, m, p, f, h, b, y, v, _, I = (0, r.c)(28),
                {
                    place: w
                } = e;
            I[0] !== w ? (t = w, u = null == (i = (0, g.a)(t.provider_url) ?? (0, g.a)(t.website_url)) ? null : (0, N.a)(i) ?? null, I[0] = w, I[1] = u) : u = I[1];
            let j = u,
                C = (0, x.a)();
            I[2] !== C || I[3] !== w ? (n = w, s = C, c = null == n.rating ? null : null == n.review_count ? s.formatNumber(n.rating, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1
            }) : `${s.formatNumber(n.rating,{maximumFractionDigits:1,minimumFractionDigits:1})} (${s.formatNumber(n.review_count)})`, I[2] = C, I[3] = w, I[4] = c) : c = I[4];
            let S = c;
            I[5] !== w.address ? (d = (0, g.a)(w.address), I[5] = w.address, I[6] = d) : d = I[6], I[7] !== w.price_str ? (m = (0, g.a)(w.price_str), I[7] = w.price_str, I[8] = m) : m = I[8], I[9] !== S || I[10] !== d || I[11] !== m ? (p = [d, S, m].filter(eh), I[9] = S, I[10] = d, I[11] = m, I[12] = p) : p = I[12];
            let M = p;
            I[13] !== w ? (l = w, f = null == (o = l.categories?.map(g.a).filter(e => null != e)) || 0 === o.length ? null : o.join(", "), I[13] = w, I[14] = f) : f = I[14];
            let R = f;
            return I[15] !== j || I[16] !== w.name ? (h = null == j ? w.name : (0, a.jsx)(D.b, {
                href: j,
                children: w.name
            }), I[15] = j, I[16] = w.name, I[17] = h) : h = I[17], I[18] !== h ? (b = (0, a.jsx)("div", {
                className: "font-medium text-default",
                children: h
            }), I[18] = h, I[19] = b) : b = I[19], I[20] !== M ? (y = 0 === M.length ? null : (0, a.jsx)("div", {
                className: "mt-1 flex flex-wrap gap-x-1 text-secondary",
                children: M.map(eg)
            }), I[20] = M, I[21] = y) : y = I[21], I[22] !== R ? (v = null == R ? null : (0, a.jsx)("div", {
                className: "mt-1 text-secondary",
                children: R
            }), I[22] = R, I[23] = v) : v = I[23], I[24] !== v || I[25] !== b || I[26] !== y ? (_ = (0, a.jsxs)("div", {
                className: "rounded-md border border-subtle p-2",
                children: [b, y, v]
            }), I[24] = v, I[25] = b, I[26] = y, I[27] = _) : _ = I[27], _
        }

        function eg(e, t) {
            return (0, a.jsxs)("span", {
                children: [0 === t ? null : (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    children: "· "
                }), e]
            }, e)
        }

        function eh(e) {
            return null != e
        }

        function ex(e) {
            return "number" == typeof e.start_idx && e.start_idx < 4
        }

        function eb(e) {
            return null != e.latitude && null != e.longitude
        }
    }),
    FCsE: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("t4av"),
            l = n("D015"),
            i = n("on57"),
            o = n("suct"),
            u = n("iodE"),
            c = n("IPUh"),
            d = n("BolX"),
            m = n("zd8w"),
            p = n("Wf1j"),
            f = n("oyxz"),
            g = n("X3K1"),
            h = n("T1PX"),
            x = n("yGJW"),
            b = n("OWtl");
        n("V8uZ");
        var y = n("HgLj"),
            v = n("dQRk"),
            _ = n("TUMj"),
            I = n("b2ei"),
            w = n("xhWJ"),
            j = n("RgGw"),
            C = n("F0zR"),
            N = n("phAi"),
            S = n("PrhM");

        function M(e, t) {
            return (0, a.jsxs)("div", {
                className: (0, i.b)(S.a.card, "flex w-4/5 max-w-80 items-center gap-3 p-4 md:w-full md:max-w-none"),
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

        function R(e) {
            let t, n, s, l, i, o, d, p, f, g = (0, r.c)(23);
            g[0] !== e ? ({
                onShown: t,
                place: n,
                ref: l,
                ...s
            } = e, g[0] = e, g[1] = t, g[2] = n, g[3] = s, g[4] = l) : (t = g[1], n = g[2], s = g[3], l = g[4]);
            let h = (0, u.a)(),
                x = (0, m.useRef)(null);
            g[5] !== t || g[6] !== n ? (i = e => {
                e.some(T) && t?.(n)
            }, g[5] = t, g[6] = n, g[7] = i) : i = g[7];
            let b = (0, m.useEffectEvent)(i),
                v = null != t;
            g[8] !== h || g[9] !== b || g[10] !== v ? (o = () => {
                if (!h || !v || null == x.current) return;
                let e = new IntersectionObserver(e => b(e), {
                    threshold: 0
                });
                return e.observe(x.current), () => e.disconnect()
            }, g[8] = h, g[9] = b, g[10] = v, g[11] = o) : o = g[11], g[12] !== h || g[13] !== n || g[14] !== v ? (d = [h, n, v], g[12] = h, g[13] = n, g[14] = v, g[15] = d) : d = g[15], (0, m.useEffect)(o, d), g[16] !== l ? (p = (0, y.a)(x, l), g[16] = l, g[17] = p) : p = g[17];
            let _ = !h,
                I = !h || void 0;
            return g[18] !== s || g[19] !== p || g[20] !== _ || g[21] !== I ? (f = (0, a.jsx)(c.a.div, {
                ...s,
                ref: p,
                inert: _,
                "aria-hidden": I
            }), g[18] = s, g[19] = p, g[20] = _, g[21] = I, g[22] = f) : f = g[22], f
        }

        function T(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, c, g, y, T, k = (0, r.c)(21),
                    {
                        contentReferenceIndex: E,
                        isFullscreen: A,
                        isLoading: P,
                        onOpenEntity: O,
                        onHoverBusiness: L,
                        places: D,
                        onPlacesShown: B,
                        route: G,
                        selectedBusinessKey: F,
                        selectedCardKey: z
                    } = e,
                    K = void 0 !== P && P,
                    H = (0, d.y)(b.a),
                    W = (0, p.a)(),
                    $ = (0, _.d)(),
                    Y = (0, h.a)(),
                    q = (0, m.useRef)(null),
                    V = (0, j.g)(G, D.map(j.d));
                k[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    q.current?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                    })
                }, k[0] = t) : t = k[0], k[1] !== F || k[2] !== z ? (n = [F, z], k[1] = F, k[2] = z, k[3] = n) : n = k[3], (0, m.useEffect)(t, n);
                let Q = N.a;
                k[4] !== W ? (u = W.formatMessage({
                    id: "chatgpt.contentReferences.map.results",
                    defaultMessage: "Map places",
                    description: "Accessible name of the scrollable business cards displayed on the places map"
                }), k[4] = W, k[5] = u) : u = k[5];
                let U = o.a,
                    J = D.map((e, t) => {
                        let n = (0, j.d)(e),
                            r = (0, j.h)(D, t, V),
                            o = G?.legs[r - 1],
                            u = null == G ? n : `${n}:${r}`,
                            c = null != z ? z === u : F === n && D.findIndex(e => (0, j.d)(e) === n) === t,
                            d = function(e) {
                                let {
                                    duration: t,
                                    index: n,
                                    route: r,
                                    total: s
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
                                }) : n === s - 1 ? (0, a.jsx)(f.a, {
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
                                route: G,
                                total: D.length
                            });
                        return (0, a.jsx)(R, {
                            ref: c ? q : void 0,
                            className: (0, i.b)(S.a.card, S.a.item, A ? "w-4/5 max-w-80 md:w-full md:max-w-none" : "w-80 max-w-full"),
                            onMouseEnter: () => L?.(n),
                            onMouseLeave: () => L?.(null),
                            onFocus: () => L?.(n, !1),
                            onBlur: () => L?.(null, !1),
                            role: "listitem",
                            place: e,
                            onShown: null == B ? void 0 : e => B([e]),
                            initial: !Y && !!A && {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .15 * !Y
                            },
                            children: (0, a.jsx)(I.a, {
                                contentReferenceIndex: E,
                                isSelected: c,
                                mapContextLabel: d,
                                onOpenEntity: () => {
                                    if (!A && null != $) {
                                        let n = H.get(v.j, $.conversationId) ?? void 0;
                                        (0, x.a)(H, s.b, {
                                            conversationId: n,
                                            entityId: "string" == typeof e.id ? e.id : void 0,
                                            entityName: e.name,
                                            entityIndex: (0, l.a)(t)
                                        }), (0, x.a)(H, s.d, {
                                            conversationId: n,
                                            messageId: $.contentReferenceMessageIds?.[E] ?? $.messageId,
                                            entityId: (0, w.a)(e),
                                            source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_BUSINESS_LIST"
                                        })
                                    }
                                    O(e, u)
                                },
                                place: e,
                                presentation: "card"
                            })
                        }, u)
                    });
                return k[6] !== U || k[7] !== J ? (c = (0, a.jsx)(U, {
                    initial: !1,
                    children: J
                }), k[6] = U, k[7] = J, k[8] = c) : c = k[8], k[9] !== K ? (g = K && (0, a.jsx)("div", {
                    className: "sr-only",
                    role: "status",
                    children: (0, a.jsx)(f.a, {
                        id: "chatgpt.map.loadingPlaces",
                        defaultMessage: "Searching for places…",
                        description: "Screen reader status while a search for businesses in the fullscreen map is still generating results"
                    })
                }), k[9] = K, k[10] = g) : g = k[10], k[11] !== K || k[12] !== D.length ? (y = K && Array.from({
                    length: 0 === D.length ? 4 : 2
                }, M), k[11] = K, k[12] = D.length, k[13] = y) : y = k[13], k[14] !== Q || k[15] !== A || k[16] !== y || k[17] !== u || k[18] !== c || k[19] !== g ? (T = (0, a.jsxs)(Q, {
                    as: "div",
                    isFullscreen: A,
                    label: u,
                    children: [c, g, y]
                }), k[14] = Q, k[15] = A, k[16] = y, k[17] = u, k[18] = c, k[19] = g, k[20] = T) : T = k[20], T
            }
        })
    }),
    phAi: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("on57"),
            l = n("zd8w"),
            i = n("PrhM");

        function o(e) {
            return e.preventDefault()
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, c, d, m, p, f = (0, r.c)(13),
                    {
                        as: g,
                        ref: h,
                        children: x,
                        isFullscreen: b,
                        label: y
                    } = e,
                    v = (0, l.useRef)(null),
                    _ = b && i.a.fullscreen;
                return f[0] !== _ ? (t = (0, s.b)(i.a.results, _, "m-0 min-h-0 list-none"), f[0] = _, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (n = e => {
                    v.current?.didDrag && (e.preventDefault(), e.stopPropagation(), v.current = null)
                }, f[2] = n) : n = f[2], f[3] === Symbol.for("react.memo_cache_sentinel") ? (u = e => {
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
                }, f[3] = u, f[4] = c, f[5] = d, f[6] = m) : (u = f[3], c = f[4], d = f[5], m = f[6]), f[7] !== g || f[8] !== x || f[9] !== y || f[10] !== h || f[11] !== t ? (p = (0, a.jsx)(g, {
                    ref: h,
                    className: t,
                    "aria-label": y,
                    role: "list",
                    onClickCapture: n,
                    onDragStart: o,
                    onPointerDown: u,
                    onPointerMove: c,
                    onPointerUp: d,
                    onPointerCancel: m,
                    children: x
                }), f[7] = g, f[8] = x, f[9] = y, f[10] = h, f[11] = t, f[12] = p) : p = f[12], p
            }
        })
    }),
    Nhwt: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("r6FN"),
            l = n("BolX"),
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, b, y, v, _, I, w = (0, r.c)(23),
                    {
                        conversationId: j,
                        isTemporaryChat: C,
                        isReadOnly: N,
                        messageId: S,
                        preciseLocationInfo: M,
                        trackImpression: R
                    } = e,
                    T = (0, l.y)(d.a),
                    k = (0, l.z)(g.a),
                    E = (0, l.z)(f.a),
                    [A, P] = (0, i.useState)(!1),
                    O = M.location_used?.trim() ? M.location_used : null,
                    L = !N && !0 === M.requested && !0 !== M.location_is_precise && k.enabled && "granted" !== E;
                w[0] !== T ? (t = () => {
                    (0, c.a)(T, s.d, {
                        entryPoint: x
                    })
                }, w[0] = T, w[1] = t) : t = w[1];
                let D = (0, i.useEffectEvent)(t);
                return (w[2] !== D || w[3] !== L || w[4] !== R ? (n = () => {
                    L && R && D()
                }, w[2] = D, w[3] = L, w[4] = R, w[5] = n) : n = w[5], w[6] !== L || w[7] !== R ? (b = [L, R], w[6] = L, w[7] = R, w[8] = b) : b = w[8], (0, i.useEffect)(n, b), null != O || L) ? (w[9] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(u.mg, {}), w[9] = y) : y = w[9], w[10] !== O ? (v = null != O ? (0, a.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: O
                }) : null, w[10] = O, w[11] = v) : v = w[11], w[12] !== j || w[13] !== C || w[14] !== O || w[15] !== S || w[16] !== A || w[17] !== T || w[18] !== L ? (_ = L ? (0, a.jsxs)(a.Fragment, {
                    children: [null != O ? (0, a.jsx)("span", {
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
                                e && null != S && await (0, p.a)(T, {
                                    conversationId: j,
                                    isTemporaryChat: C,
                                    messageId: S,
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
                }) : null, w[12] = j, w[13] = C, w[14] = O, w[15] = S, w[16] = A, w[17] = T, w[18] = L, w[19] = _) : _ = w[19], w[20] !== v || w[21] !== _ ? (I = (0, a.jsxs)("div", {
                    className: "my-2 flex min-w-0 items-center gap-1.5 text-sm text-secondary",
                    "data-testid": "conversation-turn-location-footer",
                    children: [y, v, _]
                }), w[20] = v, w[21] = _, w[22] = I) : I = w[22], I) : null
            }
        })
    }),
    JQAz: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            s = n("bFOP"),
            l = n("BOYb"),
            i = n("on57"),
            o = n("zd8w"),
            u = n("Wf1j"),
            c = n("oyxz"),
            d = n("NkEl"),
            m = n("ZtSy"),
            p = n("KxMp"),
            f = n("fhpB"),
            g = n("zSQm"),
            h = n("WAdu"),
            x = n("vYmP");

        function b(e) {
            return [e.label, e.title, e.url, e.snippet]
        }

        function y(e) {
            let t, n, s, l, i = (0, r.c)(16),
                {
                    children: o,
                    className: d,
                    currentIndex: m,
                    setCurrentIndex: p,
                    sourceCount: g
                } = e,
                h = (0, u.a)();
            i[0] !== p || i[1] !== g ? (t = e => {
                p(t => (t + e + g) % g)
            }, i[0] = p, i[1] = g, i[2] = t) : t = i[2];
            let x = t;
            return i[3] !== x || i[4] !== g ? (n = e => {
                g > 1 && ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(), x("ArrowLeft" === e.key ? -1 : 1))
            }, i[3] = x, i[4] = g, i[5] = n) : n = i[5], i[6] !== m || i[7] !== h || i[8] !== x || i[9] !== g ? (s = g > 1 ? (0, a.jsxs)("div", {
                className: "flex h-9 items-center justify-between gap-1.5",
                children: [(0, a.jsxs)("div", {
                    className: "mx-1.5 flex gap-1 text-secondary",
                    children: [(0, a.jsx)("button", {
                        type: "button",
                        className: "h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": h.formatMessage({
                            id: "chatgpt.citation.hover.previousSource",
                            defaultMessage: "Previous source",
                            description: "Accessible label for a button that moves to the previous web citation source in a citation hover carousel"
                        }),
                        onClick: () => x(-1),
                        children: (0, a.jsx)(f.a, {
                            className: "icon-sm m-auto"
                        })
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: "h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": h.formatMessage({
                            id: "chatgpt.citation.hover.nextSource",
                            defaultMessage: "Next source",
                            description: "Accessible label for a button that moves to the next web citation source in a citation hover carousel"
                        }),
                        onClick: () => x(1),
                        children: (0, a.jsx)(f.a, {
                            className: "icon-sm m-auto rotate-180"
                        })
                    })]
                }), (0, a.jsx)("span", {
                    className: "mx-3.5 text-tertiary",
                    children: (0, a.jsx)(c.a, {
                        id: "chatgpt.citation.hover.sourcePosition",
                        defaultMessage: "{currentSourceNumber}/{sourceCount}",
                        description: "Position label for the active source in a web citation hover carousel",
                        values: {
                            currentSourceNumber: m + 1,
                            sourceCount: g
                        }
                    })
                })]
            }) : null, i[6] = m, i[7] = h, i[8] = x, i[9] = g, i[10] = s) : s = i[10], i[11] !== o || i[12] !== d || i[13] !== n || i[14] !== s ? (l = (0, a.jsxs)("div", {
                className: d,
                role: "presentation",
                onKeyDown: n,
                tabIndex: -1,
                children: [s, o]
            }), i[11] = o, i[12] = d, i[13] = n, i[14] = s, i[15] = l) : l = i[15], l
        }

        function v(e) {
            var t;
            let n, s, l, d, f, g, x, b, v, _, I = (0, r.c)(32),
                {
                    currentSourceIndex: w,
                    onClick: j,
                    setCurrentSourceIndex: C,
                    sources: N
                } = e,
                S = (0, u.a)(),
                M = (0, o.useContext)(h.a),
                R = N[w] ?? N[0];
            if (null == R) return null;
            I[0] !== S || I[1] !== R.pubDate ? (n = null == R.pubDate ? null : S.formatDate(1e3 * R.pubDate, {
                year: "numeric",
                month: "long",
                day: "numeric"
            }), I[0] = S, I[1] = R.pubDate, I[2] = n) : n = I[2];
            let T = n,
                k = N.length;
            I[3] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.b)("flex cursor-interaction flex-col gap-2 p-3 no-underline outline-none", "text-default focus-visible:ring-2 focus-visible:ring-ring"), I[3] = s) : s = I[3];
            let E = R.href,
                A = "restricted" === M;
            I[4] !== R ? (l = [null != (t = R).title && t.title !== t.label ? `${t.label}: ${t.title}` : t.label, t.url].join(", "), I[4] = R, I[5] = l) : l = I[5];
            let P = "restricted" !== M;
            return I[6] !== R.href || I[7] !== P ? (d = (0, a.jsx)(p.a, {
                href: R.href,
                className: "h-4 w-4 shrink-0 text-current",
                loadRemote: P
            }), I[6] = R.href, I[7] = P, I[8] = d) : d = I[8], I[9] !== R.label ? (f = (0, a.jsx)("span", {
                className: "truncate text-default",
                children: R.label
            }), I[9] = R.label, I[10] = f) : f = I[10], I[11] !== d || I[12] !== f ? (g = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1.5",
                children: [d, f]
            }), I[11] = d, I[12] = f, I[13] = g) : g = I[13], I[14] !== R.title ? (x = (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 font-medium break-words text-default",
                children: R.title
            }), I[14] = R.title, I[15] = x) : x = I[15], I[16] !== T || I[17] !== R.snippet ? (b = null != T || R.snippet ? (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 break-words text-secondary",
                children: null != T && R.snippet ? (0, a.jsx)(c.a, {
                    id: "chatgpt.citation.hover.publicationSummary",
                    defaultMessage: "{date} — {snippet}",
                    description: "Publication metadata below the article title in a web citation popup. Date is the formatted publication date; snippet is the source-provided summary. Both values are present, and the combined text is limited to two visible lines.",
                    values: {
                        date: T,
                        snippet: R.snippet
                    }
                }) : T ?? R.snippet
            }) : null, I[16] = T, I[17] = R.snippet, I[18] = b) : b = I[18], I[19] !== j || I[20] !== R.href || I[21] !== g || I[22] !== x || I[23] !== b || I[24] !== A || I[25] !== l ? (v = (0, a.jsxs)(m.a, {
                className: s,
                href: E,
                initiator: "markdown_link_click",
                onClick: j,
                requiresConfirmation: A,
                "aria-label": l,
                children: [g, x, b]
            }), I[19] = j, I[20] = R.href, I[21] = g, I[22] = x, I[23] = b, I[24] = A, I[25] = l, I[26] = v) : v = I[26], I[27] !== w || I[28] !== C || I[29] !== N.length || I[30] !== v ? (_ = (0, a.jsx)(y, {
                className: "flex w-full flex-col overflow-hidden text-start text-xs font-normal",
                currentIndex: w,
                setCurrentIndex: C,
                sourceCount: k,
                children: v
            }), I[27] = w, I[28] = C, I[29] = N.length, I[30] = v, I[31] = _) : _ = I[31], _
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, i, c, m, f, y, _, I, w, j, C, N, S, M, R, T, k, E, A, P, O, L, D, B = (0, r.c)(61),
                    {
                        attributes: G,
                        isTerminalInline: F,
                        onClick: z,
                        sources: K
                    } = e,
                    H = (0, u.a)(),
                    W = (0, o.useContext)(h.a),
                    [$, Y] = (0, o.useState)(0),
                    [q, V] = (0, o.useState)(!1);
                if (B[0] !== G.label || B[1] !== G.supporting_count || B[2] !== G.title || B[3] !== G.url || B[4] !== $ || B[5] !== W || B[6] !== H || B[7] !== q || B[8] !== F || B[9] !== z || B[10] !== K) {
                    C = Symbol.for("react.early_return_sentinel");
                    e: {
                        var Q;
                        let e, r = "string" == typeof G.label && G.label.trim().length > 0 ? G.label.trim() : null,
                            o = "string" == typeof G.url && G.url.trim().length > 0 ? G.url.trim() : null,
                            u = "string" == typeof G.title && G.title.trim().length > 0 ? G.title.trim() : null,
                            h = function(e) {
                                if ("string" != typeof e) return 0;
                                let t = Number(e);
                                return Number.isInteger(t) && t > 0 ? t : 0
                            }(G.supporting_count);
                        if (null == r || null == o) {
                            C = null;
                            break e
                        }
                        let v = (0, g.a)(o);
                        if (null == v) {
                            C = null;
                            break e
                        }
                        let P = (c = function(e, t) {
                            let n = [];
                            for (let t of e) {
                                let e = (0, g.a)(t.url);
                                null != e && n.push({
                                    ...t,
                                    href: e
                                })
                            }
                            return n.length > 0 ? n : [t]
                        }(null == K || 0 === K.length ? [{
                            kind: "primary",
                            label: r,
                            title: u,
                            url: o
                        }] : K, {
                            kind: "primary",
                            label: r,
                            title: u,
                            url: o,
                            href: v
                        }))[$] ?? c[0];
                        if (null == P) {
                            C = null;
                            break e
                        }
                        let O = q ? P : c[0];
                        if (null == O) {
                            C = null;
                            break e
                        }
                        let L = h > 0 ? H.formatMessage({
                            id: "chatgpt.citation.aria.additionalSources",
                            defaultMessage: "{supportingCount, plural, one {# additional source} other {# additional sources}}",
                            description: "Accessible label segment that reports how many additional web sources support a citation"
                        }, {
                            supportingCount: h
                        }) : null;i = function(e) {
                            let {
                                label: t,
                                supportingSourcesLabel: n,
                                title: a,
                                url: r
                            } = e, s = [null != a && a !== t ? `${t}: ${a}` : t, r];
                            return null != n && s.push(n), s.join(", ")
                        }({
                            label: O.label,
                            supportingSourcesLabel: L,
                            title: O.title,
                            url: O.url
                        }),
                        B[31] === Symbol.for("react.memo_cache_sentinel") ? (e = e => {
                            V(e), e || Y(0)
                        }, B[31] = e) : e = B[31];
                        let D = e;n = s.a,
                        I = !0,
                        w = q,
                        j = D,
                        t = x.a,
                        m = s.a.Trigger,
                        N = e => {
                            if (null != e) return (0, d.b)(e, {
                                highlight: (0, l.e)() ? "block" : "auto",
                                text: [...c.flatMap(b), (0, l.e)() ? e.textContent : void 0].join(" ")
                            })
                        },
                        S = i,
                        M = O.href,
                        R = (0, a.jsx)(p.a, {
                            href: O.href,
                            className: "size-3 overflow-hidden rounded-full text-current [&>img]:rounded-full",
                            globeSize: 12,
                            loadRemote: "restricted" !== W
                        }),
                        T = q,
                        k = F,
                        E = O.label,
                        B[32] === Symbol.for("react.memo_cache_sentinel") ? (A = () => D(!1), B[32] = A) : A = B[32],
                        f = z,
                        y = "restricted" === W,
                        _ = h > 0 ? (Q = h, `+${Q}`) : void 0
                    }
                    B[0] = G.label, B[1] = G.supporting_count, B[2] = G.title, B[3] = G.url, B[4] = $, B[5] = W, B[6] = H, B[7] = q, B[8] = F, B[9] = z, B[10] = K, B[11] = t, B[12] = n, B[13] = i, B[14] = c, B[15] = m, B[16] = f, B[17] = y, B[18] = _, B[19] = I, B[20] = w, B[21] = j, B[22] = C, B[23] = N, B[24] = S, B[25] = M, B[26] = R, B[27] = T, B[28] = k, B[29] = E, B[30] = A
                } else t = B[11], n = B[12], i = B[13], c = B[14], m = B[15], f = B[16], y = B[17], _ = B[18], I = B[19], w = B[20], j = B[21], C = B[22], N = B[23], S = B[24], M = B[25], R = B[26], T = B[27], k = B[28], E = B[29], A = B[30];
                return C !== Symbol.for("react.early_return_sentinel") ? C : (B[33] !== t || B[34] !== m || B[35] !== f || B[36] !== y || B[37] !== _ || B[38] !== N || B[39] !== S || B[40] !== M || B[41] !== R || B[42] !== T || B[43] !== k || B[44] !== E || B[45] !== A ? (P = (0, a.jsx)(t, {
                    ActionWrapper: m,
                    ref: N,
                    ariaLabel: S,
                    href: M,
                    icon: R,
                    isActive: T,
                    isTerminalInline: k,
                    label: E,
                    onActivate: A,
                    onClick: f,
                    requiresConfirmation: y,
                    supportingCountLabel: _,
                    testId: "chatgpt-citation"
                }), B[33] = t, B[34] = m, B[35] = f, B[36] = y, B[37] = _, B[38] = N, B[39] = S, B[40] = M, B[41] = R, B[42] = T, B[43] = k, B[44] = E, B[45] = A, B[46] = P) : P = B[46], B[47] !== $ || B[48] !== z || B[49] !== c ? (O = (0, a.jsx)(v, {
                    currentSourceIndex: $,
                    onClick: z,
                    setCurrentSourceIndex: Y,
                    sources: c
                }), B[47] = $, B[48] = z, B[49] = c, B[50] = O) : O = B[50], B[51] !== i || B[52] !== O ? (L = (0, a.jsx)(s.a.Content, {
                    "aria-label": i,
                    align: "start",
                    alignOffset: 0,
                    side: "bottom",
                    sideOffset: 6,
                    width: 320,
                    minWidth: "auto",
                    children: O
                }), B[51] = i, B[52] = O, B[53] = L) : L = B[53], B[54] !== n || B[55] !== I || B[56] !== w || B[57] !== j || B[58] !== P || B[59] !== L ? (D = (0, a.jsxs)(n, {
                    showOnHover: I,
                    open: w,
                    onOpenChange: j,
                    children: [P, L]
                }), B[54] = n, B[55] = I, B[56] = w, B[57] = j, B[58] = P, B[59] = L, B[60] = D) : D = B[60], D)
            },
            b: y
        })
    })
};