export const __rspack_esm_ids = [704809];
export const __webpack_modules__ = {
    LSvd: (function(e, t, n) {
        var o = n("H0zY"),
            l = n("v2Zq"),
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
                    onChange: C,
                    onTransaction: I,
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
                    K = P ?? [...D ? [] : [(0, a.c)()], ...x, ...null == R ? [A.inputRulesPlugin(), A.keymapPlugin()] : [R.listInput, R.tableHeaderFormatting, R.inputRules, R.inputRulesHistoryIsolation, R.backspace, R.tabIndent, R.extensionKeymap], (0, l.b)(o.b), ...null == S ? [] : [(t = S, new r.d({
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
                            let o = t.applyTransaction(e),
                                l = o.state,
                                r = y?.(e, l) ?? null,
                                i = r ?? e;
                            null != r && v?.(r);
                            let s = r ? l.applyTransaction(r) : null,
                                a = s?.state ?? l,
                                d = null == s ? o.transactions : [...o.transactions, ...s.transactions];
                            if (n.updateState(a), I?.({
                                    previousState: t,
                                    nextState: a,
                                    transactions: d,
                                    view: n
                                }) === !1 || !d.some(e => e.docChanged) || i.getMeta(u.a)) return;
                            let c = T(n.state.doc),
                                h = T(F);
                            F = n.state.doc, z || c === h || C?.({
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
            a: () => o
        });
        let o = {
            content: "content-xaiQhS",
            page: "page-g4Dmdq",
            root: "editor-jMsqTn",
            tableFloatingUi: "tableFloatingUi-Q6FLpM"
        }
    }),
    ixaN: (function(e, t, n) {
        var o = n("rX7T"),
            l = n("f6KK");
        let r = new l.e("writingBlockEmoji"),
            i = {
                suggestion: null,
                dismissed: null
            },
            s = /(?:^|[\s([{\p{Extended_Pictographic}\p{Emoji_Presentation}\uFE0F\u20E3]):([\p{L}\p{N}\p{M}_+-]*)$/u;

        function a(e) {
            let {
                selection: t
            } = e, n = t.$from;
            if (!(t instanceof l.h) || 0 === n.depth || !0 === n.parent.type.spec.code || !0 === t.$to.parent.type.spec.code) return !1;
            let o = Object.values(e.schema.marks).filter(t => t === e.schema.marks.code || !0 === t.spec.code);
            return !(e.storedMarks ?? n.marks()).some(e => o.includes(e.type)) && !o.some(n => e.doc.rangeHasMark(t.from, t.to, n))
        }

        function u(e) {
            if (!e.selection.empty || !a(e)) return null;
            let t = e.selection.$from,
                n = t.parent.textBetween(0, t.parentOffset, void 0, e => "hard_break" === e.type.name ? "\n" : "￼").match(s)?.[1];
            if (null == n) return null;
            let o = t.pos - n.length - 1;
            return Object.values(e.schema.marks).some(n => (n === e.schema.marks.code || !0 === n.spec.code) && e.doc.rangeHasMark(o, t.pos, n)) ? null : {
                mode: "typed",
                from: o,
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
                return new l.d({
                    key: r,
                    state: {
                        init: () => i,
                        apply(t, n, o, l) {
                            if ("close" === t.getMeta(r)) return {
                                suggestion: null,
                                dismissed: n.suggestion?.mode === "typed" ? n.suggestion : n.dismissed
                            };
                            if (e?.composing || e?.editable === !1) return i;
                            if ("open" === t.getMeta(r)) return a(l) ? {
                                suggestion: {
                                    mode: "picker",
                                    from: l.selection.from,
                                    to: l.selection.to,
                                    query: ""
                                },
                                dismissed: null
                            } : i;
                            if (!t.docChanged) return !l.selection.eq(o.selection) || t.storedMarksSet ? i : n;
                            if (n.suggestion?.mode === "picker") {
                                let e = t.mapping.map(n.suggestion.from, 1),
                                    o = t.mapping.map(n.suggestion.to, n.suggestion.from === n.suggestion.to ? 1 : -1);
                                return l.selection.from === e && l.selection.to === o && a(l) ? {
                                    suggestion: {
                                        ...n.suggestion,
                                        from: e,
                                        to: o
                                    },
                                    dismissed: null
                                } : i
                            }
                            if (null == n.suggestion && e?.hasFocus() === !1) return i;
                            let s = u(l);
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
                                    o = null == n ? null : e.dom.ownerDocument.getElementById(n)?.closest("[data-symbol-picker]");
                                return !(t.relatedTarget instanceof Node && o?.contains(t.relatedTarget)) && (null != t.relatedTarget || !!e.dom.ownerDocument.hasFocus()) && (d(e), !1)
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
                let s = (0, o.b)(e.state.tr).insertText(t, i.from, i.to);
                return s.setSelection(l.h.create(s.doc, i.from + t.length)), e.dispatch(s.setMeta(r, "close").scrollIntoView()), e.dispatch((0, o.b)(e.state.tr)), !0
            },
            d: r
        })
    }),
    nC2v: (function(e, t, n) {
        var o = n("f6KK"),
            l = n("NoA4");
        let r = new o.e("writingBlockEmptyNodePlaceholder");

        function i(e) {
            return "object" == typeof e && null != e && (Object.prototype.hasOwnProperty.call(e, "isDisabled") || Object.prototype.hasOwnProperty.call(e, "placeholderText"))
        }

        function s(e, t, n, o) {
            if (n || !t.empty) return l.b.empty;
            let r = function(e, t) {
                let n = e.$from.parent;
                if (!n.isTextblock || "paragraph" !== n.type.name || n.content.size > 0) return null;
                let o = e.$from.before();
                if ("number" != typeof o) return null;
                let r = o + n.nodeSize;
                return l.a.node(o, r, {
                    "data-writing-block-empty-placeholder": "function" == typeof t ? t(e) : t
                })
            }(t, o);
            return r ? l.b.create(e, [r]) : l.b.empty
        }
        n.d(t, {}, {
            a: function(e, t) {
                return new o.d({
                    key: r,
                    state: {
                        init: (n, o) => ({
                            decorations: s(o.doc, o.selection, e, t),
                            isDisabled: e,
                            placeholderText: t
                        }),
                        apply(n, o) {
                            let l = n.getMeta(r),
                                a = (i(l) ? l.isDisabled : void 0) ?? o.isDisabled ?? e,
                                u = (i(l) ? l.placeholderText : void 0) ?? o.placeholderText ?? t;
                            return n.docChanged || n.selectionSet || a !== o.isDisabled || u !== o.placeholderText ? {
                                decorations: s(n.doc, n.selection, a, u),
                                isDisabled: a,
                                placeholderText: u
                            } : o
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
        var o = n("BJ9k"),
            l = n("H3Qi"),
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
                return e.descendants((e, l) => {
                    if (n) return !1;
                    if (e.isText) {
                        let r = t.isInSet(e.marks);
                        if (r) {
                            let t = r.attrs?.[o.a];
                            if ("string" == typeof t && t.length > 0) return n = {
                                id: t,
                                from: l,
                                to: l + e.nodeSize
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
                    text: o,
                    input: l
                } = e, {
                    caretPos: r,
                    triggerPos: i,
                    anchorPos: s
                } = l, a = n.parse(o ?? "");
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
                let l = [];
                return e.doc.descendants((e, r) => {
                    if (!e.isText) return !0;
                    let i = n.isInSet(e.marks);
                    return i && i.attrs?.[o.a] === t && l.push({
                        from: r,
                        to: r + e.nodeSize
                    }), !0
                }), l
            };
        n.d(t, {}, {
            a: (e, t) => ((e, t, n) => {
                let o = e.state.schema.marks.generate_suggestion;
                if (!o) return !1;
                let l = m(e.state, t);
                if (0 === l.length) return !1;
                let i = e.state.tr;
                l.forEach(e => {
                    let {
                        from: t,
                        to: n
                    } = e;
                    i = i.removeMark(t, n, o)
                }), i = i.setMeta(s, {
                    type: "clear-suggestion",
                    reason: n,
                    suggestionId: t
                });
                let a = l[l.length - 1];
                return a && (i = (i = i.setSelection(r.f.near(i.doc.resolve(a.to)))).scrollIntoView()), e.dispatch(i), !0
            })(e, t, "accept"),
            b: h,
            c: e => {
                let t = s.getState(e.state),
                    n = e.state.tr,
                    o = t?.input ?? null;
                if (o) {
                    let e = n.doc,
                        t = Math.max(0, Math.min(o.caretPos, e.content.size)),
                        l = r.f.findFrom(e.resolve(t), 1, !0) ?? r.f.near(e.resolve(t), 1);
                    n.selection.eq(l) || (n = n.setSelection(l))
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
                            o = ((e, t, n) => {
                                if (!t) return null;
                                let o = e.map(t.anchorPos, 1),
                                    l = e.map(t.caretPos, 1),
                                    r = e.map(t.blockFrom, -1),
                                    i = e.map(t.blockTo, 1),
                                    s = e.map(t.triggerPos, -1);
                                return r < 0 || r >= n.content.size || i < r ? null : {
                                    anchorPos: o,
                                    caretPos: l,
                                    blockFrom: r,
                                    blockTo: i,
                                    triggerPos: s
                                }
                            })(e.mapping, t.input, e.doc),
                            l = t.pendingRequestId,
                            r = ((e, t, n) => {
                                if (!t) return null;
                                let o = n.type.schema.marks.generate_suggestion;
                                if (!o) return null;
                                let l = e.map(t.from, -1);
                                if (l < 0 || l >= n.content.size) return null;
                                let r = n.nodeAt(l);
                                if (!r || !r.isText || !o.isInSet(r.marks)) return null;
                                let i = l + r.nodeSize;
                                return i <= l ? null : {
                                    id: t.id,
                                    from: l,
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
                                        let o;
                                        return d(o = e.input) && "number" == typeof o.anchorPos && "number" == typeof o.caretPos && "number" == typeof o.blockFrom && "number" == typeof o.blockTo && "number" == typeof o.triggerPos;
                                    case "close-input":
                                        return !0;
                                    case "set-request":
                                        return null === e.requestId || "number" == typeof e.requestId;
                                    default:
                                        return !1
                                }
                            })(h) ? h : null;
                        e.docChanged && f?.type !== "set-suggestion" && o && (o = null), f?.type === "open-input" ? (o = f.input, l = null, i = null, u = null) : f?.type === "close-input" ? (o = null, l = null) : f?.type === "set-request" ? l = o ? f.requestId : null : f?.type === "set-suggestion" ? (r = f.suggestion, n = a, o = null, l = null, i = null, u = null) : f?.type === "clear-suggestion" && (r ? (i = r.id, u = f.reason) : f.suggestionId && (i = f.suggestionId, u = f.reason), r = null, n = a);
                        let m = c(e.doc);
                        return m ? (r = m, f?.type !== "set-suggestion" && (i = null, u = null)) : f?.type !== "set-suggestion" && f?.type !== "clear-suggestion" && (r = null), {
                            input: o,
                            pendingRequestId: l,
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
                    [o.a]: i
                })), g = r.f.findFrom(p.doc.resolve(m), 1, !0) ?? r.f.near(p.doc.resolve(m), 1);
                return (p = p.setSelection(g)).setMeta(l.a, !0), p.setMeta(s, {
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
                let o = e.state.tr;
                return n.forEach(e => {
                    let {
                        from: t,
                        to: n
                    } = e, l = o.mapping.map(t), r = o.mapping.map(n);
                    l >= r || ((e, t) => {
                        let n = t;
                        for (;;) {
                            let t = Math.min(Math.max(n, 0), e.doc.content.size),
                                o = e.doc.resolve(t);
                            if (0 === o.depth) break;
                            let l = !1;
                            for (let t = o.depth; t > 0; t--) {
                                if (f(o.node(t))) continue;
                                let r = o.before(t),
                                    i = o.after(t);
                                e.delete(r, i), n = Math.max(0, r), l = !0;
                                break
                            }
                            if (!l) break
                        }
                    })(o = o.delete(l, r), l)
                }), o = o.setMeta(s, {
                    type: "clear-suggestion",
                    reason: "reject",
                    suggestionId: t
                }), e.dispatch(o), !0
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
        var o = n("CHJa"),
            l = n("HLFh");
        class r extends l.j {
            from;
            to;
            destination;
            constructor(e, t, n) {
                super(), this.from = e, this.to = t, this.destination = n
            }
            apply(e) {
                if (![this.from, this.to, this.destination].every(Number.isInteger) || this.from < 0 || this.to > e.content.size || this.from >= this.to || this.destination < 0 || this.destination > e.content.size || this.destination >= this.from && this.destination <= this.to) return l.l.fail("Invalid block move");
                let t = e.resolve(this.from),
                    n = e.resolve(this.to),
                    o = e.resolve(this.destination);
                if (!t.sameParent(n) || t.parent.inlineContent || o.parent.inlineContent || 0 !== t.textOffset || 0 !== n.textOffset || 0 !== o.textOffset) return l.l.fail("Move requires complete blocks and a block boundary");
                let r = e;
                for (let t of this.replacements(e)) {
                    let e = t.apply(r);
                    if (null == e.doc) return e;
                    r = e.doc
                }
                return l.l.ok(r)
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
                    o = e.mapResult(this.destination, this.destination < this.from ? 1 : -1);
                if (o.deletedAcross || t.pos >= n.pos || o.pos >= t.pos && o.pos <= n.pos) return null;
                if (t.deleted && n.deleted) {
                    let o = e.mapResult(this.from + 1, 1),
                        l = e.mapResult(this.to - 1, -1);
                    if (this.to - this.from < 2 || o.deletedAcross || l.deletedAcross || !i(e, this.from + 1, 1) || !i(e, this.to - 1, -1) || o.pos <= t.pos || o.pos >= n.pos || l.pos <= t.pos || l.pos >= n.pos) return null
                }
                return new r(t.pos, n.pos, o.pos)
            }
            replacements(e) {
                let t = this.destination < this.from ? this.destination : this.destination - (this.to - this.from);
                return [new l.i(this.from, this.to, o.j.empty), new l.i(t, t, e.slice(this.from, this.to))]
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
            let o = e instanceof l.e ? e.maps.slice(e.from, e.to) : e instanceof l.k ? [e] : null;
            if (null == o) return !1;
            let r = !1,
                i = !1;
            for (let s = 0; s < o.length; s++) {
                if (e instanceof l.e) {
                    let o = e.getMirror(e.from + s);
                    if (null != o && o > e.from + s && o < e.to) {
                        let l = e.slice(e.from + s, o + 1).mapResult(t, n);
                        if (l.deletedAcross) return !1;
                        t = l.pos, s = o - e.from;
                        continue
                    }
                }
                let a = o[s],
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
        class s extends l.k {
            from;
            to;
            destination;
            constructor(e, t, n) {
                super([Math.min(e, n), 0, 0]), this.from = e, this.to = t, this.destination = n
            }
            map(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    n = e;
                return this.forEach((o, l, r) => {
                    (e > o || e === o && t > 0) && (e < l || e === l && t < 0) && (n = r + e - o)
                }), n
            }
            mapResult(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
                return l.k.empty.mapResult(this.map(e, t))
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
        var o = n("f6KK"),
            l = n("ixaN"),
            r = n("hMk6");
        let i = new o.e("writingBlockSlashMenu"),
            s = {
                triggerPos: null,
                anchorPos: null,
                query: "",
                normalizedQuery: "",
                visibleOptionIds: [],
                highlightedOptionId: null
            },
            a = e => e?.triggerPos != null && e?.anchorPos != null,
            u = (e, t, n, o) => {
                let l = e.doc,
                    i = l.content.size,
                    s = Math.min(t + 1, i),
                    a = o?.previousState ?? null,
                    u = o?.anchorOverride ?? a?.anchorPos ?? null ?? s,
                    d = e.selection.from,
                    c = Math.min(Math.max(d >= s ? d : u, s), i),
                    h = c <= s ? "" : l.textBetween(s, c, "\0", "\0"),
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
                        for (let o of (null == l.d.getState(t) && n.add("emoji"), e.getHiddenOptionIds?.(t) ?? [])) n.add(o);
                        return n
                    };
                return new o.d({
                    key: i,
                    state: {
                        init: () => s,
                        apply(n, o, l, r) {
                            let d = n.getMeta(i),
                                c = "object" == typeof d && null != d && "type" in d ? d : void 0;
                            if (c?.type === "open") {
                                let e = t(r);
                                return u(r, c.triggerPos, e, {
                                    previousState: o,
                                    anchorOverride: c.anchorPos
                                })
                            }
                            if (c?.type === "close") return s;
                            if (c?.type === "highlight") {
                                if (!a(o)) return o;
                                let e = c.commandId;
                                return null == e ? {
                                    ...o,
                                    highlightedOptionId: o.visibleOptionIds[0] ?? null
                                } : o.visibleOptionIds.includes(e) ? o.highlightedOptionId === e ? o : {
                                    ...o,
                                    highlightedOptionId: e
                                } : o
                            }
                            if (c?.type === "navigate") {
                                if (!a(o)) return o;
                                let e = o.visibleOptionIds;
                                if (0 === e.length) return null == o.highlightedOptionId ? o : {
                                    ...o,
                                    highlightedOptionId: null
                                };
                                let t = "previous" === c.direction ? -1 : 1,
                                    n = o.highlightedOptionId ? e.indexOf(o.highlightedOptionId) : -1,
                                    l = ((n >= 0 ? n : 0) + t + e.length) % e.length;
                                return e[l] === o.highlightedOptionId ? o : {
                                    ...o,
                                    highlightedOptionId: e[l] ?? null
                                }
                            }
                            if (c?.type === "execute" || !a(o)) return o;
                            let h = null != o.triggerPos ? n.mapping.map(o.triggerPos, -1) : null,
                                f = null != o.anchorPos ? n.mapping.map(o.anchorPos, 1) : null;
                            if (null == h || null == f || !((e, t, n) => {
                                    let o = e.selection;
                                    if (!o.empty || o.from <= t || "/" !== e.doc.textBetween(t, t + 1, "\0", "\0")) return !1;
                                    let l = e.doc.resolve(t),
                                        r = e.selection.$from;
                                    return l.parent === r.parent && (n || !e.doc.textBetween(t + 1, o.from, "\0", "\0").includes("/"))
                                })(r, h, e.allowSlashInQuery?.() === !0)) return s;
                            let m = t(r);
                            return u(r, h, m, {
                                previousState: {
                                    ...o,
                                    triggerPos: h,
                                    anchorPos: f
                                }
                            })
                        }
                    },
                    props: {
                        handleTextInput(t, n, o, l) {
                            let r = l.lastIndexOf("/");
                            if (-1 === r || t.composing || e.allowSlashInQuery?.() === !0 && a(i.getState(t.state))) return !1;
                            let s = t.state.doc.resolve(n),
                                u = r > 0 ? l.slice(0, r) : s.parent.textBetween(0, s.parentOffset, "\0", e => "hard_break" === e.type.name ? "\n" : "\0"),
                                d = t.state.storedMarks ?? s.marks();
                            if (u.length > 0 && !/\s$/u.test(u) || s.parent.type.spec.code || d.some(e => e.type === t.state.schema.marks.code)) return !1;
                            let c = t.state.tr;
                            c.insertText(l, n, o);
                            let h = n + r,
                                f = n + l.length;
                            return t.dispatch(c.setMeta(i, {
                                type: "open",
                                triggerPos: h,
                                anchorPos: f
                            })), !0
                        },
                        handleKeyDown(t, n) {
                            if (n.defaultPrevented || n.isComposing || 229 === n.keyCode) return !1;
                            let o = i.getState(t.state);
                            if ("Escape" === n.key && a(o)) {
                                n.preventDefault(), n.stopPropagation();
                                let e = t.state.tr.setMeta(i, {
                                    type: "close"
                                });
                                return t.dispatch(e), !0
                            }
                            if (!o || !a(o)) return !1;
                            if (("ArrowUp" === n.key || "ArrowDown" === n.key) && o.visibleOptionIds.length > 0) {
                                n.preventDefault(), n.stopPropagation();
                                let e = t.state.tr.setMeta(i, {
                                    type: "navigate",
                                    direction: "ArrowUp" === n.key ? "previous" : "next"
                                });
                                return t.dispatch(e), !0
                            }
                            if ("Enter" === n.key) {
                                let l = o.highlightedOptionId;
                                if (null == l) return d(t), !1;
                                if (n.preventDefault(), n.stopPropagation(), (0, r.h)(l)) return !0;
                                if (null != e.onExecute) return e.onExecute({
                                    commandId: l,
                                    query: o.query,
                                    view: t
                                }), !0;
                                let s = t.state.tr.setMeta(i, {
                                    type: "execute",
                                    commandId: l
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
        var o = n("f6KK"),
            l = n("d8ZM");
        let r = new WeakMap;

        function i(e) {
            let t = r.get(e);
            return t?.selection === e.state.selection ? t.offsetX : 0
        }

        function s(e, t, n) {
            let {
                doc: s,
                selection: u
            } = e.state, c = "up" === n, h = e.coordsAtPos(u.from).left + i(e), f = (0, l.b)(t.$head);
            if (null != f) {
                let n = e.nodeDOM(t.$head.before(f - 1));
                if (!(n instanceof e.dom.ownerDocument.defaultView.HTMLTableRowElement)) return !1;
                let l = function(e, t) {
                    let n = e.getBoundingClientRect(),
                        o = n.width > 0 ? Math.max(n.left + 1, Math.min(t, n.right - 1)) : t,
                        l = null,
                        r = 1 / 0,
                        i = e.ownerDocument.defaultView.HTMLTableRowElement,
                        s = 0;
                    for (let t = e; t instanceof i; t = t.previousElementSibling) {
                        for (let e of t.cells) {
                            if (0 !== e.rowSpan && e.rowSpan <= s) continue;
                            let t = e.getBoundingClientRect(),
                                n = Math.max(0, t.left - o, o - t.right);
                            if (0 === n) return e;
                            n < r && (l = e, r = n)
                        }
                        s++
                    }
                    return l
                }(n, h);
                if (null == l) return !1;
                let r = e.posAtDOM(l, c ? l.childNodes.length : 0);
                t = o.f.near(s.resolve(r), c ? -1 : 1)
            }
            t instanceof o.h && (t = d(e, t, h));
            let m = u.empty && !u.$from.parent.inlineContent || t.empty && !t.$from.parent.inlineContent ? function(e, t) {
                    let n = e.domAtPos(t.start()).node,
                        o = 1 === n.nodeType ? n : n.parentElement;
                    for (; null != o && 0 === o.getClientRects().length;) o = o.parentElement;
                    return o
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
                let o = e.doc.resolve(t ? e.before(n) : e.after(n)),
                    l = t ? o.nodeBefore : o.nodeAfter;
                if (null != l) return "table" === l.type.name ? o : null
            }
            return null
        }

        function d(e, t, n) {
            let {
                $head: l
            } = t, r = e.nodeDOM(l.before());
            if (!(r instanceof e.dom.ownerDocument.defaultView.Element) || 0 === l.parent.content.size) return t;
            let i = r.getBoundingClientRect();
            if (0 === i.width) return t;
            let s = e.coordsAtPos(l.pos),
                a = e.posAtCoords({
                    left: Math.min(Math.max(i.left + 1, n), i.right - 1),
                    top: (s.top + s.bottom) / 2
                });
            return null != a && a.pos >= l.start() && a.pos <= l.end() ? o.h.create(l.doc, a.pos) : t
        }
        n.d(t, {}, {
            a: function(e, t) {
                let {
                    selection: n
                } = e.state, r = "left" === t;
                if (!(n instanceof o.h) || !n.empty || n.$head.parentOffset !== (r ? 0 : n.$head.parent.content.size) || !e.endOfTextblock(t)) return !1;
                let i = u(n.$head, r);
                if (null == i) return !1;
                let s = o.f.findFrom(i, r ? -1 : 1, !0);
                return !!s && null != (0, l.b)(s.$head) && (e.dispatch(e.state.tr.setSelection(s).scrollIntoView()), !0)
            },
            b: function(e, t) {
                let {
                    selection: n,
                    doc: r
                } = e.state;
                if (!(n instanceof o.h) || !n.empty) return !1;
                let i = (0, l.b)(n.$head);
                if (null == i || i < 3) return !1;
                let s = "left" === t,
                    a = o.h.near(r.resolve(s ? n.$head.start(i) : n.$head.end(i)), s ? 1 : -1);
                if (!n.eq(a) || !e.endOfTextblock(t)) return !1;
                let u = o.f.findFrom(r.resolve(s ? n.$head.before(i) : n.$head.after(i)), s ? -1 : 1, !0);
                if (!(u instanceof o.h)) return !1;
                let d = (0, l.b)(u.$head);
                return null != d && !(d < 3) && u.$head.before(d - 2) === n.$head.before(i - 2) && (e.dispatch(e.state.tr.setSelection(u).scrollIntoView()), !0)
            },
            c: s,
            d: function(e, t, n) {
                let a, {
                    selection: d,
                    doc: c
                } = e.state;
                if (!(d instanceof o.h) || !d.empty) return !1;
                let {
                    $head: h
                } = d, f = "up" === t, m = f ? -1 : 1, p = (0, l.b)(h), g = !0;
                if (null == p) a = u(h, f);
                else {
                    g = o.f.near(c.resolve(f ? h.start(p) : h.end(p)), -m).$head.sameParent(h);
                    let e = p - 2,
                        t = h.node(e).childCount,
                        n = h.index(e),
                        l = f ? n : Math.min(t, n + (h.node(p).attrs.rowspan || t));
                    a = c.resolve(h.posAtIndex(l, e))
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
                    let o = f ? a.before() : a.after();
                    if (n(e, c.resolve(o), t)) return !0
                }
                let w = o.f.findFrom(a, m);
                return null == w ? null != p : s(e, w, t)
            },
            e: function(e) {
                return r.delete(e), !1
            },
            f: function(e, t, n) {
                let l = r.get(e);
                if (l?.nativeStep == null || l.selection !== e.state.selection || n.doc !== e.state.doc || t.pos !== n.pos || !n.parent.inlineContent || (n.pos - l.selection.head) * l.nativeStep <= 0) return null;
                let i = e.coordsAtPos(l.selection.head).left + l.offsetX,
                    s = o.h.create(n.doc, n.pos),
                    a = 0 === l.offsetX ? s : d(e, s, i);
                return r.set(e, {
                    selection: a,
                    offsetX: i - e.coordsAtPos(a.head).left
                }), a
            },
            g: d
        })
    }),
    d8ZM: (function(e, t, n) {
        var o = n("f6KK");
        class l extends o.h {
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
            constructor(e, t, n, o) {
                this.anchor = e, this.head = t, this.cellAnchor = n, this.cellHead = o
            }
            map(e) {
                return new r(e.map(this.anchor), e.map(this.head), e.map(this.cellAnchor), e.map(this.cellHead))
            }
            resolve(e) {
                let t = o.h.between(e.resolve(this.anchor), e.resolve(this.head));
                return t instanceof o.h ? new l(t, this.cellAnchor, this.cellHead) : t
            }
        }
        n.d(t, {}, {
            a: l,
            b: function(e) {
                for (let t = e.depth; t > 0; t -= 1)
                    if ("table_cell" === e.node(t).type.name) return t;
                return null
            }
        })
    }),
    AlhV: (function(e, t, n) {
        var o = n("CHJa");

        function l(e, t) {
            if (!t.nodes.table_cell.validContent(e)) return !1;
            let n = !0;
            return e.descendants(e => (e.isBlock && !["paragraph", "list", "ordered_list", "regular_list_item", "task_list_item", "code_block", "heading", "blockquote", "horizontal_rule"].includes(e.type.name) && (n = !1), n)), n
        }

        function r(e) {
            let t = e[0]?.length ?? 0;
            return !!(t > 0 && e.every(e => e.length === t)) && e
        }
        n.d(t, {}, {
            a: l,
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
                                i = o.a.fromSchema(e);
                            for (let o of Array.from(n.rows)) {
                                let n = [];
                                for (let t of Array.from(o.cells)) {
                                    var u;
                                    let o = s.createElement("div");
                                    if (o.innerHTML = t.innerHTML, !a.inlineContent) {
                                        let e = t.style.fontWeight || ("TH" === t.tagName ? "bold" : "");
                                        if ("" !== e) {
                                            let t = s.createElement("span");
                                            t.style.fontWeight = e, t.append(...Array.from(o.childNodes)), o.append(t)
                                        }
                                    }
                                    if (a.inlineContent)
                                        for (let e of Array.from(o.querySelectorAll("p, div"))) null != e.nextSibling && e.after(s.createElement("br")), e.replaceWith(...Array.from(e.childNodes));
                                    let r = i.parse(o, {
                                            preserveWhitespace: !0
                                        }),
                                        d = a.inlineContent ? (u = r.content).content.every(e => e.isInline) ? u : 1 === u.childCount && u.firstChild?.type.name === "paragraph" ? u.firstChild.content : null : r.content;
                                    if (null == d || !l(d, e)) return !1;
                                    let c = 0;
                                    if (d.descendants(e => {
                                            "string" == typeof e.attrs.src && (c += 1)
                                        }), c < o.querySelectorAll("img").length) return !1;
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
                        let o = [];
                        for (let t = 0; t < d.child(n).childCount; t += 1) {
                            let r = d.child(n).child(t);
                            if (1 !== r.attrs.colspan || 1 !== r.attrs.rowspan || !l(r.content, e)) return !1;
                            o.push(r.content)
                        }
                        t.push(o)
                    }
                    return r(t)
                }
                if ("" !== i || t.content.content.some(t => t.type === e.nodes.table) || !n.includes("	")) return null;
                let c = function(e) {
                    let t = e.replace(/\r\n?/g, "\n"),
                        n = [],
                        o = [],
                        l = "",
                        r = !1,
                        i = !1;
                    for (let e = 0; e < t.length; e += 1) {
                        let s = t[e];
                        if (r) '"' === s ? '"' === t[e + 1] ? (l += '"', e += 1) : (r = !1, i = !0) : l += s;
                        else if ("	" === s || "\n" === s) o.push(l), l = "", i = !1, "\n" === s && (n.push(o), o = []);
                        else {
                            if (i) return null;
                            '"' === s && "" === l ? r = !0 : l += s
                        }
                    }
                    return r ? null : ((o.length > 0 || "" !== l || !t.endsWith("\n")) && (o.push(l), n.push(o)), n)
                }(n);
                return null != c && r(c.map(t => t.map(t => {
                    let n = [];
                    return t.split("\n").forEach((t, o) => {
                        o > 0 && n.push(e.nodes.hard_break.create()), "" !== t && n.push(e.text(t))
                    }), o.c.from(a.inlineContent ? n : e.nodes.paragraph.create(null, n))
                })))
            }
        })
    }),
    IlTK: (function(e, t, n) {
        var o = n("HLFh");
        let l = new WeakMap;
        n.d(t, {}, {
            a: function(e, t) {
                if (!(e instanceof o.e)) return !1;
                for (let n = e.from; n < e.to; n++) {
                    let o = l.get(e.maps[n]);
                    if (o?.has(e.slice(e.from, n).map(t, 1))) return !0
                }
                return !1
            },
            b: function(e, t) {
                t.size > 0 && l.set(e, t)
            }
        })
    }),
    Cn5C: (function(e, t, n) {
        n.d(t, {
            a: () => ef,
            b: () => eP,
            c: () => K,
            d: () => eE,
            e: () => eC,
            f: () => ep,
            g: () => eS,
            h: () => eI,
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
        var o = n("rX7T"),
            l = n("WuTo"),
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
            constructor(e, t, n = !1, o, l) {
                super(), this.changes = e, this.replayAcrossRows = t, this.isNewRowEdit = n, this.removedCells = o, this.tableStart = l
            }
            apply(e) {
                let t = this.rowEdits(e);
                if (null == t) return d.l.fail("Invalid table column replacement");
                let n = t.table.content.content.slice();
                for (let [e, {
                        index: o,
                        row: l,
                        from: r,
                        to: i,
                        change: s
                    }] of t.rows.entries()) {
                    let t = l.content.content.slice(r, i),
                        u = this.removedCells?.[e];
                    if (null != u && (t.length !== u.childCount || t.some((e, t) => !e.content.eq(u.child(t).content)))) return d.l.fail("Column replay would remove different cells");
                    if (this.isNewRowEdit && t.some(e => !e.content.eq((0, g.c)(e.type)))) return d.l.fail("Cannot remove nonempty cells from a new row");
                    let c = a.c.fromArray([...l.content.content.slice(0, r), ...s.slice.content.content, ...l.content.content.slice(i)]);
                    if (!l.type.validContent(c)) return d.l.fail("Invalid table row content");
                    n[o] = l.copy(c)
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
                        from: o,
                        to: l,
                        change: r
                    } = e, i = r.from + n;
                    return n += r.slice.size - (r.to - r.from), new d.i(i, i + r.slice.size, new a.j(a.c.fromArray(t.content.content.slice(o, l)), 0, 0))
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
                for (let [o, l] of this.changes.entries()) {
                    let r = l.map(e);
                    if (null == r) continue;
                    let i = this.removedCells?.[o];
                    if (null != i) {
                        let t = function(e, t, n, o) {
                            let l = t.from,
                                r = n.from,
                                i = [];
                            for (let t of e.content) {
                                let e = l;
                                if (l += t.nodeSize, o.mapResult(e + 1, 1).deletedAcross && o.mapResult(l - 1, -1).deletedAcross) continue;
                                let n = o.map(l, -1);
                                if (o.map(e, 1) !== r || n <= r) return null;
                                i.push(t), r = n
                            }
                            return r === n.to ? a.c.fromArray(i) : null
                        }(i, l, r, e);
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
                let o = e.mapping.slice(t).map(n.position),
                    l = e.doc.nodeAt(o);
                if (l?.type.name !== "table") return !1;
                let {
                    row: r,
                    from: i,
                    to: s,
                    change: u
                } = n.rows[0], c = u.slice.content.content, h = r.childCount, f = h - (s - i) + c.length;
                if (f === h || l.content.content.every(e => e.childCount === f)) return !0;
                if (n.rows.some(e => e.row.childCount !== h || e.from !== i || e.to !== s || e.change.slice.content.childCount !== c.length)) return !1;
                for (let t of (0, g.f)(l, o).reverse()) {
                    if (t.rowNode.childCount === f) continue;
                    if (t.rowNode.childCount !== h || t.rowNode.content.content.some(e => 1 !== e.attrs.colspan || 1 !== e.attrs.rowspan)) return !1;
                    let n = (0, g.d)(t, i, !0),
                        o = (0, g.d)(t, s, !0);
                    if (null == n || null == o) return !1;
                    let l = c.map(e => (0, g.a)(e.type, t.rowIndex, e.attrs.align)),
                        r = new w([new d.i(n, o, new a.j(a.c.fromArray(l), 0, 0))], !1, !0);
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
                    o = n.depth - 1;
                if ("table_row" !== n.parent.type.name || o < 1) return null;
                let l = n.node(o);
                if ("table" !== l.type.name) return null;
                let r = n.before(o),
                    i = [],
                    s = 0;
                return l.forEach((e, t, n) => {
                    let o = this.changes[s],
                        l = r + t + 2,
                        a = l + e.content.size;
                    if (null == o || o.from < l || o.to > a || o.from > o.to || o.slice.openStart || o.slice.openEnd) return;
                    let u = o.from === a ? e.childCount : -1,
                        d = o.to === a ? e.childCount : -1;
                    e.forEach((e, t, n) => {
                        l + t === o.from && (u = n), l + t === o.to && (d = n)
                    }), u < 0 || d < 0 || (i.push({
                        index: n,
                        row: e,
                        from: u,
                        to: d,
                        change: o
                    }), s += 1)
                }), s === this.changes.length ? {
                    table: l,
                    position: r,
                    rows: i
                } : null
            }
        }
        class b extends d.i {
            rowCount;
            columns;
            tableStart;
            constructor(e, t, n, o, l, r) {
                super(e, t, n), this.rowCount = o, this.columns = l, this.tableStart = r
            }
            apply(e) {
                let {
                    from: t,
                    to: n,
                    slice: o
                } = this;
                if (t < 0 || n > e.content.size || t > n) return d.l.fail("Invalid table row range");
                let l = e.resolve(t),
                    r = e.resolve(n);
                return l.sameParent(r) && "table" === l.parent.type.name && 0 === l.textOffset && 0 === r.textOffset && r.index() - l.index() === (0 === o.size ? this.rowCount : 0) ? super.apply(e) : d.l.fail("Invalid table row replacement")
            }
            invert(e) {
                let {
                    from: t,
                    slice: n
                } = this, o = e.resolve(t), l = this.columns;
                if (null == l && 0 === n.size) {
                    let e = 0 === o.index() ? this.rowCount : 0,
                        t = o.parent.maybeChild(e);
                    if (null != t) {
                        let n = o.posAtIndex(e) + 1,
                            r = [];
                        t.forEach((e, t) => {
                            let o = n + t;
                            r.push({
                                from: o + 1,
                                to: o + e.nodeSize - 1
                            })
                        }), l = r
                    }
                }
                let r = super.invert(e);
                return new b(r.from, r.to, r.slice, this.rowCount, null == l ? void 0 : v(l, this.getMap()), o.before())
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
                        columns: o
                    } = this,
                    l = e.docs[t].resolve(this.from),
                    r = l.before(),
                    i = e.mapping.slice(t).map(r, 1),
                    s = e.doc.nodeAt(i);
                if (s?.type.name !== "table") return !1;
                let u = l.index();
                if (0 === this.slice.size) return 0 === u && (0, g.i)(e, i + 1, !0), !0;
                if (null == o) return !1;
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
                        return t.childCount !== o.length
                    })) return !1;
                let w = e.doc.nodeAt(i),
                    b = v(o, e.mapping.slice(t)),
                    M = Array(f).fill(void 0),
                    x = -1;
                for (let [t, o] of b.entries()) {
                    if (null == o) continue;
                    if (!Number.isInteger(o.from) || !Number.isInteger(o.to) || o.from < 0 || o.from > o.to || o.to > e.doc.content.size) return !1;
                    let l = e.doc.resolve(o.from),
                        r = e.doc.resolve(o.to);
                    if (!l.sameParent(r) || "table_cell" !== l.parent.type.name || l.node(l.depth - 2) !== w || l.start() !== o.from || r.end() !== o.to) return !1;
                    let i = l.before(l.depth - 1),
                        s = l.index(l.depth - 1);
                    if (null != n && i !== n || s <= x || s >= f) return !1;
                    n = i, x = s, M[s] = t
                }
                if (M.filter(e => null != e).length !== Math.min(f, o.length)) return !1;
                let C = new Set(M);
                for (let t of m.reverse())
                    if (f < o.length)
                        for (let n = o.length - 1; n >= 0; n--) {
                            if (C.has(n)) continue;
                            let o = (0, g.d)(t, n, !1);
                            if (null == o || e.maybeStep(new d.i(o, o + t.rowNode.child(n).nodeSize, a.j.empty)).failed) return !1
                        } else {
                            let n = o.length;
                            for (let o = f - 1; o >= 0; o--) {
                                if (null != M[o]) {
                                    n--;
                                    continue
                                }
                                let l = (0, g.d)(t, n, !0);
                                if (null == l) return !1;
                                let r = h[0].child(o).attrs.align,
                                    i = (0, g.a)(t.rowNode.child(0).type, t.rowIndex, r);
                                if (e.maybeStep(new d.i(l, l, new a.j(a.c.from(i), 0, 0))).failed) return !1
                            }
                        }
                return y(e, i, u, c, p), !0
            }
        }

        function v(e, t) {
            return e.map(e => {
                if (null == e) return null;
                let n = t.mapResult(e.from, -1),
                    o = t.mapResult(e.to, 1);
                return n.deletedAcross || o.deletedAcross ? null : {
                    from: n.pos,
                    to: o.pos
                }
            })
        }

        function y(e, t, n, o, l) {
            let r = e.doc.nodeAt(t);
            if (null != r && null == r.attrs.dilTemplate)
                for (let {
                        rowNode: i,
                        rowPos: s
                    }
                    of(0, g.f)(r, t).slice(n, o)) i.forEach((t, n, o) => {
                    let r = l[o];
                    t.type.spec.attrs?.pageColumnWidth != null && t.attrs.pageColumnWidth !== r && e.setNodeAttribute(s + 1 + n, "pageColumnWidth", r)
                })
        }
        var M = n("nwe2"),
            x = n("ahCC"),
            C = n("d8ZM");
        let I = "table",
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
                o = H.exec(n);
            if (!o) return {
                rows: 3,
                columns: 3
            };
            let l = Number.parseInt(o[1] ?? "", 10),
                r = Number.parseInt(o[2] ?? "", 10);
            return Number.isNaN(l) || Number.isNaN(r) ? {
                rows: 3,
                columns: 3
            } : {
                rows: R(l),
                columns: R(r)
            }
        }

        function K(e, t, n) {
            let o = e.schema.nodes.table,
                l = e.schema.nodes.table_row,
                r = e.schema.nodes.table_cell;
            if (!o || !l || !r) return null;
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
                a.push(l.create(null, t))
            }
            return o.create(null, a)
        }

        function L(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : e.selection.$anchor,
                n = null,
                o = null,
                l = null;
            for (let e = t.depth; e > 0; e -= 1) {
                let r = t.node(e).type.name;
                if (null == n && r === S) {
                    n = e;
                    continue
                }
                if (null == o && "table_row" === r) {
                    o = e;
                    continue
                }
                if (r === I) {
                    l = e;
                    break
                }
            }
            return null == n || null == o || null == l ? null : {
                tableNode: t.node(l),
                tablePos: t.before(l),
                rowIndex: t.index(l),
                columnIndex: t.index(o)
            }
        }

        function O(e) {
            let t = L(e);
            if (!t) return null;
            let n = (0, g.f)(t.tableNode, t.tablePos)[t.rowIndex];
            if (!n) return null;
            let o = Math.max(0, Math.min(t.columnIndex, n.rowNode.childCount - 1)),
                l = (0, g.d)(n, o, !1);
            if (null == l) return null;
            let r = n.rowNode.child(o);
            return {
                context: t,
                rowInfo: n,
                cellPos: l,
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
            let o = Math.max(0, Math.min(t.rowIndex, n.length - 1)),
                l = n[o];
            return l && 0 !== l.rowNode.childCount ? {
                rowIndex: o,
                columnIndex: Math.max(0, Math.min(t.columnIndex, l.rowNode.childCount - 1))
            } : {
                rowIndex: o,
                columnIndex: 0
            }
        }

        function $(e, t) {
            let n = L(e);
            if (!n) return null;
            let o = z(n),
                l = t?.structureSelectionAnchor ?? o,
                r = t?.structureSelectionHead ?? o;
            return {
                context: n,
                anchor: F(n, l),
                head: F(n, r)
            }
        }

        function B(e, t) {
            let n = (0, g.f)(e.tableNode, e.tablePos),
                o = F(e, t),
                l = n[o.rowIndex];
            if (!l) return null;
            let r = (0, g.d)(l, o.columnIndex, !1);
            if (null == r) return null;
            let i = l.rowNode.child(o.columnIndex);
            return {
                rowInfo: l,
                cellPos: r,
                cellNode: i
            }
        }

        function _(e, t) {
            let n = $(e, t);
            if (!n) return null;
            let {
                anchor: o,
                head: l
            } = n, r = {
                from: Math.min(o.rowIndex, l.rowIndex),
                to: Math.max(o.rowIndex, l.rowIndex)
            }, i = {
                from: Math.min(o.columnIndex, l.columnIndex),
                to: Math.max(o.columnIndex, l.columnIndex)
            }, s = (0, g.f)(n.context.tableNode, n.context.tablePos), a = [];
            for (let e = r.from; e <= r.to; e += 1) {
                let t = s[e];
                if (!t || 0 === t.rowNode.childCount) continue;
                let n = Math.max(0, Math.min(i.from, t.rowNode.childCount - 1)),
                    o = Math.max(0, Math.min(i.to, t.rowNode.childCount - 1));
                for (let l = n; l <= o; l += 1) {
                    let n = (0, g.d)(t, l, !1);
                    null != n && a.push({
                        rowIndex: e,
                        columnIndex: l,
                        cellPos: n,
                        cellNode: t.rowNode.child(l)
                    })
                }
            }
            return {
                ...n,
                rows: r,
                columns: i,
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
            let o = t[n];
            return !(o.rowNode.childCount <= 0) && e.columnIndex >= o.rowNode.childCount - 1
        }

        function q(e, t) {
            let n = e.state.tr.setMeta(T, {
                    isStructureMode: !1,
                    isEditMode: !1,
                    allowCellNavigationInEditMode: !1
                }),
                o = function(e, t, n) {
                    let o = Math.min(t + n.nodeSize, e.doc.content.size),
                        l = e.doc.resolve(o).nodeAfter;
                    if (l?.isTextblock && 0 === l.textContent.trim().length) return {
                        tr: e,
                        selectionPos: Math.min(o + 1, e.doc.content.size)
                    };
                    let r = e.doc.type.schema.nodes.paragraph;
                    if (!r) return {
                        tr: e,
                        selectionPos: o
                    };
                    let i = e.doc.resolve(o);
                    if (!i.parent.canReplaceWith(i.index(), i.index(), r)) return {
                        tr: e,
                        selectionPos: o
                    };
                    let s = r.createAndFill() ?? r.create();
                    return {
                        tr: e = e.insert(o, s),
                        selectionPos: Math.min(o + 1, e.doc.content.size)
                    }
                }(n, t.tablePos, t.tableNode);
            return n = o.tr.setSelection(u.h.near(o.tr.doc.resolve(o.selectionPos), 1)).scrollIntoView(), e.dispatch(n), !0
        }

        function W(e, t) {
            let n = Math.min(t.tablePos + t.tableNode.nodeSize, e.state.doc.content.size),
                o = e.state.doc.resolve(n).nodeAfter;
            if (!o?.isTextblock) return !1;
            let l = Math.min(n + 1, e.state.doc.content.size),
                r = e.state.tr.setMeta(T, {
                    isStructureMode: !1,
                    isEditMode: !1,
                    allowCellNavigationInEditMode: !1
                }).setSelection(u.h.near(e.state.tr.doc.resolve(l), 1)).scrollIntoView();
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
            let o = "left" === t || "up" === t;
            return u.h.near(e.state.doc.resolve(o ? n.cellPos + 1 : n.cellPos + n.cellNode.nodeSize - 1), o ? 1 : -1).$head.sameParent(e.state.selection.$head) && e.endOfTextblock(t)
        }

        function Q(e) {
            return null != L(e)
        }

        function Z(e) {
            let t = L(e, e.selection.$from),
                n = L(e, e.selection.$to);
            if (null == t || n?.tablePos !== t.tablePos) return null;
            let o = t.tableNode.childCount - 1,
                l = t.tableNode.child(o).childCount - 1,
                r = B(t, {
                    rowIndex: 0,
                    columnIndex: 0
                }),
                i = B(t, {
                    rowIndex: o,
                    columnIndex: l
                });
            return null == r || null == i ? null : ex(e, r.cellPos + 1, i.cellPos + 1)
        }

        function Y(e) {
            return Q(e.state)
        }

        function G(e, t, n, o) {
            let {
                bias: l = 1,
                scrollIntoView: r = !0
            } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, i = e.doc.nodeAt(t);
            if (!i || i.type.name !== I) return null;
            let s = (0, g.f)(i, t);
            if (0 === s.length) return null;
            let a = Math.max(0, Math.min(n, s.length - 1)),
                d = s[a];
            if (!d || 0 === d.rowNode.childCount) return null;
            let c = Math.max(0, Math.min(o, d.rowNode.childCount - 1)),
                h = (0, g.d)(d, c, !1);
            if (null == h) return null;
            let f = 1 === l ? h + 1 : h + d.rowNode.child(c).nodeSize - 1;
            return e.setSelection(u.h.near(e.doc.resolve(f), l)), r ? e.scrollIntoView() : e
        }

        function ee(e, t, n, o) {
            if (0 === t.rows.length) return !1;
            let l = Math.max(0, Math.min(n, t.rows.length - 1)),
                r = t.rows.item(l);
            if (!r || 0 === r.cells.length) return !1;
            let i = Math.max(0, Math.min(o, r.cells.length - 1)),
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

        function et(e, t, n, o) {
            let l = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1,
                r = [];
            for (let e of (0, g.f)(t.tableNode, t.tablePos)) {
                let t = (0, g.d)(e, Math.min(n, e.rowNode.childCount), !0);
                if (null == t) continue;
                let i = (0, g.a)(o, e.rowIndex);
                r.push(new d.i(t, t, new a.j(a.c.fromArray(Array.from({
                    length: l
                }, () => i)), 0, 0)))
            }
            return e.step(new w(r))
        }

        function en(e, t, n) {
            let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (!V(e)) return !1;
            let i = e.state.schema.nodes.table_cell;
            if (!i) return !0;
            let s = Math.max(0, n),
                a = et(e.state.tr, t, s, i, l);
            if (r) return e.dispatch(ei(a, e.state, t)), !0;
            let u = a.doc.nodeAt(t.tablePos);
            if (!u || u.type.name !== I) return e.dispatch(a.scrollIntoView()), !0;
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
            return e.dispatch((0, o.e)(h).scrollIntoView()), !0
        }

        function eo(e, t, n) {
            let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : l > 1,
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
                    length: l
                }, (e, n) => (0, g.b)(t.tableNode, d + n)),
                f = e.state.tr;
            if (0 === d && (0, g.i)(f, t.tablePos + 1, !1), f = f.insert(c, h), i) return e.dispatch(ei(f, e.state, t)), !0;
            let m = f.doc.nodeAt(t.tablePos);
            if (!m || m.type.name !== I) return e.dispatch(f.scrollIntoView()), !0;
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
            }), e.dispatch((r ? (0, o.e)(f) : f).scrollIntoView()), !0
        }

        function el(e, t, n) {
            let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (!V(e)) return !1;
            let i = (0, g.f)(t.tableNode, t.tablePos);
            if (i.length <= l) return !0;
            let s = Math.max(0, Math.min(n, i.length - 1)),
                u = i[s],
                d = i[Math.min(s + l - 1, i.length - 1)],
                c = u.rowPos,
                h = d.rowPos + d.rowNode.nodeSize,
                f = (0, g.h)(t.tableNode) ? e.state.tr.step(new b(c, h, a.j.empty, d.rowIndex - u.rowIndex + 1)) : e.state.tr.delete(c, h);
            if (0 === s && (0, g.i)(f, t.tablePos + 1, !0), r) return e.dispatch(ei(f, e.state, t)), !0;
            let m = f.doc.nodeAt(t.tablePos);
            if (!m || m.type.name !== I) return e.dispatch(f.scrollIntoView()), !0;
            let p = (0, g.f)(m, t.tablePos),
                w = Math.max(0, Math.min(s, p.length - 1)),
                v = Math.max(0, Math.min(t.columnIndex, p[w].rowNode.childCount - 1)),
                y = G(f, t.tablePos, w, v) ?? f;
            return l > 1 && y.setMeta(T, {
                structureSelectionAnchor: {
                    rowIndex: w,
                    columnIndex: v
                },
                structureSelectionHead: {
                    rowIndex: w,
                    columnIndex: v
                }
            }), e.dispatch((0, o.e)(y).scrollIntoView()), !0
        }

        function er(e, t, n) {
            let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : t => N(e, t),
                r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : P,
                i = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                s = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
            if (!V(e)) return !1;
            let u = (0, g.f)(t.tableNode, t.tablePos).filter(e => n < e.rowNode.childCount);
            if (0 === u.length || u.some(e => e.rowNode.childCount <= i) || u.some(e => e.rowNode.content.content.slice(n, n + i).some(e => e.textContent.trim().length > 0)) && !l(r)) return !0;
            let c = [];
            for (let e of u) {
                let t = (0, g.d)(e, n, !1),
                    o = (0, g.d)(e, n + i, !0);
                null != t && null != o && c.push(new d.i(t, o, a.j.empty))
            }
            let h = e.state.tr.step(new w(c));
            if (s) return e.dispatch(ei(h, e.state, t)), !0;
            let f = h.doc.nodeAt(t.tablePos);
            if (!f || f.type.name !== I) return e.dispatch(h.scrollIntoView()), !0;
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
            }), e.dispatch((0, o.e)(v).scrollIntoView()), !0
        }

        function ei(e, t, n) {
            let {
                selection: l
            } = t, r = !1, i = o => {
                let i = L(t, o),
                    s = (0, C.b)(o);
                if (i?.tablePos === n.tablePos && null != s && e.mapping.mapResult(o.before(s) + 1).deleted) {
                    r = !0;
                    let t = e.doc.nodeAt(n.tablePos);
                    if (null != t) {
                        let n = B({
                            ...i,
                            tableNode: t
                        }, z(i));
                        if (null != n) {
                            let t = e.doc.resolve(n.cellPos + Math.min(o.pos - o.before(s), n.cellNode.nodeSize - 1));
                            return l instanceof C.a ? t : u.h.near(t, t.pos === n.cellPos + n.cellNode.nodeSize - 1 ? -1 : 1).$head
                        }
                    }
                }
                return e.doc.resolve(e.mapping.map(o.pos))
            }, s = null, a = null;
            if (l instanceof C.a) {
                let n = i(t.doc.resolve(l.cellAnchor)),
                    o = i(t.doc.resolve(l.cellHead)),
                    r = L(t, n),
                    d = L(t, o),
                    c = u.h.near(o);
                null != r && null != d && c instanceof u.h ? (s = z(r), a = z(d), e.setSelection(new C.a(c, n.pos, o.pos))) : e.setSelection(l.map(e.doc, e.mapping))
            } else {
                e.setSelection(l instanceof u.h ? u.h.between(i(l.$anchor), i(l.$head)) : l.map(e.doc, e.mapping)), l instanceof u.h || (r = !e.selection.map(t.doc, e.mapping.invert()).eq(l));
                let n = L(t, e.selection.$head);
                s = a = null == n ? null : z(n)
            }
            let d = T.getState(t);
            return e.setMeta(T, null == d ? void 0 : {
                ...d,
                structureSelectionAnchor: s,
                structureSelectionHead: a
            }), (0, o.e)(e, {
                preserveSelection: !r
            })
        }

        function es(e, t, n) {
            let o = L(e.state);
            if (!o) return !1;
            let l = e => n?.mode === "structure" ? {
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
                r = (0, g.f)(o.tableNode, o.tablePos),
                i = r[o.rowIndex];
            if (!i) return !0;
            if ("previous" === t) {
                let t = o.rowIndex,
                    n = o.columnIndex - 1;
                if (n < 0) {
                    if ((t -= 1) < 0) return !0;
                    n = Math.max(0, r[t].rowNode.childCount - 1)
                }
                let i = {
                        rowIndex: t,
                        columnIndex: n
                    },
                    s = G(e.state.tr, o.tablePos, t, n) ?? e.state.tr,
                    a = l(i);
                return a && (s = s.setMeta(T, a)), e.dispatch(s.scrollIntoView()), !0
            }
            let s = o.rowIndex,
                a = o.columnIndex + 1;
            if (a >= i.rowNode.childCount && (s += 1, a = 0), s >= r.length) {
                let t = {
                    rowIndex: r.length,
                    columnIndex: 0
                };
                return function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        o = arguments.length > 3 ? arguments[3] : void 0;
                    if (!V(e)) return !1;
                    let l = e.state.schema.nodes.table_row,
                        r = e.state.schema.nodes.table_cell;
                    if (!l || !r) return !0;
                    let i = (0, g.e)(t.tableNode);
                    if (i <= 0) return !0;
                    let s = t.tableNode.childCount,
                        a = e.state.tr.insert(t.tablePos + t.tableNode.nodeSize - 1, (0, g.b)(t.tableNode, s)),
                        u = Math.max(0, Math.min(n, i - 1)),
                        d = G(a, t.tablePos, s, u) ?? a,
                        c = null == o ? d : d.setMeta(T, o);
                    return e.dispatch(c), !0
                }(e, o, t.columnIndex, l(t))
            }
            let u = {
                    rowIndex: s,
                    columnIndex: a
                },
                d = G(e.state.tr, o.tablePos, s, a) ?? e.state.tr,
                c = l(u);
            return c && (d = d.setMeta(T, c)), e.dispatch(d.scrollIntoView()), !0
        }

        function ea(e, t, n) {
            let o = L(e.state);
            if (!o) return !1;
            let l = o.rowIndex + ("previous" === t ? -1 : 1);
            if (l < 0 || l >= o.tableNode.childCount) return n?.consumeIfNoAdjacentRow ?? !0;
            let r = n?.preferredClientX,
                i = G(e.state.tr, o.tablePos, l, o.columnIndex, {
                    bias: null != r && "previous" === t ? -1 : 1
                });
            return null != i && (null != r && i.selection instanceof u.h && i.setSelection((0, M.g)(e, i.selection, r)), e.dispatch(i), !0)
        }

        function eu(e, t) {
            if (!V(e)) return !1;
            let n = L(e.state);
            if (!n) return !1;
            let l = e.state.schema.nodes.table_cell;
            if (!l) return !0;
            let r = "left" === t ? n.columnIndex : n.columnIndex + 1,
                i = et(e.state.tr, n, r, l),
                s = G(i, n.tablePos, n.rowIndex, r) ?? i;
            return e.dispatch((0, o.e)(s)), !0
        }

        function ed(e, t) {
            if (!V(e)) return !1;
            let n = L(e.state);
            return !!n && (ec(e, n, "column", n.columnIndex + ("left" === t ? -1 : 1)), !0)
        }

        function ec(e, t, n, l, r) {
            let {
                allowHeaderRowMove: i = !1,
                scrollIntoView: s
            } = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {}, a = "row" === n ? t.tableNode.childCount : (0, g.e)(t.tableNode), d = r?.from ?? ("row" === n ? t.rowIndex : t.columnIndex), c = null == r ? 1 : r.to - r.from + 1;
            if (!Number.isInteger(l) || l < 0 || l + c > a || l === d || "row" === n && !i && (0 === d || 0 === l) || !(0, g.h)(t.tableNode)) return !1;
            let h = (0, g.f)(t.tableNode, t.tablePos),
                f = e.state.tr;
            if ("row" === n) {
                let e = h[d],
                    n = h[d + c - 1],
                    o = l > d ? l + c : l,
                    r = h[o]?.rowPos ?? t.tablePos + t.tableNode.nodeSize - 1;
                if (f.step(new x.a(e.rowPos, n.rowPos + n.rowNode.nodeSize, r)), 0 === d || 0 === l)
                    for (let e of (0, g.f)(f.doc.nodeAt(t.tablePos), t.tablePos))(0, g.i)(f, e.rowPos, 0 === e.rowIndex)
            } else
                for (let e = h.length - 1; e >= 0; e -= 1) {
                    let t = h[e],
                        n = (0, g.d)(t, d, !1),
                        o = (0, g.d)(t, d + c, !0),
                        r = (0, g.d)(t, l > d ? l + c : l, !0);
                    if (null == n || null == o || null == r) return !1;
                    f.step(new x.a(n, o, r))
                }
            let m = e.state.selection,
                p = O(e.state),
                w = null == r ? null : eI(e.state),
                b = "row" === n ? "rowIndex" : "columnIndex";
            if (null != w && p?.context.tablePos === t.tablePos && [w.anchor, w.head].every(e => e[b] >= d && e[b] < d + c)) {
                let n = {
                        ...w.anchor,
                        [b]: w.anchor[b] + l - d
                    },
                    r = {
                        ...w.head,
                        [b]: w.head[b] + l - d
                    };
                return G(f, t.tablePos, r.rowIndex, r.columnIndex, {
                    scrollIntoView: s
                }), e.dispatch((0, o.e)(f.setMeta(T, {
                    structureSelectionAnchor: n,
                    structureSelectionHead: r
                }))), !0
            }
            let v = (0, C.b)(m.$from),
                y = (0, C.b)(m.$to),
                M = m instanceof u.h && null != v && null != y && m.$from.before(v) === m.$to.before(y) && p?.context.tablePos === t.tablePos && p.context[b] >= d && p.context[b] < d + c,
                I = M && null != p ? p.context : t,
                S = "row" === n ? I.rowIndex + l - d : I.rowIndex,
                P = "column" === n ? I.columnIndex + l - d : I.columnIndex,
                E = G(f, t.tablePos, S, P, {
                    scrollIntoView: s
                }) ?? f;
            if (M && null != p) {
                let e = (0, C.b)(E.selection.$anchor);
                if (null != e) {
                    let t = E.selection.$anchor.before(e);
                    E.setSelection(u.h.create(E.doc, t + m.anchor - p.cellPos, t + m.head - p.cellPos))
                }
            }
            return e.dispatch((0, o.e)(E.setMeta(T, {
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
            let o = L(e.state);
            return !!o && er(e, o, o.columnIndex, t, n)
        }

        function ef(e, t) {
            return eu(e, t)
        }

        function em(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t => N(e, t);
            return eh(e, t)
        }

        function ep(e, t) {
            var n, o;
            let {
                cellPosition: l,
                scope: r,
                action: i,
                confirmDeleteColumn: s,
                deleteColumnConfirmation: a,
                axisRange: u
            } = t;
            if (e.isDestroyed || !V(e)) return !1;
            let d = (n = e.state, (o = l) >= 0 && o < n.doc.content.size && n.doc.nodeAt(o)?.type.name === S ? L(n, n.doc.resolve(o + 1)) : null);
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
            return "move" === t.action ? ec(e, d, r, t.destination, u, t) : "move-before" === t.action || "move-after" === t.action ? ec(e, d, r, h + ("move-before" === i ? -1 : 1), u, t) : "row" === r ? "delete" === i ? el(e, d, h, p, b) : eo(e, d, "insert-after" === i ? f + 1 : h, p, w, b) : "delete" === i ? er(e, d, h, s, a, p, b) : en(e, d, "insert-after" === i ? f + 1 : h, p, b)
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
            constructor(e, t, n, o, l, r) {
                this.labels = t, this.floatingUiClassName = n, this.floatingUiStyle = o, this.confirmDeleteColumn = l, this.getFloatingUiContainer = r, this.view = e;
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
                let o = n.dataset.writingBlockTableGrabMenuAction;
                o && this.applyMenuAction(o)
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
                    let o = n.parentElement;
                    if (!this.isOwnerHTMLTableRowElement(o)) return;
                    this.hoveredTable = t, this.hoveredRowIndex = o.rowIndex, this.hoveredColumnIndex = n.cellIndex;
                    let l = this.resolveHandleVisibilityMode(t, e);
                    return "none" === l && null == this.menuTarget ? void this.setHandleVisibility("none") : void this.showHandles(l)
                }
                let o = this.resolveHandleActivationContext(e);
                if (o) {
                    this.hoveredTable = o.table, this.hoveredRowIndex = o.rowIndex, this.hoveredColumnIndex = o.columnIndex, this.showHandles(o.visibilityMode);
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
                let o = t.clientX - n.left,
                    l = t.clientY - n.top,
                    r = o >= -22 && o <= 22,
                    i = l >= -22 && l <= 22;
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
                let o = e.getBoundingClientRect();
                if (o.width < 1 || o.height < 1) return null;
                let l = this.getRowHandleLaneRectForTable(o),
                    r = this.getColumnHandleLaneRectForTable(o),
                    i = t >= l.left - 22 && t <= l.right + 22 && n >= o.top - 22 && n <= o.bottom + 22,
                    s = n >= r.top - 22 && n <= r.bottom + 22 && t >= o.left - 22 && t <= o.right + 22;
                if (!i && !s) return null;
                let a = this.resolveClosestRowIndex(e, n) ?? 0,
                    u = this.resolveClosestColumnIndex(e, t) ?? 0;
                return {
                    table: e,
                    rowIndex: a,
                    columnIndex: u,
                    visibilityMode: i && s ? this.resolveNearestHandleModeFromTableRect(o, t, n) : i ? "row" : "column"
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
                    o = 1 / 0;
                for (let l = 0; l < e.rows.length; l += 1) {
                    let r = e.rows.item(l);
                    if (!this.isOwnerHTMLTableRowElement(r)) continue;
                    let i = r.getBoundingClientRect();
                    if (t >= i.top && t <= i.bottom) return l;
                    let s = t < i.top ? i.top - t : t - i.bottom;
                    s < o && (o = s, n = l)
                }
                return n
            }
            resolveClosestColumnIndex(e, t) {
                let n = Math.max(0, ...Array.from(e.rows).map(e => e.cells.length));
                if (n <= 0) return null;
                let o = 0,
                    l = 1 / 0;
                for (let r = 0; r < n; r += 1) {
                    let n = this.getColumnRect(e, r);
                    if (t >= n.left && t <= n.right) return r;
                    let i = t < n.left ? n.left - t : t - n.right;
                    i < l && (l = i, o = r)
                }
                return o
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
                    o = n.width / t.offsetWidth || 1,
                    l = n.height / t.offsetHeight || 1;
                return {
                    left: (e.left - n.left) / o - t.clientLeft + t.scrollLeft,
                    top: (e.top - n.top) / l - t.clientTop + t.scrollTop,
                    width: e.width / o,
                    height: e.height / l
                }
            }
            updateControlPositions() {
                if (this.updateFloatingUiContainer(), !this.hoveredTable || null == this.hoveredRowIndex || null == this.hoveredColumnIndex) return;
                let e = this.hoveredTable.rows.item(this.hoveredRowIndex),
                    t = this.getFloatingUiRect(e?.getBoundingClientRect() ?? this.hoveredTable.getBoundingClientRect()),
                    n = this.getFloatingUiRect(this.getColumnRect(this.hoveredTable, this.hoveredColumnIndex)),
                    o = Math.max(t.height, 1),
                    l = Math.max(n.width, 1);
                this.rowHandle.style.left = `${t.left-6-18}px`, this.rowHandle.style.top = `${t.top}px`, this.rowHandle.style.width = "18px", this.rowHandle.style.height = `${o}px`, this.columnHandle.style.left = `${n.left}px`, this.columnHandle.style.top = `${n.top-6-18+10}px`, this.columnHandle.style.width = `${l}px`, this.columnHandle.style.height = "18px", this.updateMenuPosition()
            }
            getColumnRect(e, t) {
                let n = [];
                for (let o of Array.from(e.rows)) {
                    let e = o.cells.item(t);
                    this.isOwnerHTMLTableCellElement(e) && n.push(e)
                }
                if (0 === n.length) return e.getBoundingClientRect();
                let o = n[0].getBoundingClientRect(),
                    l = o.left,
                    r = o.right,
                    i = o.top,
                    s = o.bottom;
                for (let e = 1; e < n.length; e += 1) {
                    let t = n[e].getBoundingClientRect();
                    l = Math.min(l, t.left), r = Math.max(r, t.right), i = Math.min(i, t.top), s = Math.max(s, t.bottom)
                }
                return {
                    x: l,
                    y: i,
                    left: l,
                    right: r,
                    top: i,
                    bottom: s,
                    width: Math.max(1, r - l),
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
                    let [t, n] = e, o = this.view.dom.ownerDocument.createElement("button");
                    return o.type = "button", o.className = "writing-block-table-grab-menu-item", o.setAttribute("data-writing-block-table-grab-menu-action", t), o.textContent = n, o
                });
                this.menu.replaceChildren(...e)
            }
            updateMenuPosition() {
                if (!this.menuTarget) return;
                let e = "row" === this.menuTarget.type ? this.rowHandle : this.columnHandle,
                    t = this.getFloatingUiRect(e.getBoundingClientRect()),
                    n = t.left + t.width / 2,
                    o = t.top + t.height + 6,
                    l = this.menu.parentElement;
                if (null != l && l !== this.view.dom.ownerDocument.body) {
                    let e = this.menu.offsetWidth / 2;
                    n = Math.max(e, Math.min(n, l.clientWidth - e)), o + this.menu.offsetHeight > l.clientHeight && (o = t.top - this.menu.offsetHeight - 6), o = Math.max(0, o)
                }
                this.menu.style.left = `${n}px`, this.menu.style.top = `${o}px`
            }
            applyMenuAction(e) {
                if (!this.isEditable()) return void this.resetForReadOnlyMode();
                let t = this.hoveredTable;
                if (!t || !t.isConnected || 0 === t.rows.length) return;
                let n = t.rows.length,
                    o = Math.max(1, ...Array.from(t.rows).map(e => e.cells.length)),
                    l = !1;
                switch (e) {
                    case "row-add-above": {
                        let e = this.hoveredRowIndex ?? 0;
                        if (!ee(this.view, t, e, 0)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        l = eo(this.view, n, e);
                        break
                    }
                    case "row-add-below": {
                        let e = this.hoveredRowIndex ?? n - 1;
                        if (!ee(this.view, t, e, 0)) return;
                        let o = L(this.view.state);
                        if (!o) return;
                        l = eo(this.view, o, e + 1);
                        break
                    }
                    case "row-delete": {
                        let e = this.hoveredRowIndex ?? 0;
                        if (!ee(this.view, t, e, 0)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        l = el(this.view, n, e);
                        break
                    }
                    case "column-add-left": {
                        let e = this.hoveredColumnIndex ?? 0;
                        if (!ee(this.view, t, 0, e)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        l = en(this.view, n, e);
                        break
                    }
                    case "column-add-right": {
                        let e = this.hoveredColumnIndex ?? o - 1;
                        if (!ee(this.view, t, 0, e)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        l = en(this.view, n, e + 1);
                        break
                    }
                    case "column-delete": {
                        let e = this.hoveredColumnIndex ?? 0;
                        if (!ee(this.view, t, 0, e)) return;
                        let n = L(this.view.state);
                        if (!n) return;
                        l = er(this.view, n, e, this.confirmDeleteColumn, this.labels.deleteColumnConfirmation);
                        break
                    }
                    default:
                        return
                }
                l && (this.syncHoveredTableFromSelection(), this.showHandles(), this.closeMenu(), this.view.focus())
            }
        }

        function ew(e, t, n) {
            let o = T.getState(e.state),
                l = $(e.state, o);
            if (!l) return !1;
            let r = (0, g.f)(l.context.tableNode, l.context.tablePos),
                i = n?.extendSelection ? l.head : l.anchor,
                s = r[i.rowIndex];
            if (!s) return !0;
            let a = Math.max(0, Math.min(i.columnIndex + ("previous" === t ? -1 : 1), s.rowNode.childCount - 1));
            if (a === i.columnIndex) return !0;
            let u = {
                    rowIndex: i.rowIndex,
                    columnIndex: a
                },
                d = G(e.state.tr, l.context.tablePos, u.rowIndex, u.columnIndex) ?? e.state.tr,
                c = n?.forceStructureMode ?? !0;
            return d = d.setMeta(T, {
                isStructureMode: c,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: n?.extendSelection ? l.anchor : u,
                structureSelectionHead: u
            }), e.dispatch(d), !0
        }

        function eb(e, t, n) {
            let o = T.getState(e.state),
                l = $(e.state, o);
            if (!l) return !1;
            let r = (0, g.f)(l.context.tableNode, l.context.tablePos),
                i = n?.extendSelection ? l.head : l.anchor,
                s = "previous" === t ? i.rowIndex - 1 : i.rowIndex + 1;
            if (s < 0 || s >= r.length) return !0;
            let a = r[s],
                u = {
                    rowIndex: s,
                    columnIndex: Math.max(0, Math.min(i.columnIndex, a.rowNode.childCount - 1))
                },
                d = G(e.state.tr, l.context.tablePos, u.rowIndex, u.columnIndex) ?? e.state.tr,
                c = n?.forceStructureMode ?? !0;
            return d = d.setMeta(T, {
                isStructureMode: c,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: n?.extendSelection ? l.anchor : u,
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
                o = t[1];
            if (!n.includes("|") || !o.includes("|")) return !1;
            let l = ev(n),
                r = ev(o);
            return !(l.length < 2) && !(r.length < 2) && l.length === r.length && r.every(e => k.test(e))
        }

        function eM(e, t, n) {
            if (!V(e)) return !1;
            let o = K(e.state, t, n);
            if (!o) return !1;
            let l = e.state.tr.replaceSelectionWith(o, !1),
                r = function(e, t) {
                    let {
                        $from: n
                    } = e.selection;
                    if (n.nodeBefore === t) return n.pos - n.nodeBefore.nodeSize;
                    if (n.nodeAfter === t) return n.pos;
                    let o = Math.max(0, e.selection.from - t.nodeSize - 2),
                        l = Math.min(e.doc.content.size, e.selection.to + t.nodeSize + 2),
                        r = null;
                    return e.doc.nodesBetween(o, l, (e, n) => e !== t || (r = n, !1)), r
                }(l, o);
            return null != r && (l = G(l, r, 0, 0) ?? l), e.dispatch(l.scrollIntoView()), !0
        }

        function ex(e, t, n) {
            let o = L(e, e.doc.resolve(t)),
                l = L(e, e.doc.resolve(n));
            if (null == o || l?.tablePos !== o.tablePos) return null;
            let r = B(o, z(o)),
                i = B(l, z(l));
            if (null == r || null == i) return null;
            let s = u.h.near(e.doc.resolve(i.cellPos + 1));
            return e.tr.setSelection(s instanceof u.h ? new C.a(s, r.cellPos + 1, i.cellPos + 1) : s).setMeta(T, {
                isStructureMode: !0,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: z(o),
                structureSelectionHead: z(l)
            })
        }

        function eC(e) {
            let t = T.getState(e);
            if (t?.isStructureMode) {
                let n = _(e, t);
                if (null == n) return null;
                let o = e.tr;
                for (let {
                        cellPos: e,
                        cellNode: t
                    }
                    of n.cells) o.replaceWith(o.mapping.map(e + 1), o.mapping.map(e + t.nodeSize - 1), (0, g.c)(t.type));
                return o
            }
            let {
                selection: n,
                doc: o
            } = e;
            if (!(n instanceof u.h) || n.empty) return null;
            let l = L(e, n.$from),
                r = L(e, n.$to);
            if (null == l || r?.tablePos !== l.tablePos || l.rowIndex === r.rowIndex && l.columnIndex === r.columnIndex) return null;
            let i = e.tr;
            return o.nodesBetween(n.from, n.to, (e, t) => {
                if (!e.isTextblock) return !0;
                let o = Math.max(n.from, t + 1),
                    l = Math.min(n.to, t + e.nodeSize - 1);
                return o < l && i.delete(i.mapping.map(o), i.mapping.map(l)), !1
            }), i.setSelection(u.h.near(i.doc.resolve(i.mapping.map(n.from))))
        }

        function eI(e) {
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
            let n = _(e, t);
            if (null == n || 0 === n.cells.length) return null;
            let o = Math.min(n.anchor.rowIndex, n.head.rowIndex),
                l = [],
                r = [];
            for (let {
                    cellNode: e,
                    rowIndex: t
                }
                of n.cells) {
                let n = t - o;
                l[n] ??= [], r[n] ??= [], l[n].push(e.type.create({
                    ...e.attrs,
                    rowIndex: +(0 !== n),
                    columnIndex: null
                }, e.content));
                let i = e.textBetween(0, e.content.size, "\n", e => "hard_break" === e.type.name ? "\n" : e.type.spec.leafText?.(e) ?? "");
                r[n].push(/[\t\n"]/.test(i) ? `"${i.replace(/"/g,'""')}"` : i)
            }
            return {
                content: {
                    slice: new a.j(a.c.from(e.schema.nodes.table.create(null, l.map((t, l) => e.schema.nodes.table_row.create(n.context.tableNode.child(o + l).attrs, t)))), 0, 0),
                    insertion: "blocks"
                },
                text: r.map(e => e.join("	")).join("\n")
            }
        }

        function eP(e, t) {
            let n = L(e, e.selection.$from),
                o = L(e, e.selection.$to);
            if (null == n || o?.tablePos !== n.tablePos || 0 === t.length) return null;
            let l = T.getState(e),
                r = l?.isStructureMode ? $(e, l) : null,
                i = null == r ? Math.min(n.rowIndex, o.rowIndex) : Math.min(r.anchor.rowIndex, r.head.rowIndex),
                s = null == r ? Math.min(n.columnIndex, o.columnIndex) : Math.min(r.anchor.columnIndex, r.head.columnIndex),
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
            for (let o = d.length; o < h; o += 1) {
                let l = [];
                for (let e = 0; e < c; e += 1) l.push(u.create({
                    rowIndex: 1,
                    align: n.tableNode.firstChild?.maybeChild(e)?.attrs.align ?? null
                }, t[o - i]?.[e - s] ?? (0, g.c)(u)));
                p.push(e.schema.nodes.table_row.create(null, l))
            }
            p.length > 0 && f.insert(n.tablePos + n.tableNode.nodeSize - 1, p);
            for (let e = d.length - 1; e >= 0; e -= 1) {
                let {
                    rowNode: n,
                    rowPos: o,
                    rowIndex: l
                } = d[e], r = t[l - i], a = o + n.nodeSize - 1, h = [];
                for (let e = n.childCount; e < c; e += 1) h.push(u.create({
                    rowIndex: +(0 !== l)
                }, r?.[e - s] ?? (0, g.c)(u)));
                h.length > 0 && f.insert(a, h);
                for (let e = n.childCount - 1; e >= 0; e -= 1) {
                    let t = n.child(e);
                    a -= t.nodeSize;
                    let o = r?.[e - s];
                    null != o && f.replaceWith(a + 1, a + t.nodeSize - 1, o)
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
                onDeleteEmptyTableSelection: p,
                onTabFromLastCell: w,
                handleVerticalExit: b,
                floatingUiClassName: v,
                floatingUiStyle: y,
                getFloatingUiContainer: x,
                isGutterControlsEnabled: S = !0,
                isMac: P = (0, l.c)(),
                isTableModeEnabled: H,
                labels: k
            } = e, R = () => H?.() ?? !0, D = {
                ...E,
                ...k
            }, K = () => ({
                isStructureMode: !1,
                isEditMode: !1,
                allowCellNavigationInEditMode: !1,
                structureSelectionAnchor: null,
                structureSelectionHead: null
            });
            return new u.d({
                key: T,
                state: {
                    init: () => K(),
                    apply(e, t, n, o) {
                        if (!R()) return K();
                        let l = null != L(o),
                            r = null != L(n),
                            i = e.selectionSet && !0 === e.getMeta("pointer"),
                            s = e.getMeta(T);
                        if (s && ("boolean" == typeof s.isStructureMode || "boolean" == typeof s.isEditMode || "boolean" == typeof s.allowCellNavigationInEditMode || Object.prototype.hasOwnProperty.call(s, "structureSelectionAnchor") || Object.prototype.hasOwnProperty.call(s, "structureSelectionHead"))) {
                            if (!l) return {
                                isStructureMode: !1,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: null,
                                structureSelectionHead: null
                            };
                            let e = "boolean" == typeof s.isEditMode ? s.isEditMode : t.isEditMode,
                                n = "boolean" == typeof s.isStructureMode ? s.isStructureMode : t.isStructureMode,
                                o = "boolean" == typeof s.allowCellNavigationInEditMode ? s.allowCellNavigationInEditMode : t.allowCellNavigationInEditMode,
                                r = Object.prototype.hasOwnProperty.call(s, "structureSelectionAnchor") ? s.structureSelectionAnchor ?? null : t.structureSelectionAnchor,
                                i = Object.prototype.hasOwnProperty.call(s, "structureSelectionHead") ? s.structureSelectionHead ?? null : t.structureSelectionHead;
                            return e ? {
                                isStructureMode: !1,
                                isEditMode: !0,
                                allowCellNavigationInEditMode: o,
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
                        if (o.selection instanceof C.a && (e.selectionSet || e.docChanged)) {
                            let e = L(o, o.doc.resolve(o.selection.cellAnchor)),
                                t = L(o, o.doc.resolve(o.selection.cellHead));
                            return null != e && t?.tablePos === e.tablePos && L(o)?.tablePos === e.tablePos ? {
                                isStructureMode: !0,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: z(e),
                                structureSelectionHead: z(t)
                            } : K()
                        }
                        if (l && i) {
                            let e = L(o),
                                t = e ? z(e) : null;
                            return {
                                isStructureMode: !d,
                                isEditMode: d,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: t,
                                structureSelectionHead: t
                            }
                        }
                        if (l && !r && !t.isEditMode) {
                            let e = L(o),
                                t = e ? z(e) : null;
                            return {
                                isStructureMode: !d,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1,
                                structureSelectionAnchor: t,
                                structureSelectionHead: t
                            }
                        }
                        if (!l) return {
                            isStructureMode: !1,
                            isEditMode: !1,
                            allowCellNavigationInEditMode: !1,
                            structureSelectionAnchor: null,
                            structureSelectionHead: null
                        };
                        if (e.selectionSet && (e.docChanged || !t.isStructureMode) || (t.isStructureMode || t.isEditMode) && (null == t.structureSelectionAnchor || null == t.structureSelectionHead)) {
                            let e = L(o),
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
                        selection: o
                    } = n;
                    if (!(o instanceof u.h)) return null;
                    let l = T.getState(n),
                        r = l?.isStructureMode ? $(n, l) : null;
                    if (null != r) {
                        let e = B(r.context, r.anchor),
                            t = B(r.context, r.head);
                        if (null != e && null != t) return o instanceof C.a && o.cellAnchor === e.cellPos + 1 && o.cellHead === t.cellPos + 1 ? null : n.tr.setSelection(new C.a(o, e.cellPos + 1, t.cellPos + 1))
                    }
                    return o instanceof C.a ? n.tr.setSelection(new u.h(o.$anchor, o.$head)) : null
                },
                props: {
                    createSelectionBetween: M.f,
                    handleDOMEvents: {
                        pointerdown: M.e,
                        blur: M.e,
                        keydown: (e, t) => (("ArrowUp" !== t.key && "ArrowDown" !== t.key || t.shiftKey || t.altKey || t.ctrlKey || t.metaKey) && (0, M.e)(e), !1),
                        mousedown(e, t) {
                            if (!d || !R() || !V(e) || 0 !== t.button || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey) return !1;
                            let n = A(e)?.Element,
                                o = n && t.target instanceof n ? t.target.closest("td, th") : null;
                            if (null == o || !e.dom.contains(o)) return !1;
                            let l = T.getState(e.state);
                            if (l?.isEditMode && !l.allowCellNavigationInEditMode) return !1;
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
                        if (!R()) return null;
                        let t = T.getState(e) ?? null;
                        if (!t?.isStructureMode && !t?.isEditMode) return null;
                        let n = _(e, t);
                        if (!n) return null;
                        let o = B(n.context, n.anchor);
                        if (!o) return null;
                        let l = [];
                        for (let e of (t.isStructureMode && l.push(c.a.node(n.context.tablePos, n.context.tablePos + n.context.tableNode.nodeSize, {
                                class: "writing-block-table-structure-mode"
                            })), n.cells)) l.push(c.a.node(e.cellPos, e.cellPos + e.cellNode.nodeSize, {
                            class: "writing-block-table-structure-selected-cell"
                        }));
                        return l.push(c.a.node(o.cellPos, o.cellPos + o.cellNode.nodeSize, {
                            class: "writing-block-table-structure-active-cell"
                        })), t.isEditMode && l.push(c.a.node(o.cellPos, o.cellPos + o.cellNode.nodeSize, {
                            class: "writing-block-table-structure-edit-active-cell"
                        })), c.b.create(e.doc, l)
                    },
                    handleKeyDown(e, t) {
                        if ("string" != typeof t.key || t.defaultPrevented || t.isComposing || 229 === t.keyCode || !R() || !V(e)) return !1;
                        let o = f.e.getState(e.state);
                        if ((0, f.d)(o)) return !1;
                        let l = h.i.getState(e.state);
                        if (l?.input || l?.suggestion) return !1;
                        let s = T.getState(e.state),
                            a = s?.isStructureMode ?? !1,
                            c = s?.isEditMode ?? !1,
                            m = s?.allowCellNavigationInEditMode ?? !1;
                        if (d && c && !t.shiftKey && !t.altKey && ("Backspace" === t.key || "Delete" === t.key) && !e.state.selection.empty) {
                            let n = eC(e.state);
                            if (null != n) return e.dispatch(n.scrollIntoView()), t.preventDefault(), t.stopPropagation(), !0
                        }
                        let v = t.key.toLowerCase(),
                            y = t.ctrlKey && "p" === v,
                            x = t.ctrlKey && "n" === v,
                            I = "ArrowUp" === t.key ? "up" : "ArrowDown" === t.key ? "down" : "ArrowLeft" === t.key ? "left" : "ArrowRight" === t.key ? "right" : null;
                        if ("Escape" === t.key) {
                            if (c) return e.dispatch(e.state.tr.setMeta(T, {
                                isStructureMode: !0,
                                isEditMode: !1,
                                allowCellNavigationInEditMode: !1
                            })), t.preventDefault(), t.stopPropagation(), !0;
                            if (a) {
                                let n = L(e.state);
                                return n && q(e, n) ? (t.preventDefault(), t.stopPropagation(), !0) : (e.dispatch(e.state.tr.setMeta(T, {
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
                        if (d && !a && !m && null != I && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey) {
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
                                selection: o
                            } = e.state;
                            if (!o.empty) return !1;
                            if ("up" === I || "down" === I) return (0, M.d)(e, I, b);
                            let l = L(e.state);
                            if ("ArrowLeft" === t.key && l?.rowIndex === 0 && 0 === l.columnIndex && J(e, "left")) return U(e, l), t.preventDefault(), t.stopPropagation(), !0;
                            if (null != l && (0, M.b)(e, "ArrowLeft" === t.key ? "left" : "right") || null == l && (0, M.a)(e, "ArrowLeft" === t.key ? "left" : "right")) return t.preventDefault(), t.stopPropagation(), !0
                        }
                        if ("ArrowRight" === t.key && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && Q(e.state)) {
                            let n, o = (n = L(e.state)) && j(n) ? n : null;
                            if (o && (a || c && m || J(e, "right"))) return W(e, o), t.preventDefault(), t.stopPropagation(), !0
                        }
                        if (a) {
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && ("Backspace" === t.key || "Delete" === t.key)) {
                                let n = function(e, t, n) {
                                    if (!V(e)) return !1;
                                    let o = _(e.state, t);
                                    if (!o || 0 === o.cells.length) return !1;
                                    if (null != n && e.state.selection instanceof C.a) {
                                        let {
                                            rows: t,
                                            columns: l,
                                            cells: r,
                                            context: {
                                                tableNode: i
                                            }
                                        } = o, s = 0 === t.from && t.to === i.childCount - 1, a = 0 === l.from && l.to === (0, g.e)(i) - 1;
                                        if ((s || a) && (s && a || (0, g.h)(i)) && r.every(e => {
                                                let {
                                                    cellNode: t
                                                } = e;
                                                return t.content.eq((0, g.c)(t.type))
                                            })) return n(e, {
                                            cellPosition: r[0].cellPos,
                                            scope: a ? "row" : "column",
                                            axisRange: a ? t : l,
                                            action: "delete"
                                        }), !0
                                    }
                                    let l = e.state.tr;
                                    for (let e of [...o.cells].sort((e, t) => t.cellPos - e.cellPos)) {
                                        let t = (0, g.c)(e.cellNode.type);
                                        if (e.cellNode.content.eq(t)) continue;
                                        let n = Math.min(e.cellPos + 1, l.doc.content.size),
                                            o = Math.max(n, Math.min(e.cellPos + e.cellNode.nodeSize - 1, l.doc.content.size));
                                        l = l.replaceWith(n, o, t)
                                    }
                                    return !l.docChanged || (l = G(l, o.context.tablePos, o.anchor.rowIndex, o.anchor.columnIndex) ?? l, e.dispatch(l.setMeta(T, {
                                        isStructureMode: !0,
                                        isEditMode: !1,
                                        allowCellNavigationInEditMode: !1,
                                        structureSelectionAnchor: o.anchor,
                                        structureSelectionHead: o.head
                                    })), !0)
                                }(e, s, "Backspace" !== t.key || t.repeat ? void 0 : p);
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && 1 === t.key.length) {
                                let n = function(e, t, n) {
                                    if (!V(e)) return !1;
                                    let o = function(e, t) {
                                        let n = $(e, t);
                                        if (!n) return null;
                                        let o = B(n.context, n.anchor);
                                        return o ? {
                                            anchor: n.anchor,
                                            cellPos: o.cellPos,
                                            cellNode: o.cellNode
                                        } : null
                                    }(e.state, n);
                                    if (!o) return !1;
                                    let {
                                        cellPos: l,
                                        cellNode: r,
                                        anchor: i
                                    } = o, s = Math.min(l + 1, e.state.doc.content.size), a = Math.max(s, Math.min(l + r.nodeSize - 1, e.state.doc.content.size)), d = e.state.schema.text(t), c = r.inlineContent ? d : e.state.schema.nodes.paragraph.create(null, d), h = e.state.tr.replaceWith(s, a, c);
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
                                    o = O(e.state);
                                if (o) {
                                    let e = Math.max(Math.min(o.cellPos + 1, n.doc.content.size), Math.min(o.cellPos + o.cellNode.nodeSize - 1, n.doc.content.size));
                                    n = n.setSelection(u.h.near(n.doc.resolve(e), -1))
                                }
                                let l = L(e.state, n.selection.$head),
                                    r = l ? z(l) : null;
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
                                    let o = (0, g.f)(n.tableNode, n.tablePos);
                                    if (n.rowIndex >= o.length - 1) return W(e, n), t.preventDefault(), t.stopPropagation(), !0
                                }
                                let o = eb(e, "next");
                                return o && (t.preventDefault(), t.stopPropagation()), o
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowUp" === t.key) {
                                let n = L(e.state);
                                if (n && 0 === n.rowIndex) {
                                    let o = U(e, n);
                                    return o && (t.preventDefault(), t.stopPropagation()), o
                                }
                                let o = eb(e, "previous");
                                return o && (t.preventDefault(), t.stopPropagation()), o
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowRight" === t.key) {
                                let n = ew(e, "next");
                                return n && (t.preventDefault(), t.stopPropagation()), n
                            }
                            if (!t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey && "ArrowLeft" === t.key) {
                                let n = L(e.state);
                                if (n && 0 === n.rowIndex && 0 === n.columnIndex) {
                                    let o = U(e, n);
                                    return o && (t.preventDefault(), t.stopPropagation()), o
                                }
                                let o = ew(e, "previous");
                                return o && (t.preventDefault(), t.stopPropagation()), o
                            }
                        }
                        if (c && !t.metaKey && !t.altKey && !t.shiftKey && (y || x)) {
                            if (m) {
                                let n = eb(e, y ? "previous" : "next");
                                return n && (X(e), t.preventDefault(), t.stopPropagation()), n
                            }
                            let n = function(e, t) {
                                let n = O(e.state);
                                if (!n) return !1;
                                let {
                                    cellPos: o,
                                    cellNode: l
                                } = n, r = Math.min(o + 1, e.state.doc.content.size), i = Math.max(r, Math.min(o + l.nodeSize - 1, e.state.doc.content.size));
                                return e.dispatch(e.state.tr.setSelection(u.h.near(e.state.doc.resolve("start" === t ? r : i), "start" === t ? 1 : -1)).scrollIntoView()), !0
                            }(e, y ? "start" : "end");
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
                        if (c && null != I && !t.metaKey && !t.ctrlKey && !t.altKey && Q(e.state) && J(e, I)) return t.preventDefault(), t.stopPropagation(), !0;
                        if (!a && !c && e.state.selection.empty && Q(e.state) && !t.metaKey && !t.altKey && !t.shiftKey) {
                            let n = !t.ctrlKey && "ArrowUp" === t.key,
                                o = !t.ctrlKey && "ArrowDown" === t.key;
                            if (n || o || y || x) {
                                let o;
                                if (!J(e, n || y ? "up" : "down")) return !1;
                                try {
                                    o = e.coordsAtPos(e.state.selection.from).left
                                } catch {
                                    o = void 0
                                }
                                let l = ea(e, n || y ? "previous" : "next", {
                                    consumeIfNoAdjacentRow: !1,
                                    preferredClientX: o
                                });
                                return l && (t.preventDefault(), t.stopPropagation()), l
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
                                    if (null != w) return w(e, n.cellPos), t.preventDefault(), t.stopPropagation(), !0;
                                    if (!e.state.schema.nodes.table_cell.inlineContent) return t.preventDefault(), t.stopPropagation(), !0;
                                    let o = q(e, n.context);
                                    return o && (t.preventDefault(), t.stopPropagation()), o
                                }
                            }
                            let n = t.shiftKey ? "previous" : "next",
                                o = a ? es(e, n, {
                                    mode: "structure"
                                }) : c ? es(e, n, {
                                    mode: "edit",
                                    allowCellNavigationInEditMode: m
                                }) : es(e, n);
                            return o && (t.preventDefault(), t.stopPropagation()), o
                        }
                        if (!a && Q(e.state) && "Enter" === t.key && !t.metaKey && !t.ctrlKey && !t.altKey && !t.shiftKey) {
                            let n = e.state.schema.nodes.table_cell.inlineContent;
                            if (n ? !c : d || null != (0, r.a)(e.state) || e.state.selection.$from.parent.type.spec.code) return !1;
                            let o = n ? function(e) {
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
                                    o = (0, g.f)(t.tableNode, t.tablePos),
                                    l = t.rowIndex + 1;
                                if (l < o.length) {
                                    let o = G(e.state.tr, t.tablePos, l, t.columnIndex) ?? e.state.tr;
                                    return e.dispatch(o.setMeta(T, n)), !0
                                }
                                return q(e, t)
                            }(e) : ea(e, "next");
                            return o && (t.preventDefault(), t.stopPropagation()), o
                        }
                        let S = t.metaKey || t.ctrlKey;
                        if (!a && (!c || !e.state.schema.nodes.table_cell.inlineContent) && S && "Enter" === t.key) {
                            let n = ea(e, t.shiftKey ? "previous" : "next");
                            return n && (t.preventDefault(), t.stopPropagation()), n
                        }
                        if (!S || !t.altKey) return !1;
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
                        if (!t.shiftKey && t.key === (P ? "Backspace" : "Delete")) {
                            let o = eh(e, n, D.deleteColumnConfirmation);
                            return o && (t.preventDefault(), t.stopPropagation()), o
                        }
                        return !1
                    },
                    handlePaste(e, n, l) {
                        if (n.defaultPrevented || !R() || !V(e) || !T.getState(e.state)?.isStructureMode && (0, s.e)(e)) return !1;
                        let r = n.clipboardData?.getData("text/plain") ?? "";
                        if (Q(e.state)) {
                            let i = (0, m.b)(e.state.schema, ey(r) ? new a.j(t.parse(r).content, 0, 0) : l, r, n.clipboardData?.getData("text/html") ?? "", e.dom.ownerDocument);
                            if (null != i) {
                                let t = !1 === i ? null : eP(e.state, i);
                                return null != t && e.dispatch((0, o.e)(t.setMeta("paste", !0).setMeta("uiEvent", "paste").scrollIntoView())), !0
                            }
                        }
                        if (!ey(r)) return !1;
                        let i = function(e, t, n) {
                            let o;
                            if (!V(e)) return !1;
                            let l = n.parse(t);
                            if (o = !1, l.descendants(e => e.type.name !== I || (o = !0, !1)), !o) return !1;
                            let r = new a.j(l.content, 0, 0);
                            return e.dispatch(e.state.tr.replaceSelection(r).scrollIntoView()), !0
                        }(e, r, t);
                        return i && (n.preventDefault(), n.stopPropagation()), i
                    }
                },
                view: S ? e => {
                    let t = n ?? (t => N(e, t)),
                        o = new eg(e, D, v, y, t, x);
                    return {
                        update(e) {
                            o.update(e)
                        },
                        destroy() {
                            o.destroy()
                        }
                    }
                } : void 0
            })
        }
    }),
    yIwO: (function(e, t, n) {
        var o = n("CHJa");

        function l(e) {
            let t = a(e);
            return e.content.content.every(e => e.childCount === t && e.content.content.every(e => 1 === e.attrs.colspan && 1 === e.attrs.rowspan))
        }

        function r(e) {
            return e.inlineContent ? o.c.empty : o.c.from(e.schema.nodes.paragraph.create())
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
                table_cell: o
            } = e.type.schema.nodes;
            return n.create(null, Array.from({
                length: a(e)
            }, (n, l) => i(o, t, e.firstChild?.maybeChild(l)?.attrs.align ?? null)))
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
                let o = e.rowPos + 1;
                for (let n = 0; n < t; n += 1) o += e.rowNode.child(n).nodeSize;
                return o
            },
            e: a,
            f: function(e, t) {
                let n = [],
                    o = t + 1;
                for (let t = 0; t < e.childCount; t += 1) {
                    let l = e.child(t);
                    n.push({
                        rowIndex: t,
                        rowNode: l,
                        rowPos: o
                    }), o += l.nodeSize
                }
                return n
            },
            g: function(e, t, n) {
                let r = a(e);
                if ("table" !== e.type.name || !Number.isSafeInteger(n) || n < 1 || 0 === e.childCount || 0 === r || !l(e)) return null;
                let u = "row" === t ? e.childCount : r;
                if (n === u) return e;
                if ("row" === t) {
                    let t = e.content.content.slice(0, n);
                    for (let o = u; o < n; o++) t.push(s(e, o));
                    return e.copy(o.c.fromArray(t))
                }
                return e.copy(o.c.fromArray(e.content.content.map((t, l) => {
                    let r = t.content.content.slice(0, n);
                    for (let t = u; t < n; t++) r.push(i(e.type.schema.nodes.table_cell, l));
                    return t.copy(o.c.fromArray(r))
                })))
            },
            h: l,
            i: function(e, t, n) {
                let o = e.doc.nodeAt(t);
                o?.type.name === "table_row" && o.forEach((o, l) => {
                    0 === o.attrs.rowIndex !== n && e.setNodeAttribute(t + 1 + l, "rowIndex", +!n)
                })
            }
        })
    }),
    hMk6: (function(e, t, n) {
        var o = n("rUQK");
        let l = [{
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
            }, ...(0, o.b)().map(e => ({
                id: e.id,
                command: e.command,
                disabled: !1,
                messageKey: e.messageKey,
                kind: "text-style"
            }))],
            r = new Map(l.map(e => [e.id, e])),
            i = ["generate", "divider", "emoji", "table", "columnLeft", "columnRight", "columnDelete", "checklist", ...o.a],
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
            f: () => l,
            g: e => "" === e ? [...i] : l.filter(t => !!("table" === t.id && e.startsWith("table")) || t.command.includes(e)).map(e => e.id),
            h: e => r.get(e)?.disabled ?? !0,
            i: e => {
                let t = e.trim().toLowerCase();
                return t.startsWith("/") ? t.slice(1) : t
            }
        })
    })
};