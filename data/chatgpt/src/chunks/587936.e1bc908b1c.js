export const __rspack_esm_ids = [587936];
export const __webpack_modules__ = {
    xw2I: (function(e, t) {
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
    Zble: (function(e, t) {
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
        let l = (0, a.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(828774), n.e(62441), n.e(851888), n.e(242986), n.e(331845), n.e(873856), n.e(341705), n.e(137437)]).then(n.bind(n, "kHcj"))).ChatGptEntityContentReference, {
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
            c[4] !== m ? (t = (0, l.p)(m), c[4] = m, c[5] = t) : t = c[5];
            let g = t;
            c[6] !== m ? (n = (0, l.o)(m), c[6] = m, c[7] = n) : n = c[7];
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
            }, c[12] = h, c[13] = g, c[14] = o) : o = c[14], c[15] !== d || c[16] !== o ? (u = (0, a.jsx)(s.a, {
                attributes: o,
                isTerminalInline: d
            }), c[15] = d, c[16] = o, c[17] = u) : u = c[17], u
        }

        function d(e) {
            let t, n, s, i, u, c, d, p, g, h, x, b, y, v = (0, r.c)(37),
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

        function f(e) {
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
        n.d(t, {}, {
            a: p,
            b: function(e) {
                let t = (0, r.c)(7),
                    {
                        isTerminalInline: n,
                        reference: s
                    } = e;
                switch ((0, l.i)(s)) {
                    case "inline": {
                        let e;
                        return t[0] !== n || t[1] !== s ? (e = (0, a.jsx)(c, {
                            isTerminalInline: n,
                            reference: s
                        }), t[0] = n, t[1] = s, t[2] = e) : e = t[2], e
                    }
                    case "block": {
                        let e;
                        return t[3] !== s ? (e = (0, a.jsx)(d, {
                            reference: s
                        }), t[3] = s, t[4] = e) : e = t[4], e
                    }
                    case "alt": {
                        let e;
                        return t[5] !== s ? (e = (0, a.jsx)(p, {
                            reference: s
                        }), t[5] = s, t[6] = e) : e = t[6], e
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
            l = n("on57"),
            s = n("zd8w"),
            i = n("Wf1j"),
            o = n("oyxz"),
            u = n("ygO2"),
            c = n("HOLv"),
            d = n("bf6R"),
            m = n("KDax"),
            p = n("xw2I"),
            f = n("V3Lm");

        function g(e) {
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
        n.d(t, {}, {
            a: function(e) {
                let t, n, m, h, x, b, y, v = (0, r.c)(21),
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
                let S = _ ? "ghostActive" : "mapSurface";
                return v[4] !== w ? (m = () => j(!w), v[4] = w, v[5] = m) : m = v[5], v[6] !== w ? (h = w ? (0, a.jsx)(d.ij, {}) : (0, a.jsx)(c.a, {
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
            h = n("xw2I");
        let x = RegExp(`^(?:${(0,o.a)().source})$`, "u");
        n.d(t, {}, {
            a: function(e) {
                let t, n, o, b, y, v, _, I = (0, r.c)(55),
                    {
                        contentReferenceIndex: w,
                        isProvisional: j,
                        isSelected: C,
                        mapContextLabel: N,
                        onOpenEntity: S,
                        place: M,
                        presentation: R,
                        previewPortalContainer: T,
                        stopNumber: E,
                        notesClassName: k
                    } = e,
                    A = void 0 !== C && C,
                    L = (0, f.d)(),
                    P = (0, u.a)();
                I[0] !== M.id || I[1] !== M.name || I[2] !== L?.contentReferences ? (t = L?.contentReferences.findIndex(e => {
                    if ("entity" !== e.type) return !1;
                    let t = (0, g.d)(e, "string" == typeof e.category ? e.category : (0, c.t)(e)?.category ?? null);
                    return "string" == typeof M.id ? t?.id === M.id : e.name === M.name
                }) ?? -1, I[0] = M.id, I[1] = M.name, I[2] = L?.contentReferences, I[3] = t) : t = I[3];
                let O = t;
                I[4] !== w || I[5] !== O || I[6] !== M || I[7] !== L?.contentReferences ? (n = L?.contentReferences[O] ?? {
                    category: M.category ?? "local_business",
                    entity_data: M,
                    extra_params: M.extra_params,
                    name: M.name,
                    start_idx: L?.contentReferences[w]?.start_idx,
                    status: "done",
                    type: "entity"
                }, I[4] = w, I[5] = O, I[6] = M, I[7] = L?.contentReferences, I[8] = n) : n = I[8];
                let D = n;
                I[9] !== M ? (o = g.a.safeParse(M), I[9] = M, I[10] = o) : o = I[10];
                let F = o,
                    G = i.a;
                if (null == M.rating && (G = "local_business" === D.category ? l.a : s.a), I[11] !== G || I[12] !== M.mapIcon || I[13] !== M.rating || I[14] !== E) {
                    let e = function(e) {
                        let t = e?.trim();
                        if (t && (x.test(t) || !(Array.from(t).length > 8 || /^\p{L}$/u.test(t)))) return t
                    }("string" == typeof M.mapIcon ? M.mapIcon : null);
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
                        I[21] !== G ? (e = (0, a.jsx)(m.a, {
                            asset: G
                        }), I[21] = G, I[22] = e) : e = I[22], I[23] !== M.rating ? (t = null != M.rating ? (0, a.jsx)(d.c, {
                            value: M.rating,
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        }) : null, I[23] = M.rating, I[24] = t) : t = I[24], I[25] !== e || I[26] !== t ? (n = (0, a.jsxs)(a.Fragment, {
                            children: [e, t]
                        }), I[25] = e, I[26] = t, I[27] = n) : n = I[27], b = n
                    }
                    I[11] = G, I[12] = M.mapIcon, I[13] = M.rating, I[14] = E, I[15] = b
                } else b = I[15];
                let z = "marker" === R ? M.longitude : void 0,
                    B = "marker" === R ? M.latitude : void 0;
                return I[28] !== F || I[29] !== w || I[30] !== O || I[31] !== P || I[32] !== N || I[33] !== k || I[34] !== S || I[35] !== b || I[36] !== M.mapCarouselCard || I[37] !== M.mapLabel || I[38] !== M.name || I[39] !== M.notes || I[40] !== R || I[41] !== T || I[42] !== D || I[43] !== L ? (y = null != L && ("marker" !== R || P) ? (0, a.jsx)(p.a, {
                    businessPreview: F.success ? F.data : void 0,
                    contentReferenceIndex: O < 0 ? w : O,
                    displayName: "marker" === R ? (0, a.jsx)("span", {
                        className: h.a.pinContent,
                        children: b
                    }) : void 0,
                    mapCarouselCard: M.mapCarouselCard,
                    mapContextLabel: N,
                    mapLabel: "string" == typeof M.mapLabel ? M.mapLabel : void 0,
                    mapNotes: "string" == typeof M.notes ? M.notes : void 0,
                    mapNotesClassName: k,
                    onOpenEntity: S,
                    previewPortalContainer: T,
                    reference: D,
                    turnContext: L,
                    variant: "marker" === R ? "map-marker" : "map-card"
                }) : (0, a.jsx)("div", {
                    className: h.a.marker,
                    "aria-label": M.name,
                    role: "img",
                    children: "marker" === R ? (0, a.jsx)("span", {
                        className: h.a.pinContent,
                        children: b
                    }) : M.name
                }), I[28] = F, I[29] = w, I[30] = O, I[31] = P, I[32] = N, I[33] = k, I[34] = S, I[35] = b, I[36] = M.mapCarouselCard, I[37] = M.mapLabel, I[38] = M.name, I[39] = M.notes, I[40] = R, I[41] = T, I[42] = D, I[43] = L, I[44] = y) : y = I[44], I[45] !== M.name || I[46] !== R ? (v = "marker" === R ? (0, a.jsx)("span", {
                    className: h.a.label,
                    "data-map-label-blocker": "",
                    "aria-hidden": !0,
                    children: M.name
                }) : null, I[45] = M.name, I[46] = R, I[47] = v) : v = I[47], I[48] !== j || I[49] !== A || I[50] !== z || I[51] !== B || I[52] !== y || I[53] !== v ? (_ = (0, a.jsxs)("div", {
                    className: h.a.business,
                    "data-provisional": j,
                    "data-selected": A,
                    "data-map-marker-longitude": z,
                    "data-map-marker-latitude": B,
                    children: [y, v]
                }), I[48] = j, I[49] = A, I[50] = z, I[51] = B, I[52] = y, I[53] = v, I[54] = _) : _ = I[54], _
            }
        })
    }),
    xhWJ: (function(e, t, n) {
        var a = n("EA6X"),
            r = n("D015"),
            l = n("rKAs"),
            s = n("AuIy"),
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
                    let e = e => [...(0, l.v)(e, (0, d.a)(e, f)), ...(0, c.a)(e)].some(e => e.id === g);
                    h = (null != h && e(h) ? h : void 0) ?? f.contentReferences.find(e) ?? f.contentReferences.find(e => "entity" === e.type && (0, s.r)(e.entity_data)?.id === g) ?? t.reference
                }
                let x = null == h ? -1 : f.contentReferences.indexOf(h),
                    b = f.contentReferenceMessageIds?.[x] ?? (h === t.reference ? t.mapMessageId : void 0) ?? f.messageId,
                    y = null == b ? void 0 : e.get(o.L, f.conversationId)?.[b]?.message?.metadata;
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
                    isGenui: h?.type === "client_defined_widget" && "map" === h.category || (0, s.r)((0, s.r)(y?.model_dil)?.dil)?.type != null || y?.model_dil_v2 != null || y?.genui_refresh != null
                })
            }
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
            if (null == e || 0 === e.legs.length) return t;
            let n = [];
            return e.legs.forEach((e, a) => {
                let r = e.from_point_id ?? t[a],
                    l = e.to_point_id ?? t[a + 1],
                    s = n.at(-1);
                null != r && (null == s || u(s) !== u(r)) && n.push(r), null != l && n.push(l)
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
                let t = new Set((0, a.v)(e).map(l));
                return (0, a.v)({
                    ...e,
                    entities: e.raw_search_entities
                }).filter(e => {
                    let n = l(e);
                    return !t.has(n) && (t.add(n), !0)
                })
            },
            b: l,
            c: function(e, t) {
                if (null == t) return null;
                let n = e.find(e => s(e) === s(t)) ?? e.find(e => l(e) === l(t));
                return null == n ? null : s(n)
            },
            d: s,
            e: function(e, t) {
                var n, a;
                let r, u, c, d, m = new Set,
                    p = e.filter(e => {
                        let n = null == t ? l(e) : s(e);
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
                let g = new Map(p.map(e => [s(e), e]));
                return f.flatMap(e => {
                    let {
                        pointId: n,
                        visitIndex: a
                    } = e, r = o(n).map(e => g.get(e)).find(e => null != e);
                    if (null == r) return [];
                    let l = t.notesByVisitIndex?.get(a);
                    return [null == l ? r : {
                        ...r,
                        notes: l
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
                        pointIds: (0, a.v)(e).map(s),
                        route: n
                    }]
                }
                let n = t.groups?.map((e, n) => {
                    let a = new Set,
                        l = e.locations.flatMap(e => e.point_id ? [e.point_id] : []),
                        s = i(e.route, l),
                        o = e.locations.map((e, n) => {
                            let l = e.point_id?.trim();
                            if (l) return l;
                            let i = t.points.findIndex((t, n) => t.name === e.name && !a.has(n)),
                                o = -1 === i ? t.points.findIndex(t => t.name === e.name) : i;
                            return -1 !== o && a.add(o), (-1 === o ? void 0 : (0, r.d)(t.points[o], o)) || s[n] || e.name.trim()
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
                let a = s(e[t]),
                    r = e.slice(0, t).filter(e => s(e) === a).length;
                return n.findIndex(e => o(e).includes(a) && 0 == r--)
            },
            i: function(e) {
                let t = new Map,
                    n = 1;
                for (let a of e)
                    if (null != a.route)
                        for (let e of i(a.route, a.pointIds)) {
                            let r = o(e),
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
            d = n("R0eE");

        function m(e, t) {
            return e.title?.trim() || (0, a.jsx)(s.a, {
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
                let t, n, u, d, h, x, b, y, v, _, I, w, j, C, N, S, M, R, T, E, k, A, L, P, O, D = (0, r.c)(67),
                    {
                        groups: F,
                        groupsTitle: G,
                        selectedGroupKey: z,
                        onSelectGroup: B
                    } = e,
                    K = (0, l.a)();
                D[0] !== F ? (t = F.every(g) && new Set(F.map(f)).size > 1, D[0] = F, D[1] = t) : t = D[1];
                let H = t,
                    W = F.every(p);
                if (F.length < 2 || !H && !W) return null;
                if (D[2] !== F || D[3] !== G || D[4] !== H || D[5] !== K || D[6] !== z) {
                    let e, t, r;
                    D[23] !== z ? (e = e => e.key === z, D[23] = z, D[24] = e) : e = D[24], b = F.findIndex(e), D[25] !== G || D[26] !== H ? (t = G?.trim() || (H ? (0, a.jsx)(s.a, {
                        id: "chatgpt.maps.route_group.all_days",
                        defaultMessage: "All days",
                        description: "Map group selector option that shows the routes and places for every trip day"
                    }) : (0, a.jsx)(s.a, {
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
                    }), D[28] = H, D[29] = K, D[30] = r) : r = D[30], x = r, u = o.a, y = "start", v = "chatgpt", n = i.a, w = "max-w-full", j = x, C = !0, N = "mapSurface", S = "full", M = "dialogAction", _ = "truncate", I = b < 0 ? d : h(F[b], b), D[2] = F, D[3] = G, D[4] = H, D[5] = K, D[6] = z, D[7] = n, D[8] = u, D[9] = d, D[10] = h, D[11] = x, D[12] = b, D[13] = y, D[14] = v, D[15] = _, D[16] = I, D[17] = w, D[18] = j, D[19] = C, D[20] = N, D[21] = S, D[22] = M
                } else n = D[7], u = D[8], d = D[9], h = D[10], x = D[11], b = D[12], y = D[13], v = D[14], _ = D[15], I = D[16], w = D[17], j = D[18], C = D[19], N = D[20], S = D[21], M = D[22];
                D[31] !== _ || D[32] !== I ? (R = (0, a.jsx)("span", {
                    className: _,
                    children: I
                }), D[31] = _, D[32] = I, D[33] = R) : R = D[33], D[34] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, a.jsx)(c.$b, {}), D[34] = T) : T = D[34], D[35] !== n || D[36] !== R || D[37] !== w || D[38] !== j || D[39] !== C || D[40] !== N || D[41] !== S || D[42] !== M ? (E = (0, a.jsxs)(n, {
                    className: w,
                    "aria-label": j,
                    allowShrink: C,
                    color: N,
                    radius: S,
                    size: M,
                    children: [R, T]
                }), D[35] = n, D[36] = R, D[37] = w, D[38] = j, D[39] = C, D[40] = N, D[41] = S, D[42] = M, D[43] = E) : E = D[43];
                let V = b < 0 ? "all" : String(b);
                if (D[44] !== B ? (k = () => B(null), D[44] = B, D[45] = k) : k = D[45], D[46] !== d || D[47] !== k ? (A = (0, a.jsx)(o.c.RadioItem, {
                        value: "all",
                        variant: "chatgpt",
                        onSelect: k,
                        children: d
                    }), D[46] = d, D[47] = k, D[48] = A) : A = D[48], D[49] !== h || D[50] !== F || D[51] !== B) {
                    let e;
                    D[53] !== h || D[54] !== B ? (e = (e, t) => (0, a.jsx)(o.c.RadioItem, {
                        value: String(t),
                        variant: "chatgpt",
                        onSelect: () => B(e.key),
                        children: h(e, t)
                    }, e.key), D[53] = h, D[54] = B, D[55] = e) : e = D[55], L = F.map(e), D[49] = h, D[50] = F, D[51] = B, D[52] = L
                } else L = D[52];
                return D[56] !== x || D[57] !== V || D[58] !== A || D[59] !== L ? (P = (0, a.jsxs)(o.c.RadioGroup, {
                    "aria-label": x,
                    value: V,
                    children: [A, L]
                }), D[56] = x, D[57] = V, D[58] = A, D[59] = L, D[60] = P) : P = D[60], D[61] !== u || D[62] !== y || D[63] !== v || D[64] !== E || D[65] !== P ? (O = (0, a.jsx)(u, {
                    align: y,
                    surface: v,
                    triggerButton: E,
                    children: P
                }), D[61] = u, D[62] = y, D[63] = v, D[64] = E, D[65] = P, D[66] = O) : O = D[66], O
            },
            b: function(e) {
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
            },
            c: function(e) {
                let t, n, l = (0, r.c)(3),
                    {
                        route: i
                    } = e,
                    o = i?.duration_seconds;
                return i?.legs.length !== 1 || null == o ? null : (l[0] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(c.pc, {}), l[0] = t) : t = l[0], l[1] !== o ? (n = (0, a.jsxs)("div", {
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
                    let e = r()(a, e => "assistant" === e.author.role && !(0, s.m)(e)) ?? a.at(-1);
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
                            turnId: (0, o.e)(e) ?? void 0
                        }
                    })
                }
                for (let t of e)(0, o.k)(t) ? (c(), a = []) : ("assistant" === t.author.role || "tool" === t.author.role) && a.push(t);
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
                return t ? `response:${e.responseMessageId??e.turnContext.messageId}` : [e.mapMessageId ?? e.turnContext.contentReferenceMessageIds?.[null == e.reference ? -1 : e.turnContext.contentReferences.indexOf(e.reference)] ?? e.turnContext.messageId, e.reference?.type, e.reference?.start_idx].join(":")
            },
            c: c,
            d: function(e, t, n, a) {
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
            l = n("rKAs"),
            s = n("TJEh"),
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
                } = e, d = null == a ? [] : (0, l.v)(a, (0, o.a)(a, c)), m = null == a ? [] : (0, i.a)(a), p = new Map;
                if (null != a)
                    for (let e of (0, i.f)(a, (0, o.a)(a, c)))
                        for (let t of (0, i.e)(d, e)) {
                            let e = (0, i.d)(t),
                                n = t.notes;
                            "string" == typeof n && n.trim() && !p.has(e) && p.set(e, n)
                        }
                let f = n ? c.contentReferences.map(i.a).find(e => e.length > 0) ?? [] : [],
                    g = c.contentReferences.flatMap((e, t) => {
                        let n = c.contentReferenceMessageIds?.[t];
                        if ("entity" !== e.type || null != n && n !== c.messageId || "string" != typeof e.category || !(0, s.i)(e.category)) return [];
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
                    l = t?.contentReferenceMessageStatuses?.[n],
                    s = t?.contentReferenceMessageIds == null ? n : t.contentReferenceMessageIds.slice(0, n).filter(e => e === r).length;
                return (0, a.a)(e, null == r || n < 0 || null == t ? void 0 : {
                    messageId: r,
                    referenceIndex: s,
                    widgets: t.dilViewState?.widgets,
                    preferResolvedData: null == l ? !t.isStreaming : "finished_successfully" === l
                })
            }
        })
    }),
    YAi8: (function(e, t, n) {
        n.d(t, {
            a: () => ei
        });
        var a = n("ABep"),
            r = n("QosV"),
            l = n("EA6X"),
            s = n("t4av"),
            i = n("DNYL"),
            o = n("BOYb"),
            u = n("on57"),
            c = n("i5ac"),
            d = n.n(c),
            m = n("iTtm"),
            p = n("rKAs"),
            f = n("sqog"),
            g = n("Wc42"),
            h = n("zd8w"),
            x = n("Wf1j"),
            b = n("oyxz"),
            y = n("ygO2"),
            v = n("JNtf"),
            _ = n("HOLv"),
            I = n("bf6R"),
            w = n("Bbed"),
            j = n("ibLK"),
            C = n("zSQm"),
            N = n("yGJW"),
            S = n("tSEg"),
            M = n("eGPX"),
            R = n("hZax"),
            T = n("KDax"),
            E = n("j8Yf"),
            k = n("dQRk"),
            A = n("TUMj"),
            L = n("Nhwt"),
            P = n("TJEh"),
            O = n("jFKl"),
            D = n("ozm1"),
            F = n("AuIy"),
            G = n("OWtl");
        let z = (0, m.u)(G.a, () => new Set);
        var B = n("xhWJ"),
            K = n("tBe6"),
            H = n("D015"),
            W = n("Cslg"),
            V = n("WFY2"),
            Y = n("Kwur"),
            $ = n("xof2");
        let q = (0, m.j)(G.a, e => new Set),
            Q = (0, m.j)(G.a, e => {
                let t = new Set,
                    n = 0,
                    a = () => {
                        for (; n < 4 && t.size > 0;) {
                            let e = t.values().next().value;
                            if (null == e) return;
                            t.delete(e), n += 1, e().catch(e => {
                                V.a.warning("Failed to record map entity impression", {
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
        var U = n("RgGw"),
            J = n("ry7c"),
            X = n("Xj7S"),
            Z = n("YTiF"),
            ee = n("j7sU"),
            et = n("QPeR"),
            en = n("DUJs"),
            ea = n("FCsE"),
            er = n("xw2I"),
            el = n("p39r");
        let es = (0, w.a)(async () => (await Promise.all([n.e(418851), n.e(109308), n.e(399565), n.e(257798), n.e(153380), n.e(617936), n.e(807489), n.e(337882), n.e(955979), n.e(646436), n.e(7078), n.e(200429), n.e(698524), n.e(956483), n.e(87162), n.e(396705), n.e(155568), n.e(731863), n.e(767086), n.e(76629), n.e(514085), n.e(204542), n.e(982651), n.e(673108), n.e(487481), n.e(753405), n.e(585419), n.e(877700), n.e(353230), n.e(81461), n.e(828774), n.e(962984), n.e(390192), n.e(62441), n.e(851888), n.e(242986), n.e(331845), n.e(873856), n.e(341705), n.e(972422), n.e(828012)]).then(n.bind(n, "s2JQ"))).ChatGptMapboxCanvas, {
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
            let c, w, G, V, ei, eo, em, ep, ef, eg, eb, ey, ev, e_, eI, ew, ej, eC, eN, eS, eM, eR, eT, eE, ek, eA, eL, eP, eO, eD, eF, eG, ez, eB, eK, eH, eW, eV, eY, e$, eq, eQ, eU, eJ, eX, eZ, e0 = (0, r.c)(173),
                {
                    contentReferenceIndex: e1,
                    enableFullscreen: e2,
                    fullscreenMode: e3,
                    showEmptyMap: e4,
                    ignoreCoordinateOutliers: e5,
                    fallbackCenter: e6,
                    isStreaming: e8,
                    reference: e7,
                    events: e9
                } = e,
                te = (0, m.y)(S.a),
                tt = (0, h.useRef)(null),
                tn = (0, x.a)(),
                ta = (0, j.a)("(pointer: coarse)") && (0, o.d)();
            e0[0] !== tn ? (c = tn.formatMessage({
                id: "chatgpt.contentReferences.map.expand",
                defaultMessage: "Expand map",
                description: "Button that opens the places map fullscreen"
            }), e0[0] = tn, e0[1] = c) : c = e0[1];
            let tr = c,
                tl = (0, A.d)(),
                ts = (0, R.h)("3194776735"),
                ti = (0, m.z)(et.a),
                to = (0, h.useId)(),
                tu = (0, h.useId)(),
                [tc, td] = (0, h.useState)(!1),
                [tm, tp] = (0, h.useState)(!1);
            e0[2] !== e7 || e0[3] !== tl ? (w = null == tl ? "" : (0, Z.b)({
                reference: e7,
                turnContext: tl
            }), e0[2] = e7, e0[3] = tl, e0[4] = w) : w = e0[4];
            let tf = w;
            e0[5] !== ti || e0[6] !== tf ? (G = null != ti && (0, Z.b)(ti.source) === tf, e0[5] = ti, e0[6] = tf, e0[7] = G) : G = e0[7];
            let tg = G,
                th = (0, m.x)(et.b, tf),
                [tx, tb] = (0, h.useState)(null),
                [ty, tv] = (0, h.useState)(!1),
                [t_, tI] = (0, h.useState)(0),
                [tw, tj] = (0, h.useState)(null),
                [tC, tN] = (0, h.useState)(null),
                [tS, tM] = (0, h.useState)(null),
                [tR, tT] = (0, h.useState)(null),
                tE = (0, h.useRef)(th),
                tk = (0, h.useRef)(null);
            e0[8] === Symbol.for("react.memo_cache_sentinel") ? (V = () => () => tk.current?.abort(), ei = [], e0[8] = V, e0[9] = ei) : (V = e0[8], ei = e0[9]), (0, h.useEffect)(V, ei), e0[10] !== th ? (eo = () => {
                tE.current = th
            }, em = [th], e0[10] = th, e0[11] = eo, e0[12] = em) : (eo = e0[11], em = e0[12]), (0, h.useLayoutEffect)(eo, em);
            let tA = async () => {
                if (ts && "dialog" === e3) return void tp(!0);
                if (!ts || null == tl || tg) return;
                tk.current?.abort();
                let e = new AbortController;
                tk.current = e;
                let t = !0;
                try {
                    await (0, ee.b)()
                } catch {
                    t = !1
                }
                if (e.signal.aborted) return;
                tT(null);
                let n = tl.contentReferenceMessageIds?.[e1] ?? tl.messageId,
                    a = null != tF || 1 === tD.length;
                (0, J.a)({
                    triggerId: to,
                    conversationId: tl.conversationId,
                    reducedMotion: !t || te.get(M.c),
                    onSuperseded: () => e.abort(),
                    update: () => {
                        if (e.signal.aborted) return;
                        tk.current = null, te.set(et.a, {
                            source: {
                                reference: e7,
                                turnContext: tl,
                                mapMessageId: n
                            },
                            view: tE.current,
                            triggerId: to,
                            ...null == tS ? {} : {
                                selectedPlace: tS
                            },
                            ...null == tF ? {} : {
                                selectedGroupKey: tF.key
                            },
                            ...a && null != tC ? {
                                selectedCardKey: tC
                            } : {}
                        });
                        let t = te.get(k.j, tl.conversationId) ?? void 0;
                        (0, N.a)(te, s.p, {
                            conversationId: t,
                            messageId: n,
                            entryPoint: "CHATGPT_PLACES_ENTRY_POINT_MAP_WIDGET"
                        })
                    }
                })
            };
            e0[13] !== e1 || e0[14] !== e7 || e0[15] !== tl ? (ep = (0, en.a)(e7, tl, e1), e0[13] = e1, e0[14] = e7, e0[15] = tl, e0[16] = ep) : ep = e0[16];
            let tL = ep;
            e0[17] !== e1 || e0[18] !== ta || e0[19] !== tc || e0[20] !== e7 || e0[21] !== te || e0[22] !== tx || e0[23] !== tl || e0[24] !== tL ? (ef = () => {
                if (! function(e, t, n, a) {
                        let r = (0, A.c)(t, n),
                            l = t?.contentReferenceMessageStatuses?.[n],
                            i = (0, F.r)(t?.contentReferences[n]?.data)?.widget_type;
                        if (null == t || null == r || "map_widget_v2" !== i || null == a || 0 === a.points.length || (null == l ? t.isStreaming : "finished_successfully" !== l) || t.shouldBlockExternalEgress || !1 === t.trackShownImpressions || !1 === t.isPresented) return;
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
                        (0, N.a)(e, s.a, {
                            messageId: r.messageId,
                            contentReferenceIndex: (0, D.b)(r.index),
                            hasRoute: c.some(e => null != e),
                            hasCustomIcons: a.points.some(e => !!e.icon?.trim()),
                            hasCarouselEdits: m || p,
                            carouselHidden: a.carousel?.visibility === "hidden"
                        })
                    }(te, tl, e1, tL), tL?.widget_type === "event_sidebar_map_widget" && (ta || tL.points[0]?.address && !tc)) return;
                let e = (0, U.f)(e7, tL).find(e => e.key === tx),
                    t = new Set((0, U.e)((0, p.v)(e7, tL), e).map(ec));
                ! function(e, t, n, a) {
                    let r = (0, A.c)(t, n),
                        s = t?.contentReferences[n];
                    if (null == t || null == r || !r.messageId || r.messageId.startsWith("WEB:") || s?.type !== "client_defined_widget" || "map" !== s.category || null == a || t.shouldBlockExternalEgress || !1 === t.trackShownImpressions || !1 === t.isPresented) return;
                    let i = e.get(k.j, t.conversationId) ?? void 0,
                        o = t.messageId ?? r.messageId,
                        u = "number" == typeof s?.start_idx ? (0, H.a)(s.start_idx) : void 0,
                        c = e.get(q, JSON.stringify([t.conversationId, r.messageId, r.index])),
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
                    let m = (0, $.a)(e, t.conversationId, o),
                        p = e.get(W.f),
                        f = e.get(W.k),
                        h = e.get(Q, void 0);
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
                                widgetName: (0, g.a)((0, F.r)(s.data)?.widget_type) ?? void 0
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
                            p === e.get(W.f) && f === e.get(W.k) && await Y.Request.safePost("/unified_user_signals", {
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
                }(te, tl, e1, null == tL ? null : {
                    ...tL,
                    points: tL.points.filter((e, n) => t.has((0, f.d)(e, n)))
                })
            }, eg = [te, tl, e1, tL, e7, tx, ta, tc], e0[17] = e1, e0[18] = ta, e0[19] = tc, e0[20] = e7, e0[21] = te, e0[22] = tx, e0[23] = tl, e0[24] = tL, e0[25] = ef, e0[26] = eg) : (ef = e0[25], eg = e0[26]), (0, h.useEffect)(ef, eg);
            let tP = tm || tL?.fill;
            if (ta && tL?.widget_type === "event_sidebar_map_widget") return null;
            let tO = tL?.widget_type === "event_sidebar_map_widget" ? tL.points[0] : void 0,
                tD = (0, U.f)(e7, tL);
            e0[27] !== tx ? (eb = e => e.key === tx, e0[27] = tx, e0[28] = eb) : eb = e0[28];
            let tF = tD.find(eb),
                tG = null == tF ? tD : [tF],
                tz = (0, p.v)(e7, tL),
                tB = (0, U.e)(tz, tF);
            e0[29] !== e1 || e0[30] !== e7 || e0[31] !== tl ? (ey = null == tl || tl.isStreaming || tl.preciseLocationInfo?.requested !== !0 || "below_map" !== tl.preciseLocationInfo.footer_location || "map" !== e7.type || (tl.contentReferenceMessageIds?.[e1] ?? tl.messageId) !== tl.preciseLocationMessageId || tl.contentReferences.findIndex((e, t) => "map" === e.type && (tl.contentReferenceMessageIds?.[t] ?? tl.messageId) === tl.preciseLocationMessageId) !== e1 ? null : (0, a.jsx)(L.a, {
                conversationId: tl.conversationId,
                isTemporaryChat: tl.isTemporaryChat ?? !1,
                isReadOnly: !0 === tl.isReadOnly || !0 === tl.shouldBlockExternalEgress || !0 !== tl.isLatestActorMessage,
                messageId: tl.preciseLocationMessageId,
                preciseLocationInfo: tl.preciseLocationInfo,
                trackImpression: !1 !== tl.trackShownImpressions && !1 !== tl.isPresented
            }, tl.preciseLocationMessageId), e0[29] = e1, e0[30] = e7, e0[31] = tl, e0[32] = ey) : ey = e0[32];
            let tK = ey;
            if (!e4 && 0 === tB.length && null == tL) {
                let e, t;
                return e0[33] !== e7 ? (e = (0, a.jsx)(E.c, {
                    reference: e7
                }), e0[33] = e7, e0[34] = e) : e = e0[34], e0[35] !== tK || e0[36] !== e ? (t = (0, a.jsxs)(a.Fragment, {
                    children: [e, tK]
                }), e0[35] = tK, e0[36] = e, e0[37] = t) : t = e0[37], t
            }
            let tH = !(void 0 !== e8 && e8) && tL?.carousel?.visibility !== "hidden";
            e0[38] !== e7 || e0[39] !== tH || e0[40] !== tL?.min_height ? (ev = (0, f.c)(e7) ?? Math.max((t = e7, n = tH, eh(t) ? 300 + 144 * !!n : 400), tL?.min_height ?? 0), e0[38] = e7, e0[39] = tH, e0[40] = tL?.min_height, e0[41] = ev) : ev = e0[41];
            let tW = ev,
                tV = d()(tB.filter(ex), U.d);
            if (!e4 && 0 === tV.length && null == tL || tl?.shouldBlockExternalEgress === !0) return (0, a.jsxs)("div", {
                className: "my-3",
                children: [(0, a.jsx)(ed, {
                    places: tB
                }), tK]
            });
            e0[42] !== e1 || e0[43] !== e7 || e0[44] !== te || e0[45] !== tl ? (e_ = (e, t, n) => {
                null != tl && ((0, B.b)(te, {
                    reference: e7,
                    turnContext: tl,
                    mapMessageId: tl.contentReferenceMessageIds?.[e1] ?? tl.messageId
                }, e, t, l.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE), "marker" === t && (0, N.a)(te, s.d, {
                    conversationId: te.get(k.j, tl.conversationId) ?? void 0,
                    messageId: tl.contentReferenceMessageIds?.[e1] ?? tl.messageId,
                    entityId: (0, B.a)(e),
                    source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_MARKER"
                })), tj((0, U.d)(e)), tN(n ?? null), tM(e)
            }, e0[42] = e1, e0[43] = e7, e0[44] = te, e0[45] = tl, e0[46] = e_) : e_ = e0[46];
            let tY = e_,
                t$ = tw ?? (tO?.address && 1 === tV.length ? (0, U.d)(tV[0]) : null),
                tq = tl?.conversationId,
                tQ = null == tF ? (0, U.c)(tV, tz.find(e => (0, U.d)(e) === tR)) : tR,
                tU = e4 ? e6 : void 0,
                tJ = e4 && 0 === tV.length ? null == e6 ? 1 : 10 : void 0,
                tX = tl?.contentReferenceMessageIds?.[e1] ?? tl?.messageId,
                tZ = e9?.onReady,
                t0 = () => {
                    e9?.onMapClick?.(), e2 && tA()
                };
            e0[47] !== e9 || e0[48] !== tY ? (eI = e => {
                e9?.onPinClick?.(), tY(e, "marker")
            }, e0[47] = e9, e0[48] = tY, e0[49] = eI) : eI = e0[49];
            let t1 = null == tF ? (0, U.c)(tV, tz.find(e => (0, U.d)(e) === t$)) : t$;
            e0[50] !== tH ? (ew = tH ? void 0 : {
                bottom: 20
            }, e0[50] = tH, e0[51] = ew) : ew = e0[51], e0[52] !== es || e0[53] !== e1 || e0[54] !== tG || e0[55] !== e5 || e0[56] !== tm || e0[57] !== tV || e0[58] !== t_ || e0[59] !== tq || e0[60] !== tQ || e0[61] !== tU || e0[62] !== tJ || e0[63] !== tX || e0[64] !== tZ || e0[65] !== t0 || e0[66] !== eI || e0[67] !== t1 || e0[68] !== ew ? (ej = (0, a.jsx)(es, {
                contentReferenceIndex: e1,
                conversationId: tq,
                hoveredBusinessKey: tQ,
                isFullscreen: tm,
                ignoreCoordinateOutliers: e5,
                fallbackCenter: tU,
                initialZoom: tJ,
                messageId: tX,
                onReady: tZ,
                onUserMovementChange: tv,
                onExpand: t0,
                onOpenEntity: eI,
                places: tV,
                resetViewKey: t_,
                routeGroups: tG,
                selectedBusinessKey: t1,
                viewRef: tE,
                viewportPadding: ew
            }), e0[52] = es, e0[53] = e1, e0[54] = tG, e0[55] = e5, e0[56] = tm, e0[57] = tV, e0[58] = t_, e0[59] = tq, e0[60] = tQ, e0[61] = tU, e0[62] = tJ, e0[63] = tX, e0[64] = tZ, e0[65] = t0, e0[66] = eI, e0[67] = t1, e0[68] = ew, e0[69] = ej) : ej = e0[69];
            let t2 = ej,
                t3 = tP && "flex h-full min-h-0 flex-col";
            e0[70] !== t3 ? (eC = (0, u.b)(er.a.widget, "not-prose w-full", t3), e0[70] = t3, e0[71] = eC) : eC = e0[71], e0[72] !== tP || e0[73] !== e7 ? (eN = (0, u.b)(eh(e7) && "pb-2", tP && "min-h-0 flex-1"), e0[72] = tP, e0[73] = e7, e0[74] = eN) : eN = e0[74];
            let t4 = tP && "h-full";
            e0[75] !== t4 ? (eS = (0, u.b)("relative isolate overflow-hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-relaxed motion-safe:ease-out", er.a.frame, t4), e0[75] = t4, e0[76] = eS) : eS = e0[76], e0[77] !== tP || e0[78] !== tW ? (eM = tP ? void 0 : {
                maxHeight: tW
            }, e0[77] = tP, e0[78] = tW, e0[79] = eM) : eM = e0[79];
            let t5 = tP && "h-full";
            e0[80] !== t5 ? (eR = (0, u.b)(er.a.frame, "bg-surface-secondary", t5), e0[80] = t5, e0[81] = eR) : eR = e0[81], e0[82] !== tP || e0[83] !== tW ? (eT = tP ? void 0 : {
                height: tW
            }, e0[82] = tP, e0[83] = tW, e0[84] = eT) : eT = e0[84], e0[85] === Symbol.for("react.memo_cache_sentinel") ? (eE = (0, u.b)(er.a.frame, er.a.viewport, "relative isolate h-full overflow-hidden"), e0[85] = eE) : eE = e0[85];
            let t6 = tg ? null : t2;
            e0[86] !== tG || e0[87] !== tg || e0[88] !== tD || e0[89] !== tF || e0[90] !== ty || e0[91] !== tL?.groups_title ? (ek = !tg && (0, a.jsxs)("div", {
                className: "absolute start-3 top-3 z-20 flex items-center gap-2",
                children: [(0, a.jsx)(X.a, {
                    groups: tD,
                    groupsTitle: tL?.groups_title,
                    selectedGroupKey: tF?.key ?? null,
                    onSelectGroup: e => {
                        tb(e), tv(!1), tj(null), tN(null), tM(null), tT(null)
                    }
                }), 1 === tG.length && (0, a.jsx)(X.c, {
                    route: tG[0].route
                }), ty && (0, a.jsx)(X.b, {
                    onClick: () => {
                        tj(null), tT(null), tv(!1), tI(eu)
                    }
                })]
            }), e0[86] = tG, e0[87] = tg, e0[88] = tD, e0[89] = tF, e0[90] = ty, e0[91] = tL?.groups_title, e0[92] = ek) : ek = e0[92], e0[93] === Symbol.for("react.memo_cache_sentinel") ? (eA = (0, a.jsx)("div", {
                className: (0, u.b)(er.a.frame, "pointer-events-none absolute inset-0 z-2 ring-1 ring-border/50 ring-inset")
            }), e0[93] = eA) : eA = e0[93], e0[94] !== e1 || e0[95] !== tG || e0[96] !== e9 || e0[97] !== tY || e0[98] !== tm || e0[99] !== tg || e0[100] !== tB || e0[101] !== tw || e0[102] !== tC || e0[103] !== tH ? (eL = !tg && (0, a.jsxs)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col",
                children: [(0, a.jsx)(O.a, {
                    isFullscreen: !1,
                    openTarget: tm ? "external-browser" : void 0
                }), tH && (0, a.jsx)(ea.a, {
                    contentReferenceIndex: e1,
                    isFullscreen: !1,
                    onHoverBusiness: tT,
                    onPlacesShown: e9?.onCardsShown,
                    onOpenEntity: (e, t) => {
                        e9?.onCardClick?.(), tY(e, "list", t)
                    },
                    places: tB,
                    selectedBusinessKey: tw,
                    selectedCardKey: tC,
                    route: 1 === tG.length ? tG[0].route : null
                })]
            }), e0[94] = e1, e0[95] = tG, e0[96] = e9, e0[97] = tY, e0[98] = tm, e0[99] = tg, e0[100] = tB, e0[101] = tw, e0[102] = tC, e0[103] = tH, e0[104] = eL) : eL = e0[104], e0[105] !== e2 || e0[106] !== tr || e0[107] !== tA || e0[108] !== tm || e0[109] !== ts || e0[110] !== to ? (eP = ts && e2 && !tm && (0, a.jsx)("div", {
                className: "absolute end-3 top-3 z-20",
                children: (0, a.jsx)(i.a, {
                    content: tr,
                    children: (0, a.jsx)(y.a, {
                        id: to,
                        "aria-label": tr,
                        color: "mapSurface",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => void tA(),
                        children: (0, a.jsx)(I.N, {})
                    })
                })
            }), e0[105] = e2, e0[106] = tr, e0[107] = tA, e0[108] = tm, e0[109] = ts, e0[110] = to, e0[111] = eP) : eP = e0[111], e0[112] !== t6 || e0[113] !== ek || e0[114] !== eL || e0[115] !== eP ? (eO = (0, a.jsxs)("div", {
                className: eE,
                children: [t6, ek, eA, eL, eP]
            }), e0[112] = t6, e0[113] = ek, e0[114] = eL, e0[115] = eP, e0[116] = eO) : eO = e0[116], e0[117] !== eR || e0[118] !== eT || e0[119] !== eO ? (eD = (0, a.jsx)("div", {
                className: eR,
                style: eT,
                children: eO
            }), e0[117] = eR, e0[118] = eT, e0[119] = eO, e0[120] = eD) : eD = e0[120], e0[121] !== eS || e0[122] !== eM || e0[123] !== eD ? (eF = (0, a.jsx)("div", {
                className: eS,
                style: eM,
                children: eD
            }), e0[121] = eS, e0[122] = eM, e0[123] = eD, e0[124] = eF) : eF = e0[124], e0[125] !== eN || e0[126] !== eF ? (eG = (0, a.jsx)("div", {
                className: eN,
                children: eF
            }), e0[125] = eN, e0[126] = eF, e0[127] = eG) : eG = e0[127], e0[128] !== tK || e0[129] !== eC || e0[130] !== eG || e0[131] !== to ? (ez = (0, a.jsxs)("div", {
                className: eC,
                ref: tt,
                "data-testid": "businesses-map-widget",
                "data-immersive-map-inline": to,
                children: [eG, tK]
            }), e0[128] = tK, e0[129] = eC, e0[130] = eG, e0[131] = to, e0[132] = ez) : ez = e0[132];
            let t8 = ez;
            if (tm) {
                let e, t, n;
                return e0[133] !== to ? (e = {
                    "aria-describedby": void 0,
                    onCloseAutoFocus: e => {
                        let t = document.getElementById(to);
                        null != t && (e.preventDefault(), t.focus({
                            preventScroll: !0
                        }))
                    }
                }, e0[133] = to, e0[134] = e) : e = e0[134], e0[135] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, a.jsx)(v.e, {
                    className: "sr-only",
                    children: (0, a.jsx)(b.a, {
                        id: "chatgpt.contentReferences.map.title",
                        defaultMessage: "Map",
                        description: "Title of the fullscreen places map"
                    })
                }), e0[135] = t) : t = e0[135], e0[136] !== t8 || e0[137] !== e ? (n = (0, a.jsxs)(v.b, {
                    contentClassName: "h-full w-full",
                    contentProps: e,
                    onOpenChange: tp,
                    open: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    children: [t, t8]
                }), e0[136] = t8, e0[137] = e, e0[138] = n) : n = e0[138], n
            }
            if (!tO?.address) return t8;
            e0[139] !== tO.address || e0[140] !== tO.name ? (eB = [tO.name, tO.address].filter(Boolean), e0[139] = tO.address, e0[140] = tO.name, e0[141] = eB) : eB = e0[141];
            let t7 = eB.join(", ");
            e0[142] !== tO ? (eK = (0, C.a)((0, P.e)(tO) ?? "") || null, e0[142] = tO, e0[143] = eK) : eK = e0[143];
            let t9 = eK;
            e0[144] === Symbol.for("react.memo_cache_sentinel") ? (eH = (0, a.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, a.jsx)(_.a, {
                    asset: el.a
                })
            }), e0[144] = eH) : eH = e0[144], e0[145] !== t9 || e0[146] !== t7 ? (eW = null == t9 ? t7 : (0, a.jsx)(T.a, {
                className: "cursor-interaction hover:underline",
                href: t9,
                initiator: "markdown_link_click",
                children: t7
            }), e0[145] = t9, e0[146] = t7, e0[147] = eW) : eW = e0[147], e0[148] !== eW ? (eV = (0, a.jsx)("span", {
                className: "min-w-0 flex-1 text-sm font-medium break-words whitespace-normal select-text",
                children: eW
            }), e0[148] = eW, e0[149] = eV) : eV = e0[149], e0[150] !== tn ? (eY = tn.formatMessage({
                id: "chatgpt.eventSidebar.toggleVenueMap",
                defaultMessage: "Toggle venue map",
                description: "Button beside an event venue address that shows or hides the venue map."
            }), e0[150] = tn, e0[151] = eY) : eY = e0[151], e0[152] !== tc ? (e$ = () => {
                tc && tk.current?.abort(), td(!tc)
            }, e0[152] = tc, e0[153] = e$) : e$ = e0[153];
            let ne = tc && "rotate-180";
            e0[154] !== ne ? (eq = (0, u.b)("transition-transform", ne), e0[154] = ne, e0[155] = eq) : eq = e0[155], e0[156] !== eq ? (eQ = (0, a.jsx)(I._b, {
                className: eq
            }), e0[156] = eq, e0[157] = eQ) : eQ = e0[157], e0[158] !== tc || e0[159] !== eY || e0[160] !== e$ || e0[161] !== eQ || e0[162] !== tu ? (eU = (0, a.jsx)(y.a, {
                "aria-controls": tu,
                "aria-expanded": tc,
                "aria-label": eY,
                color: "ghostSecondary",
                size: "icon",
                className: "shrink-0",
                onClick: e$,
                children: eQ
            }), e0[158] = tc, e0[159] = eY, e0[160] = e$, e0[161] = eQ, e0[162] = tu, e0[163] = eU) : eU = e0[163], e0[164] !== eV || e0[165] !== eU ? (eJ = (0, a.jsxs)("div", {
                className: "flex min-h-11 items-center gap-4 py-2",
                children: [eH, eV, eU]
            }), e0[164] = eV, e0[165] = eU, e0[166] = eJ) : eJ = e0[166];
            let nt = tc && t8;
            return e0[167] !== nt || e0[168] !== tu ? (eX = (0, a.jsx)("div", {
                id: tu,
                children: nt
            }), e0[167] = nt, e0[168] = tu, e0[169] = eX) : eX = e0[169], e0[170] !== eJ || e0[171] !== eX ? (eZ = (0, a.jsxs)("div", {
                className: "-mt-3 w-full min-w-0 border-t border-default pb-2",
                children: [eJ, eX]
            }), e0[170] = eJ, e0[171] = eX, e0[172] = eZ) : eZ = e0[172], eZ
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
                children: (0, a.jsx)(b.a, {
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
            let i, o, u, c, d, m, p, f, h, b, y, v, _, I = (0, r.c)(28),
                {
                    place: w
                } = e;
            I[0] !== w ? (t = w, u = null == (i = (0, g.a)(t.provider_url) ?? (0, g.a)(t.website_url)) ? null : (0, C.a)(i) ?? null, I[0] = w, I[1] = u) : u = I[1];
            let j = u,
                N = (0, x.a)();
            I[2] !== N || I[3] !== w ? (n = w, l = N, c = null == n.rating ? null : null == n.review_count ? l.formatNumber(n.rating, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1
            }) : `${l.formatNumber(n.rating,{maximumFractionDigits:1,minimumFractionDigits:1})} (${l.formatNumber(n.review_count)})`, I[2] = N, I[3] = w, I[4] = c) : c = I[4];
            let S = c;
            I[5] !== w.address ? (d = (0, g.a)(w.address), I[5] = w.address, I[6] = d) : d = I[6], I[7] !== w.price_str ? (m = (0, g.a)(w.price_str), I[7] = w.price_str, I[8] = m) : m = I[8], I[9] !== S || I[10] !== d || I[11] !== m ? (p = [d, S, m].filter(eg), I[9] = S, I[10] = d, I[11] = m, I[12] = p) : p = I[12];
            let M = p;
            I[13] !== w ? (s = w, f = null == (o = s.categories?.map(g.a).filter(e => null != e)) || 0 === o.length ? null : o.join(", "), I[13] = w, I[14] = f) : f = I[14];
            let R = f;
            return I[15] !== j || I[16] !== w.name ? (h = null == j ? w.name : (0, a.jsx)(O.b, {
                href: j,
                children: w.name
            }), I[15] = j, I[16] = w.name, I[17] = h) : h = I[17], I[18] !== h ? (b = (0, a.jsx)("div", {
                className: "font-medium text-default",
                children: h
            }), I[18] = h, I[19] = b) : b = I[19], I[20] !== M ? (y = 0 === M.length ? null : (0, a.jsx)("div", {
                className: "mt-1 flex flex-wrap gap-x-1 text-secondary",
                children: M.map(ef)
            }), I[20] = M, I[21] = y) : y = I[21], I[22] !== R ? (v = null == R ? null : (0, a.jsx)("div", {
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
            l = n("t4av"),
            s = n("D015"),
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
            v = n("dQRk"),
            _ = n("TUMj"),
            I = n("b2ei"),
            w = n("xhWJ"),
            j = n("RgGw"),
            C = n("F0zR"),
            N = n("phAi"),
            S = n("Zble");

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

        function T(e) {
            return e.isIntersecting
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, u, c, g, y, T, E = (0, r.c)(21),
                    {
                        contentReferenceIndex: k,
                        isFullscreen: A,
                        isLoading: L,
                        onOpenEntity: P,
                        onHoverBusiness: O,
                        places: D,
                        onPlacesShown: F,
                        route: G,
                        selectedBusinessKey: z,
                        selectedCardKey: B
                    } = e,
                    K = void 0 !== L && L,
                    H = (0, d.y)(b.a),
                    W = (0, p.a)(),
                    V = (0, _.d)(),
                    Y = (0, h.a)(),
                    $ = (0, m.useRef)(null),
                    q = (0, j.g)(G, D.map(j.d));
                E[0] === Symbol.for("react.memo_cache_sentinel") ? (t = () => {
                    $.current?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                    })
                }, E[0] = t) : t = E[0], E[1] !== z || E[2] !== B ? (n = [z, B], E[1] = z, E[2] = B, E[3] = n) : n = E[3], (0, m.useEffect)(t, n);
                let Q = N.a;
                E[4] !== W ? (u = W.formatMessage({
                    id: "chatgpt.contentReferences.map.results",
                    defaultMessage: "Map places",
                    description: "Accessible name of the scrollable business cards displayed on the places map"
                }), E[4] = W, E[5] = u) : u = E[5];
                let U = o.a,
                    J = D.map((e, t) => {
                        let n = (0, j.d)(e),
                            r = (0, j.h)(D, t, q),
                            o = G?.legs[r - 1],
                            u = null == G ? n : `${n}:${r}`,
                            c = null != B ? B === u : z === n && D.findIndex(e => (0, j.d)(e) === n) === t,
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
                                route: G,
                                total: D.length
                            });
                        return (0, a.jsx)(R, {
                            ref: c ? $ : void 0,
                            className: (0, i.b)(S.a.card, S.a.item, A ? "w-4/5 max-w-80 md:w-full md:max-w-none" : "w-80 max-w-full"),
                            onMouseEnter: () => O?.(n),
                            onMouseLeave: () => O?.(null),
                            onFocus: () => O?.(n, !1),
                            onBlur: () => O?.(null, !1),
                            role: "listitem",
                            place: e,
                            onShown: null == F ? void 0 : e => F([e]),
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
                                contentReferenceIndex: k,
                                isSelected: c,
                                mapContextLabel: d,
                                onOpenEntity: () => {
                                    if (!A && null != V) {
                                        let n = H.get(v.j, V.conversationId) ?? void 0;
                                        (0, x.a)(H, l.b, {
                                            conversationId: n,
                                            entityId: "string" == typeof e.id ? e.id : void 0,
                                            entityName: e.name,
                                            entityIndex: (0, s.a)(t)
                                        }), (0, x.a)(H, l.d, {
                                            conversationId: n,
                                            messageId: V.contentReferenceMessageIds?.[k] ?? V.messageId,
                                            entityId: (0, w.a)(e),
                                            source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_BUSINESS_LIST"
                                        })
                                    }
                                    P(e, u)
                                },
                                place: e,
                                presentation: "card"
                            })
                        }, u)
                    });
                return E[6] !== U || E[7] !== J ? (c = (0, a.jsx)(U, {
                    initial: !1,
                    children: J
                }), E[6] = U, E[7] = J, E[8] = c) : c = E[8], E[9] !== K ? (g = K && (0, a.jsx)("div", {
                    className: "sr-only",
                    role: "status",
                    children: (0, a.jsx)(f.a, {
                        id: "chatgpt.map.loadingPlaces",
                        defaultMessage: "Searching for places…",
                        description: "Screen reader status while a search for businesses in the fullscreen map is still generating results"
                    })
                }), E[9] = K, E[10] = g) : g = E[10], E[11] !== K || E[12] !== D.length ? (y = K && Array.from({
                    length: 0 === D.length ? 4 : 2
                }, M), E[11] = K, E[12] = D.length, E[13] = y) : y = E[13], E[14] !== Q || E[15] !== A || E[16] !== y || E[17] !== u || E[18] !== c || E[19] !== g ? (T = (0, a.jsxs)(Q, {
                    as: "div",
                    isFullscreen: A,
                    label: u,
                    children: [c, g, y]
                }), E[14] = Q, E[15] = A, E[16] = y, E[17] = u, E[18] = c, E[19] = g, E[20] = T) : T = E[20], T
            }
        })
    }),
    phAi: (function(e, t, n) {
        var a = n("ABep"),
            r = n("QosV"),
            l = n("on57"),
            s = n("zd8w"),
            i = n("Zble");

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
                    v = (0, s.useRef)(null),
                    _ = b && i.a.fullscreen;
                return f[0] !== _ ? (t = (0, l.b)(i.a.results, _, "m-0 min-h-0 list-none"), f[0] = _, f[1] = t) : t = f[1], f[2] === Symbol.for("react.memo_cache_sentinel") ? (n = e => {
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
            l = n("r6FN"),
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
                    T = (0, s.y)(d.a),
                    E = (0, s.z)(g.a),
                    k = (0, s.z)(f.a),
                    [A, L] = (0, i.useState)(!1),
                    P = M.location_used?.trim() ? M.location_used : null,
                    O = !N && !0 === M.requested && !0 !== M.location_is_precise && E.enabled && "granted" !== k;
                w[0] !== T ? (t = () => {
                    (0, c.a)(T, l.d, {
                        entryPoint: x
                    })
                }, w[0] = T, w[1] = t) : t = w[1];
                let D = (0, i.useEffectEvent)(t);
                return (w[2] !== D || w[3] !== O || w[4] !== R ? (n = () => {
                    O && R && D()
                }, w[2] = D, w[3] = O, w[4] = R, w[5] = n) : n = w[5], w[6] !== O || w[7] !== R ? (b = [O, R], w[6] = O, w[7] = R, w[8] = b) : b = w[8], (0, i.useEffect)(n, b), null != P || O) ? (w[9] === Symbol.for("react.memo_cache_sentinel") ? (y = (0, a.jsx)(u.gg, {}), w[9] = y) : y = w[9], w[10] !== P ? (v = null != P ? (0, a.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: P
                }) : null, w[10] = P, w[11] = v) : v = w[11], w[12] !== j || w[13] !== C || w[14] !== P || w[15] !== S || w[16] !== A || w[17] !== T || w[18] !== O ? (_ = O ? (0, a.jsxs)(a.Fragment, {
                    children: [null != P ? (0, a.jsx)("span", {
                        "aria-hidden": !0,
                        className: "before:content-['·']"
                    }) : null, (0, a.jsx)("button", {
                        className: "shrink-0 cursor-interaction underline underline-offset-2 select-none disabled:cursor-default disabled:opacity-50",
                        disabled: A,
                        type: "button",
                        onClick: () => {
                            L(!0);
                            let e = T.get(m.f, j)?.banner_info;
                            e?.name === "precise-location-banner" && (0, m.g)(T, j, e), (0, h.a)(T, x, "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW").then(async e => {
                                e && null != S && await (0, p.a)(T, {
                                    conversationId: j,
                                    isTemporaryChat: C,
                                    messageId: S,
                                    entryPoint: x
                                })
                            }).finally(() => L(!1))
                        },
                        children: (0, a.jsx)(o.a, {
                            id: "chatgptConversations.preciseLocation.footer.button.enable",
                            defaultMessage: "Use precise location",
                            description: "Link beneath a ChatGPT response requesting permission to share precise location and regenerate the latest response using it"
                        })
                    })]
                }) : null, w[12] = j, w[13] = C, w[14] = P, w[15] = S, w[16] = A, w[17] = T, w[18] = O, w[19] = _) : _ = w[19], w[20] !== v || w[21] !== _ ? (I = (0, a.jsxs)("div", {
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
            l = n("BOYb"),
            s = n("on57"),
            i = n("zd8w"),
            o = n("Wf1j"),
            u = n("oyxz"),
            c = n("NkEl"),
            d = n("PAiv"),
            m = n("KxMp"),
            p = n("CqQF"),
            f = n("LWI1"),
            g = n("zSQm"),
            h = n("WAdu"),
            x = n("vYmP");

        function b(e) {
            return [e.label, e.title, e.url, e.snippet]
        }

        function y(e) {
            let t, n, l, s, i = (0, r.c)(16),
                {
                    children: c,
                    className: d,
                    currentIndex: m,
                    setCurrentIndex: p,
                    sourceCount: g
                } = e,
                h = (0, o.a)();
            i[0] !== p || i[1] !== g ? (t = e => {
                p(t => (t + e + g) % g)
            }, i[0] = p, i[1] = g, i[2] = t) : t = i[2];
            let x = t;
            return i[3] !== x || i[4] !== g ? (n = e => {
                g > 1 && ("ArrowLeft" === e.key || "ArrowRight" === e.key) && (e.preventDefault(), x("ArrowLeft" === e.key ? -1 : 1))
            }, i[3] = x, i[4] = g, i[5] = n) : n = i[5], i[6] !== m || i[7] !== h || i[8] !== x || i[9] !== g ? (l = g > 1 ? (0, a.jsxs)("div", {
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
                    children: (0, a.jsx)(u.a, {
                        id: "chatgpt.citation.hover.sourcePosition",
                        defaultMessage: "{currentSourceNumber}/{sourceCount}",
                        description: "Position label for the active source in a web citation hover carousel",
                        values: {
                            currentSourceNumber: m + 1,
                            sourceCount: g
                        }
                    })
                })]
            }) : null, i[6] = m, i[7] = h, i[8] = x, i[9] = g, i[10] = l) : l = i[10], i[11] !== c || i[12] !== d || i[13] !== n || i[14] !== l ? (s = (0, a.jsxs)("div", {
                className: d,
                role: "presentation",
                onKeyDown: n,
                tabIndex: -1,
                children: [l, c]
            }), i[11] = c, i[12] = d, i[13] = n, i[14] = l, i[15] = s) : s = i[15], s
        }

        function v(e) {
            var t;
            let n, l, c, p, f, g, x, b, v, _, I = (0, r.c)(32),
                {
                    currentSourceIndex: w,
                    onClick: j,
                    setCurrentSourceIndex: C,
                    sources: N
                } = e,
                S = (0, o.a)(),
                M = (0, i.useContext)(h.a),
                R = N[w] ?? N[0];
            if (null == R) return null;
            I[0] !== S || I[1] !== R.pubDate ? (n = null == R.pubDate ? null : S.formatDate(1e3 * R.pubDate, {
                year: "numeric",
                month: "long",
                day: "numeric"
            }), I[0] = S, I[1] = R.pubDate, I[2] = n) : n = I[2];
            let T = n,
                E = N.length;
            I[3] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, s.b)("flex cursor-interaction flex-col gap-2 p-3 no-underline outline-none", "text-default focus-visible:ring-2 focus-visible:ring-ring"), I[3] = l) : l = I[3];
            let k = R.href,
                A = "restricted" === M;
            I[4] !== R ? (c = [null != (t = R).title && t.title !== t.label ? `${t.label}: ${t.title}` : t.label, t.url].join(", "), I[4] = R, I[5] = c) : c = I[5];
            let L = "restricted" !== M;
            return I[6] !== R.href || I[7] !== L ? (p = (0, a.jsx)(m.a, {
                href: R.href,
                className: "h-4 w-4 shrink-0 text-current",
                loadRemote: L
            }), I[6] = R.href, I[7] = L, I[8] = p) : p = I[8], I[9] !== R.label ? (f = (0, a.jsx)("span", {
                className: "truncate text-default",
                children: R.label
            }), I[9] = R.label, I[10] = f) : f = I[10], I[11] !== p || I[12] !== f ? (g = (0, a.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1.5",
                children: [p, f]
            }), I[11] = p, I[12] = f, I[13] = g) : g = I[13], I[14] !== R.title ? (x = (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 font-medium break-words text-default",
                children: R.title
            }), I[14] = R.title, I[15] = x) : x = I[15], I[16] !== T || I[17] !== R.snippet ? (b = null != T || R.snippet ? (0, a.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 break-words text-secondary",
                children: null != T && R.snippet ? (0, a.jsx)(u.a, {
                    id: "chatgpt.citation.hover.publicationSummary",
                    defaultMessage: "{date} — {snippet}",
                    description: "Publication metadata below the article title in a web citation popup. Date is the formatted publication date; snippet is the source-provided summary. Both values are present, and the combined text is limited to two visible lines.",
                    values: {
                        date: T,
                        snippet: R.snippet
                    }
                }) : T ?? R.snippet
            }) : null, I[16] = T, I[17] = R.snippet, I[18] = b) : b = I[18], I[19] !== j || I[20] !== R.href || I[21] !== g || I[22] !== x || I[23] !== b || I[24] !== A || I[25] !== c ? (v = (0, a.jsxs)(d.a, {
                className: l,
                href: k,
                initiator: "markdown_link_click",
                onClick: j,
                requiresConfirmation: A,
                "aria-label": c,
                children: [g, x, b]
            }), I[19] = j, I[20] = R.href, I[21] = g, I[22] = x, I[23] = b, I[24] = A, I[25] = c, I[26] = v) : v = I[26], I[27] !== w || I[28] !== C || I[29] !== N.length || I[30] !== v ? (_ = (0, a.jsx)(y, {
                className: "flex w-[20rem] max-w-[calc(100vw-16px)] flex-col overflow-hidden text-start text-xs font-normal",
                currentIndex: w,
                setCurrentIndex: C,
                sourceCount: E,
                children: v
            }), I[27] = w, I[28] = C, I[29] = N.length, I[30] = v, I[31] = _) : _ = I[31], _
        }
        n.d(t, {}, {
            a: function(e) {
                let t, n, s, u, d, f, y, _, I, w, j, C, N, S, M, R, T, E, k, A, L, P, O, D, F, G = (0, r.c)(60),
                    {
                        attributes: z,
                        isTerminalInline: B,
                        onClick: K,
                        sources: H
                    } = e,
                    W = (0, o.a)(),
                    V = (0, i.useContext)(h.a),
                    [Y, $] = (0, i.useState)(0),
                    [q, Q] = (0, i.useState)(!1);
                if (G[0] !== z.label || G[1] !== z.supporting_count || G[2] !== z.title || G[3] !== z.url || G[4] !== Y || G[5] !== V || G[6] !== W || G[7] !== B || G[8] !== q || G[9] !== K || G[10] !== H) {
                    R = Symbol.for("react.early_return_sentinel");
                    e: {
                        var U;
                        let e = "string" == typeof z.label && z.label.trim().length > 0 ? z.label.trim() : null,
                            r = "string" == typeof z.url && z.url.trim().length > 0 ? z.url.trim() : null,
                            i = "string" == typeof z.title && z.title.trim().length > 0 ? z.title.trim() : null,
                            o = function(e) {
                                if ("string" != typeof e) return 0;
                                let t = Number(e);
                                return Number.isInteger(t) && t > 0 ? t : 0
                            }(z.supporting_count);
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
                            }(null == H || 0 === H.length ? [{
                                kind: "primary",
                                label: e,
                                title: i,
                                url: r
                            }] : H, {
                                kind: "primary",
                                label: e,
                                title: i,
                                url: r,
                                href: h
                            }),
                            F = D[Y] ?? D[0];
                        if (null == F) {
                            R = null;
                            break e
                        }
                        let J = q ? F : D[0];
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
                        G[34] === Symbol.for("react.memo_cache_sentinel") ? (y = e => {
                            Q(e), e || $(0)
                        }, G[34] = y) : y = G[34],
                        _ = 6,
                        I = "w-full",
                        w = (0, a.jsx)(v, {
                            currentSourceIndex: Y,
                            onClick: K,
                            setCurrentSourceIndex: $,
                            sources: D
                        }),
                        j = "min(24rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))",
                        C = "start",
                        N = "bottom",
                        M = "rich",
                        t = x.a,
                        s = e => {
                            if (null != e) return (0, c.b)(e, {
                                highlight: (0, l.e)() ? "block" : "auto",
                                text: [...D.flatMap(b), (0, l.e)() ? e.textContent : void 0].join(" ")
                            })
                        },
                        S = Z,
                        T = J.href,
                        E = (0, a.jsx)(m.a, {
                            href: J.href,
                            className: "size-3 overflow-hidden rounded-full text-current [&>img]:rounded-full",
                            globeSize: 12,
                            loadRemote: "restricted" !== V
                        }),
                        k = q,
                        A = B,
                        L = J.label,
                        P = K,
                        O = "restricted" === V,
                        u = o > 0 ? (U = o, `+${U}`) : void 0
                    }
                    G[0] = z.label, G[1] = z.supporting_count, G[2] = z.title, G[3] = z.url, G[4] = Y, G[5] = V, G[6] = W, G[7] = B, G[8] = q, G[9] = K, G[10] = H, G[11] = t, G[12] = n, G[13] = s, G[14] = u, G[15] = d, G[16] = f, G[17] = y, G[18] = _, G[19] = I, G[20] = w, G[21] = j, G[22] = C, G[23] = N, G[24] = S, G[25] = M, G[26] = R, G[27] = T, G[28] = E, G[29] = k, G[30] = A, G[31] = L, G[32] = P, G[33] = O
                } else t = G[11], n = G[12], s = G[13], u = G[14], d = G[15], f = G[16], y = G[17], _ = G[18], I = G[19], w = G[20], j = G[21], C = G[22], N = G[23], S = G[24], M = G[25], R = G[26], T = G[27], E = G[28], k = G[29], A = G[30], L = G[31], P = G[32], O = G[33];
                return R !== Symbol.for("react.early_return_sentinel") ? R : (G[35] !== t || G[36] !== s || G[37] !== u || G[38] !== S || G[39] !== T || G[40] !== E || G[41] !== k || G[42] !== A || G[43] !== L || G[44] !== P || G[45] !== O ? (D = (0, a.jsx)(t, {
                    ref: s,
                    ariaLabel: S,
                    href: T,
                    icon: E,
                    isActive: k,
                    isTerminalInline: A,
                    label: L,
                    onClick: P,
                    requiresConfirmation: O,
                    supportingCountLabel: u,
                    testId: "chatgpt-citation"
                }), G[35] = t, G[36] = s, G[37] = u, G[38] = S, G[39] = T, G[40] = E, G[41] = k, G[42] = A, G[43] = L, G[44] = P, G[45] = O, G[46] = D) : D = G[46], G[47] !== n || G[48] !== d || G[49] !== f || G[50] !== y || G[51] !== _ || G[52] !== I || G[53] !== w || G[54] !== j || G[55] !== C || G[56] !== N || G[57] !== M || G[58] !== D ? (F = (0, a.jsx)(n, {
                    interactive: d,
                    keyboardNavigation: f,
                    onOpenChange: y,
                    sideOffset: _,
                    tooltipBodyClassName: I,
                    tooltipContent: w,
                    tooltipMaxWidth: j,
                    align: C,
                    side: N,
                    variant: M,
                    children: D
                }), G[47] = n, G[48] = d, G[49] = f, G[50] = y, G[51] = _, G[52] = I, G[53] = w, G[54] = j, G[55] = C, G[56] = N, G[57] = M, G[58] = D, G[59] = F) : F = G[59], F)
            },
            b: y
        })
    })
};