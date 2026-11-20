export const __rspack_esm_ids = [499790];
export const __webpack_modules__ = {
    y0pT: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            l = t("ty1V"),
            i = t("on57");
        t.d(a, {}, {
            a: function(e) {
                let a, t, s, o, d, c, u, m = (0, r.c)(13);
                return m[0] !== e ? ({
                    className: t,
                    children: a,
                    ...s
                } = e, m[0] = e, m[1] = a, m[2] = t, m[3] = s) : (a = m[1], t = m[2], s = m[3]), m[4] !== t ? (o = (0, i.b)("relative min-h-0 overflow-hidden", t), m[4] = t, m[5] = o) : o = m[5], m[6] !== a || m[7] !== s ? (d = (0, n.jsx)(l.d, {
                    className: "size-full overscroll-contain",
                    tabIndex: 0,
                    ...s,
                    children: a
                }), m[6] = a, m[7] = s, m[8] = d) : d = m[8], m[9] === Symbol.for("react.memo_cache_sentinel") ? (c = (0, n.jsx)(l.b, {
                    className: "flex w-2 touch-none p-0.5 select-none",
                    orientation: "vertical",
                    children: (0, n.jsx)(l.c, {
                        className: "relative flex-1 rounded-full bg-token-scrollbar-slider-background hover:bg-token-scrollbar-slider-hover-background active:bg-token-scrollbar-slider-active-background"
                    })
                }), m[9] = c) : c = m[9], m[10] !== o || m[11] !== d ? (u = (0, n.jsxs)(l.a, {
                    className: o,
                    type: "hover",
                    children: [d, c]
                }), m[10] = o, m[11] = d, m[12] = u) : u = m[12], u
            }
        })
    }),
    BWrV: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            l = t("on57"),
            i = t("KUdL"),
            s = t.n(i),
            o = t("zd8w"),
            d = t("oyxz"),
            c = t("Sm6l"),
            u = t("HOLv"),
            m = t("GzOO"),
            p = t("MIZk"),
            f = t("ZAU2"),
            y = t("rQz3");

        function h(e, a) {
            let {
                key: t
            } = e;
            return [t, a]
        }

        function x(e) {
            let {
                item: a
            } = e;
            return a
        }
        t.d(a, {}, {
            a: function(e) {
                let a, t, i, v, g, b, w, j, k, N, C, z, S = (0, r.c)(80),
                    {
                        children: _,
                        empty: M,
                        getKey: L,
                        getNewItemPosition: A,
                        isLoadingMore: I,
                        items: P,
                        listAriaLabel: B,
                        listClassName: V,
                        onVisibleItemsChange: R,
                        onLoadMore: T,
                        paginationButtonClassName: E,
                        presentation: H,
                        preserveExpandedOrder: Z,
                        renderFooter: O,
                        renderPagination: W,
                        visibleItemIncrement: U,
                        visibleItemLimit: D
                    } = e,
                    Q = void 0 !== I && I,
                    F = void 0 === H ? "summary" : H,
                    q = void 0 !== Z && Z,
                    G = void 0 === D ? 6 : D,
                    {
                        analytics: K
                    } = (0, o.useContext)(f.a),
                    [X, Y] = (0, o.useState)(G),
                    [$, J] = (0, o.useState)(null);
                if (S[0] !== $ || S[1] !== L || S[2] !== A || S[3] !== P || S[4] !== q || S[5] !== X) {
                    if (a = P, q && null != $) {
                        let e, t;
                        S[7] !== L ? (e = (e, a) => ({
                            item: e,
                            key: L(e, a)
                        }), S[7] = L, S[8] = e) : e = S[8], S[9] !== $ || S[10] !== A ? (t = e => {
                            let {
                                item: a,
                                key: t
                            } = e;
                            return $.get(t) ?? (A?.(a) === "end" ? 1 / 0 : -1)
                        }, S[9] = $, S[10] = A, S[11] = t) : t = S[11];
                        let n = s()(P.map(e), t);
                        if (a = n.map(x), n.length !== $.size || n.some(e => {
                                let {
                                    key: a
                                } = e;
                                return !$.has(a)
                            })) {
                            let e;
                            J(new Map(n.map(h))), S[12] !== $ || S[13] !== X ? (e = e => {
                                let {
                                    key: a
                                } = e;
                                return ($.get(a) ?? 1 / 0) < X
                            }, S[12] = $, S[13] = X, S[14] = e) : e = S[14], Y(Math.max(X, n.findLastIndex(e) + 1))
                        }
                    }
                    S[0] = $, S[1] = L, S[2] = A, S[3] = P, S[4] = q, S[5] = X, S[6] = a
                } else a = S[6];
                S[15] !== a || S[16] !== X ? (t = a.slice(0, X), S[15] = a, S[16] = X, S[17] = t) : t = S[17];
                let ee = t;
                if (S[18] !== R || S[19] !== ee ? (i = () => {
                        R?.(ee)
                    }, v = [R, ee], S[18] = R, S[19] = ee, S[20] = i, S[21] = v) : (i = S[20], v = S[21]), (0, o.useEffect)(i, v), 0 === P.length && null == T) return M ?? null;
                let ea = P.length > G || null != T,
                    et = P.length - ee.length,
                    en = 0 === et && null == T,
                    er = U ?? 50,
                    el = null == T ? Math.min(et, er) : er;
                S[22] !== K || S[23] !== L || S[24] !== et || S[25] !== en || S[26] !== Q || S[27] !== P.length || S[28] !== T || S[29] !== a || S[30] !== q || S[31] !== er || S[32] !== G ? (g = () => {
                    !Q && ((0, f.b)(K, en ? "show_less" : "show_more"), q && J(en ? null : new Map(a.map((e, a) => [L(e, a), a]))), Y(e => en ? G : null == T ? Math.min(P.length, e + er) : e + er), et < er && T?.())
                }, S[22] = K, S[23] = L, S[24] = et, S[25] = en, S[26] = Q, S[27] = P.length, S[28] = T, S[29] = a, S[30] = q, S[31] = er, S[32] = G, S[33] = g) : g = S[33];
                let ei = g;
                S[34] !== _ || S[35] !== L || S[36] !== B || S[37] !== V || S[38] !== ee ? (b = null == B ? (0, n.jsx)(p.i, {
                    className: V,
                    children: ee.map((e, a) => (0, n.jsx)(o.Fragment, {
                        children: _(e, a)
                    }, L(e, a)))
                }) : (0, n.jsx)(p.i, {
                    "aria-label": B,
                    className: V,
                    role: "list",
                    children: ee.map((e, a) => (0, n.jsx)("div", {
                        role: "listitem",
                        children: _(e, a)
                    }, L(e, a)))
                }), S[34] = _, S[35] = L, S[36] = B, S[37] = V, S[38] = ee, S[39] = b) : b = S[39];
                let es = b;
                return S[40] !== O || S[41] !== ee ? (w = O?.(ee), S[40] = O, S[41] = ee, S[42] = w) : w = S[42], S[43] !== ea || S[44] !== en || S[45] !== Q || S[46] !== el || S[47] !== W || S[48] !== ei ? (j = ea && null != W ? W({
                    nextRevealCount: el,
                    isExpanded: en,
                    isLoadingMore: Q,
                    onToggle: ei
                }) : null, S[43] = ea, S[44] = en, S[45] = Q, S[46] = el, S[47] = W, S[48] = ei, S[49] = j) : j = S[49], S[50] !== ea || S[51] !== en || S[52] !== Q || S[53] !== F || S[54] !== W || S[55] !== ei ? (k = ea && null == W && "plain" === F ? (0, n.jsx)(m.b, {
                    children: (0, n.jsx)(m.a, {
                        alignment: "content",
                        disabled: Q,
                        onClick: ei,
                        children: en ? (0, n.jsx)(d.a, {
                            id: "sidebarElectron.showLess",
                            defaultMessage: "Show less"
                        }) : (0, n.jsx)(d.a, {
                            id: "sidebarElectron.showMore",
                            defaultMessage: "Show more"
                        })
                    })
                }) : null, S[50] = ea, S[51] = en, S[52] = Q, S[53] = F, S[54] = W, S[55] = ei, S[56] = k) : k = S[56], S[57] !== ea || S[58] !== en || S[59] !== Q || S[60] !== F || S[61] !== W || S[62] !== ei ? (N = ea && null == W && "card" === F ? (0, n.jsxs)(p.h, {
                    disabled: Q,
                    onClick: ei,
                    children: [(0, n.jsx)(p.k, {
                        variant: "custom",
                        children: (0, n.jsx)(u.a, {
                            asset: y.a
                        })
                    }), (0, n.jsx)(p.j, {
                        children: en ? (0, n.jsx)(d.a, {
                            id: "codex.summaryPanel.card.showLess",
                            defaultMessage: "Show less"
                        }) : (0, n.jsx)(d.a, {
                            id: "codex.summaryPanel.card.showMore",
                            defaultMessage: "Show more"
                        })
                    })]
                }) : null, S[57] = ea, S[58] = en, S[59] = Q, S[60] = F, S[61] = W, S[62] = ei, S[63] = N) : N = S[63], S[64] !== ea || S[65] !== en || S[66] !== Q || S[67] !== el || S[68] !== E || S[69] !== F || S[70] !== W || S[71] !== ei ? (C = ea && null == W && "summary" === F ? (0, n.jsx)(c.a, {
                    className: (0, l.b)("!px-0 !py-0 text-tertiary hover:text-secondary", E),
                    color: "ghostMuted",
                    size: "default",
                    disabled: Q,
                    onClick: ei,
                    children: en ? (0, n.jsx)(d.a, {
                        id: "codex.localConversation.summaryPanelExpandableList.showLess",
                        defaultMessage: "Show less"
                    }) : (0, n.jsx)(d.a, {
                        id: "codex.localConversation.summaryPanelExpandableList.showMore",
                        defaultMessage: "Show {count, number} more",
                        values: {
                            count: el
                        }
                    })
                }) : null, S[64] = ea, S[65] = en, S[66] = Q, S[67] = el, S[68] = E, S[69] = F, S[70] = W, S[71] = ei, S[72] = C) : C = S[72], S[73] !== es || S[74] !== w || S[75] !== j || S[76] !== k || S[77] !== N || S[78] !== C ? (z = (0, n.jsxs)(n.Fragment, {
                    children: [es, w, j, k, N, C]
                }), S[73] = es, S[74] = w, S[75] = j, S[76] = k, S[77] = N, S[78] = C, S[79] = z) : z = S[79], z
            }
        })
    }),
    MIZk: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            l = t("slpy"),
            i = t("on57"),
            s = t("zd8w"),
            o = t("oyxz"),
            d = t("Sm6l"),
            c = t("ZtSy"),
            u = t("bf6R"),
            m = t("yf2D");
        let p = "group group/summary-panel-item relative isolate flex min-h-token-button-composer group-data-[summary-panel-density=compact]/summary-panel:min-h-7 w-full min-w-0 items-center data-[multiline=true]:items-start gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 rounded-sm border-0 bg-transparent px-0 py-1 text-start group-data-[summary-panel-variant=dynamic-isle]/summary-panel:min-h-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row group-data-[variant=card]/summary-card:min-h-10 group-data-[variant=card]/summary-card:gap-3 group-data-[variant=card]/summary-card:rounded-none group-data-[variant=card]/summary-card:px-3 group-data-[variant=card]/summary-card:py-2 group-data-[variant=card]/summary-card:after:pointer-events-none group-data-[variant=card]/summary-card:after:absolute group-data-[variant=card]/summary-card:after:end-0 group-data-[variant=card]/summary-card:after:start-10 group-data-[variant=card]/summary-card:after:top-full group-data-[variant=card]/summary-card:after:h-px group-data-[variant=card]/summary-card:after:bg-border",
            f = "cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-secondary-ghost-hover group-data-[variant=card]/summary-card:before:inset-x-0 group-data-[variant=card]/summary-card:before:rounded-none",
            y = {
                background: f,
                foreground: "cursor-interaction hover:text-default"
            },
            h = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
            x = "icon-sm flex items-center justify-center browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&_svg]:size-full",
            v = {
                "conversation-summary": "text-text/40",
                critical: "text-chart-red",
                default: "text-default",
                muted: "text-secondary",
                tertiary: "text-tertiary"
            },
            g = {
                intrinsic: null,
                custom: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                glyph: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                preview: "icon-sm overflow-hidden rounded-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:[&>svg]:size-full",
                status: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                thumbnail: null
            },
            b = {
                intrinsic: null,
                custom: null,
                glyph: "icon-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&>*]:size-full [&_svg]:size-full",
                preview: null,
                status: "icon-xs [&>*]:size-full [&_svg]:size-full",
                thumbnail: "relative size-12 overflow-hidden rounded-xl bg-surface-secondary text-default"
            },
            w = {
                critical: "text-chart-red",
                default: "text-default",
                muted: "text-tertiary"
            },
            j = {
                "action-preview": "min-w-token-button-composer justify-end overflow-hidden text-sm group-focus-within/summary-panel-item:w-token-button-composer group-hover/summary-panel-item:w-token-button-composer group-has-[[aria-expanded=true]]/summary-panel-item:w-token-button-composer",
                icon: "icon-xs [&>*]:size-full [&_svg]:size-full",
                "section-status": "-me-1 w-5 justify-center empty:hidden group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=default]/summary-panel:me-0",
                text: "text-sm",
                thumbnail: "relative size-10 justify-center overflow-hidden rounded-xl bg-surface-secondary"
            };

        function k(e) {
            let a, t, l, s, o, d, c, u, m, p, f = (0, r.c)(22);
            f[0] !== e ? ({
                children: a,
                className: t,
                tone: s,
                truncate: o,
                variant: d,
                visibility: c,
                ...l
            } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = l, f[4] = s, f[5] = o, f[6] = d, f[7] = c) : (a = f[1], t = f[2], l = f[3], s = f[4], o = f[5], d = f[6], c = f[7]);
            let y = void 0 !== o && o,
                h = void 0 === d ? "text" : d,
                x = void 0 === c ? "always" : c,
                v = y ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
                g = w[void 0 === s ? "muted" : s],
                b = j[h],
                k = "interaction" === x && "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100",
                N = "rest" === x && "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0";
            return f[8] !== t || f[9] !== v || f[10] !== g || f[11] !== b || f[12] !== k || f[13] !== N ? (u = (0, i.b)("flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", v, g, b, k, N, t), f[8] = t, f[9] = v, f[10] = g, f[11] = b, f[12] = k, f[13] = N, f[14] = u) : u = f[14], f[15] !== a || f[16] !== y ? (m = y ? (0, n.jsx)("span", {
                className: "text-fade-truncate",
                children: a
            }) : a, f[15] = a, f[16] = y, f[17] = m) : m = f[17], f[18] !== l || f[19] !== u || f[20] !== m ? (p = (0, n.jsx)("span", {
                ...l,
                className: u,
                "data-slot": "thread-summary-panel-item-meta",
                children: m
            }), f[18] = l, f[19] = u, f[20] = m, f[21] = p) : p = f[21], p
        }

        function N(e) {
            let a, t, s, o, c, u, m, p, f, y, v, g, b = (0, r.c)(24);
            b[0] !== e ? ({
                children: a,
                className: t,
                color: m,
                disableTooltip: s,
                label: o,
                shortcut: u,
                tooltipContent: p,
                ...c
            } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = s, b[4] = o, b[5] = c, b[6] = u, b[7] = m, b[8] = p) : (a = b[1], t = b[2], s = b[3], o = b[4], c = b[5], u = b[6], m = b[7], p = b[8]);
            let w = void 0 === m ? "ghost" : m,
                j = void 0 === p ? o : p;
            return b[9] !== t ? (f = (0, i.b)("size-6", h, t), b[9] = t, b[10] = f) : f = b[10], b[11] !== a ? (y = (0, n.jsx)("span", {
                className: x,
                children: a
            }), b[11] = a, b[12] = y) : y = b[12], b[13] !== w || b[14] !== o || b[15] !== c || b[16] !== f || b[17] !== y ? (v = (0, n.jsx)(d.a, {
                ...c,
                "aria-label": o,
                className: f,
                color: w,
                "data-slot": "thread-summary-panel-icon-button",
                focusRing: "inset",
                size: "icon",
                uniform: !0,
                children: y
            }), b[13] = w, b[14] = o, b[15] = c, b[16] = f, b[17] = y, b[18] = v) : v = b[18], b[19] !== s || b[20] !== u || b[21] !== v || b[22] !== j ? (g = (0, n.jsx)(l.a, {
                disabled: s,
                content: j,
                shortcut: u,
                openDelay: 250,
                children: v
            }), b[19] = s, b[20] = u, b[21] = v, b[22] = j, b[23] = g) : g = b[23], g
        }
        t.d(a, {}, {
            a: N,
            b: function(e) {
                let a, t, l, s, o, d, c, m, y, h, x, g, b = (0, r.c)(26);
                b[0] !== e ? ({
                    children: a,
                    className: t,
                    disabled: o,
                    interactive: d,
                    multiline: c,
                    ref: s,
                    showChevron: m,
                    tone: y,
                    ...l
                } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = l, b[4] = s, b[5] = o, b[6] = d, b[7] = c, b[8] = m, b[9] = y) : (a = b[1], t = b[2], l = b[3], s = b[4], o = b[5], d = b[6], c = b[7], m = b[8], y = b[9]);
                let w = void 0 !== o && o,
                    j = void 0 !== d && d,
                    k = void 0 !== c && c,
                    N = void 0 === m || m,
                    C = w || void 0,
                    z = v[void 0 === y ? "default" : y],
                    S = !w && j && f,
                    _ = w && "cursor-not-allowed text-tertiary";
                b[10] !== t || b[11] !== z || b[12] !== S || b[13] !== _ ? (h = (0, i.b)(p, z, S, _, t), b[10] = t, b[11] = z, b[12] = S, b[13] = _, b[14] = h) : h = b[14];
                let M = k || void 0;
                return b[15] !== j || b[16] !== N ? (x = j && N && (0, n.jsx)(u.hc, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
                }), b[15] = j, b[16] = N, b[17] = x) : x = b[17], b[18] !== a || b[19] !== l || b[20] !== s || b[21] !== h || b[22] !== M || b[23] !== x || b[24] !== C ? (g = (0, n.jsxs)("div", {
                    ...l,
                    "aria-disabled": C,
                    className: h,
                    "data-slot": "thread-summary-panel-item",
                    "data-multiline": M,
                    ref: s,
                    children: [a, x]
                }), b[18] = a, b[19] = l, b[20] = s, b[21] = h, b[22] = M, b[23] = x, b[24] = C, b[25] = g) : g = b[25], g
            },
            c: function(e) {
                let a, t = (0, r.c)(2);
                return t[0] !== e ? (a = (0, n.jsx)(N, {
                    className: "-me-1.5",
                    ...e
                }), t[0] = e, t[1] = a) : a = t[1], a
            },
            d: function(e) {
                let a, t, s, o, d, c, u, m, p = (0, r.c)(17);
                return p[0] !== e ? ({
                    children: a,
                    className: t,
                    label: s,
                    ...o
                } = e, p[0] = e, p[1] = a, p[2] = t, p[3] = s, p[4] = o) : (a = p[1], t = p[2], s = p[3], o = p[4]), p[5] !== t ? (d = (0, i.b)("-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default", h, t), p[5] = t, p[6] = d) : d = p[6], p[7] !== a ? (c = (0, n.jsx)("span", {
                    className: x,
                    children: a
                }), p[7] = a, p[8] = c) : c = p[8], p[9] !== s || p[10] !== o || p[11] !== d || p[12] !== c ? (u = (0, n.jsx)("a", {
                    ...o,
                    "aria-label": s,
                    className: d,
                    "data-slot": "thread-summary-panel-item-action-link",
                    children: c
                }), p[9] = s, p[10] = o, p[11] = d, p[12] = c, p[13] = u) : u = p[13], p[14] !== s || p[15] !== u ? (m = (0, n.jsx)(l.a, {
                    content: s,
                    openDelay: 250,
                    children: u
                }), p[14] = s, p[15] = u, p[16] = m) : m = p[16], m
            },
            e: function(e) {
                let a, t, l, s, o, d, c, u, m, p, f, y, h, x, v = (0, r.c)(30);
                v[0] !== e ? ({
                    align: c,
                    placement: u,
                    children: a,
                    className: t,
                    visibility: m,
                    onClick: l,
                    onKeyDown: s,
                    onPointerDown: o,
                    ...d
                } = e, v[0] = e, v[1] = a, v[2] = t, v[3] = l, v[4] = s, v[5] = o, v[6] = d, v[7] = c, v[8] = u, v[9] = m) : (a = v[1], t = v[2], l = v[3], s = v[4], o = v[5], d = v[6], c = v[7], u = v[8], m = v[9]);
                let g = void 0 === c ? "content" : c,
                    b = void 0 === u ? "inline" : u,
                    w = void 0 === m ? "always" : m,
                    j = "section-actions" === g && "-me-1.5",
                    k = "preview" === g && "me-2 w-15 justify-center",
                    N = "overlay" === b && "absolute inset-y-0 end-0 my-auto";
                return v[10] !== t || v[11] !== b || v[12] !== j || v[13] !== k || v[14] !== N || v[15] !== w ? (p = (0, i.b)("flex h-5 shrink-0 items-center", j, k, N, "interaction" === w && ["pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100", "inline" === b && "pointer-coarse:pointer-events-auto pointer-coarse:opacity-100"], t), v[10] = t, v[11] = b, v[12] = j, v[13] = k, v[14] = N, v[15] = w, v[16] = p) : p = v[16], v[17] !== l ? (f = e => {
                    e.stopPropagation(), l?.(e)
                }, v[17] = l, v[18] = f) : f = v[18], v[19] !== s ? (y = e => {
                    e.stopPropagation(), s?.(e)
                }, v[19] = s, v[20] = y) : y = v[20], v[21] !== o ? (h = e => {
                    e.stopPropagation(), o?.(e)
                }, v[21] = o, v[22] = h) : h = v[22], v[23] !== a || v[24] !== d || v[25] !== h || v[26] !== p || v[27] !== f || v[28] !== y ? (x = (0, n.jsx)("span", {
                    ...d,
                    className: p,
                    "data-slot": "thread-summary-panel-item-actions",
                    role: "presentation",
                    onClick: f,
                    onKeyDown: y,
                    onPointerDown: h,
                    children: a
                }), v[23] = a, v[24] = d, v[25] = h, v[26] = p, v[27] = f, v[28] = y, v[29] = x) : x = v[29], x
            },
            f: function(e) {
                let a, t, l, s, o, d, c = (0, r.c)(12);
                c[0] !== e ? ({
                    children: a,
                    className: t,
                    type: s,
                    ...l
                } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = l, c[4] = s) : (a = c[1], t = c[2], l = c[3], s = c[4]);
                let u = void 0 === s ? "button" : s;
                return c[5] !== t ? (o = (0, i.b)("flex size-4 cursor-interaction items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring [&>img]:size-4 [&>svg]:size-4", t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== l || c[9] !== o || c[10] !== u ? (d = (0, n.jsx)("button", {
                    ...l,
                    className: o,
                    "data-slot": "thread-summary-panel-item-avatar-button",
                    type: u,
                    children: a
                }), c[7] = a, c[8] = l, c[9] = o, c[10] = u, c[11] = d) : d = c[11], d
            },
            g: function(e) {
                let a, t, l, s, o, d = (0, r.c)(10);
                return d[0] !== e ? ({
                    children: a,
                    className: t,
                    ...l
                } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = l) : (a = d[1], t = d[2], l = d[3]), d[4] !== t ? (s = (0, i.b)("flex shrink-0 items-center gap-token-button-composer-gap [&_img]:size-4 [&_svg]:size-4", t), d[4] = t, d[5] = s) : s = d[5], d[6] !== a || d[7] !== l || d[8] !== s ? (o = (0, n.jsx)("span", {
                    ...l,
                    className: s,
                    "data-slot": "thread-summary-panel-item-avatar-group",
                    children: a
                }), d[6] = a, d[7] = l, d[8] = s, d[9] = o) : o = d[9], o
            },
            h: function(e) {
                let a, t, l, d, c, m, f, x, g, b, w, j, k, N, C, z, S = (0, r.c)(36);
                S[0] !== e ? ({
                    children: a,
                    className: t,
                    disabled: c,
                    interaction: m,
                    multiline: f,
                    ref: d,
                    showChevron: x,
                    tone: g,
                    type: b,
                    unread: w,
                    ...l
                } = e, S[0] = e, S[1] = a, S[2] = t, S[3] = l, S[4] = d, S[5] = c, S[6] = m, S[7] = f, S[8] = x, S[9] = g, S[10] = b, S[11] = w) : (a = S[1], t = S[2], l = S[3], d = S[4], c = S[5], m = S[6], f = S[7], x = S[8], g = S[9], b = S[10], w = S[11]);
                let _ = void 0 !== c && c,
                    M = void 0 === m ? "background" : m,
                    L = void 0 !== f && f,
                    A = void 0 === x || x,
                    I = void 0 === g ? "default" : g,
                    P = void 0 === b ? "button" : b,
                    B = void 0 !== w && w,
                    V = (0, s.useId)();
                S[12] !== l || S[13] !== B || S[14] !== V ? (j = B ? [l["aria-describedby"], V].filter(Boolean).join(" ") : l["aria-describedby"], S[12] = l, S[13] = B, S[14] = V, S[15] = j) : j = S[15];
                let R = j,
                    T = !_ && y[M],
                    E = v[I];
                S[16] !== t || S[17] !== E || S[18] !== T ? (k = (0, i.b)(p, T, h, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", E, t), S[16] = t, S[17] = E, S[18] = T, S[19] = k) : k = S[19];
                let H = L || void 0;
                return S[20] !== B || S[21] !== V ? (N = B ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: "h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    }), (0, n.jsx)("span", {
                        id: V,
                        className: "sr-only",
                        children: (0, n.jsx)(o.a, {
                            id: "sidebar.navItem.unread",
                            defaultMessage: "Unread updates"
                        })
                    })]
                }) : null, S[20] = B, S[21] = V, S[22] = N) : N = S[22], S[23] !== A ? (C = A && (0, n.jsx)(u.hc, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
                }), S[23] = A, S[24] = C) : C = S[24], S[25] !== a || S[26] !== R || S[27] !== _ || S[28] !== l || S[29] !== d || S[30] !== k || S[31] !== H || S[32] !== N || S[33] !== C || S[34] !== P ? (z = (0, n.jsxs)("button", {
                    ...l,
                    "aria-describedby": R,
                    className: k,
                    "data-slot": "thread-summary-panel-item-button",
                    "data-multiline": H,
                    disabled: _,
                    ref: d,
                    type: P,
                    children: [a, N, C]
                }), S[25] = a, S[26] = R, S[27] = _, S[28] = l, S[29] = d, S[30] = k, S[31] = H, S[32] = N, S[33] = C, S[34] = P, S[35] = z) : z = S[35], z
            },
            i: function(e) {
                let a, t, l, s, o, d, c = (0, r.c)(12);
                return c[0] !== e ? ({
                    children: a,
                    className: t,
                    density: l,
                    ...s
                } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = l, c[4] = s) : (a = c[1], t = c[2], l = c[3], s = c[4]), c[5] !== t ? (o = (0, i.b)("relative z-10 flex min-w-0 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0 group-data-[variant=card]/summary-card:mx-0 group-data-[variant=card]/summary-card:gap-0 group-data-[variant=card]/summary-card:px-0", "group/summary-row-density", t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== l || c[9] !== s || c[10] !== o ? (d = (0, n.jsx)("div", {
                    ...s,
                    className: o,
                    "data-slot": "thread-summary-panel-item-group",
                    "data-summary-row-density": l,
                    children: a
                }), c[7] = a, c[8] = l, c[9] = s, c[10] = o, c[11] = d) : d = c[11], d
            },
            j: function(e) {
                let a, t, l, s, o, d, c, u, p, f = (0, r.c)(18);
                f[0] !== e ? ({
                    children: a,
                    className: t,
                    description: l,
                    truncate: o,
                    ...s
                } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = l, f[4] = s, f[5] = o) : (a = f[1], t = f[2], l = f[3], s = f[4], o = f[5]);
                let y = void 0 === o || o;
                f[6] !== t ? (d = (0, i.b)("min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", t), f[6] = t, f[7] = d) : d = f[7], f[8] !== a || f[9] !== y ? (c = y ? (0, n.jsx)(m.a, {
                    animateOnGroupHover: !0,
                    children: a
                }) : a, f[8] = a, f[9] = y, f[10] = c) : c = f[10], f[11] !== s || f[12] !== d || f[13] !== c ? (u = (0, n.jsx)("span", {
                    ...s,
                    className: d,
                    "data-slot": "thread-summary-panel-item-label",
                    children: c
                }), f[11] = s, f[12] = d, f[13] = c, f[14] = u) : u = f[14];
                let h = u;
                return f[15] !== l || f[16] !== h ? (p = null == l ? h : (0, n.jsxs)("span", {
                    className: "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                    children: [h, (0, n.jsx)(k, {
                        children: (0, n.jsx)("span", {
                            className: "text-fade-truncate",
                            children: l
                        })
                    })]
                }), f[15] = l, f[16] = h, f[17] = p) : p = f[17], p
            },
            k: function(e) {
                let a, t, l, s, o, d, c, u = (0, r.c)(15);
                u[0] !== e ? ({
                    children: a,
                    className: t,
                    variant: s,
                    ...l
                } = e, u[0] = e, u[1] = a, u[2] = t, u[3] = l, u[4] = s) : (a = u[1], t = u[2], l = u[3], s = u[4]);
                let m = void 0 === s ? "glyph" : s,
                    p = b[m],
                    f = g[m];
                return u[5] !== t || u[6] !== f ? (o = (0, i.b)("me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4", f, t), u[5] = t, u[6] = f, u[7] = o) : o = u[7], u[8] !== a || u[9] !== p ? (d = null == p ? a : (0, n.jsx)("span", {
                    className: (0, i.b)("flex shrink-0 items-center justify-center", p),
                    children: a
                }), u[8] = a, u[9] = p, u[10] = d) : d = u[10], u[11] !== l || u[12] !== o || u[13] !== d ? (c = (0, n.jsx)("span", {
                    ...l,
                    className: o,
                    "data-slot": "thread-summary-panel-item-leading",
                    children: d
                }), u[11] = l, u[12] = o, u[13] = d, u[14] = c) : c = u[14], c
            },
            l: function(e) {
                let a, t, l, s, o, d = (0, r.c)(10);
                d[0] !== e ? ({
                    className: a,
                    tone: l,
                    ...t
                } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = l) : (a = d[1], t = d[2], l = d[3]);
                let u = v[void 0 === l ? "default" : l];
                return d[4] !== a || d[5] !== u ? (s = (0, i.b)(p, f, h, u, "no-underline", a), d[4] = a, d[5] = u, d[6] = s) : s = d[6], d[7] !== t || d[8] !== s ? (o = (0, n.jsx)(c.a, {
                    ...t,
                    className: s,
                    "data-slot": "thread-summary-panel-item-link"
                }), d[7] = t, d[8] = s, d[9] = o) : o = d[9], o
            },
            m: k,
            n: function(e) {
                let a, t, l, s, o, d, c = (0, r.c)(12);
                c[0] !== e ? ({
                    children: a,
                    className: t,
                    type: s,
                    ...l
                } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = l, c[4] = s) : (a = c[1], t = c[2], l = c[3], s = c[4]);
                let u = void 0 === s ? "button" : s;
                return c[5] !== t ? (o = (0, i.b)("flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 group-data-[variant=card]/summary-card:gap-3 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0", h, t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== l || c[9] !== o || c[10] !== u ? (d = (0, n.jsx)("button", {
                    ...l,
                    className: o,
                    "data-slot": "thread-summary-panel-item-trigger",
                    type: u,
                    children: a
                }), c[7] = a, c[8] = l, c[9] = o, c[10] = u, c[11] = d) : d = c[11], d
            },
            o: function(e) {
                let a, t, l, s, o, d = (0, r.c)(10);
                return d[0] !== e ? ({
                    children: a,
                    className: t,
                    ...l
                } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = l) : (a = d[1], t = d[2], l = d[3]), d[4] !== t ? (s = (0, i.b)("ms-auto flex items-center gap-0.5", t), d[4] = t, d[5] = s) : s = d[5], d[6] !== a || d[7] !== l || d[8] !== s ? (o = (0, n.jsx)("span", {
                    ...l,
                    className: s,
                    "data-slot": "thread-summary-panel-section-actions",
                    children: a
                }), d[6] = a, d[7] = l, d[8] = s, d[9] = o) : o = d[9], o
            }
        })
    }),
    Nwje: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            l = t("on57"),
            i = t("suct"),
            s = t("iodE"),
            o = t("IPUh"),
            d = t("V9Lw"),
            c = t.n(d),
            u = t("Q840"),
            m = t("zd8w"),
            p = t("bqtn"),
            f = t("BhsD"),
            y = t("tSEg"),
            h = t("eGPX"),
            x = t("V8uZ"),
            v = t("m5G2"),
            g = t("Nwp9"),
            b = t("MIZk"),
            w = t("ZAU2");
        let j = {
                height: 0,
                opacity: 0,
                marginTop: 0
            },
            k = {
                height: "auto",
                opacity: 1,
                marginTop: 2
            },
            N = (0, g.c)(e => `thread-summary-panel-section-expanded-${e}`, null),
            C = (0, u.v)(y.a, e => "pending");

        function z(e) {
            let a, t, l, i, d, c = (0, r.c)(19),
                {
                    className: u,
                    animateContentResize: p,
                    children: f,
                    collapsible: y,
                    sectionContentClassName: h
                } = e,
                g = void 0 === y || y,
                b = (0, s.a)(),
                [w, N] = (0, m.useState)(null),
                C = !b,
                z = !b,
                S = !!g && j;
            c[0] !== g ? (a = g ? k : {}, c[0] = g, c[1] = a) : a = c[1];
            let _ = p ? w ?? "auto" : "auto";
            c[2] !== a || c[3] !== _ ? (t = {
                ...a,
                height: _
            }, c[2] = a, c[3] = _, c[4] = t) : t = c[4];
            let M = g ? j : void 0;
            return c[5] !== p ? (l = p ? e => (0, v.a)({
                axis: "height",
                target: e,
                onChange: e => {
                    let {
                        height: a
                    } = e;
                    return N(a)
                }
            }) : void 0, c[5] = p, c[6] = l) : l = c[6], c[7] !== f || c[8] !== h || c[9] !== l ? (i = (0, n.jsx)("div", {
                ref: l,
                className: h,
                children: f
            }), c[7] = f, c[8] = h, c[9] = l, c[10] = i) : i = c[10], c[11] !== u || c[12] !== i || c[13] !== C || c[14] !== z || c[15] !== S || c[16] !== t || c[17] !== M ? (d = (0, n.jsx)(o.a.div, {
                className: u,
                "aria-hidden": C,
                inert: z,
                initial: S,
                animate: t,
                exit: M,
                transition: x.a,
                children: i
            }), c[11] = u, c[12] = i, c[13] = C, c[14] = z, c[15] = S, c[16] = t, c[17] = M, c[18] = d) : d = c[18], d
        }

        function S(e) {
            let a, t, i, s, o, d, c, u = (0, r.c)(35),
                {
                    inset: m,
                    surface: y,
                    mode: h,
                    sectionOptions: x,
                    after: v,
                    children: g,
                    isExpanded: b,
                    onToggle: w,
                    onChange: j,
                    shouldUseReducedMotion: k,
                    titleSuffix: N,
                    collapsedSummary: C
                } = e,
                z = null != x && x.length > 1,
                S = "accordion" === h ? w : void 0;
            u[0] !== g ? (a = (0, n.jsx)("span", {
                className: "truncate",
                children: g
            }), u[0] = g, u[1] = a) : a = u[1];
            let _ = b ? null : N;
            u[2] !== z || u[3] !== b || u[4] !== h || u[5] !== k ? (t = ("accordion" === h || z) && (0, n.jsx)(f.a, {
                "aria-hidden": "true",
                className: (0, l.a)("icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100", !k && "transition-transform", b ? "opacity-0" : "opacity-100", b ? "rotate-0" : "-rotate-90")
            }), u[2] = z, u[3] = b, u[4] = h, u[5] = k, u[6] = t) : t = u[6], u[7] !== C || u[8] !== b ? (i = b || null == C ? null : (0, n.jsx)("span", {
                className: "ms-auto flex min-w-0 items-center",
                children: C
            }), u[7] = C, u[8] = b, u[9] = i) : i = u[9], u[10] !== b || u[11] !== S || u[12] !== a || u[13] !== _ || u[14] !== t || u[15] !== i ? (s = (0, n.jsxs)("button", {
                "aria-expanded": b,
                className: "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                onClick: S,
                type: "button",
                children: [a, _, t, i]
            }), u[10] = b, u[11] = S, u[12] = a, u[13] = _, u[14] = t, u[15] = i, u[16] = s) : s = u[16];
            let M = s,
                L = M;
            if ("heading" === h) {
                let e;
                u[17] !== g ? (e = (0, n.jsx)("h3", {
                    className: "min-w-0 truncate select-none",
                    children: g
                }), u[17] = g, u[18] = e) : e = u[18], L = e
            } else if ("dropdown" === h && z) {
                let e, a;
                u[19] !== j || u[20] !== x ? (e = x?.map(e => (0, n.jsx)(p.f, {
                    onSelect: () => j?.(e),
                    children: e
                }, e)), u[19] = j, u[20] = x, u[21] = e) : e = u[21], u[22] !== e || u[23] !== M ? (a = (0, n.jsx)(p.a, {
                    triggerButton: M,
                    children: e
                }), u[22] = e, u[23] = M, u[24] = a) : a = u[24], L = a
            }
            let A = "panel" === y ? "bg-[var(--app-shell-panel-background,var(--color-surface))] before:bg-[var(--app-shell-panel-background,var(--color-surface))]" : "bg-surface-elevated-secondary before:bg-surface-elevated-secondary",
                I = m && "ps-5 pe-3.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:ps-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:ps-5";
            return u[25] !== A || u[26] !== I ? (o = (0, l.a)("sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", A, I), u[25] = A, u[26] = I, u[27] = o) : o = u[27], u[28] !== v || u[29] !== h ? (d = null != v ? (0, n.jsx)("div", {
                className: (0, l.a)("relative flex", "heading" === h ? "min-w-0 flex-1" : "shrink-0"),
                children: v
            }) : null, u[28] = v, u[29] = h, u[30] = d) : d = u[30], u[31] !== L || u[32] !== d || u[33] !== o ? (c = (0, n.jsxs)("header", {
                className: o,
                children: [L, d]
            }), u[31] = L, u[32] = d, u[33] = o, u[34] = c) : c = u[34], c
        }
        t.d(a, {}, {
            a: function(e) {
                let a, t, s, o, d, p, f, x, v, g, j, k, _, M, L, A = (0, r.c)(103),
                    {
                        autoCollapse: I,
                        animateContentResize: P,
                        sectionKey: B,
                        analyticsControl: V,
                        after: R,
                        children: T,
                        mode: E,
                        ref: H,
                        sectionOptions: Z,
                        defaultCollapsed: O,
                        inset: W,
                        divider: U,
                        surface: D,
                        spacing: Q,
                        persistExpansion: F,
                        title: q,
                        titleSuffix: G,
                        collapsedSummary: K,
                        onChange: X
                    } = e,
                    Y = void 0 !== P && P,
                    $ = void 0 === E ? "accordion" : E,
                    J = void 0 !== O && O,
                    ee = void 0 === W || W,
                    ea = void 0 === D ? "elevated" : D,
                    et = void 0 === Q ? "section" : Q,
                    en = void 0 === F || F,
                    er = (0, u.y)(y.a),
                    {
                        analytics: el
                    } = (0, m.useContext)(w.a),
                    ei = (0, u.x)(C, B),
                    es = (0, u.x)(N, B),
                    [eo, ed] = (0, m.useState)(!J),
                    ec = null != I && "canceled" !== ei,
                    eu = (!0 !== I || "collapsed" !== ei) && (en ? es ?? !J : eo),
                    em = (0, u.z)(h.c),
                    ep = ee ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5" : "px-2";
                A[0] !== ep ? (a = (0, l.a)("flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0", ep), A[0] = ep, A[1] = a) : a = A[1];
                let ef = a;
                if (A[2] !== Y || A[3] !== ee || A[4] !== eu || A[5] !== $ || A[6] !== en || A[7] !== er || A[8] !== B || A[9] !== et) {
                    let e;
                    t = (0, l.a)("relative z-0", ("headerless" !== $ || Y) && ("standalone" === et ? "overflow-clip" : "overflow-hidden"), !ee && "-mx-2"), A[14] !== en || A[15] !== er || A[16] !== B ? (e = e => {
                        en ? er.set(N, B, e) : ed(e)
                    }, A[14] = en, A[15] = er, A[16] = B, A[17] = e) : e = A[17], s = e, o = "headerless" === $ || "heading" === $ || eu || "dropdown" === $, d = (0, l.a)(t, "mt-0.5"), A[2] = Y, A[3] = ee, A[4] = eu, A[5] = $, A[6] = en, A[7] = er, A[8] = B, A[9] = et, A[10] = t, A[11] = s, A[12] = o, A[13] = d
                } else t = A[10], s = A[11], o = A[12], d = A[13];
                A[18] !== T || A[19] !== ef ? (p = (0, n.jsx)("div", {
                    className: ef,
                    children: T
                }), A[18] = T, A[19] = ef, A[20] = p) : p = A[20], A[21] !== d || A[22] !== p ? (f = (0, n.jsx)("div", {
                    className: d,
                    children: p
                }), A[21] = d, A[22] = p, A[23] = f) : f = A[23];
                let ey = f;
                A[24] !== s ? (x = () => ({
                    collapse: () => s(!1),
                    expand: () => s(!0)
                }), A[24] = s, A[25] = x) : x = A[25], (0, m.useImperativeHandle)(H, x), A[26] !== I || A[27] !== ei || A[28] !== ec || A[29] !== er || A[30] !== B ? (v = () => {
                    if (!ec) return;
                    if (!I) {
                        "collapsed" === ei && er.set(C, B, "pending");
                        return
                    }
                    if ("pending" !== ei) return;
                    let e = window.setTimeout(() => {
                        er.set(C, B, "collapsed")
                    }, 3e4);
                    return () => window.clearTimeout(e)
                }, g = [I, ei, ec, er, B], A[26] = I, A[27] = ei, A[28] = ec, A[29] = er, A[30] = B, A[31] = v, A[32] = g) : (v = A[31], g = A[32]), (0, m.useEffect)(v, g), A[33] !== Y || A[34] !== T || A[35] !== ey || A[36] !== t || A[37] !== ef || A[38] !== o || A[39] !== em ? (j = em ? o && ey : (0, n.jsx)(i.a, {
                    initial: !1,
                    children: o && (0, n.jsx)(z, {
                        className: t,
                        animateContentResize: Y,
                        sectionContentClassName: ef,
                        children: T
                    }, "content")
                }), A[33] = Y, A[34] = T, A[35] = ey, A[36] = t, A[37] = ef, A[38] = o, A[39] = em, A[40] = j) : j = A[40];
                let eh = j;
                if ("row" === $) {
                    let e, a, t, r, l = null != T;
                    A[41] !== T || A[42] !== eu || A[43] !== s || A[44] !== q ? (e = null == T ? q : (0, n.jsx)(b.n, {
                        "aria-expanded": eu,
                        className: "select-none",
                        onClick: () => s(!eu),
                        children: q
                    }), A[41] = T, A[42] = eu, A[43] = s, A[44] = q, A[45] = e) : e = A[45], A[46] !== R || A[47] !== eu ? (a = c()(R) ? R({
                        isExpanded: eu
                    }) : R, A[46] = R, A[47] = eu, A[48] = a) : a = A[48], A[49] !== l || A[50] !== e || A[51] !== a ? (t = (0, n.jsx)("div", {
                        className: "px-5",
                        children: (0, n.jsxs)(b.b, {
                            interactive: l,
                            children: [e, a]
                        })
                    }), A[49] = l, A[50] = e, A[51] = a, A[52] = t) : t = A[52];
                    let i = null == T ? null : eh;
                    return A[53] !== t || A[54] !== i ? (r = (0, n.jsxs)("section", {
                        className: "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                        children: [t, i]
                    }), A[53] = t, A[54] = i, A[55] = r) : r = A[55], r
                }
                if ("card" === $ || "plain" === $) {
                    let e, a, t, r, i, s = "card" === $ ? "gap-1" : "gap-2";
                    A[56] !== s ? (e = (0, l.a)("flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4", s), A[56] = s, A[57] = e) : e = A[57], A[58] !== R || A[59] !== $ || A[60] !== q ? (a = null != q || null != R ? (0, n.jsxs)("header", {
                        className: (0, l.a)("flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", "card" === $ && "px-1"),
                        children: [null != q ? (0, n.jsx)("h3", {
                            className: "truncate",
                            children: q
                        }) : null, c()(R) ? R({
                            isExpanded: !0
                        }) : R]
                    }) : null, A[58] = R, A[59] = $, A[60] = q, A[61] = a) : a = A[61];
                    let o = "card" === $ ? "group/summary-card overflow-hidden rounded-2xl border border-default" : "flex min-w-0 flex-col",
                        d = "card" === $ ? "card" : void 0;
                    return A[62] !== Y || A[63] !== T || A[64] !== em ? (t = Y && !em ? (0, n.jsx)(z, {
                        className: "overflow-hidden",
                        animateContentResize: !0,
                        collapsible: !1,
                        sectionContentClassName: "",
                        children: T
                    }) : T, A[62] = Y, A[63] = T, A[64] = em, A[65] = t) : t = A[65], A[66] !== o || A[67] !== d || A[68] !== t ? (r = (0, n.jsx)("div", {
                        className: o,
                        "data-variant": d,
                        children: t
                    }), A[66] = o, A[67] = d, A[68] = t, A[69] = r) : r = A[69], A[70] !== e || A[71] !== a || A[72] !== r ? (i = (0, n.jsxs)("section", {
                        className: e,
                        children: [a, r]
                    }), A[70] = e, A[71] = a, A[72] = r, A[73] = i) : i = A[73], i
                }
                let ex = "nested" === et ? "pt-3" : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
                    ev = (void 0 === U || U) && "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
                    eg = ee ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4" : "after:inset-x-0",
                    eb = "accordion" !== $ || eu || "standalone" === et ? "last:pb-0" : "last:pb-0.5";
                return A[74] !== ex || A[75] !== ev || A[76] !== eg || A[77] !== eb ? (k = (0, l.a)("relative z-0 flex flex-col", ex, ev, eg, eb), A[74] = ex, A[75] = ev, A[76] = eg, A[77] = eb, A[78] = k) : k = A[78], A[79] !== ec || A[80] !== er || A[81] !== B ? (_ = ec ? () => {
                    er.set(C, B, "canceled")
                } : void 0, A[79] = ec, A[80] = er, A[81] = B, A[82] = _) : _ = A[82], A[83] !== R || A[84] !== el || A[85] !== V || A[86] !== K || A[87] !== ee || A[88] !== eu || A[89] !== $ || A[90] !== X || A[91] !== Z || A[92] !== s || A[93] !== em || A[94] !== ea || A[95] !== q || A[96] !== G ? (M = "headerless" !== $ ? (0, n.jsx)(S, {
                    inset: ee,
                    surface: ea,
                    after: c()(R) ? R({
                        isExpanded: eu
                    }) : R,
                    sectionOptions: Z,
                    mode: $,
                    isExpanded: eu,
                    onChange: X,
                    onToggle: () => {
                        "dropdown" !== $ && (V && (0, w.b)(el, V), s(!eu))
                    },
                    shouldUseReducedMotion: em,
                    titleSuffix: G,
                    collapsedSummary: K,
                    children: q
                }) : null, A[83] = R, A[84] = el, A[85] = V, A[86] = K, A[87] = ee, A[88] = eu, A[89] = $, A[90] = X, A[91] = Z, A[92] = s, A[93] = em, A[94] = ea, A[95] = q, A[96] = G, A[97] = M) : M = A[97], A[98] !== eh || A[99] !== k || A[100] !== _ || A[101] !== M ? (L = (0, n.jsxs)("section", {
                    role: "presentation",
                    className: k,
                    onClick: _,
                    children: [M, eh]
                }), A[98] = eh, A[99] = k, A[100] = _, A[101] = M, A[102] = L) : L = A[102], L
            }
        })
    }),
    ZAU2: (function(e, a, t) {
        var n = t("iRMi"),
            r = t("zd8w"),
            l = t("yGJW");
        let i = (0, r.createContext)({
            fullWidth: !1,
            isVisible: !0,
            isAnimating: !1,
            placement: "floating"
        });
        t.d(a, {}, {
            a: i,
            b: function(e, a) {
                e && (0, l.a)(e.scope, n.CodexThreadSummaryPanelInteraction, {
                    control: a,
                    layout: e.layout,
                    routeKind: e.scope.value.routeKind
                })
            }
        })
    }),
    iS3k: (function(e, a, t) {
        t.d(a, {
            a: () => O,
            b: () => W
        });
        var n = t("ABep"),
            r = t("QosV"),
            l = t("slpy"),
            i = t("on57"),
            s = t("IPUh"),
            o = t("iodE"),
            d = t("rfA2"),
            c = t("Q840"),
            u = t("zd8w"),
            m = t("v7qY"),
            p = t("Wf1j"),
            f = t("Qgfj"),
            y = t("I7bK"),
            h = t("QcW8");
        t("DUYS");
        var x = t("FHYD"),
            v = t("gbrq"),
            g = t("zjpG"),
            b = t("Sm6l"),
            w = t("rsCP"),
            j = t("HOLv"),
            k = t("y0pT"),
            N = t("UxN3"),
            C = t("eGPX");
        t("V8uZ");
        var z = t("BWrV"),
            S = t("MIZk"),
            _ = t("Nwje"),
            M = t("ZAU2"),
            L = t("KWzM"),
            A = t("oyxz"),
            I = t("ZtSy"),
            P = t("bf6R"),
            B = e => (0, n.jsx)("svg", {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...e,
                children: (0, n.jsx)("path", {
                    d: "M16.6345 5.83331C16.6345 4.81987 15.813 3.99835 14.7996 3.99835C13.7863 3.99855 12.9646 4.81999 12.9646 5.83331C12.9646 6.84663 13.7863 7.66808 14.7996 7.66827C15.813 7.66827 16.6345 6.84676 16.6345 5.83331ZM3.36499 14.1663C3.36499 15.1798 4.18651 16.0013 5.19995 16.0013C6.21339 16.0013 7.03491 15.1798 7.03491 14.1663C7.03471 13.153 6.21327 12.3314 5.19995 12.3314C4.18663 12.3314 3.36519 13.153 3.36499 14.1663ZM17.9646 5.83331C17.9646 7.58129 16.5475 8.99835 14.7996 8.99835C13.2785 8.99818 12.0078 7.92497 11.7039 6.49445L11.6667 6.49835H11.3347C10.5362 6.49835 9.96426 6.49872 9.54565 6.52081C9.21098 6.53848 9.04089 6.56873 8.96069 6.59113L8.90796 6.60968C8.41777 6.86301 8.2248 7.46527 8.47632 7.95636L8.50757 8.00323C8.55968 8.068 8.68066 8.19148 8.94312 8.4007C9.27097 8.66203 9.73648 8.99501 10.3865 9.45929L11.239 10.0716C11.489 10.2539 11.7044 10.4155 11.8855 10.5599C12.2255 10.8309 12.5425 11.1144 12.7078 11.4368L12.8054 11.6536C13.206 12.6785 12.8306 13.8502 11.9089 14.4515L11.7029 14.5716C11.381 14.7379 10.9584 14.785 10.5242 14.8079C10.0619 14.8323 9.44766 14.8314 8.66479 14.8314H8.33276C8.31992 14.8314 8.30734 14.8282 8.29468 14.8275C7.9907 16.2581 6.72124 17.3314 5.19995 17.3314C3.45197 17.3314 2.03491 15.9143 2.03491 14.1663C2.03511 12.4185 3.45209 11.0013 5.19995 11.0013C6.72066 11.0013 7.99008 12.0743 8.29468 13.5042C8.30731 13.5035 8.31995 13.5013 8.33276 13.5013H8.66479C9.46362 13.5013 10.0362 13.5019 10.4548 13.4798C10.9013 13.4562 11.0544 13.4096 11.0925 13.39L11.1804 13.3382C11.5766 13.0799 11.7385 12.5765 11.5662 12.136L11.5242 12.0433C11.5046 12.0051 11.4062 11.8788 11.0564 11.5999C10.8925 11.4693 10.6943 11.3206 10.4558 11.1468L9.61304 10.5413C8.97593 10.0862 8.47599 9.72927 8.11401 9.44073C7.81659 9.20364 7.53702 8.95681 7.36108 8.68292L7.29272 8.56378C6.70695 7.42066 7.15568 6.0189 8.29663 5.42902L8.42163 5.3714C8.7241 5.25059 9.09524 5.21275 9.47534 5.19269C9.93756 5.16829 10.5518 5.16827 11.3347 5.16827H11.6667L11.7039 5.1712C12.0082 3.74114 13.2788 2.66845 14.7996 2.66827C16.5475 2.66827 17.9646 4.08533 17.9646 5.83331Z",
                    fill: "currentColor"
                })
            });

        function V(e) {
            let a, t, l, i, s, o, d = (0, r.c)(33),
                {
                    controls: c,
                    expanded: u,
                    href: m,
                    icon: p,
                    label: f,
                    meta: y,
                    multiline: h,
                    onOpen: x,
                    onOpenLink: v,
                    requiresConfirmation: g,
                    showHoverActions: b
                } = e,
                w = void 0 !== h && h;
            d[0] !== p ? (a = (0, n.jsx)(S.k, {
                variant: "custom",
                children: p
            }), d[0] = p, d[1] = a) : a = d[1];
            let j = w ? "line-clamp-2" : void 0,
                k = !w;
            d[2] !== f || d[3] !== j || d[4] !== k ? (t = (0, n.jsx)(S.j, {
                className: j,
                truncate: k,
                children: f
            }), d[2] = f, d[3] = j, d[4] = k, d[5] = t) : t = d[5], d[6] !== y ? (l = null == y ? null : (0, n.jsx)(S.m, {
                children: y
            }), d[6] = y, d[7] = l) : l = d[7], d[8] !== u ? (i = null != u ? (0, n.jsx)(S.m, {
                visibility: "interaction",
                children: (0, n.jsx)(P.cc, {
                    className: u ? void 0 : "-rotate-90"
                })
            }) : null, d[8] = u, d[9] = i) : i = d[9], d[10] !== a || d[11] !== t || d[12] !== l || d[13] !== i ? (s = (0, n.jsxs)(n.Fragment, {
                children: [a, t, l, i]
            }), d[10] = a, d[11] = t, d[12] = l, d[13] = i, d[14] = s) : s = d[14];
            let N = s;
            if (null != m) {
                let e, a = b ? m : void 0,
                    t = b ? void 0 : f;
                return d[15] !== N || d[16] !== m || d[17] !== f || d[18] !== v || d[19] !== g || d[20] !== b || d[21] !== t || d[22] !== a ? (e = (0, n.jsx)(S.l, {
                    "aria-label": f,
                    className: "select-none",
                    href: m,
                    initiator: "markdown_link_click",
                    requiresConfirmation: g,
                    onUnmodifiedClick: v,
                    showHoverActions: b,
                    tooltipContent: a,
                    title: t,
                    tone: "muted",
                    children: N
                }), d[15] = N, d[16] = m, d[17] = f, d[18] = v, d[19] = g, d[20] = b, d[21] = t, d[22] = a, d[23] = e) : e = d[23], e
            }
            if (null != x) {
                let e;
                return d[24] !== N || d[25] !== c || d[26] !== u || d[27] !== f || d[28] !== x ? (e = (0, n.jsx)(S.h, {
                    "aria-controls": c,
                    "aria-expanded": u,
                    "aria-label": f,
                    className: "select-none",
                    onClick: x,
                    title: f,
                    tone: "muted",
                    children: N
                }), d[24] = N, d[25] = c, d[26] = u, d[27] = f, d[28] = x, d[29] = e) : e = d[29], e
            }
            return d[30] !== N || d[31] !== f ? (o = (0, n.jsx)(S.b, {
                className: "select-none",
                tone: "muted",
                title: f,
                children: N
            }), d[30] = N, d[31] = f, d[32] = o) : o = d[32], o
        }
        var R = t("PgpQ"),
            T = t("bTOa"),
            E = t("wDHp");
        let H = s.a.create(k.a),
            Z = {
                opacity: 0,
                transform: "translateX(0%)"
            },
            O = {
                Content: function(e) {
                    let a, t, l, o, d, c, m, p, f, y, h, x, v, g, b, j = (0, r.c)(35);
                    j[0] !== e ? ({
                        children: a,
                        className: t,
                        isHidden: m,
                        variant: p,
                        density: f,
                        scrollable: y,
                        scrollClassName: c,
                        contentClassName: l,
                        onScroll: o,
                        ...d
                    } = e, j[0] = e, j[1] = a, j[2] = t, j[3] = l, j[4] = o, j[5] = d, j[6] = c, j[7] = m, j[8] = p, j[9] = f, j[10] = y) : (a = j[1], t = j[2], l = j[3], o = j[4], d = j[5], c = j[6], m = j[7], p = j[8], f = j[9], y = j[10]);
                    let k = void 0 !== m && m,
                        N = void 0 === p ? "summary" : p,
                        C = void 0 === f ? "default" : f,
                        z = void 0 === y || y,
                        {
                            fullWidth: S,
                            isVisible: _,
                            placement: L
                        } = (0, u.useContext)(M.a),
                        A = _ && !k,
                        I = (0, u.useRef)(null),
                        P = (0, u.useRef)(0),
                        B = "overlay" === z ? H : s.a.div;
                    j[11] !== A ? (h = () => {
                        if (A && 0 !== P.current && null != I.current) {
                            let e = P.current,
                                a = () => {
                                    null != I.current && (I.current.scrollTop = e)
                                };
                            a();
                            let t = requestAnimationFrame(a);
                            return () => cancelAnimationFrame(t)
                        }
                    }, x = [A], j[11] = A, j[12] = h, j[13] = x) : (h = j[12], x = j[13]), (0, u.useLayoutEffect)(h, x);
                    let V = !z && "isolate",
                        R = S && "bg-surface";
                    j[14] !== t || j[15] !== V || j[16] !== R ? (v = (0, i.b)("group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden", V, R, t), j[14] = t, j[15] = V, j[16] = R, j[17] = v) : v = j[17];
                    let T = S || "docked" === L,
                        E = z ? void 0 : o;
                    return j[18] !== B || j[19] !== a || j[20] !== l || j[21] !== A || j[22] !== o || j[23] !== c || j[24] !== z || j[25] !== N ? (g = z ? (0, n.jsx)(B, {
                        ref: I,
                        className: (0, i.b)("flex h-fit max-h-full min-h-0 min-w-0 flex-col", "overlay" !== z && "overflow-x-hidden overflow-y-auto", c),
                        layoutScroll: !0,
                        onScroll: e => {
                            A && null != I.current && (P.current = e.currentTarget.scrollTop, o?.(e))
                        },
                        children: (0, n.jsx)("div", {
                            className: (0, i.b)("flex flex-col", "summary" === N && "gap-2 py-2.5", l),
                            children: a
                        })
                    }) : a, j[18] = B, j[19] = a, j[20] = l, j[21] = A, j[22] = o, j[23] = c, j[24] = z, j[25] = N, j[26] = g) : g = j[26], j[27] !== C || j[28] !== d || j[29] !== T || j[30] !== E || j[31] !== g || j[32] !== v || j[33] !== N ? (b = (0, n.jsx)(w.c, {
                        className: v,
                        "data-summary-panel-variant": N,
                        "data-summary-panel-density": C,
                        unstyled: T,
                        variant: "island",
                        ...d,
                        onScroll: E,
                        children: g
                    }), j[27] = C, j[28] = d, j[29] = T, j[30] = E, j[31] = g, j[32] = v, j[33] = N, j[34] = b) : b = j[34], b
                },
                HeaderButton: function(e) {
                    let a, t, s, o, d, c, u, m, f, y, h, x, v, g = (0, r.c)(31);
                    g[0] !== e ? ({
                        analytics: a,
                        label: c,
                        onClick: s,
                        pressed: o,
                        shortcut: d,
                        size: u,
                        ...t
                    } = e, g[0] = e, g[1] = a, g[2] = t, g[3] = s, g[4] = o, g[5] = d, g[6] = c, g[7] = u) : (a = g[1], t = g[2], s = g[3], o = g[4], d = g[5], c = g[6], u = g[7]);
                    let w = void 0 === u ? "toolbar" : u,
                        k = (0, p.a)();
                    g[8] !== k || g[9] !== c ? (m = c ?? k.formatMessage({
                        id: "localConversation.summaryPanel.toggle",
                        defaultMessage: "Toggle summary"
                    }), g[8] = k, g[9] = c, g[10] = m) : m = g[10];
                    let C = m;
                    return g[11] !== a || g[12] !== s || g[13] !== o ? (f = e => {
                        (0, M.b)(a, o ? "close_panel" : "open_panel"), s?.(e)
                    }, g[11] = a, g[12] = s, g[13] = o, g[14] = f) : f = g[14], g[15] !== t.className ? (y = (0, i.b)("conversation-header-control", t.className), g[15] = t.className, g[16] = y) : y = g[16], g[17] !== w ? (h = "iconMd" === w ? (0, n.jsx)(j.a, {
                        "aria-hidden": !1,
                        asset: R.a
                    }) : (0, n.jsx)(N.b, {
                        "aria-hidden": !1,
                        icon: {
                            assets: {
                                16: T.a,
                                20: E.a
                            }
                        }
                    }), g[17] = w, g[18] = h) : h = g[18], g[19] !== t || g[20] !== C || g[21] !== o || g[22] !== w || g[23] !== f || g[24] !== y || g[25] !== h ? (x = (0, n.jsx)(b.a, {
                        "data-thread-summary-panel-toggle": !0,
                        size: w,
                        uniform: !0,
                        color: "ghostActive",
                        "aria-label": C,
                        "aria-pressed": o,
                        onClick: f,
                        ...t,
                        className: y,
                        children: h
                    }), g[19] = t, g[20] = C, g[21] = o, g[22] = w, g[23] = f, g[24] = y, g[25] = h, g[26] = x) : x = g[26], g[27] !== C || g[28] !== d || g[29] !== x ? (v = (0, n.jsx)(l.a, {
                        content: C,
                        shortcut: d,
                        openDelay: 250,
                        children: x
                    }), g[27] = C, g[28] = d, g[29] = x, g[30] = v) : v = g[30], v
                },
                IconButton: S.a,
                Item: S.b,
                ItemActionButton: S.c,
                ItemActionLink: S.d,
                ItemActions: S.e,
                ItemAvatarGroup: S.g,
                ItemAvatarButton: S.f,
                ItemButton: S.h,
                ItemGroup: S.i,
                ItemLabel: S.j,
                ItemLeading: S.k,
                ItemMeta: S.m,
                ItemTrigger: S.n,
                List: z.a,
                PopoverContent: function(e) {
                    let a, t, l, i, s = (0, r.c)(9),
                        {
                            analytics: o,
                            children: d,
                            isPIPObstacle: c
                        } = e,
                        u = void 0 !== c && c ? "thread-summary-panel-popover" : void 0;
                    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                        width: 300
                    }, s[0] = a) : a = s[0], s[1] !== o ? (t = {
                        analytics: o,
                        fullWidth: !1,
                        isVisible: !0,
                        isAnimating: !1,
                        placement: "floating"
                    }, s[1] = o, s[2] = t) : t = s[2], s[3] !== d || s[4] !== t ? (l = (0, n.jsx)(M.a.Provider, {
                        value: t,
                        children: d
                    }), s[3] = d, s[4] = t, s[5] = l) : l = s[5], s[6] !== u || s[7] !== l ? (i = (0, n.jsx)("div", {
                        "data-pip-obstacle": u,
                        className: "flex max-h-(--thread-summary-panel-available-height) flex-col gap-3 [--thread-summary-panel-available-height:min(var(--radix-popover-content-available-height),calc(100vh-16px))]",
                        style: a,
                        children: l
                    }), s[6] = u, s[7] = l, s[8] = i) : i = s[8], i
                },
                Root: function(e) {
                    let a, t, l, f, g, b, w, j, k, N, z, S, _, A, I, P, B, V, R, T, E, H, O, W, U, D, Q, F = (0, r.c)(123),
                        {
                            analytics: q,
                            animateOnExit: G,
                            animateOnMount: K,
                            children: X,
                            fillHeight: Y,
                            fullWidth: $,
                            fullWidthTransition: J,
                            isPIPObstacle: ee,
                            maxHeight: ea,
                            placement: et,
                            portalContainer: en,
                            reserveToolbarSpace: er,
                            resizer: el,
                            shouldHideInlineImmediately: ei,
                            shouldShow: es,
                            width: eo
                        } = e,
                        ed = void 0 === G || G,
                        ec = void 0 !== K && K,
                        eu = void 0 !== Y && Y,
                        em = void 0 !== $ && $,
                        ep = void 0 === J ? "default" : J,
                        ef = void 0 === et ? "floating" : et,
                        ey = void 0 !== er && er,
                        eh = void 0 === eo ? 300 : eo,
                        ex = (0, p.a)(),
                        [ev, eg] = (0, u.useState)(null),
                        eb = null == ev ? null : ev / 2,
                        ew = (0, c.z)(h.A),
                        ej = (0, c.z)(v.c),
                        ek = (0, c.z)(C.c),
                        eN = (0, o.a)(),
                        eC = es && eN && !ei,
                        ez = (0, d.a)(),
                        [eS, e_] = (0, u.useState)(es),
                        [eM, eL] = (0, u.useState)(ec && !ek && !ew),
                        eA = "docked" === ef ? Z : L.b.hidden,
                        eI = es ? L.b.visible : eA,
                        eP = (0, u.useRef)(null),
                        eB = (0, u.useRef)(ew),
                        eV = (0, u.useRef)(ej),
                        eR = (0, u.useRef)(!1),
                        eT = (0, u.useRef)(ec);
                    if (ek || ew) {
                        let e;
                        F[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                            duration: 0
                        }, F[0] = e) : e = F[0], a = e
                    } else a = "docked" === ef ? y.b : L.a;
                    F[1] !== ep ? (t = "relaxed" === ep ? {
                        ...y.a,
                        duration: .3
                    } : y.a, F[1] = ep, F[2] = t) : t = F[2];
                    let eE = t;
                    F[3] !== ew || F[4] !== eN || F[5] !== ej || F[6] !== ei || F[7] !== ek || F[8] !== ez || F[9] !== eI ? (l = () => {
                        if (!eN) return;
                        eR.current || queueMicrotask(() => {
                            eR.current = !0
                        });
                        let e = eB.current !== ew,
                            a = eV.current !== ej,
                            t = eP.current !== eI;
                        eP.current = eI, eB.current = ew, eV.current = ej, ez.stop(), !eR.current && !eT.current || e || a || !t && eR.current || ei || ek ? (ez.set(eI), e_(eI.opacity > 0), eL(!1)) : ez.start(eI)
                    }, F[3] = ew, F[4] = eN, F[5] = ej, F[6] = ei, F[7] = ek, F[8] = ez, F[9] = eI, F[10] = l) : l = F[10], F[11] !== ew || F[12] !== eN || F[13] !== ej || F[14] !== en || F[15] !== ei || F[16] !== ek || F[17] !== ez || F[18] !== eI ? (f = [ew, eN, ej, en, ei, ek, ez, eI], F[11] = ew, F[12] = eN, F[13] = ej, F[14] = en, F[15] = ei, F[16] = ek, F[17] = ez, F[18] = eI, F[19] = f) : f = F[19], (0, u.useLayoutEffect)(l, f), F[20] !== ef || F[21] !== el ? (g = e => {
                        let a = e?.parentElement;
                        if (null == el || "docked" !== ef || null == a) return;
                        let t = () => eg(a.clientWidth);
                        t();
                        let n = new ResizeObserver(t);
                        return n.observe(a), () => n.disconnect()
                    }, F[20] = ef, F[21] = el, F[22] = g) : g = F[22];
                    let eH = "docked" === ef ? "relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]" : "absolute";
                    F[23] !== em || F[24] !== ef || F[25] !== en || F[26] !== ey || F[27] !== eH ? (b = (0, i.b)("pointer-events-none z-40", eH, "floating" === ef && [null != en && ["portalLayout-_LSX2_", ey && "belowToolbar-VYFp43"], null == en && (em ? "inset-0" : "inset-x-0 top-(--thread-floating-content-top-inset) bottom-(--thread-floating-content-bottom-inset) mt-(--thread-floating-actions-clearance) [container-type:size]")]), F[23] = em, F[24] = ef, F[25] = en, F[26] = ey, F[27] = eH, F[28] = b) : b = F[28];
                    let eZ = !!ey && "floating" === ef && null == en && !em || void 0;
                    F[29] !== ea ? (w = {
                        maxHeight: ea
                    }, F[29] = ea, F[30] = w) : w = F[30];
                    let eO = !eC,
                        eW = !eC;
                    F[31] !== ec || F[32] !== ef || F[33] !== ek ? (j = "docked" === ef && !!ec && !ek && {
                        width: 0
                    }, F[31] = ec, F[32] = ef, F[33] = ek, F[34] = j) : j = F[34], F[35] !== em || F[36] !== ef || F[37] !== en || F[38] !== es || F[39] !== eh ? (k = "docked" === ef ? {
                        width: es ? "auto" : 0
                    } : {
                        "--thread-floating-panel-full-width-progress": +!!em,
                        width: null == en ? "auto" : `calc(min(${eh}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`
                    }, F[35] = em, F[36] = ef, F[37] = en, F[38] = es, F[39] = eh, F[40] = k) : k = F[40], F[41] !== ed || F[42] !== ef ? (N = ed && "docked" === ef ? {
                        width: 0
                    } : void 0, F[41] = ed, F[42] = ef, F[43] = N) : N = F[43];
                    let eU = "docked" === ef || ek ? a : eE,
                        eD = "docked" === ef ? "w-max max-w-[50cqw]" : "max-w-full",
                        eQ = "floating" === ef && null == en && !em && "w-fit pe-2 ltr:ms-auto rtl:me-auto",
                        eF = eu && "h-full",
                        eq = (null != en || em) && "w-full";
                    F[44] !== eD || F[45] !== eQ || F[46] !== eF || F[47] !== eq ? (z = (0, i.b)("relative isolate flex max-h-full", eD, eQ, eF, eq), F[44] = eD, F[45] = eQ, F[46] = eF, F[47] = eq, F[48] = z) : z = F[48];
                    let eG = eC && (void 0 === ee || ee) ? "thread-summary-panel" : void 0,
                        eK = (null != en || em) && "w-full";
                    F[49] !== eK ? (S = (0, i.b)("pointer-events-none absolute inset-y-0 start-0 max-w-full", eK), F[49] = eK, F[50] = S) : S = F[50], F[51] !== em || F[52] !== en || F[53] !== eh ? (_ = null != en || em ? void 0 : {
                        width: eh
                    }, F[51] = em, F[52] = en, F[53] = eh, F[54] = _) : _ = F[54], F[55] !== eG || F[56] !== S || F[57] !== _ ? (A = (0, n.jsx)("div", {
                        "data-pip-obstacle": eG,
                        className: S,
                        style: _,
                        "aria-hidden": !0
                    }), F[55] = eG, F[56] = S, F[57] = _, F[58] = A) : A = F[58];
                    let eX = es && (!ec || ek) ? L.b.visible : eA,
                        eY = eu && "h-full",
                        e$ = (null != en || em) && "w-full",
                        eJ = ei && "invisible";
                    F[59] !== eY || F[60] !== e$ || F[61] !== eJ ? (I = (0, i.b)("pointer-events-none max-h-full min-h-0 min-w-0 max-w-full", eY, e$, eJ), F[59] = eY, F[60] = e$, F[61] = eJ, F[62] = I) : I = F[62];
                    let e1 = ed ? eA : void 0,
                        e0 = a;
                    F[63] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
                        e_(!0), eL(!0)
                    }, F[63] = P) : P = F[63], F[64] !== eN || F[65] !== es ? (B = () => {
                        e_(es && eN), eL(!1)
                    }, F[64] = eN, F[65] = es, F[66] = B) : B = F[66];
                    let e2 = "docked" === ef && "border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]",
                        e3 = eu && "h-full",
                        e5 = (null != en || em) && "w-full",
                        e6 = eC ? "pointer-events-auto" : "pointer-events-none";
                    F[67] !== e2 || F[68] !== e3 || F[69] !== e5 || F[70] !== e6 ? (V = (0, i.b)("flex max-h-full min-h-0 max-w-full flex-col gap-3", e2, e3, e5, e6), F[67] = e2, F[68] = e3, F[69] = e5, F[70] = e6, F[71] = V) : V = F[71], F[72] !== em || F[73] !== en || F[74] !== eh ? (R = null != en || em ? void 0 : {
                        width: eh
                    }, F[72] = em, F[73] = en, F[74] = eh, F[75] = R) : R = F[75];
                    let e4 = eC ? q : void 0,
                        e9 = (eC || eS) && !ei;
                    F[76] !== em || F[77] !== eM || F[78] !== ef || F[79] !== e4 || F[80] !== e9 ? (T = {
                        analytics: e4,
                        fullWidth: em,
                        isAnimating: eM,
                        isVisible: e9,
                        placement: ef
                    }, F[76] = em, F[77] = eM, F[78] = ef, F[79] = e4, F[80] = e9, F[81] = T) : T = F[81], F[82] !== X || F[83] !== T ? (E = (0, n.jsx)(M.a.Provider, {
                        value: T,
                        children: X
                    }), F[82] = X, F[83] = T, F[84] = E) : E = F[84], F[85] !== V || F[86] !== R || F[87] !== E ? (H = (0, n.jsx)("div", {
                        className: V,
                        style: R,
                        children: E
                    }), F[85] = V, F[86] = R, F[87] = E, F[88] = H) : H = F[88], F[89] !== eX || F[90] !== I || F[91] !== e1 || F[92] !== B || F[93] !== H || F[94] !== a || F[95] !== ez ? (O = (0, n.jsx)(s.a.div, {
                        initial: eX,
                        className: I,
                        animate: ez,
                        exit: e1,
                        transition: e0,
                        onAnimationStart: P,
                        onAnimationComplete: B,
                        children: H
                    }), F[89] = eX, F[90] = I, F[91] = e1, F[92] = B, F[93] = H, F[94] = a, F[95] = ez, F[96] = O) : O = F[96], F[97] !== z || F[98] !== A || F[99] !== O ? (W = (0, n.jsxs)("div", {
                        className: z,
                        children: [A, O]
                    }), F[97] = z, F[98] = A, F[99] = O, F[100] = W) : W = F[100], F[101] !== ex || F[102] !== eb || F[103] !== ef || F[104] !== el || F[105] !== eh ? (U = "docked" === ef && null != el && null != eb && eb > 320 && (0, n.jsx)("div", {
                        className: "pointer-events-auto",
                        children: (0, n.jsx)(x.a, {
                            ariaLabel: ex.formatMessage({
                                id: "splitView.resize",
                                defaultMessage: "Resize panels"
                            }),
                            edge: "left",
                            extendIntoToolbar: !1,
                            defaultSize: el.defaultWidth,
                            getCurrentSize: () => Math.min(eh, eb),
                            minimumSize: 320,
                            maximumSize: eb,
                            setSize: el.onWidthChange
                        })
                    }), F[101] = ex, F[102] = eb, F[103] = ef, F[104] = el, F[105] = eh, F[106] = U) : U = F[106], F[107] !== g || F[108] !== b || F[109] !== eZ || F[110] !== w || F[111] !== eO || F[112] !== eW || F[113] !== j || F[114] !== k || F[115] !== N || F[116] !== eU || F[117] !== W || F[118] !== U ? (D = (0, n.jsxs)(s.a.div, {
                        ref: g,
                        className: b,
                        "data-thread-summary-card-host": eZ,
                        style: w,
                        "aria-hidden": eO,
                        inert: eW,
                        initial: j,
                        animate: k,
                        exit: N,
                        transition: eU,
                        children: [W, U]
                    }), F[107] = g, F[108] = b, F[109] = eZ, F[110] = w, F[111] = eO, F[112] = eW, F[113] = j, F[114] = k, F[115] = N, F[116] = eU, F[117] = W, F[118] = U, F[119] = D) : D = F[119];
                    let e8 = D;
                    return F[120] !== e8 || F[121] !== en ? (Q = null == en ? e8 : (0, m.createPortal)(e8, en), F[120] = e8, F[121] = en, F[122] = Q) : Q = F[122], Q
                },
                Section: _.a,
                SectionActions: S.o,
                SectionCount: function(e) {
                    let a, t, l = (0, r.c)(3),
                        {
                            count: i
                        } = e;
                    return 0 === i ? null : (l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(g.a, {}), l[0] = a) : a = l[0], l[1] !== i ? (t = (0, n.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-sm text-tertiary group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
                        children: [a, (0, n.jsx)("span", {
                            children: (0, n.jsx)(f.c, {
                                value: i
                            })
                        })]
                    }), l[1] = i, l[2] = t) : t = l[2], t)
                },
                SourceDetails: function(e) {
                    let a, t, l, i, s, o, d, c, u = (0, r.c)(41),
                        {
                            children: m,
                            href: p,
                            icon: f,
                            label: y,
                            meta: h,
                            summaryMeta: x,
                            presentation: v,
                            onOpen: g,
                            onOpenLink: b,
                            requiresConfirmation: w,
                            showHoverActions: j
                        } = e;
                    if ("summary" === (void 0 === v ? "side-panel" : v)) {
                        let e;
                        return u[0] !== p || u[1] !== f || u[2] !== y || u[3] !== g || u[4] !== b || u[5] !== w || u[6] !== j || u[7] !== x ? (e = (0, n.jsx)("li", {
                            children: (0, n.jsx)(V, {
                                href: p,
                                icon: f,
                                label: y,
                                meta: x,
                                onOpen: g,
                                onOpenLink: b,
                                requiresConfirmation: w,
                                showHoverActions: j
                            })
                        }), u[0] = p, u[1] = f, u[2] = y, u[3] = g, u[4] = b, u[5] = w, u[6] = j, u[7] = x, u[8] = e) : e = u[8], e
                    }
                    u[9] !== f ? (a = (0, n.jsx)("span", {
                        className: "flex h-5 w-[18px] shrink-0 items-center justify-center",
                        children: f
                    }), u[9] = f, u[10] = a) : a = u[10], u[11] !== y ? (t = (0, n.jsx)("span", {
                        className: "text-sm font-medium break-words text-default",
                        children: y
                    }), u[11] = y, u[12] = t) : t = u[12], u[13] !== h ? (l = null == h ? null : (0, n.jsx)("span", {
                        className: "text-xs break-all text-tertiary",
                        children: h
                    }), u[13] = h, u[14] = l) : l = u[14], u[15] !== t || u[16] !== l ? (i = (0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-1 flex-col gap-0.5",
                        children: [t, l]
                    }), u[15] = t, u[16] = l, u[17] = i) : i = u[17], u[18] !== a || u[19] !== i ? (s = (0, n.jsxs)(n.Fragment, {
                        children: [a, i]
                    }), u[18] = a, u[19] = i, u[20] = s) : s = u[20];
                    let k = s;
                    if (null != p) {
                        let e, a = j ? p : void 0,
                            t = j ? void 0 : p;
                        u[21] !== k || u[22] !== p || u[23] !== y || u[24] !== b || u[25] !== w || u[26] !== j || u[27] !== a || u[28] !== t ? (e = (0, n.jsx)(I.a, {
                            "aria-label": y,
                            className: "flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            href: p,
                            initiator: "markdown_link_click",
                            requiresConfirmation: w,
                            onUnmodifiedClick: b,
                            showHoverActions: j,
                            tooltipContent: a,
                            title: t,
                            children: k
                        }), u[21] = k, u[22] = p, u[23] = y, u[24] = b, u[25] = w, u[26] = j, u[27] = a, u[28] = t, u[29] = e) : e = u[29], o = e
                    } else if (null != g) {
                        let e;
                        u[30] !== k || u[31] !== y || u[32] !== g ? (e = (0, n.jsx)("button", {
                            "aria-label": y,
                            className: "flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            type: "button",
                            onClick: g,
                            children: k
                        }), u[30] = k, u[31] = y, u[32] = g, u[33] = e) : e = u[33], o = e
                    } else {
                        let e;
                        u[34] !== k ? (e = (0, n.jsx)("div", {
                            className: "flex w-full items-center gap-2 text-start",
                            children: k
                        }), u[34] = k, u[35] = e) : e = u[35], o = e
                    }
                    return u[36] !== m ? (d = null == m ? null : (0, n.jsx)("div", {
                        className: "mt-3 flex flex-col gap-1 ps-6 text-sm leading-5 text-secondary",
                        children: m
                    }), u[36] = m, u[37] = d) : d = u[37], u[38] !== o || u[39] !== d ? (c = (0, n.jsxs)("li", {
                        className: "border-b border-default py-4 last:border-b-0",
                        children: [o, d]
                    }), u[38] = o, u[39] = d, u[40] = c) : c = u[40], c
                },
                SourceRow: V,
                Sources: function(e) {
                    let a, t, l, i, s, o, d = (0, r.c)(17),
                        {
                            children: c,
                            getKey: u,
                            label: m,
                            onShowAll: p,
                            sources: f
                        } = e;
                    if (d[0] !== c || d[1] !== u || d[2] !== f) {
                        let e;
                        d[4] !== c || d[5] !== u ? (e = e => (0, n.jsx)("div", {
                            role: "listitem",
                            children: c(e)
                        }, u(e)), d[4] = c, d[5] = u, d[6] = e) : e = d[6], a = f.slice(0, 3).map(e), d[0] = c, d[1] = u, d[2] = f, d[3] = a
                    } else a = d[3];
                    return d[7] !== m || d[8] !== a ? (t = (0, n.jsx)(S.i, {
                        "aria-label": m,
                        role: "list",
                        children: a
                    }), d[7] = m, d[8] = a, d[9] = t) : t = d[9], d[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(S.k, {
                        children: (0, n.jsx)(B, {})
                    }), d[10] = l) : l = d[10], d[11] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(S.j, {
                        children: (0, n.jsx)(A.a, {
                            id: "codex.localConversation.sources.showAll",
                            defaultMessage: "View all"
                        })
                    }), d[11] = i) : i = d[11], d[12] !== p ? (s = (0, n.jsxs)(S.h, {
                        interaction: "foreground",
                        onClick: p,
                        tone: "conversation-summary",
                        children: [l, i]
                    }), d[12] = p, d[13] = s) : s = d[13], d[14] !== t || d[15] !== s ? (o = (0, n.jsxs)(n.Fragment, {
                        children: [t, s]
                    }), d[14] = t, d[15] = s, d[16] = o) : o = d[16], o
                },
                SourcesSidePanel: function(e) {
                    let a, t = (0, r.c)(2),
                        {
                            children: l
                        } = e;
                    return t[0] !== l ? (a = (0, n.jsx)("div", {
                        className: "h-full min-h-0 overflow-y-auto bg-surface",
                        children: l
                    }), t[0] = l, t[1] = a) : a = t[1], a
                },
                SourcesSidePanelList: function(e) {
                    let a, t = (0, r.c)(3),
                        {
                            children: l,
                            label: i
                        } = e;
                    return t[0] !== l || t[1] !== i ? (a = (0, n.jsx)("ul", {
                        "aria-label": i,
                        className: "flex flex-col px-4",
                        children: l
                    }), t[0] = l, t[1] = i, t[2] = a) : a = t[2], a
                },
                SourcesViewport: function(e) {
                    let a, t, l, s, o = (0, r.c)(8);
                    return o[0] !== e ? ({
                        className: a,
                        ...t
                    } = e, o[0] = e, o[1] = a, o[2] = t) : (a = o[1], t = o[2]), o[3] !== a ? (l = (0, i.b)("vertical-scroll-fade-mask -mx-2 max-h-52 overflow-x-hidden overflow-y-auto overscroll-contain px-2", a), o[3] = a, o[4] = l) : l = o[4], o[5] !== t || o[6] !== l ? (s = (0, n.jsx)("div", {
                        ...t,
                        className: l
                    }), o[5] = t, o[6] = l, o[7] = s) : s = o[7], s
                }
            };

        function W(e) {
            let a, t = (0, r.c)(2);
            t[0] !== e ? (a = void 0 === e ? {} : e, t[0] = e, t[1] = a) : a = t[1];
            let {
                afterAnimation: n
            } = a, {
                isVisible: l,
                isAnimating: i
            } = (0, u.useContext)(M.a);
            return l && (!(void 0 !== n && n) || !i)
        }
    }),
    KWzM: (function(e, a, t) {
        t("V8uZ"), t.d(a, {}, {
            a: {
                type: "spring",
                duration: .3,
                bounce: .01
            },
            b: {
                visible: {
                    opacity: 1,
                    transform: "translateX(0%)"
                },
                hidden: {
                    opacity: 0,
                    transform: "translateX(100%)"
                }
            }
        })
    })
};