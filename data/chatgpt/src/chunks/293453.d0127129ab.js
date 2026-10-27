export const __rspack_esm_id = 293453;
export const __rspack_esm_ids = [293453];
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
            x = t("vkPe");

        function h(e) {
            let a, t, i, h, g, b, w, j, C, k, N, z, S = (0, r.c)(80),
                {
                    children: _,
                    empty: M,
                    getKey: L,
                    getNewItemPosition: A,
                    isLoadingMore: P,
                    items: I,
                    listAriaLabel: R,
                    listClassName: B,
                    onVisibleItemsChange: E,
                    onLoadMore: O,
                    paginationButtonClassName: T,
                    presentation: V,
                    preserveExpandedOrder: W,
                    renderFooter: H,
                    renderPagination: U,
                    visibleItemIncrement: F,
                    visibleItemLimit: Z
                } = e,
                q = void 0 !== P && P,
                D = void 0 === V ? "summary" : V,
                G = void 0 !== W && W,
                K = void 0 === Z ? 6 : Z,
                {
                    analytics: Q
                } = (0, o.useContext)(f.a),
                [X, Y] = (0, o.useState)(K),
                [$, J] = (0, o.useState)(null);
            if (S[0] !== $ || S[1] !== L || S[2] !== A || S[3] !== I || S[4] !== G || S[5] !== X) {
                if (a = I, G && null != $) {
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
                S[0] = $, S[1] = L, S[2] = A, S[3] = I, S[4] = G, S[5] = X, S[6] = a
            } else a = S[6];
            S[15] !== a || S[16] !== X ? (t = a.slice(0, X), S[15] = a, S[16] = X, S[17] = t) : t = S[17];
            let ee = t;
            if (S[18] !== E || S[19] !== ee ? (i = () => {
                    E?.(ee)
                }, h = [E, ee], S[18] = E, S[19] = ee, S[20] = i, S[21] = h) : (i = S[20], h = S[21]), (0, o.useEffect)(i, h), 0 === I.length && null == O) return M ?? null;
            let ea = I.length > K || null != O,
                et = I.length - ee.length,
                en = 0 === et && null == O,
                er = F ?? 50,
                el = null == O ? Math.min(et, er) : er;
            S[22] !== Q || S[23] !== L || S[24] !== et || S[25] !== en || S[26] !== q || S[27] !== I.length || S[28] !== O || S[29] !== a || S[30] !== G || S[31] !== er || S[32] !== K ? (g = () => {
                !q && ((0, f.b)(Q, en ? "show_less" : "show_more"), G && J(en ? null : new Map(a.map((e, a) => [L(e, a), a]))), Y(e => en ? K : null == O ? Math.min(I.length, e + er) : e + er), et < er && O?.())
            }, S[22] = Q, S[23] = L, S[24] = et, S[25] = en, S[26] = q, S[27] = I.length, S[28] = O, S[29] = a, S[30] = G, S[31] = er, S[32] = K, S[33] = g) : g = S[33];
            let ei = g;
            S[34] !== _ || S[35] !== L || S[36] !== R || S[37] !== B || S[38] !== ee ? (b = null == R ? (0, n.jsx)(p.j, {
                className: B,
                children: ee.map((e, a) => (0, n.jsx)(o.Fragment, {
                    children: _(e, a)
                }, L(e, a)))
            }) : (0, n.jsx)(p.j, {
                "aria-label": R,
                className: B,
                role: "list",
                children: ee.map((e, a) => (0, n.jsx)("div", {
                    role: "listitem",
                    children: _(e, a)
                }, L(e, a)))
            }), S[34] = _, S[35] = L, S[36] = R, S[37] = B, S[38] = ee, S[39] = b) : b = S[39];
            let es = b;
            return S[40] !== H || S[41] !== ee ? (w = H?.(ee), S[40] = H, S[41] = ee, S[42] = w) : w = S[42], S[43] !== ea || S[44] !== en || S[45] !== q || S[46] !== el || S[47] !== U || S[48] !== ei ? (j = ea && null != U ? U({
                nextRevealCount: el,
                isExpanded: en,
                isLoadingMore: q,
                onToggle: ei
            }) : null, S[43] = ea, S[44] = en, S[45] = q, S[46] = el, S[47] = U, S[48] = ei, S[49] = j) : j = S[49], S[50] !== ea || S[51] !== en || S[52] !== q || S[53] !== D || S[54] !== U || S[55] !== ei ? (C = ea && null == U && "plain" === D ? (0, n.jsx)(m.b, {
                children: (0, n.jsx)(m.a, {
                    alignment: "content",
                    disabled: q,
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
            }) : null, S[50] = ea, S[51] = en, S[52] = q, S[53] = D, S[54] = U, S[55] = ei, S[56] = C) : C = S[56], S[57] !== ea || S[58] !== en || S[59] !== q || S[60] !== D || S[61] !== U || S[62] !== ei ? (k = ea && null == U && "card" === D ? (0, n.jsxs)(p.h, {
                disabled: q,
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
            }) : null, S[57] = ea, S[58] = en, S[59] = q, S[60] = D, S[61] = U, S[62] = ei, S[63] = k) : k = S[63], S[64] !== ea || S[65] !== en || S[66] !== q || S[67] !== el || S[68] !== T || S[69] !== D || S[70] !== U || S[71] !== ei ? (N = ea && null == U && "summary" === D ? (0, n.jsx)(c.a, {
                className: (0, l.b)("!px-0 !py-0 text-tertiary hover:text-secondary", T),
                color: "ghostMuted",
                size: "default",
                disabled: q,
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
            }) : null, S[64] = ea, S[65] = en, S[66] = q, S[67] = el, S[68] = T, S[69] = D, S[70] = U, S[71] = ei, S[72] = N) : N = S[72], S[73] !== es || S[74] !== w || S[75] !== j || S[76] !== C || S[77] !== k || S[78] !== N ? (z = (0, n.jsxs)(n.Fragment, {
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
            l = t("lUoP"),
            i = t("on57"),
            s = t("zd8w"),
            o = t("oyxz"),
            d = t("ygO2"),
            c = t("PAiv"),
            u = t("bf6R"),
            m = t("yf2D"),
            p = t("u6ch");
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
            let a, t, l, s, o, d, c, m, p, h, y, v, b = (0, r.c)(26);
            b[0] !== e ? ({
                children: a,
                className: t,
                disabled: o,
                interactive: d,
                multiline: c,
                ref: s,
                showChevron: m,
                tone: p,
                ...l
            } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = l, b[4] = s, b[5] = o, b[6] = d, b[7] = c, b[8] = m, b[9] = p) : (a = b[1], t = b[2], l = b[3], s = b[4], o = b[5], d = b[6], c = b[7], m = b[8], p = b[9]);
            let w = void 0 !== o && o,
                j = void 0 !== d && d,
                C = void 0 !== c && c,
                k = void 0 === m || m,
                N = w || void 0,
                z = g[void 0 === p ? "default" : p],
                S = !w && j && x,
                _ = w && "cursor-not-allowed text-tertiary";
            b[10] !== t || b[11] !== z || b[12] !== S || b[13] !== _ ? (h = (0, i.b)(f, z, S, _, t), b[10] = t, b[11] = z, b[12] = S, b[13] = _, b[14] = h) : h = b[14];
            let M = C || void 0;
            return b[15] !== j || b[16] !== k ? (y = j && k && (0, n.jsx)(u.ec, {
                className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
            }), b[15] = j, b[16] = k, b[17] = y) : y = b[17], b[18] !== a || b[19] !== l || b[20] !== s || b[21] !== h || b[22] !== M || b[23] !== y || b[24] !== N ? (v = (0, n.jsxs)("div", {
                ...l,
                "aria-disabled": N,
                className: h,
                "data-slot": "thread-summary-panel-item",
                "data-multiline": M,
                ref: s,
                children: [a, y]
            }), b[18] = a, b[19] = l, b[20] = s, b[21] = h, b[22] = M, b[23] = y, b[24] = N, b[25] = v) : v = b[25], v
        }

        function N(e) {
            let a, t, l, d, c, m, p, x, v, b, w, j, C, k, N, z, S = (0, r.c)(36);
            S[0] !== e ? ({
                children: a,
                className: t,
                disabled: c,
                interaction: m,
                multiline: p,
                ref: d,
                showChevron: x,
                tone: v,
                type: b,
                unread: w,
                ...l
            } = e, S[0] = e, S[1] = a, S[2] = t, S[3] = l, S[4] = d, S[5] = c, S[6] = m, S[7] = p, S[8] = x, S[9] = v, S[10] = b, S[11] = w) : (a = S[1], t = S[2], l = S[3], d = S[4], c = S[5], m = S[6], p = S[7], x = S[8], v = S[9], b = S[10], w = S[11]);
            let _ = void 0 !== c && c,
                M = void 0 === m ? "background" : m,
                L = void 0 !== p && p,
                A = void 0 === x || x,
                P = void 0 === v ? "default" : v,
                I = void 0 === b ? "button" : b,
                R = void 0 !== w && w,
                B = (0, s.useId)();
            S[12] !== l || S[13] !== R || S[14] !== B ? (j = R ? [l["aria-describedby"], B].filter(Boolean).join(" ") : l["aria-describedby"], S[12] = l, S[13] = R, S[14] = B, S[15] = j) : j = S[15];
            let E = j,
                O = !_ && h[M],
                T = g[P];
            S[16] !== t || S[17] !== T || S[18] !== O ? (C = (0, i.b)(f, O, y, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", T, t), S[16] = t, S[17] = T, S[18] = O, S[19] = C) : C = S[19];
            let V = L || void 0;
            return S[20] !== R || S[21] !== B ? (k = R ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                }), (0, n.jsx)("span", {
                    id: B,
                    className: "sr-only",
                    children: (0, n.jsx)(o.a, {
                        id: "sidebar.navItem.unread",
                        defaultMessage: "Unread updates",
                        description: "Accessible description for a navigation item with unread updates"
                    })
                })]
            }) : null, S[20] = R, S[21] = B, S[22] = k) : k = S[22], S[23] !== A ? (N = A && (0, n.jsx)(u.ec, {
                className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
            }), S[23] = A, S[24] = N) : N = S[24], S[25] !== a || S[26] !== E || S[27] !== _ || S[28] !== l || S[29] !== d || S[30] !== C || S[31] !== V || S[32] !== k || S[33] !== N || S[34] !== I ? (z = (0, n.jsxs)("button", {
                ...l,
                "aria-describedby": E,
                className: C,
                "data-slot": "thread-summary-panel-item-button",
                "data-multiline": V,
                disabled: _,
                ref: d,
                type: I,
                children: [a, k, N]
            }), S[25] = a, S[26] = E, S[27] = _, S[28] = l, S[29] = d, S[30] = C, S[31] = V, S[32] = k, S[33] = N, S[34] = I, S[35] = z) : z = S[35], z
        }

        function z(e) {
            let a, t, l, s, o, d = (0, r.c)(10);
            d[0] !== e ? ({
                className: a,
                tone: l,
                ...t
            } = e, d[0] = e, d[1] = a, d[2] = t, d[3] = l) : (a = d[1], t = d[2], l = d[3]);
            let u = g[void 0 === l ? "default" : l];
            return d[4] !== a || d[5] !== u ? (s = (0, i.b)(f, x, y, u, "no-underline", a), d[4] = a, d[5] = u, d[6] = s) : s = d[6], d[7] !== t || d[8] !== s ? (o = (0, n.jsx)(c.a, {
                ...t,
                className: s,
                "data-slot": "thread-summary-panel-item-link"
            }), d[7] = t, d[8] = s, d[9] = o) : o = d[9], o
        }

        function S(e) {
            let a, t, l, s, o, d, c = (0, r.c)(12);
            c[0] !== e ? ({
                children: a,
                className: t,
                type: s,
                ...l
            } = e, c[0] = e, c[1] = a, c[2] = t, c[3] = l, c[4] = s) : (a = c[1], t = c[2], l = c[3], s = c[4]);
            let u = void 0 === s ? "button" : s;
            return c[5] !== t ? (o = (0, i.b)("flex min-w-0 flex-1 self-stretch cursor-interaction items-center gap-token-button-composer-gap group-data-[summary-row-density=comfortable]/summary-row-density:gap-2 group-data-[variant=card]/summary-card:gap-3 border-0 bg-transparent p-0 text-start text-inherit disabled:cursor-not-allowed after:absolute after:inset-y-0 after:-inset-x-2 after:-z-10 after:content-[''] group-data-[variant=card]/summary-card:after:inset-x-0", y, t), c[5] = t, c[6] = o) : o = c[6], c[7] !== a || c[8] !== l || c[9] !== o || c[10] !== u ? (d = (0, n.jsx)("button", {
                ...l,
                className: o,
                "data-slot": "thread-summary-panel-item-trigger",
                type: u,
                children: a
            }), c[7] = a, c[8] = l, c[9] = o, c[10] = u, c[11] = d) : d = c[11], d
        }

        function _(e) {
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
        }

        function M(e) {
            let a, t, l, s, o, d, c, u = (0, r.c)(15);
            u[0] !== e ? ({
                children: a,
                className: t,
                variant: s,
                ...l
            } = e, u[0] = e, u[1] = a, u[2] = t, u[3] = l, u[4] = s) : (a = u[1], t = u[2], l = u[3], s = u[4]);
            let m = void 0 === s ? "glyph" : s,
                p = w[m],
                f = b[m];
            return u[5] !== t || u[6] !== f ? (o = (0, i.b)("me-2 flex shrink-0 items-center justify-center group-data-[multiline=true]/summary-panel-item:h-lh group-data-[summary-row-density=comfortable]/summary-row-density:me-0 group-data-[variant=card]/summary-card:me-0 group-data-[variant=card]/summary-card:w-4", f, t), u[5] = t, u[6] = f, u[7] = o) : o = u[7], u[8] !== a || u[9] !== p ? (d = null == p ? a : (0, n.jsx)("span", {
                className: (0, i.b)("flex shrink-0 items-center justify-center", p),
                children: a
            }), u[8] = a, u[9] = p, u[10] = d) : d = u[10], u[11] !== l || u[12] !== o || u[13] !== d ? (c = (0, n.jsx)("span", {
                ...l,
                className: o,
                "data-slot": "thread-summary-panel-item-leading",
                children: d
            }), u[11] = l, u[12] = o, u[13] = d, u[14] = c) : c = u[14], c
        }

        function L(e) {
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
        }

        function A(e) {
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
        }

        function P(e) {
            let a, t, l, s, o, d, c, u, p, f = (0, r.c)(18);
            f[0] !== e ? ({
                children: a,
                className: t,
                description: l,
                truncate: o,
                ...s
            } = e, f[0] = e, f[1] = a, f[2] = t, f[3] = l, f[4] = s, f[5] = o) : (a = f[1], t = f[2], l = f[3], s = f[4], o = f[5]);
            let x = void 0 === o || o;
            f[6] !== t ? (d = (0, i.b)("min-w-0 flex-1 text-sm group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", t), f[6] = t, f[7] = d) : d = f[7], f[8] !== a || f[9] !== x ? (c = x ? (0, n.jsx)(m.a, {
                animateOnGroupHover: !0,
                children: a
            }) : a, f[8] = a, f[9] = x, f[10] = c) : c = f[10], f[11] !== s || f[12] !== d || f[13] !== c ? (u = (0, n.jsx)("span", {
                ...s,
                className: d,
                "data-slot": "thread-summary-panel-item-label",
                children: c
            }), f[11] = s, f[12] = d, f[13] = c, f[14] = u) : u = f[14];
            let h = u;
            return f[15] !== l || f[16] !== h ? (p = null == l ? h : (0, n.jsxs)("span", {
                className: "flex min-w-0 flex-1 flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0",
                children: [h, (0, n.jsx)(I, {
                    children: (0, n.jsx)("span", {
                        className: "text-fade-truncate",
                        children: l
                    })
                })]
            }), f[15] = l, f[16] = h, f[17] = p) : p = f[17], p
        }

        function I(e) {
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
            let x = void 0 !== o && o,
                h = void 0 === d ? "text" : d,
                y = void 0 === c ? "always" : c,
                v = x ? "max-w-1/2 min-w-0 shrink" : "shrink-0",
                g = j[void 0 === s ? "muted" : s],
                b = C[h],
                w = "interaction" === y && "opacity-0 group-focus-visible/summary-panel-item:opacity-100 group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:opacity-100 group-aria-expanded/summary-panel-item:opacity-100",
                k = "rest" === y && "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0";
            return f[8] !== t || f[9] !== v || f[10] !== g || f[11] !== b || f[12] !== w || f[13] !== k ? (u = (0, i.b)("flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", v, g, b, w, k, t), f[8] = t, f[9] = v, f[10] = g, f[11] = b, f[12] = w, f[13] = k, f[14] = u) : u = f[14], f[15] !== a || f[16] !== x ? (m = x ? (0, n.jsx)("span", {
                className: "text-fade-truncate",
                children: a
            }) : a, f[15] = a, f[16] = x, f[17] = m) : m = f[17], f[18] !== l || f[19] !== u || f[20] !== m ? (p = (0, n.jsx)("span", {
                ...l,
                className: u,
                "data-slot": "thread-summary-panel-item-meta",
                children: m
            }), f[18] = l, f[19] = u, f[20] = m, f[21] = p) : p = f[21], p
        }

        function R() {
            let e, a = (0, r.c)(1);
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(I, {
                variant: "icon",
                children: (0, n.jsx)(p.a, {})
            }), a[0] = e) : e = a[0], e
        }

        function B(e) {
            let a, t, l, s, o, d, c, u, m, p, f, x, h, y, v = (0, r.c)(30);
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
                C = "preview" === g && "me-2 w-15 justify-center",
                k = "overlay" === b && "absolute inset-y-0 end-0 my-auto";
            return v[10] !== t || v[11] !== b || v[12] !== j || v[13] !== C || v[14] !== k || v[15] !== w ? (p = (0, i.b)("flex h-5 shrink-0 items-center", j, C, k, "interaction" === w && ["pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100", "inline" === b && "pointer-coarse:pointer-events-auto pointer-coarse:opacity-100"], t), v[10] = t, v[11] = b, v[12] = j, v[13] = C, v[14] = k, v[15] = w, v[16] = p) : p = v[16], v[17] !== l ? (f = e => {
                e.stopPropagation(), l?.(e)
            }, v[17] = l, v[18] = f) : f = v[18], v[19] !== s ? (x = e => {
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

        function E(e) {
            let a, t = (0, r.c)(2);
            return t[0] !== e ? (a = (0, n.jsx)(V, {
                className: "-me-1.5",
                ...e
            }), t[0] = e, t[1] = a) : a = t[1], a
        }

        function O(e) {
            let a, t, s, o, d, c, u, m, p = (0, r.c)(17);
            return p[0] !== e ? ({
                children: a,
                className: t,
                label: s,
                ...o
            } = e, p[0] = e, p[1] = a, p[2] = t, p[3] = s, p[4] = o) : (a = p[1], t = p[2], s = p[3], o = p[4]), p[5] !== t ? (d = (0, i.b)("-me-2 size-token-button-composer flex cursor-interaction items-center justify-center rounded-sm text-tertiary hover:text-default", y, t), p[5] = t, p[6] = d) : d = p[6], p[7] !== a ? (c = (0, n.jsx)("span", {
                className: v,
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
        }

        function T(e) {
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

        function V(e) {
            let a, t, s, o, c, u, m, p, f, x, h, g, b = (0, r.c)(24);
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
            return b[9] !== t ? (f = (0, i.b)("size-6", y, t), b[9] = t, b[10] = f) : f = b[10], b[11] !== a ? (x = (0, n.jsx)("span", {
                className: v,
                children: a
            }), b[11] = a, b[12] = x) : x = b[12], b[13] !== w || b[14] !== o || b[15] !== c || b[16] !== f || b[17] !== x ? (h = (0, n.jsx)(d.a, {
                ...c,
                "aria-label": o,
                className: f,
                color: w,
                "data-slot": "thread-summary-panel-icon-button",
                focusRing: "inset",
                size: "icon",
                uniform: !0,
                children: x
            }), b[13] = w, b[14] = o, b[15] = c, b[16] = f, b[17] = x, b[18] = h) : h = b[18], b[19] !== s || b[20] !== u || b[21] !== h || b[22] !== j ? (g = (0, n.jsx)(l.a, {
                disabled: s,
                content: j,
                shortcut: u,
                openDelay: 250,
                children: h
            }), b[19] = s, b[20] = u, b[21] = h, b[22] = j, b[23] = g) : g = b[23], g
        }
        t.d(a, {
            a: () => V,
            b: () => k,
            c: () => E,
            d: () => O,
            e: () => B,
            f: () => L,
            g: () => A,
            h: () => N,
            i: () => R,
            j: () => _,
            k: () => P,
            l: () => M,
            m: () => z,
            n: () => I,
            o: () => S,
            p: () => T
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
            l = t("lUoP"),
            i = t("on57"),
            s = t("iodE"),
            o = t("rfA2"),
            d = t("IPUh"),
            c = t("iTtm"),
            u = t("zd8w"),
            m = t("v7qY"),
            p = t("Wf1j"),
            f = t("Qgfj"),
            x = t("I7bK"),
            h = t("QcW8");
        t("DUYS");
        var y = t("FHYD"),
            v = t("gbrq"),
            g = t("zjpG"),
            b = t("ygO2"),
            w = t("rsCP"),
            j = t("HOLv"),
            C = t("UxN3"),
            k = t("eGPX"),
            N = t("Pnwf"),
            z = t("V8uZ"),
            S = t("BWrV"),
            _ = t("MIZk"),
            M = t("suct"),
            L = t("V9Lw"),
            A = t.n(L),
            P = t("bqtn"),
            I = t("u6ch"),
            R = t("tSEg"),
            B = t("m5G2"),
            E = t("Nwp9"),
            O = t("ZAU2");
        let T = {
                height: 0,
                opacity: 0,
                marginTop: 0
            },
            V = {
                height: "auto",
                opacity: 1,
                marginTop: 2
            },
            W = (0, E.c)(e => `thread-summary-panel-section-expanded-${e}`, null),
            H = (0, c.v)(R.a, e => "pending");

        function U(e) {
            let a, t, l, i, o, c = (0, r.c)(19),
                {
                    className: m,
                    animateContentResize: p,
                    children: f,
                    collapsible: x,
                    sectionContentClassName: h
                } = e,
                y = void 0 === x || x,
                v = (0, s.a)(),
                [g, b] = (0, u.useState)(null),
                w = !v,
                j = !v,
                C = !!y && T;
            c[0] !== y ? (a = y ? V : {}, c[0] = y, c[1] = a) : a = c[1];
            let k = p ? g ?? "auto" : "auto";
            c[2] !== a || c[3] !== k ? (t = {
                ...a,
                height: k
            }, c[2] = a, c[3] = k, c[4] = t) : t = c[4];
            let N = y ? T : void 0;
            return c[5] !== p ? (l = p ? e => (0, B.a)({
                axis: "height",
                target: e,
                onChange: e => {
                    let {
                        height: a
                    } = e;
                    return b(a)
                }
            }) : void 0, c[5] = p, c[6] = l) : l = c[6], c[7] !== f || c[8] !== h || c[9] !== l ? (i = (0, n.jsx)("div", {
                ref: l,
                className: h,
                children: f
            }), c[7] = f, c[8] = h, c[9] = l, c[10] = i) : i = c[10], c[11] !== m || c[12] !== i || c[13] !== w || c[14] !== j || c[15] !== C || c[16] !== t || c[17] !== N ? (o = (0, n.jsx)(d.a.div, {
                className: m,
                "aria-hidden": w,
                inert: j,
                initial: C,
                animate: t,
                exit: N,
                transition: z.a,
                children: i
            }), c[11] = m, c[12] = i, c[13] = w, c[14] = j, c[15] = C, c[16] = t, c[17] = N, c[18] = o) : o = c[18], o
        }

        function F(e) {
            let a, t, l, s, o, d, c, u = (0, r.c)(35),
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
                className: (0, i.a)("icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100", !w && "transition-transform", v ? "opacity-0" : "opacity-100", v ? "rotate-0" : "-rotate-90")
            }), u[2] = k, u[3] = v, u[4] = f, u[5] = w, u[6] = t) : t = u[6], u[7] !== C || u[8] !== v ? (l = v || null == C ? null : (0, n.jsx)("span", {
                className: "ms-auto flex min-w-0 items-center",
                children: C
            }), u[7] = C, u[8] = v, u[9] = l) : l = u[9], u[10] !== v || u[11] !== N || u[12] !== a || u[13] !== z || u[14] !== t || u[15] !== l ? (s = (0, n.jsxs)("button", {
                "aria-expanded": v,
                className: "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                onClick: N,
                type: "button",
                children: [a, z, t, l]
            }), u[10] = v, u[11] = N, u[12] = a, u[13] = z, u[14] = t, u[15] = l, u[16] = s) : s = u[16];
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
            return u[25] !== M || u[26] !== L ? (o = (0, i.a)("sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", M, L), u[25] = M, u[26] = L, u[27] = o) : o = u[27], u[28] !== h || u[29] !== f ? (d = null != h ? (0, n.jsx)("div", {
                className: (0, i.a)("relative flex", "heading" === f ? "min-w-0 flex-1" : "shrink-0"),
                children: h
            }) : null, u[28] = h, u[29] = f, u[30] = d) : d = u[30], u[31] !== _ || u[32] !== d || u[33] !== o ? (c = (0, n.jsxs)("header", {
                className: o,
                children: [_, d]
            }), u[31] = _, u[32] = d, u[33] = o, u[34] = c) : c = u[34], c
        }
        var Z = t("KWzM"),
            q = t("oyxz"),
            D = t("PAiv"),
            G = t("bf6R"),
            K = e => (0, n.jsx)("svg", {
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

        function Q(e) {
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
                children: (0, n.jsx)(G.$b, {
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
        var X = t("SdTP"),
            Y = t("OAFW"),
            $ = t("ZALr");
        let J = {
                opacity: 0,
                transform: "translateX(0%)"
            },
            ee = {
                Content: function(e) {
                    let a, t, l, s, o, c, m, p, f, x, h, y, v, g, b = (0, r.c)(32);
                    b[0] !== e ? ({
                        children: a,
                        className: t,
                        isHidden: c,
                        variant: m,
                        density: p,
                        scrollable: f,
                        scrollClassName: o,
                        onScroll: l,
                        ...s
                    } = e, b[0] = e, b[1] = a, b[2] = t, b[3] = l, b[4] = s, b[5] = o, b[6] = c, b[7] = m, b[8] = p, b[9] = f) : (a = b[1], t = b[2], l = b[3], s = b[4], o = b[5], c = b[6], m = b[7], p = b[8], f = b[9]);
                    let j = void 0 !== c && c,
                        C = void 0 === m ? "summary" : m,
                        k = void 0 === p ? "default" : p,
                        N = void 0 === f || f,
                        {
                            fullWidth: z,
                            isVisible: S,
                            placement: _
                        } = (0, u.useContext)(O.a),
                        M = S && !j,
                        L = (0, u.useRef)(null),
                        A = (0, u.useRef)(0);
                    b[10] !== M ? (x = () => {
                        if (M && 0 !== A.current && null != L.current) {
                            let e = A.current,
                                a = () => {
                                    null != L.current && (L.current.scrollTop = e)
                                };
                            a();
                            let t = requestAnimationFrame(a);
                            return () => cancelAnimationFrame(t)
                        }
                    }, h = [M], b[10] = M, b[11] = x, b[12] = h) : (x = b[11], h = b[12]), (0, u.useLayoutEffect)(x, h);
                    let P = !N && "isolate",
                        I = z && "bg-surface";
                    b[13] !== t || b[14] !== P || b[15] !== I ? (y = (0, i.b)("group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden", P, I, t), b[13] = t, b[14] = P, b[15] = I, b[16] = y) : y = b[16];
                    let R = z || "docked" === _,
                        B = N ? void 0 : l;
                    return b[17] !== a || b[18] !== M || b[19] !== l || b[20] !== o || b[21] !== N || b[22] !== C ? (v = N ? (0, n.jsx)(d.a.div, {
                        ref: L,
                        className: (0, i.b)("flex h-fit max-h-full min-h-0 min-w-0 flex-col overflow-x-hidden overflow-y-auto", o),
                        layoutScroll: !0,
                        onScroll: e => {
                            M && null != L.current && (A.current = e.currentTarget.scrollTop, l?.(e))
                        },
                        children: (0, n.jsx)("div", {
                            className: (0, i.b)("flex flex-col", "summary" === C && "gap-2 py-2.5"),
                            children: a
                        })
                    }) : a, b[17] = a, b[18] = M, b[19] = l, b[20] = o, b[21] = N, b[22] = C, b[23] = v) : v = b[23], b[24] !== k || b[25] !== s || b[26] !== R || b[27] !== B || b[28] !== v || b[29] !== y || b[30] !== C ? (g = (0, n.jsx)(w.c, {
                        className: y,
                        "data-summary-panel-variant": C,
                        "data-summary-panel-density": k,
                        unstyled: R,
                        variant: "island",
                        ...s,
                        onScroll: B,
                        children: v
                    }), b[24] = k, b[25] = s, b[26] = R, b[27] = B, b[28] = v, b[29] = y, b[30] = C, b[31] = g) : g = b[31], g
                },
                HeaderButton: function(e) {
                    let a, t, i, s, o, d, u, m, p, f, x = (0, r.c)(25);
                    x[0] !== e ? ({
                        analytics: a,
                        label: i,
                        onClick: s,
                        pressed: o,
                        shortcut: d,
                        ...t
                    } = e, x[0] = e, x[1] = a, x[2] = t, x[3] = i, x[4] = s, x[5] = o, x[6] = d) : (a = x[1], t = x[2], i = x[3], s = x[4], o = x[5], d = x[6]);
                    let h = (0, c.z)(N.a),
                        y = o ? "secondary" : "toolbar";
                    return x[7] !== a || x[8] !== s || x[9] !== o ? (u = e => {
                        (0, O.b)(a, o ? "close_panel" : "open_panel"), s?.(e)
                    }, x[7] = a, x[8] = s, x[9] = o, x[10] = u) : u = x[10], x[11] !== h ? (m = "iconMd" === h ? (0, n.jsx)(j.a, {
                        "aria-hidden": !1,
                        asset: X.a
                    }) : (0, n.jsx)(C.b, {
                        "aria-hidden": !1,
                        icon: {
                            assets: {
                                16: Y.a,
                                20: $.a
                            }
                        }
                    }), x[11] = h, x[12] = m) : m = x[12], x[13] !== t || x[14] !== i || x[15] !== o || x[16] !== h || x[17] !== y || x[18] !== u || x[19] !== m ? (p = (0, n.jsx)(b.a, {
                        "data-thread-summary-panel-toggle": !0,
                        size: h,
                        uniform: !0,
                        color: y,
                        "aria-label": i,
                        "aria-pressed": o,
                        onClick: u,
                        ...t,
                        children: m
                    }), x[13] = t, x[14] = i, x[15] = o, x[16] = h, x[17] = y, x[18] = u, x[19] = m, x[20] = p) : p = x[20], x[21] !== i || x[22] !== d || x[23] !== p ? (f = (0, n.jsx)(l.a, {
                        content: i,
                        shortcut: d,
                        openDelay: 250,
                        children: p
                    }), x[21] = i, x[22] = d, x[23] = p, x[24] = f) : f = x[24], f
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
                    }, s[1] = o, s[2] = t) : t = s[2], s[3] !== d || s[4] !== t ? (l = (0, n.jsx)(O.a.Provider, {
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
                    let a, t, l, f, g, b, w, j, C, N, z, S, _, M, L, A, P, I, R, B, E, T, V, W, H, U, F, q = (0, r.c)(122),
                        {
                            analytics: D,
                            animateOnExit: G,
                            animateOnMount: K,
                            children: Q,
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
                        ed = void 0 === G || G,
                        ec = void 0 !== K && K,
                        eu = void 0 !== X && X,
                        em = void 0 !== Y && Y,
                        ep = void 0 === $ ? "default" : $,
                        ef = void 0 === et ? "floating" : et,
                        ex = void 0 !== er && er,
                        eh = void 0 === eo ? 300 : eo,
                        ey = (0, p.a)(),
                        [ev, eg] = (0, u.useState)(null),
                        eb = null == ev ? null : ev / 2,
                        ew = (0, c.z)(h.F),
                        ej = (0, c.z)(v.h),
                        eC = (0, c.z)(k.c),
                        ek = (0, s.a)(),
                        eN = es && ek && !ei,
                        ez = (0, o.a)(),
                        [eS, e_] = (0, u.useState)(es),
                        [eM, eL] = (0, u.useState)(ec && !eC && !ew),
                        eA = "docked" === ef ? J : Z.b.hidden,
                        eP = es ? Z.b.visible : eA,
                        eI = (0, u.useRef)(null),
                        eR = (0, u.useRef)(ew),
                        eB = (0, u.useRef)(ej),
                        eE = (0, u.useRef)(!1),
                        eO = (0, u.useRef)(ec);
                    if (eC || ew) {
                        let e;
                        q[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                            duration: 0
                        }, q[0] = e) : e = q[0], a = e
                    } else a = "docked" === ef ? x.b : Z.a;
                    q[1] !== ep ? (t = "relaxed" === ep ? {
                        ...x.a,
                        duration: .3
                    } : x.a, q[1] = ep, q[2] = t) : t = q[2];
                    let eT = t;
                    q[3] !== ew || q[4] !== ek || q[5] !== ej || q[6] !== ei || q[7] !== eC || q[8] !== ez || q[9] !== eP ? (l = () => {
                        if (!ek) return;
                        eE.current || queueMicrotask(() => {
                            eE.current = !0
                        });
                        let e = eR.current !== ew,
                            a = eB.current !== ej,
                            t = eI.current !== eP;
                        eI.current = eP, eR.current = ew, eB.current = ej, ez.stop(), !eE.current && !eO.current || e || a || !t && eE.current || ei || eC ? (ez.set(eP), e_(eP.opacity > 0), eL(!1)) : ez.start(eP)
                    }, q[3] = ew, q[4] = ek, q[5] = ej, q[6] = ei, q[7] = eC, q[8] = ez, q[9] = eP, q[10] = l) : l = q[10], q[11] !== ew || q[12] !== ek || q[13] !== ej || q[14] !== en || q[15] !== ei || q[16] !== eC || q[17] !== ez || q[18] !== eP ? (f = [ew, ek, ej, en, ei, eC, ez, eP], q[11] = ew, q[12] = ek, q[13] = ej, q[14] = en, q[15] = ei, q[16] = eC, q[17] = ez, q[18] = eP, q[19] = f) : f = q[19], (0, u.useLayoutEffect)(l, f), q[20] !== ef || q[21] !== el ? (g = e => {
                        let a = e?.parentElement;
                        if (null == el || "docked" !== ef || null == a) return;
                        let t = () => eg(a.clientWidth);
                        t();
                        let n = new ResizeObserver(t);
                        return n.observe(a), () => n.disconnect()
                    }, q[20] = ef, q[21] = el, q[22] = g) : g = q[22];
                    let eV = "docked" === ef ? "relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]" : "absolute";
                    q[23] !== em || q[24] !== ef || q[25] !== en || q[26] !== ex || q[27] !== eV ? (b = (0, i.b)("pointer-events-none z-40", eV, "floating" === ef && [null != en && ["portalLayout-_LSX2_", ex && "belowToolbar-VYFp43"], null == en && (em ? "inset-0" : "top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) max-w-full")]), q[23] = em, q[24] = ef, q[25] = en, q[26] = ex, q[27] = eV, q[28] = b) : b = q[28], q[29] !== ea ? (w = {
                        maxHeight: ea
                    }, q[29] = ea, q[30] = w) : w = q[30];
                    let eW = !eN,
                        eH = !eN;
                    q[31] !== ec || q[32] !== ef || q[33] !== eC ? (j = "docked" === ef && !!ec && !eC && {
                        width: 0
                    }, q[31] = ec, q[32] = ef, q[33] = eC, q[34] = j) : j = q[34], q[35] !== em || q[36] !== ef || q[37] !== en || q[38] !== es || q[39] !== eh ? (C = "docked" === ef ? {
                        width: es ? "auto" : 0
                    } : {
                        "--thread-floating-panel-full-width-progress": +!!em,
                        width: null == en ? "auto" : `calc(min(${eh}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`
                    }, q[35] = em, q[36] = ef, q[37] = en, q[38] = es, q[39] = eh, q[40] = C) : C = q[40], q[41] !== ed || q[42] !== ef ? (N = ed && "docked" === ef ? {
                        width: 0
                    } : void 0, q[41] = ed, q[42] = ef, q[43] = N) : N = q[43];
                    let eU = "docked" === ef || eC ? a : eT,
                        eF = "docked" === ef ? "w-max max-w-[50cqw]" : "max-w-full",
                        eZ = "floating" === ef && null == en && !em && "pe-2",
                        eq = eu && "h-full",
                        eD = (null != en || em) && "w-full";
                    q[44] !== eF || q[45] !== eZ || q[46] !== eq || q[47] !== eD ? (z = (0, i.b)("relative isolate flex max-h-full", eF, eZ, eq, eD), q[44] = eF, q[45] = eZ, q[46] = eq, q[47] = eD, q[48] = z) : z = q[48];
                    let eG = eN && (void 0 === ee || ee) ? "thread-summary-panel" : void 0,
                        eK = (null != en || em) && "w-full";
                    q[49] !== eK ? (S = (0, i.b)("pointer-events-none absolute inset-y-0 start-0 max-w-full", eK), q[49] = eK, q[50] = S) : S = q[50], q[51] !== em || q[52] !== en || q[53] !== eh ? (_ = null != en || em ? void 0 : {
                        width: eh
                    }, q[51] = em, q[52] = en, q[53] = eh, q[54] = _) : _ = q[54], q[55] !== eG || q[56] !== S || q[57] !== _ ? (M = (0, n.jsx)("div", {
                        "data-pip-obstacle": eG,
                        className: S,
                        style: _,
                        "aria-hidden": !0
                    }), q[55] = eG, q[56] = S, q[57] = _, q[58] = M) : M = q[58];
                    let eQ = es && (!ec || eC) ? Z.b.visible : eA,
                        eX = eu && "h-full",
                        eY = (null != en || em) && "w-full",
                        e$ = ei && "invisible";
                    q[59] !== eX || q[60] !== eY || q[61] !== e$ ? (L = (0, i.b)("pointer-events-none max-h-full min-h-0 min-w-0 max-w-full", eX, eY, e$), q[59] = eX, q[60] = eY, q[61] = e$, q[62] = L) : L = q[62];
                    let eJ = ed ? eA : void 0,
                        e1 = a;
                    q[63] === Symbol.for("react.memo_cache_sentinel") ? (A = () => {
                        e_(!0), eL(!0)
                    }, q[63] = A) : A = q[63], q[64] !== ek || q[65] !== es ? (P = () => {
                        e_(es && ek), eL(!1)
                    }, q[64] = ek, q[65] = es, q[66] = P) : P = q[66];
                    let e0 = "docked" === ef && "border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]",
                        e2 = eu && "h-full",
                        e3 = (null != en || em) && "w-full",
                        e5 = eN ? "pointer-events-auto" : "pointer-events-none";
                    q[67] !== e0 || q[68] !== e2 || q[69] !== e3 || q[70] !== e5 ? (I = (0, i.b)("flex max-h-full min-h-0 max-w-full flex-col gap-3", e0, e2, e3, e5), q[67] = e0, q[68] = e2, q[69] = e3, q[70] = e5, q[71] = I) : I = q[71], q[72] !== em || q[73] !== en || q[74] !== eh ? (R = null != en || em ? void 0 : {
                        width: eh
                    }, q[72] = em, q[73] = en, q[74] = eh, q[75] = R) : R = q[75];
                    let e4 = eN ? D : void 0,
                        e6 = (eN || eS) && !ei;
                    q[76] !== em || q[77] !== eM || q[78] !== ef || q[79] !== e4 || q[80] !== e6 ? (B = {
                        analytics: e4,
                        fullWidth: em,
                        isAnimating: eM,
                        isVisible: e6,
                        placement: ef
                    }, q[76] = em, q[77] = eM, q[78] = ef, q[79] = e4, q[80] = e6, q[81] = B) : B = q[81], q[82] !== Q || q[83] !== B ? (E = (0, n.jsx)(O.a.Provider, {
                        value: B,
                        children: Q
                    }), q[82] = Q, q[83] = B, q[84] = E) : E = q[84], q[85] !== I || q[86] !== R || q[87] !== E ? (T = (0, n.jsx)("div", {
                        className: I,
                        style: R,
                        children: E
                    }), q[85] = I, q[86] = R, q[87] = E, q[88] = T) : T = q[88], q[89] !== eQ || q[90] !== L || q[91] !== eJ || q[92] !== P || q[93] !== T || q[94] !== a || q[95] !== ez ? (V = (0, n.jsx)(d.a.div, {
                        initial: eQ,
                        className: L,
                        animate: ez,
                        exit: eJ,
                        transition: e1,
                        onAnimationStart: A,
                        onAnimationComplete: P,
                        children: T
                    }), q[89] = eQ, q[90] = L, q[91] = eJ, q[92] = P, q[93] = T, q[94] = a, q[95] = ez, q[96] = V) : V = q[96], q[97] !== z || q[98] !== M || q[99] !== V ? (W = (0, n.jsxs)("div", {
                        className: z,
                        children: [M, V]
                    }), q[97] = z, q[98] = M, q[99] = V, q[100] = W) : W = q[100], q[101] !== ey || q[102] !== eb || q[103] !== ef || q[104] !== el || q[105] !== eh ? (H = "docked" === ef && null != el && null != eb && eb > 320 && (0, n.jsx)("div", {
                        className: "pointer-events-auto",
                        children: (0, n.jsx)(y.a, {
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
                    }), q[101] = ey, q[102] = eb, q[103] = ef, q[104] = el, q[105] = eh, q[106] = H) : H = q[106], q[107] !== g || q[108] !== b || q[109] !== w || q[110] !== eW || q[111] !== eH || q[112] !== j || q[113] !== C || q[114] !== N || q[115] !== eU || q[116] !== W || q[117] !== H ? (U = (0, n.jsxs)(d.a.div, {
                        ref: g,
                        className: b,
                        style: w,
                        "aria-hidden": eW,
                        inert: eH,
                        initial: j,
                        animate: C,
                        exit: N,
                        transition: eU,
                        children: [W, H]
                    }), q[107] = g, q[108] = b, q[109] = w, q[110] = eW, q[111] = eH, q[112] = j, q[113] = C, q[114] = N, q[115] = eU, q[116] = W, q[117] = H, q[118] = U) : U = q[118];
                    let e9 = U;
                    return q[119] !== e9 || q[120] !== en ? (F = null == en ? e9 : (0, m.createPortal)(e9, en), q[119] = e9, q[120] = en, q[121] = F) : F = q[121], F
                },
                Section: function(e) {
                    let a, t, l, s, o, d, m, p, f, x, h, y, v, g, b, w = (0, r.c)(103),
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
                            defaultCollapsed: E,
                            inset: T,
                            divider: V,
                            surface: Z,
                            spacing: q,
                            persistExpansion: D,
                            title: G,
                            titleSuffix: K,
                            collapsedSummary: Q,
                            onChange: X
                        } = e,
                        Y = void 0 !== C && C,
                        $ = void 0 === P ? "accordion" : P,
                        J = void 0 !== E && E,
                        ee = void 0 === T || T,
                        ea = void 0 === Z ? "elevated" : Z,
                        et = void 0 === q ? "section" : q,
                        en = void 0 === D || D,
                        er = (0, c.y)(R.a),
                        {
                            analytics: el
                        } = (0, u.useContext)(O.a),
                        ei = (0, c.x)(H, N),
                        es = (0, c.x)(W, N),
                        [eo, ed] = (0, u.useState)(!J),
                        ec = null != j && "canceled" !== ei,
                        eu = (!0 !== j || "collapsed" !== ei) && (en ? es ?? !J : eo),
                        em = (0, c.z)(k.c),
                        ep = ee ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5" : "px-2";
                    w[0] !== ep ? (a = (0, i.a)("flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0", ep), w[0] = ep, w[1] = a) : a = w[1];
                    let ef = a;
                    if (w[2] !== Y || w[3] !== ee || w[4] !== eu || w[5] !== $ || w[6] !== en || w[7] !== er || w[8] !== N || w[9] !== et) {
                        let e;
                        t = (0, i.a)("relative z-0", ("headerless" !== $ || Y) && ("standalone" === et ? "overflow-clip" : "overflow-hidden"), !ee && "-mx-2"), w[14] !== en || w[15] !== er || w[16] !== N ? (e = e => {
                            en ? er.set(W, N, e) : ed(e)
                        }, w[14] = en, w[15] = er, w[16] = N, w[17] = e) : e = w[17], l = e, s = "headerless" === $ || "heading" === $ || eu || "dropdown" === $, o = (0, i.a)(t, "mt-0.5"), w[2] = Y, w[3] = ee, w[4] = eu, w[5] = $, w[6] = en, w[7] = er, w[8] = N, w[9] = et, w[10] = t, w[11] = l, w[12] = s, w[13] = o
                    } else t = w[10], l = w[11], s = w[12], o = w[13];
                    w[18] !== L || w[19] !== ef ? (d = (0, n.jsx)("div", {
                        className: ef,
                        children: L
                    }), w[18] = L, w[19] = ef, w[20] = d) : d = w[20], w[21] !== o || w[22] !== d ? (m = (0, n.jsx)("div", {
                        className: o,
                        children: d
                    }), w[21] = o, w[22] = d, w[23] = m) : m = w[23];
                    let ex = m;
                    w[24] !== l ? (p = () => ({
                        collapse: () => l(!1),
                        expand: () => l(!0)
                    }), w[24] = l, w[25] = p) : p = w[25], (0, u.useImperativeHandle)(I, p), w[26] !== j || w[27] !== ei || w[28] !== ec || w[29] !== er || w[30] !== N ? (f = () => {
                        if (!ec) return;
                        if (!j) {
                            "collapsed" === ei && er.set(H, N, "pending");
                            return
                        }
                        if ("pending" !== ei) return;
                        let e = window.setTimeout(() => {
                            er.set(H, N, "collapsed")
                        }, 3e4);
                        return () => window.clearTimeout(e)
                    }, x = [j, ei, ec, er, N], w[26] = j, w[27] = ei, w[28] = ec, w[29] = er, w[30] = N, w[31] = f, w[32] = x) : (f = w[31], x = w[32]), (0, u.useEffect)(f, x), w[33] !== Y || w[34] !== L || w[35] !== ex || w[36] !== t || w[37] !== ef || w[38] !== s || w[39] !== em ? (h = em ? s && ex : (0, n.jsx)(M.a, {
                        initial: !1,
                        children: s && (0, n.jsx)(U, {
                            className: t,
                            animateContentResize: Y,
                            sectionContentClassName: ef,
                            children: L
                        }, "content")
                    }), w[33] = Y, w[34] = L, w[35] = ex, w[36] = t, w[37] = ef, w[38] = s, w[39] = em, w[40] = h) : h = w[40];
                    let eh = h;
                    if ("row" === $) {
                        let e, a, t, r, i = null != L;
                        w[41] !== L || w[42] !== eu || w[43] !== l || w[44] !== G ? (e = null == L ? G : (0, n.jsx)(_.o, {
                            "aria-expanded": eu,
                            className: "select-none",
                            onClick: () => l(!eu),
                            children: G
                        }), w[41] = L, w[42] = eu, w[43] = l, w[44] = G, w[45] = e) : e = w[45], w[46] !== S || w[47] !== eu ? (a = A()(S) ? S({
                            isExpanded: eu
                        }) : S, w[46] = S, w[47] = eu, w[48] = a) : a = w[48], w[49] !== i || w[50] !== e || w[51] !== a ? (t = (0, n.jsx)("div", {
                            className: "px-5",
                            children: (0, n.jsxs)(_.b, {
                                interactive: i,
                                children: [e, a]
                            })
                        }), w[49] = i, w[50] = e, w[51] = a, w[52] = t) : t = w[52];
                        let s = null == L ? null : eh;
                        return w[53] !== t || w[54] !== s ? (r = (0, n.jsxs)("section", {
                            className: "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                            children: [t, s]
                        }), w[53] = t, w[54] = s, w[55] = r) : r = w[55], r
                    }
                    if ("card" === $ || "plain" === $) {
                        let e, a, t, r, l, s = "card" === $ ? "gap-1" : "gap-2";
                        w[56] !== s ? (e = (0, i.a)("flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4", s), w[56] = s, w[57] = e) : e = w[57], w[58] !== S || w[59] !== $ || w[60] !== G ? (a = null != G || null != S ? (0, n.jsxs)("header", {
                            className: (0, i.a)("flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", "card" === $ && "px-1"),
                            children: [null != G ? (0, n.jsx)("h3", {
                                className: "truncate",
                                children: G
                            }) : null, A()(S) ? S({
                                isExpanded: !0
                            }) : S]
                        }) : null, w[58] = S, w[59] = $, w[60] = G, w[61] = a) : a = w[61];
                        let o = "card" === $ ? "group/summary-card overflow-hidden rounded-2xl border border-default" : "flex min-w-0 flex-col",
                            d = "card" === $ ? "card" : void 0;
                        return w[62] !== Y || w[63] !== L || w[64] !== em ? (t = Y && !em ? (0, n.jsx)(U, {
                            className: "overflow-hidden",
                            animateContentResize: !0,
                            collapsible: !1,
                            sectionContentClassName: "",
                            children: L
                        }) : L, w[62] = Y, w[63] = L, w[64] = em, w[65] = t) : t = w[65], w[66] !== o || w[67] !== d || w[68] !== t ? (r = (0, n.jsx)("div", {
                            className: o,
                            "data-variant": d,
                            children: t
                        }), w[66] = o, w[67] = d, w[68] = t, w[69] = r) : r = w[69], w[70] !== e || w[71] !== a || w[72] !== r ? (l = (0, n.jsxs)("section", {
                            className: e,
                            children: [a, r]
                        }), w[70] = e, w[71] = a, w[72] = r, w[73] = l) : l = w[73], l
                    }
                    let ey = "nested" === et ? "pt-3" : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
                        ev = (void 0 === V || V) && "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
                        eg = ee ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4" : "after:inset-x-0",
                        eb = "accordion" !== $ || eu || "standalone" === et ? "last:pb-0" : "last:pb-0.5";
                    return w[74] !== ey || w[75] !== ev || w[76] !== eg || w[77] !== eb ? (y = (0, i.a)("relative z-0 flex flex-col", ey, ev, eg, eb), w[74] = ey, w[75] = ev, w[76] = eg, w[77] = eb, w[78] = y) : y = w[78], w[79] !== ec || w[80] !== er || w[81] !== N ? (v = ec ? () => {
                        er.set(H, N, "canceled")
                    } : void 0, w[79] = ec, w[80] = er, w[81] = N, w[82] = v) : v = w[82], w[83] !== S || w[84] !== el || w[85] !== z || w[86] !== Q || w[87] !== ee || w[88] !== eu || w[89] !== $ || w[90] !== X || w[91] !== B || w[92] !== l || w[93] !== em || w[94] !== ea || w[95] !== G || w[96] !== K ? (g = "headerless" !== $ ? (0, n.jsx)(F, {
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
                            "dropdown" !== $ && (z && (0, O.b)(el, z), l(!eu))
                        },
                        shouldUseReducedMotion: em,
                        titleSuffix: K,
                        collapsedSummary: Q,
                        children: G
                    }) : null, w[83] = S, w[84] = el, w[85] = z, w[86] = Q, w[87] = ee, w[88] = eu, w[89] = $, w[90] = X, w[91] = B, w[92] = l, w[93] = em, w[94] = ea, w[95] = G, w[96] = K, w[97] = g) : g = w[97], w[98] !== eh || w[99] !== y || w[100] !== v || w[101] !== g ? (b = (0, n.jsxs)("section", {
                        role: "presentation",
                        className: y,
                        onClick: v,
                        children: [g, eh]
                    }), w[98] = eh, w[99] = y, w[100] = v, w[101] = g, w[102] = b) : b = w[102], b
                },
                SectionActions: _.p,
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
                            children: (0, n.jsx)(Q, {
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
                        u[21] !== C || u[22] !== p || u[23] !== x || u[24] !== b || u[25] !== w || u[26] !== j || u[27] !== a || u[28] !== t ? (e = (0, n.jsx)(D.a, {
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
                SourceRow: Q,
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
                        children: (0, n.jsx)(K, {})
                    }), d[10] = l) : l = d[10], d[11] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(_.k, {
                        children: (0, n.jsx)(q.a, {
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

        function ea(e) {
            let a, t = (0, r.c)(2);
            t[0] !== e ? (a = void 0 === e ? {} : e, t[0] = e, t[1] = a) : a = t[1];
            let {
                afterAnimation: n
            } = a, {
                isVisible: l,
                isAnimating: i
            } = (0, u.useContext)(O.a);
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