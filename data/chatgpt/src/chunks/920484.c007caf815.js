export const __rspack_esm_ids = [920484];
export const __webpack_modules__ = {
    FwTO: (function(e, t) {
        t.a = {
            PageTitlebarOverlay: "PageTitlebarOverlay-DXltD8",
            pageTitlebarOverlay: "PageTitlebarOverlay-DXltD8",
            NativeTitlebarTools: "NativeTitlebarTools-ZS9TUE",
            nativeTitlebarTools: "NativeTitlebarTools-ZS9TUE",
            NativeTitlebarSurface: "NativeTitlebarSurface-e9bAYr",
            nativeTitlebarSurface: "NativeTitlebarSurface-e9bAYr",
            PageContent: "PageContent-kBHDbu",
            pageContent: "PageContent-kBHDbu",
            PageDocument: "PageDocument-xcjcX8",
            pageDocument: "PageDocument-xcjcX8",
            PageSnapshotCover: "PageSnapshotCover-C_r466",
            pageSnapshotCover: "PageSnapshotCover-C_r466",
            PageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            pageReadingWidthMeasure: "PageReadingWidthMeasure-ssFuf9",
            PageDocumentGrid: "PageDocumentGrid-dPPMDP",
            pageDocumentGrid: "PageDocumentGrid-dPPMDP",
            PageDocumentEnd: "PageDocumentEnd-x1pPbt",
            pageDocumentEnd: "PageDocumentEnd-x1pPbt",
            PageDocumentTheme: "PageDocumentTheme-LGlBUd",
            pageDocumentTheme: "PageDocumentTheme-LGlBUd",
            PageImageLift: "PageImageLift-FIiTnL",
            pageImageLift: "PageImageLift-FIiTnL",
            PageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            pageImageLiftCrop: "PageImageLiftCrop-oM_1oS",
            PageCommentMentions: "PageCommentMentions-hNyDwq",
            pageCommentMentions: "PageCommentMentions-hNyDwq",
            PageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            pageDocumentCanvas: "PageDocumentCanvas-qNJLpk",
            PagePreview: "PagePreview-AZACCm",
            pagePreview: "PagePreview-AZACCm",
            PageThumbnail: "PageThumbnail-xJOX0t",
            pageThumbnail: "PageThumbnail-xJOX0t",
            PageTemplateThumbnail: "PageTemplateThumbnail-vNCuLD",
            pageTemplateThumbnail: "PageTemplateThumbnail-vNCuLD",
            PageTitle: "PageTitle-zNq5aq",
            pageTitle: "PageTitle-zNq5aq",
            "page-image-caret-blink": "page-image-caret-blink-sCb03h",
            pageImageCaretBlink: "page-image-caret-blink-sCb03h",
            PrintRoot: "PrintRoot-o2LDio",
            printRoot: "PrintRoot-o2LDio",
            PrintDocument: "PrintDocument-hzBPk2",
            printDocument: "PrintDocument-hzBPk2"
        }
    }),
    Rvvh: (function(e, t, n) {
        var a = n("NoA4");
        n.d(t, {}, {
            a: function(e) {
                return a.a.widget(e, e => e.dom.ownerDocument.createElement("span"), {
                    marks: [],
                    side: -1,
                    inlineMentionEndBoundary: !0
                })
            }
        })
    }),
    mOHw: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e, t) {
                return e.nodeAt(t)?.marks.filter(e => "link" !== e.type.name) ?? []
            }
        })
    }),
    XWfR: (function(e, t, n) {
        var a = n("j4Oi");
        n.d(t, {}, {
            a: async function(e, t) {
                let n = e === a.k.MARKDOWN ? t : `${e}\0${t}`;
                return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n))), e => e.toString(16).padStart(2, "0")).join("")
            }
        })
    }),
    xaCE: (function(e, t, n) {
        var a = n("j4Oi"),
            r = n("oNJZ"),
            l = n("tINb"),
            o = n("hunc");

        function i(e, t, n) {
            let a = e[t];
            return a?.node.isLeaf ? a.from + a.node.nodeSize : t === e.length - 1 ? n : e[t + 1]?.from
        }

        function s(e, t) {
            let n = e.nodeAt(t),
                a = t + 1;
            for (; null != n && !n.isTextblock && 1 === n.childCount;) n = n.firstChild, a += 1;
            return n?.isTextblock && 0 === n.content.size ? a : null
        }
        n.d(t, {}, {
            a: function(e, t, n, d) {
                let u, c, p, f, g = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                    h = arguments.length > 5 ? arguments[5] : void 0,
                    m = h?.editorDocument === e && h.document === t && h.markdown === n ? h : void 0,
                    b = (0, a.gc)(t),
                    y = m?.ids ?? (0, a.Xb)(b).map(e => e.id);
                if (0 === y.length) return 1 !== e.childCount || null == s(e, 0) ? null : {
                    document: t,
                    kind: "empty-document",
                    position: r.createRelativePositionFromTypeIndex(b.order, g < 0 ? 0 : b.order.length, g)
                };
                if (e.childCount === y.length) {
                    if (d < 0 || d > e.content.size) return null;
                    let t = e.resolve(d),
                        n = 0 === t.depth && t.index(0) > 0 && (g < 0 || d === e.content.size);
                    u = t.index(0) - !!n;
                    let a = e.child(u),
                        r = t.depth > 0 ? t.before(1) : d - (n ? a.nodeSize : 0);
                    c = {
                        from: r,
                        node: a
                    }, p = r + a.nodeSize, f = y[u]
                } else {
                    let t = m?.getAnchors() ?? (0, l.k)(e, n, y.length);
                    if (t.length !== y.length) return null;
                    f = y[u = t.findIndex((n, a) => {
                        if (null == n || d < n.from) return !1;
                        let r = i(t, a, e.content.size);
                        return d < (r ?? n.from + n.node.nodeSize) || d === r && (g < 0 || a === t.length - 1)
                    })], c = t[u], p = i(t, u, e.content.size)
                }
                let v = null == f ? null : (0, a.S)(b, f);
                if (null == f || null == v || null == c) return null;
                let w = (0, o.b)(e, t, n, f, {
                        anchor: c,
                        index: u,
                        end: p
                    }),
                    S = w?.toMarkdown(d, g) ?? null;
                return (null == S && 0 === v.text.length && d === s(e, c.from) && (S = 0), null != S) ? {
                    blockId: f,
                    document: t,
                    kind: "text",
                    position: r.createRelativePositionFromTypeIndex(v.text, S, g)
                } : d !== c.from && d !== p ? null : {
                    blockId: f,
                    document: t,
                    kind: "block-edge",
                    position: r.createRelativePositionFromTypeIndex(v.text, 0),
                    side: d === c.from ? "before" : "after"
                }
            },
            b: function(e, t, n) {
                let r, o = (0, a.Xb)((0, a.gc)(t)).map(e => e.id);
                return {
                    editorDocument: e,
                    document: t,
                    markdown: n,
                    ids: o,
                    getAnchors: () => (null == r && (r = (0, l.k)(e, n, o.length)), r)
                }
            },
            c: function(e, t, n, d) {
                let u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a => (0, o.b)(e, t, n, a),
                    c = (0, a.gc)(t),
                    p = r.createAbsolutePositionFromRelativePosition(d.position, t, !1);
                if ("text" === d.kind) {
                    let t = (0, a.S)(c, d.blockId);
                    if (null == t || p?.type !== t.text) return null;
                    let n = u(d.blockId);
                    return n?.toEditor(p.index, d.position.assoc < 0 ? -1 : 1) ?? (0 === t.text.length && null != n ? s(e, n.from) : null)
                }
                let f = (0, a.Xb)(c),
                    g = f.map(e => e.id);
                if ("empty-document" === d.kind) {
                    if (p?.type !== c.order) return null;
                    if (0 === g.length) return s(e, 0);
                    let t = (0, l.k)(e, n, g.length);
                    if (t.length !== g.length) return null;
                    let a = f.findIndex(e => e.rawIndex >= p.index);
                    return a < 0 ? e.content.size : t[a]?.from ?? null
                }
                let h = g.indexOf(d.blockId),
                    m = h < 0 ? null : (0, a.S)(c, d.blockId);
                if (null == m || p?.type !== m.text) return null;
                let b = (0, l.k)(e, n, g.length);
                return b.length !== g.length ? null : "before" === d.side ? b[h]?.from ?? null : i(b, h, e.content.size) ?? null
            }
        })
    }),
    gr2j: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a);

        function l(e) {
            return "right" === e.attrs.align ? "end" : "center" === e.attrs.align ? "center" : "start"
        }

        function o(e) {
            let t = (e.attrs.dilSections ?? []).map(() => 0),
                n = e.children,
                a = n.find(e => null != e.attrs.dilSection)?.attrs.dilSection ?? 0;
            for (let e of n) t[a = e.attrs.dilSection ?? a] = (t[a] ?? 0) + 1;
            return t
        }
        n.d(t, {}, {
            a: l,
            b: o,
            c: function(e, t, n, a) {
                let i, s = e.attrs.dilSections ?? [],
                    d = o(e),
                    u = e.children;

                function c(e, t, n) {
                    return null != t && r()(n, t.props) ? t : a(e, n)
                }
                let p = e.attrs.dilTemplate,
                    f = {
                        ...p?.props
                    };
                e.attrs.pagePinHeaderRow !== !!f.stickyHeader && (f.stickyHeader = e.attrs.pagePinHeaderRow), n.set(t, {
                    template: c("table", p, f)
                });
                let g = 0,
                    h = t + 1,
                    m = "";
                for (let [t, a] of d.entries()) {
                    if (!a) {
                        let {
                            before: e,
                            template: n
                        } = s[t];
                        m += e + n.open + n.close;
                        continue
                    }
                    let r = g,
                        o = r + a,
                        d = s[t],
                        p = (t, n, a) => !!e.attrs.pageHeaderRow && 0 === n || !!e.attrs.pageHeaderColumn && 0 === a || !0 === t.attrs.dilHeader,
                        f = (e, t) => e.children.every((e, n) => p(e, t, n));
                    for (; g < o; g++) {
                        let e = u[g],
                            t = e.attrs.dilTemplate,
                            a = {
                                ...t?.props
                            };
                        !0 !== a.header || f(e, g) || delete a.header, i = {
                            template: c("table-row", t, a),
                            before: g === r ? m + (d?.before ?? "") + (d?.template.open ?? "") : "",
                            after: g === o - 1 ? d?.template.close : void 0
                        }, m = "", n.set(h, i);
                        let s = !!a.header;
                        e.forEach((e, t, a) => {
                            let r = e.attrs.dilTemplate,
                                o = {
                                    ...r?.props
                                },
                                i = p(e, g, a);
                            i || !0 !== o.header || delete o.header, i && !s && (o.header = !0), e.attrs.colspan !== (o.colSpan ?? 1) && (o.colSpan = e.attrs.colspan), e.attrs.rowspan !== (o.rowSpan ?? 1) && (o.rowSpan = e.attrs.rowspan);
                            let d = l(e);
                            d !== (o.align ?? "start") && (o.align = d);
                            let u = e.attrs.pageColumnWidth;
                            "number" == typeof u ? o.width = u : "number" == typeof o.width && delete o.width;
                            let f = c("table-cell", r, o),
                                m = r?.emptySource,
                                b = null != m && 1 === e.childCount && e.firstChild?.type.name === "paragraph" && !e.firstChild.content.size;
                            n.set(h + t + 1, {
                                emptyCell: b,
                                template: b && r === f ? {
                                    ...f,
                                    open: m,
                                    close: ""
                                } : f
                            })
                        }), h += e.nodeSize
                    }
                }
                null != i && (i.after = (i.after ?? "") + m)
            }
        })
    }),
    mn9l: (function(e, t, n) {
        var a = n("bDc1"),
            r = n("CHJa"),
            l = n("sQAU"),
            o = n("gr2j");

        function i(e, t, n) {
            e.toggleAttribute("data-d-break-long-token", !t && /\S{25,}/u.test(n))
        }

        function s(e, t) {
            let n = null != e.attrs.dilTemplate,
                r = e.attrs.tag ?? e.attrs.dilTemplate?.tag;
            if (!r?.startsWith("table")) return null;
            let l = n ? e.attrs.dilTemplate.props : e.attrs.presentationProps ?? e.attrs.props,
                s = n ? 0 === e.attrs.rowIndex : l.header,
                d = s ? "th" : "td";
            "table" === r ? d = n ? "table" : "div" : "table-section" === r ? d = l.header ? "thead" : "tbody" : "table-row" === r && (d = "tr");
            let u = t.createElement(d);
            u.dataset.dComponent = r;
            let c = u;
            if ("table" === r) {
                let r = t.createElement("div");
                c = n ? u : t.createElement("table"), u.className = a.c.TableFrame, r.className = a.c.TableViewport, r.dataset.dTableViewport = "", c.className = a.c.Table, u.dataset.dColumnSizing = l.columnSizing ?? "auto", c.dataset.dColumnSizing = l.columnSizing ?? "auto", !1 !== l.dividers && (c.dataset.dDividers = ""), !0 === (n ? e.attrs.pagePinHeaderRow : l.stickyHeader) && (c.dataset.dStickyHeader = ""), c.style.tableLayout = "equal" === l.columnSizing ? "fixed" : "auto", n ? (u.dataset.pageDilNativeTable = "", c = t.createElement("tbody"), u.append(c)) : (r.append(c), u.append(r))
            } else if ("table-row" === r) u.className = a.c.Row;
            else if ("table-cell" === r) {
                let t = n ? (0, o.a)(e) : l.align;
                null != t && (u.dataset.dAlign = t), u.dataset.dValign = l.vAlign ?? "start";
                let r = l.width;
                n && (null != e.attrs.pageColumnWidth || "number" == typeof r) && (r = e.attrs.pageColumnWidth), null != r && (u.dataset.dHasWidth = "", u.style.width = "number" == typeof r ? `${r}px` : r), s && u.setAttribute("scope", "col"), i(u, !!s, e.textContent), null != l.colSpan && u.setAttribute("colspan", String(l.colSpan)), null != l.rowSpan && u.setAttribute("rowspan", String(l.rowSpan)), Object.assign(u.style, (0, a.b)(l.padding))
            } else null != l.rowDivider && (u.dataset.dRowDivider = "", u.style.setProperty("--table-section-row-divider", String((0, a.a)(l.theme || "light", l.rowDivider).border)));
            return {
                dom: u,
                contentDOM: c,
                update: t => t.type === e.type && !!t.sameMarkup(e) && ("table-cell" === r && i(u, !!s, t.textContent), !0),
                ignoreMutation: e => "attributes" === e.type && e.target === u
            }
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                function a(e) {
                    let a = n();
                    if (null == a || a > t.state.doc.content.size) return "cell";
                    let r = t.state.doc.resolve(a);
                    return "row" !== r.parent.type.spec.tableRole ? "cell" : (0, l.b)(r.node(-1), r.index(-1), r.index(), e)
                }
                let o = a(e),
                    s = e.type.create({
                        ...e.attrs,
                        rowIndex: +("cell" === o),
                        dilTemplate: e.attrs.dilTemplate ?? {
                            tag: "table-cell",
                            props: {}
                        }
                    }, e.content, e.marks),
                    d = r.b.renderSpec(t.dom.ownerDocument, e.type.spec.toDOM?.(s) ?? ["cell" === o ? "td" : "th", 0]);
                return "rowheader" === o && d.dom instanceof HTMLTableCellElement && (d.dom.scope = "row"), {
                    ...d,
                    update: t => !!e.sameMarkup(t) && a(t) === o && (d.dom instanceof HTMLTableCellElement && i(d.dom, "cell" !== o, t.textContent), !0)
                }
            },
            b: s,
            c: function(e, t) {
                if (!["table", "table_row", "table_cell"].includes(e)) return null;
                let n = {
                    ...t,
                    attrs: {
                        ...t.attrs,
                        dilTemplate: {
                            default: null
                        },
                        before: {
                            default: ""
                        },
                        ..."table" === e ? {
                            dilSections: {
                                default: null
                            }
                        } : {},
                        ..."table_row" === e ? {
                            dilSection: {
                                default: null
                            }
                        } : {},
                        ..."table_cell" === e ? {
                            dilHeader: {
                                default: !1
                            }
                        } : {}
                    }
                };
                "table" === e && (n.collectPageDilTableSources = o.c);
                let a = t.toDOM;
                return null != a && (n.toDOM = e => {
                    if (null != e.attrs.dilTemplate) {
                        let t = s(e, document);
                        if (t?.contentDOM != null) return {
                            dom: t.dom,
                            contentDOM: t.contentDOM
                        }
                    }
                    return a(e)
                }), n
            }
        })
    }),
    AYlW: (function(e, t, n) {
        n.d(t, {}, {
            a: function(e) {
                let t = e?.ownerDocument.defaultView;
                for (let n = e; null != n; n = n.parentElement)
                    if (/auto|scroll/u.test(t?.getComputedStyle(n).overflowY ?? "") && n.scrollHeight > n.clientHeight) return n;
                return null
            },
            b: function(e, t, n) {
                let a = e?.getBoundingClientRect(),
                    r = a?.top ?? 0,
                    l = a?.bottom ?? t.innerHeight,
                    o = 0;
                return n < r + 32 ? o = -Math.min(16, (r + 32 - n) / 2) : n > l - 32 && (o = Math.min(16, (n - l + 32) / 2)), 0 !== o && (null != e ? e.scrollTop += o : t.scrollBy(0, o)), o
            }
        })
    }),
    L0Gp: (function(e, t, n) {
        var a = n("rX7T"),
            r = n("v2Zq"),
            l = n("CHJa"),
            o = n("f6KK"),
            i = n("wHKS"),
            s = n("BdKm");
        class d extends i.a {
            idPrefix;
            constructor(e) {
                super(), this.idPrefix = e
            }
            plugin = new o.d({
                props: {
                    handleKeyDown: (0, r.a)({
                        "Mod-Enter": (e, t, n) => null != n && this.toggleSelectedCheckboxes(n)
                    }),
                    handleDOMEvents: {
                        click: (e, t) => t.target instanceof Element && null != t.target.closest(".task-list-item-checkbox")
                    },
                    nodeViews: {
                        task_list_item: (e, t, n) => {
                            let r = e.type.spec.toDOM;
                            if (null == r) throw Error("Checklist DOM is missing");
                            let {
                                dom: o,
                                contentDOM: i
                            } = l.b.renderSpec(t.dom.ownerDocument, r(e)), s = o.querySelector(".task-list-item-checkbox");
                            if (null == s || null == i) throw Error("Checklist checkbox or content is missing");
                            s.replaceChildren();
                            let d = `${this.idPrefix}-${this.nextId++}`;
                            i.id = `${d}-content`;
                            let u = e.attrs.dilCheckboxTemplate?.props;
                            null != u && o.setAttribute("data-dil-line-through", String(!0 === u.lineThrough));
                            let c = {
                                id: d,
                                checked: !0 === e.attrs.checked,
                                round: null != u && "square" !== u.shape,
                                container: s,
                                contentId: i.id,
                                focusEditor: () => {
                                    !t.isDestroyed && t.editable && t.focus()
                                },
                                setChecked: r => {
                                    if (t.isDestroyed || !t.editable) return;
                                    let l = n(),
                                        o = null == l ? null : t.state.doc.nodeAt(l);
                                    null != l && o?.type === e.type && o.attrs.checked !== r && t.dispatch((0, a.e)(t.state.tr.setNodeAttribute(l, "checked", r), {
                                        preserveSelection: !0
                                    }))
                                }
                            };
                            return this.entries.set(d, c), this.changed = !0, {
                                dom: o,
                                contentDOM: i,
                                update: t => {
                                    if (t.type !== e.type || t.attrs.dilCheckboxTemplate?.props.shape !== u?.shape || t.attrs.dilCheckboxTemplate?.props.lineThrough !== u?.lineThrough || null == t.attrs.dilCheckboxTemplate != (null == u)) return !1;
                                    let n = !0 === t.attrs.checked;
                                    return n !== c.checked && (c = {
                                        ...c,
                                        checked: n
                                    }, this.entries.set(d, c), this.changed = !0, o.setAttribute("data-checked", String(n))), !0
                                },
                                ignoreMutation: e => s.contains(e.target) || "attributes" === e.type && e.target === o,
                                stopEvent: e => e.target instanceof Node && s.contains(e.target),
                                destroy: () => {
                                    this.changed = this.entries.delete(d) || this.changed
                                }
                            }
                        }
                    }
                },
                view: () => (this.publish(), {
                    update: () => this.publish(),
                    destroy: () => {
                        queueMicrotask(() => this.publish())
                    }
                })
            });
            toggleSelectedCheckboxes(e) {
                if (!e.editable) return !1;
                let {
                    doc: t
                } = e.state, n = new Map, a = e => {
                    for (let t = e.depth; t > 0; t -= 1) {
                        let a = e.node(t);
                        if ("task_list_item" === a.type.name) return void n.set(e.before(t), a)
                    }
                };
                for (let {
                        $from: n,
                        $to: r
                    }
                    of(0, s.c)(e).ranges) {
                    if (n.pos === r.pos) {
                        a(n);
                        continue
                    }
                    t.nodesBetween(n.pos, r.pos, (e, l) => {
                        if (!e.isTextblock) return !0;
                        let o = l + 1,
                            i = o + e.content.size;
                        return o < r.pos && i >= n.pos && (i !== n.pos || 0 === e.content.size) && a(t.resolve(o)), !1
                    })
                }
                if (0 === n.size) return !1;
                let r = [...n.values()].some(e => !0 !== e.attrs.checked),
                    l = e.state.tr;
                for (let [e, t] of n) t.attrs.checked !== r && l.setNodeMarkup(e, void 0, {
                    ...t.attrs,
                    checked: r
                });
                return e.dispatch(l), !0
            }
        }
        n.d(t, {}, {
            a: d
        })
    }),
    aWEZ: (function(e, t, n) {
        n.d(t, {}, {
            a: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e.getBoundingClientRect(),
                    t = new Map;
                return function(n) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e(n),
                        r = n.ownerDocument.defaultView;
                    if (null == r) return null;
                    let l = Math.max(0, a.left),
                        o = Math.min(r.innerWidth, a.right),
                        i = Math.max(0, a.top),
                        s = Math.min(r.innerHeight, a.bottom);
                    if (o <= l || s <= i) return null;
                    for (let a = n.parentElement; null != a; a = a.parentElement) {
                        let n = t.get(a);
                        if (null == n) {
                            let l = r.getComputedStyle(a),
                                o = /auto|scroll|hidden|clip/u.test(l.overflowX),
                                i = /auto|scroll|hidden|clip/u.test(l.overflowY);
                            if (!o && !i) {
                                t.set(a, !1);
                                continue
                            }
                            let s = e(a),
                                d = a.offsetWidth,
                                u = d > 0 ? s.width / d : 1;
                            n = {
                                x: o,
                                y: i,
                                rect: DOMRect.fromRect({
                                    x: s.left + a.clientLeft * u,
                                    y: s.top + a.clientTop * u,
                                    width: a.clientWidth * u,
                                    height: a.clientHeight * u
                                })
                            }, t.set(a, n)
                        }!1 !== n && (n.x && (l = Math.max(l, n.rect.left), o = Math.min(o, n.rect.right)), n.y && (i = Math.max(i, n.rect.top), s = Math.min(s, n.rect.bottom)))
                    }
                    return o > l && s > i ? DOMRect.fromRect({
                        x: l,
                        y: i,
                        width: o - l,
                        height: s - i
                    }) : null
                }
            },
            b: function(e, t) {
                let n = e.defaultView;
                if (null == n) return;
                let a = "getBoundingClientRect" in t ? t.getBoundingClientRect() : {
                        x: t.clientX,
                        y: t.clientY,
                        width: 1,
                        height: 1
                    },
                    r = n.visualViewport,
                    l = r?.width ?? n.innerWidth,
                    o = r?.height ?? n.innerHeight,
                    {
                        x: i,
                        y: s
                    } = a;
                if (null != r && (0 !== r.offsetLeft || 0 !== r.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    i -= t.left + r.pageLeft, s -= t.top + r.pageTop
                }
                let {
                    width: d,
                    height: u
                } = a;
                if (!(d <= 0) && !(u <= 0) && !(i >= l) && !(s >= o) && !(i + d <= 0) && !(s + u <= 0)) return {
                    x: i,
                    y: s,
                    width: d,
                    height: u,
                    viewportWidth: l
                }
            },
            c: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e.getBoundingClientRect(),
                    a = e.matches("table") ? e.querySelector("tr") : e.querySelector(':scope > hr, :scope > [data-page-agent-instructions="toggle"], :scope > [data-composer-code-block-toolbar] > [data-page-code-block-controls]');
                if (null != a) return n(a);
                let r = "p, h1, h2, h3, h4, h5, h6, pre",
                    l = e.matches(r) ? e : e.querySelector(r) ?? e,
                    o = n(l),
                    i = l.ownerDocument.defaultView?.getComputedStyle(l),
                    s = Number.parseFloat(i?.lineHeight ?? "") * t;
                return DOMRect.fromRect({
                    x: o.left,
                    y: o.top + Number.parseFloat(i?.paddingTop ?? "0") * t,
                    width: o.width,
                    height: Number.isFinite(s) ? Math.min(o.height, s) : o.height
                })
            },
            d: function(e, t) {
                let n = e.defaultView;
                if (null == n) return;
                let a = n.visualViewport,
                    {
                        x: r,
                        y: l
                    } = t;
                if (null != a && (0 !== a.offsetLeft || 0 !== a.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    r -= t.left + a.pageLeft, l -= t.top + a.pageTop
                }
                return {
                    x: r,
                    y: l,
                    width: t.width,
                    height: t.height,
                    viewportWidth: a?.width ?? n.innerWidth
                }
            },
            e: function(e, t) {
                let n = e.closest("[data-page-attribution-position]");
                if (null == n) return !1;
                let a = e.getBoundingClientRect(),
                    r = n.getBoundingClientRect(),
                    l = t.getBoundingClientRect();
                if (!a.width || !a.height || a.left < Math.max(r.left, l.left) || a.right > Math.min(r.right, l.right) || a.top < l.top || a.bottom > l.bottom) return !1;
                for (let e of ["previousElementSibling", "nextElementSibling"])
                    for (let t = n[e]; null != t; t = t[e]) {
                        if (t.hasAttribute("hidden")) continue;
                        let n = t.querySelector("[data-page-attribution-name]")?.getBoundingClientRect();
                        if (n?.height) {
                            if ("nextElementSibling" === e ? n.top >= a.bottom + 2 : n.bottom + 2 <= a.top) break;
                            if (a.left < n.right && a.right > n.left && a.top < n.bottom + 2 && a.bottom + 2 > n.top) return !1
                        }
                    }
                return !0
            },
            f: function(e, t, n, a, r) {
                let l = t.parentElement?.querySelector(":scope > [data-page-reading-column]"),
                    o = t.closest("[data-page-document-scroll]");
                if (null == l || null == o) return void e.removeAttribute("data-page-attribution-fits");
                let i = l.getBoundingClientRect(),
                    s = a ? i.right : i.left;
                for (let e of t.querySelectorAll('[data-page-block-layout="full-width"] > [data-page-block-viewport] > :first-child')) {
                    let t = e.getBoundingClientRect();
                    t.width > 0 && (s = a ? Math.max(s, t.right) : Math.min(s, t.left))
                }
                let d = o.getBoundingClientRect().left + o.clientLeft * r,
                    u = d + o.clientWidth * r,
                    c = (a ? u - s : s - d) / r;
                e.style.setProperty("--page-attribution-room", `${c}px`), e.style.insetInlineEnd = `${(a?s-n.left:n.right-s)/r}px`;
                let p = e.querySelector("[data-page-attribution-sizer]"),
                    f = e.clientWidth,
                    g = String(f > 0 && (p?.offsetWidth ?? 0) <= f && e.scrollWidth <= f);
                e.dataset.pageAttributionFits !== g && (e.dataset.pageAttributionFits = g)
            },
            g: function(e, t, n, a) {
                e.hidden = null == t, null != t && Object.assign(e.style, {
                    left: `${(t.left-n.left)/a}px`,
                    top: `${(t.top-n.top)/a}px`,
                    width: `${t.width/a}px`,
                    height: `${t.height/a}px`
                })
            }
        })
    }),
    aQux: (function(e, t, n) {
        n.d(t, {
            a: () => y,
            b: () => v,
            c: () => M,
            d: () => w,
            e: () => S
        });
        var a = n("Kh9O"),
            r = n("H3Qi"),
            l = n("CHJa"),
            o = n("f6KK"),
            i = n("HLFh"),
            s = n("Amdx"),
            d = n("tINb"),
            u = n("CJGP"),
            c = n("Cn5C"),
            p = n("d8ZM"),
            f = n("FY8H");

        function g(e) {
            return e.children.map(e => e.children.map(e => JSON.stringify(e.content.toJSON())))
        }

        function h(e) {
            return JSON.stringify(e)
        }

        function m(e) {
            return e[0].map((t, n) => h(e.map(e => e[n])))
        }

        function b(e, t, n, a) {
            let r = Math.min(n, a),
                l = Math.max(n, a),
                o = new Set(e.slice(r, l + 1));
            if (!e.some((e, n) => e !== t[n] && (o.has(e) || o.has(t[n])))) return !1;
            let i = e.slice().sort(),
                s = t.slice().sort();
            return i.every((e, t) => e === s[t])
        }
        let y = "spacePageEditorPresentationMapping",
            v = "spacePageEditorProjection";

        function w(e) {
            let t = e.getMeta(y);
            return t instanceof i.e ? t : e.mapping
        }

        function S(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, a.a)({
                    isRichTableCellSupportEnabled: !e.state.schema.nodes.table_cell.inlineContent
                }),
                r = arguments.length > 3 ? arguments[3] : void 0,
                v = arguments.length > 4 ? arguments[4] : void 0,
                w = (a, i, s) => {
                    s?.(a.doc);
                    let w = e.state.tr;
                    if (null == v || v.fromStoredUnits)(0, u.a)(w, a.doc, void 0, !1);
                    else {
                        let e = v.text.project(w, a.doc, v.document, n, v.preservedUnits);
                        v.markNonlocal(w, e)
                    }
                    if (w.setMeta(y, a.mapping), w.docChanged) {
                        w.doc !== a.doc && s?.(w.doc);
                        let t = null != v && !v.fromStoredUnits && null == v.preservedUnits && function(e, t, n) {
                            let a = (0, c.h)(e),
                                r = null == a && n?.$anchor.doc === e.doc ? n : e.selection;
                            if (!(r instanceof o.h)) return !1;
                            let {
                                $anchor: l,
                                $head: i
                            } = r, s = (0, p.b)(l), u = (0, p.b)(i);
                            if (null == s || null == u) return !1;
                            let y = s - 2,
                                v = u - 2;
                            if (l.before(y) !== i.before(v)) return !1;
                            let w = l.node(y);
                            if (null != w.attrs.dilTemplate) return !1;
                            let S = a ?? {
                                    anchor: {
                                        rowIndex: l.index(y),
                                        columnIndex: l.index(y + 1)
                                    },
                                    head: {
                                        rowIndex: i.index(v),
                                        columnIndex: i.index(v + 1)
                                    }
                                },
                                k = t.mapping.mapResult(l.start(y), 1);
                            if (k.deletedAcross) return !1;
                            let M = t.doc.nodeAt(k.pos - 1);
                            if (null == M || M === w || M.type !== w.type || M.childCount !== w.childCount || M.firstChild?.childCount !== w.firstChild?.childCount) return !1;
                            let x = (0, d.b)(w),
                                C = (0, d.b)(M);
                            if (! function(e, t) {
                                    let n = 0;
                                    for (let [a, r] of e.children.entries()) {
                                        let e = t.child(a);
                                        if (r.childCount !== e.childCount) return !0;
                                        for (let [t, a] of r.children.entries())
                                            if (!a.content.eq(e.child(t).content) && 2 === (n += 1)) return !0
                                    }
                                    return !1
                                }(x, C)) return !1;
                            let T = g(x),
                                E = g(C);
                            if (!(b(T.map(h), E.map(h), S.anchor.rowIndex, S.head.rowIndex) || T.concat(E).every(e => e.length === T[0].length) && b(m(T), m(E), S.anchor.columnIndex, S.head.columnIndex))) return !1;
                            if (null == a) {
                                let e = t.doc.resolve(k.pos - 1);
                                return !!(0, f.b)(e) && (t.setSelection(new f.a(e)), !0)
                            }
                            let A = t.doc.resolve(k.pos),
                                P = S.head.rowIndex,
                                D = M.child(P),
                                L = A.posAtIndex(P) + 1,
                                I = t.doc.resolve(L),
                                z = Math.min(S.head.columnIndex, D.childCount - 1),
                                R = z < 0 ? I : t.doc.resolve(I.posAtIndex(z) + 1);
                            return t.setSelection(o.h.near(R)).setMeta(c.q, {
                                isStructureMode: !1,
                                isEditMode: !1,
                                structureSelectionAnchor: null,
                                structureSelectionHead: null
                            }), !0
                        }(e.state, w, v.previousSelection);
                        M(e, w, t ? void 0 : r)
                    }
                    let S = e.state.doc;
                    if (S !== w.doc && s?.(S), null == i)(0, d.w)(S, t, n);
                    else if (S.childCount === t.length)
                        for (let e of i)(0, d.w)(S.type.createChecked(S.attrs, l.c.from(S.child(e))), [t[e]], n);
                    return (0, d.u)(S, t, n), w.docChanged
                };
            if (v?.fromStoredUnits) return k(e, t, n, w);
            let S = (0, d.l)(e.state.doc, n),
                x = Math.min(S.length, t.length),
                C = 0;
            for (; C < x && (0, s.b)(S[C], t[C]);) C += 1;
            if (C === S.length && C === t.length) return w(e.state.tr, []);
            let T = 0;
            for (; T < x - C && (0, s.b)(S[S.length - T - 1], t[t.length - T - 1]);) T += 1;
            return !!(function(e, t, n, a, r, o) {
                let s;
                if (a.length !== t.length) return !1;
                let u = 0,
                    c = 0,
                    p = 0;
                if (e.state.doc.childCount === a.length) u = r.start, p = 1, s = e.state.doc.child(r.start), c = e.state.doc.resolve(0).posAtIndex(r.start);
                else
                    for (let t = 0; t < e.state.doc.childCount && (s = e.state.doc.child(t), p = (0, d.l)(e.state.doc.type.createChecked(e.state.doc.attrs, l.c.from(s)), n).length, !(r.start < u + p)); t += 1) u += p, c += s.nodeSize, s = void 0;
                if (null == s || 0 === p || a.length - r.suffix > u + p) return !1;
                let f = (0, d.h)(e.state.doc, t.slice(u, u + p), n);
                if (1 !== f.childCount) return !1;
                let g = f.child(0);
                if (g.type !== s.type) return !1;
                let h = (0, d.b)(s),
                    m = (0, d.b)(g),
                    b = !h.sameMarkup(m),
                    y = h.content.findDiffStart(m.content),
                    v = h.content.findDiffEnd(m.content),
                    w = e.state.tr;
                if (null != y && null != v) {
                    if (v.a < y || v.b < y) {
                        let e = v.b - v.a;
                        v.a = y + Math.max(0, -e), v.b = y + Math.max(0, e)
                    }
                    w.step(new i.i(c + 1 + y, c + 1 + v.a, g.slice(y, v.b)))
                } else if (!b) return !1;
                b && w.setNodeMarkup(c, void 0, g.attrs, g.marks);
                let S = w.doc.nodeAt(c);
                return null != S && (0, d.u)(S, t.slice(u, u + p), n), o(w, 1 === p ? [u] : []), !0
            }(e, t, n, S, {
                start: C,
                suffix: T
            }, w) || function(e, t, n, a, r) {
                let o = e.state.doc;
                if (o.childCount !== a.length || o.childCount !== t.length) return !1;
                let u = [],
                    c = 0;
                for (let e = 0; e < a.length; e += 1) {
                    let r = o.child(e),
                        l = c + r.nodeSize;
                    if (!(0, s.b)(a[e], t[e])) {
                        if (/^(?:list|ordered_list)$/u.test(r.type.name)) return !1;
                        let a = (0, d.h)(o, [t[e]], n);
                        if (1 !== a.childCount || /^(?:list|ordered_list)$/u.test(a.child(0).type.name)) return !1;
                        u.push({
                            from: c,
                            index: e,
                            node: a.child(0),
                            to: l
                        })
                    }
                    c = l
                }
                if (u.length < 2) return !1;
                let p = u[0],
                    f = u[u.length - 1],
                    g = o.content.content.slice(p.index, f.index + 1);
                for (let e of u) g[e.index - p.index] = e.node;
                return r(e.state.tr.step(new i.i(p.from, f.to, new l.j(l.c.fromArray(g), 0, 0))), u.map(e => {
                    let {
                        index: t
                    } = e;
                    return t
                })), !0
            }(e, t, n, S, w) || function(e, t, n, a, r, o) {
                let {
                    start: i,
                    suffix: s
                } = r, u = e.state.doc;
                if (u.childCount !== a.length || 0 === t.length) return !1;
                let c = t.slice(i, t.length - s),
                    p = 0 === c.length ? l.c.empty : (0, d.h)(u, c, n).content;
                if (p.childCount !== c.length) return !1;
                for (let e = Math.max(0, i - 1); e <= Math.min(u.childCount - 1, a.length - s); e += 1)
                    if (/^(?:list|ordered_list)$/u.test(u.child(e).type.name)) return !1;
                for (let e = 0; e < p.childCount; e += 1)
                    if (/^(?:list|ordered_list)$/u.test(p.child(e).type.name)) return !1;
                let f = u.resolve(0);
                return o(e.state.tr.replaceWith(f.posAtIndex(i), f.posAtIndex(a.length - s), p), c.map((e, t) => i + t)), !0
            }(e, t, n, S, {
                start: C,
                suffix: T
            }, w)) || k(e, t, n, w)
        }

        function k(e, t, n, a) {
            let r = (0, d.h)(e.state.doc, t, n),
                l = e => {
                    (0, d.t)(e, t, n, r)
                },
                o = (0, d.b)(e.state.doc).content,
                s = (0, d.b)(r).content;
            if (o.eq(s)) return a(e.state.tr, [], l);
            let u = o.findDiffStart(s),
                c = o.findDiffEnd(s),
                p = e.state.tr;
            if (null != u && null != c) {
                if (c.a < u || c.b < u) {
                    let e = c.b - c.a;
                    c.a = u + Math.max(0, -e), c.b = u + Math.max(0, e)
                }
                p = p.step(new i.i(u, c.a, r.slice(u, c.b)))
            } else p = p.replaceWith(0, e.state.doc.content.size, r.content);
            return a(p, void 0, l), !0
        }

        function M(e, t, n) {
            let a = n?.(t);
            null == a || a.eq(t.selection) || t.setSelection(a);
            let l = null == a ? null : e.state.storedMarks;
            null == a && t.setStoredMarks(null), e.dispatch(t.setMeta(v, !0).setMeta(r.a, !0).setMeta("addToHistory", !1)), null != l && e.state.selection instanceof o.h && e.state.selection.empty && e.dispatch(e.state.tr.setStoredMarks(e.state.selection.$from.parent.type.allowedMarks(l)))
        }
    }),
    XvT2: (function(e, t, n) {
        var a = n("fXhT"),
            r = n("K9a9"),
            l = n("jOAm");
        let o = new WeakMap,
            i = new WeakMap,
            s = 0;
        n.d(t, {}, {
            a: function(e) {
                let t = o.get(e);
                if (t) return t;
                let n = {
                        media: [],
                        imageById: new Map,
                        groups: [],
                        membership: new Map
                    },
                    d = [],
                    u = "normal";

                function c() {
                    if (d.length >= 2) {
                        let e = {
                            id: d[0],
                            members: d,
                            layout: u
                        };
                        for (let t of (n.groups.push(e), d)) n.membership.set(t, e)
                    }
                    d = [], u = "normal"
                }
                let p = new Map;
                return e.forEach((e, t) => {
                    let o = (0, l.b)(e),
                        f = o ? e.firstChild : e,
                        g = o && f?.attrs.src != null;
                    if (g || c(), !f || !o && e.type.name !== r.a.video && e.type.name !== r.a.file) return;
                    let h = i.get(f) ?? `media-${++s}`;
                    i.set(f, h);
                    let m = p.get(h) ?? 0,
                        b = m ? `${h}-${m}` : h;
                    p.set(h, m + 1);
                    let y = {
                        id: b,
                        from: t,
                        node: e,
                        media: f
                    };
                    if (n.media.push(y), g) {
                        n.imageById.set(b, y), d.push(b);
                        let t = (0, a.a)(e.attrs.pageLayout);
                        ("normal" === u || "full-width" === t) && (u = t)
                    }
                }), c(), o.set(e, n), n
            }
        })
    }),
    lY4e: (function(e, t, n) {
        var a = n("lrLr"),
            r = n("AYlW"),
            l = n("vEJV");
        let o = {
            duration: 270,
            easing: "cubic-bezier(.23,.57,.29,1)",
            fill: "backwards"
        };

        function i(e) {
            return e?.querySelector("[data-page-image-frame]") ?? e?.querySelector("[data-page-media-container]") ?? null
        }

        function s(e, t) {
            return t ? e.dom.querySelector(`[data-gallery-item="${CSS.escape(t)}"]`) : null
        }

        function d(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                a = (e.x - t.x + (e.width - t.width) / 2) / t.width,
                r = (e.y - t.y + (e.height - t.height) / 2) / t.height,
                l = `translate(${100*a}%,${100*r}%)`;
            return n ? `${l} scale(${e.width/t.width},${e.height/t.height})` : l
        }
        let u = new WeakSet;
        n.d(t, {}, {
            a: function(e, t, n, u) {
                let c = e.dom.ownerDocument,
                    p = c.defaultView;
                if (!p || !(0, l.b)(e) || (0, a.a)(c)) return () => {};

                function f() {
                    let t = s(e, n),
                        a = t?.dataset.galleryMember;
                    return a ? e.dom.querySelector(`[data-gallery-group="${CSS.escape(a)}"]`) : i(t)
                }
                let g = e => e.top + e.height / 2,
                    h = f()?.getBoundingClientRect(),
                    m = new Map;
                for (let n of e.dom.querySelectorAll(":scope > [data-page-block-row]")) {
                    if (t && n.dataset.galleryItem === t) continue;
                    let e = i(n) ?? n.querySelector("[data-page-block-viewport]");
                    if (!e) continue;
                    let a = e.getBoundingClientRect();
                    a.height && a.bottom >= 0 && a.top <= p.innerHeight && m.set(e, {
                        id: n.dataset.galleryItem,
                        box: a
                    })
                }
                return () => {
                    if (!(0, l.b)(e)) return;
                    let n = f()?.getBoundingClientRect(),
                        a = (0, r.a)(e.dom.parentElement);
                    if (a && h?.height && n?.height && h.bottom > 0 && h.top < p.innerHeight) {
                        let r = g(n) - g(h);
                        if (void 0 !== u) {
                            let n = i(s(e, t))?.getBoundingClientRect();
                            n && (u < n.top - r || u > n.bottom - r) && (r = n.top - u)
                        }
                        Math.abs(r) > .5 && a.scrollTo({
                            top: a.scrollTop + r / (a.currentCSSZoom || 1),
                            behavior: "instant"
                        })
                    }
                    let c = [];
                    for (let [t, {
                            id: n,
                            box: a
                        }] of m) {
                        let r = t.isConnected && (!n || t.closest("[data-gallery-item]")?.dataset.galleryItem === n) ? t : i(s(e, n)),
                            l = r?.getBoundingClientRect();
                        r && l?.width && l.height && (.5 > Math.max(Math.abs(l.left - a.left), Math.abs(l.top - a.top), Math.abs(l.width - a.width), Math.abs(l.height - a.height)) || c.push({
                            surface: r,
                            transform: d(a, l, !!n)
                        }))
                    }
                    if (0 === c.length) return;
                    let b = c.map(e => {
                            let {
                                surface: t,
                                transform: n
                            } = e;
                            return t.animate([{
                                transform: n,
                                transformOrigin: "center"
                            }, {
                                transform: "none",
                                transformOrigin: "center"
                            }], o)
                        }),
                        y = (0, l.c)(e, e => {
                            e || b.forEach(e => e.cancel())
                        });
                    Promise.allSettled(b.map(e => e.finished)).then(y)
                }
            },
            b: s,
            c: o,
            d: u,
            e: d,
            f: i
        })
    }),
    oM6E: (function(e, t, n) {
        var a = n("SZCv"),
            r = n.n(a),
            l = n("Q840"),
            o = n("rpnz"),
            i = n("Wj4L"),
            s = n("e1xH"),
            d = n("gxa4"),
            u = n("EVcm"),
            c = n("tv8P"),
            p = n("OWtl");
        let f = (0, l.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t, a = new Map;
                if (!n(s.pagesEnabled$) || null == n(c.spaceAccountId$)) return a;
                let {
                    data: r,
                    isError: l,
                    isFetching: o
                } = n(d.a, e);
                for (let e of r?.items ?? []) a.set(e.page_id, "title" in e ? {
                    status: "resolved",
                    page: e
                } : {
                    status: "private" === e.reason ? "private" : "unavailable"
                });
                for (let t of e.targetPageIds) {
                    let e = a.get(t);
                    if (e?.status === "unavailable" || e?.status === "private") continue;
                    let i = n(c.spacePageCreation$, t);
                    if (null != i) {
                        let e = null == i.serverPageId ? i.metadata : n(c.spacePageMetadata$, t) ?? i.unlistedMetadata;
                        if (null != e) {
                            a.set(t, e.access.can_read && null == e.deleted_at ? {
                                status: "resolved",
                                page: {
                                    page_id: t,
                                    title: null != i.titleUpdate && (null == i.titleUpdate.sequence || e.projection_through_sequence < i.titleUpdate.sequence) ? i.titleUpdate.title : e.title ?? ""
                                }
                            } : {
                                status: null != e.deleted_at ? "unavailable" : "private"
                            });
                            continue
                        }
                    }
                    null == e && a.set(t, {
                        status: l || null != r && !o ? "error" : "loading"
                    })
                }
                for (let [e, t] of a) {
                    if ("resolved" !== t.status) continue;
                    let r = n(c.loadedSpacePageMetadata$, e);
                    null != r && r.access.can_read && null == r.deleted_at && "page" !== (0, i.d)(r) && "unsupported" !== (0, i.d)(r) && a.set(e, {
                        ...t,
                        nativeTitle: r.title ?? void 0
                    })
                }
                return a
            }, {
                isEqual: r()
            }),
            g = (0, l.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t, a = n(c.spaceAccountId$);
                return null == a ? [] : n(o.e, a).flatMap(t => {
                    let {
                        localPageId: n,
                        parentLink: a
                    } = t;
                    return a?.parentPageId === e && "saving" !== a.status ? [{
                        pageId: n,
                        parentLink: a
                    }] : []
                })
            }, {
                isEqual: r()
            });
        n.d(t, {}, {
            a: function(e, t, n, a) {
                return {
                    status: "resolved",
                    page: {
                        page_id: t.id,
                        title: e.get(u.a, t) || n,
                        symbol: a
                    }
                }
            },
            b: f,
            c: g
        })
    }),
    wHKS: (function(e, t, n) {
        n.d(t, {}, {
            a: class {
                entries = new Map;
                nextId = 0;
                changed = !1;
                listeners = new Set;
                snapshot = [];
                getSnapshot = () => this.snapshot;
                subscribe = e => (this.listeners.add(e), () => this.listeners.delete(e));
                publish() {
                    this.changed && (this.changed = !1, this.snapshot = [...this.entries.values()], this.listeners.forEach(e => e()))
                }
            }
        })
    }),
    oin1: (function(e, t, n) {
        var a = n("HLFh");
        n.d(t, {}, {
            a: function(e) {
                let t = [];
                for (let [n, r] of e.steps.entries()) {
                    let l = e.mapping.slice(n + 1),
                        o = (n, a, r, o) => {
                            let i = Math.max(0, l.map(r, -1) - 1),
                                s = Math.min(e.doc.content.size, l.map(o, 1) + 1),
                                d = t.at(-1);
                            null != d && i <= d.to && s >= d.from ? (d.from = Math.min(d.from, i), d.to = Math.max(d.to, s)) : t.push({
                                from: i,
                                to: s
                            })
                        };
                    r instanceof a.c ? o(r.pos, r.pos + 1, r.pos, r.pos + 1) : r instanceof a.a || r instanceof a.f ? o(r.from, r.to, r.from, r.to) : e.mapping.maps[n].forEach(o)
                }
                return t
            }
        })
    }),
    RM4r: (function(e, t, n) {
        n.d(t, {
            a: () => v,
            b: () => S,
            c: () => M,
            d: () => w,
            e: () => y,
            f: () => x,
            g: () => k
        });
        var a = n("f6KK"),
            r = n("NoA4"),
            l = n("bf6R"),
            o = n("Pkr3"),
            i = n("gywZ"),
            s = n("sGTh"),
            d = n("j4Oi"),
            u = n("oNJZ"),
            c = n("ASxG"),
            p = n("Ukaa"),
            f = n("tINb");
        let g = c.object({
            collapsed: c.boolean()
        });

        function h(e, t, n) {
            let a = new Map,
                r = (0, d.Tb)(e);
            if (null == r) return a;
            let l = (0, d.Wb)(r),
                o = (0, f.k)(n, t, l.length),
                i = (0, f.l)(n, t);
            if (o.length !== l.length) return a;
            for (let [e, t] of o.entries()) {
                if (null == t) continue;
                let {
                    from: n,
                    node: s
                } = t;
                if ("heading" !== s.type.name || o[e - 1]?.from === n || o[e + 1]?.from === n) continue;
                let u = (0, d.S)(r, l[e]);
                if (u?.kind !== "markdown" || i[e]?.markdown !== u.text.toJSON()) continue;
                let c = u.metadata?.get("heading"),
                    p = null == c ? null : g.safeParse(c);
                a.set(n, {
                    id: u.id,
                    collapsed: p?.success === !0 && p.data.collapsed
                })
            }
            return a
        }
        let m = new WeakMap,
            b = new a.e("pageHeadingDisclosure");

        function y(e) {
            let t = e.getMeta(b);
            return t?.toggle != null
        }

        function v(e, t) {
            let n = e => null == t ? new Map : h(t.getDocument(), t.markdown, e),
                i = (t, n) => n ? e.formatMessage({
                    id: "codex.space.page.heading.collapse",
                    defaultMessage: "Collapse {heading}"
                }, {
                    heading: t.textContent
                }) : e.formatMessage({
                    id: "codex.space.page.heading.expand",
                    defaultMessage: "Expand {heading}"
                }, {
                    heading: t.textContent
                }),
                c = (e, t) => {
                    let n = m.get(e);
                    if (null != n && M(t) !== M(e.state))
                        for (let e of n) e();
                    if (t.doc === e.state.doc) return;
                    let a = b.getState(t),
                        r = b.getState(e.state);
                    r?.sections.forEach((t, n) => {
                        if (t.node === a?.sections[n]?.node) return;
                        let l = e.nodeDOM(t.from);
                        if (!(l instanceof HTMLElement)) return;
                        let o = l.querySelector("[data-page-heading-disclosure]");
                        null != o && o.setAttribute("aria-label", i(t.node, !r.collapsed.has(t.from)))
                    })
                },
                f = (e, n, s, c, p) => {
                    let f = [];
                    for (let e of n) {
                        if (e.contentFrom === e.to) continue;
                        let n = !s.has(e.from);
                        f.push(r.a.widget(e.contentFrom - 1, (r, s) => {
                            let c = r.dom.ownerDocument.createElement("button");
                            return c.type = "button", c.className = "cursor-interaction rounded-lg text-tertiary select-none enabled:hover:bg-secondary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", c.dataset.pageHeadingDisclosure = "", c.setAttribute("aria-label", i(e.node, n)), c.setAttribute("aria-expanded", String(n)), c.append(function(e, t, n) {
                                let a = e.createDocumentFragment();
                                for (let r of [16, 20]) {
                                    let l = e.createElement("span");
                                    l.className = 16 === r ? o.a.CompactSource : o.a.LeadingSource, l.setAttribute("aria-hidden", "true"), l.append(t[r].createElement(e, n)), a.append(l)
                                }
                                return a
                            }(c.ownerDocument, {
                                16: l._b,
                                20: l.$b
                            }, n ? void 0 : "-rotate-90 rtl:rotate-90")), c.addEventListener("click", () => {
                                let e = s();
                                if (null == e || r.isDestroyed) return;
                                let l = c === c.ownerDocument.activeElement,
                                    o = r.state.doc.resolve(e).before(),
                                    i = b.getState(r.state)?.sections.find(e => e.from === o);
                                if (null == i) return;
                                let p = r.state.tr.setMeta(b, {
                                    toggle: o
                                });
                                if (r.state.selection.to >= i.contentFrom && r.state.selection.from < i.to && p.setSelection(a.h.create(p.doc, i.contentFrom - 1)), r.dispatch(p), r.editable && null != t && function(e, t, n, a) {
                                        let r = !1;
                                        return e.mutateDocument(l => {
                                            let o = h(l, e.markdown, t).get(n);
                                            if (null == o) return;
                                            let i = (0, d.Tb)(l),
                                                s = null == i ? void 0 : (0, d.S)(i, o.id);
                                            if (null == s) return;
                                            if (r = !0, !a) return void s.metadata?.delete("heading");
                                            let c = s.metadata ?? new u.Map;
                                            null == s.metadata && s.block.set("metadata", c), c.set("heading", {
                                                collapsed: !0
                                            })
                                        }) && r
                                    }(t, r.state.doc, o, n) && r.dispatch(r.state.tr.setMeta(b, {
                                        refresh: !0,
                                        saved: o
                                    })), l) {
                                    let e = r.nodeDOM(o);
                                    e instanceof HTMLElement && e.querySelector("[data-page-heading-disclosure]")?.focus()
                                }
                            }), c
                        }, {
                            side: 1,
                            key: `${p.get(e.from)?.id??""}-${n}`,
                            stopEvent: () => !0,
                            ignoreSelection: !0
                        }))
                    }
                    if (null == c) return r.b.create(e, f);
                    let g = 0,
                        m = 0;
                    return e.forEach((e, t) => {
                        for (; g < c.length && c[g].contentFrom <= t;) m = Math.max(m, c[g++].to);
                        t < m && f.push(r.a.node(t, t + e.nodeSize, {
                            "data-page-section-hidden": "",
                            "aria-hidden": "true"
                        }))
                    }), r.b.create(e, f)
                };
            return new a.d({
                key: b,
                state: {
                    init: (e, t) => {
                        let a = n(t.doc),
                            r = C(t.doc),
                            l = new Set([...a].filter(e => {
                                let [, t] = e;
                                return t.collapsed
                            }).map(e => {
                                let [t] = e;
                                return t
                            })),
                            o = l.size ? r.filter(e => l.has(e.from)) : null;
                        return {
                            collapsed: l,
                            hiddenSections: o,
                            overrides: new Map,
                            defaults: a,
                            decorations: f(t.doc, r, l, o, a),
                            sections: r,
                            headingsChanged: !1
                        }
                    },
                    apply: (e, t) => {
                        let a = e.getMeta(b);
                        if (!e.docChanged && null == a && (!e.selectionSet || 0 === t.collapsed.size || !t.sections.some(n => t.collapsed.has(n.from) && e.selection.to >= n.contentFrom && e.selection.from < n.to))) return t;
                        let r = (0, s.a)(e, e => "heading" !== e.type.name),
                            l = t.sections;
                        e.docChanged && (l = r ? t.sections.map(t => ({
                            ...t,
                            from: e.mapping.map(t.from, 1),
                            contentFrom: e.mapping.map(t.contentFrom, -1),
                            to: e.mapping.map(t.to, -1)
                        })) : C(e.doc));
                        let o = r || (0, s.a)(e),
                            i = !a?.refresh && (t.headingsChanged || l.length !== t.sections.length || l.some((e, n) => {
                                let a = t.sections[n];
                                return e.node !== a.node && (!o || !t.defaults.has(a.from))
                            })),
                            d = a?.refresh ? n(e.doc) : new Map;
                        if (!a?.refresh)
                            for (let [n, a] of t.defaults) {
                                let t = e.mapping.mapResult(n, 1);
                                t.deleted || d.set(t.pos, a)
                            }
                        let u = new Map;
                        for (let [n, a] of t.overrides)
                            if ("string" == typeof n) u.set(n, a);
                            else {
                                let t = e.mapping.mapResult(n, 1);
                                t.deleted || u.set(d.get(t.pos)?.id ?? t.pos, a)
                            } let c = new Set,
                            p = null,
                            g = new Set;
                        for (let n of l) {
                            let r = d.get(n.from),
                                l = r?.id ?? n.from;
                            g.add(l), a?.saved === n.from && u.delete(l);
                            let o = u.get(l) ?? r?.collapsed ?? !1;
                            a?.toggle === n.from && (o = !t.collapsed.has(n.from), u.set(l, o)), o && (a?.reveal != null && a.reveal >= n.contentFrom && a.reveal < n.to || (e.selectionSet || e.docChanged || a?.refresh) && e.selection.to >= n.contentFrom && e.selection.from < n.to) && (o = !1, u.set(l, !1)), o && (c.add(n.from), null == p && (p = []), p.push(n))
                        }
                        for (let e of u.keys()) !g.has(e) && (a?.refresh || "number" == typeof e) && u.delete(e);
                        return !e.docChanged && !a?.refresh && c.size === t.collapsed.size && [...c].every(e => t.collapsed.has(e)) ? {
                            ...t,
                            defaults: d,
                            overrides: u,
                            headingsChanged: i
                        } : {
                            collapsed: c,
                            hiddenSections: p,
                            defaults: d,
                            overrides: u,
                            decorations: r && !a?.refresh && c.size === t.collapsed.size && [...t.collapsed].every(t => c.has(e.mapping.map(t, 1))) ? t.decorations.map(e.mapping, e.doc) : f(e.doc, l, c, p, d),
                            sections: l,
                            headingsChanged: i
                        }
                    }
                },
                view: e => {
                    let n;
                    if (null == t) return {
                        update: c
                    };
                    let a = t.getDocument(),
                        r = !0,
                        l = !1,
                        o = !1,
                        i = e => {
                            r = r || function(e, t) {
                                let n = (0, d.Tb)(e);
                                if (null == n) return !1;
                                let a = new Map;
                                for (let [e, r] of t.changed) {
                                    if (e === n.order) return !0;
                                    if (e instanceof u.Map) {
                                        if (e === n.blocksById) return !0;
                                        a.set(e, r)
                                    }
                                }
                                if (0 === a.size) return !1;
                                for (let r of (0, p.b)(e, t)) {
                                    let e = (0, d.S)(n, r);
                                    if (null == e || a.has(e.block)) return !0;
                                    let t = null == e.metadata ? void 0 : a.get(e.metadata);
                                    if (t?.has("heading") || t?.has(d.l)) return !0
                                }
                                return !1
                            }(a, e)
                        },
                        s = () => {
                            a !== t.getDocument() && (a.off("afterTransaction", i), (a = t.getDocument()).on("afterTransaction", i), r = !0, n = void 0), (r || b.getState(e.state)?.headingsChanged) && n !== t.getRevision() && (r = !1, n = t.getRevision(), l || (l = !0, queueMicrotask(() => {
                                l = !1, o || e.isDestroyed || (e.dispatch(e.state.tr.setMeta(b, {
                                    refresh: !0
                                })), e.editable && function(e, t) {
                                    let n = e.getDocument(),
                                        a = (0, d.Tb)(n);
                                    if (null == a) return;
                                    let r = (0, d.Wb)(a).filter(e => (0, d.S)(a, e)?.metadata?.has("heading"));
                                    if (0 === r.length) return;
                                    let l = new Set(Array.from(h(n, e.markdown, t).values(), e => {
                                            let {
                                                id: t
                                            } = e;
                                            return t
                                        })),
                                        o = r.filter(t => {
                                            let n = (0, d.S)(a, t);
                                            return null != n && !l.has(t) && ("markdown" !== n.kind || e.markdown.parse(n.text.toJSON()).firstChild?.type.name !== "heading")
                                        });
                                    o.length > 0 && e.mutateDocument(e => {
                                        let t = (0, d.Tb)(e);
                                        if (null != t)
                                            for (let e of o)(0, d.S)(t, e)?.metadata?.delete("heading")
                                    })
                                }(t, e.state.doc))
                            })))
                        };
                    a.on("afterTransaction", i);
                    let f = t.subscribe(s);
                    return s(), {
                        update: (e, t) => {
                            c(e, t), s()
                        },
                        destroy: () => {
                            o = !0, f(), a.off("afterTransaction", i)
                        }
                    }
                },
                props: {
                    decorations: e => b.getState(e)?.decorations,
                    handleDOMEvents: {
                        click: (e, t) => t.target instanceof Element && null != t.target.closest("[data-page-heading-disclosure]")
                    }
                }
            })
        }
        let w = (e, t, n) => {
            let r = e.selection instanceof a.h ? e.selection.$cursor : null;
            if (!n?.editable || r?.depth !== 1 || r.parent.type !== e.schema.nodes.heading) return !1;
            let l = M(e);
            if (!l?.length) return !1;
            let o = r.before(),
                i = r.parentOffset === r.parent.content.size,
                s = 0 === r.parentOffset,
                d = (i ? l.find(e => e.from === o) : void 0) ?? (s ? l.find(e => e.to === o) : void 0);
            if (null == d) return !1;
            if (t) {
                let n = e.schema.nodes.paragraph.create({
                        sectionBreakLevel: d.level
                    }),
                    r = e.tr.insert(d.to, n);
                r.setSelection(a.h.create(r.doc, d.to + 1)), t(r.scrollIntoView())
            }
            return !0
        };

        function S(e, t) {
            let n = b.getState(e);
            if (n?.collapsed.has(t)) return n.sections.find(e => e.from === t)?.to
        }

        function k(e, t) {
            let n = m.get(e);
            return null == n && (n = new Set, m.set(e, n)), n.add(t), () => {
                n.delete(t) && 0 === n.size && m.delete(e)
            }
        }

        function M(e) {
            return b.getState(e)?.hiddenSections ?? null
        }

        function x(e, t) {
            b.getState(e.state)?.collapsed.size && e.dispatch(e.state.tr.setMeta(b, {
                reveal: t
            }))
        }

        function C(e) {
            let t = [],
                n = [];
            return e.forEach((a, r) => {
                let l = "heading" === a.type.name ? a.attrs.level : (0, i.a)(a)?.node.attrs.sectionBreakLevel;
                if (null == l) return;
                for (; n.length > 0 && n[n.length - 1].level >= l;) {
                    let e = n.pop();
                    null != e && (e.to = r)
                }
                if ("heading" !== a.type.name) return;
                let o = {
                    from: r,
                    contentFrom: r + a.nodeSize,
                    to: e.content.size,
                    level: a.attrs.level,
                    node: a
                };
                t.push(o), n.push(o)
            }), t
        }
    }),
    jOAm: (function(e, t, n) {
        var a = n("j4Oi"),
            r = n("o7rp"),
            l = n("fXhT"),
            o = n("uhrq"),
            i = n("VZGO"),
            s = n("K9a9"),
            d = n("dQ4w");
        let u = ["normal", "full-width"],
            c = new Map([
                ["code_block", {
                    defaultLayout: "normal",
                    options: l.b.options
                }],
                ["table", {
                    defaultLayout: "normal",
                    options: l.b.options
                }],
                [i.a, {
                    defaultLayout: "normal",
                    options: u
                }],
                [s.a.video, {
                    defaultLayout: "normal",
                    options: u
                }],
                [s.a.audio, {
                    defaultLayout: "normal",
                    options: u
                }],
                [s.a.file, {
                    defaultLayout: "normal",
                    options: u
                }],
                [d.a, {
                    defaultLayout: "normal",
                    options: u
                }]
            ]),
            p = r.number().int().min(0).max(a.f).catch(0),
            f = r.number().positive();

        function g(e) {
            return "paragraph" === e.type.name && 1 === e.childCount && e.firstChild?.type.name === i.a
        }
        n.d(t, {}, {
            a: function(e) {
                let t = e.nodeAfter;
                if (t?.type.spec.attrs?.pageLayout == null) return null;
                let n = 0 === e.depth && g(t) ? i.a : t.type.name;
                return c.get(n)?.options ?? null
            },
            b: g,
            c: function(e) {
                let t = e.depth > 0 ? e.node(1).type.name : null;
                return ("list" === t || "ordered_list" === t) && e.parent.type.isInGroup("list_item") && e.index() > 0 && null != e.nodeAfter && g(e.nodeAfter)
            },
            d: function(e, t) {
                if ("hard_break" === e) return {
                    ...t,
                    linebreakReplacement: !0
                };
                let n = t.group?.split(" ").includes("list_item") === !0,
                    a = "table" === e,
                    r = "table_cell" === e,
                    i = "table_row" === e,
                    s = c.get(e)?.defaultLayout ?? "normal";
                if (!r && !i && !t.group?.split(" ").some(e => "block" === e || "list_item" === e)) return t;
                let d = t.toDOM;
                return {
                    ...t,
                    attrs: {
                        ...t.attrs,
                        ...n ? {
                            pageListIndent: {
                                default: 0
                            }
                        } : {},
                        ...a ? {
                            pageHeaderRow: {
                                default: !0
                            },
                            pageHeaderColumn: {
                                default: !1
                            },
                            pagePinHeaderRow: {
                                default: !1
                            },
                            pagePinHeaderColumn: {
                                default: !1
                            },
                            pageTableAutoExpand: {
                                default: !1
                            }
                        } : {},
                        ...r ? {
                            pageColumnWidth: {
                                default: null
                            }
                        } : {},
                        ...i ? {
                            pageRowHeight: {
                                default: null
                            }
                        } : {},
                        ...!r && !i ? {
                            pageLayout: {
                                default: s
                            }
                        } : {},
                        ...t.code ? {
                            pageCodeWrap: {
                                default: !1
                            }
                        } : {}
                    },
                    parseDOM: t.parseDOM?.map(e => "tag" in e ? {
                        ...e,
                        tag: r && "td" === e.tag ? "td, th" : e.tag,
                        getAttrs(o) {
                            let d = null == e.getAttrs ? e.attrs : e.getAttrs(o);
                            return !1 !== d && {
                                ...d,
                                ...n ? {
                                    pageListIndent: p.parse(o.getAttribute("data-page-list-indent"))
                                } : {},
                                ...a ? {
                                    pageHeaderRow: "false" !== o.getAttribute("data-page-header-row"),
                                    pageHeaderColumn: "true" === o.getAttribute("data-page-header-column"),
                                    pagePinHeaderRow: "true" === o.getAttribute("data-page-pin-header-row"),
                                    pagePinHeaderColumn: "true" === o.getAttribute("data-page-pin-header-column"),
                                    pageTableAutoExpand: "true" === o.getAttribute("data-page-table-auto-expand")
                                } : {},
                                ...t.code ? {
                                    pageCodeWrap: "true" === o.getAttribute("data-page-code-wrap")
                                } : {},
                                ...r ? {
                                    pageColumnWidth: f.safeParse(o.getAttribute("data-page-column-width")).data ?? null
                                } : {},
                                ...i ? {
                                    pageRowHeight: f.safeParse(o.getAttribute("data-page-row-height")).data ?? null
                                } : {},
                                ...!r && !i ? {
                                    pageLayout: (0, l.a)(o.getAttribute("data-page-layout") ?? s)
                                } : {}
                            }
                        }
                    } : e),
                    toDOM: null == d ? void 0 : s => {
                        let u = d(s),
                            c = (0, l.a)(s.attrs.pageLayout),
                            p = {
                                ...n && s.attrs.pageListIndent > 0 ? {
                                    "data-page-list-indent": String(s.attrs.pageListIndent)
                                } : {},
                                ...a ? {
                                    "data-page-header-row": String(s.attrs.pageHeaderRow),
                                    "data-page-header-column": String(s.attrs.pageHeaderColumn),
                                    "data-page-pin-header-row": String(s.attrs.pagePinHeaderRow),
                                    "data-page-pin-header-column": String(s.attrs.pagePinHeaderColumn),
                                    ...!0 === s.attrs.pageTableAutoExpand ? {
                                        "data-page-table-auto-expand": "true"
                                    } : {}
                                } : {},
                                ...r && null != s.attrs.pageColumnWidth ? {
                                    "data-page-column-width": s.attrs.pageColumnWidth
                                } : {},
                                ...r && (0, o.b)(s) ? {
                                    "data-page-numeric-cell": ""
                                } : {},
                                ...i && null != s.attrs.pageRowHeight ? {
                                    "data-page-row-height": s.attrs.pageRowHeight,
                                    style: `height: ${s.attrs.pageRowHeight}px;`
                                } : {},
                                ..."normal" === c && "table" !== e ? {} : {
                                    "data-page-layout": c
                                },
                                ...t.code && !0 === s.attrs.pageCodeWrap ? {
                                    "data-page-code-wrap": "true"
                                } : {}
                            };
                        if (!Array.isArray(u)) {
                            if ("dom" in u && null != s.attrs.dilTemplate && (a || i || r))
                                for (let [e, t] of Object.entries(p)) "style" === e && u.dom instanceof HTMLElement ? u.dom.style.cssText += ` ${t}` : u.dom.setAttribute(e, String(t));
                            return u
                        }
                        let [f, g, ...h] = u;
                        return null == g || "object" != typeof g || Array.isArray(g) || "nodeType" in g ? [f, p, ...u.slice(1)] : [f, {
                            ...g,
                            ...p
                        }, ...h]
                    }
                }
            },
            e: function(e, t) {
                return null == e ? "first" : "horizontal_rule" === t || "horizontal_rule" === e ? "section" : "heading" === t ? "heading" === e ? "body" : "heading" : "table" === t || "table" === e ? "section" : "body"
            }
        })
    }),
    YS7P: (function(e, t, n) {
        n.d(t, {
            a: () => P,
            b: () => D,
            c: () => z,
            d: () => I,
            e: () => L,
            f: () => E,
            g: () => R,
            h: () => A,
            i: () => $
        });
        var a = n("bDc1"),
            r = n("nC2v"),
            l = n("rX7T"),
            o = n("f6KK"),
            i = n("HLFh"),
            s = n("NoA4"),
            d = n("fXhT"),
            u = n("tezj"),
            c = n("VS5n"),
            p = n("dQ4w"),
            f = n("XvT2"),
            g = n("on57"),
            h = n("RM4r"),
            m = n("jOAm");

        function b(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1 / 0,
                r = e.reduce((e, t) => e + t, 0),
                l = t - (e.length - 1) * n,
                o = Math.min(l / r, a),
                i = Math.max(0, (l - o * r) / 2);
            return {
                cells: e.map(e => {
                    let t = {
                        x: i,
                        y: 0,
                        width: o * e,
                        height: o
                    };
                    return i += t.width + n, t
                }),
                height: o
            }
        }

        function y(e, t, n, a) {
            let r = e[2 * !!t],
                l = e[+!t],
                o = e[t ? 1 : 2],
                i = (n - a * (1 + r)) / (1 + r * (1 / l + 1 / o)),
                s = i / l + a + i / o,
                d = s * r,
                u = {
                    x: t ? i + a : 0,
                    y: 0,
                    width: d,
                    height: s
                },
                c = t ? 0 : d + a,
                p = {
                    x: c,
                    y: 0,
                    width: i,
                    height: i / l
                },
                f = {
                    x: c,
                    y: p.height + a,
                    width: i,
                    height: i / o
                };
            return {
                cells: t ? [p, f, u] : [u, p, f],
                height: s
            }
        }
        var v = n("fAlF");

        function w(e) {
            let t = e?.querySelector("[data-page-image-frame] img");
            return t?.naturalWidth && t.naturalHeight ? t.naturalWidth / t.naturalHeight : void 0
        }

        function S(e) {
            let t = e?.querySelector("[data-page-image-frame]"),
                [n, a = 1] = (t?.style.aspectRatio ?? "").split("/").map(Number);
            return n > 0 && a > 0 ? n / a : void 0
        }
        var k = n("lY4e");
        let M = e => ["x", "y", "width", "height"].map(t => `--gallery-${t}:var(--${e}-${t})`).join(";");

        function x(e) {
            return (0, g.b)("flexible" === e && "[--gallery-column:reading-start_/_wide-end] [--gallery-end-margin:var(--page-wide-margin)]", "full-width" === e && "[--gallery-column:wide] [--gallery-start-margin:var(--page-wide-margin)] [--gallery-end-margin:var(--page-wide-margin)]")
        }
        var C = n("vEJV");
        let T = new o.e("pageBlockLayout");

        function E(e) {
            return T.getState(e)?.galleries != null
        }

        function A(e, t) {
            e.isDestroyed || E(e.state) === t || (t || e.dom.dispatchEvent(new Event("page-gallery-disabled")), e.dispatch(e.state.tr.setMeta(T, t).setMeta("addToHistory", !1)))
        }

        function P(e) {
            let t = null == e ? void 0 : function() {
                    let e, t, n, a, r, l = (r = new WeakMap, (e, t) => {
                            if (!e) return S(t) ?? w(t);
                            let n = r.get(e);
                            return (n || (n = {
                                authored: function(e) {
                                    let t = (0, v.e)(e.attrs.geometry),
                                        n = e.attrs.src;
                                    if (!t || "string" != typeof n || t.file_id !== (0, c.h)(n)) return;
                                    let a = t.crop;
                                    return t.width * (1 - (a?.left ?? 0) - (a?.right ?? 0)) / (t.height * (1 - (a?.top ?? 0) - (a?.bottom ?? 0)))
                                }(e)
                            }, r.set(e, n)), void 0 !== n.authored) ? n.authored : (n.decoded = w(t) ?? n.decoded, n.decoded || (n.hint = S(t) ?? n.hint), n.decoded ?? n.hint)
                        }),
                        o = new Map,
                        i = new Set;

                    function d(n) {
                        let a = e;
                        if (!a || !n.isConnected) return;
                        let r = t?.membership.get(n.dataset.galleryGroup ?? "");
                        if (!r) return;
                        let o = [...n.querySelectorAll("[data-gallery-slot]")],
                            {
                                imageById: i
                            } = (0, f.a)(a.state.doc);
                        if (n.style.height && a.dom.closest("[data-page-content-dragging]")) return;
                        let s = n.offsetWidth || a.dom.offsetWidth || 736,
                            d = parseFloat(getComputedStyle(n).columnGap),
                            u = r.members.map(e => {
                                let t = i.get(e),
                                    n = t && a.nodeDOM(t.from);
                                return l(t?.media, n instanceof HTMLElement ? n : null)
                            }),
                            c = JSON.stringify([s, d, u]);
                        if (n.dataset.geometry === c) return;
                        n.dataset.geometry = c;
                        let p = function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
                                a = e.map(e => null != e && Number.isFinite(e) && e > 0 ? Math.max(1e-5, Math.min(1e5, e)) : 1.5);
                            if (!a.length || t <= 0 || !Number.isFinite(t)) return {
                                cells: [],
                                height: 0
                            };
                            let r = Math.max(0, Math.min(Number.isFinite(n) ? n : 4, t / 10)),
                                [l, o, i] = a,
                                s = 2 === a.length && t < 576 && Math.min(l, o) >= 1.8 && Math.max(l, o) >= 2.35,
                                d = 3 === a.length && (l >= 2.35 || l >= 1.15 && o < .8 * l && i >= 1.1) && o + i >= 1.5;
                            if (s || d) {
                                let e = b([l], t, r),
                                    n = b(a.slice(1), t, r),
                                    o = e.height + r;
                                return {
                                    cells: [...e.cells, ...n.cells.map(e => ({
                                        ...e,
                                        y: o
                                    }))],
                                    height: o + n.height
                                }
                            }
                            let u = t < 576,
                                c = a.length <= 3 ? .405 : .34,
                                p = Math.min(310, t * (u ? .48 : c)),
                                f = Math.min(.85 * t, 2 * p),
                                g = [],
                                h = [];
                            h[a.length] = 0;
                            for (let e = a.length - 1; e >= 0; e--) {
                                h[e] = 1 / 0;
                                let n = function(t) {
                                    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                                        a = function(e, t) {
                                            return e.cells.reduce((e, n) => {
                                                let a = Math.sqrt(n.width * n.height),
                                                    r = Math.max(0, Math.log(.48 * t / Math.min(n.width, n.height)));
                                                return e + Math.log(a / t) ** 2 + 2 * r ** 2
                                            }, 0)
                                        }(t, p) + h[e + t.cells.length] + n;
                                    a < h[e] - 1e-9 && (g[e] = t, h[e] = a)
                                };
                                for (let l = 1; l <= Math.min(4, a.length - e); l++) {
                                    let o = a.slice(e, e + l),
                                        i = 1 === l && a.length > 1 && o[0] < 2.35,
                                        s = b(o, t, r, f),
                                        d = 2 * s.cells[0].x / t;
                                    n(s, .9 * !!i + d ** 2), 3 === l && (n(y(o, !1, t, r)), n(y(o, !0, t, r)))
                                }
                            }
                            let m = 0,
                                v = [];
                            for (let e = 0; e < a.length;) {
                                let t = g[e];
                                for (let e of t.cells) v.push({
                                    ...e,
                                    y: e.y + m
                                });
                                m += t.height + r, e += t.cells.length
                            }
                            return {
                                cells: v,
                                height: m - r
                            }
                        }(u, s, d);
                        for (let [e, t] of(n.style.height = p.height + "px", p.cells.entries())) {
                            let {
                                x: n,
                                y: l,
                                width: i,
                                height: s
                            } = t;
                            Object.assign(o[e].style, {
                                insetInlineStart: n + "px",
                                top: l + "px",
                                width: i + "px",
                                height: s + "px"
                            });
                            let d = r.members[e];
                            for (let [e, t] of Object.entries({
                                    x: n,
                                    y: l - p.height,
                                    width: i,
                                    height: s
                                })) a.dom.style.setProperty(`--${d}-${e}`, t + "px")
                        }
                    }
                    return {
                        prepare(n) {
                            if (n !== t) {
                                if (!n) {
                                    t = void 0, a = void 0;
                                    return
                                }
                                e && t && !k.d.has(e) && !e.dom.closest("[data-page-content-dragging]") && n.groups.some(e => e.members.some(n => t?.membership.get(n)?.members.length !== e.members.length)) && (a = (0, k.a)(e)), t = n
                            }
                        },
                        decorations(e, t) {
                            let a = [];
                            for (let {
                                    id: r,
                                    from: l,
                                    node: d
                                }
                                of e.media) {
                                let u = e.membership.get(r);
                                if (a.push(s.a.node(l, l + d.nodeSize, {
                                        "data-page-media-item": r,
                                        ...e.imageById.has(r) && {
                                            "data-gallery-item": r
                                        },
                                        ...u && {
                                            "data-gallery-member": u.id,
                                            "data-gallery-layout": u.layout,
                                            class: (0, g.b)("pointer-events-none relative m-0! h-0! min-h-0! p-0! rtl:[--gallery-direction:-1]", x(u.layout)),
                                            style: M(r)
                                        }
                                    }, {
                                        pageGallery: null != u
                                    })), u?.members[0] === r) {
                                    let e, r = t.resolve(l).nodeBefore,
                                        d = (0, m.e)(r?.type.name, "paragraph");
                                    a.push(s.a.widget(l, (t, a) => (e = t.dom, function(e, t, a, r) {
                                        let l = t.dom.ownerDocument,
                                            s = l.createElement("div");
                                        s.className = "grid cursor-default [grid-template-columns:inherit]", s.dataset.pageBlockSpacing = r, s.dataset.pageLayoutSpan = String(e.members.length), s.setAttribute("aria-hidden", "true");
                                        let d = l.createElement("section");
                                        for (let t of (d.className = (0, g.b)("relative isolate [grid-column:var(--gallery-column,reading)] [margin-inline:var(--gallery-start-margin,0px)_var(--gallery-end-margin,0px)] min-w-0 cursor-default gap-1", x(e.layout)), d.dataset.galleryGroup = e.id, d.dataset.galleryLayout = e.layout, e.members)) {
                                            let e = l.createElement("span");
                                            e.className = "pointer-events-none absolute", e.dataset.gallerySlot = t, d.append(e)
                                        }
                                        return s.append(d), o.set(d, {
                                            row: s,
                                            getPos: a
                                        }), i.add(d), n?.observe(d), s
                                    }(u, t, a, d)), {
                                        key: JSON.stringify([u.layout, d, ...u.members]),
                                        side: -1,
                                        ignoreSelection: !0,
                                        stopEvent: () => !0,
                                        destroy: t => {
                                            let a = t instanceof HTMLElement ? t.firstElementChild : null;
                                            if (a instanceof HTMLElement)
                                                for (let t of (n?.unobserve(a), o.delete(a), i.delete(a), u.members))
                                                    for (let n of ["x", "y", "width", "height"]) e?.style.removeProperty(`--${t}-${n}`)
                                        }
                                    }))
                                }
                            }
                            return a
                        },
                        mount(r) {
                            e = r;
                            let l = new AbortController,
                                {
                                    signal: s
                                } = l;
                            for (let e of (n = new ResizeObserver(e => {
                                    for (let {
                                            target: t
                                        }
                                        of e) t instanceof HTMLElement && d(t)
                                }), o.keys())) n.observe(e);
                            let u = (0, h.c)(r.state),
                                c = t,
                                p = () => {
                                    for (let {
                                            row: e,
                                            getPos: t
                                        }
                                        of o.values()) {
                                        let n = t(),
                                            a = null != n && u?.some(e => n >= e.contentFrom && n < e.to) === !0;
                                        e.hidden !== a && (e.hidden = a, e.classList.toggle("grid", !a))
                                    }
                                },
                                f = () => {
                                    for (let e of (p(), o.keys())) d(e);
                                    i.clear()
                                };
                            return r.dom.addEventListener("load", e => {
                                let t = e.target;
                                if (!(t instanceof HTMLImageElement)) return;
                                let n = t.closest("[data-gallery-member]")?.dataset.galleryMember;
                                if (!n) return;
                                let a = r.dom.querySelector(`[data-gallery-group="${CSS.escape(n)}"]`);
                                a && d(a)
                            }, {
                                capture: !0,
                                signal: s
                            }), r.dom.addEventListener("gallery-drag-end", f, {
                                signal: s
                            }), f(), {
                                update(e, n) {
                                    let l = (0, h.c)(r.state),
                                        o = c !== t || l?.length !== u?.length || l?.some((e, t) => e.node !== u?.[t].node);
                                    u = l, c = t, (o || i.size > 0) && p(), (n.doc !== r.state.doc || i.size) && (i.forEach(d), i.clear(), a?.(), a = void 0)
                                },
                                destroy() {
                                    a = void 0, l.abort(), n?.disconnect(), n = void 0, e = void 0
                                }
                            }
                        }
                    }
                }(),
                n = (e, n) => {
                    let r = n ? (0, f.a)(e) : void 0;
                    return {
                        galleries: r,
                        decorations: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.forEach((n, r, l) => {
                                let o = (0, m.e)(e.maybeChild(l - 1)?.type.name, n.type.name);
                                if (n.type.name === u.a && n.descendants((e, n) => {
                                        if ("table" === e.type.spec.tableRole && null != e.attrs.dilTemplate) {
                                            let l = r + n + 1,
                                                o = l + e.nodeSize;
                                            t.push(s.a.node(l, o, {
                                                nodeName: "div",
                                                class: a.c.TableViewport,
                                                "data-d-table-viewport": "",
                                                "data-page-block-viewport": "",
                                                style: "overflow-x: auto"
                                            }), s.a.node(l, o, {
                                                nodeName: "div",
                                                class: a.c.TableFrame,
                                                "data-d-column-sizing": e.attrs.dilTemplate.props.columnSizing ?? "auto",
                                                "data-page-block-type": "table"
                                            }))
                                        }
                                        return !e.isTextblock
                                    }), "paragraph" === n.type.name) {
                                    "body" !== o && t.push(s.a.node(r, r + n.nodeSize, {}, {
                                        pageBlockSpacing: o
                                    }));
                                    return
                                }
                                let i = N(n) ? "normal" : (0, d.a)(n.attrs.pageLayout),
                                    c = (0, m.b)(n);
                                t.push(s.a.node(r, r + n.nodeSize, {
                                    nodeName: "div",
                                    "data-page-block-viewport": "",
                                    class: "table" === n.type.name ? "horizontal-scroll-fade-mask" : void 0,
                                    "data-page-pinned-header-column": "table" === n.type.name && !0 === n.attrs.pageHeaderColumn && !0 === n.attrs.pagePinHeaderColumn ? "" : void 0
                                }), s.a.node(r, r + n.nodeSize, {
                                    nodeName: "div",
                                    "data-page-block-row": "",
                                    "data-page-block-spacing": o,
                                    "data-page-block-type": n.type.name,
                                    "data-page-block-layout": i,
                                    ...c ? {
                                        "data-page-image-block": "true"
                                    } : {}
                                }))
                            }), H(s.b.create(e, t))
                        }(e, r ? t?.decorations(r, e) : void 0)
                    }
                };
            return new o.d({
                key: T,
                view: t && (e => (0, C.a)(e, () => t.mount(e))),
                state: {
                    init: (t, a) => n(a.doc, !0 === e),
                    apply(e, a) {
                        var r;
                        let l = null != a.galleries,
                            o = e.getMeta(T);
                        return t && "boolean" == typeof o && o !== l ? n(e.doc, o) : e.docChanged ? (r = e).steps.every((e, t) => {
                            if (!(e instanceof i.i) || 0 !== e.slice.openStart || 0 !== e.slice.openEnd || !e.slice.content.content.every(e => e.isInline)) return !1;
                            let n = r.docs[t],
                                a = n.resolve(e.from);
                            if (!a.parent.isTextblock || !a.sameParent(n.resolve(e.to))) return !1;
                            let l = a.node(1),
                                o = (r.docs[t + 1] ?? r.doc).resolve(e.from).node(1);
                            return l.sameMarkup(o) && (0, m.b)(l) === (0, m.b)(o) && (!(0, m.b)(l) || l.firstChild === o.firstChild) && N(l) === N(o)
                        }) ? {
                            ...a,
                            decorations: function(e, t) {
                                let n = e.steps[0];
                                if (1 === e.steps.length && n instanceof i.i && e.before.childCount > 1) {
                                    let a = e.before.resolve(n.from);
                                    if (a.index(0) === e.before.childCount - 1) {
                                        let n = t.find(a.start(1));
                                        return H(t.remove(n).add(e.doc, s.b.create(e.before, n).map(e.mapping, e.doc).find()))
                                    }
                                }
                                return H(t.map(e.mapping, e.doc))
                            }(e, a.decorations)
                        } : n(e.doc, l) : a
                    }
                },
                props: {
                    nodeViews: {
                        paragraph(e, t, n, a) {
                            let l, o = t.dom.ownerDocument.createElement("p"),
                                i = n(),
                                s = null != i && 0 === t.state.doc.resolve(i).depth,
                                u = s ? D(t.dom.ownerDocument, e, o) : null,
                                c = o.parentElement,
                                p = (e, a) => {
                                    let i = N(e) ? "normal" : (0, d.a)(e.attrs.pageLayout),
                                        s = (0, m.b)(e);
                                    if ("normal" === i ? o.removeAttribute("data-page-layout") : o.setAttribute("data-page-layout", i), null != u) {
                                        u.dataset.pageBlockSpacing = a.find(e => null != e.spec.pageBlockSpacing)?.spec.pageBlockSpacing ?? "body";
                                        let d = a.some(e => !0 === e.spec.pageGallery);
                                        if (null != c && l !== d) {
                                            for (let e of "[grid-column:var(--gallery-column,reading)]! cursor-default justify-self-start self-start pointer-events-auto m-0! ms-[var(--gallery-start-margin,0px)]! min-w-0 w-(--gallery-width) [translate:calc(var(--gallery-direction,1)*var(--gallery-x))_var(--gallery-y)]".split(" ")) c.classList.toggle(e, d);
                                            o.classList.toggle("mx-0!", d), l = d
                                        }
                                        u.dataset.pageBlockLayout = i, s ? u.dataset.pageImageBlock = "true" : delete u.dataset.pageImageBlock;
                                        let p = r.c.getState(t.state),
                                            f = n();
                                        p?.decorations.find().some(t => t.from === f && t.to === t.from + e.nodeSize) ? o.setAttribute("data-writing-block-empty-placeholder", "function" == typeof p.placeholderText ? p.placeholderText(t.state.selection) : p.placeholderText) : o.removeAttribute("data-writing-block-empty-placeholder")
                                    }
                                };
                            return p(e, a), {
                                dom: u ?? o,
                                contentDOM: o,
                                update: (a, r) => {
                                    let l = n();
                                    return a.type === e.type && null != l && 0 === t.state.doc.resolve(l).depth === s && (p(a, r), !0)
                                }
                            }
                        }
                    },
                    decorations(e) {
                        let n = this.getState(e);
                        t?.prepare(n?.galleries);
                        let a = n?.decorations,
                            {
                                $head: r
                            } = e.selection;
                        if (null == a || 0 === r.depth) return a;
                        let l = [s.a.node(r.before(1), r.after(1), {
                            "data-page-active-block": ""
                        })];
                        for (let e = r.depth; e > 1; e--)
                            if (r.node(e).type.isInGroup("list_item")) {
                                l.push(s.a.node(r.before(e), r.after(e), {
                                    "data-page-active-list-item": ""
                                }));
                                break
                            } return H(a.add(e.doc, l), l.length > 1 ? r.before(1) : void 0)
                    }
                }
            })
        }

        function D(e, t, n) {
            let a = e.createElement("div");
            if (a.dataset.pageBlockRow = "", a.dataset.pageBlockType = t.type.name, a.dataset.pageBlockLayout = N(t) ? "normal" : (0, d.a)(t.attrs.pageLayout), null != n) {
                let t = e.createElement("div");
                t.dataset.pageBlockViewport = "", t.append(n), a.append(t)
            }
            return a
        }

        function L(e) {
            let t = 0 === e.depth ? e.pos : e.before(1),
                n = e.doc.nodeAt(t);
            return n?.type.spec.attrs?.pageLayout == null ? null : {
                from: t,
                node: n
            }
        }

        function I(e, t) {
            return z(e.nodeDOM(t))
        }

        function z(e) {
            if (!(e instanceof HTMLElement)) return null;
            if (!e.hasAttribute("data-page-block-row") || e.hasAttribute("data-page-viewport-placeholder")) return e;
            let t = e.firstElementChild?.firstElementChild;
            return t instanceof HTMLElement ? t : null
        }

        function R(e, t, n) {
            if (e.isDestroyed || !e.editable || t.from > e.state.doc.content.size || e.state.doc.nodeAt(t.from) !== t.node) return !1;
            let a = e.state.tr;
            return $(a, t.from, n), !a.docChanged || (e.dispatch((0, l.e)(a, {
                preserveSelection: !0
            })), e.focus(), !0)
        }

        function $(e, t, n) {
            let {
                preserveTableAutoExpand: a = !1
            } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, r = e.doc.nodeAt(t);
            null == r || (!a && "table" === r.type.name && r.attrs.pageTableAutoExpand && e.setNodeAttribute(t, "pageTableAutoExpand", !1), (0, d.a)(r.attrs.pageLayout) !== n && e.setNodeAttribute(t, "pageLayout", n), r.type.name === p.a && null != r.attrs.geometry && e.setNodeAttribute(t, "geometry", null), ("list" === r.type.name || "ordered_list" === r.type.name) && r.descendants((a, r) => {
                a.type.spec.attrs?.pageLayout != null && (0, d.a)(a.attrs.pageLayout) !== n && e.setNodeAttribute(t + 1 + r, "pageLayout", n)
            }))
        }

        function H(e, t) {
            return e === s.b.empty ? e : Object.assign(e, {
                forChild: (n, a) => n === t || a.type.name === u.a ? s.b.prototype.forChild.call(e, n, a) : s.b.empty
            })
        }

        function N(e) {
            if ("paragraph" !== e.type.name) return !1;
            let t = e.firstChild?.marks.find(e => "link" === e.type.name)?.attrs.href;
            return "string" == typeof t && null != (0, c.e)(t) && e.content.content.every(e => e.isText && e.marks.some(e => "link" === e.type.name && e.attrs.href === t))
        }
    }),
    km7q: (function(e, t, n) {
        n.d(t, {
            a: () => L,
            b: () => T,
            c: () => z,
            d: () => H,
            e: () => A,
            f: () => E,
            g: () => P,
            h: () => I,
            i: () => C,
            j: () => R,
            k: () => D
        });
        var a = n("CHJa"),
            r = n("f6KK"),
            l = n("NoA4"),
            o = n("Zqzr"),
            i = n("G4E3"),
            s = n("zd8w"),
            d = n("bf6R"),
            u = n("HRo6"),
            c = n("Rvvh"),
            p = n("mOHw"),
            f = n("ABep"),
            g = n("QosV"),
            h = n("Q840"),
            m = n("EVcm"),
            b = n("CNaP"),
            y = n("tKel");

        function v(e) {
            let t, n, a = (0, g.c)(5);
            a[0] !== e.href ? (t = (0, i.d)(e.href), a[0] = e.href, a[1] = t) : t = a[1];
            let r = t,
                l = (0, h.x)(m.a, r),
                o = (0, h.x)(y.f, r?.kind === "page" && null != r.blockId ? r : null),
                s = l || o || e.title;
            return a[2] !== e || a[3] !== s ? (n = (0, f.jsx)(b.a, {
                ...e,
                title: s
            }), a[2] = e, a[3] = s, a[4] = n) : n = a[4], n
        }
        var w = n("aQux"),
            S = n("Rtkh"),
            k = n("kTTh"),
            M = n("YCVA"),
            x = n("oin1");
        let C = new r.e("spacePageLinks");

        function T(e, t) {
            let {
                currentPageId: n,
                getLink: f,
                getPastedLinkStatus: g,
                getCachedPageTitle: h,
                getPendingLinks: m,
                loadingPageLabel: y,
                privatePageLabel: T,
                onOpen: E,
                unavailablePageLabel: A,
                untitledPageLabel: P
            } = e, D = (e, a) => {
                let r = [];
                for (let {
                        authoredLabel: m,
                        blockId: w,
                        from: S,
                        isMention: x,
                        pageId: C,
                        to: D,
                        remove: L
                    }
                    of e) {
                    let e = a.doc.slice(S, D),
                        I = f(C, w),
                        z = g?.(a, S, D),
                        R = "private" === z || "error" === z;
                    R && ("unresolved" === I.status || "loading" === I.status || "error" === I.status) && (I = {
                        status: z
                    });
                    let $ = (x || "loading" === z) && "loading" === I.status || "loading" === z && "unresolved" === I.status ? h?.(C) ?? y : void 0,
                        H = null != $ || "loading" !== I.status,
                        N = (0, i.d)(m),
                        O = N?.kind === "page" && N.id === C || x && m === C ? "" : m,
                        B = $ ?? ("resolved" === I.status ? I.nativeTitle || I.page.title.trim() || O || P : ({
                            unresolved: O || P,
                            loading: y,
                            error: A,
                            unavailable: A,
                            private: T
                        })[I.status]),
                        _ = null != $ || "resolved" === I.status || O.length > 0 && "unavailable" !== I.status && "private" !== I.status ? (0, k.a)(B, void 0, void 0, "resolved" === I.status ? I.page.symbol : void 0) : null,
                        q = "resolved" === I.status && null != w ? O : "",
                        W = {
                            pageId: C,
                            length: D - S,
                            text: q || (_?.title ?? B),
                            element: null,
                            widget: null
                        },
                        F = e => {
                            W.element = e.dom.ownerDocument.createElement("span");
                            let a = _?.icon ?? d.Si;
                            "private" === I.status ? a = d.Pe : "resolved" === I.status && (a = (0, s.createElement)(C === n ? v : b.a, {
                                href: (0, i.a)({
                                    kind: "page",
                                    id: C,
                                    blockId: w
                                }),
                                textRef: C !== n && q ? void 0 : {
                                    current: W.element
                                },
                                title: B
                            }));
                            let r = (0, u.b)({
                                    dataAttributes: {
                                        "aria-label": q || B,
                                        role: "group"
                                    },
                                    fontWeight: "inherit",
                                    icon: a,
                                    interactive: H,
                                    text: W.text,
                                    textElement: W.element
                                }),
                                l = e.dom.ownerDocument.createElement(H ? "a" : "span");
                            l.contentEditable = "false";
                            let c = `/space/${encodeURIComponent(C)}${null==w?"":`#${w}`}`;
                            return l.dataset.pageLinkTooltip = H && null == L ? new URL(c, o.wb).toString() : B, l.append(r), "private" === I.status && (l.dataset.pageLinkPrivateId = C), t.register(l, r), H && (l.dataset.pageLinkId = C, l.setAttribute("data-inline-mention-interactive", ""), H ? l.setAttribute("href", c) : l.setAttribute("role", "button"), l.tabIndex = 0, l.classList.add("cursor-pointer"), r.classList.add("cursor-pointer"), l.addEventListener("click", e => {
                                e.stopPropagation(), H && !(0, M.a)(e) || (e.preventDefault(), ("loading" !== f(C).status || null != $ || R) && E(C, w, e))
                            }), l.addEventListener("keydown", e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), e.stopPropagation(), l.click())
                            })), l
                        },
                        V = e => {
                            e.contains(W.element) && (W.element = null, W.widget = null), t.unregister(e)
                        };
                    if (x) {
                        r.push(l.a.node(S, D, {}, {
                            authoredLabel: m,
                            blockId: w,
                            isMention: x,
                            pageId: C,
                            source: e,
                            pageLinkLabel: W,
                            render: F,
                            destroy: V
                        }));
                        continue
                    }
                    let K = new WeakMap,
                        j = new WeakMap;
                    r.push(l.a.widget(S, e => {
                        let t = K.get(e);
                        if (null != t) return t.references += 1, t.dom;
                        let n = F(e);
                        return W.widget = n, K.set(e, {
                            dom: n,
                            references: 1
                        }), j.set(n, e), n
                    }, {
                        marks: (0, p.a)(a.doc, S),
                        side: 1,
                        remove: L,
                        pageLinkLabel: W,
                        destroy: e => {
                            let t = j.get(e),
                                n = null == t ? void 0 : K.get(t);
                            if (null != t && null != n) {
                                if (n.references -= 1, n.references > 0) return;
                                K.delete(t), j.delete(e)
                            }
                            V(e)
                        }
                    })), S !== D && r.push(l.a.inline(S, D, {
                        "aria-hidden": "true",
                        class: "hidden"
                    }, {
                        authoredLabel: m,
                        blockId: w,
                        isMention: x,
                        pageId: C,
                        source: e
                    }), (0, c.a)(D))
                }
                return r
            }, L = e => l.b.create(e.doc, D(m?.(e.doc).map(e => {
                let {
                    pageId: t,
                    label: n,
                    position: a,
                    remove: r
                } = e;
                return {
                    authoredLabel: n ?? "",
                    pageId: t,
                    from: a,
                    isMention: !1,
                    to: a,
                    remove: r
                }
            }) ?? [], e)), I = e => {
                let t = $(e.doc);
                return {
                    decorations: l.b.create(e.doc, D(t, e)),
                    pendingDecorations: L(e),
                    targetIds: [...new Set(t.map(e => {
                        let {
                            pageId: t
                        } = e;
                        return t
                    }))].sort((e, t) => e.localeCompare(t))
                }
            };
            return new r.d({
                key: C,
                props: {
                    nodeViews: {
                        pageReferenceMention(e, t, n, r, l) {
                            let o = r.find(e => {
                                let {
                                    spec: t
                                } = e;
                                return !0 === t.isMention
                            });
                            if (null == o) {
                                let o = t.state.plugins.find(e => e !== C.get(t.state) && e.props.nodeViews?.pageReferenceMention != null)?.props.nodeViews?.pageReferenceMention;
                                return o?.(e, t, n, r, l) ?? a.b.renderSpec(t.dom.ownerDocument, S.a.toDOM(e))
                            }
                            let i = o.spec,
                                s = i.render(t),
                                d = e.attrs;
                            return s.setAttribute("page-reference-mention-path", d.path), s.setAttribute("page-reference-mention-title", d.title), s.setAttribute("page-reference-mention-project-id", d.projectId), s.setAttribute("page-reference-mention-space-id", d.spaceId), {
                                dom: s,
                                update: (t, n) => t.eq(e) && n.some(e => {
                                    let {
                                        spec: t
                                    } = e;
                                    return t === o.spec
                                }),
                                ignoreMutation: e => "selection" !== e.type,
                                destroy: () => i.destroy(s)
                            }
                        }
                    },
                    createSelectionBetween(e, t, n) {
                        let a = e.dom.ownerDocument.getSelection();
                        if (null == a || t.doc !== e.state.doc) return null;
                        let l = (t, n, a) => {
                                let r = C.getState(e.state)?.decorations;
                                for (let {
                                        from: e,
                                        spec: l
                                    }
                                    of r?.find(t, t) ?? []) {
                                    let r = l.pageLinkLabel;
                                    if (e === t && n === r?.widget?.parentNode && n?.childNodes[a - 1] === r.widget) return e + r.length
                                }
                                return t
                            },
                            o = l(t.pos, a.anchorNode, a.anchorOffset),
                            i = l(n.pos, a.focusNode, a.focusOffset);
                        if (o === t.pos && i === n.pos) return null;
                        let s = e.domAtPos(o, -1),
                            d = e.domAtPos(i, -1);
                        return a.setBaseAndExtent(s.node, s.offset, d.node, d.offset), r.h.create(e.state.doc, o, i)
                    },
                    decorations(e) {
                        let t = C.getState(e);
                        return t?.decorations.add(e.doc, t.pendingDecorations.find())
                    },
                    handleKeyDown(e, t) {
                        let {
                            selection: n
                        } = e.state;
                        if ("ArrowLeft" === t.key || "ArrowRight" === t.key) {
                            if (t.altKey || t.ctrlKey || t.metaKey) return !1;
                            let a = B(e.state, n.head, n.head).find(e => "ArrowLeft" === t.key ? n.head > e.from && n.head <= e.to : n.head >= e.from && n.head < e.to);
                            if (null == a) return !1;
                            let l = "ArrowLeft" === t.key ? a.from : a.to;
                            return e.dispatch(e.state.tr.setSelection(r.h.create(e.state.doc, t.shiftKey ? n.anchor : l, l)).scrollIntoView()), !0
                        }
                        if (!e.editable || "Backspace" !== t.key && "Delete" !== t.key) return !1;
                        let a = N(e, n.from, n.to);
                        if (n.empty && a) return !0;
                        if (t.altKey || t.ctrlKey || t.metaKey) return !1;
                        if (!n.empty) {
                            let t = O(e.state, n.from, n.to);
                            return (t.from !== n.from || t.to !== n.to) && (e.dispatch(e.state.tr.delete(t.from, t.to).scrollIntoView()), !0)
                        }
                        let {
                            from: l
                        } = n, o = B(e.state, l, l).find(e => "Backspace" === t.key ? l > e.from && l <= e.to : l >= e.from && l < e.to);
                        return null != o && (e.dispatch(e.state.tr.delete(o.from, o.to).scrollIntoView()), !0)
                    },
                    handleTextInput(e, t, n, a) {
                        t !== n && N(e, t, n);
                        let r = O(e.state, t, n);
                        return (r.from !== t || r.to !== n) && (e.dispatch(e.state.tr.insertText(a, r.from, r.to).scrollIntoView()), !0)
                    }
                },
                state: {
                    apply(e, t, n, a) {
                        if (e.getMeta(C)) {
                            if (e.docChanged) return I(a);
                            let n = t.decorations.find(void 0, void 0, _).flatMap(e => {
                                let {
                                    from: t,
                                    spec: n,
                                    to: a
                                } = e, {
                                    authoredLabel: r,
                                    blockId: l,
                                    isMention: o,
                                    pageId: i
                                } = n;
                                return "string" == typeof i ? [{
                                    authoredLabel: r,
                                    blockId: l,
                                    from: t,
                                    isMention: o,
                                    pageId: i,
                                    to: a
                                }] : []
                            });
                            return {
                                decorations: l.b.create(a.doc, D(n, a)),
                                pendingDecorations: L(a),
                                targetIds: t.targetIds
                            }
                        }
                        if (!e.docChanged) return t;
                        let o = e.getMeta("appendedTransaction"),
                            i = !0 === e.getMeta(w.b) || o instanceof r.i && !0 === o.getMeta(w.b),
                            s = !1,
                            d = t.decorations.map(e.mapping, a.doc, {
                                onRemove: e => {
                                    s = s || _(e)
                                }
                            });
                        for (let t of (0, x.a)(e)) {
                            let e = d.find(t.from, t.to),
                                n = t.from,
                                r = t.to;
                            for (let t of e) n = Math.min(n, t.from), r = Math.max(r, t.to);
                            let l = $(a.doc, n, r);
                            for (let e of l) n = Math.min(n, e.from), r = Math.max(r, e.to);
                            let o = d.find(n, r).filter(e => e.from === e.to ? e.from >= n && (e.from < r || e.from === r && !0 === e.spec.inlineMentionEndBoundary) : e.from < r && e.to > n);
                            if (0 === o.length && 0 === l.length) continue;
                            let i = $(a.doc, n, r),
                                u = o.filter(e => {
                                    let {
                                        spec: t
                                    } = e;
                                    return _(t)
                                });
                            i.length > 0 && i.length === u.length && i.every((e, t) => {
                                let {
                                    from: n,
                                    to: r,
                                    spec: l
                                } = u[t], o = l.source;
                                return e.from === n && e.to === r && o.eq(a.doc.slice(n, r))
                            }) || (s = !0, d = d.remove(o).add(a.doc, D(i, a)))
                        }
                        return {
                            decorations: d,
                            pendingDecorations: i ? L(a) : t.pendingDecorations.map(e.mapping, a.doc),
                            targetIds: s ? [...new Set(d.find(void 0, void 0, _).flatMap(e => {
                                let {
                                    spec: t
                                } = e, {
                                    pageId: n
                                } = t;
                                return "string" == typeof n ? [n] : []
                            }))].sort((e, t) => e.localeCompare(t)) : t.targetIds
                        }
                    },
                    init: (e, t) => I(t)
                }
            })
        }

        function E(e) {
            let t = C.getState(e);
            return [...t?.decorations.find() ?? [], ...t?.pendingDecorations.find() ?? []].flatMap(e => {
                let {
                    from: t,
                    spec: n
                } = e, a = n.pageLinkLabel;
                return null == a ? [] : [{
                    id: `${t}:${a.pageId}`,
                    targetId: a.pageId,
                    from: t,
                    to: t + a.length,
                    text: a.text,
                    element: a.element
                }]
            }).sort((e, t) => e.from - t.from)
        }

        function A(e) {
            return C.getState(e)?.targetIds ?? []
        }

        function P(e) {
            return !!C.getState(e)?.pendingDecorations.find(e.selection.from, e.selection.to).length
        }

        function D(e) {
            e.isDestroyed || e.dispatch(e.state.tr.setMeta(C, !0))
        }

        function L(e, t, n, a) {
            let {
                state: r
            } = e, l = r.schema.nodes.pageReferenceMention.create({
                path: (0, i.a)(a),
                title: ""
            }, null, (0, p.a)(r.doc, t));
            e.dispatch(r.tr.replaceWith(t, n, l).scrollIntoView()), e.focus()
        }

        function I(e, t) {
            let n = z(e.state, t);
            null != n && (e.dispatch(n.scrollIntoView()), e.focus())
        }

        function z(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                l = e.schema.nodes.pageReferenceMention;
            if (null == l) return null;
            let o = l.create({
                path: (0, i.a)({
                    kind: "page",
                    id: t
                }),
                title: a
            });
            return r && null != n && 0 === e.doc.resolve(n).depth ? e.tr.insert(n, e.schema.nodes.paragraph.create(null, o)) : null == n ? e.tr.replaceSelectionWith(o) : e.tr.replaceRangeWith(n, n, o)
        }

        function R(e) {
            var t;
            let n, a = (0, i.d)(e);
            return a?.kind === "page" ? a.id : (n = (t = e).startsWith("page:") ? t.slice(5) : "", /^page_[A-Za-z0-9][A-Za-z0-9_-]{0,122}$/u.test(n) ? n : null)
        }

        function $(e) {
            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.content.size,
                r = [];
            return n >= a || e.nodesBetween(n, a, (e, n) => {
                if ("pageReferenceMention" === e.type.name) {
                    let a = e.attrs.path,
                        l = "string" == typeof a ? (0, i.d)(a) : null;
                    return l?.kind === "page" && r.push({
                        authoredLabel: e.attrs.title,
                        blockId: l.blockId,
                        from: n,
                        isMention: !0,
                        pageId: l.id,
                        to: n + e.nodeSize
                    }), t = void 0, !1
                }
                if (!e.isText) {
                    t = void 0;
                    return
                }
                let a = e.marks.find(e => "link" === e.type.name),
                    l = a?.attrs.title === a?.attrs.href ? void 0 : a?.attrs.href,
                    o = "string" == typeof l ? (0, i.d)(l) : null,
                    s = "string" == typeof l ? R(l) : null;
                if (null == s) {
                    t = void 0;
                    return
                }
                let d = r.at(-1),
                    u = n + e.nodeSize;
                d?.pageId === s && d.to === n && t === l ? (d.authoredLabel += e.textContent, d.to = u) : r.push({
                    authoredLabel: e.textContent,
                    blockId: o?.kind === "page" ? o.blockId : void 0,
                    from: n,
                    isMention: !1,
                    pageId: s,
                    to: u
                }), t = l
            }), r
        }

        function H(e) {
            let {
                selection: t
            } = e.state;
            if (!t.empty)
                for (let {
                        $from: n,
                        $to: a
                    }
                    of t.ranges) N(e, n.pos, a.pos);
            let n = e.state.tr;
            if (t.ranges.length > 1) return n;
            let a = O(e.state, t.from, t.to);
            return a.from === t.from && a.to === t.to ? n : n.setSelection(r.h.create(n.doc, a.from, a.to))
        }

        function N(e, t, n) {
            let a = C.getState(e.state)?.pendingDecorations.find(t, n);
            for (let {
                    spec: e
                }
                of a ?? []) {
                let t = e.remove;
                t?.()
            }
            return (a?.length ?? 0) > 0
        }

        function O(e, t, n) {
            let a = t,
                r = n;
            for (let l of B(e, t, n))(t === n && t > l.from && t < l.to || t < l.to && n > l.from) && (a = Math.min(a, l.from), r = Math.max(r, l.to));
            return {
                from: a,
                to: r
            }
        }

        function B(e, t, n) {
            let a = C.getState(e)?.decorations;
            return null == a ? [] : a.find(Math.max(0, t - 1), Math.min(e.doc.content.size, n + 1), e => _(e) && !e.isMention).flatMap(e => {
                let {
                    from: t,
                    spec: n,
                    to: a
                } = e, {
                    authoredLabel: r,
                    blockId: l,
                    isMention: o,
                    pageId: i
                } = n;
                return "string" == typeof i ? [{
                    authoredLabel: r,
                    blockId: l,
                    from: t,
                    isMention: o,
                    pageId: i,
                    to: a
                }] : []
            })
        }

        function _(e) {
            return null != e.pageId
        }
    }),
    MrSV: (function(e, t, n) {
        n.d(t, {
            a: () => S,
            b: () => k
        });
        var a = n("LSvd"),
            r = n("sSh9"),
            l = n("f6KK"),
            o = n("NoA4"),
            i = n("Zqzr"),
            s = n("zSQm"),
            d = n("TwV4"),
            u = n("tKel"),
            c = n("NnV7"),
            p = n("dQ4w"),
            f = n("tINb"),
            g = n("oM6E");

        function h(e, t) {
            let n = e.createElement("span");
            n.className = "font-content text-secondary whitespace-nowrap", n.setAttribute("role", "status"), n.setAttribute("aria-label", t);
            let a = e.createElement("span");
            a.className = "me-[3px] inline-block size-4 rounded-sm bg-secondary-soft-alpha align-middle";
            let r = e.createElement("span");
            return r.className = "whitespace-normal", r.textContent = t, n.append(a, r), n
        }
        var m = n("YS7P"),
            b = n("km7q"),
            y = n("BWum"),
            v = n("uhrq"),
            w = n("FwTO");

        function S(e, t, n) {
            let S, k, {
                    checkboxes: M,
                    loadingLabels: x,
                    plugins: C = [],
                    onOpenLink: T,
                    pageLinks: E
                } = n,
                A = e => {
                    if (null == E) return;
                    k?.(), k = void 0;
                    let t = (0, b.e)(e.state);
                    t.length > 0 && (k = E.scope.watch(n => {
                        let {
                            get: a
                        } = n;
                        S = a(g.b, {
                            sourcePageId: E.pageId,
                            targetPageIds: t
                        }), (0, b.k)(e)
                    }))
                },
                P = null == E ? [] : [(0, b.b)({
                    getLink: e => S?.get(e) ?? {
                        status: "loading"
                    },
                    loadingPageLabel: E.intl.formatMessage({
                        id: "codex.space.page.linkLoading",
                        defaultMessage: "Loading page…"
                    }),
                    privatePageLabel: E.intl.formatMessage(u.g),
                    unavailablePageLabel: E.intl.formatMessage(u.h, {
                        kind: "page"
                    }),
                    untitledPageLabel: E.intl.formatMessage(c.c.untitled),
                    onOpen: (e, t, n) => {
                        let a = new URL(`/space/${encodeURIComponent(e)}`, i.wb);
                        null != t && (a.hash = t), T?.(n, a.toString())
                    }
                }, E.icons), new l.d({
                    view: () => ({
                        update: (e, t) => {
                            e.state.doc !== t.doc && A(e)
                        },
                        destroy: () => k?.()
                    })
                })],
                D = new o.c(e, {
                    state: l.b.create({
                        doc: (0, f.b)(t),
                        plugins: (0, a.b)(M.plugin, (0, y.a)({
                            renderSavedWidths: !0
                        }), (0, v.a)(), (0, m.a)(), (0, d.d)(), ...P, ...C)
                    }),
                    attributes: {
                        class: `${r.a.content} ${w.a.PageDocument} ${w.a.PagePreview}`
                    },
                    editable: () => !1,
                    handleScrollToSelection: () => !0,
                    nodeViews: null == x ? void 0 : {
                        [p.a]: () => {
                            var t, n;
                            let a;
                            return {
                                dom: (t = e.ownerDocument, n = x.visualization, (a = t.createElement("div")).className = "loading-shimmer-pure-text text-sm text-secondary select-none", a.setAttribute("role", "status"), a.setAttribute("aria-label", n), a.textContent = n, a)
                            }
                        },
                        pageReferenceMention: () => ({
                            dom: h(e.ownerDocument, x.pageReference)
                        })
                    },
                    markViews: {
                        link: t => {
                            if (null != x && "string" == typeof t.attrs.href && null != (0, b.j)(t.attrs.href)) {
                                let t = h(e.ownerDocument, x.pageReference),
                                    n = e.ownerDocument.createElement("span");
                                return n.hidden = !0, n.setAttribute("aria-hidden", "true"), t.append(n), {
                                    dom: t,
                                    contentDOM: n
                                }
                            }
                            let n = e.ownerDocument.createElement("a"),
                                a = "string" == typeof t.attrs.href ? (0, s.a)(t.attrs.href) : void 0;
                            if (null != T && "string" == typeof a) {
                                n.setAttribute("href", a);
                                let e = e => {
                                    e.preventDefault(), T(e, a)
                                };
                                n.addEventListener("click", e), n.addEventListener("auxclick", e)
                            }
                            return {
                                dom: n,
                                contentDOM: n
                            }
                        }
                    }
                });
            return A(D), D
        }

        function k(e, t) {
            let n = (0, f.b)(t),
                a = e.state.doc,
                r = a.content.findDiffStart(n.content),
                l = a.content.findDiffEnd(n.content);
            if (null == r || null == l) return;
            let o = r - Math.min(l.a, l.b);
            o > 0 && (l.a += o, l.b += o);
            let i = e.state.tr.replace(r, l.a, n.slice(r, l.b));
            e.updateState(e.state.apply(i))
        }
    }),
    CJGP: (function(e, t, n) {
        var a = n("IlTK"),
            r = n("CHJa"),
            l = n("HLFh"),
            o = n("tINb");
        let i = Symbol("uncertainColumnSplice");
        class s extends l.i {
            ranges;
            constructor(e, t, n, a) {
                super(e, t, n), this.ranges = a
            }
            getMap() {
                return new l.k(this.ranges)
            }
        }
        n.d(t, {}, {
            a: function(e, t, n, d, u) {
                var c, p, f, g;
                let h, m, b, y, v = e.doc,
                    w = function(e, t, n) {
                        let a = [];
                        for (let {
                                node: n,
                                ranges: r
                            }
                            of t?.values() ?? []) {
                            let t = e.resolve(r[0]).start(),
                                l = 0;
                            for (let e = 0; e < r.length; e += 3) {
                                let o = r[e],
                                    i = r[e + 1],
                                    s = r[e + 2],
                                    d = o - t + l;
                                a.push({
                                    from: o,
                                    to: o + i,
                                    slice: n.slice(d, d + s)
                                }), l += s - i
                            }
                        }
                        if (!a.some(e => {
                                let {
                                    from: t,
                                    to: n,
                                    slice: a
                                } = e;
                                return n > t && a.size > 0
                            })) return null;
                        let o = new l.m(e);
                        for (let {
                                from: e,
                                to: t,
                                slice: i
                            }
                            of a.sort((e, t) => t.from - e.from))
                            if (n) {
                                if (t > e && o.maybeStep(new l.i(e, t, r.j.empty)).failed || i.size > 0 && o.maybeStep(new l.i(e, e, i)).failed) return null
                            } else if (o.maybeStep(new l.i(e, t, i)).failed) return null;
                        return o
                    }(v, n, d);
                for (let t of w?.steps ?? []) e.step(t);
                let S = (c = e.doc, p = t, f = null == w ? n : void 0, g = u, h = [], m = [], b = new Set, {
                        node: (y = (e, t, n, a, l) => {
                            if (e === t) return t;
                            let s = (0, o.b)(e),
                                d = (0, o.b)(t);
                            if (s.eq(d)) return t;
                            if (s.type !== d.type || s.isLeaf) return h.push(n, e.nodeSize, t.nodeSize), t;
                            let u = !s.sameMarkup(d);
                            u && m.push({
                                from: a,
                                node: t
                            });
                            let c = t.content,
                                p = f?.get(e);
                            if (p?.node === t)
                                for (let e = 0; e < p.ranges.length; e += 3) h.push(p.ranges[e], p.ranges[e + 1], p.ranges[e + 2]);
                            else if (!s.content.eq(d.content)) {
                                let o = null;
                                if (null != l ? o = function(e, t, n) {
                                        let {
                                            start: a,
                                            suffix: r
                                        } = n, l = 0, o = 0;
                                        for (let t = 0; t < a; t++) l += e.child(t).nodeSize;
                                        for (let t = 0; t < r; t++) o += e.child(e.childCount - t - 1).nodeSize;
                                        return [l, e.size - l - o, t.size - l - o]
                                    }(s.content, d.content, l) : s.inlineContent || s.childCount === d.childCount || (o = function(e, t) {
                                        let n = Math.min(e.childCount, t.childCount),
                                            a = 0,
                                            r = 0;
                                        for (; a < n && e.child(a).eq(t.child(a));) r += e.child(a).nodeSize, a += 1;
                                        let l = 0,
                                            o = 0;
                                        for (; l < n - a && e.child(e.childCount - l - 1).eq(t.child(t.childCount - l - 1));) o += e.child(e.childCount - l - 1).nodeSize, l += 1;
                                        return a + l === n ? [r, e.size - r - o, t.size - r - o] : null
                                    }(s.content, d.content)), null != o) h.push(n + 1 + o[0], o[1], o[2]);
                                else if (s.inlineContent || s.childCount !== d.childCount) {
                                    let e = s.content.findDiffStart(d.content),
                                        t = s.content.findDiffEnd(d.content);
                                    if (null != e && null != t) {
                                        if (t.a < e || t.b < e) {
                                            let n = t.b - t.a;
                                            t.a = e + Math.max(0, -n), t.b = e + Math.max(0, n)
                                        }
                                        h.push(n + 1 + e, t.a - e, t.b - e)
                                    }
                                } else {
                                    let l = [],
                                        o = 0,
                                        u = !1,
                                        p = "table" === s.type.name ? function(e, t, n) {
                                            let a = e.firstChild?.childCount ?? 0,
                                                r = t.firstChild?.childCount ?? 0,
                                                l = Math.min(a, r);
                                            if (0 === l || a === r || e.children.some(e => e.childCount !== a) || t.children.some(e => e.childCount !== r) || [e, t].some(e => e.children.some(e => e.children.some(e => 1 !== e.attrs.colspan || 1 !== e.attrs.rowspan)))) return;
                                            let o = o => {
                                                let i = (n, a) => e.children.every((e, r) => {
                                                        let l = e.child(n),
                                                            i = t.child(r).child(a);
                                                        return l.eq(i) || o && l.hasMarkup(i.type, {
                                                            ...i.attrs,
                                                            pageColumnWidth: l.attrs.pageColumnWidth
                                                        }, i.marks) && l.content.eq(i.content)
                                                    }),
                                                    s = 0;
                                                for (; s < l && i(s, s);) s++;
                                                let d = 0;
                                                for (; d < l && i(a - d - 1, r - d - 1);) d++;
                                                let u = l - d;
                                                return null != n && u <= n && n <= s ? {
                                                    start: n,
                                                    suffix: l - n
                                                } : null == n && u <= s ? {
                                                    start: u,
                                                    suffix: l - s
                                                } : void 0
                                            };
                                            return void 0 !== n && null == n ? i : o(!1) ?? o(!0) ?? i
                                        }(s, d, g?.get(t)) : void 0;
                                    p === i && b.add(n), e.forEach((e, r, s) => {
                                        let d = t.child(s),
                                            c = y(e, d, n + 1 + r, a + 1 + o, p === i ? void 0 : p);
                                        l.push(c), u = u || c !== d, o += d.nodeSize
                                    }), u && (c = r.c.fromArray(l))
                                }
                            }
                            return u ? e.copy(c) : t.copy(c)
                        })(c, p, -1, -1),
                        ranges: h,
                        markup: m,
                        uncertainTables: b
                    }),
                    [k, M, x, C, T, E] = S.ranges;
                if (0 === S.uncertainTables.size && 6 === S.ranges.length && M > 0 && T > 0 && k + M === C) {
                    let t = C + x - M;
                    e.step(new l.i(C, C + T, S.node.slice(t, t + E))), e.step(new l.i(k, k + M, S.node.slice(k, k + x)))
                } else(e.docChanged || S.node !== v) && (e.step(new s(0, e.doc.content.size, new r.j(S.node.content, 0, 0), S.ranges)), (0, a.b)(e.mapping.maps[e.mapping.maps.length - 1], S.uncertainTables));
                for (let {
                        from: t,
                        node: n
                    }
                    of S.markup) e.setNodeMarkup(t, void 0, n.attrs, n.marks);
                return e
            }
        })
    }),
    OIHP: (function(e, t, n) {
        var a = n("K1Fz"),
            r = n("en1Z"),
            l = n("CHJa"),
            o = n("f6KK"),
            i = n("ASxG"),
            s = n("Uguk");
        let d = i.object({
            positions: i.array(i.number().int().nonnegative())
        });
        class u extends o.f {
            positions;
            constructor(e, t) {
                super(t[0].$from, t[0].$from, t), this.positions = e
            }
            get $to() {
                return this.ranges[this.ranges.length - 1].$to
            }
            static create(e, t) {
                let n = [],
                    a = (function(e, t) {
                        let n = new Set(t.filter(t => t >= 0 && t < e.content.size)),
                            a = e.content.size,
                            r = 0;
                        for (let e of n) a = Math.min(a, e), r = Math.max(r, e);
                        let l = [];
                        return 0 === n.size || e.nodesBetween(a, r + 1, (e, t) => ((function e(t, o) {
                            if (!t.isBlock || o > r || o + t.nodeSize <= a) return !1;
                            if (n.has(o)) return l.push({
                                from: o,
                                node: t
                            }), !0;
                            if (t.isTextblock || t.isLeaf) return !1;
                            let i = l.length,
                                d = t.childCount > 0;
                            return t.forEach((t, n) => {
                                d = e(t, o + 1 + n) && d
                            }), d && (0, s.b)(t) && l.splice(i, l.length - i, {
                                from: o,
                                node: t
                            }), d
                        })(e, t), !1)), l
                    })(e, t).map(t => {
                        let {
                            from: a,
                            node: r
                        } = t, l = e.resolve(a), i = e.resolve(a + r.nodeSize), s = n.at(-1);
                        return s?.$to.pos === a && s.$from.sameParent(l) ? n[n.length - 1] = new o.g(s.$from, i) : n.push(new o.g(l, i)), a
                    });
                return a.length > 0 ? new u(a, n) : o.f.atStart(e)
            }
            eq(e) {
                return e instanceof u && this.positions.length === e.positions.length && this.positions.every((t, n) => t === e.positions[n])
            }
            map(e, t) {
                return this.getBookmark().map(t).resolve(e)
            }
            content() {
                let e, t = [];
                for (let {
                        $from: n,
                        $to: l
                    }
                    of this.ranges) {
                    let o = (0, a.a)(n.doc.slice(n.pos, l.pos, !0), n),
                        i = (0, r.a)(o.content, o.openStart, o.openEnd),
                        s = n.sameParent(l) && ("list" === n.parent.type.name || "ordered_list" === n.parent.type.name) ? n.before() : void 0,
                        d = t.at(-1);
                    null != s && s === e && null != d && 1 === i.childCount && i.firstChild?.type === d.type ? t[t.length - 1] = d.copy(d.content.append(i.firstChild.content)) : t.push(...i.content), e = s
                }
                return new l.j(l.c.from(t), 0, 0)
            }
            replace(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.j.empty;
                if (t.size > 0) return void super.replace(e, t);
                let n = e.steps.length;
                for (let t of [...this.ranges].reverse()) {
                    let a = e.mapping.slice(n);
                    e.deleteRange(a.map(t.$from.pos, 1), a.map(t.$to.pos, -1))
                }
                e.setSelection(o.f.near(e.doc.resolve(Math.min(e.mapping.slice(n).map(this.from), e.doc.content.size))))
            }
            toJSON() {
                return {
                    type: "page-content",
                    positions: this.positions
                }
            }
            static fromJSON(e, t) {
                return u.create(e, d.parse(t).positions)
            }
            getBookmark() {
                return new c(this.positions.flatMap(e => {
                    let t = this.$from.doc.nodeAt(e);
                    return null == t ? [] : [{
                        from: e,
                        to: e + t.nodeSize
                    }]
                }), this.from)
            }
        }
        class c {
            ranges;
            fallback;
            constructor(e, t) {
                this.ranges = e, this.fallback = t
            }
            map(e) {
                return new c(this.ranges.flatMap(t => {
                    let {
                        from: n,
                        to: a
                    } = t, r = e.mapResult(n, 1), l = e.mapResult(a, -1);
                    return r.pos < l.pos && !(r.deletedAcross && l.deletedAcross) ? [{
                        from: r.pos,
                        to: l.pos
                    }] : []
                }), e.map(this.fallback))
            }
            resolve(e) {
                let t = this.ranges.flatMap(t => {
                    let {
                        from: n,
                        to: a
                    } = t;
                    if (n < 0 || n >= e.content.size) return [];
                    let r = e.nodeAt(n);
                    return r?.isBlock && n + r.nodeSize === a ? [n] : []
                });
                return t.length > 0 ? u.create(e, t) : o.f.near(e.resolve(Math.max(0, Math.min(this.fallback, e.content.size))))
            }
        }
        o.f.jsonID("page-content", u), n.d(t, {}, {
            a: u
        })
    }),
    Uguk: (function(e, t, n) {
        function a(e) {
            return e.type.isInGroup("list_item") || "blockquote" === e.type.name
        }
        n.d(t, {}, {
            a: function(e) {
                let t = e.nodeAfter;
                return null != t && a(t) ? {
                    from: e.pos,
                    node: t
                } : t?.isTextblock && a(e.parent) ? {
                    from: e.before(),
                    node: e.parent
                } : null
            },
            b: a
        })
    }),
    BdKm: (function(e, t, n) {
        var a = n("j4Oi"),
            r = n("Cn5C"),
            l = n("f6KK"),
            o = n("ygJY"),
            i = n("oNJZ"),
            s = n("XWfR"),
            d = n("xaCE"),
            u = n("Nfrx"),
            c = n("YS7P"),
            p = n("RRx3"),
            f = n("OIHP");
        let g = import.meta.hot?.data,
            h = g?.selectionStores ?? new WeakMap,
            m = {
                getSnapshot: () => null,
                subscribe: () => () => {}
            };
        import.meta.hot?.dispose(e => {
            e.selectionStores = h
        });
        let b = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;

        function y(e, t, n, a) {
            let {
                $from: r,
                $to: l
            } = a, o = (0, d.a)(e.state.doc, t, n, r.pos, 1), s = (0, d.a)(e.state.doc, t, n, l.pos, -1);
            return {
                fromBlockId: null != o && "empty-document" !== o.kind ? o.blockId : void 0,
                toBlockId: null != s && "empty-document" !== s.kind ? s.blockId : void 0,
                fromMarkdownOffset: o?.kind === "text" ? i.createAbsolutePositionFromRelativePosition(o.position, t)?.index : void 0,
                toMarkdownOffset: s?.kind === "text" ? i.createAbsolutePositionFromRelativePosition(s.position, t)?.index : void 0,
                fromBlockEdge: o?.kind === "block-edge" ? o.side : void 0,
                toBlockEdge: s?.kind === "block-edge" ? s.side : void 0
            }
        }

        function v(e) {
            let t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.state.selection,
                r = a instanceof l.h && a === e.state.selection ? (0, p.c)(e.state) : null,
                o = null == r ? "text" : "table";
            return a instanceof f.a ? o = "blocks" : a instanceof l.c && (o = "node"), {
                nativeSelection: a,
                kind: o,
                ranges: r ?? a.ranges,
                isTableAxisSelection: null != r && w(e.state),
                get targets() {
                    return "table" === o || e.isDestroyed || a.$from.doc !== e.state.doc ? [] : ((t !== e.state || null == n || n.some(t => {
                        let {
                            element: n
                        } = t;
                        return !e.dom.contains(n)
                    })) && (t = e.state, n = function(e, t) {
                        let {
                            doc: n
                        } = e.state, a = [];
                        if (t instanceof f.a) {
                            let e = new Set(t.positions);
                            n.nodesBetween(t.from, t.to, (t, n) => !e.has(n) || (a.push({
                                from: n,
                                node: t
                            }), !1))
                        } else t instanceof l.c ? a.push({
                            from: t.from,
                            node: t.node
                        }) : (t instanceof l.h || t instanceof l.a) && !t.empty && n.nodesBetween(t.from, t.to, (e, n) => "list" === e.type.name || "ordered_list" === e.type.name || (e.isBlock && (t instanceof l.a || t.to > n + 1 && t.from < n + e.nodeSize - 1) && a.push({
                            from: n,
                            node: e
                        }), !1));
                        return a.flatMap(t => {
                            let {
                                from: n,
                                node: a
                            } = t, r = (0, c.d)(e, n);
                            return null != r && null == r.closest("[data-page-generate-prompt], [data-page-generate-original]") ? [{
                                from: n,
                                node: a,
                                element: r
                            }] : []
                        })
                    }(e, a)), n)
                }
            }
        }

        function w(e) {
            let t = p.d.getState(e);
            return "row" === t || "column" === t
        }
        n.d(t, {}, {
            a: function(e, t, n, a) {
                return function() {
                    let r = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return [(0, u.a)(t.getSnapshot().commentActor, a, r), function(e, t, n) {
                        let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                        if (null != e && !e.isDestroyed) return "Current Page selection for this message: " + JSON.stringify(v(e).ranges.flatMap(a => {
                            let {
                                $from: r,
                                $to: l
                            } = a;
                            if (r.pos === l.pos) return [];
                            let o = y(e, t, n, a);
                            return [{
                                from_block_id: o.fromBlockId,
                                to_block_id: o.toBlockId,
                                from_markdown_offset: o.fromMarkdownOffset,
                                to_markdown_offset: o.toMarkdownOffset,
                                from_block_edge: o.fromBlockEdge,
                                to_block_edge: o.toBlockEdge,
                                text: e.state.doc.textBetween(r.pos, l.pos, "\n")
                            }]
                        })) + (a ? "\n" + o.a : "")
                    }(e, t.document, n, r)].filter(Boolean).join("\n\n")
                }
            },
            b: async function(e, t, n) {
                if (e.isDestroyed) return;
                let r = [];
                for (let a of v(e).ranges) {
                    if (a.$from.pos === a.$to.pos) continue;
                    let l = y(e, t, n, a),
                        {
                            fromBlockId: o,
                            toBlockId: i
                        } = l;
                    if (null == o || !b.test(o) || null == i || !b.test(i) || null == l.fromMarkdownOffset && null == l.fromBlockEdge || null == l.toMarkdownOffset && null == l.toBlockEdge) return;
                    r.push({
                        ...l,
                        fromBlockId: o,
                        toBlockId: i
                    })
                }
                if (0 === r.length) return {
                    ranges: [],
                    blocks: []
                };
                let l = (0, a.Xb)((0, a.gc)(t)),
                    o = new Map(l.map((e, t) => [e.id, t])),
                    i = new Set;
                for (let {
                        fromBlockId: e,
                        toBlockId: t
                    }
                    of r) {
                    let n = o.get(e),
                        a = o.get(t);
                    if (null == n || null == a || n > a) return;
                    for (let e = n; e <= a; e++) i.add(e)
                }
                let d = l.filter((e, t) => i.has(t));
                if (d.every(e => {
                        let {
                            id: t
                        } = e;
                        return b.test(t)
                    })) return {
                    ranges: r,
                    blocks: await Promise.all(d.map(async e => {
                        let {
                            id: t,
                            kind: n,
                            text: a
                        } = e;
                        return {
                            id: t,
                            hash: await (0, s.a)(n, a.toJSON())
                        }
                    }))
                }
            },
            c: v,
            d: function(e, t) {
                let n = e?.targets;
                return null != n && n.length > 1 && n.some(e => {
                    let {
                        from: n,
                        node: a
                    } = e;
                    return n < t.from + t.node.nodeSize && n + a.nodeSize > t.from
                }) ? n : [t]
            },
            e: function(e) {
                if ("table" === e.kind || 0 === e.ranges.length) return null;
                for (let t = 1; t < e.ranges.length; t += 1) {
                    let {
                        $to: n
                    } = e.ranges[t - 1], {
                        $from: a
                    } = e.ranges[t], r = n.pos, l = a.pos;
                    for (let e = n.depth; e > 0 && r === n.end(e); e--) r = n.after(e);
                    for (let e = a.depth; e > 0 && l === a.start(e); e--) l = a.before(e);
                    if (r !== l) return null
                }
                let {
                    $from: t
                } = e.ranges[0], {
                    $to: n
                } = e.ranges[e.ranges.length - 1];
                return t.pos < n.pos ? {
                    from: t.pos,
                    to: n.pos
                } : null
            },
            f: function(e) {
                return h.get(e) ?? m
            },
            g: function(e) {
                let t = v(e),
                    n = new Set;
                return h.set(e, {
                    getSnapshot: () => t,
                    subscribe: e => (n.add(e), () => n.delete(e))
                }), {
                    update(e, a) {
                        let l = r.q.getState(e.state),
                            o = r.q.getState(a);
                        (e.state.selection !== a.selection || e.state.doc !== a.doc || l?.isStructureMode !== o?.isStructureMode || l?.isStructureMode && (l.structureSelectionAnchor !== o?.structureSelectionAnchor || l.structureSelectionHead !== o?.structureSelectionHead || w(e.state) !== w(a))) && (t = v(e), n.forEach(e => e()))
                    },
                    destroy() {
                        t = null, h.delete(e), n.forEach(e => e()), n.clear()
                    }
                }
            }
        })
    }),
    FY8H: (function(e, t, n) {
        var a = n("hgm5"),
            r = n("f6KK"),
            l = n("tezj"),
            o = n("Ph7x");

        function i(e) {
            let {
                parent: t
            } = e, n = t.type.schema.nodes.paragraph, a = e.index();
            return t.canReplaceWith(a, a, n) && (t.type.name !== l.c || (0, o.a)(String(t.attrs.tag), n.create()))
        }
        class s extends a.a {
            map(e, t) {
                return this.getBookmark().map(t).resolve(e)
            }
            getBookmark() {
                return function e(t) {
                    return {
                        map: n => e(n.map(t)),
                        resolve(e) {
                            let n = e.resolve(t);
                            return i(n) ? new s(n) : r.f.near(n)
                        }
                    }
                }(this.head)
            }
        }
        n.d(t, {}, {
            a: s,
            b: i
        })
    }),
    tc1t: (function(e, t, n) {
        function a(e, t) {
            let n = [],
                a = [];
            for (let r of e) {
                let e = [],
                    l = 0;
                for (let a of r) {
                    for (; n[l] > 0;) l += 1;
                    e.push(l);
                    let r = t(a),
                        o = Math.min(1e3, Math.max(1, parseInt(String(r.colSpan), 10) || 1)),
                        i = parseInt(String(r.rowSpan), 10),
                        s = i >= 0 ? Math.min(65534, i) : 1;
                    for (let e = 0; e < o; e += 1) n[l + e] = 0 === s ? 1 / 0 : s;
                    l += o
                }
                a.push(e), n.forEach((e, t) => {
                    n[t] = Math.max(0, e - 1)
                })
            }
            return a
        }
        n.d(t, {}, {
            a: a,
            b: function(e) {
                if (!/\b(?:rowspan|colspan|data-page-task-list)\s*=/i.test(e)) return e;
                let t = new DOMParser().parseFromString(e, "text/html");
                for (let e of t.querySelectorAll("table div[data-page-task-list]")) {
                    let n = t.createElement("ul");
                    for (let a of (n.dataset.spread = e.getAttribute("data-page-task-list") ?? "", Array.from(e.children)))
                        if (a.matches("div[data-page-task-checked]")) {
                            let e = t.createElement("li");
                            e.dataset.taskListItem = "true", e.dataset.checked = a.getAttribute("data-page-task-checked") ?? "", a.querySelector(":scope > p:first-child > span[data-page-task-marker]:first-child")?.remove(), e.append(...a.childNodes), n.append(e)
                        } else "UL" === a.tagName ? n.append(...a.childNodes) : n.append(a);
                    e.replaceWith(n)
                }
                for (let e of t.querySelectorAll("thead, tbody, tfoot")) {
                    let n = Array.from(e.rows, e => Array.from(e.cells));
                    if (!n.some(e => e.some(e => 1 !== e.rowSpan || 1 !== e.colSpan))) continue;
                    let r = a(n, e => e),
                        l = n.map(() => 0);
                    n.forEach((e, t) => e.forEach((e, a) => {
                        let o = 0 === e.rowSpan ? n.length : Math.min(n.length, t + e.rowSpan),
                            i = r[t][a] + e.colSpan;
                        for (let e = t; e < o; e++) l[e] = Math.max(l[e], i)
                    })), n.forEach((n, a) => {
                        let o = [],
                            i = "THEAD" === e.tagName || n[0]?.tagName === "TH" ? "th" : "td";
                        for (n.forEach((e, n) => {
                                for (; o.length < r[a][n];) o.push(t.createElement(i));
                                e.removeAttribute("rowspan"), e.removeAttribute("colspan"), o.push(e)
                            }); o.length < l[a];) o.push(t.createElement(i));
                        e.rows[a].replaceChildren(...o)
                    })
                }
                return t.body.innerHTML
            }
        })
    }),
    BWum: (function(e, t, n) {
        var a = n("CHJa"),
            r = n("f6KK"),
            l = n("NoA4"),
            o = n("sGTh"),
            i = n("vEJV"),
            s = n("tc1t"),
            d = n("sQAU"),
            u = n("ebwD"),
            c = n("Pva4");

        function p(e, t) {
            let n = a.b.fromSchema(e.type.schema).nodes[e.type.name],
                r = a.b.renderSpec(t.dom.ownerDocument, n(e));
            if (!(r.dom instanceof HTMLElement)) return r;
            let l = r.dom,
                o = e,
                i = new Map(Array.from(l.attributes, e => {
                    let {
                        name: t,
                        value: n
                    } = e;
                    return [t, n]
                }));
            return {
                dom: l,
                contentDOM: r.contentDOM,
                update(e) {
                    if (e.type !== o.type) return !1;
                    if (!e.sameMarkup(o)) {
                        let r = a.b.renderSpec(t.dom.ownerDocument, n(e)).dom;
                        if (!(r instanceof HTMLElement) || r.tagName !== l.tagName || r.getAttribute("class") !== (i.get("class") ?? null) || r.getAttribute("style") !== (i.get("style") ?? null)) return !1;
                        for (let e of i.keys()) r.hasAttribute(e) || l.removeAttribute(e);
                        for (let {
                                name: e,
                                value: t
                            }
                            of Array.from(r.attributes)) i.get(e) !== t && l.setAttribute(e, t);
                        i = new Map(Array.from(r.attributes, e => {
                            let {
                                name: t,
                                value: n
                            } = e;
                            return [t, n]
                        }))
                    }
                    return o = e, !0
                },
                ignoreMutation: e => "attributes" === e.type && e.target === l && "style" === e.attributeName
            }
        }

        function f(e, t) {
            let n = [];
            return e.descendants((e, a) => {
                if ("table" !== e.type.name) return !0;
                let r = t ? (0, u.a)(e) : void 0;
                null != r && n.push(l.a.node(a, a + e.nodeSize, r.attributes));
                let o = !1 !== e.attrs.pageHeaderRow && !0 === e.attrs.pagePinHeaderRow,
                    i = !0 === e.attrs.pageHeaderColumn && !0 === e.attrs.pagePinHeaderColumn;
                o && n.push(l.a.node(a, a + e.nodeSize, {
                    "data-page-pinned-header-row": ""
                }));
                let c = (0, s.a)(e.content.content.map(e => e.content.content), e => ({
                    colSpan: e.attrs.colspan,
                    rowSpan: e.attrs.rowspan
                }));
                return e.forEach((t, s, u) => {
                    t.forEach((t, p, f) => {
                        let g = a + s + p + 2,
                            h = c[u][f],
                            m = 0 === u ? r?.widths[f] : void 0;
                        n.push(l.a.node(g, g + t.nodeSize, {
                            "data-page-table-first-column": 0 === h ? "" : void 0,
                            "data-page-pinned-row": o && 0 === u ? "" : void 0,
                            "data-page-pinned-column": i && 0 === h ? "" : void 0,
                            style: null == m ? void 0 : `width: ${m}px;`,
                            role: (0, d.b)(e, u, h, t)
                        }))
                    })
                }), !1
            }), l.b.create(e, n)
        }
        n.d(t, {}, {
            a: function() {
                let {
                    renderSavedWidths: e = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new r.d({
                    state: {
                        init: (t, n) => f(n.doc, e),
                        apply: (t, n) => t.docChanged ? (0, o.a)(t) ? n.map(t.mapping, t.doc) : f(t.doc, e) : n
                    },
                    view: e => (0, i.a)(e, () => {
                        let t = (0, c.a)(e.dom);
                        return {
                            update(e, n) {
                                e.state.doc !== n.doc && t.update()
                            },
                            destroy: t.destroy
                        }
                    }),
                    props: {
                        nodeViews: {
                            table: p,
                            table_row: p
                        },
                        decorations(e) {
                            return this.getState(e)
                        }
                    }
                })
            }
        })
    }),
    ebwD: (function(e, t, n) {
        var a = n("wJ05");
        n.d(t, {}, {
            a: function(e, t) {
                if (null == t && null != e.attrs.dilTemplate) {
                    let t = e.firstChild;
                    if (null == t || e.children.some(e => e.children.some((e, n) => "number" != typeof e.attrs.pageColumnWidth || e.attrs.pageColumnWidth !== t.maybeChild(n)?.attrs.pageColumnWidth))) return
                }
                let n = null == t ? (0, a.b)(e)?.[0] : void 0,
                    r = n?.filter(e => null != e),
                    l = r?.length ? r.reduce((e, t) => e + t, 0) / r.length : 0,
                    o = t ?? n?.map(e => e ?? l);
                if (null == o) return;
                let i = o.reduce((e, t) => e + t, 0),
                    s = "full-width" === e.attrs.pageLayout ? `max(100%, ${i}px)` : `${i}px`;
                return {
                    widths: o,
                    totalWidth: i,
                    attributes: {
                        "data-page-table-resized": "true",
                        style: `inline-size: ${s}; min-inline-size: 0; max-inline-size: none;`
                    }
                }
            }
        })
    }),
    uhrq: (function(e, t, n) {
        var a = n("CHJa"),
            r = n("f6KK");

        function l(e) {
            let t = e.textBetween(0, e.content.size, " ", e => "hard_break" === e.type.name ? " " : "￼");
            return /\p{Nd}/u.test(t) && /^[\p{Nd}\p{Sc}\s.,+\-−–/:()%‰'’٬٫]+$/u.test(t)
        }

        function o(e, t) {
            let n = a.b.fromSchema(e.type.schema).nodes[e.type.name],
                r = a.b.renderSpec(t.dom.ownerDocument, n(e)),
                o = r.dom;
            return o instanceof HTMLElement ? {
                dom: o,
                contentDOM: r.contentDOM,
                update: t => !!t.sameMarkup(e) && (o.toggleAttribute("data-page-numeric-cell", l(t)), !0)
            } : r
        }
        n.d(t, {}, {
            a: function() {
                return new r.d({
                    props: {
                        nodeViews: {
                            table_cell: o
                        }
                    }
                })
            },
            b: l
        })
    }),
    Pva4: (function(e, t, n) {
        var a = n("aWEZ");
        let r = new WeakMap;

        function l(e) {
            e.animation?.row.cancel(), e.animation?.cover.cancel(), e.animation = null
        }

        function o(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (null != e && e !== t) {
                let t = r.get(e);
                null != t && 0 == --t.users && (e.style.clipPath === t.value && e.style.setProperty("clip-path", t.original, t.priority), r.delete(e))
            }
            if (null == t) return null;
            let l = r.get(t);
            null == l && (l = {
                users: 0,
                original: t.style.clipPath,
                priority: t.style.getPropertyPriority("clip-path"),
                value: ""
            }, r.set(t, l)), e !== t && l.users++;
            let o = `inset(max(0px, calc(${n}px - var(--spacing) * 6 * ${a})) 0px 0px)`;
            return l.value !== o && (t.style.setProperty("clip-path", o, l.priority), l.value = t.style.clipPath), t
        }
        n.d(t, {}, {
            a: function(e) {
                let t = e.ownerDocument,
                    n = t.defaultView,
                    i = new Map,
                    s = new Set,
                    d = !1,
                    u = !1,
                    c = null,
                    p = null,
                    f = "u" > typeof ScrollTimeline && CSS.supports("animation-range", "0px 1px"),
                    g = new Map,
                    h = new WeakMap,
                    m = () => {
                        for (let [e, n] of i)(t.hidden || !1 === g.get(e)) && l(n);
                        if (t.hidden || 0 === i.size) {
                            p = o(p, null);
                            return
                        }
                        let s = (0, a.a)(),
                            d = e.closest("[data-page-document-scroll]"),
                            h = null == d ? null : n?.getComputedStyle(d),
                            m = f && null != d && (h?.overflowY === "auto" || h?.overflowY === "scroll") && d.scrollHeight > d.clientHeight && (r.has(d) || h?.clipPath === "none") ? d : null;
                        c?.source !== m && (c = null == m ? null : new ScrollTimeline({
                            source: m,
                            axis: "block"
                        })), u !== (null == c) && ((u = null == c) ? t.addEventListener("scroll", b, !0) : t.removeEventListener("scroll", b, !0));
                        let y = (d?.clientTop ?? 0) + (parseFloat(h?.scrollPaddingTop ?? "") || 0);
                        if (p = o(p, m, y, (e.currentCSSZoom || 1) / (m?.currentCSSZoom || 1)), Array.from(i.keys()).every(e => !1 === g.get(e))) return;
                        let v = d?.getBoundingClientRect(),
                            w = d?.currentCSSZoom || 1,
                            S = null != d && null != v ? v.top + y * w : 0;
                        for (let e of Array.from(i, e => {
                                let [t, a] = e, {
                                    row: r
                                } = a, l = r.cells[r.cells.length - 1];
                                if (!1 === g.get(t) || null == l) return null;
                                let o = t.getBoundingClientRect(),
                                    i = t.currentCSSZoom || 1,
                                    u = null == a.animation ? a.offset : parseFloat(n?.getComputedStyle(r).translate.split(" ")[1] ?? "") || 0,
                                    p = r.getBoundingClientRect().top - u * i,
                                    f = Math.max(...Array.from(r.cells, e => e.offsetHeight)),
                                    h = Math.max(0, (o.bottom - p) / i - f);
                                if (null != c && null != d) {
                                    let e = d.scrollTop + (p - Math.max(0, S)) / w;
                                    return {
                                        table: t,
                                        pin: a,
                                        width: o.width / i,
                                        animation: {
                                            coverCell: l,
                                            source: d,
                                            start: e,
                                            end: e + h * i / w,
                                            travel: h
                                        },
                                        offset: 0,
                                        clipTop: 0
                                    }
                                }
                                let m = s(t, o),
                                    b = null == m ? 0 : Math.max(0, Math.min((Math.max(m.top, S) - p) / i, h));
                                return {
                                    table: t,
                                    pin: a,
                                    width: o.width / i,
                                    animation: null,
                                    offset: b,
                                    clipTop: b > 0 ? b + (p - o.top) / i : 0
                                }
                            })) {
                            if (null == e) continue;
                            let {
                                table: t,
                                pin: n,
                                animation: a,
                                offset: r,
                                clipTop: o,
                                width: i
                            } = e, s = `${i}px`;
                            if (n.row.style.getPropertyValue("--page-table-pin-cover-width") !== s && n.row.style.setProperty("--page-table-pin-cover-width", s), null != a && null != c) {
                                let e = n.animation;
                                if (e?.source === a.source && e.coverCell === a.coverCell && e.start === a.start && e.end === a.end && e.travel === a.travel || (l(n), n.row.style.removeProperty("translate"), n.row.removeAttribute("data-page-header-cover"), t.style.removeProperty("clip-path"), n.offset = 0, n.clipTop = 0, a.travel <= 0)) continue;
                                n.animation = {
                                    ...a,
                                    cover: a.coverCell.animate([{
                                        opacity: 0
                                    }, {
                                        opacity: 1
                                    }], {
                                        pseudoElement: "::before",
                                        timeline: c,
                                        rangeStart: `${a.start}px`,
                                        rangeEnd: `${Math.min(a.end,a.start+1)}px`,
                                        easing: "steps(1, end)",
                                        fill: "both"
                                    }),
                                    row: n.row.animate([{
                                        translate: "0 0"
                                    }, {
                                        translate: `0 ${a.travel}px`
                                    }], {
                                        timeline: c,
                                        rangeStart: `${a.start}px`,
                                        rangeEnd: `${a.end}px`,
                                        fill: "both"
                                    })
                                };
                                continue
                            }
                            l(n), n.offset !== r && (n.offset = r, n.row.style.setProperty("translate", `0 ${r}px`), n.row.toggleAttribute("data-page-header-cover", r > 0)), n.clipTop !== o && (n.clipTop = o, t.style.clipPath = o > 0 ? `inset(calc(${o}px - var(--spacing) * 6) calc(var(--spacing) * -0.25) calc(var(--spacing) * -0.25))` : "")
                        }
                    },
                    b = n => {
                        let a = n.target;
                        if (a instanceof Element && e.contains(a) && a.hasAttribute("data-page-block-viewport")) {
                            let e = h.get(a),
                                t = a.scrollTop;
                            if (h.set(a, t), e === t) return
                        }(a === t || a instanceof Element && (a.contains(e) || e.contains(a))) && m()
                    },
                    y = new ResizeObserver(m),
                    v = new IntersectionObserver(e => {
                        for (let t of e) g.set(t.target, t.isIntersecting);
                        m()
                    }),
                    w = () => {
                        y.disconnect(), v.disconnect(), s.clear(), g.clear(), t.removeEventListener("scroll", b, !0), t.removeEventListener("visibilitychange", m), n?.removeEventListener("resize", m), d = !1, u = !1, c = null, p = o(p, null)
                    },
                    S = () => {
                        let a = new Map;
                        for (let t of e.querySelectorAll("table[data-page-pinned-header-row]")) {
                            let e = t.rows[0];
                            if (null != e) {
                                let n = i.get(t);
                                a.set(t, n?.row === e ? n : {
                                    row: e,
                                    offset: 0,
                                    clipTop: 0,
                                    animation: null
                                })
                            }
                        }
                        for (let [e, t] of i) a.get(e) !== t && (l(t), t.row.style.removeProperty("translate"), t.row.style.removeProperty("--page-table-pin-cover-width"), t.row.removeAttribute("data-page-header-cover"), e.style.removeProperty("clip-path"), v.unobserve(e), g.delete(e));
                        let r = new Set;
                        for (let e of a.keys()) {
                            i.get(e) !== a.get(e) && v.observe(e);
                            for (let t = e; null != t; t = t.parentElement) r.add(t);
                            null != e.rows[0] && r.add(e.rows[0])
                        }
                        for (let e of s) r.has(e) || y.unobserve(e);
                        for (let e of r) s.has(e) || y.observe(e);
                        s = r, 0 === (i = a).size ? w() : d || (t.addEventListener("visibilitychange", m), n?.addEventListener("resize", m), d = !0), m()
                    };
                return S(), {
                    update: S,
                    destroy() {
                        for (let [e, t] of(w(), i)) l(t), t.row.style.removeProperty("translate"), t.row.style.removeProperty("--page-table-pin-cover-width"), t.row.removeAttribute("data-page-header-cover"), e.style.removeProperty("clip-path");
                        i.clear()
                    }
                }
            }
        })
    }),
    RRx3: (function(e, t, n) {
        n.d(t, {
            a: () => d,
            b: () => p,
            c: () => c,
            d: () => s
        });
        var a = n("Cn5C"),
            r = n("d8ZM"),
            l = n("f6KK"),
            o = n("NoA4"),
            i = "cell-dzjsB_";
        let s = new l.e("pageTableSelection");

        function d() {
            return new l.d({
                key: s,
                state: {
                    init: () => null,
                    apply(e, t, n) {
                        let r = e.getMeta(s);
                        return !1 === r ? null : "pointer" === r || "row" === r || "column" === r ? r : "pointer" === t ? !e.docChanged && e.selection.eq(n.selection) ? t : null : null != t && null == e.getMeta(a.q) && (!e.selectionSet || e.selection.eq(n.selection.map(e.doc, e.mapping))) ? t : null
                    }
                },
                props: {
                    handleDOMEvents: {
                        mousedown(e, t) {
                            if (!e.editable || e.composing || e.hasFocus() && !a.q.getState(e.state)?.isStructureMode || 0 !== t.button || t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || !(t.target instanceof Element) || null != t.target.closest('a, button, input, textarea, select, [contenteditable="false"]')) return !1;
                            let n = t.target.closest("td, th"),
                                {
                                    $head: l
                                } = e.state.selection,
                                o = (0, r.b)(l);
                            return null != n && e.dom.contains(n) && null != o && e.nodeDOM(l.before(o)) !== n && e.dispatch(e.state.tr.setMeta(s, "pointer")), !1
                        },
                        keydown: f,
                        blur: f
                    },
                    decorations(e) {
                        let t = a.q.getState(e);
                        if (!t?.isStructureMode) {
                            let {
                                $head: n
                            } = e.selection, a = t?.isEditMode && "pointer" !== s.getState(e) ? (0, r.b)(n) : null;
                            if (null == a) return null;
                            let l = n.before(a);
                            return o.b.create(e.doc, [o.a.node(l, l + n.node(a).nodeSize, {
                                class: i,
                                "data-page-table-selection-edges": "top bottom start end",
                                "data-page-table-edit-cell": ""
                            })])
                        }
                        let n = c(e);
                        if (null == n) return null;
                        let l = new Set(n.map(e => {
                            let {
                                $from: t
                            } = e;
                            return `${t.index(-2)}:${t.index(-1)}`
                        }));
                        return o.b.create(e.doc, n.map(e => {
                            let {
                                $from: t
                            } = e, n = t.index(-2), a = t.index(-1), r = [];
                            l.has(`${n-1}:${a}`) || r.push("top"), l.has(`${n+1}:${a}`) || r.push("bottom"), l.has(`${n}:${a-1}`) || r.push("start"), l.has(`${n}:${a+1}`) || r.push("end");
                            let s = t.before();
                            return o.a.node(s, s + t.parent.nodeSize, {
                                class: i,
                                "data-page-table-selection-edges": r.join(" ")
                            })
                        }))
                    }
                },
                view(e) {
                    let t = e.dom.ownerDocument,
                        n = t.defaultView,
                        a = new AbortController,
                        l = () => {
                            f(e)
                        };
                    return n?.addEventListener("mouseup", () => {
                        if ("pointer" !== s.getState(e.state)) return;
                        let n = t.getSelection()?.focusNode,
                            a = (n instanceof Element ? n : n?.parentElement)?.closest("td, th"),
                            {
                                $head: o
                            } = e.state.selection,
                            i = (0, r.b)(o);
                        e.dom.contains(n ?? null) && null != i && e.nodeDOM(o.before(i)) !== a || l()
                    }, {
                        signal: a.signal
                    }), n?.addEventListener("pointercancel", l, {
                        signal: a.signal
                    }), n?.addEventListener("blur", l, {
                        signal: a.signal
                    }), {
                        update: u,
                        destroy: () => a.abort()
                    }
                }
            })
        }

        function u(e, t) {
            let {
                doc: n,
                selection: l
            } = e.state;
            if (n !== t.doc || l.head === t.selection.head || !l.empty || !e.editable || !e.hasFocus() || a.q.getState(e.state)?.isStructureMode) return;
            let o = (0, r.b)(l.$head),
                i = (0, r.b)(t.selection.$head);
            if (null == o) return;
            let s = l.$head.before(o);
            if (null != i && t.selection.$head.before(i) === s) return;
            let d = e.nodeDOM(s);
            if (!(d instanceof HTMLTableCellElement)) return;
            let u = d.closest("[data-page-block-viewport]");
            if (null == u || u.scrollWidth <= u.clientWidth) return;
            let c = d.getBoundingClientRect(),
                p = u.getBoundingClientRect();
            if (c.width > p.width) return;
            let f = u.currentCSSZoom || 1,
                g = Math.min((p.width - c.width) / 2, (parseFloat(getComputedStyle(u).scrollPaddingLeft) || 0) * f),
                h = Math.min(0, c.left - p.left - g) + Math.max(0, c.right - p.right + g);
            0 !== h && (u.scrollLeft += h / f)
        }

        function c(e) {
            let t = (0, a.h)(e),
                {
                    $anchor: n
                } = e.selection,
                l = (0, r.b)(n);
            if (null == t || null == l) return null;
            let o = l - 2,
                i = n.node(o),
                s = Math.min(t.anchor.rowIndex, t.head.rowIndex),
                d = Math.max(t.anchor.rowIndex, t.head.rowIndex),
                u = Math.min(t.anchor.columnIndex, t.head.columnIndex),
                c = Math.max(t.anchor.columnIndex, t.head.columnIndex);
            return p(e.doc, i, n.before(o), [s, u, d, c])
        }

        function p(e, t, n, a) {
            let [r, o, i, s] = a, d = [];
            return t.forEach((t, a, u) => {
                if (u < r || u > i) return;
                let c = Math.min(o, t.childCount - 1),
                    p = Math.min(s, t.childCount - 1);
                t.forEach((t, r, o) => {
                    if (o >= c && o <= p) {
                        let o = n + 1 + a + r + 2;
                        d.push(new l.g(e.resolve(o), e.resolve(o + t.content.size)))
                    }
                })
            }), d
        }

        function f(e) {
            return "pointer" === s.getState(e.state) && e.dispatch(e.state.tr.setMeta(s, !1)), !1
        }
    }),
    sGTh: (function(e, t, n) {
        var a = n("HLFh"),
            r = n("WDOy");
        n.d(t, {}, {
            a: function(e, t) {
                return e.steps.every((n, l) => {
                    if (n instanceof r.a) return !0;
                    if (!(n instanceof a.i) || 0 !== n.slice.openStart || 0 !== n.slice.openEnd || !n.slice.content.content.every(e => e.isText)) return !1;
                    let o = e.docs[l],
                        i = o.resolve(n.from),
                        s = o.resolve(n.to);
                    if (!i.parent.isTextblock || !i.sameParent(s) || t?.(i.parent) === !1) return !1;
                    let d = !0;
                    return i.parent.nodesBetween(i.parentOffset, s.parentOffset, e => (d = d && e.isText, !1)), d
                })
            }
        })
    }),
    vEJV: (function(e, t, n) {
        let a = new WeakMap;

        function r(e, t) {
            let n = l(e),
                a = e.dom.ownerDocument;
            return 0 === n.listeners.size && (n.effective = n.pageVisible && !a.hidden, a.addEventListener("visibilitychange", n.changed)), n.listeners.add(t), t(n.effective), () => {
                n.listeners.delete(t), 0 === n.listeners.size && a.removeEventListener("visibilitychange", n.changed)
            }
        }

        function l(e) {
            let t = a.get(e);
            if (null == t) {
                let n = {
                    pageVisible: !0,
                    effective: !e.dom.ownerDocument.hidden,
                    listeners: new Set,
                    changed() {
                        let t = n.pageVisible && !e.dom.ownerDocument.hidden;
                        if (t !== n.effective)
                            for (let e of (n.effective = t, Array.from(n.listeners))) n.listeners.has(e) && e(t)
                    }
                };
                t = n, a.set(e, t)
            }
            return t
        }
        n.d(t, {}, {
            a: function(e, t) {
                let n, a = () => {
                        let e = n;
                        n = void 0, e?.destroy?.()
                    },
                    l = r(e, e => {
                        e ? null == n && (n = t()) : a()
                    });
                return {
                    update(e, t) {
                        n?.update?.(e, t)
                    },
                    destroy() {
                        l(), a()
                    }
                }
            },
            b: function(e) {
                return l(e).pageVisible && !e.dom.ownerDocument.hidden
            },
            c: r,
            d: function(e, t) {
                let n = l(e);
                if (n.pageVisible && !t)
                    for (let t of e.dom.querySelectorAll("audio, video")) t.paused || t.pause();
                n.pageVisible = t, n.changed()
            }
        })
    }),
    Nfrx: (function(e, t, n) {
        var a = n("j4Oi");
        n.d(t, {}, {
            a: function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return null == e ? void 0 : `The current signed-in user can be referenced with this native self mention: ${(0,a.mc)({accountUserId:e.accountUserId,label:e.displayName,mentionId:crypto.randomUUID(),pageId:t})}.${n?" Use it only when the user requests a self mention. It grants no additional Page or person access; do not infer other people from it.":""}`
            }
        })
    })
};