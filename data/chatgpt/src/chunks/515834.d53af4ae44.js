export const __rspack_esm_id = 515834;
export const __rspack_esm_ids = [515834];
export const __webpack_modules__ = {
    BWrV: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            l = t("on57"),
            i = t("KUdL"),
            s = t.n(i),
            o = t("zd8w"),
            d = t("oyxz"),
            c = t("ygO2"),
            u = t("HOLv"),
            m = t("GzOO"),
            p = t("MIZk"),
            f = t("ZAU2"),
            x = t("eZ0C");

        function h(e) {
            let a, t, i, h, g, b, w, j, C, k, N, z, S = (0, r.c)(80),
                {
                    children: _,
                    empty: M,
                    getKey: L,
                    getNewItemPosition: A,
                    isLoadingMore: P,
                    items: I,
                    listAriaLabel: O,
                    listClassName: B,
                    onVisibleItemsChange: T,
                    onLoadMore: E,
                    paginationButtonClassName: R,
                    presentation: V,
                    preserveExpandedOrder: H,
                    renderFooter: W,
                    renderPagination: F,
                    visibleItemIncrement: q,
                    visibleItemLimit: Z
                } = e,
                U = void 0 !== P && P,
                G = void 0 === V ? "summary" : V,
                Q = void 0 !== H && H,
                D = void 0 === Z ? 6 : Z,
                {
                    analytics: K
                } = (0, o.useContext)(f.a),
                [X, Y] = (0, o.useState)(D),
                [$, J] = (0, o.useState)(null);
            if (S[0] !== $ || S[1] !== L || S[2] !== A || S[3] !== I || S[4] !== Q || S[5] !== X) {
                if (a = I, Q && null != $) {
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
                    let n = s()(I.map(e), t);
                    if (a = n.map(v), n.length !== $.size || n.some(e => {
                            let {
                                key: a
                            } = e;
                            return !$.has(a)
                        })) {
                        let e;
                        J(new Map(n.map(y))), S[12] !== $ || S[13] !== X ? (e = e => {
                            let {
                                key: a
                            } = e;
                            return ($.get(a) ?? 1 / 0) < X
                        }, S[12] = $, S[13] = X, S[14] = e) : e = S[14], Y(Math.max(X, n.findLastIndex(e) + 1))
                    }
                }
                S[0] = $, S[1] = L, S[2] = A, S[3] = I, S[4] = Q, S[5] = X, S[6] = a
            } else a = S[6];
            S[15] !== a || S[16] !== X ? (t = a.slice(0, X), S[15] = a, S[16] = X, S[17] = t) : t = S[17];
            let ee = t;
            if (S[18] !== T || S[19] !== ee ? (i = () => {
                    T?.(ee)
                }, h = [T, ee], S[18] = T, S[19] = ee, S[20] = i, S[21] = h) : (i = S[20], h = S[21]), (0, o.useEffect)(i, h), 0 === I.length && null == E) return M ?? null;
            let ea = I.length > D || null != E,
                et = I.length - ee.length,
                en = 0 === et && null == E,
                er = q ?? 50,
                el = null == E ? Math.min(et, er) : er;
            S[22] !== K || S[23] !== L || S[24] !== et || S[25] !== en || S[26] !== U || S[27] !== I.length || S[28] !== E || S[29] !== a || S[30] !== Q || S[31] !== er || S[32] !== D ? (g = () => {
                !U && ((0, f.b)(K, en ? "show_less" : "show_more"), Q && J(en ? null : new Map(a.map((e, a) => [L(e, a), a]))), Y(e => en ? D : null == E ? Math.min(I.length, e + er) : e + er), et < er && E?.())
            }, S[22] = K, S[23] = L, S[24] = et, S[25] = en, S[26] = U, S[27] = I.length, S[28] = E, S[29] = a, S[30] = Q, S[31] = er, S[32] = D, S[33] = g) : g = S[33];
            let ei = g;
            S[34] !== _ || S[35] !== L || S[36] !== O || S[37] !== B || S[38] !== ee ? (b = null == O ? (0, n.jsx)(p.j, {
                className: B,
                children: ee.map((e, a) => (0, n.jsx)(o.Fragment, {
                    children: _(e, a)
                }, L(e, a)))
            }) : (0, n.jsx)(p.j, {
                "aria-label": O,
                className: B,
                role: "list",
                children: ee.map((e, a) => (0, n.jsx)("div", {
                    role: "listitem",
                    children: _(e, a)
                }, L(e, a)))
            }), S[34] = _, S[35] = L, S[36] = O, S[37] = B, S[38] = ee, S[39] = b) : b = S[39];
            let es = b;
            return S[40] !== W || S[41] !== ee ? (w = W?.(ee), S[40] = W, S[41] = ee, S[42] = w) : w = S[42], S[43] !== ea || S[44] !== en || S[45] !== U || S[46] !== el || S[47] !== F || S[48] !== ei ? (j = ea && null != F ? F({
                nextRevealCount: el,
                isExpanded: en,
                isLoadingMore: U,
                onToggle: ei
            }) : null, S[43] = ea, S[44] = en, S[45] = U, S[46] = el, S[47] = F, S[48] = ei, S[49] = j) : j = S[49], S[50] !== ea || S[51] !== en || S[52] !== U || S[53] !== G || S[54] !== F || S[55] !== ei ? (C = ea && null == F && "plain" === G ? (0, n.jsx)(m.b, {
                children: (0, n.jsx)(m.a, {
                    alignment: "content",
                    disabled: U,
                    onClick: ei,
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
            }) : null, S[50] = ea, S[51] = en, S[52] = U, S[53] = G, S[54] = F, S[55] = ei, S[56] = C) : C = S[56], S[57] !== ea || S[58] !== en || S[59] !== U || S[60] !== G || S[61] !== F || S[62] !== ei ? (k = ea && null == F && "card" === G ? (0, n.jsxs)(p.h, {
                disabled: U,
                onClick: ei,
                children: [(0, n.jsx)(p.l, {
                    variant: "custom",
                    children: (0, n.jsx)(u.a, {
                        asset: x.a
                    })
                }), (0, n.jsx)(p.k, {
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
            }) : null, S[57] = ea, S[58] = en, S[59] = U, S[60] = G, S[61] = F, S[62] = ei, S[63] = k) : k = S[63], S[64] !== ea || S[65] !== en || S[66] !== U || S[67] !== el || S[68] !== R || S[69] !== G || S[70] !== F || S[71] !== ei ? (N = ea && null == F && "summary" === G ? (0, n.jsx)(c.a, {
                className: (0, l.b)("!px-0 !py-0 text-tertiary hover:text-secondary", R),
                color: "ghostMuted",
                size: "default",
                disabled: U,
                onClick: ei,
                children: en ? (0, n.jsx)(d.a, {
                    id: "codex.localConversation.summaryPanelExpandableList.showLess",
                    defaultMessage: "Show less",
                    description: "Button label that collapses a long list in the conversation summary panel"
                }) : (0, n.jsx)(d.a, {
                    id: "codex.localConversation.summaryPanelExpandableList.showMore",
                    defaultMessage: "Show {count, number} more",
                    description: "Button label that expands a long list in the conversation summary panel",
                    values: {
                        count: el
                    }
                })
            }) : null, S[64] = ea, S[65] = en, S[66] = U, S[67] = el, S[68] = R, S[69] = G, S[70] = F, S[71] = ei, S[72] = N) : N = S[72], S[73] !== es || S[74] !== w || S[75] !== j || S[76] !== C || S[77] !== k || S[78] !== N ? (z = (0, n.jsxs)(n.Fragment, {
                children: [es, w, j, C, k, N]
            }), S[73] = es, S[74] = w, S[75] = j, S[76] = C, S[77] = k, S[78] = N, S[79] = z) : z = S[79], z
        }

        function y(e, a) {
            let {
                key: t
            } = e;
            return [t, a]
        }

        function v(e) {
            let {
                item: a
            } = e;
            return a
        }
        t.d(a, {
            a: () => h
        })
    }),
    MIZk: (function(e, a, t) {
        var n = t("ABep"),
            r = t("QosV"),
            l = t("on57"),
            i = t("zd8w"),
            s = t("oyxz"),
            o = t("ygO2"),
            d = t("PAiv"),
            c = t("bf6R"),
            u = t("yf2D"),
            m = t("CqQF"),
            p = t("Pjl1");
        let f = "group group/summary-panel-item relative isolate flex min-h-token-button-composer w-full min-w-0 items-center data-[multiline=true]:items-start gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 rounded-sm border-0 bg-transparent px-0 py-1 text-start group-data-[summary-panel-variant=dynamic-isle]/summary-panel:min-h-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row group-data-[variant=card]/summary-card:min-h-10 group-data-[variant=card]/summary-card:gap-3 group-data-[variant=card]/summary-card:rounded-none group-data-[variant=card]/summary-card:px-3 group-data-[variant=card]/summary-card:py-2 group-data-[variant=card]/summary-card:after:pointer-events-none group-data-[variant=card]/summary-card:after:absolute group-data-[variant=card]/summary-card:after:end-0 group-data-[variant=card]/summary-card:after:start-10 group-data-[variant=card]/summary-card:after:top-full group-data-[variant=card]/summary-card:after:h-px group-data-[variant=card]/summary-card:after:bg-border",
            x = "cursor-interaction before:absolute before:inset-y-0 before:-inset-x-2 before:-z-10 before:rounded-sm before:content-[''] hover:before:bg-primary-ghost-hover group-data-[variant=card]/summary-card:before:inset-x-0 group-data-[variant=card]/summary-card:before:rounded-none",
            h = {
                background: x,
                foreground: "cursor-interaction hover:text-default"
            },
            y = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
            v = "icon-sm flex items-center justify-center browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&_svg]:size-full",
            g = {
                "conversation-summary": "text-text/40",
                critical: "text-chart-red",
                default: "text-default",
                muted: "text-secondary",
                tertiary: "text-tertiary"
            },
            b = {
                intrinsic: null,
                custom: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                glyph: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                preview: "icon-sm overflow-hidden rounded-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:[&>svg]:size-full",
                status: "w-[18px] group-data-[summary-row-density=comfortable]/summary-row-density:w-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:w-4",
                thumbnail: null
            },
            w = {
                intrinsic: null,
                custom: null,
                glyph: "icon-sm browser:group-data-[summary-panel-variant=dynamic-isle]/summary-panel:size-4 [&>*]:size-full [&_svg]:size-full",
                preview: null,
                status: "icon-xs [&>*]:size-full [&_svg]:size-full",
                thumbnail: "relative size-12 overflow-hidden rounded-xl bg-surface-secondary text-default"
            },
            j = {
                critical: "text-chart-red",
                default: "text-default",
                muted: "text-tertiary"
            },
            C = {
                "action-preview": "min-w-token-button-composer justify-end overflow-hidden text-sm group-focus-within/summary-panel-item:w-token-button-composer group-hover/summary-panel-item:w-token-button-composer group-has-[[aria-expanded=true]]/summary-panel-item:w-token-button-composer",
                icon: "icon-xs [&>*]:size-full [&_svg]:size-full",
                text: "text-sm",
                thumbnail: "relative size-10 justify-center overflow-hidden rounded-xl bg-surface-secondary"
            };

        function k(e) {
            let a, t, i, s, o, d, u, m, p, h, y, v, b = (0, r.c)(26);
            b[0] !== e ? ({
                children: a,
                className: t,
                disabled: o,
                interactive: d,
                multiline: u,
                ref: s,
                showChevron: m,
                tone: p,
                ...i
            } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = i, b[4] = s, b[5] = o, b[6] = d, b[7] = u, b[8] = m, b[9] = p) : (a = b[1], t = b[2], i = b[3], s = b[4], o = b[5], d = b[6], u = b[7], m = b[8], p = b[9]);
            let w = void 0 !== o && o,
                j = void 0 !== d && d,
                C = void 0 !== u && u,
                k = void 0 === m || m,
                N = w || void 0,
                z = g[void 0 === p ? "default" : p],
                S = !w && j && x,
                _ = w && "cursor-not-allowed text-tertiary";
            b[10] !== t || b[11] !== z || b[12] !== S || b[13] !== _ ? (h = (0, l.b)(f, z, S, _, t), b[10] = t, b[11] = z, b[12] = S, b[13] = _, b[14] = h) : h = b[14];
            let M = C || void 0;
            return b[15] !== j || b[16] !== k ? (y = j && k && (0, n.jsx)(c.ec, {
                className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
            }), b[15] = j, b[16] = k, b[17] = y) : y = b[17], b[18] !== a || b[19] !== i || b[20] !== s || b[21] !== h || b[22] !== M || b[23] !== y || b[24] !== N ? (v = (0, n.jsxs)("div", {
                ...i,
                "aria-disabled": N,
                className: h,
                "data-slot": "thread-summary-panel-item",
                "data-multiline": M,
                ref: s,
                children: [a, y]
            }), b[18] = a, b[19] = i, b[20] = s, b[21] = h, b[22] = M, b[23] = y, b[24] = N, b[25] = v) : v = b[25], v
        }

        function N(e) {
            let a, t, o, d, u, m, p, x, v, b, w, j, C, k, N, z, S = (0, r.c)(36);
            S[0] !== e ? ({
                children: a,
                className: t,
                disabled: u,
                interaction: m,
                multiline: p,
                ref: d,
                showChevron: x,
                tone: v,
                type: b,
                unread: w,
                ...o
            } = e, S[0] = e, S[1] = a, S[2] = t, S[3] = o, S[4] = d, S[5] = u, S[6] = m, S[7] = p, S[8] = x, S[9] = v, S[10] = b, S[11] = w) : (a = S[1], t = S[2], o = S[3], d = S[4], u = S[5], m = S[6], p = S[7], x = S[8], v = S[9], b = S[10], w = S[11]);
            let _ = void 0 !== u && u,
                M = void 0 === m ? "background" : m,
                L = void 0 !== p && p,
                A = void 0 === x || x,
                P = void 0 === v ? "default" : v,
                I = void 0 === b ? "button" : b,
                O = void 0 !== w && w,
                B = (0, i.useId)();
            S[12] !== o || S[13] !== O || S[14] !== B ? (j = O ? [o["aria-describedby"], B].filter(Boolean).join(" ") : o["aria-describedby"], S[12] = o, S[13] = O, S[14] = B, S[15] = j) : j = S[15];
            let T = j,
                E = !_ && h[M],
                R = g[P];
            S[16] !== t || S[17] !== R || S[18] !== E ? (C = (0, l.b)(f, E, y, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", R, t), S[16] = t, S[17] = R, S[18] = E, S[19] = C) : C = S[19];
            let V = L || void 0;
            return S[20] !== O || S[21] !== B ? (k = O ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                }), (0, n.jsx)("span", {
                    id: B,
                    className: "sr-only",
                    children: (0, n.jsx)(s.a, {
                        id: "sidebar.navItem.unread",
                        defaultMessage: "Unread updates",
                        description: "Accessible description for a navigation item with unread updates"
                    })
                })]
            }) : null, S[20] = O, S[21] = B, S[22] = k) : k = S[22], S[23] !== A ? (N = A && (0, n.jsx)(c.ec, {
                className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
            }), S[23] = A, S[24] = N) : N = S[24], S[25] !== a || S[26] !== T || S[27] !== _ || S[28] !== o || S[29] !== d || S[30] !== C || S[31] !== V || S[32] !== k || S[33] !== N || S[34] !== I ? (z = (0, n.jsxs)("button", {
                ...o,
                "aria-describedby": T,
                className: C,
                "data-slot": "thread-summary-panel-item-button",
                "data-multiline": V,
                disabled: _,
                ref: d,
                type: I,
                children: [a, k, N]
            }), S[25] = a, S[26] = T, S[27] = _, S[28] = o, S[29] = d, S[30] = C, S[31] = V, S[32] = k, S[33] = N, S[34] = I, S[35] = z) : z = S[35], z
        }

        function z(e) {
            let a, t, i, s, o, c = (0, r.c)(10);
            c[0] !== e ? ({
                className: a,
                tone: i,
                ...t
            } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = i) : (a = c[1], t = c[2], i = c[3]);
            let u = g[void 0 === i ? "default" : i];
            return c[4] !== a || c[5] !== u ? (s = (0, l.b)(f, x, y, u, "no-underline", a), c[4] = a, c[5] = u, c[6] = s) : s = c[6], c[7] !== t || c[8] !== s ? (o = (0, n.jsx)(d.a, {
                ...t,
                className: s,
                "data-slot": "thread-summary-panel-item-link"
            }), c[7] = t, c[8] = s, c[9] = o) : o = c[9], o
        }

        function S(e) {
            let a, t, i, s, o, d, c = (0, r.c)(12);
            c[0] !== e ? ({
                children: a,
                className: t,
                type: s,
                ...i
            } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = i, c[4] = s) : (a = c[1], t = c[2], i = c[3], s = c[4]);
            let u = void 0 === s ? "button" : s;
            return c[5] !== t ? (o = (0, l.b)("flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 group-data-[variant=card]/summary-card:gap-3 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0", y, t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== i || c[9] !== o || c[10] !== u ? (d = (0, n.jsx)("button", {
                ...i,
                className: o,
                "data-slot": "thread-summary-panel-item-trigger",
                type: u,
                children: a
            }), c[7] = a, c[8] = i, c[9] = o, c[10] = u, c[11] = d) : d = c[11], d
        }

        function _(e) {
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
        }

        function M(e) {
            let a, t, i, s, o, d, c, u = (0, r.c)(15);
            u[0] !== e ? ({
                children: a,
                className: t,
                variant: s,
                ...i
            } = e, u[0] = e, u[1] = a, u[2] = t, u[3] = i, u[4] = s) : (a = u[1], t = u[2], i = u[3], s = u[4]);
            let m = void 0 === s ? "glyph" : s,
                p = w[m],
                f = b[m];
            return u[5] !== t || u[6] !== f ? (o = (0, l.b)("me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4", f, t), u[5] = t, u[6] = f, u[7] = o) : o = u[7], u[8] !== a || u[9] !== p ? (d = null == p ? a : (0, n.jsx)("span", {
                className: (0, l.b)("flex shrink-0 items-center justify-center", p),
                children: a
            }), u[8] = a, u[9] = p, u[10] = d) : d = u[10], u[11] !== i || u[12] !== o || u[13] !== d ? (c = (0, n.jsx)("span", {
                ...i,
                className: o,
                "data-slot": "thread-summary-panel-item-leading",
                children: d
            }), u[11] = i, u[12] = o, u[13] = d, u[14] = c) : c = u[14], c
        }

        function L(e) {
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
        }

        function A(e) {
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
        }

        function P(e) {
            let a, t, i, s, o, d, c, m, p, f = (0, r.c)(18);
            f[0] !== e ? ({
                children: a,
                className: t,
                description: i,
                truncate: o,
                ...s
            } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = i, f[4] = s, f[5] = o) : (a = f[1], t = f[2], i = f[3], s = f[4], o = f[5]);
            let x = void 0 === o || o;
            f[6] !== t ? (d = (0, l.b)("min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", t), f[6] = t, f[7] = d) : d = f[7], f[8] !== a || f[9] !== x ? (c = x ? (0, n.jsx)(u.a, {
                animateOnGroupHover: !0,
                children: a
            }) : a, f[8] = a, f[9] = x, f[10] = c) : c = f[10], f[11] !== s || f[12] !== d || f[13] !== c ? (m = (0, n.jsx)("span", {
                ...s,
                className: d,
                "data-slot": "thread-summary-panel-item-label",
                children: c
            }), f[11] = s, f[12] = d, f[13] = c, f[14] = m) : m = f[14];
            let h = m;
            return f[15] !== i || f[16] !== h ? (p = null == i ? h : (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                children: [h, (0, n.jsx)(I, {
                    children: (0, n.jsx)("span", {
                        className: "text-fade-truncate",
                        children: i
                    })
                })]
            }), f[15] = i, f[16] = h, f[17] = p) : p = f[17], p
        }

        function I(e) {
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
            let x = void 0 !== o && o,
                h = void 0 === d ? "text" : d,
                y = void 0 === c ? "always" : c,
                v = x ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
                g = j[void 0 === s ? "muted" : s],
                b = C[h],
                w = "interaction" === y && "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100",
                k = "rest" === y && "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0";
            return f[8] !== t || f[9] !== v || f[10] !== g || f[11] !== b || f[12] !== w || f[13] !== k ? (u = (0, l.b)("flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", v, g, b, w, k, t), f[8] = t, f[9] = v, f[10] = g, f[11] = b, f[12] = w, f[13] = k, f[14] = u) : u = f[14], f[15] !== a || f[16] !== x ? (m = x ? (0, n.jsx)("span", {
                className: "text-fade-truncate",
                children: a
            }) : a, f[15] = a, f[16] = x, f[17] = m) : m = f[17], f[18] !== i || f[19] !== u || f[20] !== m ? (p = (0, n.jsx)("span", {
                ...i,
                className: u,
                "data-slot": "thread-summary-panel-item-meta",
                children: m
            }), f[18] = i, f[19] = u, f[20] = m, f[21] = p) : p = f[21], p
        }

        function O() {
            let e, a = (0, r.c)(1);
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(I, {
                variant: "icon",
                children: (0, n.jsx)(p.a, {})
            }), a[0] = e) : e = a[0], e
        }

        function B(e) {
            let a, t, i, s, o, d, c, u, m, p, f, x, h, y, v = (0, r.c)(30);
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
            }, v[17] = i, v[18] = f) : f = v[18], v[19] !== s ? (x = e => {
                e.stopPropagation(), s?.(e)
            }, v[19] = s, v[20] = x) : x = v[20], v[21] !== o ? (h = e => {
                e.stopPropagation(), o?.(e)
            }, v[21] = o, v[22] = h) : h = v[22], v[23] !== a || v[24] !== d || v[25] !== h || v[26] !== p || v[27] !== f || v[28] !== x ? (y = (0, n.jsx)("span", {
                ...d,
                className: p,
                "data-slot": "thread-summary-panel-item-actions",
                role: "presentation",
                onClick: f,
                onKeyDown: x,
                onPointerDown: h,
                children: a
            }), v[23] = a, v[24] = d, v[25] = h, v[26] = p, v[27] = f, v[28] = x, v[29] = y) : y = v[29], y
        }

        function T(e) {
            let a, t = (0, r.c)(2);
            return t[0] !== e ? (a = (0, n.jsx)(V, {
                className: "-me-1.5",
                ...e
            }), t[0] = e, t[1] = a) : a = t[1], a
        }

        function E(e) {
            let a, t, i, s, o, d, c, u, p = (0, r.c)(17);
            return p[0] !== e ? ({
                children: a,
                className: t,
                label: i,
                ...s
            } = e, p[0] = e, p[1] = a, p[2] = t, p[3] = i, p[4] = s) : (a = p[1], t = p[2], i = p[3], s = p[4]), p[5] !== t ? (o = (0, l.b)("-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default", y, t), p[5] = t, p[6] = o) : o = p[6], p[7] !== a ? (d = (0, n.jsx)("span", {
                className: v,
                children: a
            }), p[7] = a, p[8] = d) : d = p[8], p[9] !== i || p[10] !== s || p[11] !== o || p[12] !== d ? (c = (0, n.jsx)("a", {
                ...s,
                "aria-label": i,
                className: o,
                "data-slot": "thread-summary-panel-item-action-link",
                children: d
            }), p[9] = i, p[10] = s, p[11] = o, p[12] = d, p[13] = c) : c = p[13], p[14] !== i || p[15] !== c ? (u = (0, n.jsx)(m.a, {
                tooltipContent: i,
                delayOpen: !0,
                children: c
            }), p[14] = i, p[15] = c, p[16] = u) : u = p[16], u
        }

        function R(e) {
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

        function V(e) {
            let a, t, i, s, d, c, u, p, f, x, h, g, b = (0, r.c)(24);
            b[0] !== e ? ({
                children: a,
                className: t,
                color: u,
                disableTooltip: i,
                label: s,
                shortcut: c,
                tooltipContent: p,
                ...d
            } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = i, b[4] = s, b[5] = d, b[6] = c, b[7] = u, b[8] = p) : (a = b[1], t = b[2], i = b[3], s = b[4], d = b[5], c = b[6], u = b[7], p = b[8]);
            let w = void 0 === u ? "ghost" : u,
                j = void 0 === p ? s : p;
            return b[9] !== t ? (f = (0, l.b)("size-6", y, t), b[9] = t, b[10] = f) : f = b[10], b[11] !== a ? (x = (0, n.jsx)("span", {
                className: v,
                children: a
            }), b[11] = a, b[12] = x) : x = b[12], b[13] !== w || b[14] !== s || b[15] !== d || b[16] !== f || b[17] !== x ? (h = (0, n.jsx)(o.a, {
                ...d,
                "aria-label": s,
                className: f,
                color: w,
                "data-slot": "thread-summary-panel-icon-button",
                focusRing: "inset",
                size: "icon",
                uniform: !0,
                children: x
            }), b[13] = w, b[14] = s, b[15] = d, b[16] = f, b[17] = x, b[18] = h) : h = b[18], b[19] !== i || b[20] !== c || b[21] !== h || b[22] !== j ? (g = (0, n.jsx)(m.a, {
                disabled: i,
                tooltipContent: j,
                shortcut: c,
                delayOpen: !0,
                children: h
            }), b[19] = i, b[20] = c, b[21] = h, b[22] = j, b[23] = g) : g = b[23], g
        }
        t.d(a, {
            a: () => V,
            b: () => k,
            c: () => T,
            d: () => E,
            e: () => B,
            f: () => L,
            g: () => A,
            h: () => N,
            i: () => O,
            j: () => _,
            k: () => P,
            l: () => M,
            m: () => z,
            n: () => I,
            o: () => S,
            p: () => R
        })
    }),
    ZAU2: (function(e, a, t) {
        var n = t("TPAN"),
            r = t("zd8w"),
            l = t("yGJW");
        let i = (0, r.createContext)({
            fullWidth: !1,
            isVisible: !0,
            isAnimating: !1,
            placement: "floating"
        });

        function s(e, a) {
            e && (0, l.a)(e.scope, n.CodexThreadSummaryPanelInteraction, {
                control: a,
                layout: e.layout,
                routeKind: e.scope.value.routeKind
            })
        }
        t.d(a, {
            b: () => s
        }, {
            a: i
        })
    }),
    q542: (function(e, a, t) {
        t.d(a, {
            a: () => ee,
            b: () => ea
        });
        var n = t("ABep"),
            r = t("QosV"),
            l = t("on57"),
            i = t("iodE"),
            s = t("rfA2"),
            o = t("IPUh"),
            d = t("iTtm"),
            c = t("zd8w"),
            u = t("v7qY"),
            m = t("Wf1j"),
            p = t("Qgfj"),
            f = t("I7bK"),
            x = t("QcW8");
        t("DUYS");
        var h = t("FHYD"),
            y = t("gbrq"),
            v = t("zjpG"),
            g = t("ygO2"),
            b = t("rsCP"),
            w = t("HOLv"),
            j = t("UxN3"),
            C = t("CqQF"),
            k = t("eGPX"),
            N = t("Pnwf"),
            z = t("V8uZ"),
            S = t("BWrV"),
            _ = t("MIZk"),
            M = t("suct"),
            L = t("V9Lw"),
            A = t.n(L),
            P = t("bqtn"),
            I = t("Pjl1"),
            O = t("tSEg"),
            B = t("m5G2"),
            T = t("Nwp9"),
            E = t("ZAU2");
        let R = {
                height: 0,
                opacity: 0,
                marginTop: 0
            },
            V = {
                height: "auto",
                opacity: 1,
                marginTop: 2
            },
            H = (0, T.c)(e => `thread-summary-panel-section-expanded-${e}`, null),
            W = (0, d.v)(O.a, e => "pending");

        function F(e) {
            let a, t, l, s, d, u = (0, r.c)(19),
                {
                    className: m,
                    animateContentResize: p,
                    children: f,
                    collapsible: x,
                    sectionContentClassName: h
                } = e,
                y = void 0 === x || x,
                v = (0, i.a)(),
                [g, b] = (0, c.useState)(null),
                w = !v,
                j = !v,
                C = !!y && R;
            u[0] !== y ? (a = y ? V : {}, u[0] = y, u[1] = a) : a = u[1];
            let k = p ? g ?? "auto" : "auto";
            u[2] !== a || u[3] !== k ? (t = {
                ...a,
                height: k
            }, u[2] = a, u[3] = k, u[4] = t) : t = u[4];
            let N = y ? R : void 0;
            return u[5] !== p ? (l = p ? e => (0, B.a)({
                axis: "height",
                target: e,
                onChange: e => {
                    let {
                        height: a
                    } = e;
                    return b(a)
                }
            }) : void 0, u[5] = p, u[6] = l) : l = u[6], u[7] !== f || u[8] !== h || u[9] !== l ? (s = (0, n.jsx)("div", {
                ref: l,
                className: h,
                children: f
            }), u[7] = f, u[8] = h, u[9] = l, u[10] = s) : s = u[10], u[11] !== m || u[12] !== s || u[13] !== w || u[14] !== j || u[15] !== C || u[16] !== t || u[17] !== N ? (d = (0, n.jsx)(o.a.div, {
                className: m,
                "aria-hidden": w,
                inert: j,
                initial: C,
                animate: t,
                exit: N,
                transition: z.a,
                children: s
            }), u[11] = m, u[12] = s, u[13] = w, u[14] = j, u[15] = C, u[16] = t, u[17] = N, u[18] = d) : d = u[18], d
        }

        function q(e) {
            let a, t, i, s, o, d, c, u = (0, r.c)(35),
                {
                    inset: m,
                    surface: p,
                    mode: f,
                    sectionOptions: x,
                    after: h,
                    children: y,
                    isExpanded: v,
                    onToggle: g,
                    onChange: b,
                    shouldUseReducedMotion: w,
                    titleSuffix: j,
                    collapsedSummary: C
                } = e,
                k = null != x && x.length > 1,
                N = "accordion" === f ? g : void 0;
            u[0] !== y ? (a = (0, n.jsx)("span", {
                className: "truncate",
                children: y
            }), u[0] = y, u[1] = a) : a = u[1];
            let z = v ? null : j;
            u[2] !== k || u[3] !== v || u[4] !== f || u[5] !== w ? (t = ("accordion" === f || k) && (0, n.jsx)(I.a, {
                "aria-hidden": "true",
                className: (0, l.a)("icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100", !w && "transition-transform", v ? "opacity-0" : "opacity-100", v ? "rotate-0" : "-rotate-90")
            }), u[2] = k, u[3] = v, u[4] = f, u[5] = w, u[6] = t) : t = u[6], u[7] !== C || u[8] !== v ? (i = v || null == C ? null : (0, n.jsx)("span", {
                className: "ms-auto flex min-w-0 items-center",
                children: C
            }), u[7] = C, u[8] = v, u[9] = i) : i = u[9], u[10] !== v || u[11] !== N || u[12] !== a || u[13] !== z || u[14] !== t || u[15] !== i ? (s = (0, n.jsxs)("button", {
                "aria-expanded": v,
                className: "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                onClick: N,
                type: "button",
                children: [a, z, t, i]
            }), u[10] = v, u[11] = N, u[12] = a, u[13] = z, u[14] = t, u[15] = i, u[16] = s) : s = u[16];
            let S = s,
                _ = S;
            if ("heading" === f) {
                let e;
                u[17] !== y ? (e = (0, n.jsx)("h3", {
                    className: "min-w-0 truncate select-none",
                    children: y
                }), u[17] = y, u[18] = e) : e = u[18], _ = e
            } else if ("dropdown" === f && k) {
                let e, a;
                u[19] !== b || u[20] !== x ? (e = x?.map(e => (0, n.jsx)(P.f, {
                    onSelect: () => b?.(e),
                    children: e
                }, e)), u[19] = b, u[20] = x, u[21] = e) : e = u[21], u[22] !== e || u[23] !== S ? (a = (0, n.jsx)(P.a, {
                    triggerButton: S,
                    children: e
                }), u[22] = e, u[23] = S, u[24] = a) : a = u[24], _ = a
            }
            let M = "panel" === p ? "bg-[var(--app-shell-panel-background,var(--color-surface))] before:bg-[var(--app-shell-panel-background,var(--color-surface))]" : "bg-surface-elevated-secondary before:bg-surface-elevated-secondary",
                L = m && "ps-5 pe-3.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:ps-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:ps-5";
            return u[25] !== M || u[26] !== L ? (o = (0, l.a)("sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", M, L), u[25] = M, u[26] = L, u[27] = o) : o = u[27], u[28] !== h || u[29] !== f ? (d = null != h ? (0, n.jsx)("div", {
                className: (0, l.a)("relative flex", "heading" === f ? "min-w-0 flex-1" : "shrink-0"),
                children: h
            }) : null, u[28] = h, u[29] = f, u[30] = d) : d = u[30], u[31] !== _ || u[32] !== d || u[33] !== o ? (c = (0, n.jsxs)("header", {
                className: o,
                children: [_, d]
            }), u[31] = _, u[32] = d, u[33] = o, u[34] = c) : c = u[34], c
        }
        var Z = t("KWzM"),
            U = t("oyxz"),
            G = t("PAiv"),
            Q = t("bf6R"),
            D = e => (0, n.jsx)("svg", {
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

        function K(e) {
            let a, t, l, i, s, o, d = (0, r.c)(33),
                {
                    controls: c,
                    expanded: u,
                    href: m,
                    icon: p,
                    label: f,
                    meta: x,
                    multiline: h,
                    onOpen: y,
                    onOpenLink: v,
                    requiresConfirmation: g,
                    showHoverActions: b
                } = e,
                w = void 0 !== h && h;
            d[0] !== p ? (a = (0, n.jsx)(_.l, {
                variant: "custom",
                children: p
            }), d[0] = p, d[1] = a) : a = d[1];
            let j = w ? "line-clamp-2" : void 0,
                C = !w;
            d[2] !== f || d[3] !== j || d[4] !== C ? (t = (0, n.jsx)(_.k, {
                className: j,
                truncate: C,
                children: f
            }), d[2] = f, d[3] = j, d[4] = C, d[5] = t) : t = d[5], d[6] !== x ? (l = null == x ? null : (0, n.jsx)(_.n, {
                children: x
            }), d[6] = x, d[7] = l) : l = d[7], d[8] !== u ? (i = null != u ? (0, n.jsx)(_.n, {
                visibility: "interaction",
                children: (0, n.jsx)(Q.$b, {
                    className: u ? void 0 : "-rotate-90"
                })
            }) : null, d[8] = u, d[9] = i) : i = d[9], d[10] !== a || d[11] !== t || d[12] !== l || d[13] !== i ? (s = (0, n.jsxs)(n.Fragment, {
                children: [a, t, l, i]
            }), d[10] = a, d[11] = t, d[12] = l, d[13] = i, d[14] = s) : s = d[14];
            let k = s;
            if (null != m) {
                let e, a = b ? m : void 0,
                    t = b ? void 0 : f;
                return d[15] !== k || d[16] !== m || d[17] !== f || d[18] !== v || d[19] !== g || d[20] !== b || d[21] !== t || d[22] !== a ? (e = (0, n.jsx)(_.m, {
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
            if (null != y) {
                let e;
                return d[24] !== k || d[25] !== c || d[26] !== u || d[27] !== f || d[28] !== y ? (e = (0, n.jsx)(_.h, {
                    "aria-controls": c,
                    "aria-expanded": u,
                    "aria-label": f,
                    className: "select-none",
                    onClick: y,
                    title: f,
                    tone: "muted",
                    children: k
                }), d[24] = k, d[25] = c, d[26] = u, d[27] = f, d[28] = y, d[29] = e) : e = d[29], e
            }
            return d[30] !== k || d[31] !== f ? (o = (0, n.jsx)(_.b, {
                className: "select-none",
                tone: "muted",
                title: f,
                children: k
            }), d[30] = k, d[31] = f, d[32] = o) : o = d[32], o
        }
        var X = t("lTYx"),
            Y = t("vSGB"),
            $ = t("oNmV");
        let J = {
                opacity: 0,
                transform: "translateX(0%)"
            },
            ee = {
                Content: function(e) {
                    let a, t, i, s, d, u, m, p, f, x, h, y, v, g = (0, r.c)(30);
                    g[0] !== e ? ({
                        children: a,
                        className: t,
                        isHidden: d,
                        variant: u,
                        density: m,
                        scrollable: p,
                        onScroll: i,
                        ...s
                    } = e, g[0] = e, g[1] = a, g[2] = t, g[3] = i, g[4] = s, g[5] = d, g[6] = u, g[7] = m, g[8] = p) : (a = g[1], t = g[2], i = g[3], s = g[4], d = g[5], u = g[6], m = g[7], p = g[8]);
                    let w = void 0 !== d && d,
                        j = void 0 === u ? "summary" : u,
                        C = void 0 === m ? "default" : m,
                        k = void 0 === p || p,
                        {
                            fullWidth: N,
                            isVisible: z,
                            placement: S
                        } = (0, c.useContext)(E.a),
                        _ = z && !w,
                        M = (0, c.useRef)(null),
                        L = (0, c.useRef)(0);
                    g[9] !== _ ? (f = () => {
                        if (_ && 0 !== L.current && null != M.current) {
                            let e = L.current,
                                a = () => {
                                    null != M.current && (M.current.scrollTop = e)
                                };
                            a();
                            let t = requestAnimationFrame(a);
                            return () => cancelAnimationFrame(t)
                        }
                    }, x = [_], g[9] = _, g[10] = f, g[11] = x) : (f = g[10], x = g[11]), (0, c.useLayoutEffect)(f, x);
                    let A = !k && "isolate",
                        P = N && "bg-surface";
                    g[12] !== t || g[13] !== A || g[14] !== P ? (h = (0, l.b)("group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden", A, P, t), g[12] = t, g[13] = A, g[14] = P, g[15] = h) : h = g[15];
                    let I = N || "docked" === S,
                        O = k ? void 0 : i;
                    return g[16] !== a || g[17] !== _ || g[18] !== i || g[19] !== k || g[20] !== j ? (y = k ? (0, n.jsx)(o.a.div, {
                        ref: M,
                        className: "flex h-fit max-h-full min-h-0 min-w-0 flex-col overflow-x-hidden overflow-y-auto",
                        layoutScroll: !0,
                        onScroll: e => {
                            _ && null != M.current && (L.current = e.currentTarget.scrollTop, i?.(e))
                        },
                        children: (0, n.jsx)("div", {
                            className: (0, l.b)("flex flex-col", "summary" === j && "gap-2 py-2.5"),
                            children: a
                        })
                    }) : a, g[16] = a, g[17] = _, g[18] = i, g[19] = k, g[20] = j, g[21] = y) : y = g[21], g[22] !== C || g[23] !== s || g[24] !== I || g[25] !== O || g[26] !== y || g[27] !== h || g[28] !== j ? (v = (0, n.jsx)(b.c, {
                        className: h,
                        "data-summary-panel-variant": j,
                        "data-summary-panel-density": C,
                        unstyled: I,
                        variant: "island",
                        ...s,
                        onScroll: O,
                        children: y
                    }), g[22] = C, g[23] = s, g[24] = I, g[25] = O, g[26] = y, g[27] = h, g[28] = j, g[29] = v) : v = g[29], v
                },
                HeaderButton: function(e) {
                    let a, t, l, i, s, o, c, u, m, p, f = (0, r.c)(25);
                    f[0] !== e ? ({
                        analytics: a,
                        label: l,
                        onClick: i,
                        pressed: s,
                        shortcut: o,
                        ...t
                    } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = l, f[4] = i, f[5] = s, f[6] = o) : (a = f[1], t = f[2], l = f[3], i = f[4], s = f[5], o = f[6]);
                    let x = (0, d.z)(N.a),
                        h = s ? "secondary" : "toolbar";
                    return f[7] !== a || f[8] !== i || f[9] !== s ? (c = e => {
                        (0, E.b)(a, s ? "close_panel" : "open_panel"), i?.(e)
                    }, f[7] = a, f[8] = i, f[9] = s, f[10] = c) : c = f[10], f[11] !== x ? (u = "iconMd" === x ? (0, n.jsx)(w.a, {
                        "aria-hidden": !1,
                        asset: X.a
                    }) : (0, n.jsx)(j.b, {
                        "aria-hidden": !1,
                        icon: {
                            assets: {
                                16: Y.a,
                                20: $.a
                            }
                        }
                    }), f[11] = x, f[12] = u) : u = f[12], f[13] !== t || f[14] !== l || f[15] !== s || f[16] !== x || f[17] !== h || f[18] !== c || f[19] !== u ? (m = (0, n.jsx)(g.a, {
                        "data-thread-summary-panel-toggle": !0,
                        size: x,
                        uniform: !0,
                        color: h,
                        "aria-label": l,
                        "aria-pressed": s,
                        title: l,
                        onClick: c,
                        ...t,
                        children: u
                    }), f[13] = t, f[14] = l, f[15] = s, f[16] = x, f[17] = h, f[18] = c, f[19] = u, f[20] = m) : m = f[20], f[21] !== l || f[22] !== o || f[23] !== m ? (p = (0, n.jsx)(C.a, {
                        tooltipContent: l,
                        shortcut: o,
                        delayOpen: !0,
                        children: m
                    }), f[21] = l, f[22] = o, f[23] = m, f[24] = p) : p = f[24], p
                },
                IconButton: _.a,
                Item: _.b,
                ItemActionButton: _.c,
                ItemActionLink: _.d,
                ItemActions: _.e,
                ItemAvatarGroup: _.g,
                ItemAvatarButton: _.f,
                ItemButton: _.h,
                ItemChevron: _.i,
                ItemGroup: _.j,
                ItemLabel: _.k,
                ItemLeading: _.l,
                ItemMeta: _.n,
                ItemTrigger: _.o,
                List: S.a,
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
                    }, s[1] = o, s[2] = t) : t = s[2], s[3] !== d || s[4] !== t ? (l = (0, n.jsx)(E.a.Provider, {
                        value: t,
                        children: d
                    }), s[3] = d, s[4] = t, s[5] = l) : l = s[5], s[6] !== u || s[7] !== l ? (i = (0, n.jsx)("div", {
                        "data-pip-obstacle": u,
                        className: "flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col gap-3",
                        style: a,
                        children: l
                    }), s[6] = u, s[7] = l, s[8] = i) : i = s[8], i
                },
                Root: function(e) {
                    let a, t, p, v, g, b, w, j, C, N, z, S, _, M, L, A, P, I, O, B, T, R, V, H, W, F, q, U = (0, r.c)(122),
                        {
                            analytics: G,
                            animateOnExit: Q,
                            animateOnMount: D,
                            children: K,
                            fillHeight: X,
                            fullWidth: Y,
                            fullWidthTransition: $,
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
                        ed = void 0 === Q || Q,
                        ec = void 0 !== D && D,
                        eu = void 0 !== X && X,
                        em = void 0 !== Y && Y,
                        ep = void 0 === $ ? "default" : $,
                        ef = void 0 === et ? "floating" : et,
                        ex = void 0 !== er && er,
                        eh = void 0 === eo ? 300 : eo,
                        ey = (0, m.a)(),
                        [ev, eg] = (0, c.useState)(null),
                        eb = null == ev ? null : ev / 2,
                        ew = (0, d.z)(x.F),
                        ej = (0, d.z)(y.h),
                        eC = (0, d.z)(k.c),
                        ek = (0, i.a)(),
                        eN = es && ek && !ei,
                        ez = (0, s.a)(),
                        [eS, e_] = (0, c.useState)(es),
                        [eM, eL] = (0, c.useState)(ec && !eC && !ew),
                        eA = "docked" === ef ? J : Z.b.hidden,
                        eP = es ? Z.b.visible : eA,
                        eI = (0, c.useRef)(null),
                        eO = (0, c.useRef)(ew),
                        eB = (0, c.useRef)(ej),
                        eT = (0, c.useRef)(!1),
                        eE = (0, c.useRef)(ec);
                    if (eC || ew) {
                        let e;
                        U[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                            duration: 0
                        }, U[0] = e) : e = U[0], a = e
                    } else a = "docked" === ef ? f.b : Z.a;
                    U[1] !== ep ? (t = "relaxed" === ep ? {
                        ...f.a,
                        duration: .3
                    } : f.a, U[1] = ep, U[2] = t) : t = U[2];
                    let eR = t;
                    U[3] !== ew || U[4] !== ek || U[5] !== ej || U[6] !== ei || U[7] !== eC || U[8] !== ez || U[9] !== eP ? (p = () => {
                        if (!ek) return;
                        eT.current || queueMicrotask(() => {
                            eT.current = !0
                        });
                        let e = eO.current !== ew,
                            a = eB.current !== ej,
                            t = eI.current !== eP;
                        eI.current = eP, eO.current = ew, eB.current = ej, ez.stop(), !eT.current && !eE.current || e || a || !t && eT.current || ei || eC ? (ez.set(eP), e_(eP.opacity > 0), eL(!1)) : ez.start(eP)
                    }, U[3] = ew, U[4] = ek, U[5] = ej, U[6] = ei, U[7] = eC, U[8] = ez, U[9] = eP, U[10] = p) : p = U[10], U[11] !== ew || U[12] !== ek || U[13] !== ej || U[14] !== en || U[15] !== ei || U[16] !== eC || U[17] !== ez || U[18] !== eP ? (v = [ew, ek, ej, en, ei, eC, ez, eP], U[11] = ew, U[12] = ek, U[13] = ej, U[14] = en, U[15] = ei, U[16] = eC, U[17] = ez, U[18] = eP, U[19] = v) : v = U[19], (0, c.useLayoutEffect)(p, v), U[20] !== ef || U[21] !== el ? (g = e => {
                        let a = e?.parentElement;
                        if (null == el || "docked" !== ef || null == a) return;
                        let t = () => eg(a.clientWidth);
                        t();
                        let n = new ResizeObserver(t);
                        return n.observe(a), () => n.disconnect()
                    }, U[20] = ef, U[21] = el, U[22] = g) : g = U[22];
                    let eV = "docked" === ef ? "relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]" : "absolute";
                    U[23] !== em || U[24] !== ef || U[25] !== en || U[26] !== ex || U[27] !== eV ? (b = (0, l.b)("pointer-events-none z-40", eV, "floating" === ef && [null != en && ["portalLayout-_LSX2_", ex && "belowToolbar-VYFp43"], null == en && (em ? "inset-0" : "top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) max-w-full")]), U[23] = em, U[24] = ef, U[25] = en, U[26] = ex, U[27] = eV, U[28] = b) : b = U[28], U[29] !== ea ? (w = {
                        maxHeight: ea
                    }, U[29] = ea, U[30] = w) : w = U[30];
                    let eH = !eN,
                        eW = !eN;
                    U[31] !== ec || U[32] !== ef || U[33] !== eC ? (j = "docked" === ef && !!ec && !eC && {
                        width: 0
                    }, U[31] = ec, U[32] = ef, U[33] = eC, U[34] = j) : j = U[34], U[35] !== em || U[36] !== ef || U[37] !== en || U[38] !== es || U[39] !== eh ? (C = "docked" === ef ? {
                        width: es ? "auto" : 0
                    } : {
                        "--thread-floating-panel-full-width-progress": +!!em,
                        width: null == en ? "auto" : `calc(min(${eh}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`
                    }, U[35] = em, U[36] = ef, U[37] = en, U[38] = es, U[39] = eh, U[40] = C) : C = U[40], U[41] !== ed || U[42] !== ef ? (N = ed && "docked" === ef ? {
                        width: 0
                    } : void 0, U[41] = ed, U[42] = ef, U[43] = N) : N = U[43];
                    let eF = "docked" === ef || eC ? a : eR,
                        eq = "docked" === ef ? "w-max max-w-[50cqw]" : "max-w-full",
                        eZ = "floating" === ef && null == en && !em && "pe-2",
                        eU = eu && "h-full",
                        eG = (null != en || em) && "w-full";
                    U[44] !== eq || U[45] !== eZ || U[46] !== eU || U[47] !== eG ? (z = (0, l.b)("relative isolate flex max-h-full", eq, eZ, eU, eG), U[44] = eq, U[45] = eZ, U[46] = eU, U[47] = eG, U[48] = z) : z = U[48];
                    let eQ = eN && (void 0 === ee || ee) ? "thread-summary-panel" : void 0,
                        eD = (null != en || em) && "w-full";
                    U[49] !== eD ? (S = (0, l.b)("pointer-events-none absolute inset-y-0 start-0 max-w-full", eD), U[49] = eD, U[50] = S) : S = U[50], U[51] !== em || U[52] !== en || U[53] !== eh ? (_ = null != en || em ? void 0 : {
                        width: eh
                    }, U[51] = em, U[52] = en, U[53] = eh, U[54] = _) : _ = U[54], U[55] !== eQ || U[56] !== S || U[57] !== _ ? (M = (0, n.jsx)("div", {
                        "data-pip-obstacle": eQ,
                        className: S,
                        style: _,
                        "aria-hidden": !0
                    }), U[55] = eQ, U[56] = S, U[57] = _, U[58] = M) : M = U[58];
                    let eK = es && (!ec || eC) ? Z.b.visible : eA,
                        eX = eu && "h-full",
                        eY = (null != en || em) && "w-full",
                        e$ = ei && "invisible";
                    U[59] !== eX || U[60] !== eY || U[61] !== e$ ? (L = (0, l.b)("pointer-events-none max-h-full min-h-0 min-w-0 max-w-full", eX, eY, e$), U[59] = eX, U[60] = eY, U[61] = e$, U[62] = L) : L = U[62];
                    let eJ = ed ? eA : void 0,
                        e1 = a;
                    U[63] === Symbol.for("react.memo_cache_sentinel") ? (A = () => {
                        e_(!0), eL(!0)
                    }, U[63] = A) : A = U[63], U[64] !== ek || U[65] !== es ? (P = () => {
                        e_(es && ek), eL(!1)
                    }, U[64] = ek, U[65] = es, U[66] = P) : P = U[66];
                    let e0 = "docked" === ef && "border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]",
                        e2 = eu && "h-full",
                        e3 = (null != en || em) && "w-full",
                        e5 = eN ? "pointer-events-auto" : "pointer-events-none";
                    U[67] !== e0 || U[68] !== e2 || U[69] !== e3 || U[70] !== e5 ? (I = (0, l.b)("flex max-h-full min-h-0 max-w-full flex-col gap-3", e0, e2, e3, e5), U[67] = e0, U[68] = e2, U[69] = e3, U[70] = e5, U[71] = I) : I = U[71], U[72] !== em || U[73] !== en || U[74] !== eh ? (O = null != en || em ? void 0 : {
                        width: eh
                    }, U[72] = em, U[73] = en, U[74] = eh, U[75] = O) : O = U[75];
                    let e4 = eN ? G : void 0,
                        e6 = (eN || eS) && !ei;
                    U[76] !== em || U[77] !== eM || U[78] !== ef || U[79] !== e4 || U[80] !== e6 ? (B = {
                        analytics: e4,
                        fullWidth: em,
                        isAnimating: eM,
                        isVisible: e6,
                        placement: ef
                    }, U[76] = em, U[77] = eM, U[78] = ef, U[79] = e4, U[80] = e6, U[81] = B) : B = U[81], U[82] !== K || U[83] !== B ? (T = (0, n.jsx)(E.a.Provider, {
                        value: B,
                        children: K
                    }), U[82] = K, U[83] = B, U[84] = T) : T = U[84], U[85] !== I || U[86] !== O || U[87] !== T ? (R = (0, n.jsx)("div", {
                        className: I,
                        style: O,
                        children: T
                    }), U[85] = I, U[86] = O, U[87] = T, U[88] = R) : R = U[88], U[89] !== eK || U[90] !== L || U[91] !== eJ || U[92] !== P || U[93] !== R || U[94] !== a || U[95] !== ez ? (V = (0, n.jsx)(o.a.div, {
                        initial: eK,
                        className: L,
                        animate: ez,
                        exit: eJ,
                        transition: e1,
                        onAnimationStart: A,
                        onAnimationComplete: P,
                        children: R
                    }), U[89] = eK, U[90] = L, U[91] = eJ, U[92] = P, U[93] = R, U[94] = a, U[95] = ez, U[96] = V) : V = U[96], U[97] !== z || U[98] !== M || U[99] !== V ? (H = (0, n.jsxs)("div", {
                        className: z,
                        children: [M, V]
                    }), U[97] = z, U[98] = M, U[99] = V, U[100] = H) : H = U[100], U[101] !== ey || U[102] !== eb || U[103] !== ef || U[104] !== el || U[105] !== eh ? (W = "docked" === ef && null != el && null != eb && eb > 320 && (0, n.jsx)("div", {
                        className: "pointer-events-auto",
                        children: (0, n.jsx)(h.a, {
                            ariaLabel: ey.formatMessage({
                                id: "splitView.resize",
                                defaultMessage: "Resize panels",
                                description: "Accessible name for the split-view resize handle"
                            }),
                            edge: "left",
                            extendIntoToolbar: !1,
                            defaultSize: el.defaultWidth,
                            getCurrentSize: () => Math.min(eh, eb),
                            minimumSize: 320,
                            maximumSize: eb,
                            setSize: el.onWidthChange
                        })
                    }), U[101] = ey, U[102] = eb, U[103] = ef, U[104] = el, U[105] = eh, U[106] = W) : W = U[106], U[107] !== g || U[108] !== b || U[109] !== w || U[110] !== eH || U[111] !== eW || U[112] !== j || U[113] !== C || U[114] !== N || U[115] !== eF || U[116] !== H || U[117] !== W ? (F = (0, n.jsxs)(o.a.div, {
                        ref: g,
                        className: b,
                        style: w,
                        "aria-hidden": eH,
                        inert: eW,
                        initial: j,
                        animate: C,
                        exit: N,
                        transition: eF,
                        children: [H, W]
                    }), U[107] = g, U[108] = b, U[109] = w, U[110] = eH, U[111] = eW, U[112] = j, U[113] = C, U[114] = N, U[115] = eF, U[116] = H, U[117] = W, U[118] = F) : F = U[118];
                    let e9 = F;
                    return U[119] !== e9 || U[120] !== en ? (q = null == en ? e9 : (0, u.createPortal)(e9, en), U[119] = e9, U[120] = en, U[121] = q) : q = U[121], q
                },
                Section: function(e) {
                    let a, t, i, s, o, u, m, p, f, x, h, y, v, g, b, w = (0, r.c)(102),
                        {
                            autoCollapse: j,
                            animateContentResize: C,
                            sectionKey: N,
                            analyticsControl: z,
                            after: S,
                            children: L,
                            mode: P,
                            ref: I,
                            sectionOptions: B,
                            defaultCollapsed: T,
                            inset: R,
                            divider: V,
                            surface: Z,
                            spacing: U,
                            persistExpansion: G,
                            title: Q,
                            titleSuffix: D,
                            collapsedSummary: K,
                            onChange: X
                        } = e,
                        Y = void 0 !== C && C,
                        $ = void 0 === P ? "accordion" : P,
                        J = void 0 !== T && T,
                        ee = void 0 === R || R,
                        ea = void 0 === Z ? "elevated" : Z,
                        et = void 0 === U ? "section" : U,
                        en = void 0 === G || G,
                        er = (0, d.y)(O.a),
                        {
                            analytics: el
                        } = (0, c.useContext)(E.a),
                        ei = (0, d.x)(W, N),
                        es = (0, d.x)(H, N),
                        [eo, ed] = (0, c.useState)(!J),
                        ec = null != j && "canceled" !== ei,
                        eu = (!0 !== j || "collapsed" !== ei) && (en ? es ?? !J : eo),
                        em = (0, d.z)(k.c),
                        ep = ee ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5" : "px-2";
                    w[0] !== ep ? (a = (0, l.a)("flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0", ep), w[0] = ep, w[1] = a) : a = w[1];
                    let ef = a;
                    if (w[2] !== Y || w[3] !== ee || w[4] !== eu || w[5] !== $ || w[6] !== en || w[7] !== er || w[8] !== N) {
                        let e;
                        t = (0, l.a)("relative z-0", ("headerless" !== $ || Y) && "overflow-hidden", !ee && "-mx-2"), w[13] !== en || w[14] !== er || w[15] !== N ? (e = e => {
                            en ? er.set(H, N, e) : ed(e)
                        }, w[13] = en, w[14] = er, w[15] = N, w[16] = e) : e = w[16], i = e, s = "headerless" === $ || "heading" === $ || eu || "dropdown" === $, o = (0, l.a)(t, "mt-0.5"), w[2] = Y, w[3] = ee, w[4] = eu, w[5] = $, w[6] = en, w[7] = er, w[8] = N, w[9] = t, w[10] = i, w[11] = s, w[12] = o
                    } else t = w[9], i = w[10], s = w[11], o = w[12];
                    w[17] !== L || w[18] !== ef ? (u = (0, n.jsx)("div", {
                        className: ef,
                        children: L
                    }), w[17] = L, w[18] = ef, w[19] = u) : u = w[19], w[20] !== o || w[21] !== u ? (m = (0, n.jsx)("div", {
                        className: o,
                        children: u
                    }), w[20] = o, w[21] = u, w[22] = m) : m = w[22];
                    let ex = m;
                    w[23] !== i ? (p = () => ({
                        collapse: () => i(!1),
                        expand: () => i(!0)
                    }), w[23] = i, w[24] = p) : p = w[24], (0, c.useImperativeHandle)(I, p), w[25] !== j || w[26] !== ei || w[27] !== ec || w[28] !== er || w[29] !== N ? (f = () => {
                        if (!ec) return;
                        if (!j) {
                            "collapsed" === ei && er.set(W, N, "pending");
                            return
                        }
                        if ("pending" !== ei) return;
                        let e = window.setTimeout(() => {
                            er.set(W, N, "collapsed")
                        }, 3e4);
                        return () => window.clearTimeout(e)
                    }, x = [j, ei, ec, er, N], w[25] = j, w[26] = ei, w[27] = ec, w[28] = er, w[29] = N, w[30] = f, w[31] = x) : (f = w[30], x = w[31]), (0, c.useEffect)(f, x), w[32] !== Y || w[33] !== L || w[34] !== ex || w[35] !== t || w[36] !== ef || w[37] !== s || w[38] !== em ? (h = em ? s && ex : (0, n.jsx)(M.a, {
                        initial: !1,
                        children: s && (0, n.jsx)(F, {
                            className: t,
                            animateContentResize: Y,
                            sectionContentClassName: ef,
                            children: L
                        }, "content")
                    }), w[32] = Y, w[33] = L, w[34] = ex, w[35] = t, w[36] = ef, w[37] = s, w[38] = em, w[39] = h) : h = w[39];
                    let eh = h;
                    if ("row" === $) {
                        let e, a, t, r, l = null != L;
                        w[40] !== L || w[41] !== eu || w[42] !== i || w[43] !== Q ? (e = null == L ? Q : (0, n.jsx)(_.o, {
                            "aria-expanded": eu,
                            className: "select-none",
                            onClick: () => i(!eu),
                            children: Q
                        }), w[40] = L, w[41] = eu, w[42] = i, w[43] = Q, w[44] = e) : e = w[44], w[45] !== S || w[46] !== eu ? (a = A()(S) ? S({
                            isExpanded: eu
                        }) : S, w[45] = S, w[46] = eu, w[47] = a) : a = w[47], w[48] !== l || w[49] !== e || w[50] !== a ? (t = (0, n.jsx)("div", {
                            className: "px-5",
                            children: (0, n.jsxs)(_.b, {
                                interactive: l,
                                children: [e, a]
                            })
                        }), w[48] = l, w[49] = e, w[50] = a, w[51] = t) : t = w[51];
                        let s = null == L ? null : eh;
                        return w[52] !== t || w[53] !== s ? (r = (0, n.jsxs)("section", {
                            className: "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                            children: [t, s]
                        }), w[52] = t, w[53] = s, w[54] = r) : r = w[54], r
                    }
                    if ("card" === $ || "plain" === $) {
                        let e, a, t, r, i, s = "card" === $ ? "gap-1" : "gap-2";
                        w[55] !== s ? (e = (0, l.a)("flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4", s), w[55] = s, w[56] = e) : e = w[56], w[57] !== S || w[58] !== $ || w[59] !== Q ? (a = null != Q || null != S ? (0, n.jsxs)("header", {
                            className: (0, l.a)("flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", "card" === $ && "px-1"),
                            children: [null != Q ? (0, n.jsx)("h3", {
                                className: "truncate",
                                children: Q
                            }) : null, A()(S) ? S({
                                isExpanded: !0
                            }) : S]
                        }) : null, w[57] = S, w[58] = $, w[59] = Q, w[60] = a) : a = w[60];
                        let o = "card" === $ ? "group/summary-card overflow-hidden rounded-2xl border border-default" : "flex min-w-0 flex-col",
                            d = "card" === $ ? "card" : void 0;
                        return w[61] !== Y || w[62] !== L || w[63] !== em ? (t = Y && !em ? (0, n.jsx)(F, {
                            className: "overflow-hidden",
                            animateContentResize: !0,
                            collapsible: !1,
                            sectionContentClassName: "",
                            children: L
                        }) : L, w[61] = Y, w[62] = L, w[63] = em, w[64] = t) : t = w[64], w[65] !== o || w[66] !== d || w[67] !== t ? (r = (0, n.jsx)("div", {
                            className: o,
                            "data-variant": d,
                            children: t
                        }), w[65] = o, w[66] = d, w[67] = t, w[68] = r) : r = w[68], w[69] !== e || w[70] !== a || w[71] !== r ? (i = (0, n.jsxs)("section", {
                            className: e,
                            children: [a, r]
                        }), w[69] = e, w[70] = a, w[71] = r, w[72] = i) : i = w[72], i
                    }
                    let ey = "nested" === et ? "pt-3" : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
                        ev = (void 0 === V || V) && "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
                        eg = ee ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4" : "after:inset-x-0",
                        eb = "accordion" !== $ || eu || "standalone" === et ? "last:pb-0" : "last:pb-0.5";
                    return w[73] !== ey || w[74] !== ev || w[75] !== eg || w[76] !== eb ? (y = (0, l.a)("relative z-0 flex flex-col", ey, ev, eg, eb), w[73] = ey, w[74] = ev, w[75] = eg, w[76] = eb, w[77] = y) : y = w[77], w[78] !== ec || w[79] !== er || w[80] !== N ? (v = ec ? () => {
                        er.set(W, N, "canceled")
                    } : void 0, w[78] = ec, w[79] = er, w[80] = N, w[81] = v) : v = w[81], w[82] !== S || w[83] !== el || w[84] !== z || w[85] !== K || w[86] !== ee || w[87] !== eu || w[88] !== $ || w[89] !== X || w[90] !== B || w[91] !== i || w[92] !== em || w[93] !== ea || w[94] !== Q || w[95] !== D ? (g = "headerless" !== $ ? (0, n.jsx)(q, {
                        inset: ee,
                        surface: ea,
                        after: A()(S) ? S({
                            isExpanded: eu
                        }) : S,
                        sectionOptions: B,
                        mode: $,
                        isExpanded: eu,
                        onChange: X,
                        onToggle: () => {
                            "dropdown" !== $ && (z && (0, E.b)(el, z), i(!eu))
                        },
                        shouldUseReducedMotion: em,
                        titleSuffix: D,
                        collapsedSummary: K,
                        children: Q
                    }) : null, w[82] = S, w[83] = el, w[84] = z, w[85] = K, w[86] = ee, w[87] = eu, w[88] = $, w[89] = X, w[90] = B, w[91] = i, w[92] = em, w[93] = ea, w[94] = Q, w[95] = D, w[96] = g) : g = w[96], w[97] !== eh || w[98] !== y || w[99] !== v || w[100] !== g ? (b = (0, n.jsxs)("section", {
                        role: "presentation",
                        className: y,
                        onClick: v,
                        children: [g, eh]
                    }), w[97] = eh, w[98] = y, w[99] = v, w[100] = g, w[101] = b) : b = w[101], b
                },
                SectionActions: _.p,
                SectionCount: function(e) {
                    let a, t, l = (0, r.c)(3),
                        {
                            count: i
                        } = e;
                    return 0 === i ? null : (l[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, n.jsx)(v.a, {}), l[0] = a) : a = l[0], l[1] !== i ? (t = (0, n.jsxs)("span", {
                        className: "inline-flex items-center gap-1 text-sm text-tertiary group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row",
                        children: [a, (0, n.jsx)("span", {
                            children: (0, n.jsx)(p.c, {
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
                            label: x,
                            meta: h,
                            summaryMeta: y,
                            presentation: v,
                            onOpen: g,
                            onOpenLink: b,
                            requiresConfirmation: w,
                            showHoverActions: j
                        } = e;
                    if ("summary" === (void 0 === v ? "side-panel" : v)) {
                        let e;
                        return u[0] !== p || u[1] !== f || u[2] !== x || u[3] !== g || u[4] !== b || u[5] !== w || u[6] !== j || u[7] !== y ? (e = (0, n.jsx)("li", {
                            children: (0, n.jsx)(K, {
                                href: p,
                                icon: f,
                                label: x,
                                meta: y,
                                onOpen: g,
                                onOpenLink: b,
                                requiresConfirmation: w,
                                showHoverActions: j
                            })
                        }), u[0] = p, u[1] = f, u[2] = x, u[3] = g, u[4] = b, u[5] = w, u[6] = j, u[7] = y, u[8] = e) : e = u[8], e
                    }
                    u[9] !== f ? (a = (0, n.jsx)("span", {
                        className: "flex h-5 w-[18px] shrink-0 items-center justify-center",
                        children: f
                    }), u[9] = f, u[10] = a) : a = u[10], u[11] !== x ? (t = (0, n.jsx)("span", {
                        className: "text-sm font-medium break-words text-default",
                        children: x
                    }), u[11] = x, u[12] = t) : t = u[12], u[13] !== h ? (l = null == h ? null : (0, n.jsx)("span", {
                        className: "text-xs break-all text-tertiary",
                        children: h
                    }), u[13] = h, u[14] = l) : l = u[14], u[15] !== t || u[16] !== l ? (i = (0, n.jsxs)("span", {
                        className: "flex min-w-0 flex-1 flex-col gap-0.5",
                        children: [t, l]
                    }), u[15] = t, u[16] = l, u[17] = i) : i = u[17], u[18] !== a || u[19] !== i ? (s = (0, n.jsxs)(n.Fragment, {
                        children: [a, i]
                    }), u[18] = a, u[19] = i, u[20] = s) : s = u[20];
                    let C = s;
                    if (null != p) {
                        let e, a = j ? p : void 0,
                            t = j ? void 0 : p;
                        u[21] !== C || u[22] !== p || u[23] !== x || u[24] !== b || u[25] !== w || u[26] !== j || u[27] !== a || u[28] !== t ? (e = (0, n.jsx)(G.a, {
                            "aria-label": x,
                            className: "flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            href: p,
                            initiator: "markdown_link_click",
                            requiresConfirmation: w,
                            onUnmodifiedClick: b,
                            showHoverActions: j,
                            tooltipContent: a,
                            title: t,
                            children: C
                        }), u[21] = C, u[22] = p, u[23] = x, u[24] = b, u[25] = w, u[26] = j, u[27] = a, u[28] = t, u[29] = e) : e = u[29], o = e
                    } else if (null != g) {
                        let e;
                        u[30] !== C || u[31] !== x || u[32] !== g ? (e = (0, n.jsx)("button", {
                            "aria-label": x,
                            className: "flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                            type: "button",
                            onClick: g,
                            children: C
                        }), u[30] = C, u[31] = x, u[32] = g, u[33] = e) : e = u[33], o = e
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
                SourceRow: K,
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
                    return d[7] !== m || d[8] !== a ? (t = (0, n.jsx)(_.j, {
                        "aria-label": m,
                        role: "list",
                        children: a
                    }), d[7] = m, d[8] = a, d[9] = t) : t = d[9], d[10] === Symbol.for("react.memo_cache_sentinel") ? (l = (0, n.jsx)(_.l, {
                        children: (0, n.jsx)(D, {})
                    }), d[10] = l) : l = d[10], d[11] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(_.k, {
                        children: (0, n.jsx)(U.a, {
                            id: "codex.localConversation.sources.showAll",
                            defaultMessage: "View all",
                            description: "Button that opens the complete source list in the side panel"
                        })
                    }), d[11] = i) : i = d[11], d[12] !== p ? (s = (0, n.jsxs)(_.h, {
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

        function ea(e) {
            let a, t = (0, r.c)(2);
            t[0] !== e ? (a = void 0 === e ? {} : e, t[0] = e, t[1] = a) : a = t[1];
            let {
                afterAnimation: n
            } = a, {
                isVisible: l,
                isAnimating: i
            } = (0, c.useContext)(E.a);
            return l && (!(void 0 !== n && n) || !i)
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
    }),
    Pnwf: (function(e, a, t) {
        var n = t("iTtm"),
            r = t("QcW8"),
            l = t("tSEg"),
            i = t("giVD"),
            s = t("pZMh");
        let o = (0, n.c)(l.a, e => {
            let {
                get: a
            } = e, t = a(s.d);
            return a(r.s) && a(i.b) && ("full" === t || "split" === t && a(s.c)) ? "iconMd" : "toolbar"
        });
        t.d(a, {}, {
            a: o
        })
    })
};