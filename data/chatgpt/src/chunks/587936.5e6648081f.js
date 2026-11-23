export const __rspack_esm_ids = [587936];
export const __webpack_modules__ = {
    CVU2: (function(a, b) {
        b.a = {
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
    GB0E: (function(a, b) {
        b.a = {
            results: "results-qLgUrv",
            card: "card-Zug7_a",
            fullscreen: "fullscreen-TskD9F",
            item: "item-gCB5MY"
        }
    }),
    K1wx: (function(a, b, c) {
        var d = c("Bbed"),
            e = c("j8Yf");
        let f = (0, d.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(212773), c.e(259288), c.e(724367), c.e(499790), c.e(301030), c.e(909395), c.e(543588), c.e(17983), c.e(167649), c.e(910298), c.e(16212), c.e(722053), c.e(441359), c.e(494879)]).then(c.bind(c, "UT6b"))).ChatGptEntityContentReference, {
            errorFallback: e.b
        });
        c.d(b, {}, {
            a: f
        })
    }),
    j8Yf: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("rKAs"),
            g = c("JQAz"),
            h = c("NddG"),
            i = c("zSQm"),
            j = c("KDax");

        function k(a) {
            let b, c, i, j, k = (0, e.c)(18),
                {
                    isTerminalInline: l,
                    reference: m
                } = a,
                o = m.alt;
            if ("alt_text" === m.type && "latex" === m.render_as && "string" == typeof o && o.trim().length > 0) {
                let a, b;
                k[0] !== o ? (a = o.trim(), k[0] = o, k[1] = a) : a = k[1];
                let c = a;
                return k[2] !== c ? (b = (0, d.jsx)(h.b, {
                    token: {
                        display: !1,
                        raw: c,
                        text: c,
                        type: "math"
                    }
                }, "chatgpt-latex-alt-text"), k[2] = c, k[3] = b) : b = k[3], b
            }
            k[4] !== m ? (b = (0, f.p)(m), k[4] = m, k[5] = b) : b = k[5];
            let p = b;
            k[6] !== m ? (c = (0, f.o)(m), k[6] = m, k[7] = c) : c = k[7];
            let q = c;
            if (null == q) {
                let a;
                return k[8] !== m ? (a = (0, d.jsx)(n, {
                    reference: m
                }), k[8] = m, k[9] = a) : a = k[9], a
            }
            if (null == p) {
                let a;
                return k[10] !== q ? (a = (0, d.jsx)("span", {
                    className: "text-secondary",
                    children: q
                }), k[10] = q, k[11] = a) : a = k[11], a
            }
            return k[12] !== q || k[13] !== p ? (i = {
                label: q,
                title: q,
                url: p
            }, k[12] = q, k[13] = p, k[14] = i) : i = k[14], k[15] !== l || k[16] !== i ? (j = (0, d.jsx)(g.a, {
                attributes: i,
                isTerminalInline: l
            }), k[15] = l, k[16] = i, k[17] = j) : j = k[17], j
        }

        function l(a) {
            let b, c, g, h, j, k, l, n, p, q, r, s, t, u = (0, e.c)(37),
                {
                    reference: v
                } = a;
            u[0] !== v ? (b = (0, f.o)(v), u[0] = v, u[1] = b) : b = u[1];
            let w = b;
            u[2] !== v ? (c = (0, f.n)(v), u[2] = v, u[3] = c) : c = u[3];
            let x = c;
            u[4] !== v ? (g = (0, f.j)(v), u[4] = v, u[5] = g) : g = u[5];
            let y = g;
            if (u[6] !== y || u[7] !== v || u[8] !== x || u[9] !== w) {
                j = Symbol.for("react.early_return_sentinel");
                a: {
                    var z;
                    let a, b = (Array.isArray((z = v).items) ? z.items : []).map(a => {
                        if (null == a || "object" != typeof a) return null;
                        let b = "title" in a ? a.title : null,
                            c = "name" in a ? a.name : null;
                        return "string" == typeof b && b.trim().length > 0 ? b : "string" == typeof c && c.trim().length > 0 ? c : null
                    }).filter(a => null != a).slice(0, 4);
                    if (null == w && null == x && null == y && 0 === b.length) {
                        j = null;
                        break a
                    }
                    if (u[18] !== v) {
                        let b = (0, f.p)(v);
                        a = null == b ? null : (0, i.a)(b), u[18] = v, u[19] = a
                    } else a = u[19];h = a,
                    k = "my-3 max-w-[36rem] rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default",
                    l = "chatgpt-content-reference-card",
                    u[20] !== w ? (n = null == w ? null : (0, d.jsx)("div", {
                        className: "font-medium text-default",
                        children: w
                    }), u[20] = w, u[21] = n) : n = u[21],
                    u[22] !== x ? (p = null == x ? null : (0, d.jsx)("div", {
                        className: "mt-1 line-clamp-2 text-secondary",
                        children: x
                    }), u[22] = x, u[23] = p) : p = u[23],
                    u[24] !== y || u[25] !== w ? (q = null == y || y === w ? null : (0, d.jsx)("div", {
                        className: "mt-1 line-clamp-2 text-secondary",
                        children: y
                    }), u[24] = y, u[25] = w, u[26] = q) : q = u[26],
                    r = 0 === b.length ? null : (0, d.jsx)("div", {
                        className: "mt-2 flex flex-col gap-1",
                        children: b.map(m)
                    })
                }
                u[6] = y, u[7] = v, u[8] = x, u[9] = w, u[10] = h, u[11] = j, u[12] = k, u[13] = l, u[14] = n, u[15] = p, u[16] = q, u[17] = r
            } else h = u[10], j = u[11], k = u[12], l = u[13], n = u[14], p = u[15], q = u[16], r = u[17];
            if (j !== Symbol.for("react.early_return_sentinel")) return j;
            u[27] !== k || u[28] !== l || u[29] !== n || u[30] !== p || u[31] !== q || u[32] !== r ? (s = (0, d.jsxs)("div", {
                className: k,
                "data-testid": l,
                children: [n, p, q, r]
            }), u[27] = k, u[28] = l, u[29] = n, u[30] = p, u[31] = q, u[32] = r, u[33] = s) : s = u[33];
            let A = s;
            return null == h ? A : (u[34] !== A || u[35] !== h ? (t = (0, d.jsx)(o, {
                href: h,
                children: A
            }), u[34] = A, u[35] = h, u[36] = t) : t = u[36], t)
        }

        function m(a, b) {
            return (0, d.jsx)("div", {
                className: "truncate",
                children: a
            }, `${a}-${String(b)}`)
        }

        function n(a) {
            let b, c, g = (0, e.c)(4),
                {
                    reference: h
                } = a;
            g[0] !== h ? (b = (0, f.j)(h), g[0] = h, g[1] = b) : b = g[1];
            let i = b;
            return g[2] !== i ? (c = null == i ? null : (0, d.jsx)(d.Fragment, {
                children: i
            }), g[2] = i, g[3] = c) : c = g[3], c
        }

        function o(a) {
            let b, c = (0, e.c)(3),
                {
                    children: f,
                    href: g
                } = a;
            return c[0] !== f || c[1] !== g ? (b = (0, d.jsx)(j.a, {
                className: "block max-w-fit cursor-interaction rounded-lg no-underline outline-none focus-visible:ring-2 focus-visible:ring-ring",
                href: g,
                initiator: "markdown_link_click",
                children: f
            }), c[0] = f, c[1] = g, c[2] = b) : b = c[2], b
        }
        c.d(b, {}, {
            a: n,
            b: function(a) {
                let b = (0, e.c)(7),
                    {
                        isTerminalInline: c,
                        reference: g
                    } = a;
                switch ((0, f.i)(g)) {
                    case "inline": {
                        let a;
                        return b[0] !== c || b[1] !== g ? (a = (0, d.jsx)(k, {
                            isTerminalInline: c,
                            reference: g
                        }), b[0] = c, b[1] = g, b[2] = a) : a = b[2], a
                    }
                    case "block": {
                        let a;
                        return b[3] !== g ? (a = (0, d.jsx)(l, {
                            reference: g
                        }), b[3] = g, b[4] = a) : a = b[4], a
                    }
                    case "alt": {
                        let a;
                        return b[5] !== g ? (a = (0, d.jsx)(n, {
                            reference: g
                        }), b[5] = g, b[6] = a) : a = b[6], a
                    }
                    case "hidden":
                        return null
                }
            },
            c: l,
            d: k
        })
    }),
    jFKl: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("Wf1j"),
            i = c("oyxz"),
            j = c("Sm6l"),
            k = c("HOLv"),
            l = c("bf6R"),
            m = c("KDax"),
            n = c("CVU2"),
            o = c("IiHo");

        function p(a) {
            let b, c = (0, e.c)(4),
                {
                    children: f,
                    href: g,
                    openTarget: h
                } = a;
            return c[0] !== f || c[1] !== g || c[2] !== h ? (b = (0, d.jsx)(m.a, {
                className: "cursor-interaction underline decoration-current underline-offset-2 hover:text-default",
                href: g,
                initiator: "markdown_link_click",
                openTarget: h,
                children: f
            }), c[0] = f, c[1] = g, c[2] = h, c[3] = b) : b = c[3], b
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, q, r, s, t, u = (0, e.c)(21),
                    {
                        isFullscreen: v,
                        openTarget: w
                    } = a,
                    [x, y] = (0, g.useState)(!1),
                    z = (0, h.a)(),
                    A = v ? "absolute start-3 bottom-3" : "me-3 mb-3 self-end";
                u[0] !== A ? (b = (0, f.b)(n.a.attribution, "pointer-events-auto z-20 flex items-center overflow-hidden rounded-full bg-surface text-[10px] font-light whitespace-nowrap text-default", A), u[0] = A, u[1] = b) : b = u[1], u[2] !== z ? (c = z.formatMessage({
                    id: "chatgpt.contentReferences.map.attribution.toggle",
                    defaultMessage: "Map attribution"
                }), u[2] = z, u[3] = c) : c = u[3];
                let B = v ? "ghostActive" : "mapSurface";
                return u[4] !== x ? (m = () => y(!x), u[4] = x, u[5] = m) : m = u[5], u[6] !== x ? (q = x ? (0, d.jsx)(l.Kj, {}) : (0, d.jsx)(k.a, {
                    asset: o.a
                }), u[6] = x, u[7] = q) : q = u[7], u[8] !== x || u[9] !== c || u[10] !== B || u[11] !== m || u[12] !== q ? (r = (0, d.jsx)(j.a, {
                    "aria-label": c,
                    "aria-expanded": x,
                    color: B,
                    onClick: m,
                    radius: "full",
                    size: "iconCircleSm",
                    children: q
                }), u[8] = x, u[9] = c, u[10] = B, u[11] = m, u[12] = q, u[13] = r) : r = u[13], u[14] !== x || u[15] !== w ? (s = x ? (0, d.jsxs)("div", {
                    className: "pe-2",
                    children: [(0, d.jsx)("span", {
                        "aria-hidden": !0,
                        children: "\xa9 "
                    }), (0, d.jsx)(p, {
                        href: "https://www.mapbox.com/about/maps",
                        openTarget: w,
                        children: "Mapbox"
                    }), (0, d.jsx)("span", {
                        "aria-hidden": !0,
                        children: " "
                    }), (0, d.jsx)(p, {
                        href: "https://www.mapbox.com/legal/end-user-terms",
                        openTarget: w,
                        children: (0, d.jsx)(i.a, {
                            id: "chatgpt.contentReferences.map.attribution.terms",
                            defaultMessage: "Terms"
                        })
                    }), (0, d.jsx)("span", {
                        "aria-hidden": !0,
                        children: " \xa9 "
                    }), (0, d.jsx)(p, {
                        href: "http://www.openstreetmap.org/about",
                        openTarget: w,
                        children: "OpenStreetMap"
                    })]
                }) : null, u[14] = x, u[15] = w, u[16] = s) : s = u[16], u[17] !== b || u[18] !== r || u[19] !== s ? (t = (0, d.jsxs)("div", {
                    className: b,
                    children: [r, s]
                }), u[17] = b, u[18] = r, u[19] = s, u[20] = t) : t = u[20], t
            },
            b: p
        })
    }),
    b2ei: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("nHEk"),
            g = c("xRFI"),
            h = c("Q4Pk"),
            i = c("FER9"),
            j = c("iodE"),
            k = c("rKAs"),
            l = c("Qgfj"),
            m = c("HOLv"),
            n = c("Bbed"),
            o = c("K1wx"),
            p = c("TUMj"),
            q = c("TJEh"),
            r = c("CVU2");
        let s = RegExp(`^(?:${(0,i.a)().source})$`, "u"),
            t = (0, n.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(919441)]).then(c.bind(c, "ac7f"))).ChatGptLocalBusinessHoverCard, {
                fallback: a => {
                    let {
                        business: b,
                        mapCarouselCard: c
                    } = a;
                    return c?.title?.trim() || b.name
                }
            });
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, n, u, v, w, x = (0, e.c)(69),
                    {
                        contentReferenceIndex: y,
                        isProvisional: z,
                        isSelected: A,
                        mapContextLabel: B,
                        onOpenEntity: C,
                        place: D,
                        presentation: E,
                        previewPortalContainer: F,
                        stopNumber: G,
                        notesClassName: H,
                        standalone: I
                    } = a,
                    J = void 0 !== A && A,
                    K = void 0 !== I && I,
                    L = (0, p.e)(),
                    M = (0, j.a)();
                x[0] !== D.id || x[1] !== D.name || x[2] !== L?.contentReferences || x[3] !== L?.contentReferences.findIndex ? (b = L?.contentReferences.findIndex(a => {
                    if ("entity" !== a.type) return !1;
                    let b = (0, q.d)(a, "string" == typeof a.category ? a.category : (0, k.t)(a)?.category ?? null);
                    return "string" == typeof D.id ? b?.id === D.id : a.name === D.name
                }) ?? -1, x[0] = D.id, x[1] = D.name, x[2] = L?.contentReferences, x[3] = L?.contentReferences.findIndex, x[4] = b) : b = x[4];
                let N = b;
                x[5] !== y || x[6] !== N || x[7] !== D || x[8] !== L ? (c = L?.contentReferences[N] ?? {
                    category: D.category ?? "local_business",
                    entity_data: D,
                    extra_params: D.extra_params,
                    name: D.name,
                    start_idx: L?.contentReferences[y]?.start_idx,
                    status: "done",
                    type: "entity"
                }, x[5] = y, x[6] = N, x[7] = D, x[8] = L, x[9] = c) : c = x[9];
                let O = c;
                x[10] !== D ? (i = q.a.safeParse(D), x[10] = D, x[11] = i) : i = x[11];
                let P = i,
                    Q = "string" == typeof D.mapLabel ? D.mapLabel : void 0,
                    R = "string" == typeof D.notes ? D.notes : void 0;
                if (K && "card" === E && P.success) {
                    let a, b = L?.shouldBlockExternalEgress ?? !1;
                    return x[12] !== P.data || x[13] !== B || x[14] !== Q || x[15] !== R || x[16] !== H || x[17] !== C || x[18] !== D.mapCarouselCard || x[19] !== b ? (a = (0, d.jsx)(t, {
                        business: P.data,
                        contextLabel: B,
                        mapCarouselCard: D.mapCarouselCard,
                        mapLabel: Q,
                        notes: R,
                        notesClassName: H,
                        onOpenEntity: C,
                        presentation: "map-card",
                        shouldBlockExternalEgress: b
                    }), x[12] = P.data, x[13] = B, x[14] = Q, x[15] = R, x[16] = H, x[17] = C, x[18] = D.mapCarouselCard, x[19] = b, x[20] = a) : a = x[20], a
                }
                let S = h.a;
                if (null == D.rating && (S = "local_business" === O.category ? f.a : g.a), x[21] !== S || x[22] !== D.mapIcon || x[23] !== D.rating || x[24] !== G) {
                    let a, b = function(a) {
                        let b = a?.trim();
                        if (b && (s.test(b) || !(Array.from(b).length > 8 || /^\p{L}$/u.test(b)))) return b
                    }("string" == typeof D.mapIcon ? D.mapIcon : null);
                    if (b) {
                        let c, e = s.test(b) ? "text-sm" : void 0;
                        x[26] !== b || x[27] !== e ? (c = (0, d.jsx)("span", {
                            className: e,
                            children: b
                        }), x[26] = b, x[27] = e, x[28] = c) : c = x[28], a = c
                    } else if (null != G) {
                        let b;
                        x[29] !== G ? (b = (0, d.jsx)(l.c, {
                            value: G
                        }), x[29] = G, x[30] = b) : b = x[30], a = b
                    } else {
                        let b, c, e;
                        x[31] !== S ? (b = (0, d.jsx)(m.a, {
                            asset: S
                        }), x[31] = S, x[32] = b) : b = x[32], x[33] !== D.rating ? (c = null != D.rating ? (0, d.jsx)(l.c, {
                            value: D.rating,
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        }) : null, x[33] = D.rating, x[34] = c) : c = x[34], x[35] !== b || x[36] !== c ? (e = (0, d.jsxs)(d.Fragment, {
                            children: [b, c]
                        }), x[35] = b, x[36] = c, x[37] = e) : e = x[37], a = e
                    }
                    n = (0, d.jsx)("span", {
                        className: r.a.pinContent,
                        children: a
                    }), x[21] = S, x[22] = D.mapIcon, x[23] = D.rating, x[24] = G, x[25] = n
                } else n = x[25];
                let T = n;
                if (K && "marker" === E && null != C && M) {
                    let a;
                    x[38] !== C || x[39] !== T || x[40] !== D.name ? (a = (0, d.jsx)("button", {
                        type: "button",
                        "aria-label": D.name,
                        className: `${r.a.marker} cursor-interaction focus-visible:ring-2 focus-visible:ring-ring`,
                        onClick: C,
                        children: T
                    }), x[38] = C, x[39] = T, x[40] = D.name, x[41] = a) : a = x[41], u = a
                } else if (null != L && ("marker" !== E || M)) {
                    let a, b = P.success ? P.data : void 0,
                        c = N < 0 ? y : N,
                        e = "marker" === E ? T : void 0,
                        f = "marker" === E ? "map-marker" : "map-card";
                    x[45] !== B || x[46] !== Q || x[47] !== R || x[48] !== H || x[49] !== C || x[50] !== D.mapCarouselCard || x[51] !== F || x[52] !== O || x[53] !== f || x[54] !== b || x[55] !== c || x[56] !== e || x[57] !== L ? (a = (0, d.jsx)(o.a, {
                        businessPreview: b,
                        contentReferenceIndex: c,
                        displayName: e,
                        mapCarouselCard: D.mapCarouselCard,
                        mapContextLabel: B,
                        mapLabel: Q,
                        mapNotes: R,
                        mapNotesClassName: H,
                        onOpenEntity: C,
                        previewPortalContainer: F,
                        reference: O,
                        turnContext: L,
                        variant: f
                    }), x[45] = B, x[46] = Q, x[47] = R, x[48] = H, x[49] = C, x[50] = D.mapCarouselCard, x[51] = F, x[52] = O, x[53] = f, x[54] = b, x[55] = c, x[56] = e, x[57] = L, x[58] = a) : a = x[58], u = a
                } else {
                    let a, b = "marker" === E ? T : D.name;
                    x[42] !== D.name || x[43] !== b ? (a = (0, d.jsx)("div", {
                        className: r.a.marker,
                        "aria-label": D.name,
                        role: "img",
                        children: b
                    }), x[42] = D.name, x[43] = b, x[44] = a) : a = x[44], u = a
                }
                let U = "marker" === E ? D.longitude : void 0,
                    V = "marker" === E ? D.latitude : void 0;
                return x[59] !== D.name || x[60] !== E ? (v = "marker" === E ? (0, d.jsx)("span", {
                    className: r.a.label,
                    "data-map-label-blocker": "",
                    "aria-hidden": !0,
                    children: D.name
                }) : null, x[59] = D.name, x[60] = E, x[61] = v) : v = x[61], x[62] !== z || x[63] !== J || x[64] !== u || x[65] !== U || x[66] !== V || x[67] !== v ? (w = (0, d.jsxs)("div", {
                    className: r.a.business,
                    "data-provisional": z,
                    "data-selected": J,
                    "data-map-marker-longitude": U,
                    "data-map-marker-latitude": V,
                    children: [u, v]
                }), x[62] = z, x[63] = J, x[64] = u, x[65] = U, x[66] = V, x[67] = v, x[68] = w) : w = x[68], w
            }
        })
    }),
    xhWJ: (function(a, b, c) {
        var d = c("EA6X"),
            e = c("D015"),
            f = c("rKAs"),
            g = c("AuIy"),
            h = c("Wc42"),
            i = c("dQRk"),
            j = c("xof2"),
            k = c("RgGw"),
            l = c("DUJs");
        c.d(b, {}, {
            a: function(a) {
                return (0, h.a)(a.entity_lookup_id) ?? (0, h.a)(a.extra_params?.entity_lookup_id) ?? (0, h.a)(a.id) ?? void 0
            },
            b: function(a, b, c, m, n) {
                let {
                    turnContext: o
                } = b, p = (0, h.a)(c.id) ?? void 0, q = b.reference;
                if (null != p) {
                    let a = a => [...(0, f.v)(a, (0, l.a)(a, o)), ...(0, k.a)(a)].some(a => a.id === p);
                    q = (null != q && a(q) ? q : void 0) ?? o.contentReferences.find(a) ?? o.contentReferences.find(a => "entity" === a.type && (0, g.s)(a.entity_data)?.id === p) ?? b.reference
                }
                let r = null == q ? -1 : o.contentReferences.indexOf(q),
                    s = o.contentReferenceMessageIds?.[r] ?? (q === b.reference ? b.mapMessageId : void 0) ?? o.messageId,
                    t = null == s ? void 0 : a.get(i.N, o.conversationId)?.[s]?.message?.metadata;
                (0, j.b)(a, {
                    actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_CLICKED",
                    entityAffordance: "marker" === m ? d.d.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER : d.d.CHATGPT_ENTITY_AFFORDANCE_MAP_LIST,
                    entityId: p,
                    entityCategory: (0, h.a)(c.category) ?? "local_business",
                    conversationId: o.browserConversationId ?? o.conversationId,
                    messageId: s,
                    assistantMessageId: o.messageId ?? s,
                    contentReferenceStartIndex: "number" == typeof q?.start_idx ? (0, e.a)(q.start_idx) : void 0,
                    contentReferenceType: q?.type === "client_defined_widget" ? "map" : (0, h.a)(q?.type) ?? void 0,
                    surfaceLocation: n,
                    isGenui: q?.type === "client_defined_widget" && "map" === q.category || (0, g.s)((0, g.s)(t?.model_dil)?.dil)?.type != null || t?.model_dil_v2 != null || t?.genui_refresh != null
                })
            }
        })
    }),
    RgGw: (function(a, b, c) {
        var d = c("rKAs"),
            e = c("sqog");

        function f(a) {
            return "string" == typeof a.id ? a.id : a.name
        }

        function g(a) {
            return "string" == typeof a.mapEntityId ? a.mapEntityId : f(a)
        }

        function h(a, b) {
            if (null == a || 0 === a.legs.length) return b;
            let c = [];
            return a.legs.forEach((a, d) => {
                let e = a.from_point_id ?? b[d],
                    f = a.to_point_id ?? b[d + 1],
                    g = c.at(-1);
                null != e && (null == g || j(g) !== j(e)) && c.push(e), null != f && c.push(f)
            }), c
        }

        function i(a) {
            let b = j(a),
                c = /^point-(\d+)$/.exec(b);
            return null == c ? [a] : [b, `genui-map-point-${c[1]}`]
        }

        function j(a) {
            return a.replace(/^genui-map-point-(\d+)$/, "point-$1")
        }
        c.d(b, {}, {
            a: function(a) {
                if ("client_defined_widget" === a.type) return [];
                let b = a.raw_search_entities;
                if (!Array.isArray(b) || 0 === b.length) return [];
                let c = new Set((0, d.v)(a).map(f));
                return (0, d.v)({
                    ...a,
                    entities: b
                }).filter(a => {
                    let b = f(a);
                    return !c.has(b) && (c.add(b), !0)
                })
            },
            b: f,
            c: function(a, b) {
                if (null == b) return null;
                let c = a.find(a => g(a) === g(b)) ?? a.find(a => f(a) === f(b));
                return null == c ? null : g(c)
            },
            d: g,
            e: function(a, b) {
                var c, d;
                let e, j, k, l, m = new Set,
                    n = a.filter(a => {
                        let c = null == b ? f(a) : g(a);
                        return !m.has(c) && (m.add(c), !0)
                    });
                if (null == b) return n;
                let o = (k = (e = h((d = c = b).route, d.pointIds), j = new Set(d.pointIds.keys()), e.flatMap(a => {
                    let b = i(a),
                        c = d.pointIds.findIndex((a, c) => j.has(c) && i(a).some(a => b.includes(a)));
                    return -1 === c ? [] : (j.delete(c), [c])
                })), l = new Set(c.pointIds.keys()), k.forEach(a => l.delete(a)), [...k, ...l].map(a => ({
                    pointId: c.pointIds[a],
                    visitIndex: a
                })));
                if (0 === o.length) return n;
                let p = new Map(n.map(a => [g(a), a]));
                return o.flatMap(a => {
                    let {
                        pointId: c,
                        visitIndex: d
                    } = a, e = i(c).map(a => p.get(a)).find(a => null != a);
                    if (null == e) return [];
                    let f = b.notesByVisitIndex?.get(d);
                    return [null == f ? e : {
                        ...e,
                        notes: f
                    }]
                })
            },
            f: function(a) {
                let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (0, e.a)(a);
                if (null == b) {
                    let b = e.f.safeParse(a.route),
                        c = b.success ? b.data : null;
                    return null == c ? [] : [{
                        key: "route",
                        pointIds: (0, d.v)(a).map(g),
                        route: c
                    }]
                }
                let c = b.groups?.map((a, c) => {
                    let d = new Set,
                        f = a.locations.flatMap(a => a.point_id ? [a.point_id] : []),
                        g = h(a.route, f),
                        i = a.locations.map((a, c) => {
                            let f = a.point_id?.trim();
                            if (f) return f;
                            let h = b.points.findIndex((b, c) => b.name === a.name && !d.has(c)),
                                i = -1 === h ? b.points.findIndex(b => b.name === a.name) : h;
                            return -1 !== i && d.add(i), (-1 === i ? void 0 : (0, e.d)(b.points[i], i)) || g[c] || a.name.trim()
                        }),
                        j = new Map;
                    return a.locations.forEach((a, b) => {
                        let c = a.notes?.trim();
                        c && j.set(b, c)
                    }), {
                        key: a.id?.trim() || `group-${c}`,
                        dayNumber: a.day_number,
                        title: a.title,
                        pointIds: i,
                        notesByVisitIndex: j,
                        route: a.route,
                        alternativeRoutes: a.alternative_routes
                    }
                });
                return null != c && c.length > 0 && (c.some(a => null != a.route) || null == b.route) ? c : null == b.route ? [] : [{
                    key: "route",
                    pointIds: b.points.map(e.d),
                    route: b.route,
                    alternativeRoutes: b.alternative_routes
                }]
            },
            g: h,
            h: function(a, b, c) {
                let d = g(a[b]),
                    e = a.slice(0, b).filter(a => g(a) === d).length;
                return c.findIndex(a => i(a).includes(d) && 0 == e--)
            },
            i: function(a) {
                let b = new Map,
                    c = 1;
                for (let d of a)
                    if (null != d.route)
                        for (let a of h(d.route, d.pointIds)) {
                            let e = i(a),
                                f = e.map(a => b.get(a)).find(a => null != a) ?? {
                                    number: c,
                                    routed: !1
                                };
                            for (let a of (c++, f.routed = f.routed || null != d.route, e)) b.set(a, f)
                        }
                return new Map([...b].flatMap(a => {
                    let [b, c] = a;
                    return c.routed ? [
                        [b, c.number]
                    ] : []
                }))
            }
        })
    }),
    F0zR: (function(a, b, c) {
        c.d(b, {}, {
            a: function(a, b) {
                if (null == b) return null;
                let c = Math.max(1, Math.round(b / 60));
                if (c <= 60) return a.formatNumber(c, {
                    style: "unit",
                    unit: "minute",
                    unitDisplay: "short"
                });
                let d = [];
                for (let [b, e] of [
                        ["week", 10080],
                        ["day", 1440],
                        ["hour", 60],
                        ["minute", 1]
                    ]) {
                    let f = Math.floor(c / e);
                    if (0 !== f && (d.push(a.formatNumber(f, {
                            style: "unit",
                            unit: b,
                            unitDisplay: "minute" === b ? "short" : "long"
                        })), c %= e, 2 === d.length)) break
                }
                return a.formatList(d, {
                    type: "unit",
                    style: "short"
                })
            },
            b: function(a, b) {
                let c = b?.match(/^(\d{4}-\d{2}-\d{2})T(\d{2}):(\d{2})(?::\d{2}(?:\.\d+)?)?(Z|[+-]\d{2}:\d{2})$/);
                if (null == c || !Number.isFinite(Date.parse(b ?? ""))) return null;
                let d = `${c[1]}T${c[2]}:${c[3]}`,
                    e = new Date(`${d}:00Z`);
                return Number.isFinite(e.getTime()) && e.toISOString().slice(0, 16) === d ? a.formatTime(e, {
                    timeZone: "UTC",
                    hour: "numeric",
                    minute: "2-digit"
                }) : null
            }
        })
    }),
    ry7c: (function(a, b, c) {
        c.d(b, {
            a: () => g
        });
        var d = c("v7qY"),
            e = "transition-DDTh2X";
        let f = null;

        function g(a) {
            let {
                triggerId: b,
                conversationId: c,
                reducedMotion: g,
                update: h,
                onSuperseded: i
            } = a;
            if (f?.transition.skipTransition(), f?.cleanup(), f = null, g || "function" != typeof document.startViewTransition) return void h();
            let j = document.getElementById(b)?.closest("[data-immersive-map-inline]") ?? null,
                k = [],
                l = () => {
                    let a = document.querySelector("[data-immersive-map-fullscreen]"),
                        b = a ?? j,
                        d = a?.querySelector('[data-map-transition="composer"]') ?? Array.from(document.querySelectorAll("[data-map-composer-conversation]")).find(a => a.dataset.mapComposerConversation === c);
                    for (let [a, c] of Object.entries({
                            "immersive-map-canvas": b?.querySelector('[data-map-transition="map"]'),
                            "immersive-map-results": b?.querySelector('[data-map-transition="results"], [role="list"]'),
                            "immersive-map-composer": d?.querySelector("[data-composer-body]"),
                            "immersive-map-composer-input": d?.querySelector('[contenteditable="true"]'),
                            "immersive-map-composer-controls": d?.querySelector("[data-composer-footer-responsive]")
                        }))
                        if (null != c) {
                            let b = c.style.viewTransitionName;
                            c.style.viewTransitionName = a, k.push(() => {
                                c.style.viewTransitionName = b
                            })
                        }
                },
                m = () => {
                    k.splice(0).forEach(a => a())
                },
                n = () => {
                    m(), document.documentElement.classList.remove(e)
                },
                o = !1,
                p = !1,
                q = () => {
                    o || p || (o = !0, (0, d.flushSync)(h))
                };
            document.documentElement.classList.add(e), l();
            try {
                let a = document.startViewTransition(() => {
                        p || (m(), q(), l())
                    }),
                    b = {
                        transition: a,
                        cleanup: () => {
                            p = !0, o || i?.(), n()
                        }
                    };
                f = b, a.ready.catch(() => {});
                let c = () => {
                    f === b && (n(), f = null)
                };
                a.finished.then(c, c)
            } catch (a) {
                if (n(), o) throw a;
                q()
            }
        }
    }),
    Xj7S: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Wf1j"),
            h = c("oyxz"),
            i = c("Sm6l"),
            j = c("bqtn"),
            k = c("HOLv"),
            l = c("bf6R"),
            m = c("lbvo");

        function n(a, b) {
            return a.title?.trim() || (0, d.jsx)(h.a, {
                id: "chatgpt.maps.route_group.day",
                defaultMessage: "Day {dayNumber}",
                values: {
                    dayNumber: a.dayNumber ?? b + 1
                }
            })
        }

        function o(a) {
            return !!a.title?.trim()
        }

        function p(a) {
            return a.dayNumber
        }

        function q(a) {
            return null != a.dayNumber
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, j, k = (0, e.c)(7),
                    {
                        onClose: m
                    } = a,
                    n = (0, g.a)();
                return k[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, f.b)("absolute start-2 z-20 flex items-center gap-2", "top-2"), k[0] = b) : b = k[0], k[1] !== n ? (c = n.formatMessage({
                    id: "chatgpt.contentReferences.map.collapse",
                    defaultMessage: "Collapse map"
                }), k[1] = n, k[2] = c) : c = k[2], k[3] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, d.jsx)(l.Lj, {}), k[3] = h) : h = k[3], k[4] !== m || k[5] !== c ? (j = (0, d.jsx)("div", {
                    className: b,
                    children: (0, d.jsx)(i.a, {
                        "aria-label": c,
                        color: "mapSurface",
                        radius: "full",
                        size: "inputIcon",
                        onClick: m,
                        children: h
                    })
                }), k[4] = m, k[5] = c, k[6] = j) : j = k[6], j
            },
            b: function(a) {
                let b, c, f, k, m, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L = (0, e.c)(67),
                    {
                        groups: M,
                        groupsTitle: N,
                        selectedGroupKey: O,
                        onSelectGroup: P
                    } = a,
                    Q = (0, g.a)();
                L[0] !== M ? (b = M.every(q) && new Set(M.map(p)).size > 1, L[0] = M, L[1] = b) : b = L[1];
                let R = b,
                    S = M.every(o);
                if (M.length < 2 || !R && !S) return null;
                if (L[2] !== M || L[3] !== N || L[4] !== R || L[5] !== Q || L[6] !== O) {
                    let a, b, e;
                    L[23] !== O ? (a = a => a.key === O, L[23] = O, L[24] = a) : a = L[24], s = M.findIndex(a), L[25] !== N || L[26] !== R ? (b = N?.trim() || (R ? (0, d.jsx)(h.a, {
                        id: "chatgpt.maps.route_group.all_days",
                        defaultMessage: "All days"
                    }) : (0, d.jsx)(h.a, {
                        id: "chatgpt.maps.route_group.all_groups",
                        defaultMessage: "All groups"
                    })), L[25] = N, L[26] = R, L[27] = b) : b = L[27], k = b, m = n, L[28] !== R || L[29] !== Q ? (e = R ? Q.formatMessage({
                        id: "chatgpt.maps.route_group.filter_label",
                        defaultMessage: "Trip day"
                    }) : Q.formatMessage({
                        id: "chatgpt.maps.route_group.generic_filter_label",
                        defaultMessage: "Map group"
                    }), L[28] = R, L[29] = Q, L[30] = e) : e = L[30], r = e, f = j.a, t = "start", u = "chatgpt", c = i.a, x = "max-w-full", y = r, z = !0, A = "mapSurface", B = "full", C = "dialogAction", v = "truncate", w = s < 0 ? k : m(M[s], s), L[2] = M, L[3] = N, L[4] = R, L[5] = Q, L[6] = O, L[7] = c, L[8] = f, L[9] = k, L[10] = m, L[11] = r, L[12] = s, L[13] = t, L[14] = u, L[15] = v, L[16] = w, L[17] = x, L[18] = y, L[19] = z, L[20] = A, L[21] = B, L[22] = C
                } else c = L[7], f = L[8], k = L[9], m = L[10], r = L[11], s = L[12], t = L[13], u = L[14], v = L[15], w = L[16], x = L[17], y = L[18], z = L[19], A = L[20], B = L[21], C = L[22];
                L[31] !== v || L[32] !== w ? (D = (0, d.jsx)("span", {
                    className: v,
                    children: w
                }), L[31] = v, L[32] = w, L[33] = D) : D = L[33], L[34] === Symbol.for("react.memo_cache_sentinel") ? (E = (0, d.jsx)(l.hc, {}), L[34] = E) : E = L[34], L[35] !== c || L[36] !== D || L[37] !== x || L[38] !== y || L[39] !== z || L[40] !== A || L[41] !== B || L[42] !== C ? (F = (0, d.jsxs)(c, {
                    className: x,
                    "aria-label": y,
                    allowShrink: z,
                    color: A,
                    radius: B,
                    size: C,
                    children: [D, E]
                }), L[35] = c, L[36] = D, L[37] = x, L[38] = y, L[39] = z, L[40] = A, L[41] = B, L[42] = C, L[43] = F) : F = L[43];
                let T = s < 0 ? "all" : String(s);
                if (L[44] !== P ? (G = () => P(null), L[44] = P, L[45] = G) : G = L[45], L[46] !== k || L[47] !== G ? (H = (0, d.jsx)(j.c.RadioItem, {
                        value: "all",
                        variant: "chatgpt",
                        onSelect: G,
                        children: k
                    }), L[46] = k, L[47] = G, L[48] = H) : H = L[48], L[49] !== m || L[50] !== M || L[51] !== P) {
                    let a;
                    L[53] !== m || L[54] !== P ? (a = (a, b) => (0, d.jsx)(j.c.RadioItem, {
                        value: String(b),
                        variant: "chatgpt",
                        onSelect: () => P(a.key),
                        children: m(a, b)
                    }, a.key), L[53] = m, L[54] = P, L[55] = a) : a = L[55], I = M.map(a), L[49] = m, L[50] = M, L[51] = P, L[52] = I
                } else I = L[52];
                return L[56] !== r || L[57] !== T || L[58] !== H || L[59] !== I ? (J = (0, d.jsxs)(j.c.RadioGroup, {
                    "aria-label": r,
                    value: T,
                    children: [H, I]
                }), L[56] = r, L[57] = T, L[58] = H, L[59] = I, L[60] = J) : J = L[60], L[61] !== f || L[62] !== t || L[63] !== u || L[64] !== F || L[65] !== J ? (K = (0, d.jsx)(f, {
                    align: t,
                    surface: u,
                    triggerButton: F,
                    children: J
                }), L[61] = f, L[62] = t, L[63] = u, L[64] = F, L[65] = J, L[66] = K) : K = L[66], K
            },
            c: function(a) {
                let b, c, f, h = (0, e.c)(6),
                    {
                        onClick: j
                    } = a,
                    l = (0, g.a)();
                return h[0] !== l ? (b = l.formatMessage({
                    id: "chatgpt.map.resetView",
                    defaultMessage: "Reset view"
                }), h[0] = l, h[1] = b) : b = h[1], h[2] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, d.jsx)(k.a, {
                    asset: m.a
                }), h[2] = c) : c = h[2], h[3] !== j || h[4] !== b ? (f = (0, d.jsx)(i.a, {
                    "aria-label": b,
                    color: "mapSurface",
                    radius: "full",
                    size: "inputIcon",
                    onClick: j,
                    children: c
                }), h[3] = j, h[4] = b, h[5] = f) : f = h[5], f
            },
            d: function(a) {
                let b, c, f = (0, e.c)(3),
                    {
                        route: g
                    } = a,
                    i = g?.duration_seconds;
                return g?.legs.length !== 1 || null == i ? null : (f[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(l.Bc, {}), f[0] = b) : b = f[0], f[1] !== i ? (c = (0, d.jsxs)("div", {
                    className: "flex items-center gap-1.5 rounded-full border border-default bg-surface px-3 py-1.5 text-sm font-medium select-none",
                    children: [b, i < 3600 ? (0, d.jsx)(h.a, {
                        id: "chatgpt.maps.route.duration_minutes",
                        defaultMessage: "{minutes, plural, one {# min} other {# mins}}",
                        values: {
                            minutes: Math.max(1, Math.round(i / 60))
                        }
                    }) : (0, d.jsx)(h.a, {
                        id: "chatgpt.maps.route.duration_hours",
                        defaultMessage: "{hours, plural, one {# hour} other {# hours}}",
                        values: {
                            hours: Math.round(i / 360) / 10
                        }
                    })]
                }), f[1] = i, f[2] = c) : c = f[2], c)
            }
        })
    }),
    YTiF: (function(a, b, c) {
        var d = c("xCr9"),
            e = c.n(d),
            f = c("rKAs"),
            g = c("AuIy"),
            h = c("yMDx"),
            i = c("hx97"),
            j = c("RgGw"),
            k = c("VYHi"),
            l = c("DUJs");

        function m(a) {
            let b = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : !0 === a.isComplete,
                {
                    reference: c,
                    turnContext: d
                } = a,
                e = (0, k.a)(c);
            return null == c || !0 !== e ? e : (0, l.b)(d, d.contentReferences.indexOf(c), b)
        }

        function n(a, b, c) {
            let {
                fastPathEnabled: d
            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                fastPathEnabled: !1
            };
            if (null == b) return a;
            let e = !c && !0 === b.isComplete,
                f = m(b, e);
            if (null != f) return f ? b : a;
            let g = (0, k.b)(b, {
                    fastPathEnabled: d
                }),
                h = g.preferred.length > 0 || c && d && g.additional.length > 0,
                i = g.widgetOwnsPins ?? (e && null != b.reference);
            return h || i ? b : a
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = [],
                    d = [],
                    l = !1;

                function n() {
                    let a = e()(d, a => "assistant" === a.author.role && !(0, g.n)(a)) ?? d.at(-1);
                    if (a?.id == null) return;
                    let k = a.id,
                        m = d.flatMap(a => (0, f.q)(a.metadata).map(b => ({
                            messageId: a.id ?? k,
                            message: a,
                            reference: b
                        }))),
                        n = e()(m, a => {
                            let {
                                message: b,
                                reference: c
                            } = a;
                            return ("tool" !== b.author.role || "map" !== c.type || !0 === c.reset_flag || null != c.route || !((0, j.a)(c).length > 0) || 0 !== (0, f.v)(c).length) && ("map" === c.type || "businesses_map" === c.type || "client_defined_widget" === c.type && "map" === c.category)
                        }),
                        o = "assistant" === a.author.role && "all" === a.recipient && "text" === a.content.content_type && "finished_successfully" === a.status;
                    c.push({
                        isComplete: o,
                        isFullscreenReply: l,
                        mapMessageId: n?.messageId,
                        responseMessageId: d[0]?.id ?? k,
                        reference: n?.reference ?? null,
                        turnContext: {
                            ...b,
                            isStreaming: !o,
                            dilViewState: (0, h.c)(n?.message.metadata) ?? (0, h.c)(a.metadata),
                            contentReferences: m.map(a => {
                                let {
                                    reference: b
                                } = a;
                                return b
                            }),
                            contentReferenceMessageIds: m.map(a => {
                                let {
                                    messageId: b
                                } = a;
                                return b
                            }),
                            contentReferenceMessageStatuses: m.map(a => {
                                let {
                                    message: b
                                } = a;
                                return b.status
                            }),
                            messageId: k,
                            turnId: (0, i.g)(a) ?? void 0
                        }
                    })
                }
                for (let b of a)
                    if ((0, i.o)(b)) {
                        n();
                        let a = b.metadata?.map_search_parameters;
                        l = null != a && "object" == typeof a && "map_message_id" in a && "string" == typeof a.map_message_id && a.map_message_id.length > 0, d = []
                    } else("assistant" === b.author.role || "tool" === b.author.role) && d.push(b);
                return n(), {
                    history: c.filter(a => null != a.reference && !1 !== m(a) || (0, k.b)(a, {
                        fastPathEnabled: !1
                    }).preferred.length > 0),
                    latest: c.at(-1)
                }
            },
            b: function(a) {
                let {
                    followResponse: b
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    followResponse: !1
                };
                return b ? `response:${a.responseMessageId??a.turnContext.messageId}` : [a.mapMessageId ?? a.turnContext.contentReferenceMessageIds?.[null == a.reference ? -1 : a.turnContext.contentReferences.indexOf(a.reference)] ?? a.turnContext.messageId, a.reference?.type, a.reference?.start_idx ?? a.reference?.previewPlaceKey].join(":")
            },
            c: n,
            d: function(a, b, c, d) {
                if (a.reference?.previewPlaceKey != null) return a;
                let e = a.mapMessageId ?? a.turnContext.messageId;
                if (null != e && c?.reference != null && c.turnContext.contentReferenceMessageIds?.includes(e) && d.some(a => a.id === e && "tool" === a.author.role) && d.some(a => a.id === c.mapMessageId && "assistant" === a.author.role) && n(a, c, c.turnContext.isStreaming) === c) return c;
                if (null == a.reference) return b.find(b => b.turnContext.messageId === a.turnContext.messageId) ?? a;
                for (let c of b) {
                    let b = c.turnContext.contentReferences.findIndex((b, d) => c.turnContext.contentReferenceMessageIds?.[d] === (a.mapMessageId ?? a.turnContext.messageId) && b.type === a.reference?.type && b.start_idx === a.reference?.start_idx);
                    if (b >= 0) return {
                        ...c,
                        mapMessageId: c.turnContext.contentReferenceMessageIds?.[b],
                        reference: c.turnContext.contentReferences[b] ?? null
                    }
                }
                return a
            }
        })
    }),
    VYHi: (function(a, b, c) {
        var d = c("i5ac"),
            e = c.n(d),
            f = c("rKAs"),
            g = c("lAQI"),
            h = c("TJEh"),
            i = c("RgGw"),
            j = c("DUJs");
        let k = g.F({
            type: g.z("map"),
            reset_flag: g.j(),
            entities: g.g(g.R()).length(0).nullish(),
            raw_search_entities: g.g(g.R()).length(0).nullish()
        });

        function l(a) {
            if (a?.type === "map" && "boolean" == typeof a.reset_flag) return k.safeParse(a).data?.reset_flag
        }

        function m(a) {
            return "string" == typeof a.notes && a.notes.trim().length > 0
        }
        c.d(b, {}, {
            a: l,
            b: function(a, b) {
                let {
                    reference: c,
                    turnContext: d
                } = a;
                if (null != l(c)) return {
                    preferred: [],
                    additional: []
                };
                let g = null == c ? -1 : d.contentReferences.indexOf(c),
                    k = null == c ? null : (0, j.a)(c, d, g),
                    n = null == c ? [] : (0, f.v)(c, k),
                    o = k?.widget_type === "map_widget_v2" || k?.widget_type === "map_widget_v3" ? (0, j.b)(d, g, a.isComplete) : void 0,
                    p = o || c?.type === "map" && !0 === c.reset_flag,
                    q = b.fastPathEnabled && !p,
                    r = null == c ? [] : (0, i.a)(c),
                    s = new Map;
                if (null != c)
                    for (let a of (0, i.f)(c, k))
                        for (let b of (0, i.e)(n, a)) {
                            let a = (0, i.d)(b),
                                c = b.notes;
                            "string" == typeof c && c.trim() && !s.has(a) && s.set(a, c)
                        }
                let t = [];
                if (q)
                    for (let a of d.contentReferences) {
                        let b = a === c ? r : (0, i.a)(a);
                        if (b.length > 0) {
                            t = b;
                            break
                        }
                    }
                let u = d.contentReferences.flatMap((b, e) => {
                        let g = d.contentReferenceMessageIds?.[e];
                        if (a.isFullscreenReply && null == c || "entity" !== b.type || null != g && g !== d.messageId || "string" != typeof b.category || !(0, h.i)(b.category)) return [];
                        let i = h.b.safeParse(b.entity_data);
                        return i.success ? (0, f.v)({
                            type: "map",
                            entities: [{
                                entity: i.data,
                                category: b.category,
                                extra_params: b.extra_params,
                                notes: b.notes
                            }]
                        }) : []
                    }),
                    v = new Map([...t, ...r, ...e()(n, i.b)].map(a => [(0, i.b)(a), a])),
                    w = new Set(n.map(i.b)),
                    x = new Map(u.map(a => [(0, i.b)(a), a])),
                    y = e()([...u.filter(a => !p && !w.has((0, i.b)(a))), ...n], i.d).map(a => {
                        let b = (0, i.b)(a),
                            c = x.get(b) ?? a,
                            d = "string" == typeof a.mapEntityId ? a : v.get(b);
                        return null == d || d === c ? a : {
                            ...d,
                            ...c,
                            latitude: c.latitude ?? d.latitude,
                            longitude: c.longitude ?? d.longitude,
                            mapEntityId: d.mapEntityId ?? c.mapEntityId,
                            mapIcon: d.mapIcon ?? c.mapIcon,
                            mapLabel: d.mapLabel ?? c.mapLabel,
                            mapCarouselCard: d.mapCarouselCard ?? c.mapCarouselCard,
                            notes: m(d) ? d.notes : c.notes,
                            extra_params: null == c.extra_params ? d.extra_params : {
                                ...d.extra_params,
                                ...c.extra_params
                            }
                        }
                    }),
                    z = new Set(y.map(i.b)),
                    A = e()([...r, ...t], i.b).filter(a => !z.has((0, i.b)(a)));
                return {
                    widgetOwnsPins: o,
                    preferred: y.map(a => {
                        let b = s.get((0, i.d)(a));
                        return m(a) || null == b ? a : {
                            ...a,
                            notes: b
                        }
                    }).sort((a, b) => Number(m(b)) - Number(m(a))),
                    additional: A.sort((a, b) => Number(m(b)) - Number(m(a)))
                }
            }
        })
    }),
    DUJs: (function(a, b, c) {
        var d = c("sqog");

        function e(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : !a.isStreaming,
                d = a.contentReferenceMessageStatuses?.[b];
            return null == d ? c : "finished_successfully" === d
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b?.contentReferences.indexOf(a) ?? -1,
                    f = b?.contentReferenceMessageIds?.[c] ?? b?.messageId,
                    g = b?.contentReferenceMessageIds == null ? c : b.contentReferenceMessageIds.slice(0, c).filter(a => a === f).length;
                return (0, d.a)(a, null == f || c < 0 || null == b ? void 0 : {
                    messageId: f,
                    referenceIndex: g,
                    widgets: b.dilViewState?.widgets,
                    preferResolvedData: e(b, c)
                })
            },
            b: e
        })
    }),
    YAi8: (function(a, b, c) {
        c.d(b, {
            a: () => ai
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("EA6X"),
            g = c("t4av"),
            h = c("ZDhX"),
            i = c("gIcl"),
            j = c("on57"),
            k = c("i5ac"),
            l = c.n(k),
            m = c("Q840"),
            n = c("rKAs"),
            o = c("sqog"),
            p = c("Wc42"),
            q = c("zd8w"),
            r = c("Wf1j"),
            s = c("oyxz"),
            t = c("PxnS"),
            u = c("Sm6l"),
            v = c("JNtf"),
            w = c("HOLv"),
            x = c("bf6R"),
            y = c("Bbed"),
            z = c("ibLK"),
            A = c("zSQm"),
            B = c("yGJW"),
            C = c("tSEg"),
            D = c("eGPX"),
            E = c("hZax"),
            F = c("KDax"),
            G = c("j8Yf"),
            H = c("dQRk"),
            I = c("TUMj"),
            J = c("Nhwt"),
            K = c("TJEh"),
            L = c("jFKl"),
            M = c("zPtR"),
            N = c("AuIy"),
            O = c("OWtl");
        let P = (0, m.u)(O.a, () => new Set);
        var Q = c("xhWJ"),
            R = c("tBe6"),
            S = c("D015"),
            T = c("Cslg"),
            U = c("WFY2"),
            V = c("Kwur"),
            W = c("xof2");
        let X = (0, m.j)(O.a, a => new Set),
            Y = (0, m.j)(O.a, a => {
                let b = new Set,
                    c = 0,
                    d = () => {
                        for (; c < 4 && b.size > 0;) {
                            let a = b.values().next().value;
                            if (null == a) return;
                            b.delete(a), c += 1, a().catch(a => {
                                U.a.warning("Failed to record map entity impression", {
                                    safe: {},
                                    sensitive: {
                                        error: a
                                    }
                                })
                            }).finally(() => {
                                c -= 1, d()
                            })
                        }
                    };
                return a => {
                    b.add(a), d()
                }
            });
        var Z = c("RgGw"),
            $ = c("ry7c"),
            _ = c("Xj7S"),
            aa = c("YTiF"),
            ab = c("j7sU"),
            ac = c("QPeR"),
            ad = c("DUJs"),
            ae = c("FCsE"),
            af = c("CVU2"),
            ag = c("u1WX");
        let ah = (0, y.a)(async () => (await Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(226913), c.e(753405), c.e(321957), c.e(585419), c.e(877700), c.e(843292), c.e(353230), c.e(81461), c.e(557325), c.e(212773), c.e(259288), c.e(962984), c.e(499790), c.e(301030), c.e(909395), c.e(543588), c.e(17983), c.e(167649), c.e(910298), c.e(16212), c.e(722053), c.e(736778), c.e(441359), c.e(595545), c.e(111045)]).then(c.bind(c, "kiov"))).ChatGptMapboxCanvas, {
            propagateLoadError: !0
        });

        function ai(a) {
            var b;
            let c = (0, e.c)(21),
                {
                    contentReferenceIndex: f,
                    enableFullscreen: g,
                    fullscreenMode: h,
                    showEmptyMap: i,
                    ignoreCoordinateOutliers: j,
                    fallbackCenter: k,
                    isStreaming: l,
                    onOpenStandalonePlace: m,
                    reference: n,
                    events: o
                } = a,
                p = void 0 === g || g,
                q = void 0 === h ? "conversation" : h,
                r = void 0 !== i && i,
                s = void 0 !== j && j;
            switch ("string" == typeof(b = n).type && b.type.length > 0 ? b.type : null) {
                case "map":
                case "businesses_map": {
                    let a;
                    return c[0] !== f || c[1] !== p || c[2] !== o || c[3] !== k || c[4] !== q || c[5] !== s || c[6] !== m || c[7] !== n || c[8] !== r ? (a = (0, d.jsx)(aj, {
                        contentReferenceIndex: f,
                        enableFullscreen: p,
                        fullscreenMode: q,
                        showEmptyMap: r,
                        ignoreCoordinateOutliers: s,
                        fallbackCenter: k,
                        onOpenStandalonePlace: m,
                        reference: n,
                        events: o
                    }), c[0] = f, c[1] = p, c[2] = o, c[3] = k, c[4] = q, c[5] = s, c[6] = m, c[7] = n, c[8] = r, c[9] = a) : a = c[9], a
                }
                case "client_defined_widget": {
                    let a;
                    return c[10] !== f || c[11] !== p || c[12] !== o || c[13] !== k || c[14] !== q || c[15] !== s || c[16] !== l || c[17] !== m || c[18] !== n || c[19] !== r ? (a = "map" === n.category ? (0, d.jsx)(aj, {
                        contentReferenceIndex: f,
                        enableFullscreen: p,
                        fullscreenMode: q,
                        showEmptyMap: r,
                        ignoreCoordinateOutliers: s,
                        fallbackCenter: k,
                        isStreaming: l,
                        onOpenStandalonePlace: m,
                        reference: n,
                        events: o
                    }) : null, c[10] = f, c[11] = p, c[12] = o, c[13] = k, c[14] = q, c[15] = s, c[16] = l, c[17] = m, c[18] = n, c[19] = r, c[20] = a) : a = c[20], a
                }
                default:
                    return null
            }
        }

        function aj(a) {
            var b, c;
            let k, y, O, U, ai, aj, an, ao, ap, aq, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, a$, a_, a0, a1, a2, a3, a4, a5 = (0, e.c)(194),
                {
                    contentReferenceIndex: a6,
                    enableFullscreen: a7,
                    fullscreenMode: a8,
                    showEmptyMap: a9,
                    ignoreCoordinateOutliers: ba,
                    fallbackCenter: bb,
                    isStreaming: bc,
                    onOpenStandalonePlace: bd,
                    reference: be,
                    events: bf
                } = a,
                bg = (0, m.y)(C.a),
                bh = (0, q.useRef)(null),
                bi = (0, r.a)(),
                bj = (0, z.a)("(pointer: coarse)") && (0, i.d)();
            a5[0] !== bi ? (k = bi.formatMessage({
                id: "chatgpt.contentReferences.map.expand",
                defaultMessage: "Expand map"
            }), a5[0] = bi, a5[1] = k) : k = a5[1];
            let bk = k,
                bl = (0, I.e)(),
                bm = "dialog" === a8 && null == bl,
                bn = bm && null != bd,
                bo = (0, q.useRef)(null),
                [bp, bq] = (0, q.useState)(!1),
                br = bl?.messageId,
                bs = bl?.contentReferenceMessageIds?.[a6];
            a5[2] !== br || a5[3] !== bs ? (y = {
                widgetType: "businesses_map",
                turnMessageId: br,
                sourceMessageId: bs
            }, a5[2] = br, a5[3] = bs, a5[4] = y) : y = a5[4];
            let bt = (0, m.x)(t.c, y),
                bu = bp ? bt : void 0,
                bv = (0, E.f)("3194776735"),
                bw = (0, m.z)(ac.a),
                bx = (0, q.useId)(),
                by = (0, q.useId)(),
                [bz, bA] = (0, q.useState)(!1),
                [bB, bC] = (0, q.useState)(!1);
            a5[5] !== be || a5[6] !== bl ? (O = null == bl ? "" : (0, aa.b)({
                reference: be,
                turnContext: bl
            }), a5[5] = be, a5[6] = bl, a5[7] = O) : O = a5[7];
            let bD = O;
            a5[8] !== bw || a5[9] !== bD ? (U = null != bw && (0, aa.b)(bw.source) === bD, a5[8] = bw, a5[9] = bD, a5[10] = U) : U = a5[10];
            let bE = U,
                bF = (0, m.x)(ac.b, bD),
                [bG, bH] = (0, q.useState)(null),
                [bI, bJ] = (0, q.useState)(!1),
                [bK, bL] = (0, q.useState)(0),
                [bM, bN] = (0, q.useState)(null),
                [bO, bP] = (0, q.useState)(null),
                [bQ, bR] = (0, q.useState)(null),
                [bS, bT] = (0, q.useState)(null),
                bU = (0, q.useRef)(bF),
                bV = (0, q.useRef)(null);
            a5[11] === Symbol.for("react.memo_cache_sentinel") ? (ai = () => () => bV.current?.abort(), aj = [], a5[11] = ai, a5[12] = aj) : (ai = a5[11], aj = a5[12]), (0, q.useEffect)(ai, aj), a5[13] !== bF ? (an = () => {
                bU.current = bF
            }, ao = [bF], a5[13] = bF, a5[14] = an, a5[15] = ao) : (an = a5[14], ao = a5[15]), (0, q.useLayoutEffect)(an, ao);
            let bW = async () => {
                if (bv && "dialog" === a8) return void bC(!0);
                if (!bv || null == bl || bE) return;
                bV.current?.abort();
                let a = new AbortController;
                bV.current = a;
                let b = !0;
                try {
                    await (0, ab.b)()
                } catch {
                    b = !1
                }
                if (a.signal.aborted) return;
                bT(null);
                let c = bl.contentReferenceMessageIds?.[a6] ?? bl.messageId,
                    d = null != b_ || 1 === b$.length;
                (0, $.a)({
                    triggerId: bx,
                    conversationId: bl.conversationId,
                    reducedMotion: !b || bg.get(D.c),
                    onSuperseded: () => a.abort(),
                    update: () => {
                        if (a.signal.aborted) return;
                        bV.current = null, bg.set(ac.a, {
                            source: {
                                reference: be,
                                turnContext: bl,
                                mapMessageId: c
                            },
                            view: bU.current,
                            triggerId: bx,
                            ...null == bQ ? {} : {
                                selectedPlace: bQ
                            },
                            ...null == b_ ? {} : {
                                selectedGroupKey: b_.key
                            },
                            ...d && null != bO ? {
                                selectedCardKey: bO
                            } : {}
                        });
                        let b = bg.get(H.j, bl.conversationId) ?? void 0;
                        (0, B.a)(bg, g.p, {
                            conversationId: b,
                            messageId: c,
                            entryPoint: "CHATGPT_PLACES_ENTRY_POINT_MAP_WIDGET"
                        })
                    }
                })
            };
            a5[16] !== a6 || a5[17] !== be || a5[18] !== bl ? (ap = (0, ad.a)(be, bl, a6), a5[16] = a6, a5[17] = be, a5[18] = bl, a5[19] = ap) : ap = a5[19];
            let bX = ap;
            a5[20] !== a6 || a5[21] !== bj || a5[22] !== bz || a5[23] !== be || a5[24] !== bg || a5[25] !== bG || a5[26] !== bl || a5[27] !== bX ? (aq = () => {
                if (! function(a, b, c, d) {
                        let e = (0, I.c)(b, c),
                            f = b?.contentReferenceMessageStatuses?.[c],
                            h = (0, N.s)(b?.contentReferences[c]?.data)?.widget_type;
                        if (null == b || null == e || "map_widget_v2" !== h && "map_widget_v3" !== h || null == d || 0 === d.points.length || (null == f ? b.isStreaming : "finished_successfully" !== f) || b.shouldBlockExternalEgress || !1 === b.trackShownImpressions || !1 === b.isPresented) return;
                        let i = `${e.messageId}:${e.index}`,
                            j = a.get(P);
                        if (j.has(i)) return;
                        a.set(P, new Set([...j, i]));
                        let k = d.groups?.length ? d.groups.map(a => a.route) : [d.route],
                            l = d.carousel?.known_fields,
                            m = null != l && ["rating", "hours", "category", "price"].some(a => !l.some(b => b === a)),
                            n = d.points.some((a, b) => {
                                let c = d.carousel?.cards?.[(0, o.d)(a, b)];
                                return null != c && Object.values(c).some(a => null != a)
                            });
                        (0, B.a)(a, g.a, {
                            messageId: e.messageId,
                            contentReferenceIndex: (0, M.b)(e.index),
                            hasRoute: k.some(a => null != a),
                            hasCustomIcons: d.points.some(a => !!a.icon?.trim()),
                            hasCarouselEdits: m || n,
                            carouselHidden: d.carousel?.visibility === "hidden"
                        })
                    }(bg, bl, a6, bX), bX?.widget_type === "event_sidebar_map_widget" && (bj || bX.points[0]?.address && !bz)) return;
                let a = (0, Z.f)(be, bX).find(a => a.key === bG),
                    b = new Set((0, Z.e)((0, n.v)(be, bX), a).map(al));
                ! function(a, b, c, d) {
                    let e = (0, I.c)(b, c),
                        g = b?.contentReferences[c];
                    if (null == b || null == e || !e.messageId || e.messageId.startsWith("WEB:") || g?.type !== "client_defined_widget" || "map" !== g.category || null == d || b.shouldBlockExternalEgress || !1 === b.trackShownImpressions || !1 === b.isPresented) return;
                    let h = a.get(H.j, b.conversationId) ?? void 0,
                        i = b.messageId ?? e.messageId,
                        j = "number" == typeof g?.start_idx ? (0, S.a)(g.start_idx) : void 0,
                        k = a.get(X, JSON.stringify([b.conversationId, e.messageId, e.index])),
                        l = [];
                    for (let a of d.points) {
                        let b = (0, p.a)(a.entity?.entity_key) ?? (0, p.a)(a.extra_params?.entity_key);
                        if (null == a.entity || null == b && null == (0, p.a)(a.entity.provider) && null == (0, p.a)(a.extra_params?.business_id)) continue;
                        let c = (0, p.a)(a.entity.entity_lookup_id) ?? (0, p.a)(a.extra_params?.entity_lookup_id) ?? b ?? (0, p.a)(a.extra_params?.business_id);
                        null != c && (k.has(c) || (k.add(c), l.push({
                            entityId: c,
                            entityKey: b ?? void 0
                        })))
                    }
                    if (0 === l.length) return;
                    let m = (0, W.a)(a, b.conversationId, i),
                        n = a.get(T.f),
                        o = a.get(T.k),
                        q = a.get(Y, void 0);
                    for (let {
                            entityId: c,
                            entityKey: d
                        }
                        of l) {
                        let k = {
                            conversationId: b.conversationId,
                            messageId: e.messageId,
                            assistantMessageId: i,
                            contentReferenceStartIndex: j,
                            contentReferenceType: "entity",
                            entityId: c,
                            entityCategory: "local_business",
                            actionType: "CHATGPT_ENGAGEMENT_ACTION_TYPE_SHOWN",
                            surfaceLocation: f.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE,
                            entityAffordance: f.d.CHATGPT_ENTITY_AFFORDANCE_MAP_MARKER,
                            parentContext: {
                                widgetType: "map",
                                widgetName: (0, p.a)((0, N.s)(g.data)?.widget_type) ?? void 0
                            },
                            isGenui: !0
                        };
                        (0, W.b)(a, k), a.get(B.c).isChatgptBrowserReplacement && (0, B.a)(a, R.d, {
                            eventType: "CHATGPT_CONTENT_REFERENCE_EVENT_TYPE_ENTITY_ANCHOR_SHOWN",
                            conversationId: h,
                            messageId: e.messageId,
                            contentReferenceType: "entity",
                            category: "local_business",
                            businessId: c,
                            widgetName: k.parentContext.widgetName
                        }), q(async () => {
                            n === a.get(T.f) && o === a.get(T.k) && await V.Request.safePost("/unified_user_signals", {
                                requestBody: {
                                    signal_type: "entity_shown",
                                    product_surface: "CHAT",
                                    signal_metadata: {},
                                    user_metadata: {},
                                    signal_detail: {
                                        common_metadata: {
                                            conversation_id: h,
                                            message_id: e.messageId
                                        },
                                        entity_shown: {
                                            entity_id: c,
                                            entity_key: d,
                                            entity_category: k.entityCategory,
                                            entity_affordance: k.entityAffordance,
                                            surface_location: k.surfaceLocation,
                                            content_reference_type: k.contentReferenceType,
                                            content_reference_index: e.index,
                                            content_reference_start_index: j,
                                            assistant_message_id: i,
                                            turn_ordinal: m
                                        }
                                    }
                                }
                            })
                        })
                    }
                }(bg, bl, a6, null == bX ? null : {
                    ...bX,
                    points: bX.points.filter((a, c) => b.has((0, o.d)(a, c)))
                })
            }, at = [bg, bl, a6, bX, be, bG, bj, bz], a5[20] = a6, a5[21] = bj, a5[22] = bz, a5[23] = be, a5[24] = bg, a5[25] = bG, a5[26] = bl, a5[27] = bX, a5[28] = aq, a5[29] = at) : (aq = a5[28], at = a5[29]), (0, q.useEffect)(aq, at);
            let bY = bB || bX?.fill;
            if (bj && bX?.widget_type === "event_sidebar_map_widget") return null;
            let bZ = bX?.widget_type === "event_sidebar_map_widget" ? bX.points[0] : void 0,
                b$ = (0, Z.f)(be, bX);
            a5[30] !== bG ? (au = a => a.key === bG, a5[30] = bG, a5[31] = au) : au = a5[31];
            let b_ = b$.find(au),
                b0 = null == b_ ? b$ : [b_],
                b1 = (0, n.v)(be, bX),
                b2 = (0, Z.e)(b1, b_);
            a5[32] !== a6 || a5[33] !== be || a5[34] !== bl ? (av = null == bl || bl.isStreaming || bl.preciseLocationInfo?.requested !== !0 || "below_map" !== bl.preciseLocationInfo.footer_location || "map" !== be.type || (bl.contentReferenceMessageIds?.[a6] ?? bl.messageId) !== bl.preciseLocationMessageId || bl.contentReferences.findIndex((a, b) => "map" === a.type && (bl.contentReferenceMessageIds?.[b] ?? bl.messageId) === bl.preciseLocationMessageId) !== a6 ? null : (0, d.jsx)(J.a, {
                conversationId: bl.conversationId,
                isTemporaryChat: bl.isTemporaryChat ?? !1,
                isReadOnly: !0 === bl.isReadOnly || !0 === bl.shouldBlockExternalEgress || !0 !== bl.isLatestActorMessage,
                messageId: bl.preciseLocationMessageId,
                preciseLocationInfo: bl.preciseLocationInfo,
                trackImpression: !1 !== bl.trackShownImpressions && !1 !== bl.isPresented
            }, bl.preciseLocationMessageId), a5[32] = a6, a5[33] = be, a5[34] = bl, a5[35] = av) : av = a5[35];
            let b3 = av;
            if (!a9 && 0 === b2.length && null == bX) {
                let a, b;
                return a5[36] !== be ? (a = (0, d.jsx)(G.c, {
                    reference: be
                }), a5[36] = be, a5[37] = a) : a = a5[37], a5[38] !== b3 || a5[39] !== a ? (b = (0, d.jsxs)(d.Fragment, {
                    children: [a, b3]
                }), a5[38] = b3, a5[39] = a, a5[40] = b) : b = a5[40], b
            }
            let b4 = !(void 0 !== bc && bc) && bX?.carousel?.visibility !== "hidden";
            a5[41] !== be || a5[42] !== b4 || a5[43] !== bX?.min_height ? (aw = (0, o.c)(be) ?? Math.max((b = be, c = b4, ar(b) ? 300 + 144 * !!c : 400), bX?.min_height ?? 0), a5[41] = be, a5[42] = b4, a5[43] = bX?.min_height, a5[44] = aw) : aw = a5[44];
            let b5 = aw,
                b6 = l()(b2.filter(as), Z.d);
            if (!a9 && 0 === b6.length && null == bX || bl?.shouldBlockExternalEgress === !0) return (0, d.jsxs)("div", {
                className: "my-3",
                children: [(0, d.jsx)(am, {
                    places: b2
                }), b3]
            });
            a5[45] !== bn || a5[46] !== a6 || a5[47] !== bB || a5[48] !== bd || a5[49] !== be || a5[50] !== bg || a5[51] !== bl ? (ax = (a, b, c) => {
                null != bl && ((0, Q.b)(bg, {
                    reference: be,
                    turnContext: bl,
                    mapMessageId: bl.contentReferenceMessageIds?.[a6] ?? bl.messageId
                }, a, b, f.b.CHATGPT_ENGAGEMENT_SURFACE_LOCATION_RESPONSE), "marker" === b && (0, B.a)(bg, g.d, {
                    conversationId: bg.get(H.j, bl.conversationId) ?? void 0,
                    messageId: bl.contentReferenceMessageIds?.[a6] ?? bl.messageId,
                    entityId: (0, Q.a)(a),
                    source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_MARKER"
                })), bN((0, Z.d)(a)), bP(c ?? null), bR(a), bn && (bB ? (bo.current = a, bC(!1)) : bd(a))
            }, a5[45] = bn, a5[46] = a6, a5[47] = bB, a5[48] = bd, a5[49] = be, a5[50] = bg, a5[51] = bl, a5[52] = ax) : ax = a5[52];
            let b7 = ax;
            a5[53] !== bf || a5[54] !== b7 ? (ay = (a, b) => {
                bf?.onCardClick?.(), b7(a, "list", b)
            }, a5[53] = bf, a5[54] = b7, a5[55] = ay) : ay = a5[55];
            let b8 = ay,
                b9 = bM ?? (bZ?.address && 1 === b6.length ? (0, Z.d)(b6[0]) : null),
                ca = bl?.conversationId,
                cb = null == b_ ? (0, Z.c)(b6, b1.find(a => (0, Z.d)(a) === bS)) : bS,
                cc = a9 ? bb : void 0,
                cd = a9 && 0 === b6.length ? null == bb ? 1 : 10 : void 0,
                ce = bl?.contentReferenceMessageIds?.[a6] ?? bl?.messageId;
            a5[56] !== bf ? (az = a => {
                bq(a), a && bf?.onReady?.()
            }, a5[56] = bf, a5[57] = az) : az = a5[57];
            let cf = () => {
                bf?.onMapClick?.(), a7 && bW()
            };
            a5[58] !== bf || a5[59] !== b7 ? (aA = a => {
                bf?.onPinClick?.(), b7(a, "marker")
            }, a5[58] = bf, a5[59] = b7, a5[60] = aA) : aA = a5[60];
            let cg = null == b_ ? (0, Z.c)(b6, b1.find(a => (0, Z.d)(a) === b9)) : b9;
            a5[61] !== b4 ? (aB = b4 ? void 0 : {
                bottom: 20
            }, a5[61] = b4, a5[62] = aB) : aB = a5[62], a5[63] !== ah || a5[64] !== bn || a5[65] !== a6 || a5[66] !== b0 || a5[67] !== ba || a5[68] !== bB || a5[69] !== b6 || a5[70] !== bK || a5[71] !== ca || a5[72] !== cb || a5[73] !== cc || a5[74] !== cd || a5[75] !== ce || a5[76] !== az || a5[77] !== cf || a5[78] !== aA || a5[79] !== cg || a5[80] !== aB ? (aC = (0, d.jsx)(ah, {
                contentReferenceIndex: a6,
                conversationId: ca,
                hoveredBusinessKey: cb,
                isFullscreen: bB,
                ignoreCoordinateOutliers: ba,
                fallbackCenter: cc,
                initialZoom: cd,
                messageId: ce,
                onReadyChange: az,
                onUserMovementChange: bJ,
                onExpand: cf,
                onOpenEntity: aA,
                places: b6,
                resetViewKey: bK,
                routeGroups: b0,
                selectedBusinessKey: cg,
                standalone: bn,
                viewRef: bU,
                viewportPadding: aB
            }), a5[63] = ah, a5[64] = bn, a5[65] = a6, a5[66] = b0, a5[67] = ba, a5[68] = bB, a5[69] = b6, a5[70] = bK, a5[71] = ca, a5[72] = cb, a5[73] = cc, a5[74] = cd, a5[75] = ce, a5[76] = az, a5[77] = cf, a5[78] = aA, a5[79] = cg, a5[80] = aB, a5[81] = aC) : aC = a5[81];
            let ch = aC,
                ci = bY && "flex h-full min-h-0 flex-col";
            a5[82] !== ci ? (aD = (0, j.b)(af.a.widget, "not-prose w-full", ci), a5[82] = ci, a5[83] = aD) : aD = a5[83], a5[84] !== bg || a5[85] !== bu ? (aE = a => (0, t.a)(bg, bu, a, bh), a5[84] = bg, a5[85] = bu, a5[86] = aE) : aE = a5[86], a5[87] !== bY || a5[88] !== be ? (aF = (0, j.b)(ar(be) && "pb-2", bY && "min-h-0 flex-1"), a5[87] = bY, a5[88] = be, a5[89] = aF) : aF = a5[89];
            let cj = bY && "h-full";
            a5[90] !== cj ? (aG = (0, j.b)("relative isolate overflow-hidden motion-safe:transition-[max-height,opacity] motion-safe:duration-relaxed motion-safe:ease-out", af.a.frame, cj), a5[90] = cj, a5[91] = aG) : aG = a5[91], a5[92] !== bY || a5[93] !== b5 ? (aH = bY ? void 0 : {
                maxHeight: b5
            }, a5[92] = bY, a5[93] = b5, a5[94] = aH) : aH = a5[94];
            let ck = bY && "h-full";
            a5[95] !== ck ? (aI = (0, j.b)(af.a.frame, "bg-surface-secondary", ck), a5[95] = ck, a5[96] = aI) : aI = a5[96], a5[97] !== bY || a5[98] !== b5 ? (aJ = bY ? void 0 : {
                height: b5
            }, a5[97] = bY, a5[98] = b5, a5[99] = aJ) : aJ = a5[99], a5[100] === Symbol.for("react.memo_cache_sentinel") ? (aK = (0, j.b)(af.a.frame, af.a.viewport, "relative isolate h-full overflow-hidden"), a5[100] = aK) : aK = a5[100];
            let cl = bE ? null : ch;
            a5[101] !== b0 || a5[102] !== bE || a5[103] !== b$ || a5[104] !== bg || a5[105] !== b_ || a5[106] !== bt || a5[107] !== bI || a5[108] !== bX?.groups_title ? (aL = !bE && (0, d.jsxs)("div", {
                className: "absolute start-3 top-3 z-20 flex items-center gap-2",
                children: [(0, d.jsx)(_.b, {
                    groups: b$,
                    groupsTitle: bX?.groups_title,
                    selectedGroupKey: b_?.key ?? null,
                    onSelectGroup: a => {
                        bH(a), bJ(!1), bN(null), bP(null), bR(null), bT(null)
                    }
                }), 1 === b0.length && (0, d.jsx)(_.d, {
                    route: b0[0].route
                }), bI && (0, d.jsx)(_.c, {
                    onClick: () => {
                        bN(null), bT(null), bJ(!1), (0, t.b)(bg, bt, "reset_view"), bL(ak)
                    }
                })]
            }), a5[101] = b0, a5[102] = bE, a5[103] = b$, a5[104] = bg, a5[105] = b_, a5[106] = bt, a5[107] = bI, a5[108] = bX?.groups_title, a5[109] = aL) : aL = a5[109], a5[110] === Symbol.for("react.memo_cache_sentinel") ? (aM = (0, d.jsx)("div", {
                className: (0, j.b)(af.a.frame, "pointer-events-none absolute inset-0 z-2 ring-1 ring-border/50 ring-inset")
            }), a5[110] = aM) : aM = a5[110], a5[111] !== bn || a5[112] !== a6 || a5[113] !== b0 || a5[114] !== bf?.onCardsShown || a5[115] !== b8 || a5[116] !== bB || a5[117] !== bE || a5[118] !== b2 || a5[119] !== bM || a5[120] !== bO || a5[121] !== b4 || a5[122] !== bm ? (aN = !bE && (0, d.jsxs)("div", {
                className: "pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col",
                children: [(0, d.jsx)(L.a, {
                    isFullscreen: !1,
                    openTarget: bB ? "external-browser" : void 0
                }), b4 && (0, d.jsx)(ae.a, {
                    contentReferenceIndex: a6,
                    isFullscreen: !1,
                    onHoverBusiness: bT,
                    onPlacesShown: bf?.onCardsShown,
                    onOpenEntity: bm && !bn ? void 0 : b8,
                    places: b2,
                    selectedBusinessKey: bM,
                    selectedCardKey: bO,
                    standalone: bm,
                    route: 1 === b0.length ? b0[0].route : null
                })]
            }), a5[111] = bn, a5[112] = a6, a5[113] = b0, a5[114] = bf?.onCardsShown, a5[115] = b8, a5[116] = bB, a5[117] = bE, a5[118] = b2, a5[119] = bM, a5[120] = bO, a5[121] = b4, a5[122] = bm, a5[123] = aN) : aN = a5[123], a5[124] !== a7 || a5[125] !== bk || a5[126] !== bW || a5[127] !== bB || a5[128] !== bv || a5[129] !== bx ? (aO = bv && a7 && !bB && (0, d.jsx)("div", {
                className: "absolute end-3 top-3 z-20",
                children: (0, d.jsx)(h.a, {
                    content: bk,
                    children: (0, d.jsx)(u.a, {
                        id: bx,
                        "aria-label": bk,
                        color: "mapSurface",
                        radius: "full",
                        size: "inputIcon",
                        onClick: () => void bW(),
                        children: (0, d.jsx)(x.P, {})
                    })
                })
            }), a5[124] = a7, a5[125] = bk, a5[126] = bW, a5[127] = bB, a5[128] = bv, a5[129] = bx, a5[130] = aO) : aO = a5[130], a5[131] !== cl || a5[132] !== aL || a5[133] !== aN || a5[134] !== aO ? (aP = (0, d.jsxs)("div", {
                className: aK,
                children: [cl, aL, aM, aN, aO]
            }), a5[131] = cl, a5[132] = aL, a5[133] = aN, a5[134] = aO, a5[135] = aP) : aP = a5[135], a5[136] !== aI || a5[137] !== aJ || a5[138] !== aP ? (aQ = (0, d.jsx)("div", {
                className: aI,
                style: aJ,
                children: aP
            }), a5[136] = aI, a5[137] = aJ, a5[138] = aP, a5[139] = aQ) : aQ = a5[139], a5[140] !== aG || a5[141] !== aH || a5[142] !== aQ ? (aR = (0, d.jsx)("div", {
                className: aG,
                style: aH,
                children: aQ
            }), a5[140] = aG, a5[141] = aH, a5[142] = aQ, a5[143] = aR) : aR = a5[143], a5[144] !== aF || a5[145] !== aR ? (aS = (0, d.jsx)("div", {
                className: aF,
                children: aR
            }), a5[144] = aF, a5[145] = aR, a5[146] = aS) : aS = a5[146], a5[147] !== b3 || a5[148] !== aD || a5[149] !== aE || a5[150] !== aS || a5[151] !== bx ? (aT = (0, d.jsxs)("div", {
                className: aD,
                ref: aE,
                "data-testid": "businesses-map-widget",
                "data-immersive-map-inline": bx,
                children: [aS, b3]
            }), a5[147] = b3, a5[148] = aD, a5[149] = aE, a5[150] = aS, a5[151] = bx, a5[152] = aT) : aT = a5[152];
            let cm = aT;
            if (bB) {
                let a, b, c;
                return a5[153] !== bd || a5[154] !== bx ? (a = {
                    "aria-describedby": void 0,
                    onCloseAutoFocus: a => {
                        let b = bo.current;
                        if (bo.current = null, null != b && null != bd) {
                            a.preventDefault(), bd(b);
                            return
                        }
                        let c = document.getElementById(bx);
                        null != c && (a.preventDefault(), c.focus({
                            preventScroll: !0
                        }))
                    }
                }, a5[153] = bd, a5[154] = bx, a5[155] = a) : a = a5[155], a5[156] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(v.f, {
                    className: "sr-only",
                    children: (0, d.jsx)(s.a, {
                        id: "chatgpt.contentReferences.map.title",
                        defaultMessage: "Map"
                    })
                }), a5[156] = b) : b = a5[156], a5[157] !== cm || a5[158] !== a ? (c = (0, d.jsxs)(v.a, {
                    contentClassName: "h-full w-full",
                    contentProps: a,
                    onOpenChange: bC,
                    open: !0,
                    unstyledContent: !0,
                    viewportSized: !0,
                    children: [b, cm]
                }), a5[157] = cm, a5[158] = a, a5[159] = c) : c = a5[159], c
            }
            if (!bZ?.address) return cm;
            a5[160] !== bZ.address || a5[161] !== bZ.name ? (aU = [bZ.name, bZ.address].filter(Boolean), a5[160] = bZ.address, a5[161] = bZ.name, a5[162] = aU) : aU = a5[162];
            let cn = aU.join(", ");
            a5[163] !== bZ ? (aV = (0, A.a)((0, K.e)(bZ) ?? "") || null, a5[163] = bZ, a5[164] = aV) : aV = a5[164];
            let co = aV;
            a5[165] === Symbol.for("react.memo_cache_sentinel") ? (aW = (0, d.jsx)("span", {
                className: "flex size-6 shrink-0 items-center justify-center",
                children: (0, d.jsx)(w.a, {
                    asset: ag.a
                })
            }), a5[165] = aW) : aW = a5[165], a5[166] !== co || a5[167] !== cn ? (aX = null == co ? cn : (0, d.jsx)(F.a, {
                className: "cursor-interaction hover:underline",
                href: co,
                initiator: "markdown_link_click",
                children: cn
            }), a5[166] = co, a5[167] = cn, a5[168] = aX) : aX = a5[168], a5[169] !== aX ? (aY = (0, d.jsx)("span", {
                className: "min-w-0 flex-1 text-sm font-medium break-words whitespace-normal select-text",
                children: aX
            }), a5[169] = aX, a5[170] = aY) : aY = a5[170], a5[171] !== bi ? (aZ = bi.formatMessage({
                id: "chatgpt.eventSidebar.toggleVenueMap",
                defaultMessage: "Toggle venue map"
            }), a5[171] = bi, a5[172] = aZ) : aZ = a5[172], a5[173] !== bz ? (a$ = () => {
                bz && bV.current?.abort(), bA(!bz)
            }, a5[173] = bz, a5[174] = a$) : a$ = a5[174];
            let cp = bz && "rotate-180";
            a5[175] !== cp ? (a_ = (0, j.b)("transition-transform", cp), a5[175] = cp, a5[176] = a_) : a_ = a5[176], a5[177] !== a_ ? (a0 = (0, d.jsx)(x.gc, {
                className: a_
            }), a5[177] = a_, a5[178] = a0) : a0 = a5[178], a5[179] !== bz || a5[180] !== aZ || a5[181] !== a$ || a5[182] !== a0 || a5[183] !== by ? (a1 = (0, d.jsx)(u.a, {
                "aria-controls": by,
                "aria-expanded": bz,
                "aria-label": aZ,
                color: "ghostSecondary",
                size: "icon",
                className: "shrink-0",
                onClick: a$,
                children: a0
            }), a5[179] = bz, a5[180] = aZ, a5[181] = a$, a5[182] = a0, a5[183] = by, a5[184] = a1) : a1 = a5[184], a5[185] !== aY || a5[186] !== a1 ? (a2 = (0, d.jsxs)("div", {
                className: "flex min-h-11 items-center gap-4 py-2",
                children: [aW, aY, a1]
            }), a5[185] = aY, a5[186] = a1, a5[187] = a2) : a2 = a5[187];
            let cq = bz && cm;
            return a5[188] !== cq || a5[189] !== by ? (a3 = (0, d.jsx)("div", {
                id: by,
                children: cq
            }), a5[188] = cq, a5[189] = by, a5[190] = a3) : a3 = a5[190], a5[191] !== a2 || a5[192] !== a3 ? (a4 = (0, d.jsxs)("div", {
                className: "-mt-3 w-full min-w-0 border-t border-default pb-2",
                children: [a2, a3]
            }), a5[191] = a2, a5[192] = a3, a5[193] = a4) : a4 = a5[193], a4
        }

        function ak(a) {
            return a + 1
        }

        function al(a) {
            return a.mapEntityId
        }

        function am(a) {
            let b, c, f, g = (0, e.c)(5),
                {
                    places: h
                } = a;
            return g[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)("div", {
                className: "font-medium text-default",
                children: (0, d.jsx)(s.a, {
                    id: "chatgpt.contentReferences.localResults.title",
                    defaultMessage: "Local results"
                })
            }), g[0] = b) : b = g[0], g[1] !== h ? (c = h.slice(0, 5).map(an), g[1] = h, g[2] = c) : c = g[2], g[3] !== c ? (f = (0, d.jsxs)("div", {
                className: "rounded-lg border border-subtle bg-surface-secondary/92 px-3 py-2 text-sm text-default",
                "data-testid": "chatgpt-content-reference-card",
                children: [b, (0, d.jsx)("div", {
                    className: "mt-3 flex flex-col gap-2",
                    children: c
                })]
            }), g[3] = c, g[4] = f) : f = g[4], f
        }

        function an(a, b) {
            return (0, d.jsx)(ao, {
                place: a
            }, `${a.name}-${String(b)}`)
        }

        function ao(a) {
            var b, c, f, g;
            let h, i, j, k, l, m, n, o, q, s, t, u, v, w = (0, e.c)(28),
                {
                    place: x
                } = a;
            w[0] !== x ? (b = x, j = null == (h = (0, p.a)(b.provider_url) ?? (0, p.a)(b.website_url)) ? null : (0, A.a)(h) ?? null, w[0] = x, w[1] = j) : j = w[1];
            let y = j,
                z = (0, r.a)();
            w[2] !== z || w[3] !== x ? (c = x, f = z, k = null == c.rating ? null : null == c.review_count ? f.formatNumber(c.rating, {
                maximumFractionDigits: 1,
                minimumFractionDigits: 1
            }) : `${f.formatNumber(c.rating,{maximumFractionDigits:1,minimumFractionDigits:1})} (${f.formatNumber(c.review_count)})`, w[2] = z, w[3] = x, w[4] = k) : k = w[4];
            let B = k;
            w[5] !== x.address ? (l = (0, p.a)(x.address), w[5] = x.address, w[6] = l) : l = w[6], w[7] !== x.price_str ? (m = (0, p.a)(x.price_str), w[7] = x.price_str, w[8] = m) : m = w[8], w[9] !== B || w[10] !== l || w[11] !== m ? (n = [l, B, m].filter(aq), w[9] = B, w[10] = l, w[11] = m, w[12] = n) : n = w[12];
            let C = n;
            w[13] !== x ? (g = x, o = null == (i = g.categories?.map(p.a).filter(a => null != a)) || 0 === i.length ? null : i.join(", "), w[13] = x, w[14] = o) : o = w[14];
            let D = o;
            return w[15] !== y || w[16] !== x.name ? (q = null == y ? x.name : (0, d.jsx)(L.b, {
                href: y,
                children: x.name
            }), w[15] = y, w[16] = x.name, w[17] = q) : q = w[17], w[18] !== q ? (s = (0, d.jsx)("div", {
                className: "font-medium text-default",
                children: q
            }), w[18] = q, w[19] = s) : s = w[19], w[20] !== C ? (t = 0 === C.length ? null : (0, d.jsx)("div", {
                className: "mt-1 flex flex-wrap gap-x-1 text-secondary",
                children: C.map(ap)
            }), w[20] = C, w[21] = t) : t = w[21], w[22] !== D ? (u = null == D ? null : (0, d.jsx)("div", {
                className: "mt-1 text-secondary",
                children: D
            }), w[22] = D, w[23] = u) : u = w[23], w[24] !== u || w[25] !== s || w[26] !== t ? (v = (0, d.jsxs)("div", {
                className: "rounded-md border border-subtle p-2",
                children: [s, t, u]
            }), w[24] = u, w[25] = s, w[26] = t, w[27] = v) : v = w[27], v
        }

        function ap(a, b) {
            return (0, d.jsxs)("span", {
                children: [0 === b ? null : (0, d.jsx)("span", {
                    "aria-hidden": !0,
                    children: "\xb7 "
                }), a]
            }, a)
        }

        function aq(a) {
            return null != a
        }

        function ar(a) {
            return "number" == typeof a.start_idx && a.start_idx < 4
        }

        function as(a) {
            return null != a.latitude && null != a.longitude
        }
    }),
    FCsE: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("t4av"),
            g = c("D015"),
            h = c("on57"),
            i = c("suct"),
            j = c("iodE"),
            k = c("IPUh"),
            l = c("Q840"),
            m = c("zd8w"),
            n = c("Wf1j"),
            o = c("oyxz"),
            p = c("X3K1"),
            q = c("T1PX"),
            r = c("yGJW"),
            s = c("OWtl");
        c("V8uZ");
        var t = c("HgLj"),
            u = c("dQRk"),
            v = c("TUMj"),
            w = c("b2ei"),
            x = c("xhWJ"),
            y = c("RgGw"),
            z = c("F0zR"),
            A = c("phAi"),
            B = c("GB0E");

        function C(a, b) {
            return (0, d.jsxs)("div", {
                className: (0, h.b)(B.a.card, "flex w-4/5 max-w-80 items-center gap-3 p-4 md:w-full md:max-w-none"),
                "aria-hidden": !0,
                children: [(0, d.jsx)(p.a, {
                    size: "thumbnail",
                    variant: "chatgpt"
                }), (0, d.jsx)(p.b, {
                    lines: 3,
                    variant: "chatgpt"
                })]
            }, `loading-${b}`)
        }

        function D(a) {
            let b, c, f, g, h, i, l, n, o, p = (0, e.c)(23);
            p[0] !== a ? ({
                onShown: b,
                place: c,
                ref: g,
                ...f
            } = a, p[0] = a, p[1] = b, p[2] = c, p[3] = f, p[4] = g) : (b = p[1], c = p[2], f = p[3], g = p[4]);
            let q = (0, j.a)(),
                r = (0, m.useRef)(null);
            p[5] !== b || p[6] !== c ? (h = a => {
                a.some(E) && b?.(c)
            }, p[5] = b, p[6] = c, p[7] = h) : h = p[7];
            let s = (0, m.useEffectEvent)(h),
                u = null != b;
            p[8] !== q || p[9] !== s || p[10] !== u ? (i = () => {
                if (!q || !u || null == r.current) return;
                let a = new IntersectionObserver(a => s(a), {
                    threshold: 0
                });
                return a.observe(r.current), () => a.disconnect()
            }, p[8] = q, p[9] = s, p[10] = u, p[11] = i) : i = p[11], p[12] !== q || p[13] !== c || p[14] !== u ? (l = [q, c, u], p[12] = q, p[13] = c, p[14] = u, p[15] = l) : l = p[15], (0, m.useEffect)(i, l), p[16] !== g ? (n = (0, t.a)(r, g), p[16] = g, p[17] = n) : n = p[17];
            let v = !q,
                w = !q || void 0;
            return p[18] !== f || p[19] !== n || p[20] !== v || p[21] !== w ? (o = (0, d.jsx)(k.a.div, {
                ...f,
                ref: n,
                inert: v,
                "aria-hidden": w
            }), p[18] = f, p[19] = n, p[20] = v, p[21] = w, p[22] = o) : o = p[22], o
        }

        function E(a) {
            return a.isIntersecting
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, p, t, E, F = (0, e.c)(21),
                    {
                        contentReferenceIndex: G,
                        isFullscreen: H,
                        isLoading: I,
                        onOpenEntity: J,
                        onHoverBusiness: K,
                        places: L,
                        onPlacesShown: M,
                        route: N,
                        selectedBusinessKey: O,
                        selectedCardKey: P,
                        standalone: Q
                    } = a,
                    R = void 0 !== I && I,
                    S = void 0 !== Q && Q,
                    T = (0, l.y)(s.a),
                    U = (0, n.a)(),
                    V = (0, v.e)(),
                    W = (0, q.a)(),
                    X = (0, m.useRef)(null),
                    Y = (0, y.g)(N, L.map(y.d));
                F[0] === Symbol.for("react.memo_cache_sentinel") ? (b = () => {
                    X.current?.scrollIntoView({
                        block: "nearest",
                        inline: "nearest"
                    })
                }, F[0] = b) : b = F[0], F[1] !== O || F[2] !== P ? (c = [O, P], F[1] = O, F[2] = P, F[3] = c) : c = F[3], (0, m.useEffect)(b, c);
                let Z = A.a;
                F[4] !== U ? (j = U.formatMessage({
                    id: "chatgpt.contentReferences.map.results",
                    defaultMessage: "Map places"
                }), F[4] = U, F[5] = j) : j = F[5];
                let $ = i.a,
                    _ = L.map((a, b) => {
                        let c = (0, y.d)(a),
                            e = (0, y.h)(L, b, Y),
                            i = N?.legs[e - 1],
                            j = null == N ? c : `${c}:${e}`,
                            k = null != P ? P === j : O === c && L.findIndex(a => (0, y.d)(a) === c) === b,
                            l = function(a) {
                                let {
                                    duration: b,
                                    index: c,
                                    route: e,
                                    total: f
                                } = a;
                                return null == e ? null : null != b ? (0, d.jsx)(o.a, {
                                    id: "chatgpt.places.route_stops.card.incoming_leg_duration",
                                    defaultMessage: "{routeMode, select, walking {Walk} cycling {Bike} transit {Transit} other {Drive}} ~{duration}",
                                    values: {
                                        routeMode: e.route_mode,
                                        duration: b
                                    }
                                }) : 0 === c ? (0, d.jsx)(o.a, {
                                    id: "chatgpt.places.route_stops.card.role.start",
                                    defaultMessage: "Start here"
                                }) : c === f - 1 ? (0, d.jsx)(o.a, {
                                    id: "chatgpt.places.route_stops.card.role.destination",
                                    defaultMessage: "Destination"
                                }) : (0, d.jsx)(o.a, {
                                    id: "chatgpt.places.route_stops.card.role.intermediate",
                                    defaultMessage: "Stop {stopNumber}",
                                    values: {
                                        stopNumber: c + 1
                                    }
                                })
                            }({
                                duration: (0, z.a)(U, i?.duration_seconds),
                                index: b,
                                route: N,
                                total: L.length
                            });
                        return (0, d.jsx)(D, {
                            ref: k ? X : void 0,
                            className: (0, h.b)(B.a.card, B.a.item, H ? "w-4/5 max-w-80 md:w-full md:max-w-none" : "w-80 max-w-full"),
                            onMouseEnter: () => K?.(c),
                            onMouseLeave: () => K?.(null),
                            onFocus: () => K?.(c, !1),
                            onBlur: () => K?.(null, !1),
                            role: "listitem",
                            place: a,
                            onShown: null == M ? void 0 : a => M([a]),
                            initial: !W && !!H && {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            exit: {
                                opacity: 0
                            },
                            transition: {
                                duration: .15 * !W
                            },
                            children: (0, d.jsx)(w.a, {
                                contentReferenceIndex: G,
                                isSelected: k,
                                mapContextLabel: l,
                                onOpenEntity: null == J ? void 0 : () => {
                                    if (!H && null != V) {
                                        let c = T.get(u.j, V.conversationId) ?? void 0;
                                        (0, r.a)(T, f.b, {
                                            conversationId: c,
                                            entityId: "string" == typeof a.id ? a.id : void 0,
                                            entityName: a.name,
                                            entityIndex: (0, g.a)(b)
                                        }), (0, r.a)(T, f.d, {
                                            conversationId: c,
                                            messageId: V.contentReferenceMessageIds?.[G] ?? V.messageId,
                                            entityId: (0, x.a)(a),
                                            source: "CHATGPT_PLACES_ENTITY_DETAILS_SOURCE_BUSINESS_LIST"
                                        })
                                    }
                                    J(a, j)
                                },
                                place: a,
                                presentation: "card",
                                standalone: S
                            })
                        }, j)
                    });
                return F[6] !== $ || F[7] !== _ ? (k = (0, d.jsx)($, {
                    initial: !1,
                    children: _
                }), F[6] = $, F[7] = _, F[8] = k) : k = F[8], F[9] !== R ? (p = R && (0, d.jsx)("div", {
                    className: "sr-only",
                    role: "status",
                    children: (0, d.jsx)(o.a, {
                        id: "chatgpt.map.loadingPlaces",
                        defaultMessage: "Searching for places\u2026"
                    })
                }), F[9] = R, F[10] = p) : p = F[10], F[11] !== R || F[12] !== L.length ? (t = R && Array.from({
                    length: 0 === L.length ? 4 : 2
                }, C), F[11] = R, F[12] = L.length, F[13] = t) : t = F[13], F[14] !== Z || F[15] !== H || F[16] !== p || F[17] !== t || F[18] !== j || F[19] !== k ? (E = (0, d.jsxs)(Z, {
                    as: "div",
                    isFullscreen: H,
                    label: j,
                    children: [k, p, t]
                }), F[14] = Z, F[15] = H, F[16] = p, F[17] = t, F[18] = j, F[19] = k, F[20] = E) : E = F[20], E
            }
        })
    }),
    phAi: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("GB0E");

        function i(a) {
            return a.preventDefault()
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l, m, n, o = (0, e.c)(13),
                    {
                        as: p,
                        ref: q,
                        children: r,
                        isFullscreen: s,
                        label: t
                    } = a,
                    u = (0, g.useRef)(null),
                    v = s && h.a.fullscreen;
                return o[0] !== v ? (b = (0, f.b)(h.a.results, v, "m-0 min-h-0 list-none"), o[0] = v, o[1] = b) : b = o[1], o[2] === Symbol.for("react.memo_cache_sentinel") ? (c = a => {
                    u.current?.didDrag && (a.preventDefault(), a.stopPropagation(), u.current = null)
                }, o[2] = c) : c = o[2], o[3] === Symbol.for("react.memo_cache_sentinel") ? (j = a => {
                    "mouse" === a.pointerType && 0 === a.button && a.currentTarget.scrollWidth > a.currentTarget.clientWidth && (u.current = {
                        pointerId: a.pointerId,
                        startX: a.clientX,
                        scrollLeft: a.currentTarget.scrollLeft,
                        didDrag: !1
                    })
                }, k = a => {
                    if (1 !== a.buttons) {
                        u.current = null;
                        return
                    }
                    let b = u.current;
                    if (null == b || b.pointerId !== a.pointerId) return;
                    let c = a.clientX - b.startX;
                    !b.didDrag && 4 > Math.abs(c) || (b.didDrag || (b.didDrag = !0, a.currentTarget.setPointerCapture(a.pointerId)), a.preventDefault(), a.currentTarget.scrollLeft = b.scrollLeft - c)
                }, l = a => {
                    let b = u.current;
                    null != b && b.pointerId === a.pointerId && (b.didDrag && a.currentTarget.releasePointerCapture(a.pointerId), b.pointerId = null)
                }, m = () => {
                    u.current = null
                }, o[3] = j, o[4] = k, o[5] = l, o[6] = m) : (j = o[3], k = o[4], l = o[5], m = o[6]), o[7] !== p || o[8] !== r || o[9] !== t || o[10] !== q || o[11] !== b ? (n = (0, d.jsx)(p, {
                    ref: q,
                    className: b,
                    "aria-label": t,
                    role: "list",
                    onClickCapture: c,
                    onDragStart: i,
                    onPointerDown: j,
                    onPointerMove: k,
                    onPointerUp: l,
                    onPointerCancel: m,
                    children: r
                }), o[7] = p, o[8] = r, o[9] = t, o[10] = q, o[11] = b, o[12] = n) : n = o[12], n
            }
        })
    }),
    Nhwt: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("r6FN"),
            g = c("Q840"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("bf6R"),
            k = c("yGJW"),
            l = c("OWtl"),
            m = c("udGC"),
            n = c("QaQr"),
            o = c("OX9U"),
            p = c("ITxD"),
            q = c("SZLI");
        let r = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_MESSAGE_FOOTER";
        c.d(b, {}, {
            a: function(a) {
                let b, c, s, t, u, v, w, x = (0, e.c)(23),
                    {
                        conversationId: y,
                        isTemporaryChat: z,
                        isReadOnly: A,
                        messageId: B,
                        preciseLocationInfo: C,
                        trackImpression: D
                    } = a,
                    E = (0, g.y)(l.a),
                    F = (0, g.z)(p.a),
                    G = (0, g.z)(o.a),
                    [H, I] = (0, h.useState)(!1),
                    J = C.location_used?.trim() ? C.location_used : null,
                    K = !A && !0 === C.requested && !0 !== C.location_is_precise && F.enabled && "granted" !== G;
                x[0] !== E ? (b = () => {
                    (0, k.a)(E, f.d, {
                        entryPoint: r
                    })
                }, x[0] = E, x[1] = b) : b = x[1];
                let L = (0, h.useEffectEvent)(b);
                return (x[2] !== L || x[3] !== K || x[4] !== D ? (c = () => {
                    K && D && L()
                }, x[2] = L, x[3] = K, x[4] = D, x[5] = c) : c = x[5], x[6] !== K || x[7] !== D ? (s = [K, D], x[6] = K, x[7] = D, x[8] = s) : s = x[8], (0, h.useEffect)(c, s), null != J || K) ? (x[9] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, d.jsx)(j.Hg, {}), x[9] = t) : t = x[9], x[10] !== J ? (u = null != J ? (0, d.jsx)("span", {
                    className: "min-w-0 truncate",
                    children: J
                }) : null, x[10] = J, x[11] = u) : u = x[11], x[12] !== y || x[13] !== z || x[14] !== J || x[15] !== B || x[16] !== H || x[17] !== E || x[18] !== K ? (v = K ? (0, d.jsxs)(d.Fragment, {
                    children: [null != J ? (0, d.jsx)("span", {
                        "aria-hidden": !0,
                        className: "before:content-['\xb7']"
                    }) : null, (0, d.jsx)("button", {
                        className: "shrink-0 cursor-interaction underline underline-offset-2 select-none disabled:cursor-default disabled:opacity-50",
                        disabled: H,
                        type: "button",
                        onClick: () => {
                            I(!0);
                            let a = E.get(m.f, y)?.banner_info;
                            a?.name === "precise-location-banner" && (0, m.g)(E, y, a), (0, q.a)(E, r, "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW").then(async a => {
                                a && null != B && await (0, n.a)(E, {
                                    conversationId: y,
                                    isTemporaryChat: z,
                                    messageId: B,
                                    entryPoint: r
                                })
                            }).finally(() => I(!1))
                        },
                        children: (0, d.jsx)(i.a, {
                            id: "chatgptConversations.preciseLocation.footer.button.enable",
                            defaultMessage: "Use precise location"
                        })
                    })]
                }) : null, x[12] = y, x[13] = z, x[14] = J, x[15] = B, x[16] = H, x[17] = E, x[18] = K, x[19] = v) : v = x[19], x[20] !== u || x[21] !== v ? (w = (0, d.jsxs)("div", {
                    className: "my-2 flex min-w-0 items-center gap-1.5 text-sm text-secondary",
                    "data-testid": "conversation-turn-location-footer",
                    children: [t, u, v]
                }), x[20] = u, x[21] = v, x[22] = w) : w = x[22], w) : null
            }
        })
    }),
    JQAz: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("x3pc"),
            g = c("gIcl"),
            h = c("on57"),
            i = c("zd8w"),
            j = c("Wf1j"),
            k = c("oyxz"),
            l = c("NkEl"),
            m = c("ZtSy"),
            n = c("KxMp"),
            o = c("qYIJ"),
            p = c("zSQm"),
            q = c("WAdu"),
            r = c("vYmP");

        function s(a) {
            return [a.label, a.title, a.url, a.snippet]
        }

        function t(a) {
            let b, c, f, g, h = (0, e.c)(16),
                {
                    children: i,
                    className: l,
                    currentIndex: m,
                    setCurrentIndex: n,
                    sourceCount: p
                } = a,
                q = (0, j.a)();
            h[0] !== n || h[1] !== p ? (b = a => {
                n(b => (b + a + p) % p)
            }, h[0] = n, h[1] = p, h[2] = b) : b = h[2];
            let r = b;
            return h[3] !== r || h[4] !== p ? (c = a => {
                p > 1 && ("ArrowLeft" === a.key || "ArrowRight" === a.key) && (a.preventDefault(), r("ArrowLeft" === a.key ? -1 : 1))
            }, h[3] = r, h[4] = p, h[5] = c) : c = h[5], h[6] !== m || h[7] !== q || h[8] !== r || h[9] !== p ? (f = p > 1 ? (0, d.jsxs)("div", {
                className: "flex h-9 items-center justify-between gap-1.5",
                children: [(0, d.jsxs)("div", {
                    className: "mx-1.5 flex gap-1 text-secondary",
                    children: [(0, d.jsx)("button", {
                        type: "button",
                        className: "h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": q.formatMessage({
                            id: "chatgpt.citation.hover.previousSource",
                            defaultMessage: "Previous source"
                        }),
                        onClick: () => r(-1),
                        children: (0, d.jsx)(o.a, {
                            className: "icon-sm m-auto"
                        })
                    }), (0, d.jsx)("button", {
                        type: "button",
                        className: "h-6 w-6 cursor-interaction rounded-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                        "aria-label": q.formatMessage({
                            id: "chatgpt.citation.hover.nextSource",
                            defaultMessage: "Next source"
                        }),
                        onClick: () => r(1),
                        children: (0, d.jsx)(o.a, {
                            className: "icon-sm m-auto rotate-180"
                        })
                    })]
                }), (0, d.jsx)("span", {
                    className: "mx-3.5 text-tertiary",
                    children: (0, d.jsx)(k.a, {
                        id: "chatgpt.citation.hover.sourcePosition",
                        defaultMessage: "{currentSourceNumber}/{sourceCount}",
                        values: {
                            currentSourceNumber: m + 1,
                            sourceCount: p
                        }
                    })
                })]
            }) : null, h[6] = m, h[7] = q, h[8] = r, h[9] = p, h[10] = f) : f = h[10], h[11] !== i || h[12] !== l || h[13] !== c || h[14] !== f ? (g = (0, d.jsxs)("div", {
                className: l,
                role: "presentation",
                onKeyDown: c,
                tabIndex: -1,
                children: [f, i]
            }), h[11] = i, h[12] = l, h[13] = c, h[14] = f, h[15] = g) : g = h[15], g
        }

        function u(a) {
            var b;
            let c, f, g, l, o, p, r, s, u, v, w = (0, e.c)(32),
                {
                    currentSourceIndex: x,
                    onClick: y,
                    setCurrentSourceIndex: z,
                    sources: A
                } = a,
                B = (0, j.a)(),
                C = (0, i.useContext)(q.a),
                D = A[x] ?? A[0];
            if (null == D) return null;
            w[0] !== B || w[1] !== D.pubDate ? (c = null == D.pubDate ? null : B.formatDate(1e3 * D.pubDate, {
                year: "numeric",
                month: "long",
                day: "numeric"
            }), w[0] = B, w[1] = D.pubDate, w[2] = c) : c = w[2];
            let E = c,
                F = A.length;
            w[3] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, h.b)("flex cursor-interaction flex-col gap-2 p-3 no-underline outline-none", "text-default focus-visible:ring-2 focus-visible:ring-ring"), w[3] = f) : f = w[3];
            let G = D.href,
                H = "restricted" === C;
            w[4] !== D ? (g = [null != (b = D).title && b.title !== b.label ? `${b.label}: ${b.title}` : b.label, b.url].join(", "), w[4] = D, w[5] = g) : g = w[5];
            let I = "restricted" !== C;
            return w[6] !== D.href || w[7] !== I ? (l = (0, d.jsx)(n.a, {
                href: D.href,
                className: "h-4 w-4 shrink-0 text-current",
                loadRemote: I
            }), w[6] = D.href, w[7] = I, w[8] = l) : l = w[8], w[9] !== D.label ? (o = (0, d.jsx)("span", {
                className: "truncate text-default",
                children: D.label
            }), w[9] = D.label, w[10] = o) : o = w[10], w[11] !== l || w[12] !== o ? (p = (0, d.jsxs)("span", {
                className: "flex min-w-0 items-center gap-1.5",
                children: [l, o]
            }), w[11] = l, w[12] = o, w[13] = p) : p = w[13], w[14] !== D.title ? (r = (0, d.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 font-medium break-words text-default",
                children: D.title
            }), w[14] = D.title, w[15] = r) : r = w[15], w[16] !== E || w[17] !== D.snippet ? (s = null != E || D.snippet ? (0, d.jsx)("span", {
                className: "line-clamp-2 text-sm leading-5 break-words text-secondary",
                children: null != E && D.snippet ? (0, d.jsx)(k.a, {
                    id: "chatgpt.citation.hover.publicationSummary",
                    defaultMessage: "{date} \u2014 {snippet}",
                    values: {
                        date: E,
                        snippet: D.snippet
                    }
                }) : E ?? D.snippet
            }) : null, w[16] = E, w[17] = D.snippet, w[18] = s) : s = w[18], w[19] !== y || w[20] !== D.href || w[21] !== p || w[22] !== r || w[23] !== s || w[24] !== H || w[25] !== g ? (u = (0, d.jsxs)(m.a, {
                className: f,
                href: G,
                initiator: "markdown_link_click",
                onClick: y,
                requiresConfirmation: H,
                "aria-label": g,
                children: [p, r, s]
            }), w[19] = y, w[20] = D.href, w[21] = p, w[22] = r, w[23] = s, w[24] = H, w[25] = g, w[26] = u) : u = w[26], w[27] !== x || w[28] !== z || w[29] !== A.length || w[30] !== u ? (v = (0, d.jsx)(t, {
                className: "flex w-full flex-col overflow-hidden text-start text-xs font-normal",
                currentIndex: x,
                setCurrentIndex: z,
                sourceCount: F,
                children: u
            }), w[27] = x, w[28] = z, w[29] = A.length, w[30] = u, w[31] = v) : v = w[31], v
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, k, m, o, t, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M = (0, e.c)(61),
                    {
                        attributes: N,
                        isTerminalInline: O,
                        onClick: P,
                        sources: Q
                    } = a,
                    R = (0, j.a)(),
                    S = (0, i.useContext)(q.a),
                    [T, U] = (0, i.useState)(0),
                    [V, W] = (0, i.useState)(!1);
                if (M[0] !== N.label || M[1] !== N.supporting_count || M[2] !== N.title || M[3] !== N.url || M[4] !== T || M[5] !== S || M[6] !== R || M[7] !== V || M[8] !== O || M[9] !== P || M[10] !== Q) {
                    z = Symbol.for("react.early_return_sentinel");
                    a: {
                        var X;
                        let a, e = "string" == typeof N.label && N.label.trim().length > 0 ? N.label.trim() : null,
                            i = "string" == typeof N.url && N.url.trim().length > 0 ? N.url.trim() : null,
                            j = "string" == typeof N.title && N.title.trim().length > 0 ? N.title.trim() : null,
                            q = function(a) {
                                if ("string" != typeof a) return 0;
                                let b = Number(a);
                                return Number.isInteger(b) && b > 0 ? b : 0
                            }(N.supporting_count);
                        if (null == e || null == i) {
                            z = null;
                            break a
                        }
                        let u = (0, p.a)(i);
                        if (null == u) {
                            z = null;
                            break a
                        }
                        let I = (k = function(a, b) {
                            let c = [];
                            for (let b of a) {
                                let a = (0, p.a)(b.url);
                                null != a && c.push({
                                    ...b,
                                    href: a
                                })
                            }
                            return c.length > 0 ? c : [b]
                        }(null == Q || 0 === Q.length ? [{
                            kind: "primary",
                            label: e,
                            title: j,
                            url: i
                        }] : Q, {
                            kind: "primary",
                            label: e,
                            title: j,
                            url: i,
                            href: u
                        }))[T] ?? k[0];
                        if (null == I) {
                            z = null;
                            break a
                        }
                        let J = V ? I : k[0];
                        if (null == J) {
                            z = null;
                            break a
                        }
                        let K = q > 0 ? R.formatMessage({
                            id: "chatgpt.citation.aria.additionalSources",
                            defaultMessage: "{supportingCount, plural, one {# additional source} other {# additional sources}}"
                        }, {
                            supportingCount: q
                        }) : null;h = function(a) {
                            let {
                                label: b,
                                supportingSourcesLabel: c,
                                title: d,
                                url: e
                            } = a, f = [null != d && d !== b ? `${b}: ${d}` : b, e];
                            return null != c && f.push(c), f.join(", ")
                        }({
                            label: J.label,
                            supportingSourcesLabel: K,
                            title: J.title,
                            url: J.url
                        }),
                        M[31] === Symbol.for("react.memo_cache_sentinel") ? (a = a => {
                            W(a), a || U(0)
                        }, M[31] = a) : a = M[31];
                        let L = a;c = f.a,
                        w = !0,
                        x = V,
                        y = L,
                        b = r.a,
                        m = f.a.Trigger,
                        A = a => {
                            if (null != a) return (0, l.b)(a, {
                                highlight: (0, g.e)() ? "block" : "auto",
                                text: [...k.flatMap(s), (0, g.e)() ? a.textContent : void 0].join(" ")
                            })
                        },
                        B = h,
                        C = J.href,
                        D = (0, d.jsx)(n.a, {
                            href: J.href,
                            className: "size-3 overflow-hidden rounded-full text-current [&>img]:rounded-full",
                            globeSize: 12,
                            loadRemote: "restricted" !== S
                        }),
                        E = V,
                        F = O,
                        G = J.label,
                        M[32] === Symbol.for("react.memo_cache_sentinel") ? (H = () => L(!1), M[32] = H) : H = M[32],
                        o = P,
                        t = "restricted" === S,
                        v = q > 0 ? (X = q, `+${X}`) : void 0
                    }
                    M[0] = N.label, M[1] = N.supporting_count, M[2] = N.title, M[3] = N.url, M[4] = T, M[5] = S, M[6] = R, M[7] = V, M[8] = O, M[9] = P, M[10] = Q, M[11] = b, M[12] = c, M[13] = h, M[14] = k, M[15] = m, M[16] = o, M[17] = t, M[18] = v, M[19] = w, M[20] = x, M[21] = y, M[22] = z, M[23] = A, M[24] = B, M[25] = C, M[26] = D, M[27] = E, M[28] = F, M[29] = G, M[30] = H
                } else b = M[11], c = M[12], h = M[13], k = M[14], m = M[15], o = M[16], t = M[17], v = M[18], w = M[19], x = M[20], y = M[21], z = M[22], A = M[23], B = M[24], C = M[25], D = M[26], E = M[27], F = M[28], G = M[29], H = M[30];
                return z !== Symbol.for("react.early_return_sentinel") ? z : (M[33] !== b || M[34] !== m || M[35] !== o || M[36] !== t || M[37] !== v || M[38] !== A || M[39] !== B || M[40] !== C || M[41] !== D || M[42] !== E || M[43] !== F || M[44] !== G || M[45] !== H ? (I = (0, d.jsx)(b, {
                    ActionWrapper: m,
                    ref: A,
                    ariaLabel: B,
                    href: C,
                    icon: D,
                    isActive: E,
                    isTerminalInline: F,
                    label: G,
                    onActivate: H,
                    onClick: o,
                    requiresConfirmation: t,
                    supportingCountLabel: v,
                    testId: "chatgpt-citation"
                }), M[33] = b, M[34] = m, M[35] = o, M[36] = t, M[37] = v, M[38] = A, M[39] = B, M[40] = C, M[41] = D, M[42] = E, M[43] = F, M[44] = G, M[45] = H, M[46] = I) : I = M[46], M[47] !== T || M[48] !== P || M[49] !== k ? (J = (0, d.jsx)(u, {
                    currentSourceIndex: T,
                    onClick: P,
                    setCurrentSourceIndex: U,
                    sources: k
                }), M[47] = T, M[48] = P, M[49] = k, M[50] = J) : J = M[50], M[51] !== h || M[52] !== J ? (K = (0, d.jsx)(f.a.Content, {
                    "aria-label": h,
                    align: "start",
                    alignOffset: 0,
                    side: "bottom",
                    sideOffset: 6,
                    width: 320,
                    minWidth: "auto",
                    children: J
                }), M[51] = h, M[52] = J, M[53] = K) : K = M[53], M[54] !== c || M[55] !== w || M[56] !== x || M[57] !== y || M[58] !== I || M[59] !== K ? (L = (0, d.jsxs)(c, {
                    showOnHover: w,
                    open: x,
                    onOpenChange: y,
                    children: [I, K]
                }), M[54] = c, M[55] = w, M[56] = x, M[57] = y, M[58] = I, M[59] = K, M[60] = L) : L = M[60], L)
            },
            b: t
        })
    })
};