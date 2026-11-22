export const __rspack_esm_ids = [499790];
export const __webpack_modules__ = {
    y0pT: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ty1V"),
            g = c("on57");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i, j, k, l, m = (0, e.c)(13);
                return m[0] !== a ? ({
                    className: c,
                    children: b,
                    ...h
                } = a, m[0] = a, m[1] = b, m[2] = c, m[3] = h) : (b = m[1], c = m[2], h = m[3]), m[4] !== c ? (i = (0, g.b)("relative min-h-0 overflow-hidden", c), m[4] = c, m[5] = i) : i = m[5], m[6] !== b || m[7] !== h ? (j = (0, d.jsx)(f.d, {
                    className: "size-full overscroll-contain",
                    tabIndex: 0,
                    ...h,
                    children: b
                }), m[6] = b, m[7] = h, m[8] = j) : j = m[8], m[9] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, d.jsx)(f.b, {
                    className: "flex w-2 touch-none p-0.5 select-none",
                    orientation: "vertical",
                    children: (0, d.jsx)(f.c, {
                        className: "relative flex-1 rounded-full bg-token-scrollbar-slider-background hover:bg-token-scrollbar-slider-hover-background active:bg-token-scrollbar-slider-active-background"
                    })
                }), m[9] = k) : k = m[9], m[10] !== i || m[11] !== j ? (l = (0, d.jsxs)(f.a, {
                    className: i,
                    type: "hover",
                    children: [j, k]
                }), m[10] = i, m[11] = j, m[12] = l) : l = m[12], l
            }
        })
    }),
    BWrV: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("KUdL"),
            h = c.n(g),
            i = c("zd8w"),
            j = c("oyxz"),
            k = c("Sm6l"),
            l = c("HOLv"),
            m = c("GzOO"),
            n = c("MIZk"),
            o = c("ZAU2"),
            p = c("ydi1");

        function q(a, b) {
            let {
                key: c
            } = a;
            return [c, b]
        }

        function r(a) {
            let {
                item: b
            } = a;
            return b
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, s, t, u, v, w, x, y, z, A, B = (0, e.c)(80),
                    {
                        children: C,
                        empty: D,
                        getKey: E,
                        getNewItemPosition: F,
                        isLoadingMore: G,
                        items: H,
                        listAriaLabel: I,
                        listClassName: J,
                        onVisibleItemsChange: K,
                        onLoadMore: L,
                        paginationButtonClassName: M,
                        presentation: N,
                        preserveExpandedOrder: O,
                        renderFooter: P,
                        renderPagination: Q,
                        visibleItemIncrement: R,
                        visibleItemLimit: S
                    } = a,
                    T = void 0 !== G && G,
                    U = void 0 === N ? "summary" : N,
                    V = void 0 !== O && O,
                    W = void 0 === S ? 6 : S,
                    {
                        analytics: X
                    } = (0, i.useContext)(o.a),
                    [Y, Z] = (0, i.useState)(W),
                    [$, _] = (0, i.useState)(null);
                if (B[0] !== $ || B[1] !== E || B[2] !== F || B[3] !== H || B[4] !== V || B[5] !== Y) {
                    if (b = H, V && null != $) {
                        let a, c;
                        B[7] !== E ? (a = (a, b) => ({
                            item: a,
                            key: E(a, b)
                        }), B[7] = E, B[8] = a) : a = B[8], B[9] !== $ || B[10] !== F ? (c = a => {
                            let {
                                item: b,
                                key: c
                            } = a;
                            return $.get(c) ?? (F?.(b) === "end" ? 1 / 0 : -1)
                        }, B[9] = $, B[10] = F, B[11] = c) : c = B[11];
                        let d = h()(H.map(a), c);
                        if (b = d.map(r), d.length !== $.size || d.some(a => {
                                let {
                                    key: b
                                } = a;
                                return !$.has(b)
                            })) {
                            let a;
                            _(new Map(d.map(q))), B[12] !== $ || B[13] !== Y ? (a = a => {
                                let {
                                    key: b
                                } = a;
                                return ($.get(b) ?? 1 / 0) < Y
                            }, B[12] = $, B[13] = Y, B[14] = a) : a = B[14], Z(Math.max(Y, d.findLastIndex(a) + 1))
                        }
                    }
                    B[0] = $, B[1] = E, B[2] = F, B[3] = H, B[4] = V, B[5] = Y, B[6] = b
                } else b = B[6];
                B[15] !== b || B[16] !== Y ? (c = b.slice(0, Y), B[15] = b, B[16] = Y, B[17] = c) : c = B[17];
                let aa = c;
                if (B[18] !== K || B[19] !== aa ? (g = () => {
                        K?.(aa)
                    }, s = [K, aa], B[18] = K, B[19] = aa, B[20] = g, B[21] = s) : (g = B[20], s = B[21]), (0, i.useEffect)(g, s), 0 === H.length && null == L) return D ?? null;
                let ab = H.length > W || null != L,
                    ac = H.length - aa.length,
                    ad = 0 === ac && null == L,
                    ae = R ?? 50,
                    af = null == L ? Math.min(ac, ae) : ae;
                B[22] !== X || B[23] !== E || B[24] !== ac || B[25] !== ad || B[26] !== T || B[27] !== H.length || B[28] !== L || B[29] !== b || B[30] !== V || B[31] !== ae || B[32] !== W ? (t = () => {
                    !T && ((0, o.b)(X, ad ? "show_less" : "show_more"), V && _(ad ? null : new Map(b.map((a, b) => [E(a, b), b]))), Z(a => ad ? W : null == L ? Math.min(H.length, a + ae) : a + ae), ac < ae && L?.())
                }, B[22] = X, B[23] = E, B[24] = ac, B[25] = ad, B[26] = T, B[27] = H.length, B[28] = L, B[29] = b, B[30] = V, B[31] = ae, B[32] = W, B[33] = t) : t = B[33];
                let ag = t;
                B[34] !== C || B[35] !== E || B[36] !== I || B[37] !== J || B[38] !== aa ? (u = null == I ? (0, d.jsx)(n.i, {
                    className: J,
                    children: aa.map((a, b) => (0, d.jsx)(i.Fragment, {
                        children: C(a, b)
                    }, E(a, b)))
                }) : (0, d.jsx)(n.i, {
                    "aria-label": I,
                    className: J,
                    role: "list",
                    children: aa.map((a, b) => (0, d.jsx)("div", {
                        role: "listitem",
                        children: C(a, b)
                    }, E(a, b)))
                }), B[34] = C, B[35] = E, B[36] = I, B[37] = J, B[38] = aa, B[39] = u) : u = B[39];
                let ah = u;
                return B[40] !== P || B[41] !== aa ? (v = P?.(aa), B[40] = P, B[41] = aa, B[42] = v) : v = B[42], B[43] !== ab || B[44] !== ad || B[45] !== T || B[46] !== af || B[47] !== Q || B[48] !== ag ? (w = ab && null != Q ? Q({
                    nextRevealCount: af,
                    isExpanded: ad,
                    isLoadingMore: T,
                    onToggle: ag
                }) : null, B[43] = ab, B[44] = ad, B[45] = T, B[46] = af, B[47] = Q, B[48] = ag, B[49] = w) : w = B[49], B[50] !== ab || B[51] !== ad || B[52] !== T || B[53] !== U || B[54] !== Q || B[55] !== ag ? (x = ab && null == Q && "plain" === U ? (0, d.jsx)(m.b, {
                    children: (0, d.jsx)(m.a, {
                        alignment: "content",
                        disabled: T,
                        onClick: ag,
                        children: ad ? (0, d.jsx)(j.a, {
                            id: "sidebarElectron.showLess",
                            defaultMessage: "Show less"
                        }) : (0, d.jsx)(j.a, {
                            id: "sidebarElectron.showMore",
                            defaultMessage: "Show more"
                        })
                    })
                }) : null, B[50] = ab, B[51] = ad, B[52] = T, B[53] = U, B[54] = Q, B[55] = ag, B[56] = x) : x = B[56], B[57] !== ab || B[58] !== ad || B[59] !== T || B[60] !== U || B[61] !== Q || B[62] !== ag ? (y = ab && null == Q && "card" === U ? (0, d.jsxs)(n.h, {
                    disabled: T,
                    onClick: ag,
                    children: [(0, d.jsx)(n.k, {
                        variant: "custom",
                        children: (0, d.jsx)(l.a, {
                            asset: p.a
                        })
                    }), (0, d.jsx)(n.j, {
                        children: ad ? (0, d.jsx)(j.a, {
                            id: "codex.summaryPanel.card.showLess",
                            defaultMessage: "Show less"
                        }) : (0, d.jsx)(j.a, {
                            id: "codex.summaryPanel.card.showMore",
                            defaultMessage: "Show more"
                        })
                    })]
                }) : null, B[57] = ab, B[58] = ad, B[59] = T, B[60] = U, B[61] = Q, B[62] = ag, B[63] = y) : y = B[63], B[64] !== ab || B[65] !== ad || B[66] !== T || B[67] !== af || B[68] !== M || B[69] !== U || B[70] !== Q || B[71] !== ag ? (z = ab && null == Q && "summary" === U ? (0, d.jsx)(k.a, {
                    className: (0, f.b)("!px-0 !py-0 text-tertiary hover:text-secondary", M),
                    color: "ghostMuted",
                    size: "default",
                    disabled: T,
                    onClick: ag,
                    children: ad ? (0, d.jsx)(j.a, {
                        id: "codex.localConversation.summaryPanelExpandableList.showLess",
                        defaultMessage: "Show less"
                    }) : (0, d.jsx)(j.a, {
                        id: "codex.localConversation.summaryPanelExpandableList.showMore",
                        defaultMessage: "Show {count, number} more",
                        values: {
                            count: af
                        }
                    })
                }) : null, B[64] = ab, B[65] = ad, B[66] = T, B[67] = af, B[68] = M, B[69] = U, B[70] = Q, B[71] = ag, B[72] = z) : z = B[72], B[73] !== ah || B[74] !== v || B[75] !== w || B[76] !== x || B[77] !== y || B[78] !== z ? (A = (0, d.jsxs)(d.Fragment, {
                    children: [ah, v, w, x, y, z]
                }), B[73] = ah, B[74] = v, B[75] = w, B[76] = x, B[77] = y, B[78] = z, B[79] = A) : A = B[79], A
            }
        })
    }),
    MIZk: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("zd8w"),
            i = c("oyxz"),
            j = c("Sm6l"),
            k = c("ZtSy"),
            l = c("bf6R"),
            m = c("yf2D");
        let n = "group group/summary-panel-item relative isolate flex min-h-token-button-composer group-data-[summary-panel-density=compact]/summary-panel:min-h-7 w-full min-w-0 items-center data-[multiline=true]:items-start gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 rounded-sm border-0 bg-transparent px-0 py-1 text-start group-data-[summary-panel-variant=dynamic-isle]/summary-panel:min-h-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row group-data-[variant=card]/summary-card:min-h-10 group-data-[variant=card]/summary-card:gap-3 group-data-[variant=card]/summary-card:rounded-none group-data-[variant=card]/summary-card:px-3 group-data-[variant=card]/summary-card:py-2 group-data-[variant=card]/summary-card:after:pointer-events-none group-data-[variant=card]/summary-card:after:absolute group-data-[variant=card]/summary-card:after:end-0 group-data-[variant=card]/summary-card:after:start-10 group-data-[variant=card]/summary-card:after:top-full group-data-[variant=card]/summary-card:after:h-px group-data-[variant=card]/summary-card:after:bg-border",
            o = "cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-secondary-ghost-hover group-data-[variant=card]/summary-card:before:inset-x-0 group-data-[variant=card]/summary-card:before:rounded-none",
            p = {
                background: o,
                foreground: "cursor-interaction hover:text-default"
            },
            q = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
            r = "icon-sm flex items-center justify-center browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&_svg]:size-full",
            s = {
                "conversation-summary": "text-text/40",
                critical: "text-chart-red",
                default: "text-default",
                muted: "text-secondary",
                tertiary: "text-tertiary"
            },
            t = {
                intrinsic: null,
                custom: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                glyph: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                preview: "icon-sm overflow-hidden rounded-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:[&>svg]:size-full",
                status: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                thumbnail: null
            },
            u = {
                intrinsic: null,
                custom: null,
                glyph: "icon-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&>*]:size-full [&_svg]:size-full",
                preview: null,
                status: "icon-xs [&>*]:size-full [&_svg]:size-full",
                thumbnail: "relative size-12 overflow-hidden rounded-xl bg-surface-secondary text-default"
            },
            v = {
                critical: "text-chart-red",
                default: "text-default",
                muted: "text-tertiary"
            },
            w = {
                "action-preview": "min-w-token-button-composer justify-end overflow-hidden text-sm group-focus-within/summary-panel-item:w-token-button-composer group-hover/summary-panel-item:w-token-button-composer group-has-[[aria-expanded=true]]/summary-panel-item:w-token-button-composer",
                icon: "icon-xs [&>*]:size-full [&_svg]:size-full",
                "section-status": "-me-1 w-5 justify-center empty:hidden group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=default]/summary-panel:me-0",
                text: "text-sm",
                thumbnail: "relative size-10 justify-center overflow-hidden rounded-xl bg-surface-secondary"
            };

        function x(a) {
            let b, c, f, h, i, j, k, l, m, n, o = (0, e.c)(22);
            o[0] !== a ? ({
                children: b,
                className: c,
                tone: h,
                truncate: i,
                variant: j,
                visibility: k,
                ...f
            } = a, o[0] = a, o[1] = b, o[2] = c, o[3] = f, o[4] = h, o[5] = i, o[6] = j, o[7] = k) : (b = o[1], c = o[2], f = o[3], h = o[4], i = o[5], j = o[6], k = o[7]);
            let p = void 0 !== i && i,
                q = void 0 === j ? "text" : j,
                r = void 0 === k ? "always" : k,
                s = p ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
                t = v[void 0 === h ? "muted" : h],
                u = w[q],
                x = "interaction" === r && "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100",
                y = "rest" === r && "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0";
            return o[8] !== c || o[9] !== s || o[10] !== t || o[11] !== u || o[12] !== x || o[13] !== y ? (l = (0, g.b)("flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", s, t, u, x, y, c), o[8] = c, o[9] = s, o[10] = t, o[11] = u, o[12] = x, o[13] = y, o[14] = l) : l = o[14], o[15] !== b || o[16] !== p ? (m = p ? (0, d.jsx)("span", {
                className: "text-fade-truncate",
                children: b
            }) : b, o[15] = b, o[16] = p, o[17] = m) : m = o[17], o[18] !== f || o[19] !== l || o[20] !== m ? (n = (0, d.jsx)("span", {
                ...f,
                className: l,
                "data-slot": "thread-summary-panel-item-meta",
                children: m
            }), o[18] = f, o[19] = l, o[20] = m, o[21] = n) : n = o[21], n
        }

        function y(a) {
            let b, c, h, i, k, l, m, n, o, p, s, t, u = (0, e.c)(24);
            u[0] !== a ? ({
                children: b,
                className: c,
                color: m,
                disableTooltip: h,
                label: i,
                shortcut: l,
                tooltipContent: n,
                ...k
            } = a, u[0] = a, u[1] = b, u[2] = c, u[3] = h, u[4] = i, u[5] = k, u[6] = l, u[7] = m, u[8] = n) : (b = u[1], c = u[2], h = u[3], i = u[4], k = u[5], l = u[6], m = u[7], n = u[8]);
            let v = void 0 === m ? "ghost" : m,
                w = void 0 === n ? i : n;
            return u[9] !== c ? (o = (0, g.b)("size-6", q, c), u[9] = c, u[10] = o) : o = u[10], u[11] !== b ? (p = (0, d.jsx)("span", {
                className: r,
                children: b
            }), u[11] = b, u[12] = p) : p = u[12], u[13] !== v || u[14] !== i || u[15] !== k || u[16] !== o || u[17] !== p ? (s = (0, d.jsx)(j.a, {
                ...k,
                "aria-label": i,
                className: o,
                color: v,
                "data-slot": "thread-summary-panel-icon-button",
                focusRing: "inset",
                size: "icon",
                uniform: !0,
                children: p
            }), u[13] = v, u[14] = i, u[15] = k, u[16] = o, u[17] = p, u[18] = s) : s = u[18], u[19] !== h || u[20] !== l || u[21] !== s || u[22] !== w ? (t = (0, d.jsx)(f.a, {
                disabled: h,
                content: w,
                shortcut: l,
                openDelay: 250,
                children: s
            }), u[19] = h, u[20] = l, u[21] = s, u[22] = w, u[23] = t) : t = u[23], t
        }
        c.d(b, {}, {
            a: y,
            b: function(a) {
                let b, c, f, h, i, j, k, m, p, q, r, t, u = (0, e.c)(26);
                u[0] !== a ? ({
                    children: b,
                    className: c,
                    disabled: i,
                    interactive: j,
                    multiline: k,
                    ref: h,
                    showChevron: m,
                    tone: p,
                    ...f
                } = a, u[0] = a, u[1] = b, u[2] = c, u[3] = f, u[4] = h, u[5] = i, u[6] = j, u[7] = k, u[8] = m, u[9] = p) : (b = u[1], c = u[2], f = u[3], h = u[4], i = u[5], j = u[6], k = u[7], m = u[8], p = u[9]);
                let v = void 0 !== i && i,
                    w = void 0 !== j && j,
                    x = void 0 !== k && k,
                    y = void 0 === m || m,
                    z = v || void 0,
                    A = s[void 0 === p ? "default" : p],
                    B = !v && w && o,
                    C = v && "cursor-not-allowed text-tertiary";
                u[10] !== c || u[11] !== A || u[12] !== B || u[13] !== C ? (q = (0, g.b)(n, A, B, C, c), u[10] = c, u[11] = A, u[12] = B, u[13] = C, u[14] = q) : q = u[14];
                let D = x || void 0;
                return u[15] !== w || u[16] !== y ? (r = w && y && (0, d.jsx)(l.mc, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
                }), u[15] = w, u[16] = y, u[17] = r) : r = u[17], u[18] !== b || u[19] !== f || u[20] !== h || u[21] !== q || u[22] !== D || u[23] !== r || u[24] !== z ? (t = (0, d.jsxs)("div", {
                    ...f,
                    "aria-disabled": z,
                    className: q,
                    "data-slot": "thread-summary-panel-item",
                    "data-multiline": D,
                    ref: h,
                    children: [b, r]
                }), u[18] = b, u[19] = f, u[20] = h, u[21] = q, u[22] = D, u[23] = r, u[24] = z, u[25] = t) : t = u[25], t
            },
            c: function(a) {
                let b, c = (0, e.c)(2);
                return c[0] !== a ? (b = (0, d.jsx)(y, {
                    className: "-me-1.5",
                    ...a
                }), c[0] = a, c[1] = b) : b = c[1], b
            },
            d: function(a) {
                let b, c, h, i, j, k, l, m, n = (0, e.c)(17);
                return n[0] !== a ? ({
                    children: b,
                    className: c,
                    label: h,
                    ...i
                } = a, n[0] = a, n[1] = b, n[2] = c, n[3] = h, n[4] = i) : (b = n[1], c = n[2], h = n[3], i = n[4]), n[5] !== c ? (j = (0, g.b)("-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default", q, c), n[5] = c, n[6] = j) : j = n[6], n[7] !== b ? (k = (0, d.jsx)("span", {
                    className: r,
                    children: b
                }), n[7] = b, n[8] = k) : k = n[8], n[9] !== h || n[10] !== i || n[11] !== j || n[12] !== k ? (l = (0, d.jsx)("a", {
                    ...i,
                    "aria-label": h,
                    className: j,
                    "data-slot": "thread-summary-panel-item-action-link",
                    children: k
                }), n[9] = h, n[10] = i, n[11] = j, n[12] = k, n[13] = l) : l = n[13], n[14] !== h || n[15] !== l ? (m = (0, d.jsx)(f.a, {
                    content: h,
                    openDelay: 250,
                    children: l
                }), n[14] = h, n[15] = l, n[16] = m) : m = n[16], m
            },
            e: function(a) {
                let b, c, f, h, i, j, k, l, m, n, o, p, q, r, s = (0, e.c)(30);
                s[0] !== a ? ({
                    align: k,
                    placement: l,
                    children: b,
                    className: c,
                    visibility: m,
                    onClick: f,
                    onKeyDown: h,
                    onPointerDown: i,
                    ...j
                } = a, s[0] = a, s[1] = b, s[2] = c, s[3] = f, s[4] = h, s[5] = i, s[6] = j, s[7] = k, s[8] = l, s[9] = m) : (b = s[1], c = s[2], f = s[3], h = s[4], i = s[5], j = s[6], k = s[7], l = s[8], m = s[9]);
                let t = void 0 === k ? "content" : k,
                    u = void 0 === l ? "inline" : l,
                    v = void 0 === m ? "always" : m,
                    w = "section-actions" === t && "-me-1.5",
                    x = "preview" === t && "me-2 w-15 justify-center",
                    y = "overlay" === u && "absolute inset-y-0 end-0 my-auto";
                return s[10] !== c || s[11] !== u || s[12] !== w || s[13] !== x || s[14] !== y || s[15] !== v ? (n = (0, g.b)("flex h-5 shrink-0 items-center", w, x, y, "interaction" === v && ["pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100", "inline" === u && "pointer-coarse:pointer-events-auto pointer-coarse:opacity-100"], c), s[10] = c, s[11] = u, s[12] = w, s[13] = x, s[14] = y, s[15] = v, s[16] = n) : n = s[16], s[17] !== f ? (o = a => {
                    a.stopPropagation(), f?.(a)
                }, s[17] = f, s[18] = o) : o = s[18], s[19] !== h ? (p = a => {
                    a.stopPropagation(), h?.(a)
                }, s[19] = h, s[20] = p) : p = s[20], s[21] !== i ? (q = a => {
                    a.stopPropagation(), i?.(a)
                }, s[21] = i, s[22] = q) : q = s[22], s[23] !== b || s[24] !== j || s[25] !== q || s[26] !== n || s[27] !== o || s[28] !== p ? (r = (0, d.jsx)("span", {
                    ...j,
                    className: n,
                    "data-slot": "thread-summary-panel-item-actions",
                    role: "presentation",
                    onClick: o,
                    onKeyDown: p,
                    onPointerDown: q,
                    children: b
                }), s[23] = b, s[24] = j, s[25] = q, s[26] = n, s[27] = o, s[28] = p, s[29] = r) : r = s[29], r
            },
            f: function(a) {
                let b, c, f, h, i, j, k = (0, e.c)(12);
                k[0] !== a ? ({
                    children: b,
                    className: c,
                    type: h,
                    ...f
                } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = f, k[4] = h) : (b = k[1], c = k[2], f = k[3], h = k[4]);
                let l = void 0 === h ? "button" : h;
                return k[5] !== c ? (i = (0, g.b)("flex size-4 cursor-interaction items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring [&>img]:size-4 [&>svg]:size-4", c), k[5] = c, k[6] = i) : i = k[6], k[7] !== b || k[8] !== f || k[9] !== i || k[10] !== l ? (j = (0, d.jsx)("button", {
                    ...f,
                    className: i,
                    "data-slot": "thread-summary-panel-item-avatar-button",
                    type: l,
                    children: b
                }), k[7] = b, k[8] = f, k[9] = i, k[10] = l, k[11] = j) : j = k[11], j
            },
            g: function(a) {
                let b, c, f, h, i, j = (0, e.c)(10);
                return j[0] !== a ? ({
                    children: b,
                    className: c,
                    ...f
                } = a, j[0] = a, j[1] = b, j[2] = c, j[3] = f) : (b = j[1], c = j[2], f = j[3]), j[4] !== c ? (h = (0, g.b)("flex shrink-0 items-center gap-token-button-composer-gap [&_img]:size-4 [&_svg]:size-4", c), j[4] = c, j[5] = h) : h = j[5], j[6] !== b || j[7] !== f || j[8] !== h ? (i = (0, d.jsx)("span", {
                    ...f,
                    className: h,
                    "data-slot": "thread-summary-panel-item-avatar-group",
                    children: b
                }), j[6] = b, j[7] = f, j[8] = h, j[9] = i) : i = j[9], i
            },
            h: function(a) {
                let b, c, f, j, k, m, o, r, t, u, v, w, x, y, z, A, B = (0, e.c)(36);
                B[0] !== a ? ({
                    children: b,
                    className: c,
                    disabled: k,
                    interaction: m,
                    multiline: o,
                    ref: j,
                    showChevron: r,
                    tone: t,
                    type: u,
                    unread: v,
                    ...f
                } = a, B[0] = a, B[1] = b, B[2] = c, B[3] = f, B[4] = j, B[5] = k, B[6] = m, B[7] = o, B[8] = r, B[9] = t, B[10] = u, B[11] = v) : (b = B[1], c = B[2], f = B[3], j = B[4], k = B[5], m = B[6], o = B[7], r = B[8], t = B[9], u = B[10], v = B[11]);
                let C = void 0 !== k && k,
                    D = void 0 === m ? "background" : m,
                    E = void 0 !== o && o,
                    F = void 0 === r || r,
                    G = void 0 === t ? "default" : t,
                    H = void 0 === u ? "button" : u,
                    I = void 0 !== v && v,
                    J = (0, h.useId)();
                B[12] !== f || B[13] !== I || B[14] !== J ? (w = I ? [f["aria-describedby"], J].filter(Boolean).join(" ") : f["aria-describedby"], B[12] = f, B[13] = I, B[14] = J, B[15] = w) : w = B[15];
                let K = w,
                    L = !C && p[D],
                    M = s[G];
                B[16] !== c || B[17] !== M || B[18] !== L ? (x = (0, g.b)(n, L, q, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", M, c), B[16] = c, B[17] = M, B[18] = L, B[19] = x) : x = B[19];
                let N = E || void 0;
                return B[20] !== I || B[21] !== J ? (y = I ? (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)("span", {
                        "aria-hidden": !0,
                        className: "h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    }), (0, d.jsx)("span", {
                        id: J,
                        className: "sr-only",
                        children: (0, d.jsx)(i.a, {
                            id: "sidebar.navItem.unread",
                            defaultMessage: "Unread updates"
                        })
                    })]
                }) : null, B[20] = I, B[21] = J, B[22] = y) : y = B[22], B[23] !== F ? (z = F && (0, d.jsx)(l.mc, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
                }), B[23] = F, B[24] = z) : z = B[24], B[25] !== b || B[26] !== K || B[27] !== C || B[28] !== f || B[29] !== j || B[30] !== x || B[31] !== N || B[32] !== y || B[33] !== z || B[34] !== H ? (A = (0, d.jsxs)("button", {
                    ...f,
                    "aria-describedby": K,
                    className: x,
                    "data-slot": "thread-summary-panel-item-button",
                    "data-multiline": N,
                    disabled: C,
                    ref: j,
                    type: H,
                    children: [b, y, z]
                }), B[25] = b, B[26] = K, B[27] = C, B[28] = f, B[29] = j, B[30] = x, B[31] = N, B[32] = y, B[33] = z, B[34] = H, B[35] = A) : A = B[35], A
            },
            i: function(a) {
                let b, c, f, h, i, j, k = (0, e.c)(12);
                return k[0] !== a ? ({
                    children: b,
                    className: c,
                    density: f,
                    ...h
                } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = f, k[4] = h) : (b = k[1], c = k[2], f = k[3], h = k[4]), k[5] !== c ? (i = (0, g.b)("relative z-10 flex min-w-0 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0 group-data-[variant=card]/summary-card:mx-0 group-data-[variant=card]/summary-card:gap-0 group-data-[variant=card]/summary-card:px-0", "group/summary-row-density", c), k[5] = c, k[6] = i) : i = k[6], k[7] !== b || k[8] !== f || k[9] !== h || k[10] !== i ? (j = (0, d.jsx)("div", {
                    ...h,
                    className: i,
                    "data-slot": "thread-summary-panel-item-group",
                    "data-summary-row-density": f,
                    children: b
                }), k[7] = b, k[8] = f, k[9] = h, k[10] = i, k[11] = j) : j = k[11], j
            },
            j: function(a) {
                let b, c, f, h, i, j, k, l, n, o = (0, e.c)(18);
                o[0] !== a ? ({
                    children: b,
                    className: c,
                    description: f,
                    truncate: i,
                    ...h
                } = a, o[0] = a, o[1] = b, o[2] = c, o[3] = f, o[4] = h, o[5] = i) : (b = o[1], c = o[2], f = o[3], h = o[4], i = o[5]);
                let p = void 0 === i || i;
                o[6] !== c ? (j = (0, g.b)("min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", c), o[6] = c, o[7] = j) : j = o[7], o[8] !== b || o[9] !== p ? (k = p ? (0, d.jsx)(m.a, {
                    animateOnGroupHover: !0,
                    children: b
                }) : b, o[8] = b, o[9] = p, o[10] = k) : k = o[10], o[11] !== h || o[12] !== j || o[13] !== k ? (l = (0, d.jsx)("span", {
                    ...h,
                    className: j,
                    "data-slot": "thread-summary-panel-item-label",
                    children: k
                }), o[11] = h, o[12] = j, o[13] = k, o[14] = l) : l = o[14];
                let q = l;
                return o[15] !== f || o[16] !== q ? (n = null == f ? q : (0, d.jsxs)("span", {
                    className: "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                    children: [q, (0, d.jsx)(x, {
                        children: (0, d.jsx)("span", {
                            className: "text-fade-truncate",
                            children: f
                        })
                    })]
                }), o[15] = f, o[16] = q, o[17] = n) : n = o[17], n
            },
            k: function(a) {
                let b, c, f, h, i, j, k, l = (0, e.c)(15);
                l[0] !== a ? ({
                    children: b,
                    className: c,
                    variant: h,
                    ...f
                } = a, l[0] = a, l[1] = b, l[2] = c, l[3] = f, l[4] = h) : (b = l[1], c = l[2], f = l[3], h = l[4]);
                let m = void 0 === h ? "glyph" : h,
                    n = u[m],
                    o = t[m];
                return l[5] !== c || l[6] !== o ? (i = (0, g.b)("me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4", o, c), l[5] = c, l[6] = o, l[7] = i) : i = l[7], l[8] !== b || l[9] !== n ? (j = null == n ? b : (0, d.jsx)("span", {
                    className: (0, g.b)("flex shrink-0 items-center justify-center", n),
                    children: b
                }), l[8] = b, l[9] = n, l[10] = j) : j = l[10], l[11] !== f || l[12] !== i || l[13] !== j ? (k = (0, d.jsx)("span", {
                    ...f,
                    className: i,
                    "data-slot": "thread-summary-panel-item-leading",
                    children: j
                }), l[11] = f, l[12] = i, l[13] = j, l[14] = k) : k = l[14], k
            },
            l: function(a) {
                let b, c, f, h, i, j = (0, e.c)(10);
                j[0] !== a ? ({
                    className: b,
                    tone: f,
                    ...c
                } = a, j[0] = a, j[1] = b, j[2] = c, j[3] = f) : (b = j[1], c = j[2], f = j[3]);
                let l = s[void 0 === f ? "default" : f];
                return j[4] !== b || j[5] !== l ? (h = (0, g.b)(n, o, q, l, "no-underline", b), j[4] = b, j[5] = l, j[6] = h) : h = j[6], j[7] !== c || j[8] !== h ? (i = (0, d.jsx)(k.a, {
                    ...c,
                    className: h,
                    "data-slot": "thread-summary-panel-item-link"
                }), j[7] = c, j[8] = h, j[9] = i) : i = j[9], i
            },
            m: x,
            n: function(a) {
                let b, c, f, h, i, j, k = (0, e.c)(12);
                k[0] !== a ? ({
                    children: b,
                    className: c,
                    type: h,
                    ...f
                } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = f, k[4] = h) : (b = k[1], c = k[2], f = k[3], h = k[4]);
                let l = void 0 === h ? "button" : h;
                return k[5] !== c ? (i = (0, g.b)("flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 group-data-[variant=card]/summary-card:gap-3 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0", q, c), k[5] = c, k[6] = i) : i = k[6], k[7] !== b || k[8] !== f || k[9] !== i || k[10] !== l ? (j = (0, d.jsx)("button", {
                    ...f,
                    className: i,
                    "data-slot": "thread-summary-panel-item-trigger",
                    type: l,
                    children: b
                }), k[7] = b, k[8] = f, k[9] = i, k[10] = l, k[11] = j) : j = k[11], j
            },
            o: function(a) {
                let b, c, f, h, i, j = (0, e.c)(10);
                return j[0] !== a ? ({
                    children: b,
                    className: c,
                    ...f
                } = a, j[0] = a, j[1] = b, j[2] = c, j[3] = f) : (b = j[1], c = j[2], f = j[3]), j[4] !== c ? (h = (0, g.b)("ms-auto flex items-center gap-0.5", c), j[4] = c, j[5] = h) : h = j[5], j[6] !== b || j[7] !== f || j[8] !== h ? (i = (0, d.jsx)("span", {
                    ...f,
                    className: h,
                    "data-slot": "thread-summary-panel-section-actions",
                    children: b
                }), j[6] = b, j[7] = f, j[8] = h, j[9] = i) : i = j[9], i
            }
        })
    }),
    Nwje: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("suct"),
            h = c("iodE"),
            i = c("IPUh"),
            j = c("V9Lw"),
            k = c.n(j),
            l = c("Q840"),
            m = c("zd8w"),
            n = c("bqtn"),
            o = c("BhsD"),
            p = c("tSEg"),
            q = c("eGPX"),
            r = c("V8uZ"),
            s = c("m5G2"),
            t = c("Nwp9"),
            u = c("MIZk"),
            v = c("ZAU2");
        let w = {
                height: 0,
                opacity: 0,
                marginTop: 0
            },
            x = {
                height: "auto",
                opacity: 1,
                marginTop: 2
            },
            y = (0, t.c)(a => `thread-summary-panel-section-expanded-${a}`, null),
            z = (0, l.v)(p.a, a => "pending");

        function A(a) {
            let b, c, f, g, j, k = (0, e.c)(19),
                {
                    className: l,
                    animateContentResize: n,
                    children: o,
                    collapsible: p,
                    sectionContentClassName: q
                } = a,
                t = void 0 === p || p,
                u = (0, h.a)(),
                [v, y] = (0, m.useState)(null),
                z = !u,
                A = !u,
                B = !!t && w;
            k[0] !== t ? (b = t ? x : {}, k[0] = t, k[1] = b) : b = k[1];
            let C = n ? v ?? "auto" : "auto";
            k[2] !== b || k[3] !== C ? (c = {
                ...b,
                height: C
            }, k[2] = b, k[3] = C, k[4] = c) : c = k[4];
            let D = t ? w : void 0;
            return k[5] !== n ? (f = n ? a => (0, s.a)({
                axis: "height",
                target: a,
                onChange: a => {
                    let {
                        height: b
                    } = a;
                    return y(b)
                }
            }) : void 0, k[5] = n, k[6] = f) : f = k[6], k[7] !== o || k[8] !== q || k[9] !== f ? (g = (0, d.jsx)("div", {
                ref: f,
                className: q,
                children: o
            }), k[7] = o, k[8] = q, k[9] = f, k[10] = g) : g = k[10], k[11] !== l || k[12] !== g || k[13] !== z || k[14] !== A || k[15] !== B || k[16] !== c || k[17] !== D ? (j = (0, d.jsx)(i.a.div, {
                className: l,
                "aria-hidden": z,
                inert: A,
                initial: B,
                animate: c,
                exit: D,
                transition: r.a,
                children: g
            }), k[11] = l, k[12] = g, k[13] = z, k[14] = A, k[15] = B, k[16] = c, k[17] = D, k[18] = j) : j = k[18], j
        }

        function B(a) {
            let b, c, g, h, i, j, k, l = (0, e.c)(35),
                {
                    inset: m,
                    surface: p,
                    mode: q,
                    sectionOptions: r,
                    after: s,
                    children: t,
                    isExpanded: u,
                    onToggle: v,
                    onChange: w,
                    shouldUseReducedMotion: x,
                    titleSuffix: y,
                    collapsedSummary: z
                } = a,
                A = null != r && r.length > 1,
                B = "accordion" === q ? v : void 0;
            l[0] !== t ? (b = (0, d.jsx)("span", {
                className: "truncate",
                children: t
            }), l[0] = t, l[1] = b) : b = l[1];
            let C = u ? null : y;
            l[2] !== A || l[3] !== u || l[4] !== q || l[5] !== x ? (c = ("accordion" === q || A) && (0, d.jsx)(o.a, {
                "aria-hidden": "true",
                className: (0, f.a)("icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100", !x && "transition-transform", u ? "opacity-0" : "opacity-100", u ? "rotate-0" : "-rotate-90")
            }), l[2] = A, l[3] = u, l[4] = q, l[5] = x, l[6] = c) : c = l[6], l[7] !== z || l[8] !== u ? (g = u || null == z ? null : (0, d.jsx)("span", {
                className: "ms-auto flex min-w-0 items-center",
                children: z
            }), l[7] = z, l[8] = u, l[9] = g) : g = l[9], l[10] !== u || l[11] !== B || l[12] !== b || l[13] !== C || l[14] !== c || l[15] !== g ? (h = (0, d.jsxs)("button", {
                "aria-expanded": u,
                className: "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                onClick: B,
                type: "button",
                children: [b, C, c, g]
            }), l[10] = u, l[11] = B, l[12] = b, l[13] = C, l[14] = c, l[15] = g, l[16] = h) : h = l[16];
            let D = h,
                E = D;
            if ("heading" === q) {
                let a;
                l[17] !== t ? (a = (0, d.jsx)("h3", {
                    className: "min-w-0 truncate select-none",
                    children: t
                }), l[17] = t, l[18] = a) : a = l[18], E = a
            } else if ("dropdown" === q && A) {
                let a, b;
                l[19] !== w || l[20] !== r ? (a = r?.map(a => (0, d.jsx)(n.f, {
                    onSelect: () => w?.(a),
                    children: a
                }, a)), l[19] = w, l[20] = r, l[21] = a) : a = l[21], l[22] !== a || l[23] !== D ? (b = (0, d.jsx)(n.a, {
                    triggerButton: D,
                    children: a
                }), l[22] = a, l[23] = D, l[24] = b) : b = l[24], E = b
            }
            let F = "panel" === p ? "bg-[var(--app-shell-panel-background,var(--color-surface))] before:bg-[var(--app-shell-panel-background,var(--color-surface))]" : "bg-surface-elevated-secondary before:bg-surface-elevated-secondary",
                G = m && "ps-5 pe-3.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:ps-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:ps-5";
            return l[25] !== F || l[26] !== G ? (i = (0, f.a)("sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", F, G), l[25] = F, l[26] = G, l[27] = i) : i = l[27], l[28] !== s || l[29] !== q ? (j = null != s ? (0, d.jsx)("div", {
                className: (0, f.a)("relative flex", "heading" === q ? "min-w-0 flex-1" : "shrink-0"),
                children: s
            }) : null, l[28] = s, l[29] = q, l[30] = j) : j = l[30], l[31] !== E || l[32] !== j || l[33] !== i ? (k = (0, d.jsxs)("header", {
                className: i,
                children: [E, j]
            }), l[31] = E, l[32] = j, l[33] = i, l[34] = k) : k = l[34], k
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i, j, n, o, r, s, t, w, x, C, D, E, F = (0, e.c)(103),
                    {
                        autoCollapse: G,
                        animateContentResize: H,
                        sectionKey: I,
                        analyticsControl: J,
                        after: K,
                        children: L,
                        mode: M,
                        ref: N,
                        sectionOptions: O,
                        defaultCollapsed: P,
                        inset: Q,
                        divider: R,
                        surface: S,
                        spacing: T,
                        persistExpansion: U,
                        title: V,
                        titleSuffix: W,
                        collapsedSummary: X,
                        onChange: Y
                    } = a,
                    Z = void 0 !== H && H,
                    $ = void 0 === M ? "accordion" : M,
                    _ = void 0 !== P && P,
                    aa = void 0 === Q || Q,
                    ab = void 0 === S ? "elevated" : S,
                    ac = void 0 === T ? "section" : T,
                    ad = void 0 === U || U,
                    ae = (0, l.y)(p.a),
                    {
                        analytics: af
                    } = (0, m.useContext)(v.a),
                    ag = (0, l.x)(z, I),
                    ah = (0, l.x)(y, I),
                    [ai, aj] = (0, m.useState)(!_),
                    ak = null != G && "canceled" !== ag,
                    al = (!0 !== G || "collapsed" !== ag) && (ad ? ah ?? !_ : ai),
                    am = (0, l.z)(q.c),
                    an = aa ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5" : "px-2";
                F[0] !== an ? (b = (0, f.a)("flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0", an), F[0] = an, F[1] = b) : b = F[1];
                let ao = b;
                if (F[2] !== Z || F[3] !== aa || F[4] !== al || F[5] !== $ || F[6] !== ad || F[7] !== ae || F[8] !== I || F[9] !== ac) {
                    let a;
                    c = (0, f.a)("relative z-0", ("headerless" !== $ || Z) && ("standalone" === ac ? "overflow-clip" : "overflow-hidden"), !aa && "-mx-2"), F[14] !== ad || F[15] !== ae || F[16] !== I ? (a = a => {
                        ad ? ae.set(y, I, a) : aj(a)
                    }, F[14] = ad, F[15] = ae, F[16] = I, F[17] = a) : a = F[17], h = a, i = "headerless" === $ || "heading" === $ || al || "dropdown" === $, j = (0, f.a)(c, "mt-0.5"), F[2] = Z, F[3] = aa, F[4] = al, F[5] = $, F[6] = ad, F[7] = ae, F[8] = I, F[9] = ac, F[10] = c, F[11] = h, F[12] = i, F[13] = j
                } else c = F[10], h = F[11], i = F[12], j = F[13];
                F[18] !== L || F[19] !== ao ? (n = (0, d.jsx)("div", {
                    className: ao,
                    children: L
                }), F[18] = L, F[19] = ao, F[20] = n) : n = F[20], F[21] !== j || F[22] !== n ? (o = (0, d.jsx)("div", {
                    className: j,
                    children: n
                }), F[21] = j, F[22] = n, F[23] = o) : o = F[23];
                let ap = o;
                F[24] !== h ? (r = () => ({
                    collapse: () => h(!1),
                    expand: () => h(!0)
                }), F[24] = h, F[25] = r) : r = F[25], (0, m.useImperativeHandle)(N, r), F[26] !== G || F[27] !== ag || F[28] !== ak || F[29] !== ae || F[30] !== I ? (s = () => {
                    if (!ak) return;
                    if (!G) {
                        "collapsed" === ag && ae.set(z, I, "pending");
                        return
                    }
                    if ("pending" !== ag) return;
                    let a = window.setTimeout(() => {
                        ae.set(z, I, "collapsed")
                    }, 3e4);
                    return () => window.clearTimeout(a)
                }, t = [G, ag, ak, ae, I], F[26] = G, F[27] = ag, F[28] = ak, F[29] = ae, F[30] = I, F[31] = s, F[32] = t) : (s = F[31], t = F[32]), (0, m.useEffect)(s, t), F[33] !== Z || F[34] !== L || F[35] !== ap || F[36] !== c || F[37] !== ao || F[38] !== i || F[39] !== am ? (w = am ? i && ap : (0, d.jsx)(g.a, {
                    initial: !1,
                    children: i && (0, d.jsx)(A, {
                        className: c,
                        animateContentResize: Z,
                        sectionContentClassName: ao,
                        children: L
                    }, "content")
                }), F[33] = Z, F[34] = L, F[35] = ap, F[36] = c, F[37] = ao, F[38] = i, F[39] = am, F[40] = w) : w = F[40];
                let aq = w;
                if ("row" === $) {
                    let a, b, c, e, f = null != L;
                    F[41] !== L || F[42] !== al || F[43] !== h || F[44] !== V ? (a = null == L ? V : (0, d.jsx)(u.n, {
                        "aria-expanded": al,
                        className: "select-none",
                        onClick: () => h(!al),
                        children: V
                    }), F[41] = L, F[42] = al, F[43] = h, F[44] = V, F[45] = a) : a = F[45], F[46] !== K || F[47] !== al ? (b = k()(K) ? K({
                        isExpanded: al
                    }) : K, F[46] = K, F[47] = al, F[48] = b) : b = F[48], F[49] !== f || F[50] !== a || F[51] !== b ? (c = (0, d.jsx)("div", {
                        className: "px-5",
                        children: (0, d.jsxs)(u.b, {
                            interactive: f,
                            children: [a, b]
                        })
                    }), F[49] = f, F[50] = a, F[51] = b, F[52] = c) : c = F[52];
                    let g = null == L ? null : aq;
                    return F[53] !== c || F[54] !== g ? (e = (0, d.jsxs)("section", {
                        className: "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                        children: [c, g]
                    }), F[53] = c, F[54] = g, F[55] = e) : e = F[55], e
                }
                if ("card" === $ || "plain" === $) {
                    let a, b, c, e, g, h = "card" === $ ? "gap-1" : "gap-2";
                    F[56] !== h ? (a = (0, f.a)("flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4", h), F[56] = h, F[57] = a) : a = F[57], F[58] !== K || F[59] !== $ || F[60] !== V ? (b = null != V || null != K ? (0, d.jsxs)("header", {
                        className: (0, f.a)("flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", "card" === $ && "px-1"),
                        children: [null != V ? (0, d.jsx)("h3", {
                            className: "truncate",
                            children: V
                        }) : null, k()(K) ? K({
                            isExpanded: !0
                        }) : K]
                    }) : null, F[58] = K, F[59] = $, F[60] = V, F[61] = b) : b = F[61];
                    let i = "card" === $ ? "group/summary-card overflow-hidden rounded-2xl border border-default" : "flex min-w-0 flex-col",
                        j = "card" === $ ? "card" : void 0;
                    return F[62] !== Z || F[63] !== L || F[64] !== am ? (c = Z && !am ? (0, d.jsx)(A, {
                        className: "overflow-hidden",
                        animateContentResize: !0,
                        collapsible: !1,
                        sectionContentClassName: "",
                        children: L
                    }) : L, F[62] = Z, F[63] = L, F[64] = am, F[65] = c) : c = F[65], F[66] !== i || F[67] !== j || F[68] !== c ? (e = (0, d.jsx)("div", {
                        className: i,
                        "data-variant": j,
                        children: c
                    }), F[66] = i, F[67] = j, F[68] = c, F[69] = e) : e = F[69], F[70] !== a || F[71] !== b || F[72] !== e ? (g = (0, d.jsxs)("section", {
                        className: a,
                        children: [b, e]
                    }), F[70] = a, F[71] = b, F[72] = e, F[73] = g) : g = F[73], g
                }
                let ar = "nested" === ac ? "pt-3" : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
                    as = (void 0 === R || R) && "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
                    at = aa ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4" : "after:inset-x-0",
                    au = "accordion" !== $ || al || "standalone" === ac ? "last:pb-0" : "last:pb-0.5";
                return F[74] !== ar || F[75] !== as || F[76] !== at || F[77] !== au ? (x = (0, f.a)("relative z-0 flex flex-col", ar, as, at, au), F[74] = ar, F[75] = as, F[76] = at, F[77] = au, F[78] = x) : x = F[78], F[79] !== ak || F[80] !== ae || F[81] !== I ? (C = ak ? () => {
                    ae.set(z, I, "canceled")
                } : void 0, F[79] = ak, F[80] = ae, F[81] = I, F[82] = C) : C = F[82], F[83] !== K || F[84] !== af || F[85] !== J || F[86] !== X || F[87] !== aa || F[88] !== al || F[89] !== $ || F[90] !== Y || F[91] !== O || F[92] !== h || F[93] !== am || F[94] !== ab || F[95] !== V || F[96] !== W ? (D = "headerless" !== $ ? (0, d.jsx)(B, {
                    inset: aa,
                    surface: ab,
                    after: k()(K) ? K({
                        isExpanded: al
                    }) : K,
                    sectionOptions: O,
                    mode: $,
                    isExpanded: al,
                    onChange: Y,
                    onToggle: () => {
                        "dropdown" !== $ && (J && (0, v.b)(af, J), h(!al))
                    },
                    shouldUseReducedMotion: am,
                    titleSuffix: W,
                    collapsedSummary: X,
                    children: V
                }) : null, F[83] = K, F[84] = af, F[85] = J, F[86] = X, F[87] = aa, F[88] = al, F[89] = $, F[90] = Y, F[91] = O, F[92] = h, F[93] = am, F[94] = ab, F[95] = V, F[96] = W, F[97] = D) : D = F[97], F[98] !== aq || F[99] !== x || F[100] !== C || F[101] !== D ? (E = (0, d.jsxs)("section", {
                    role: "presentation",
                    className: x,
                    onClick: C,
                    children: [D, aq]
                }), F[98] = aq, F[99] = x, F[100] = C, F[101] = D, F[102] = E) : E = F[102], E
            }
        })
    }),
    ZAU2: (function(a, b, c) {
        var d = c("iRMi"),
            e = c("zd8w"),
            f = c("yGJW");
        let g = (0, e.createContext)({
            fullWidth: !1,
            isVisible: !0,
            isAnimating: !1,
            placement: "floating"
        });
        c.d(b, {}, {
            a: g,
            b: function(a, b) {
                a && (0, f.a)(a.scope, d.CodexThreadSummaryPanelInteraction, {
                    control: b,
                    layout: a.layout,
                    routeKind: a.scope.value.routeKind
                })
            }
        })
    }),
    iS3k: (function(a, b, c) {
        c.d(b, {
            a: () => P,
            b: () => Q
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("ZDhX"),
            g = c("on57"),
            h = c("IPUh"),
            i = c("iodE"),
            j = c("rfA2"),
            k = c("Q840"),
            l = c("zd8w"),
            m = c("v7qY"),
            n = c("Wf1j"),
            o = c("Qgfj"),
            p = c("I7bK"),
            q = c("QcW8");
        c("DUYS");
        var r = c("FHYD"),
            s = c("gbrq"),
            t = c("zjpG"),
            u = c("Sm6l"),
            v = c("rsCP"),
            w = c("HOLv"),
            x = c("y0pT"),
            y = c("UxN3"),
            z = c("eGPX");
        c("V8uZ");
        var A = c("BWrV"),
            B = c("MIZk"),
            C = c("Nwje"),
            D = c("ZAU2"),
            E = c("KWzM"),
            F = c("oyxz"),
            G = c("bf6R"),
            H = a => (0, d.jsx)("svg", {
                width: 20,
                height: 20,
                viewBox: "0 0 20 20",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ...a,
                children: (0, d.jsx)("path", {
                    d: "M16.6345 5.83331C16.6345 4.81987 15.813 3.99835 14.7996 3.99835C13.7863 3.99855 12.9646 4.81999 12.9646 5.83331C12.9646 6.84663 13.7863 7.66808 14.7996 7.66827C15.813 7.66827 16.6345 6.84676 16.6345 5.83331ZM3.36499 14.1663C3.36499 15.1798 4.18651 16.0013 5.19995 16.0013C6.21339 16.0013 7.03491 15.1798 7.03491 14.1663C7.03471 13.153 6.21327 12.3314 5.19995 12.3314C4.18663 12.3314 3.36519 13.153 3.36499 14.1663ZM17.9646 5.83331C17.9646 7.58129 16.5475 8.99835 14.7996 8.99835C13.2785 8.99818 12.0078 7.92497 11.7039 6.49445L11.6667 6.49835H11.3347C10.5362 6.49835 9.96426 6.49872 9.54565 6.52081C9.21098 6.53848 9.04089 6.56873 8.96069 6.59113L8.90796 6.60968C8.41777 6.86301 8.2248 7.46527 8.47632 7.95636L8.50757 8.00323C8.55968 8.068 8.68066 8.19148 8.94312 8.4007C9.27097 8.66203 9.73648 8.99501 10.3865 9.45929L11.239 10.0716C11.489 10.2539 11.7044 10.4155 11.8855 10.5599C12.2255 10.8309 12.5425 11.1144 12.7078 11.4368L12.8054 11.6536C13.206 12.6785 12.8306 13.8502 11.9089 14.4515L11.7029 14.5716C11.381 14.7379 10.9584 14.785 10.5242 14.8079C10.0619 14.8323 9.44766 14.8314 8.66479 14.8314H8.33276C8.31992 14.8314 8.30734 14.8282 8.29468 14.8275C7.9907 16.2581 6.72124 17.3314 5.19995 17.3314C3.45197 17.3314 2.03491 15.9143 2.03491 14.1663C2.03511 12.4185 3.45209 11.0013 5.19995 11.0013C6.72066 11.0013 7.99008 12.0743 8.29468 13.5042C8.30731 13.5035 8.31995 13.5013 8.33276 13.5013H8.66479C9.46362 13.5013 10.0362 13.5019 10.4548 13.4798C10.9013 13.4562 11.0544 13.4096 11.0925 13.39L11.1804 13.3382C11.5766 13.0799 11.7385 12.5765 11.5662 12.136L11.5242 12.0433C11.5046 12.0051 11.4062 11.8788 11.0564 11.5999C10.8925 11.4693 10.6943 11.3206 10.4558 11.1468L9.61304 10.5413C8.97593 10.0862 8.47599 9.72927 8.11401 9.44073C7.81659 9.20364 7.53702 8.95681 7.36108 8.68292L7.29272 8.56378C6.70695 7.42066 7.15568 6.0189 8.29663 5.42902L8.42163 5.3714C8.7241 5.25059 9.09524 5.21275 9.47534 5.19269C9.93756 5.16829 10.5518 5.16827 11.3347 5.16827H11.6667L11.7039 5.1712C12.0082 3.74114 13.2788 2.66845 14.7996 2.66827C16.5475 2.66827 17.9646 4.08533 17.9646 5.83331Z",
                    fill: "currentColor"
                })
            });

        function I(a) {
            let b, c = (0, e.c)(17);
            if (c[0] !== a) {
                let e, f, g, h, i, {
                        expanded: j,
                        icon: k,
                        label: l,
                        meta: m,
                        multiline: n,
                        ...o
                    } = a,
                    p = void 0 !== n && n;
                c[2] !== k ? (e = (0, d.jsx)(B.k, {
                    variant: "custom",
                    children: k
                }), c[2] = k, c[3] = e) : e = c[3];
                let q = p ? "line-clamp-2" : void 0,
                    r = !p;
                c[4] !== l || c[5] !== q || c[6] !== r ? (f = (0, d.jsx)(B.j, {
                    className: q,
                    truncate: r,
                    children: l
                }), c[4] = l, c[5] = q, c[6] = r, c[7] = f) : f = c[7], c[8] !== m ? (g = null == m ? null : (0, d.jsx)(B.m, {
                    children: m
                }), c[8] = m, c[9] = g) : g = c[9], c[10] !== j ? (h = null != j ? (0, d.jsx)(B.m, {
                    visibility: "interaction",
                    children: (0, d.jsx)(G.hc, {
                        className: j ? void 0 : "-rotate-90"
                    })
                }) : null, c[10] = j, c[11] = h) : h = c[11], c[12] !== e || c[13] !== f || c[14] !== g || c[15] !== h ? (i = (0, d.jsxs)(d.Fragment, {
                    children: [e, f, g, h]
                }), c[12] = e, c[13] = f, c[14] = g, c[15] = h, c[16] = i) : i = c[16];
                let s = i;
                b = J({
                    ...o,
                    expanded: j,
                    label: l
                }, s, "summary"), c[0] = a, c[1] = b
            } else b = c[1];
            return b
        }

        function J(a, b, c) {
            let {
                controls: e,
                expanded: f,
                href: g,
                label: h,
                onOpen: i,
                onOpenLink: j,
                requiresConfirmation: k,
                showHoverActions: l
            } = a, m = "summary" === c ? {
                className: "select-none",
                title: h,
                tone: "muted"
            } : {
                title: g
            };
            return null != g ? (0, d.jsx)(B.l, {
                ...m,
                "aria-label": h,
                href: g,
                initiator: "markdown_link_click",
                requiresConfirmation: k,
                onUnmodifiedClick: j,
                showHoverActions: l,
                tooltipContent: l ? g : void 0,
                title: l ? void 0 : m.title,
                children: b
            }) : null != i ? (0, d.jsx)(B.h, {
                ...m,
                "aria-controls": e,
                "aria-expanded": f,
                "aria-label": h,
                onClick: i,
                children: b
            }) : (0, d.jsx)(B.b, {
                ...m,
                children: b
            })
        }
        var K = c("LSqx"),
            L = c("LyCo"),
            M = c("bdOJ");
        let N = h.a.create(x.a),
            O = {
                opacity: 0,
                transform: "translateX(0%)"
            },
            P = {
                Content: function(a) {
                    let b, c, f, i, j, k, m, n, o, p, q, r, s, t, u, w = (0, e.c)(35);
                    w[0] !== a ? ({
                        children: b,
                        className: c,
                        isHidden: m,
                        variant: n,
                        density: o,
                        scrollable: p,
                        scrollClassName: k,
                        contentClassName: f,
                        onScroll: i,
                        ...j
                    } = a, w[0] = a, w[1] = b, w[2] = c, w[3] = f, w[4] = i, w[5] = j, w[6] = k, w[7] = m, w[8] = n, w[9] = o, w[10] = p) : (b = w[1], c = w[2], f = w[3], i = w[4], j = w[5], k = w[6], m = w[7], n = w[8], o = w[9], p = w[10]);
                    let x = void 0 !== m && m,
                        y = void 0 === n ? "summary" : n,
                        z = void 0 === o ? "default" : o,
                        A = void 0 === p || p,
                        {
                            fullWidth: B,
                            isVisible: C,
                            placement: E
                        } = (0, l.useContext)(D.a),
                        F = C && !x,
                        G = (0, l.useRef)(null),
                        H = (0, l.useRef)(0),
                        I = "overlay" === A ? N : h.a.div;
                    w[11] !== F ? (q = () => {
                        if (F && 0 !== H.current && null != G.current) {
                            let a = H.current,
                                b = () => {
                                    null != G.current && (G.current.scrollTop = a)
                                };
                            b();
                            let c = requestAnimationFrame(b);
                            return () => cancelAnimationFrame(c)
                        }
                    }, r = [F], w[11] = F, w[12] = q, w[13] = r) : (q = w[12], r = w[13]), (0, l.useLayoutEffect)(q, r);
                    let J = !A && "isolate",
                        K = B && "bg-surface";
                    w[14] !== c || w[15] !== J || w[16] !== K ? (s = (0, g.b)("group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden", J, K, c), w[14] = c, w[15] = J, w[16] = K, w[17] = s) : s = w[17];
                    let L = B || "docked" === E,
                        M = A ? void 0 : i;
                    return w[18] !== I || w[19] !== b || w[20] !== f || w[21] !== F || w[22] !== i || w[23] !== k || w[24] !== A || w[25] !== y ? (t = A ? (0, d.jsx)(I, {
                        ref: G,
                        className: (0, g.b)("flex h-fit max-h-full min-h-0 min-w-0 flex-col", "overlay" !== A && "overflow-x-hidden overflow-y-auto", k),
                        layoutScroll: !0,
                        onScroll: a => {
                            F && null != G.current && (H.current = a.currentTarget.scrollTop, i?.(a))
                        },
                        children: (0, d.jsx)("div", {
                            className: (0, g.b)("flex flex-col", "summary" === y && "gap-2 py-2.5", f),
                            children: b
                        })
                    }) : b, w[18] = I, w[19] = b, w[20] = f, w[21] = F, w[22] = i, w[23] = k, w[24] = A, w[25] = y, w[26] = t) : t = w[26], w[27] !== z || w[28] !== j || w[29] !== L || w[30] !== M || w[31] !== t || w[32] !== s || w[33] !== y ? (u = (0, d.jsx)(v.c, {
                        className: s,
                        "data-summary-panel-variant": y,
                        "data-summary-panel-density": z,
                        unstyled: L,
                        variant: "island",
                        ...j,
                        onScroll: M,
                        children: t
                    }), w[27] = z, w[28] = j, w[29] = L, w[30] = M, w[31] = t, w[32] = s, w[33] = y, w[34] = u) : u = w[34], u
                },
                HeaderButton: function(a) {
                    let b, c, h, i, j, k, l, m, o, p, q, r, s, t = (0, e.c)(31);
                    t[0] !== a ? ({
                        analytics: b,
                        label: k,
                        onClick: h,
                        pressed: i,
                        shortcut: j,
                        size: l,
                        ...c
                    } = a, t[0] = a, t[1] = b, t[2] = c, t[3] = h, t[4] = i, t[5] = j, t[6] = k, t[7] = l) : (b = t[1], c = t[2], h = t[3], i = t[4], j = t[5], k = t[6], l = t[7]);
                    let v = void 0 === l ? "toolbar" : l,
                        x = (0, n.a)();
                    t[8] !== x || t[9] !== k ? (m = k ?? x.formatMessage({
                        id: "localConversation.summaryPanel.toggle",
                        defaultMessage: "Summary"
                    }), t[8] = x, t[9] = k, t[10] = m) : m = t[10];
                    let z = m;
                    return t[11] !== b || t[12] !== h || t[13] !== i ? (o = a => {
                        (0, D.b)(b, i ? "close_panel" : "open_panel"), h?.(a)
                    }, t[11] = b, t[12] = h, t[13] = i, t[14] = o) : o = t[14], t[15] !== c.className ? (p = (0, g.b)("conversation-header-control", c.className), t[15] = c.className, t[16] = p) : p = t[16], t[17] !== v ? (q = "iconMd" === v ? (0, d.jsx)(w.a, {
                        "aria-hidden": !1,
                        asset: K.a
                    }) : (0, d.jsx)(y.b, {
                        "aria-hidden": !1,
                        icon: {
                            assets: {
                                16: L.a,
                                20: M.a
                            }
                        }
                    }), t[17] = v, t[18] = q) : q = t[18], t[19] !== c || t[20] !== z || t[21] !== i || t[22] !== v || t[23] !== o || t[24] !== p || t[25] !== q ? (r = (0, d.jsx)(u.a, {
                        "data-thread-summary-panel-toggle": !0,
                        size: v,
                        uniform: !0,
                        color: "ghostActive",
                        "aria-label": z,
                        "aria-pressed": i,
                        onClick: o,
                        ...c,
                        className: p,
                        children: q
                    }), t[19] = c, t[20] = z, t[21] = i, t[22] = v, t[23] = o, t[24] = p, t[25] = q, t[26] = r) : r = t[26], t[27] !== z || t[28] !== j || t[29] !== r ? (s = (0, d.jsx)(f.a, {
                        content: z,
                        shortcut: j,
                        openDelay: 250,
                        children: r
                    }), t[27] = z, t[28] = j, t[29] = r, t[30] = s) : s = t[30], s
                },
                IconButton: B.a,
                Item: B.b,
                ItemActionButton: B.c,
                ItemActionLink: B.d,
                ItemActions: B.e,
                ItemAvatarGroup: B.g,
                ItemAvatarButton: B.f,
                ItemButton: B.h,
                ItemGroup: B.i,
                ItemLabel: B.j,
                ItemLeading: B.k,
                ItemMeta: B.m,
                ItemTrigger: B.n,
                List: A.a,
                PopoverContent: function(a) {
                    let b, c, f, g, h = (0, e.c)(9),
                        {
                            analytics: i,
                            children: j,
                            isPIPObstacle: k
                        } = a,
                        l = void 0 !== k && k ? "thread-summary-panel-popover" : void 0;
                    return h[0] === Symbol.for("react.memo_cache_sentinel") ? (b = {
                        width: 300
                    }, h[0] = b) : b = h[0], h[1] !== i ? (c = {
                        analytics: i,
                        fullWidth: !1,
                        isVisible: !0,
                        isAnimating: !1,
                        placement: "floating"
                    }, h[1] = i, h[2] = c) : c = h[2], h[3] !== j || h[4] !== c ? (f = (0, d.jsx)(D.a.Provider, {
                        value: c,
                        children: j
                    }), h[3] = j, h[4] = c, h[5] = f) : f = h[5], h[6] !== l || h[7] !== f ? (g = (0, d.jsx)("div", {
                        "data-pip-obstacle": l,
                        className: "flex max-h-(--thread-summary-panel-available-height) flex-col gap-3 [--thread-summary-panel-available-height:min(var(--radix-popover-content-available-height),calc(100vh-16px))]",
                        style: b,
                        children: f
                    }), h[6] = l, h[7] = f, h[8] = g) : g = h[8], g
                },
                Root: function(a) {
                    let b, c, f, o, t, u, v, w, x, y, A, B, C, F, G, H, I, J, K, L, M, N, P, Q, R, S, T, U = (0, e.c)(123),
                        {
                            analytics: V,
                            animateOnExit: W,
                            animateOnMount: X,
                            children: Y,
                            fillHeight: Z,
                            fullWidth: $,
                            fullWidthTransition: _,
                            isPIPObstacle: aa,
                            maxHeight: ab,
                            placement: ac,
                            portalContainer: ad,
                            reserveToolbarSpace: ae,
                            resizer: af,
                            shouldHideInlineImmediately: ag,
                            shouldShow: ah,
                            width: ai
                        } = a,
                        aj = void 0 === W || W,
                        ak = void 0 !== X && X,
                        al = void 0 !== Z && Z,
                        am = void 0 !== $ && $,
                        an = void 0 === _ ? "default" : _,
                        ao = void 0 === ac ? "floating" : ac,
                        ap = void 0 !== ae && ae,
                        aq = void 0 === ai ? 300 : ai,
                        ar = (0, n.a)(),
                        [as, at] = (0, l.useState)(null),
                        au = null == as ? null : as / 2,
                        av = (0, k.z)(q.A),
                        aw = (0, k.z)(s.c),
                        ax = (0, k.z)(z.c),
                        ay = (0, i.a)(),
                        az = ah && ay && !ag,
                        aA = (0, j.a)(),
                        [aB, aC] = (0, l.useState)(ah),
                        [aD, aE] = (0, l.useState)(ak && !ax && !av),
                        aF = "docked" === ao ? O : E.b.hidden,
                        aG = ah ? E.b.visible : aF,
                        aH = (0, l.useRef)(null),
                        aI = (0, l.useRef)(av),
                        aJ = (0, l.useRef)(aw),
                        aK = (0, l.useRef)(!1),
                        aL = (0, l.useRef)(ak);
                    if (ax || av) {
                        let a;
                        U[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                            duration: 0
                        }, U[0] = a) : a = U[0], b = a
                    } else b = "docked" === ao ? p.b : E.a;
                    U[1] !== an ? (c = "relaxed" === an ? {
                        ...p.a,
                        duration: .3
                    } : p.a, U[1] = an, U[2] = c) : c = U[2];
                    let aM = c;
                    U[3] !== av || U[4] !== ay || U[5] !== aw || U[6] !== ag || U[7] !== ax || U[8] !== aA || U[9] !== aG ? (f = () => {
                        if (!ay) return;
                        aK.current || queueMicrotask(() => {
                            aK.current = !0
                        });
                        let a = aI.current !== av,
                            b = aJ.current !== aw,
                            c = aH.current !== aG;
                        aH.current = aG, aI.current = av, aJ.current = aw, aA.stop(), !aK.current && !aL.current || a || b || !c && aK.current || ag || ax ? (aA.set(aG), aC(aG.opacity > 0), aE(!1)) : aA.start(aG)
                    }, U[3] = av, U[4] = ay, U[5] = aw, U[6] = ag, U[7] = ax, U[8] = aA, U[9] = aG, U[10] = f) : f = U[10], U[11] !== av || U[12] !== ay || U[13] !== aw || U[14] !== ad || U[15] !== ag || U[16] !== ax || U[17] !== aA || U[18] !== aG ? (o = [av, ay, aw, ad, ag, ax, aA, aG], U[11] = av, U[12] = ay, U[13] = aw, U[14] = ad, U[15] = ag, U[16] = ax, U[17] = aA, U[18] = aG, U[19] = o) : o = U[19], (0, l.useLayoutEffect)(f, o), U[20] !== ao || U[21] !== af ? (t = a => {
                        let b = a?.parentElement;
                        if (null == af || "docked" !== ao || null == b) return;
                        let c = () => at(b.clientWidth);
                        c();
                        let d = new ResizeObserver(c);
                        return d.observe(b), () => d.disconnect()
                    }, U[20] = ao, U[21] = af, U[22] = t) : t = U[22];
                    let aN = "docked" === ao ? "relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]" : "absolute";
                    U[23] !== am || U[24] !== ao || U[25] !== ad || U[26] !== ap || U[27] !== aN ? (u = (0, g.b)("pointer-events-none z-40", aN, "floating" === ao && [null != ad && ["portalLayout-_LSX2_", ap && "belowToolbar-VYFp43"], null == ad && (am ? "inset-0" : "inset-x-0 top-(--thread-floating-content-top-inset) bottom-(--thread-floating-content-bottom-inset) mt-(--thread-floating-actions-clearance) [container-type:size]")]), U[23] = am, U[24] = ao, U[25] = ad, U[26] = ap, U[27] = aN, U[28] = u) : u = U[28];
                    let aO = !!ap && "floating" === ao && null == ad && !am || void 0;
                    U[29] !== ab ? (v = {
                        maxHeight: ab
                    }, U[29] = ab, U[30] = v) : v = U[30];
                    let aP = !az,
                        aQ = !az;
                    U[31] !== ak || U[32] !== ao || U[33] !== ax ? (w = "docked" === ao && !!ak && !ax && {
                        width: 0
                    }, U[31] = ak, U[32] = ao, U[33] = ax, U[34] = w) : w = U[34], U[35] !== am || U[36] !== ao || U[37] !== ad || U[38] !== ah || U[39] !== aq ? (x = "docked" === ao ? {
                        width: ah ? "auto" : 0
                    } : {
                        "--thread-floating-panel-full-width-progress": +!!am,
                        width: null == ad ? "auto" : `calc(min(${aq}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`
                    }, U[35] = am, U[36] = ao, U[37] = ad, U[38] = ah, U[39] = aq, U[40] = x) : x = U[40], U[41] !== aj || U[42] !== ao ? (y = aj && "docked" === ao ? {
                        width: 0
                    } : void 0, U[41] = aj, U[42] = ao, U[43] = y) : y = U[43];
                    let aR = "docked" === ao || ax ? b : aM,
                        aS = "docked" === ao ? "w-max max-w-[50cqw]" : "max-w-full",
                        aT = "floating" === ao && null == ad && !am && "w-fit pe-2 ltr:ms-auto rtl:me-auto",
                        aU = al && "h-full",
                        aV = (null != ad || am) && "w-full";
                    U[44] !== aS || U[45] !== aT || U[46] !== aU || U[47] !== aV ? (A = (0, g.b)("relative isolate flex max-h-full", aS, aT, aU, aV), U[44] = aS, U[45] = aT, U[46] = aU, U[47] = aV, U[48] = A) : A = U[48];
                    let aW = az && (void 0 === aa || aa) ? "thread-summary-panel" : void 0,
                        aX = (null != ad || am) && "w-full";
                    U[49] !== aX ? (B = (0, g.b)("pointer-events-none absolute inset-y-0 start-0 max-w-full", aX), U[49] = aX, U[50] = B) : B = U[50], U[51] !== am || U[52] !== ad || U[53] !== aq ? (C = null != ad || am ? void 0 : {
                        width: aq
                    }, U[51] = am, U[52] = ad, U[53] = aq, U[54] = C) : C = U[54], U[55] !== aW || U[56] !== B || U[57] !== C ? (F = (0, d.jsx)("div", {
                        "data-pip-obstacle": aW,
                        className: B,
                        style: C,
                        "aria-hidden": !0
                    }), U[55] = aW, U[56] = B, U[57] = C, U[58] = F) : F = U[58];
                    let aY = ah && (!ak || ax) ? E.b.visible : aF,
                        aZ = al && "h-full",
                        a$ = (null != ad || am) && "w-full",
                        a_ = ag && "invisible";
                    U[59] !== aZ || U[60] !== a$ || U[61] !== a_ ? (G = (0, g.b)("pointer-events-none max-h-full min-h-0 min-w-0 max-w-full", aZ, a$, a_), U[59] = aZ, U[60] = a$, U[61] = a_, U[62] = G) : G = U[62];
                    let a0 = aj ? aF : void 0,
                        a1 = b;
                    U[63] === Symbol.for("react.memo_cache_sentinel") ? (H = () => {
                        aC(!0), aE(!0)
                    }, U[63] = H) : H = U[63], U[64] !== ay || U[65] !== ah ? (I = () => {
                        aC(ah && ay), aE(!1)
                    }, U[64] = ay, U[65] = ah, U[66] = I) : I = U[66];
                    let a2 = "docked" === ao && "border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]",
                        a3 = al && "h-full",
                        a4 = (null != ad || am) && "w-full",
                        a5 = az ? "pointer-events-auto" : "pointer-events-none";
                    U[67] !== a2 || U[68] !== a3 || U[69] !== a4 || U[70] !== a5 ? (J = (0, g.b)("flex max-h-full min-h-0 max-w-full flex-col gap-3", a2, a3, a4, a5), U[67] = a2, U[68] = a3, U[69] = a4, U[70] = a5, U[71] = J) : J = U[71], U[72] !== am || U[73] !== ad || U[74] !== aq ? (K = null != ad || am ? void 0 : {
                        width: aq
                    }, U[72] = am, U[73] = ad, U[74] = aq, U[75] = K) : K = U[75];
                    let a6 = az ? V : void 0,
                        a7 = (az || aB) && !ag;
                    U[76] !== am || U[77] !== aD || U[78] !== ao || U[79] !== a6 || U[80] !== a7 ? (L = {
                        analytics: a6,
                        fullWidth: am,
                        isAnimating: aD,
                        isVisible: a7,
                        placement: ao
                    }, U[76] = am, U[77] = aD, U[78] = ao, U[79] = a6, U[80] = a7, U[81] = L) : L = U[81], U[82] !== Y || U[83] !== L ? (M = (0, d.jsx)(D.a.Provider, {
                        value: L,
                        children: Y
                    }), U[82] = Y, U[83] = L, U[84] = M) : M = U[84], U[85] !== J || U[86] !== K || U[87] !== M ? (N = (0, d.jsx)("div", {
                        className: J,
                        style: K,
                        children: M
                    }), U[85] = J, U[86] = K, U[87] = M, U[88] = N) : N = U[88], U[89] !== aY || U[90] !== G || U[91] !== a0 || U[92] !== I || U[93] !== N || U[94] !== b || U[95] !== aA ? (P = (0, d.jsx)(h.a.div, {
                        initial: aY,
                        className: G,
                        animate: aA,
                        exit: a0,
                        transition: a1,
                        onAnimationStart: H,
                        onAnimationComplete: I,
                        children: N
                    }), U[89] = aY, U[90] = G, U[91] = a0, U[92] = I, U[93] = N, U[94] = b, U[95] = aA, U[96] = P) : P = U[96], U[97] !== A || U[98] !== F || U[99] !== P ? (Q = (0, d.jsxs)("div", {
                        className: A,
                        children: [F, P]
                    }), U[97] = A, U[98] = F, U[99] = P, U[100] = Q) : Q = U[100], U[101] !== ar || U[102] !== au || U[103] !== ao || U[104] !== af || U[105] !== aq ? (R = "docked" === ao && null != af && null != au && au > 320 && (0, d.jsx)("div", {
                        className: "pointer-events-auto",
                        children: (0, d.jsx)(r.a, {
                            ariaLabel: ar.formatMessage({
                                id: "splitView.resize",
                                defaultMessage: "Resize panels"
                            }),
                            edge: "left",
                            extendIntoToolbar: !1,
                            defaultSize: af.defaultWidth,
                            getCurrentSize: () => Math.min(aq, au),
                            minimumSize: 320,
                            maximumSize: au,
                            setSize: af.onWidthChange
                        })
                    }), U[101] = ar, U[102] = au, U[103] = ao, U[104] = af, U[105] = aq, U[106] = R) : R = U[106], U[107] !== t || U[108] !== u || U[109] !== aO || U[110] !== v || U[111] !== aP || U[112] !== aQ || U[113] !== w || U[114] !== x || U[115] !== y || U[116] !== aR || U[117] !== Q || U[118] !== R ? (S = (0, d.jsxs)(h.a.div, {
                        ref: t,
                        className: u,
                        "data-thread-summary-card-host": aO,
                        style: v,
                        "aria-hidden": aP,
                        inert: aQ,
                        initial: w,
                        animate: x,
                        exit: y,
                        transition: aR,
                        children: [Q, R]
                    }), U[107] = t, U[108] = u, U[109] = aO, U[110] = v, U[111] = aP, U[112] = aQ, U[113] = w, U[114] = x, U[115] = y, U[116] = aR, U[117] = Q, U[118] = R, U[119] = S) : S = U[119];
                    let a8 = S;
                    return U[120] !== a8 || U[121] !== ad ? (T = null == ad ? a8 : (0, m.createPortal)(a8, ad), U[120] = a8, U[121] = ad, U[122] = T) : T = U[122], T
                },
                Section: C.a,
                SectionActions: B.o,
                SectionCount: function(a) {
                    let b, c, f = (0, e.c)(3),
                        {
                            count: g
                        } = a;
                    return 0 === g ? null : (f[0] === Symbol.for("react.memo_cache_sentinel") ? (b = (0, d.jsx)(t.a, {}), f[0] = b) : b = f[0], f[1] !== g ? (c = (0, d.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-sm text-tertiary group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
                        children: [b, (0, d.jsx)("span", {
                            children: (0, d.jsx)(o.c, {
                                value: g
                            })
                        })]
                    }), f[1] = g, f[2] = c) : c = f[2], c)
                },
                SourceDetails: function(a) {
                    let b, c, f, g, h, i, j = (0, e.c)(18);
                    if (j[0] !== a) {
                        g = Symbol.for("react.early_return_sentinel");
                        a: {
                            let e, h, i, {
                                children: k,
                                icon: l,
                                meta: m,
                                summaryMeta: n,
                                presentation: o,
                                ...p
                            } = a;b = k;
                            let q = void 0 === o ? "side-panel" : o;
                            if ("summary" === q) {
                                g = (0, d.jsx)("li", {
                                    children: (0, d.jsx)(I, {
                                        ...p,
                                        icon: l,
                                        meta: n
                                    })
                                });
                                break a
                            }
                            j[5] !== l ? (e = (0, d.jsx)("span", {
                                className: "flex size-5 shrink-0 items-center justify-center",
                                children: l
                            }), j[5] = l, j[6] = e) : e = j[6],
                            j[7] !== m ? (h = null == m ? null : (0, d.jsx)("span", {
                                className: "text-xs break-all text-tertiary",
                                children: m
                            }), j[7] = m, j[8] = h) : h = j[8];
                            let r = (0, d.jsxs)("span", {
                                className: "flex min-w-0 flex-1 flex-col gap-0.5",
                                children: [(0, d.jsx)("span", {
                                    className: "text-sm font-medium break-words text-default",
                                    children: p.label
                                }), h]
                            });j[9] !== e || j[10] !== r ? (i = (0, d.jsxs)(d.Fragment, {
                                children: [e, r]
                            }), j[9] = e, j[10] = r, j[11] = i) : i = j[11],
                            c = "border-b border-default py-3 last:border-b-0",
                            f = J(p, i, q)
                        }
                        j[0] = a, j[1] = b, j[2] = c, j[3] = f, j[4] = g
                    } else b = j[1], c = j[2], f = j[3], g = j[4];
                    return g !== Symbol.for("react.early_return_sentinel") ? g : (j[12] !== b ? (h = null == b ? null : (0, d.jsx)("div", {
                        className: "mt-3 flex flex-col gap-1 ps-6 text-sm leading-5 text-secondary",
                        children: b
                    }), j[12] = b, j[13] = h) : h = j[13], j[14] !== c || j[15] !== f || j[16] !== h ? (i = (0, d.jsxs)("li", {
                        className: c,
                        children: [f, h]
                    }), j[14] = c, j[15] = f, j[16] = h, j[17] = i) : i = j[17], i)
                },
                SourceRow: I,
                Sources: function(a) {
                    let b, c, f, g, h, i, j = (0, e.c)(17),
                        {
                            children: k,
                            getKey: l,
                            label: m,
                            onShowAll: n,
                            sources: o
                        } = a;
                    if (j[0] !== k || j[1] !== l || j[2] !== o) {
                        let a;
                        j[4] !== k || j[5] !== l ? (a = a => (0, d.jsx)("div", {
                            role: "listitem",
                            children: k(a)
                        }, l(a)), j[4] = k, j[5] = l, j[6] = a) : a = j[6], b = o.slice(0, 3).map(a), j[0] = k, j[1] = l, j[2] = o, j[3] = b
                    } else b = j[3];
                    return j[7] !== m || j[8] !== b ? (c = (0, d.jsx)(B.i, {
                        "aria-label": m,
                        role: "list",
                        children: b
                    }), j[7] = m, j[8] = b, j[9] = c) : c = j[9], j[10] === Symbol.for("react.memo_cache_sentinel") ? (f = (0, d.jsx)(B.k, {
                        children: (0, d.jsx)(H, {})
                    }), j[10] = f) : f = j[10], j[11] === Symbol.for("react.memo_cache_sentinel") ? (g = (0, d.jsx)(B.j, {
                        children: (0, d.jsx)(F.a, {
                            id: "codex.localConversation.sources.showAll",
                            defaultMessage: "View all"
                        })
                    }), j[11] = g) : g = j[11], j[12] !== n ? (h = (0, d.jsxs)(B.h, {
                        interaction: "foreground",
                        onClick: n,
                        tone: "conversation-summary",
                        children: [f, g]
                    }), j[12] = n, j[13] = h) : h = j[13], j[14] !== c || j[15] !== h ? (i = (0, d.jsxs)(d.Fragment, {
                        children: [c, h]
                    }), j[14] = c, j[15] = h, j[16] = i) : i = j[16], i
                },
                SourcesSidePanel: function(a) {
                    let b, c = (0, e.c)(2),
                        {
                            children: f
                        } = a;
                    return c[0] !== f ? (b = (0, d.jsx)("div", {
                        className: "h-full min-h-0 overflow-y-auto bg-surface",
                        children: f
                    }), c[0] = f, c[1] = b) : b = c[1], b
                },
                SourcesSidePanelList: function(a) {
                    let b, c = (0, e.c)(3),
                        {
                            children: f,
                            label: g
                        } = a;
                    return c[0] !== f || c[1] !== g ? (b = (0, d.jsx)("ul", {
                        "aria-label": g,
                        className: "flex flex-col px-4",
                        children: f
                    }), c[0] = f, c[1] = g, c[2] = b) : b = c[2], b
                },
                SourcesViewport: function(a) {
                    let b, c, f, h, i = (0, e.c)(8);
                    return i[0] !== a ? ({
                        className: b,
                        ...c
                    } = a, i[0] = a, i[1] = b, i[2] = c) : (b = i[1], c = i[2]), i[3] !== b ? (f = (0, g.b)("vertical-scroll-fade-mask -mx-2 max-h-52 overflow-x-hidden overflow-y-auto overscroll-contain px-2", b), i[3] = b, i[4] = f) : f = i[4], i[5] !== c || i[6] !== f ? (h = (0, d.jsx)("div", {
                        ...c,
                        className: f
                    }), i[5] = c, i[6] = f, i[7] = h) : h = i[7], h
                }
            };

        function Q(a) {
            let b, c = (0, e.c)(2);
            c[0] !== a ? (b = void 0 === a ? {} : a, c[0] = a, c[1] = b) : b = c[1];
            let {
                afterAnimation: d
            } = b, {
                isVisible: f,
                isAnimating: g
            } = (0, l.useContext)(D.a);
            return f && (!(void 0 !== d && d) || !g)
        }
    }),
    KWzM: (function(a, b, c) {
        c("V8uZ"), c.d(b, {}, {
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