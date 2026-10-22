export const __rspack_esm_id = 293453;
export const __rspack_esm_ids = [293453];
export const __webpack_modules__ = {
    BWr: (function(e, a, t) {
        var n = t("A"),
            r = t("Qo"),
            l = t("on"),
            i = t("KUd"),
            s = t.n(i),
            o = t("zd"),
            d = t("oy"),
            c = t("ygO"),
            u = t("HOL"),
            m = t("Gz"),
            p = t("MIZ"),
            f = t("eZ0");

        function x(e) {
            let a, t, i, x, v, g, b, w, j, C, N, k, z = (0, r.c)(79),
                {
                    children: S,
                    empty: _,
                    getKey: M,
                    getNewItemPosition: L,
                    isLoadingMore: A,
                    items: I,
                    listAriaLabel: P,
                    listClassName: O,
                    onVisibleItemsChange: E,
                    onLoadMore: R,
                    paginationButtonClassName: B,
                    presentation: H,
                    preserveExpandedOrder: T,
                    renderFooter: W,
                    renderPagination: F,
                    visibleItemIncrement: V,
                    visibleItemLimit: q
                } = e,
                Z = void 0 !== A && A,
                U = void 0 === H ? "summary" : H,
                G = void 0 !== T && T,
                Q = void 0 === q ? 6 : q,
                [X, D] = (0, o.useState)(Q),
                [K, Y] = (0, o.useState)(null);
            if (z[0] !== K || z[1] !== M || z[2] !== L || z[3] !== I || z[4] !== G || z[5] !== X) {
                if (a = I, G && null != K) {
                    let e, t;
                    z[7] !== M ? (e = (e, a) => ({
                        item: e,
                        key: M(e, a)
                    }), z[7] = M, z[8] = e) : e = z[8], z[9] !== K || z[10] !== L ? (t = e => {
                        let {
                            item: a,
                            key: t
                        } = e;
                        return K.get(t) ?? (L?.(a) === "end" ? 1 / 0 : -1)
                    }, z[9] = K, z[10] = L, z[11] = t) : t = z[11];
                    let n = s()(I.map(e), t);
                    if (a = n.map(y), n.length !== K.size || n.some(e => {
                            let {
                                key: a
                            } = e;
                            return !K.has(a)
                        })) {
                        let e;
                        Y(new Map(n.map(h))), z[12] !== K || z[13] !== X ? (e = e => {
                            let {
                                key: a
                            } = e;
                            return (K.get(a) ?? 1 / 0) < X
                        }, z[12] = K, z[13] = X, z[14] = e) : e = z[14], D(Math.max(X, n.findLastIndex(e) + 1))
                    }
                }
                z[0] = K, z[1] = M, z[2] = L, z[3] = I, z[4] = G, z[5] = X, z[6] = a
            } else a = z[6];
            z[15] !== a || z[16] !== X ? (t = a.slice(0, X), z[15] = a, z[16] = X, z[17] = t) : t = z[17];
            let $ = t;
            if (z[18] !== E || z[19] !== $ ? (i = () => {
                    E?.($)
                }, x = [E, $], z[18] = E, z[19] = $, z[20] = i, z[21] = x) : (i = z[20], x = z[21]), (0, o.useEffect)(i, x), 0 === I.length && null == R) return _ ?? null;
            let J = I.length > Q || null != R,
                ee = I.length - $.length,
                ea = 0 === ee && null == R,
                et = V ?? 50,
                en = null == R ? Math.min(ee, et) : et;
            z[22] !== M || z[23] !== ee || z[24] !== ea || z[25] !== Z || z[26] !== I.length || z[27] !== R || z[28] !== a || z[29] !== G || z[30] !== et || z[31] !== Q ? (v = () => {
                !Z && (G && Y(ea ? null : new Map(a.map((e, a) => [M(e, a), a]))), D(e => ea ? Q : null == R ? Math.min(I.length, e + et) : e + et), ee < et && R?.())
            }, z[22] = M, z[23] = ee, z[24] = ea, z[25] = Z, z[26] = I.length, z[27] = R, z[28] = a, z[29] = G, z[30] = et, z[31] = Q, z[32] = v) : v = z[32];
            let er = v;
            z[33] !== S || z[34] !== M || z[35] !== P || z[36] !== O || z[37] !== $ ? (g = null == P ? (0, n.jsx)(p.j, {
                className: O,
                children: $.map((e, a) => (0, n.jsx)(o.Fragment, {
                    children: S(e, a)
                }, M(e, a)))
            }) : (0, n.jsx)(p.j, {
                "aria-label": P,
                className: O,
                role: "list",
                children: $.map((e, a) => (0, n.jsx)("div", {
                    role: "listitem",
                    children: S(e, a)
                }, M(e, a)))
            }), z[33] = S, z[34] = M, z[35] = P, z[36] = O, z[37] = $, z[38] = g) : g = z[38];
            let el = g;
            return z[39] !== W || z[40] !== $ ? (b = W?.($), z[39] = W, z[40] = $, z[41] = b) : b = z[41], z[42] !== J || z[43] !== ea || z[44] !== Z || z[45] !== en || z[46] !== F || z[47] !== er ? (w = J && null != F ? F({
                nextRevealCount: en,
                isExpanded: ea,
                isLoadingMore: Z,
                onToggle: er
            }) : null, z[42] = J, z[43] = ea, z[44] = Z, z[45] = en, z[46] = F, z[47] = er, z[48] = w) : w = z[48], z[49] !== J || z[50] !== ea || z[51] !== Z || z[52] !== U || z[53] !== F || z[54] !== er ? (j = J && null == F && "plain" === U ? (0, n.jsx)(m.b, {
                children: (0, n.jsx)(m.a, {
                    alignment: "content",
                    disabled: Z,
                    onClick: er,
                    children: ea ? (0, n.jsx)(d.a, {
                        id: "sidebarElectron.showLess",
                        defaultMessage: "Show less",
                        description: "Button label for restoring the initial item limit of an expanded sidebar list"
                    }) : (0, n.jsx)(d.a, {
                        id: "sidebarElectron.showMore",
                        defaultMessage: "Show more",
                        description: "Button label for expanding a task list in the sidebar"
                    })
                })
            }) : null, z[49] = J, z[50] = ea, z[51] = Z, z[52] = U, z[53] = F, z[54] = er, z[55] = j) : j = z[55], z[56] !== J || z[57] !== ea || z[58] !== Z || z[59] !== U || z[60] !== F || z[61] !== er ? (C = J && null == F && "card" === U ? (0, n.jsxs)(p.h, {
                disabled: Z,
                onClick: er,
                children: [(0, n.jsx)(p.l, {
                    variant: "custom",
                    children: (0, n.jsx)(u.a, {
                        asset: f.a
                    })
                }), (0, n.jsx)(p.k, {
                    children: ea ? (0, n.jsx)(d.a, {
                        id: "codex.summaryPanel.card.showLess",
                        defaultMessage: "Show less",
                        description: "Collapse an expanded list in a profile card"
                    }) : (0, n.jsx)(d.a, {
                        id: "codex.summaryPanel.card.showMore",
                        defaultMessage: "Show more",
                        description: "Expand a list in a profile card to show additional items"
                    })
                })]
            }) : null, z[56] = J, z[57] = ea, z[58] = Z, z[59] = U, z[60] = F, z[61] = er, z[62] = C) : C = z[62], z[63] !== J || z[64] !== ea || z[65] !== Z || z[66] !== en || z[67] !== B || z[68] !== U || z[69] !== F || z[70] !== er ? (N = J && null == F && "summary" === U ? (0, n.jsx)(c.a, {
                className: (0, l.b)("!px-0 !py-0 text-tertiary hover:text-secondary", B),
                color: "ghostMuted",
                size: "default",
                disabled: Z,
                onClick: er,
                children: ea ? (0, n.jsx)(d.a, {
                    id: "codex.localConversation.summaryPanelExpandableList.showLess",
                    defaultMessage: "Show less",
                    description: "Button label that collapses a long list in the conversation summary panel"
                }) : (0, n.jsx)(d.a, {
                    id: "codex.localConversation.summaryPanelExpandableList.showMore",
                    defaultMessage: "Show {count, number} more",
                    description: "Button label that expands a long list in the conversation summary panel",
                    values: {
                        count: en
                    }
                })
            }) : null, z[63] = J, z[64] = ea, z[65] = Z, z[66] = en, z[67] = B, z[68] = U, z[69] = F, z[70] = er, z[71] = N) : N = z[71], z[72] !== el || z[73] !== b || z[74] !== w || z[75] !== j || z[76] !== C || z[77] !== N ? (k = (0, n.jsxs)(n.Fragment, {
                children: [el, b, w, j, C, N]
            }), z[72] = el, z[73] = b, z[74] = w, z[75] = j, z[76] = C, z[77] = N, z[78] = k) : k = z[78], k
        }

        function h(e, a) {
            let {
                key: t
            } = e;
            return [t, a]
        }

        function y(e) {
            let {
                item: a
            } = e;
            return a
        }
        t.d(a, {
            a: () => x
        })
    }),
    MIZ: (function(e, a, t) {
        var n = t("A"),
            r = t("Qo"),
            l = t("on"),
            i = t("zd"),
            s = t("oy"),
            o = t("ygO"),
            d = t("PA"),
            c = t("bf"),
            u = t("yf2"),
            m = t("Cq"),
            p = t("Pjl");
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

        function N(e) {
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
                N = void 0 === m || m,
                k = w || void 0,
                z = g[void 0 === p ? "default" : p],
                S = !w && j && x,
                _ = w && "cursor-not-allowed text-tertiary";
            b[10] !== t || b[11] !== z || b[12] !== S || b[13] !== _ ? (h = (0, l.b)(f, z, S, _, t), b[10] = t, b[11] = z, b[12] = S, b[13] = _, b[14] = h) : h = b[14];
            let M = C || void 0;
            return b[15] !== j || b[16] !== N ? (y = j && N && (0, n.jsx)(c.ec, {
                className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
            }), b[15] = j, b[16] = N, b[17] = y) : y = b[17], b[18] !== a || b[19] !== i || b[20] !== s || b[21] !== h || b[22] !== M || b[23] !== y || b[24] !== k ? (v = (0, n.jsxs)("div", {
                ...i,
                "aria-disabled": k,
                className: h,
                "data-slot": "thread-summary-panel-item",
                "data-multiline": M,
                ref: s,
                children: [a, y]
            }), b[18] = a, b[19] = i, b[20] = s, b[21] = h, b[22] = M, b[23] = y, b[24] = k, b[25] = v) : v = b[25], v
        }

        function k(e) {
            let a, t, o, d, u, m, p, x, v, b, w, j, C, N, k, z, S = (0, r.c)(36);
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
                I = void 0 === v ? "default" : v,
                P = void 0 === b ? "button" : b,
                O = void 0 !== w && w,
                E = (0, i.useId)();
            S[12] !== o || S[13] !== O || S[14] !== E ? (j = O ? [o["aria-describedby"], E].filter(Boolean).join(" ") : o["aria-describedby"], S[12] = o, S[13] = O, S[14] = E, S[15] = j) : j = S[15];
            let R = j,
                B = !_ && h[M],
                H = g[I];
            S[16] !== t || S[17] !== H || S[18] !== B ? (C = (0, l.b)(f, B, y, "disabled:cursor-not-allowed disabled:not-aria-busy:text-tertiary", H, t), S[16] = t, S[17] = H, S[18] = B, S[19] = C) : C = S[19];
            let T = L || void 0;
            return S[20] !== O || S[21] !== E ? (N = O ? (0, n.jsxs)(n.Fragment, {
                children: [(0, n.jsx)("span", {
                    "aria-hidden": !0,
                    className: "h-1.5 w-1.5 shrink-0 rounded-full bg-blue"
                }), (0, n.jsx)("span", {
                    id: E,
                    className: "sr-only",
                    children: (0, n.jsx)(s.a, {
                        id: "sidebar.navItem.unread",
                        defaultMessage: "Unread updates",
                        description: "Accessible description for a navigation item with unread updates"
                    })
                })]
            }) : null, S[20] = O, S[21] = E, S[22] = N) : N = S[22], S[23] !== A ? (k = A && (0, n.jsx)(c.ec, {
                className: "hidden text-tertiary group-data-[variant=card]/summary-card:block"
            }), S[23] = A, S[24] = k) : k = S[24], S[25] !== a || S[26] !== R || S[27] !== _ || S[28] !== o || S[29] !== d || S[30] !== C || S[31] !== T || S[32] !== N || S[33] !== k || S[34] !== P ? (z = (0, n.jsxs)("button", {
                ...o,
                "aria-describedby": R,
                className: C,
                "data-slot": "thread-summary-panel-item-button",
                "data-multiline": T,
                disabled: _,
                ref: d,
                type: P,
                children: [a, N, k]
            }), S[25] = a, S[26] = R, S[27] = _, S[28] = o, S[29] = d, S[30] = C, S[31] = T, S[32] = N, S[33] = k, S[34] = P, S[35] = z) : z = S[35], z
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

        function I(e) {
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
                children: [h, (0, n.jsx)(P, {
                    children: (0, n.jsx)("span", {
                        className: "text-fade-truncate",
                        children: i
                    })
                })]
            }), f[15] = i, f[16] = h, f[17] = p) : p = f[17], p
        }

        function P(e) {
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
                N = "rest" === y && "group-focus-within/summary-panel-item:opacity-0 group-hover/summary-panel-item:opacity-0 group-has-[[aria-expanded=true]]/summary-panel-item:opacity-0";
            return f[8] !== t || f[9] !== v || f[10] !== g || f[11] !== b || f[12] !== w || f[13] !== N ? (u = (0, l.b)("flex items-center group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", v, g, b, w, N, t), f[8] = t, f[9] = v, f[10] = g, f[11] = b, f[12] = w, f[13] = N, f[14] = u) : u = f[14], f[15] !== a || f[16] !== x ? (m = x ? (0, n.jsx)("span", {
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
            return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, n.jsx)(P, {
                variant: "icon",
                children: (0, n.jsx)(p.a, {})
            }), a[0] = e) : e = a[0], e
        }

        function E(e) {
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
                N = "overlay" === b && "absolute inset-y-0 end-0 my-auto";
            return v[10] !== t || v[11] !== b || v[12] !== j || v[13] !== C || v[14] !== N || v[15] !== w ? (p = (0, l.b)("flex h-5 shrink-0 items-center", j, C, N, "interaction" === w && ["pointer-events-none opacity-0 group-focus-within/summary-panel-item:pointer-events-auto group-focus-within/summary-panel-item:opacity-100 group-hover/summary-panel-item:pointer-events-auto group-hover/summary-panel-item:opacity-100 has-[[aria-expanded=true]]:pointer-events-auto has-[[aria-expanded=true]]:opacity-100", "inline" === b && "pointer-coarse:pointer-events-auto pointer-coarse:opacity-100"], t), v[10] = t, v[11] = b, v[12] = j, v[13] = C, v[14] = N, v[15] = w, v[16] = p) : p = v[16], v[17] !== i ? (f = e => {
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

        function R(e) {
            let a, t = (0, r.c)(2);
            return t[0] !== e ? (a = (0, n.jsx)(T, {
                className: "-me-1.5",
                ...e
            }), t[0] = e, t[1] = a) : a = t[1], a
        }

        function B(e) {
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

        function H(e) {
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

        function T(e) {
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
            a: () => T,
            b: () => N,
            c: () => R,
            d: () => B,
            e: () => E,
            f: () => L,
            g: () => A,
            h: () => k,
            i: () => O,
            j: () => _,
            k: () => I,
            l: () => M,
            m: () => z,
            n: () => P,
            o: () => S,
            p: () => H
        })
    }),
    q54: (function(e, a, t) {
        t.d(a, {
            a: () => J,
            b: () => ea
        });
        var n = t("A"),
            r = t("Qo"),
            l = t("on"),
            i = t("iod"),
            s = t("rfA"),
            o = t("IP"),
            d = t("Xnl"),
            c = t("zd"),
            u = t("v7"),
            m = t("Wf"),
            p = t("Qg"),
            f = t("I7b"),
            x = t("Qc");
        t("DU");
        var h = t("FHY"),
            y = t("gbr"),
            v = t("zjp"),
            g = t("ygO"),
            b = t("rs"),
            w = t("HOL"),
            j = t("UxN"),
            C = t("Cq"),
            N = t("eG"),
            k = t("Pnw"),
            z = t("V8"),
            S = t("BWr"),
            _ = t("MIZ"),
            M = t("suc"),
            L = t("V9"),
            A = t.n(L),
            I = t("bq"),
            P = t("Pjl"),
            O = t("tSE"),
            E = t("m5"),
            R = t("Nw");
        let B = {
                height: 0,
                opacity: 0,
                marginTop: 0
            },
            H = {
                height: "auto",
                opacity: 1,
                marginTop: 2
            },
            T = (0, R.c)(e => `thread-summary-panel-section-expanded-${e}`, null),
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
                C = !!y && B;
            u[0] !== y ? (a = y ? H : {}, u[0] = y, u[1] = a) : a = u[1];
            let N = p ? g ?? "auto" : "auto";
            u[2] !== a || u[3] !== N ? (t = {
                ...a,
                height: N
            }, u[2] = a, u[3] = N, u[4] = t) : t = u[4];
            let k = y ? B : void 0;
            return u[5] !== p ? (l = p ? e => (0, E.a)({
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
            }), u[7] = f, u[8] = h, u[9] = l, u[10] = s) : s = u[10], u[11] !== m || u[12] !== s || u[13] !== w || u[14] !== j || u[15] !== C || u[16] !== t || u[17] !== k ? (d = (0, n.jsx)(o.a.div, {
                className: m,
                "aria-hidden": w,
                inert: j,
                initial: C,
                animate: t,
                exit: k,
                transition: z.a,
                children: s
            }), u[11] = m, u[12] = s, u[13] = w, u[14] = j, u[15] = C, u[16] = t, u[17] = k, u[18] = d) : d = u[18], d
        }

        function V(e) {
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
                N = null != x && x.length > 1,
                k = "accordion" === f ? g : void 0;
            u[0] !== y ? (a = (0, n.jsx)("span", {
                className: "truncate",
                children: y
            }), u[0] = y, u[1] = a) : a = u[1];
            let z = v ? null : j;
            u[2] !== N || u[3] !== v || u[4] !== f || u[5] !== w ? (t = ("accordion" === f || N) && (0, n.jsx)(P.a, {
                "aria-hidden": "true",
                className: (0, l.a)("icon-disclosure shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100", !w && "transition-transform", v ? "opacity-0" : "opacity-100", v ? "rotate-0" : "-rotate-90")
            }), u[2] = N, u[3] = v, u[4] = f, u[5] = w, u[6] = t) : t = u[6], u[7] !== C || u[8] !== v ? (i = v || null == C ? null : (0, n.jsx)("span", {
                className: "ms-auto flex min-w-0 items-center",
                children: C
            }), u[7] = C, u[8] = v, u[9] = i) : i = u[9], u[10] !== v || u[11] !== k || u[12] !== a || u[13] !== z || u[14] !== t || u[15] !== i ? (s = (0, n.jsxs)("button", {
                "aria-expanded": v,
                className: "group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring",
                onClick: k,
                type: "button",
                children: [a, z, t, i]
            }), u[10] = v, u[11] = k, u[12] = a, u[13] = z, u[14] = t, u[15] = i, u[16] = s) : s = u[16];
            let S = s,
                _ = S;
            if ("heading" === f) {
                let e;
                u[17] !== y ? (e = (0, n.jsx)("h3", {
                    className: "min-w-0 truncate select-none",
                    children: y
                }), u[17] = y, u[18] = e) : e = u[18], _ = e
            } else if ("dropdown" === f && N) {
                let e, a;
                u[19] !== b || u[20] !== x ? (e = x?.map(e => (0, n.jsx)(I.f, {
                    onSelect: () => b?.(e),
                    children: e
                }, e)), u[19] = b, u[20] = x, u[21] = e) : e = u[21], u[22] !== e || u[23] !== S ? (a = (0, n.jsx)(I.a, {
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
        var q = t("KW"),
            Z = t("oy"),
            U = t("PA"),
            G = t("bf"),
            Q = e => (0, n.jsx)("svg", {
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

        function X(e) {
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
            let N = s;
            if (null != m) {
                let e, a = b ? m : void 0,
                    t = b ? void 0 : f;
                return d[15] !== N || d[16] !== m || d[17] !== f || d[18] !== v || d[19] !== g || d[20] !== b || d[21] !== t || d[22] !== a ? (e = (0, n.jsx)(_.m, {
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
            if (null != y) {
                let e;
                return d[24] !== N || d[25] !== c || d[26] !== u || d[27] !== f || d[28] !== y ? (e = (0, n.jsx)(_.h, {
                    "aria-controls": c,
                    "aria-expanded": u,
                    "aria-label": f,
                    className: "select-none",
                    onClick: y,
                    title: f,
                    tone: "muted",
                    children: N
                }), d[24] = N, d[25] = c, d[26] = u, d[27] = f, d[28] = y, d[29] = e) : e = d[29], e
            }
            return d[30] !== N || d[31] !== f ? (o = (0, n.jsx)(_.b, {
                className: "select-none",
                tone: "muted",
                title: f,
                children: N
            }), d[30] = N, d[31] = f, d[32] = o) : o = d[32], o
        }
        var D = t("lTY"),
            K = t("vSG"),
            Y = t("oNm");
        let $ = {
                opacity: 0,
                transform: "translateX(0%)"
            },
            J = {
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
                        N = void 0 === p || p,
                        {
                            fullWidth: k,
                            isVisible: z,
                            placement: S
                        } = (0, c.useContext)(ee),
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
                    let A = !N && "isolate",
                        I = k && "bg-surface";
                    g[12] !== t || g[13] !== A || g[14] !== I ? (h = (0, l.b)("group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden", A, I, t), g[12] = t, g[13] = A, g[14] = I, g[15] = h) : h = g[15];
                    let P = k || "docked" === S,
                        O = N ? void 0 : i;
                    return g[16] !== a || g[17] !== _ || g[18] !== i || g[19] !== N || g[20] !== j ? (y = N ? (0, n.jsx)(o.a.div, {
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
                    }) : a, g[16] = a, g[17] = _, g[18] = i, g[19] = N, g[20] = j, g[21] = y) : y = g[21], g[22] !== C || g[23] !== s || g[24] !== P || g[25] !== O || g[26] !== y || g[27] !== h || g[28] !== j ? (v = (0, n.jsx)(b.c, {
                        className: h,
                        "data-summary-panel-variant": j,
                        "data-summary-panel-density": C,
                        unstyled: P,
                        variant: "island",
                        ...s,
                        onScroll: O,
                        children: y
                    }), g[22] = C, g[23] = s, g[24] = P, g[25] = O, g[26] = y, g[27] = h, g[28] = j, g[29] = v) : v = g[29], v
                },
                HeaderButton: function(e) {
                    let a, t, l, i, s, o, c, u, m = (0, r.c)(20);
                    m[0] !== e ? ({
                        label: t,
                        onClick: l,
                        pressed: i,
                        shortcut: s,
                        ...a
                    } = e, m[0] = e, m[1] = a, m[2] = t, m[3] = l, m[4] = i, m[5] = s) : (a = m[1], t = m[2], l = m[3], i = m[4], s = m[5]);
                    let p = (0, d.A)(k.a),
                        f = i ? "secondary" : "toolbar";
                    return m[6] !== p ? (o = "iconMd" === p ? (0, n.jsx)(w.a, {
                        "aria-hidden": !1,
                        asset: D.a
                    }) : (0, n.jsx)(j.b, {
                        "aria-hidden": !1,
                        icon: {
                            assets: {
                                16: K.a,
                                20: Y.a
                            }
                        }
                    }), m[6] = p, m[7] = o) : o = m[7], m[8] !== a || m[9] !== t || m[10] !== l || m[11] !== i || m[12] !== p || m[13] !== f || m[14] !== o ? (c = (0, n.jsx)(g.a, {
                        "data-thread-summary-panel-toggle": !0,
                        size: p,
                        uniform: !0,
                        color: f,
                        "aria-label": t,
                        "aria-pressed": i,
                        title: t,
                        onClick: l,
                        ...a,
                        children: o
                    }), m[8] = a, m[9] = t, m[10] = l, m[11] = i, m[12] = p, m[13] = f, m[14] = o, m[15] = c) : c = m[15], m[16] !== t || m[17] !== s || m[18] !== c ? (u = (0, n.jsx)(C.a, {
                        tooltipContent: t,
                        shortcut: s,
                        delayOpen: !0,
                        children: c
                    }), m[16] = t, m[17] = s, m[18] = c, m[19] = u) : u = m[19], u
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
                    let a, t, l, i, s = (0, r.c)(7),
                        {
                            children: o,
                            isPIPObstacle: d
                        } = e,
                        c = void 0 !== d && d ? "thread-summary-panel-popover" : void 0;
                    return s[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                        width: 300
                    }, s[0] = a) : a = s[0], s[1] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                        fullWidth: !1,
                        isVisible: !0,
                        isAnimating: !1,
                        placement: "floating"
                    }, s[1] = t) : t = s[1], s[2] !== o ? (l = (0, n.jsx)(ee.Provider, {
                        value: t,
                        children: o
                    }), s[2] = o, s[3] = l) : l = s[3], s[4] !== c || s[5] !== l ? (i = (0, n.jsx)("div", {
                        "data-pip-obstacle": c,
                        className: "flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col gap-3",
                        style: a,
                        children: l
                    }), s[4] = c, s[5] = l, s[6] = i) : i = s[6], i
                },
                Root: function(e) {
                    let a, t, p, v, g, b, w, j, C, k, z, S, _, M, L, A, I, P, O, E, R, B, H, T, W, F, V, Z = (0, r.c)(121),
                        {
                            animateOnExit: U,
                            animateOnMount: G,
                            children: Q,
                            fillHeight: X,
                            fullWidth: D,
                            fullWidthTransition: K,
                            isPIPObstacle: Y,
                            maxHeight: J,
                            placement: ea,
                            portalContainer: et,
                            reserveToolbarSpace: en,
                            resizer: er,
                            shouldHideInlineImmediately: el,
                            shouldShow: ei,
                            width: es
                        } = e,
                        eo = void 0 === U || U,
                        ed = void 0 !== G && G,
                        ec = void 0 !== X && X,
                        eu = void 0 !== D && D,
                        em = void 0 === K ? "default" : K,
                        ep = void 0 === ea ? "floating" : ea,
                        ef = void 0 !== en && en,
                        ex = void 0 === es ? 300 : es,
                        eh = (0, m.a)(),
                        [ey, ev] = (0, c.useState)(null),
                        eg = null == ey ? null : ey / 2,
                        eb = (0, d.A)(x.F),
                        ew = (0, d.A)(y.h),
                        ej = (0, d.A)(N.c),
                        eC = (0, i.a)(),
                        eN = ei && eC && !el,
                        ek = (0, s.a)(),
                        [ez, eS] = (0, c.useState)(ei),
                        [e_, eM] = (0, c.useState)(ed && !ej && !eb),
                        eL = "docked" === ep ? $ : q.b.hidden,
                        eA = ei ? q.b.visible : eL,
                        eI = (0, c.useRef)(null),
                        eP = (0, c.useRef)(eb),
                        eO = (0, c.useRef)(ew),
                        eE = (0, c.useRef)(!1),
                        eR = (0, c.useRef)(ed);
                    if (ej || eb) {
                        let e;
                        Z[0] === Symbol.for("react.memo_cache_sentinel") ? (e = {
                            duration: 0
                        }, Z[0] = e) : e = Z[0], a = e
                    } else a = "docked" === ep ? f.b : q.a;
                    Z[1] !== em ? (t = "relaxed" === em ? {
                        ...f.a,
                        duration: .3
                    } : f.a, Z[1] = em, Z[2] = t) : t = Z[2];
                    let eB = t;
                    Z[3] !== eb || Z[4] !== eC || Z[5] !== ew || Z[6] !== el || Z[7] !== ej || Z[8] !== ek || Z[9] !== eA ? (p = () => {
                        if (!eC) return;
                        eE.current || queueMicrotask(() => {
                            eE.current = !0
                        });
                        let e = eP.current !== eb,
                            a = eO.current !== ew,
                            t = eI.current !== eA;
                        eI.current = eA, eP.current = eb, eO.current = ew, ek.stop(), !eE.current && !eR.current || e || a || !t && eE.current || el || ej ? (ek.set(eA), eS(eA.opacity > 0), eM(!1)) : ek.start(eA)
                    }, Z[3] = eb, Z[4] = eC, Z[5] = ew, Z[6] = el, Z[7] = ej, Z[8] = ek, Z[9] = eA, Z[10] = p) : p = Z[10], Z[11] !== eb || Z[12] !== eC || Z[13] !== ew || Z[14] !== et || Z[15] !== el || Z[16] !== ej || Z[17] !== ek || Z[18] !== eA ? (v = [eb, eC, ew, et, el, ej, ek, eA], Z[11] = eb, Z[12] = eC, Z[13] = ew, Z[14] = et, Z[15] = el, Z[16] = ej, Z[17] = ek, Z[18] = eA, Z[19] = v) : v = Z[19], (0, c.useLayoutEffect)(p, v), Z[20] !== ep || Z[21] !== er ? (g = e => {
                        let a = e?.parentElement;
                        if (null == er || "docked" !== ep || null == a) return;
                        let t = () => ev(a.clientWidth);
                        t();
                        let n = new ResizeObserver(t);
                        return n.observe(a), () => n.disconnect()
                    }, Z[20] = ep, Z[21] = er, Z[22] = g) : g = Z[22];
                    let eH = "docked" === ep ? "relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]" : "absolute";
                    Z[23] !== eu || Z[24] !== ep || Z[25] !== et || Z[26] !== ef || Z[27] !== eH ? (b = (0, l.b)("pointer-events-none z-40", eH, "floating" === ep && [null != et && ["portalLayout-_LSX2_", ef && "belowToolbar-VYFp43"], null == et && (eu ? "inset-0" : "top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) max-w-full")]), Z[23] = eu, Z[24] = ep, Z[25] = et, Z[26] = ef, Z[27] = eH, Z[28] = b) : b = Z[28], Z[29] !== J ? (w = {
                        maxHeight: J
                    }, Z[29] = J, Z[30] = w) : w = Z[30];
                    let eT = !eN,
                        eW = !eN;
                    Z[31] !== ed || Z[32] !== ep || Z[33] !== ej ? (j = "docked" === ep && !!ed && !ej && {
                        width: 0
                    }, Z[31] = ed, Z[32] = ep, Z[33] = ej, Z[34] = j) : j = Z[34], Z[35] !== eu || Z[36] !== ep || Z[37] !== et || Z[38] !== ei || Z[39] !== ex ? (C = "docked" === ep ? {
                        width: ei ? "auto" : 0
                    } : {
                        "--thread-floating-panel-full-width-progress": +!!eu,
                        width: null == et ? "auto" : `calc(min(${ex}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`
                    }, Z[35] = eu, Z[36] = ep, Z[37] = et, Z[38] = ei, Z[39] = ex, Z[40] = C) : C = Z[40], Z[41] !== eo || Z[42] !== ep ? (k = eo && "docked" === ep ? {
                        width: 0
                    } : void 0, Z[41] = eo, Z[42] = ep, Z[43] = k) : k = Z[43];
                    let eF = "docked" === ep || ej ? a : eB,
                        eV = "docked" === ep ? "w-max max-w-[50cqw]" : "max-w-full",
                        eq = "floating" === ep && null == et && !eu && "pe-2",
                        eZ = ec && "h-full",
                        eU = (null != et || eu) && "w-full";
                    Z[44] !== eV || Z[45] !== eq || Z[46] !== eZ || Z[47] !== eU ? (z = (0, l.b)("relative isolate flex max-h-full", eV, eq, eZ, eU), Z[44] = eV, Z[45] = eq, Z[46] = eZ, Z[47] = eU, Z[48] = z) : z = Z[48];
                    let eG = eN && (void 0 === Y || Y) ? "thread-summary-panel" : void 0,
                        eQ = (null != et || eu) && "w-full";
                    Z[49] !== eQ ? (S = (0, l.b)("pointer-events-none absolute inset-y-0 start-0 max-w-full", eQ), Z[49] = eQ, Z[50] = S) : S = Z[50], Z[51] !== eu || Z[52] !== et || Z[53] !== ex ? (_ = null != et || eu ? void 0 : {
                        width: ex
                    }, Z[51] = eu, Z[52] = et, Z[53] = ex, Z[54] = _) : _ = Z[54], Z[55] !== eG || Z[56] !== S || Z[57] !== _ ? (M = (0, n.jsx)("div", {
                        "data-pip-obstacle": eG,
                        className: S,
                        style: _,
                        "aria-hidden": !0
                    }), Z[55] = eG, Z[56] = S, Z[57] = _, Z[58] = M) : M = Z[58];
                    let eX = ei && (!ed || ej) ? q.b.visible : eL,
                        eD = ec && "h-full",
                        eK = (null != et || eu) && "w-full",
                        eY = el && "invisible";
                    Z[59] !== eD || Z[60] !== eK || Z[61] !== eY ? (L = (0, l.b)("pointer-events-none max-h-full min-h-0 min-w-0 max-w-full", eD, eK, eY), Z[59] = eD, Z[60] = eK, Z[61] = eY, Z[62] = L) : L = Z[62];
                    let e$ = eo ? eL : void 0,
                        eJ = a;
                    Z[63] === Symbol.for("react.memo_cache_sentinel") ? (A = () => {
                        eS(!0), eM(!0)
                    }, Z[63] = A) : A = Z[63], Z[64] !== eC || Z[65] !== ei ? (I = () => {
                        eS(ei && eC), eM(!1)
                    }, Z[64] = eC, Z[65] = ei, Z[66] = I) : I = Z[66];
                    let e1 = "docked" === ep && "border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]",
                        e0 = ec && "h-full",
                        e2 = (null != et || eu) && "w-full",
                        e3 = eN ? "pointer-events-auto" : "pointer-events-none";
                    Z[67] !== e1 || Z[68] !== e0 || Z[69] !== e2 || Z[70] !== e3 ? (P = (0, l.b)("flex max-h-full min-h-0 max-w-full flex-col gap-3", e1, e0, e2, e3), Z[67] = e1, Z[68] = e0, Z[69] = e2, Z[70] = e3, Z[71] = P) : P = Z[71], Z[72] !== eu || Z[73] !== et || Z[74] !== ex ? (O = null != et || eu ? void 0 : {
                        width: ex
                    }, Z[72] = eu, Z[73] = et, Z[74] = ex, Z[75] = O) : O = Z[75];
                    let e4 = (eN || ez) && !el;
                    Z[76] !== eu || Z[77] !== e_ || Z[78] !== ep || Z[79] !== e4 ? (E = {
                        fullWidth: eu,
                        isAnimating: e_,
                        isVisible: e4,
                        placement: ep
                    }, Z[76] = eu, Z[77] = e_, Z[78] = ep, Z[79] = e4, Z[80] = E) : E = Z[80], Z[81] !== Q || Z[82] !== E ? (R = (0, n.jsx)(ee.Provider, {
                        value: E,
                        children: Q
                    }), Z[81] = Q, Z[82] = E, Z[83] = R) : R = Z[83], Z[84] !== P || Z[85] !== O || Z[86] !== R ? (B = (0, n.jsx)("div", {
                        className: P,
                        style: O,
                        children: R
                    }), Z[84] = P, Z[85] = O, Z[86] = R, Z[87] = B) : B = Z[87], Z[88] !== eX || Z[89] !== L || Z[90] !== e$ || Z[91] !== I || Z[92] !== B || Z[93] !== a || Z[94] !== ek ? (H = (0, n.jsx)(o.a.div, {
                        initial: eX,
                        className: L,
                        animate: ek,
                        exit: e$,
                        transition: eJ,
                        onAnimationStart: A,
                        onAnimationComplete: I,
                        children: B
                    }), Z[88] = eX, Z[89] = L, Z[90] = e$, Z[91] = I, Z[92] = B, Z[93] = a, Z[94] = ek, Z[95] = H) : H = Z[95], Z[96] !== z || Z[97] !== M || Z[98] !== H ? (T = (0, n.jsxs)("div", {
                        className: z,
                        children: [M, H]
                    }), Z[96] = z, Z[97] = M, Z[98] = H, Z[99] = T) : T = Z[99], Z[100] !== eh || Z[101] !== eg || Z[102] !== ep || Z[103] !== er || Z[104] !== ex ? (W = "docked" === ep && null != er && null != eg && eg > 320 && (0, n.jsx)("div", {
                        className: "pointer-events-auto",
                        children: (0, n.jsx)(h.a, {
                            ariaLabel: eh.formatMessage({
                                id: "splitView.resize",
                                defaultMessage: "Resize panels",
                                description: "Accessible name for the split-view resize handle"
                            }),
                            edge: "left",
                            extendIntoToolbar: !1,
                            defaultSize: er.defaultWidth,
                            getCurrentSize: () => Math.min(ex, eg),
                            minimumSize: 320,
                            maximumSize: eg,
                            setSize: er.onWidthChange
                        })
                    }), Z[100] = eh, Z[101] = eg, Z[102] = ep, Z[103] = er, Z[104] = ex, Z[105] = W) : W = Z[105], Z[106] !== g || Z[107] !== b || Z[108] !== w || Z[109] !== eT || Z[110] !== eW || Z[111] !== j || Z[112] !== C || Z[113] !== k || Z[114] !== eF || Z[115] !== T || Z[116] !== W ? (F = (0, n.jsxs)(o.a.div, {
                        ref: g,
                        className: b,
                        style: w,
                        "aria-hidden": eT,
                        inert: eW,
                        initial: j,
                        animate: C,
                        exit: k,
                        transition: eF,
                        children: [T, W]
                    }), Z[106] = g, Z[107] = b, Z[108] = w, Z[109] = eT, Z[110] = eW, Z[111] = j, Z[112] = C, Z[113] = k, Z[114] = eF, Z[115] = T, Z[116] = W, Z[117] = F) : F = Z[117];
                    let e5 = F;
                    return Z[118] !== e5 || Z[119] !== et ? (V = null == et ? e5 : (0, u.createPortal)(e5, et), Z[118] = e5, Z[119] = et, Z[120] = V) : V = Z[120], V
                },
                Section: function(e) {
                    let a, t, i, s, o, u, m, p, f, x, h, y, v, g, b, w = (0, r.c)(100),
                        {
                            autoCollapse: j,
                            animateContentResize: C,
                            sectionKey: k,
                            after: z,
                            children: S,
                            mode: L,
                            ref: I,
                            sectionOptions: P,
                            defaultCollapsed: E,
                            inset: R,
                            divider: B,
                            surface: H,
                            spacing: q,
                            persistExpansion: Z,
                            title: U,
                            titleSuffix: G,
                            collapsedSummary: Q,
                            onChange: X
                        } = e,
                        D = void 0 !== C && C,
                        K = void 0 === L ? "accordion" : L,
                        Y = void 0 !== E && E,
                        $ = void 0 === R || R,
                        J = void 0 === H ? "elevated" : H,
                        ee = void 0 === Z || Z,
                        ea = (0, d.z)(O.a),
                        et = (0, d.x)(W, k),
                        en = (0, d.x)(T, k),
                        [er, el] = (0, c.useState)(!Y),
                        ei = null != j && "canceled" !== et,
                        es = (!0 !== j || "collapsed" !== et) && (ee ? en ?? !Y : er),
                        eo = (0, d.A)(N.c),
                        ed = $ ? "px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5" : "px-2";
                    w[0] !== ed ? (a = (0, l.a)("flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0", ed), w[0] = ed, w[1] = a) : a = w[1];
                    let ec = a;
                    if (w[2] !== D || w[3] !== $ || w[4] !== es || w[5] !== K || w[6] !== ee || w[7] !== ea || w[8] !== k) {
                        let e;
                        t = (0, l.a)("relative z-0", ("headerless" !== K || D) && "overflow-hidden", !$ && "-mx-2"), w[13] !== ee || w[14] !== ea || w[15] !== k ? (e = e => {
                            ee ? ea.set(T, k, e) : el(e)
                        }, w[13] = ee, w[14] = ea, w[15] = k, w[16] = e) : e = w[16], i = e, s = "headerless" === K || "heading" === K || es || "dropdown" === K, o = (0, l.a)(t, "mt-0.5"), w[2] = D, w[3] = $, w[4] = es, w[5] = K, w[6] = ee, w[7] = ea, w[8] = k, w[9] = t, w[10] = i, w[11] = s, w[12] = o
                    } else t = w[9], i = w[10], s = w[11], o = w[12];
                    w[17] !== S || w[18] !== ec ? (u = (0, n.jsx)("div", {
                        className: ec,
                        children: S
                    }), w[17] = S, w[18] = ec, w[19] = u) : u = w[19], w[20] !== o || w[21] !== u ? (m = (0, n.jsx)("div", {
                        className: o,
                        children: u
                    }), w[20] = o, w[21] = u, w[22] = m) : m = w[22];
                    let eu = m;
                    w[23] !== i ? (p = () => ({
                        collapse: () => i(!1),
                        expand: () => i(!0)
                    }), w[23] = i, w[24] = p) : p = w[24], (0, c.useImperativeHandle)(I, p), w[25] !== j || w[26] !== et || w[27] !== ei || w[28] !== ea || w[29] !== k ? (f = () => {
                        if (!ei) return;
                        if (!j) {
                            "collapsed" === et && ea.set(W, k, "pending");
                            return
                        }
                        if ("pending" !== et) return;
                        let e = window.setTimeout(() => {
                            ea.set(W, k, "collapsed")
                        }, 3e4);
                        return () => window.clearTimeout(e)
                    }, x = [j, et, ei, ea, k], w[25] = j, w[26] = et, w[27] = ei, w[28] = ea, w[29] = k, w[30] = f, w[31] = x) : (f = w[30], x = w[31]), (0, c.useEffect)(f, x), w[32] !== D || w[33] !== S || w[34] !== eu || w[35] !== t || w[36] !== ec || w[37] !== s || w[38] !== eo ? (h = eo ? s && eu : (0, n.jsx)(M.a, {
                        initial: !1,
                        children: s && (0, n.jsx)(F, {
                            className: t,
                            animateContentResize: D,
                            sectionContentClassName: ec,
                            children: S
                        }, "content")
                    }), w[32] = D, w[33] = S, w[34] = eu, w[35] = t, w[36] = ec, w[37] = s, w[38] = eo, w[39] = h) : h = w[39];
                    let em = h;
                    if ("row" === K) {
                        let e, a, t, r, l = null != S;
                        w[40] !== S || w[41] !== es || w[42] !== i || w[43] !== U ? (e = null == S ? U : (0, n.jsx)(_.o, {
                            "aria-expanded": es,
                            className: "select-none",
                            onClick: () => i(!es),
                            children: U
                        }), w[40] = S, w[41] = es, w[42] = i, w[43] = U, w[44] = e) : e = w[44], w[45] !== z || w[46] !== es ? (a = A()(z) ? z({
                            isExpanded: es
                        }) : z, w[45] = z, w[46] = es, w[47] = a) : a = w[47], w[48] !== l || w[49] !== e || w[50] !== a ? (t = (0, n.jsx)("div", {
                            className: "px-5",
                            children: (0, n.jsxs)(_.b, {
                                interactive: l,
                                children: [e, a]
                            })
                        }), w[48] = l, w[49] = e, w[50] = a, w[51] = t) : t = w[51];
                        let s = null == S ? null : em;
                        return w[52] !== t || w[53] !== s ? (r = (0, n.jsxs)("section", {
                            className: "flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4",
                            children: [t, s]
                        }), w[52] = t, w[53] = s, w[54] = r) : r = w[54], r
                    }
                    if ("card" === K || "plain" === K) {
                        let e, a, t, r, i, s = "card" === K ? "gap-1" : "gap-2";
                        w[55] !== s ? (e = (0, l.a)("flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4", s), w[55] = s, w[56] = e) : e = w[56], w[57] !== z || w[58] !== K || w[59] !== U ? (a = null != U || null != z ? (0, n.jsxs)("header", {
                            className: (0, l.a)("flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row", "card" === K && "px-1"),
                            children: [null != U ? (0, n.jsx)("h3", {
                                className: "truncate",
                                children: U
                            }) : null, A()(z) ? z({
                                isExpanded: !0
                            }) : z]
                        }) : null, w[57] = z, w[58] = K, w[59] = U, w[60] = a) : a = w[60];
                        let o = "card" === K ? "group/summary-card overflow-hidden rounded-2xl border border-default" : "flex min-w-0 flex-col",
                            d = "card" === K ? "card" : void 0;
                        return w[61] !== D || w[62] !== S || w[63] !== eo ? (t = D && !eo ? (0, n.jsx)(F, {
                            className: "overflow-hidden",
                            animateContentResize: !0,
                            collapsible: !1,
                            sectionContentClassName: "",
                            children: S
                        }) : S, w[61] = D, w[62] = S, w[63] = eo, w[64] = t) : t = w[64], w[65] !== o || w[66] !== d || w[67] !== t ? (r = (0, n.jsx)("div", {
                            className: o,
                            "data-variant": d,
                            children: t
                        }), w[65] = o, w[66] = d, w[67] = t, w[68] = r) : r = w[68], w[69] !== e || w[70] !== a || w[71] !== r ? (i = (0, n.jsxs)("section", {
                            className: e,
                            children: [a, r]
                        }), w[69] = e, w[70] = a, w[71] = r, w[72] = i) : i = w[72], i
                    }
                    let ep = "nested" === (void 0 === q ? "section" : q) ? "pt-3" : "pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4",
                        ef = (void 0 === B || B) && "after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden",
                        ex = $ ? "after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4" : "after:inset-x-0",
                        eh = "accordion" !== K || es ? "last:pb-0" : "last:pb-0.5";
                    return w[73] !== ep || w[74] !== ef || w[75] !== ex || w[76] !== eh ? (y = (0, l.a)("relative z-0 flex flex-col", ep, ef, ex, eh), w[73] = ep, w[74] = ef, w[75] = ex, w[76] = eh, w[77] = y) : y = w[77], w[78] !== ei || w[79] !== ea || w[80] !== k ? (v = ei ? () => {
                        ea.set(W, k, "canceled")
                    } : void 0, w[78] = ei, w[79] = ea, w[80] = k, w[81] = v) : v = w[81], w[82] !== z || w[83] !== Q || w[84] !== $ || w[85] !== es || w[86] !== K || w[87] !== X || w[88] !== P || w[89] !== i || w[90] !== eo || w[91] !== J || w[92] !== U || w[93] !== G ? (g = "headerless" !== K ? (0, n.jsx)(V, {
                        inset: $,
                        surface: J,
                        after: A()(z) ? z({
                            isExpanded: es
                        }) : z,
                        sectionOptions: P,
                        mode: K,
                        isExpanded: es,
                        onChange: X,
                        onToggle: () => {
                            "dropdown" !== K && i(!es)
                        },
                        shouldUseReducedMotion: eo,
                        titleSuffix: G,
                        collapsedSummary: Q,
                        children: U
                    }) : null, w[82] = z, w[83] = Q, w[84] = $, w[85] = es, w[86] = K, w[87] = X, w[88] = P, w[89] = i, w[90] = eo, w[91] = J, w[92] = U, w[93] = G, w[94] = g) : g = w[94], w[95] !== em || w[96] !== y || w[97] !== v || w[98] !== g ? (b = (0, n.jsxs)("section", {
                        role: "presentation",
                        className: y,
                        onClick: v,
                        children: [g, em]
                    }), w[95] = em, w[96] = y, w[97] = v, w[98] = g, w[99] = b) : b = w[99], b
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
                            children: (0, n.jsx)(X, {
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
                        u[21] !== C || u[22] !== p || u[23] !== x || u[24] !== b || u[25] !== w || u[26] !== j || u[27] !== a || u[28] !== t ? (e = (0, n.jsx)(U.a, {
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
                SourceRow: X,
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
                        children: (0, n.jsx)(Q, {})
                    }), d[10] = l) : l = d[10], d[11] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, n.jsx)(_.k, {
                        children: (0, n.jsx)(Z.a, {
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
            },
            ee = (0, c.createContext)({
                fullWidth: !1,
                isVisible: !0,
                isAnimating: !1,
                placement: "floating"
            });

        function ea(e) {
            let a, t = (0, r.c)(2);
            t[0] !== e ? (a = void 0 === e ? {} : e, t[0] = e, t[1] = a) : a = t[1];
            let {
                afterAnimation: n
            } = a, {
                isVisible: l,
                isAnimating: i
            } = (0, c.useContext)(ee);
            return l && (!(void 0 !== n && n) || !i)
        }
    }),
    KW: (function(e, a, t) {
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
    Pnw: (function(e, a, t) {
        var n = t("Xnl"),
            r = t("Qc"),
            l = t("tSE"),
            i = t("giV"),
            s = t("pZM");
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