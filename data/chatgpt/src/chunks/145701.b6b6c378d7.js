export const __rspack_esm_id = 145701;
export const __rspack_esm_ids = [145701];
export const __webpack_modules__ = {
    Fh9: (function(e, a, t) {
        var i = t("A");
        t("zd"), a.a = e => (0, i.jsx)("svg", {
            width: 20,
            height: 20,
            viewBox: "0 0 20 20",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            ...e,
            children: (0, i.jsx)("path", {
                d: "M16.375 2.5H3.625C3.32663 2.5 3.04048 2.61853 2.8295 2.8295C2.61853 3.04048 2.5 3.32663 2.5 3.625V16.375C2.5 16.6734 2.61853 16.9595 2.8295 17.1705C3.04048 17.3815 3.32663 17.5 3.625 17.5H16.375C16.6734 17.5 16.9595 17.3815 17.1705 17.1705C17.3815 16.9595 17.5 16.6734 17.5 16.375V3.625C17.5 3.32663 17.3815 3.04048 17.1705 2.8295C16.9595 2.61853 16.6734 2.5 16.375 2.5ZM7 15.25H4.75V8.5H7V15.25ZM5.875 7.1875C5.61714 7.18013 5.36716 7.09693 5.15631 6.94831C4.94546 6.79968 4.78309 6.59221 4.68947 6.35183C4.59586 6.11145 4.57516 5.84881 4.62995 5.59673C4.68475 5.34465 4.81262 5.1143 4.99758 4.93448C5.18255 4.75466 5.4164 4.63332 5.66992 4.58565C5.92345 4.53797 6.1854 4.56606 6.42305 4.66641C6.6607 4.76675 6.86351 4.93491 7.00614 5.14986C7.14877 5.36481 7.22489 5.61703 7.225 5.875C7.21908 6.22776 7.07375 6.56384 6.82079 6.80977C6.56782 7.05571 6.22779 7.19151 5.875 7.1875ZM15.25 15.25H13V11.695C13 10.63 12.55 10.2475 11.965 10.2475C11.7935 10.2589 11.6259 10.3041 11.4719 10.3805C11.3179 10.4569 11.1805 10.5629 11.0676 10.6925C10.9547 10.8221 10.8685 10.9728 10.814 11.1358C10.7595 11.2988 10.7378 11.471 10.75 11.6425C10.7463 11.6774 10.7463 11.7126 10.75 11.7475V15.25H8.5V8.5H10.675V9.475C10.8944 9.14125 11.1958 8.86943 11.5504 8.68558C11.905 8.50172 12.3008 8.412 12.7 8.425C13.8625 8.425 15.22 9.07 15.22 11.17L15.25 15.25Z",
                fill: "currentColor"
            })
        })
    }),
    vlt: (function(e, a, t) {
        t.d(a, {
            a: () => ed,
            ChatGptConversationShareRecoveryDialog: () => ec
        });
        var i = t("A"),
            n = t("Qo"),
            s = t("hKY"),
            r = t("T0"),
            o = t("Xnl"),
            l = t("zd"),
            c = t("Wf"),
            d = t("oy"),
            h = t("Qg"),
            u = t("O0M"),
            g = t("Csl"),
            p = t("zKC"),
            m = t("mU"),
            f = t("Ot7"),
            b = t("bf"),
            v = t("RN"),
            y = t("SGs"),
            w = t("yG"),
            _ = t("OW"),
            T = t("akk"),
            x = t("FGv"),
            k = t("TnP"),
            C = t("qKA"),
            S = t("zH"),
            j = t("WF"),
            I = t("rv"),
            A = t("HF"),
            M = t("taW"),
            P = t("r9i"),
            E = t("Y7n"),
            L = t("oU3"),
            N = t("SEB"),
            D = t("OOa"),
            O = t("fww"),
            R = t("cQW"),
            G = t("Tyw"),
            H = t("rfh"),
            F = t("PA");

        function W(e) {
            let a, t = (0, n.c)(4),
                {
                    includeConversationAudience: s,
                    linkAppearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            if (void 0 !== s && s) {
                let e;
                return t[0] !== o ? (e = (0, i.jsx)(d.a, {
                    id: "chatgptConversations.shareDialog.conversationMemoryDisclosure",
                    defaultMessage: "Anyone with this link can access messages up to this point. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                    description: "Audience and privacy explanation in the personal ChatGPT conversation sharing dialog. The link includes messages through the selected point, but does not give viewers access to the underlying Memory sources. The learnMore tag links to the shared-links help article.",
                    values: {
                        learnMore: e => (0, i.jsx)(U, {
                            appearance: o,
                            children: e
                        })
                    }
                }), t[0] = o, t[1] = e) : e = t[1], e
            }
            return t[2] !== o ? (a = (0, i.jsx)(d.a, {
                id: "chatgptConversations.shareDialog.memoryDisclosure",
                defaultMessage: "Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                description: "Privacy disclosure in ChatGPT content-sharing dialogs for personal and workspace accounts. Underlying Memory sources are not included in what recipients can view. The learnMore tag links to the shared-links help article.",
                values: {
                    learnMore: e => (0, i.jsx)(U, {
                        appearance: o,
                        children: e
                    })
                }
            }), t[2] = o, t[3] = a) : a = t[3], a
        }

        function U(e) {
            let a, t = (0, n.c)(3),
                {
                    children: s,
                    appearance: r
                } = e,
                o = void 0 === r ? "secondary" : r;
            return t[0] !== o || t[1] !== s ? (a = (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(F.a, {
                    appearance: o,
                    href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links",
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser",
                    underline: "always",
                    children: s
                })
            }), t[0] = o, t[1] = s, t[2] = a) : a = t[2], a
        }
        var z = t("Rl9"),
            B = t("on"),
            q = t("ygO"),
            Y = t("HOL"),
            K = t("ZW"),
            V = t("WAV"),
            $ = e => (0, i.jsx)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: 24,
                height: 24,
                viewBox: "0 0 24 24",
                fill: "currentColor",
                ...e,
                children: (0, i.jsx)("path", {
                    d: "M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
                })
            }),
            Q = t("Fh9"),
            X = t("hZa"),
            Z = t("O6");

        function J(e) {
            let a, t, s, r, l, c, d = (0, n.c)(22),
                {
                    "aria-label": h,
                    "data-destination": u,
                    disabled: g,
                    icons: p,
                    isBusy: m,
                    label: f,
                    announceLabel: b,
                    type: y,
                    onClick: w
                } = e,
                _ = void 0 !== m && m,
                T = void 0 === y ? "button" : y;
            d[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations"
            }, d[0] = a) : a = d[0];
            let x = (0, o.x)(Z.b, a),
                k = x ? p.large : p.compact,
                C = x ? "size-16" : "size-11";
            d[1] !== C ? (t = (0, B.b)("share-destination-icon flex items-center justify-center rounded-full", C), d[1] = C, d[2] = t) : t = d[2], d[3] !== x || d[4] !== k || d[5] !== _ ? (s = _ ? (0, i.jsx)(v.a, {
                as: "span",
                className: x ? "size-8" : "icon-sm"
            }) : k, d[3] = x, d[4] = k, d[5] = _, d[6] = s) : s = d[6], d[7] !== t || d[8] !== s ? (r = (0, i.jsx)("span", {
                className: t,
                children: s
            }), d[7] = t, d[8] = s, d[9] = r) : r = d[9];
            let S = void 0 !== b && b ? "polite" : void 0;
            return d[10] !== f || d[11] !== S ? (l = (0, i.jsx)("span", {
                className: "w-full text-center text-xs whitespace-nowrap text-default select-none",
                "aria-live": S,
                children: f
            }), d[10] = f, d[11] = S, d[12] = l) : l = d[12], d[13] !== h || d[14] !== u || d[15] !== g || d[16] !== _ || d[17] !== w || d[18] !== l || d[19] !== r || d[20] !== T ? (c = (0, i.jsxs)(q.a, {
                "aria-label": h,
                "aria-busy": _,
                "data-destination": u,
                color: "shareDestination",
                disabled: g,
                size: "shareDestination",
                type: T,
                onClick: w,
                children: [r, l]
            }), d[13] = h, d[14] = u, d[15] = g, d[16] = _, d[17] = w, d[18] = l, d[19] = r, d[20] = T, d[21] = c) : c = d[21], c
        }
        var ee = t("Adk"),
            ea = t("Get"),
            et = t("DY5"),
            ei = t("UiY"),
            en = t("O8"),
            es = t("cLL"),
            er = t("vDQ");
        let eo = new Set(["BR", "DE", "ES", "GB", "IE", "IT", "NL", "PT"]);

        function el(e) {
            let a, t, s, r, l, d, h, u, g, p, m, f, y, w, _, T, x, k, C, S, j, I, A, M, P, E, L = (0, n.c)(82),
                {
                    copyLabel: N,
                    copyDisabled: D,
                    isBusy: O,
                    isDownloading: R,
                    socialDestinationsDisabled: G,
                    showSocialDestinations: H,
                    onCopy: F,
                    onDownload: W,
                    additionalActions: U,
                    onSocialShare: el,
                    mobileImageActions: ec
                } = e,
                ed = void 0 !== R && R,
                eh = null != ec;
            L[0] !== eh ? (a = {
                layer: "3136899520",
                parameter: "large_share_destinations",
                disableExposureLog: eh
            }, L[0] = eh, L[1] = a) : a = L[1];
            let eu = (0, o.x)(Z.b, a),
                eg = (0, c.a)(),
                {
                    client: ep
                } = (0, X.j)(),
                em = ep.getContext().user?.country?.trim().toUpperCase(),
                ef = "JP" === em && H,
                eb = !ef;
            L[2] !== eb ? (t = {
                layer: "494762337",
                parameter: "enabled",
                disableExposureLog: eb
            }, L[2] = eb, L[3] = t) : t = L[3];
            let ev = (0, o.x)(ef ? Z.b : null, t),
                ey = ef && ev;
            L[4] === Symbol.for("react.memo_cache_sentinel") ? (s = (0, i.jsx)(Y.a, {
                asset: et.a
            }), L[4] = s) : s = L[4], L[5] === Symbol.for("react.memo_cache_sentinel") ? (r = (0, i.jsx)(Y.a, {
                asset: et.a
            }), L[5] = r) : r = L[5], L[6] !== el ? (l = e => el("messages", e), L[6] = el, L[7] = l) : l = L[7], L[8] === Symbol.for("react.memo_cache_sentinel") ? (d = (0, i.jsx)(Y.a, {
                asset: es.a
            }), L[8] = d) : d = L[8], L[9] === Symbol.for("react.memo_cache_sentinel") ? (h = (0, i.jsx)(Y.a, {
                asset: es.a
            }), L[9] = h) : h = L[9], L[10] !== el ? (u = e => el("whatsapp", e), L[10] = el, L[11] = u) : u = L[11];
            let ew = [{
                id: "messages",
                largeIcon: s,
                disabled: G,
                icon: r,
                label: eg.formatMessage({
                    id: "chatgptConversations.mobileImageShare.messages",
                    defaultMessage: "Messages",
                    description: "Destination in the mobile generated-image share sheet that opens a text message containing the image link"
                }),
                onClick: l
            }, {
                id: "whatsapp",
                largeIcon: d,
                disabled: G,
                icon: h,
                label: eg.formatMessage({
                    id: "chatgptConversations.mobileImageShare.whatsapp",
                    defaultMessage: "WhatsApp",
                    description: "Destination in the mobile generated-image share sheet that opens WhatsApp with the image link"
                }),
                onClick: u
            }];
            null != em && eo.has(em) && ew.reverse(), L[12] !== eg || L[13] !== O || L[14] !== ed || L[15] !== ec || L[16] !== W ? (g = null == W ? [] : [{
                id: "download",
                largeIcon: (0, i.jsx)(b.s, {
                    "aria-hidden": "true"
                }),
                disabled: ed || null != ec && O,
                icon: null == ec ? (0, i.jsx)(b.r, {}) : (0, i.jsx)(Y.a, {
                    asset: ee.a
                }),
                label: eg.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.download.label",
                    defaultMessage: "Download",
                    description: "Short label below a circular button in the generated-image Share dialog. Saves the selected image, or all images in the selected series, to the user's device without creating a shared link."
                }),
                onClick: W
            }], L[12] = eg, L[13] = O, L[14] = ed, L[15] = ec, L[16] = W, L[17] = g) : g = L[17];
            let e_ = g;
            L[18] === Symbol.for("react.memo_cache_sentinel") ? (p = (0, i.jsx)($, {
                "aria-hidden": "true"
            }), L[18] = p) : p = L[18], L[19] === Symbol.for("react.memo_cache_sentinel") ? (m = (0, i.jsx)($, {
                "aria-hidden": "true"
            }), L[19] = m) : m = L[19], L[20] !== eg ? (f = eg.formatMessage({
                id: "postSharingModal.line",
                defaultMessage: "LINE",
                description: "Short label for the LINE destination in ChatGPT conversation, message, and image sharing dialogs and menus. Selecting it opens LINE sharing so the user can choose recipients and send the shared link. Appears alongside X and LinkedIn. LINE is a messaging app brand name; keep its Latin letters and capitalization."
            }), L[20] = eg, L[21] = f) : f = L[21], L[22] !== el ? (y = e => el("line", e), L[22] = el, L[23] = y) : y = L[23], L[24] !== G || L[25] !== f || L[26] !== y ? (w = {
                id: "line",
                largeIcon: p,
                disabled: G,
                icon: m,
                label: f,
                onClick: y
            }, L[24] = G, L[25] = f, L[26] = y, L[27] = w) : w = L[27];
            let eT = w;
            L[28] !== e_ || L[29] !== ec ? (_ = null == ec ? [] : e_, L[28] = e_, L[29] = ec, L[30] = _) : _ = L[30], L[31] === Symbol.for("react.memo_cache_sentinel") ? (T = (0, i.jsx)(b.xe, {
                "aria-hidden": "true"
            }), L[31] = T) : T = L[31], L[32] !== ec ? (x = null == ec ? (0, i.jsx)(b.we, {}) : (0, i.jsx)(Y.a, {
                asset: ei.a
            }), L[32] = ec, L[33] = x) : x = L[33], L[34] !== D || L[35] !== N || L[36] !== F || L[37] !== x ? (k = {
                id: "copy",
                largeIcon: T,
                disabled: D,
                icon: x,
                label: N,
                onClick: F
            }, L[34] = D, L[35] = N, L[36] = F, L[37] = x, L[38] = k) : k = L[38], L[39] !== eT || L[40] !== ec || L[41] !== ey ? (C = null != ec && ey ? [eT] : [], L[39] = eT, L[40] = ec, L[41] = ey, L[42] = C) : C = L[42], L[43] !== D || L[44] !== eg || L[45] !== ec ? (S = ec?.canNativeShare ? [{
                id: "native",
                largeIcon: (0, i.jsx)(Y.a, {
                    asset: ea.a
                }),
                disabled: D,
                icon: (0, i.jsx)(Y.a, {
                    asset: ea.a
                }),
                label: eg.formatMessage({
                    id: "chatgptConversations.mobileImageShare.native",
                    defaultMessage: "Share to",
                    description: "Action in the mobile generated-image share sheet that opens the operating system share sheet with a link to the image"
                }),
                onClick: ec.onNativeShare
            }] : [], L[43] = D, L[44] = eg, L[45] = ec, L[46] = S) : S = L[46];
            let ex = null != ec && H ? ew : [];
            L[47] !== eg || L[48] !== eT || L[49] !== ec || L[50] !== el || L[51] !== ey || L[52] !== H || L[53] !== G ? (j = H ? [...null == ec && ey ? [eT] : [], {
                id: "x",
                largeIcon: (0, i.jsx)(b.Yi, {
                    "aria-hidden": "true"
                }),
                disabled: G,
                icon: null == ec ? (0, i.jsx)(b.Xi, {
                    "aria-hidden": "true"
                }) : (0, i.jsx)(Y.a, {
                    asset: er.a
                }),
                label: eg.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.x.label",
                    defaultMessage: "X",
                    description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens X's post composer with the public post URL."
                }),
                onClick: e => el("x", e)
            }, {
                id: "linkedin",
                largeIcon: (0, i.jsx)(b.ye, {
                    "aria-hidden": "true"
                }),
                disabled: G,
                icon: null == ec ? (0, i.jsx)(Q.a, {
                    "aria-hidden": "true"
                }) : (0, i.jsx)(Y.a, {
                    asset: (0, K.b)(z.a)
                }),
                label: eg.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.linkedin.label",
                    defaultMessage: "LinkedIn",
                    description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens LinkedIn's post composer with the public post URL."
                }),
                onClick: e => el("linkedin", e)
            }, ...ey ? [] : [{
                id: "reddit",
                largeIcon: (0, i.jsx)(b.Mg, {
                    "aria-hidden": "true"
                }),
                disabled: G,
                icon: null == ec ? (0, i.jsx)(b.Lg, {
                    "aria-hidden": "true"
                }) : (0, i.jsx)(Y.a, {
                    asset: en.a
                }),
                label: eg.formatMessage({
                    id: "chatgptConversations.shareDialog.destination.reddit.label",
                    defaultMessage: "Reddit",
                    description: "Short destination label below a circular button in a ChatGPT post sharing dialog for a conversation, response, or generated image. Selecting it opens Reddit's submission form with the public post URL. Other destinations are Copy link, X, and LinkedIn."
                }),
                onClick: e => el("reddit", e)
            }]] : [], L[47] = eg, L[48] = eT, L[49] = ec, L[50] = el, L[51] = ey, L[52] = H, L[53] = G, L[54] = j) : j = L[54], L[55] !== e_ || L[56] !== ec ? (I = null == ec ? e_ : [], L[55] = e_, L[56] = ec, L[57] = I) : I = L[57], L[58] !== _ || L[59] !== k || L[60] !== C || L[61] !== S || L[62] !== ex || L[63] !== j || L[64] !== I ? (A = [..._, k, ...C, ...S, ...ex, ...j, ...I], L[58] = _, L[59] = k, L[60] = C, L[61] = S, L[62] = ex, L[63] = j, L[64] = I, L[65] = A) : A = L[65];
            let ek = A,
                eC = null == ec && null == U && "flex-wrap justify-center gap-x-6 gap-y-4",
                eS = null == ec && null != U && "gap-3",
                ej = null == ec && null != U && eu && "flex-wrap justify-center",
                eI = null == ec && null != U && !eu && "justify-start overflow-x-auto sm:justify-center",
                eA = null != ec && "gap-x-6",
                eM = null != ec && "mobileRow-V0E64y";
            return L[66] !== eC || L[67] !== eS || L[68] !== ej || L[69] !== eI || L[70] !== eA || L[71] !== eM ? (M = (0, B.b)("flex w-full", eC, eS, ej, eI, eA, eM), L[66] = eC, L[67] = eS, L[68] = ej, L[69] = eI, L[70] = eA, L[71] = eM, L[72] = M) : M = L[72], L[73] !== ek || L[74] !== O || L[75] !== ed || L[76] !== ec ? (P = ek.map(e => {
                let {
                    id: a,
                    disabled: t,
                    icon: n,
                    largeIcon: s,
                    label: r,
                    onClick: o
                } = e, l = "copy" === a && O || "download" === a && ed;
                return (0, i.jsx)(V.a, {
                    extension: "download" === a,
                    children: null == ec ? (0, i.jsx)(J, {
                        "aria-label": r,
                        "data-destination": a,
                        disabled: t,
                        icons: {
                            compact: n,
                            large: s
                        },
                        isBusy: l,
                        label: r,
                        announceLabel: "copy" === a,
                        type: "copy" === a ? "submit" : "button",
                        onClick: o
                    }) : (0, i.jsxs)(q.a, {
                        "aria-label": r,
                        "aria-busy": l,
                        color: "shareDestination",
                        unstyled: !0,
                        className: "mobileDestination-JRc58g",
                        "data-destination": a,
                        disabled: t,
                        size: "shareDestination",
                        type: "copy" === a ? "submit" : "button",
                        onClick: o,
                        children: [(0, i.jsx)("span", {
                            className: "destinationIcon-EuU6jl",
                            children: l ? (0, i.jsx)(v.a, {
                                as: "span",
                                className: "icon-sm"
                            }) : n
                        }), (0, i.jsx)("span", {
                            className: "w-full text-center whitespace-nowrap text-default select-none",
                            "aria-live": "copy" === a ? "polite" : void 0,
                            children: r
                        })]
                    })
                }, a)
            }), L[73] = ek, L[74] = O, L[75] = ed, L[76] = ec, L[77] = P) : P = L[77], L[78] !== U || L[79] !== M || L[80] !== P ? (E = (0, i.jsxs)("div", {
                className: M,
                children: [P, U]
            }), L[78] = U, L[79] = M, L[80] = P, L[81] = E) : E = L[81], E
        }

        function ec(e) {
            let a, t, s, r, c, d, h = (0, n.c)(12);
            h[0] !== e ? ({
                accountId: a,
                onClose: t,
                ...s
            } = e, h[0] = e, h[1] = a, h[2] = t, h[3] = s) : (a = h[1], t = h[2], s = h[3]);
            let u = (0, o.A)(g.e) === a;
            return h[4] !== u || h[5] !== t ? (r = () => {
                u || t()
            }, c = [u, t], h[4] = u, h[5] = t, h[6] = r, h[7] = c) : (r = h[6], c = h[7]), (0, l.useEffect)(r, c), h[8] !== u || h[9] !== t || h[10] !== s ? (d = u ? (0, i.jsx)(ed, {
                ...s,
                onClose: t
            }) : null, h[8] = u, h[9] = t, h[10] = s, h[11] = d) : d = h[11], d
        }

        function ed(e) {
            let a, t, s = (0, n.c)(8);
            return s[0] !== e.publishedShareLink?.shareLinkId || s[1] !== e.publishedWidget || s[2] !== e.shareSessionId || s[3] !== e.widget ? (a = null == e.widget && null == e.publishedWidget ? void 0 : JSON.stringify([e.widget?.attachment, e.publishedShareLink?.shareLinkId, e.shareSessionId]), s[0] = e.publishedShareLink?.shareLinkId, s[1] = e.publishedWidget, s[2] = e.shareSessionId, s[3] = e.widget, s[4] = a) : a = s[4], s[5] !== e || s[6] !== a ? (t = (0, i.jsx)(eh, {
                ...e
            }, a), s[5] = e, s[6] = a, s[7] = t) : t = s[7], t
        }

        function eh(e) {
            let a, t, h, g, p, b, v, A, F, U, z, B, q, Y, K, V, $, Q, X, Z, J, ee, ea, et, ei, en, es, er, eo, ec, ed, eh, ey, ew, e_, eT, ex, ek, eC, eS, ej, eE, eL = (0, n.c)(309),
                {
                    currentNodeId: eN,
                    image: eD,
                    imagePromptTemplate: eO,
                    imageShareOptions: eR,
                    recoveryShareLink: eG,
                    publishedShareLink: eH,
                    publishedWidget: eF,
                    messageIds: eW,
                    mobileImageSheet: eU,
                    trackMobileImageShareLifecycle: ez,
                    onClose: eB,
                    onResult: eq,
                    previewTurns: eY,
                    privacyNotices: eK,
                    prompt: eV,
                    receiverShareLink: e$,
                    response: eQ,
                    serverConversationId: eX,
                    shareSessionId: eZ,
                    source: eJ,
                    title: e1,
                    widget: e0
                } = e,
                e2 = (0, o.z)(_.a),
                [e3, e5] = (0, l.useState)(!1),
                e6 = (0, o.A)(null)?.data,
                e4 = (0, o.A)(null),
                e7 = (0, o.x)(null, eX),
                e8 = (0, c.a)(),
                e9 = (0, l.useRef)(!1),
                ae = (0, l.useRef)(!1);
            eL[0] !== eq ? (a = () => (e9.current = !0, () => {
                e9.current = !1, queueMicrotask(() => {
                    e9.current || ae.current || (ae.current = !0, eq?.(!1))
                })
            }), t = [eq], eL[0] = eq, eL[1] = a, eL[2] = t) : (a = eL[1], t = eL[2]), (0, l.useEffect)(a, t), eL[3] !== eq ? (h = function(e) {
                ae.current || (ae.current = !0, eq?.(e))
            }, eL[3] = eq, eL[4] = h) : h = eL[4];
            let aa = h;
            eL[5] !== aa || eL[6] !== eB ? (g = function() {
                aa(!1), eB()
            }, eL[5] = aa, eL[6] = eB, eL[7] = g) : g = eL[7];
            let at = g,
                ai = (0, l.useContext)(u.a);
            eL[8] !== eD || eL[9] !== e2 || eL[10] !== eX ? (p = null == eD ? void 0 : (0, R.a)(e2, eX, eD), eL[8] = eD, eL[9] = e2, eL[10] = eX, eL[11] = p) : p = eL[11];
            let an = p;
            eL[12] !== eO || eL[13] !== an || eL[14] !== eH || eL[15] !== e$ || eL[16] !== eG || eL[17] !== e2.queryClient ? (b = () => e$ ?? eH ?? eG ?? (null == an || null != eO ? null : e2.queryClient.getQueryData(an.queryKey) ?? null), eL[12] = eO, eL[13] = an, eL[14] = eH, eL[15] = e$, eL[16] = eG, eL[17] = e2.queryClient, eL[18] = b) : b = eL[18];
            let [as, ar] = (0, l.useState)(b), [ao] = (0, l.useState)(eb), al = eZ ?? ao, [ac, ad] = (0, l.useState)("idle"), [ah, au] = (0, l.useState)(null != eG ? "copy-failed" : null), [ag, ap] = (0, l.useState)(!1);
            eL[19] !== eX ? (v = ["chatgpt-conversation-share", eX], eL[19] = eX, eL[20] = v) : v = eL[20];
            let am = v,
                af = null == eG && null == e$ && null == eH && null == eV && null == eD && null == eW && null == e0;
            eL[21] !== eN || eL[22] !== eX ? (A = () => (0, P.h)({
                conversationId: eX,
                currentNodeId: eN
            }), eL[21] = eN, eL[22] = eX, eL[23] = A) : A = eL[23], eL[24] !== am || eL[25] !== af || eL[26] !== A ? (F = {
                enabled: af,
                queryFn: A,
                queryKey: am,
                retry: !1,
                staleTime: I.b.ONE_MINUTE
            }, eL[24] = am, eL[25] = af, eL[26] = A, eL[27] = F) : F = eL[27];
            let {
                data: ab,
                error: av,
                isLoading: ay
            } = (0, r.a)(F);
            eL[28] === Symbol.for("react.memo_cache_sentinel") ? (U = {
                enabled: !1,
                queryFn: ef,
                queryKey: ["accounts", "check"],
                staleTime: I.b.ONE_MINUTE
            }, eL[28] = U) : U = eL[28];
            let {
                data: aw
            } = (0, r.a)(U), a_ = null != eD, aT = !0 === eU && a_, ax = aT || !0 === ez, ak = null != e$, aC = (eD?.additionalImages?.length ?? 0) > 0;
            eL[29] !== eD || eL[30] !== eX || eL[31] !== al ? (z = (0, M.c)((0, D.c)(eX), void 0, null != eD && null == eD.previewSrc ? al : void 0), eL[29] = eD, eL[30] = eX, eL[31] = al, eL[32] = z) : z = eL[32];
            let {
                src: aS,
                isLoading: aj,
                onImageError: aI
            } = (0, S.i)(null != eD && (aC || null == eD.previewSrc) ? eD.item.src ?? "" : "", z), aA = null != eD && null == eD.previewSrc && null == aS, aM = aC ? "image_series" : "single_image", aP = e0 ?? eF, aE = null != eW || null != aP || e$?.contentType === "message", aL = aP?.metadata.widgetType === "visualization", aN = aP?.metadata.widgetName === "create_interactive_poll" || aP?.metadata.widgetName === "CreateInteractivePoll", aD = null != eV || null != eO, aO = a_ || aE || aD, aR = aO || !0, aG = "conversation";
            aL ? aG = "widget" : null != eO ? aG = "prompt" : a_ ? aG = aC ? "images" : "image" : aE ? aG = "message" : aD && (aG = "prompt"), eL[33] !== eK || eL[34] !== eQ ? (B = null == eQ ? eK : (0, P.l)(eQ), eL[33] = eK, eL[34] = eQ, eL[35] = B) : B = eL[35];
            let aH = B,
                aF = a_ || (!aO || aE) && aH?.hasImageReference === !0;
            eL[36] !== eD?.item || eL[37] !== aC || eL[38] !== e1 ? (q = (aC ? void 0 : eD?.item.chatGptDisplayTitle) ?? (0, L.c)(e1), eL[36] = eD?.item, eL[37] = aC, eL[38] = e1, eL[39] = q) : q = eL[39];
            let aW = q,
                aU = !aO && ab?.is_public === !0 && !0 === ab.is_visible,
                az = aw?.accounts?.find(e => e.id === (ai?.accountId ?? aw.account_ordering?.[0])),
                aB = az?.structure ?? ai?.accountStructureAtLogin,
                aq = "unknown";
            as?.isWorkspaceOnly != null ? aq = as.isWorkspaceOnly ? "workspace" : "public" : null == ab || a_ ? ("personal" === aB || "workspace" === aB) && (aq = "workspace" === aB ? "workspace" : "public") : aq = ab.share_url.includes("/share/e/") ? "workspace" : "public", eL[40] !== an?.queryKey ? (Y = an?.queryKey ?? ["disabled-chatgpt-image-share-query"], eL[40] = an?.queryKey, eL[41] = Y) : Y = eL[41], eL[42] !== an?.queryFn ? (K = an?.queryFn ?? em, eL[42] = an?.queryFn, eL[43] = K) : K = eL[43];
            let aY = aT && !0 === ez && (0, G.a)() && null == eO && null != an && "public" === aq && null == as;
            eL[44] !== Y || eL[45] !== K || eL[46] !== aY ? (V = {
                queryKey: Y,
                queryFn: K,
                enabled: aY,
                retry: !1,
                staleTime: 1 / 0
            }, eL[44] = Y, eL[45] = K, eL[46] = aY, eL[47] = V) : V = eL[47];
            let aK = (0, r.a)(V);
            aK.data?.isWorkspaceOnly != null && (aq = aK.data.isWorkspaceOnly ? "workspace" : "public");
            let aV = as ?? (null == eO ? aK.data ?? null : null),
                a$ = aV?.shareLinkUrl ?? (aU ? ab.share_url : null),
                aQ = !aO && null == aV && aU && ab.current_node_id !== eN,
                aX = "workspace" === aq,
                aZ = "creating" === ac,
                aJ = !aO && ay;
            eL[48] !== ah || eL[49] !== av || eL[50] !== aK.error ? (null == ($ = ah) && null != av && ($ = av instanceof P.a ? "blocked" : "create-failed"), null == $ && null != aK.error && ($ = aK.error instanceof P.a ? "blocked" : "create-failed"), eL[48] = ah, eL[49] = av, eL[50] = aK.error, eL[51] = $) : $ = eL[51];
            let a1 = eP.description,
                a0 = eP.publicLinkAudience;
            if (aL) {
                let e;
                eL[52] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    ...eP.widgetTitle
                }), eL[52] = e) : e = eL[52], Q = e
            } else if (null != eO) {
                let e;
                eL[53] !== eO.label ? (e = "image_with_prompt" === eO.label ? (0, i.jsx)(d.a, {
                    id: "chatgptConversations.shareDialog.imageWithPromptTitle",
                    defaultMessage: "Share image with prompt",
                    description: "Heading of the generated-image share dialog when Image with prompt is selected. Users share the generated image together with its reusable prompt so recipients can try the prompt. The other option is Image only."
                }) : (0, i.jsx)(d.a, {
                    id: "chatgptConversations.shareDialog.imagePromptTitle",
                    defaultMessage: "Share prompt with image",
                    description: "Short heading of the generated-image share dialog when Prompt with image is selected. Users share the generated image and its reusable prompt so recipients can try the prompt. The other option is Image only."
                }), eL[53] = eO.label, eL[54] = e) : e = eL[54], Q = e
            } else if (a_) {
                let e;
                eL[55] !== aW || eL[56] !== eR || eL[57] !== aC || eL[58] !== aT ? (e = aT || null == aW || null != eR ? (0, i.jsx)(d.a, {
                    ...aC ? eP.imagesTitle : eP.imageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: aW
                }), eL[55] = aW, eL[56] = eR, eL[57] = aC, eL[58] = aT, eL[59] = e) : e = eL[59], Q = e
            } else if (aN) {
                let e;
                eL[60] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    id: "chatgptConversations.shareDialog.poll.title",
                    defaultMessage: "Share poll",
                    description: "Short heading of the dialog for sharing one interactive poll. The user can create or send a link so other people can vote on the poll."
                }), eL[60] = e) : e = eL[60], Q = e
            } else if (aE) {
                let e;
                eL[61] !== aW ? (e = null == aW ? (0, i.jsx)(d.a, {
                    ...eP.messageTitle
                }) : (0, i.jsx)(i.Fragment, {
                    children: aW
                }), eL[61] = aW, eL[62] = e) : e = eL[62], Q = e
            } else if (aD) {
                let e;
                eL[63] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    ...eP.promptTitle
                }), eL[63] = e) : e = eL[63], Q = e
            } else {
                if (aR) {
                    let e;
                    eL[64] !== aW ? (e = null == aW ? void 0 : (0, i.jsx)(i.Fragment, {
                        children: aW
                    }), eL[64] = aW, eL[65] = e) : e = eL[65], Q = e
                }
                aX ? a1 = eK?.isProjectConversation ? eP.workspaceProjectDescription : eP.workspaceDescription : ab?.is_anonymous === !1 ? a1 = eP.attributedDescription : eK?.isProjectConversation && (a1 = eP.projectDescription)
            }
            aX && (a0 = aF ? eP.workspaceImageRightsAudience : eP.workspaceLinkAudience);
            let a2 = "copied" === ac ? eP.copied : eP.copyLink;
            aQ ? a2 = eP.updateLink : null == a$ && "copied" !== ac && (a2 = eP.createLink), eL[66] !== e8 || eL[67] !== ac ? (X = "copied" === ac ? e8.formatMessage(eP.copied) : e8.formatMessage(eP.copyLink), eL[66] = e8, eL[67] = ac, eL[68] = X) : X = eL[68];
            let a3 = X;
            eL[69] !== aa || eL[70] !== e8 || eL[71] !== e2 || eL[72] !== e0 ? (Z = function(e, a) {
                let t;
                "create-failed" === a && (aa(!1), e0?.onError?.(e));
                let i = e instanceof P.a ? "blocked" : a;
                switch ("blocked" !== i && j.a.warning("chatgpt_conversation_share_failed", {
                        safe: {
                            stage: i
                        },
                        sensitive: {
                            error: e
                        }
                    }), i) {
                    case "blocked":
                        t = e8.formatMessage(eP.shareBlocked);
                        break;
                    case "copy-failed":
                        t = e8.formatMessage(eP.shareCopyFailed);
                        break;
                    case "create-failed":
                        t = e8.formatMessage(eP.shareCreateFailed)
                }
                return au(i), ad("idle"), e2.get(y.h).danger(t, {
                    errorAnalytics: {
                        toastId: {
                            "copy-failed": "failed_to_copy_share_link",
                            "create-failed": "failed_to_generate_share_link",
                            blocked: "chatgptConversationShareDialog.shareBlocked"
                        } [i]
                    }
                }), i
            }, eL[69] = aa, eL[70] = e8, eL[71] = e2, eL[72] = e0, eL[73] = Z) : Z = eL[73];
            let a5 = Z;
            eL[74] !== aP || eL[75] !== a_ || eL[76] !== aE || eL[77] !== aD || eL[78] !== ak || eL[79] !== e$ || eL[80] !== eJ ? (J = ak ? "CHATGPT_SHARE_FLOW_ACTOR_RECEIVER" : "CHATGPT_SHARE_FLOW_ACTOR_SHARER", ea = ak ? "CHATGPT_SHARE_FLOW_SOURCE_RECEIVER_HEADER" : eJ ?? "CHATGPT_SHARE_FLOW_SOURCE_CONVERSATION_MENU", null != e$ ? ee = e$.attachmentType : null != aP ? (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_WIDGET", ea = "CHATGPT_SHARE_FLOW_SOURCE_WIDGET_INLINE_ACTION") : a_ ? (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE", ea = eJ ?? "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION") : aE ? (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_MESSAGE_SLICE", ea = "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION") : aD && (ee = "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_PROMPT", ea = eJ ?? "CHATGPT_SHARE_FLOW_SOURCE_MESSAGE_INLINE_ACTION"), eL[74] = aP, eL[75] = a_, eL[76] = aE, eL[77] = aD, eL[78] = ak, eL[79] = e$, eL[80] = eJ, eL[81] = J, eL[82] = ee, eL[83] = ea) : (J = eL[81], ee = eL[82], ea = eL[83]);
            let a6 = e$?.contentType === "message" || aO ? "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE" : "CHATGPT_SHARE_FLOW_CONTENT_TYPE_SHARED_CONVERSATION";
            eL[84] !== aV || eL[85] !== eN || eL[86] !== aU || eL[87] !== ab || eL[88] !== aa || eL[89] !== eO || eL[90] !== an || eL[91] !== aO || eL[92] !== aQ || eL[93] !== eW || eL[94] !== eV || eL[95] !== e2.queryClient || eL[96] !== eX || eL[97] !== am || eL[98] !== e1 || eL[99] !== e0 ? (et = async function(e) {
                let a;
                if (null != e0 && (!e9.current || e0.isCurrent?.() === !1)) throw Error("The selected widget is no longer available");
                let t = aV ?? (aU ? {
                    currentNodeId: ab.current_node_id,
                    shareLinkId: ab.share_id,
                    shareLinkUrl: ab.share_url
                } : null);
                if (null == eO && null != t && !aQ) return aa(!0), t;
                if (null != eO) a = await eO.createLink(e);
                else if (null != an) a = await e2.queryClient.fetchQuery(an);
                else if (null != e0) {
                    if (a = await (0, P.f)(e0.attachment, eN), !e9.current || e0.isCurrent?.() === !1) throw Error("The selected widget changed while sharing")
                } else a = null != eW ? await e2.queryClient.fetchQuery({
                    queryFn: () => (0, P.d)({
                        conversationId: eX,
                        currentNodeId: eN,
                        messageIds: eW
                    }),
                    queryKey: ["chatgpt-message-share", eX, eN],
                    staleTime: 1 / 0
                }) : null != eV ? await e2.queryClient.fetchQuery({
                    queryFn: () => (0, P.e)({
                        conversationId: eX,
                        messageId: eV.messageId
                    }),
                    queryKey: ["chatgpt-prompt-share", eX, eV.messageId],
                    staleTime: 1 / 0
                }) : await (0, P.g)({
                    conversationId: eX,
                    currentNodeId: eN,
                    existingShareLink: ab,
                    title: e1
                });
                return ar(a), aa(!0), null == ab || aO || e2.queryClient.setQueryData(am, {
                    ...ab,
                    current_node_id: eN,
                    is_public: !0,
                    is_visible: !0
                }), a
            }, eL[84] = aV, eL[85] = eN, eL[86] = aU, eL[87] = ab, eL[88] = aa, eL[89] = eO, eL[90] = an, eL[91] = aO, eL[92] = aQ, eL[93] = eW, eL[94] = eV, eL[95] = e2.queryClient, eL[96] = eX, eL[97] = am, eL[98] = e1, eL[99] = e0, eL[100] = et) : et = eL[100];
            let a4 = et;
            eL[101] !== J || eL[102] !== ee || eL[103] !== a6 || eL[104] !== aV || eL[105] !== aP?.metadata || eL[106] !== a4 || eL[107] !== aU || eL[108] !== ab || eL[109] !== eO || eL[110] !== aA || eL[111] !== ak || eL[112] !== aQ || eL[113] !== aZ || eL[114] !== eB || eL[115] !== a5 || eL[116] !== e2 || eL[117] !== eX || eL[118] !== a$ || eL[119] !== al || eL[120] !== ea || eL[121] !== aR ? (ei = async function() {
                if (aZ || aA || eO?.actionsDisabled) return;
                let e = (0, N.a)(e2, {
                    actor: J,
                    attachmentType: ee,
                    widgetMetadata: aP?.metadata,
                    contentType: a6,
                    conversationId: ak ? void 0 : eX,
                    shareId: aV?.shareLinkId ?? (aU ? ab.share_id : void 0),
                    shareSessionId: al,
                    source: ea,
                    usedExistingLink: null != a$ && !aQ
                });
                au(null), ad("creating");
                let a = null != eO || null == a$ || aQ ? "create-failed" : "copy-failed",
                    t = aV;
                try {
                    let i, n = a4("copy"),
                        s = (0, x.c)(n.then(ep));
                    null != s && s.catch(eg);
                    let r = await n;
                    t = r, a = "copy-failed";
                    let o = r.shareLinkUrl;
                    if (null == s) i = await (0, x.b)(o);
                    else try {
                        await s, i = !0
                    } catch (e) {
                        j.a.warning("chatgpt_conversation_share_clipboard_write_failed", {
                            safe: {
                                method: "streaming-clipboard-item"
                            },
                            sensitive: {
                                error: e
                            }
                        }), i = await (0, x.b)(o)
                    }
                    if (!i) {
                        e({
                            result: "copy-failed",
                            shareId: r.shareLinkId
                        }), a5(Error("Failed to copy ChatGPT conversation share link"), "copy-failed");
                        return
                    }
                    e({
                        result: "link-copied",
                        shareId: r.shareLinkId
                    }), ad("copied"), aR || ((0, T.a)(e2), eB())
                } catch (n) {
                    let i = a5(n, a);
                    e("create-failed" === i ? {
                        result: i,
                        error: n
                    } : {
                        result: i,
                        shareId: t?.shareLinkId
                    })
                }
            }, eL[101] = J, eL[102] = ee, eL[103] = a6, eL[104] = aV, eL[105] = aP?.metadata, eL[106] = a4, eL[107] = aU, eL[108] = ab, eL[109] = eO, eL[110] = aA, eL[111] = ak, eL[112] = aQ, eL[113] = aZ, eL[114] = eB, eL[115] = a5, eL[116] = e2, eL[117] = eX, eL[118] = a$, eL[119] = al, eL[120] = ea, eL[121] = aR, eL[122] = ei) : ei = eL[122];
            let a7 = ei;
            eL[123] !== ee || eL[124] !== a6 || eL[125] !== aV?.shareLinkId || eL[126] !== e2 || eL[127] !== eX || eL[128] !== al || eL[129] !== ea ? (en = function(e) {
                (0, w.a)(e2, s.h, {
                    action: e,
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ee,
                    contentType: a6,
                    conversationId: eX,
                    shareId: aV?.shareLinkId,
                    shareSessionId: al,
                    source: ea,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM"
                })
            }, eL[123] = ee, eL[124] = a6, eL[125] = aV?.shareLinkId, eL[126] = e2, eL[127] = eX, eL[128] = al, eL[129] = ea, eL[130] = en) : en = eL[130];
            let a8 = en;
            eL[131] !== aV || eL[132] !== $ || eL[133] !== a4 || eL[134] !== an || eL[135] !== e8 || eL[136] !== aZ || eL[137] !== eB || eL[138] !== a5 || eL[139] !== e2 || eL[140] !== eX || eL[141] !== aq || eL[142] !== al || eL[143] !== ea ? (es = async function() {
                if (!aZ && null != an && "public" === aq && "blocked" !== $) {
                    au(null), ad("creating");
                    try {
                        let e = aV ?? await a4("copy"),
                            a = await (0, G.b)(e2, e, eX, al, ea);
                        ad("idle"), "shared" === a && eB(), "failed" === a && e2.get(y.h).danger(e8.formatMessage({
                            id: "chatgptConversations.mobileImageShare.nativeFailed",
                            defaultMessage: "Could not open sharing. Try again or copy the link",
                            description: "Error in the mobile image share sheet when the device cannot open native link sharing. The user can retry or use Copy link"
                        }), {
                            errorAnalytics: {
                                toastId: "chatgptConversations.mobileImageShare.nativeFailed"
                            }
                        })
                    } catch (e) {
                        a5(e, "create-failed")
                    }
                }
            }, eL[131] = aV, eL[132] = $, eL[133] = a4, eL[134] = an, eL[135] = e8, eL[136] = aZ, eL[137] = eB, eL[138] = a5, eL[139] = e2, eL[140] = eX, eL[141] = aq, eL[142] = al, eL[143] = ea, eL[144] = es) : es = eL[144];
            let a9 = es;
            eL[145] !== J || eL[146] !== ee || eL[147] !== a6 || eL[148] !== aV || eL[149] !== aW || eL[150] !== aP?.metadata || eL[151] !== a4 || eL[152] !== aU || eL[153] !== ab || eL[154] !== eO || eL[155] !== aM || eL[156] !== a_ || eL[157] !== aA || eL[158] !== aD || eL[159] !== ak || eL[160] !== aQ || eL[161] !== aZ || eL[162] !== a5 || eL[163] !== e2 || eL[164] !== aq || eL[165] !== ac || eL[166] !== al || eL[167] !== ea ? (er = async function(e, a) {
                let t;
                if (aZ || aA || "public" !== aq || eO?.actionsDisabled) return;
                a.preventDefault(), ak || aD || "messages" === e || "whatsapp" === e || (0, N.f)(e2, e, a_ ? aM : void 0), (0, N.e)(e2, {
                    actor: J,
                    attachmentType: ee,
                    widgetMetadata: aP?.metadata,
                    contentType: a6,
                    destination: function(e) {
                        switch (e) {
                            case "messages":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_MESSAGES";
                            case "whatsapp":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_WHATSAPP";
                            case "line":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_LINE";
                            case "linkedin":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_LINKEDIN";
                            case "reddit":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_REDDIT";
                            case "x":
                                return "CHATGPT_SHARE_FLOW_DESTINATION_TWITTER"
                        }
                    }(e),
                    shareId: aV?.shareLinkId ?? (aU && !aQ ? ab.share_id : void 0),
                    shareSessionId: al,
                    source: ea
                });
                let i = (null == aV || null != eO) && "messages" !== e ? window.open("", "_blank") : null;
                null != i && (i.opener = null), au(null), ad("creating");
                try {
                    t = await a4("social")
                } catch (e) {
                    i?.close(), e instanceof P.a || (0, N.d)(e2, {
                        actor: J,
                        attachmentType: ee,
                        widgetMetadata: aP?.metadata,
                        contentType: a6,
                        shareSessionId: al,
                        source: ea
                    }), a5(e, "create-failed");
                    return
                }
                if (!0 === t.isWorkspaceOnly) {
                    i?.close(), ad(ac);
                    return
                }
                let n = function(e, a, t) {
                    let i = encodeURIComponent(a),
                        n = encodeURIComponent(t ?? "");
                    switch (e) {
                        case "messages":
                            return `sms:${/iPad|iPhone|iPod/.test(navigator.userAgent)?"&":"?"}body=${i}`;
                        case "whatsapp":
                            return `https://wa.me/?text=${i}`;
                        case "line":
                            return `https://social-plugins.line.me/lineit/share?url=${i}&text=${n}`;
                        case "linkedin":
                            return `https://www.linkedin.com/shareArticle?url=${i}&text=${n}`;
                        case "reddit":
                            return `https://www.reddit.com/submit?url=${i}&title=${n}`;
                        case "x":
                            return `https://twitter.com/intent/tweet?url=${i}&text=${n}`
                    }
                }(e, t.shareLinkUrl, t.title ?? aW);
                "messages" === e ? (window.location.href = n, (0, f.g)({
                    href: n,
                    modifiedClick: !1
                })) : null != i ? (i.location.href = n, (0, f.g)({
                    href: n,
                    modifiedClick: 1 === a.button || a.metaKey || a.ctrlKey,
                    openTarget: "external-browser"
                })) : (0, f.e)({
                    event: a,
                    href: n,
                    initiator: "open_in_browser_bridge",
                    openTarget: "external-browser"
                }), ad(ac)
            }, eL[145] = J, eL[146] = ee, eL[147] = a6, eL[148] = aV, eL[149] = aW, eL[150] = aP?.metadata, eL[151] = a4, eL[152] = aU, eL[153] = ab, eL[154] = eO, eL[155] = aM, eL[156] = a_, eL[157] = aA, eL[158] = aD, eL[159] = ak, eL[160] = aQ, eL[161] = aZ, eL[162] = a5, eL[163] = e2, eL[164] = aq, eL[165] = ac, eL[166] = al, eL[167] = ea, eL[168] = er) : er = eL[168];
            let te = er;
            eL[169] !== ee || eL[170] !== a6 || eL[171] !== eD || eL[172] !== aM || eL[173] !== e8 || eL[174] !== ag || eL[175] !== aA || eL[176] !== e2 || eL[177] !== eX || eL[178] !== al || eL[179] !== ea ? (eo = async function() {
                if (null == eD || ag || aA) return;
                (0, N.f)(e2, "download", aM);
                let e = [eD.item, ...eD.additionalImages ?? []].filter(eu);
                0 !== e.length && (ap(!0), (0, w.a)(e2, s.h, {
                    action: "CHATGPT_SHARE_FLOW_ACTION_DOWNLOAD_SELECTED",
                    actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                    attachmentType: ee,
                    contentType: a6,
                    conversationId: eX,
                    shareSessionId: al,
                    sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_CUSTOM",
                    source: ea
                }), await (0, O.a)(e2, {
                    images: e,
                    intl: e8,
                    serverConversationId: (0, D.c)(eX),
                    logIndividualDownloads: !1
                }).then(e => {
                    "downloaded" === e && (0, H.d)(e2, eX, eD.item)
                }).finally(() => {
                    ap(!1)
                }))
            }, eL[169] = ee, eL[170] = a6, eL[171] = eD, eL[172] = aM, eL[173] = e8, eL[174] = ag, eL[175] = aA, eL[176] = e2, eL[177] = eX, eL[178] = al, eL[179] = ea, eL[180] = eo) : eo = eL[180];
            let ta = eo;
            eL[181] !== eD?.additionalImages?.length || eL[182] !== aC ? (ec = aC ? (0, i.jsx)(d.a, {
                id: "chatgptConversations.shareDialog.imageSeriesCount",
                defaultMessage: "Sharing {imageCount} images together",
                description: "Subtitle beneath the generated-image share modal title after choosing to share a series. imageCount is the number of images included in the link, always greater than one. This informs the user that all listed images are shared together.",
                values: {
                    imageCount: 1 + (eD?.additionalImages?.length ?? 0)
                }
            }) : void 0, eL[181] = eD?.additionalImages?.length, eL[182] = aC, eL[183] = ec) : ec = eL[183];
            let tt = ec,
                ti = tt;
            if (!aC && !aR) {
                let e;
                eL[184] !== a1 ? (e = (0, i.jsx)(d.a, {
                    ...a1
                }), eL[184] = a1, eL[185] = e) : e = eL[185], ti = e
            }
            if (null != eO) {
                let e;
                eL[186] !== aT ? (e = aT ? (0, i.jsx)(d.a, {
                    id: "imagePromptShare.audience",
                    defaultMessage: "Anyone with the link can try this prompt",
                    description: "Audience description when sharing a generated image as a reusable prompt template"
                }) : void 0, eL[186] = aT, eL[187] = e) : e = eL[187], ti = e
            } else if (aT) {
                let e, a, t;
                eL[188] !== aq ? (e = "public" === aq ? (0, i.jsx)(d.a, {
                    id: "chatgptConversations.mobileImageShare.publicAudience",
                    defaultMessage: "Anyone with the link can view",
                    description: "Audience disclosure in the mobile generated-image share sheet for a public link"
                }) : null, eL[188] = aq, eL[189] = e) : e = eL[189], eL[190] !== aq ? (a = "public" !== aq && (0, i.jsx)(d.a, {
                    id: "chatgptConversations.mobileImageShare.workspaceAudience",
                    defaultMessage: "Only workspace members with the link can view",
                    description: "Audience disclosure below Share image in the mobile image share sheet for a workspace account"
                }), eL[190] = aq, eL[191] = a) : a = eL[191], eL[192] !== e || eL[193] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eL[192] = e, eL[193] = a, eL[194] = t) : t = eL[194], ti = t
            }
            if (aT ? ed = "responsiveSheet" : aR && (ed = "share"), null != eO) {
                let e;
                if (eL[195] !== eD?.previewSrc || eL[196] !== eO || eL[197] !== aZ || eL[198] !== aS) {
                    let a;
                    eL[200] === Symbol.for("react.memo_cache_sentinel") ? (a = () => {
                        au(null), ad("idle")
                    }, eL[200] = a) : a = eL[200], e = eO.preview(aZ, eD?.previewSrc ?? aS ?? null, a), eL[195] = eD?.previewSrc, eL[196] = eO, eL[197] = aZ, eL[198] = aS, eL[199] = e
                } else e = eL[199];
                eh = e
            } else {
                let e;
                eL[201] !== aP || eL[202] !== eD || eL[203] !== e8 || eL[204] !== aj || eL[205] !== aC || eL[206] !== aL || eL[207] !== aI || eL[208] !== eY || eL[209] !== eV || eL[210] !== aS || eL[211] !== eQ || eL[212] !== eX || eL[213] !== aT ? (e = null != eD ? (0, i.jsx)(C.a, {
                    ariaLabel: aC ? e8.formatMessage(eP.imagesPreview) : eD.alt,
                    variant: "image",
                    classicImagePreviewEligible: !aC && !aT,
                    presentation: aT ? "imageSheet" : void 0,
                    children: aC || null == eD.previewSrc ? (0, i.jsx)(eI, {
                        src: aS,
                        isLoading: aj,
                        onImageError: aI
                    }) : (0, i.jsx)("img", {
                        alt: eD.alt,
                        className: aT ? void 0 : "block size-full object-contain",
                        referrerPolicy: "no-referrer",
                        src: eD.previewSrc
                    })
                }) : (0, i.jsxs)(i.Fragment, {
                    children: [aP?.preview != null && aL && (0, i.jsx)(C.a, {
                        ariaLabel: e8.formatMessage({
                            id: "shareDialog.widget.previewLabel",
                            defaultMessage: "Preview of the shared widget",
                            description: "Accessible description of the non-interactive selected-widget preview in a ChatGPT widget sharing dialog."
                        }),
                        variant: "response",
                        children: aP.preview
                    }), aP?.preview != null && !aL && (0, i.jsx)(C.a, {
                        variant: "response",
                        children: aP.preview
                    }), null == aP && (0, i.jsx)(E.b, {
                        prompt: eV,
                        response: eQ,
                        serverConversationId: eX,
                        turns: eY
                    })]
                }), eL[201] = aP, eL[202] = eD, eL[203] = e8, eL[204] = aj, eL[205] = aC, eL[206] = aL, eL[207] = aI, eL[208] = eY, eL[209] = eV, eL[210] = aS, eL[211] = eQ, eL[212] = eX, eL[213] = aT, eL[214] = e) : e = eL[214], eh = e
            }
            if (aT) {
                let e, a, t;
                eL[215] !== eO || eL[216] !== eh ? (e = null == eO ? eh : (0, i.jsx)("div", {
                    className: "px-6",
                    children: eh
                }), eL[215] = eO, eL[216] = eh, eL[217] = e) : e = eL[217], eL[218] !== tt ? (a = null != tt && (0, i.jsx)("p", {
                    className: "mt-3 text-center text-sm text-secondary",
                    children: tt
                }), eL[218] = tt, eL[219] = a) : a = eL[219], eL[220] !== e || eL[221] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), eL[220] = e, eL[221] = a, eL[222] = t) : t = eL[222], eh = t
            }
            eL[223] !== a0 || eL[224] !== aR ? (ey = aR ? void 0 : (0, i.jsx)(d.a, {
                ...a0
            }), eL[223] = a0, eL[224] = aR, eL[225] = ey) : ey = eL[225], eL[226] !== a2 ? (ew = (0, i.jsx)(d.a, {
                ...a2
            }), eL[226] = a2, eL[227] = ew) : ew = eL[227];
            let tn = eO?.actionsDisabled || aJ || aA || "blocked" === $,
                ts = aZ || aJ || e3,
                tr = !aR && aZ;
            eL[228] !== a8 || eL[229] !== ax || eL[230] !== aR ? (e_ = aR ? e => {
                ax && a8("CHATGPT_SHARE_FLOW_ACTION_SHEET_PRESENTED"), e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus()
            } : void 0, eL[228] = a8, eL[229] = ax, eL[230] = aR, eL[231] = e_) : e_ = eL[231];
            let to = aT ? "imageSheet" : void 0;
            eL[232] !== e7 || eL[233] !== e6 || eL[234] !== e4 || eL[235] !== aV || eL[236] !== eN || eL[237] !== $ || eL[238] !== ta || eL[239] !== a9 || eL[240] !== te || eL[241] !== eD || eL[242] !== eO || eL[243] !== aM || eL[244] !== ag || eL[245] !== aJ || eL[246] !== a_ || eL[247] !== aA || eL[248] !== e3 || eL[249] !== aO || eL[250] !== aD || eL[251] !== ak || eL[252] !== aZ || eL[253] !== eW || eL[254] !== eB || eL[255] !== eV || eL[256] !== e$ || eL[257] !== a3 || eL[258] !== aS || eL[259] !== e2 || eL[260] !== eX || eL[261] !== aq || eL[262] !== ez || eL[263] !== aT || eL[264] !== aR || eL[265] !== e0 ? (eT = aR ? (0, i.jsxs)(i.Fragment, {
                children: [(0, i.jsx)(el, {
                    mobileImageActions: aT ? {
                        canNativeShare: "public" === aq && (!0 !== ez || null != aV) && (0, G.a)(aV?.shareLinkUrl),
                        onNativeShare: () => {
                            a9()
                        }
                    } : void 0,
                    copyLabel: a3,
                    copyDisabled: eO?.actionsDisabled || aJ || aZ || aA || "blocked" === $,
                    isBusy: aZ || aJ || e3,
                    isDownloading: ag,
                    socialDestinationsDisabled: eO?.actionsDisabled || aJ || aZ || aA || "public" !== aq || "blocked" === $,
                    showSocialDestinations: "public" === aq,
                    additionalActions: void 0,
                    onDownload: null != eO || null == eD || aA ? void 0 : () => {
                        ta()
                    },
                    onCopy: () => {
                        ak || aD || (0, N.f)(e2, "copy", a_ ? aM : void 0)
                    },
                    onSocialShare: (e, a) => {
                        te(e, a)
                    }
                }), aT && (0, i.jsx)("p", {
                    className: "mt-7 px-6 text-center text-xs leading-4.5 text-tertiary select-none",
                    children: (0, i.jsx)(W, {
                        linkAppearance: "inherit"
                    })
                })]
            }) : void 0, eL[232] = e7, eL[233] = e6, eL[234] = e4, eL[235] = aV, eL[236] = eN, eL[237] = $, eL[238] = ta, eL[239] = a9, eL[240] = te, eL[241] = eD, eL[242] = eO, eL[243] = aM, eL[244] = ag, eL[245] = aJ, eL[246] = a_, eL[247] = aA, eL[248] = e3, eL[249] = aO, eL[250] = aD, eL[251] = ak, eL[252] = aZ, eL[253] = eW, eL[254] = eB, eL[255] = eV, eL[256] = e$, eL[257] = a3, eL[258] = aS, eL[259] = e2, eL[260] = eX, eL[261] = aq, eL[262] = ez, eL[263] = aT, eL[264] = aR, eL[265] = e0, eL[266] = eT) : eT = eL[266], eL[267] !== eR || eL[268] !== aN || eL[269] !== aZ || eL[270] !== aG || eL[271] !== aq || eL[272] !== aF || eL[273] !== aT || eL[274] !== aR ? (ex = aR ? (0, i.jsxs)(i.Fragment, {
                children: [null != eR && (aT ? (0, i.jsx)("div", {
                    className: "px-6",
                    children: eR(aZ)
                }) : (0, i.jsx)(m.e, {
                    className: "pt-5",
                    children: eR(aZ)
                })), !aT && (0, i.jsx)(ev, {
                    audience: aq,
                    contentType: aG,
                    isPoll: aN,
                    showImageRightsNotice: aF
                })]
            }) : void 0, eL[267] = eR, eL[268] = aN, eL[269] = aZ, eL[270] = aG, eL[271] = aq, eL[272] = aF, eL[273] = aT, eL[274] = aR, eL[275] = ex) : ex = eL[275], eL[276] !== $ || eL[277] !== eO || eL[278] !== a$ ? (ek = null == $ ? void 0 : {
                content: (0, i.jsx)(eM, {
                    error: $
                }),
                copyUrl: "copy-failed" === $ ? a$ : void 0,
                preventsSharing: "blocked" === $ && null == eO
            }, eL[276] = $, eL[277] = eO, eL[278] = a$, eL[279] = ek) : ek = eL[279];
            let tl = aF && !aX && !a_,
                tc = !aO || aE;
            return eL[280] !== aH || eL[281] !== tl || eL[282] !== tc ? (eC = (0, i.jsx)(eA, {
                showImageRightsNotice: tl,
                showContentNotices: tc,
                privacyNotices: aH
            }), eL[280] = aH, eL[281] = tl, eL[282] = tc, eL[283] = eC) : eC = eL[283], eL[284] !== at || eL[285] !== a8 || eL[286] !== ax ? (eS = () => {
                ax && a8("CHATGPT_SHARE_FLOW_ACTION_DISMISSED"), at()
            }, eL[284] = at, eL[285] = a8, eL[286] = ax, eL[287] = eS) : eS = eL[287], eL[288] !== a7 ? (ej = () => {
                a7()
            }, eL[288] = a7, eL[289] = ej) : ej = eL[289], eL[290] !== ed || eL[291] !== Q || eL[292] !== aW || eL[293] !== eh || eL[294] !== ti || eL[295] !== ey || eL[296] !== ew || eL[297] !== tn || eL[298] !== ts || eL[299] !== tr || eL[300] !== e_ || eL[301] !== to || eL[302] !== eT || eL[303] !== ex || eL[304] !== ek || eL[305] !== eC || eL[306] !== eS || eL[307] !== ej ? (eE = (0, i.jsx)(k.a, {
                threadTitle: aW,
                title: Q,
                subtitle: ti,
                audience: ey,
                actionLabel: ew,
                actionDisabled: tn,
                isBusy: ts,
                isDismissalDisabled: tr,
                onOpenAutoFocus: e_,
                size: ed,
                presentation: to,
                footer: eT,
                preview: eh,
                info: ex,
                error: ek,
                notices: eC,
                onClose: eS,
                onSubmit: ej
            }), eL[290] = ed, eL[291] = Q, eL[292] = aW, eL[293] = eh, eL[294] = ti, eL[295] = ey, eL[296] = ew, eL[297] = tn, eL[298] = ts, eL[299] = tr, eL[300] = e_, eL[301] = to, eL[302] = eT, eL[303] = ex, eL[304] = ek, eL[305] = eC, eL[306] = eS, eL[307] = ej, eL[308] = eE) : eE = eL[308], eE
        }

        function eu(e) {
            return null != e.src && "completed" === e.status && !e.isPreview
        }

        function eg() {}

        function ep(e) {
            let {
                shareLinkUrl: a
            } = e;
            return a
        }
        async function em() {
            throw Error("Image share is unavailable")
        }

        function ef() {
            return A.a.safeGet("/wham/accounts/check")
        }

        function eb() {
            return crypto.randomUUID()
        }

        function ev(e) {
            let a, t, s, r, o, l, c, h = (0, n.c)(49),
                {
                    audience: u,
                    contentType: g,
                    isPoll: p,
                    showImageRightsNotice: f
                } = e,
                v = "workspace" === u ? b.He : b.Od;
            if ("workspace" === u) {
                let e, n;
                if (f) {
                    let a;
                    h[0] !== g ? (a = (0, i.jsx)(d.a, {
                        id: "chatgptConversations.shareDialog.workspaceImageRightsAudienceWithLearnMore",
                        defaultMessage: "Links are visible to workspace members only. {contentType, select, images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}} {contentType, select, conversation {Memory sources won't be shared with viewers. } other {}}<learnMore>Learn more</learnMore>",
                        description: "Audience and image-rights reminder for workspace sharing in merged web. Only workspace members can view the link. contentType is images for a generated-image series, image for one generated image, message, or conversation. For a conversation, underlying Memory sources stay private. The learnMore tag links to shared-links help. All sentences appear in one paragraph.",
                        values: {
                            contentType: g,
                            learnMore: ej
                        }
                    }), h[0] = g, h[1] = a) : a = h[1], e = a
                } else if ("conversation" === g) {
                    let a;
                    h[2] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(d.a, {
                        id: "chatgptConversations.shareDialog.workspaceConversationMemoryDisclosure",
                        defaultMessage: "Links are visible to workspace members only. Memory sources won't be shared with viewers. <learnMore>Learn more</learnMore>",
                        description: "Audience and privacy explanation in the merged-web workspace conversation sharing dialog. Shared links are restricted to workspace members and do not give viewers access to underlying Memory sources. The learnMore tag links to shared-links help.",
                        values: {
                            learnMore: eS
                        }
                    }), h[2] = a) : a = h[2], e = a
                } else {
                    let a;
                    h[3] === Symbol.for("react.memo_cache_sentinel") ? (a = (0, i.jsx)(d.a, {
                        ...eP.workspaceLinksVisibleWithLearnMore,
                        values: {
                            learnMore: eC
                        }
                    }), h[3] = a) : a = h[3], e = a
                }
                if (h[4] !== e ? (n = (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(i.Fragment, {
                            children: e
                        }), null]
                    }), h[4] = e, h[5] = n) : n = h[5], t = n, "widget" === g) {
                    let e;
                    h[6] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToWidget
                    }), h[6] = e) : e = h[6], a = e
                } else if ("images" === g) {
                    let e;
                    h[7] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToImages
                    }), h[7] = e) : e = h[7], a = e
                } else if ("image" === g) {
                    let e;
                    h[8] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToImage
                    }), h[8] = e) : e = h[8], a = e
                } else if ("message" === g) {
                    let e;
                    h[9] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToMessage
                    }), h[9] = e) : e = h[9], a = e
                } else if ("prompt" === g) {
                    let e;
                    h[10] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToPrompt
                    }), h[10] = e) : e = h[10], a = e
                } else {
                    let e;
                    h[11] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToConversation
                    }), h[11] = e) : e = h[11], a = e
                }
            } else if ("unknown" === u) {
                if ("images" === g) {
                    let e;
                    h[12] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        id: "chatgptConversations.shareDialog.imagesRightsDisclaimer",
                        defaultMessage: "Confirm you have the rights to share these images.",
                        description: "Legal-permission reminder below the heading when sharing a generated-image series before the link audience is known. Asks the user to confirm permission to share every selected image. Shown as a standalone notice."
                    }), h[12] = e) : e = h[12], t = e
                } else if ("image" === g) {
                    let e;
                    h[13] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.imageLicenseDisclaimer
                    }), h[13] = e) : e = h[13], t = e
                }
                if ("widget" === g) {
                    let e;
                    h[14] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToWidget
                    }), h[14] = e) : e = h[14], a = e
                } else if ("images" === g) {
                    let e;
                    h[15] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToImages
                    }), h[15] = e) : e = h[15], a = e
                } else if ("image" === g) {
                    let e;
                    h[16] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToImage
                    }), h[16] = e) : e = h[16], a = e
                } else if ("message" === g) {
                    let e;
                    h[17] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToMessage
                    }), h[17] = e) : e = h[17], a = e
                } else if ("prompt" === g) {
                    let e;
                    h[18] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToPrompt
                    }), h[18] = e) : e = h[18], a = e
                } else {
                    let e;
                    h[19] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareLinkToConversation
                    }), h[19] = e) : e = h[19], a = e
                }
            } else if ("widget" === g) {
                let e, n;
                h[20] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    ...eP.sharePublicLinkToWidget
                }), h[20] = e) : e = h[20], a = e, h[21] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.a, {
                            id: "chatgptConversations.widgetShare.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this widget. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a generated Recharts widget. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: ek
                            }
                        })
                    }), null]
                }), h[21] = n) : n = h[21], t = n
            } else if ("images" === g) {
                let e, n;
                h[22] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    ...eP.sharePublicLinkToImages
                }), h[22] = e) : e = h[22], a = e, h[23] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.a, {
                            id: "chatgptConversations.shareDialog.imagesPublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing all images from one generation. Anyone with the link can view the images; the user must have permission to share them. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: ex
                            }
                        })
                    }), null]
                }), h[23] = n) : n = h[23], t = n
            } else if ("image" === g) {
                let e, n;
                h[24] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    ...eP.sharePublicLinkToImage
                }), h[24] = e) : e = h[24], a = e, h[25] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.a, {
                            id: "chatgptConversations.shareDialog.imagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image. <learnMore>Learn more</learnMore>",
                            description: "Audience and legal-permission reminder when sharing an image. Anyone with the link can view the image; the user must have permission to share it. The learnMore tag links to shared-links help in merged web. All sentences appear in one paragraph.",
                            values: {
                                learnMore: eT
                            }
                        })
                    }), null]
                }), h[25] = n) : n = h[25], t = n
            } else if ("message" === g) {
                let e, n;
                h[26] !== p ? (e = p ? (0, i.jsx)(d.a, {
                    id: "chatgptConversations.shareDialog.poll.publicLinkTitle",
                    defaultMessage: "Share a public link to this poll",
                    description: "Heading below the poll preview in the public sharing dialog. Tells the person sharing that the link opens this interactive voting poll. Workspace-restricted links use a separate disclosure."
                }) : (0, i.jsx)(d.a, {
                    ...eP.sharePublicLinkToMessage
                }), h[26] = p, h[27] = e) : e = h[27], a = e, h[28] !== p ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: p ? (0, i.jsx)(d.a, {
                            id: "chatgptConversations.shareDialog.poll.publicAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access and vote on this poll. <learnMore>Learn more</learnMore>",
                            description: "Explanation below a public poll link preview in the web sharing dialog. Tells the person sharing that link recipients can open the poll and vote. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: e_
                            }
                        }) : (0, i.jsx)(d.a, {
                            id: "chatgptConversations.shareDialog.messagePublicLinkAudienceWithLearnMore",
                            defaultMessage: "Anyone with this link can access this message. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation when sharing a response. The learnMore tag links to shared-links help in merged web.",
                            values: {
                                learnMore: ew
                            }
                        })
                    }), null]
                }), h[28] = p, h[29] = n) : n = h[29], t = n
            } else if ("prompt" === g) {
                let e, n;
                h[30] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    id: "chatgptConversations.shareDialog.prompt.info.title.public",
                    defaultMessage: "Share a public link to this prompt",
                    description: "Heading below the prompt preview in the ChatGPT sharing dialog for a personal account. It introduces the public link and social sharing actions for the selected user prompt."
                }), h[30] = e) : e = h[30], a = e, h[31] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(d.a, {
                            id: "chatgptConversations.shareDialog.prompt.info.description.publicWithLearnMore",
                            defaultMessage: "Anyone with this link can access this prompt. <learnMore>Learn more</learnMore>",
                            description: "Audience explanation below the public-link heading in the ChatGPT prompt sharing dialog on web. Only the selected prompt is shared. The learnMore tag links to shared-links help.",
                            values: {
                                learnMore: ey
                            }
                        })
                    }), null]
                }), h[31] = n) : n = h[31], t = n
            } else {
                let e, n;
                h[32] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    ...eP.sharePublicLinkToConversation
                }), h[32] = e) : e = h[32], a = e, h[33] === Symbol.for("react.memo_cache_sentinel") ? (n = (0, i.jsx)(W, {
                    includeConversationAudience: !0
                }), h[33] = n) : n = h[33], t = n
            }
            return h[34] !== v || h[35] !== u ? (s = "unknown" === u ? null : (0, i.jsx)(v, {
                className: "public" === u ? "relative -start-px" : void 0,
                "aria-hidden": "true"
            }), h[34] = v, h[35] = u, h[36] = s) : s = h[36], h[37] !== s || h[38] !== a ? (r = (0, i.jsxs)("div", {
                className: "flex items-center gap-1 text-xs leading-4 font-bold text-default",
                children: [s, a]
            }), h[37] = s, h[38] = a, h[39] = r) : r = h[39], h[40] !== t ? (o = null == t ? null : (0, i.jsx)("div", {
                className: "mt-1.5 text-xs leading-4 text-codex-description browser:text-secondary",
                children: t
            }), h[40] = t, h[41] = o) : o = h[41], h[42] !== u || h[43] !== g ? (l = "unknown" === u && "conversation" === g ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)("div", {
                    className: "mt-1.5 text-xs leading-4 text-secondary",
                    children: (0, i.jsx)(W, {})
                })
            }) : null, h[42] = u, h[43] = g, h[44] = l) : l = h[44], h[45] !== r || h[46] !== o || h[47] !== l ? (c = (0, i.jsx)(m.e, {
                spacing: "large",
                children: (0, i.jsxs)("div", {
                    className: "w-full text-start select-none",
                    children: [r, o, l]
                })
            }), h[45] = r, h[46] = o, h[47] = l, h[48] = c) : c = h[48], c
        }

        function ey(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function ew(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function e_(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function eT(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function ex(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function ek(e) {
            return (0, i.jsx)(U, {
                children: e
            }, "learn-more")
        }

        function eC(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function eS(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function ej(e) {
            return (0, i.jsx)(U, {
                children: e
            })
        }

        function eI(e) {
            let a, t = (0, n.c)(5),
                {
                    src: s,
                    isLoading: r,
                    onImageError: o
                } = e;
            if (null != s) {
                let e;
                return t[0] !== o || t[1] !== s ? (e = (0, i.jsx)("img", {
                    alt: "",
                    className: "block size-full object-contain",
                    referrerPolicy: "no-referrer",
                    src: s,
                    onError: o
                }), t[0] = o, t[1] = s, t[2] = e) : e = t[2], e
            }
            return t[3] !== r ? (a = (0, i.jsx)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: r ? (0, i.jsx)(v.a, {
                    className: "icon-sm"
                }) : (0, i.jsx)(d.a, {
                    ...eP.imageUnavailable
                })
            }), t[3] = r, t[4] = a) : a = t[4], a
        }

        function eA(e) {
            let a, t, s, r, o, l = (0, n.c)(16),
                {
                    showImageRightsNotice: c,
                    showContentNotices: h,
                    privacyNotices: u
                } = e;
            return l[0] !== u?.hasUnsupportedCodeInterpreterContent || l[1] !== h ? (a = h && u?.hasUnsupportedCodeInterpreterContent ? (0, i.jsx)(m.e, {
                children: (0, i.jsx)(p.a, {
                    content: (0, i.jsx)(d.a, {
                        ...eP.filesNotShared
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[0] = u?.hasUnsupportedCodeInterpreterContent, l[1] = h, l[2] = a) : a = l[2], l[3] !== u?.hasPersonalizedSources || l[4] !== h ? (t = h && u?.hasPersonalizedSources ? (0, i.jsx)(m.e, {
                children: (0, i.jsx)(p.a, {
                    content: (0, i.jsx)(d.a, {
                        ...eP.personalizedSourcesPrivate
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[3] = u?.hasPersonalizedSources, l[4] = h, l[5] = t) : t = l[5], l[6] !== u?.hasScreenshotReference || l[7] !== h ? (s = h && u?.hasScreenshotReference ? (0, i.jsx)(m.e, {
                children: (0, i.jsx)(p.a, {
                    content: (0, i.jsx)(d.a, {
                        ...eP.screenshotDisclaimer
                    }),
                    variant: "privacyNotice"
                })
            }) : null, l[6] = u?.hasScreenshotReference, l[7] = h, l[8] = s) : s = l[8], l[9] !== c ? (r = c ? (0, i.jsx)(m.e, {
                children: (0, i.jsx)("p", {
                    className: "text-sm text-secondary select-none",
                    children: (0, i.jsx)(d.a, {
                        ...eP.imageLicenseDisclaimer
                    })
                })
            }) : null, l[9] = c, l[10] = r) : r = l[10], l[11] !== a || l[12] !== t || l[13] !== s || l[14] !== r ? (o = (0, i.jsxs)(i.Fragment, {
                children: [a, t, s, r]
            }), l[11] = a, l[12] = t, l[13] = s, l[14] = r, l[15] = o) : o = l[15], o
        }

        function eM(e) {
            let a = (0, n.c)(3),
                {
                    error: t
                } = e;
            switch (t) {
                case "blocked": {
                    let e;
                    return a[0] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareBlocked
                    }), a[0] = e) : e = a[0], e
                }
                case "copy-failed": {
                    let e;
                    return a[1] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareCopyFailed
                    }), a[1] = e) : e = a[1], e
                }
                case "create-failed": {
                    let e;
                    return a[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                        ...eP.shareCreateFailed
                    }), a[2] = e) : e = a[2], e
                }
            }
        }
        let eP = (0, h.f)({
            widgetTitle: {
                id: "chatgptConversations.widgetShare.title",
                defaultMessage: "Share this widget",
                description: "Heading of the dialog opened by Share on a generated Recharts widget. The dialog previews the selected widget and offers actions to share its link."
            },
            sharePublicLinkToWidget: {
                id: "chatgptConversations.widgetShare.publicTitle",
                defaultMessage: "Share a public link to this widget",
                description: "Public audience disclosure above the sharing actions for a generated Recharts widget. Shown for personal accounts; workspace-only sharing has a separate disclosure."
            },
            shareLinkToWidget: {
                id: "chatgptConversations.widgetShare.linkTitle",
                defaultMessage: "Share a link to this widget",
                description: "Title in the Recharts widget sharing disclosure when the link is workspace-only or its audience is not yet known. Does not describe the link as public."
            },
            widgetPublicLinkAudience: {
                id: "chatgptConversations.widgetShare.publicAudience",
                defaultMessage: "Anyone with this link can access this widget",
                description: "Explanation below the public-link disclosure in the Recharts widget sharing dialog. Tells the sender who can view the shared widget."
            },
            attributedDescription: {
                id: "chatgptConversations.shareDialog.attributedDescription",
                defaultMessage: "Your name is visible with this shared chat",
                description: "Description in the ChatGPT conversation share dialog when an existing shared link includes the author's name instead of being anonymous"
            },
            copyLink: {
                id: "chatgptConversations.shareDialog.copyLink",
                defaultMessage: "Copy link",
                description: "Button label for copying an existing ChatGPT conversation share link"
            },
            copied: {
                id: "chatgptConversations.shareDialog.destination.copy.copied",
                defaultMessage: "Copied",
                description: "Short confirmation label below the copy-link destination in a ChatGPT post sharing dialog after a public conversation, response, or generated-image URL was copied successfully. The other destinations are X, LinkedIn, and Reddit."
            },
            createLink: {
                id: "chatgptConversations.shareDialog.createLink",
                defaultMessage: "Create link",
                description: "Button label for creating and copying a ChatGPT conversation share link"
            },
            description: {
                id: "chatgptConversations.shareDialog.description",
                defaultMessage: "Your name and any messages you add after sharing stay private",
                description: "Description in the ChatGPT conversation share dialog explaining what stays private"
            },
            imageLicenseDisclaimer: {
                id: "chatgptConversations.shareDialog.imageLicenseDisclaimer",
                defaultMessage: "Confirm you have the rights to share this image.",
                description: "Legal-permission reminder in the ChatGPT conversation or generated-image share dialog. Asks the user to confirm they have the rights to share the image. Shown as a standalone notice with no placeholders."
            },
            imageTitle: {
                id: "chatgptConversations.shareDialog.imageTitle",
                defaultMessage: "Share image",
                description: "Title of the ChatGPT share dialog when sharing one generated image without the surrounding conversation"
            },
            imagesTitle: {
                id: "chatgptConversations.shareDialog.imagesTitle",
                defaultMessage: "Share images",
                description: "Title of the ChatGPT share dialog when sharing all images from one generation without the surrounding conversation"
            },
            imagesPreview: {
                id: "chatgptConversations.shareDialog.imagesPreview",
                defaultMessage: "Preview of the first shared image",
                description: "Accessible description of the cover image in the dialog for sharing all images from one ChatGPT generation"
            },
            imageUnavailable: {
                id: "chatgptConversations.shareDialog.imageUnavailable",
                defaultMessage: "Image preview unavailable",
                description: "Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat."
            },
            sharePublicLinkToImages: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToImages",
                defaultMessage: "Share a public link to these images",
                description: "Title in the personal ChatGPT share dialog when sharing all images from one generation"
            },
            shareLinkToImages: {
                id: "chatgptConversations.shareDialog.shareLinkToImages",
                defaultMessage: "Share a link to these images",
                description: "Title in the ChatGPT share dialog when sharing all images from one generation and public access is not confirmed"
            },
            imagesPublicLinkAudience: {
                id: "chatgptConversations.shareDialog.imagesPublicLinkAudience",
                defaultMessage: "Anyone with this link can access these images. Confirm you have the rights to share these images.",
                description: "Audience and legal-permission reminder in the personal ChatGPT dialog for sharing multiple generated images. Explains that anyone with the link can view the images and asks the user to confirm permission to share them. Both sentences appear in one paragraph."
            },
            sharePublicLinkToImage: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToImage",
                defaultMessage: "Share a public link to this image",
                description: "Title in the redesigned personal ChatGPT image share dialog info block"
            },
            shareLinkToImage: {
                id: "chatgptConversations.shareDialog.shareLinkToImage",
                defaultMessage: "Share a link to this image",
                description: "Title in the redesigned workspace ChatGPT image share dialog info block"
            },
            sharePublicLinkToMessage: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToMessage",
                defaultMessage: "Share a public link to this message",
                description: "Title in the redesigned personal ChatGPT response share dialog info block"
            },
            sharePublicLinkToConversation: {
                id: "chatgptConversations.shareDialog.sharePublicLinkToConversation",
                defaultMessage: "Share a public link to this conversation",
                description: "Title in the redesigned personal ChatGPT conversation share dialog info block"
            },
            shareLinkToMessage: {
                id: "chatgptConversations.shareDialog.shareLinkToMessage",
                defaultMessage: "Share a link to this message",
                description: "Title in the redesigned workspace ChatGPT response share dialog info block"
            },
            shareLinkToConversation: {
                id: "chatgptConversations.shareDialog.shareLinkToConversation",
                defaultMessage: "Share a link to this conversation",
                description: "Title in the redesigned workspace ChatGPT conversation share dialog info block"
            },
            imagePublicLinkAudience: {
                id: "chatgptConversations.shareDialog.imagePublicLinkAudience",
                defaultMessage: "Anyone with this link can access this image. Confirm you have the rights to share this image.",
                description: "Audience and legal-permission reminder below the heading in the personal ChatGPT image-sharing dialog. Explains that anyone with the link can view the image and asks the user to confirm permission to share it. Both sentences appear in one paragraph."
            },
            messagePublicLinkAudience: {
                id: "chatgptConversations.shareDialog.messagePublicLinkAudience",
                defaultMessage: "Anyone with this link can access this message",
                description: "Audience explanation in the personal ChatGPT share dialog"
            },
            workspaceImageRightsAudience: {
                id: "chatgptConversations.shareDialog.workspaceImageRightsAudienceWithContentType",
                defaultMessage: "Links are visible to workspace members only. {contentType, select, images {Confirm you have the rights to share these images.} other {Confirm you have the rights to share this image.}}",
                description: "Audience and legal-permission reminder in the ChatGPT workspace sharing dialog. Only workspace members can view the link. contentType is images for a generated-image series, image for one generated image, message, or conversation. Both sentences appear in one paragraph."
            },
            workspaceLinksVisible: {
                id: "chatgptConversations.shareDialog.workspaceLinksVisible",
                defaultMessage: "Links are visible to workspace members only",
                description: "Subtitle in a redesigned workspace ChatGPT post share dialog info block"
            },
            workspaceLinksVisibleWithLearnMore: {
                id: "chatgptConversations.shareDialog.workspaceLinksVisibleWithLearnMore",
                defaultMessage: "Links are visible to workspace members only. <learnMore>Learn more</learnMore>",
                description: "Audience explanation when sharing a response or image within a workspace. The learnMore tag links to shared-links help in merged web."
            },
            messageTitle: {
                id: "chatgptConversations.shareDialog.messageTitle",
                defaultMessage: "Share response",
                description: "Short title of the ChatGPT response share dialog opened after a user selects Share beneath one completed assistant response. The dialog creates a link to only that response."
            },
            shareLinkToPrompt: {
                id: "chatgptConversations.shareDialog.prompt.info.title.restricted",
                defaultMessage: "Share a link to this prompt",
                description: "Heading below the prompt preview in the ChatGPT sharing dialog when the link is restricted to workspace members or its audience is not yet known. It introduces the sharing actions for the selected user prompt without claiming public access."
            },
            promptTitle: {
                id: "chatgptConversations.shareDialog.promptTitle",
                defaultMessage: "Share prompt",
                description: "Title of the ChatGPT share dialog when sharing one selected user prompt without the surrounding conversation"
            },
            filesNotShared: {
                id: "chatgptConversations.shareDialog.filesNotShared",
                defaultMessage: "Images and files in this chat won't be shown in the public link.",
                description: "Privacy notice in the ChatGPT conversation share dialog when the chat contains code-interpreter images or downloadable files that the public link cannot show. Standalone sentence with no placeholders."
            },
            personalizedSourcesPrivate: {
                id: "chatgptConversations.shareDialog.personalizedSourcesPrivate",
                defaultMessage: "Personalized sources used in this chat, like memories, past chats, custom instructions, apps, and files, stay private.",
                description: "Privacy notice in the ChatGPT conversation share dialog when answers used personalized sources. It reassures the user that those underlying sources are not exposed to link viewers. Standalone sentence with no placeholders."
            },
            projectDescription: {
                id: "chatgptConversations.shareDialog.projectDescription",
                defaultMessage: "Your name, uploaded files, custom instructions, and any messages you add after sharing stay private.",
                description: "Privacy description in the ChatGPT conversation share dialog for a personal-account project chat. It lists project and author data that a public shared link does not expose. Standalone sentence with no placeholders."
            },
            publicLinkAudience: {
                id: "chatgptConversations.shareDialog.publicLinkAudience",
                defaultMessage: "Anyone with the link can view this chat",
                description: "Audience note in the ChatGPT conversation share dialog preview card"
            },
            shareBlocked: {
                id: "chatgptConversations.shareDialog.shareBlocked",
                defaultMessage: "This conversation can't be shared",
                description: "Error shown when a ChatGPT conversation share link is blocked by moderation"
            },
            shareCopyFailed: {
                id: "chatgptConversations.shareDialog.shareCopyFailed",
                defaultMessage: "Share link created, but it could not be copied",
                description: "Inline error and toast in the ChatGPT conversation share dialog shown after a public link was created but all clipboard copy methods failed"
            },
            shareCreateFailed: {
                id: "chatgptConversations.shareDialog.shareCreateFailed",
                defaultMessage: "Could not create share link",
                description: "Inline error and toast in the ChatGPT conversation share dialog shown when creating a public link fails before clipboard copying begins"
            },
            screenshotDisclaimer: {
                id: "chatgptConversations.shareDialog.screenshotDisclaimer",
                defaultMessage: "Screenshots may contain sensitive information.",
                description: "Privacy warning in the ChatGPT conversation share dialog when the chat contains screenshot citations. It reminds the user to review sensitive screenshot content before sharing. Standalone sentence with no placeholders."
            },
            updateLink: {
                id: "chatgptConversations.shareDialog.updateLink",
                defaultMessage: "Update link",
                description: "Button label for updating an existing ChatGPT conversation share link to include the latest visible messages before copying it"
            },
            workspaceDescription: {
                id: "chatgptConversations.shareDialog.workspaceDescription",
                defaultMessage: "Any messages you add after sharing will be visible to members of your workspace",
                description: "Description in the ChatGPT workspace conversation share dialog explaining that later conversation messages remain visible to workspace members"
            },
            workspaceLinkAudience: {
                id: "chatgptConversations.shareDialog.workspaceLinkAudience",
                defaultMessage: "Links are visible to workspace members only",
                description: "Audience note in the ChatGPT workspace conversation or prompt share dialog explaining that the shared link is restricted to members of the current workspace"
            },
            workspaceProjectDescription: {
                id: "chatgptConversations.shareDialog.workspaceProjectDescription",
                defaultMessage: "Any messages you add after sharing will be visible to members of your workspace. Project files and custom instructions won’t be accessible via the shared link.",
                description: "Privacy description in the ChatGPT conversation share dialog for a workspace project chat. It contrasts later-message visibility with project files and custom instructions that link viewers cannot access. Standalone two-sentence notice with no placeholders."
            }
        })
    }),
    Y7n: (function(e, a, t) {
        t.d(a, {
            a: () => z,
            b: () => F
        });
        var i = t("A"),
            n = t("Qo"),
            s = t("ybW"),
            r = t("on"),
            o = t("NR"),
            l = t("zd"),
            c = t("oy"),
            d = t("hL9"),
            h = t("YW"),
            u = t("MX6"),
            g = t("Bb"),
            p = t("RN"),
            m = t("jH"),
            f = t("rq"),
            b = t("aPi"),
            v = t("rV"),
            y = t("RUB"),
            w = t("zS"),
            _ = t("Zjk"),
            T = t("WA"),
            x = t("TxR"),
            k = t("ABl"),
            C = t("vLp"),
            S = t("kf"),
            j = t("qKA"),
            I = t("zH"),
            A = t("HAE"),
            M = t("z3N"),
            P = t("taW"),
            E = t("Zm8H"),
            L = t("OOa"),
            N = t("TUM"),
            D = t("dr"),
            O = t("jA");
        let R = (0, g.a)(async () => (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(982651), t.e(673108), t.e(487481), t.e(851456), t.e(974872), t.e(170947), t.e(715515), t.e(339581), t.e(592453), t.e(720436), t.e(174294)]).then(t.bind(t, "IQg"))).WritingBlockDirectiveRenderer, A.a),
            G = {
                [s.a]: function(e) {
                    let a, t = (0, n.c)(3),
                        s = (0, N.d)(),
                        r = s?.contentReferences;
                    return t[0] !== e || t[1] !== r ? (a = (0, i.jsx)(R, {
                        ...e,
                        contentReferences: r,
                        isStreaming: !1,
                        testId: "chatgpt-writing-block"
                    }), t[0] = e, t[1] = r, t[2] = a) : a = t[2], a
                }
            },
            H = (0, y.c)({
                conversationId: null,
                externalResourcePolicy: "restricted",
                isBrowserEnabled: !1,
                openFileLinksInSidePanel: !1
            });

        function F(e) {
            let a, t, s, o, c, d = (0, n.c)(25),
                {
                    prompt: h,
                    response: u,
                    serverConversationId: g,
                    turns: p
                } = e,
                m = "restricted" !== (0, l.useContext)(T.a),
                f = null != u,
                b = "default";
            if (null != h) {
                let e;
                d[0] !== h.renderMarkdown || d[1] !== h.text ? (e = (0, i.jsx)(Y, {
                    renderMarkdown: h.renderMarkdown,
                    text: h.text
                }), d[0] = h.renderMarkdown, d[1] = h.text, d[2] = e) : e = d[2], a = e
            } else if (null != u) {
                let e, t;
                b = "response", d[3] !== g ? (e = (0, L.c)(g), d[3] = g, d[4] = e) : e = d[4];
                let n = m ? "share" : void 0;
                d[5] !== u || d[6] !== e || d[7] !== n ? (t = (0, i.jsx)(M.a, {
                    conversationId: e,
                    cwd: null,
                    hostId: S.a,
                    item: u,
                    isReadOnly: !0,
                    preview: n,
                    trackShownImpressions: !1,
                    turnId: "share-preview"
                }), d[5] = u, d[6] = e, d[7] = n, d[8] = t) : t = d[8], a = t
            } else {
                let e;
                p?.some(W) && (b = "transcript"), d[9] !== m || d[10] !== g || d[11] !== p ? (e = null == p ? null : (0, i.jsx)(q, {
                    preview: m ? "share" : void 0,
                    serverConversationId: g,
                    turns: p
                }), d[9] = m, d[10] = g, d[11] = p, d[12] = e) : e = d[12], a = e
            }
            let v = null == h && null == u && null == p,
                y = b,
                w = f ? "responseTypography-A7UvAY" : "p-4";
            return d[13] !== w ? (t = (0, r.b)("flex min-w-0 flex-col gap-4", w), d[13] = w, d[14] = t) : t = d[14], d[15] !== a || d[16] !== t ? (s = (0, i.jsx)("div", {
                className: t,
                children: a
            }), d[15] = a, d[16] = t, d[17] = s) : s = d[17], d[18] !== g || d[19] !== s ? (o = (0, i.jsx)(B, {
                serverConversationId: g,
                children: s
            }), d[18] = g, d[19] = s, d[20] = o) : o = d[20], d[21] !== v || d[22] !== o || d[23] !== b ? (c = (0, i.jsx)(j.a, {
                isLoading: v,
                variant: y,
                children: o
            }), d[21] = v, d[22] = o, d[23] = b, d[24] = c) : c = d[24], c
        }

        function W(e) {
            let {
                turn: a
            } = e;
            return a.items.some(U)
        }

        function U(e) {
            return "generated-image" === e.type
        }

        function z(e) {
            let a, t, s = (0, n.c)(7),
                {
                    preview: r,
                    serverConversationId: o,
                    turns: l
                } = e;
            return s[0] !== r || s[1] !== o || s[2] !== l ? (a = (0, i.jsx)("div", {
                className: "flex min-w-0 flex-col gap-4 p-4",
                children: (0, i.jsx)(q, {
                    markdownDirectives: G,
                    preview: r,
                    serverConversationId: o,
                    turns: l
                })
            }), s[0] = r, s[1] = o, s[2] = l, s[3] = a) : a = s[3], s[4] !== o || s[5] !== a ? (t = (0, i.jsx)(B, {
                serverConversationId: o,
                children: a
            }), s[4] = o, s[5] = a, s[6] = t) : t = s[6], t
        }

        function B(e) {
            let a, t, s, r, o = (0, n.c)(10),
                {
                    children: l,
                    serverConversationId: c
                } = e;
            return o[0] !== c ? (a = (0, O.c)(c), o[0] = c, o[1] = a) : a = o[1], o[2] !== c || o[3] !== a ? (t = {
                conversationId: c,
                pathname: a,
                routeKind: "chatgpt-thread",
                routeTemplate: O.a
            }, o[2] = c, o[3] = a, o[4] = t) : t = o[4], o[5] !== l ? (s = (0, i.jsx)(T.a.Provider, {
                value: "restricted",
                children: (0, i.jsx)(b.a, {
                    children: l
                })
            }), o[5] = l, o[6] = s) : s = o[6], o[7] !== t || o[8] !== s ? (r = (0, i.jsx)(C.a, {
                route: t,
                children: s
            }), o[7] = t, o[8] = s, o[9] = r) : r = o[9], r
        }

        function q(e) {
            let {
                preview: a,
                markdownDirectives: t,
                serverConversationId: n,
                turns: s
            } = e;
            return s.map(e => {
                let {
                    id: s,
                    turn: r
                } = e;
                return (0, i.jsx)("div", {
                    className: "flex min-w-0 flex-col gap-4",
                    children: r.items.map((e, r) => "user-message" === e.type ? (0, i.jsxs)("div", {
                        className: "flex min-w-0 flex-col items-end gap-2",
                        children: [e.images.map(e => (0, i.jsx)(V, {
                            src: e,
                            serverConversationId: n
                        }, e)), e.message.trim() ? (0, i.jsx)(Y, {
                            item: e,
                            renderMarkdown: e.renderMarkdown,
                            text: (0, o.w)(e.message)
                        }) : null]
                    }, r) : "assistant-message" === e.type ? (0, i.jsx)(M.a, {
                        conversationId: (0, L.c)(n),
                        cwd: null,
                        hostId: S.a,
                        item: e,
                        isReadOnly: !0,
                        preview: a,
                        markdownDirectives: t,
                        trackShownImpressions: !1,
                        turnId: s
                    }, r) : "generated-image" === e.type && null != e.src ? (0, i.jsx)(V, {
                        isGenerated: !0,
                        src: e.src,
                        serverConversationId: n
                    }, r) : null)
                }, s)
            })
        }

        function Y(e) {
            let a, t, s, r = (0, n.c)(7),
                {
                    item: o,
                    renderMarkdown: l,
                    text: c
                } = e;
            r[0] !== o || r[1] !== c ? (a = function(e, a) {
                let t = a?.chatGptSystemHintMentions ?? (0, D.d)([], e),
                    i = e;
                for (let e of t.toReversed()) {
                    let a = e.id.replace(/^(?:connector|plugin):/u, "");
                    (a === k.a || E.a.has(a) || null != (0, h.z)(e.id)) && (i = i.slice(0, e.startIndex) + (0, u.b)(e.label, k.b) + i.slice(e.endIndex))
                }
                return i
            }(c, o), r[0] = o, r[1] = c, r[2] = a) : a = r[2], r[3] === Symbol.for("react.memo_cache_sentinel") ? (t = {
                a: K
            }, r[3] = t) : t = r[3];
            let d = !0 === l;
            return r[4] !== a || r[5] !== d ? (s = (0, i.jsx)("div", {
                className: "max-w-[77%] min-w-0 self-end overflow-hidden rounded-2xl bg-text/5 px-3 py-2 break-words",
                children: (0, i.jsx)(m.a, {
                    text: a,
                    components: t,
                    cwd: null,
                    hasSerializedParagraphs: d,
                    hostId: S.a,
                    renderMath: !1,
                    variant: "user-message"
                })
            }), r[4] = a, r[5] = d, r[6] = s) : s = r[6], s
        }

        function K(e) {
            let a, t, s = (0, n.c)(10);
            if (e.href !== k.b) {
                let a, t = e[v.a];
                return s[0] !== e.children || s[1] !== e.href || s[2] !== e.title || s[3] !== t ? (a = (0, i.jsx)(H, {
                    href: e.href,
                    title: e.title,
                    "data-markdown-raw-link-label": t,
                    children: e.children
                }), s[0] = e.children, s[1] = e.href, s[2] = e.title, s[3] = t, s[4] = a) : a = s[4], a
            }
            let r = e[v.a];
            return s[5] !== e.children || s[6] !== r ? (a = "string" == typeof r ? (0, u.c)(r) : (0, _.a)(e.children), s[5] = e.children, s[6] = r, s[7] = a) : a = s[7], s[8] !== a ? (t = (0, i.jsx)(x.a, {
                icon: f.a,
                layout: "selection-pill",
                children: a
            }), s[8] = a, s[9] = t) : t = s[9], t
        }

        function V(e) {
            let a, t, s = (0, n.c)(7),
                {
                    isGenerated: r,
                    src: o,
                    serverConversationId: l
                } = e,
                h = void 0 !== r && r,
                u = (0, I.f)(o) ? o : "";
            s[0] !== l ? (a = (0, P.c)((0, L.c)(l)), s[0] = l, s[1] = a) : a = s[1];
            let {
                src: g,
                isLoading: m
            } = (0, I.i)(u, a), f = (0, w.c)(o) ? o : null;
            if (u && (f = g), m) {
                let e;
                return s[2] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(p.a, {
                    className: "icon-sm"
                }), s[2] = e) : e = s[2], e
            }
            if (null == f) {
                let e;
                return s[3] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)("span", {
                    className: "text-sm text-secondary",
                    children: (0, i.jsx)(c.a, {
                        id: "chatgptConversations.shareDialog.imageUnavailable",
                        defaultMessage: "Image preview unavailable",
                        description: "Placeholder inside the cropped ChatGPT sharing preview when an image cannot be loaded safely. This does not change whether the image is included in the shared chat."
                    })
                }), s[3] = e) : e = s[3], e
            }
            return s[4] !== f || s[5] !== h ? (t = h ? (0, i.jsx)("img", {
                alt: "",
                className: "block max-h-56 max-w-full self-start rounded-2xl object-contain",
                loading: "lazy",
                referrerPolicy: "no-referrer",
                src: f
            }) : (0, i.jsx)(d.a, {
                src: f,
                previewEnabled: !1,
                imageLoading: "lazy"
            }), s[4] = f, s[5] = h, s[6] = t) : t = s[6], t
        }
    }),
    BAU: (function(e, a, t) {
        t.d(a, {
            a: () => q
        });
        var i = t("A"),
            n = t("Qo"),
            s = t("Wrz"),
            r = t("TP"),
            o = t("on"),
            l = t("Xnl"),
            c = t("zd"),
            d = t("oy"),
            h = t("Wf"),
            u = t("HZ"),
            g = t("g2"),
            p = t("ygO"),
            m = t("HOL"),
            f = t("Bb"),
            b = t("X6V"),
            v = t("WA"),
            y = t("yG"),
            w = t("OW"),
            _ = t("KDa"),
            T = t("UeP"),
            x = t("q0j"),
            k = t("J8F"),
            C = t("jXq"),
            S = t("Hnr"),
            j = t("xKa"),
            I = t("Ebc"),
            A = t("hZa"),
            M = t("Elt"),
            P = t("Zho"),
            E = t("Mr");
        let L = (0, f.a)(async () => (await Promise.all([t.e(669998), t.e(14737)]).then(t.bind(t, "Q4X"))).Markdown),
            N = {
                p: e => {
                    let {
                        children: a
                    } = e;
                    return (0, i.jsx)("div", {
                        children: a
                    })
                },
                a: function(e) {
                    let a, t = (0, n.c)(3),
                        {
                            children: s,
                            href: r
                        } = e;
                    return t[0] !== s || t[1] !== r ? (a = r ? (0, i.jsx)(_.a, {
                        href: r,
                        className: "underline",
                        initiator: "open_in_browser_bridge",
                        children: s
                    }) : s, t[0] = s, t[1] = r, t[2] = a) : a = t[2], a
                }
            };

        function D(e) {
            let a, t, s, r, o, h, u, g, p = (0, n.c)(70),
                {
                    conversationId: m,
                    notice: f,
                    feedbackEnabled: b
                } = e,
                v = (0, l.z)(w.a),
                _ = (0, l.x)(M.a, m),
                T = b && !_,
                {
                    value: x
                } = (0, A.g)("4082596618"),
                k = f.policy?.errCode,
                C = f.policy?.errType,
                S = (0, c.useRef)(null);
            p[0] !== k || p[1] !== m || p[2] !== f || p[3] !== v || p[4] !== C ? (a = () => {
                if (null == f.policy) return;
                let e = JSON.stringify([m, f.messageId, k, C]);
                if (S.current === e) return;
                S.current = e;
                let a = v.get(E.J, m),
                    t = v.get(E.x, m);
                (0, P.h)(v.get(y.c).logProductEvent, {
                    conversationId: v.get(E.j, m),
                    isWorkConversation: null == a ? null : "tpp" === t || "flora" === t,
                    notice: f,
                    serverRequestId: null == f.messageId ? void 0 : a?.[f.messageId]?.message?.metadata?.request_id
                })
            }, p[0] = k, p[1] = m, p[2] = f, p[3] = v, p[4] = C, p[5] = a) : a = p[5];
            let j = (0, c.useEffectEvent)(a);
            p[6] !== j ? (t = () => {
                j()
            }, p[6] = j, p[7] = t) : t = p[7], p[8] !== k || p[9] !== m || p[10] !== f.messageId || p[11] !== C ? (s = [m, f.messageId, k, C], p[8] = k, p[9] = m, p[10] = f.messageId, p[11] = C, p[12] = s) : s = p[12], (0, c.useEffect)(t, s), p[13] !== x.bio_trusted_access_link ? (r = "string" == typeof x.bio_trusted_access_link ? x.bio_trusted_access_link.trim() : "", p[13] = x.bio_trusted_access_link, p[14] = r) : r = p[14];
            let D = r;
            p[15] !== x.cyber_trusted_access_link ? (o = "string" == typeof x.cyber_trusted_access_link ? x.cyber_trusted_access_link.trim() : "", p[15] = x.cyber_trusted_access_link, p[16] = o) : o = p[16];
            let H = o,
                F = "cyber_safety_content_policy" === k || "content_regurgitation" === k ? f.structuredCopy : void 0,
                W = O;
            if (null != F) {
                let e, a, t, n, s, r;
                p[17] !== F.title ? (e = (0, i.jsx)("p", {
                    className: "font-semibold",
                    children: F.title
                }), p[17] = F.title, p[18] = e) : e = p[18], p[19] === Symbol.for("react.memo_cache_sentinel") ? (a = ["p", "a", "strong", "em", "br"], p[19] = a) : a = p[19];
                let o = T ? F.feedback_prompt : null;
                p[20] !== F.details || p[21] !== o ? (t = [o, F.details].filter(Boolean), p[20] = F.details, p[21] = o, p[22] = t) : t = p[22];
                let l = t.join(" ");
                return p[23] !== l ? (n = (0, i.jsx)(L, {
                    allowedElements: a,
                    skipHtml: !0,
                    unwrapDisallowed: !0,
                    urlTransform: R,
                    components: N,
                    children: l
                }), p[23] = l, p[24] = n) : n = p[24], p[25] !== k || p[26] !== F.primary_action ? (s = "cyber_safety_content_policy" === k && "sign_in" === F.primary_action ? (0, i.jsx)(I.a, {
                    size: "actionSm"
                }) : null, p[25] = k, p[26] = F.primary_action, p[27] = s) : s = p[27], p[28] !== n || p[29] !== s || p[30] !== e ? (r = (0, i.jsxs)(i.Fragment, {
                    children: [e, n, s]
                }), p[28] = n, p[29] = s, p[30] = e, p[31] = r) : r = p[31], r
            }
            if ("content_policy" === k) {
                let e, a, t;
                return p[32] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.policy.notice",
                    defaultMessage: "This content may violate our <link>usage policies</link>",
                    description: "Notice on a message flagged or blocked by content moderation",
                    values: {
                        link: e => W("https://openai.com/policies/usage-policies", e)
                    }
                }), p[32] = e) : e = p[32], p[33] !== b ? (a = b ? (0, i.jsx)("p", {
                    children: (0, i.jsx)(d.a, {
                        id: "chatgpt.moderation.policy.feedback",
                        defaultMessage: "Did we get it wrong? Please tell us by giving this response a thumbs down.",
                        description: "Invites the user to use the available thumbs-down control to report an incorrect policy warning"
                    })
                }) : null, p[33] = b, p[34] = a) : a = p[34], p[35] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                    children: [e, a]
                }), p[35] = a, p[36] = t) : t = p[36], t
            }
            if ("bio_safety_content_policy" === k) {
                let e, a, t, n, s;
                return p[37] !== D ? (e = (0, i.jsx)("p", {
                    className: "font-semibold",
                    children: D ? (0, i.jsx)(d.a, {
                        id: "chatgpt.moderation.bio.block.title",
                        defaultMessage: "This content can’t be shown",
                        description: "Title on content blocked for biological safety"
                    }) : (0, i.jsx)(d.a, {
                        id: "chatgpt.moderation.bio.flag.title",
                        defaultMessage: "This content was flagged for possible biological safety risk",
                        description: "Title on biological safety content without a Trusted Access application link"
                    })
                }), p[37] = D, p[38] = e) : e = p[38], p[39] !== D || p[40] !== m || p[41] !== f ? (a = D ? (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.bio.access",
                    defaultMessage: "We’re especially careful with requests involving biological research and applications that could pose safety risks. Eligible researchers can apply for <link>Trusted Access</link>.",
                    description: "Explains biological safety restrictions and links to researcher access",
                    values: {
                        link: e => (0, i.jsx)(G, {
                            conversationId: m,
                            notice: f,
                            href: D,
                            protectionType: "bio",
                            children: e
                        })
                    }
                }) : null, p[39] = D, p[40] = m, p[41] = f, p[42] = a) : a = p[42], p[43] !== D || p[44] !== _ ? (t = !D && _ ? (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.bio.learnMore",
                    defaultMessage: "You can read more about our approach in our <link>blog post</link>",
                    description: "Supporting text in a persistent biological safety warning shown in the conversation transcript during an active Voice session. It directs the user to a blog post explaining OpenAI's biological safety approach. The link placeholder wraps the words 'blog post'.",
                    values: {
                        link: e => W("https://openai.com/index/preparing-for-future-ai-capabilities-in-biology/", e)
                    }
                }) : null, p[43] = D, p[44] = _, p[45] = t) : t = p[45], p[46] !== D || p[47] !== b || p[48] !== _ ? (n = D || _ ? null : (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.bio.textLearnMoreWithOptionalFeedback",
                    defaultMessage: "{showFeedback, select, true {Did we get it wrong? Please tell us by giving this response a thumbs down and then try rephrasing your request. You can read more about our approach in our <link>blog post</link>.} other {Try rephrasing your request. You can read more about our approach in our <link>blog post</link>.}}",
                    description: "Explains biological safety restrictions in text chat. Only ask for thumbs-down feedback when that control is available; otherwise suggest rephrasing and link to the blog post.",
                    values: {
                        showFeedback: b ? "true" : "false",
                        link: e => W("https://openai.com/index/preparing-for-future-ai-capabilities-in-biology/", e)
                    }
                }), p[46] = D, p[47] = b, p[48] = _, p[49] = n) : n = p[49], p[50] !== e || p[51] !== a || p[52] !== t || p[53] !== n ? (s = (0, i.jsxs)(i.Fragment, {
                    children: [e, a, t, n]
                }), p[50] = e, p[51] = a, p[52] = t, p[53] = n, p[54] = s) : s = p[54], s
            }
            if ("cyber_safety_content_policy" === k) {
                let e, a, t, n;
                p[55] === Symbol.for("react.memo_cache_sentinel") ? (e = (0, i.jsx)("p", {
                    className: "font-semibold",
                    children: (0, i.jsx)(d.a, {
                        id: "chatgpt.moderation.cyber.title",
                        defaultMessage: "This content can’t be shown",
                        description: "Title on cybersecurity safety blocked content"
                    })
                }), a = (0, i.jsx)("p", {
                    children: (0, i.jsx)(d.a, {
                        id: "chatgpt.moderation.cyber.daybreak.eligibility.body",
                        defaultMessage: "This content was flagged for possible cybersecurity risk. You may be eligible for Daybreak Blue, which reduces refusals for authorized defensive work on supported models. Other safeguards still apply.",
                        description: "Body of a cybersecurity refusal in the ChatGPT conversation when no account-specific copy was supplied. Explains why the response was blocked and possible Daybreak Blue eligibility without promising that a retried request will be allowed. Daybreak Blue is an untranslated product name."
                    })
                }), p[55] = e, p[56] = a) : (e = p[55], a = p[56]);
                let s = H || "https://chatgpt.com/cyber";
                return p[57] === Symbol.for("react.memo_cache_sentinel") ? (t = (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.cyber.daybreak.learn_more.label",
                    defaultMessage: "Learn more",
                    description: "Link label in a ChatGPT cybersecurity refusal. Opens the Daybreak program information page for users who may be eligible."
                }), p[57] = t) : t = p[57], p[58] !== m || p[59] !== f || p[60] !== s ? (n = (0, i.jsxs)(i.Fragment, {
                    children: [e, a, (0, i.jsx)(G, {
                        conversationId: m,
                        notice: f,
                        href: s,
                        protectionType: "cyber",
                        children: t
                    })]
                }), p[58] = m, p[59] = f, p[60] = s, p[61] = n) : n = p[61], n
            }
            return p[62] !== k ? (h = (0, i.jsx)("p", {
                className: "font-semibold",
                children: "content_regurgitation" === k ? (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.regurgitation.title",
                    defaultMessage: "This content can’t be shown because it may conflict with our guidelines for creative content",
                    description: "Title on a blocked verbatim copyrighted response"
                }) : (0, i.jsx)(d.a, {
                    id: "chatgpt.moderation.safety.title",
                    defaultMessage: "This content can’t be shown for safety reasons",
                    description: "Title on content blocked by a safety policy"
                })
            }), p[62] = k, p[63] = h) : h = p[63], p[64] !== k || p[65] !== T ? (u = "sensitive_conversations_content_policy" === k ? (0, i.jsx)(d.a, {
                id: "chatgpt.moderation.wellbeing.details",
                defaultMessage: "{showFeedback, select, true {If this seems like a mistake, give this response a thumbs down. Learn more about our <link>approach to sensitive conversations</link>.} other {Learn more about our <link>approach to sensitive conversations</link>.}}",
                description: "Explains a sensitive-conversations block and links to the policy; showFeedback is true only when the response has a thumbs-down control",
                values: {
                    showFeedback: T ? "true" : "false",
                    link: e => W("https://openai.com/index/strengthening-chatgpt-responses-in-sensitive-conversations/", e)
                }
            }) : (0, i.jsx)(d.a, {
                id: "chatgpt.moderation.safety.details",
                defaultMessage: "{showFeedback, select, true {If this seems like a mistake, give this response a thumbs down. Learn more about our intended model behavior in our <link>Model Spec</link>.} other {Learn more about our intended model behavior in our <link>Model Spec</link>.}}",
                description: "Explains a generic or copyright safety block and links to the Model Spec; showFeedback is true only when the response has a thumbs-down control",
                values: {
                    showFeedback: T ? "true" : "false",
                    link: e => W("https://model-spec.openai.com/2025-12-18.html", e)
                }
            }), p[64] = k, p[65] = T, p[66] = u) : u = p[66], p[67] !== h || p[68] !== u ? (g = (0, i.jsxs)(i.Fragment, {
                children: [h, u]
            }), p[67] = h, p[68] = u, p[69] = g) : g = p[69], g
        }

        function O(e, a) {
            return (0, i.jsx)(_.a, {
                href: e,
                className: "underline",
                initiator: "open_in_browser_bridge",
                children: a
            })
        }

        function R(e) {
            try {
                return "https:" === new URL(e).protocol ? e : ""
            } catch {
                return ""
            }
        }

        function G(e) {
            let a, t, s, r, o, d, h, u, g = (0, n.c)(23),
                {
                    children: p,
                    conversationId: m,
                    href: f,
                    notice: b,
                    protectionType: v
                } = e,
                T = (0, l.z)(w.a),
                x = (0, l.x)(M.a, m),
                k = (0, c.useRef)(null);
            g[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                amount: .5,
                once: !0
            }, g[0] = a) : a = g[0];
            let C = (0, j.a)(k, a);
            g[1] === Symbol.for("react.memo_cache_sentinel") ? (t = new Set, g[1] = t) : t = g[1];
            let I = (0, c.useRef)(t),
                A = x ? "CHATGPT_SAFETY_LINK_SURFACE_INTEGRATED_VOICE" : "CHATGPT_SAFETY_LINK_SURFACE_TEXT_CHAT";
            g[2] !== m || g[3] !== b.messageId || g[4] !== v || g[5] !== T || g[6] !== A ? (s = e => {
                if (null == m || null == b.messageId) return;
                let a = JSON.stringify([m, b.messageId, A, e]);
                if (I.current.has(a)) return;
                I.current.add(a);
                let t = T.get(E.J, m)?.[b.messageId]?.message?.metadata?.turn_exchange_id;
                (0, y.a)(T, S.a, {
                    actionType: e,
                    conversationId: m,
                    messageId: b.messageId,
                    linkType: "CHATGPT_SAFETY_LINK_TYPE_TERMINAL_BLOCK_TRUSTED_ACCESS",
                    protectionType: "bio" === v ? "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_BIO" : "CHATGPT_SAFETY_LINK_PROTECTION_TYPE_CYBER",
                    surface: A,
                    turnExchangeId: "string" == typeof t ? t : void 0
                })
            }, g[2] = m, g[3] = b.messageId, g[4] = v, g[5] = T, g[6] = A, g[7] = s) : s = g[7];
            let P = s;
            g[8] !== P ? (r = () => P("CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_SHOWN"), g[8] = P, g[9] = r) : r = g[9];
            let L = (0, c.useEffectEvent)(r);
            return g[10] !== C || g[11] !== L ? (o = () => {
                C && L()
            }, g[10] = C, g[11] = L, g[12] = o) : o = g[12], g[13] !== C || g[14] !== b.messageId || g[15] !== A ? (d = [C, b.messageId, A], g[13] = C, g[14] = b.messageId, g[15] = A, g[16] = d) : d = g[16], (0, c.useEffect)(o, d), g[17] !== P ? (h = () => P("CHATGPT_SAFETY_LINK_INTERACTION_ACTION_TYPE_CLICKED"), g[17] = P, g[18] = h) : h = g[18], g[19] !== p || g[20] !== f || g[21] !== h ? (u = (0, i.jsx)(_.a, {
                ref: k,
                href: f,
                className: "underline",
                initiator: "open_in_browser_bridge",
                onClickCapture: h,
                children: p
            }), g[19] = p, g[20] = f, g[21] = h, g[22] = u) : u = g[22], u
        }
        var H = t("FnQ"),
            F = t("i1v"),
            W = t("cIb");
        let U = (0, f.a)(async () => (await Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(982651), t.e(673108), t.e(487481), t.e(753405), t.e(585419), t.e(673131), t.e(223580), t.e(877700), t.e(636463), t.e(669998), t.e(492915), t.e(310373), t.e(680021), t.e(664836), t.e(758049), t.e(33773), t.e(909395), t.e(146419), t.e(841849), t.e(436084)]).then(t.bind(t, "NnLI"))).ProductInterventionNotice, {
                errorFallback: (0, i.jsx)(d.a, {
                    id: "chatgpt.productIntervention.loadError",
                    defaultMessage: "Unable to display this notice",
                    description: "Shown when a conversation notice renderer cannot be loaded"
                })
            }),
            z = (0, f.a)(() => Promise.all([t.e(418851), t.e(109308), t.e(399565), t.e(257798), t.e(447351), t.e(617936), t.e(807489), t.e(337882), t.e(955979), t.e(646436), t.e(7078), t.e(200429), t.e(698524), t.e(956483), t.e(87162), t.e(396705), t.e(155568), t.e(731863), t.e(767086), t.e(76629), t.e(514085), t.e(204542), t.e(982651), t.e(673108), t.e(487481), t.e(963703), t.e(357381), t.e(411547), t.e(476405), t.e(695930)]).then(t.bind(t, "CGZ")).then(e => e.TrustedContactEnrollment)),
            B = {
                a: function(e) {
                    let a, t, s, c, d, h, u, g, p = (0, n.c)(20);
                    if (p[0] !== e) {
                        let {
                            children: i,
                            className: n,
                            href: r,
                            onClick: o,
                            onClickCapture: l,
                            rel: h,
                            target: u,
                            ...g
                        } = e;
                        a = i, t = n, s = r, c = l, d = g, p[0] = e, p[1] = a, p[2] = t, p[3] = s, p[4] = c, p[5] = d
                    } else a = p[1], t = p[2], s = p[3], c = p[4], d = p[5];
                    let m = (0, l.z)(w.a);
                    if (null == s) {
                        let e;
                        return p[6] !== a ? (e = (0, i.jsx)(i.Fragment, {
                            children: a
                        }), p[6] = a, p[7] = e) : e = p[7], e
                    }
                    return p[8] !== t ? (h = (0, o.b)(t, "!text-default underline hover:!text-default hover:no-underline"), p[8] = t, p[9] = h) : h = p[9], p[10] !== s || p[11] !== c || p[12] !== m ? (u = e => {
                        c?.(e);
                        let a = function(e) {
                            try {
                                switch (new URL(e).protocol) {
                                    case "http:":
                                        return "http";
                                    case "https:":
                                        return "https";
                                    case "sms:":
                                        return "sms";
                                    case "tel:":
                                        return "tel";
                                    default:
                                        return null
                                }
                            } catch {
                                return null
                            }
                        }(s);
                        null != a && (0, y.a)(m, r.CodexDisclaimerLinkClicked, {
                            disclaimerSource: "sh_disclaimer_notice",
                            protocol: a,
                            via: 0 === e.detail ? "keyboard" : "pointer"
                        })
                    }, p[10] = s, p[11] = c, p[12] = m, p[13] = u) : u = p[13], p[14] !== a || p[15] !== s || p[16] !== d || p[17] !== h || p[18] !== u ? (g = (0, i.jsx)(_.a, {
                        ...d,
                        href: s,
                        initiator: "markdown_link_click",
                        isBrowserEnabled: !1,
                        className: h,
                        onClickCapture: u,
                        children: a
                    }), p[14] = a, p[15] = s, p[16] = d, p[17] = h, p[18] = u, p[19] = g) : g = p[19], g
                }
            };

        function q(e) {
            let a, t, s, r = (0, n.c)(20),
                {
                    conversationId: o,
                    hostId: c,
                    feedbackEnabled: d,
                    moderationDisclaimers: u,
                    shouldBlockExternalEgress: g
                } = e,
                p = void 0 !== d && d,
                m = (0, l.z)(w.a),
                f = (0, h.a)();
            if (null == u || 0 === u.length) return null;
            let b = g ? "restricted" : "allow";
            if (r[0] !== o || r[1] !== p || r[2] !== c || r[3] !== f || r[4] !== u || r[5] !== m || r[6] !== g) {
                let e;
                r[8] !== o || r[9] !== p || r[10] !== c || r[11] !== f || r[12] !== m || r[13] !== g ? (e = (e, a) => {
                    let {
                        disclaimers: t,
                        disclaimerMetadata: n,
                        disclaimerType: s
                    } = e, r = () => {
                        (0, k.e)(m, e)
                    }, l = (0, x.d)(s) ? s : void 0;
                    return [null != e.policy ? (0, i.jsx)(Y, {
                        conversationId: o,
                        onRendered: r,
                        children: (0, i.jsx)(D, {
                            conversationId: o,
                            notice: e,
                            feedbackEnabled: p
                        })
                    }, a + "-policy") : null, null == e.policy && e.modelIncompatibility ? (0, i.jsx)(Y, {
                        content: f.formatMessage({
                            id: "chatgpt.moderation.modelIncompatibility.notice.body",
                            defaultMessage: "This content can’t be shown for safety reasons{paragraphBreak}Learn more about our intended model behavior in our [Model Spec]({modelSpecUrl}).",
                            description: "Safety notice in a ChatGPT conversation when the model blocks a request or response involving chain-of-thought extraction. The paragraphBreak placeholder separates the bold heading from the details. The second paragraph links to the Model Spec, OpenAI's public model behavior specification. This message is rendered as Markdown: preserve the link syntax and the modelSpecUrl placeholder, which contains its URL."
                        }, {
                            paragraphBreak: "\n\n",
                            modelSpecUrl: "https://model-spec.openai.com/2025-12-18.html"
                        }),
                        conversationId: o,
                        onRendered: r
                    }, `${a}-model-incompatibility`) : null, null == e.productIntervention || g ? null : (0, i.jsx)(U, {
                        intervention: e.productIntervention
                    }, `${a}-${e.productIntervention.intervention_id}`), ...t.map((e, t) => null == l ? (0, i.jsx)(Y, {
                        className: "w-fit",
                        components: B,
                        content: e,
                        conversationId: o,
                        onRendered: r
                    }, `${String(a)}-${String(t)}-${e}`) : (0, i.jsx)(K, {
                        conversationId: o,
                        disclaimerMetadata: n,
                        disclaimerType: l,
                        hostId: c,
                        onRendered: r
                    }, `${String(a)}-${String(t)}-${e}`))]
                }, r[8] = o, r[9] = p, r[10] = c, r[11] = f, r[12] = m, r[13] = g, r[14] = e) : e = r[14], a = u.flatMap(e), r[0] = o, r[1] = p, r[2] = c, r[3] = f, r[4] = u, r[5] = m, r[6] = g, r[7] = a
            } else a = r[7];
            return r[15] !== a ? (t = (0, i.jsx)("div", {
                className: "mt-3 flex flex-col gap-2",
                children: a
            }), r[15] = a, r[16] = t) : t = r[16], r[17] !== b || r[18] !== t ? (s = (0, i.jsx)(v.a.Provider, {
                value: b,
                children: t
            }), r[17] = b, r[18] = t, r[19] = s) : s = r[19], s
        }

        function Y(e) {
            let a, t, s, r, o, l, c, d = (0, n.c)(21),
                {
                    children: h,
                    className: u,
                    components: g,
                    content: p,
                    conversationId: f,
                    footer: b,
                    icon: v,
                    onRendered: y
                } = e;
            return d[0] !== y ? (a = e => {
                null != e && y()
            }, d[0] = y, d[1] = a) : a = d[1], d[2] !== v ? (t = v ?? (0, i.jsx)(m.a, {
                className: "shrink-0 text-secondary",
                asset: F.a,
                "aria-hidden": !0
            }), d[2] = v, d[3] = t) : t = d[3], d[4] !== h || d[5] !== g || d[6] !== p || d[7] !== f ? (s = h ?? (0, i.jsx)(T.ChatGptMarkdown, {
                className: "text-sm [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 [&>p:first-child]:font-semibold",
                components: g,
                conversationId: f,
                cwd: null,
                isStreaming: !1,
                textStyle: {
                    kind: "assistant-message"
                },
                children: p ?? ""
            }), d[4] = h, d[5] = g, d[6] = p, d[7] = f, d[8] = s) : s = d[8], d[9] !== b ? (r = null == b ? null : (0, i.jsx)("div", {
                className: "mt-3",
                children: b
            }), d[9] = b, d[10] = r) : r = d[10], d[11] !== s || d[12] !== r ? (o = (0, i.jsxs)("div", {
                className: "min-w-0 grow pt-[2px]",
                children: [s, r]
            }), d[11] = s, d[12] = r, d[13] = o) : o = d[13], d[14] !== t || d[15] !== o ? (l = (0, i.jsxs)("div", {
                className: "flex min-w-0 grow items-start gap-3",
                children: [t, o]
            }), d[14] = t, d[15] = o, d[16] = l) : l = d[16], d[17] !== u || d[18] !== a || d[19] !== l ? (c = (0, i.jsx)(C.a, {
                ref: a,
                className: u,
                children: l
            }), d[17] = u, d[18] = a, d[19] = l, d[20] = c) : c = d[20], c
        }

        function K(e) {
            let a, t, r, o, f, v, T, k, C, S, j, I = (0, n.c)(34),
                {
                    conversationId: A,
                    disclaimerMetadata: M,
                    disclaimerType: P,
                    hostId: E,
                    onRendered: L
                } = e,
                N = (0, l.z)(w.a),
                D = (0, h.a)(),
                [O, R] = (0, c.useState)(!1),
                [G, F] = (0, c.useState)(!1),
                {
                    data: U
                } = (0, l.A)(g.p),
                q = (0, u.Z)();
            if (I[0] !== M || I[1] !== P || I[2] !== D || I[3] !== O || I[4] !== U?.trustedContactsOptedOutAt) {
                v = Symbol.for("react.early_return_sentinel");
                e: {
                    var K;
                    let e, i = (null == (K = M?.trusted_contact_name?.trim()) ? void 0 : Array.from(K, e => `&#${String(e.codePointAt(0))};`).join("")) || D.formatMessage({
                        id: "codex.chatgpt.trustedContactDisclaimer.defaultTrustedContactName",
                        defaultMessage: "your trusted contact",
                        description: "Fallback name used in a ChatGPT trusted-contact disclaimer when the trusted contact's name is unavailable."
                    });
                    if (I[11] !== M || I[12] !== P ? (e = "notify_trusted_contact_us5" === P ? (0, x.b)(M) : void 0, I[11] = M, I[12] = P, I[13] = e) : e = I[13], t = e, O || "notify_trusted_contact_us5" !== P && U?.trustedContactsOptedOutAt === !0) {
                        v = null;
                        break e
                    }
                    a = Y,
                    r = "w-full bg-surface",
                    o = B,
                    f = function(e) {
                        let {
                            disclaimerType: a,
                            intl: t,
                            trustedContactName: i
                        } = e, n = e => `**${t.formatMessage({id:"codex.chatgpt.trustedContactDisclaimer.addTrustedContactTitle",defaultMessage:"Would it help to have extra support?",description:"Title on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex."})}**

${e}`;
                        switch (a) {
                            case "add_trusted_contact_us4":
                                return n(t.formatMessage({
                                    id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactUs4Body",
                                    defaultMessage: "Adding a trusted contact helps make it easier to connect with someone you trust, if you ever need extra support",
                                    description: "Body copy shown on the add_trusted_contact_us4 ChatGPT trusted-contact disclaimer card in Codex."
                                }));
                            case "add_trusted_contact_us5":
                                return n(t.formatMessage({
                                    id: "codex.chatgpt.trustedContactDisclaimer.addTrustedContactUs5Body",
                                    defaultMessage: "Adding a trusted contact can make it easier for someone you trust to be there for you when things feel hard",
                                    description: "Body copy shown on the add_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex."
                                }));
                            case "notify_trusted_contact_us5":
                                return `**${t.formatMessage({id:"codex.chatgpt.trustedContactDisclaimer.notifyTrustedContactTitle",defaultMessage:"It might help to reach out to {trustedContactName}",description:"Title shown on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. {trustedContactName} is the user's trusted contact name."},{trustedContactName:i})}**

${t.formatMessage({id:"codex.chatgpt.trustedContactDisclaimer.notifyTrustedContactBody",defaultMessage:"{trustedContactName} is your trusted contact — someone you've chosen for extra support. We may send them a note to encourage them to check in with you. We recommend that you reach out to them as well.",description:"Body copy shown on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. {trustedContactName} is the user's trusted contact name."},{trustedContactName:i})}`
                        }
                    }({
                        disclaimerType: P,
                        intl: D,
                        trustedContactName: i
                    })
                }
                I[0] = M, I[1] = P, I[2] = D, I[3] = O, I[4] = U?.trustedContactsOptedOutAt, I[5] = a, I[6] = t, I[7] = r, I[8] = o, I[9] = f, I[10] = v
            } else a = I[5], t = I[6], r = I[7], o = I[8], f = I[9], v = I[10];
            return v !== Symbol.for("react.early_return_sentinel") ? v : (I[14] !== P || I[15] !== E || I[16] !== t || I[17] !== N ? (T = "notify_trusted_contact_us5" === P ? null == t || null == E ? (0, i.jsx)(p.a, {
                radius: "full",
                disabled: !0,
                children: (0, i.jsx)(d.a, {
                    id: "codex.chatgpt.trustedContactDisclaimer.sendPersonalNote",
                    defaultMessage: "Send a personal note",
                    description: "Primary action on the notification warning, disabled when no contact address is available."
                })
            }) : (0, i.jsx)(_.a, {
                href: t,
                initiator: "markdown_link_click",
                isBrowserEnabled: !1,
                originHostId: E,
                className: "inline-flex cursor-interaction rounded-full bg-primary-solid px-4 py-1.5 text-sm leading-[18px] text-primary-solid hover:bg-text/80",
                onClickCapture: () => {
                    (0, y.a)(N, s.k, {
                        action: "CHATGPT_TRUSTED_CONTACT_NOTIFICATION_WARNING_ACTION_SEND_PERSONAL_NOTE_CLICKED",
                        entryPoint: "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_NOTIFICATION_WARNING"
                    })
                },
                children: (0, i.jsx)(d.a, {
                    id: "codex.chatgpt.trustedContactDisclaimer.sendPersonalNote",
                    defaultMessage: "Send a personal note",
                    description: "Primary action on the notify_trusted_contact_us5 ChatGPT trusted-contact disclaimer card in Codex. Opens the user's email or SMS app to compose a message to the trusted contact."
                })
            }) : (0, i.jsxs)("div", {
                className: "flex flex-wrap gap-3",
                children: [(0, i.jsx)(p.a, {
                    radius: "full",
                    onClick: () => {
                        (0, b.f)(N, z, {
                            initialDialog: "intro",
                            entryPoint: "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER",
                            onSuccess: () => R(!0)
                        })
                    },
                    children: (0, i.jsx)(d.a, {
                        id: "codex.chatgpt.trustedContactDisclaimer.learnMore",
                        defaultMessage: "Learn more",
                        description: "Primary action label on the add_trusted_contact_* ChatGPT trusted-contact disclaimer cards in Codex."
                    })
                }), (0, i.jsx)(p.a, {
                    radius: "full",
                    color: "secondary",
                    onClick: () => {
                        (0, y.a)(N, s.d, {
                            entryPoint: "CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_IN_CHAT_DISCLAIMER",
                            step: "CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_NO_THANKS"
                        }), F(!0)
                    },
                    children: (0, i.jsx)(d.a, {
                        id: "message.trustedContactDisclaimer.close",
                        defaultMessage: "Close",
                        description: "Secondary button on the in-thread trusted contact card. Opens a confirmation dialog to dismiss or decline the trusted-contact prompt."
                    })
                })]
            }), I[14] = P, I[15] = E, I[16] = t, I[17] = N, I[18] = T) : T = I[18], I[19] === Symbol.for("react.memo_cache_sentinel") ? (k = (0, i.jsx)("span", {
                className: "flex size-8 shrink-0 items-center justify-center rounded-full bg-surface-secondary/92 text-default",
                children: (0, i.jsx)(m.a, {
                    asset: W.a
                })
            }), I[19] = k) : k = I[19], I[20] !== a || I[21] !== A || I[22] !== L || I[23] !== r || I[24] !== o || I[25] !== f || I[26] !== T ? (C = (0, i.jsx)(a, {
                className: r,
                components: o,
                content: f,
                conversationId: A,
                onRendered: L,
                footer: T,
                icon: k
            }), I[20] = a, I[21] = A, I[22] = L, I[23] = r, I[24] = o, I[25] = f, I[26] = T, I[27] = C) : C = I[27], I[28] !== G || I[29] !== q ? (S = G ? (0, i.jsx)(H.TrustedContactNoThanksDialog, {
                open: !0,
                onClose: () => F(!1),
                onDone: () => {
                    F(!1), R(!0)
                },
                onOpenSettings: () => {
                    q("/settings/trusted-contact")
                }
            }) : null, I[28] = G, I[29] = q, I[30] = S) : S = I[30], I[31] !== C || I[32] !== S ? (j = (0, i.jsxs)(i.Fragment, {
                children: [C, S]
            }), I[31] = C, I[32] = S, I[33] = j) : j = I[33], j)
        }
    }),
    FnQ: (function(e, a, t) {
        var i = t("A"),
            n = t("Qo"),
            s = t("Xnl"),
            r = t("aM"),
            o = t("zd"),
            l = t("Wf"),
            c = t("oy"),
            d = t("Kwu"),
            h = t("g2"),
            u = t("ygO"),
            g = t("nhm"),
            p = t("JN"),
            m = t("mU"),
            f = t("SGs"),
            b = t("OW"),
            v = t("Rln");

        function y(e) {
            let a, t = (0, n.c)(2),
                r = (0, s.A)(v.a);
            return e.open && "allowed" === r.status ? (t[0] !== e ? (a = (0, i.jsx)(w, {
                ...e
            }), t[0] = e, t[1] = a) : a = t[1], a) : null
        }

        function w(e) {
            let a, t, y, w, T, x, k, C, S, j, I, A, M, P, E, L, N = (0, n.c)(49),
                {
                    open: D,
                    onClose: O,
                    onDone: R,
                    onOpenSettings: G,
                    dismissOnDoneWithoutOptOut: H
                } = e,
                F = void 0 !== H && H,
                W = (0, s.z)(b.a),
                U = (0, l.a)(),
                z = (0, o.useId)(),
                [B, q] = (0, o.useState)(!1),
                [Y, K] = (0, o.useState)(!1),
                V = (0, s.A)(v.a),
                [$] = (0, o.useState)(V);
            N[0] !== $.accountId || N[1] !== $.status || N[2] !== $.userId || N[3] !== W ? (a = function() {
                let e = W.get(v.a);
                return "allowed" === $.status && "allowed" === e.status && $.userId === e.userId && $.accountId === e.accountId
            }, N[0] = $.accountId, N[1] = $.status, N[2] = $.userId, N[3] = W, N[4] = a) : a = N[4];
            let Q = a;
            N[5] !== O ? (t = function() {
                q(!1), O()
            }, N[5] = O, N[6] = t) : t = N[6];
            let X = t;
            N[7] !== X || N[8] !== F || N[9] !== B || N[10] !== U || N[11] !== Q || N[12] !== R || N[13] !== $ || N[14] !== Y || N[15] !== W ? (y = async function() {
                if (Y || !Q()) return;
                if (!B) return void(F ? R() : X());
                if ("allowed" !== $.status) return;
                let {
                    accountId: e
                } = $, a = W.query.snapshot(h.p);
                K(!0);
                try {
                    if (await a.cancel(), !Q()) return void K(!1);
                    let t = null == e ? void 0 : {
                        "ChatGPT-Account-ID": e,
                        [r._b]: e
                    };
                    if (await d.Request.safePatch("/settings/account_user_setting", {
                            additionalHeaders: t,
                            parameters: {
                                query: {
                                    feature: "trusted_contacts_opted_out_at",
                                    value: !0
                                }
                            }
                        }), !Q()) {
                        a.invalidate(), K(!1);
                        return
                    }
                    a.setData(_), a.invalidate(), q(!1), R()
                } catch {
                    if (!Q()) return void K(!1);
                    W.get(f.h).danger(U.formatMessage({
                        id: "codex.chatgpt.trustedContactDisclaimer.optOutError",
                        defaultMessage: "Could not update trusted contact settings",
                        description: "Error toast shown when saving the Don't ask me again choice for trusted-contact prompts fails. The confirmation remains open so the user can retry."
                    }), {
                        errorAnalytics: {
                            toastId: "codex.chatgpt.trustedContactDisclaimer.optOutError"
                        }
                    })
                }
                K(!1)
            }, N[7] = X, N[8] = F, N[9] = B, N[10] = U, N[11] = Q, N[12] = R, N[13] = $, N[14] = Y, N[15] = W, N[16] = y) : y = N[16];
            let Z = y,
                J = D && "allowed" === $.status && "allowed" === V.status && V.userId === $.userId && V.accountId === $.accountId;
            return N[17] !== X ? (w = e => {
                e || X()
            }, N[17] = X, N[18] = w) : w = N[18], N[19] !== Z ? (T = e => {
                e.preventDefault(), Z()
            }, N[19] = Z, N[20] = T) : T = N[20], N[21] === Symbol.for("react.memo_cache_sentinel") ? (x = (0, i.jsx)(p.e, {
                children: (0, i.jsx)(c.a, {
                    id: "message.trustedContactNoThanksModal.title",
                    defaultMessage: "Thanks for letting us know",
                    description: "Title of the modal shown after a user declines the trusted-contact disclaimer."
                })
            }), N[21] = x) : x = N[21], N[22] !== X || N[23] !== G ? (k = (0, i.jsx)("p", {
                children: (0, i.jsx)(c.a, {
                    id: "message.trustedContactNoThanksModal.body",
                    defaultMessage: "If you change your mind, you can add a trusted contact from your <settingsLink>settings</settingsLink>.",
                    description: "Body copy in the decline modal. The settingsLink opens Trusted contact settings.",
                    values: {
                        settingsLink: e => (0, i.jsx)("button", {
                            className: "cursor-interaction underline",
                            type: "button",
                            onClick: () => {
                                X(), G()
                            },
                            children: e
                        })
                    }
                })
            }), N[22] = X, N[23] = G, N[24] = k) : k = N[24], N[25] !== z || N[26] !== B || N[27] !== Y ? (C = (0, i.jsx)(g.a, {
                id: z,
                checked: B,
                disabled: Y,
                onCheckedChange: q
            }), N[25] = z, N[26] = B, N[27] = Y, N[28] = C) : C = N[28], N[29] === Symbol.for("react.memo_cache_sentinel") ? (S = (0, i.jsx)(c.a, {
                id: "message.trustedContactNoThanksModal.checkboxLabel",
                defaultMessage: "Don't ask me again",
                description: "Checkbox label in the trusted-contact decline modal. When checked, future trusted-contact prompts are disabled."
            }), N[29] = S) : S = N[29], N[30] !== z ? (j = (0, i.jsx)("label", {
                className: "select-none",
                htmlFor: z,
                children: S
            }), N[30] = z, N[31] = j) : j = N[31], N[32] !== C || N[33] !== j ? (I = (0, i.jsxs)("div", {
                className: "relative flex items-center gap-3",
                children: [C, j]
            }), N[32] = C, N[33] = j, N[34] = I) : I = N[34], N[35] !== I || N[36] !== k ? (A = (0, i.jsxs)(m.e, {
                children: [x, k, I]
            }), N[35] = I, N[36] = k, N[37] = A) : A = N[37], N[38] === Symbol.for("react.memo_cache_sentinel") ? (M = (0, i.jsx)(c.a, {
                id: "message.trustedContactNoThanksModal.done",
                defaultMessage: "Done",
                description: "Primary action button in the trusted-contact decline modal. Confirms the dismissal flow."
            }), N[38] = M) : M = N[38], N[39] !== Y ? (P = (0, i.jsx)(m.e, {
                children: (0, i.jsx)(m.c, {
                    children: (0, i.jsx)(u.a, {
                        type: "submit",
                        radius: "full",
                        loading: Y,
                        children: M
                    })
                })
            }), N[39] = Y, N[40] = P) : P = N[40], N[41] !== A || N[42] !== P || N[43] !== T ? (E = (0, i.jsxs)(m.b, {
                as: "form",
                onSubmit: T,
                children: [A, P]
            }), N[41] = A, N[42] = P, N[43] = T, N[44] = E) : E = N[44], N[45] !== E || N[46] !== J || N[47] !== w ? (L = (0, i.jsx)(p.b, {
                open: J,
                size: "wide",
                onOpenChange: w,
                children: E
            }), N[45] = E, N[46] = J, N[47] = w, N[48] = L) : L = N[48], L
        }

        function _(e) {
            return null == e ? e : {
                ...e,
                trustedContactsOptedOutAt: !0
            }
        }
        t.d(a, {
            TrustedContactNoThanksDialog: () => y
        })
    }),
    fww: (function(e, a, t) {
        var i = t("SGs"),
            n = t("xyg"),
            s = t("dd"),
            r = t("urz"),
            o = t("taW"),
            l = t("rfh");
        async function c(e, a) {
            let {
                images: t,
                downloadSources: c,
                intl: d,
                serverConversationId: h,
                isParagen: u = !1,
                logIndividualDownloads: g = !0
            } = a, p = 0;
            for (let [a, m] of t.entries()) {
                if (null == m.src || "completed" !== m.status || m.isPreview) continue;
                null != h && u && (0, l.b)(e, h, m, "download", "paragen");
                let f = c?.get(m.id) ?? m.src;
                null != h && (f = await (0, n.e)({
                    conversationId: null,
                    absoluteImageFilePath: null,
                    hostId: "local",
                    imageAssetResolver: (0, o.c)(h),
                    queryClient: e.queryClient,
                    src: f
                }));
                let b = (0, s.a)(m).downloadExtension ?? (0, r.c)(f ?? m.src) ?? "png",
                    v = (0, r.b)(d, b, {
                        title: m.chatGptDisplayTitle,
                        gifSpeed: m.gifPlayback?.speed
                    }),
                    y = !1;
                if (null != f && await (0, r.d)({
                        downloadSrc: f,
                        onDownloaded: () => {
                            y = !0, null != h && !u && g && (0, l.b)(e, h, m, "download")
                        },
                        suggestedFilename: t.length > 1 ? v.replace(/\.[^.]+$/, `-${a+1}.${b}`) : v
                    })) {
                    if (!y) return "cancelled";
                    p++;
                    continue
                }
                return e.get(i.h).danger(d.formatMessage({
                    id: "imageSidePanel.downloadFailure",
                    defaultMessage: "Could not download image",
                    description: "Error shown when the image toolbar download fails."
                }), {
                    errorAnalytics: {
                        toastId: "imageSidePanel.downloadFailure"
                    }
                }), "failed"
            }
            return p > 0 ? "downloaded" : "empty"
        }
        t.d(a, {
            a: () => c
        })
    }),
    cQW: (function(e, a, t) {
        var i = t("wwN"),
            n = t("yG"),
            s = t("r9i");

        function r(e, a, t) {
            return {
                queryKey: ["chatgpt-image-share", a, t.item.id, t.item.src, t.additionalImages?.map(e => [e.id, e.src])],
                queryFn: async () => {
                    let r = await (0, s.c)({
                        additionalImages: t.additionalImages,
                        conversationId: a,
                        image: t.item
                    });
                    return t.isDirectLightboxShare && (0, n.a)(e, i.d, {}), r
                },
                staleTime: 1 / 0
            }
        }
        t.d(a, {
            a: () => r
        })
    }),
    Tyw: (function(e, a, t) {
        var i = t("hKY"),
            n = t("yG");

        function s() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "https://chatgpt.com/s/native-image-share-capability-check";
            if ("function" != typeof navigator.share) return !1;
            if ("function" != typeof navigator.canShare) return !0;
            try {
                return navigator.canShare({
                    url: e
                })
            } catch {
                return !1
            }
        }
        async function r(e, a, t, r) {
            let o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "CHATGPT_SHARE_FLOW_SOURCE_IMAGE_PREVIEW_INLINE_ACTION",
                l = {
                    url: a.shareLinkUrl
                };
            if (a.isWorkspaceOnly || !s(l.url)) return "failed";
            let c = {
                actor: "CHATGPT_SHARE_FLOW_ACTOR_SHARER",
                attachmentType: "CHATGPT_SHARE_FLOW_ATTACHMENT_TYPE_IMAGE_SHARE",
                contentType: "CHATGPT_SHARE_FLOW_CONTENT_TYPE_POST_SLICE",
                source: o,
                sheetType: "CHATGPT_SHARE_FLOW_SHEET_TYPE_SYSTEM",
                conversationId: t,
                shareSessionId: r,
                shareId: a.shareLinkId
            };
            try {
                let a = navigator.share(l);
                return (0, n.a)(e, i.h, {
                    ...c,
                    action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHEET_OPENED"
                }), await a, (0, n.a)(e, i.h, {
                    ...c,
                    action: "CHATGPT_SHARE_FLOW_ACTION_SYSTEM_SHARE_COMPLETED"
                }), "shared"
            } catch (t) {
                let a = t instanceof Error && "AbortError" === t.name;
                return (0, n.a)(e, i.h, {
                    ...c,
                    action: a ? "CHATGPT_SHARE_FLOW_ACTION_DISMISSED" : "CHATGPT_SHARE_FLOW_ACTION_FAILED",
                    failureReason: a ? void 0 : "CHATGPT_SHARE_FLOW_FAILURE_REASON_UNSPECIFIED"
                }), a ? "cancelled" : "failed"
            }
        }
        t.d(a, {
            a: () => s,
            b: () => r
        })
    }),
    aPi: (function(e, a, t) {
        var i = t("A"),
            n = t("Qo"),
            s = t("Xnl"),
            r = t("Sd"),
            o = t("uHE"),
            l = t("tSE");

        function c(e) {
            let a, t, c = (0, n.c)(7),
                {
                    children: d
                } = e,
                h = (0, s.z)(l.a);
            if ("home" === h.value.routeKind) {
                let e;
                return c[0] !== d ? (e = (0, i.jsx)(o.a, {
                    children: d
                }), c[0] = d, c[1] = e) : e = c[1], e
            }
            c[2] !== h ? (a = (0, r.n)(h)?.getOwnValue(r.a) ?? (0, r.c)(h.value, void 0, h.value.clientThreadId), c[2] = h, c[3] = a) : a = c[3];
            let u = a;
            return c[4] !== d || c[5] !== u ? (t = (0, i.jsx)(s.b, {
                scope: r.a,
                value: u,
                children: d
            }), c[4] = d, c[5] = u, c[6] = t) : t = c[6], t
        }
        t.d(a, {
            a: () => c
        })
    }),
    sX4: (function(e, a, t) {
        t.d(a, {
            a: () => g
        });
        var i = t("A"),
            n = t("Qo"),
            s = t("on"),
            r = t("Wf"),
            o = t("ygO"),
            l = t("JN"),
            c = t("mU"),
            d = t("HOL"),
            h = t("CsD"),
            u = t("Z5T");

        function g(e) {
            let a, t, g, p, m, f, b, v, y = (0, n.c)(42),
                {
                    children: w,
                    headerContent: _,
                    headerActions: T,
                    footer: x,
                    collapseEmptyContent: k,
                    isDismissalDisabled: C,
                    subtitle: S,
                    title: j,
                    onClose: I,
                    onOpenAutoFocus: A,
                    onCloseAutoFocus: M,
                    onPortalContainerChange: P,
                    onSubmit: E,
                    size: L,
                    variant: N,
                    presentation: D
                } = e,
                O = void 0 !== k && k,
                R = void 0 !== C && C,
                G = (0, r.a)(),
                H = "imageSheet" === D;
            y[0] !== T || y[1] !== G || y[2] !== R || y[3] !== H || y[4] !== I || y[5] !== S || y[6] !== j ? (a = H ? (0, i.jsxs)("div", {
                className: (0, s.b)("shrink-0", "imageSheetHeader-vPz2gu"),
                children: [(0, i.jsx)(l.e, {
                    className: "imageSheetTitle-iMmEfF",
                    children: j
                }), null != S && (0, i.jsx)(l.d, {
                    className: "imageSheetSubtitle-E3o3_v",
                    children: S
                }), !R && (0, i.jsx)(o.a, {
                    unstyled: !0,
                    className: "imageSheetClose-msZEpI",
                    "aria-label": G.formatMessage({
                        id: "codex.dialog.closeButton",
                        defaultMessage: "Close dialog",
                        description: "Accessible label for the button that closes a dialog"
                    }),
                    onClick: e => {
                        e.stopPropagation(), I()
                    },
                    children: (0, i.jsx)(d.a, {
                        asset: u.a
                    })
                })]
            }) : (0, i.jsxs)("div", {
                className: "mb-2 flex items-center gap-2 pe-8",
                children: [(0, i.jsx)(c.d, {
                    className: "min-w-0 flex-1",
                    title: (0, i.jsx)(l.e, {
                        className: "contents",
                        children: j
                    }),
                    titleClassName: "truncate",
                    subtitle: null == S ? void 0 : (0, i.jsx)(l.d, {
                        className: "contents",
                        children: S
                    })
                }), T]
            }), y[0] = T, y[1] = G, y[2] = R, y[3] = H, y[4] = I, y[5] = S, y[6] = j, y[7] = a) : a = y[7], y[8] !== _ || y[9] !== a ? (t = (0, i.jsxs)(i.Fragment, {
                children: [a, _]
            }), y[8] = _, y[9] = a, y[10] = t) : t = y[10];
            let F = t;
            y[11] !== S ? (g = null == S ? {
                "aria-describedby": void 0
            } : {}, y[11] = S, y[12] = g) : g = y[12], y[13] !== A || y[14] !== P ? (p = e => {
                e.currentTarget instanceof HTMLElement && P?.(e.currentTarget), A?.(e)
            }, y[13] = A, y[14] = P, y[15] = p) : p = y[15], y[16] !== M || y[17] !== g || y[18] !== p ? (m = {
                ...g,
                shouldStopPointerDownPropagation: !1,
                onCloseAutoFocus: M,
                onOpenAutoFocus: p
            }, y[16] = M, y[17] = g, y[18] = p, y[19] = m) : m = y[19];
            let W = !R && !H,
                U = N ?? "opaque",
                z = H ? "imageSheetSurface-pAxv7i" : void 0,
                B = H ? "imageSheetOverlay-Da_SGi" : void 0;
            return y[20] !== R || y[21] !== I ? (f = e => {
                e || R || I()
            }, y[20] = R, y[21] = I, y[22] = f) : f = y[22], y[23] !== w || y[24] !== O || y[25] !== x || y[26] !== F || y[27] !== R || y[28] !== H || y[29] !== E ? (b = H ? (0, i.jsxs)(c.b, {
                as: null == E ? "div" : "form",
                variant: "chatgpt",
                className: (0, s.b)("imageSheetBody-YQy31R", "min-h-0"),
                onSubmit: null == E ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), R || E()
                },
                children: [(0, i.jsxs)("div", {
                    className: "flex min-h-0 flex-col",
                    children: [F, w]
                }), (0, i.jsx)("div", {
                    className: "mt-12 shrink-0",
                    children: x
                })]
            }) : (0, i.jsx)(h.a, {
                collapseEmptyContent: O,
                header: F,
                footer: x,
                onSubmit: null == E ? void 0 : e => {
                    e.preventDefault(), e.stopPropagation(), R || E()
                },
                children: w
            }), y[23] = w, y[24] = O, y[25] = x, y[26] = F, y[27] = R, y[28] = H, y[29] = E, y[30] = b) : b = y[30], y[31] !== R || y[32] !== H || y[33] !== L || y[34] !== z || y[35] !== B || y[36] !== f || y[37] !== b || y[38] !== m || y[39] !== W || y[40] !== U ? (v = (0, i.jsx)(l.b, {
                open: !0,
                contentOverflow: "visible",
                contentProps: m,
                shouldIgnoreClickOutside: R,
                showDialogClose: W,
                size: L,
                variant: U,
                unstyledContent: H,
                contentClassName: z,
                overlayClassName: B,
                onOpenChange: f,
                children: b
            }), y[31] = R, y[32] = H, y[33] = L, y[34] = z, y[35] = B, y[36] = f, y[37] = b, y[38] = m, y[39] = W, y[40] = U, y[41] = v) : v = y[41], v
        }
    }),
    TnP: (function(e, a, t) {
        var i = t("A"),
            n = t("Qo"),
            s = t("Wf"),
            r = t("oy"),
            o = t("ygO"),
            l = t("mU"),
            c = t("bf"),
            d = t("evw"),
            h = t("zLI"),
            u = t("sX4");

        function g(e) {
            let a, t, g, p, m, f, b, v = (0, n.c)(37),
                {
                    accessControls: y,
                    actionDisabled: w,
                    actionLabel: _,
                    audience: T,
                    error: x,
                    footer: k,
                    info: C,
                    isBusy: S,
                    isDismissalDisabled: j,
                    notices: I,
                    onClose: A,
                    onOpenAutoFocus: M,
                    onPortalContainerChange: P,
                    onSubmit: E,
                    preview: L,
                    presentation: N,
                    subtitle: D,
                    size: O,
                    threadTitle: R,
                    title: G
                } = e,
                H = (0, s.a)();
            v[0] !== R ? (a = R?.trim(), v[0] = R, v[1] = a) : a = v[1];
            let F = a;
            v[2] !== S ? (t = S ? null : (0, i.jsx)(c.ve, {}), v[2] = S, v[3] = t) : t = v[3], v[4] !== _ || v[5] !== t ? (g = (0, i.jsxs)(i.Fragment, {
                children: [t, _]
            }), v[4] = _, v[5] = t, v[6] = g) : g = v[6];
            let W = g;
            if (x?.preventsSharing) {
                let e;
                v[7] !== x.onRetry ? (e = null != x.onRetry ? (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.retry",
                    defaultMessage: "Try again",
                    description: "Button in a thread sharing dialog after preparing the share link fails. Retries preparing the chat without publishing it."
                }) : (0, i.jsx)(r.a, {
                    id: "shareDialog.thread.close",
                    defaultMessage: "Close",
                    description: "Button in a thread sharing dialog that cannot prepare a share link. Closes the failed dialog so the user can reopen sharing."
                }), v[7] = x.onRetry, v[8] = e) : e = v[8], W = e
            }
            let U = !x?.preventsSharing && w;
            v[9] !== W || v[10] !== S || v[11] !== U ? (p = (0, i.jsx)(o.a, {
                color: "outline",
                disabled: U,
                loading: S,
                size: "medium",
                type: "submit",
                children: W
            }), v[9] = W, v[10] = S, v[11] = U, v[12] = p) : p = v[12];
            let z = p;
            v[13] !== F || v[14] !== G ? (m = G ?? (F ? (0, i.jsx)(r.a, {
                id: "shareDialog.thread.namedTitle",
                defaultMessage: "Share {threadTitle}",
                description: "Title of the ChatGPT or Codex thread sharing dialog. threadTitle is the user-provided name of the chat and may be truncated to fit the dialog header.",
                values: {
                    threadTitle: F
                }
            }) : (0, i.jsx)(r.a, {
                id: "shareDialog.thread.title",
                defaultMessage: "Share chat",
                description: "Title of the thread sharing dialog when the ChatGPT or Codex chat has no name yet."
            })), v[13] = F, v[14] = G, v[15] = m) : m = v[15];
            let B = x?.preventsSharing ? x.onRetry ?? A : E,
                q = x?.preventsSharing ? z : k ?? z;
            return v[16] !== y || v[17] !== T || v[18] !== x || v[19] !== C || v[20] !== H || v[21] !== I || v[22] !== N || v[23] !== L ? (f = x?.preventsSharing ? (0, i.jsx)(l.e, {
                className: "py-10",
                children: (0, i.jsx)("div", {
                    role: "alert",
                    children: (0, i.jsx)(d.a, {
                        children: x.content
                    })
                })
            }) : (0, i.jsxs)(i.Fragment, {
                children: ["imageSheet" === N ? L : (0, i.jsx)(l.e, {
                    children: L
                }), C, I, y ?? (null == T ? null : (0, i.jsx)(l.e, {
                    children: (0, i.jsx)("div", {
                        className: "text-sm text-codex-description",
                        children: T
                    })
                })), null == x ? null : (0, i.jsx)(l.e, {
                    children: (0, i.jsx)("div", {
                        className: "text-sm text-danger",
                        role: "alert",
                        children: x.content
                    })
                }), x?.copyUrl == null ? null : (0, i.jsx)(l.e, {
                    children: (0, i.jsx)(h.a, {
                        "aria-label": H.formatMessage({
                            id: "shareDialog.thread.linkLabel",
                            defaultMessage: "Share link",
                            description: "Accessible label for the read-only URL field in a ChatGPT or Codex thread sharing dialog. The URL can be manually selected and copied if clipboard access fails."
                        }),
                        readOnly: !0,
                        value: x.copyUrl
                    })
                })]
            }), v[16] = y, v[17] = T, v[18] = x, v[19] = C, v[20] = H, v[21] = I, v[22] = N, v[23] = L, v[24] = f) : f = v[24], v[25] !== j || v[26] !== A || v[27] !== M || v[28] !== P || v[29] !== N || v[30] !== O || v[31] !== D || v[32] !== m || v[33] !== B || v[34] !== q || v[35] !== f ? (b = (0, i.jsx)(u.a, {
                title: m,
                subtitle: D,
                isDismissalDisabled: j,
                onClose: A,
                onOpenAutoFocus: M,
                onPortalContainerChange: P,
                onSubmit: B,
                size: O,
                presentation: N,
                footer: q,
                children: f
            }), v[25] = j, v[26] = A, v[27] = M, v[28] = P, v[29] = N, v[30] = O, v[31] = D, v[32] = m, v[33] = B, v[34] = q, v[35] = f, v[36] = b) : b = v[36], b
        }
        t.d(a, {
            a: () => g
        })
    }),
    qKA: (function(e, a, t) {
        t.d(a, {
            a: () => g
        });
        var i = t("A"),
            n = t("Qo"),
            s = t("on"),
            r = t("Xnl"),
            o = t("Wf"),
            l = t("oy"),
            c = t("Qg"),
            d = t("RN"),
            h = t("O6");
        let u = {
            default: void 0,
            transcript: void 0,
            image: "size-full",
            response: "p-5"
        };

        function g(e) {
            let a, t, c, g, m, f = (0, n.c)(17),
                {
                    ariaLabel: b,
                    children: v,
                    classicImagePreviewEligible: y,
                    isLoading: w,
                    presentation: _,
                    variant: T
                } = e,
                x = void 0 !== w && w,
                k = void 0 === T ? "default" : T,
                C = (0, o.a)();
            f[0] === Symbol.for("react.memo_cache_sentinel") ? (a = {
                layer: "3136899520",
                parameter: "classic_image_preview"
            }, f[0] = a) : a = f[0];
            let S = (0, r.x)(void 0 !== y && y ? h.b : null, a) ? "border-transparent bg-transparent" : "border-default bg-surface",
                j = "transcript" === k ? "h-auto" : "aspect-[1200/630]";
            f[1] !== S || f[2] !== j ? (t = (0, s.b)("relative min-h-56 overflow-hidden rounded-lg border select-none", S, j), f[1] = S, f[2] = j, f[3] = t) : t = f[3];
            let I = t;
            return "imageSheet" === _ && (I = "imageSheetPreview-rzCCMf"), f[4] !== b || f[5] !== C || f[6] !== k ? (c = b ?? C.formatMessage(p["transcript" === k ? "default" : k]), f[4] = b, f[5] = C, f[6] = k, f[7] = c) : c = f[7], f[8] !== v || f[9] !== x || f[10] !== _ || f[11] !== k ? (g = x ? (0, i.jsxs)("div", {
                className: "flex h-full items-center justify-center gap-2 text-sm text-secondary",
                children: [(0, i.jsx)(d.a, {
                    className: "icon-sm"
                }), (0, i.jsx)(l.a, {
                    ...p.loading
                })]
            }) : (0, i.jsxs)("div", {
                "aria-hidden": !0,
                className: u[k],
                inert: !0,
                children: [v, "imageSheet" !== _ && ("default" === k || "response" === k) && (0, i.jsx)("div", {
                    className: "pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
                })]
            }), f[8] = v, f[9] = x, f[10] = _, f[11] = k, f[12] = g) : g = f[12], f[13] !== I || f[14] !== c || f[15] !== g ? (m = (0, i.jsx)("div", {
                className: I,
                role: "img",
                "aria-label": c,
                children: g
            }), f[13] = I, f[14] = c, f[15] = g, f[16] = m) : m = f[16], m
        }
        let p = (0, c.f)({
            default: {
                id: "shareDialog.thread.previewLabel",
                defaultMessage: "Preview of the beginning of the shared chat",
                description: "Accessible description of the non-interactive cropped transcript preview inside a ChatGPT or Codex thread sharing dialog. It shows only the beginning, not the whole shared chat."
            },
            image: {
                id: "shareDialog.image.previewLabel",
                defaultMessage: "Preview of the shared image",
                description: "Accessible description of the non-interactive generated-image preview inside a ChatGPT image sharing dialog."
            },
            loading: {
                id: "shareDialog.thread.previewLoading",
                defaultMessage: "Loading preview…",
                description: "Status in the thread sharing dialog while the beginning of the chat is being prepared for the transcript preview."
            },
            response: {
                id: "shareDialog.response.previewLabel",
                defaultMessage: "Preview of the shared response",
                description: "Accessible description of the non-interactive response preview inside a ChatGPT response sharing dialog."
            }
        })
    })
};