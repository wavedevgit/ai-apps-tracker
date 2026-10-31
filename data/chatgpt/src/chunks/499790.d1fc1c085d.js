export const __rspack_esm_ids = [499790];
export const __webpack_modules__ = {
    BWrV: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            i = t("on57"),
            l = t("KUdL"),
            s = t.n(l),
            o = t("zd8w"),
            d = t("oyxz"),
            c = t("ygO2"),
            u = t("HOLv"),
            m = t("GzOO"),
            p = t("MIZk"),
            f = t("ZAU2"),
            y = t("vkPe");

        function x(e, a) {
            let {
                key: t
            } = e;
            return [t, a]
        }

        function h(e) {
            let {
                item: a
            } = e;
            return a
        }
        t.d(a, {}, {
            a: function(e) {
                let a, t, l, v, g, b, w, j, C, k, N, z, S = (0, r.c)(80),
                    {
                        children: L,
                        empty: _,
                        getKey: M,
                        getNewItemPosition: A,
                        isLoadingMore: I,
                        items: P,
                        listAriaLabel: B,
                        listClassName: O,
                        onVisibleItemsChange: R,
                        onLoadMore: E,
                        paginationButtonClassName: T,
                        presentation: V,
                        preserveExpandedOrder: H,
                        renderFooter: W,
                        renderPagination: Z,
                        visibleItemIncrement: U,
                        visibleItemLimit: D
                    } = e,
                    F = void 0 !== I && I,
                    G = void 0 === V ? "summary" : V,
                    q = void 0 !== H && H,
                    K = void 0 === D ? 6 : D,
                    {
                        analytics: Y
                    } = (0, o.useContext)(f.a),
                    [Q, X] = (0, o.useState)(K),
                    [$, J] = (0, o.useState)(null);
                if (S[0] !== $ || S[1] !== M || S[2] !== A || S[3] !== P || S[4] !== q || S[5] !== Q) {
                    if (a = P, q && null != $) {
                        let e, t;
                        S[7] !== M ? (e = (e, a) => ({
                            item: e,
                            key: M(e, a)
                        }), S[7] = M, S[8] = e) : e = S[8], S[9] !== $ || S[10] !== A ? (t = e => {
                            let {
                                item: a,
                                key: t
                            } = e;
                            return $.get(t) ?? (A?.(a) === "end" ? 1 / 0 : -1)
                        }, S[9] = $, S[10] = A, S[11] = t) : t = S[11];
                        let n = s()(P.map(e), t);
                        if (a = n.map(h), n.length !== $.size || n.some(e => {
                                let {
                                    key: a
                                } = e;
                                return !$.has(a)
                            })) {
                            let e;
                            J(new Map(n.map(x))), S[12] !== $ || S[13] !== Q ? (e = e => {
                                let {
                                    key: a
                                } = e;
                                return ($.get(a) ?? 1 / 0) < Q
                            }, S[12] = $, S[13] = Q, S[14] = e) : e = S[14], X(Math.max(Q, n.findLastIndex(e) + 1))
                        }
                    }
                    S[0] = $, S[1] = M, S[2] = A, S[3] = P, S[4] = q, S[5] = Q, S[6] = a
                } else a = S[6];
                S[15] !== a || S[16] !== Q ? (t = a.slice(0, Q), S[15] = a, S[16] = Q, S[17] = t) : t = S[17];
                let ee = t;
                if (S[18] !== R || S[19] !== ee ? (l = () => {
                        R?.(ee)
                    }, v = [R, ee], S[18] = R, S[19] = ee, S[20] = l, S[21] = v) : (l = S[20], v = S[21]), (0, o.useEffect)(l, v), 0 === P.length && null == E) return _ ?? null;
                let ea = P.length > K || null != E,
                    et = P.length - ee.length,
                    en = 0 === et && null == E,
                    er = U ?? 50,
                    ei = null == E ? Math.min(et, er) : er;
                S[22] !== Y || S[23] !== M || S[24] !== et || S[25] !== en || S[26] !== F || S[27] !== P.length || S[28] !== E || S[29] !== a || S[30] !== q || S[31] !== er || S[32] !== K ? (g = () => {
                    !F && ((0, f.b)(Y, en ? "show_less" : "show_more"), q && J(en ? null : new Map(a.map((e, a) => [M(e, a), a]))), X(e => en ? K : null == E ? Math.min(P.length, e + er) : e + er), et < er && E?.())
                }, S[22] = Y, S[23] = M, S[24] = et, S[25] = en, S[26] = F, S[27] = P.length, S[28] = E, S[29] = a, S[30] = q, S[31] = er, S[32] = K, S[33] = g) : g = S[33];
                let el = g;
                S[34] !== L || S[35] !== M || S[36] !== B || S[37] !== O || S[38] !== ee ? (b = null == B ? (0, n.jsx)(p.i, {
                    className: O,
                    children: ee.map((e, a) => (0, n.jsx)(o.Fragment, {
                        children: L(e, a)
                    }, M(e, a)))
                }) : (0, n.jsx)(p.i, {
                    "aria-label": B,
                    className: O,
                    role: "list",
                    children: ee.map((e, a) => (0, n.jsx)("div", {
                        role: "listitem",
                        children: L(e, a)
                    }, M(e, a)))
                }), S[34] = L, S[35] = M, S[36] = B, S[37] = O, S[38] = ee, S[39] = b) : b = S[39];
                let es = b;
                return S[40] !== W || S[41] !== ee ? (w = W?.(ee), S[40] = W, S[41] = ee, S[42] = w) : w = S[42], S[43] !== ea || S[44] !== en || S[45] !== F || S[46] !== ei || S[47] !== Z || S[48] !== el ? (j = ea && null != Z ? Z({
                    nextRevealCount: ei,
                    isExpanded: en,
                    isLoadingMore: F,
                    onToggle: el
                }) : null, S[43] = ea, S[44] = en, S[45] = F, S[46] = ei, S[47] = Z, S[48] = el, S[49] = j) : j = S[49], S[50] !== ea || S[51] !== en || S[52] !== F || S[53] !== G || S[54] !== Z || S[55] !== el ? (C = ea && null == Z && "plain" === G ? (0, n.jsx)(m.b, {
                    children: (0, n.jsx)(m.a, {
                        alignment: "content",
                        disabled: F,
                        onClick: el,
                        children: en ? (0, n.jsx)(d.a, {
                            id: "sidebarElectron.showLess",
                            defaultMessage: "Show less",
                            description: "Button label for restoring the initial item limit of an expanded sidebar list"
                        }) : (0, n.jsx)(d.a, {
                            id: "sidebarElectron.showMore",
                            defaultMessage: "Show more",
                            description: "Button label for expanding a task list in the sidebar"
                        })
                    })
                }) : null, S[50] = ea, S[51] = en, S[52] = F, S[53] = G, S[54] = Z, S[55] = el, S[56] = C) : C = S[56], S[57] !== ea || S[58] !== en || S[59] !== F || S[60] !== G || S[61] !== Z || S[62] !== el ? (k = ea && null == Z && "card" === G ? (0, n.jsxs)(p.h, {
                    disabled: F,
                    onClick: el,
                    children: [(0, n.jsx)(p.k, {
                        variant: "custom",
                        children: (0, n.jsx)(u.a, {
                            asset: y.a
                        })
                    }), (0, n.jsx)(p.j, {
                        children: en ? (0, n.jsx)(d.a, {
                            id: "codex.summaryPanel.card.showLess",
                            defaultMessage: "Show less",
                            description: "Collapse an expanded list in a profile card"
                        }) : (0, n.jsx)(d.a, {
                            id: "codex.summaryPanel.card.showMore",
                            defaultMessage: "Show more",
                            description: "Expand a list in a profile card to show additional items"
                        })
                    })]
                }) : null, S[57] = ea, S[58] = en, S[59] = F, S[60] = G, S[61] = Z, S[62] = el, S[63] = k) : k = S[63], S[64] !== ea || S[65] !== en || S[66] !== F || S[67] !== ei || S[68] !== T || S[69] !== G || S[70] !== Z || S[71] !== el ? (N = ea && null == Z && "summary" === G ? (0, n.jsx)(c.a, {
                    className: (0, i.b)("!px-0 !py-0 text-tertiary hover:text-secondary", T),
                    color: "ghostMuted",
                    size: "default",
                    disabled: F,
                    onClick: el,
                    children: en ? (0, n.jsx)(d.a, {
                        id: "codex.localConversation.summaryPanelExpandableList.showLess",
                        defaultMessage: "Show less",
                        description: "Button label that collapses a long list in the conversation summary panel"
                    }) : (0, n.jsx)(d.a, {
                        id: "codex.localConversation.summaryPanelExpandableList.showMore",
                        defaultMessage: "Show {count, number} more",
                        description: "Button label that expands a long list in the conversation summary panel",
                        values: {
                            count: ei
                        }
                    })
                }) : null, S[64] = ea, S[65] = en, S[66] = F, S[67] = ei, S[68] = T, S[69] = G, S[70] = Z, S[71] = el, S[72] = N) : N = S[72], S[73] !== es || S[74] !== w || S[75] !== j || S[76] !== C || S[77] !== k || S[78] !== N ? (z = (0, n.jsxs)(n.Fragment, {
                    children: [es, w, j, C, k, N]
                }), S[73] = es, S[74] = w, S[75] = j, S[76] = C, S[77] = k, S[78] = N, S[79] = z) : z = S[79], z
            }
        })
    }),
    MIZk: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            i = t("DNYL"),
            l = t("on57"),
            s = t("zd8w"),
            o = t("oyxz"),
            d = t("ygO2"),
            c = t("PAiv"),
            u = t("bf6R"),
            m = t("yf2D");
        let p = "group group/summary-panel-item relative isolate flex min-h-token-button-composer w-full min-w-0 items-center data-[multiline=true]:items-start gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 rounded-sm border-0 bg-transparent px-0 py-1 text-start group-data-[summary-panel-variant=dynamic-isle]/summary-panel:min-h-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row group-data-[variant=card]/summary-card:min-h-10 group-data-[variant=card]/summary-card:gap-3 group-data-[variant=card]/summary-card:rounded-none group-data-[variant=card]/summary-card:px-3 group-data-[variant=card]/summary-card:py-2 group-data-[variant=card]/summary-card:after:pointer-events-none group-data-[variant=card]/summary-card:after:absolute group-data-[variant=card]/summary-card:after:end-0 group-data-[variant=card]/summary-card:after:start-10 group-data-[variant=card]/summary-card:after:top-full group-data-[variant=card]/summary-card:after:h-px group-data-[variant=card]/summary-card:after:bg-border",
            f = "cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-primary-ghost-hover group-data-[variant=card]/summary-card:before:inset-x-0 group-data-[variant=card]/summary-card:before:rounded-none",
            y = {
                background: f,
                foreground: "cursor-interaction hover:text-default"
            },
            x = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
            h = "icon-sm flex items-center justify-center browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&_svg]:size-full",
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

        function C(e) {
            let a, t, i, s, o, d, c, u, m, p, f = (0, r.c)(22);
            f[0] !== e ? ({
                children: a,
                className: t,
                tone: s,
                truncate: o,
                variant: d,
                visibility: c,
                ...i
            } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = i, f[4] = s, f[5] = o, f[6] = d, f[7] = c) : (a = f[1], t = f[2], i = f[3], s = f[4], o = f[5], d = f[6], c = f[7]);
            let y = void 0 !== o && o,
                x = void 0 === d ? "text" : d,
                h = void 0 === c ? "always" : c,
                v = y ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
                g = w[void 0 === s ? "muted" : s],
                b = j[x],
                C = "interaction" === h && "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100",
                k = "rest" === h && "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0";
            return f[8] !== t || f[9] !== v || f[10] !== g || f[11] !== b || f[12] !== C || f[13] !== k ? (u = (0, l.b)("flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", v, g, b, C, k, t), f[8] = t, f[9] = v, f[10] = g, f[11] = b, f[12] = C, f[13] = k, f[14] = u) : u = f[14], f[15] !== a || f[16] !== y ? (m = y ? (0, n.jsx)("span", {
                className: "text-fade-truncate",
                children: a
            }) : a, f[15] = a, f[16] = y, f[17] = m) : m = f[17], f[18] !== i || f[19] !== u || f[20] !== m ? (p = (0, n.jsx)("span", {
                ...i,
                className: u,
                "data-slot": "thread-summary-panel-item-meta",
                children: m
            }), f[18] = i, f[19] = u, f[20] = m, f[21] = p) : p = f[21], p
        }

        function k(e) {
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
            return b[9] !== t ? (f = (0, l.b)("size-6", x, t), b[9] = t, b[10] = f) : f = b[10], b[11] !== a ? (y = (0, n.jsx)("span", {
                className: h,
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
            }), b[13] = w, b[14] = o, b[15] = c, b[16] = f, b[17] = y, b[18] = v) : v = b[18], b[19] !== s || b[20] !== u || b[21] !== v || b[22] !== j ? (g = (0, n.jsx)(i.a, {
                disabled: s,
                content: j,
                shortcut: u,
                openDelay: 250,
                children: v
            }), b[19] = s, b[20] = u, b[21] = v, b[22] = j, b[23] = g) : g = b[23], g
        }
        t.d(a, {}, {
            a: k,
            b: function(e) {
                let a, t, i, s, o, d, c, m, y, x, h, g, b = (0, r.c)(26);
                b[0] !== e ? ({
                    children: a,
                    className: t,
                    disabled: o,
                    interactive: d,
                    multiline: c,
                    ref: s,
                    showChevron: m,
                    tone: y,
                    ...i
                } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = i, b[4] = s, b[5] = o, b[6] = d, b[7] = c, b[8] = m, b[9] = y) : (a = b[1], t = b[2], i = b[3], s = b[4], o = b[5], d = b[6], c = b[7], m = b[8], y = b[9]);
                let w = void 0 !== o && o,
                    j = void 0 !== d && d,
                    C = void 0 !== c && c,
                    k = void 0 === m || m,
                    N = w || void 0,
                    z = v[void 0 === y ? "default" : y],
                    S = !w && j && f,
                    L = w && "cursor-not-allowed text-tertiary";
                b[10] !== t || b[11] !== z || b[12] !== S || b[13] !== L ? (x = (0, l.b)(p, z, S, L, t), b[10] = t, b[11] = z, b[12] = S, b[13] = L, b[14] = x) : x = b[14];
                let _ = C || void 0;
                return b[15] !== j || b[16] !== k ? (h = j && k && (0, n.jsx)(u.ec, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
                }), b[15] = j, b[16] = k, b[17] = h) : h = b[17], b[18] !== a || b[19] !== i || b[20] !== s || b[21] !== x || b[22] !== _ || b[23] !== h || b[24] !== N ? (g = (0, n.jsxs)("div", {
                    ...i,
                    "aria-disabled": N,
                    className: x,
                    "data-slot": "thread-summary-panel-item",
                    "data-multiline": _,
                    ref: s,
                    children: [a, h]
                }), b[18] = a, b[19] = i, b[20] = s, b[21] = x, b[22] = _, b[23] = h, b[24] = N, b[25] = g) : g = b[25], g
            },
            c: function(e) {
                let a, t = (0, r.c)(2);
                return t[0] !== e ? (a = (0, n.jsx)(k, {
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
                } = e, p[0] = e, p[1] = a, p[2] = t, p[3] = s, p[4] = o) : (a = p[1], t = p[2], s = p[3], o = p[4]), p[5] !== t ? (d = (0, l.b)("-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default", x, t), p[5] = t, p[6] = d) : d = p[6], p[7] !== a ? (c = (0, n.jsx)("span", {
                    className: h,
                    children: a
                }), p[7] = a, p[8] = c) : c = p[8], p[9] !== s || p[10] !== o || p[11] !== d || p[12] !== c ? (u = (0, n.jsx)("a", {
                    ...o,
                    "aria-label": s,
                    className: d,
                    "data-slot": "thread-summary-panel-item-action-link",
                    children: c
                }), p[9] = s, p[10] = o, p[11] = d, p[12] = c, p[13] = u) : u = p[13], p[14] !== s || p[15] !== u ? (m = (0, n.jsx)(i.a, {
                    content: s,
                    openDelay: 250,
                    children: u
                }), p[14] = s, p[15] = u, p[16] = m) : m = p[16], m
            },
            e: function(e) {
                let a, t, i, s, o, d, c, u, m, p, f, y, x, h, v = (0, r.c)(30);
                v[0] !== e ? ({
                    align: c,
                    placement: u,
                    children: a,
                    className: t,
                    visibility: m,
                    onClick: i,
                    onKeyDown: s,
                    onPointerDown: o,
                    ...d
                } = e, v[0] = e, v[1] = a, v[2] = t, v[3] = i, v[4] = s, v[5] = o, v[6] = d, v[7] = c, v[8] = u, v[9] = m) : (a = v[1], t = v[2], i = v[3], s = v[4], o = v[5], d = v[6], c = v[7], u = v[8], m = v[9]);
                let g = void 0 === c ? "content" : c,
                    b = void 0 === u ? "inline" : u,
                    w = void 0 === m ? "always" : m,
                    j = "section-actions" === g && "-me-1.5",
                    C = "preview" === g && "me-2 w-15 justify-center",
                    k = "overlay" === b && "absolute inset-y-0 end-0 my-auto";
                return v[10] !== t || v[11] !== b || v[12] !== j || v[13] !== C || v[14] !== k || v[15] !== w ? (p = (0, l.b)("flex h-5 shrink-0 items-center", j, C, k, "interaction" === w && ["pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100", "inline" === b && "pointer-coarse:pointer-events-auto pointer-coarse:opacity-100"], t), v[10] = t, v[11] = b, v[12] = j, v[13] = C, v[14] = k, v[15] = w, v[16] = p) : p = v[16], v[17] !== i ? (f = e => {
                    e.stopPropagation(), i?.(e)
                }, v[17] = i, v[18] = f) : f = v[18], v[19] !== s ? (y = e => {
                    e.stopPropagation(), s?.(e)
                }, v[19] = s, v[20] = y) : y = v[20], v[21] !== o ? (x = e => {
                    e.stopPropagation(), o?.(e)
                }, v[21] = o, v[22] = x) : x = v[22], v[23] !== a || v[24] !== d || v[25] !== x || v[26] !== p || v[27] !== f || v[28] !== y ? (h = (0, n.jsx)("span", {
                    ...d,
                    className: p,
                    "data-slot": "thread-summary-panel-item-actions",
                    role: "presentation",
                    onClick: f,
                    onKeyDown: y,
                    onPointerDown: x,
                    children: a
                }), v[23] = a, v[24] = d, v[25] = x, v[26] = p, v[27] = f, v[28] = y, v[29] = h) : h = v[29], h
            },
            f: function(e) {
                let a, t, i, s, o, d, c = (0, r.c)(12);
                c[0] !== e ? ({
                    children: a,
                    className: t,
                    type: s,
                    ...i
                } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = i, c[4] = s) : (a = c[1], t = c[2], i = c[3], s = c[4]);
                let u = void 0 === s ? "button" : s;
                return c[5] !== t ? (o = (0, l.b)("flex size-4 cursor-interaction items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring [&>img]:size-4 [&>svg]:size-4", t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== i || c[9] !== o || c[10] !== u ? (d = (0, n.jsx)("button", {
                    ...i,
                    className: o,
                    "data-slot": "thread-summary-panel-item-avatar-button",
                    type: u,
                    children: a
                }), c[7] = a, c[8] = i, c[9] = o, c[10] = u, c[11] = d) : d = c[11], d
            },
            g: function(e) {
                let a, t, i, s, o, d = (0, r.c)(10);
                return d[0] !== e ? ({
                    children: a,
                    className: t,
                    ...i
                } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = i) : (a = d[1], t = d[2], i = d[3]), d[4] !== t ? (s = (0, l.b)("flex shrink-0 items-center gap-token-button-composer-gap [&_img]:size-4 [&_svg]:size-4", t), d[4] = t, d[5] = s) : s = d[5], d[6] !== a || d[7] !== i || d[8] !== s ? (o = (0, n.jsx)("span", {
                    ...i,
                    className: s,
                    "data-slot": "thread-summary-panel-item-avatar-group",
                    children: a
                }), d[6] = a, d[7] = i, d[8] = s, d[9] = o) : o = d[9], o
            },
            h: function(e) {
                let a, t, i, d, c, m, f, h, g, b, w, j, C, k, N, z, S = (0, r.c)(36);
                S[0] !== e ? ({
                    children: a,
                    className: t,
                    disabled: c,
                    interaction: m,
                    multiline: f,
                    ref: d,
                    showChevron: h,
                    tone: g,
                    type: b,
                    unread: w,
                    ...i
                } = e, S[0] = e, S[1] = a, S[2] = t, S[3] = i, S[4] = d, S[5] = c, S[6] = m, S[7] = f, S[8] = h, S[9] = g, S[10] = b, S[11] = w) : (a = S[1], t = S[2], i = S[3], d = S[4], c = S[5], m = S[6], f = S[7], h = S[8], g = S[9], b = S[10], w = S[11]);
                let L = void 0 !== c && c,
                    _ = void 0 === m ? "background" : m,
                    M = void 0 !== f && f,
                    A = void 0 === h || h,
                    I = void 0 === g ? "default" : g,
                    P = void 0 === b ? "button" : b,
                    B = void 0 !== w && w,
                    O = (0, s.useId)();
                S[12] !== i || S[13] !== B || S[14] !== O ? (j = B ? [i["aria-describedby"], O].filter(Boolean).join(" ") : i["aria-describedby"], S[12] = i, S[13] = B, S[14] = O, S[15] = j) : j = S[15];
                let R = j,
                    E = !L && y[_],
                    T = v[I];
                S[16] !== t || S[17] !== T || S[18] !== E ? (C = (0, l.b)(p, E, x, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", T, t), S[16] = t, S[17] = T, S[18] = E, S[19] = C) : C = S[19];
                let V = M || void 0;
                return S[20] !== B || S[21] !== O ? (k = B ? (0, n.jsxs)(n.Fragment, {
                    children: [(0, n.jsx)("span", {
                        "aria-hidden": !0,
                        className: "h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                    }), (0, n.jsx)("span", {
                        id: O,
                        className: "sr-only",
                        children: (0, n.jsx)(o.a, {
                            id: "sidebar.navItem.unread",
                            defaultMessage: "Unread updates",
                            description: "Accessible description for a navigation item with unread updates"
                        })
                    })]
                }) : null, S[20] = B, S[21] = O, S[22] = k) : k = S[22], S[23] !== A ? (N = A && (0, n.jsx)(u.ec, {
                    className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
                }), S[23] = A, S[24] = N) : N = S[24], S[25] !== a || S[26] !== R || S[27] !== L || S[28] !== i || S[29] !== d || S[30] !== C || S[31] !== V || S[32] !== k || S[33] !== N || S[34] !== P ? (z = (0, n.jsxs)("button", {
                    ...i,
                    "aria-describedby": R,
                    className: C,
                    "data-slot": "thread-summary-panel-item-button",
                    "data-multiline": V,
                    disabled: L,
                    ref: d,
                    type: P,
                    children: [a, k, N]
                }), S[25] = a, S[26] = R, S[27] = L, S[28] = i, S[29] = d, S[30] = C, S[31] = V, S[32] = k, S[33] = N, S[34] = P, S[35] = z) : z = S[35], z
            },
            i: function(e) {
                let a, t, i, s, o, d, c = (0, r.c)(12);
                return c[0] !== e ? ({
                    children: a,
                    className: t,
                    density: i,
                    ...s
                } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = i, c[4] = s) : (a = c[1], t = c[2], i = c[3], s = c[4]), c[5] !== t ? (o = (0, l.b)("relative z-10 flex min-w-0 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0 group-data-[variant=card]/summary-card:mx-0 group-data-[variant=card]/summary-card:gap-0 group-data-[variant=card]/summary-card:px-0", "group/summary-row-density", t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== i || c[9] !== s || c[10] !== o ? (d = (0, n.jsx)("div", {
                    ...s,
                    className: o,
                    "data-slot": "thread-summary-panel-item-group",
                    "data-summary-row-density": i,
                    children: a
                }), c[7] = a, c[8] = i, c[9] = s, c[10] = o, c[11] = d) : d = c[11], d
            },
            j: function(e) {
                let a, t, i, s, o, d, c, u, p, f = (0, r.c)(18);
                f[0] !== e ? ({
                    children: a,
                    className: t,
                    description: i,
                    truncate: o,
                    ...s
                } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = i, f[4] = s, f[5] = o) : (a = f[1], t = f[2], i = f[3], s = f[4], o = f[5]);
                let y = void 0 === o || o;
                f[6] !== t ? (d = (0, l.b)("min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", t), f[6] = t, f[7] = d) : d = f[7], f[8] !== a || f[9] !== y ? (c = y ? (0, n.jsx)(m.a, {
                    animateOnGroupHover: !0,
                    children: a
                }) : a, f[8] = a, f[9] = y, f[10] = c) : c = f[10], f[11] !== s || f[12] !== d || f[13] !== c ? (u = (0, n.jsx)("span", {
                    ...s,
                    className: d,
                    "data-slot": "thread-summary-panel-item-label",
                    children: c
                }), f[11] = s, f[12] = d, f[13] = c, f[14] = u) : u = f[14];
                let x = u;
                return f[15] !== i || f[16] !== x ? (p = null == i ? x : (0, n.jsxs)("span", {
                    className: "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                    children: [x, (0, n.jsx)(C, {
                        children: (0, n.jsx)("span", {
                            className: "text-fade-truncate",
                            children: i
                        })
                    })]
                }), f[15] = i, f[16] = x, f[17] = p) : p = f[17], p
            },
            k: function(e) {
                let a, t, i, s, o, d, c, u = (0, r.c)(15);
                u[0] !== e ? ({
                    children: a,
                    className: t,
                    variant: s,
                    ...i
                } = e, u[0] = e, u[1] = a, u[2] = t, u[3] = i, u[4] = s) : (a = u[1], t = u[2], i = u[3], s = u[4]);
                let m = void 0 === s ? "glyph" : s,
                    p = b[m],
                    f = g[m];
                return u[5] !== t || u[6] !== f ? (o = (0, l.b)("me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4", f, t), u[5] = t, u[6] = f, u[7] = o) : o = u[7], u[8] !== a || u[9] !== p ? (d = null == p ? a : (0, n.jsx)("span", {
                    className: (0, l.b)("flex shrink-0 items-center justify-center", p),
                    children: a
                }), u[8] = a, u[9] = p, u[10] = d) : d = u[10], u[11] !== i || u[12] !== o || u[13] !== d ? (c = (0, n.jsx)("span", {
                    ...i,
                    className: o,
                    "data-slot": "thread-summary-panel-item-leading",
                    children: d
                }), u[11] = i, u[12] = o, u[13] = d, u[14] = c) : c = u[14], c
            },
            l: function(e) {
                let a, t, i, s, o, d = (0, r.c)(10);
                d[0] !== e ? ({
                    className: a,
                    tone: i,
                    ...t
                } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = i) : (a = d[1], t = d[2], i = d[3]);
                let u = v[void 0 === i ? "default" : i];
                return d[4] !== a || d[5] !== u ? (s = (0, l.b)(p, f, x, u, "no-underline", a), d[4] = a, d[5] = u, d[6] = s) : s = d[6], d[7] !== t || d[8] !== s ? (o = (0, n.jsx)(c.a, {
                    ...t,
                    className: s,
                    "data-slot": "thread-summary-panel-item-link"
                }), d[7] = t, d[8] = s, d[9] = o) : o = d[9], o
            },
            m: C,
            n: function(e) {
                let a, t, i, s, o, d, c = (0, r.c)(12);
                c[0] !== e ? ({
                    children: a,
                    className: t,
                    type: s,
                    ...i
                } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = i, c[4] = s) : (a = c[1], t = c[2], i = c[3], s = c[4]);
                let u = void 0 === s ? "button" : s;
                return c[5] !== t ? (o = (0, l.b)("flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 group-data-[variant=card]/summary-card:gap-3 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0", x, t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== i || c[9] !== o || c[10] !== u ? (d = (0, n.jsx)("button", {
                    ...i,
                    className: o,
                    "data-slot": "thread-summary-panel-item-trigger",
                    type: u,
                    children: a
                }), c[7] = a, c[8] = i, c[9] = o, c[10] = u, c[11] = d) : d = c[11], d
            },
            o: function(e) {
                let a, t, i, s, o, d = (0, r.c)(10);
                return d[0] !== e ? ({
                    children: a,
                    className: t,
                    ...i
                } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = i) : (a = d[1], t = d[2], i = d[3]), d[4] !== t ? (s = (0, l.b)("ms-auto flex items-center gap-0.5", t), d[4] = t, d[5] = s) : s = d[5], d[6] !== a || d[7] !== i || d[8] !== s ? (o = (0, n.jsx)("span", {
                    ...i,
                    className: s,
                    "data-slot": "thread-summary-panel-section-actions",
                    children: a
                }), d[6] = a, d[7] = i, d[8] = s, d[9] = o) : o = d[9], o
            }
        })
    }),
    Nwje: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            i = t("on57"),
            l = t("suct"),
            s = t("iodE"),
            o = t("IPUh"),
            d = t("V9Lw"),
            c = t.n(d),
            u = t("iTtm"),
            m = t("zd8w"),
            p = t("bqtn"),
            f = t("YBOx"),
            y = t("tSEg"),
            x = t("eGPX"),
            h = t("V8uZ"),
            v = t("m5G2"),
            g = t("Nwp9"),
            b = t("MIZk"),
            w = t("ZAU2");
        let j = {
                height: 0,
                opacity: 0,
                marginTop: 0
            },
            C = {
                height: "auto",
                opacity: 1,
                marginTop: 2
            },
            k = (0, g.c)(e => `thread-summary-panel-section-expanded-${e}`, null),
            N = (0, u.v)(y.a, e => "pending");

        function z(e) {
            let a, t, i, l, d, c = (0, r.c)(19),
                {
                    className: u,
                    animateContentResize: p,
                    children: f,
                    collapsible: y,
                    sectionContentClassName: x
                } = e,
                g = void 0 === y || y,
                b = (0, s.a)(),
                [w, k] = (0, m.useState)(null),
                N = !b,
                z = !b,
                S = !!g && j;
            c[0] !== g ? (a = g ? C : {}, c[0] = g, c[1] = a) : a = c[1];
            let L = p ? w ?? "auto" : "auto";
            c[2] !== a || c[3] !== L ? (t = {
                ...a,
                height: L
            }, c[2] = a, c[3] = L, c[4] = t) : t = c[4];
            let _ = g ? j : void 0;
            return c[5] !== p ? (i = p ? e => (0, v.a)({
                axis: "height",
                target: e,
                onChange: e => {
                    let {
                        height: a
                    } = e;
                    return k(a)
                }
            }) : void 0, c[5] = p, c[6] = i) : i = c[6], c[7] !== f || c[8] !== x || c[9] !== i ? (l = (0, n.jsx)("div", {
                ref: i,
                className: x,
                children: f
            }), c[7] = f, c[8] = x, c[9] = i, c[10] = l) : l = c[10], c[11] !== u || c[12] !== l || c[13] !== N || c[14] !== z || c[15] !== S || c[16] !== t || c[17] !== _ ? (d = (0, n.jsx)(o.a.div, {
                className: u,
                "aria-hidden": N,
                inert: z,
                initial: S,
                animate: t,
                exit: _,
                transition: h.a,
                children: l
            }), c[11] = u, c[12] = l, c[13] = N, c[14] = z, c[15] = S, c[16] = t, c[17] = _, c[18] = d) : d = c[18], d
        }

        function S(e) {
            let a, t, l, s, o, d, c, u = (0, r.c)(35),
                {
                    inset: m,
                    surface: y,
                    mode: x,
                    sectionOptions: h,
                    after: v,
                    children: g,
                    isExpanded: b,
                    onToggle: w,
                    onChange: j,
                    shouldUseReducedMotion: C,
                    titleSuffix: k,
                    collapsedSummary: N
                } = e,
                z = null != h && h.length > 1,
                S = "accordion" === x ? w : void 0;
            u[0] !== g ? (a = (0, n.jsx)("span", {
                className: "truncate",
                children: g
            }), u[0] = g, u[1] = a) : a = u[1];
            let L = b ? null : k;
            u[2] !== z || u[3] !== b || u[4] !== x || u[5] !== C ? (t = ("accordion" === x || z) && (0, n.jsx)(f.a, {
                "aria-hidden": "true",
                className: (0, i.a)("icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100", !C && "transition-transform", b ? "opacity-0" : "opacity-100", b ? "rotate-0" : "-rotate-90")
            }), u[2] = z, u[3] = b, u[4] = x, u[5] = C, u[6] = t) : t = u[6], u[7] !== N || u[8] !== b ? (l = b || null == N ? null : (0, n.jsx)("span", {
                className: "ms-auto flex min-w-0 items-center",
                children: N
            }), u[7] = N, u[8] = b, u[9] = l) : l = u[9], u[10] !== b || u[11] !== S || u[12] !== a || u[13] !== L || u[14] !== t || u[15] !== l ? (s = (0, n.jsxs)("button", {
                "aria-expanded": b,
                className: "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                onClick: S,
                type: "button",
                children: [a, L, t, l]
            }), u[10] = b, u[11] = S, u[12] = a, u[13] = L, u[14] = t, u[15] = l, u[16] = s) : s = u[16];
            let _ = s,
                M = _;
            if ("heading" === x) {
                let e;
                u[17] !== g ? (e = (0, n.jsx)("h3", {
                    className: "min-w-0 truncate select-none",
                    children: g
                }), u[17] = g, u[18] = e) : e = u[18], M = e
            } else if ("dropdown" === x && z) {
                let e, a;
                u[19] !== j || u[20] !== h ? (e = h?.map(e => (0, n.jsx)(p.f, {
                    onSelect: () => j?.(e),
                    children: e
                }, e)), u[19] = j, u[20] = h, u[21] = e) : e = u[21], u[22] !== e || u[23] !== _ ? (a = (0, n.jsx)(p.a, {
                    triggerButton: _,
                    children: e
                }), u[22] = e, u[23] = _, u[24] = a) : a = u[24], M = a
            }
            let A = "panel" === y ? "bg-[var(--app-shell-panel-background,var(--color-surface))] before:bg-[var(--app-shell-panel-background,var(--color-surface))]" : "bg-surface-elevated-secondary before:bg-surface-elevated-secondary",
                I = m && "ps-5 pe-3.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:ps-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:ps-5";
            return u[25] !== A || u[26] !== I ? (o = (0, i.a)("sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", A, I), u[25] = A, u[26] = I, u[27] = o) : o = u[27], u[28] !== v || u[29] !== x ? (d = null != v ? (0, n.jsx)("div", {
                className: (0, i.a)("relative flex", "heading" === x ? "min-w-0 flex-1" : "shrink-0"),
                children: v
            }) : null, u[28] = v, u[29] = x, u[30] = d) : d = u[30], u[31] !== M || u[32] !== d || u[33] !== o ? (c = (0, n.jsxs)("header", {
                className: o,
                children: [M, d]
            }), u[31] = M, u[32] = d, u[33] = o, u[34] = c) : c = u[34], c
        }
        t.d(a, {}, {
            a: function(e) {
                let a, t, s, o, d, p, f, h, v, g, j, C, L, _, M, A = (0, r.c)(103),
                    {
                        autoCollapse: I,
                        animateContentResize: P,
                        sectionKey: B,
                        analyticsControl: O,
                        after: R,
                        children: E,
                        mode: T,
                        ref: V,
                        sectionOptions: H,
                        defaultCollapsed: W,
                        inset: Z,
                        divider: U,
                        surface: D,
                        spacing: F,
                        persistExpansion: G,
                        title: q,
                        titleSuffix: K,
                        collapsedSummary: Y,
                        onChange: Q
                    } = e,
                    X = void 0 !== P && P,
                    $ = void 0 === T ? "accordion" : T,
                    J = void 0 !== W && W,
                    ee = void 0 === Z || Z,
                    ea = void 0 === D ? "elevated" : D,
                    et = void 0 === F ? "section" : F,
                    en = void 0 === G || G,
                    er = (0, u.y)(y.a),
                    {
                        analytics: ei
                    } = (0, m.useContext)(w.a),
                    el = (0, u.x)(N, B),
                    es = (0, u.x)(k, B),
                    [eo, ed] = (0, m.useState)(!J),
                    ec = null != I && "canceled" !== el,
                    eu = (!0 !== I || "collapsed" !== el) && (en ? es ?? !J : eo),
                    em = (0, u.z)(x.c),
                    ep = ee ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5" : "px-2";
                A[0] !== ep ? (a = (0, i.a)("flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0", ep), A[0] = ep, A[1] = a) : a = A[1];
                let ef = a;
                if (A[2] !== X || A[3] !== ee || A[4] !== eu || A[5] !== $ || A[6] !== en || A[7] !== er || A[8] !== B || A[9] !== et) {
                    let e;
                    t = (0, i.a)("relative z-0", ("headerless" !== $ || X) && ("standalone" === et ? "overflow-clip" : "overflow-hidden"), !ee && "-mx-2"), A[14] !== en || A[15] !== er || A[16] !== B ? (e = e => {
                        en ? er.set(k, B, e) : ed(e)
                    }, A[14] = en, A[15] = er, A[16] = B, A[17] = e) : e = A[17], s = e, o = "headerless" === $ || "heading" === $ || eu || "dropdown" === $, d = (0, i.a)(t, "mt-0.5"), A[2] = X, A[3] = ee, A[4] = eu, A[5] = $, A[6] = en, A[7] = er, A[8] = B, A[9] = et, A[10] = t, A[11] = s, A[12] = o, A[13] = d
                } else t = A[10], s = A[11], o = A[12], d = A[13];
                A[18] !== E || A[19] !== ef ? (p = (0, n.jsx)("div", {
                    className: ef,
                    children: E
                }), A[18] = E, A[19] = ef, A[20] = p) : p = A[20], A[21] !== d || A[22] !== p ? (f = (0, n.jsx)("div", {
                    className: d,
                    children: p
                }), A[21] = d, A[22] = p, A[23] = f) : f = A[23];
                let ey = f;
                A[24] !== s ? (h = () => ({
                    collapse: () => s(!1),
                    expand: () => s(!0)
                }), A[24] = s, A[25] = h) : h = A[25], (0, m.useImperativeHandle)(V, h), A[26] !== I || A[27] !== el || A[28] !== ec || A[29] !== er || A[30] !== B ? (v = () => {
                    if (!ec) return;
                    if (!I) {
                        "collapsed" === el && er.set(N, B, "pending");
                        return
                    }
                    if ("pending" !== el) return;
                    let e = window.setTimeout(() => {
                        er.set(N, B, "collapsed")
                    }, 3e4);
                    return () => window.clearTimeout(e)
                }, g = [I, el, ec, er, B], A[26] = I, A[27] = el, A[28] = ec, A[29] = er, A[30] = B, A[31] = v, A[32] = g) : (v = A[31], g = A[32]), (0, m.useEffect)(v, g), A[33] !== X || A[34] !== E || A[35] !== ey || A[36] !== t || A[37] !== ef || A[38] !== o || A[39] !== em ? (j = em ? o && ey : (0, n.jsx)(l.a, {
                    initial: !1,
                    children: o && (0, n.jsx)(z, {
                        className: t,
                        animateContentResize: X,
                        sectionContentClassName: ef,
                        children: E
                    }, "content")
                }), A[33] = X, A[34] = E, A[35] = ey, A[36] = t, A[37] = ef, A[38] = o, A[39] = em, A[40] = j) : j = A[40];
                let ex = j;
                if ("row" === $) {
                    let e, a, t, r, i = null != E;
                    A[41] !== E || A[42] !== eu || A[43] !== s || A[44] !== q ? (e = null == E ? q : (0, n.jsx)(b.n, {
                        "aria-expanded": eu,
                        className: "select-none",
                        onClick: () => s(!eu),
                        children: q
                    }), A[41] = E, A[42] = eu, A[43] = s, A[44] = q, A[45] = e) : e = A[45], A[46] !== R || A[47] !== eu ? (a = c()(R) ? R({
                        isExpanded: eu
                    }) : R, A[46] = R, A[47] = eu, A[48] = a) : a = A[48], A[49] !== i || A[50] !== e || A[51] !== a ? (t = (0, n.jsx)("div", {
                        className: "px-5",
                        children: (0, n.jsxs)(b.b, {
                            interactive: i,
                            children: [e, a]
                        })
                    }), A[49] = i, A[50] = e, A[51] = a, A[52] = t) : t = A[52];
                    let l = null == E ? null : ex;
                    return A[53] !== t || A[54] !== l ? (r = (0, n.jsxs)("section", {
                        className: "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                        children: [t, l]
                    }), A[53] = t, A[54] = l, A[55] = r) : r = A[55], r
                }
                if ("card" === $ || "plain" === $) {
                    let e, a, t, r, l, s = "card" === $ ? "gap-1" : "gap-2";
                    A[56] !== s ? (e = (0, i.a)("flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4", s), A[56] = s, A[57] = e) : e = A[57], A[58] !== R || A[59] !== $ || A[60] !== q ? (a = null != q || null != R ? (0, n.jsxs)("header", {
                        className: (0, i.a)("flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", "card" === $ && "px-1"),
                        children: [null != q ? (0, n.jsx)("h3", {
                            className: "truncate",
                            children: q
                        }) : null, c()(R) ? R({
                            isExpanded: !0
                        }) : R]
                    }) : null, A[58] = R, A[59] = $, A[60] = q, A[61] = a) : a = A[61];
                    let o = "card" === $ ? "group/summary-card overflow-hidden rounded-2xl border border-default" : "flex min-w-0 flex-col",
                        d = "card" === $ ? "card" : void 0;
                    return A[62] !== X || A[63] !== E || A[64] !== em ? (t = X && !em ? (0, n.jsx)(z, {
                        className: "overflow-hidden",
                        animateContentResize: !0,
                        collapsible: !1,
                        sectionContentClassName: "",
                        children: E
                    }) : E, A[62] = X, A[63] = E, A[64] = em, A[65] = t) : t = A[65], A[66] !== o || A[67] !== d || A[68] !== t ? (r = (0, n.jsx)("div", {
                        className: o,
                        "data-variant": d,
                        children: t
                    }), A[66] = o, A[67] = d, A[68] = t, A[69] = r) : r = A[69], A[70] !== e || A[71] !== a || A[72] !== r ? (l = (0, n.jsxs)("section", {
                        className: e,
                        children: [a, r]
                    }), A[70] = e, A[71] = a, A[72] = r, A[73] = l) : l = A[73], l
                }
                let eh = "nested" === et ? "pt-3" : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
                    ev = (void 0 === U || U) && "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
                    eg = ee ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4" : "after:inset-x-0",
                    eb = "accordion" !== $ || eu || "standalone" === et ? "last:pb-0" : "last:pb-0.5";
                return A[74] !== eh || A[75] !== ev || A[76] !== eg || A[77] !== eb ? (C = (0, i.a)("relative z-0 flex flex-col", eh, ev, eg, eb), A[74] = eh, A[75] = ev, A[76] = eg, A[77] = eb, A[78] = C) : C = A[78], A[79] !== ec || A[80] !== er || A[81] !== B ? (L = ec ? () => {
                    er.set(N, B, "canceled")
                } : void 0, A[79] = ec, A[80] = er, A[81] = B, A[82] = L) : L = A[82], A[83] !== R || A[84] !== ei || A[85] !== O || A[86] !== Y || A[87] !== ee || A[88] !== eu || A[89] !== $ || A[90] !== Q || A[91] !== H || A[92] !== s || A[93] !== em || A[94] !== ea || A[95] !== q || A[96] !== K ? (_ = "headerless" !== $ ? (0, n.jsx)(S, {
                    inset: ee,
                    surface: ea,
                    after: c()(R) ? R({
                        isExpanded: eu
                    }) : R,
                    sectionOptions: H,
                    mode: $,
                    isExpanded: eu,
                    onChange: Q,
                    onToggle: () => {
                        "dropdown" !== $ && (O && (0, w.b)(ei, O), s(!eu))
                    },
                    shouldUseReducedMotion: em,
                    titleSuffix: K,
                    collapsedSummary: Y,
                    children: q
                }) : null, A[83] = R, A[84] = ei, A[85] = O, A[86] = Y, A[87] = ee, A[88] = eu, A[89] = $, A[90] = Q, A[91] = H, A[92] = s, A[93] = em, A[94] = ea, A[95] = q, A[96] = K, A[97] = _) : _ = A[97], A[98] !== ex || A[99] !== C || A[100] !== L || A[101] !== _ ? (M = (0, n.jsxs)("section", {
                    role: "presentation",
                    className: C,
                    onClick: L,
                    children: [_, ex]
                }), A[98] = ex, A[99] = C, A[100] = L, A[101] = _, A[102] = M) : M = A[102], M
            }
        })
    }),
    ZAU2: (function(e, a, t) {
        var n = t("iRMi"),
            r = t("zd8w"),
            i = t("yGJW");
        let l = (0, r.createContext)({
            fullWidth: !1,
            isVisible: !0,
            isAnimating: !1,
            placement: "floating"
        });
        t.d(a, {}, {
            a: l,
            b: function(e, a) {
                e && (0, i.a)(e.scope, n.CodexThreadSummaryPanelInteraction, {
                    control: a,
                    layout: e.layout,
                    routeKind: e.scope.value.routeKind
                })
            }
        })
    }),
    iS3k: (function(e, a, t) {
        t.d(a, {
            a: () => V,
            b: () => H
        });
        var n = t("ABep"),
            r = t("QosV"),
            i = t("DNYL"),
            l = t("on57"),
            s = t("iodE"),
            o = t("rfA2"),
            d = t("IPUh"),
            c = t("iTtm"),
            u = t("zd8w"),
            m = t("v7qY"),
            p = t("Wf1j"),
            f = t("Qgfj"),
            y = t("I7bK"),
            x = t("QcW8");
        t("DUYS");
        var h = t("FHYD"),
            v = t("gbrq"),
            g = t("zjpG"),
            b = t("ygO2"),
            w = t("rsCP"),
            j = t("HOLv"),
            C = t("UxN3"),
            k = t("eGPX");
        t("V8uZ");
        var N = t("BWrV"),
            z = t("MIZk"),
            S = t("Nwje"),
            L = t("ZAU2"),
            _ = t("KWzM"),
            M = t("oyxz"),
            A = t("PAiv"),
            I = t("bf6R"),
            P = e => (0, n.jsx)("svg", {
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

        function B(e) {
            let a, t, i, l, s, o, d = (0, r.c)(33),
                {
                    controls: c,
                    expanded: u,
                    href: m,
                    icon: p,
                    label: f,
                    meta: y,
                    multiline: x,
                    onOpen: h,
                    onOpenLink: v,
                    requiresConfirmation: g,
                    showHoverActions: b
                } = e,
                w = void 0 !== x && x;
            d[0] !== p ? (a = (0, n.jsx)(z.k, {
                variant: "custom",
                children: p
            }), d[0] = p, d[1] = a) : a = d[1];
            let j = w ? "line-clamp-2" : void 0,
                C = !w;
            d[2] !== f || d[3] !== j || d[4] !== C ? (t = (0, n.jsx)(z.j, {
                className: j,
                truncate: C,
                children: f
            }), d[2] = f, d[3] = j, d[4] = C, d[5] = t) : t = d[5], d[6] !== y ? (i = null == y ? null : (0, n.jsx)(z.m, {
                children: y
            }), d[6] = y, d[7] = i) : i = d[7], d[8] !== u ? (l = null != u ? (0, n.jsx)(z.m, {
                visibility: "interaction",
                children: (0, n.jsx)(I.$b, {
                    className: u ? void 0 : "-rotate-90"
                })
            }) : null, d[8] = u, d[9] = l) : l = d[9], d[10] !== a || d[11] !== t || d[12] !== i || d[13] !== l ? (s = (0, n.jsxs)(n.Fragment, {
                children: [a, t, i, l]
            }), d[10] = a, d[11] = t, d[12] = i, d[13] = l, d[14] = s) : s = d[14];
            let k = s;
            if (null != m) {
                let e, a = b ? m : void 0,
                    t = b ? void 0 : f;
                return d[15] !== k || d[16] !== m || d[17] !== f || d[18] !== v || d[19] !== g || d[20] !== b || d[21] !== t || d[22] !== a ? (e = (0, n.jsx)(z.l, {
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
                    children: k
                }), d[15] = k, d[16] = m, d[17] = f, d[18] = v, d[19] = g, d[20] = b, d[21] = t, d[22] = a, d[23] = e) : e = d[23], e
            }
            if (null != h) {
                let e;
                return d[24] !== k || d[25] !== c || d[26] !== u || d[27] !== f || d[28] !== h ? (e = (0, n.jsx)(z.h, {
                    "aria-controls": c,
                    "aria-expanded": u,
                    "aria-label": f,
                    className: "select-none",
                    onClick: h,
                    title: f,
                    tone: "muted",
                    children: k
                }), d[24] = k, d[25] = c, d[26] = u, d[27] = f, d[28] = h, d[29] = e) : e = d[29], e
            }
            return d[30] !== k || d[31] !== f ? (o = (0, n.jsx)(z.b, {
                className: "select-none",
                tone: "muted",
                title: f,
                children: k
            }), d[30] = k, d[31] = f, d[32] = o) : o = d[32], o
        }
        var O = t("SdTP"),
            R = t("OAFW"),
            E = t("ZALr");
        let T = {
                opacity: 0,
                transform: "translateX(0%)"
            },
            V = {
                Content: function(e) {
                    let a, t, i, s, o, c, m, p, f, y, x, h, v, g, b = (0, r.c)(32);
                    b[0] !== e ? ({
                        children: a,
                        className: t,
                        isHidden: c,
                        variant: m,
                        density: p,
                        scrollable: f,
                        scrollClassName: o,
                        onScroll: i,
                        ...s
                    } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = i, b[4] = s, b[5] = o, b[6] = c, b[7] = m, b[8] = p, b[9] = f) : (a = b[1], t = b[2], i = b[3], s = b[4], o = b[5], c = b[6], m = b[7], p = b[8], f = b[9]);
                    let j = void 0 !== c && c,
                        C = void 0 === m ? "summary" : m,
                        k = void 0 === p ? "default" : p,
                        N = void 0 === f || f,
                        {
                            fullWidth: z,
                            isVisible: S,
                            placement: _
                        } = (0, u.useContext)(L.a),
                        M = S && !j,
                        A = (0, u.useRef)(null),
                        I = (0, u.useRef)(0);
                    b[10] !== M ? (y = () => {
                        if (M && 0 !== I.current && null != A.current) {
                            let e = I.current,
                                a = () => {
                                    null != A.current && (A.current.scrollTop = e)
                                };
                            a();
                            let t = requestAnimationFrame(a);
                            return () => cancelAnimationFrame(t)
                        }
                    }, x = [M], b[10] = M, b[11] = y, b[12] = x) : (y = b[11], x = b[12]), (0, u.useLayoutEffect)(y, x);
                    let P = !N && "isolate",
                        B = z && "bg-surface";
                    b[13] !== t || b[14] !== P || b[15] !== B ? (h = (0, l.b)("group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden", P, B, t), b[13] = t, b[14] = P, b[15] = B, b[16] = h) : h = b[16];
                    let O = z || "docked" === _,
                        R = N ? void 0 : i;
                    return b[17] !== a || b[18] !== M || b[19] !== i || b[20] !== o || b[21] !== N || b[22] !== C ? (v = N ? (0, n.jsx)(d.a.div, {
                        ref: A,
                        className: (0, l.b)("flex h-fit max-h-full min-h-0 min-w-0 flex-col overflow-x-hidden overflow-y-auto", o),
                        layoutScroll: !0,
                        onScroll: e => {
                            M && null != A.current && (I.current = e.currentTarget.scrollTop, i?.(e))
                        },
                        children: (0, n.jsx)("div", {
                            className: (0, l.b)("flex flex-col", "summary" === C && "gap-2 py-2.5"),
                            children: a
                        })
                    }) : a, b[17] = a, b[18] = M, b[19] = i, b[20] = o, b[21] = N, b[22] = C, b[23] = v) : v = b[23], b[24] !== k || b[25] !== s || b[26] !== O || b[27] !== R || b[28] !== v || b[29] !== h || b[30] !== C ? (g = (0, n.jsx)(w.c, {
                        className: h,
                        "data-summary-panel-variant": C,
                        "data-summary-panel-density": k,
                        unstyled: O,
                        variant: "island",
                        ...s,
                        onScroll: R,
                        children: v
                    }), b[24] = k, b[25] = s, b[26] = O, b[27] = R, b[28] = v, b[29] = h, b[30] = C, b[31] = g) : g = b[31], g
                },
                HeaderButton: function(e) {
                    let a, t, l, s, o, d, c, u, m, p, f, y = (0, r.c)(26);
                    y[0] !== e ? ({
                        analytics: a,
                        label: l,
                        onClick: s,
                        pressed: o,
                        shortcut: d,
                        size: c,
                        ...t
                    } = e, y[0] = e, y[1] = a, y[2] = t, y[3] = l, y[4] = s, y[5] = o, y[6] = d, y[7] = c) : (a = y[1], t = y[2], l = y[3], s = y[4], o = y[5], d = y[6], c = y[7]);
                    let x = void 0 === c ? "toolbar" : c,
                        h = o ? "secondary" : "toolbar";
                    return y[8] !== a || y[9] !== s || y[10] !== o ? (u = e => {
                        (0, L.b)(a, o ? "close_panel" : "open_panel"), s?.(e)
                    }, y[8] = a, y[9] = s, y[10] = o, y[11] = u) : u = y[11], y[12] !== x ? (m = "iconMd" === x ? (0, n.jsx)(j.a, {
                        "aria-hidden": !1,
                        asset: O.a
                    }) : (0, n.jsx)(C.b, {
                        "aria-hidden": !1,
                        icon: {
                            assets: {
                                16: R.a,
                                20: E.a
                            }
                        }
                    }), y[12] = x, y[13] = m) : m = y[13], y[14] !== t || y[15] !== l || y[16] !== o || y[17] !== x || y[18] !== h || y[19] !== u || y[20] !== m ? (p = (0, n.jsx)(b.a, {
                        "data-thread-summary-panel-toggle": !0,
                        size: x,
                        uniform: !0,
                        color: h,
                        "aria-label": l,
                        "aria-pressed": o,
                        onClick: u,
                        ...t,
                        children: m
                    }), y[14] = t, y[15] = l, y[16] = o, y[17] = x, y[18] = h, y[19] = u, y[20] = m, y[21] = p) : p = y[21], y[22] !== l || y[23] !== d || y[24] !== p ? (f = (0, n.jsx)(i.a, {
                        content: l,
                        shortcut: d,
                        openDelay: 250,
                        children: p
                    }), y[22] = l, y[23] = d, y[24] = p, y[25] = f) : f = y[25], f
                },
                IconButton: z.a,
                Item: z.b,
                ItemActionButton: z.c,
                ItemActionLink: z.d,
                ItemActions: z.e,
                ItemAvatarGroup: z.g,
                ItemAvatarButton: z.f,
                ItemButton: z.h,
                ItemGroup: z.i,
                ItemLabel: z.j,
                ItemLeading: z.k,
                ItemMeta: z.m,
                ItemTrigger: z.n,
                List: N.a,
                PopoverContent: function(e) {
                    let a, t, i, l, s = (0, r.c)(9),
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
                    }, s[1] = o, s[2] = t) : t = s[2], s[3] !== d || s[4] !== t ? (i = (0, n.jsx)(L.a.Provider, {
                        value: t,
                        children: d
                    }), s[3] = d, s[4] = t, s[5] = i) : i = s[5], s[6] !== u || s[7] !== i ? (l = (0, n.jsx)("div", {
                        "data-pip-obstacle": u,
                        className: "flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col gap-3",
                        style: a,
                        children: i
                    }), s[6] = u, s[7] = i, s[8] = l) : l = s[8], l
                },
                Root: function(e) {
                    let a, t, i, f, g, b, w, j, C, N, z, S, M, A, I, P, B, O, R, E, V, H, W, Z, U, D, F, G = (0, r.c)(122),
                        {
                            analytics: q,
                            animateOnExit: K,
                            animateOnMount: Y,
                            children: Q,
                            fillHeight: X,
                            fullWidth: $,
                            fullWidthTransition: J,
                            isPIPObstacle: ee,
                            maxHeight: ea,
                            placement: et,
                            portalContainer: en,
                            reserveToolbarSpace: er,
                            resizer: ei,
                            shouldHideInlineImmediately: el,
                            shouldShow: es,
                            width: eo
                        } = e,
                        ed = void 0 === K || K,
                        ec = void 0 !== Y && Y,
                        eu = void 0 !== X && X,
                        em = void 0 !== $ && $,
                        ep = void 0 === J ? "default" : J,
                        ef = void 0 === et ? "floating" : et,
                        ey = void 0 !== er && er,
                        ex = void 0 === eo ? 300 : eo,
                        eh = (0, p.a)(),
                        [ev, eg] = (0, u.useState)(null),
                        eb = null == ev ? null : ev / 2,
                        ew = (0, c.z)(x.G),
                        ej = (0, c.z)(v.h),
                        eC = (0, c.z)(k.c),
                        ek = (0, s.a)(),
                        eN = es && ek && !el,
                        ez = (0, o.a)(),
                        [eS, eL] = (0, u.useState)(es),
                        [e_, eM] = (0, u.useState)(ec && !eC && !ew),
                        eA = "docked" === ef ? T : _.b.hidden,
                        eI = es ? _.b.visible : eA,
                        eP = (0, u.useRef)(null),
                        eB = (0, u.useRef)(ew),
                        eO = (0, u.useRef)(ej),
                        eR = (0, u.useRef)(!1),
                        eE = (0, u.useRef)(ec);
                    if (eC || ew) {
                        let e;
                        G[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                            duration: 0
                        }, G[0] = e) : e = G[0], a = e
                    } else a = "docked" === ef ? y.b : _.a;
                    G[1] !== ep ? (t = "relaxed" === ep ? {
                        ...y.a,
                        duration: .3
                    } : y.a, G[1] = ep, G[2] = t) : t = G[2];
                    let eT = t;
                    G[3] !== ew || G[4] !== ek || G[5] !== ej || G[6] !== el || G[7] !== eC || G[8] !== ez || G[9] !== eI ? (i = () => {
                        if (!ek) return;
                        eR.current || queueMicrotask(() => {
                            eR.current = !0
                        });
                        let e = eB.current !== ew,
                            a = eO.current !== ej,
                            t = eP.current !== eI;
                        eP.current = eI, eB.current = ew, eO.current = ej, ez.stop(), !eR.current && !eE.current || e || a || !t && eR.current || el || eC ? (ez.set(eI), eL(eI.opacity > 0), eM(!1)) : ez.start(eI)
                    }, G[3] = ew, G[4] = ek, G[5] = ej, G[6] = el, G[7] = eC, G[8] = ez, G[9] = eI, G[10] = i) : i = G[10], G[11] !== ew || G[12] !== ek || G[13] !== ej || G[14] !== en || G[15] !== el || G[16] !== eC || G[17] !== ez || G[18] !== eI ? (f = [ew, ek, ej, en, el, eC, ez, eI], G[11] = ew, G[12] = ek, G[13] = ej, G[14] = en, G[15] = el, G[16] = eC, G[17] = ez, G[18] = eI, G[19] = f) : f = G[19], (0, u.useLayoutEffect)(i, f), G[20] !== ef || G[21] !== ei ? (g = e => {
                        let a = e?.parentElement;
                        if (null == ei || "docked" !== ef || null == a) return;
                        let t = () => eg(a.clientWidth);
                        t();
                        let n = new ResizeObserver(t);
                        return n.observe(a), () => n.disconnect()
                    }, G[20] = ef, G[21] = ei, G[22] = g) : g = G[22];
                    let eV = "docked" === ef ? "relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]" : "absolute";
                    G[23] !== em || G[24] !== ef || G[25] !== en || G[26] !== ey || G[27] !== eV ? (b = (0, l.b)("pointer-events-none z-40", eV, "floating" === ef && [null != en && ["portalLayout-_LSX2_", ey && "belowToolbar-VYFp43"], null == en && (em ? "inset-0" : "top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) max-w-full")]), G[23] = em, G[24] = ef, G[25] = en, G[26] = ey, G[27] = eV, G[28] = b) : b = G[28], G[29] !== ea ? (w = {
                        maxHeight: ea
                    }, G[29] = ea, G[30] = w) : w = G[30];
                    let eH = !eN,
                        eW = !eN;
                    G[31] !== ec || G[32] !== ef || G[33] !== eC ? (j = "docked" === ef && !!ec && !eC && {
                        width: 0
                    }, G[31] = ec, G[32] = ef, G[33] = eC, G[34] = j) : j = G[34], G[35] !== em || G[36] !== ef || G[37] !== en || G[38] !== es || G[39] !== ex ? (C = "docked" === ef ? {
                        width: es ? "auto" : 0
                    } : {
                        "--thread-floating-panel-full-width-progress": +!!em,
                        width: null == en ? "auto" : `calc(min(${ex}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`
                    }, G[35] = em, G[36] = ef, G[37] = en, G[38] = es, G[39] = ex, G[40] = C) : C = G[40], G[41] !== ed || G[42] !== ef ? (N = ed && "docked" === ef ? {
                        width: 0
                    } : void 0, G[41] = ed, G[42] = ef, G[43] = N) : N = G[43];
                    let eZ = "docked" === ef || eC ? a : eT,
                        eU = "docked" === ef ? "w-max max-w-[50cqw]" : "max-w-full",
                        eD = "floating" === ef && null == en && !em && "pe-2",
                        eF = eu && "h-full",
                        eG = (null != en || em) && "w-full";
                    G[44] !== eU || G[45] !== eD || G[46] !== eF || G[47] !== eG ? (z = (0, l.b)("relative isolate flex max-h-full", eU, eD, eF, eG), G[44] = eU, G[45] = eD, G[46] = eF, G[47] = eG, G[48] = z) : z = G[48];
                    let eq = eN && (void 0 === ee || ee) ? "thread-summary-panel" : void 0,
                        eK = (null != en || em) && "w-full";
                    G[49] !== eK ? (S = (0, l.b)("pointer-events-none absolute inset-y-0 start-0 max-w-full", eK), G[49] = eK, G[50] = S) : S = G[50], G[51] !== em || G[52] !== en || G[53] !== ex ? (M = null != en || em ? void 0 : {
                        width: ex
                    }, G[51] = em, G[52] = en, G[53] = ex, G[54] = M) : M = G[54], G[55] !== eq || G[56] !== S || G[57] !== M ? (A = (0, n.jsx)("div", {
                        "data-pip-obstacle": eq,
                        className: S,
                        style: M,
                        "aria-hidden": !0
                    }), G[55] = eq, G[56] = S, G[57] = M, G[58] = A) : A = G[58];
                    let eY = es && (!ec || eC) ? _.b.visible : eA,
                        eQ = eu && "h-full",
                        eX = (null != en || em) && "w-full",
                        e$ = el && "invisible";
                    G[59] !== eQ || G[60] !== eX || G[61] !== e$ ? (I = (0, l.b)("pointer-events-none max-h-full min-h-0 min-w-0 max-w-full", eQ, eX, e$), G[59] = eQ, G[60] = eX, G[61] = e$, G[62] = I) : I = G[62];
                    let eJ = ed ? eA : void 0,
                        e1 = a;
                    G[63] === Symbol.for("react.memo_cache_sentinel") ? (P = () => {
                        eL(!0), eM(!0)
                    }, G[63] = P) : P = G[63], G[64] !== ek || G[65] !== es ? (B = () => {
                        eL(es && ek), eM(!1)
                    }, G[64] = ek, G[65] = es, G[66] = B) : B = G[66];
                    let e0 = "docked" === ef && "border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]",
                        e2 = eu && "h-full",
                        e3 = (null != en || em) && "w-full",
                        e5 = eN ? "pointer-events-auto" : "pointer-events-none";
                    G[67] !== e0 || G[68] !== e2 || G[69] !== e3 || G[70] !== e5 ? (O = (0, l.b)("flex max-h-full min-h-0 max-w-full flex-col gap-3", e0, e2, e3, e5), G[67] = e0, G[68] = e2, G[69] = e3, G[70] = e5, G[71] = O) : O = G[71], G[72] !== em || G[73] !== en || G[74] !== ex ? (R = null != en || em ? void 0 : {
                        width: ex
                    }, G[72] = em, G[73] = en, G[74] = ex, G[75] = R) : R = G[75];
                    let e6 = eN ? q : void 0,
                        e4 = (eN || eS) && !el;
                    G[76] !== em || G[77] !== e_ || G[78] !== ef || G[79] !== e6 || G[80] !== e4 ? (E = {
                        analytics: e6,
                        fullWidth: em,
                        isAnimating: e_,
                        isVisible: e4,
                        placement: ef
                    }, G[76] = em, G[77] = e_, G[78] = ef, G[79] = e6, G[80] = e4, G[81] = E) : E = G[81], G[82] !== Q || G[83] !== E ? (V = (0, n.jsx)(L.a.Provider, {
                        value: E,
                        children: Q
                    }), G[82] = Q, G[83] = E, G[84] = V) : V = G[84], G[85] !== O || G[86] !== R || G[87] !== V ? (H = (0, n.jsx)("div", {
                        className: O,
                        style: R,
                        children: V
                    }), G[85] = O, G[86] = R, G[87] = V, G[88] = H) : H = G[88], G[89] !== eY || G[90] !== I || G[91] !== eJ || G[92] !== B || G[93] !== H || G[94] !== a || G[95] !== ez ? (W = (0, n.jsx)(d.a.div, {
                        initial: eY,
                        className: I,
                        animate: ez,
                        exit: eJ,
                        transition: e1,
                        onAnimationStart: P,
                        onAnimationComplete: B,
                        children: H
                    }), G[89] = eY, G[90] = I, G[91] = eJ, G[92] = B, G[93] = H, G[94] = a, G[95] = ez, G[96] = W) : W = G[96], G[97] !== z || G[98] !== A || G[99] !== W ? (Z = (0, n.jsxs)("div", {
                        className: z,
                        children: [A, W]
                    }), G[97] = z, G[98] = A, G[99] = W, G[100] = Z) : Z = G[100], G[101] !== eh || G[102] !== eb || G[103] !== ef || G[104] !== ei || G[105] !== ex ? (U = "docked" === ef && null != ei && null != eb && eb > 320 && (0, n.jsx)("div", {
                        className: "pointer-events-auto",
                        children: (0, n.jsx)(h.a, {
                            ariaLabel: eh.formatMessage({
                                id: "splitView.resize",
                                defaultMessage: "Resize panels",
                                description: "Accessible name for the split-view resize handle"
                            }),
                            edge: "left",
                            extendIntoToolbar: !1,
                            defaultSize: ei.defaultWidth,
                            getCurrentSize: () => Math.min(ex, eb),
                            minimumSize: 320,
                            maximumSize: eb,
                            setSize: ei.onWidthChange
                        })
                    }), G[101] = eh, G[102] = eb, G[103] = ef, G[104] = ei, G[105] = ex, G[106] = U) : U = G[106], G[107] !== g || G[108] !== b || G[109] !== w || G[110] !== eH || G[111] !== eW || G[112] !== j || G[113] !== C || G[114] !== N || G[115] !== eZ || G[116] !== Z || G[117] !== U ? (D = (0, n.jsxs)(d.a.div, {
                        ref: g,
                        className: b,
                        style: w,
                        "aria-hidden": eH,
                        inert: eW,
                        initial: j,
                        animate: C,
                        exit: N,
                        transition: eZ,
                        children: [Z, U]
                    }), G[107] = g, G[108] = b, G[109] = w, G[110] = eH, G[111] = eW, G[112] = j, G[113] = C, G[114] = N, G[115] = eZ, G[116] = Z, G[117] = U, G[118] = D) : D = G[118];
                    let e9 = D;
                    return G[119] !== e9 || G[120] !== en ? (F = null == en ? e9 : (0, m.createPortal)(e9, en), G[119] = e9, G[120] = en, G[121] = F) : F = G[121], F
                },
                Section: S.a,
                SectionActions: z.o,
                SectionCount: function(e) {
                    let a, t, i = (0, r.c)(3),
                        {
                            count: l
                        } = e;
                    return 0 === l ? null : (i[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(g.a, {}), i[0] = a) : a = i[0], i[1] !== l ? (t = (0, n.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-sm text-tertiary group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
                        children: [a, (0, n.jsx)("span", {
                            children: (0, n.jsx)(f.c, {
                                value: l
                            })
                        })]
                    }), i[1] = l, i[2] = t) : t = i[2], t)
                },
                SourceDetails: function(e) {
                    let a, t, i, l, s, o, d, c, u = (0, r.c)(41),
                        {
                            children: m,
                            href: p,
                            icon: f,
                            label: y,
                            meta: x,
                            summaryMeta: h,
                            presentation: v,
                            onOpen: g,
                            onOpenLink: b,
                            requiresConfirmation: w,
                            showHoverActions: j
                        } = e;
                    if ("summary" === (void 0 === v ? "side-panel" : v)) {
                        let e;
                        return u[0] !== p || u[1] !== f || u[2] !== y || u[3] !== g || u[4] !== b || u[5] !== w || u[6] !== j || u[7] !== h ? (e = (0, n.jsx)("li", {
                            children: (0, n.jsx)(B, {
                                href: p,
                                icon: f,
                                label: y,
                                meta: h,
                                onOpen: g,
                                onOpenLink: b,
                                requiresConfirmation: w,
                                showHoverActions: j
                            })
                        }), u[0] = p, u[1] = f, u[2] = y, u[3] = g, u[4] = b, u[5] = w, u[6] = j, u[7] = h, u[8] = e) : e = u[8], e
                    }
                    u[9] !== f ? (a = (0, n.jsx)("span", {
                        className: "flex h-5 w-[18px] shrink-0 items-center justify-center",
                        children: f
                    }), u[9] = f, u[10] = a) : a = u[10], u[11] !== y ? (t = (0, n.jsx)("span", {
                        className: "text-sm font-medium break-words text-default",
                        children: y
                    }), u[11] = y, u[12] = t) : t = u[12], u[13] !== x ? (i = null == x ? null : (0, n.jsx)("span", {
                        className: "text-xs break-all text-tertiary",
                        children: x
                    }), u[13] = x, u[14] = i) : i = u[14], u[15] !== t || u[16] !== i ? (l = (0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-1 flex-col gap-0.5",
                        children: [t, i]
                    }), u[15] = t, u[16] = i, u[17] = l) : l = u[17], u[18] !== a || u[19] !== l ? (s = (0, n.jsxs)(n.Fragment, {
                        children: [a, l]
                    }), u[18] = a, u[19] = l, u[20] = s) : s = u[20];
                    let C = s;
                    if (null != p) {
                        let e, a = j ? p : void 0,
                            t = j ? void 0 : p;
                        u[21] !== C || u[22] !== p || u[23] !== y || u[24] !== b || u[25] !== w || u[26] !== j || u[27] !== a || u[28] !== t ? (e = (0, n.jsx)(A.a, {
                            "aria-label": y,
                            className: "flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            href: p,
                            initiator: "markdown_link_click",
                            requiresConfirmation: w,
                            onUnmodifiedClick: b,
                            showHoverActions: j,
                            tooltipContent: a,
                            title: t,
                            children: C
                        }), u[21] = C, u[22] = p, u[23] = y, u[24] = b, u[25] = w, u[26] = j, u[27] = a, u[28] = t, u[29] = e) : e = u[29], o = e
                    } else if (null != g) {
                        let e;
                        u[30] !== C || u[31] !== y || u[32] !== g ? (e = (0, n.jsx)("button", {
                            "aria-label": y,
                            className: "flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            type: "button",
                            onClick: g,
                            children: C
                        }), u[30] = C, u[31] = y, u[32] = g, u[33] = e) : e = u[33], o = e
                    } else {
                        let e;
                        u[34] !== C ? (e = (0, n.jsx)("div", {
                            className: "flex w-full items-center gap-2 text-start",
                            children: C
                        }), u[34] = C, u[35] = e) : e = u[35], o = e
                    }
                    return u[36] !== m ? (d = null == m ? null : (0, n.jsx)("div", {
                        className: "mt-3 flex flex-col gap-1 ps-6 text-sm leading-5 text-secondary",
                        children: m
                    }), u[36] = m, u[37] = d) : d = u[37], u[38] !== o || u[39] !== d ? (c = (0, n.jsxs)("li", {
                        className: "border-b border-default py-4 last:border-b-0",
                        children: [o, d]
                    }), u[38] = o, u[39] = d, u[40] = c) : c = u[40], c
                },
                SourceRow: B,
                Sources: function(e) {
                    let a, t, i, l, s, o, d = (0, r.c)(17),
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
                    return d[7] !== m || d[8] !== a ? (t = (0, n.jsx)(z.i, {
                        "aria-label": m,
                        role: "list",
                        children: a
                    }), d[7] = m, d[8] = a, d[9] = t) : t = d[9], d[10] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(z.k, {
                        children: (0, n.jsx)(P, {})
                    }), d[10] = i) : i = d[10], d[11] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(z.j, {
                        children: (0, n.jsx)(M.a, {
                            id: "codex.localConversation.sources.showAll",
                            defaultMessage: "View all",
                            description: "Button that opens the complete source list in the side panel"
                        })
                    }), d[11] = l) : l = d[11], d[12] !== p ? (s = (0, n.jsxs)(z.h, {
                        interaction: "foreground",
                        onClick: p,
                        tone: "conversation-summary",
                        children: [i, l]
                    }), d[12] = p, d[13] = s) : s = d[13], d[14] !== t || d[15] !== s ? (o = (0, n.jsxs)(n.Fragment, {
                        children: [t, s]
                    }), d[14] = t, d[15] = s, d[16] = o) : o = d[16], o
                },
                SourcesSidePanel: function(e) {
                    let a, t = (0, r.c)(2),
                        {
                            children: i
                        } = e;
                    return t[0] !== i ? (a = (0, n.jsx)("div", {
                        className: "h-full min-h-0 overflow-y-auto bg-surface",
                        children: i
                    }), t[0] = i, t[1] = a) : a = t[1], a
                },
                SourcesSidePanelList: function(e) {
                    let a, t = (0, r.c)(3),
                        {
                            children: i,
                            label: l
                        } = e;
                    return t[0] !== i || t[1] !== l ? (a = (0, n.jsx)("ul", {
                        "aria-label": l,
                        className: "flex flex-col px-4",
                        children: i
                    }), t[0] = i, t[1] = l, t[2] = a) : a = t[2], a
                },
                SourcesViewport: function(e) {
                    let a, t, i, s, o = (0, r.c)(8);
                    return o[0] !== e ? ({
                        className: a,
                        ...t
                    } = e, o[0] = e, o[1] = a, o[2] = t) : (a = o[1], t = o[2]), o[3] !== a ? (i = (0, l.b)("vertical-scroll-fade-mask -mx-2 max-h-52 overflow-x-hidden overflow-y-auto overscroll-contain px-2", a), o[3] = a, o[4] = i) : i = o[4], o[5] !== t || o[6] !== i ? (s = (0, n.jsx)("div", {
                        ...t,
                        className: i
                    }), o[5] = t, o[6] = i, o[7] = s) : s = o[7], s
                }
            };

        function H(e) {
            let a, t = (0, r.c)(2);
            t[0] !== e ? (a = void 0 === e ? {} : e, t[0] = e, t[1] = a) : a = t[1];
            let {
                afterAnimation: n
            } = a, {
                isVisible: i,
                isAnimating: l
            } = (0, u.useContext)(L.a);
            return i && (!(void 0 !== n && n) || !l)
        }
    }),
    KWzM: (function(e, a, t) {
        t.d(a, {}, {
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