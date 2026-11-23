export const __rspack_esm_ids = [990214];
export const __webpack_modules__ = {
    M0nI: (function(a, b) {
        b.a = {
            summary: "summary-fnAD_7",
            execDescendants: "execDescendants-d8xS36"
        }
    }),
    tmkO: (function(a, b, c) {
        var d = c("lAQI");
        let e = "update_up_next",
            f = d.K({
                status: d.L().trim().min(1).max(200).nullable(),
                history_summary: d.L().trim().min(1).max(300).optional()
            });
        c.d(b, {}, {
            a: e,
            b: function(a) {
                let b = f.safeParse(a);
                return b.success ? b.data.status : void 0
            },
            c: function(a, b) {
                return ("codex_app" === a || null == a) && b === e
            }
        })
    }),
    MFk9: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("wD9O"),
            i = c("nMdB"),
            j = c("HBzQ"),
            k = c("JGoU"),
            l = c("M0nI");
        c.d(b, {}, {
            a: function(a) {
                let b, c, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B = (0, e.c)(39);
                B[0] !== a ? ({
                    accessory: b,
                    body: c,
                    className: m,
                    disclosure: n,
                    externalDisclosure: o,
                    headerClassName: p,
                    icon: q,
                    summary: s,
                    ...r
                } = a, B[0] = a, B[1] = b, B[2] = c, B[3] = m, B[4] = n, B[5] = o, B[6] = p, B[7] = q, B[8] = r, B[9] = s) : (b = B[1], c = B[2], m = B[3], n = B[4], o = B[5], p = B[6], q = B[7], r = B[8], s = B[9]);
                let C = (0, g.useId)(),
                    D = (0, h.c)(),
                    E = n ?? o;
                B[10] !== E || B[11] !== D ? (t = a => {
                    (0, i.a)(a.currentTarget, D), E?.onToggle(a)
                }, B[10] = E, B[11] = D, B[12] = t) : t = B[12];
                let F = t,
                    G = null == E ? void 0 : C,
                    H = null != E && "[@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:[--agent-activity-summary-color:var(--color-text)]";
                B[13] !== H ? (u = (0, f.b)("min-w-0 flex-1 truncate [&_*:not(button)]:!text-(--agent-activity-summary-color)", l.a.summary, H), B[13] = H, B[14] = u) : u = B[14], B[15] !== s || B[16] !== G || B[17] !== u ? (v = (0, d.jsx)("span", {
                    id: G,
                    className: u,
                    children: s
                }), B[15] = s, B[16] = G, B[17] = u, B[18] = v) : v = B[18], B[19] !== q || B[20] !== v ? (w = (0, d.jsxs)(d.Fragment, {
                    children: [q, v]
                }), B[19] = q, B[20] = v, B[21] = w) : w = B[21];
                let I = w;
                B[22] !== c || B[23] !== n || B[24] !== o || B[25] !== F || B[26] !== C ? (x = n ? {
                    disclosure: {
                        ...n,
                        labelledBy: C,
                        onToggle: F
                    }
                } : {
                    body: c,
                    externalDisclosure: o && {
                        ...o,
                        labelledBy: C,
                        onToggle: F
                    }
                }, B[22] = c, B[23] = n, B[24] = o, B[25] = F, B[26] = C, B[27] = x) : x = B[27];
                let J = x;
                return B[28] !== p ? (y = (0, f.b)("max-w-full", p), B[28] = p, B[29] = y) : y = B[29], B[30] !== b || B[31] !== I || B[32] !== J || B[33] !== y ? (z = (0, d.jsx)(j.a, {
                    ...J,
                    accessory: b,
                    className: y,
                    children: I
                }), B[30] = b, B[31] = I, B[32] = J, B[33] = y, B[34] = z) : z = B[34], B[35] !== m || B[36] !== r || B[37] !== z ? (A = (0, d.jsx)(k.a, {
                    ...r,
                    className: m,
                    children: z
                }), B[35] = m, B[36] = r, B[37] = z, B[38] = A) : A = B[38], A
            }
        })
    }),
    A7Ss: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("IPUh"),
            h = c("T1PX"),
            i = c("V8uZ");
        c.d(b, {}, {
            a: function(a) {
                let b, c, j, k, l = (0, e.c)(15),
                    {
                        expanded: m,
                        height: n,
                        onExpandComplete: o,
                        children: p
                    } = a,
                    q = (0, h.a)(),
                    r = m ? n : 0,
                    s = +!!m;
                l[0] !== r || l[1] !== s ? (b = {
                    height: r,
                    opacity: s
                }, l[0] = r, l[1] = s, l[2] = b) : b = l[2], l[3] !== q ? (c = q ? {
                    duration: 0
                } : i.a, l[3] = q, l[4] = c) : c = l[4];
                let t = !m,
                    u = !m,
                    v = m ? "overflow-visible" : "pointer-events-none overflow-hidden";
                l[5] !== v ? (j = (0, f.b)("motion-reduce:h-auto! motion-reduce:aria-hidden:h-0! motion-reduce:opacity-100! motion-reduce:aria-hidden:opacity-0!", v), l[5] = v, l[6] = j) : j = l[6];
                let w = m ? o : void 0;
                return l[7] !== p || l[8] !== b || l[9] !== c || l[10] !== t || l[11] !== u || l[12] !== j || l[13] !== w ? (k = (0, d.jsx)(g.a.div, {
                    initial: !1,
                    animate: b,
                    transition: c,
                    "aria-hidden": t,
                    inert: u,
                    className: j,
                    onAnimationComplete: w,
                    children: p
                }), l[7] = p, l[8] = b, l[9] = c, l[10] = t, l[11] = u, l[12] = j, l[13] = w, l[14] = k) : k = l[14], k
            }
        })
    }),
    K5Kt: (function(a, b, c) {
        c.d(b, {
            a: () => h
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("QmNX");

        function h(a) {
            let b, c, h, i, j, k, l, m = (0, e.c)(15);
            m[0] !== a ? ({
                ref: h,
                className: b,
                indent: i,
                variant: j,
                ...c
            } = a, m[0] = a, m[1] = b, m[2] = c, m[3] = h, m[4] = i, m[5] = j) : (b = m[1], c = m[2], h = m[3], i = m[4], j = m[5]);
            let n = void 0 === j ? "default" : j,
                o = (void 0 !== i && i || "steps" === n) && "indented-NdDHUk",
                p = "steps" === n && "steps-SF26rj",
                q = "default" === n && "pt-3";
            return m[6] !== b || m[7] !== o || m[8] !== p || m[9] !== q ? (k = (0, f.b)(o, p, q, b), m[6] = b, m[7] = o, m[8] = p, m[9] = q, m[10] = k) : k = m[10], m[11] !== c || m[12] !== h || m[13] !== k ? (l = (0, d.jsx)(g.a, {
                spacing: "activity",
                ref: h,
                className: k,
                ...c
            }), m[11] = c, m[12] = h, m[13] = k, m[14] = l) : l = m[14], l
        }
    }),
    HBzQ: (function(a, b, c) {
        c.d(b, {
            a: () => l,
            b: () => m
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("zd8w"),
            h = c("dUfi"),
            i = c("pnPL");

        function j(a) {
            let b, c, g = (0, e.c)(4),
                {
                    expanded: h
                } = a,
                j = h && "rotate-90 opacity-100";
            return g[0] !== j ? (b = (0, f.b)("icon-2xs shrink-0 text-tertiary opacity-0 group-focus-visible/activity-header:opacity-100 group-focus-visible/activity-header:text-default group-has-[:focus-visible]/activity-header:opacity-100 group-has-[:focus-visible]/activity-header:text-default transition-transform duration-relaxed [@media(hover:hover)]:group-[:hover:not(:has([data-agent-activity-file-link]:hover))]/activity-header:opacity-100", j), g[0] = j, g[1] = b) : b = g[1], g[2] !== b ? (c = (0, d.jsx)(i.a, {
                "aria-hidden": !0,
                className: b
            }), g[2] = b, g[3] = c) : c = g[3], c
        }
        var k = c("dqpP");

        function l(a) {
            let b, c, f, g, i, j, k, l = (0, e.c)(15);
            l[0] !== a ? ({
                body: b,
                disclosure: c,
                externalDisclosure: f,
                ...g
            } = a, l[0] = a, l[1] = b, l[2] = c, l[3] = f, l[4] = g) : (b = l[1], c = l[2], f = l[3], g = l[4]);
            let n = c?.details,
                o = c ?? f;
            return l[5] !== g || l[6] !== o ? (i = (0, d.jsx)(m, {
                ...g,
                externalDisclosure: o
            }), l[5] = g, l[6] = o, l[7] = i) : i = l[7], l[8] !== b || l[9] !== n || l[10] !== c ? (j = null == c ? b : (0, d.jsx)(h.a, {
                expanded: c.expanded,
                className: c.bodyClassName,
                children: "function" == typeof n ? c.expanded && n() : n
            }), l[8] = b, l[9] = n, l[10] = c, l[11] = j) : j = l[11], l[12] !== i || l[13] !== j ? (k = (0, d.jsxs)(d.Fragment, {
                children: [i, j]
            }), l[12] = i, l[13] = j, l[14] = k) : k = l[14], k
        }

        function m(a) {
            let b, c, h, i, l, m, n, o = (0, e.c)(21),
                {
                    accessory: p,
                    children: q,
                    className: r,
                    externalDisclosure: s
                } = a,
                t = (0, g.useId)(),
                u = null == s ? void 0 : t,
                v = null != s && "pointer-events-none relative [&_a]:pointer-events-auto [&_button]:pointer-events-auto";
            o[0] !== v ? (b = (0, f.b)("shrink truncate text-size-chat", v), o[0] = v, o[1] = b) : b = o[1], o[2] !== q || o[3] !== u || o[4] !== b ? (c = (0, d.jsx)(k.a, {
                id: u,
                className: b,
                children: q
            }), o[2] = q, o[3] = u, o[4] = b, o[5] = c) : c = o[5], o[6] !== s ? (h = null == s ? null : (0, d.jsx)("span", {
                className: (0, f.b)("pointer-events-none relative flex", s.alignEnd && "ms-auto"),
                children: (0, d.jsx)(j, {
                    expanded: s.expanded
                })
            }), o[6] = s, o[7] = h) : h = o[7], o[8] !== p || o[9] !== c || o[10] !== h ? (i = (0, d.jsxs)(d.Fragment, {
                children: [c, p, h]
            }), o[8] = p, o[9] = c, o[10] = h, o[11] = i) : i = o[11];
            let w = i;
            o[12] !== r ? (l = (0, f.b)("group/activity-header relative inline-flex min-w-0 max-w-full self-start items-center gap-1 p-0 text-start", r), o[12] = r, o[13] = l) : l = o[13];
            let x = l;
            return o[14] !== s || o[15] !== t ? (m = null == s ? null : (0, d.jsx)("button", {
                type: "button",
                className: "absolute inset-0 cursor-interaction rounded-md bg-transparent focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:outline-none focus-visible:ring-inset",
                "aria-label": s.accessibleLabel,
                "aria-labelledby": null == s.accessibleLabel ? s.labelledBy ?? t : void 0,
                "aria-expanded": s.expanded,
                onClick: s.onToggle
            }), o[14] = s, o[15] = t, o[16] = m) : m = o[16], o[17] !== w || o[18] !== x || o[19] !== m ? (n = (0, d.jsxs)("div", {
                className: x,
                children: [m, w]
            }), o[17] = w, o[18] = x, o[19] = m, o[20] = n) : n = o[20], n
        }
    }),
    dqpP: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57");
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i, j, k = (0, e.c)(12);
                k[0] !== a ? ({
                    ref: g,
                    className: b,
                    align: h,
                    ...c
                } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = g, k[4] = h) : (b = k[1], c = k[2], g = k[3], h = k[4]);
                let l = "center" === (void 0 === h ? "center" : h) ? "items-center" : "items-start";
                return k[5] !== b || k[6] !== l ? (i = (0, f.b)("inline-flex min-w-0 gap-2 align-top", l, b), k[5] = b, k[6] = l, k[7] = i) : i = k[7], k[8] !== c || k[9] !== g || k[10] !== i ? (j = (0, d.jsx)("span", {
                    ref: g,
                    className: i,
                    ...c
                }), k[8] = c, k[9] = g, k[10] = i, k[11] = j) : j = k[11], j
            }
        })
    }),
    JGoU: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("q5qu");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h, i, j, k = (0, e.c)(10);
                return k[0] !== a ? ({
                    className: c,
                    children: b,
                    ...h
                } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = h) : (b = k[1], c = k[2], h = k[3]), k[4] !== c ? (i = (0, f.b)("flex min-w-0 flex-col", c), k[4] = c, k[5] = i) : i = k[5], k[6] !== b || k[7] !== h || k[8] !== i ? (j = (0, d.jsx)(g.a, {
                    padding: "offset",
                    children: (0, d.jsx)("div", {
                        ...h,
                        className: i,
                        children: b
                    })
                }), k[6] = b, k[7] = h, k[8] = i, k[9] = j) : j = k[9], j
            }
        })
    }),
    cKhh: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("zd8w"),
            g = c("A7Ss"),
            h = c("wbOy"),
            i = c("ltPT"),
            j = c("MFk9"),
            k = c("K5Kt");
        c.d(b, {}, {
            a: function(a) {
                let b, c, l, m, n, o, p, q = (0, e.c)(34),
                    {
                        defaultExpanded: r,
                        indentContent: s,
                        icon: t,
                        onExpand: u,
                        summary: v,
                        status: w,
                        children: x,
                        unmountOnCollapse: y
                    } = a,
                    z = void 0 === s || s,
                    A = void 0 !== y && y,
                    [B, C] = (0, f.useState)(!1),
                    [D, E] = (0, f.useState)(void 0 !== r && r),
                    {
                        elementHeightPx: F,
                        elementRef: G
                    } = (0, i.a)(),
                    H = "running" === w,
                    I = null != x,
                    J = I && (H ? !B : D);
                q[0] !== B || q[1] !== D || q[2] !== J || q[3] !== H || q[4] !== u ? (b = () => {
                    J || u?.(), H ? C(!B) : E(!D)
                }, q[0] = B, q[1] = D, q[2] = J, q[3] = H, q[4] = u, q[5] = b) : b = q[5];
                let K = b;
                q[6] !== H || q[7] !== v ? (c = (0, d.jsx)(h.a, {
                    active: H,
                    className: "min-w-0 truncate text-size-chat text-text-tertiary/90 group-hover/activity-header:text-default",
                    children: v
                }), q[6] = H, q[7] = v, q[8] = c) : c = q[8];
                let L = c;
                q[9] !== K || q[10] !== I || q[11] !== J ? (l = I ? {
                    expanded: J,
                    onToggle: K
                } : void 0, q[9] = K, q[10] = I, q[11] = J, q[12] = l) : l = q[12];
                let M = l,
                    N = A ? void 0 : G;
                q[13] !== x || q[14] !== z || q[15] !== N ? (m = (0, d.jsx)(k.a, {
                    ref: N,
                    indent: z,
                    children: x
                }), q[13] = x, q[14] = z, q[15] = N, q[16] = m) : m = q[16];
                let O = m;
                q[17] !== t || q[18] !== L ? (n = {
                    icon: t,
                    summary: L
                }, q[17] = t, q[18] = L, q[19] = n) : n = q[19];
                let P = n;
                if (A || null == M) {
                    let a, b;
                    return q[20] !== O || q[21] !== M ? (a = M && {
                        ...M,
                        details: O
                    }, q[20] = O, q[21] = M, q[22] = a) : a = q[22], q[23] !== P || q[24] !== a ? (b = (0, d.jsx)(j.a, {
                        ...P,
                        disclosure: a
                    }), q[23] = P, q[24] = a, q[25] = b) : b = q[25], b
                }
                q[26] !== O || q[27] !== F || q[28] !== J ? (o = (0, d.jsx)(g.a, {
                    expanded: J,
                    height: F,
                    children: O
                }), q[26] = O, q[27] = F, q[28] = J, q[29] = o) : o = q[29];
                let Q = o;
                return q[30] !== Q || q[31] !== M || q[32] !== P ? (p = (0, d.jsx)(j.a, {
                    ...P,
                    body: Q,
                    externalDisclosure: M
                }), q[30] = Q, q[31] = M, q[32] = P, q[33] = p) : p = q[33], p
            }
        })
    }),
    Sgcz: (function(a, b, c) {
        let d = (0, (c("Qgfj")).f)({
            actionSummaryEditingFile: {
                id: "localConversation.automaticApprovalReview.actionSummary.editingFile",
                defaultMessage: "Editing {file}"
            },
            actionSummaryEditingFiles: {
                id: "localConversation.automaticApprovalReview.actionSummary.editingFiles",
                defaultMessage: "Editing {fileCount, plural, one {a file} other {# files}}"
            },
            actionSummaryMcpToolCall: {
                id: "localConversation.automaticApprovalReview.actionSummary.mcpToolCall",
                defaultMessage: "MCP {toolName} on {connector}"
            },
            actionSummaryNetworkAccess: {
                id: "localConversation.automaticApprovalReview.actionSummary.networkAccess",
                defaultMessage: "Network access to {target}"
            },
            actionSummaryPermissionRequest: {
                id: "localConversation.automaticApprovalReview.actionSummary.permissionRequest",
                defaultMessage: "Permission request"
            },
            actionSummaryPermissionRequestWithReason: {
                id: "localConversation.automaticApprovalReview.actionSummary.permissionRequestWithReason",
                defaultMessage: "Permission request: {reason}"
            },
            summaryInProgress: {
                id: "localConversation.automaticApprovalReview.summary.inProgress",
                defaultMessage: "Checking whether this action can proceed"
            },
            summaryAborted: {
                id: "localConversation.automaticApprovalReview.summary.aborted",
                defaultMessage: "Auto-review ended without a decision"
            },
            summaryTimedOut: {
                id: "localConversation.automaticApprovalReview.summary.timedOut",
                defaultMessage: "Auto-review couldn\u2019t reach a decision in time"
            },
            summaryApproved: {
                id: "localConversation.automaticApprovalReview.summary.approved",
                defaultMessage: "This action was approved"
            },
            summaryDenied: {
                id: "localConversation.automaticApprovalReview.summary.denied",
                defaultMessage: "This action wasn\u2019t approved"
            },
            summaryDeniedHighRisk: {
                id: "localConversation.automaticApprovalReview.summary.deniedHighRisk",
                defaultMessage: "This action wasn\u2019t approved because it was assessed as high risk"
            },
            titleInProgress: {
                id: "localConversation.automaticApprovalReview.title.inProgress",
                defaultMessage: "Auto-reviewing"
            },
            titleApproved: {
                id: "localConversation.automaticApprovalReview.title.approved",
                defaultMessage: "Auto-review approved"
            },
            titleDenied: {
                id: "localConversation.automaticApprovalReview.title.denied",
                defaultMessage: "Auto-review denied"
            },
            titleDeniedHighRisk: {
                id: "localConversation.automaticApprovalReview.title.deniedHighRisk",
                defaultMessage: "Auto-review denied high risk"
            },
            titleTimedOut: {
                id: "localConversation.automaticApprovalReview.title.timedOut",
                defaultMessage: "Auto-review timed out"
            },
            titleAborted: {
                id: "localConversation.automaticApprovalReview.title.aborted",
                defaultMessage: "Auto-review stopped"
            },
            actionSummaryRequest: {
                id: "localConversation.automaticApprovalReview.actionSummary.request",
                defaultMessage: "Request"
            }
        });
        c.d(b, {}, {
            a: function(a, b) {
                if (null == b) return a.formatMessage(d.actionSummaryRequest);
                switch (b.type) {
                    case "command":
                        return b.command;
                    case "execve":
                        return [b.program, ...b.argv].join(" ");
                    case "writeStdin":
                        return a.formatMessage({
                            id: "localConversation.automaticApprovalReview.actionSummary.writeStdin",
                            defaultMessage: "Send input to process {processId}: {stdin}"
                        }, {
                            processId: b.processId,
                            stdin: b.stdin
                        });
                    case "applyPatch":
                        if (1 === b.files.length) return a.formatMessage(d.actionSummaryEditingFile, {
                            file: b.files[0]
                        });
                        return a.formatMessage(d.actionSummaryEditingFiles, {
                            fileCount: b.files.length
                        });
                    case "networkAccess":
                        return a.formatMessage(d.actionSummaryNetworkAccess, {
                            target: b.target
                        });
                    case "mcpToolCall":
                        return a.formatMessage(d.actionSummaryMcpToolCall, {
                            toolName: b.toolName,
                            connector: b.connectorName ?? b.server
                        });
                    case "requestPermissions":
                        return null == b.reason ? a.formatMessage(d.actionSummaryPermissionRequest) : a.formatMessage(d.actionSummaryPermissionRequestWithReason, {
                            reason: b.reason
                        })
                }
            },
            b: function(a, b) {
                return null != b.rationale && b.rationale.trim().length > 0 ? b.rationale.trim() : "inProgress" === b.status ? a.formatMessage(d.summaryInProgress) : "aborted" === b.status ? a.formatMessage(d.summaryAborted) : "timedOut" === b.status ? a.formatMessage(d.summaryTimedOut) : "denied" === b.status ? "high" === b.riskLevel ? a.formatMessage(d.summaryDeniedHighRisk) : a.formatMessage(d.summaryDenied) : "approved" === b.status ? a.formatMessage(d.summaryApproved) : ""
            },
            c: function(a, b) {
                switch (b.status) {
                    case "inProgress":
                        return a.formatMessage(d.titleInProgress);
                    case "approved":
                        return a.formatMessage(d.titleApproved);
                    case "denied":
                        if ("high" === b.riskLevel) return a.formatMessage(d.titleDeniedHighRisk);
                        return a.formatMessage(d.titleDenied);
                    case "timedOut":
                        return a.formatMessage(d.titleTimedOut);
                    case "aborted":
                        return a.formatMessage(d.titleAborted)
                }
            },
            d: function(a) {
                return "declined" === ("exec" === a.type ? a.executionStatus : a.status) && a.automaticApprovalReviews?.some(a => "denied" === a.status) === !0
            }
        })
    }),
    NQNw: (function(a, b, c) {
        var d = c("K0rn"),
            e = c("XSLO"),
            f = c("Sgcz"),
            g = c("qYBv"),
            h = c("t7eZ"),
            i = c("Z2lA"),
            j = c("acby");

        function k(a, b) {
            return {
                item: a,
                grouping: b
            }
        }

        function l(a) {
            let b = a.automaticApprovalReviews;
            if (null == b) return a;
            let c = b.filter(a => "approved" !== a.status);
            if (c.length > 0 && c.length === b.length) return a;
            let {
                automaticApprovalReviews: d,
                ...e
            } = a;
            return 0 === c.length ? e : {
                ...e,
                automaticApprovalReviews: c
            }
        }
        c.d(b, {}, {
            a: function(a) {
                let {
                    dynamicToolCallRenderer: b,
                    includeGeneratedImages: c = !1,
                    mcpServerStatuses: e
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                switch (a.type) {
                    case "external-event":
                        return k(a, "groupable");
                    case "exec":
                    case "patch":
                        return k(l(a), (0, f.d)(a) ? "standalone" : "groupable");
                    case "mcp-tool-call":
                        return k(l(a), (0, h.a)(a) || (0, g.b)({
                            item: a,
                            mcpServerStatuses: e
                        }) ? "standalone" : "groupable");
                    case "web-search":
                        return 0 === a.query.trim().length ? null : k(a, "groupable");
                    case "dynamic-tool-call": {
                        let c = b ?? (0, j.c)(a);
                        if (c?.hiddenInConversation === !0) return null;
                        return k(a, c?.standaloneInConversation === !0 ? "standalone" : "groupable")
                    }
                    case "generated-image":
                        return c ? k(a, "standalone") : null;
                    case "image-view":
                    case "multi-agent-action":
                    case "subagent-activity":
                        return k(a, "standalone");
                    case "mcp-server-elicitation":
                        if (!a.completed || "unsupportedOpenAIForm" === a.elicitation.kind) return null;
                        return k(a, "legacyOpenAIForm" === a.elicitation.kind && Object.values(a.elicitation.schema.properties).some(d.b) ? "groupable" : "standalone");
                    case "automatic-approval-review":
                        switch (a.status) {
                            case "approved":
                                return null;
                            case "inProgress":
                                return k(a, "groupable");
                            case "aborted":
                            case "denied":
                            case "timedOut":
                                return k(a, "standalone")
                        }
                    case "dil-reasoning":
                    case "assistant-message":
                    case "auto-review-interruption-warning":
                    case "context-compaction":
                    case "realtime-transcript":
                    case "stream-error":
                    case "strict-review-notice":
                    case "system-error":
                    case "user-input-response":
                    case "user-message":
                    case "browser-card":
                    case "worked-for":
                    case "worktree-init":
                        return k(a, "standalone");
                    case "reasoning":
                    case "automation-update":
                    case "forked-from-conversation":
                    case "model-changed":
                    case "model-rerouted":
                    case "permission-request":
                    case "personality-changed":
                    case "plan-implementation":
                    case "proposed-plan":
                    case "remote-task-created":
                    case "todo-list":
                    case "turn-diff":
                    case "userInput":
                    case "steered":
                        return null
                }
            },
            b: function(a) {
                return "exec" === a.type && "read" === a.parsedCmd.type && (0, e.c)((0, i.a)({
                    summary: a.parsedCmd,
                    cwd: a.cwd
                }))
            }
        })
    }),
    QmNX: (function(a, b, c) {
        c.d(b, {
            a: () => g
        });
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57");

        function g(a) {
            let b, c, g, h, i, j, k = (0, e.c)(14);
            k[0] !== a ? ({
                as: g,
                className: b,
                spacing: h,
                ...c
            } = a, k[0] = a, k[1] = b, k[2] = c, k[3] = g, k[4] = h) : (b = k[1], c = k[2], g = k[3], h = k[4]);
            let l = void 0 === g ? "div" : g,
                m = void 0 === h ? "item" : h,
                n = "custom" === m ? void 0 : m,
                o = "item" === m && "gap-4",
                p = "activity" === m && "gap-3";
            return k[5] !== b || k[6] !== o || k[7] !== p ? (i = (0, f.b)("flex flex-col", "stack-eQ550z", o, p, b), k[5] = b, k[6] = o, k[7] = p, k[8] = i) : i = k[8], k[9] !== l || k[10] !== c || k[11] !== n || k[12] !== i ? (j = (0, d.jsx)(l, {
                ...c,
                "data-spacing": n,
                className: i
            }), k[9] = l, k[10] = c, k[11] = n, k[12] = i, k[13] = j) : j = k[13], j
        }
    }),
    acby: (function(a, b, c) {
        c.d(b, {
            a: () => ah,
            b: () => ak,
            c: () => ag,
            d: () => ai,
            e: () => aj
        });
        var d = c("fceG"),
            e = c("ABep"),
            f = c("on57"),
            g = c("JGl5"),
            h = c("PFi3"),
            i = c("oyxz"),
            j = c("dqpP"),
            k = c("HOLv"),
            l = c("Bbed"),
            m = c("wbOy"),
            n = c("cB2o");
        let o = (0, l.a)(() => Promise.all([c.e(418851), c.e(109308), c.e(399565), c.e(257798), c.e(447351), c.e(617936), c.e(807489), c.e(337882), c.e(955979), c.e(646436), c.e(7078), c.e(200429), c.e(698524), c.e(956483), c.e(87162), c.e(396705), c.e(155568), c.e(731863), c.e(767086), c.e(76629), c.e(241266)]).then(c.bind(c, "wHJ7")).then(a => a.EnvironmentSetupPrototypeResultCard)),
            p = [g.a, null].map(a => ({
                namespace: a,
                render: q,
                renderAgentActivityIcon: () => (0, e.jsx)(k.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: n.a
                }),
                standaloneInConversation: !0,
                tool: h.b
            }));

        function q(a, b, c) {
            let d, g = h.f.safeParse(a.arguments);
            return g.success ? "row" === b && a.completed && !1 !== a.success ? (0, e.jsx)(o, {
                details: g.data
            }) : (d = a.completed ? !1 === a.success ? (0, e.jsx)(i.a, {
                id: "restricted.environmentSetup.result.failed",
                defaultMessage: "Couldn\u2019t prepare environment draft"
            }) : (0, e.jsx)(i.a, {
                id: "restricted.environmentSetup.result.completed",
                defaultMessage: "Prepared environment draft"
            }) : (0, e.jsx)(i.a, {
                id: "restricted.environmentSetup.result.finalizing",
                defaultMessage: "Preparing environment draft"
            }), (0, e.jsxs)(j.a, {
                className: (0, f.b)("text-size-chat text-text/40", "row" === b ? "group-hover:text-default" : "group-hover/activity-header:text-default"),
                children: ["summary-text" !== b ? c ?? (0, e.jsx)(k.a, {
                    className: "shrink-0 text-text/60",
                    "aria-hidden": !1,
                    asset: n.a
                }) : null, (0, e.jsx)(m.a, {
                    active: !a.completed,
                    children: d
                })]
            })) : null
        }
        var r = c("KvQL"),
            s = c("bVzl"),
            t = c("MCYz"),
            u = c("lAQI"),
            v = c("TL6G"),
            w = c("MFk9"),
            x = c("DYB3"),
            y = c("IIsu"),
            z = c("xLft");
        let A = u.F({
                destinationHostId: u.L().min(1).optional(),
                threadId: u.L().min(1)
            }),
            B = u.F({
                operationId: u.L().min(1)
            }),
            C = u.F({
                threadId: u.L().min(1)
            }),
            D = [{
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.h
            }, {
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.d
            }, {
                getCompletedSummaryPartKey: function(a) {
                    let b = A.safeParse(a.arguments);
                    return b.success ? JSON.stringify([b.data.threadId, b.data.destinationHostId ?? null]) : null
                },
                namespace: g.a,
                render: function(a, b, c) {
                    return A.safeParse(a.arguments).success ? (0, e.jsx)(z.a, {
                        agentActivityIcon: c,
                        item: a,
                        variant: b
                    }) : null
                },
                renderAgentActivityIcon: E,
                standaloneInConversation: !0,
                tool: s.c
            }, {
                getCompletedSummaryPartKey: function(a) {
                    let b = B.safeParse(a.arguments);
                    return b.success ? b.data.operationId : null
                },
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                summaryOnlyInConversationGroup: !0,
                tool: s.b
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.p
            }, {
                continuesLiveActivityBetweenCalls: !0,
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.r
            }, {
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.t
            }, {
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.x
            }, {
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.v
            }, {
                namespace: g.a,
                render: F,
                renderAgentActivityIcon: E,
                tool: t.B
            }];

        function E(a) {
            return (0, x.c)(a)?.icon ?? null
        }

        function F(a, b, c) {
            var d;
            let g, h, k = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                l = (0, x.c)(a, k);
            if (null == l) return null;
            let n = a.tool === t.d && a.completed && !0 === a.success && "row" === b ? (d = a.contentItems ?? null, null == (g = d?.find(a => "inputText" === a.type)?.text) ? null : (0, r.Oj)(g)) : null,
                o = "row" === b && (a.tool === t.r || a.tool === t.t) ? C.safeParse(a.arguments) : null,
                p = o?.success === !0 ? o.data.threadId : null;
            null != n ? h = a => (0, y.a)(a, n) : null != p && (h = () => {
                let a = (0, r.Xe)(p);
                v.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: (0, r.he)(a)
                })
            });
            let q = "row" === b && void 0 !== c,
                s = q ? "summary-text" : b,
                u = (0, e.jsxs)(j.a, {
                    className: (0, f.b)("text-size-chat", "row" === s ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                    children: ["summary-text" !== s ? E(a) : null, (0, e.jsx)(m.a, {
                        active: !a.completed,
                        className: (0, f.b)("summary-text" !== s && "min-w-0 truncate", null != h && "group-hover:!text-default"),
                        children: (0, e.jsx)(i.a, {
                            ...l.message,
                            values: l.values
                        })
                    })]
                }),
                z = null == h ? u : (0, e.jsx)("button", {
                    type: "button",
                    className: "group max-w-full cursor-interaction rounded-md text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    onClick: h,
                    children: u
                });
            return q ? (0, e.jsx)(w.a, {
                icon: c,
                summary: z
            }) : z
        }
        let G = D.filter(a => {
            let {
                tool: b
            } = a;
            return "create_thread" === b
        }).map(a => ({
            ...a,
            namespace: null
        }));
        var H = c("tmkO");
        let I = [g.a, null].map(a => ({
            namespace: a,
            tool: H.a,
            hiddenInConversation: !0
        }));
        var J = c("ScoF"),
            K = c("Y3sT"),
            L = c("uWou"),
            M = c("JEy9");
        let N = {
                namespace: g.a,
                tool: K.b,
                getActivityMessage: (a, b) => (0, L.a)({
                    tool: a.tool,
                    toolArguments: a.arguments,
                    completed: a.completed,
                    isLeadingSummaryPart: b
                }),
                renderAgentActivityIcon: (a, b) => (0, M.b)(a.tool, a.arguments, b),
                getCompletedSummaryPartKey: a => (0, L.a)({
                    tool: a.tool,
                    toolArguments: a.arguments,
                    completed: !0
                })?.id ?? null
            },
            O = [N, {
                ...N,
                tool: J.b
            }, {
                ...N,
                tool: "read_artifact"
            }];
        var P = c("Tbby"),
            Q = c("QosV"),
            R = c("T0Rc"),
            S = c("Qgfj"),
            T = c("C2tN"),
            U = c("d9Qn");

        function V(a) {
            let b, c, d, g, h, k, l = (0, Q.c)(25),
                {
                    item: n,
                    isLeadingSummaryPart: o,
                    tabId: p,
                    variant: q,
                    agentActivityIcon: r
                } = a,
                s = void 0 === o || o,
                {
                    data: t
                } = X(n, p),
                u = t?.faviconUrl ?? null,
                v = t?.title ?? null;
            if (null != v) {
                let a;
                l[0] !== s || l[1] !== n.completed || l[2] !== v ? (a = n.completed ? (0, e.jsx)(i.a, {
                    ...s ? Y.completedWithTitle : Y.completedWithTitleFollowing,
                    values: {
                        title: v
                    }
                }) : (0, e.jsx)(i.a, {
                    ...Y.activeWithTitle,
                    values: {
                        title: v
                    }
                }), l[0] = s, l[1] = n.completed, l[2] = v, l[3] = a) : a = l[3], b = a
            } else {
                let a;
                l[4] !== s || l[5] !== n.completed ? (a = n.completed ? (0, e.jsx)(i.a, {
                    ...s ? Y.completed : Y.completedFollowing
                }) : (0, e.jsx)(i.a, {
                    ...Y.active
                }), l[4] = s, l[5] = n.completed, l[6] = a) : a = l[6], b = a
            }
            let x = !n.completed,
                y = "summary-text" !== q && "min-w-0 truncate";
            l[7] !== y ? (c = (0, f.b)(y), l[7] = y, l[8] = c) : c = l[8], l[9] !== b || l[10] !== x || l[11] !== c ? (d = (0, e.jsx)(m.a, {
                active: x,
                className: c,
                children: b
            }), l[9] = b, l[10] = x, l[11] = c, l[12] = d) : d = l[12];
            let z = d;
            if ("row" === q && void 0 !== r) {
                let a;
                return l[13] !== r || l[14] !== z ? (a = (0, e.jsx)(w.a, {
                    icon: r,
                    summary: z
                }), l[13] = r, l[14] = z, l[15] = a) : a = l[15], a
            }
            let A = "row" === q ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default";
            return l[16] !== A ? (g = (0, f.b)("text-size-chat", A), l[16] = A, l[17] = g) : g = l[17], l[18] !== u || l[19] !== q ? (h = "summary-text" !== q && null != u ? (0, e.jsx)(U.a, {
                src: u,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }) : null, l[18] = u, l[19] = q, l[20] = h) : h = l[20], l[21] !== z || l[22] !== g || l[23] !== h ? (k = (0, e.jsxs)(j.a, {
                className: g,
                children: [h, z]
            }), l[21] = z, l[22] = g, l[23] = h, l[24] = k) : k = l[24], k
        }

        function W(a) {
            let b, c = (0, Q.c)(2),
                {
                    item: d,
                    tabId: f
                } = a,
                {
                    data: g
                } = X(d, f);
            return c[0] !== g ? (b = g?.faviconUrl == null ? null : (0, e.jsx)(U.a, {
                src: g.faviconUrl,
                className: "icon-xs text-tertiary",
                showFallbackWhileLoading: !1
            }), c[0] = g, c[1] = b) : b = c[1], b
        }

        function X(a, b) {
            let c, d, e, f = (0, Q.c)(9),
                g = !a.completed;
            return f[0] !== b ? (c = () => (async function(a) {
                let b = (0, T.a)();
                if (b?.tabs == null) return null;
                try {
                    let c = await b.tabs.get(a);
                    return {
                        faviconUrl: function(a, b) {
                            let c = a.favIconUrl?.trim();
                            if (null == c || 0 === c.length) return null;
                            let d = (a.url ?? a.pendingUrl ?? "").trim();
                            if (0 === d.length || null == b) return c;
                            try {
                                let a = new URL(b.getURL("/_favicon/"));
                                return a.searchParams.set("pageUrl", d), a.searchParams.set("size", "32"), a.toString()
                            } catch {
                                return c
                            }
                        }(c, b.runtime),
                        title: c.title?.trim() || null
                    }
                } catch {
                    return null
                }
            })(b), f[0] = b, f[1] = c) : c = f[1], f[2] !== a.callId || f[3] !== b ? (d = ["chrome-tab-context-tool-call-metadata", a.callId, b], f[2] = a.callId, f[3] = b, f[4] = d) : d = f[4], f[5] !== g || f[6] !== c || f[7] !== d ? (e = {
                enabled: g,
                queryFn: c,
                queryKey: d,
                staleTime: 1 / 0
            }, f[5] = g, f[6] = c, f[7] = d, f[8] = e) : e = f[8], (0, R.a)(e)
        }
        let Y = (0, S.f)({
                completedWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle",
                    defaultMessage: 'Read "{title}"'
                },
                completedWithTitleFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completedWithTitle.following",
                    defaultMessage: 'read "{title}"'
                },
                activeWithTitle: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.activeWithTitle",
                    defaultMessage: 'Reading "{title}"'
                },
                completed: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed",
                    defaultMessage: "Read tab"
                },
                completedFollowing: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.completed.following",
                    defaultMessage: "read tab"
                },
                active: {
                    id: "localConversation.chromeExtensionToolCall.getTabContext.active",
                    defaultMessage: "Reading tab"
                }
            }),
            Z = u.K({
                tabId: u.E().int().nonnegative()
            }),
            $ = [{
                getCompletedSummaryPartKey: function(a) {
                    return Z.safeParse(a.arguments).success ? a.callId : null
                },
                namespace: "chrome_extension",
                render: function(a, b, c) {
                    let d = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                        f = Z.safeParse(a.arguments);
                    return f.success ? (0, e.jsx)(V, {
                        item: a,
                        isLeadingSummaryPart: d,
                        tabId: f.data.tabId,
                        variant: b,
                        agentActivityIcon: c
                    }) : null
                },
                renderAgentActivityIcon: function(a) {
                    let b = Z.safeParse(a.arguments);
                    return b.success ? (0, e.jsx)(W, {
                        item: a,
                        tabId: b.data.tabId
                    }) : null
                },
                tool: P.b
            }];
        var _ = c("YZPM"),
            aa = c("jW5x");
        let ab = u.F({
                config: u.F({})
            }),
            ac = [{
                namespace: g.a,
                render: ae,
                renderAgentActivityIcon: ad,
                tool: _.b
            }, {
                namespace: g.a,
                render: ae,
                renderAgentActivityIcon: ad,
                tool: _.d
            }];

        function ad() {
            return (0, e.jsx)(k.a, {
                className: "shrink-0 text-text/60",
                "aria-hidden": !1,
                asset: aa.a
            })
        }

        function ae(a, b, c) {
            let d = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3],
                g = (0, x.c)(a, d);
            if (null == g) return null;
            let h = !a.completed && a.tool === _.d && ab.safeParse(a.arguments).success ? (0, e.jsx)(i.a, {
                id: "localConversation.settingsToolCall.write.waitingForApproval",
                defaultMessage: "Waiting for approval"
            }) : (0, e.jsx)(i.a, {
                ...g.message,
                values: g.values
            });
            return "row" === b && void 0 !== c ? (0, e.jsx)(w.a, {
                icon: c,
                summary: (0, e.jsx)(m.a, {
                    active: !a.completed,
                    className: "min-w-0 truncate",
                    children: h
                })
            }) : (0, e.jsxs)(j.a, {
                className: (0, f.b)("text-size-chat", "row" === b ? "text-text-tertiary/90" : "text-text/40 group-hover/activity-header:text-default"),
                children: ["summary-text" !== b ? ad() : null, (0, e.jsx)(m.a, {
                    active: !a.completed,
                    className: (0, f.b)("summary-text" !== b && "min-w-0 truncate"),
                    children: h
                })]
            })
        }
        let af = [...$, ...D, ...G, ...p, ...ac, ...I, ...O];

        function ag(a) {
            return af.find(b => b.namespace === a.namespace && b.tool === a.tool)
        }

        function ah(a) {
            return ag(a)?.continuesLiveActivityBetweenCalls === !0
        }

        function ai(a) {
            return (0, d.d)(a.namespace, a.tool)
        }

        function aj(a) {
            return ag(a)?.summaryOnlyInConversationGroup === !0
        }

        function ak(a) {
            let b = (0, x.c)(a),
                c = ag(a)?.getCompletedSummaryPartKey?.(a);
            return `${a.namespace}:${a.tool}:${c??""}:${b?.key??""}`
        }
    }),
    IIsu: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("jAnS");
        c("Ot7V");
        var f = c("TL6G");
        c.d(b, {}, {
            a: function(a, b) {
                let c;
                "chatgpt" === b.kind ? c = (0, e.c)("clientThreadId" in b ? b.clientThreadId : b.threadId) : "clientThreadId" in b ? c = (0, d.he)(b.clientThreadId) : c = (0, d.he)((0, d.Xe)(b.threadId)), f.c.dispatchHostMessage({
                    type: "navigate-to-route",
                    path: c
                })
            }
        })
    }),
    xLft: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("Q840"),
            h = c("oyxz"),
            i = c("lAQI"),
            j = c("f5n5"),
            k = c("eeyJ"),
            l = c("dqpP"),
            m = c("cKhh"),
            n = c("J0Jr"),
            o = c("DYB3"),
            p = c("wbOy");
        let q = i.F({
            destinationHostDisplayName: i.L().min(1),
            operationId: i.L().min(1),
            status: i.p(["queued", "running", "success", "warning", "error"]),
            threadTitle: i.L().min(1)
        });

        function r(a) {
            let b, c, f = (0, e.c)(10),
                {
                    operation: g
                } = a;
            f[0] !== g ? (b = (0, d.jsx)(s, {
                operation: g
            }), f[0] = g, f[1] = b) : b = f[1];
            let i = b;
            if ("queued" === g.status || "running" === g.status) {
                let a;
                return f[2] !== i ? (a = (0, d.jsx)(h.a, {
                    id: "localConversation.threadHandoff.inline.active",
                    defaultMessage: "Handing off to {destination}",
                    values: {
                        destination: i
                    }
                }), f[2] = i, f[3] = a) : a = f[3], a
            }
            if ("error" === g.status) {
                let a;
                return f[4] !== i ? (a = (0, d.jsx)(h.a, {
                    id: "localConversation.threadHandoff.inline.failed",
                    defaultMessage: "Failed to hand off to {destination}",
                    values: {
                        destination: i
                    }
                }), f[4] = i, f[5] = a) : a = f[5], a
            }
            if ("warning" === g.status) {
                let a;
                return f[6] !== i ? (a = (0, d.jsx)(h.a, {
                    id: "localConversation.threadHandoff.inline.warning",
                    defaultMessage: "Handoff to {destination} needs attention",
                    values: {
                        destination: i
                    }
                }), f[6] = i, f[7] = a) : a = f[7], a
            }
            return f[8] !== i ? (c = (0, d.jsx)(h.a, {
                id: "localConversation.threadHandoff.inline.completed",
                defaultMessage: "Handed off to {destination}",
                values: {
                    destination: i
                }
            }), f[8] = i, f[9] = c) : c = f[9], c
        }

        function s(a) {
            let b, c = (0, e.c)(4),
                {
                    operation: f
                } = a;
            if ("to-local" === f.direction) {
                let a;
                return c[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    id: "localConversation.threadHandoff.inline.destination.local",
                    defaultMessage: "local"
                }), c[0] = a) : a = c[0], a
            }
            if ("to-worktree" === f.direction) {
                let a;
                return c[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                    id: "localConversation.threadHandoff.inline.destination.worktree",
                    defaultMessage: "worktree"
                }), c[1] = a) : a = c[1], a
            }
            return c[2] !== f.request.destinationLabel ? (b = (0, d.jsx)(d.Fragment, {
                children: f.request.destinationLabel
            }), c[2] = f.request.destinationLabel, c[3] = b) : b = c[3], b
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, i, s, t = (0, e.c)(25),
                    {
                        agentActivityIcon: u,
                        item: v,
                        operation: w,
                        variant: x
                    } = a,
                    y = null != v && v.completed && !0 === v.success ? function(a) {
                        let b = a?.find(a => "inputText" === a.type)?.text;
                        if (null == b) return null;
                        try {
                            let a = JSON.parse(b),
                                c = q.safeParse(a);
                            return c.success ? c.data : null
                        } catch {
                            return null
                        }
                    }(v.contentItems ?? null) : null,
                    z = null == w ? y?.operationId ?? v.callId : w.id,
                    A = (0, g.x)(j.a, z),
                    B = w ?? A,
                    C = null == B ? null == y ? v?.completed ?? !1 : (0, j.b)(y.status) : (0, j.b)(B.status),
                    D = null == B ? v?.success : "error" !== B.status && ("success" === B.status || "warning" === B.status),
                    E = "running";
                C && (E = !1 === D ? "failed" : "completed"), t[0] !== v ? (b = null == v ? null : (0, o.c)(v), t[0] = v, t[1] = b) : b = t[1];
                let F = b;
                t[2] !== F?.icon ? (c = F?.icon ?? (0, d.jsx)(n.a, {
                    className: "icon-xs shrink-0 text-text/60"
                }), t[2] = F?.icon, t[3] = c) : c = t[3];
                let G = c,
                    H = null;
                if (null != F) {
                    let a;
                    t[4] !== F.message || t[5] !== F.values ? (a = (0, d.jsx)(h.a, {
                        ...F.message,
                        values: F.values
                    }), t[4] = F.message, t[5] = F.values, t[6] = a) : a = t[6], H = a
                } else if (null != w) {
                    let a;
                    t[7] !== w ? (a = (0, d.jsx)(r, {
                        operation: w
                    }), t[7] = w, t[8] = a) : a = t[8], H = a
                }
                if ("row" !== x) {
                    let a, b, c, e = "summary-text" !== x ? G : null,
                        g = null == v ? !C : !v.completed,
                        h = "summary-text" !== x && "min-w-0 truncate";
                    return t[9] !== h ? (a = (0, f.b)(h), t[9] = h, t[10] = a) : a = t[10], t[11] !== H || t[12] !== g || t[13] !== a ? (b = (0, d.jsx)(p.a, {
                        active: g,
                        className: a,
                        children: H
                    }), t[11] = H, t[12] = g, t[13] = a, t[14] = b) : b = t[14], t[15] !== e || t[16] !== b ? (c = (0, d.jsxs)(l.a, {
                        className: "text-size-chat text-text/40 group-hover/activity-header:text-default",
                        children: [e, b]
                    }), t[15] = e, t[16] = b, t[17] = c) : c = t[17], c
                }
                let I = u ?? G;
                return t[18] !== B ? (i = B?.steps.map(a => (0, d.jsx)(k.a, {
                    compact: !0,
                    direction: B.direction,
                    localBranch: B.localBranch,
                    sourceBranch: B.sourceBranch,
                    step: a,
                    worktreeBranch: B.worktreeBranch
                }, a.id)), t[18] = B, t[19] = i) : i = t[19], t[20] !== E || t[21] !== H || t[22] !== I || t[23] !== i ? (s = (0, d.jsx)(m.a, {
                    indentContent: !1,
                    icon: I,
                    status: E,
                    summary: H,
                    children: i
                }), t[20] = E, t[21] = H, t[22] = I, t[23] = i, t[24] = s) : s = t[24], s
            }
        })
    }),
    qYBv: (function(a, b, c) {
        var d = c("nQiX"),
            e = c("KJ1J"),
            f = c("Sgjw"),
            g = c("W10I"),
            h = c("xSzB"),
            i = c("acxW");

        function j(a) {
            let {
                item: b,
                mcpServerStatuses: c
            } = a;
            if (!0 === b.isMcpAppWidgetSuperseded || b.completed && null == b.result) return "not-mcp-app";
            if ((0, f.a)(b)?.type === "chatgpt-automation") return "mcp-app";
            let d = b.result?.type === "success" ? b.result.raw : null;
            return null != b.mcpAppResourceUri || null != (0, g.c)({
                mcpServerStatuses: c,
                server: b.invocation.server,
                tool: b.invocation.tool,
                toolResult: d
            }) ? "mcp-app" : null == d ? "not-mcp-app" : null == c ? "maybe-mcp-app" : "not-mcp-app"
        }

        function k(a) {
            let {
                appContext: b,
                result: c
            } = a;
            return a.completed && b?.linkId != null && c?.type === "success" && !0 !== a.isMcpAppWidgetSuperseded && (0, e.f)(a.invocation.server) ? (0, d.b)(b.connectorId, b.actionName, () => (0, i.a)({
                isCodexAppsServer: !0,
                result: c
            }) ? null : (0, h.i)({
                isCodexAppsServer: !0,
                toolResult: c.raw
            }).structuredContent) : null
        }
        c.d(b, {}, {
            a: k,
            b: function(a) {
                let {
                    item: b,
                    mcpServerStatuses: c
                } = a;
                return null != k(b) || "mcp-app" === j({
                    item: b,
                    mcpServerStatuses: c
                }) && !(0, i.a)({
                    isCodexAppsServer: (0, e.f)(b.invocation.server),
                    result: b.result
                })
            },
            c: function(a) {
                let {
                    item: b,
                    mcpServerStatuses: c
                } = a;
                return "not-mcp-app" !== j({
                    item: b,
                    mcpServerStatuses: c
                }) && !(0, i.a)({
                    isCodexAppsServer: (0, e.f)(b.invocation.server),
                    result: b.result
                })
            },
            d: function(a) {
                return a.some(a => "item" === a.kind && "mcp-tool-call" === a.item.type && (a.item.result?.type === "success" || !a.item.completed && null == a.item.result && null == a.item.mcpAppResourceUri))
            }
        })
    }),
    t7eZ: (function(a, b, c) {
        var d = c("fceG");
        c.d(b, {}, {
            a: function(a) {
                return a.result?.type === "error" && (0, d.c)(a.result.error)
            }
        })
    }),
    eeyJ: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("oyxz"),
            g = c("DFZG");
        c.d(b, {}, {
            a: function(a) {
                let b, c, h = (0, e.c)(10),
                    {
                        compact: i,
                        direction: j,
                        localBranch: k,
                        sourceBranch: l,
                        step: m,
                        worktreeBranch: n
                    } = a,
                    o = void 0 !== i && i,
                    p = m.status;
                return h[0] !== j || h[1] !== k || h[2] !== l || h[3] !== m.id || h[4] !== n ? (b = function(a, b, c, e, g) {
                    if ("rolling-back-changes" === a) return (0, d.jsx)(f.a, {
                        id: "localConversation.threadHandoff.step.rollingBackChanges",
                        defaultMessage: "Rolling back changes"
                    });
                    switch (a) {
                        case "prepare-host-transfer":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.prepareHostTransfer",
                                defaultMessage: "Preparing files for transfer"
                            });
                        case "transfer-host-artifacts":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.transferHostArtifacts",
                                defaultMessage: "Copying files to the destination host"
                            });
                        case "create-new-worktree":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.createNewWorktree",
                                defaultMessage: "Creating a new worktree"
                            });
                        case "reuse-existing-worktree":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.reuseExistingWorktree",
                                defaultMessage: "Reusing the existing worktree"
                            });
                        case "stash-source-changes":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.stashSourceChanges",
                                defaultMessage: "Stashing uncommitted changes"
                            });
                        case "checkout-local-branch":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.checkoutLocalBranch",
                                defaultMessage: "Checking out {branch} locally",
                                values: {
                                    branch: c ?? e
                                }
                            });
                        case "stash-target-worktree-changes":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.stashTargetWorktreeChanges",
                                defaultMessage: "Stashing worktree changes"
                            });
                        case "checkout-worktree-branch":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.checkoutWorktreeBranch",
                                defaultMessage: "Checking out {branch} in worktree",
                                values: {
                                    branch: g ?? e
                                }
                            });
                        case "detach-worktree-branch":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.detachWorktreeBranch",
                                defaultMessage: "Detaching branch from worktree"
                            });
                        case "apply-changes-to-worktree":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.applyChangesToWorktree",
                                defaultMessage: "Applying uncommitted changes to worktree"
                            });
                        case "apply-changes-to-local":
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.applyChangesToLocal",
                                defaultMessage: "Applying uncommitted changes locally"
                            });
                        case "switching-thread":
                            if ("to-worktree" === b) return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.moveThreadToWorktree",
                                defaultMessage: "Moving chat to worktree"
                            });
                            if ("to-host-worktree" === b) return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.moveThreadToHostWorktree",
                                defaultMessage: "Moving chat to the destination worktree"
                            });
                            return (0, d.jsx)(f.a, {
                                id: "localConversation.threadHandoff.step.moveThreadToLocal",
                                defaultMessage: "Moving chat to local"
                            })
                    }
                }(m.id, j, k, l, n), h[0] = j, h[1] = k, h[2] = l, h[3] = m.id, h[4] = n, h[5] = b) : b = h[5], h[6] !== o || h[7] !== m.status || h[8] !== b ? (c = (0, d.jsx)(g.a, {
                    compact: o,
                    status: p,
                    children: b
                }), h[6] = o, h[7] = m.status, h[8] = b, h[9] = c) : c = h[9], c
            }
        })
    }),
    DFZG: (function(a, b, c) {
        var d = c("ABep"),
            e = c("QosV"),
            f = c("on57"),
            g = c("oyxz"),
            h = c("HOLv"),
            i = c("RNul"),
            j = c("mtsg"),
            k = c("ZXKF"),
            l = c("YBfV");

        function m(a) {
            let b, c, g, m = (0, e.c)(9),
                {
                    compact: n,
                    status: o
                } = a;
            switch (o) {
                case "running": {
                    let a;
                    m[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(i.a, {
                        className: "icon-xs"
                    }), m[0] = a) : a = m[0], b = a;
                    break
                }
                case "done": {
                    let a;
                    m[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                        "aria-hidden": !1,
                        asset: j.a
                    }), m[1] = a) : a = m[1], b = a;
                    break
                }
                case "failed": {
                    let a;
                    m[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                        className: "text-danger",
                        "aria-hidden": !1,
                        asset: l.a
                    }), m[2] = a) : a = m[2], b = a;
                    break
                }
                case "pending": {
                    let a;
                    m[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(h.a, {
                        "aria-hidden": !1,
                        asset: k.a
                    }), m[3] = a) : a = m[3], b = a
                }
            }
            let p = !n && "text-secondary";
            return m[4] !== p ? (c = (0, f.b)("flex h-4 w-4 shrink-0 items-center justify-center", p), m[4] = p, m[5] = c) : c = m[5], m[6] !== b || m[7] !== c ? (g = (0, d.jsx)("span", {
                "aria-hidden": !0,
                className: c,
                children: b
            }), m[6] = b, m[7] = c, m[8] = g) : g = m[8], g
        }

        function n(a) {
            let b = (0, e.c)(4),
                {
                    status: c
                } = a;
            switch (c) {
                case "running": {
                    let a;
                    return b[0] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(g.a, {
                        id: "progressStep.status.running",
                        defaultMessage: "In progress:"
                    }), b[0] = a) : a = b[0], a
                }
                case "done": {
                    let a;
                    return b[1] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(g.a, {
                        id: "progressStep.status.done",
                        defaultMessage: "Completed:"
                    }), b[1] = a) : a = b[1], a
                }
                case "failed": {
                    let a;
                    return b[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(g.a, {
                        id: "progressStep.status.failed",
                        defaultMessage: "Failed:"
                    }), b[2] = a) : a = b[2], a
                }
                case "pending": {
                    let a;
                    return b[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, d.jsx)(g.a, {
                        id: "progressStep.status.pending",
                        defaultMessage: "Pending:"
                    }), b[3] = a) : a = b[3], a
                }
            }
        }
        c.d(b, {}, {
            a: function(a) {
                let b, c, g, h, i, j, k, l = (0, e.c)(23),
                    {
                        children: o,
                        compact: p,
                        status: q
                    } = a,
                    r = void 0 !== p && p,
                    s = r ? "gap-2" : "gap-3";
                l[0] !== r || l[1] !== q ? (b = r && {
                    "text-info": "running" === q || "done" === q,
                    "text-danger": "failed" === q,
                    "text-tertiary": "pending" === q
                }, l[0] = r, l[1] = q, l[2] = b) : b = l[2], l[3] !== s || l[4] !== b ? (c = (0, f.b)("flex items-center", s, b), l[3] = s, l[4] = b, l[5] = c) : c = l[5], l[6] !== r || l[7] !== q ? (g = (0, d.jsx)(m, {
                    compact: r,
                    status: q
                }), l[6] = r, l[7] = q, l[8] = g) : g = l[8];
                let t = r ? "text-size-chat" : "text-base leading-6 tracking-[-0.13px]";
                return l[9] !== r || l[10] !== q || l[11] !== t ? (h = (0, f.b)(t, !r && {
                    "font-medium text-default": "running" === q,
                    "text-default": "done" === q,
                    "text-danger": "failed" === q,
                    "text-codex-description": "pending" === q
                }), l[9] = r, l[10] = q, l[11] = t, l[12] = h) : h = l[12], l[13] !== q ? (i = (0, d.jsx)("span", {
                    className: "sr-only",
                    children: (0, d.jsx)(n, {
                        status: q
                    })
                }), l[13] = q, l[14] = i) : i = l[14], l[15] !== o || l[16] !== h || l[17] !== i ? (j = (0, d.jsxs)("div", {
                    className: h,
                    children: [i, o]
                }), l[15] = o, l[16] = h, l[17] = i, l[18] = j) : j = l[18], l[19] !== c || l[20] !== g || l[21] !== j ? (k = (0, d.jsxs)("div", {
                    className: c,
                    children: [g, j]
                }), l[19] = c, l[20] = g, l[21] = j, l[22] = k) : k = l[22], k
            }
        })
    }),
    Z2lA: (function(a, b, c) {
        var d = c("bnxy"),
            e = c("ivPw"),
            f = c("pNUK");

        function g(a) {
            let {
                summary: b,
                cwd: c
            } = a, d = function(a) {
                let {
                    summary: b,
                    cwd: c
                } = a;
                switch (b.type) {
                    case "read":
                        return h({
                            path: b.path ?? b.name,
                            cwd: c
                        });
                    case "list_files":
                    case "search":
                        if (!b.path) return null;
                        return h({
                            path: b.path,
                            cwd: c
                        })
                }
            }({
                summary: b,
                cwd: c
            });
            return d ? (0, f.a)(d) : null
        }

        function h(a) {
            let {
                path: b,
                cwd: c
            } = a;
            if (!b) return null;
            let f = (0, e.a)(b);
            return 0 === f.length ? null : null != c ? (0, e.a)((0, d.s)(c, f)) : f
        }
        c.d(b, {}, {
            a: g,
            b: function(a) {
                let {
                    summary: b,
                    cwd: c
                } = a;
                return g({
                    summary: b,
                    cwd: c
                })?.isSkillDefinitionFile === !0
            }
        })
    }),
    ExvJ: (function(a, b, c) {
        var d = c("SZCv"),
            e = c.n(d),
            f = c("i5ac"),
            g = c.n(f),
            h = c("WG0D"),
            i = c.n(h),
            j = c("I3F6"),
            k = c("te2R"),
            l = c("tmkO"),
            m = c("Sgjw"),
            n = c("MJjm"),
            o = c("NQNw");
        let p = new Set(["mcp-tool-call", "patch", "web-search", "image-view", "multi-agent-action", "context-compaction", "dil-reasoning", "worked-for", "automatic-approval-review"]);

        function q(a, b) {
            return w(a) && "async" !== a.delivery && null == a.requestUserInputAsync && b?.(a) !== !0
        }

        function r(a) {
            return a.content.trim().length > 0 || !0 === a.isSkippedCompletion || null != a.structuredOutput
        }

        function s(a, b, c) {
            return "complete" === b && q(a, c) && "commentary" !== a.phase && a.completed && null == a.externalDelivery && null == a.nativeMessage && !a.memoryCitation?.entries.some(a => {
                let {
                    path: b
                } = a;
                return b.trim().length > 0
            }) && !r(a)
        }

        function t(a) {
            return a?.type === "exec" || a?.type === "dynamic-tool-call"
        }
        let u = a => "patch" === a.type && null != a.approvalRequestId && null == a.success,
            v = a => "exec" === a.type && null != a.approvalRequestId && a.output?.exitCode === void 0,
            w = a => a?.type === "assistant-message",
            x = a => {
                let b = [];
                for (;;) {
                    let c = a[a.length - 1];
                    if (c?.type !== "automatic-approval-review") break;
                    a.pop(), b.push(c)
                }
                return b.reverse()
            },
            y = a => "exec" === a.type || "patch" === a.type || "mcp-tool-call" === a.type ? "exec" === a.type ? a.commandExecutionItemId ?? a.callId : a.callId : null,
            z = a => {
                switch (a.elicitation.kind) {
                    case "userVerification":
                    case "browserAuth":
                    case "formElicitation":
                    case "openaiForm":
                    case "legacyOpenAIForm":
                    case "generic":
                    case "urlAction":
                        return a.elicitation.serverName.trim() || null;
                    case "mcpToolCall":
                        return a.elicitation.approval.connector_id;
                    case "connectorAuth":
                        return a.elicitation.connector.connector_id;
                    case "toolSuggestion":
                    case "unsupportedOpenAIForm":
                        return null
                }
            };
        c.d(b, {}, {
            a: function(a, b, c) {
                let d, {
                        shouldExcludeFromFinalSlot: f,
                        hostId: h,
                        hideCuaTitles: w,
                        browserPlacementItemId: A,
                        redundantBrowserCallIds: B,
                        includeUpNext: C = "latest" === c
                    } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    D = null,
                    E = null,
                    F = [],
                    G = null,
                    H = null,
                    I = null,
                    J = null,
                    K = [],
                    L = [],
                    M = new Set,
                    N = [],
                    O = null,
                    P = [],
                    Q = new Map,
                    R = [],
                    S = [],
                    T = [],
                    U = [],
                    V = [],
                    W = [],
                    X = [],
                    Y = !1,
                    Z = null,
                    $ = new Set,
                    _ = new Set,
                    aa = null;
                for (let d of a) {
                    if ("user-message" === d.type && null != d.heartbeatTrigger || !Y && "user-message" === d.type) {
                        F.push(d);
                        continue
                    }
                    if (Y = Y || "worktree-init" !== d.type, "latest" === c || C) {
                        if (C && "dynamic-tool-call" === d.type && (0, l.c)(d.namespace, d.tool) && d.completed && !0 === d.success) {
                            let a = (0, l.b)(d.arguments);
                            void 0 !== a && (aa = null == a ? null : {
                                type: "up-next-status",
                                content: a
                            }, Z = null)
                        }
                        if ("latest" === c && "assistant-message" === d.type) {
                            let a = r(d);
                            if ("commentary" === d.phase && "async" !== d.delivery && null == d.requestUserInputAsync) {
                                N.push(d), $.add(d), (!d.completed || a) && (Z = d);
                                continue
                            }("async" === d.delivery || null != d.requestUserInputAsync || "final_answer" === d.phase && a) && (Z = null)
                        } else("user-message" === d.type && "not-sent" !== d.deliveryStatus && !0 !== d.hookFeedback && null == d.heartbeatTrigger && null == d.codexDelegation || "realtime-transcript" === d.type && d.entries.some(a => {
                            let {
                                role: b
                            } = a;
                            return "user" === b
                        })) && (aa = null, null != Z && $.delete(Z), Z = null)
                    }
                    if ("turn-diff" === d.type && (G = d), "todo-list" === d.type && (H = d), "proposed-plan" === d.type) {
                        I = d;
                        continue
                    }
                    if ("remote-task-created" === d.type && T.push(d), "personality-changed" === d.type && U.push(d), "forked-from-conversation" === d.type && V.push(d), "model-changed" === d.type) {
                        W.push(d);
                        continue
                    }
                    if ("model-rerouted" === d.type) {
                        X.push(d);
                        continue
                    }
                    if ("plan-implementation" === d.type) {
                        J = d;
                        continue
                    }
                    if ("mcp-server-elicitation" === d.type) {
                        if (!0 === d.completed) {
                            "unsupportedOpenAIForm" !== d.elicitation.kind && N.push(d);
                            continue
                        }
                        let a = z(d);
                        null != a && M.add(a), K.push(d);
                        continue
                    }
                    if ("permission-request" === d.type) {
                        L.push(d);
                        continue
                    }
                    let a = u(d),
                        e = !a && v(d);
                    if (a || e) {
                        D = d;
                        continue
                    }
                    if ("userInput" === d.type && !0 !== d.completed) {
                        E = d;
                        continue
                    }
                    if ("user-message" === d.type) {
                        N.push(d);
                        continue
                    }
                    if ("generated-image" === d.type) {
                        let a = (0, n.e)(d);
                        a || R.push(d), ("in_progress" === b || a) && N.push(d);
                        continue
                    }
                    if (null != h && "mcp-tool-call" === d.type) {
                        let a = (0, m.a)(d, h);
                        if (a?.type === "chatgpt-automation") {
                            Q.set(a.id, a);
                            continue
                        }
                    }
                    if ("automation-update" === d.type) {
                        P.push(d);
                        continue
                    }
                    if ("auto-review-interruption-warning" === d.type) {
                        S.push(d), N.push(d);
                        continue
                    }
                    if ("mcp-tool-call" === d.type && d.callId === A && (O = `browser-card:${d.callId}`, N.push({
                            type: "browser-card",
                            id: O
                        })), !("mcp-tool-call" === d.type && B?.has(d.callId)) || d.result?.type !== "success" || d.toolDisplay?.invoked || d.toolDisplay?.title || (0, o.a)(d)?.grouping !== "groupable") {
                        if (w && "mcp-tool-call" === d.type && d.invocation.server === k.d && d.source?.kind !== "computerUse" && (0, o.a)(d)?.grouping === "groupable") {
                            if ("js" === d.invocation.tool && null == d.source && d.result?.type !== "error" && !d.toolDisplay?.title && !(d.completed ? d.toolDisplay?.invoked : d.toolDisplay?.invoking)) continue;
                            N.push({
                                ...d,
                                toolDisplay: {
                                    ...d.toolDisplay,
                                    hideInvocationTitle: !0
                                }
                            });
                            continue
                        }("reasoning" === d.type || "automatic-approval-review" === d.type || null != (0, o.a)(d)) && N.push(d)
                    }
                }
                let ab = (a => {
                        let b = new Map,
                            c = new Set,
                            d = new Map;
                        for (let b of a) {
                            if ("exec" !== b.type && "patch" !== b.type && "mcp-tool-call" !== b.type) continue;
                            let a = y(b);
                            null != a && d.set(a, b.type)
                        }
                        for (let e of a) {
                            let a = "automatic-approval-review" === e.type && null != e.targetItemId ? d.get(e.targetItemId) : void 0;
                            if ("automatic-approval-review" === e.type && null != e.targetItemId && null != a && ("denied" !== e.status || "mcp-tool-call" !== a)) {
                                c.add(e.id);
                                let a = b.get(e.targetItemId);
                                if (null == a) {
                                    b.set(e.targetItemId, [e]);
                                    continue
                                }
                                a.push(e)
                            }
                        }
                        return a.flatMap(a => {
                            if ("automatic-approval-review" === a.type && c.has(a.id)) return [];
                            let d = y(a),
                                e = null == d ? null : b.get(d) ?? null;
                            return null == e ? [a] : [{
                                ...a,
                                automaticApprovalReviews: e
                            }]
                        })
                    })(N),
                    ac = S.length > 0,
                    ad = ac ? ab.filter(a => "auto-review-interruption-warning" !== a.type) : ab,
                    ae = "latest" === c ? [] : x(ad),
                    af = !1,
                    ag = "latest" === c || M.size > 0 ? ad.filter(a => $.has(a) ? (af = !0, a === Z) : !("mcp-tool-call" === a.type && !a.completed && M.has(a.invocation.server)) && (af && (0, o.a)(a)?.grouping === "groupable" && !(0, o.b)(a) && (_.add(a), af = !1), !0)) : ad;
                "latest" === c && ae.push(...x(ag));
                let ah = ag.findLastIndex(a => {
                        var c, d, e;
                        let g;
                        return c = a, d = b, e = f, g = "in_progress" !== d, ("assistant-message" === c.type ? !(g && "commentary" === c.phase && q(c, e)) : "user-message" === c.type ? "accepted" !== c.steeringStatus || null == c.codexDelegation : "reasoning" === c.type ? !c.completed && !g : !(t(c) || "browser-card" === c.type || "mcp-server-elicitation" === c.type || "subagent-activity" === c.type || (0, n.e)(c) || g && p.has(c.type))) && !s(a, b, f)
                    }),
                    ai = ag[ah],
                    aj = ag.findLastIndex(a => "mcp-server-elicitation" !== a.type && "browser-card" !== a.type),
                    ak = q(ai, f) && ("final_answer" === ai.phase || s(ag[aj], b, f)) ? ah : aj,
                    al = ag[ak],
                    am = q(al, f) ? al : null,
                    an = null != am && r(am);
                if (am) {
                    for (let a of ag.splice(ak + 1)) "user-message" === a.type || "browser-card" === a.type || "in_progress" === b && t(a) ? S.push(a) : ag.push(a);
                    ag.splice(ak, 1);
                    let a = ag[ak - 1];
                    "final_answer" === am.phase && a?.type === "assistant-message" && "final_answer" === a.phase && null != a.searchItemId && a.searchItemId === am.searchItemId && e()(a, am) && ag.splice(ak - 1, 1), S.push(...ae)
                } else ag.push(...ae);
                if (ac && S.length > 1) {
                    let a = new Set(S);
                    S = ab.filter(b => a.has(b))
                }
                let ao = ag[ag.length - 1],
                    ap = "in_progress" === b || an || (d = ao, d?.type !== "system-error") ? null : ao;
                ap && ag.pop();
                let aq = g()([...P].reverse(), a => a.result?.automationId ?? a.arguments.id ?? a.callId).reverse(),
                    ar = null != am && am.completed && aq.length > 0 ? {
                        ...am,
                        automationCitations: aq
                    } : am,
                    as = null == am ? aq : [],
                    at = i()(K, (a, b) => a.requestId === b.requestId || "connectorAuth" === a.elicitation.kind && "connectorAuth" === b.elicitation.kind && (0, j.d)(a.elicitation.connector, b.elicitation.connector));
                return {
                    userItems: F,
                    agentItems: ag,
                    browserCardId: O,
                    toolGroupStartItems: _,
                    upNextStatusItem: "in_progress" === b ? aa : null,
                    automationUpdateItems: as,
                    cloudAutomationItems: [...Q.values()],
                    assistantItem: ar,
                    currentCommentaryItem: Z === am ? ar : Z,
                    toolOutputItems: R,
                    postAssistantItems: S,
                    systemEventItem: ap,
                    unifiedDiffItem: G,
                    remoteTaskCreatedItems: T,
                    personalityChangedItems: U,
                    forkedFromConversationItems: V,
                    modelChangedItems: W,
                    modelReroutedItems: X,
                    todoListItem: H,
                    proposedPlanItem: I,
                    planImplementationItem: J,
                    mcpServerElicitationItems: at,
                    pendingRequestTranscript: function(a, b, c, d, e) {
                        if (0 === b.length) return null;
                        let f = new Set(b),
                            g = new Set([...d, ...e]),
                            h = new Set,
                            i = [],
                            j = [],
                            k = null == c ? j : i,
                            l = !1;
                        for (let b of a) b === c ? k = j : "mcp-server-elicitation" === b.type && f.delete(b) ? (k.push(b), l = !0) : l && ("user-message" === b.type || "assistant-message" === b.type || "realtime-transcript" === b.type || "user-input-response" === b.type || "mcp-server-elicitation" === b.type) && g.has(b) && (k.push(b), h.add(b));
                        return {
                            beforeAssistant: i,
                            afterAssistant: j,
                            followups: h
                        }
                    }(a, at, am, ag, S),
                    permissionRequestItems: L,
                    approvalItem: D,
                    userInputItem: E
                }
            }
        })
    }),
    ltPT: (function(a, b, c) {
        var d = c("QosV"),
            e = c("zd8w"),
            f = c("nsuH");
        c.d(b, {}, {
            a: function() {
                let a, b, c, g, h = (0, d.c)(7),
                    [i, j] = (0, e.useState)(0);
                h[0] === Symbol.for("react.memo_cache_sentinel") ? (a = a => {
                    j(b => b === a ? b : a)
                }, h[0] = a) : a = h[0];
                let k = a;
                h[1] === Symbol.for("react.memo_cache_sentinel") ? (b = a => {
                    k(function(a) {
                        if (!a.borderBoxSize) return a.contentRect.height;
                        let b = Array.isArray(a.borderBoxSize) ? a.borderBoxSize[0] : a.borderBoxSize;
                        return b?.blockSize ?? a.contentRect.height
                    }(a))
                }, h[1] = b) : b = h[1];
                let l = (0, f.b)(b);
                h[2] !== l ? (c = a => {
                    null != a && k(a.scrollHeight), l(a)
                }, h[2] = l, h[3] = c) : c = h[3];
                let m = c;
                return h[4] !== i || h[5] !== m ? (g = {
                    elementHeightPx: i,
                    elementRef: m
                }, h[4] = i, h[5] = m, h[6] = g) : g = h[6], g
            }
        })
    }),
    JEy9: (function(a, b, c) {
        var d = c("ABep"),
            e = c("HDXo"),
            f = c("BiXd"),
            g = c("pnxC"),
            h = c("Jafp"),
            i = c("Iq8H"),
            j = c("APlY"),
            k = c("t6JR"),
            l = c("q67E"),
            m = c("uZEw"),
            n = c("Xfwm"),
            o = c("Npwj"),
            p = c("JJqS"),
            q = c("vyzX"),
            r = c("V7S0"),
            s = c("lAQI"),
            t = c("HOLv"),
            u = c("xmjg"),
            v = c("alO6"),
            w = c("Hkqr"),
            x = c("wE2l");
        let y = new Map([
                ["list_spaces", u.a],
                ["get_space", u.a],
                ["create_space", p.a],
                ["list_pages", q.a],
                ["find_pages", l.a],
                ["create_page", h.a],
                ["read_page", r.a],
                ["read_artifact", i.a],
                ["connect_spaces_artifact", i.a],
                ["read_page_reference", i.a],
                ["read_page_transcript", i.a],
                ["read_page_changes", g.a],
                ["edit_page", m.a],
                ["create_page_visualization", o.a],
                ["list_page_comments", f.a],
                ["manage_page_comment", f.a],
                ["search_sharing_recipients", l.a],
                ["get_page_sharing", n.a],
                ["get_space_sharing", n.a],
                ["update_page_sharing", k.a],
                ["update_space_sharing", k.a]
            ]),
            z = s.F({
                action: s.L()
            });

        function A(a, b) {
            let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                f = y.get(a);
            if ("manage_page_comment" === a) {
                let a = z.safeParse(b);
                a.success && "resolve" === a.data.action ? f = e.a : a.success && "react" === a.data.action && (f = j.a)
            }
            return null == f ? null : (0, d.jsx)(t.a, {
                className: "shrink-0 text-text/60",
                asset: c ? u.a : f
            })
        }
        c.d(b, {}, {
            a: function(a, b) {
                let c = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    e = (0, w.b)({
                        appContext: a.appContext,
                        apps: b,
                        functionName: a.functionName,
                        serverName: a.invocation.server,
                        toolName: a.invocation.tool
                    }),
                    f = (0, x.a)({
                        appContext: a.appContext,
                        matchingApp: e,
                        serverName: a.invocation.server,
                        toolName: a.invocation.tool
                    });
                return null == f ? null : A((0, v.e)({
                    matchingApp: f,
                    toolName: a.appContext?.actionName ?? a.invocation.tool
                }), a.invocation.arguments, c) ?? (0, d.jsx)(t.a, {
                    className: "shrink-0 text-text/60",
                    asset: u.a
                })
            },
            b: A
        })
    }),
    nMdB: (function(a, b, c) {
        var d = c("ekLq"),
            e = c("wD9O");
        c("V8uZ");
        let f = new WeakMap;
        c.d(b, {}, {
            a: function(a) {
                let b, c, g = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                    h = a.closest(d.c.timelineScroll);
                if (null == h) return;
                let i = f.get(h);
                if (i?.element === a && i.zoom === g) return void i.renew();
                i?.stop();
                let j = a.getBoundingClientRect().top,
                    k = -1 / 0,
                    l = null,
                    m = () => {
                        a.isConnected && (h.scrollTop += (0, e.b)(a.getBoundingClientRect().top - j, g))
                    },
                    n = () => {
                        null == l && (l = window.requestAnimationFrame(() => {
                            l = null, m()
                        }))
                    },
                    o = a.closest("[data-turn-key]"),
                    p = null;
                null != o && "u" > typeof ResizeObserver && (p = new ResizeObserver(() => {
                    k = performance.now(), null != l && (window.cancelAnimationFrame(l), l = null), m(), n()
                })).observe(o);
                let q = new AbortController,
                    r = () => {
                        null != l && window.cancelAnimationFrame(l), p?.disconnect(), window.clearTimeout(b), q.abort(), f.delete(h)
                    },
                    s = () => {
                        let a = Math.min(k + 50, c) - performance.now();
                        a > 0 ? b = window.setTimeout(s, Math.ceil(a)) : r()
                    },
                    t = () => {
                        window.clearTimeout(b), c = performance.now() + 700, b = window.setTimeout(s, 350), n()
                    };
                f.set(h, {
                    element: a,
                    zoom: g,
                    renew: t,
                    stop: r
                }), t();
                let u = b => {
                    b.target instanceof Node && a.contains(b.target) && (b instanceof PointerEvent && 0 === b.button || b instanceof KeyboardEvent && ("Enter" === b.key || " " === b.key)) ? t() : r()
                };
                for (let a of ["wheel", "touchmove", "pointerdown", "keydown"]) h.addEventListener(a, u, {
                    passive: !0,
                    signal: q.signal
                });
                return r
            },
            b: function(a) {
                let b = a.closest(d.c.timelineScroll);
                null != b && f.get(b)?.stop()
            }
        })
    }),
    XSLO: (function(a, b, c) {
        var d = c("KvQL"),
            e = c("Qgfj"),
            f = c("rS3J"),
            g = c("EULo");
        let h = `${d.pb}@${d.ad}`,
            i = `${d.pb}@${d.bd}`,
            j = `${d.pb}@${d.cd}`,
            k = /^plugin:\/\/([^?]+)(?:\?|$)/i,
            l = /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
            m = (0, e.f)({
                activeCreating: {
                    id: "codex.visualization.activity.active.creating",
                    defaultMessage: "<action>Creating</action> <detail>visualization</detail>"
                },
                activeUpdating: {
                    id: "codex.visualization.activity.active.updating",
                    defaultMessage: "<action>Updating</action> <detail>visualization</detail>"
                },
                summaryCreatingLeading: {
                    id: "codex.visualization.activity.summary.creating.leading",
                    defaultMessage: "Creating visualization"
                },
                summaryCreating: {
                    id: "codex.visualization.activity.summary.creating",
                    defaultMessage: "creating visualization"
                },
                summaryCreatedLeading: {
                    id: "codex.visualization.activity.summary.created.leading",
                    defaultMessage: "Created visualization"
                },
                summaryCreated: {
                    id: "codex.visualization.activity.summary.created",
                    defaultMessage: "created visualization"
                },
                summaryUpdatingLeading: {
                    id: "codex.visualization.activity.summary.updating.leading",
                    defaultMessage: "Updating visualization"
                },
                summaryUpdating: {
                    id: "codex.visualization.activity.summary.updating",
                    defaultMessage: "updating visualization"
                },
                summaryUpdatedLeading: {
                    id: "codex.visualization.activity.summary.updated.leading",
                    defaultMessage: "Updated visualization"
                },
                summaryUpdated: {
                    id: "codex.visualization.activity.summary.updated",
                    defaultMessage: "updated visualization"
                }
            });
        c.d(b, {}, {
            a: function(a) {
                let {
                    kind: b,
                    isFinished: c,
                    isLeadingSegment: d
                } = a;
                switch (b) {
                    case "create":
                        if (c) return d ? m.summaryCreatedLeading : m.summaryCreated;
                        return d ? m.summaryCreatingLeading : m.summaryCreating;
                    case "update":
                        if (c) return d ? m.summaryUpdatedLeading : m.summaryUpdated;
                        return d ? m.summaryUpdatingLeading : m.summaryUpdating
                }
            },
            b: function(a, b) {
                let c = [a];
                for (let a of b) "userMessage" === a.type && c.push(a.content), "steeringUserMessage" === a.type && "accepted" === a.status && c.push(a.input);
                let d = !1;
                for (let a of c)
                    for (let b of a) {
                        if ("text" !== b.type) continue;
                        l.test(b.text) && (d = !0);
                        let a = 0;
                        for (; a < b.text.length;) {
                            let c = (0, f.d)(b.text, a);
                            if (null == c) break;
                            let d = k.exec((0, g.d)(c.path))?.[1]?.trim().toLowerCase();
                            if (d === h || d === i || d === j) return "explicit";
                            a = c.end
                        }
                    }
                return d ? "soft" : "none"
            },
            c: function(a) {
                return a?.isSkillDefinitionFile === !0 && ("visualize" === a.skillId.toLowerCase() || a.pluginId?.toLowerCase() === "visualize" && ("live" === a.skillId.toLowerCase() || "persisted" === a.skillId.toLowerCase()))
            },
            d: m
        })
    })
};