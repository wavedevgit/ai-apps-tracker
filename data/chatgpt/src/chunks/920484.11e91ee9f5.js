export const __rspack_esm_ids = [920484];
export const __webpack_modules__ = {
    puTD: (function(e, t) {
        t.a = {
            PageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
            pageTitlebarSingleRow: "PageTitlebarSingleRow-M8q4Ul",
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
            "page-caret-blink": "page-caret-blink-q7Tadf",
            pageCaretBlink: "page-caret-blink-q7Tadf",
            PageTableFadeLeft: "PageTableFadeLeft-WeE9pg",
            pageTableFadeLeft: "PageTableFadeLeft-WeE9pg",
            PageTableFadeRight: "PageTableFadeRight-WbNNy_",
            pageTableFadeRight: "PageTableFadeRight-WbNNy_",
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
        var a = n("xWaH");
        n.d(t, {}, {
            a: async function(e, t) {
                let n = e === a.k.MARKDOWN ? t : `${e}\0${t}`;
                return Array.from(new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(n))), e => e.toString(16).padStart(2, "0")).join("")
            }
        })
    }),
    xaCE: (function(e, t, n) {
        var a = n("xWaH"),
            l = n("oNJZ"),
            r = n("tINb"),
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
                    b = (0, a.kc)(t),
                    y = m?.ids ?? (0, a.$b)(b).map(e => e.id);
                if (0 === y.length) return 1 !== e.childCount || null == s(e, 0) ? null : {
                    document: t,
                    kind: "empty-document",
                    position: l.createRelativePositionFromTypeIndex(b.order, g < 0 ? 0 : b.order.length, g)
                };
                if (e.childCount === y.length) {
                    if (d < 0 || d > e.content.size) return null;
                    let t = e.resolve(d),
                        n = 0 === t.depth && t.index(0) > 0 && (g < 0 || d === e.content.size);
                    u = t.index(0) - !!n;
                    let a = e.child(u),
                        l = t.depth > 0 ? t.before(1) : d - (n ? a.nodeSize : 0);
                    c = {
                        from: l,
                        node: a
                    }, p = l + a.nodeSize, f = y[u]
                } else {
                    let t = m?.getAnchors() ?? (0, r.k)(e, n, y.length);
                    if (t.length !== y.length) return null;
                    f = y[u = t.findIndex((n, a) => {
                        if (null == n || d < n.from) return !1;
                        let l = i(t, a, e.content.size);
                        return d < (l ?? n.from + n.node.nodeSize) || d === l && (g < 0 || a === t.length - 1)
                    })], c = t[u], p = i(t, u, e.content.size)
                }
                let v = null == f ? null : (0, a.T)(b, f);
                if (null == f || null == v || null == c) return null;
                let w = (0, o.b)(e, t, n, f, {
                        anchor: c,
                        index: u,
                        end: p
                    }),
                    S = w?.toMarkdown(d, g) ?? null;
                if (null == S && 0 === v.text.length && d === s(e, c.from) && (S = 0), null != S) {
                    let e = l.createRelativePositionFromTypeIndex(v.text, S, g);
                    return {
                        blockId: f,
                        document: t,
                        kind: "text",
                        position: e,
                        ..."table" === c.node.type.name ? {
                            textIdentity: (0, a.x)(v, e.item),
                            textIdentityReset: (0, a.eb)(v)
                        } : {}
                    }
                }
                return d !== c.from && d !== p ? null : {
                    blockId: f,
                    document: t,
                    kind: "block-edge",
                    position: l.createRelativePositionFromTypeIndex(v.text, 0),
                    side: d === c.from ? "before" : "after"
                }
            },
            b: function(e, t, n) {
                let l, o = (0, a.$b)((0, a.kc)(t)).map(e => e.id);
                return {
                    editorDocument: e,
                    document: t,
                    markdown: n,
                    ids: o,
                    getAnchors: () => (null == l && (l = (0, r.k)(e, n, o.length)), l)
                }
            },
            c: function(e, t) {
                if (t?.kind !== "text" || void 0 === t.textIdentityReset) return "none";
                let n = (0, a.T)((0, a.kc)(e), t.blockId);
                if (null == n) return "none";
                if (t.textIdentityReset !== (0, a.eb)(n)) return "unresolved";
                if (null == t.textIdentity) return "none";
                let r = (0, a.mc)(n, t.textIdentity, t.position.assoc);
                return null != r ? l.compareIDs(r, t.position.item) ? "none" : "relocated" : (0, a.gb)(n, t.textIdentity) ? "unresolved" : "none"
            },
            d: function(e, t, n, d) {
                let u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : a => (0, o.b)(e, t, n, a),
                    c = (0, a.kc)(t);
                if ("text" === d.kind) {
                    let n = (0, a.T)(c, d.blockId);
                    if (null != n && void 0 !== d.textIdentityReset && d.textIdentityReset !== (0, a.eb)(n)) return null;
                    let r = null == d.textIdentity || null == n ? null : (0, a.mc)(n, d.textIdentity, d.position.assoc),
                        o = null == r ? d.position : new l.RelativePosition(d.position.type, d.position.tname, r, d.position.assoc),
                        i = l.createAbsolutePositionFromRelativePosition(o, t, !1);
                    if (null == n || i?.type !== n.text) return null;
                    let p = u(d.blockId);
                    return p?.toEditor(i.index, d.position.assoc < 0 ? -1 : 1) ?? (0 === n.text.length && null != p ? s(e, p.from) : null)
                }
                let p = l.createAbsolutePositionFromRelativePosition(d.position, t, !1),
                    f = (0, a.$b)(c),
                    g = f.map(e => e.id);
                if ("empty-document" === d.kind) {
                    if (p?.type !== c.order) return null;
                    if (0 === g.length) return s(e, 0);
                    let t = (0, r.k)(e, n, g.length);
                    if (t.length !== g.length) return null;
                    let a = f.findIndex(e => e.rawIndex >= p.index);
                    return a < 0 ? e.content.size : t[a]?.from ?? null
                }
                let h = g.indexOf(d.blockId),
                    m = h < 0 ? null : (0, a.T)(c, d.blockId);
                if (null == m || p?.type !== m.text) return null;
                let b = (0, r.k)(e, n, g.length);
                return b.length !== g.length ? null : "before" === d.side ? b[h]?.from ?? null : i(b, h, e.content.size) ?? null
            }
        })
    }),
    gr2j: (function(e, t, n) {
        var a = n("SZCv"),
            l = n.n(a);

        function r(e) {
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
            a: r,
            b: o,
            c: function(e, t, n, a) {
                let i, s = e.attrs.dilSections ?? [],
                    d = o(e),
                    u = e.children;

                function c(e, t, n) {
                    return null != t && l()(n, t.props) ? t : a(e, n)
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
                    let l = g,
                        o = l + a,
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
                            before: g === l ? m + (d?.before ?? "") + (d?.template.open ?? "") : "",
                            after: g === o - 1 ? d?.template.close : void 0
                        }, m = "", n.set(h, i);
                        let s = !!a.header;
                        e.forEach((e, t, a) => {
                            let l = e.attrs.dilTemplate,
                                o = {
                                    ...l?.props
                                },
                                i = p(e, g, a);
                            i || !0 !== o.header || delete o.header, i && !s && (o.header = !0), e.attrs.colspan !== (o.colSpan ?? 1) && (o.colSpan = e.attrs.colspan), e.attrs.rowspan !== (o.rowSpan ?? 1) && (o.rowSpan = e.attrs.rowspan);
                            let d = r(e);
                            d !== (o.align ?? "start") && (o.align = d);
                            let u = e.attrs.pageColumnWidth;
                            "number" == typeof u ? o.width = u : "number" == typeof o.width && delete o.width;
                            let f = c("table-cell", l, o),
                                m = l?.emptySource,
                                b = null != m && 1 === e.childCount && e.firstChild?.type.name === "paragraph" && !e.firstChild.content.size;
                            n.set(h + t + 1, {
                                emptyCell: b,
                                template: b && l === f ? {
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
            l = n("CHJa"),
            r = n("sQAU"),
            o = n("gr2j");

        function i(e, t, n) {
            e.toggleAttribute("data-d-break-long-token", !t && /\S{25,}/u.test(n))
        }

        function s(e, t) {
            let n = null != e.attrs.dilTemplate,
                l = e.attrs.tag ?? e.attrs.dilTemplate?.tag;
            if (!l?.startsWith("table")) return null;
            let r = n ? e.attrs.dilTemplate.props : e.attrs.presentationProps ?? e.attrs.props,
                s = n ? 0 === e.attrs.rowIndex : r.header,
                d = s ? "th" : "td";
            "table" === l ? d = n ? "table" : "div" : "table-section" === l ? d = r.header ? "thead" : "tbody" : "table-row" === l && (d = "tr");
            let u = t.createElement(d);
            u.dataset.dComponent = l;
            let c = u;
            if ("table" === l) {
                let l = t.createElement("div");
                c = n ? u : t.createElement("table"), u.className = a.c.TableFrame, l.className = a.c.TableViewport, l.dataset.dTableViewport = "", c.className = a.c.Table, u.dataset.dColumnSizing = r.columnSizing ?? "auto", c.dataset.dColumnSizing = r.columnSizing ?? "auto", !1 !== r.dividers && (c.dataset.dDividers = ""), !0 === (n ? e.attrs.pagePinHeaderRow : r.stickyHeader) && (c.dataset.dStickyHeader = ""), c.style.tableLayout = "equal" === r.columnSizing ? "fixed" : "auto", n ? (u.dataset.pageDilNativeTable = "", c = t.createElement("tbody"), u.append(c)) : (l.append(c), u.append(l))
            } else if ("table-row" === l) u.className = a.c.Row;
            else if ("table-cell" === l) {
                let t = n ? (0, o.a)(e) : r.align;
                null != t && (u.dataset.dAlign = t), u.dataset.dValign = r.vAlign ?? "start";
                let l = r.width;
                n && (null != e.attrs.pageColumnWidth || "number" == typeof l) && (l = e.attrs.pageColumnWidth), null != l && (u.dataset.dHasWidth = "", u.style.width = "number" == typeof l ? `${l}px` : l), s && u.setAttribute("scope", "col"), i(u, !!s, e.textContent), null != r.colSpan && u.setAttribute("colspan", String(r.colSpan)), null != r.rowSpan && u.setAttribute("rowspan", String(r.rowSpan)), Object.assign(u.style, (0, a.b)(r.padding))
            } else null != r.rowDivider && (u.dataset.dRowDivider = "", u.style.setProperty("--table-section-row-divider", String((0, a.a)(r.theme || "light", r.rowDivider).border)));
            return {
                dom: u,
                contentDOM: c,
                update: t => t.type === e.type && !!t.sameMarkup(e) && ("table-cell" === l && i(u, !!s, t.textContent), !0),
                ignoreMutation: e => "attributes" === e.type && e.target === u
            }
        }
        n.d(t, {}, {
            a: function(e, t, n) {
                function a(e) {
                    let a = n();
                    if (null == a || a > t.state.doc.content.size) return "cell";
                    let l = t.state.doc.resolve(a);
                    return "row" !== l.parent.type.spec.tableRole ? "cell" : (0, r.b)(l.node(-1), l.index(-1), l.index(), e)
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
                    d = l.b.renderSpec(t.dom.ownerDocument, e.type.spec.toDOM?.(s) ?? ["cell" === o ? "td" : "th", 0]);
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
            b: function(e, t, n, a) {
                let l = e?.getBoundingClientRect(),
                    r = l?.top ?? 0,
                    o = l?.bottom ?? t.innerHeight,
                    i = 0;
                return (n < r + 32 ? i = -Math.min(16, (r + 32 - n) / 2) : n > o - 32 && (i = Math.min(16, (n - o + 32) / 2)), 0 === i || null != a && Math.sign(n - a) !== Math.sign(i)) ? 0 : (null != e ? e.scrollTop += i : t.scrollBy(0, i), i)
            }
        })
    }),
    L0Gp: (function(e, t, n) {
        var a = n("rX7T"),
            l = n("v2Zq"),
            r = n("CHJa"),
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
                    handleKeyDown: (0, l.a)({
                        "Mod-Enter": (e, t, n) => null != n && this.toggleSelectedCheckboxes(n)
                    }),
                    handleDOMEvents: {
                        click: (e, t) => t.target instanceof Element && null != t.target.closest(".task-list-item-checkbox")
                    },
                    nodeViews: {
                        task_list_item: (e, t, n) => {
                            let l = e.type.spec.toDOM;
                            if (null == l) throw Error("Checklist DOM is missing");
                            let {
                                dom: o,
                                contentDOM: i
                            } = r.b.renderSpec(t.dom.ownerDocument, l(e)), s = o.querySelector(".task-list-item-checkbox");
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
                                setChecked: l => {
                                    if (t.isDestroyed || !t.editable) return;
                                    let r = n(),
                                        o = null == r ? null : t.state.doc.nodeAt(r);
                                    null != r && o?.type === e.type && o.attrs.checked !== l && t.dispatch((0, a.e)(t.state.tr.setNodeAttribute(r, "checked", l), {
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
                        $to: l
                    }
                    of(0, s.c)(e).ranges) {
                    if (n.pos === l.pos) {
                        a(n);
                        continue
                    }
                    t.nodesBetween(n.pos, l.pos, (e, r) => {
                        if (!e.isTextblock) return !0;
                        let o = r + 1,
                            i = o + e.content.size;
                        return o < l.pos && i >= n.pos && (i !== n.pos || 0 === e.content.size) && a(t.resolve(o)), !1
                    })
                }
                if (0 === n.size) return !1;
                let l = [...n.values()].some(e => !0 !== e.attrs.checked),
                    r = e.state.tr;
                for (let [e, t] of n) t.attrs.checked !== l && r.setNodeMarkup(e, void 0, {
                    ...t.attrs,
                    checked: l
                });
                return e.dispatch(r), !0
            }
        }
        n.d(t, {}, {
            a: d
        })
    }),
    aWEZ: (function(e, t, n) {
        function a(e, t) {
            let n = e.querySelector(`[data-page-attribution-sizer="${t}"]`),
                a = n?.firstElementChild;
            if (!(a instanceof HTMLElement) || null == n) return null;
            let l = a.offsetWidth;
            return l > 0 && l <= n.clientWidth ? l : null
        }
        n.d(t, {}, {
            a: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e => e.getBoundingClientRect(),
                    t = new Map;
                return function(n) {
                    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e(n),
                        l = n.ownerDocument.defaultView;
                    if (null == l) return null;
                    let r = Math.max(0, a.left),
                        o = Math.min(l.innerWidth, a.right),
                        i = Math.max(0, a.top),
                        s = Math.min(l.innerHeight, a.bottom);
                    if (o <= r || s <= i) return null;
                    for (let a = n.parentElement; null != a; a = a.parentElement) {
                        let n = t.get(a);
                        if (null == n) {
                            let r = l.getComputedStyle(a),
                                o = /auto|scroll|hidden|clip/u.test(r.overflowX),
                                i = /auto|scroll|hidden|clip/u.test(r.overflowY);
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
                        }!1 !== n && (n.x && (r = Math.max(r, n.rect.left), o = Math.min(o, n.rect.right)), n.y && (i = Math.max(i, n.rect.top), s = Math.min(s, n.rect.bottom)))
                    }
                    return o > r && s > i ? DOMRect.fromRect({
                        x: r,
                        y: i,
                        width: o - r,
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
                    l = n.visualViewport,
                    r = l?.width ?? n.innerWidth,
                    o = l?.height ?? n.innerHeight,
                    {
                        x: i,
                        y: s
                    } = a;
                if (null != l && (0 !== l.offsetLeft || 0 !== l.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    i -= t.left + l.pageLeft, s -= t.top + l.pageTop
                }
                let {
                    width: d,
                    height: u
                } = a;
                if (!(d <= 0) && !(u <= 0) && !(i >= r) && !(s >= o) && !(i + d <= 0) && !(s + u <= 0)) return {
                    x: i,
                    y: s,
                    width: d,
                    height: u,
                    viewportWidth: r
                }
            },
            c: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e => e.getBoundingClientRect(),
                    a = e.matches("table") ? e.querySelector("tr") : e.querySelector(':scope > hr, :scope > [data-page-agent-instructions="toggle"], :scope > [data-composer-code-block-toolbar] > [data-page-code-block-controls]');
                if (null != a) return n(a);
                let l = "p, h1, h2, h3, h4, h5, h6, pre",
                    r = e.matches(l) ? e : e.querySelector(l) ?? e,
                    o = n(r),
                    i = r.ownerDocument.defaultView?.getComputedStyle(r),
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
                        x: l,
                        y: r
                    } = t;
                if (null != a && (0 !== a.offsetLeft || 0 !== a.offsetTop)) {
                    let t = e.documentElement.getBoundingClientRect();
                    l -= t.left + a.pageLeft, r -= t.top + a.pageTop
                }
                return {
                    x: l,
                    y: r,
                    width: t.width,
                    height: t.height,
                    viewportWidth: a?.width ?? n.innerWidth
                }
            },
            e: function(e, t) {
                let n = e.closest("[data-page-attribution-position]");
                if (null == n) return !1;
                let a = e.getBoundingClientRect(),
                    l = n.getBoundingClientRect(),
                    r = t.getBoundingClientRect();
                if (!a.width || !a.height || a.left < Math.max(l.left, r.left) || a.right > Math.min(l.right, r.right) || a.top < r.top || a.bottom > r.bottom) return !1;
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
            f: function(e, t, n, l, r) {
                let o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e => e.getBoundingClientRect(),
                    i = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : () => [],
                    s = t.parentElement?.querySelector(":scope > [data-page-reading-column]"),
                    d = t.closest("[data-page-document-scroll]");
                if (null == s || null == d) {
                    e.removeAttribute("data-page-attribution-fits"), e.removeAttribute("data-page-attribution-compact");
                    return
                }
                let u = e => l ? -e.right : e.left,
                    c = u(o(s)),
                    p = o(d).left + d.clientLeft * r,
                    f = l ? -(p + d.clientWidth * r) : p;
                e.style.setProperty("--page-attribution-room", `${(c-f)/r}px`);
                let g = a(e, "full"),
                    h = a(e, "compact"),
                    m = e.clientWidth,
                    b = t.querySelectorAll(':is([data-page-block-layout="full-width"], [data-page-block-layout="flexible"][data-page-block-type="table"]) > [data-page-block-viewport] > :first-child'),
                    y = i(o),
                    v = [],
                    w = c;
                for (let e of b) {
                    let t = o(e);
                    if (t.width <= 0) continue;
                    let n = u(t),
                        a = e.parentElement;
                    if (e.matches("table") && null != a) {
                        let e = u(o(a));
                        n = a.parentElement?.dataset.pageBlockLayout === "full-width" ? e : Math.max(n, e)
                    }
                    n < c && (v.push({
                        start: n,
                        top: t.top,
                        bottom: t.bottom
                    }), w = Math.min(w, n))
                }
                e.style.setProperty("--page-attribution-hover-inset", `${(c-w)/r}px`), e.style.insetInlineEnd = `${((l?-n.left:n.right)-c)/r}px`;
                let S = 0;
                for (let [e, {
                        element: t,
                        label: a,
                        line: l,
                        bottom: o
                    }] of y.entries()) {
                    if (null == l || 0 === l.height || null == o) {
                        t.hidden = !0;
                        continue
                    }
                    for (; v[S]?.bottom <= l.top;) S++;
                    let i = v[S],
                        s = i?.top < l.bottom ? i.start : c,
                        d = (c - s) / r,
                        u = m - d,
                        p = null == g || g > u;
                    t.toggleAttribute("data-page-attribution-compact", p), t.hidden = d > 0 && p && (null == h || h > u);
                    let f = Math.max(o, y[e + 1]?.line?.top ?? o);
                    for (let e = S; v[e]?.top < f; e++) {
                        let t = v[e];
                        if (t.start < s && t.top >= l.bottom) {
                            f = t.top;
                            break
                        }
                    }
                    let b = Math.max(l.bottom, Math.min(o, f));
                    t.style.top = `${(l.top-n.top)/r}px`, t.style.marginInlineEnd = `${d}px`, t.style.height = `${(b-l.top)/r}px`, t.style.setProperty("--page-attribution-hover-tail", `${Math.max(0,f-b)/r}px`), null != a && (a.style.height = `${l.height/r}px`)
                }
                let k = String(null != g || null != h);
                e.toggleAttribute("data-page-attribution-compact", null == g && null != h), e.dataset.pageAttributionFits !== k && (e.dataset.pageAttributionFits = k)
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
    VdCk: (function(e, t, n) {
        var a = n("Kh9O"),
            l = n("H3Qi"),
            r = n("CHJa"),
            o = n("f6KK"),
            i = n("HLFh"),
            s = n("Amdx"),
            d = n("tINb"),
            u = n("CJGP"),
            c = n("RhgW");
        let p = "spacePageEditorPresentationMapping",
            f = "spacePageEditorProjection";

        function g(e, t, n, a) {
            let l = (0, d.h)(e.state.doc, t, n),
                r = e => {
                    (0, d.t)(e, t, n, l)
                },
                o = (0, d.b)(e.state.doc).content,
                s = (0, d.b)(l).content;
            if (o.eq(s)) return a(e.state.tr, [], r);
            let u = o.findDiffStart(s),
                c = o.findDiffEnd(s),
                p = e.state.tr;
            if (null != u && null != c) {
                if (c.a < u || c.b < u) {
                    let e = c.b - c.a;
                    c.a = u + Math.max(0, -e), c.b = u + Math.max(0, e)
                }
                p = p.step(new i.i(u, c.a, l.slice(u, c.b)))
            } else p = p.replaceWith(0, e.state.doc.content.size, l.content);
            return a(p, void 0, r), !0
        }

        function h(e, t, n) {
            let a = n?.(t);
            null == a || a.eq(t.selection) || t.setSelection(a);
            let r = null == a ? null : e.state.storedMarks;
            null == a && t.setStoredMarks(null), e.dispatch(t.setMeta(f, !0).setMeta(l.a, !0).setMeta("addToHistory", !1)), null != r && e.state.selection instanceof o.h && e.state.selection.empty && e.dispatch(e.state.tr.setStoredMarks(e.state.selection.$from.parent.type.allowedMarks(r)))
        }
        n.d(t, {}, {
            a: p,
            b: f,
            c: h,
            d: function(e) {
                let t = e.getMeta(p);
                return t instanceof i.e ? t : e.mapping
            },
            e: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (0, a.a)({
                        isRichTableCellSupportEnabled: !e.state.schema.nodes.table_cell.inlineContent
                    }),
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    o = arguments.length > 4 ? arguments[4] : void 0,
                    f = (a, i, s) => {
                        s?.(a.doc);
                        let f = e.state.tr;
                        if (null == o || o.fromStoredUnits)(0, u.a)(f, a.doc, void 0, !1);
                        else {
                            let e = o.text.project(f, a.doc, o.document, n, o.preservedUnits);
                            o.markNonlocal(f, e)
                        }
                        if (f.setMeta(p, a.mapping), f.docChanged) {
                            f.doc !== a.doc && s?.(f.doc);
                            let t = o?.rowSelectionRelocated ? l?.(f) : null,
                                n = null != o && !o.fromStoredUnits && null == o.preservedUnits && (0, c.a)(e.state, f, o.previousSelection, t, o.rowSelectionAmbiguous),
                                r = l;
                            n ? r = void 0 : null != t && (r = () => t), h(e, f, r)
                        }
                        let g = e.state.doc;
                        if (g !== f.doc && s?.(g), null == i)(0, d.w)(g, t, n);
                        else if (g.childCount === t.length)
                            for (let e of i)(0, d.w)(g.type.createChecked(g.attrs, r.c.from(g.child(e))), [t[e]], n);
                        return (0, d.u)(g, t, n), f.docChanged
                    };
                if (o?.fromStoredUnits) return g(e, t, n, f);
                let m = (0, d.l)(e.state.doc, n),
                    b = Math.min(m.length, t.length),
                    y = 0;
                for (; y < b && (0, s.b)(m[y], t[y]);) y += 1;
                if (y === m.length && y === t.length) return f(e.state.tr, []);
                let v = 0;
                for (; v < b - y && (0, s.b)(m[m.length - v - 1], t[t.length - v - 1]);) v += 1;
                return !!(function(e, t, n, a, l, o) {
                    let s;
                    if (a.length !== t.length) return !1;
                    let u = 0,
                        c = 0,
                        p = 0;
                    if (e.state.doc.childCount === a.length) u = l.start, p = 1, s = e.state.doc.child(l.start), c = e.state.doc.resolve(0).posAtIndex(l.start);
                    else
                        for (let t = 0; t < e.state.doc.childCount && (s = e.state.doc.child(t), p = (0, d.l)(e.state.doc.type.createChecked(e.state.doc.attrs, r.c.from(s)), n).length, !(l.start < u + p)); t += 1) u += p, c += s.nodeSize, s = void 0;
                    if (null == s || 0 === p || a.length - l.suffix > u + p) return !1;
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
                }(e, t, n, m, {
                    start: y,
                    suffix: v
                }, f) || function(e, t, n, a, l) {
                    let o = e.state.doc;
                    if (o.childCount !== a.length || o.childCount !== t.length) return !1;
                    let u = [],
                        c = 0;
                    for (let e = 0; e < a.length; e += 1) {
                        let l = o.child(e),
                            r = c + l.nodeSize;
                        if (!(0, s.b)(a[e], t[e])) {
                            if (/^(?:list|ordered_list)$/u.test(l.type.name)) return !1;
                            let a = (0, d.h)(o, [t[e]], n);
                            if (1 !== a.childCount || /^(?:list|ordered_list)$/u.test(a.child(0).type.name)) return !1;
                            u.push({
                                from: c,
                                index: e,
                                node: a.child(0),
                                to: r
                            })
                        }
                        c = r
                    }
                    if (u.length < 2) return !1;
                    let p = u[0],
                        f = u[u.length - 1],
                        g = o.content.content.slice(p.index, f.index + 1);
                    for (let e of u) g[e.index - p.index] = e.node;
                    return l(e.state.tr.step(new i.i(p.from, f.to, new r.j(r.c.fromArray(g), 0, 0))), u.map(e => {
                        let {
                            index: t
                        } = e;
                        return t
                    })), !0
                }(e, t, n, m, f) || function(e, t, n, a, l, o) {
                    let {
                        start: i,
                        suffix: s
                    } = l, u = e.state.doc;
                    if (u.childCount !== a.length || 0 === t.length) return !1;
                    let c = t.slice(i, t.length - s),
                        p = 0 === c.length ? r.c.empty : (0, d.h)(u, c, n).content;
                    if (p.childCount !== c.length) return !1;
                    for (let e = Math.max(0, i - 1); e <= Math.min(u.childCount - 1, a.length - s); e += 1)
                        if (/^(?:list|ordered_list)$/u.test(u.child(e).type.name)) return !1;
                    for (let e = 0; e < p.childCount; e += 1)
                        if (/^(?:list|ordered_list)$/u.test(p.child(e).type.name)) return !1;
                    let f = u.resolve(0);
                    return o(e.state.tr.replaceWith(f.posAtIndex(i), f.posAtIndex(a.length - s), p), c.map((e, t) => i + t)), !0
                }(e, t, n, m, {
                    start: y,
                    suffix: v
                }, f)) || g(e, t, n, f)
            }
        })
    }),
    XvT2: (function(e, t, n) {
        var a = n("fXhT"),
            l = n("K9a9"),
            r = n("jOAm");
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
                    let o = (0, r.b)(e),
                        f = o ? e.firstChild : e,
                        g = o && f?.attrs.src != null;
                    if (g || c(), !f || !o && e.type.name !== l.a.video && e.type.name !== l.a.file) return;
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
                        let t = (0, a.b)(e.attrs.pageLayout);
                        ("normal" === u || "full-width" === t) && (u = t)
                    }
                }), c(), o.set(e, n), n
            }
        })
    }),
    lY4e: (function(e, t, n) {
        var a = n("lrLr"),
            l = n("AYlW"),
            r = n("vEJV");
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
                l = (e.y - t.y + (e.height - t.height) / 2) / t.height,
                r = `translate(${100*a}%,${100*l}%)`;
            return n ? `${r} scale(${e.width/t.width},${e.height/t.height})` : r
        }
        let u = new WeakSet;
        n.d(t, {}, {
            a: function(e, t, n, u) {
                let c = e.dom.ownerDocument,
                    p = c.defaultView;
                if (!p || !(0, r.b)(e) || (0, a.a)(c)) return () => {};

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
                    if (!(0, r.b)(e)) return;
                    let n = f()?.getBoundingClientRect(),
                        a = (0, l.a)(e.dom.parentElement);
                    if (a && h?.height && n?.height && h.bottom > 0 && h.top < p.innerHeight) {
                        let l = g(n) - g(h);
                        if (void 0 !== u) {
                            let n = i(s(e, t))?.getBoundingClientRect();
                            n && (u < n.top - l || u > n.bottom - l) && (l = n.top - u)
                        }
                        Math.abs(l) > .5 && a.scrollTo({
                            top: a.scrollTop + l / (a.currentCSSZoom || 1),
                            behavior: "instant"
                        })
                    }
                    let c = [];
                    for (let [t, {
                            id: n,
                            box: a
                        }] of m) {
                        let l = t.isConnected && (!n || t.closest("[data-gallery-item]")?.dataset.galleryItem === n) ? t : i(s(e, n)),
                            r = l?.getBoundingClientRect();
                        l && r?.width && r.height && (.5 > Math.max(Math.abs(r.left - a.left), Math.abs(r.top - a.top), Math.abs(r.width - a.width), Math.abs(r.height - a.height)) || c.push({
                            surface: l,
                            transform: d(a, r, !!n)
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
                        y = (0, r.c)(e, e => {
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
            l = n.n(a),
            r = n("Q840"),
            o = n("rpnz"),
            i = n("Wj4L"),
            s = n("e1xH"),
            d = n("gxa4"),
            u = n("EVcm"),
            c = n("hlkZ"),
            p = n("OWtl");
        let f = (0, r.d)(p.a, (e, t) => {
                let {
                    get: n
                } = t, a = new Map;
                if (!n(s.pagesEnabled$) || null == n(c.spaceAccountId$)) return a;
                let {
                    data: l,
                    isError: r,
                    isFetching: o
                } = n(d.a, e);
                for (let e of l?.items ?? []) a.set(e.page_id, "title" in e ? {
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
                        status: r || null != l && !o ? "error" : "loading"
                    })
                }
                for (let [e, t] of a) {
                    if ("resolved" !== t.status) continue;
                    let l = n(c.loadedSpacePageMetadata$, e);
                    null != l && l.access.can_read && null == l.deleted_at && "page" !== (0, i.d)(l) && "unsupported" !== (0, i.d)(l) && a.set(e, {
                        ...t,
                        nativeTitle: l.title ?? void 0
                    })
                }
                return a
            }, {
                isEqual: l()
            }),
            g = (0, r.d)(p.a, (e, t) => {
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
                isEqual: l()
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
                for (let [n, l] of e.steps.entries()) {
                    let r = e.mapping.slice(n + 1),
                        o = (n, a, l, o) => {
                            let i = Math.max(0, r.map(l, -1) - 1),
                                s = Math.min(e.doc.content.size, r.map(o, 1) + 1),
                                d = t.at(-1);
                            null != d && i <= d.to && s >= d.from ? (d.from = Math.min(d.from, i), d.to = Math.max(d.to, s)) : t.push({
                                from: i,
                                to: s
                            })
                        };
                    l instanceof a.c ? o(l.pos, l.pos + 1, l.pos, l.pos + 1) : l instanceof a.a || l instanceof a.f ? o(l.from, l.to, l.from, l.to) : e.mapping.maps[n].forEach(o)
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
            l = n("NoA4"),
            r = n("bf6R"),
            o = n("eKuW"),
            i = n("gywZ"),
            s = n("sGTh"),
            d = n("xWaH"),
            u = n("oNJZ"),
            c = n("lAQI"),
            p = n("Ukaa"),
            f = n("tINb");
        let g = c.F({
            collapsed: c.j()
        });

        function h(e, t, n) {
            let a = new Map,
                l = (0, d.Xb)(e);
            if (null == l) return a;
            let r = (0, d._b)(l),
                o = (0, f.k)(n, t, r.length),
                i = (0, f.l)(n, t);
            if (o.length !== r.length) return a;
            for (let [e, t] of o.entries()) {
                if (null == t) continue;
                let {
                    from: n,
                    node: s
                } = t;
                if ("heading" !== s.type.name || o[e - 1]?.from === n || o[e + 1]?.from === n) continue;
                let u = (0, d.T)(l, r[e]);
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
                        l = b.getState(e.state);
                    l?.sections.forEach((t, n) => {
                        if (t.node === a?.sections[n]?.node) return;
                        let r = e.nodeDOM(t.from);
                        if (!(r instanceof HTMLElement)) return;
                        let o = r.querySelector("[data-page-heading-disclosure]");
                        null != o && o.setAttribute("aria-label", i(t.node, !l.collapsed.has(t.from)))
                    })
                },
                f = (e, n, s, c, p) => {
                    let f = [];
                    for (let e of n) {
                        if (e.contentFrom === e.to) continue;
                        let n = !s.has(e.from);
                        f.push(l.a.widget(e.contentFrom - 1, (l, s) => {
                            let c = l.dom.ownerDocument.createElement("button");
                            return c.type = "button", c.className = "cursor-interaction rounded-lg text-tertiary select-none enabled:hover:bg-secondary-ghost-hover focus:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0", c.dataset.pageHeadingDisclosure = "", c.setAttribute("aria-label", i(e.node, n)), c.setAttribute("aria-expanded", String(n)), c.append(function(e, t, n) {
                                let a = e.createDocumentFragment();
                                for (let l of [16, 20]) {
                                    let r = e.createElement("span");
                                    r.className = 16 === l ? o.a.CompactSource : o.a.LeadingSource, r.setAttribute("aria-hidden", "true"), r.append(t[l].createElement(e, n)), a.append(r)
                                }
                                return a
                            }(c.ownerDocument, {
                                16: r.ac,
                                20: r.bc
                            }, n ? void 0 : "-rotate-90 rtl:rotate-90")), c.addEventListener("click", () => {
                                let e = s();
                                if (null == e || l.isDestroyed) return;
                                let r = c === c.ownerDocument.activeElement,
                                    o = l.state.doc.resolve(e).before(),
                                    i = b.getState(l.state)?.sections.find(e => e.from === o);
                                if (null == i) return;
                                let p = l.state.tr.setMeta(b, {
                                    toggle: o
                                });
                                if (l.state.selection.to >= i.contentFrom && l.state.selection.from < i.to && p.setSelection(a.h.create(p.doc, i.contentFrom - 1)), l.dispatch(p), l.editable && null != t && function(e, t, n, a) {
                                        let l = !1;
                                        return e.mutateDocument(r => {
                                            let o = h(r, e.markdown, t).get(n);
                                            if (null == o) return;
                                            let i = (0, d.Xb)(r),
                                                s = null == i ? void 0 : (0, d.T)(i, o.id);
                                            if (null == s) return;
                                            if (l = !0, !a) return void s.metadata?.delete("heading");
                                            let c = s.metadata ?? new u.Map;
                                            null == s.metadata && s.block.set("metadata", c), c.set("heading", {
                                                collapsed: !0
                                            })
                                        }) && l
                                    }(t, l.state.doc, o, n) && l.dispatch(l.state.tr.setMeta(b, {
                                        refresh: !0,
                                        saved: o
                                    })), r) {
                                    let e = l.nodeDOM(o);
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
                    if (null == c) return l.b.create(e, f);
                    let g = 0,
                        m = 0;
                    return e.forEach((e, t) => {
                        for (; g < c.length && c[g].contentFrom <= t;) m = Math.max(m, c[g++].to);
                        t < m && f.push(l.a.node(t, t + e.nodeSize, {
                            "data-page-section-hidden": "",
                            "aria-hidden": "true"
                        }))
                    }), l.b.create(e, f)
                };
            return new a.d({
                key: b,
                state: {
                    init: (e, t) => {
                        let a = n(t.doc),
                            l = C(t.doc),
                            r = new Set([...a].filter(e => {
                                let [, t] = e;
                                return t.collapsed
                            }).map(e => {
                                let [t] = e;
                                return t
                            })),
                            o = r.size ? l.filter(e => r.has(e.from)) : null;
                        return {
                            collapsed: r,
                            hiddenSections: o,
                            overrides: new Map,
                            defaults: a,
                            decorations: f(t.doc, l, r, o, a),
                            sections: l,
                            headingsChanged: !1
                        }
                    },
                    apply: (e, t) => {
                        let a = e.getMeta(b);
                        if (!e.docChanged && null == a && (!e.selectionSet || 0 === t.collapsed.size || !t.sections.some(n => t.collapsed.has(n.from) && e.selection.to >= n.contentFrom && e.selection.from < n.to))) return t;
                        let l = (0, s.a)(e, e => "heading" !== e.type.name),
                            r = t.sections;
                        e.docChanged && (r = l ? t.sections.map(t => ({
                            ...t,
                            from: e.mapping.map(t.from, 1),
                            contentFrom: e.mapping.map(t.contentFrom, -1),
                            to: e.mapping.map(t.to, -1)
                        })) : C(e.doc));
                        let o = l || (0, s.a)(e),
                            i = !a?.refresh && (t.headingsChanged || r.length !== t.sections.length || r.some((e, n) => {
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
                        for (let n of r) {
                            let l = d.get(n.from),
                                r = l?.id ?? n.from;
                            g.add(r), a?.saved === n.from && u.delete(r);
                            let o = u.get(r) ?? l?.collapsed ?? !1;
                            a?.toggle === n.from && (o = !t.collapsed.has(n.from), u.set(r, o)), o && (a?.reveal != null && a.reveal >= n.contentFrom && a.reveal < n.to || (e.selectionSet || e.docChanged || a?.refresh) && e.selection.to >= n.contentFrom && e.selection.from < n.to) && (o = !1, u.set(r, !1)), o && (c.add(n.from), null == p && (p = []), p.push(n))
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
                            decorations: l && !a?.refresh && c.size === t.collapsed.size && [...t.collapsed].every(t => c.has(e.mapping.map(t, 1))) ? t.decorations.map(e.mapping, e.doc) : f(e.doc, r, c, p, d),
                            sections: r,
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
                        l = !0,
                        r = !1,
                        o = !1,
                        i = e => {
                            l = l || function(e, t) {
                                let n = (0, d.Xb)(e);
                                if (null == n) return !1;
                                let a = new Map;
                                for (let [e, l] of t.changed) {
                                    if (e === n.order) return !0;
                                    if (e instanceof u.Map) {
                                        if (e === n.blocksById) return !0;
                                        a.set(e, l)
                                    }
                                }
                                if (0 === a.size) return !1;
                                for (let l of (0, p.b)(e, t)) {
                                    let e = (0, d.T)(n, l);
                                    if (null == e || a.has(e.block)) return !0;
                                    let t = null == e.metadata ? void 0 : a.get(e.metadata);
                                    if (t?.has("heading") || t?.has(d.l)) return !0
                                }
                                return !1
                            }(a, e)
                        },
                        s = () => {
                            a !== t.getDocument() && (a.off("afterTransaction", i), (a = t.getDocument()).on("afterTransaction", i), l = !0, n = void 0), (l || b.getState(e.state)?.headingsChanged) && n !== t.getRevision() && (l = !1, n = t.getRevision(), r || (r = !0, queueMicrotask(() => {
                                r = !1, o || e.isDestroyed || (e.dispatch(e.state.tr.setMeta(b, {
                                    refresh: !0
                                })), e.editable && function(e, t) {
                                    let n = e.getDocument(),
                                        a = (0, d.Xb)(n);
                                    if (null == a) return;
                                    let l = (0, d._b)(a).filter(e => (0, d.T)(a, e)?.metadata?.has("heading"));
                                    if (0 === l.length) return;
                                    let r = new Set(Array.from(h(n, e.markdown, t).values(), e => {
                                            let {
                                                id: t
                                            } = e;
                                            return t
                                        })),
                                        o = l.filter(t => {
                                            let n = (0, d.T)(a, t);
                                            return null != n && !r.has(t) && ("markdown" !== n.kind || e.markdown.parse(n.text.toJSON()).firstChild?.type.name !== "heading")
                                        });
                                    o.length > 0 && e.mutateDocument(e => {
                                        let t = (0, d.Xb)(e);
                                        if (null != t)
                                            for (let e of o)(0, d.T)(t, e)?.metadata?.delete("heading")
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
            let l = e.selection instanceof a.h ? e.selection.$cursor : null;
            if (!n?.editable || l?.depth !== 1 || l.parent.type !== e.schema.nodes.heading) return !1;
            let r = M(e);
            if (!r?.length) return !1;
            let o = l.before(),
                i = l.parentOffset === l.parent.content.size,
                s = 0 === l.parentOffset,
                d = (i ? r.find(e => e.from === o) : void 0) ?? (s ? r.find(e => e.to === o) : void 0);
            if (null == d) return !1;
            if (t) {
                let n = e.schema.nodes.paragraph.create({
                        sectionBreakLevel: d.level
                    }),
                    l = e.tr.insert(d.to, n);
                l.setSelection(a.h.create(l.doc, d.to + 1)), t(l.scrollIntoView())
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
            return e.forEach((a, l) => {
                let r = "heading" === a.type.name ? a.attrs.level : (0, i.a)(a)?.node.attrs.sectionBreakLevel;
                if (null == r) return;
                for (; n.length > 0 && n[n.length - 1].level >= r;) {
                    let e = n.pop();
                    null != e && (e.to = l)
                }
                if ("heading" !== a.type.name) return;
                let o = {
                    from: l,
                    contentFrom: l + a.nodeSize,
                    to: e.content.size,
                    level: a.attrs.level,
                    node: a
                };
                t.push(o), n.push(o)
            }), t
        }
    }),
    jOAm: (function(e, t, n) {
        var a = n("xWaH"),
            l = n("o7rp"),
            r = n("fXhT"),
            o = n("uhrq"),
            i = n("VZGO"),
            s = n("K9a9"),
            d = n("dQ4w");
        let u = ["normal", "full-width"],
            c = new Map([
                ["code_block", {
                    defaultLayout: "normal",
                    options: r.c.options
                }],
                ["table", {
                    defaultLayout: "normal",
                    options: r.c.options
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
            p = l.b().int().min(0).max(a.f).catch(0),
            f = l.b().positive();

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
                    l = "table_cell" === e,
                    i = "table_row" === e,
                    s = c.get(e)?.defaultLayout ?? "normal";
                if (!l && !i && !t.group?.split(" ").some(e => "block" === e || "list_item" === e)) return t;
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
                        ...l ? {
                            pageColumnWidth: {
                                default: null
                            }
                        } : {},
                        ...i ? {
                            pageRowHeight: {
                                default: null
                            }
                        } : {},
                        ...!l && !i ? {
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
                        tag: l && "td" === e.tag ? "td, th" : e.tag,
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
                                ...l ? {
                                    pageColumnWidth: f.safeParse(o.getAttribute("data-page-column-width")).data ?? null
                                } : {},
                                ...i ? {
                                    pageRowHeight: f.safeParse(o.getAttribute("data-page-row-height")).data ?? null
                                } : {},
                                ...!l && !i ? {
                                    pageLayout: (0, r.b)(o.getAttribute("data-page-layout") ?? s)
                                } : {}
                            }
                        }
                    } : e),
                    toDOM: null == d ? void 0 : s => {
                        let u = d(s),
                            c = (0, r.b)(s.attrs.pageLayout),
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
                                ...l && null != s.attrs.pageColumnWidth ? {
                                    "data-page-column-width": s.attrs.pageColumnWidth
                                } : {},
                                ...l && (0, o.b)(s) ? {
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
                            if ("dom" in u && null != s.attrs.dilTemplate && (a || i || l))
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
            c: () => R,
            d: () => L,
            e: () => I,
            f: () => T,
            g: () => z,
            h: () => A,
            i: () => $
        });
        var a = n("bDc1"),
            l = n("nC2v"),
            r = n("rX7T"),
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
                l = e.reduce((e, t) => e + t, 0),
                r = t - (e.length - 1) * n,
                o = Math.min(r / l, a),
                i = Math.max(0, (r - o * l) / 2);
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
            let l = e[2 * !!t],
                r = e[+!t],
                o = e[t ? 1 : 2],
                i = (n - a * (1 + l)) / (1 + l * (1 / r + 1 / o)),
                s = i / r + a + i / o,
                d = s * l,
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
                    height: i / r
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
        let E = new o.e("pageBlockLayout");

        function T(e) {
            return E.getState(e)?.galleries != null
        }

        function A(e, t) {
            e.isDestroyed || T(e.state) === t || (t || e.dom.dispatchEvent(new Event("page-gallery-disabled")), e.dispatch(e.state.tr.setMeta(E, t).setMeta("addToHistory", !1)))
        }

        function P(e) {
            let t = null == e ? void 0 : function() {
                    let e, t, n, a, l, r = (l = new WeakMap, (e, t) => {
                            if (!e) return S(t) ?? w(t);
                            let n = l.get(e);
                            return (n || (n = {
                                authored: function(e) {
                                    let t = (0, v.e)(e.attrs.geometry),
                                        n = e.attrs.src;
                                    if (!t || "string" != typeof n || t.file_id !== (0, c.h)(n)) return;
                                    let a = t.crop;
                                    return t.width * (1 - (a?.left ?? 0) - (a?.right ?? 0)) / (t.height * (1 - (a?.top ?? 0) - (a?.bottom ?? 0)))
                                }(e)
                            }, l.set(e, n)), void 0 !== n.authored) ? n.authored : (n.decoded = w(t) ?? n.decoded, n.decoded || (n.hint = S(t) ?? n.hint), n.decoded ?? n.hint)
                        }),
                        o = new Map,
                        i = new Set,
                        d = new WeakMap;

                    function u(e, t) {
                        let n = e.querySelectorAll("[data-gallery-slot]");
                        for (let [a, l] of(e.style.height = t.height + "px", t.cells.entries())) {
                            let {
                                x: e,
                                y: t,
                                width: r,
                                height: o
                            } = l;
                            Object.assign(n[a].style, {
                                insetInlineStart: e + "px",
                                top: t + "px",
                                width: r + "px",
                                height: o + "px"
                            })
                        }
                    }

                    function p(n) {
                        let a = e;
                        if (!a || !n.isConnected) return;
                        let l = t?.membership.get(n.dataset.galleryGroup ?? "");
                        if (!l) return;
                        let {
                            imageById: o
                        } = (0, f.a)(a.state.doc);
                        if (n.style.height && a.dom.closest("[data-page-content-dragging]")) return;
                        let i = n.offsetWidth || a.dom.offsetWidth || 736,
                            s = parseFloat(getComputedStyle(n).columnGap),
                            c = l.members.map(e => {
                                let t = o.get(e),
                                    n = t && a.nodeDOM(t.from);
                                return r(t?.media, n instanceof HTMLElement ? n : null)
                            }),
                            p = JSON.stringify([i, s, c]);
                        if (n.dataset.geometry === p) return;
                        n.dataset.geometry = p;
                        let g = function(e, t) {
                            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 4,
                                a = e.map(e => null != e && Number.isFinite(e) && e > 0 ? Math.max(1e-5, Math.min(1e5, e)) : 1.5);
                            if (!a.length || t <= 0 || !Number.isFinite(t)) return {
                                cells: [],
                                height: 0
                            };
                            let l = Math.max(0, Math.min(Number.isFinite(n) ? n : 4, t / 10)),
                                [r, o, i] = a,
                                s = 2 === a.length && t < 576 && Math.min(r, o) >= 1.8 && Math.max(r, o) >= 2.35,
                                d = 3 === a.length && (r >= 2.35 || r >= 1.15 && o < .8 * r && i >= 1.1) && o + i >= 1.5;
                            if (s || d) {
                                let e = b([r], t, l),
                                    n = b(a.slice(1), t, l),
                                    o = e.height + l;
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
                                                    l = Math.max(0, Math.log(.48 * t / Math.min(n.width, n.height)));
                                                return e + Math.log(a / t) ** 2 + 2 * l ** 2
                                            }, 0)
                                        }(t, p) + h[e + t.cells.length] + n;
                                    a < h[e] - 1e-9 && (g[e] = t, h[e] = a)
                                };
                                for (let r = 1; r <= Math.min(4, a.length - e); r++) {
                                    let o = a.slice(e, e + r),
                                        i = 1 === r && a.length > 1 && o[0] < 2.35,
                                        s = b(o, t, l, f),
                                        d = 2 * s.cells[0].x / t;
                                    n(s, .9 * !!i + d ** 2), 3 === r && (n(y(o, !1, t, l)), n(y(o, !0, t, l)))
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
                                m += t.height + l, e += t.cells.length
                            }
                            return {
                                cells: v,
                                height: m - l
                            }
                        }(c, i, s);
                        for (let [e, t] of(d.set(l, {
                                key: p,
                                band: g
                            }), u(n, g), g.cells.entries())) {
                            let {
                                x: n,
                                y: r,
                                width: o,
                                height: i
                            } = t, s = l.members[e];
                            for (let [e, t] of Object.entries({
                                    x: n,
                                    y: r - g.height,
                                    width: o,
                                    height: i
                                })) a.dom.style.setProperty(`--${s}-${e}`, t + "px")
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
                        decorations(e, a) {
                            let l = [];
                            for (let {
                                    id: r,
                                    from: c,
                                    node: p
                                }
                                of e.media) {
                                let f = e.membership.get(r);
                                if (l.push(s.a.node(c, c + p.nodeSize, {
                                        "data-page-media-item": r,
                                        ...e.imageById.has(r) && {
                                            "data-gallery-item": r
                                        },
                                        ...f && {
                                            "data-gallery-member": f.id,
                                            "data-gallery-layout": f.layout,
                                            class: (0, g.b)("pointer-events-none relative m-0! h-0! min-h-0! p-0! rtl:[--gallery-direction:-1]", x(f.layout)),
                                            style: M(r)
                                        }
                                    }, {
                                        pageGallery: null != f
                                    })), f?.members[0] === r) {
                                    let e, r = a.resolve(c).nodeBefore,
                                        p = (0, m.e)(r?.type.name, "paragraph");
                                    l.push(s.a.widget(c, (t, a) => (e = t.dom, function(e, t, a, l) {
                                        let r = t.dom.ownerDocument,
                                            s = r.createElement("div");
                                        s.className = "grid cursor-default [grid-template-columns:inherit]", s.dataset.pageBlockSpacing = l, s.dataset.pageLayoutSpan = String(e.members.length), s.setAttribute("aria-hidden", "true");
                                        let c = r.createElement("section");
                                        for (let t of (c.className = (0, g.b)("relative isolate [grid-column:var(--gallery-column,reading)] [margin-inline:var(--gallery-start-margin,0px)_var(--gallery-end-margin,0px)] min-w-0 cursor-default gap-1", x(e.layout)), c.dataset.galleryGroup = e.id, c.dataset.galleryLayout = e.layout, e.members)) {
                                            let e = r.createElement("span");
                                            e.className = "pointer-events-none absolute", e.dataset.gallerySlot = t, c.append(e)
                                        }
                                        let p = d.get(e);
                                        return p && (u(c, p.band), c.dataset.geometry = p.key), s.append(c), o.set(c, {
                                            row: s,
                                            getPos: a
                                        }), p || i.add(c), n?.observe(c), s
                                    }(f, t, a, p)), {
                                        key: JSON.stringify([f.layout, p, ...f.members]),
                                        side: -1,
                                        ignoreSelection: !0,
                                        stopEvent: () => !0,
                                        destroy: a => {
                                            let l = a instanceof HTMLElement ? a.firstElementChild : null;
                                            if (l instanceof HTMLElement && (n?.unobserve(l), o.delete(l), i.delete(l), t?.membership.get(f.id) !== f))
                                                for (let t of (d.delete(f), f.members))
                                                    for (let n of ["x", "y", "width", "height"]) e?.style.removeProperty(`--${t}-${n}`)
                                        }
                                    }))
                                }
                            }
                            return l
                        },
                        mount(l) {
                            e = l;
                            let r = new AbortController,
                                {
                                    signal: s
                                } = r;
                            for (let e of (n = new ResizeObserver(e => {
                                    for (let {
                                            target: t
                                        }
                                        of e) t instanceof HTMLElement && p(t)
                                }), o.keys())) n.observe(e);
                            let d = (0, h.c)(l.state),
                                u = t,
                                c = () => {
                                    for (let {
                                            row: e,
                                            getPos: t
                                        }
                                        of o.values()) {
                                        let n = t(),
                                            a = null != n && d?.some(e => n >= e.contentFrom && n < e.to) === !0;
                                        e.hidden !== a && (e.hidden = a, e.classList.toggle("grid", !a))
                                    }
                                },
                                f = () => {
                                    for (let e of (c(), o.keys())) p(e);
                                    i.clear()
                                };
                            return l.dom.addEventListener("load", e => {
                                let t = e.target;
                                if (!(t instanceof HTMLImageElement)) return;
                                let n = t.closest("[data-gallery-member]")?.dataset.galleryMember;
                                if (!n) return;
                                let a = l.dom.querySelector(`[data-gallery-group="${CSS.escape(n)}"]`);
                                a && p(a)
                            }, {
                                capture: !0,
                                signal: s
                            }), l.dom.addEventListener("gallery-drag-end", f, {
                                signal: s
                            }), f(), {
                                update(e, n) {
                                    let r = (0, h.c)(l.state),
                                        o = u !== t || r?.length !== d?.length || r?.some((e, t) => e.node !== d?.[t].node);
                                    d = r, u = t, (o || i.size > 0) && c(), (n.doc !== l.state.doc || i.size) && (i.forEach(p), i.clear(), a?.(), a = void 0)
                                },
                                destroy() {
                                    a = void 0, r.abort(), n?.disconnect(), n = void 0, e = void 0
                                }
                            }
                        }
                    }
                }(),
                n = (e, n) => {
                    let l = n ? (0, f.a)(e) : void 0;
                    return {
                        galleries: l,
                        decorations: function(e) {
                            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.forEach((n, l, r) => {
                                let o = (0, m.e)(e.maybeChild(r - 1)?.type.name, n.type.name);
                                if (n.type.name === u.a && n.descendants((e, n) => {
                                        if ("table" === e.type.spec.tableRole && null != e.attrs.dilTemplate) {
                                            let r = l + n + 1,
                                                o = r + e.nodeSize;
                                            t.push(s.a.node(r, o, {
                                                nodeName: "div",
                                                class: a.c.TableViewport,
                                                "data-d-table-viewport": "",
                                                "data-page-block-viewport": "",
                                                style: "overflow-x: auto"
                                            }), s.a.node(r, o, {
                                                nodeName: "div",
                                                class: a.c.TableFrame,
                                                "data-d-column-sizing": e.attrs.dilTemplate.props.columnSizing ?? "auto",
                                                "data-page-block-type": "table"
                                            }))
                                        }
                                        return !e.isTextblock
                                    }), "paragraph" === n.type.name) {
                                    "body" !== o && t.push(s.a.node(l, l + n.nodeSize, {}, {
                                        pageBlockSpacing: o
                                    }));
                                    return
                                }
                                let i = N(n) ? "normal" : (0, d.a)(n),
                                    c = (0, m.b)(n);
                                t.push(s.a.node(l, l + n.nodeSize, {
                                    nodeName: "div",
                                    "data-page-block-viewport": "",
                                    class: "table" === n.type.name ? "horizontal-scroll-fade-mask" : void 0,
                                    "data-page-pinned-header-column": "table" === n.type.name && !0 === n.attrs.pageHeaderColumn && !0 === n.attrs.pagePinHeaderColumn ? "" : void 0
                                }), s.a.node(l, l + n.nodeSize, {
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
                        }(e, l ? t?.decorations(l, e) : void 0)
                    }
                };
            return new o.d({
                key: E,
                view: t && (e => (0, C.a)(e, () => t.mount(e))),
                state: {
                    init: (t, a) => n(a.doc, !0 === e),
                    apply(e, a) {
                        var l;
                        let r = null != a.galleries,
                            o = e.getMeta(E);
                        return t && "boolean" == typeof o && o !== r ? n(e.doc, o) : e.docChanged ? (l = e).steps.every((e, t) => {
                            if (!(e instanceof i.i) || 0 !== e.slice.openStart || 0 !== e.slice.openEnd || !e.slice.content.content.every(e => e.isInline)) return !1;
                            let n = l.docs[t],
                                a = n.resolve(e.from);
                            if (!a.parent.isTextblock || !a.sameParent(n.resolve(e.to))) return !1;
                            let r = a.node(1),
                                o = (l.docs[t + 1] ?? l.doc).resolve(e.from).node(1);
                            return r.sameMarkup(o) && (0, m.b)(r) === (0, m.b)(o) && (!(0, m.b)(r) || r.firstChild === o.firstChild) && N(r) === N(o)
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
                        } : n(e.doc, r) : a
                    }
                },
                props: {
                    nodeViews: {
                        paragraph(e, t, n, a) {
                            let r, o = t.dom.ownerDocument.createElement("p"),
                                i = n(),
                                s = null != i && 0 === t.state.doc.resolve(i).depth,
                                u = s ? D(t.dom.ownerDocument, e, o) : null,
                                c = o.parentElement,
                                p = (e, a) => {
                                    let i = N(e) ? "normal" : (0, d.b)(e.attrs.pageLayout),
                                        s = (0, m.b)(e);
                                    if ("normal" === i ? o.removeAttribute("data-page-layout") : o.setAttribute("data-page-layout", i), null != u) {
                                        u.dataset.pageBlockSpacing = a.find(e => null != e.spec.pageBlockSpacing)?.spec.pageBlockSpacing ?? "body";
                                        let d = a.some(e => !0 === e.spec.pageGallery);
                                        if (null != c && r !== d) {
                                            for (let e of "[grid-column:var(--gallery-column,reading)]! cursor-default justify-self-start self-start pointer-events-auto m-0! ms-[var(--gallery-start-margin,0px)]! min-w-0 w-(--gallery-width) [translate:calc(var(--gallery-direction,1)*var(--gallery-x))_var(--gallery-y)]".split(" ")) c.classList.toggle(e, d);
                                            o.classList.toggle("mx-0!", d), r = d
                                        }
                                        u.dataset.pageBlockLayout = i, s ? u.dataset.pageImageBlock = "true" : delete u.dataset.pageImageBlock;
                                        let p = l.c.getState(t.state),
                                            f = n();
                                        p?.decorations.find().some(t => t.from === f && t.to === t.from + e.nodeSize) ? o.setAttribute("data-writing-block-empty-placeholder", "function" == typeof p.placeholderText ? p.placeholderText(t.state.selection) : p.placeholderText) : o.removeAttribute("data-writing-block-empty-placeholder")
                                    }
                                };
                            return p(e, a), {
                                dom: u ?? o,
                                contentDOM: o,
                                update: (a, l) => {
                                    let r = n();
                                    return a.type === e.type && null != r && 0 === t.state.doc.resolve(r).depth === s && (p(a, l), !0)
                                }
                            }
                        }
                    },
                    decorations(e) {
                        let n = this.getState(e);
                        t?.prepare(n?.galleries);
                        let a = n?.decorations,
                            {
                                $head: l
                            } = e.selection;
                        if (null == a || 0 === l.depth) return a;
                        let r = [s.a.node(l.before(1), l.after(1), {
                            "data-page-active-block": ""
                        })];
                        for (let e = l.depth; e > 1; e--)
                            if (l.node(e).type.isInGroup("list_item")) {
                                r.push(s.a.node(l.before(e), l.after(e), {
                                    "data-page-active-list-item": ""
                                }));
                                break
                            } return H(a.add(e.doc, r), r.length > 1 ? l.before(1) : void 0)
                    }
                }
            })
        }

        function D(e, t, n) {
            let a = e.createElement("div");
            if (a.dataset.pageBlockRow = "", a.dataset.pageBlockType = t.type.name, a.dataset.pageBlockLayout = N(t) ? "normal" : (0, d.a)(t), null != n) {
                let t = e.createElement("div");
                t.dataset.pageBlockViewport = "", t.append(n), a.append(t)
            }
            return a
        }

        function I(e) {
            let t = 0 === e.depth ? e.pos : e.before(1),
                n = e.doc.nodeAt(t);
            return n?.type.spec.attrs?.pageLayout == null ? null : {
                from: t,
                node: n
            }
        }

        function L(e, t) {
            return R(e.nodeDOM(t))
        }

        function R(e) {
            if (!(e instanceof HTMLElement)) return null;
            if (!e.hasAttribute("data-page-block-row") || e.hasAttribute("data-page-viewport-placeholder")) return e;
            let t = e.firstElementChild?.firstElementChild;
            return t instanceof HTMLElement ? t : null
        }

        function z(e, t, n) {
            if (e.isDestroyed || !e.editable || t.from > e.state.doc.content.size || e.state.doc.nodeAt(t.from) !== t.node) return !1;
            let a = e.state.tr;
            return $(a, t.from, n), !a.docChanged || (e.dispatch((0, r.e)(a, {
                preserveSelection: !0
            })), e.focus(), !0)
        }

        function $(e, t, n) {
            let a = e.doc.nodeAt(t);
            null == a || ("table" === a.type.name && a.attrs.pageTableAutoExpand && e.setNodeAttribute(t, "pageTableAutoExpand", !1), (0, d.b)(a.attrs.pageLayout) !== n && e.setNodeAttribute(t, "pageLayout", n), a.type.name === p.a && null != a.attrs.geometry && e.setNodeAttribute(t, "geometry", null), ("list" === a.type.name || "ordered_list" === a.type.name) && a.descendants((a, l) => {
                a.type.spec.attrs?.pageLayout != null && (0, d.b)(a.attrs.pageLayout) !== n && e.setNodeAttribute(t + 1 + l, "pageLayout", n)
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
            a: () => I,
            b: () => E,
            c: () => R,
            d: () => H,
            e: () => A,
            f: () => T,
            g: () => P,
            h: () => L,
            i: () => C,
            j: () => z,
            k: () => D
        });
        var a = n("CHJa"),
            l = n("f6KK"),
            r = n("NoA4"),
            o = n("UKCO"),
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
            let l = t,
                r = (0, h.x)(m.a, l),
                o = (0, h.x)(y.f, l?.kind === "page" && null != l.blockId ? l : null),
                s = r || o || e.title;
            return a[2] !== e || a[3] !== s ? (n = (0, f.jsx)(b.a, {
                ...e,
                title: s
            }), a[2] = e, a[3] = s, a[4] = n) : n = a[4], n
        }
        var w = n("VdCk"),
            S = n("Rtkh"),
            k = n("kTTh"),
            M = n("YCVA"),
            x = n("oin1");
        let C = new l.e("spacePageLinks");

        function E(e, t) {
            let {
                currentPageId: n,
                getLink: f,
                getPastedLinkStatus: g,
                getCachedPageTitle: h,
                getPendingLinks: m,
                loadingPageLabel: y,
                privatePageLabel: E,
                onOpen: T,
                unavailablePageLabel: A,
                untitledPageLabel: P
            } = e, D = (e, a) => {
                let l = [];
                for (let {
                        authoredLabel: m,
                        blockId: w,
                        from: S,
                        isMention: x,
                        pageId: C,
                        to: D,
                        remove: I
                    }
                    of e) {
                    let e = a.doc.slice(S, D),
                        L = f(C, w),
                        R = g?.(a, S, D),
                        z = "private" === R || "error" === R;
                    z && ("unresolved" === L.status || "loading" === L.status || "error" === L.status) && (L = {
                        status: R
                    });
                    let $ = (x || "loading" === R) && "loading" === L.status || "loading" === R && "unresolved" === L.status ? h?.(C) ?? y : void 0,
                        H = null != $ || "loading" !== L.status,
                        N = (0, i.d)(m),
                        B = N?.kind === "page" && N.id === C || x && m === C ? "" : m,
                        O = $ ?? ("resolved" === L.status ? L.nativeTitle || L.page.title.trim() || B || P : ({
                            unresolved: B || P,
                            loading: y,
                            error: A,
                            unavailable: A,
                            private: E
                        })[L.status]),
                        W = null != $ || "resolved" === L.status || B.length > 0 && "unavailable" !== L.status && "private" !== L.status ? (0, k.a)(O, void 0, void 0, "resolved" === L.status ? L.page.symbol : void 0) : null,
                        _ = "resolved" === L.status && null != w ? B : "",
                        q = {
                            pageId: C,
                            length: D - S,
                            text: _ || (W?.title ?? O),
                            element: null,
                            widget: null
                        },
                        F = e => {
                            q.element = e.dom.ownerDocument.createElement("span");
                            let a = W?.icon ?? d.Xi;
                            "private" === L.status ? a = d.Te : "resolved" === L.status && (a = (0, s.createElement)(C === n ? v : b.a, {
                                href: (0, i.a)({
                                    kind: "page",
                                    id: C,
                                    blockId: w
                                }),
                                textRef: C !== n && _ ? void 0 : {
                                    current: q.element
                                },
                                title: O
                            }));
                            let l = (0, u.b)({
                                    dataAttributes: {
                                        "aria-label": _ || O,
                                        role: "group"
                                    },
                                    fontWeight: "inherit",
                                    icon: a,
                                    interactive: H,
                                    text: q.text,
                                    textElement: q.element
                                }),
                                r = e.dom.ownerDocument.createElement(H ? "a" : "span");
                            r.contentEditable = "false";
                            let c = `/space/${encodeURIComponent(C)}${null==w?"":`#${w}`}`;
                            return r.dataset.pageLinkTooltip = H && null == I ? new URL(c, o.yb).toString() : O, r.append(l), "private" === L.status && (r.dataset.pageLinkPrivateId = C), t.register(r, l), H && (r.dataset.pageLinkId = C, r.setAttribute("data-inline-mention-interactive", ""), H ? r.setAttribute("href", c) : r.setAttribute("role", "button"), r.tabIndex = 0, r.classList.add("cursor-pointer"), l.classList.add("cursor-pointer"), r.addEventListener("click", e => {
                                e.stopPropagation(), H && !(0, M.a)(e) || (e.preventDefault(), ("loading" !== f(C).status || null != $ || z) && T(C, w, e))
                            }), r.addEventListener("keydown", e => {
                                ("Enter" === e.key || " " === e.key) && (e.preventDefault(), e.stopPropagation(), r.click())
                            })), r
                        },
                        K = e => {
                            e.contains(q.element) && (q.element = null, q.widget = null), t.unregister(e)
                        };
                    if (x) {
                        l.push(r.a.node(S, D, {}, {
                            authoredLabel: m,
                            blockId: w,
                            isMention: x,
                            pageId: C,
                            source: e,
                            pageLinkLabel: q,
                            render: F,
                            destroy: K
                        }));
                        continue
                    }
                    let V = new WeakMap,
                        j = new WeakMap;
                    l.push(r.a.widget(S, e => {
                        let t = V.get(e);
                        if (null != t) return t.references += 1, t.dom;
                        let n = F(e);
                        return q.widget = n, V.set(e, {
                            dom: n,
                            references: 1
                        }), j.set(n, e), n
                    }, {
                        marks: (0, p.a)(a.doc, S),
                        side: 1,
                        remove: I,
                        pageLinkLabel: q,
                        destroy: e => {
                            let t = j.get(e),
                                n = null == t ? void 0 : V.get(t);
                            if (null != t && null != n) {
                                if (n.references -= 1, n.references > 0) return;
                                V.delete(t), j.delete(e)
                            }
                            K(e)
                        }
                    })), S !== D && l.push(r.a.inline(S, D, {
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
                return l
            }, I = e => r.b.create(e.doc, D(m?.(e.doc).map(e => {
                let {
                    pageId: t,
                    label: n,
                    position: a,
                    remove: l
                } = e;
                return {
                    authoredLabel: n ?? "",
                    pageId: t,
                    from: a,
                    isMention: !1,
                    to: a,
                    remove: l
                }
            }) ?? [], e)), L = e => {
                let t = $(e.doc);
                return {
                    decorations: r.b.create(e.doc, D(t, e)),
                    pendingDecorations: I(e),
                    targetIds: [...new Set(t.map(e => {
                        let {
                            pageId: t
                        } = e;
                        return t
                    }))].sort((e, t) => e.localeCompare(t))
                }
            };
            return new l.d({
                key: C,
                props: {
                    nodeViews: {
                        pageReferenceMention(e, t, n, l, r) {
                            let o = l.find(e => {
                                let {
                                    spec: t
                                } = e;
                                return !0 === t.isMention
                            });
                            if (null == o) {
                                let o = t.state.plugins.find(e => e !== C.get(t.state) && e.props.nodeViews?.pageReferenceMention != null)?.props.nodeViews?.pageReferenceMention;
                                return o?.(e, t, n, l, r) ?? a.b.renderSpec(t.dom.ownerDocument, S.a.toDOM(e))
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
                        let r = (t, n, a) => {
                                let l = C.getState(e.state)?.decorations;
                                for (let {
                                        from: e,
                                        spec: r
                                    }
                                    of l?.find(t, t) ?? []) {
                                    let l = r.pageLinkLabel;
                                    if (e === t && n === l?.widget?.parentNode && n?.childNodes[a - 1] === l.widget) return e + l.length
                                }
                                return t
                            },
                            o = r(t.pos, a.anchorNode, a.anchorOffset),
                            i = r(n.pos, a.focusNode, a.focusOffset);
                        if (o === t.pos && i === n.pos) return null;
                        let s = e.domAtPos(o, -1),
                            d = e.domAtPos(i, -1);
                        return a.setBaseAndExtent(s.node, s.offset, d.node, d.offset), l.h.create(e.state.doc, o, i)
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
                            let a = O(e.state, n.head, n.head).find(e => "ArrowLeft" === t.key ? n.head > e.from && n.head <= e.to : n.head >= e.from && n.head < e.to);
                            if (null == a) return !1;
                            let r = "ArrowLeft" === t.key ? a.from : a.to;
                            return e.dispatch(e.state.tr.setSelection(l.h.create(e.state.doc, t.shiftKey ? n.anchor : r, r)).scrollIntoView()), !0
                        }
                        if (!e.editable || "Backspace" !== t.key && "Delete" !== t.key) return !1;
                        let a = N(e, n.from, n.to);
                        if (n.empty && a) return !0;
                        if (t.altKey || t.ctrlKey || t.metaKey) return !1;
                        if (!n.empty) {
                            let t = B(e.state, n.from, n.to);
                            return (t.from !== n.from || t.to !== n.to) && (e.dispatch(e.state.tr.delete(t.from, t.to).scrollIntoView()), !0)
                        }
                        let {
                            from: r
                        } = n, o = O(e.state, r, r).find(e => "Backspace" === t.key ? r > e.from && r <= e.to : r >= e.from && r < e.to);
                        return null != o && (e.dispatch(e.state.tr.delete(o.from, o.to).scrollIntoView()), !0)
                    },
                    handleTextInput(e, t, n, a) {
                        t !== n && N(e, t, n);
                        let l = B(e.state, t, n);
                        return (l.from !== t || l.to !== n) && (e.dispatch(e.state.tr.insertText(a, l.from, l.to).scrollIntoView()), !0)
                    }
                },
                state: {
                    apply(e, t, n, a) {
                        if (e.getMeta(C)) {
                            if (e.docChanged) return L(a);
                            let n = t.decorations.find(void 0, void 0, W).flatMap(e => {
                                let {
                                    from: t,
                                    spec: n,
                                    to: a
                                } = e, {
                                    authoredLabel: l,
                                    blockId: r,
                                    isMention: o,
                                    pageId: i
                                } = n;
                                return "string" == typeof i ? [{
                                    authoredLabel: l,
                                    blockId: r,
                                    from: t,
                                    isMention: o,
                                    pageId: i,
                                    to: a
                                }] : []
                            });
                            return {
                                decorations: r.b.create(a.doc, D(n, a)),
                                pendingDecorations: I(a),
                                targetIds: t.targetIds
                            }
                        }
                        if (!e.docChanged) return t;
                        let o = e.getMeta("appendedTransaction"),
                            i = !0 === e.getMeta(w.b) || o instanceof l.i && !0 === o.getMeta(w.b),
                            s = !1,
                            d = t.decorations.map(e.mapping, a.doc, {
                                onRemove: e => {
                                    s = s || W(e)
                                }
                            });
                        for (let t of (0, x.a)(e)) {
                            let e = d.find(t.from, t.to),
                                n = t.from,
                                l = t.to;
                            for (let t of e) n = Math.min(n, t.from), l = Math.max(l, t.to);
                            let r = $(a.doc, n, l);
                            for (let e of r) n = Math.min(n, e.from), l = Math.max(l, e.to);
                            let o = d.find(n, l).filter(e => e.from === e.to ? e.from >= n && (e.from < l || e.from === l && !0 === e.spec.inlineMentionEndBoundary) : e.from < l && e.to > n);
                            if (0 === o.length && 0 === r.length) continue;
                            let i = $(a.doc, n, l),
                                u = o.filter(e => {
                                    let {
                                        spec: t
                                    } = e;
                                    return W(t)
                                });
                            i.length > 0 && i.length === u.length && i.every((e, t) => {
                                let {
                                    from: n,
                                    to: l,
                                    spec: r
                                } = u[t], o = r.source;
                                return e.from === n && e.to === l && o.eq(a.doc.slice(n, l))
                            }) || (s = !0, d = d.remove(o).add(a.doc, D(i, a)))
                        }
                        return {
                            decorations: d,
                            pendingDecorations: i ? I(a) : t.pendingDecorations.map(e.mapping, a.doc),
                            targetIds: s ? [...new Set(d.find(void 0, void 0, W).flatMap(e => {
                                let {
                                    spec: t
                                } = e, {
                                    pageId: n
                                } = t;
                                return "string" == typeof n ? [n] : []
                            }))].sort((e, t) => e.localeCompare(t)) : t.targetIds
                        }
                    },
                    init: (e, t) => L(t)
                }
            })
        }

        function T(e) {
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

        function I(e, t, n, a) {
            let {
                state: l
            } = e, r = l.schema.nodes.pageReferenceMention.create({
                path: (0, i.a)(a),
                title: ""
            }, null, (0, p.a)(l.doc, t));
            e.dispatch(l.tr.replaceWith(t, n, r).scrollIntoView()), e.focus()
        }

        function L(e, t) {
            let n = R(e.state, t);
            null != n && (e.dispatch(n.scrollIntoView()), e.focus())
        }

        function R(e, t, n) {
            let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
                l = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                r = e.schema.nodes.pageReferenceMention;
            if (null == r) return null;
            let o = r.create({
                path: (0, i.a)({
                    kind: "page",
                    id: t
                }),
                title: a
            });
            return l && null != n && 0 === e.doc.resolve(n).depth ? e.tr.insert(n, e.schema.nodes.paragraph.create(null, o)) : null == n ? e.tr.replaceSelectionWith(o) : e.tr.replaceRangeWith(n, n, o)
        }

        function z(e) {
            var t;
            let n, a = (0, i.d)(e);
            return a?.kind === "page" ? a.id : (n = (t = e).startsWith("page:") ? t.slice(5) : "", /^page_[A-Za-z0-9][A-Za-z0-9_-]{0,122}$/u.test(n) ? n : null)
        }

        function $(e) {
            let t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : e.content.size,
                l = [];
            return n >= a || e.nodesBetween(n, a, (e, n) => {
                if ("pageReferenceMention" === e.type.name) {
                    let a = e.attrs.path,
                        r = "string" == typeof a ? (0, i.d)(a) : null;
                    return r?.kind === "page" && l.push({
                        authoredLabel: e.attrs.title,
                        blockId: r.blockId,
                        from: n,
                        isMention: !0,
                        pageId: r.id,
                        to: n + e.nodeSize
                    }), t = void 0, !1
                }
                if (!e.isText) {
                    t = void 0;
                    return
                }
                let a = e.marks.find(e => "link" === e.type.name),
                    r = a?.attrs.title === a?.attrs.href ? void 0 : a?.attrs.href,
                    o = "string" == typeof r ? (0, i.d)(r) : null,
                    s = "string" == typeof r ? z(r) : null;
                if (null == s) {
                    t = void 0;
                    return
                }
                let d = l.at(-1),
                    u = n + e.nodeSize;
                d?.pageId === s && d.to === n && t === r ? (d.authoredLabel += e.textContent, d.to = u) : l.push({
                    authoredLabel: e.textContent,
                    blockId: o?.kind === "page" ? o.blockId : void 0,
                    from: n,
                    isMention: !1,
                    pageId: s,
                    to: u
                }), t = r
            }), l
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
            let a = B(e.state, t.from, t.to);
            return a.from === t.from && a.to === t.to ? n : n.setSelection(l.h.create(n.doc, a.from, a.to))
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

        function B(e, t, n) {
            let a = t,
                l = n;
            for (let r of O(e, t, n))(t === n && t > r.from && t < r.to || t < r.to && n > r.from) && (a = Math.min(a, r.from), l = Math.max(l, r.to));
            return {
                from: a,
                to: l
            }
        }

        function O(e, t, n) {
            let a = C.getState(e)?.decorations;
            return null == a ? [] : a.find(Math.max(0, t - 1), Math.min(e.doc.content.size, n + 1), e => W(e) && !e.isMention).flatMap(e => {
                let {
                    from: t,
                    spec: n,
                    to: a
                } = e, {
                    authoredLabel: l,
                    blockId: r,
                    isMention: o,
                    pageId: i
                } = n;
                return "string" == typeof i ? [{
                    authoredLabel: l,
                    blockId: r,
                    from: t,
                    isMention: o,
                    pageId: i,
                    to: a
                }] : []
            })
        }

        function W(e) {
            return null != e.pageId
        }
    }),
    MrSV: (function(e, t, n) {
        n.d(t, {
            a: () => S,
            b: () => k
        });
        var a = n("LSvd"),
            l = n("sSh9"),
            r = n("f6KK"),
            o = n("NoA4"),
            i = n("UKCO"),
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
            let l = e.createElement("span");
            return l.className = "whitespace-normal", l.textContent = t, n.append(a, l), n
        }
        var m = n("YS7P"),
            b = n("km7q"),
            y = n("BWum"),
            v = n("uhrq"),
            w = n("puTD");

        function S(e, t, n) {
            let S, k, {
                    checkboxes: M,
                    loadingLabels: x,
                    plugins: C = [],
                    onOpenLink: E,
                    pageLinks: T
                } = n,
                A = e => {
                    if (null == T) return;
                    k?.(), k = void 0;
                    let t = (0, b.e)(e.state);
                    t.length > 0 && (k = T.scope.watch(n => {
                        let {
                            get: a
                        } = n;
                        S = a(g.b, {
                            sourcePageId: T.pageId,
                            targetPageIds: t
                        }), (0, b.k)(e)
                    }))
                },
                P = null == T ? [] : [(0, b.b)({
                    getLink: e => S?.get(e) ?? {
                        status: "loading"
                    },
                    loadingPageLabel: T.intl.formatMessage({
                        id: "codex.space.page.linkLoading",
                        defaultMessage: "Loading page…"
                    }),
                    privatePageLabel: T.intl.formatMessage(u.g),
                    unavailablePageLabel: T.intl.formatMessage(u.h, {
                        kind: "page"
                    }),
                    untitledPageLabel: T.intl.formatMessage(c.c.untitled),
                    onOpen: (e, t, n) => {
                        let a = new URL(`/space/${encodeURIComponent(e)}`, i.yb);
                        null != t && (a.hash = t), E?.(n, a.toString())
                    }
                }, T.icons), new r.d({
                    view: () => ({
                        update: (e, t) => {
                            e.state.doc !== t.doc && A(e)
                        },
                        destroy: () => k?.()
                    })
                })],
                D = new o.c(e, {
                    state: r.b.create({
                        doc: (0, f.b)(t),
                        plugins: (0, a.b)(M.plugin, (0, y.a)({
                            renderSavedWidths: !0
                        }), (0, v.a)(), (0, m.a)(), (0, d.d)(), ...P, ...C)
                    }),
                    attributes: {
                        class: `${l.a.content} ${w.a.PageDocument} ${w.a.PagePreview}`
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
                            if (null != E && "string" == typeof a) {
                                n.setAttribute("href", a);
                                let e = e => {
                                    e.preventDefault(), E(e, a)
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
                l = a.content.findDiffStart(n.content),
                r = a.content.findDiffEnd(n.content);
            if (null == l || null == r) return;
            let o = l - Math.min(r.a, r.b);
            o > 0 && (r.a += o, r.b += o);
            let i = e.state.tr.replace(l, r.a, n.slice(l, r.b));
            e.updateState(e.state.apply(i))
        }
    }),
    CJGP: (function(e, t, n) {
        var a = n("IlTK"),
            l = n("CHJa"),
            r = n("HLFh"),
            o = n("tINb");
        let i = Symbol("uncertainColumnSplice");
        class s extends r.i {
            ranges;
            constructor(e, t, n, a) {
                super(e, t, n), this.ranges = a
            }
            getMap() {
                return new r.k(this.ranges)
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
                                ranges: l
                            }
                            of t?.values() ?? []) {
                            let t = e.resolve(l[0]).start(),
                                r = 0;
                            for (let e = 0; e < l.length; e += 3) {
                                let o = l[e],
                                    i = l[e + 1],
                                    s = l[e + 2],
                                    d = o - t + r;
                                a.push({
                                    from: o,
                                    to: o + i,
                                    slice: n.slice(d, d + s)
                                }), r += s - i
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
                        let o = new r.m(e);
                        for (let {
                                from: e,
                                to: t,
                                slice: i
                            }
                            of a.sort((e, t) => t.from - e.from))
                            if (n) {
                                if (t > e && o.maybeStep(new r.i(e, t, l.j.empty)).failed || i.size > 0 && o.maybeStep(new r.i(e, e, i)).failed) return null
                            } else if (o.maybeStep(new r.i(e, t, i)).failed) return null;
                        return o
                    }(v, n, d);
                for (let t of w?.steps ?? []) e.step(t);
                let S = (c = e.doc, p = t, f = null == w ? n : void 0, g = u, h = [], m = [], b = new Set, {
                        node: (y = (e, t, n, a, r) => {
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
                                if (null != r ? o = function(e, t, n) {
                                        let {
                                            start: a,
                                            suffix: l
                                        } = n, r = 0, o = 0;
                                        for (let t = 0; t < a; t++) r += e.child(t).nodeSize;
                                        for (let t = 0; t < l; t++) o += e.child(e.childCount - t - 1).nodeSize;
                                        return [r, e.size - r - o, t.size - r - o]
                                    }(s.content, d.content, r) : s.inlineContent || s.childCount === d.childCount || (o = function(e, t) {
                                        let n = Math.min(e.childCount, t.childCount),
                                            a = 0,
                                            l = 0;
                                        for (; a < n && e.child(a).eq(t.child(a));) l += e.child(a).nodeSize, a += 1;
                                        let r = 0,
                                            o = 0;
                                        for (; r < n - a && e.child(e.childCount - r - 1).eq(t.child(t.childCount - r - 1));) o += e.child(e.childCount - r - 1).nodeSize, r += 1;
                                        return a + r === n ? [l, e.size - l - o, t.size - l - o] : null
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
                                    let r = [],
                                        o = 0,
                                        u = !1,
                                        p = "table" === s.type.name ? function(e, t, n) {
                                            let a = e.firstChild?.childCount ?? 0,
                                                l = t.firstChild?.childCount ?? 0,
                                                r = Math.min(a, l);
                                            if (0 === r || a === l || e.children.some(e => e.childCount !== a) || t.children.some(e => e.childCount !== l) || [e, t].some(e => e.children.some(e => e.children.some(e => 1 !== e.attrs.colspan || 1 !== e.attrs.rowspan)))) return;
                                            let o = o => {
                                                let i = (n, a) => e.children.every((e, l) => {
                                                        let r = e.child(n),
                                                            i = t.child(l).child(a);
                                                        return r.eq(i) || o && r.hasMarkup(i.type, {
                                                            ...i.attrs,
                                                            pageColumnWidth: r.attrs.pageColumnWidth
                                                        }, i.marks) && r.content.eq(i.content)
                                                    }),
                                                    s = 0;
                                                for (; s < r && i(s, s);) s++;
                                                let d = 0;
                                                for (; d < r && i(a - d - 1, l - d - 1);) d++;
                                                let u = r - d;
                                                return null != n && u <= n && n <= s ? {
                                                    start: n,
                                                    suffix: r - n
                                                } : null == n && u <= s ? {
                                                    start: u,
                                                    suffix: r - s
                                                } : void 0
                                            };
                                            return void 0 !== n && null == n ? i : o(!1) ?? o(!0) ?? i
                                        }(s, d, g?.get(t)) : void 0;
                                    p === i && b.add(n), e.forEach((e, l, s) => {
                                        let d = t.child(s),
                                            c = y(e, d, n + 1 + l, a + 1 + o, p === i ? void 0 : p);
                                        r.push(c), u = u || c !== d, o += d.nodeSize
                                    }), u && (c = l.c.fromArray(r))
                                }
                            }
                            return u ? e.copy(c) : t.copy(c)
                        })(c, p, -1, -1),
                        ranges: h,
                        markup: m,
                        uncertainTables: b
                    }),
                    [k, M, x, C, E, T] = S.ranges;
                if (0 === S.uncertainTables.size && 6 === S.ranges.length && M > 0 && E > 0 && k + M === C) {
                    let t = C + x - M;
                    e.step(new r.i(C, C + E, S.node.slice(t, t + T))), e.step(new r.i(k, k + M, S.node.slice(k, k + x)))
                } else(e.docChanged || S.node !== v) && (e.step(new s(0, e.doc.content.size, new l.j(S.node.content, 0, 0), S.ranges)), (0, a.b)(e.mapping.maps[e.mapping.maps.length - 1], S.uncertainTables));
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
            l = n("en1Z"),
            r = n("CHJa"),
            o = n("f6KK"),
            i = n("lAQI"),
            s = n("Uguk");
        let d = i.F({
            positions: i.g(i.E().int().nonnegative())
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
                            l = 0;
                        for (let e of n) a = Math.min(a, e), l = Math.max(l, e);
                        let r = [];
                        return 0 === n.size || e.nodesBetween(a, l + 1, (e, t) => ((function e(t, o) {
                            if (!t.isBlock || o > l || o + t.nodeSize <= a) return !1;
                            if (n.has(o)) return r.push({
                                from: o,
                                node: t
                            }), !0;
                            if (t.isTextblock || t.isLeaf) return !1;
                            let i = r.length,
                                d = t.childCount > 0;
                            return t.forEach((t, n) => {
                                d = e(t, o + 1 + n) && d
                            }), d && (0, s.b)(t) && r.splice(i, r.length - i, {
                                from: o,
                                node: t
                            }), d
                        })(e, t), !1)), r
                    })(e, t).map(t => {
                        let {
                            from: a,
                            node: l
                        } = t, r = e.resolve(a), i = e.resolve(a + l.nodeSize), s = n.at(-1);
                        return s?.$to.pos === a && s.$from.sameParent(r) ? n[n.length - 1] = new o.g(s.$from, i) : n.push(new o.g(r, i)), a
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
                        $to: r
                    }
                    of this.ranges) {
                    let o = (0, a.a)(n.doc.slice(n.pos, r.pos, !0), n),
                        i = (0, l.a)(o.content, o.openStart, o.openEnd),
                        s = n.sameParent(r) && ("list" === n.parent.type.name || "ordered_list" === n.parent.type.name) ? n.before() : void 0,
                        d = t.at(-1);
                    null != s && s === e && null != d && 1 === i.childCount && i.firstChild?.type === d.type ? t[t.length - 1] = d.copy(d.content.append(i.firstChild.content)) : t.push(...i.content), e = s
                }
                return new r.j(r.c.from(t), 0, 0)
            }
            replace(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.j.empty;
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
                    } = t, l = e.mapResult(n, 1), r = e.mapResult(a, -1);
                    return l.pos < r.pos && !(l.deletedAcross && r.deletedAcross) ? [{
                        from: l.pos,
                        to: r.pos
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
                    let l = e.nodeAt(n);
                    return l?.isBlock && n + l.nodeSize === a ? [n] : []
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
        var a = n("xWaH"),
            l = n("Cn5C"),
            r = n("f6KK"),
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
                $from: l,
                $to: r
            } = a, o = (0, d.a)(e.state.doc, t, n, l.pos, 1), s = (0, d.a)(e.state.doc, t, n, r.pos, -1);
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
                l = a instanceof r.h && a === e.state.selection ? (0, p.c)(e.state) : null,
                o = null == l ? "text" : "table";
            return a instanceof f.a ? o = "blocks" : a instanceof r.c && (o = "node"), {
                nativeSelection: a,
                kind: o,
                ranges: l ?? a.ranges,
                isTableAxisSelection: null != l && w(e.state),
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
                        } else t instanceof r.c ? a.push({
                            from: t.from,
                            node: t.node
                        }) : (t instanceof r.h || t instanceof r.a) && !t.empty && n.nodesBetween(t.from, t.to, (e, n) => "list" === e.type.name || "ordered_list" === e.type.name || (e.isBlock && (t instanceof r.a || t.to > n + 1 && t.from < n + e.nodeSize - 1) && a.push({
                            from: n,
                            node: e
                        }), !1));
                        return a.flatMap(t => {
                            let {
                                from: n,
                                node: a
                            } = t, l = (0, c.d)(e, n);
                            return null != l && null == l.closest("[data-page-generate-prompt], [data-page-generate-original]") ? [{
                                from: n,
                                node: a,
                                element: l
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
                    let l = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    return [(0, u.a)(t.getSnapshot().commentActor, a, l), function(e, t, n) {
                        let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
                        if (null != e && !e.isDestroyed) return "Current Page selection for this message: " + JSON.stringify(v(e).ranges.flatMap(a => {
                            let {
                                $from: l,
                                $to: r
                            } = a;
                            if (l.pos === r.pos) return [];
                            let o = y(e, t, n, a);
                            return [{
                                from_block_id: o.fromBlockId,
                                to_block_id: o.toBlockId,
                                from_markdown_offset: o.fromMarkdownOffset,
                                to_markdown_offset: o.toMarkdownOffset,
                                from_block_edge: o.fromBlockEdge,
                                to_block_edge: o.toBlockEdge,
                                text: e.state.doc.textBetween(l.pos, r.pos, "\n")
                            }]
                        })) + (a ? "\n" + o.a : "")
                    }(e, t.document, n, l)].filter(Boolean).join("\n\n")
                }
            },
            b: async function(e, t, n) {
                if (e.isDestroyed) return;
                let l = [];
                for (let a of v(e).ranges) {
                    if (a.$from.pos === a.$to.pos) continue;
                    let r = y(e, t, n, a),
                        {
                            fromBlockId: o,
                            toBlockId: i
                        } = r;
                    if (null == o || !b.test(o) || null == i || !b.test(i) || null == r.fromMarkdownOffset && null == r.fromBlockEdge || null == r.toMarkdownOffset && null == r.toBlockEdge) return;
                    l.push({
                        ...r,
                        fromBlockId: o,
                        toBlockId: i
                    })
                }
                if (0 === l.length) return {
                    ranges: [],
                    blocks: []
                };
                let r = (0, a.$b)((0, a.kc)(t)),
                    o = new Map(r.map((e, t) => [e.id, t])),
                    i = new Set;
                for (let {
                        fromBlockId: e,
                        toBlockId: t
                    }
                    of l) {
                    let n = o.get(e),
                        a = o.get(t);
                    if (null == n || null == a || n > a) return;
                    for (let e = n; e <= a; e++) i.add(e)
                }
                let d = r.filter((e, t) => i.has(t));
                if (d.every(e => {
                        let {
                            id: t
                        } = e;
                        return b.test(t)
                    })) return {
                    ranges: l,
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
                    } = e.ranges[t], l = n.pos, r = a.pos;
                    for (let e = n.depth; e > 0 && l === n.end(e); e--) l = n.after(e);
                    for (let e = a.depth; e > 0 && r === a.start(e); e--) r = a.before(e);
                    if (l !== r) return null
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
                let {
                    $from: t,
                    $to: n
                } = e;
                return e instanceof r.h && t.parent.isTextblock && "paragraph" === n.parent.type.name && 0 === n.parent.content.size && t.after() === n.before() ? t.doc.resolve(t.end()) : n
            },
            h: function(e) {
                let t = v(e),
                    n = new Set;
                return h.set(e, {
                    getSnapshot: () => t,
                    subscribe: e => (n.add(e), () => n.delete(e))
                }), {
                    update(e, a) {
                        let r = l.q.getState(e.state),
                            o = l.q.getState(a);
                        (e.state.selection !== a.selection || e.state.doc !== a.doc || r?.isStructureMode !== o?.isStructureMode || r?.isStructureMode && (r.structureSelectionAnchor !== o?.structureSelectionAnchor || r.structureSelectionHead !== o?.structureSelectionHead || w(e.state) !== w(a))) && (t = v(e), n.forEach(e => e()))
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
            l = n("f6KK"),
            r = n("tezj"),
            o = n("Ph7x");

        function i(e) {
            let {
                parent: t
            } = e, n = t.type.schema.nodes.paragraph, a = e.index();
            return t.canReplaceWith(a, a, n) && (t.type.name !== r.c || (0, o.a)(String(t.attrs.tag), n.create()))
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
                            return i(n) ? new s(n) : l.f.near(n)
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
            for (let l of e) {
                let e = [],
                    r = 0;
                for (let a of l) {
                    for (; n[r] > 0;) r += 1;
                    e.push(r);
                    let l = t(a),
                        o = Math.min(1e3, Math.max(1, parseInt(String(l.colSpan), 10) || 1)),
                        i = parseInt(String(l.rowSpan), 10),
                        s = i >= 0 ? Math.min(65534, i) : 1;
                    for (let e = 0; e < o; e += 1) n[r + e] = 0 === s ? 1 / 0 : s;
                    r += o
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
                    let l = a(n, e => e),
                        r = n.map(() => 0);
                    n.forEach((e, t) => e.forEach((e, a) => {
                        let o = 0 === e.rowSpan ? n.length : Math.min(n.length, t + e.rowSpan),
                            i = l[t][a] + e.colSpan;
                        for (let e = t; e < o; e++) r[e] = Math.max(r[e], i)
                    })), n.forEach((n, a) => {
                        let o = [],
                            i = "THEAD" === e.tagName || n[0]?.tagName === "TH" ? "th" : "td";
                        for (n.forEach((e, n) => {
                                for (; o.length < l[a][n];) o.push(t.createElement(i));
                                e.removeAttribute("rowspan"), e.removeAttribute("colspan"), o.push(e)
                            }); o.length < r[a];) o.push(t.createElement(i));
                        e.rows[a].replaceChildren(...o)
                    })
                }
                return t.body.innerHTML
            }
        })
    }),
    BWum: (function(e, t, n) {
        var a = n("CHJa"),
            l = n("f6KK"),
            r = n("NoA4"),
            o = n("sGTh"),
            i = n("vEJV"),
            s = n("tc1t"),
            d = n("sQAU"),
            u = n("ebwD"),
            c = n("Pva4");

        function p(e, t) {
            let n = a.b.fromSchema(e.type.schema).nodes[e.type.name],
                l = a.b.renderSpec(t.dom.ownerDocument, n(e));
            if (!(l.dom instanceof HTMLElement)) return l;
            let r = l.dom,
                o = e,
                i = new Map(Array.from(r.attributes, e => {
                    let {
                        name: t,
                        value: n
                    } = e;
                    return [t, n]
                }));
            return {
                dom: r,
                contentDOM: l.contentDOM,
                update(e) {
                    if (e.type !== o.type) return !1;
                    if (!e.sameMarkup(o)) {
                        let l = a.b.renderSpec(t.dom.ownerDocument, n(e)).dom;
                        if (!(l instanceof HTMLElement) || l.tagName !== r.tagName || l.getAttribute("class") !== (i.get("class") ?? null) || l.getAttribute("style") !== (i.get("style") ?? null)) return !1;
                        for (let e of i.keys()) l.hasAttribute(e) || r.removeAttribute(e);
                        for (let {
                                name: e,
                                value: t
                            }
                            of Array.from(l.attributes)) i.get(e) !== t && r.setAttribute(e, t);
                        i = new Map(Array.from(l.attributes, e => {
                            let {
                                name: t,
                                value: n
                            } = e;
                            return [t, n]
                        }))
                    }
                    return o = e, !0
                },
                ignoreMutation: e => "attributes" === e.type && e.target === r && "style" === e.attributeName
            }
        }

        function f(e, t) {
            let n = [];
            return e.descendants((e, a) => {
                if ("table" !== e.type.name) return !0;
                let l = t ? (0, u.a)(e) : void 0;
                null != l && n.push(r.a.node(a, a + e.nodeSize, l.attributes));
                let o = !1 !== e.attrs.pageHeaderRow && !0 === e.attrs.pagePinHeaderRow,
                    i = !0 === e.attrs.pageHeaderColumn && !0 === e.attrs.pagePinHeaderColumn;
                o && n.push(r.a.node(a, a + e.nodeSize, {
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
                            m = 0 === u ? l?.widths[f] : void 0;
                        n.push(r.a.node(g, g + t.nodeSize, {
                            "data-page-table-first-column": 0 === h ? "" : void 0,
                            "data-page-pinned-row": o && 0 === u ? "" : void 0,
                            "data-page-pinned-column": i && 0 === h ? "" : void 0,
                            style: null == m ? void 0 : `width: ${m}px;`,
                            role: (0, d.b)(e, u, h, t)
                        }))
                    })
                }), !1
            }), r.b.create(e, n)
        }
        n.d(t, {}, {
            a: function() {
                let {
                    renderSavedWidths: e = !1
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return new l.d({
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
                    l = n?.filter(e => null != e),
                    r = l?.length ? l.reduce((e, t) => e + t, 0) / l.length : 0,
                    o = t ?? n?.map(e => e ?? r);
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
            l = n("f6KK");

        function r(e) {
            let t = e.textBetween(0, e.content.size, " ", e => "hard_break" === e.type.name ? " " : "￼");
            return /\p{Nd}/u.test(t) && /^[\p{Nd}\p{Sc}\s.,+\-−–/:()%‰'’٬٫]+$/u.test(t)
        }

        function o(e, t) {
            let n = a.b.fromSchema(e.type.schema).nodes[e.type.name],
                l = a.b.renderSpec(t.dom.ownerDocument, n(e)),
                o = l.dom;
            return o instanceof HTMLElement ? {
                dom: o,
                contentDOM: l.contentDOM,
                update: t => !!t.sameMarkup(e) && (o.toggleAttribute("data-page-numeric-cell", r(t)), !0)
            } : l
        }
        n.d(t, {}, {
            a: function() {
                return new l.d({
                    props: {
                        nodeViews: {
                            table_cell: o
                        }
                    }
                })
            },
            b: r
        })
    }),
    Pva4: (function(e, t, n) {
        var a = n("aWEZ");
        let l = new WeakMap;

        function r(e) {
            e.animation?.row.cancel(), e.animation?.cover.cancel(), e.animation = null
        }

        function o(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            if (null != e && e !== t) {
                let t = l.get(e);
                null != t && 0 == --t.users && (e.style.clipPath === t.value && e.style.setProperty("clip-path", t.original, t.priority), l.delete(e))
            }
            if (null == t) return null;
            let r = l.get(t);
            null == r && (r = {
                users: 0,
                original: t.style.clipPath,
                priority: t.style.getPropertyPriority("clip-path"),
                value: ""
            }, l.set(t, r)), e !== t && r.users++;
            let o = `inset(max(0px, calc(${n}px - var(--spacing) * 6 * ${a})) 0px 0px)`;
            return r.value !== o && (t.style.setProperty("clip-path", o, r.priority), r.value = t.style.clipPath), t
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
                        for (let [e, n] of i)(t.hidden || !1 === g.get(e)) && r(n);
                        if (t.hidden || 0 === i.size) {
                            p = o(p, null);
                            return
                        }
                        let s = (0, a.a)(),
                            d = e.closest("[data-page-document-scroll]"),
                            h = null == d ? null : n?.getComputedStyle(d),
                            m = f && null != d && (h?.overflowY === "auto" || h?.overflowY === "scroll") && d.scrollHeight > d.clientHeight && (l.has(d) || h?.clipPath === "none") ? d : null;
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
                                    row: l
                                } = a, r = l.cells[l.cells.length - 1];
                                if (!1 === g.get(t) || null == r) return null;
                                let o = t.getBoundingClientRect(),
                                    i = t.currentCSSZoom || 1,
                                    u = null == a.animation ? a.offset : parseFloat(n?.getComputedStyle(l).translate.split(" ")[1] ?? "") || 0,
                                    p = l.getBoundingClientRect().top - u * i,
                                    f = Math.max(...Array.from(l.cells, e => e.offsetHeight)),
                                    h = Math.max(0, (o.bottom - p) / i - f);
                                if (null != c && null != d) {
                                    let e = d.scrollTop + (p - Math.max(0, S)) / w;
                                    return {
                                        table: t,
                                        pin: a,
                                        width: o.width / i,
                                        animation: {
                                            coverCell: r,
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
                                offset: l,
                                clipTop: o,
                                width: i
                            } = e, s = `${i}px`;
                            if (n.row.style.getPropertyValue("--page-table-pin-cover-width") !== s && n.row.style.setProperty("--page-table-pin-cover-width", s), null != a && null != c) {
                                let e = n.animation;
                                if (e?.source === a.source && e.coverCell === a.coverCell && e.start === a.start && e.end === a.end && e.travel === a.travel || (r(n), n.row.style.removeProperty("translate"), n.row.removeAttribute("data-page-header-cover"), t.style.removeProperty("clip-path"), n.offset = 0, n.clipTop = 0, a.travel <= 0)) continue;
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
                            r(n), n.offset !== l && (n.offset = l, n.row.style.setProperty("translate", `0 ${l}px`), n.row.toggleAttribute("data-page-header-cover", l > 0)), n.clipTop !== o && (n.clipTop = o, t.style.clipPath = o > 0 ? `inset(calc(${o}px - var(--spacing) * 6) calc(var(--spacing) * -0.25) calc(var(--spacing) * -0.25))` : "")
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
                        for (let [e, t] of i) a.get(e) !== t && (r(t), t.row.style.removeProperty("translate"), t.row.style.removeProperty("--page-table-pin-cover-width"), t.row.removeAttribute("data-page-header-cover"), e.style.removeProperty("clip-path"), v.unobserve(e), g.delete(e));
                        let l = new Set;
                        for (let e of a.keys()) {
                            i.get(e) !== a.get(e) && v.observe(e);
                            for (let t = e; null != t; t = t.parentElement) l.add(t);
                            null != e.rows[0] && l.add(e.rows[0])
                        }
                        for (let e of s) l.has(e) || y.unobserve(e);
                        for (let e of l) s.has(e) || y.observe(e);
                        s = l, 0 === (i = a).size ? w() : d || (t.addEventListener("visibilitychange", m), n?.addEventListener("resize", m), d = !0), m()
                    };
                return S(), {
                    update: S,
                    destroy() {
                        for (let [e, t] of(w(), i)) r(t), t.row.style.removeProperty("translate"), t.row.style.removeProperty("--page-table-pin-cover-width"), t.row.removeAttribute("data-page-header-cover"), e.style.removeProperty("clip-path");
                        i.clear()
                    }
                }
            }
        })
    }),
    RhgW: (function(e, t, n) {
        var a = n("Cn5C"),
            l = n("d8ZM"),
            r = n("f6KK"),
            o = n("tINb"),
            i = n("FY8H");

        function s(e) {
            return e.children.map(e => e.children.map(e => JSON.stringify(e.content.toJSON())))
        }

        function d(e) {
            return JSON.stringify(e)
        }

        function u(e) {
            return e[0].map((t, n) => d(e.map(e => e[n])))
        }

        function c(e, t, n, a) {
            let l = Math.min(n, a),
                r = Math.max(n, a),
                o = new Set(e.slice(l, r + 1));
            if (!e.some((e, n) => e !== t[n] && (o.has(e) || o.has(t[n])))) return !1;
            let i = e.slice().sort(),
                s = t.slice().sort();
            return i.every((e, t) => e === s[t])
        }
        n.d(t, {}, {
            a: function(e, t, n, p) {
                let f = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                    g = (0, a.h)(e),
                    h = null == g && n?.$anchor.doc === e.doc ? n : e.selection;
                if (!(h instanceof r.h)) return !1;
                let {
                    $anchor: m,
                    $head: b
                } = h, y = (0, l.c)(m), v = (0, l.c)(b);
                if (null == y || null == v) return !1;
                let w = y - 2,
                    S = v - 2;
                if (m.before(w) !== b.before(S)) return !1;
                let k = m.node(w);
                if (null != k.attrs.dilTemplate) return !1;
                let M = g ?? {
                        anchor: {
                            rowIndex: m.index(w),
                            columnIndex: m.index(w + 1)
                        },
                        head: {
                            rowIndex: b.index(S),
                            columnIndex: b.index(S + 1)
                        }
                    },
                    x = t.mapping.mapResult(m.start(w), 1);
                if (x.deletedAcross) return !1;
                let C = t.doc.nodeAt(x.pos - 1);
                if (null == C || C.type !== k.type) return !1;
                if (f && null == g) {
                    let e = t.doc.resolve(x.pos - 1);
                    return !!(0, i.b)(e) && (t.setSelection(new i.a(e)), !0)
                }
                if (C === k || C.childCount !== k.childCount || C.firstChild?.childCount !== k.firstChild?.childCount) return !1;
                let E = (0, o.b)(k),
                    T = (0, o.b)(C);
                if (! function(e, t) {
                        let n = 0;
                        for (let [a, l] of e.children.entries()) {
                            let e = t.child(a);
                            if (l.childCount !== e.childCount) return !0;
                            for (let [t, a] of l.children.entries())
                                if (!a.content.eq(e.child(t).content) && 2 === (n += 1)) return !0
                        }
                        return !1
                    }(E, T)) return !1;
                let A = s(E),
                    P = s(T);
                if (!(c(A.map(d), P.map(d), M.anchor.rowIndex, M.head.rowIndex) || A.concat(P).every(e => e.length === A[0].length) && c(u(A), u(P), M.anchor.columnIndex, M.head.columnIndex))) return !1;
                if (null == g) {
                    if (null != p) return !1;
                    let e = t.doc.resolve(x.pos - 1);
                    return !!(0, i.b)(e) && (t.setSelection(new i.a(e)), !0)
                }
                let D = t.doc.resolve(x.pos),
                    I = M.head.rowIndex,
                    L = C.child(I),
                    R = D.posAtIndex(I) + 1,
                    z = t.doc.resolve(R),
                    $ = Math.min(M.head.columnIndex, L.childCount - 1),
                    H = $ < 0 ? z : t.doc.resolve(z.posAtIndex($) + 1);
                return t.setSelection(r.h.near(H)).setMeta(a.q, {
                    isStructureMode: !1,
                    isEditMode: !1,
                    structureSelectionAnchor: null,
                    structureSelectionHead: null
                }), !0
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
            l = n("d8ZM"),
            r = n("f6KK"),
            o = n("NoA4"),
            i = "cell-dzjsB_";
        let s = new r.e("pageTableSelection");

        function d() {
            return new r.d({
                key: s,
                state: {
                    init: () => null,
                    apply(e, t, n) {
                        let l = e.getMeta(s);
                        return !1 === l ? null : "pointer" === l || "row" === l || "column" === l ? l : "pointer" === t ? !e.docChanged && e.selection.eq(n.selection) ? t : null : null != t && null == e.getMeta(a.q) && (!e.selectionSet || e.selection.eq(n.selection.map(e.doc, e.mapping))) ? t : null
                    }
                },
                props: {
                    handleDOMEvents: {
                        mousedown(e, t) {
                            if (!e.editable || e.composing || e.hasFocus() && !a.q.getState(e.state)?.isStructureMode || 0 !== t.button || t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || !(t.target instanceof Element) || null != t.target.closest('a, button, input, textarea, select, [contenteditable="false"]')) return !1;
                            let n = t.target.closest("td, th"),
                                {
                                    $head: r
                                } = e.state.selection,
                                o = (0, l.c)(r);
                            return null != n && e.dom.contains(n) && null != o && e.nodeDOM(r.before(o)) !== n && e.dispatch(e.state.tr.setMeta(s, "pointer")), !1
                        },
                        keydown: f,
                        blur: f
                    },
                    decorations(e) {
                        let t = a.q.getState(e);
                        if (!t?.isStructureMode) {
                            let {
                                $head: n
                            } = e.selection, a = t?.isEditMode && "pointer" !== s.getState(e) ? (0, l.c)(n) : null;
                            if (null == a) return null;
                            let r = n.before(a);
                            return o.b.create(e.doc, [o.a.node(r, r + n.node(a).nodeSize, {
                                class: i,
                                "data-page-table-selection-edges": "top bottom start end",
                                "data-page-table-edit-cell": ""
                            })])
                        }
                        let n = c(e);
                        if (null == n) return null;
                        let r = new Set(n.map(e => {
                            let {
                                $from: t
                            } = e;
                            return `${t.index(-2)}:${t.index(-1)}`
                        }));
                        return o.b.create(e.doc, n.map(e => {
                            let {
                                $from: t
                            } = e, n = t.index(-2), a = t.index(-1), l = [];
                            r.has(`${n-1}:${a}`) || l.push("top"), r.has(`${n+1}:${a}`) || l.push("bottom"), r.has(`${n}:${a-1}`) || l.push("start"), r.has(`${n}:${a+1}`) || l.push("end");
                            let s = t.before();
                            return o.a.node(s, s + t.parent.nodeSize, {
                                class: i,
                                "data-page-table-selection-edges": l.join(" ")
                            })
                        }))
                    }
                },
                view(e) {
                    let t = e.dom.ownerDocument,
                        n = t.defaultView,
                        a = new AbortController,
                        r = () => {
                            f(e)
                        };
                    return n?.addEventListener("mouseup", () => {
                        if ("pointer" !== s.getState(e.state)) return;
                        let n = t.getSelection()?.focusNode,
                            a = (n instanceof Element ? n : n?.parentElement)?.closest("td, th"),
                            {
                                $head: o
                            } = e.state.selection,
                            i = (0, l.c)(o);
                        e.dom.contains(n ?? null) && null != i && e.nodeDOM(o.before(i)) !== a || r()
                    }, {
                        signal: a.signal
                    }), n?.addEventListener("pointercancel", r, {
                        signal: a.signal
                    }), n?.addEventListener("blur", r, {
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
                selection: r
            } = e.state;
            if (n !== t.doc || r.head === t.selection.head || !r.empty || !e.editable || !e.hasFocus() || a.q.getState(e.state)?.isStructureMode) return;
            let o = (0, l.c)(r.$head),
                i = (0, l.c)(t.selection.$head);
            if (null == o) return;
            let s = r.$head.before(o);
            if (null != i && t.selection.$head.before(i) === s) return;
            let d = e.nodeDOM(s);
            if (!(d instanceof HTMLTableCellElement)) return;
            let u = d.closest("[data-page-block-viewport]");
            if (null == u || u.scrollWidth <= u.clientWidth) return;
            let c = d.getBoundingClientRect(),
                p = u.getBoundingClientRect();
            if (c.width > p.width || c.left >= p.left && c.right <= p.right) return;
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
                r = (0, l.c)(n);
            if (null == t || null == r) return null;
            let o = r - 2,
                i = n.node(o),
                s = Math.min(t.anchor.rowIndex, t.head.rowIndex),
                d = Math.max(t.anchor.rowIndex, t.head.rowIndex),
                u = Math.min(t.anchor.columnIndex, t.head.columnIndex),
                c = Math.max(t.anchor.columnIndex, t.head.columnIndex);
            return p(e.doc, i, n.before(o), [s, u, d, c])
        }

        function p(e, t, n, a) {
            let [l, o, i, s] = a, d = [];
            return t.forEach((t, a, u) => {
                if (u < l || u > i) return;
                let c = Math.min(o, t.childCount - 1),
                    p = Math.min(s, t.childCount - 1);
                t.forEach((t, l, o) => {
                    if (o >= c && o <= p) {
                        let o = n + 1 + a + l + 2;
                        d.push(new r.g(e.resolve(o), e.resolve(o + t.content.size)))
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
            l = n("WDOy");
        n.d(t, {}, {
            a: function(e, t) {
                return e.steps.every((n, r) => {
                    if (n instanceof l.a) return !0;
                    if (!(n instanceof a.i) || 0 !== n.slice.openStart || 0 !== n.slice.openEnd || !n.slice.content.content.every(e => e.isText)) return !1;
                    let o = e.docs[r],
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

        function l(e, t) {
            let n = r(e),
                a = e.dom.ownerDocument;
            return 0 === n.listeners.size && (n.effective = n.pageVisible && !a.hidden, a.addEventListener("visibilitychange", n.changed)), n.listeners.add(t), t(n.effective), () => {
                n.listeners.delete(t), 0 === n.listeners.size && a.removeEventListener("visibilitychange", n.changed)
            }
        }

        function r(e) {
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
                    r = l(e, e => {
                        e ? null == n && (n = t()) : a()
                    });
                return {
                    update(e, t) {
                        n?.update?.(e, t)
                    },
                    destroy() {
                        r(), a()
                    }
                }
            },
            b: function(e) {
                return r(e).pageVisible && !e.dom.ownerDocument.hidden
            },
            c: l,
            d: function(e, t) {
                let n = r(e);
                if (n.pageVisible && !t)
                    for (let t of e.dom.querySelectorAll("audio, video")) t.paused || t.pause();
                n.pageVisible = t, n.changed()
            }
        })
    }),
    Nfrx: (function(e, t, n) {
        var a = n("xWaH");
        n.d(t, {}, {
            a: function(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                return null == e ? void 0 : `The current signed-in user can be referenced with this native self mention: ${(0,a.rc)({accountUserId:e.accountUserId,label:e.displayName,mentionId:crypto.randomUUID(),pageId:t})}.${n?" Use it only when the user requests a self mention. It grants no additional Page or person access; do not infer other people from it.":""}`
            }
        })
    })
};