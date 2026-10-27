export const __rspack_esm_id = 431882;
export const __rspack_esm_ids = [431882];
export const __webpack_modules__ = {
    mt4D: (function(e, t, n) {
        var r = n("VH4X"),
            l = n("M7HN"),
            a = n("Ci8z"),
            i = n("ASxG"),
            o = n("Dgwo"),
            s = n("C2tN"),
            d = n("kfGJ"),
            c = n("yI91"),
            u = n("bnxy");
        let p = new WeakMap,
            m = i.strictObject({
                error: i.string().optional().transform(e => e ?? "Unknown error"),
                ok: i.literal(!1)
            }),
            f = i.discriminatedUnion("ok", [i.strictObject({
                assetId: i.string(),
                ok: i.literal(!0),
                path: i.string()
            }), m]),
            h = i.discriminatedUnion("ok", [i.strictObject({
                ok: i.literal(!0)
            }), m]);

        function g(e) {
            return p.get(e) ?? null
        }

        function x() {
            let {
                accept: e,
                allowMultiple: t = !0,
                imagesOnly: n
            } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return new Promise(r => {
                let l = document.createElement("input");
                l.type = "file", l.multiple = t, (null != e || n) && (l.accept = e?.join(",") ?? "image/*"), l.style.position = "fixed", l.style.opacity = "0", l.style.pointerEvents = "none", l.style.width = "1px", l.style.height = "1px";
                let a = e => {
                    l.remove(), r(e)
                };
                l.addEventListener("change", () => {
                    a(null == l.files ? [] : Array.from(l.files))
                }, {
                    once: !0
                }), l.addEventListener("cancel", () => {
                    a([])
                }, {
                    once: !0
                }), (document.body ?? document.documentElement).append(l), l.click()
            })
        }
        async function w(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return Promise.all(e.map(async e => {
                var r;
                let a = e.name.trim() || "attachment",
                    i = (r = e).type.startsWith("image/") || (0, l.xi)(r.name) ? (0, c.b)(await k(e)) : null,
                    o = null == n.createAttachmentFromLocalFile ? await t({
                        contents: e.slice(0, e.size, e.type),
                        label: a
                    }) : await C({
                        createAttachmentFromLocalFile: n.createAttachmentFromLocalFile,
                        file: e,
                        fileName: a,
                        label: a
                    });
                return null != i && p.set(o, {
                    contentsBase64: i,
                    mimeType: e.type || null
                }), o
            }))
        }

        function b(e, t, n) {
            let {
                copyFromLocalFile: r
            } = n;
            return w(t, t => (0, o.b)(e, d.a).createFileAttachment(t), r ? {
                createAttachmentFromLocalFile: t => (0, o.b)(e, d.a).copyLocalFileAttachment(t)
            } : void 0)
        }
        async function v(e, t) {
            let [n] = await t([e]);
            return n?.fsPath ?? null
        }

        function y(e) {
            let t;
            if (e.name.trim().length > 0) return e.name;
            let n = "jpeg" === (t = (e.type || "image/png").split("/")[1] || "png") ? "jpg" : t;
            return `pasted-image-${(0,a.a)().slice(0,8)}.${n}`
        }
        async function j(e, t) {
            let {
                scope: n,
                hostConfig: r,
                hostId: a
            } = t, [i] = await (0, o.b)(n, a).uploadLocalFileAttachments({
                attachments: [{
                    label: (0, u.j)(e),
                    path: e,
                    fsPath: e
                }],
                allowSftpUpload: (0, l.qi)(r)
            });
            return i?.fsPath ?? null
        }
        async function C(e) {
            let {
                createAttachmentFromLocalFile: t,
                file: n,
                fileName: l,
                label: a
            } = e, i = function(e) {
                let t = f.safeParse(e);
                if (t.success) return t.data;
                throw Error("Unable to create browser file attachment asset.")
            }(await (0, s.c)({
                fileName: l,
                type: r.j
            }));
            if (!i.ok) throw Error(i.error);
            let o = !1;
            try {
                for (let e = 0; e < n.size; e += 18432) {
                    let t = await k(n.slice(e, e + 18432)),
                        l = function(e) {
                            let t = h.safeParse(e);
                            if (t.success) return t.data;
                            throw Error("Unable to update browser file attachment asset.")
                        }(await (0, s.c)({
                            assetId: i.assetId,
                            dataBase64: (0, c.b)(t),
                            type: r.i
                        }));
                    if (!l.ok) throw Error(l.error)
                }
                let e = function(e) {
                    let t = f.safeParse(e);
                    if (t.success) return t.data;
                    throw Error("Unable to finish browser file attachment asset.")
                }(await (0, s.c)({
                    assetId: i.assetId,
                    type: r.k
                }));
                if (!e.ok) throw Error(e.error);
                return o = !0, await t({
                    label: a,
                    sourcePath: e.path
                })
            } catch (e) {
                throw o || await (0, s.c)({
                    assetId: i.assetId,
                    type: r.h
                }).catch(() => void 0), e
            } finally {
                o && await (0, s.c)({
                    assetId: i.assetId,
                    type: r.l
                }).catch(() => void 0)
            }
        }
        async function k(e) {
            return "function" == typeof e.arrayBuffer ? new Uint8Array(await e.arrayBuffer()) : new Promise((t, n) => {
                let r = new FileReader;
                r.onerror = () => {
                    n(r.error ?? Error("Unable to read file"))
                }, r.onload = () => {
                    let {
                        result: e
                    } = r;
                    e instanceof ArrayBuffer ? t(new Uint8Array(e)) : n(Error("Unable to read file"))
                }, r.readAsArrayBuffer(e)
            })
        }
        n.d(t, {
            a: () => v,
            b: () => b,
            c: () => g,
            createBrowserFileAttachmentDescriptors: () => w,
            d: () => y,
            e: () => x,
            f: () => j
        })
    }),
    Ia2g: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("lUoP"),
            i = n("iTtm"),
            o = n("Wf1j"),
            s = n("oyxz"),
            d = n("n5iL"),
            c = n("tsTf"),
            u = n("ygO2"),
            p = n("AxFa"),
            m = n("bqtn"),
            f = n("bf6R"),
            h = n("RltM"),
            g = n("WNfT"),
            x = n("Y5qM"),
            w = n("KRWX"),
            b = n("D3mE");

        function v(e) {
            let t, n, h, x, v, j, C, k, S, A, P, N, M, E, T, F, L, R, D, z, B, O = (0, l.c)(64);
            O[0] !== e ? ({
                embedded: x,
                body: n,
                actions: t,
                ...h
            } = e, O[0] = e, O[1] = t, O[2] = n, O[3] = h, O[4] = x) : (t = O[1], n = O[2], h = O[3], x = O[4]);
            let _ = (0, w.b)(),
                I = (0, i.x)(d.f, "approval.approve"),
                q = (0, i.x)(d.f, "approval.decline"),
                H = (0, o.a)(),
                W = t.leadingAction,
                U = t.scopedApproveAction;
            O[5] !== t.disabled || O[6] !== _ ? (v = _ && !0 !== t.disabled && document.activeElement?.closest("input, textarea, [contenteditable]:not([contenteditable='false' i])") == null, O[5] = t.disabled, O[6] = _, O[7] = v) : v = O[7];
            let V = v,
                $ = _ && !0 !== t.disabled && !0 !== t.disableHotkeys && !0 !== t.isLoading;
            O[8] !== t.approveLabel ? (j = t.approveLabel ?? (0, r.jsx)(s.a, {
                id: "approvalRequestCard.allowOnce",
                defaultMessage: "Allow once",
                description: "Primary action label for approving a request once"
            }), O[8] = t.approveLabel, O[9] = j) : j = O[9];
            let Q = j;
            O[10] !== t.approveDisabled || O[11] !== I || O[12] !== $ ? (C = $ && !0 !== t.approveDisabled && null != I ? (0, r.jsx)("span", {
                className: "@max-md/approval-card:hidden",
                children: (0, r.jsx)(g.b, {
                    variant: "primary",
                    children: I
                })
            }) : null, O[10] = t.approveDisabled, O[11] = I, O[12] = $, O[13] = C) : C = O[13];
            let K = C;
            O[14] !== t ? (k = e => {
                !0 !== t.approveDisabled && t.onApprove(e)
            }, O[14] = t, O[15] = k) : k = O[15], O[16] !== t.onDeny || O[17] !== $ || O[18] !== k ? (S = {
                enabled: $,
                onApprove: k,
                onDecline: t.onDeny
            }, O[16] = t.onDeny, O[17] = $, O[18] = k, O[19] = S) : S = O[19], (0, c.a)(S), O[20] !== h ? (A = (0, r.jsx)("div", {
                className: "flex min-h-0 min-w-0 flex-col gap-2 overflow-y-auto overscroll-contain px-4 pt-4 pb-3",
                children: (0, r.jsx)(y, {
                    ...h,
                    announce: !0
                })
            }), O[20] = h, O[21] = A) : A = O[21], O[22] !== t ? (P = e => {
                e.preventDefault(), !0 !== t.disabled && !0 !== t.isLoading && !0 !== t.approveDisabled && t.onApprove(e.timeStamp)
            }, O[22] = t, O[23] = P) : P = O[23], O[24] !== t.disabled || O[25] !== t.isLoading || O[26] !== W ? (N = null != W && "menu" in W && (0, r.jsx)(m.a, {
                align: "start",
                side: "top",
                disabled: t.disabled || t.isLoading,
                triggerButton: (0, r.jsxs)(u.a, {
                    allowShrink: !0,
                    className: "max-w-full @max-md/approval-card:justify-center",
                    color: "outline",
                    size: "composer",
                    children: [(0, r.jsx)("span", {
                        className: "truncate",
                        children: W.label
                    }), (0, r.jsx)(f.$b, {
                        "aria-hidden": "true",
                        className: "icon-sm"
                    })]
                }),
                children: W.menu
            }), O[24] = t.disabled, O[25] = t.isLoading, O[26] = W, O[27] = N) : N = O[27], O[28] !== t.disabled || O[29] !== t.isLoading || O[30] !== W ? (M = null != W && "onClick" in W && (0, r.jsx)(a.a, {
                content: W.tooltipContent,
                children: (0, r.jsx)(u.a, {
                    allowShrink: !0,
                    className: "max-w-full @max-md/approval-card:justify-center",
                    color: "outline",
                    disabled: t.disabled || t.isLoading,
                    size: "composer",
                    onClick: e => W.onClick(e.timeStamp),
                    children: (0, r.jsx)("span", {
                        className: "truncate",
                        children: W.label ?? (0, r.jsx)(s.a, {
                            id: "approvalRequestCard.alwaysAllow",
                            defaultMessage: "Always allow",
                            description: "Button label for always approving matching requests"
                        })
                    })
                })
            }), O[28] = t.disabled, O[29] = t.isLoading, O[30] = W, O[31] = M) : M = O[31];
            let G = t.disabled || t.isLoading;
            return O[32] !== t ? (E = e => t.onDeny(e.timeStamp), O[32] = t, O[33] = E) : E = O[33], O[34] !== t.denyLabel ? (T = t.denyLabel ?? (0, r.jsx)(s.a, {
                id: "approvalRequestCard.deny",
                defaultMessage: "Deny",
                description: "Button label for denying an approval request"
            }), O[34] = t.denyLabel, O[35] = T) : T = O[35], O[36] !== $ || O[37] !== q ? (F = $ && null != q ? (0, r.jsx)("span", {
                className: "@max-md/approval-card:hidden",
                children: (0, r.jsx)(g.b, {
                    variant: "secondary",
                    children: q
                })
            }) : null, O[36] = $, O[37] = q, O[38] = F) : F = O[38], O[39] !== G || O[40] !== E || O[41] !== T || O[42] !== F ? (L = (0, r.jsxs)(u.a, {
                className: "@max-md/approval-card:justify-center",
                color: "outline",
                disabled: G,
                size: "composer",
                onClick: E,
                children: [T, F]
            }), O[39] = G, O[40] = E, O[41] = T, O[42] = F, O[43] = L) : L = O[43], O[44] !== t || O[45] !== Q || O[46] !== K || O[47] !== H || O[48] !== U || O[49] !== V ? (R = null != U ? (0, r.jsxs)(p.a, {
                autoFocus: V,
                className: "min-w-0 @max-md/approval-card:w-full",
                color: "primary",
                disabled: t.disabled,
                dropdownAlign: "end",
                loading: t.isLoading,
                primaryClassName: "min-w-0 overflow-hidden @max-md/approval-card:flex-1 @max-md/approval-card:justify-center @max-md/approval-card:ps-6",
                primaryDisabled: t.approveDisabled,
                secondaryAriaLabel: H.formatMessage({
                    id: "approvalRequestCard.approvalOptions",
                    defaultMessage: "Approval options",
                    description: "Accessible label for opening approval scope options"
                }),
                size: "composer",
                dropdownContent: (0, r.jsxs)(r.Fragment, {
                    children: [(0, r.jsx)(m.c.Item, {
                        disabled: t.disabled || t.approveDisabled,
                        onSelect: () => t.onApprove(),
                        children: Q
                    }), (0, r.jsx)(m.c.Item, {
                        disabled: t.disabled,
                        rightIconAsset: null == U.infoTooltip ? void 0 : b.a,
                        tooltipText: U.infoTooltip,
                        onSelect: U.onClick,
                        children: U.label ?? (0, r.jsx)(s.a, {
                            id: "approvalRequestCard.allowConversation",
                            defaultMessage: "Allow this conversation",
                            description: "Button label for approving a request for the current conversation"
                        })
                    })]
                }),
                onClick: e => t.onApprove(e.timeStamp),
                children: [(0, r.jsx)("span", {
                    className: "truncate",
                    children: Q
                }), K]
            }) : (0, r.jsxs)(u.a, {
                autoFocus: V,
                allowShrink: !0,
                className: "max-w-full @max-md/approval-card:justify-center",
                color: "primary",
                disabled: t.disabled || t.approveDisabled,
                loading: t.isLoading,
                size: "composer",
                type: "submit",
                children: [(0, r.jsx)("span", {
                    className: "truncate",
                    children: Q
                }), K]
            }), O[44] = t, O[45] = Q, O[46] = K, O[47] = H, O[48] = U, O[49] = V, O[50] = R) : R = O[50], O[51] !== L || O[52] !== R ? (D = (0, r.jsxs)("div", {
                className: "ms-auto flex min-w-0 items-center gap-2 @max-md/approval-card:ms-0 @max-md/approval-card:w-full @max-md/approval-card:flex-col @max-md/approval-card:items-stretch",
                children: [L, R]
            }), O[51] = L, O[52] = R, O[53] = D) : D = O[53], O[54] !== D || O[55] !== P || O[56] !== N || O[57] !== M ? (z = (0, r.jsxs)("form", {
                className: "flex shrink-0 items-center gap-2 px-4 pt-2 pb-4 @max-md/approval-card:flex-col @max-md/approval-card:items-stretch",
                onSubmit: P,
                children: [N, M, D]
            }), O[54] = D, O[55] = P, O[56] = N, O[57] = M, O[58] = z) : z = O[58], O[59] !== n || O[60] !== x || O[61] !== z || O[62] !== A ? (B = (0, r.jsxs)(g.a, {
                className: "@container/approval-card",
                embedded: x,
                "data-codex-approval-surface": !0,
                children: [A, n, z]
            }), O[59] = n, O[60] = x, O[61] = z, O[62] = A, O[63] = B) : B = O[63], B
        }

        function y(e) {
            let t, n, a, i, o, d = (0, l.c)(17),
                {
                    headerContent: c,
                    headingAction: u,
                    title: p,
                    subtitle: m,
                    reason: f,
                    details: g,
                    announce: w
                } = e,
                b = void 0 !== w && w,
                v = b || void 0,
                y = b ? "alert" : void 0;
            return d[0] !== c || d[1] !== m || d[2] !== p ? (t = (0, r.jsx)(x.a, {
                headerContent: c,
                subtitle: m,
                title: p
            }), d[0] = c, d[1] = m, d[2] = p, d[3] = t) : t = d[3], d[4] !== v || d[5] !== y || d[6] !== t ? (n = (0, r.jsx)("div", {
                className: "min-w-0 flex-1",
                "aria-atomic": v,
                role: y,
                children: t
            }), d[4] = v, d[5] = y, d[6] = t, d[7] = n) : n = d[7], d[8] !== u || d[9] !== n ? (a = (0, r.jsxs)("div", {
                className: "flex items-start gap-2",
                children: [n, u]
            }), d[8] = u, d[9] = n, d[10] = a) : a = d[10], d[11] !== g || d[12] !== f ? (i = null != f || null != g ? (0, r.jsxs)("div", {
                className: "flex flex-col gap-1",
                children: [null == f ? null : (0, r.jsx)(h.a, {
                    label: (0, r.jsx)(s.a, {
                        id: "approvalRequestCard.reasonLabel",
                        defaultMessage: "Reason",
                        description: "Section label for the reason shown in approval requests"
                    }),
                    children: f
                }), g]
            }) : null, d[11] = g, d[12] = f, d[13] = i) : i = d[13], d[14] !== a || d[15] !== i ? (o = (0, r.jsxs)(r.Fragment, {
                children: [a, i]
            }), d[14] = a, d[15] = i, d[16] = o) : o = d[16], o
        }
        n.d(t, {
            a: () => v,
            b: () => y
        })
    }),
    Ug8F: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            i = n("oyxz"),
            o = n("ygO2"),
            s = n("JNtf"),
            d = n("mUDD"),
            c = n("V0vQ");

        function u(e) {
            let t, n, u, m, f, h, g, x, w, b, v, y, j, C, k, S = (0, l.c)(46),
                {
                    acceptedFileExtensions: A,
                    hostId: P,
                    initialDirectoryPath: N,
                    kind: M,
                    multiple: E,
                    title: T,
                    onClose: F,
                    onRestoreFocus: L,
                    onSelect: R
                } = e,
                D = void 0 === M ? "file" : M,
                z = void 0 === E || E;
            S[0] === Symbol.for("react.memo_cache_sentinel") ? (t = [], S[0] = t) : t = S[0];
            let [B, O] = (0, a.useState)(t);
            S[1] !== L ? (n = null == L ? void 0 : e => {
                e.preventDefault(), L()
            }, S[1] = L, S[2] = n) : n = S[2], S[3] !== n ? (u = {
                onCloseAutoFocus: n,
                onKeyDown: p
            }, S[3] = n, S[4] = u) : u = S[4], S[5] !== F ? (m = e => {
                e || F()
            }, S[5] = F, S[6] = m) : m = S[6], S[7] !== F || S[8] !== R || S[9] !== B ? (f = e => {
                e.preventDefault(), e.stopPropagation(), 0 !== B.length && (R(B), F())
            }, S[7] = F, S[8] = R, S[9] = B, S[10] = f) : f = S[10], S[11] !== D || S[12] !== z || S[13] !== T ? (h = T ?? ("directory" === D ? (0, r.jsx)(i.a, {
                id: "composer.remoteFilePicker.directorySelectionTitle",
                defaultMessage: "{multiple, select, true {Choose remote folders} other {Choose a remote folder}}",
                description: "Title for the remote directory picker; multiple indicates whether several folders can be selected",
                values: {
                    multiple: String(z)
                }
            }) : (0, r.jsx)(i.a, {
                id: "composer.remoteFilePicker.title",
                defaultMessage: "Choose remote files",
                description: "Title for the remote file picker dialog"
            })), S[11] = D, S[12] = z, S[13] = T, S[14] = h) : h = S[14], S[15] !== h ? (g = (0, r.jsx)(d.e, {
                children: (0, r.jsx)(d.d, {
                    title: (0, r.jsx)(s.e, {
                        children: h
                    })
                })
            }), S[15] = h, S[16] = g) : g = S[16], S[17] !== A || S[18] !== P || S[19] !== N || S[20] !== D || S[21] !== z || S[22] !== B ? (x = (0, r.jsx)(d.e, {
                children: "directory" !== D || z ? (0, r.jsx)(c.a, {
                    acceptedFileExtensions: A,
                    hostId: P,
                    initialDirectoryPath: N,
                    mode: "entries",
                    kind: D,
                    selectedPaths: B,
                    setSelectedPaths: e => O(z ? e : e.slice(-1))
                }) : (0, r.jsx)(c.a, {
                    autoFocus: !0,
                    hostId: P,
                    initialDirectoryPath: N,
                    mode: "directoryPath",
                    selectedPath: B[0] ?? null,
                    setSelectedPath: e => O([e])
                })
            }), S[17] = A, S[18] = P, S[19] = N, S[20] = D, S[21] = z, S[22] = B, S[23] = x) : x = S[23], S[24] === Symbol.for("react.memo_cache_sentinel") ? (w = (0, r.jsx)(i.a, {
                id: "composer.remoteFilePicker.cancel",
                defaultMessage: "Cancel",
                description: "Cancel button label for the remote file picker"
            }), S[24] = w) : w = S[24], S[25] !== F ? (b = (0, r.jsx)(o.a, {
                color: "ghost",
                type: "button",
                onClick: F,
                children: w
            }), S[25] = F, S[26] = b) : b = S[26];
            let _ = 0 === B.length;
            return S[27] !== D || S[28] !== z || S[29] !== B.length ? (v = "directory" === D && z ? (0, r.jsx)(i.a, {
                id: "composer.remoteFilePicker.chooseFolders",
                defaultMessage: "Choose {count, plural, one {# folder} other {# folders}}",
                description: "Confirm button showing the number of remote folders selected across directories",
                values: {
                    count: B.length
                }
            }) : (0, r.jsx)(i.a, {
                id: "composer.remoteFilePicker.add",
                defaultMessage: "Choose",
                description: "Confirm button label for the remote file picker"
            }), S[27] = D, S[28] = z, S[29] = B.length, S[30] = v) : v = S[30], S[31] !== _ || S[32] !== v ? (y = (0, r.jsx)(o.a, {
                color: "primary",
                disabled: _,
                type: "submit",
                children: v
            }), S[31] = _, S[32] = v, S[33] = y) : y = S[33], S[34] !== b || S[35] !== y ? (j = (0, r.jsx)(d.e, {
                children: (0, r.jsxs)(d.c, {
                    children: [b, y]
                })
            }), S[34] = b, S[35] = y, S[36] = j) : j = S[36], S[37] !== x || S[38] !== j || S[39] !== f || S[40] !== g ? (C = (0, r.jsxs)(d.b, {
                as: "form",
                onSubmit: f,
                children: [g, x, j]
            }), S[37] = x, S[38] = j, S[39] = f, S[40] = g, S[41] = C) : C = S[41], S[42] !== C || S[43] !== u || S[44] !== m ? (k = (0, r.jsx)(s.b, {
                open: !0,
                size: "wide",
                contentProps: u,
                onOpenChange: m,
                children: C
            }), S[42] = C, S[43] = u, S[44] = m, S[45] = k) : k = S[45], k
        }

        function p(e) {
            return e.stopPropagation()
        }
        n.d(t, {
            a: () => u
        })
    }),
    dxKw: (function(e, t, n) {
        var r = n("QosV"),
            l = n("Wf1j"),
            a = n("GaA7"),
            i = n("q77y"),
            o = n("YgCO");

        function s() {
            let e, t = (0, r.c)(2),
                n = (0, l.a)();
            return t[0] !== n ? (e = async e => {
                let {
                    accept: t,
                    allowMultiple: r,
                    imagesOnly: l,
                    kind: s,
                    pickerTitle: d
                } = void 0 === e ? {} : e, c = a.appServices.fileAttachments;
                if (c?.pickFiles == null) throw Error("File picking is not available in this host.");
                return (0, i.a)(c.pickFiles({
                    kind: s,
                    acceptedFileExtensions: (0, o.a)(t),
                    allowMultiple: r,
                    imagesOnly: l,
                    pickerTitle: d ?? ("directory" === s ? n.formatMessage({
                        id: "composer.filePicker.selectFolder",
                        defaultMessage: "Select folder",
                        description: "Title for the directory picker dialog"
                    }) : n.formatMessage({
                        id: "composer.filePicker.selectFiles",
                        defaultMessage: "Select files",
                        description: "Title for the multi-file picker dialog"
                    }))
                }))
            }, t[0] = n, t[1] = e) : e = t[1], e
        }
        n.d(t, {
            a: () => s
        })
    }),
    CtJU: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57");

        function i(e) {
            let t, n, i, o, s, d = (0, l.c)(17),
                {
                    align: c,
                    children: u,
                    className: p,
                    hideLabelWhenNarrow: m,
                    icon: f,
                    label: h,
                    spacing: g
                } = e,
                x = void 0 !== m && m,
                w = "relaxed" === (void 0 === g ? "default" : g) ? "py-3 last:pb-0" : "py-row-y",
                b = x ? "grid-cols-[auto_minmax(0,1fr)]" : "grid-cols-1",
                v = "start" === (void 0 === c ? "center" : c) ? "items-start" : x ? "items-center" : "items-start [@container_(min-width:24rem)]:items-center";
            return d[0] !== p || d[1] !== w || d[2] !== b || d[3] !== v ? (t = (0, a.b)("grid min-h-[var(--height-token-row)] gap-x-3 gap-y-0.5 text-[length:var(--detail-row-font-size,var(--text-base))] leading-5 [@container_(min-width:24rem)]:grid-cols-[var(--detail-property-label-width,120px)_minmax(0,1fr)]", w, b, v, p), d[0] = p, d[1] = w, d[2] = b, d[3] = v, d[4] = t) : t = d[4], d[5] !== x || d[6] !== h ? (n = x ? (0, r.jsx)("span", {
                className: "sr-only [@container_(min-width:24rem)]:not-sr-only",
                children: h
            }) : h, d[5] = x, d[6] = h, d[7] = n) : n = d[7], d[8] !== f || d[9] !== n ? (i = (0, r.jsxs)("dt", {
                className: "flex min-w-0 items-center gap-2 wrap-anywhere text-codex-description",
                children: [f, n]
            }), d[8] = f, d[9] = n, d[10] = i) : i = d[10], d[11] !== u ? (o = (0, r.jsx)("dd", {
                className: "m-0 flex min-w-0 items-center wrap-anywhere text-default",
                children: u
            }), d[11] = u, d[12] = o) : o = d[12], d[13] !== o || d[14] !== t || d[15] !== i ? (s = (0, r.jsxs)("div", {
                className: t,
                children: [i, o]
            }), d[13] = o, d[14] = t, d[15] = i, d[16] = s) : s = d[16], s
        }
        n.d(t, {
            a: () => i
        })
    }),
    RltM: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("CtJU"),
            i = n("hueg");
        let o = /\bhttps?:\/\/[^\s"'<>]+/giu,
            s = /[),.;:!?]+$/u;

        function d(e) {
            let t, n, i = (0, l.c)(5),
                {
                    label: o,
                    children: s
                } = e;
            return i[0] !== s ? (t = "string" == typeof s ? (0, r.jsx)("span", {
                className: "min-w-0",
                children: (0, r.jsx)(c, {
                    children: s
                })
            }) : s, i[0] = s, i[1] = t) : t = i[1], i[2] !== o || i[3] !== t ? (n = (0, r.jsx)("dl", {
                className: "@container",
                children: (0, r.jsx)(a.a, {
                    className: "[--detail-row-font-size:var(--codex-chat-font-size)]",
                    label: o,
                    children: t
                })
            }), i[2] = o, i[3] = t, i[4] = n) : n = i[4], n
        }

        function c(e) {
            let t, n, a = (0, l.c)(4),
                {
                    children: i
                } = e;
            return a[0] !== i ? (t = (function(e) {
                let t = [],
                    n = 0;
                for (let r of e.matchAll(o)) {
                    let l = r[0],
                        a = r.index,
                        i = l.replace(s, "");
                    0 !== i.length && (a > n && t.push({
                        index: n,
                        kind: "text",
                        text: e.slice(n, a)
                    }), t.push({
                        href: i,
                        index: a,
                        kind: "link"
                    }), n = a + i.length)
                }
                return n < e.length && t.push({
                    index: n,
                    kind: "text",
                    text: e.slice(n)
                }), t
            })(i).map(u), a[0] = i, a[1] = t) : t = a[1], a[2] !== t ? (n = (0, r.jsx)(r.Fragment, {
                children: t
            }), a[2] = t, a[3] = n) : n = a[3], n
        }

        function u(e) {
            switch (e.kind) {
                case "text":
                    return (0, r.jsx)("span", {
                        children: e.text
                    }, `text-${e.index}`);
                case "link":
                    return (0, r.jsx)(i.a, {
                        href: e.href,
                        children: e.href
                    }, `link-${e.index}`)
            }
        }
        n.d(t, {
            a: () => d,
            b: () => c
        })
    }),
    FW69: (function(e, t, n) {
        var r = n("xprp");
        n.d(t, {
            a: () => r.a
        })
    }),
    V0vQ: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("irkb"),
            i = n("T0Rc"),
            o = n("on57"),
            s = n("zKw6"),
            d = n.n(s),
            c = n("M7HN"),
            u = n("zd8w"),
            p = n("Wf1j"),
            m = n("oyxz"),
            f = n("ygO2"),
            h = n("nhmq"),
            g = n("HOLv"),
            x = n("zLIa"),
            w = n("CqQF"),
            b = n("sb0z"),
            v = n("YgCO"),
            y = n("bnxy"),
            j = n("rvFo"),
            C = n("MCzV"),
            k = n("cHdE"),
            S = n("ELME"),
            A = n("Rjnf"),
            P = n("gX00");
        let N = [];

        function M(e) {
            let t, n, s, y, S, A, P, M, B, O, _, I, q, H, W, U, V = (0, l.c)(39),
                {
                    hostId: $,
                    initialDirectoryPath: Q
                } = e,
                K = (0, p.a)(),
                G = (0, u.useId)(),
                Y = (0, u.useId)(),
                J = (0, a.c)(),
                X = "entries" !== e.mode,
                Z = X || "directory" === e.kind;
            V[0] !== e.mode || V[1] !== e.selectedPaths ? (t = "entries" === e.mode ? e.selectedPaths : [], V[0] = e.mode, V[1] = e.selectedPaths, V[2] = t) : t = V[2], V[3] !== t ? (n = new Set(t), V[3] = t, V[4] = n) : n = V[4];
            let ee = n;
            V[5] !== Q ? (s = Q?.trim() ?? "", V[5] = Q, V[6] = s) : s = V[6];
            let [et, en] = (0, u.useState)(s), [er, el] = (0, u.useState)(!1), [ea, ei] = (0, u.useState)(""), [eo, es] = (0, u.useState)(null), ed = ea.trim(), ec = et.trim() || null, eu = null, ep = !0;
            if (er && !(0, c.yh)(ed)) ec = null, ep = !1;
            else if (er) {
                let e = function(e) {
                    if (/[\\/]$/.test(e)) return {
                        directoryPath: function(e) {
                            if ("/" === e || /^[A-Za-z]:[\\/]$/.test(e)) return e;
                            let t = e.replace(/[\\/]+$/, "");
                            return t.length > 0 ? t : e
                        }(e),
                        entryNamePrefix: null
                    };
                    let t = L(e);
                    return null == t ? {
                        directoryPath: e,
                        entryNamePrefix: null
                    } : {
                        directoryPath: t,
                        entryNamePrefix: d().posix.basename((0, c.Mj)(e))
                    }
                }(ed);
                ec = e.directoryPath, eu = e.entryNamePrefix
            }
            let {
                data: em,
                error: ef,
                isLoading: eh
            } = (0, i.a)({
                ...(0, C.a)(e, ec, Z),
                enabled: ep,
                staleTime: 0,
                placeholderData: () => {
                    let t = J.getQueryData((0, C.a)(e, null, Z).queryKey);
                    return t?.directoryPath === ec ? t : void 0
                }
            }), eg = ec || em?.directoryPath || "", ex = ep && em?.directoryPath === eg ? em.entries : N, ew = ex.filter(t => (null == eu || t.name.toLocaleLowerCase().startsWith(eu.toLocaleLowerCase())) && ("directory" === t.type || "entries" !== e.mode || (0, v.b)(t.name, e.acceptedFileExtensions))), eb = ew.filter(F), ev = e.disabled || eh ? null : eb.find(e => e.path === eo) ?? null, ey = eg;
            X && (ey = e.selectedPath ?? eg), X && er && (ey = ea);
            let ej = L(ey);
            ep && em?.directoryPath === eg && (!er || ey === eg) && (ej = X && ew.some(t => "directory" === t.type && t.path === e.selectedPath) ? eg : em.parentPath);
            let eC = e.disabled || eh || !ep || null == ej,
                ek = ep ? null : G;
            V[7] !== e.inputDescriptionId || V[8] !== ek ? (y = [ek, e.inputDescriptionId].filter(T), V[7] = e.inputDescriptionId, V[8] = ek, V[9] = y) : y = V[9];
            let eS = y;
            V[10] !== K ? (S = K.formatMessage({
                id: "remoteCwdPicker.up",
                defaultMessage: "Go to parent folder",
                description: "Tooltip and accessible label for moving the remote folder picker to the parent directory"
            }), V[10] = K, V[11] = S) : S = V[11];
            let eA = S;
            V[12] !== K || V[13] !== X ? (A = X ? K.formatMessage({
                id: "remoteCwdPicker.selectedPath",
                defaultMessage: "Selected folder path",
                description: "Accessible label for the input showing the selected remote folder path"
            }) : K.formatMessage({
                id: "remoteCwdPicker.currentPath",
                defaultMessage: "Current folder path",
                description: "Accessible label for the disabled input showing the current remote folder path when selecting files or folders"
            }), V[12] = K, V[13] = X, V[14] = A) : A = V[14];
            let eP = A;
            V[15] === Symbol.for("react.memo_cache_sentinel") ? (P = e => {
                es(null), el(!1), ei(""), en(e)
            }, V[15] = P) : P = V[15];
            let eN = P;
            V[16] !== e || V[17] !== ee ? (M = t => {
                "entries" === e.mode && e.setSelectedPaths(ee.has(t) ? e.selectedPaths.filter(e => e !== t) : [...e.selectedPaths, t])
            }, V[16] = e, V[17] = ee, V[18] = M) : M = V[18];
            let eM = M;
            V[19] !== e ? (B = t => {
                if ("entries" === e.mode || e.disabled) return;
                let n = t.trim();
                if (e.setSelectedPath(n), (0, c.yh)(n)) {
                    en(n), el(!1), ei("");
                    return
                }
                el(!0), ei(n)
            }, V[19] = e, V[20] = B) : B = V[20];
            let eE = B;
            V[21] !== Z || V[22] !== $ || V[23] !== ex || V[24] !== J ? (O = () => {
                if (null == $ || 0 === ex.length) return;
                let e = ex.filter(E);
                0 !== e.length && Promise.all(e.map(e => J.prefetchQuery({
                    ...(0, b.b)({
                        hostId: $,
                        directoryPath: e.path,
                        directoriesOnly: Z
                    }),
                    staleTime: j.b.INFINITE
                })))
            }, _ = [$, Z, ex, J], V[21] = Z, V[22] = $, V[23] = ex, V[24] = J, V[25] = O, V[26] = _) : (O = V[25], _ = V[26]), (0, u.useEffect)(O, _), V[27] !== eE || V[28] !== er || V[29] !== ea || V[30] !== e.disabled ? (I = t => {
                e.disabled || !er || t.relatedTarget instanceof Node && t.currentTarget.contains(t.relatedTarget) || eE(ea)
            }, V[27] = eE, V[28] = er, V[29] = ea, V[30] = e.disabled, V[31] = I) : I = V[31], V[32] === Symbol.for("react.memo_cache_sentinel") ? (q = (0, r.jsx)(g.a, {
                "aria-hidden": !1,
                asset: k.a
            }), V[32] = q) : q = V[32], V[33] !== e ? (H = t => {
                if ("entries" === e.mode) return;
                let n = t.target.value;
                es(null), e.setSelectedPath(n), el(!0), ei(n)
            }, V[33] = e, V[34] = H) : H = V[34], V[35] === Symbol.for("react.memo_cache_sentinel") ? (W = (0, o.b)("min-h-0 flex-1", "bg-primary-soft border-primary-outline flex overflow-y-auto rounded-lg border"), V[35] = W) : W = V[35];
            let eT = ep ? eh && null == em ? (0, r.jsx)("div", {
                className: "flex w-full items-center justify-center px-4 text-sm text-codex-description",
                children: (0, r.jsx)(m.a, {
                    id: "remoteCwdPicker.loading",
                    defaultMessage: "Loading folder contents…",
                    description: "Message shown while the remote cwd picker is loading the current folder contents"
                })
            }) : ef || null == em ? (0, r.jsx)("div", {
                className: "flex w-full items-center justify-center px-4 text-sm text-codex-description",
                children: (0, r.jsx)(m.a, {
                    id: "remoteCwdPicker.loadError",
                    defaultMessage: "Unable to load this folder",
                    description: "Message shown when the remote cwd picker cannot load the current folder contents"
                })
            }) : 0 === ew.length ? (0, r.jsx)("div", {
                className: "flex w-full items-center justify-center px-4 text-sm text-codex-description",
                children: Z ? (0, r.jsx)(m.a, {
                    id: "remoteCwdPicker.empty",
                    defaultMessage: "No folders found in this directory.",
                    description: "Message shown when the current remote directory has no folders to choose from"
                }) : (0, r.jsx)(m.a, {
                    id: "remoteCwdPicker.emptyFiles",
                    defaultMessage: "No files or folders found in this directory",
                    description: "Message shown when the current remote directory has no files or folders to choose from"
                })
            }) : (0, r.jsx)("div", {
                id: X ? Y : void 0,
                className: "flex w-full flex-col py-1",
                role: X ? "listbox" : void 0,
                children: ew.map(t => {
                    if ("directory" === t.type) {
                        let n = (0, r.jsx)(R, {
                            entry: t,
                            id: X ? D(Y, t.path) : void 0,
                            isActive: t.path === ev?.path,
                            isSuggestionOption: X,
                            isSelected: "entries" !== e.mode && t.path === e.selectedPath,
                            disabled: e.disabled || eh,
                            onSelect: () => {
                                eN(t.path), "entries" !== e.mode && e.setSelectedPath(t.path)
                            }
                        }, t.path);
                        return "entries" === e.mode && "directory" === e.kind ? (0, r.jsxs)("div", {
                            className: "relative flex items-center ps-3",
                            children: [(0, r.jsx)(h.a, {
                                "aria-label": K.formatMessage({
                                    id: "remoteCwdPicker.selectFolder",
                                    defaultMessage: "Select {path}",
                                    description: "Accessible label for selecting a remote folder independently of opening it"
                                }, {
                                    path: t.path
                                }),
                                checked: ee.has(t.path),
                                disabled: e.disabled || eh,
                                onCheckedChange: () => eM(t.path)
                            }), n]
                        }, t.path) : n
                    }
                    if ("entries" !== e.mode) return null;
                    let n = ee.has(t.path);
                    return (0, r.jsx)(z, {
                        entry: t,
                        isSelected: n,
                        disabled: e.disabled || eh,
                        onSelect: () => eM(t.path)
                    }, t.path)
                })
            }) : (0, r.jsx)("div", {
                id: G,
                className: "flex w-full items-center justify-center px-4 text-sm text-codex-description",
                children: (0, r.jsx)(m.a, {
                    id: "remoteCwdPicker.enterFolderPath",
                    defaultMessage: "Enter a full folder path to browse",
                    description: "Guidance shown when the remote folder path input is empty or relative"
                })
            });
            return V[36] !== W || V[37] !== eT ? (U = (0, r.jsx)("div", {
                className: W,
                children: eT
            }), V[36] = W, V[37] = eT, V[38] = U) : U = V[38], (0, r.jsx)("div", {
                className: "flex h-70 min-h-56 flex-col gap-3",
                onBlur: I,
                children: (0, r.jsxs)("div", {
                    className: "flex min-h-0 min-w-0 flex-1 flex-col",
                    children: [(0, r.jsxs)("div", {
                        className: "mt-1 mb-2 flex min-w-0 items-center gap-1",
                        children: [(0, r.jsx)(w.a, {
                            tooltipContent: eA,
                            children: (0, r.jsx)(f.a, {
                                className: "shrink-0",
                                color: "ghost",
                                size: "toolbar",
                                uniform: !0,
                                type: "button",
                                "aria-label": eA,
                                disabled: eC,
                                onClick: () => {
                                    null != ej && (eN(ej), "entries" !== e.mode && e.setSelectedPath(ej))
                                },
                                children: q
                            })
                        }), (0, r.jsx)(x.a, {
                            autoFocus: e.autoFocus,
                            "aria-describedby": eS.length > 0 ? eS.join(" ") : void 0,
                            "aria-invalid": e.inputInvalid || void 0,
                            "aria-label": eP,
                            "aria-activedescendant": X && null != ev ? D(Y, ev.path) : void 0,
                            "aria-autocomplete": X ? "list" : void 0,
                            "aria-controls": X && ew.length > 0 ? Y : void 0,
                            "aria-expanded": X ? ew.length > 0 : void 0,
                            disabled: !X || e.disabled,
                            readOnly: !X,
                            role: X ? "combobox" : void 0,
                            spellCheck: !1,
                            title: ey,
                            value: ey,
                            onChange: H,
                            onKeyDown: t => {
                                if ("entries" !== e.mode && !t.nativeEvent.isComposing && 229 !== t.nativeEvent.keyCode) {
                                    if ("ArrowDown" === t.key || "ArrowUp" === t.key) {
                                        if (0 === eb.length || e.disabled) return;
                                        t.preventDefault();
                                        let n = ev ? eb.indexOf(ev) : -1,
                                            r = eb.length - 1;
                                        "ArrowDown" === t.key ? r = -1 === n ? 0 : (n + 1) % eb.length : -1 !== n && (r = (n - 1 + eb.length) % eb.length), es(eb[r].path);
                                        return
                                    }
                                    "Enter" === t.key && null != ev && (t.preventDefault(), eN(eg), e.setSelectedPath(ev.path))
                                }
                            }
                        })]
                    }), "entries" !== e.mode && null == e.selectedPath ? (0, r.jsx)(f.a, {
                        className: "mb-2 self-start",
                        color: "ghost",
                        type: "button",
                        disabled: e.disabled || eh || null != ef || null == em,
                        onClick: () => e.setSelectedPath(eg),
                        children: (0, r.jsx)(m.a, {
                            id: "remoteCwdPicker.selectCurrentFolder",
                            defaultMessage: "Select current folder",
                            description: "Button to select the remote folder currently being browsed without navigating or editing its path"
                        })
                    }) : null, "entries" === e.mode && "directory" === e.kind ? (0, r.jsxs)("label", {
                        className: "relative mb-2 flex items-center gap-2 text-sm select-none",
                        children: [(0, r.jsx)(h.a, {
                            checked: ee.has(eg),
                            disabled: e.disabled || eh || null != ef || null == em,
                            onCheckedChange: () => eM(eg)
                        }), (0, r.jsx)(m.a, {
                            id: "remoteCwdPicker.includeCurrentFolder",
                            defaultMessage: "Include current folder",
                            description: "Checkbox to include the folder currently being browsed in a multiple-folder selection"
                        })]
                    }) : null, U]
                })
            })
        }

        function E(e) {
            return "directory" === e.type
        }

        function T(e) {
            return null != e
        }

        function F(e) {
            return "directory" === e.type
        }

        function L(e) {
            if (0 === e.length) return null;
            let t = (0, c.Ai)(e) || (0, c.Ci)(e),
                n = t ? (0, c.Mj)(e) : e,
                r = (0, c.Ci)(n) ? n.match(/^(\/\/[^/]+\/[^/]+)/)?.[1] : void 0,
                l = null != r && n.replace(/\/+$/, "") === r ? r : n;
            if (null != r && l === r) return null;
            let a = d().posix.dirname(l),
                i = (0, c.Ai)(n) && /^[A-Za-z]:$/.test(a) ? `${a}/` : a;
            return "." === i || i === n ? null : t && e.includes("\\") ? (0, y.i)(i) : i
        }

        function R(e) {
            let t, n, a, i, s = (0, l.c)(15),
                {
                    entry: d,
                    id: c,
                    isActive: u,
                    isSuggestionOption: p,
                    isSelected: m,
                    disabled: f,
                    onSelect: h
                } = e,
                x = !f && "hover:bg-text/5",
                w = f && "cursor-not-allowed opacity-50",
                b = (u || m) && "bg-text/10";
            s[0] !== x || s[1] !== w || s[2] !== b ? (t = (0, o.b)("flex w-full min-w-0 self-stretch items-center gap-2 px-3 py-1.5 text-start text-sm", x, w, b), s[0] = x, s[1] = w, s[2] = b, s[3] = t) : t = s[3];
            let v = p ? m : void 0,
                y = f ? void 0 : h,
                j = p ? "option" : void 0;
            return s[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(g.a, {
                className: "shrink-0 text-codex-description",
                "aria-hidden": !1,
                asset: P.a
            }), s[4] = n) : n = s[4], s[5] !== d.name ? (a = (0, r.jsx)("span", {
                className: "truncate",
                children: d.name
            }), s[5] = d.name, s[6] = a) : a = s[6], s[7] !== f || s[8] !== c || s[9] !== t || s[10] !== v || s[11] !== y || s[12] !== j || s[13] !== a ? (i = (0, r.jsxs)("button", {
                id: c,
                type: "button",
                className: t,
                "aria-selected": v,
                disabled: f,
                onClick: y,
                role: j,
                children: [n, a]
            }), s[7] = f, s[8] = c, s[9] = t, s[10] = v, s[11] = y, s[12] = j, s[13] = a, s[14] = i) : i = s[14], i
        }

        function D(e, t) {
            return `${e}-${encodeURIComponent(t)}`
        }

        function z(e) {
            let t, n, a, i, s, d = (0, l.c)(16),
                {
                    entry: c,
                    isSelected: u,
                    disabled: p,
                    onSelect: m
                } = e,
                f = !p && "hover:bg-text/5",
                h = p && "cursor-not-allowed opacity-50",
                x = u && "bg-text/10";
            d[0] !== f || d[1] !== h || d[2] !== x ? (t = (0, o.b)("flex w-full min-w-0 self-stretch items-center gap-2 px-3 py-1.5 text-start text-sm", f, h, x), d[0] = f, d[1] = h, d[2] = x, d[3] = t) : t = d[3];
            let w = p ? void 0 : m;
            return d[4] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, r.jsx)(g.a, {
                className: "shrink-0 text-codex-description",
                "aria-hidden": !1,
                asset: A.a
            }), d[4] = n) : n = d[4], d[5] !== c.name ? (a = (0, r.jsx)("span", {
                className: "min-w-0 flex-1 truncate",
                children: c.name
            }), d[5] = c.name, d[6] = a) : a = d[6], d[7] !== u ? (i = u ? (0, r.jsx)(g.a, {
                className: "shrink-0",
                "aria-hidden": !1,
                asset: S.a
            }) : null, d[7] = u, d[8] = i) : i = d[8], d[9] !== p || d[10] !== u || d[11] !== t || d[12] !== w || d[13] !== a || d[14] !== i ? (s = (0, r.jsxs)("button", {
                type: "button",
                className: t,
                "aria-pressed": u,
                disabled: p,
                onClick: w,
                children: [n, a, i]
            }), d[9] = p, d[10] = u, d[11] = t, d[12] = w, d[13] = a, d[14] = i, d[15] = s) : s = d[15], s
        }
        n.d(t, {
            a: () => M
        })
    }),
    MCzV: (function(e, t, n) {
        n.d(t, {
            a: () => p
        });
        var r = n("SRbQ"),
            l = n("S2r0"),
            a = n("zKw6"),
            i = n.n(a),
            o = n("GaA7"),
            s = n("rvFo");
        let {
            posix: d
        } = i();
        async function c(e) {
            let {
                environmentId: t,
                directoryPath: n,
                directoriesOnly: l
            } = e, a = {
                stack: [],
                error: void 0,
                hasError: !1
            };
            try {
                let e = o.appServices.hostedThreadFiles;
                if (null == e) throw Error("Executor file browsing is unavailable");
                let i = n ?? await e.getRoot({
                    environmentId: t,
                    cwd: null
                });
                if (null == i || !d.isAbsolute(i)) throw Error("An absolute executor directory is required");
                let s = (0, r.a)(a, await e.readDirectory({
                        environmentId: t,
                        workspaceRoot: i,
                        directoriesOnly: l,
                        includeHidden: !0
                    }), !1),
                    c = d.dirname(i);
                return {
                    directoryPath: i,
                    parentPath: c === i ? null : c,
                    entries: s.entries.map(e => ({
                        ...e,
                        path: d.join(i, e.path)
                    }))
                }
            } catch (e) {
                a.error = e, a.hasError = !0
            } finally {
                (0, r.e)(a)
            }
        }
        var u = n("sb0z");

        function p(e, t, n) {
            var r;
            return null != e.executor ? (r = {
                ...e.executor,
                directoryPath: t,
                directoriesOnly: n
            }, (0, l.a)({
                queryKey: ["executor-folder", r],
                queryFn: () => c(r),
                retry: !1,
                staleTime: s.b.FIVE_SECONDS
            })) : (0, u.b)({
                hostId: e.hostId,
                directoryPath: t,
                directoriesOnly: n
            })
        }
    }),
    sb0z: (function(e, t, n) {
        var r = n("S2r0"),
            l = n("GaA7"),
            a = n("q77y"),
            i = n("rvFo");
        async function o(e, t) {
            t?.throwIfAborted();
            let n = l.appServices.workspaceFiles;
            if (null == n.browseDirectory) throw Error("Host directory browsing is not supported by this host");
            return (0, a.a)(n.browseDirectory(e), t)
        }

        function s(e) {
            return (0, r.a)({
                queryKey: ["workspace-files", "browse-directory", e],
                queryFn: t => {
                    let {
                        signal: n
                    } = t;
                    return o(e, n)
                },
                staleTime: i.b.FIVE_SECONDS
            })
        }
        n.d(t, {
            a: () => o,
            b: () => s
        })
    }),
    w5yV: (function(e, t, n) {
        var r = n("FW69"),
            l = n("ajVv");
        let a = new Set(["auto", "clip", "hidden", "overlay", "scroll"]);

        function i(e) {
            let {
                bottomBoundarySelector: t,
                portalTarget: n,
                targetContainer: a,
                targetSelector: i,
                windowZoom: s
            } = e, u = window.getSelection();
            if (null == u || 0 === u.rangeCount || u.isCollapsed) return null;
            let p = function(e, t, n) {
                var r, l;
                let a, i, o = d(e.anchorNode, e.anchorOffset, n),
                    s = d(e.focusNode, e.focusOffset, n);
                if (null != o && null != s && o.target !== s.target) return null;
                let c = o ?? s;
                return null == c || null != c.element.closest('[contenteditable="true"]') ? null : {
                    ...c,
                    range: (r = t, l = c.target, (a = document.createRange()).selectNodeContents(l), i = r.cloneRange(), (!l.contains(i.startContainer) || 0 > i.compareBoundaryPoints(Range.START_TO_START, a)) && i.setStart(a.startContainer, a.startOffset), (!l.contains(i.endContainer) || i.compareBoundaryPoints(Range.END_TO_END, a) > 0) && i.setEnd(a.endContainer, a.endOffset), i)
                }
            }(u, u.getRangeAt(0), i);
            if (null == p || null != a && !a.contains(p.target)) return null;
            let m = (0, r.a)(p.range)?.trim() ?? p.range.toString().trim();
            if (0 === m.length) return null;
            let f = null == t ? null : a?.querySelector(t),
                h = f instanceof HTMLElement ? f.getBoundingClientRect().top : void 0,
                g = o({
                    ...p,
                    bottomBoundaryTop: h
                });
            if (null == g) return null;
            let {
                rect: x
            } = g, w = n?.contains(p.target) === !0 ? n : void 0, b = w?.getBoundingClientRect(), v = null == b ? {
                left: 0,
                right: window.innerWidth
            } : {
                left: -b.left / s,
                right: (window.innerWidth - b.left) / s
            }, y = null == b ? x : new DOMRect((x.left - b.left) / s, (x.top - b.top) / s, x.width / s, x.height / s), j = c(p.range.startContainer) ?? p.element;
            return {
                direction: "rtl" === window.getComputedStyle(j).direction ? "rtl" : "ltr",
                portalTarget: w,
                rect: y,
                selectionRange: p.range.cloneRange(),
                selectedText: m,
                target: p.target,
                targetId: p.target.getAttribute(l.a),
                viewportHorizontalBounds: v
            }
        }

        function o(e) {
            let {
                range: t,
                element: n,
                target: r,
                bottomBoundaryTop: l
            } = e, a = u(n, l);
            if (null == a) return null;
            let i = function(e, t, n, r) {
                let l = Array.from(e.getClientRects()),
                    a = t.getBoundingClientRect(),
                    i = p(l, r);
                if (null != i && (l.length > 1 || null != m(i, a))) return i;
                let o = e.getBoundingClientRect(),
                    s = m(o, r);
                return null != s && null != m(s, a) ? s : l.some(e => e.width > 0 && e.height > 0) || o.width > 0 && o.height > 0 ? null : p(Array.from(t.getClientRects()), r) ?? m(a, r) ?? p(Array.from(n.getClientRects()), r) ?? m(n.getBoundingClientRect(), r)
            }(t, n, r, a);
            return null == i ? null : {
                rect: i,
                bounds: a
            }
        }

        function s(e, t) {
            return null != e && null != t && e.direction === t.direction && e.portalTarget === t.portalTarget && e.selectedText === t.selectedText && e.selectionRange.startContainer === t.selectionRange.startContainer && e.selectionRange.startOffset === t.selectionRange.startOffset && e.selectionRange.endContainer === t.selectionRange.endContainer && e.selectionRange.endOffset === t.selectionRange.endOffset && e.target === t.target && e.targetId === t.targetId && e.viewportHorizontalBounds.left === t.viewportHorizontalBounds.left && e.viewportHorizontalBounds.right === t.viewportHorizontalBounds.right && e.rect.left === t.rect.left && e.rect.top === t.rect.top && e.rect.width === t.rect.width && e.rect.height === t.rect.height
        }

        function d(e, t, n) {
            let r = c(e),
                l = r?.closest(n);
            if (r instanceof HTMLElement && l instanceof HTMLElement) return {
                element: r,
                target: l
            };
            if (!(e instanceof Element)) return null;
            for (let r of [e.childNodes[t], e.childNodes[t - 1]]) {
                let e = c(r),
                    t = e?.closest(n);
                if (e instanceof HTMLElement && t instanceof HTMLElement) return {
                    element: e,
                    target: t
                }
            }
            return null
        }

        function c(e) {
            return e instanceof Element ? e : e?.parentElement ?? null
        }

        function u(e, t) {
            let n = {
                    bottom: null == t ? window.innerHeight : Math.min(window.innerHeight, t),
                    left: 0,
                    right: window.innerWidth,
                    top: 0
                },
                r = e;
            for (; null != r && r !== document.body && r !== document.documentElement;) {
                let e = window.getComputedStyle(r),
                    t = (e.overflowX || e.overflow).split(/\s+/).some(e => a.has(e)),
                    l = (e.overflowY || e.overflow).split(/\s+/).some(e => a.has(e));
                if (t || l) {
                    let e = r.getBoundingClientRect();
                    if ((n = {
                            bottom: l ? Math.min(n.bottom, e.bottom) : n.bottom,
                            left: t ? Math.max(n.left, e.left) : n.left,
                            right: t ? Math.min(n.right, e.right) : n.right,
                            top: l ? Math.max(n.top, e.top) : n.top
                        }).right <= n.left || n.bottom <= n.top) return null
                }
                r = r.parentElement
            }
            return n.bottom <= n.top ? null : n
        }

        function p(e, t) {
            for (let n of e) {
                let e = m(n, t);
                if (null != e) return e
            }
            return null
        }

        function m(e, t) {
            let n = Math.max(e.left, t.left),
                r = Math.max(e.top, t.top),
                l = Math.min(e.right, t.right),
                a = Math.min(e.bottom, t.bottom);
            return n >= l || r >= a ? null : new DOMRect(n, r, l - n, a - r)
        }
        n.d(t, {
            a: () => u,
            b: () => o,
            c: () => i,
            d: () => s
        })
    }),
    NqfB: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("on57"),
            i = n("zd8w"),
            o = n("wD9O"),
            s = n("i7gm"),
            d = n("bIvi"),
            c = n("w5yV"),
            u = n("ajVv");

        function p(e) {
            let t, n, p, h, g, x, w, b, v, y = (0, l.c)(40),
                {
                    align: j,
                    bottomBoundarySelector: C,
                    children: k,
                    className: S,
                    onOpen: A,
                    portalTargetSelector: P,
                    targetContainer: N,
                    targetContainerRefs: M,
                    targetSelector: E
                } = e,
                T = void 0 === E ? u.b : E,
                F = (0, o.c)(),
                L = (0, i.useRef)(null),
                R = (0, i.useRef)(!1),
                D = (0, i.useRef)(null),
                z = (0, i.useRef)(null),
                [B, O] = (0, i.useState)(null);
            y[0] !== A ? (t = e => {
                A?.(e)
            }, y[0] = A, y[1] = t) : t = y[1];
            let _ = (0, i.useEffectEvent)(t);
            y[2] !== B || y[3] !== F ? (n = () => {
                let e = D.current?.getBoundingClientRect();
                if (null == B || null == e) return;
                let t = B.portalTarget?.getBoundingClientRect(),
                    n = null == t ? 1 : F;
                return {
                    point: {
                        x: e.left + e.width / 2,
                        y: e.bottom
                    },
                    width: e.width,
                    selectionRect: {
                        x: B.rect.left * n + (t?.left ?? 0),
                        y: B.rect.top * n + (t?.top ?? 0),
                        width: B.rect.width * n,
                        height: B.rect.height * n
                    },
                    windowZoom: F
                }
            }, y[2] = B, y[3] = F, y[4] = n) : n = y[4];
            let I = (0, d.a)(n);
            if (y[5] !== C || y[6] !== _ || y[7] !== P || y[8] !== N || y[9] !== M || y[10] !== T || y[11] !== F ? (p = () => {
                    let e = null,
                        t = () => {
                            null != L.current && (window.cancelAnimationFrame(L.current), L.current = null)
                        },
                        n = () => {
                            t();
                            let e = window.getSelection();
                            null == z.current && (null == e || 0 === e.rangeCount || e.isCollapsed) || (L.current = window.requestAnimationFrame(() => {
                                L.current = null;
                                let e = null != N || null == M ? [N] : M.map(f).filter(m),
                                    t = null;
                                for (let n of e)
                                    if (null != (t = (0, c.c)({
                                            bottomBoundarySelector: C,
                                            portalTarget: null == P ? void 0 : n?.querySelector(P) ?? void 0,
                                            targetContainer: n,
                                            targetSelector: T,
                                            windowZoom: F
                                        }))) break;
                                (0, c.d)(z.current, t) || (null == z.current && null != t && _(t), z.current = t, O(t))
                            }))
                        },
                        r = () => {
                            let e = window.getSelection();
                            R.current || null == e || 0 === e.rangeCount || e.isCollapsed || n()
                        },
                        l = t => {
                            let l = window.getSelection(),
                                a = z.current?.portalTarget;
                            if (!R.current && null != l && 0 !== l.rangeCount && !l.isCollapsed) {
                                if (null != a && a.contains(l.getRangeAt(0).commonAncestorContainer)) {
                                    let n = t.target;
                                    if (!(n instanceof Node && a.contains(n))) return void(null != e && window.clearTimeout(e), e = window.setTimeout(() => {
                                        e = null, r()
                                    }, 100));
                                    if (!l.getRangeAt(0).intersectsNode(n)) return
                                }
                                n()
                            }
                        },
                        a = e => {
                            let n = e.target;
                            n instanceof Node && D.current?.contains(n) || (R.current = !0, t(), z.current = null, O(null))
                        },
                        i = () => {
                            R.current = !1, n()
                        },
                        o = () => {
                            if (R.current) {
                                t(), z.current = null, O(null);
                                return
                            }
                            n()
                        };
                    return n(), document.addEventListener("selectionchange", o), window.addEventListener("dblclick", n), window.addEventListener("keyup", n), window.addEventListener("pointerdown", a), window.addEventListener("pointerup", i), window.addEventListener("pointercancel", i), window.addEventListener("resize", r), window.addEventListener("scroll", l, !0), () => {
                        null != e && window.clearTimeout(e), t(), document.removeEventListener("selectionchange", o), window.removeEventListener("dblclick", n), window.removeEventListener("keyup", n), window.removeEventListener("pointerdown", a), window.removeEventListener("pointerup", i), window.removeEventListener("pointercancel", i), window.removeEventListener("resize", r), window.removeEventListener("scroll", l, !0)
                    }
                }, y[5] = C, y[6] = _, y[7] = P, y[8] = N, y[9] = M, y[10] = T, y[11] = F, y[12] = p) : p = y[12], y[13] !== C || y[14] !== P || y[15] !== N || y[16] !== M || y[17] !== T || y[18] !== F ? (h = [C, P, N, M, T, F], y[13] = C, y[14] = P, y[15] = N, y[16] = M, y[17] = T, y[18] = F, y[19] = h) : h = y[19], (0, i.useEffect)(p, h), null == B) return null;
            let q = .5;
            "start" === (void 0 === j ? "center" : j) && (q = +("rtl" === B.direction));
            let H = B.rect.left + B.rect.width * q,
                W = B.viewportHorizontalBounds.left + 8 - H,
                U = B.viewportHorizontalBounds.right - 8 - H,
                V = B.portalTarget ?? document.body,
                $ = null == B.portalTarget ? "fixed z-50" : "absolute z-[1]";
            y[20] !== S || y[21] !== $ ? (g = (0, a.b)("pointer-events-none w-max", $, S), y[20] = S, y[21] = $, y[22] = g) : g = y[22];
            let Q = B.viewportHorizontalBounds.right - B.viewportHorizontalBounds.left - 16,
                K = B.rect.top - 8,
                G = `translateX(clamp(${W}px, ${-100*q}%, calc(${U}px - 100%))) translateY(-100%)`;
            return y[23] !== H || y[24] !== Q || y[25] !== K || y[26] !== G ? (x = {
                left: H,
                maxWidth: Q,
                top: K,
                transform: G
            }, y[23] = H, y[24] = Q, y[25] = K, y[26] = G, y[27] = x) : x = y[27], y[28] !== k || y[29] !== I || y[30] !== B || y[31] !== F ? (w = null == B.portalTarget && 1 !== F ? (0, r.jsx)("div", {
                style: {
                    zoom: F
                },
                children: k(B, I)
            }) : k(B, I), y[28] = k, y[29] = I, y[30] = B, y[31] = F, y[32] = w) : w = y[32], y[33] !== x || y[34] !== w || y[35] !== g ? (b = (0, r.jsx)("div", {
                ref: D,
                className: g,
                style: x,
                children: w
            }), y[33] = x, y[34] = w, y[35] = g, y[36] = b) : b = y[36], y[37] !== b || y[38] !== V ? (v = (0, r.jsx)(s.a, {
                container: V,
                children: b
            }), y[37] = b, y[38] = V, y[39] = v) : v = y[39], v
        }

        function m(e) {
            return null != e
        }

        function f(e) {
            return e.current
        }
        n.d(t, {
            a: () => p
        })
    }),
    JEFL: (function(e, t, n) {
        var r = n("ABep"),
            l = n("QosV"),
            a = n("zd8w"),
            i = n("Wf1j"),
            o = n("oyxz"),
            s = n("ygO2"),
            d = n("jqmc"),
            c = n("b4SA");

        function u(e) {
            let t, n, u, p, m, f, h = (0, l.c)(47),
                {
                    conversationTerminology: g,
                    onAddSelectedText: x,
                    onCommentSelectedText: w,
                    onEditModeChange: b,
                    onEditSelectedText: v,
                    onMoreDetails: y,
                    onOpenSideChat: j,
                    resume: C,
                    selectedText: k
                } = e,
                S = void 0 === g ? "task" : g,
                A = (0, i.a)(),
                [P, N] = (0, a.useState)(C?.mode === "edit" ? C.instruction : ""),
                [M, E] = (0, a.useState)(C?.mode ?? "actions");
            if ("pending" === M) return null;
            if ("edit" === M && null != v) {
                let e, t, n, l, a, i, o, d, u, p;
                return h[0] !== b ? (e = e => {
                    e.stopPropagation(), "Escape" === e.key && (e.preventDefault(), b?.(!1), E("actions-focused"))
                }, h[0] = b, h[1] = e) : e = h[1], h[2] !== P || h[3] !== b || h[4] !== v ? (t = e => {
                    e.preventDefault(), 0 !== P.trim().length && (E("pending"), v(P).then(e => {
                        "retry" === e && (b?.(!1), E("actions-focused"))
                    }))
                }, h[2] = P, h[3] = b, h[4] = v, h[5] = t) : t = h[5], h[6] !== A ? (n = A.formatMessage({
                    id: "selectedTextOverlay.editInput",
                    defaultMessage: "Edit instruction",
                    description: "Accessible label for an instruction that edits selected text"
                }), h[6] = A, h[7] = n) : n = h[7], h[8] !== A ? (l = A.formatMessage({
                    id: "selectedTextOverlay.editPlaceholder",
                    defaultMessage: "Describe the edit…",
                    description: "Placeholder for an instruction that edits selected text"
                }), h[8] = A, h[9] = l) : l = h[9], h[10] === Symbol.for("react.memo_cache_sentinel") ? (a = e => {
                    N(e.target.value)
                }, h[10] = a) : a = h[10], h[11] !== P || h[12] !== n || h[13] !== l ? (i = (0, r.jsx)("input", {
                    "aria-label": n,
                    autoComplete: "off",
                    autoFocus: !0,
                    className: "min-w-0 flex-1 bg-transparent text-sm text-default outline-none placeholder:text-codex-description",
                    placeholder: l,
                    required: !0,
                    value: P,
                    onChange: a
                }), h[11] = P, h[12] = n, h[13] = l, h[14] = i) : i = h[14], h[15] !== A ? (o = A.formatMessage({
                    id: "selectedTextOverlay.editSubmit",
                    defaultMessage: "Submit edit instruction",
                    description: "Accessible label for submitting an instruction to edit selected text"
                }), h[15] = A, h[16] = o) : o = h[16], h[17] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, r.jsx)(c.a, {
                    "aria-hidden": "true",
                    className: "icon-2xs"
                }), h[17] = d) : d = h[17], h[18] !== o ? (u = (0, r.jsx)(s.a, {
                    "aria-label": o,
                    color: "primary",
                    size: "composerSm",
                    type: "submit",
                    uniform: !0,
                    children: d
                }), h[18] = o, h[19] = u) : u = h[19], h[20] !== u || h[21] !== e || h[22] !== t || h[23] !== i ? (p = (0, r.jsxs)("form", {
                    className: "pointer-events-auto flex w-[27rem] max-w-full items-center gap-1.5 rounded-full border border-default bg-surface p-1 ps-3.5 font-sans shadow-lg",
                    onKeyDown: e,
                    onSubmit: t,
                    children: [i, u]
                }), h[20] = u, h[21] = e, h[22] = t, h[23] = i, h[24] = p) : p = h[24], p
            }
            return h[25] !== S || h[26] !== x || h[27] !== k ? (t = null != x ? (0, r.jsx)(d.b, {
                onClick: () => {
                    window.getSelection()?.removeAllRanges(), x(k)
                },
                children: "chat" === S ? (0, r.jsx)(o.a, {
                    id: "selectedTextOverlay.addToChat",
                    defaultMessage: "Ask ChatGPT",
                    description: "Button label for adding currently selected text from an overlay anchored to that selection to a ChatGPT chat"
                }) : (0, r.jsx)(o.a, {
                    id: "selectedTextOverlay.addToCodex",
                    defaultMessage: "Add to chat",
                    description: "Button label for adding currently selected text from an overlay anchored to that selection to the chat"
                })
            }) : null, h[25] = S, h[26] = x, h[27] = k, h[28] = t) : t = h[28], h[29] !== y || h[30] !== k ? (n = null != y ? (0, r.jsx)(d.b, {
                onClick: () => {
                    window.getSelection()?.removeAllRanges(), y(k)
                },
                children: (0, r.jsx)(o.a, {
                    id: "selectedTextOverlay.moreDetails",
                    defaultMessage: "More details",
                    description: "Button label for asking for more details about the currently selected text"
                })
            }) : null, h[29] = y, h[30] = k, h[31] = n) : n = h[31], h[32] !== j || h[33] !== k ? (u = null != j ? (0, r.jsx)(d.b, {
                onClick: () => {
                    window.getSelection()?.removeAllRanges(), j(k)
                },
                children: (0, r.jsx)(o.a, {
                    id: "selectedTextOverlay.askInSideChat",
                    defaultMessage: "Ask in side chat",
                    description: "Button label for asking about currently selected text in a side chat"
                })
            }) : null, h[32] = j, h[33] = k, h[34] = u) : u = h[34], h[35] !== w ? (p = null != w ? (0, r.jsx)(d.b, {
                onClick: () => {
                    window.getSelection()?.removeAllRanges(), w()
                },
                children: (0, r.jsx)(o.a, {
                    id: "selectedTextOverlay.comment",
                    defaultMessage: "Comment",
                    description: "Button label for commenting on the currently selected text"
                })
            }) : null, h[35] = w, h[36] = p) : p = h[36], h[37] !== M || h[38] !== b || h[39] !== v ? (m = null != v ? (0, r.jsx)(d.b, {
                autoFocus: "actions-focused" === M,
                onClick: () => {
                    b?.(!0), E("edit")
                },
                children: (0, r.jsx)(o.a, {
                    id: "selectedTextOverlay.edit",
                    defaultMessage: "Edit",
                    description: "Button label for editing currently selected text with a model"
                })
            }) : null, h[37] = M, h[38] = b, h[39] = v, h[40] = m) : m = h[40], h[41] !== t || h[42] !== n || h[43] !== u || h[44] !== p || h[45] !== m ? (f = (0, r.jsxs)(d.a, {
                children: [t, n, u, p, m]
            }), h[41] = t, h[42] = n, h[43] = u, h[44] = p, h[45] = m, h[46] = f) : f = h[46], f
        }
        n.d(t, {
            a: () => u
        })
    }),
    YgCO: (function(e, t, n) {
        var r = n("zkY4");

        function l(e) {
            if (e?.includes("*/*")) return;
            let t = e?.flatMap(e => {
                let t = e.toLowerCase();
                return t.startsWith(".") ? [t.slice(1)] : t.endsWith("/*") ? Object.entries(r.extensions).flatMap(e => {
                    let [n, r] = e;
                    return n.startsWith(t.slice(0, -1)) ? r : []
                }) : r.extensions[t] ?? []
            });
            return t?.length ? t : void 0
        }

        function a(e, t) {
            return !t?.length || t.some(t => e.toLowerCase().endsWith(`.${t}`))
        }
        n.d(t, {
            a: () => l,
            b: () => a
        })
    })
};