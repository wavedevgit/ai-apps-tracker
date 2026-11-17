export const __rspack_esm_ids = [704809];
export const __webpack_modules__ = {
    LSvd: (function(e, t, n) {
        var l = n("H0zY"),
            o = n("v2Zq"),
            r = n("f6KK"),
            i = n("NoA4"),
            s = n("Kh9O"),
            a = n("rX7T"),
            u = n("H3Qi"),
            d = n("ZftI"),
            c = n("K1Fz");

        function h() {
            for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            return t.includes(c.f) || t.push(c.f), t
        }
        n.d(t, {}, {
            a: function(e) {
                var t;
                let n, {
                    mount: c,
                    markdown: f,
                    initialDocument: m,
                    nodeViews: p,
                    attributes: g,
                    directEdit: w,
                    editable: b = !0,
                    prepareTransaction: v,
                    getTransactionFollowup: y,
                    handleDOMEvents: M,
                    leadingPlugins: x = [],
                    onChange: I,
                    onTransaction: C,
                    placeholder: S,
                    pluginStack: P,
                    plugins: E = [],
                    pmu: H,
                    pmuOptions: k
                } = e;
                if (null != k && null != H) throw Error("Pass either `pmu` or `pmuOptions`, not both.");
                let A = H ?? (0, s.a)(k);
                if (null == m) {
                    if (null == f) throw Error("Pass either `markdown` or `initialDocument`.");
                    m = A.parse(f)
                }
                let N = new WeakMap,
                    T = e => {
                        let t = N.get(e);
                        return null == t && (t = A.serialize(e), N.set(e, t)), t
                    },
                    R = null == w || null != P ? null : (0, d.a)({
                        pmu: A,
                        ...w
                    }),
                    D = [...x, ...E].some(e => e.spec.key === a.d),
                    K = P ?? [...D ? [] : [(0, a.c)()], ...x, ...null == R ? [A.inputRulesPlugin(), A.keymapPlugin()] : [R.listInput, R.tableHeaderFormatting, R.inputRules, R.inputRulesHistoryIsolation, R.backspace, R.tabIndent, R.extensionKeymap], (0, o.b)(l.b), ...null == S ? [] : [(t = S, new r.d({
                        props: {
                            decorations(e) {
                                let n = e.doc.firstChild;
                                return 1 === e.doc.childCount && null != n && n.isTextblock && 0 === n.content.size ? i.b.create(e.doc, [i.a.node(0, n.nodeSize, {
                                    class: "prosemirror-placeholder",
                                    "data-placeholder": t
                                })]) : null
                            }
                        }
                    }))], ...null == R ? [] : [R.plainTextPaste, ...R.links], ...E],
                    L = r.b.create({
                        doc: m,
                        schema: A.schema(),
                        plugins: h(...K)
                    }),
                    O = b,
                    z = !1,
                    F = L.doc;
                return {
                    view: n = new i.c(c, {
                        state: L,
                        attributes: g,
                        editable: () => O,
                        nodeViews: p ?? A.nodeViews(),
                        handleDOMEvents: M,
                        dispatchTransaction(e) {
                            if (n.isDestroyed) return;
                            let t = n.state;
                            v?.(e);
                            let l = t.applyTransaction(e),
                                o = l.state,
                                r = y?.(e, o) ?? null,
                                i = r ?? e;
                            null != r && v?.(r);
                            let s = r ? o.applyTransaction(r) : null,
                                a = s?.state ?? o,
                                d = null == s ? l.transactions : [...l.transactions, ...s.transactions];
                            if (n.updateState(a), C?.({
                                    previousState: t,
                                    nextState: a,
                                    transactions: d,
                                    view: n
                                }) === !1 || !d.some(e => e.docChanged) || i.getMeta(u.a)) return;
                            let c = T(n.state.doc),
                                h = T(F);
                            F = n.state.doc, z || c === h || I?.({
                                markdown: c,
                                previousMarkdown: h,
                                transaction: i,
                                view: n
                            })
                        }
                    }),
                    destroy: () => {
                        n.destroy()
                    },
                    getMarkdown: () => T(n.state.doc),
                    setEditable: e => {
                        O !== e && (O = e, n.setProps({
                            editable: () => O
                        }))
                    },
                    setMarkdown: e => {
                        let t = A.parse(e);
                        if (T(t) === T(F)) return !1;
                        z = !0;
                        try {
                            n.dispatch(n.state.tr.replaceWith(0, n.state.doc.content.size, t.content).setMeta("addToHistory", !1)), F = t
                        } finally {
                            z = !1
                        }
                        return !0
                    }
                }
            },
            b: h
        })
    }),
    sSh9: (function(e, t, n) {
        n.d(t, {
            a: () => l
        });
        let l = {
            content: "content-xaiQhS",
            page: "page-g4Dmdq",
            root: "editor-jMsqTn",
            tableFloatingUi: "tableFloatingUi-Q6FLpM"
        }
    }),
    ixaN: (function(e, t, n) {
        var l = n("rX7T"),
            o = n("f6KK");
        let r = new o.e("writingBlockEmoji"),
            i = {
                suggestion: null,
                dismissed: null
            },
            s = /(?:^|[\s([{\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u20E3]):([\p{L}\p{N}\p{M}_+-]*)$/u;

        function a(e) {
            let {
                selection: t
            } = e, n = t.$from;
            if (!(t instanceof o.h) || 0 === n.depth || !0 === n.parent.type.spec.code || !0 === t.$to.parent.type.spec.code) return !1;
            let l = Object.values(e.schema.marks).filter(t => t === e.schema.marks.code || !0 === t.spec.code);
            return !(e.storedMarks ?? n.marks()).some(e => l.includes(e.type)) && !l.some(n => e.doc.rangeHasMark(t.from, t.to, n))
        }

        function u(e) {
            if (!e.selection.empty || !a(e)) return null;
            let t = e.selection.$from,
                n = t.parent.textBetween(0, t.parentOffset, void 0, e => "hard_break" === e.type.name ? "\n" : "￼").match(s)?.[1];
            if (null == n) return null;
            let l = t.pos - n.length - 1;
            return Object.values(e.schema.marks).some(n => (n === e.schema.marks.code || !0 === n.spec.code) && e.doc.rangeHasMark(l, t.pos, n)) ? null : {
                mode: "typed",
                from: l,
                to: t.pos,
                query: n
            }
        }

        function d(e) {
            e.isDestroyed || r.getState(e.state)?.suggestion == null || e.dispatch(e.state.tr.setMeta(r, "close"))
        }
        n.d(t, {}, {
            a: d,
            b: function() {
                let e = null;
                return new o.d({
                    key: r,
                    state: {
                        init: () => i,
                        apply(t, n, l, o) {
                            if ("close" === t.getMeta(r)) return {
                                suggestion: null,
                                dismissed: n.suggestion?.mode === "typed" ? n.suggestion : n.dismissed
                            };
                            if (e?.composing || e?.editable === !1) return i;
                            if ("open" === t.getMeta(r)) return a(o) ? {
                                suggestion: {
                                    mode: "picker",
                                    from: o.selection.from,
                                    to: o.selection.to,
                                    query: ""
                                },
                                dismissed: null
                            } : i;
                            if (!t.docChanged) return !o.selection.eq(l.selection) || t.storedMarksSet ? i : n;
                            if (n.suggestion?.mode === "picker") {
                                let e = t.mapping.map(n.suggestion.from, 1),
                                    l = t.mapping.map(n.suggestion.to, n.suggestion.from === n.suggestion.to ? 1 : -1);
                                return o.selection.from === e && o.selection.to === l && a(o) ? {
                                    suggestion: {
                                        ...n.suggestion,
                                        from: e,
                                        to: l
                                    },
                                    dismissed: null
                                } : i
                            }
                            if (null == n.suggestion && e?.hasFocus() === !1) return i;
                            let s = u(o);
                            if (null == s) return i;
                            let d = n.dismissed,
                                c = null == d ? null : t.mapping.mapResult(d.from, 1);
                            return null != d && null != c && !c.deletedAfter && c.pos === s.from && s.query.startsWith(d.query) ? {
                                suggestion: null,
                                dismissed: {
                                    ...d,
                                    from: c.pos
                                }
                            } : {
                                suggestion: s,
                                dismissed: null
                            }
                        }
                    },
                    props: {
                        handleKeyDown: (e, t) => !t.defaultPrevented && !t.isComposing && !e.composing && 229 !== t.keyCode && "Escape" === t.key && r.getState(e.state)?.suggestion != null && (d(e), t.preventDefault(), t.stopPropagation(), !0),
                        handleDOMEvents: {
                            compositionstart: e => (d(e), !1),
                            blur(e, t) {
                                let n = e.dom.getAttribute("aria-controls"),
                                    l = null == n ? null : e.dom.ownerDocument.getElementById(n)?.closest("[data-symbol-picker]");
                                return !(t.relatedTarget instanceof Node && l?.contains(t.relatedTarget)) && (null != t.relatedTarget || !!e.dom.ownerDocument.hasFocus()) && (d(e), !1)
                            }
                        }
                    },
                    view: t => (e = t, {
                        destroy() {
                            e = null
                        }
                    })
                })
            },
            c: function(e, t, n) {
                if (e.isDestroyed || !e.editable || e.composing || !e.hasFocus() || 0 === t.length) return !1;
                let i = r.getState(e.state)?.suggestion;
                if (null == i || i.mode !== n.mode || i.from !== n.from || i.to !== n.to || i.query !== n.query || !a(e.state) || e.state.selection.to !== i.to || "picker" === i.mode && e.state.selection.from !== i.from) return !1;
                if ("typed" === i.mode) {
                    let t = u(e.state);
                    if (t?.from !== i.from || t.to !== i.to || t.query !== i.query) return !1
                }
                let s = (0, l.b)(e.state.tr).insertText(t, i.from, i.to);
                return s.setSelection(o.h.create(s.doc, i.from + t.length)), e.dispatch(s.setMeta(r, "close").scrollIntoView()), e.dispatch((0, l.b)(e.state.tr)), !0
            },
            d: r
        })
    }),
    nC2v: (function(e, t, n) {
        var l = n("f6KK"),
            o = n("NoA4");
        let r = new l.e("writingBlockEmptyNodePlaceholder");

        function i(e) {
            return "object" == typeof e && null != e && (Object.prototype.hasOwnProperty.call(e, "isDisabled") || Object.prototype.hasOwnProperty.call(e, "placeholderText"))
        }

        function s(e, t, n, l) {
            if (n || !t.empty) return o.b.empty;
            let r = function(e, t) {
                let n = e.$from.parent;
                if (!n.isTextblock || "paragraph" !== n.type.name || n.content.size > 0) return null;
                let l = e.$from.before();
                if ("number" != typeof l) return null;
                let r = l + n.nodeSize;
                return o.a.node(l, r, {
                    "data-writing-block-empty-placeholder": "function" == typeof t ? t(e) : t
                })
            }(t, l);
            return r ? o.b.create(e, [r]) : o.b.empty
        }
        n.d(t, {}, {
            a: function(e, t) {
                return new l.d({
                    key: r,
                    state: {
                        init: (n, l) => ({
                            decorations: s(l.doc, l.selection, e, t),
                            isDisabled: e,
                            placeholderText: t
                        }),
                        apply(n, l) {
                            let o = n.getMeta(r),
                                a = (i(o) ? o.isDisabled : void 0) ?? l.isDisabled ?? e,
                                u = (i(o) ? o.placeholderText : void 0) ?? l.placeholderText ?? t;
                            return n.docChanged || n.selectionSet || a !== l.isDisabled || u !== l.placeholderText ? {
                                decorations: s(n.doc, n.selection, a, u),
                                isDisabled: a,
                                placeholderText: u
                            } : l
                        }
                    },
                    props: {
                        decorations: e => r.getState(e)?.decorations ?? null
                    }
                })
            },
            b: function(e, t) {
                var n;
                return n = {
                    isDisabled: t
                }, e.setMeta(r, n)
            },
            c: r
        })
    }),
    k4Cs: (function(e, t, n) {
        var l = n("BJ9k"),
            o = n("H3Qi"),
            r = n("f6KK"),
            i = n("NoA4");
        let s = new r.e("writingBlockGenerate"),
            a = i.b.empty,
            u = {
                input: null,
                pendingRequestId: null,
                suggestion: null,
                decorations: a,
                lastResolvedSuggestionId: null,
                lastResolvedReason: null
            },
            d = e => "object" == typeof e && null != e,
            c = e => {
                let t = e.type.schema.marks.generate_suggestion;
                if (!t) return null;
                let n = null;
                return e.descendants((e, o) => {
                    if (n) return !1;
                    if (e.isText) {
                        let r = t.isInSet(e.marks);
                        if (r) {
                            let t = r.attrs?.[l.a];
                            if ("string" == typeof t && t.length > 0) return n = {
                                id: t,
                                from: o,
                                to: o + e.nodeSize
                            }, !1
                        }
                    }
                    return !0
                }), n
            },
            h = e => {
                let {
                    state: t,
                    pmu: n,
                    text: l,
                    input: o
                } = e, {
                    caretPos: r,
                    triggerPos: i,
                    anchorPos: s
                } = o, a = n.parse(l ?? "");
                if (0 === a.content.size) return null;
                let u = t.tr,
                    d = Math.max(s, r);
                i < d && (u = u.delete(i, d));
                let c = e => Math.max(0, Math.min(u.mapping.map(e), u.doc.content.size)),
                    h = Math.min(s, r),
                    f = Math.max(s, r),
                    m = c(h),
                    p = c(f);
                m < p && (u = u.delete(m, p));
                let g = u.doc.resolve(m),
                    w = 1 === a.childCount && a.firstChild?.type.name === "paragraph",
                    b = w ? a.firstChild.content : a.content,
                    v = g.parent.isTextblock && 0 === g.parent.content.size,
                    y = m,
                    M = 0;
                if (v && !w) {
                    let e = g.before(),
                        t = g.after();
                    u = u.replaceWith(e, t, b), y = e, M = b.size
                } else u = u.insert(m, b), y = m, M = b.size;
                return M > 0 ? {
                    transaction: u,
                    from: y,
                    to: y + M
                } : null
            },
            f = e => {
                if (e.isLeaf) return !0;
                let t = !1;
                return e.descendants(e => !t && (!(e.isLeaf || e.isText && e.text?.length) || (t = !0, !1))), t
            },
            m = (e, t) => {
                let n = e.schema.marks.generate_suggestion;
                if (!n) return [];
                let o = [];
                return e.doc.descendants((e, r) => {
                    if (!e.isText) return !0;
                    let i = n.isInSet(e.marks);
                    return i && i.attrs?.[l.a] === t && o.push({
                        from: r,
                        to: r + e.nodeSize
                    }), !0
                }), o
            };
        n.d(t, {}, {
            a: (e, t) => ((e, t, n) => {
                let l = e.state.schema.marks.generate_suggestion;
                if (!l) return !1;
                let o = m(e.state, t);
                if (0 === o.length) return !1;
                let i = e.state.tr;
                o.forEach(e => {
                    let {
                        from: t,
                        to: n
                    } = e;
                    i = i.removeMark(t, n, l)
                }), i = i.setMeta(s, {
                    type: "clear-suggestion",
                    reason: n,
                    suggestionId: t
                });
                let a = o[o.length - 1];
                return a && (i = (i = i.setSelection(r.f.near(i.doc.resolve(a.to)))).scrollIntoView()), e.dispatch(i), !0
            })(e, t, "accept"),
            b: h,
            c: e => {
                let t = s.getState(e.state),
                    n = e.state.tr,
                    l = t?.input ?? null;
                if (l) {
                    let e = n.doc,
                        t = Math.max(0, Math.min(l.caretPos, e.content.size)),
                        o = r.f.findFrom(e.resolve(t), 1, !0) ?? r.f.near(e.resolve(t), 1);
                    n.selection.eq(o) || (n = n.setSelection(o))
                }
                n = n.setMeta(s, {
                    type: "close-input"
                }), e.dispatch(n), e.hasFocus() || e.focus()
            },
            d: () => new r.d({
                key: s,
                state: {
                    init: (e, t) => {
                        let n = c(t.doc);
                        return {
                            ...u,
                            suggestion: n
                        }
                    },
                    apply(e, t) {
                        let n = t.decorations.map(e.mapping, e.doc),
                            l = ((e, t, n) => {
                                if (!t) return null;
                                let l = e.map(t.anchorPos, 1),
                                    o = e.map(t.caretPos, 1),
                                    r = e.map(t.blockFrom, -1),
                                    i = e.map(t.blockTo, 1),
                                    s = e.map(t.triggerPos, -1);
                                return r < 0 || r >= n.content.size || i < r ? null : {
                                    anchorPos: l,
                                    caretPos: o,
                                    blockFrom: r,
                                    blockTo: i,
                                    triggerPos: s
                                }
                            })(e.mapping, t.input, e.doc),
                            o = t.pendingRequestId,
                            r = ((e, t, n) => {
                                if (!t) return null;
                                let l = n.type.schema.marks.generate_suggestion;
                                if (!l) return null;
                                let o = e.map(t.from, -1);
                                if (o < 0 || o >= n.content.size) return null;
                                let r = n.nodeAt(o);
                                if (!r || !r.isText || !l.isInSet(r.marks)) return null;
                                let i = o + r.nodeSize;
                                return i <= o ? null : {
                                    id: t.id,
                                    from: o,
                                    to: i
                                }
                            })(e.mapping, t.suggestion, e.doc),
                            i = t.lastResolvedSuggestionId,
                            u = t.lastResolvedReason;
                        e.docChanged && t.suggestion && !r && (i = t.suggestion.id, u = "reject");
                        let h = e.getMeta(s),
                            f = (e => {
                                if (!d(e) || "string" != typeof e.type) return !1;
                                switch (e.type) {
                                    case "set-suggestion":
                                        let t;
                                        return d(t = e.suggestion) && "string" == typeof t.id && "number" == typeof t.from && "number" == typeof t.to;
                                    case "clear-suggestion":
                                        let n;
                                        return ("accept" === (n = e.reason) || "reject" === n || "cancel" === n) && (null == e.suggestionId || "string" == typeof e.suggestionId);
                                    case "open-input":
                                        let l;
                                        return d(l = e.input) && "number" == typeof l.anchorPos && "number" == typeof l.caretPos && "number" == typeof l.blockFrom && "number" == typeof l.blockTo && "number" == typeof l.triggerPos;
                                    case "close-input":
                                        return !0;
                                    case "set-request":
                                        return null === e.requestId || "number" == typeof e.requestId;
                                    default:
                                        return !1
                                }
                            })(h) ? h : null;
                        e.docChanged && f?.type !== "set-suggestion" && l && (l = null), f?.type === "open-input" ? (l = f.input, o = null, i = null, u = null) : f?.type === "close-input" ? (l = null, o = null) : f?.type === "set-request" ? o = l ? f.requestId : null : f?.type === "set-suggestion" ? (r = f.suggestion, n = a, l = null, o = null, i = null, u = null) : f?.type === "clear-suggestion" && (r ? (i = r.id, u = f.reason) : f.suggestionId && (i = f.suggestionId, u = f.reason), r = null, n = a);
                        let m = c(e.doc);
                        return m ? (r = m, f?.type !== "set-suggestion" && (i = null, u = null)) : f?.type !== "set-suggestion" && f?.type !== "clear-suggestion" && (r = null), {
                            input: l,
                            pendingRequestId: o,
                            suggestion: r,
                            decorations: n,
                            lastResolvedSuggestionId: i,
                            lastResolvedReason: u
                        }
                    }
                },
                props: {
                    decorations: e => s.getState(e)?.decorations
                }
            }),
            e: e => {
                let {
                    view: t,
                    pmu: n,
                    suggestionId: i,
                    text: a,
                    input: u = s.getState(t.state)?.input
                } = e;
                if (!u) return !1;
                let d = t.state.schema.marks.generate_suggestion;
                if (!d) return !1;
                let c = h({
                    state: t.state,
                    pmu: n,
                    text: a,
                    input: u
                });
                if (!c) return !1;
                let {
                    from: f,
                    to: m
                } = c, p = c.transaction.addMark(f, m, d.create({
                    [l.a]: i
                })), g = r.f.findFrom(p.doc.resolve(m), 1, !0) ?? r.f.near(p.doc.resolve(m), 1);
                return (p = p.setSelection(g)).setMeta(o.a, !0), p.setMeta(s, {
                    type: "set-suggestion",
                    suggestion: {
                        id: i,
                        from: f,
                        to: m
                    }
                }), t.dispatch(p), !0
            },
            f: (e, t) => {
                let n = e.state.tr.setMeta(s, {
                    type: "open-input",
                    input: t
                });
                e.dispatch(n)
            },
            g: (e, t) => {
                let n = m(e.state, t).sort((e, t) => t.from - e.from);
                if (0 === n.length) return !1;
                let l = e.state.tr;
                return n.forEach(e => {
                    let {
                        from: t,
                        to: n
                    } = e, o = l.mapping.map(t), r = l.mapping.map(n);
                    o >= r || ((e, t) => {
                        let n = t;
                        for (;;) {
                            let t = Math.min(Math.max(n, 0), e.doc.content.size),
                                l = e.doc.resolve(t);
                            if (0 === l.depth) break;
                            let o = !1;
                            for (let t = l.depth; t > 0; t--) {
                                if (f(l.node(t))) continue;
                                let r = l.before(t),
                                    i = l.after(t);
                                e.delete(r, i), n = Math.max(0, r), o = !0;
                                break
                            }
                            if (!o) break
                        }
                    })(l = l.delete(o, r), o)
                }), l = l.setMeta(s, {
                    type: "clear-suggestion",
                    reason: "reject",
                    suggestionId: t
                }), e.dispatch(l), !0
            },
            h: (e, t) => {
                e.dispatch(e.state.tr.setMeta(s, {
                    type: "set-request",
                    requestId: t
                }))
            },
            i: s
        })
    }),
    ahCC: (function(e, t, n) {
        var l = n("CHJa"),
            o = n("HLFh");
        class r extends o.j {
            from;
            to;
            destination;
            constructor(e, t, n) {
                super(), this.from = e, this.to = t, this.destination = n
            }
            apply(e) {
                if (![this.from, this.to, this.destination].every(Number.isInteger) || this.from < 0 || this.to > e.content.size || this.from >= this.to || this.destination < 0 || this.destination > e.content.size || this.destination >= this.from && this.destination <= this.to) return o.l.fail("Invalid block move");
                let t = e.resolve(this.from),
                    n = e.resolve(this.to),
                    l = e.resolve(this.destination);
                if (!t.sameParent(n) || t.parent.inlineContent || l.parent.inlineContent || 0 !== t.textOffset || 0 !== n.textOffset || 0 !== l.textOffset) return o.l.fail("Move requires complete blocks and a block boundary");
                let r = e;
                for (let t of this.replacements(e)) {
                    let e = t.apply(r);
                    if (null == e.doc) return e;
                    r = e.doc
                }
                return o.l.ok(r)
            }
            getMap() {
                return new s(this.from, this.to, this.destination)
            }
            invert() {
                let e = this.to - this.from,
                    t = this.destination < this.from ? this.destination : this.destination - e;
                return new r(t, t + e, this.destination < this.from ? this.to : this.from)
            }
            map(e) {
                let t = e.mapResult(this.from, 1),
                    n = e.mapResult(this.to, -1),
                    l = e.mapResult(this.destination, this.destination < this.from ? 1 : -1);
                if (l.deletedAcross || t.pos >= n.pos || l.pos >= t.pos && l.pos <= n.pos) return null;
                if (t.deleted && n.deleted) {
                    let l = e.mapResult(this.from + 1, 1),
                        o = e.mapResult(this.to - 1, -1);
                    if (this.to - this.from < 2 || l.deletedAcross || o.deletedAcross || !i(e, this.from + 1, 1) || !i(e, this.to - 1, -1) || l.pos <= t.pos || l.pos >= n.pos || o.pos <= t.pos || o.pos >= n.pos) return null
                }
                return new r(t.pos, n.pos, l.pos)
            }
            replacements(e) {
                let t = this.destination < this.from ? this.destination : this.destination - (this.to - this.from);
                return [new o.i(this.from, this.to, l.j.empty), new o.i(t, t, e.slice(this.from, this.to))]
            }
            toJSON() {
                return {
                    stepType: "writingBlockMove",
                    from: this.from,
                    to: this.to,
                    destination: this.destination
                }
            }
        }

        function i(e, t, n) {
            let l = e instanceof o.e ? e.maps.slice(e.from, e.to) : e instanceof o.k ? [e] : null;
            if (null == l) return !1;
            let r = !1,
                i = !1;
            for (let s = 0; s < l.length; s++) {
                if (e instanceof o.e) {
                    let l = e.getMirror(e.from + s);
                    if (null != l && l > e.from + s && l < e.to) {
                        let o = e.slice(e.from + s, l + 1).mapResult(t, n);
                        if (o.deletedAcross) return !1;
                        t = o.pos, s = l - e.from;
                        continue
                    }
                }
                let a = l[s],
                    u = a.mapResult(t, n),
                    d = !1,
                    c = [];
                a.forEach((e, n) => {
                    c.push({
                        from: e,
                        to: n
                    }), e < n && t >= e && t <= n && (d = !0)
                });
                let h = c.some((e, n) => n > 0 && t >= c[n - 1].to && t <= e.from);
                if (d && !h && (r ||= u.deletedBefore, i ||= u.deletedAfter, u.deletedAcross || r && i)) return !1;
                t = u.pos
            }
            return !0
        }
        class s extends o.k {
            from;
            to;
            destination;
            constructor(e, t, n) {
                super([Math.min(e, n), 0, 0]), this.from = e, this.to = t, this.destination = n
            }
            map(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = e;
                return this.forEach((l, o, r) => {
                    (e > l || e === l && t > 0) && (e < o || e === o && t < 0) && (n = r + e - l)
                }), n
            }
            mapResult(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return o.k.empty.mapResult(this.map(e, t))
            }
            forEach(e) {
                let t = this.to - this.from;
                this.destination < this.from ? (e(this.destination, this.from, this.destination + t, this.to), e(this.from, this.to, this.destination, this.destination + t)) : (e(this.from, this.to, this.destination - t, this.destination), e(this.to, this.destination, this.from, this.destination - t))
            }
            invert() {
                return new r(this.from, this.to, this.destination).invert().getMap()
            }
        }
        n.d(t, {}, {
            a: r
        })
    }),
    jAmA: (function(e, t, n) {
        var l = n("f6KK"),
            o = n("ixaN"),
            r = n("hMk6");
        let i = new l.e("writingBlockSlashMenu"),
            s = {
                triggerPos: null,
                anchorPos: null,
                query: "",
                normalizedQuery: "",
                visibleOptionIds: [],
                highlightedOptionId: null
            },
            a = e => e?.triggerPos != null && e?.anchorPos != null,
            u = (e, t, n, l) => {
                let o = e.doc,
                    i = o.content.size,
                    s = Math.min(t + 1, i),
                    a = l?.previousState ?? null,
                    u = l?.anchorOverride ?? a?.anchorPos ?? null ?? s,
                    d = e.selection.from,
                    c = Math.min(Math.max(d >= s ? d : u, s), i),
                    h = c <= s ? "" : o.textBetween(s, c, "\0", "\0"),
                    f = (0, r.i)(h),
                    m = (0, r.g)(f).filter(e => !n.has(e)),
                    p = a?.highlightedOptionId ?? null,
                    g = p && m.length > 0 && m.includes(p) ? p : m[0] ?? null;
                return {
                    triggerPos: t,
                    anchorPos: c,
                    query: h,
                    normalizedQuery: f,
                    visibleOptionIds: m,
                    highlightedOptionId: g
                }
            },
            d = e => {
                if (!a(i.getState(e.state))) return;
                let t = e.state.tr.setMeta(i, {
                    type: "close"
                });
                e.dispatch(t)
            };
        n.d(t, {}, {
            a: s,
            b: d,
            c: function() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = t => {
                        let n = new Set(e.hiddenOptionIds ?? []);
                        for (let l of (null == o.d.getState(t) && n.add("emoji"), e.getHiddenOptionIds?.(t) ?? [])) n.add(l);
                        return n
                    };
                return new l.d({
                    key: i,
                    state: {
                        init: () => s,
                        apply(n, l, o, r) {
                            let d = n.getMeta(i),
                                c = "object" == typeof d && null != d && "type" in d ? d : void 0;
                            if (c?.type === "open") {
                                let e = t(r);
                                return u(r, c.triggerPos, e, {
                                    previousState: l,
                                    anchorOverride: c.anchorPos
                                })
                            }
                            if (c?.type === "close") return s;
                            if (c?.type === "highlight") {
                                if (!a(l)) return l;
                                let e = c.commandId;
                                return null == e ? {
                                    ...l,
                                    highlightedOptionId: l.visibleOptionIds[0] ?? null
                                } : l.visibleOptionIds.includes(e) ? l.highlightedOptionId === e ? l : {
                                    ...l,
                                    highlightedOptionId: e
                                } : l
                            }
                            if (c?.type === "navigate") {
                                if (!a(l)) return l;
                                let e = l.visibleOptionIds;
                                if (0 === e.length) return null == l.highlightedOptionId ? l : {
                                    ...l,
                                    highlightedOptionId: null
                                };
                                let t = "previous" === c.direction ? -1 : 1,
                                    n = l.highlightedOptionId ? e.indexOf(l.highlightedOptionId) : -1,
                                    o = ((n >= 0 ? n : 0) + t + e.length) % e.length;
                                return e[o] === l.highlightedOptionId ? l : {
                                    ...l,
                                    highlightedOptionId: e[o] ?? null
                                }
                            }
                            if (c?.type === "execute" || !a(l)) return l;
                            let h = null != l.triggerPos ? n.mapping.map(l.triggerPos, -1) : null,
                                f = null != l.anchorPos ? n.mapping.map(l.anchorPos, 1) : null;
                            if (null == h || null == f || !((e, t, n) => {
                                    let l = e.selection;
                                    if (!l.empty || l.from <= t || "/" !== e.doc.textBetween(t, t + 1, "\0", "\0")) return !1;
                                    let o = e.doc.resolve(t),
                                        r = e.selection.$from;
                                    return o.parent === r.parent && (n || !e.doc.textBetween(t + 1, l.from, "\0", "\0").includes("/"))
                                })(r, h, e.allowSlashInQuery?.() === !0)) return s;
                            let m = t(r);
                            return u(r, h, m, {
                                previousState: {
                                    ...l,
                                    triggerPos: h,
                                    anchorPos: f
                                }
                            })
                        }
                    },
                    props: {
                        handleTextInput(t, n, l, o) {
                            let r = o.lastIndexOf("/");
                            if (-1 === r || t.composing || e.allowSlashInQuery?.() === !0 && a(i.getState(t.state))) return !1;
                            let s = t.state.doc.resolve(n),
                                u = r > 0 ? o.slice(0, r) : s.parent.textBetween(0, s.parentOffset, "\0", e => "hard_break" === e.type.name ? "\n" : "\0"),
                                d = t.state.storedMarks ?? s.marks();
                            if (u.length > 0 && !/\s$/u.test(u) || s.parent.type.spec.code || d.some(e => e.type === t.state.schema.marks.code)) return !1;
                            let c = t.state.tr;
                            c.insertText(o, n, l);
                            let h = n + r,
                                f = n + o.length;
                            return t.dispatch(c.setMeta(i, {
                                type: "open",
                                triggerPos: h,
                                anchorPos: f
                            })), !0
                        },
                        handleKeyDown(t, n) {
                            if (n.defaultPrevented || n.isComposing || 229 === n.keyCode) return !1;
                            let l = i.getState(t.state);
                            if ("Escape" === n.key && a(l)) {
                                n.preventDefault(), n.stopPropagation();
                                let e = t.state.tr.setMeta(i, {
                                    type: "close"
                                });
                                return t.dispatch(e), !0
                            }
                            if (!l || !a(l)) return !1;
                            if (("ArrowUp" === n.key || "ArrowDown" === n.key) && l.visibleOptionIds.length > 0) {
                                n.preventDefault(), n.stopPropagation();
                                let e = t.state.tr.setMeta(i, {
                                    type: "navigate",
                                    direction: "ArrowUp" === n.key ? "previous" : "next"
                                });
                                return t.dispatch(e), !0
                            }
                            if ("Enter" === n.key) {
                                let o = l.highlightedOptionId;
                                if (null == o) return d(t), !1;
                                if (n.preventDefault(), n.stopPropagation(), (0, r.h)(o)) return !0;
                                if (null != e.onExecute) return e.onExecute({
                                    commandId: o,
                                    query: l.query,
                                    view: t
                                }), !0;
                                let s = t.state.tr.setMeta(i, {
                                    type: "execute",
                                    commandId: o
                                });
                                return t.dispatch(s), !0
                            }
                            return !1
                        }
                    }
                })
            },
            d: a,
            e: i
        })
    }),
    nwe2: (function(e, t, n) {
        var l = n("f6KK"),
            o = n("d8ZM");
        let r = new WeakMap;

        function i(e) {
            let t = r.get(e);
            return t?.selection === e.state.selection ? t.offsetX : 0
        }

        function s(e, t, n) {
            let {
                doc: s,
                selection: u
            } = e.state, c = "up" === n, h = e.coordsAtPos(u.from).left + i(e), f = (0, o.b)(t.$head);
            if (null != f) {
                let n = e.nodeDOM(t.$head.before(f - 1));
                if (!(n instanceof e.dom.ownerDocument.defaultView.HTMLTableRowElement)) return !1;
                let o = function(e, t) {
                    let n = e.getBoundingClientRect(),
                        l = n.width > 0 ? Math.max(n.left + 1, Math.min(t, n.right - 1)) : t,
                        o = null,
                        r = 1 / 0,
                        i = e.ownerDocument.defaultView.HTMLTableRowElement,
                        s = 0;
                    for (let t = e; t instanceof i; t = t.previousElementSibling) {
                        for (let e of t.cells) {
                            if (0 !== e.rowSpan && e.rowSpan <= s) continue;
                            let t = e.getBoundingClientRect(),
                                n = Math.max(0, t.left - l, l - t.right);
                            if (0 === n) return e;
                            n < r && (o = e, r = n)
                        }
                        s++
                    }
                    return o
                }(n, h);
                if (null == o) return !1;
                let r = e.posAtDOM(o, c ? o.childNodes.length : 0);
                t = l.f.near(s.resolve(r), c ? -1 : 1)
            }
            t instanceof l.h && (t = d(e, t, h));
            let m = u.empty && !u.$from.parent.inlineContent || t.empty && !t.$from.parent.inlineContent ? function(e, t) {
                    let n = e.domAtPos(t.start()).node,
                        l = 1 === n.nodeType ? n : n.parentElement;
                    for (; null != l && 0 === l.getClientRects().length;) l = l.parentElement;
                    return l
                }(e, t.$from) : null,
                p = h - (null == m ? e.coordsAtPos(t.from).left : a(m));
            e.dispatch(e.state.tr.setSelection(t).scrollIntoView());
            let g = e.state.selection;
            return g.$from.doc !== s || (null != m ? p += a(m) - e.coordsAtPos(g.from).left : g.from !== t.from && (p += e.coordsAtPos(t.from).left - e.coordsAtPos(g.from).left), r.set(e, {
                selection: g,
                offsetX: p
            }), !0)
        }

        function a(e) {
            return e.getBoundingClientRect().left - e.scrollLeft
        }

        function u(e, t) {
            for (let n = e.depth; n > 0 && !e.node(n).type.spec.isolating; n--) {
                let l = e.doc.resolve(t ? e.before(n) : e.after(n)),
                    o = t ? l.nodeBefore : l.nodeAfter;
                if (null != o) return "table" === o.type.name ? l : null
            }
            return null
        }

        function d(e, t, n) {
            let {
                $head: o
            } = t, r = e.nodeDOM(o.before());
            if (!(r instanceof e.dom.ownerDocument.defaultView.Element) || 0 === o.parent.content.size) return t;
            let i = r.getBoundingClientRect();
            if (0 === i.width) return t;
            let s = e.coordsAtPos(o.pos),
                a = e.posAtCoords({
                    left: Math.min(Math.max(i.left + 1, n), i.right - 1),
                    top: (s.top + s.bottom) / 2
                });
            return null != a && a.pos >= o.start() && a.pos <= o.end() ? l.h.create(o.doc, a.pos) : t
        }
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    selection: n
                } = e.state, r = "left" === t;
                if (!(n instanceof l.h) || !n.empty || n.$head.parentOffset !== (r ? 0 : n.$head.parent.content.size) || !e.endOfTextblock(t)) return !1;
                let i = u(n.$head, r);
                if (null == i) return !1;
                let s = l.f.findFrom(i, r ? -1 : 1, !0);
                return !!s && null != (0, o.b)(s.$head) && (e.dispatch(e.state.tr.setSelection(s).scrollIntoView()), !0)
            },
            b: function(e, t) {
                let {
                    selection: n,
                    doc: r
                } = e.state;
                if (!(n instanceof l.h) || !n.empty) return !1;
                let i = (0, o.b)(n.$head);
                if (null == i || i < 3) return !1;
                let s = "left" === t,
                    a = l.h.near(r.resolve(s ? n.$head.start(i) : n.$head.end(i)), s ? 1 : -1);
                if (!n.eq(a) || !e.endOfTextblock(t)) return !1;
                let u = l.f.findFrom(r.resolve(s ? n.$head.before(i) : n.$head.after(i)), s ? -1 : 1, !0);
                if (!(u instanceof l.h)) return !1;
                let d = (0, o.b)(u.$head);
                return null != d && !(d < 3) && u.$head.before(d - 2) === n.$head.before(i - 2) && (e.dispatch(e.state.tr.setSelection(u).scrollIntoView()), !0)
            },
            c: s,
            d: function(e, t, n) {
                let a, {
                    selection: d,
                    doc: c
                } = e.state;
                if (!(d instanceof l.h) || !d.empty) return !1;
                let {
                    $head: h
                } = d, f = "up" === t, m = f ? -1 : 1, p = (0, o.b)(h), g = !0;
                if (null == p) a = u(h, f);
                else {
                    g = l.f.near(c.resolve(f ? h.start(p) : h.end(p)), -m).$head.sameParent(h);
                    let e = p - 2,
                        t = h.node(e).childCount,
                        n = h.index(e),
                        o = f ? n : Math.min(t, n + (h.node(p).attrs.rowspan || t));
                    a = c.resolve(h.posAtIndex(o, e))
                }
                if (null == a) return !1;
                if (!g || !e.endOfTextblock(t)) {
                    let t = i(e);
                    return r.set(e, {
                        selection: d,
                        offsetX: t,
                        nativeStep: m
                    }), !1
                }
                if (null != n && null != p && a.parentOffset === (f ? 0 : a.parent.content.size)) {
                    let l = f ? a.before() : a.after();
                    if (n(e, c.resolve(l), t)) return !0
                }
                let w = l.f.findFrom(a, m);
                return null == w ? null != p : s(e, w, t)
            },
            e: function(e) {
                return r.delete(e), !1
            },
            f: function(e, t, n) {
                let o = r.get(e);
                if (o?.nativeStep == null || o.selection !== e.state.selection || n.doc !== e.state.doc || t.pos !== n.pos || !n.parent.inlineContent || (n.pos - o.selection.head) * o.nativeStep <= 0) return null;
                let i = e.coordsAtPos(o.selection.head).left + o.offsetX,
                    s = l.h.create(n.doc, n.pos),
                    a = 0 === o.offsetX ? s : d(e, s, i);
                return r.set(e, {
                    selection: a,
                    offsetX: i - e.coordsAtPos(a.head).left
                }), a
            },
            g: d
        })
    }),
    d8ZM: (function(e, t, n) {
        var l = n("f6KK");
        class o extends l.h {
            cellAnchor;
            cellHead;
            constructor(e, t, n) {
                super(e.$anchor, e.$head), this.cellAnchor = t, this.cellHead = n
            }
            map(e, t) {
                return this.getBookmark().map(t).resolve(e)
            }
            getBookmark() {
                return new r(this.anchor, this.head, this.cellAnchor, this.cellHead)
            }
        }
        class r {
            anchor;
            head;
            cellAnchor;
            cellHead;
            constructor(e, t, n, l) {
                this.anchor = e, this.head = t, this.cellAnchor = n, this.cellHead = l
            }
            map(e) {
                return new r(e.map(this.anchor), e.map(this.head), e.map(this.cellAnchor), e.map(this.cellHead))
            }
            resolve(e) {
                let t = l.h.between(e.resolve(this.anchor), e.resolve(this.head));
                return t instanceof l.h ? new o(t, this.cellAnchor, this.cellHead) : t
            }
        }
        n.d(t, {}, {
            a: o,
            b: function(e) {
                for (let t = e.depth; t > 0; t -= 1)
                    if ("table_cell" === e.node(t).type.name) return t;
                return null
            }
        })
    }),
    AlhV: (function(e, t, n) {
        var l = n("CHJa");

        function o(e, t) {
            if (!t.nodes.table_cell.validContent(e)) return !1;
            let n = !0;
            return e.descendants(e => (e.isBlock && !["paragraph", "list", "ordered_list", "regular_list_item", "task_list_item", "code_block", "heading", "blockquote", "horizontal_rule"].includes(e.type.name) && (n = !1), n)), n
        }

        function r(e) {
            let t = e[0]?.length ?? 0;
            return !!(t > 0 && e.every(e => e.length === t)) && e
        }
        n.d(t, {}, {
            a: o,
            b: function(e, t, n, i, s) {
                let a = e.nodes.table_cell;
                if ("" !== i) {
                    let t = s.createElement("div");
                    t.innerHTML = i;
                    let n = t.querySelector("table");
                    if (null != n) {
                        if (1 !== t.querySelectorAll("table").length || null != n.querySelector("[rowspan]:not([rowspan='1']), [colspan]:not([colspan='1']), caption, dl, blockquote, h1, h2, h3, h4, h5, h6, hr, iframe, video, audio, object, embed, canvas, svg, input, button") || a.inlineContent && null != n.querySelector("ul, ol, pre")) return !1;
                        for (let e of (n.remove(), t.querySelectorAll("style"))) e.remove();
                        if (t.textContent?.trim() || null != t.querySelector("img, video, audio, iframe, hr")) return !1;
                        if (!i.includes("data-pm-slice=")) {
                            let t = [],
                                i = l.a.fromSchema(e);
                            for (let l of Array.from(n.rows)) {
                                let n = [];
                                for (let t of Array.from(l.cells)) {
                                    var u;
                                    let l = s.createElement("div");
                                    if (l.innerHTML = t.innerHTML, !a.inlineContent) {
                                        let e = t.style.fontWeight || ("TH" === t.tagName ? "bold" : "");
                                        if ("" !== e) {
                                            let t = s.createElement("span");
                                            t.style.fontWeight = e, t.append(...Array.from(l.childNodes)), l.append(t)
                                        }
                                    }
                                    if (a.inlineContent)
                                        for (let e of Array.from(l.querySelectorAll("p, div"))) null != e.nextSibling && e.after(s.createElement("br")), e.replaceWith(...Array.from(e.childNodes));
                                    let r = i.parse(l, {
                                            preserveWhitespace: !0
                                        }),
                                        d = a.inlineContent ? (u = r.content).content.every(e => e.isInline) ? u : 1 === u.childCount && u.firstChild?.type.name === "paragraph" ? u.firstChild.content : null : r.content;
                                    if (null == d || !o(d, e)) return !1;
                                    let c = 0;
                                    if (d.descendants(e => {
                                            "string" == typeof e.attrs.src && (c += 1)
                                        }), c < l.querySelectorAll("img").length) return !1;
                                    n.push(d)
                                }
                                t.push(n)
                            }
                            return r(t)
                        }
                    }
                }
                let d = t.content.firstChild;
                if (1 === t.content.childCount && d?.type === e.nodes.table) {
                    let t = [];
                    for (let n = 0; n < d.childCount; n += 1) {
                        let l = [];
                        for (let t = 0; t < d.child(n).childCount; t += 1) {
                            let r = d.child(n).child(t);
                            if (1 !== r.attrs.colspan || 1 !== r.attrs.rowspan || !o(r.content, e)) return !1;
                            l.push(r.content)
                        }
                        t.push(l)
                    }
                    return r(t)
                }
                if ("" !== i || t.content.content.some(t => t.type === e.nodes.table) || !n.includes("	")) return null;
                let c = function(e) {
                    let t = e.replace(/\r\n?/g, "\n"),
                        n = [],
                        l = [],
                        o = "",
                        r = !1,
                        i = !1;
                    for (let e = 0; e < t.length; e += 1) {
                        let s = t[e];
                        if (r) '"' === s ? '"' === t[e + 1] ? (o += '"', e += 1) : (r = !1, i = !0) : o += s;
                        else if ("	" === s || "\n" === s) l.push(o), o = "", i = !1, "\n" === s && (n.push(l), l = []);
                        else {
                            if (i) return null;
                            '"' === s && "" === o ? r = !0 : o += s
                        }
                    }
                    return r ? null : ((l.length > 0 || "" !== o || !t.endsWith("\n")) && (l.push(o), n.push(l)), n)
                }(n);
                return null != c && r(c.map(t => t.map(t => {
                    let n = [];
                    return t.split("\n").forEach((t, l) => {
                        l > 0 && n.push(e.nodes.hard_break.create()), "" !== t && n.push(e.text(t))
                    }), l.c.from(a.inlineContent ? n : e.nodes.paragraph.create(null, n))
                })))
            }
        })
    }),
    IlTK: (function(e, t, n) {
        var l = n("HLFh");
        let o = new WeakMap;
        n.d(t, {}, {
            a: function(e, t) {
                if (!(e instanceof l.e)) return !1;
                for (let n = e.from; n < e.to; n++) {
                    let l = o.get(e.maps[n]);
                    if (l?.has(e.slice(e.from, n).map(t, 1))) return !0
                }
                return !1
            },
            b: function(e, t) {
                t.size > 0 && o.set(e, t)
            }
        })
    }),
    Cn5C: (function(e, t, n) {
        n.d(t, {
            a: () => ef,
            b: () => eP,
            c: () => K,
            d: () => eE,
            e: () => eI,
            f: () => ep,
            g: () => eS,
            h: () => eC,
            i: () => Y,
            j: () => Q,
            k: () => eM,
            l: () => ey,
            m: () => D,
            n: () => em,
            o: () => ex,
            p: () => Z,
            q: () => T
        });
        var l = n("rX7T"),
            o = n("WuTo"),
            r = n("BQCd"),
            i = n("gnJP"),
            s = n("WI1e"),
            a = n("CHJa"),
            u = n("f6KK"),
            d = n("HLFh"),
            c = n("NoA4"),
            h = n("k4Cs"),
            f = n("jAmA"),
            m = n("AlhV"),
            p = n("IlTK"),
            g = n("yIwO");
        class w extends d.j {
            changes;
            replayAcrossRows;
            isNewRowEdit;
            removedCells;
            tableStart;
            constructor(e, t, n = !1, l, o) {
                super(), this.changes = e, this.replayAcrossRows = t, this.isNewRowEdit = n, this.removedCells = l, this.tableStart = o
            }
            apply(e) {
                let t = this.rowEdits(e);
                if (null == t) return d.l.fail("Invalid table column replacement");
                let n = t.table.content.content.slice();
                for (let [e, {
                        index: l,
                        row: o,
                        from: r,
                        to: i,
                        change: s
                    }] of t.rows.entries()) {
                    let t = o.content.content.slice(r, i),
                        u = this.removedCells?.[e];
                    if (null != u && (t.length !== u.childCount || t.some((e, t) => !e.content.eq(u.child(t).content)))) return d.l.fail("Column replay would remove different cells");
                    if (this.isNewRowEdit && t.some(e => !e.content.eq((0, g.c)(e.type)))) return d.l.fail("Cannot remove nonempty cells from a new row");
                    let c = a.c.fromArray([...o.content.content.slice(0, r), ...s.slice.content.content, ...o.content.content.slice(i)]);
                    if (!o.type.validContent(c)) return d.l.fail("Invalid table row content");
                    n[l] = o.copy(c)
                }
                return d.l.fromReplace(e, t.position + 1, t.position + 1 + t.table.content.size, new a.j(a.c.fromArray(n), 0, 0))
            }
            getMap() {
                return new d.k(this.changes.flatMap(e => [e.from, e.to - e.from, e.slice.size]))
            }
            invert(e) {
                let t = this.rowEdits(e);
                if (null == t) throw RangeError("Invalid table column inverse");
                let n = 0;
                return new w(t.rows.map(e => {
                    let {
                        row: t,
                        from: l,
                        to: o,
                        change: r
                    } = e, i = r.from + n;
                    return n += r.slice.size - (r.to - r.from), new d.i(i, i + r.slice.size, new a.j(a.c.fromArray(t.content.content.slice(l, o)), 0, 0))
                }), this.replayAcrossRows ?? (0, g.h)(t.table), this.isNewRowEdit, t.rows.map(e => {
                    let {
                        change: t
                    } = e;
                    return t.slice.content
                }), t.position)
            }
            map(e) {
                if (null != this.tableStart && (0, p.a)(e, this.tableStart)) return null;
                let t = [],
                    n = [];
                for (let [l, o] of this.changes.entries()) {
                    let r = o.map(e);
                    if (null == r) continue;
                    let i = this.removedCells?.[l];
                    if (null != i) {
                        let t = function(e, t, n, l) {
                            let o = t.from,
                                r = n.from,
                                i = [];
                            for (let t of e.content) {
                                let e = o;
                                if (o += t.nodeSize, l.mapResult(e + 1, 1).deletedAcross && l.mapResult(o - 1, -1).deletedAcross) continue;
                                let n = l.map(o, -1);
                                if (l.map(e, 1) !== r || n <= r) return null;
                                i.push(t), r = n
                            }
                            return r === n.to ? a.c.fromArray(i) : null
                        }(i, o, r, e);
                        if (null == t) return null;
                        if (r.from === r.to && 0 === r.slice.size) continue;
                        n.push(t)
                    }
                    t.push(r)
                }
                return 0 === t.length ? null : new w(t, this.replayAcrossRows, this.isNewRowEdit, null == this.removedCells ? void 0 : n, null == this.tableStart ? void 0 : e.map(this.tableStart, 1))
            }
            completeHistoryReplay(e, t) {
                if (!this.replayAcrossRows || this.isNewRowEdit) return !0;
                let n = this.rowEdits(e.docs[t]);
                if (null == n) return !1;
                let l = e.mapping.slice(t).map(n.position),
                    o = e.doc.nodeAt(l);
                if (o?.type.name !== "table") return !1;
                let {
                    row: r,
                    from: i,
                    to: s,
                    change: u
                } = n.rows[0], c = u.slice.content.content, h = r.childCount, f = h - (s - i) + c.length;
                if (f === h || o.content.content.every(e => e.childCount === f)) return !0;
                if (n.rows.some(e => e.row.childCount !== h || e.from !== i || e.to !== s || e.change.slice.content.childCount !== c.length)) return !1;
                for (let t of (0, g.f)(o, l).reverse()) {
                    if (t.rowNode.childCount === f) continue;
                    if (t.rowNode.childCount !== h || t.rowNode.content.content.some(e => 1 !== e.attrs.colspan || 1 !== e.attrs.rowspan)) return !1;
                    let n = (0, g.d)(t, i, !0),
                        l = (0, g.d)(t, s, !0);
                    if (null == n || null == l) return !1;
                    let o = c.map(e => (0, g.a)(e.type, t.rowIndex, e.attrs.align)),
                        r = new w([new d.i(n, l, new a.j(a.c.fromArray(o), 0, 0))], !1, !0);
                    if (e.maybeStep(r).failed) return !1
                }
                return !0
            }
            toJSON() {
                return {
                    stepType: "writingBlockTableColumn",
                    changes: this.changes.map(e => e.toJSON())
                }
            }
            rowEdits(e) {
                let t = this.changes[0];
                if (null == t || t.from < 0 || t.from > e.content.size) return null;
                let n = e.resolve(t.from),
                    l = n.depth - 1;
                if ("table_row" !== n.parent.type.name || l < 1) return null;
                let o = n.node(l);
                if ("table" !== o.type.name) return null;
                let r = n.before(l),
                    i = [],
                    s = 0;
                return o.forEach((e, t, n) => {
                    let l = this.changes[s],
                        o = r + t + 2,
                        a = o + e.content.size;
                    if (null == l || l.from < o || l.to > a || l.from > l.to || l.slice.openStart || l.slice.openEnd) return;
                    let u = l.from === a ? e.childCount : -1,
                        d = l.to === a ? e.childCount : -1;
                    e.forEach((e, t, n) => {
                        o + t === l.from && (u = n), o + t === l.to && (d = n)
                    }), u < 0 || d < 0 || (i.push({
                        index: n,
                        row: e,
                        from: u,
                        to: d,
                        change: l
                    }), s += 1)
                }), s === this.changes.length ? {
                    table: o,
                    position: r,
                    rows: i
                } : null
            }
        }
        class b extends d.i {
            rowCount;
            columns;
            tableStart;
            constructor(e, t, n, l, o, r) {
                super(e, t, n), this.rowCount = l, this.columns = o, this.tableStart = r
            }
            apply(e) {
                let {
                    from: t,
                    to: n,
                    slice: l
                } = this;
                if (t < 0 || n > e.content.size || t > n) return d.l.fail("Invalid table row range");
                let o = e.resolve(t),
                    r = e.resolve(n);
                return o.sameParent(r) && "table" === o.parent.type.name && 0 === o.textOffset && 0 === r.textOffset && r.index() - o.index() === (0 === l.size ? this.rowCount : 0) ? super.apply(e) : d.l.fail("Invalid table row replacement")
            }
            invert(e) {
                let {
                    from: t,
                    slice: n
                } = this, l = e.resolve(t), o = this.columns;
                if (null == o && 0 === n.size) {
                    let e = 0 === l.index() ? this.rowCount : 0,
                        t = l.parent.maybeChild(e);
                    if (null != t) {
                        let n = l.posAtIndex(e) + 1,
                            r = [];
                        t.forEach((e, t) => {
                            let l = n + t;
                            r.push({
                                from: l + 1,
                                to: l + e.nodeSize - 1
                            })
                        }), o = r
                    }
                }
                let r = super.invert(e);
                return new b(r.from, r.to, r.slice, this.rowCount, null == o ? void 0 : v(o, this.getMap()), l.before())
            }
            map(e) {
                let {
                    tableStart: t
                } = this;
                if (null != t && (0, p.a)(e, t)) return null;
                let n = super.map(e);
                return null == n ? null : new b(n.from, n.to, n.slice, this.rowCount, null == this.columns ? void 0 : v(this.columns, e), null == t ? void 0 : e.map(t, 1))
            }
            merge(e) {
                return null
            }
            completeHistoryReplay(e, t) {
                let n, {
                        columns: l
                    } = this,
                    o = e.docs[t].resolve(this.from),
                    r = o.before(),
                    i = e.mapping.slice(t).map(r, 1),
                    s = e.doc.nodeAt(i);
                if (s?.type.name !== "table") return !1;
                let u = o.index();
                if (0 === this.slice.size) return 0 === u && (0, g.i)(e, i + 1, !0), !0;
                if (null == l) return !1;
                let c = u + this.rowCount,
                    h = s.content.content.filter((e, t) => t < u || t >= c),
                    f = h[0]?.childCount;
                if (null == f || h.some(e => e.childCount !== f)) return !1;
                let m = (0, g.f)(s, i).slice(u, c),
                    p = Array.from({
                        length: f
                    }, (e, t) => h.find(e => null != e.child(t).attrs.pageColumnWidth)?.child(t).attrs.pageColumnWidth ?? null);
                if (0 === u)
                    for (let {
                            rowPos: t,
                            rowIndex: n
                        }
                        of(0, g.f)(s, i).slice(0, c + 1))(0, g.i)(e, t, 0 === n);
                if (m.every(e => {
                        let {
                            rowNode: t
                        } = e;
                        return t.childCount === f
                    })) return y(e, i, u, c, p), !0;
                if (m.some(e => {
                        let {
                            rowNode: t
                        } = e;
                        return t.childCount !== l.length
                    })) return !1;
                let w = e.doc.nodeAt(i),
                    b = v(l, e.mapping.slice(t)),
                    M = Array(f).fill(void 0),
                    x = -1;
                for (let [t, l] of b.entries()) {
                    if (null == l) continue;
                    if (!Number.isInteger(l.from) || !Number.isInteger(l.to) || l.from < 0 || l.from > l.to || l.to > e.doc.content.size) return !1;
                    let o = e.doc.resolve(l.from),
                        r = e.doc.resolve(l.to);
                    if (!o.sameParent(r) || "table_cell" !== o.parent.type.name || o.node(o.depth - 2) !== w || o.start() !== l.from || r.end() !== l.to) return !1;
                    let i = o.before(o.depth - 1),
                        s = o.index(o.depth - 1);
                    if (null != n && i !== n || s <= x || s >= f) return !1;
                    n = i, x = s, M[s] = t
                }
                if (M.filter(e => null != e).length !== Math.min(f, l.length)) return !1;
                let I = new Set(M);
                for (let t of m.reverse())
                    if (f < l.length)
                        for (let n = l.length - 1; n >= 0; n--) {
                            if (I.has(n)) continue;
                            let l = (0, g.d)(t, n, !1);
                            if (null == l || e.maybeStep(new d.i(l, l + t.rowNode.child(n).nodeSize, a.j.empty)).failed) return !1
                        } else {
                            let n = l.length;
                            for (let l = f - 1; l >= 0; l--) {
                                if (null != M[l]) {
                                    n--;
                                    continue
                                }
                                let o = (0, g.d)(t, n, !0);
                                if (null == o) return !1;
                                let r = h[0].child(l).attrs.align,
                                    i = (0, g.a)(t.rowNode.child(0).type, t.rowIndex, r);
                                if (e.maybeStep(new d.i(o, o, new a.j(a.c.from(i), 0, 0))).failed) return !1
                            }
                        }
                return y(e, i, u, c, p), !0
            }
        }

        function v(e, t) {
            return e.map(e => {
                if (null == e) return null;
                let n = t.mapResult(e.from, -1),
                    l = t.mapResult(e.to, 1);
                return n.deletedAcross || l.deletedAcross ? null : {
                    from: n.pos,
                    to: l.pos
                }
            })
        }

        function y(e, t, n, l, o) {
            let r = e.doc.nodeAt(t);
            if (null != r && null == r.attrs.dilTemplate)
                for (let {
                        rowNode: i,
                        rowPos: s
                    }
                    of(0, g.f)(r, t).slice(n, l)) i.forEach((t, n, l) => {
                    let r = o[l];
                    t.type.spec.attrs?.pageColumnWidth != null && t.attrs.pageColumnWidth !== r && e.setNodeAttribute(s + 1 + n, "pageColumnWidth", r)
                })
        }
        var M = n("nwe2"),
            x = n("ahCC"),
            I = n("d8ZM");
        let C = "table",
            S = "table_cell",
            P = "Delete this column? It contains content.",
            E = {
                addRowAbove: "Add row above",
                addRowBelow: "Add row below",
                deleteRow: "Delete row",
                addColumnLeft: "Add column left",
                addColumnRight: "Add column right",
                deleteColumn: "Delete column",
                deleteColumnConfirmation: P
            },
            H = /^table(?:\s+(\d+)\s*[xX]\s*(\d+))?$/,
            k = /^:?-{3,}:?$/;

        function A(e) {
            return e.dom.ownerDocument.defaultView ?? ("u" < typeof window ? null : window)
        }
        let N = (e, t) => A(e)?.confirm?.(t) ?? !0,
            T = new u.e("writingBlockTableEditingPlugin"),
            R = e => Math.max(1, Math.min(20, e));

        function D(e) {
            let t, n = (t = (e ?? "").trim().toLowerCase()).startsWith("/") ? t.slice(1).trim() : t,
                l = H.exec(n);
            if (!l) return {
                rows: 3,
                columns: 3
            };
            let o = Number.parseInt(l[1] ?? "", 10),
                r = Number.parseInt(l[2] ?? "", 10);
            return Number.isNaN(o) || Number.isNaN(r) ? {
                rows: 3,
                columns: 3
            } : {
                rows: R(o),
                columns: R(r)
            }
        }

        function K(e, t, n) {
            let l = e.schema.nodes.table,
                o = e.schema.nodes.table_row,
                r = e.schema.nodes.table_cell;
            if (!l || !o || !r) return null;
            let i = R(t),
                s = R(n),
                a = [];
            for (let e = 0; e < i; e += 1) {
                let t = [];
                for (let n = 0; n < s; n += 1) t.push(r.create({
                    rowIndex: +(0 !== e),
                    colspan: 1,
                    rowspan: 1
                }, (0, g.c)(r)));
                a.push(o.create(null, t))
            }
            return l.create(null, a)
        }

        function L(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selection.$anchor,
                n = null,
                l = null,
                o = null;
            for (let e = t.depth; e > 0; e -= 1) {
                let r = t.node(e).type.name;
                if (null == n && r === S) {
                    n = e;
                    continue
                }
                if (null == l && "table_row" === r) {
                    l = e;
                    continue
                }
                if (r === C) {
                    o = e;
                    break
                }
            }
            return null == n || null == l || null == o ? null : {
                tableNode: t.node(o),
                tablePos: t.before(o),
                rowIndex: t.index(o),
                columnIndex: t.index(l)
            }
        }

        function O(e) {
            let t = L(e);
            if (!t) return null;
            let n = (0, g.f)(t.tableNode, t.tablePos)[t.rowIndex];
            if (!n) return null;
            let l = Math.max(0, Math.min(t.columnIndex, n.rowNode.childCount - 1)),
                o = (0, g.d)(n, l, !1);
            if (null == o) return null;
            let r = n.rowNode.child(l);
            return {
                context: t,
                rowInfo: n,
                cellPos: o,
                cellNode: r
            }
        }

        function z(e) {
            return {
                rowIndex: e.rowIndex,
                columnIndex: e.columnIndex
            }
        }

        function F(e, t) {
            let n = (0, g.f)(e.tableNode, e.tablePos);
            if (0 === n.length) return z(e);
            let l = Math.max(0, Math.min(t.rowIndex, n.length - 1)),
                o = n[l];
            return o && 0 !== o.rowNode.childCount ? {
                rowIndex: l,
                columnIndex: Math.max(0, Math.min(t.columnIndex, o.rowNode.childCount - 1))
            } : {
                rowIndex: l,
                columnIndex: 0
            }
        }

        function $(e, t) {
            let n = L(e);
            if (!n) return null;
            let l = z(n),
                o = t?.structureSelectionAnchor ?? l,
                r = t?.structureSelectionHead ?? l;
            return {
                context: n,
                anchor: F(n, o),
                head: F(n, r)
            }
        }

        function _(e, t) {
            let n = (0, g.f)(e.tableNode, e.tablePos),
                l = F(e, t),
                o = n[l.rowIndex];
            if (!o) return null;
            let r = (0, g.d)(o, l.columnIndex, !1);
            if (null == r) return null;
            let i = o.rowNode.child(l.columnIndex);
            return {
                rowInfo: o,
                cellPos: r,
                cellNode: i
            }
        }

        function B(e, t) {
            let n = $(e, t);
            if (!n) return null;
            let l = Math.min(n.anchor.rowIndex, n.head.rowIndex),
                o = Math.max(n.anchor.rowIndex, n.head.rowIndex),
                r = Math.min(n.anchor.columnIndex, n.head.columnIndex),
                i = Math.max(n.anchor.columnIndex, n.head.columnIndex),
                s = (0, g.f)(n.context.tableNode, n.context.tablePos),
                a = [];
            for (let e = l; e <= o; e += 1) {
                let t = s[e];
                if (!t || 0 === t.rowNode.childCount) continue;
                let n = Math.max(0, Math.min(r, t.rowNode.childCount - 1)),
                    l = Math.max(0, Math.min(i, t.rowNode.childCount - 1));
                for (let o = n; o <= l; o += 1) {
                    let n = (0, g.d)(t, o, !1);
                    null != n && a.push({
                        rowIndex: e,
                        columnIndex: o,
                        cellPos: n,
                        cellNode: t.rowNode.child(o)
                    })
                }
            }
            return {
                context: n.context,
                anchor: n.anchor,
                head: n.head,
                cells: a
            }
        }

        function V(e) {
            return e.editable
        }

        function j(e) {
            let t = (0, g.f)(e.tableNode, e.tablePos);
            if (0 === t.length) return !1;
            let n = t.length - 1;
            if (e.rowIndex !== n) return !1;
            let l = t[n];
            return !(l.rowNode.childCount <= 0) && e.columnIndex >= l.rowNode.childCount - 1
        }

        function W(e, t) {
            let n = e.state.tr.setMeta(T, {
                    isStructureMode: !1,
                    isEditMode: !1,
                    allowCellNavigationInEditMode: !1
                }),
                l = function(e, t, n) {
                    let l = Math.min(t + n.nodeSize, e.doc.content.size),
                        o = e.doc.resolve(l).nodeAfter;
                    if (o?.isTextblock && 0 === o.textContent.trim().length) return {
                        tr: e,
                        selectionPos: Math.min(l + 1, e.doc.content.size)
                    };
                    let r = e.doc.type.schema.nodes.paragraph;
                    if (!r) return {
                        tr: e,
                        selectionPos: l
                    };
                    let i = e.doc.resolve(l);
                    if (!i.parent.canReplaceWith(i.index(), i.index(), r)) return {
                        tr: e,
                        selectionPos: l
                    };
                    let s = r.createAndFill() ?? r.create();
                    return {
                        tr: e = e.insert(l, s),
                        selectionPos: Math.min(l + 1, e.doc.content.size)
                    }
                }(n, t.tablePos, t.tableNode);
            return n = l.tr.setSelection(u.h.near(l.tr.doc.resolve(l.selectionPos), 1)).scrollIntoView(), e.dispatch(n), !0
        }

        function q(e, t) {
            let n = Math.min(t.tablePos + t.tableNode.nodeSize, e.state.doc.content.size),
                l = e.state.doc.resolve(n).nodeAfter;
            if (!l?.isTextblock) return !1;
            let o = Math.min(n + 1, e.state.doc.content.size),
                r = e.state.tr.setMeta(T, {
                    isStructureMode: !1,
                    isEditMode: !1,
                    allowCellNavigationInEditMode: !1
                }).setSelection(u.h.near(e.state.tr.doc.resolve(o), 1)).scrollIntoView();
            return e.dispatch(r), !0
        }

        function U(e, t) {
            if (t.tablePos <= 0) return !1;
            let n = e.state.tr.setMeta(T, {
                isStructureMode: !1,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1
            }).setSelection(u.f.near(e.state.doc.resolve(t.tablePos), -1)).scrollIntoView();
            return e.dispatch(n), !0
        }

        function X(e) {
            e.dispatch(e.state.tr.setMeta(T, {
                isStructureMode: !0,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1
            }))
        }

        function J(e, t) {
            let n = O(e.state);
            if (null == n) return !1;
            let l = "left" === t || "up" === t;
            return u.h.near(e.state.doc.resolve(l ? n.cellPos + 1 : n.cellPos + n.cellNode.nodeSize - 1), l ? 1 : -1).$head.sameParent(e.state.selection.$head) && e.endOfTextblock(t)
        }

        function Q(e) {
            return null != L(e)
        }

        function Z(e) {
            let t = L(e, e.selection.$from),
                n = L(e, e.selection.$to);
            if (null == t || n?.tablePos !== t.tablePos) return null;
            let l = t.tableNode.childCount - 1,
                o = t.tableNode.child(l).childCount - 1,
                r = _(t, {
                    rowIndex: 0,
                    columnIndex: 0
                }),
                i = _(t, {
                    rowIndex: l,
                    columnIndex: o
                });
            return null == r || null == i ? null : ex(e, r.cellPos + 1, i.cellPos + 1)
        }

        function Y(e) {
            return Q(e.state)
        }

        function G(e, t, n, l) {
            let {
                bias: o = 1,
                scrollIntoView: r = !0
            } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, i = e.doc.nodeAt(t);
            if (!i || i.type.name !== C) return null;
            let s = (0, g.f)(i, t);
            if (0 === s.length) return null;
            let a = Math.max(0, Math.min(n, s.length - 1)),
                d = s[a];
            if (!d || 0 === d.rowNode.childCount) return null;
            let c = Math.max(0, Math.min(l, d.rowNode.childCount - 1)),
                h = (0, g.d)(d, c, !1);
            if (null == h) return null;
            let f = 1 === o ? h + 1 : h + d.rowNode.child(c).nodeSize - 1;
            return e.setSelection(u.h.near(e.doc.resolve(f), o)), r ? e.scrollIntoView() : e
        }

        function ee(e, t, n, l) {
            if (0 === t.rows.length) return !1;
            let o = Math.max(0, Math.min(n, t.rows.length - 1)),
                r = t.rows.item(o);
            if (!r || 0 === r.cells.length) return !1;
            let i = Math.max(0, Math.min(l, r.cells.length - 1)),
                s = r.cells.item(i),
                a = A(e)?.HTMLTableCellElement;
            if (!(null != a && s instanceof a || "u" > typeof HTMLTableCellElement && s instanceof HTMLTableCellElement)) return !1;
            let d = function(e, t) {
                let n = t.getBoundingClientRect();
                for (let t of [{
                        left: n.left + Math.min(4, Math.max(1, n.width - 1)),
                        top: n.top + Math.min(4, Math.max(1, n.height - 1))
                    }, {
                        left: n.left + n.width / 2,
                        top: n.top + n.height / 2
                    }]) {
                    let n = null;
                    try {
                        n = e.posAtCoords(t)
                    } catch {
                        n = null
                    }
                    if (n?.pos != null) return Math.max(0, Math.min(n.pos, e.state.doc.content.size))
                }
                try {
                    let n = e.posAtDOM(t, 0);
                    return Math.max(0, Math.min(n + 1, e.state.doc.content.size))
                } catch {
                    return null
                }
            }(e, s);
            return null != d && (e.dispatch(e.state.tr.setSelection(u.h.near(e.state.doc.resolve(d), 1))), !0)
        }

        function et(e, t, n, l) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                r = [];
            for (let e of (0, g.f)(t.tableNode, t.tablePos)) {
                let t = (0, g.d)(e, Math.min(n, e.rowNode.childCount), !0);
                if (null == t) continue;
                let i = (0, g.a)(l, e.rowIndex);
                r.push(new d.i(t, t, new a.j(a.c.fromArray(Array.from({
                    length: o
                }, () => i)), 0, 0)))
            }
            return e.step(new w(r))
        }

        function en(e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (!V(e)) return !1;
            let i = e.state.schema.nodes.table_cell;
            if (!i) return !0;
            let s = Math.max(0, n),
                a = et(e.state.tr, t, s, i, o);
            if (r) return e.dispatch(ei(a, e.state, t)), !0;
            let u = a.doc.nodeAt(t.tablePos);
            if (!u || u.type.name !== C) return e.dispatch(a.scrollIntoView()), !0;
            let d = (0, g.f)(u, t.tablePos);
            if (0 === d.length) return e.dispatch(a.scrollIntoView()), !0;
            let c = {
                    rowIndex: 0,
                    columnIndex: Math.max(0, Math.min(s, d[0].rowNode.childCount - 1))
                },
                h = (G(a, t.tablePos, c.rowIndex, c.columnIndex) ?? a).setMeta(T, {
                    isStructureMode: !0,
                    isEditMode: !1,
                    allowCellNavigationInEditMode: !1,
                    structureSelectionAnchor: c,
                    structureSelectionHead: c
                });
            return e.dispatch((0, l.e)(h).scrollIntoView()), !0
        }

        function el(e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : o > 1,
                i = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
            if (!V(e)) return !1;
            let s = e.state.schema.nodes.table_row,
                a = e.state.schema.nodes.table_cell;
            if (!s || !a) return !0;
            let u = (0, g.f)(t.tableNode, t.tablePos);
            if (0 >= (0, g.e)(t.tableNode)) return !0;
            let d = Math.max(0, Math.min(n, u.length)),
                c = d >= u.length ? t.tablePos + t.tableNode.nodeSize - 1 : u[d].rowPos,
                h = Array.from({
                    length: o
                }, (e, n) => (0, g.b)(t.tableNode, d + n)),
                f = e.state.tr;
            if (0 === d && (0, g.i)(f, t.tablePos + 1, !1), f = f.insert(c, h), i) return e.dispatch(ei(f, e.state, t)), !0;
            let m = f.doc.nodeAt(t.tablePos);
            if (!m || m.type.name !== C) return e.dispatch(f.scrollIntoView()), !0;
            let p = (0, g.f)(m, t.tablePos);
            if (0 === p.length) return e.dispatch(f.scrollIntoView()), !0;
            let w = {
                rowIndex: Math.max(0, Math.min(d, p.length - 1)),
                columnIndex: 0
            };
            return f = (f = G(f, t.tablePos, w.rowIndex, w.columnIndex) ?? f).setMeta(T, {
                isStructureMode: !0,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: w,
                structureSelectionHead: w
            }), e.dispatch((r ? (0, l.e)(f) : f).scrollIntoView()), !0
        }

        function eo(e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (!V(e)) return !1;
            let i = (0, g.f)(t.tableNode, t.tablePos);
            if (i.length <= o) return !0;
            let s = Math.max(0, Math.min(n, i.length - 1)),
                u = i[s],
                d = i[Math.min(s + o - 1, i.length - 1)],
                c = u.rowPos,
                h = d.rowPos + d.rowNode.nodeSize,
                f = (0, g.h)(t.tableNode) ? e.state.tr.step(new b(c, h, a.j.empty, d.rowIndex - u.rowIndex + 1)) : e.state.tr.delete(c, h);
            if (0 === s && (0, g.i)(f, t.tablePos + 1, !0), r) return e.dispatch(ei(f, e.state, t)), !0;
            let m = f.doc.nodeAt(t.tablePos);
            if (!m || m.type.name !== C) return e.dispatch(f.scrollIntoView()), !0;
            let p = (0, g.f)(m, t.tablePos),
                w = Math.max(0, Math.min(s, p.length - 1)),
                v = Math.max(0, Math.min(t.columnIndex, p[w].rowNode.childCount - 1)),
                y = G(f, t.tablePos, w, v) ?? f;
            return o > 1 && y.setMeta(T, {
                structureSelectionAnchor: {
                    rowIndex: w,
                    columnIndex: v
                },
                structureSelectionHead: {
                    rowIndex: w,
                    columnIndex: v
                }
            }), e.dispatch((0, l.e)(y).scrollIntoView()), !0
        }

        function er(e, t, n) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t => N(e, t),
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : P,
                i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            if (!V(e)) return !1;
            let u = (0, g.f)(t.tableNode, t.tablePos).filter(e => n < e.rowNode.childCount);
            if (0 === u.length || u.some(e => e.rowNode.childCount <= i) || u.some(e => e.rowNode.content.content.slice(n, n + i).some(e => e.textContent.trim().length > 0)) && !o(r)) return !0;
            let c = [];
            for (let e of u) {
                let t = (0, g.d)(e, n, !1),
                    l = (0, g.d)(e, n + i, !0);
                null != t && null != l && c.push(new d.i(t, l, a.j.empty))
            }
            let h = e.state.tr.step(new w(c));
            if (s) return e.dispatch(ei(h, e.state, t)), !0;
            let f = h.doc.nodeAt(t.tablePos);
            if (!f || f.type.name !== C) return e.dispatch(h.scrollIntoView()), !0;
            let m = (0, g.f)(f, t.tablePos),
                p = Math.max(0, Math.min(t.rowIndex, m.length - 1)),
                b = Math.max(0, Math.min(n, m[p].rowNode.childCount - 1)),
                v = G(h, t.tablePos, p, b) ?? h;
            return i > 1 && v.setMeta(T, {
                structureSelectionAnchor: {
                    rowIndex: p,
                    columnIndex: b
                },
                structureSelectionHead: {
                    rowIndex: p,
                    columnIndex: b
                }
            }), e.dispatch((0, l.e)(v).scrollIntoView()), !0
        }

        function ei(e, t, n) {
            let {
                selection: o
            } = t, r = !1, i = l => {
                let i = L(t, l),
                    s = (0, I.b)(l);
                if (i?.tablePos === n.tablePos && null != s && e.mapping.mapResult(l.before(s) + 1).deleted) {
                    r = !0;
                    let t = e.doc.nodeAt(n.tablePos);
                    if (null != t) {
                        let n = _({
                            ...i,
                            tableNode: t
                        }, z(i));
                        if (null != n) {
                            let t = e.doc.resolve(n.cellPos + Math.min(l.pos - l.before(s), n.cellNode.nodeSize - 1));
                            return o instanceof I.a ? t : u.h.near(t, t.pos === n.cellPos + n.cellNode.nodeSize - 1 ? -1 : 1).$head
                        }
                    }
                }
                return e.doc.resolve(e.mapping.map(l.pos))
            }, s = null, a = null;
            if (o instanceof I.a) {
                let n = i(t.doc.resolve(o.cellAnchor)),
                    l = i(t.doc.resolve(o.cellHead)),
                    r = L(t, n),
                    d = L(t, l),
                    c = u.h.near(l);
                null != r && null != d && c instanceof u.h ? (s = z(r), a = z(d), e.setSelection(new I.a(c, n.pos, l.pos))) : e.setSelection(o.map(e.doc, e.mapping))
            } else {
                e.setSelection(o instanceof u.h ? u.h.between(i(o.$anchor), i(o.$head)) : o.map(e.doc, e.mapping)), o instanceof u.h || (r = !e.selection.map(t.doc, e.mapping.invert()).eq(o));
                let n = L(t, e.selection.$head);
                s = a = null == n ? null : z(n)
            }
            let d = T.getState(t);
            return e.setMeta(T, null == d ? void 0 : {
                ...d,
                structureSelectionAnchor: s,
                structureSelectionHead: a
            }), (0, l.e)(e, {
                preserveSelection: !r
            })
        }

        function es(e, t, n) {
            let l = L(e.state);
            if (!l) return !1;
            let o = e => n?.mode === "structure" ? {
                    isStructureMode: !0,
                    isEditMode: !1,
                    allowCellNavigationInEditMode: !1,
                    structureSelectionAnchor: e,
                    structureSelectionHead: e
                } : n?.mode === "edit" ? {
                    isStructureMode: !1,
                    isEditMode: !0,
                    allowCellNavigationInEditMode: n.allowCellNavigationInEditMode ?? !1,
                    structureSelectionAnchor: e,
                    structureSelectionHead: e
                } : void 0,
                r = (0, g.f)(l.tableNode, l.tablePos),
                i = r[l.rowIndex];
            if (!i) return !0;
            if ("previous" === t) {
                let t = l.rowIndex,
                    n = l.columnIndex - 1;
                if (n < 0) {
                    if ((t -= 1) < 0) return !0;
                    n = Math.max(0, r[t].rowNode.childCount - 1)
                }
                let i = {
                        rowIndex: t,
                        columnIndex: n
                    },
                    s = G(e.state.tr, l.tablePos, t, n) ?? e.state.tr,
                    a = o(i);
                return a && (s = s.setMeta(T, a)), e.dispatch(s.scrollIntoView()), !0
            }
            let s = l.rowIndex,
                a = l.columnIndex + 1;
            if (a >= i.rowNode.childCount && (s += 1, a = 0), s >= r.length) {
                let t = {
                    rowIndex: r.length,
                    columnIndex: 0
                };
                return function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        l = arguments.length > 3 ? arguments[3] : void 0;
                    if (!V(e)) return !1;
                    let o = e.state.schema.nodes.table_row,
                        r = e.state.schema.nodes.table_cell;
                    if (!o || !r) return !0;
                    let i = (0, g.e)(t.tableNode);
                    if (i <= 0) return !0;
                    let s = t.tableNode.childCount,
                        a = e.state.tr.insert(t.tablePos + t.tableNode.nodeSize - 1, (0, g.b)(t.tableNode, s)),
                        u = Math.max(0, Math.min(n, i - 1)),
                        d = G(a, t.tablePos, s, u) ?? a,
                        c = null == l ? d : d.setMeta(T, l);
                    return e.dispatch(c), !0
                }(e, l, t.columnIndex, o(t))
            }
            let u = {
                    rowIndex: s,
                    columnIndex: a
                },
                d = G(e.state.tr, l.tablePos, s, a) ?? e.state.tr,
                c = o(u);
            return c && (d = d.setMeta(T, c)), e.dispatch(d.scrollIntoView()), !0
        }

        function ea(e, t, n) {
            let l = L(e.state);
            if (!l) return !1;
            let o = l.rowIndex + ("previous" === t ? -1 : 1);
            if (o < 0 || o >= l.tableNode.childCount) return n?.consumeIfNoAdjacentRow ?? !0;
            let r = n?.preferredClientX,
                i = G(e.state.tr, l.tablePos, o, l.columnIndex, {
                    bias: null != r && "previous" === t ? -1 : 1
                });
            return null != i && (null != r && i.selection instanceof u.h && i.setSelection((0, M.g)(e, i.selection, r)), e.dispatch(i), !0)
        }

        function eu(e, t) {
            if (!V(e)) return !1;
            let n = L(e.state);
            if (!n) return !1;
            let o = e.state.schema.nodes.table_cell;
            if (!o) return !0;
            let r = "left" === t ? n.columnIndex : n.columnIndex + 1,
                i = et(e.state.tr, n, r, o),
                s = G(i, n.tablePos, n.rowIndex, r) ?? i;
            return e.dispatch((0, l.e)(s)), !0
        }

        function ed(e, t) {
            if (!V(e)) return !1;
            let n = L(e.state);
            return !!n && (ec(e, n, "column", n.columnIndex + ("left" === t ? -1 : 1)), !0)
        }

        function ec(e, t, n, o, r) {
            let {
                allowHeaderRowMove: i = !1,
                scrollIntoView: s
            } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, a = "row" === n ? t.tableNode.childCount : (0, g.e)(t.tableNode), d = r?.from ?? ("row" === n ? t.rowIndex : t.columnIndex), c = null == r ? 1 : r.to - r.from + 1;
            if (!Number.isInteger(o) || o < 0 || o + c > a || o === d || "row" === n && !i && (0 === d || 0 === o) || !(0, g.h)(t.tableNode)) return !1;
            let h = (0, g.f)(t.tableNode, t.tablePos),
                f = e.state.tr;
            if ("row" === n) {
                let e = h[d],
                    n = h[d + c - 1],
                    l = o > d ? o + c : o,
                    r = h[l]?.rowPos ?? t.tablePos + t.tableNode.nodeSize - 1;
                if (f.step(new x.a(e.rowPos, n.rowPos + n.rowNode.nodeSize, r)), 0 === d || 0 === o)
                    for (let e of (0, g.f)(f.doc.nodeAt(t.tablePos), t.tablePos))(0, g.i)(f, e.rowPos, 0 === e.rowIndex)
            } else
                for (let e = h.length - 1; e >= 0; e -= 1) {
                    let t = h[e],
                        n = (0, g.d)(t, d, !1),
                        l = (0, g.d)(t, d + c, !0),
                        r = (0, g.d)(t, o > d ? o + c : o, !0);
                    if (null == n || null == l || null == r) return !1;
                    f.step(new x.a(n, l, r))
                }
            let m = e.state.selection,
                p = O(e.state),
                w = null == r ? null : eC(e.state),
                b = "row" === n ? "rowIndex" : "columnIndex";
            if (null != w && p?.context.tablePos === t.tablePos && [w.anchor, w.head].every(e => e[b] >= d && e[b] < d + c)) {
                let n = {
                        ...w.anchor,
                        [b]: w.anchor[b] + o - d
                    },
                    r = {
                        ...w.head,
                        [b]: w.head[b] + o - d
                    };
                return G(f, t.tablePos, r.rowIndex, r.columnIndex, {
                    scrollIntoView: s
                }), e.dispatch((0, l.e)(f.setMeta(T, {
                    structureSelectionAnchor: n,
                    structureSelectionHead: r
                }))), !0
            }
            let v = (0, I.b)(m.$from),
                y = (0, I.b)(m.$to),
                M = m instanceof u.h && null != v && null != y && m.$from.before(v) === m.$to.before(y) && p?.context.tablePos === t.tablePos && p.context[b] >= d && p.context[b] < d + c,
                C = M && null != p ? p.context : t,
                S = "row" === n ? C.rowIndex + o - d : C.rowIndex,
                P = "column" === n ? C.columnIndex + o - d : C.columnIndex,
                E = G(f, t.tablePos, S, P, {
                    scrollIntoView: s
                }) ?? f;
            if (M && null != p) {
                let e = (0, I.b)(E.selection.$anchor);
                if (null != e) {
                    let t = E.selection.$anchor.before(e);
                    E.setSelection(u.h.create(E.doc, t + m.anchor - p.cellPos, t + m.head - p.cellPos))
                }
            }
            return e.dispatch((0, l.e)(E.setMeta(T, {
                structureSelectionAnchor: {
                    rowIndex: S,
                    columnIndex: P
                },
                structureSelectionHead: {
                    rowIndex: S,
                    columnIndex: P
                }
            }))), !0
        }

        function eh(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t => N(e, t),
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : P;
            if (!V(e)) return !1;
            let l = L(e.state);
            return !!l && er(e, l, l.columnIndex, t, n)
        }

        function ef(e, t) {
            return eu(e, t)
        }

        function em(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t => N(e, t);
            return eh(e, t)
        }

        function ep(e, t) {
            var n, l;
            let {
                cellPosition: o,
                scope: r,
                action: i,
                confirmDeleteColumn: s,
                deleteColumnConfirmation: a,
                axisRange: u
            } = t;
            if (e.isDestroyed || !V(e)) return !1;
            let d = (n = e.state, (l = o) >= 0 && l < n.doc.content.size && n.doc.nodeAt(l)?.type.name === S ? L(n, n.doc.resolve(l + 1)) : null);
            if (null == d) return !1;
            let c = "row" === r ? d.rowIndex : d.columnIndex,
                h = u?.from ?? c,
                f = u?.to ?? c;
            if (null != u && (!Number.isInteger(h) || !Number.isInteger(f) || h < 0 || f < h || f >= ("row" === r ? d.tableNode.childCount : (0, g.e)(d.tableNode)) || c < h || c > f || !(0, g.h)(d.tableNode))) return !1;
            let m = "insert-before" === t.action || "insert-after" === t.action ? t.insertCount : void 0;
            if (null != m && (!Number.isSafeInteger(m) || m < 1 || !(0, g.h)(d.tableNode))) return !1;
            let p = m ?? f - h + 1,
                w = p > 1 || null != m,
                b = ("insert-before" === t.action || "insert-after" === t.action || "delete" === t.action) && t.preserveSelection;
            return "move" === t.action ? ec(e, d, r, t.destination, u, t) : "move-before" === t.action || "move-after" === t.action ? ec(e, d, r, h + ("move-before" === i ? -1 : 1), u, t) : "row" === r ? "delete" === i ? eo(e, d, h, p, b) : el(e, d, "insert-after" === i ? f + 1 : h, p, w, b) : "delete" === i ? er(e, d, h, s, a, p, b) : en(e, d, "insert-after" === i ? f + 1 : h, p, b)
        }
        class eg {
            labels;
            floatingUiClassName;
            floatingUiStyle;
            confirmDeleteColumn;
            getFloatingUiContainer;
            view;
            ownerWindow;
            hoveredTable = null;
            hoveredRowIndex = null;
            hoveredColumnIndex = null;
            visibleHandleMode = "none";
            menuTarget = null;
            isHoveringControl = !1;
            hideTimeoutId = null;
            rowHandle;
            columnHandle;
            menu;
            constructor(e, t, n, l, o, r) {
                this.labels = t, this.floatingUiClassName = n, this.floatingUiStyle = l, this.confirmDeleteColumn = o, this.getFloatingUiContainer = r, this.view = e;
                let i = e.dom.ownerDocument;
                this.ownerWindow = A(e), this.rowHandle = this.createHandle(i, "row"), this.columnHandle = this.createHandle(i, "column"), this.menu = this.createMenu(i), this.rowHandle.addEventListener("click", this.handleRowHandleClick), this.columnHandle.addEventListener("click", this.handleColumnHandleClick), this.menu.addEventListener("click", this.handleMenuClick), this.rowHandle.addEventListener("mousedown", this.handleControlMouseDown), this.columnHandle.addEventListener("mousedown", this.handleControlMouseDown), this.menu.addEventListener("mousedown", this.handleControlMouseDown), this.rowHandle.addEventListener("mouseenter", this.handleControlMouseEnter), this.columnHandle.addEventListener("mouseenter", this.handleControlMouseEnter), this.menu.addEventListener("mouseenter", this.handleControlMouseEnter), this.rowHandle.addEventListener("mouseleave", this.handleControlMouseLeave), this.columnHandle.addEventListener("mouseleave", this.handleControlMouseLeave), this.menu.addEventListener("mouseleave", this.handleControlMouseLeave), this.updateFloatingUiContainer(), this.view.dom.addEventListener("mousemove", this.handleEditorMouseMove), this.view.dom.addEventListener("mouseleave", this.handleEditorMouseLeave), i.addEventListener("mousemove", this.handleDocumentMouseMove), i.addEventListener("mousedown", this.handleDocumentMouseDown), i.defaultView?.addEventListener("scroll", this.handleViewportChange, !0), i.defaultView?.addEventListener("resize", this.handleViewportChange)
            }
            isEditable() {
                return V(this.view)
            }
            resetForReadOnlyMode() {
                this.clearPendingHide(), this.closeMenu(), this.hideControls()
            }
            update(e) {
                (this.view = e, this.isEditable()) ? (this.hoveredTable && !this.hoveredTable.isConnected && this.syncHoveredTableFromSelection(), this.updateControlPositions()) : this.resetForReadOnlyMode()
            }
            destroy() {
                this.clearPendingHide(), this.view.dom.removeEventListener("mousemove", this.handleEditorMouseMove), this.view.dom.removeEventListener("mouseleave", this.handleEditorMouseLeave);
                let e = this.view.dom.ownerDocument;
                e.removeEventListener("mousemove", this.handleDocumentMouseMove), this.rowHandle.removeEventListener("click", this.handleRowHandleClick), this.columnHandle.removeEventListener("click", this.handleColumnHandleClick), this.menu.removeEventListener("click", this.handleMenuClick), this.rowHandle.removeEventListener("mousedown", this.handleControlMouseDown), this.columnHandle.removeEventListener("mousedown", this.handleControlMouseDown), this.menu.removeEventListener("mousedown", this.handleControlMouseDown), this.rowHandle.removeEventListener("mouseenter", this.handleControlMouseEnter), this.columnHandle.removeEventListener("mouseenter", this.handleControlMouseEnter), this.menu.removeEventListener("mouseenter", this.handleControlMouseEnter), this.rowHandle.removeEventListener("mouseleave", this.handleControlMouseLeave), this.columnHandle.removeEventListener("mouseleave", this.handleControlMouseLeave), this.menu.removeEventListener("mouseleave", this.handleControlMouseLeave), e.removeEventListener("mousedown", this.handleDocumentMouseDown), e.defaultView?.removeEventListener("scroll", this.handleViewportChange, !0), e.defaultView?.removeEventListener("resize", this.handleViewportChange), this.rowHandle.remove(), this.columnHandle.remove(), this.menu.remove(), this.hoveredTable = null, this.hoveredRowIndex = null, this.hoveredColumnIndex = null, this.menuTarget = null
            }
            createHandle(e, t) {
                let n = e.createElement("button");
                return n.type = "button", n.setAttribute("contenteditable", "false"), n.setAttribute("data-writing-block-table-grab-handle", t), n.className = ["writing-block-table-grab-handle", `writing-block-table-grab-handle-${t}`, this.floatingUiClassName].filter(e => null != e && e.length > 0).join(" "), this.applyFloatingUiStyle(n), n.textContent = "⋮⋮", n
            }
            createMenu(e) {
                let t = e.createElement("div");
                return t.setAttribute("contenteditable", "false"), t.setAttribute("data-writing-block-table-grab-menu", "true"), t.className = ["writing-block-table-grab-menu", this.floatingUiClassName].filter(e => null != e && e.length > 0).join(" "), this.applyFloatingUiStyle(t), t
            }
            applyFloatingUiStyle(e) {
                for (let [t, n] of Object.entries(this.floatingUiStyle ?? {})) e.style.setProperty(t, n)
            }
            handleControlMouseDown = e => {
                e.preventDefault(), e.stopPropagation()
            };
            handleControlMouseEnter = () => {
                this.isEditable() ? (this.clearPendingHide(), this.isHoveringControl = !0, this.showHandles()) : this.resetForReadOnlyMode()
            };
            handleControlMouseLeave = () => {
                this.isHoveringControl = !1, this.scheduleHide()
            };
            handleRowHandleClick = e => {
                (e.preventDefault(), e.stopPropagation(), this.isEditable()) ? null != this.hoveredRowIndex && this.toggleMenu({
                    type: "row",
                    index: this.hoveredRowIndex
                }): this.resetForReadOnlyMode()
            };
            handleColumnHandleClick = e => {
                (e.preventDefault(), e.stopPropagation(), this.isEditable()) ? null != this.hoveredColumnIndex && this.toggleMenu({
                    type: "column",
                    index: this.hoveredColumnIndex
                }): this.resetForReadOnlyMode()
            };
            handleMenuClick = e => {
                if (!this.isEditable()) return void this.resetForReadOnlyMode();
                let t = e.target;
                if (!this.isOwnerHTMLElement(t)) return;
                let n = t.closest("button[data-writing-block-table-grab-menu-action]");
                if (!this.isOwnerHTMLButtonElement(n)) return;
                e.preventDefault(), e.stopPropagation();
                let l = n.dataset.writingBlockTableGrabMenuAction;
                l && this.applyMenuAction(l)
            };
            handleDocumentMouseDown = e => {
                if (!this.isEditable()) return void this.resetForReadOnlyMode();
                if (null == this.menuTarget) return;
                let t = e.target;
                this.isOwnerNode(t) && !(this.menu.contains(t) || this.rowHandle.contains(t) || this.columnHandle.contains(t)) && (this.closeMenu(), this.isHoveringControl || this.hideControls())
            };
            handleEditorMouseMove = e => {
                this.handlePointerMove(e)
            };
            handleDocumentMouseMove = e => {
                let t = e.target;
                this.isOwnerNode(t) && this.view.dom.contains(t) || this.handlePointerMove(e)
            };
            handlePointerMove(e) {
                if (!this.isEditable()) return void this.resetForReadOnlyMode();
                if (this.clearPendingHide(), null != this.menuTarget) {
                    this.updateHandleActiveState(), this.showHandles("none" === this.visibleHandleMode ? void 0 : this.visibleHandleMode);
                    return
                }
                let t = e.target;
                if (!this.isOwnerElement(t)) {
                    this.isHoveringControl || null != this.menuTarget || this.scheduleHide();
                    return
                }
                let n = t.closest("td, th");
                if (this.isOwnerHTMLTableCellElement(n) && this.view.dom.contains(n) && this.isOwnerHTMLTableElement(n.closest("table"))) {
                    let t = n.closest("table");
                    if (!this.isOwnerHTMLTableElement(t)) return;
                    let l = n.parentElement;
                    if (!this.isOwnerHTMLTableRowElement(l)) return;
                    this.hoveredTable = t, this.hoveredRowIndex = l.rowIndex, this.hoveredColumnIndex = n.cellIndex;
                    let o = this.resolveHandleVisibilityMode(t, e);
                    return "none" === o && null == this.menuTarget ? void this.setHandleVisibility("none") : void this.showHandles(o)
                }
                let l = this.resolveHandleActivationContext(e);
                if (l) {
                    this.hoveredTable = l.table, this.hoveredRowIndex = l.rowIndex, this.hoveredColumnIndex = l.columnIndex, this.showHandles(l.visibilityMode);
                    return
                }
                this.isHoveringControl || null != this.menuTarget || this.scheduleHide()
            }
            handleEditorMouseLeave = e => {
                if (this.isHoveringControl || null != this.menuTarget) return;
                let t = e.relatedTarget;
                this.isOwnerNode(t) && (this.rowHandle.contains(t) || this.columnHandle.contains(t) || this.menu.contains(t)) || this.scheduleHide()
            };
            handleViewportChange = () => {
                this.updateControlPositions()
            };
            syncHoveredTableFromSelection() {
                let e = L(this.view.state);
                if (!e) return;
                let t = this.view.nodeDOM(e.tablePos);
                this.isOwnerHTMLTableElement(t) && (this.hoveredTable = t, this.hoveredRowIndex = e.rowIndex, this.hoveredColumnIndex = e.columnIndex)
            }
            scheduleHide() {
                (this.clearPendingHide(), null == this.ownerWindow) ? this.hideControls(): this.hideTimeoutId = this.ownerWindow.setTimeout(() => {
                    this.hideTimeoutId = null, this.isHoveringControl || null != this.menuTarget || this.hideControls()
                }, 180)
            }
            clearPendingHide() {
                null != this.hideTimeoutId && (this.ownerWindow?.clearTimeout(this.hideTimeoutId), this.hideTimeoutId = null)
            }
            showHandles(e) {
                if (!this.isEditable()) return void this.resetForReadOnlyMode();
                if (!this.hoveredTable || null == this.hoveredRowIndex || null == this.hoveredColumnIndex) return;
                let t = e ?? ("none" === this.visibleHandleMode ? "both" : this.visibleHandleMode);
                this.setHandleVisibility(t), this.updateControlPositions(), this.updateHandleDatasets()
            }
            setHandleVisibility(e) {
                this.visibleHandleMode = e, this.rowHandle.classList.toggle("is-visible", "row" === e || "both" === e), this.columnHandle.classList.toggle("is-visible", "column" === e || "both" === e)
            }
            resolveHandleVisibilityMode(e, t) {
                let n = e.getBoundingClientRect();
                if (n.width < 1 || n.height < 1) return "both";
                let l = t.clientX - n.left,
                    o = t.clientY - n.top,
                    r = l >= -22 && l <= 22,
                    i = o >= -22 && o <= 22;
                return r && i ? this.resolveNearestHandleModeFromTableRect(n, t.clientX, t.clientY) : r ? "row" : i ? "column" : "none"
            }
            resolveHandleActivationContext(e) {
                let t = this.getCandidateTablesForActivation();
                if (0 === t.length) return null;
                for (let n of t) {
                    let t = this.resolveHandleActivationContextForTable(n, e.clientX, e.clientY);
                    if (t) return t
                }
                return null
            }
            getCandidateTablesForActivation() {
                let e = Array.from(this.view.dom.querySelectorAll("table")).filter(e => this.isOwnerHTMLTableElement(e));
                return this.hoveredTable && this.hoveredTable.isConnected && e.includes(this.hoveredTable) ? [this.hoveredTable, ...e.filter(e => e !== this.hoveredTable)] : e
            }
            resolveHandleActivationContextForTable(e, t, n) {
                if (0 === e.rows.length) return null;
                let l = e.getBoundingClientRect();
                if (l.width < 1 || l.height < 1) return null;
                let o = this.getRowHandleLaneRectForTable(l),
                    r = this.getColumnHandleLaneRectForTable(l),
                    i = t >= o.left - 22 && t <= o.right + 22 && n >= l.top - 22 && n <= l.bottom + 22,
                    s = n >= r.top - 22 && n <= r.bottom + 22 && t >= l.left - 22 && t <= l.right + 22;
                if (!i && !s) return null;
                let a = this.resolveClosestRowIndex(e, n) ?? 0,
                    u = this.resolveClosestColumnIndex(e, t) ?? 0;
                return {
                    table: e,
                    rowIndex: a,
                    columnIndex: u,
                    visibilityMode: i && s ? this.resolveNearestHandleModeFromTableRect(l, t, n) : i ? "row" : "column"
                }
            }
            getRowHandleLaneRectForTable(e) {
                let t = e.left - 6 - 18;
                return {
                    left: t,
                    right: t + 18,
                    top: e.top,
                    bottom: e.bottom
                }
            }
            getColumnHandleLaneRectForTable(e) {
                let t = e.top - 6 - 18 + 10;
                return {
                    left: e.left,
                    right: e.right,
                    top: t,
                    bottom: t + 18
                }
            }
            resolveNearestHandleModeFromTableRect(e, t, n) {
                return this.distanceSquaredFromPointToLaneRect(t, n, this.getRowHandleLaneRectForTable(e)) <= this.distanceSquaredFromPointToLaneRect(t, n, this.getColumnHandleLaneRectForTable(e)) ? "row" : "column"
            }
            distanceSquaredFromPointToLaneRect(e, t, n) {
                return (e < n.left ? n.left - e : e > n.right ? e - n.right : 0) ** 2 + (t < n.top ? n.top - t : t > n.bottom ? t - n.bottom : 0) ** 2
            }
            resolveClosestRowIndex(e, t) {
                if (0 === e.rows.length) return null;
                let n = 0,
                    l = 1 / 0;
                for (let o = 0; o < e.rows.length; o += 1) {
                    let r = e.rows.item(o);
                    if (!this.isOwnerHTMLTableRowElement(r)) continue;
                    let i = r.getBoundingClientRect();
                    if (t >= i.top && t <= i.bottom) return o;
                    let s = t < i.top ? i.top - t : t - i.bottom;
                    s < l && (l = s, n = o)
                }
                return n
            }
            resolveClosestColumnIndex(e, t) {
                let n = Math.max(0, ...Array.from(e.rows).map(e => e.cells.length));
                if (n <= 0) return null;
                let l = 0,
                    o = 1 / 0;
                for (let r = 0; r < n; r += 1) {
                    let n = this.getColumnRect(e, r);
                    if (t >= n.left && t <= n.right) return r;
                    let i = t < n.left ? n.left - t : t - n.right;
                    i < o && (o = i, l = r)
                }
                return l
            }
            hideControls() {
                this.setHandleVisibility("none"), null == this.menuTarget && this.menu.classList.remove("is-open"), this.updateHandleActiveState(), this.hoveredTable = null, this.hoveredRowIndex = null, this.hoveredColumnIndex = null
            }
            updateFloatingUiContainer() {
                let e = this.getFloatingUiContainer?.(this.view) ?? this.view.dom.ownerDocument.body;
                if (this.rowHandle.parentElement !== e)
                    for (let t of [this.rowHandle, this.columnHandle, this.menu]) e === this.view.dom.ownerDocument.body ? t.style.removeProperty("position") : t.style.position = "absolute", e.append(t)
            }
            getFloatingUiRect(e) {
                let t = this.rowHandle.parentElement;
                if (null == t || t === this.view.dom.ownerDocument.body) return e;
                let n = t.getBoundingClientRect(),
                    l = n.width / t.offsetWidth || 1,
                    o = n.height / t.offsetHeight || 1;
                return {
                    left: (e.left - n.left) / l - t.clientLeft + t.scrollLeft,
                    top: (e.top - n.top) / o - t.clientTop + t.scrollTop,
                    width: e.width / l,
                    height: e.height / o
                }
            }
            updateControlPositions() {
                if (this.updateFloatingUiContainer(), !this.hoveredTable || null == this.hoveredRowIndex || null == this.hoveredColumnIndex) return;
                let e = this.hoveredTable.rows.item(this.hoveredRowIndex),
                    t = this.getFloatingUiRect(e?.getBoundingClientRect() ?? this.hoveredTable.getBoundingClientRect()),
                    n = this.getFloatingUiRect(this.getColumnRect(this.hoveredTable, this.hoveredColumnIndex)),
                    l = Math.max(t.height, 1),
                    o = Math.max(n.width, 1);
                this.rowHandle.style.left = `${t.left-6-18}px`, this.rowHandle.style.top = `${t.top}px`, this.rowHandle.style.width = "18px", this.rowHandle.style.height = `${l}px`, this.columnHandle.style.left = `${n.left}px`, this.columnHandle.style.top = `${n.top-6-18+10}px`, this.columnHandle.style.width = `${o}px`, this.columnHandle.style.height = "18px", this.updateMenuPosition()
            }
            getColumnRect(e, t) {
                let n = [];
                for (let l of Array.from(e.rows)) {
                    let e = l.cells.item(t);
                    this.isOwnerHTMLTableCellElement(e) && n.push(e)
                }
                if (0 === n.length) return e.getBoundingClientRect();
                let l = n[0].getBoundingClientRect(),
                    o = l.left,
                    r = l.right,
                    i = l.top,
                    s = l.bottom;
                for (let e = 1; e < n.length; e += 1) {
                    let t = n[e].getBoundingClientRect();
                    o = Math.min(o, t.left), r = Math.max(r, t.right), i = Math.min(i, t.top), s = Math.max(s, t.bottom)
                }
                return {
                    x: o,
                    y: i,
                    left: o,
                    right: r,
                    top: i,
                    bottom: s,
                    width: Math.max(1, r - o),
                    height: Math.max(1, s - i),
                    toJSON: () => ({})
                }
            }
            updateHandleDatasets() {
                null != this.hoveredRowIndex && (this.rowHandle.dataset.rowIndex = String(this.hoveredRowIndex)), null != this.hoveredColumnIndex && (this.columnHandle.dataset.columnIndex = String(this.hoveredColumnIndex))
            }
            isOwnerNode(e) {
                let t = this.ownerWindow?.Node;
                return null != t && e instanceof t || "u" > typeof Node && e instanceof Node
            }
            isOwnerElement(e) {
                let t = this.ownerWindow?.Element;
                return null != t && e instanceof t || "u" > typeof Element && e instanceof Element
            }
            isOwnerHTMLElement(e) {
                let t = this.ownerWindow?.HTMLElement;
                return null != t && e instanceof t || "u" > typeof HTMLElement && e instanceof HTMLElement
            }
            isOwnerHTMLButtonElement(e) {
                let t = this.ownerWindow?.HTMLButtonElement;
                return null != t && e instanceof t || "u" > typeof HTMLButtonElement && e instanceof HTMLButtonElement
            }
            isOwnerHTMLTableElement(e) {
                let t = this.ownerWindow?.HTMLTableElement;
                return null != t && e instanceof t || "u" > typeof HTMLTableElement && e instanceof HTMLTableElement
            }
            isOwnerHTMLTableRowElement(e) {
                let t = this.ownerWindow?.HTMLTableRowElement;
                return null != t && e instanceof t || "u" > typeof HTMLTableRowElement && e instanceof HTMLTableRowElement
            }
            isOwnerHTMLTableCellElement(e) {
                let t = this.ownerWindow?.HTMLTableCellElement;
                return null != t && e instanceof t || "u" > typeof HTMLTableCellElement && e instanceof HTMLTableCellElement
            }
            toggleMenu(e) {
                this.isEditable() ? this.menuTarget && this.menuTarget.type === e.type && this.menuTarget.index === e.index ? this.closeMenu() : (this.menuTarget = e, this.menu.classList.add("is-open"), this.updateHandleActiveState(), this.renderMenuActions(), this.updateMenuPosition()) : this.resetForReadOnlyMode()
            }
            closeMenu() {
                this.menuTarget = null, this.menu.classList.remove("is-open"), this.menu.replaceChildren(), this.updateHandleActiveState()
            }
            updateHandleActiveState() {
                this.rowHandle.classList.toggle("is-active", this.menuTarget?.type === "row"), this.columnHandle.classList.toggle("is-active", this.menuTarget?.type === "column")
            }
            renderMenuActions() {
                if (!this.menuTarget) return;
                let e = ("row" === this.menuTarget.type ? [
                    ["row-add-above", this.labels.addRowAbove],
                    ["row-add-below", this.labels.addRowBelow],
                    ["row-delete", this.labels.deleteRow]
                ] : [
                    ["column-add-left", this.labels.addColumnLeft],
                    ["column-add-right", this.labels.addColumnRight],
                    ["column-delete", this.labels.deleteColumn]
                ]).map(e => {
                    let [t, n] = e, l = this.view.dom.ownerDocument.createElement("button");
                    return l.type = "button", l.className = "writing-block-table-grab-menu-item", l.setAttribute("data-writing-block-table-grab-menu-action", t), l.textContent = n, l
                });
                this.menu.replaceChildren(...e)
            }
            updateMenuPosition() {
                if (!this.menuTarget) return;
                let e = "row" === this.menuTarget.type ? this.rowHandle : this.columnHandle,
                    t = this.getFloatingUiRect(e.getBoundingClientRect()),
                    n = t.left + t.width / 2,
                    l = t.top + t.height + 6,
                    o = this.menu.parentElement;
                if (null != o && o !== this.view.dom.ownerDocument.body) {
                    let e = this.menu.offsetWidth / 2;
                    n = Math.max(e, Math.min(n, o.clientWidth - e)), l + this.menu.offsetHeight > o.clientHeight && (l = t.top - this.menu.offsetHeight - 6), l = Math.max(0, l)
                }
                this.menu.style.left = `${n}px`, this.menu.style.top = `${l}px`
            }
            applyMenuAction(e) {
                if (!this.isEditable()) return void this.resetForReadOnlyMode();
                let t = this.hoveredTable;
                if (!t || !t.isConnected || 0 === t.rows.length) return;
                let n = t.rows.length,
                    l = Math.max(1, ...Array.from(t.rows).map(e => e.cells.length)),
                    o = !1;
                switch (e) {
                    case "row-add-above": {
                        let e = this.hoveredRowIndex ?? 0;
                        if (!ee(this.view, t, e, 0)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        o = el(this.view, n, e);
                        break
                    }
                    case "row-add-below": {
                        let e = this.hoveredRowIndex ?? n - 1;
                        if (!ee(this.view, t, e, 0)) return;
                        let l = L(this.view.state);
                        if (!l) return;
                        o = el(this.view, l, e + 1);
                        break
                    }
                    case "row-delete": {
                        let e = this.hoveredRowIndex ?? 0;
                        if (!ee(this.view, t, e, 0)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        o = eo(this.view, n, e);
                        break
                    }
                    case "column-add-left": {
                        let e = this.hoveredColumnIndex ?? 0;
                        if (!ee(this.view, t, 0, e)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        o = en(this.view, n, e);
                        break
                    }
                    case "column-add-right": {
                        let e = this.hoveredColumnIndex ?? l - 1;
                        if (!ee(this.view, t, 0, e)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        o = en(this.view, n, e + 1);
                        break
                    }
                    case "column-delete": {
                        let e = this.hoveredColumnIndex ?? 0;
                        if (!ee(this.view, t, 0, e)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        o = er(this.view, n, e, this.confirmDeleteColumn, this.labels.deleteColumnConfirmation);
                        break
                    }
                    default:
                        return
                }
                o && (this.syncHoveredTableFromSelection(), this.showHandles(), this.closeMenu(), this.view.focus())
            }
        }

        function ew(e, t, n) {
            let l = T.getState(e.state),
                o = $(e.state, l);
            if (!o) return !1;
            let r = (0, g.f)(o.context.tableNode, o.context.tablePos),
                i = n?.extendSelection ? o.head : o.anchor,
                s = r[i.rowIndex];
            if (!s) return !0;
            let a = Math.max(0, Math.min(i.columnIndex + ("previous" === t ? -1 : 1), s.rowNode.childCount - 1));
            if (a === i.columnIndex) return !0;
            let u = {
                    rowIndex: i.rowIndex,
                    columnIndex: a
                },
                d = G(e.state.tr, o.context.tablePos, u.rowIndex, u.columnIndex) ?? e.state.tr,
                c = n?.forceStructureMode ?? !0;
            return d = d.setMeta(T, {
                isStructureMode: c,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: n?.extendSelection ? o.anchor : u,
                structureSelectionHead: u
            }), e.dispatch(d), !0
        }

        function eb(e, t, n) {
            let l = T.getState(e.state),
                o = $(e.state, l);
            if (!o) return !1;
            let r = (0, g.f)(o.context.tableNode, o.context.tablePos),
                i = n?.extendSelection ? o.head : o.anchor,
                s = "previous" === t ? i.rowIndex - 1 : i.rowIndex + 1;
            if (s < 0 || s >= r.length) return !0;
            let a = r[s],
                u = {
                    rowIndex: s,
                    columnIndex: Math.max(0, Math.min(i.columnIndex, a.rowNode.childCount - 1))
                },
                d = G(e.state.tr, o.context.tablePos, u.rowIndex, u.columnIndex) ?? e.state.tr,
                c = n?.forceStructureMode ?? !0;
            return d = d.setMeta(T, {
                isStructureMode: c,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: n?.extendSelection ? o.anchor : u,
                structureSelectionHead: u
            }), e.dispatch(d), !0
        }

        function ev(e) {
            let t = e.trim(),
                n = t.startsWith("|") ? t.slice(1) : t;
            return (n.endsWith("|") ? n.slice(0, -1) : n).split("|").map(e => e.trim())
        }

        function ey(e) {
            let t = e.replace(/\r\n?/g, "\n").split("\n").map(e => e.trim()).filter(e => e.length > 0);
            if (t.length < 2) return !1;
            let n = t[0],
                l = t[1];
            if (!n.includes("|") || !l.includes("|")) return !1;
            let o = ev(n),
                r = ev(l);
            return !(o.length < 2) && !(r.length < 2) && o.length === r.length && r.every(e => k.test(e))
        }

        function eM(e, t, n) {
            if (!V(e)) return !1;
            let l = K(e.state, t, n);
            if (!l) return !1;
            let o = e.state.tr.replaceSelectionWith(l, !1),
                r = function(e, t) {
                    let {
                        $from: n
                    } = e.selection;
                    if (n.nodeBefore === t) return n.pos - n.nodeBefore.nodeSize;
                    if (n.nodeAfter === t) return n.pos;
                    let l = Math.max(0, e.selection.from - t.nodeSize - 2),
                        o = Math.min(e.doc.content.size, e.selection.to + t.nodeSize + 2),
                        r = null;
                    return e.doc.nodesBetween(l, o, (e, n) => e !== t || (r = n, !1)), r
                }(o, l);
            return null != r && (o = G(o, r, 0, 0) ?? o), e.dispatch(o.scrollIntoView()), !0
        }

        function ex(e, t, n) {
            let l = L(e, e.doc.resolve(t)),
                o = L(e, e.doc.resolve(n));
            if (null == l || o?.tablePos !== l.tablePos) return null;
            let r = _(l, z(l)),
                i = _(o, z(o));
            if (null == r || null == i) return null;
            let s = u.h.near(e.doc.resolve(i.cellPos + 1));
            return e.tr.setSelection(s instanceof u.h ? new I.a(s, r.cellPos + 1, i.cellPos + 1) : s).setMeta(T, {
                isStructureMode: !0,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: z(l),
                structureSelectionHead: z(o)
            })
        }

        function eI(e) {
            let t = T.getState(e);
            if (t?.isStructureMode) {
                let n = B(e, t);
                if (null == n) return null;
                let l = e.tr;
                for (let {
                        cellPos: e,
                        cellNode: t
                    }
                    of n.cells) l.replaceWith(l.mapping.map(e + 1), l.mapping.map(e + t.nodeSize - 1), (0, g.c)(t.type));
                return l
            }
            let {
                selection: n,
                doc: l
            } = e;
            if (!(n instanceof u.h) || n.empty) return null;
            let o = L(e, n.$from),
                r = L(e, n.$to);
            if (null == o || r?.tablePos !== o.tablePos || o.rowIndex === r.rowIndex && o.columnIndex === r.columnIndex) return null;
            let i = e.tr;
            return l.nodesBetween(n.from, n.to, (e, t) => {
                if (!e.isTextblock) return !0;
                let l = Math.max(n.from, t + 1),
                    o = Math.min(n.to, t + e.nodeSize - 1);
                return l < o && i.delete(i.mapping.map(l), i.mapping.map(o)), !1
            }), i.setSelection(u.h.near(i.doc.resolve(i.mapping.map(n.from))))
        }

        function eC(e) {
            let t = T.getState(e);
            if (!t?.isStructureMode) return null;
            let n = $(e, t);
            return null == n ? null : {
                anchor: n.anchor,
                head: n.head
            }
        }

        function eS(e) {
            let t = T.getState(e);
            if (!t?.isStructureMode) return null;
            let n = B(e, t);
            if (null == n || 0 === n.cells.length) return null;
            let l = Math.min(n.anchor.rowIndex, n.head.rowIndex),
                o = [],
                r = [];
            for (let {
                    cellNode: e,
                    rowIndex: t
                }
                of n.cells) {
                let n = t - l;
                o[n] ??= [], r[n] ??= [], o[n].push(e.type.create({
                    ...e.attrs,
                    rowIndex: +(0 !== n),
                    columnIndex: null
                }, e.content));
                let i = e.textBetween(0, e.content.size, "\n", e => "hard_break" === e.type.name ? "\n" : e.type.spec.leafText?.(e) ?? "");
                r[n].push(/[\t\n"]/.test(i) ? `"${i.replace(/"/g,'""')}"` : i)
            }
            return {
                content: {
                    slice: new a.j(a.c.from(e.schema.nodes.table.create(null, o.map((t, o) => e.schema.nodes.table_row.create(n.context.tableNode.child(l + o).attrs, t)))), 0, 0),
                    insertion: "blocks"
                },
                text: r.map(e => e.join("	")).join("\n")
            }
        }

        function eP(e, t) {
            let n = L(e, e.selection.$from),
                l = L(e, e.selection.$to);
            if (null == n || l?.tablePos !== n.tablePos || 0 === t.length) return null;
            let o = T.getState(e),
                r = o?.isStructureMode ? $(e, o) : null,
                i = null == r ? Math.min(n.rowIndex, l.rowIndex) : Math.min(r.anchor.rowIndex, r.head.rowIndex),
                s = null == r ? Math.min(n.columnIndex, l.columnIndex) : Math.min(r.anchor.columnIndex, r.head.columnIndex),
                a = t[0].length,
                u = e.schema.nodes.table_cell;
            if (0 === a || t.some(t => t.length !== a || t.some(t => !(0, m.a)(t, e.schema)))) return null;
            let d = (0, g.f)(n.tableNode, n.tablePos);
            if (d.some(e => {
                    let {
                        rowNode: t
                    } = e;
                    return t.content.content.some(e => 1 !== e.attrs.colspan || 1 !== e.attrs.rowspan)
                })) return null;
            let c = Math.max((0, g.e)(n.tableNode), s + a),
                h = Math.max(d.length, i + t.length),
                f = e.tr,
                p = [];
            for (let l = d.length; l < h; l += 1) {
                let o = [];
                for (let e = 0; e < c; e += 1) o.push(u.create({
                    rowIndex: 1,
                    align: n.tableNode.firstChild?.maybeChild(e)?.attrs.align ?? null
                }, t[l - i]?.[e - s] ?? (0, g.c)(u)));
                p.push(e.schema.nodes.table_row.create(null, o))
            }
            p.length > 0 && f.insert(n.tablePos + n.tableNode.nodeSize - 1, p);
            for (let e = d.length - 1; e >= 0; e -= 1) {
                let {
                    rowNode: n,
                    rowPos: l,
                    rowIndex: o
                } = d[e], r = t[o - i], a = l + n.nodeSize - 1, h = [];
                for (let e = n.childCount; e < c; e += 1) h.push(u.create({
                    rowIndex: +(0 !== o)
                }, r?.[e - s] ?? (0, g.c)(u)));
                h.length > 0 && f.insert(a, h);
                for (let e = n.childCount - 1; e >= 0; e -= 1) {
                    let t = n.child(e);
                    a -= t.nodeSize;
                    let l = r?.[e - s];
                    null != l && f.replaceWith(a + 1, a + t.nodeSize - 1, l)
                }
            }
            return (G(f, n.tablePos, i, s) ?? f).setMeta(T, {
                isStructureMode: !0,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: {
                    rowIndex: i,
                    columnIndex: s
                },
                structureSelectionHead: {
                    rowIndex: i + t.length - 1,
                    columnIndex: s + a - 1
                }
            })
        }

        function eE(e) {
            let {
                pmu: t,
                confirmDeleteColumn: n,
                editCellOnClick: d = !1,
                onTabFromLastCell: p,
                handleVerticalExit: w,
                floatingUiClassName: b,
                floatingUiStyle: v,
                getFloatingUiContainer: y,
                isGutterControlsEnabled: x = !0,
                isMac: S = (0, o.c)(),
                isTableModeEnabled: P,
                labels: H
            } = e, k = () => P?.() ?? !0, R = {
                ...E,
                ...H
            }, D = () => ({
                isStructureMode: !1,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: null,
                structureSelectionHead: null
            });
            return new u.d({
                key: T,
                state: {
                    init: () => D(),
                    apply(e, t, n, l) {
                        if (!k()) return D();
                        let o = null != L(l),
                            r = null != L(n),
                            i = e.selectionSet && !0 === e.getMeta("pointer"),
                            s = e.getMeta(T);
                        if (s && ("boolean" == typeof s.isStructureMode || "boolean" == typeof s.isEditMode || "boolean" == typeof s.allowCellNavigationInEditMode || Object.prototype.hasOwnProperty.call(s, "structureSelectionAnchor") || Object.prototype.hasOwnProperty.call(s, "structureSelectionHead"))) {
                            if (!o) return {
                                isStructureMode: !1,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: null,
                                structureSelectionHead: null
                            };
                            let e = "boolean" == typeof s.isEditMode ? s.isEditMode : t.isEditMode,
                                n = "boolean" == typeof s.isStructureMode ? s.isStructureMode : t.isStructureMode,
                                l = "boolean" == typeof s.allowCellNavigationInEditMode ? s.allowCellNavigationInEditMode : t.allowCellNavigationInEditMode,
                                r = Object.prototype.hasOwnProperty.call(s, "structureSelectionAnchor") ? s.structureSelectionAnchor ?? null : t.structureSelectionAnchor,
                                i = Object.prototype.hasOwnProperty.call(s, "structureSelectionHead") ? s.structureSelectionHead ?? null : t.structureSelectionHead;
                            return e ? {
                                isStructureMode: !1,
                                isEditMode: !0,
                                allowCellNavigationInEditMode: l,
                                structureSelectionAnchor: r,
                                structureSelectionHead: i
                            } : {
                                isStructureMode: n,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: r,
                                structureSelectionHead: i
                            }
                        }
                        if (l.selection instanceof I.a && (e.selectionSet || e.docChanged)) {
                            let e = L(l, l.doc.resolve(l.selection.cellAnchor)),
                                t = L(l, l.doc.resolve(l.selection.cellHead));
                            return null != e && t?.tablePos === e.tablePos && L(l)?.tablePos === e.tablePos ? {
                                isStructureMode: !0,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: z(e),
                                structureSelectionHead: z(t)
                            } : D()
                        }
                        if (o && i) {
                            let e = L(l),
                                t = e ? z(e) : null;
                            return {
                                isStructureMode: !d,
                                isEditMode: d,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: t,
                                structureSelectionHead: t
                            }
                        }
                        if (o && !r && !t.isEditMode) {
                            let e = L(l),
                                t = e ? z(e) : null;
                            return {
                                isStructureMode: !d,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: t,
                                structureSelectionHead: t
                            }
                        }
                        if (!o) return {
                            isStructureMode: !1,
                            isEditMode: !1,
                            allowCellNavigationInEditMode: !1,
                            structureSelectionAnchor: null,
                            structureSelectionHead: null
                        };
                        if (e.selectionSet && (e.docChanged || !t.isStructureMode) || (t.isStructureMode || t.isEditMode) && (null == t.structureSelectionAnchor || null == t.structureSelectionHead)) {
                            let e = L(l),
                                n = e ? z(e) : null;
                            return {
                                ...t,
                                structureSelectionAnchor: n,
                                structureSelectionHead: n
                            }
                        }
                        return t
                    }
                },
                appendTransaction(e, t, n) {
                    let {
                        selection: l
                    } = n;
                    if (!(l instanceof u.h)) return null;
                    let o = T.getState(n),
                        r = o?.isStructureMode ? $(n, o) : null;
                    if (null != r) {
                        let e = _(r.context, r.anchor),
                            t = _(r.context, r.head);
                        if (null != e && null != t) return l instanceof I.a && l.cellAnchor === e.cellPos + 1 && l.cellHead === t.cellPos + 1 ? null : n.tr.setSelection(new I.a(l, e.cellPos + 1, t.cellPos + 1))
                    }
                    return l instanceof I.a ? n.tr.setSelection(new u.h(l.$anchor, l.$head)) : null
                },
                props: {
                    createSelectionBetween: M.f,
                    handleDOMEvents: {
                        pointerdown: M.e,
                        blur: M.e,
                        keydown: (e, t) => (("ArrowUp" !== t.key && "ArrowDown" !== t.key || t.shiftKey || t.altKey || t.ctrlKey || t.metaKey) && (0, M.e)(e), !1),
                        mousedown(e, t) {
                            if (!d || !k() || !V(e) || 0 !== t.button || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return !1;
                            let n = A(e)?.Element,
                                l = n && t.target instanceof n ? t.target.closest("td, th") : null;
                            if (null == l || !e.dom.contains(l)) return !1;
                            let o = T.getState(e.state);
                            if (o?.isEditMode && !o.allowCellNavigationInEditMode) return !1;
                            let r = L(e.state);
                            if (r) {
                                let t = z(r);
                                e.dispatch(e.state.tr.setMeta(T, {
                                    isStructureMode: !1,
                                    isEditMode: !0,
                                    allowCellNavigationInEditMode: !1,
                                    structureSelectionAnchor: t,
                                    structureSelectionHead: t
                                }))
                            }
                            return !1
                        }
                    },
                    decorations(e) {
                        if (!k()) return null;
                        let t = T.getState(e) ?? null;
                        if (!t?.isStructureMode && !t?.isEditMode) return null;
                        let n = B(e, t);
                        if (!n) return null;
                        let l = _(n.context, n.anchor);
                        if (!l) return null;
                        let o = [];
                        for (let e of (t.isStructureMode && o.push(c.a.node(n.context.tablePos, n.context.tablePos + n.context.tableNode.nodeSize, {
                                class: "writing-block-table-structure-mode"
                            })), n.cells)) o.push(c.a.node(e.cellPos, e.cellPos + e.cellNode.nodeSize, {
                            class: "writing-block-table-structure-selected-cell"
                        }));
                        return o.push(c.a.node(l.cellPos, l.cellPos + l.cellNode.nodeSize, {
                            class: "writing-block-table-structure-active-cell"
                        })), t.isEditMode && o.push(c.a.node(l.cellPos, l.cellPos + l.cellNode.nodeSize, {
                            class: "writing-block-table-structure-edit-active-cell"
                        })), c.b.create(e.doc, o)
                    },
                    handleKeyDown(e, t) {
                        if ("string" != typeof t.key || t.defaultPrevented || t.isComposing || 229 === t.keyCode || !k() || !V(e)) return !1;
                        let l = f.e.getState(e.state);
                        if ((0, f.d)(l)) return !1;
                        let o = h.i.getState(e.state);
                        if (o?.input || o?.suggestion) return !1;
                        let s = T.getState(e.state),
                            a = s?.isStructureMode ?? !1,
                            c = s?.isEditMode ?? !1,
                            m = s?.allowCellNavigationInEditMode ?? !1;
                        if (d && c && !t.shiftKey && !t.altKey && ("Backspace" === t.key || "Delete" === t.key) && !e.state.selection.empty) {
                            let n = eI(e.state);
                            if (null != n) return e.dispatch(n.scrollIntoView()), t.preventDefault(), t.stopPropagation(), !0
                        }
                        let b = t.key.toLowerCase(),
                            v = t.ctrlKey && "p" === b,
                            y = t.ctrlKey && "n" === b,
                            x = "ArrowUp" === t.key ? "up" : "ArrowDown" === t.key ? "down" : "ArrowLeft" === t.key ? "left" : "ArrowRight" === t.key ? "right" : null;
                        if ("Escape" === t.key) {
                            if (c) return e.dispatch(e.state.tr.setMeta(T, {
                                isStructureMode: !0,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1
                            })), t.preventDefault(), t.stopPropagation(), !0;
                            if (a) {
                                let n = L(e.state);
                                return n && W(e, n) ? (t.preventDefault(), t.stopPropagation(), !0) : (e.dispatch(e.state.tr.setMeta(T, {
                                    isStructureMode: !1,
                                    isEditMode: !1,
                                    allowCellNavigationInEditMode: !1
                                })), t.preventDefault(), t.stopPropagation(), !0)
                            }
                            return !!Y(e) && (e.dispatch(e.state.tr.setMeta(T, {
                                isStructureMode: !0,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1
                            })), t.preventDefault(), t.stopPropagation(), !0)
                        }
                        if (d && !a && !m && null != x && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                            let n = e.dom.ownerDocument.getSelection();
                            if (e.state.selection instanceof u.h && n?.focusNode != null && e.dom.contains(n.focusNode)) {
                                if (!n.isCollapsed) return !1;
                                let t = e.posAtDOM(n.focusNode, n.focusOffset);
                                if (!e.state.selection.empty || t !== e.state.selection.head) {
                                    let n = e.state.doc.resolve(t);
                                    if (!n.parent.isTextblock) return !1;
                                    e.dispatch(e.state.tr.setSelection((0, M.f)(e, n, n) ?? u.h.create(e.state.doc, t)))
                                }
                            }
                            let {
                                selection: l
                            } = e.state;
                            if (!l.empty) return !1;
                            if ("up" === x || "down" === x) return (0, M.d)(e, x, w);
                            let o = L(e.state);
                            if ("ArrowLeft" === t.key && o?.rowIndex === 0 && 0 === o.columnIndex && J(e, "left")) return U(e, o), t.preventDefault(), t.stopPropagation(), !0;
                            if (null != o && (0, M.b)(e, "ArrowLeft" === t.key ? "left" : "right") || null == o && (0, M.a)(e, "ArrowLeft" === t.key ? "left" : "right")) return t.preventDefault(), t.stopPropagation(), !0
                        }
                        if ("ArrowRight" === t.key && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && Q(e.state)) {
                            let n, l = (n = L(e.state)) && j(n) ? n : null;
                            if (l && (a || c && m || J(e, "right"))) return q(e, l), t.preventDefault(), t.stopPropagation(), !0
                        }
                        if (a) {
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && ("Backspace" === t.key || "Delete" === t.key)) {
                                let n = function(e, t) {
                                    if (!V(e)) return !1;
                                    let n = B(e.state, t);
                                    if (!n || 0 === n.cells.length) return !1;
                                    let l = e.state.tr;
                                    for (let e of [...n.cells].sort((e, t) => t.cellPos - e.cellPos)) {
                                        let t = Math.min(e.cellPos + 1, l.doc.content.size),
                                            n = Math.max(t, Math.min(e.cellPos + e.cellNode.nodeSize - 1, l.doc.content.size));
                                        l = l.replaceWith(t, n, (0, g.c)(e.cellNode.type))
                                    }
                                    return l = G(l, n.context.tablePos, n.anchor.rowIndex, n.anchor.columnIndex) ?? l, e.dispatch(l.setMeta(T, {
                                        isStructureMode: !0,
                                        isEditMode: !1,
                                        allowCellNavigationInEditMode: !1,
                                        structureSelectionAnchor: n.anchor,
                                        structureSelectionHead: n.head
                                    })), !0
                                }(e, s);
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && 1 === t.key.length) {
                                let n = function(e, t, n) {
                                    if (!V(e)) return !1;
                                    let l = function(e, t) {
                                        let n = $(e, t);
                                        if (!n) return null;
                                        let l = _(n.context, n.anchor);
                                        return l ? {
                                            anchor: n.anchor,
                                            cellPos: l.cellPos,
                                            cellNode: l.cellNode
                                        } : null
                                    }(e.state, n);
                                    if (!l) return !1;
                                    let {
                                        cellPos: o,
                                        cellNode: r,
                                        anchor: i
                                    } = l, s = Math.min(o + 1, e.state.doc.content.size), a = Math.max(s, Math.min(o + r.nodeSize - 1, e.state.doc.content.size)), d = e.state.schema.text(t), c = r.inlineContent ? d : e.state.schema.nodes.paragraph.create(null, d), h = e.state.tr.replaceWith(s, a, c);
                                    return h.setSelection(u.h.near(h.doc.resolve(h.mapping.map(a)), -1)), e.dispatch(h.setMeta(T, {
                                        isStructureMode: !1,
                                        isEditMode: !0,
                                        allowCellNavigationInEditMode: !0,
                                        structureSelectionAnchor: i,
                                        structureSelectionHead: i
                                    })), !0
                                }(e, t.key, s);
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && t.shiftKey && "ArrowDown" === t.key) {
                                let n = eb(e, "next", {
                                    extendSelection: !0
                                });
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && t.shiftKey && "ArrowUp" === t.key) {
                                let n = eb(e, "previous", {
                                    extendSelection: !0
                                });
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && t.shiftKey && "ArrowRight" === t.key) {
                                let n = ew(e, "next", {
                                    extendSelection: !0
                                });
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && t.shiftKey && "ArrowLeft" === t.key) {
                                let n = ew(e, "previous", {
                                    extendSelection: !0
                                });
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "Enter" === t.key) {
                                let n = e.state.tr,
                                    l = O(e.state);
                                if (l) {
                                    let e = Math.max(Math.min(l.cellPos + 1, n.doc.content.size), Math.min(l.cellPos + l.cellNode.nodeSize - 1, n.doc.content.size));
                                    n = n.setSelection(u.h.near(n.doc.resolve(e), -1))
                                }
                                let o = L(e.state, n.selection.$head),
                                    r = o ? z(o) : null;
                                return e.dispatch(n.setMeta(T, {
                                    isStructureMode: !1,
                                    isEditMode: !0,
                                    allowCellNavigationInEditMode: !1,
                                    structureSelectionAnchor: r,
                                    structureSelectionHead: r
                                }).scrollIntoView()), t.preventDefault(), t.stopPropagation(), !0
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowDown" === t.key) {
                                let n = L(e.state);
                                if (n) {
                                    let l = (0, g.f)(n.tableNode, n.tablePos);
                                    if (n.rowIndex >= l.length - 1) return q(e, n), t.preventDefault(), t.stopPropagation(), !0
                                }
                                let l = eb(e, "next");
                                return l && (t.preventDefault(), t.stopPropagation()), l
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowUp" === t.key) {
                                let n = L(e.state);
                                if (n && 0 === n.rowIndex) {
                                    let l = U(e, n);
                                    return l && (t.preventDefault(), t.stopPropagation()), l
                                }
                                let l = eb(e, "previous");
                                return l && (t.preventDefault(), t.stopPropagation()), l
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowRight" === t.key) {
                                let n = ew(e, "next");
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowLeft" === t.key) {
                                let n = L(e.state);
                                if (n && 0 === n.rowIndex && 0 === n.columnIndex) {
                                    let l = U(e, n);
                                    return l && (t.preventDefault(), t.stopPropagation()), l
                                }
                                let l = ew(e, "previous");
                                return l && (t.preventDefault(), t.stopPropagation()), l
                            }
                        }
                        if (c && !t.metaKey && !t.altKey && !t.shiftKey && (v || y)) {
                            if (m) {
                                let n = eb(e, v ? "previous" : "next");
                                return n && (X(e), t.preventDefault(), t.stopPropagation()), n
                            }
                            let n = function(e, t) {
                                let n = O(e.state);
                                if (!n) return !1;
                                let {
                                    cellPos: l,
                                    cellNode: o
                                } = n, r = Math.min(l + 1, e.state.doc.content.size), i = Math.max(r, Math.min(l + o.nodeSize - 1, e.state.doc.content.size));
                                return e.dispatch(e.state.tr.setSelection(u.h.near(e.state.doc.resolve("start" === t ? r : i), "start" === t ? 1 : -1)).scrollIntoView()), !0
                            }(e, v ? "start" : "end");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (c && m && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                            if ("ArrowDown" === t.key) {
                                let n = eb(e, "next");
                                return n && (X(e), t.preventDefault(), t.stopPropagation()), n
                            }
                            if ("ArrowUp" === t.key) {
                                let n = eb(e, "previous");
                                return n && (X(e), t.preventDefault(), t.stopPropagation()), n
                            }
                            if ("ArrowRight" === t.key) {
                                let n = ew(e, "next");
                                return n && (X(e), t.preventDefault(), t.stopPropagation()), n
                            }
                            if ("ArrowLeft" === t.key) {
                                let n = ew(e, "previous");
                                return n && (X(e), t.preventDefault(), t.stopPropagation()), n
                            }
                        }
                        if (c && null != x && !t.metaKey && !t.ctrlKey && !t.altKey && Q(e.state) && J(e, x)) return t.preventDefault(), t.stopPropagation(), !0;
                        if (!a && !c && e.state.selection.empty && Q(e.state) && !t.metaKey && !t.altKey && !t.shiftKey) {
                            let n = !t.ctrlKey && "ArrowUp" === t.key,
                                l = !t.ctrlKey && "ArrowDown" === t.key;
                            if (n || l || v || y) {
                                let l;
                                if (!J(e, n || v ? "up" : "down")) return !1;
                                try {
                                    l = e.coordsAtPos(e.state.selection.from).left
                                } catch {
                                    l = void 0
                                }
                                let o = ea(e, n || v ? "previous" : "next", {
                                    consumeIfNoAdjacentRow: !1,
                                    preferredClientX: l
                                });
                                return o && (t.preventDefault(), t.stopPropagation()), o
                            }
                        }
                        if ("Tab" === t.key && !t.metaKey && !t.ctrlKey && !t.altKey && Q(e.state)) {
                            if (!a && (0, r.a)(e.state)) {
                                if (t.shiftKey) return !1;
                                if ((0, i.b)(e.state, e.dispatch)) return t.preventDefault(), t.stopPropagation(), !0
                            }
                            if (!t.shiftKey) {
                                let n = O(e.state);
                                if (n && j(n.context)) {
                                    if (null != p) return p(e, n.cellPos), t.preventDefault(), t.stopPropagation(), !0;
                                    if (!e.state.schema.nodes.table_cell.inlineContent) return t.preventDefault(), t.stopPropagation(), !0;
                                    let l = W(e, n.context);
                                    return l && (t.preventDefault(), t.stopPropagation()), l
                                }
                            }
                            let n = t.shiftKey ? "previous" : "next",
                                l = a ? es(e, n, {
                                    mode: "structure"
                                }) : c ? es(e, n, {
                                    mode: "edit",
                                    allowCellNavigationInEditMode: m
                                }) : es(e, n);
                            return l && (t.preventDefault(), t.stopPropagation()), l
                        }
                        if (!a && Q(e.state) && "Enter" === t.key && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                            let n = e.state.schema.nodes.table_cell.inlineContent;
                            if (n ? !c : d || null != (0, r.a)(e.state) || e.state.selection.$from.parent.type.spec.code) return !1;
                            let l = n ? function(e) {
                                let t = L(e.state);
                                if (!t) return !1;
                                let n = {
                                        isStructureMode: !0,
                                        isEditMode: !1,
                                        structureSelectionAnchor: {
                                            rowIndex: t.rowIndex + 1,
                                            columnIndex: t.columnIndex
                                        },
                                        structureSelectionHead: {
                                            rowIndex: t.rowIndex + 1,
                                            columnIndex: t.columnIndex
                                        }
                                    },
                                    l = (0, g.f)(t.tableNode, t.tablePos),
                                    o = t.rowIndex + 1;
                                if (o < l.length) {
                                    let l = G(e.state.tr, t.tablePos, o, t.columnIndex) ?? e.state.tr;
                                    return e.dispatch(l.setMeta(T, n)), !0
                                }
                                return W(e, t)
                            }(e) : ea(e, "next");
                            return l && (t.preventDefault(), t.stopPropagation()), l
                        }
                        let I = t.metaKey || t.ctrlKey;
                        if (!a && (!c || !e.state.schema.nodes.table_cell.inlineContent) && I && "Enter" === t.key) {
                            let n = ea(e, t.shiftKey ? "previous" : "next");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (!I || !t.altKey) return !1;
                        if (t.shiftKey && "." === t.key) {
                            let n = ed(e, "right");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (t.shiftKey && "," === t.key) {
                            let n = ed(e, "left");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (!t.shiftKey && "." === t.key) {
                            let n = eu(e, "right");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (!t.shiftKey && "," === t.key) {
                            let n = eu(e, "left");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (!t.shiftKey && t.key === (S ? "Backspace" : "Delete")) {
                            let l = eh(e, n, R.deleteColumnConfirmation);
                            return l && (t.preventDefault(), t.stopPropagation()), l
                        }
                        return !1
                    },
                    handlePaste(e, n, o) {
                        if (n.defaultPrevented || !k() || !V(e) || !T.getState(e.state)?.isStructureMode && (0, s.e)(e)) return !1;
                        let r = n.clipboardData?.getData("text/plain") ?? "";
                        if (Q(e.state)) {
                            let i = (0, m.b)(e.state.schema, ey(r) ? new a.j(t.parse(r).content, 0, 0) : o, r, n.clipboardData?.getData("text/html") ?? "", e.dom.ownerDocument);
                            if (null != i) {
                                let t = !1 === i ? null : eP(e.state, i);
                                return null != t && e.dispatch((0, l.e)(t.setMeta("paste", !0).setMeta("uiEvent", "paste").scrollIntoView())), !0
                            }
                        }
                        if (!ey(r)) return !1;
                        let i = function(e, t, n) {
                            let l;
                            if (!V(e)) return !1;
                            let o = n.parse(t);
                            if (l = !1, o.descendants(e => e.type.name !== C || (l = !0, !1)), !l) return !1;
                            let r = new a.j(o.content, 0, 0);
                            return e.dispatch(e.state.tr.replaceSelection(r).scrollIntoView()), !0
                        }(e, r, t);
                        return i && (n.preventDefault(), n.stopPropagation()), i
                    }
                },
                view: x ? e => {
                    let t = n ?? (t => N(e, t)),
                        l = new eg(e, R, b, v, t, y);
                    return {
                        update(e) {
                            l.update(e)
                        },
                        destroy() {
                            l.destroy()
                        }
                    }
                } : void 0
            })
        }
    }),
    yIwO: (function(e, t, n) {
        var l = n("CHJa");

        function o(e) {
            let t = a(e);
            return e.content.content.every(e => e.childCount === t && e.content.content.every(e => 1 === e.attrs.colspan && 1 === e.attrs.rowspan))
        }

        function r(e) {
            return e.inlineContent ? l.c.empty : l.c.from(e.schema.nodes.paragraph.create())
        }

        function i(e, t, n) {
            return e.create({
                rowIndex: +(0 !== t),
                colspan: 1,
                rowspan: 1,
                ...void 0 === n ? {} : {
                    align: n
                }
            }, r(e))
        }

        function s(e, t) {
            let {
                table_row: n,
                table_cell: l
            } = e.type.schema.nodes;
            return n.create(null, Array.from({
                length: a(e)
            }, (n, o) => i(l, t, e.firstChild?.maybeChild(o)?.attrs.align ?? null)))
        }

        function a(e) {
            let t = 0;
            for (let n = 0; n < e.childCount; n += 1) t = Math.max(t, e.child(n).childCount);
            return t
        }
        n.d(t, {}, {
            a: i,
            b: s,
            c: r,
            d: function(e, t, n) {
                if (t < 0 || t > e.rowNode.childCount || !n && t === e.rowNode.childCount) return null;
                let l = e.rowPos + 1;
                for (let n = 0; n < t; n += 1) l += e.rowNode.child(n).nodeSize;
                return l
            },
            e: a,
            f: function(e, t) {
                let n = [],
                    l = t + 1;
                for (let t = 0; t < e.childCount; t += 1) {
                    let o = e.child(t);
                    n.push({
                        rowIndex: t,
                        rowNode: o,
                        rowPos: l
                    }), l += o.nodeSize
                }
                return n
            },
            g: function(e, t, n) {
                let r = a(e);
                if ("table" !== e.type.name || !Number.isSafeInteger(n) || n < 1 || 0 === e.childCount || 0 === r || !o(e)) return null;
                let u = "row" === t ? e.childCount : r;
                if (n === u) return e;
                if ("row" === t) {
                    let t = e.content.content.slice(0, n);
                    for (let l = u; l < n; l++) t.push(s(e, l));
                    return e.copy(l.c.fromArray(t))
                }
                return e.copy(l.c.fromArray(e.content.content.map((t, o) => {
                    let r = t.content.content.slice(0, n);
                    for (let t = u; t < n; t++) r.push(i(e.type.schema.nodes.table_cell, o));
                    return t.copy(l.c.fromArray(r))
                })))
            },
            h: o,
            i: function(e, t, n) {
                let l = e.doc.nodeAt(t);
                l?.type.name === "table_row" && l.forEach((l, o) => {
                    0 === l.attrs.rowIndex !== n && e.setNodeAttribute(t + 1 + o, "rowIndex", +!n)
                })
            }
        })
    }),
    hMk6: (function(e, t, n) {
        var l = n("rUQK");
        let o = [{
                id: "generate",
                command: "magic text generate",
                disabled: !1,
                messageKey: "generate",
                kind: "generate"
            }, {
                id: "divider",
                command: "divider hr horizontal rule",
                disabled: !1,
                messageKey: "divider",
                kind: "divider"
            }, {
                id: "emoji",
                command: "emoji smiley emoticon",
                disabled: !1,
                messageKey: "emoji",
                kind: "emoji"
            }, {
                id: "table",
                command: "table grid spreadsheet",
                disabled: !1,
                messageKey: "table",
                kind: "table"
            }, {
                id: "columnLeft",
                command: "column left add column left insert column left",
                disabled: !1,
                messageKey: "columnLeft",
                kind: "column-left"
            }, {
                id: "columnRight",
                command: "column right add column right insert column right",
                disabled: !1,
                messageKey: "columnRight",
                kind: "column-right"
            }, {
                id: "columnDelete",
                command: "column delete remove column delete column",
                disabled: !1,
                messageKey: "columnDelete",
                kind: "column-delete"
            }, {
                id: "checklist",
                command: "checklist checkbox check box task tasks todo",
                disabled: !1,
                messageKey: "checklist",
                kind: "checklist"
            }, ...(0, l.b)().map(e => ({
                id: e.id,
                command: e.command,
                disabled: !1,
                messageKey: e.messageKey,
                kind: "text-style"
            }))],
            r = new Map(o.map(e => [e.id, e])),
            i = ["generate", "divider", "emoji", "table", "columnLeft", "columnRight", "columnDelete", "checklist", ...l.a],
            s = ["columnLeft", "columnRight", "columnDelete"],
            a = new Set(s),
            u = [...s],
            d = i.filter(e => !a.has(e)),
            c = d.filter(e => !["paragraph", "unorderedList", "orderedList", "code"].includes(e));
        n.d(t, {}, {
            a: u,
            b: c,
            c: d,
            d: ["table", "columnLeft", "columnRight", "columnDelete"],
            e: e => r.get(e) ?? null,
            f: () => o,
            g: e => "" === e ? [...i] : o.filter(t => !!("table" === t.id && e.startsWith("table")) || t.command.includes(e)).map(e => e.id),
            h: e => r.get(e)?.disabled ?? !0,
            i: e => {
                let t = e.trim().toLowerCase();
                return t.startsWith("/") ? t.slice(1) : t
            }
        })
    })
};