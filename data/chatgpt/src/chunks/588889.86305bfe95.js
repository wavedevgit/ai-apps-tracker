export const __rspack_esm_id = 588889;
export const __rspack_esm_ids = [588889];
export const __webpack_modules__ = {
    AjHH: (function(e, t, i) {
        var s = i("ABep");
        i("zd8w"), t.a = e => (0, s.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "currentColor",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, s.jsx)("path", {
                d: "M9.75122 4.09203C9.75122 3.61482 9.21964 3.35044 8.84399 3.60277L8.77173 3.66039L6.55396 5.69262C6.05931 6.14604 5.43173 6.42255 4.7688 6.48461L4.48267 6.49828C3.52474 6.49851 2.74829 7.27565 2.74829 8.23363V11.7668C2.74829 12.7248 3.52474 13.501 4.48267 13.5012C5.24935 13.5012 5.98874 13.7889 6.55396 14.3069L8.77173 16.3401L8.84399 16.3967C9.21966 16.6493 9.75122 16.3858 9.75122 15.9084V4.09203ZM17.2483 10.0002C17.2483 8.67623 16.9128 7.43233 16.3235 6.34691L17.4924 5.71215C18.1849 6.9875 18.5784 8.4491 18.5784 10.0002C18.5783 11.5143 18.2033 12.9429 17.5413 14.1965C17.3697 14.5212 16.9675 14.6453 16.6428 14.4739C16.3182 14.3023 16.194 13.9001 16.3655 13.5754C16.9288 12.5086 17.2483 11.2927 17.2483 10.0002ZM13.9182 10.0002C13.9182 9.1174 13.6268 8.30445 13.135 7.64965L14.1985 6.85082C14.8574 7.72804 15.2483 8.81952 15.2483 10.0002L15.2336 10.3938C15.166 11.3044 14.8657 12.1515 14.3918 12.8743L14.3069 12.9797C14.0889 13.199 13.7396 13.2418 13.4709 13.0657C13.164 12.8643 13.0784 12.4528 13.2795 12.1457L13.4231 11.9084C13.6935 11.4246 13.8643 10.8776 13.9075 10.2942L13.9182 10.0002ZM13.2678 6.71801C13.5615 6.49772 13.978 6.55727 14.1985 6.85082L13.135 7.64965C12.9144 7.35599 12.9742 6.93858 13.2678 6.71801ZM16.5911 5.44555C16.9138 5.27033 17.3171 5.38949 17.4924 5.71215L16.3235 6.34691C16.1483 6.02419 16.2684 5.62081 16.5911 5.44555ZM11.0813 15.9084C11.0813 17.5226 9.22237 18.3912 7.9895 17.4202L7.87231 17.3205L5.65552 15.2873C5.33557 14.9941 4.91667 14.8313 4.48267 14.8313C2.7902 14.8311 1.41821 13.4594 1.41821 11.7668V8.23363C1.41821 6.54111 2.7902 5.16843 4.48267 5.1682L4.64478 5.16039C5.02003 5.12526 5.37552 4.96881 5.65552 4.71215L7.87231 2.67992L7.9895 2.58031C9.22237 1.60902 11.0813 2.47773 11.0813 4.09203V15.9084Z"
            })
        })
    }),
    ycOY: (function(e, t, i) {
        let s = "PLEASE IMPLEMENT THIS PLAN:";

        function n(e) {
            return e.startsWith(s)
        }
        i.d(t, {
            b: () => n
        }, {
            a: s
        })
    }),
    P2D5: (function(e, t, i) {
        i.d(t, {}, {
            a: "data-orbit-transcript-entering",
            b: "orbit-transcript-entrance-change"
        })
    }),
    QxH2: (function(e, t, i) {
        var s = i("SKhr");

        function n() {
            return new Promise(e => {
                window.requestAnimationFrame(() => {
                    window.requestAnimationFrame(() => {
                        e()
                    })
                })
            })
        }

        function l(e) {
            let {
                container: t,
                matchId: i,
                includeShadowRoots: n,
                scrollBehavior: l = "smooth",
                signal: r,
                timeoutMs: a = 1500
            } = e, o = () => (0, s.g)({
                container: t,
                matchId: i,
                includeShadowRoots: n
            });
            if (r?.aborted) return Promise.resolve();
            let c = o();
            return null != c ? (c.scrollIntoView({
                block: "center",
                behavior: l
            }), Promise.resolve()) : new Promise(e => {
                let t = null,
                    i = null;

                function s(s) {
                    null != t && (window.cancelAnimationFrame(t), t = null), null != i && (window.clearTimeout(i), i = null), r?.removeEventListener("abort", n), null != s && s.scrollIntoView({
                        block: "center",
                        behavior: l
                    }), e()
                }

                function n() {
                    s()
                }
                r?.addEventListener("abort", n, {
                    once: !0
                }), i = window.setTimeout(() => {
                    s()
                }, a), t = window.requestAnimationFrame(function e() {
                    if (r?.aborted) return void s();
                    let i = o();
                    null != i ? s(i) : t = window.requestAnimationFrame(e)
                })
            })
        }
        i.d(t, {
            a: () => l,
            b: () => n
        })
    }),
    p1kG: (function(e, t, i) {
        var s = i("ABep"),
            n = i("QosV"),
            l = i("oyxz"),
            r = i("ygO2"),
            a = i("JNtf"),
            o = i("mUDD"),
            c = i("b8ru"),
            d = i("HgLj");

        function u(e) {
            let t, i, c, u, m, p, f = (0, n.c)(13),
                {
                    image: y,
                    onClose: v,
                    onCloseAutoFocus: g,
                    onOpenAutoFocus: b
                } = e;
            return f[0] !== v ? (t = e => !e && v(), f[0] = v, f[1] = t) : t = f[1], f[2] !== y || f[3] !== b ? (i = e => {
                (0, d.a)(y.imageRef)(null), b?.(e)
            }, f[2] = y, f[3] = b, f[4] = i) : i = f[4], f[5] !== g || f[6] !== i ? (c = {
                onCloseAutoFocus: g,
                onOpenAutoFocus: i
            }, f[5] = g, f[6] = i, f[7] = c) : c = f[7], f[8] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, s.jsx)(o.e, {
                children: (0, s.jsx)(o.d, {
                    title: (0, s.jsx)(a.e, {
                        children: (0, s.jsx)(l.a, {
                            id: "codex.imagePreview.loadError.title",
                            defaultMessage: "Couldn’t open image preview",
                            description: "Title of the recovery dialog shown when the image preview interface fails to download. The user can close it or reload the app."
                        })
                    })
                })
            }), f[8] = u) : u = f[8], f[9] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, s.jsxs)(o.b, {
                children: [u, (0, s.jsx)(o.c, {
                    children: (0, s.jsx)(r.a, {
                        onClick: h,
                        children: (0, s.jsx)(l.a, {
                            id: "codex.imagePreview.loadError.reload",
                            defaultMessage: "Reload",
                            description: "Button in the image preview load error dialog that saves pending drafts and reloads the app so the user can open the image again."
                        })
                    })
                })]
            }), f[9] = m) : m = f[9], f[10] !== t || f[11] !== c ? (p = (0, s.jsx)(a.b, {
                open: !0,
                size: "compact",
                onOpenChange: t,
                contentProps: c,
                children: m
            }), f[10] = t, f[11] = c, f[12] = p) : p = f[12], p
        }

        function h() {
            (0, c.a)()
        }
        i.d(t, {
            a: () => u
        })
    }),
    m88r: (function(e, t, i) {
        i.d(t, {
            a: () => f
        });
        var s = i("Qgfj"),
            n = i("qixt"),
            l = i("bnxy"),
            r = i("XSLO"),
            a = i("ivPw");
        let o = new Set([".", "*", "+", "?", "^", "$", "{", "}", "(", ")", "|", "[", "]"]);

        function c(e) {
            let t = "",
                i = !1;
            for (let n of e) {
                if (i) {
                    var s;
                    if (s = n, /^[A-Za-z0-9]$/.test(s)) return null;
                    t += n, i = !1;
                    continue
                }
                if ("\\" === n) {
                    i = !0;
                    continue
                }
                if (o.has(n)) return null;
                t += n
            }
            return i ? null : t
        }

        function d(e, t) {
            let [i, ...s] = e;
            return t([h(i), ...s.map(h)])
        }

        function u(e) {
            let [t, ...i] = e, s = t;
            for (let [e, t] of i.entries()) {
                let n = e === i.length - 1 ? 1 === i.length ? " and " : ", and " : ", ";
                s += `${n}${t}`
            }
            return s
        }

        function h(e) {
            return `“${e.replace(/^["']+/,"").replace(/["']+$/,"")}”`
        }
        var m = i("Z2lA"),
            p = i("pNUK");

        function f(e) {
            let {
                items: t,
                threadDetailLevel: i,
                formatSearchQueryTermList: s
            } = e;
            return y({
                items: t,
                threadDetailLevel: i,
                formatSearchQueryTermList: s,
                inProgressOnly: !0
            }) ?? y({
                items: t,
                threadDetailLevel: i,
                formatSearchQueryTermList: s,
                inProgressOnly: !1
            })
        }

        function y(e) {
            let {
                items: t,
                threadDetailLevel: i,
                formatSearchQueryTermList: s,
                inProgressOnly: o
            } = e;
            for (let e = t.length - 1; e >= 0; e -= 1) {
                var h;
                let f = t[e];
                if (f?.type !== "exec" || o && !("interrupted" !== (h = f).executionStatus && !h.parsedCmd.isFinished)) continue;
                let y = function(e) {
                    let {
                        item: t,
                        threadDetailLevel: i,
                        formatSearchQueryTermList: s
                    } = e, o = t.parsedCmd, h = (0, r.e)(t.executionStatus) ? (0, r.b)(o.cmd) : null, f = null == h ? null : function(e) {
                        switch (e) {
                            case "create":
                                return r.f.activeCreating;
                            case "update":
                                return r.f.activeUpdating
                        }
                    }(h);
                    if (null != f) return {
                        activityKey: t.callId,
                        icon: "edit-files",
                        message: f
                    };
                    switch (o.type) {
                        case "read": {
                            let e = o.displayLabel ?? (0, l.j)((0, a.a)(o.path ?? o.name)),
                                i = (0, m.a)({
                                    summary: o,
                                    cwd: t.cwd
                                }),
                                s = i?.isSkillDefinitionFile === !0;
                            if (null != i && s && (0, p.b)(i)) return {
                                activityKey: t.callId,
                                icon: "internal-knowledge",
                                message: v.readInternalKnowledge
                            };
                            return {
                                activityKey: t.callId,
                                icon: "run-command",
                                message: s ? v.readSkill : v.read,
                                values: s ? {
                                    skillName: i.skillName
                                } : {
                                    target: e
                                }
                            }
                        }
                        case "search":
                            return function(e) {
                                let {
                                    activityKey: t,
                                    path: i,
                                    query: s,
                                    threadDetailLevel: l,
                                    formatSearchQueryTermList: r
                                } = e;
                                if (i) return {
                                    activityKey: t,
                                    icon: "code-searching",
                                    message: v.searchFolder,
                                    values: {
                                        folder: (0, a.a)(i)
                                    }
                                };
                                if (s) {
                                    let e = l === n.b ? function(e) {
                                        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                                            i = function(e) {
                                                let t = function(e) {
                                                    let t = [],
                                                        i = 0,
                                                        s = !1;
                                                    for (let n = 0; n < e.length; n += 1) {
                                                        let l = e[n];
                                                        if (s) {
                                                            s = !1;
                                                            continue
                                                        }
                                                        if ("\\" === l) {
                                                            s = !0;
                                                            continue
                                                        }
                                                        "|" === l && (t.push(e.slice(i, n)), i = n + 1)
                                                    }
                                                    return 0 === t.length ? [] : (t.push(e.slice(i)), t)
                                                }(e);
                                                if (t.length < 2) return null;
                                                let i = [];
                                                for (let e of t) {
                                                    let t = c(e);
                                                    if (null == t || 0 === t.length) return null;
                                                    i.push(t)
                                                }
                                                return function(e) {
                                                    let [t, ...i] = e;
                                                    return null == t ? null : [t, ...i]
                                                }(i)
                                            }(e);
                                        return null != i ? d(i, t) : d([c(e) ?? e], t)
                                    }(s, r) : s;
                                    return {
                                        activityKey: t,
                                        icon: "code-searching",
                                        message: v.searchQuery,
                                        values: {
                                            query: e
                                        }
                                    }
                                }
                                return {
                                    activityKey: t,
                                    icon: "code-searching",
                                    message: v.searchFiles
                                }
                            }({
                                activityKey: t.callId,
                                path: o.path,
                                query: o.query,
                                threadDetailLevel: i,
                                formatSearchQueryTermList: s
                            });
                        case "list_files":
                            if (null == o.path) return {
                                activityKey: t.callId,
                                icon: "list-files",
                                message: v.listFiles
                            };
                            return {
                                activityKey: t.callId, icon: "list-files", message: v.listFolder, values: {
                                    folder: (0, a.a)(o.path)
                                }
                            };
                        case "format":
                        case "lint":
                        case "noop":
                        case "test":
                        case "unknown":
                            return function(e) {
                                let t;
                                t = "interrupted" === e.executionStatus ? v.commandStopped : e.parsedCmd.isFinished ? v.commandRan : v.commandRunning;
                                let i = e.parsedCmd.cmd.trim();
                                return 0 === i.length ? {
                                    activityKey: e.callId,
                                    icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                                    message: t
                                } : {
                                    activityKey: e.callId,
                                    icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                                    message: "interrupted" === e.executionStatus ? v.commandStoppedWithDetail : e.parsedCmd.isFinished ? v.commandRanWithDetail : v.commandRunningWithDetail,
                                    values: {
                                        command: i
                                    }
                                }
                            }(t)
                    }
                }({
                    item: f,
                    threadDetailLevel: i,
                    formatSearchQueryTermList: s
                });
                if (null != y) return y
            }
            return null
        }
        let v = (0, s.f)({
            read: {
                id: "localConversation.toolActivity.active.read",
                defaultMessage: "<action>Reading</action> <detail>{target}</detail>",
                description: "Active tool activity summary while Codex is reading a file"
            },
            readSkill: {
                id: "localConversation.toolActivity.active.readSkill",
                defaultMessage: "<action>Reading</action> <detail>{skillName} skill</detail>",
                description: "Active tool activity summary while Codex is reading a skill definition"
            },
            readInternalKnowledge: {
                id: "localConversation.toolActivity.active.readInternalKnowledge",
                defaultMessage: "<action>Reading</action> <detail>Internal Knowledge</detail>",
                description: "Active tool activity summary while Codex is reading the canonical Internal Knowledge skill definition"
            },
            searchFolder: {
                id: "localConversation.toolActivity.active.search.folder",
                defaultMessage: "<action>Searching</action> <detail>files in {folder} folder</detail>",
                description: "Active tool activity summary while Codex is searching files in a folder"
            },
            searchQuery: {
                id: "localConversation.toolActivity.active.search.query",
                defaultMessage: "<action>Searching</action> <detail>for {query}</detail>",
                description: "Active tool activity summary while Codex is searching for a query"
            },
            searchFiles: {
                id: "localConversation.toolActivity.active.search.files",
                defaultMessage: "<action>Searching</action> <detail>files</detail>",
                description: "Active tool activity summary while Codex is searching files"
            },
            listFiles: {
                id: "localConversation.toolActivity.active.list.files",
                defaultMessage: "<action>Listing</action> <detail>files</detail>",
                description: "Active tool activity summary while Codex is listing files"
            },
            listFolder: {
                id: "localConversation.toolActivity.active.list.folder",
                defaultMessage: "<action>Listing</action> <detail>files in {folder} folder</detail>",
                description: "Active tool activity summary while Codex is listing files in a folder"
            },
            commandStopped: {
                id: "localConversation.toolActivity.active.command.stopped",
                defaultMessage: "<action>Stopped command</action>",
                description: "Active tool activity summary after Codex stops a command"
            },
            commandStoppedWithDetail: {
                id: "localConversation.toolActivity.active.command.stopped.detail",
                defaultMessage: "<action>Stopped</action> <detail>{command}</detail>",
                description: "Active tool activity summary after Codex stops a command"
            },
            commandRan: {
                id: "localConversation.toolActivity.active.command.ran",
                defaultMessage: "<action>Ran command</action>",
                description: "Active tool activity summary after Codex runs a command"
            },
            commandRanWithDetail: {
                id: "localConversation.toolActivity.active.command.ran.detail",
                defaultMessage: "<action>Ran</action> <detail>{command}</detail>",
                description: "Active tool activity summary after Codex runs a command"
            },
            commandRunning: {
                id: "localConversation.toolActivity.active.command.running",
                defaultMessage: "<action>Running command</action>",
                description: "Active tool activity summary while Codex runs a command"
            },
            commandRunningWithDetail: {
                id: "localConversation.toolActivity.active.command.running.detail",
                defaultMessage: "<action>Running</action> <detail>{command}</detail>",
                description: "Active tool activity summary while Codex runs a command"
            }
        })
    }),
    cabL: (function(e, t, i) {
        var s = i("ABep"),
            n = i("QosV"),
            l = i("iTtm"),
            r = i("E8Sp"),
            a = i("Ro2M"),
            o = i("B0Wx"),
            c = i("jAnS"),
            d = i("bf6R"),
            u = i("TL6G"),
            h = i("tSEg"),
            m = i("wbP4"),
            p = i("tPd1");

        function f(e) {
            let t, i, f, y = (0, n.c)(9),
                {
                    automationId: v,
                    conversationId: g
                } = e,
                b = (0, l.y)(h.a),
                _ = (0, l.x)(o.a, g),
                R = (0, l.x)(a.c, v),
                I = R?.title ?? _;
            y[0] !== g || y[1] !== b ? (t = function() {
                let e = (0, c.c)(g),
                    t = b.get(p.b);
                if (null != t) {
                    t.run(), u.c.dispatchMessage("open-in-main-window", {
                        path: e
                    });
                    return
                }(0, r.c)(b, e)
            }, y[0] = g, y[1] = b, y[2] = t) : t = y[2];
            let w = t;
            return y[3] !== R ? (i = R?.emoji == null ? (0, s.jsx)(d.Hb, {
                "aria-hidden": !0
            }) : (0, s.jsx)(m.b, {
                emoji: R.emoji
            }), y[3] = R, y[4] = i) : i = y[4], y[5] !== w || y[6] !== i || y[7] !== I ? (f = (0, s.jsx)(m.a, {
                icon: i,
                title: I,
                onClick: w,
                children: I
            }), y[5] = w, y[6] = i, y[7] = I, y[8] = f) : f = y[8], f
        }
        i.d(t, {
            a: () => f
        })
    }),
    QvXf: (function(e, t, i) {
        i.d(t, {
            a: () => m,
            b: () => p
        });
        var s = i("ABep"),
            n = i("on57"),
            l = i("CZAr"),
            r = i("NvEJ"),
            a = i("pxwu");
        let {
            p: o
        } = (0, r.a)({
            allowWideBlocks: !1,
            mediaComponent: void 0
        });

        function c(e) {
            let {
                children: t
            } = e;
            return (0, a.a)(t, o)
        }
        var d = i("NmJv"),
            u = i("rMGV"),
            h = i("v3M5");
        let m = {
            h1: c,
            h2: c,
            h3: c,
            hr: () => null
        };

        function p(e, t, i) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                a = [];
            for (let t of e.flatMap(f)) {
                if ("space" === t.type || "hr" === t.type) continue;
                let e = "code" === t.type || "table" === t.type || "paragraph" === t.type && t.tokens?.some(y) || "codexDirective" === t.type && t.name === l.e,
                    i = a.at(-1);
                e || null == i || i.standalone ? a.push({
                    standalone: e,
                    tokens: [t]
                }) : i.tokens.push(t)
            }
            return null != i && (a.at(-1)?.standalone ?? !0) && a.push({
                standalone: !1,
                tokens: []
            }), a.map((e, l) => {
                let o = t(e.tokens),
                    c = null != i && l === a.length - 1,
                    m = e.standalone ? (0, s.jsx)(d.a, {
                        children: (0, s.jsx)("div", {
                            className: "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0",
                            "data-markdown-copy": "contents",
                            children: o
                        })
                    }, l) : (0, s.jsxs)("div", {
                        className: (0, n.b)("min-w-0", u.a.compactMessageBubble, c && u.a.compactMessageBubbleWithAttachment),
                        "data-markdown-copy": "contents",
                        children: [e.tokens.length > 0 ? (0, s.jsx)("div", {
                            className: (0, n.b)(h.a.MarkdownRoot, "[&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p:last-child]:inline", c && u.a.compactMessageBody),
                            "data-markdown-copy": "contents",
                            "data-markdown-text-style": "assistant-message",
                            children: o
                        }) : null, c ? (0, s.jsx)("div", {
                            className: (0, n.b)(e.tokens.length > 0 && "border-t-2 border-surface"),
                            "data-markdown-copy": "contents",
                            children: i
                        }) : null]
                    }, l);
                return null != r && l === a.length - 1 ? (0, s.jsxs)("div", {
                    className: (0, n.b)("flex max-w-full items-center gap-2", e.standalone && "w-full"),
                    children: [m, r]
                }, l) : m
            })
        }

        function f(e) {
            let t = "paragraph" === e.type ? e.tokens : void 0;
            if (!t?.some(y)) return [e];
            let i = [],
                s = null,
                n = !1;
            for (let e of t) {
                let t = "br" === e.type || 0 === e.raw.trim().length;
                if (t && null == s) continue;
                let l = y(e);
                null != s && (t || l === n) || (s = {
                    type: "paragraph",
                    raw: "",
                    text: "",
                    tokens: []
                }, n = l, i.push(s)), s.raw += e.raw, s.text += e.raw, s.tokens.push(e)
            }
            return i
        }

        function y(e) {
            return "image" === e.type || "link" === e.type && e.tokens?.length === 1 && e.tokens[0]?.type === "image"
        }
    }),
    wbP4: (function(e, t, i) {
        var s = i("ABep"),
            n = i("QosV"),
            l = i("on57"),
            r = i("ygO2"),
            a = i("bf6R");

        function o(e) {
            let t, i, o, c, d, u, h, m, p = (0, n.c)(16);
            p[0] !== e ? ({
                icon: o,
                accessory: t,
                children: i,
                ...c
            } = e, p[0] = e, p[1] = t, p[2] = i, p[3] = o, p[4] = c) : (t = p[1], i = p[2], o = p[3], c = p[4]);
            let f = !0 === c["aria-busy"] && "loading-shimmer-pure-text";
            return p[5] !== f ? (d = (0, l.b)("min-w-0 truncate", f), p[5] = f, p[6] = d) : d = p[6], p[7] !== i || p[8] !== d ? (u = (0, s.jsx)("span", {
                className: d,
                children: i
            }), p[7] = i, p[8] = d, p[9] = u) : u = p[9], p[10] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, s.jsx)(a.ec, {
                className: "text-tertiary"
            }), p[10] = h) : h = p[10], p[11] !== t || p[12] !== o || p[13] !== c || p[14] !== u ? (m = (0, s.jsxs)(r.a, {
                ...c,
                className: "w-fit max-w-full text-start",
                allowShrink: !0,
                color: "outlineSurface",
                size: "messageChip",
                radius: "full",
                children: [o, u, t, h]
            }), p[11] = t, p[12] = o, p[13] = c, p[14] = u, p[15] = m) : m = p[15], m
        }

        function c(e) {
            let t, i = (0, n.c)(2),
                {
                    emoji: l
                } = e;
            return i[0] !== l ? (t = (0, s.jsx)("span", {
                "aria-hidden": !0,
                className: "flex size-5 shrink-0 items-center justify-center p-0.5 leading-none",
                children: l
            }), i[0] = l, i[1] = t) : t = i[1], t
        }
        i.d(t, {
            a: () => o,
            b: () => c
        })
    }),
    Lm6t: (function(e, t, i) {
        var s = i("ABep"),
            n = i("QosV"),
            l = i("iTtm"),
            r = i("oyxz"),
            a = i("ygO2"),
            o = i("bf6R"),
            c = i("tSEg"),
            d = i("hL0E");

        function u(e) {
            let t, i, u, h, m, p = (0, n.c)(8),
                {
                    conversationId: f,
                    handoff: y,
                    orbitId: v
                } = e,
                g = (0, l.y)(c.a),
                b = (0, l.z)(c.h),
                _ = (0, l.z)(d.b),
                R = "local-thread" === g.value.routeKind && g.value.conversationId === f,
                I = null != v && "other" === g.value.routeKind && g.value.orbitId === v;
            return !b && _ && (R || I) ? (p[0] !== y || p[1] !== g ? (t = () => {
                (0, d.d)(g, void 0, {
                    handoff: {
                        ...y,
                        requestId: crypto.randomUUID()
                    }
                })
            }, p[0] = y, p[1] = g, p[2] = t) : t = p[2], p[3] === Symbol.for("react.memo_cache_sentinel") ? (i = (0, s.jsx)(o.Gc, {}), p[3] = i) : i = p[3], p[4] === Symbol.for("react.memo_cache_sentinel") ? (u = (0, s.jsx)("span", {
                className: "flex-1 text-start wrap-anywhere whitespace-normal",
                children: (0, s.jsx)(r.a, {
                    id: "restricted.aeon.computer.handoffOpen",
                    defaultMessage: "Open computer",
                    description: "Opens the dot's shared computer at the offered browser tab. Taking control is a separate action."
                })
            }), h = (0, s.jsx)(o.ec, {}), p[4] = u, p[5] = h) : (u = p[4], h = p[5]), p[6] !== t ? (m = (0, s.jsxs)(a.a, {
                className: "w-fit max-w-full gap-2",
                color: "secondary",
                radius: "full",
                size: "large",
                onClick: t,
                children: [i, u, h]
            }), p[6] = t, p[7] = m) : m = p[7], m) : null
        }
        i.d(t, {
            a: () => u
        })
    }),
    NNZM: (function(e, t, i) {
        var s = i("ABep"),
            n = i("QosV"),
            l = i("zd8w"),
            r = i("P2D5"),
            a = i("dJBt"),
            o = i("W41r");
        let c = () => "visible" === document.visibilityState,
            d = () => !1;

        function u(e) {
            let t, i, r, a = (0, n.c)(10),
                {
                    messageId: o,
                    performance: c
                } = e;
            a[0] !== o || a[1] !== c ? (t = e => c.subscribeLifecycleReply(o, e), a[0] = o, a[1] = c, a[2] = t) : t = a[2];
            let u = t;
            a[3] !== o || a[4] !== c ? (i = () => c.hasPendingLifecycleReply(o), a[3] = o, a[4] = c, a[5] = i) : i = a[5];
            let m = i,
                p = (0, l.useSyncExternalStore)(u, m, d);
            return a[6] !== o || a[7] !== p || a[8] !== e ? (r = p ? (0, s.jsx)(h, {
                ...e
            }, o) : null, a[6] = o, a[7] = p, a[8] = e, a[9] = r) : r = a[9], r
        }

        function h(e) {
            let t, i = (0, n.c)(3),
                r = (0, l.useSyncExternalStore)(p, c, d);
            return i[0] !== e || i[1] !== r ? (t = r && "u" > typeof IntersectionObserver ? (0, s.jsx)(m, {
                ...e
            }) : null, i[0] = e, i[1] = r, i[2] = t) : t = i[2], t
        }

        function m(e) {
            let t, i, c, d = (0, n.c)(7),
                {
                    messageId: u,
                    performance: h,
                    rowRef: m
                } = e,
                [p, f] = (0, l.useState)(!1);
            return d[0] !== m ? (t = () => {
                let e, t, i = m.current;
                if (null == i) return;
                let s = !1,
                    n = !1,
                    l = () => {
                        if (null != e && (cancelAnimationFrame(e), e = void 0), s) return;
                        let t = i.hasAttribute(r.a),
                            a = n && (!t || (0, o.a)(i));
                        f(a), n && !a && t && (e = requestAnimationFrame(l))
                    },
                    a = new IntersectionObserver(e => {
                        if (!s)
                            for (let r of e) {
                                if (r.target !== i) continue;
                                let e = r.boundingClientRect.width > 0 && r.boundingClientRect.height > 0;
                                if (n = e && r.isIntersecting && r.intersectionRatio > 0 && r.intersectionRect.width > 0 && r.intersectionRect.height > 0, l(), e) t?.disconnect(), t = void 0;
                                else if (null == t && "u" > typeof ResizeObserver) {
                                    let e = new ResizeObserver(n => {
                                        !s && t === e && n.some(e => e.target === i && e.contentRect.width > 0 && e.contentRect.height > 0) && (t?.disconnect(), t = void 0, a.unobserve(i), a.observe(i))
                                    });
                                    t = e, e.observe(i)
                                }
                            }
                    }, {
                        rootMargin: "0px",
                        threshold: [0, Number.EPSILON]
                    });
                return i.addEventListener(r.b, l), a.observe(i), () => {
                    s = !0, a.disconnect(), t?.disconnect(), i.removeEventListener(r.b, l), null != e && cancelAnimationFrame(e)
                }
            }, i = [m], d[0] = m, d[1] = t, d[2] = i) : (t = d[1], i = d[2]), (0, l.useEffect)(t, i), d[3] !== p || d[4] !== u || d[5] !== h ? (c = p ? (0, s.jsx)(a.a, {
                onPaint: () => h.rendered(u),
                requireVisibleAtPaint: !0
            }) : null, d[3] = p, d[4] = u, d[5] = h, d[6] = c) : c = d[6], c
        }

        function p(e) {
            return document.addEventListener("visibilitychange", e), () => document.removeEventListener("visibilitychange", e)
        }
        i.d(t, {
            a: () => u
        })
    }),
    UM72: (function(e, t, i) {
        var s = i("ABep"),
            n = i("QosV"),
            l = i("iTtm"),
            r = i("zd8w"),
            a = i("Cslg"),
            o = i("r0y7"),
            c = i("dJBt"),
            d = i("OWtl"),
            u = i("mRSS"),
            h = i("NNZM"),
            m = i("uWtN");

        function p(e) {
            let t, i, r, c = (0, n.c)(20),
                {
                    roomId: h,
                    messageId: p,
                    bodyText: y,
                    rowRef: v,
                    presentation: g
                } = e,
                b = void 0 === g ? "conversation" : g,
                _ = (0, l.y)(d.a),
                R = (0, l.z)(u.a),
                I = (0, l.z)(a.i),
                w = (0, l.z)(a.f),
                x = (0, l.z)(a.k),
                S = (0, l.z)(a.e),
                L = (0, l.z)(o.a),
                A = "loaded" === S.status && "personal" === S.structure ? x : L?.accountUserId;
            return R && I && "loaded" === S.status && null != w && null != x && null != A ? (c[0] !== w || c[1] !== A || c[2] !== p || c[3] !== b || c[4] !== h || c[5] !== x ? (t = JSON.stringify([w, x, A, h, p, b]), c[0] = w, c[1] = A, c[2] = p, c[3] = b, c[4] = h, c[5] = x, c[6] = t) : t = c[6], c[7] !== w || c[8] !== A || c[9] !== h || c[10] !== _ || c[11] !== x ? (i = (0, m.a)(_, {
                accountId: w,
                userId: x,
                accountUserId: A,
                roomId: h
            }, "orbit"), c[7] = w, c[8] = A, c[9] = h, c[10] = _, c[11] = x, c[12] = i) : i = c[12], c[13] !== y || c[14] !== p || c[15] !== b || c[16] !== v || c[17] !== t || c[18] !== i ? (r = (0, s.jsx)(f, {
                performance: i,
                messageId: p,
                bodyText: y,
                rowRef: v,
                presentation: b
            }, t), c[13] = y, c[14] = p, c[15] = b, c[16] = v, c[17] = t, c[18] = i, c[19] = r) : r = c[19], r) : null
        }

        function f(e) {
            let t, i, l, a, o, d, u, m = (0, n.c)(26),
                {
                    performance: p,
                    messageId: f,
                    bodyText: v,
                    rowRef: g,
                    presentation: b
                } = e,
                [_] = (0, r.useState)(y);
            return m[0] !== _ || m[1] !== p || m[2] !== b ? (t = () => {
                if ("conversation" === b) return () => p.release(_)
            }, i = [_, p, b], m[0] = _, m[1] = p, m[2] = b, m[3] = t, m[4] = i) : (t = m[3], i = m[4]), (0, r.useLayoutEffect)(t, i), m[5] !== v || m[6] !== f || m[7] !== _ || m[8] !== p || m[9] !== b ? (l = () => {
                "conversation" === b && p.setActive(!0, _), p.observeRenderedMessage(f, v), p.committed(f)
            }, m[5] = v, m[6] = f, m[7] = _, m[8] = p, m[9] = b, m[10] = l) : l = m[10], m[11] !== f || m[12] !== p || m[13] !== b ? (a = () => {
                "notification-preview" === b ? p.paintPreviewOpportunity(f) : p.paintOpportunity(f)
            }, m[11] = f, m[12] = p, m[13] = b, m[14] = a) : a = m[14], m[15] !== l || m[16] !== a ? (o = (0, s.jsx)(c.a, {
                onCommit: l,
                onPaint: a,
                requireVisibleAtPaint: !0
            }), m[15] = l, m[16] = a, m[17] = o) : o = m[17], m[18] !== f || m[19] !== p || m[20] !== b || m[21] !== g ? (d = "conversation" === b && (0, s.jsx)(h.a, {
                messageId: f,
                performance: p,
                rowRef: g
            }), m[18] = f, m[19] = p, m[20] = b, m[21] = g, m[22] = d) : d = m[22], m[23] !== o || m[24] !== d ? (u = (0, s.jsxs)(s.Fragment, {
                children: [o, d]
            }), m[23] = o, m[24] = d, m[25] = u) : u = m[25], u
        }

        function y() {
            return {}
        }
        i.d(t, {
            a: () => p
        })
    }),
    uWtN: (function(e, t, i) {
        i.d(t, {
            a: () => I
        });
        var s = i("iTtm"),
            n = i("PFjh"),
            l = i("Cslg"),
            r = i("IYFr"),
            a = i("OWtl"),
            o = i("fVOX");
        let c = {
            $type: "protobuf_analytics_events.v1.DotMessageLifecycleEvent"
        };
        i("ReGc");
        var d = i("yGJW"),
            u = i("SClg"),
            h = i("w5lF"),
            m = i("v9CB"),
            p = i("OqKe"),
            f = i("WFY2");
        class y {
            roomId;
            options;
            sends = new Map;
            inputs = new Map;
            replies = new Map;
            lifecycleSends = new Map;
            lifecycleReplies = new Map;
            lifecycleListeners = new Map;
            operations = new Set;
            wallOrigin = Date.now() - performance.now();
            views = new Map;
            reactionSenderId;
            roomKind = "unknown";
            visibilityChanged = () => {
                "visible" !== document.visibilityState && this.interruptObservations()
            };
            constructor(e, t = {}) {
                this.roomId = e, this.options = t
            }
            setActive(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this,
                    i = this.active;
                this.views.set(t, e), this.active || this.interruptObservations(), i !== this.active && this.notifyLifecycleReplies()
            }
            release(e) {
                let t = this.active;
                this.views.delete(e), this.active || this.interruptObservations(), t !== this.active && this.notifyLifecycleReplies()
            }
            setReactionSender(e) {
                if (this.reactionSenderId !== e) {
                    for (let t of (this.reactionSenderId = e, this.replies.values())) this.emitLifecycleReply(t);
                    for (let e of this.lifecycleReplies.values()) this.emitLifecycleReply(e);
                    this.notifyLifecycleReplies()
                }
            }
            setRoomKind(e) {
                this.roomKind = e
            }
            get idle() {
                return 0 === this.views.size && 0 === this.sends.size && 0 === this.lifecycleSends.size && 0 === this.operations.size
            }
            get active() {
                for (let e of this.views.values())
                    if (e) return !0;
                return !1
            }
            startSend(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "messages",
                    s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    n = this.sends.get(e);
                if (s || null == n || this.finish(n, "aborted", performance.now()), !s && this.sends.size >= 64) {
                    let e = this.sends.values().next().value;
                    null != e && this.finish(e, "aborted", performance.now())
                }
                let l = performance.now(),
                    r = void 0 === t ? void 0 : v(t),
                    a = (s ? n?.measurementId : void 0) ?? crypto.randomUUID(),
                    o = (s ? n?.roomKind : void 0) ?? this.roomKind,
                    c = {
                        client_request_id: e,
                        measurement_id: a,
                        room_kind: o,
                        is_retry: s,
                        input_text_characters: r,
                        entry_point: i
                    },
                    d = s ? n?.trace ?? null : (0, p.e)({
                        name: "orbit.messaging.client.message_flow",
                        attributes: g(this.roomId, this.options.surface ?? "unknown", c)
                    }),
                    u = this.operation("client.http_send", c, d?.trace);
                if (s) null != n && (n.finishHttp = u.finish);
                else {
                    let t = {
                        clientRequestId: e,
                        measurementId: a,
                        roomKind: o,
                        entryPoint: i,
                        inputTextCharacters: r,
                        startedAt: l,
                        firstResponseRecorded: !1,
                        interruptedAt: this.active && "visible" === document.visibilityState ? void 0 : l,
                        trace: d,
                        finishHttp: u.finish,
                        timeout: setTimeout(() => {
                            this.finish(t, "timeout", performance.now()), this.expireLifecycle(t)
                        }, 3e5)
                    };
                    if (n = t, this.sends.set(e, n), this.tracksLifecycle(n)) {
                        let t = this.lifecycleSends.get(e);
                        if (null != t && this.expireLifecycle(t), this.lifecycleSends.size >= 64) {
                            let e = this.lifecycleSends.values().next().value;
                            null != e && this.expireLifecycle(e)
                        }
                        this.lifecycleSends.set(e, n)
                    }
                    document.addEventListener("visibilitychange", this.visibilityChanged), this.options.onPendingChange?.(!0), this.emit("client.send", "started", c, l, d?.trace), this.emitLifecycle(n, "DOT_MESSAGE_LIFECYCLE_EVENT_TYPE_SEND_MESSAGE", {
                        at: l,
                        active: this.active,
                        visible: "visible" === document.visibilityState
                    }), this.notifyLifecycleReplies()
                }
                return {
                    headers: u.headers,
                    responseHeaders: e => {
                        if (this.operations.has(u.finish)) try {
                            this.emit("client.http_response_headers", "success", {
                                ...c,
                                server_request_id: h.j.parse(e.get("x-oai-request-id"))
                            }, performance.now())
                        } catch {}
                    },
                    accepted: t => {
                        u.finish(void 0, {
                            message_id: t
                        }), null != n && this.sends.get(e) === n && n.finishHttp === u.finish && this.associateInput(n, t)
                    },
                    failed: t => {
                        if (u.finish(t), null == n || this.sends.get(e) !== n || n.finishHttp !== u.finish) return;
                        let i = _(t);
                        s || "delivery_unknown" === i || this.finish(n, i, performance.now())
                    }
                }
            }
            startRead(e) {
                let t = [...this.replies.values()].filter(e => null != e.send && null == e.availableAt),
                    i = 1 === t.length ? t[0] : void 0;
                return this.operation("history" === e ? "client.history_fetch" : "client.room_fetch", null == i ? {} : {
                    ...b(i.identity),
                    client_request_id: i.send?.clientRequestId,
                    measurement_id: i.send?.measurementId,
                    room_kind: i.send?.roomKind,
                    input_text_characters: i.send?.inputTextCharacters,
                    entry_point: i.send?.entryPoint
                }, i?.send?.trace?.trace)
            }
            received(e, t) {
                let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e !== this.roomId) return;
                let s = performance.now(),
                    n = t.clientRequestId ? this.sends.get(t.clientRequestId) : void 0;
                if (t.self && null != n) {
                    this.emit("client.pubsub_received", "success", {
                        client_request_id: n.clientRequestId,
                        measurement_id: n.measurementId,
                        room_kind: n.roomKind,
                        input_text_characters: n.inputTextCharacters,
                        entry_point: n.entryPoint,
                        message_id: t.messageId
                    }, s, n.trace?.trace), this.associateInput(n, t.messageId);
                    return
                }
                let l = this.reply(t);
                if (null == l) return void this.emit("client.pubsub_received", "unmatched", b(t), s);
                if (null != l.receivedAt) {
                    this.emitLifecycleReply(l), this.emit("client.pubsub_received", "duplicate", {
                        ...b(t),
                        measurement_id: l.send?.measurementId,
                        room_kind: l.send?.roomKind
                    }, s);
                    return
                }
                l.receivedAt = this.moment(), this.recordLifecycleReceipt(l, l.receivedAt, i ? "DOT_MESSAGE_LIFECYCLE_DELIVERY_SOURCE_HISTORY" : "DOT_MESSAGE_LIFECYCLE_DELIVERY_SOURCE_LIVE_UPDATE"), null == l.send && this.emit("client.pubsub_received", "unmatched", b(t), s), this.emitReply(l)
            }
            projected(e, t, i) {
                if (e.roomId !== this.roomId || "" !== e.deliveryState) return;
                let s = this.sends.get(e.requestId);
                if (e.self && null != s) return void this.associateInput(s, e.id);
                let n = {
                        messageId: e.id,
                        clientRequestId: e.requestId,
                        replyToMessageId: e.replyTo?.messageId,
                        self: e.self,
                        role: e.role,
                        accountUserId: e.senderId
                    },
                    l = this.reply(n);
                null != l && (l.identity.role = n.role, l.identity.accountUserId = n.accountUserId, l.availableAt = l.availableAt ?? this.moment(), l.lifecycleDeleted = !!e.deletedAt, l.lifecycleDeleted || this.recordLifecycleReceipt(l, this.moment(), i), null != l.textCharacters || void 0 === t || e.deletedAt || (l.textCharacters = v(t ?? "")), this.emitReply(l), this.notifyLifecycleReply(e.id))
            }
            committed(e) {
                let t = this.replies.get(e);
                null != t && (t.committedAt = t.committedAt ?? this.moment(), this.emitReply(t))
            }
            observeRenderedMessage(e, t) {
                let i = this.reply({
                    messageId: e,
                    self: !1
                }, !0);
                null != i && (i.availableAt = i.availableAt ?? this.moment(), this.recordLifecycleReceipt(i, i.availableAt), null == i.textCharacters && void 0 !== t && (i.textCharacters = v(t ?? "")), this.emitReply(i))
            }
            hasPendingReply(e) {
                return this.replies.has(e)
            }
            hasLifecycleCandidate(e) {
                let t = this.lifecycleReplies.get(e);
                return null != t && null == t.lifecycleRenderedAt
            }
            hasPendingLifecycleReply(e) {
                if (!this.active) return !1;
                let t = this.lifecycleReplies.get(e);
                if (null == t || null != t.lifecycleRenderedAt || t.lifecycleDeleted || null != t.identity.role && "user" !== t.identity.role || null != this.reactionSenderId && null != t.identity.accountUserId && t.identity.accountUserId !== this.reactionSenderId) return !1;
                for (let e of null == t.send ? this.lifecycleSends.values() : [t.send])
                    if (this.lifecycleSends.get(e.clientRequestId) === e && (null != t.send || null == t.identity.replyToMessageId || null == e.messageId) && performance.now() - e.startedAt < 3e5) return !0;
                return !1
            }
            subscribeLifecycleReply(e, t) {
                if (!this.hasLifecycleCandidate(e)) return () => {};
                let i = this.lifecycleListeners.get(e);
                return null == i && (i = new Set, this.lifecycleListeners.set(e, i)), i.add(t), () => {
                    i.delete(t), 0 === i.size && this.lifecycleListeners.get(e) === i && this.lifecycleListeners.delete(e)
                }
            }
            rendered(e) {
                if (!this.hasPendingLifecycleReply(e) || "visible" !== document.visibilityState) return;
                let t = this.lifecycleReplies.get(e);
                null != t && (t.lifecycleRenderedAt = this.moment(), this.emitLifecycleReply(t), this.notifyLifecycleReply(e))
            }
            hasPendingReaction(e) {
                let t = this.inputs.get(e.id),
                    i = this.reactionSenderId;
                return e.roomId === this.roomId && e.self && !e.deletedAt && t?.entryPoint === "messages" && !t.firstResponseRecorded && null != i && e.reactions.some(e => e.accountUserIds.includes(i))
            }
            reactionPaintOpportunity(e) {
                if (!this.hasPendingReaction(e) || !this.active || "visible" !== document.visibilityState) return;
                let t = this.inputs.get(e.id);
                null != t && this.firstResponse(t, "success", performance.now(), {
                    response_type: "reaction"
                })
            }
            paintOpportunity(e) {
                let t = this.replies.get(e);
                null != t && this.active && "visible" === document.visibilityState && (t.paintedAt = t.paintedAt ?? this.moment(), this.emitReply(t))
            }
            paintPreviewOpportunity(e) {
                let t = this.replies.get(e);
                null != t && "visible" === document.visibilityState && (t.paintedAt = t.paintedAt ?? this.moment(), this.emitReply(t))
            }
            subscription(e) {
                this.emit("client.subscription", e ? "success" : "aborted", {}, performance.now())
            }
            dispose() {
                this.views.clear();
                let e = new DOMException("Messaging session closed", "AbortError");
                for (let t of this.operations) t(e);
                for (let e of this.sends.values()) this.finish(e, "aborted", performance.now());
                for (let e of (this.inputs.clear(), this.replies.clear(), this.lifecycleSends.values())) this.expireLifecycle(e);
                this.lifecycleReplies.clear(), this.notifyLifecycleReplies()
            }
            associateInput(e, t) {
                for (let i of (e.messageId = t, this.inputs.set(t, e), this.replies.values())) i.identity.replyToMessageId === t && (i.send = e, this.retainLifecycleReply(i), this.emitReply(i));
                for (let i of this.lifecycleReplies.values()) i.identity.replyToMessageId === t && (i.send = e, this.emitLifecycleReply(i));
                this.notifyLifecycleReplies()
            }
            reply(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e.self || !e.replyToMessageId && !t || 0 === this.sends.size && 0 === this.lifecycleSends.size) return;
                let i = this.replies.get(e.messageId) ?? this.lifecycleReplies.get(e.messageId);
                if (null != i) return i.identity.role = e.role ?? i.identity.role, i.identity.accountUserId = e.accountUserId ?? i.identity.accountUserId, !i.identity.replyToMessageId && e.replyToMessageId && (i.identity = e, i.send = this.findSend(e.replyToMessageId)), this.retainLifecycleReply(i), this.notifyLifecycleReply(e.messageId), i;
                if (this.replies.size >= 64) {
                    let e = this.replies.keys().next().value;
                    null != e && (this.replies.delete(e), this.notifyLifecycleReply(e))
                }
                let s = {
                    identity: e,
                    send: e.replyToMessageId ? this.findSend(e.replyToMessageId) : void 0,
                    emitted: new Set
                };
                return this.sends.size > 0 && this.replies.set(e.messageId, s), this.lifecycleSends.size > 0 && this.retainLifecycleReply(s), this.notifyLifecycleReply(e.messageId), s
            }
            emitReply(e) {
                this.emitLifecycleReply(e);
                let t = e.send;
                if (null == t || this.sends.get(t.clientRequestId) !== t) return;
                let i = {
                    ...b(e.identity),
                    client_request_id: t.clientRequestId,
                    measurement_id: t.measurementId,
                    room_kind: t.roomKind,
                    input_text_characters: t.inputTextCharacters,
                    reply_text_characters: e.textCharacters,
                    entry_point: t.entryPoint
                };
                for (let [s, n] of [
                        ["client.pubsub_received", e.receivedAt],
                        ["client.message_available", e.availableAt],
                        ["client.message_committed", e.committedAt],
                        ["client.message_paint_opportunity", e.paintedAt]
                    ]) null == n || e.emitted.has(s) || (e.emitted.add(s), this.emit(s, "success", i, n.at, t.trace?.trace, t.startedAt, n));
                null != e.paintedAt && null != e.committedAt && this.finish(t, "success", e.paintedAt.at, i, e.paintedAt)
            }
            finish(e, t, i) {
                let s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    n = arguments.length > 4 ? arguments[4] : void 0;
                if (this.sends.get(e.clientRequestId) === e) {
                    for (let [l, r] of("success" !== t && this.expireLifecycle(e), this.lifecycleSends.get(e.clientRequestId) !== e && clearTimeout(e.timeout), "success" !== t && e.finishHttp(new DOMException("Message observation ended", "AbortError")), this.firstResponse(e, t, i, {
                            ...s,
                            response_type: "success" === t ? "reply" : void 0
                        }, n), this.emit("client.round_trip", t, {
                            measurement_id: e.measurementId,
                            room_kind: e.roomKind,
                            client_request_id: e.clientRequestId,
                            input_text_characters: e.inputTextCharacters,
                            entry_point: e.entryPoint,
                            message_id: e.messageId,
                            observation_interrupted: null != e.interruptedAt && e.interruptedAt <= i,
                            ...s
                        }, i, e.trace?.trace, e.startedAt, n), e.trace?.finish(void 0, {
                            outcome: "success" === t || "aborted" === t ? t : "failure",
                            reason: "success" === t ? null : t
                        }), this.sends.delete(e.clientRequestId), null != e.messageId && this.inputs.delete(e.messageId), this.replies)) r.send === e && this.replies.delete(l);
                    0 === this.sends.size && (document.removeEventListener("visibilitychange", this.visibilityChanged), this.replies.clear(), 0 === this.lifecycleSends.size && this.options.onPendingChange?.(!1)), this.notifyLifecycleReplies()
                }
            }
            tracksLifecycle(e) {
                return null != this.options.onLifecycle && "orbit" === this.options.surface && "dot" === e.roomKind
            }
            recordLifecycleReceipt(e, t, i) {
                null != this.options.onLifecycle && null == e.lifecycleReceipt && (e.lifecycleReceipt = {
                    moment: t,
                    source: i
                })
            }
            emitLifecycleReply(e) {
                let t = e.send;
                !(null == t || !this.tracksLifecycle(t) || !this.isLifecycleReply(e) || performance.now() - t.startedAt >= 3e5) && this.lifecycleSends.get(t.clientRequestId) === t && (null == e.lifecycleReceipt || e.lifecycleReceivedEmitted || (e.lifecycleReceivedEmitted = !0, this.emitLifecycle(t, "DOT_MESSAGE_LIFECYCLE_EVENT_TYPE_RECEIVE_MESSAGE", e.lifecycleReceipt.moment, e)), null == e.lifecycleRenderedAt || e.lifecycleRenderedEmitted || (e.lifecycleRenderedEmitted = !0, this.emitLifecycle(t, "DOT_MESSAGE_LIFECYCLE_EVENT_TYPE_RENDER_MESSAGE", e.lifecycleRenderedAt, e)))
            }
            emitLifecycle(e, t, i, s) {
                this.tracksLifecycle(e) && this.options.onLifecycle?.({
                    type: t,
                    observationId: e.measurementId,
                    roomId: this.roomId,
                    clientRequestId: e.clientRequestId,
                    inputMessageId: null == s ? void 0 : e.messageId,
                    replyMessageId: s?.identity.messageId,
                    elapsedMs: String(Math.max(0, Math.ceil(i.at - e.startedAt))),
                    isAppVisible: i.visible,
                    isActiveRoom: i.active,
                    deliverySource: s?.lifecycleReceipt?.source
                }, this.wallOrigin + i.at)
            }
            isLifecycleReply(e) {
                return !e.lifecycleDeleted && "user" === e.identity.role && null != this.reactionSenderId && e.identity.accountUserId === this.reactionSenderId
            }
            retainLifecycleReply(e) {
                if (0 !== this.lifecycleSends.size && (null == e.send || this.lifecycleSends.get(e.send.clientRequestId) === e.send) && (null != e.send || null == e.identity.replyToMessageId || [...this.lifecycleSends.values()].some(e => null == e.messageId)) && !this.lifecycleReplies.has(e.identity.messageId)) {
                    if (this.lifecycleReplies.size >= 64) {
                        let t = [...this.lifecycleReplies.values()].find(e => null == e.send);
                        if (null == t && null == e.send) return;
                        let i = t ?? this.lifecycleReplies.values().next().value;
                        null != i && (this.lifecycleReplies.delete(i.identity.messageId), null != i.send && this.expireLifecycle(i.send), this.notifyLifecycleReply(i.identity.messageId))
                    }
                    this.lifecycleSends.size > 0 && (null == e.send || this.lifecycleSends.get(e.send.clientRequestId) === e.send) && this.lifecycleReplies.set(e.identity.messageId, e)
                }
            }
            findSend(e) {
                let t = this.inputs.get(e);
                if (null != t) return t;
                for (let t of this.lifecycleSends.values())
                    if (t.messageId === e) return t
            }
            expireLifecycle(e) {
                if (this.lifecycleSends.get(e.clientRequestId) === e) {
                    for (let [t, i] of(this.lifecycleSends.delete(e.clientRequestId), this.lifecycleReplies))(i.send === e || 0 === this.lifecycleSends.size) && (this.lifecycleReplies.delete(t), this.notifyLifecycleReply(t));
                    this.sends.get(e.clientRequestId) !== e && clearTimeout(e.timeout), 0 === this.sends.size && 0 === this.lifecycleSends.size && this.options.onPendingChange?.(!1)
                }
            }
            notifyLifecycleReply(e) {
                for (let t of this.lifecycleListeners.get(e) ?? []) t();
                this.hasLifecycleCandidate(e) || this.lifecycleListeners.delete(e)
            }
            notifyLifecycleReplies() {
                for (let e of this.lifecycleListeners.keys()) this.notifyLifecycleReply(e)
            }
            firstResponse(e, t, i, s, n) {
                "messages" !== e.entryPoint || e.firstResponseRecorded || (e.firstResponseRecorded = !0, this.emit("client.first_response", t, {
                    measurement_id: e.measurementId,
                    room_kind: e.roomKind,
                    client_request_id: e.clientRequestId,
                    message_id: e.messageId,
                    input_text_characters: e.inputTextCharacters,
                    entry_point: e.entryPoint,
                    observation_interrupted: null != e.interruptedAt && e.interruptedAt <= i,
                    ...s
                }, i, e.trace?.trace, e.startedAt, n))
            }
            interruptObservations() {
                let e = performance.now();
                for (let t of this.sends.values()) t.interruptedAt = t.interruptedAt ?? e
            }
            operation(e, t, i) {
                var s = this;
                this.operations.size >= 64 && this.operations.values().next().value?.(new DOMException("Message observation capacity exceeded", "AbortError"));
                let n = performance.now(),
                    l = (0, p.e)({
                        name: `orbit.messaging.${e}`,
                        attributes: g(this.roomId, this.options.surface ?? "unknown", t),
                        trace: i
                    }),
                    r = {
                        ...t,
                        trace_id: l?.trace.traceparent.split("-")[1]
                    };
                this.emit(e, "started", r, n);
                let a = function(t) {
                        let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!s.operations.delete(a)) return;
                        clearTimeout(o);
                        let c = null == t ? "success" : _(t);
                        s.emit(e, c, {
                            ...r,
                            ...i
                        }, performance.now(), void 0, n), l?.finish(t)
                    },
                    o = setTimeout(() => {
                        a(new DOMException("Message observation timed out", "TimeoutError"))
                    }, 3e5);
                this.operations.add(a);
                let c = {};
                return null != l && (c.traceparent = l.trace.traceparent, null != l.trace.tracestate && (c.tracestate = l.trace.tracestate)), {
                    headers: c,
                    finish: a
                }
            }
            emit(e, t, i, s, n, l, r) {
                let a = null == l ? void 0 : Math.max(0, s - l),
                    o = "instant";
                null != l && (o = "client.round_trip" === e || "client.first_response" === e || "client.http_send" === e || "client.history_fetch" === e || "client.room_fetch" === e ? "duration" : "elapsed_since_send");
                let c = {
                        event: "orbit.messaging.stage",
                        surface: this.options.surface ?? "unknown",
                        stage: e,
                        outcome: t,
                        durationMs: a,
                        measurement: o,
                        clientTimestampMs: this.wallOrigin + s,
                        sessionActive: r?.active ?? this.active,
                        documentVisible: r?.visible ?? "visible" === document.visibilityState,
                        inputTextCharacters: i.input_text_characters,
                        replyTextCharacters: i.reply_text_characters,
                        entryPoint: i.entry_point,
                        responseType: i.response_type,
                        observationInterrupted: i.observation_interrupted,
                        measurementId: i.measurement_id,
                        serverRequestId: i.server_request_id,
                        roomKind: i.room_kind ?? this.roomKind,
                        isRetry: i.is_retry
                    },
                    d = g(this.roomId, c.surface, {
                        ...i,
                        trace_id: n?.traceparent.split("-")[1] ?? i.trace_id
                    });
                f.a.info("Orbit messaging stage", {
                    safe: c,
                    sensitive: {
                        roomId: this.roomId,
                        clientRequestId: i.client_request_id,
                        messageId: i.message_id,
                        replyToMessageId: i.reply_to_message_id,
                        traceId: d.trace_id
                    }
                }), this.options.onRecord?.(c);
                let u = `orbit.messaging.${e}`,
                    h = {
                        ...c,
                        ...d
                    };
                performance.clearMarks(u), performance.mark(u, {
                    startTime: s,
                    detail: h
                }), null != l && (performance.clearMeasures(u), performance.measure(u, {
                    start: l,
                    end: s,
                    detail: h
                })), null != n && (0, p.c)({
                    name: u,
                    trace: n,
                    attributes: {
                        stage: e,
                        outcome: t,
                        ...d
                    },
                    startTimeMs: this.wallOrigin + ("client.round_trip" === e || "client.first_response" === e ? l ?? s : s),
                    endTimeMs: this.wallOrigin + s,
                    failed: "failure" === t || "timeout" === t
                })
            }
            moment() {
                return {
                    at: performance.now(),
                    active: this.active,
                    visible: "visible" === document.visibilityState
                }
            }
        }

        function v(e) {
            let t = 0;
            for (let i of e) t++;
            return t
        }

        function g(e, t, i) {
            let s = {
                room_id: e,
                surface: t
            };
            for (let [e, t] of Object.entries(i)) null != t && (s[e] = t);
            return s
        }

        function b(e) {
            return {
                message_id: e.messageId,
                client_request_id: e.clientRequestId || void 0,
                reply_to_message_id: e.replyToMessageId || void 0
            }
        }

        function _(e) {
            if (e instanceof Error || e instanceof DOMException) {
                if ("AbortError" === e.name) return "aborted";
                if ("TimeoutError" === e.name) return "timeout"
            }
            return e instanceof m.a && e.deliveryUnknown ? "delivery_unknown" : "failure"
        }
        let R = (0, s.j)(a.a, e => new w(e));

        function I(e, t, i) {
            return e.get(R, i).get(e, t)
        }
        class w {
            surface;
            identityKey = null;
            rooms = new Map;
            pendingRooms = new Set;
            stopWatching;
            stopSubscription;
            constructor(e) {
                this.surface = e
            }
            get(e, t) {
                let {
                    accountId: i,
                    userId: s,
                    accountUserId: a,
                    roomId: h
                } = t, m = JSON.stringify([i, s, a]);
                if (this.identityKey !== m) {
                    this.dispose(), this.identityKey = m;
                    let t = e.watch(e => {
                        let {
                            get: t
                        } = e;
                        (t(l.f) !== i || t(l.k) !== s) && this.dispose()
                    });
                    this.identityKey === m ? this.stopWatching = t : t()
                }
                let p = this.rooms.get(h);
                if (null != p) return p;
                let f = (0, n.c)(e),
                    v = new y(h, {
                        surface: this.surface,
                        onLifecycle: (t, n) => {
                            try {
                                if (e.get(l.f) !== i || e.get(l.k) !== s) return;
                                let r = (0, u.c)(),
                                    a = r?.trim();
                                (0, d.a)(e, c, {
                                    ...t,
                                    client: {
                                        type: "DOT_MESSAGE_LIFECYCLE_CLIENT_TYPE_WEB",
                                        version: "" === a || "dev" === a || "browser-dev" === a || "development" === a || "0.0.0" === a ? void 0 : a
                                    }
                                }, void 0, void 0, {
                                    expectedUserId: s,
                                    expectedAccountId: i,
                                    eventCreatedAt: new Date(n).toISOString()
                                })
                            } catch {}
                        },
                        onRecord: t => {
                            "orbit" === this.surface && function(e, t) {
                                if ("client.first_response" !== t.stage && "client.round_trip" !== t.stage || "started" === t.outcome) return;
                                let i = {
                                    stage: t.stage,
                                    outcome: t.outcome,
                                    entry_point: t.entryPoint ?? "unknown",
                                    observation_interrupted: String(t.observationInterrupted ?? !1)
                                };
                                e.count("default", "orbit.messaging.client.response_result", i), null != t.durationMs && e.hist("default", "orbit.messaging.client.response_duration_ms", i, t.durationMs)
                            }(f, t), e.get(o.a).log({
                                message: "Orbit messaging stage",
                                status: "info",
                                context: {
                                    event: t.event,
                                    surface: t.surface,
                                    stage: t.stage,
                                    outcome: t.outcome,
                                    measurement: t.measurement,
                                    durationMs: t.durationMs,
                                    clientTimestampMs: t.clientTimestampMs,
                                    sessionActive: t.sessionActive,
                                    documentVisible: t.documentVisible,
                                    inputTextCharacters: t.inputTextCharacters,
                                    replyTextCharacters: t.replyTextCharacters,
                                    entryPoint: t.entryPoint,
                                    responseType: t.responseType,
                                    observationInterrupted: t.observationInterrupted,
                                    measurementId: t.measurementId,
                                    serverRequestId: t.serverRequestId,
                                    roomKind: t.roomKind,
                                    isRetry: t.isRetry
                                }
                            })
                        },
                        onPendingChange: e => {
                            this.rooms.get(h) === v && (e ? this.pendingRooms.add(h) : this.pendingRooms.delete(h), 0 === this.pendingRooms.size ? (this.stopSubscription?.(), this.stopSubscription = void 0) : null == this.stopSubscription && (this.stopSubscription = (0, r.a)({
                                accountId: i,
                                userId: s,
                                onUpdate: () => {},
                                onMessageReceived: (e, t, i) => {
                                    null != t.id && this.pendingRooms.has(e) && this.rooms.get(e)?.received(e, {
                                        messageId: t.id,
                                        clientRequestId: t.request_id,
                                        replyToMessageId: t.reply_to?.message_id,
                                        role: t.role,
                                        accountUserId: t.account_user_id,
                                        self: "user" === t.role && t.account_user_id === a
                                    }, i)
                                }
                            })))
                        }
                    }),
                    g = [...this.rooms.values()].filter(e => e.idle).length;
                for (let [e, t] of this.rooms) t.idle && g >= 64 && (t.dispose(), this.rooms.delete(e), g--);
                return this.rooms.set(h, v), v
            }
            dispose() {
                this.identityKey = null, this.stopWatching?.(), this.stopWatching = void 0, this.stopSubscription?.(), this.stopSubscription = void 0, this.pendingRooms.clear();
                let e = [...this.rooms.values()];
                for (let t of (this.rooms.clear(), e)) t.dispose()
            }
        }
    }),
    tPd1: (function(e, t, i) {
        var s = i("iTtm"),
            n = i("TL6G"),
            l = i("liTb"),
            r = i("OWtl"),
            a = i("WFY2");
        let o = (0, s.u)(r.a, !1),
            c = (0, s.u)(r.a, () => null),
            d = (0, s.u)(r.a, () => null);

        function u(e, t) {
            let {
                source: i = "request"
            } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            a.a.info("Opening Orbit from Mini in the desktop app"), n.c.dispatchMessage("open-in-main-window", {
                path: (0, l.f)(t),
                appEntryAttribution: "header" === i ? {
                    channel: "shortcut",
                    source: "shortcut"
                } : void 0
            }), "request" === i && e.get(c)?.run()
        }
        i.d(t, {
            d: () => u
        }, {
            a: d,
            b: c,
            c: o
        })
    })
};